// 通用索引 (/engine/universal-index/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The page follows one work, 《魔法禁書目錄》, as a plain-text example of how REZICS records a work
// (.temp/sites/EXAMPLE-WORK.md: no cover or likeness, no publishers or studios, no counts).
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'universal-index')!;

export interface Item {
  title: string;
  body: string;
}

export interface IndexStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  names: {
    label: string;
    headline: string;
    lead: string;
    /** `lang` is a BCP 47 tag; the Japanese title is set in a Japanese face (Noto Sans TC lacks 録). */
    names: { name: string; lang: string; label: string }[];
    caption: string;
  };
  people: { label: string; headline: string; lead: string; rows: Item[]; characters: string };
  layers: { label: string; headline: string; lead: string; alt: string; items: Item[]; aside: string };
  relations: {
    label: string;
    headline: string;
    lead: string;
    /** Related works, with each sequel's source made explicit; `kind` colours its tile. */
    items: { id: string; rel: string; name: string; line: string; kind: 'books' | 'manga' | 'anime' | 'visual-novels' }[];
    note: string;
  };
  values: { label: string; headline: string; lead: string; items: Item[] };
  merge: { label: string; headline: string; lead: string; items: Item[] };
  closing: string;
}

export default {
  id: 'universal-index',
  base: '/engine/universal-index/',
  name: 'Universeller Index',
  theme: { module: 'universal-index' },
  pages: [
    {
      slug: '',
      label: 'Übersicht',
      meta: {
        title: 'Universeller Index: ein Werk, eine Identität',
        description:
          'Am Beispiel von A Certain Magical Index zeigt sich, wie REZICS jedem Werk eine Identität gibt: Namen in allen Sprachen, Mitwirkende, Werke und Ausgaben, Fortsetzungen und Adaptionen, Filter und Ansichten sowie das Zusammenführen und Trennen von Einträgen.',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: 'Module',
      headline: 'Ein Werk, eine Identität.',
      lede: 'Zum Beispiel A Certain Magical Index: Der japanische Originaltitel sowie der chinesische und englische Titel verweisen auf dasselbe Werk. Angezeigt wird zuerst der Name in deiner Lesesprache.',
      alt: 'Auf dunkelgrauem Papier liegen gleich große graue und farbige Karten in einem ordentlichen Raster. Eine Ecke hebt sich.',
    },
    names: {
      label: 'Namen',
      headline: 'Viele Namen, eine Identität.',
      lead: 'Zu jedem Namen sind Sprache und Zweck erfasst: Originaltitel, Übersetzung, Alternativname oder Aussprache. Die Suche findet das Werk über jeden dieser Namen.',
      names: [
        { name: 'A Certain Magical Index', lang: 'zh-Hant', label: 'Titel auf traditionellem Chinesisch' },
        { name: 'とある魔術の禁書目録', lang: 'ja', label: 'Japanischer Originaltitel' },
        { name: 'A Certain Magical Index', lang: 'en', label: 'Englischer Titel' },
      ],
      caption: 'Am Beispiel von A Certain Magical Index wird gezeigt, wie REZICS ein Werk erfasst.',
    },
    people: {
      label: 'Mitwirkende',
      headline: 'Eine Identität pro Person, mit klarer Rolle.',
      lead: 'Kazuma Kamachi ist Autor der Romane und Urheber der Manga-, Anime- und Spieladaptionen. Jeder Eintrag führt zu derselben Personenseite. Namen verweisen auf Personen oder Organisationen und nennen ihre Rolle und ihren Beitrag. Bei abweichenden Angaben werden alle Varianten mit Quelle aufgeführt.',
      rows: [
        { title: 'Kazuma Kamachi', body: 'Autor der Romane. Urheber der Manga-, Anime- und Spieladaptionen.' },
        { title: 'Kiyotaka Haimura', body: 'Illustrationen der Romane.' },
        { title: 'Chuuya Kogino', body: 'Zeichnungen des Manga.' },
      ],
      characters: 'Auch Figuren haben eine Identität. Dieselbe Figur bleibt in Roman, Manga und Anime dieselbe. Jeder Auftritt wird beim jeweiligen Werk erfasst.',
    },
    layers: {
      label: 'Drei Ebenen',
      headline: 'Werk, Text und Ausgabe auf drei Ebenen.',
      lead: 'Das Werk ist die Geschichte selbst. Dazu gehören verschiedene Texte: das japanische Original sowie chinesische und englische Übersetzungen. Jede tatsächliche Veröffentlichung wird als Ausgabe erfasst.',
      alt: 'Dunkelgraues, warmgraues und grünes Papier liegen übereinander. Eine Ecke des warmgrauen Papiers ist leicht eingerollt.',
      items: [
        { title: 'Werk', body: 'Die Geschichte selbst. Bewertungen, Abos und Verknüpfungen gehören zu dieser Ebene.' },
        { title: 'Text', body: 'Original und Übersetzungen in verschiedenen Sprachen. Jede Übersetzung ist ein eigener Text des Werks mit eigener Übersetzung und eigenen Rechten.' },
        { title: 'Ausgabe', body: 'Taschenbuch, E-Book und Sammelband: Jede Veröffentlichung erhält einen Eintrag, der den damaligen Inhalt wiedergibt.' },
      ],
      aside: 'Korrekturen und neue Auflagen bleiben dasselbe Werk. Eine Fassung mit veränderter Handlung wird als eigenes Werk erfasst und über die Beziehung „Neufassung“ verknüpft.',
    },
    relations: {
      label: 'Beziehungen',
      headline: 'Eine Beziehung, aus beiden Richtungen sichtbar.',
      lead: 'A Certain Magical Index, New Testament und Genesis Testament werden einzeln erfasst und als Fortsetzungen verknüpft. Auf der Seite des Vorgängers steht „Fortsetzung“, auf der von New Testament „Vorgänger“. Beide zeigen dieselbe Beziehung. Manga, Anime und Spin-offs verweisen ebenfalls auf ihre Vorlage.',
      items: [
        { id: 'shinyaku', rel: 'Fortsetzung von A Certain Magical Index', name: 'New Testament', line: 'Zweite Reihe, 2011 bis 2019', kind: 'books' },
        { id: 'souyaku', rel: 'Fortsetzung von New Testament', name: 'Genesis Testament', line: 'Dritte Reihe, seit 2020 in Veröffentlichung', kind: 'books' },
        { id: 'manga', rel: 'Adaption', name: 'Manga', line: 'Gezeichnet von Chuuya Kogino, seit 2007 veröffentlicht', kind: 'manga' },
        { id: 'anime', rel: 'Adaption', name: 'Anime', line: 'Drei Staffeln (2008, 2010, 2018) und ein Film (2013)', kind: 'anime' },
        { id: 'railgun', rel: 'Spin-off', name: 'A Certain Scientific Railgun', line: 'Wie A Certain Scientific Accelerator ein Spin-off mit Figuren aus der Hauptreihe', kind: 'manga' },
        { id: 'vn', rel: 'Adaption', name: 'Visual Novel', line: '2013 erschienen und auch im Visual-Novel-Katalog aufgeführt', kind: 'visual-novels' },
      ],
      note: 'Jede Beziehung hat einen Namen, eine Richtung und eine Quelle. Ähnliche Namen gelten nicht als Beleg. Ohne Beleg wird keine Verknüpfung erstellt.',
    },
    values: {
      label: 'Filter',
      headline: 'Jeder Wert hat eine eigene Seite.',
      lead: 'Personen, Typen, Sprachen und Vorlagen haben jeweils eine eigene Seite. Mehrere Werte zusammen ergeben einen Filter.',
      items: [
        { title: 'An denselben Auftritt gebunden', body: '„Hauptfigur“ und eine Figur werden demselben Auftritt zugeordnet. So erscheinen keine Werke, in denen eine andere Figur die Hauptrolle spielt.' },
        { title: 'Als Ansicht speichern', body: 'Gespeicherte Bedingungen mit Namen ergeben eine Ansicht. Du kannst sie abonnieren, als Tab auf der Startseite anheften oder als Verzeichnis einer Zone verwenden.' },
        { title: 'Bis zum letzten Eintrag blättern', body: 'Jede Liste lässt sich bis zum letzten Eintrag durchblättern. Die Anzeige macht klar, ob die Anzahl genau oder ein Mindestwert ist.' },
      ],
    },
    merge: {
      label: 'Zusammenführen und trennen',
      headline: 'Zusammenführungen lassen sich rückgängig machen. Trennungen bleiben nachvollziehbar.',
      lead: 'Jemand hat dasselbe Werk unter seinem englischen Titel ein zweites Mal angelegt. Vor dem Zusammenführen listet REZICS alle betroffenen Daten auf. Für jeden Konflikt muss eine Entscheidung getroffen werden.',
      items: [
        {
          title: 'Erst suchen, dann anlegen',
          body: 'Suche vor dem Anlegen nach Originaltitel, Alternativnamen, Aussprache, Autor und Kennnummer. Gibt es den Eintrag schon, ergänze einen Namen oder eine Ausgabe. Ein gleicher Titel oder eine gleiche ISBN ist ein Hinweis, aber kein Beweis.',
        },
        {
          title: 'Zusammenführen',
          body: 'Bewertungen, Listen, Bibliothekseinträge und Wiki-Fakten werden dem verbleibenden Eintrag zugeordnet. Zwei Bewertungen derselben Person werden nicht zu zwei Stimmen, zwei eigene Bücher nicht zu einem. Alte URLs bleiben erreichbar und führen zum verbleibenden Eintrag.',
        },
        { title: 'Rücknahme', body: 'Eine Rücknahme ist eine neue Entscheidung, kein Zurückspulen. Änderungen seit dem Zusammenführen werden einzeln zugeordnet. Unklare Fälle kommen in die Prüfung.' },
        { title: 'Trennen', body: 'Wenn zwei gleichnamige Bücher als ein Eintrag erfasst wurden, hält der alte Eintrag nach der Trennung fest, in welche Einträge sie aufgeteilt wurden und wohin jeder führt.' },
        {
          title: 'Menschen entscheiden',
          body: 'Jede Person und jeder AI-Agent kann eine Zusammenführung vorschlagen. Die Entscheidung trifft eine prüfende Person. Bei bereits genutzten oder umstrittenen Einträgen müssen zwei voneinander unabhängige Personen zustimmen. Ein Bot und sein Betreiber zählen als eine Person.',
        },
      ],
    },
    closing: 'Finde bei REZICS ein Werk, das du kennst, und sieh dir seine Namen an.',
  },
} satisfies MiniSite<IndexStrings>;
