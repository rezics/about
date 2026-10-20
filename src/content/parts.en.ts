import type { Part } from './schema';

/** The fifteen shared parts, in schema order. */
export const parts: Part[] = [
  {
    id: 'identity',
    name: 'Identity',
    gives: 'One identity points to the same thing in every language and on every site.',
  },
  {
    id: 'names',
    name: 'Names in many languages',
    gives: 'Names, aliases, and pronunciations in every language coexist, with original spellings preserved.',
  },
  {
    id: 'editions',
    name: 'Editions',
    gives: 'Editions, releases, translations, platforms, and coverage each have their own records.',
  },
  {
    id: 'credits',
    name: 'Credits',
    gives: 'People and organizations are listed by role, with each name linked to its portfolio.',
  },
  {
    id: 'relations',
    name: 'Relations',
    gives: 'Adaptations, sequels, series, and dependencies are visible from either end.',
  },
  {
    id: 'facets',
    name: 'Filters',
    gives: 'Filter by available fields, browse to the last result, and save criteria as a view.',
  },
  {
    id: 'ratings',
    name: 'Ratings',
    gives: 'State what is being rated, then show the score and review.',
  },
  {
    id: 'discussion',
    name: 'Discussion',
    gives: 'Discussions attach directly to the thing, without a separate forum.',
  },
  {
    id: 'wiki',
    name: 'Wiki',
    gives: 'Wiki+ pages and infoboxes use facts reviewed on the graph.',
  },
  {
    id: 'lists',
    name: 'Lists',
    gives: 'Lists can include any kind, and can be ordered, annotated, and exported.',
  },
  {
    id: 'progress',
    name: 'Progress',
    gives: 'Library status, every reading or play session, and what to read or play next.',
  },
  {
    id: 'follow',
    name: 'Follow',
    gives: 'Follow a thing, person, or view and receive new activity.',
  },
  {
    id: 'offers',
    name: 'Offers',
    gives: 'When something is for sale, see its availability, price, and where to buy it.',
  },
  {
    id: 'specs',
    name: 'Specifications',
    gives: 'Measured specifications and compatibility evidence include test conditions and dates.',
  },
  {
    id: 'schedule',
    name: 'Schedule',
    gives: 'Release dates, air times, and events appear on one schedule.',
  },
];
