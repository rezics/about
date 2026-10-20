// The games site (遊戲): every visible string of /games/ and its six inner pages.
// Design record: src/sites/games/SITE.md (section "v3"); sources for every claim:
// src/sites/games/facts.md. Example data (one fictional adventure game, its releases, versions
// and playthroughs) is always captioned 示意 on screen; it describes no real game. The one real
// work named is 《魔法禁書目錄》, text only, as an example of how relations are recorded.
import type { KindId, MiniSite } from '../schema';

export type Lang = 'zh' | 'ja' | 'en';
export type Platform = 'pc' | 'console' | 'handheld' | 'mobile';
export type Edition = 'std' | 'deluxe' | 'complete';

export interface Titled {
  title: string;
  body: string;
}

/** A section: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}

/** A large statement: the first half in ink, the second half muted. */
export interface Said {
  text: string;
  more: string;
  /** A sentence or two in body size under the statement. */
  note?: string;
}

/** One release of the example game, as the release filter shows it. */
export interface ExampleRelease {
  id: string;
  platform: Platform;
  edition: Edition;
  /** Shown inside the table cell when a cell holds more than one release (regions). */
  region?: string;
  langs: Lang[];
  /** A state instead of languages (announced, no date yet). */
  state?: string;
}

export type GamesStrings = {
  /** The line under every page's closing statement, above 前往 REZICS. */
  closingBody: string;
  /** Alternative text of the paper still-life photographs (public/images/sites/games/). */
  pictures: Record<'hero' | 'store' | 'library' | 'guides' | 'creators', string>;
  example: {
    langNames: Record<Lang, string>;
    platforms: Record<Platform, string>;
    editions: Record<Edition, string>;
    releases: ExampleRelease[];
  };
  landing: {
    hero: { headline: string; lede: string };
    releases: Head & { items: (Titled & { id: string })[]; caption: string; link: string };
    versions: Said;
    store: Head & { link: string };
    pages: Head & { lines: Record<string, string> };
    connections: Head & { tiles: { to: KindId; line: string }[] };
    closing: string;
  };
  releases: {
    hero: { headline: string; lead: string };
    filter: Head & {
      groups: { lang: string; platform: string };
      clear: string;
      none: string;
      result: string;
      resultNone: string;
      corner: string;
      caption: string;
    };
    states: Head & { items: Titled[] };
    languages: Head & { items: Titled[] };
    bundles: Head & { tiles: Titled[]; caption: string };
    requirements: Head & { tiles: Titled[] };
    offers: Said;
    closing: string;
  };
  store: {
    hero: { headline: string; lead: string };
    checkout: Head & { items: Titled[] };
    purchase: Head & { steps: Titled[] };
    keep: Head & { lead: string; more: string };
    privacy: Said;
    refuses: Head & { items: Titled[] };
    closing: string;
  };
  library: {
    hero: { headline: string; lead: string };
    status: Head & { items: Titled[] };
    slots: Head & { columns: [string, string, string]; rows: { slot: string; release: string; state: string }[]; caption: string };
    together: Head & { tiles: { to: KindId; name: string; at: string }[]; caption: string };
    playtime: Head & { items: Titled[]; note: string };
    takeout: Said;
    closing: string;
  };
  reviews: {
    hero: { headline: string; lead: string };
    versions: Head & { tiles: Titled[]; caption: string };
    who: Head & { items: Titled[] };
    targets: Head & { tiles: Titled[] };
    rules: Head & { items: Titled[] };
    talk: Said;
    closing: string;
  };
  guides: {
    hero: { headline: string; lead: string };
    fog: Head;
    guides: Head & { lead: string; more: string };
    rules: Head & { items: Titled[] };
    adaptations: Head & { lead: string; chain: { to: KindId; name: string; line: string; rel?: string }[]; note: string; caption: string };
    zone: Said;
    closing: string;
  };
  creators: {
    hero: { headline: string; lead: string };
    rights: Head & { items: Titled[] };
    ledger: Head & { rows: { label: string; op?: string; total?: boolean }[]; note: string; reserve: string; caption: string };
    name: Head & { tiles: { to?: KindId; name: string; role: string }[]; caption: string };
    home: Head & { lead: string; more: string };
    rules: Said;
    closing: string;
  };
};

const strings: GamesStrings = {
  closingBody: 'Encuentra ediciones, registra tus partidas, escribe reseñas y compra juegos a creadores independientes con una sola cuenta.',
  pictures: {
    hero: 'Sobre un fondo blanco cálido, una lámina azul grande se abre en abanico desde una esquina en tonos azules, violetas y verde azulado.',
    store: 'Una hoja azul claro atraviesa una ranura cortada en una lámina azul y se curva suavemente en la parte inferior.',
    library: 'Una caja baja de papel azul tiene una fila de ranuras. Sobresalen hojas azules, celestes, rosas y verdes, y la última ranura está vacía.',
    guides: 'Una tira larga de papel azul está plegada varias veces. Los tres primeros pliegues están abiertos y los demás forman una pila cubierta por una hoja blanca.',
    creators: 'Una lámina azul doblada forma un pequeño puesto. A su lado hay una hoja violeta y otra celeste.',
  },
  example: {
    langNames: { zh: 'Chino tradicional', ja: 'Japonés', en: 'Inglés' },
    platforms: { pc: 'PC', console: 'Consola', handheld: 'Consola portátil', mobile: 'Móvil' },
    editions: { std: 'Edición estándar', deluxe: 'Edición deluxe', complete: 'Edición completa' },
    releases: [
      { id: 'pc-std', platform: 'pc', edition: 'std', langs: ['zh', 'ja', 'en'] },
      { id: 'pc-deluxe', platform: 'pc', edition: 'deluxe', langs: ['zh', 'ja', 'en'] },
      { id: 'console-std', platform: 'console', edition: 'std', langs: ['ja', 'en'] },
      { id: 'console-complete', platform: 'console', edition: 'complete', langs: ['zh', 'ja', 'en'] },
      { id: 'handheld-asia', platform: 'handheld', edition: 'std', region: 'Edición asiática', langs: ['zh', 'ja'] },
      { id: 'handheld-japan', platform: 'handheld', edition: 'std', region: 'Edición japonesa', langs: ['ja'] },
      { id: 'handheld-complete', platform: 'handheld', edition: 'complete', langs: ['ja'] },
      { id: 'mobile-std', platform: 'mobile', edition: 'std', langs: [], state: 'Anunciado' },
    ],
  },

  landing: {
    hero: {
      headline: 'Cada juego y cada edición, bien registrados.',
      lede: 'Las ediciones, versiones e idiomas de cada plataforma se registran por separado. Las valoraciones indican la edición, y las guías y Wiki+ están en la página del juego. También puedes comprar aquí juegos de creadores independientes y conservar sus archivos.',
    },
    releases: {
      label: 'Ediciones',
      headline: 'Cada edición de un juego se registra por separado.',
      lead: 'PC, consolas, consolas portátiles y móviles tienen sus propias ediciones. Las ediciones regionales, deluxe y completas también se registran por separado, con sus idiomas, requisitos y disponibilidad.',
      items: [
        { id: 'handheld-asia', title: 'Consola portátil, edición asiática', body: 'Texto: chino tradicional y japonés. Región: Asia. La edición japonesa tiene su propio registro y solo incluye texto en japonés.' },
        { id: 'pc-std', title: 'PC, edición estándar', body: 'Texto y subtítulos: chino tradicional, japonés e inglés. Voces: japonés. Los tres idiomas se registran por separado.' },
        { id: 'console-complete', title: 'Consola, edición completa', body: 'Texto: chino tradicional, japonés e inglés. Contenido: juego base y todas las expansiones, cada uno con su propia página y valoraciones.' },
        { id: 'mobile-std', title: 'Móvil, edición estándar', body: 'Idioma: desconocido. Estado: anunciado. Si el dato no está confirmado, no se completa con el idioma de otra plataforma.' },
      ],
      caption: 'Ejemplo: cuatro ediciones de un juego de aventuras ficticio.',
      link: 'Cómo encontrar la edición que puedes jugar',
    },
    versions: {
      text: 'Las valoraciones corresponden a cada versión. Las descargas no determinan la clasificación.',
      more: 'Lo que no se sabe aparece como «desconocido», sin conjeturas.',
    },
    store: {
      label: 'Tienda',
      headline: 'Compras un juego y conservas sus archivos.',
      lead: 'La tienda de REZICS vende juegos y novelas visuales de creadores independientes con contrato. No hay DRM ni lanzador. Los creadores conservan los derechos de autor y el informe de pagos detalla cada deducción. En la misma página, los jugadores encuentran valoraciones, debates y Wiki+.',
      link: 'Cómo funcionan la tienda y las compras',
    },
    pages: {
      label: 'Seis páginas',
      headline: 'Seis temas, cada uno en su página.',
      lines: {
        releases: 'Filtra por idioma, plataforma y versión dentro de cada edición',
        store: 'Paga una vez y vuelve a descargar según las condiciones de compra',
        library: 'Registra cada partida y la plataforma en que jugaste',
        reviews: 'Cada valoración indica la versión y quién la hizo',
        guides: 'Muestra el contenido según tu progreso y enlaza con cada adaptación',
        creators: 'Conserva tus derechos de autor y consulta cada deducción',
      },
    },
    connections: {
      label: 'Tipos relacionados',
      headline: 'Cinco tipos relacionados con los juegos',
      lead: 'Las adaptaciones, las obras originales y sus creadores relacionan los juegos con otros tipos de obra. Sigue una novela hasta el juego y registra por separado tu progreso en cada uno.',
      tiles: [
        { to: 'visual-novels', line: 'Elige ediciones por idioma, plataforma y contenido' },
        { to: 'books', line: 'Novelas originales y derivadas de juegos' },
        { to: 'anime', line: 'Juegos adaptados al anime y anime adaptado a juegos' },
        { to: 'manga', line: 'El manga de la misma historia enlaza con el juego' },
        { to: 'software', line: 'Relaciona motores, herramientas y módulos con la versión del juego' },
      ],
    },
    closing: 'Encuentra la edición adecuada para tu próximo juego.',
  },

  releases: {
    hero: {
      headline: 'Encuentra la edición que puedes jugar.',
      lead: 'El idioma que quieres y el dispositivo que tienes deben coincidir en una misma edición. REZICS registra cada plataforma, región y versión por separado, y las compara al filtrar.',
    },
    filter: {
      label: 'Filtros',
      headline: 'Los filtros se aplican a cada edición.',
      lead: 'Si eliges chino tradicional y consola portátil, solo aparecen las ediciones que cumplen ambas condiciones. No basta con que otra versión tenga chino tradicional o que otra plataforma tenga una edición portátil.',
      groups: { lang: 'Idioma', platform: 'Plataforma' },
      clear: 'Borrar filtros',
      none: 'No hay ninguna edición',
      result: 'Ediciones que cumplen los filtros: {count}',
      resultNone: 'Ninguna edición cumple todas estas condiciones.',
      corner: 'Plataforma / versión',
      caption: 'Ejemplo: una edición de un juego de aventuras ficticio.',
    },
    states: {
      label: 'Estado de la edición',
      headline: 'Cada paso queda registrado, desde el anuncio hasta la retirada.',
      lead: 'Las fechas pueden cambiar, pero los registros se conservan. Sigue un juego para saber en qué etapa está.',
      items: [
        { title: 'Anuncio', body: 'El anuncio oficial del juego o de la versión incluye una fuente.' },
        { title: 'Fecha prevista', body: 'Se ha anunciado una fecha de lanzamiento. Es una previsión, no una confirmación de disponibilidad.' },
        { title: 'Disponible', body: 'Se confirma que puedes comprarlo y jugarlo, con la fecha correspondiente.' },
        { title: 'Aplazamiento', body: 'La fecha ha cambiado, pero la anterior permanece en el registro.' },
        { title: 'Retirada', body: 'Deja de venderse o distribuirse, con la fecha en que ocurre.' },
      ],
    },
    languages: {
      label: 'Idioma',
      headline: 'Texto, voces y subtítulos: tres idiomas.',
      lead: 'Que un juego esté «en chino» puede referirse solo a los subtítulos o también a las voces. REZICS registra por separado los idiomas del texto, las voces y los subtítulos. Un título traducido tampoco significa que exista una edición traducida.',
      items: [
        { title: 'Traducción oficial al chino', body: 'La proporciona la distribuidora y se registra en la edición que la incluye.' },
        { title: 'Traducción de la comunidad al chino', body: 'Incluye el nombre del equipo, la versión de referencia y el contenido traducido. Nunca se marca como oficial.' },
        { title: 'Idiomas añadidos después', body: 'Un idioma añadido en una actualización se registra como una nueva versión lingüística y enlaza con su origen. El registro original de la edición no cambia.' },
      ],
    },
    bundles: {
      label: 'Colecciones y expansiones',
      headline: 'Una edición puede incluir varias obras.',
      lead: 'Cada obra de una colección conserva su propia identidad. Compras una edición, pero las valoraciones y los debates siguen en cada obra incluida.',
      tiles: [
        { title: 'Edición completa', body: 'Incluye el juego base y todas las expansiones' },
        { title: 'Juego base', body: 'El juego, con sus propias valoraciones' },
        { title: 'Expansión', body: 'El contenido independiente tiene su propia página y enlaza con el juego base' },
        { title: 'Banda sonora', body: 'Una obra musical que aparece en la página de su compositor' },
        { title: 'Remake', body: 'Una obra distinta que enlaza con la original' },
        { title: 'Módulo', body: 'Indica qué versión del juego requiere' },
      ],
      caption: 'Ejemplo: una edición completa y las obras relacionadas. Si el contenido no cambia y se adapta a otra plataforma, es una nueva edición del mismo juego.',
    },
    requirements: {
      label: 'Requisitos',
      headline: 'Los requisitos indican quién los declara.',
      lead: 'Los requisitos oficiales y los resultados reales pueden diferir en el mismo equipo. Se muestran juntos, con sus fuentes y fechas.',
      tiles: [
        { title: 'Requisitos oficiales', body: 'Los requisitos mínimos y recomendados, con su fuente y la versión del juego' },
        { title: 'Pruebas de jugadores', body: 'El hardware, los ajustes, el resultado y la fecha de la prueba' },
        { title: 'Aún no se sabe', body: 'Desconocido, incompatible y desactualizado son tres estados distintos' },
      ],
    },
    offers: {
      text: 'Cuando no hay datos,',
      more: 'se indica «desconocido».',
      note: 'La disponibilidad y el precio de cada tienda y región tienen su propio registro fechado, para que puedas ver cómo cambian. Si no hay datos, no se presenta el precio de una tienda como si fuera el de todas.',
    },
    closing: 'El idioma y el dispositivo coinciden en una misma edición.',
  },

  store: {
    hero: {
      headline: 'Paga una vez y conserva los archivos.',
      lead: 'Los juegos y las novelas visuales de aquí son de creadores independientes con contrato con REZICS. No hay DRM ni lanzador. Puedes volver a descargar los juegos que has comprado según las condiciones de compra.',
    },
    checkout: {
      label: 'Antes de pagar',
      headline: 'La página muestra estos ocho datos antes de pagar.',
      lead: 'La página de cada juego muestra estos datos antes de que pagues.',
      items: [
        { title: 'Versión e idioma', body: 'Qué versión compras y qué idiomas incluye.' },
        { title: 'Compatibilidad', body: 'Qué plataformas admite y qué requisitos necesita.' },
        { title: 'Precio con impuestos', body: 'El precio total con impuestos aparece antes de pagar.' },
        { title: 'Vendedor', body: 'Quién vende el juego y quién recibe tu pago.' },
        { title: 'Licencia', body: 'Qué licencia de uso recibes.' },
        { title: 'Condiciones de reembolso', body: 'Cuándo puedes solicitar un reembolso y cómo hacerlo.' },
        { title: 'Cuentas externas', body: 'Si el juego requiere otra cuenta o un entorno de ejecución, se indica antes de la compra.' },
        { title: 'Declaración sobre el uso de IA', body: 'Los creadores declaran si usaron IA para las imágenes, el texto o las traducciones.' },
      ],
    },
    purchase: {
      label: 'Una sola compra',
      headline: 'Seis pasos, desde la prueba hasta la descarga de nuevo.',
      lead: 'Puedes comprar el juego en su propia página, junto a sus valoraciones, debates y Wiki+.',
      steps: [
        { title: 'Probar', body: 'Prueba el juego antes de decidir' },
        { title: 'Pagar', body: 'Paga una vez y guarda el recibo en tu historial' },
        { title: 'Descargar', body: 'Descarga los archivos para tu plataforma' },
        { title: 'Actualizar', body: 'Las correcciones incluyen notas de actualización' },
        { title: 'Volver a descargar', body: 'Inicia sesión y vuelve a descargarlo en otro equipo' },
        { title: 'Si se retira', body: 'La retirada habitual mantiene la licencia según las condiciones originales' },
      ],
    },
    keep: {
      label: 'Lo que conservas',
      headline: 'Tres cosas que conservas',
      lead: 'Conservas los archivos del juego sin DRM y puedes volver a descargarlos según las condiciones de compra. Los recibos quedan en tu historial de compras. También conservas la licencia de uso indicada antes de pagar, junto con sus condiciones.',
      more: 'Que no haya DRM no significa que puedas revender o distribuir los archivos. Recibes una licencia para uso personal. Los reembolsos siguen las condiciones de la página, sin afectar los derechos que te concede la ley local.',
    },
    privacy: {
      text: 'El juego que compras',
      more: 'no queda a la vista de sus creadores en tu biblioteca.',
      note: 'Los creadores reciben la información necesaria para gestionar los pagos y la atención al cliente. Una compra no les da acceso a tu historial de partidas, tus listas ni a otras actividades.',
    },
    refuses: {
      label: 'Lo que la tienda no hace',
      headline: 'Lo que la tienda no hace',
      items: [
        { title: 'Sin lanzador', body: 'No tienes que instalar un programa de REZICS para jugar a los juegos que compras.' },
        { title: 'Sin DRM', body: 'REZICS no añade comprobaciones de activación a los archivos.' },
        { title: 'Sin contenido para adultos', body: 'La tienda no vende obras clasificadas R18 o R18G, aunque se cambie la etiqueta o se distribuya como parche.' },
        { title: 'No cualquiera puede publicar', body: 'Los juegos de la tienda son de creadores con contrato con REZICS. Los derechos se verifican antes de publicar cada uno.' },
      ],
    },
    closing: 'Todo está claro antes de pagar y permanece contigo después.',
  },

  library: {
    hero: {
      headline: 'Tu biblioteca de juegos reúne plataformas y tipos de obra.',
      lead: 'Registra en un mismo lugar los juegos de PC, consola, portátil y móvil. Cada partida indica la plataforma y la versión. También tienes cerca los libros que lees y el anime que sigues.',
    },
    status: {
      label: 'Estado',
      headline: 'Cada estado queda registrado, desde «Por jugar» hasta «Terminado».',
      items: [
        { title: 'Por jugar', body: 'Añade un juego a «Por jugar» para seguirlo. Recibirás un aviso cuando salga una nueva versión en un idioma que entiendas.' },
        { title: 'Jugando', body: 'En los juegos con capítulos, registra tu progreso y la versión. Los debates y Wiki+ ocultan los destripes según ese progreso.' },
        { title: 'En pausa', body: 'Déjalo por ahora sin abandonarlo. Tu progreso queda guardado para que puedas retomarlo donde lo dejaste.' },
        { title: 'Terminado', body: 'El juego terminado se registra como una obra. Las expansiones incluidas en una edición completa se registran por separado.' },
        { title: 'Abandonado', body: 'Si dejas de jugar, márcalo como abandonado. El registro se conserva y puedes empezar otra partida cuando quieras.' },
      ],
    },
    slots: {
      label: 'Historial de partidas',
      headline: 'Cada partida tiene su propio registro.',
      lead: 'Cuando vuelves a jugar, empieza una partida nueva y la anterior se conserva. Cada partida registra la plataforma, la versión y el progreso.',
      columns: ['Partida', 'Plataformas y versiones', 'Estado'],
      rows: [
        { slot: 'Primera partida', release: 'Consola portátil, edición asiática', state: 'Terminado' },
        { slot: 'Segunda partida', release: 'PC, versión 1.2', state: 'Jugando, capítulo cinco' },
        { slot: 'Tercera partida', release: 'Consola, edición completa', state: 'En pausa, en una expansión' },
      ],
      caption: 'Ejemplo: las ediciones que tienes se registran por separado. Comprar un juego no significa que lo hayas jugado.',
    },
    together: {
      label: 'Una sola biblioteca',
      headline: 'Libros, anime, manga y juegos, en una misma biblioteca.',
      lead: 'Cada tipo de obra registra el progreso a su manera. Las listas también pueden combinar obras: una lista de juegos para el verano puede incluir un juego, su novela original y el anime basado en ella. Ordénalos, añade notas y exporta la lista completa.',
      tiles: [
        { to: 'games', name: 'Juego', at: 'Capítulo cinco' },
        { to: 'books', name: 'Novela', at: 'Tomo tres' },
        { to: 'anime', name: 'Anime', at: 'Episodio ocho' },
        { to: 'manga', name: 'Manga', at: 'Capítulo cuarenta y dos' },
        { to: 'visual-novels', name: 'Novela visual', at: 'Ruta dos' },
      ],
      caption: 'Ejemplo: una persona registra cinco tipos de obra con sus propias unidades.',
    },
    playtime: {
      label: 'Duración de juego',
      headline: 'El tiempo para terminar se calcula por plataforma y estilo de juego.',
      lead: 'Para saber si tienes tiempo para jugar esta noche, necesitas una estimación fiable. REZICS solo utiliza registros que los jugadores aportan voluntariamente.',
      items: [
        { title: 'Por plataforma', body: 'El tiempo en PC y en consolas portátiles se calcula por separado. Los registros sin plataforma forman su propio grupo.' },
        { title: 'Por estilo de juego', body: 'Completar la historia principal y conseguir todos los objetos son objetivos distintos.' },
        { title: 'Solo partidas terminadas', body: 'Los registros sin tiempo o sin completar el juego no cuentan para la media.' },
        { title: 'Con cantidad de registros', body: 'La media incluye el intervalo de la mediana y el número de registros.' },
      ],
      note: 'Tu tiempo de juego es privado por defecto. Solo se incluye en las estadísticas si decides compartirlo, y únicamente se publican los resultados agregados.',
    },
    takeout: {
      text: 'Tu biblioteca es tuya,',
      more: 'y puedes llevártela cuando quieras.',
      note: 'Exportar es gratis. Los registros importados conservan su origen y sus correspondencias. También puedes solicitar una exportación si no puedes acceder a tu cuenta.',
    },
    closing: 'Cada partida queda registrada en tu propia biblioteca.',
  },

  reviews: {
    hero: {
      headline: 'Indica qué versión valoras antes de puntuar.',
      lead: 'Los juegos se actualizan después de su lanzamiento. La puntuación de la versión 1.0 no debería eclipsar la de la 2.0, y los gustos de una comunidad no representan a todo el mundo. Por eso, cada valoración indica la versión y el grupo de personas que la hizo.',
    },
    versions: {
      label: 'Versión',
      headline: 'Cada versión tiene sus propias valoraciones.',
      lead: 'Tu valoración corresponde a la versión que jugaste. La puntuación conjunta de varias versiones es otra cifra y explica cómo se calcula.',
      tiles: [
        { title: 'Versión 1.0', body: 'La versión del día del lanzamiento' },
        { title: 'Versión 1.1', body: 'Actualización que corrige un problema con las partidas guardadas' },
        { title: 'Versión 1.2', body: 'Añade niveles nuevos' },
        { title: 'Versión 2.0', body: 'Una actualización importante' },
        { title: 'Edición completa', body: 'Edición que incluye todas las expansiones' },
      ],
      caption: 'Ejemplo: versiones de un juego ficticio.',
    },
    who: {
      label: 'Grupo',
      headline: 'Quién está detrás de cada valoración',
      lead: 'Puedes comparar las valoraciones de toda la plataforma, de las comunidades a las que perteneces y de las comunidades con más valoraciones. Las valoraciones recientes y las de todos los tiempos responden a preguntas distintas y no se mezclan.',
      items: [
        { title: 'Cantidad y distribución', body: 'Cada puntuación muestra la cantidad y la distribución.' },
        { title: 'Aún faltan valoraciones', body: 'Si aún no hay suficientes valoraciones, solo se muestran la cantidad y la distribución, sin calcular la media.' },
        { title: 'Valoraciones importadas', body: 'Las valoraciones importadas de otros sitios se indican por separado y no se mezclan con las de REZICS.' },
      ],
    },
    targets: {
      label: 'Qué valoras',
      headline: 'Valora la historia, la traducción o la producción.',
      lead: 'Primero, indica qué valoras. Puedes decir por separado que la historia es buena y que la traducción al chino es deficiente. También puedes escribir una reseña sin puntuar.',
      tiles: [
        { title: 'Historia', body: 'Argumento y personajes' },
        { title: 'Traducción', body: 'La calidad de la traducción en un idioma' },
        { title: 'Producción', body: 'Jugabilidad, gráficos, música y aspectos técnicos' },
        { title: 'Esta versión', body: 'El rendimiento real en una plataforma y versión concretas' },
        { title: 'Personaje en esta versión', body: 'No afecta a la valoración del personaje' },
      ],
    },
    rules: {
      label: 'Clasificación',
      headline: 'La clasificación explica cómo se calcula.',
      items: [
        { title: 'Sin contar descargas', body: 'REZICS no registra las descargas, así que no las muestra ni las usa para ordenar.' },
        { title: 'Las recomendaciones explican por qué', body: 'Cuando una comunidad recomienda un juego, enlaza con el registro de esa decisión.' },
        { title: 'Popularidad no significa exactitud', body: 'La cantidad de valoraciones solo afecta al orden. No cambia la clasificación ni los datos del juego.' },
        { title: 'Los destripes se marcan por separado', body: 'La comunidad puede votar si un contenido revela la trama. Esto se registra por separado de las advertencias de quien lo escribió.' },
      ],
    },
    talk: {
      text: 'Debate, reseñas y correcciones,',
      more: 'cada conversación en su espacio.',
      note: 'Las conversaciones sobre guías, las respuestas a una reseña y los informes de datos incorrectos tienen espacios propios. Al pasar de uno a otro, se mantienen la versión elegida y el progreso de los destripes.',
    },
    closing: 'Cada valoración tiene una versión y un grupo.',
  },

  guides: {
    hero: {
      headline: 'Consulta el contenido hasta donde has jugado.',
      lead: 'Los personajes, lugares, niveles y guías enlazan con el mismo juego. Wiki+ oculta los destripes posteriores según el capítulo o la ruta que hayas alcanzado.',
    },
    fog: {
      label: 'Destripes',
      headline: 'Oculta lo que aún no has jugado.',
      lead: 'Muestra personajes, lugares y sucesos hasta el punto que elijas. Oculta lo que viene después, pero puedes mostrarlo todo cuando quieras. Por defecto, los visitantes sin iniciar sesión no ven revelaciones de la trama.',
    },
    guides: {
      label: 'Guías',
      headline: 'Las guías indican a qué versión se aplican.',
      lead: 'Un mismo nivel puede jugarse de forma muy distinta en las versiones 1.0 y 2.0. Las guías indican la versión y la plataforma a las que se aplican, para que sepas para cuál se escribió una vez que el juego se actualiza.',
      more: 'Las colecciones de módulos de la comunidad también indican la versión del juego y si se ha comprobado la compatibilidad. Cada cambio queda registrado: puedes ver quién cambió qué, comparar versiones y restaurar una anterior.',
    },
    rules: {
      label: 'Wiki+',
      headline: 'Cinco reglas de Wiki+',
      items: [
        { title: 'Un dato, igual en todas partes', body: 'Las fichas de personajes, los filtros y las listas usan los mismos datos. Al corregirlos en un lugar, se actualizan en todos.' },
        { title: 'Los agentes de IA proponen y las personas revisan', body: 'Un agente puede proponer datos nuevos con sus fuentes. El contenido que propone no se muestra a los lectores hasta que una persona lo revisa.' },
        { title: 'Cada personaje tiene una sola página', body: 'Un personaje que aparece en un juego, una novela y un anime tiene una sola página. Las personas que le ponen voz aparecen junto al personaje y las obras.' },
        { title: 'Organiza el guion', body: 'Si una novela visual usa un formato de guion compatible, quien tenga el guion puede usar el conjunto de herramientas local en su propio ordenador para organizar personajes, lugares y sucesos por fragmentos y enviar propuestas. REZICS recibe propuestas con fuentes, nunca el texto completo del guion.' },
        { title: 'Puedes llevártelo todo', body: 'Puedes exportar el contenido de Wiki y el historial de cambios.' },
      ],
    },
    adaptations: {
      label: 'Adaptaciones',
      headline: 'Del original al juego, relación tras relación.',
      lead: 'Por ejemplo, «A Certain Magical Index», la novela ligera de Kazuma Kamachi, tiene una adaptación al manga, tres temporadas de anime para televisión y una película. También hay juegos de lucha, una novela visual y un juego de rol para móviles. En REZICS, cada uno es una obra que enlaza con el original mediante la relación «adaptación de». El mismo personaje conserva su identidad en todas ellas.',
      chain: [
        { to: 'books', name: 'Novela ligera', line: 'Original, serie principal, Nuevo Testamento y Génesis Creativa' },
        { to: 'manga', name: 'Manga', line: 'En publicación desde 2007', rel: 'Adaptación de' },
        { to: 'anime', name: 'Anime', line: 'Tres temporadas de anime y una película', rel: 'Adaptación de' },
        { to: 'visual-novels', name: 'Novela visual', line: 'Juego de 2013', rel: 'Adaptación de' },
        { to: 'games', name: 'Juego', line: 'Juego de lucha y juego de rol para móviles', rel: 'Adaptación de' },
      ],
      note: 'El orden de publicación y el orden recomendado de lectura o juego se registran por separado. También puedes seguir la cronología de la historia y empezar por los sucesos más antiguos.',
      caption: 'Ejemplo con «A Certain Magical Index» para mostrar cómo se registran las relaciones entre obras.',
    },
    zone: {
      text: 'La comunidad de un juego',
      more: 'puede tener su propio sitio.',
      note: 'Una comunidad de juego tiene miembros, normas y debates. Zone es el sitio que crea la propia comunidad, con rutas, navegación y diseño personalizados. Allí publica guías y Wiki+, mientras que los datos de personajes y juegos proceden directamente del catálogo de REZICS.',
    },
    closing: 'Consulta el contenido hasta donde has jugado y sigue la historia en cada adaptación.',
  },

  creators: {
    hero: {
      headline: 'Publica tu juego y conserva los derechos de autor.',
      lead: 'REZICS firma contratos con creadores independientes para distribuir sus juegos y novelas visuales. Los jugadores reciben archivos sin DRM y actualizaciones. Tú recibes un informe de pagos detallado y una identidad que reúne todas tus obras.',
    },
    rights: {
      label: 'Derechos',
      headline: 'Lo que conservas y lo que autorizas',
      items: [
        { title: 'Derechos de autor', body: 'El juego sigue siendo tuyo. REZICS recibe una licencia no exclusiva para alojar, vender y entregar los archivos durante el periodo y en las regiones acordadas.' },
        { title: 'Acciones que requieren permiso', body: 'La traducción, las adaptaciones, los cambios importantes, las nuevas versiones y el uso de tu obra para entrenar IA requieren tu permiso.' },
        { title: 'Declaración de licencia', body: 'La licencia que declares para una obra se registra junto con su versión, alcance y fecha.' },
        { title: 'Al terminar el contrato', body: 'Las nuevas ventas se detienen según el contrato y se liquidan las cantidades ya devengadas. Los jugadores conservan la licencia según las condiciones originales y la legislación aplicable.' },
      ],
    },
    ledger: {
      label: 'Informe de pagos',
      headline: 'El informe detalla cada importe.',
      rows: [
        { label: 'Importe pagado por los jugadores' },
        { label: 'Impuestos recaudados', op: 'Menos' },
        { label: 'Comisiones de pago y recaudación', op: 'Menos' },
        { label: 'Reembolsos y contracargos', op: 'Menos' },
        { label: 'Ingresos netos', op: 'Igual a', total: true },
        { label: 'Tu parte' },
      ],
      note: 'No se cobra dos veces el mismo concepto. Los servidores y el alojamiento, los salarios, el marketing y los impuestos sobre la renta de REZICS no se descuentan de tus ingresos.',
      reserve: 'Si se retiene una cantidad, se indican el motivo, el importe o límite, la fecha de revisión y las condiciones para liberarla.',
      caption: 'Ejemplo de informe de pagos. El contrato especifica las comisiones aplicables, las regiones de venta y los ajustes.',
    },
    name: {
      label: 'Un nombre',
      headline: 'Un nombre reúne todo lo que has creado.',
      lead: 'Los juegos que desarrollas, las novelas que escribes, las bandas sonoras que compones y el anime al que pones voz aparecen bajo una misma identidad. Quien te sigue puede ver tus nuevas obras y anuncios.',
      tiles: [
        { to: 'games', name: 'Juego', role: 'Desarrollo' },
        { to: 'books', name: 'Novela', role: 'Autoría' },
        { name: 'Banda sonora', role: 'Composición' },
        { to: 'anime', name: 'Anime', role: 'Interpretación de voz' },
      ],
      caption: 'Cada nombre de los créditos enlaza con un perfil de obras como este.',
    },
    home: {
      label: 'Comunidad y sitio',
      headline: 'Después de publicarlo, el juego tiene su propia comunidad y sitio.',
      lead: 'Crea una comunidad para que los jugadores debatan y un Zone como sitio oficial. Los anuncios, las ediciones y las notas de actualización se publican directamente en el catálogo. Quienes siguen tu juego reciben avisos en su idioma.',
      more: 'Antes de lanzar una nueva versión, prepara un paquete con imágenes, información y calendario que los medios y jugadores puedan citar. También puedes usar el conjunto de herramientas local para leer tu propio guion, organizar personajes y sucesos y crear el Wiki+ del juego. El texto completo del guion no se envía a REZICS.',
    },
    rules: {
      text: 'Antes de vender,',
      more: 'déjalo todo claro.',
      note: 'Las pruebas, descripciones, capturas e información de compatibilidad deben ser precisas. Indica antes de la compra si el juego requiere una cuenta externa o un entorno de ejecución. Declara con exactitud el uso de IA. Las obras con clasificación para adultos no pueden publicarse en la tienda.',
    },
    closing: 'Tus obras son tuyas y las cuentas están claras.',
  },
};

export default {
  id: 'games',
  base: '/games/',
  name: 'Juego',
  theme: { kind: 'games' },
  next: 'software',
  pages: [
    {
      slug: '',
      label: 'Resumen',
      meta: {
        title: 'Juegos de REZICS: catálogo, tienda y biblioteca',
        description:
          'Cada juego tiene una sola página en REZICS, con cada plataforma y versión registrada por separado. Encuentra la edición que puedes jugar en tu dispositivo y en tu idioma, registra cada partida y compra archivos que puedas conservar de creadores independientes.',
      },
    },
    {
      slug: 'releases',
      label: 'Plataformas y versiones',
      meta: {
        title: 'Plataformas y versiones: encuentra la edición que puedes jugar',
        description:
          'Las versiones para PC, consola, portátil y móvil, así como las ediciones regionales, deluxe y completas, tienen su propio registro en REZICS. Los idiomas, requisitos y datos de disponibilidad se indican por separado y los filtros se aplican a cada edición.',
      },
    },
    {
      slug: 'store',
      label: 'Tienda',
      meta: {
        title: 'Tienda de REZICS: juegos que puedes conservar',
        description:
          'REZICS distribuye juegos y novelas visuales de creadores independientes con contrato. Sin DRM ni lanzador. Puedes volver a descargar tus compras según las condiciones acordadas. Antes de pagar, consulta la versión, los idiomas, los requisitos, el precio con impuestos y las condiciones de reembolso.',
      },
    },
    {
      slug: 'library',
      label: 'Biblioteca de juegos',
      meta: {
        title: 'Biblioteca de juegos: registra cada partida',
        description:
          'Guarda los juegos que quieres jugar, estás jugando, has pausado, terminado o abandonado en una misma biblioteca. Cada partida registra la plataforma y la versión. También puedes registrar libros, anime y manga, y exportarlo todo gratis cuando quieras.',
      },
    },
    {
      slug: 'reviews',
      label: 'Valoraciones y reseñas',
      meta: {
        title: 'Valoraciones y reseñas de juegos: indica la versión',
        description:
          'Las valoraciones de juegos en REZICS indican la versión y el grupo de personas que las hizo, junto con su cantidad y distribución. Puedes escribir reseñas sin puntuación y valorar por separado la historia, la traducción o la producción. Las descargas no determinan la clasificación.',
      },
    },
    {
      slug: 'guides',
      label: 'Guías y Wiki+',
      meta: {
        title: 'Guías, Wiki+ y adaptaciones',
        description:
          'Las guías, los personajes y los lugares del juego están en Wiki+. Los destripes se ocultan según tu progreso y cada cambio queda registrado. Las obras adaptadas a novelas, anime y manga enlazan con el mismo juego. La comunidad también puede crear su propio sitio.',
      },
    },
    {
      slug: 'creators',
      label: 'Creadores',
      meta: {
        title: 'Creadores: publica tu juego en REZICS',
        description:
          'Los creadores independientes distribuyen juegos y novelas visuales a través de REZICS. Conservan los derechos de autor, ofrecen archivos y actualizaciones sin DRM y reciben informes que detallan impuestos, comisiones y reembolsos. Una misma identidad reúne tus juegos, novelas y música.',
      },
    },
  ],
  strings,
} satisfies MiniSite<GamesStrings>;
