// Plantilla, estilos y schema. Sin JavaScript en el navegador: todo el sitio es HTML + CSS.
import { SITE, PAGES, GROUPS } from './data.mjs';

export const byKey = Object.fromEntries(PAGES.map((p) => [p.key, p]));
export const href = (p) => (p.slug ? `/${p.slug}/` : '/');

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const waLink = (msg) => `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`;

const BLURBS = {
  dom: 'Reparación para refrigeradores de casa. Revisión por $200 y diagnóstico antes de reparar.',
  com: 'Equipos para restaurantes, tiendas y cocinas que no pueden parar.',
  cam: 'Reparación de cámaras de refrigeración para negocio.',
  man: 'Mantenimiento para que el equipo no falle cuando más lo necesitas.',
  nenfria: 'Causas comunes, qué revisar tú y cuándo llamar.',
  ncongela: 'Escarcha, hielo y congelador que no congela.',
  ruido: 'Qué significa cada ruido y cuándo conviene revisarlo.',
  agua: 'Charcos, goteo y agua dentro del equipo.',
  zap: 'Casas y negocios, incluida la zona de Andares.',
  tlq: 'Casas y negocios en San Pedro Tlaquepaque.',
  ton: 'Casas y negocios en Tonalá.',
};

const linkText = (p) => (p.group === 'zonas' ? `Reparación de refrigeradores en ${p.navName}` : p.navName);

// ───────────────────────── ICONOS ─────────────────────────
const ICON_WA =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.6-.1 1.1Z"/></svg>';
const ICON_TEL =
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"/></svg>';
const ICON_MARK =
  '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><g stroke="#c4ebfc" stroke-width="6" stroke-linecap="round" fill="none"><path d="M32 8v48M10.2 20l43.6 24M10.2 44l43.6-24"/></g></svg>';

// ───────────────────────── CSS ─────────────────────────
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .09 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const CSS = `
@font-face{font-family:"Barlow Condensed";src:url(/fonts/barlow-condensed-700.woff2) format("woff2");font-weight:700;font-style:normal;font-display:swap}
@font-face{font-family:Inter;src:url(/fonts/inter-400.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:Inter;src:url(/fonts/inter-600.woff2) format("woff2");font-weight:600;font-style:normal;font-display:swap}
:root{
  --c0:#efeee9;--c1:#e4e3de;--c2:#d3d2cc;--c4:#8d8c86;
  --g9:#15171a;--g8:#202328;--g7:#2e3237;--muted:#464b50;
  --ice:#c4ebfc;--petrol:#0a5675;--seam:rgba(21,23,26,.22);--r:3px;
  --display:"Barlow Condensed","Arial Narrow",Arial,sans-serif;
  --body:Inter,system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;
  --pad:clamp(16px,4vw,40px);--max:1240px;
  --noise:${NOISE};
}
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{margin:0;color:var(--g9);background-color:var(--c1);background-image:var(--noise),linear-gradient(180deg,var(--c0),var(--c1) 55%,var(--c2));font:400 17px/1.6 var(--body);overflow-x:hidden}
a{color:inherit}
p,ul,ol,dl,dd{margin:0}
h1,h2,h3{margin:0;font-family:var(--display);font-weight:700;text-transform:uppercase;line-height:.95;letter-spacing:.005em;text-wrap:balance}
h1{font-size:clamp(46px,8.6vw,108px)}
h2{font-size:clamp(38px,6vw,72px)}
h3{font-size:clamp(26px,3.2vw,32px);line-height:1.02}
.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--pad)}
.skip{position:absolute;left:-999px;top:0;background:var(--ice);color:var(--g9);padding:12px 16px;font-weight:600;z-index:50}
.skip:focus{left:8px;top:8px}
:focus-visible{outline:3px solid var(--petrol);outline-offset:3px}
.ficha :focus-visible,.cta :focus-visible,.foot :focus-visible{outline-color:var(--ice)}
.kicker{display:flex;align-items:center;gap:10px;margin:0 0 16px;font-size:13px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.kicker::before{content:"";width:28px;height:2px;background:var(--petrol);flex:none}

/* Botones */
.btn{position:relative;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:56px;padding:0 26px;border:2px solid var(--g9);border-radius:var(--r);font:600 15px/1 var(--body);letter-spacing:.06em;text-transform:uppercase;text-decoration:none;transition:background .2s,color .2s,transform .15s}
.btn svg{width:20px;height:20px;flex:none}
.btn::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);transform:translateX(-120%);transition:transform .6s;pointer-events:none}
.btn:hover::after{transform:translateX(120%)}
.btn:active{transform:translateY(1px)}
.btn-dark{background:var(--g9);color:var(--ice)}
.btn-dark:hover{background:var(--petrol);border-color:var(--petrol);color:#fff}
.btn-line{background:transparent;color:var(--g9)}
.btn-line:hover{background:var(--g9);color:var(--ice)}
.cta .btn-dark{background:var(--ice);border-color:var(--ice);color:var(--g9)}
.cta .btn-dark:hover{background:#fff;border-color:#fff;color:var(--g9)}
.cta .btn-line{border-color:#fff;color:#fff}
.cta .btn-line:hover{background:#fff;color:var(--g9)}
.btn-sm{min-height:48px;padding:0 18px;font-size:13px}

/* Header */
.top{position:sticky;top:0;z-index:40;background:rgba(239,238,233,.97);border-bottom:1px solid var(--seam);box-shadow:0 1px 0 rgba(255,255,255,.7)}
.top-in{display:flex;align-items:center;gap:12px;min-height:64px}
.logo{display:flex;align-items:center;gap:10px;margin-right:auto;min-height:48px;font:700 clamp(20px,4.6vw,26px)/1 var(--display);letter-spacing:.02em;text-transform:uppercase;text-decoration:none}
.logo-mark{width:32px;height:32px;display:grid;place-items:center;flex:none;background:var(--g9);border-radius:var(--r)}
.logo-mark svg{width:20px;height:20px}
.nav{display:none}
.nav a{display:inline-flex;align-items:center;min-height:48px;padding:0 12px;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;border-bottom:3px solid transparent}
.nav a:hover{border-bottom-color:var(--g9)}
.menu{position:relative}
.menu summary{list-style:none;cursor:pointer;display:inline-flex;align-items:center;min-height:48px;padding:0 14px;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--seam);border-radius:var(--r)}
.menu summary::-webkit-details-marker{display:none}
.menu nav{position:absolute;right:0;top:100%;margin-top:8px;min-width:240px;padding:8px;background:var(--c0);border:1px solid var(--seam);border-radius:var(--r);box-shadow:0 18px 34px rgba(21,23,26,.2)}
.menu nav a{display:flex;align-items:center;min-height:48px;padding:0 12px;font-weight:600;text-decoration:none}
.menu nav a:hover{background:var(--c2)}

/* Hero */
.hero{padding:clamp(28px,6vw,72px) 0 clamp(36px,6vw,72px);border-bottom:1px solid var(--seam)}
.hero-grid{display:grid;gap:32px}
.lead{max-width:60ch;margin-top:22px;font-size:clamp(18px,2.2vw,21px);color:#2b2f33}
.ctas{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.crumbs{margin:0 0 14px;font-size:14px}
.crumbs ol{display:flex;flex-wrap:wrap;gap:2px 8px;padding:0;list-style:none}
.crumbs li+li::before{content:"/";margin-right:8px;color:var(--c4)}
.crumbs a{display:inline-flex;align-items:center;min-height:44px;text-underline-offset:3px}
.ficha{position:relative;overflow:hidden;padding:26px;color:#fff;background:linear-gradient(160deg,#30353b,#15171a 70%);border-radius:var(--r);box-shadow:0 1px 0 rgba(255,255,255,.12) inset,0 24px 40px -24px rgba(21,23,26,.65)}
.ficha::before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(255,255,255,.14),transparent 38%);pointer-events:none}
.ficha dl{position:relative}
.ficha dl div{padding:14px 0;border-top:1px solid rgba(255,255,255,.16)}
.ficha dl div:first-child{border-top:0;padding-top:0}
.ficha dt{font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#b9c3c9}
.ficha dd{margin-top:2px;font:700 clamp(34px,4vw,46px)/1 var(--display);text-transform:uppercase;color:var(--ice)}
.ficha .sm dd{font:600 16px/1.45 var(--body);text-transform:none;color:#fff}

/* Secciones */
.sec{padding:clamp(44px,7vw,88px) 0;border-bottom:1px solid var(--seam)}
.sec-head{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:8px 20px;margin-bottom:clamp(22px,4vw,40px)}
.sec-head .kicker{margin:0}
.intro{max-width:64ch;margin:-8px 0 22px;color:#2b2f33}
.grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr))}
.grid.c3{grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))}
.card{position:relative;overflow:hidden;display:flex;flex-direction:column;gap:12px;padding:26px;background:linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,.15));border:1px solid var(--seam);border-radius:var(--r);box-shadow:0 1px 0 rgba(255,255,255,.8) inset;transition:transform .25s,box-shadow .25s,border-color .25s}
.card::before{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.55) 50%,transparent 65%);transform:translateX(-110%);transition:transform .7s;pointer-events:none}
.card:hover{transform:translateY(-3px);border-color:var(--g9);box-shadow:0 18px 30px -20px rgba(21,23,26,.5)}
.card:hover::before{transform:translateX(110%)}
.card.static:hover{transform:none;border-color:var(--seam);box-shadow:0 1px 0 rgba(255,255,255,.8) inset}
.card.static:hover::before{transform:translateX(-110%)}
.card .n{font:700 20px/1 var(--display);letter-spacing:.06em;color:var(--petrol)}
.card h3 a{text-decoration:none}
.card h3 a::after{content:"";position:absolute;inset:0}
.card p{color:var(--muted)}
.card .go{margin-top:auto;font-size:22px;line-height:1;color:var(--petrol)}
.checks{display:grid;gap:0 40px;padding:0;list-style:none;border-top:1px solid var(--seam)}
.checks li{position:relative;padding:16px 0 16px 34px;border-bottom:1px solid var(--seam)}
.checks li::before{content:"";position:absolute;left:4px;top:23px;width:14px;height:8px;border-left:3px solid var(--petrol);border-bottom:3px solid var(--petrol);transform:rotate(-45deg)}
.prose{max-width:68ch}
.prose p+p{margin-top:16px}
.zl{padding:0;list-style:none;border-top:2px solid var(--g9)}
.zl li{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:4px 20px;padding:18px 0;border-bottom:1px solid var(--seam)}
.zl a,.zl strong{font:700 clamp(30px,5vw,46px)/1 var(--display);text-transform:uppercase;text-decoration:none}
.zl a:hover{color:var(--petrol)}
.zl span{color:var(--muted)}
.steps{display:grid;gap:14px;padding:0;list-style:none;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))}
.step{padding:26px;background:rgba(255,255,255,.35);border:1px solid var(--seam);border-radius:var(--r)}
.step .big{display:block;margin-bottom:6px;font:700 84px/1 var(--display);color:transparent;-webkit-text-stroke:2px var(--petrol)}
.step p{margin-top:10px;color:var(--muted)}
.qa{padding:22px 0;border-top:1px solid var(--seam)}
.qa:last-child{border-bottom:1px solid var(--seam)}
.qa h3{font:600 18px/1.35 var(--body);text-transform:none;letter-spacing:0}
.qa p{max-width:70ch;margin-top:8px;color:var(--muted)}
.chips{display:flex;flex-wrap:wrap;gap:10px;padding:0;list-style:none}
.chips a{display:inline-flex;align-items:center;min-height:48px;padding:0 18px;font-weight:600;text-decoration:none;border:1px solid var(--g9);border-radius:var(--r);transition:background .2s,color .2s}
.chips a:hover{background:var(--g9);color:var(--ice)}

/* Cierre y pie */
.cta{position:relative;overflow:hidden;padding:clamp(52px,9vw,96px) 0;color:#fff;background:linear-gradient(160deg,#30353b,#15171a 70%)}
.cta::before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(255,255,255,.1),transparent 34%);pointer-events:none}
.cta .wrap{position:relative}
.cta h2{font-size:clamp(52px,11vw,140px);line-height:.9;color:#fff}
.cta h2 em{font-style:normal;color:var(--ice)}
.cta p{max-width:52ch;margin-top:18px;color:#c9d2d7}
.foot{padding:52px 0 96px;color:#c9d2d7;background:var(--g9)}
.foot-grid{display:grid;gap:30px;grid-template-columns:repeat(auto-fit,minmax(210px,1fr))}
.foot h2{margin-bottom:10px;font:700 21px/1 var(--display);letter-spacing:.08em;color:var(--ice)}
.foot ul{padding:0;list-style:none}
.foot a{display:inline-flex;align-items:center;min-height:44px;color:#fff;text-decoration:none}
.foot a:hover{color:var(--ice);text-decoration:underline}
.foot p{margin-top:6px}
.copy{display:flex;flex-wrap:wrap;gap:6px 24px;margin-top:30px;padding-top:18px;border-top:1px solid rgba(255,255,255,.16);font-size:14px}
.fab{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:45;width:60px;height:60px;display:grid;place-items:center;background:#25d366;border:3px solid var(--g9);border-radius:50%;box-shadow:4px 4px 0 var(--g9)}
.fab svg{width:30px;height:30px;fill:#fff}

@media(min-width:700px){.checks{grid-template-columns:1fr 1fr}}
@media(min-width:960px){
  .nav{display:flex;gap:2px}
  .menu{display:none}
  .fab{display:none}
  .foot{padding-bottom:28px}
  .hero-grid{grid-template-columns:minmax(0,1.65fr) minmax(280px,.8fr);align-items:end;gap:56px}
}

/* Animaciones: solo CSS, solo transform/opacity y fuera del primer pantallazo */
@media(prefers-reduced-motion:no-preference){
  .fab{animation:pulse 2.6s 1.5s infinite}
  @supports(animation-timeline:view()){
    .rv{animation:rise linear both;animation-timeline:view();animation-range:entry 0% entry 40%}
  }
}
@keyframes rise{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}
@keyframes pulse{0%,100%{box-shadow:4px 4px 0 var(--g9)}50%{box-shadow:4px 4px 0 var(--g9),0 0 0 10px rgba(37,211,102,.25)}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.btn::after,.card::before{display:none}.card,.btn{transition:none}}
`;

const minify = (css) =>
  css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s*\n\s*/g, '')
    .replace(/\s*([{};,>])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();

export const CSS_MIN = minify(CSS);

// ───────────────────────── SECCIONES ─────────────────────────
function head(s, idx, key) {
  const id = s.id || `${key}-${idx}`;
  return {
    id,
    html: `<div class="sec-head"><h2 id="t-${id}">${esc(s.title)}</h2>${s.kicker ? `<p class="kicker">${esc(s.kicker)}</p>` : ''}</div>`,
  };
}

function wrapSec(id, inner) {
  return `<section class="sec" id="${id}" aria-labelledby="t-${id}"><div class="wrap">${inner}</div></section>`;
}

function renderSection(s, idx, page) {
  const { id, html } = head(s, idx, page.key || 'p');
  switch (s.type) {
    case 'cards': {
      const cards = s.links
        .map((k, i) => {
          const p = byKey[k];
          return `<article class="card rv"><span class="n">${String(i + 1).padStart(2, '0')}</span><h3><a href="${href(p)}">${esc(linkText(p))}</a></h3><p>${esc(BLURBS[k])}</p><span class="go" aria-hidden="true">→</span></article>`;
        })
        .join('');
      return wrapSec(id, `${html}<div class="grid">${cards}</div>`);
    }
    case 'causes': {
      const cards = s.items
        .map((it, i) => `<article class="card static rv"><span class="n">${String(i + 1).padStart(2, '0')}</span><h3>${esc(it.h)}</h3><p>${esc(it.p)}</p></article>`)
        .join('');
      return wrapSec(id, `${html}${s.intro ? `<p class="intro">${esc(s.intro)}</p>` : ''}<div class="grid c3">${cards}</div>`);
    }
    case 'list': {
      const items = s.items.map((t) => `<li>${esc(t)}</li>`).join('');
      return wrapSec(id, `${html}${s.intro ? `<p class="intro">${esc(s.intro)}</p>` : ''}<ul class="checks">${items}</ul>`);
    }
    case 'prose':
      return wrapSec(id, `${html}<div class="prose">${s.paragraphs.map((t) => `<p>${esc(t)}</p>`).join('')}</div>`);
    case 'zones': {
      const rows = s.rows
        .map((r) => `<li class="rv">${r.link ? `<a href="${href(byKey[r.link])}">${esc(r.name)}</a>` : `<strong>${esc(r.name)}</strong>`}<span>${esc(r.note)}</span></li>`)
        .join('');
      return wrapSec(id, `${html}<ul class="zl">${rows}</ul>`);
    }
    case 'steps': {
      const li = s.steps
        .map((st, i) => `<li class="step rv"><span class="big" aria-hidden="true">${i + 1}</span><h3>${esc(st.h)}</h3><p>${esc(st.p)}</p></li>`)
        .join('');
      return wrapSec(id, `${html}<ol class="steps">${li}</ol>`);
    }
    case 'faq': {
      const qa = s.faqs.map((f) => `<div class="qa rv"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('');
      return wrapSec(id, `${html}<div>${qa}</div>`);
    }
    case 'related': {
      const chips = s.links.map((k) => `<li><a href="${href(byKey[k])}">${esc(linkText(byKey[k]))}</a></li>`).join('');
      return wrapSec(id, `${html}<ul class="chips">${chips}</ul>`);
    }
    default:
      throw new Error(`Tipo de sección desconocido: ${s.type}`);
  }
}

// ───────────────────────── JSON-LD ─────────────────────────
function jsonLd(page, siteUrl) {
  const url = `${siteUrl}${href(page)}`;
  const biz = {
    '@type': 'HVACBusiness',
    '@id': `${siteUrl}/#negocio`,
    name: SITE.name,
    alternateName: SITE.legalName,
    url: `${siteUrl}/`,
    telephone: '+52 33 1527 3735',
    description:
      'Reparación y mantenimiento de refrigeradores domésticos, comerciales y cámaras de refrigeración en la zona metropolitana de Guadalajara.',
    address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: 'MX' },
    areaServed: ['Guadalajara', 'Zapopan', 'San Pedro Tlaquepaque', 'Tonalá'].map((n) => ({ '@type': 'City', name: n })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
  };
  const site = { '@type': 'WebSite', '@id': `${siteUrl}/#sitio`, url: `${siteUrl}/`, name: SITE.name, inLanguage: 'es-MX', publisher: { '@id': biz['@id'] } };
  const webpage = {
    '@type': 'WebPage',
    '@id': `${url}#pagina`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: 'es-MX',
    isPartOf: { '@id': site['@id'] },
    about: { '@id': biz['@id'] },
  };
  const graph = [biz, site, webpage];

  if (page.key !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#migas`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: page.navName, item: url },
      ],
    });
    webpage.breadcrumb = { '@id': `${url}#migas` };

    const zone = page.group === 'zonas' ? [{ '@type': 'City', name: page.navName === 'Tlaquepaque' ? 'San Pedro Tlaquepaque' : page.navName }] : biz.areaServed;
    const service = {
      '@type': 'Service',
      '@id': `${url}#servicio`,
      name: page.h1,
      serviceType: page.group === 'servicios' ? page.navName : 'Reparación de refrigeradores',
      provider: { '@id': biz['@id'] },
      areaServed: zone,
      url,
    };
    if (page.key !== 'man') {
      service.offers = { '@type': 'Offer', name: 'Revisión del equipo', price: SITE.price, priceCurrency: 'MXN', url };
    }
    graph.push(service);
  } else {
    biz.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Servicios de refrigeración',
      itemListElement: ['dom', 'com', 'cam', 'man'].map((k) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: byKey[k].h1, url: `${siteUrl}${href(byKey[k])}` },
      })),
    };
  }

  const faq = page.sections.find((s) => s.type === 'faq');
  if (faq) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#preguntas`,
      mainEntity: faq.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

// ───────────────────────── PÁGINA ─────────────────────────
function navLinks() {
  return `<a href="/#servicios">Servicios</a><a href="/#fallas">Fallas</a><a href="/#zonas">Zonas</a><a href="#contacto">Contacto</a>`;
}

function footerCol(group) {
  const items = PAGES.filter((p) => p.group === group)
    .map((p) => `<li><a href="${href(p)}">${esc(linkText(p))}</a></li>`)
    .join('');
  return `<div><h2>${esc(GROUPS[group])}</h2><ul>${items}</ul></div>`;
}

export function renderPage(page, ctx) {
  const { siteUrl, gtmId, hasOg } = ctx;
  const url = `${siteUrl}${href(page)}`;
  const wa = waLink(page.waMsg);
  const isHome = page.key === 'home';

  const crumbs = isHome
    ? ''
    : `<nav class="crumbs" aria-label="Migas de pan"><ol><li><a href="/">Inicio</a></li><li><span aria-current="page">${esc(page.navName)}</span></li></ol></nav>`;

  const gtmHead = gtmId
    ? `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${esc(gtmId)}');</script>`
    : '';
  const gtmBody = gtmId
    ? `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${esc(gtmId)}" height="0" width="0" style="display:none;visibility:hidden" title="Google Tag Manager"></iframe></noscript>`
    : '';

  const ogImage = hasOg
    ? `<meta property="og:image" content="${siteUrl}/og.jpg"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${esc(SITE.name)}: reparación de refrigeradores en Guadalajara"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${siteUrl}/og.jpg">`
    : '<meta name="twitter:card" content="summary">';

  const body = page.sections.map((s, i) => renderSection(s, i, page)).join('');

  return `<!doctype html>
<html lang="es-MX">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#15171a">
<meta name="format-detection" content="telephone=yes">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_MX">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
${ogImage}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preload" href="/fonts/barlow-condensed-700.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-400.woff2" as="font" type="font/woff2" crossorigin>
<style>${CSS_MIN}</style>
<script type="application/ld+json">${jsonLd(page, siteUrl)}</script>
${gtmHead}
</head>
<body>
${gtmBody}<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="top"><div class="wrap top-in">
<a class="logo" href="/" aria-label="${esc(SITE.name)}, inicio"><span class="logo-mark">${ICON_MARK}</span>${esc(SITE.name)}</a>
<nav class="nav" aria-label="Principal">${navLinks()}</nav>
<details class="menu"><summary>Menú</summary><nav aria-label="Menú móvil">${navLinks()}</nav></details>
<a class="btn btn-dark btn-sm" href="tel:${SITE.phoneTel}">Llamar</a>
</div></header>
<main id="contenido">
<section class="hero" id="inicio" aria-labelledby="t-h1"><div class="wrap hero-grid">
<div>
${crumbs}<p class="kicker">${esc(page.kicker)}</p>
<h1 id="t-h1">${esc(page.h1)}</h1>
<p class="lead">${esc(page.lead)}</p>
<div class="ctas"><a class="btn btn-dark" href="${wa}" target="_blank" rel="noopener noreferrer">${ICON_WA}WhatsApp</a><a class="btn btn-line" href="tel:${SITE.phoneTel}">${ICON_TEL}Llamar ${esc(SITE.phoneDisplay)}</a></div>
</div>
<aside class="ficha" aria-label="Datos del servicio"><dl>
<div><dt>Revisión</dt><dd>$${SITE.price}</dd></div>
<div><dt>Horario</dt><dd>Lun–Sáb 8–19 h</dd></div>
<div><dt>Experiencia</dt><dd>10 años</dd></div>
<div class="sm"><dt>Cobertura</dt><dd>Guadalajara, Zapopan, Tlaquepaque y Tonalá</dd></div>
</dl></aside>
</div></section>
${body}
<section class="cta" id="contacto" aria-labelledby="t-cta"><div class="wrap">
<h2 id="t-cta">¿Se te echó<br>a perder<br><em>el refri?</em></h2>
<p>Escríbenos con la falla y tu zona. Revisión de $${SITE.price} y diagnóstico claro antes de reparar. ${esc(SITE.hoursText)}.</p>
<div class="ctas"><a class="btn btn-dark" href="${wa}" target="_blank" rel="noopener noreferrer">${ICON_WA}WhatsApp ${esc(SITE.phoneDisplay)}</a><a class="btn btn-line" href="tel:${SITE.phoneTel}">${ICON_TEL}Llamar ahora</a></div>
</div></section>
</main>
<footer class="foot"><div class="wrap">
<div class="foot-grid">
<div><h2>${esc(SITE.name)}</h2><p>Reparación y mantenimiento de refrigeración en Guadalajara, Zapopan, Tlaquepaque y Tonalá.</p><p><a href="tel:${SITE.phoneTel}">${esc(SITE.phoneDisplay)}</a></p><p>${esc(SITE.hoursText)}</p></div>
${footerCol('servicios')}${footerCol('zonas')}${footerCol('fallas')}
</div>
<div class="copy"><span>© ${new Date().getFullYear()} ${esc(SITE.legalName)}</span><span>Guadalajara, Jalisco</span></div>
</div></footer>
<a class="fab" href="${wa}" target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp">${ICON_WA}</a>
</body>
</html>
`;
}

export function render404(ctx) {
  const { siteUrl } = ctx;
  const links = PAGES.map((p) => `<li><a href="${href(p)}">${esc(linkText(p))}</a></li>`).join('');
  return `<!doctype html>
<html lang="es-MX">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Página no encontrada | ${esc(SITE.name)}</title>
<meta name="robots" content="noindex">
<meta name="theme-color" content="#15171a">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/barlow-condensed-700.woff2" as="font" type="font/woff2" crossorigin>
<style>${CSS_MIN}</style>
</head>
<body>
<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="top"><div class="wrap top-in"><a class="logo" href="/" aria-label="${esc(SITE.name)}, inicio"><span class="logo-mark">${ICON_MARK}</span>${esc(SITE.name)}</a><a class="btn btn-dark btn-sm" href="tel:${SITE.phoneTel}">Llamar</a></div></header>
<main id="contenido"><section class="sec"><div class="wrap">
<p class="kicker">Error 404</p>
<h1>Esta página no existe</h1>
<p class="lead">Puede que el enlace esté mal escrito o que la página haya cambiado. Estas son las páginas del sitio:</p>
<ul class="chips" style="margin-top:28px">${links}</ul>
<div class="ctas"><a class="btn btn-dark" href="/">Ir al inicio</a></div>
</div></section></main>
</body>
</html>
`;
}
