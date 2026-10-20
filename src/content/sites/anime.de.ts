// The 動畫 site: every visible string of /anime/ and its six inner pages, in the v3 parts (hero,
// sections, tile masonry, photo rows, statements, facts lists, closing). The plan is in
// src/sites/anime/SITE.md under "v3"; claims and sources in src/sites/anime/facts.md. Example
// data is generic and marked 示意; the one real work named is 《魔法禁書目錄》, text only
// (.temp/sites/EXAMPLE-WORK.md).
import type { KindId, MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'anime')!;

/** A title and its line: facts rows, tiles. */
export interface Row {
  title: string;
  body: string;
}
/** A still-life from the site's paper series (public/images/sites/anime/<src>-<w>.avif|webp). */
export interface Photo {
  src: 'hero' | 'weeks' | 'covered' | 'threads' | 'sources';
  alt: string;
}
/** An inner page's opening: the h1 and its line. */
export interface Head {
  headline: string;
  lede: string;
}
/** A section: eyebrow in columns 1 to 3, the h2, a lead. */
export interface Section {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** Large serif: `text`, then `muted` in muted ink, and an optional note under it. */
export interface Statement {
  text: string;
  muted: string;
  note?: string;
}
/** The final invitation, specific to the subject of each page. */
export interface ClosingCopy {
  headline: string;
  body: string;
}

export type AnimeStrings = {
  common: {
    /** Eyebrow of the section that leads to the next pages. */
    onward: string;
    /** Caption under generic example data. */
    example: string;
  };
  landing: {
    closing: ClosingCopy;
    hero: Head & { photo: Photo };
    pages: Section & { lines: { slug: string; line: string }[] };
    schedule: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    next: Statement;
    spoilers: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    parts: Section & { notes: Partial<Record<PartId, string>> };
    neighbours: Section & { tiles: { to: KindId; label: string }[] };
  };
  seasons: {
    closing: ClosingCopy;
    head: Head;
    marks: Section & { rows: Row[] };
    zones: { eyebrow: string; headline: string; body: string[]; photo: Photo };
    known: Section & { rows: Row[] };
    years: Section;
    /** One line that previews the next page. */
    next: string;
  };
  tracking: {
    closing: ClosingCopy;
    head: Head;
    statuses: Section & { rows: Row[] };
    seasons: Section & { tiles: Row[] };
    rewatch: Section;
    lists: Statement;
    next: string;
  };
  discussion: {
    closing: ClosingCopy;
    head: Head;
    spoiler: { eyebrow: string; headline: string; body: string; photo: Photo };
    position: Section & { rows: Row[] };
    conversations: Section & { rows: Row[] };
    spaces: Section & { tiles: Row[] };
    unseen: Statement;
    next: string;
  };
  ratings: {
    closing: ClosingCopy;
    head: Head;
    anatomy: Section & { rows: Row[] };
    episodes: Statement;
    targets: Section & { rows: Row[] };
    lists: Section & { tiles: string[] };
    next: string;
  };
  credits: {
    closing: ClosingCopy;
    head: Head;
    record: Section & { rows: Row[] };
    voice: { eyebrow: string; headline: string; body: string; photo: Photo };
    studio: Section;
    next: string;
  };
  adaptations: {
    closing: ClosingCopy;
    head: Head;
    example: { eyebrow: string; headline: string; body: string; photo: Photo };
    /** Generic family: each tile in the colour of its kind (null: a relation still to confirm). */
    family: Section & { tiles: { kind: KindId | null; relation: string; name: string }[] };
    scoped: Section;
    relations: Section & { rows: Row[] };
    orders: Statement;
    next: string;
  };
};

const site: MiniSite<AnimeStrings> = {
  id: 'anime',
  base: '/anime/',
  name: 'Anime',
  theme: { kind: 'anime' },
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'Anime: Sendeplan, Fortschritt, Diskussion und Vorlage',
        description:
          'Verfolge Anime auf REZICS. Sendezeiten stehen im Plan, und gesehene Folgen werden festgehalten. Jede Folge hat eine eigene Diskussion und Bewertung. Sprecher, Produktionsstudios und Vorlagen sind mit demselben Werk verknüpft.',
      },
    },
    {
      slug: 'seasons',
      label: 'Staffeln und Ausstrahlung',
      meta: {
        title: 'Anime-Staffeln und Sendeplan',
        description:
          'Anime starten in vier Staffeln pro Jahr. REZICS zeigt Neuerscheinungen und Sendezeiten jeder Folge in einer Tabelle, angepasst an deine Zeitzone. Ist nur das Datum bekannt, wird nur das Datum angegeben. Erinnerungen lassen sich in den Kalender exportieren.',
      },
    },
    {
      slug: 'tracking',
      label: 'Fortschritt verfolgen',
      meta: {
        title: 'Anime-Fortschritt: Folge für Folge',
        description:
          'Erfasse deinen Anime-Fortschritt auf REZICS mit fünf Status: Möchte ich sehen, Sehe ich gerade, Gesehen, Pausiert und Abgebrochen. Halte jede Folge fest und finde die nächste in der Reihenfolge. Erneutes Ansehen wird separat erfasst. Listen lassen sich importieren und vollständig exportieren.',
      },
    },
    {
      slug: 'discussion',
      label: 'Diskussion zu jeder Folge',
      meta: {
        title: 'Anime-Diskussionen: ein Thread pro Folge',
        description:
          'Auf REZICS hat jede Anime-Folge eine eigene Diskussion. Spoiler bleiben verborgen, bis du sie selbst öffnest. Wiki+ richtet sich nach den Folgen, die du gesehen hast. Communities können mit einer Zone eine eigene Anime-Website einrichten.',
      },
    },
    {
      slug: 'ratings',
      label: 'Bewertungen und Listen',
      meta: {
        title: 'Anime-Bewertungen, Rezensionen und Listen',
        description:
          'Jede Bewertung auf REZICS nennt ihren Gegenstand, die Skala, die Anzahl und die bewertende Gruppe. Gesamtwerk und einzelne Folgen werden getrennt bewertet. Rezensionen brauchen keine Bewertung. Listen lassen sich sortieren, kommentieren und exportieren.',
      },
    },
    {
      slug: 'credits',
      label: 'Produktion und Besetzung',
      meta: {
        title: 'Anime-Credits und Sprecher',
        description:
          'Auf REZICS haben Regisseure, Drehbuchautoren, Produktionsstudios und Sprecher jeweils eine Identität. Jeder Credit nennt Rolle und Werk. Sprecher sind auch mit ihren Figuren verknüpft. Folge einer Person oder einem Studio und erfahre von neuen Werken.',
      },
    },
    {
      slug: 'adaptations',
      label: 'Vorlage und Adaptionen',
      meta: {
        title: 'Vorlagen und Adaptionen von Anime',
        description:
          'Auf REZICS haben Anime, ihre Roman- und Manga-Vorlagen, Fortsetzungen und Spieladaptionen jeweils eine eigene Identität. Beziehungen verknüpfen sie. Fortschritt wird getrennt erfasst und unterschiedliche Angaben nennen ihre jeweilige Quelle.',
      },
    },
  ],
  strings: {
    common: {
      onward: 'Weiterlesen',
      example: 'Beispiel.',
    },
    landing: {
      closing: {
        headline: 'Alle Anime dieser Staffel in deinem Sendeplan.',
        body: 'Organisiere Anime, die du sehen möchtest, halte deinen Fortschritt fest und diskutiere jede Folge auf REZICS.',
      },
      hero: {
        headline: 'Folge für Folge, vom Start bis zum Ende.',
        lede: 'Folgen und Sendezeiten jeder Staffel stehen in einem Plan für deine Zeitzone. Halte jede gesehene Folge fest. Sprecher, Studios und Vorlage sind mit dem Anime verknüpft.',
        photo: {
          src: 'hero',
          alt: 'Ein langer rosafarbener Papierstreifen ist zu zwölf Flächen gefaltet und steht auf warmweißem Papier. Am Ende liegen ein kohlschwarzes und ein grauviolettes Blatt.',
        },
      },
      pages: {
        eyebrow: 'Sechs Seiten',
        headline: 'Vom Sendeplan bis zur Vorlage: sechs Seiten über Anime.',
        lines: [
          { slug: 'seasons', line: 'Der Sendeplan jeder Staffel in deiner Zeitzone' },
          { slug: 'tracking', line: 'Finde die nächste Folge in der Reihenfolge' },
          { slug: 'discussion', line: 'Ungesehene Handlung bleibt verborgen' },
          { slug: 'ratings', line: 'Folgen und Gesamtwerk getrennt bewerten' },
          { slug: 'credits', line: 'Jeder Name hat eine Identität' },
          { slug: 'adaptations', line: 'Vorlage, Fortsetzungen und Ableger verknüpft' },
        ],
      },
      schedule: {
        eyebrow: 'Sendeplan',
        headline: 'Die Premiere um ein Uhr nachts nach deiner Uhrzeit.',
        body: 'Japanische Sendepläne geben eine späte Ausstrahlung als „Dienstag, 25:00 Uhr“ an, also Mittwoch um ein Uhr morgens. REZICS rechnet die Zeit in deine Zeitzone um. Wenn die Quelle nur ein Datum nennt, wird nur das Datum angegeben.',
        link: 'Staffeln und Sendeplan',
        photo: {
          src: 'weeks',
          alt: 'Schmale rosafarbene Papierstreifen liegen in vier Reihen wie ein Wochenplan. Einer ist grauviolett, eine Stelle bleibt frei.',
        },
      },
      next: { text: 'Welche Folge kommt als Nächstes?', muted: 'Finde sie in der bestätigten Reihenfolge.' },
      spoilers: {
        eyebrow: 'Diskussion pro Folge',
        headline: 'Ungesehene Handlung bleibt verborgen.',
        body: 'Diskussionen gehören zu jeder Folge. Handlung nach deinem Fortschritt bleibt verborgen, bis du sie selbst öffnest. Wiki+ zeigt standardmäßig nur Inhalte bis zur zuletzt gesehenen Folge.',
        link: 'So funktionieren Spoilergrenzen',
        photo: {
          src: 'covered',
          alt: 'Ein rosafarbener Papierstreifen ist in mehrere Flächen gefaltet. Der hintere Abschnitt wird von einem kohlschwarzen Blatt mit leicht angehobener Ecke verdeckt.',
        },
      },
      parts: {
        eyebrow: 'Acht Teile',
        headline: 'Acht Teile für Anime.',
        lead: 'Bücher, Manga und Spiele nutzen dieselben Teile. Anime verwendet acht davon und ergänzt den Sendeplan zur Identität.',
        notes: {
          identity: 'Chinesische, japanische und englische Titel gehören zum selben Anime. Fortsetzungen und Filme haben jeweils eine eigene Identität.',
          schedule: 'Startdatum, Sendezeiten der Folgen, Verschiebungen und Absetzungen stehen in einem Plan.',
          credits: 'Regie, Drehbuch und Studio werden mit ihrer Rolle erfasst. Sprecherangaben verknüpfen Sprecher und Figur.',
          relations: 'Vorlage, Fortsetzung, Ableger und Neuverfilmung sind als Beziehungen gekennzeichnet. Von der Vorlagenseite findest du zurück.',
          progress: 'Gesehene Folge, aktueller Stand und nächste Folge werden getrennt erfasst.',
          ratings: 'Gesamtwerk und einzelne Folgen werden separat bewertet. Anzahl und bewertende Gruppe stehen dabei.',
          discussion: 'Jede Folge hat eine eigene Diskussion. Handlung nach deinem Fortschritt öffnest du selbst.',
          wiki: 'Jeder Fakt in Wiki+ nennt seine Folge. Du siehst nur Inhalte bis zu deinem Fortschritt.',
        },
      },
      neighbours: {
        eyebrow: 'Verbundene Arten',
        headline: 'Original und Adaption haben jeweils einen eigenen Platz.',
        lead: 'Die Vorlage kann ein Roman, Manga oder eine Visual Novel sein. Aus einem Anime kann wiederum ein Spiel werden. Jede Version hat eine eigene Seite. Verknüpfungen verbinden sie, und derselbe Sprecher bleibt dieselbe Person.',
        tiles: [
          { to: 'books', label: 'Roman als Vorlage' },
          { to: 'manga', label: 'Manga als Vorlage oder Adaption' },
          { to: 'visual-novels', label: 'Adaptiert aus einer Visual Novel' },
          { to: 'games', label: 'Spieladaption und gemeinsame Sprecher' },
        ],
      },
    },
    seasons: {
      closing: {
        headline: 'Sieh dir an, was in dieser Staffel läuft.',
        body: 'Beginne mit den neuen Anime der Staffel, prüfe die Sendezeiten und lass dich an die nächste Folge erinnern.',
      },
      head: {
        headline: 'Vier Staffeln, ein Plan pro Jahr.',
        lede: 'Anime starten meist im Januar, April, Juli und Oktober. Der Plan zeigt für jeden Anime den Start und die Sendezeiten aller Folgen.',
      },
      marks: {
        eyebrow: 'Fünf Status',
        headline: 'Angekündigt, geplant, verfügbar, verschoben und abgesagt bedeuten Verschiedenes.',
        rows: [
          { title: 'Angekündigt', body: 'Die Ankündigung liegt vor, aber noch kein Termin.' },
          { title: 'Geplant', body: 'Das Ausstrahlungsdatum steht fest. Eine bekannte Uhrzeit wird ebenfalls angegeben.' },
          { title: 'Verfügbar', body: 'Verfügbarkeit nach Region, Plattform und Sprache ist bestätigt.' },
          { title: 'Verschoben', body: 'Der geplante Termin wurde geändert. Die Änderung bleibt nachvollziehbar.' },
          { title: 'Abgesagt', body: 'Die Ausstrahlung findet nicht statt und wird entsprechend gekennzeichnet.' },
        ],
      },
      zones: {
        eyebrow: 'Deine Zeitzone',
        headline: 'Sendezeiten derselben Folge in deiner Zeitzone.',
        body: [
          'Sendezeiten werden in deiner Zeitzone angezeigt. Dieselbe Folge kann an verschiedenen Orten an unterschiedlichen Tagen und Uhrzeiten laufen.',
          '„Dienstag, 25:00 Uhr“ im japanischen Sendeplan bedeutet Mittwoch um ein Uhr morgens. In Taipeh ist es Mitternacht am Mittwoch, in Los Angeles Dienstagvormittag.',
        ],
        photo: {
          src: 'weeks',
          alt: 'Schmale rosafarbene Papierstreifen liegen in vier Reihen wie ein Wochenplan. Einer ist grauviolett, eine Stelle bleibt frei.',
        },
      },
      known: {
        eyebrow: 'Nur bekannte Angaben',
        headline: 'Datum, Uhrzeit und Verfügbarkeit werden getrennt angegeben.',
        rows: [
          {
            title: 'Unbekannte Uhrzeit bleibt offen',
            body: 'Wenn die Quelle nur ein Datum nennt, zeigt der Plan nur das Datum und kennzeichnet die Uhrzeit als offen. Es wird keine Uhrzeit erfunden.',
          },
          {
            title: 'Ausstrahlung bedeutet nicht Verfügbarkeit',
            body: 'Ein Ausstrahlungstermin bedeutet nicht, dass du die Folge sehen kannst. Untertitel und Synchronisation werden für jede Region und Plattform getrennt angegeben. Unbekanntes bleibt als unbekannt gekennzeichnet.',
          },
          {
            title: 'Erinnerungen und Kalender',
            body: 'Wenn du einem Anime folgst, kannst du dich zu einer selbst gewählten Zeit erinnern lassen. Der Sendeplan lässt sich als Kalenderdatei exportieren. Ändert die Quelle eine Uhrzeit, wird deine Erinnerung markiert, damit du über die Anpassung entscheidest.',
          },
        ],
      },
      years: {
        eyebrow: 'Nach Jahr',
        headline: 'Nach Jahr stöbern, bis zum letzten Eintrag.',
        lead: 'Wähle ein Jahr, um die darin veröffentlichten Anime der Reihe nach zu durchsuchen. Du kannst bis zum letzten Eintrag blättern. Solange die Gesamtzahl nicht ermittelt ist, wird sie als Mindestzahl angegeben.',
      },
      next: 'Auf dem aktuellen Stand zu sein, heißt nicht, fertig zu sein.',
    },
    tracking: {
      closing: {
        headline: 'Mach beim nächsten Mal dort weiter, wo du aufgehört hast.',
        body: 'Füge Anime, die du ansiehst, zu einer Liste hinzu und halte jede Folge sowie erneutes Ansehen fest.',
      },
      head: {
        headline: 'Mit jeder Folge geht dein Fortschritt weiter.',
        lede: 'Erfasse jede Folge, die du ansiehst. Die neueste verfügbare Folge gesehen zu haben, alle ausgestrahlten Folgen gesehen zu haben und die ganze Reihe abgeschlossen zu haben, sind verschiedene Dinge. REZICS kennzeichnet sie getrennt.',
      },
      statuses: {
        eyebrow: 'Fünf Status',
        headline: 'Möchte ich sehen, Sehe ich gerade, Gesehen, Pausiert und Abgebrochen haben jeweils eine eigene Bedeutung.',
        lead: 'Dein privater Sehverlauf bleibt privat, solange du ihn nicht selbst teilst.',
        rows: [
          { title: 'Möchte ich sehen', body: 'Füge den Anime zu deiner Liste hinzu. Bei Neuigkeiten wirst du benachrichtigt.' },
          { title: 'Sehe ich gerade', body: 'Halte fest, bei welcher Folge du bist. Bei neuen Folgen erhältst du nach deinen Einstellungen eine Nachricht.' },
          { title: 'Gesehen', body: 'Das Werk ist abgeschlossen. Wiki+ zeigt standardmäßig die gesamte Handlung desselben Handlungsstrangs.' },
          { title: 'Pausiert', body: 'Du machst eine Pause und behältst deinen Fortschritt.' },
          { title: 'Abgebrochen', body: 'Du siehst den Anime nicht weiter. Dein Eintrag bleibt erhalten, falls du später zurückkehren möchtest.' },
        ],
      },
      seasons: {
        eyebrow: 'Staffelübergreifend',
        headline: 'Finde die nächste Folge in der Reihenfolge der Reihe.',
        tiles: [
          { title: 'Staffel 1', body: '12 von 12 Folgen gesehen. Weiter mit Staffel 2.' },
          { title: 'Staffel 2', body: '6 von 6 Folgen gesehen. Auf dem aktuellen Stand.' },
          { title: 'Special', body: 'Zusatzinhalt, zählt nicht für den Abschluss.' },
        ],
      },
      rewatch: {
        eyebrow: 'Erneut ansehen',
        headline: 'Jede Wiederholung wird separat erfasst.',
        lead: 'Wenn du den Anime ein zweites Mal von vorn ansiehst, wird ein neuer Eintrag angelegt. Das Abschlussdatum des ersten Durchgangs bleibt erhalten. Wenn du dich nur an das Jahr erinnerst, wird nur das Jahr angegeben.',
      },
      lists: {
        text: 'Deine Liste gehört dir und ist jederzeit übertragbar:',
        muted: 'Importiere Listen von anderen Orten. Status, Fortschritt und Bewertungen kannst du ebenfalls vollständig exportieren.',
      },
      next: 'Nach Folge acht geht es zur Diskussion über diese Folge.',
    },
    discussion: {
      closing: {
        headline: 'Halte deine Gedanken zur gerade gesehenen Folge in der Diskussion fest.',
        body: 'Tausche dich mit anderen Zuschauern derselben Folge aus. Spätere Handlung bleibt verborgen, bis du aufgeschlossen hast.',
      },
      head: {
        headline: 'Diskutiere die Folge, die du gerade gesehen hast.',
        lede: 'Diskussionen gehören zu den einzelnen Folgen. Du musst nicht in einem langen Thread zum ganzen Werk suchen. Zum Lesen musst du keiner Community beitreten.',
      },
      spoiler: {
        eyebrow: 'Spoilergrenze',
        headline: 'Deine Spoilergrenze folgt deinem Fortschritt.',
        body: 'Markierte Spoiler bleiben verborgen, bis du sie selbst öffnest. Das Öffnen betrifft nur deine Ansicht und zählt nicht als Spoiler-Abstimmung.',
        photo: {
          src: 'covered',
          alt: 'Ein rosafarbener Papierstreifen ist in mehrere Flächen gefaltet. Der hintere Abschnitt wird von einem kohlschwarzen Blatt mit leicht angehobener Ecke verdeckt.',
        },
      },
      position: {
        eyebrow: 'Dein Fortschritt',
        headline: 'Du bestimmst deine Spoilergrenze. Sie bleibt beim Seitenwechsel erhalten.',
        rows: [
          { title: 'Du entscheidest', body: 'Nach der Anmeldung zeigt Wiki+ standardmäßig Inhalte bis zur letzten Folge, die du gesehen hast. Du kannst eine andere Folge auswählen oder alles öffnen.' },
          { title: 'Spoilerfrei ohne Anmeldung', body: 'Nicht angemeldete Besucher sehen Inhalte nur bis zur ersten Enthüllung.' },
          { title: 'Bleibt beim Seitenwechsel erhalten', body: 'Beim Wechsel von Diskussionen zu Rezensionen und Wiki+ bleiben deine gewählte Version und Spoilergrenze erhalten.' },
        ],
      },
      conversations: {
        eyebrow: 'Gespräche',
        headline: 'Drei Arten von Gesprächen, getrennt voneinander.',
        lead: 'Jeder Beitrag zeigt, zu welcher Art Gespräch er gehört.',
        rows: [
          { title: 'Community-Diskussion', body: 'Über die Handlung und Figuren sprechen und über die nächste Folge spekulieren.' },
          { title: 'Antworten auf Rezensionen', body: 'Antworten auf eine Rezension bleiben bei dieser Rezension.' },
          { title: 'Datenkorrekturen', body: 'Falsche Sendedaten oder Sprecherangaben werden unter dem Korrekturvorschlag diskutiert, mit Quellenangabe.' },
        ],
      },
      spaces: {
        eyebrow: 'Community',
        headline: 'Communities tauschen sich aus und können eigene Websites einrichten.',
        lead: 'Infoboxen in einer Zone verwenden dieselben Fakten wie die Werkseite.',
        tiles: [
          { title: 'Community', body: 'Eine Community mit Mitgliedern, Regeln und Moderation' },
          { title: 'Zone', body: 'Die Website der Community mit Figurenseiten, Episodenführern, Zeitleisten und Beziehungsdiagrammen. Die Community bestimmt die Adresse.' },
        ],
      },
      unseen: { text: 'Was du noch nicht gesehen hast,', muted: 'musst du nicht vorher wissen.' },
      next: 'Geschichte und Produktion lassen sich getrennt bewerten.',
    },
    ratings: {
      closing: {
        headline: 'Bewerte Geschichte und Produktion getrennt.',
        body: 'Bewerte eine Folge oder den gesamten Anime, schreibe eine Rezension und stelle sehenswerte Werke in einer Liste zusammen.',
      },
      head: {
        headline: 'Die Frage steht neben der Bewertung.',
        lede: 'Bei demselben Anime kannst du die Geschichte oder die Zeichnungen einer Folge bewerten. REZICS zeigt Frage, Skala, Anzahl und bewertende Gruppe neben der Bewertung. Unterschiedliche Fragen werden getrennt ausgewertet.',
      },
      anatomy: {
        eyebrow: 'Beispielbewertung',
        headline: '4,2 von 5 Punkten.',
        rows: [
          { title: 'Frage', body: 'Die Zeichnungen in Folge acht. Bewertungen einzelner Folgen und des gesamten Anime werden getrennt berechnet.' },
          { title: 'Skala', body: 'Fünferskala, Durchschnitt 4,15, angezeigt als 4,2.' },
          { title: 'Anzahl', body: '20 Bewertungen. Bei zu wenigen Bewertungen werden nur Anzahl und Verteilung angezeigt, kein Durchschnitt.' },
          { title: 'Verteilung', body: '10 Bewertungen mit fünf Punkten, sechs mit vier, zwei mit drei, eine mit zwei und eine mit einem Punkt.' },
          { title: 'Gruppe', body: 'Eine Community. Die ganze Plattform und andere Communities haben jeweils eigene Bewertungen, zwischen denen du wechseln und die du vergleichen kannst.' },
        ],
      },
      episodes: {
        text: 'Eine Folge bleibt eine Folge,',
        muted: 'das Gesamtwerk bleibt das Gesamtwerk.',
        note: 'Jede Folge hat ihre eigene Bewertung. Die Bewertung des Gesamtwerks stammt nur von Personen, die das Gesamtwerk bewertet haben. Zusammengefasste Bewertungen nennen ihre Methode und die Zahl der berücksichtigten Folgen.',
      },
      targets: {
        eyebrow: 'Rezensionen',
        headline: 'Rezensionen nennen den bewerteten Teil.',
        lead: 'Für eine Rezension brauchst du keine Bewertung.',
        rows: [
          { title: 'Geschichte', body: 'Handlung, Figuren und Ende.' },
          { title: 'Produktion', body: 'Zeichnungen, Musik und Regie.' },
          { title: 'Übersetzung', body: 'Untertitel einer Sprachfassung, mit Angabe der Version.' },
          { title: 'Diese Folge', body: 'Eine Rezension zu einer einzelnen Folge bleibt bei dieser Folge.' },
          { title: 'Eine Figur in einer Folge', body: '„Wie gut war diese Figur in dieser Folge?“ ist eine eigene Frage mit einer separaten Bewertung.' },
        ],
      },
      lists: {
        eyebrow: 'Liste',
        headline: 'Ordne Listen nach deinen Wünschen.',
        lead: 'Eine Liste kann Anime, Romanvorlagen, Manga und Spiele enthalten. Du kannst jeden Eintrag kommentieren, die Reihenfolge bestimmen und die Liste exportieren. Folge den Listen anderer und erhalte eine Nachricht, wenn etwas hinzugefügt wird.',
        tiles: ['Reihenfolge zum Einstieg', 'Diese Staffel sehe ich gerade', 'Am Wochenende am Stück ansehen', 'Vorlage und Anime im Vergleich'],
      },
      next: 'Regie, Produktionsstudios und Sprecher führen jeweils zu ihren Werken.',
    },
    credits: {
      closing: {
        headline: 'Finde über einen Namen das nächste Werk.',
        body: 'Lerne die Menschen hinter den Werken über Credits für Regie, Animation und Sprechen kennen.',
      },
      head: {
        headline: 'Namen im Abspann führen zu den Werken.',
        lede: 'Regisseure, Drehbuchautoren, Animationsregisseure, Studios und Sprecher haben auf REZICS jeweils eine Identität. Öffne einen Namen, um alle Werke und jeweiligen Beiträge zu sehen.',
      },
      record: {
        eyebrow: 'Ein Credit',
        headline: 'Ein Credit nennt fünf Angaben.',
        rows: [
          { title: 'Wer', body: 'Eine Person oder ein Unternehmen mit Verweis auf die eigene Seite.' },
          { title: 'Rolle', body: 'Regie, Drehbuch, Zeichnungen oder Sprechen. Rollenbezeichnungen sind in mehreren Sprachen verfügbar.' },
          { title: 'Werk', body: 'Das Werk und ob es sich um das Original oder eine synchronisierte Sprachfassung handelt.' },
          { title: 'Figur', body: 'Ein Sprecherc­redit verknüpft Sprecher, Figur und Werk in einem Eintrag.' },
          { title: 'Anzeigename', body: 'Erfasst wird der damalige Name. Auch nach einer Namensänderung bleibt es dieselbe Person.' },
        ],
      },
      voice: {
        eyebrow: 'Sprecher',
        headline: 'Ein Sprecher, eine Identität.',
        body: 'Figuren, denen die Person in Anime, Spielen und Visual Novels ihre Stimme geliehen hat, stehen auf derselben Seite. Folge ihr und erfahre von neuen Werken.',
        photo: {
          src: 'threads',
          alt: 'Ein rosafarbenes Blatt hat eine Reihe kleiner Löcher am Rand. Drei Baumwollfäden führen daraus zu kleinen blauen, grauvioletten und rosafarbenen Papierstücken.',
        },
      },
      studio: {
        eyebrow: 'Produktionsstudio',
        headline: 'Ein Studio, eine Zeitleiste seiner Werke.',
        lead: 'Ein Unternehmen hat wie eine Person eine eigene Identität, unabhängig von Konten oder Communities. Seine Anime sind nach Jahr geordnet.',
      },
      next: 'Über die Beziehungen findest du heraus, auf welcher Vorlage der Anime beruht.',
    },
    adaptations: {
      closing: {
        headline: 'Finde nach deinem Lieblingsanime die Vorlage.',
        body: 'Finde über Adaptionen und Ableger Romane, Manga und Spiele und halte den Fortschritt jeweils separat fest.',
      },
      head: {
        headline: 'Jede Adaption verweist auf ihre Vorlage.',
        lede: 'Anime, Roman- oder Manga-Vorlage, Fortsetzungen, Ableger und Spieladaptionen sind auf REZICS jeweils eigene Werke. Benannte Beziehungen verknüpfen sie. Von jedem Werk aus findest du die anderen.',
      },
      example: {
        eyebrow: 'Zum Beispiel',
        headline: 'Eine Geschichte in verschiedenen Formen.',
        body: 'Zum Beispiel A Certain Magical Index: Die Light Novel von Kazuma Kamachi wurde als Manga, in drei Anime-Staffeln und als Film adaptiert. Der Ableger A Certain Scientific Railgun hat einen eigenen Manga und Anime. Auf REZICS ist jedes Werk eigenständig und seine Beziehung als Adaption, Fortsetzung oder Ableger gekennzeichnet.',
        photo: {
          src: 'sources',
          alt: 'Ein dunkelgrünes Hochformatblatt, ein kleineres kohlschwarzes Blatt und ein rosafarbenes Querformatblatt liegen versetzt übereinander. Daneben liegt ein kleines blaues Blatt.',
        },
      },
      family: {
        eyebrow: 'Beziehungsdiagramm',
        headline: 'Jedes Werk nennt seine Beziehung zur Vorlage.',
        lead: 'Auch unbestätigte Beziehungen werden angezeigt und als offen gekennzeichnet.',
        tiles: [
          { kind: 'books', relation: 'Vorlage', name: 'Romanvorlage' },
          { kind: 'manga', relation: 'Adaptiert aus dem Original', name: 'Manga-Adaption' },
          { kind: 'anime', relation: 'Adaptiert aus dem Original', name: 'Anime, Staffel 1' },
          { kind: 'anime', relation: 'Fortsetzung von Staffel 1', name: 'Anime, Staffel 2' },
          { kind: 'books', relation: 'Ableger', name: 'Ablegerroman' },
          { kind: 'games', relation: 'Adaptiert aus dem Anime', name: 'Spieladaption' },
          { kind: 'visual-novels', relation: 'Adaptiert aus dem Original', name: 'Visual-Novel-Adaption' },
          { kind: null, relation: 'Beziehung ungeklärt', name: 'Weitere Adaption' },
        ],
      },
      scoped: {
        eyebrow: 'Getrennt erfasst',
        headline: 'Anime und Vorlage werden getrennt erfasst.',
        lead: 'Wenn du den Anime abschließt, wird der Lesefortschritt der Romanvorlage nicht als abgeschlossen markiert. Eine Figur kann im Original überleben und im Anime sterben. Beide Angaben bleiben erhalten und nennen ihr Werk und die Folge oder das Kapitel, in dem sie enthüllt werden.',
      },
      relations: {
        eyebrow: 'Beziehung',
        headline: 'Beziehungen haben Namen und gelten in beide Richtungen.',
        lead: 'Jede Beziehung hat Namen in verschiedenen Sprachen. Auf einer Seite steht „adaptiert aus“, auf der anderen „adaptiert als“.',
        rows: [
          { title: 'Adaption', body: 'Ein Werk wird in eine andere Form übertragen, zum Beispiel ein Roman als Anime.' },
          { title: 'Fortsetzung', body: 'Die Geschichte des Vorgängerwerks wird fortgesetzt, zum Beispiel in einer zweiten Staffel.' },
          { title: 'Reihe', body: 'Werke derselben Reihe behalten eigene Identitäten.' },
          { title: 'Remake', body: 'Eine neu erzählte Fassung ist ein eigenes Werk und mit dem Original verknüpft.' },
          { title: 'Ableger', body: 'Eine weitere Geschichte aus demselben Universum.' },
        ],
      },
      orders: {
        text: 'Ausstrahlungsreihenfolge und Seh-Reihenfolge',
        muted: 'können verschieden sein.',
        note: 'Werke sind nach ihrem Veröffentlichungsdatum geordnet. Für Einsteiger kannst du eine eigene Seh-Reihenfolge mit Begründung erstellen.',
      },
      next: 'Viele Anime-Geschichten beginnen als Manga.'
    },
  },
};

export default site;
