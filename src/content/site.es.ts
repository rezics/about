import type { Site } from './schema';

export const site: Site = {
  name: 'REZICS',
  url: 'https://about.rezics.com',
  productUrl: 'https://rezics.com',
  meta: {
    title: 'REZICS | Un índice universal y una comunidad abierta',
    description:
      'En REZICS, los libros, el anime, el manga, los videojuegos, el software, las novelas visuales, los servidores MCP, las habilidades y las API tienen una identidad propia. Las personas debaten, valoran, crean listas y escriben en Wiki+ sobre ellos.',
  },
  nav: {
    products: 'Productos',
    engine: 'Módulos',
    developers: 'Desarrolladores',
    roadmap: 'Hoja de ruta',
    menu: 'Menú',
    close: 'Cerrar',
    skip: 'Ir al contenido principal',
    action: 'Ir a REZICS',
    productsIntro: {
      title: 'Nueve tipos, un índice',
      body: 'Cada tipo tiene su propia página y comparte las mismas partes y el mismo grafo.',
      all: 'Ver todos',
    },
    engineIntro: {
      title: 'Cinco módulos, quince partes',
      body: 'Estos módulos forman cada tipo de elemento. Las comunidades y los desarrolladores también los usan para crear.',
      all: 'Ver el motor',
    },
    groups: { works: 'Obras y software', agents: 'Agentes de IA y desarrolladores' },
  },
  home: {
    hero: {
      headline: 'Todo lo que te importa, en un mismo índice.',
      lede: 'Libros, anime, manga, videojuegos, software, novelas visuales y herramientas para agentes de IA. Cada elemento tiene una sola identidad, con sus debates, valoraciones y páginas de Wiki.',
      primary: 'Ir a REZICS',
      imageAlt: 'Nueve hojas de papel de distintos colores se superponen sobre un fondo cálido, iluminadas por la luz de una ventana desde arriba a la izquierda.',
    },
    kinds: {
      eyebrow: 'Nueve tipos',
      headline: ['Cada tipo tiene su lugar;', 'por detrás, un mismo índice y una misma cuenta.'],
      lines: {
        anime: 'Temporadas, episodios y calendario de emisión',
        manga: 'Tomos, capítulos y traducciones',
        software: 'Compatibilidad y disponibilidad',
      },
    },
    statement: {
      text: 'Una novela, su manga, anime y videojuego',
      sub: 'tienen cuatro identidades y un grafo de relaciones en REZICS. Si alguien corrige un dato en cualquier idioma, se actualizan todas las páginas que lo usan.',
    },
    identity: {
      eyebrow: 'Índice universal',
      headline: 'Los nombres en distintos idiomas apuntan a la misma identidad.',
      body: [
        'Una obra puede tener nombres en chino, japonés e inglés. En REZICS, todos apuntan a la misma identidad. Las ediciones, traducciones y adaptaciones se distinguen y se relacionan entre sí.',
        'Tu biblioteca, tus valoraciones y tu progreso siguen esa identidad. Aunque cambies de idioma, verás el mismo registro.',
      ],
      link: 'Ver el índice universal',
      imageAlt: 'Cinco hojas del mismo tamaño y de distintos colores se apilan desplazadas, como cinco versiones de una misma hoja.',
    },
    community: {
      eyebrow: 'Comunidades y sitios',
      headline: 'Reúnete en torno a las obras y crea tu propio sitio.',
      body: [
        'Los debates, las valoraciones y las listas se vinculan directamente a las obras. Las comunidades reúnen a personas en torno a una historia, un idioma o un interés común, con sus propios miembros, reglas y moderación.',
        'Usa una Zone para crear un sitio completo para tu comunidad. Personaliza las páginas, la navegación y el tema con datos del mismo grafo.',
      ],
      link: 'Ver comunidades y sitios',
      imageAlt: 'Una hoja de papel verde azulado oscuro, doblada como una casa, se alza sobre el papel junto a varias hojas pequeñas de colores.',
    },
    platform: {
      eyebrow: 'Cinco módulos',
      headline: 'Una plataforma que es biblioteca, tienda, catálogo, foro y Wiki.',
      lead: 'Los cinco módulos forman los nueve tipos de elementos. Para añadir otro, basta con configurarlo. No hace falta crear una aplicación aparte.',
      modules: {
        'universal-index': 'Una identidad, todas las ediciones, nombres y relaciones entre idiomas',
        community: 'Comunidades, debates, valoraciones, listas y seguimiento',
        zones: 'Cada comunidad crea su sitio y su Wiki+ sobre el grafo compartido',
        create: 'Escritura, lectura, ediciones, publicación y licencias',
        trust: 'Fuentes y pruebas, derechos, reglas de moderación y privacidad',
      },
    },
    agents: {
      eyebrow: 'Desarrolladores y agentes de IA',
      headline: 'La misma API, del sitio web a tu aplicación.',
      lead: 'Usa la API, los servidores MCP y el SDK para que tu aplicación o agente lea datos, gestione tu biblioteca y envíe propuestas. Los agentes actúan con tu autorización y las personas revisan los cambios antes de aplicarlos.',
      link: 'Ver recursos para desarrolladores',
      code: ['# Busca en el catálogo sin iniciar sesión', 'curl -G \\', '  "$REZICS_API/v1/search/catalogue" \\', '  --data-urlencode "q=novela ligera" \\', '  -d language=es -d limit=5'].join('\n'),
      codeLabel: 'Ejemplo de una solicitud para buscar en el catálogo de REZICS con curl',
      caption: 'Define REZICS_API con la dirección del servicio de API. language indica el idioma de los resultados de búsqueda.',
    },
    principles: {
      eyebrow: 'Principios',
      headline: 'Nuestro compromiso contigo.',
      items: [
        { title: 'Código abierto', body: 'REZICS publica su código fuente con la licencia AGPL-3.0 para que cualquiera pueda consultarlo, instalarlo y mejorarlo.' },
        { title: 'Sin rastreadores publicitarios', body: 'No usamos rastreadores publicitarios ni vendemos datos personales.' },
        { title: 'Tus datos privados no se usan para entrenar', body: 'Por defecto, los borradores privados y el historial de lectura no se usan para entrenar modelos de IA. Para hacerlo, tendrías que aceptarlo de forma explícita.' },
        { title: 'Tus datos son tuyos', body: 'Puedes exportar tu biblioteca, tus listas y tus borradores. La participación básica y la exportación son gratuitas.' },
        { title: 'La automatización siempre se identifica', body: 'Las acciones automatizadas, tanto oficiales como de terceros, se identifican como tales y muestran quién las opera.' },
      ],
    },
    finale: {
      headline: 'Trae lo que te importa.',
      body: 'Crea una cuenta y reúne tu biblioteca, tus listas y tus valoraciones en un mismo grafo.',
    },
  },
  engine: {
    meta: {
      title: 'Motor REZICS: módulos y partes',
      description:
        'Los nueve tipos de elementos de REZICS usan las mismas partes, agrupadas en cinco módulos. Descubre qué ocho partes usa cada tipo y qué hace cada módulo.',
    },
    hero: {
      headline: 'Un motor para nueve tipos de elementos.',
      lede: 'Para añadir un tipo nuevo hacen falta vocabulario, asignaciones, datos iniciales y una Zone, no otra aplicación. Cada parte se implementa una vez y sirve tanto para el primer tipo como para el décimo.',
    },
    parts: {
      headline: 'Quince partes, ocho para cada tipo.',
      body: 'Cada tipo elige ocho partes y siempre empieza por la identidad. Al cambiar de tipo, las partes compartidas mantienen su lugar y solo cambian las demás.',
      pick: 'Elige un tipo',
    },
    modules: {
      headline: 'Las partes pertenecen a cinco módulos.',
      body: 'El índice universal gestiona las identidades, la comunidad reúne a las personas, las Zones gestionan los sitios, creación y publicación cubre el origen y la distribución de las obras, y confianza gestiona las fuentes, los derechos y la privacidad.',
    },
  },
  kindPage: {
    featuresHeading: 'Qué puedes hacer aquí',
    partsHeading: 'Formado con estas ocho partes',
    partsCaption: 'Cada tipo elige partes del mismo conjunto.',
    connectionsHeading: 'Tipos relacionados',
    next: 'Siguiente tipo',
  },
  modulePage: { usedByHeading: 'Tipos que más lo usan', next: 'Siguiente módulo' },
  developers: {
    meta: {
      title: 'Desarrolladores de REZICS: API y MCP',
      description:
        'Cada función de REZICS empieza como una operación de API. Aquí presentamos la documentación OpenAPI, los servidores MCP, las aplicaciones OAuth, el kit local para Wiki y el código abierto.',
    },
    hero: {
      headline: 'La API puede hacer todo lo que hace el sitio web.',
      lede: 'Cada función empieza como una operación de API y el sitio web es solo uno de sus clientes. Tu aplicación, tus scripts y tus agentes de IA usan las mismas operaciones y permisos para obtener el mismo resultado.',
    },
    facts: [
      {
        title: 'API HTTP',
        body: 'Las rutas, los parámetros y todas las respuestas están definidos en la documentación pública de OpenAPI. Los errores usan el formato Problem Details y códigos estables para que los programas puedan decidir qué hacer.',
      },
      {
        title: 'Servidor MCP',
        body: 'El servidor MCP remoto ofrece las operaciones de la API como herramientas. Cada llamada sigue el mismo proceso HTTP y mantiene los mismos permisos, recibos y límites de uso. Los agentes de IA pueden registrarse como clientes, pero el registro no les concede acceso a ningún recurso.',
      },
      {
        title: 'SDK de TypeScript',
        body: 'Los tipos del cliente proceden directamente de la definición de la API, por lo que los campos, resultados y errores coinciden con los del servidor.',
      },
      {
        title: 'Aplicaciones OAuth',
        body: 'Las aplicaciones externas obtienen autorización mediante el flujo de código de autorización con PKCE. Los permisos se enumeran y se pueden revocar en cualquier momento.',
      },
      {
        title: 'Kit local para Wiki',
        body: 'Quien tenga el texto puede usar en su equipo el agente de IA que elija para leer archivos TXT, EPUB y guiones de novelas visuales. El agente extrae personajes, lugares y eventos por capítulo, y envía propuestas con la ubicación de cada fuente. El kit usa la licencia Apache-2.0, no requiere una cuenta de REZICS y no envía datos de telemetría.',
      },
      {
        title: 'Código abierto',
        body: 'El código fuente del núcleo de la plataforma está disponible con la licencia AGPL-3.0. Puedes estudiarlo, instalarlo por tu cuenta y proponer cambios.',
      },
    ],
    sample: {
      caption: 'La búsqueda pública no requiere un token. La respuesta a la búsqueda de «novela ligera» incluye los resultados ordenados, el grado de precisión del recuento y el cursor de la página siguiente.',
      language: 'sh',
      code: [
        'curl -G "$REZICS_API/v1/search/catalogue" \\',
        '  --data-urlencode "q=novela ligera" \\',
        '  -d language=es \\',
        '  -d limit=5',
      ].join('\n'),
    },
    statement: 'Un clic y una llamada ejecutan la misma operación.',
  },
  roadmap: {
    meta: {
      title: 'Hoja de ruta de REZICS',
      description:
        'REZICS abre sus puertas comunidad a comunidad con un solo motor. Empieza con las novelas ligeras y las novelas visuales, y continúa con Wiki+ para cada obra, la creación por entregas, más tipos de contenido, eventos y lugares, y la publicación directa.',
    },
    hero: {
      headline: 'De las novelas ligeras a todo tipo de obras.',
      lede: 'REZICS abre una comunidad cada vez y cada una se basa en el mismo grafo y las mismas partes. Las identidades y relaciones que ya existen sirven para el siguiente paso.',
    },
    steps: [
      {
        title: 'Un grafo, un motor',
        body: 'Cada obra, persona y organización tiene una identidad en un grafo compartido. Cada función se implementa una sola vez y los tipos que la necesitan la usan según su configuración.',
      },
      {
        title: 'Novelas ligeras y novelas visuales',
        body: 'Primero llega a quienes siguen series en varios idiomas y a quienes buscan novelas visuales que puedan jugar. Son dos vistas del mismo catálogo y biblioteca, con una Wiki para cada obra, ocho idiomas de interfaz y acceso desde el móvil y el ordenador.',
      },
      {
        title: 'Wiki+ para cada obra',
        body: 'El mismo proceso se extiende a todas las obras. Quienes tengan el texto pueden usar su propio agente de IA para proponer datos capítulo a capítulo. Tras la revisión, los datos se publican en la Zone de Wiki de la obra y cada lector los ve según su progreso.',
      },
      {
        title: 'Publicación por entregas y creadores',
        body: 'Las pequeñas comunidades de ficción por entregas y los creadores de novelas visuales se incorporan con sus obras y calendarios de publicación. Los autores mantienen la información de sus mundos junto al manuscrito y los lectores debaten junto a cada capítulo.',
      },
      {
        title: 'Un tipo tras otro',
        body: 'Se incorporan poco a poco los catálogos de ciencia ficción y fantasía, la ficción interactiva, los servidores MCP y las habilidades para agentes, los modelos y las evaluaciones. Cada tipo necesita vocabulario, asignaciones, datos iniciales y una Zone. El backend no requiere código específico para añadirlo.',
      },
      {
        title: 'En el mundo real',
        body: 'Ferias, firmas y eventos de lanzamiento vinculados a las obras, además de lugares públicos para visitar. Los lugares se filtran según tu progreso para evitar destripes.',
      },
      {
        title: 'Publicación directa',
        body: 'REZICS distribuye libros electrónicos y videojuegos pequeños sin DRM para creadores contratados. Los lectores pagan una vez y pueden volver a descargar según las condiciones de compra. Los creadores ven cada deducción.',
      },
      {
        title: 'Un sitio para cada comunidad',
        body: 'Quienes gestionan comunidades y pequeñas editoriales usan una Zone para administrar un sitio completo, importar datos y gestionar publicaciones. Los desarrolladores acceden a la API y al flujo de actualizaciones.',
      },
    ],
    statement: 'Cada comunidad nueva añade relaciones al grafo que la siguiente puede aprovechar.',
  },
  product: {
    headline: 'Nueve tipos de elementos, en REZICS.',
    body: 'Con una cuenta puedes seguir libros y series, registrar tu progreso en videojuegos, escribir valoraciones y crear listas. También puedes usar una Zone para crear un sitio para tu comunidad.',
  },
  notFound: {
    meta: {
      title: 'No se encontró esta página',
      description:
        'Esta dirección no corresponde a ninguna página. Puede que tenga un error o que la página se haya movido. Vuelve al inicio de REZICS y explora sus nueve tipos de contenido y cinco módulos.',
    },
    eyebrow: '404',
    headline: 'Esta página no está aquí.',
    body: 'Puede que la dirección tenga un error o que la página se haya movido. Vuelve al inicio o explora los nueve tipos de contenido.',
    back: 'Volver al inicio',
    imageAlt: 'Una hoja de papel azul claro tiene un hueco cuadrado en el centro que deja ver el papel de debajo. La pieza recortada ha desaparecido.',
    restart: 'Explorar los nueve tipos de contenido',
  },
  ui: {
    pause: 'Pausar animación',
    play: 'Reproducir animación',
    pick: 'Cambiar de tipo',
  },
  footer: {
    tagline: 'Un índice universal y una comunidad abierta',
    sitemap: 'Mapa del sitio',
    agents: 'Agentes de IA',
    source: 'Código fuente',
    sourceUrl: 'https://github.com/rezics/rezics-next',
    colophon: 'Este sitio no analiza el tráfico ni carga recursos de terceros.',
    copyright: '© 2026 REZICS Inc.',
  },
};
