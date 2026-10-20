import type { Module } from './schema';

/** The five engine modules, in DESIGN.md's order. */
export const modules: Module[] = [
  {
    id: 'universal-index',
    name: 'Índice universal',
    summary: 'Una identidad por elemento, conectada entre idiomas',
    meta: {
      title: 'Índice universal: cada elemento se registra una sola vez',
      description:
        'El índice universal de REZICS asigna una sola identidad a cada obra, programa y creador. Los nombres en distintos idiomas, las ediciones, los créditos y las relaciones se vinculan a ella.',
    },
    hero: {
      headline: 'Cada elemento se registra una sola vez.',
      lede: 'Las obras, el software, las personas y las organizaciones tienen una identidad en un grafo compartido. Sus nombres en distintos idiomas, ediciones, créditos y relaciones se vinculan a ella. Todas las comunidades y sitios consultan los mismos datos.',
    },
    points: [
      {
        title: 'También puedes leer sin conocer el idioma original',
        body: 'Los datos de la obra conservan el idioma original y se muestran en el idioma que lees. Puedes buscar por el título traducido, un alias o la pronunciación. Si aún no hay traducción, se indica que el título está en el idioma original.',
      },
      {
        title: 'Cada edición está bien diferenciada',
        body: 'Cada edición impresa, traducción, recopilación, edición regional y publicación para una plataforma tiene su propio registro. El registro de una publicación refleja lo que realmente se publicó. Las traducciones posteriores se registran aparte y enlazan con su fuente.',
      },
      {
        title: 'Créditos y relaciones',
        body: 'Las personas y organizaciones aparecen en los créditos según su función. Las adaptaciones, secuelas, series y dependencias son relaciones con dirección y fuente. Compartir un nombre no convierte dos elementos en uno.',
      },
      {
        title: 'Filtros completos',
        body: 'Puedes combinar los campos disponibles para filtrar. Los resultados muestran el recuento real y puedes recorrerlos todos. Guarda las condiciones habituales como una vista y síguela.',
      },
      {
        title: 'Correcciones y fusiones',
        body: 'Los elementos duplicados se resuelven con una propuesta de fusión respaldada por pruebas. Antes puedes revisar las valoraciones, bibliotecas y datos de Wiki afectados. Las URL anteriores siguen funcionando y una fusión incorrecta se puede deshacer.',
      },
    ],
    statement: 'Corrige un dato una vez en cualquier idioma y se actualizará en cada página que lo muestre.',
    usedBy: ['books', 'anime', 'visual-novels', 'software'],
  },
  {
    id: 'community',
    name: 'Comunidad',
    summary: 'Comunidades, debates, valoraciones y listas',
    meta: {
      title: 'Comunidad: debates, valoraciones y listas',
      description:
        'En REZICS, una comunidad se reúne en torno a una historia, un idioma o una idea. Los debates, las valoraciones y las listas se vinculan directamente a las obras. Tu identidad y reputación te acompañan en cada comunidad.',
    },
    hero: {
      headline: 'Los debates, las valoraciones y las listas están vinculados a las obras.',
      lede: 'Una comunidad reúne a personas en torno a una historia, un idioma o una idea. Sus miembros debaten, valoran obras y crean listas junto a ellas. La biblioteca, las obras y la reputación de cada persona la acompañan en todas las comunidades.',
    },
    points: [
      {
        title: 'Comunidad',
        body: 'Cada comunidad tiene sus propios miembros, roles y reglas, que pueden redactarse en cada idioma que use. La comunidad pertenece a sus miembros; su propietario no puede cerrarla ni eliminarla sin más.',
      },
      {
        title: 'Seguir y unirse son cosas distintas',
        body: 'Seguir es una forma unilateral de estar al tanto y no requiere aprobación. Unirse significa hacerse miembro y poder participar. Cada opción tiene sus propios ajustes de notificaciones: todas, seleccionadas o ninguna.',
      },
      {
        title: 'Las valoraciones indican qué se valora',
        body: 'Cada valoración indica la pregunta y el objeto. La puntuación de un episodio no se mezcla con la de toda la temporada, ni la de una traducción afecta a la historia original.',
      },
      {
        title: 'Las listas reúnen las obras',
        body: 'Las listas contienen obras, no títulos mencionados en publicaciones. Puedes reunir libros, anime y videojuegos en una misma lista, ordenarlos, añadir notas y exportarla completa.',
      },
      {
        title: 'Tu identidad te acompaña',
        body: 'Tu biblioteca, tus listas, tus obras y tu reputación pertenecen a una sola identidad y no quedan encerradas en una comunidad. Los demás pueden seguirte igual que siguen a una comunidad.',
      },
    ],
    statement: 'Una comunidad pertenece a sus miembros; cada persona, a sí misma.',
    usedBy: ['anime', 'manga', 'games', 'visual-novels'],
  },
  {
    id: 'zones',
    name: 'Zones',
    summary: 'Cualquier comunidad puede crear un sitio completo',
    meta: {
      title: 'Zones: cada comunidad puede tener su propio sitio',
      description:
        'Una Zone es un sitio completo basado en los datos compartidos de REZICS. La comunidad decide sus rutas, navegación, páginas y tema. La Wiki+ de una obra también es una Zone y sus correcciones siempre actualizan el mismo grafo.',
    },
    hero: {
      headline: 'Cada comunidad puede tener su propio sitio.',
      lede: 'Una Zone es un sitio completo con inicio, documentación, índices, páginas de detalle y navegación. La comunidad decide todas sus rutas. El contenido no se duplica y cada corrección del sitio actualiza el mismo grafo.',
    },
    points: [
      {
        title: 'Tú decides las rutas',
        body: 'La tabla de rutas de una Zone administra cada ruta bajo su dirección, incluida la página de inicio. Las páginas de la plataforma no sustituyen las páginas propias de la Zone.',
      },
      {
        title: 'Wiki+',
        body: 'La Wiki de cada obra es una Zone con páginas de personajes, lugares, líneas temporales, guías de capítulos y relaciones. Las fichas consultan los datos del grafo y cada lector solo ve lo que ya ha leído.',
      },
      {
        title: 'Temas y diseño',
        body: 'El tema define la marca y el diseño. Ningún tema puede quitar los controles protegidos de identidad, búsqueda, idioma, fuentes y accesibilidad.',
      },
      {
        title: 'Revisiones, vista previa y restauración',
        body: 'Una revisión del sitio incluye rutas, navegación, plantillas, tema y consultas. Puedes previsualizarla, validarla, restaurarla y exportarla. Tanto las personas como los agentes de IA editan el sitio con la misma API.',
      },
      {
        title: 'Una identidad, muchos sitios',
        body: 'Una Zone puede reunir varios tipos de elementos y un elemento puede aparecer en muchas Zones. Los sitios de novelas visuales en chino y japonés comparten cada identidad, pero eligen sus propios nombres, textos y orden.',
      },
    ],
    statement: 'Cada sitio tiene un aspecto distinto y todos usan el mismo motor.',
    usedBy: ['books', 'anime', 'manga', 'visual-novels'],
  },
  {
    id: 'create',
    name: 'Creación y publicación',
    summary: 'Escritura, lectura, ediciones y publicación',
    meta: {
      title: 'Creación y publicación: del primer capítulo al lanzamiento',
      description:
        'Los autores redactan, programan y publican capítulos en REZICS, colaboran en las revisiones, guardan la información del mundo junto al manuscrito y distribuyen directamente libros electrónicos y videojuegos pequeños sin DRM.',
    },
    hero: {
      headline: 'Del primer capítulo a la publicación, todo en un mismo lugar.',
      lede: 'Los autores redactan, programan y publican capítulos. Los lectores retoman la lectura donde la dejaron. Las traducciones, los derechos y cada publicación tienen registros propios.',
    },
    points: [
      {
        title: 'Tu manuscrito siempre está a salvo',
        body: 'Cada guardado crea una revisión que puedes restaurar. Puedes exportar la obra completa con sus revisiones, notas e información del mundo, e importarla de nuevo.',
      },
      {
        title: 'Programación y colaboración',
        body: 'La programación se ejecuta en el servidor según la zona horaria del autor, aunque cierre el navegador. Los colaboradores pueden tener permisos para leer, sugerir, editar o publicar. Los permisos de edición y publicación se conceden por separado.',
      },
      {
        title: 'La información del mundo junto al manuscrito',
        body: 'Los personajes, lugares, organizaciones, eventos y demás información se guardan en privado junto al manuscrito. Puedes publicar páginas seleccionadas en la Wiki de la obra sin revelar el historial privado de cambios.',
      },
      {
        title: 'Las traducciones pertenecen a sus traductores',
        body: 'Una obra puede tener varias traducciones, cada una perteneciente a su traductor. Las traducciones de los usuarios son privadas por defecto. Solo pueden hacerse públicas si la obra original es de dominio público o tiene una licencia libre que permita traducirla, si el autor da su consentimiento o si ofrece públicamente una licencia de traducción.',
      },
      {
        title: 'Publica directamente',
        body: 'REZICS distribuye para creadores contratados libros electrónicos EPUB y PDF con derechos confirmados, y videojuegos pequeños, todo sin DRM. Los lectores pueden ver una muestra y, después de comprar, recibir actualizaciones, solicitar un reembolso y volver a descargar los archivos según las condiciones.',
      },
    ],
    statement: 'Subir contenido a REZICS no transfiere los derechos de autor a REZICS.',
    usedBy: ['books', 'manga', 'games', 'visual-novels'],
  },
  {
    id: 'trust',
    name: 'Confianza',
    summary: 'Fuentes, derechos, moderación y privacidad',
    meta: {
      title: 'Confianza: fuentes, derechos, moderación y privacidad',
      description:
        'Cada afirmación en REZICS incluye fuentes y pruebas. El uso de IA se declara, se puede denunciar sin cuenta, todas las decisiones de moderación se pueden apelar y los borradores privados y el historial de lectura siguen siendo privados.',
    },
    hero: {
      headline: 'La información tiene fuentes y las decisiones, motivos.',
      lede: 'Cada dato incluye una fuente, cada derecho indica su fundamento y cada decisión de moderación explica la regla que la justifica. Tus borradores privados y tu historial de lectura no se muestran a otros usuarios por defecto.',
    },
    points: [
      {
        title: 'Fuentes y pruebas',
        body: 'Cada afirmación registra sus fuentes, pruebas y estado de revisión. Algo puede estar revisado y seguir en disputa. Lo que no se sabe se marca como desconocido.',
      },
      {
        title: 'IA y automatización',
        body: 'Los textos, imágenes y traducciones indican si se usó IA y si hubo revisión humana, para que los lectores puedan filtrarlos. Quienes operan automatizaciones muestran su identidad. La detección de IA nunca es el único fundamento de una decisión.',
      },
      {
        title: 'Denuncias y apelaciones',
        body: 'Puedes denunciar sin tener una cuenta. Las denuncias, pruebas, decisiones y revocaciones se registran por separado. Una persona vuelve a revisar cada apelación de una decisión de moderación.',
      },
      {
        title: 'Registro de derechos',
        body: 'Cada licencia registra quién la declara, cuándo y cuál es su alcance. Una reclamación de derechos se trata primero como una alegación; después de la revisión humana se decide qué contenido y usos afecta.',
      },
      {
        title: 'Privacidad',
        body: 'Tus borradores privados y tu historial de lectura siguen siendo privados. Si otra persona administra tu identidad pública o tu comunidad, no obtiene acceso a tu historial de lectura.',
      },
    ],
    statement: 'Las reglas se aplican en el servidor; el sitio web, la app y los agentes de IA obtienen el mismo resultado.',
    usedBy: ['visual-novels', 'mcp', 'skills', 'apis'],
  },
];
/** Shared labels for the five-module navigation at the end of every module page. */
export const moduleRing = { label: 'Cinco módulos', current: 'Estás aquí', overview: 'Volver al resumen de módulos' };
