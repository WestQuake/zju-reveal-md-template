import { spawnSync } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import puppeteer from './.vendor/reveal-md/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';

const root = process.cwd();
const siteDir = join(root, 'site');
const tempDir = join(root, '.pdf-export');
const shotDir = join(tempDir, 'shots');
const mergeScript = join(tempDir, 'merge_pdf.py');
const outputPdf = resolve(root, '..', 'zju-reveal-md-template.pdf');
const width = 1200;
const height = 700;

const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.gif', 'image/gif'],
  ['.svg', 'image/svg+xml'],
  ['.ico', 'image/x-icon'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
]);

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    stdio: 'inherit',
    shell: false,
    env: { ...process.env, NO_UPDATE_NOTIFIER: '1' },
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed`);
  }
}

function prepareDirs() {
  rmSync(tempDir, { recursive: true, force: true });
  mkdirSync(shotDir, { recursive: true });
}

function buildStaticSite() {
  run('node', [
    '.vendor/reveal-md/bin/reveal-md.js',
    'main.md',
    '--scripts',
    'https://cdn.tonycrane.cc/heti/heti.js,heti_worker.js',
    '--template',
    'template.html',
    '--static',
    'site',
    '--assets-dir',
    'assets',
  ]);

  const duplicateMain = join(siteDir, 'main.html');
  if (existsSync(duplicateMain)) {
    rmSync(duplicateMain, { force: true });
  }
}

function startServer(directory) {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url || '/', 'http://127.0.0.1');
      const pathname = decodeURIComponent(url.pathname);
      const relative = pathname === '/' ? '/index.html' : pathname;
      const filePath = resolve(directory, `.${relative}`);
      if (!filePath.startsWith(resolve(directory))) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }
      const body = await readFile(filePath);
      res.writeHead(200, {
        'Content-Type': mimeTypes.get(extname(filePath).toLowerCase()) || 'application/octet-stream',
      });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  return new Promise((resolveServer) => {
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      resolveServer({
        server,
        url: `http://127.0.0.1:${address.port}/index.html`,
      });
    });
  });
}

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    process.env.PUPPETEER_EXECUTABLE_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  ].filter(Boolean);
  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error('Could not find Chrome or Edge. Set CHROME_PATH if needed.');
  }
  return found;
}

async function waitForAssets(page) {
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    await Promise.all(images.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      });
    }));
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }
  });
}

async function getSlides(page) {
  return page.evaluate(() => {
    const slides = [];
    const topLevel = Array.from(document.querySelectorAll('.slides > section'));
    topLevel.forEach((section, h) => {
      const nested = Array.from(section.querySelectorAll(':scope > section'));
      if (nested.length > 0) {
        nested.forEach((child, v) => {
          if (child instanceof HTMLElement && child.tagName === 'SECTION') {
            slides.push({ h, v });
          }
        });
      } else {
        slides.push({ h, v: 0 });
      }
    });
    return slides;
  });
}

async function waitForCurrentSlide(page) {
  await page.waitForFunction(() => !!document.querySelector('section.present'));
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
}

async function captureSlides(page, indices) {
  const files = [];
  for (let i = 0; i < indices.length; i += 1) {
    const { h, v } = indices[i];
    await page.evaluate(({ h: horizontal, v: vertical }) => {
      Reveal.slide(horizontal, vertical, 0);
      Reveal.layout();
    }, { h, v });
    await waitForCurrentSlide(page);

    const file = join(shotDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
    await page.screenshot({
      path: file,
      clip: { x: 0, y: 0, width, height },
      captureBeyondViewport: false,
    });
    files.push(file);
  }
  return files;
}

function writeMergeScript() {
  rmSync(mergeScript, { force: true });
  const content = `from pathlib import Path
import sys
from PIL import Image

out = Path(sys.argv[1])
paths = [Path(p) for p in sys.argv[2:]]
if not paths:
    raise SystemExit("no images to merge")
images = [Image.open(p).convert("RGB") for p in paths]
images[0].save(out, save_all=True, append_images=images[1:])
`;
  writeFileSync(mergeScript, content, 'utf8');
}

async function main() {
  prepareDirs();
  buildStaticSite();
  writeMergeScript();

  const browserPath = findBrowser();
  const { server, url } = await startServer(siteDir);
  const browser = await puppeteer.launch({
    executablePath: browserPath,
    headless: 'new',
    args: ['--allow-file-access-from-files', '--disable-web-security'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluate(() => {
      Reveal.configure({
        controls: false,
        progress: false,
        margin: 0,
        transition: 'none',
        backgroundTransition: 'none',
        center: false,
        slideNumber: 'c/t',
      });
      Reveal.layout();
    });
    await waitForAssets(page);

    const slides = await getSlides(page);
    const images = await captureSlides(page, slides);

    const merge = spawnSync('python', [mergeScript, outputPdf, ...images], {
      cwd: root,
      stdio: 'inherit',
      shell: false,
      env: process.env,
    });
    if (merge.status !== 0) {
      throw new Error('PDF merge failed');
    }

    console.log(`Exported ${images.length} slides to ${outputPdf}`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
