// The software site (軟體): every visible string of /software/ and its six inner pages, in the
// v3 language (.temp/sites/V3-SPEC.md). Design record and sources: src/sites/software/SITE.md and
// facts.md. All sample data (the program 範例編輯器, 甲／乙／丙系統, version numbers, dates, sizes,
// the hash, package names) is fictional and is labelled 示意 wherever it appears.
import type { Item, KindId, MiniSite } from '../schema';

export type StateId = 'compatible' | 'incompatible' | 'unknown' | 'stale' | 'unavailable';
/** One compatibility observation: a state, and the date of the adopted measurement where there is one. */
export type Cell = readonly [StateId, string?];
/** A section's opening: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}
/** A still-life picture in public/images/sites/software/ (`<name>-<width>.avif|webp`). */
export interface Picture {
  name: string;
  alt: string;
}

export interface SoftwareStrings {
  common: { nextPage: string; nextSite: string; sample: string; go: string };
  pictures: Record<'hero' | 'versions' | 'holes' | 'slit' | 'tabs', Picture>;
  states: Record<StateId, string>;
  channels: { stable: string; beta: string };
  sample: {
    program: string;
    /** Newest first. */
    releases: { version: string; channel: 'stable' | 'beta'; date: string; platforms: string; note?: string }[];
    environments: { name: string; short: string }[];
    /** Rows follow `environments`, columns follow `releases`. */
    cells: Cell[][];
  };
  landing: {
    hero: { label: string; headline: string; lede: string };
    pages: Head & { lines: Record<string, string> };
    compatibility: Head & { link: string };
    statement: { text: string; sub: string };
    program: Head & { items: Item[] };
    neighbours: Head & { link: string; tiles: { kind: KindId; line: string }[] };
    closing: string;
  };
  catalogue: {
    hero: { headline: string; lede: string };
    releases: Head;
    list: { caption: string; columns: [string, string, string, string]; points: Item[] };
    statement: { text: string; sub: string };
    identity: Head & { rows: Item[] };
    browse: Head & { points: Item[] };
    closing: string;
  };
  compatibility: {
    hero: { headline: string; lede: string };
    anatomy: Head & { rows: Item[] };
    states: Head & { body: Record<StateId, string>; caption: string; corner: string };
    conditions: Head & { example: string; candidates: Item[]; result: string };
    statement: { text: string; sub: string; note: string };
    closing: string;
  };
  reviews: {
    hero: { headline: string; lede: string };
    rules: Head & { facts: Item[] };
    anatomy: Head & { points: Item[] };
    statement: { text: string; sub: string };
    picks: Head & { rows: Item[] };
    closing: string;
  };
  updates: {
    hero: { headline: string; lede: string };
    levels: Head & { rows: Item[] };
    targets: Head & { rows: Item[] };
    changelog: Head & { more: string; caption: string; start: string };
    statement: { text: string; sub: string };
    closing: string;
  };
  publishing: {
    hero: { headline: string; lede: string };
    record: Head & { caption: string; fields: Item[] };
    steps: Head & { steps: Item[]; note: string };
    licence: Head & { points: Item[] };
    lock: Head & { points: Item[] };
    statement: { text: string; sub: string; note: string };
    maintenance: Head & { rows: Item[] };
    closing: string;
  };
  connections: {
    hero: { headline: string; lede: string };
    relations: Head & { rows: Item[] };
    kinds: Head & { rows: { kind: KindId; line: string; body: string }[] };
    people: Head;
    statement: { text: string; sub: string };
    closing: string;
  };
}

const site = {
  id: 'software',
  base: '/software/',
  name: 'Software',
  theme: { kind: 'software' },
  next: 'visual-novels',
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'Software: Versionen, Plattformen und Kompatibilitätsnachweise',
        description:
          'Jedes Programm hat auf REZICS einen eigenen Eintrag mit allen Veröffentlichungen für jede Plattform. Kompatibilität beruht auf datierten Tests mit dokumentierter Methode. Lizenzen, Bezugsquellen, Bewertungen und Aktualisierungshinweise gehören zum selben Eintrag.',
      },
    },
    {
      slug: 'catalogue',
      label: 'Verzeichnis und Versionen',
      meta: {
        title: 'Verzeichnis und Versionen: ein Eintrag pro Programm',
        description:
          'Das Softwareverzeichnis von REZICS führt jedes Programm unter einem eigenen Eintrag. Veröffentlichungen jeder Plattform werden einzeln archiviert, Versionen nach den Regeln ihres Ökosystems geordnet und Forks mit einem eigenen Eintrag auf das ursprüngliche Projekt zurückgeführt. Suchergebnisse nennen die genaue oder geschätzte Anzahl.',
      },
    },
    {
      slug: 'compatibility',
      label: 'Kompatibilität',
      meta: {
        title: 'Kompatibilität: datierte Tests',
        description:
          'Kompatibilität auf REZICS beruht auf einzelnen Tests mit Kennzahl, Methode, Bedingungen und Datum. Sie nennen auch die passende Version und Datei. Kompatibel, inkompatibel, unbekannt, veraltet und nicht verfügbar werden getrennt angezeigt. Ohne Test lautet der Status unbekannt.',
      },
    },
    {
      slug: 'reviews',
      label: 'Bewertungen',
      meta: {
        title: 'Bewertungen: Jede gilt für eine Veröffentlichung',
        description:
          'Auf REZICS kann eine Softwarebewertung für eine einzelne Veröffentlichung gelten. Sie nennt die Anzahl, die Verteilung und die Community, in der sie abgegeben wurde. Versionsübergreifende Gesamtwerte werden getrennt berechnet und erläutert. Community-Empfehlungen verweisen auf die Diskussion zur Entscheidung.',
      },
    },
    {
      slug: 'updates',
      label: 'Aktualisierungen verfolgen',
      meta: {
        title: 'Aktualisierungen verfolgen: Veröffentlichungen und Änderungsprotokolle',
        description:
          'Folge auf REZICS einem Programm, einem Entwickler oder einem gespeicherten Filter. Neue Veröffentlichungen und Änderungsprotokolle erhältst du in der gewünschten Häufigkeit. Du kannst sie nur im Posteingang ansehen oder Push-Mitteilungen und E-Mail-Zusammenfassungen einschalten.',
      },
    },
    {
      slug: 'publishing',
      label: 'Veröffentlichung und Lizenz',
      meta: {
        title: 'Veröffentlichung und Lizenz: für Softwareentwickler',
        description:
          'Entwickler pflegen ihre Programmseiten auf REZICS und veröffentlichen Versionen für verschiedene Plattformen. Dazu gehören Dateigröße, Hash, Änderungsprotokoll und Screenshots sowie die genaue Lizenz mit Version und Angaben zum Bezug.',
      },
    },
    {
      slug: 'connections',
      label: 'Verknüpfungen',
      meta: {
        title: 'Verknüpfungen: Abhängigkeiten und Erweiterungen',
        description:
          'Auf REZICS ist ein Programm mit Spielmods verknüpft, die davon abhängen, mit MCP-Servern, die es für KI-Agenten bedienbar machen, mit Skills, die es benötigen, und mit zugehörigen APIs. Jede Verknüpfung nennt Richtung und Quelle und lässt sich von beiden Seiten aufrufen.',
      },
    },
  ],
  strings: {
    common: { nextPage: 'Nächste Seite', nextSite: 'Nächste Website', sample: 'Beispieldaten: Programm, Systeme, Versionen und Daten sind erfunden.', go: 'Öffnen' },
    pictures: {
      hero: { name: 'hero', alt: 'Dunkeltürkise Blätter liegen versetzt wie ein Fächer übereinander. Das oberste ist hellblau.' },
      versions: { name: 'versions', alt: 'Drei dunkel-türkise Papierumschläge liegen nebeneinander, jeweils mit einem graublauen Streifen gebunden.' },
      holes: { name: 'holes', alt: 'In ein dunkel-türkises Blatt sind gleichmäßige runde Löcher gestanzt. Einige Stellen sind geschlossen.' },
      slit: { name: 'slit', alt: 'Ein dunkel-türkises Blatt läuft durch einen Schlitz in graublauem Papier.' },
      tabs: { name: 'tabs', alt: 'Zwei Papierlaschen verbinden ein dunkel-türkises Blatt mit einem senfgelben und einem hellgrünen Blatt.' },
    },
    states: { compatible: 'Kompatibel', incompatible: 'Inkompatibel', unknown: 'Unbekannt', stale: 'Veraltet', unavailable: 'Nicht verfügbar' },
    channels: { stable: 'Stabile Version', beta: 'Beta-Version' },
    sample: {
      program: 'Beispiel-Editor',
      releases: [
        { version: '4.1', channel: 'beta', date: '2026-10-06', platforms: 'A · B · C', note: 'Geteilte Fenster hinzugefügt. Langsames Öffnen großer Dateien behoben.' },
        { version: '4.0', channel: 'stable', date: '2026-08-25', platforms: 'A · B · C', note: 'Arbeitsbereiche hinzugefügt. Ein altes Erweiterungsformat entfernt.' },
        { version: '3.2', channel: 'stable', date: '2026-03-17', platforms: 'A · B · C', note: 'Mobile Version hinzugefügt. Suche beschleunigt.' },
        { version: '3.1', channel: 'stable', date: '2025-11-04', platforms: 'A · B' },
        { version: '3.0', channel: 'stable', date: '2025-06-10', platforms: 'A · B' },
      ],
      environments: [
        { name: 'A-System · 64 Bit', short: 'A 64' },
        { name: 'A-System · 32 Bit', short: 'A 32' },
        { name: 'B-System · 64 Bit', short: 'B 64' },
        { name: 'C-System · Mobil', short: 'C Mobil' },
      ],
      // Columns follow `releases` (4.1, 4.0, 3.2, 3.1, 3.0).
      cells: [
        [['unknown'], ['compatible', '2026-08-29'], ['compatible', '2026-03-20'], ['compatible', '2025-11-09'], ['compatible', '2025-06-14']],
        [['unavailable'], ['unavailable'], ['incompatible', '2026-03-22'], ['compatible', '2025-11-10'], ['stale', '2025-06-15']],
        [['compatible', '2026-10-09'], ['unknown'], ['compatible', '2026-03-20'], ['compatible', '2025-11-12'], ['unknown']],
        [['unknown'], ['compatible', '2026-09-02'], ['stale', '2026-03-25'], ['unavailable'], ['unavailable']],
      ],
    },

    landing: {
      hero: {
        label: 'Software',
        headline: 'Für jede Version zeigen datierte Tests, wo sie läuft.',
        lede: 'REZICS führt jedes Programm unter einem eigenen Eintrag mit allen Veröffentlichungen auf jeder Plattform. Ungetestete Umgebungen sind als unbekannt markiert. Lizenzen, Bezugsquellen, Bewertungen und Diskussionen bleiben mit demselben Eintrag verknüpft.',
      },
      pages: {
        label: 'Sechs Seiten',
        headline: 'Vom Finden eines Programms bis zur eigenen Veröffentlichung.',
        lines: {
          catalogue: 'Ein Eintrag für alle Veröffentlichungen',
          compatibility: 'Datierten Tests zeigen, ob es läuft',
          reviews: 'Neben der Bewertung steht die Version',
          updates: 'Programmen, Entwicklern und Filtern folgen',
          publishing: 'Für Entwickler: Veröffentlichung, Lizenz und Bezug',
          connections: 'Module, MCP-Server, Skills und APIs',
        },
      },
      compatibility: {
        label: 'Kompatibilität',
        headline: 'Kompatibilitätsangaben brauchen einen Test.',
        lead: 'Die von Entwicklern genannten Plattformen sind zunächst Angaben. Ein Test dokumentiert ein Ergebnis mit Methode, Bedingungen, Datum und Umgebung. Auf REZICS beantworten nur Tests die Frage, ob etwas läuft.',
        link: 'So werden Kompatibilitätsnachweise erfasst',
      },
      statement: {
        text: 'Ohne Test lautet der Status unbekannt.',
        sub: 'Er wird weder als kompatibel noch als inkompatibel ausgegeben.',
      },
      program: {
        label: 'Ein Programm',
        headline: 'Was zu einem Eintrag gehört.',
        items: [
          { title: 'Veröffentlichung', body: 'Jede Veröffentlichung jeder Plattform wird einzeln archiviert. Stabile und Beta-Versionen sind getrennt gekennzeichnet.' },
          { title: 'Kompatibilität', body: 'Betriebssystem, Systemversion und Prozessorarchitektur werden für dieselbe Veröffentlichung geprüft.' },
          { title: 'Lizenz', body: 'Die Lizenzversion wird zusammen mit Person und Datum der Angabe erfasst.' },
          { title: 'Bezugsquelle', body: 'Offizielle Downloads, Stores und Paketquellen werden aufgeführt. Externe Links sind als solche gekennzeichnet.' },
          { title: 'Bewertungen', body: 'Bewertungen können für eine einzelne Version gelten. Anzahl und Verteilung stehen dabei.' },
          { title: 'Folgen', body: 'Folge einem Programm oder seinen Maintainer. Neue Versionen und Ankündigungen werden dir angezeigt.' },
        ],
      },
      neighbours: {
        label: 'Verknüpfungen',
        headline: 'Programme stehen selten für sich allein.',
        lead: 'Spielmodule hängen davon ab, MCP-Server machen es für KI-Agenten bedienbar und Skills benötigen es. Jede Verknüpfung nennt Richtung und Quelle und lässt sich von beiden Seiten aufrufen.',
        link: 'Alle Verknüpfungen ansehen',
        tiles: [
          { kind: 'games', line: 'Programme, von denen Mods und Loader abhängen' },
          { kind: 'mcp', line: 'Server, über die Agenten es bedienen' },
          { kind: 'skills', line: 'Skills, die davon abhängen' },
          { kind: 'apis', line: 'APIs, die es bereitstellt oder aufruft' },
        ],
      },
      closing: 'Ein Programm, ein Eintrag, jede Version auffindbar.',
    },

    catalogue: {
      hero: {
        headline: 'Versionsnummern ändern sich, der Eintrag bleibt.',
        lede: 'Ändert ein Programm seinen Namen, wechselt die Paketquelle oder erscheint auf einer neuen Plattform, bleibt es auf REZICS derselbe Eintrag. Jede Veröffentlichung wird gesondert mit ihrem damaligen Inhalt erfasst.',
      },
      releases: {
        label: 'Veröffentlichung',
        headline: 'Jede Veröffentlichung wird einzeln archiviert.',
        lead: 'Ein Eintrag zur Veröffentlichung nennt Versionsnummer, Kanal, Datum, Plattform und die tatsächlich enthaltenen Dateien. Falsche Angaben lassen sich mit Belegen korrigieren. Spätere Korrekturen werden als neuer Eintrag erfasst.',
      },
      list: {
        caption: 'Veröffentlichungen des Beispiel-Editors, neueste zuerst',
        columns: ['Version', 'Kanal', 'Datum', 'Plattform'],
        points: [
          { title: 'Kanal', body: 'Stabile und Beta-Versionen sind getrennt gekennzeichnet. Die neueste Veröffentlichung ist nicht immer die richtige für dich.' },
          { title: 'Reihenfolge der Versionen', body: 'Die Reihenfolge richtet sich nach den Regeln des jeweiligen Ökosystems. Versionsnummern werden nicht als Text verglichen.' },
          { title: 'Plattform', body: 'Veröffentlichungen derselben Version auf verschiedenen Plattformen haben jeweils einen eigenen Eintrag.' },
        ],
      },
      statement: {
        text: 'REZICS zählt keine Downloads',
        sub: 'und verwendet sie nicht zur Sortierung. Jede Liste nennt ihre Sortierung.',
      },
      identity: {
        label: 'Name und Identität',
        headline: 'Gleiche Namen bedeuten nicht dasselbe Programm.',
        rows: [
          { title: 'Mehrsprachige Namen', body: 'Chinesische Namen, Originalnamen und gängige Kurzformen sind erfasst und durchsuchbar.' },
          {
            title: 'Kennungen',
            body: 'Namen, URLs und Kennungen aus Paketquellen sind jeweils mit ihrer Quelle erfasst. Derselbe Text in zwei Paketquellen gilt nicht automatisch als dasselbe Programm.',
          },
          { title: 'Forks', body: 'Abgezweigte Projekte erhalten einen eigenen Eintrag mit eigenen Maintainers und Veröffentlichungen. Die Verknüpfung „Fork von“ führt zum ursprünglichen Projekt.' },
          { title: 'Zusammenführen und trennen', body: 'Doppelte Einträge werden mit Belegen zusammengeführt, alte URLs bleiben gültig. Fehlerhafte Zusammenführungen lassen sich rückgängig machen, ohne Sammlungen oder Bewertungen doppelt zu zählen.' },
        ],
      },
      browse: {
        label: 'Filter',
        headline: 'Alle Filter müssen für dieselbe Veröffentlichung gelten.',
        lead: 'Suchst du eine stabile Version für B-System 64 Bit mit Open-Source-Lizenz, zeigt REZICS nur Programme, deren eine Veröffentlichung alle Bedingungen erfüllt. Anforderungen aus verschiedenen Veröffentlichungen werden nicht zusammengerechnet.',
        points: [
          { title: 'Anzahl', body: 'Ergebnisse nennen die Anzahl. Solange noch gezählt wird, steht dort „mindestens“.' },
          { title: 'Bis zum Ende blättern', body: 'Du kannst bis zum letzten Eintrag blättern. Die Liste endet nicht auf einer festen Seite.' },
          { title: 'Als Ansicht speichern', body: 'Häufige Filter kannst du als Ansicht speichern und ihr folgen.' },
        ],
      },
      closing: 'Versionsnummern ändern sich, die Einträge bleiben auffindbar.',
    },

    compatibility: {
      hero: {
        headline: 'Kompatibilität beruht auf einzelnen Tests.',
        lede: 'Von Entwicklern genannte Plattformen sind Angaben. Tests dokumentieren, was jemand an einem bestimmten Tag in einer bestimmten Umgebung geprüft hat. REZICS erfasst beides getrennt. Nur Tests belegen Kompatibilität.',
      },
      anatomy: {
        label: 'Ein Test',
        headline: 'Was ein Test festhält.',
        lead: 'Diese Angaben machen Tests wiederholbar und zeigen, worauf das Ergebnis zutrifft.',
        rows: [
          { title: 'Messgröße', body: 'Was geprüft wird: ob das Programm startet, eine Aufgabe abschließt oder einen Messwert erreicht. Bei Messwerten wird auch die Einheit festgehalten.' },
          { title: 'Methode', body: 'Die Schritte sind so beschrieben, dass andere den Test wiederholen können.' },
          { title: 'Bedingungen', body: 'Betriebssystemversion, Prozessorarchitektur und relevante Einstellungen gehören zu einem Testergebnis. Ändern sich die Bedingungen, ist es ein anderer Test.' },
          { title: 'Datei', body: 'Ein Test nennt die Version und Datei, für die er gilt, sowie einen geprüften Hash. Der Hash bestätigt nur diese Bytes und keine anderen Dateien.' },
          { title: 'Datum und eingereichte Person', body: 'Jeder Test nennt Datum und einreichende Person. Menschen und KI-Agenten können Tests einreichen. Automatisierte Konten kennzeichnen sich als automatisiert.' },
          { title: 'Annahme', body: 'Tests werden als Vorschlag eingereicht und erst nach der Annahme berücksichtigt. Einwände werden gesondert markiert, frühere Entscheidungen bleiben erhalten.' },
        ],
      },
      states: {
        label: 'Fünf Statusangaben',
        headline: 'Fünf Statusangaben, klar unterschieden.',
        lead: 'Neben kompatibel und inkompatibel gibt es drei weitere Fälle, die oft vermischt werden. REZICS führt sie getrennt auf.',
        body: {
          compatible: 'Mindestens ein angenommener Test wurde in dieser Umgebung erfolgreich abgeschlossen. Das Datum ist angegeben.',
          incompatible: 'Ein angenommener Test zeigt, dass das Programm nicht läuft. Beleg und Datum sind angegeben.',
          unknown: 'Es gibt keinen Test. Angaben aus Kennzeichnungen, Kategorien oder Werbung werden nicht als Beleg verwendet.',
          stale: 'Der Test ist abgelaufen. Das Ergebnis bleibt sichtbar, gilt aber nicht mehr als aktuell.',
          unavailable: 'Für diese Umgebung ist keine Veröffentlichung verfügbar. Daher lässt sich Kompatibilität nicht bestimmen.',
        },
        caption: 'Kompatibilität der Beispiel-Editor-Versionen in vier Umgebungen',
        corner: 'Umgebung',
      },
      conditions: {
        label: 'Bedingungen',
        headline: 'Alle Bedingungen müssen zum selben Test gehören.',
        lead: 'Für einen Kompatibilitätsfilter muss dieselbe Veröffentlichung in einem Test alle Bedingungen erfüllen. Ergebnisse verschiedener Versionen zu kombinieren, kann so aussehen, als würde ein Programm laufen, obwohl es nach der Installation nicht funktioniert.',
        example: 'Beispiel für die Filter B-System, 64 Bit, stabile Version, kompatibel, ab 4.0. Für den Beispiel-Editor gibt es zwei mögliche Veröffentlichungen:',
        candidates: [
          { title: '4.1 Beta', body: 'Kompatibel. Der Test war erfolgreich, aber es ist keine stabile Version.' },
          { title: '4.0 stabile Version', body: 'Unbekannt. Es ist eine stabile Version, aber noch niemand hat sie getestet.' },
        ],
        result: 'Die Bedingungen verteilen sich auf zwei Veröffentlichungen, daher gibt es kein passendes Ergebnis. REZICS meldet das klar und lockert die Filter nicht stillschweigend.',
      },
      statement: {
        text: 'Jede Angabe nennt Beleg und Geltungsbereich.',
        sub: 'Ein externer Link allein beweist nichts.',
        note: 'Auch ein Scanergebnis gilt nur für eine bestimmte Datei und einen bestimmten Scan.',
      },
      closing: 'Ob etwas läuft, zeigen Tests.',
    },

    reviews: {
      hero: {
        headline: 'Erst die Version, dann die Bewertung.',
        lede: 'Dasselbe Programm kann sich nach einer Aktualisierung stark verändern. Bewertungen können für das gesamte Programm oder eine einzelne Veröffentlichung abgegeben werden. Eine Bewertung für eine Version bleibt bei dieser Version.',
      },
      rules: {
        label: 'Regeln für Bewertungen',
        headline: 'Ein Durchschnitt erscheint erst bei genug Bewertungen.',
        facts: [
          { title: '5', body: 'Standardmäßig werden mindestens fünf Bewertungen für einen Durchschnitt benötigt. Bis dahin werden nur Anzahl und Verteilung angezeigt und wie viele noch fehlen.' },
          { title: '50', body: 'Ranglisten verwenden gewichtete Werte und erfordern standardmäßig mindestens 50 Bewertungen. Der gewichtete Durchschnitt und die Gewichtung sind öffentlich.' },
          { title: '1', body: 'Eine Person hat für denselben Gegenstand und dieselbe Frage eine gültige Bewertung. Bei einer Änderung wird sie aktualisiert.' },
        ],
      },
      anatomy: {
        label: 'Frage und Gegenstand',
        headline: 'Jede Bewertung beantwortet eine bestimmte Frage.',
        lead: 'Frage, Skala und Gegenstand einer Bewertung sind gemeinsam festgelegt. Bewertungen zu verschiedenen Fragen werden nicht zusammengerechnet. Eine Bewertung für eine einzelne Veröffentlichung zählt nicht automatisch für das gesamte Programm.',
        points: [
          { title: 'Nebeneinander', body: 'Bewertungen der gesamten Plattform und jeder Community werden nebeneinander gezeigt, nicht zu einem Wert vermischt.' },
          { title: 'Über Versionen hinweg', body: 'Ein versionsübergreifender Gesamtwert ist eine eigene Kennzahl. Berechnung und Zahl der enthaltenen Veröffentlichungen werden genannt.' },
          { title: 'Keine erfundenen Angaben', body: 'REZICS erfindet keine Rezensionen, Stimmen oder Beteiligung. Automatisierte Konten sind gekennzeichnet.' },
        ],
      },
      statement: {
        text: 'Ohne Bewertungen wird nichts angezeigt.',
        sub: 'Es erscheinen weder eine Null noch ein leeres Balkendiagramm.',
      },
      picks: {
        label: 'Empfehlungen und Alternativen',
        headline: 'Empfehlungen haben Verantwortliche und Alternativen einen Grund.',
        rows: [
          { title: 'Community-Empfehlung', body: 'Jede Empfehlung der Community verweist auf die Diskussion zu dieser Entscheidung.' },
          { title: 'Alternative', body: '„Kann für eine bestimmte Aufgabe verwendet werden“ ist eine Verknüpfung mit Begründung und Urheber. Sie kann angefochten werden.' },
          { title: 'Liste', body: 'Eine Liste nennt die Zielumgebung und ob die Kompatibilität geprüft wurde.' },
          { title: 'Empfehlung', body: 'Jede Empfehlung nennt einen Grund, etwa deine gespeicherten Filter oder eine Community-Entscheidung. Du kannst Empfehlungen ganz ausschalten.' },
          { title: 'Problem melden', body: 'Diskussionen über ein Problem werden unter der betroffenen Version geführt, damit klar ist, worauf sie sich beziehen.' },
        ],
      },
      closing: 'Neben der Bewertung stehen Version und Anzahl.',
    },

    updates: {
      hero: {
        headline: 'Neue Veröffentlichungen in deiner gewünschten Häufigkeit.',
        lede: 'Wenn du einem Programm folgst, erhältst du seine neuen Veröffentlichungen und Änderungsprotokolle. Du entscheidest, ob du alles, nur Wichtiges oder gar nichts erhalten möchtest.',
      },
      levels: {
        label: 'Benachrichtigungsstufen',
        headline: 'Drei Stufen, für jedes Abo einzeln.',
        lead: 'Du kannst die Einstellung jederzeit ändern. Für einzelne wichtige Veröffentlichungen lassen sich eigene Hinweise einstellen.',
        rows: [
          { title: 'Alle', body: 'Hinweise zu jeder Veröffentlichung, Ankündigung und jedem Beitrag.' },
          { title: 'Ausgewählte', body: 'Hinweise nur zu neuen Veröffentlichungen, Ankündigungen und Community-Entscheidungen.' },
          { title: 'Aus', body: 'Antworten und Erwähnungen, die dich direkt betreffen, bleiben aktiv.' },
          { title: 'Zustellweg', body: 'REZICS-Posteingang, Push-Mitteilungen oder E-Mail-Zusammenfassungen. E-Mails kannst du mit einem Klick abbestellen.' },
        ],
      },
      targets: {
        label: 'Wem oder was du folgen kannst',
        headline: 'Du kannst mehr als Programme verfolgen.',
        rows: [
          { title: 'Programm', body: 'Neue Veröffentlichungen und Änderungsprotokolle.' },
          { title: 'Entwickler oder Organisation', body: 'Neue Einträge und Ankündigungen.' },
          { title: 'Filter', body: 'Speichere die Suche nach einem Open-Source-Texteditor für B-System als Ansicht. Neue passende Programme erscheinen in einem Tab auf deiner Startseite. Du kannst auch Zusammenfassungen erhalten.' },
          { title: 'Realm', body: 'Ankündigungen und Entscheidungen der Community, etwa neue Empfehlungen.' },
        ],
      },
      changelog: {
        label: 'Änderungsprotokoll',
        headline: 'Änderungsprotokolle gehören zur Veröffentlichung.',
        lead: 'Änderungsprotokolle stehen bei jeder Veröffentlichung. Wenn du von 3.2 auf die Beta-Version 4.1 wechselst, kannst du alle Änderungen der Zwischenversionen der Reihe nach lesen.',
        more: 'Der Bereich „Weiter“ auf der Startseite zeigt passende Paketaktualisierungen zusammen mit dem nächsten ungelesenen Kapitel. Aktualisierungen und Rückkehr zu einer älteren Version beziehen sich auf genaue Dateien. Beim Zurücksetzen erhältst du wieder dieselbe Datei.',
        caption: 'Änderungsprotokolle des Beispiel-Editors, neueste zuerst',
        start: 'Hier beginnt der Eintrag',
      },
      statement: {
        text: 'Deine Skripte und KI-Agenten',
        sub: 'lesen dieselben Aktualisierungsereignisse und setzen nach einer Unterbrechung an der letzten Stelle fort.',
      },
      closing: 'Du entscheidest, welche Hinweise du erhältst.',
    },

    publishing: {
      hero: {
        headline: 'Veröffentliche deine Releases als auffindbare Einträge.',
        lede: 'Entwickler pflegen ihre Programme auf REZICS. Sie dokumentieren Versionsnummer, Plattform, Dateien, Änderungsprotokoll, Lizenzbedingungen und Bezugsquelle jeder Veröffentlichung. Follower, Filter und KI-Agenten lesen dieselben Angaben.',
      },
      record: {
        label: 'Eine Veröffentlichung',
        headline: 'Felder eines Veröffentlichungseintrags.',
        lead: 'Ohne alle Pflichtfelder lässt sich eine Veröffentlichung nicht einreichen. Danach wird der Eintrag archiviert.',
        caption: 'Beispiel für einen Eintrag zu Version 4.0 des Beispiel-Editors',
        fields: [
          { title: 'Versionsnummer', body: '4.0' },
          { title: 'Kanal', body: 'Stabile Version' },
          { title: 'Datum', body: '2026-08-25' },
          { title: 'Plattform', body: 'A-System, 64 Bit; B-System, 64 Bit; C-System, Mobil' },
          { title: 'Dateigröße', body: '48.2 MB' },
          { title: 'Hash (Auszug)', body: 'sha256 9f2c41d7e41a' },
          { title: 'Lizenz', body: 'Beispiel einer Open-Source-Lizenz, Version 2.0' },
          { title: 'Bezugsquelle', body: 'Website des Entwicklers (externer Link)' },
          { title: 'Änderungsprotokoll', body: 'Arbeitsbereiche hinzugefügt und ein altes Erweiterungsformat entfernt.' },
        ],
      },
      steps: {
        label: 'Ablauf der Veröffentlichung',
        headline: 'Fünf Schritte für eine Veröffentlichung.',
        steps: [
          { title: 'Zugriffsrechte bestätigen', body: 'Bestätige zuerst, dass du das Projekt verwalten darfst. Danach kannst du seine Seite und Veröffentlichungen pflegen.' },
          { title: 'Veröffentlichungsdaten eintragen', body: 'Versionsnummer, Kanal, Datum und Dateien für jede Plattform.' },
          { title: 'Lizenz angeben', body: 'Wähle Lizenzbedingungen und Version. Die Angabe hält fest, wer sie wann und für welchen Geltungsbereich gemacht hat.' },
          {
            title: 'Bezugsquelle angeben',
            body: 'Gib an, wer die Dateien bereitstellt, wo sie heruntergeladen werden oder auf welcher externen Seite die Installation erfolgt. Verlinkt REZICS nur auf eine externe Seite, wird nicht behauptet, dass die Installation über REZICS läuft.',
          },
          { title: 'Veröffentlichen', body: 'Die Veröffentlichung wird archiviert. Follower erhalten je nach ihrer Benachrichtigungseinstellung einen Hinweis.' },
        ],
        note: 'Alle Schritte lassen sich über API und MCP ausführen, sodass dein Veröffentlichungsprozess Releases automatisch einreichen kann.',
      },
      licence: {
        label: 'Lizenz',
        headline: 'Lizenzen mit genauer Versionsangabe.',
        lead: 'Eine Lizenzangabe erfasst die genauen Bedingungen und die Version, die erklärende Person, den Zeitpunkt, den Geltungsbereich und die Quelle. Importierte Lizenztexte aus externen Quellen sind gekennzeichnet und gelten nicht als deine eigene Angabe.',
        points: [
          { title: 'Keine Zertifizierung', body: 'Eine Angabe ist keine rechtliche Zertifizierung und ändert keine Bearbeitungsrechte.' },
          { title: 'Unbekanntes als unbekannt angeben', body: 'Ist unbekannt, wer die Lizenz wann erteilt hat, wird das als unbekannt angegeben.' },
          { title: 'Filterbar', body: 'Lizenzen lassen sich als Filter verwenden, um Programme mit passenden Bedingungen zu finden.' },
        ],
      },
      lock: {
        label: 'Abhängigkeiten',
        headline: 'Abhängigkeiten folgen den Regeln ihres Ökosystems.',
        lead: 'REZICS übernimmt beim Auflösen von Paketabhängigkeiten die Identitäten, Versionsreihenfolgen und Bedeutungen des jeweiligen Ökosystems. Das Ergebnis wird auf genaue Dateien festgelegt.',
        points: [
          { title: 'Verbindlich und empfohlen', body: 'Verbindliche Abhängigkeiten und Konflikte werden getrennt von empfohlenen Ergänzungen und Hinweisen erfasst.' },
          { title: 'Zurückgezogene Versionen', body: 'Zurückgezogene Versionen werden nach den Regeln ihres Ökosystems behandelt. Bestehende Fixierungen behalten die ursprüngliche Dateiauswahl.' },
          { title: 'Getrennt melden', body: 'Nicht erreichbare Quellen, nicht unterstützte Lizenzen und überschrittene Budgets werden getrennt von unauflösbaren Abhängigkeiten gemeldet.' },
          { title: 'Nicht auffindbar heißt nicht nicht vorhanden', body: 'Nicht auffindbare Angaben gelten nicht als fehlende Abhängigkeiten.' },
        ],
      },
      statement: {
        text: 'Installation ist keine Ausführungserlaubnis.',
        sub: 'Skripte in Paketen laufen erst mit deiner ausdrücklichen Zustimmung.',
        note: 'Der Installationsablauf von REZICS nimmt nur geprüfte Dateien an und legt sie in einem isolierten temporären Verzeichnis ab.',
      },
      maintenance: {
        label: 'Nach der Veröffentlichung',
        headline: 'Pflege nach der Veröffentlichung.',
        rows: [
          { title: 'Screenshots und Angaben', body: 'Bei Screenshots sowie Datenschutz- und Barrierefreiheitsangaben ist vermerkt, wer sie bereitgestellt hat.' },
          { title: 'Angaben zurücknehmen', body: 'Ist eine Plattformangabe veraltet, kannst du sie zurücknehmen. Das Programm, seine Veröffentlichungen und Diskussionen bleiben erhalten.' },
          { title: 'Angebot', body: 'Bei Angeboten sind Preis, Region und Gültigkeitszeitraum tabellarisch aufgeführt. Preisänderungen bleiben nachvollziehbar.' },
          { title: 'Mitwirkende', body: 'Maintainer und Mitwirkende sind mit ihrer jeweiligen Rolle aufgeführt. Wenn jemand das Projekt wechselt, bleibt die Identität dieselbe.' },
        ],
      },
      closing: 'Einmal veröffentlichen, allen dieselben Angaben zeigen.',
    },

    connections: {
      hero: {
        headline: 'Abhängigkeiten und Erweiterungen verweisen auf dasselbe Programm.',
        lede: 'Spielmodule, MCP-Server, Skills und APIs haben auf REZICS jeweils einen eigenen Eintrag. Gerichtete Verknüpfungen führen zu den benötigten Programmen. Beide Seiten sind auffindbar.',
      },
      relations: {
        label: 'Namen der Verknüpfungen',
        headline: 'Jede Verknüpfung hat Name und Richtung.',
        lead: 'Beide Richtungen einer Verknüpfung haben eine eigene Bezeichnung, die in jeder Sprache verständlich ist.',
        rows: [
          { title: 'Benötigt / erforderlich für', body: 'Verbindliche Abhängigkeit. Ohne sie läuft das Programm nicht.' },
          { title: 'Empfohlen zusammen mit / Ergänzung für', body: 'Damit funktioniert es besser, aber es läuft auch ohne.' },
          { title: 'Konflikt', body: 'Die gemeinsame Installation verursacht Probleme. Von beiden Seiten wird dieselbe Angabe angezeigt.' },
          { title: 'Fork von / geforkt als', body: 'Ein unabhängig gepflegtes Projekt, das von einer anderen Gruppe übernommen wurde.' },
          { title: 'Alternative zu / ersetzbar durch', body: 'Ein anderes Programm für dieselbe Aufgabe, mit Begründung.' },
        ],
      },
      kinds: {
        label: 'Weitere Arten',
        headline: 'Verknüpfungen zu anderen Arten.',
        rows: [
          {
            kind: 'games',
            line: 'Module und Loader',
            body: 'Spielmodule hängen vom Spiel und oft auch von einem Loader ab. Verbindliche und empfohlene Abhängigkeiten werden getrennt erfasst. Der Loader ist selbst Software und hat eigene Veröffentlichungen und Kompatibilitätsnachweise.',
          },
          {
            kind: 'mcp',
            line: 'Für Agenten bedienbar machen',
            body: 'Der MCP-Server, über den ein KI-Agent dieses Programm bedient, hat einen eigenen Eintrag. Projekt, Paketveröffentlichung, bereitgestellter Endpunkt und beobachtete Fähigkeiten werden getrennt erfasst.',
          },
          { kind: 'skills', line: 'Als Abhängigkeit aufgeführt', body: 'Ein Skill kann angeben, welche Programme er benötigt. Prüfe Fähigkeiten und Umgebung, bevor du sie zusammenstellst.' },
          { kind: 'apis', line: 'Bietet oder verwendet', body: 'Öffentliche APIs, die ein Programm bereitstellt oder aufruft, haben eigene Versionen und Nachweise im API Hub und sind mit dem Programm verknüpft.' },
        ],
      },
      people: {
        label: 'Mitwirkende',
        headline: 'Auch Entwickler haben nur eine Identität.',
        lead: 'Auf REZICS kann dieselbe Person Software pflegen, einen Roman schreiben und ein Spiel rezensieren. Alles gehört zu derselben Identität. Die Mitwirkendenangaben verknüpfen diese Einträge. Wenn du der Person folgst, erfährst du von neuen Werken jeder Art.',
      },
      statement: {
        text: 'Gleiche Namen reichen nicht, Verknüpfungen brauchen Quellen.',
        sub: 'KI-Agenten können Vorschläge machen, aber nicht stillschweigend zwei Einträge gleichsetzen.',
      },
      closing: 'Beide Seiten bleiben auffindbar.',
    },
  },
} satisfies MiniSite<SoftwareStrings>;

export default site;
