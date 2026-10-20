// 通用索引 (/engine/universal-index/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The page follows one work, 《魔法禁書目錄》, as a plain-text example of how REZICS records a work
// (.temp/sites/EXAMPLE-WORK.md: no cover or likeness, no publishers or studios, no counts).
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'universal-index')!;

export interface Item {
  title: string;
  body: string;
}

export interface IndexStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  names: {
    label: string;
    headline: string;
    lead: string;
    /** `lang` is a BCP 47 tag; the Japanese title is set in a Japanese face (Noto Sans TC lacks 録). */
    names: { name: string; lang: string; label: string }[];
    caption: string;
  };
  people: { label: string; headline: string; lead: string; rows: Item[]; characters: string };
  layers: { label: string; headline: string; lead: string; alt: string; items: Item[]; aside: string };
  relations: {
    label: string;
    headline: string;
    lead: string;
    /** Related works, with each sequel's source made explicit; `kind` colours its tile. */
    items: { id: string; rel: string; name: string; line: string; kind: 'books' | 'manga' | 'anime' | 'visual-novels' }[];
    note: string;
  };
  values: { label: string; headline: string; lead: string; items: Item[] };
  merge: { label: string; headline: string; lead: string; items: Item[] };
  closing: string;
}

export default {
  id: 'universal-index',
  base: '/engine/universal-index/',
  name: 'Index universel',
  theme: { module: 'universal-index' },
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Index universel : une identité par élément',
        description:
          'Avec A Certain Magical Index comme exemple, découvrez comment REZICS donne une identité unique à une œuvre : noms dans chaque langue, crédits, œuvres et éditions, suites et adaptations, filtres et vues, fusions et séparations.',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: 'Modules',
      headline: 'Une œuvre, une identité.',
      lede: 'Prenons A Certain Magical Index : son titre japonais d’origine et ses titres chinois et anglais renvoient à la même œuvre. Le nom affiché en premier dépend de la langue que vous lisez.',
      alt: 'Sur une feuille gris foncé, des papiers gris et colorés de même taille forment un quadrillage régulier. L’un d’eux a un coin relevé.',
    },
    names: {
      label: 'Noms',
      headline: 'Plusieurs noms, une seule identité.',
      lead: 'Chaque nom indique sa langue et son rôle : titre d’origine, traduction, alias ou prononciation. La recherche reconnaît chacun d’eux et mène à la même œuvre.',
      names: [
        { name: 'A Certain Magical Index', lang: 'zh-Hant', label: 'Titre officiel' },
        { name: 'とある魔術の禁書目録', lang: 'ja', label: 'Titre original japonais' },
        { name: 'A Certain Magical Index', lang: 'en', label: 'Titre anglais' },
      ],
      caption: 'Exemple : comment REZICS répertorie A Certain Magical Index.',
    },
    people: {
      label: 'Crédits',
      headline: 'Une identité par personne, un rôle pour chaque crédit.',
      lead: 'Kazuma Kamachi est crédité comme auteur du roman et comme créateur de l’œuvre adaptée en manga, anime et jeu. Chaque lien mène à la même page. Les crédits indiquent la personne ou l’organisation, son rôle et sa contribution. Quand les sources divergent, chaque version est présentée avec sa source.',
      rows: [
        { title: 'Kazuma Kamachi', body: 'Auteur du roman ; créateur de l’œuvre adaptée en manga, anime et jeu.' },
        { title: 'Kiyotaka Haimura', body: 'Illustrations du roman.' },
        { title: 'Chūya Kogino', body: 'Dessin du manga.' },
      ],
      characters: 'Il en va de même pour les personnages. Un même personnage garde son identité dans le roman, le manga et l’anime ; chaque œuvre indique ses apparitions.',
    },
    layers: {
      label: 'Trois niveaux',
      headline: 'Œuvre, texte, édition : trois niveaux distincts.',
      lead: 'L’œuvre est l’histoire elle-même. Une histoire peut avoir plusieurs textes : l’original japonais, une traduction chinoise ou anglaise. Chaque publication réelle a sa propre fiche d’édition.',
      alt: 'Trois feuilles gris foncé, gris chaud et vert se chevauchent. Le coin de la feuille gris chaud est légèrement relevé.',
      items: [
        { title: 'Œuvre', body: 'L’histoire elle-même. Critiques, suivi et relations sont rattachés à ce niveau.' },
        { title: 'Texte', body: 'Le texte d’origine et ses traductions. Chaque traduction est un texte de la même œuvre, avec son propre traducteur et ses propres droits.' },
        { title: 'Édition', body: 'Broché, livre numérique ou omnibus : chaque publication a sa fiche, limitée au contenu paru à cette date.' },
      ],
      aside: 'Une correction ou un nouveau tirage reste la même œuvre. Une version dont l’intrigue a été réécrite devient une œuvre distincte, reliée par une relation de réécriture.',
    },
    relations: {
      label: 'Relations',
      headline: 'Une relation, deux points de vue.',
      lead: 'La série d’origine, New Testament et Genesis Testament ont chacun leur fiche et sont liés par une relation de suite. La fiche de la série d’origine indique « suite » ; celle de New Testament indique « précédent ». Les deux désignent la même relation. Manga, anime et œuvres dérivées renvoient aussi à leur source.',
      items: [
        { id: 'shinyaku', rel: 'Suite de la série d’origine', name: 'New Testament', line: 'Deuxième série, de 2011 à 2019', kind: 'books' },
        { id: 'souyaku', rel: 'Suite de New Testament', name: 'Genesis Testament', line: 'Troisième série, publiée depuis 2020', kind: 'books' },
        { id: 'manga', rel: 'Adaptation', name: 'Manga', line: 'Dessiné par Chūya Kogino, publié en série depuis 2007', kind: 'manga' },
        { id: 'anime', rel: 'Adaptation', name: 'Anime', line: 'Trois saisons (2008, 2010 et 2018) et un film (2013)', kind: 'anime' },
        { id: 'railgun', rel: 'Œuvre dérivée', name: 'A Certain Scientific Railgun', line: 'Comme A Certain Scientific Accelerator, une série dérivée qui partage des personnages avec la série d’origine', kind: 'manga' },
        { id: 'vn', rel: 'Adaptation', name: 'Roman visuel', line: 'Publié en 2013 et répertorié dans le catalogue des romans visuels', kind: 'visual-novels' },
      ],
      note: 'Chaque relation a un nom, une direction et une source. Deux noms similaires ne constituent pas une preuve ; sans preuve, le lien n’est pas créé.',
    },
    values: {
      label: 'Filtres',
      headline: 'Chaque valeur a sa propre page.',
      lead: 'Personnes, genres, langues et sources d’adaptation ont chacun une page. Combinez plusieurs valeurs pour filtrer.',
      items: [
        { title: 'Rattacher au même rôle', body: 'Le rôle de « personnage principal » est rattaché à une apparition précise. Il n’est pas attribué à une autre œuvre où un autre personnage tient ce rôle.' },
        { title: 'Enregistrer une vue', body: 'Enregistrez et nommez vos critères pour en faire une vue. Vous pouvez la suivre, l’épingler sur l’accueil comme onglet ou l’utiliser comme index d’une Zone.' },
        { title: 'Parcourir tous les résultats', body: 'Chaque liste est consultable jusqu’au dernier résultat. L’interface précise si le nombre affiché est exact ou minimal.' },
      ],
    },
    merge: {
      label: 'Fusions et séparations',
      headline: 'Une fusion peut être annulée ; une séparation garde ses traces.',
      lead: 'Une personne a créé un doublon de la même œuvre sous son titre anglais. Avant toute fusion, REZICS liste toutes les données concernées et demande une décision pour chaque conflit.',
      items: [
        {
          title: 'Rechercher avant de créer',
          body: 'Avant de créer un élément, recherchez-le par son titre d’origine, ses alias, sa prononciation, son auteur et ses identifiants. S’il existe déjà, ajoutez un alias ou une édition. Un titre ou un ISBN identique est un indice, pas une preuve.',
        },
        {
          title: 'Fusion',
          body: 'Notes, listes, données de Bibliothèque et faits Wiki sont rattachés à la fiche conservée. Deux notes d’une même personne ne deviennent pas deux votes, et deux exemplaires ne sont pas fusionnés. Les anciennes adresses restent accessibles et renvoient à la fiche conservée.',
        },
        { title: 'Annulation', body: 'L’annulation est une nouvelle décision, pas un retour en arrière. Les modifications faites après la fusion sont réattribuées une à une. Les cas incertains sont soumis à vérification.' },
        { title: 'Séparation', body: 'Quand deux livres homonymes ont été réunis par erreur, leur séparation laisse sur l’ancienne fiche la liste des nouvelles fiches et de leurs destinations.' },
        {
          title: 'Une décision humaine',
          body: 'Tout le monde, y compris un agent IA, peut proposer une fusion. Un réviseur prend la décision. Une fusion déjà utilisée ou contestée demande l’accord de deux personnes indépendantes ; un robot et son opérateur comptent comme une seule personne.',
        },
      ],
    },
    closing: 'Retrouvez une œuvre que vous connaissez sur REZICS et découvrez ses noms.',
  },
} satisfies MiniSite<IndexStrings>;
