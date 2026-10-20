// 創作與發行 /engine/create/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md).
import type { MiniSite } from '../schema';
import type { ModuleFamilyStrings, ModuleSection, ModuleStatement } from './community';

export interface CreateStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  writing: ModuleSection;
  world: ModuleSection;
  chapters: ModuleSection;
  editions: ModuleSection & {
    specimen: {
      label: string;
      items: { title: string; value: string; unit: string; note: string }[];
      caption: string;
    };
  };
  copyright: ModuleStatement;
  rights: ModuleSection;
  sell: ModuleSection;
  /** The statement of account: its lines and what fills each, never amounts or shares. */
  account: ModuleSection & {
    rows: { label: string; detail: string; kind: 'paid' | 'deduct' | 'net' | 'share' }[];
    deduct: string;
    caption: string;
  };
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CreateStrings = {
  contentsLabel: 'Contenido de esta página',
  hero: {
    headline: 'Autores, ediciones y derechos, con todo bien registrado.',
    lede: 'Escribe, programa y publica capítulos aquí. Cada edición se archiva; las traducciones y las licencias quedan registradas. Al vender libros y juegos directamente, el estado de cuenta muestra cada deducción.',
    imageAlt: 'Dos pilas de hojas encuadernadas por un borde con tiras de papel gris oscuro. Sus cantos dejan ver capas de color.',
  },
  writing: {
    label: 'Escritura',
    headline: 'Puedes recuperar cada versión guardada.',
    lead: 'Al escribir una obra, tienes toda la barra de herramientas. Para responder a un debate, solo aparecen los formatos más habituales. En el móvil, la barra queda sobre el teclado y no lo oculta al usarla. Puedes escribir un capítulo largo con la misma comodidad que una respuesta breve.',
    facts: [
      { title: 'Cada guardado crea una revisión', body: 'Cada guardado conserva una versión exacta. Si borras todo el contenido de un capítulo, también queda registrada una revisión vacía. Los capítulos vacíos no se pueden publicar.' },
      { title: 'Publica según tu zona horaria', body: 'Si programas la publicación para el viernes a las ocho de la tarde, saldrá a esa hora en tu zona horaria. La programación se ejecuta en el servidor aunque apagues el ordenador.' },
      { title: 'Permisos para cada colaborador', body: 'Al invitar a alguien a colaborar, puedes darle permiso para leer, sugerir, editar o publicar. Cada permiso se configura por separado: poder editar no implica poder publicar. Los comentarios de lectores y colaboradores llegan a una misma bandeja.' },
      { title: 'Llévate la obra completa', body: 'Puedes crear una copia completa de la obra y exportarla en un archivo que conserva el formato. También puedes elegir una versión simplificada en texto sin formato. Importa borradores antiguos en texto o Markdown para seguir escribiendo.' },
      { title: 'Anotaciones y énfasis', body: 'El editor permite añadir anotaciones, como zhuyin o furigana, y marcas de énfasis. Las obras en japonés admiten la lectura vertical.' },
    ],
  },
  world: {
    label: 'Guía del mundo',
    headline: 'Junto a tu manuscrito, un mundo que solo tú puedes ver.',
    lead: 'Personajes, lugares, facciones, acontecimientos, objetos y detalles del mundo tienen plantillas revisables junto al manuscrito. Solo tú puedes verlos.',
    facts: [
      { title: 'Mapa', body: 'Marca lugares en un mapa que hayas dibujado.' },
      { title: 'Mapa de relaciones', body: 'Conecta las relaciones entre personajes en un diagrama.' },
      { title: 'Cronología', body: 'La cronología también incluye acontecimientos con fechas inciertas. Cada diagrama tiene una versión en lista que puedes leer punto por punto.' },
      { title: 'Publica algunas páginas', body: 'Elige qué páginas publicar en la Wiki+ de la obra. Los lectores no ven las revisiones privadas que hagas.' },
      { title: 'Asistente de continuidad', body: 'El asistente que elijas solo señala contradicciones entre tus notas y el manuscrito. Tú sigues escribiendo los capítulos.' },
      { title: 'Sin suscripción', body: 'La guía del mundo y las exportaciones completas que puedes volver a importar no requieren una suscripción de pago.' },
    ],
  },
  chapters: {
    label: 'Capítulos',
    headline: 'Publicar un capítulo es añadir una publicación a un libro.',
    lead: 'Los capítulos no se convierten en obras independientes. El libro es la obra y reúne las valoraciones, los seguimientos y los créditos de autor. Cada capítulo es una publicación en el índice del libro.',
    facts: [
      { title: 'El mismo capítulo en dos sitios', body: 'Un mismo capítulo puede aparecer en una serie y en una recopilación. El texto y los comentarios se guardan una sola vez, y el progreso de lectura se registra por separado en cada lugar.' },
      { title: 'Puede contener solo imágenes o encuestas', body: 'Puedes publicar una entrada con solo imágenes o una encuesta, sin añadir texto.' },
      { title: 'Las notas del autor van aparte', body: 'Las notas del autor al final de un capítulo son un complemento de la publicación. No cuentan para el límite de palabras, se omiten en las traducciones y no se incluyen en las ediciones oficiales.' },
      { title: 'Sigue con el capítulo siguiente', body: 'La sección «Continuar» de la página de inicio abre el siguiente capítulo sin leer. El debate de cada capítulo se ajusta al progreso del lector y oculta los spoilers posteriores.' },
      { title: 'Los comentarios siguen vinculados al texto', body: 'Los comentarios y las citas conservan la revisión y el párrafo a los que respondían. Si el autor edita el texto, no se desplazan a otra frase.' },
    ],
  },
  editions: {
    label: 'Ediciones',
    specimen: {
      label: 'Ejemplo de ediciones',
      items: [
        { title: 'Versión principal', value: '13', unit: 'capítulos', note: 'Sigue actualizándose al añadir capítulos' },
        { title: 'Primera edición archivada', value: '12', unit: 'capítulos', note: 'Conserva el contenido publicado entonces' },
      ],
      caption: 'Después de añadir el capítulo 13 a la versión principal, la primera edición sigue incluyendo solo los doce primeros.',
    },
    headline: 'Las ediciones publicadas se archivan y las posteriores se registran aparte.',
    lead: 'Cada obra tiene una versión principal que se actualiza con capítulos e idiomas nuevos. Una edición oficial archiva el contenido publicado en ese momento. Las traducciones y ampliaciones posteriores se registran por separado y enlazan con su fuente.',
    facts: [
      { title: 'Versión principal', body: 'Cada obra tiene una única versión principal, desde la que acceden todos los lectores. Los capítulos y los idiomas nuevos se añaden aquí sin dividir la identidad de la obra.' },
      { title: 'Publicación en línea', body: 'Una serie publicada en línea también cuenta como una edición. Como el contenido puede cambiar, se conserva la dirección original y una captura fechada de cada cambio.' },
      { title: 'Edición fija', body: 'Elige contenido publicado y archívalo como una edición fija. Los capítulos nuevos no se añaden a esa edición.' },
      { title: 'Una edición, varios canales', body: 'Una edición puede estar disponible en varias tiendas y sitios sin duplicarse. Las versiones compartidas sin permiso tienen un registro aparte y nunca se mezclan con la edición oficial.' },
      { title: 'Traducción', body: 'Una traducción es una nueva versión del contenido que indica qué revisión o edición usó como fuente. Si no se conoce la fuente, se marca como pendiente de confirmar.' },
      {
        title: 'Traducciones de lectores',
        body: 'Las traducciones de lectores de obras en línea se reúnen en una edición virtual que indica hasta dónde llega, por ejemplo, los primeros veinte de cien capítulos (ejemplo). Esta edición solo organiza los datos en REZICS y no significa que se haya publicado oficialmente.',
      },
    ],
    note: 'Cada edición indica si es oficial, no oficial, virtual, descatalogada o cancelada. Si cambia su estado, el registro permanece.',
  },
  copyright: {
    statement: 'Permitir la lectura pública',
    sub: 'no autoriza a otras personas a republicar, vender, traducir ni usar la obra para entrenar IA.',
  },
  rights: {
    label: 'Traducciones y derechos',
    headline: 'Cada traducción acredita a su traductor y especifica los derechos.',
    lead: 'El permiso para traducir, la publicación de una traducción y el uso de IA en una obra nunca se dan por supuestos. Cada declaración indica quién la hizo y cuándo.',
    facts: [
      {
        title: 'La licencia del servicio tiene límites',
        body: 'Conservas los derechos de autor. Al publicar contenido en REZICS, solo autorizas a REZICS a almacenarlo, reproducirlo, transmitirlo, mostrarlo, procesarlo y cambiar su formato para ofrecerte el servicio. Esta licencia no permite usarlo en anuncios, vender tu contenido privado, crear nuevas ediciones comerciales ni entrenar IA sin límites.',
      },
      { title: 'Cada traducción tiene sus propios créditos', body: 'Una obra puede tener varias traducciones. Los lectores y las comunidades eligen cuál usar, y cada una acredita a su traductor. El autor puede impedir que la página original enlace a una traducción y presentar una reclamación de derechos.' },
      {
        title: 'La publicación necesita un fundamento',
        body: 'Las traducciones de lectores son privadas por defecto. Para publicarlas, debe constar un fundamento: que la obra sea de dominio público, tenga una licencia abierta que permita traducirla, que el autor haya dado su consentimiento o que ya haya autorizado públicamente la traducción. Una votación de la comunidad no permite publicar una traducción.',
      },
      {
        title: 'Progreso por fragmentos',
        body: 'Cada fragmento de la traducción tiene un estado: borrador, traducido, revisado o final. Si cambia el original, el fragmento correspondiente se marca como pendiente de actualización y permanece en su sitio, sin moverse a otra frase.',
      },
      {
        title: 'Declaración de licencia',
        body: 'Cada declaración especifica qué autoriza, qué licencia y versión se aplica, quién la hizo, cuándo y qué cubre. Lo que se desconoce queda indicado. La declaración no equivale a una confirmación legal de la licencia. El autor también puede publicar una autorización permanente, como el permiso para traducir. Si la retira, la declaración original no se reescribe.',
      },
      {
        title: 'Declaración sobre el uso de IA',
        body: 'El texto, las imágenes y las traducciones indican por separado si no se usó IA, si se usó como ayuda o si generó contenido. La revisión humana se indica aparte y los lectores pueden elegir qué mostrar.',
      },
    ],
  },
  sell: {
    label: 'Publicación',
    headline: 'Vende libros y juegos directamente a tus lectores.',
    lead: 'Los creadores con un contrato con REZICS pueden vender libros y juegos directamente a sus lectores. Los libros se ofrecen en EPUB o PDF, y los juegos y las novelas visuales como archivos descargables. No llevan DRM ni requieren un lanzador.',
    facts: [
      { title: 'Consulta los detalles antes de comprar', body: 'Antes del pago se muestran la edición, el idioma, los requisitos de compatibilidad, el precio, los impuestos, el vendedor, la licencia de uso y las condiciones de reembolso.' },
      { title: 'Muestra, actualizaciones y descargas', body: 'Los lectores pueden consultar una muestra. Las actualizaciones y las descargas posteriores se rigen por las condiciones de compra.' },
      { title: 'Las compras siguen disponibles', body: 'Si una obra se retira o termina el contrato, quienes ya la compraron conservan la licencia según las condiciones originales y la legislación aplicable.' },
      { title: 'Privacidad de los lectores', body: 'No recibes el historial de lectura ni la biblioteca de quienes compran tus obras. Solo obtienes los datos agregados necesarios para las cuentas.' },
      { title: 'El contrato solo autoriza la publicación', body: 'El contrato de publicación solo permite a REZICS alojar, convertir, promocionar y vender la obra. Las traducciones, las adaptaciones, las nuevas ediciones y el entrenamiento de IA requieren tu consentimiento por separado.' },
      { title: 'Solo se venden obras de creadores contratados', body: 'No es un mercado abierto. No se venden obras con contenido sexual explícito ni obras clasificadas como R18 o R18G.' },
    ],
  },
  account: {
    label: 'Liquidación',
    headline: 'Consulta tus cuentas, partida por partida.',
    lead: 'Los ingresos netos son los pagos recibidos menos los impuestos recaudados, las comisiones de pago y transacción acordadas, los reembolsos, las anulaciones y los contracargos. Los gastos operativos, como alojamiento, salarios y marketing, y los impuestos sobre los ingresos de REZICS no se deducen.',
    rows: [
      { label: 'Pago del lector', detail: 'El importe pagado por el lector, incluidos los impuestos', kind: 'paid' },
      { label: 'Impuestos', detail: 'Impuestos recaudados y remitidos según la ley', kind: 'deduct' },
      { label: 'Comisiones de pago y transacción', detail: 'Comisiones de pago documentadas y gastos de cambio de divisa y disputas indicados en el contrato', kind: 'deduct' },
      { label: 'Reembolsos y disputas', detail: 'Importes reembolsados, anulados o impugnados', kind: 'deduct' },
      { label: 'Ingresos netos', detail: 'Pagos menos las deducciones de transacción acordadas', kind: 'net' },
      { label: 'Parte del creador', detail: 'El porcentaje que te corresponde según el contrato', kind: 'share' },
      { label: 'Parte de REZICS', detail: 'El porcentaje que corresponde a la plataforma según el contrato', kind: 'share' },
    ],
    deduct: 'Deducción',
    caption: 'Ejemplo de liquidación: cada deducción ocupa una línea y ninguna se cuenta dos veces. Los importes se calculan por transacción.',
  },
  family: {
    closing: 'Tú escribes y REZICS registra cada edición y cada cuenta.',
  },
};

export default {
  id: 'create',
  base: '/engine/create/',
  name: 'Creación y publicación',
  theme: { module: 'create' },
  pages: [
    {
      slug: '',
      label: 'Inicio',
      meta: {
        title: 'Creación y publicación: manuscritos, ediciones y liquidaciones',
        description:
          'Escribe, programa y publica capítulos en REZICS. Cada guardado conserva una revisión y cada edición publicada se archiva por separado. Las traducciones acreditan a sus traductores y los derechos se declaran punto por punto. También puedes vender libros y juegos directamente y consultar cada deducción en la liquidación.',
      },
    },
  ],
  strings,
} satisfies MiniSite<CreateStrings>;
