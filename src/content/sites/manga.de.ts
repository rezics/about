// The manga site (漫畫): every visible string of /manga/ and its six inner pages, read as the
// site's chapters 第 1 話 to 第 6 話. Design record: src/sites/manga/SITE.md ("v3"); sources for
// every claim: src/sites/manga/facts.md.
import type { Item, KindId, MiniSite, ModuleId, PartId } from '../schema';

/** A section head in the v3 grid: eyebrow in columns 1 to 3, serif h2, optional lead. */
export interface MangaHead {
  eyebrow: string;
  heading: string;
  lead?: string;
}
/** A large serif statement: the first half in ink, the second in muted ink. */
export interface MangaStatement {
  text: string;
  muted?: string;
}
/** One of this site's paper still-life pictures (public/images/sites/manga/). */
export interface MangaPicture {
  name: 'hero' | 'series' | 'progress' | 'adaptations' | 'publish';
  alt: string;
}
/** The intro of an inner page: chapter eyebrow, h1 and lede. */
export interface MangaIntro {
  eyebrow: string;
  headline: string;
  lede: string;
}
/** The closing: a final statement, the action into REZICS, then the next page or site. */
export interface MangaClosing {
  statement: string;
  /** The small label of the next link, e.g. 下一話　第 2 話. */
  nextLabel: string;
  /** The next page's or site's name. */
  nextName: string;
}

export interface MangaStrings {
  /** The action into REZICS (the product's address comes from `site.productUrl`). */
  action: string;
  landing: {
    hero: Omit<MangaIntro, 'eyebrow'> & { picture: MangaPicture };
    parts: MangaHead & { notes: Partial<Record<PartId, string>> };
    pages: MangaHead & { tiles: { slug: string; chapter: string; line: string }[] };
    statement: MangaStatement;
    neighbours: MangaHead & { tiles: { kind: KindId; line: string }[] };
    closing: MangaClosing;
  };
  series: {
    intro: MangaIntro;
    levels: MangaHead & { picture: MangaPicture; items: Item[] };
    catalogue: MangaHead & { items: Item[]; footnotes: string[] };
    names: MangaHead & { body: string[]; items: Item[] };
    closing: MangaClosing;
  };
  progress: {
    intro: MangaIntro;
    language: MangaHead & { picture: MangaPicture };
    caught: MangaHead & { items: Item[] };
    statement: MangaStatement;
    travels: MangaHead & { items: Item[]; footnote: string };
    closing: MangaClosing;
  };
  creators: {
    intro: MangaIntro;
    roles: MangaHead & { items: Item[]; footnotes: string[] };
    person: MangaHead & { tiles: { kind: KindId; line: string }[] };
    statement: MangaStatement;
    closing: MangaClosing;
  };
  adaptations: {
    intro: MangaIntro;
    example: MangaHead & { picture: MangaPicture; items: Item[]; footnote: string };
    relations: MangaHead & { items: Item[]; footnote: string };
    apart: MangaHead;
    statement: MangaStatement;
    closing: MangaClosing;
  };
  community: {
    intro: MangaIntro;
    spoilers: MangaHead & { items: Item[] };
    ratings: MangaHead;
    gather: MangaHead & { items: Item[]; footnote: string; tiles: { module: ModuleId; line: string }[] };
    closing: MangaClosing;
  };
  publish: {
    intro: MangaIntro;
    steps: MangaHead & { picture: MangaPicture; items: Item[] };
    decides: MangaHead & { items: Item[] };
    elsewhere: MangaHead;
    closing: MangaClosing;
  };
}

export default {
  id: 'manga',
  base: '/manga/',
  name: 'Manga',
  theme: { kind: 'manga' },
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'Manga: Vom ersten Kapitel bis zum neuesten Band',
        description:
          'REZICS gibt jedem Manga eine Identität. Fortsetzungskapitel, Einzelbände in verschiedenen Sprachen und Übersetzungen gehören dazu. REZICS merkt sich, bis wohin du gelesen hast, zeigt, auf welchen Band du in deiner Sprache wartest, und bringt dich mit Lesern derselben Stelle ins Gespräch.',
      },
    },
    {
      slug: 'series',
      label: 'Reihe',
      meta: {
        title: 'Bände, Kapitel und Übersetzungen eines Manga',
        description:
          'Die Reihe und jeder Einzelband sind eigene Werke. Jedes Kapitel hat innerhalb eines Bands eine feste Nummer. Sammelbände nennen nur ihren Umfang. Die japanische und taiwanische Ausgabe gehören zum selben Werk und nennen jeweils ihren Übersetzer. Nichts wird doppelt gezählt.',
      },
    },
    {
      slug: 'progress',
      label: 'Fortschritt',
      meta: {
        title: 'Manga-Fortschritt: Bis zu welchem Kapitel',
        description:
          'Dein Manga-Fortschritt wird kapitelweise erfasst und bleibt über Bände, Sammelausgaben und Geräte hinweg erhalten. Auch nach einem Sprachwechsel zählen gelesene Bände weiter. Wenn das nächste Kapitel noch nicht in deiner Sprache verfügbar ist, siehst du, auf welchen Band du wartest.',
      },
    },
    {
      slug: 'creators',
      label: 'Autoren',
      meta: {
        title: 'Manga-Autoren: Geschichte, Zeichnungen und Übersetzung',
        description:
          'Jeder Beitrag zu einem Manga nennt die Rolle. Geschichte, Zeichnungen, Illustration und Übersetzung werden getrennt aufgeführt. Eine Person hat in Romanen, Manga, Anime und Spielen dieselbe Identität. Folge ihr, um neue Werke und Ankündigungen zu sehen.',
      },
    },
    {
      slug: 'adaptations',
      label: 'Adaptionen',
      meta: {
        title: 'Manga und Adaptionen: Romane, Anime und Spiele',
        description:
          'REZICS verknüpft Mangas mit ihren Vorlagen und Adaptionen über benannte Beziehungen. Für jedes Werk werden Fortschritt, Bewertungen und Spoilergrenzen separat erfasst. Unbestätigte Verknüpfungen sind entsprechend gekennzeichnet.',
      },
    },
    {
      slug: 'community',
      label: 'Diskussion',
      meta: {
        title: 'Manga-Diskussion: Bis zu deinem Kapitel',
        description:
          'Jedes Kapitel hat eine eigene Diskussion. Inhalte, die du noch nicht gelesen hast, bleiben verborgen. Bewertungen nennen das Werk, den Band oder die Übersetzung und zeigen Anzahl und Verteilung. Communities können eine Community gründen, eine Zone einrichten und Wiki+ für das Werk schreiben.',
      },
    },
    {
      slug: 'publish',
      label: 'Veröffentlichen',
      meta: {
        title: 'Veröffentliche deinen Manga als Fortsetzung auf REZICS',
        description:
          'Veröffentliche deinen Manga auf REZICS, auch als reine Bildkapitel. Plane Beiträge nach deiner Zeitzone, lade Mitwirkende ein und vergib Rechte einzeln. Übersetzungen anderer werden nur mit deiner Zustimmung veröffentlicht. Jede Seite verweist auf das Original und das ganze Werk lässt sich jederzeit sichern.',
      },
    },
  ],
  strings: {
    action: 'Zu REZICS',
    landing: {
      hero: {
        headline: 'REZICS merkt sich, bis zu welchem Kapitel du gelesen hast.',
        lede: 'Einzelbände, Fortsetzungskapitel und Übersetzungen in allen Sprachen gehören zum selben Manga. REZICS merkt sich deinen Fortschritt und findet das nächste Kapitel in deiner Sprache.',
        picture: {
          name: 'hero',
          alt: 'Ein fast schwarzer Papierbogen ist wie eine Manga-Seite mit Fenstern in verschiedenen Größen ausgeschnitten. Unter einem Fenster scheint rosafarbenes Papier hervor.',
        },
      },
      parts: {
        eyebrow: 'Acht Teile',
        heading: 'So setzen sich die gemeinsamen Teile für Manga zusammen.',
        notes: {
          identity: 'Du findest dasselbe Werk unter jedem übersetzten Titel.',
          editions: 'Japanische und taiwanische Ausgaben, E-Books und Sammelbände erhalten jeweils einen eigenen Veröffentlichungseintrag.',
          credits: 'Autor und Zeichner werden getrennt genannt. Übersetzer stehen bei der jeweiligen Ausgabe.',
          relations: 'Du findest sowohl die Vorlage als auch die Werke, in die sie adaptiert wurde.',
          progress: 'Der Fortschritt wird Kapitel für Kapitel erfasst und ist auf anderen Geräten verfügbar.',
          ratings: 'Neben jeder Bewertung stehen das Kapitel und die jeweilige Übersetzung.',
          discussion: 'Diskussionen sind nach Kapiteln getrennt. Beiträge nach deinem Fortschritt bleiben verborgen.',
          offers: 'Wo eine Sprachfassung erhältlich ist, wird mit dem Datum der Abfrage angegeben.',
        },
      },
      pages: {
        eyebrow: 'Diese Website',
        heading: 'Sechs Kapitel über Manga, in der Reihenfolge oder direkt zu deinem Thema.',
        tiles: [
          { slug: 'series', chapter: 'Kapitel 1', line: 'Bände, Kapitel und Übersetzungen gehören zum selben Werk' },
          { slug: 'progress', chapter: 'Kapitel 2', line: 'Lies geräteübergreifend an der richtigen Stelle weiter' },
          { slug: 'creators', chapter: 'Kapitel 3', line: 'Autoren, Zeichner und Übersetzer haben eigene Namen' },
          { slug: 'adaptations', chapter: 'Kapitel 4', line: 'Verbindungen zwischen Roman, Manga, Anime und Spiel' },
          { slug: 'community', chapter: 'Kapitel 5', line: 'Spoiler bleiben verborgen, Bewertungen nennen ihren Bezug' },
          { slug: 'publish', chapter: 'Kapitel 6', line: 'Veröffentliche deinen eigenen Manga als Fortsetzung' },
        ],
      },
      statement: {
        text: 'Wenn du die veröffentlichten taiwanischen Bände gelesen hast, bist du auf dem aktuellen Stand.',
        muted: 'REZICS zeigt dir, auf welche Bände du noch in deiner Sprache wartest.',
      },
      neighbours: {
        eyebrow: 'Verwandte Arten',
        heading: 'Dieselbe Geschichte kann in verschiedenen Formen erscheinen.',
        lead: 'Romane, Anime, Spiele und Visual Novels haben eigene Identitäten. Verknüpfungen verbinden sie mit dem Manga.',
        tiles: [
          { kind: 'books', line: 'Vorlage: Roman oder Light Novel' },
          { kind: 'anime', line: 'Anime-Adaption mit getrenntem Fortschritt' },
          { kind: 'games', line: 'Spieladaption oder Vorlage für ein Spiel' },
          { kind: 'visual-novels', line: 'Die Manga-Adaption verweist auf das Original' },
        ],
      },
      closing: {
        statement: 'Vom ersten Kapitel bis zum neuesten Band, alles an einem Ort.',
        nextLabel: 'Nächstes Kapitel, Kapitel 1',
        nextName: 'Reihe',
      },
    },
    series: {
      intro: {
        eyebrow: 'Kapitel 1: Reihe',
        headline: 'Dutzende Bände und Hunderte Kapitel, ein Werk.',
        lede: 'Die Reihe ist ein Werk, ebenso jeder Einzelband. Jedes Kapitel hat darin eine feste Stelle. Sammelbände, Neuauflagen und Übersetzungen in anderen Sprachen werden separat erfasst und bleiben mit derselben Identität verknüpft.',
      },
      levels: {
        eyebrow: 'Im Überblick',
        heading: 'Eine Fortsetzung in ihren Teilen.',
        lead: 'Reihe, Einzelbände und Kapitel haben jeweils eine eigene Ebene und gehören doch zu derselben Identität.',
        picture: {
          name: 'series',
          alt: 'Mehr als zehn dünne, fast schwarze Hefte liegen ordentlich aufeinander. Die oberen Hefte sind mit einem dunkelgrünen Papierstreifen gebündelt.',
        },
        items: [
          { title: 'Reihe', body: 'Die gesamte Fortsetzung ist ein eigenes Werk. Autoren, Folgen und Bewertungen gehören dazu.' },
          {
            title: 'Einzelband',
            body: 'Jeder Einzelband ist ebenfalls ein Werk und kann separat gesammelt, bewertet und diskutiert werden. Die Nummerierung entspricht der Veröffentlichung. Sondernummern bleiben von anderen Bänden getrennt.',
          },
          {
            title: 'Kapitel',
            body: 'Jedes Kapitel hat eine feste Position und Nummer im Werk. Dein Fortschritt, die Diskussion und Wiki+-Zitate verweisen auf diese Stelle.',
          },
          { title: 'Sammelband', body: 'Ein Sammelband oder eine Gesamtausgabe enthält mehrere Bände. REZICS nennt nur die enthaltenen Bände und legt keine doppelten Werke an.' },
          {
            title: 'Übersetzung',
            body: 'Original und Übersetzungen in anderen Sprachen gehören zum selben Werk. Für jede Übersetzung werden Übersetzer, Rechte und Veröffentlichung erfasst. Fan-Übersetzungen nennen ebenfalls ihre Vorlage.',
          },
        ],
      },
      catalogue: {
        eyebrow: 'Katalogangaben',
        heading: 'Fehlende Katalogangaben zum Manga sind als „Nicht erfasst“ gekennzeichnet.',
        items: [
          { title: 'Art', body: 'Manga oder Einzelgeschichte.' },
          { title: 'Erstveröffentlichung', body: 'Das Jahr der ersten Veröffentlichung. Du kannst Werke aus einem Jahr ansehen und bis zum letzten blättern.' },
          { title: 'Bandzahl', body: 'Anzahl der veröffentlichten Einzelbände.' },
          { title: 'Status', body: 'Laufend, abgeschlossen, pausiert, noch nicht erschienen oder abgesagt.' },
        ],
        footnotes: [
          'Fehlende Angaben werden nicht erraten. Importierte Katalogdaten nennen Quelle und Lizenz.',
          'Die Manga-Zone filtert das gesamte Verzeichnis nach Titel, Art, Status und Jahr.',
        ],
      },
      names: {
        eyebrow: 'Namen und Ausgaben',
        heading: 'Der Originaltitel bleibt erhalten, ebenso Übersetzungen aus anderen Regionen.',
        body: [
          'Originaltitel, Übersetzungen und gebräuchliche Aliase stehen zusammen. Du findest das Werk über jeden dieser Namen. Traditionelle chinesische Namen werden nicht automatisch in vereinfachtes Chinesisch umgewandelt. Eine Umwandlung wird deutlich gekennzeichnet.',
          'Du kannst privat festlegen, welche Ausgabe du liest. REZICS merkt sich das E-Book, die Neuauflage oder die taiwanische Ausgabe, die du ausgewählt hast.',
        ],
        items: [
          { title: 'ISBN', body: 'Eine ISBN führt dich zum jeweiligen Band, seiner Übersetzung und dem gesamten Werk.' },
          { title: 'Übersetzter Titel', body: 'Ein übersetzter Titel bedeutet nicht, dass es eine Übersetzung in dieser Sprache gibt.' },
        ],
      },
      closing: {
        statement: 'Auch mit vielen Bänden hat ein Werk nur eine Identität.',
        nextLabel: 'Nächstes Kapitel, Kapitel 2',
        nextName: 'Fortschritt',
      },
    },
    progress: {
      intro: {
        eyebrow: 'Kapitel 2: Fortschritt',
        headline: 'Beim letzten Mal bis Kapitel 12 gelesen, jetzt geht es mit Kapitel 13 weiter.',
        lede: 'REZICS ordnet alle Kapitel nach Band und zeigt dir deine letzte Stelle und das nächste Kapitel. Wenn du auf dem Smartphone aufhörst, kannst du am Computer dort weiterlesen.',
      },
      language: {
        eyebrow: 'Sprachwechsel',
        heading: 'Ein Sprachwechsel ändert nicht, was du gelesen hast.',
        lead: 'Du liest die ersten zehn Kapitel auf Japanisch und wechselst dann zu traditionellem Chinesisch. Sie zählen weiterhin als gelesen. REZICS findet das nächste Kapitel in traditionellem Chinesisch. Ist die Ausgabe noch nicht erschienen, zeigt REZICS, auf welches Kapitel du wartest.',
        picture: {
          name: 'progress',
          alt: 'Ein langer, fast schwarzer Papierstreifen ist in Abschnitte gefaltet. Am rechten Ende sind mehrere Abschnitte flach aufeinandergelegt und mit einem kleinen rosafarbenen Papierstück markiert.',
        },
      },
      caught: {
        eyebrow: 'Bist du auf dem aktuellen Stand?',
        heading: '„Auf dem aktuellen Stand“ kann Verschiedenes bedeuten. REZICS unterscheidet.',
        items: [
          { title: 'In dieser Sprache aufgeholt', body: 'Du hast alles gelesen, was in deiner Sprache verfügbar ist. Das nächste Kapitel wartet auf eine Übersetzung.' },
          { title: 'Alle veröffentlichten Kapitel gelesen', body: 'Du hast bis zum neuesten Kapitel gelesen, obwohl die Reihe noch weitergeht.' },
          { title: 'Reihe abgeschlossen', body: 'Die Fortsetzung ist beendet. Es erscheinen keine neuen Kapitel mehr.' },
          { title: 'Zuordnung ungeklärt', body: 'Wenn Web- und Sammelausgabe nicht übereinstimmen, wird die Zuordnung als ungeklärt markiert. Der Fortschritt einer Ausgabe wird nicht auf die andere übertragen.' },
          { title: 'Zusatzkapitel überspringen', body: 'Als optional gekennzeichnete Ableger und Sonderkapitel kannst du überspringen, ohne dass dein Werkfortschritt beeinflusst wird.' },
        ],
      },
      statement: {
        text: 'Gekauft bedeutet nicht gelesen.',
        muted: 'Gekaufte Einzelbände kannst du als Sammlung erfassen. Dein Lesefortschritt wird separat festgehalten.',
      },
      travels: {
        eyebrow: 'Folgt dir',
        heading: 'Dein Fortschritt bleibt auf allen Geräten erhalten.',
        items: [
          { title: 'Zwei Geräte', body: 'Smartphone und Computer verwenden denselben Fortschritt. Falsche Einträge kannst du rückgängig machen und sie werden auf dem anderen Gerät aktualisiert.' },
          { title: 'Weiterlesen', body: 'Ein Klick auf den obersten Bereich der Startseite öffnet das nächste Kapitel.' },
          {
            title: 'Folgen',
            body: 'Markiere einen Manga als gerade gelesen, um ihm zu folgen. Erscheint ein neues Kapitel oder ein neuer Band in deiner Sprache, wirst du benachrichtigt. Du kannst nur wichtige Updates wählen oder alle Benachrichtigungen ausschalten.',
          },
          {
            title: 'Import',
            body: 'Importiere eine Manga-Liste von einer anderen Website. Zugeordnete Status, Daten, Bewertungen, Tags und private Notizen bleiben erhalten. Rohdaten wie die Zahl erneuter Lektüren werden sieben Tage gespeichert. Exportiere sie vorher zur Sicherung.',
          },
          { title: 'Export', body: 'Du kannst deine gesamte Bibliothek jederzeit samt Daten und Notizen exportieren.' },
        ],
        footnote: 'REZICS verwendet private Leseverläufe standardmäßig weder zum Trainieren von KI-Modellen noch zum Erstellen von Werbeprofilen.',
      },
      closing: {
        statement: 'Lies beim nächsten Mal ab deinem letzten Kapitel weiter.',
        nextLabel: 'Nächstes Kapitel, Kapitel 3',
        nextName: 'Autoren',
      },
    },
    creators: {
      intro: {
        eyebrow: 'Kapitel 3: Autoren',
        headline: 'Autor und Zeichner haben jeweils einen Namen.',
        lede: 'Bei vielen Manga stammen Geschichte und Zeichnungen von verschiedenen Personen. REZICS nennt jede Person nach ihrer Rolle und verknüpft ihren Namen mit allen Werken, ob Manga, Roman oder Anime.',
      },
      roles: {
        eyebrow: 'Nennung',
        heading: 'Jede Nennung führt die jeweilige Rolle auf.',
        items: [
          { title: 'Geschichte', body: 'Person, die die Geschichte entwickelt und geschrieben hat.' },
          { title: 'Zeichnungen', body: 'Person, die die Geschichte als Manga zeichnet.' },
          { title: 'Illustration', body: 'Person, die Cover, Farbseiten oder Romanillustrationen zeichnet.' },
          { title: 'Übersetzer', body: 'Wird bei der übersetzten Version genannt und nicht auf andere übertragen.' },
          { title: 'Konzeptaufsicht', body: 'Person, die die ursprüngliche Idee beigesteuert oder die Aufsicht übernommen hat.' },
        ],
        footnotes: ['Auch Fan-Übersetzungsteams werden namentlich genannt, aber nie als offizielle Übersetzungen gekennzeichnet.', 'Figurennamen sind Teil der Daten und können in jeder Sprache angegeben werden.'],
      },
      person: {
        eyebrow: 'Eine Person',
        heading: 'Ein Name verbindet die Werke dieser Person aus verschiedenen Bereichen.',
        lead: 'Eine Zeichnerin kann Romanillustrationen anfertigen, ihren eigenen Manga veröffentlichen und für Spiele zeichnen. REZICS führt alles unter derselben Person auf. Folge ihr und du siehst neue Werke und Ankündigungen in deinem Feed.',
        tiles: [
          { kind: 'books', line: 'Illustrationen für Romane' },
          { kind: 'anime', line: 'Vorlage einer Anime-Adaption' },
          { kind: 'games', line: 'Grafiken für ein Spiel' },
        ],
      },
      statement: {
        text: 'Genannt wird die Person, nicht das Konto.',
        muted: 'Die Personenseite mit allen genannten Werken gibt es auch, bevor der Autor beitritt.',
      },
      closing: {
        statement: 'Jeder Name nennt den Beitrag.',
        nextLabel: 'Nächstes Kapitel, Kapitel 4',
        nextName: 'Adaptionen',
      },
    },
    adaptations: {
      intro: {
        eyebrow: 'Kapitel 4: Adaptionen',
        headline: 'Eine Geschichte, vier Formen.',
        lede: 'Romane, Manga, Anime und Spiele sind auf REZICS jeweils eigene Werke. Benannte Beziehungen verbinden sie. Vom Manga aus findest du die Vorlage und ihre Adaptionen.',
      },
      example: {
        eyebrow: 'Ein Beispiel',
        heading: 'Zum Beispiel A Certain Magical Index.',
        lead: 'Das Original ist eine Light Novel von Kazuma Kamachi mit Illustrationen von Kiyotaka Haimura. REZICS erfasst jede Adaption als eigenes Werk und benennt die Beziehung zwischen ihnen.',
        picture: {
          name: 'adaptations',
          alt: 'Dunkelgrüne, fast schwarze und rosafarbene Blätter liegen diagonal von links oben nach rechts unten. Ihre Ecken berühren sich.',
        },
        items: [
          { title: 'Light Novel', body: 'Original. Die drei Reihen der Hauptgeschichte, New Testament und Genesis Testament sind als Fortsetzungen verknüpft.' },
          { title: 'Manga', body: 'Adaption der Light Novel, gezeichnet von Chuuya Kogino.' },
          { title: 'Anime', body: 'Ebenfalls eine Adaption der Light Novel. Der Fortschritt bleibt vom Manga getrennt.' },
          { title: 'A Certain Scientific Railgun', body: 'Ableger mit eigenem Manga und Anime-Adaption.' },
          { title: 'Spiele', body: 'Eines davon ist eine Visual Novel und führt zum Bereich Visual Novels.' },
        ],
        footnote: 'Dieses Beispiel zeigt nur, wie REZICS ein Werk erfasst. Es bedeutet keine Partnerschaft oder Lizenz.',
      },
      relations: {
        eyebrow: 'Beziehungen',
        heading: 'Jede Beziehung benennt ihre Art.',
        items: [
          { title: 'basiert auf', body: 'Ein Roman, Anime oder Spiel wird als Manga adaptiert oder ein Manga in eine andere Form übertragen.' },
          { title: 'Fortsetzung oder Vorgänger', body: 'Die Geschichte wird fortgeführt.' },
          { title: 'Ableger', body: 'Nebengeschichten und Geschichten über Nebenfiguren verweisen auf die Hauptreihe.' },
          { title: 'Neufassung von', body: 'Wenn der Autor die Geschichte neu schreibt und sie vom Original abweicht, wird sie als eigenes Werk erfasst.' },
          { title: 'Neustart von', body: 'Eine neue Version, die von vorn beginnt.' },
          { title: 'Lesereihenfolge', body: 'Zusätzlich zur Veröffentlichungsreihenfolge kann es eine chronologische Lesereihenfolge geben. Beide bleiben erhalten.' },
        ],
        footnote: 'Unbestätigte Beziehungen bleiben als solche gekennzeichnet. Lieber offenlassen als eine Verbindung zu erzwingen.',
      },
      apart: {
        eyebrow: 'Getrennt erfassen',
        heading: 'Wenn du den Anime gesehen hast, springt dein Manga-Fortschritt nicht automatisch weiter.',
        lead: 'Anime- und Manga-Fortschritt werden getrennt erfasst. Rezensionen zu Manga und Anime lassen sich getrennt filtern und ihre Bewertungen werden jeweils separat berechnet.',
      },
      statement: {
        text: 'Wenn zwei Versionen voneinander abweichen, können die Fakten zu beiden im Wiki+ stehen.',
        muted: 'Jeder Fakt nennt die Version, zu der er gehört. Wie viel du siehst, richtet sich nach deinem Lesefortschritt.',
      },
      closing: {
        statement: 'Jede Form ist eigenständig und bleibt doch verknüpft.',
        nextLabel: 'Nächstes Kapitel, Kapitel 5',
        nextName: 'Diskussion',
      },
    },
    community: {
      intro: {
        eyebrow: 'Kapitel 5: Diskussion',
        headline: 'Du siehst nur Diskussionen bis zu deinem Kapitel.',
        lede: 'Diskussionen gehören zu jedem Kapitel. Beiträge zu späteren Stellen bleiben verborgen, bis du sie gelesen hast.',
      },
      spoilers: {
        eyebrow: 'Spoiler',
        heading: 'Inhalte jenseits deines Fortschritts bleiben verborgen, bis du sie öffnest.',
        items: [
          { title: 'Diskussion zu diesem Kapitel', body: 'Jedes Kapitel hat eine Diskussion. Zum Lesen musst du keiner Community beitreten.' },
          { title: 'Verborgene Kommentare', body: 'Kommentare zu späteren Stellen bleiben zunächst verborgen. Du kannst sie selbst öffnen. Das gilt nur für deine aktuelle Ansicht.' },
          { title: 'Spoiler-Abstimmung', body: 'Leser können abstimmen, welche Inhalte als Spoiler gelten. Das ist getrennt von der Kennzeichnung des Autors.' },
          {
            title: 'Drei Arten von Gesprächen',
            body: 'Handlung diskutieren, Rezensionen schreiben und Datenkorrekturen besprechen: jedes Thema hat seinen Platz. Beim Wechsel zwischen den Bereichen bleiben deine Version und Lesestelle erhalten.',
          },
        ],
      },
      ratings: {
        eyebrow: 'Bewertungen',
        heading: 'Jede Bewertung nennt ihren Gegenstand.',
        lead: 'Reihe, Einzelband und Übersetzung haben getrennte Bewertungen. Die Bewertung der Reihe wird nicht aus den Bänden gemittelt. Jede Bewertung nennt Anzahl, Verteilung und Gruppe. Rezensionen geben an, ob sie Geschichte oder Übersetzung beurteilen. Du kannst auch ohne Bewertung schreiben.',
      },
      gather: {
        eyebrow: 'Community',
        heading: 'Ein Ort für die Community.',
        items: [
          {
            title: 'Community',
            body: 'Leser eines Manga können eine Community mit Mitgliedern, Regeln und Moderatoren gründen. Empfehlungen der Community verweisen auf die Diskussion, in der sie beschlossen wurden.',
          },
          { title: 'Zone', body: 'Eine Community kann für ein Werk eine ganze Website mit eigenen Seiten, Navigation und Gestaltung einrichten. Die Daten bleiben dieselben.' },
          {
            title: 'Wiki+',
            body: 'Figuren, Orte, Zeitleisten und Kapitelübersichten werden nur bis zu deinem Lesefortschritt angezeigt. Jeder Fakt in einer Infobox wurde geprüft.',
          },
          { title: 'Liste', body: 'Erstelle eine Einstiegsliste oder Lesereihenfolge, begründe jeden Eintrag, sortiere und exportiere sie.' },
          { title: 'Folgen', body: 'Folge einem Werk, Autor oder einer Community und bestimme jeweils, wie oft du benachrichtigt wirst.' },
        ],
        footnote: 'Altersfreigaben lassen sich getrennt einstellen: ohne Einschränkung, R15, R18 und R18G. Nicht bewertete Inhalte sind als „Nicht bewertet“ gekennzeichnet.',
        tiles: [
          { module: 'community', line: 'Diskussionen, Bewertungen und Listen für Communities' },
          { module: 'zones', line: 'Zone und Wiki+, die Website der Community' },
        ],
      },
      closing: {
        statement: 'Diskutiere jedes Kapitel, nachdem du es gelesen hast.',
        nextLabel: 'Nächstes Kapitel, Kapitel 6',
        nextName: 'Veröffentlichen',
      },
    },
    publish: {
      intro: {
        eyebrow: 'Kapitel 6: Veröffentlichen',
        headline: 'Dein Manga hat vom ersten Kapitel an eine Identität.',
        lede: 'Dein auf REZICS veröffentlichter Manga steht neben anderen im selben Verzeichnis. Leser nutzen dieselben Funktionen für Fortschritt, Diskussion und Bewertungen. Adaptionen und Übersetzungen verweisen auf dein Werk.',
      },
      steps: {
        eyebrow: 'Ablauf',
        heading: 'Vom Manuskript zu den Lesern.',
        lead: 'Du bestimmst jeden Schritt vom Hochladen bis zur Veröffentlichung. Alles wird im Verlauf des Werks festgehalten.',
        picture: {
          name: 'publish',
          alt: 'Ein fast schwarzes Blatt ist zu einem dreiseitigen Paravent gefaltet. Jede Seite hat ausgeschnittene Fenster, durch die Licht in den Schatten fällt. Daneben liegen lose Blätter.',
        },
        items: [
          { title: 'Kapitel hochladen', body: 'Ein Kapitel kann nur aus Bildseiten bestehen. Du musst keinen Text hinzufügen. Anmerkungen des Autors stehen separat, zählen nicht zum Werktext und werden nicht übersetzt.' },
          { title: 'Veröffentlichung planen', body: 'Lege Datum und Zeitzone fest. Der Beitrag wird auch veröffentlicht, wenn dein Browser geschlossen ist.' },
          { title: 'Gemeinsam bearbeiten', body: 'Lade Assistenten und Redakteure ein. Vergib Lese-, Vorschlags-, Bearbeitungs- und Veröffentlichungsrechte getrennt. Bearbeitungs- und Veröffentlichungsrechte sind unabhängig voneinander.' },
          { title: 'Jede Seite hat ihre Stelle', body: 'Jede Seite hat eine feste Position. Übersetzungen verweisen Seite für Seite auf dein Original.' },
          { title: 'Rückmeldungen erhalten', body: 'Kommentare und Korrekturvorschläge der Leser kommen in einem gemeinsamen Posteingang an.' },
        ],
      },
      decides: {
        eyebrow: 'Der Autor entscheidet',
        heading: 'Diese Entscheidungen liegen beim Autor.',
        items: [
          {
            title: 'Übersetzungen',
            body: 'Übersetzungen anderer sind standardmäßig privat. Sie werden erst mit deiner Zustimmung oder einer zuvor erteilten offenen Lizenz veröffentlicht. Du kannst auch verhindern, dass dein Werk auf eine bestimmte Übersetzung verweist.',
          },
          { title: 'Rechte', body: 'Lege eine Lizenzerklärung für dein Werk an, die die erlaubte Nutzung durch Leser und Übersetzer beschreibt.' },
          { title: 'KI-Nutzung', body: 'Für jedes Kapitel kannst du angeben, ob KI nicht, unterstützend oder generierend beteiligt war. Leser können danach filtern.' },
          { title: 'Überarbeitungen', body: 'Überarbeitete Seiten behalten ihren Versionsverlauf. Die Fassung, die Leser beim Kommentieren gesehen haben, wird nicht stillschweigend ersetzt.' },
          { title: 'Sicherung', body: 'Du kannst das gesamte Werk einschließlich aller Überarbeitungen jederzeit sichern.' },
        ],
      },
      elsewhere: {
        eyebrow: 'Woanders veröffentlichen',
        heading: 'Auch bereits anderswo veröffentlichte Fortsetzungen lassen sich erfassen.',
        lead: 'Werke, die auf deiner Website oder anderswo als Fortsetzung erscheinen, können auf REZICS eine Identität erhalten. Online-Fortsetzungen werden mit URL und datierten Momentaufnahmen erfasst. Erscheint ein Einzelband, wird er separat eingetragen.',
      },
      closing: {
        statement: 'Auch auf REZICS behält der Autor die Kontrolle über sein Werk.',
        nextLabel: 'Nächste Station',
        nextName: 'Spiele',
      },
    },
  },
} satisfies MiniSite<MangaStrings>;
