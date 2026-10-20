import type { Part } from './schema';

/** The fifteen shared parts, in schema order. */
export const parts: Part[] = [
  {
    id: 'identity',
    name: 'Identité',
    gives: 'Une identité par élément, dans toutes les langues et sur tous les sites.',
  },
  {
    id: 'names',
    name: 'Noms multilingues',
    gives: 'Les noms, alias et prononciations coexistent dans chaque langue, sans modifier leur écriture d’origine.',
  },
  {
    id: 'editions',
    name: 'Éditions',
    gives: 'Chaque édition, publication, traduction, plateforme et couverture a sa propre fiche.',
  },
  {
    id: 'credits',
    name: 'Crédits',
    gives: 'Les personnes et organisations sont créditées selon leur rôle, et chaque nom renvoie à sa page.',
  },
  {
    id: 'relations',
    name: 'Relations',
    gives: 'Les adaptations, suites, séries et dépendances sont visibles depuis les deux éléments liés.',
  },
  {
    id: 'facets',
    name: 'Filtres',
    gives: 'Filtrez par champ, parcourez tous les résultats et enregistrez vos critères comme vue.',
  },
  {
    id: 'ratings',
    name: 'Notes',
    gives: 'Précisez ce qui est évalué, puis ajoutez une note et une critique.',
  },
  {
    id: 'discussion',
    name: 'Discussion',
    gives: 'Les discussions sont liées à l’élément, sans avoir à chercher un forum ailleurs.',
  },
  {
    id: 'wiki',
    name: 'Wiki',
    gives: 'Les pages Wiki+ et leurs encadrés reprennent les faits vérifiés du graphe.',
  },
  {
    id: 'lists',
    name: 'Listes',
    gives: 'Créez des listes mêlant différents domaines, ajoutez des notes, triez-les et exportez-les.',
  },
  {
    id: 'progress',
    name: 'Progression',
    gives: 'Statut dans votre Bibliothèque, historique de lecture ou de jeu et prochaine étape.',
  },
  {
    id: 'follow',
    name: 'Suivi',
    gives: 'Suivez un élément, une personne ou une vue pour recevoir ses nouveautés.',
  },
  {
    id: 'offers',
    name: 'Offres',
    gives: 'Quand un article est en vente, consultez sa disponibilité, son prix et le lieu d’achat.',
  },
  {
    id: 'specs',
    name: 'Spécifications',
    gives: 'Les spécifications et preuves de compatibilité sont accompagnées des conditions et de la date du test.',
  },
  {
    id: 'schedule',
    name: 'Calendrier',
    gives: 'Dates de sortie, horaires de diffusion et événements réunis dans un même calendrier.',
  },
];
