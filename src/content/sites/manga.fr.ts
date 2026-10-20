// The manga site (漫畫): every visible string of /manga/ and its six inner pages, read as the
// site's chapters 第 1 話 to 第 6 話. Design record: src/sites/manga/SITE.md ("v3"); sources for
// every claim: src/sites/manga/facts.md.
import type { Item, KindId, MiniSite, ModuleId, PartId } from '../schema';

/** A section head in the v3 grid: eyebrow in columns 1 to 3, serif h2, optional lead. */
export interface MangaHead {
  eyebrow: string;
  heading: string;
  lead?: string;
}
/** A large serif statement: the first half in ink, the second in muted ink. */
export interface MangaStatement {
  text: string;
  muted?: string;
}
/** One of this site's paper still-life pictures (public/images/sites/manga/). */
export interface MangaPicture {
  name: 'hero' | 'series' | 'progress' | 'adaptations' | 'publish';
  alt: string;
}
/** The intro of an inner page: chapter eyebrow, h1 and lede. */
export interface MangaIntro {
  eyebrow: string;
  headline: string;
  lede: string;
}
/** The closing: a final statement, the action into REZICS, then the next page or site. */
export interface MangaClosing {
  statement: string;
  /** The small label of the next link, e.g. 下一話　第 2 話. */
  nextLabel: string;
  /** The next page's or site's name. */
  nextName: string;
}

export interface MangaStrings {
  /** The action into REZICS (the product's address comes from `site.productUrl`). */
  action: string;
  landing: {
    hero: Omit<MangaIntro, 'eyebrow'> & { picture: MangaPicture };
    parts: MangaHead & { notes: Partial<Record<PartId, string>> };
    pages: MangaHead & { tiles: { slug: string; chapter: string; line: string }[] };
    statement: MangaStatement;
    neighbours: MangaHead & { tiles: { kind: KindId; line: string }[] };
    closing: MangaClosing;
  };
  series: {
    intro: MangaIntro;
    levels: MangaHead & { picture: MangaPicture; items: Item[] };
    catalogue: MangaHead & { items: Item[]; footnotes: string[] };
    names: MangaHead & { body: string[]; items: Item[] };
    closing: MangaClosing;
  };
  progress: {
    intro: MangaIntro;
    language: MangaHead & { picture: MangaPicture };
    caught: MangaHead & { items: Item[] };
    statement: MangaStatement;
    travels: MangaHead & { items: Item[]; footnote: string };
    closing: MangaClosing;
  };
  creators: {
    intro: MangaIntro;
    roles: MangaHead & { items: Item[]; footnotes: string[] };
    person: MangaHead & { tiles: { kind: KindId; line: string }[] };
    statement: MangaStatement;
    closing: MangaClosing;
  };
  adaptations: {
    intro: MangaIntro;
    example: MangaHead & { picture: MangaPicture; items: Item[]; footnote: string };
    relations: MangaHead & { items: Item[]; footnote: string };
    apart: MangaHead;
    statement: MangaStatement;
    closing: MangaClosing;
  };
  community: {
    intro: MangaIntro;
    spoilers: MangaHead & { items: Item[] };
    ratings: MangaHead;
    gather: MangaHead & { items: Item[]; footnote: string; tiles: { module: ModuleId; line: string }[] };
    closing: MangaClosing;
  };
  publish: {
    intro: MangaIntro;
    steps: MangaHead & { picture: MangaPicture; items: Item[] };
    decides: MangaHead & { items: Item[] };
    elsewhere: MangaHead;
    closing: MangaClosing;
  };
}

export default {
  id: 'manga',
  base: '/manga/',
  name: 'Manga',
  theme: { kind: 'manga' },
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Manga : du premier chapitre au dernier volume',
        description:
          'REZICS attribue une identité à chaque manga et y relie les chapitres en ligne, les volumes et les traductions. Le site mémorise votre progression, indique le prochain volume attendu dans la langue choisie et vous permet d’échanger avec les personnes qui en sont au même point.',
      },
    },
    {
      slug: 'series',
      label: 'Séries',
      meta: {
        title: 'Séries, chapitres et traductions d’un manga',
        description:
          'La série et chaque volume sont des œuvres. Chaque chapitre occupe une position numérotée dans un volume. Les recueils précisent les volumes inclus, et les éditions japonaise et taïwanaise restent liées à la même œuvre avec leurs traductions respectives, sans doublon.',
      },
    },
    {
      slug: 'progress',
      label: 'Progression',
      meta: {
        title: 'Progression manga : votre dernier chapitre lu',
        description:
          'Suivez votre lecture chapitre par chapitre, d’un volume, d’un recueil ou d’un appareil à l’autre. Votre progression reste la même si vous changez de langue. Si le prochain chapitre n’est pas encore traduit dans la langue que vous lisez, le volume attendu est indiqué.',
      },
    },
    {
      slug: 'creators',
      label: 'Créateurs',
      meta: {
        title: 'Créateurs de manga : scénario, dessin et traduction',
        description:
          'Chaque crédit précise le rôle de la personne : scénario, dessin, illustration ou traduction. Une même personne garde la même identité dans les romans, mangas, anime et jeux. Suivez-la pour voir ses nouvelles œuvres et annonces.',
      },
    },
    {
      slug: 'adaptations',
      label: 'Adaptations',
      meta: {
        title: 'Manga et adaptations : romans, anime et jeux',
        description:
          'REZICS relie les mangas à leurs sources et à leurs adaptations par des relations qualifiées. Chaque œuvre garde sa propre progression, ses notes et ses limites de révélations. Les relations non confirmées sont signalées.',
      },
    },
    {
      slug: 'community',
      label: 'Discussions',
      meta: {
        title: 'Discussions manga : parlez du chapitre que vous lisez',
        description:
          'Chaque chapitre a sa discussion, et les passages que vous n’avez pas encore lus restent masqués. Les notes précisent si elles portent sur l’œuvre, un volume ou une traduction, avec leur nombre et leur répartition. Les communautés peuvent créer une Zone et rédiger le Wiki+ de l’œuvre.',
      },
    },
    {
      slug: 'publish',
      label: 'Publication',
      meta: {
        title: 'Publiez votre manga en série sur REZICS',
        description:
          'Publiez votre manga sur REZICS, même avec des chapitres uniquement composés d’images. Programmez leur publication selon votre fuseau horaire, invitez des collaborateurs et attribuez les autorisations séparément. Les traductions d’autres personnes ne sont publiées qu’avec votre accord. Chaque page reste liée à l’original, et vous pouvez sauvegarder toute l’œuvre à tout moment.',
      },
    },
  ],
  strings: {
    action: 'Accéder à REZICS',
    landing: {
      hero: {
        headline: 'REZICS garde en mémoire votre dernier chapitre lu.',
        lede: 'Les volumes, les chapitres publiés en ligne et leurs traductions sont liés au même manga. REZICS mémorise votre progression et cherche la suite dans la langue de votre choix.',
        picture: {
          name: 'hero',
          alt: 'Une feuille épaisse presque noire, découpée en fenêtres de tailles différentes comme une page de manga. Une feuille rose apparaît sous l’une d’elles.',
        },
      },
      parts: {
        eyebrow: 'Huit composants',
        heading: 'Les composants partagés, appliqués au manga.',
        notes: {
          identity: 'Retrouvez la même œuvre avec chacun de ses titres traduits.',
          editions: 'Les éditions japonaise et taïwanaise, numériques et en recueil ont chacune leur fiche.',
          credits: 'Scénariste et dessinateur sont crédités séparément. Le traducteur est associé à la version qu’il a traduite.',
          relations: 'Retrouvez les œuvres d’origine et les adaptations dans les deux sens.',
          progress: 'Suivez votre lecture chapitre par chapitre et reprenez sur un autre appareil.',
          ratings: 'Chaque note précise le volume ou la traduction évalués.',
          discussion: 'Les discussions sont séparées par chapitre. Les messages au-delà de votre progression restent masqués.',
          offers: 'La disponibilité et le lieu de vente de chaque version linguistique indiquent la date de vérification.',
        },
      },
      pages: {
        eyebrow: 'Le site',
        heading: 'Six chapitres à lire dans l’ordre ou à parcourir selon vos besoins.',
        tiles: [
          { slug: 'series', chapter: 'Chapitre 1', line: 'Séries, volumes et traductions liés à une œuvre' },
          { slug: 'progress', chapter: 'Chapitre 2', line: 'Votre lecture vous suit d’un appareil à l’autre' },
          { slug: 'creators', chapter: 'Chapitre 3', line: 'Scénaristes, artistes et traducteurs crédités' },
          { slug: 'adaptations', chapter: 'Chapitre 4', line: 'Romans, mangas, anime et jeux reliés' },
          { slug: 'community', chapter: 'Chapitre 5', line: 'Révélations masquées et notes contextualisées' },
          { slug: 'publish', chapter: 'Chapitre 6', line: 'Publiez vos mangas en série' },
        ],
      },
      statement: {
        text: 'Vous avez rattrapé l’édition taïwanaise disponible.',
        muted: 'REZICS indique les volumes dont la traduction est attendue.',
      },
      neighbours: {
        eyebrow: 'Domaines associés',
        heading: 'Une même histoire peut prendre plusieurs formes.',
        lead: 'Romans, anime, jeux et romans visuels ont chacun leur identité. Les relations d’adaptation vous permettent d’y accéder depuis un manga.',
        tiles: [
          { kind: 'books', line: 'Romans d’origine et romans légers' },
          { kind: 'anime', line: 'Adaptations en anime, avec une progression distincte' },
          { kind: 'games', line: 'Adaptations en jeu ou tirées d’un jeu' },
          { kind: 'visual-novels', line: 'Les adaptations en manga renvoient à l’original' },
        ],
      },
      closing: {
        statement: 'Du premier chapitre au dernier volume, tout est au même endroit.',
        nextLabel: 'Chapitre suivant · 1',
        nextName: 'Séries',
      },
    },
    series: {
      intro: {
        eyebrow: 'Chapitre 1 · Séries',
        headline: 'Des dizaines de volumes et des centaines de chapitres, une seule œuvre.',
        lede: 'La série et chaque volume sont des œuvres. Chaque chapitre occupe une position fixe. Les recueils, nouvelles éditions et traductions sont consignés séparément, puis reliés à la même identité.',
      },
      levels: {
        eyebrow: 'Structure',
        heading: 'Les niveaux d’une série.',
        lead: 'La série, chaque volume et chaque chapitre ont leur propre place, réunie sous une même identité.',
        picture: {
          name: 'series',
          alt: 'Une pile ordonnée d’une dizaine de livrets presque noirs. Une bande vert foncé maintient les livrets du haut.',
        },
        items: [
          { title: 'Série', body: 'La série publiée en plusieurs volumes est une œuvre. Ses créateurs, ses abonnements et ses notes lui sont propres.' },
          {
            title: 'Volume',
            body: 'Chaque volume est aussi une œuvre. Vous pouvez le garder dans votre bibliothèque, le noter et en discuter séparément. Les numéros d’origine sont conservés, y compris ceux des volumes spéciaux.',
          },
          {
            title: 'Chapitre',
            body: 'Chaque chapitre a une position et un numéro fixes dans l’œuvre. Votre progression, ses discussions et les références du Wiki+ pointent vers cet emplacement.',
          },
          { title: 'Recueil', body: 'Un recueil ou une édition intégrale rassemble plusieurs volumes. REZICS indique lesquels, sans créer d’œuvres en double.' },
          {
            title: 'Traduction',
            body: 'L’original et ses traductions appartiennent à la même œuvre. Chaque traduction précise son traducteur, ses droits et ses données de publication. Les traductions de lecteurs indiquent aussi leur version source.',
          },
        ],
      },
      catalogue: {
        eyebrow: 'Catalogue',
        heading: 'Les données absentes sont indiquées comme non renseignées.',
        items: [
          { title: 'Format', body: 'Série ou chapitre unique.' },
          { title: 'Première publication', body: 'L’année de la première parution. Parcourez les œuvres d’une année jusqu’à la dernière.' },
          { title: 'Volumes', body: 'Le nombre de volumes publiés.' },
          { title: 'Statut', body: 'En cours, terminée, en pause, à paraître ou annulée.' },
        ],
        footnotes: [
          'Les champs non renseignés ne sont pas devinés. Les données importées du catalogue indiquent leur source et leur licence.',
          'Dans une Zone consacrée aux mangas, filtrez tout le catalogue par titre, format, statut et année.',
        ],
      },
      names: {
        eyebrow: 'Titres et éditions',
        heading: 'Le titre d’origine et ses traductions sont conservés.',
        body: [
          'Le titre d’origine, ses traductions locales et les autres noms courants sont réunis sur la même fiche. Vous pouvez retrouver l’œuvre avec chacun d’eux. Les titres en chinois traditionnel ne sont pas automatiquement convertis en chinois simplifié. Toute conversion est signalée.',
          'Vous pouvez choisir en privé l’édition que vous lisez. REZICS mémorise l’édition numérique, la nouvelle édition ou l’édition taïwanaise sélectionnée.',
        ],
        items: [
          { title: 'ISBN', body: 'Un ISBN mène au volume concerné, à sa traduction et à l’œuvre complète.' },
          { title: 'Titre traduit', body: 'La traduction d’un titre ne signifie pas qu’une édition existe dans cette langue.' },
        ],
      },
      closing: {
        statement: 'Une œuvre garde une identité unique, quel que soit le nombre de volumes.',
        nextLabel: 'Chapitre suivant · 2',
        nextName: 'Progression',
      },
    },
    progress: {
      intro: {
        eyebrow: 'Chapitre 2 · Progression',
        headline: 'Vous vous étiez arrêté·e au chapitre 12. Reprenez au 13.',
        lede: 'REZICS organise les chapitres de chaque volume et indique votre position de lecture ainsi que la suite. Commencez sur téléphone et reprenez au même chapitre sur ordinateur.',
      },
      language: {
        eyebrow: 'Changer de langue',
        heading: 'Votre progression reste la même dans une autre langue.',
        lead: 'Si vous avez lu les dix premiers volumes en japonais puis passez au chinois traditionnel, ces volumes restent marqués comme lus. REZICS cherche la suite dans cette langue et indique le volume attendu s’il n’est pas encore disponible.',
        picture: {
          name: 'progress',
          alt: 'Une longue bande de papier presque noire est pliée en segments. Ceux de droite sont dépliés et empilés, avec un petit morceau de papier rose au pli.',
        },
      },
      caught: {
        eyebrow: 'À jour ?',
        heading: 'REZICS distingue plusieurs façons d’avoir rattrapé une série.',
        items: [
          { title: 'À jour dans cette langue', body: 'Vous avez lu tout ce qui est disponible dans cette langue. La traduction du prochain volume est attendue.' },
          { title: 'À jour sur les volumes publiés', body: 'Vous avez lu tout ce qui est paru, même si la série continue.' },
          { title: 'Série terminée', body: 'La série est achevée et aucun nouveau chapitre n’est attendu.' },
          { title: 'Correspondance non confirmée', body: 'Si le contenu en ligne ne correspond pas au volume, la correspondance est marquée comme non confirmée. La progression d’une version ne compte pas pour l’autre.' },
          { title: 'Histoires annexes facultatives', body: 'Vous pouvez ignorer les histoires annexes et les chapitres spéciaux facultatifs sans que cela empêche de terminer l’œuvre.' },
        ],
      },
      statement: {
        text: 'Posséder un volume ne signifie pas l’avoir lu.',
        muted: 'Votre bibliothèque indique ce que vous possédez, votre progression ce que vous avez lu.',
      },
      travels: {
        eyebrow: 'Sur tous vos appareils',
        heading: 'Votre progression vous suit d’un appareil à l’autre.',
        items: [
          { title: 'Deux appareils', body: 'Votre téléphone et votre ordinateur utilisent la même progression. Vous pouvez annuler une erreur, et l’autre appareil est mis à jour.' },
          { title: 'Reprendre la lecture', body: 'La première rangée de la page d’accueil ouvre le prochain chapitre en un geste.' },
          {
            title: 'Suivi',
            body: 'Marquez un manga comme en cours pour le suivre. Vous serez averti lorsqu’un nouveau chapitre ou volume paraît dans votre langue. Vous pouvez limiter les notifications aux annonces importantes ou les désactiver.',
          },
          {
            title: 'Importation',
            body: 'Importez des listes de mangas depuis d’autres sites. Les statuts, dates, notes, tags et notes privées sont conservés lorsque les correspondances sont établies. Les champs d’origine, comme le nombre de relectures, sont conservés sept jours. Exportez une sauvegarde pour les garder.',
          },
          { title: 'Exportation', body: 'Exportez toute votre bibliothèque à tout moment, avec les dates et les notes.' },
        ],
        footnote: 'Par défaut, REZICS n’utilise pas vos données de lecture privées pour entraîner des modèles d’IA ou créer des profils publicitaires.',
      },
      closing: {
        statement: 'Reprenez votre lecture là où vous vous êtes arrêté·e.',
        nextLabel: 'Chapitre suivant · 3',
        nextName: 'Créateurs',
      },
    },
    creators: {
      intro: {
        eyebrow: 'Chapitre 3 · Créateurs',
        headline: 'Scénaristes et artistes ont chacun leur nom.',
        lede: 'De nombreux mangas ont un scénariste et un artiste distincts. REZICS attribue un crédit à chaque rôle et relie chaque nom aux œuvres de la personne, qu’il s’agisse de mangas, de romans ou d’anime.',
      },
      roles: {
        eyebrow: 'Crédits',
        heading: 'Chaque crédit précise le rôle.',
        items: [
          { title: 'Scénario', body: 'La personne qui imagine et écrit l’histoire.' },
          { title: 'Dessin', body: 'La personne qui dessine l’histoire, page après page.' },
          { title: 'Illustration', body: 'La personne qui illustre la couverture, les pages en couleur ou un roman.' },
          { title: 'Traduction', body: 'Le traducteur est crédité sur la version qu’il a traduite, et non sur les autres.' },
          { title: 'Supervision du concept', body: 'La personne qui propose l’idée d’origine ou en assure la supervision.' },
        ],
        footnotes: ['Les traductions de lecteurs créditent aussi leurs équipes, mais ne sont jamais présentées comme officielles.', 'Les noms des rôles font partie des données et peuvent être adaptés à chaque langue.'],
      },
      person: {
        eyebrow: 'Une personne',
        heading: 'Un nom relie ses œuvres dans tous les domaines.',
        lead: 'Un artiste peut illustrer un roman, publier son propre manga et dessiner pour un jeu. REZICS réunit ces œuvres sous une même identité. Suivez cette personne pour voir ses nouvelles œuvres et annonces dans votre fil.',
        tiles: [
          { kind: 'books', line: 'Illustrations de romans' },
          { kind: 'anime', line: 'Œuvre adaptée en anime' },
          { kind: 'games', line: 'Illustrations de jeux' },
        ],
      },
      statement: {
        text: 'Les crédits désignent des personnes, pas des comptes.',
        muted: 'La page d’un auteur réunit ses œuvres créditées, même avant son arrivée sur REZICS.',
      },
      closing: {
        statement: 'Chaque nom est accompagné du rôle de la personne.',
        nextLabel: 'Chapitre suivant · 4',
        nextName: 'Adaptations',
      },
    },
    adaptations: {
      intro: {
        eyebrow: 'Chapitre 4 · Adaptations',
        headline: 'Une histoire, quatre formes.',
        lede: 'Sur REZICS, un roman, un manga, un anime et un jeu sont des œuvres distinctes. Des relations nommées les relient : depuis un manga, retrouvez sa source et ses adaptations.',
      },
      example: {
        eyebrow: 'Exemple',
        heading: 'Par exemple, « A Certain Magical Index ».',
        lead: 'Le roman léger d’origine est écrit par Kazuma Kamachi et illustré par Kiyotaka Haimura. REZICS consigne chaque adaptation comme une œuvre distincte et précise les relations qui les lient.',
        picture: {
          name: 'adaptations',
          alt: 'Trois feuilles vert foncé, presque noire et rose sont alignées en diagonale, leurs coins se touchant.',
        },
        items: [
          { title: 'Roman léger', body: 'Œuvre d’origine. Les trois séries, principale, « New Testament » et « Genesis Testament », sont reliées dans l’ordre par des relations de suite.' },
          { title: 'Manga', body: 'Adapté du roman léger et dessiné par Chuuya Kogino.' },
          { title: 'Anime', body: 'Également adapté du roman léger, avec une progression distincte du manga.' },
          { title: '« A Certain Scientific Railgun »', body: 'Une œuvre dérivée qui existe en manga et a aussi été adaptée en anime.' },
          { title: 'Jeux', body: 'L’un d’eux est un roman visuel, relié au domaine des romans visuels.' },
        ],
        footnote: 'Cet exemple illustre la façon dont REZICS consigne une œuvre. Il n’implique aucun partenariat ni aucune autorisation.',
      },
      relations: {
        eyebrow: 'Relations',
        heading: 'Chaque relation précise sa nature.',
        items: [
          { title: 'Adapté de', body: 'Un manga peut être adapté d’un roman, d’un anime ou d’un jeu, ou être adapté dans un autre format.' },
          { title: 'Suite ou préquelle', body: 'L’histoire se poursuit après l’œuvre précédente ou la précède.' },
          { title: 'Œuvre dérivée', body: 'Les histoires annexes et celles des personnages secondaires renvoient à l’œuvre principale.' },
          { title: 'Réécriture de', body: 'Une œuvre réécrite par son auteur devient une œuvre distincte lorsque son intrigue diverge de l’originale.' },
          { title: 'Redémarrage de', body: 'Une nouvelle version qui reprend l’histoire depuis le début.' },
          { title: 'Ordre de lecture', body: 'Un ordre de lecture suivant l’intrigue peut coexister avec l’ordre de publication.' },
        ],
        footnote: 'Les relations non confirmées sont signalées comme telles. Mieux vaut ne pas relier des œuvres sans preuve.',
      },
      apart: {
        eyebrow: 'Progressions distinctes',
        heading: 'Regarder l’anime ne fait pas avancer votre lecture du manga.',
        lead: 'Votre progression dans l’anime et dans le manga est suivie séparément. Filtrez les critiques de chaque format séparément, et leurs notes ne sont pas mélangées.',
      },
      statement: {
        text: 'Si deux versions divergent, les faits sur chacune peuvent figurer dans Wiki+.',
        muted: 'Chaque fait précise la version concernée, et votre progression détermine ce qui s’affiche.',
      },
      closing: {
        statement: 'Chaque forme existe à part et reste liée aux autres.',
        nextLabel: 'Chapitre suivant · 5',
        nextName: 'Discussions',
      },
    },
    community: {
      intro: {
        eyebrow: 'Chapitre 5 · Discussions',
        headline: 'Vous voyez les discussions jusqu’au chapitre que vous avez lu.',
        lede: 'Chaque chapitre a son propre fil de discussion. Les messages qui dépassent votre progression restent masqués jusqu’à ce que vous les ayez lus.',
      },
      spoilers: {
        eyebrow: 'Révélations',
        heading: 'Les messages au-delà de votre progression restent masqués.',
        items: [
          { title: 'Discussions par chapitre', body: 'Chaque chapitre a un fil de discussion. Vous pouvez le lire sans rejoindre de communauté.' },
          { title: 'Messages masqués', body: 'Les messages qui dépassent votre progression sont masqués par défaut. Vous pouvez les afficher. Ce choix ne s’applique qu’à votre affichage actuel.' },
          { title: 'Révélations signalées par vote', body: 'Les lecteurs peuvent voter pour signaler les révélations. Ces votes sont comptés séparément des signalements de l’auteur.' },
          {
            title: 'Trois types d’échanges',
            body: 'Les discussions sur l’intrigue, les critiques et les corrections de données ont des espaces distincts. Votre version et votre position de lecture sont conservées lorsque vous passez de l’un à l’autre.',
          },
        ],
      },
      ratings: {
        eyebrow: 'Notes',
        heading: 'Chaque note indique ce qui est évalué.',
        lead: 'La série, chaque volume et chaque traduction ont leurs propres notes. La note de la série n’est pas une moyenne de celles des volumes. Chaque résultat indique le nombre de notes, leur répartition et le groupe qui les a données. Les critiques précisent si elles portent sur l’histoire ou la traduction, et peuvent être publiées sans note.',
      },
      gather: {
        eyebrow: 'Communauté',
        heading: 'Un lieu pour les personnes qui partagent vos intérêts.',
        items: [
          {
            title: 'Communauté',
            body: 'Les lecteurs d’un manga peuvent créer une communauté avec ses membres, ses règles et ses modérateurs. Chaque sélection renvoie à la discussion où elle a été décidée.',
          },
          { title: 'Zone', body: 'Une communauté peut créer un site complet consacré à une œuvre, avec ses pages, sa navigation et son apparence, tout en utilisant les mêmes données.' },
          {
            title: 'Wiki+',
            body: 'Les personnages, lieux, chronologies et guides de lecture restent limités au chapitre que vous avez lu. Chaque fait des encadrés a été vérifié.',
          },
          { title: 'Listes', body: 'Créez une liste de lecture ou un ordre de lecture, expliquez chaque choix, triez les œuvres et exportez la liste.' },
          { title: 'Suivi', body: 'Suivez une œuvre, un créateur ou une communauté et choisissez les notifications pour chacun.' },
        ],
        footnote: 'Les niveaux d’âge se règlent séparément : général, R15, R18 et R18G. Les contenus non évalués portent la mention « non évalué ».',
        tiles: [
          { module: 'community', line: 'Discussions, notes et listes pour les communautés' },
          { module: 'zones', line: 'Zones et Wiki+, les sites des communautés' },
        ],
      },
      closing: {
        statement: 'Après un chapitre, échangez dans son fil de discussion.',
        nextLabel: 'Chapitre suivant · 6',
        nextName: 'Publication',
      },
    },
    publish: {
      intro: {
        eyebrow: 'Chapitre 6 · Publication',
        headline: 'Votre manga a sa propre identité dès le premier chapitre.',
        lede: 'Les œuvres publiées en série sur REZICS figurent dans le même index que les autres mangas. Les lecteurs utilisent les mêmes fonctions de progression, de discussion et de notation. Les adaptations et traductions renvoient aussi à votre œuvre.',
      },
      steps: {
        eyebrow: 'Étapes',
        heading: 'Du manuscrit aux lecteurs.',
        lead: 'Vous choisissez chaque étape, de l’envoi d’un chapitre à sa publication. Elle reste consignée dans l’historique de l’œuvre.',
        picture: {
          name: 'publish',
          alt: 'Une feuille presque noire, pliée en paravent à trois pans, est découpée de fenêtres par lesquelles la lumière entre dans l’ombre. Quelques pages sont empilées à côté.',
        },
        items: [
          { title: 'Envoyer un chapitre', body: 'Un chapitre peut contenir uniquement des pages illustrées, sans texte ajouté. Les notes de l’auteur sont séparées du récit, ne comptent pas dans le texte principal et ne sont pas traduites.' },
          { title: 'Programmer la publication', body: 'Choisissez la date et le fuseau horaire. Le chapitre est publié à l’heure prévue, même si votre navigateur est fermé.' },
          { title: 'Collaborer', body: 'Invitez des assistants et des éditeurs, puis attribuez séparément les droits de lecture, de suggestion, de modification ou de publication. Les droits de publication et de modification sont distincts.' },
          { title: 'Positionner chaque page', body: 'Chaque page a une position fixe. Les traductions faites par d’autres personnes renvoient à vos pages d’origine, une par une.' },
          { title: 'Recevoir des retours', body: 'Les commentaires et suggestions de correction des lecteurs sont réunis dans la boîte de réception de l’auteur.' },
        ],
      },
      decides: {
        eyebrow: 'Vos décisions',
        heading: 'Ces choix vous appartiennent.',
        items: [
          {
            title: 'Traductions',
            body: 'Les traductions réalisées par d’autres personnes restent privées par défaut. Elles ne sont publiées qu’avec votre accord ou une licence ouverte que vous avez accordée. Vous pouvez aussi refuser que votre œuvre soit liée à une traduction.',
          },
          { title: 'Droits', body: 'Ajoutez une déclaration de licence qui précise les usages autorisés pour les lecteurs et les traducteurs.' },
          { title: 'Usage de l’IA', body: 'Pour chaque chapitre, indiquez si l’IA n’a pas été utilisée, a servi d’aide ou a généré du contenu. Les lecteurs peuvent filtrer selon cette information.' },
          { title: 'Révisions', body: 'Les pages modifiées gardent leur historique. La version lue par les personnes qui ont déjà commenté n’est pas remplacée en silence.' },
          { title: 'Sauvegarde', body: 'Exportez l’œuvre entière à tout moment, avec chacune de ses révisions.' },
        ],
      },
      elsewhere: {
        eyebrow: 'Publication ailleurs',
        heading: 'Ajoutez aussi une série publiée ailleurs.',
        lead: 'Les œuvres publiées sur votre propre site ou ailleurs peuvent aussi avoir une identité sur REZICS. Une publication en ligne est consignée comme une édition, avec son adresse et des captures datées. Chaque volume imprimé est ensuite consigné séparément.',
      },
      closing: {
        statement: 'Les auteurs gardent le contrôle de leurs œuvres publiées sur REZICS.',
        nextLabel: 'Domaine suivant',
        nextName: 'Jeux',
      },
    },
  },
} satisfies MiniSite<MangaStrings>;
