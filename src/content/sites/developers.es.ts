// The developers site (design record in src/sites/developers/SITE.md, sources for every claim and
// sample in src/sites/developers/facts.md). Values under a `code` key are code, paths, tool names
// and field names: they are copied from the REZICS source and skipped by the copy rules.
import type { KindId, MiniSite } from '../schema';
import { site as shared } from '../site';

/** Languages used by the site's real code excerpts; `text` is plain. */
export type CodeLanguage = 'http' | 'json' | 'ts' | 'sh' | 'text';

export interface CodeSample {
  language: CodeLanguage;
  code: string;
}
/** A hairline row: title left, text right. */
export interface Row {
  title: string;
  body: string;
}
/** A row whose title is a field name, path or command (set in mono). */
export interface CodeRow {
  code: string;
  body: string;
}
/** A row with a plain title and the field name, path or command it is about. */
export interface NamedRow extends Row {
  code: string;
}
/** A section's meta label, heading and optional lead. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}
export interface Hero {
  headline: string;
  lede: string;
}
export interface Said {
  text: string;
  sub: string;
  note?: string;
}
export interface Shown {
  label: string;
  sample: CodeSample;
  caption?: string;
}
/** A photo row's text: eyebrow, heading and one paragraph or several. */
export interface Photo {
  label: string;
  headline: string;
  body: string[];
}

export type DevelopersStrings = {
  common: { nextSite: string; more: Head; closing: { title: string; body: string } };
  /** Descriptions of the paper still-lifes (SITE.md "Pictures"). */
  alts: Record<'hero' | 'mcp' | 'apps' | 'wiki' | 'zones', string>;
  landing: {
    hero: Hero;
    ways: Head & {
      person: { label: string; body: string };
      calls: Shown[];
      shared: Shown;
    };
    pages: Head & { lines: Record<string, string> };
    statement: Said;
    rules: Head & { rows: NamedRow[] };
    hubs: Head & { items: { kind: KindId; line: string }[] };
  };
  api: {
    hero: Hero;
    anatomy: Head & { request: CodeSample; caption: string; rows: NamedRow[] };
    replay: Head & { responses: Shown[] };
    sdk: Head & { sample: CodeSample; caption: string; openapi: string; code: { path: string } };
    reads: Head & { rows: CodeRow[] };
  };
  mcp: {
    hero: Hero;
    adapter: Photo;
    connect: Head & { rows: NamedRow[] };
    same: Head & { calls: Shown[]; shared: Shown; caption: string };
    tools: Head & {
      scopes: string;
      groups: { name: string; tools: { title: string; code: { tool: string; op: string; scopes: string[] } }[] }[];
    };
    limits: Head & { rows: Row[] };
  };
  apps: {
    hero: Hero;
    layers: Photo;
    each: Head & { rows: Row[] };
    authorize: Head & { sample: CodeSample; caption: string };
    consent: Head & { rows: { text: string; code: string }[]; note: string };
    revoke: Head & { rows: Row[] };
  };
  wiki: {
    hero: Hero;
    boundary: Photo;
    steps: Head & { sample: CodeSample; caption: string; rows: NamedRow[] };
    limits: Head & { rows: Row[] };
    statement: Said & { licence: string };
  };
  zones: {
    hero: Hero;
    theme: Photo;
    settings: Head & { tokens: CodeSample; caption: string };
    slots: Head & { pkg: CodeSample; caption: string };
    rules: Head & { rows: Row[] };
    review: Head & { rows: Row[] };
    statement: Said;
  };
  open: {
    hero: Hero & { link: string; href: string };
    licences: Head & { rows: { line: string; code: { name: string; paths: string } }[] };
    map: Head & { rows: (CodeRow & { licence: string })[] };
    run: Head & { blocks: { sample: CodeSample; caption: string }[] };
    statement: Said;
  };
};

const lines = (...l: string[]) => l.join('\n');

const strings: DevelopersStrings = {
  common: {
    nextSite: 'Siguiente sitio',
    more: { label: 'Desarrolladores', headline: 'Otras páginas' },
    closing: {
      title: 'Crea tus propias herramientas con la misma API.',
      body: 'Permite que tus programas lean y modifiquen obras, tu biblioteca y los datos de la comunidad. Cada operación aplica las reglas de identidad y autorización de REZICS.',
    },
  },
  alts: {
    hero: 'Sobre un fondo blanco cálido, tres tiras de papel llegan desde arriba, la derecha y abajo, y terminan bajo una misma hoja cuadrada azul grisácea.',
    mcp: 'Una tira celeste pasa en zigzag por una fila de orificios en una hoja azul grisácea.',
    apps: 'Cuatro hojas cuadradas se apilan de mayor a menor. La exterior es azul grisácea y la más pequeña, en la parte superior, es celeste.',
    wiki: 'Una pila ordenada de hojas gruesas color crema y celeste, junto a tres tiras largas de papel azul grisáceo.',
    zones: 'Una hoja azul grisácea forma un pequeño marco con una ventana. Detrás hay una hoja celeste.',
  },

  landing: {
    hero: {
      headline: 'Cada botón corresponde a una operación de API.',
      lede: 'El sitio web de REZICS también usa esta API. Tu programa envía una petición HTTP y tu agente de IA llama herramientas a través del servidor MCP. Ambos llegan a la misma operación.',
    },
    ways: {
      label: 'Tres formas',
      headline: 'Tres formas de hacer una petición, la misma respuesta.',
      lead: 'Al pulsar «Descargar biblioteca» en tu biblioteca, el sitio envía esta petición. Tu programa y tu agente pueden enviar la misma, pasar las mismas comprobaciones y obtener la misma exportación.',
      person: { label: 'Persona', body: 'Pulsa «Descargar biblioteca» en la página Biblioteca de REZICS.' },
      calls: [
        {
          label: 'Programa',
          sample: { language: 'http', code: lines('GET /v1/me/library-export', '  ?actingSubject=…&limit=20', 'Authorization: Bearer …') },
        },
        {
          label: 'Agente',
          sample: {
            language: 'json',
            code: lines(
              '{',
              '  "name": "library_export",',
              '  "arguments": {',
              '    "query": {',
              '      "actingSubject": "…",',
              '      "limit": 20',
              '    }',
              '  }',
              '}',
            ),
          },
          caption: 'Parámetros de tools/call. Tú eliges la identidad.',
        },
      ],
      shared: {
        label: 'La misma operación',
        sample: { language: 'text', code: lines('operationId', '  getV1MeLibrary-export', 'profile', '  rezics-library-export-v1') },
      },
    },
    pages: {
      label: 'Seis partes',
      headline: 'Seis recursos para empezar',
      lead: 'Las rutas, los campos y los comandos de cada página proceden del código fuente de REZICS.',
      lines: {
        api: 'Puedes repetir una escritura de forma segura y recibir un código fijo si falla',
        'mcp-server': 'Los agentes de IA se conectan por /mcp y ven las herramientas permitidas',
        apps: 'Autoriza mediante OAuth y revoca el acceso cuando quieras',
        'wiki-toolkit': 'Extrae datos en tu ordenador y envía solo propuestas',
        zones: 'Crea diseños para los sitios de comunidades',
        'open-source': 'Plataforma con AGPL-3.0 y paquetes independientes con Apache-2.0',
      },
    },
    statement: {
      text: 'El sitio de REZICS no accede directamente a la base de datos. Todas las lecturas y escrituras pasan por la API;',
      sub: 'todo lo que puedes hacer en el sitio también está disponible por API.',
    },
    rules: {
      label: 'Reglas',
      headline: 'Las mismas reglas para todos los accesos',
      rows: [
        { title: 'La misma identidad', code: 'actingSubject', body: 'Al escribir, indica con qué identidad actúas. El token no elige por ti y el servidor vuelve a comprobarlo cada vez.' },
        { title: 'El mismo límite', code: 'scope', body: 'Las aplicaciones y los agentes reciben menos permisos que la persona usuaria, nunca más.' },
        { title: 'El mismo comprobante', code: 'Idempotency-Key', body: 'Cada escritura lleva una clave de idempotencia. Si se agota el tiempo, repite la misma petición para obtener el resultado original sin duplicar la operación.' },
        { title: 'Los mismos códigos', code: 'application/problem+json', body: 'Si falla, se devuelve un detalle del problema con un campo code fijo. El programa puede responder al código sin analizar el mensaje.' },
      ],
    },
    hubs: {
      label: 'Índice',
      headline: 'También hay un índice de herramientas externas',
      lead: 'REZICS también indexa servidores MCP, habilidades y API de otras personas, con versiones, fuentes, mediciones o registros de uso, valoraciones y debates.',
      items: [
        { kind: 'mcp', line: 'Índice de servidores MCP' },
        { kind: 'skills', line: 'Índice de habilidades para agentes de IA' },
        { kind: 'apis', line: 'Índice de API públicas' },
      ],
    },
  },

  api: {
    hero: {
      headline: 'Marcar un libro como leído también es una operación de API.',
      lede: 'Al marcar una obra como «Leída» en tu biblioteca, el sitio envía la petición que aparece aquí. Tu programa puede enviar la misma petición, obtener el mismo resultado y pasar las mismas comprobaciones.',
    },
    anatomy: {
      label: 'Escritura',
      headline: 'Una petición de escritura, línea por línea',
      request: {
        language: 'http',
        code: lines(
          'PUT /v1/works/{id}/reader-status',
          'Authorization: Bearer …',
          'Idempotency-Key: 7f3c2a9e-read',
          'Content-Type: application/json',
          '',
          '{',
          '  "actingSubject":',
          '    "https://rezics.com/id/…",',
          '  "expectedVersion": 3,',
          '  "status": "read",',
          '  "finishedOn": "2026-10-19"',
          '}',
        ),
      },
      caption: 'La versión, la fecha y la clave de idempotencia son ejemplos.',
      rows: [
        { code: '{id}', title: 'La ruta identifica una obra', body: 'Cada elemento de REZICS tiene un identificador estable que empieza por https://rezics.com/id/. Se mantiene igual en todos los idiomas y sitios.' },
        { code: 'actingSubject', title: 'Indica la identidad', body: 'Una cuenta puede representar a una persona o a una organización. Cada escritura debe indicar con qué identidad actúa, y el servidor comprueba sus permisos antes de ejecutarla.' },
        { code: 'Idempotency-Key', title: 'Repite peticiones de forma segura', body: 'Cada escritura incluye una clave de idempotencia. Si se agota el tiempo o se corta la conexión, puedes repetir la petición con la misma clave sin duplicar la escritura.' },
        { code: 'expectedVersion', title: 'Evita sobrescribir datos', body: 'Si leíste la versión 3, indica la versión 3. Si alguien la cambió entretanto, tu escritura no la sobrescribe.' },
        { code: 'application/problem+json', title: 'Los errores incluyen detalles', body: 'Si falla, code contiene un código fijo que el programa puede usar para responder, sin comparar el texto del mensaje.' },
      ],
    },
    replay: {
      label: 'Repetir',
      headline: 'Repite la petición y obtén el mismo resultado.',
      lead: 'Si repites la misma petición con la misma clave, el servidor devuelve el resultado original, mantiene la versión 4 y cambia replayed a true. Si cambias el contenido y reutilizas la clave, devuelve 409 reader_status_conflict. Si la versión ya no es 3, devuelve 409 stale_reader_status. Vuelve a leer los datos antes de escribir.',
      responses: [
        {
          label: 'Primera petición',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": false', '}') },
        },
        {
          label: 'Repetir',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": true', '}') },
        },
        {
          label: 'Versión desactualizada',
          sample: { language: 'json', code: lines('409', '{', '  "status": 409,', '  "code":', '    "stale_reader_status"', '}') },
        },
      ],
    },
    sdk: {
      label: 'Tipos',
      headline: 'La API y sus tipos proceden de una misma definición',
      lead: 'El sitio de REZICS usa TypeScript para llamar a la API, y los tipos de peticiones y respuestas proceden de las rutas declaradas en el servidor. Si cambia un campo o se añade un código de error, el programa que llama a la API lo detecta al compilar. El SDK de TypeScript se genera a partir de la misma definición, así que usa los mismos tipos que el sitio.',
      sample: {
        language: 'ts',
        code: lines(
          'main().v1',
          '  .works({ id: uuid(work) })',
          "  ['reader-status'].put({",
          '    actingSubject,',
          '    expectedVersion,',
          "    status: 'read',",
          '    ...dates,',
          '  }, headers())',
        ),
      },
      caption: 'Fragmento de la función Biblioteca del sitio de REZICS.',
      openapi: 'La documentación OpenAPI 3.1 también se genera desde las mismas rutas y describe la autenticación, el formato de petición y las respuestas de cada código de estado.',
      code: { path: 'generated/openapi/main/public.json' },
    },
    reads: {
      label: 'Lectura',
      headline: 'La lectura también tiene reglas',
      rows: [
        { code: 'nextCursor · snapshot', body: 'Las listas largas incluyen un cursor para la página siguiente y se pueden recorrer hasta el final. Las exportaciones de la biblioteca también incluyen una instantánea. Si los datos cambian durante la exportación, se indica y no recibes un archivo incompleto.' },
        { code: 'count.precision', body: 'Los resultados de búsqueda indican si la cantidad es exacta o un mínimo.' },
        { code: 'title.language · basis', body: 'Los títulos incluyen la etiqueta de idioma y la dirección de escritura. También se indica si el idioma es el solicitado, una variante de escritura, otro idioma o una alternativa.' },
        { code: '404 resource_unavailable', body: 'Las respuestas a recursos que no puedes consultar son iguales que las de recursos inexistentes, así que no revelan que existen.' },
      ],
    },
  },

  mcp: {
    hero: {
      headline: 'Conecta tu agente de IA por /mcp.',
      lede: 'REZICS ofrece un servidor MCP remoto en /mcp. Tu agente se conecta con un token autorizado por ti y ve las herramientas permitidas por sus permisos actuales. Cada herramienta corresponde a una operación HTTP.',
    },
    adapter: {
      label: 'Adaptador',
      headline: 'MCP solo adapta las llamadas, no crea otra vía de escritura.',
      body: [
        'Cada llamada a una herramienta se reenvía una sola vez a la operación HTTP correspondiente, con el mismo token y la misma clave de idempotencia. Esa operación determina quién actúa, qué puede hacer y cuántas solicitudes consume.',
        'El contenido de las obras y el texto de las páginas que leen las herramientas siempre se tratan como datos, nunca como instrucciones.',
      ],
    },
    connect: {
      label: 'Conexión',
      headline: 'Cuatro pasos para conectarte',
      rows: [
        { title: 'Consulta los metadatos del recurso', code: 'GET /.well-known/oauth-protected-resource/mcp', body: 'Una petición sin token recibe una respuesta 401 con una cabecera que apunta a estos metadatos, donde aparecen el servidor de autorización y los permisos disponibles.' },
        { title: 'Registra un cliente y obtén un token', code: 'RFC 7591 · PKCE', body: 'El cliente del agente puede registrarse y usar el código de autorización con PKCE para obtener un token. El registro por sí solo no concede acceso a ningún recurso.' },
        { title: 'Consulta las herramientas', code: 'tools/list', body: 'La lista solo incluye las herramientas disponibles para esta identidad.' },
        { title: 'Llama a una herramienta', code: 'tools/call', body: 'El resultado conserva el código de estado HTTP, las cabeceras y el contenido. Los códigos 400 o superiores se marcan como errores.' },
      ],
    },
    same: {
      label: 'La misma operación',
      headline: 'Las llamadas del agente se reenvían a la misma operación HTTP.',
      calls: [
        { label: 'Programa', sample: { language: 'http', code: lines('GET /v1/search/catalogue', '  ?q=viaje&limit=5') } },
        {
          label: 'Agente',
          sample: {
            language: 'json',
            code: lines(
              '{',
              '  "name": "search_catalogue",',
              '  "arguments": {',
              '    "query": {',
              '      "q": "viaje",',
              '      "limit": 5',
              '    }',
              '  }',
              '}',
            ),
          },
          caption: 'Envía estos parámetros con tools/call.',
        },
      ],
      shared: {
        label: 'La misma respuesta',
        sample: { language: 'text', code: lines('operationId', '  getV1SearchCatalogue', 'profile', '  public-catalogue-ranked-v1') },
      },
      caption: 'Ejemplo: busca «viaje» en el catálogo. El agente recibe la misma respuesta, con el código de estado HTTP y las cabeceras añadidos. Los parámetros se agrupan como path, query, headers y body, según la operación HTTP.',
    },
    tools: {
      label: 'Herramientas',
      headline: 'Lista de herramientas',
      lead: 'Las herramientas se generan a partir de las capacidades declaradas por la API. La declaración indica el nombre, la función y los permisos necesarios. La generación falla si se repite un nombre o no existe la operación correspondiente.',
      scopes: 'Permisos necesarios',
      groups: [
        {
          name: 'Consulta el catálogo',
          tools: [
            { title: 'Busca en el catálogo por palabras clave', code: { tool: 'search_catalogue', op: 'GET /v1/search/catalogue', scopes: ['work:read'] } },
            { title: 'Consulta un recurso', code: { tool: 'read_resource', op: 'GET /v1/resources/{resource}', scopes: ['work:read', 'context:read'] } },
            { title: 'Consulta el resumen de varios recursos', code: { tool: 'resource_summaries', op: 'POST /v1/resources/summaries', scopes: ['work:read', 'context:read'] } },
            { title: 'Consulta las relaciones de un recurso', code: { tool: 'resource_relations', op: 'GET /v1/resources/{resource}/relations', scopes: ['work:read'] } },
            { title: 'Consulta las ediciones de una obra', code: { tool: 'work_editions', op: 'GET /v1/works/{id}/releases', scopes: ['work:read'] } },
          ],
        },
        {
          name: 'Biblioteca',
          tools: [
            { title: 'Exporta toda tu biblioteca', code: { tool: 'library_export', op: 'GET /v1/me/library-export', scopes: ['work:read', 'rating:read'] } },
            { title: 'Sube un archivo de biblioteca', code: { tool: 'library_import_create', op: 'POST /v1/me/library-imports', scopes: ['work:read', 'library:write'] } },
            { title: 'Revisa los resultados de comparación fila por fila', code: { tool: 'library_import_rows', op: 'GET /v1/me/library-imports/{id}/rows', scopes: ['work:read'] } },
            { title: 'Elige una obra para una fila', code: { tool: 'library_import_resolve', op: 'PUT /v1/me/library-imports/{id}/rows/{row}', scopes: ['work:read', 'library:write'] } },
            { title: 'Acepta una obra candidata que no está en el catálogo', code: { tool: 'library_import_adopt', op: 'POST /v1/me/library-imports/{id}/rows/{row}/adoptions', scopes: ['work:read', 'library:write', 'work:create'] } },
            { title: 'Aplica una importación revisada', code: { tool: 'library_import_apply', op: 'POST /v1/me/library-imports/{id}/apply', scopes: ['work:read', 'library:write', 'collection:edit', 'rating:read', 'rating:submit'] } },
            { title: 'Consulta el progreso de importación', code: { tool: 'library_import_status', op: 'GET /v1/me/library-imports/{id}/apply', scopes: ['work:read'] } },
            { title: 'Elimina el archivo subido', code: { tool: 'library_import_delete', op: 'DELETE /v1/me/library-imports/{id}', scopes: ['work:read', 'library:write'] } },
          ],
        },
        {
          name: 'Wiki',
          tools: [
            { title: 'Compara los nombres extraídos', code: { tool: 'wiki_candidates', op: 'POST /v1/wiki/candidates', scopes: ['wiki:propose'] } },
            { title: 'Valida una extracción antes de enviarla', code: { tool: 'wiki_validate', op: 'POST /v1/wiki/validations', scopes: ['wiki:propose'] } },
            { title: 'Consulta el contenido aceptado de Wiki', code: { tool: 'wiki_history', op: 'GET /v1/wiki/{work}/history', scopes: ['work:read'] } },
            { title: 'Consulta las fuentes y citas de una afirmación', code: { tool: 'wiki_evidence', op: 'GET /v1/wiki/evidence/{id}', scopes: ['work:read'] } },
          ],
        },
      ],
    },
    limits: {
      label: 'Límites',
      headline: 'Límites de cada llamada',
      rows: [
        { title: '30 segundos', body: 'Tiempo máximo para cada llamada a una herramienta.' },
        { title: '1 MiB', body: 'Tamaño máximo de una petición habitual. Los archivos de la biblioteca se cuentan aparte.' },
        { title: 'Sin estado', body: 'Cada petición valida su propio token y el servidor no guarda sesiones.' },
      ],
    },
  },

  apps: {
    hero: {
      headline: 'Una aplicación nunca recibe más permisos que tú.',
      lede: 'REZICS registra por separado el inicio de sesión, la identidad representada, los permisos de los recursos y la autorización de la aplicación. Los tokens de aplicaciones y agentes de IA solo pueden limitarse dentro de esos márgenes.',
    },
    layers: {
      label: 'Cuatro niveles',
      headline: 'Cada nivel limita más el acceso',
      body: ['La cuenta, la identidad, la instalación y el consentimiento, y los permisos del token se registran en cuatro niveles. Cada nivel queda dentro del anterior y la aplicación solo recibe los permisos del nivel más limitado.'],
    },
    each: {
      label: 'Nivel por nivel',
      headline: 'Qué controla cada nivel',
      rows: [
        { title: 'Cuenta', body: 'El servicio de cuenta confirma quién eres. Iniciar sesión no da acceso a ningún recurso por sí solo.' },
        { title: 'Identidad', body: 'Actúas con una identidad personal o de organización. El servidor comprueba esa relación y los permisos del recurso.' },
        { title: 'Instalación y consentimiento', body: 'La instalación y el consentimiento son límites independientes. Registrar una aplicación no le da acceso a ningún recurso.' },
        { title: 'Permisos del token', body: 'El token solo incluye los permisos que aceptaste, como library:write. Cada operación vuelve a comprobar con qué identidad actúas.' },
      ],
    },
    authorize: {
      label: 'Autorización',
      headline: 'Código de autorización con PKCE',
      sample: {
        language: 'http',
        code: lines(
          'GET /api/auth/oauth2/authorize',
          '  ?response_type=code',
          '  &client_id=…',
          '  &redirect_uri=https://a.example/',
          '  &scope=work:read%20library:write',
          '  &code_challenge=…',
          '  &code_challenge_method=S256',
          '  &state=…',
        ),
      },
      caption: 'La petición de autorización se envía al servicio de cuentas de REZICS. La dirección de retorno debe coincidir exactamente con la registrada.',
    },
    consent: {
      label: 'Consentimiento',
      headline: 'Qué muestra la pantalla de consentimiento',
      rows: [
        { text: 'El nombre y el sitio web de la aplicación', code: 'name · uri' },
        { text: 'Cada permiso se explica en tu idioma. Si falta una traducción, se muestra en inglés', code: 'scopes[].description' },
        { text: 'Se indica claramente si la aplicación aún no está verificada', code: 'unverified' },
        { text: 'El dominio al que volverás después de autorizar', code: 'redirectHost' },
        { text: 'La política de privacidad y las condiciones del servicio', code: 'policy · terms' },
      ],
      note: 'Los productos de REZICS no muestran esta pantalla de consentimiento. Aparecen como sesiones de producto en la página de tu cuenta.',
    },
    revoke: {
      label: 'Revocación',
      headline: 'Revoca el acceso cuando quieras',
      rows: [
        { title: 'Consulta', body: 'La página «Aplicaciones conectadas» de tu cuenta muestra qué puede hacer cada aplicación, cuándo la autorizaste y cuándo se usó por última vez.' },
        { title: 'Confirmación', body: 'Tu identidad se vuelve a verificar antes de retirar el acceso.' },
        { title: 'Revocación', body: 'Al retirarlo, dejan de funcionar tanto el token de acceso como el token de renovación.' },
        { title: 'Desactivación', body: 'Las aplicaciones desactivadas por REZICS aparecen indicadas. Puedes retirar las autorizaciones que dejaron.' },
      ],
    },
  },

  wiki: {
    hero: {
      headline: 'REZICS recibe propuestas, no textos completos.',
      lede: 'Quien tiene el texto usa su propio agente de IA y su propio modelo para extraer personajes, alias, relaciones, sucesos y lugares capítulo por capítulo. Cada elemento incluye una ubicación y una cita breve para que una persona lo revise en REZICS. El conjunto de herramientas no se conecta a Internet ni envía registros de uso.',
    },
    boundary: {
      label: 'Límites',
      headline: 'Qué se queda y qué se envía',
      body: [
        'Los archivos originales y el texto completo de los capítulos permanecen en tu ordenador. El conjunto de herramientas realiza la conversión y la localización sin conexión. REZICS recibe personajes, alias, relaciones, sucesos y lugares, cada uno con una ubicación y una cita breve, además del agente y el modelo usados, y de si la inferencia fue local o en la nube.',
        'Si usas un modelo en la nube, el texto que lee el agente se envía a quien ofrece ese modelo. Tú decides. Para mantenerlo todo en tu ordenador, usa un modelo local y desactiva las herramientas en la nube que pueden leer archivos.',
      ],
    },
    steps: {
      label: 'Pasos',
      headline: 'De un archivo a una propuesta',
      sample: {
        language: 'sh',
        code: lines('rezics-wiki units novel.epub', 'rezics-wiki verify novel.epub \\', '  - < locator.json'),
      },
      caption: 'units muestra un fragmento por línea con su ubicación. verify recibe una ubicación y comprueba la cita con el mismo archivo.',
      rows: [
        { code: 'rezics-wiki units', title: 'Divide el texto en fragmentos', body: 'Convierte archivos TXT, EPUB 2/3 o guiones de texto de novelas visuales (.rpy) en fragmentos. Cada uno incluye una ubicación rezics-locator-v1 y el hash SHA-256 del archivo completo.' },
        { code: 'skill/SKILL.md', title: 'Dáselo a tu agente', body: 'El conjunto incluye una habilidad que enseña al agente a extraer datos capítulo por capítulo y distinguir la narración, el diálogo, los rumores y las hipótesis.' },
        { code: 'wiki_candidates · wiki_validate', title: 'Compara y valida', body: 'Primero comprueba los nombres y alias existentes. Los resultados se clasifican como coincidencia, nuevo, ambiguo o no disponible. Después, valida los límites de citas y las ubicaciones de capítulos que faltan.' },
        { code: 'wiki-extraction-v1', title: 'Envía la propuesta a revisión', body: 'La propuesta se publica después de que una persona la revise. Si tiene la misma edición, puede comprobar cada cita en su propio ordenador.' },
        { code: 'wiki-delta-v1', title: 'Añade capítulos nuevos', body: 'Los capítulos posteriores se envían como propuestas de cambios. El contenido existente que no se menciona permanece intacto.' },
      ],
    },
    limits: {
      label: 'Límites',
      headline: 'Formatos y límites',
      rows: [
        { title: 'TXT, EPUB y .rpy', body: 'Formatos de archivo compatibles.' },
        { title: '200', body: 'Límite de caracteres por cita.' },
        { title: '128 MiB', body: 'Tamaño máximo de un archivo.' },
      ],
    },
    statement: {
      text: 'No descifra ni elude protecciones;',
      sub: 'los archivos protegidos no se pueden leer.',
      licence: 'El conjunto de herramientas no descifra archivos, recupera claves ni elude protecciones, y tampoco recomienda extensiones que lo hagan. Las herramientas y el protocolo usan la licencia Apache-2.0 y no incluyen código AGPL de REZICS. No necesitas una cuenta de REZICS y puedes usar cualquier servidor compatible. Los ejemplos solo usan obras de dominio público o que tienes derecho a utilizar.',
    },
  },

  zones: {
    hero: {
      headline: 'Zone controla el diseño; la plataforma, los datos y las reglas.',
      lede: 'Zone es el sitio de la comunidad y puede incluir código de presentación propio. Ese código solo controla el diseño. La plataforma proporciona los datos y conserva los permisos y la moderación.',
    },
    theme: {
      label: 'Tema',
      headline: 'Configura primero. Escribe código después.',
      body: ['Cada Zone parte de un tema predeterminado. Ajusta la densidad, el fondo de las páginas y la proporción de las portadas. Si lo necesitas, cambia el color de acento y organiza módulos como el carrusel de destacados, la estantería, las clasificaciones y la selección editorial. Solo hace falta mostrar código cuando los ajustes no bastan para el diseño.'],
    },
    settings: {
      label: 'Ajustes',
      headline: 'Ajustes de un tema',
      tokens: {
        language: 'ts',
        code: lines(
          'const tokens: ZoneTokens = {',
          "  colorScheme: 'system',",
          "  accent: '#3b4a5a',",
          "  density: 'comfortable',",
          "  cardRadius: 'md',",
          "  headingFontScale: 'md',",
          "  surfaceTint: 'subtle',",
          "  fontPairing: 'serif',",
          "  pageSurface: 'flat',",
          "  coverStyle: 'portrait',",
          '};',
        ),
      },
      caption: 'Todos los campos obligatorios de los ajustes del tema. Los tipos proceden de @rezics/zone-sdk.',
    },
    slots: {
      label: 'Ranuras',
      headline: 'Añade código en ranuras con nombre',
      lead: 'El código de presentación es un paquete que añade componentes a ranuras con nombre: encabezado, destacados, búsqueda, panel de datos, fichas de obras, módulos y pie de página. Cada ranura recibe el componente de la plataforma, que el paquete puede envolver o sustituir.',
      pkg: {
        language: 'ts',
        code: lines(
          'export default defineZonePackage({',
          "  slug: 'anime',",
          '  css,',
          "  catalogue: { count: 'episodes',",
          '    formatNames: animeFormatNames',
          '  },',
          '  slots: {',
          '    browseHeader:',
          '      AnimeBrowseHeader,',
          '    workCard: AnimeCard,',
          '    cataloguePanel:',
          '      AnimeCataloguePanel,',
          '    footer: AnimeFooter,',
          '  },',
          '});',
        ),
      },
      caption: 'Fragmento del punto de entrada del paquete de Zone Anime de REZICS.',
    },
    rules: {
      label: 'Límites',
      headline: 'Límites del paquete',
      rows: [
        { title: 'No obtiene datos por su cuenta', body: 'La plataforma lee los datos y los envía a la ranura. El paquete no hace peticiones.' },
        { title: 'No accede a credenciales', body: 'No lee cookies, el almacenamiento del navegador ni otras credenciales.' },
        { title: 'No oculta la interfaz de la plataforma', body: 'Los menús de cuenta y Zone, las denuncias y la confirmación de edad están fuera de las ranuras. La marca «Por qué está aquí» también aparece en cada obra.' },
        { title: 'Los estilos solo afectan a Zone', body: 'Los estilos se limitan a este Zone, y los colores y las fuentes usan solo las variables de la plataforma.' },
        { title: 'Tamaño limitado', body: 'Después de comprimir con gzip, el CSS no puede superar 40 KiB y JavaScript, 50 KiB.' },
      ],
    },
    review: {
      label: 'Publicación',
      headline: 'De la revisión a la publicación',
      rows: [
        { title: 'Calcula el hash', body: 'Se calcula un hash para todos los archivos del paquete. Si cambia un solo byte, cambia el hash.' },
        { title: 'Revisión independiente', body: 'Otra cuenta revisa el código fuente, los archivos generados, la accesibilidad y el comportamiento ante errores, y registra su decisión y el hash de las pruebas.' },
        { title: 'Activa una versión y fija su vencimiento', body: 'Solo se pueden activar las versiones revisadas y todas tienen una fecha de vencimiento. Volver a una versión anterior no reactiva una aprobación caducada.' },
        { title: 'Vuelve al diseño estándar cuando quieras', body: 'Si el hash no coincide, se muestra el diseño estándar. Los lectores pueden desactivar el paquete o añadir ?safe a la dirección para usar el modo seguro. La plataforma también tiene un interruptor general.' },
      ],
    },
    statement: {
      text: 'Un solo backend, el frontend lo decides tú;',
      sub: 'los agentes de IA también consultan los mismos datos.',
      note: 'Un nuevo sitio de comunidad no requiere otro backend. El código de presentación solo lee la API pública y no contiene lógica de negocio. Todos los datos que muestra Zone también están disponibles por API.',
    },
  },

  open: {
    hero: {
      headline: 'El código fuente es público y los paquetes independientes están a tu disposición.',
      lede: 'Los servicios, el sitio web, las páginas de cuenta, los documentos de diseño y las definiciones de API están en un mismo repositorio público. La plataforma usa AGPL-3.0. El conjunto de herramientas Wiki y el paquete de formato de documentos usan Apache-2.0 y no dependen de los servicios de REZICS.',
      link: 'Ver el código fuente',
      href: shared.footer.sourceUrl,
    },
    licences: {
      label: 'Autorización',
      headline: 'Dos licencias',
      rows: [
        { code: { name: 'AGPL-3.0', paths: 'services/ · apps/ · generated/ · docs/' }, line: 'La plataforma: servicios, sitio web, páginas de cuenta y documentación.' },
        { code: { name: 'Apache-2.0', paths: 'packages/wiki-toolkit/ · packages/document/' }, line: 'Paquetes independientes: @rezics/wiki-toolkit y @rezics/document. No requieren una cuenta de REZICS.' },
      ],
    },
    map: {
      label: 'Repositorio',
      headline: 'Qué contiene el repositorio',
      rows: [
        { code: 'services/', licence: 'AGPL-3.0', body: 'Servicios de backend. Main ofrece la API y el servidor MCP. Account gestiona el inicio de sesión y la autorización OAuth.' },
        { code: 'apps/web/', licence: 'AGPL-3.0', body: 'Sitio web de REZICS. Igual que tu programa, obtiene datos solo por API.' },
        { code: 'apps/web/zones/official/', licence: 'AGPL-3.0', body: 'Código de presentación de los Zone oficiales, con una carpeta por paquete.' },
        { code: 'apps/accounts/', licence: 'AGPL-3.0', body: 'Páginas de cuenta: inicio de sesión, seguridad y aplicaciones conectadas.' },
        { code: 'packages/wiki-toolkit/', licence: 'Apache-2.0', body: 'Conjunto de herramientas Wiki local, con su protocolo y habilidad.' },
        { code: 'packages/document/', licence: 'Apache-2.0', body: 'Formato de documentos de REZICS, con texto y bloques definidos en un esquema JSON.' },
        { code: 'generated/openapi/', licence: 'AGPL-3.0', body: 'Documentación OpenAPI generada a partir de las rutas declaradas.' },
        { code: 'docs/', licence: 'AGPL-3.0', body: 'Decisiones de diseño, contratos y procedimientos operativos, con sus motivos.' },
      ],
    },
    run: {
      label: 'Ejecución',
      headline: 'Ejecuta REZICS en tu ordenador',
      lead: 'Instala las versiones fijadas de las herramientas y el entorno de contenedores. Con tres comandos puedes iniciar la API, el servicio de cuentas, el sitio web y las páginas de cuenta, y consultar sus direcciones.',
      blocks: [
        { sample: { language: 'sh', code: lines('task toolchain:install', 'task dev', 'task urls') }, caption: 'Fragmento de la documentación del repositorio.' },
        {
          sample: {
            language: 'ts',
            code: lines(
              'import {',
              '  fromPlainText, parseDocument,',
              '  serializeDocument,',
              "} from '@rezics/document';",
              '',
              'const snapshot = fromPlainText(',
              "  'Texto de ejemplo\\nSegundo párrafo',",
              ');',
              'parseDocument(snapshot);',
              'const stored =',
              '  serializeDocument(snapshot);',
            ),
          },
          caption: '@rezics/document no necesita una cuenta de REZICS, sus servicios ni una base de datos. Ejemplo tomado de su documentación.',
        },
      ],
    },
    statement: {
      text: 'Las reglas se escriben en el código,',
      sub: 'y los motivos, en la documentación.',
      note: 'Las reglas que pueden expresarse con tipos, pruebas y comprobaciones se implementan en el código. La documentación explica por qué se tomaron esas decisiones, con fechas y motivos.',
    },
  },
};

export default {
  id: 'developers',
  base: '/developers/',
  name: 'Desarrolladores',
  theme: { field: '#3b4a5a', on: 'paper' },
  next: 'books',
  pages: [
    {
      slug: '',
      label: 'Resumen',
      meta: {
        title: 'Desarrollo para REZICS: una misma API',
        description: 'Cada botón del sitio de REZICS corresponde a una operación de API. Tu programa la llama por HTTP y tu agente de IA, a través del servidor MCP. La identidad, los comprobantes y los códigos de error se comprueban igual que cuando una persona pulsa el botón.',
      },
    },
    {
      slug: 'api',
      label: 'API y SDK',
      meta: {
        title: 'API y SDK: cada operación tiene un contrato',
        description: 'Cada operación de API en REZICS define su ruta, permisos, clave de idempotencia y códigos de error. La documentación OpenAPI y los tipos de TypeScript se generan a partir de las mismas rutas que usan el sitio y tu programa.',
      },
    },
    {
      slug: 'mcp-server',
      label: 'Servidor MCP',
      meta: {
        title: 'Servidor MCP de REZICS',
        description: 'Un agente de IA se conecta al servidor MCP remoto de REZICS con autorización OAuth y usa las herramientas generadas a partir de la API. Cada llamada se reenvía una sola vez a la operación HTTP correspondiente, que determina la identidad, los permisos y el presupuesto.',
      },
    },
    {
      slug: 'apps',
      label: 'Aplicaciones conectadas',
      meta: {
        title: 'Aplicaciones conectadas: autoriza mediante OAuth',
        description: 'Las aplicaciones de terceros usan OAuth con el código de autorización y PKCE para obtener tokens. La pantalla de consentimiento enumera los permisos en el idioma del usuario, o en inglés si falta una traducción. El usuario puede consultar y revocar las autorizaciones desde la página de aplicaciones conectadas de su cuenta. Los tokens revocados dejan de funcionar.',
      },
    },
    {
      slug: 'wiki-toolkit',
      label: 'Conjunto de herramientas Wiki',
      meta: {
        title: 'Herramientas Wiki locales: REZICS no recibe el texto completo',
        description: 'El conjunto de herramientas Wiki de código abierto divide archivos TXT y EPUB en fragmentos verificables en tu ordenador. El agente de IA que elijas extrae personajes y sucesos. REZICS solo recibe propuestas con ubicaciones y citas breves, nunca el texto completo.',
      },
    },
    {
      slug: 'zones',
      label: 'Temas de Zone',
      meta: {
        title: 'Temas y código de presentación de Zone',
        description: 'Cada Zone puede diseñar su sitio con ajustes de tema y módulos, o añadir código de presentación a ranuras con nombre. El código se ejecuta después de una revisión independiente y de fijar su hash. Los lectores pueden volver al diseño estándar cuando quieran.',
      },
    },
    {
      slug: 'open-source',
      label: 'Código abierto',
      meta: {
        title: 'Código abierto: AGPL y Apache',
        description: 'El código fuente de la plataforma REZICS está disponible bajo AGPL-3.0 y permite ejecutar todos los servicios en local. Los paquetes independientes, como las herramientas Wiki y el formato de documentos, usan Apache-2.0 y no requieren una cuenta de REZICS.',
      },
    },
  ],
  strings,
} satisfies MiniSite<DevelopersStrings>;
