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
  contentsLabel: 'Contenu de cette page',
  hero: {
    headline: 'Voyez qui décide et sur quels fondements.',
    lede: 'Les faits indiquent leurs sources, les licences leurs conditions et les décisions de modération les règles et preuves sur lesquelles elles reposent. Les vérifications, contestations et appels s’ajoutent à l’historique sans effacer les précédents.',
    imageAlt: 'Cinq feuilles grises, ocre et bleu clair sont décalées en couches, chacune avec une étiquette vierge sur le bord.',
  },
  marks: {
    label: 'Traces',
    headline: 'Les décisions s’ajoutent sans effacer les précédentes.',
    lead: 'Chaque donnée conserve sa source, son statut de vérification et les éventuelles contestations : son origine, si elle a été vérifiée et si quelqu’un l’a contestée. Toute nouvelle conclusion s’ajoute à l’historique.',
    facts: [
      {
        title: 'Sources',
        body: 'Les faits et textes importés par la plateforme indiquent leur source et leur licence, avec un lien vers l’original. Seul le contenu autorisé par la licence est publié. Si la licence est inconnue, seuls les faits sont repris. Les critiques, billets et commentaires rédigés par des utilisateurs d’autres sites ne sont jamais importés.',
      },
      { title: 'Non vérifié', body: 'Les nouveaux éléments peuvent être publiés avec le statut non vérifié et une source pour chaque champ. Ils n’apparaissent pas dans les exportations fiables ni les recommandations avant vérification.' },
      {
        title: 'Vérifié, mais contesté',
        body: 'La vérification indique qui l’a effectuée, sur quelles preuves et selon quelle version des règles. Un élément vérifié peut toujours être contesté : un même champ peut être marqué comme vérifié et contesté. La contestation reste en attente d’évaluation ; des données manquantes ou une évaluation obsolète ne signifient pas que l’élément est faux.',
      },
      {
        title: 'Déclaration d’usage de l’IA',
        body: 'Les textes, images et traductions indiquent séparément si l’IA n’a pas été utilisée, a servi d’aide ou a généré du contenu. La vérification humaine est signalée à part. Une mention « vérifié » ne transforme pas « généré » en « non utilisé ». Une déclaration absente n’est pas considérée comme « non utilisé ».',
      },
      { title: 'Non évalué', body: 'Les contenus dont la classification d’âge n’a pas été évaluée portent la mention « non évalué » et ne sont jamais considérés comme tout public.' },
      {
        title: 'Identité automatisée',
        body: 'Les agents IA indiquent qu’ils sont automatisés et identifient leur responsable. Ils agissent uniquement dans le périmètre autorisé et ne peuvent pas falsifier des critiques, votes ou autres formes de participation. Leurs résultats conservent les données d’entrée et la méthode utilisées. Un agent ne peut pas s’autoriser lui-même ni marquer son propre résultat comme vérifié par une personne.',
      },
    ],
  },
  imports: {
    label: 'Importations',
    headline: 'La plateforme répond de ses propres importations.',
    lead: 'REZICS ne publie que les contenus que la source autorise à importer. Les contenus saisis par les utilisateurs restent leur contribution et leur responsabilité. L’outil leur rappelle d’ajouter une source et la plateforme conserve celle qu’ils fournissent.',
    facts: [
      { title: 'La licence accompagne le texte', body: 'Les résumés sous licence ouverte qui exige le partage dans les mêmes conditions conservent cette licence après reformulation ou traduction. Elle est incluse lors de la consultation et de l’exportation.' },
      { title: 'Les couvertures restent la propriété de leurs ayants droit', body: 'Les couvertures importées indiquent leur titulaire de droits et leur source. Elles servent uniquement de couvertures, jamais de bannières ni d’images de présentation.' },
      { title: 'Une couverture textuelle en l’absence d’image', body: 'Les œuvres sans couverture affichent une couverture textuelle composée du titre et du nom de l’auteur.' },
      { title: 'Statut de la vérification des licences', body: 'Les pages d’œuvres et de faits indiquent la licence applicable et ses obligations d’attribution. Les licences non évaluées sont marquées comme telles.' },
      { title: 'Les citations de Wiki+ sont limitées', body: 'Pour les citations du texte d’origine dans Wiki+, des limites s’appliquent au passage et au total par source. Le calcul est regroupé entre comptes, traductions et Zones.' },
      { title: 'Chaque fait de Wiki+ indique son emplacement', body: 'Chaque fait de Wiki+ préparé par un agent IA indique le chapitre et comprend une courte citation. Les lecteurs ne le voient pas avant sa vérification par une personne.' },
    ],
  },
  humans: {
    label: 'Appels et décisions',
    trail: {
      label: 'Exemple de retrait de couverture et d’appel',
      stages: ['Décision initiale', 'Appel', 'Nouvelle décision'],
    },
    headline: 'Les décisions sont prises par des personnes.',
    lead: 'Un signalement ou une réclamation relative aux droits est une accusation, pas une conclusion. Une personne détermine s’il s’agit d’un différend ordinaire ou d’une procédure légale de notification et de contre-notification. La décision précise les règles et preuves utilisées, et ne porte que sur le contenu et l’usage signalés.',
    facts: [
      {
        title: 'Seule la partie signalée est retirée',
        body: 'Exemple : après le retrait d’une couverture, elle est remplacée par une couverture textuelle. Les autres données de l’œuvre restent en place. Les mises à jour ultérieures ne rétablissent pas cette couverture.',
      },
      { title: 'Les appels sont examinés par une personne', body: 'Vous pouvez faire appel d’une décision. Si les effectifs le permettent, une autre personne examine l’appel. Sinon, vous êtes informé que la même personne le réexaminera.' },
      { title: 'Une nouvelle décision s’ajoute au dossier', body: 'Une décision révisée est consignée séparément, sans supprimer la décision initiale.' },
      {
        title: 'L’IA reste un outil d’aide',
        body: 'Le score d’un détecteur d’IA ne constitue jamais à lui seul une décision. Si l’IA aide à la vérification, sa méthode, ses données d’entrée et ses paramètres sont consignés. Si le résultat est incertain, une personne l’examine ou le dossier reste en attente.',
      },
      { title: 'Les preuves les plus sensibles', body: 'Les preuves sensibles liées à la sécurité des enfants ou à des images intimes ne sont jamais envoyées à une IA générative généraliste.' },
    ],
  },
  numbers: {
    label: 'Délais',
    headline: 'Les délais prévus par les règles.',
    lead: 'Chaque chiffre ci-dessous provient des politiques de REZICS.',
    figures: [
      {
        value: '48',
        unit: 'heures',
        body: 'Après réception d’une demande de retrait valide, les images intimes partagées sans consentement sont retirées sous 48 heures. Les copies identiques présentes sur la plateforme sont aussi recherchées et retirées dans la mesure du possible. Un appel ne suspend pas ce délai.',
      },
      {
        value: '10 à 14',
        unit: 'jours ouvrables',
        body: 'Après réception d’une contre-notification valide relative au droit d’auteur, le contenu est rétabli entre le 10e et le 14e jour ouvrable, sauf notification du titulaire de droits indiquant qu’une action en justice a été engagée. Toute restriction liée à la sécurité, au droit ou au contrat est expliquée avec la voie de recours disponible.',
      },
      { value: '6', unit: 'mois', body: 'Vous pouvez faire appel gratuitement pendant au moins six mois après avoir reçu la notification d’une décision de modération, y compris si la décision est de ne pas traiter votre signalement.' },
      { value: '13', unit: 'ans', body: 'L’âge minimum d’inscription dépend de la région : 13 ans à Taïwan et dans certaines régions, 14 ans en Corée du Sud et 16 ans dans l’Espace économique européen. La règle la plus stricte s’applique.' },
      { value: '7', unit: 'jours', body: 'Les données originales d’une bibliothèque importée sont conservées sept jours à compter de l’envoi. Ensuite, elles ne peuvent plus être consultées ni exportées, puis sont programmées pour suppression. Exportez votre bibliothèque avant l’échéance pour conserver les champs d’origine.' },
      { value: '1', unit: 'mois', body: 'Les demandes de données couvertes par le RGPD reçoivent généralement une réponse sous un mois. Si un délai supplémentaire est nécessaire, vous en êtes informé pendant le premier mois.' },
    ],
    note: 'Vous pouvez faire un signalement ou un appel sans compte, même si votre compte a été suspendu.',
  },
  views: {
    label: 'Visibilité',
    headline: 'Une même page peut montrer des contenus différents selon la personne.',
    lead: 'À chaque consultation ou envoi, le serveur vérifie les blocages, la confidentialité, la progression de lecture, la juridiction et les retraits. Les résultats de recherche, nombres, aperçus, notifications, exportations et contenus lus par les agents IA suivent les mêmes règles.',
    facts: [
      { title: 'Personnes non connectées', body: 'Elles voient les contenus tout public et non évalués. Wiki+ commence au début de l’histoire et ne révèle pas la suite.' },
      { title: 'Vous, après le chapitre 3', body: 'Wiki+ et les discussions s’arrêtent à votre progression. Choisissez un chapitre ou affichez tout.' },
      {
        title: 'Contenus classés par âge',
        body: 'R15 est réservé aux personnes de 15 ans et plus. Les contenus sexuels (R18) et les contenus extrêmes (R18G) s’activent séparément. Pour un contenu portant les deux classifications, les deux options doivent être activées. Ces options ne sont pas disponibles dans les régions où les contenus pour adultes ne sont pas proposés. La classification détermine l’affichage, mais ne donne pas accès aux contenus privés.',
      },
      { title: 'Modérateurs de communauté', body: 'Ils n’accèdent qu’aux informations nécessaires à la modération. Ils ne peuvent pas consulter librement les comptes, bibliothèques privées ou signalements de sécurité confidentiels des membres.' },
      { title: 'Moteurs de recherche et aperçus de partage', body: 'Ils ne voient que la page publique, telle qu’elle apparaît sans connexion. Les contenus pour adultes ne figurent pas non plus dans les e-mails et notifications push.' },
      { title: 'Images masquées', body: 'Les images qui peuvent être inadaptées en public sont masquées par défaut. Vous choisissez de les afficher directement. Les images masquées par leur auteur le restent.',
      },
    ],
  },
  privacy: {
    label: 'Confidentialité',
    headline: 'Vos données de lecture ne servent pas à la publicité.',
    facts: [
      {
        title: 'Pas de profil publicitaire',
        body: 'Les données de lecture privées ne servent ni à créer des profils publicitaires ni à déduire des caractéristiques sensibles à des fins marketing. Le site n’utilise pas de traceurs publicitaires et ne vend pas de données personnelles. Les cookies de REZICS servent uniquement à mémoriser la langue de l’interface, le thème visuel et la connexion.',
      },
      {
        title: 'Consentement distinct pour l’entraînement',
        body: 'Par défaut, les brouillons non publiés et les données de lecture ne sont pas utilisés pour entraîner des modèles d’IA. Cela n’est possible que si vous choisissez explicitement de participer. L’inscription ou l’utilisation de fonctions d’IA ne vaut pas consentement.',
      },
      { title: 'Information avant tout envoi', body: 'Avant qu’une fonction d’IA envoie des données privées à un service externe, elle indique le fournisseur, les données envoyées, leur usage et leur durée de conservation.' },
      { title: 'Privé par défaut', body: 'Les brouillons et les données de lecture sont privés par défaut. Seul un partage de votre part les rend visibles aux autres utilisateurs. Même les personnes qui gèrent votre identité publique ou votre communauté n’ont pas accès à vos données de lecture privées.' },
      { title: 'Date de naissance privée', body: 'Votre date de naissance est privée par défaut. Activer les contenus classés par âge ne la rend pas publique, et votre admissibilité ne dépend pas de sa visibilité.' },
      { title: 'Vos données, à votre demande', body: 'Vous pouvez demander à consulter, corriger, exporter ou supprimer vos données, même sans compte.',
      },
    ],
  },
  family: {
    closing: 'Chaque élément indique sa source, que vous pouvez consulter.',
  },
};

export default {
  id: 'trust',
  base: '/engine/trust/',
  name: 'Confiance',
  theme: { module: 'trust' },
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Confiance : chaque élément a une source',
        description:
          'Les données de REZICS indiquent leurs sources et licences. Les vérifications, contestations et appels sont consignés séparément, sans se remplacer. Vous pouvez faire un signalement sans compte. Les images intimes partagées sans consentement sont retirées sous 48 heures après réception d’une demande valide.',
      },
    },
  ],
  strings,
} satisfies MiniSite<TrustStrings>;
