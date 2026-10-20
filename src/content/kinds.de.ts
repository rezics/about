import type { Kind } from './schema';

/** The nine kinds (products), in DESIGN.md's order. Sources: kinds-facts.md. */
export const kinds: Kind[] = [
  {
    id: 'books',
    name: 'Bibliothek',
    tag: 'Books',
    group: 'works',
    summary: 'Ein Werk, alle Ausgaben und Übersetzungen',
    meta: {
      title: 'Bibliothek: klar getrennte Ausgaben und Leseverläufe',
      description:
        'Jedes Werk hat eine Identität. Übersetzungen, Neuauflagen und Sammelbände bleiben getrennt. Halte deine Lektüre und eigenen Bücher fest, finde den nächsten Band einer Reihe, kaufe DRM-freie E-Books und sieh im Wiki nur Inhalte bis zu deiner Lesestelle.',
    },
    hero: {
      headline: 'Ein Werk, alle Ausgaben klar erfasst.',
      lede: 'Taschenbuch, E-Book, Übersetzung und Sammelband sind jeweils eine Veröffentlichung desselben Werks. REZICS hält fest, welches Buch du liest, wie weit du bist und was als Nächstes kommt. Auch Anime, Manga und Wiki sind damit verknüpft.',
    },
    features: [
      {
        title: 'Ausgaben und Übersetzungen getrennt erfassen',
        body: 'Neuauflagen, Taschenbücher, E-Books und Übersetzungen in verschiedenen Sprachen werden jeweils einzeln erfasst. Sammelbände nennen ihre enthaltenen Bände und erzeugen keine doppelten Werke.',
      },
      {
        title: 'Jede Lektüre festhalten',
        body: 'Wiederlesen, Pausieren, Abbrechen oder der Wechsel vom gedruckten Buch zum Hörbuch werden korrekt festgehalten. Der Fortschritt kann in Seiten, Prozent oder Minuten angegeben werden.',
      },
      {
        title: 'Der nächste Band einer Reihe',
        body: 'Wähle deine Lesesprache. Die Reihenseite zeigt den nächsten verfügbaren Band. Du siehst getrennt, ob du auf dem aktuellen Stand bist, alle erschienenen Bände gelesen hast oder die Reihe abgeschlossen ist.',
      },
      {
        title: 'Eigene Bücher und Ausleihen',
        body: 'Welche Ausgabe im Regal steht, wem du sie geliehen hast und wann sie zurückkommt, siehst nur du. Ein Buch zu besitzen bedeutet nicht, es gelesen zu haben.',
      },
      {
        title: 'Deine Daten mitnehmen',
        body: 'Importiere den Export eines anderen Dienstes. Zuordenbare Ausgaben und Einträge bleiben erhalten und lassen sich später vollständig exportieren.',
      },
      {
        title: 'Bücher direkt von Kreativen kaufen',
        body: 'E-Books teilnehmender Kreativer werden mit geklärten Rechten als DRM-freie EPUB- oder PDF-Dateien verkauft. Du kannst eine Leseprobe ansehen. Updates und erneute Downloads findest du in deiner Bibliothek.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'progress', 'ratings', 'wiki', 'offers'],
    partNotes: {
      identity: 'Ein Werk hat in jeder Sprache und Community dieselbe Identität. Die ISBN kennzeichnet nur eine seiner Veröffentlichungen.',
      editions: 'Übersetzungen, Neuauflagen, Taschenbücher, E-Books und Sammelbände werden als einzelne Veröffentlichungen desselben Werks erfasst.',
      credits: 'Autoren, Übersetzer, Illustratoren und Verlage werden mit ihrer jeweiligen Rolle aufgeführt. Derselbe Übersetzer bleibt bei jedem Buch dieselbe Person.',
      relations: 'Reihen, Fortsetzungen, Nebengeschichten und Adaptionen haben jeweils eine eigene Beziehung. Onlinefassungen und überarbeitete Veröffentlichungen sind ebenfalls verknüpft.',
      progress: 'Band und Seite deiner Lesestelle sowie der nächste Band bleiben auch beim Wechsel der Lesesprache erhalten.',
      ratings: 'Geschichte, Übersetzung und Vortrag werden getrennt bewertet. Zu jeder Bewertung werden Anzahl und Umfang angegeben.',
      wiki: 'Das Wiki nennt für Personen, Orte und Ereignisse das jeweilige Kapitel als Quelle und zeigt nur Inhalte bis zu deiner Lesestelle.',
      offers: 'E-Books teilnehmender Kreativer kannst du hier direkt kaufen. Verkaufsangaben zu anderen Ausgaben nennen das Beobachtungsdatum. Fehlende Angaben werden als unbekannt markiert.',
    },
    connections: [
      { to: 'anime', label: 'Als Anime adaptiert' },
      { to: 'manga', label: 'Als Manga adaptiert' },
      { to: 'games', label: 'Als Spiel adaptiert' },
    ],
    community: {
      headline: 'Leser verschiedener Ausgaben sprechen über dasselbe Buch.',
      body: 'Wer das Original, eine Übersetzung oder ein E-Book liest, findet Rezensionen und Diskussionen beim selben Werk. Lesekreise können eine eigene Community gründen. Eine Zone bietet einer Buchreihe eine vollständige Website. Die Katalogdaten bleiben dieselben.',
    },
    imageAlt: 'Ein Stapel Bücher',
  },
  {
    id: 'anime',
    name: 'Anime',
    tag: 'Anime',
    group: 'works',
    summary: 'Staffeln, Folgen, Sendetermine und Vorlage',
    meta: {
      title: 'Anime: Folgen verfolgen und spoilerfrei diskutieren',
      description:
        'Folgen und Sendetermine jeder Staffel sind übersichtlich aufgeführt. Untertitel und Synchronfassungen sind getrennt gekennzeichnet. Halte den Fortschritt pro Folge fest und diskutiere jede einzelne. Inhalte über deinen Fortschritt hinaus bleiben verborgen. Über die Verknüpfungen findest du die Vorlage.',
    },
    hero: {
      headline: 'Folge für Folge verfolgen, Diskussionen bis zu deiner Stelle.',
      lede: 'Folgen, Sendetermine, Untertitel und Synchronfassungen jeder Staffel werden getrennt aufgeführt. Halte jede gesehene Folge fest. Diskussionen und Wiki zeigen nur Inhalte bis zu deiner Stelle. Romane und Manga als Vorlage sind nur einen Klick entfernt.',
    },
    features: [
      {
        title: 'Staffeln, Folgen und Sendetermine',
        body: 'Folgen, Specials und Sendetermine jeder Staffel stehen im Zeitplan. Verschiebungen, Ausfälle und Veröffentlichungen werden getrennt erfasst.',
      },
      {
        title: 'Untertitel und Synchronfassungen getrennt ansehen',
        body: 'Untertitel und Synchronfassungen sind jeweils nach Sprache aufgeführt. Die Sprache der Oberfläche ist unabhängig von der Sprache, in der du schaust.',
      },
      {
        title: 'Die nächste Folge finden',
        body: 'Halte jede gesehene Folge fest. Auf der Startseite steht die nächste Folge oben. Ausgewählte Specials und Zusatzinhalte verhindern nicht, dass eine Staffel als abgeschlossen gilt.',
      },
      {
        title: 'Über diese Folge diskutieren',
        body: 'Jede Folge hat eine eigene Diskussion. Inhalte, die du noch nicht gesehen hast, bleiben verborgen. Du kannst sie bei Bedarf einblenden.',
      },
      {
        title: 'Bewertungen pro Folge getrennt berechnen',
        body: 'Bewertungen einzelner Folgen fließen nicht in die Gesamtbewertung des Werks ein. An den Einzelwerten siehst du, welche Folge besonders gut ankommt.',
      },
      {
        title: 'Über Adaptionen die Vorlage finden',
        body: 'Vom Anime zum Manga und weiter zum Roman als Vorlage. Wenn du den Anime beendet hast, gilt der Roman dadurch nicht als gelesen.',
      },
    ],
    parts: ['identity', 'schedule', 'credits', 'relations', 'progress', 'ratings', 'discussion', 'wiki'],
    partNotes: {
      identity: 'Lokalisierte Titel führen zum selben Anime. Adaption und Vorlage behalten ihre eigene Identität und werden nicht in einem Eintrag vermischt.',
      schedule: 'Sendetermine und Folgen jeder Staffel stehen im Zeitplan. Ankündigungen, Verschiebungen und Ausfälle werden getrennt erfasst.',
      credits: 'Sprecher, Figuren und Werk sind im selben Mitwirkenden-Eintrag verknüpft. Regie, Drehbuch und Produktionsstudio haben jeweils eine eigene Rolle.',
      relations: 'Fortsetzungen, Nebengeschichten und Vorlagen haben jeweils eine eigene Beziehung. Über die Verknüpfung gelangst du zum Roman oder Manga.',
      progress: 'Deine zuletzt gesehene und die nächste Folge bleiben festgehalten. Ausgewählte Specials zählen nicht für den Abschluss der Staffel.',
      ratings: 'Das ganze Werk und jede Folge haben eigene Bewertungen mit jeweils angegebener Anzahl.',
      discussion: 'Jede Folge hat eine eigene Diskussion. Inhalte über deinen Fortschritt hinaus sind standardmäßig verborgen.',
      wiki: 'Das Wiki nennt für Figuren, Orte und Ereignisse die jeweilige Folge als Quelle und zeigt nur Inhalte bis zu deiner zuletzt gesehenen Folge.',
    },
    connections: [
      { to: 'books', label: 'Roman als Vorlage' },
      { to: 'manga', label: 'Manga als Vorlage' },
      { to: 'games', label: 'Derselbe Sprecher' },
    ],
    community: {
      headline: 'Auch eine Staffel kann eine eigene Website haben.',
      body: 'Eine Community kann mit einer Zone eine eigene Anime-Website mit Staffeln, Rezensionen und Diskussionen einrichten. Die Daten stammen aus demselben Katalog. Wird ein Sendetermin anderswo korrigiert, stimmt er auch hier.',
    },
    imageAlt: 'Ein Anime-Zelluloid und ein Bildrahmen',
  },
  {
    id: 'manga',
    name: 'Manga',
    tag: 'Manga',
    group: 'works',
    summary: 'Bände, Kapitel und Übersetzungen in allen Sprachen',
    meta: {
      title: 'Manga: Bände, Kapitel und Übersetzungen',
      description:
        'Verfolge Bände und Kapitel der Fortsetzung gemeinsam. Übersetzungen nennen Übersetzer und Vorlage. Erscheint ein neues Kapitel in deiner Sprache, wirst du benachrichtigt. Jedes Kapitel hat eine Diskussion. Anime-Adaptionen und Romanvorlagen sind ebenfalls verknüpft.',
    },
    hero: {
      headline: 'Jedes Kapitel, jeder Band und jede Übersetzung klar zugeordnet.',
      lede: 'Japanische Fortsetzung, Bände aus verschiedenen Regionen, offizielle Übersetzungen und Fanübersetzungen gehören zum selben Manga. Sprache und Übersetzer sind jeweils angegeben. Halte das gelesene Kapitel fest und erfahre, wenn in deiner Sprache ein neues erscheint.',
    },
    features: [
      {
        title: 'Kapitel und Bände',
        body: 'Jedes Kapitel hat in der Fortsetzung einen festen Platz. Jeder Band ist ein eigenes Buch. Neuauflagen und Sammelbände werden separat erfasst. Die Bandnummern folgen denen des Verlags.',
      },
      {
        title: 'Fortschritt pro Kapitel',
        body: 'Halte jedes gelesene Kapitel fest. Gibt es das nächste bereits in deiner Sprache, steht es oben. Andernfalls siehst du, auf welches Kapitel du wartest.',
      },
      {
        title: 'Übersetzungen nennen ihre Vorlage',
        body: 'Jede Übersetzung nennt ihre Übersetzer und die zugrunde liegende Originalausgabe. Fanübersetzungen werden nicht als offiziell gekennzeichnet. Ungeprüfte Angaben bleiben als ungeprüft markiert.',
      },
      {
        title: 'Bei neuen Kapiteln benachrichtigt werden',
        body: 'Folge einem Manga und erfahre, wenn ein neues Kapitel oder ein neuer Band in deiner Sprache erscheint. In anderen Sprachen erhältst du keine Benachrichtigungen.',
      },
      {
        title: 'Nach dem Lesen diskutieren',
        body: 'Jedes Kapitel hat eine Diskussion. Spätere Wendungen bleiben verborgen, bis du sie gelesen hast.',
      },
      {
        title: 'Nach der Anime-Adaption',
        body: 'Anime-Adaptionen, Nebengeschichten und Romanvorlagen sind verknüpft. Der Fortschritt bleibt für jedes Werk getrennt.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'progress', 'ratings', 'discussion', 'offers'],
    partNotes: {
      identity: 'Originaltitel, lokalisierte Titel und Umschriften führen alle zum selben Manga.',
      editions: 'Bände in allen Sprachen, E-Books, Neuauflagen und Sammelbände werden jeweils einzeln erfasst. Die Bandnummerierung bleibt erhalten.',
      credits: 'Autor, Zeichner, Übersetzer und Verlag werden einzeln aufgeführt. Romane und Manga eines Autors stehen gemeinsam auf seiner Seite.',
      relations: 'Vorlagen, Anime-Adaptionen, Nebengeschichten und Fortsetzungen haben jeweils eine eigene Beziehung und lassen sich von beiden Seiten finden.',
      progress: 'Der Fortschritt lässt sich pro Kapitel festhalten. Auch gelesene Bände sind zu sehen.',
      ratings: 'Das gesamte Werk, einzelne Bände und bestimmte Übersetzungen lassen sich getrennt bewerten. Die Bewertung der Reihe fließt nicht in einzelne Bände ein.',
      discussion: 'Jedes Kapitel hat eine Diskussion. Inhalte über deine Lesestelle hinaus bleiben standardmäßig verborgen.',
      offers: 'Für Ausgaben in allen Sprachen werden Verkaufsregionen und Preise mit Beobachtungsdatum aufgeführt.',
    },
    connections: [
      { to: 'books', label: 'Nach einem Roman adaptiert' },
      { to: 'anime', label: 'Anime-Adaption' },
    ],
    community: {
      headline: 'Übersetzer und Leser werden namentlich genannt.',
      body: 'Fanübersetzungsteams werden bei jeder Übersetzung genannt. Folge Übersetzern, um ihre nächsten Werke zu sehen. Rezensionen, Listen und Ruf der Leser sind ebenfalls mit ihrer Identität verknüpft und nicht auf eine Community beschränkt.',
    },
    imageAlt: 'Eine Manga-Vorlage mit Rasterpunkten',
  },
  {
    id: 'games',
    name: 'Spiele',
    tag: 'Games',
    group: 'works',
    summary: 'Plattformen, Ausgaben, Bewertungen und Kauf',
    meta: {
      title: 'Spiele: Ausgaben, Spezifikationen und Bewertungen pro Plattform',
      description:
        'Jedes Spiel hat eine Identität. Plattformen, Regionen und DLCs sind getrennt aufgeführt, die Systemanforderungen klar angegeben. Bewertungen nennen Zeitraum und Gruppe. Empfehlungen der Community enthalten eine Begründung. Kleine Spiele teilnehmender Entwickler kannst du direkt und DRM-frei kaufen.',
    },
    hero: {
      headline: 'Ein Spiel, alle Ausgaben pro Plattform im Blick.',
      lede: 'Ausgaben für jede Plattform und Region sowie unterstützte Sprachen und Systemanforderungen sind getrennt aufgeführt. Bewertungen zeigen, ob sie aktuell oder vollständig sind und welche Spielergruppe sie abgegeben hat. Mods, Adaptionen und Fortsetzungen sind mit dem Spiel verknüpft.',
    },
    features: [
      {
        title: 'Ein Eintrag pro Plattform',
        body: 'Veröffentlichungen desselben Spiels für verschiedene Plattformen und Regionen listen unterstützte Sprachen, Erscheinungsdatum und DLCs einzeln auf. Ein Remake ist ein eigenes Spiel und mit dem Original verknüpft.',
      },
      {
        title: 'Anforderungen klar angegeben',
        body: 'Systemanforderungen werden pro Plattform erfasst. Fehlende Angaben werden als unbekannt markiert und nicht von anderen Plattformen übernommen.',
      },
      {
        title: 'Bewertungen nach Zeitraum und Gruppe',
        body: 'Aktuelle und alle Bewertungen werden getrennt angezeigt. Jeder Wert nennt Anzahl, Verteilung und bewertende Gruppe.',
      },
      {
        title: 'Community-Empfehlungen mit Begründung',
        body: 'Von der Community ausgewählte Spiele sind mit dem damaligen Entscheidungsprotokoll verknüpft. Du siehst, wer sie ausgewählt hat und warum.',
      },
      {
        title: 'DRM-frei direkt kaufen',
        body: 'Kleine Spiele und Visual Novels teilnehmender Entwickler werden mit geklärten Rechten angeboten und lassen sich nach dem Kauf herunterladen. Updates, Belege und erneute Downloads findest du in deiner Bibliothek.',
      },
      {
        title: 'Kompatible Mods finden',
        body: 'Wähle zuerst Spielversion und Loader, um passende Mods zu finden. Es werden nur kompatible Dateien angezeigt, mit klar ausgewiesenen Abhängigkeiten.',
      },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'specs', 'ratings', 'discussion', 'offers'],
    partNotes: {
      identity: 'Ein Spiel hat plattform- und regionenübergreifend dieselbe Identität. Remakes und Neustarts sind eigene Spiele und miteinander verknüpft.',
      editions: 'Veröffentlichungen für alle Plattformen, Regionen und Sprachen werden zusammen mit den DLCs getrennt aufgeführt.',
      credits: 'Entwickler, Publisher, Drehbuchautoren, Komponisten und Sprecher haben jeweils eine Rolle. Bücher und Spiele derselben Kreativen sind verknüpft.',
      relations: 'Fortsetzungen, Nebengeschichten, Adaptionen und Mods haben jeweils eine Beziehung, aus der Abhängigkeiten hervorgehen.',
      specs: 'Systemanforderungen und unterstützte Sprachen werden pro Plattform erfasst. Unbekannt und nicht zutreffend sind getrennte Angaben.',
      ratings: 'Bewertungen können sich auf eine Veröffentlichung für eine bestimmte Plattform beziehen. Bei plattformübergreifenden Gesamtwerten wird die Berechnung erläutert.',
      discussion: 'Zum Spiel, zu DLCs und zu Ausgaben für einzelne Plattformen gibt es jeweils eine Diskussion.',
      offers: 'Kleine Spiele teilnehmender Entwickler kannst du hier direkt kaufen. Verkaufsangaben anderer Shops stehen daneben.',
    },
    connections: [
      { to: 'software', label: 'Mods und Werkzeuge' },
      { to: 'anime', label: 'Anime-Adaption' },
      { to: 'visual-novels', label: 'Derselbe Entwickler' },
    ],
    community: {
      headline: 'Plaudern, Rezensionen und Datenkorrekturen haben ihren eigenen Platz.',
      body: 'Plaudereien, Antworten auf Rezensionen und Diskussionen zu Datenkorrekturen bleiben getrennt. Du kannst einem Spiel folgen oder seiner Community beitreten, um Beiträge zu verfassen und mitzuentscheiden.',
    },
    imageAlt: 'Ein Gamecontroller',
  },
  {
    id: 'software',
    name: 'Software',
    tag: 'Software',
    group: 'works',
    summary: 'Kompatibilität, Bezugsquellen und Alternativen',
    meta: {
      title: 'Software: Versionen, Plattformen und Alternativen',
      description:
        'Jede Software hat eine Identität. Für jede Version werden unterstützte Betriebssysteme, Prozessorarchitekturen, Versionshinweise und Lizenz erfasst. Du siehst, woher du sie bekommst, kannst begründete Alternativen vergleichen und erfährst von neuen Versionen.',
    },
    hero: {
      headline: 'Prüfe zuerst, ob es auf deinem Gerät läuft.',
      lede: 'Für jede Version sind unterstützte Betriebssysteme und Architekturen, Bezugsquellen und Lizenzen samt Quelle angegeben. Begründete Alternativen helfen beim Wechsel. Pakete und Abhängigkeiten folgen den Regeln ihres jeweiligen Ökosystems.',
    },
    features: [
      {
        title: 'Versionen und Plattformen vergleichen',
        body: 'Unterstützte Betriebssysteme und Prozessorarchitekturen werden pro Version erfasst. Die Angaben für verschiedene Systeme werden getrennt behandelt und nicht voneinander abgeleitet.',
      },
      {
        title: 'Bezugsquellen',
        body: 'Offizielle Downloads, Shops und Paketquellen stehen mit ihren jeweiligen Quellen nebeneinander. Wenn REZICS nur einen Link anbietet, wird deutlich, dass er nach außen führt.',
      },
      {
        title: 'Versionshinweise bleiben erhalten',
        body: 'Änderungen und Veröffentlichungskanäle bleiben für jede Version erhalten. Folge der Software, um über neue Versionen benachrichtigt zu werden.',
      },
      {
        title: 'Begründete Alternativen',
        body: 'Eine Alternative ist eine zugeordnete Beziehung mit Namen. Sie nennt den passenden Einsatzzweck und den Grund. Andere können widersprechen.',
      },
      {
        title: 'Pakete und Abhängigkeiten',
        body: 'Pakete behalten in jedem Ökosystem ihren Namen, ihre Versionsregeln und die Bedeutung ihrer Abhängigkeiten. Gleichnamige Pakete gelten nicht als identisch.',
      },
      {
        title: 'Lizenz- und Datenschutzhinweise',
        body: 'Lizenz-, Datenschutz- und Barrierefreiheitserklärungen nennen ihre Urheber. Angaben von Entwicklern gelten nicht als von REZICS bestätigt.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'offers', 'follow'],
    partNotes: {
      identity: 'Eine Software hat über Plattformen und Paketquellen hinweg dieselbe Identität. Abgespaltene Projekte erhalten eigene Einträge mit Verweis auf ihren Ursprung.',
      editions: 'Versionsnummern, Veröffentlichungskanäle und Versionshinweise bleiben erhalten. Auch ältere Versionen sind auffindbar.',
      specs: 'Unterstützte Betriebssysteme, Prozessorarchitekturen und Paketabhängigkeiten werden pro Version mit Quellenangabe erfasst.',
      credits: 'Maintainer, Entwicklungsteams und Organisationen haben jeweils eine Identität. Beteiligte Projekte stehen auf derselben Seite.',
      ratings: 'Bewertungen können sich auf eine bestimmte Version oder Plattform beziehen. Anzahl und Verteilung sind sichtbar.',
      discussion: 'Diskussionen zu Nutzung, Updates und Alternativen stehen auf der Softwareseite.',
      offers: 'Bezugsquellen für offizielle Downloads, Shops und Paketquellen stehen nebeneinander. Preise und Lizenzen sind angegeben.',
      follow: 'Folge einer Software oder ihrem Maintainer, um keine neue Version und Ankündigung zu verpassen.',
    },
    connections: [
      { to: 'games', label: 'Passende Spielversion' },
      { to: 'mcp', label: 'Auch ein MCP-Server' },
      { to: 'skills', label: 'Als Abhängigkeit eines Skills aufgeführt' },
    ],
    community: {
      headline: 'Nützliche Zusammenstellungen aus der Community.',
      body: 'Die Community kann Software in Anleitungen oder Zusammenstellungen ordnen und die passende Umgebung sowie geprüfte Kompatibilität angeben. Veraltete Empfehlungen werden markiert und müssen erneut geprüft werden.',
    },
    imageAlt: 'Ein Softwarefenster',
  },
  {
    id: 'visual-novels',
    name: 'Visual Novels',
    tag: 'Visual novels',
    group: 'works',
    summary: 'Die passende Ausgabe nach Sprache, Plattform und Übersetzer',
    meta: {
      title: 'Visual Novels: eine spielbare Ausgabe finden',
      description:
        'Finde anhand von Sprache, Plattform, Region und Übersetzungsumfang eine Veröffentlichung, die alle Bedingungen erfüllt. Übersetzer und Vorlage sind angegeben. Halte deinen Fortschritt pro Route fest, ohne Handlungsverläufe oder Enden vorwegzunehmen.',
    },
    hero: {
      headline: 'Sprache, Plattform und Übersetzung müssen zur selben Ausgabe passen.',
      lede: 'Ein übersetzter Titel bedeutet nicht, dass eine spielbare Übersetzung vorliegt. REZICS zeigt Veröffentlichungen, die zu deiner Sprache, Plattform und zum gewünschten Umfang passen. Übersetzer und Vorlage sind angegeben. Routen und Enden erscheinen nur bis zu deiner Stelle.',
    },
    features: [
      {
        title: 'Alle Bedingungen erfüllt',
        body: 'Sprache, Plattform, Region und Vollständigkeit müssen bei der Suche zur selben Veröffentlichung gehören. Die Sprache einer Ausgabe wird nicht mit der Plattform einer anderen kombiniert.',
      },
      {
        title: 'Übersetzer und Vorlage',
        body: 'Jede Übersetzung nennt das Team, die Originalausgabe und ob sie vollständig, teilweise oder nur als Demo übersetzt wurde.',
      },
      {
        title: 'Routen und Enden ohne Spoiler',
        body: 'Routen, Enden und Geheimnisse der Figuren bleiben hinter einer Spoilergrenze. Angezeigt wird nur, was du bereits erlebt hast.',
      },
      {
        title: 'Aus dem Skript ein Wiki erstellen',
        body: 'Wer ein Skript besitzt, kann es lokal mit einem KI-Agenten lesen und abschnittsweise Figuren, Ereignisse und Quellenstellen vorschlagen. Nach menschlicher Prüfung wird es veröffentlicht. REZICS erhält nicht das vollständige Skript.',
      },
      {
        title: 'Demos, Veröffentlichung und Sprachpatches',
        body: 'Folge einem Werk und erfahre von Demos, der Veröffentlichung und neuen Sprachpatches. Jede Meldung verweist auf die konkrete Ausgabe.',
      },
    ],
    parts: ['identity', 'editions', 'names', 'credits', 'relations', 'facets', 'progress', 'wiki'],
    partNotes: {
      identity: 'Chinesische und japanische Visual-Novel-Communities nutzen dieselbe Werkidentität und wählen jeweils eigene Namen und Reihenfolgen.',
      editions: 'Originale, offizielle Übersetzungen, Fanpatches und Demos werden jeweils als eigene Veröffentlichung mit Sprache, Plattform, Region und Umfang erfasst.',
      names: 'Originaltitel, alternative Namen und Übersetzungen werden getrennt gespeichert. Ein übersetzter Titel bedeutet nicht, dass es eine spielbare Übersetzung gibt.',
      credits: 'Szenario, Illustration, Musik und Synchronisation werden getrennt genannt. Sprecher und ihre Figuren sind miteinander verknüpft.',
      relations: 'Fortsetzungen, Nebengeschichten, Anime-Adaptionen und Romanfassungen sind miteinander verknüpft.',
      facets: 'Bei Filtern nach Sprache, Plattform, Region und Vollständigkeit müssen alle Bedingungen zur selben Veröffentlichung passen.',
      progress: 'Halte deinen Fortschritt pro Route fest. Du siehst, welche du abgeschlossen hast und welche noch offen sind.',
      wiki: 'Das Wiki nennt für Figuren und Ereignisse die jeweilige Route als Quelle. Routen, die du noch nicht gespielt hast, bleiben verborgen.',
    },
    connections: [
      { to: 'anime', label: 'Anime-Adaption' },
      { to: 'books', label: 'Romanfassung' },
      { to: 'games', label: 'Derselbe Illustrator' },
    ],
    community: {
      headline: 'Chinesische und japanische Communities nutzen dieselben Daten.',
      body: 'Zwei Communities können jeweils eine Zone einrichten und eigene Übersetzungen, Beschreibungen und Reihenfolgen wählen. Die Werke, Veröffentlichungen und Mitwirkenden darunter sind dieselben. Eine Korrektur gilt für beide.',
    },
    imageAlt: 'Eine Dialogbox vor einer Szene',
  },
  {
    id: 'mcp',
    name: 'MCP Hub',
    tag: 'MCP',
    group: 'agents',
    summary: 'Versionen und Kompatibilitätsnachweise für MCP-Server',
    meta: {
      title: 'MCP Hub: Server, Versionen und Kompatibilitätsnachweise',
      description:
        'Erfasst MCP-Serverprojekte, Paketversionen und Bereitstellungsendpunkte. Jeder Kompatibilitätsnachweis nennt Aufgabe, Client, Version, Sprache und Datum. Werkzeuglisten werden pro Version festgehalten. Server lassen sich bewerten, diskutieren, in Listen ordnen und auf Updates verfolgen.',
    },
    hero: {
      headline: 'Sieh dir vor der Wahl eines MCP-Servers Nutzungserfahrungen an.',
      lede: 'Projekte, Paketversionen, Bereitstellungsendpunkte und beobachtete Werkzeuglisten werden getrennt erfasst. Jeder Kompatibilitätsnachweis nennt Client, Version, Sprache, Aufgabe und Datum.',
    },
    features: [
      {
        title: 'Vier Dinge getrennt erfassen',
        body: 'Projekt, Paketversion, Bereitstellungsendpunkt und beobachtete Werkzeuge sind vier getrennte Einträge. Ein erreichbarer Endpunkt bestätigt weder den Betreiber noch Kompatibilität oder Nutzungsrechte.',
      },
      {
        title: 'Datierte Kompatibilitätsnachweise',
        body: 'Jeder Nachweis nennt Aufgabe, Client, Clientversion, Sprache und Datum. Ein erfolgreicher Test aus dem letzten Jahr ist auch als solcher gekennzeichnet.',
      },
      {
        title: 'Werkzeuglisten pro Version',
        body: 'Jede Beobachtung hält die verfügbaren Werkzeuge und ihre Schemata fest. Bei einem Versionswechsel siehst du, was hinzugefügt oder geändert wurde.',
      },
      {
        title: 'Erfassung ist keine Empfehlung',
        body: 'Die Einträge beschreiben den Server. REZICS gibt keine Sicherheitsgarantie. Ein Nachweis gilt für eine bestimmte Version an einem bestimmten Datum.',
      },
      {
        title: 'In Listen ordnen und teilen',
        body: 'Stelle Server in einer Liste zusammen und notiere für jeden Zweck und Hinweise zur Einrichtung. Die Liste kann öffentlich, privat oder exportiert werden.',
      },
      {
        title: 'Auch KI-Agenten können suchen',
        body: 'Derselbe Index ist auch über die API und den MCP-Server von REZICS verfügbar. Dein Agent kann selbst einen passenden Server auswählen.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'lists', 'follow'],
    partNotes: {
      identity: 'Ein MCP-Serverprojekt hat eine Identität. Pakete, Bereitstellungsendpunkte und Beobachtungen sind damit verknüpft.',
      editions: 'Jede Paketveröffentlichung wird einzeln erfasst. Ältere Versionen und Änderungen bleiben auffindbar.',
      specs: 'Jeder Nachweis nennt Client, Version, Sprache, Aufgabe und Datum.',
      credits: 'Maintainer und ihre Organisationen haben eigene Identitäten. Skills und APIs desselben Maintainers sind verknüpft.',
      ratings: 'Bewertungen nennen die jeweilige Version sowie Anzahl und Verteilung.',
      discussion: 'Einrichtung, Fehlermeldungen und Erfahrungen werden auf der Serverseite diskutiert.',
      lists: 'Ordne häufig genutzte Server in Listen, ergänze Hinweise und teile oder exportiere sie.',
      follow: 'Folge einem Server und erhalte je nach Benachrichtigungseinstellung Meldungen zu neuen Versionen und Ankündigungen.',
    },
    connections: [
      { to: 'software', label: 'Projekte und Pakete' },
      { to: 'apis', label: 'Verpackte API' },
      { to: 'skills', label: 'Derselbe Maintainer' },
    ],
    community: {
      headline: 'Jede tatsächliche Nutzung liefert einen Nachweis.',
      body: 'Erfolgreiche und fehlgeschlagene Nutzung in einem Client kann mit Version und Datum gemeldet werden. Meldungen von KI-Agenten nutzen dasselbe Format und erscheinen erst nach menschlicher Prüfung auf der Seite.',
    },
    imageAlt: 'Einige Anschlüsse und ein Stecker',
  },
  {
    id: 'skills',
    name: 'Skill Hub',
    tag: 'Skills',
    group: 'agents',
    summary: 'Dateien, Abhängigkeiten und Kompatibilitätsnachweise für Skills',
    meta: {
      title: 'Skill Hub: Index für KI-Agenten-Skills',
      description:
        'Jeder Skill führt Dateien, Skripte und angegebene Abhängigkeiten auf. Jede Veröffentlichung hält Inhalt, Lizenz und Quelle fest. Beim Import werden keine Skripte ausgeführt. Datierte Kompatibilitätsnachweise, Bewertungen, Diskussionen und Listen stehen auf derselben Seite.',
    },
    hero: {
      headline: 'Sieh vor der Nutzung, was in einem Skill steckt.',
      lede: 'Dateien mit Beschreibung, Skripte, Referenzen und Materialien sind einzeln aufgeführt. Ausführbare Dateien sind gekennzeichnet. Benötigte Pakete, passende Clients und Versionen sowie dokumentierte Nutzung stehen auf derselben Seite.',
    },
    features: [
      {
        title: 'Dateien einzeln aufgeführt',
        body: 'Beschreibungen, Skripte, Referenzen und Materialien sind nach Art geordnet. Jede Datei hat einen Hashwert, ausführbare Dateien sind zusätzlich gekennzeichnet.',
      },
      {
        title: 'Abhängigkeiten genau angegeben',
        body: 'Benötigte Pakete sind nach Ökosystem geordnet und in erforderlich und optional unterteilt. Unklare Angaben oder nicht unterstützte Formate werden direkt markiert.',
      },
      {
        title: 'Beim Import nicht ausgeführt',
        body: 'Beim Import eines Skills aus einem Ordner oder Repository werden Skripte nur gespeichert, nicht ausgeführt. Ordner, die den Anforderungen nicht entsprechen, werden nicht zu Skills umgedeutet.',
      },
      {
        title: 'Veröffentlichte Inhalte bleiben unverändert',
        body: 'Jede Veröffentlichung hält Dateiinhalt, Lizenz und Quelle fest. Änderungen werden zu einer neuen Version. Ältere Versionen bleiben auffindbar.',
      },
      {
        title: 'Wer es wo verwendet hat',
        body: 'Kompatibilitätsnachweise nennen Aufgabe, Client, Version, Sprache und Datum. Du siehst, unter welchen Bedingungen der Skill funktioniert.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'lists', 'follow'],
    partNotes: {
      identity: 'Ein Skill hat eine Identität. Du siehst, aus welchem Repository er stammt und wie oft er geändert wurde.',
      editions: 'Jede Veröffentlichung hält Dateiinhalt, Lizenz und Quelle fest. Der Download entspricht der auf der Seite angegebenen Version.',
      specs: 'Benötigte Pakete sind in erforderlich und optional unterteilt. Fehlende Angaben oder nicht unterstützte Formate werden markiert.',
      credits: 'Autoren und Maintainer haben jeweils eine Identität. Ihre weiteren Skills und Server sind verknüpft.',
      ratings: 'Bewertungen fließen erst ab dem erforderlichen Mindestwert in den Durchschnitt ein. Anzahl und Verteilung werden angezeigt.',
      discussion: 'Nutzung, Einschränkungen und Fehlermeldungen werden auf der Skill-Seite diskutiert.',
      lists: 'Ordne Skills passend zu deinem Arbeitsablauf in Listen und ergänze eine Beschreibung.',
      follow: 'Folge einem Skill oder seinem Autor und erfahre von neuen Versionen.',
    },
    connections: [
      { to: 'software', label: 'Benötigte Pakete' },
      { to: 'mcp', label: 'Server desselben Autors' },
    ],
    community: {
      headline: 'Skill-Autoren mit eigenem Namen.',
      body: 'Autoren haben in REZICS eine Identität. Ihre Skills, gepflegten Server und weiteren Werke stehen auf derselben Seite. Folge einem Autor, um von seinem nächsten Skill zu erfahren.',
    },
    imageAlt: 'Ein Werkzeugkasten mit kleinen Werkzeugen',
  },
  {
    id: 'apis',
    name: 'API Hub',
    tag: 'APIs',
    group: 'agents',
    summary: 'Versionen, Spezifikationen und Bewertungen öffentlicher APIs',
    meta: {
      title: 'API Hub: Index öffentlicher APIs',
      description:
        'Führt Versionen und Änderungsprotokolle öffentlicher APIs auf. Spezifikationen nennen Messmethode und Zeitpunkt und lassen sich nebeneinander vergleichen. Bewertungen und Diskussionen beziehen sich auf eine Version. Folge einer API, damit Änderungen in deinem Posteingang landen.',
    },
    hero: {
      headline: 'Sieh dir vor der Wahl einer API Versionen und Belege an.',
      lede: 'Versionen, Änderungsprotokolle und zurückgezogene Veröffentlichungen jeder öffentlichen API stehen nebeneinander. Spezifikationen und Messungen nennen Methode, Bedingungen und Zeitpunkt. Authentifizierung und Spezifikationsdokumente sind pro Version erfasst. Bewertungen und Diskussionen nennen die jeweilige Version.',
    },
    features: [
      {
        title: 'Versionen im Überblick',
        body: 'Versionen und Änderungen sind chronologisch aufgeführt. Zurückgezogene und abgebrochene Versionen bleiben mit ihrem Status erhalten.',
      },
      {
        title: 'Messmethoden der Spezifikationen',
        body: 'Jede Spezifikation nennt Messmethode, Bedingungen, Einheit und Zeitpunkt. Zahlen bleiben mit ihrer Quelle verknüpft.',
      },
      {
        title: 'Direkt vergleichen',
        body: 'Filtere nach Einsatzzweck, Lizenz oder anderen Angaben und vergleiche APIs in einer gemeinsamen Tabelle.',
      },
      {
        title: 'Authentifizierung und Spezifikationen',
        body: 'Jede Version erfasst Authentifizierung und Quelle der Spezifikationsdokumente. Du kannst direkt danach filtern. Diese Angaben gehören zur jeweiligen Version.',
      },
      {
        title: 'Änderungen im Posteingang',
        body: 'Folge einer API, um über neue Versionen und Rücknahmen in deinem Posteingang oder einer Zusammenfassung informiert zu werden.',
      },
      {
        title: 'APIs für ein Projekt ordnen',
        body: 'Stelle die APIs eines Projekts in einer Liste zusammen, notiere ihren Einsatzzweck und teile oder exportiere sie.',
      },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'follow', 'lists'],
    partNotes: {
      identity: 'Eine öffentliche API hat eine Identität. Kennnummern und frühere Namen führen zu ihr.',
      editions: 'Versionen und Änderungsprotokolle stehen nebeneinander. Zurückgezogene Versionen sind gekennzeichnet.',
      specs: 'Messergebnisse nennen Methode, Bedingungen, Einheit und Zeitpunkt und lassen sich in einer Tabelle vergleichen.',
      credits: 'Anbieter und Maintainer haben eigene Identitäten. Software und MCP-Server derselben Organisation sind miteinander verknüpft.',
      ratings: 'Bewertungen nennen die Frage und die bewertende Gruppe.',
      discussion: 'Erfahrungen bei der Integration, Einschränkungen und Alternativen stehen auf der API-Seite.',
      follow: 'Folge einer API, damit neue Versionen und Rücknahmen direkt in deinem Posteingang erscheinen.',
      lists: 'Ordne die APIs eines Projekts in einer Liste und notiere ihren Einsatzzweck.',
    },
    connections: [
      { to: 'mcp', label: 'Als MCP-Server verpackt' },
      { to: 'software', label: 'Software derselben Organisation' },
    ],
    community: {
      headline: 'Wer eine API integriert hat, kann Erfahrungen teilen.',
      body: 'Entwickler können Einschränkungen, Abrechnung und Alternativen auf der API-Seite diskutieren. Bestätigte Fakten lassen sich zur Aufnahme in die Seitendaten vorschlagen und werden nach menschlicher Prüfung für alle sichtbar.',
    },
    imageAlt: 'Einige Endpunkte mit Verbindungen',
  },
];
