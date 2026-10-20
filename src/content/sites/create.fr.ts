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
  contentsLabel: 'Contenu de cette page',
  hero: {
    headline: 'Auteurs, éditions et droits sont consignés avec soin.',
    lede: 'Écrivez, programmez et publiez vos chapitres ici. Chaque édition officielle est archivée, avec les traductions et licences attribuées à leurs auteurs. Pour les ventes directes de livres et de jeux, le relevé de compte détaille chaque déduction.',
    imageAlt: 'Deux piles de feuilles reliées sur un bord par une bande de papier gris foncé sont superposées. Leurs tranches révèlent plusieurs couches de couleur.',
  },
  writing: {
    label: 'Écriture',
    headline: 'Retrouvez chaque version enregistrée.',
    lead: 'L’écriture longue dispose d’une barre d’outils complète. Les réponses aux discussions gardent uniquement les formats les plus courants. Sur téléphone, la barre reste au-dessus du clavier et ne le ferme pas lorsque vous appuyez dessus. Écrire un chapitre aussi long reste aussi fluide que répondre à un message court.',
    facts: [
      { title: 'Chaque enregistrement est une révision', body: 'Chaque enregistrement conserve une version précise. Effacer un chapitre crée aussi une révision vide ; un chapitre vide ne peut pas être publié.' },
      { title: 'Publication dans votre fuseau horaire', body: 'Programmez une publication le vendredi à 20 h : elle aura lieu à cette heure dans votre fuseau horaire. Le serveur exécute la programmation, même si votre ordinateur est éteint.' },
      { title: 'Des droits distincts pour chaque collaborateur', body: 'Invitez des collaborateurs et autorisez-les séparément à lire, suggérer, modifier ou publier. Le droit de modifier un texte ne donne pas le droit de le publier. Les retours des lecteurs et collaborateurs sont réunis dans une boîte de réception.' },
      { title: 'Emportez toute l’œuvre', body: 'Sauvegardez l’œuvre entière et exportez-la dans un fichier qui conserve tous les formats. Une version en texte brut est aussi disponible. Importez d’anciens manuscrits en texte brut ou Markdown pour continuer à les écrire.' },
      { title: 'Annotations et emphase', body: 'L’éditeur permet d’ajouter des annotations, comme des guides de prononciation ou des furigana, ainsi que des marques d’emphase. Les œuvres japonaises peuvent être lues verticalement.' },
    ],
  },
  world: {
    label: 'Univers',
    headline: 'À côté du texte, un monde à vous.',
    lead: 'Personnages, lieux, factions, événements, objets et paramètres ont chacun leur modèle révisable, à côté de votre manuscrit et visible par vous seul.',
    facts: [
      { title: 'Cartes', body: 'Placez les lieux sur une carte que vous avez créée.' },
      { title: 'Relations', body: 'Reliez les personnages dans un même graphe.' },
      { title: 'Chronologie', body: 'Les événements aux dates incertaines peuvent aussi figurer dans la chronologie. Chaque graphique a une version sous forme de liste, consultable élément par élément.' },
      { title: 'Publier quelques pages', body: 'Choisissez les pages à publier dans le Wiki+ de l’œuvre. Les révisions privées restent invisibles aux lecteurs.' },
      { title: 'Aide à la cohérence', body: 'L’assistant de votre choix signale uniquement les contradictions entre les notes et le manuscrit. Vous écrivez toujours les chapitres.' },
      { title: 'Sans abonnement', body: 'Les univers et les exportations complètes, réimportables, ne nécessitent pas d’abonnement payant.' },
    ],
  },
  chapters: {
    label: 'Chapitres',
    headline: 'Publier un chapitre, c’est ajouter une publication à un livre.',
    lead: 'Un chapitre ne devient pas une œuvre distincte. Le livre reste l’œuvre, avec ses notes, ses abonnements et ses crédits d’auteur. Chaque chapitre est une publication dans son sommaire.',
    facts: [
      { title: 'Un même chapitre à deux endroits', body: 'Un chapitre peut figurer à la fois dans une série et dans un recueil. Le texte et les commentaires ne sont enregistrés qu’une fois, et la progression est suivie séparément à chaque endroit.' },
      { title: 'Images ou sondages seuls', body: 'Une publication contenant uniquement des images ou un sondage peut être publiée sans texte.' },
      { title: 'Les notes de l’auteur sont distinctes', body: 'Les notes de l’auteur à la fin d’un chapitre sont un complément à la publication. Elles ne comptent pas dans le nombre de mots, ne sont pas traduites et ne figurent pas dans une édition officielle.' },
      { title: 'Reprendre au chapitre suivant', body: 'La section « Continuer » de la page d’accueil ouvre directement le prochain chapitre non lu. Les discussions s’arrêtent à la progression du lecteur, et les révélations au-delà restent masquées.' },
      { title: 'Commentaires liés au texte', body: 'Les commentaires et citations gardent la révision et le passage concernés. Si l’auteur modifie le texte, ils restent liés aux mêmes phrases.' },
    ],
  },
  editions: {
    label: 'Éditions',
    specimen: {
      label: 'Exemple d’éditions',
      items: [
        { title: 'Version principale', value: '13', unit: 'chapitres', note: 'Mise à jour après l’ajout d’un chapitre' },
        { title: 'Première édition archivée', value: '12', unit: 'chapitres', note: 'Contenu conservé tel qu’il a été publié' },
      ],
      caption: 'Après l’ajout du chapitre 13 à la version principale, la première édition de la même œuvre garde ses douze premiers chapitres.',
    },
    headline: 'Les éditions publiées sont archivées. Les suivantes ont leur propre fiche.',
    lead: 'Chaque œuvre a une version principale qui évolue avec les nouveaux chapitres et les nouvelles langues. Une édition officielle est une archive de la version principale qui ne contient que le contenu réellement publié à ce moment-là. Les traductions et ajouts ultérieurs ont chacun leur fiche et indiquent leur source.',
    facts: [
      { title: 'Version principale', body: 'Chaque œuvre a une version principale unique, qui sert de point d’entrée aux lecteurs. Les nouveaux chapitres et langues y sont ajoutés sans créer une autre identité.' },
      { title: 'Série en ligne', body: 'Une version publiée en ligne est aussi une édition. Comme son contenu évolue, l’adresse d’origine et chaque capture datée sont conservées et archivées séparément.' },
      { title: 'Version fixe', body: 'Archivez le contenu déjà publié dans une version fixe. Les chapitres publiés ensuite n’y sont pas ajoutés.' },
      { title: 'Une édition, plusieurs points d’accès', body: 'Une édition peut être proposée dans plusieurs boutiques et sites, tout en restant une seule publication. Les versions republiées sans autorisation sont consignées séparément et ne sont jamais fusionnées avec la version officielle.' },
      { title: 'Traduction', body: 'Une traduction est une nouvelle version du contenu qui précise la révision ou l’édition source. Une source incertaine est signalée comme telle, sans supposition.' },
      {
        title: 'Traduction de lecteurs',
        body: 'Une traduction de lecteurs d’une œuvre en ligne est présentée comme une édition virtuelle et précise sa portée, par exemple « les vingt premiers chapitres sur cent » (exemple). Une édition virtuelle est une organisation des données sur REZICS. Elle ne signifie pas que cette version a été publiée.',
      },
    ],
    note: 'Chaque édition indique son statut : officielle, non officielle, virtuelle, interrompue ou annulée. Le relevé reste conservé même si le statut change.',
  },
  copyright: {
    statement: 'Rendre une œuvre publique',
    sub: 'n’autorise pas sa republication, sa vente, sa traduction ou son usage pour entraîner une IA.',
  },
  rights: {
    label: 'Traductions et droits',
    headline: 'Les traductions sont attribuées et les droits précisés.',
    lead: 'Qui peut traduire, si une traduction peut être publiée et quelle part d’IA une œuvre contient : rien n’est laissé à une autorisation implicite. Chaque déclaration est attribuée et datée.',
    facts: [
      {
        title: 'La licence du service a un périmètre précis',
        body: 'Vous conservez vos droits d’auteur. Pour les contenus que vous publiez sur REZICS, vous autorisez uniquement REZICS à les stocker, reproduire, transmettre, afficher, traiter et convertir en format pour fournir les services que vous utilisez. Cette licence n’inclut ni la publicité, ni la vente de vos contenus privés, ni la création de nouvelles éditions commerciales, ni l’entraînement illimité d’une IA.',
      },
      { title: 'Chaque traduction a ses crédits', body: 'Une œuvre peut avoir plusieurs traductions. Les lecteurs et les communautés choisissent celle qu’ils utilisent, et chaque traduction reste attribuée à son traducteur. L’auteur peut refuser que la page d’origine renvoie à une traduction et peut déposer une réclamation relative aux droits.' },
      {
        title: 'Toute publication a un fondement',
        body: 'Les traductions réalisées par des lecteurs sont privées par défaut. Leur publication doit reposer sur une raison consignée : l’œuvre d’origine est dans le domaine public, sa licence ouverte autorise les traductions, l’auteur a donné son accord ou les a autorisées publiquement. Un vote de la communauté ne peut pas rendre une traduction publique.',
      },
      {
        title: 'Progression passage par passage',
        body: 'Chaque passage traduit a un statut : brouillon, traduit, relu ou finalisé. Lorsqu’un passage source change, sa traduction est marquée comme à mettre à jour et reste à sa place, sans être déplacée sous une nouvelle phrase.',
      },
      {
        title: 'Déclarations de licence',
        body: 'Chaque déclaration précise ce qui est autorisé, la licence et sa version, son auteur, sa date et son périmètre. Les éléments inconnus sont indiqués comme tels. Une déclaration ne constitue pas en soi une confirmation juridique de l’autorisation. Les auteurs peuvent aussi publier une licence permanente, par exemple pour autoriser les traductions. Si elle est retirée, la déclaration d’origine n’est pas réécrite.',
      },
      {
        title: 'Déclaration d’usage de l’IA',
        body: 'Pour les textes, images et traductions, indiquez séparément si l’IA n’a pas été utilisée, a servi d’aide ou a généré du contenu. Le contrôle humain est signalé séparément. Les lecteurs peuvent filtrer selon leurs préférences.',
      },
    ],
  },
  sell: {
    label: 'Vente',
    headline: 'Vendez livres et jeux directement aux lecteurs.',
    lead: 'Les créateurs sous contrat avec REZICS peuvent vendre leurs livres et jeux directement aux lecteurs. Les livres sont disponibles en EPUB ou PDF ; les jeux et romans visuels sous forme de fichiers téléchargeables. Aucun n’utilise de DRM ni de lanceur.',
    facts: [
      { title: 'Toutes les informations avant l’achat', body: 'Avant le paiement, consultez la version, la langue, les exigences de compatibilité, le prix, les taxes, le vendeur, la licence d’utilisation et les conditions de remboursement.' },
      { title: 'Extraits, mises à jour et nouveaux téléchargements', body: 'Les lecteurs peuvent consulter un extrait. Après l’achat, les mises à jour et nouveaux téléchargements suivent les conditions d’achat.' },
      { title: 'Même après le retrait', body: 'Si une œuvre est retirée en temps normal ou si le contrat prend fin, les personnes qui l’ont achetée conservent leur licence selon les conditions initiales et le droit applicable.' },
      { title: 'Vie privée des lecteurs', body: 'Les données de lecture et la bibliothèque des personnes qui achètent vos œuvres ne vous sont pas communiquées. Vous recevez les données agrégées nécessaires au relevé de compte.' },
      { title: 'Le contrat autorise uniquement la vente', body: 'Le contrat de vente autorise uniquement REZICS à héberger, convertir, promouvoir et vendre les œuvres. Les traductions, adaptations, nouvelles éditions et l’entraînement d’une IA nécessitent votre accord séparé.' },
      { title: 'Vente réservée aux créateurs sous contrat', body: 'Il ne s’agit pas d’une place de marché ouverte. Les contenus sexuels explicites et les œuvres classées R18 ou R18G ne sont pas vendus ici.' },
    ],
  },
  account: {
    label: 'Relevé de compte',
    headline: 'Chaque opération est détaillée.',
    lead: 'Le revenu net correspond aux paiements reçus, déduction faite des taxes collectées, des frais de paiement et de transaction convenus, ainsi que des remboursements, annulations et rejets de paiement. Les frais d’exploitation, comme l’hébergement, les salaires et le marketing, ainsi que l’impôt sur les bénéfices de REZICS, ne sont pas déduits.',
    rows: [
      { label: 'Paiement du lecteur', detail: 'Montant réellement payé, taxes comprises', kind: 'paid' },
      { label: 'Taxes', detail: 'Taxes collectées et reversées selon la loi', kind: 'deduct' },
      { label: 'Frais de paiement et de transaction', detail: 'Frais de paiement justifiés, ainsi que frais de change et de litige prévus au contrat', kind: 'deduct' },
      { label: 'Remboursements et litiges', detail: 'Montants remboursés, annulés ou rejetés', kind: 'deduct' },
      { label: 'Revenu net', detail: 'Paiements moins les déductions de transaction convenues', kind: 'net' },
      { label: 'Part du créateur', detail: 'Versée selon la part prévue au contrat', kind: 'share' },
      { label: 'Part de REZICS', detail: 'Conservée par la plateforme selon le contrat', kind: 'share' },
    ],
    deduct: 'Déduction',
    caption: 'Exemple de relevé : chaque déduction a sa propre ligne, aucun montant n’est déduit deux fois et les montants sont calculés transaction par transaction.',
  },
  family: {
    closing: 'Vous écrivez. REZICS consigne chaque version et chaque opération.',
  },
};

export default {
  id: 'create',
  base: '/engine/create/',
  name: 'Création et publication',
  theme: { module: 'create' },
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Création et publication : manuscrits, éditions et comptes',
        description:
          'Écrivez, programmez et publiez des chapitres sur REZICS. Chaque enregistrement garde sa révision et chaque édition publiée est archivée. Les traductions sont attribuées à leurs traducteurs et les droits déclarés élément par élément. Vendez aussi des livres et des jeux directement, avec chaque déduction détaillée sur le relevé de compte.',
      },
    },
  ],
  strings,
} satisfies MiniSite<CreateStrings>;
