// 創作與發行 /engine/create/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md).
import type { MiniSite } from '../schema';
import type { ModuleFamilyStrings, ModuleSection, ModuleStatement } from './community';

export interface CreateStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  writing: ModuleSection;
  world: ModuleSection;
  chapters: ModuleSection;
  editions: ModuleSection & {
    specimen: {
      label: string;
      items: { title: string; value: string; unit: string; note: string }[];
      caption: string;
    };
  };
  copyright: ModuleStatement;
  rights: ModuleSection;
  sell: ModuleSection;
  /** The statement of account: its lines and what fills each, never amounts or shares. */
  account: ModuleSection & {
    rows: { label: string; detail: string; kind: 'paid' | 'deduct' | 'net' | 'share' }[];
    deduct: string;
    caption: string;
  };
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CreateStrings = {
  contentsLabel: 'Auf dieser Seite',
  hero: {
    headline: 'Autorenschaft, Ausgaben und Rechte sind klar festgehalten.',
    lede: 'Hier schreibst du, planst Veröffentlichungen und veröffentlichst Kapitel. Jede Ausgabe wird archiviert, Übersetzungen und Lizenzen werden einzeln erfasst. Verkaufst du Bücher und Spiele direkt, zeigt die Abrechnung jeden Abzug.',
    imageAlt: 'Zwei Papierstapel sind an einer Seite mit dunkelgrauen Papierstreifen gebunden. An den Seiten zeigen sich mehrere Farbschichten.',
  },
  writing: {
    label: 'Schreiben',
    headline: 'Jede gespeicherte Fassung bleibt auffindbar.',
    lead: 'Beim Schreiben öffnet sich die vollständige Werkzeugleiste. Für Antworten in Diskussionen bleiben die wichtigsten Formatierungen verfügbar. Auf dem Smartphone sitzt die Leiste über der Tastatur. Sie bleibt beim Tippen geöffnet, auch bei langen Kapiteln.',
    facts: [
      { title: 'Jedes Speichern ist eine neue Fassung', body: 'Jeder Speichervorgang hält eine genaue Fassung fest. Auch wenn du ein Kapitel leerst, wird eine leere Fassung gespeichert. Leere Kapitel lassen sich nicht veröffentlichen.' },
      { title: 'Veröffentlichen nach deiner Zeitzone', body: 'Legst du Freitag, 20 Uhr, fest, erscheint das Kapitel zu dieser Zeit in deiner Zeitzone. Der Zeitplan läuft auf dem Server, auch wenn dein Computer ausgeschaltet ist.' },
      { title: 'Klare Rechte für Mitwirkende', body: 'Wenn du andere zum Schreiben einlädst, kannst du ihnen einzeln erlauben, zu lesen, Vorschläge zu machen, direkt zu bearbeiten oder zu veröffentlichen. Bearbeiten zu dürfen bedeutet nicht automatisch, veröffentlichen zu dürfen. Rückmeldungen findest du in einem gemeinsamen Posteingang.' },
      { title: 'Dein gesamtes Werk bleibt übertragbar', body: 'Du kannst dein Werk vollständig sichern und in einem Format exportieren, das alle Formatierungen erhält. Reiner Text ist eine zusätzliche, vereinfachte Option. Ältere Text- und Markdown-Manuskripte kannst du importieren und weiterschreiben.' },
      { title: 'Anmerkungen und Hervorhebungen', body: 'Im Editor kannst du Anmerkungen wie Zhuyin oder Kana sowie Hervorhebungen ergänzen. Werke auf Japanisch unterstützen vertikalen Text.' },
    ],
  },
  world: {
    label: 'Weltenhandbuch',
    headline: 'Neben deinem Manuskript entsteht deine eigene Welt.',
    lead: 'Figuren, Orte, Gruppen, Ereignisse, Gegenstände und Hintergründe haben eigene Vorlagen, die du versionieren kannst. Sie stehen neben deinem Manuskript und sind nur für dich sichtbar.',
    facts: [
      { title: 'Karte', body: 'Markiere Orte auf einer selbst gezeichneten Karte.' },
      { title: 'Beziehungsdiagramm', body: 'Verbinde die Beziehungen zwischen Figuren in einem Diagramm.' },
      { title: 'Zeitleiste', body: 'Auch Ereignisse mit ungenauem Datum lassen sich in die Zeitleiste einordnen. Zu jeder Grafik gibt es eine Liste, die du Eintrag für Eintrag lesen kannst.' },
      { title: 'Einzelne Seiten veröffentlichen', body: 'Wenn du etwas teilen möchtest, veröffentliche ausgewählte Seiten im Wiki+ des Werks. Private Überarbeitungen bleiben für Leser unsichtbar.' },
      { title: 'Hilfe für den Zusammenhang', body: 'Der gewählte Assistent markiert nur Widersprüche zwischen deinen Notizen und dem Manuskript. Die Kapitel schreibst weiterhin du.' },
      { title: 'Kein Abonnement nötig', body: 'Für das Weltenhandbuch und vollständige Exporte, die du wieder importieren kannst, brauchst du kein kostenpflichtiges Abonnement.' },
    ],
  },
  chapters: {
    label: 'Kapitel',
    headline: 'Ein Kapitel ist ein Beitrag in einem Buch.',
    lead: 'Ein Kapitel wird nicht zu einem eigenen Werk. Das Buch ist das Werk. Bewertungen, Folgen und Autorennennung gehören zum Buch. Jedes Kapitel ist ein Beitrag im Inhaltsverzeichnis.',
    facts: [
      { title: 'Ein Kapitel an zwei Stellen', body: 'Derselbe Kapitelbeitrag kann sowohl in einer Fortsetzung als auch in einer Sammlung stehen. Text und Kommentare werden nur einmal gespeichert. Der Lesefortschritt wird für jede Stelle separat erfasst.' },
      { title: 'Auch Bilder oder Umfragen allein', body: 'Ein Beitrag mit nur Bildern oder einer Umfrage lässt sich ohne zusätzlichen Text veröffentlichen.' },
      { title: 'Anmerkung des Autors zählt nicht zum Text', body: 'Die Anmerkung des Autors am Kapitelende ist ein Zusatz zum Beitrag. Sie zählt nicht zur Wortzahl, wird beim Übersetzen ausgelassen und nicht in die offizielle Ausgabe aufgenommen.' },
      { title: 'Mit dem nächsten Kapitel weiterlesen', body: 'Der Bereich „Weiterlesen“ auf der Startseite öffnet direkt das nächste ungelesene Kapitel. Die Diskussion bleibt an der Stelle stehen, bis zu der du gelesen hast. Spoiler danach bleiben verborgen.' },
      { title: 'Kommentare bleiben am Original', body: 'Kommentare und Zitate verweisen auf die damalige Fassung und den jeweiligen Absatz. Wenn der Autor den Text später ändert, bleiben die Kommentare an derselben Stelle.' },
    ],
  },
  editions: {
    label: 'Ausgabe',
    specimen: {
      label: 'Beispielausgaben',
      items: [
        { title: 'Hauptfassung', value: '13', unit: 'Kapitel', note: 'Wird mit neuen Kapiteln fortgesetzt' },
        { title: 'Archivierte erste Ausgabe', value: '12', unit: 'Kapitel', note: 'Enthält weiterhin den damaligen Veröffentlichungsstand' },
      ],
      caption: 'Dasselbe Werk: Kapitel 13 kommt zur Hauptfassung hinzu, während die erste Ausgabe weiterhin nur die ersten zwölf Kapitel enthält.',
    },
    headline: 'Veröffentlichte Ausgaben werden archiviert. Spätere Änderungen erhalten einen eigenen Eintrag.',
    lead: 'Jedes Werk hat eine fortlaufend aktualisierte Hauptfassung, zu der neue Kapitel und Sprachen hinzukommen. Eine offizielle Ausgabe ist ein archivierter Stand dieser Hauptfassung und hält fest, was damals tatsächlich veröffentlicht wurde. Spätere Übersetzungen und Ergänzungen erhalten einen eigenen Eintrag mit Verweis auf ihre Quelle.',
    facts: [
      { title: 'Hauptfassung', body: 'Jedes Werk hat genau eine Hauptfassung, von der alle Leser ausgehen. Neue Kapitel und Sprachen kommen hier hinzu, ohne die Identität des Werks aufzuteilen.' },
      { title: 'Online-Fortsetzung', body: 'Auch eine Online-Fortsetzung gilt als Veröffentlichung. Da sich ihr Inhalt ändern kann, werden die ursprüngliche URL und datierte Momentaufnahmen festgehalten und jeweils archiviert.' },
      { title: 'Feste Ausgabe', body: 'Wähle veröffentlichte Inhalte aus und archiviere sie als feste Ausgabe. Später hinzugefügte Kapitel erscheinen nicht darin.' },
      { title: 'Eine Ausgabe, mehrere Vertriebswege', body: 'Eine Ausgabe kann in mehreren Shops und auf mehreren Websites erhältlich sein. Das bleibt ein einziger Veröffentlichungseintrag. Nicht autorisierte Kopien werden separat erfasst und nie mit der offiziellen Ausgabe zusammengeführt.' },
      { title: 'Übersetzung', body: 'Eine Übersetzung ist eine eigene Inhaltsfassung. Sie nennt die Revision oder Ausgabe, auf der sie beruht. Ist die Quelle unklar, wird sie als ungeklärt markiert, statt sie zu erraten.' },
      {
        title: 'Übersetzungen von Lesern',
        body: 'Wenn Leser ein Online-Werk übersetzen, wird die Übersetzung als virtuelle Ausgabe mit ihrem Umfang erfasst, etwa „die ersten 20 von 100 Kapiteln“ (Beispiel). Eine virtuelle Ausgabe dient nur der Ordnung auf REZICS. Sie bedeutet nicht, dass diese Fassung veröffentlicht wurde.',
      },
    ],
    note: 'Jede Veröffentlichung nennt ihren Status: offiziell, inoffiziell, virtuell, eingestellt oder abgesagt. Ändert sich der Status, bleibt der Eintrag bestehen.',
  },
  copyright: {
    statement: 'Öffentlich lesbar zu sein,',
    sub: 'bedeutet nicht, dass andere den Inhalt weiterverbreiten, verkaufen, übersetzen oder zum Trainieren von KI verwenden dürfen.',
  },
  rights: {
    label: 'Übersetzungen und Rechte',
    headline: 'Übersetzungen nennen ihre Übersetzer. Rechte werden einzeln festgehalten.',
    lead: 'Wer übersetzen darf, ob eine Übersetzung öffentlich sein darf und wie viel KI ein Werk nutzt, wird nicht stillschweigend angenommen. Jede Erklärung nennt Person und Zeitpunkt.',
    facts: [
      {
        title: 'Die Nutzungslizenz ist klar begrenzt',
        body: 'Das Urheberrecht bleibt bei dir. Für Inhalte auf REZICS erlaubst du REZICS nur, sie für den von dir genutzten Dienst zu speichern, zu vervielfältigen, zu übertragen, anzuzeigen, zu verarbeiten und zu konvertieren. Diese Lizenz umfasst weder Werbung noch den Verkauf privater Inhalte, neue kommerzielle Ausgaben oder uneingeschränktes KI-Training.',
      },
      { title: 'Jede Übersetzung mit eigener Urhebernennung', body: 'Ein Werk kann mehrere Übersetzungen haben. Leser und Communities können sie jeweils auswählen; jede Übersetzung nennt ihren Übersetzer. Autoren können verhindern, dass eine Übersetzung auf der Originalseite verlinkt wird, und eine Rechtebeschwerde einreichen.' },
      {
        title: 'Öffentlichkeit braucht eine Grundlage',
        body: 'Übersetzungen von Lesern sind standardmäßig privat. Sie dürfen nur aus einem dokumentierten Grund öffentlich werden: Das Original ist gemeinfrei, steht unter einer offenen Lizenz, die Übersetzungen erlaubt, der Autor hat zugestimmt oder sie ausdrücklich erlaubt. Eine Abstimmung der Community kann eine Übersetzung nicht freigeben.',
      },
      {
        title: 'Fortschritt Absatz für Absatz',
        body: 'Jeder übersetzte Abschnitt hat einen Status: Entwurf, übersetzt, geprüft oder fertig. Ändert sich ein Abschnitt im Original, wird die Übersetzung als „Aktualisierung nötig“ markiert. Sie bleibt unverändert und wird nicht einem anderen Satz zugeordnet.',
      },
      {
        title: 'Lizenzerklärung',
        body: 'Jede Lizenzerklärung nennt den lizenzierten Inhalt, die Lizenz und ihre Version, die erklärende Person, den Zeitpunkt und den Umfang. Unbekanntes wird als unbekannt angegeben. Die Erklärung bestätigt keine Lizenz im rechtlichen Sinn. Autoren können auch eine allgemeine Erlaubnis veröffentlichen, etwa für Übersetzungen. Wird sie zurückgezogen, bleibt die ursprüngliche Erklärung unverändert.',
      },
      {
        title: 'Erklärung zur KI-Nutzung',
        body: 'Für Text, Bilder und Übersetzungen wird einzeln angegeben, ob KI nicht, unterstützend oder generierend beteiligt war. Eine menschliche Prüfung wird separat vermerkt, damit Leser nach ihren Wünschen filtern können.',
      },
    ],
  },
  sell: {
    label: 'Veröffentlichung',
    headline: 'Bücher und Spiele direkt an Leser verkaufen.',
    lead: 'Autoren mit einem Vertrag mit REZICS können Bücher und Spiele direkt an Leser verkaufen. Bücher werden als EPUB oder PDF angeboten, Spiele und Visual Novels als herunterladbare Dateien. Ohne DRM und ohne Launcher.',
    facts: [
      { title: 'Vor dem Kauf alles im Blick', body: 'Vor dem Bezahlen werden Ausgabe, Sprache, Systemanforderungen, Preis, Steuern, Verkäufer, Nutzungslizenz und Rückgabebedingungen angezeigt.' },
      { title: 'Probelesen, aktualisieren, erneut herunterladen', body: 'Leser können zuerst eine Leseprobe ansehen. Aktualisierungen und erneute Downloads nach dem Kauf richten sich nach den Kaufbedingungen.' },
      { title: 'Auch nach dem Entfernen verfügbar', body: 'Wird ein Werk allgemein entfernt oder endet der Vertrag, behalten Käufer ihre Lizenz gemäß den ursprünglichen Bedingungen und dem geltenden Recht.' },
      { title: 'Privatsphäre der Leser', body: 'Du erhältst weder den Lesefortschritt noch die Bibliothek der Käufer. Du bekommst nur zusammengefasste Daten für die Abrechnung.' },
      { title: 'Der Vertrag erlaubt nur den Vertrieb', body: 'Der Vertriebsvertrag erlaubt REZICS nur, Inhalte zu hosten, zu konvertieren, zu bewerben und zu verkaufen. Für Übersetzungen, Bearbeitungen, neue Ausgaben und KI-Training ist deine zusätzliche Zustimmung nötig.' },
      { title: 'Verkauf nur für vertraglich gebundene Autoren', body: 'Dies ist kein offener Marktplatz. Explizite sexuelle Inhalte sowie Werke mit der Einstufung R18 oder R18G werden nicht verkauft.' },
    ],
  },
  account: {
    label: 'Abrechnung',
    headline: 'Jeder Betrag ist einzeln aufgeschlüsselt.',
    lead: 'Der Nettoerlös entspricht den tatsächlich eingegangenen Zahlungen abzüglich eingezogener Steuern, vereinbarter Zahlungs- und Transaktionsgebühren sowie Rückerstattungen, Rückbuchungen und abgelehnten Zahlungen. Betriebskosten wie Server, Gehälter und Marketing sowie die Einkommensteuer von REZICS werden nicht abgezogen.',
    rows: [
      { label: 'Zahlung des Lesers', detail: 'Vom Leser gezahlter Betrag einschließlich Steuern', kind: 'paid' },
      { label: 'Steuern', detail: 'Gesetzlich eingezogene und abgeführte Steuern', kind: 'deduct' },
      { label: 'Zahlungs- und Transaktionsgebühren', detail: 'Belegte Zahlungsgebühren sowie vertraglich vereinbarte Wechselkurs- und Streitkosten', kind: 'deduct' },
      { label: 'Rückerstattungen und strittige Zahlungen', detail: 'Rückerstattete, rückgängig gemachte oder zurückgebuchte Zahlungen', kind: 'deduct' },
      { label: 'Nettoerlös', detail: 'Zahlungen abzüglich der vereinbarten Transaktionskosten', kind: 'net' },
      { label: 'Anteil des Autors', detail: 'Wird gemäß Vertrag an dich ausgezahlt', kind: 'share' },
      { label: 'Anteil von REZICS', detail: 'Wird gemäß Vertrag von der Plattform einbehalten', kind: 'share' },
    ],
    deduct: 'Abzüge',
    caption: 'Beispielabrechnung: Jeder Abzug steht in einer eigenen Zeile und wird nur einmal berechnet. Die Beträge werden für jede Transaktion einzeln ermittelt.',
  },
  family: {
    closing: 'Du schreibst. REZICS hält jede Ausgabe und jede Abrechnung fest.',
  },
};

export default {
  id: 'create',
  base: '/engine/create/',
  name: 'Erstellen und Veröffentlichen',
  theme: { module: 'create' },
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'Erstellen und Veröffentlichen: Manuskripte, Ausgaben und Abrechnung',
        description:
          'Auf REZICS schreibst du, planst Veröffentlichungen und veröffentlichst Kapitel. Jeder Speichervorgang hält eine Fassung fest. Ausgaben werden archiviert, Übersetzungen ihren Übersetzern zugeordnet und Rechte einzeln erklärt. Du kannst auch Bücher und Spiele direkt verkaufen; die Abrechnung führt jeden Abzug auf.',
      },
    },
  ],
  strings,
} satisfies MiniSite<CreateStrings>;
