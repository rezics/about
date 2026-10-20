// 路線圖 (/roadmap/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). A sequence
// without dates or status labels: one engine across every kind, one community at a time.
import type { MiniSite } from '../schema';
import { site as shared } from '../site';

export interface Item {
  title: string;
  body: string;
}

export interface RoadmapStrings {
  hero: { headline: string; lede: string; alt: string };
  order: { label: string; headline: string; lead: string; steps: Item[] };
  further: { label: string; headline: string; lead: string; items: Item[] };
  statement: [string, string];
  promises: { label: string; headline: string; lead: string; items: Item[] };
  constant: { label: string; headline: string; items: Item[] };
  closing: string;
}

export default {
  id: 'roadmap',
  base: '/roadmap/',
  name: 'Feuille de route',
  pages: [
    {
      slug: '',
      label: 'Vue d’ensemble',
      meta: {
        title: 'Feuille de route REZICS : un moteur commun, des communautés ouvertes une à une',
        description:
          'REZICS repose sur un seul moteur et ouvre ses communautés l’une après l’autre. Les neuf domaines sont déjà sur REZICS. Chaque nouveau domaine réutilise les mêmes fonctions, et chaque nouvelle capacité n’est créée qu’une fois.',
      },
    },
  ],
  strings: {
    hero: {
      headline: 'Un moteur commun, des communautés ouvertes une à une.',
      lede: 'REZICS ne crée pas un système distinct pour chaque domaine. Un seul moteur les relie ; les communautés ouvrent une à une et développent chacune leur espace.',
      alt: 'Une longue bande de papier gris foncé se déroule, avec six petites feuilles colorées posées dessus.',
    },
    order: {
      label: 'Ordre',
      headline: 'Pas de dates, seulement un ordre.',
      lead: 'Chaque étape s’appuie sur la précédente et reprend les identités et les relations déjà établies.',
      steps: [
        { title: 'Les fonctions d’abord', body: 'Les quinze fonctions sont partagées et créées une seule fois. Chaque domaine utilise celles dont il a besoin.' },
        {
          title: 'Neuf domaines',
          body: 'La Bibliothèque, l’anime, le manga, les jeux, les logiciels, les romans visuels, MCP Hub, Skill Hub, API Hub et les recettes sont sur REZICS. Le Wiki+ de chaque œuvre et le suivi dans votre Bibliothèque en sont les éléments centraux.',
        },
        { title: 'Une communauté à la fois', body: 'Chaque nouvelle ouverture concerne une communauté. Deux conditions : des membres s’y investissent déjà et elle ajoute de nouveaux liens au graphe.' },
        {
          title: 'D’autres domaines',
          body: 'Fictions interactives, catalogues de science-fiction et de fantasy, modèles et évaluations s’ajoutent un à un. Chaque ajout demande une configuration, sans code dédié dans le système.',
        },
        {
          title: 'De nouvelles capacités',
          body: 'Lorsqu’un nouveau comportement est nécessaire, il est créé une fois et peut servir aux domaines concernés. C’est ainsi que s’ajoutent les lieux, statistiques, classements, automatisations, défis, imports de données, invitations, vérifications de nom et adhésions payantes.',
        },
      ],
    },
    further: {
      label: 'D’autres domaines',
      headline: 'D’autres domaines au-delà des neuf.',
      lead: 'Les domaines ci-dessous utilisent les mêmes fonctions. Les événements, lieux de visite et librairies spécialisées ajoutent aussi la gestion des lieux.',
      items: [
        { title: 'Science-fiction et fantasy', body: 'Chaque nouvelle d’une anthologie est une œuvre distincte. Vous pouvez trouver le recueil qui contient la traduction recherchée sans acheter deux fois la même histoire.' },
        { title: 'Fictions interactives', body: 'Trouvez des œuvres courtes dans une langue que vous lisez, avec les interpréteurs et plateformes requis, et un lien pour y jouer.' },
        { title: 'Modèles et évaluations', body: 'Chaque note indique la version du modèle, les conditions d’évaluation, le jeu de données et la date. Les avis des utilisateurs sont affichés séparément.' },
        { title: 'Événements autour des œuvres', body: 'Festivals, séances de dédicaces et lancements sont liés aux œuvres, aux créateurs, au lieu et à la date. La billetterie reste sur le site de l’organisateur.' },
        { title: 'Lieux de visite', body: 'Les lieux publics associés aux œuvres s’affichent selon votre progression pour éviter les révélations. Les domiciles privés ne sont pas répertoriés et vos déplacements ne sont pas suivis.' },
        { title: 'Librairies spécialisées', body: 'Les librairies sont vérifiées par leurs responsables. La disponibilité d’une édition repose uniquement sur les données des librairies partenaires ; sans données, elle est indiquée comme inconnue.' },
      ],
    },
    statement: ['Les fonctions changent peu, les domaines se multiplient ;', 'chacun s’appuie sur le même moteur.'],
    promises: {
      label: 'Un graphe',
      headline: 'Ce qu’un graphe partagé permet.',
      lead: 'Plus les domaines sont nombreux, plus les liens le sont aussi. Voici ce que permet un graphe commun à tous.',
      items: [
        { title: 'Suivre une histoire jusqu’au bout', body: 'Romans, manga, anime et jeux : l’ordre de lecture ou de visionnage et les endroits où les trouver sont réunis.' },
        { title: 'Votre prochaine lecture dans la Bibliothèque', body: 'Lectures, anime et jeux se retrouvent dans la même Bibliothèque. Chaque domaine garde ses unités de progression, éditions et langues.' },
        { title: 'Des listes qui deviennent des projets', body: 'Ordonnez les listes de plusieurs domaines, ajoutez des notes et transformez-les en calendrier ou en carte.' },
        { title: 'Suivre une personne', body: 'En suivant un créateur, vous retrouvez sous une même identité ses livres, jeux, crédits et contributions.' },
        { title: 'Dans le monde réel', body: 'Vous êtes informé des festivals, séances de dédicaces et lieux de visite associés aux œuvres que vous suivez.' },
      ],
    },
    constant: {
      label: 'Ce qui ne change pas',
      headline: 'Les principes qui restent.',
      items: [
        { title: 'Un seul moteur', body: 'Aucun site séparé par domaine ni base de données distincte par langue.' },
        { title: 'Pas de pages en masse', body: 'Pas de pages créées en masse pour afficher des publicités, améliorer le classement dans les moteurs de recherche ou alimenter les réponses de l’IA.' },
        { title: 'Les revenus des créateurs', body: 'Les sommes dues aux créateurs ne servent pas de fonds de roulement.' },
        { title: 'Les licences des contributeurs', body: 'Les données ne sont pas utilisées au-delà des licences accordées par les contributeurs.' },
        { title: 'Lieux et événements', body: 'Seuls ceux qui sont liés aux œuvres et aux créateurs sont répertoriés.' },
      ],
    },
    closing: 'Quand un nouveau domaine s’ajoute, votre compte et vos données restent au même endroit.',
  },
} satisfies MiniSite<RoadmapStrings>;
