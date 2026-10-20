// The 視覺小說 site: every visible string of /visual-novels/ and its six inner pages. Design
// record: src/sites/visual-novels/SITE.md; claims and sources: src/sites/visual-novels/facts.md.
// The six releases below are one illustrative dataset (labelled 示意資料 on the pages), shared by
// the landing's three queries and the releases table so both agree.
import type { Item, Meta, MiniSite, PartId } from '../schema';

/** The four conditions a release is qualified by. */
export type Dim = 'language' | 'platform' | 'region' | 'coverage';

export interface VnRelease {
  id: 'r1' | 'r2' | 'r3' | 'r4' | 'r5' | 'r6';
  /** Full name, as in the table. */
  name: string;
  /** Option keys of `options`, one per condition (the content, not the box). */
  values: Record<Dim, string>;
  /** Option key of the title language when it differs from the content language. */
  titleLanguage?: string;
  coverageNote?: string;
  translator: string;
  source: string;
  status: string;
}

const meta = (title: string, description: string): Meta => ({ title, description });

const releases: VnRelease[] = [
  { id: 'r1', name: 'Originalversion (1.02)', values: { language: 'ja', platform: 'pc', region: 'jp', coverage: 'full' }, translator: 'Keine', source: 'Keine', status: 'Offiziell' },
  { id: 'r2', name: 'Offizielle chinesische Version', values: { language: 'zh', platform: 'console', region: 'tw', coverage: 'full' }, translator: 'Verlag', source: 'Originalversion', status: 'Offiziell' },
  { id: 'r3', name: 'Fan-Übersetzungspatch, Version 1', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'partial' }, coverageNote: 'Gemeinsame Route und zwei Handlungsrouten', translator: 'Fan-Übersetzungsteam', source: 'Originalversion 1.02', status: 'Nicht offiziell' },
  { id: 'r4', name: 'Fan-Übersetzungspatch, Version 2', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'full' }, translator: 'Fan-Übersetzungsteam', source: 'Originalversion 1.02', status: 'Nicht offiziell' },
  { id: 'r5', name: 'Englische Demo', values: { language: 'en', platform: 'pc', region: 'any', coverage: 'trial' }, translator: 'Verlag', source: 'Originalversion', status: 'Offiziell' },
  { id: 'r6', name: 'Mobilversion', values: { language: 'ja', platform: 'mobile', region: 'tw', coverage: 'full' }, titleLanguage: 'zh', translator: 'Keine', source: 'Keine', status: 'Offiziell' },
];

const strings = {
  /** Labels shared by several pages of this site. */
  shared: {
    demo: 'Beispieldaten',
    dims: { language: 'Sprache', platform: 'Plattform', region: 'Region', coverage: 'Umfang' } as Record<Dim, string>,
    columns: { name: 'Versionierung', translator: 'Übersetzer', source: 'Grundlage', status: 'Status' },
    options: {
      language: { zh: 'Traditionelles Chinesisch', ja: 'Japanisch', en: 'Englisch' },
      platform: { pc: 'PC', console: 'Konsole', mobile: 'Mobilgerät' },
      region: { jp: 'Japan', tw: 'Taiwan', any: 'Beliebig' },
      coverage: { full: 'Vollständig', partial: 'Teilweise', trial: 'Demo' },
    } as Record<Dim, Record<string, string>>,
    /** Followed by the name of the condition a release fails. */
    fails: 'Nicht erfüllt:',
    titleOnly: 'Nur der Titel ist auf Chinesisch',
    match: 'Passend',
    closed: 'Noch nicht gelesen',
    nextPage: 'Nächste Seite',
    nextSite: 'Nächste Website',
    nextSiteLine: 'Finde anhand von Version und Kompatibilität den passenden MCP-Server.',
    /** The closing statement on every page of the site. */
    closing: 'Beginne beim nächsten Visual Novel mit einer spielbaren Version.',
    releases,
  },

  images: {
    routes: 'Ein violetter Papierstreifen teilt sich auf warmweißem Papier. Ein blauer Zweig führt nach rechts.',
    window: 'Violette, blaue und rosafarbene Blätter liegen übereinander. Eine Öffnung führt durch jede Schicht.',
    thread: 'Zwei verschieden dunkle violette Blätter sind durch ein Loch verbunden. Sie stehen für eine Übersetzung und ihre Quelle.',
    fold: 'Ein violetter Papierstreifen entfaltet sich Abschnitt für Abschnitt. Das Ende bleibt gefaltet.',
    sites: 'Ein violettes Blatt ist zu zwei getrennten kleinen Formen gefaltet, die eine gemeinsame Basis haben.',
  },

  landing: {
    hero: {
      headline: 'Für jede Version ist klar, ob sie Chinesisch enthält.',
      lede: 'REZICS nennt für jede Visual-Novel-Version Sprache, Plattform, Region und Umfang. Fan-Übersetzungen führen ihre Übersetzer und die zugrunde liegende Version auf.',
    },
    match: {
      label: 'Dieselbe Version',
      headline: 'Alle drei Bedingungen müssen für dieselbe Version gelten.',
      body: 'Die Auswahl eines Visual Novels ähnelt einer Route: Jede weitere Bedingung schließt einen unpassenden Weg aus. Sprache, Plattform und Umfang müssen alle für denselben Eintrag gelten. Eine chinesische Version, eine PC-Version und eine vollständige Version werden nicht zu einer Antwort zusammengesetzt.',
      queriesLabel: 'Ergebnisse für drei Filterkombinationen',
      /** A match: the release's name, then its translator and source. */
      answer: '{name}. Übersetzer: {translator}, Grundlage: {source}.',
      none: 'Keine passende Version. Eine Mobilversion mit nur chinesischem Titel zählt nicht.',
      caption: 'Beispieldaten: sechs Veröffentlichungen eines Visual Novels.',
    },
    statement: { text: 'Ein chinesischer Titel', more: 'bedeutet nicht, dass das Spiel auf Chinesisch ist.' },
    parts: {
      label: 'Teile',
      headline: 'Dieselben Teile erfüllen in Visual Novels verschiedene Aufgaben.',
      body: 'Alle Arten bestehen aus denselben Teilen. Visual Novels verwenden diese acht.',
      notes: {
        identity: 'Jedes Werk hat eine Identität. Originalversion, Portierungen, Übersetzungen und Patches gehören dazu.',
        editions: 'Jede Veröffentlichung nennt Sprache, Plattform, Region und Umfang.',
        names: 'Originaltitel, chinesische Übersetzungen, Umschrift und Aliase bleiben erhalten und nennen jeweils ihre Sprache.',
        credits: 'Skript, Illustration, Musik, Vertonung und Übersetzung verweisen auf die jeweilige Personenseite.',
        relations: 'Fortsetzungen, Ableger, Portierungen und Adaptionen verbinden Visual Novels mit Romanen, Anime und Manga.',
        facets: 'Sprache, Plattform, Region und Umfang müssen gemeinsam zu derselben Veröffentlichung passen.',
        progress: 'Der Lesefortschritt folgt den Routen und bestimmt, wie viele Inhalte angezeigt werden.',
        wiki: 'Figuren, Orte und Ereignisse stammen aus demselben Wiki und enden bei deiner Route.',
      } as Partial<Record<PartId, string>>,
    },
    pagesIndex: {
      label: 'Diese Website',
      headline: 'Sechs Seiten, ein Thema pro Seite.',
      rows: {
        releases: 'Versionen nach Sprache, Plattform, Region und Umfang vergleichen',
        translations: 'Wer übersetzt hat, auf welcher Grundlage und wie weit',
        characters: 'Figuren und Sprecher haben eigene Identitäten',
        spoilers: 'Nach Markierungen filtern und Enden selbst entdecken',
        wiki: 'Ein Wiki aus dem Skript erstellen',
        zones: 'Deutsche und japanische Website mit gemeinsamen Identitäten',
      },
    },
    neighbours: {
      label: 'Verbundene Arten',
      headline: 'Original und Adaption sind direkt verknüpft.',
      body: 'Visual Novels, Romane, Anime, Manga und Spiele stehen im selben Verzeichnis. Zum Beispiel A Certain Magical Index: Das Original ist eine Light Novel, dazu gibt es Manga und Anime sowie eine Visual-Novel-Adaption. Auf REZICS ist diese Visual Novel ein eigenes Werk, das mit „basiert auf“ auf das Original verweist. Bewertungen und Fortschritt werden getrennt erfasst.',
      items: [
        { kind: 'books', label: 'Romane derselben Geschichte stehen in derselben Bibliothek.' },
        { kind: 'anime', label: 'Anime-Adaptionen verweisen auf das Original und denselben Sprecher.' },
        { kind: 'manga', label: 'Manga und Original sind verknüpft. Der Fortschritt bleibt getrennt.' },
        { kind: 'games', label: 'Plattformen, Veröffentlichungen und Verfügbarkeit folgen denselben Regeln wie bei Spielen.' },
      ] as { kind: 'books' | 'anime' | 'manga' | 'games'; label: string }[],
    },
  },

  releases: {
    hero: {
      headline: 'Eine Version pro Zeile, mit allen Bedingungen.',
      lede: 'Ein Visual Novel kann eine Originalversion, Portierungen, offizielle Übersetzungen, Fan-Patches und Demos haben. REZICS führt für jede Version einen eigenen Eintrag mit Sprache, Plattform, Region und Umfang.',
    },
    matrix: {
      label: 'Filter',
      headline: 'Filterergebnisse beziehen sich auf einzelne Versionen.',
      body: 'Wenn du traditionelles Chinesisch, PC und vollständig auswählst, muss eine Version alle drei Bedingungen erfüllen. Andernfalls wird angezeigt, welche nicht erfüllt ist.',
      filtersLabel: 'Filterbedingungen',
      any: 'Beliebig',
      count: '{n} passende Versionen von insgesamt {total}',
      note: 'Nicht unterstützte Filterkombinationen werden erklärt und nicht einfach als leeres Ergebnis angezeigt.',
      caption: 'Beispieldaten: sechs Veröffentlichungen eines Visual Novels, gefiltert nach den aktuellen Bedingungen.',
    },
    languages: {
      text: 'Die Sprache des Titels',
      more: 'wird getrennt von der Inhaltssprache erfasst.',
      body: 'Für eine Veröffentlichung werden zwei Sprachen erfasst: die Sprache von Verpackung und Titel sowie die Sprache des Spieltexts. Eine Version mit übersetztem Titel erscheint nicht im Filter für traditionelles Chinesisch. Zweisprachige chinesisch-japanische Versionen werden unter beiden Sprachen angezeigt.',
    },
    coverage: {
      label: 'Umfang',
      headline: 'Vollständig, teilweise oder Demo, für jede Veröffentlichung angegeben.',
      body: 'Versionen mit unbekanntem Umfang werden als nicht angegeben markiert, nicht als vollständig.',
      items: [
        { title: 'Vollständig', body: 'Diese Version enthält das ganze Werk und alle Routen.' },
        { title: 'Teilweise', body: 'Der Umfang nennt die enthaltenen Teile, zum Beispiel die gemeinsame Route und zwei weitere Routen.' },
        { title: 'Demo', body: 'Eine Demo hat einen eigenen Eintrag und ist als Demo gekennzeichnet. Bewertungen der Demo bleiben von denen der vollständigen Version getrennt.' },
      ] as Item[],
    },
    status: {
      label: 'Status',
      headline: 'Eine Version kann an mehreren Orten erhältlich sein.',
      body: 'Dieselbe Version kann in mehreren Shops angeboten werden und bleibt ein Eintrag. Darunter stehen alle Bezugsquellen. Ankündigungen, geplante Termine, Verschiebungen und Veröffentlichungen werden getrennt erfasst, statt zu „erschienen“ zusammengefasst zu werden.',
      items: [
        { title: 'Offiziell', body: 'Eine vom Rechteinhaber anerkannte Veröffentlichung.' },
        { title: 'Nicht offiziell', body: 'Eine vom Rechteinhaber nicht anerkannte Veröffentlichung. Sie erhält einen eigenen Eintrag und wird nicht mit der offiziellen Version zusammengeführt.' },
        { title: 'Zurückgezogen', body: 'Ein nach der Veröffentlichung zurückgezogenes Werk bleibt erfasst.' },
        { title: 'Abgesagt', body: 'Angekündigte, aber nicht veröffentlichte Versionen sind als abgesagt gekennzeichnet und gelten nicht als erschienen.' },
      ] as Item[],
    },
    follow: {
      label: 'Folgen',
      headline: 'Sobald eine Version in einer Sprache erscheint, die du verstehst, wirst du benachrichtigt.',
      body: 'Wenn du einem Werk folgst, erscheinen neue Versionen in deiner Sprache in deinem Posteingang. Du kannst auch gezielt die Updates einer einzelnen Version verfolgen.',
    },
    finale: 'Die Grundlage jeder Übersetzung ist nachvollziehbar.',
  },

  translations: {
    hero: {
      headline: 'Jede Übersetzung nennt die Version, auf der sie beruht.',
      lede: 'Die chinesische Übersetzung und das japanische Original sind dasselbe Werk. Bewertungen, Figuren und Wiki+ gehören dazu. Die Übersetzung hat einen eigenen Eintrag, der Übersetzer, Grundlage und Umfang nennt.',
    },
    lineage: {
      label: 'Herkunft',
      headline: 'Fan-Übersetzungen bleiben Fan-Übersetzungen, offizielle bleiben offiziell.',
      body: 'Fan-Übersetzungen haben einen eigenen Eintrag mit Verweis auf die Originalversion. Sie werden nicht als offiziell gekennzeichnet. Offizielle Übersetzungen erhalten ebenfalls einen eigenen Eintrag. Beide stehen nebeneinander und sind klar zu unterscheiden.',
    },
    record: {
      label: 'Ein Übersetzungseintrag',
      headline: 'Übersetzer, Grundlage und Umfang einzeln aufgeführt.',
      items: [
        { title: 'Übersetzer', body: 'Übersetzungsteams und einzelne Übersetzer haben eigene Identitätsseiten. Dort siehst du alle Werke, die eine Person übersetzt hat.' },
        { title: 'Grundlage', body: 'Die Übersetzung verweist auf die genaue Grundlage, zum Beispiel Originalversion 1.02, nicht nur allgemein auf das „Original“. Ist die Quelle ungeklärt, wird das so angegeben, statt eine zu erraten.' },
        { title: 'Umfang', body: 'Die Veröffentlichung nennt ihren Umfang, etwa die gemeinsame Route, enthaltene Routen und Anhänge. So weißt du vor dem Start, ob das Spiel später wieder auf Japanisch wechselt.' },
        { title: 'Aktualisierungen', body: 'Jede neue Patch-Version erhält einen eigenen Veröffentlichungseintrag. Der Umfang älterer Versionen bleibt erhalten, damit klar ist, wer welche Version gespielt hat.' },
      ] as Item[],
    },
    reviews: {
      text: 'Die Übersetzung',
      more: 'wird separat bewertet.',
      body: 'Bewertungen können sich auf die Geschichte, die Übersetzung oder die Produktion beziehen. Ein gutes Skript und eine holprige Übersetzung erhalten getrennte Bewertungen. Du kannst auch nur die Bewertungen chinesischsprachiger Spieler ansehen.',
    },
    several: {
      label: 'Mehrere Übersetzungen',
      headline: 'Für dasselbe Werk kann es mehrere Übersetzungen geben.',
      body: 'Verschiedene Teams können dasselbe Werk übersetzen, ihre Fassungen selbst betreuen und jeweils genannt werden. Die Einträge überschreiben sich nicht. Leser wählen selbst eine Übersetzung aus. Communities können eine davon empfehlen.',
    },
    teams: {
      label: 'Für Übersetzungsteams',
      headline: 'Jede Patch-Version hat eine eigene Seite.',
      items: [
        { title: 'Teamseite', body: 'Teams und Mitglieder haben eigene Identitäten. Ihre übersetzten Werke und Veröffentlichungen stehen dort zusammen.' },
        { title: 'Veröffentlichungsseite', body: 'Jede Patch-Version hat eine eigene Seite und Diskussion. Rückmeldungen der Spieler stehen an einem Ort.' },
        { title: 'Folgen', body: 'Spieler können deinem Team folgen und werden über neue Patches benachrichtigt.' },
        { title: 'Berichtigung', body: 'Fehler in Veröffentlichungsdaten lassen sich berichtigen. Die Änderung gilt erst nach der Prüfung.' },
      ] as Item[],
    },
    finale: 'Figuren und Sprecher haben jeweils eine eigene Identität.',
  },

  characters: {
    hero: {
      headline: 'Eine Figur bleibt überall dieselbe.',
      lede: 'In Fortsetzungen, Portierungen, Anime-Adaptionen und Übersetzungen behält eine Figur dieselbe Identität. Alter, Aussehen und Anrede können je Werk mit ihrem jeweiligen Geltungsbereich erfasst werden. Dafür muss die Figur nicht aufgeteilt werden.',
    },
    variants: {
      label: 'Varianten',
      headline: 'Eine andere Persönlichkeit, eine andere Zeitlinie.',
      body: 'Nur wenn es nötig ist, werden Figuren getrennt. Eine andere Persönlichkeit oder dieselbe Person in einer anderen Zeitlinie wird als Variante erfasst und mit der Hauptfigur verknüpft. Die Verbindung nennt auch die Stelle, an der sie enthüllt wird. Vorher bleibt sie verborgen.',
      items: [
        { title: 'Figur A', body: 'Die Hauptfigur. A in Fortsetzungen, Portierungen und Adaptionen hat dieselbe Identität.' },
        { title: 'Eine andere Persönlichkeit von A', body: 'Persönlichkeitsvariante, verknüpft mit Figur A.' },
        { title: 'A in einer anderen Zeitlinie', body: 'Entsprechende Variante, verknüpft mit Figur A.' },
      ] as Item[],
      caption: 'Beispieldaten. Eine Variante ist mit genau einer Hauptfigur verknüpft. Die Hauptfigur selbst ist keine Variante.',
    },
    names: {
      label: 'Name',
      headline: 'Auch Namen können Spoiler enthalten.',
      body: 'Eine Figur kann einen ursprünglichen Namen, Übersetzungen, Spitznamen und einen geheimen Namen haben. Jeder Name nennt Sprache, Werk und Spoilerstufe. Die Seite zeigt je nach Einstellung den gebräuchlichen oder den weniger verräterischen Namen.',
      columns: { kind: 'Art des Namens', language: 'Sprache', where: 'Erscheint in', spoiler: 'Spoiler' },
      rows: [
        { kind: 'Eigentlicher Name', language: 'Japanisch', where: 'Hauptwerk und Fortsetzung', spoiler: 'Kein Spoiler' },
        { kind: 'Chinesische Übersetzung', language: 'Traditionelles Chinesisch', where: 'Offizielle chinesische Version', spoiler: 'Kein Spoiler' },
        { kind: 'Spitzname', language: 'Japanisch', where: 'Ab der gemeinsamen Route', spoiler: 'Kein Spoiler' },
      ],
      hidden: { kind: 'Wahrer Name', spoiler: 'Wird in der zweiten Hälfte von Route zwei angezeigt' },
      caption: 'Beispieldaten. Der jeweils verwendete Name bleibt zusammen mit dem Auftritt im Werk erhalten.',
    },
    credits: {
      label: 'Mitwirkende',
      headline: 'Sprecherangaben führen zur Figur.',
      body: [
        'Mitwirkende sind nach Rolle gruppiert: Skript, Illustration, Musik, Vertonung und Übersetzung. Eine Sprecherangabe verweist sowohl auf den Sprecher als auch auf die Figur. Sie kann auch eine bestimmte Version nennen, zum Beispiel wenn sich die Besetzung bei einer Portierung ändert.',
        'Alle Werke eines Autors, der Visual-Novel-Skripte und Light Novels schreibt, stehen auf derselben Personenseite.',
      ],
    },
    query: {
      label: 'Suche',
      headline: 'Alle Filterbedingungen müssen dieselbe Figur betreffen.',
      body: 'Die Suche nach einer „rothaarigen Hauptfigur“ findet Werke mit einer rothaarigen Hauptfigur. Ein Werk mit einer rothaarigen Nebenfigur und einer schwarzhaarigen Hauptfigur passt nicht.',
      items: [
        { title: 'Werk 1: passt', body: 'Die Hauptfigur ist rothaarig. Beide Bedingungen treffen auf dieselbe Figur zu.' },
        { title: 'Werk 2: passt nicht', body: 'Die rothaarige Figur ist eine Nebenfigur, die Hauptfigur hat schwarze Haare. Die Bedingungen treffen auf verschiedene Figuren zu.' },
      ] as Item[],
      caption: 'Beispieldaten. Hauptfigur, wichtige Figur und Nebenfigur sind unterschiedliche Rollen. Ein Gegenspieler kann eine wichtige Figur, aber nicht die Hauptfigur sein.',
    },
    finale: 'Wähle Tags und lies die Handlung selbst.',
  },

  spoilers: {
    hero: {
      headline: 'Routen, die du noch nicht gelesen hast, bleiben verborgen.',
      lede: 'Wichtige Wendungen in Visual Novels liegen oft in späteren Routen. REZICS zeigt nur Inhalte bis zu deinem Fortschritt: Tags, Figurenangaben und Wiki+-Seiten.',
    },
    fold: {
      label: 'Der gefaltete Teil',
      headline: 'Was später geschieht, bleibt gefaltet.',
      body: 'Gelesene Abschnitte sind geöffnet, ungelesene gefaltet. Selbst Namen bleiben verborgen, bis du die entsprechende Stelle erreichst.',
    },
    route: {
      label: 'Fortschritt',
      headline: 'Die Seite öffnet sich bis zu deinem Fortschritt.',
      here: 'Bis hier hast du gelesen',
      nodes: [
        { name: 'Prolog', fact: '' },
        { name: 'Gemeinsame Route', fact: 'Figur A erscheint' },
        { name: 'Auswahl', fact: '' },
        { name: 'Route eins', fact: 'A und B sind Kindheitsfreunde' },
        { name: 'Ende von Route eins', fact: '' },
        { name: 'Route zwei', fact: 'Der wahre Name von A' },
        { name: 'Wahres Ende', fact: 'Eine andere Persönlichkeit von A' },
      ],
      /** Index of the reader's position in `nodes`. */
      at: 3,
      caption: 'Beispieldaten.',
      rules: [
        { title: 'Besucher', body: 'Nicht angemeldete Besucher sehen den Inhalt bis zur ersten Enthüllung.' },
        { title: 'Nach der Anmeldung', body: 'Standardmäßig reicht die Anzeige bis zu deiner letzten gelesenen Stelle. Ein als abgeschlossen markiertes Werk gilt als vollständig gelesen.' },
        { title: 'Selbst auswählen', body: 'Jeder kann eine Stelle auswählen oder alle Inhalte anzeigen.' },
        { title: 'Jede Route', body: 'Fortschritt wird nur innerhalb derselben Route verglichen. Inhalte anderer Routen bleiben verborgen, der Rest der Seite bleibt sichtbar.' },
      ] as Item[],
    },
    votes: {
      label: 'Zwei Abstimmungen',
      headline: 'Passend oder Spoiler: zwei getrennte Abstimmungen.',
      body: 'Nachdem ein Tag einem Werk hinzugefügt wurde, entscheidet die Community getrennt, ob er passt und ob er etwas verrät. Auch ein passender Tag bleibt verborgen, wenn er einen Spoiler enthält.',
      columns: { tag: 'Tag', fit: 'Passend', spoiler: 'Spoiler' },
      rows: [
        { tag: 'Schule', fit: 'Mehrheitlich ja', spoiler: 'Nein' },
        { tag: 'Mehrere Enden', fit: 'Mehrheitlich ja', spoiler: 'Nein' },
      ],
      hidden: { fit: 'Mehrheitlich ja', spoiler: 'Ja, wird erst in Route zwei angezeigt' },
      caption: 'Beispieldaten.',
    },
    filters: {
      label: 'Filter',
      headline: 'Tags lassen sich einschließen oder ausschließen.',
      body: [
        'Für jeden Tag kannst du festlegen, ob er ein- oder ausgeschlossen wird. Bei mehreren Tags derselben Gruppe kannst du alle oder beliebige davon verlangen. Die Tagseite zeigt Beschreibung, übergeordnete und untergeordnete Tags sowie alle passenden Werke.',
        'Du kannst Tags folgen und sie als Tab auf der Startseite anheften.',
      ],
    },
    apart: {
      text: 'Spoiler, Altersfreigaben und Abdeckungen',
      more: 'haben getrennte Funktionen.',
      body: 'Spoiler-Abstimmungen ändern keine Altersfreigaben, und Altersfreigaben legen nicht fest, was ein Spoiler ist. Du kannst verdeckte Bilder oder Text selbst öffnen. Das betrifft nur deine Ansicht und zählt nicht als Abstimmung. Die Einstufungen für alle Altersgruppen, R15, R18 und R18G sind getrennt. Nicht bewertete Inhalte werden als „Nicht bewertet“ gekennzeichnet.',
    },
    readings: {
      label: 'Auslegung der Community',
      headline: 'Dieselbe Kennzeichnung kann in jeder Community anders ausgelegt werden.',
      body: 'Jede Community kann eigene Definitionen verwenden und entscheiden, welche Tags sie übernimmt. Eine engere Auslegung eines Begriffs ändert nicht die Verwendung anderer Communities und löscht den ursprünglichen Tag nicht.',
    },
    finale: 'Ein Wiki aus dem Skript, von Menschen geprüft.',
  },

  wiki: {
    hero: {
      headline: 'Aus dem Skript erstellt und erst nach menschlicher Prüfung veröffentlicht.',
      lede: 'Die Handlung eines Visual Novels steht im Skript. Wer das Skript besitzt, zum Beispiel der Autor, kann mit dem Open-Source-Toolkit von REZICS und einem eigenen KI-Agenten Figuren und Ereignisse erfassen und zur Prüfung einreichen. Nach der Freigabe erscheinen sie im Wiki+ des Werks.',
    },
    steps: {
      label: 'Fünf Schritte',
      headline: 'Vom Skript zu den Lesern in fünf Schritten.',
      items: [
        { title: 'Einlesen', body: 'Das Toolkit liest unterstützte Visual-Novel-Skripte als Text und führt darin enthaltenen Code niemals aus.' },
        { title: 'Aufbereiten', body: 'Der von dir ausgewählte Agent erfasst Figuren, Aliase, Beziehungen, Ereignisse und Orte Abschnitt für Abschnitt. Jeder Eintrag nennt die Fundstelle und ein kurzes Zitat.' },
        { title: 'Abgleichen', body: 'Das Toolkit sucht über die REZICS API nach vorhandenen Figuren und Orten. Jeder Eintrag wird als zugeordnet, neu, unklar oder nicht verfügbar gekennzeichnet.' },
        { title: 'Prüfen', body: 'Menschen prüfen die Vorschläge. Auch die Feststellung, dass zwei Einträge dieselbe Figur meinen, ist ein Vorschlag und wird nicht stillschweigend zusammengeführt.' },
        { title: 'Veröffentlichen', body: 'Genehmigte Inhalte erscheinen im Wiki+ des Werks. Bei einer Aktualisierung des Skripts werden nur Unterschiede eingereicht. Bereits angenommene Inhalte werden nicht stillschweigend gelöscht.' },
      ] as Item[],
    },
    locator: {
      label: 'Fundstelle',
      headline: 'Jede Angabe verweist auf eine Textzeile.',
      body: 'Die Fundstelle besteht aus drei Angaben: Skript-Hash, Tag und Reihenfolge der Textzeile. Die Route gibt an, zu welcher Handlungslinie die Zeile gehört. Prüfer mit derselben Version können den Originaltext auf ihrem eigenen Computer kontrollieren.',
      fields: [
        { label: 'Skript-Hash (Präfix)', value: 'sha256 9f2c04b7', code: true },
        { label: 'Tag', value: 'route_two_day3', code: true },
        { label: 'Textzeile', value: 'Textzeile 142', code: false },
        { label: 'Route', value: 'Route zwei', code: false },
      ],
      caption: 'Beispieldaten. Bei verschiedenen Versionen müssen die Fundstellen ausdrücklich abgeglichen werden. Sie werden nicht automatisch übertragen.',
    },
    local: {
      text: 'Das Modell, das den ganzen Text liest,',
      more: 'wählst du selbst.',
      body: [
        'REZICS erhält nicht das vollständige Skript, sondern nur die aufbereiteten Daten und kurzen Zitate. Das Skript liest das von dir gewählte Modell. Im strikten Modus laufen Schlussfolgerungen nur auf deinem Gerät.',
        'Das Toolkit ist unter Apache-2.0 quelloffen. Es braucht kein REZICS-Konto, überträgt keine Nutzungsdaten und ruft nicht selbst Inhalte ab. Es umgeht keinen Schutz. Verschlüsselte oder geschützte Dateien kann es nicht lesen.',
        'Für Zitate gilt eine plattformweite Längenbegrenzung, die über Konten, Übersetzungen und Websites hinweg zusammengerechnet wird.',
      ],
    },
    zone: {
      label: 'Website',
      headline: 'Wiki+ ist eine Website für das Werk.',
      body: [
        'Figuren, Orte, Zeitleisten, Kapitelübersichten und Beziehungen haben eigene Seiten. Infoboxen und Listen verwenden denselben Graphen. Eine Berichtigung im Wiki aktualisiert Filter, Listen und andere Websites. Leser sehen nur Inhalte bis zu ihrer Route.',
        'Die Werkseite bleibt der Einstieg. Dort findest du Bewertungen, Rezensionen, deinen Fortschritt und eine Zusammenfassung aus Wiki+. Jede Community entscheidet, ob Agenten Entwürfe erstellen dürfen und ob generierter Text zulässig ist. Standardmäßig werden nur Fakten und Strukturen übernommen.',
      ],
    },
    finale: 'Chinesische und japanische Communities haben jeweils eine eigene Website.',
  },

  zones: {
    hero: {
      headline: 'Zwei Websites in verschiedenen Sprachen, dieselben Identitäten.',
      lede: 'Eine chinesische und eine japanische Community können jeweils eine Website für Visual Novels einrichten. Jede bestimmt Namen, Beschreibungen, Sortierung und übernommene Angaben selbst. Werke, Figuren und Mitwirkende bleiben dieselben.',
    },
    mirror: {
      label: 'Zwei Websites',
      headline: 'Eine Korrektur gemeinsamer Daten aktualisiert beide Seiten.',
      body: 'Jede Website bestimmt Namen, Beschreibungen und Sortierung selbst. Werke, Figuren und Mitwirkende haben auf beiden dieselben Identitäten.',
      columns: { field: '', zh: 'Chinesische Website', ja: 'Japanische Website' },
      rows: [
        { field: 'Name', zh: 'Chinesischer Name (Beispiel)', ja: 'Japanischer Name (Beispiel)' },
        { field: 'Beschreibung', zh: 'Von der chinesischen Community verfasst', ja: 'Von der japanischen Community verfasst' },
        { field: 'Sortierung', zh: 'Nach dem Veröffentlichungsdatum der chinesischen Version', ja: 'Nach dem Veröffentlichungsdatum der japanischen Version' },
      ],
      /** The row both sites share, set across both columns. */
      shared: { field: 'Identität', value: 'Beide Websites verwenden dieselbe Werkidentität' },
      caption: 'Beispieldaten.',
    },
    zone: {
      label: 'Zone',
      headline: 'Eine Zone ist eine vollständige Website.',
      items: [
        { title: 'Seiten und Adressen', body: 'Die Website bestimmt Adressen und Layout für Startseite, Werkseiten, Figurenseiten und Veröffentlichungslisten.' },
        { title: 'Navigation', body: 'Eine eigene Navigation und benutzerdefinierte Seiten, zum Beispiel eine Einführung.' },
        { title: 'Erscheinungsbild', body: 'Marke und Layout lassen sich anpassen. Identitäten, Suche, Sprache, Quellen und Barrierefreiheit bleiben einheitlich und sind auf jeder Website wiedererkennbar.' },
        { title: 'Versionierung', body: 'Änderungen an der Website lassen sich vorab ansehen, prüfen und rückgängig machen. Die gesamte Website kann exportiert werden.' },
        { title: 'API', body: 'Menschen und KI-Agenten verwalten Websites über dieselbe API.' },
      ] as Item[],
    },
    space: {
      label: 'Zusammenleben',
      headline: 'Die Website ist die Anlaufstelle, die Community der Treffpunkt.',
      items: [
        { title: 'Website', body: 'Eine Zone ist die Website mit eigenen Seiten und Navigation. Sie kann auch privat sein.' },
        { title: 'Community', body: 'Eine Community hat Diskussionen, Regeln und Mitglieder und entscheidet, welche Angaben sie übernimmt.' },
        { title: 'Beides zusammen', body: 'Ein Bereich kann sowohl eine Website als auch eine Community haben oder nur eines von beiden.' },
        { title: 'Einmal folgen', body: 'Folge dem Bereich einmal, um Updates von beiden zu erhalten.' },
      ] as Item[],
    },
    community: {
      label: 'Community',
      headline: 'Diskussionen, Bewertungen und Listen gehören zum Werk.',
      items: [
        { title: 'Diskussion', body: 'Zu jedem Werk und jeder Version gibt es Diskussionen. Zum Lesen musst du nicht beitreten.' },
        { title: 'Bewertungen', body: 'Bewertungen zeigen, von wem sie stammen: von allen, einer Community oder nur von dir.' },
        { title: 'Liste', body: 'Empfehlungen für Einsteiger und Spielreihenfolgen lassen sich sortieren, begründen und exportieren.' },
        { title: 'Bibliothek', body: 'Wenn du ein Werk auf der chinesischen Website als gespielt markierst, gilt das auch auf der japanischen. Deine Bibliothek und Listen folgen dir.' },
      ] as Item[],
    },
    script: {
      text: 'Traditionell',
      more: 'bleibt traditionell.',
      body: 'Namen und Beschreibungen nennen jeweils ihre Sprache. Wenn kein traditionelles Chinesisch vorliegt, ist die automatische Umwandlung ein klar gekennzeichneter Ersatz, keine geprüfte Übersetzung. Personen- und Werknamen werden nicht geändert.',
    },
    creators: {
      label: 'Autoren',
      headline: 'Auch Visual-Novel-Autoren veröffentlichen hier.',
      body: 'Autoren mit einem Vertrag mit REZICS können Visual Novels gemäß den Verkaufsregeln veröffentlichen: als Dateien ohne DRM, mit Demos und einmaligem Kauf. Aktualisierungen und erneute Downloads richten sich nach den Kaufbedingungen. Werkseite, Community und Wiki+ gehören zur selben Identität.',
    },
    finale: 'Auch MCP-Server haben ein eigenes Verzeichnis.',
  },
};

export type VnStrings = typeof strings;

export default {
  id: 'visual-novels',
  base: '/visual-novels/',
  name: 'Visual Novels',
  theme: { kind: 'visual-novels' },
  next: 'mcp',
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: meta(
        'Visual Novels: Jede Version klar beschrieben',
        'Finde Visual Novels nach Sprache, Plattform, Region und Umfang. Fan-Übersetzungen nennen ihre Übersetzer und die zugrunde liegende Version. Figuren, Mitwirkende, Routenfortschritt und Wiki+ gehören zum selben Werk.',
      ),
    },
    {
      slug: 'releases',
      label: 'Veröffentlichungen',
      meta: meta(
        'Veröffentlichungen: Alle Filter gelten für dieselbe Version',
        'Jede Veröffentlichung eines Visual Novels erhält einen eigenen Eintrag mit Sprache, Plattform, Region und Umfang. Alle Filter müssen für dieselbe Version gelten. Ein nur übersetzter Titel zählt nicht als chinesische Version.',
      ),
    },
    {
      slug: 'translations',
      label: 'Übersetzungen und Übersetzer',
      meta: meta(
        'Übersetzungen und Übersetzer: Quellen klar benannt',
        'Jede Visual-Novel-Übersetzung nennt Übersetzer, genaue Grundlage und Umfang. Fan-Übersetzungen werden nicht als offiziell gekennzeichnet. Updates eines Patches erhalten einen neuen Eintrag. Übersetzung und Geschichte lassen sich getrennt bewerten.',
      ),
    },
    {
      slug: 'characters',
      label: 'Figuren und Mitwirkende',
      meta: meta(
        'Figuren und Mitwirkende: eine Identität pro Person',
        'Eine Figur behält in Fortsetzungen, Portierungen und Adaptionen dieselbe Identität. Namen werden nach Sprache und Spoilerstufe angezeigt. Angaben zu Skript, Illustration, Musik und Vertonung führen zur jeweiligen Personenseite.',
      ),
    },
    {
      slug: 'spoilers',
      label: 'Tags und Spoiler',
      meta: meta(
        'Tags und Spoiler: passend zu deinem Fortschritt',
        'Tags lassen sich ein- und ausschließen. Communities entscheiden getrennt, ob ein Tag passt und ob er Spoiler enthält. Figurenangaben und Wiki+ reichen nur bis zu deiner Route. Du entscheidest, ob du alles öffnest.',
      ),
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: meta(
        'Wiki+: Ein Wiki aus dem Skript',
        'Wer das Skript besitzt, kann auf dem eigenen Computer mit dem Open-Source-Toolkit und einem eigenen KI-Agenten Figuren, Orte und Ereignisse erfassen. Jeder Eintrag nennt die Textstelle. REZICS erhält nicht das vollständige Skript. Die Inhalte werden erst nach menschlicher Prüfung veröffentlicht.',
      ),
    },
    {
      slug: 'zones',
      label: 'Communities und Websites',
      meta: meta(
        'Communities und Websites: dieselben Daten auf beiden',
        'Chinesische und japanische Communities können jeweils eine vollständige Visual-Novel-Website einrichten. Namen, Beschreibungen, Sortierung und übernommene Angaben bestimmen sie selbst. Werke, Figuren und Mitwirkende teilen dieselben Identitäten.',
      ),
    },
  ],
  strings,
} satisfies MiniSite<VnStrings>;
