import type { Module } from './schema';

/** The five engine modules, in DESIGN.md's order. */
export const modules: Module[] = [
  {
    id: 'universal-index',
    name: 'Universeller Index',
    summary: 'Eine Identität pro Werk, sprachübergreifend verknüpft',
    meta: {
      title: 'Universeller Index: Jedes Werk wird einmal erfasst',
      description:
        'Der universelle Index von REZICS gibt jedem Werk, jeder Software und jedem Kreativen eine Identität. Namen in allen Sprachen, Ausgaben, Mitwirkende und Beziehungen sind damit verknüpft.',
    },
    hero: {
      headline: 'Jedes Werk wird einmal erfasst.',
      lede: 'Werke, Software, Personen und Organisationen haben jeweils eine Identität im gemeinsamen Graphen. Namen in allen Sprachen, Ausgaben, Mitwirkende und Beziehungen gehören dazu. Jede Community und jede Website greift auf dieselben Daten zu.',
    },
    points: [
      {
        title: 'Auch ohne Originalkenntnisse verständlich',
        body: 'Die Werkdaten bleiben in ihrer ursprünglichen Sprache erhalten und erscheinen in deiner Lesesprache. Du findest sie über Übersetzungen, alternative Namen oder die Aussprache. Gibt es noch keine Übersetzung, wird der Originaltext gekennzeichnet, statt einen Namen zu erraten.',
      },
      {
        title: 'Ausgaben klar unterschieden',
        body: 'Druckausgaben, Übersetzungen, Sammelbände, Regionalausgaben und Veröffentlichungen für einzelne Plattformen erhalten jeweils einen eigenen Eintrag. Ein Veröffentlichungseintrag hält nur fest, was tatsächlich erschienen ist. Spätere Übersetzungen werden separat erfasst und mit ihrer Vorlage verknüpft.',
      },
      {
        title: 'Mitwirkende und Beziehungen',
        body: 'Personen und Organisationen werden mit ihrer jeweiligen Rolle als Mitwirkende aufgeführt. Adaptionen, Fortsetzungen, Reihen und Abhängigkeiten sind gerichtete Beziehungen mit Quellenangabe. Gleiche Namen werden nicht als dasselbe behandelt.',
      },
      {
        title: 'Vollständige Filter',
        body: 'Verfügbare Felder lassen sich kombinieren. Die Ergebnisse zeigen eine verlässliche Anzahl und lassen sich bis zum letzten Eintrag durchblättern. Häufige Bedingungen kannst du als Ansicht speichern und anschließend abonnieren.',
      },
      {
        title: 'Korrekturen und Zusammenführungen',
        body: 'Doppelte Einträge werden mit einem belegten Zusammenführungsplan bearbeitet. Vorher siehst du alle betroffenen Bewertungen, Bibliothekseinträge und Wiki-Fakten. Alte Adressen bleiben gültig und fehlerhafte Zusammenführungen lassen sich rückgängig machen.',
      },
    ],
    statement: 'Korrigiere einen Eintrag in einer beliebigen Sprache. Jede Seite, die ihn anzeigt, wird aktualisiert.',
    usedBy: ['books', 'anime', 'visual-novels', 'software'],
  },
  {
    id: 'community',
    name: 'Community',
    summary: 'Community, Diskussionen, Bewertungen und Listen',
    meta: {
      title: 'Community: Diskussionen, Bewertungen und Listen',
      description:
        'In REZICS ist eine Community rund um eine Geschichte, eine Sprache oder eine Idee organisiert. Diskussionen, Bewertungen und Listen sind direkt mit den Werken verknüpft. Deine Identität und dein Ruf begleiten dich durch jede Community.',
    },
    hero: {
      headline: 'Diskussionen, Bewertungen und Listen gehören zum Werk.',
      lede: 'Eine Community kommt rund um eine Geschichte, eine Sprache oder eine Idee zusammen. Mitglieder diskutieren und bewerten Werke und erstellen Listen dazu. Deine Bibliothek, Werke und dein Ruf begleiten dich durch alle Communities.',
    },
    points: [
      {
        title: 'Community',
        body: 'Jede Community hat eigene Mitglieder, Rollen und Regeln. Die Regeln lassen sich in jeder Sprache der Community verfassen. Die Community gehört auch ihren Mitgliedern, daher kann ihr Besitzer sie nicht beliebig schließen oder löschen.',
      },
      {
        title: 'Folgen und beitreten sind verschieden',
        body: 'Folgen ist einseitig und erfordert keine Zustimmung. Beim Beitritt wirst du Mitglied und kannst dich beteiligen. Für beides kannst du Benachrichtigungen einstellen: alle, ausgewählte oder keine.',
      },
      {
        title: 'Bewertungen nennen ihr Werk',
        body: 'Jede Bewertung nennt die Frage und das Werk. Die Bewertung einer Folge fließt nicht in die ganze Staffel ein, und die Bewertung einer Übersetzung nicht in die Geschichte selbst.',
      },
      {
        title: 'Listen enthalten die Werke selbst',
        body: 'Eine Liste enthält Werke, nicht bloß Buchtitel, die in Beiträgen erwähnt werden. Bücher, Anime und Spiele lassen sich gemeinsam sortieren, kommentieren und als ganze Liste exportieren.',
      },
      {
        title: 'Deine Identität bleibt deine',
        body: 'Deine Bibliothek, Listen, Werke und dein Ruf gehören zu einer Identität und bleiben nicht auf eine Community beschränkt. Andere können dir folgen wie einer Community.',
      },
    ],
    statement: 'Eine Community gehört ihren Mitgliedern. Du selbst bleibst du.',
    usedBy: ['anime', 'manga', 'games', 'visual-novels'],
  },
  {
    id: 'zones',
    name: 'Zones',
    summary: 'Jede Community kann eine vollständige Website einrichten',
    meta: {
      title: 'Zones: Jede Community kann eine eigene Website haben',
      description:
        'Eine Zone ist eine vollständige Website auf den gemeinsamen Daten von REZICS. Die Community bestimmt Routen, Navigation, Seiten und Gestaltung. Auch das Wiki+ eines Werks ist eine Zone. Korrekturen fließen in denselben Graphen zurück.',
    },
    hero: {
      headline: 'Jede Community kann eine eigene Website haben.',
      lede: 'Eine Zone ist eine vollständige Website mit Startseite, Dokumenten, Index, Detailseiten und Navigation. Die Community legt alle Routen fest. Inhalte werden nicht kopiert, und jede Korrektur auf der Website fließt in denselben Graphen zurück.',
    },
    points: [
      {
        title: 'Du bestimmst die Routen',
        body: 'Die Routentabelle einer Zone verwaltet alle Pfade unter ihrer Adresse, auch die Startseite. Plattformseiten überschreiben keine Seiten der Zone.',
      },
      {
        title: 'Wiki+',
        body: 'Das Wiki jedes Werks ist eine Zone mit Seiten zu Personen, Orten, Zeitlinien, Kapitelübersichten und Beziehungen. Infoboxen greifen direkt auf die Fakten im Graphen zu. Leser sehen nur die Inhalte bis zu ihrer Lesestelle.',
      },
      {
        title: 'Gestaltung und Layout',
        body: 'Die Gestaltung bestimmt Marke und Layout. Identität, Suche, Sprache, Quellenangaben und Barrierefreiheit bleiben geschützt und können durch kein Design entfernt werden.',
      },
      {
        title: 'Überarbeiten, Vorschau und Wiederherstellung',
        body: 'Eine Website-Revision umfasst Routen, Navigation, Vorlagen, Gestaltung und Abfragen. Sie lässt sich in der Vorschau ansehen, prüfen, wiederherstellen und exportieren. Menschen und KI-Agenten bearbeiten Websites über dieselbe API.',
      },
      {
        title: 'Eine Identität, viele Websites',
        body: 'Eine Zone kann mehrere Arten verbinden, und eine Art kann auf vielen Zones erscheinen. Chinesische und japanische Websites für Visual Novels nutzen dieselben Identitäten und wählen jeweils eigene Namen, Texte und Reihenfolgen.',
      },
    ],
    statement: 'Jede Website sieht anders aus. Dahinter steht dieselbe Engine.',
    usedBy: ['books', 'anime', 'manga', 'visual-novels'],
  },
  {
    id: 'create',
    name: 'Erstellen und Veröffentlichen',
    summary: 'Schreiben, Lesen, Ausgaben und Veröffentlichungen',
    meta: {
      title: 'Erstellen und Veröffentlichen: vom ersten Kapitel bis zum Verkauf',
      description:
        'Autoren entwerfen, planen und veröffentlichen Kapitel in REZICS, laden Mitwirkende zur Bearbeitung ein und halten die Welt ihres Werks neben dem Manuskript fest. E-Books und kleine Spiele vertreiben sie als DRM-freie Dateien direkt.',
    },
    hero: {
      headline: 'Vom ersten Kapitel bis zur Veröffentlichung an einem Ort.',
      lede: 'Autoren entwerfen, planen und veröffentlichen Kapitel. Leser lesen an der Stelle weiter, an der sie aufgehört haben. Übersetzungen, Rechte und jede Veröffentlichung werden getrennt erfasst.',
    },
    points: [
      {
        title: 'Manuskripte gehen nicht verloren',
        body: 'Jedes Speichern erstellt eine wiederherstellbare Revision. Das ganze Werk samt Revisionen, Notizen und Weltinformationen lässt sich vollständig exportieren und wieder importieren.',
      },
      {
        title: 'Planung und Zusammenarbeit',
        body: 'Der Server veröffentlicht Kapitel nach dem Zeitplan und der Zeitzone des Autors, auch wenn der Browser geschlossen ist. Mitwirkende erhalten getrennte Rechte zum Lesen, Kommentieren, Bearbeiten oder Veröffentlichen.',
      },
      {
        title: 'Weltinformationen neben dem Manuskript',
        body: 'Personen, Orte, Organisationen, Ereignisse und weitere Informationen bleiben privat neben dem Manuskript. Ausgewählte Seiten lassen sich im Wiki des Werks veröffentlichen, ohne den privaten Bearbeitungsverlauf freizugeben.',
      },
      {
        title: 'Übersetzungen gehören den Übersetzern',
        body: 'Ein Werk kann mehrere Übersetzungen haben, die jeweils ihren Übersetzern gehören. Nutzerübersetzungen sind standardmäßig privat. Sie dürfen nur veröffentlicht werden, wenn das Original gemeinfrei ist oder eine freie Lizenz Übersetzungen erlaubt, der Autor zustimmt oder eine Übersetzungslizenz öffentlich erteilt hat.',
      },
      {
        title: 'Direkt veröffentlichen',
        body: 'REZICS vertreibt für vertraglich gebundene Kreative EPUB- und PDF-E-Books sowie kleine Spiele mit geklärten Rechten, alle ohne DRM. Leser können vorab eine Leseprobe ansehen und erhalten gemäß den Bedingungen Updates, Rückerstattungen und erneute Downloads.',
      },
    ],
    statement: 'Ein Upload zu REZICS überträgt keine Urheberrechte an REZICS.',
    usedBy: ['books', 'manga', 'games', 'visual-novels'],
  },
  {
    id: 'trust',
    name: 'Vertrauen',
    summary: 'Quellen, Rechte, Moderation und Datenschutz',
    meta: {
      title: 'Vertrauen: Quellen, Rechte, Moderation und Datenschutz',
      description:
        'Jede Aussage in REZICS nennt Quelle und Beleg. Der Einsatz von KI wird offengelegt, Meldungen sind auch ohne Konto möglich, Moderationsentscheidungen lassen sich anfechten und private Entwürfe sowie Leseverläufe bleiben privat.',
    },
    hero: {
      headline: 'Informationen haben Quellen, Entscheidungen Gründe.',
      lede: 'Jede Information nennt ihre Quelle, jedes Recht seine Grundlage und jede Moderationsentscheidung die Regel, auf der sie beruht. Deine privaten Entwürfe und Leseverläufe sind standardmäßig für andere Nutzer nicht sichtbar.',
    },
    points: [
      {
        title: 'Quellen und Belege',
        body: 'Zu jeder Aussage werden Quelle, Beleg und Prüfstatus festgehalten. Geprüft und umstritten können zugleich zutreffen. Unbekanntes wird als unbekannt gekennzeichnet.',
      },
      {
        title: 'KI und Automatisierung',
        body: 'Bei Texten, Bildern und Übersetzungen wird angegeben, ob KI eingesetzt und der Inhalt von Menschen geprüft wurde. Leser können danach filtern. Die Betreiber automatisierter Abläufe legen ihre Identität offen. KI-Erkennung allein führt zu keiner Entscheidung.',
      },
      {
        title: 'Meldungen und Einsprüche',
        body: 'Meldungen sind auch ohne Konto möglich. Meldung, Beleg, Entscheidung und Aufhebung werden getrennt erfasst. Jede Moderationsentscheidung kann angefochten und von einem Menschen erneut geprüft werden.',
      },
      {
        title: 'Rechte einzeln erfassen',
        body: 'Jede Lizenz nennt die erklärende Person, den Zeitpunkt und ihren Umfang. Eine Beschwerde zu Rechten gilt zunächst als Vorwurf. Erst nach menschlicher Prüfung wird entschieden, welche Inhalte und Nutzungen betroffen sind.',
      },
      {
        title: 'Datenschutz',
        body: 'Private Entwürfe und Leseverläufe bleiben privat. Auch wenn du die Verwaltung deiner öffentlichen Identität oder Community abgibst, werden deine Leseverläufe nicht mitgeteilt.',
      },
    ],
    statement: 'Die Regeln gelten auf dem Server. Website, App und KI-Agent erhalten dasselbe Ergebnis.',
    usedBy: ['visual-novels', 'mcp', 'skills', 'apis'],
  },
];
/** Shared labels for the five-module navigation at the end of every module page. */
export const moduleRing = { label: 'Fünf Module', current: 'Du bist hier', overview: 'Zur Modulübersicht' };
