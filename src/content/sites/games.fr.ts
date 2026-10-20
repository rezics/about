// The games site (遊戲): every visible string of /games/ and its six inner pages.
// Design record: src/sites/games/SITE.md (section "v3"); sources for every claim:
// src/sites/games/facts.md. Example data (one fictional adventure game, its releases, versions
// and playthroughs) is always captioned 示意 on screen; it describes no real game. The one real
// work named is 《魔法禁書目錄》, text only, as an example of how relations are recorded.
import type { KindId, MiniSite } from '../schema';

export type Lang = 'zh' | 'ja' | 'en';
export type Platform = 'pc' | 'console' | 'handheld' | 'mobile';
export type Edition = 'std' | 'deluxe' | 'complete';

export interface Titled {
  title: string;
  body: string;
}

/** A section: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}

/** A large statement: the first half in ink, the second half muted. */
export interface Said {
  text: string;
  more: string;
  /** A sentence or two in body size under the statement. */
  note?: string;
}

/** One release of the example game, as the release filter shows it. */
export interface ExampleRelease {
  id: string;
  platform: Platform;
  edition: Edition;
  /** Shown inside the table cell when a cell holds more than one release (regions). */
  region?: string;
  langs: Lang[];
  /** A state instead of languages (announced, no date yet). */
  state?: string;
}

export type GamesStrings = {
  /** The line under every page's closing statement, above 前往 REZICS. */
  closingBody: string;
  /** Alternative text of the paper still-life photographs (public/images/sites/games/). */
  pictures: Record<'hero' | 'store' | 'library' | 'guides' | 'creators', string>;
  example: {
    langNames: Record<Lang, string>;
    platforms: Record<Platform, string>;
    editions: Record<Edition, string>;
    releases: ExampleRelease[];
  };
  landing: {
    hero: { headline: string; lede: string };
    releases: Head & { items: (Titled & { id: string })[]; caption: string; link: string };
    versions: Said;
    store: Head & { link: string };
    pages: Head & { lines: Record<string, string> };
    connections: Head & { tiles: { to: KindId; line: string }[] };
    closing: string;
  };
  releases: {
    hero: { headline: string; lead: string };
    filter: Head & {
      groups: { lang: string; platform: string };
      clear: string;
      none: string;
      result: string;
      resultNone: string;
      corner: string;
      caption: string;
    };
    states: Head & { items: Titled[] };
    languages: Head & { items: Titled[] };
    bundles: Head & { tiles: Titled[]; caption: string };
    requirements: Head & { tiles: Titled[] };
    offers: Said;
    closing: string;
  };
  store: {
    hero: { headline: string; lead: string };
    checkout: Head & { items: Titled[] };
    purchase: Head & { steps: Titled[] };
    keep: Head & { lead: string; more: string };
    privacy: Said;
    refuses: Head & { items: Titled[] };
    closing: string;
  };
  library: {
    hero: { headline: string; lead: string };
    status: Head & { items: Titled[] };
    slots: Head & { columns: [string, string, string]; rows: { slot: string; release: string; state: string }[]; caption: string };
    together: Head & { tiles: { to: KindId; name: string; at: string }[]; caption: string };
    playtime: Head & { items: Titled[]; note: string };
    takeout: Said;
    closing: string;
  };
  reviews: {
    hero: { headline: string; lead: string };
    versions: Head & { tiles: Titled[]; caption: string };
    who: Head & { items: Titled[] };
    targets: Head & { tiles: Titled[] };
    rules: Head & { items: Titled[] };
    talk: Said;
    closing: string;
  };
  guides: {
    hero: { headline: string; lead: string };
    fog: Head;
    guides: Head & { lead: string; more: string };
    rules: Head & { items: Titled[] };
    adaptations: Head & { lead: string; chain: { to: KindId; name: string; line: string; rel?: string }[]; note: string; caption: string };
    zone: Said;
    closing: string;
  };
  creators: {
    hero: { headline: string; lead: string };
    rights: Head & { items: Titled[] };
    ledger: Head & { rows: { label: string; op?: string; total?: boolean }[]; note: string; reserve: string; caption: string };
    name: Head & { tiles: { to?: KindId; name: string; role: string }[]; caption: string };
    home: Head & { lead: string; more: string };
    rules: Said;
    closing: string;
  };
};

const strings: GamesStrings = {
  closingBody: 'Trouvez les versions, consignez vos parties, publiez des avis et achetez des jeux indépendants avec un seul compte.',
  pictures: {
    hero: 'Sur un fond blanc chaud, une grande feuille bleue déploie en éventail des feuilles bleu clair, violettes et vert canard.',
    store: 'Une feuille bleu clair traverse une fente dans une feuille bleue, son extrémité inférieure légèrement enroulée.',
    library: 'Une feuille bleue forme un plateau peu profond. Des feuilles bleues, bleu clair, roses et vertes tiennent dans des fentes sur le dessus, sauf la dernière.',
    guides: 'Une longue feuille bleue est pliée en plusieurs volets. Les trois premiers sont ouverts, les autres empilés et recouverts d’une feuille blanche.',
    creators: 'Une feuille bleue pliée forme un petit kiosque debout, à côté d’une feuille violette et d’une feuille bleu clair.',
  },
  example: {
    langNames: { zh: 'Chinois traditionnel', ja: 'Japonais', en: 'Anglais' },
    platforms: { pc: 'Ordinateur', console: 'Console de salon', handheld: 'Console portable', mobile: 'Mobile' },
    editions: { std: 'Édition standard', deluxe: 'Édition Deluxe', complete: 'Édition complète' },
    releases: [
      { id: 'pc-std', platform: 'pc', edition: 'std', langs: ['zh', 'ja', 'en'] },
      { id: 'pc-deluxe', platform: 'pc', edition: 'deluxe', langs: ['zh', 'ja', 'en'] },
      { id: 'console-std', platform: 'console', edition: 'std', langs: ['ja', 'en'] },
      { id: 'console-complete', platform: 'console', edition: 'complete', langs: ['zh', 'ja', 'en'] },
      { id: 'handheld-asia', platform: 'handheld', edition: 'std', region: 'Version asiatique', langs: ['zh', 'ja'] },
      { id: 'handheld-japan', platform: 'handheld', edition: 'std', region: 'Version japonaise', langs: ['ja'] },
      { id: 'handheld-complete', platform: 'handheld', edition: 'complete', langs: ['ja'] },
      { id: 'mobile-std', platform: 'mobile', edition: 'std', langs: [], state: 'Annoncée' },
    ],
  },

  landing: {
    hero: {
      headline: 'Chaque jeu, chaque version, soigneusement répertoriés.',
      lede: 'Les versions, langues et plateformes sont consignées séparément. Les notes précisent la version concernée, et les guides et Wiki+ sont liés au jeu. Vous pouvez aussi acheter ici des fichiers de jeux indépendants que vous garderez.',
    },
    releases: {
      label: 'Publication',
      headline: 'Chaque publication d’un même jeu est répertoriée séparément.',
      lead: 'Les publications sur ordinateur, console de salon, console portable et mobile sont distinctes, tout comme les versions régionales, Deluxe et complètes. Chaque notice indique ses langues, ses exigences et son historique de mise en vente.',
      items: [
        { id: 'handheld-asia', title: 'Console portable, version asiatique', body: 'Texte : chinois traditionnel et japonais. Région : Asie. La version japonaise est répertoriée séparément, avec le japonais comme seule langue.' },
        { id: 'pc-std', title: 'Ordinateur, édition standard', body: 'Texte et sous-titres : chinois traditionnel, japonais et anglais. Voix : japonais. Les langues sont répertoriées séparément.' },
        { id: 'console-complete', title: 'Console de salon, édition complète', body: 'Texte : chinois traditionnel, japonais et anglais. Contenu : jeu de base et toutes les extensions, chacun avec sa propre page et ses notes.' },
        { id: 'mobile-std', title: 'Mobile, édition standard', body: 'Langue : inconnue. État : annoncée. Tant que l’information n’est pas confirmée, les langues d’autres plateformes ne sont pas reprises.' },
      ],
      caption: 'Exemple : quatre publications d’un jeu d’aventure fictif.',
      link: 'Trouver la version à laquelle vous pouvez jouer',
    },
    versions: {
      text: 'Les notes suivent chaque version, et les téléchargements ne servent pas au classement ;',
      more: 'une information introuvable est indiquée comme « inconnue », sans supposition.',
    },
    store: {
      label: 'Boutique',
      headline: 'Les fichiers des jeux achetés restent en votre possession.',
      lead: 'La boutique REZICS vend les jeux et romans visuels d’auteurs indépendants sous contrat. Sans DRM ni lanceur. Les créateurs conservent leurs droits d’auteur et le relevé de paiement détaille chaque déduction. Les joueurs consultent les notes, discussions et Wiki+ sur la même page.',
      link: 'Découvrir la boutique et le processus d’achat',
    },
    pages: {
      label: 'Six pages',
      headline: 'Six sujets, chacun sur sa page.',
      lines: {
        releases: 'Filtrer par langue, plateforme et version sur une même publication',
        store: 'Acheter une fois, télécharger à nouveau selon les conditions d’achat',
        library: 'Chaque partie indique la plateforme utilisée',
        reviews: 'Chaque note précise la version et le groupe évalué',
        guides: 'Affichez les guides selon votre progression et consultez les adaptations',
        creators: 'Conservez vos droits d’auteur avec un relevé détaillé des déductions',
      },
    },
    connections: {
      label: 'Types associés',
      headline: 'Cinq types liés aux jeux',
      lead: 'Les adaptations, les œuvres d’origine et leurs créateurs relient les jeux à d’autres types d’œuvres. Suivez une adaptation depuis le roman d’origine, en consignant séparément votre lecture et votre progression dans le jeu.',
      tiles: [
        { to: 'visual-novels', line: 'Choisir une publication selon sa langue, sa plateforme et son contenu' },
        { to: 'books', line: 'Romans à l’origine d’un jeu et œuvres qui en sont dérivées' },
        { to: 'anime', line: 'Jeux adaptés en séries animées et séries animées adaptées en jeux' },
        { to: 'manga', line: 'Relier au jeu les mangas du même récit' },
        { to: 'software', line: 'Moteurs, outils de création et modules reliés aux versions du jeu' },
      ],
    },
    closing: 'Pour votre prochain jeu, trouvez la bonne version.',
  },

  releases: {
    hero: {
      headline: 'Trouvez la version à laquelle vous pouvez jouer.',
      lead: 'La langue souhaitée et votre appareil doivent figurer sur une même publication. REZICS répertorie séparément les plateformes, les régions et les versions, puis les compare ensemble lors du filtrage.',
    },
    filter: {
      label: 'Filtres',
      headline: 'Les critères portent sur une même publication.',
      lead: 'Si vous choisissez le chinois traditionnel et la console portable, seules les publications répondant aux deux critères sont affichées. Une autre version en chinois ou une autre plateforme portable ne suffit pas.',
      groups: { lang: 'Langue', platform: 'Plateforme' },
      clear: 'Effacer les critères',
      none: 'Aucune version correspondante',
      result: 'Publications correspondantes : {count}',
      resultNone: 'Aucune publication ne répond à tous ces critères.',
      corner: 'Plateforme / version',
      caption: 'Exemple : publication d’un jeu d’aventure fictif.',
    },
    states: {
      label: 'États de publication',
      headline: 'Chaque étape, de l’annonce au retrait, est consignée séparément.',
      lead: 'Les dates peuvent changer, mais l’historique reste intact. Suivez un jeu pour connaître sa situation.',
      items: [
        { title: 'Annoncée', body: 'L’éditeur annonce le jeu ou cette version, avec sa source.' },
        { title: 'Prévue', body: 'Une date de sortie est annoncée. C’est une prévision, pas une mise en vente.' },
        { title: 'Disponible', body: 'Le jeu est disponible à l’achat et au jeu, avec la date confirmée.' },
        { title: 'Reportée', body: 'La date change, mais l’ancienne reste dans l’historique.' },
        { title: 'Retirée', body: 'Le jeu n’est plus vendu ou distribué. La date de retrait est indiquée.' },
      ],
    },
    languages: {
      label: 'Langue',
      headline: 'Trois langues à distinguer : texte, voix et sous-titres.',
      lead: 'La mention « en chinois » peut ne concerner que les sous-titres ou inclure aussi les voix. REZICS répertorie séparément les langues du texte, des voix et des sous-titres. Un titre traduit ne signifie pas qu’une version traduite existe.',
      items: [
        { title: 'Chinois officiel', body: 'Fourni par l’éditeur et indiqué pour la publication concernée.' },
        { title: 'Traduction communautaire', body: 'L’équipe est créditée, ainsi que la version source et le contenu traduit. Cette traduction n’est jamais présentée comme officielle.' },
        { title: 'Langue ajoutée ultérieurement', body: 'Une langue ajoutée par une mise à jour constitue une nouvelle version linguistique liée à sa source. La notice de publication d’origine reste intacte.' },
      ],
    },
    bundles: {
      label: 'Collections et extensions',
      headline: 'Une publication peut regrouper plusieurs œuvres.',
      lead: 'Les œuvres d’une collection gardent chacune leur identité. Vous achetez une publication, mais les notes et discussions restent liées à chaque œuvre qu’elle contient.',
      tiles: [
        { title: 'Édition complète', body: 'Comprend le jeu de base et toutes ses extensions' },
        { title: 'Jeu de base', body: 'Le jeu de base, avec ses propres notes' },
        { title: 'Extension', body: 'Le contenu autonome a sa propre page reliée au jeu de base' },
        { title: 'Bande originale', body: 'Une œuvre musicale, associée à son compositeur' },
        { title: 'Remake', body: 'Une autre œuvre reliée à l’original' },
        { title: 'Module', body: 'Précise la version du jeu requise' },
      ],
      caption: 'Exemple : une édition complète et les œuvres associées. Un portage sans changement de contenu sur une nouvelle plateforme constitue une nouvelle publication du même jeu.',
    },
    requirements: {
      label: 'Configuration requise',
      headline: 'La source des exigences doit être indiquée.',
      lead: 'Les indications officielles d’un jeu peuvent différer des résultats observés sur une même machine. Les deux sont affichés côte à côte avec leur source et leur date.',
      tiles: [
        { title: 'Configuration officielle', body: 'Configuration minimale et recommandée, avec la source et la version concernée' },
        { title: 'Tests des joueurs', body: 'Matériel et paramètres utilisés, résultat et date du test' },
        { title: 'Informations inconnues', body: 'Inconnu, incompatible et obsolète sont trois états distincts' },
      ],
    },
    offers: {
      text: 'Quand l’information manque,',
      more: 'la réponse est « inconnue ».',
      note: 'La disponibilité et le prix de chaque boutique et région sont consignés à chaque date, avec leur historique. Si une information manque, le prix d’une boutique ne sert pas à représenter toutes les autres.',
    },
    closing: 'Faites correspondre la langue et l’appareil sur une même publication.',
  },

  store: {
    hero: {
      headline: 'Achetez une fois, gardez les fichiers.',
      lead: 'Les jeux et romans visuels proposés ici viennent de créateurs indépendants sous contrat avec REZICS. Sans DRM ni lanceur, les jeux achetés restent téléchargeables selon les conditions d’achat.',
    },
    checkout: {
      label: 'Avant de payer',
      headline: 'Ces huit informations figurent sur la page avant le paiement.',
      lead: 'La page de chaque jeu les indique avant le paiement.',
      items: [
        { title: 'Version et langues', body: 'La version achetée et les langues qu’elle comprend.' },
        { title: 'Configuration requise', body: 'Les plateformes prises en charge et la configuration nécessaire.' },
        { title: 'Prix TTC', body: 'Le prix total, taxes comprises, est affiché avant le paiement.' },
        { title: 'Vendeur', body: 'Qui vend le jeu et reçoit votre paiement.' },
        { title: 'Licence', body: 'La licence d’utilisation que vous achetez.' },
        { title: 'Conditions de remboursement', body: 'Les conditions et la procédure de remboursement.' },
        { title: 'Comptes externes', body: 'Les comptes ou environnements externes requis sont indiqués avant l’achat.' },
        { title: 'Déclaration sur l’utilisation de l’IA', body: 'Le créateur indique si l’IA a été utilisée pour les images, le texte ou les traductions.' },
      ],
    },
    purchase: {
      label: 'Un seul achat',
      headline: 'Six étapes, de l’essai au nouveau téléchargement.',
      lead: 'Vous achetez le jeu depuis sa page, à côté de ses notes, discussions et Wiki+.',
      steps: [
        { title: 'Essayer', body: 'Essayez la démo avant de décider' },
        { title: 'Payer', body: 'Payez en une fois et retrouvez le reçu dans votre historique' },
        { title: 'Télécharger', body: 'Le fichier adapté à votre plateforme' },
        { title: 'Mettre à jour', body: 'Les correctifs incluent des notes de mise à jour' },
        { title: 'Télécharger à nouveau', body: 'Connectez-vous pour télécharger sur un nouvel ordinateur' },
        { title: 'Après le retrait', body: 'Votre licence reste valable selon les conditions initiales après un retrait ordinaire' },
      ],
    },
    keep: {
      label: 'Ce que vous gardez',
      headline: 'Trois éléments restent à vous',
      lead: 'Vous pouvez télécharger à nouveau les fichiers sans DRM selon les conditions d’achat. Les reçus restent dans votre historique et la licence d’utilisation est conservée avec les conditions indiquées avant l’achat.',
      more: 'L’absence de DRM ne vous autorise pas à revendre ou diffuser les fichiers. Vous disposez d’une licence d’utilisation personnelle. Les remboursements suivent les conditions indiquées sur la page, sans limiter les droits garantis par la loi locale.',
    },
    privacy: {
      text: 'Le jeu que vous avez acheté',
      more: 'n’apparaît pas dans votre bibliothèque aux yeux du créateur.',
      note: 'Le créateur reçoit les informations nécessaires aux paiements et à l’assistance. Un achat ne lui donne pas accès à votre historique de jeu, à vos listes ni à vos autres activités.',
    },
    refuses: {
      label: 'Ce que la boutique ne fait pas',
      headline: 'Ce que cette boutique ne fait pas',
      items: [
        { title: 'Aucun lanceur requis', body: 'Vous n’avez pas besoin d’installer un logiciel REZICS pour jouer aux jeux achetés.' },
        { title: 'Aucun DRM ajouté', body: 'REZICS n’ajoute aucune vérification d’activation aux fichiers.' },
        { title: 'Pas de jeux classés pour adultes', body: 'La boutique ne vend pas d’œuvres classées R18 ou R18G, qu’elles portent une autre étiquette ou soient proposées sous forme de correctif.' },
        { title: 'Pas de publication sans contrôle', body: 'Les jeux de la boutique viennent de créateurs sous contrat avec REZICS. Les droits de chaque jeu sont vérifiés.' },
      ],
    },
    closing: 'Tout est clair avant l’achat, et les fichiers restent à vous après.',
  },

  library: {
    hero: {
      headline: 'Votre bibliothèque de jeux, sur toutes les plateformes et tous les types.',
      lead: 'Réunissez au même endroit vos jeux sur ordinateur, console, console portable et mobile. Chaque partie indique sa plateforme et sa version. Vos livres et séries animées sont également dans votre bibliothèque.',
    },
    status: {
      label: 'Statut',
      headline: 'Chaque statut, de « À jouer » à « Terminé », est distinct.',
      items: [
        { title: 'À jouer', body: 'Ajoutez un jeu à votre liste « À jouer » pour le suivre. Vous serez averti·e lorsqu’une nouvelle version paraît dans une langue que vous comprenez.' },
        { title: 'En cours', body: 'Pour les jeux découpés en chapitres, consignez votre progression et votre version. Les discussions et Wiki+ masquent les révélations en fonction de votre progression.' },
        { title: 'En pause', body: 'Mettez le jeu en pause sans l’abandonner. Votre progression est conservée pour reprendre au même endroit.' },
        { title: 'Terminé', body: 'La fin du jeu est consignée pour cette œuvre. Les extensions d’une édition complète sont suivies séparément.' },
        { title: 'Abandonné', body: 'Si vous ne souhaitez plus jouer, marquez le jeu comme abandonné. L’historique reste conservé et vous pouvez commencer une nouvelle partie plus tard.' },
      ],
    },
    slots: {
      label: 'Historique des parties',
      headline: 'Chaque partie fait l’objet d’une notice.',
      lead: 'Une deuxième partie est enregistrée séparément et ne remplace pas la première. Chaque partie indique la plateforme, la version et votre progression.',
      columns: ['Partie', 'Plateforme et version', 'Statut'],
      rows: [
        { slot: 'Première partie', release: 'Console portable, version asiatique', state: 'Terminé' },
        { slot: 'Deuxième partie', release: 'Ordinateur, version 1.2', state: 'En cours, chapitre 5' },
        { slot: 'Troisième partie', release: 'Console de salon, édition complète', state: 'En pause, dans une extension' },
      ],
      caption: 'Exemple : la version possédée est consignée séparément. Acheter un jeu ne signifie pas y avoir joué.',
    },
    together: {
      label: 'Une seule bibliothèque',
      headline: 'Livres, séries, mangas et jeux, dans une seule bibliothèque.',
      lead: 'La progression est consignée selon l’unité propre à chaque type d’œuvre. Une liste peut réunir des jeux, leurs romans d’origine et leurs adaptations animées, dans l’ordre de votre choix, avec des notes. Vous pouvez ensuite l’exporter dans son intégralité.',
      tiles: [
        { to: 'games', name: 'Jeu', at: 'Chapitre 5' },
        { to: 'books', name: 'Roman', at: 'Tome 3' },
        { to: 'anime', name: 'Série animée', at: 'Épisode 8' },
        { to: 'manga', name: 'Manga', at: 'Chapitre 42' },
        { to: 'visual-novels', name: 'Roman visuel', at: 'Route 2' },
      ],
      caption: 'Exemple : cinq types d’œuvres dans une bibliothèque, chacun avec sa propre unité de progression.',
    },
    playtime: {
      label: 'Temps de jeu',
      headline: 'Durée pour terminer, par plateforme et par style de jeu.',
      lead: 'Pour savoir si vous avez le temps de jouer ce soir, il faut une estimation fiable. REZICS s’appuie uniquement sur les données que les joueurs choisissent de fournir.',
      items: [
        { title: 'Par plateforme', body: 'Le temps sur ordinateur est calculé séparément de celui sur console portable. Les relevés sans plateforme indiquée sont regroupés à part.' },
        { title: 'Par style de jeu', body: 'Terminer l’histoire principale et tout récupérer sont deux parcours distincts.' },
        { title: 'Parties terminées uniquement', body: 'Les parties non terminées ou sans durée indiquée ne sont pas incluses dans la moyenne.' },
        { title: 'Nombre de relevés indiqué', body: 'La moyenne est accompagnée de l’intervalle médian et du nombre de relevés.' },
      ],
      note: 'Votre temps de jeu est privé par défaut. Il n’est inclus dans les statistiques que si vous choisissez de le partager, et seuls les résultats agrégés sont publics.',
    },
    takeout: {
      text: 'Votre bibliothèque vous appartient,',
      more: 'et vous pouvez l’emporter à tout moment.',
      note: 'L’export est gratuit. Les relevés importés d’ailleurs conservent leur source et leurs correspondances. Vous pouvez aussi demander un export si vous ne pouvez plus accéder à votre compte.',
    },
    closing: 'Chaque partie est enregistrée dans votre bibliothèque.',
  },

  reviews: {
    hero: {
      headline: 'Précisez la version évaluée avant de donner une note.',
      lead: 'Un jeu continue d’évoluer après sa sortie. Les notes de la version 1.0 ne doivent pas masquer celles de la version 2.0, et le goût d’une communauté ne représente pas tout le monde. Chaque note précise donc la version et le groupe concerné.',
    },
    versions: {
      label: 'Version',
      headline: 'Chaque version a ses propres notes.',
      lead: 'Votre note est liée à la version à laquelle vous avez joué. La moyenne entre versions est calculée séparément selon une méthode indiquée.',
      tiles: [
        { title: 'Version 1.0', body: 'Version disponible le jour de la sortie' },
        { title: 'Version 1.1', body: 'Mise à jour corrigeant un problème de sauvegarde' },
        { title: 'Version 1.2', body: 'Ajout de nouveaux niveaux' },
        { title: 'Version 2.0', body: 'Mise à jour majeure' },
        { title: 'Édition complète', body: 'Publication comprenant toutes les extensions' },
      ],
      caption: 'Exemple : versions d’un jeu fictif.',
    },
    who: {
      label: 'Groupes de joueurs',
      headline: 'Le groupe derrière chaque note',
      lead: 'Comparez les notes de l’ensemble de REZICS, de vos communautés et des communautés ayant le plus de notes. Les résultats récents et toutes les périodes répondent à des questions différentes et restent séparés.',
      items: [
        { title: 'Nombre et répartition', body: 'Chaque note est accompagnée de son nombre et de sa répartition.' },
        { title: 'Pas assez de notes', body: 'Quand il y a trop peu de notes, seul leur nombre et leur répartition s’affichent, sans moyenne.' },
        { title: 'Notes importées', body: 'Les notes importées d’autres sites sont signalées séparément et ne sont pas mélangées à celles de REZICS.' },
      ],
    },
    targets: {
      label: 'Objet de l’avis',
      headline: 'Histoire, traduction ou réalisation : précisez l’objet évalué.',
      lead: 'Précisez l’objet de chaque avis. Vous pouvez distinguer la qualité de l’histoire de celle de sa traduction. Un avis peut aussi être publié sans note.',
      tiles: [
        { title: 'Histoire', body: 'Intrigue et personnages' },
        { title: 'Traduction', body: 'Qualité de la traduction dans une langue donnée' },
        { title: 'Réalisation', body: 'Système de jeu, graphismes, musique et technique' },
        { title: 'Cette version', body: 'Résultat constaté sur une plateforme et une version précises' },
        { title: 'Personnage dans cette version', body: 'N’affecte pas la note du personnage lui-même' },
      ],
    },
    rules: {
      label: 'Classement',
      headline: 'Les règles de classement sont publiées.',
      items: [
        { title: 'Aucun classement par téléchargement', body: 'REZICS ne suit pas le nombre de téléchargements et ne l’affiche ni ne l’utilise pour classer les jeux.' },
        { title: 'Recommandations motivées', body: 'Lorsqu’une communauté recommande un jeu, la recommandation renvoie à la décision correspondante.' },
        { title: 'La popularité ne détermine pas l’exactitude', body: 'Le nombre de notes influe uniquement sur le classement, jamais sur la catégorie ou les informations d’un jeu.' },
        { title: 'Les révélations sont signalées séparément', body: 'Une communauté peut voter pour signaler une révélation. Ce signalement est distinct de l’avertissement de l’auteur.' },
      ],
    },
    talk: {
      text: 'Discussions, avis et corrections',
      more: 'ont chacun leur espace.',
      note: 'Les échanges informels sur un guide, les réponses à un avis et les corrections de données ont chacun leur espace. Votre version et votre progression pour les révélations vous suivent d’un espace à l’autre.',
    },
    closing: 'Chaque note précise la version et le groupe concerné.',
  },

  guides: {
    hero: {
      headline: 'Consultez le contenu selon votre progression.',
      lead: 'Les personnages, lieux, niveaux et guides sont reliés au même jeu. Wiki+ masque les révélations au-delà du chapitre ou de la route que vous avez atteints.',
    },
    fog: {
      label: 'Révélations',
      headline: 'Masquez ce que vous n’avez pas encore découvert.',
      lead: 'Les personnages, lieux et événements jusqu’au point choisi restent visibles. Le contenu suivant est masqué, mais vous pouvez tout afficher à la fois. Les visiteurs non connectés ne voient pas les révélations par défaut.',
    },
    guides: {
      label: 'Guides',
      headline: 'Les guides précisent la version concernée.',
      lead: 'Un niveau peut se jouer très différemment dans les versions 1.0 et 2.0. Chaque guide précise la version et la plateforme concernées, afin que chacun sache à quelle version il s’applique.',
      more: 'Les sélections de modules créées par une communauté précisent la version du jeu et indiquent si la compatibilité a été vérifiée. Chaque modification est consignée : vous pouvez voir qui a changé quoi, comparer deux versions et revenir en arrière.',
    },
    rules: {
      label: 'Wiki+',
      headline: 'Cinq règles de Wiki+',
      items: [
        { title: 'Une donnée, partout identique', body: 'Les fiches, filtres et listes utilisent les mêmes données sur les personnages. Une correction est répercutée partout.' },
        { title: 'Propositions des agents IA, validation humaine', body: 'Un agent peut proposer des faits et en indiquer la source. Son contenu n’est visible qu’après validation par une personne.' },
        { title: 'Une seule page par personnage', body: 'Un personnage présent dans un jeu, un roman et une série animée n’a qu’une seule page. Les personnes qui lui prêtent leur voix sont créditées avec le personnage et l’œuvre.' },
        { title: 'À partir d’un script', body: 'Pour les romans visuels utilisant un format de script pris en charge, son détenteur peut utiliser la boîte à outils locale sur son ordinateur afin de répertorier les personnages, lieux et événements, passage par passage, puis d’envoyer une proposition. REZICS reçoit une proposition sourcée, jamais le texte intégral du script.' },
        { title: 'Export complet', body: 'Vous pouvez exporter le contenu de Wiki+ et son historique de modifications.' },
      ],
    },
    adaptations: {
      label: 'Adaptations',
      headline: 'De l’œuvre d’origine au jeu, les liens se suivent.',
      lead: 'Prenons « A Certain Magical Index », le light novel de Kazuma Kamachi : il existe aussi en manga, en trois saisons d’animation télévisée et en film, ainsi qu’en jeu de combat, roman visuel et jeu de rôle mobile. Dans REZICS, chaque titre est une œuvre reliée à l’original par le lien « adapté de ». Un même personnage conserve la même identité dans chaque œuvre.',
      chain: [
        { to: 'books', name: 'Light novel', line: 'Œuvre d’origine : série principale, New Testament et Genesis Testament' },
        { to: 'manga', name: 'Manga', line: 'Publication en série depuis 2007', rel: 'Adapté de' },
        { to: 'anime', name: 'Série animée', line: 'Trois saisons télévisées et un film', rel: 'Adapté de' },
        { to: 'visual-novels', name: 'Roman visuel', line: 'Jeu de 2013', rel: 'Adapté de' },
        { to: 'games', name: 'Jeu', line: 'Jeu de combat et jeu de rôle mobile', rel: 'Adapté de' },
      ],
      note: 'L’ordre de publication et l’ordre conseillé pour lire ou jouer sont enregistrés séparément. Vous pouvez aussi suivre la chronologie du récit, en commençant par les premiers événements.',
      caption: 'Exemple de liens entre œuvres à partir de « A Certain Magical Index ».',
    },
    zone: {
      text: 'La communauté d’un jeu',
      more: 'peut avoir son propre site.',
      note: 'Une communauté de jeu rassemble des membres autour de règles et de discussions. Une Zone est son propre site, avec des chemins, une navigation et une apparence personnalisés. Elle peut accueillir des guides et Wiki+, tout en utilisant les données des personnages et des jeux du catalogue REZICS.',
    },
    closing: 'Votre progression détermine ce que vous voyez, et chaque adaptation reste liée au récit.',
  },

  creators: {
    hero: {
      headline: 'Publiez vos jeux tout en conservant vos droits d’auteur.',
      lead: 'REZICS passe des contrats avec des créateurs indépendants pour publier leurs jeux et romans visuels. Les joueurs reçoivent des fichiers sans DRM et les mises à jour. Vous recevez un relevé détaillé et une identité qui relie toutes vos œuvres.',
    },
    rights: {
      label: 'Droits',
      headline: 'Ce que vous conservez et ce que vous autorisez',
      items: [
        { title: 'Droits d’auteur', body: 'Le jeu reste votre propriété. REZICS reçoit une licence non exclusive pour héberger, vendre et livrer les fichiers pendant la durée et dans les régions convenues.' },
        { title: 'Autorisations distinctes', body: 'La traduction, l’adaptation, les modifications importantes, les nouvelles versions et l’utilisation de l’œuvre pour entraîner une IA nécessitent votre accord distinct.' },
        { title: 'Déclaration de licence', body: 'La licence que vous déclarez pour l’œuvre est consignée avec sa version, son champ d’application et la date de la déclaration.' },
        { title: 'Fin du contrat', body: 'Les nouvelles ventes cessent selon le contrat et les sommes déjà dues sont réglées. Les joueurs conservent leur licence selon les conditions initiales et la loi applicable.' },
      ],
    },
    ledger: {
      label: 'Relevé de paiement',
      headline: 'Chaque montant est détaillé sur votre relevé.',
      rows: [
        { label: 'Montant payé par le joueur' },
        { label: 'Taxes collectées', op: 'Moins' },
        { label: 'Frais de paiement et de collecte', op: 'Moins' },
        { label: 'Remboursements et rétrofacturations', op: 'Moins' },
        { label: 'Revenu net', op: 'Égal', total: true },
        { label: 'Votre part' },
      ],
      note: 'Aucun montant n’est déduit deux fois. Les serveurs et l’hébergement, les salaires, le marketing et l’impôt sur le revenu de REZICS ne sont pas prélevés sur vos revenus.',
      reserve: 'Toute réserve éventuelle indique sa justification, son montant ou plafond, sa date de révision et ses conditions de versement.',
      caption: 'Exemple de relevé de paiement. Les frais de transaction, régions de vente et ajustements applicables sont précisés dans le contrat.',
    },
    name: {
      label: 'Un seul nom',
      headline: 'Un nom relie toutes vos créations.',
      lead: 'Vos jeux, romans, bandes originales et rôles de doublage sont rattachés à la même identité. Les joueurs qui vous suivent voient vos nouvelles œuvres et vos annonces.',
      tiles: [
        { to: 'games', name: 'Jeu', role: 'Développement' },
        { to: 'books', name: 'Roman', role: 'Auteur' },
        { name: 'Bande originale', role: 'Composition' },
        { to: 'anime', name: 'Série animée', role: 'Doublage' },
      ],
      caption: 'Chaque nom au générique renvoie à un tel portfolio.',
    },
    home: {
      label: 'Communauté et site',
      headline: 'Après sa publication, votre jeu a sa propre communauté et son site.',
      lead: 'Créez une communauté pour que les joueurs discutent de votre jeu, puis une Zone pour son site officiel. Les annonces, les versions et leurs notes sont ajoutées au catalogue. Les joueurs qui suivent le jeu reçoivent les notifications dans la langue de leur choix.',
      more: 'Avant la sortie d’une nouvelle version, préparez un dossier de publication avec des images, une description et un calendrier que les médias et les joueurs pourront citer. Vous pouvez aussi utiliser l’outil local pour lire votre script, répertorier les personnages et les événements et créer le Wiki+ du jeu. Le texte intégral du script n’est jamais envoyé à REZICS.',
    },
    rules: {
      text: 'Avant la vente,',
      more: 'indiquez clairement les conditions.',
      note: 'Les démos, descriptions, captures d’écran et informations de compatibilité doivent être exactes. Indiquez avant l’achat tout compte ou environnement externe requis. Déclarez fidèlement l’utilisation de l’IA. Les œuvres classées pour adultes ne peuvent pas être publiées.',
    },
    closing: 'Les œuvres vous appartiennent, et les comptes sont transparents.',
  },
};

export default {
  id: 'games',
  base: '/games/',
  name: 'Jeux',
  theme: { kind: 'games' },
  next: 'software',
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Jeux REZICS : catalogue, boutique et bibliothèque',
        description:
          'Dans REZICS, chaque jeu a une seule page où ses plateformes et versions sont répertoriées séparément. Trouvez la version jouable sur votre appareil et dans votre langue, consignez chaque partie et achetez des fichiers de jeux indépendants que vous garderez.',
      },
    },
    {
      slug: 'releases',
      label: 'Plateforme et version',
      meta: {
        title: 'Plateformes et versions : trouvez la version jouable',
        description:
          'Dans REZICS, les versions pour ordinateur, console de salon, console portable et mobile, ainsi que les éditions régionales, Deluxe et complètes, ont chacune leur notice. Les langues, exigences et disponibilités sont indiquées séparément. Les filtres portent sur une même publication.',
      },
    },
    {
      slug: 'store',
      label: 'Boutique',
      meta: {
        title: 'Boutique REZICS : des jeux que vous gardez',
        description:
          'REZICS publie les jeux et romans visuels de créateurs indépendants sous contrat. Sans DRM ni lanceur, ils peuvent être téléchargés à nouveau après un achat unique, selon les conditions. Avant de payer, consultez la version, les langues, la configuration requise, le prix TTC et les conditions de remboursement.',
      },
    },
    {
      slug: 'library',
      label: 'Bibliothèque de jeux',
      meta: {
        title: 'Bibliothèque de jeux : chaque partie est consignée',
        description:
          'Réunissez vos jeux à jouer, en cours, en pause, terminés ou abandonnés dans une seule bibliothèque. Chaque partie indique sa plateforme et sa version. Livres, séries animées et mangas y figurent aussi. L’export est gratuit et disponible à tout moment.',
      },
    },
    {
      slug: 'reviews',
      label: 'Notes et avis',
      meta: {
        title: 'Notes et avis sur les jeux : précisez la version',
        description:
          'Les notes de jeux dans REZICS précisent la version et le groupe de joueurs, avec leur nombre et leur répartition. Un avis peut être publié sans note et porter séparément sur l’histoire, la traduction ou la réalisation. Les téléchargements ne servent pas au classement.',
      },
    },
    {
      slug: 'guides',
      label: 'Guides et Wiki+',
      meta: {
        title: 'Guides, Wiki+ et adaptations',
        description:
          'Les guides, personnages et lieux d’un jeu sont répertoriés dans Wiki+, qui masque les révélations selon votre progression et conserve chaque modification. Les romans, séries animées et mangas adaptés sont reliés au même jeu. Les communautés peuvent aussi créer leur propre site.',
      },
    },
    {
      slug: 'creators',
      label: 'Créateurs',
      meta: {
        title: 'Créateurs : publiez vos jeux dans REZICS',
        description:
          'Les créateurs indépendants publient leurs jeux et romans visuels dans REZICS tout en conservant leurs droits d’auteur. Ils fournissent des fichiers sans DRM et leurs mises à jour, avec un relevé détaillé des taxes, frais et remboursements. Une seule identité relie leurs jeux, romans et musiques.',
      },
    },
  ],
  strings,
} satisfies MiniSite<GamesStrings>;
