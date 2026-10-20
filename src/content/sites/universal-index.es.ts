// 通用索引 (/engine/universal-index/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The page follows one work, 《魔法禁書目錄》, as a plain-text example of how REZICS records a work
// (.temp/sites/EXAMPLE-WORK.md: no cover or likeness, no publishers or studios, no counts).
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'universal-index')!;

export interface Item {
  title: string;
  body: string;
}

export interface IndexStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  names: {
    label: string;
    headline: string;
    lead: string;
    /** `lang` is a BCP 47 tag; the Japanese title is set in a Japanese face (Noto Sans TC lacks 録). */
    names: { name: string; lang: string; label: string }[];
    caption: string;
  };
  people: { label: string; headline: string; lead: string; rows: Item[]; characters: string };
  layers: { label: string; headline: string; lead: string; alt: string; items: Item[]; aside: string };
  relations: {
    label: string;
    headline: string;
    lead: string;
    /** Related works, with each sequel's source made explicit; `kind` colours its tile. */
    items: { id: string; rel: string; name: string; line: string; kind: 'books' | 'manga' | 'anime' | 'visual-novels' }[];
    note: string;
  };
  values: { label: string; headline: string; lead: string; items: Item[] };
  merge: { label: string; headline: string; lead: string; items: Item[] };
  closing: string;
}

export default {
  id: 'universal-index',
  base: '/engine/universal-index/',
  name: 'Índice universal',
  theme: { module: 'universal-index' },
  pages: [
    {
      slug: '',
      label: 'Resumen',
      meta: {
        title: 'Índice universal: un elemento, una identidad',
        description:
          'Con A Certain Magical Index como ejemplo, descubre cómo REZICS asigna una sola identidad a cada obra: sus títulos en distintos idiomas, créditos, ediciones y publicaciones, secuelas y adaptaciones, filtros y vistas, fusiones y divisiones.',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: 'Módulos',
      headline: 'Una obra, una identidad.',
      lede: 'Por ejemplo, A Certain Magical Index: el título original japonés y los títulos en chino e inglés apuntan a la misma obra. Se muestra primero el título adecuado para el idioma que lees.',
      alt: 'Sobre una base de papel gris oscuro hay varias hojas grises y de colores del mismo tamaño, ordenadas en una cuadrícula. Una de ellas tiene una esquina levantada.',
    },
    names: {
      label: 'Nombres',
      headline: 'Puede haber muchos nombres, pero solo una identidad.',
      lead: 'Cada nombre registra su idioma y uso: título original, traducción, alias o pronunciación. La búsqueda reconoce todos y te lleva a la misma obra.',
      names: [
        { name: 'A Certain Magical Index', lang: 'zh-Hant', label: 'Título en español' },
        { name: 'とある魔術の禁書目録', lang: 'ja', label: 'Título original en japonés' },
        { name: 'A Certain Magical Index', lang: 'en', label: 'Título en inglés' },
      ],
      caption: 'A Certain Magical Index sirve de ejemplo para mostrar cómo REZICS registra una obra.',
    },
    people: {
      label: 'Créditos',
      headline: 'Cada persona tiene una identidad y los créditos indican su función.',
      lead: 'Kazuma Kamachi figura como autor de la novela y creador original del manga, el anime y los videojuegos adaptados. Todos sus créditos llevan a la misma página. Cada nombre enlaza a una persona u organización y especifica su función y contribución. Si hay versiones distintas, se muestran con sus fuentes.',
      rows: [
        { title: 'Kazuma Kamachi', body: 'Autor de la novela. Creador original de las adaptaciones al manga, anime y videojuegos.' },
        { title: 'Kiyotaka Haimura', body: 'Ilustraciones de la novela.' },
        { title: 'Chuya Kogino', body: 'Dibujo del manga.' },
      ],
      characters: 'Lo mismo ocurre con los personajes. Si el mismo personaje aparece en la novela, el manga y el anime, mantiene una sola identidad y cada obra registra su aparición.',
    },
    layers: {
      label: 'Tres niveles',
      headline: 'Obra, texto y publicación: tres niveles.',
      lead: 'La obra es la historia. Una misma historia puede tener distintos textos: el original japonés y las traducciones al chino y al inglés. Cada publicación real tiene su propio registro.',
      alt: 'Tres hojas de papel gris oscuro, gris cálido y verde se superponen. Una esquina de la hoja gris cálido está ligeramente doblada.',
      items: [
        { title: 'Obra', body: 'La historia en sí. Las reseñas, el seguimiento y las relaciones se vinculan a este nivel.' },
        { title: 'Texto', body: 'El original y sus traducciones. Cada traducción es otro texto de la misma obra, con su propio traductor y sus derechos.' },
        { title: 'Publicación', body: 'Las ediciones de bolsillo, los libros electrónicos y las recopilaciones tienen registros propios que reflejan el contenido publicado en cada ocasión.' },
      ],
      aside: 'Una corrección tipográfica o una nueva impresión sigue siendo la misma obra. Una versión que cambia la trama se registra como obra aparte y se vincula mediante la relación «reescritura».',
    },
    relations: {
      label: 'Relaciones',
      headline: 'Cada relación se registra una vez y se describe desde ambos extremos.',
      lead: 'La serie original, «Nuevo Testamento» y «Testamento del Génesis» se registran por separado y se conectan como secuelas. La serie original muestra «Secuela» y «Nuevo Testamento» muestra «Predecesora». Ambas páginas consultan la misma relación. El manga, el anime y las historias derivadas también enlazan a su origen.',
      items: [
        { id: 'shinyaku', rel: 'Secuela de la serie original', name: '«Nuevo Testamento»', line: 'Segunda serie, de 2011 a 2019', kind: 'books' },
        { id: 'souyaku', rel: 'Secuela de «Nuevo Testamento»', name: '«Testamento del Génesis»', line: 'Tercera serie, comenzó en 2020 y sigue publicándose', kind: 'books' },
        { id: 'manga', rel: 'Adaptación', name: 'Manga', line: 'Dibujado por Chuya Kogino, serializado desde 2007', kind: 'manga' },
        { id: 'anime', rel: 'Adaptación', name: 'Anime', line: 'Tres temporadas (2008, 2010 y 2018) y una película (2013)', kind: 'anime' },
        { id: 'railgun', rel: 'Historia derivada', name: '«A Certain Scientific Railgun»', line: 'Al igual que «A Certain Scientific Accelerator», es una historia derivada que comparte personajes con la serie original', kind: 'manga' },
        { id: 'vn', rel: 'Adaptación', name: 'Novela visual', line: 'Publicada en 2013 y también incluida en el catálogo de novelas visuales', kind: 'visual-novels' },
      ],
      note: 'Cada relación tiene un nombre, una dirección y una fuente. Dos nombres parecidos no son prueba. Si no hay pruebas, no se crea la relación.',
    },
    values: {
      label: 'Filtros',
      headline: 'Cada valor tiene su propia página.',
      lead: 'Los personajes, tipos, idiomas y fuentes de adaptación tienen su propia página. Combina varios valores para crear un filtro.',
      items: [
        { title: 'Vinculados a la misma aparición', body: '«Protagonista» se vincula a la aparición de un personaje concreto. No se atribuye a una obra solo porque otro personaje sea el protagonista.' },
        { title: 'Guarda una vista', body: 'Guarda y pon nombre a las condiciones para crear una vista. Puedes seguirla, fijarla como pestaña en el inicio o usarla como catálogo de una Zone.' },
        { title: 'Consulta todos los resultados', body: 'Puedes recorrer cada lista hasta el final. La página indica si el recuento es exacto o mínimo.' },
      ],
    },
    merge: {
      label: 'Fusiones y divisiones',
      headline: 'Las fusiones se pueden deshacer y las divisiones conservan sus destinos.',
      lead: 'Alguien creó un registro duplicado de una obra con su título en inglés. Antes de fusionarlo, REZICS enumera todos los datos afectados y cada conflicto requiere una decisión.',
      items: [
        {
          title: 'Busca antes de crear',
          body: 'Antes de crear un elemento, busca por el título original, sus alias, pronunciación, autor e identificadores. Si ya existe, añade un alias o una edición. Un título o ISBN coincidente es una pista, no una prueba.',
        },
        {
          title: 'Fusionar',
          body: 'Las valoraciones, listas, registros de biblioteca y datos de Wiki se trasladan al registro que permanece. Dos valoraciones de una persona no se convierten en dos votos y dos ejemplares no se mezclan. Las URL anteriores siguen funcionando y te llevan al registro que permanece.',
        },
        { title: 'Deshacer', body: 'Deshacer es una decisión nueva, no un rebobinado. Las ediciones hechas después de la fusión vuelven a su lugar una por una. Las que no se puedan distinguir quedan pendientes de revisión.' },
        { title: 'Dividir', body: 'Si dos libros con el mismo título quedaron registrados como uno, al dividirlos el registro anterior indica en cuáles se separaron y dónde quedó cada dato.' },
        {
          title: 'Deciden las personas',
          body: 'Cualquiera puede proponer una fusión, incluidos los agentes de IA, pero la decisión corresponde a quienes revisan. Las fusiones que ya se usan o están en disputa requieren la aprobación de dos personas independientes. Un bot y quien lo opera cuentan como una sola persona.',
        },
      ],
    },
    closing: 'Busca en REZICS una obra que conozcas y consulta todos sus nombres.',
  },
} satisfies MiniSite<IndexStrings>;
