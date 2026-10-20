// 站點 (/engine/zones/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). The example
// Zone is an illustrative (示意) 《魔法禁書目錄》 Wiki+ in zh-Hant; text only, per
// .temp/sites/EXAMPLE-WORK.md. Its handle, routes and revision log are not REZICS data.
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'zones')!;

export interface Item {
  title: string;
  body: string;
}

export interface ZonesStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  routes: {
    label: string;
    headline: string;
    lead: string;
    caption: string;
    /** Route title and its path; `depth` indents a child route. */
    entries: { title: string; path: string; depth?: 1; note?: string }[];
    note: string;
  };
  templates: { label: string; headline: string; lead: string; steps: Item[]; note: string };
  themes: { label: string; headline: string; lead: string; items: Item[] };
  wiki: { label: string; headline: string; lead: string; items: Item[] };
  shared: { label: string; headline: string; lead: string; more: string; alt: string };
  log: { label: string; headline: string; lead: string; caption: string; entries: Item[]; items: Item[] };
  closing: string;
}

export default {
  id: 'zones',
  base: '/engine/zones/',
  name: 'Zones',
  theme: { module: 'zones' },
  pages: [
    {
      slug: '',
      label: 'Resumen',
      meta: {
        title: 'Zones: crea sitios en un grafo compartido',
        description:
          'Una Zone es un sitio completo que una comunidad crea con los datos compartidos de REZICS. La comunidad decide las rutas, plantillas, navegación y tema. Descubre cómo se organiza una Wiki+, cómo evita los destripes y cómo se actualiza.',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: 'Módulos',
      headline: 'Tu sitio, datos compartidos.',
      lede: 'Una Zone tiene su propia página de inicio, navegación y diseño. La comunidad decide el aspecto del sitio. Las obras, los personajes y los datos proceden de la fuente compartida.',
      alt: 'Una hoja de papel gris oscuro está doblada como una casa sin tejado. La pared delantera tiene una puerta y en dos habitaciones hay hojas pequeñas, una rosa y otra azul.',
    },
    routes: {
      label: 'Rutas',
      headline: 'La comunidad organiza cada nivel de su sitio.',
      lead: 'Cada ruta tiene una identidad estable y puede usar una dirección en chino. Las páginas de detalle solo muestran los datos incluidos en esta Zone. Crear una ruta no crea otro registro. La navegación es independiente y puedes ordenarla como quieras.',
      caption: 'Ejemplo: rutas de la Wiki+ de A Certain Magical Index',
      entries: [
        { title: 'Inicio', path: '/z/index-wiki' },
        { title: 'Obras', path: '/z/index-wiki/obras' },
        { title: '«Nuevo Testamento»', path: '/z/index-wiki/obras/nuevo-testamento', depth: 1 },
        { title: 'Personajes', path: '/z/index-wiki/personajes' },
        { title: 'Orden de lectura', path: '/z/index-wiki/orden-de-lectura', note: 'Página personalizada' },
        { title: 'Cronología', path: '/z/index-wiki/cronologia' },
        { title: 'Buscar', path: '/z/index-wiki/buscar' },
      ],
      note: 'Las rutas se administran desde la tabla de rutas de la Zone. La plataforma reserva pocos términos y no ocupa tus direcciones. Los debates están en el lado de la comunidad, en /r/index-wiki, y ambos sitios se enlazan.',
    },
    templates: {
      label: 'Plantillas',
      headline: 'Se empieza por la plantilla más específica.',
      lead: 'Cada sección de la página se vincula a una fuente: este registro, una de sus propiedades, un documento, una lista o una consulta guardada. Puedes recorrer todas las listas hasta el final.',
      steps: [
        { title: 'Ruta asignada', body: 'Si esta ruta tiene una plantilla asignada, se usa esa.' },
        { title: 'Tipo', body: 'Si no hay una asignada, se usa la plantilla del tipo, por ejemplo, una para todos los personajes.' },
        { title: 'Estructura', body: 'Si tampoco hay una de tipo, se usa la plantilla de su estructura.' },
        { title: 'Página general', body: 'Si no hay ninguna, se muestra la página general, con nombres, identificadores, afirmaciones y fuentes, y relaciones en ambos sentidos.' },
      ],
      note: 'Un tipo desconocido no reutiliza los botones de un libro. Su página solo muestra las partes que necesita.',
    },
    themes: {
      label: 'Temas',
      headline: 'El tema cambia el aspecto, no las funciones protegidas.',
      lead: 'La comunidad decide la marca, los colores, la tipografía y el diseño. La plataforma protege ciertas funciones, que permanecen en su sitio con cualquier tema.',
      items: [
        { title: 'A decisión de la comunidad', body: 'Marca, colores, tipografía y diseño.' },
        { title: 'Protegido por la plataforma', body: 'Identidad, búsqueda, cambio de idioma, fuentes y accesibilidad.' },
        {
          title: 'Código de presentación propio',
          body: 'Si hace falta algo más, una Zone puede incluir su propio código de presentación. El código debe revisarse antes de publicarse y los lectores pueden volver al diseño estándar cuando quieran. El backend sigue siendo el mismo.',
        },
      ],
    },
    wiki: {
      label: 'Wiki+',
      headline: 'Wiki+ se detiene donde tú has leído.',
      lead: 'Wiki+ es la Zone de una obra. Los personajes, lugares, cronologías y órdenes de lectura tienen sus propias páginas. Las fichas consultan los datos del grafo y otras páginas usan esos mismos datos.',
      items: [
        { title: 'Sin iniciar sesión', body: 'Empieza desde el inicio de la historia y oculta los datos que aún no se han revelado.' },
        { title: 'Después de iniciar sesión', body: 'Por defecto, se detiene donde has leído. También puedes elegir mostrarlo todo.' },
        {
          title: 'Una sola acción para crearla',
          body: 'Quien tenga el texto puede usar en su ordenador un agente de IA para organizar personajes, lugares, relaciones y eventos capítulo por capítulo. Cada propuesta incluye la ubicación y una cita breve. Se envía todo junto y se publica tras la aprobación de quienes revisan. REZICS no recibe el texto completo.',
        },
        { title: 'Lo decide la comunidad', body: 'Cada comunidad decide si los agentes pueden preparar borradores y si acepta artículos generados.' },
      ],
    },
    shared: {
      label: 'Compartido',
      headline: 'Cada sitio es independiente y comparte los datos.',
      lead: 'La Wiki+ en chino tradicional y el sitio de un club de lectura en inglés pueden compartir las mismas obras y personajes. Uno escribe A Certain Magical Index y el otro también, y ambos apuntan a la misma identidad. Cada comunidad elige sus propios nombres, descripciones, orden y fuentes.',
      more: 'Una Zone también puede reunir libros, anime y videojuegos en un sitio para todo un universo de ficción.',
      alt: 'Dos piezas de origami gris oscuro, independientes y una detrás de otra, descansan sobre una tira de papel azul claro.',
    },
    log: {
      label: 'Revisiones',
      headline: 'Cada revisión queda registrada.',
      lead: 'Cada revisión agrupa las rutas, navegación, plantillas, tema y consultas en una versión. Puedes previsualizarla y validarla antes de publicarla. Después, puedes restaurar la versión anterior o exportar el sitio completo.',
      caption: 'Ejemplo: historial de revisiones de una Wiki+',
      entries: [
        { title: 'Versión 3', body: 'Se añadió la página «Orden de lectura» y un elemento a la navegación. Se previsualizó y validó antes de publicarse.' },
        { title: 'Versión 2', body: 'La página de personajes usa una plantilla nueva. Después de publicarla, se restauró la primera versión.' },
        { title: 'Versión 1', body: 'Inicio, obras, personajes y cronología. Publicada.' },
      ],
      items: [
        { title: 'Cuatro permisos', body: 'La edición y publicación del sitio, la moderación de la comunidad y las contribuciones al grafo tienen permisos separados. Quien cambia el diseño no necesariamente puede modificar los datos del grafo.' },
        { title: 'Dos ajustes', body: 'La visibilidad pública y la aparición en búsquedas y recomendaciones son ajustes independientes.' },
        { title: 'El mismo proceso', body: 'Las personas editan desde el sitio web y los agentes mediante la API. Ambos siguen el mismo proceso.' },
      ],
    },
    closing: 'Crea una Zone en REZICS y construye un sitio para tu comunidad.',
  },
} satisfies MiniSite<ZonesStrings>;
