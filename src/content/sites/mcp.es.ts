// MCP Hub (`mcp`): every visible string of /mcp/ and its five inner pages. Design record and
// sources: src/sites/mcp/SITE.md and src/sites/mcp/facts.md. Illustrative data (the notes
// server, versions, dates, client categories, tasks, tools, views, lists) is labelled 示意 on
// the page.
import type { Item, MiniSite } from '../schema';

/** The site's paper still-life series (public/images/sites/mcp/). */
export type McpPicture = 'hero' | 'records' | 'identity' | 'versions' | 'zone';
/** A combination's state on the evidence page. */
export type McpState = 'ok' | 'fail' | 'disputed' | 'none';
/** A site page linked from the landing's tiles. */
export type McpPage = 'directory' | 'evidence' | 'versions' | 'community' | 'maintainers';

/** A section's eyebrow, heading and lead. */
type Head = { label: string; headline: string; body: string };
/** A statement: the first half in ink, the continuation muted. */
type Statement = { text: string; sub: string; note?: string };
type RecordField = { label: string; value: string; note: string };

export type McpStrings = {
  next: { page: string; site: string };
  /** Alt text of each picture. */
  pictures: Record<McpPicture, string>;
  /** A line for each page: its tile on the landing and its lead-in on the previous page. */
  pageLines: Record<McpPage, string>;
  landing: {
    hero: { label: string; headline: string; lede: string };
    record: Head & { fields: Item[]; link: string };
    statement: Statement;
    pages: { label: string; headline: string };
    neighbours: Head & {
      tiles: { kind: 'software' | 'apis' | 'skills'; line: string }[];
      developers: { name: string; line: string; href: string };
    };
    closing: { title: string; body: string };
  };
  directory: {
    hero: { headline: string; lede: string };
    records: Head & { items: Item[] };
    filters: Head & { rows: Item[]; caption: string; note: string };
    traversal: { label: string; headline: string; facts: Item[] };
    parts: Head & { notes: Record<string, string> };
    statement: Statement;
    next: string;
    closing: string;
  };
  evidence: {
    hero: { headline: string; lede: string };
    specimen: {
      label: string;
      headline: string;
      fields: Record<'server' | 'client' | 'task' | 'language' | 'result' | 'date' | 'submitter' | 'review', RecordField>;
      caption: string;
    };
    compare: { label: string; headline: string; says: { heading: string; items: string[] }; not: { heading: string; items: string[] } };
    states: Head & { names: Record<McpState, string>; items: Record<McpState, string> };
    statement: Statement;
    layers: { label: string; headline: string; chapters: Item[] };
    client: { label: string; headline: string; body: string[] };
    next: string;
    closing: string;
  };
  versions: {
    hero: { headline: string; lede: string };
    start: Head & { note: string };
    diff: Head & {
      columns: [string, string, string];
      rows: { tool: string; before: string; after: string }[];
      consequence: string;
      caption: string;
    };
    ledger: Head & { rows: Item[] };
    follow: Head & { levels: Item[]; channels: string };
    statement: Statement;
    next: string;
    closing: string;
  };
  community: {
    hero: { headline: string; lede: string };
    score: { label: string; headline: string; items: Item[]; note: string };
    discussion: Head & { agents: string };
    list: Head & {
      title: string;
      items: { kind: 'mcp' | 'skills' | 'apis' | 'software'; name: string; note: string }[];
      caption: string;
    };
    zone: Head & { routes: string };
    next: string;
    closing: string;
  };
  maintainers: {
    hero: { headline: string; lede: string };
    steps: { label: string; headline: string; items: Item[] };
    rules: { label: string; headline: string; can: { heading: string; items: string[] }; cannot: { heading: string; items: string[] } };
    licence: Head & { rows: Item[] };
    agent: Statement & { link: string; href: string };
    next: { headline: string; lines: Record<'skills' | 'apis' | 'software', string> };
    closing: string;
  };
};

const strings: McpStrings = {
  next: { page: 'Página siguiente', site: 'Siguiente sitio' },

  pictures: {
    hero: 'Varias hojas ocres se conectan con una cuerda de papel que pasa por agujeros redondos. De ellas cuelgan también una hoja azul claro y otra verde pálido.',
    records: 'Una hoja ocre tiene varios agujeros en el borde, con pequeñas etiquetas en blanco atadas con una cuerda de papel. Un agujero queda vacío.',
    identity: 'Una hoja dividida en cuatro partes, ligeramente separadas: dos ocres, una verde azulado oscuro y otra azul claro.',
    versions: 'Cinco hojas del mismo tamaño forman una fila, de oscuro a claro. La última es blanca.',
    zone: 'Una hoja ocre doblada forma un pequeño biombo tridimensional, junto a varias hojas pequeñas.',
  },

  pageLines: {
    directory: 'Un servidor, una identidad',
    evidence: 'Qué dice un registro y qué no',
    versions: 'Un registro para cada versión',
    community: 'Valoraciones, debates, listas y directorios de comunidades',
    maintainers: 'Registrar, reclamar, declarar y responder',
  },

  landing: {
    hero: {
      label: 'Directorio de servidores MCP',
      headline: 'Consulta registros fechados para saber qué servidores funcionan.',
      lede: 'MCP Hub asigna una identidad a cada servidor MCP y registra cada versión por separado: qué se hizo, en qué fecha, con qué versión del cliente y en qué idioma.',
    },
    record: {
      label: 'Un registro',
      headline: 'Antes de decir que funciona, indica con qué configuración.',
      body: 'Sin la versión del servidor, el cliente, la tarea y el idioma, no se puede precisar el resultado. Cada registro indica esos datos, el resultado y la fecha. Si cambia uno, hay que probar la nueva combinación.',
      fields: [
        { title: 'Versión del servidor', body: 'Se indica la versión exacta. Cada versión nueva tiene su propio registro.' },
        { title: 'Cliente', body: 'Se indica el tipo de cliente y su versión.' },
        { title: 'Tarea', body: 'La tarea que se pidió al servidor.' },
        { title: 'Idioma', body: 'La misma tarea puede dar otro resultado si se pide en otro idioma.' },
        { title: 'Resultado y fecha', body: 'Si se completó y en qué fecha se probó.' },
      ],
      link: 'Cómo se registra una prueba',
    },
    statement: {
      text: 'Un registro solo describe el resultado de esta combinación en esa fecha.',
      sub: 'No demuestra que el servidor sea seguro, no concede ninguna licencia ni supone el respaldo de REZICS.',
    },
    pages: {
      label: 'Este sitio',
      headline: 'Una página para cada paso, desde encontrar un servidor hasta mantenerlo.',
    },
    neighbours: {
      label: 'Directorios relacionados',
      headline: 'Un servidor no existe de forma aislada.',
      body: 'Las personas que lo crean, las API que integra y los proyectos a los que pertenece están en el mismo índice, y puedes llegar a ellos desde cualquiera de sus páginas.',
      tiles: [
        { kind: 'software', line: 'Los proyectos, paquetes y clientes son entradas de software' },
        { kind: 'apis', line: 'La API que integra, enlazada en ambos sentidos' },
        { kind: 'skills', line: 'Habilidades del mismo responsable' },
      ],
      developers: { name: 'Desarrolladores', line: 'Servidor MCP de REZICS', href: '/developers/mcp-server/' },
    },
    closing: {
      title: 'Consulta los registros antes de elegir.',
      body: 'Usa la misma cuenta de REZICS para seguir servidores, habilidades y API, además de libros y juegos.',
    },
  },

  directory: {
    hero: {
      headline: 'Un servidor, una identidad.',
      lede: 'Un mismo servidor MCP puede aparecer en varias fuentes. Tras una revisión, REZICS los reúne en una sola entrada con el nombre, las personas responsables, las versiones, los registros, las valoraciones y los debates.',
    },
    records: {
      label: 'Cuatro elementos',
      headline: 'Un servidor reúne cuatro elementos.',
      body: 'El proyecto, el paquete, el punto de conexión y la lista de herramientas cambian en momentos distintos. REZICS los registra por separado.',
      items: [
        { title: 'Proyecto', body: 'Nombre, descripción y responsables. Un cambio de versión o de punto de conexión no cambia el proyecto. Un proyecto derivado de otro es independiente y se enlaza con él.' },
        { title: 'Paquete', body: 'Indica el ecosistema, el nombre original y la versión del paquete. El orden de las versiones sigue las reglas de su ecosistema.' },
        { title: 'Punto de conexión', body: 'La dirección del servidor en la red. Que se pueda conectar no demuestra quién lo controla, si es compatible con tu cliente ni si tienes permiso para llamarlo.' },
        { title: 'Lista de herramientas', body: 'Las herramientas que el servidor ofrecía en un momento concreto y los parámetros que requería cada una. Cada cambio genera una observación nueva.' },
      ],
    },
    filters: {
      label: 'Filtros',
      headline: 'Los filtros se basan en un mismo registro.',
      body: 'Si buscas un servidor que haya exportado un archivo correctamente desde una herramienta de línea de comandos en chino tradicional, las tres condiciones deben aparecer en el mismo registro. No se combinan registros distintos.',
      rows: [
        { title: 'Servidores que organizaron tareas correctamente en japonés desde un editor de código', body: 'El cliente, el idioma, la tarea y el resultado constan en un mismo registro.' },
        { title: 'Servidores con un registro satisfactorio de su versión más reciente en los últimos 90 días', body: 'La versión, la fecha y el resultado constan en un mismo registro.' },
        { title: 'Todos los servidores de una misma persona responsable', body: 'Busca por responsable.' },
        { title: 'Servidores que integran una API', body: 'Busca por relación y consulta también la página de la API.' },
      ],
      caption: 'Guarda los filtros como una vista con nombre para volver a abrirla o seguirla.',
      note: 'Vista ilustrativa.',
    },
    traversal: {
      label: 'Lista',
      headline: 'Las listas llegan al final y señalan hasta dónde muestran resultados.',
      facts: [
        { title: 'Hasta el último resultado', body: 'Los resultados no se limitan a las primeras páginas. Puedes avanzar hasta el último.' },
        { title: 'Recuento preciso', body: 'Se indica si el recuento es exacto o aproximado y cuándo se actualizaron los datos.' },
        { title: 'Indica las limitaciones', body: 'Si no se admite una combinación de filtros, se indica claramente en lugar de mostrar una lista vacía que parezca no tener resultados.' },
      ],
    },
    parts: {
      label: 'Partes',
      headline: 'Ocho partes comunes a todas las categorías.',
      body: 'MCP Hub no es una aplicación aparte. Sus fichas usan las mismas partes que la biblioteca, los juegos y el software, organizadas de otra manera.',
      notes: {
        identity: 'El mismo servidor de distintas fuentes apunta a una única identidad.',
        editions: 'Cada versión tiene su propio registro, con sus paquetes, su lista de herramientas y su historial.',
        specs: 'Registro de compatibilidad: fecha, cliente y versión, tarea, idioma y resultado.',
        credits: 'Las personas y organizaciones responsables del mantenimiento enlazan a sus otros proyectos.',
        ratings: 'Cada valoración corresponde a una versión y especifica qué se pregunta.',
        discussion: 'Los hilos de debate pueden asociarse al servidor o a una versión.',
        lists: 'Una misma lista puede incluir servidores, habilidades y API, con una nota para cada elemento.',
        follow: 'Puedes seguir servidores, responsables o una vista y recibir avisos cuando haya una versión nueva.',
      },
    },
    statement: {
      text: 'Tener el mismo nombre no significa ser el mismo servidor.',
      sub: 'Las fusiones requieren pruebas y revisión.',
      note: 'Tras una fusión, se conservan las identidades y el historial originales para que puedas consultarlos.',
    },
    next: 'Cada registro indica qué cuenta y qué deja fuera.',
    closing: 'Antes de buscar un servidor, comprueba cuál es.',
  },

  evidence: {
    hero: {
      headline: 'Cada registro indica la fecha y la configuración.',
      lede: 'Una persona o un agente de IA pide a una versión del servidor que haga una tarea con una versión concreta del cliente y en un idioma determinado. El resultado y la fecha forman un registro. Las pruebas de MCP Hub reúnen todos esos registros.',
    },
    specimen: {
      label: 'Registro ilustrativo',
      headline: 'Un registro, campo por campo.',
      fields: {
        server: { label: 'Servidor', value: 'Servidor de notas 1.4.0', note: 'Se indica la versión exacta.' },
        client: { label: 'Cliente', value: 'Editor de código 3.2', note: 'También se indica la versión del cliente.' },
        task: { label: 'Tarea', value: 'Convertir las notas de una reunión en una lista de tareas', note: 'La tarea se describe en una frase.' },
        language: { label: 'Idioma', value: 'Chino tradicional', note: 'Idioma en que se indicó la tarea.' },
        result: { label: 'Resultado', value: 'Correcto', note: 'Se registra si se completó o no.' },
        date: { label: 'Fecha', value: '2026/10/12', note: 'Este registro solo corresponde a ese día.' },
        submitter: { label: 'Persona que lo envía', value: 'Una persona usuaria', note: 'Puede enviarlo una persona o un agente de IA. El agente indica quién lo controla.' },
        review: { label: 'Revisión', value: 'Revisado', note: 'El registro solo se publica después de que una persona lo revise.' },
      },
      caption: 'Registro ilustrativo. Los campos y datos muestran cómo se documenta la compatibilidad. Solo se publican los registros revisados por una persona.',
    },
    compare: {
      label: 'Alcance',
      headline: 'Qué indica y qué no indica.',
      says: {
        heading: 'Indica',
        items: [
          'Si esta combinación completó la tarea en esa fecha.',
          'Qué versiones del servidor y del cliente se usaron.',
          'En qué idioma se realizó la tarea.',
          'Quién lo envió y si una persona lo revisó.',
        ],
      },
      not: {
        heading: 'No indica',
        items: [
          'Si el servidor es seguro. Este registro no es una certificación de seguridad.',
          'Cómo puedes usar su código. Eso depende de la declaración de licencia de quien lo mantiene y del texto de la licencia.',
          'Qué ocurre con otras versiones, otros clientes u otros idiomas.',
          'Si REZICS recomienda o avala este servidor.',
        ],
      },
    },
    states: {
      label: 'Resultados y estados',
      headline: 'Los resultados, las disputas y la falta de registros se indican por separado.',
      body: 'Cada prueba tiene un resultado. Si alguien lo cuestiona, se vuelve a revisar. Los estados siempre se indican con texto, no solo con colores.',
      names: { ok: 'Correcto', fail: 'No se completó', disputed: 'En disputa', none: 'Sin registro' },
      items: {
        ok: 'Esta combinación completó la tarea en esa fecha.',
        fail: 'La prueba no se completó, pero el registro se conserva.',
        disputed: 'Se ha cuestionado un registro publicado y está en revisión.',
        none: 'Nadie ha probado esta combinación o aún no ha registrado la prueba.',
      },
    },
    statement: {
      text: 'No tener un registro no significa que haya fallado.',
      sub: 'Las combinaciones que nadie ha probado quedan vacías. No se cuentan como fallidas.',
    },
    layers: {
      label: 'Declaraciones y registros',
      headline: 'Las declaraciones de quien lo mantiene, las listas del servidor y las pruebas de usuarios se muestran por separado.',
      chapters: [
        { title: 'Declaración', body: 'Quien mantiene el servidor declara qué clientes e idiomas son compatibles. Se muestra como una declaración, no como un registro.' },
        { title: 'Observación', body: 'Se guarda la lista de herramientas y parámetros que ofrecía el servidor en un momento dado. Que una herramienta aparezca en la lista no demuestra que complete una tarea.' },
        { title: 'Registro', body: 'Alguien prueba una tarea con una configuración concreta y registra el resultado y la fecha. Se publica después de que una persona lo revise. Entonces pasa a ser un registro.' },
        { title: 'Revisión y disputas', body: 'Un registro revisado aún puede cuestionarse. Puede constar como revisado y en disputa a la vez, y la decisión anterior permanece en el historial.' },
      ],
    },
    client: {
      label: 'Buscar desde tu cliente',
      headline: 'Empieza por tu cliente.',
      body: [
        'Elige tu cliente y su versión, y después el idioma de la tarea. El directorio muestra solo servidores con registros para esa combinación, junto con el resultado y la fecha.',
        'Guárdala como una vista y síguela para ver cuando aparezcan nuevos registros que cumplan esas condiciones.',
      ],
    },
    next: 'Cada versión tiene su registro. Ahí se ven los cambios en la lista de herramientas.',
    closing: 'Cuanto más claro sea el registro, mejor podrás decidir.',
  },

  versions: {
    hero: {
      headline: 'Cada versión tiene su propio registro.',
      lede: 'Las versiones se ordenan según las reglas de su ecosistema. Cada una conserva su propio paquete, lista de herramientas, historial de cambios, registros de compatibilidad y valoraciones.',
    },
    start: {
      label: 'Nueva versión',
      headline: 'Cada versión nueva necesita sus propios registros.',
      body: 'Los registros de compatibilidad de la versión 2.0.0 deben proceder de pruebas reales de esa versión. El éxito de la 1.4.1 no se transfiere. La versión 2.0.0 necesita sus propias pruebas. Los registros anteriores indican la fecha y la versión, para que puedas valorar si siguen siendo pertinentes.',
      note: 'Número de versión ilustrativo.',
    },
    diff: {
      label: 'Lista de herramientas',
      headline: 'Compara las listas de herramientas para ver qué cambió.',
      body: 'Cada observación registra las herramientas y el formato de sus parámetros en ese momento. Compara dos observaciones para ver las herramientas añadidas, eliminadas o modificadas.',
      columns: ['Herramienta', 'Observación de 1.4.0', 'Observación de 2.0.0'],
      rows: [
        { tool: 'Buscar notas', before: 'Sí', after: 'Parámetros modificados' },
        { tool: 'Crear una nota', before: 'Sí', after: 'Sin cambios' },
        { tool: 'Eliminar una nota', before: 'Sí', after: 'Eliminada' },
        { tool: 'Mostrar etiquetas', before: 'Sí', after: 'Sin cambios' },
        { tool: 'Exportar notas', before: 'No', after: 'Añadida' },
      ],
      consequence: '«Buscar notas» sigue disponible, pero cambió el formato de sus parámetros. Conviene volver a probar las configuraciones que la usan.',
      caption: 'Ejemplo ilustrativo de dos listas de herramientas comparadas. No son observaciones reales.',
    },
    ledger: {
      label: 'Paquete',
      headline: 'El mismo nombre y número de versión no garantizan que sea el mismo archivo.',
      body: 'Cada paquete conserva su nombre original, su versión y su ecosistema. Que coincidan el nombre o la versión no demuestra que los archivos ni sus derechos sean los mismos. Por eso se verifica cada archivo con su hash.',
      rows: [
        { title: 'Ecosistema', body: 'El ecosistema de paquetes de origen.' },
        { title: 'Nombre original', body: 'Se conserva tal como aparece, sin cambiar el formato.' },
        { title: 'Número de versión', body: 'El orden sigue las reglas de ese ecosistema.' },
        { title: 'Hash del archivo', body: 'Verifica el archivo real de esta versión.' },
        { title: 'Declaración de licencia', body: 'Quién declaró qué licencia y cuándo.' },
        { title: 'Fuente', body: 'De dónde procede el dato y cuándo se obtuvo.' },
      ],
    },
    follow: {
      label: 'Seguimiento',
      headline: 'Sigue un servidor y decide qué avisos recibir.',
      body: 'Cada seguimiento tiene su propio nivel de avisos, que puedes cambiar cuando quieras. Los cambios de los servidores que sigues también aparecen en tu actividad.',
      levels: [
        { title: 'Todo', body: 'Nuevas versiones, anuncios y publicaciones.' },
        { title: 'Importantes', body: 'Nuevas versiones, anuncios y decisiones.' },
        { title: 'Desactivado', body: 'Solo recibes avisos cuando alguien te responde o te menciona.' },
        { title: 'Seguir un elemento', body: 'Sigue solo una versión o un hilo de debate.' },
      ],
      channels: 'Los avisos llegan a tu bandeja de entrada. También puedes activar las notificaciones push o los resúmenes por correo, que puedes cancelar con un clic.',
    },
    statement: {
      text: 'Las valoraciones también corresponden a una versión.',
      sub: 'Las valoraciones de la versión 1.4 no se cuentan para la 2.0.',
      note: 'Las cifras que combinan versiones son indicadores aparte. Se indica cómo se calculan y qué versiones incluyen.',
    },
    next: 'Las valoraciones, los debates y las listas indican a qué versión corresponden.',
    closing: 'Al cambiar de versión, consulta los registros de nuevo.',
  },

  community: {
    hero: {
      headline: 'Indica qué versión valoras antes de puntuarla.',
      lede: 'Cada valoración corresponde a una pregunta, una escala y una versión. Junto a la puntuación se indican el número de respuestas, su distribución y el grupo que ha valorado, para que sepas de quién es la opinión.',
    },
    score: {
      label: 'Valoración',
      headline: 'Cada valoración incluye cinco datos.',
      items: [
        { title: 'Pregunta', body: 'Por ejemplo, «¿Está clara la documentación?» o «¿Es estable tras un uso prolongado?». Las respuestas a preguntas distintas no se mezclan.' },
        { title: 'Escala', body: 'La escala y el significado de cada puntuación aparecen junto al resultado.' },
        { title: 'Versión', body: 'La valoración queda asociada a la versión que se evaluó.' },
        { title: 'Número y distribución', body: 'Si hay pocas valoraciones, solo se muestran su número y distribución, sin calcular la media.' },
        { title: 'Grupo', body: 'Las valoraciones de todo el sitio y las de cada comunidad se muestran por separado.' },
      ],
      note: 'Pregunta ilustrativa.',
    },
    discussion: {
      label: 'Debate',
      headline: 'Los debates pueden corresponder al servidor o a una versión concreta.',
      body: 'Si surge un problema con una versión, abre el debate en esa versión. Las impresiones generales se publican en el servidor. Quien lo mantiene responde con su propia identidad, para que sepas quién habla.',
      agents: 'Los agentes de IA indican que son agentes y quién los controla cuando participan en un debate.',
    },
    list: {
      label: 'Lista',
      headline: 'Una lista reúne servidores, habilidades y API.',
      body: 'Una lista puede reunir servidores, las habilidades que los usan y sus API. Añade notas, ordénalos y exporta la lista.',
      title: 'Herramientas para organizar notas de reuniones',
      items: [
        { kind: 'mcp', name: 'Servidor de notas', note: 'Permite exportar notas desde la versión 2.0.0.' },
        { kind: 'skills', name: 'Habilidad para organizar notas de reuniones', note: 'Necesita el servidor anterior.' },
        { kind: 'apis', name: 'API de calendario', note: 'Añade tareas al calendario.' },
        { kind: 'software', name: 'Herramienta de línea de comandos', note: 'Esta combinación se probó aquí.' },
      ],
      caption: 'Lista ilustrativa.',
    },
    zone: {
      label: 'Sitio',
      headline: 'Cada comunidad puede tener su propio directorio de servidores.',
      body: 'Cada comunidad puede crear un sitio completo con Zone, con inicio, navegación, un directorio filtrado y páginas de ayuda. Las entradas mantienen las mismas identidades, y las correcciones se actualizan en todos los lugares donde aparecen.',
      routes: 'Mapa ilustrativo del sitio: inicio, directorio, guía de inicio, registros y debates.',
    },
    next: 'Registra el servidor, reclama su identidad y añade una declaración.',
    closing: 'Cada valoración y debate indica primero a qué se refiere.',
  },

  maintainers: {
    hero: {
      headline: 'Explica el servidor que mantienes.',
      lede: 'Registra el servidor, reclama una identidad importada e indica la licencia y el alcance de compatibilidad. Tus datos aparecen como declaraciones, junto a los registros de usuarios.',
    },
    steps: {
      label: 'Pasos',
      headline: 'Cuatro pasos, del registro a la respuesta.',
      items: [
        { title: 'Registrar', body: 'Crea una entrada con el nombre, la descripción, el proyecto y el paquete. Antes de enviarla, el sistema comprueba si ya existe.' },
        { title: 'Reclamar', body: 'Si la entrada procede de datos públicos, puedes reclamar la identidad personal u organizativa que te corresponde.' },
        { title: 'Declaración', body: 'Indica la licencia y los clientes e idiomas compatibles. Cada declaración registra quién la hizo, cuándo y qué versión de los términos se aplicó.' },
        { title: 'Responder', body: 'Responde en los debates con tu identidad de responsable. Si se cuestiona un registro, aporta el tuyo.' },
      ],
    },
    rules: {
      label: 'Límites',
      headline: 'Lo que puedes cambiar y lo que no.',
      can: {
        heading: 'Puedes',
        items: ['Editar la descripción, las versiones y las declaraciones de la entrada.', 'Responder a los debates y aportar pruebas contra un registro.', 'Pedir a tu agente de IA que envíe registros para cada versión nueva.'],
      },
      cannot: {
        heading: 'No puedes',
        items: ['Eliminar por tu cuenta un registro ajeno porque no estés de acuerdo. Aporta pruebas para que se revise.', 'Conseguir un resultado distinto mediante un patrocinio o una suscripción.', 'Inflar tus propias valoraciones ni crear varias cuentas para aparentar apoyo.'],
      },
    },
    licence: {
      label: 'Declaración de licencia',
      headline: 'La licencia es una declaración tuya, no un permiso de REZICS.',
      body: 'La declaración indica los términos y su versión, quién la hizo, cuándo, su alcance y el fundamento. No significa que REZICS conceda permiso de uso ni constituye una confirmación legal. Que un servidor aparezca en el directorio no autoriza a distribuir su código.',
      rows: [
        { title: 'Términos y versión', body: 'Qué licencia y versión se declaran.' },
        { title: 'Autor de la declaración', body: 'La persona u organización que hace la declaración.' },
        { title: 'Fecha', body: 'Cuándo se hizo. Si no se sabe, se indica.' },
        { title: 'Alcance', body: 'Qué versiones y archivos cubre.' },
        { title: 'Fundamento', body: 'En qué se basa la declaración.' },
      ],
    },
    agent: {
      text: 'Tu agente de IA puede ejecutar una tarea cada vez que publiques una versión,',
      sub: 'y enviar el resultado.',
      note: 'Estos registros indican que proceden de tu agente y se someten al mismo proceso de revisión que los demás.',
      link: 'Cómo enviar un registro',
      href: '/developers/mcp-server/',
    },
    next: {
      headline: 'Las habilidades para agentes de IA también tienen versiones, registros y valoraciones.',
      lines: {
        skills: 'Archivos y dependencias de cada versión de la habilidad',
        apis: 'API integradas en el servidor',
        software: 'Proyectos, paquetes y clientes',
      },
    },
    closing: 'Tus declaraciones aparecen junto a los registros de la comunidad.',
  },
};

export default {
  id: 'mcp',
  base: '/mcp/',
  name: 'MCP Hub',
  theme: { kind: 'mcp' },
  next: 'skills',
  pages: [
    {
      slug: '',
      label: 'Inicio',
      meta: {
        title: 'MCP Hub: directorio de servidores MCP',
        description:
          'Encuentra servidores MCP en MCP Hub de REZICS. Cada servidor tiene una identidad y cada versión se registra por separado. Los registros de compatibilidad indican la fecha, el cliente y su versión, la tarea y el idioma. También incluyen valoraciones, debates y listas.',
      },
    },
    {
      slug: 'directory',
      label: 'Directorio',
      meta: {
        title: 'Directorio de MCP Hub: una identidad por servidor',
        description:
          'En el directorio de MCP Hub, cada servidor MCP tiene una sola identidad. El proyecto, las versiones del paquete, el punto de conexión y la lista de herramientas se registran por separado. Los filtros se aplican a un mismo registro y puedes recorrer los resultados hasta el final.',
      },
    },
    {
      slug: 'evidence',
      label: 'Pruebas',
      meta: {
        title: 'Pruebas de MCP Hub: fecha y condiciones',
        description:
          'Los registros de compatibilidad de MCP Hub indican la fecha, la versión del servidor y del cliente, la tarea, el idioma y el resultado. Describen lo que consiguió una combinación concreta en un día. No certifican seguridad, no conceden licencias ni suponen el respaldo de REZICS.',
      },
    },
    {
      slug: 'versions',
      label: 'Versión',
      meta: {
        title: 'Versiones de MCP Hub: un registro por versión',
        description:
          'Cada versión de un servidor MCP tiene su propio registro: ecosistema, nombre original, número de versión y hash del paquete, lista de herramientas observada, pruebas y valoraciones. Sigue un servidor para recibir avisos cuando publique una versión nueva.',
      },
    },
    {
      slug: 'community',
      label: 'Comunidad',
      meta: {
        title: 'Comunidad de MCP Hub: valoraciones, debates y listas',
        description:
          'Valora una versión de un servidor MCP e indica la pregunta. Los debates se vinculan al servidor o a una versión. Reúne servidores, habilidades y API en una lista. Cada comunidad también puede crear su propio directorio con Zone.',
      },
    },
    {
      slug: 'maintainers',
      label: 'Responsables',
      meta: {
        title: 'Responsables de MCP Hub: registro y reclamación',
        description:
          'Quienes mantienen un servidor pueden registrarlo en MCP Hub, reclamar una identidad importada, declarar la licencia y la compatibilidad, y responder a los debates con su propia identidad. Las declaraciones y los registros de usuarios se muestran por separado. Los pagos no cambian las decisiones.',
      },
    },
  ],
  strings,
} satisfies MiniSite<McpStrings>;
