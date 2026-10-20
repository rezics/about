// 路線圖 (/roadmap/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). A sequence
// without dates or status labels: one engine across every kind, one community at a time.
import type { MiniSite } from '../schema';
import { site as shared } from '../site';

export interface Item {
  title: string;
  body: string;
}

export interface RoadmapStrings {
  hero: { headline: string; lede: string; alt: string };
  order: { label: string; headline: string; lead: string; steps: Item[] };
  further: { label: string; headline: string; lead: string; items: Item[] };
  statement: [string, string];
  promises: { label: string; headline: string; lead: string; items: Item[] };
  constant: { label: string; headline: string; items: Item[] };
  closing: string;
}

export default {
  id: 'roadmap',
  base: '/roadmap/',
  name: 'Hoja de ruta',
  pages: [
    {
      slug: '',
      label: 'Resumen',
      meta: {
        title: 'Hoja de ruta de REZICS: una plataforma, comunidades abiertas paso a paso',
        description:
          'REZICS tiene un solo motor y abre sus comunidades de una en una. Sus nueve tipos de elementos ya están disponibles. Cada tipo nuevo usará las mismas partes y cada nueva función se implementará una sola vez.',
      },
    },
  ],
  strings: {
    hero: {
      headline: 'Un solo motor, una comunidad cada vez.',
      lede: 'REZICS no crea un sistema distinto para cada campo. Un mismo motor sirve para todos los tipos y las comunidades se abren de una en una, para desarrollarse a fondo.',
      alt: 'Una larga hoja de papel gris oscuro se despliega desde un rollo. Sobre ella se alinean seis hojas pequeñas de colores.',
    },
    order: {
      label: 'Orden',
      headline: 'Sin fechas, solo un orden.',
      lead: 'Cada paso se basa en el anterior. Las identidades y relaciones que ya existen se mantienen en los siguientes.',
      steps: [
        { title: 'Primero, las partes', body: 'Las quince partes son compartidas. Cada una se implementa una sola vez y se conecta según lo que necesite cada tipo.' },
        {
          title: 'Nueve tipos',
          body: 'Libros, anime, manga, videojuegos, software, novelas visuales, MCP Hub, Skill Hub y API Hub ya están en REZICS, junto con las recetas. La Wiki+ de cada obra y el seguimiento desde la biblioteca tienen un papel central.',
        },
        { title: 'Una comunidad cada vez', body: 'Después se abre una comunidad cada vez. Debe haber personas que ya le dediquen tiempo y debe aportar nuevas relaciones al grafo.' },
        {
          title: 'Más tipos',
          body: 'La ficción interactiva, los catálogos de ciencia ficción y fantasía, los modelos y las evaluaciones se añaden poco a poco. Cada tipo requiere configuración, no código exclusivo en el backend.',
        },
        {
          title: 'Nuevas funciones',
          body: 'Cada función nueva se implementa una sola vez y la usan los tipos que la necesitan. Así se añaden lugares, estadísticas, clasificaciones, automatizaciones, retos, importación de datos, invitaciones, verificación de nombres y membresías de pago.',
        },
      ],
    },
    further: {
      label: 'Más tipos',
      headline: 'Hay más tipos además de los nueve.',
      lead: 'Los siguientes tipos usan las mismas partes. Los eventos, lugares de visita y librerías especializadas también aprovechan la función de ubicación.',
      items: [
        { title: 'Ciencia ficción y fantasía', body: 'Cada relato de una antología es una obra. Puedes comprobar qué libro incluye la traducción que buscas y evitar comprarla dos veces.' },
        { title: 'Ficción interactiva', body: 'Encuentra obras breves en un idioma que conozcas. Se indican el intérprete y la plataforma necesarios, con un enlace para jugar.' },
        { title: 'Modelos y evaluaciones', body: 'Cada puntuación indica la versión del modelo, las condiciones de evaluación, el conjunto de datos y la fecha. Las reseñas de usuarios aparecen por separado.' },
        { title: 'Eventos de obras', body: 'Las ferias, firmas y eventos de lanzamiento se vinculan con las obras, sus creadores, el lugar y la fecha. Las entradas se compran en el sitio del organizador.' },
        { title: 'Lugares para visitar', body: 'Lugares públicos relacionados con las obras, filtrados según tu progreso para evitar destripes. No se incluyen domicilios privados ni se registra dónde has estado.' },
        { title: 'Librerías especializadas', body: 'Librerías confirmadas por sus responsables. La disponibilidad de una edición se basa únicamente en los datos de las librerías colaboradoras. Si no hay datos, se indica como desconocida.' },
      ],
    },
    statement: ['Las partes aumentan poco y los tipos siguen creciendo;', 'cada nuevo tipo usa el mismo motor.'],
    promises: {
      label: 'Un grafo',
      headline: 'Lo que solo es posible con un grafo compartido.',
      lead: 'Cuantos más tipos hay, más relaciones se crean. Estas funciones requieren que todos los elementos estén en el mismo grafo.',
      items: [
        { title: 'Sigue la historia', body: 'De la novela al manga, al anime y al videojuego. Sigue el orden de lectura y visualización y descubre dónde encontrarlos.' },
        { title: 'Tu biblioteca sabe qué sigue', body: 'Reúne lo que lees, ves y juegas en una misma biblioteca. Cada tipo conserva sus unidades de progreso, ediciones e idiomas.' },
        { title: 'Convierte listas en planes', body: 'Ordena listas con obras de distintos tipos, añade notas y conviértelas en un calendario o mapa.' },
        { title: 'Sigue a una persona', body: 'Sigue a un creador para ver sus libros, videojuegos, créditos y contribuciones bajo una misma identidad.' },
        { title: 'Llévalo al mundo real', body: 'Recibe un aviso cuando una obra que sigues tenga una feria, una firma o un lugar que puedas visitar.' },
      ],
    },
    constant: {
      label: 'Lo que no cambia',
      headline: 'Lo que no cambia.',
      items: [
        { title: 'Un solo motor', body: 'No se crea un sitio para cada campo ni una base de datos para cada idioma.' },
        { title: 'Sin páginas de relleno', body: 'No llenamos páginas de anuncios ni generamos páginas en masa para mejorar el posicionamiento en buscadores o las citas de IA.' },
        { title: 'Los ingresos de los creadores', body: 'No se usan los ingresos que corresponden a los creadores para financiar otras operaciones.' },
        { title: 'Los permisos de los colaboradores', body: 'No se promete usar los datos más allá de los permisos que dan sus colaboradores.' },
        { title: 'Lugares y eventos', body: 'Solo se incluyen lugares y eventos relacionados con las obras y sus creadores.' },
      ],
    },
    closing: 'Cuando se añada otro tipo, tu cuenta y tus registros seguirán en el mismo lugar.',
  },
} satisfies MiniSite<RoadmapStrings>;
