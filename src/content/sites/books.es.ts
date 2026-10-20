// 書庫 (books): every visible string of the books site. Design record and sources:
// src/sites/books/SITE.md and src/sites/books/facts.md. The eight part notes and the kind's
// name come from src/content/kinds.ts and are imported by the pages, never copied here.
// Shapes follow the v3 parts (V3-SPEC): hero, sections (eyebrow, heading, lead), photo rows,
// facts lists (title left, text right), statements (a line and its muted continuation), tile
// masonry and the closing.
import type { MiniSite } from '../schema';

export type TitledText = {
  title: string;
  body: string;
};

/** A section: eyebrow label, serif heading, lead text. */
type Head = { label: string; headline: string; lead?: string };

/** A large serif statement: `text`, then its muted continuation `sub`; `note` sits under it. */
export type StatementText = { text: string; sub: string; note?: string };

/** A paper still-life picture: its alt text. Files live in public/images/sites/books/. */
type Picture = { alt: string };

export type BooksStrings = {
  /** Shared labels across the site's pages; `closing` ends every page. */
  common: { contents: string; nextPage: string; nextSite: string; closing: { title: string; body: string } };
  landing: {
    hero: { headline: string; lede: string } & Picture;
    /** Photo row: the editions picture beside one fictional series' editions (示意). */
    editions: Head & { lead: string; caption: string; link: string } & Picture;
    /** Facts list: how the bookmark counts across editions and languages (示意). */
    progress: Head & { steps: TitledText[] };
    reading: StatementText;
    /** Photo row: the folded strip beside writing and publishing. */
    writing: Head & { body: string[]; link: string } & Picture;
    /** Tile masonry of the site's own pages: a short line per tile. */
    pages: Head & { rows: { slug: string; line: string }[] };
    parts: Head;
    /** Tile masonry of neighbouring kinds. */
    connections: Head & { tiles: { kind: 'anime' | 'manga' | 'visual-novels' | 'games'; line: string }[] };
  };
  work: {
    hero: { headline: string; lede: string };
    /** The example's title page (text only, per EXAMPLE-WORK.md). */
    example: { title: string; original: string; author: string; caption: string };
    sections: Head & { rows: (TitledText & { example: string })[] };
    action: Head & { rows: TitledText[]; caption: string };
    ratings: Head & { rows: TitledText[] };
    edit: Head & { rows: TitledText[] };
    languages: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  wiki: {
    /** The page head beside the cut-out picture. */
    hero: { headline: string; lede: string } & Picture;
    flow: Head & { steps: TitledText[] };
    position: Head & {
      control: string;
      positions: { label: string; chapter: number }[];
      groups: { people: string; events: string };
      source: string;
      aliases: string;
      entries: { group: 'people' | 'events'; name: string; aliases?: string; chapter: number; note: string }[];
      /** What a folded entry says: the chapter it appears in (`{n}`). */
      later: string;
      status: string;
      statusAll: string;
      rail: string;
      rules: string[];
    };
    text: StatementText & { facts: TitledText[] };
    /** Tile masonry of a wiki's own pages (示意, not links). */
    zone: Head & { tiles: { name: string; line?: string }[]; caption: string };
    review: Head & { states: TitledText[]; rules: string[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  editions: {
    /** The page head beside the stack picture. */
    hero: { headline: string; lede: string } & Picture;
    releases: Head & { kinds: TitledText[] };
    translations: Head & { rows: TitledText[]; stateLabel: string; states: string[]; notes: string[] };
    sameWork: Head & { rows: TitledText[]; caption: string };
    orders: Head & {
      rows: [string, string];
      tiles: string[];
      /** Reading order as indexes into `tiles`. */
      reading: number[];
      notes: TitledText[];
    };
    isbn: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  library: {
    /** The page head beside the three strips. */
    hero: { headline: string; lede: string } & Picture;
    /** Three reads of one book as three strips, the photograph seen flat (`share`: its length). */
    reads: Head & { rows: (TitledText & { share: number })[]; caption: string };
    move: Head & { steps: TitledText[]; retention: string };
    continue: StatementText;
    shelf: Head & { rows: TitledText[] };
    privacy: Head & { rows: TitledText[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  serial: {
    /** The page head beside the folded strip. */
    hero: { headline: string; lede: string } & Picture;
    safe: Head & { rows: TitledText[] };
    mirror: Head & { rows: TitledText[]; notes: string[] };
    ai: Head & { rows: TitledText[]; notes: string[] };
    world: Head & { items: string[] };
    backup: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  publish: {
    hero: { headline: string; lede: string };
    buy: Head & { steps: TitledText[]; caption: string };
    statement: Head & { rows: TitledText[]; note: string };
    distributed: Head & { rows: TitledText[]; policy: TitledText[] };
    community: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
};

const strings: BooksStrings = {
  common: {
    contents: 'Contenido de esta página',
    nextPage: 'Página siguiente',
    nextSite: 'Tipos relacionados',
    closing: {
      title: 'Abre tu biblioteca para saber qué leer después.',
      body: 'Cada libro, edición y lectura queda registrada en la misma cuenta.',
    },
  },

  landing: {
    hero: {
      headline: 'Una obra, todas sus ediciones y la página que estás leyendo.',
      lede: 'El original y las traducciones, los tomos y las recopilaciones están diferenciados y enlazados con la misma obra. La próxima lectura, la Wiki y los debates siguen tu progreso.',
      alt: 'Una fila de hojas verde oscuro se despliega con una tira verde claro en el centro, como un marcapáginas.',
    },
    editions: {
      label: 'Ediciones',
      headline: 'Cada publicación tiene su propio registro.',
      lead: 'En una misma serie de novelas ligeras, la edición original en japonés, las ediciones en chino tradicional e inglés y la recopilación en chino tradicional son publicaciones distintas, con diferentes volúmenes. Con o sin ISBN y aunque solo se publique en línea, todo pertenece a una misma obra en la biblioteca.',
      caption: 'Ejemplo: una serie ficticia de novelas ligeras de doce tomos.',
      link: 'Ver ediciones y series',
      alt: 'Hojas verdes de distintos tamaños se apilan alineadas en la esquina inferior izquierda. Una de ellas es azul claro.',
    },
    progress: {
      label: 'Progreso de lectura',
      headline: 'El marcapáginas indica por dónde empezar el siguiente libro.',
      lead: 'Volvamos a la serie ficticia de doce tomos: la edición en chino tradicional llega al tomo 6 y la japonesa al tomo 12. Acabas de leer el tomo 6 en chino tradicional.',
      steps: [
        { title: 'Cada tomo es una obra', body: 'Cada tomo de la serie es una obra. El tomo 7 es el mismo, aunque se publique en distintos idiomas.' },
        { title: 'La recopilación cuenta una vez', body: 'La recopilación en chino tradicional incluye los tomos 1 a 3 y cuenta como una publicación. Al terminarla, cada tomo cuenta como leído una vez, sin duplicados.' },
        { title: 'El siguiente libro, en tu idioma', body: 'El tomo 7 aún no está disponible en chino tradicional. Tu biblioteca te indica que estás al día con esa edición y te avisará cuando se publique el tomo 7.' },
        { title: 'Cambiar de idioma también cuenta', body: 'Si lees primero los tomos 7 y 8 en japonés y luego vuelves al chino tradicional, esos tomos siguen contando como leídos. Las traducciones son textos distintos de la misma obra y no tienes que empezar el progreso de nuevo.' },
        { title: 'Tener un libro no significa haberlo leído', body: 'Tener un ejemplar en la estantería y haberlo leído son dos cosas distintas.' },
      ],
    },
    reading: {
      text: 'La Wiki y los debates se detienen donde tú has llegado;',
      sub: 'los personajes, eventos y debates posteriores quedan ocultos. Puedes mostrarlo todo cuando quieras.',
    },
    writing: {
      label: 'Escritura y publicación',
      headline: 'Quienes escriben también tienen un lugar en la biblioteca.',
      body: [
        'Los autores escriben, programan y publican sus capítulos aquí. Los lectores retoman la lectura donde la dejaron.',
        'Los creadores contratados venden directamente libros electrónicos autorizados sin DRM. La página de compra está junto a los debates de la obra.',
      ],
      link: 'Ver cómo se escribe por entregas',
      alt: 'Una larga tira de papel verde oscuro está doblada en páginas y se extiende plana en la segunda mitad. Una hoja pequeña verde claro descansa en un pliegue.',
    },
    pages: {
      label: 'Páginas de la biblioteca',
      headline: 'Busca, lee y escribe libros aquí.',
      rows: [
        { slug: 'work', line: 'Todo sobre una obra, desde una sola página' },
        { slug: 'wiki', line: 'Crea una Wiki con tu agente de IA' },
        { slug: 'editions', line: 'Traducciones, recopilaciones y series bien diferenciadas' },
        { slug: 'library', line: 'Registra cada lectura' },
        { slug: 'serial', line: 'Escribe y lee capítulo a capítulo' },
        { slug: 'publish', line: 'Vende libros electrónicos sin DRM directamente a los lectores' },
      ],
    },
    parts: {
      label: 'Partes',
      headline: 'Ocho partes forman la biblioteca.',
      lead: 'El anime, el manga y los videojuegos usan las mismas partes. La biblioteca elige ocho de ellas.',
    },
    connections: {
      label: 'Tipos relacionados',
      headline: 'Las historias de los libros también aparecen en otros tipos.',
      lead: 'Desde la página de la obra original puedes encontrar todas sus adaptaciones.',
      tiles: [
        { kind: 'anime', line: 'El anime adaptado se enlaza con la obra original' },
        { kind: 'manga', line: 'Las versiones en manga tienen valoraciones propias' },
        { kind: 'visual-novels', line: 'Comparte catálogo y biblioteca con las novelas ligeras' },
        { kind: 'games', line: 'Los videojuegos del mismo autor comparten su identidad' },
      ],
    },
  },

  work: {
    hero: {
      headline: 'Todo sobre una obra empieza en esta página.',
      lede: 'La página de la obra es el centro de la biblioteca. Los datos, las valoraciones, tus ediciones y progreso, las series y adaptaciones, la Wiki y los debates aparecen en el orden en que los necesitas al leer.',
    },
    example: {
      title: 'A Certain Magical Index',
      original: 'とある魔術の禁書目録',
      author: 'Kazuma Kamachi',
      caption: 'El título aparece en tu idioma y el original queda a un lado. A continuación, recorremos la página de esta obra de arriba abajo.',
    },
    sections: {
      label: 'Ocho secciones',
      headline: 'Ocho secciones, de arriba abajo.',
      lead: 'Las secciones que esta obra no necesita se omiten. Las demás mantienen su orden y sus enlaces.',
      rows: [
        {
          title: 'Identidad y siguiente paso',
          body: 'Portada, título, autor y valoraciones con su escala, número de personas y alcance. Al lado están la edición que elegiste, tu estado de lectura y tu progreso.',
          example: 'Has llegado al tomo 5 y el botón principal dice «Continuar leyendo».',
        },
        {
          title: 'Descripción',
          body: 'Una descripción sin destripes, datos básicos, etiquetas y avisos de contenido. Al desplegarla, puedes ver todos los datos, las fuentes y la opción «Proponer una corrección».',
          example: 'Novela ligera escrita por Kazuma Kamachi e ilustrada por Kiyotaka Haimura. La serie original se publica desde 2004.',
        },
        {
          title: 'Tus ediciones y dónde conseguirlas',
          body: 'Primero aparece la edición que elegiste, luego otras que coinciden y, por último, una lista completa que puedes recorrer por páginas.',
          example: 'La edición original en japonés y las traducciones al chino tradicional y al inglés indican sus traductores.',
        },
        {
          title: 'Tomos y relaciones',
          body: 'Primero aparece la siguiente parte que no has terminado, luego los tomos en orden y después las secuelas y adaptaciones. El orden de publicación y el de lectura recomendado aparecen por separado.',
          example: 'La serie original, «Nuevo Testamento» y «Testamento del Génesis» están vinculadas como secuelas.',
        },
        {
          title: 'Explora la Wiki',
          body: 'Consulta los personajes principales, los créditos relevantes, la cronología y las guías de capítulos hasta donde has avanzado, con enlaces a las páginas de Wiki.',
          example: 'Si has llegado al tomo 5, la cronología se detiene en ese tomo.',
        },
        {
          title: 'Valoraciones y reseñas',
          body: 'La distribución y el número de valoraciones, junto con la pregunta, quién valoró y qué se valoró. Puedes filtrar por edición o idioma de la reseña. No hace falta valorar antes de escribir una reseña.',
          example: 'La valoración de la historia se calcula por separado de la de una traducción concreta.',
        },
        {
          title: 'Debates y comunidad',
          body: 'La obra, cada tomo y cada edición tienen su propio debate. No hace falta unirse a la comunidad para leerlo.',
          example: 'Para hablar del tomo 5, abre el debate junto a ese tomo.',
        },
        {
          title: 'Listas y descubrimiento',
          body: 'Consulta las listas que incluyen esta obra y sus órdenes de lectura, con los motivos correspondientes. Más abajo están los identificadores, las fuentes y el historial de cambios.',
          example: 'Una lista para empezar con novelas ligeras explica por qué la incluye.',
        },
      ],
    },
    action: {
      label: 'Botón principal',
      headline: 'Solo hay un botón principal en la parte superior.',
      lead: 'El texto del botón depende de tu relación con la obra. Seguirla y añadirla a una lista son acciones distintas.',
      rows: [
        { title: 'Aún no has elegido una edición', body: 'El botón dice «Elegir edición».' },
        { title: 'Has elegido una edición, pero aún no has empezado', body: 'El botón dice «Empezar a leer».' },
        { title: 'Has empezado a leer', body: 'El botón dice «Continuar leyendo» y te lleva directamente a donde lo dejaste.' },
      ],
      caption: 'En el móvil, la portada se reduce a una imagen pequeña junto al título. La identidad, edición, estado y botón aparecen en la primera pantalla.',
    },
    ratings: {
      label: 'Valoraciones',
      headline: 'La valoración indica qué se está valorando.',
      lead: 'Quienes leen el original valoran la historia, quienes leen una traducción también pueden valorar la traducción y quienes escuchan un audiolibro pueden valorar la narración.',
      rows: [
        { title: 'Qué se valora', body: 'La historia, la traducción y la narración tienen valoraciones separadas.' },
        { title: 'De quién es la valoración', body: 'Cada media indica quién ha valorado: todo el mundo, una comunidad a la que perteneces u otra comunidad.' },
        { title: 'Series y tomos', body: 'Las valoraciones de la serie se mantienen separadas de las de cada tomo.' },
      ],
    },
    edit: {
      label: 'Cambios',
      headline: 'Edita tus registros directamente y propone cambios a los datos compartidos.',
      rows: [
        { title: 'Edita tus datos y deshaz los cambios', body: 'El estado de lectura, el progreso, las valoraciones y las listas. Puedes deshacer un cambio con un clic.' },
        { title: 'Propón una corrección para que la revise una persona', body: 'Los datos, relaciones, títulos y alias. Cada propuesta incluye sus fuentes y una persona la revisa antes de aplicarla.' },
      ],
    },
    languages: {
      text: 'El idioma de la interfaz, el título y la edición',
      sub: 'se configura por separado.',
      note: 'Si cambias la interfaz al inglés, no se sustituye la traducción al chino tradicional que lees. Que un título esté traducido al chino no significa que exista una edición en ese idioma. Las reseñas también indican su idioma.',
    },
    finaleLead: 'En el interior de la página, el contenido se despliega capítulo a capítulo según tu progreso.',
  },

  wiki: {
    hero: {
      headline: 'Cada libro tiene su propia Wiki.',
      lede: 'Quien tiene el texto puede usar un agente de IA en su propio equipo para organizar personajes, lugares y eventos capítulo a capítulo. Tras la revisión humana, se publica en la Wiki. Cada lector solo ve lo que ha leído.',
      alt: 'Una hoja verde oscuro tiene cortes de distintas longitudes. Los fragmentos están ordenados junto a ella sobre una cartulina azul claro.',
    },
    flow: {
      label: 'Del archivo a la Wiki',
      headline: 'De un archivo a una Wiki.',
      steps: [
        { title: 'Tu archivo', body: 'TXT o EPUB, guardado en tu propio equipo.' },
        {
          title: 'Tu agente de IA',
          body: 'El kit divide el texto en fragmentos con su ubicación exacta. Tu agente los lee capítulo a capítulo y registra los personajes, sus alias, sus relaciones, los eventos y los lugares que aparecen.',
        },
        {
          title: 'Propuestas con fuentes',
          body: 'Cada propuesta indica dónde aparece en el original e incluye una cita breve como prueba. El agente busca primero en la API los personajes y lugares existentes y luego envía todas las propuestas juntas.',
        },
        {
          title: 'Publicación tras la revisión',
          body: 'La persona revisora aprueba las propuestas juntas y la Wiki de la obra se actualiza. Cuando aparece un capítulo nuevo, solo hay que enviar los cambios y las incorporaciones.',
        },
      ],
    },
    position: {
      label: 'Progreso de lectura',
      headline: 'La Wiki llega hasta el capítulo que has leído.',
      lead: 'Ejemplo ilustrativo de una novela ficticia. La lista de personajes y eventos muestra contenido distinto según tu progreso.',
      control: 'Progreso de lectura',
      positions: [
        { label: 'Capítulo 1', chapter: 1 },
        { label: 'Capítulo 3', chapter: 3 },
        { label: 'Capítulo 9', chapter: 9 },
        { label: 'Capítulo 16', chapter: 16 },
        { label: 'Capítulo 22', chapter: 22 },
        { label: 'Todo', chapter: 30 },
      ],
      groups: { people: 'Personajes', events: 'Eventos' },
      source: 'Fuente: capítulo {n}',
      aliases: 'Alias:',
      entries: [
        { group: 'people', name: 'Protagonista', aliases: 'Apodo, seudónimo', chapter: 1, note: 'Narrador de la historia, creció en una ciudad portuaria.' },
        { group: 'people', name: 'Hermana del protagonista', chapter: 1, note: 'Trabaja en una librería de la ciudad.' },
        { group: 'people', name: 'Nuevo vecino', chapter: 3, note: 'Joven que acaba de mudarse a la casa de enfrente.' },
        { group: 'people', name: 'Pintor viajero', chapter: 16, note: 'Se aloja temporalmente en un hotel junto al puerto.' },
        { group: 'events', name: 'Reabre la librería', chapter: 1, note: 'La librería donde trabaja su hermana estrena un letrero.' },
        { group: 'events', name: 'Fiesta en el puerto', chapter: 9, note: 'El protagonista habla por primera vez con su vecino en la fiesta.' },
        { group: 'events', name: 'Una carta larga', chapter: 16, note: 'La carta revela el pasado de ambos.' },
        { group: 'events', name: 'El barco zarpa', chapter: 22, note: 'La noticia llega en una carta de su hermana.' },
      ],
      later: 'Aparece en el capítulo {n}; oculto por ahora',
      status: 'Progreso actual: capítulo {n}. Aquí no aparece el contenido posterior.',
      statusAll: 'Se muestra todo el contenido, incluido el final.',
      rail: 'La novela tiene 30 capítulos.',
      rules: [
        'Por defecto, quienes no han iniciado sesión no ven destripes. La página lo indica.',
        'Al iniciar sesión, el progreso predeterminado es el último capítulo que terminaste. Marcar la obra como «Leída» en la biblioteca equivale a terminarla.',
        'Cualquiera puede elegir el progreso o mostrar todo el contenido.',
        'El progreso solo se aplica a la misma línea narrativa. Lo que has leído en la versión en línea no revela contenido de la edición publicada.',
      ],
    },
    text: {
      text: 'REZICS no recibe el texto completo;',
      sub: 'solo recibe propuestas, cada una con la ubicación en el original y una cita breve.',
      facts: [
        { title: 'Tú eliges el modelo', body: 'Con un modelo en la nube, el texto se envía al servicio que elijas. Con uno local, no sale de tu equipo.' },
        { title: 'Código abierto', body: 'El kit usa la licencia Apache-2.0. No necesitas una cuenta para usarlo. No informa sobre su uso ni descarga nada de Internet por su cuenta.' },
        { title: 'Sin descifrado ni elusión', body: 'Los archivos protegidos no se pueden abrir. El kit no descifra ni elude protecciones, ni llama a herramientas que lo hagan.' },
        { title: 'Límite de citas', body: 'Hay un límite para la extensión de cada cita y para el total de citas de un mismo libro. La API de REZICS aplica estos límites.' },
      ],
    },
    zone: {
      label: 'Zone',
      headline: 'Una Wiki es un Zone de la obra.',
      lead: 'Cada dato de las fichas y listas es el mismo que usan los filtros, las listas y otros Zone. Si corriges un nombre aquí, también se corrige en los demás lugares.',
      tiles: [
        { name: 'Página de la obra', line: 'La página sigue siendo el centro; la Wiki amplía sus detalles' },
        { name: 'Personajes' },
        { name: 'Lugares' },
        { name: 'Cronología' },
        { name: 'Guías de capítulos' },
        { name: 'Relaciones' },
      ],
      caption: 'Ejemplo ilustrativo de las páginas de la Wiki de una obra.',
    },
    review: {
      label: 'Revisión',
      headline: 'El agente de IA propone. Una persona revisa.',
      lead: 'Cada personaje y lugar que encuentra el agente se compara con los datos existentes. Hay cuatro resultados posibles.',
      states: [
        { title: 'Coincidencia', body: 'Coincide con un personaje o lugar que ya está en el grafo.' },
        { title: 'Nuevo', body: 'Aún no existe en el grafo. La propuesta crea un registro.' },
        { title: 'Dudoso', body: 'Hay varias coincidencias posibles. La persona revisora decide.' },
        { title: 'Sin resultado', body: 'No se puede comparar por ahora. Se confirmará durante la revisión.' },
      ],
      rules: [
        'El resultado de la comparación también es una propuesta. Los registros no se combinan automáticamente.',
        'Las propuestas de capítulos nuevos no borran lo ya aceptado. Para retirar un elemento hay que indicar el motivo.',
        'La ubicación de las citas se puede verificar. Quien revisa puede comparar cada fragmento con el mismo archivo original.',
        'Cada comunidad decide si permite que los agentes redacten entradas y si acepta texto generado. Sin otra configuración, la Wiki solo admite datos y estructura.',
        'Una persona revisa cada elemento antes de que lo vean los lectores.',
      ],
    },
    finaleLead: 'Cómo registrar cada edición de una misma obra.',
  },

  editions: {
    hero: {
      headline: 'Una obra puede tener muchas ediciones.',
      lede: 'El original y las traducciones, los libros impresos y digitales, las recopilaciones y las publicaciones por entregas se registran por separado y se enlazan con la misma obra. Así sabes qué edición tienes y mantienes el progreso de la serie en orden.',
      alt: 'Hojas verdes de distintos tamaños se apilan alineadas en la esquina inferior izquierda. Una de ellas es azul claro.',
    },
    releases: {
      label: 'Cuatro tipos de publicación',
      headline: 'Cada publicación indica de qué tipo es.',
      lead: 'Si un libro se vende en tres tiendas, sigue teniendo un solo registro con tres puntos de compra. Las copias no autorizadas se registran aparte y no se mezclan con las ediciones oficiales.',
      kinds: [
        { title: 'Edición oficial', body: 'Una edición de una editorial, en tapa blanda, digital o especial. Registra lo que se publicó en ese momento y no se le añade contenido después.' },
        { title: 'Publicación en línea', body: 'La publicación por entregas en línea también es una publicación real. Se conserva la URL original y cada copia archivada con su fecha.' },
        { title: 'Edición fija de REZICS', body: 'Guarda como una edición el contenido seleccionado en REZICS en un momento concreto. Las revisiones posteriores no la modifican.' },
        { title: 'Edición virtual', body: 'Organiza la traducción de un usuario según la estructura de una publicación e indica su alcance, por ejemplo, los capítulos 1 a 20 de una obra de 100 capítulos. No representa una publicación real.' },
      ],
    },
    translations: {
      label: 'Traducciones',
      headline: 'Cada traducción indica quién la hizo y cuál es su fuente.',
      rows: [
        { title: 'Traducción oficial', body: 'La traducción de una editorial es una publicación propia. Indica quién tradujo y qué derechos tiene.' },
        { title: 'Traducción de fans', body: 'Pertenece a quien la tradujo y corresponde a una edición concreta del original. Nunca se marca como oficial.' },
        { title: 'Traducción automática', body: 'Es un texto nuevo, como las demás traducciones, y se indica que se generó automáticamente.' },
        { title: 'Con ayuda de IA', body: 'Una persona hizo la traducción con ayuda de IA. Se indica con claridad para que los lectores puedan filtrar por este criterio.' },
      ],
      stateLabel: 'Cada fragmento traducido tiene un estado',
      states: ['Pendiente de traducción', 'Traducido', 'Revisado', 'Finalizado'],
      notes: [
        'Si cambia un fragmento del original, la traducción correspondiente se marca para actualizar. No se borra ni se reasigna a otro texto sin avisar.',
        'Al principio, solo quien hizo una traducción puede verla. Para hacerla pública, debe haber una base legal: que la obra sea de dominio público o tenga una licencia abierta que permita traducirla, que el autor lo autorice o que haya concedido permiso de traducción por adelantado.',
        'El autor también puede impedir que la obra se enlace con una traducción.',
        'El chino tradicional no se convierte al simplificado sin avisar. El texto convertido se identifica como tal y se conservan los nombres propios.',
      ],
    },
    sameWork: {
      label: 'Una obra o dos',
      headline: 'Qué cambios siguen siendo parte de la misma obra.',
      lead: 'La decisión depende de si la historia sigue siendo compatible o si se vuelve a contar deliberadamente. No depende de la cantidad de palabras, el idioma, el ISBN ni el texto promocional.',
      rows: [
        { title: 'Corrección de erratas, revisiones menores y capítulos compatibles', body: 'Es la misma obra; las ediciones y publicaciones se registran por separado.' },
        { title: 'Cambia el orden, pero no los acontecimientos', body: 'Es la misma obra y se conservan ambos órdenes.' },
        { title: 'El nuevo orden cambia la causalidad o los finales son incompatibles', body: 'Son dos obras enlazadas como «reescritura».' },
        { title: 'El protagonista cambia de nombre', body: 'Si solo es un alias, sigue siendo la misma obra.' },
        { title: 'La historia se vuelve a contar desde el principio', body: 'Son dos obras enlazadas como «reinicio».' },
        { title: 'Se elimina la versión en línea o una continuación solo existe en línea', body: 'Solo cambia el contenido incluido y su disponibilidad. No se crea otra obra.' },
      ],
      caption: 'Leer hasta cierto punto de la versión en línea no cuenta como terminar una edición publicada que se reescribió. Una persona debe confirmar la correspondencia entre sus capítulos.',
    },
    orders: {
      label: 'Orden',
      headline: 'El orden de publicación y el orden de lectura pueden ser distintos.',
      lead: 'Ejemplo ilustrativo: dos órdenes para la misma serie. El identificador de cada tomo se mantiene.',
      rows: ['Orden de publicación', 'Orden de lectura recomendado'],
      tiles: ['Tomo 1', 'Historia derivada', 'Tomo 2', 'Tomo 3'],
      reading: [0, 2, 1, 3],
      notes: [
        { title: 'Recopilación', body: 'Una recopilación reúne varios tomos en una publicación. Cada tomo sigue siendo una obra propia y conserva sus valoraciones y progreso.' },
        { title: 'Subserie', body: 'Las subseries pueden empezar su numeración desde el tomo 1. Un orden general las enlaza.' },
        { title: 'Terminar una serie', body: 'El progreso de la serie solo cuenta los tomos obligatorios. Leer o no las historias derivadas y especiales opcionales no afecta a que figure como terminada.' },
        { title: 'Estado de la serie', body: 'Se muestran por separado cuatro estados: al día con lo publicado, terminado hasta lo publicado, serie finalizada y correspondencia entre capítulos sin confirmar.' },
      ],
    },
    isbn: {
      text: 'Introduce un ISBN,',
      sub: 'y encuentra esa edición.',
      note: 'El ISBN corresponde a una publicación, no a la obra. Desde cualquier ISBN o ficha de una edición digital puedes encontrar la edición, los textos o traducciones que incluye y la obra a la que pertenece. Por ejemplo, A Certain Magical Index: la novela original en japonés y las ediciones en chino tradicional e inglés son publicaciones distintas, cada una con su ISBN, enlazadas a la misma obra.',
    },
    finaleLead: 'A continuación, consulta tu propio historial.',
  },

  library: {
    hero: {
      headline: 'Tu historial refleja cómo lees.',
      lede: 'Dejas un libro a medias, lo vuelves a leer dos años después o escuchas el audiolibro durante el trayecto. REZICS registra cada situación con precisión. Solo tú puedes verlo y puedes exportarlo todo cuando quieras.',
      alt: 'Tres tiras verde oscuro de distintas longitudes están colocadas en paralelo. Junto a la más corta hay una hoja verde claro.',
    },
    reads: {
      label: 'Cada lectura',
      headline: 'Tres lecturas del mismo libro son tres registros.',
      lead: 'Una pausa queda como pausa y abandonar queda como abandono. Ninguna cuenta como lectura terminada. Cada relectura crea un registro nuevo y no reemplaza el primero.',
      rows: [
        { title: 'Primera lectura', body: 'Edición impresa, hasta el capítulo 20. En pausa.', share: 0.62 },
        { title: 'Segunda lectura', body: 'Libro electrónico y audiolibro en la segunda mitad. Terminada.', share: 1 },
        { title: 'Tercera lectura', body: 'Relectura en curso.', share: 0.24 },
      ],
      caption: 'Ejemplo: cada registro corresponde a la edición que leíste. Si vuelves a leer otra edición, se crea otro registro.',
    },
    move: {
      label: 'Importación y exportación',
      headline: 'Puedes importar y exportar tu historial de lectura.',
      steps: [
        { title: 'Añade un archivo exportado', body: 'Un archivo exportado de otro servicio o una hoja de cálculo que hayas preparado.' },
        { title: 'Busca la edición que leíste', body: 'Cada registro se vincula con la edición correspondiente, sin adivinar por el título. Los datos sin coincidencia no se asignan a otro libro.' },
        { title: 'Conserva tu progreso', body: 'Se importan los estados de lectura, fechas, valoraciones y reseñas que se pueden identificar.' },
        { title: 'Exporta todo cuando quieras', body: 'Exporta tus registros, biblioteca, valoraciones y reseñas en un archivo que puedes volver a importar.' },
      ],
      retention: 'El archivo subido es privado. Los datos originales se conservan durante siete días desde la carga. Después dejan de estar disponibles para lectura y exportación, y se programa su eliminación. Exporta tu biblioteca si quieres conservarlos.',
    },
    continue: {
      text: 'Abre REZICS y',
      sub: 'continúa con el siguiente capítulo.',
      note: 'La sección «Continuar» aparece al principio de la página de inicio. Cada elemento abre el siguiente capítulo que aún no has leído.',
    },
    shelf: {
      label: 'Estantería',
      headline: 'También puedes registrar lo que tienes en tu estantería.',
      rows: [
        { title: 'Libros que tienes', body: 'Registra qué edición tienes. Si la has comprado pero no la has leído, seguirá apareciendo como no leída.' },
        { title: 'Préstamos dados y recibidos', body: 'Registra a quién prestaste el libro, cuándo lo prestaste, cuándo debe devolverse y cuándo se devolvió. El nombre que escribas es texto y no se vincula con ninguna cuenta.' },
        { title: 'Notas sobre un pasaje', body: 'Las notas privadas quedan vinculadas a un pasaje de una edición concreta. Si cambias de edición, seguirán apuntando al pasaje original.' },
        { title: 'Sigue lo que estás leyendo', body: 'Al añadir un libro a «Leyendo» o «Por leer», empiezas a seguirlo. Recibirás un aviso cuando salga un capítulo o una edición nuevos en el idioma que lees.' },
        { title: 'Listas', body: 'Una lista puede reunir novelas, manga y videojuegos. Puedes ordenarlos, añadir notas y exportarla.' },
      ],
    },
    privacy: {
      label: 'Privacidad',
      headline: 'Tu historial de lectura es privado.',
      rows: [
        { title: 'Privado por defecto', body: 'Tus borradores e historial de lectura no son públicos, a menos que decidas compartirlos.' },
        { title: 'Sin perfiles publicitarios', body: 'REZICS no usa tu historial privado de lectura para crear perfiles publicitarios ni para deducir datos sensibles con fines de marketing.' },
        { title: 'No implica consentimiento para entrenar modelos', body: 'Crear una cuenta, aceptar las condiciones del servicio o usar funciones de IA no implica que aceptes entrenar modelos con tus registros.' },
        { title: 'Si cedes la administración', body: 'Dar a otra persona acceso de administración a tu cuenta o comunidad no comparte tu historial de lectura.' },
      ],
    },
    finaleLead: 'Pasa al lado de la escritura.',
  },

  serial: {
    hero: {
      headline: 'Escribe y lee capítulo a capítulo.',
      lede: 'Puedes escribir, programar y publicar en REZICS una serie en línea, una novela ligera por entregas o una historia larga propia. Tu manuscrito está a salvo y los lectores pueden volver donde lo dejaron.',
      alt: 'Una larga tira de papel verde oscuro está doblada en páginas y se extiende plana en la segunda mitad. Una hoja pequeña verde claro descansa en un pliegue.',
    },
    safe: {
      label: 'Manuscrito',
      headline: 'Tu manuscrito está a salvo aquí.',
      rows: [
        { title: 'Cada guardado crea una versión', body: 'Se conserva cada versión para que puedas compararla o restaurarla como una versión nueva. Vaciar un capítulo solo guarda una versión en blanco, que no se puede publicar.' },
        { title: 'Programa según tu zona horaria', body: 'Elige la hora local para publicar. El servidor publicará los capítulos a la hora prevista aunque cierres el navegador.' },
        { title: 'Cuatro permisos para colaboradores', body: 'Los permisos para leer, sugerir, editar y publicar se conceden por separado. Quien puede editar no necesariamente puede publicar.' },
        { title: 'Las notas del autor van por separado', body: 'Las notas del autor al final de un capítulo son una sección aparte. No cuentan para el número de palabras, no se traducen ni se incluyen en una edición posterior.' },
      ],
    },
    mirror: {
      label: 'Autores y lectores',
      headline: 'Qué ocurre a los lectores cuando el autor hace algo.',
      rows: [
        { title: 'Publica el capítulo 12', body: 'Los lectores que siguen la obra reciben un aviso cuando se publica un capítulo en su idioma.' },
        { title: 'Revisa el capítulo 3', body: 'Los comentarios anteriores siguen vinculados al pasaje de la versión que leyeron.' },
        { title: 'Incluye el capítulo 5 en una colección', body: 'El texto y los debates son los mismos, pero el progreso de lectura se registra por separado en cada lugar.' },
        { title: 'Publica el capítulo 13', body: 'El feed no muestra destripes del capítulo a quienes aún no lo han leído.' },
      ],
      notes: [
        'Los lectores pueden ajustar el tamaño y ancho del texto, la tipografía, la sangría, los colores y el espaciado entre chino y japonés.',
        'Las obras en japonés se pueden leer en vertical y admiten furigana y marcas de énfasis.',
        'Los comentarios que los lectores escriben a los autores llegan a una bandeja de entrada privada para el autor.',
      ],
    },
    ai: {
      label: 'Declaración sobre IA',
      headline: 'Indica con claridad cuánto se ha usado la IA.',
      rows: [
        { title: 'Sin uso de IA', body: 'La IA generativa no ha participado de forma sustancial en este texto.' },
        { title: 'Asistencia de IA', body: 'El texto lo ha escrito principalmente una persona, con ayuda de IA para generar ideas, reescribir, editar o redactar algunas partes.' },
        { title: 'Generado por IA', body: 'La mayor parte del texto la ha generado la IA, incluida la traducción automática, aunque después una persona lo haya editado.' },
      ],
      notes: ['La revisión humana se registra por separado. Los lectores pueden filtrar según estas etiquetas.', 'Estas etiquetas son declaraciones del autor. REZICS no toma los resultados de detectores de IA como una decisión definitiva.'],
    },
    world: {
      label: 'Información del mundo',
      headline: 'Guarda la información del mundo junto al manuscrito.',
      lead: 'Usa plantillas para organizar personajes, lugares, organizaciones, eventos, objetos y otros datos, todos privados. Puedes publicar algunas páginas en la Wiki de la obra sin compartir el historial privado de cambios.',
      items: [
        'Marca lugares en un mapa que hayas dibujado.',
        'Representa las relaciones entre personajes en un grafo o en una lista de texto.',
        'Organiza una cronología con el calendario de la historia y registra fechas aunque sean inciertas.',
        'El asistente de coherencia solo señala contradicciones entre tus notas y el manuscrito. No escribe capítulos por ti.',
      ],
    },
    backup: {
      text: 'Todo el manuscrito,',
      sub: 'siempre lo puedes exportar completo.',
      note: 'Puedes exportar el historial de revisiones, las notas y la información del mundo en una copia que se puede volver a importar. La exportación y las funciones básicas para crear mundos no requieren un plan de pago.',
    },
    finaleLead: 'Cuando termines, compártelo con tus lectores.',
  },

  publish: {
    hero: {
      headline: 'Vende el libro y deja el archivo en manos del lector.',
      lede: 'Los creadores contratados venden directamente en REZICS libros electrónicos, videojuegos pequeños y novelas visuales con los derechos confirmados. Los lectores reciben archivos sin DRM. La página de compra aparece junto a los debates y la Wiki de la obra.',
    },
    buy: {
      label: 'Compra',
      headline: 'Para comprar un libro, primero elige una edición.',
      steps: [
        { title: 'Elige una edición', body: 'Elige el idioma y la edición, comprueba quién la ha traducido y lee una muestra.' },
        { title: 'Paga una vez', body: 'Es un pago único, no una suscripción. La licencia que recibes aparece en la página antes de comprar.' },
        { title: 'Guarda el archivo', body: 'Descarga un EPUB o PDF sin DRM. No hace falta un lanzador ni activar ningún DRM.' },
        { title: 'Recibe actualizaciones', body: 'Tu biblioteca te avisará cuando el autor publique las actualizaciones acordadas. El recibo se conserva y puedes volver a descargar el archivo según las condiciones de compra.' },
      ],
      caption: 'Que un archivo no tenga DRM no significa que puedas revenderlo o distribuirlo. Su uso depende de la licencia indicada antes de la compra.',
    },
    statement: {
      label: 'Liquidación',
      headline: 'La liquidación del creador desglosa cada deducción.',
      rows: [
        { title: 'Pago del lector', body: 'El importe recibido por esta transacción.' },
        { title: 'Impuestos', body: 'Los impuestos sobre la transacción, como el impuesto sobre las ventas y el IVA, cobrados y remitidos.' },
        { title: 'Comisiones de pago', body: 'Los gastos reales de procesamiento de pagos con su justificante.' },
        { title: 'Reembolsos y contracargos', body: 'Reembolsos, anulaciones y contracargos.' },
        { title: 'Ingresos netos', body: 'Después de deducir las comisiones acordadas, los ingresos se reparten entre el creador y REZICS según el contrato.' },
      ],
      note: 'Los costes de operación, como el alojamiento, los salarios y el marketing, no se deducen de estos ingresos. Ninguna comisión se cobra dos veces.',
    },
    distributed: {
      label: 'Qué se publica',
      headline: 'Qué se publica aquí y qué no.',
      rows: [
        { title: 'Libros electrónicos', body: 'Archivos EPUB o PDF autorizados y sin DRM.' },
        { title: 'Videojuegos pequeños y novelas visuales', body: 'La versión descargable y la plataforma o cuenta necesarias para ejecutarla se indican antes de comprar.' },
        { title: 'Muestra', body: 'Lee una muestra antes de decidir si quieres comprarla.' },
        { title: 'Recibos y reembolsos', body: 'Cada compra tiene un recibo y puedes solicitar un reembolso.' },
      ],
      policy: [
        { title: 'Creadores contratados', body: 'Publicamos obras de creadores contratados. No es un mercado abierto a todo el mundo.' },
        { title: 'No se publica', body: 'Contenido sexual explícito y obras clasificadas como R18 o R18G.' },
      ],
    },
    community: {
      text: 'La tienda,',
      sub: 'está junto a la comunidad de la obra.',
      note: 'Antes de comprar, puedes consultar las reseñas, los debates y la Wiki. Después, tu edición, progreso y recibo quedan vinculados a la obra. Los lectores también pueden seguir a los creadores para ver sus novelas y videojuegos. Los creadores ven datos de ventas agregados, no el historial de lectura de cada persona.',
    },
    finaleLead: 'El anime adaptado también enlaza con la misma obra.',
  },
};

export default {
  id: 'books',
  base: '/books/',
  name: 'Biblioteca',
  theme: { kind: 'books' },
  next: 'anime',
  pages: [
    {
      slug: '',
      label: 'Resumen',
      meta: {
        title: 'Biblioteca: retoma donde lo dejaste',
        description:
          'Cada obra tiene su propia página, con el original, las traducciones, los tomos y las recopilaciones bien diferenciados. La biblioteca recuerda tu progreso, te indica qué libro sigue y muestra la Wiki y los debates hasta el último capítulo que has leído.',
      },
    },
    {
      slug: 'work',
      label: 'Página de la obra',
      meta: {
        title: 'Página de la obra: el centro de cada obra',
        description:
          'La página reúne los datos de una obra, sus valoraciones, tus ediciones y progreso, tomos y adaptaciones, el resumen de Wiki y los debates. Arriba hay un único botón principal que depende de tu estado.',
      },
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: {
        title: 'Wiki+: crea una Wiki con tu agente de IA',
        description:
          'Quienes tienen el texto pueden ejecutar un kit de código abierto en su equipo y usar su propio agente de IA para organizar personajes, lugares y eventos capítulo a capítulo. Tras la revisión, se publica en la Wiki de la obra. Cada lector solo ve lo que ha leído.',
      },
    },
    {
      slug: 'editions',
      label: 'Ediciones y series',
      meta: {
        title: 'Ediciones y series: cada versión está diferenciada',
        description:
          'En REZICS, los tomos, recopilaciones, libros electrónicos, publicaciones por entregas y traducciones son publicaciones distintas de la misma obra. Los tomos se ordenan por serie. Las ediciones con cambios en la trama son obras aparte.',
      },
    },
    {
      slug: 'library',
      label: 'Historial de lectura',
      meta: {
        title: 'Historial de lectura: fiel y exportable',
        description:
          'Cada lectura se registra por separado, incluidas las relecturas, pausas y abandonos. Pasar de un libro impreso a un audiolibro cuenta como la misma lectura. Los ejemplares y préstamos se anotan aparte. Los registros son privados por defecto, se pueden importar de otros servicios y exportar por completo.',
      },
    },
    {
      slug: 'serial',
      label: 'Publicación por entregas',
      meta: {
        title: 'Publicación por entregas: escribe y lee capítulo a capítulo',
        description:
          'Los autores pueden restaurar cada guardado y programar los capítulos según su zona horaria. Se publican a tiempo aunque cierren el navegador. Los lectores retoman donde lo dejaron y los debates no revelan capítulos que aún no han leído.',
      },
    },
    {
      slug: 'publish',
      label: 'Publicación',
      meta: {
        title: 'Publicación: vende directamente a los lectores',
        description:
          'Los creadores contratados venden libros electrónicos, videojuegos pequeños y novelas visuales autorizados en REZICS. Los archivos no tienen DRM, hay muestras, actualizaciones y descargas, y la liquidación desglosa impuestos, comisiones y reembolsos.',
      },
    },
  ],
  strings,
} satisfies MiniSite<BooksStrings>;
