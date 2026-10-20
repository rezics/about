// The modules overview (/engine/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The kind picker reads each kind's eight parts and notes from kinds.ts. Shared module-ring
// labels live in modules.ts.
// Placeholders in braces are filled at build time.
import type { MiniSite, ModuleId, PartId } from '../schema';
import { site as shared } from '../site';

export interface EngineStrings {
  hero: { headline: string; lede: string; alt: string };
  picker: {
    label: string;
    headline: string;
    lead: string;
    legend: string;
    /** `{kind}` */
    listTitle: string;
    /** `{kind}` */
    link: string;
    note: string;
  };
  statement: [string, string];
  parts: { label: string; headline: string; lead: string; toggle: string; example: string; examples: Record<PartId, string> };
  modules: { label: string; headline: string; lead: string; roles: Record<ModuleId, string> };
  config: { label: string; headline: string; lead: string; items: { title: string; body: string }[]; note: string };
  closing: string;
}

export default {
  id: 'engine',
  base: '/engine/',
  name: 'Modules',
  next: 'universal-index',
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Modules REZICS : quinze fonctions, cinq modules',
        description:
          'De la Bibliothèque, de l’anime et des jeux à MCP Hub, les neuf domaines utilisent les mêmes quinze fonctions. Choisissez-en un pour voir ses huit fonctions et les cinq modules dont elles viennent.',
      },
    },
  ],
  strings: {
    hero: {
      headline: 'Neuf domaines, les mêmes fonctions.',
      lede: 'Livres, anime, jeux, logiciels et serveurs MCP : chaque domaine choisit huit des quinze fonctions partagées.',
      alt: 'Cinq feuilles grises de nuances différentes forment des marches, avec cinq petits papiers colorés sur celle du dessus.',
    },
    picker: {
      label: 'Neuf domaines',
      headline: 'Choisissez un domaine pour voir ses huit fonctions.',
      lead: 'Les fonctions gardent le même nom, mais leur rôle varie selon le domaine. Dans la Bibliothèque, les éditions comprennent traductions et omnibus ; dans les jeux, plateformes et régions.',
      legend: 'Choisir un domaine',
      listTitle: 'Les huit fonctions de {kind}',
      link: 'Voir {kind}',
      note: 'Chaque domaine utilise les fonctions dont il a besoin. Voici les huit qui le caractérisent le mieux.',
    },
    statement: ['Une fonction est créée une fois,', 'seule sa combinaison change selon le domaine.'],
    parts: {
      label: 'Quinze fonctions',
      headline: 'Quinze fonctions, un rôle chacune.',
      lead: 'Une même fonction remplit des rôles différents selon le domaine. Le catalogue complet indique leur usage et donne un exemple pour chaque cas.',
      toggle: 'Voir le catalogue des fonctions et des exemples',
      example: 'Exemple',
      examples: {
        identity: 'Un même auteur écrit des romans et crée des jeux. Les crédits renvoient à la même personne dans les deux cas.',
        names: 'Le titre original japonais d’un roman visuel, sa traduction chinoise et sa romanisation figurent côte à côte. Chacun permet de le trouver.',
        editions: 'Une intégrale en trois tomes est enregistrée comme une seule publication. Chaque tome reste une œuvre.',
        credits: 'Les interprètes, les personnages et les œuvres sont associés dans une même fiche, sans rapprochement a posteriori.',
        relations: 'La page de l’anime indique « adapté de » ; celle de l’œuvre d’origine indique « adaptations ». Les deux mentions viennent de la même fiche.',
        facets: 'Un anime adapté d’un roman, avec une héroïne, peut être enregistré comme une vue, nommée, puis suivie.',
        ratings: 'Un même livre audio peut recevoir une note distincte pour le récit, la traduction et la narration.',
        discussion: 'Votre position de lecture détermine la discussion. Les personnes qui ne sont pas encore arrivées à cette partie ne voient pas la fin.',
        wiki: 'L’infobox d’une page de personnage reprend les faits du graphe. Une correction s’applique à toutes les pages qui les utilisent.',
        lists: 'Une liste de découverte propose dans l’ordre des romans, des mangas et des anime, avec une phrase pour justifier chaque choix.',
        progress: 'Après avoir lu les dix premiers tomes en japonais, vous passez à l’édition chinoise et reprenez au tome onze.',
        follow: 'Suivez une vue enregistrée et recevez une notification dès qu’un nouvel élément correspond.',
        offers: 'Sans information, la disponibilité reste inconnue au lieu d’être indiquée comme disponible.',
        specs: 'Une fiche de compatibilité indique le client, sa version et la date du constat.',
        schedule: 'Les statuts « annoncé », « prévu », « confirmé » et « reporté » sont consignés séparément.',
      },
    },
    modules: {
      label: 'Cinq modules',
      headline: 'Les fonctions sont réparties entre cinq modules.',
      lead: 'Chaque module répond à une question et utilise plusieurs fonctions. Confiance fait exception : elle traverse toutes les fonctions et couvre les sources, les droits et la vie privée.',
      roles: {
        'universal-index': 'De quoi s’agit-il ?',
        community: 'Comment les personnes interagissent-elles avec ?',
        zones: 'Comment en faire un site ?',
        create: 'Comment la créer et la diffuser ?',
        trust: 'Pourquoi lui faire confiance ?',
      },
    },
    config: {
      label: 'Un nouveau domaine',
      headline: 'Ajouter un domaine est une question de configuration.',
      lead: 'L’ajout d’un domaine ne demande pas un nouveau système. Les fonctions existent déjà ; il suffit de préparer cinq éléments de configuration.',
      items: [
        { title: 'Vocabulaire', body: 'Les types et les attributs de ce domaine, en réutilisant autant que possible le vocabulaire existant.' },
        { title: 'Correspondances', body: 'L’attribut du graphe auquel correspond chaque champ d’une source externe.' },
        { title: 'Données initiales', body: 'Les premiers éléments et leurs relations.' },
        { title: 'Vues enregistrées', body: 'Des filtres courants présentés comme index et pages.' },
        { title: 'Zone', body: 'Un site qui organise ces pages pour ce domaine.' },
      ],
      note: 'Une nouvelle fonction est créée une fois, puis mise à la disposition de tous les domaines qui en ont besoin.',
    },
    closing: 'Commencez par le domaine qui vous intéresse. Les huit autres sont déjà liés au même compte.',
  },
} satisfies MiniSite<EngineStrings>;
