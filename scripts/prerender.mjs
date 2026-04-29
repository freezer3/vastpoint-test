/**
 * Post-build prerender: spawns Vite preview server, loads the built SPA in a
 * headless browser, captures the fully-rendered DOM, and writes it back to
 * dist/index.html (and dist/404.html for the GitHub Pages SPA fallback).
 *
 * Why: vastpoint.vc is a client-side React SPA, so LLM and search crawlers
 * see only an empty <div id="root"></div> on first response. After this step
 * runs, the static HTML contains the full Hero (team, thesis, portfolio
 * news ticker), while the React bundle still hydrates and runs client-side
 * for interactive features (mouse-tracking effect, mobile menu).
 */

import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { writeFileSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const PORT = 4173;
const ROUTES = ['/'];

const distDir = resolve(process.cwd(), 'dist');

console.log('[prerender] starting Vite preview server on port', PORT);
const server = await preview({
  preview: { port: PORT, host: '127.0.0.1' },
  build: { outDir: 'dist' },
});

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  for (const route of ROUTES) {
    const url = `http://127.0.0.1:${PORT}${route}`;
    console.log('[prerender] rendering', url);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Give React a moment past initial paint for any deferred work.
    await new Promise((r) => setTimeout(r, 500));

    // Pull the full HTML, including <!DOCTYPE>.
    const html = await page.evaluate(
      () => '<!DOCTYPE html>\n' + document.documentElement.outerHTML,
    );

    const outFile = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    const outPath = resolve(distDir, outFile);
    writeFileSync(outPath, html, 'utf8');
    console.log('[prerender] wrote', outPath, `(${html.length} bytes)`);

    await page.close();
  }

  // 404.html mirrors index.html so GitHub Pages SPA fallback still works for
  // unknown routes (existing behavior preserved from copy404Plugin).
  const indexHtml = readFileSync(resolve(distDir, 'index.html'), 'utf8');
  writeFileSync(resolve(distDir, '404.html'), indexHtml, 'utf8');
  console.log('[prerender] wrote dist/404.html (mirror of index.html)');
} finally {
  await browser.close();
  await new Promise((r) => server.httpServer.close(r));
  console.log('[prerender] done');
}
