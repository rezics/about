// 信任 /engine/trust/: copy for the v3 module page (plan in src/sites/community/SITE.md). Every
// statement restates docs/contracts, docs/operations or docs/legal in rezics-next (facts.md).
import type { MiniSite } from '../schema';
import type { Figure, ModuleFamilyStrings, ModuleSection } from './community';

export interface TrustStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  marks: ModuleSection;
  imports: ModuleSection;
  humans: ModuleSection & { trail: { label: string; stages: string[] } };
  /** Numbers written into the policies: a numeral, its unit and one sentence. */
  numbers: ModuleSection & { figures: Figure[] };
  views: ModuleSection;
  privacy: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: TrustStrings = {
  contentsLabel: 'Auf dieser Seite',
  hero: {
    headline: 'Wer entscheidet und auf welcher Grundlage, ist nachvollziehbar.',
    lede: 'Fakten nennen ihre Quellen, Lizenzen ihre Bedingungen und Moderationsentscheidungen ihre Regeln und Belege. Prüfungen, Streitfälle und Einsprüche werden einzeln ergänzt. Neue Einträge überschreiben keine früheren.',
    imageAlt: 'Fünf graue, ockerfarbene und hellblaue Papierblätter liegen versetzt übereinander. An ihren Rändern stehen leere Papieretiketten hervor.',
  },
  marks: {
    label: 'Kennzeichnungen',
    headline: 'Neue Bewertungen kommen hinzu. Ältere bleiben erhalten.',
    lead: 'Ein Datensatz hält Quelle, Prüfung und Einwände fest: woher er stammt, ob er geprüft wurde und ob jemand ihn infrage stellt. Eine geänderte Einschätzung erhält einen neuen Eintrag. Die frühere bleibt im Verlauf erhalten.',
    facts: [
      {
        title: 'Quelle',
        body: 'Von der Plattform importierte Fakten und Texte nennen ihre Quelle und Lizenz und verweisen auf das Original. Veröffentlicht wird nur, was die Lizenz erlaubt. Bei unklarer Lizenz werden nur Fakten übernommen. Rezensionen, Blogs und Kommentare von Nutzern anderer Websites werden nie kopiert.',
      },
      { title: 'Ungeprüft', body: 'Neu angelegte Einträge sind zunächst öffentlich, aber als ungeprüft gekennzeichnet. Jedes Feld nennt seine Quelle. Vor der Prüfung erscheinen sie nicht in vertrauenswürdigen Exporten und Empfehlungen.' },
      {
        title: 'Geprüft und trotzdem umstritten',
        body: 'Die Prüfung hält fest, wer sie vorgenommen hat, auf Grundlage welcher Belege und nach welcher Fassung der Regeln. Eine Prüfung schließt Einwände nicht aus: Dasselbe Feld kann zugleich als geprüft und umstritten gekennzeichnet sein. Ein Einwand bleibt offen, bis er bewertet wurde. Fehlende oder veraltete Angaben gelten nicht als Widerlegung.',
      },
      {
        title: 'Erklärung zur KI-Nutzung',
        body: 'Für Text, Bilder und Übersetzungen wird angegeben, ob KI nicht, unterstützend oder generierend beteiligt war. Eine menschliche Prüfung wird separat vermerkt. „Geprüft“ ändert „generiert“ nicht zu „ohne KI“. Eine fehlende Erklärung gilt ebenfalls nicht als „ohne KI“.',
      },
      { title: 'Nicht bewertet', body: 'Inhalte ohne Altersfreigabe werden immer als „Nicht bewertet“ gekennzeichnet und nie als für alle Altersgruppen geeignet eingestuft.' },
      {
        title: 'Automatisierte Identität',
        body: 'KI-Agenten müssen sich als automatisiert kennzeichnen und den verantwortlichen Betreiber nennen. Sie handeln nur im Rahmen ihrer Berechtigungen und dürfen keine Rezensionen, Abstimmungen oder andere Beteiligung vortäuschen. Ihre Ergebnisse halten Eingaben und Methoden fest. Sie können sich nicht selbst autorisieren und ihre Ergebnisse nicht als von Menschen geprüft kennzeichnen.',
      },
    ],
  },
  imports: {
    label: 'Importe',
    headline: 'Für von der Plattform importierte Daten ist die Plattform verantwortlich.',
    lead: 'REZICS veröffentlicht selbst importierte Inhalte nur im Umfang der Quelllizenz. Für von Nutzern eingegebene Inhalte sind die Nutzer verantwortlich. Das Werkzeug erinnert sie daran, Quellen anzugeben; die Plattform bewahrt die angegebenen Quellen auf.',
    facts: [
      { title: 'Die Lizenz bleibt beim Text', body: 'Eine Kurzbeschreibung einer offenen Lizenz mit Weitergabepflicht behält diese Lizenz auch nach einer Bearbeitung oder Übersetzung. Sie wird beim Lesen und Export mitgeführt.' },
      { title: 'Das Cover gehört dem Rechteinhaber', body: 'Bei importierten Covern werden der Rechteinhaber und die Quelle genannt. Ein Cover wird nur als Cover verwendet, nicht als Banner oder Vorschaubild.' },
      { title: 'Ohne Cover bleibt die Seite nicht leer', body: 'Bei Werken ohne Cover wird ein Textcover aus Titel und Autor angezeigt.' },
      { title: 'Wurde die Lizenz bewertet?', body: 'Werk- und Faktseiten nennen die geltende Lizenz und die erforderlichen Hinweise. Noch nicht bewertete Inhalte werden als „Nicht bewertet“ gekennzeichnet.' },
      { title: 'Zitate in Wiki+ sind begrenzt', body: 'Für Zitate aus Originaltexten in Wiki+ gelten Obergrenzen pro Abschnitt und Quelle. Sie werden über Konten, Übersetzungen und Zonen hinweg zusammengerechnet.' },
      { title: 'Jeder Wiki+-Fakt nennt seine Fundstelle', body: 'Jeder von einem KI-Agenten zusammengestellte Fakt in Wiki+ nennt die Kapitelstelle und ein kurzes Zitat. Leser sehen ihn erst nach menschlicher Prüfung.' },
    ],
  },
  humans: {
    label: 'Einsprüche und Entscheidungen',
    trail: {
      label: 'Beispiel: Coverentfernung und Einspruch',
      stages: ['Ursprüngliche Entscheidung', 'Einspruch', 'Neue Entscheidung'],
    },
    headline: 'Menschen treffen die endgültige Entscheidung.',
    lead: 'Meldungen und Rechtebeschwerden sind Vorwürfe, keine Schlussfolgerungen. Menschen entscheiden, ob ein gewöhnliches Streitverfahren oder das gesetzliche Verfahren für Mitteilungen und Gegendarstellungen gilt. Entscheidungen nennen die zugrunde liegenden Regeln und Belege und gelten nur für die beanstandeten Inhalte und Verwendungen.',
    facts: [
      {
        title: 'Nur der beanstandete Teil wird entfernt',
        body: 'Beispiel: Wird ein Cover entfernt, erscheint an seiner Stelle ein Textcover. Die übrigen Werkdaten bleiben erhalten. Auch spätere Datenaktualisierungen bringen das Cover nicht zurück.',
      },
      { title: 'Einsprüche werden von Menschen geprüft', body: 'Wer mit einer Entscheidung nicht einverstanden ist, kann Einspruch einlegen. Wenn es die Kapazitäten erlauben, prüft eine andere Person den Einspruch. Andernfalls erfährst du, dass dieselbe Person ihn erneut prüft.' },
      { title: 'Eine geänderte Entscheidung ist ein neuer Eintrag', body: 'Eine geänderte Entscheidung erhält einen neuen Eintrag. Der ursprüngliche bleibt erhalten.' },
      {
        title: 'KI unterstützt nur',
        body: 'Der Wert eines KI-Detektors ist nie allein ausschlaggebend. Wird KI bei einer Prüfung eingesetzt, werden Methode, Eingaben und Einstellungen dokumentiert. Bei unklarem Ergebnis entscheidet ein Mensch oder der Fall bleibt offen.',
      },
      { title: 'Besonders sensible Belege', body: 'Sensible Belege zu Kinderschutz oder privaten Bildern werden niemals an allgemeine generative KI übermittelt.' },
    ],
  },
  numbers: {
    label: 'Fristen',
    headline: 'Zahlen aus den Richtlinien.',
    lead: 'Jede Zahl unten stammt aus den Richtlinien von REZICS.',
    figures: [
      {
        value: '48',
        unit: 'Stunden',
        body: 'Nach Eingang einer gültigen Entfernungsanfrage werden ohne Zustimmung verbreitete private Bilder innerhalb von 48 Stunden entfernt. Wir bemühen uns zugleich, gleiche Kopien auf der Plattform zu finden und zu entfernen. Ein Einspruch setzt diese Frist nicht aus.',
      },
      {
        value: '10 bis 14',
        unit: 'Werktage',
        body: 'Nach Eingang einer gültigen Gegendarstellung zum Urheberrecht wird der Inhalt zwischen dem 10. und 14. Werktag wiederhergestellt, sofern keine Mitteilung eingeht, dass der Rechteinhaber Klage erhoben hat. Bei anderen Sicherheits-, Rechts- oder Vertragsbeschränkungen werden die Gründe und der Einspruchsweg genannt.',
      },
      { value: '6', unit: 'Monate', body: 'Nach Mitteilung einer Moderationsentscheidung kannst du mindestens sechs Monate lang kostenlos Einspruch einlegen. Das gilt auch für die Entscheidung, eine Meldung nicht weiterzuverfolgen.' },
      { value: '13', unit: 'Jahre', body: 'Das Mindestalter für die Registrierung richtet sich nach dem Aufenthaltsort: 13 Jahre in Taiwan und einigen weiteren Regionen, 14 in Südkorea und 16 im Europäischen Wirtschaftsraum. Es gilt jeweils die strengere Regel.' },
      { value: '7', unit: 'Tage', body: 'Die Rohdaten der Bibliothek werden ab dem Hochladen sieben Tage gespeichert. Danach sind Lesen und Export nicht mehr möglich, und die Löschung wird angesetzt. Wenn du die Rohdaten behalten möchtest, exportiere die Bibliothek vor Ablauf der Frist.' },
      { value: '1', unit: 'Monate', body: 'Auf Datenanfragen nach der DSGVO antworten wir üblicherweise innerhalb eines Monats. Ist eine Verlängerung nötig, teilen wir das innerhalb des ersten Monats mit.' },
    ],
    note: 'Auch ohne Konto oder mit gesperrtem Konto kannst du Meldungen machen und Einspruch einlegen.',
  },
  views: {
    label: 'Sichtbarkeit',
    headline: 'Auf derselben Seite sehen verschiedene Menschen unterschiedliche Inhalte.',
    lead: 'Bei jedem Abruf und jeder Übermittlung prüft der Server zugleich Sperren, Privatsphäre, Lesefortschritt, Zuständigkeit und Widerrufe. Für Suchergebnisse, Zählungen, Vorschauen, Benachrichtigungen, Exporte und Inhalte für KI-Agenten gelten dieselben Regeln.',
    facts: [
      { title: 'Ohne Anmeldung', body: 'Du siehst Inhalte ohne Altersbeschränkung und noch nicht bewertete Inhalte. Wiki+ beginnt am Anfang der Geschichte und verrät nichts aus späteren Abschnitten.' },
      { title: 'Wenn du bis Kapitel drei gelesen hast', body: 'Wiki+ und Diskussionen reichen bis zu der Stelle, die du gelesen hast. Du kannst selbst auswählen, welches Kapitel oder ob du alles sehen möchtest.' },
      {
        title: 'Altersbeschränkte Inhalte',
        body: 'R15 ist ab 15 Jahren. Sexuelle Inhalte (R18) und drastische Inhalte (R18G) müssen getrennt freigeschaltet werden. Bei Inhalten mit beiden Einstufungen müssen beide aktiviert sein. In Regionen ohne Inhalte für Erwachsene lassen sie sich nicht aktivieren. Die Einstufung legt nur fest, wie Inhalte angezeigt werden. Sie gewährt keinen Zugriff auf private Inhalte.',
      },
      { title: 'Community-Moderatoren', body: 'Sie erhalten nur Informationen, die sie für die Moderation benötigen. Sie können nicht beliebig Konten, private Bibliotheken oder vertrauliche Sicherheitsmeldungen einsehen.' },
      { title: 'Suchmaschinen und Linkvorschauen', body: 'Sie sehen nur die Ansicht ohne Anmeldung. Inhalte für Erwachsene erscheinen auch nicht in E-Mail- oder Push-Benachrichtigungen.' },
      { title: 'Bildabdeckungen', body: 'Bilder, die sich möglicherweise nicht für öffentliche Orte eignen, sind standardmäßig verdeckt. Du entscheidest, ob sie direkt angezeigt werden. Vom Autor verdeckte Bilder bleiben verdeckt.' },
    ],
  },
  privacy: {
    label: 'Privatsphäre',
    headline: 'Dein Leseverlauf wird nicht zu Werbung.',
    facts: [
      {
        title: 'Keine Werbeprofile',
        body: 'Private Leseverläufe werden weder für Werbeprofile noch zum Ableiten sensibler Merkmale für Marketing verwendet. Die Website nutzt keine Werbetracker und verkauft keine personenbezogenen Daten. Eigene Cookies von REZICS dienen nur der Oberflächensprache, dem Erscheinungsbild und der Anmeldung.',
      },
      {
        title: 'Training braucht eine separate Zustimmung',
        body: 'Nicht öffentliche Entwürfe und Leseverläufe werden standardmäßig nicht zum Trainieren von KI-Modellen verwendet. Das geschieht nur, wenn du ausdrücklich zustimmst. Eine Registrierung oder die Nutzung einer KI-Funktion gilt nicht als Zustimmung.',
      },
      { title: 'Vor der Übermittlung informieren', body: 'Bevor eine ausgewählte KI-Funktion private Daten an einen externen Dienst sendet, wird erklärt, an welchen Dienst welche Daten übermittelt werden, wofür und wie lange sie gespeichert werden.' },
      { title: 'Standardmäßig privat', body: 'Entwürfe und Leseverläufe sind standardmäßig privat und nur sichtbar, wenn du sie aktiv teilst. Auch wenn andere deine öffentliche Identität oder Community verwalten, erhalten sie keinen Zugriff auf deinen privaten Leseverlauf.' },
      { title: 'Dein Geburtstag bleibt privat', body: 'Dein Geburtstag ist standardmäßig privat. Altersbeschränkte Inhalte freizuschalten macht ihn nicht öffentlich. Auch deine Altersberechtigung hängt nicht davon ab, ob dein Geburtstag sichtbar ist.' },
      { title: 'Deine Daten gehören dir', body: 'Du kannst anfragen, deine Daten einzusehen, zu berichtigen, zu exportieren oder zu löschen. Das ist auch ohne Konto möglich.' },
    ],
  },
  family: {
    closing: 'Jeder Eintrag nennt seine Quelle, die du selbst prüfen kannst.',
  },
};

export default {
  id: 'trust',
  base: '/engine/trust/',
  name: 'Vertrauen',
  theme: { module: 'trust' },
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'Vertrauen: Jeder Eintrag hat eine Quelle',
        description:
          'Daten auf REZICS nennen ihre Quellen und Lizenzen. Prüfungen, Streitfälle und Einsprüche werden einzeln erfasst und überschreiben einander nicht. Meldungen sind auch ohne Konto möglich. Ohne Zustimmung verbreitete private Bilder werden nach einer gültigen Anfrage innerhalb von 48 Stunden entfernt.',
      },
    },
  ],
  strings,
} satisfies MiniSite<TrustStrings>;
