import { spawnSync } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, rmSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';
import puppeteer from './.vendor/reveal-md/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';

const root = process.cwd();
const siteDir = join(root, 'site');
const outputPdf = resolve(root, '..', 'zju-reveal-md-template.pdf');
const width = 1200;
const height = 700;
const assetSettleMs = Number(process.env.PDF_ASSET_SETTLE_MS || 1500);

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
        url: `http://127.0.0.1:${address.port}/index.html?print-pdf`,
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
    const imageUrls = new Set(
      Array.from(document.images)
        .map((img) => img.currentSrc || img.src)
        .filter(Boolean),
    );

    const collectCssUrls = (value) => {
      if (!value || value === 'none') return;
      for (const match of value.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
        imageUrls.add(new URL(match[1], document.baseURI).href);
      }
    };

    for (const element of document.querySelectorAll('*')) {
      collectCssUrls(getComputedStyle(element).backgroundImage);
      collectCssUrls(getComputedStyle(element, '::before').backgroundImage);
      collectCssUrls(getComputedStyle(element, '::after').backgroundImage);
    }

    await Promise.all(Array.from(imageUrls).map(async (url) => {
      const img = new Image();
      img.src = url;
      await new Promise((resolve) => {
        if (img.complete) {
          resolve();
          return;
        }
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      });
      if (typeof img.decode === 'function') {
        await img.decode().catch(() => {});
      }
    }));

    if (document.fonts?.ready) {
      await document.fonts.ready;
    }
  });
}

async function main() {
  buildStaticSite();

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
    await page.emulateMediaType('print');
    await waitForAssets(page);

    await page.addStyleTag({
      content: `
        @page {
          size: ${width}px ${height}px;
          margin: 0;
        }
        html, body {
          width: ${width}px !important;
          height: ${height}px !important;
          margin: 0 !important;
          padding: 0 !important;
          background: #fff !important;
        }
        .reveal,
        .reveal .slides,
        .reveal .slides section,
        .reveal .pdf-page {
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .reveal .pdf-page {
          width: ${width}px !important;
          height: ${height}px !important;
          overflow: hidden !important;
        }
        .reveal .slides section {
          width: ${width}px !important;
          height: ${height}px !important;
          min-height: ${height}px !important;
          left: 0 !important;
          top: 0 !important;
        }
        html.print-pdf .slide-shell {
          height: ${height}px !important;
          min-height: ${height}px !important;
          padding-bottom: 0 !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
        }
      `,
    });
    await waitForAssets(page);

    await page.evaluate(({ width: slideWidth, height: slideHeight }) => {
      Reveal.configure({
        controls: false,
        progress: false,
        margin: 0,
        transition: 'none',
        backgroundTransition: 'none',
        center: false,
        slideNumber: 'c/t',
        width: slideWidth,
        height: slideHeight,
      });
      Reveal.layout();

      document.querySelectorAll('.pdf-page').forEach((pageEl) => {
        pageEl.style.setProperty('width', `${slideWidth}px`, 'important');
        pageEl.style.setProperty('height', `${slideHeight}px`, 'important');
        pageEl.style.setProperty('margin', '0', 'important');
        pageEl.style.setProperty('padding', '0', 'important');
        pageEl.style.setProperty('overflow', 'hidden', 'important');
      });

      document.querySelectorAll('.pdf-page > section').forEach((section) => {
        section.style.setProperty('left', '0', 'important');
        section.style.setProperty('top', '0', 'important');
        section.style.setProperty('width', `${slideWidth}px`, 'important');
        section.style.setProperty('height', `${slideHeight}px`, 'important');
        section.style.setProperty('min-height', `${slideHeight}px`, 'important');
      });
    }, { width, height });

    await page.evaluate(() => new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    }));
    await new Promise((resolve) => setTimeout(resolve, assetSettleMs));

    await page.pdf({
      path: outputPdf,
      width: `${width}px`,
      height: `${height}px`,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      printBackground: true,
      preferCSSPageSize: true,
      scale: 1,
    });

    console.log(`Exported vector PDF to ${outputPdf}`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
