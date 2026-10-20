// Skill Hub (/skills/): every visible string of the site, shaped by the v3 parts (hero, section,
// facts list, photo row, tile masonry, statement, closing). Design record and sources:
// src/sites/skills/SITE.md and facts.md. Terms: 「AI 代理」 on first mention in a section, then
// 「代理」; 「技能」 throughout; 「MCP 伺服器」.
import type { KindId, MiniSite } from '../schema';

/** A hairline facts row: title left, text right. */
export interface Row {
  title: string;
  body: string;
}

/** A frontmatter line of the example skill and what REZICS does with it. */
export interface KeyRow {
  key: string;
  value?: string;
  body: string;
}

/** A file role of the Agent Skills format. */
export interface FileRow extends Row {
  /** The literal path from the format, set as code. */
  path?: string;
  /** A short mark beside the title (可執行, 缺少). */
  mark?: string;
}

/** A section opening: eyebrow in columns 1 to 3, serif h2 in 4 to 11, lead in 4 to 9. */
export interface Head {
  eyebrow: string;
  /** One or two short clauses; each item is one line on wide screens. */
  headline: string[];
  lead?: string;
}

/** A large serif statement: the first half in ink, the second in muted ink. */
export interface Said {
  text: string;
  muted: string;
}

/** A still-life picture: the file stem under /images/sites/skills/ and its description. */
export interface Pic {
  src: string;
  alt: string;
}

/**
 * How an inner page ends: a lead-in to the next page (a section whose title leads into one tile),
 * then the closing statement before the ink pill into REZICS.
 */
export interface End {
  next: string;
  closing: string;
}

export interface SkillsStrings {
  ui: {
    nextPage: string;
    nextSite: string;
  };
  landing: {
    hero: { eyebrow: string; headline: string[]; lede: string; pic: Pic };
    layers: Head & { rows: Row[] };
    files: Head & { body: string; link: string; pic: Pic };
    statement: Said;
    pages: Head & { tiles: { slug: string; line: string }[] };
    neighbours: Head & { tiles: { to: KindId; line: string }[] };
    closing: { title: string; body: string };
  };
  directory: {
    head: { headline: string[]; lede: string };
    specimens: Head & { rows: Row[] };
    filters: Head & { rows: Row[] };
    statement: Said;
    lists: Head & { body: string; pic: Pic };
    views: Head & { rows: Row[] };
    end: End;
  };
  versions: {
    head: { headline: string[]; lede: string };
    frontmatter: Head & { rows: KeyRow[] };
    files: Head & { rows: FileRow[] };
    history: Head & { body: string[]; pic: Pic };
    historyExample: Head & { rows: Row[] };
    packages: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  evidence: {
    head: { headline: string[]; lede: string };
    declaration: Head & { code: string; codeLabel: string; caption: string };
    record: Head & { rows: Row[] };
    rules: Head & { rows: Row[] };
    opinions: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  use: {
    head: { headline: string[]; lede: string };
    steps: Head & { rows: Row[] };
    agent: Head & { paragraphs: [string, string]; link: string };
    later: Head & { rows: Row[] };
    end: End;
  };
  publish: {
    head: { headline: string[]; lede: string };
    import: Head & { body: string; pic: Pic };
    steps: Head & { rows: Row[] };
    limits: Head & { rows: Row[]; after: string };
    statement: Said & { note: string; rows: Row[] };
    credits: Head & { rows: Row[] };
    end: End & { nextLine: string };
  };
}

const skills = {
  id: 'skills',
  base: '/skills/',
  name: 'Skill Hub',
  theme: { kind: 'skills' },
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'Skill Hub: Skills-Verzeichnis für KI-Agenten',
        description:
          'Skill Hub führt Skills für KI-Agenten. Volltext, Dateien, Versionen und datierte Kompatibilitätsnachweise sind einsehbar. Bewertungen und Diskussionen gehören zur jeweiligen Version, damit du sie vor der Verwendung prüfen kannst.',
      },
    },
    {
      slug: 'directory',
      label: 'Verzeichnis',
      meta: {
        title: 'Skill-Hub-Verzeichnis: ein Skill pro Zeile',
        description:
          'Finde Skills im Skill Hub anhand einer kurzen Beschreibung. Du kannst nach allen erfassten Merkmalen filtern und die Ergebnisse bis zum Ende durchsehen. Folgen kannst du auch den Listen anderer und deinen gespeicherten Ansichten. Bei passenden neuen Skills erhältst du eine Nachricht.',
      },
    },
    {
      slug: 'versions',
      label: 'Versionen und Dateien',
      meta: {
        title: 'Skill-Seite: Volltext, Dateien und Versionen',
        description:
          'Die Skill-Seite zeigt die vollständige SKILL.md und führt alle Dateien mit Rolle und Hash auf. Ausführbare Dateien sind gekennzeichnet. Inhalt, Lizenz und Quelle sind für jede Version festgehalten. Eine neue Version ersetzt keine ältere.',
      },
    },
    {
      slug: 'evidence',
      label: 'Nachweise und Bewertungen',
      meta: {
        title: 'Kompatibilitätsnachweise und Bewertungen für Skills',
        description:
          'Kompatibilitätsangaben von Skill-Autoren sind zunächst nur Behauptungen. Skill Hub hält zusätzlich fest, wer wann welchen KI-Agenten, welche Version und welche Sprache verwendet hat. Bewertungen und Diskussionen sind ebenfalls an die jeweilige Version gebunden.',
      },
    },
    {
      slug: 'use',
      label: 'Für deinen Agenten',
      meta: {
        title: 'Gib deinem KI-Agenten einen Skill',
        description:
          'Wenn du einen Skill im Skill Hub gefunden hast, lies zuerst den Volltext und die Dateien und prüfe die Kompatibilitätsnachweise. Wähle dann eine Version zum Herunterladen oder Kopieren, fixiere die benötigten Pakete und folge dem Skill für Aktualisierungen. Dein KI-Agent kann dieselben Daten auch über API und MCP lesen.',
      },
    },
    {
      slug: 'publish',
      label: 'Skill veröffentlichen',
      meta: {
        title: 'Einen Skill im Skill Hub veröffentlichen',
        description:
          'Importiere einen Skill-Ordner im richtigen Format in den Skill Hub. Jedes Byte bleibt unverändert, Skripte werden nicht ausgeführt und unbekannte Felder bleiben erhalten. Bei jeder Veröffentlichung werden Dateien, Lizenz und Quelle festgehalten und eine neue Version erstellt.',
      },
    },
  ],
  strings: {
    ui: {
      nextPage: 'Nächste Seite',
      nextSite: 'Nächste Website',
    },
    landing: {
      hero: {
        eyebrow: 'Skill Hub',
        headline: ['Bevor du ihn deinem KI-Agenten gibst,', 'lies alles genau durch.'],
        lede: 'Im Skill Hub kannst du die Skills für KI-Agenten genau prüfen. Vollständige Anleitung, Dateien, Versionen und datierte Nutzungsberichte sind vor der Auswahl einsehbar.',
        pic: {
          src: 'fold',
          alt: 'Ein halb gefaltetes limettengrünes Blatt liegt über versetzt gestapelten cremeweißen, hellgrünen und hellblauen Blättern, deren Kanten sichtbar bleiben.',
        },
      },
      layers: {
        eyebrow: 'Lesereihenfolge',
        headline: ['Ein Skill hat drei Ebenen,', 'gelesen in der Reihenfolge des Agenten.'],
        lead: 'Am Beispiel eines Skills zum Erfassen von Figuren in Kapiteln: Zuerst liest du Name und Beschreibung, dann die vollständige Anleitung und zuletzt die für die Aufgabe benötigten Dateien. Skill Hub zeigt sie in derselben Reihenfolge.',
        rows: [
          {
            title: 'Eine Zeile',
            body: 'Die Beschreibung von chapter-cast lautet: „Figuren eines Kapitels mit Absatzpositionen auflisten.“ Der Agent liest diesen Satz zuerst und prüft, ob der Skill zur Aufgabe passt.',
          },
          {
            title: 'Eine Seite',
            body: 'In SKILL.md steht: „Führe zuerst Figuren und Aliase auf und ergänze die Textposition. Ohne Quelle als nicht gefunden markieren.“ Der Agent liest diese Schritte und Grenzen nur, wenn er Figuren erfassen soll.',
          },
          {
            title: 'Benötigte Dateien',
            body: 'references/aliases.md zeigt das Zuordnungsformat für Figuren, Aliase und Textpositionen. Der Agent liest diese Referenzdatei nur, wenn er Aliase abgleichen muss. Weitere Dateien sind einzeln aufgeführt.',
          },
        ],
      },
      files: {
        eyebrow: 'Dateien',
        headline: ['Jede Datei ist aufgeführt,', 'ausführbare sind gekennzeichnet.'],
        body: 'Für SKILL.md, scripts/, references/, assets/ und Dateien, die das Format nicht benennt, werden Pfad, Rolle und Hash festgehalten. Auch Dateien, die in SKILL.md erwähnt, aber im Ordner nicht vorhanden sind, werden angezeigt.',
        link: 'Versionen und Dateien ansehen',
        pic: {
          src: 'folder',
          alt: 'Ein limettengrünes Blatt ist zu einem Ordner gefaltet. Unter dem aufgeklappten Deckel liegen cremeweiße, hellgrüne, hellblaue und senfgelbe Blätter mit sichtbaren Kanten.',
        },
      },
      statement: {
        text: 'Ein Eintrag ist keine Empfehlung.',
        muted:
          'Lies zuerst den Volltext und die Dateien, dann entscheide selbst. Beim Import speichert REZICS den Skill, führt aber keine Befehle aus.',
      },
      pages: {
        eyebrow: 'Diese Website',
        headline: ['Einen Skill finden', 'und deinen eigenen veröffentlichen.'],
        tiles: [
          { slug: 'directory', line: 'Skills anhand einer Beschreibung finden' },
          { slug: 'versions', line: 'Volltext, alle Dateien und Versionen' },
          { slug: 'evidence', line: 'Wer was unter welchen Bedingungen verwendet hat' },
          { slug: 'use', line: 'Eine Version auswählen und dem KI-Agenten geben' },
          { slug: 'publish', line: 'Ein Ordner, eine Identität' },
        ],
      },
      neighbours: {
        eyebrow: 'Verbindungen',
        headline: ['Ein Skill besteht aus Text und Dateien.', 'Was er verwendet, hat eigene Seiten.'],
        lead: 'Pakete, die ein Skill angibt, haben eigene Versionen im Softwareverzeichnis. Skills und MCP-Server derselben Autorin oder desselben Autors sind mit derselben Identität verknüpft. Das lokale Wiki-Toolkit von REZICS enthält ebenfalls einen Skill, mit dem ein KI-Agent belegte Angaben aus Büchern und visuellen Romanen extrahiert.',
        tiles: [
          { to: 'software', line: 'Vom Skill benötigte Pakete' },
          { to: 'mcp', line: 'Werkzeuge für deinen Agenten' },
          { to: 'books', line: 'Belegte Angaben kapitelweise vorschlagen' },
          { to: 'visual-novels', line: 'Quellen in Spielskripten finden' },
        ],
      },
      closing: {
        title: 'Beginne mit einer Zeile.',
        body: 'Suche Skills auf REZICS, lies Volltext, Dateien und Nachweise und gib den Skill dann deinem KI-Agenten.',
      },
    },
    directory: {
      head: {
        headline: ['Eine Zeile, ein Skill,', 'ein Satz.'],
        lede: 'Jede Zeile im Verzeichnis enthält nur zwei Angaben: den Skill-Namen und einen Satz des Autors. Ein KI-Agent entscheidet anhand dieses Satzes, ob er einen Skill verwendet. Auch du beginnst deine Auswahl hier.',
      },
      specimens: {
        eyebrow: 'Beispielverzeichnis',
        headline: ['Lies einen Satz', 'und entscheide, ob es passt.'],
        lead: 'Namen und Beschreibungen sind Beispiele. Die beiden Skills lösen unterschiedliche Aufgaben, die der Beschreibungssatz klar unterscheidet.',
        rows: [
          { title: 'chapter-cast', body: 'Figuren und Aliase in Kapiteln mit Absatzpositionen erfassen. Zum Prüfen einer Figurenliste.' },
          { title: 'quote-check', body: 'Zitate einzeln mit dem Original abgleichen. Quellenpositionen und unbelegte Sätze auflisten.' },
        ],
      },
      filters: {
        eyebrow: 'Filter',
        headline: ['Nach deinen Kriterien filtern,', 'auch kombiniert.'],
        lead: 'Die verfügbaren Filter lassen sich kombinieren.',
        rows: [
          { title: 'Suche', body: 'Suche mit Begriffen aus deiner Aufgabe, etwa „Figuren in Kapiteln erfassen“ oder „Zitate prüfen“.' },
          { title: 'Lizenz', body: 'Nur Skills mit einer bestimmten Lizenz anzeigen.' },
          { title: 'Sprache', body: 'Nach der Sprache der Anleitung oder der dokumentierten Aufgabe filtern.' },
          { title: 'Kompatibilitätsnachweise', body: 'Nur Skills mit Nachweisen für einen bestimmten KI-Agenten und eine bestimmte Version anzeigen.' },
          { title: 'Aktualisierungsdatum', body: 'Nach dem Datum der letzten Veröffentlichung sortieren oder filtern.' },
        ],
      },
      statement: {
        text: 'Bis zum letzten Eintrag blättern.',
        muted: 'Die Anzahl ist als genau oder geschätzt gekennzeichnet. Weitere Ergebnisse bleiben sichtbar.',
      },
      lists: {
        eyebrow: 'Listen',
        headline: ['Von anderen zusammengestellt.'],
        body: 'Eine Liste ordnet die Elemente eines Arbeitsablaufs und erklärt jede Auswahl. Neben Skills kann sie MCP-Server, APIs oder Software enthalten. Du kannst die ganze Liste exportieren oder ihr folgen. Neue Einträge der zusammenstellenden Person werden dir angezeigt.',
        pic: {
          src: 'bundle',
          alt: 'Fünf unterschiedlich große limettengrüne, cremeweiße, hellblaue und senfgelbe Blätter sind gestapelt und mit einem limettengrünen Streifen gebündelt.',
        },
      },
      views: {
        eyebrow: 'Ansicht',
        headline: ['Speichere deine Kriterien', 'und folge der Ansicht.'],
        lead: 'Du kannst Filter als Ansicht speichern. Wenn du der Ansicht folgst, erscheinen passende neue Skills in deinem Feed.',
        rows: [
          { title: 'Suche', body: 'Filter einstellen.' },
          { title: 'Ansicht', body: 'Speichern und benennen.' },
          { title: 'Folgen', body: 'Bei neuen Ergebnissen benachrichtigt werden.' },
        ],
      },
      end: {
        next: 'Wenn du den Skill findest, öffne ihn.',
        closing: 'Der gesuchte Skill steht vielleicht schon in der nächsten Zeile.',
      },
    },
    versions: {
      head: {
        headline: ['Öffne einen Skill,', 'und sieh alles darin.'],
        lede: 'Die Skill-Seite ist die zweite Ebene: der Originaltext von SKILL.md und jede mitgelieferte Datei. Vor der Übergabe an deinen KI-Agenten kannst du jedes Wort lesen, das auch der Agent sieht.',
      },
      frontmatter: {
        eyebrow: 'SKILL.md',
        headline: ['Die ersten Zeilen,', 'so liest REZICS sie.'],
        lead: 'Beispiel für einen Skill-Ordner.',
        rows: [
          {
            key: 'name',
            value: 'chapter-cast',
            body: 'Der Name enthält nur Kleinbuchstaben, Ziffern und Bindestriche und muss dem Ordnernamen entsprechen. Er kennzeichnet den Skill, beweist aber nicht, dass zwei gleichnamige Skills identisch sind.',
          },
          {
            key: 'description',
            value: 'Figuren eines Kapitels mit Absatzpositionen auflisten. Zum Erstellen einer Figurenliste.',
            body: 'Dieser Satz erscheint im Verzeichnis und wird auch vom KI-Agenten zuerst gelesen.',
          },
          {
            key: 'license',
            value: 'Apache-2.0',
            body: 'Die Lizenz wird mit der erklärenden Person und dem Datum an der Version festgehalten. Das ist eine Angabe, keine rechtliche Prüfung.',
          },
          {
            key: 'compatibility',
            value: 'Benötigt einen Agenten mit Zugriff auf lokale Dateien',
            body: 'Die vom Autor eingetragene Kompatibilität ist als „unabhängig zu prüfen“ gekennzeichnet und gilt nicht als bestätigt.',
          },
          {
            key: 'allowed-tools',
            value: 'read-file',
            body: 'Erlaubte Werkzeuge sind ebenfalls nur angegeben und als „unabhängig zu prüfen“ gekennzeichnet.',
          },
          { key: 'Weitere Felder', body: 'Felder außerhalb der Spezifikation werden im Original erhalten und gesondert aufgeführt.' },
        ],
      },
      files: {
        eyebrow: 'Dateien',
        headline: ['Eine Zeile pro Datei.'],
        lead: 'Zu jeder Datei werden Pfad, Rolle und Hash festgehalten. Die heruntergeladenen Bytes stimmen mit den Angaben auf der Seite überein.',
        rows: [
          { title: 'Anleitung', path: 'SKILL.md', body: 'Der vollständige Text wird unverändert angezeigt.' },
          {
            title: 'Skripte',
            path: 'scripts/',
            mark: 'Ausführbar',
            body: 'Ausführbare Dateien sind gekennzeichnet. Beim Import speichert REZICS sie nur und führt sie nicht aus.',
          },
          { title: 'Referenzen', path: 'references/', body: 'Dateien, die der KI-Agent nur bei Bedarf liest.' },
          { title: 'Materialien', path: 'assets/', body: 'Vorlagen, Bilder und Datendateien werden ebenfalls mit Pfad und Hash aufgeführt.' },
          { title: 'Weitere', body: 'Auch nicht in der Spezifikation benannte Ordner und Dateien werden einzeln aufgeführt.' },
          { title: 'Fehlende Datei', mark: 'Fehlt', body: 'Dateien, die in SKILL.md erwähnt, aber im Ordner nicht vorhanden sind, werden markiert.' },
        ],
      },
      history: {
        eyebrow: 'Versionen',
        headline: ['Jede Version bleibt erhalten.'],
        body: [
          'Jede Änderung nach der Veröffentlichung wird zur nächsten Version. Dateien und Hash der vorherigen Version bleiben unverändert. Die Version, die du verwendest, wird nicht ersetzt.',
          'Die Versionen sind nach Veröffentlichung geordnet und enthalten Datum und Änderungsprotokoll. Du kannst bis zur ersten Version zurückblättern. Wer dem Skill folgt, erhält diese Einträge.',
        ],
        pic: {
          src: 'fan',
          alt: 'Fünf Blätter fächern von einer Ecke auf. Das vordere ist limettengrün, die folgenden werden immer heller und das letzte ist cremeweiß.',
        },
      },
      historyExample: {
        eyebrow: 'Beispielversionen',
        headline: ['Derselbe Skill,', 'zwei datierte Versionen.'],
        lead: 'chapter-cast dient als Beispiel. Datum und Inhalt sind Beispiele. Jede Version legt Dateien und Hash fest. Eine neue Version überschreibt die vorherige nicht.',
        rows: [
          { title: '1.1.0', body: '19. Oktober 2026. Ergänzt Zuordnungsregeln für Figurenaliasnamen und die zugehörige Referenzdatei.' },
          { title: '1.0.0', body: '12. Oktober 2026. Erfasst die Stellen, an denen Figuren erstmals auftreten. Die Originaldateien bleiben unverändert. Bewertungen und Kommentare beziehen sich weiterhin auf diese Version.' },
        ],
      },
      packages: {
        eyebrow: 'Pakete',
        headline: ['Benötigte Pakete nach den Angaben der Autoren,', 'unklare Angaben deutlich markiert.'],
        rows: [
          {
            title: 'Nach Ökosystem getrennt',
            body: 'Jedes Paket ist seinem Ökosystem zugeordnet. Gleichnamige Pakete in verschiedenen Ökosystemen gelten nicht als dasselbe Paket.',
          },
          { title: 'Erforderlich und optional', body: 'Jede Abhängigkeit ist als erforderlich oder optional gekennzeichnet.' },
          { title: 'Fehlend und nicht unterstützt', body: 'Fehlende Angaben und nicht unterstützte Ökosysteme sind entsprechend gekennzeichnet.' },
        ],
      },
      statement: {
        text: 'Jeder Skill hat Namen.',
        muted:
          'Autoren und Maintainer sind nach Rolle aufgeführt und mit ihren anderen Werken und Rezensionen verknüpft.',
      },
      end: {
        next: 'Lies den Inhalt und sieh dir an, wer den Skill verwendet hat.',
        closing: 'Lies jeden Skill, bevor du ihn deinem KI-Agenten gibst.',
      },
    },
    evidence: {
      head: {
        headline: ['Eine Angabe ist eine Angabe,', 'ein Nachweis ist ein Nachweis.'],
        lede: 'Autoren können angeben, in welcher Umgebung ein Skill funktionieren soll. Das ist eine Behauptung. Ein Nachweis entsteht, wenn jemand eine Aufgabe mit einem KI-Agenten ausprobiert und Datum sowie Methode festhält. Skill Hub trennt beides.',
      },
      declaration: {
        eyebrow: 'Angabe',
        headline: ['Was Autoren schreiben,', 'ist eine Kompatibilitätsangabe.'],
        lead: 'REZICS übernimmt die Kompatibilitätsangaben und erlaubten Werkzeuge aus SKILL.md unverändert. Sie sind als unabhängig zu prüfen gekennzeichnet und gelten nicht als bestätigt.',
        code: '# Anfang von SKILL.md (Beispiel)\ncompatibility: Für KI-Agenten mit Unterstützung für Skill-Ordner',
        codeLabel: 'Kompatibilitätsangabe am Anfang einer Beispiel-SKILL.md',
        caption: 'REZICS übernimmt diese Zeile unverändert und kennzeichnet sie als unabhängig zu prüfen.',
      },
      record: {
        eyebrow: 'Beispielnachweis',
        headline: ['Dieselbe Version,', 'acht festgehaltene Angaben.'],
        lead: 'Das Format zeigt beispielhaft einen Nachweis zu chapter-cast 1.1.0. Datum, Agentenversion, Methode und Ergebnis sind Beispieldaten und zeigen, wie ein Eintrag zu lesen ist.',
        rows: [
          { title: 'Aufgabe', body: 'Figuren, Aliasnamen und Textstellen aus einem Kapitel-Auszug für den Abgleich einer Figurenliste erfassen.' },
          { title: 'KI-Agent', body: 'Ein lokaler Agent mit Zugriff auf Skill-Ordner, ohne zusätzliche Werkzeuge.' },
          { title: 'Agentenversion', body: 'Beispielclient 1.0.0. Festgehalten ist die beim Test verwendete Version.' },
          { title: 'Skill-Version', body: 'chapter-cast 1.1.0, eine Beispielversion mit Aliaszuordnungen.' },
          { title: 'Sprache', body: 'Eingabe und Ausgabe sind auf Traditionellem Chinesisch. Aliase folgen der Schreibweise im Original.' },
          { title: 'Datum', body: '19. Oktober 2026, derselbe Tag wie bei der Beispielversion 1.1.0 auf der Versionsseite.' },
          { title: 'Methode', body: 'Ein kurzer Abschnitt mit drei Figuren und zwei Aliasgruppen dient als Eingabe. Ausgabe und Textstellen werden einzeln abgeglichen.' },
          { title: 'Beobachtung', body: 'Das Beispielergebnis nennt drei Figuren, zwei Aliasgruppen und die zugehörigen Positionen. Es lässt keine Rückschlüsse auf andere Texte oder Agenten zu.' },
        ],
      },
      rules: {
        eyebrow: 'Nachweise lesen',
        headline: ['So liest du Nachweise'],
        rows: [
          { title: 'Kein Nachweis bedeutet nicht unbrauchbar', body: 'Nicht getestete Kombinationen sind als „ohne Nachweis“ gekennzeichnet, nicht als inkompatibel.' },
          {
            title: 'Ältere Nachweise tragen ein Datum',
            body: 'Jeder Nachweis nennt Datum und Version. Nach einer Änderung am KI-Agenten oder Skill wird ein alter Nachweis nicht als Ergebnis für die neue Version ausgegeben.',
          },
          { title: 'Widersprüchliche Ergebnisse bleiben erhalten', body: 'Weichen zwei Ergebnisse voneinander ab, bleiben beide mit ihrer jeweiligen Methode erhalten. Du kannst sie vergleichen.' },
          {
            title: 'Auch Agenten können Nachweise einreichen',
            body: 'Agenten können Nachweise einreichen. Sie müssen sich als Agent ausweisen, ihren Betreiber und die Methode nennen. Veröffentlicht werden die Angaben erst nach menschlicher Prüfung.',
          },
          { title: 'Ein Widerruf betrifft nur die eigene Bestätigung', body: 'Widerruft eine Quelle ihre Bestätigung, wird nur diese zurückgenommen. Der Verlauf bleibt erhalten und Nachweise anderer Quellen sind nicht betroffen.' },
        ],
      },
      opinions: {
        eyebrow: 'Bewertungen und Diskussionen',
        headline: ['Bewertungen und Kommentare', 'bleiben bei der genannten Version.'],
        rows: [
          {
            title: 'Bewertung',
            body: 'Eine Bewertung gilt nur für die Version, auf die sie sich bezieht. Neue Versionen haben eigene Bewertungen. Ein versionsübergreifender Gesamtwert wird getrennt berechnet und erklärt. Neben jeder Bewertung stehen Anzahl und Verteilung. Bei zu wenigen Bewertungen wird kein Durchschnitt angezeigt.',
          },
          {
            title: 'Kommentare',
            body: 'Kommentare zu Problemen oder zur Verwendung nennen die damals aktuelle Version. Auch nach einer Aktualisierung bezieht sich ein älterer Kommentar weiter auf diese Version.',
          },
        ],
      },
      statement: {
        text: 'Ein Nachweis ist keine Sicherheitsgarantie.',
        muted:
          'Jeder Nachweis nennt Umgebung und Version. Lies Anleitung und Skripte, bevor du einen Skill verwendest.',
      },
      end: {
        next: 'Sieh dir die Nachweise an und wende den Skill an.',
        closing: 'Lies die Nachweise und entscheide selbst.',
      },
    },
    use: {
      head: {
        headline: ['Erst lesen,', 'dann deinem KI-Agenten geben.'],
        lede: 'Ein Skill enthält Anweisungen für einen Agenten und manchmal ausführbare Skripte. Lies ihn im Skill Hub und lade erst nach deiner Entscheidung eine bestimmte Version herunter.',
      },
      steps: {
        eyebrow: 'Sechs Schritte',
        headline: ['Vom Finden bis zur Verwendung,', 'in sechs Schritten.'],
        rows: [
          { title: 'Finden', body: 'Suche anhand einer Beschreibung im Verzeichnis oder wähle aus einer zusammengestellten Liste.' },
          { title: 'Lesen', body: 'Öffne die Skill-Seite. Lies SKILL.md vollständig und prüfe, welche Dateien enthalten und ausführbar sind.' },
          { title: 'Nachweise prüfen', body: 'Prüfe, ob es Nachweise für deinen KI-Agenten und deine Version gibt und wie aktuell sie sind.' },
          {
            title: 'Version auswählen und laden',
            body: 'Wähle eine Version und lade ihren Ordner herunter. Dateien und Hash stimmen mit der Seite überein. Du kannst auch nur die Anleitung aus SKILL.md kopieren. Lege sie an dem Ort ab, den die Dokumentation deines Agenten für Skills vorsieht.',
          },
          {
            title: 'Pakete festlegen',
            body: 'Lege passende Paketversionen und Dateien genau fest. Wenn eine Abhängigkeit nicht aufgelöst werden kann, wird der Grund angezeigt. Ein installiertes Paket darf nicht automatisch seine Skripte ausführen.',
          },
          { title: 'Folgen', body: 'Folge dem Skill. Lies bei einer neuen Version zuerst die Änderungen und entscheide dann, ob du wechselst.' },
        ],
      },
      agent: {
        eyebrow: 'API und MCP',
        headline: ['Dein KI-Agent', 'kann auch Skill Hub lesen.'],
        paragraphs: [
          'Jede Aktion auf der Website hat einen API-Vorgang. Über die REZICS-API oder den MCP-Server kann ein Agent Skills suchen und Volltext sowie Dateiliste lesen. Er erhält dieselben Daten wie du auf der Seite.',
          'In der REZICS-API und über MCP gelten Skill-Texte immer als Daten. Anweisungen darin verleihen niemandem Berechtigungen.',
        ],
        link: 'API und MCP auf der Entwickler-Website',
      },
      later: {
        eyebrow: 'Neue Versionen',
        headline: ['Eine neue Version ist da,', 'prüfe erst die Änderungen.'],
        rows: [
          { title: 'Benachrichtigungsstufen', body: 'Wähle beim Folgen alle Hinweise, ausgewählte Hinweise oder keine Benachrichtigungen.' },
          { title: 'Änderungen zuerst ansehen', body: 'Jede neue Version enthält ein Änderungsprotokoll. Dateien und Hashes lassen sich einzeln mit deiner Version vergleichen.' },
          { title: 'Bei deiner Version bleiben', body: 'Wenn du nicht wechseln möchtest, verwendest du deine Version weiter. Ihre Seite wird nicht zur neuen Version.' },
          { title: 'Problem melden', body: 'Melde Probleme in der Skill-Diskussion und nenne die verwendete Version und den KI-Agenten.' },
          {
            title: 'Melden',
            body: 'Wenn ein Skill etwas anderes tut als beschrieben, kannst du ihn ohne Konto melden. Das Verbreiten von Schadsoftware verstößt gegen die Nutzungsregeln von REZICS.',
          },
        ],
      },
      end: {
        next: 'Jetzt kannst du selbst einen Skill schreiben.',
        closing: 'Wähle eine Version und gib sie deinem KI-Agenten.',
      },
    },
    publish: {
      head: {
        headline: ['Ein Ordner,', 'wird zu einem eigenen Eintrag.'],
        lede: 'Skill Hub nimmt Skills im richtigen Format auf: ein Ordner mit einer SKILL.md. Nach dem Import hat der Skill einen eigenen Eintrag, eine eigene Seite und seine erste Version.',
      },
      import: {
        eyebrow: 'Import',
        headline: ['Der Import speichert nur,', 'er führt nichts aus.'],
        body: 'Nach diesem Schritt hat der Ordner einen eigenen Skill-Eintrag. Keine Datei darin wird verändert.',
        pic: {
          src: 'slit',
          alt: 'Ein Schlitz geht durch die Mitte eines limettengrünen Blatts. Ein cremeweißer Streifen läuft von oben hindurch und tritt unten wieder aus. Darunter ist ein Stück senfgelbes Papier zu sehen.',
        },
      },
      steps: {
        eyebrow: 'Sechs Punkte',
        headline: ['Beim Import', 'bleibt jedes Byte unverändert.'],
        rows: [
          { title: 'Unverändert speichern', body: 'Jedes Byte jeder Datei wird gespeichert. Pfade müssen innerhalb des Ordners bleiben.' },
          { title: 'Nichts ausführen', body: 'Skripte werden als Dateien gespeichert und nicht ausgeführt. Auch Anweisungen in SKILL.md werden nicht ausgeführt.' },
          { title: 'Verweise prüfen', body: 'Lokale Dateien, die in SKILL.md erwähnt werden, aber im Ordner fehlen, werden als fehlend aufgeführt.' },
          { title: 'Unbekannte Felder erhalten', body: 'Felder außerhalb der Spezifikation bleiben erhalten und werden als nicht ausgewertet gekennzeichnet. Ihre Bedeutung wird nicht verändert.' },
          {
            title: 'Kein Ordner wird zum Skill gemacht',
            body: 'Stimmen Name und Ordner nicht überein oder fehlt die Beschreibung, wird der Import angehalten. Ein beliebiger Ordner wird nicht als Skill ausgegeben.',
          },
          { title: 'Eine Version veröffentlichen', body: 'Bei der Veröffentlichung werden Hash, Lizenz und Quelle jeder Datei festgehalten. Spätere Änderungen ergeben eine neue Version.' },
        ],
      },
      limits: {
        eyebrow: 'Grenzen',
        headline: ['Unterstützte Größen'],
        rows: [
          { title: '128 Dateien', body: 'Maximale Anzahl Dateien pro Import.' },
          { title: '1 MiB', body: 'Maximale Gesamtgröße aller Dateien.' },
          { title: '64 KiB', body: 'Maximale Größe von SKILL.md.' },
          { title: '64 Zeichen', body: 'Maximale Namenslänge. Erlaubt sind Kleinbuchstaben, Ziffern und Bindestriche.' },
          { title: '1024 Zeichen', body: 'Maximale Länge der Beschreibung.' },
        ],
        after: 'Überschreitet ein Ordner die Grenzen oder entspricht nicht dem Format, wird der Import angehalten und der Grund angezeigt.',
      },
      statement: {
        text: 'Die Beschreibung wird zuerst gelesen.',
        muted:
          'Beschreibe klar, was der Skill tut und wann er verwendet werden soll. So verstehen Menschen und KI-Agenten ihn.',
        note: 'Zwei Beispiele für eine Skill-Beschreibung.',
        rows: [
          {
            title: 'Klar formuliert',
            body: 'Erstelle eine Liste der Figuren in einem Kapitel und ergänze die Absatzposition. Verwende den Skill, um eine Figurenliste zu erstellen oder Auftritte in einem Kapitel zu prüfen.',
          },
          { title: 'Zu knapp', body: 'Romane bearbeiten.' },
        ],
      },
      credits: {
        eyebrow: 'Urheberschaft und Rechte',
        headline: ['Urheberschaft, Rechte und Zusammenarbeit'],
        rows: [
          { title: 'Autoren und Maintainer', body: 'Personen werden nach Rolle mit ihrer REZICS-Identität aufgeführt und können abonniert werden.' },
          { title: 'Lizenz', body: 'Die von dir angegebene Lizenz wird für jede Version mit Person und Datum festgehalten.' },
          { title: 'Die Rechte bleiben bei dir', body: 'Durch den Upload eines Skills verlierst du keine bestehenden Rechte an deinem geistigen Eigentum.' },
          {
            title: 'Den Skill gemeinsam mit einem KI-Agenten pflegen',
            body: 'Ein Agent kann Änderungen vorschlagen und muss Zielversion, Änderung, Beleg und Methode angeben sowie sich als Agent kennzeichnen. Die Änderung wird erst nach menschlicher Prüfung übernommen. Jede Übernahme wird bestätigt.',
          },
          { title: 'Zurücknehmen', body: 'Falsch übernommene Änderungen können zurückgenommen werden. Die Korrektur wird protokolliert, der ursprüngliche Verlauf bleibt bestehen.' },
        ],
      },
      end: {
        next: 'Neben Skills gibt es auch APIs.',
        nextLine: 'Lies Aufruf und Version genau',
        closing: 'Dein Skill hat auf REZICS einen eigenen Eintrag.',
      },
    },
  },
} satisfies MiniSite<SkillsStrings>;

export default skills;
