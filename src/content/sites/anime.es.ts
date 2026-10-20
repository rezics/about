// The 動畫 site: every visible string of /anime/ and its six inner pages, in the v3 parts (hero,
// sections, tile masonry, photo rows, statements, facts lists, closing). The plan is in
// src/sites/anime/SITE.md under "v3"; claims and sources in src/sites/anime/facts.md. Example
// data is generic and marked 示意; the one real work named is 《魔法禁書目錄》, text only
// (.temp/sites/EXAMPLE-WORK.md).
import type { KindId, MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'anime')!;

/** A title and its line: facts rows, tiles. */
export interface Row {
  title: string;
  body: string;
}
/** A still-life from the site's paper series (public/images/sites/anime/<src>-<w>.avif|webp). */
export interface Photo {
  src: 'hero' | 'weeks' | 'covered' | 'threads' | 'sources';
  alt: string;
}
/** An inner page's opening: the h1 and its line. */
export interface Head {
  headline: string;
  lede: string;
}
/** A section: eyebrow in columns 1 to 3, the h2, a lead. */
export interface Section {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** Large serif: `text`, then `muted` in muted ink, and an optional note under it. */
export interface Statement {
  text: string;
  muted: string;
  note?: string;
}
/** The final invitation, specific to the subject of each page. */
export interface ClosingCopy {
  headline: string;
  body: string;
}

export type AnimeStrings = {
  common: {
    /** Eyebrow of the section that leads to the next pages. */
    onward: string;
    /** Caption under generic example data. */
    example: string;
  };
  landing: {
    closing: ClosingCopy;
    hero: Head & { photo: Photo };
    pages: Section & { lines: { slug: string; line: string }[] };
    schedule: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    next: Statement;
    spoilers: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    parts: Section & { notes: Partial<Record<PartId, string>> };
    neighbours: Section & { tiles: { to: KindId; label: string }[] };
  };
  seasons: {
    closing: ClosingCopy;
    head: Head;
    marks: Section & { rows: Row[] };
    zones: { eyebrow: string; headline: string; body: string[]; photo: Photo };
    known: Section & { rows: Row[] };
    years: Section;
    /** One line that previews the next page. */
    next: string;
  };
  tracking: {
    closing: ClosingCopy;
    head: Head;
    statuses: Section & { rows: Row[] };
    seasons: Section & { tiles: Row[] };
    rewatch: Section;
    lists: Statement;
    next: string;
  };
  discussion: {
    closing: ClosingCopy;
    head: Head;
    spoiler: { eyebrow: string; headline: string; body: string; photo: Photo };
    position: Section & { rows: Row[] };
    conversations: Section & { rows: Row[] };
    spaces: Section & { tiles: Row[] };
    unseen: Statement;
    next: string;
  };
  ratings: {
    closing: ClosingCopy;
    head: Head;
    anatomy: Section & { rows: Row[] };
    episodes: Statement;
    targets: Section & { rows: Row[] };
    lists: Section & { tiles: string[] };
    next: string;
  };
  credits: {
    closing: ClosingCopy;
    head: Head;
    record: Section & { rows: Row[] };
    voice: { eyebrow: string; headline: string; body: string; photo: Photo };
    studio: Section;
    next: string;
  };
  adaptations: {
    closing: ClosingCopy;
    head: Head;
    example: { eyebrow: string; headline: string; body: string; photo: Photo };
    /** Generic family: each tile in the colour of its kind (null: a relation still to confirm). */
    family: Section & { tiles: { kind: KindId | null; relation: string; name: string }[] };
    scoped: Section;
    relations: Section & { rows: Row[] };
    orders: Statement;
    next: string;
  };
};

const site: MiniSite<AnimeStrings> = {
  id: 'anime',
  base: '/anime/',
  name: 'Anime',
  theme: { kind: 'anime' },
  pages: [
    {
      slug: '',
      label: 'Inicio',
      meta: {
        title: 'Anime: calendario, progreso, debates y obras originales',
        description:
          'Sigue anime en REZICS y consulta los horarios de cada episodio en tu calendario. Marca cada episodio que veas. Cada uno tiene su propio debate y valoración, y la obra enlaza también a sus actores de voz, estudio y obra original.',
      },
    },
    {
      slug: 'seasons',
      label: 'Temporadas y emisión',
      meta: {
        title: 'Temporadas y calendario de emisión de anime',
        description:
          'El anime suele estrenarse en cuatro temporadas al año. REZICS reúne los estrenos de cada temporada y los horarios de cada episodio en un calendario según tu zona horaria. Si solo se conoce la fecha, muestra solo la fecha. También puedes exportar los avisos a tu calendario.',
      },
    },
    {
      slug: 'tracking',
      label: 'Seguir el progreso',
      meta: {
        title: 'Progreso del anime, episodio a episodio',
        description:
          'Registra tu progreso en REZICS con cinco estados: por ver, viendo, terminado, en pausa o abandonado. Marca cada episodio que termines y encuentra el siguiente según el orden de la serie. Cada relectura queda como un registro nuevo. Puedes importar y exportar listas completas.',
      },
    },
    {
      slug: 'discussion',
      label: 'Debate por episodio',
      meta: {
        title: 'Debates de anime, un hilo por episodio',
        description:
          'En REZICS, cada episodio de anime tiene su propio hilo de debate. El contenido marcado como spoiler permanece oculto hasta que decidas abrirlo. Wiki+ se ajusta a los episodios que has visto, y cada comunidad puede crear su propio sitio de anime con Zone.',
      },
    },
    {
      slug: 'ratings',
      label: 'Valoraciones y listas',
      meta: {
        title: 'Valoraciones, reseñas y listas de anime',
        description:
          'Cada valoración de REZICS indica qué se valora, qué escala se usa, cuántas personas han participado y a qué grupo pertenecen. La serie y cada episodio se valoran por separado. Puedes escribir una reseña sin puntuar, y ordenar, anotar y exportar tus listas.',
      },
    },
    {
      slug: 'credits',
      label: 'Créditos y reparto',
      meta: {
        title: 'Equipo de producción y actores de voz del anime',
        description:
          'En REZICS, cada director, guionista, estudio y actor de voz tiene una identidad propia. Cada crédito indica el papel y la obra; los créditos de voz enlazan también al personaje. Sigue a una persona o a un estudio para enterarte de sus nuevas obras.',
      },
    },
    {
      slug: 'adaptations',
      label: 'Obras originales y adaptaciones',
      meta: {
        title: 'Obras originales y adaptaciones de anime',
        description:
          'En REZICS, cada anime, novela o manga original, temporada posterior y juego adaptado tiene su propia identidad. Las relaciones los conectan. El progreso del anime y el de la obra original se registran por separado, y cada diferencia entre versiones indica su fuente.',
      },
    },
  ],
  strings: {
    common: {
      onward: 'Sigue leyendo',
      example: 'Ejemplo ilustrativo.',
    },
    landing: {
      closing: {
        headline: 'Añade a tu calendario todo el anime que sigues esta temporada.',
        body: 'Organiza en REZICS el anime que quieres ver, registra tu progreso y participa en el debate de cada episodio.',
      },
      hero: {
        headline: 'Sigue cada episodio, desde el estreno hasta el final.',
        lede: 'Los episodios y sus horarios de emisión se ordenan en un calendario según tu zona horaria. Marca cada episodio que veas. La obra también enlaza a sus actores de voz, estudio y obra original.',
        photo: {
          src: 'hero',
          alt: 'Una larga tira de papel rosa, doblada en doce secciones, se alza sobre papel blanco cálido. Una hoja negra y otra malva sujetan un extremo.',
        },
      },
      pages: {
        eyebrow: 'Seis páginas',
        headline: 'Del calendario a la obra original: cada página presenta un aspecto del anime.',
        lines: [
          { slug: 'seasons', line: 'Calendario de cada temporada según tu zona horaria' },
          { slug: 'tracking', line: 'Encuentra el siguiente episodio según el orden de la serie' },
          { slug: 'discussion', line: 'Oculta los detalles de episodios que aún no has visto' },
          { slug: 'ratings', line: 'Valora por separado cada episodio y la serie' },
          { slug: 'credits', line: 'Cada nombre tiene una identidad' },
          { slug: 'adaptations', line: 'Conecta las obras originales, las temporadas y las historias derivadas' },
        ],
      },
      schedule: {
        eyebrow: 'Calendario de emisión',
        headline: 'El estreno de la una de la madrugada, según tu hora local.',
        body: 'En Japón, los calendarios indican la una de la madrugada del miércoles como «martes, 25:00». REZICS la convierte a tu zona horaria. Si la fuente solo da la fecha, muestra solo la fecha.',
        link: 'Temporadas y calendario de emisión',
        photo: {
          src: 'weeks',
          alt: 'Cuatro filas de tiras estrechas de papel rosa forman un calendario semanal. Una es malva y deja un espacio vacío.',
        },
      },
      next: { text: '¿Qué episodio sigue?', muted: 'Sigue el orden confirmado.' },
      spoilers: {
        eyebrow: 'Debate por episodio',
        headline: 'Un debate por episodio. Oculta lo que aún no has visto.',
        body: 'Cada episodio tiene su propio hilo. Los detalles posteriores a tu progreso quedan ocultos hasta que decidas abrirlos. Wiki+ también muestra por defecto solo lo que llega hasta el último episodio que has visto.',
        link: 'Cómo funciona la línea de spoilers',
        photo: {
          src: 'covered',
          alt: 'Una tira de papel rosa, doblada en varias secciones, yace sobre la mesa. Una hoja negra, con una esquina apenas levantada, cubre la parte final.',
        },
      },
      parts: {
        eyebrow: 'Ocho partes',
        headline: 'Ocho partes que usa el anime.',
        lead: 'La biblioteca, el manga y los juegos usan las mismas partes. El anime elige ocho y coloca el calendario junto a la identidad.',
        notes: {
          identity: 'Los títulos en chino, japonés e inglés identifican el mismo anime. Cada temporada y cada película tienen su propia identidad.',
          schedule: 'Las fechas de estreno, los horarios de cada episodio, los retrasos y las pausas se recogen en un mismo calendario.',
          credits: 'Dirección, guion y productora aparecen con su función. Cada crédito de voz enlaza a quien interpreta al personaje.',
          relations: 'Cada temporada, historia derivada o remake indica su relación con la obra original, y puedes volver a ella desde su página.',
          progress: 'Se registran por separado el episodio que estás viendo, si estás al día con la emisión y cuál es el siguiente.',
          ratings: 'El anime completo y cada episodio tienen su propia valoración. Se indica cuántas personas han valorado cada uno y a qué grupo pertenecen.',
          discussion: 'Cada episodio tiene su propio hilo de debate. Las tramas posteriores a tu progreso quedan ocultas hasta que decidas abrirlas.',
          wiki: 'Cada dato de Wiki+ indica de qué episodio procede. Solo se muestra información hasta el episodio que has visto.',
        },
      },
      neighbours: {
        eyebrow: 'Obras relacionadas',
        headline: 'Cada obra original y adaptación tiene su propio lugar.',
        lead: 'La obra original puede ser una novela, un manga o una novela visual, y el anime también puede adaptarse a un juego. Cada obra tiene su propia página y las relaciones las conectan. El mismo actor de voz conserva una sola identidad en todas ellas.',
        tiles: [
          { to: 'books', label: 'Novela original' },
          { to: 'manga', label: 'Manga original y adaptación' },
          { to: 'visual-novels', label: 'Adaptación de una novela visual' },
          { to: 'games', label: 'Juego adaptado y actores de voz compartidos' },
        ],
      },
    },
    seasons: {
      closing: {
        headline: 'Organiza el anime que sigues según tu horario.',
        body: 'Empieza por los estrenos de esta temporada, consulta el calendario y programa un aviso para el siguiente episodio.',
      },
      head: {
        headline: 'Cuatro temporadas al año, un calendario para cada una.',
        lede: 'La mayoría de las temporadas de anime empiezan en enero, abril, julio y octubre. El estreno y los horarios de cada episodio de las series que sigues aparecen en un mismo calendario.',
      },
      marks: {
        eyebrow: 'Cinco estados',
        headline: 'Anunciado, programado, disponible, aplazado y cancelado son estados distintos.',
        rows: [
          { title: 'Anunciado', body: 'Ya se anunció, pero aún no hay fecha.' },
          { title: 'Programado', body: 'Ya hay una fecha de emisión. Si también se conoce la hora, se indica.' },
          { title: 'Disponible', body: 'Indica en qué región, plataforma e idioma se puede ver.' },
          { title: 'Aplazado', body: 'La fecha prevista ha cambiado. El cambio queda registrado y se puede consultar.' },
          { title: 'Cancelado', body: 'Ya no se emitirá. El estado se indica y el registro se conserva.' },
        ],
      },
      zones: {
        eyebrow: 'Tu zona horaria',
        headline: 'Consulta el horario del mismo episodio en tu zona horaria.',
        body: [
          'Los horarios se muestran en tu zona horaria. El mismo episodio puede emitirse en días y horas distintos según el lugar.',
          'En el calendario japonés, «martes, 25:00» significa la una de la madrugada del miércoles. En Taipéi son las doce de la noche del miércoles y en Los Ángeles, la mañana del martes.',
        ],
        photo: {
          src: 'weeks',
          alt: 'Cuatro filas de tiras estrechas de papel rosa forman un calendario semanal. Una es malva y deja un espacio vacío.',
        },
      },
      known: {
        eyebrow: 'Solo lo que se sabe',
        headline: 'La fecha, la hora y la disponibilidad se indican por separado.',
        rows: [
          {
            title: 'Si no se conoce la hora, no se indica',
            body: 'Si la fuente solo da una fecha, el calendario muestra esa fecha y señala que la hora está pendiente. No inventa una hora.',
          },
          {
            title: 'La emisión no garantiza que puedas verla',
            body: 'Saber cuándo se emite no significa que esté disponible donde vives. La disponibilidad de subtítulos y doblaje se indica por separado para cada región y plataforma. Lo que no se sabe queda sin confirmar.',
          },
          {
            title: 'Avisos y calendario',
            body: 'Sigue un anime para recibir avisos a la hora que elijas y exporta el calendario de emisión a un archivo de calendario. Si cambia el horario de la fuente, el aviso te lo indica y tú decides si actualizarlo.',
          },
        ],
      },
      years: {
        eyebrow: 'Por año',
        headline: 'Explora por año hasta llegar a la última obra.',
        lead: 'Elige un año para ver los animes registrados de ese periodo y recorre la lista hasta el final. Mientras se completa el recuento, el total se indica como «al menos».',
      },
      next: 'Estar al día y haber terminado no son lo mismo.',
    },
    tracking: {
      closing: {
        headline: 'Retoma el anime donde lo dejaste.',
        body: 'Añade a una lista el anime que estás viendo, marca cada episodio y conserva un registro de cada repetición.',
      },
      head: {
        headline: 'Cada episodio que terminas hace avanzar tu progreso.',
        lede: 'Registra episodio a episodio el anime que ves. Estar al día con los episodios disponibles, haber visto todos los episodios emitidos y haber terminado la serie son cosas distintas. REZICS las indica por separado.',
      },
      statuses: {
        eyebrow: 'Cinco estados',
        headline: 'Por ver, viendo, terminado, en pausa y abandonado tienen funciones distintas.',
        lead: 'Tu historial de visualización es privado, salvo que decidas compartirlo.',
        rows: [
          { title: 'Por ver', body: 'Añádelo a tu lista y recibe avisos cuando haya novedades.' },
          { title: 'Viendo', body: 'Registra hasta qué episodio has visto y recibe avisos sobre nuevos episodios según tus preferencias.' },
          { title: 'Terminado', body: 'Has terminado la serie. Wiki+ muestra por defecto toda la historia de esta misma continuidad.' },
          { title: 'En pausa', body: 'Haz una pausa y conserva tu progreso.' },
          { title: 'Abandonado', body: 'Ya no lo ves. El registro permanece por si decides retomarlo.' },
        ],
      },
      seasons: {
        eyebrow: 'Entre temporadas',
        headline: 'Encuentra el siguiente episodio según el orden de la serie.',
        tiles: [
          { title: 'Temporada 1', body: '12 de 12 episodios vistos. Sigue con la temporada 2.' },
          { title: 'Temporada 2', body: '6 de 6 episodios vistos. Estás al día con la emisión.' },
          { title: 'Especial', body: 'Contenido adicional que no afecta al estado de la serie.' },
        ],
      },
      rewatch: {
        eyebrow: 'Volver a ver',
        headline: 'Cada vez que vuelves a verla cuenta por separado.',
        lead: 'Si vuelves a verla desde el principio, se guarda otro registro y se conserva la fecha en que la terminaste por primera vez. Si solo recuerdas el año, indica solo el año.',
      },
      lists: {
        text: 'Tus listas son tuyas y puedes llevártelas:',
        muted: 'Importa listas que hayas creado en otros sitios y exporta de una vez tus estados, progreso y valoraciones.',
      },
      next: 'Cuando termines el episodio ocho, abre su debate.',
    },
    discussion: {
      closing: {
        headline: 'Deja en el debate tus impresiones del episodio que acabas de ver.',
        body: 'Encuentra a quienes han visto el mismo episodio y comparte tu opinión. Los detalles posteriores esperan hasta que estés al día.',
      },
      head: {
        headline: 'Debate el episodio que acabas de ver.',
        lede: 'Cada episodio tiene su propio hilo, así que no tienes que buscarlo en un hilo general de toda la serie. Puedes leer debates sin unirte a una comunidad.',
      },
      spoiler: {
        eyebrow: 'Límite de spoilers',
        headline: 'El límite de spoilers llega hasta el episodio que has visto.',
        body: 'El contenido marcado como spoiler queda oculto hasta que decidas abrirlo. Abrirlo solo cambia lo que tú ves, no cuenta como un voto sobre el spoiler.',
        photo: {
          src: 'covered',
          alt: 'Una tira de papel rosa, doblada en varias secciones, yace sobre la mesa. Una hoja negra, con una esquina apenas levantada, cubre la parte final.',
        },
      },
      position: {
        eyebrow: 'Tu posición',
        headline: 'Tú decides hasta dónde mostrar spoilers, y tu elección te acompaña al cambiar de página.',
        rows: [
          { title: 'Tú eliges el límite', body: 'Al iniciar sesión, Wiki+ muestra por defecto hasta el último episodio que has terminado. También puedes elegir otro episodio o mostrarlo todo.' },
          { title: 'Sin iniciar sesión, sin spoilers', body: 'Quienes no han iniciado sesión ven el contenido hasta antes de la primera revelación de la trama.' },
          { title: 'Tu elección se conserva', body: 'Al pasar del debate a las reseñas y luego a Wiki+, se conservan la versión y el límite de spoilers que elegiste.' },
        ],
      },
      conversations: {
        eyebrow: 'Conversaciones',
        headline: 'Tres tipos de conversación, cada uno en su sitio.',
        lead: 'Cada publicación indica a qué tipo de conversación pertenece.',
        rows: [
          { title: 'Debate entre fans', body: 'Habla de la trama y los personajes, y comparte tus teorías sobre el siguiente episodio.' },
          { title: 'Respuestas a reseñas', body: 'Las respuestas a una reseña aparecen debajo de ella.' },
          { title: 'Correcciones de datos', body: 'Si una fecha de emisión o un actor de voz está mal, debate la corrección en la propuesta y añade la fuente.' },
        ],
      },
      spaces: {
        eyebrow: 'Comunidad',
        headline: 'Las comunidades pueden reunirse y crear su propio sitio.',
        lead: 'Las fichas de Zone usan los mismos datos que aparecen en las páginas de las obras.',
        tiles: [
          { title: 'Comunidad', body: 'La comunidad, con sus miembros, reglas y moderación' },
          { title: 'Zone', body: 'El sitio de la comunidad, con páginas de personajes, guías de episodios, cronologías y relaciones, en una dirección elegida por la comunidad' },
        ],
      },
      unseen: { text: 'Lo que aún no has visto,', muted: 'no hace falta saberlo todavía.' },
      next: 'Puedes valorar la historia y la producción por separado.',
    },
    ratings: {
      closing: {
        headline: 'Conserva tu opinión junto a la obra.',
        body: 'Valora un episodio o la serie completa, escribe una reseña y organiza en una lista las obras que quieras volver a ver.',
      },
      head: {
        headline: 'La valoración indica qué se está valorando.',
        lede: 'Sobre un mismo anime, puedes valorar la historia o la animación de un episodio. REZICS muestra junto a cada valoración la pregunta, la escala, el número de participantes y el grupo. Las respuestas a preguntas distintas nunca se mezclan.',
      },
      anatomy: {
        eyebrow: 'Ejemplo de valoración',
        headline: '4,2 sobre 5.',
        rows: [
          { title: 'Pregunta', body: 'La animación del episodio ocho. Las valoraciones del episodio y de la serie se calculan por separado.' },
          { title: 'Escala', body: 'Escala de cinco puntos, con una media de 4,15, que se muestra como 4,2.' },
          { title: 'Participantes', body: '20 personas. Si no hay suficientes participantes, solo se muestran el número y la distribución, sin calcular la media.' },
          { title: 'Distribución', body: '10 personas dieron cinco puntos, 6 dieron cuatro, 2 dieron tres, 1 dio dos y 1 dio un punto.' },
          { title: 'Grupo', body: 'Una comunidad de fans. El sitio y cada comunidad tienen sus propias valoraciones, que puedes comparar.' },
        ],
      },
      episodes: {
        text: 'Un episodio es un episodio,',
        muted: 'y la serie completa es otra cosa.',
        note: 'Cada episodio tiene su propia valoración. La de la serie completa solo incluye a quienes valoraron la serie. Si se calcula un total, se indica cómo se hizo y cuántos episodios incluye.',
      },
      targets: {
        eyebrow: 'Reseñas',
        headline: 'Las reseñas indican qué parte valoran.',
        lead: 'Puedes escribir una reseña sin puntuar.',
        rows: [
          { title: 'Historia', body: 'La trama, los personajes y el final.' },
          { title: 'Producción', body: 'La animación, la música y la interpretación.' },
          { title: 'Traducción', body: 'La traducción de los subtítulos en un idioma concreto, con la versión indicada.' },
          { title: 'Este episodio', body: 'Si la reseña trata de un episodio concreto, aparece en ese episodio.' },
          { title: 'Un personaje en un episodio', body: '«Qué tal está este personaje en este episodio» es otra pregunta y tiene su propia valoración.' },
        ],
      },
      lists: {
        eyebrow: 'Listas',
        headline: 'Ordena las listas como quieras.',
        lead: 'Las listas pueden incluir anime, novelas originales, manga y juegos. Añade una nota a cada elemento, ordénalos como quieras y exporta la lista completa. Sigue las listas de otras personas para recibir avisos cuando añadan algo.',
        tiles: ['Orden para empezar', 'Lo que veo esta temporada', 'Para ver el fin de semana', 'Obras originales y anime'],
      },
      next: 'Cada director, estudio y actor de voz enlaza con sus obras.',
    },
    credits: {
      closing: {
        headline: 'Encuentra la siguiente obra a partir de un nombre.',
        body: 'Sigue los créditos de dirección, animación y voz para conocer a las personas detrás de cada obra.',
      },
      head: {
        headline: 'Los nombres de los créditos enlazan a cada obra.',
        lede: 'En REZICS, cada director, guionista, director de animación, estudio y actor de voz tiene su propia identidad. Abre un nombre para ver todas sus obras y su función en cada una.',
      },
      record: {
        eyebrow: 'Un crédito',
        headline: 'Cada crédito indica cinco cosas.',
        rows: [
          { title: 'Quién', body: 'Una persona o empresa, enlazada a su propia página.' },
          { title: 'Papel', body: 'Dirección, guion, animación o voz. Cada papel tiene su nombre en cada idioma.' },
          { title: 'Qué obra', body: 'La obra y si se trata de la versión original o del doblaje en un idioma concreto.' },
          { title: 'Personaje', body: 'Los créditos de voz enlazan al actor, al personaje y a la obra en un mismo registro.' },
          { title: 'Nombre acreditado', body: 'Se conserva el nombre que aparece en los créditos de cada obra. Aunque cambie de nombre, la identidad sigue siendo la misma.' },
        ],
      },
      voice: {
        eyebrow: 'Actores de voz',
        headline: 'Una identidad para cada actor de voz.',
        body: 'La misma página reúne los personajes a los que ha dado voz en anime, juegos y novelas visuales. Síguelo para recibir avisos cuando se anuncien nuevas obras.',
        photo: {
          src: 'threads',
          alt: 'Una hoja rosa tiene una fila de pequeños orificios en el borde. De ellos salen tres hilos de algodón, cada uno atado a una hoja azul, malva o rosa.',
        },
      },
      studio: {
        eyebrow: 'Estudios',
        headline: 'Un estudio, una cronología de obras.',
        lead: 'Los estudios, igual que las personas, tienen una identidad propia que no pertenece a una cuenta ni a una comunidad. Sus animes aparecen ordenados por año.',
      },
      next: 'Sigue la relación hasta la obra original de este anime.',
    },
    adaptations: {
      closing: {
        headline: 'Después de un anime que te gusta, lee la obra original.',
        body: 'Sigue las relaciones de adaptación e historias derivadas para encontrar novelas, manga y juegos, y registra el progreso de cada uno.',
      },
      head: {
        headline: 'Cada adaptación enlaza con su obra original.',
        lede: 'En REZICS, cada anime, su novela o manga original, sus temporadas posteriores, historias derivadas y juegos adaptados son obras distintas. Las relaciones indican cómo se conectan, y puedes recorrerlas desde cualquiera de ellas.',
      },
      example: {
        eyebrow: 'Por ejemplo',
        headline: 'Una historia puede tener varias formas.',
        body: 'Por ejemplo, «A Certain Magical Index»: la novela ligera original de Kazuma Kamachi se adaptó a manga, tres temporadas de anime y una película. La historia derivada «A Certain Scientific Railgun» tiene su propio manga y anime. En REZICS, cada una es una obra distinta y las relaciones indican si es una adaptación, una continuación o una historia derivada.',
        photo: {
          src: 'sources',
          alt: 'Una hoja vertical verde oscuro, otra negra más pequeña y una rosa horizontal se superponen en capas desalineadas. A su lado hay una pequeña hoja azul.',
        },
      },
      family: {
        eyebrow: 'Mapa de relaciones',
        headline: 'Cada obra indica qué relación tiene con la original.',
        lead: 'Las relaciones aún sin confirmar también aparecen, claramente marcadas como pendientes.',
        tiles: [
          { kind: 'books', relation: 'Obra original', name: 'Novela original' },
          { kind: 'manga', relation: 'Adaptada de la obra original', name: 'Adaptación manga' },
          { kind: 'anime', relation: 'Adaptada de la obra original', name: 'Anime, temporada 1' },
          { kind: 'anime', relation: 'Continuación de la temporada 1', name: 'Anime, temporada 2' },
          { kind: 'books', relation: 'Historia derivada', name: 'Novela derivada' },
          { kind: 'games', relation: 'Adaptado del anime', name: 'Juego adaptado' },
          { kind: 'visual-novels', relation: 'Adaptada de la obra original', name: 'Novela visual adaptada' },
          { kind: null, relation: 'Relación pendiente de confirmar', name: 'Otra adaptación' },
        ],
      },
      scoped: {
        eyebrow: 'Cada una por separado',
        headline: 'El anime y la obra original se registran por separado.',
        lead: 'Terminar el anime no marca como leída la novela original. Si un personaje sobrevive en la novela pero no en el anime, ambas versiones pueden coexistir. Cada una indica de qué obra procede y en qué episodio o capítulo se revela.',
      },
      relations: {
        eyebrow: 'Relaciones',
        headline: 'Cada relación tiene un nombre y se describe desde ambos lados.',
        lead: 'Cada relación tiene un nombre en cada idioma: una página indica «adaptada de» y la otra, «adaptada como».',
        rows: [
          { title: 'Adaptación', body: 'Una obra adaptada a otro formato, por ejemplo, una novela convertida en anime.' },
          { title: 'Continuación', body: 'La historia continúa después de la obra anterior, como en una segunda temporada.' },
          { title: 'Serie', body: 'Cada obra de una misma serie conserva su propia identidad.' },
          { title: 'Remake', body: 'Una nueva versión hecha desde el principio. Es otra obra, enlazada con la anterior.' },
          { title: 'Historia derivada', body: 'Otra historia que parte del mismo relato.' },
        ],
      },
      orders: {
        text: 'El orden de emisión y el orden para ver,',
        muted: 'pueden ser distintos.',
        note: 'Las obras se ordenan por fecha de estreno. Si quieres recomendar por dónde empezar, crea otra lista con un orden de visionado y añade tus motivos.',
      },
      next: 'Muchas historias de anime empiezan en el manga.',
    },
  },
};

export default site;
