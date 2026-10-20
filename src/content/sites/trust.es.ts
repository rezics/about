// 信任 /engine/trust/: copy for the v3 module page (plan in src/sites/community/SITE.md). Every
// statement restates docs/contracts, docs/operations or docs/legal in rezics-next (facts.md).
import type { MiniSite } from '../schema';
import type { Figure, ModuleFamilyStrings, ModuleSection } from './community';

export interface TrustStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  marks: ModuleSection;
  imports: ModuleSection;
  humans: ModuleSection & { trail: { label: string; stages: string[] } };
  /** Numbers written into the policies: a numeral, its unit and one sentence. */
  numbers: ModuleSection & { figures: Figure[] };
  views: ModuleSection;
  privacy: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: TrustStrings = {
  contentsLabel: 'Contenido de esta página',
  hero: {
    headline: 'Puedes ver quién decide y en qué se basa.',
    lede: 'Los datos indican su fuente, las licencias sus términos y las decisiones de moderación las reglas y pruebas en que se basan. Las revisiones, disputas y apelaciones se registran sin borrar las anteriores.',
    imageAlt: 'Cinco hojas grises, ocres y azul claro se superponen en capas, cada una con una etiqueta en blanco en el borde.',
  },
  marks: {
    label: 'Registros',
    headline: 'Cada nueva decisión se registra y las anteriores permanecen.',
    lead: 'Cada dato conserva su fuente, verificación y disputas: de dónde procede, si se verificó y si alguien lo cuestionó. Un cambio añade una nueva decisión y mantiene la anterior en el historial.',
    facts: [
      {
        title: 'Fuentes',
        body: 'Los datos y textos importados por la plataforma indican su fuente y licencia, y enlazan al original. Solo se publica lo que permite la licencia. Si no está clara, se importan únicamente los datos. Nunca se copian reseñas, blogs ni comentarios escritos por usuarios de otros sitios.',
      },
      { title: 'Sin verificar', body: 'Las entradas nuevas pueden ser públicas, pero se marcan como no verificadas y cada campo muestra su fuente. Hasta verificarlas, no aparecen en exportaciones ni recomendaciones de confianza.' },
      {
        title: 'Revisado y aún en disputa',
        body: 'La revisión registra quién la hizo, qué pruebas consideró y qué versión de las reglas aplicó. Un dato revisado aún puede ser cuestionado: el mismo campo puede marcarse como revisado y en disputa. La disputa queda pendiente hasta que se evalúe. La falta de datos o una evaluación antigua no cuentan como refutación.',
      },
      {
        title: 'Declaración sobre el uso de IA',
        body: 'Los textos, las imágenes y las traducciones indican si no se usó IA, si se usó como ayuda o si generó contenido. La revisión humana se indica aparte. Marcar algo como revisado no cambia «generado» por «sin IA». Una declaración vacía tampoco significa que no se usó IA.',
      },
      { title: 'Sin evaluar', body: 'El contenido cuya clasificación por edad aún no se ha evaluado se marca como «sin evaluar», nunca como apto para todos.' },
      {
        title: 'Identidad automatizada',
        body: 'Los agentes de IA deben identificarse como automatizados, indicar quién los opera y actuar solo dentro del alcance autorizado. No pueden falsificar reseñas, votos ni otras formas de participación. Sus resultados registran las entradas y los métodos usados. No pueden autorizarse ni marcar su propio trabajo como revisado por una persona.',
      },
    ],
  },
  imports: {
    label: 'Importaciones',
    headline: 'La plataforma responde de los datos que importa.',
    lead: 'REZICS solo publica el contenido importado dentro de los límites de su licencia. Los datos que introduce una persona son su contribución y responsabilidad. La herramienta le recuerda que indique la fuente y la plataforma conserva la referencia aportada.',
    facts: [
      { title: 'La licencia acompaña al texto', body: 'Las sinopsis con una licencia abierta que exige compartir igual conservan la licencia original al editarse o traducirse. La licencia se incluye al leer y exportar el texto.' },
      { title: 'La portada pertenece a quien posee los derechos', body: 'Las portadas importadas indican quién posee los derechos de autor y de dónde proceden. Se usan solo como portadas, no como banners ni imágenes de presentación.' },
      { title: 'Sin portada, la página sigue completa', body: 'Las obras sin portada muestran una cubierta tipográfica con el título y el autor.' },
      { title: 'Indica si se evaluó la licencia', body: 'Las páginas de las obras y de los datos muestran la licencia aplicable y sus requisitos de atribución. Si aún no se ha evaluado, se indica «sin evaluar».' },
      { title: 'Wiki+ limita las citas', body: 'Las citas de texto original en Wiki+ tienen un límite por fragmento y por fuente. El total se calcula entre cuentas, traducciones y Zones.' },
      { title: 'Cada dato de Wiki+ indica su ubicación', body: 'Cada dato de Wiki+ preparado por un agente de IA incluye el capítulo correspondiente y una cita breve. No se muestra a los lectores hasta que una persona lo revise.' },
    ],
  },
  humans: {
    label: 'Apelaciones y decisiones',
    trail: {
      label: 'Ejemplo de retirada y apelación de una portada',
      stages: ['Decisión inicial', 'Apelación', 'Nueva decisión'],
    },
    headline: 'Las decisiones las toman personas.',
    lead: 'Los informes y las reclamaciones de derechos son alegaciones, no conclusiones. Una persona decide si corresponde un proceso de disputa general o un procedimiento legal de notificación y contranotificación. La decisión identifica las reglas y pruebas aplicadas y solo afecta al contenido y al uso señalados.',
    facts: [
      {
        title: 'Retira solo el elemento señalado',
        body: 'Ejemplo: si se retira una portada, se muestra una cubierta tipográfica en su lugar y se conservan los demás datos de la obra. Las actualizaciones posteriores no vuelven a añadir esa portada.',
      },
      { title: 'Una persona revisa la apelación', body: 'Puedes apelar una decisión. Si hay personal disponible, la revisa otra persona. Si no es posible, se te informa de que la revisará quien tomó la decisión original.' },
      { title: 'La revisión crea un nuevo registro', body: 'La decisión revisada se registra por separado y se conserva la anterior.' },
      {
        title: 'La IA solo es una ayuda',
        body: 'La puntuación de un detector de IA nunca es la única base de una decisión. Si la IA ayuda en una revisión, se registran el método, las entradas y la configuración. Los resultados inciertos pasan a revisión humana o quedan pendientes.',
      },
      { title: 'Las pruebas más sensibles', body: 'Las pruebas sensibles sobre seguridad infantil o imágenes íntimas nunca se envían a una IA generativa de uso general.' },
    ],
  },
  numbers: {
    label: 'Plazos',
    headline: 'Las cifras que establecen las reglas.',
    lead: 'Todas las cifras siguientes proceden de las políticas de REZICS.',
    figures: [
      {
        value: '48',
        unit: 'horas',
        body: 'Tras recibir una solicitud de retirada válida, las imágenes íntimas compartidas sin consentimiento se eliminan en un plazo de 48 horas. También se buscan y retiran copias idénticas en la plataforma. Una apelación no detiene el plazo.',
      },
      {
        value: '10 a 14',
        unit: 'días laborables',
        body: 'Tras recibir una contranotificación válida de derechos de autor, el contenido se restablece entre los días laborables 10 y 14 si no se recibe aviso de que quien posee los derechos ha iniciado una demanda. Si hay otros límites de seguridad, legales o contractuales, se explican el motivo y el proceso de apelación.',
      },
      { value: '6', unit: 'meses', body: 'Puedes apelar sin coste durante al menos seis meses desde que recibas la decisión de moderación. También puedes apelar la decisión de no actuar sobre un informe.' },
      { value: '13', unit: 'años', body: 'La edad mínima para registrarse depende de la región: 13 años en Taiwán y otros lugares, 14 en Corea del Sur y 16 en el Espacio Económico Europeo. Se aplica la norma más estricta.' },
      { value: '7', unit: 'días', body: 'Los datos originales de la biblioteca se conservan siete días desde la carga. Después dejan de estar disponibles para lectura y exportación y se programa su eliminación. Exporta la biblioteca antes del plazo si quieres conservar esos campos.' },
      { value: '1', unit: 'meses', body: 'Las solicitudes de datos sujetas al RGPD suelen responderse en un mes. Si se necesita más tiempo, se informa durante el primer mes.' },
    ],
    note: 'Puedes informar de un problema y apelar aunque no tengas cuenta o tu cuenta esté suspendida.',
  },
  views: {
    label: 'Quién puede ver qué',
    headline: 'Cada persona puede ver partes distintas de una misma página.',
    lead: 'Cada solicitud al servidor comprueba bloqueos, privacidad, progreso de lectura, jurisdicción y retiradas. Los resultados de búsqueda, recuentos, vistas previas, avisos, exportaciones y datos que reciben los agentes de IA siguen las mismas reglas.',
    facts: [
      { title: 'Sin iniciar sesión', body: 'Solo puede ver contenido para todos los públicos y contenido sin evaluar. Wiki+ empieza por el principio de la historia y no revela lo que viene después.' },
      { title: 'Si has leído hasta el capítulo 3', body: 'Wiki+ y los debates se detienen donde has leído. Puedes elegir otro capítulo o mostrar todo.' },
      {
        title: 'Contenido clasificado',
        body: 'R15 es para mayores de quince años. El contenido sexual (R18) y el contenido extremo (R18G) se activan por separado. Si una obra incluye ambos, debes activar las dos opciones. No se pueden activar en regiones donde no se ofrece contenido para adultos. La clasificación solo afecta a lo que se muestra y no concede acceso a contenido privado.',
      },
      { title: 'Administradores de comunidades', body: 'Solo pueden acceder a la información necesaria para moderar. No pueden consultar sin motivo las cuentas de los miembros, sus bibliotecas privadas ni los informes de seguridad confidenciales.' },
      { title: 'Buscadores y vistas previas', body: 'Solo reciben la vista disponible sin iniciar sesión. El contenido para adultos tampoco aparece en correos ni notificaciones push.' },
      { title: 'Imágenes ocultas', body: 'Las imágenes que quizá no quieras ver en público se ocultan por defecto. Tú decides si mostrarlas directamente. Las imágenes ocultas por el autor permanecen ocultas.' },
    ],
  },
  privacy: {
    label: 'Privacidad',
    headline: 'Tu historial de lectura no se usa para publicidad.',
    facts: [
      {
        title: 'Sin perfiles publicitarios',
        body: 'El historial de lectura privado no se usa para crear perfiles publicitarios ni para deducir características sensibles con fines de marketing. El sitio no tiene rastreadores publicitarios y no vende datos personales. Las cookies de REZICS solo guardan el idioma de la interfaz, el tema visual y el inicio de sesión.',
      },
      {
        title: 'El entrenamiento requiere consentimiento',
        body: 'Por defecto, los borradores privados y el historial de lectura no se usan para entrenar modelos de IA. Solo se usan si decides participar expresamente. Registrarte o usar una función de IA no cuenta como consentimiento.',
      },
      { title: 'Información antes de enviar datos', body: 'Antes de que una función de IA envíe datos privados a un servicio externo, se indica qué servicio es, qué datos recibe, para qué los usa y cuánto tiempo los conserva.' },
      { title: 'Privado por defecto', body: 'Los borradores y el historial de lectura son privados por defecto. Solo otras personas si decides compartirlos. Aunque alguien administre tu identidad pública o tu comunidad, no puede acceder a tu historial privado.' },
      { title: 'La fecha de nacimiento es privada', body: 'Tu fecha de nacimiento es privada por defecto. Activar contenido clasificado no la hace pública y la edad necesaria no depende de que la compartas.' },
      { title: 'Puedes solicitar tus datos', body: 'Puedes solicitar acceso, corrección, exportación o eliminación de tus datos, incluso sin una cuenta.' },
    ],
  },
  family: {
    closing: 'Cada dato indica su fuente para que puedas consultarla.',
  },
};

export default {
  id: 'trust',
  base: '/engine/trust/',
  name: 'Confianza',
  theme: { module: 'trust' },
  pages: [
    {
      slug: '',
      label: 'Inicio',
      meta: {
        title: 'Confianza: cada dato tiene una fuente',
        description:
          'Los datos de REZICS indican sus fuentes y licencias. Las revisiones, disputas y apelaciones se registran sin sobrescribirse. Puedes informar de un problema sin registrarte. Las imágenes íntimas compartidas sin consentimiento se retiran en un plazo de 48 horas tras recibir una solicitud válida.',
      },
    },
  ],
  strings,
} satisfies MiniSite<TrustStrings>;
