// The games site (遊戲): every visible string of /games/ and its six inner pages.
// Design record: src/sites/games/SITE.md (section "v3"); sources for every claim:
// src/sites/games/facts.md. Example data (one fictional adventure game, its releases, versions
// and playthroughs) is always captioned 示意 on screen; it describes no real game. The one real
// work named is „A Certain Magical Index“, text only, as an example of how relations are recorded.
import type { KindId, MiniSite } from '../schema';

export type Lang = 'zh' | 'ja' | 'en';
export type Platform = 'pc' | 'console' | 'handheld' | 'mobile';
export type Edition = 'std' | 'deluxe' | 'complete';

export interface Titled {
  title: string;
  body: string;
}

/** A section: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}

/** A large statement: the first half in ink, the second half muted. */
export interface Said {
  text: string;
  more: string;
  /** A sentence or two in body size under the statement. */
  note?: string;
}

/** One release of the example game, as the release filter shows it. */
export interface ExampleRelease {
  id: string;
  platform: Platform;
  edition: Edition;
  /** Shown inside the table cell when a cell holds more than one release (regions). */
  region?: string;
  langs: Lang[];
  /** A state instead of languages (announced, no date yet). */
  state?: string;
}

export type GamesStrings = {
  /** The line under every page's closing statement, above 前往 REZICS. */
  closingBody: string;
  /** Alternative text of the paper still-life photographs (public/images/sites/games/). */
  pictures: Record<'hero' | 'store' | 'library' | 'guides' | 'creators', string>;
  example: {
    langNames: Record<Lang, string>;
    platforms: Record<Platform, string>;
    editions: Record<Edition, string>;
    releases: ExampleRelease[];
  };
  landing: {
    hero: { headline: string; lede: string };
    releases: Head & { items: (Titled & { id: string })[]; caption: string; link: string };
    versions: Said;
    store: Head & { link: string };
    pages: Head & { lines: Record<string, string> };
    connections: Head & { tiles: { to: KindId; line: string }[] };
    closing: string;
  };
  releases: {
    hero: { headline: string; lead: string };
    filter: Head & {
      groups: { lang: string; platform: string };
      clear: string;
      none: string;
      result: string;
      resultNone: string;
      corner: string;
      caption: string;
    };
    states: Head & { items: Titled[] };
    languages: Head & { items: Titled[] };
    bundles: Head & { tiles: Titled[]; caption: string };
    requirements: Head & { tiles: Titled[] };
    offers: Said;
    closing: string;
  };
  store: {
    hero: { headline: string; lead: string };
    checkout: Head & { items: Titled[] };
    purchase: Head & { steps: Titled[] };
    keep: Head & { lead: string; more: string };
    privacy: Said;
    refuses: Head & { items: Titled[] };
    closing: string;
  };
  library: {
    hero: { headline: string; lead: string };
    status: Head & { items: Titled[] };
    slots: Head & { columns: [string, string, string]; rows: { slot: string; release: string; state: string }[]; caption: string };
    together: Head & { tiles: { to: KindId; name: string; at: string }[]; caption: string };
    playtime: Head & { items: Titled[]; note: string };
    takeout: Said;
    closing: string;
  };
  reviews: {
    hero: { headline: string; lead: string };
    versions: Head & { tiles: Titled[]; caption: string };
    who: Head & { items: Titled[] };
    targets: Head & { tiles: Titled[] };
    rules: Head & { items: Titled[] };
    talk: Said;
    closing: string;
  };
  guides: {
    hero: { headline: string; lead: string };
    fog: Head;
    guides: Head & { lead: string; more: string };
    rules: Head & { items: Titled[] };
    adaptations: Head & { lead: string; chain: { to: KindId; name: string; line: string; rel?: string }[]; note: string; caption: string };
    zone: Said;
    closing: string;
  };
  creators: {
    hero: { headline: string; lead: string };
    rights: Head & { items: Titled[] };
    ledger: Head & { rows: { label: string; op?: string; total?: boolean }[]; note: string; reserve: string; caption: string };
    name: Head & { tiles: { to?: KindId; name: string; role: string }[]; caption: string };
    home: Head & { lead: string; more: string };
    rules: Said;
    closing: string;
  };
};

const strings: GamesStrings = {
  closingBody: 'Versionen finden, Spielzeit festhalten, Rezensionen schreiben und Spiele unabhängiger Entwickler kaufen, alles mit einem Konto.',
  pictures: {
    hero: 'Auf warmweißem Papier fächern sich von einer Ecke eines großen blauen Blatts hellere und dunklere blaue, violette und türkisgrüne Blätter auf.',
    store: 'Ein hellblaues Blatt läuft durch einen Schlitz in blauem Papier. Das untere Ende ist leicht aufgerollt.',
    library: 'Ein flaches Fach aus blauem Papier hat eine Reihe schmaler Schlitze. Blaue, hellblaue, rosafarbene und grüne Blätter stehen darin, der letzte Schlitz ist leer.',
    guides: 'Ein langer blauer Papierstreifen ist mehrfach gefaltet. Die ersten drei Abschnitte liegen offen, der Rest bildet einen Stapel unter einem weißen Blatt.',
    creators: 'Ein blaues Blatt ist zu einem kleinen Stand gefaltet. Daneben liegen ein violettes und ein hellblaues Blatt.',
  },
  example: {
    langNames: { zh: 'Traditionelles Chinesisch', ja: 'Japanisch', en: 'Englisch' },
    platforms: { pc: 'PC', console: 'Konsole', handheld: 'Handheld', mobile: 'Mobil' },
    editions: { std: 'Standard', deluxe: 'Deluxe', complete: 'Komplettedition' },
    releases: [
      { id: 'pc-std', platform: 'pc', edition: 'std', langs: ['zh', 'ja', 'en'] },
      { id: 'pc-deluxe', platform: 'pc', edition: 'deluxe', langs: ['zh', 'ja', 'en'] },
      { id: 'console-std', platform: 'console', edition: 'std', langs: ['ja', 'en'] },
      { id: 'console-complete', platform: 'console', edition: 'complete', langs: ['zh', 'ja', 'en'] },
      { id: 'handheld-asia', platform: 'handheld', edition: 'std', region: 'Asien-Version', langs: ['zh', 'ja'] },
      { id: 'handheld-japan', platform: 'handheld', edition: 'std', region: 'Japan-Version', langs: ['ja'] },
      { id: 'handheld-complete', platform: 'handheld', edition: 'complete', langs: ['ja'] },
      { id: 'mobile-std', platform: 'mobile', edition: 'std', langs: [], state: 'Angekündigt' },
    ],
  },

  landing: {
    hero: {
      headline: 'Jedes Spiel und jede Version klar erfasst.',
      lede: 'Veröffentlichungen, Versionen und Sprachen sind für jede Plattform getrennt erfasst. Bewertungen nennen die Version, Guides und Wiki+ gehören zum selben Spiel. Hier kannst du auch Spiele unabhängiger Entwickler kaufen und dauerhaft behalten.',
    },
    releases: {
      label: 'Veröffentlichungen',
      headline: 'Jede Veröffentlichung eines Spiels wird einzeln erfasst.',
      lead: 'PC, Konsole, Handheld und Mobilgeräte haben eigene Veröffentlichungen. Auch Regionalversionen, Deluxe- und Kompletteditionen werden einzeln erfasst. Jeder Eintrag nennt Sprachen, Anforderungen und Angebotsverlauf.',
      items: [
        { id: 'handheld-asia', title: 'Handheld, Asien-Version', body: 'Text: Traditionelles Chinesisch und Japanisch. Region: Asien. Die Japan-Version wird separat erfasst und enthält nur japanischen Text.' },
        { id: 'pc-std', title: 'PC, Standard', body: 'Text und Untertitel: Traditionelles Chinesisch, Japanisch und Englisch. Sprachausgabe: Japanisch. Alle drei Angaben werden getrennt erfasst.' },
        { id: 'console-complete', title: 'Konsole, Komplettedition', body: 'Text: Traditionelles Chinesisch, Japanisch und Englisch. Inhalt: Hauptspiel und alle Erweiterungen mit eigenen Seiten und Bewertungen.' },
        { id: 'mobile-std', title: 'Mobil, Standard', body: 'Sprache: unbekannt. Status: angekündigt. Solange die Angaben unbestätigt sind, werden keine Sprachen anderer Plattformen übernommen.' },
      ],
      caption: 'Beispiel: vier Veröffentlichungen eines fiktiven Abenteuerspiels.',
      link: 'So findest du eine spielbare Version',
    },
    versions: {
      text: 'Bewertungen gelten für die Version. Downloads bestimmen keine Rangliste.',
      more: 'Nicht auffindbare Angaben werden als „unbekannt“ angezeigt.',
    },
    store: {
      label: 'Shop',
      headline: 'Gekaufte Spiele und ihre Dateien bleiben bei dir.',
      lead: 'Der REZICS-Shop verkauft Spiele und Visual Novels von unabhängigen Vertragspartnern. Ohne DRM und ohne Launcher. Die Entwickler behalten ihr Urheberrecht. Abzüge sind in der Abrechnung einzeln aufgeführt. Auf derselben Seite findest du Bewertungen, Diskussionen und Wiki+.',
      link: 'Shop und Kaufablauf ansehen',
    },
    pages: {
      label: 'Sechs Seiten',
      headline: 'Sechs Themen, jeweils eine Seite.',
      lines: {
        releases: 'Sprache, Plattform und Version gemeinsam filtern',
        store: 'Einmal zahlen und gemäß den Kaufbedingungen erneut herunterladen',
        library: 'Für jeden Durchgang die Plattform festhalten',
        reviews: 'Jede Bewertung nennt Version und Gruppe',
        guides: 'Passend zu deinem Fortschritt anzeigen und mit allen Adaptionen verknüpfen',
        creators: 'Urheberrecht behalten und Abzüge einzeln abrechnen',
      },
    },
    connections: {
      label: 'Verwandte Arten',
      headline: 'Fünf Arten von Verknüpfungen zu Spielen',
      lead: 'Adaptionen, Vorlagen und gemeinsame Mitwirkende verbinden Spiele mit anderen Arten von Werken. Du kannst vom Roman zur Spieladaption wechseln und Lesefortschritt und Spielstand getrennt festhalten.',
      tiles: [
        { to: 'visual-novels', line: 'Veröffentlichungen nach Sprache, Plattform und Umfang auswählen' },
        { to: 'books', line: 'Romanvorlagen und Romane nach dem Spiel' },
        { to: 'anime', line: 'Spiele als Anime-Adaption und Anime als Spieladaption' },
        { to: 'manga', line: 'Manga zum selben Stoff mit Verknüpfung zum Spiel' },
        { to: 'software', line: 'Engines, Entwicklungstools und Mods mit Versionsangaben zum Spiel' },
      ],
    },
    closing: 'Finde zuerst die passende Version.',
  },

  releases: {
    hero: {
      headline: 'Finde eine Version, die du spielen kannst.',
      lead: 'Deine Sprache und dein Gerät müssen bei derselben Veröffentlichung verfügbar sein. REZICS erfasst Plattformen, Regionen und Versionen getrennt und gleicht sie beim Filtern gemeinsam ab.',
    },
    filter: {
      label: 'Filter',
      headline: 'Alle Filter gelten für dieselbe Veröffentlichung.',
      lead: 'Wählst du Traditionelles Chinesisch und Handheld, bleiben nur Veröffentlichungen übrig, die beides erfüllen. Eine andere Version mit chinesischem Text oder ein Handheld-Release auf einer anderen Plattform zählen nicht.',
      groups: { lang: 'Sprache', platform: 'Plattform' },
      clear: 'Filter löschen',
      none: 'Keine passende Version',
      result: 'Passende Veröffentlichungen: {count}',
      resultNone: 'Keine Veröffentlichung erfüllt alle Filter.',
      corner: 'Plattform / Version',
      caption: 'Beispiel: Veröffentlichungen eines fiktiven Abenteuerspiels.',
    },
    states: {
      label: 'Veröffentlichungsstatus',
      headline: 'Von der Ankündigung bis zum Ende des Angebots, jeder Schritt einzeln erfasst.',
      lead: 'Daten können sich ändern, der Verlauf bleibt erhalten. Folge einem Spiel und erfahre, wie es weitergeht.',
      items: [
        { title: 'Angekündigt', body: 'Der Entwickler kündigt das Spiel oder die Version an und nennt die Quelle.' },
        { title: 'Geplant', body: 'Ein Veröffentlichungsdatum wurde angekündigt. Es ist eine Planung, noch keine Veröffentlichung.' },
        { title: 'Veröffentlicht', body: 'Das Spiel ist erhältlich und spielbar. Das bestätigte Datum wird angegeben.' },
        { title: 'Verschoben', body: 'Das Datum wurde geändert. Das vorherige Datum bleibt im Verlauf.' },
        { title: 'Nicht mehr erhältlich', body: 'Der Verkauf oder die Bereitstellung wurde eingestellt. Der Beginn ist datiert.' },
      ],
    },
    languages: {
      label: 'Sprache',
      headline: 'Text, Sprachausgabe und Untertitel, drei Sprachangaben.',
      lead: '„Chinesisch verfügbar“ kann nur Untertitel oder auch Sprachausgabe bedeuten. REZICS erfasst Text, Sprachausgabe und Untertitel getrennt. Ein übersetzter Titel belegt keine Übersetzung des Spiels.',
      items: [
        { title: 'Offizielle chinesische Fassung', body: 'Sie wird vom Anbieter bereitgestellt und bei der Veröffentlichung erfasst, in der sie tatsächlich enthalten ist.' },
        { title: 'Fanübersetzung ins Chinesische', body: 'Das Team wird genannt, ebenso die Basisversion und der Umfang. Die Übersetzung wird nie als offiziell gekennzeichnet.' },
        { title: 'Später ergänzte Sprachen', body: 'Eine mit einer Aktualisierung hinzugefügte Sprache wird als neue Sprachversion erfasst und auf ihre Quelle zurückgeführt. Der ursprüngliche Eintrag bleibt unverändert.' },
      ],
    },
    bundles: {
      label: 'Sammlungen und Erweiterungen',
      headline: 'Eine Veröffentlichung kann mehrere Werke enthalten.',
      lead: 'Enthaltene Werke behalten ihren eigenen Eintrag. Du kaufst eine Veröffentlichung, Bewertungen und Diskussionen gehören weiterhin zu den einzelnen Werken darin.',
      tiles: [
        { title: 'Komplettedition', body: 'Hauptspiel und alle Erweiterungen' },
        { title: 'Hauptspiel', body: 'Das Spiel selbst mit eigenen Bewertungen' },
        { title: 'Erweiterungen', body: 'Eigenständige Inhalte mit eigener Seite und Verknüpfung zum Hauptspiel' },
        { title: 'Soundtrack', body: 'Ein Musikwerk, aufgeführt beim Komponisten' },
        { title: 'Remake', body: 'Ein eigenes Werk, mit einer Verknüpfung zum Original' },
        { title: 'Mod', body: 'Die benötigte Spielversion angeben' },
      ],
      caption: 'Beispiel: eine Komplettedition und die zugehörigen Werke. Wird dasselbe Spiel unverändert auf eine neue Plattform übertragen, entsteht eine neue Veröffentlichung.',
    },
    requirements: {
      label: 'Anforderungen',
      headline: 'Bei Anforderungen muss die Quelle dabei stehen.',
      lead: 'Auf demselben Gerät können die Angaben des Anbieters und die Testergebnisse voneinander abweichen. Beide stehen mit Quelle und Datum nebeneinander.',
      tiles: [
        { title: 'Offizielle Angabe', body: 'Mindest- und empfohlene Anforderungen mit Quelle und Spielversion' },
        { title: 'Spielertest', body: 'Hardware, Einstellungen, Ergebnis und Testdatum' },
        { title: 'Noch unbekannt', body: 'Unbekannt, inkompatibel und veraltet sind drei verschiedene Status' },
      ],
    },
    offers: {
      text: 'Wo Angaben fehlen,',
      more: 'steht „unbekannt“.',
      note: 'Angebote und Preise werden für jeden Shop und jede Region mit Datum erfasst. Preisänderungen bleiben nachvollziehbar. Wo Angaben fehlen, wird nicht der Preis eines einzelnen Shops als allgemeingültig ausgegeben.',
    },
    closing: 'Sprache und Gerät müssen bei derselben Veröffentlichung zusammenpassen.',
  },

  store: {
    hero: {
      headline: 'Einmal kaufen, Dateien behalten.',
      lead: 'Die Spiele und Visual Novels hier stammen von unabhängigen Entwicklern mit Vertrag bei REZICS. Ohne DRM und Launcher. Gekaufte Spiele lassen sich gemäß den Kaufbedingungen erneut herunterladen.',
    },
    checkout: {
      label: 'Vor dem Kauf',
      headline: 'Vor dem Kauf stehen acht Dinge auf der Seite.',
      lead: 'Jede Spielseite führt diese Angaben auf, bevor du bezahlst.',
      items: [
        { title: 'Version und Sprache', body: 'Welche Version du kaufst und welche Sprachen enthalten sind.' },
        { title: 'Systemanforderungen', body: 'Welche Plattformen unterstützt werden und welche Voraussetzungen gelten.' },
        { title: 'Preis inklusive Steuern', body: 'Vor der Zahlung ist der Gesamtpreis inklusive Steuern sichtbar.' },
        { title: 'Verkäufer', body: 'Wer das Spiel verkauft und wer deine Zahlung erhält.' },
        { title: 'Lizenz', body: 'Welche Nutzungslizenz du erhältst.' },
        { title: 'Rückerstattung', body: 'Wann und wie eine Rückerstattung möglich ist.' },
        { title: 'Externe Konten', body: 'Benötigt das Spiel ein anderes Konto oder eine Laufzeitumgebung, steht das vor dem Kauf dabei.' },
        { title: 'Angaben zu KI', body: 'Die Entwickler geben an, ob Bilder, Texte oder Übersetzungen mit KI erstellt wurden.' },
      ],
    },
    purchase: {
      label: 'Einmaliger Kauf',
      headline: 'Von der Demo bis zum erneuten Download, sechs Schritte nach dem Kauf.',
      lead: 'Du kaufst direkt auf der Spielseite, neben Bewertungen, Diskussionen und Wiki+.',
      steps: [
        { title: 'Demo spielen', body: 'Probiere die Demo aus, bevor du dich entscheidest.' },
        { title: 'Bezahlen', body: 'Einmal bezahlen. Der Beleg wird gespeichert.' },
        { title: 'Herunterladen', body: 'Die Datei für deine Plattform.' },
        { title: 'Aktualisieren', body: 'Korrekturen enthalten ein Änderungsprotokoll.' },
        { title: 'Erneut herunterladen', body: 'Melde dich auf einem neuen Rechner an und lade es erneut herunter.' },
        { title: 'Nach dem Ende des Angebots', body: 'Bei einer normalen Einstellung des Angebots gilt deine Lizenz weiter.' },
      ],
    },
    keep: {
      label: 'Was dir bleibt',
      headline: 'Drei Dinge, die dir bleiben',
      lead: 'Die DRM-freien Dateien kannst du gemäß den Kaufbedingungen erneut herunterladen. Belege bleiben in deiner Kaufhistorie. Die vor dem Kauf angegebene Nutzungslizenz wird zusammen mit ihren Bedingungen gespeichert.',
      more: 'DRM-frei bedeutet nicht, dass du Dateien weiterverkaufen oder verbreiten darfst. Du erhältst eine persönliche Nutzungslizenz. Rückerstattungen richten sich nach den Angaben auf der Seite. Gesetzliche Verbraucherrechte bleiben unberührt.',
    },
    privacy: {
      text: 'Welche Spiele du kaufst,',
      more: 'bleibt für die Entwickler unsichtbar.',
      note: 'Entwickler erhalten nur Angaben, die sie für Abrechnung und Support benötigen. Deine Spielhistorie, Listen und andere Aktivitäten werden nicht durch einen Kauf weitergegeben.',
    },
    refuses: {
      label: 'Was der Shop nicht tut',
      headline: 'Was dieser Shop nicht tut',
      items: [
        { title: 'Kein Launcher erforderlich', body: 'Um gekaufte Spiele zu spielen, musst du kein REZICS-Programm installieren.' },
        { title: 'Kein DRM', body: 'REZICS versieht Dateien nicht mit einer Aktivierungsprüfung.' },
        { title: 'Keine Spiele ab 18', body: 'Spiele mit den Einstufungen R18 und R18G werden nicht verkauft, auch nicht mit geändertem Etikett oder als Patch.' },
        { title: 'Keine ungeprüften Angebote', body: 'Spiele im Shop stammen von Entwicklern mit Vertrag bei REZICS. Die Rechte werden vor dem Angebot geprüft.' },
      ],
    },
    closing: 'Vor dem Kauf alles wissen, danach das Spiel behalten.',
  },

  library: {
    hero: {
      headline: 'Deine Spielebibliothek, über Plattformen und Arten hinweg.',
      lead: 'Spiele auf PC, Konsole, Handheld und Mobilgerät stehen am selben Ort. Für jeden Durchgang werden Plattform und Version festgehalten. Gelesene Bücher und gesehene Anime findest du daneben.',
    },
    status: {
      label: 'Status',
      headline: 'Von „Möchte ich spielen“ bis „Durchgespielt“, jeder Status einzeln erfasst.',
      items: [
        { title: 'Möchte ich spielen', body: 'Markierst du ein Spiel als „Möchte ich spielen“, folgst du ihm. Bei einer neuen Version in einer deiner Sprachen erhältst du eine Benachrichtigung.' },
        { title: 'Spiele ich gerade', body: 'Bei Spielen mit Kapiteln hältst du Fortschritt und Version fest. Diskussionen und Wiki+ verwenden diese Angaben, um Spoiler auszublenden.' },
        { title: 'Pausiert', body: 'Du legst das Spiel vorübergehend beiseite. Dein Fortschritt bleibt erhalten, damit du später dort weiterspielen kannst.' },
        { title: 'Durchgespielt', body: 'Der Abschluss wird für dieses Werk festgehalten. Erweiterungen in einer Komplettedition werden einzeln erfasst.' },
        { title: 'Abgebrochen', body: 'Wenn du nicht weiterspielen möchtest, markiere es als abgebrochen. Der Eintrag bleibt erhalten. Bei einem neuen Versuch beginnst du einen weiteren Durchgang.' },
      ],
    },
    slots: {
      label: 'Spielverlauf',
      headline: 'Jeder Durchgang hat einen eigenen Eintrag.',
      lead: 'Beim zweiten Spielen desselben Titels beginnt ein neuer Durchgang, der den ersten nicht überschreibt. Für jeden Durchgang werden Plattform, Version und Fortschritt festgehalten.',
      columns: ['Durchgang', 'Plattform und Version', 'Status'],
      rows: [
        { slot: 'Erster Durchgang', release: 'Handheld, Asien-Version', state: 'Durchgespielt' },
        { slot: 'Zweiter Durchgang', release: 'PC, Version 1.2', state: 'Spiele ich gerade, Kapitel 5' },
        { slot: 'Dritter Durchgang', release: 'Konsole, Komplettedition', state: 'Pausiert, in einer Erweiterung' },
      ],
      caption: 'Beispiel: Besitz und Spielverlauf werden getrennt erfasst. Ein Kauf bedeutet nicht, dass du das Spiel gespielt hast.',
    },
    together: {
      label: 'Eine Bibliothek',
      headline: 'Bücher, Anime, Manga und Spiele in einer Bibliothek.',
      lead: 'Der Fortschritt wird je nach Werk in passenden Einheiten erfasst. Listen können verschiedene Arten verbinden: Eine Liste für den Sommer kann ein Spiel, den Roman als Vorlage und die Anime-Adaption enthalten. Ordne die Einträge, ergänze Notizen und exportiere die ganze Liste.',
      tiles: [
        { to: 'games', name: 'Spiel', at: 'Kapitel 5' },
        { to: 'books', name: 'Roman', at: 'Band 3' },
        { to: 'anime', name: 'Anime', at: 'Folge 8' },
        { to: 'manga', name: 'Manga', at: 'Kapitel 42' },
        { to: 'visual-novels', name: 'Visual Novel', at: 'Route 2' },
      ],
      caption: 'Beispiel: fünf Arten von Werken in einer Bibliothek, jeweils mit eigenen Einheiten.',
    },
    playtime: {
      label: 'Spielzeit',
      headline: 'Spielzeit, getrennt nach Plattform und Spielweise.',
      lead: 'Wenn du wissen möchtest, ob deine Zeit heute Abend für ein Spiel reicht, brauchst du verlässliche Angaben. REZICS verwendet nur freiwillig eingereichte Spielzeiten.',
      items: [
        { title: 'Nach Plattform', body: 'Spielzeiten auf PC und Handheld werden getrennt berechnet. Einträge ohne Plattformangabe bilden eine eigene Gruppe.' },
        { title: 'Nach Spielweise', body: 'Hauptgeschichte und vollständiges Sammeln sind zwei verschiedene Spielweisen.' },
        { title: 'Nur abgeschlossene Durchgänge', body: 'Nicht abgeschlossene Durchgänge und Einträge ohne Zeitangabe fließen nicht in den Durchschnitt ein.' },
        { title: 'Mit Anzahl', body: 'Neben dem Durchschnitt stehen der Bereich des Medianwerts und die Zahl der Einträge.' },
      ],
      note: 'Deine Spielzeit ist standardmäßig privat. Nur wenn du sie beitragen möchtest, fließt sie in die Statistik ein. Öffentlich sind nur zusammengefasste Ergebnisse.',
    },
    takeout: {
      text: 'Deine Spielebibliothek gehört dir,',
      more: 'und du kannst sie jederzeit mitnehmen.',
      note: 'Der Export ist kostenlos. Importierte Einträge behalten ihre Quelle und Zuordnung. Auch wenn du dich nicht anmelden kannst, kannst du einen Export anfordern.',
    },
    closing: 'Jeder Durchgang bleibt in deiner Bibliothek.',
  },

  reviews: {
    hero: {
      headline: 'Nenne zuerst die Version, dann gib deine Bewertung ab.',
      lead: 'Spiele werden nach ihrer Veröffentlichung weiterentwickelt. Bewertungen für Version 1.0 sollten nicht für 2.0 gelten, und der Geschmack einer Community sollte nicht für alle sprechen. Deshalb nennt jede Bewertung Version und Gruppe.',
    },
    versions: {
      label: 'Version',
      headline: 'Jede Version hat ihre eigenen Bewertungen.',
      lead: 'Deine Bewertung gilt für die Version, die du gespielt hast. Ein versionsübergreifender Gesamtwert ist eine eigene Zahl mit erklärter Berechnung.',
      tiles: [
        { title: 'Version 1.0', body: 'Version am Veröffentlichungstag' },
        { title: 'Version 1.1', body: 'Aktualisierung mit Korrektur für Spielstände' },
        { title: 'Version 1.2', body: 'Ein neues Level hinzugefügt' },
        { title: 'Version 2.0', body: 'Große Aktualisierung' },
        { title: 'Komplettedition', body: 'Veröffentlichung mit allen Erweiterungen' },
      ],
      caption: 'Beispiel: Versionen eines fiktiven Spiels.',
    },
    who: {
      label: 'Gruppe',
      headline: 'Welche Gruppe hinter einer Bewertung steht',
      lead: 'Bewertungen der Plattform, deiner Community und der am häufigsten bewertenden Communities stehen nebeneinander. Aktuelle und alle Bewertungen beantworten unterschiedliche Fragen und werden nicht vermischt.',
      items: [
        { title: 'Anzahl und Verteilung', body: 'Jede Bewertung zeigt Anzahl und Verteilung.' },
        { title: 'Noch nicht genug Bewertungen', body: 'Solange es nicht genug Bewertungen gibt, werden nur Anzahl und Verteilung angezeigt, kein Durchschnitt.' },
        { title: 'Importierte Bewertungen', body: 'Bewertungen aus anderen Websites sind getrennt markiert und fließen nicht in die REZICS-Bewertungen ein.' },
      ],
    },
    targets: {
      label: 'Gegenstand der Rezension',
      headline: 'Geht es um Geschichte, Übersetzung oder Umsetzung?',
      lead: 'Jede Rezension nennt zuerst ihren Gegenstand. Eine gute Geschichte und eine schlechte Übersetzung lassen sich getrennt beurteilen. Rezensionen können auch ohne Bewertung veröffentlicht werden.',
      tiles: [
        { title: 'Geschichte', body: 'Handlung und Figuren' },
        { title: 'Übersetzung', body: 'Übersetzungsqualität einer Sprachversion' },
        { title: 'Umsetzung', body: 'Spielmechanik, Grafik, Musik und Technik' },
        { title: 'Diese Version', body: 'Tatsächliche Leistung auf einer Plattform und Version' },
        { title: 'Figur in dieser Version', body: 'Ändert nicht die Bewertung der Figur selbst' },
      ],
    },
    rules: {
      label: 'Ranglisten',
      headline: 'Wie eine Rangliste entsteht, wird erklärt.',
      items: [
        { title: 'Downloads werden nicht gezählt', body: 'REZICS erfasst keine Downloads und verwendet sie daher nicht für Sortierungen oder Anzeigen.' },
        { title: 'Empfehlungen nennen ihren Grund', body: 'Wenn eine Community ein Spiel empfiehlt, verweist der Eintrag auf die Entscheidung dazu.' },
        { title: 'Beliebtheit ist kein Beleg', body: 'Die Zahl der Bewertungen beeinflusst nur die Sortierung, nicht die Kategorie oder Angaben eines Spiels.' },
        { title: 'Spoiler werden eigens markiert', body: 'Communities können über Spoiler-Markierungen abstimmen. Diese bleiben von Warnungen des Autors getrennt.' },
      ],
    },
    talk: {
      text: 'Diskussionen, Rezensionen und Korrekturen,',
      more: 'an getrennten Orten.',
      note: 'Gespräche über Guides, Antworten auf Rezensionen und Korrekturen haben eigene Bereiche. Beim Wechsel zwischen ihnen bleiben die gewählte Version und dein Spoilerfortschritt erhalten.',
    },
    closing: 'Jede Bewertung nennt Version und Gruppe.',
  },

  guides: {
    hero: {
      headline: 'Sieh nur, was zu deinem Fortschritt passt.',
      lead: 'Figuren, Orte, Levels und Guides sind mit demselben Spiel verknüpft. Wiki+ blendet Spoiler passend zu deinem Kapitel- oder Routenfortschritt aus.',
    },
    fog: {
      label: 'Spoiler',
      headline: 'Noch nicht erreichte Stellen bleiben ausgeblendet.',
      lead: 'Bis zu deinem gewählten Fortschritt werden Figuren, Orte und Ereignisse angezeigt. Spätere Inhalte bleiben verborgen, lassen sich aber gemeinsam öffnen. Für abgemeldete Besucher sind Spoiler standardmäßig ausgeblendet.',
    },
    guides: {
      label: 'Guides',
      headline: 'Guides nennen ihre Version.',
      lead: 'Dasselbe Level kann in Version 1.0 und 2.0 ganz anders funktionieren. Guides nennen die passende Version und Plattform. Auch nach einer Aktualisierung ist klar, für welche Version ein Guide geschrieben wurde.',
      more: 'Von Communities zusammengestellte Mod-Sammlungen nennen die passende Spielversion und ob die Kompatibilität geprüft wurde. Jede Änderung wird protokolliert. Du siehst, wer was geändert hat, kannst Versionen vergleichen und Änderungen rückgängig machen.',
    },
    rules: {
      label: 'Wiki+',
      headline: 'Fünf Regeln für Wiki+',
      items: [
        { title: 'Ein Eintrag, überall gleich', body: 'Infoboxen, Filter und Listen verwenden dieselben Figurendaten. Eine Korrektur gilt überall.' },
        { title: 'KI-Agenten schlagen vor, Menschen prüfen', body: 'Agenten können neue belegte Angaben vorschlagen. Inhalte von Agenten erscheinen erst nach menschlicher Prüfung.' },
        { title: 'Eine Figur hat nur einen Eintrag', body: 'Dieselbe Figur in Spiel, Roman und Anime hat nur einen Eintrag. Sprecher werden bei der Figur und dem Werk aufgeführt.' },
        { title: 'Aus Skripten erfassen', body: 'Bei Visual Novels mit unterstütztem Skriptformat können Personen mit Zugriff auf das Skript Figuren, Orte und Ereignisse lokal abschnittsweise erfassen und als Vorschläge einreichen. REZICS erhält belegte Vorschläge, aber nicht das vollständige Skript.' },
        { title: 'Alles exportieren', body: 'Wiki-Inhalte und Änderungsverlauf lassen sich exportieren.' },
      ],
    },
    adaptations: {
      label: 'Adaptionen',
      headline: 'Vom Original zum Spiel, Verknüpfung für Verknüpfung.',
      lead: 'Nehmen wir „A Certain Magical Index“ von Kazuma Kamachi. Die Light Novel hat eine Manga-Fassung, drei Staffeln als Anime-Serie und einen Film. Außerdem gibt es ein Kampfspiel, eine Visual Novel und ein mobiles Rollenspiel. Auf REZICS ist jedes davon ein eigenes Werk, über „Adaptiert von“ mit dem Original verknüpft. Dieselbe Figur hat in jedem Werk denselben Eintrag.',
      chain: [
        { to: 'books', name: 'Light Novel', line: 'Vorlage: Hauptreihe, New Testament und Genesis Testament' },
        { to: 'manga', name: 'Manga', line: 'Seit 2007 veröffentlicht', rel: 'Adaptiert von' },
        { to: 'anime', name: 'Anime', line: 'Drei Staffeln als Anime-Serie und ein Film', rel: 'Adaptiert von' },
        { to: 'visual-novels', name: 'Visual Novel', line: 'Spiel aus dem Jahr 2013', rel: 'Adaptiert von' },
        { to: 'games', name: 'Spiel', line: 'Kampfspiel und mobiles Rollenspiel', rel: 'Adaptiert von' },
      ],
      note: 'Veröffentlichungsreihenfolge und empfohlene Lese- oder Spielreihenfolge werden getrennt erfasst. Auch eine Reihenfolge nach der Handlungschronologie lässt sich erstellen.',
      caption: '„A Certain Magical Index“ zeigt beispielhaft, wie Werke miteinander verknüpft werden.',
    },
    zone: {
      text: 'Die Community eines Spiels',
      more: 'kann eine eigene Website haben.',
      note: 'Die Community eines Spiels hat Mitglieder, Regeln und Diskussionen. Eine Zone ist ihre eigene Website mit eigenem Pfad, eigener Navigation und Gestaltung. Dort finden Guides und Wiki+ Platz. Figuren- und Spieldaten stammen direkt aus dem REZICS-Verzeichnis.',
    },
    closing: 'Sieh Inhalte passend zu deinem Fortschritt und folge der Geschichte durch ihre Adaptionen.',
  },

  creators: {
    hero: {
      headline: 'Veröffentliche dein Spiel und behalte dein Urheberrecht.',
      lead: 'REZICS veröffentlicht Spiele und Visual Novels im Auftrag unabhängiger Entwickler. Spieler erhalten DRM-freie Dateien und Aktualisierungen. Du erhältst eine detaillierte Abrechnung und einen Eintrag, der alle deine Werke verbindet.',
    },
    rights: {
      label: 'Rechte',
      headline: 'Was du behältst und wofür du eine Lizenz erteilst',
      items: [
        { title: 'Urheberrecht', body: 'Das Spiel bleibt deins. REZICS erhält eine nicht ausschließliche Lizenz, die Dateien für den vereinbarten Zeitraum und die vereinbarten Regionen zu hosten, zu verkaufen und bereitzustellen.' },
        { title: 'Zusätzliche Zustimmung', body: 'Für Übersetzungen, Adaptionen, größere Änderungen, neue Versionen und das Training von KI mit deinem Werk ist deine gesonderte Zustimmung erforderlich.' },
        { title: 'Lizenzangabe', body: 'Die von dir angegebene Lizenz wird zusammen mit Version, Geltungsbereich und Datum festgehalten.' },
        { title: 'Vertragsende', body: 'Neue Verkäufe enden gemäß Vertrag. Bereits verdiente Beträge werden abgerechnet. Die Lizenzen der Spieler richten sich weiterhin nach den ursprünglichen Bedingungen und dem geltenden Recht.' },
      ],
    },
    ledger: {
      label: 'Abrechnung',
      headline: 'Die Abrechnung führt jeden Betrag einzeln auf.',
      rows: [
        { label: 'Vom Spieler gezahlter Betrag' },
        { label: 'Eingezogene Steuern', op: 'minus' },
        { label: 'Gebühren für Zahlungsabwicklung und Einzug', op: 'minus' },
        { label: 'Rückerstattungen und Rückbuchungen', op: 'minus' },
        { label: 'Nettoerlös', op: 'gleich', total: true },
        { label: 'Dein Anteil' },
      ],
      note: 'Kein Betrag wird doppelt abgezogen. Server, Hosting, Gehälter, Marketing und die Einkommensteuer von REZICS werden nicht von deinem Anteil abgezogen.',
      reserve: 'Falls eine Rücklage erforderlich ist, werden Grundlage, Betrag oder Höchstgrenze, Prüftermin und Freigaberegel festgehalten.',
      caption: 'Beispielabrechnung. Anwendbare Transaktionsgebühren, Verkaufsregionen und Anpassungen richten sich nach dem Vertrag.',
    },
    name: {
      label: 'Ein Name',
      headline: 'Ein Name verbindet alles, woran du gearbeitet hast.',
      lead: 'Deine Spiele, Romane, Soundtracks und Sprecherrollen gehören zu derselben Identität. Wenn Spieler dir folgen, sehen sie deine neuen Werke und Ankündigungen.',
      tiles: [
        { to: 'games', name: 'Spiel', role: 'Entwicklung' },
        { to: 'books', name: 'Roman', role: 'Autor' },
        { name: 'Soundtrack', role: 'Komposition' },
        { to: 'anime', name: 'Anime', role: 'Sprechrolle' },
      ],
      caption: 'Jeder Name im Abspann ist mit einem solchen Werkverzeichnis verknüpft.',
    },
    home: {
      label: 'Community und Website',
      headline: 'Nach der Veröffentlichung erhält dein Spiel eine eigene Community und Website.',
      lead: 'Richte eine Community für Diskussionen und eine Zone als offizielle Website ein. Ankündigungen, Veröffentlichungen und Änderungsprotokolle erscheinen direkt im Verzeichnis. Spieler, die deinem Spiel folgen, erhalten Hinweise in ihrer Sprache.',
      more: 'Bereite vor einer neuen Version ein Veröffentlichungspaket mit Bildern, Beschreibung und Zeitplan vor, auf das Medien und Spieler verweisen können. Mit dem lokalen Toolkit kannst du dein Skript nach Figuren und Ereignissen durchsuchen und ein Wiki+ für dein Spiel erstellen. Der vollständige Skripttext wird nicht an REZICS gesendet.',
    },
    rules: {
      text: 'Vor dem Verkauf',
      more: 'muss alles klar sein.',
      note: 'Demos, Beschreibungen, Screenshots und Kompatibilitätsangaben müssen stimmen. Benötigt das Spiel ein externes Konto oder eine Laufzeitumgebung, muss das vor dem Kauf angegeben werden. Die KI-Nutzung wird wahrheitsgemäß erklärt. Spiele für Erwachsene dürfen nicht angeboten werden.',
    },
    closing: 'Dein Werk bleibt deins und die Abrechnung ist klar.',
  },
};

export default {
  id: 'games',
  base: '/games/',
  name: 'Spiel',
  theme: { kind: 'games' },
  next: 'software',
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'REZICS Spiele: Verzeichnis, Shop und Spielebibliothek',
        description:
          'Jedes Spiel hat auf REZICS eine eigene Seite. Plattformen und Versionen werden getrennt erfasst. Finde eine Version für dein Gerät und deine Sprache, halte jeden Durchgang fest und kaufe Dateien unabhängiger Entwickler, die du behalten kannst.',
      },
    },
    {
      slug: 'releases',
      label: 'Plattform und Version',
      meta: {
        title: 'Plattformen und Versionen: Finde eine spielbare Version',
        description:
          'Für dasselbe Spiel werden PC-, Konsolen-, Handheld- und Mobilversionen sowie Regional-, Deluxe- und Kompletteditionen auf REZICS einzeln erfasst. Sprache, Anforderungen und Angebote stehen getrennt. Filter gelten für dieselbe Veröffentlichung.',
      },
    },
    {
      slug: 'store',
      label: 'Shop',
      meta: {
        title: 'REZICS-Shop: Spiele kaufen und behalten',
        description:
          'REZICS veröffentlicht Spiele und Visual Novels von unabhängigen Vertragspartnern. Ohne DRM und Launcher, mit erneutem Download gemäß den Kaufbedingungen. Vor dem Kauf siehst du Version, Sprache, Anforderungen, Preis inklusive Steuern und Rückerstattungsbedingungen.',
      },
    },
    {
      slug: 'library',
      label: 'Spielebibliothek',
      meta: {
        title: 'Spielebibliothek: Jeder Durchgang bleibt erhalten',
        description:
          'Markiere Spiele als „Möchte ich spielen“, „Spiele ich gerade“, pausiert, durchgespielt oder abgebrochen. Für jeden Durchgang werden Plattform und Version festgehalten. Bücher, Anime und Manga sind in derselben Bibliothek. Der kostenlose Export ist jederzeit möglich.',
      },
    },
    {
      slug: 'reviews',
      label: 'Bewertungen und Rezensionen',
      meta: {
        title: 'Spielbewertungen und Rezensionen: Version angeben',
        description:
          'Spielbewertungen auf REZICS nennen Version und Gruppe sowie Anzahl und Verteilung. Rezensionen können ohne Bewertung veröffentlicht werden und unterscheiden Geschichte, Übersetzung und Umsetzung. Downloads beeinflussen keine Ranglisten.',
      },
    },
    {
      slug: 'guides',
      label: 'Guides und Wiki+',
      meta: {
        title: 'Guides, Wiki+ und Adaptionen',
        description:
          'Guides, Figuren und Orte stehen im Wiki+ des Spiels. Spoiler werden passend zu deinem Fortschritt ausgeblendet und alle Änderungen protokolliert. Romane, Anime und Manga als Adaptionen sind mit dem Spiel verknüpft. Communities können eine eigene Website einrichten.',
      },
    },
    {
      slug: 'creators',
      label: 'Entwickler',
      meta: {
        title: 'Entwickler: Veröffentliche dein Spiel auf REZICS',
        description:
          'Unabhängige Entwickler veröffentlichen Spiele und Visual Novels über REZICS. Sie behalten ihr Urheberrecht, stellen DRM-freie Dateien und Aktualisierungen bereit und erhalten eine Abrechnung mit Steuern, Gebühren und Rückerstattungen. Eine Identität verbindet ihre Spiele, Romane und Musik.',
      },
    },
  ],
  strings,
} satisfies MiniSite<GamesStrings>;
