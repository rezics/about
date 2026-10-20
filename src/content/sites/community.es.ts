// 社群 /engine/community/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md). The section shapes are shared with create and trust.
import type { Item, MiniSite } from '../schema';

/** A v3 section: eyebrow, serif heading, lead text and an optional hairline facts list. */
export interface ModuleSection {
  label: string;
  headline: string;
  lead?: string | string[];
  facts?: Item[];
  note?: string;
}

/** The module family's strings: the ring of the five modules and the page's closing line. */
export interface ModuleFamilyStrings {
  closing: string;
}

/** A number written into the rules: a numeral, its unit and one sentence. */
export interface Figure {
  value: string;
  unit: string;
  body: string;
}

/** A large serif statement; `sub` is its muted second half. */
export interface ModuleStatement {
  statement: string;
  sub: string;
  body?: string;
}

export interface CommunityStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  person: ModuleSection;
  lead: ModuleSection & {
    /** The post's byline as two kinds of reader see it (示意). */
    specimen: {
      toggleLabel: string;
      toggle: [string, string];
      you: string;
      realm: string;
      follow: string;
      post: string;
      caption: string;
    };
  };
  realm: ModuleSection;
  leave: ModuleStatement;
  ratings: ModuleSection & { figures: Figure[] };
  follow: ModuleSection;
  feed: ModuleSection;
  recognition: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CommunityStrings = {
  contentsLabel: 'Contenido de esta página',
  hero: {
    headline: 'Tú hablas. La comunidad es el espacio.',
    lede: 'Tienes una sola identidad pública. Tus valoraciones, listas y biblioteca van contigo. Cada comunidad ofrece temas, normas y moderación, sin apropiarse de tu identidad.',
    imageAlt: 'Varios trozos de papel pequeños rodean uno gris oscuro más grande, como personas reunidas alrededor de una mesa.',
  },
  person: {
    label: 'Identidad',
    headline: 'Una identidad pública en cada comunidad.',
    lead: 'Puedes usar un seudónimo, pero no hacerte pasar por otra persona. Tu biblioteca, tus listas, valoraciones, obras, traducciones y debates pertenecen a esta identidad, no a ninguna comunidad. Si cambias de comunidad, sigues siendo la misma persona.',
    facts: [
      { title: 'Cambiar de nombre no rompe los enlaces', body: 'Al cambiar de nombre, la dirección anterior lleva al nuevo. Se bloquean los nombres demasiado parecidos a los de otras personas.' },
      { title: 'Reclama tus obras', body: 'Si el catálogo ya incluye una obra tuya, puedes reclamar esa identidad.' },
      { title: 'Seguir es unilateral', body: 'Cualquiera puede seguirte sin esperar tu aprobación, y tú puedes rechazarlo. Quien te sigue decide qué notificaciones recibe y con qué frecuencia.' },
      { title: 'Las publicaciones se quedan donde están', body: 'Cuando dejas una comunidad, tus publicaciones siguen allí y conservan tu nombre.' },
      {
        title: 'Cuando habla una comunidad',
        body: 'La comunidad también publica selecciones y decisiones en su propio nombre, por medio de representantes autorizados. Cada selección enlaza con la decisión que la respalda. Que tu publicación esté en una comunidad no significa que hable en su nombre.',
      },
    ],
  },
  lead: {
    label: 'Autoría',
    headline: 'Quién aparece primero en una publicación sigue una regla fija.',
    lead: 'Cada publicación muestra tu nombre y el de la comunidad. Para quien aún no te conoce, tu nombre dice poco, así que primero ve la comunidad. Cuando te sigue, primero te ve a ti.',
    specimen: {
      toggleLabel: 'Cambiar de lector',
      toggle: ['Lo que ve quien te sigue', 'Lo que ve quien aún no te sigue'],
      you: 'Tú',
      realm: 'Club de lectura de fantasía',
      follow: 'Seguir',
      post: 'El final del tercer volumen fue más tranquilo de lo que esperaba.',
      caption: 'Ejemplo: dos lectores ven la autoría de la misma publicación.',
    },
    facts: [
      { title: 'Te sigue un lector', body: 'Tu nombre aparece primero.' },
      { title: 'La publicación no pertenece a ninguna comunidad', body: 'Tu nombre aparece primero.' },
      { title: 'En los demás casos', body: 'La comunidad aparece primero y el botón Seguir va en la misma línea.' },
      { title: 'Selecciones y decisiones de la comunidad', body: 'Solo aparece la comunidad, no quien hizo la selección.' },
    ],
    note: 'Quien aparece primero va delante, con un icono y en negrita. La regla es fija, así que una publicación siempre se muestra igual.',
  },
  realm: {
    label: 'Comunidad',
    headline: 'La comunidad es el espacio y establece sus normas.',
    lead: 'Cada comunidad decide quién puede entrar, qué pueden ver sus nuevos miembros y cómo se modera el contenido. Sus ajustes están a la vista.',
    facts: [
      { title: 'Tres formas de unirse', body: 'Puedes unirte libremente, solicitar acceso o esperar una invitación. Al unirte, también sigues a la comunidad. Al salir, solo se cancela el seguimiento que venía con la membresía.' },
      { title: 'Normas en cada idioma', body: 'Los miembros que hablan chino leen las normas en chino, y quienes hablan japonés las leen en japonés. Las publicaciones pueden estar en cualquier idioma.' },
      {
        title: 'Se puede leer sin aparecer en búsquedas',
        body: 'Una comunidad puede ser pública y permitir la lectura, pero no aparecer en búsquedas, recomendaciones ni mapas del sitio. Si una comunidad privada acepta solicitudes, quienes no son miembros solo ven el nombre, la descripción, las normas y el botón para solicitar acceso.',
      },
      { title: 'Las denuncias se tramitan como casos', body: 'Una denuncia de un miembro abre un caso. La resolución incluye los motivos y las personas afectadas pueden apelar.' },
      { title: 'Decisiones por votación', body: 'La comunidad puede convocar una votación. Las decisiones aprobadas solo pueden autorizar acciones que ya estén permitidas en esa comunidad.' },
      { title: 'Las normas de la plataforma prevalecen', body: 'La comunidad puede imponer normas más estrictas que las de la plataforma, pero no más laxas. Sus propietarios no pueden cerrarla por su cuenta. La plataforma puede suspenderla por motivos de moderación o derechos y restaurarla después.' },
    ],
  },
  leave: {
    statement: 'Puedes dejar cualquier comunidad cuando quieras,',
    sub: 'porque tu identidad, biblioteca y listas nunca le pertenecen.',
  },
  ratings: {
    label: 'Valoraciones',
    headline: 'Cada valoración indica la pregunta, la obra y quién la hizo.',
    lead: [
      'Cada valoración indica tres cosas: qué se pregunta, qué obra se valora y qué grupo de personas la valora. Las puntuaciones de preguntas distintas no se promedian. Las de un episodio no cuentan para la obra completa, y las de una edición se quedan en esa edición.',
      'Puedes escribir una reseña sin puntuar. Solo indica si valoras la historia, la traducción, la narración o la producción, y qué edición. Primero se muestran las valoraciones de toda la plataforma, junto con las de tu comunidad y las de las comunidades con más valoraciones. Si aún no hay ninguna, no se muestra un cero ni un gráfico vacío.',
    ],
    figures: [
      { value: '5', unit: 'valoraciones', body: 'La media aparece cuando una obra tiene cinco valoraciones. Antes de eso, se muestran la cantidad, la distribución y cuántas faltan.' },
      { value: '10', unit: 'valoraciones', body: 'Para una parte más específica, como un personaje de un episodio, hacen falta diez valoraciones para mostrar la media.' },
      { value: '50', unit: 'valoraciones', body: 'Una obra necesita cincuenta valoraciones para entrar en la clasificación. La clasificación muestra la media y la ponderación que utiliza.' },
    ],
    note: 'Estos umbrales son los valores predeterminados. Cada tipo de valoración puede ajustarlos según sus datos.',
  },
  follow: {
    label: 'Seguir',
    headline: 'Sigue lo que te interesa.',
    lead: 'Puedes seguir a personas, organizaciones, comunidades, obras, temas, listas e incluso filtros guardados. Cada seguimiento tiene tres opciones de notificación: todas, solo selecciones o ninguna.',
    facts: [
      { title: 'Personas y organizaciones', body: 'Por defecto, recibes avisos de obras nuevas y anuncios.' },
      { title: 'Obras', body: 'Recibes avisos cuando hay capítulos o ediciones nuevas en un idioma que entiendes. Al añadir una obra a «Leyendo», empiezas a seguirla automáticamente.' },
      { title: 'Comunidad', body: 'Por defecto, solo recibes avisos de anuncios y decisiones. Las publicaciones habituales aparecen en el feed.' },
      { title: 'Temas y vistas', body: 'Por defecto, no generan avisos y aparecen en su propia pestaña de inicio.' },
      { title: 'Listas', body: 'Las listas pueden mezclar tipos de obra: después de una novela pueden venir un anime y un juego. Cada elemento admite una nota. Tú eliges el orden y puedes exportar la lista completa cuando quieras.' },
      { title: 'Algunas notificaciones siempre llegan', body: 'Aunque desactives las notificaciones, recibirás avisos de respuestas, menciones y otros asuntos que te afectan directamente.' },
    ],
  },
  feed: {
    label: 'Feed',
    headline: 'Lo más reciente aparece primero y el feed indica cuándo llegas al final.',
    lead: 'La vista «Más recientes» ordena el feed por hora, sin cambiar el orden a escondidas. Si eliges otra vista, también puedes ver en qué se basa.',
    facts: [
      { title: 'La clasificación «Mejores» se calcula por comunidad', body: 'La clasificación «Mejores» se calcula por separado en cada comunidad. Así, una sola comunidad no llena la página y también se ven las más pequeñas.' },
      { title: 'Las recomendaciones explican por qué', body: 'Las recomendaciones solo tienen en cuenta a quién sigues, tus idiomas y tu biblioteca. Cada una explica el motivo y puedes desactivarlas por completo.' },
      { title: 'Silenciar, ignorar y bloquear', body: 'Tres acciones distintas en un mismo menú.' },
      { title: 'Elige dónde recibir avisos', body: 'Puedes elegir por separado los avisos en la bandeja de entrada, las notificaciones push y los resúmenes periódicos por correo. Cancela la suscripción a un correo con un solo clic.' },
    ],
  },
  recognition: {
    label: 'Nivel',
    headline: 'Cuenta el trabajo aceptado, no los registros diarios.',
    lead: 'Cada comunidad tiene su propio nivel y experiencia, que se ganan con reseñas, correcciones, traducciones, moderación y obras aceptadas que de verdad ayudan. Los niveles no se pueden gastar ni transferir, y no conceden permisos de moderación. Usar varias cuentas para inflar el nivel infringe las normas de uso.',
  },
  family: {
    closing: 'Crea un sitio para que tu comunidad decida cómo se ve cada página.',
  },
};

export default {
  id: 'community',
  base: '/engine/community/',
  name: 'Comunidad',
  theme: { module: 'community' },
  pages: [
    {
      slug: '',
      label: 'Resumen',
      meta: {
        title: 'Comunidad: una identidad para todos tus espacios',
        description:
          'En REZICS tienes una sola identidad pública. Tu biblioteca, listas y reseñas van contigo a cada comunidad. La comunidad ofrece un espacio, normas y moderación; las valoraciones indican qué se valora y a quién, y tú decides a quién seguir y qué avisos recibir.',
      },
    },
  ],
  strings,
} satisfies MiniSite<CommunityStrings>;
