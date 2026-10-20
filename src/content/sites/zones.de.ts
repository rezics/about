// Zone (/engine/zones/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). The example
// Zone is an illustrative (示意) 《魔法禁書目錄》 Wiki+ in zh-Hant; text only, per
// .temp/sites/EXAMPLE-WORK.md. Its handle, routes and revision log are not REZICS data.
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'zones')!;

export interface Item {
  title: string;
  body: string;
}

export interface ZonesStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  routes: {
    label: string;
    headline: string;
    lead: string;
    caption: string;
    /** Route title and its path; `depth` indents a child route. */
    entries: { title: string; path: string; depth?: 1; note?: string }[];
    note: string;
  };
  templates: { label: string; headline: string; lead: string; steps: Item[]; note: string };
  themes: { label: string; headline: string; lead: string; items: Item[] };
  wiki: { label: string; headline: string; lead: string; items: Item[] };
  shared: { label: string; headline: string; lead: string; more: string; alt: string };
  log: { label: string; headline: string; lead: string; caption: string; entries: Item[]; items: Item[] };
  closing: string;
}

export default {
  id: 'zones',
  base: '/engine/zones/',
  name: 'Zone',
  theme: { module: 'zones' },
  pages: [
    {
      slug: '',
      label: 'Übersicht',
      meta: {
        title: 'Zones: Websites auf einem gemeinsamen Graphen',
        description:
          'Eine Zone ist eine vollständige Website einer Community auf den gemeinsamen Daten von REZICS. Die Community bestimmt Routen, Vorlagen, Navigation und Gestaltung. Sieh dir an, wie ein Wiki+ aufgebaut ist, Spoiler vermeidet und überarbeitet wird.',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: 'Module',
      headline: 'Deine Website, gemeinsame Daten.',
      lede: 'Eine Zone hat eine eigene Startseite, Navigation und Gestaltung. Die Community bestimmt das Aussehen der Website. Werke, Personen und Fakten stammen aus den gemeinsamen Daten.',
      alt: 'Ein dunkelgraues Blatt ist zu einem kleinen Haus ohne Dach gefaltet. In der Vorderwand ist eine Tür, in zwei Räumen liegen kleine rosafarbene und blaue Papierstücke.',
    },
    routes: {
      label: 'Routen',
      headline: 'Die Community bestimmt jeden Abschnitt der Adresse.',
      lead: 'Jede Route hat eine feste Identität, Pfade können auf Chinesisch geschrieben sein. Detailseiten öffnen nur Daten, die in dieser Zone enthalten sind. Eine neue Route erzeugt keinen neuen Datensatz. Die Navigation ist ein eigener Baum, dessen Reihenfolge du bestimmst.',
      caption: 'Beispiel: Routen eines Wiki+ zu A Certain Magical Index',
      entries: [
        { title: 'Startseite', path: '/z/index-wiki' },
        { title: 'Werke', path: '/z/index-wiki/werke' },
        { title: 'New Testament', path: '/z/index-wiki/werke/new-testament', depth: 1 },
        { title: 'Personen', path: '/z/index-wiki/personen' },
        { title: 'Lesereihenfolge', path: '/z/index-wiki/lesereihenfolge', note: 'Eigene Seite' },
        { title: 'Zeitlinie', path: '/z/index-wiki/zeitlinie' },
        { title: 'Suche', path: '/z/index-wiki/suche' },
      ],
      note: 'Die Routentabelle der Zone verwaltet die Pfade. Die Plattform reserviert nur wenige Begriffe und nimmt dir keine Adressen weg. Die Diskussion liegt auf der Community-Seite unter /r/index-wiki. Beide sind miteinander verknüpft.',
    },
    templates: {
      label: 'Vorlagen',
      headline: 'Die spezifischste Vorlage hat Vorrang.',
      lead: 'Jeder Abschnitt einer Seite ist mit einer Quelle verknüpft: dem aktuellen Datensatz, einer seiner Eigenschaften, einem Dokument, einer Liste oder einer gespeicherten Abfrage. Jede Liste in einem Abschnitt lässt sich bis zum letzten Eintrag durchblättern.',
      steps: [
        { title: 'Routenvorgabe', body: 'Wenn für diese Route eine Vorlage festgelegt ist, wird sie verwendet.' },
        { title: 'Art', body: 'Ohne Vorgabe wird die Vorlage für diese Art verwendet, etwa eine gemeinsame Vorlage für alle Personen.' },
        { title: 'Struktur', body: 'Gibt es auch dafür keine Vorlage, wird die der übergeordneten Struktur verwendet.' },
        { title: 'Allgemeine Seite', body: 'Fehlt auch diese, bleibt die allgemeine Seite mit Namen, Kennnummern, Aussagen und Quellen sowie Beziehungen in beide Richtungen.' },
      ],
      note: 'Eine unbekannte Art übernimmt nicht die Schaltflächen für Bücher. Ihre Seite enthält nur die passenden Teile.',
    },
    themes: {
      label: 'Gestaltung',
      headline: 'Die Gestaltung lässt sich ändern, geschützte Funktionen bleiben.',
      lead: 'Die Community bestimmt Marke, Farben, Schrift und Layout. Einige Funktionen schützt die Plattform. Sie bleiben bei jedem Design erhalten.',
      items: [
        { title: 'Von der Community bestimmt', body: 'Logo, Farben, Schrift und Layout.' },
        { title: 'Von der Plattform geschützt', body: 'Identität, Suche, Sprachwechsel, Quellen und Barrierefreiheit.' },
        {
          title: 'Eigene Darstellung',
          body: 'Bei Bedarf kann eine Zone eigenen Darstellungscode mitbringen. Dieser Code muss geprüft werden. Leser können jederzeit zur Standarddarstellung wechseln. Das Backend bleibt dasselbe.',
        },
      ],
    },
    wiki: {
      label: 'Wiki+',
      headline: 'Wiki+ reicht bis zu deiner Lesestelle.',
      lead: 'Wiki+ ist die Zone eines Werks. Personen, Orte, Zeitlinie und Lesereihenfolge haben jeweils eine eigene Seite. Infoboxen lesen Fakten aus dem Graphen. Andere Seiten nutzen dieselben Fakten.',
      items: [
        { title: 'Nicht angemeldet', body: 'Du beginnst am Anfang der Geschichte. Noch nicht enthüllte Fakten bleiben verborgen.' },
        { title: 'Angemeldet', body: 'Die Anzeige endet standardmäßig an deiner Lesestelle. Du kannst auch alle Inhalte einblenden.' },
        {
          title: 'In einem Schritt erstellt',
          body: 'Textbesitzer lassen lokal einen KI-Agenten Personen, Orte, Beziehungen und Ereignisse kapitelweise erfassen. Jeder Vorschlag enthält die genaue Stelle und ein kurzes Zitat. Anschließend wird das Paket eingereicht und erst nach menschlicher Prüfung veröffentlicht. REZICS erhält nicht den vollständigen Text.',
        },
        { title: 'Von der Community bestimmt', body: 'Jede Community entscheidet, ob Agenten Entwürfe erstellen dürfen und ob sie generierte Texte annimmt.' },
      ],
    },
    shared: {
      label: 'Gemeinsam genutzt',
      headline: 'Eigenständige Websites, gemeinsame Daten.',
      lead: 'Ein chinesischsprachiges Wiki+ und die Website eines englischsprachigen Lesekreises können dieselben Werke und Personen nutzen. Das eine führt A Certain Magical Index unter dem chinesischen Titel, das andere unter dem englischen Titel. Beide verweisen auf dieselbe Identität. Namen, Beschreibungen, Reihenfolge und verwendete Angaben werden jeweils selbst festgelegt.',
      more: 'Eine Zone kann auch Bücher, Anime und Spiele zusammenführen und eine Website für ein ganzes Werkuniversum bilden.',
      alt: 'Zwei eigenständige dunkelgraue Origamiformen liegen versetzt auf demselben hellblauen Papierstreifen.',
    },
    log: {
      label: 'Revisionen',
      headline: 'Jede Revision bleibt dokumentiert.',
      lead: 'Eine Revision bündelt Routen, Navigation, Vorlagen, Gestaltung und Abfragen in einem Stand. Vor der Veröffentlichung kannst du sie ansehen und prüfen. Danach lässt sich die vorherige Version wiederherstellen oder die ganze Website exportieren.',
      caption: 'Beispiel: Revisionsverlauf eines Wiki+',
      entries: [
        { title: 'Dritte Revision', body: 'Die Seite „Lesereihenfolge“ kommt hinzu und erscheint in der Navigation. Nach Vorschau und Prüfung wird sie veröffentlicht.' },
        { title: 'Zweite Revision', body: 'Personenseiten nutzen eine neue Vorlage. Nach der Veröffentlichung wird zur ersten Revision zurückgekehrt.' },
        { title: 'Erste Revision', body: 'Startseite, Werke, Personen und Zeitlinie werden veröffentlicht.' },
      ],
      items: [
        { title: 'Vier Berechtigungen', body: 'Websitebearbeitung, Veröffentlichung, Community-Moderation und Beiträge zum Graphen haben getrennte Berechtigungen. Wer das Layout ändern kann, darf nicht automatisch auch Daten im Graphen bearbeiten.' },
        { title: 'Zwei Einstellungen', body: 'Ob die Website öffentlich ist und ob sie in Suche und Empfehlungen erscheint, sind getrennte Einstellungen.' },
        { title: 'Derselbe Weg', body: 'Menschen bearbeiten die Website im Browser, Agenten über die API. Beide nutzen denselben Weg.' },
      ],
    },
    closing: 'Eröffne eine Zone auf REZICS und baue eine eigene Website für deine Community.',
  },
} satisfies MiniSite<ZonesStrings>;
