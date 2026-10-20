import type { Kind } from './schema';

/** The nine kinds (products), in DESIGN.md's order. Sources: kinds-facts.md. */
export const kinds: Kind[] = [
  {
    id: 'books',
    name: 'Libros',
    tag: 'Books',
    group: 'works',
    summary: 'Una obra, todas sus ediciones y traducciones',
    meta: {
      title: 'Libros: catálogo e historial de lectura',
      description:
        'Cada obra tiene una identidad. Las traducciones, reimpresiones y recopilaciones se distinguen. Registra tus lecturas y libros, sigue la próxima entrega de una serie y compra libros electrónicos sin DRM. La Wiki solo muestra lo que ya has leído.',
    },
    hero: {
      headline: 'Cada edición de una misma obra queda bien identificada.',
      lede: 'La edición de bolsillo, el libro electrónico, la traducción y la recopilación son publicaciones de una misma obra. REZICS registra qué edición lees, por dónde vas y cuál sigue. También la conecta con su anime, manga y Wiki.',
    },
    features: [
      {
        title: 'Ediciones y traducciones por separado',
        body: 'Cada reimpresión, edición de bolsillo, libro electrónico y traducción es una publicación distinta. Las recopilaciones indican qué volúmenes incluyen y no crean obras duplicadas.',
      },
      {
        title: 'Registra cada lectura',
        body: 'Registra cada situación tal como ocurre: releer, pausar, abandonar a mitad o pasar del libro impreso al audiolibro. Puedes indicar el progreso por páginas, porcentaje o minutos.',
      },
      {
        title: 'La siguiente entrega de la serie',
        body: 'Elige el idioma de lectura y la página de la serie mostrará el siguiente libro disponible. Distingue entre estar al día, haber terminado lo publicado y que la serie haya concluido.',
      },
      {
        title: 'Libros y préstamos',
        body: 'Solo tú puedes ver qué libros tienes, a quién se los prestaste y cuándo deben devolverse. Tener un libro no significa haberlo terminado.',
      },
      {
        title: 'Trae tu historial',
        body: 'Importa un archivo exportado de otro servicio. Se conservarán las ediciones y los registros que se puedan identificar, y después podrás exportarlo todo.',
      },
      {
        title: 'Compra libros directamente a sus creadores',
        body: 'Los libros electrónicos autorizados de los creadores colaboradores se venden en formato EPUB o PDF sin DRM. Puedes leer una muestra y recibir actualizaciones y descargas desde tu biblioteca.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'progress', 'ratings', 'wiki', 'offers'],
    partNotes: {
      identity: 'Cada obra tiene una identidad en todos los idiomas y comunidades. El ISBN identifica una de sus publicaciones.',
      editions: 'Las traducciones, reimpresiones, ediciones de bolsillo, libros electrónicos y recopilaciones se registran como publicaciones de una misma obra.',
      credits: 'Los autores, traductores, ilustradores y editoriales aparecen con su función. Un mismo traductor mantiene la misma identidad en todos sus libros.',
      relations: 'Las series, secuelas, historias derivadas y adaptaciones tienen relaciones propias. Las versiones en línea y las ediciones reescritas también se conectan.',
      progress: 'Tu progreso indica qué libro y qué página estás leyendo, y cuál sigue, aunque cambies de idioma.',
      ratings: 'Las valoraciones de la historia, la traducción y la narración se mantienen separadas. Cada puntuación indica el número de personas y el alcance.',
      wiki: 'La Wiki cita los capítulos de origen de los personajes, lugares y eventos. Solo muestra lo que ya has leído.',
      offers: 'Aquí puedes comprar libros electrónicos de creadores colaboradores. La disponibilidad de otras ediciones muestra la fecha de consulta y se marca como desconocida si no hay datos.',
    },
    connections: [
      { to: 'anime', label: 'Adaptada al anime' },
      { to: 'manga', label: 'Adaptada al manga' },
      { to: 'games', label: 'Adaptada a videojuego' },
    ],
    community: {
      headline: 'Quienes leen distintas ediciones hablan del mismo libro.',
      body: 'Los comentarios y debates de quienes leen el original, una traducción o un libro electrónico quedan vinculados a la misma obra. Los clubes de lectura pueden crear su propia comunidad y las comunidades de una serie pueden usar una Zone para crear un sitio completo. Los datos bibliográficos siguen siendo los mismos.',
    },
    imageAlt: 'Varios libros apilados',
  },
  {
    id: 'anime',
    name: 'Anime',
    tag: 'Anime',
    group: 'works',
    summary: 'Temporadas, episodios, calendario de emisión y obras originales',
    meta: {
      title: 'Anime: sigue los episodios y evita destripes',
      description:
        'Los episodios y el calendario de emisión de cada temporada están organizados. Los subtítulos y el doblaje se indican por separado. Registra tu progreso episodio a episodio y participa en debates con los destripes ocultos hasta que avances. Sigue las relaciones para encontrar la obra original.',
    },
    hero: {
      headline: 'Sigue episodio a episodio y debate hasta donde has visto.',
      lede: 'Los episodios, el calendario de emisión, los subtítulos y las versiones dobladas se muestran por separado en cada temporada. Registra cada episodio que termines. Los debates y la Wiki solo muestran lo que ya has visto, y las novelas y el manga originales están a un enlace de distancia.',
    },
    features: [
      {
        title: 'Temporadas, episodios y calendario',
        body: 'El calendario reúne los episodios, especiales y fechas de emisión de cada temporada. Los retrasos, las cancelaciones y los estrenos se registran por separado.',
      },
      {
        title: 'Subtítulos y doblaje por separado',
        body: 'Se indica por separado en qué idiomas hay subtítulos y doblaje. El idioma de la interfaz y el idioma de visualización también son distintos.',
      },
      {
        title: 'Cuál es el siguiente episodio',
        body: 'Marca cada episodio que termines. Al volver al inicio, el siguiente aparecerá primero. Los especiales y el contenido adicional que elijas no retrasan la finalización de la serie.',
      },
      {
        title: 'Debate sobre este episodio',
        body: 'Cada episodio tiene su propio debate. Los destripes de episodios que aún no has visto están ocultos y puedes mostrarlos cuando quieras.',
      },
      {
        title: 'Valoraciones independientes por episodio',
        body: 'La puntuación de cada episodio no se mezcla con la de toda la obra. Consulta las valoraciones individuales para saber cuáles gustan más.',
      },
      {
        title: 'Sigue las adaptaciones hasta la obra original',
        body: 'Pasa del anime al manga y de ahí a la novela original. Terminar el anime no marca la obra original como leída.',
      },
    ],
    parts: ['identity', 'schedule', 'credits', 'relations', 'progress', 'ratings', 'discussion', 'wiki'],
    partNotes: {
      identity: 'Los títulos en distintos idiomas apuntan al mismo anime. La adaptación y la obra original tienen identidades distintas.',
      schedule: 'El calendario reúne las fechas de emisión y los episodios de cada temporada. Los avances, retrasos y cancelaciones se registran por separado.',
      credits: 'Los actores de voz, personajes y obras aparecen en los mismos créditos. Los directores, guionistas y estudios de producción también tienen sus propias funciones.',
      relations: 'Las nuevas temporadas, historias derivadas y obras originales tienen sus propias relaciones. Sigue los enlaces para volver a la novela o al manga.',
      progress: 'Tu progreso registra el episodio que has visto y el siguiente. Los especiales opcionales no cuentan para marcar la serie como terminada.',
      ratings: 'La obra completa y cada episodio tienen valoraciones propias, con el número de personas indicado.',
      discussion: 'Cada episodio tiene su propio debate y los destripes posteriores a tu progreso se ocultan por defecto.',
      wiki: 'La Wiki indica de qué episodio proceden los personajes, lugares y eventos. Solo muestra los episodios que ya has visto.',
    },
    connections: [
      { to: 'books', label: 'Novela original' },
      { to: 'manga', label: 'Manga original' },
      { to: 'games', label: 'Mismo actor de voz' },
    ],
    community: {
      headline: 'Una temporada de anime también puede tener su propio sitio.',
      body: 'Una comunidad puede crear su propio sitio de anime con una Zone y añadir calendarios por temporada, reseñas y debates. Los datos proceden del mismo catálogo, así que al corregir una fecha de emisión en otro lugar, también se actualiza aquí.',
    },
    imageAlt: 'Una lámina de acetato de anime y un marco',
  },
  {
    id: 'manga',
    name: 'Manga',
    tag: 'Manga',
    group: 'works',
    summary: 'Tomos, capítulos y traducciones a distintos idiomas',
    meta: {
      title: 'Manga: tomos, capítulos y traducciones',
      description:
        'Sigue los tomos y los capítulos de la serie. Las traducciones a cada idioma indican quién tradujo y qué edición usó. Recibe un aviso cuando salga un capítulo en tu idioma. Cada capítulo tiene su propio debate y la adaptación al anime está vinculada a la novela original.',
    },
    hero: {
      headline: 'Distingue cada capítulo, tomo y traducción.',
      lede: 'La serie en japonés, los tomos de cada región, las traducciones oficiales y las traducciones de aficionados están vinculadas al mismo manga, con su idioma y traductor indicados. Registra cada capítulo que lees y recibe avisos cuando haya uno nuevo en tu idioma.',
    },
    features: [
      {
        title: 'Capítulos y tomos',
        body: 'Cada capítulo de la serie ocupa un lugar fijo en la obra y cada tomo se registra como un libro. Las nuevas ediciones y recopilaciones se registran por separado, con la numeración de la editorial.',
      },
      {
        title: 'Registra el progreso por capítulo',
        body: 'Marca cada capítulo que termines. Si el siguiente está disponible en tu idioma, aparecerá primero. Si aún no está, verás cuál estás esperando.',
      },
      {
        title: 'Las traducciones indican su fuente',
        body: 'Cada traducción indica quién la hizo y qué edición original usó. Las traducciones de aficionados no se marcan como oficiales y las que no se hayan comprobado se indican como no verificadas.',
      },
      {
        title: 'Recibe avisos de capítulos nuevos',
        body: 'Sigue un manga para recibir avisos de capítulos y tomos nuevos en tu idioma. No recibirás avisos de idiomas que no lees.',
      },
      {
        title: 'Debate cuando termines de leer',
        body: 'Cada capítulo tiene su propio debate. Los destripes que aparecen después están ocultos hasta que los leas.',
      },
      {
        title: 'Después de la adaptación al anime',
        body: 'El anime, las historias derivadas y la novela original están vinculados, pero cada uno tiene su propio progreso.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'progress', 'ratings', 'discussion', 'offers'],
    partNotes: {
      identity: 'El título original, las traducciones de cada región y la romanización apuntan al mismo manga.',
      editions: 'Cada tomo en otro idioma, libro electrónico, nueva edición y recopilación tiene su propio registro. Se conserva la numeración original.',
      credits: 'Los guionistas, dibujantes, traductores y editoriales aparecen por separado. Las novelas y el manga de una misma persona se muestran en su página.',
      relations: 'La novela original, el anime, las historias derivadas y las secuelas tienen relaciones propias y se pueden encontrar desde ambos extremos.',
      progress: 'Registra el progreso por capítulos y consulta cuántos tomos de la serie has leído.',
      ratings: 'Puedes valorar por separado la obra, un capítulo o una traducción. La valoración de la serie no se mezcla con la de un capítulo.',
      discussion: 'Cada capítulo tiene su propio debate y los destripes que aún no has leído se ocultan por defecto.',
      offers: 'La disponibilidad y el precio de cada edición por región incluyen la fecha de consulta.',
    },
    connections: [
      { to: 'books', label: 'Adaptado de una novela' },
      { to: 'anime', label: 'Adaptado al anime' },
    ],
    community: {
      headline: 'Traductores y lectores tienen su propia identidad.',
      body: 'Los equipos de traducción de aficionados aparecen en los créditos de cada edición. Sigue a un traductor para ver sus próximos trabajos. Las reseñas, listas y reputación de los lectores también siguen su identidad y no quedan encerradas en una sola comunidad.',
    },
    imageAlt: 'Una página de manga original con tramas de puntos',
  },
  {
    id: 'games',
    name: 'Videojuegos',
    tag: 'Games',
    group: 'works',
    summary: 'Plataformas, ediciones, valoraciones y compras',
    meta: {
      title: 'Videojuegos: ediciones, requisitos y valoraciones',
      description:
        'Cada videojuego tiene una identidad. Sus ediciones por plataforma y región, y sus DLC, se muestran por separado con los requisitos del sistema. Las valoraciones indican el periodo y el grupo. Las selecciones de la comunidad incluyen sus motivos. Compra directamente videojuegos pequeños sin DRM de desarrolladores colaboradores.',
    },
    hero: {
      headline: 'Consulta las ediciones de cada videojuego y plataforma.',
      lede: 'Las ediciones por plataforma y región, los idiomas disponibles y los requisitos del sistema se muestran por separado. Las valoraciones indican si son recientes o generales y qué grupo de jugadores las ha dado. Los mods, adaptaciones y secuelas también están vinculados al videojuego.',
    },
    features: [
      {
        title: 'Un registro por plataforma',
        body: 'Las publicaciones del mismo videojuego en distintas plataformas y regiones indican sus idiomas disponibles, fecha de lanzamiento y DLC. Las versiones remasterizadas son obras distintas vinculadas al original.',
      },
      {
        title: 'Requisitos claros',
        body: 'Los requisitos del sistema se registran por plataforma. Los datos que faltan se marcan como desconocidos, sin deducirlos de otras plataformas.',
      },
      {
        title: 'Valoraciones por periodo y grupo',
        body: 'Las valoraciones recientes se muestran por separado de las generales. Cada puntuación indica cuántas personas han valorado, su distribución y el grupo al que pertenecen.',
      },
      {
        title: 'Las selecciones de la comunidad incluyen sus motivos',
        body: 'Cada videojuego seleccionado por una comunidad enlaza con el registro de la decisión correspondiente. Puedes ver quién lo eligió y por qué.',
      },
      {
        title: 'Compra directa sin DRM',
        body: 'Compra una vez y descarga videojuegos pequeños y novelas visuales autorizados de desarrolladores colaboradores. Las actualizaciones, los recibos y las descargas quedan en tu biblioteca de videojuegos.',
      },
      {
        title: 'Encuentra mods compatibles',
        body: 'Elige la edición del videojuego y el cargador antes de buscar mods. Solo se muestran los archivos compatibles y se indica la dirección de sus dependencias.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'specs', 'ratings', 'discussion', 'offers'],
    partNotes: {
      identity: 'Un videojuego tiene una sola identidad en todas las plataformas y regiones. Las remasterizaciones y los reinicios tienen identidades propias y están vinculados.',
      editions: 'Las publicaciones por plataforma, región e idioma, incluidos los DLC, se muestran por separado.',
      credits: 'Los desarrolladores, editores, guionistas, compositores y actores de voz aparecen con su función. Los libros y videojuegos de un mismo creador están vinculados.',
      relations: 'Las secuelas, historias derivadas, adaptaciones y mods tienen relaciones propias que muestran sus dependencias.',
      specs: 'Los requisitos del sistema y los idiomas compatibles se registran por plataforma. Desconocido y no aplicable son estados distintos.',
      ratings: 'Puedes valorar una publicación de una plataforma concreta. Las puntuaciones combinadas de varias ediciones explican cómo se calculan.',
      discussion: 'El videojuego, los DLC y las publicaciones de cada plataforma pueden tener sus propios debates.',
      offers: 'Aquí puedes comprar directamente los videojuegos pequeños de desarrolladores colaboradores. También se muestra la información de otras tiendas.',
    },
    connections: [
      { to: 'software', label: 'Mods y herramientas' },
      { to: 'anime', label: 'Adaptación al anime' },
      { to: 'visual-novels', label: 'Mismo desarrollador' },
    ],
    community: {
      headline: 'Charlas, reseñas y correcciones tienen su espacio.',
      body: 'Las charlas, las respuestas a reseñas y los debates sobre correcciones de datos se muestran por separado. Puedes seguir un videojuego o unirte a su comunidad para publicar y participar en las selecciones.',
    },
    imageAlt: 'Un mando de videojuegos',
  },
  {
    id: 'software',
    name: 'Software',
    tag: 'Software',
    group: 'works',
    summary: 'Compatibilidad, disponibilidad y alternativas',
    meta: {
      title: 'Software: versiones, plataformas y alternativas',
      description:
        'Cada programa tiene una identidad. Sus sistemas operativos y arquitecturas compatibles, notas de actualización y licencias se registran en cada versión. Consulta dónde conseguirlo, compara alternativas con sus motivos y entérate cuando haya una versión nueva.',
    },
    hero: {
      headline: 'Comprueba si funciona en tu dispositivo.',
      lede: 'Cada versión indica sus sistemas operativos y arquitecturas compatibles, dónde conseguirla y su licencia, con las fuentes correspondientes. Si quieres cambiar de programa, las alternativas explican sus motivos. Los paquetes y dependencias siguen las reglas de cada ecosistema.',
    },
    features: [
      {
        title: 'Versiones y plataformas',
        body: 'Los sistemas operativos y las arquitecturas compatibles se registran por versión. La compatibilidad con cada sistema operativo se indica por separado y no se deduce de otras.',
      },
      {
        title: 'Dónde conseguirlo',
        body: 'Las descargas oficiales, tiendas y repositorios de paquetes se muestran juntos y cada uno indica su fuente. Si REZICS solo ofrece un enlace, se indica que lleva a un sitio externo.',
      },
      {
        title: 'Notas de actualización por versión',
        body: 'Se conservan los cambios y canales de distribución de cada versión. Sigue el programa para recibir un aviso cuando haya una nueva.',
      },
      {
        title: 'Alternativas con motivos',
        body: 'Cada alternativa es una relación atribuida que indica para qué tarea sirve y por qué. Otras personas también pueden cuestionarla.',
      },
      {
        title: 'Paquetes y dependencias',
        body: 'Los paquetes de cada ecosistema conservan sus nombres, reglas de versión y dependencias originales. Los paquetes con el mismo nombre no se consideran idénticos.',
      },
      {
        title: 'Licencias y declaraciones de privacidad',
        body: 'Las licencias y las declaraciones de privacidad y accesibilidad indican quién las proporciona. Las afirmaciones de los desarrolladores no se presentan como verificadas por REZICS.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'offers', 'follow'],
    partNotes: {
      identity: 'Un programa tiene una sola identidad en todas las plataformas y repositorios. Los proyectos derivados tienen una entrada propia y enlazan con su origen.',
      editions: 'Se conservan los números de versión, canales de distribución y notas de actualización. Las versiones anteriores siguen disponibles.',
      specs: 'Los sistemas operativos, arquitecturas y dependencias compatibles se registran por versión y con sus fuentes.',
      credits: 'Los responsables de mantenimiento, equipos de desarrollo y organizaciones tienen sus propias identidades. Los proyectos en los que han participado aparecen en la misma página.',
      ratings: 'Puedes valorar una versión o plataforma concreta y consultar el número de personas y la distribución.',
      discussion: 'Las preguntas de uso, comentarios sobre actualizaciones y debates sobre alternativas se publican en la página del programa.',
      offers: 'Las descargas oficiales, tiendas y repositorios se muestran juntos con sus precios y licencias.',
      follow: 'Sigue un programa o a sus responsables de mantenimiento para no perderte nuevas versiones ni anuncios.',
    },
    connections: [
      { to: 'games', label: 'Versiones compatibles del videojuego' },
      { to: 'mcp', label: 'También es un servidor MCP' },
      { to: 'skills', label: 'Usado como dependencia por una habilidad' },
    ],
    community: {
      headline: 'La comunidad organiza combinaciones útiles.',
      body: 'La comunidad puede organizar programas en guías o colecciones e indicar para qué entorno sirven y si se ha probado su compatibilidad. Las recomendaciones antiguas se marcan para que alguien las vuelva a revisar.',
    },
    imageAlt: 'Una ventana de software',
  },
  {
    id: 'visual-novels',
    name: 'Novelas visuales',
    tag: 'Visual novels',
    group: 'works',
    summary: 'Una edición con el idioma, la plataforma y la traducción adecuados',
    meta: {
      title: 'Novelas visuales: encuentra una versión que puedas jugar',
      description:
        'Encuentra una edición que reúna el idioma, la plataforma, la región y el alcance de traducción que necesitas. Se indican el traductor y la edición original. Registra el progreso por ruta y oculta los destripes de rutas y finales.',
    },
    hero: {
      headline: 'Idioma, plataforma y traducción en una misma edición.',
      lede: 'Que exista un título traducido no significa que haya una traducción que puedas jugar. REZICS te ayuda a encontrar una edición que cumpla con el idioma, la plataforma y el alcance que buscas. Indica quién tradujo y qué edición usó. Las rutas y los finales solo se muestran hasta donde has avanzado.',
    },
    features: [
      {
        title: 'Todos los requisitos en una edición',
        body: 'Al filtrar, el idioma, la plataforma, la región y el alcance deben corresponder a una misma edición. No se combina el idioma de una edición con la plataforma de otra.',
      },
      {
        title: 'Traductores y edición original',
        body: 'Cada traducción indica el equipo responsable, la edición original y si incluye todo el contenido, una parte o solo una demo.',
      },
      {
        title: 'Rutas y finales sin destripes',
        body: 'Las rutas, los finales y los secretos de los personajes se ocultan tras una advertencia de destripes. Solo se muestran las rutas que ya has recorrido.',
      },
      {
        title: 'Crea una Wiki a partir del guion',
        body: 'Quien tenga el guion puede usar su propio agente de IA para leerlo y proponer personajes, eventos y ubicaciones de las fuentes, segmento por segmento. Todo puede ejecutarse en el equipo propio. La publicación requiere revisión humana y REZICS nunca recibe el guion completo.',
      },
      {
        title: 'Demos, lanzamientos y parches de idioma',
        body: 'Sigue una obra para recibir avisos sobre demos, lanzamientos y nuevos parches de idioma. Cada aviso enlaza a la edición correspondiente.',
      },
    ],
    parts: ['identity', 'editions', 'names', 'credits', 'relations', 'facets', 'progress', 'wiki'],
    partNotes: {
      identity: 'Las comunidades de novelas visuales en chino y japonés comparten la identidad de una obra y eligen por separado su nombre y orden.',
      editions: 'Las ediciones originales, traducciones oficiales, parches de aficionados y demos tienen registros propios con su idioma, plataforma, región y alcance.',
      names: 'Los títulos originales, alias y traducciones se guardan por separado. Que haya un título traducido no significa que exista una traducción jugable.',
      credits: 'Los guionistas, artistas, músicos y actores de voz aparecen por separado. Los actores de voz se vinculan con los personajes que interpretan.',
      relations: 'Las secuelas, historias derivadas, adaptaciones al anime y novelas están vinculadas.',
      facets: 'Al filtrar por idioma, plataforma, región y alcance, cada condición debe corresponder a una misma edición.',
      progress: 'Registra el progreso por ruta y consulta cuáles has terminado y cuáles te quedan.',
      wiki: 'La Wiki indica de qué ruta proceden los personajes y eventos. Las rutas que aún no has recorrido permanecen ocultas.',
    },
    connections: [
      { to: 'anime', label: 'Adaptación al anime' },
      { to: 'books', label: 'Adaptación a novela' },
      { to: 'games', label: 'Mismo artista' },
    ],
    community: {
      headline: 'Las comunidades en chino y japonés comparten los mismos datos.',
      body: 'Cada comunidad puede crear una Zone y elegir sus propias traducciones, descripciones y orden. Las obras, ediciones y créditos subyacentes son los mismos, así que una corrección en un lado también se refleja en el otro.',
    },
    imageAlt: 'Un cuadro de diálogo delante de una escena',
  },
  {
    id: 'mcp',
    name: 'MCP Hub',
    tag: 'MCP',
    group: 'agents',
    summary: 'Versiones y compatibilidad de servidores MCP',
    meta: {
      title: 'MCP Hub: servidores, versiones y pruebas de compatibilidad',
      description:
        'Consulta proyectos, versiones de paquetes y puntos de acceso de servidores MCP. Cada prueba de compatibilidad indica la tarea, el cliente, su versión, el idioma y la fecha. Las herramientas se registran por versión. Puedes valorarlas, debatir, crear listas y seguir las actualizaciones.',
    },
    hero: {
      headline: 'Busca servidores MCP con pruebas de uso real.',
      lede: 'Los proyectos, las versiones de paquetes, los puntos de acceso y las herramientas observadas se registran por separado. Cada prueba de compatibilidad indica qué tarea se completó, con qué cliente y versión, en qué idioma y en qué fecha.',
    },
    features: [
      {
        title: 'Cuatro elementos separados',
        body: 'El proyecto, la versión del paquete, el punto de acceso y las herramientas observadas tienen registros distintos. Que se pueda conectar a un punto de acceso no confirma quién lo administra, su compatibilidad ni los permisos de uso.',
      },
      {
        title: 'Pruebas de compatibilidad con fecha',
        body: 'Cada prueba indica la tarea, el cliente, su versión y el idioma, además de la fecha. Un resultado del año pasado aparece con la fecha del año pasado.',
      },
      {
        title: 'Las herramientas se registran por versión',
        body: 'Cada observación registra las herramientas y los esquemas que ofrecía el servidor en ese momento. Así puedes ver qué herramientas se añaden o cambian entre versiones.',
      },
      {
        title: 'Estar en el catálogo no es un aval',
        body: 'El registro describe el servidor, pero no significa que REZICS garantice su seguridad. Las pruebas describen cómo funcionó una versión concreta en una fecha determinada.',
      },
      {
        title: 'Organiza y comparte listas',
        body: 'Organiza servidores en una lista con su propósito y notas de configuración. Puedes hacerla pública, mantenerla privada o exportarla.',
      },
      {
        title: 'Los agentes de IA también pueden consultarlo',
        body: 'El índice también está disponible mediante la API y el servidor MCP de REZICS. Tu agente puede elegir los servidores que le sirvan.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'lists', 'follow'],
    partNotes: {
      identity: 'Cada proyecto de servidor MCP tiene una identidad, con sus paquetes, puntos de acceso y observaciones vinculados.',
      editions: 'Cada versión del paquete tiene su propio registro. Puedes consultar las versiones anteriores y su historial de cambios.',
      specs: 'Cada prueba indica la tarea, el cliente y la versión utilizados, el idioma y la fecha.',
      credits: 'Los responsables de mantenimiento y sus organizaciones tienen identidades propias. Las habilidades y API que mantiene una persona también están vinculadas.',
      ratings: 'Las valoraciones indican la versión correspondiente, el número de personas y la distribución.',
      discussion: 'Los métodos de configuración, informes de errores y consejos de uso se debaten en la página del servidor.',
      lists: 'Organiza los servidores que usas en listas con notas, y compártelas o expórtalas.',
      follow: 'Sigue un servidor para recibir avisos de versiones y anuncios según tus ajustes de notificación.',
    },
    connections: [
      { to: 'software', label: 'Proyectos y paquetes' },
      { to: 'apis', label: 'API disponible mediante MCP' },
      { to: 'skills', label: 'Mismo responsable de mantenimiento' },
    ],
    community: {
      headline: 'Cada uso real puede convertirse en una prueba.',
      body: 'Puedes informar si algo funciona o falla en un cliente, indicando su versión y la fecha. Los informes de agentes de IA usan el mismo formato y se revisan antes de aparecer en la página.',
    },
    imageAlt: 'Varios conectores y un enchufe',
  },
  {
    id: 'skills',
    name: 'Skill Hub',
    tag: 'Skills',
    group: 'agents',
    summary: 'Archivos, dependencias y compatibilidad de habilidades',
    meta: {
      title: 'Skill Hub: índice de habilidades para agentes de IA',
      description:
        'Cada habilidad enumera sus archivos, scripts y dependencias declaradas. Cada publicación fija el contenido, la licencia y la fuente. Al importar no se ejecuta ningún script. Las pruebas de compatibilidad llevan fecha y las valoraciones, debates y listas están en la misma página.',
    },
    hero: {
      headline: 'Consulta qué contiene una habilidad antes de usarla.',
      lede: 'Los archivos de instrucciones, scripts, referencias y recursos de cada habilidad aparecen por separado, con los ejecutables indicados. La página también muestra los paquetes necesarios, los clientes y versiones compatibles, y los registros de uso real.',
    },
    features: [
      {
        title: 'Archivos enumerados',
        body: 'Los archivos de instrucciones, scripts, referencias y recursos se muestran por categoría. Cada archivo tiene un hash y los ejecutables están indicados.',
      },
      {
        title: 'Dependencias declaradas con claridad',
        body: 'Los paquetes necesarios aparecen por ecosistema y se distinguen entre obligatorios y opcionales. Las instrucciones poco claras o los formatos no compatibles se señalan.',
      },
      {
        title: 'No se ejecuta al importar',
        body: 'Al importar una habilidad desde una carpeta o repositorio, los scripts se guardan pero no se ejecutan. Una carpeta que no cumpla los requisitos no se convierte en una habilidad.',
      },
      {
        title: 'Cada publicación mantiene su contenido',
        body: 'Cada publicación fija el contenido de los archivos, la licencia y la fuente. Los cambios posteriores crean una nueva versión y las anteriores siguen disponibles.',
      },
      {
        title: 'Quién la ha usado y dónde',
        body: 'Las pruebas de compatibilidad indican la tarea, el cliente y su versión, el idioma y la fecha. Así puedes ver en qué situaciones funciona la habilidad.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'lists', 'follow'],
    partNotes: {
      identity: 'Cada habilidad tiene una identidad. Puedes ver de qué repositorio se importó y cuántas veces ha cambiado.',
      editions: 'Cada publicación fija el contenido de los archivos, la licencia y la fuente. Al descargarla, obtienes la versión que se muestra en la página.',
      specs: 'Los paquetes necesarios se distinguen entre obligatorios y opcionales. Las dependencias no declaradas y los formatos no compatibles se indican.',
      credits: 'Los autores y responsables de mantenimiento tienen su propia identidad. Las otras habilidades y servidores que han creado aparecen vinculados.',
      ratings: 'Si las valoraciones aún no alcanzan el mínimo, no se calcula una media. Solo se muestra el número de personas y la distribución.',
      discussion: 'Los usos, límites e informes de problemas se debaten en la página de la habilidad.',
      lists: 'Organiza las habilidades en listas según tu flujo de trabajo y añade una descripción a cada una.',
      follow: 'Sigue una habilidad o a su autor para enterarte de las nuevas versiones.',
    },
    connections: [
      { to: 'software', label: 'Paquetes necesarios' },
      { to: 'mcp', label: 'Servidor del mismo autor' },
    ],
    community: {
      headline: 'Los autores de habilidades aparecen con su nombre.',
      body: 'Cada autor tiene una sola identidad en REZICS. Sus habilidades, servidores y otras obras aparecen en la misma página. Sigue a un autor para enterarte cuando publique otra habilidad.',
    },
    imageAlt: 'Un kit de herramientas con pequeños instrumentos',
  },
  {
    id: 'apis',
    name: 'API Hub',
    tag: 'APIs',
    group: 'agents',
    summary: 'Versiones, especificaciones y valoraciones de API públicas',
    meta: {
      title: 'API Hub: índice de API públicas',
      description:
        'Consulta las versiones y el historial de actualizaciones de API públicas. Las especificaciones indican cómo y cuándo se midieron para que puedas compararlas. Las valoraciones y los debates corresponden a cada versión. Sigue una API para recibir cambios en tu bandeja de entrada.',
    },
    hero: {
      headline: 'Consulta las versiones y las pruebas antes de elegir una API.',
      lede: 'Las versiones, el historial de actualizaciones y el estado de retirada de cada API pública aparecen juntos. Las especificaciones y mediciones indican el método, las condiciones y la fecha. Cada versión indica su método de autenticación y documentación, y las valoraciones y debates señalan a qué versión corresponden.',
    },
    features: [
      {
        title: 'Todas las versiones a la vista',
        body: 'Las versiones y sus actualizaciones se enumeran en orden. Las versiones retiradas o canceladas también se conservan con su estado indicado.',
      },
      {
        title: 'Las especificaciones explican cómo se midieron',
        body: 'Cada especificación incluye el método de medición, las condiciones, las unidades y la fecha. Los datos siempre muestran su fuente.',
      },
      {
        title: 'Compara en paralelo',
        body: 'Filtra por propósito, licencia u otros campos y compara varias API en una misma tabla.',
      },
      {
        title: 'Autenticación y documentación',
        body: 'Cada versión registra su método de autenticación y la fuente de sus especificaciones. Puedes filtrar por estos datos. Si cambia la versión, estos datos también cambian con ella.',
      },
      {
        title: 'Recibe los cambios en tu bandeja de entrada',
        body: 'Sigue una API para recibir avisos de nuevas versiones y retiradas en tu bandeja de entrada. También puedes recibir resúmenes.',
      },
      {
        title: 'Organiza las API de tus proyectos',
        body: 'Organiza en una lista las API de un proyecto y añade el propósito de cada una. Puedes compartirla y exportarla.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'follow', 'lists'],
    partNotes: {
      identity: 'Cada API pública tiene una identidad y todos sus identificadores y nombres anteriores apuntan a ella.',
      editions: 'Las versiones y sus actualizaciones aparecen juntas, con las versiones retiradas indicadas.',
      specs: 'Las mediciones indican el método, las condiciones, las unidades y la fecha para que puedas compararlas en una misma tabla.',
      credits: 'Las organizaciones proveedoras y los equipos de mantenimiento tienen sus propias identidades. El software y los servidores MCP de una organización están vinculados.',
      ratings: 'Las valoraciones indican la pregunta y el grupo de personas que respondió.',
      discussion: 'Las experiencias de integración, los límites y las alternativas se debaten en la página de una API.',
      follow: 'Sigue una API para recibir avisos de nuevas versiones o retiradas en tu bandeja de entrada.',
      lists: 'Organiza en una lista las API de un proyecto y añade notas sobre su propósito.',
    },
    connections: [
      { to: 'mcp', label: 'Disponible como servidor MCP' },
      { to: 'software', label: 'Software de la misma organización' },
    ],
    community: {
      headline: 'Quienes han integrado una API comparten su experiencia.',
      body: 'Los desarrolladores pueden debatir los límites, los precios y las alternativas en la página de una API. Los hechos confirmados en el debate se pueden proponer para la página y, tras una revisión humana, quedan a la vista de todos.',
    },
    imageAlt: 'Varios puntos de acceso conectados',
  },
];
