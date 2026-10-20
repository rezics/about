// The software site (軟體): every visible string of /software/ and its six inner pages, in the
// v3 language (.temp/sites/V3-SPEC.md). Design record and sources: src/sites/software/SITE.md and
// facts.md. All sample data (the program 範例編輯器, 甲／乙／丙系統, version numbers, dates, sizes,
// the hash, package names) is fictional and is labelled 示意 wherever it appears.
import type { Item, KindId, MiniSite } from '../schema';

export type StateId = 'compatible' | 'incompatible' | 'unknown' | 'stale' | 'unavailable';
/** One compatibility observation: a state, and the date of the adopted measurement where there is one. */
export type Cell = readonly [StateId, string?];
/** A section's opening: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}
/** A still-life picture in public/images/sites/software/ (`<name>-<width>.avif|webp`). */
export interface Picture {
  name: string;
  alt: string;
}

export interface SoftwareStrings {
  common: { nextPage: string; nextSite: string; sample: string; go: string };
  pictures: Record<'hero' | 'versions' | 'holes' | 'slit' | 'tabs', Picture>;
  states: Record<StateId, string>;
  channels: { stable: string; beta: string };
  sample: {
    program: string;
    /** Newest first. */
    releases: { version: string; channel: 'stable' | 'beta'; date: string; platforms: string; note?: string }[];
    environments: { name: string; short: string }[];
    /** Rows follow `environments`, columns follow `releases`. */
    cells: Cell[][];
  };
  landing: {
    hero: { label: string; headline: string; lede: string };
    pages: Head & { lines: Record<string, string> };
    compatibility: Head & { link: string };
    statement: { text: string; sub: string };
    program: Head & { items: Item[] };
    neighbours: Head & { link: string; tiles: { kind: KindId; line: string }[] };
    closing: string;
  };
  catalogue: {
    hero: { headline: string; lede: string };
    releases: Head;
    list: { caption: string; columns: [string, string, string, string]; points: Item[] };
    statement: { text: string; sub: string };
    identity: Head & { rows: Item[] };
    browse: Head & { points: Item[] };
    closing: string;
  };
  compatibility: {
    hero: { headline: string; lede: string };
    anatomy: Head & { rows: Item[] };
    states: Head & { body: Record<StateId, string>; caption: string; corner: string };
    conditions: Head & { example: string; candidates: Item[]; result: string };
    statement: { text: string; sub: string; note: string };
    closing: string;
  };
  reviews: {
    hero: { headline: string; lede: string };
    rules: Head & { facts: Item[] };
    anatomy: Head & { points: Item[] };
    statement: { text: string; sub: string };
    picks: Head & { rows: Item[] };
    closing: string;
  };
  updates: {
    hero: { headline: string; lede: string };
    levels: Head & { rows: Item[] };
    targets: Head & { rows: Item[] };
    changelog: Head & { more: string; caption: string; start: string };
    statement: { text: string; sub: string };
    closing: string;
  };
  publishing: {
    hero: { headline: string; lede: string };
    record: Head & { caption: string; fields: Item[] };
    steps: Head & { steps: Item[]; note: string };
    licence: Head & { points: Item[] };
    lock: Head & { points: Item[] };
    statement: { text: string; sub: string; note: string };
    maintenance: Head & { rows: Item[] };
    closing: string;
  };
  connections: {
    hero: { headline: string; lede: string };
    relations: Head & { rows: Item[] };
    kinds: Head & { rows: { kind: KindId; line: string; body: string }[] };
    people: Head;
    statement: { text: string; sub: string };
    closing: string;
  };
}

const site = {
  id: 'software',
  base: '/software/',
  name: 'Software',
  theme: { kind: 'software' },
  next: 'visual-novels',
  pages: [
    {
      slug: '',
      label: 'Resumen',
      meta: {
        title: 'Software: versiones, plataformas y compatibilidad comprobada',
        description:
          'Cada programa tiene una identidad en REZICS y una entrada por publicación en cada plataforma. La compatibilidad se basa en pruebas fechadas con métodos descritos. La licencia, las opciones de descarga, las valoraciones y los avisos de actualización están vinculados a la misma identidad.',
      },
    },
    {
      slug: 'catalogue',
      label: 'Catálogo y versiones',
      meta: {
        title: 'Catálogo y versiones: una identidad por programa',
        description:
          'El catálogo de Software de REZICS da una identidad a cada programa. Las publicaciones de cada plataforma se archivan por separado y las versiones siguen el orden de su ecosistema. Las bifurcaciones tienen su propia entrada, enlazada con el proyecto original. Los resultados de búsqueda indican la cantidad con claridad.',
      },
    },
    {
      slug: 'compatibility',
      label: 'Compatibilidad',
      meta: {
        title: 'Compatibilidad: pruebas con fecha',
        description:
          'La compatibilidad del software en REZICS se basa en pruebas que indican el criterio, el método, las condiciones y la fecha, además de la versión y el archivo correspondientes. Compatible, incompatible, desconocido, desactualizado y no disponible son estados distintos. Sin pruebas, se indica como desconocido.',
      },
    },
    {
      slug: 'reviews',
      label: 'Valoraciones',
      meta: {
        title: 'Valoraciones: cada puntuación corresponde a una publicación',
        description:
          'En REZICS puedes valorar una publicación concreta de un programa. Cada puntuación muestra el número de valoraciones, su distribución y la comunidad correspondiente. La puntuación conjunta de varias versiones se calcula aparte y explica el método. Las selecciones de la comunidad enlazan con el debate que las decidió.',
      },
    },
    {
      slug: 'updates',
      label: 'Sigue las actualizaciones',
      meta: {
        title: 'Sigue las actualizaciones: publicaciones y notas',
        description:
          'Sigue un programa, una persona desarrolladora o un conjunto de filtros en REZICS para recibir avisos de nuevas publicaciones y notas de actualización según tus preferencias. Puedes recibirlos en la bandeja de entrada, como notificaciones push o en un resumen por correo.',
      },
    },
    {
      slug: 'publishing',
      label: 'Publicación y licencia',
      meta: {
        title: 'Publicación y licencia: para quienes publican software',
        description:
          'Quienes desarrollan software mantienen su página en REZICS y publican las versiones para cada plataforma, con el tamaño de los archivos, los hashes, las notas de actualización y las capturas. También indican los términos y la versión exactos de la licencia, y cómo obtener el programa.',
      },
    },
    {
      slug: 'connections',
      label: 'Relaciones',
      meta: {
        title: 'Relaciones: dependencias y extensiones',
        description:
          'En REZICS, un programa se relaciona con los módulos de juegos que dependen de él, los servidores MCP que permiten usarlo a agentes de IA, las habilidades que lo necesitan y las API relacionadas. Cada relación tiene una dirección y una fuente, y puede consultarse desde ambos extremos.',
      },
    },
  ],
  strings: {
    common: { nextPage: 'Página siguiente', nextSite: 'Siguiente sitio', sample: 'Datos de ejemplo: el programa, los sistemas, las versiones y las fechas son ficticios.', go: 'Ir a' },
    pictures: {
      hero: { name: 'hero', alt: 'Hojas azul petróleo se superponen en abanico, desplazadas una tras otra. La hoja superior es celeste.' },
      versions: { name: 'versions', alt: 'Tres sobres azul petróleo alineados, cada uno atado con una tira azul grisácea.' },
      holes: { name: 'holes', alt: 'Una hoja azul petróleo tiene filas regulares de agujeros redondos, algunos sin perforar.' },
      slit: { name: 'slit', alt: 'Una hoja azul petróleo atraviesa una ranura en un papel azul grisáceo.' },
      tabs: { name: 'tabs', alt: 'Una hoja azul petróleo une, con dos tiras de papel, una hoja mostaza y otra verde claro.' },
    },
    states: { compatible: 'Compatible', incompatible: 'Incompatible', unknown: 'Desconocido', stale: 'Desactualizado', unavailable: 'No disponible' },
    channels: { stable: 'Versión estable', beta: 'Versión beta' },
    sample: {
      program: 'Editor de ejemplo',
      releases: [
        { version: '4.1', channel: 'beta', date: '2026-10-06', platforms: 'Sistemas A, B y C', note: 'Añade ventanas divididas y corrige la apertura lenta de archivos grandes.' },
        { version: '4.0', channel: 'stable', date: '2026-08-25', platforms: 'Sistemas A, B y C', note: 'Añade espacios de trabajo y elimina el formato antiguo de extensiones.' },
        { version: '3.2', channel: 'stable', date: '2026-03-17', platforms: 'Sistemas A, B y C', note: 'Añade la versión móvil y mejora la velocidad de búsqueda.' },
        { version: '3.1', channel: 'stable', date: '2025-11-04', platforms: 'Sistemas A y B' },
        { version: '3.0', channel: 'stable', date: '2025-06-10', platforms: 'Sistemas A y B' },
      ],
      environments: [
        { name: 'Sistema A, 64 bits', short: 'A 64 bits' },
        { name: 'Sistema A, 32 bits', short: 'A 32 bits' },
        { name: 'Sistema B, 64 bits', short: 'B 64 bits' },
        { name: 'Sistema C, móvil', short: 'C móvil' },
      ],
      // Columns follow `releases` (4.1, 4.0, 3.2, 3.1, 3.0).
      cells: [
        [['unknown'], ['compatible', '2026-08-29'], ['compatible', '2026-03-20'], ['compatible', '2025-11-09'], ['compatible', '2025-06-14']],
        [['unavailable'], ['unavailable'], ['incompatible', '2026-03-22'], ['compatible', '2025-11-10'], ['stale', '2025-06-15']],
        [['compatible', '2026-10-09'], ['unknown'], ['compatible', '2026-03-20'], ['compatible', '2025-11-12'], ['unknown']],
        [['unknown'], ['compatible', '2026-09-02'], ['stale', '2026-03-25'], ['unavailable'], ['unavailable']],
      ],
    },

    landing: {
      hero: {
        label: 'Software',
        headline: 'Cada versión indica en qué sistemas funciona, con pruebas y fechas.',
        lede: 'REZICS da una identidad a cada programa y registra cada publicación para cada plataforma. Los entornos sin pruebas aparecen como desconocidos. La licencia, las opciones de descarga, las valoraciones y los debates están vinculados a la misma identidad.',
      },
      pages: {
        label: 'Seis páginas',
        headline: 'Desde encontrar un programa hasta publicar el tuyo.',
        lines: {
          catalogue: 'Una identidad y un registro por publicación',
          compatibility: 'Comprueba con pruebas fechadas si funciona',
          reviews: 'Cada puntuación indica la versión',
          updates: 'Sigue programas, desarrolladores y filtros',
          publishing: 'Para desarrolladores: publicaciones, licencias y descargas',
          connections: 'Módulos, servidores MCP, habilidades y API',
        },
      },
      compatibility: {
        label: 'Compatibilidad',
        headline: 'Si se afirma que funciona, debe haber pruebas.',
        lead: 'La lista de plataformas compatibles que declara quien desarrolla es una afirmación. Una prueba es un resultado verificado por alguien en una fecha y un entorno concretos, con el método y las condiciones indicados. REZICS usa pruebas para determinar si algo funciona.',
        link: 'Cómo se registra la compatibilidad',
      },
      statement: {
        text: 'Sin pruebas, se indica como desconocido;',
        sub: 'no se supone que sea compatible ni incompatible.',
      },
      program: {
        label: 'Un programa',
        headline: 'Todo está vinculado a una identidad.',
        items: [
          { title: 'Publicación', body: 'Cada publicación se archiva por plataforma, y las versiones estables se separan de las beta.' },
          { title: 'Compatibilidad', body: 'El sistema operativo, su versión y la arquitectura del procesador se comprueban para una misma publicación.' },
          { title: 'Licencia', body: 'Se indican los términos y la versión de la licencia, así como quién la declaró y cuándo.' },
          { title: 'Cómo obtenerlo', body: 'Las descargas oficiales, las tiendas y los repositorios de paquetes aparecen juntos. Los enlaces a otros sitios se identifican como externos.' },
          { title: 'Valoraciones', body: 'Puedes valorar una versión concreta. El número de valoraciones y su distribución aparecen junto a la puntuación.' },
          { title: 'Seguir', body: 'Sigue un programa o a quienes lo mantienen para recibir avisos de nuevas versiones y anuncios.' },
        ],
      },
      neighbours: {
        label: 'Relaciones',
        headline: 'Un programa casi nunca está solo.',
        lead: 'Los módulos de juegos dependen de él, los servidores MCP permiten usarlo a agentes de IA y algunas habilidades lo necesitan. Cada relación tiene una dirección y una fuente, y puede consultarse desde ambos extremos.',
        link: 'Ver todas las relaciones',
        tiles: [
          { kind: 'games', line: 'Programas necesarios para módulos y cargadores' },
          { kind: 'mcp', line: 'Servidores que permiten usarlo a un agente' },
          { kind: 'skills', line: 'Habilidades que lo incluyen como dependencia' },
          { kind: 'apis', line: 'API que ofrece o utiliza' },
        ],
      },
      closing: 'Un programa, una identidad y un registro de cada versión.',
    },

    catalogue: {
      hero: {
        headline: 'La versión cambia, la identidad permanece.',
        lede: 'Aunque un programa cambie de nombre, pase a otro repositorio o llegue a una plataforma nueva, sigue siendo la misma entrada en REZICS. Cada publicación tiene su propio registro con el contenido que ofrecía en ese momento.',
      },
      releases: {
        label: 'Publicación',
        headline: 'Cada publicación se archiva por separado.',
        lead: 'Cada publicación registra la versión, el canal, la fecha, la plataforma y los archivos que incluía. Los datos incorrectos pueden corregirse con pruebas. Los parches posteriores se registran por separado.',
      },
      list: {
        caption: 'Publicaciones del Editor de ejemplo, de la más reciente a la más antigua. Ejemplo.',
        columns: ['Versión', 'Canal', 'Fecha', 'Plataforma'],
        points: [
          { title: 'Canal', body: 'Las versiones estables se separan de las beta. La más reciente no siempre es la que necesitas.' },
          { title: 'Orden de las versiones', body: 'El orden sigue las reglas del ecosistema del programa, no una comparación textual de los números de versión.' },
          { title: 'Plataforma', body: 'Cada publicación de una versión en una plataforma tiene su propio registro.' },
        ],
      },
      statement: {
        text: 'REZICS no cuenta las descargas',
        sub: 'ni las usa para ordenar. Las listas indican el criterio que utilizan.',
      },
      identity: {
        label: 'Nombres e identidad',
        headline: 'Un mismo nombre no significa que sea el mismo programa.',
        rows: [
          { title: 'Nombres en varios idiomas', body: 'Se registran el nombre en chino, el original y las abreviaturas habituales, para que puedas encontrar el programa con cualquiera de ellos.' },
          {
            title: 'Identificadores',
            body: 'Los nombres, las direcciones y los identificadores de cada repositorio se registran con su fuente. La misma cadena en dos repositorios no se considera automáticamente el mismo programa.',
          },
          { title: 'Bifurcaciones', body: 'Un proyecto bifurcado tiene su propia entrada, responsables y publicaciones, y enlaza con el proyecto original mediante la relación «bifurcación de».' },
          { title: 'Fusiones y separaciones', body: 'Las entradas duplicadas se fusionan con pruebas y las direcciones antiguas siguen funcionando. Si una fusión fue incorrecta, se puede revertir sin duplicar los favoritos ni las valoraciones.' },
        ],
      },
      browse: {
        label: 'Filtros',
        headline: 'Todos los filtros deben coincidir en una misma publicación.',
        lead: 'Si buscas «una versión estable con licencia de código abierto que funcione en el Sistema B de 64 bits», REZICS solo muestra programas con una publicación que cumpla todas las condiciones. No combina condiciones de publicaciones distintas.',
        points: [
          { title: 'Cantidad', body: 'Los resultados indican su cantidad. Si aún se están contando, aparece «al menos».' },
          { title: 'Recorre la lista', body: 'Puedes recorrer la lista hasta el último resultado.' },
          { title: 'Guarda la vista', body: 'Guarda los filtros habituales como una vista y síguela.' },
        ],
      },
      closing: 'Las versiones cambian, los registros permanecen.',
    },

    compatibility: {
      hero: {
        headline: 'La compatibilidad se basa en pruebas individuales.',
        lede: 'La lista de plataformas compatibles que declara quien desarrolla es una afirmación. Una prueba es un resultado verificado por alguien en una fecha y un entorno concretos. REZICS registra ambas cosas por separado y usa las pruebas para determinar la compatibilidad.',
      },
      anatomy: {
        label: 'Una prueba',
        headline: 'Qué incluye una prueba.',
        lead: 'Una prueba incluye estos datos para que otras personas puedan repetirla y saber a qué se aplica el resultado.',
        rows: [
          { title: 'Criterio', body: 'Qué se comprueba: si el programa se inicia, si completa una tarea o qué valor alcanza. Si hay un valor, también se indica la unidad.' },
          { title: 'Método', body: 'Los pasos deben estar claros para que otras personas puedan repetir la prueba.' },
          { title: 'Condiciones', body: 'La versión del sistema operativo, la arquitectura del procesador y los ajustes se vinculan a una misma prueba. Si cambian las condiciones, se registra otra prueba.' },
          { title: 'Archivo', body: 'La prueba indica la versión y el archivo correspondientes, con un hash verificado. El hash solo identifica esos bytes y no confirma otros archivos.' },
          { title: 'Fecha y autoría', body: 'Cada prueba indica su fecha y quién la envió. Pueden enviarla personas y agentes de IA. Las cuentas automatizadas se identifican como tales.' },
          { title: 'Aceptación', body: 'Las pruebas se envían como propuestas y solo cuentan cuando se aceptan. Las objeciones se indican por separado, y el resultado anterior se conserva.' },
        ],
      },
      states: {
        label: 'Cinco estados',
        headline: 'Cinco estados, cada uno con su significado.',
        lead: 'Además de compatible e incompatible, hay tres situaciones que suelen confundirse. REZICS las distingue.',
        body: {
          compatible: 'Al menos una prueba aceptada se completó en este entorno y tiene fecha.',
          incompatible: 'Una prueba aceptada muestra que no funciona, con las pruebas y la fecha.',
          unknown: 'No hay pruebas. No se deduce nada de etiquetas, categorías o textos promocionales.',
          stale: 'La prueba ha superado su periodo de validez. El resultado sigue visible, pero no se considera actual.',
          unavailable: 'No hay ninguna publicación disponible para este entorno, así que no se puede determinar la compatibilidad.',
        },
        caption: 'Compatibilidad de las versiones del Editor de ejemplo en cuatro entornos. Ejemplo.',
        corner: 'Entorno',
      },
      conditions: {
        label: 'Condiciones',
        headline: 'Las condiciones deben coincidir en una misma prueba.',
        lead: 'Al filtrar por compatibilidad, una misma publicación y una misma prueba deben cumplir todas las condiciones. Combinar resultados de distintas versiones puede parecer válido, pero luego no funcionar al instalar.',
        example: 'Por ejemplo, si los filtros son «Sistema B de 64 bits, versión estable, compatible y posterior a 4.0», el Editor de ejemplo tiene dos publicaciones posibles. Ejemplo:',
        candidates: [
          { title: 'Versión beta 4.1', body: 'Compatible. Se ha probado, pero no es una versión estable.' },
          { title: 'Versión estable 4.0', body: 'Desconocido. Es estable, pero nadie lo ha probado.' },
        ],
        result: 'Las condiciones se reparten entre dos publicaciones, así que no hay resultados. REZICS lo indica directamente y no relaja los filtros sin avisar.',
      },
      statement: {
        text: 'Cada estado tiene pruebas y un alcance definido;',
        sub: 'un enlace externo por sí solo no demuestra nada.',
        note: 'Lo mismo ocurre con un análisis: solo describe un archivo y un análisis concretos.',
      },
      closing: 'Las pruebas determinan si funciona.',
    },

    reviews: {
      hero: {
        headline: 'Indica la versión antes de puntuar.',
        lede: 'Un mismo programa puede cambiar mucho entre versiones. Puedes valorarlo en conjunto o puntuar una publicación concreta. Las valoraciones de una versión siempre permanecen con esa versión.',
      },
      rules: {
        label: 'Reglas de puntuación',
        headline: 'La media requiere suficientes valoraciones.',
        facts: [
          { title: '5', body: 'Por defecto, se necesitan cinco valoraciones para mostrar la media. Antes, solo se muestran la cantidad, la distribución y cuántas faltan.' },
          { title: '50', body: 'La clasificación usa una puntuación ponderada. Por defecto, requiere al menos cincuenta valoraciones y muestra la media y la ponderación utilizadas.' },
          { title: '1', body: 'Para cada pregunta y objeto, una persona tiene una sola valoración vigente. Si cambia la puntuación, se actualiza esa valoración.' },
        ],
      },
      anatomy: {
        label: 'Preguntas y obras',
        headline: 'Cada puntuación responde a una pregunta.',
        lead: 'La pregunta, la escala y la obra valorada se definen juntas. Las puntuaciones de preguntas distintas no se combinan, y las de una publicación no se suman automáticamente a las del programa completo.',
        points: [
          { title: 'Comparación', body: 'Las puntuaciones generales y las de cada comunidad aparecen por separado, no se mezclan.' },
          { title: 'Entre versiones', body: 'La puntuación conjunta de varias versiones es otra medida, con el método y la cantidad de publicaciones indicados.' },
          { title: 'Sin datos inventados', body: 'REZICS no inventa reseñas, votos ni participación. Las cuentas automatizadas se identifican como tales.' },
        ],
      },
      statement: {
        text: 'Si nadie ha valorado el programa, no se muestra ningún gráfico;',
        sub: 'no aparece un cero ni una barra vacía.',
      },
      picks: {
        label: 'Selecciones y alternativas',
        headline: 'Las selecciones tienen responsables y las alternativas, motivos.',
        rows: [
          { title: 'Selección de la comunidad', body: 'Cada programa seleccionado por una comunidad enlaza con el debate en que se tomó la decisión.' },
          { title: 'Alternativa', body: 'La relación «sirve como alternativa para esta tarea» incluye el motivo y quién la propuso. También puede recibir objeciones.' },
          { title: 'Listas', body: 'Las listas indican el entorno previsto y si se ha comprobado la compatibilidad.' },
          { title: 'Recomendaciones', body: 'Cada recomendación explica el motivo, como tus filtros o la decisión de una comunidad. Puedes desactivarlas por completo.' },
          { title: 'Informar de un problema', body: 'Si una versión tiene un problema, el debate queda vinculado a ella, para que otras personas sepan de cuál se trata.' },
        ],
      },
      closing: 'Cada puntuación indica la versión y cuántas personas la valoraron.',
    },

    updates: {
      hero: {
        headline: 'Recibe avisos de publicaciones según tus preferencias.',
        lede: 'Sigue un programa para recibir sus nuevas publicaciones y notas de actualización. Decide si quieres recibir todos los avisos, solo los importantes o ninguno.',
      },
      levels: {
        label: 'Frecuencia de avisos',
        headline: 'Tres opciones para cada seguimiento.',
        lead: 'Puedes cambiar los ajustes cuando quieras y configurar avisos distintos para una publicación concreta.',
        rows: [
          { title: 'Todos', body: 'Recibes avisos de cada publicación, anuncio y mensaje.' },
          { title: 'Selecciones', body: 'Recibes avisos de nuevas publicaciones, anuncios y decisiones de la comunidad.' },
          { title: 'Desactivados', body: 'Solo recibes avisos de respuestas y menciones que te afectan directamente.' },
          { title: 'Dónde recibirlos', body: 'Elige la bandeja de entrada, las notificaciones push o un resumen por correo. Cancela la suscripción con un clic.' },
        ],
      },
      targets: {
        label: 'Qué puedes seguir',
        headline: 'Puedes seguir más que programas.',
        rows: [
          { title: 'Programa', body: 'Sus nuevas publicaciones y notas de actualización.' },
          { title: 'Desarrolladores u organizaciones', body: 'Sus nuevas entradas y anuncios.' },
          { title: 'Filtros', body: 'Guarda una vista como «editores de texto de código abierto que funcionan en el Sistema B». Los programas nuevos que cumplan estos filtros aparecerán en una pestaña de inicio y en tus resúmenes.' },
          { title: 'Realm', body: 'Los anuncios y decisiones de la comunidad, como nuevas selecciones.' },
        ],
      },
      changelog: {
        label: 'Notas de actualización',
        headline: 'Las notas de actualización acompañan cada publicación.',
        lead: 'Las notas aparecen con cada publicación. Si pasas de la versión 3.2 a la beta 4.1, puedes leer en orden los cambios de cada versión intermedia.',
        more: 'La sección «Continuar» de la página de inicio reúne las actualizaciones de paquetes compatibles y el siguiente capítulo que aún no has leído. Las actualizaciones y las versiones anteriores se fijan a archivos concretos, para que al volver a una versión recibas el mismo archivo.',
        caption: 'Notas de actualización del Editor de ejemplo, de la más reciente a la más antigua. Ejemplo.',
        start: 'Empieza a leer aquí',
      },
      statement: {
        text: 'Tus scripts y agentes de IA',
        sub: 'leen el mismo registro de actualizaciones y pueden continuar desde donde lo dejaron.',
      },
      closing: 'Tú decides qué avisos recibir y con qué frecuencia.',
    },

    publishing: {
      hero: {
        headline: 'Registra tus publicaciones para que puedan consultarse.',
        lede: 'Quienes desarrollan software mantienen su programa en REZICS, con la versión, la plataforma, los archivos y las notas de cada publicación, además de la licencia y las opciones para obtenerlo. Las personas que lo siguen, quienes aplican filtros y los agentes de IA consultan la misma información.',
      },
      record: {
        label: 'Una publicación',
        headline: 'Datos de una publicación.',
        lead: 'La publicación no se puede enviar si faltan campos obligatorios. Después de enviarla, queda archivada.',
        caption: 'Registro de la publicación 4.0 del Editor de ejemplo. Ejemplo.',
        fields: [
          { title: 'Versión', body: '4.0' },
          { title: 'Canal', body: 'Versión estable' },
          { title: 'Fecha', body: '2026-08-25' },
          { title: 'Plataforma', body: 'Sistema A, 64 bits; Sistema B, 64 bits; Sistema C, móvil' },
          { title: 'Tamaño del archivo', body: '48.2 MB' },
          { title: 'Hash, fragmento', body: 'sha256 9f2c41d7e41a' },
          { title: 'Licencia', body: 'Licencia de código abierto, versión 2.0' },
          { title: 'Cómo obtenerlo', body: 'Sitio del desarrollador, enlace externo' },
          { title: 'Notas de actualización', body: 'Añade espacios de trabajo y elimina el formato antiguo de extensiones.' },
        ],
      },
      steps: {
        label: 'Proceso de publicación',
        headline: 'Cinco pasos para publicar una versión.',
        steps: [
          { title: 'Confirma tus permisos de mantenimiento', body: 'Confirma que puedes mantener el proyecto antes de editar su página y sus publicaciones.' },
          { title: 'Completa los datos', body: 'La versión, el canal, la fecha y los archivos de cada plataforma.' },
          { title: 'Declara la licencia', body: 'Elige los términos y la versión de la licencia. La declaración registra quién la hizo, cuándo y a qué se aplica.' },
          {
            title: 'Indica cómo obtenerlo',
            body: 'Indica quién proporciona los archivos, dónde descargarlos o qué página externa usar para instalarlos. Si REZICS solo enlaza a otro sitio, no afirma que se encargue de la instalación.',
          },
          { title: 'Publica', body: 'La publicación queda archivada. Quienes te siguen reciben avisos según sus preferencias.' },
        ],
        note: 'Puedes completar estos pasos por API y MCP, y automatizar el envío de cada publicación.',
      },
      licence: {
        label: 'Licencia',
        headline: 'La licencia indica los términos y la versión.',
        lead: 'Cada declaración de licencia registra los términos exactos, la versión, quién la hizo, cuándo, su alcance y su fuente. El texto importado de otras fuentes indica su origen y no se presenta como una declaración tuya.',
        points: [
          { title: 'No es una certificación', body: 'La declaración no es una certificación legal ni cambia los permisos de edición.' },
          { title: 'Indica lo que no sabes', body: 'Si no sabes quién concedió la licencia ni en qué año, indícalo.' },
          { title: 'Se puede filtrar', body: 'Usa la licencia como filtro para encontrar programas con los términos que necesitas.' },
        ],
      },
      lock: {
        label: 'Dependencias',
        headline: 'Las dependencias siguen las reglas de cada ecosistema.',
        lead: 'Al analizar dependencias, REZICS conserva la identidad, el orden de versiones y el significado de cada ecosistema, y fija el resultado a archivos concretos.',
        points: [
          { title: 'Obligatorias y recomendadas', body: 'Las dependencias obligatorias y los conflictos se registran por separado de las combinaciones recomendadas y sus avisos.' },
          { title: 'Versiones retiradas', body: 'Las versiones retiradas siguen las reglas de su ecosistema. Las dependencias fijadas conservan la selección original de archivos.' },
          { title: 'Motivos diferenciados', body: 'No encontrar una fuente, usar términos no admitidos o superar el presupuesto se indican por separado de los conflictos irresolubles.' },
          { title: 'No encontrarlo no significa que no exista', body: 'No encontrar datos sobre dependencias no significa que no haya dependencias.' },
        ],
      },
      statement: {
        text: 'Instalar no significa permitir la ejecución;',
        sub: 'los scripts de un paquete solo se ejecutan con tu consentimiento explícito.',
        note: 'El proceso de instalación de REZICS solo acepta archivos verificados y los coloca en una zona temporal aislada.',
      },
      maintenance: {
        label: 'Después de publicar',
        headline: 'Mantenimiento posterior a la publicación.',
        rows: [
          { title: 'Capturas y declaraciones', body: 'Las capturas y las declaraciones de privacidad y accesibilidad indican quién las proporciona.' },
          { title: 'Retira una afirmación', body: 'Si una afirmación sobre una plataforma queda desactualizada, puedes retirarla sin borrar el programa, sus publicaciones ni sus debates.' },
          { title: 'Venta', body: 'Si el programa está a la venta, los precios, regiones y periodos de validez aparecen en una tabla. Los cambios de precio también quedan registrados.' },
          { title: 'Créditos', body: 'Quienes mantienen y contribuyen al proyecto aparecen con sus funciones. Si cambian de proyecto, conservan la misma identidad.' },
        ],
      },
      closing: 'Publica una vez y todos consultan la misma información.',
    },

    connections: {
      hero: {
        headline: 'Todo lo que depende de un programa o lo amplía enlaza con él.',
        lede: 'En REZICS, los módulos de juegos, los servidores MCP, las habilidades y las API tienen sus propias identidades. Las relaciones indican qué programas necesitan y pueden consultarse desde ambos extremos.',
      },
      relations: {
        label: 'Nombres de las relaciones',
        headline: 'Cada relación tiene un nombre y una dirección.',
        lead: 'Cada dirección de una relación tiene su propia expresión, natural en todos los idiomas.',
        rows: [
          { title: 'Necesita / necesario para', body: 'Dependencia obligatoria. Sin ella, no funciona.' },
          { title: 'Se recomienda / recomendado para', body: 'Funciona mejor con ello, pero también puede funcionar sin ello.' },
          { title: 'Conflicto', body: 'La instalación conjunta causa problemas. La relación se muestra igual desde ambos extremos.' },
          { title: 'Bifurcación de / bifurcado como', body: 'Proyecto mantenido por separado después de que otro grupo lo asumiera.' },
          { title: 'Alternativa a / sustituible por', body: 'Otro programa que cumple la misma función, con el motivo indicado.' },
        ],
      },
      kinds: {
        label: 'Otros tipos',
        headline: 'Relaciones con otros tipos.',
        rows: [
          {
            kind: 'games',
            line: 'Módulos y cargadores',
            body: 'Los módulos de juegos dependen del juego y a menudo de un cargador. Las dependencias obligatorias y recomendadas se registran por separado. El cargador también es software, con sus propias publicaciones y datos de compatibilidad.',
          },
          {
            kind: 'mcp',
            line: 'Permite que un agente lo use',
            body: 'El servidor MCP que permite a un agente de IA usar el programa tiene su propia entrada. El proyecto, las publicaciones de paquetes, los puntos de acceso desplegados y las capacidades observadas se registran por separado.',
          },
          { kind: 'skills', line: 'La incluye como dependencia', body: 'Una habilidad puede declarar qué programas necesita. Comprueba las capacidades y el entorno antes de combinarlos.' },
          { kind: 'apis', line: 'Proporciona o utiliza', body: 'Las API públicas que ofrece o utiliza un programa tienen sus propias versiones y pruebas en API Hub, y enlazan con ese programa.' },
        ],
      },
      people: {
        label: 'Créditos',
        headline: 'Quienes programan también tienen una sola identidad.',
        lead: 'Una misma persona puede mantener un programa, escribir una novela y reseñar un juego. En REZICS, todo está bajo una sola identidad. Los créditos reúnen esas obras. Síguela para enterarte de sus novedades en cada tipo.',
      },
      statement: {
        text: 'Compartir un nombre no basta. Las relaciones deben indicar su fuente;',
        sub: 'un agente de IA puede proponer, pero no decide en silencio que dos cosas son iguales.',
      },
      closing: 'Desde cualquier extremo puedes encontrar el otro.',
    },
  },
} satisfies MiniSite<SoftwareStrings>;

export default site;
