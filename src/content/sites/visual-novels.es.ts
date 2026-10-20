// The 視覺小說 site: every visible string of /visual-novels/ and its six inner pages. Design
// record: src/sites/visual-novels/SITE.md; claims and sources: src/sites/visual-novels/facts.md.
// The six releases below are one illustrative dataset (labelled 示意資料 on the pages), shared by
// the landing's three queries and the releases table so both agree.
import type { Item, Meta, MiniSite, PartId } from '../schema';

/** The four conditions a release is qualified by. */
export type Dim = 'language' | 'platform' | 'region' | 'coverage';

export interface VnRelease {
  id: 'r1' | 'r2' | 'r3' | 'r4' | 'r5' | 'r6';
  /** Full name, as in the table. */
  name: string;
  /** Option keys of `options`, one per condition (the content, not the box). */
  values: Record<Dim, string>;
  /** Option key of the title language when it differs from the content language. */
  titleLanguage?: string;
  coverageNote?: string;
  translator: string;
  source: string;
  status: string;
}

const meta = (title: string, description: string): Meta => ({ title, description });

const releases: VnRelease[] = [
  { id: 'r1', name: 'Versión original (1.02)', values: { language: 'ja', platform: 'pc', region: 'jp', coverage: 'full' }, translator: 'Ninguno', source: 'Ninguno', status: 'Oficial' },
  { id: 'r2', name: 'Versión oficial en chino', values: { language: 'zh', platform: 'console', region: 'tw', coverage: 'full' }, translator: 'Distribuidor', source: 'Versión original', status: 'Oficial' },
  { id: 'r3', name: 'Parche de traducción de fans, versión 1', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'partial' }, coverageNote: 'Ruta común y dos rutas', translator: 'Equipo de traducción de fans', source: 'Versión original 1.02', status: 'No oficial' },
  { id: 'r4', name: 'Parche de traducción de fans, versión 2', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'full' }, translator: 'Equipo de traducción de fans', source: 'Versión original 1.02', status: 'No oficial' },
  { id: 'r5', name: 'Demo en inglés', values: { language: 'en', platform: 'pc', region: 'any', coverage: 'trial' }, translator: 'Distribuidor', source: 'Versión original', status: 'Oficial' },
  { id: 'r6', name: 'Versión para móvil', values: { language: 'ja', platform: 'mobile', region: 'tw', coverage: 'full' }, titleLanguage: 'zh', translator: 'Ninguno', source: 'Ninguno', status: 'Oficial' },
];

const strings = {
  /** Labels shared by several pages of this site. */
  shared: {
    demo: 'Datos ilustrativos',
    dims: { language: 'Idioma', platform: 'Plataforma', region: 'Región', coverage: 'Cobertura' } as Record<Dim, string>,
    columns: { name: 'Versiones', translator: 'Traductor', source: 'Fuente', status: 'Estado' },
    options: {
      language: { zh: 'Chino tradicional', ja: 'Japonés', en: 'Inglés' },
      platform: { pc: 'Ordenador', console: 'Consola', mobile: 'Móvil' },
      region: { jp: 'Japón', tw: 'Taiwán', any: 'Cualquiera' },
      coverage: { full: 'Completa', partial: 'Parcial', trial: 'Demo' },
    } as Record<Dim, Record<string, string>>,
    /** Followed by the name of the condition a release fails. */
    fails: 'No coincide: ',
    titleOnly: 'Solo el título está en chino',
    match: 'Coincide',
    closed: 'Aún no leído',
    nextPage: 'Siguiente página',
    nextSite: 'Siguiente sitio',
    nextSiteLine: 'Elige un servidor MCP según su versión y sus registros de compatibilidad.',
    /** The closing statement on every page of the site. */
    closing: 'Empieza la siguiente novela visual por una versión que puedas jugar.',
    releases,
  },

  images: {
    routes: 'Una tira de papel violeta se bifurca sobre una hoja blanca cálida. Una rama azul se extiende hacia la derecha.',
    window: 'Hojas violetas, azules y rosas se superponen, atravesadas por una misma abertura.',
    thread: 'Dos hojas violetas, una clara y otra oscura, se conectan por un agujero, como una traducción y su fuente.',
    fold: 'Una tira de papel violeta se despliega por secciones y conserva el último pliegue.',
    sites: 'Una misma hoja violeta forma dos estructuras independientes que comparten una base.',
  },

  landing: {
    hero: {
      headline: 'Consulta el idioma de cada versión.',
      lede: 'REZICS indica el idioma, la plataforma, la región y la cobertura de cada versión de cada novela visual. Las traducciones de fans acreditan a sus traductores y señalan qué versión usaron como fuente.',
    },
    match: {
      label: 'Una misma versión',
      headline: 'Tres condiciones para una misma versión.',
      body: 'Elegir una novela visual es como seguir un mapa de rutas: cada condición descarta un camino que no sirve. El idioma, la plataforma y la cobertura deben coincidir en una misma edición. No se combinan una versión en chino, otra para ordenador y una tercera completa para formar una respuesta.',
      queriesLabel: 'Tres condiciones, tres resultados',
      /** A match: the release's name, then its translator and source. */
      answer: '{name}. Traductor: {translator}. Fuente: {source}.',
      none: 'No hay ninguna versión que coincida. La versión para móvil con solo el título en chino no cuenta.',
      caption: 'Datos ilustrativos: seis ediciones de una novela visual.',
    },
    statement: { text: 'Que el título esté traducido,', more: 'no significa que el juego esté en ese idioma.' },
    parts: {
      label: 'Partes',
      headline: 'Las mismas partes cumplen funciones distintas en las novelas visuales.',
      body: 'Cada tipo de contenido usa las mismas partes. Las novelas visuales usan estas ocho.',
      notes: {
        identity: 'Cada obra tiene una identidad. Las versiones originales, las adaptaciones a otras plataformas, las traducciones y los parches dependen de ella.',
        editions: 'Cada versión indica el idioma, la plataforma, la región y cuánto contenido incluye.',
        names: 'Los títulos originales en japonés, las traducciones al chino, sus romanizaciones y los alias aparecen juntos, cada uno con su idioma.',
        credits: 'Los créditos del guion, la ilustración, la música, las voces y la traducción enlazan a la página de cada persona.',
        relations: 'Las secuelas, historias derivadas, versiones para otras plataformas y adaptaciones enlazan con las novelas, el anime y el manga.',
        facets: 'Filtra por idioma, plataforma, región y cobertura dentro de una misma versión.',
        progress: 'El progreso sigue la ruta que lees y determina cuánta información oculta la página.',
        wiki: 'Los personajes, lugares y sucesos proceden de un mismo índice. La página solo muestra lo que corresponde a la ruta que estás leyendo.',
      } as Partial<Record<PartId, string>>,
    },
    pagesIndex: {
      label: 'Este sitio',
      headline: 'Seis páginas, una idea en cada una.',
      rows: {
        releases: 'Compara el idioma, la plataforma, la región y la cobertura de cada versión.',
        translations: 'Quién tradujo, desde qué versión y hasta dónde.',
        characters: 'Cada personaje y actor de voz tiene su propia identidad.',
        spoilers: 'Filtra por etiquetas y descubre el final cuando llegues a él.',
        wiki: 'Una wiki de la obra creada a partir del guion.',
        zones: 'El sitio en chino y el sitio en japonés comparten las mismas identidades.',
      } as Record<string, string>,
    },
    neighbours: {
      label: 'Tipos relacionados',
      headline: 'Las adaptaciones y las obras originales se conectan de verdad.',
      body: 'Las novelas visuales comparten catálogo con novelas, anime, manga y juegos. Por ejemplo, «A Certain Magical Index» es una novela ligera con adaptaciones al manga y al anime, además de una novela visual. En REZICS, la novela visual es una obra independiente, enlazada con la original como adaptación, y conserva sus propias valoraciones y progreso.',
      items: [
        { kind: 'books', label: 'Las novelas de una misma historia se reúnen en una biblioteca.' },
        { kind: 'anime', label: 'El anime adaptado enlaza con la obra original y conserva la identidad de los actores de voz.' },
        { kind: 'manga', label: 'El manga y la obra original se enlazan, con el progreso de cada uno por separado.' },
        { kind: 'games', label: 'Las plataformas, ediciones y publicaciones siguen el mismo sistema que los juegos.' },
      ] as { kind: 'books' | 'anime' | 'manga' | 'games'; label: string }[],
    },
  },

  releases: {
    hero: {
      headline: 'Una fila por versión, con todas sus condiciones.',
      lede: 'Una novela visual puede tener una versión original, ports, traducciones oficiales, parches de fans y demos. REZICS registra cada versión por separado e indica el idioma del contenido, las plataformas disponibles, la región de publicación y cuánto contenido incluye.',
    },
    matrix: {
      label: 'Filtros',
      headline: 'Los filtros se aplican a una misma versión.',
      body: 'Si eliges chino tradicional, ordenador y cobertura completa, cada resultado debe cumplir las tres condiciones. Las versiones que no las cumplan indican qué condición falla.',
      filtersLabel: 'Filtros',
      any: 'Cualquiera',
      count: 'Coinciden {n} de {total} versiones',
      note: 'Si no se admite una combinación de filtros, se explica el motivo en lugar de mostrar una lista vacía.',
      caption: 'Datos ilustrativos: seis ediciones de una novela visual, filtradas según las condiciones actuales.',
    },
    languages: {
      text: 'El idioma del título',
      more: 'se registra por separado del idioma del contenido.',
      body: 'Cada edición registra dos idiomas: el del embalaje y el título, y el del texto del juego. Una versión con solo el título traducido no aparece al filtrar por chino tradicional. En una versión bilingüe se indican ambos idiomas.',
    },
    coverage: {
      label: 'Cobertura',
      headline: 'La edición indica si es completa, parcial o una demo.',
      body: 'Si no se conoce la cobertura, se marca como no registrada. No se considera completa.',
      items: [
        { title: 'Completa', body: 'Esta versión incluye toda la obra y todas sus rutas.' },
        { title: 'Parcial', body: 'Indica qué partes incluye, como la ruta común y dos rutas.' },
        { title: 'Demo', body: 'La demo tiene su propio registro y se indica que es una versión de prueba. Las opiniones sobre la demo se separan de las valoraciones de la versión completa.' },
      ] as Item[],
    },
    status: {
      label: 'Estado',
      headline: 'Una misma versión puede venderse en varios sitios.',
      body: 'Una edición disponible en varias tiendas sigue siendo una sola edición, con cada lugar de compra indicado. Los anuncios, las fechas previstas, los retrasos y los lanzamientos se registran por separado.',
      items: [
        { title: 'Oficial', body: 'Edición autorizada por quien posee los derechos.' },
        { title: 'No oficial', body: 'Edición no autorizada por quien posee los derechos. Se registra aparte y no se mezcla con la versión oficial.' },
        { title: 'Retirada', body: 'Se conserva el registro de una versión retirada después de su publicación.' },
        { title: 'Cancelada', body: 'Se anunció, pero no llegó a publicarse. Se marca como cancelada y no se cuenta como edición publicada.' },
      ] as Item[],
    },
    follow: {
      label: 'Seguimiento',
      headline: 'Recibe avisos cuando salga una versión en un idioma que entiendas.',
      body: 'Sigue una obra para recibir en tu bandeja avisos cuando salga una versión en tu idioma. También puedes seguir las novedades de una versión concreta.',
    },
    finale: 'Puedes seguir el origen de cada traducción.',
  },

  translations: {
    hero: {
      headline: 'Cada traducción indica de qué versión procede.',
      lede: 'La traducción al chino y la versión original en japonés pertenecen a la misma obra. Comparten valoraciones, personajes y Wiki+. La traducción tiene su propio registro: quién la hizo, qué versión usó como fuente y hasta dónde llega.',
    },
    lineage: {
      label: 'Procedencia',
      headline: 'Las traducciones de fans y las oficiales se distinguen claramente.',
      body: 'Cada traducción de fans tiene su propio registro y enlaza con la versión original en que se basa. No se presenta como oficial. Las traducciones oficiales tienen otro registro y ambas aparecen claramente diferenciadas.',
    },
    record: {
      label: 'Registro de una traducción',
      headline: 'Indica el traductor, la fuente y la cobertura.',
      items: [
        { title: 'Traductor', body: 'Cada equipo y traductor tiene su propia página de identidad. Allí puedes ver todas las obras que ha traducido.' },
        { title: 'Fuente', body: 'La traducción indica su versión de origen, por ejemplo, la versión original 1.02, en lugar de una referencia general a «la obra original». Si la fuente no está confirmada, se indica en vez de inventarla.' },
        { title: 'Cobertura', body: 'La edición indica si incluye la ruta común, qué rutas y si tiene apéndices. Antes de empezar, sabrás si el juego volverá al japonés a mitad de camino.' },
        { title: 'Actualización', body: 'Cada nueva versión de un parche crea una edición nueva. Las versiones anteriores conservan su cobertura, para que puedas saber cuál jugó cada persona.' },
      ] as Item[],
    },
    reviews: {
      text: 'La calidad de la traducción',
      more: 'se valora por separado.',
      body: 'Puedes valorar la historia, la traducción o la producción por separado. Si el guion emociona pero la traducción resulta forzada, cada aspecto recibe su propia valoración. También puedes ver solo las opiniones de quienes jugaron en chino.',
    },
    several: {
      label: 'Varias traducciones',
      headline: 'Una misma obra puede tener varias traducciones.',
      body: 'Varios equipos pueden traducir la misma obra. Cada uno acredita y mantiene su propia traducción, sin sobrescribir los demás registros. Los lectores eligen una y las comunidades pueden recomendarla.',
    },
    teams: {
      label: 'Para equipos de traducción',
      headline: 'Cada versión de un parche tiene su propia página.',
      items: [
        { title: 'Página del equipo', body: 'El equipo y sus miembros tienen identidades propias. Allí aparecen las obras traducidas y cada edición.' },
        { title: 'Página de la edición', body: 'Cada versión del parche tiene una página y un hilo propios, donde se reúnen los comentarios de los jugadores.' },
        { title: 'Seguimiento', body: 'Los jugadores pueden seguir a tu equipo y recibir avisos cuando publiques un parche nuevo.' },
        { title: 'Correcciones', body: 'Puedes proponer una corrección si los datos de una edición son incorrectos. Se aplica después de revisarla.' },
      ] as Item[],
    },
    finale: 'Cada personaje y actor de voz tiene una sola identidad.',
  },

  characters: {
    hero: {
      headline: 'Un personaje conserva su identidad en todas sus apariciones.',
      lede: 'Un mismo personaje conserva una sola identidad en las continuaciones, los ports, las adaptaciones al anime y las traducciones. Su edad, aspecto y nombre en distintas obras se registran con el alcance correspondiente, sin crear personajes duplicados.',
    },
    variants: {
      label: 'Variantes',
      headline: 'Otra personalidad, otra línea temporal.',
      body: 'Solo se separan cuando hace falta. Otra personalidad o la misma persona en otra línea temporal se registra como una variante enlazada con el personaje principal. La relación indica dónde se revela en la historia y permanece oculta hasta que llegues a esa parte.',
      items: [
        { title: 'Personaje A', body: 'Personaje principal. A conserva esta identidad en las continuaciones, los ports y las adaptaciones.' },
        { title: 'Otra personalidad de A', body: 'Variante de personalidad enlazada con el personaje A.' },
        { title: 'A en otra línea temporal', body: 'Variante enlazada con el personaje A.' },
      ] as Item[],
      caption: 'Datos ilustrativos. Cada variante se enlaza con un solo personaje principal, que no es una variante.',
    },
    names: {
      label: 'Nombres',
      headline: 'Los nombres también pueden revelar la trama.',
      body: 'Un personaje puede tener nombre original, traducción, apodo y nombre secreto. Cada nombre indica el idioma, la obra donde aparece y si revela la trama. La página muestra el nombre habitual o el que contiene menos spoilers, según tus preferencias.',
      columns: { kind: 'Tipo de nombre', language: 'Idioma', where: 'Aparece en', spoiler: 'Spoiler' },
      rows: [
        { kind: 'Nombre real', language: 'Japonés', where: 'Esta obra y sus continuaciones', spoiler: 'Sin spoilers' },
        { kind: 'Traducción al chino', language: 'Chino tradicional', where: 'Versión oficial en chino', spoiler: 'Sin spoilers' },
        { kind: 'Apodo', language: 'Japonés', where: 'Desde la ruta común', spoiler: 'Sin spoilers' },
      ],
      hidden: { kind: 'Nombre verdadero', spoiler: 'Se muestra en la segunda mitad de la ruta 2' },
      caption: 'Datos ilustrativos. Se conserva el nombre acreditado en cada obra y en cada aparición.',
    },
    credits: {
      label: 'Equipo de producción',
      headline: 'Los créditos de voz enlazan con los personajes.',
      body: [
        'Los créditos se agrupan por función: guion, arte original, música, voz y traducción. Los créditos de voz enlazan tanto con el actor como con el personaje e indican a qué versión corresponden, por ejemplo, si cambia el actor en un port.',
        'Las novelas visuales y ligeras escritas por una misma persona aparecen en su página.',
      ],
    },
    query: {
      label: 'Búsqueda',
      headline: 'Las condiciones deben corresponder al mismo personaje.',
      body: 'Al buscar «protagonista pelirroja», encuentras obras con un personaje que cumple ambas condiciones. Una obra con una secundaria pelirroja y una protagonista de pelo negro no aparece en los resultados.',
      items: [
        { title: 'Obra 1: coincide', body: 'La protagonista es pelirroja. Un mismo personaje cumple las dos condiciones.' },
        { title: 'Obra 2: no coincide', body: 'El personaje pelirrojo es secundario y la protagonista tiene el pelo negro. Las condiciones corresponden a personajes distintos.' },
      ] as Item[],
      caption: 'Datos ilustrativos. Protagonista, personaje principal y personaje secundario son categorías distintas. Un antagonista puede ser un personaje principal sin ser protagonista.',
    },
    finale: 'Elige las etiquetas y descubre la historia por tu cuenta.',
  },

  spoilers: {
    hero: {
      headline: 'Las rutas que aún no has leído permanecen ocultas.',
      lede: 'Los momentos clave de una novela visual suelen aparecer en rutas posteriores. REZICS muestra etiquetas, datos de personajes y páginas de Wiki+ hasta donde has leído.',
    },
    fold: {
      label: 'La parte oculta',
      headline: 'Lo que viene después queda oculto.',
      body: 'Lo que ya has leído queda a la vista y lo que falta permanece plegado. Ni siquiera se revela un nombre hasta que llegues a esa parte.',
    },
    route: {
      label: 'Progreso',
      headline: 'La página se abre hasta donde has leído.',
      here: 'Has llegado hasta aquí',
      nodes: [
        { name: 'Prólogo', fact: '' },
        { name: 'Ruta común', fact: 'A aparece' },
        { name: 'Elección', fact: '' },
        { name: 'Ruta 1', fact: 'A y B son amigos de la infancia' },
        { name: 'Final de la ruta 1', fact: '' },
        { name: 'Ruta 2', fact: 'El nombre secreto de A' },
        { name: 'Final verdadero', fact: 'Otra personalidad de A' },
      ],
      /** Index of the reader's position in `nodes`. */
      at: 3,
      caption: 'Datos ilustrativos.',
      rules: [
        { title: 'Visitantes', body: 'Quienes no han iniciado sesión ven el contenido hasta antes de la primera revelación.' },
        { title: 'Al iniciar sesión', body: 'Por defecto, la página se detiene en el punto más avanzado que has leído. Si marcas una obra como terminada, cuenta como leída por completo.' },
        { title: 'Elige el límite', body: 'Puedes elegir cualquier punto o mostrar todo el contenido.' },
        { title: 'Cada ruta', body: 'El progreso solo se compara dentro de una misma ruta. El contenido de las demás rutas se oculta y el resto de la página sigue visible.' },
      ] as Item[],
    },
    votes: {
      label: 'Dos votos',
      headline: 'La relevancia y los spoilers se votan por separado.',
      body: 'Cuando una comunidad añade una etiqueta a una obra, decide por separado si es pertinente y si revela la trama. Una etiqueta pertinente que contiene spoilers permanece oculta hasta que llegues a esa parte.',
      columns: { tag: 'Etiqueta', fit: 'Coincide', spoiler: 'Spoiler' },
      rows: [
        { tag: 'Escolar', fit: 'La mayoría está de acuerdo', spoiler: 'No' },
        { tag: 'Varios finales', fit: 'La mayoría está de acuerdo', spoiler: 'No' },
      ],
      hidden: { fit: 'La mayoría está de acuerdo', spoiler: 'Sí. Se muestra al llegar a la ruta 2' },
      caption: 'Datos ilustrativos.',
    },
    filters: {
      label: 'Filtros',
      headline: 'Puedes incluir o excluir etiquetas.',
      body: [
        'Al filtrar, puedes incluir o excluir cada etiqueta. Para varias etiquetas de un mismo grupo, puedes exigir que coincidan todas o cualquiera. Abre una etiqueta para ver su descripción, las etiquetas superiores e inferiores y todas las obras que la tienen.',
        'Sigue tus etiquetas favoritas y fíjalas como pestañas en la página de inicio.',
      ],
    },
    apart: {
      text: 'Los spoilers, la clasificación y las imágenes ocultas',
      more: 'se gestionan por separado.',
      body: 'Los votos sobre spoilers no cambian la clasificación por edad, y la clasificación no determina qué cuenta como spoiler. Tú decides si abres imágenes o fragmentos ocultos. La elección solo afecta a esta visita y no cuenta como voto. Configura por separado las clasificaciones general, R15, R18 y R18G. El contenido sin evaluar se indica como tal, no como general.',
    },
    readings: {
      label: 'Interpretación de la comunidad',
      headline: 'Cada comunidad puede interpretar una etiqueta a su manera.',
      body: 'Cada comunidad puede definir sus propios criterios y decidir qué etiquetas acepta. Una definición más estricta no cambia cómo usan el término las demás comunidades ni elimina la etiqueta original.',
    },
    finale: 'Una wiki creada a partir del guion y revisada por personas.',
  },

  wiki: {
    hero: {
      headline: 'Se crea a partir del guion y se publica tras una revisión humana.',
      lede: 'La historia de una novela visual está en su guion. Quien lo tenga, como su creador, puede usar el kit de herramientas de código abierto de REZICS y su propio agente de IA para organizar personajes y acontecimientos y enviar una propuesta a revisión. Cuando se aprueba, pasa a formar parte de la Wiki+ de la obra.',
    },
    steps: {
      label: 'Cinco pasos',
      headline: 'Del guion a los lectores en cinco pasos.',
      items: [
        { title: 'Lectura', body: 'El kit de herramientas lee los guiones de texto compatibles de novelas visuales y nunca ejecuta su código.' },
        { title: 'Organización', body: 'El agente que elijas organiza personajes, alias, relaciones, acontecimientos y lugares por secciones. Cada dato incluye una ubicación y una cita breve.' },
        { title: 'Comparación', body: 'El kit de herramientas busca personajes y lugares existentes mediante la API de REZICS y marca cada dato como coincidente, nuevo, incierto o no disponible.' },
        { title: 'Revisión', body: 'Una persona revisa las propuestas. Si dos registros corresponden al mismo personaje, esa fusión también se propone y nunca se hace en silencio.' },
        { title: 'Publicación', body: 'El contenido aprobado se publica en la Wiki+ de la obra. Cuando cambia el guion, solo se envían las diferencias y no se borra en silencio lo que ya se aceptó.' },
      ] as Item[],
    },
    locator: {
      label: 'Ubicación',
      headline: 'Cada dato remite a una línea de diálogo.',
      body: 'La ubicación tiene tres elementos: el hash del guion, la etiqueta y el número de línea. La ruta indica a qué ruta pertenece el diálogo. Quienes revisan la misma versión pueden comprobar el original en su propio ordenador.',
      fields: [
        { label: 'Hash del guion (prefijo)', value: 'sha256 9f2c04b7', code: true },
        { label: 'Etiqueta', value: 'route_two_day3', code: true },
        { label: 'Línea', value: 'Línea 142', code: false },
        { label: 'Ruta', value: 'Ruta 2', code: false },
      ],
      caption: 'Datos ilustrativos. Las versiones deben alinearse explícitamente. No se aplica nada a otra versión de forma automática.',
    },
    local: {
      text: 'El modelo que lee el guion completo',
      more: 'lo eliges tú.',
      body: [
        'REZICS no recibe el guion completo, solo los datos organizados y citas breves. El modelo que lee el guion es el que tú eliges. Activa el modo estricto para ejecutar la inferencia solo en tu dispositivo.',
        'El kit de herramientas es de código abierto con licencia Apache-2.0. No requiere una cuenta de REZICS, no envía datos de uso ni se conecta por su cuenta para descargar contenido. No elude protecciones: no puede leer archivos cifrados o protegidos.',
        'La plataforma limita la longitud total de las citas entre cuentas, traducciones y sitios.',
      ],
    },
    zone: {
      label: 'Sitio',
      headline: 'Wiki+ es un sitio de la obra.',
      body: [
        'Los personajes, lugares, cronologías, guías de capítulos y relaciones tienen sus propias páginas. Las fichas y las listas usan el mismo grafo de datos. Una corrección en una wiki actualiza los filtros, las listas y los demás sitios. Cada lector ve el contenido hasta la ruta que ha leído.',
        'La página de la obra sigue siendo el punto de entrada y reúne las valoraciones, las reseñas, tu progreso y un resumen de Wiki+. Cada comunidad decide si permite que los agentes preparen borradores y si acepta texto generado. Por defecto, solo se admiten datos y estructuras.',
      ],
    },
    finale: 'Las comunidades en chino y japonés tienen sus propios sitios.',
  },

  zones: {
    hero: {
      headline: 'Dos sitios en distintos idiomas, con las mismas identidades.',
      lede: 'Una comunidad en chino y otra en japonés pueden crear sus propios sitios de novelas visuales. Cada una decide los nombres, las descripciones, el orden y las fuentes que acepta. Las obras, los personajes y el equipo de producción son los mismos.',
    },
    mirror: {
      label: 'Dos sitios',
      headline: 'Una corrección de datos compartidos actualiza ambos sitios.',
      body: 'Cada sitio decide sus nombres, descripciones y orden. Ambos comparten las identidades de las obras, los personajes y el equipo de producción.',
      columns: { field: '', zh: 'Sitio en chino', ja: 'Sitio en japonés' },
      rows: [
        { field: 'Nombre', zh: 'Nombre en chino (ilustrativo)', ja: 'Nombre en japonés (ilustrativo)' },
        { field: 'Descripción', zh: 'Escrita por la comunidad en chino', ja: 'Escrita por la comunidad en japonés' },
        { field: 'Orden', zh: 'Según la fecha de publicación en chino', ja: 'Según la fecha de publicación en japonés' },
      ],
      /** The row both sites share, set across both columns. */
      shared: { field: 'Identidad', value: 'Ambos sitios comparten la identidad de la obra' },
      caption: 'Datos ilustrativos.',
    },
    zone: {
      label: 'Zone',
      headline: 'Cada Zone es un sitio completo.',
      items: [
        { title: 'Páginas y direcciones', body: 'El sitio elige las direcciones y el diseño de la página de inicio, las obras, los personajes y las ediciones.' },
        { title: 'Navegación', body: 'Una barra de navegación propia y páginas personalizadas, como una guía de inicio.' },
        { title: 'Aspecto', body: 'Configura la marca y el diseño. Las identidades, las búsquedas, los idiomas, las fuentes y la accesibilidad siguen el mismo sistema para que los lectores reconozcan cada sitio.' },
        { title: 'Versiones', body: 'Puedes previsualizar y validar los cambios del sitio, revertir errores y exportar el sitio completo.' },
        { title: 'API', body: 'Las personas y los agentes de IA administran el sitio mediante la misma API.' },
      ] as Item[],
    },
    space: {
      label: 'Espacio',
      headline: 'El sitio es la fachada y la comunidad es el lugar de encuentro.',
      items: [
        { title: 'Sitio', body: 'Zone es la fachada del sitio, con páginas y navegación propias. También puede ser privado.' },
        { title: 'Comunidad', body: 'La comunidad tiene debates, reglas y miembros, y decide qué fuentes acepta.' },
        { title: 'Ambos', body: 'Un mismo espacio puede tener un sitio y una comunidad, o solo uno de los dos.' },
        { title: 'Un solo seguimiento', body: 'Sigue este espacio una vez para recibir novedades de ambos.' },
      ] as Item[],
    },
    community: {
      label: 'Comunidad',
      headline: 'Los debates, las valoraciones y las listas se vinculan a las obras.',
      items: [
        { title: 'Debates', body: 'Cada obra y cada versión pueden tener un hilo de debate. No hace falta unirse para leerlo.' },
        { title: 'Valoraciones', body: 'Cada valoración indica quién la hizo: todo el sitio, una comunidad o solo tú.' },
        { title: 'Listas', body: 'Ordena y explica listas de recomendaciones y de orden de juego. También puedes exportarlas.' },
        { title: 'Biblioteca', body: 'Si marcas una obra como terminada en el sitio en chino, también cuenta en el japonés. Tu biblioteca y tus listas te acompañan.' },
      ] as Item[],
    },
    script: {
      text: 'Chino tradicional',
      more: 'sigue siendo chino tradicional.',
      body: 'Los nombres y las descripciones indican su idioma. Si no hay una versión en chino tradicional, una conversión automática se marca claramente como alternativa. No cuenta como traducción revisada ni cambia nombres de personas u obras.',
    },
    creators: {
      label: 'Creadores',
      headline: 'Quienes crean novelas visuales también pueden publicarlas aquí.',
      body: 'Los creadores con un contrato con REZICS pueden publicar novelas visuales que cumplan las normas de venta: archivos sin DRM, demos y compra única. Las actualizaciones y las descargas se rigen por las condiciones de compra. La página de la obra, la comunidad y Wiki+ se vinculan a la misma identidad.',
    },
    finale: 'Los servidores MCP también tienen su propio directorio.',
  },
};

export type VnStrings = typeof strings;

export default {
  id: 'visual-novels',
  base: '/visual-novels/',
  name: 'Novelas visuales',
  theme: { kind: 'visual-novels' },
  next: 'mcp',
  pages: [
    {
      slug: '',
      label: 'Inicio',
      meta: meta(
        'Novelas visuales: cada versión, bien descrita',
        'Encuentra novelas visuales por idioma, plataforma, región y cobertura. Las traducciones de fans indican quién las hizo y qué versión usaron como fuente. Los personajes, los créditos, el progreso por ruta y Wiki+ se vinculan a la misma obra.',
      ),
    },
    {
      slug: 'releases',
      label: 'Ediciones',
      meta: meta(
        'Ediciones: las condiciones coinciden en una misma versión',
        'Cada edición de una novela visual tiene su propio registro: idioma, plataforma, región y cobertura completa, parcial o de demo. Los filtros deben coincidir en una misma edición. Una versión con solo el título traducido no cuenta como edición en chino.',
      ),
    },
    {
      slug: 'translations',
      label: 'Traducciones y traductores',
      meta: meta(
        'Traducciones y traductores: indica la fuente',
        'Cada traducción de una novela visual indica quién la hizo, la versión exacta que usó como fuente y su cobertura. Las traducciones de fans no se presentan como oficiales. Cada actualización de un parche tiene su propio registro y las traducciones pueden valorarse por separado de la historia.',
      ),
    },
    {
      slug: 'characters',
      label: 'Personajes y producción',
      meta: meta(
        'Personajes y producción: una identidad por persona',
        'Un personaje conserva una sola identidad en las continuaciones, los ports y las adaptaciones. Los nombres que se muestran dependen del idioma y del nivel de spoilers. Los créditos de guion, arte original, música y voz enlazan con la página de cada persona.',
      ),
    },
    {
      slug: 'spoilers',
      label: 'Etiquetas y spoilers',
      meta: meta(
        'Etiquetas y spoilers: hasta donde has leído',
        'Puedes incluir o excluir etiquetas. Las comunidades deciden por separado si cada etiqueta es pertinente y si revela la trama. Los datos de personajes y Wiki+ solo llegan hasta la ruta que has leído. Tú decides si quieres mostrarlo todo.',
      ),
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: meta(
        'Wiki+: una wiki creada a partir del guion',
        'Quien tiene el guion organiza personajes, lugares y acontecimientos en su propio ordenador mediante herramientas de código abierto y su agente de IA. Cada dato incluye la ubicación del diálogo. REZICS no recibe el texto completo y el contenido se publica tras una revisión humana.',
      ),
    },
    {
      slug: 'zones',
      label: 'Comunidades y sitios',
      meta: meta(
        'Comunidades y sitios: los mismos datos en dos sitios',
        'Las comunidades en chino y japonés pueden crear sitios completos de novelas visuales. Cada una decide los nombres, las descripciones, el orden y las fuentes que acepta, mientras comparten las identidades de las obras, los personajes y el equipo de producción.',
      ),
    },
  ],
  strings,
} satisfies MiniSite<VnStrings>;
