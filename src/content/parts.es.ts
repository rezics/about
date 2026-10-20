import type { Part } from './schema';

/** The fifteen shared parts, in schema order. */
export const parts: Part[] = [
  {
    id: 'identity',
    name: 'Identidad',
    gives: 'Una identidad apunta al mismo elemento en cualquier idioma y sitio.',
  },
  {
    id: 'names',
    name: 'Nombres multilingües',
    gives: 'Los nombres, alias y pronunciaciones conviven en cada idioma, sin alterar la forma original.',
  },
  {
    id: 'editions',
    name: 'Ediciones',
    gives: 'Cada edición, publicación, traducción, plataforma y alcance tiene su propio registro.',
  },
  {
    id: 'credits',
    name: 'Créditos',
    gives: 'Las personas y organizaciones aparecen según su función, y cada nombre enlaza a su catálogo.',
  },
  {
    id: 'relations',
    name: 'Relaciones',
    gives: 'Las adaptaciones, secuelas, series y dependencias se ven desde ambos extremos.',
  },
  {
    id: 'facets',
    name: 'Filtros',
    gives: 'Filtra por los campos disponibles, recorre todos los resultados y guarda las condiciones como una vista.',
  },
  {
    id: 'ratings',
    name: 'Valoraciones',
    gives: 'Indica qué valoras y añade una puntuación y una reseña.',
  },
  {
    id: 'discussion',
    name: 'Debates',
    gives: 'Los debates están vinculados directamente al elemento, sin tener que buscar un foro aparte.',
  },
  {
    id: 'wiki',
    name: 'Wiki+',
    gives: 'Las páginas y fichas de Wiki+ contienen hechos revisados del grafo.',
  },
  {
    id: 'lists',
    name: 'Listas',
    gives: 'Las listas pueden reunir distintos tipos de obras, ordenarse, incluir notas y exportarse.',
  },
  {
    id: 'progress',
    name: 'Progreso',
    gives: 'El estado de tu biblioteca, cada lectura o partida y qué puedes continuar después.',
  },
  {
    id: 'follow',
    name: 'Seguimiento',
    gives: 'Sigue un elemento, una persona o una vista para recibir novedades.',
  },
  {
    id: 'offers',
    name: 'Disponibilidad',
    gives: 'Cuando algo está a la venta, muestra su disponibilidad, precio y dónde comprarlo.',
  },
  {
    id: 'specs',
    name: 'Requisitos',
    gives: 'Las especificaciones probadas y las pruebas de compatibilidad incluyen las condiciones y la fecha.',
  },
  {
    id: 'schedule',
    name: 'Calendario',
    gives: 'Las fechas de lanzamiento, los horarios de emisión y los eventos se reúnen en un mismo calendario.',
  },
];
