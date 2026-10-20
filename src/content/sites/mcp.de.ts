// MCP Hub (`mcp`): every visible string of /mcp/ and its five inner pages. Design record and
// sources: src/sites/mcp/SITE.md and src/sites/mcp/facts.md. Illustrative data (the notes
// server, versions, dates, client categories, tasks, tools, views, lists) is labelled 示意 on
// the page.
import type { Item, MiniSite } from '../schema';

/** The site's paper still-life series (public/images/sites/mcp/). */
export type McpPicture = 'hero' | 'records' | 'identity' | 'versions' | 'zone';
/** A combination's state on the evidence page. */
export type McpState = 'ok' | 'fail' | 'disputed' | 'none';
/** A site page linked from the landing's tiles. */
export type McpPage = 'directory' | 'evidence' | 'versions' | 'community' | 'maintainers';

/** A section's eyebrow, heading and lead. */
type Head = { label: string; headline: string; body: string };
/** A statement: the first half in ink, the continuation muted. */
type Statement = { text: string; sub: string; note?: string };
type RecordField = { label: string; value: string; note: string };

export type McpStrings = {
  next: { page: string; site: string };
  /** Alt text of each picture. */
  pictures: Record<McpPicture, string>;
  /** A line for each page: its tile on the landing and its lead-in on the previous page. */
  pageLines: Record<McpPage, string>;
  landing: {
    hero: { label: string; headline: string; lede: string };
    record: Head & { fields: Item[]; link: string };
    statement: Statement;
    pages: { label: string; headline: string };
    neighbours: Head & {
      tiles: { kind: 'software' | 'apis' | 'skills'; line: string }[];
      developers: { name: string; line: string; href: string };
    };
    closing: { title: string; body: string };
  };
  directory: {
    hero: { headline: string; lede: string };
    records: Head & { items: Item[] };
    filters: Head & { rows: Item[]; caption: string; note: string };
    traversal: { label: string; headline: string; facts: Item[] };
    parts: Head & { notes: Record<string, string> };
    statement: Statement;
    next: string;
    closing: string;
  };
  evidence: {
    hero: { headline: string; lede: string };
    specimen: {
      label: string;
      headline: string;
      fields: Record<'server' | 'client' | 'task' | 'language' | 'result' | 'date' | 'submitter' | 'review', RecordField>;
      caption: string;
    };
    compare: { label: string; headline: string; says: { heading: string; items: string[] }; not: { heading: string; items: string[] } };
    states: Head & { names: Record<McpState, string>; items: Record<McpState, string> };
    statement: Statement;
    layers: { label: string; headline: string; chapters: Item[] };
    client: { label: string; headline: string; body: string[] };
    next: string;
    closing: string;
  };
  versions: {
    hero: { headline: string; lede: string };
    start: Head & { note: string };
    diff: Head & {
      columns: [string, string, string];
      rows: { tool: string; before: string; after: string }[];
      consequence: string;
      caption: string;
    };
    ledger: Head & { rows: Item[] };
    follow: Head & { levels: Item[]; channels: string };
    statement: Statement;
    next: string;
    closing: string;
  };
  community: {
    hero: { headline: string; lede: string };
    score: { label: string; headline: string; items: Item[]; note: string };
    discussion: Head & { agents: string };
    list: Head & {
      title: string;
      items: { kind: 'mcp' | 'skills' | 'apis' | 'software'; name: string; note: string }[];
      caption: string;
    };
    zone: Head & { routes: string };
    next: string;
    closing: string;
  };
  maintainers: {
    hero: { headline: string; lede: string };
    steps: { label: string; headline: string; items: Item[] };
    rules: { label: string; headline: string; can: { heading: string; items: string[] }; cannot: { heading: string; items: string[] } };
    licence: Head & { rows: Item[] };
    agent: Statement & { link: string; href: string };
    next: { headline: string; lines: Record<'skills' | 'apis' | 'software', string> };
    closing: string;
  };
};

const strings: McpStrings = {
  next: { page: 'Nächste Seite', site: 'Nächste Website' },

  pictures: {
    hero: 'Mehrere ockerfarbene Papierblätter sind mit einer Schnur durch runde Löcher verbunden. Ein hellblaues und ein hellgrünes Blatt hängen ebenfalls daran.',
    records: 'An einem ockerfarbenen Blatt hängen an einer Schnur mehrere leere Anhänger. Ein rundes Loch am Rand bleibt frei.',
    identity: 'Ein Blatt ist in vier leicht auseinandergezogene Teile geteilt: zwei ockerfarbene, ein dunkelgrünes und ein hellblaues.',
    versions: 'Fünf gleich große Blätter liegen in einer Reihe, von dunkel bis hell. Das letzte ist weiß.',
    zone: 'Ein ockerfarbenes Blatt ist zu einem kleinen Paravent gefaltet. Daneben liegen mehrere kleine Papierstücke.',
  },

  pageLines: {
    directory: 'Ein Server, eine Identität',
    evidence: 'Was ein Eintrag aussagt und was nicht',
    versions: 'Ein Eintrag pro Version',
    community: 'Bewertungen, Diskussionen, Listen und Community-Verzeichnis',
    maintainers: 'Eintragen, beanspruchen, erklären und antworten',
  },

  landing: {
    hero: {
      label: 'MCP-Serververzeichnis',
      headline: 'Welche Server funktionieren, zeigen datierte Einträge.',
      lede: 'MCP Hub gibt jedem MCP-Server eine eigene Identität und erfasst jede Version einzeln: an welchem Tag, mit welcher Version eines Clients, in welcher Sprache und mit welchem Ergebnis getestet wurde.',
    },
    record: {
      label: 'Ein Eintrag',
      headline: 'Bevor du sagst, dass etwas funktioniert, nenne die Kombination.',
      body: 'Welche Serverversion, welcher Client, welche Aufgabe und welche Sprache: Ohne diese Angaben bleibt die Aussage unklar. Jeder Eintrag nennt sie zusammen mit Ergebnis und Datum. Ändert sich etwas, muss die neue Kombination getestet werden.',
      fields: [
        { title: 'Serverversion', body: 'Bis zur Versionsnummer genau. Eine neue Version erhält einen eigenen Eintrag.' },
        { title: 'Client', body: 'Client und Version werden gemeinsam erfasst.' },
        { title: 'Aufgabe', body: 'Was der Server tun soll.' },
        { title: 'Sprache', body: 'Dieselbe Aufgabe kann in einer anderen Sprache ein anderes Ergebnis haben.' },
        { title: 'Ergebnis und Datum', body: 'Ob es funktioniert hat und an welchem Tag es getestet wurde.' },
      ],
      link: 'So ist ein Eintrag aufgebaut',
    },
    statement: {
      text: 'Ein Eintrag beschreibt nur das Ergebnis dieser Kombination an diesem Tag.',
      sub: 'Er belegt weder die Sicherheit des Servers noch erteilt er eine Lizenz oder Empfehlung von REZICS.',
    },
    pages: {
      label: 'Diese Website',
      headline: 'Vom Finden eines Servers bis zu seiner Pflege: eine Seite pro Thema.',
    },
    neighbours: {
      label: 'Verbundene Verzeichnisse',
      headline: 'Ein Server steht nicht für sich allein.',
      body: 'Die Menschen dahinter, die eingebundene API und das zugehörige Projekt stehen im selben Verzeichnis. Du kannst von jedem Eintrag aus zu den anderen gelangen.',
      tiles: [
        { kind: 'software', line: 'Projekte, Pakete und Clients sind Softwareeinträge' },
        { kind: 'apis', line: 'Die eingebundene API ist in beide Richtungen verknüpft' },
        { kind: 'skills', line: 'Skills desselben Maintainers' },
      ],
      developers: { name: 'Entwickler', line: 'Der MCP-Server von REZICS', href: '/developers/mcp-server/' },
    },
    closing: {
      title: 'Sieh dir die Einträge an und entscheide dann.',
      body: 'Server, Skills und APIs nutzen dasselbe Konto wie die Bücher und Spiele, denen du auf REZICS folgst.',
    },
  },

  directory: {
    hero: {
      headline: 'Ein Server, eine Identität.',
      lede: 'Derselbe MCP-Server kann aus mehreren Quellen stammen. Nach einer geprüften Zusammenführung hat er auf REZICS einen Eintrag. Name, Maintainer, Versionen, Einträge, Bewertungen und Diskussionen sind damit verknüpft.',
    },
    records: {
      label: 'Vier Dinge',
      headline: 'Ein Server besteht aus vier verschiedenen Dingen.',
      body: 'Projekt, Paket, Bereitstellungsendpunkt und Werkzeugliste ändern sich unabhängig voneinander. REZICS erfasst sie deshalb getrennt.',
      items: [
        { title: 'Projekt', body: 'Name, Beschreibung und Maintainer. Eine neue Version oder ein anderer Endpunkt ändert nicht das Projekt. Ein abgespaltenes Projekt erhält einen eigenen Eintrag und eine Verknüpfung zum ursprünglichen Projekt.' },
        { title: 'Paket', body: 'Zu welchem Ökosystem eine Paketversion gehört, einschließlich des ursprünglichen Namens und der Versionsnummer. Die Reihenfolge folgt den Regeln des jeweiligen Ökosystems.' },
        { title: 'Bereitstellungsendpunkt', body: 'Die Netzwerkadresse des Servers. Eine erreichbare Adresse beweist weder, wem der Server gehört, noch ob er mit deinem Client kompatibel ist oder ob du ihn aufrufen darfst.' },
        { title: 'Werkzeugliste', body: 'Welche Werkzeuge der Server zu einem bestimmten Zeitpunkt auflistet und welche Parameter sie brauchen. Bei jeder Änderung kommt eine neue Beobachtung hinzu.' },
      ],
    },
    filters: {
      label: 'Filter',
      headline: 'Alle Filterbedingungen stammen aus demselben Eintrag.',
      body: 'Suchst du Server, die in einem Kommandozeilen-Client auf traditionellem Chinesisch erfolgreich eine Datei exportiert haben, müssen alle drei Bedingungen im selben Eintrag stehen. Sie werden nicht aus verschiedenen Einträgen zusammengesetzt.',
      rows: [
        { title: 'Server, die in einem Code-Editor auf Japanisch erfolgreich Aufgaben sortiert haben', body: 'Client, Sprache, Aufgabe und Ergebnis stehen im selben Eintrag.' },
        { title: 'Server mit einem erfolgreichen Eintrag zur neuesten Version aus den letzten 90 Tagen', body: 'Version, Datum und Ergebnis sind in einem Eintrag verknüpft.' },
        { title: 'Alle Server desselben Maintainers', body: 'Nach Mitwirkenden suchen.' },
        { title: 'Server, die eine bestimmte API einbinden', body: 'Über die Verknüpfung auffindbar, auch von der API aus.' },
      ],
      caption: 'Du kannst Filter unter einem Namen speichern, später direkt öffnen und ihnen folgen.',
      note: 'Beispielansicht.',
    },
    traversal: {
      label: 'Liste',
      headline: 'Die Liste reicht bis zum letzten Eintrag und zeigt klar, wo sie endet.',
      facts: [
        { title: 'Bis zum letzten Eintrag', body: 'Die Ergebnisse enden nicht nach den ersten Seiten. Du kannst bis zum letzten Eintrag weiterblättern.' },
        { title: 'Klare Angaben zur Anzahl', body: 'Die Anzahl ist als genau oder geschätzt gekennzeichnet. Auch der Stand der Daten ist angegeben.' },
        { title: 'Grenzen klar benennen', body: 'Nicht unterstützte Filterkombinationen werden klar benannt. Sie erscheinen nicht als leere Liste, die wie „keine Ergebnisse“ aussieht.' },
      ],
    },
    parts: {
      label: 'Teile',
      headline: 'Acht Teile für alle Arten.',
      body: 'Der MCP Hub verwendet kein separates System. Seine Einträge bestehen aus denselben Teilen wie Bücher, Spiele und Software, nur anders angeordnet.',
      notes: {
        identity: 'Derselbe Server aus verschiedenen Quellen verweist auf dieselbe Identität.',
        editions: 'Jede Version hat einen eigenen Eintrag, ein eigenes Paket, eine eigene Werkzeugliste und eigene Testergebnisse.',
        specs: 'Kompatibilitätseinträge nennen Datum, Client und Version, Aufgabe, Sprache und Ergebnis.',
        credits: 'Maintainer sind Personen oder Organisationen. Ihre weiteren Projekte sind verknüpft.',
        ratings: 'Bewertungen gehören zu einer Version und nennen die jeweilige Frage.',
        discussion: 'Diskussionen gehören zum Server oder zu einer bestimmten Version.',
        lists: 'Server, Skills und APIs lassen sich in derselben Liste zusammenstellen und einzeln kommentieren.',
        follow: 'Folge Servern, Maintainers oder Ansichten und erfahre von neuen Versionen.',
      },
    },
    statement: {
      text: 'Gleicher Name bedeutet nicht denselben Server.',
      sub: 'Zusammenführungen brauchen Belege und eine Prüfung.',
      note: 'Auch nach einer Zusammenführung bleiben ursprüngliche Identitäten und Verläufe einsehbar.',
    },
    next: 'Was ein Eintrag festhält und bewusst auslässt.',
    closing: 'Prüfe den Server, bevor du dich für einen entscheidest.',
  },

  evidence: {
    hero: {
      headline: 'Jeder Eintrag nennt Datum und Kombination.',
      lede: 'Eine Person oder ein KI-Agent bittet den Server mit einer bestimmten Clientversion und in einer bestimmten Sprache um eine Aufgabe. Ergebnis und Datum werden festgehalten. So entsteht ein Eintrag. Diese Einträge bilden die Belege im MCP Hub.',
    },
    specimen: {
      label: 'Beispieleintrag',
      headline: 'Ein Eintrag im Detail.',
      fields: {
        server: { label: 'Server', value: 'Notizserver 1.4.0', note: 'Genau bis zur Versionsnummer.' },
        client: { label: 'Client', value: 'Code-Editor 3.2', note: 'Auch die Clientversion wird erfasst.' },
        task: { label: 'Aufgabe', value: 'Besprechungsnotizen in eine Aufgabenliste umwandeln', note: 'Die Aufgabe wird in einem Satz beschrieben.' },
        language: { label: 'Sprache', value: 'Traditionelles Chinesisch', note: 'Sprache der Aufgabe.' },
        result: { label: 'Ergebnis', value: 'Erfolgreich', note: 'Erfolg oder Misserfolg werden festgehalten.' },
        date: { label: 'Datum', value: '2026-10-12', note: 'Dieser Eintrag gilt nur für diesen Tag.' },
        submitter: { label: 'Eingereicht von', value: 'Ein Nutzer', note: 'Menschen und KI-Agenten können Einträge einreichen. Agenten nennen, wer sie betreibt.' },
        review: { label: 'Prüfung', value: 'Geprüft', note: 'Ein Eintrag wird erst nach menschlicher Prüfung veröffentlicht.' },
      },
      caption: 'Beispieleintrag. Felder und Inhalte erklären Kompatibilitätsbelege. Veröffentlicht werden nur von Menschen geprüfte Einträge.',
    },
    compare: {
      label: 'Umfang',
      headline: 'Was er aussagt und was nicht.',
      says: {
        heading: 'Er sagt aus',
        items: [
          'Diese Kombination hat an diesem Tag diese Aufgabe erfüllt oder nicht erfüllt.',
          'Welche Server- und Clientversion verwendet wurden.',
          'In welcher Sprache die Aufgabe ausgeführt wurde.',
          'Wer den Eintrag eingereicht hat und dass er von einem Menschen geprüft wurde.',
        ],
      },
      not: {
        heading: 'Er sagt nicht aus',
        items: [
          'Ob der Server sicher ist. Der Eintrag ist keine Sicherheitszertifizierung.',
          'Wie du den Code verwenden darfst. Dafür gelten die Lizenzerklärung des Maintainers und der Lizenztext.',
          'Was mit anderen Versionen, Clients oder Sprachen geschieht.',
          'Ob REZICS diesen Server empfiehlt oder garantiert.',
        ],
      },
    },
    states: {
      label: 'Ergebnis und Status',
      headline: 'Ergebnisse, Streitfälle und fehlende Einträge sind klar getrennt.',
      body: 'Ein Test liefert ein Ergebnis. Wird es angefochten, wird es erneut geprüft. Status werden immer mit Worten bezeichnet, nicht nur durch Farben.',
      names: { ok: 'Erfolgreich', fail: 'Nicht erfolgreich', disputed: 'Umstritten', none: 'Kein Eintrag' },
      items: {
        ok: 'Diese Kombination hat an diesem Tag funktioniert.',
        fail: 'Auch ein erfolgloser Test wird dokumentiert.',
        disputed: 'Ein veröffentlichter Eintrag wurde angefochten und wird erneut geprüft.',
        none: 'Noch niemand hat die Kombination getestet oder einen Test dokumentiert.',
      },
    },
    statement: {
      text: 'Kein Eintrag bedeutet nicht, dass es nicht funktioniert.',
      sub: 'Nicht getestete Kombinationen bleiben offen. Sie gelten nicht als erfolglos.',
    },
    layers: {
      label: 'Erklärungen und Einträge',
      headline: 'Angaben der Maintainer, Serverlisten und Nutzertests bleiben getrennt.',
      chapters: [
        { title: 'Erklärung', body: 'Maintainer geben an, welche Clients und Sprachen unterstützt werden. Diese Angaben bleiben als Erklärungen gekennzeichnet und gelten nicht als Testergebnisse.' },
        { title: 'Beobachtung', body: 'Zu einem bestimmten Zeitpunkt werden die Werkzeuge und Parameter des Servers festgehalten. Eine Werkzeugliste beweist nicht, dass eine Aufgabe funktioniert.' },
        { title: 'Testeintrag', body: 'Jemand hat mit einer Kombination eine Aufgabe ausgeführt und Ergebnis und Datum festgehalten. Erst nach menschlicher Prüfung wird daraus ein veröffentlichter Eintrag.' },
        { title: 'Prüfung und Einwände', body: 'Auch geprüfte Einträge können angefochten werden. „Geprüft“ und „umstritten“ können zugleich gelten. Frühere Entscheidungen bleiben im Verlauf erhalten.' },
      ],
    },
    client: {
      label: 'Über den Client suchen',
      headline: 'Beginne mit deinem Client.',
      body: [
        'Wähle zuerst deinen Client und seine Version, dann die Sprache der Aufgabe. Das Verzeichnis zeigt nur Server mit einem Eintrag für diese Kombination, samt Ergebnis und Datum.',
        'Speichere die Auswahl als Ansicht und folge ihr. Neue passende Einträge werden dir angezeigt.',
      ],
    },
    next: 'Jede Version hat einen eigenen Eintrag. Änderungen an der Werkzeugliste bleiben nachvollziehbar.',
    closing: 'Je klarer der Eintrag, desto besser kannst du selbst entscheiden.',
  },

  versions: {
    hero: {
      headline: 'Jede Version hat ihren eigenen Eintrag.',
      lede: 'Versionen werden nach den Regeln ihres Ökosystems sortiert. Jede hat ein eigenes Paket, eine eigene Werkzeugliste, Änderungen, Kompatibilitätseinträge und Bewertungen. Ergebnisse der vorherigen Version werden nicht übernommen.',
    },
    start: {
      label: 'Neue Version',
      headline: 'Eine neue Version braucht eigene Einträge.',
      body: 'Kompatibilitätseinträge für 2.0.0 müssen auf Tests mit dieser Version beruhen. Der Erfolg mit 1.4.1 wird nicht übernommen. Erst ein Test mit 2.0.0 ergibt einen eigenen Eintrag. Frühere Einträge nennen Datum und Version, damit du ihre Gültigkeit beurteilen kannst.',
      note: 'Beispiel für Versionsnummern.',
    },
    diff: {
      label: 'Werkzeugliste',
      headline: 'Änderungen an der Werkzeugliste sind sofort sichtbar.',
      body: 'Jede Beobachtung hält die Werkzeuge und Parameterformate fest, die der Server zu diesem Zeitpunkt auflistet. Ein Vergleich zweier Beobachtungen zeigt neue, entfernte und geänderte Werkzeuge.',
      columns: ['Werkzeug', 'Beobachtung für 1.4.0', 'Beobachtung für 2.0.0'],
      rows: [
        { tool: 'Notizen suchen', before: 'Vorhanden', after: 'Parameter geändert' },
        { tool: 'Notiz erstellen', before: 'Vorhanden', after: 'Unverändert' },
        { tool: 'Notiz löschen', before: 'Vorhanden', after: 'Entfernt' },
        { tool: 'Tags auflisten', before: 'Vorhanden', after: 'Unverändert' },
        { tool: 'Notizen exportieren', before: 'Nicht vorhanden', after: 'Neu' },
      ],
      consequence: '„Notizen suchen“ ist weiterhin vorhanden, aber das Parameterformat hat sich geändert. Einstellungen, die dieses Werkzeug verwenden, solltest du erneut testen.',
      caption: 'Beispiel: Vergleich zweier Werkzeuglisten, keine echten Beobachtungen.',
    },
    ledger: {
      label: 'Paket',
      headline: 'Derselbe Name und dieselbe Version bedeuten nicht dieselbe Datei.',
      body: 'Pakete werden nach Ökosystem mit ihrem ursprünglichen Namen und ihrer Versionsnummer erfasst. Ein gleicher Name oder eine gleiche Versionsnummer belegt weder denselben Inhalt noch dieselben Rechte. Deshalb wird jede Paketdatei anhand ihres Hashwerts geprüft.',
      rows: [
        { title: 'Ökosystem', body: 'Aus welchem Paketökosystem das Paket stammt.' },
        { title: 'Ursprünglicher Name', body: 'Wird unverändert gespeichert und nicht in ein anderes Format umgeschrieben.' },
        { title: 'Versionsnummer', body: 'Die Reihenfolge folgt den Regeln des jeweiligen Ökosystems.' },
        { title: 'Datei-Hash', body: 'Prüft die tatsächliche Datei dieser Version.' },
        { title: 'Lizenzerklärung', body: 'Wer wann welche Lizenz erklärt hat.' },
        { title: 'Quelle', body: 'Woher dieser Datensatz stammt und wann er erfasst wurde.' },
      ],
    },
    follow: {
      label: 'Folgen',
      headline: 'Folge einem Server und entscheide, wie oft du benachrichtigt wirst.',
      body: 'Für jede Folgeoption kannst du die Benachrichtigungsstufe jederzeit ändern. Änderungen an gefolgten Servern erscheinen auch in deinem Feed.',
      levels: [
        { title: 'Alle Updates', body: 'Neue Versionen, Ankündigungen und alle neuen Beiträge.' },
        { title: 'Wichtiges', body: 'Neue Versionen, Ankündigungen und Entscheidungen.' },
        { title: 'Aus', body: 'Du wirst nur benachrichtigt, wenn jemand dir antwortet oder dich erwähnt.' },
        { title: 'Gezielt folgen', body: 'Folge nur einer bestimmten Version oder Diskussion.' },
      ],
      channels: 'Benachrichtigungen erscheinen im Posteingang. Du kannst auch Push-Mitteilungen oder E-Mail-Zusammenfassungen aktivieren. E-Mails lassen sich mit einem Klick abbestellen.',
    },
    statement: {
      text: 'Auch Bewertungen gehören zu einer Version.',
      sub: 'Bewertungen für Version 1.4 fließen nicht in die Bewertung von 2.0 ein.',
      note: 'Versionsübergreifende Werte sind separate Kennzahlen. Ihre Berechnung und die berücksichtigten Versionen werden angegeben.',
    },
    next: 'Bewertungen, Diskussionen und Listen nennen klar, worauf sie sich beziehen.',
    closing: 'Bei einer neuen Version beginnst du wieder mit den Einträgen.',
  },

  community: {
    hero: {
      headline: 'Nenne zuerst die Version, dann die Bewertung.',
      lede: 'Jede Bewertung gehört zu einer Frage, einer Skala und einer Version. Daneben stehen Anzahl, Verteilung und bewertende Gruppe. So erkennst du, wessen Meinung sie wiedergibt.',
    },
    score: {
      label: 'Bewertung',
      headline: 'Zu jeder Bewertung gehören fünf Angaben.',
      items: [
        { title: 'Frage', body: 'Zum Beispiel: „Sind die Anleitungen verständlich?“ oder „Läuft der Server auch bei langer Nutzung stabil?“ Unterschiedliche Fragen werden getrennt ausgewertet.' },
        { title: 'Skala', body: 'Die Skala und die Bedeutung jeder Stufe stehen neben der Bewertung.' },
        { title: 'Version', body: 'Die Bewertung bleibt bei der Version, auf die sie sich bezieht.' },
        { title: 'Anzahl und Verteilung', body: 'Bei zu wenigen Bewertungen werden nur Anzahl und Verteilung angezeigt, kein Durchschnitt.' },
        { title: 'Gruppe', body: 'Plattformweite Bewertungen und Bewertungen einer Community werden getrennt angezeigt.' },
      ],
      note: 'Beispielfrage.',
    },
    discussion: {
      label: 'Diskussion',
      headline: 'Diskussionen gehören zum Server oder zu einer bestimmten Version.',
      body: 'Probleme mit einer Version werden dort diskutiert. Allgemeine Erfahrungen gehören zum Server. Maintainer antworten unter ihrer eigenen Identität, damit Leser wissen, wer spricht.',
      agents: 'Wenn ein KI-Agent an einer Diskussion teilnimmt, kennzeichnet er sich als Agent und nennt seinen Betreiber.',
    },
    list: {
      label: 'Liste',
      headline: 'Eine Liste für Server, Skills und APIs.',
      body: 'Eine Liste kann Server, die dazugehörigen Skills und APIs zusammenführen. Du kannst jeden Eintrag kommentieren, sortieren und exportieren.',
      title: 'Werkzeuge zum Sortieren von Besprechungsnotizen',
      items: [
        { kind: 'mcp', name: 'Notizserver', note: 'Ab Version 2.0.0 lassen sich Notizen exportieren.' },
        { kind: 'skills', name: 'Skill zum Sortieren von Besprechungsnotizen', note: 'Benötigt den Server oben.' },
        { kind: 'apis', name: 'Kalender-API', note: 'Überträgt Aufgaben in den Kalender.' },
        { kind: 'software', name: 'Kommandozeilenwerkzeug', note: 'Diese Kombination wurde hier getestet.' },
      ],
      caption: 'Beispielliste.',
    },
    zone: {
      label: 'Website',
      headline: 'Communities können ein eigenes Serververzeichnis haben.',
      body: 'Mit einer Zone können Communities eine vollständige Website einrichten: mit Startseite, Navigation, gefiltertem Verzeichnis und Infoseiten. Die Einträge bleiben dieselben Identitäten. Änderungen dort werden überall übernommen, wo der Eintrag erscheint.',
      routes: 'Beispiel für eine Sitemap: Startseite, Verzeichnis, Einstieg, Einträge und Diskussionen.',
    },
    next: 'Server eintragen, Identität beanspruchen, Erklärungen abgeben.',
    closing: 'Bei jeder Bewertung und Diskussion ist klar, worauf sie sich bezieht.',
  },

  maintainers: {
    hero: {
      headline: 'Du erklärst die Server, die du pflegst.',
      lede: 'Trage Server ein, beanspruche importierte Identitäten und erkläre Lizenzen und unterstützte Funktionen. Deine Angaben sind als Erklärungen gekennzeichnet und stehen neben den Einträgen der Nutzer. Leser sehen beides.',
    },
    steps: {
      label: 'Schritte',
      headline: 'Vom Eintrag bis zur Antwort in vier Schritten.',
      items: [
        { title: 'Eintragen', body: 'Erstelle einen Eintrag mit Name, Beschreibung, Projekt und Paket. Vor dem Absenden sucht das System nach Duplikaten.' },
        { title: 'Beanspruchen', body: 'Wurde ein Eintrag aus öffentlichen Daten importiert, kannst du die zugehörige Personen- oder Organisationsidentität beanspruchen.' },
        { title: 'Erklärung', body: 'Nenne die Lizenz sowie unterstützte Clients und Sprachen. Jede Erklärung hält fest, wer sie wann und auf Grundlage welcher Lizenzfassung abgegeben hat.' },
        { title: 'Antworten', body: 'Antworte in Diskussionen als Maintainer. Bei umstrittenen Einträgen kannst du eigene Testergebnisse einreichen.' },
      ],
    },
    rules: {
      label: 'Grenzen',
      headline: 'Was du ändern kannst und was nicht.',
      can: {
        heading: 'Das kannst du',
        items: ['Beschreibungen, Versionsangaben und Erklärungen bearbeiten.', 'Auf Diskussionen antworten und Einträge mit Gegenbelegen anfechten.', 'Deinen KI-Agenten für jede neue Version einen Eintrag einreichen lassen.'],
      },
      cannot: {
        heading: 'Das kannst du nicht',
        items: ['Einträge anderer wegen eines Widerspruchs selbst entfernen. Reiche stattdessen Gegenbelege zur Prüfung ein.', 'Durch Sponsoring oder ein Abonnement eine andere Entscheidung erhalten.', 'Dir selbst Bewertungen geben oder mit mehreren Konten künstliche Unterstützung erzeugen.'],
      },
    },
    licence: {
      label: 'Lizenzerklärung',
      headline: 'Eine Lizenzerklärung stammt von dir. Sie ist keine Genehmigung von REZICS.',
      body: 'Die Erklärung hält Lizenz und Version, erklärende Person, Zeitpunkt, Umfang und Grundlage fest. Sie erteilt niemandem eine Nutzungserlaubnis von REZICS und ist keine rechtliche Bestätigung. Ein Servereintrag bedeutet nicht, dass jeder den Code verbreiten darf.',
      rows: [
        { title: 'Lizenz und Version', body: 'Welche Lizenz und Version erklärt wird.' },
        { title: 'Erklärende Person', body: 'Welche Person oder Organisation die Erklärung abgibt.' },
        { title: 'Zeitpunkt', body: 'Wann die Erklärung abgegeben wurde. Unbekanntes bleibt als unbekannt gekennzeichnet.' },
        { title: 'Umfang', body: 'Welche Versionen und Dateien umfasst sind.' },
        { title: 'Grundlage', body: 'Worauf die Erklärung beruht.' },
      ],
    },
    agent: {
      text: 'Dein KI-Agent kann nach jeder Veröffentlichung die Aufgaben testen,',
      sub: 'und die Ergebnisse einreichen.',
      note: 'Diese Einträge sind als Ergebnisse deines Agenten gekennzeichnet und durchlaufen dieselbe Prüfung wie alle anderen.',
      link: 'So reichst du Ergebnisse ein',
      href: '/developers/mcp-server/',
    },
    next: {
      headline: 'Auch Skills für KI-Agenten haben Versionen, Einträge und Bewertungen.',
      lines: {
        skills: 'Dateien und Abhängigkeiten jeder Skill-Version',
        apis: 'APIs, die der Server einbindet',
        software: 'Projekte, Pakete und Clients',
      },
    },
    closing: 'Deine Angaben und die Einträge der Community stehen nebeneinander.',
  },
};

export default {
  id: 'mcp',
  base: '/mcp/',
  name: 'MCP Hub',
  theme: { kind: 'mcp' },
  next: 'skills',
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'MCP Hub: Verzeichnis für MCP-Server',
        description:
          'Finde MCP-Server im MCP Hub von REZICS. Jeder Server hat eine Identität und jede Version einen eigenen Eintrag. Kompatibilitätseinträge nennen Datum, Client und Version, Aufgabe und Sprache. Bewertungen, Diskussionen und Listen gehören dazu.',
      },
    },
    {
      slug: 'directory',
      label: 'Verzeichnis',
      meta: {
        title: 'MCP Hub Verzeichnis: Ein Server, eine Identität',
        description:
          'Im MCP Hub hat jeder MCP-Server eine einzige Identität. Projekte, Paketversionen, Bereitstellungsendpunkte und Werkzeuglisten werden getrennt erfasst. Filterbedingungen müssen im selben Eintrag stehen. Die Ergebnisse reichen bis zum letzten Eintrag.',
      },
    },
    {
      slug: 'evidence',
      label: 'Belege',
      meta: {
        title: 'MCP Hub Belege: Datum und Bedingungen',
        description:
          'Kompatibilitätseinträge im MCP Hub nennen Datum, Serverversion, Client und Version, Aufgabe, Sprache und Ergebnis. Sie zeigen, was eine Kombination an einem bestimmten Tag geschafft hat. Sie belegen weder Sicherheit noch eine Lizenz oder Empfehlung von REZICS.',
      },
    },
    {
      slug: 'versions',
      label: 'Version',
      meta: {
        title: 'MCP Hub Versionen: Ein Eintrag pro Version',
        description:
          'Jede MCP-Serverversion hat einen eigenen Eintrag mit Paketökosystem, ursprünglichem Namen, Versionsnummer, Datei-Hash, beobachteter Werkzeugliste sowie eigenen Testergebnissen und Bewertungen. Folge dem Server und erhalte eine Nachricht, wenn eine neue Version erscheint.',
      },
    },
    {
      slug: 'community',
      label: 'Community',
      meta: {
        title: 'MCP Hub Community: Bewertungen, Diskussionen und Listen',
        description:
          'Bewerte eine MCP-Serverversion und nenne die Frage. Diskussionen gehören zum Server oder zu einer Version. Server, Skills und APIs lassen sich in einer Liste zusammenstellen. Communities können mit einer Zone ein eigenes Serververzeichnis einrichten.',
      },
    },
    {
      slug: 'maintainers',
      label: 'Maintainer',
      meta: {
        title: 'MCP Hub Maintainer: Eintragen und beanspruchen',
        description:
          'Maintainer können Server im MCP Hub eintragen, importierte Identitäten beanspruchen, Lizenzen und unterstützte Funktionen erklären und in Diskussionen unter ihrer eigenen Identität antworten. Erklärungen und Nutzereinträge werden getrennt angezeigt. Zahlungen beeinflussen keine Entscheidungen.',
      },
    },
  ],
  strings,
} satisfies MiniSite<McpStrings>;
