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
  name: 'Module',
  next: 'universal-index',
  pages: [
    {
      slug: '',
      label: 'Übersicht',
      meta: {
        title: 'REZICS-Module: 15 Komponenten, 5 Module',
        description:
          'Von der Bibliothek über Anime und Spiele bis zum MCP Hub: Alle neun Arten bestehen aus denselben 15 Komponenten. Wähle eine Art und sieh dir ihre acht Komponenten und die fünf Module an.',
      },
    },
  ],
  strings: {
    hero: {
      headline: 'Neun Arten, dieselben Komponenten.',
      lede: 'Bücher, Anime, Spiele, Software und MCP-Server: Jede Art besteht aus acht der 15 gemeinsamen Komponenten.',
      alt: 'Fünf graue Papierlagen bilden eine Treppe. Auf der obersten liegen fünf kleine farbige Karten.',
    },
    picker: {
      label: 'Neun Arten',
      headline: 'Wähle eine Art und sieh dir ihre acht Komponenten an.',
      lead: 'Die Komponenten haben überall dieselben Namen, erfüllen aber je nach Art andere Aufgaben. Bei Büchern sind Ausgaben Übersetzungen und Sammelbände, bei Spielen Plattformen und Regionen.',
      legend: 'Art auswählen',
      listTitle: 'Acht Komponenten für {kind}',
      link: 'Zu {kind}',
      note: 'Jede Art nutzt die gemeinsamen Komponenten nach Bedarf. Hier stehen die acht, die sie am besten beschreiben.',
    },
    statement: ['Jede Komponente wird einmal gebaut,', 'für andere Arten wird sie nur anders angeordnet.'],
    parts: {
      label: '15 Komponenten',
      headline: '15 Komponenten, jede mit einer Aufgabe.',
      lead: 'Dieselbe Komponente erfüllt je nach Art eine andere Aufgabe. Das vollständige Verzeichnis erklärt jede anhand eines Beispiels.',
      toggle: 'Komponenten und Beispiele ansehen',
      example: 'Beispiel',
      examples: {
        identity: 'Dieselbe Person schreibt einen Roman und entwickelt ein Spiel. Die Angaben zu den Mitwirkenden führen in beiden Werken zu derselben Person.',
        names: 'Der japanische Originaltitel, die chinesische Übersetzung und die Romanisierung eines Visual Novels stehen nebeneinander. Die Suche findet den Eintrag unter jedem Namen.',
        editions: 'Eine dreibändige Sammelausgabe wird als eine Veröffentlichung erfasst. Die drei Bände bleiben eigenständige Werke.',
        credits: 'Synchronsprecher, Figuren und Werk stehen in einem Datensatz. Sie müssen nicht nachträglich zusammengetragen werden.',
        relations: 'Auf der Anime-Seite steht „Adaptiert nach“. Auf der Seite des Originals erscheint „Adaptionen“. Beide Zeilen stammen aus demselben Datensatz.',
        facets: 'Die Ansicht „Anime mit weiblicher Hauptfigur, adaptiert nach einem Roman“ lässt sich speichern, benennen und verfolgen.',
        ratings: 'Bei demselben Hörbuch lassen sich Geschichte, Übersetzung und Lesung getrennt bewerten.',
        discussion: 'Diskussionen sind an den Lesestand gebunden. Wer noch nicht so weit gelesen hat, sieht das Ende nicht.',
        wiki: 'Der Infokasten auf einer Personenseite liest Fakten aus dem Graphen. Eine Korrektur erscheint auf jeder Seite, die diese Angaben nutzt.',
        lists: 'Eine Liste für den Einstieg führt Romane, Manga und Anime in einer festen Reihenfolge auf. Jeder Eintrag nennt einen Grund.',
        progress: 'Nach den ersten zehn Bänden der japanischen Ausgabe setzt du beim Wechsel zur chinesischen Ausgabe ab Band elf fort.',
        follow: 'Wenn du einer gespeicherten Ansicht folgst, erhältst du eine Benachrichtigung, sobald neue passende Einträge hinzukommen.',
        offers: 'Fehlt eine Angabe zur Verfügbarkeit, wird sie als unbekannt markiert und nicht als verfügbar angezeigt.',
        specs: 'Ein Kompatibilitätseintrag nennt Client, Version und Beobachtungsdatum.',
        schedule: 'Ankündigung, Planung, Bestätigung und Verschiebung werden als vier getrennte Status erfasst.',
      },
    },
    modules: {
      label: 'Fünf Module',
      headline: 'Die Komponenten gehören je nach Aufgabe zu fünf Modulen.',
      lead: 'Jedes Modul beantwortet eine Frage und nutzt dafür bestimmte Komponenten. Vertrauen ist die Ausnahme: Es betrifft alle Komponenten und regelt Quellen, Rechte und Datenschutz.',
      roles: {
        'universal-index': 'Was ist es?',
        community: 'Wie gehen Menschen damit um?',
        zones: 'Wie wird daraus eine Website?',
        create: 'Wie wird es erstellt und veröffentlicht?',
        trust: 'Warum ist es vertrauenswürdig?',
      },
    },
    config: {
      label: 'Eine neue Art',
      headline: 'Eine neue Art braucht Konfiguration.',
      lead: 'Für eine neue Art brauchst du kein eigenes Backend. Die Komponenten sind schon vorhanden. Es braucht fünf Konfigurationen.',
      items: [
        { title: 'Begriffe', body: 'Welche Typen und Eigenschaften diese Art hat, möglichst mit vorhandenen Begriffen.' },
        { title: 'Zuordnung', body: 'Welchem Attribut im Graphen jedes Feld externer Daten entspricht.' },
        { title: 'Startdaten', body: 'Die ersten Einträge und ihre Verknüpfungen.' },
        { title: 'Gespeicherte Ansichten', body: 'Häufige Filter werden zu Indizes und Tabs.' },
        { title: 'Zone', body: 'Eine Website, die diese Seiten zum Zuhause dieser Art macht.' },
      ],
      note: 'Ein neues Verhalten wird einmal entwickelt und als Komponente allen passenden Arten zur Verfügung gestellt.',
    },
    closing: 'Beginne mit der Art, die dir wichtig ist. Die anderen acht sind mit demselben Konto verbunden.',
  },
} satisfies MiniSite<EngineStrings>;
