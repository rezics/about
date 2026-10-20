// The 動畫 site: every visible string of /anime/ and its six inner pages, in the v3 parts (hero,
// sections, tile masonry, photo rows, statements, facts lists, closing). The plan is in
// src/sites/anime/SITE.md under "v3"; claims and sources in src/sites/anime/facts.md. Example
// data is generic and marked 示意; the one real work named is 《魔法禁書目錄》, text only
// (.temp/sites/EXAMPLE-WORK.md).
import type { KindId, MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'anime')!;

/** A title and its line: facts rows, tiles. */
export interface Row {
  title: string;
  body: string;
}
/** A still-life from the site's paper series (public/images/sites/anime/<src>-<w>.avif|webp). */
export interface Photo {
  src: 'hero' | 'weeks' | 'covered' | 'threads' | 'sources';
  alt: string;
}
/** An inner page's opening: the h1 and its line. */
export interface Head {
  headline: string;
  lede: string;
}
/** A section: eyebrow in columns 1 to 3, the h2, a lead. */
export interface Section {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** Large serif: `text`, then `muted` in muted ink, and an optional note under it. */
export interface Statement {
  text: string;
  muted: string;
  note?: string;
}
/** The final invitation, specific to the subject of each page. */
export interface ClosingCopy {
  headline: string;
  body: string;
}

export type AnimeStrings = {
  common: {
    /** Eyebrow of the section that leads to the next pages. */
    onward: string;
    /** Caption under generic example data. */
    example: string;
  };
  landing: {
    closing: ClosingCopy;
    hero: Head & { photo: Photo };
    pages: Section & { lines: { slug: string; line: string }[] };
    schedule: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    next: Statement;
    spoilers: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    parts: Section & { notes: Partial<Record<PartId, string>> };
    neighbours: Section & { tiles: { to: KindId; label: string }[] };
  };
  seasons: {
    closing: ClosingCopy;
    head: Head;
    marks: Section & { rows: Row[] };
    zones: { eyebrow: string; headline: string; body: string[]; photo: Photo };
    known: Section & { rows: Row[] };
    years: Section;
    /** One line that previews the next page. */
    next: string;
  };
  tracking: {
    closing: ClosingCopy;
    head: Head;
    statuses: Section & { rows: Row[] };
    seasons: Section & { tiles: Row[] };
    rewatch: Section;
    lists: Statement;
    next: string;
  };
  discussion: {
    closing: ClosingCopy;
    head: Head;
    spoiler: { eyebrow: string; headline: string; body: string; photo: Photo };
    position: Section & { rows: Row[] };
    conversations: Section & { rows: Row[] };
    spaces: Section & { tiles: Row[] };
    unseen: Statement;
    next: string;
  };
  ratings: {
    closing: ClosingCopy;
    head: Head;
    anatomy: Section & { rows: Row[] };
    episodes: Statement;
    targets: Section & { rows: Row[] };
    lists: Section & { tiles: string[] };
    next: string;
  };
  credits: {
    closing: ClosingCopy;
    head: Head;
    record: Section & { rows: Row[] };
    voice: { eyebrow: string; headline: string; body: string; photo: Photo };
    studio: Section;
    next: string;
  };
  adaptations: {
    closing: ClosingCopy;
    head: Head;
    example: { eyebrow: string; headline: string; body: string; photo: Photo };
    /** Generic family: each tile in the colour of its kind (null: a relation still to confirm). */
    family: Section & { tiles: { kind: KindId | null; relation: string; name: string }[] };
    scoped: Section;
    relations: Section & { rows: Row[] };
    orders: Statement;
    next: string;
  };
};

const site: MiniSite<AnimeStrings> = {
  id: 'anime',
  base: '/anime/',
  name: 'Anime',
  theme: { kind: 'anime' },
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Anime : calendrier, progression, discussions et œuvres d’origine',
        description:
          'Suivez les anime sur REZICS. Le calendrier indique l’heure de diffusion de chaque épisode et votre progression se met à jour à chaque visionnage. Chaque épisode a sa discussion et ses notes, reliées aux comédiens de doublage, aux studios et aux œuvres d’origine.',
      },
    },
    {
      slug: 'seasons',
      label: 'Saisons et diffusions',
      meta: {
        title: 'Saisons et calendrier des diffusions d’anime',
        description:
          'Les anime commencent généralement quatre fois par an. REZICS réunit les nouvelles séries de chaque saison et l’heure de diffusion des épisodes dans un calendrier adapté à votre fuseau horaire. Si seule la date est connue, seule la date est affichée. Vous pouvez aussi exporter les rappels vers votre calendrier.',
      },
    },
    {
      slug: 'tracking',
      label: 'Progression',
      meta: {
        title: 'Progression dans les anime, épisode après épisode',
        description:
          'Suivez vos anime sur REZICS avec cinq statuts : à voir, en cours, terminés, en pause ou abandonnés. Notez chaque épisode vu, trouvez le suivant dans l’ordre de la série et consignez chaque revisionnage séparément. Importez et exportez vos listes.',
      },
    },
    {
      slug: 'discussion',
      label: 'Discussions par épisode',
      meta: {
        title: 'Discussions sur les anime, un fil par épisode',
        description:
          'Sur REZICS, chaque épisode d’anime a son propre fil de discussion. Les révélations sont masquées jusqu’à ce que vous choisissiez de les afficher. Wiki+ suit votre progression, et les communautés peuvent créer leur propre site d’anime dans une Zone.',
      },
    },
    {
      slug: 'ratings',
      label: 'Notes et listes',
      meta: {
        title: 'Notes, critiques et listes d’anime',
        description:
          'Sur REZICS, chaque note précise l’objet évalué, l’échelle utilisée, le nombre de réponses et le groupe concerné. Les notes de la série et de ses épisodes sont séparées. Une critique peut être publiée sans note. Vous pouvez trier, annoter et exporter vos listes.',
      },
    },
    {
      slug: 'credits',
      label: 'Production et distribution',
      meta: {
        title: 'Équipes de production et comédiens de doublage',
        description:
          'Sur REZICS, les réalisateurs, scénaristes, studios et comédiens de doublage ont chacun leur identité. Chaque crédit précise le rôle et l’œuvre, et relie le doublage au personnage. Suivez une personne ou un studio pour connaître ses nouvelles œuvres.',
      },
    },
    {
      slug: 'adaptations',
      label: 'Œuvres d’origine et adaptations',
      meta: {
        title: 'Œuvres d’origine et adaptations d’anime',
        description:
          'Sur REZICS, un anime et son roman ou manga d’origine, ses suites et ses adaptations en jeu ont chacun leur identité et sont reliés par des relations. La progression de l’anime et celle de l’œuvre d’origine sont séparées. Les différences entre versions précisent leur source.',
      },
    },
  ],
  strings: {
    common: {
      onward: 'À suivre',
      example: 'Exemple.',
    },
    landing: {
      closing: {
        headline: 'Retrouvez les anime que vous suivez dans votre calendrier.',
        body: 'Organisez les anime que vous souhaitez voir sur REZICS, suivez votre progression et rejoignez la discussion de chaque épisode.',
      },
      hero: {
        headline: 'Suivez chaque épisode, du premier au dernier.',
        lede: 'Le calendrier présente les épisodes et leurs heures de diffusion dans votre fuseau horaire. Marquez chaque épisode vu. Les comédiens de doublage, les studios et les œuvres d’origine sont reliés à l’anime.',
        photo: {
          src: 'hero',
          alt: 'Une longue bande de papier rose est pliée en douze faces et tient debout sur un fond blanc chaud. Une feuille noire et une feuille gris mauve maintiennent son extrémité.',
        },
      },
      pages: {
        eyebrow: 'Six pages',
        headline: 'Du calendrier à l’œuvre d’origine, six aspects de l’anime.',
        lines: [
          { slug: 'seasons', line: 'Le calendrier de chaque saison dans votre fuseau horaire' },
          { slug: 'tracking', line: 'Trouvez le prochain épisode dans l’ordre de la série' },
          { slug: 'discussion', line: 'Les révélations restent masquées' },
          { slug: 'ratings', line: 'Les notes des épisodes et de la série sont séparées' },
          { slug: 'credits', line: 'Chaque nom a sa propre identité' },
          { slug: 'adaptations', line: 'Œuvre d’origine, suite et dérivés sont reliés' },
        ],
      },
      schedule: {
        eyebrow: 'Calendrier des diffusions',
        headline: 'Une première diffusion à une heure du matin, selon votre horloge.',
        body: 'Au Japon, les horaires indiqués « mardi 25 h » désignent le mercredi à une heure du matin. REZICS convertit l’heure selon votre fuseau horaire. Si la source ne donne qu’une date, seule la date est affichée.',
        link: 'Saisons et calendrier des diffusions',
        photo: {
          src: 'weeks',
          alt: 'De fines bandes de papier rose sont rangées sur quatre lignes, comme les semaines d’un calendrier. L’une est gris mauve et une place reste vide.',
        },
      },
      next: { text: 'Quel est le prochain épisode ?', muted: 'Suivez l’ordre confirmé de la série.' },
      spoilers: {
        eyebrow: 'Discussions par épisode',
        headline: 'Un fil par épisode, avec les révélations masquées.',
        body: 'Chaque épisode a son propre fil de discussion. Les passages qui dépassent votre progression restent masqués jusqu’à ce que vous choisissiez de les afficher. Par défaut, Wiki+ s’arrête aussi au dernier épisode que vous avez vu.',
        link: 'Comment fonctionnent les limites de révélations',
        photo: {
          src: 'covered',
          alt: 'Une bande de papier rose pliée en plusieurs faces repose à plat. Une feuille noire aux coins légèrement relevés en couvre la partie arrière.',
        },
      },
      parts: {
        eyebrow: 'Huit composants',
        headline: 'Huit composants pour les anime.',
        lead: 'Les livres, mangas et jeux partagent ces composants. Les anime en utilisent huit et placent le calendrier à côté de l’identité.',
        notes: {
          identity: 'Les titres chinois, japonais et anglais renvoient au même anime. Chaque suite et chaque film a sa propre identité.',
          schedule: 'Dates de début, heures de diffusion, reports et annulations figurent dans le même calendrier.',
          credits: 'Réalisateurs, scénaristes et studios sont crédités selon leur rôle. Chaque doublage est relié au comédien et au personnage.',
          relations: 'Œuvre d’origine, suite, dérivé et remake sont qualifiés. La relation mène aussi à l’œuvre d’origine.',
          progress: 'L’épisode vu, le retard sur la diffusion et le prochain épisode sont consignés séparément.',
          ratings: 'La série et chaque épisode ont leur note, avec le nombre de réponses et le groupe qui les a données.',
          discussion: 'Chaque épisode a son fil de discussion. Les révélations au-delà de votre progression s’ouvrent à votre demande.',
          wiki: 'Chaque fait de Wiki+ indique l’épisode dont il provient. La lecture suit votre progression.',
        },
      },
      neighbours: {
        eyebrow: 'Domaines associés',
        headline: 'Chaque œuvre garde sa propre identité.',
        lead: 'L’œuvre d’origine peut être un roman, un manga ou un roman visuel. Un anime peut aussi être adapté en jeu. Chaque œuvre a sa propre page et les relations les relient. Un même comédien de doublage garde son identité dans chaque domaine.',
        tiles: [
          { to: 'books', label: 'Romans d’origine' },
          { to: 'manga', label: 'Manga d’origine et adaptations' },
          { to: 'visual-novels', label: 'Adapté d’un roman visuel' },
          { to: 'games', label: 'Adaptations en jeu et comédiens communs' },
        ],
      },
    },
    seasons: {
      closing: {
        headline: 'Planifiez les anime que vous voulez suivre.',
        body: 'Commencez par les nouvelles séries de la saison, consultez le calendrier et programmez un rappel pour le prochain épisode.',
      },
      head: {
        headline: 'Quatre saisons, un calendrier pour chacune.',
        lede: 'Les anime commencent le plus souvent en janvier, avril, juillet et octobre. Le calendrier réunit les dates de début et les heures de diffusion de chaque épisode des séries que vous suivez.',
      },
      marks: {
        eyebrow: 'Cinq statuts',
        headline: 'Annonce, programmation, disponibilité, report et annulation sont distincts.',
        rows: [
          { title: 'Annoncé', body: 'La nouvelle est publiée, mais la date n’est pas encore fixée.' },
          { title: 'Programmé', body: 'La date de diffusion est connue. L’heure est indiquée si elle est disponible.' },
          { title: 'Disponible', body: 'La région, la plateforme et la langue de visionnage sont précisées.' },
          { title: 'Reporté', body: 'La date prévue a changé et l’historique du changement reste consultable.' },
          { title: 'Annulé', body: 'La diffusion est annulée et le statut reste affiché.' },
        ],
      },
      zones: {
        eyebrow: 'Votre fuseau horaire',
        headline: 'Les heures de diffusion sont adaptées à votre fuseau horaire.',
        body: [
          'Les heures de diffusion sont affichées dans votre fuseau horaire. Un même épisode peut donc avoir une date et une heure différentes selon le lieu.',
          'Au Japon, « mardi 25 h » désigne le mercredi à une heure du matin. À Taipei, il est diffusé le mercredi à minuit, et à Los Angeles le mardi matin.',
        ],
        photo: {
          src: 'weeks',
          alt: 'De fines bandes de papier rose sont rangées sur quatre lignes, comme les semaines d’un calendrier. L’une est gris mauve et une place reste vide.',
        },
      },
      known: {
        eyebrow: 'Informations connues',
        headline: 'Date, heure et disponibilité sont indiquées séparément.',
        rows: [
          {
            title: 'Pas d’heure sans source',
            body: 'Si la source ne donne qu’une date, le calendrier indique cette date et la mention « heure à confirmer ». Aucune heure n’est inventée.',
          },
          {
            title: 'Diffusion ne signifie pas disponibilité',
            body: 'Connaître la date de diffusion ne signifie pas que l’épisode est accessible dans votre région. La présence de sous-titres et d’un doublage est précisée pour chaque région et plateforme. Les informations inconnues sont signalées comme telles.',
          },
          {
            title: 'Rappels et calendrier',
            body: 'Suivez un anime pour recevoir un rappel à l’heure de votre choix et exporter le calendrier des diffusions. Si une source modifie l’horaire, votre rappel est signalé pour que vous décidiez de le modifier.',
          },
        ],
      },
      years: {
        eyebrow: 'Par année',
        headline: 'Parcourez les anime d’une année jusqu’au dernier.',
        lead: 'Choisissez une année pour parcourir les anime publiés cette année-là dans le catalogue. Tant que le total n’est pas définitif, le nombre affiché est précédé de « au moins ».',
      },
      next: 'Être à jour dans la diffusion ne signifie pas avoir terminé la série.',
    },
    tracking: {
      closing: {
        headline: 'Reprenez là où vous en étiez.',
        body: 'Ajoutez les anime en cours à une liste, notez les épisodes vus et gardez une trace de chaque revisionnage.',
      },
      head: {
        headline: 'Votre progression avance à chaque épisode vu.',
        lede: 'Suivez les anime épisode après épisode. Être à jour dans votre région, avoir vu tous les épisodes diffusés et avoir terminé une série sont trois états distincts, indiqués séparément sur REZICS.',
      },
      statuses: {
        eyebrow: 'Cinq statuts',
        headline: 'À voir, en cours, terminée, en pause ou abandonnée.',
        lead: 'Vos données de visionnage restent privées, sauf si vous choisissez de les partager.',
        rows: [
          { title: 'À voir', body: 'Ajoutez l’anime à votre liste. Vous serez averti de ses nouvelles annonces.' },
          { title: 'En cours', body: 'Notez le dernier épisode vu. Choisissez les notifications à recevoir à la sortie d’un nouvel épisode.' },
          { title: 'Terminée', body: 'Vous avez terminé la série. Par défaut, Wiki+ affiche alors toute l’histoire du même récit.' },
          { title: 'En pause', body: 'Mettez la lecture en pause sans perdre votre progression.' },
          { title: 'Abandonnée', body: 'Vous arrêtez de regarder, mais votre historique reste disponible si vous souhaitez reprendre un jour.' },
        ],
      },
      seasons: {
        eyebrow: 'Entre les saisons',
        headline: 'Trouvez le prochain épisode dans l’ordre de la série.',
        tiles: [
          { title: 'Saison 1', body: '12 épisodes sur 12 vus, puis passez à la saison 2' },
          { title: 'Saison 2', body: '6 épisodes sur 6 vus, à jour avec la diffusion' },
          { title: 'Épisode spécial', body: 'Contenu supplémentaire, sans effet sur la fin de la série' },
        ],
      },
      rewatch: {
        eyebrow: 'Revisionnage',
        headline: 'Chaque revisionnage est une nouvelle lecture.',
        lead: 'Une deuxième lecture depuis le début fait l’objet d’un relevé distinct. La date de fin de la première reste intacte. Si vous ne connaissez que l’année, seule l’année est indiquée.',
      },
      lists: {
        text: 'Vos listes vous appartiennent et restent exportables :',
        muted: 'Importez des listes créées ailleurs et exportez vos statuts, votre progression et vos notes.',
      },
      next: 'Après avoir vu l’épisode 8, passez à son fil de discussion.',
    },
    discussion: {
      closing: {
        headline: 'Retrouvez la discussion de l’épisode que vous venez de voir.',
        body: 'Échangez avec les personnes qui ont vu le même épisode. Les révélations suivantes attendent que vous les rattrapiez.',
      },
      head: {
        headline: 'Discutez d’un épisode après l’avoir vu.',
        lede: 'Chaque épisode a son propre fil de discussion. Vous n’avez pas à chercher dans un fil consacré à toute la série, ni à rejoindre une communauté pour lire les échanges.',
      },
      spoiler: {
        eyebrow: 'Limite des révélations',
        headline: 'La limite suit votre progression.',
        body: 'Les contenus signalés comme révélations sont masqués jusqu’à ce que vous choisissiez de les afficher. Ce choix est privé et ne compte pas comme un vote indiquant qu’il s’agit d’une révélation.',
        photo: {
          src: 'covered',
          alt: 'Une bande de papier rose pliée en plusieurs faces repose à plat. Une feuille noire aux coins légèrement relevés en couvre la partie arrière.',
        },
      },
      position: {
        eyebrow: 'Votre position',
        headline: 'Vous choisissez votre limite, qui vous suit d’une page à l’autre.',
        rows: [
          { title: 'À votre choix', body: 'Une fois connecté, Wiki+ affiche par défaut les épisodes que vous avez vus. Vous pouvez choisir un épisode ou tout afficher.' },
          { title: 'Protection sans connexion', body: 'Les visiteurs non connectés voient les contenus jusqu’à la première révélation de l’histoire.' },
          { title: 'Votre choix vous suit', body: 'Votre version et votre limite de révélations restent les mêmes lorsque vous passez des discussions aux critiques puis à Wiki+.' },
        ],
      },
      conversations: {
        eyebrow: 'Échanges',
        headline: 'Trois types d’échanges, dans des espaces distincts.',
        lead: 'Chaque publication indique à quel type d’échange elle appartient.',
        rows: [
          { title: 'Discussion', body: 'Parlez de l’intrigue et des personnages, ou imaginez la suite.' },
          { title: 'Réponses aux critiques', body: 'Les échanges sur une critique restent sous cette critique.' },
          { title: 'Corrections des données', body: 'Si une date de diffusion ou un comédien est incorrect, discutez de la proposition de correction et ajoutez une source.' },
        ],
      },
      spaces: {
        eyebrow: 'Communauté',
        headline: 'Les communautés peuvent aussi créer leur propre site.',
        lead: 'Les encadrés d’une Zone utilisent les mêmes faits que la page de l’œuvre.',
        tiles: [
          { title: 'Communauté', body: 'Un groupe avec ses membres, ses règles et sa modération.' },
          { title: 'Zone', body: 'Le site de la communauté, avec ses pages de personnages, guides des épisodes, chronologies et relations, à l’adresse qu’elle choisit.' },
        ],
      },
      unseen: { text: 'Ce que vous n’avez pas vu,', muted: 'vous n’avez pas à le savoir.' },
      next: 'L’histoire et la production peuvent être notées séparément.',
    },
    ratings: {
      closing: {
        headline: 'Gardez votre avis avec l’œuvre.',
        body: 'Notez un épisode ou toute la série, écrivez une critique et ajoutez les œuvres à revoir à une liste.',
      },
      head: {
        headline: 'Chaque note précise ce qu’elle évalue.',
        lede: 'Pour un même anime, vous pouvez évaluer l’histoire ou le dessin d’un épisode. REZICS indique la question, l’échelle, le nombre de réponses et le groupe concerné. Les notes portant sur des questions différentes ne sont pas mélangées.',
      },
      anatomy: {
        eyebrow: 'Exemple de note',
        headline: '4,2 sur une échelle de 5.',
        rows: [
          { title: 'Question', body: 'Le dessin de l’épisode 8. Les notes d’un épisode et celles de la série sont calculées séparément.' },
          { title: 'Échelle', body: 'Sur 5, la moyenne est de 4,15 et s’affiche comme 4,2.' },
          { title: 'Nombre', body: '20 personnes. Si le nombre de notes est insuffisant, seul leur nombre et leur répartition sont affichés.' },
          { title: 'Répartition', body: '10 notes de 5, 6 notes de 4, 2 notes de 3, 1 note de 2 et 1 note de 1.' },
          { title: 'Groupe', body: 'Une communauté de fans. Les notes de l’ensemble du site et des autres communautés sont distinctes et peuvent être comparées.' },
        ],
      },
      episodes: {
        text: 'Un épisode reste un épisode,',
        muted: 'la série reste la série.',
        note: 'Chaque épisode a ses propres notes. Celles de la série proviennent uniquement des personnes qui l’ont évaluée dans son ensemble. Toute agrégation indique sa méthode et le nombre d’épisodes concernés.',
      },
      targets: {
        eyebrow: 'Critiques',
        headline: 'Une critique précise ce qu’elle porte sur.',
        lead: 'Vous pouvez écrire une critique sans donner de note.',
        rows: [
          { title: 'Histoire', body: 'L’intrigue, les personnages et la fin.' },
          { title: 'Production', body: 'Le dessin, la musique et la mise en scène.' },
          { title: 'Traduction', body: 'Les sous-titres d’une version linguistique précise.' },
          { title: 'Épisode', body: 'Une critique consacrée à un épisode reste sur sa page.' },
          { title: 'Personnage dans un épisode', body: '« Comment ce personnage s’en sort dans cet épisode » est une autre question, avec ses propres notes.' },
        ],
      },
      lists: {
        eyebrow: 'Listes',
        headline: 'Organisez vos listes dans l’ordre de votre choix.',
        lead: 'Une liste peut réunir des anime, des romans d’origine, des mangas et des jeux. Ajoutez une note à chaque élément, choisissez l’ordre et exportez la liste. Suivez les listes d’autres personnes pour être averti de leurs nouveaux éléments.',
        tiles: ['Ordre de découverte', 'Anime suivis cette saison', 'À voir ce week-end', 'Comparaison des œuvres d’origine et des anime'],
      },
      next: 'Les réalisateurs, studios et comédiens de doublage sont chacun reliés à leurs œuvres.',
    },
    credits: {
      closing: {
        headline: 'Trouvez une autre œuvre à partir d’un nom.',
        body: 'Suivez les crédits des réalisateurs, artistes et comédiens de doublage pour découvrir les personnes derrière chaque œuvre.',
      },
      head: {
        headline: 'Les crédits mènent à chaque œuvre.',
        lede: 'Sur REZICS, les réalisateurs, scénaristes, directeurs d’animation, studios et comédiens de doublage ont chacun une identité. Ouvrez un nom pour voir toutes les œuvres auxquelles cette personne a contribué et son rôle dans chacune.',
      },
      record: {
        eyebrow: 'Un crédit',
        headline: 'Cinq informations par crédit.',
        rows: [
          { title: 'Qui', body: 'Une personne ou une entreprise, avec un lien vers sa page.' },
          { title: 'Rôle', body: 'Réalisation, scénario, animation ou doublage, avec une traduction du rôle dans chaque langue.' },
          { title: 'Œuvre', body: 'L’œuvre concernée et sa version, originale ou doublée dans une langue donnée.' },
          { title: 'Personnage', body: 'Le crédit de doublage relie le comédien, le personnage et l’œuvre.' },
          { title: 'Nom crédité', body: 'Le nom utilisé à l’époque est conservé. Un changement de nom ne crée pas une nouvelle identité.' },
        ],
      },
      voice: {
        eyebrow: 'Comédiens de doublage',
        headline: 'Une identité par comédien de doublage.',
        body: 'Les rôles doublés dans les anime, les jeux et les romans visuels sont réunis sur une même page. Suivez une personne pour connaître ses nouvelles œuvres.',
        photo: {
          src: 'threads',
          alt: 'Une feuille rose est percée d’une rangée de petits trous sur le bord. Trois fils en sortent et relient de petites feuilles bleue, gris mauve et rose.',
        },
      },
      studio: {
        eyebrow: 'Studios',
        headline: 'La chronologie des œuvres d’un studio.',
        lead: 'Comme une personne, un studio a sa propre identité, indépendante de tout compte ou communauté. Ses anime sont classés par année.',
      },
      next: 'Suivez les relations jusqu’à l’œuvre d’origine de l’anime.',
    },
    adaptations: {
      closing: {
        headline: 'Poursuivez avec l’œuvre d’origine de votre anime préféré.',
        body: 'Suivez les relations d’adaptation et d’œuvres dérivées pour trouver les romans, mangas et jeux, chacun avec sa propre progression.',
      },
      head: {
        headline: 'Chaque adaptation reste liée à son œuvre d’origine.',
        lede: 'Sur REZICS, l’anime, son roman ou manga d’origine, ses suites, ses œuvres dérivées et ses adaptations en jeu sont des œuvres distinctes, reliées par des relations précises. Vous pouvez passer de l’une à l’autre.',
      },
      example: {
        eyebrow: 'Exemple',
        headline: 'Une histoire, plusieurs formes.',
        body: 'Prenons « A Certain Magical Index » : le roman léger de Kazuma Kamachi a été adapté en manga, en trois saisons d’anime et en un film. Son œuvre dérivée « A Certain Scientific Railgun » a aussi son manga et son anime. Sur REZICS, chaque œuvre a sa propre fiche et ses relations précisent s’il s’agit d’une adaptation, d’une suite ou d’un dérivé.',
        photo: {
          src: 'sources',
          alt: 'Une grande feuille vert foncé, une plus petite feuille noire et une feuille rose horizontale sont empilées en quinconce. Un petit papier bleu est posé à côté.',
        },
      },
      family: {
        eyebrow: 'Relations',
        headline: 'Chaque relation avec l’œuvre d’origine est précisée.',
        lead: 'Les relations non confirmées restent visibles avec leur statut, au lieu d’être masquées.',
        tiles: [
          { kind: 'books', relation: 'Œuvre d’origine', name: 'Roman d’origine' },
          { kind: 'manga', relation: 'Adapté de l’œuvre d’origine', name: 'Adaptation en manga' },
          { kind: 'anime', relation: 'Adapté de l’œuvre d’origine', name: 'Saison 1 de l’anime' },
          { kind: 'anime', relation: 'Suite de la saison 1', name: 'Saison 2 de l’anime' },
          { kind: 'books', relation: 'Œuvre dérivée', name: 'Roman dérivé' },
          { kind: 'games', relation: 'Adapté de l’anime', name: 'Adaptation en jeu' },
          { kind: 'visual-novels', relation: 'Adapté de l’œuvre d’origine', name: 'Adaptation en roman visuel' },
          { kind: null, relation: 'Relation à confirmer', name: 'Autre adaptation' },
        ],
      },
      scoped: {
        eyebrow: 'Progressions distinctes',
        headline: 'L’anime et l’œuvre d’origine ont des progressions distinctes.',
        lead: 'Terminer l’anime ne marque pas le roman d’origine comme lu. Si un personnage survit dans l’œuvre d’origine mais pas dans l’anime, les deux versions sont documentées séparément, avec l’œuvre et l’épisode ou le chapitre où l’information apparaît.',
      },
      relations: {
        eyebrow: 'Relations',
        headline: 'Chaque relation a un nom des deux côtés.',
        lead: 'Chaque relation a un nom dans chaque langue : une page indique « adapté de », l’autre « adapté en ».',
        rows: [
          { title: 'Adaptation', body: 'Une œuvre transposée dans un autre format, par exemple un roman adapté en anime.' },
          { title: 'Suite', body: 'Une histoire qui poursuit celle d’une œuvre précédente, comme une deuxième saison.' },
          { title: 'Série', body: 'Les œuvres d’une même série gardent chacune leur identité.' },
          { title: 'Remake', body: 'Une nouvelle version réalisée depuis le début, liée à l’œuvre précédente.' },
          { title: 'Œuvre dérivée', body: 'Une autre histoire qui se développe à partir du même récit.' },
        ],
      },
      orders: {
        text: 'Ordre de diffusion et ordre de visionnage',
        muted: 'peuvent être différents.',
        note: 'Les œuvres sont classées selon leur date de diffusion. Vous pouvez aussi créer une liste dans l’ordre de visionnage et expliquer où commencer.',
      },
      next: 'Le récit de nombreux anime commence dans un manga.',
    },
  },
};

export default site;
