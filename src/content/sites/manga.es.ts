// The manga site (漫畫): every visible string of /manga/ and its six inner pages, read as the
// site's chapters 第 1 話 to 第 6 話. Design record: src/sites/manga/SITE.md ("v3"); sources for
// every claim: src/sites/manga/facts.md.
import type { Item, KindId, MiniSite, ModuleId, PartId } from '../schema';

/** A section head in the v3 grid: eyebrow in columns 1 to 3, serif h2, optional lead. */
export interface MangaHead {
  eyebrow: string;
  heading: string;
  lead?: string;
}
/** A large serif statement: the first half in ink, the second in muted ink. */
export interface MangaStatement {
  text: string;
  muted?: string;
}
/** One of this site's paper still-life pictures (public/images/sites/manga/). */
export interface MangaPicture {
  name: 'hero' | 'series' | 'progress' | 'adaptations' | 'publish';
  alt: string;
}
/** The intro of an inner page: chapter eyebrow, h1 and lede. */
export interface MangaIntro {
  eyebrow: string;
  headline: string;
  lede: string;
}
/** The closing: a final statement, the action into REZICS, then the next page or site. */
export interface MangaClosing {
  statement: string;
  /** The small label of the next link, e.g. 下一話　第 2 話. */
  nextLabel: string;
  /** The next page's or site's name. */
  nextName: string;
}

export interface MangaStrings {
  /** The action into REZICS (the product's address comes from `site.productUrl`). */
  action: string;
  landing: {
    hero: Omit<MangaIntro, 'eyebrow'> & { picture: MangaPicture };
    parts: MangaHead & { notes: Partial<Record<PartId, string>> };
    pages: MangaHead & { tiles: { slug: string; chapter: string; line: string }[] };
    statement: MangaStatement;
    neighbours: MangaHead & { tiles: { kind: KindId; line: string }[] };
    closing: MangaClosing;
  };
  series: {
    intro: MangaIntro;
    levels: MangaHead & { picture: MangaPicture; items: Item[] };
    catalogue: MangaHead & { items: Item[]; footnotes: string[] };
    names: MangaHead & { body: string[]; items: Item[] };
    closing: MangaClosing;
  };
  progress: {
    intro: MangaIntro;
    language: MangaHead & { picture: MangaPicture };
    caught: MangaHead & { items: Item[] };
    statement: MangaStatement;
    travels: MangaHead & { items: Item[]; footnote: string };
    closing: MangaClosing;
  };
  creators: {
    intro: MangaIntro;
    roles: MangaHead & { items: Item[]; footnotes: string[] };
    person: MangaHead & { tiles: { kind: KindId; line: string }[] };
    statement: MangaStatement;
    closing: MangaClosing;
  };
  adaptations: {
    intro: MangaIntro;
    example: MangaHead & { picture: MangaPicture; items: Item[]; footnote: string };
    relations: MangaHead & { items: Item[]; footnote: string };
    apart: MangaHead;
    statement: MangaStatement;
    closing: MangaClosing;
  };
  community: {
    intro: MangaIntro;
    spoilers: MangaHead & { items: Item[] };
    ratings: MangaHead;
    gather: MangaHead & { items: Item[]; footnote: string; tiles: { module: ModuleId; line: string }[] };
    closing: MangaClosing;
  };
  publish: {
    intro: MangaIntro;
    steps: MangaHead & { picture: MangaPicture; items: Item[] };
    decides: MangaHead & { items: Item[] };
    elsewhere: MangaHead;
    closing: MangaClosing;
  };
}

export default {
  id: 'manga',
  base: '/manga/',
  name: 'Manga',
  theme: { kind: 'manga' },
  pages: [
    {
      slug: '',
      label: 'Inicio',
      meta: {
        title: 'Manga: de la primera a la última entrega',
        description:
          'REZICS asigna una identidad a cada manga y reúne en ella cada entrega de la serie, los tomos y las traducciones en todos los idiomas. Recuerda por dónde vas, indica qué entrega falta en el idioma que elegiste y te permite hablar con quienes han llegado al mismo punto.',
      },
    },
    {
      slug: 'series',
      label: 'Serie',
      meta: {
        title: 'Tomos, entregas y traducciones de un manga',
        description:
          'La serie y cada tomo son obras, y cada entrega ocupa un lugar numerado dentro del tomo. Las ediciones recopilatorias indican qué tomos incluyen. Las ediciones japonesas y taiwanesas pertenecen a la misma obra y acreditan a sus traductores por separado, sin duplicar nada.',
      },
    },
    {
      slug: 'progress',
      label: 'Progreso',
      meta: {
        title: 'Progreso del manga: hasta dónde has leído',
        description:
          'Registra tu progreso por entrega, aunque cambies de tomo, edición o dispositivo. Si cambias el idioma de lectura, se conserva lo que ya has leído. Si la siguiente entrega aún no está disponible en tu idioma, sabrás cuál estás esperando.',
      },
    },
    {
      slug: 'creators',
      label: 'Autores',
      meta: {
        title: 'Autores de manga: historia, dibujo y traducción',
        description:
          'Cada crédito de un manga indica el papel de quien participa: historia, dibujo, ilustración o traducción. Una persona conserva la misma identidad en novelas, manga, anime y juegos. Síguela para ver sus nuevas obras y anuncios.',
      },
    },
    {
      slug: 'adaptations',
      label: 'Adaptaciones',
      meta: {
        title: 'Manga y adaptaciones: novelas, anime y juegos',
        description:
          'REZICS conecta cada manga con las obras de las que procede y las adaptaciones que ha inspirado. Cada obra tiene su propio progreso, valoraciones y límite de spoilers. Las relaciones pendientes también se indican.',
      },
    },
    {
      slug: 'community',
      label: 'Debates',
      meta: {
        title: 'Debates sobre manga, hasta donde has leído',
        description:
          'Cada entrega tiene su propio debate, y el contenido que aún no has leído permanece oculto. Las valoraciones indican si se refieren a la obra, un tomo o una traducción, junto con el número de participantes y la distribución. Los fans pueden crear una comunidad, montar un Zone y escribir una Wiki+ para la obra.',
      },
    },
    {
      slug: 'publish',
      label: 'Publicar',
      meta: {
        title: 'Publica tu manga por entregas en REZICS',
        description:
          'Publica tu manga en REZICS, incluso con entregas compuestas solo de imágenes. Programa su publicación según tu zona horaria, invita a colaboradores y configura sus permisos por separado. Las traducciones de otras personas solo se publican con tu consentimiento. Cada página se vincula a la original y puedes descargar una copia completa de la obra cuando quieras.',
      },
    },
  ],
  strings: {
    action: 'Ir a REZICS',
    landing: {
      hero: {
        headline: 'REZICS recuerda hasta qué entrega has leído.',
        lede: 'Los tomos, cada entrega de la serie y sus traducciones en todos los idiomas enlazan al mismo manga. REZICS guarda tu progreso y busca la siguiente entrega en el idioma que elijas.',
        picture: {
          name: 'hero',
          alt: 'Una hoja gruesa casi negra, cortada como una página de manga con ventanas de distintos tamaños. Por una de ellas asoma papel rosa.',
        },
      },
      parts: {
        eyebrow: 'Ocho partes',
        heading: 'Las partes compartidas, aplicadas al manga.',
        notes: {
          identity: 'Con cualquier título traducido, encuentras la misma obra.',
          editions: 'Las versiones japonesa, taiwanesa, digital y recopilatoria tienen su propio registro.',
          credits: 'La obra original y el dibujo llevan créditos separados. El traductor figura en la versión que tradujo.',
          relations: 'Puedes consultar qué obra inspiró una adaptación y qué obras surgieron de ella.',
          progress: 'El progreso se guarda capítulo a capítulo y se sincroniza entre dispositivos.',
          ratings: 'Cada valoración indica qué capítulo y traducción se puntuaron.',
          discussion: 'Los hilos se separan por capítulo. Los comentarios posteriores a tu progreso quedan ocultos.',
          offers: 'Indica dónde se vende cada versión en cada idioma y la fecha de la consulta.',
        },
      },
      pages: {
        eyebrow: 'Este sitio',
        heading: 'Este sitio tiene seis entregas. Léelas en orden o ve directamente a la que te interese.',
        tiles: [
          { slug: 'series', chapter: 'Entrega 1', line: 'Tomos, entregas y traducciones dentro de una misma obra' },
          { slug: 'progress', chapter: 'Entrega 2', line: 'Retoma tu lectura en cualquier dispositivo' },
          { slug: 'creators', chapter: 'Entrega 3', line: 'Historia, dibujo y traducción, con sus propios créditos' },
          { slug: 'adaptations', chapter: 'Entrega 4', line: 'Relaciones entre novelas, manga, anime y juegos' },
          { slug: 'community', chapter: 'Entrega 5', line: 'Spoilers ocultos y valoraciones con contexto' },
          { slug: 'publish', chapter: 'Entrega 6', line: 'Publica tu manga por entregas' },
        ],
      },
      statement: {
        text: 'Si has leído toda la edición publicada en Taiwán, estás al día.',
        muted: 'REZICS indica qué tomo espera una traducción.',
      },
      neighbours: {
        eyebrow: 'Tipos relacionados',
        heading: 'Una misma historia suele tener varias formas.',
        lead: 'Las novelas, el anime, los juegos y las novelas visuales tienen identidades propias. Las relaciones de adaptación los conectan con el manga.',
        tiles: [
          { kind: 'books', line: 'Novelas y novelas ligeras originales' },
          { kind: 'anime', line: 'Adaptación al anime con progreso independiente' },
          { kind: 'games', line: 'Adaptaciones a videojuegos y desde videojuegos' },
          { kind: 'visual-novels', line: 'El manga enlaza con la obra original' },
        ],
      },
      closing: {
        statement: 'De la primera a la última entrega, todo está en un mismo lugar.',
        nextLabel: 'Siguiente entrega, 1',
        nextName: 'Serie',
      },
    },
    series: {
      intro: {
        eyebrow: 'Entrega 1: la serie',
        headline: 'Decenas de tomos y cientos de entregas, una sola obra.',
        lede: 'La serie es una obra, igual que cada tomo. Cada entrega ocupa un lugar fijo dentro de la obra. Las ediciones recopilatorias, las nuevas ediciones y las traducciones en otros idiomas se registran por separado y enlazan con la misma identidad.',
      },
      levels: {
        eyebrow: 'Por partes',
        heading: 'La serie, vista por partes.',
        lead: 'La serie completa, cada tomo y cada entrega tienen su propio nivel y se reúnen bajo una misma identidad.',
        picture: {
          name: 'series',
          alt: 'Una pila ordenada de cuadernillos delgados casi negros. Una tira verde oscuro sujeta los de arriba.',
        },
        items: [
          { title: 'Serie', body: 'La serie completa es una obra. Sus autores, seguidores y valoraciones pertenecen a ella.' },
          {
            title: 'Tomo',
            body: 'Cada tomo también es una obra que puedes guardar, valorar y comentar por separado. Se conserva la numeración de publicación, incluidos los tomos especiales.',
          },
          {
            title: 'Entrega',
            body: 'Cada entrega tiene una posición y un número fijos en la obra. Tu progreso, los debates y las citas de Wiki+ apuntan a esa ubicación.',
          },
          { title: 'Edición recopilatoria', body: 'Una edición recopilatoria o integral reúne varios tomos. REZICS indica cuáles incluye sin crear obras duplicadas.' },
          {
            title: 'Traducción',
            body: 'La versión original y las traducciones pertenecen a la misma obra. Cada traducción registra a sus traductores, derechos y datos de publicación. Las traducciones de fans también indican de qué versión proceden.',
          },
        ],
      },
      catalogue: {
        eyebrow: 'Datos del catálogo',
        heading: 'Si falta un dato del catálogo de un manga, se indica «sin registrar».',
        items: [
          { title: 'Formato', body: 'Serie de manga o historia única.' },
          { title: 'Año de publicación', body: 'El año de la primera publicación. Explora las obras de cualquier año hasta llegar a la última.' },
          { title: 'Número de tomos', body: 'El número de tomos publicados.' },
          { title: 'Estado', body: 'En publicación, terminado, en pausa, inédito o cancelado.' },
        ],
        footnotes: [
          'No se inventan los datos que faltan. Los datos del catálogo importados indican su fuente y licencia.',
          'El Zone de manga permite filtrar todo el catálogo por título, formato, estado y año.',
        ],
      },
      names: {
        eyebrow: 'Nombres y ediciones',
        heading: 'Conserva el título original y reúne sus traducciones.',
        body: [
          'REZICS reúne el título original, sus traducciones y los alias que usan los lectores. Puedes encontrar la obra con cualquiera de ellos. Los títulos en chino tradicional no se convierten automáticamente a chino simplificado. Si se convierten, se indica que es una conversión.',
          'También puedes elegir en privado qué edición estás leyendo. REZICS recuerda si es una edición digital, una nueva edición o la taiwanesa.',
        ],
        items: [
          { title: 'ISBN', body: 'Un ISBN te lleva al tomo, a la traducción a la que pertenece y a la obra completa.' },
          { title: 'Traducción', body: 'Que un título esté traducido no significa que exista una edición en ese idioma.' },
        ],
      },
      closing: {
        statement: 'Por muchos tomos que tenga, la obra conserva una sola identidad.',
        nextLabel: 'Siguiente entrega, 2',
        nextName: 'Progreso',
      },
    },
    progress: {
      intro: {
        eyebrow: 'Entrega 2: progreso',
        headline: 'La última vez llegaste a la entrega 12. Ahora sigue la 13.',
        lede: 'REZICS organiza las entregas de cada tomo e indica dónde lo dejaste y cuál sigue. Si empiezas a leer en el móvil, puedes continuar desde la misma entrega en el ordenador.',
      },
      language: {
        eyebrow: 'Cambiar de idioma',
        heading: 'Lo que ya leíste cuenta, aunque cambies de idioma.',
        lead: 'Si lees los diez primeros capítulos en japonés y después cambias al chino tradicional, seguirán contando como leídos. REZICS te indica cuál es el siguiente capítulo en chino tradicional. Si aún no se ha publicado esa versión, te señala el que estás esperando.',
        picture: {
          name: 'progress',
          alt: 'Una larga tira de papel casi negro está doblada en varios segmentos. A la derecha, varios están desplegados y apilados, con un pequeño trozo de papel rosa entre ellos.',
        },
      },
      caught: {
        eyebrow: '¿Has terminado?',
        heading: '«Estar al día» puede significar varias cosas. REZICS te indica cuál.',
        items: [
          { title: 'Al día en este idioma', body: 'Has leído todo lo disponible en tu idioma y esperas la siguiente traducción.' },
          { title: 'Has leído todo lo publicado', body: 'Has leído todo lo que se ha publicado, aunque la serie continúe.' },
          { title: 'Serie terminada', body: 'La serie ha terminado y no habrá nuevas entregas.' },
          { title: 'Correspondencia sin confirmar', body: 'Si la versión en línea y el tomo no coinciden, la correspondencia queda sin confirmar. El progreso de una versión no se aplica a la otra.' },
          { title: 'Las historias extra no bloquean el progreso', body: 'Puedes saltarte las historias derivadas y los especiales opcionales sin que afecten a tu progreso en la obra principal.' },
        ],
      },
      statement: {
        text: 'Comprar no significa haber leído.',
        muted: 'Marca los tomos que tienes como colección y registra tu lectura por separado.',
      },
      travels: {
        eyebrow: 'Te acompaña',
        heading: 'Tu progreso te acompaña cuando cambias de dispositivo.',
        items: [
          { title: 'Dos dispositivos', body: 'El móvil y el ordenador comparten el mismo progreso. Puedes deshacer un cambio y se actualizará también en el otro dispositivo.' },
          { title: 'Seguir leyendo', body: 'Pulsa la primera fila de la página de inicio para abrir la siguiente entrega.' },
          {
            title: 'Seguir',
            body: 'Marca un manga como «Leyendo» para seguirlo. Recibirás un aviso cuando haya una nueva entrega o un nuevo tomo en tu idioma. Puedes recibir solo avisos importantes o desactivarlos.',
          },
          {
            title: 'Importar',
            body: 'Importa listas de manga de otros sitios. Se conservan los estados, las fechas, las valoraciones, las etiquetas y las notas privadas que se puedan asociar. Los campos originales, como el número de relecturas, se guardan durante siete días. Descarga una copia antes.',
          },
          { title: 'Exportar', body: 'Puedes exportar toda tu biblioteca en cualquier momento, incluidas las fechas y las notas.' },
        ],
        footnote: 'Por defecto, REZICS no utiliza tu historial privado de lectura para entrenar modelos de IA ni crear perfiles publicitarios.',
      },
      closing: {
        statement: 'Retoma la lectura donde la dejaste.',
        nextLabel: 'Siguiente entrega, 3',
        nextName: 'Autores',
      },
    },
    creators: {
      intro: {
        eyebrow: 'Entrega 3: autores',
        headline: 'Quien escribe la historia y quien la dibuja tienen sus propios créditos.',
        lede: 'Muchas obras de manga tienen una persona a cargo de la historia y otra del dibujo. REZICS acredita a cada persona por su papel y enlaza su nombre con todas sus obras, ya sean manga, novelas o anime.',
      },
      roles: {
        eyebrow: 'Créditos',
        heading: 'Cada crédito indica el papel correspondiente.',
        items: [
          { title: 'Obra original', body: 'Quien concibe y escribe la historia.' },
          { title: 'Dibujo', body: 'Quien dibuja la historia página a página.' },
          { title: 'Ilustración', body: 'Quien ilustra la portada, las páginas a color o la novela.' },
          { title: 'Traductor', body: 'El traductor aparece acreditado en la versión que tradujo, no en otras.' },
          { title: 'Supervisión del concepto', body: 'Quien aporta la idea original o supervisa el concepto.' },
        ],
        footnotes: ['Los equipos de traducción de fans también aparecen acreditados, pero sus traducciones nunca se presentan como oficiales.', 'Los nombres de los papeles forman parte de los datos y pueden traducirse a cada idioma.'],
      },
      person: {
        eyebrow: 'Una persona',
        heading: 'Un nombre reúne sus obras de todos los tipos.',
        lead: 'Una artista puede ilustrar una novela, publicar su propio manga y dibujar para un juego. REZICS reúne esas obras en una misma identidad. Síguela para ver sus nuevas obras y anuncios en tu actividad.',
        tiles: [
          { kind: 'books', line: 'Ilustraciones para novelas' },
          { kind: 'anime', line: 'Obra original adaptada al anime' },
          { kind: 'games', line: 'Ilustraciones para juegos' },
        ],
      },
      statement: {
        text: 'Los créditos corresponden a personas, no a cuentas.',
        muted: 'La página del autor reúne sus obras acreditadas, aunque aún no se haya unido a REZICS.',
      },
      closing: {
        statement: 'Cada nombre indica qué hizo esa persona.',
        nextLabel: 'Siguiente entrega, 4',
        nextName: 'Adaptaciones',
      },
    },
    adaptations: {
      intro: {
        eyebrow: 'Entrega 4: adaptaciones',
        headline: 'Una historia, cuatro formas.',
        lede: 'En REZICS, las novelas, el manga, el anime y los juegos son obras distintas. Las relaciones con nombre propio las conectan: desde el manga puedes encontrar la obra original y sus adaptaciones.',
      },
      example: {
        eyebrow: 'Un ejemplo',
        heading: 'Por ejemplo, «A Certain Magical Index».',
        lead: 'La obra original es una novela ligera escrita por Kazuma Kamachi e ilustrada por Kiyotaka Haimura. REZICS registra cada versión como una obra distinta e indica cómo se relacionan.',
        picture: {
          name: 'adaptations',
          alt: 'Tres hojas verde oscuro, casi negra y rosa forman una línea diagonal y se tocan por las esquinas.',
        },
        items: [
          { title: 'Novela ligera', body: 'Obra original. Las series principal, Nuevo Testamento y Génesis se conectan en orden como continuaciones.' },
          { title: 'Manga', body: 'Adaptación de la novela ligera, dibujada por Chūya Kogino.' },
          { title: 'Anime', body: 'También adaptado de la novela ligera. Su progreso se registra por separado del manga.' },
          { title: 'A Certain Scientific Railgun', body: 'Obra derivada con su propio manga y adaptación al anime.' },
          { title: 'Juegos', body: 'Una de ellas es una novela visual, enlazada con esa categoría.' },
        ],
        footnote: 'Este ejemplo solo muestra cómo REZICS registra una obra y no implica colaboración ni licencia alguna.',
      },
      relations: {
        eyebrow: 'Relaciones',
        heading: 'Cada relación indica de qué tipo es.',
        items: [
          { title: 'Adaptada de', body: 'Una novela, un anime o un juego adaptado a manga, o un manga adaptado a otro formato.' },
          { title: 'Continuación o precuela', body: 'La historia continúa después de la obra anterior.' },
          { title: 'Obra derivada', body: 'Las historias derivadas y de personajes secundarios enlazan con la obra principal.' },
          { title: 'Nueva versión de', body: 'Si el autor vuelve a escribir la historia y cambia la trama, se registra como otra obra.' },
          { title: 'Reinicio de', body: 'Una nueva versión que vuelve a contar la historia desde el principio.' },
          { title: 'Orden de lectura', body: 'Además del orden de publicación, puedes crear un orden de lectura según la trama. Ambos se conservan.' },
        ],
        footnote: 'Las relaciones no confirmadas se indican como tales. Se dejan vacías antes que conectarlas sin pruebas.',
      },
      apart: {
        eyebrow: 'Por separado',
        heading: 'Terminar el anime no hace avanzar tu progreso en el manga.',
        lead: 'El progreso del anime y el del manga se registran por separado. También puedes filtrar sus reseñas por separado, y las valoraciones de cada uno se calculan con sus propios participantes.',
      },
      statement: {
        text: 'Si dos versiones cuentan cosas distintas, puedes registrar ambas en Wiki+.',
        muted: 'Cada dato indica a qué versión pertenece. Lo que se muestra depende de tu progreso de lectura.',
      },
      closing: {
        statement: 'Cada versión conserva su identidad y todas están conectadas.',
        nextLabel: 'Siguiente entrega, 5',
        nextName: 'Debates',
      },
    },
    community: {
      intro: {
        eyebrow: 'Entrega 5: debates',
        headline: 'Debate hasta la entrega que has leído.',
        lede: 'Cada entrega tiene su propio hilo. Lo que otras personas escriban más adelante queda oculto hasta que llegues a esa parte.',
      },
      spoilers: {
        eyebrow: 'Spoilers',
        heading: 'El contenido posterior a tu progreso queda oculto hasta que decidas abrirlo.',
        items: [
          { title: 'Debate de esta entrega', body: 'Cada entrega tiene su propio hilo. Puedes leerlo sin unirte a una comunidad.' },
          { title: 'Comentarios ocultos', body: 'Los comentarios posteriores a tu progreso quedan ocultos por defecto. Puedes abrirlos y la elección solo afecta a esta sesión.' },
          { title: 'Votos sobre spoilers', body: 'Los lectores pueden votar qué contenido consideran un spoiler. Estos votos se cuentan por separado de las marcas del autor.' },
          {
            title: 'Tres tipos de conversación',
            body: 'Los debates sobre la trama, las reseñas y las correcciones de datos tienen espacios propios. Al cambiar entre ellos, se conservan la versión elegida y tu punto de lectura.',
          },
        ],
      },
      ratings: {
        eyebrow: 'Valoraciones',
        heading: 'Cada valoración indica qué se está valorando.',
        lead: 'La serie, cada tomo y cada traducción tienen sus propias valoraciones. La de la serie no se calcula a partir de las valoraciones de cada tomo. Cada resultado indica el número de participantes, la distribución y el grupo. Las reseñas especifican si tratan de la historia o de la traducción, y pueden publicarse sin puntuación.',
      },
      gather: {
        eyebrow: 'Fans',
        heading: 'Un lugar de encuentro para fans.',
        items: [
          {
            title: 'Comunidad',
            body: 'Los lectores de un manga pueden crear una comunidad con miembros, reglas y moderadores. Las obras destacadas enlazan al debate en el que se tomó cada decisión.',
          },
          { title: 'Zone', body: 'Una comunidad puede crear un sitio completo para una obra, con sus propias páginas, navegación y aspecto. Los datos siguen siendo los mismos.' },
          {
            title: 'Wiki+',
            body: 'Los personajes, lugares, cronologías y guías de cada entrega se muestran hasta donde has leído. Cada dato de las fichas está revisado.',
          },
          { title: 'Lista', body: 'Crea una lista de recomendaciones o de orden de lectura, añade un motivo para cada obra, ordénala y expórtala.' },
          { title: 'Seguir', body: 'Sigue una obra, un autor o una comunidad, y elige qué avisos quieres recibir de cada uno.' },
        ],
        footnote: 'Configura por separado las clasificaciones por edad: general, R15, R18 y R18G. El contenido aún no evaluado se marca como «sin evaluar».',
        tiles: [
          { module: 'community', line: 'Debates, valoraciones y listas para fans' },
          { module: 'zones', line: 'Zone y Wiki+, el sitio de la comunidad' },
        ],
      },
      closing: {
        statement: 'Debate cada entrega cuando termines de leerla.',
        nextLabel: 'Siguiente entrega, 6',
        nextName: 'Publicar',
      },
    },
    publish: {
      intro: {
        eyebrow: 'Entrega 6: publicación',
        headline: 'Tu manga tiene identidad desde la primera entrega.',
        lede: 'Las obras que publicas por entregas en REZICS aparecen junto a otros manga en el mismo índice. Los lectores usan las mismas herramientas para registrar su progreso, debatir y valorar. Las adaptaciones y traducciones también enlazan con tu obra.',
      },
      steps: {
        eyebrow: 'Proceso',
        heading: 'Del original a tus lectores.',
        lead: 'Tú decides cada paso desde que subes una entrega hasta que se publica, y todo queda registrado en la obra.',
        picture: {
          name: 'publish',
          alt: 'Una hoja casi negra, doblada en tres paneles, forma un pequeño biombo. Cada panel tiene varias ventanas por las que pasa la luz. Al lado hay varias páginas sueltas.',
        },
        items: [
          { title: 'Subir una entrega', body: 'Una entrega puede contener solo páginas de imágenes, sin añadir texto. Las notas del autor van aparte, no cuentan como parte del texto y no se traducen.' },
          { title: 'Programar la publicación', body: 'Elige la fecha y la zona horaria. La entrega se publica a la hora prevista aunque cierres el navegador.' },
          { title: 'Trabajar en equipo', body: 'Invita a asistentes y editores con permisos independientes para leer, sugerir, editar o publicar. Los permisos de publicación y edición son distintos.' },
          { title: 'Cada página tiene su lugar', body: 'Cada página tiene una ubicación fija. Las traducciones se vinculan página por página con el original.' },
          { title: 'Recibir comentarios', body: 'Los comentarios de los lectores y sus propuestas de corrección llegan a la bandeja de comentarios del autor.' },
        ],
      },
      decides: {
        eyebrow: 'Decide el autor',
        heading: 'El autor decide estas cuestiones.',
        items: [
          {
            title: 'Traducción',
            body: 'Las traducciones de otras personas son privadas por defecto. Solo se publican con tu consentimiento o con una licencia abierta que hayas concedido de antemano. También puedes impedir que tu obra enlace con una traducción concreta.',
          },
          { title: 'Derechos', body: 'Añade una declaración de licencia que explique cómo pueden usar la obra los lectores y traductores.' },
          { title: 'Uso de IA', body: 'Indica en cada entrega si no se usó IA, si se usó como ayuda o si generó contenido. Los lectores pueden filtrar por este dato.' },
          { title: 'Revisiones', body: 'Las páginas editadas conservan su historial de revisiones. La versión que vio un lector al dejar un comentario no se reemplaza en silencio.' },
          { title: 'Copia de seguridad', body: 'Puedes descargar una copia completa de la obra y de todas sus revisiones cuando quieras.' },
        ],
      },
      elsewhere: {
        eyebrow: 'Publicada en otro sitio',
        heading: 'También puedes registrar una serie que ya publicas en otro sitio.',
        lead: 'Puedes crear en REZICS una identidad para una obra que publiques en tu sitio o en otra plataforma. La publicación en línea se registra como una edición, con su URL y capturas fechadas. Cuando salga en tomo, se registra cada uno por separado.',
      },
      closing: {
        statement: 'La obra está en REZICS y el autor conserva el control.',
        nextLabel: 'Siguiente sitio',
        nextName: 'Juegos',
      },
    },
  },
} satisfies MiniSite<MangaStrings>;
