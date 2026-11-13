/* Nieve 3D: copos de seis brazos que giran y caen a distintas profundidades.
   - En la portada cae dentro de la escena del refrigerador (con copos cercanos desenfocados).
   - En el resto de cada página cae por detrás del contenido, más tenue, para no estorbar la lectura.
   No corre con "reducir movimiento" ni con "ahorro de datos", y se pausa cuando no se ve. */
(function () {
  try {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (navigator.connection && navigator.connection.saveData) return;
  } catch (e) { return; }
  if (!window.requestAnimationFrame || !window.IntersectionObserver) return;
  const TAU = Math.PI * 2, rnd = (a, b) => a + Math.random() * (b - a);
  const ESTILO = { fondo: 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:block',
    frente: 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;display:block;z-index:2',
    pag: 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;display:block;z-index:-1' };
  const lienzoNuevo = (tipo) => { const c = document.createElement('canvas'); c.className = 'nieve nieve-' + tipo; c.style.cssText = ESTILO[tipo]; c.setAttribute('aria-hidden', 'true'); return c; };

  // Dibujo de un copo (cristal de 6 brazos con ramas); 4 formas distintas.
  const T = 96;
  const FORMAS = [
    { ramas: [[.38, .30], [.62, .24], [.84, .14]], hex: .16 },
    { ramas: [[.45, .36], [.72, .22]], hex: 0 },
    { ramas: [[.30, .16], [.52, .30], [.74, .20]], hex: .26 },
    { ramas: [[.55, .40], [.82, .16]], hex: .12 }
  ];
  function trazo(g, f, grosor) {
    const R = T / 2 - 6;
    g.lineCap = 'round'; g.lineJoin = 'round'; g.lineWidth = grosor;
    g.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = i * TAU / 6, ca = Math.cos(a), sa = Math.sin(a);
      g.moveTo(0, 0); g.lineTo(ca * R, sa * R);
      f.ramas.forEach(([d, l]) => {
        const bx = ca * R * d, by = sa * R * d;
        [-1, 1].forEach(s => { const b = a + s * TAU / 6; g.moveTo(bx, by); g.lineTo(bx + Math.cos(b) * R * l, by + Math.sin(b) * R * l); });
      });
    }
    if (f.hex) for (let i = 0; i <= 6; i++) { const a = i * TAU / 6, x = Math.cos(a) * R * f.hex * 2, y = Math.sin(a) * R * f.hex * 2; i ? g.lineTo(x, y) : g.moveTo(x, y); }
    g.stroke();
  }
  function sello(f, color) {
    const c = document.createElement('canvas'); c.width = c.height = T;
    const g = c.getContext('2d'); g.translate(T / 2, T / 2); g.strokeStyle = color; trazo(g, f, 5.5);
    return c;
  }
  function borroso(f, color) { // copo desenfocado: se pinta solo la sombra difusa del trazo (funciona en Safari)
    const c = document.createElement('canvas'); c.width = c.height = T;
    const g = c.getContext('2d'); g.translate(T / 2 - 2000, T / 2);
    g.shadowColor = color; g.shadowBlur = 7; g.shadowOffsetX = 2000; g.strokeStyle = color; g.scale(.86, .86); trazo(g, f, 7);
    return c;
  }
  // Dos juegos: para fondo claro (hielo azul) y para fondo oscuro (blanco con canto azul).
  const JUEGO = [
    { cara: '#5B90DC', canto: '#1A3B76' },
    { cara: '#F5FAFF', canto: '#7FB0F0' }
  ].map(j => FORMAS.map(f => ({ cara: sello(f, j.cara), canto: sello(f, j.canto), suave: borroso(f, j.cara) })));

  function copo(z, arriba) {
    return { x: rnd(-.05, 1.05), y: arriba ? rnd(-.2, 0) : rnd(-.1, 1.05), z,
      f: (Math.random() * 4) | 0, giro: rnd(0, TAU), vg: rnd(-.7, .7),
      vuelco: rnd(0, TAU), vv: rnd(.5, 1.5) * (Math.random() < .5 ? -1 : 1), eje: rnd(0, TAU),
      fase: rnd(0, TAU), vf: rnd(.4, 1.1) };
  }

  /* Una capa de nieve. o = { fondo, frente (opcional), caja(): {w,h}, oscuro(): 0..1, activa(): bool,
     cuantos(w,h), cerca(w), alfa, tamMax } */
  function nevar(o) {
    const lienzos = [o.fondo, o.frente].filter(Boolean), ctxs = lienzos.map(c => c.getContext('2d'));
    if (ctxs.some(g => !g)) return;
    let W = 0, H = 0, dpr = 1, copos = [], cerca = [], limpio = true;
    function medir() {
      const b = o.caja(); W = b.w; H = b.h; dpr = Math.min(2, devicePixelRatio || 1);
      lienzos.forEach((c, i) => { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); ctxs[i].imageSmoothingEnabled = true; ctxs[i].imageSmoothingQuality = 'high'; });
      const n = o.cuantos(W, H), m = o.frente ? o.cerca(W) : 0;   // al girar o cambiar el alto no se reinicia la nevada: solo se ajusta
      while (copos.length < n) copos.push(copo(Math.pow(Math.random(), 1.6) * .82, false));
      copos.length = n; copos.sort((a, b) => a.z - b.z);
      while (cerca.length < m) cerca.push(copo(rnd(.9, 1), false));
      cerca.length = m;
    }
    function pinta(g, c, osc, viento, dt, frente) {
      const tam = frente ? 50 + (c.z - .9) * 420 : 9 + c.z * c.z * o.tamMax;   // px
      const vy = frente ? 78 : 16 + c.z * 62;
      c.fase += c.vf * dt; c.giro += c.vg * dt; c.vuelco += c.vv * dt;
      c.y += vy * dt / H; c.x += (viento * (.4 + c.z) + Math.sin(c.fase) * 14 * (.3 + c.z)) * dt / W;
      if (c.y > 1 + tam / H) Object.assign(c, copo(c.z, true));
      if (c.x > 1.1) c.x -= 1.2; else if (c.x < -.1) c.x += 1.2;
      const k = Math.cos(c.vuelco), ancho = Math.max(frente ? .5 : .1, Math.abs(k));   // vuelco 3D: se ve de frente o de canto
      const luz = .55 + .45 * Math.abs(k);
      const base = (frente ? .34 : (.5 + c.z * .5)) * o.alfa;
      const x = c.x * W, y = c.y * H, s = tam / T;
      for (let j = 0; j < 2; j++) {
        const a = (j ? osc : 1 - osc) * base * luz; if (a < .02) continue;
        const J = JUEGO[j][c.f];
        g.setTransform(dpr, 0, 0, dpr, x * dpr, y * dpr); g.rotate(c.eje); g.scale(ancho * s, s); g.rotate(c.giro);
        if (frente) { g.globalAlpha = a; g.drawImage(J.suave, -T / 2, -T / 2); continue; }
        if (c.z > .28) { // canto: da grosor al cristal cuando se ladea
          const d = (1 - ancho) * 5 * Math.sign(k || 1);
          g.globalAlpha = a * .5; g.drawImage(J.canto, -T / 2 + d / Math.max(.25, ancho), -T / 2 + 1.5);
        }
        g.globalAlpha = a; g.drawImage(c.z < .14 ? J.suave : J.cara, -T / 2, -T / 2);
      }
    }
    const borra = () => ctxs.forEach(g => { g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, W * dpr, H * dpr); });
    let tAnt = performance.now(), t = 0;
    addEventListener('resize', medir); medir();
    (function cuadro(now) {
      requestAnimationFrame(cuadro);
      if (document.hidden || !o.activa()) { tAnt = now; if (!limpio) { borra(); limpio = true; } return; }
      const dt = Math.min(.05, (now - tAnt) / 1000); tAnt = now; t += dt; limpio = false;
      const osc = o.oscuro(), viento = 10 + Math.sin(t * .23) * 16 + Math.sin(t * .071 + 2) * 8;
      borra();
      for (let i = 0; i < copos.length; i++) pinta(ctxs[0], copos[i], osc, viento, dt, false);
      for (let i = 0; i < cerca.length; i++) pinta(ctxs[1], cerca[i], osc, viento, dt, true);
    })(tAnt);
  }

  // 1) Portada: dentro de la escena del refrigerador (solo con el recorrido 3D activo).
  const esc = document.getElementById('escenario'), lienzo = document.getElementById('lienzo');
  let escenaVisible = false;
  if (esc && lienzo && document.documentElement.classList.contains('con3d')) {
    const fondo = lienzoNuevo('fondo'), frente = lienzoNuevo('frente');
    lienzo.after(fondo); esc.appendChild(frente);
    escenaVisible = true;
    new IntersectionObserver(e => { escenaVisible = e[0].isIntersecting; }).observe(esc);
    nevar({ fondo, frente, alfa: 1, tamMax: 50,
      caja: () => { const r = esc.getBoundingClientRect(); return { w: r.width, h: r.height }; },
      oscuro: () => { // 0 = fondo claro, 1 = fondo oscuro (lo lee del color que ya pone el recorrido)
        const m = /rgb\((\d+),\s*(\d+),\s*(\d+)/.exec(esc.style.backgroundColor); if (!m) return 0;
        return Math.min(1, Math.max(0, (.72 - (.2126 * m[1] + .7152 * m[2] + .0722 * m[3]) / 255) / .4));
      },
      activa: () => escenaVisible,
      cuantos: (w, h) => Math.round(Math.min(80, Math.max(44, w * h / 7500))),
      cerca: (w) => w < 700 ? 4 : 7 });
  }

  // 2) Toda la página: detrás del contenido, tenue. En la portada descansa mientras se ve la escena.
  const pag = lienzoNuevo('pag');
  document.body.appendChild(pag);
  nevar({ fondo: pag, alfa: .6, tamMax: 40,
    caja: () => ({ w: innerWidth, h: innerHeight }),
    oscuro: () => 0,
    activa: () => !escenaVisible,
    cuantos: (w, h) => Math.round(Math.min(46, Math.max(20, w * h / 14000))) });
})();
