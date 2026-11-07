// Datos y contenido del sitio. Solo se afirma lo que el dueño confirmó:
// 10 años de experiencia, revisión $200, Lun–Sáb 8:00–19:00 h, zonas y colonias indicadas,
// diagnóstico claro antes de reparar. Lo demás (domicilio, tiempos de llegada, garantías, marcas)
// NO se afirma hasta que esté confirmado.

export const SITE = {
  name: 'Refrigeradores Express',
  legalName: 'Servicios de reparación de refrigeradores express',
  phoneDisplay: '33 1527 3735',
  phoneTel: '+523315273735',
  waNumber: '523315273735',
  hoursText: 'Lun–Sáb 8:00–19:00 h',
  price: '200',
  city: 'Guadalajara',
  region: 'Jalisco',
};

const REVISION = 'La revisión cuesta $200. Después te explicamos qué tiene el equipo y qué se repara, y tú decides antes de que empecemos.';

const STEPS = [
  { h: 'Nos escribes', p: 'Mándanos un WhatsApp con la falla y tu zona.' },
  { h: 'Revisión de $200', p: 'Revisamos el equipo y te decimos qué tiene.' },
  { h: 'Diagnóstico claro', p: 'Sabes qué se repara y decides antes de que empecemos.' },
];

const FAQ_HORARIO = {
  q: '¿Qué horario tienen?',
  a: 'Atendemos de lunes a sábado, de 8:00 a 19:00 h. Fuera de ese horario puedes dejarnos tu mensaje por WhatsApp y te respondemos al abrir.',
};
const FAQ_COMO = {
  q: '¿Cómo pido el servicio?',
  a: 'Por WhatsApp o por llamada al 33 1527 3735. Cuéntanos la falla, la marca y el modelo si los tienes, y tu zona.',
};
const FAQ_COSTO = {
  q: '¿Cuánto cuesta la revisión?',
  a: REVISION,
};

// Grupos para el menú y el pie de página
export const GROUPS = {
  servicios: 'Servicios',
  zonas: 'Zonas',
  fallas: 'Fallas comunes',
};

const CORE = [
  // ───────────────────────── INICIO ─────────────────────────
  {
    key: 'home',
    slug: '',
    group: null,
    navName: 'Inicio',
    title: 'Reparación de refrigeradores en Guadalajara | Revisión $200',
    description:
      'Reparación de refrigeradores domésticos, comerciales y cámaras en Guadalajara, Zapopan, Tlaquepaque y Tonalá. Revisión $200. Lun–Sáb 8–19 h.',
    kicker: 'Frío que funciona',
    h1: 'Reparación de refrigeradores en Guadalajara',
    lead:
      'Diez años reparando refrigeradores domésticos, comerciales y cámaras de refrigeración. Primero la revisión de $200 y un diagnóstico claro; tú decides antes de que empecemos.',
    waMsg: 'Hola, necesito revisión de mi refrigerador en Guadalajara.',
    sections: [
      {
        type: 'cards',
        id: 'servicios',
        title: 'Servicios',
        kicker: 'Qué reparamos',
        links: ['dom', 'com', 'cam', 'man'],
      },
      {
        type: 'cards',
        id: 'fallas',
        title: 'Fallas comunes',
        kicker: 'Lo que más nos escriben',
        links: ['nenfria', 'ncongela', 'ruido', 'agua'],
      },
      {
        type: 'zones',
        id: 'zonas',
        title: 'Zonas',
        kicker: 'Dónde llegamos',
        rows: [
          { name: 'Guadalajara', note: 'Providencia · Americana · Country Club', link: null },
          { name: 'Zapopan', note: 'Andares', link: 'zap' },
          { name: 'Tlaquepaque', note: 'San Pedro Tlaquepaque', link: 'tlq' },
          { name: 'Tonalá', note: 'Tonalá', link: 'ton' },
        ],
      },
      { type: 'steps', id: 'proceso', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'posts',
        id: 'blog',
        title: 'Del blog',
        kicker: 'Consejos y cuidados',
        links: ['p1', 'p2', 'p3', 'p4'],
      },
      {
        type: 'related',
        id: 'conoce-mas',
        title: 'Conoce más',
        links: ['servicios', 'cobertura', 'nosotros', 'contacto'],
      },
      {
        type: 'faq',
        id: 'preguntas',
        title: 'Preguntas frecuentes',
        kicker: 'Antes de escribirnos',
        faqs: [
          FAQ_COSTO,
          { q: '¿Reparan refrigeradores domésticos y comerciales?', a: 'Sí. Reparamos refrigeradores de casa, equipos para restaurantes, tiendas y cocinas, y cámaras de refrigeración para negocio. También hacemos mantenimiento.' },
          { q: '¿En qué zonas dan servicio?', a: 'En Guadalajara (incluyendo Providencia, Americana y Country Club), Zapopan (incluyendo Andares), Tlaquepaque y Tonalá.' },
          FAQ_HORARIO,
          FAQ_COMO,
        ],
      },
    ],
  },

  // ───────────────────────── SERVICIOS ─────────────────────────
  {
    key: 'dom',
    slug: 'reparacion-refrigeradores-domesticos-guadalajara',
    group: 'servicios',
    navName: 'Refrigeradores domésticos',
    title: 'Reparación de refrigeradores domésticos en Guadalajara',
    description:
      'Reparamos refrigeradores de casa en Guadalajara: no enfrían, no congelan, hacen ruido o tiran agua. Revisión $200 y diagnóstico claro. Lun–Sáb 8–19 h.',
    kicker: 'Servicio · Casa',
    h1: 'Reparación de refrigeradores domésticos en Guadalajara',
    lead:
      'Tu refrigerador de casa no puede esperar: la comida se echa a perder rápido. Lo revisamos por $200, te decimos qué tiene y decides antes de que empecemos.',
    waMsg: 'Hola, mi refrigerador de casa falla y necesito revisión en Guadalajara.',
    sections: [
      {
        type: 'list',
        title: 'Fallas que atendemos',
        kicker: 'En refrigeradores de casa',
        intro: 'Estas son las fallas con las que más nos buscan los hogares de Guadalajara:',
        items: [
          'El refrigerador ya no enfría o enfría poco.',
          'El congelador no congela o se forma escarcha en exceso.',
          'Ruidos nuevos: zumbidos, rechinidos, golpeteos o clics repetidos.',
          'Agua dentro del refrigerador o charcos debajo del equipo.',
          'La puerta no sella bien o el empaque está dañado.',
          'El motor trabaja sin parar y el equipo no llega a la temperatura.',
        ],
      },
      {
        type: 'prose',
        title: 'Cuándo conviene llamar',
        kicker: 'Señales de alerta',
        paragraphs: [
          'Si notas que la comida se echa a perder más rápido de lo normal, que la leche o las verduras amanecen tibias, o que el equipo hace un ruido que antes no hacía, conviene revisarlo pronto. Muchas fallas empiezan pequeñas y se vuelven más caras si se dejan.',
          'No necesitas saber qué parte falla. Descríbenos lo que ves y lo que oyes, y desde ahí partimos con la revisión.',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'Refrigeradores de casa',
        faqs: [
          FAQ_COSTO,
          { q: '¿Qué información conviene mandar por WhatsApp?', a: 'La falla que notas, desde cuándo ocurre, la marca y el modelo si los encuentras en la etiqueta interior, y tu zona o colonia.' },
          { q: '¿Siempre vale la pena reparar el refrigerador?', a: 'Depende de la falla y del equipo. Por eso primero hacemos la revisión y te damos un diagnóstico claro, para que decidas con información.' },
          FAQ_HORARIO,
        ],
      },
      { type: 'related', title: 'También te puede interesar', links: ['nenfria', 'ruido', 'man', 'zap'] },
    ],
  },
  {
    key: 'com',
    slug: 'reparacion-refrigeradores-comerciales-guadalajara',
    group: 'servicios',
    navName: 'Refrigeradores comerciales',
    title: 'Reparación de refrigeradores comerciales en Guadalajara',
    description:
      'Reparación de refrigeradores comerciales para restaurantes, tiendas y cocinas en Guadalajara. Revisión $200 y diagnóstico claro. Lun–Sáb 8–19 h.',
    kicker: 'Servicio · Negocio',
    h1: 'Reparación de refrigeradores comerciales en Guadalajara',
    lead:
      'Equipos para negocio: restaurantes, tiendas y cocinas que no pueden parar. Te revisamos el equipo por $200 y te damos un diagnóstico claro.',
    waMsg: 'Hola, mi refrigerador comercial falla y necesito revisión en Guadalajara.',
    sections: [
      {
        type: 'list',
        title: 'Señales de que tu equipo necesita atención',
        kicker: 'Para negocio',
        intro: 'En un negocio, un equipo que falla pone en riesgo el producto. Estas señales piden revisión pronto:',
        items: [
          'La temperatura del equipo sube y no se recupera después de abrir la puerta.',
          'El producto del mostrador o del interior no se mantiene frío.',
          'El compresor trabaja casi sin descanso o arranca y se apaga repetidamente.',
          'Hay hielo acumulado en el interior o escarcha donde antes no había.',
          'La puerta no sella y se pierde frío.',
          'Aparecen ruidos nuevos o vibraciones fuertes.',
        ],
      },
      {
        type: 'prose',
        title: 'Equipos que no pueden parar',
        kicker: 'Restaurantes, tiendas y cocinas',
        paragraphs: [
          'Un refrigerador comercial trabaja muchas horas al día y se abre constantemente. Por eso conviene atender las fallas antes de que el equipo deje de enfriar por completo.',
          'Si tu negocio depende del equipo, escríbenos cuanto antes con el tipo de refrigerador, la falla y tu zona. También puedes preguntar por mantenimiento para reducir el riesgo de que falle en horas de trabajo.',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'Refrigeración comercial',
        faqs: [
          { q: '¿Atienden negocios como restaurantes y tiendas?', a: 'Sí. Reparamos equipos de refrigeración para restaurantes, tiendas y cocinas en Guadalajara, Zapopan, Tlaquepaque y Tonalá.' },
          FAQ_COSTO,
          { q: '¿Qué datos debo enviar de mi equipo?', a: 'El tipo de equipo, la falla que notas, desde cuándo ocurre, la marca y el modelo si los tienes, y tu zona.' },
          { q: '¿Hacen mantenimiento para evitar fallas?', a: 'Sí, ofrecemos mantenimiento de refrigeración para que el equipo no falle cuando más lo necesitas. Pregúntanos por WhatsApp.' },
        ],
      },
      { type: 'related', title: 'También te puede interesar', links: ['cam', 'man', 'nenfria', 'zap'] },
    ],
  },
  {
    key: 'cam',
    slug: 'reparacion-camaras-de-refrigeracion-guadalajara',
    group: 'servicios',
    navName: 'Cámaras de refrigeración',
    title: 'Reparación de cámaras de refrigeración en Guadalajara',
    description:
      'Reparación de cámaras de refrigeración para negocio en Guadalajara y zona metropolitana. Revisión $200 y diagnóstico claro. Lun–Sáb 8–19 h.',
    kicker: 'Servicio · Cámaras',
    h1: 'Reparación de cámaras de refrigeración en Guadalajara',
    lead:
      'Reparamos cámaras de refrigeración para negocio. Cuéntanos qué tipo de cámara tienes y qué falla presenta; te revisamos el equipo por $200 y te damos un diagnóstico claro.',
    waMsg: 'Hola, mi cámara de refrigeración falla y necesito revisión en Guadalajara.',
    sections: [
      {
        type: 'list',
        title: 'Señales de falla en una cámara',
        kicker: 'Qué observar',
        intro: 'Si tu cámara presenta alguna de estas señales, conviene revisarla pronto:',
        items: [
          'La temperatura interior no baja al nivel que necesitas o tarda mucho en recuperarse.',
          'Se forma hielo en el evaporador o en las paredes interiores.',
          'Los ventiladores hacen ruido, vibran o se detienen.',
          'El equipo se enciende y se apaga con demasiada frecuencia.',
          'La puerta o su empaque no cierra bien y entra aire caliente.',
          'Hay goteo o agua acumulada alrededor de la cámara.',
        ],
      },
      {
        type: 'prose',
        title: 'Por qué no conviene esperar',
        kicker: 'Producto en riesgo',
        paragraphs: [
          'Cuando una cámara de refrigeración falla, lo que está dentro corre riesgo. Entre más tiempo pase con la temperatura alta, mayor es la posibilidad de perder producto.',
          'Escríbenos con el tipo de cámara, la falla y tu zona. Con esos datos empezamos con la revisión de $200 y te explicamos qué tiene el equipo.',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'Cámaras de refrigeración',
        faqs: [
          { q: '¿Reparan cámaras de refrigeración para negocio?', a: 'Sí, reparamos cámaras de refrigeración para negocio en Guadalajara, Zapopan, Tlaquepaque y Tonalá.' },
          FAQ_COSTO,
          { q: '¿Qué debo decirles de mi cámara?', a: 'Qué tipo de cámara es, qué falla notas, desde cuándo y en qué zona está. Si tienes la marca y el modelo, mándalos también.' },
          FAQ_HORARIO,
        ],
      },
      { type: 'related', title: 'También te puede interesar', links: ['com', 'man', 'nenfria', 'ton'] },
    ],
  },
  {
    key: 'man',
    slug: 'mantenimiento-refrigeracion-guadalajara',
    group: 'servicios',
    navName: 'Mantenimiento de refrigeración',
    title: 'Mantenimiento de refrigeración en Guadalajara',
    description:
      'Mantenimiento de refrigeración en Guadalajara para que tu equipo no falle cuando más lo necesitas. Casas y negocios. Lun–Sáb 8–19 h.',
    kicker: 'Servicio · Prevención',
    h1: 'Mantenimiento de refrigeración en Guadalajara',
    lead:
      'Mantenimiento para que el equipo no falle cuando más lo necesitas. Escríbenos con tu tipo de equipo y te decimos cómo lo trabajamos.',
    waMsg: 'Hola, quiero información de mantenimiento de refrigeración en Guadalajara.',
    sections: [
      {
        type: 'prose',
        title: 'Por qué dar mantenimiento',
        kicker: 'Mejor prevenir',
        paragraphs: [
          'Un equipo de refrigeración trabaja todos los días. Con el tiempo se acumulan polvo y suciedad, los empaques de las puertas se desgastan y los componentes se cansan. El mantenimiento sirve para detectar esos puntos antes de que el equipo deje de enfriar.',
          'En negocios, donde el equipo no puede parar, el mantenimiento ayuda a reducir el riesgo de una falla en horas de trabajo. En casa, evita sorpresas con la comida.',
        ],
      },
      {
        type: 'list',
        title: 'Qué suele atender un mantenimiento',
        kicker: 'En general',
        intro: 'De forma general, el mantenimiento preventivo de refrigeración atiende puntos como estos. El alcance exacto para tu equipo te lo confirmamos por WhatsApp:',
        items: [
          'Limpieza de las zonas donde se acumula polvo y suciedad.',
          'Revisión de los empaques y del cierre de las puertas.',
          'Revisión del funcionamiento de los ventiladores.',
          'Verificación de la temperatura de trabajo del equipo.',
          'Revisión de drenajes y de señales de desgaste.',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'Mantenimiento',
        faqs: [
          { q: '¿Dan mantenimiento a refrigeradores de casa y de negocio?', a: 'Sí. Ofrecemos mantenimiento de refrigeración para que el equipo no falle cuando más lo necesitas, tanto en casas como en negocios.' },
          { q: '¿Cuánto cuesta el mantenimiento?', a: 'Depende del tipo de equipo. Escríbenos por WhatsApp con tu equipo y tu zona y te respondemos.' },
          { q: '¿Cada cuánto conviene darlo?', a: 'Depende de cuánto trabaja el equipo y de dónde está. Cuéntanos tu caso por WhatsApp y te orientamos.' },
          FAQ_HORARIO,
        ],
      },
      { type: 'related', title: 'También te puede interesar', links: ['dom', 'com', 'cam', 'zap'] },
    ],
  },

  // ───────────────────────── ZONAS ─────────────────────────
  {
    key: 'zap',
    slug: 'reparacion-refrigeradores-zapopan',
    group: 'zonas',
    navName: 'Zapopan',
    title: 'Reparación de refrigeradores en Zapopan | Revisión $200',
    description:
      'Reparación de refrigeradores en Zapopan, incluida la zona de Andares. Casas y negocios. Revisión $200 y diagnóstico claro. Lun–Sáb 8–19 h.',
    kicker: 'Zona · Zapopan',
    h1: 'Reparación de refrigeradores en Zapopan',
    lead:
      'Reparamos refrigeradores domésticos, comerciales y cámaras de refrigeración en Zapopan, incluida la zona de Andares. Primero la revisión de $200 y un diagnóstico claro.',
    waMsg: 'Hola, necesito revisión de mi refrigerador en Zapopan.',
    sections: [
      {
        type: 'prose',
        title: 'Servicio en Zapopan',
        kicker: 'Casas y negocios',
        paragraphs: [
          'Si tu refrigerador falla en Zapopan, escríbenos por WhatsApp con la falla y tu colonia. Atendemos casas, restaurantes, tiendas y cocinas, de lunes a sábado de 8:00 a 19:00 h.',
          'Cubrimos la zona de Andares y el resto de Zapopan. El tiempo de llegada a tu colonia te lo confirmamos cuando nos escribes.',
        ],
      },
      { type: 'cards', title: 'Qué reparamos en Zapopan', kicker: 'Servicios', links: ['dom', 'com', 'cam', 'man'] },
      {
        type: 'list',
        title: 'Para agilizar la visita',
        kicker: 'Antes de que lleguemos',
        intro: 'Con estos datos listos, la revisión es más directa:',
        items: [
          'Anota desde cuándo falla el equipo y qué notas: no enfría, ruido o agua.',
          'Ten a la mano la marca y el modelo si los encuentras en la etiqueta.',
          'Despeja el espacio alrededor del equipo para poder moverlo si hace falta.',
          'Si la falla ya lleva horas, pasa lo perecedero a una hielera.',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'Zapopan',
        faqs: [
          { q: '¿Atienden en Andares?', a: 'Sí, atendemos la zona de Andares y el resto de Zapopan.' },
          { q: '¿Cuánto cuesta la revisión en Zapopan?', a: REVISION },
          { q: '¿También reparan equipos de negocio en Zapopan?', a: 'Sí. Reparamos refrigeradores comerciales y cámaras de refrigeración para restaurantes, tiendas y cocinas.' },
          FAQ_COMO,
        ],
      },
      { type: 'related', title: 'Otras zonas', links: ['tlq', 'ton'] },
    ],
  },
  {
    key: 'tlq',
    slug: 'reparacion-refrigeradores-tlaquepaque',
    group: 'zonas',
    navName: 'Tlaquepaque',
    title: 'Reparación de refrigeradores en Tlaquepaque | Revisión $200',
    description:
      'Reparación de refrigeradores en Tlaquepaque: casas y negocios. Revisión $200 y diagnóstico claro antes de reparar. Lun–Sáb 8–19 h.',
    kicker: 'Zona · Tlaquepaque',
    h1: 'Reparación de refrigeradores en Tlaquepaque',
    lead:
      'Si tu refrigerador o el equipo de tu negocio falla en San Pedro Tlaquepaque, lo revisamos por $200 y te damos un diagnóstico claro antes de reparar.',
    waMsg: 'Hola, necesito revisión de mi refrigerador en Tlaquepaque.',
    sections: [
      {
        type: 'prose',
        title: 'Servicio en Tlaquepaque',
        kicker: 'Casas y negocios',
        paragraphs: [
          'Damos servicio en Tlaquepaque a refrigeradores de casa, equipos de restaurantes y tiendas, y cámaras de refrigeración. Atendemos de lunes a sábado de 8:00 a 19:00 h.',
          'Escríbenos tu colonia junto con la falla del equipo. Así te confirmamos la visita y el tiempo de llegada.',
        ],
      },
      { type: 'cards', title: 'Qué reparamos en Tlaquepaque', kicker: 'Servicios', links: ['dom', 'com', 'cam', 'man'] },
      {
        type: 'list',
        title: 'Cómo describir la falla',
        kicker: 'Para diagnosticar mejor',
        intro: 'Cuanto más claro describas la falla, más rápido empezamos:',
        items: [
          '¿El equipo enfría poco, no enfría o no congela?',
          '¿Hace ruido? Descríbelo: zumbido, rechinido, golpeteo o clics.',
          '¿Hay agua dentro o debajo del refrigerador?',
          '¿Desde cuándo pasa y fue de repente o poco a poco?',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'Tlaquepaque',
        faqs: [
          { q: '¿Atienden en todo Tlaquepaque?', a: 'Damos servicio en Tlaquepaque. Escríbenos tu colonia por WhatsApp y te confirmamos la visita.' },
          { q: '¿Cuánto cuesta la revisión en Tlaquepaque?', a: REVISION },
          { q: '¿Reparan equipos de restaurantes y tiendas?', a: 'Sí. Reparamos refrigeradores comerciales y cámaras de refrigeración para negocio.' },
          FAQ_HORARIO,
        ],
      },
      { type: 'related', title: 'Otras zonas', links: ['zap', 'ton'] },
    ],
  },
  {
    key: 'ton',
    slug: 'reparacion-refrigeradores-tonala',
    group: 'zonas',
    navName: 'Tonalá',
    title: 'Reparación de refrigeradores en Tonalá | Revisión $200',
    description:
      'Reparación de refrigeradores en Tonalá para casas y negocios. Revisión $200 y diagnóstico claro antes de reparar. Lun–Sáb 8–19 h.',
    kicker: 'Zona · Tonalá',
    h1: 'Reparación de refrigeradores en Tonalá',
    lead:
      'Reparamos refrigeradores domésticos, comerciales y cámaras de refrigeración en Tonalá. Revisión de $200 y diagnóstico claro; tú decides antes de que empecemos.',
    waMsg: 'Hola, necesito revisión de mi refrigerador en Tonalá.',
    sections: [
      {
        type: 'prose',
        title: 'Servicio en Tonalá',
        kicker: 'Casas y negocios',
        paragraphs: [
          'En Tonalá atendemos refrigeradores de casa, equipos de negocio y cámaras de refrigeración. Nuestro horario es de lunes a sábado, de 8:00 a 19:00 h.',
          'Mándanos por WhatsApp la falla y tu colonia, y te confirmamos cómo y cuándo podemos revisar el equipo.',
        ],
      },
      { type: 'cards', title: 'Qué reparamos en Tonalá', kicker: 'Servicios', links: ['dom', 'com', 'cam', 'man'] },
      {
        type: 'list',
        title: 'Antes de escribirnos',
        kicker: 'Datos útiles',
        intro: 'Si los tienes a la mano, estos datos nos ayudan a darte una mejor orientación:',
        items: [
          'Marca y modelo del equipo, normalmente en una etiqueta dentro del refrigerador.',
          'Qué falla notas y desde cuándo.',
          'Si es un equipo de casa, de negocio o una cámara de refrigeración.',
          'Tu colonia en Tonalá.',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'Tonalá',
        faqs: [
          { q: '¿Dan servicio en Tonalá?', a: 'Sí, damos servicio en Tonalá. Escríbenos tu colonia por WhatsApp para confirmarte la visita.' },
          { q: '¿Cuánto cuesta la revisión en Tonalá?', a: REVISION },
          { q: '¿Reparan cámaras de refrigeración en Tonalá?', a: 'Sí, reparamos cámaras de refrigeración para negocio. Cuéntanos qué tipo de cámara es y qué falla presenta.' },
          FAQ_COMO,
        ],
      },
      { type: 'related', title: 'Otras zonas', links: ['zap', 'tlq'] },
    ],
  },

  // ───────────────────────── FALLAS ─────────────────────────
  {
    key: 'nenfria',
    slug: 'refrigerador-no-enfria-guadalajara',
    group: 'fallas',
    navName: 'Refrigerador no enfría',
    title: 'Refrigerador no enfría en Guadalajara: causas y reparación',
    description:
      'Tu refrigerador no enfría: causas comunes, qué revisar tú y cuándo llamar. Reparación en Guadalajara con revisión de $200. Lun–Sáb 8–19 h.',
    kicker: 'Falla · No enfría',
    h1: 'Refrigerador que no enfría en Guadalajara',
    lead:
      'Si tu refrigerador ya no enfría, no lo dejes pasar: la comida se echa a perder. Aquí van las causas más comunes y lo que puedes revisar. Si sigue igual, lo revisamos por $200.',
    waMsg: 'Hola, mi refrigerador no enfría. Estoy en Guadalajara y necesito revisión.',
    sections: [
      {
        type: 'causes',
        title: 'Causas comunes',
        kicker: 'Por qué un refrigerador no enfría',
        intro: 'Un refrigerador puede dejar de enfriar por varias razones. Estas son de las más habituales:',
        items: [
          { h: 'Condensador sucio o bloqueado', p: 'Si el polvo cubre la zona donde el equipo disipa calor, trabaja más y enfría menos.' },
          { h: 'Ventilador que no funciona', p: 'Si el ventilador que mueve el aire frío se detiene, el frío no llega bien a todo el interior.' },
          { h: 'Hielo en el evaporador', p: 'Cuando falla el deshielo, el hielo tapa el paso del aire y el equipo deja de enfriar de forma pareja.' },
          { h: 'Problemas de arranque del compresor', p: 'Si el compresor no arranca bien, el equipo hace clics o se apaga y se enciende repetidamente.' },
          { h: 'Termostato o sensor de temperatura', p: 'Una lectura equivocada puede hacer que el equipo no trabaje cuando debe.' },
          { h: 'Empaque de puerta dañado', p: 'Si la puerta no sella, entra aire caliente y el equipo no logra mantener la temperatura.' },
        ],
      },
      {
        type: 'list',
        title: 'Qué puedes revisar tú',
        kicker: 'Antes de llamar',
        intro: 'Estas revisiones son sencillas y no requieren abrir el equipo:',
        items: [
          'Confirma que el refrigerador esté conectado y que el contacto tenga corriente.',
          'Revisa que el control de temperatura no esté en una posición muy baja.',
          'Verifica que la puerta cierre bien y que ningún producto la mantenga abierta.',
          'No bloquees las salidas de aire del interior con demasiada comida.',
          'Si limpias la parte trasera o inferior, desconecta primero el equipo.',
        ],
      },
      {
        type: 'prose',
        title: 'Cuida tu comida mientras tanto',
        kicker: 'Seguridad alimentaria',
        paragraphs: [
          'Como referencia general, los alimentos perecederos no deben pasar más de dos horas por encima de 4 °C. Si la falla ya lleva varias horas, pasa lo delicado a una hielera con hielo.',
          'Si el equipo huele a quemado, hace clics repetidos o echa humo, desconéctalo y escríbenos.',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'No enfría',
        faqs: [
          { q: '¿Mi refrigerador no enfría pero hace ruido, qué puede ser?', a: 'Puede tratarse de un ventilador, del arranque del compresor o de hielo en el evaporador. Se confirma con la revisión del equipo.' },
          { q: '¿Cuánto cuesta revisar un refrigerador que no enfría?', a: REVISION },
          { q: '¿Sirve desconectarlo un rato?', a: 'A veces el equipo se normaliza un rato, pero si el problema es hielo o una pieza que falla, vuelve a aparecer. Si se repite, conviene revisarlo.' },
          FAQ_COMO,
        ],
      },
      { type: 'related', title: 'Otras fallas y servicios', links: ['ncongela', 'ruido', 'dom', 'com'] },
    ],
  },
  {
    key: 'ncongela',
    slug: 'refrigerador-no-congela-guadalajara',
    group: 'fallas',
    navName: 'Refrigerador no congela',
    title: 'Refrigerador no congela en Guadalajara: causas y reparación',
    description:
      'El congelador no congela o hay mucha escarcha: causas comunes y qué revisar. Reparación en Guadalajara con revisión de $200. Lun–Sáb 8–19 h.',
    kicker: 'Falla · No congela',
    h1: 'Refrigerador que no congela en Guadalajara',
    lead:
      'Si el congelador ya no congela o se llena de escarcha, algo en el sistema de frío está fallando. Estas son las causas más comunes. Si persiste, lo revisamos por $200.',
    waMsg: 'Hola, mi congelador no congela. Estoy en Guadalajara y necesito revisión.',
    sections: [
      {
        type: 'causes',
        title: 'Causas comunes',
        kicker: 'Por qué el congelador no congela',
        intro: 'Cuando el congelador no congela, estas son algunas de las causas más habituales:',
        items: [
          { h: 'Escarcha en el evaporador', p: 'Si se forma demasiado hielo, el aire frío ya no circula como debe y el congelador pierde capacidad.' },
          { h: 'Falla en el sistema de deshielo', p: 'Cuando el deshielo no trabaja, el hielo se acumula ciclo tras ciclo hasta bloquear el flujo de aire.' },
          { h: 'Ventilador del evaporador', p: 'Si se detiene o hace ruido, el aire frío no se reparte hacia el congelador y el refrigerador.' },
          { h: 'Empaque o puerta que no sella', p: 'La entrada de aire caliente y humedad provoca escarcha y baja el desempeño.' },
          { h: 'Sensor o control de temperatura', p: 'Si no lee bien, el equipo no manda frío cuando debería.' },
          { h: 'Exceso de producto', p: 'Llenar de más puede tapar las salidas de aire e impedir que el frío circule.' },
        ],
      },
      {
        type: 'list',
        title: 'Qué puedes revisar tú',
        kicker: 'Antes de llamar',
        intro: 'Revisiones sencillas que puedes hacer sin abrir el equipo:',
        items: [
          'Verifica que el control de temperatura del congelador esté en la posición correcta.',
          'Revisa que la puerta del congelador cierre bien y que no haya producto atorado.',
          'Retira un poco de producto si las salidas de aire están tapadas.',
          'Observa si hay escarcha gruesa en las paredes o en el fondo.',
        ],
      },
      {
        type: 'prose',
        title: 'Si es el refrigerador el que sí enfría',
        kicker: 'Una pista útil',
        paragraphs: [
          'Cuando la parte del refrigerador enfría pero el congelador no congela, suele apuntar a un problema de circulación de aire o de hielo en el evaporador. Es un dato muy útil para el diagnóstico, así que menciónalo cuando nos escribas.',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'No congela',
        faqs: [
          { q: '¿Por qué se forma tanta escarcha en el congelador?', a: 'Suele deberse a humedad por una puerta que no sella o a una falla del deshielo. Se confirma revisando el equipo.' },
          { q: '¿Cuánto cuesta la revisión?', a: REVISION },
          { q: '¿Puedo seguir usando el congelador mientras tanto?', a: 'Si ya no congela bien, los productos congelados se pueden descongelar. Conviene pasar lo importante a otro lugar y escribirnos.' },
          FAQ_HORARIO,
        ],
      },
      { type: 'related', title: 'Otras fallas y servicios', links: ['nenfria', 'agua', 'dom', 'com'] },
    ],
  },
  {
    key: 'ruido',
    slug: 'refrigerador-hace-ruido-guadalajara',
    group: 'fallas',
    navName: 'Refrigerador hace ruido',
    title: 'Refrigerador hace ruido en Guadalajara: causas y solución',
    description:
      'Tu refrigerador hace ruido: zumbido, rechinido, golpeteo o clics. Causas comunes y cuándo revisarlo. Guadalajara, revisión $200. Lun–Sáb 8–19 h.',
    kicker: 'Falla · Hace ruido',
    h1: 'Refrigerador que hace ruido en Guadalajara',
    lead:
      'Un ruido nuevo suele ser el primer aviso de una falla. Aquí te explicamos qué puede significar cada tipo de ruido. Si el ruido es raro o no se quita, lo revisamos por $200.',
    waMsg: 'Hola, mi refrigerador hace ruido. Estoy en Guadalajara y necesito revisión.',
    sections: [
      {
        type: 'causes',
        title: 'Qué significa cada ruido',
        kicker: 'Escucha con atención',
        intro: 'Según el tipo de ruido, la causa probable cambia:',
        items: [
          { h: 'Zumbido o vibración fuerte', p: 'Puede venir del compresor o de un equipo mal nivelado que vibra contra el piso o la pared.' },
          { h: 'Rechinido o chillido', p: 'Suele relacionarse con un ventilador desgastado, sucio o que roza con hielo.' },
          { h: 'Clics repetidos', p: 'Puede indicar que el compresor intenta arrancar y no lo logra, o que un protector se activa y se desactiva.' },
          { h: 'Golpeteo o raspado', p: 'Con frecuencia es hielo tocando las aspas del ventilador o una pieza floja.' },
          { h: 'Burbujeo o murmullo suave', p: 'Normalmente es el paso del refrigerante y no es motivo de alarma.' },
        ],
      },
      {
        type: 'list',
        title: 'Qué puedes revisar tú',
        kicker: 'Revisiones sencillas',
        intro: 'Antes de escribirnos, puedes descartar lo básico:',
        items: [
          'Verifica que el refrigerador esté bien nivelado y no se mueva al empujarlo.',
          'Asegúrate de que no toque la pared ni muebles cercanos.',
          'Revisa que no haya objetos o botellas tocando la parte trasera.',
          'Fíjate si el ruido aparece solo en cierto momento, por ejemplo al arrancar o al deshelar.',
        ],
      },
      {
        type: 'prose',
        title: 'Cuándo no esperar',
        kicker: 'Señales de alerta',
        paragraphs: [
          'Si el ruido es fuerte, si aparece junto con una pérdida de frío, o si huele a quemado, desconecta el equipo y escríbenos. Describe cómo suena y cuándo ocurre: eso ayuda mucho al diagnóstico.',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'Ruidos',
        faqs: [
          { q: '¿Es normal que el refrigerador haga algo de ruido?', a: 'Sí, un murmullo suave o un burbujeo ocasional es normal. Preocupan los ruidos nuevos, fuertes o que no se quitan.' },
          { q: '¿Cuánto cuesta la revisión?', a: REVISION },
          { q: '¿Puedo grabar el ruido y mandarlo?', a: 'Sí, un video o audio corto por WhatsApp nos ayuda a orientarte mejor antes de la revisión.' },
          FAQ_COMO,
        ],
      },
      { type: 'related', title: 'Otras fallas y servicios', links: ['nenfria', 'agua', 'dom', 'man'] },
    ],
  },
  {
    key: 'agua',
    slug: 'refrigerador-tira-agua-guadalajara',
    group: 'fallas',
    navName: 'Refrigerador tira agua',
    title: 'Refrigerador tira agua en Guadalajara: causas y solución',
    description:
      'Tu refrigerador tira agua o hay charcos debajo: causas comunes y qué revisar. Reparación en Guadalajara con revisión de $200. Lun–Sáb 8–19 h.',
    kicker: 'Falla · Tira agua',
    h1: 'Refrigerador que tira agua en Guadalajara',
    lead:
      'Agua dentro del refrigerador o charcos debajo del equipo suelen tener una causa concreta. Te explicamos las más comunes. Si persiste, lo revisamos por $200.',
    waMsg: 'Hola, mi refrigerador tira agua. Estoy en Guadalajara y necesito revisión.',
    sections: [
      {
        type: 'causes',
        title: 'Causas comunes',
        kicker: 'Por qué un refrigerador tira agua',
        intro: 'Estas son algunas de las causas más habituales:',
        items: [
          { h: 'Drenaje de deshielo tapado o congelado', p: 'El agua del deshielo no sale y se acumula dentro o escurre hacia el piso.' },
          { h: 'Charola de goteo mal colocada o dañada', p: 'Si no recibe bien el agua, puede derramarse debajo del equipo.' },
          { h: 'Puerta que no sella', p: 'El aire caliente y húmedo genera condensación y gotas dentro del refrigerador.' },
          { h: 'Manguera o conexión de agua', p: 'En equipos con dispensador o fábrica de hielo, una conexión floja o dañada puede gotear.' },
          { h: 'Equipo desnivelado', p: 'Si está inclinado, el agua puede escurrir hacia donde no debe.' },
        ],
      },
      {
        type: 'list',
        title: 'Qué puedes revisar tú',
        kicker: 'Revisiones sencillas',
        intro: 'Antes de escribirnos, puedes comprobar lo básico:',
        items: [
          'Fíjate de dónde sale el agua: del interior, de abajo o de la parte trasera.',
          'Revisa que el refrigerador esté nivelado.',
          'Verifica que la puerta cierre bien y que no haya producto que la deje abierta.',
          'Si tiene dispensador de agua, revisa si hay una conexión suelta.',
          'Seca el piso para evitar resbalones y daños.',
        ],
      },
      {
        type: 'prose',
        title: 'Cuida tu piso y tu equipo',
        kicker: 'Mientras llegamos',
        paragraphs: [
          'Un charco constante puede dañar el piso y los muebles cercanos. Coloca una toalla o un recipiente debajo mientras se revisa.',
          'Si el agua llega cerca de contactos eléctricos, desconecta el equipo con cuidado y escríbenos.',
        ],
      },
      { type: 'steps', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        title: 'Preguntas frecuentes',
        kicker: 'Agua',
        faqs: [
          { q: '¿Por qué hay agua dentro de mi refrigerador?', a: 'Lo más común es un drenaje tapado o congelado, o humedad por una puerta que no sella. Se confirma con la revisión.' },
          { q: '¿Cuánto cuesta la revisión?', a: REVISION },
          { q: '¿Puedo usar el refrigerador si tira agua?', a: 'Depende de cuánta agua sea y de dónde salga. Si es poca y no llega a contactos eléctricos, puedes esperar la revisión. Si es mucha, desconéctalo y escríbenos.' },
          FAQ_HORARIO,
        ],
      },
      { type: 'related', title: 'Otras fallas y servicios', links: ['ncongela', 'ruido', 'dom', 'com'] },
    ],
  },
];

// ───────────────────────── SITIO COMPLETO ─────────────────────────
// Páginas de estructura (hubs, nosotros, contacto) y blog. Contenido informativo general;
// no se afirman garantías, tiempos de llegada, marcas ni domicilio.
const POST_DATE = '2026-11-07';

const EXTRA = [
  {
    key: 'servicios',
    slug: 'servicios',
    group: 'sitio',
    kind: 'info',
    navName: 'Servicios',
    title: 'Servicios de reparación de refrigeradores en Guadalajara',
    description:
      'Reparación de refrigeradores domésticos, comerciales y cámaras de refrigeración, más mantenimiento. Revisión $200 en Guadalajara y zona metropolitana.',
    kicker: 'Todo lo que reparamos',
    h1: 'Servicios de reparación de refrigeradores en Guadalajara',
    lead: 'Refrigeradores de casa, equipos de negocio y cámaras de refrigeración. Elige tu caso o la falla que tienes y ve directo a la página que te explica qué hacer.',
    waMsg: 'Hola, quiero información de sus servicios de reparación de refrigeradores.',
    sections: [
      { type: 'cards', id: 'tipos', title: 'Por tipo de equipo', kicker: 'Qué reparamos', links: ['dom', 'com', 'cam', 'man'] },
      { type: 'cards', id: 'por-falla', title: 'Por falla', kicker: 'Lo que más nos escriben', links: ['nenfria', 'ncongela', 'ruido', 'agua'] },
      { type: 'steps', id: 'proceso', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      { type: 'related', id: 'mas', title: 'Más del sitio', links: ['cobertura', 'nosotros', 'blog', 'contacto'] },
    ],
  },
  {
    key: 'cobertura',
    slug: 'cobertura',
    group: 'sitio',
    kind: 'info',
    navName: 'Cobertura',
    title: 'Cobertura: Guadalajara, Zapopan, Tlaquepaque y Tonalá',
    description:
      'Reparación de refrigeradores en Guadalajara, Zapopan, Tlaquepaque y Tonalá. Mira las zonas que atendemos y escríbenos por WhatsApp. Lun–Sáb 8–19 h.',
    kicker: 'Dónde llegamos',
    h1: 'Zonas donde reparamos refrigeradores',
    lead: 'Atendemos la zona metropolitana de Guadalajara. Entra a tu zona para ver las fallas más comunes y cómo pedir el servicio.',
    waMsg: 'Hola, quiero saber si dan servicio en mi zona.',
    sections: [
      {
        type: 'zones',
        id: 'zonas',
        title: 'Zonas',
        kicker: 'Zona metropolitana',
        rows: [
          { name: 'Guadalajara', note: 'Providencia · Americana · Country Club', link: null },
          { name: 'Zapopan', note: 'Andares', link: 'zap' },
          { name: 'Tlaquepaque', note: 'San Pedro Tlaquepaque', link: 'tlq' },
          { name: 'Tonalá', note: 'Tonalá', link: 'ton' },
        ],
      },
      {
        type: 'prose',
        id: 'tu-colonia',
        title: '¿No ves tu colonia?',
        kicker: 'Escríbenos',
        paragraphs: [
          'Las colonias que aparecen son ejemplos de las zonas donde trabajamos, no una lista cerrada. Mándanos tu ubicación por WhatsApp y con gusto te decimos si podemos atenderte.',
        ],
      },
      { type: 'steps', id: 'proceso', title: 'Así trabajamos', kicker: 'Sin sorpresas', steps: STEPS },
      { type: 'related', id: 'mas', title: 'Más del sitio', links: ['servicios', 'nosotros', 'blog', 'contacto'] },
    ],
  },
  {
    key: 'nosotros',
    slug: 'nosotros',
    group: 'sitio',
    kind: 'about',
    navName: 'Nosotros',
    title: 'Nosotros | 10 años reparando refrigeradores en Guadalajara',
    description:
      'Conoce Refrigeradores Express: diez años reparando refrigeradores domésticos, comerciales y cámaras en Guadalajara, con revisión de $200 y diagnóstico claro.',
    kicker: 'Quiénes somos',
    h1: 'Diez años reparando refrigeradores en Guadalajara',
    lead: 'Somos Refrigeradores Express. Reparamos y damos mantenimiento a refrigeradores de casa, equipos de negocio y cámaras de refrigeración.',
    waMsg: 'Hola, quiero más información de Refrigeradores Express.',
    sections: [
      {
        type: 'prose',
        id: 'historia',
        title: 'Lo que hacemos',
        kicker: 'Nuestro trabajo',
        paragraphs: [
          'Llevamos diez años en la reparación de refrigeración en Guadalajara, Zapopan, Tlaquepaque y Tonalá. Atendemos refrigeradores domésticos, equipos comerciales para restaurantes, tiendas y cocinas, y cámaras de refrigeración. También hacemos mantenimiento.',
          'Sabemos que un refrigerador descompuesto no puede esperar: la comida se echa a perder y, en un negocio, cada hora parada cuesta. Por eso la atención es directa, por WhatsApp o por llamada.',
        ],
      },
      {
        type: 'list',
        id: 'forma',
        title: 'Cómo trabajamos',
        kicker: 'Sin sorpresas',
        items: [
          'Primero la revisión, que cuesta $200.',
          'Después te explicamos qué tiene el equipo y qué se repara.',
          'Tú decides antes de que empecemos.',
          'Nos escribes o nos llamas directo, sin intermediarios.',
          'Atendemos de lunes a sábado, de 8:00 a 19:00 h.',
          'Cubrimos Guadalajara, Zapopan, Tlaquepaque y Tonalá.',
        ],
      },
      { type: 'cards', id: 'servicios', title: 'Servicios', kicker: 'Qué reparamos', links: ['dom', 'com', 'cam', 'man'] },
      { type: 'related', id: 'mas', title: 'Más del sitio', links: ['servicios', 'cobertura', 'blog', 'contacto'] },
    ],
  },
  {
    key: 'blog',
    slug: 'blog',
    group: 'sitio',
    kind: 'blog',
    plain: true,
    navName: 'Blog',
    title: 'Blog de refrigeración: consejos y cuidados en Guadalajara',
    description:
      'Consejos para cuidar tu refrigerador, reconocer fallas y evitar paros en tu negocio. Guías claras de Refrigeradores Express, Guadalajara.',
    kicker: 'Consejos y cuidados',
    h1: 'Blog de refrigeración',
    lead: 'Guías cortas para cuidar tu refrigerador, reconocer a tiempo una falla y saber cuándo conviene pedir una revisión.',
    waMsg: 'Hola, leí su blog y tengo una duda de mi refrigerador.',
    sections: [{ type: 'posts', id: 'articulos', title: 'Artículos', kicker: 'Lo más reciente', links: ['p1', 'p2', 'p3', 'p4'] }],
  },
  {
    key: 'contacto',
    slug: 'contacto',
    group: 'sitio',
    kind: 'contact',
    plain: true,
    navName: 'Contacto',
    title: 'Contacto: WhatsApp y teléfono | Refrigeradores Express',
    description:
      'Escríbenos por WhatsApp o llama al 33 1527 3735. Reparación de refrigeradores en Guadalajara, Zapopan, Tlaquepaque y Tonalá. Lun–Sáb 8–19 h.',
    kicker: 'Habla con nosotros',
    h1: 'Contacto',
    lead: 'La forma más rápida es WhatsApp: cuéntanos la falla, la marca y el modelo si los tienes, y tu zona.',
    waMsg: 'Hola, necesito revisión de mi refrigerador en Guadalajara.',
    sections: [
      { type: 'contact', id: 'datos', title: 'Datos de contacto', kicker: 'Así nos encuentras' },
      { type: 'steps', id: 'proceso', title: 'Qué sigue después de escribirnos', kicker: 'Sin sorpresas', steps: STEPS },
      {
        type: 'faq',
        id: 'preguntas',
        title: 'Preguntas frecuentes',
        kicker: 'Antes de escribirnos',
        faqs: [FAQ_COSTO, FAQ_HORARIO, FAQ_COMO, { q: '¿En qué zonas dan servicio?', a: 'En Guadalajara (incluyendo Providencia, Americana y Country Club), Zapopan (incluyendo Andares), Tlaquepaque y Tonalá.' }],
      },
      { type: 'related', id: 'mas', title: 'Más del sitio', links: ['servicios', 'cobertura', 'nosotros', 'blog'] },
    ],
  },

  // ───────────────────────── BLOG ─────────────────────────
  {
    key: 'p1',
    slug: 'blog/senales-de-que-tu-refrigerador-necesita-revision',
    group: 'blog',
    kind: 'post',
    plain: true,
    parent: 'blog',
    date: POST_DATE,
    navName: 'Señales de que tu refrigerador necesita revisión',
    blurb: 'Seis señales que conviene tomar en serio y qué puedes revisar tú antes de llamar.',
    title: 'Señales de que tu refrigerador necesita revisión',
    description:
      'Seis señales de que tu refrigerador necesita revisión: no enfría, hace ruido, tira agua o se escarcha. Qué revisar tú y cuándo pedir ayuda.',
    kicker: 'Blog',
    h1: 'Señales de que tu refrigerador necesita revisión',
    lead: 'Un refrigerador casi siempre avisa antes de dejar de funcionar. Estas son las señales que conviene tomar en serio.',
    waMsg: 'Hola, leí su blog y creo que mi refrigerador necesita revisión.',
    sections: [
      {
        type: 'list',
        id: 'senales',
        title: 'Seis señales a las que hay que hacerles caso',
        items: [
          'La comida se echa a perder más rápido de lo normal.',
          'El interior ya no se siente tan frío como antes, aunque la puerta esté bien cerrada.',
          'Se escucha un ruido nuevo, constante o más fuerte que antes.',
          'Hay agua en el fondo del refrigerador o un charco debajo.',
          'Se forma escarcha o hielo en el congelador o en las paredes.',
          'El motor trabaja casi sin parar o la parte de atrás se siente muy caliente.',
        ],
      },
      {
        type: 'prose',
        id: 'revisar',
        title: 'Qué puedes revisar tú antes de llamar',
        paragraphs: [
          'Comprueba que el equipo esté conectado y que haya luz en el contacto. Revisa que el control de temperatura no se haya movido y que la puerta cierre bien: el hule de la puerta debe sellar parejo, sin huecos ni partes despegadas.',
          'Fíjate también en que la comida no tape las salidas de aire del interior. Si el equipo tiene polvo en la parte trasera o inferior, límpialo con el refrigerador desconectado.',
        ],
      },
      {
        type: 'prose',
        id: 'cuando',
        title: 'Cuándo conviene escribirnos',
        paragraphs: [
          'Si ya revisaste lo anterior y el problema sigue, lo mejor es pedir una revisión. Si ves agua cerca de contactos eléctricos, desconecta el equipo primero.',
          'La revisión cuesta $200. Después te explicamos qué tiene el equipo y qué se repara; tú decides antes de que empecemos.',
        ],
      },
      { type: 'related', id: 'mas', title: 'Fallas y servicios', links: ['nenfria', 'ncongela', 'ruido', 'agua'] },
    ],
  },
  {
    key: 'p2',
    slug: 'blog/cuidados-para-que-tu-refrigerador-dure-mas',
    group: 'blog',
    kind: 'post',
    plain: true,
    parent: 'blog',
    date: POST_DATE,
    navName: 'Cuidados para que tu refrigerador dure más',
    blurb: 'Hábitos sencillos de limpieza, acomodo y temperatura que ayudan a que el equipo trabaje mejor.',
    title: 'Cuidados para que tu refrigerador dure más años',
    description:
      'Hábitos sencillos para que tu refrigerador dure más: limpieza del sello y la parte trasera, acomodo, temperatura y espacio para ventilar.',
    kicker: 'Blog',
    h1: 'Cuidados para que tu refrigerador dure más',
    lead: 'No hay trucos: unos hábitos sencillos ayudan a que el equipo trabaje con menos esfuerzo.',
    waMsg: 'Hola, leí su blog y quiero mantenimiento para mi refrigerador.',
    sections: [
      {
        type: 'list',
        id: 'habitos',
        title: 'Hábitos que ayudan',
        items: [
          'Deja unos centímetros de espacio entre el refrigerador y la pared para que ventile.',
          'Limpia con regularidad el polvo de la parte trasera o inferior, con el equipo desconectado.',
          'Mantén limpio el hule de la puerta y revisa que selle bien.',
          'No lo llenes de más: el aire necesita circular entre los alimentos.',
          'No metas comida caliente; deja que se enfríe un poco antes.',
          'Evita abrir la puerta más tiempo del necesario.',
        ],
      },
      {
        type: 'prose',
        id: 'temperatura',
        title: 'Temperatura adecuada',
        paragraphs: [
          'Como referencia general, el refrigerador trabaja bien alrededor de 4 °C y el congelador a −18 °C. Si ajustaste el control al máximo por costumbre, el equipo trabaja más de la cuenta sin que la comida se conserve mejor.',
        ],
      },
      {
        type: 'prose',
        id: 'mantenimiento',
        title: 'Cuándo conviene un mantenimiento',
        paragraphs: [
          'No hay una fecha única para todos: depende de la edad del equipo y de qué tanto se usa. Si el refrigerador ya hace ruidos nuevos, tarda en enfriar o lo usas en un negocio con uso intenso, conviene revisarlo antes de que falle.',
        ],
      },
      { type: 'related', id: 'mas', title: 'Servicios relacionados', links: ['man', 'dom', 'ruido', 'nenfria'] },
    ],
  },
  {
    key: 'p3',
    slug: 'blog/se-fue-la-luz-como-cuidar-tu-refrigerador',
    group: 'blog',
    kind: 'post',
    plain: true,
    parent: 'blog',
    date: POST_DATE,
    navName: 'Se fue la luz: cómo cuidar tu refrigerador',
    blurb: 'Qué hacer con la comida y con el equipo cuando hay un apagón.',
    title: 'Se fue la luz: cómo cuidar la comida y el refrigerador',
    description:
      'Si se va la luz, no abras el refrigerador, cuida la comida y revisa el equipo cuando regrese. Guía rápida y cuándo pedir una revisión.',
    kicker: 'Blog',
    h1: 'Se fue la luz: cómo cuidar tu refrigerador',
    lead: 'Un apagón no siempre echa a perder la comida, pero sí conviene saber qué hacer.',
    waMsg: 'Hola, se fue la luz y mi refrigerador ya no funciona bien.',
    sections: [
      {
        type: 'list',
        id: 'durante',
        title: 'Mientras no hay luz',
        items: [
          'Mantén cerradas las puertas del refrigerador y del congelador.',
          'No abras para “ver cómo va”: cada apertura deja salir el frío.',
          'Agrupa los alimentos y, si el apagón se alarga, usa hielo en una hielera para lo más delicado.',
        ],
      },
      {
        type: 'prose',
        id: 'comida',
        title: 'Con la comida',
        paragraphs: [
          'Como referencia general, un refrigerador cerrado conserva el frío unas cuatro horas, y un congelador lleno puede aguantar bastante más que uno a medias. Si dudas de un alimento, es mejor no arriesgarte.',
        ],
      },
      {
        type: 'prose',
        id: 'regreso',
        title: 'Cuando regresa la luz',
        paragraphs: [
          'Observa que el equipo arranque y empiece a enfriar con normalidad. Si no enciende, hace un ruido raro o tras unas horas sigue sin enfriar, escríbenos para una revisión. Si hubo picos de voltaje y notas algo extraño, también conviene que lo revisen.',
        ],
      },
      { type: 'related', id: 'mas', title: 'Fallas y servicios', links: ['nenfria', 'ruido', 'dom', 'contacto'] },
    ],
  },
  {
    key: 'p4',
    slug: 'blog/como-evitar-paros-en-refrigeracion-comercial',
    group: 'blog',
    kind: 'post',
    plain: true,
    parent: 'blog',
    date: POST_DATE,
    navName: 'Cómo evitar paros en refrigeración comercial',
    blurb: 'Rutinas simples para restaurantes, tiendas y cocinas que no pueden parar.',
    title: 'Cómo evitar paros en la refrigeración de tu negocio',
    description:
      'Rutinas simples para evitar paros en refrigeración comercial: limpieza, sellos, ventilación, registro de temperatura y mantenimiento preventivo.',
    kicker: 'Blog',
    h1: 'Cómo evitar paros en refrigeración comercial',
    lead: 'En un negocio, un equipo parado es mercancía en riesgo y ventas perdidas. Estas rutinas ayudan a detectar a tiempo.',
    waMsg: 'Hola, tengo un negocio y necesito revisar mi equipo de refrigeración.',
    sections: [
      {
        type: 'list',
        id: 'rutinas',
        title: 'Rutinas que ayudan',
        items: [
          'Revisa a diario que las puertas cierren bien y que el hule esté en buen estado.',
          'Mantén limpio el condensador y sin obstáculos las salidas de aire.',
          'No bloquees la ventilación del equipo con cajas ni mercancía.',
          'Anota la temperatura del equipo con regularidad: un cambio lento se nota antes en el registro.',
          'No sobrecargues el equipo; la mercancía necesita aire alrededor.',
          'Avisa a tiempo cuando notes ruidos nuevos, hielo de más o tiempos de enfriamiento más largos.',
        ],
      },
      {
        type: 'prose',
        id: 'preventivo',
        title: 'El mantenimiento preventivo',
        paragraphs: [
          'Revisar el equipo antes de que falle cuesta menos que atender un paro en pleno servicio. Si tu negocio depende del frío, vale la pena tener la revisión programada.',
        ],
      },
      { type: 'related', id: 'mas', title: 'Servicios para negocio', links: ['com', 'cam', 'man', 'contacto'] },
    ],
  },
];

export const PAGES = [...CORE, ...EXTRA];
