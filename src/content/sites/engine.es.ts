// The modules overview (/engine/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The kind picker reads each kind's eight parts and notes from kinds.ts. Shared module-ring
// labels live in modules.ts.
// Placeholders in braces are filled at build time.
import type { MiniSite, ModuleId, PartId } from '../schema';
import { site as shared } from '../site';

export interface EngineStrings {
  hero: { headline: string; lede: string; alt: string };
  picker: {
    label: string;
    headline: string;
    lead: string;
    legend: string;
    /** `{kind}` */
    listTitle: string;
    /** `{kind}` */
    link: string;
    note: string;
  };
  statement: [string, string];
  parts: { label: string; headline: string; lead: string; toggle: string; example: string; examples: Record<PartId, string> };
  modules: { label: string; headline: string; lead: string; roles: Record<ModuleId, string> };
  config: { label: string; headline: string; lead: string; items: { title: string; body: string }[]; note: string };
  closing: string;
}

export default {
  id: 'engine',
  base: '/engine/',
  name: 'Módulos',
  next: 'universal-index',
  pages: [
    {
      slug: '',
      label: 'Resumen',
      meta: {
        title: 'Módulos de REZICS: quince partes, cinco módulos',
        description:
          'Desde los libros, el anime y los videojuegos hasta MCP Hub, los nueve tipos de elementos se forman con las mismas quince partes. Elige un tipo para ver cuáles ocho partes usa y a qué cinco módulos pertenecen.',
      },
    },
  ],
  strings: {
    hero: {
      headline: 'Nueve tipos, las mismas partes.',
      lede: 'Libros, anime, videojuegos y software, también los servidores MCP: cada tipo se forma con ocho de las quince partes compartidas.',
      alt: 'Cinco hojas grises de distintos tonos se apilan como una escalera. En la de arriba hay cinco hojas pequeñas de colores.',
    },
    picker: {
      label: 'Nueve tipos',
      headline: 'Elige un tipo y descubre cuáles ocho partes usa.',
      lead: 'Las partes tienen el mismo nombre, pero su función depende del tipo. En los libros, las ediciones son traducciones y recopilaciones. En los videojuegos, son plataformas y regiones.',
      legend: 'Elige un tipo',
      listTitle: 'Ocho partes de {kind}',
      link: 'Ver {kind}',
      note: 'Cada tipo usa las partes que necesita. Aquí se muestran las ocho que mejor lo definen.',
    },
    statement: ['Cada parte se implementa una vez,', 'para cada tipo se organiza de otra manera.'],
    parts: {
      label: 'Quince partes',
      headline: 'Quince partes, una función cada una.',
      lead: 'Cada parte cumple una función distinta según el tipo. El catálogo completo explica para qué sirve cada una y muestra ejemplos.',
      toggle: 'Ver el catálogo de partes y sus ejemplos',
      example: 'Ejemplo',
      examples: {
        identity: 'La ficha de créditos de su novela y la de su videojuego enlazan con la misma persona.',
        names: 'El título original en japonés, su traducción al chino y la romanización de una novela visual aparecen juntos. Puedes encontrarla con cualquiera de esos nombres.',
        editions: 'Una edición recopilatoria de tres tomos queda en un solo registro de edición; los tres tomos siguen siendo obras distintas.',
        credits: 'La persona que da voz, el personaje y la obra figuran en el mismo registro desde el principio.',
        relations: 'La ficha del anime indica «Adaptación de» y la de la obra original muestra «Adaptaciones». Ambas relaciones parten del mismo registro.',
        facets: 'Puedes guardar una vista, ponerle nombre y seguirla para encontrar, por ejemplo, animes adaptados de novelas con protagonista femenina.',
        ratings: 'Un mismo audiolibro puede recibir valoraciones distintas por la historia, la traducción y la narración.',
        discussion: 'Los debates siguen tu progreso de lectura, así quienes aún no han llegado al final no ven el desenlace antes de tiempo.',
        wiki: 'La ficha de un personaje muestra datos del grafo. Una corrección se refleja en todas las páginas que los usan.',
        lists: 'Una lista para empezar reúne, en orden, novelas, manga y anime, y añade una breve razón para cada obra.',
        progress: 'Si terminas los tomos del uno al diez en japonés y luego cambias a la edición en chino, puedes continuar desde el tomo once.',
        follow: 'Sigue una vista guardada y recibirás un aviso cuando aparezca un elemento nuevo que cumpla los criterios.',
        offers: 'Si se desconoce la disponibilidad, se indica como desconocida y no como disponible.',
        specs: 'Un registro de compatibilidad indica el cliente, la versión y la fecha de observación.',
        schedule: 'Anunciado, previsto, confirmado y aplazado son estados distintos, y cada uno se registra por separado.',
      },
    },
    modules: {
      label: 'Cinco módulos',
      headline: 'Las partes se agrupan en cinco módulos según su función.',
      lead: 'Cada módulo responde una pregunta y usa algunas partes. Confianza es la excepción: está presente en todas ellas y gestiona las fuentes, los derechos y la privacidad.',
      roles: {
        'universal-index': 'Qué es este elemento',
        community: 'Cómo se relacionan las personas con él',
        zones: 'Cómo organizarlo en un sitio',
        create: 'Cómo crearlo y publicarlo',
        trust: 'Por qué confiar en él',
      },
    },
    config: {
      label: 'Un tipo nuevo',
      headline: 'Añadir un tipo es cuestión de configuración.',
      lead: 'No hace falta escribir otro backend para añadir un tipo. Las partes ya existen. Solo hay que preparar cinco ajustes.',
      items: [
        { title: 'Vocabulario', body: 'Los tipos y propiedades de este elemento, reutilizando el vocabulario existente siempre que sea posible.' },
        { title: 'Asignaciones', body: 'La propiedad del grafo que corresponde a cada campo de los datos externos.' },
        { title: 'Datos iniciales', body: 'Los primeros elementos y sus relaciones.' },
        { title: 'Vistas guardadas', body: 'Conjuntos de filtros habituales que forman índices y páginas.' },
        { title: 'Zone', body: 'Un sitio que reúne las páginas de este tipo.' },
      ],
      note: 'Si hace falta una función nueva, se implementa una vez como parte y la usan todos los tipos que la necesiten.',
    },
    closing: 'Empieza por el tipo que te importa. Los otros ocho ya están vinculados a la misma cuenta.',
  },
} satisfies MiniSite<EngineStrings>;
