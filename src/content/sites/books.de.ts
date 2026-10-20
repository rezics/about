// 書庫 (books): every visible string of the books site. Design record and sources:
// src/sites/books/SITE.md and src/sites/books/facts.md. The eight part notes and the kind's
// name come from src/content/kinds.ts and are imported by the pages, never copied here.
// Shapes follow the v3 parts (V3-SPEC): hero, sections (eyebrow, heading, lead), photo rows,
// facts lists (title left, text right), statements (a line and its muted continuation), tile
// masonry and the closing.
import type { MiniSite } from '../schema';

export type TitledText = {
  title: string;
  body: string;
};

/** A section: eyebrow label, serif heading, lead text. */
type Head = { label: string; headline: string; lead?: string };

/** A large serif statement: `text`, then its muted continuation `sub`; `note` sits under it. */
export type StatementText = { text: string; sub: string; note?: string };

/** A paper still-life picture: its alt text. Files live in public/images/sites/books/. */
type Picture = { alt: string };

export type BooksStrings = {
  /** Shared labels across the site's pages; `closing` ends every page. */
  common: { contents: string; nextPage: string; nextSite: string; closing: { title: string; body: string } };
  landing: {
    hero: { headline: string; lede: string } & Picture;
    /** Photo row: the editions picture beside one fictional series' editions (示意). */
    editions: Head & { lead: string; caption: string; link: string } & Picture;
    /** Facts list: how the bookmark counts across editions and languages (示意). */
    progress: Head & { steps: TitledText[] };
    reading: StatementText;
    /** Photo row: the folded strip beside writing and publishing. */
    writing: Head & { body: string[]; link: string } & Picture;
    /** Tile masonry of the site's own pages: a short line per tile. */
    pages: Head & { rows: { slug: string; line: string }[] };
    parts: Head;
    /** Tile masonry of neighbouring kinds. */
    connections: Head & { tiles: { kind: 'anime' | 'manga' | 'visual-novels' | 'games'; line: string }[] };
  };
  work: {
    hero: { headline: string; lede: string };
    /** The example's title page (text only, per EXAMPLE-WORK.md). */
    example: { title: string; original: string; author: string; caption: string };
    sections: Head & { rows: (TitledText & { example: string })[] };
    action: Head & { rows: TitledText[]; caption: string };
    ratings: Head & { rows: TitledText[] };
    edit: Head & { rows: TitledText[] };
    languages: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  wiki: {
    /** The page head beside the cut-out picture. */
    hero: { headline: string; lede: string } & Picture;
    flow: Head & { steps: TitledText[] };
    position: Head & {
      control: string;
      positions: { label: string; chapter: number }[];
      groups: { people: string; events: string };
      source: string;
      aliases: string;
      entries: { group: 'people' | 'events'; name: string; aliases?: string; chapter: number; note: string }[];
      /** What a folded entry says: the chapter it appears in (`{n}`). */
      later: string;
      status: string;
      statusAll: string;
      rail: string;
      rules: string[];
    };
    text: StatementText & { facts: TitledText[] };
    /** Tile masonry of a wiki's own pages (示意, not links). */
    zone: Head & { tiles: { name: string; line?: string }[]; caption: string };
    review: Head & { states: TitledText[]; rules: string[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  editions: {
    /** The page head beside the stack picture. */
    hero: { headline: string; lede: string } & Picture;
    releases: Head & { kinds: TitledText[] };
    translations: Head & { rows: TitledText[]; stateLabel: string; states: string[]; notes: string[] };
    sameWork: Head & { rows: TitledText[]; caption: string };
    orders: Head & {
      rows: [string, string];
      tiles: string[];
      /** Reading order as indexes into `tiles`. */
      reading: number[];
      notes: TitledText[];
    };
    isbn: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  library: {
    /** The page head beside the three strips. */
    hero: { headline: string; lede: string } & Picture;
    /** Three reads of one book as three strips, the photograph seen flat (`share`: its length). */
    reads: Head & { rows: (TitledText & { share: number })[]; caption: string };
    move: Head & { steps: TitledText[]; retention: string };
    continue: StatementText;
    shelf: Head & { rows: TitledText[] };
    privacy: Head & { rows: TitledText[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  serial: {
    /** The page head beside the folded strip. */
    hero: { headline: string; lede: string } & Picture;
    safe: Head & { rows: TitledText[] };
    mirror: Head & { rows: TitledText[]; notes: string[] };
    ai: Head & { rows: TitledText[]; notes: string[] };
    world: Head & { items: string[] };
    backup: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  publish: {
    hero: { headline: string; lede: string };
    buy: Head & { steps: TitledText[]; caption: string };
    statement: Head & { rows: TitledText[]; note: string };
    distributed: Head & { rows: TitledText[]; policy: TitledText[] };
    community: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
};

const strings: BooksStrings = {
  common: {
    contents: 'Auf dieser Seite',
    nextPage: 'Nächste Seite',
    nextSite: 'Verwandte Arten',
    closing: {
      title: 'Was du als Nächstes liest, steht in deiner Bibliothek.',
      body: 'Jedes Buch, jede Ausgabe und jede Lektüre ist in einem Konto festgehalten.',
    },
  },

  landing: {
    hero: {
      headline: 'Ein Werk, alle Ausgaben und deine Lesestelle.',
      lede: 'Original und Übersetzungen, Einzelbände und Sammelbände bleiben getrennt und verweisen auf dasselbe Werk. Der nächste Band, das Wiki und Diskussionen richten sich nach deiner Lesestelle.',
      alt: 'Dunkelgrüne Papierstücke liegen in einer Reihe. Dazwischen steckt ein hellgrüner Streifen wie ein Lesezeichen.',
    },
    editions: {
      label: 'Ausgaben',
      headline: 'Jede Veröffentlichung wird einzeln erfasst.',
      lead: 'Bei derselben Light-Novel-Reihe sind das japanische Original, die chinesische und englische Ausgabe sowie ein chinesischer Sammelband jeweils eigene Veröffentlichungen mit unterschiedlichem Umfang. Ob mit ISBN, ohne ISBN oder nur online veröffentlicht: In der Bibliothek bleibt alles ein Werk.',
      caption: 'Beispiel: eine fiktive Light-Novel-Reihe mit zwölf Bänden.',
      link: 'Ausgaben und Reihen ansehen',
      alt: 'Grüne Papierstücke verschiedener Größe liegen mit bündiger linker Unterkante übereinander. Eines davon ist hellblau.',
    },
    progress: {
      label: 'Lesefortschritt',
      headline: 'Dein Lesezeichen zeigt, welcher Band als Nächstes kommt.',
      lead: 'Zurück zur zwölfbändigen Light Novel: Die chinesische Ausgabe reicht bis Band 6, die japanische bis Band 12. Du hast gerade Band 6 der chinesischen Ausgabe beendet.',
      steps: [
        { title: 'Jeder Band ist ein eigenes Werk', body: 'Jeder Band einer Reihe ist ein eigenes Werk. Band 7 bleibt dasselbe Werk, egal in welcher Sprache er erscheint.' },
        { title: 'Ein Sammelband zählt einmal', body: 'Der chinesische Sammelband mit den Bänden 1 bis 3 ist eine Veröffentlichung. Wenn du ihn beendet hast, zählen alle drei Bände als gelesen, ohne doppelt gezählt zu werden.' },
        { title: 'Der nächste Band in deiner Sprache', body: 'Band 7 ist auf Chinesisch noch nicht erschienen. Deine Bibliothek zeigt, dass du den aktuellen Stand dieser Ausgabe erreicht hast und informiert dich, wenn Band 7 erscheint.' },
        { title: 'Ein Sprachwechsel zählt mit', body: 'Wenn du zuerst die japanischen Bände 7 und 8 und danach wieder auf Chinesisch liest, zählen beide als gelesen. Übersetzungen sind verschiedene Textfassungen desselben Werks, dein Fortschritt bleibt erhalten.' },
        { title: 'Ein Buch zu besitzen heißt nicht, es gelesen zu haben', body: 'Ob das Buch in deinem Regal steht und ob du es gelesen hast, sind zwei getrennte Dinge.' },
      ],
    },
    reading: {
      text: 'Wiki und Diskussionen reichen bis zu deiner Lesestelle;',
      sub: 'Figuren, Ereignisse und Diskussionen aus späteren Kapiteln bleiben verborgen. Du kannst alle Inhalte jederzeit einblenden.',
    },
    writing: {
      label: 'Schreiben und Veröffentlichen',
      headline: 'Auch Autoren sind in derselben Bibliothek.',
      body: [
        'Autoren verfassen, planen und veröffentlichen hier ihre Fortsetzungskapitel. Leser lesen an der Stelle weiter, an der sie aufgehört haben.',
        'Vertraglich gebundene Kreative verkaufen lizenzierte, DRM-freie E-Books direkt an Leser. Die Shopseite steht neben den Diskussionen zum Werk.',
      ],
      link: 'Fortsetzungen schreiben',
      alt: 'Ein langer dunkelgrüner Papierstreifen ist zu Seiten gefaltet. Die zweite Hälfte liegt flach, an einer Falte liegt ein kleines hellgrünes Papierstück.',
    },
    pages: {
      label: 'Seiten der Bibliothek',
      headline: 'Bücher finden, lesen und schreiben.',
      rows: [
        { slug: 'work', line: 'Alles zu einem Werk beginnt auf dieser Seite' },
        { slug: 'wiki', line: 'Mit deinem KI-Agenten ein Wiki zum Buch erstellen' },
        { slug: 'editions', line: 'Übersetzungen, Sammelbände und Reihen klar geordnet' },
        { slug: 'library', line: 'Jede Lektüre korrekt festhalten' },
        { slug: 'serial', line: 'Kapitel für Kapitel schreiben und lesen' },
        { slug: 'publish', line: 'DRM-freie E-Books direkt an Leser verkaufen' },
      ],
    },
    parts: {
      label: 'Komponenten',
      headline: 'Acht Komponenten bilden die Bibliothek.',
      lead: 'Dieselben Komponenten bilden auch Anime, Manga und Spiele. Die Bibliothek nutzt davon diese acht.',
    },
    connections: {
      label: 'Verwandte Arten',
      headline: 'Die Geschichten aus Büchern finden sich auch in anderen Arten.',
      lead: 'Auf der Seite des Originals findest du alle Adaptionen.',
      tiles: [
        { kind: 'anime', line: 'Adaptionen als Anime sind damit verknüpft' },
        { kind: 'manga', line: 'Manga-Adaptionen werden separat bewertet' },
        { kind: 'visual-novels', line: 'Light Novels nutzen denselben Katalog und dieselbe Bibliothek' },
        { kind: 'games', line: 'Spiele desselben Autors unter derselben Identität' },
      ],
    },
  },

  work: {
    hero: {
      headline: 'Alles zu einem Werk beginnt auf dieser Seite.',
      lede: 'Die Werkseite ist das Zentrum der Bibliothek. Fakten, Bewertungen, deine Ausgabe und dein Fortschritt, Reihen und Adaptionen, Wiki und Diskussionen stehen in der Reihenfolge, in der du sie beim Lesen brauchst.',
    },
    example: {
      title: 'A Certain Magical Index',
      original: 'とある魔術の禁書目録',
      author: 'Kazuma Kamachi',
      caption: 'Der Titel erscheint in deiner Sprache, der Originaltitel steht daneben. Am folgenden Beispiel gehen wir die Seite von oben nach unten durch.',
    },
    sections: {
      label: 'Acht Abschnitte',
      headline: 'Acht Abschnitte von oben nach unten.',
      lead: 'Abschnitte, die ein Werk nicht benötigt, entfallen. Die übrigen behalten ihre feste Position und Verknüpfung.',
      rows: [
        {
          title: 'Identität und nächster Schritt',
          body: 'Cover, Titel, Autor und Bewertung, mit Skala, Anzahl und Umfang. Daneben stehen deine Ausgabe, dein Lesestatus und dein Fortschritt.',
          example: 'Du bist bei Band 5. Die Hauptschaltfläche lautet „Weiterlesen“.',
        },
        {
          title: 'Überblick',
          body: 'Eine spoilerfreie Zusammenfassung, grundlegende Angaben, einige Tags und Hinweise zum Inhalt. Klappe den Abschnitt auf, um alle Fakten, Quellen und die Funktion „Korrektur vorschlagen“ zu sehen.',
          example: 'Eine Light Novel von Kazuma Kamachi mit Illustrationen von Kiyotaka Haimura. Der Hauptzyklus erscheint seit 2004.',
        },
        {
          title: 'Deine Ausgabe und Bezugsquellen',
          body: 'Zuerst erscheint deine Ausgabe, danach passende Ausgaben und schließlich eine vollständige Liste mit Seitennavigation.',
          example: 'Das japanische Original sowie chinesische und englische Übersetzungen nennen jeweils ihre Übersetzer.',
        },
        {
          title: 'Bände und Beziehungen',
          body: 'Der nächste ungelesene Teil steht zuerst, gefolgt von den Bänden in Reihenfolge, Fortsetzungen und Adaptionen. Veröffentlichungsreihenfolge und empfohlene Lesereihenfolge bleiben getrennt.',
          example: 'Hauptzyklus, New Testament und Genesis Testament sind als Fortsetzungen miteinander verknüpft.',
        },
        {
          title: 'Wiki entdecken',
          body: 'Wichtige Figuren und Mitwirkende sowie eine Zeitlinie oder Kapitelübersicht bis zu deiner Lesestelle. Von dort gelangst du zu den Wiki-Seiten.',
          example: 'Wenn du bei Band 5 bist, endet die Zeitlinie dort.',
        },
        {
          title: 'Bewertungen und Rezensionen',
          body: 'Bewertungsverteilung und Anzahl sowie Frage, bewertende Person und bewertetes Werk. Filtere nach Ausgabe oder Sprache der Rezension. Für eine Rezension brauchst du keine Bewertung.',
          example: 'Die Bewertung der Geschichte wird getrennt von der einer Übersetzung berechnet.',
        },
        {
          title: 'Diskussionen und Community',
          body: 'Zum Werk, zu Bänden und Ausgaben gibt es jeweils eine Diskussion. Du musst keiner Community beitreten, um mitzulesen.',
          example: 'Wenn du über Band 5 sprechen möchtest, öffne die Diskussion direkt daneben.',
        },
        {
          title: 'Listen und Entdecken',
          body: 'Listen mit diesem Werk und Lesereihenfolgen nennen jeweils einen Grund. Darunter folgen Kennnummern, Quellen und der Änderungsverlauf.',
          example: 'Eine Einstiegsliste für Light Novels nennt, warum dieses Werk aufgenommen wurde.',
        },
      ],
    },
    action: {
      label: 'Hauptschaltfläche',
      headline: 'Oben gibt es nur eine Hauptschaltfläche.',
      lead: 'Die Beschriftung hängt davon ab, wie du mit dem Werk interagierst. Folgen und Zur Liste hinzufügen sind eigene Schaltflächen.',
      rows: [
        { title: 'Noch keine Ausgabe gewählt', body: 'Die Schaltfläche lautet „Ausgabe wählen“.' },
        { title: 'Ausgabe gewählt, noch nicht begonnen', body: 'Die Schaltfläche lautet „Lesen beginnen“.' },
        { title: 'Du liest gerade', body: 'Die Schaltfläche lautet „Weiterlesen“ und führt direkt zu deiner letzten Lesestelle.' },
      ],
      caption: 'Auf dem Smartphone wird das Cover zu einem kleinen Bild neben dem Titel. Identität, Ausgabe, Status und Schaltfläche sind alle auf dem ersten Bildschirm zu sehen.',
    },
    ratings: {
      label: 'Bewertungen',
      headline: 'Neben der Bewertung steht, worauf sie sich bezieht.',
      lead: 'Wer das Original liest, bewertet die Geschichte. Leser einer Übersetzung können zusätzlich die Übersetzung bewerten, Hörbuchhörer den Vortrag.',
      rows: [
        { title: 'Bewertetes Werk', body: 'Geschichte, Übersetzung und Vortrag werden getrennt bewertet und nicht zu einem Wert zusammengefasst.' },
        { title: 'Grundlage des Durchschnitts', body: 'Jeder Durchschnitt nennt, wer bewertet hat: alle, eine Community, der du angehörst, oder eine andere Community.' },
        { title: 'Reihe und einzelne Bände', body: 'Die Bewertung der Reihe wird getrennt von der einzelner Bände geführt.' },
      ],
    },
    edit: {
      label: 'Bearbeiten',
      headline: 'Eigene Einträge bearbeitest du direkt, gemeinsame Fakten per Vorschlag.',
      rows: [
        { title: 'Direkt ändern und rückgängig machen', body: 'Lesestatus, Fortschritt, Bewertungen und Listen. Änderungen lassen sich mit einem Klick rückgängig machen.' },
        { title: 'Korrektur vorschlagen und prüfen lassen', body: 'Fakten, Beziehungen, Titel und alternative Namen. Jeder Vorschlag enthält Quellenangaben und wird vor der Übernahme von Menschen geprüft.' },
      ],
    },
    languages: {
      text: 'Die Sprache der Oberfläche, des Titels und der Ausgabe',
      sub: 'sind getrennt.',
      note: 'Wenn du die Oberfläche auf Englisch stellst, wechselt deine chinesische Übersetzung nicht. Ein ins Chinesische übersetzter Titel bedeutet auch nicht, dass eine chinesische Ausgabe vorliegt. Rezensionen nennen jeweils ihre Sprache.',
    },
    finaleLead: 'Weiter unten entfaltet sich die Werkseite Kapitel für Kapitel bis zu deiner Lesestelle.',
  },

  wiki: {
    hero: {
      headline: 'Jedes Buch hat sein eigenes Wiki.',
      lede: 'Wer das Buch besitzt, lässt lokal einen KI-Agenten Personen, Orte und Ereignisse kapitelweise erfassen. Nach menschlicher Prüfung werden sie veröffentlicht. Jeder Leser sieht nur Inhalte bis zu dem Kapitel, das er gelesen hat.',
      alt: 'In ein dunkelgrünes Blatt sind mehrere verschieden lange Schlitze geschnitten. Die ausgeschnittenen Stücke liegen ordentlich daneben auf hellblauem Karton.',
    },
    flow: {
      label: 'Von der Datei zum Wiki',
      headline: 'Aus einer Datei wird ein Wiki.',
      steps: [
        { title: 'Deine Datei', body: 'TXT oder EPUB bleiben auf deinem eigenen Computer.' },
        {
          title: 'Dein KI-Agent',
          body: 'Das Werkzeug teilt den Text in Abschnitte mit genauer Positionsangabe. Dein Agent liest Kapitel für Kapitel und erfasst Figuren und ihre alternativen Namen, Beziehungen, Ereignisse und Orte.',
        },
        {
          title: 'Vorschläge mit Quellen',
          body: 'Jeder Vorschlag nennt die Stelle im Original und enthält ein kurzes Zitat als Beleg. Der Agent sucht vorhandene Personen und Orte über die API und reicht anschließend alle Ergebnisse zusammen ein.',
        },
        {
          title: 'Nach Prüfung veröffentlichen',
          body: 'Ein Prüfer kann alle Vorschläge gemeinsam freigeben. Das Wiki des Werks wird dann aktualisiert. Für neue Kapitel werden nur Ergänzungen und Änderungen eingereicht.',
        },
      ],
    },
    position: {
      label: 'Lesestelle',
      headline: 'Das Wiki reicht bis zu dem Kapitel, das du gelesen hast.',
      lead: 'Am Beispiel eines fiktiven Romans: Dieselbe Liste von Figuren und Ereignissen zeigt je nach Lesestelle andere Inhalte.',
      control: 'Lesestelle',
      positions: [
        { label: 'Kapitel 1', chapter: 1 },
        { label: 'Kapitel 3', chapter: 3 },
        { label: 'Kapitel 9', chapter: 9 },
        { label: 'Kapitel 16', chapter: 16 },
        { label: 'Kapitel 22', chapter: 22 },
        { label: 'Alle', chapter: 30 },
      ],
      groups: { people: 'Personen', events: 'Ereignisse' },
      source: 'Quelle: Kapitel {n}',
      aliases: 'Alternative Namen:',
      entries: [
        { group: 'people', name: 'Hauptfigur', aliases: 'Spitzname, Pseudonym', chapter: 1, note: 'Erzähler der Geschichte, aufgewachsen in einer Hafenstadt.' },
        { group: 'people', name: 'Schwester der Hauptfigur', chapter: 1, note: 'Sie arbeitet in einer Buchhandlung.' },
        { group: 'people', name: 'Der neue Nachbar', chapter: 3, note: 'Ein junger Mensch, der gerade ins Haus gegenüber gezogen ist.' },
        { group: 'people', name: 'Eine reisende Malerin', chapter: 16, note: 'Sie wohnt vorübergehend in einem Hotel am Hafen.' },
        { group: 'events', name: 'Die Buchhandlung öffnet wieder', chapter: 1, note: 'Die Buchhandlung, in der die Schwester arbeitet, erhält ein neues Schild.' },
        { group: 'events', name: 'Ein Fest am Hafen', chapter: 9, note: 'Die Hauptfigur spricht auf dem Fest zum ersten Mal mit dem Nachbarn.' },
        { group: 'events', name: 'Ein langer Brief', chapter: 16, note: 'Der Brief enthüllt die gemeinsame Vergangenheit der beiden.' },
        { group: 'events', name: 'Das Schiff verlässt den Hafen', chapter: 22, note: 'Die Nachricht kommt in einem Brief der Schwester.' },
      ],
      later: 'Erst ab Kapitel {n} sichtbar, vorher verborgen',
      status: 'Aktuelle Lesestelle: Kapitel {n}. Spätere Inhalte erscheinen hier nicht.',
      statusAll: 'Alle Inhalte werden angezeigt, auch das Ende.',
      rail: 'Das Buch hat 30 Kapitel.',
      rules: [
        'Für nicht angemeldete Leser sind Spoiler standardmäßig verborgen. Die Seite weist darauf hin.',
        'Nach der Anmeldung wird standardmäßig das letzte gelesene Kapitel angezeigt. Wenn du ein Buch in deiner Bibliothek als „Gelesen“ markierst, gilt es als vollständig gelesen.',
        'Jeder kann die Lesestelle selbst wählen und auch alle Inhalte anzeigen.',
        'Die Lesestelle gilt nur innerhalb derselben Erzählkontinuität. Deine Lesestelle in einer Onlinefassung schaltet keine Inhalte der veröffentlichten Ausgabe frei.',
      ],
    },
    text: {
      text: 'REZICS erhält nicht den vollständigen Text;',
      sub: 'übermittelt werden nur Vorschläge mit der Originalstelle und einem sehr kurzen Zitat.',
      facts: [
        { title: 'Du wählst das Modell', body: 'Bei einem Cloudmodell wird der Text an den gewählten Dienst übermittelt. Bei einem lokalen Modell bleibt alles auf deinem Computer.' },
        { title: 'Offener Quellcode', body: 'Das Werkzeug steht unter Apache-2.0. Du kannst es ohne Konto verwenden. Es meldet keine Nutzungsdaten und lädt nichts selbst aus dem Internet herunter.' },
        { title: 'Keine Entschlüsselung, kein Umgehen', body: 'Geschützte Dateien lassen sich nicht öffnen. Das Werkzeug kann weder entschlüsseln noch Schutzmaßnahmen umgehen und ruft auch keine entsprechenden Werkzeuge auf.' },
        { title: 'Zitate sind begrenzt', body: 'Die Länge jedes Zitats und die Gesamtmenge der Zitate pro Buch sind begrenzt. Die REZICS-API setzt diese Grenzen einheitlich durch.' },
      ],
    },
    zone: {
      label: 'Zone',
      headline: 'Ein Wiki ist die Zone eines Werks.',
      lead: 'Jeder Eintrag in Infoboxen und Listen stammt aus denselben Daten, die Filter, Listen und andere Zones verwenden. Korrigierst du hier einen Namen, wird er auch an anderer Stelle aktualisiert.',
      tiles: [
        { name: 'Werkseite', line: 'Sie bleibt das Zentrum, das Wiki führt in die Details' },
        { name: 'Personen' },
        { name: 'Orte' },
        { name: 'Zeitlinie' },
        { name: 'Kapitelübersicht' },
        { name: 'Beziehungen' },
      ],
      caption: 'Beispiel: Seiten im Wiki eines Werks.',
    },
    review: {
      label: 'Prüfung',
      headline: 'KI-Agenten schlagen vor, Menschen prüfen.',
      lead: 'Jede vom Agenten gefundene Person und jeder Ort wird mit den vorhandenen Daten im Graphen abgeglichen. Es gibt vier Ergebnisse.',
      states: [
        { title: 'Übereinstimmung', body: 'Passt zu einer bereits im Graphen erfassten Person oder einem Ort.' },
        { title: 'Neu', body: 'Noch nicht im Graphen vorhanden. Der Vorschlag legt einen Eintrag an.' },
        { title: 'Unklar', body: 'Es gibt mehrere mögliche Treffer. Ein Prüfer entscheidet.' },
        { title: 'Nicht verfügbar', body: 'Ein Abgleich ist gerade nicht möglich. Der Prüfer klärt dies bei der Prüfung.' },
      ],
      rules: [
        'Auch ein Abgleichergebnis ist nur ein Vorschlag. Datensätze werden nicht automatisch zusammengeführt.',
        'Vorschläge zu neuen Kapiteln löschen keine bereits angenommenen Inhalte. Für das Zurückziehen eines Eintrags ist eine Begründung nötig.',
        'Zitatstellen lassen sich prüfen: Wer dieselbe Ausgabe vorliegen hat, kann die Passagen mit dem Original vergleichen.',
        'Jede Community entscheidet, ob Agenten Einträge entwerfen und generierte Texte annehmen dürfen. Ohne eigene Einstellung nimmt das Wiki nur Fakten und Strukturen auf.',
        'Jeder Eintrag wird von Menschen geprüft, bevor Leser ihn sehen.',
      ],
    },
    finaleLead: 'Wie verschiedene Ausgaben eines Werks getrennt erfasst werden.',
  },

  editions: {
    hero: {
      headline: 'Ein Werk kann viele Bücher umfassen.',
      lede: 'Original und Übersetzungen, Taschenbücher und E-Books, Sammelbände und Fortsetzungen im Netz werden getrennt erfasst und verweisen auf dasselbe Werk. So weißt du, welche Ausgabe du hast und behältst den Überblick über den Reihenfortschritt.',
      alt: 'Grüne Papierstücke verschiedener Größe liegen mit bündiger linker Unterkante übereinander. Eines davon ist hellblau.',
    },
    releases: {
      label: 'Vier Veröffentlichungsarten',
      headline: 'Jede Veröffentlichung ist eindeutig eingeordnet.',
      lead: 'Wird ein Buch in drei Shops verkauft, bleibt es eine Ausgabe mit drei Bezugsquellen. Nicht autorisierte Kopien werden separat erfasst und nicht mit dem Original zusammengeführt.',
      kinds: [
        { title: 'Verlagsausgabe', body: 'Ein Band, Taschenbuch, E-Book oder eine Sonderausgabe eines Verlags. Festgehalten wird genau, was zu diesem Zeitpunkt veröffentlicht wurde. Später kommt nichts hinzu.' },
        { title: 'Onlineveröffentlichung', body: 'Auch eine Fortsetzung im Netz ist eine tatsächliche Veröffentlichung. Die ursprüngliche Adresse und datierte Archivfassungen bleiben erhalten.' },
        { title: 'REZICS-Fassung', body: 'Die zu einem bestimmten Zeitpunkt ausgewählten Inhalte auf REZICS werden als Ausgabe archiviert. Spätere Änderungen wirken sich nicht darauf aus.' },
        { title: 'Virtuelle Ausgabe', body: 'Eine Nutzerübersetzung wird nach der Struktur einer Veröffentlichung eingeordnet. Ihr Umfang wird angegeben, zum Beispiel Kapitel 1 bis 20 eines 100 Kapitel langen Buchs. Sie gilt nicht als tatsächliche Veröffentlichung.' },
      ],
    },
    translations: {
      label: 'Übersetzungen',
      headline: 'Jede Übersetzung nennt Übersetzer und Vorlage.',
      rows: [
        { title: 'Offizielle Übersetzung', body: 'Eine Verlagsübersetzung ist eine eigene Veröffentlichung mit genanntem Übersetzer und ausgewiesenen Rechten.' },
        { title: 'Fanübersetzung', body: 'Sie gehört dem Übersetzer und ist einer bestimmten Originalausgabe zugeordnet. Sie wird nie als offiziell gekennzeichnet.' },
        { title: 'Maschinelle Übersetzung', body: 'Sie ist wie jede Übersetzung eine neue Textfassung. Ihr Status weist sie als maschinell erzeugt aus.' },
        { title: 'KI-unterstützt', body: 'Wenn KI bei einer überwiegend menschlichen Übersetzung geholfen hat, wird dies ebenfalls angegeben. Leser können danach filtern.' },
      ],
      stateLabel: 'Jede Übersetzung hat einen Status',
      states: ['Ausstehend', 'Übersetzt', 'Geprüft', 'Abgeschlossen'],
      notes: [
        'Wird das Original geändert, wird die Übersetzung als aktualisierungsbedürftig markiert. Sie wird weder gelöscht noch stillschweigend einem neuen Text zugeordnet.',
        'Deine Übersetzung ist zunächst nur für dich sichtbar. Für eine Veröffentlichung brauchst du eine Grundlage: Das Original ist gemeinfrei oder unter einer Lizenz verfügbar, die Übersetzungen erlaubt, die Autorin oder der Autor hat zugestimmt oder vorab eine Übersetzungslizenz erteilt.',
        'Autoren können auch ablehnen, dass eine Übersetzung mit ihrem Original verknüpft wird.',
        'Traditionelle Schriftzeichen werden nicht stillschweigend in vereinfachte umgewandelt. Umgewandelte Texte sind gekennzeichnet, Eigennamen bleiben unverändert.',
      ],
    },
    sameWork: {
      label: 'Ein Werk oder zwei?',
      headline: 'Welche Änderungen dasselbe Werk bleiben.',
      lead: 'Entscheidend ist, ob die Handlung in sich vereinbar bleibt oder absichtlich neu erzählt wird. Wortzahl, Sprache, ISBN und Werbetexte spielen dabei keine Rolle.',
      rows: [
        { title: 'Tippfehler korrigiert, leicht überarbeitet oder um passende Kapitel ergänzt', body: 'Dasselbe Werk, mit getrennt erfassten Ausgaben und Veröffentlichungen.' },
        { title: 'Andere Reihenfolge, dieselben Ereignisse', body: 'Dasselbe Werk. Beide Reihenfolgen bleiben erhalten.' },
        { title: 'Neue Reihenfolge ändert Ursachen, oder Enden widersprechen sich', body: 'Zwei Werke, verknüpft als „Neufassung“.' },
        { title: 'Die Hauptfigur erhält einen anderen Namen', body: 'Ist es nur ein alternativer Name, bleibt es dasselbe Werk.' },
        { title: 'Die Geschichte wird bewusst neu erzählt', body: 'Zwei Werke, verknüpft als „Neustart“.' },
        { title: 'Onlinefassung gelöscht oder Online-Fortsetzung', body: 'Das ändert nur Umfang und Verfügbarkeit, nicht die Zahl der Werke.' },
      ],
      caption: 'Deine Lesestelle in einer Onlinefassung bedeutet nicht, dass du die überarbeitete Ausgabe beendet hast. Die Zuordnung der Kapitel muss von Menschen bestätigt werden.',
    },
    orders: {
      label: 'Reihenfolge',
      headline: 'Veröffentlichungs- und Lesereihenfolge können abweichen.',
      lead: 'Beispiel: zwei Reihenfolgen derselben Reihe. Die Kennnummern der Bände bleiben gleich.',
      rows: ['Veröffentlichungsreihenfolge', 'Empfohlene Lesereihenfolge'],
      tiles: ['Band 1', 'Nebengeschichte', 'Band 2', 'Band 3'],
      reading: [0, 2, 1, 3],
      notes: [
        { title: 'Sammelband', body: 'Ein Sammelband ist eine Veröffentlichung mit mehreren Bänden. Jeder Band bleibt ein eigenes Werk mit eigener Bewertung und eigenem Fortschritt.' },
        { title: 'Unterreihe', body: 'Unterreihen können jeweils mit Band 1 beginnen. Eine gemeinsame Reihenfolge verbindet sie.' },
        { title: 'Eine Reihe abschließen', body: 'Der Reihenfortschritt richtet sich nur nach den erforderlichen Bänden. Optionale Nebengeschichten und Specials musst du dafür nicht lesen.' },
        { title: 'Status einer Reihe', body: 'Getrennt angezeigt werden: auf dem aktuellen Stand, alle erschienenen Bände gelesen, Reihe abgeschlossen und Kapitelzuordnung noch offen.' },
      ],
    },
    isbn: {
      text: 'ISBN eingeben,',
      sub: 'die Ausgabe finden.',
      note: 'Eine ISBN gehört zu einer Veröffentlichung, nicht zum Werk selbst. Über eine ISBN oder einen Eintrag zum E-Book findest du die Ausgabe, ihre Textfassungen oder Übersetzungen und das zugehörige Werk. Zum Beispiel A Certain Magical Index: Das japanische Original sowie die chinesische und englische Ausgabe sind separate Veröffentlichungen mit jeweils eigener ISBN. Sie verweisen auf dasselbe Werk.',
    },
    finaleLead: 'Als Nächstes deine eigenen Einträge ansehen.',
  },

  library: {
    hero: {
      headline: 'Deine Lektüre wird so festgehalten, wie sie verläuft.',
      lede: 'Du legst das Buch zur Seite, liest es zwei Jahre später erneut oder hörst auf dem Weg zur Arbeit das Hörbuch. REZICS hält jede Situation korrekt fest. Standardmäßig siehst nur du diese Daten. Du kannst sie jederzeit vollständig exportieren.',
      alt: 'Drei dunkelgrüne Papierstreifen unterschiedlicher Länge liegen parallel. Neben dem kürzesten liegt ein kleines hellgrünes Blatt.',
    },
    reads: {
      label: 'Jede Lektüre',
      headline: 'Drei Lesedurchgänge, drei Einträge.',
      lead: 'Pausieren und Abbrechen werden getrennt erfasst. Beides zählt nicht als beendet. Jeder erneute Lesedurchgang erhält einen eigenen Eintrag.',
      rows: [
        { title: 'Erster Durchgang', body: 'Gedrucktes Buch, bis Kapitel 20 gelesen, dann pausiert.', share: 0.62 },
        { title: 'Zweiter Durchgang', body: 'E-Book, in der zweiten Hälfte zum Hörbuch gewechselt und beendet.', share: 1 },
        { title: 'Dritter Durchgang', body: 'Wiederlesen, aktuell dabei.', share: 0.24 },
      ],
      caption: 'Beispiel: Jeder Eintrag bezieht sich auf die Ausgabe, die du tatsächlich gelesen hast. Ein erneuter Durchgang mit einer anderen Ausgabe erhält einen eigenen Eintrag.',
    },
    move: {
      label: 'Import und Export',
      headline: 'Leseverläufe lassen sich importieren und exportieren.',
      steps: [
        { title: 'Exportdatei hochladen', body: 'Eine Exportdatei eines anderen Dienstes oder eine Tabelle, die du selbst erstellt hast.' },
        { title: 'Der gelesenen Ausgabe zuordnen', body: 'Jeder Eintrag wird der tatsächlichen Ausgabe zugeordnet, statt nach dem Titel zu raten. Nicht zuordenbare Daten werden keinem anderen Buch zugewiesen.' },
        { title: 'Fortschritt übernehmen', body: 'Lesestatus, Daten, Bewertungen und Rezensionen werden passend zu den zugeordneten Daten übernommen.' },
        { title: 'Jederzeit vollständig exportieren', body: 'Einträge, eigene Bücher, Bewertungen und Rezensionen lassen sich in eine Datei exportieren und erneut importieren.' },
      ],
      retention: 'Die hochgeladene Datei gehört nur dir. Originalfelder bleiben ab dem Upload sieben Tage gespeichert. Danach werden sie für Lesen und Export gesperrt und zur Löschung vorgemerkt. Exportiere deine Bibliothek, wenn du sie behalten möchtest.',
    },
    continue: {
      text: 'Öffne REZICS,',
      sub: 'und sieh als Erstes das nächste Kapitel.',
      note: 'Jeder Eintrag unter „Weiterlesen“ oben auf der Startseite öffnet direkt das nächste ungelesene Kapitel.',
    },
    shelf: {
      label: 'Regal',
      headline: 'Auch was im Regal steht, wird festgehalten.',
      rows: [
        { title: 'Eigene Bücher', body: 'Du hältst fest, welche Ausgabe im Regal steht. Gekauft heißt nicht gelesen.' },
        { title: 'Verleihen und Ausleihen', body: 'Du hältst fest, wem du das Buch geliehen hast, wann, wann es zurückgegeben werden soll und wann es tatsächlich zurückkam. Der Name ist eine private Notiz und nicht mit einem Konto verknüpft.' },
        { title: 'Notizen zu Textstellen', body: 'Private Notizen beziehen sich auf eine Stelle in einer bestimmten Ausgabe. Auch beim Wechsel der Ausgabe bleibt die ursprüngliche Stelle erhalten.' },
        { title: 'Beim Lesen folgen', body: 'Wenn du ein Buch zu „Lese ich gerade“ oder „Möchte ich lesen“ hinzufügst, folgst du ihm. Du erhältst eine Nachricht, wenn in deiner Lesesprache ein neues Kapitel oder eine neue Ausgabe erscheint.' },
        { title: 'Liste', body: 'Eine Liste kann Romane, Manga und Spiele enthalten. Du sortierst und kommentierst sie und kannst sie exportieren.' },
      ],
    },
    privacy: {
      label: 'Datenschutz',
      headline: 'Deine Leseverläufe bleiben privat.',
      rows: [
        { title: 'Standardmäßig privat', body: 'Entwürfe und Leseverläufe sind privat, solange du sie nicht selbst teilst.' },
        { title: 'Keine Werbeprofile', body: 'REZICS erstellt aus privaten Leseverläufen keine Werbeprofile und leitet daraus keine sensiblen Merkmale für Marketingzwecke ab.' },
        { title: 'Keine Zustimmung zum Training', body: 'Ein Konto, die Nutzungsbedingungen oder die Verwendung von KI-Funktionen bedeuten nicht, dass du der Nutzung deiner Daten zum Modelltraining zustimmst.' },
        { title: 'Wenn du Verwaltungsrechte abgibst', body: 'Wenn du die Verwaltung deines Kontos oder deiner Community abgibst, werden deine Leseverläufe nicht mitgeteilt.' },
      ],
    },
    finaleLead: 'Wechsle auf die Seite des Schreibens.',
  },

  serial: {
    hero: {
      headline: 'Kapitel für Kapitel schreiben und lesen.',
      lede: 'Fortsetzungen im Netz, Light-Novel-Serien oder dein eigener Roman: Auf REZICS kannst du schreiben, planen und veröffentlichen. Manuskripte gehen nicht verloren, Leser kehren zu ihrer letzten Lesestelle zurück.',
      alt: 'Ein langer dunkelgrüner Papierstreifen ist zu Seiten gefaltet. Die zweite Hälfte liegt flach, an einer Falte liegt ein kleines hellgrünes Papierstück.',
    },
    safe: {
      label: 'Manuskript',
      headline: 'Dein Manuskript geht hier nicht verloren.',
      rows: [
        { title: 'Jedes Speichern erstellt eine Version', body: 'Jede Version bleibt erhalten und lässt sich vergleichen oder als neue Version wiederherstellen. Ein geleertes Kapitel wird als leere Version gespeichert und kann nicht veröffentlicht werden.' },
        { title: 'Nach deiner Zeitzone planen', body: 'Wähle die lokale Veröffentlichungszeit. Der Server veröffentlicht geplante Kapitel pünktlich, auch wenn der Browser geschlossen ist.' },
        { title: 'Vier Rollen für Mitwirkende', body: 'Lesen, kommentieren, bearbeiten und veröffentlichen sind getrennte Berechtigungen. Wer bearbeiten darf, kann nicht automatisch veröffentlichen.' },
        { title: 'Anmerkungen des Autors getrennt vom Text', body: 'Anmerkungen am Kapitelende sind ein eigener Abschnitt. Sie zählen nicht zur Wortzahl, werden nicht übersetzt und erscheinen nicht in späteren Ausgaben.' },
      ],
    },
    mirror: {
      label: 'Autoren und Leser',
      headline: 'Was Autoren tun und bei Lesern geschieht.',
      rows: [
        { title: 'Kapitel 12 veröffentlichen', body: 'Leser, die dem Werk folgen, erhalten eine Benachrichtigung zu neuen Kapiteln in ihrer Sprache.' },
        { title: 'Kapitel 3 überarbeiten', body: 'Frühere Kommentare bleiben an der Textstelle der damaligen Version. Sie verrutschen nicht.' },
        { title: 'Kapitel 5 in eine Anthologie aufnehmen', body: 'Text und Diskussion gibt es nur einmal. Die Lesefortschritte an beiden Stellen werden getrennt erfasst.' },
        { title: 'Kapitel 13 veröffentlichen', body: 'Wer noch nicht so weit gelesen hat, sieht im Feed keine Spoiler zu diesem Kapitel.' },
      ],
      notes: [
        'Leser können Schriftgröße, Zeilenbreite, Schriftart, Einzug, Farben und den Abstand zwischen chinesischen und japanischen Zeichen anpassen.',
        'Japanische Werke lassen sich vertikal lesen, mit Furigana und Betonungszeichen.',
        'Rückmeldungen der Leser erscheinen im Posteingang des Autors.',
      ],
    },
    ai: {
      label: 'KI-Angaben',
      headline: 'Der Einsatz von KI wird genau angegeben.',
      rows: [
        { title: 'Nicht verwendet', body: 'Generative KI hat nicht wesentlich zu diesem Text beigetragen.' },
        { title: 'Unterstützend', body: 'Der Text wurde überwiegend von Menschen verfasst, wobei KI bei Ideen, Überarbeitung, Bearbeitung oder einzelnen Abschnitten half.' },
        { title: 'Generiert', body: 'Der Großteil des Textes wurde von KI erzeugt, einschließlich maschineller Übersetzung, auch wenn Menschen ihn später bearbeitet haben.' },
      ],
      notes: ['Eine menschliche Prüfung wird separat angegeben. Leser können nach diesen Angaben filtern.', 'Die Angaben stammen vom Autor. REZICS verwendet KI-Erkennung nicht als Entscheidungsgrundlage.'],
    },
    world: {
      label: 'Weltinformationen',
      headline: 'Weltinformationen stehen neben dem Manuskript.',
      lead: 'Ordne Personen, Orte, Organisationen, Ereignisse, Gegenstände und weitere Angaben mit Vorlagen. Alles bleibt privat. Ausgewählte Seiten kannst du im Wiki des Werks veröffentlichen, ohne den privaten Änderungsverlauf freizugeben.',
      items: [
        'Orte auf einer selbst gezeichneten Karte markieren.',
        'Beziehungen zwischen Figuren als Graph und als Textliste anzeigen.',
        'Die Zeitlinie mit dem Kalender der Geschichte erstellen. Auch unklare Daten lassen sich festhalten.',
        'Der Kontinuitätsassistent markiert Widersprüche zwischen Notizen und Manuskript. Er schreibt keine Kapitel für dich.',
      ],
    },
    backup: {
      text: 'Das ganze Manuskript,',
      sub: 'jederzeit vollständig exportieren.',
      note: 'Änderungsverlauf, Notizen und Weltinformationen lassen sich als wieder importierbare Sicherung exportieren. Export und die grundlegenden Weltinformationen sind nicht an einen kostenpflichtigen Tarif gebunden.',
    },
    finaleLead: 'Wenn es fertig ist, gib es deinen Lesern.',
  },

  publish: {
    hero: {
      headline: 'Das Buch wird verkauft, die Datei bleibt bei den Lesern.',
      lede: 'Vertraglich gebundene Kreative verkaufen auf REZICS lizenzierte E-Books, kleine Spiele und Visual Novels direkt. Leser erhalten DRM-freie Dateien. Die Shopseite steht neben Diskussionen und Wiki des Werks.',
    },
    buy: {
      label: 'Kaufen',
      headline: 'Wer ein Buch kauft, wählt zuerst die Ausgabe.',
      steps: [
        { title: 'Ausgabe wählen', body: 'Wähle Sprache und Ausgabe, sieh dir den Übersetzer an und lies eine Leseprobe.' },
        { title: 'Einmal bezahlen', body: 'Einmal bezahlen, kein Abonnement. Die Lizenz steht vor dem Kauf auf der Seite.' },
        { title: 'Datei behalten', body: 'Lade ein DRM-freies EPUB oder PDF herunter. Es gibt keinen Launcher und keine DRM-Aktivierung.' },
        { title: 'Updates erhalten', body: 'Wenn der Autor vereinbarte Updates veröffentlicht, informiert dich deine Bibliothek. Der Beleg bleibt erhalten und die Datei lässt sich gemäß den Kaufbedingungen erneut herunterladen.' },
      ],
      caption: 'DRM-frei bedeutet nicht, dass du die Datei weiterverkaufen oder verbreiten darfst. Maßgeblich ist die Lizenz, die vor dem Kauf angegeben wurde.',
    },
    statement: {
      label: 'Abrechnung',
      headline: 'Die Abrechnung der Kreativen führt jeden Abzug einzeln auf.',
      rows: [
        { title: 'Zahlung des Lesers', body: 'Der tatsächlich eingegangene Betrag dieser Transaktion.' },
        { title: 'Steuern', body: 'Eingezogene und abgeführte Umsatzsteuer, Mehrwertsteuer und andere Transaktionssteuern.' },
        { title: 'Zahlungsgebühren', body: 'Tatsächlich angefallene, belegte Gebühren des Zahlungsdienstes.' },
        { title: 'Rückerstattungen und Rückbuchungen', body: 'Rückerstattungen, Stornierungen und Rückbuchungen.' },
        { title: 'Nettoerlös', body: 'Nach Abzug der vereinbarten Transaktionskosten wird der Betrag gemäß Vertrag zwischen Kreativen und REZICS aufgeteilt.' },
      ],
      note: 'Betriebskosten wie Hosting, Gehälter und Marketing werden nicht von diesem Erlös abgezogen. Dieselbe Gebühr wird nicht zweimal berechnet.',
    },
    distributed: {
      label: 'Veröffentlichungsumfang',
      headline: 'Was hier veröffentlicht wird und was nicht.',
      rows: [
        { title: 'E-Books', body: 'Lizenzierte EPUB- oder PDF-Dateien ohne DRM.' },
        { title: 'Kleine Spiele und Visual Novels', body: 'Die herunterladbare Ausgabe sowie benötigte Plattformen und Konten stehen vor dem Kauf fest.' },
        { title: 'Leseprobe', body: 'Lies zuerst eine Probe und entscheide dann, ob du kaufen möchtest.' },
        { title: 'Belege und Rückerstattungen', body: 'Für jeden Kauf gibt es einen Beleg. Du kannst eine Rückerstattung beantragen.' },
      ],
      policy: [
        { title: 'Vertraglich gebundene Kreative', body: 'Veröffentlichen können vertraglich gebundene Kreative. Es ist kein offener Marktplatz.' },
        { title: 'Nicht im Angebot', body: 'Explizite sexuelle Inhalte sowie Werke mit der Einstufung r18 oder r18g.' },
      ],
    },
    community: {
      text: 'Die Shopseite',
      sub: 'steht direkt neben der Community des Werks.',
      note: 'Vor dem Kauf siehst du Rezensionen, Diskussionen und das Wiki. Danach bleiben deine Ausgabe, dein Fortschritt und dein Beleg beim selben Werk. Leser können Kreativen folgen und ihre Romane und Spiele entdecken. Kreative sehen zusammengefasste Verkaufsdaten, aber keine Leseverläufe.',
    },
    finaleLead: 'Anime-Adaptionen verweisen ebenfalls auf dasselbe Werk.',
  },
};

export default {
  id: 'books',
  base: '/books/',
  name: 'Bibliothek',
  theme: { kind: 'books' },
  next: 'anime',
  pages: [
    {
      slug: '',
      label: 'Übersicht',
      meta: {
        title: 'Bibliothek: Wo du liest, geht es weiter',
        description:
          'Jedes Werk hat eine Seite, die Original, Übersetzungen, Einzelbände und Sammelbände klar trennt. Deine Bibliothek merkt sich deinen aktuellen Band und zeigt dir den nächsten. Wiki und Diskussionen reichen bis zu deinem gelesenen Kapitel.',
      },
    },
    {
      slug: 'work',
      label: 'Werkseite',
      meta: {
        title: 'Werkseite: das Zentrum eines Werks',
        description:
          'Die Werkseite vereint Fakten, Bewertungen, deine Ausgabe und deinen Fortschritt, Bände und Adaptionen, eine Wiki-Zusammenfassung und Diskussionen. Oben steht eine Hauptschaltfläche, die sich nach deinem Status richtet.',
      },
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: {
        title: 'Wiki+: Mit deinem KI-Agenten ein Wiki erstellen',
        description:
          'Leser, die den Text besitzen, führen das offene Werkzeug lokal aus und lassen ihren KI-Agenten Personen, Orte und Ereignisse kapitelweise erfassen. Nach der Prüfung werden sie im Wiki des Werks veröffentlicht. Jeder Leser sieht nur die Inhalte bis zu seiner Lesestelle.',
      },
    },
    {
      slug: 'editions',
      label: 'Ausgaben und Reihen',
      meta: {
        title: 'Ausgaben und Reihen: jede Ausgabe klar erfasst',
        description:
          'Einzelbände, Sammelbände, E-Books, Fortsetzungen im Netz und Übersetzungen sind in REZICS verschiedene Veröffentlichungen desselben Werks. Reihen sind nach Band geordnet. Eine Ausgabe mit geänderter Handlung ist ein eigenes Werk.',
      },
    },
    {
      slug: 'library',
      label: 'Leseverlauf',
      meta: {
        title: 'Leseverlauf: korrekt festhalten und mitnehmen',
        description:
          'Jede Lektüre wird getrennt erfasst: Wiederlesen, Pausieren und Abbrechen. Auch der Wechsel vom gedruckten Buch zum Hörbuch zählt als derselbe Durchgang. Eigene Bücher und Ausleihen werden separat festgehalten. Die Einträge sind standardmäßig privat und lassen sich importieren und vollständig exportieren.',
      },
    },
    {
      slug: 'serial',
      label: 'Fortsetzungen',
      meta: {
        title: 'Fortsetzungen: Kapitel für Kapitel schreiben und lesen',
        description:
          'Autoren können jeden Speicherstand wiederherstellen und Kapitel nach ihrer Zeitzone planen. Sie werden pünktlich veröffentlicht, auch wenn der Browser geschlossen ist. Leser lesen an ihrer letzten Stelle weiter, Diskussionen verraten keine späteren Kapitel.',
      },
    },
    {
      slug: 'publish',
      label: 'Veröffentlichen',
      meta: {
        title: 'Veröffentlichen: direkt an Leser verkaufen',
        description:
          'Vertraglich gebundene Kreative verkaufen auf REZICS lizenzierte E-Books, kleine Spiele und Visual Novels. DRM-freie Dateien, Leseproben, Updates und erneute Downloads. Die Abrechnung führt Steuern, Gebühren und Rückerstattungen einzeln auf.',
      },
    },
  ],
  strings,
} satisfies MiniSite<BooksStrings>;
