// API Hub (`apis`): every visible string of /apis/ and its six inner pages. Design record and
// sources: src/sites/apis/SITE.md and src/sites/apis/facts.md.
import type { MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'apis')!;

/** A row of a facts list: title on the left, text on the right. */
export interface ApisRow {
  title: string;
  body: string;
}
/** An invented example shown as a flat tile: name, a note at the top, one line. */
export interface ApisTile {
  name: string;
  rel?: string;
  line: string;
}
/** A page's first screen: one sentence and one short paragraph. */
export interface ApisHero {
  headline: string;
  lede: string;
}
/** A section head: the eyebrow label, the h2 and an optional lead paragraph. */
export interface ApisSection {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** A large statement: the first half in ink, the second in muted ink, an optional note. */
export interface ApisStatement {
  lead: string;
  rest: string;
  note?: string;
}

export interface ApisStrings {
  /** Prefix of every caption under an invented example. */
  example: string;
  /** The row of further pages at the foot of every inner page. */
  next: { label: string; aria: string };
  /** The sentence under every page's closing statement. */
  closingBody: string;
  /** Text alternatives of the five photographs. */
  pictures: { hero: string; request: string; versions: string; specs: string; connections: string };
  home: {
    hero: ApisHero;
    pages: ApisSection & { rows: Record<string, string> };
    directory: ApisSection & { link: string };
    statement: ApisStatement;
    parts: ApisSection & { notes: Partial<Record<PartId, string>> };
    connections: ApisSection & { link: string };
    closing: string;
  };
  directory: {
    hero: ApisHero;
    facets: ApisSection & { rows: ApisRow[] };
    complete: ApisStatement;
    identity: ApisSection & { rows: ApisRow[] };
    views: ApisSection & { tiles: ApisTile[]; caption: string };
    closing: string;
  };
  versions: {
    hero: ApisHero;
    closed: ApisStatement;
    sequence: ApisSection & { tiles: ApisTile[]; caption: string };
    events: ApisSection & { rows: ApisRow[] };
    follow: ApisSection & { rows: ApisRow[]; footnote: string };
    closing: string;
  };
  specs: {
    hero: ApisHero;
    facts: ApisSection & { rows: ApisRow[] };
    measure: ApisStatement;
    fields: ApisSection & { rows: ApisRow[]; footnote: string };
    absent: ApisSection;
    closing: string;
  };
  connections: {
    hero: ApisHero;
    relations: ApisSection & { rows: ApisRow[] };
    both: ApisStatement;
    provider: ApisSection & { more: string };
    neighbours: ApisSection & {
      lines: { mcp: string; skills: string; software: string };
      developers: { name: string; line: string };
    };
    closing: string;
  };
  community: {
    hero: ApisHero;
    rating: ApisSection & { rows: ApisRow[] };
    discussion: ApisStatement;
    lists: ApisSection & { tiles: (ApisTile & { kind: 'apis' | 'software' | 'mcp' | 'skills' })[]; caption: string };
    zone: ApisSection & { link: string };
    closing: string;
  };
  publishing: {
    hero: ApisHero;
    path: ApisSection & { rows: ApisRow[] };
    proposal: ApisSection & { rows: ApisRow[] };
    paid: ApisStatement;
    provider: ApisSection & { more: string };
    closing: string;
  };
}

export default {
  id: 'apis',
  base: '/apis/',
  name: kind.name,
  theme: { kind: 'apis' },
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'API Hub: Ein Eintrag pro öffentlicher API',
        description:
          'REZICS führt für jede öffentliche API einen Eintrag. Anbieter, Versionen, Spezifikationen und Authentifizierung nennen Quelle und Datum. Filtere nach vorhandenen Angaben, folge Änderungen und sieh, auf welche Version sich Bewertungen und Diskussionen beziehen.',
      },
    },
    {
      slug: 'directory',
      label: 'Verzeichnis',
      meta: {
        title: 'API Hub Verzeichnis: APIs anhand von Fakten finden',
        description:
          'Im API Hub Verzeichnis kannst du Anbieter, Authentifizierung, Spezifikationen und Versionsstatus als Filter verwenden. Die Ergebnisse reichen bis zum letzten Eintrag und nennen die Genauigkeit der Anzahl. Filter lassen sich als Ansicht speichern und verfolgen.',
      },
    },
    {
      slug: 'versions',
      label: 'Versionen',
      meta: {
        title: 'API Hub Versionen: Ein Eintrag für jede Version',
        description:
          'Jede API-Version erhält einen eigenen Eintrag mit dem tatsächlich veröffentlichten Stand. Ankündigungen, geplante Termine, Verfügbarkeit, Verschiebungen und Rücknahmen werden getrennt erfasst. Wenn du folgst, erhältst du Mitteilungen nach deiner gewählten Stufe.',
      },
    },
    {
      slug: 'specs',
      label: 'Spezifikationen und Authentifizierung',
      meta: {
        title: 'API Hub: Spezifikationen und Authentifizierung',
        description:
          'Authentifizierung und Spezifikationen werden für jede Version einzeln erfasst. Als Quelle wird der Anbieter, ein Import oder die Community angegeben. Messwerte nennen Kennzahl, Methode, Bedingungen, Einheit und Zeitpunkt. Unbekannt, null und nicht zutreffend werden getrennt dargestellt.',
      },
    },
    {
      slug: 'connections',
      label: 'Verknüpfungen',
      meta: {
        title: 'API Hub Verknüpfungen: Was auf APIs aufbaut',
        description:
          'Anbieter, Clientbibliotheken, MCP-Server, die sie einbinden, und Skills, die sie verwenden, sind miteinander verknüpft. Du kannst die Verknüpfungen von beiden Seiten sehen. Anbieter haben außerdem eine eigene Seite mit allen ihren Einträgen.',
      },
    },
    {
      slug: 'community',
      label: 'Community',
      meta: {
        title: 'API Hub Community: Bewertungen, Diskussionen und Listen',
        description:
          'API-Bewertungen nennen die Frage, die Version und die bewertende Gruppe. Anzahl und Verteilung werden ebenfalls angezeigt. Diskussionen gehören zum Eintrag oder zur Version. Listen können APIs, Software und MCP-Server zusammen enthalten.',
      },
    },
    {
      slug: 'publishing',
      label: 'Einträge',
      meta: {
        title: 'API Hub Einträge: Hinzufügen und berichtigen',
        description:
          'Suche vor dem Hinzufügen nach Duplikaten und gib an, ob es sich um eine neue API, eine neue Version oder einen Alias handelt. Vorschläge brauchen Belege und werden erst nach menschlicher Prüfung übernommen. Anbieter und KI-Agenten nutzen denselben Ablauf.',
      },
    },
  ],
  strings: {
    example: 'Beispiel:',
    next: { label: 'Weiter', aria: 'Weitere Seiten im API Hub' },
    closingBody: 'Finde APIs, verfolge Versionsänderungen und teile deine Erfahrungen mit anderen.',
    pictures: {
      hero: 'Auf warmweißem Papier liegen mehrere hellblaue Blätter übereinander. An den Rändern sind Reihen runder Löcher. Darunter kommt ein dunkelblaues Blatt zum Vorschein.',
      request: 'Fünf hellblaue Papierstücke stehen wie Tore in einer Reihe. Ein dunkelgraublaues Band läuft durch die Einschnitte in jedem Blatt.',
      versions: 'Sechs hellblaue Kartonblätter sind fächerförmig und versetzt angeordnet, von hell bis dunkel. Die runden Löcher oben sind aufeinander ausgerichtet.',
      specs: 'Drei hellblaue Papierbögen liegen übereinander. In jeder Ecke befindet sich ein leerer quadratischer Prägedruck. Darunter ist dunkelgraublaues Papier zu sehen.',
      connections: 'In der Mitte eines hellblauen Blatts liegt eine Reihe runder Löcher. Ockerfarbene, hellgrüne und dunkelgrüne Papierstreifen führen von den Rändern zu je einem Loch.',
    },
    home: {
      hero: {
        headline: 'Ein Eintrag pro API, jede Tatsache mit Quelle.',
        lede: 'Anbieter, Versionen, Spezifikationen und Authentifizierung stehen in einem Eintrag. Quelle und Datum sind jeweils angegeben.',
      },
      pages: {
        eyebrow: 'Sechs Seiten',
        headline: 'Von der Suche nach einer API bis zu jeder neuen Version.',
        rows: {
          directory: 'Fakten als Filter, Ergebnisse bis zum letzten Eintrag',
          versions: 'Alte Versionen bleiben, neue findest du',
          specs: 'Authentifizierung und Spezifikation mit Quellenangabe',
          connections: 'Bibliotheken, MCP-Server und Skills sind verknüpft',
          community: 'Bewertungen und Diskussionen nennen ihren Bezug',
          publishing: 'Hinzufügen und berichtigen nach demselben Ablauf',
        },
      },
      directory: {
        eyebrow: 'Verzeichnis',
        headline: 'Jede Bedingung ist eine belegte Tatsache im Eintrag.',
        lead: 'Du kannst nach Authentifizierung, Spezifikationen, Versionsstatus und verknüpften MCP-Servern und Skills filtern. Kombiniere Bedingungen und sieh alle Ergebnisse bis zum letzten Eintrag.',
        link: 'Verzeichnis ansehen',
      },
      statement: {
        lead: 'APIs erhalten neue Versionen, Namen und werden zurückgezogen.',
        rest: 'Der Eintrag hält jede Änderung fest und nennt ihre Quelle.',
      },
      parts: {
        eyebrow: 'Acht Teile',
        headline: 'Ein API-Eintrag besteht aus acht Teilen.',
        lead: 'Die Identität steht immer an erster Stelle. Die anderen sieben Teile wählt der API Hub aus den fünfzehn gemeinsamen Teilen, die auch für Bücher und Anime verwendet werden.',
        notes: {
          identity: 'Auch nach einer Namens- oder Kennungsänderung bleibt es derselbe Eintrag. Frühere Schreibweisen sind weiterhin auffindbar.',
          editions: 'Jede Version erhält einen eigenen Eintrag mit den tatsächlich veröffentlichten Inhalten.',
          specs: 'Authentifizierung, Spezifikationen und Messwerte nennen jeweils Quelle und Datum.',
          credits: 'Anbieter und Maintainer werden nach ihrer Rolle genannt und haben jeweils eine eigene Seite.',
          ratings: 'Neben jeder Bewertung stehen die Version und die Frage, auf die sie sich bezieht.',
          discussion: 'Diskussionen gehören zur gesamten API oder zu einer bestimmten Version.',
          follow: 'Nachrichten zu neuen und zurückgezogenen Versionen richten sich nach deinen Einstellungen.',
          lists: 'Eine Liste kann APIs, Software und Skills enthalten, jeweils mit einer Notiz.',
        },
      },
      connections: {
        eyebrow: 'Verknüpfungen',
        headline: 'Was auf einer API aufbaut, ist verbunden.',
        lead: 'Clientbibliotheken, eingebundene MCP-Server, Skills und Anbieter sind eigene Einträge. Verknüpfungen verbinden sie, sodass du sie von jeder Seite aus findest.',
        link: 'Verknüpfungen ansehen',
      },
      closing: 'Prüfe Versionen und Belege, bevor du eine API auswählst.',
    },
    directory: {
      hero: {
        headline: 'Finde APIs anhand von Fakten bis zum letzten Eintrag.',
        lede: 'Jede Bedingung entspricht einer belegten Tatsache im Eintrag. Kombiniere Filter und blättere bis zum letzten Ergebnis, statt nach wenigen Seiten aufzuhören.',
      },
      facets: {
        eyebrow: 'Filterbedingungen',
        headline: 'Kombiniere die verfügbaren Angaben.',
        lead: 'Jede Bedingung hat einen eigenen Namen und Wert. Jeder Wert ist ebenfalls ein Eintrag, den du weiter durchsuchen kannst.',
        rows: [
          { title: 'Anbieter', body: 'Organisation oder Person, die die API bereitstellt. Du kannst APIs eines Anbieters zusammen anzeigen.' },
          { title: 'Authentifizierung', body: 'Keine Authentifizierung, API-Schlüssel oder Nutzerfreigabe. Jede Version wird getrennt erfasst.' },
          { title: 'Spezifikation', body: 'Ob eine Spezifikation verfügbar ist, wo sie steht und wer sie bereitstellt.' },
          { title: 'Versionsstatus', body: 'Angekündigt, verfügbar, zurückgezogen oder abgesagt.' },
          { title: 'Verknüpfungen', body: 'Verknüpfte MCP-Server, Clientbibliotheken, die sie aufrufen, und Skills, die sie verwenden.' },
          { title: 'Name und Sprache', body: 'Namen und Aliase in jeder Sprache sind durchsuchbar.' },
          { title: 'Bewertung', body: 'Nach einer Bewertungsfrage filtern. Die Anzahl wird angezeigt.' },
          { title: 'Datum', body: 'Nach dem Veröffentlichungsdatum der Version oder dem Datum der Faktenprüfung filtern.' },
        ],
      },
      complete: {
        lead: 'Vorschau, Rangliste und vollständige Liste sind drei verschiedene Dinge.',
        rest: 'Eine vollständige Liste reicht bis zum letzten Eintrag.',
        note: 'Jedes Ergebnis nennt die Genauigkeit der Anzahl und den letzten Aktualisierungsstand. Das Ende einer Seite ist nicht das Ende der Liste.',
      },
      identity: {
        eyebrow: 'Identität',
        headline: 'Eine API hat genau einen Eintrag.',
        lead: 'Auch nach einer Namens- oder Kennungsänderung und bei doppelten Einträgen bleibt es ein Eintrag.',
        rows: [
          { title: 'Kennungen nennen ihre Quelle', body: 'Jede Kennung nennt ihren Namensraum und ihre Quelle. Gleiche Namen aus verschiedenen Quellen werden nicht als identisch behandelt.' },
          { title: 'Frühere Namen bleiben auffindbar', body: 'Aliase, frühere Namen und Schreibweisen in verschiedenen Sprachen werden getrennt gespeichert. Jede davon führt zum Eintrag.' },
          { title: 'Duplikate werden zusammengeführt', body: 'Bei Duplikaten zeigt ein Zusammenführungsplan zuerst betroffene Bewertungen, Rezensionen und Folgen. Erst nach einer menschlichen Entscheidung wird er ausgeführt. Eine Zusammenführung lässt sich rückgängig machen.' },
          { title: 'Alte Adressen führen zum verbleibenden Eintrag', body: 'Zusammengeführte Einträge leiten zum verbleibenden Eintrag weiter und nennen den Grund der Zusammenführung.' },
        ],
      },
      views: {
        eyebrow: 'Ansicht',
        headline: 'Speichere häufige Filter und folge ihnen.',
        lead: 'Eine gespeicherte Ansicht hat einen eigenen Namen und lässt sich teilen. Wenn du ihr folgst, erscheinen neue passende Einträge in deinem Feed. Du kannst sie dir auch als Zusammenfassung senden lassen.',
        tiles: [
          { name: 'Keine Authentifizierung, Spezifikation vorhanden', line: 'Finde APIs mit Spezifikation, die keine Authentifizierung brauchen' },
          { name: 'Derselbe Anbieter', line: 'Alle APIs eines Anbieters auf einmal' },
          { name: 'Mit MCP-Server', line: 'APIs mit verknüpftem MCP-Server' },
          { name: 'Name auf traditionellem Chinesisch', line: 'APIs mit gepflegtem chinesischem Namen' },
        ],
        caption: 'Name und Inhalt der Ansichten sind Beispiele.',
      },
      closing: 'Beginne bei belegten Fakten, wenn du APIs suchst.',
    },
    versions: {
      hero: {
        headline: 'Alte Versionen bleiben, neue findest du.',
        lede: 'Jede Version bleibt im veröffentlichten Zustand erhalten, auch wenn sie zurückgezogen wird. Folge einer API und erhalte nach deinen Einstellungen eine Nachricht, wenn eine Version angekündigt, veröffentlicht oder zurückgezogen wird.',
      },
      closed: {
        lead: 'Ein veröffentlichter Versionsstand wird nicht überschrieben.',
        rest: 'Spätere Änderungen gehören zur nächsten Version.',
      },
      sequence: {
        eyebrow: 'Versionsfolge',
        headline: 'Jede API-Version hat ihre eigenen Belege.',
        lead: 'Beispiel mit einer erfundenen Wetterdaten-API: Version 3 verwendet einen API-Schlüssel. Der Eintrag „keine Authentifizierung“ für Version 2 bleibt erhalten. Falsche Angaben lassen sich mit Belegen berichtigen. Neue Inhalte erhalten eine neue Version.',
        tiles: [
          { name: 'v1', rel: 'Zurückgezogen', line: 'Keine Authentifizierung. Laut Mitteilung des Anbieters, bestätigt am 18.06.2026.' },
          { name: 'v2', rel: 'Verfügbar', line: 'Keine Authentifizierung. Laut Versionshinweisen des Anbieters, bestätigt am 12.08.2026.' },
          { name: 'v3', rel: 'Verfügbar', line: 'API-Schlüssel. Laut Spezifikation des Anbieters, bestätigt am 01.10.2026.' },
          { name: 'v4', rel: 'Angekündigt', line: 'API-Schlüssel. Laut Vorschau des Anbieters, bestätigt am 19.10.2026.' },
        ],
        caption: 'Wetterdaten-API, Versionen, Authentifizierung, Quellen und Daten sind erfunden.',
      },
      events: {
        eyebrow: 'Fünf Arten von Mitteilungen',
        headline: 'Von der Ankündigung bis zum Rückzug wird jede Mitteilung separat erfasst.',
        lead: 'Eine Version durchläuft mehrere Zeitpunkte. REZICS fasst sie nicht zu einem Datum zusammen.',
        rows: [
          { title: 'Angekündigt', body: 'Der Anbieter kündigt eine neue Version an. Das ist eine Mitteilung, noch keine Veröffentlichung.' },
          { title: 'Geplant', body: 'Ein geplanter Termin wurde bekannt gegeben. Ändert sich das Datum, bleibt der frühere Termin im Verlauf erhalten.' },
          { title: 'Verfügbar', body: 'Die Verfügbarkeit wurde bestätigt, mit Angabe der Quelle.' },
          { title: 'Verschoben', body: 'Der geplante Termin wird verschoben. Eine Verschiebung ist keine Absage und wird getrennt gekennzeichnet.' },
          { title: 'Zurückgezogen', body: 'Der Anbieter zieht diese Version zurück. Der Eintrag bleibt bestehen und der Status wird angepasst.' },
        ],
      },
      follow: {
        eyebrow: 'Folgen',
        headline: 'Folge einer API und wähle, wie oft du Updates erhältst.',
        lead: 'Du brauchst keine Zustimmung und zahlst nichts, um einer API zu folgen. Für jede Folgeoption kannst du eine Benachrichtigungsstufe wählen. Sie legt fest, welche Mitteilungen in deinem Posteingang erscheinen.',
        rows: [
          { title: 'Alle Updates', body: 'Neue Versionen, Ankündigungen und Entscheidungen sowie alle neuen Beiträge.' },
          { title: 'Wichtiges', body: 'Nur neue Versionen, Ankündigungen und Entscheidungen.' },
          { title: 'Aus', body: 'Allgemeine Mitteilungen bleiben in deinem Feed. Antworten und Erwähnungen, die dich direkt betreffen, werden weiterhin gemeldet.' },
          { title: 'Für einzelne Versionen', body: 'Für eine bestimmte Version kannst du eigene Benachrichtigungen festlegen.' },
        ],
        footnote: 'Benachrichtigungen erscheinen im Posteingang, als Push-Mitteilung oder als E-Mail-Zusammenfassung. E-Mail-Zusammenfassungen lassen sich mit einem Klick abbestellen.',
      },
      closing: 'Updates zu neuen Versionen erhältst du nach deinen Einstellungen.',
    },
    specs: {
      hero: {
        headline: 'Was du vor dem Aufruf wissen musst.',
        lede: 'Zu jeder Version stehen Authentifizierung, Spezifikation und Messwerte. Quelle und Datum sind angegeben.',
      },
      facts: {
        eyebrow: 'Zur Version erfasst',
        headline: 'Authentifizierung und Spezifikation sind für jede Version erfasst.',
        lead: 'Zwei Versionen derselben API können unterschiedliche Authentifizierungsmethoden haben. Deshalb gehören diese Fakten zur jeweiligen Version und nennen ihre Quelle.',
        rows: [
          { title: 'Authentifizierung', body: 'Keine Authentifizierung, API-Schlüssel oder Nutzerautorisierung werden für jede Version erfasst. Ändert sich die Methode, bleibt der Eintrag der alten Version unverändert.' },
          { title: 'Spezifikation', body: 'Der Eintrag nennt den Ort der Spezifikation, ihren Anbieter und das Datum der Bestätigung.' },
          { title: 'Messung', body: 'Messwerte nennen immer Kennzahl, Methode, Bedingungen, Einheit und Zeitpunkt.' },
          { title: 'Quelle', body: 'Jede Tatsache nennt den Anbieter, eine öffentliche Quelle oder eine Messung der Community als Ursprung. Importierte Daten verweisen auf Quelle und Lizenz.' },
        ],
      },
      measure: {
        lead: 'Messungen und Bewertungen sind verschieden.',
        rest: 'Bewertungen geben Meinungen wieder. Messungen zeigen, was unter bestimmten Bedingungen gemessen wurde.',
      },
      fields: {
        eyebrow: 'Messung',
        headline: 'Lies zuerst diese fünf Angaben zu einer Messung.',
        lead: 'Prüfe Kennzahl, Methode, Bedingungen, Einheit und Zeitpunkt. Achte beim Vergleich auch auf Ergebnis, Gegenstand und Umfang.',
        rows: [
          { title: 'Kennzahl', body: 'Was gemessen wird.' },
          { title: 'Methode', body: 'Wie gemessen wird.' },
          { title: 'Bedingungen', body: 'Unter welchen Bedingungen gemessen wird.' },
          { title: 'Einheit', body: 'Einheit des Messwerts.' },
          { title: 'Zeitpunkt', body: 'An welchem Tag gemessen wurde. Ältere Ergebnisse behalten ihr Datum.' },
        ],
        footnote: 'Ergebnisse derselben Kennzahl bilden einen Verlauf und lassen sich mit anderen APIs vergleichen.',
      },
      absent: {
        eyebrow: 'Fehlende Daten',
        headline: 'Unbekannt, null und nicht zutreffend sind verschiedene Angaben.',
        lead: 'Nicht gemessen bedeutet unbekannt, nicht null. Nicht zutreffende Kennzahlen gelten nicht als fehlende Daten. Fehlende Daten werden nicht zu irreführenden Bewertungen.',
      },
      closing: 'Kläre die Authentifizierung, bevor du die API einbindest.',
    },
    connections: {
      hero: {
        headline: 'Eine API und alles, was auf ihr aufbaut.',
        lede: 'Clientbibliotheken, MCP-Server, die die API einbinden, Skills, die sie verwenden, und der Anbieter haben auf REZICS jeweils eigene Einträge und sind miteinander verknüpft.',
      },
      relations: {
        eyebrow: 'Verknüpfungen',
        headline: 'Verknüpfungen haben Namen und eine Richtung.',
        lead: 'Jede Verknüpfung nennt ihre Art und die jeweilige Rolle. Sie erscheint auf der API-Seite und auf der verknüpften Seite.',
        rows: [
          { title: 'Clientbibliothek', body: 'Eine Bibliothek, die diese API aufruft, ist ein Softwareeintrag mit eigenen Versionen und Abhängigkeiten.' },
          {
            title: 'Als MCP-Server eingebunden',
            body: 'Ein Projekt, das sie als MCP-Server einbindet, hat einen eigenen Eintrag im MCP Hub. Projekt, Paket und Bereitstellungsendpunkt werden getrennt erfasst.',
          },
          {
            title: 'Skills, die sie verwenden',
            body: 'Skills, die diese API verwenden, haben einen eigenen Eintrag im Skill Hub und eine Verknüpfung hierher.',
          },
          { title: 'Weitere APIs desselben Anbieters', body: 'Auf der Anbieterseite findest du weitere APIs dieses Anbieters.' },
        ],
      },
      both: {
        lead: 'Vom API-Eintrag findest du den MCP-Server,',
        rest: 'und vom Server zurück zur API.',
      },
      provider: {
        eyebrow: 'Anbieter',
        headline: 'Anbieter haben eine eigene Seite.',
        lead: 'Eine Organisation oder Person, die APIs anbietet, hat eine öffentliche Identität unabhängig von einem Konto. Die APIs, veröffentlichte Software und gepflegten MCP-Server werden auf ihrer Seite nach Rolle aufgeführt.',
        more: 'Eine Person, die Romane schreibt, Software entwickelt und APIs pflegt, hat auf REZICS trotzdem nur eine Identität.',
      },
      neighbours: {
        eyebrow: 'Verknüpfte Bereiche',
        headline: 'Drei verwandte Arten und die Entwicklerseite.',
        lines: {
          mcp: 'MCP-Server, die APIs als Werkzeuge einbinden',
          skills: 'Skills für KI-Agenten, die damit Aufgaben erledigen',
          software: 'Bibliotheken und Anwendungen, die APIs aufrufen',
        },
        developers: { name: 'Entwickler', line: 'Hier findest du die APIs von REZICS' },
      },
      closing: 'Von jeder Seite aus findest du die andere.',
    },
    community: {
      hero: {
        headline: 'Jede Bewertung nennt die Version, auf die sie sich bezieht.',
        lede: 'Bei einer API-Bewertung müssen die Frage und die Version klar sein. Neben der Bewertung stehen Anzahl und Verteilung. Diskussionen, Listen und Communities gehören zum selben Eintrag.',
      },
      rating: {
        eyebrow: 'Bewertung',
        headline: 'Fünf Angaben gehören zu jeder Bewertung.',
        lead: 'Beispiel: Die Frage lautet „Sind die Dokumente verständlich?“. Bewertet wird Version 3 auf einer Fünferskala von allen Nutzern.',
        rows: [
          { title: 'Frage', body: 'Welche Frage bewertet wird. Bewertungen zu verschiedenen Fragen werden nie zusammengezählt.' },
          { title: 'Skala', body: 'Die Skala und die Bedeutung jeder Stufe werden vorab angegeben.' },
          { title: 'Gegenstand', body: 'Welche Version bewertet wird. Ihre Bewertung fließt nicht in die einer anderen Version ein.' },
          { title: 'Gruppe', body: 'Die bewertende Gruppe steht neben der Bewertung.' },
          { title: 'Anzahl und Verteilung', body: 'Jede Bewertung nennt Anzahl und Verteilung. Bei zu wenigen Bewertungen wird kein Durchschnitt berechnet.' },
        ],
      },
      discussion: {
        lead: 'Probleme bei der Integration werden unter der jeweiligen Version diskutiert.',
        rest: 'Auch nach einem Versionswechsel bleiben Diskussionen bei der alten Version.',
      },
      lists: {
        eyebrow: 'Liste',
        headline: 'Alles, was ein Projekt verwendet, kommt auf eine Liste.',
        lead: 'Eine Liste kann APIs, Clientbibliotheken, MCP-Server und Skills enthalten. Kommentiere jeden Eintrag, sortiere die Liste und exportiere sie. Du kannst festlegen, wer sie sehen darf.',
        tiles: [
          { kind: 'apis', rel: 'API', name: 'Wetterdaten-API', line: 'Quelle der Vorhersagedaten' },
          { kind: 'apis', rel: 'API', name: 'Kartenkachel-API', line: 'Kartenhintergrund der Anwendung' },
          { kind: 'software', rel: 'Software', name: 'Clientbibliothek', line: 'Ruft die Wetterdaten-API aus einer Anwendung auf' },
          { kind: 'mcp', rel: 'MCP-Server', name: 'Wetter-MCP-Server', line: 'Ermöglicht KI-Agenten, das Wetter abzufragen' },
          { kind: 'skills', rel: 'Skill', name: 'Skill zur Reiseplanung', line: 'Passt den Tagesplan an das Wetter an' },
        ],
        caption: 'Beispielliste für ein erfundenes Projekt. Alle Namen sind Beispiele.',
      },
      zone: {
        eyebrow: 'Community und Zone',
        headline: 'Richte eine Zone für eine bestimmte Art von API ein.',
        lead: 'Communities können eigene Regeln festlegen und Fakten in Einträgen selbst einordnen. Mit einer Zone lässt sich eine eigene API-Verzeichniswebsite einrichten, deren Daten weiterhin aus demselben Graphen stammen.',
        link: 'Das Zone-Modul ansehen',
      },
      closing: 'Jede Bewertung und Diskussion nennt klar ihren Bezug.',
    },
    publishing: {
      hero: {
        headline: 'Suche zuerst, bevor du etwas hinzufügst.',
        lede: 'Jeder neue oder berichtigte Eintrag wird als Vorschlag eingereicht. Er nennt die Änderung und ihre Grundlage, wird von einem Menschen geprüft und erst danach übernommen. Ein Bestätigungsbeleg bleibt erhalten. Menschen, Anbieter und KI-Agenten nutzen denselben Ablauf.',
      },
      path: {
        eyebrow: 'Ablauf',
        headline: 'So wird ein Eintrag angelegt.',
        rows: [
          { title: 'Zuerst suchen', body: 'Bevor das Formular erscheint, suche nach Namen, Aliasen und Kennungen. Ist der Eintrag vorhanden, ergänze einen Alias oder eine Version, statt einen neuen anzulegen.' },
          { title: 'Einordnen', body: 'Die einreichende Person gibt an, ob es eine neue API, eine neue Version oder ein Teil einer Version ist. Ein Modell kann Vorschläge machen, entscheidet aber nicht.' },
          { title: 'Belege hinzufügen', body: 'Jeder Vorschlag nennt die genaue Stelle, die Quelle und die Methode.' },
          { title: 'Von Menschen prüfen lassen', body: 'Prüfer entscheiden erst nach Sichtung der Belege. Ändert sich der Eintrag nach dem Einreichen, wird der Vorschlag erneut geprüft.' },
          { title: 'Zunächst als ungeprüft kennzeichnen', body: 'Neue Einträge können öffentlich sein, sind aber als ungeprüft gekennzeichnet und nennen für jedes Feld eine Quelle. Vor der Prüfung erscheinen sie nicht in vertrauenswürdigen Exporten und Empfehlungen.' },
          { title: 'Bestätigung festhalten', body: 'Nach der Übernahme bleibt eine Bestätigung erhalten. Änderungen werden berichtigt, nicht aus dem Verlauf entfernt.' },
        ],
      },
      proposal: {
        eyebrow: 'Vorschlagsformat',
        headline: 'KI-Agenten nutzen dasselbe Vorschlagsformat wie Menschen.',
        lead: 'Offizielle und externe Agenten reichen dieselbe Art von Vorschlag ein. Ihre Ausgabe kann sich nicht selbst bestätigen, auch nicht bei einem erneuten Import.',
        rows: [
          { title: 'Ziel und Version', body: 'Der genaue Eintrag, der geändert werden soll, und die gelesene Fassung.' },
          { title: 'Änderung', body: 'Was hinzugefügt, geändert oder entfernt werden soll.' },
          { title: 'Belege', body: 'Quelle und Fundstelle, die die Änderung stützen.' },
          { title: 'Methode', body: 'Wie das Ergebnis zustande kam und welche Eingaben verwendet wurden.' },
          { title: 'Konfidenz', body: 'Die vom Agenten angegebene Sicherheit. Das ist seine Aussage, keine Garantie von REZICS.' },
          { title: 'Offenlegung', body: 'Kennzeichnet die Automatisierung und nennt die verantwortliche Person.' },
        ],
      },
      paid: {
        lead: 'Entscheidungen sind nicht käuflich.',
        rest: 'Sponsoring oder Abonnements beeinflussen keine Prüfergebnisse.',
      },
      provider: {
        eyebrow: 'Anbieter',
        headline: 'Auch Anbieter nutzen denselben Ablauf.',
        lead: 'Anbieter können belegen, dass ihnen ein Namensraum gehört. Ihre Angaben werden als Angaben des Anbieters gekennzeichnet. Sie bleiben Aussagen. Messwerte und Diskussionen der Community bleiben ebenfalls im Eintrag sichtbar.',
        more: 'Wenn ein Anbieter seine Aussage zurückzieht, wird nur seine eigene Grundlage entfernt. Importierte Fakten nennen Quelle und Lizenz. Spätere Importe überschreiben keine Felder, die bestätigt und geschützt wurden.',
      },
      closing: 'Neue Einträge und Berichtigungen werden von Menschen geprüft.',
    },
  },
} satisfies MiniSite<ApisStrings>;
