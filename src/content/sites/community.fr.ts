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
  contentsLabel: 'Contenu de cette page',
  hero: {
    headline: 'Vous prenez la parole. La communauté vous accueille.',
    lede: 'Vous avez une seule identité publique, liée à vos avis, vos listes et votre bibliothèque. Chaque communauté propose ses sujets, ses règles et sa modération sans vous absorber.',
    imageAlt: 'De nombreux petits papiers entourent une grande feuille gris foncé, comme des personnes réunies autour d’une même table.',
  },
  person: {
    label: 'Identité',
    headline: 'Une identité publique, partout dans les communautés.',
    lead: 'Vous pouvez utiliser un pseudonyme, mais pas usurper l’identité d’une autre personne. Votre bibliothèque, vos listes, vos avis, vos œuvres, vos traductions et vos discussions sont liés à cette identité, et non à une communauté. Vous restez la même personne d’une communauté à l’autre.',
    facts: [
      { title: 'Changer de nom sans perdre vos liens', body: 'Après un changement de nom, l’ancienne adresse redirige vers la nouvelle. Les noms trop proches de ceux d’autres personnes sont refusés.' },
      { title: 'Revendiquer vos œuvres', body: 'Si vos œuvres figurent déjà dans le catalogue, vous pouvez revendiquer leur identité.' },
      { title: 'Les abonnements sont à sens unique', body: 'Les autres peuvent vous suivre sans attendre votre accord, et vous pouvez refuser. Chaque personne choisit les notifications qu’elle reçoit et leur fréquence.' },
      { title: 'Vos publications restent en place', body: 'Quand vous quittez une communauté, vos publications y restent sous votre nom.' },
      {
        title: 'Quand une communauté prend la parole',
        body: 'Une communauté peut publier ses sélections et ses décisions en son nom, par l’intermédiaire de ses représentants autorisés. Chaque sélection renvoie à la décision correspondante. Vos publications y restent les vôtres.',
      },
    ],
  },
  lead: {
    label: 'Signature',
    headline: 'L’ordre des noms suit une règle claire.',
    lead: 'Chaque publication porte votre nom et celui de la communauté. Pour les personnes qui ne vous connaissent pas encore, votre nom ne signifie pas grand-chose : la communauté apparaît donc d’abord. Après vous avoir suivi, elles voient votre nom en premier.',
    specimen: {
      toggleLabel: 'Changer de point de vue',
      toggle: ['Vue des personnes qui vous suivent', 'Vue des personnes qui ne vous suivent pas'],
      you: 'Vous',
      realm: 'Club de lecture fantastique',
      follow: 'Suivre',
      post: 'La fin du troisième tome est plus calme que je ne le pensais.',
      caption: 'Exemple : la signature d’une même publication vue par deux types de lecteurs.',
    },
    facts: [
      { title: 'La personne vous suit', body: 'Votre nom apparaît avant celui de la communauté.' },
      { title: 'La publication n’est dans aucune communauté', body: 'Votre nom apparaît en premier.' },
      { title: 'Dans les autres cas', body: 'Le nom de la communauté apparaît d’abord, avec le bouton « Suivre ».' },
      { title: 'Sélections et décisions de la communauté', body: 'Seul le nom de la communauté apparaît, sans celui de la personne qui a choisi.' },
    ],
    note: 'Le nom mis en avant apparaît en premier, accompagné d’une icône et en gras. Cette règle est toujours la même pour une publication.',
  },
  realm: {
    label: 'Communauté',
    headline: 'Chaque communauté définit ses propres règles.',
    lead: 'Chaque communauté décide qui peut la rejoindre, ce que les nouveaux membres peuvent voir et comment le contenu est modéré. Ses paramètres sont publiés.',
    facts: [
      { title: 'Trois façons de rejoindre', body: 'Vous pouvez rejoindre une communauté librement, sur demande ou sur invitation. L’adhésion entraîne aussi un abonnement. En partant, seul cet abonnement est annulé.' },
      { title: 'Des règles dans chaque langue', body: 'Les membres lisent les règles dans leur langue, par exemple en chinois ou en japonais. Les publications peuvent être rédigées dans n’importe quelle langue.' },
      {
        title: 'Visible ne veut pas dire facile à trouver',
        body: 'Une communauté peut être publique sans apparaître dans la recherche, les recommandations ni le plan du site. Si une communauté privée accepte les demandes, les personnes extérieures ne voient que son nom, sa présentation, ses règles et le bouton de demande.',
      },
      { title: 'Les signalements deviennent des dossiers', body: 'Un contenu signalé par un membre devient un dossier. La décision est motivée et les personnes concernées peuvent faire appel.' },
      { title: 'Décisions par vote', body: 'Une communauté peut organiser un vote. Une décision adoptée ne peut porter que sur les actions que la communauté est autorisée à entreprendre.' },
      { title: 'Les règles de la plateforme prévalent', body: 'Une communauté peut adopter des règles plus strictes que celles de la plateforme, jamais plus souples. Son propriétaire ne peut pas la fermer. La plateforme peut la suspendre pour des raisons de modération ou de droits, puis la rétablir.' },
    ],
  },
  leave: {
    statement: 'Vous pouvez quitter une communauté à tout moment,',
    sub: 'car votre identité, votre bibliothèque et vos listes ne lui appartiennent pas.',
  },
  ratings: {
    label: 'Notes',
    headline: 'Chaque note précise la question, l’objet évalué et les personnes qui l’ont donnée.',
    lead: [
      'Chaque note précise trois éléments : la question posée, l’objet évalué et le groupe qui a donné la note. Les notes portant sur des questions différentes ne sont pas moyennées ensemble. Une note sur un épisode ne compte pas pour toute l’œuvre, et celle d’une édition reste liée à cette édition.',
      'Un avis peut être publié sans note. Il suffit de préciser s’il porte sur l’histoire, la traduction, la lecture à voix haute ou la réalisation, et sur quelle version. Les notes de l’ensemble de REZICS s’affichent d’abord, puis celles de vos communautés et des communautés ayant le plus de notes. Sans aucune note, aucun zéro ni graphique vide ne s’affiche.',
    ],
    figures: [
      { value: '5', unit: 'notes', body: 'La moyenne d’une œuvre s’affiche à partir de 5 notes. En dessous, le nombre et la répartition sont indiqués, ainsi que le nombre de notes manquantes.' },
      { value: '10', unit: 'notes', body: 'Pour un objet plus précis, comme un personnage dans un épisode, la moyenne apparaît à partir de 10 notes.' },
      { value: '50', unit: 'notes', body: 'Une œuvre entre au classement à partir de 50 notes. Le classement publie la moyenne et la pondération utilisées.' },
    ],
    note: 'Ces seuils sont les valeurs par défaut. Chaque type d’évaluation peut les adapter à ses données.',
  },
  follow: {
    label: 'Suivre',
    headline: 'Suivez ce qui vous intéresse.',
    lead: 'Vous pouvez suivre des personnes, des organisations, des communautés, des œuvres, des sujets, des listes et même des filtres enregistrés. Pour chaque abonnement, choisissez toutes les notifications, les sélections ou aucune.',
    facts: [
      { title: 'Personnes et organisations', body: 'Par défaut, vous recevez les nouvelles œuvres et les annonces.' },
      { title: 'Œuvres', body: 'Vous êtes averti·e lorsqu’un nouveau chapitre ou une nouvelle édition paraît dans une langue que vous comprenez. Une œuvre ajoutée à « En cours de lecture » est suivie automatiquement.' },
      { title: 'Communauté', body: 'Par défaut, seules les annonces et les décisions sont signalées. Les publications ordinaires restent dans votre fil.' },
      { title: 'Sujets et filtres', body: 'Aucune notification par défaut. Chacun apparaît dans un onglet de la page d’accueil.' },
      { title: 'Listes', body: 'Une liste peut réunir des types d’œuvres différents, comme des romans, des séries animées et des jeux. Ajoutez une note à chaque élément, choisissez l’ordre et exportez la liste à tout moment.' },
      { title: 'Les notifications essentielles restent actives', body: 'Même si vous désactivez les notifications, vous recevez celles qui vous concernent directement, comme les réponses et les mentions.' },
    ],
  },
  feed: {
    label: 'Fil',
    headline: 'Les nouveautés apparaissent en premier. Vous savez quand vous avez tout lu.',
    lead: 'L’onglet « Récent » de votre fil suit strictement l’ordre chronologique. Les autres modes de tri indiquent leurs critères.',
    facts: [
      { title: '« Populaire » est calculé séparément', body: 'Le classement « Populaire » est calculé séparément pour chaque communauté. Une seule communauté ne peut pas remplir une page, et les petites communautés restent visibles.' },
      { title: 'Les recommandations sont motivées', body: 'Les recommandations tiennent compte de vos abonnements, de vos langues et de votre bibliothèque. Chacune indique sa raison, et vous pouvez toutes les désactiver.' },
      { title: 'Masquer, ignorer ou bloquer', body: 'Trois actions différentes, réunies dans le même menu.' },
      { title: 'Choisir où recevoir les notifications', body: 'Choisissez séparément les notifications dans la boîte de réception, les notifications push et les récapitulatifs périodiques par courriel. Désabonnez-vous d’un courriel en un clic.' },
    ],
  },
  recognition: {
    label: 'Niveaux',
    headline: 'Seules les contributions retenues comptent, pas les visites quotidiennes.',
    lead: 'Chaque communauté possède ses propres points d’expérience et ses niveaux. Ils récompensent les avis, corrections, traductions, actions de modération et créations retenus pour leur utilité. Les niveaux ne peuvent être dépensés ou transférés et ne donnent aucun droit de gestion. Utiliser plusieurs comptes pour les gonfler enfreint les règles d’utilisation.',
  },
  family: {
    closing: 'Créez un site pour votre communauté et choisissez-en chaque page.',
  },
};

export default {
  id: 'community',
  base: '/engine/community/',
  name: 'Communauté',
  theme: { module: 'community' },
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Communauté : une identité, partout',
        description:
          'Sur REZICS, votre bibliothèque, vos listes et vos avis sont liés à une seule identité publique, partout où vous allez. Chaque communauté fixe ses règles et sa modération. Les notes précisent leur question et leur objet, et vous choisissez vos abonnements et notifications.',
      },
    },
  ],
  strings,
} satisfies MiniSite<CommunityStrings>;
