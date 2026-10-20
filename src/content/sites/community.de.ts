// 社群 /engine/community/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md). The section shapes are shared with create and trust.
import type { Item, MiniSite } from '../schema';

/** A v3 section: eyebrow, serif heading, lead text and an optional hairline facts list. */
export interface ModuleSection {
  label: string;
  headline: string;
  lead?: string | string[];
  facts?: Item[];
  note?: string;
}

/** The module family's strings: the ring of the five modules and the page's closing line. */
export interface ModuleFamilyStrings {
  closing: string;
}

/** A number written into the rules: a numeral, its unit and one sentence. */
export interface Figure {
  value: string;
  unit: string;
  body: string;
}

/** A large serif statement; `sub` is its muted second half. */
export interface ModuleStatement {
  statement: string;
  sub: string;
  body?: string;
}

export interface CommunityStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  person: ModuleSection;
  lead: ModuleSection & {
    /** The post's byline as two kinds of reader see it (示意). */
    specimen: {
      toggleLabel: string;
      toggle: [string, string];
      you: string;
      realm: string;
      follow: string;
      post: string;
      caption: string;
    };
  };
  realm: ModuleSection;
  leave: ModuleStatement;
  ratings: ModuleSection & { figures: Figure[] };
  follow: ModuleSection;
  feed: ModuleSection;
  recognition: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CommunityStrings = {
  contentsLabel: 'Auf dieser Seite',
  hero: {
    headline: 'Du sprichst. Die Community ist der Ort.',
    lede: 'Du hast eine öffentliche Identität. Deine Rezensionen, Listen und Bibliothek gehören zu dir. Jede Community bietet Themen, Regeln und Moderation, ohne dich zu vereinnahmen.',
    imageAlt: 'Viele kleine Papierstücke liegen um ein größeres dunkelgraues Stück, wie Menschen an einem Tisch.',
  },
  person: {
    label: 'Identität',
    headline: 'Eine öffentliche Identität für jede Community.',
    lead: 'Du kannst ein Pseudonym verwenden, aber dich nicht als jemand anderes ausgeben. Bibliothek, Listen, Rezensionen, Werke, Übersetzungen und Diskussionen gehören zu dieser Identität, nicht zu einer Community. Auch in einer anderen Community bleibst du dieselbe Person.',
    facts: [
      { title: 'Ein neuer Name behält die Verknüpfungen', body: 'Nach einer Umbenennung leiten alte Adressen auf den neuen Namen weiter. Namen, die anderen zu ähnlich sind, werden abgelehnt.' },
      { title: 'Deine Werke beanspruchen', body: 'Wenn deine Werke bereits im Katalog stehen, kannst du die zugehörige Identität beanspruchen.' },
      { title: 'Folgen ist einseitig', body: 'Andere können dir folgen, ohne auf deine Zustimmung zu warten. Du kannst sie blockieren. Welche und wie viele Benachrichtigungen sie erhalten, legen sie selbst fest.' },
      { title: 'Beiträge bleiben am Ort', body: 'Wenn du eine Community verlässt, bleiben deine Beiträge dort und tragen weiterhin deinen Namen.' },
      {
        title: 'Wenn eine Community selbst spricht',
        body: 'Auch eine Community kann in eigenem Namen Empfehlungen und Entscheidungen veröffentlichen. Das dürfen nur beauftragte Personen. Jede Empfehlung verweist auf die zugrunde liegende Entscheidung. Deine Beiträge werden nicht zu Aussagen der Community, nur weil sie dort erscheinen.',
      },
    ],
  },
  lead: {
    label: 'Namenszeile',
    headline: 'Wer im Beitrag zuerst genannt wird, folgt einer festen Regel.',
    lead: 'Jeder Beitrag nennt dich und die Community. Wer dich noch nicht kennt, kann deinen Namen nicht einordnen. Deshalb steht zuerst die Community. Wenn jemand dir folgt, steht zuerst dein Name.',
    specimen: {
      toggleLabel: 'Ansicht wechseln',
      toggle: ['So sehen es deine Follower', 'So sehen es Personen, die dir nicht folgen'],
      you: 'Du',
      realm: 'Fantasy-Lesegruppe',
      follow: 'Folgen',
      post: 'Das Ende des dritten Bandes war stiller, als ich gedacht hatte.',
      caption: 'Beispiel: derselbe Beitrag mit zwei Namenszeilen.',
    },
    facts: [
      { title: 'Die Person folgt dir', body: 'Dein Name steht zuerst, dann die Community.' },
      { title: 'Der Beitrag gehört zu keiner Community', body: 'Dein Name steht zuerst.' },
      { title: 'In allen anderen Fällen', body: 'Die Community steht zuerst. Die Schaltfläche zum Folgen steht daneben.' },
      { title: 'Empfehlungen und Entscheidungen der Community', body: 'Nur die Community wird genannt, nicht die auswählende Person.' },
    ],
    note: 'Wer zuerst genannt wird, steht vorne und ist durch Symbol und Fettschrift hervorgehoben. Die Regel bleibt gleich, damit derselbe Beitrag immer gleich aussieht.',
  },
  realm: {
    label: 'Community',
    headline: 'Die Community ist der Ort und legt ihre Regeln fest.',
    lead: 'Jede Community legt fest, wer beitreten kann, was neue Mitglieder sehen und wie Inhalte moderiert werden. Die Einstellungen sind öffentlich einsehbar.',
    facts: [
      { title: 'Drei Wege zum Beitritt', body: 'Der Beitritt ist offen, erfolgt auf Antrag oder per Einladung. Mit dem Beitritt folgst du der Community. Beim Austritt endet nur dieses Folgeabo.' },
      { title: 'Regeln in jeder Sprache', body: 'Chinesischsprachige Mitglieder lesen die chinesische Fassung, japanischsprachige die japanische. Beiträge können in jeder Sprache verfasst werden.' },
      {
        title: 'Öffentlich lesbar, aber nicht unbedingt auffindbar',
        body: 'Eine Community kann öffentlich lesbar sein und trotzdem nicht in Suche, Empfehlungen oder Sitemap erscheinen. Nimmt eine private Community Beitrittsanträge an, sehen Außenstehende nur Name, Beschreibung, Regeln und die Schaltfläche zum Beantragen.',
      },
      { title: 'Meldungen werden zu Fällen', body: 'Gemeldete Inhalte werden als Fall behandelt. Die Entscheidung wird begründet und kann angefochten werden.' },
      { title: 'Abstimmungen und Beschlüsse', body: 'Eine Community kann abstimmen. Ein angenommener Beschluss darf nur Maßnahmen umsetzen, zu denen die Community bereits berechtigt ist.' },
      { title: 'Die Plattformregeln haben Vorrang', body: 'Eine Community darf strengere Regeln als die Plattform festlegen, aber keine lockereren. Ihre Leitung kann sie nicht selbst schließen. Nur die Plattform kann sie wegen Moderations- oder Rechtefragen entfernen und später wiederherstellen.' },
    ],
  },
  leave: {
    statement: 'Du kannst eine Community jederzeit verlassen,',
    sub: 'denn deine Identität, Bibliothek und Listen gehören ohnehin dir.',
  },
  ratings: {
    label: 'Bewertungen',
    headline: 'Neben jeder Bewertung stehen die Frage, das Werk und die bewertende Gruppe.',
    lead: [
      'Jede Bewertung nennt drei Dinge: die Frage, den Gegenstand und die bewertende Gruppe. Antworten auf unterschiedliche Fragen werden nicht zusammengerechnet. Die Bewertung einer Folge zählt nicht für die ganze Serie, und die Bewertung einer Ausgabe bleibt bei dieser Ausgabe.',
      'Eine Rezension braucht keine Bewertung. Sie nennt einfach, ob es um Geschichte, Übersetzung, Lesung oder Produktion geht und um welche Ausgabe. Standardmäßig siehst du die Plattform und daneben deine Community sowie einige Communities mit vielen Bewertungen. Ohne Bewertungen erscheinen weder eine Null noch ein leeres Verteilungsdiagramm.',
    ],
    figures: [
      { value: '5', unit: 'Bewertungen', body: 'Ein Durchschnitt erscheint erst ab fünf Bewertungen pro Werk. Darunter siehst du nur Anzahl und Verteilung sowie die Zahl der noch fehlenden Bewertungen.' },
      { value: '10', unit: 'Bewertungen', body: 'Für genauere Gegenstände, etwa eine Figur in einer einzelnen Folge, erscheint der Durchschnitt erst ab zehn Bewertungen.' },
      { value: '50', unit: 'Bewertungen', body: 'Ab 50 Bewertungen ist ein Werk für Ranglisten zugelassen. Die Rangliste zeigt den verwendeten Durchschnitt und die Gewichtung.' },
    ],
    note: 'Das sind Standardgrenzen. Jede Bewertungsart kann sie an ihre Daten anpassen.',
  },
  follow: {
    label: 'Folgen',
    headline: 'Folge, was dich interessiert.',
    lead: 'Du kannst Personen, Organisationen, Communities, Werke, Themen und Listen folgen, sogar gespeicherten Filtern. Für jedes Abo gibt es drei Benachrichtigungsstufen: alle, ausgewählte oder keine.',
    facts: [
      { title: 'Personen und Organisationen', body: 'Standardmäßig erhältst du Hinweise zu neuen Werken und Ankündigungen.' },
      { title: 'Werke', body: 'Du erhältst Hinweise auf neue Kapitel und Ausgaben in deinen Sprachen. Wenn du ein Werk als „Lese ich gerade“ markierst, folgst du ihm automatisch.' },
      { title: 'Community', body: 'Standardmäßig gibt es nur Hinweise zu Ankündigungen und Entscheidungen. Normale Beiträge bleiben im Feed.' },
      { title: 'Themen und Ansichten', body: 'Standardmäßig erhältst du keine Benachrichtigungen. Jedes Thema und jede Ansicht erhält einen eigenen Tab auf deiner Startseite.' },
      { title: 'Listen', body: 'Listen können verschiedene Arten von Werken verbinden, etwa Romane, Anime und Spiele. Zu jedem Eintrag kannst du eine Notiz schreiben, die Reihenfolge legst du fest und die ganze Liste lässt sich jederzeit exportieren.' },
      { title: 'Wichtige Hinweise bleiben aktiv', body: 'Auch wenn Benachrichtigungen ausgeschaltet sind, erhältst du Hinweise auf Antworten, Erwähnungen und andere Dinge, die dich direkt betreffen.' },
    ],
  },
  feed: {
    label: 'Feed',
    headline: 'Das Neueste steht oben. Gelesene Beiträge werden markiert.',
    lead: '„Neueste“ sortiert deinen Feed strikt nach Zeit. Bei anderen Sortierungen wird angezeigt, worauf sie beruhen.',
    facts: [
      { title: '„Beliebt“ wird getrennt berechnet', body: '„Beliebt“ wird für jede Community separat berechnet. So füllt keine einzelne Community eine ganze Seite, und auch kleinere Communities werden sichtbar.' },
      { title: 'Empfehlungen werden begründet', body: 'Empfehlungen berücksichtigen nur deine Abos, Sprachen und Bibliothek. Jede Empfehlung nennt ihren Grund. Du kannst Empfehlungen auch ganz ausschalten.' },
      { title: 'Stummschalten, ignorieren und blockieren', body: 'Drei verschiedene Einstellungen in einem Menü.' },
      { title: 'Wo du Benachrichtigungen erhältst', body: 'Posteingang, Push-Mitteilungen und regelmäßige E-Mail-Zusammenfassungen lassen sich getrennt einstellen. E-Mails kannst du mit einem Klick abbestellen.' },
    ],
  },
  recognition: {
    label: 'Stufen',
    headline: 'Angenommene Beiträge zählen, tägliche Besuche nicht.',
    lead: 'Jede Community vergibt eigene Erfahrungspunkte und Stufen für angenommene Rezensionen, Korrekturen, Übersetzungen, Moderation und kreative Beiträge, die wirklich helfen. Stufen lassen sich weder ausgeben noch übertragen und verleihen keine Moderationsrechte. Mehrere Konten zum künstlichen Steigern der Stufe zu verwenden, verstößt gegen die Nutzungsregeln.',
  },
  family: {
    closing: 'Wenn du jede Seite selbst gestalten möchtest, richte eine Website für deine Community ein.',
  },
};

export default {
  id: 'community',
  base: '/engine/community/',
  name: 'Community',
  theme: { module: 'community' },
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'Community: eine Identität für jede Community',
        description:
          'Auf REZICS hast du eine öffentliche Identität. Bibliothek, Listen und Rezensionen gehören zu dir, auch wenn du eine Community wechselst. Jede Community bietet einen Ort, Regeln und Moderation. Bewertungen nennen Frage und Gegenstand. Abos und Benachrichtigungen stellst du selbst ein.',
      },
    },
  ],
  strings,
} satisfies MiniSite<CommunityStrings>;
