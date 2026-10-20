// Skill Hub (/skills/): every visible string of the site, shaped by the v3 parts (hero, section,
// facts list, photo row, tile masonry, statement, closing). Design record and sources:
// src/sites/skills/SITE.md and facts.md. Terms: 「AI 代理」 on first mention in a section, then
// 「代理」; 「技能」 throughout; 「MCP 伺服器」.
import type { KindId, MiniSite } from '../schema';

/** A hairline facts row: title left, text right. */
export interface Row {
  title: string;
  body: string;
}

/** A frontmatter line of the example skill and what REZICS does with it. */
export interface KeyRow {
  key: string;
  value?: string;
  body: string;
}

/** A file role of the Agent Skills format. */
export interface FileRow extends Row {
  /** The literal path from the format, set as code. */
  path?: string;
  /** A short mark beside the title (可執行, 缺少). */
  mark?: string;
}

/** A section opening: eyebrow in columns 1 to 3, serif h2 in 4 to 11, lead in 4 to 9. */
export interface Head {
  eyebrow: string;
  /** One or two short clauses; each item is one line on wide screens. */
  headline: string[];
  lead?: string;
}

/** A large serif statement: the first half in ink, the second in muted ink. */
export interface Said {
  text: string;
  muted: string;
}

/** A still-life picture: the file stem under /images/sites/skills/ and its description. */
export interface Pic {
  src: string;
  alt: string;
}

/**
 * How an inner page ends: a lead-in to the next page (a section whose title leads into one tile),
 * then the closing statement before the ink pill into REZICS.
 */
export interface End {
  next: string;
  closing: string;
}

export interface SkillsStrings {
  ui: {
    nextPage: string;
    nextSite: string;
  };
  landing: {
    hero: { eyebrow: string; headline: string[]; lede: string; pic: Pic };
    layers: Head & { rows: Row[] };
    files: Head & { body: string; link: string; pic: Pic };
    statement: Said;
    pages: Head & { tiles: { slug: string; line: string }[] };
    neighbours: Head & { tiles: { to: KindId; line: string }[] };
    closing: { title: string; body: string };
  };
  directory: {
    head: { headline: string[]; lede: string };
    specimens: Head & { rows: Row[] };
    filters: Head & { rows: Row[] };
    statement: Said;
    lists: Head & { body: string; pic: Pic };
    views: Head & { rows: Row[] };
    end: End;
  };
  versions: {
    head: { headline: string[]; lede: string };
    frontmatter: Head & { rows: KeyRow[] };
    files: Head & { rows: FileRow[] };
    history: Head & { body: string[]; pic: Pic };
    historyExample: Head & { rows: Row[] };
    packages: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  evidence: {
    head: { headline: string[]; lede: string };
    declaration: Head & { code: string; codeLabel: string; caption: string };
    record: Head & { rows: Row[] };
    rules: Head & { rows: Row[] };
    opinions: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  use: {
    head: { headline: string[]; lede: string };
    steps: Head & { rows: Row[] };
    agent: Head & { paragraphs: [string, string]; link: string };
    later: Head & { rows: Row[] };
    end: End;
  };
  publish: {
    head: { headline: string[]; lede: string };
    import: Head & { body: string; pic: Pic };
    steps: Head & { rows: Row[] };
    limits: Head & { rows: Row[]; after: string };
    statement: Said & { note: string; rows: Row[] };
    credits: Head & { rows: Row[] };
    end: End & { nextLine: string };
  };
}

const skills = {
  id: 'skills',
  base: '/skills/',
  name: 'Skill Hub',
  theme: { kind: 'skills' },
  pages: [
    {
      slug: '',
      label: 'Resumen',
      meta: {
        title: 'Skill Hub: índice de habilidades para agentes de IA',
        description:
          'Skill Hub reúne habilidades para agentes de IA. Muestra el texto completo, los archivos, las versiones y los registros de compatibilidad con fecha. Las valoraciones y los debates corresponden a cada versión, para que puedas revisarlos antes de usarla.',
      },
    },
    {
      slug: 'directory',
      label: 'Catálogo',
      meta: {
        title: 'Catálogo de Skill Hub: una habilidad por fila',
        description:
          'Encuentra habilidades en Skill Hub con una descripción breve. Puedes filtrar por cualquier atributo disponible y recorrer todos los resultados. Sigue las listas de otras personas y tus vistas guardadas para enterarte cuando aparezcan habilidades que cumplan tus condiciones.',
      },
    },
    {
      slug: 'versions',
      label: 'Versiones y archivos',
      meta: {
        title: 'Página de la habilidad: texto, archivos y versiones',
        description:
          'La página de cada habilidad muestra el SKILL.md completo, la función de cada archivo y su hash. Los archivos ejecutables se destacan. Cada versión conserva su contenido, licencia y origen; las nuevas no sustituyen a las anteriores.',
      },
    },
    {
      slug: 'evidence',
      label: 'Evidencia y valoraciones',
      meta: {
        title: 'Compatibilidad y valoraciones de habilidades',
        description:
          'Las condiciones de compatibilidad que declara quien creó la habilidad son solo declaraciones. Skill Hub también registra quién la usó, con qué agente de IA y versión, en qué idioma y en qué fecha. Las valoraciones y los debates se vinculan a cada versión.',
      },
    },
    {
      slug: 'use',
      label: 'Úsala con tu agente',
      meta: {
        title: 'Dale habilidades a tu agente de IA',
        description:
          'Cuando encuentres una habilidad en Skill Hub, lee el texto completo y los archivos, revisa los registros de compatibilidad y elige una versión para descargar o copiar. Fija las versiones de los paquetes que necesita y sigue las actualizaciones. Tu agente de IA también puede consultar los mismos datos por API y MCP.',
      },
    },
    {
      slug: 'publish',
      label: 'Publica una habilidad',
      meta: {
        title: 'Publica habilidades en Skill Hub',
        description:
          'Importa en Skill Hub una carpeta de habilidad con el formato correcto. Se conserva cada byte sin cambios, no se ejecutan scripts y no se descartan los campos desconocidos. Cada publicación fija los archivos, la licencia y el origen en una versión nueva.',
      },
    },
  ],
  strings: {
    ui: {
      nextPage: 'Página siguiente',
      nextSite: 'Siguiente sitio',
    },
    landing: {
      hero: {
        eyebrow: 'Skill Hub',
        headline: ['Antes de dársela a tu agente de IA,', 'lee cada parte con atención.'],
        lede: 'En Skill Hub puedes revisar las habilidades que usan los agentes de IA. Antes de elegir, consulta la descripción completa, los archivos, las versiones y los registros de uso con fecha.',
        pic: {
          src: 'fold',
          alt: 'Una hoja verde lima está doblada por la mitad y abierta a medias. Debajo, se superponen hojas color crema, verde claro y azul pálido, cada una dejando ver su borde.',
        },
      },
      layers: {
        eyebrow: 'Orden de lectura',
        headline: ['Una habilidad se lee en tres partes,', 'en el mismo orden que un agente de IA.'],
        lead: 'Ejemplo: una habilidad para organizar los personajes de un capítulo. Primero se leen el nombre y la descripción, después las instrucciones completas y, por último, los archivos que requiere la tarea. Skill Hub la presenta en ese orden.',
        rows: [
          {
            title: 'Una línea',
            body: 'La descripción de chapter-cast dice: «Enumera los personajes del capítulo e indica los párrafos». El agente lee primero esta frase para decidir si la habilidad sirve para la tarea.',
          },
          {
            title: 'Una página',
            body: 'El SKILL.md dice: «Enumera los personajes y sus alias, e indica dónde aparecen en el original. Si no encuentras la fuente, indícalo». El agente lee estas instrucciones y limitaciones cuando necesita organizar personajes.',
          },
          {
            title: 'Archivos necesarios',
            body: 'references/aliases.md muestra un formato para relacionar personajes, alias y ubicaciones en el original. El agente consulta este archivo de referencia cuando necesita comprobar alias. Los demás archivos también aparecen en la lista.',
          },
        ],
      },
      files: {
        eyebrow: 'Archivos',
        headline: ['Se enumeran todos los archivos,', 'y se identifican los que pueden ejecutarse.'],
        body: 'SKILL.md, scripts/, references/, assets/ y los archivos que no aparecen en la especificación tienen una ruta, una función y un hash. También se indican los archivos mencionados en SKILL.md que no están en la carpeta.',
        link: 'Ver versiones y archivos',
        pic: {
          src: 'folder',
          alt: 'Una hoja verde lima, doblada como una carpeta abierta, contiene hojas superpuestas color crema, verde claro, azul pálido y mostaza.',
        },
      },
      statement: {
        text: 'Incluir no significa recomendar.',
        muted:
          'Lee el texto completo y los archivos antes de decidir. Al importar una habilidad, REZICS la guarda, pero no ejecuta sus instrucciones.',
      },
      pages: {
        eyebrow: 'Este sitio',
        headline: ['Desde encontrar una habilidad', 'hasta publicar la tuya.'],
        tiles: [
          { slug: 'directory', line: 'Encuentra habilidades con una descripción breve' },
          { slug: 'versions', line: 'Texto completo, archivos y versiones' },
          { slug: 'evidence', line: 'Quién la usó y en qué condiciones' },
          { slug: 'use', line: 'Elige una versión y dásela a tu agente de IA' },
          { slug: 'publish', line: 'Una carpeta, una identidad' },
        ],
      },
      neighbours: {
        eyebrow: 'Dónde se conecta',
        headline: ['Una habilidad contiene texto y archivos;', 'lo que necesita tiene su propia página.'],
        lead: 'Los paquetes que declara una habilidad tienen su propia versión en Software. Las habilidades y los servidores MCP de un mismo autor están vinculados a la misma identidad. El conjunto de herramientas Wiki local de REZICS también incluye una habilidad que enseña a un agente de IA a proponer datos con fuentes a partir de libros y novelas visuales.',
        tiles: [
          { to: 'software', line: 'Paquetes que necesita una habilidad' },
          { to: 'mcp', line: 'Herramientas de tu agente' },
          { to: 'books', line: 'Propón datos con fuentes capítulo por capítulo' },
          { to: 'visual-novels', line: 'Encuentra fuentes en los guiones de juegos' },
        ],
      },
      closing: {
        title: 'Empieza con una línea.',
        body: 'Busca una habilidad en REZICS, lee el texto completo, los archivos y los registros, y luego dásela a tu agente de IA.',
      },
    },
    directory: {
      head: {
        headline: ['Una fila por habilidad,', 'una frase.'],
        lede: 'Cada fila del catálogo muestra solo dos cosas: el nombre de la habilidad y una frase de quien la creó. Los agentes de IA usan esa frase para decidir si una habilidad sirve. Tú también puedes empezar por ahí.',
      },
      specimens: {
        eyebrow: 'Catálogo de ejemplo',
        headline: ['Lee una frase', 'y decide si te sirve.'],
        lead: 'Los nombres y las descripciones son ejemplos. Las dos habilidades resuelven tareas distintas, y una frase explica la diferencia.',
        rows: [
          { title: 'chapter-cast', body: 'Organiza los personajes y alias de un capítulo, con la ubicación de cada uno. Úsala para comprobar una lista de personajes.' },
          { title: 'quote-check', body: 'Comprueba cada cita con el original e indica dónde aparece la fuente o qué frases no la tienen.' },
        ],
      },
      filters: {
        eyebrow: 'Filtros',
        headline: ['Filtra según tus criterios,', 'y combínalos.'],
        lead: 'Puedes combinar los filtros disponibles.',
        rows: [
          { title: 'Búsqueda', body: 'Busca con palabras que describan la tarea, como «organizar los personajes de un capítulo» o «comprobar citas».' },
          { title: 'Licencia', body: 'Muestra solo las habilidades con una licencia determinada.' },
          { title: 'Idioma', body: 'Filtra por el idioma de las instrucciones o de las tareas registradas.' },
          { title: 'Registros de compatibilidad', body: 'Muestra solo las habilidades con registros para un agente de IA y una versión concretos.' },
          { title: 'Fecha de actualización', body: 'Ordena o filtra por la fecha de la publicación más reciente.' },
        ],
      },
      statement: {
        text: 'Puedes recorrer la lista hasta el último resultado.',
        muted: 'La cantidad indica si es exacta o estimada, y los resultados posteriores no se ocultan.',
      },
      lists: {
        eyebrow: 'Listas',
        headline: ['Un conjunto preparado por otras personas.'],
        body: 'Una lista ordena los recursos de un flujo de trabajo y explica por qué se eligió cada uno. Puede combinar habilidades con servidores MCP, API o programas. Puedes exportarla o seguirla para enterarte cuando se añadan elementos.',
        pic: {
          src: 'bundle',
          alt: 'Cinco hojas de distintos tamaños se apilan en verde lima, crema, azul pálido y mostaza, sujetas por una tira verde lima.',
        },
      },
      views: {
        eyebrow: 'Vistas',
        headline: ['Guarda tus filtros', 'y síguelos.'],
        lead: 'Guarda un conjunto de filtros como una vista. Síguela para ver en tu feed las nuevas habilidades que cumplan esas condiciones.',
        rows: [
          { title: 'Búsqueda', body: 'Configura los filtros.' },
          { title: 'Vistas', body: 'Guárdala y ponle un nombre.' },
          { title: 'Síguela', body: 'Recibe avisos cuando haya nuevos resultados.' },
        ],
      },
      end: {
        next: 'Si la encuentras, ábrela.',
        closing: 'La habilidad que buscas podría estar en la siguiente fila.',
      },
    },
    versions: {
      head: {
        headline: ['Abre una habilidad', 'y consulta todo lo que contiene.'],
        lede: 'La página de la habilidad es el segundo nivel: el texto original de SKILL.md y todos los archivos que incluye. Antes de dársela a un agente de IA, puedes leer cada palabra que leerá el agente.',
      },
      frontmatter: {
        eyebrow: 'SKILL.md',
        headline: ['Así interpreta REZICS', 'las primeras líneas.'],
        lead: 'Ejemplo de una carpeta de habilidad.',
        rows: [
          {
            key: 'name',
            value: 'chapter-cast',
            body: 'El nombre solo puede contener letras minúsculas, números y guiones, y debe coincidir con el nombre de la carpeta. Sirve para identificar una habilidad, pero el nombre por sí solo no demuestra que dos sean la misma.',
          },
          {
            key: 'description',
            value: 'Enumera los personajes de un capítulo e indica los párrafos. Úsala para organizar una lista de personajes.',
            body: 'Esta es la frase que aparece en el catálogo y la primera que lee un agente de IA.',
          },
          {
            key: 'license',
            value: 'Apache-2.0',
            body: 'La licencia se registra en la versión junto con quién la declaró y cuándo. Es una declaración, no una revisión legal.',
          },
          {
            key: 'compatibility',
            value: 'Un agente que pueda leer archivos locales',
            body: 'Las condiciones de compatibilidad declaradas por quien creó la habilidad se marcan «requiere verificación independiente», no como hechos comprobados.',
          },
          {
            key: 'allowed-tools',
            value: 'read-file',
            body: 'Las herramientas permitidas también son una declaración y se marcan «requiere verificación independiente».',
          },
          { key: 'Otros campos', body: 'Los campos ajenos a la especificación no se descartan. Se conservan tal como están y se enumeran por separado.' },
        ],
      },
      files: {
        eyebrow: 'Archivos',
        headline: ['Un archivo por línea.'],
        lead: 'Cada archivo muestra su ruta, función y hash. Los bytes descargados coinciden con los registrados en la página.',
        rows: [
          { title: 'Instrucciones', path: 'SKILL.md', body: 'El texto completo aparece sin cambios.' },
          {
            title: 'Scripts',
            path: 'scripts/',
            mark: 'Ejecutable',
            body: 'Los archivos ejecutables llevan una marca. Al importarlos, REZICS los guarda, pero no los ejecuta.',
          },
          { title: 'Referencias', path: 'references/', body: 'Documentos que consulta el agente de IA cuando necesita más detalles.' },
          { title: 'Recursos', path: 'assets/', body: 'Las plantillas, imágenes y archivos de datos también muestran su ruta y hash.' },
          { title: 'Otros', body: 'También se enumeran las carpetas y archivos que no aparecen en la especificación.' },
          { title: 'Archivos que faltan', mark: 'Falta', body: 'Se indican los archivos mencionados en SKILL.md que no están en la carpeta.' },
        ],
      },
      history: {
        eyebrow: 'Versiones',
        headline: ['Todas las versiones se conservan.'],
        body: [
          'Cualquier cambio después de publicar crea una versión nueva. Los archivos y hashes de la versión anterior no cambian, y la versión que usas no se sustituye.',
          'Las versiones aparecen por orden de publicación, cada una con su fecha y registro de cambios. Puedes recorrerlas todas. Quienes siguen la habilidad reciben este registro.',
        ],
        pic: {
          src: 'fan',
          alt: 'Cinco hojas se abren en abanico desde una esquina. La primera es verde lima y las siguientes son cada vez más claras, hasta llegar a una hoja color crema.',
        },
      },
      historyExample: {
        eyebrow: 'Versiones de ejemplo',
        headline: ['Una habilidad,', 'dos versiones con fecha.'],
        lead: 'Ejemplo de chapter-cast. Las fechas y el contenido son ilustrativos. Cada versión conserva sus archivos y hashes; una versión nueva no sustituye a la anterior.',
        rows: [
          { title: '1.1.0', body: '19 de octubre de 2026. Añade reglas para relacionar los alias de personajes y el archivo de referencia correspondiente.' },
          { title: '1.0.0', body: '12 de octubre de 2026. Organiza la primera aparición de cada personaje. Los archivos originales no cambian, y las valoraciones y los comentarios siguen vinculados a esta versión.' },
        ],
      },
      packages: {
        eyebrow: 'Paquetes',
        headline: ['Se enumeran los paquetes declarados por quien creó la habilidad;', 'lo que no está claro se indica.'],
        rows: [
          {
            title: 'Por ecosistema',
            body: 'Cada paquete aparece bajo su ecosistema. Los paquetes con el mismo nombre en ecosistemas distintos no se confunden.',
          },
          { title: 'Obligatorios y opcionales', body: 'Cada paquete indica si es obligatorio u opcional.' },
          { title: 'Faltantes y no compatibles', body: 'Si falta una declaración o se usa un ecosistema no admitido, se indica como faltante o no compatible.' },
        ],
      },
      statement: {
        text: 'Cada habilidad tiene autoría.',
        muted:
          'Quienes crean y mantienen la habilidad aparecen según su función y enlazan con sus otras obras y reseñas.',
      },
      end: {
        next: 'Lee el contenido y comprueba quién la ha usado.',
        closing: 'Lee cada habilidad antes de dársela a un agente de IA.',
      },
    },
    evidence: {
      head: {
        headline: ['Una declaración es una declaración,', 'y un registro es un registro.'],
        lede: 'Quien crea una habilidad puede declarar en qué entorno sirve. Es solo una declaración. Un registro existe cuando alguien la usa con un agente de IA para una tarea y anota la fecha y el método. Skill Hub mantiene ambas cosas separadas.',
      },
      declaration: {
        eyebrow: 'Declaración',
        headline: ['Quien crea la habilidad escribe', 'una condición de compatibilidad.'],
        lead: 'REZICS conserva tal como están las condiciones de compatibilidad y las herramientas permitidas que aparecen en SKILL.md. Las marca «requiere verificación independiente», no como hechos comprobados.',
        code: '# Inicio de SKILL.md (ejemplo)\ncompatibility: Para agentes de IA compatibles con carpetas de habilidades',
        codeLabel: 'Condición de compatibilidad de ejemplo al inicio de SKILL.md',
        caption: 'REZICS conserva esta línea tal como está y la marca «requiere verificación independiente».',
      },
      record: {
        eyebrow: 'Registro de ejemplo',
        headline: ['Una misma versión,', 'ocho datos registrados.'],
        lead: 'Ejemplo del formato de registro de chapter-cast 1.1.0. La fecha, la versión del agente de IA, el método y los resultados son ilustrativos y muestran cómo leer un registro.',
        rows: [
          { title: 'Tarea', body: 'Enumera personajes, alias y ubicaciones en el original a partir de un fragmento de capítulo para comprobar una lista de personajes.' },
          { title: 'Agente de IA', body: 'Un agente local que puede leer la carpeta de la habilidad y no tiene herramientas adicionales activadas.' },
          { title: 'Versión del agente', body: 'Cliente de ejemplo 1.0.0. Registra la versión usada en la observación.' },
          { title: 'Versión de la habilidad', body: 'chapter-cast 1.1.0, una versión de ejemplo que añade la relación de alias.' },
          { title: 'Idioma', body: 'La entrada y la salida están en chino tradicional, y los alias conservan la escritura original.' },
          { title: 'Fecha', body: '19 de octubre de 2026, la misma fecha que la versión 1.1.0 de ejemplo.' },
          { title: 'Método', body: 'Usa un fragmento breve con tres personajes y dos grupos de alias, y compara cada resultado con su ubicación en el original.' },
          { title: 'Observación', body: 'El resultado de ejemplo enumera tres personajes, dos grupos de alias y sus ubicaciones. No implica que se aplique a otros textos o agentes.' },
        ],
      },
      rules: {
        eyebrow: 'Cómo leer los registros',
        headline: ['Cómo leer un registro'],
        rows: [
          { title: 'Sin registros no significa que no funcione', body: 'Una combinación sin registros aparece como «sin registros», no como incompatible.' },
          {
            title: 'Los registros anteriores conservan la fecha',
            body: 'Cada registro muestra la fecha y la versión correspondiente. Si se actualiza el agente de IA o la habilidad, los registros anteriores no se presentan como resultados de la versión nueva.',
          },
          { title: 'Se conservan los resultados distintos', body: 'Si dos registros llegan a conclusiones distintas, ambos se conservan con sus métodos para que puedas compararlos.' },
          {
            title: 'Los agentes también pueden registrar resultados',
            body: 'Un agente puede enviar registros si indica que es un agente, quién lo opera y qué método usó. Una persona los revisa antes de publicarlos.',
          },
          { title: 'Retirar el respaldo solo afecta a quien lo aporta', body: 'Si una fuente retira su respaldo, solo se elimina ese respaldo. El historial se conserva y los registros de otras fuentes no cambian.' },
        ],
      },
      opinions: {
        eyebrow: 'Valoraciones y debates',
        headline: ['Las valoraciones y los comentarios', 'corresponden a la versión indicada.'],
        rows: [
          {
            title: 'Valoraciones',
            body: 'Cada valoración corresponde a la versión que evalúa. Las nuevas versiones tienen sus propias valoraciones; la puntuación conjunta se calcula aparte y explica el método. Cada puntuación muestra cuántas personas valoraron y cómo se distribuyen. Si hay pocas, no se calcula una media.',
          },
          {
            title: 'Comentarios',
            body: 'Al informar de un problema o compartir cómo usas la habilidad, el comentario registra la versión correspondiente. Si se actualiza la habilidad, los comentarios anteriores siguen vinculados a esa versión.',
          },
        ],
      },
      statement: {
        text: 'Un registro no garantiza la seguridad.',
        muted:
          'Cada observación indica el entorno y la versión. Lee las instrucciones y los scripts antes de usar la habilidad.',
      },
      end: {
        next: 'Revisa el registro y pon la habilidad en práctica.',
        closing: 'Lee los registros antes de decidir.',
      },
    },
    use: {
      head: {
        headline: ['Léela', 'antes de dársela a tu agente de IA.'],
        lede: 'Una habilidad contiene instrucciones para que las siga un agente y a veces incluye scripts ejecutables. Léela primero en Skill Hub. Si decides usarla, descarga la versión exacta.',
      },
      steps: {
        eyebrow: 'Seis pasos',
        headline: ['Desde encontrarla hasta usarla,', 'seis pasos.'],
        rows: [
          { title: 'Encuéntrala', body: 'Búscala en el catálogo con una descripción o elígela de una lista preparada por otra persona.' },
          { title: 'Léela', body: 'Abre la página de la habilidad, lee todo el SKILL.md y comprueba qué archivos incluye y cuáles son ejecutables.' },
          { title: 'Consulta los registros', body: 'Comprueba si alguien ha registrado su uso con tu agente de IA y su versión, y cuándo lo hizo.' },
          {
            title: 'Elige y descarga una versión',
            body: 'Elige una versión y descarga su carpeta. Los archivos coinciden con los hashes de la página. También puedes copiar solo las instrucciones de SKILL.md. Colócala donde indique la documentación de tu agente.',
          },
          {
            title: 'Fija las versiones de los paquetes',
            body: 'Según los requisitos de los paquetes admitidos, fija las versiones y los archivos exactos. Si no se pueden resolver, se explica por qué. Instalar un paquete no significa que sus scripts puedan ejecutarse.',
          },
          { title: 'Síguela', body: 'Sigue la habilidad. Cuando salga una versión nueva, lee los cambios antes de decidir si la instalas.' },
        ],
      },
      agent: {
        eyebrow: 'API y MCP',
        headline: ['Tu agente de IA', 'también puede consultar Skill Hub.'],
        paragraphs: [
          'Cada acción de la web tiene una operación de API correspondiente. Un agente puede buscar habilidades con la API o el servidor MCP de REZICS, y consultar el texto completo y la lista de archivos que ves en la página.',
          'En la API y MCP de REZICS, el texto de las habilidades siempre se trata como datos. Ninguna instrucción que contenga concede permisos.',
        ],
        link: 'Consulta la API y MCP en el sitio para desarrolladores',
      },
      later: {
        eyebrow: 'Versiones futuras',
        headline: ['Cuando llega una versión nueva,', 'revisa los cambios antes de decidir.'],
        rows: [
          { title: 'Nivel de avisos', body: 'Al seguir una habilidad, elige recibir todos los avisos, solo las selecciones o ninguno.' },
          { title: 'Revisa los cambios', body: 'Cada versión nueva incluye un registro de cambios. Puedes comparar los archivos y hashes con la versión que tienes.' },
          { title: 'Conserva la versión actual', body: 'Si no quieres cambiar, sigue usando la versión actual. Su página no se convierte en la nueva.' },
          { title: 'Informa de un problema', body: 'Si encuentras un problema, cuéntalo en el debate de la habilidad e indica qué versión y agente de IA usaste.' },
          {
            title: 'Denuncia',
            body: 'Si una habilidad hace algo distinto de lo que indica, puedes denunciarla sin tener una cuenta. Distribuir malware infringe las normas de uso de REZICS.',
          },
        ],
      },
      end: {
        next: 'Ahora te toca escribir una.',
        closing: 'Elige una versión y dásela a tu agente de IA.',
      },
    },
    publish: {
      head: {
        headline: ['Una carpeta', 'se convierte en una identidad.'],
        lede: 'Skill Hub admite habilidades con el formato correcto: una carpeta que contiene un SKILL.md. Al importarla, recibe su propia identidad, una página y una primera versión.',
      },
      import: {
        eyebrow: 'Importar',
        headline: ['La importación conserva los archivos,', 'sin ejecutarlos.'],
        body: 'Este proceso convierte la carpeta en una habilidad con identidad sin cambiar ninguno de sus archivos.',
        pic: {
          src: 'slit',
          alt: 'Una hoja verde lima tiene una ranura en el centro. Una tira color crema pasa por ella y sale por el borde inferior. Debajo asoma una esquina de papel mostaza.',
        },
      },
      steps: {
        eyebrow: 'Seis acciones',
        headline: ['Al importar,', 'se conserva cada byte sin cambios.'],
        rows: [
          { title: 'Conserva los archivos sin cambios', body: 'Se conserva cada byte de cada archivo y las rutas permanecen dentro de la carpeta.' },
          { title: 'No ejecuta nada', body: 'Los scripts se guardan como archivos, pero no se ejecutan. Tampoco se siguen las instrucciones de SKILL.md.' },
          { title: 'Comprueba los enlaces', body: 'Los archivos locales mencionados en SKILL.md que no están en la carpeta se indican como faltantes.' },
          { title: 'Conserva los campos desconocidos', body: 'Los campos ajenos a la especificación se conservan y se indican como no interpretados, sin cambiar su significado.' },
          {
            title: 'No convierte cualquier carpeta en una habilidad',
            body: 'La importación se detiene si el nombre no coincide con el de la carpeta o falta una descripción. Una carpeta cualquiera no se convierte en una habilidad.',
          },
          { title: 'Publica una versión', body: 'Cada publicación fija el hash, la licencia y el origen de todos los archivos. Los cambios posteriores crean una versión nueva.' },
        ],
      },
      limits: {
        eyebrow: 'Límites',
        headline: ['Límites de importación'],
        rows: [
          { title: '128 archivos', body: 'Máximo de archivos por importación.' },
          { title: '1 MiB', body: 'Tamaño total máximo de los archivos.' },
          { title: '64 KiB', body: 'Tamaño máximo del archivo SKILL.md.' },
          { title: '64 caracteres', body: 'Longitud máxima del nombre. Solo letras minúsculas, números y guiones.' },
          { title: '1024 caracteres', body: 'Longitud máxima de la descripción.' },
        ],
        after: 'La importación se detiene y explica el motivo si la carpeta supera los límites o no tiene el formato correcto.',
      },
      statement: {
        text: 'La descripción es lo primero que se lee.',
        muted:
          'Explica con claridad qué hace la habilidad y cuándo usarla, para que la entiendan tanto las personas como los agentes de IA.',
        note: 'Dos formas de describir la misma habilidad. Ejemplo.',
        rows: [
          {
            title: 'Clara',
            body: 'Organiza en una tabla los personajes de un capítulo e indica los párrafos. Úsala para crear una lista de personajes o comprobar en qué capítulo aparece cada uno.',
          },
          { title: 'Demasiado breve', body: 'Procesa novelas.' },
        ],
      },
      credits: {
        eyebrow: 'Autoría y derechos',
        headline: ['Autoría, derechos y colaboración'],
        rows: [
          { title: 'Autores y responsables', body: 'Cada persona aparece según su función y con su propia identidad de REZICS, a la que otras personas pueden seguir.' },
          { title: 'Licencia', body: 'La licencia que declares se registra en cada versión, junto con quién la declaró y cuándo.' },
          { title: 'Conservas tus derechos', body: 'Subir una habilidad no transfiere tus derechos de propiedad intelectual.' },
          {
            title: 'Agentes de IA que colaboran en el mantenimiento',
            body: 'Un agente también puede proponer cambios si indica la versión afectada, los cambios, las pruebas y el método, y declara que es un agente. Una persona los revisa antes de aplicarlos y cada aplicación recibe un comprobante.',
          },
          { title: 'Revertir', body: 'Puedes revertir una aplicación incorrecta. La reversión queda registrada como una corrección y no cambia el historial original.' },
        ],
      },
      end: {
        next: 'Además de las habilidades, también hay API.',
        nextLine: 'Consulta las llamadas y las versiones',
        closing: 'Tus habilidades tienen su propia identidad en REZICS.',
      },
    },
  },
} satisfies MiniSite<SkillsStrings>;

export default skills;
