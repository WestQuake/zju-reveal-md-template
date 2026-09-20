.PHONY: live build pdf pdf-raster clean ensure-deps
.DEFAULT_GOAL := live

TEMPLATE_ROOT := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

ensure-deps:
	@powershell.exe -NoProfile -Command "$$ErrorActionPreference='Stop'; Set-Location -LiteralPath '$(TEMPLATE_ROOT)'; if (-not (Test-Path -LiteralPath '.vendor/reveal-md/node_modules/reveal.js')) { npm install --prefix '.vendor/reveal-md' --no-audit --no-fund }"

live: ensure-deps
	@echo "Previewing template slides..."
	@powershell.exe -NoProfile -Command "$$ErrorActionPreference='Stop'; Set-Location -LiteralPath '$(TEMPLATE_ROOT)'; $$env:NO_UPDATE_NOTIFIER='1'; node .vendor/reveal-md/bin/reveal-md.js main.md -w --scripts https://cdn.tonycrane.cc/heti/heti.js,heti_worker.js --template template.html --assets-dir assets"

build: ensure-deps
	@echo "Building template slides..."
	@powershell.exe -NoProfile -Command "$$ErrorActionPreference='Stop'; Set-Location -LiteralPath '$(TEMPLATE_ROOT)'; $$env:NO_UPDATE_NOTIFIER='1'; node .vendor/reveal-md/bin/reveal-md.js main.md --scripts https://cdn.tonycrane.cc/heti/heti.js,heti_worker.js --template template.html --static site --assets-dir assets; Remove-Item -LiteralPath site/main.html -Force -ErrorAction SilentlyContinue"

pdf: ensure-deps
	@echo "Exporting vector PDF..."
	@powershell.exe -NoProfile -Command "$$ErrorActionPreference='Stop'; Set-Location -LiteralPath '$(TEMPLATE_ROOT)'; $$env:NO_UPDATE_NOTIFIER='1'; node .\\export-pdf-vector.mjs"

pdf-raster: ensure-deps
	@echo "Exporting PDF from slide screenshots..."
	@powershell.exe -NoProfile -Command "$$ErrorActionPreference='Stop'; Set-Location -LiteralPath '$(TEMPLATE_ROOT)'; $$env:NO_UPDATE_NOTIFIER='1'; node .\\export-pdf.mjs"

clean:
	@echo "Cleaning up..."
	@powershell.exe -NoProfile -Command "Set-Location -LiteralPath '$(TEMPLATE_ROOT)'; Remove-Item -LiteralPath site -Recurse -Force -ErrorAction SilentlyContinue"
