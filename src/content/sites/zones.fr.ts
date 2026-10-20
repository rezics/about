// 站點 (/engine/zones/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). The example
// Zone is an illustrative (示意) 《魔法禁書目錄》 Wiki+ in zh-Hant; text only, per
// .temp/sites/EXAMPLE-WORK.md. Its handle, routes and revision log are not REZICS data.
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'zones')!;

export interface Item {
  title: string;
  body: string;
}

export interface ZonesStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  routes: {
    label: string;
    headline: string;
    lead: string;
    caption: string;
    /** Route title and its path; `depth` indents a child route. */
    entries: { title: string; path: string; depth?: 1; note?: string }[];
    note: string;
  };
  templates: { label: string; headline: string; lead: string; steps: Item[]; note: string };
  themes: { label: string; headline: string; lead: string; items: Item[] };
  wiki: { label: string; headline: string; lead: string; items: Item[] };
  shared: { label: string; headline: string; lead: string; more: string; alt: string };
  log: { label: string; headline: string; lead: string; caption: string; entries: Item[]; items: Item[] };
  closing: string;
}

export default {
  id: 'zones',
  base: '/engine/zones/',
  name: 'Zones',
  theme: { module: 'zones' },
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Zones : créer un site sur l’index partagé',
        description:
          'Une Zone est un site complet créé par une communauté à partir des données partagées de REZICS. Elle choisit ses routes, modèles, navigation et thème. Découvrez comment composer un Wiki+, éviter les révélations et réviser le site.',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: 'Modules',
      headline: 'Votre site, des données partagées.',
      lede: 'Une Zone a son propre accueil, sa navigation et sa mise en page. La communauté choisit l’apparence du site ; œuvres, personnages et faits viennent des données partagées.',
      alt: 'Une feuille gris foncé pliée forme une petite maison sans toit, avec une porte et deux pièces où se trouvent de petits papiers rose et bleu.',
    },
    routes: {
      label: 'Routes',
      headline: 'La communauté organise chaque niveau de son site.',
      lead: 'Chaque route a une identité stable et peut utiliser des caractères chinois. Les pages détaillées n’ouvrent que les données répertoriées dans cette Zone. Créer une route ne crée pas une nouvelle donnée. La navigation a son propre arbre et son ordre.',
      caption: 'Exemple : les routes d’un Wiki+ A Certain Magical Index',
      entries: [
        { title: 'Accueil', path: '/z/index-wiki' },
        { title: 'Œuvres', path: '/z/index-wiki/oeuvres' },
        { title: 'New Testament', path: '/z/index-wiki/oeuvres/new-testament', depth: 1 },
        { title: 'Personnages', path: '/z/index-wiki/personnages' },
        { title: 'Ordre de lecture', path: '/z/index-wiki/ordre-de-lecture', note: 'Page personnalisée' },
        { title: 'Chronologie', path: '/z/index-wiki/chronologie' },
        { title: 'Recherche', path: '/z/index-wiki/recherche' },
      ],
      note: 'Les routes sont gérées par la table de la Zone, et la plateforme réserve peu de termes. Les discussions se trouvent dans la communauté à /r/index-wiki ; les deux sites renvoient l’un à l’autre.',
    },
    templates: {
      label: 'Modèles',
      headline: 'Le modèle le plus spécifique est utilisé en premier.',
      lead: 'Chaque bloc de page est lié à une source : la donnée affichée, l’un de ses attributs, un document, une liste ou une requête enregistrée. Chaque liste permet de consulter tous ses résultats.',
      steps: [
        { title: 'Route définie', body: 'Si cette route précise un modèle, celui-ci est utilisé.' },
        { title: 'Type', body: 'Sinon, le modèle de ce type s’applique, par exemple un seul modèle pour tous les personnages.' },
        { title: 'Structure', body: 'Sans modèle propre au type, utilisez celui de sa structure.' },
        { title: 'Page générique', body: 'À défaut, une page générique affiche les noms, identifiants, affirmations et sources, ainsi que les relations dans les deux sens.' },
      ],
      note: 'Un type inhabituel n’hérite pas des boutons d’un livre. Sa page ne contient que les fonctions dont il a besoin.',
    },
    themes: {
      label: 'Thèmes',
      headline: 'Le thème change l’apparence, pas les protections.',
      lead: 'La communauté choisit l’identité visuelle, les couleurs, les polices et la mise en page. La plateforme protège certains éléments, quel que soit le thème.',
      items: [
        { title: 'Choisis par la communauté', body: 'Logo, couleurs, polices et mise en page.' },
        { title: 'Protégés par la plateforme', body: 'Identité, recherche, choix de la langue, sources et accessibilité.' },
        {
          title: 'Votre propre code d’affichage',
          body: 'Pour aller plus loin, une Zone peut ajouter son propre code d’affichage. Il est vérifié avant publication, et les lecteurs peuvent toujours revenir à la mise en page standard. Le système reste unique.',
        },
      ],
    },
    wiki: {
      label: 'Wiki+',
      headline: 'Wiki+ suit votre lecture.',
      lead: 'Le Wiki+ est la Zone de l’œuvre : personnages, lieux, chronologie et ordre de lecture ont chacun leur page. Les encadrés lisent les faits du graphe, comme toute autre page qui s’y réfère.',
      items: [
        { title: 'Sans connexion', body: 'La lecture commence au début de l’histoire. Les faits qui révèlent la suite sont masqués.' },
        { title: 'Avec un compte', body: 'Par défaut, le Wiki+ s’arrête à votre progression. Vous pouvez aussi choisir d’afficher tous les faits.' },
        {
          title: 'Préparer une proposition',
          body: 'Sur son propre ordinateur, le détenteur du texte choisit un agent IA pour relever personnages, lieux, relations et événements chapitre par chapitre. Chaque fait est accompagné de sa position et d’un court extrait. L’ensemble est soumis en une proposition et publié après validation. REZICS ne reçoit pas le texte intégral.',
        },
        { title: 'Au choix de chaque communauté', body: 'Chaque communauté décide si les agents peuvent rédiger des brouillons et si elle accepte les articles générés.' },
      ],
    },
    shared: {
      label: 'Partage',
      headline: 'Des sites distincts, des données partagées.',
      lead: 'Un Wiki+ en chinois traditionnel et le site d’un club de lecture anglophone peuvent partager les mêmes œuvres et personnages. Le premier parle de A Certain Magical Index en chinois, le second utilise le titre A Certain Magical Index. Les deux renvoient à la même identité, tout en choisissant leurs noms, présentations, ordre et sources.',
      more: 'Une Zone peut réunir livres, anime et jeux sur un même univers.',
      alt: 'Deux origamis gris foncé distincts sont posés l’un derrière l’autre sur une bande de papier bleu clair.',
    },
    log: {
      label: 'Révisions',
      headline: 'Chaque révision reste dans l’historique.',
      lead: 'Une révision regroupe routes, navigation, modèles, thème et requêtes dans une même version. Prévisualisez-la et validez-la avant publication. Vous pouvez ensuite restaurer la version précédente ou exporter le site entier.',
      caption: 'Exemple : historique des révisions d’un Wiki+',
      entries: [
        { title: 'Troisième version', body: 'Ajout de la page « Ordre de lecture » et d’un lien de navigation. Prévisualisée, validée, puis publiée.' },
        { title: 'Deuxième version', body: 'Le nouveau modèle est appliqué aux pages de personnages. Restauration de la première version après publication.' },
        { title: 'Première version', body: 'Accueil, œuvres, personnages et chronologie. Publication.' },
      ],
      items: [
        { title: 'Quatre permissions', body: 'Modification du site, publication, gestion de la communauté et contribution au graphe sont des droits distincts. La personne qui modifie la mise en page ne peut pas forcément modifier les données.' },
        { title: 'Deux réglages', body: 'La visibilité publique et l’apparition dans la recherche et les recommandations sont deux réglages distincts.' },
        { title: 'Un seul chemin', body: 'Les personnes modifient le site depuis le web, les agents depuis l’API. Les deux suivent le même processus.' },
      ],
    },
    closing: 'Créez une Zone sur REZICS pour bâtir le site de votre communauté.',
  },
} satisfies MiniSite<ZonesStrings>;
