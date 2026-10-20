import type { Part } from './schema';

/** The fifteen shared parts, in schema order. */
export const parts: Part[] = [
  {
    id: 'identity',
    name: 'Identität',
    gives: 'Eine Identität verweist unabhängig von Sprache und Website immer auf dasselbe Werk.',
  },
  {
    id: 'names',
    name: 'Mehrsprachige Namen',
    gives: 'Namen, alternative Namen und Aussprache stehen für jede Sprache nebeneinander. Die ursprüngliche Schreibweise bleibt unverändert.',
  },
  {
    id: 'editions',
    name: 'Ausgaben',
    gives: 'Ausgaben, Veröffentlichungen, Übersetzungen, Plattformen und Umfang werden jeweils separat erfasst.',
  },
  {
    id: 'credits',
    name: 'Mitwirkende',
    gives: 'Personen und Organisationen werden mit ihrer Rolle aufgeführt. Jeder Name verweist auf ein eigenes Werkverzeichnis.',
  },
  {
    id: 'relations',
    name: 'Beziehungen',
    gives: 'Adaptionen, Fortsetzungen, Reihen und Abhängigkeiten sind von beiden Seiten sichtbar.',
  },
  {
    id: 'facets',
    name: 'Filter',
    gives: 'Filtere nach den verfügbaren Feldern und blättere bis zum letzten Eintrag. Bedingungen lassen sich als Ansicht speichern.',
  },
  {
    id: 'ratings',
    name: 'Bewertungen',
    gives: 'Zuerst wird genannt, was bewertet wird. Danach folgen Bewertung und Rezension.',
  },
  {
    id: 'discussion',
    name: 'Diskussion',
    gives: 'Diskussionen gehören direkt zum Werk. Ein separates Forum ist nicht nötig.',
  },
  {
    id: 'wiki',
    name: 'Wiki+',
    gives: 'Wiki+-Seiten und Infoboxen zeigen geprüfte Fakten aus dem Graphen.',
  },
  {
    id: 'lists',
    name: 'Listen',
    gives: 'Listen können Werke verschiedener Arten enthalten, sortiert und kommentiert sowie exportiert werden.',
  },
  {
    id: 'progress',
    name: 'Fortschritt',
    gives: 'Bibliotheksstatus, jeder Lese- oder Spieldurchgang und der nächste Titel.',
  },
  {
    id: 'follow',
    name: 'Folgen',
    gives: 'Folge einem Werk, einer Person oder einer Ansicht und erhalte Neuigkeiten dazu.',
  },
  {
    id: 'offers',
    name: 'Angebote',
    gives: 'Wenn etwas zum Verkauf steht, werden Verfügbarkeit, Preis und Bezugsquelle aufgeführt.',
  },
  {
    id: 'specs',
    name: 'Spezifikationen',
    gives: 'Gemessene Spezifikationen und Kompatibilitätsnachweise mit Testbedingungen und Datum.',
  },
  {
    id: 'schedule',
    name: 'Zeitplan',
    gives: 'Veröffentlichungstermine, Sendezeiten und Veranstaltungen in einem gemeinsamen Zeitplan.',
  },
];
