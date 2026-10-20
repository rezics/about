// API Hub (`apis`): every visible string of /apis/ and its six inner pages. Design record and
// sources: src/sites/apis/SITE.md and src/sites/apis/facts.md.
import type { MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'apis')!;

/** A row of a facts list: title on the left, text on the right. */
export interface ApisRow {
  title: string;
  body: string;
}
/** An invented example shown as a flat tile: name, a note at the top, one line. */
export interface ApisTile {
  name: string;
  rel?: string;
  line: string;
}
/** A page's first screen: one sentence and one short paragraph. */
export interface ApisHero {
  headline: string;
  lede: string;
}
/** A section head: the eyebrow label, the h2 and an optional lead paragraph. */
export interface ApisSection {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** A large statement: the first half in ink, the second in muted ink, an optional note. */
export interface ApisStatement {
  lead: string;
  rest: string;
  note?: string;
}

export interface ApisStrings {
  /** Prefix of every caption under an invented example. */
  example: string;
  /** The row of further pages at the foot of every inner page. */
  next: { label: string; aria: string };
  /** The sentence under every page's closing statement. */
  closingBody: string;
  /** Text alternatives of the five photographs. */
  pictures: { hero: string; request: string; versions: string; specs: string; connections: string };
  home: {
    hero: ApisHero;
    pages: ApisSection & { rows: Record<string, string> };
    directory: ApisSection & { link: string };
    statement: ApisStatement;
    parts: ApisSection & { notes: Partial<Record<PartId, string>> };
    connections: ApisSection & { link: string };
    closing: string;
  };
  directory: {
    hero: ApisHero;
    facets: ApisSection & { rows: ApisRow[] };
    complete: ApisStatement;
    identity: ApisSection & { rows: ApisRow[] };
    views: ApisSection & { tiles: ApisTile[]; caption: string };
    closing: string;
  };
  versions: {
    hero: ApisHero;
    closed: ApisStatement;
    sequence: ApisSection & { tiles: ApisTile[]; caption: string };
    events: ApisSection & { rows: ApisRow[] };
    follow: ApisSection & { rows: ApisRow[]; footnote: string };
    closing: string;
  };
  specs: {
    hero: ApisHero;
    facts: ApisSection & { rows: ApisRow[] };
    measure: ApisStatement;
    fields: ApisSection & { rows: ApisRow[]; footnote: string };
    absent: ApisSection;
    closing: string;
  };
  connections: {
    hero: ApisHero;
    relations: ApisSection & { rows: ApisRow[] };
    both: ApisStatement;
    provider: ApisSection & { more: string };
    neighbours: ApisSection & {
      lines: { mcp: string; skills: string; software: string };
      developers: { name: string; line: string };
    };
    closing: string;
  };
  community: {
    hero: ApisHero;
    rating: ApisSection & { rows: ApisRow[] };
    discussion: ApisStatement;
    lists: ApisSection & { tiles: (ApisTile & { kind: 'apis' | 'software' | 'mcp' | 'skills' })[]; caption: string };
    zone: ApisSection & { link: string };
    closing: string;
  };
  publishing: {
    hero: ApisHero;
    path: ApisSection & { rows: ApisRow[] };
    proposal: ApisSection & { rows: ApisRow[] };
    paid: ApisStatement;
    provider: ApisSection & { more: string };
    closing: string;
  };
}

export default {
  id: 'apis',
  base: '/apis/',
  name: kind.name,
  theme: { kind: 'apis' },
  pages: [
    {
      slug: '',
      label: 'Inicio',
      meta: {
        title: 'API Hub: una entrada por cada API pública',
        description:
          'REZICS crea una entrada para cada API pública. Los proveedores, las versiones, la documentación y los métodos de autenticación indican su fuente y fecha. Filtra por los campos disponibles, sigue las actualizaciones y consulta las valoraciones y los debates vinculados a cada versión.',
      },
    },
    {
      slug: 'directory',
      label: 'Directorio',
      meta: {
        title: 'Directorio de API Hub: encuentra API según sus datos',
        description:
          'En el directorio de API Hub, puedes filtrar por proveedor, autenticación, documentación y estado de la versión. Los resultados llegan hasta el final e indican si el recuento es exacto. Guarda y sigue tus filtros como vistas.',
      },
    },
    {
      slug: 'versions',
      label: 'Versiones',
      meta: {
        title: 'Versiones de API Hub: un registro por versión',
        description:
          'Cada versión de una API tiene su propio registro con el contenido publicado en ese momento. Los anuncios, las fechas previstas, la disponibilidad, los retrasos y las retiradas se registran por separado. Si sigues una API, recibirás los avisos que elijas.',
      },
    },
    {
      slug: 'specs',
      label: 'Especificaciones y autenticación',
      meta: {
        title: 'Especificaciones y autenticación de API Hub',
        description:
          'Cada versión registra sus métodos de autenticación y documentación, e indica si proceden del proveedor, de una fuente importada o de la comunidad. Las mediciones incluyen la métrica, el método, las condiciones, la unidad y la fecha. Los valores desconocidos, cero y no aplicables se muestran por separado.',
      },
    },
    {
      slug: 'connections',
      label: 'Integraciones',
      meta: {
        title: 'API Hub: servicios creados sobre API',
        description:
          'Los proveedores, las bibliotecas cliente, los servidores MCP que integran una API y las habilidades que la usan se conectan mediante relaciones visibles desde cualquiera de sus páginas. Cada proveedor también tiene una página con todo lo que ofrece.',
      },
    },
    {
      slug: 'community',
      label: 'Comunidad',
      meta: {
        title: 'Comunidad de API Hub: valoraciones, debates y listas',
        description:
          'Las valoraciones de una API indican qué pregunta se hizo, qué versión se evaluó y quién participó. También muestran el número de respuestas y su distribución. Los debates corresponden a una entrada o versión, y las listas pueden reunir API, software y servidores MCP.',
      },
    },
    {
      slug: 'publishing',
      label: 'Incorporación',
      meta: {
        title: 'API Hub: añadir y corregir entradas',
        description:
          'Antes de añadir una API, busca si ya existe y especifica si se trata de una API nueva, una versión o un alias. Las propuestas incluyen pruebas y se aplican después de que una persona las revise. Los proveedores y los agentes de IA siguen el mismo proceso.',
      },
    },
  ],
  strings: {
    example: 'Ejemplo: ',
    next: { label: 'Página siguiente', aria: 'Otras páginas de API Hub' },
    closingBody: 'Usa una cuenta para encontrar API, seguir sus versiones y compartir tu experiencia de integración.',
    pictures: {
      hero: 'Varias hojas azul claro se superponen sobre un fondo blanco cálido. Tienen filas ordenadas de agujeros redondos y dejan ver una hoja azul oscuro debajo.',
      request: 'Cinco hojas azul claro forman una fila de compuertas. Una tira de papel azul grisáceo oscuro pasa por las ranuras de cada una.',
      versions: 'Seis tarjetas azul claro se despliegan en abanico, de tonos claros a oscuros, con los agujeros superiores alineados.',
      specs: 'Tres hojas gruesas azul claro se superponen. En cada esquina hay un relieve cuadrado en blanco y debajo asoma papel azul grisáceo oscuro.',
      connections: 'Una hoja azul claro tiene una fila de agujeros en el centro. Tiras ocres, verde claro y verde azulado oscuro llegan desde los bordes y pasan por agujeros distintos.',
    },
    home: {
      hero: {
        headline: 'Una entrada por API y una fuente para cada dato.',
        lede: 'Cada entrada reúne el proveedor, las versiones, la documentación y la autenticación, e indica quién aportó cada dato y cuándo.',
      },
      pages: {
        eyebrow: 'Seis páginas',
        headline: 'Desde encontrar una API hasta seguir cada versión.',
        rows: {
          directory: 'Filtra por datos y consulta todos los resultados',
          versions: 'Conserva las versiones anteriores y encuentra las nuevas',
          specs: 'Fuentes para la autenticación y la documentación',
          connections: 'Conecta bibliotecas, servidores MCP y habilidades',
          community: 'Las valoraciones y los debates indican su objeto',
          publishing: 'Añade y corrige con el mismo proceso',
        },
      },
      directory: {
        eyebrow: 'Directorio',
        headline: 'Cada filtro corresponde a un dato con fuente en la entrada.',
        lead: 'Filtra por autenticación, documentación, estado de la versión y los servidores MCP o las habilidades relacionadas. Combina los filtros disponibles y consulta todos los resultados.',
        link: 'Ver el directorio',
      },
      statement: {
        lead: 'Las API cambian de versión, de nombre y pueden retirarse.',
        rest: 'La entrada registra cada cambio e indica quién lo comunicó.',
      },
      parts: {
        eyebrow: 'Ocho partes',
        headline: 'Una entrada de API se compone de ocho partes.',
        lead: 'La identidad va siempre en primer lugar. API Hub elige las otras siete entre quince partes compartidas. La biblioteca y el anime usan las mismas partes.',
        notes: {
          identity: 'Aunque cambien el nombre o el identificador, la entrada sigue siendo la misma y también se encuentra con sus nombres anteriores.',
          editions: 'Cada versión tiene su propio registro y describe el contenido que se publicó en ese momento.',
          specs: 'Los métodos de autenticación, la documentación técnica y los resultados de medición incluyen su fuente y fecha.',
          credits: 'Las organizaciones que ofrecen cada API y las personas que la mantienen aparecen con su función y tienen su propia página.',
          ratings: 'Cada valoración indica a qué versión corresponde y qué se pregunta.',
          discussion: 'Los hilos de debate pueden tratar sobre toda la API o sobre una versión concreta.',
          follow: 'Recibes avisos sobre nuevas versiones y retiradas según el nivel que elijas.',
          lists: 'Una misma lista puede incluir API, software y habilidades, con una nota para cada elemento.',
        },
      },
      connections: {
        eyebrow: 'Integraciones',
        headline: 'Los servicios creados sobre las API están conectados.',
        lead: 'Las bibliotecas cliente, los servidores MCP que integran una API, las habilidades que la usan y las organizaciones proveedoras tienen sus propias entradas e identidades. Las relaciones las conectan y se pueden recorrer desde cualquier página.',
        link: 'Ver integraciones',
      },
      closing: 'Consulta las versiones y las pruebas antes de elegir una API.',
    },
    directory: {
      hero: {
        headline: 'Encuentra API según sus datos y consulta todos los resultados.',
        lede: 'Cada filtro corresponde a un dato con fuente en la entrada. Combina los filtros disponibles y consulta todos los resultados en orden, no solo las primeras páginas.',
      },
      facets: {
        eyebrow: 'Condiciones',
        headline: 'Combina los campos disponibles para filtrar.',
        lead: 'Cada filtro tiene su nombre y valor. Los valores también son entradas que puedes abrir para seguir explorando.',
        rows: [
          { title: 'Proveedor', body: 'La organización o persona que ofrece la API. Consulta todas sus API juntas.' },
          { title: 'Autenticación', body: 'Sin autenticación, con clave de API o con autorización de usuario. Cada versión se registra por separado.' },
          { title: 'Documentación', body: 'Si hay documentación, dónde está y quién la proporciona.' },
          { title: 'Estado de la versión', body: 'Anunciada, disponible, retirada o cancelada.' },
          { title: 'Relaciones', body: 'Si tiene servidores MCP que la integran, bibliotecas cliente que la llaman o habilidades que la usan.' },
          { title: 'Nombre e idioma', body: 'Busca por nombres y alias en cualquier idioma.' },
          { title: 'Valoraciones', body: 'Filtra por una pregunta de valoración y consulta el número de respuestas.' },
          { title: 'Fecha', body: 'Filtra por la fecha de publicación de una versión o de confirmación de un dato.' },
        ],
      },
      complete: {
        lead: 'Una vista previa, una clasificación y una lista completa ofrecen cosas distintas.',
        rest: 'La lista completa llega hasta el último resultado.',
        note: 'Cada resultado indica la precisión del recuento y la fecha de actualización de los datos. El tamaño de una página no limita la lista.',
      },
      identity: {
        eyebrow: 'Identidad',
        headline: 'Una misma API tiene una sola entrada.',
        lead: 'Cambiar de nombre o de identificador, o aparecer duplicada, no crea otra entrada.',
        rows: [
          { title: 'Los identificadores conservan su fuente', body: 'Cada identificador indica su espacio de nombres y su fuente. Dos nombres iguales en lugares distintos no se consideran la misma API.' },
          { title: 'Los nombres anteriores siguen disponibles', body: 'Los alias, los nombres anteriores y las variantes por idioma se conservan por separado. Puedes encontrar la API con cualquiera de ellos.' },
          { title: 'Las entradas duplicadas se fusionan', body: 'Si hay duplicados, el plan de fusión muestra las valoraciones, reseñas y seguimientos afectados. Una persona decide si se aplica y la fusión se puede revertir.' },
          { title: 'Las direcciones anteriores llevan a la nueva entrada', body: 'Las entradas fusionadas redirigen a la que permanece e indican el motivo de la fusión.' },
        ],
      },
      views: {
        eyebrow: 'Vistas',
        headline: 'Guarda y sigue los filtros que usas con frecuencia.',
        lead: 'Guarda un conjunto de filtros como una vista con nombre y compártela. Sigue una vista para ver nuevas entradas que coincidan en tu actividad o recibirlas en un resumen.',
        tiles: [
          { name: 'Sin autenticación y con documentación', line: 'Encuentra API sin autenticación y con documentación' },
          { name: 'Mismo proveedor', line: 'Consulta todas las API de una organización' },
          { name: 'Con servidor MCP', line: 'API relacionada con un servidor MCP' },
          { name: 'Nombre en chino tradicional', line: 'API con un nombre en chino registrado' },
        ],
        caption: 'El nombre y el contenido de las vistas son ejemplos.',
      },
      closing: 'Empieza por un dato con fuente para encontrar una API.',
    },
    versions: {
      hero: {
        headline: 'Las versiones anteriores permanecen y las nuevas te encuentran.',
        lede: 'Cada versión conserva su estado al publicarse y sigue disponible aunque se retire. Sigue una API para recibir avisos, según tus preferencias, cuando anuncien, publiquen o retiren una versión.',
      },
      closed: {
        lead: 'El registro de una versión publicada no se reescribe.',
        rest: 'Los cambios posteriores forman parte de la siguiente versión.',
      },
      sequence: {
        eyebrow: 'Orden de las versiones',
        headline: 'Cada versión de una misma API tiene su propia fuente.',
        lead: 'Ejemplo ficticio de una API meteorológica: la tercera versión requiere una clave de API y se conserva el registro de acceso sin autenticación de la segunda. Corrige los errores con pruebas y registra el contenido nuevo en otra versión.',
        tiles: [
          { name: 'v1', rel: 'Retirada', line: 'Sin autenticación. Anuncio del proveedor, confirmado el 18/06/2026.' },
          { name: 'v2', rel: 'Disponible', line: 'Sin autenticación. Notas de versión del proveedor, confirmadas el 12/08/2026.' },
          { name: 'v3', rel: 'Disponible', line: 'Clave de API. Documentación del proveedor, confirmada el 01/10/2026.' },
          { name: 'v4', rel: 'Anunciada', line: 'Clave de API. Anuncio previo del proveedor, confirmado el 19/10/2026.' },
        ],
        caption: 'La API meteorológica, las versiones, la autenticación, las fuentes y las fechas son ejemplos ficticios.',
      },
      events: {
        eyebrow: 'Cinco estados',
        headline: 'Cada uno de estos cinco estados, desde el anuncio hasta la retirada, tiene su registro.',
        lead: 'Una versión puede pasar por varias fechas. REZICS no las combina en una sola.',
        rows: [
          { title: 'Anunciada', body: 'El proveedor anuncia una versión nueva. Es un anuncio, no una publicación.' },
          { title: 'Programada', body: 'Se anuncia una fecha prevista. Si cambia, la fecha anterior permanece en el historial.' },
          { title: 'Disponible', body: 'Se confirma que ya está disponible y se cita la fuente.' },
          { title: 'Aplazada', body: 'La fecha prevista se pospone. Un aplazamiento no es una cancelación, que se indica por separado.' },
          { title: 'Retirada', body: 'El proveedor retira la versión. Se conserva el registro y se actualiza el estado.' },
        ],
      },
      follow: {
        eyebrow: 'Seguimiento',
        headline: 'Sigue una API y elige qué avisos recibir.',
        lead: 'Seguir una API no requiere permiso ni tiene coste. Cada seguimiento tiene un nivel de avisos que determina qué novedades llegan a tu bandeja.',
        rows: [
          { title: 'Todo', body: 'Además de las versiones, los anuncios y las decisiones, recibirás las publicaciones habituales.' },
          { title: 'Importantes', body: 'Solo recibirás avisos sobre versiones, anuncios y decisiones.' },
          { title: 'Desactivado', body: 'Las novedades habituales permanecen en tu actividad. Seguirás recibiendo respuestas y menciones.' },
          { title: 'Configurar una versión', body: 'Configura avisos por separado para seguir de cerca una versión concreta.' },
        ],
        footnote: 'Puedes recibir avisos en tu bandeja, como notificaciones push o en un resumen por correo. Cancela el resumen por correo con un clic.',
      },
      closing: 'Recibe avisos sobre las versiones como prefieras.',
    },
    specs: {
      hero: {
        headline: 'Antes de llamar a una API, comprueba qué necesitas.',
        lede: 'Cada versión indica cómo autenticarse, dónde consultar la documentación y qué mediciones hay, además de quién aportó cada dato y cuándo.',
      },
      facts: {
        eyebrow: 'Datos de la versión',
        headline: 'Cada versión registra su autenticación y documentación.',
        lead: 'Dos versiones de una misma API pueden usar métodos de autenticación distintos. Estos datos corresponden a cada versión y siempre indican su fuente.',
        rows: [
          { title: 'Autenticación', body: 'Cada versión indica si no requiere autenticación, usa una clave de API o necesita autorización de usuario. Si cambia en una versión nueva, el registro anterior se conserva.' },
          { title: 'Documentación', body: 'La entrada indica dónde está la documentación, quién la proporcionó y cuándo se verificó.' },
          { title: 'Mediciones', body: 'Las mediciones incluyen la métrica, el método, las condiciones, la unidad y la fecha.' },
          { title: 'Fuente', body: 'Cada dato indica si procede del proveedor, de datos públicos importados o de una medición de la comunidad. Los datos importados incluyen enlaces a la fuente y la licencia.' },
        ],
      },
      measure: {
        lead: 'Las mediciones y las valoraciones son distintas.',
        rest: 'Una valoración refleja opiniones. Una medición indica qué se midió y en qué condiciones.',
      },
      fields: {
        eyebrow: 'Mediciones',
        headline: 'Antes de consultar una medición, revisa estos cinco datos.',
        lead: 'Comprueba la métrica, el método, las condiciones, la unidad y la fecha. Al comparar, revisa también el resultado, el objeto y la cobertura.',
        rows: [
          { title: 'Métrica', body: 'Qué se mide.' },
          { title: 'Método', body: 'Cómo se mide.' },
          { title: 'Condiciones', body: 'En qué condiciones se mide.' },
          { title: 'Unidad', body: 'La unidad del valor.' },
          { title: 'Fecha', body: 'Cuándo se midió. Los resultados antiguos conservan su fecha.' },
        ],
        footnote: 'Los resultados de una misma métrica forman un historial y se pueden comparar con los de otras API.',
      },
      absent: {
        eyebrow: 'Datos ausentes',
        headline: 'Desconocido, cero y no aplicable son respuestas distintas.',
        lead: 'Si no se ha medido, el valor es desconocido, no cero. Una métrica no aplicable no se trata como un dato ausente. La falta de datos no se convierte en una puntuación engañosa.',
      },
      closing: 'Comprueba cómo autenticarte antes de integrar la API.',
    },
    connections: {
      hero: {
        headline: 'Una API conecta todo lo que se crea sobre ella.',
        lede: 'En REZICS, las bibliotecas cliente, los servidores MCP que la integran, las habilidades que la usan y las organizaciones proveedoras tienen entradas e identidades propias, conectadas mediante relaciones.',
      },
      relations: {
        eyebrow: 'Relaciones',
        headline: 'Las relaciones tienen un nombre y una dirección.',
        lead: 'Cada relación indica su tipo y el papel de cada parte. Aparece tanto en la página de la API como en la del otro elemento.',
        rows: [
          { title: 'Biblioteca cliente', body: 'La biblioteca que llama a esta API tiene una entrada de software, con sus propias versiones y dependencias.' },
          {
            title: 'Integrada en un servidor MCP',
            body: 'El proyecto que la integra en un servidor MCP tiene su propia entrada en MCP Hub. El proyecto, el paquete y el punto de conexión se registran por separado.',
          },
          {
            title: 'Habilidades que la usan',
            body: 'Las habilidades que usan esta API tienen su propia entrada en Skill Hub y una relación que las enlaza aquí.',
          },
          { title: 'Otras API del mismo proveedor', body: 'Encuentra otras API desde la página del proveedor.' },
        ],
      },
      both: {
        lead: 'Desde una API puedes encontrar su servidor MCP,',
        rest: 'y también llegar a la API desde el servidor.',
      },
      provider: {
        eyebrow: 'Proveedor',
        headline: 'Cada proveedor tiene su propia página.',
        lead: 'La organización o persona que ofrece una API tiene una identidad pública independiente de cualquier cuenta. Su página enumera las API que ofrece, el software que publica y los servidores MCP que mantiene, según el papel de cada uno.',
        more: 'Una persona conserva la misma identidad en REZICS aunque escriba novelas, cree software y mantenga API.',
      },
      neighbours: {
        eyebrow: 'Relacionados',
        headline: 'Tres tipos relacionados y el sitio para desarrolladores.',
        lines: {
          mcp: 'Servidores MCP que convierten API en herramientas',
          skills: 'Habilidades para agentes de IA que la usan para trabajar',
          software: 'Bibliotecas y aplicaciones que llaman a una API',
        },
        developers: { name: 'Desarrolladores', line: 'Aquí están las API de REZICS' },
      },
      closing: 'Puedes llegar al otro lado desde cualquiera de los dos.',
    },
    community: {
      hero: {
        headline: 'Cada valoración indica qué versión se evaluó.',
        lede: 'Al valorar una API, indica qué pregunta se hizo y qué versión se evaluó. La puntuación muestra el número de respuestas y su distribución. Los debates, las listas y la comunidad también se relacionan con la misma entrada.',
      },
      rating: {
        eyebrow: 'Valoraciones',
        headline: 'Cada valoración se compone de cinco datos.',
        lead: 'Ejemplo: pregunta «¿Está clara la documentación?», escala de cinco puntos, versión 3 y valoraciones de todo el sitio.',
        rows: [
          { title: 'Pregunta', body: 'Qué pregunta se valoró. Las respuestas a preguntas distintas nunca se mezclan.' },
          { title: 'Escala', body: 'La escala y el significado de cada puntuación se explican de antemano.' },
          { title: 'Objeto', body: 'La versión evaluada. Su valoración no se cuenta para otras versiones.' },
          { title: 'Grupo', body: 'El grupo que ha valorado aparece junto a la puntuación.' },
          { title: 'Número y distribución', body: 'Cada valoración indica el número de respuestas y su distribución. Si hay pocas, solo se muestran estos datos y no se calcula la media.' },
        ],
      },
      discussion: {
        lead: 'Debate los problemas de integración en la versión correspondiente.',
        rest: 'Los debates de una versión anterior permanecen vinculados a ella.',
      },
      lists: {
        eyebrow: 'Listas',
        headline: 'Reúne en una lista los elementos que usa un proyecto.',
        lead: 'Una lista puede reunir API, bibliotecas cliente, servidores MCP y habilidades. Añade una nota a cada elemento, elige quién puede verla, ordénala y expórtala.',
        tiles: [
          { kind: 'apis', rel: 'API', name: 'API meteorológica', line: 'Fuente de los datos del pronóstico' },
          { kind: 'apis', rel: 'API', name: 'API de mapas', line: 'Mapa de fondo' },
          { kind: 'software', rel: 'Software', name: 'Biblioteca cliente', line: 'Llama a la API meteorológica desde el programa' },
          { kind: 'mcp', rel: 'Servidor MCP', name: 'Servidor MCP meteorológico', line: 'Permite que el agente de IA consulte el tiempo' },
          { kind: 'skills', rel: 'Habilidad', name: 'Habilidad para organizar itinerarios', line: 'Ajusta el itinerario diario según el tiempo' },
        ],
        caption: 'Lista de un proyecto ficticio con nombres ilustrativos.',
      },
      zone: {
        eyebrow: 'Comunidad y Zone',
        headline: 'Crea un Zone dedicado a un tipo de API.',
        lead: 'Cada comunidad puede establecer sus propias reglas e interpretar los datos de las entradas a su manera. También puede crear un Zone como directorio de API, con datos procedentes del mismo grafo.',
        link: 'Ver el módulo de sitios',
      },
      closing: 'Cada valoración y debate indican a qué se refieren.',
    },
    publishing: {
      hero: {
        headline: 'Comprueba si existe antes de añadirla.',
        lede: 'Cada alta o corrección es una propuesta que indica qué cambia y por qué. Una persona la revisa antes de aplicarla y deja un comprobante. Las personas, los proveedores y los agentes de IA siguen el mismo proceso.',
      },
      path: {
        eyebrow: 'Proceso',
        headline: 'Así se añade una entrada.',
        rows: [
          { title: 'Busca primero', body: 'Antes de abrir el formulario, busca por nombre, alias e identificador. Si ya existe, añade un alias o una versión sin crear otra entrada.' },
          { title: 'Indica de qué se trata', body: 'Quien la envía indica si es una API nueva, una versión de una API existente o parte de una versión. Un modelo puede sugerir, pero no decidir.' },
          { title: 'Aporta pruebas', body: 'Cada propuesta especifica qué cambia, su fuente y el método usado.' },
          { title: 'Revisión humana', body: 'La persona encargada decide después de revisar las pruebas. Si la entrada cambia mientras se tramita la propuesta, vuelve a revisión.' },
          { title: 'Marca como no verificada', body: 'Una entrada nueva puede ser pública, pero se marca como no verificada y muestra la fuente de cada campo. Hasta que se verifique, no aparece en exportaciones ni recomendaciones de confianza.' },
          { title: 'Conserva un comprobante', body: 'Cada cambio aplicado deja un comprobante. Para revertir un cambio se registra una corrección, sin reescribir el historial.' },
        ],
      },
      proposal: {
        eyebrow: 'Formato de propuesta',
        headline: 'Los agentes de IA envían propuestas con el mismo formato que las personas.',
        lead: 'Los agentes oficiales y de terceros envían el mismo tipo de propuesta. Un agente no puede validar sus propios resultados, tampoco al volver a importarlos.',
        rows: [
          { title: 'Objeto y versión', body: 'La entrada exacta que se modifica y la revisión que leyó el agente.' },
          { title: 'Cambio', body: 'El contenido que se añade, modifica o elimina.' },
          { title: 'Pruebas', body: 'La fuente y la ubicación que respaldan el cambio.' },
          { title: 'Método', body: 'Cómo se obtuvo el resultado y qué datos se usaron.' },
          { title: 'Confianza', body: 'El nivel de confianza que declara el agente. Es su estimación, no una garantía de REZICS.' },
          { title: 'Identificación', body: 'Indica que es una acción automatizada y quién se hace responsable.' },
        ],
      },
      paid: {
        lead: 'Pagar no cambia el resultado.',
        rest: 'Un patrocinio o una suscripción no influyen en las decisiones de revisión.',
      },
      provider: {
        eyebrow: 'Proveedor',
        headline: 'Los proveedores siguen el mismo proceso.',
        lead: 'Los proveedores pueden demostrar que controlan su espacio de nombres y presentar datos identificados como propios. Sus declaraciones siguen siendo declaraciones. Las mediciones y los debates de la comunidad permanecen en la entrada.',
        more: 'Si un proveedor retira una declaración, solo se elimina su propio fundamento. Los datos importados incluyen su fuente y licencia. Las importaciones posteriores no sobrescriben en silencio los campos ya verificados y protegidos.',
      },
      closing: 'Las altas y correcciones pasan por una revisión humana.',
    },
  },
} satisfies MiniSite<ApisStrings>;
