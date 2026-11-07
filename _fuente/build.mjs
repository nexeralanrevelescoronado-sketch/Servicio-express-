// Genera el sitio estático completo en la raíz del repo.
//
//   node _fuente/build.mjs                                   → usa la URL de Render
//   SITE_URL=https://tudominio.com node _fuente/build.mjs    → cuando tengas dominio
//   GTM_ID=GTM-XXXXXXX node _fuente/build.mjs                → agrega Google Tag Manager (conversiones de Ads)
//
// SITE_URL controla canonical, og:url, JSON-LD, sitemap.xml y robots.txt.
import { mkdirSync, writeFileSync, existsSync, rmSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES } from './data.mjs';
import { renderPage, render404, href } from './template.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = (process.env.SITE_URL || 'https://refrigeradores-express-gdl.onrender.com').replace(/\/+$/, '');
const GTM_ID = process.env.GTM_ID || '';
const TODAY = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);

if (!/^https:\/\/[a-z0-9.-]+$/i.test(SITE_URL)) {
  console.error(`SITE_URL inválida: "${SITE_URL}". Debe ser https://dominio (sin ruta ni diagonal final).`);
  process.exit(1);
}
if (GTM_ID && !/^GTM-[A-Z0-9]+$/.test(GTM_ID)) {
  console.error(`GTM_ID inválido: "${GTM_ID}".`);
  process.exit(1);
}

const hasOg = existsSync(join(ROOT, 'og.jpg'));
const ctx = { siteUrl: SITE_URL, gtmId: GTM_ID, hasOg };
const errors = [];
const warns = [];
const out = (rel, content) => {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
};

// Páginas
const generated = new Map(); // ruta → html
for (const p of PAGES) {
  if (p.slug) rmSync(join(ROOT, p.slug), { recursive: true, force: true });
  const html = renderPage(p, ctx);
  const rel = p.slug ? `${p.slug}/index.html` : 'index.html';
  out(rel, html);
  generated.set(href(p), html);
}
out('404.html', render404(ctx));

// favicon
out(
  'favicon.svg',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="#15171a"/><g stroke="#c4ebfc" stroke-width="5" stroke-linecap="round" fill="none"><path d="M32 12v40M14.7 22l34.6 20M14.7 42l34.6-20"/></g></svg>\n',
);

// sitemap.xml y robots.txt
const urls = PAGES.map((p) => `  <url>\n    <loc>${SITE_URL}${href(p)}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </url>`).join('\n');
out('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
out('robots.txt', `User-agent: *\nAllow: /\nDisallow: /_fuente/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

// ───────────── Verificaciones ─────────────
const seen = { title: new Set(), description: new Set(), h1: new Set() };
for (const p of PAGES) {
  const html = generated.get(href(p));
  const tag = (re) => (html.match(re) || [])[1];
  const title = tag(/<title>([^<]*)<\/title>/);
  const desc = tag(/<meta name="description" content="([^"]*)"/);
  const canonical = tag(/<link rel="canonical" href="([^"]*)"/);
  const h1s = html.match(/<h1[ >]/g) || [];

  if (title.length > 62) warns.push(`${p.key}: title de ${title.length} caracteres (ideal ≤ 60)`);
  if (desc.length > 160) warns.push(`${p.key}: description de ${desc.length} caracteres (ideal ≤ 155)`);
  if (desc.length < 70) warns.push(`${p.key}: description corta (${desc.length})`);
  if (h1s.length !== 1) errors.push(`${p.key}: tiene ${h1s.length} etiquetas <h1> (debe ser 1)`);
  if (canonical !== `${SITE_URL}${href(p)}`) errors.push(`${p.key}: canonical incorrecto (${canonical})`);
  for (const k of ['title', 'description']) {
    const v = k === 'title' ? title : desc;
    if (seen[k].has(v)) errors.push(`${p.key}: ${k} duplicado`);
    seen[k].add(v);
  }
  if (seen.h1.has(p.h1)) errors.push(`${p.key}: h1 duplicado`);
  seen.h1.add(p.h1);

  // JSON-LD válido
  const ld = tag(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  try {
    JSON.parse(ld);
  } catch (e) {
    errors.push(`${p.key}: JSON-LD inválido (${e.message})`);
  }

  // Jerarquía de encabezados (sin saltos mayores a un nivel)
  let prev = 0;
  for (const m of html.matchAll(/<h([1-3])[ >]/g)) {
    const lvl = Number(m[1]);
    if (prev && lvl > prev + 1) errors.push(`${p.key}: salto de encabezado h${prev} → h${lvl}`);
    prev = lvl;
  }

  // Enlaces internos y anclas
  const ids = new Set([...html.matchAll(/ id="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/ href="([^"]+)"/g)) {
    const h = m[1];
    if (/^(https?:|tel:|mailto:)/.test(h)) continue;
    if (h.startsWith('#')) {
      if (!ids.has(h.slice(1))) errors.push(`${p.key}: ancla rota ${h}`);
      continue;
    }
    const [path, hash] = h.split('#');
    const isFile = /\.[a-z0-9]+$/i.test(path);
    const target = isFile ? existsSync(join(ROOT, path)) : generated.has(path);
    if (!target) errors.push(`${p.key}: enlace roto ${h}`);
    else if (hash && !isFile) {
      const tHtml = generated.get(path);
      if (!tHtml.includes(` id="${hash}"`)) errors.push(`${p.key}: ancla ${h} no existe en destino`);
    }
  }
}

// Tamaño
const sizes = PAGES.map((p) => ({ key: p.key, kb: (Buffer.byteLength(generated.get(href(p))) / 1024).toFixed(1) }));
console.log(`Sitio generado para ${SITE_URL}${GTM_ID ? `  (GTM ${GTM_ID})` : ''}${hasOg ? '  (con og.jpg)' : ''}`);
console.log(`Páginas: ${PAGES.length} + 404 · lastmod ${TODAY}`);
console.log(sizes.map((s) => `  ${s.key.padEnd(9)} ${s.kb} KB`).join('\n'));
if (warns.length) console.log('\nAvisos:\n' + warns.map((w) => '  · ' + w).join('\n'));
if (errors.length) {
  console.error('\nERRORES:\n' + errors.map((e) => '  ✗ ' + e).join('\n'));
  process.exit(1);
}
console.log('\n✓ Sin errores: 1 H1 por página, títulos y descripciones únicos, canonical correcto, JSON-LD válido, enlaces y anclas OK.');
