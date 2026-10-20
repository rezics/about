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
  name: 'Roadmap',
  pages: [
    {
      slug: '',
      label: 'Übersicht',
      meta: {
        title: 'REZICS-Roadmap: Eine Engine, offene Communities',
        description:
          'REZICS hat eine Engine und öffnet eine Community nach der anderen. Neun Arten gibt es bereits. Jede weitere nutzt dieselben Teile, neue Funktionen werden nur einmal umgesetzt.',
      },
    },
  ],
  strings: {
    hero: {
      headline: 'Eine Engine für alle, eine Community nach der anderen.',
      lede: 'REZICS baut nicht für jeden Bereich ein eigenes System. Eine Engine deckt alle Arten ab, Communities werden einzeln eröffnet und vollständig ausgebaut.',
      alt: 'Ein langes dunkelgraues Blatt rollt sich auf. Darauf liegen sechs kleine farbige Papierstücke.',
    },
    order: {
      label: 'Reihenfolge',
      headline: 'Keine Termine, nur eine Reihenfolge.',
      lead: 'Jeder Schritt baut auf dem vorherigen auf. Die bisherigen Identitäten und Beziehungen werden weiterverwendet.',
      steps: [
        { title: 'Zuerst die Teile', body: 'Alle Arten teilen sich fünfzehn Teile. Jedes wird einmal umgesetzt und je nach Bedarf eingebunden.' },
        {
          title: 'Neun Arten',
          body: 'Bibliothek, Anime, Manga, Spiele, Software, Visual Novels, MCP Hub, Skill Hub und API Hub gibt es auf REZICS, ebenso Rezepte. Das Wiki+ jedes Werks und das Verfolgen über die Bibliothek sind dabei zentral.',
        },
        { title: 'Eine Community nach der anderen', body: 'Danach wird jeweils eine Community eröffnet. Zwei Bedingungen müssen erfüllt sein: Menschen engagieren sich bereits dafür, und sie bringt neue Verbindungen in den Graphen.' },
        {
          title: 'Weitere Arten',
          body: 'Interaktive Romane, Kataloge für Science-Fiction und Fantasy sowie Modelle und Bewertungen kommen nach und nach hinzu. Jede Art wird konfiguriert, ohne eigenen Backend-Code.',
        },
        {
          title: 'Neue Funktionen',
          body: 'Neue Funktionen werden einmal umgesetzt und von allen passenden Arten genutzt. So kommen Orte, Statistiken, Ranglisten, Automatisierung, Challenges, der Import von Daten, Einladungen, Namensverifizierung und kostenpflichtige Mitgliedschaften hinzu.',
        },
      ],
    },
    further: {
      label: 'Weitere Arten',
      headline: 'Es gibt mehr als neun Arten.',
      lead: 'Auch die folgenden Arten nutzen dieselben Teile. Veranstaltungen zu Werken, Schauplätze und Fachbuchhandlungen verwenden zusätzlich die Ortsfunktion.',
      items: [
        { title: 'Science-Fiction und Fantasy', body: 'Jede Geschichte in einer Anthologie ist ein eigenes Werk. Du siehst, welcher Band die gewünschte Übersetzung enthält, und kaufst sie nicht doppelt.' },
        { title: 'Interaktive Romane', body: 'Finde Kurzwerke in einer Sprache, die du lesen kannst. Benötigte Interpreter und Plattformen sind angegeben, mit einem Link zum Spielen.' },
        { title: 'Modelle und Bewertungen', body: 'Jede Bewertung nennt Modellversion, Testbedingungen, Datensatz und Datum. Nutzerrezensionen werden separat angezeigt.' },
        { title: 'Veranstaltungen zu Werken', body: 'Messen, Signierstunden und Veröffentlichungstermine sind mit Werken, Kreativen, Veranstaltungsort und Datum verknüpft. Tickets gibt es auf der Website des Veranstalters.' },
        { title: 'Schauplätze aus Werken', body: 'Öffentliche Schauplätze aus Werken werden passend zu deinem Fortschritt angezeigt. Private Wohnorte werden nicht aufgenommen und deine Bewegungen nicht erfasst.' },
        { title: 'Fachbuchhandlungen', body: 'Buchhandlungen werden von den Händlern bestätigt. Ob eine Ausgabe vorrätig ist, richtet sich ausschließlich nach den Angaben teilnehmender Händler. Fehlen Angaben, wird dies als unbekannt markiert.' },
      ],
    },
    statement: ['Es kommen wenige Teile hinzu,', 'doch jede neue Art nutzt dieselbe Engine.'],
    promises: {
      label: 'Ein Graph',
      headline: 'Was ein gemeinsamer Graph möglich macht.',
      lead: 'Mit mehr Arten gibt es mehr Verbindungen. Diese Dinge funktionieren, weil alle Arten im selben Graphen liegen.',
      items: [
        { title: 'Einer Geschichte folgen', body: 'Von Roman über Manga und Anime bis zum Spiel: Lesereihenfolge und Bezugsquellen stehen in einer gemeinsamen Abfolge.' },
        { title: 'Eine Bibliothek, die den nächsten Schritt kennt', body: 'Gelesene, gesehene und gespielte Werke liegen in derselben Bibliothek. Jede Art behält ihre eigenen Fortschrittseinheiten, Ausgaben und Sprachen.' },
        { title: 'Listen werden zu Plänen', body: 'Listen mit verschiedenen Arten lassen sich sortieren, kommentieren und in einen Kalender oder eine Karte umwandeln.' },
        { title: 'Einer Person folgen', body: 'Wenn du einem Kreativen folgst, siehst du Bücher, Spiele, Werkverzeichnisse und Beiträge unter derselben Identität.' },
        { title: 'Das Erlebte vor Ort entdecken', body: 'Du erfährst, wenn es zu einem Werk, dem du folgst, eine Messe, Signierstunde oder einen öffentlichen Schauplatz gibt.' },
      ],
    },
    constant: {
      label: 'Was gleich bleibt',
      headline: 'Was sich nicht ändert.',
      items: [
        { title: 'Eine Engine', body: 'Für jeden Bereich gibt es keine eigene Website und für jede Sprache keine eigene Datenbank.' },
        { title: 'Keine Seitenflut', body: 'Seiten werden nicht mit Werbung gefüllt und nicht in großer Zahl für Suchrankings oder KI-Zitate erzeugt.' },
        { title: 'Einnahmen der Kreativen', body: 'Einnahmen, die Kreativen zustehen, werden nicht anderweitig verwendet.' },
        { title: 'Lizenzen der Beitragenden', body: 'Daten werden nicht über die von Beitragenden erteilte Lizenz hinaus genutzt.' },
        { title: 'Orte und Veranstaltungen', body: 'Aufgenommen werden nur solche, die mit Werken oder Kreativen verbunden sind.' },
      ],
    },
    closing: 'Wenn eine neue Art hinzukommt, bleiben dein Konto und deine Daten an ihrem Platz.',
  },
} satisfies MiniSite<RoadmapStrings>;
