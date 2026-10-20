import type { Site } from './schema';

export const site: Site = {
  name: 'REZICS',
  url: 'https://about.rezics.com',
  productUrl: 'https://rezics.com',
  meta: {
    title: 'REZICS | Offener universeller Index und Community',
    description:
      'Bücher, Anime, Manga, Spiele, Software, Visual Novels, MCP-Server, Skills und APIs haben in REZICS jeweils eine Identität. Menschen diskutieren darüber, bewerten sie, erstellen Listen und schreiben Wiki+.',
  },
  nav: {
    products: 'Produkte',
    engine: 'Module',
    developers: 'Entwickler',
    roadmap: 'Roadmap',
    menu: 'Menü',
    close: 'Schließen',
    skip: 'Zum Hauptinhalt',
    action: 'Zu REZICS',
    productsIntro: {
      title: 'Neun Arten, ein Index',
      body: 'Jede hat ihre eigene Seite. Darunter liegen dieselben Teile und derselbe Graph.',
      all: 'Alle ansehen',
    },
    engineIntro: {
      title: 'Fünf Module, fünfzehn Teile',
      body: 'Jede Art besteht aus diesen Modulen. Communities und Entwickler bauen damit ebenfalls.',
      all: 'Das Ganze ansehen',
    },
    groups: { works: 'Werke und Software', agents: 'KI-Agenten und Entwickler' },
  },
  home: {
    hero: {
      headline: 'Alles, was dir wichtig ist, in einem Index.',
      lede: 'Bücher, Anime, Manga, Spiele, Software und Visual Novels sowie Werkzeuge für KI-Agenten. Jedes Ding hat eine Identität. Diskussionen, Bewertungen und Wiki gehören dazu.',
      primary: 'Zu REZICS',
      imageAlt: 'Neun farbige Papierstücke liegen auf warmweißem Papier übereinander. Fensterlicht fällt von links oben darauf.',
    },
    kinds: {
      eyebrow: 'Neun Arten',
      headline: ['Jede Art hat ihren eigenen Platz;', 'dahinter stehen derselbe Index und dasselbe Konto.'],
      lines: {
        anime: 'Staffeln, Folgen und Sendetermine',
        manga: 'Bände, Kapitel und Übersetzungen',
        software: 'Kompatibilität und Bezugsquellen',
      },
    },
    statement: {
      text: 'Ein Roman, seine Manga-, Anime- und Spieladaption,',
      sub: 'hat in REZICS vier Identitäten in einem Beziehungsgraphen. Wird ein Fakt in einer Sprache korrigiert, aktualisieren sich alle Seiten, die ihn verwenden.',
    },
    identity: {
      eyebrow: 'Universeller Index',
      headline: 'Namen in verschiedenen Sprachen verweisen auf dieselbe Identität.',
      body: [
        'Ein Werk hat auf Chinesisch, Japanisch und Englisch je einen Namen. In REZICS verweisen alle auf dieselbe Identität. Ausgaben, Übersetzungen und Adaptionen bleiben getrennt und miteinander verknüpft.',
        'Deine Bibliothek, Bewertungen und Fortschritte gehören zu dieser Identität. Auch beim Wechsel der Sprache siehst du denselben Eintrag.',
      ],
      link: 'Universellen Index ansehen',
      imageAlt: 'Fünf gleich große Papierstücke in verschiedenen Farben liegen leicht versetzt übereinander.',
    },
    community: {
      eyebrow: 'Communities und Websites',
      headline: 'Rund um Werke zusammenkommen und eine eigene Website haben.',
      body: [
        'Diskussionen, Bewertungen und Listen sind direkt mit dem Werk verknüpft. In einer Community kommen Menschen rund um Geschichten, Sprachen oder gemeinsame Interessen zusammen. Jede hat eigene Mitglieder, Regeln und Moderation.',
        'Mit einer Zone baust du für deine Community eine vollständige Website mit eigenen Seiten, Navigation und Gestaltung. Die Daten stammen weiterhin aus demselben Graphen.',
      ],
      link: 'Communities und Websites ansehen',
      imageAlt: 'Ein dunkelpetrolfarbenes Blatt ist zu einem kleinen Haus gefaltet. Daneben liegen einige kleine farbige Papierstücke.',
    },
    platform: {
      eyebrow: 'Fünf Module',
      headline: 'Eine Plattform, zugleich Bibliothek, Shop, Datenbank, Forum und Wiki.',
      lead: 'Alle neun Arten bestehen aus denselben fünf Modulen. Eine neue Art lässt sich durch Konfiguration ergänzen, ohne eine eigene Anwendung zu bauen.',
      modules: {
        'universal-index': 'Eine Identität, alle Ausgaben, sprachübergreifende Namen und Beziehungen',
        community: 'Community, Diskussionen, Bewertungen, Listen und Folgen',
        zones: 'Jede Community baut ihre Website und ihr Wiki+ auf dem gemeinsamen Graphen',
        create: 'Schreiben, Lesen, Ausgaben, Veröffentlichung und Lizenzen',
        trust: 'Quellen und Belege, Rechte, Moderationsregeln und Datenschutz',
      },
    },
    agents: {
      eyebrow: 'Entwickler und KI-Agenten',
      headline: 'Dieselbe API für die Website und deine Anwendung.',
      lead: 'Mit API, MCP-Server und SDK können deine Anwendung oder dein Agent Daten lesen, deine Bibliothek verwalten und Vorschläge einreichen. Agenten handeln mit deinen Berechtigungen. Änderungen werden erst nach einer Prüfung durch Menschen übernommen.',
      link: 'Ressourcen für Entwickler ansehen',
      code: ['# Katalog durchsuchen, keine Anmeldung nötig', 'curl -G \\', '  "$REZICS_API/v1/search/catalogue" \\', '  --data-urlencode "q=Light Novel" \\', '  -d language=de -d limit=5'].join('\n'),
      codeLabel: 'Beispiel einer curl-Anfrage für die REZICS-Katalogsuche',
      caption: 'Setze REZICS_API auf die URL des API-Dienstes. language legt die Anzeigesprache der Suchergebnisse fest.',
    },
    principles: {
      eyebrow: 'Grundsätze',
      headline: 'Was wir allen Nutzern zusagen.',
      items: [
        { title: 'Offener Quellcode', body: 'REZICS veröffentlicht seinen Quellcode unter AGPL-3.0. Jeder kann ihn lesen, selbst betreiben und verbessern.' },
        { title: 'Keine Werbetracker', body: 'Wir verwenden keine Werbetracker und verkaufen keine personenbezogenen Daten.' },
        { title: 'Private Daten bleiben aus dem Training', body: 'Private Entwürfe und Leseverläufe werden standardmäßig nicht zum Training von KI-Modellen verwendet. Dafür ist eine gesonderte, ausdrückliche Zustimmung nötig.' },
        { title: 'Deine Daten bleiben portabel', body: 'Bibliothek, Listen und Entwürfe lassen sich exportieren. Die grundlegende Teilnahme und der Export sind kostenlos.' },
        { title: 'Automatisierung ist gekennzeichnet', body: 'Offizielle und externe automatisierte Aktionen kennzeichnen sich öffentlich als automatisiert und nennen den verantwortlichen Betreiber.' },
      ],
    },
    finale: {
      headline: 'Bring mit, was dir wichtig ist.',
      body: 'Erstelle ein Konto. Deine Bibliothek, Listen und Bewertungen liegen dann im selben Graphen.',
    },
  },
  engine: {
    meta: {
      title: 'REZICS-Engine: Module und Teile',
      description:
        'Alle neun Arten in REZICS bestehen aus denselben Teilen aus fünf Modulen. Sieh dir an, welche acht Teile jede Art nutzt und wofür die einzelnen Module zuständig sind.',
    },
    hero: {
      headline: 'Eine Engine für neun Arten.',
      lede: 'Für eine neue Art brauchst du Begriffe, Zuordnungen, Anfangsdaten und eine Zone, keine neue Anwendung. Jedes Teil wird einmal umgesetzt. Die zehnte Art nutzt dieselben Teile wie die erste.',
    },
    parts: {
      headline: '15 Komponenten, acht pro Art.',
      body: 'Jede Art nutzt acht Komponenten. Identität steht immer an erster Stelle. Wechselt die Art, bleiben gemeinsame Komponenten erhalten. Nur die abweichenden werden ersetzt.',
      pick: 'Art auswählen',
    },
    modules: {
      headline: 'Die Teile stammen aus fünf Modulen.',
      body: 'Der universelle Index verwaltet Identitäten, Community den Austausch, Zones die Websites, Erstellen und Veröffentlichen die Entstehung und Verbreitung von Werken, Vertrauen Quellen, Rechte und Datenschutz.',
    },
  },
  kindPage: {
    featuresHeading: 'Was du hier tun kannst',
    partsHeading: 'Aus diesen acht Teilen',
    partsCaption: 'Jede Art wählt aus denselben Teilen.',
    connectionsHeading: 'Verwandte Arten',
    next: 'Nächste Art',
  },
  modulePage: { usedByHeading: 'Am häufigsten verwendet von', next: 'Nächstes Modul' },
  developers: {
    meta: {
      title: 'REZICS für Entwickler: API und MCP',
      description:
        'Jede Funktion in REZICS ist zuerst eine API-Operation. Hier findest du die OpenAPI-Dokumentation, den MCP-Server, OAuth-Anwendungen, das lokale Wiki-Werkzeug und den offenen Quellcode.',
    },
    hero: {
      headline: 'Was die Website kann, kann auch die API.',
      lede: 'Jede Funktion ist zuerst eine API-Operation, die Website nur einer von mehreren Clients. Deine App, Skripte und KI-Agenten nutzen dieselben Operationen und Berechtigungen und erhalten dieselben Ergebnisse.',
    },
    facts: [
      {
        title: 'HTTP API',
        body: 'Pfade, Parameter und alle Antworttypen sind in der öffentlichen OpenAPI-Dokumentation definiert. Fehler folgen dem Format Problem Details mit festen Codes, die Programme direkt auswerten können.',
      },
      {
        title: 'MCP-Server',
        body: 'Der entfernte MCP-Server stellt API-Operationen als Werkzeuge bereit. Jeder Aufruf durchläuft denselben HTTP-Prozess mit Berechtigungen, Belegen und Ratenlimits. KI-Agenten können sich selbst als Client registrieren. Die Registrierung gewährt keinen Zugriff auf Ressourcen.',
      },
      {
        title: 'TypeScript SDK',
        body: 'Die Client-Typen stammen direkt aus der API-Definition. Felder, Ergebnisse und Fehler entsprechen dem Server.',
      },
      {
        title: 'OAuth-Anwendung',
        body: 'Externe Anwendungen erhalten über den Authorization-Code-Flow mit PKCE Zugriff. Berechtigungsbereiche sind einzeln aufgeführt und lassen sich jederzeit widerrufen.',
      },
      {
        title: 'Lokales Wiki-Toolkit',
        body: 'Wer einen Text besitzt, kann TXT-, EPUB- und Visual-Novel-Skripte lokal mit einem KI-Agenten seiner Wahl lesen und Figuren, Orte und Ereignisse kapitelweise mit Quellenangaben als Vorschläge einreichen. Das Werkzeug steht unter Apache-2.0, benötigt kein REZICS-Konto und sendet keine Telemetriedaten.',
      },
      {
        title: 'Open Source',
        body: 'Der Quellcode des Plattformkerns steht unter AGPL-3.0. Du kannst ihn untersuchen, selbst betreiben und Änderungen vorschlagen.',
      },
    ],
    sample: {
      caption: 'Die öffentliche Suche benötigt kein Token. Bei „Light Novel“ als Suchbegriff enthält die Antwort die sortierten Treffer, die Genauigkeit der Anzahl und den Cursor für die nächste Seite.',
      language: 'sh',
      code: [
        'curl -G "$REZICS_API/v1/search/catalogue" \\',
        '  --data-urlencode "q=Light Novel" \\',
        '  -d language=de \\',
        '  -d limit=5',
      ].join('\n'),
    },
    statement: 'Ein Klick und ein API-Aufruf führen dieselbe Operation aus.',
  },
  roadmap: {
    meta: {
      title: 'REZICS-Roadmap',
      description:
        'REZICS öffnet eine Community nach der anderen. Die Engine bleibt dieselbe. Der Anfang sind Light Novels und Visual Novels, danach folgen Wiki+ für jedes Werk, Fortsetzungsromane, weitere Arten, Veranstaltungen und Orte sowie der Direktvertrieb.',
    },
    hero: {
      headline: 'Von Light Novels zu jeder Art von Werk.',
      lede: 'REZICS öffnet eine Community nach der anderen. Jede baut auf demselben Graphen und denselben Teilen auf. Identitäten und Beziehungen aus dem vorherigen Schritt werden weiterverwendet.',
    },
    steps: [
      {
        title: 'Ein Graph, eine Engine',
        body: 'Jedes Werk, jede Person und jede Organisation hat eine Identität im gemeinsamen Graphen. Jede Funktion wird einmal umgesetzt und von den passenden Arten genutzt.',
      },
      {
        title: 'Light Novels und Visual Novels',
        body: 'Zuerst für Leser, die Reihen über Sprachgrenzen hinweg verfolgen, und Spieler, die eine spielbare Ausgabe suchen. Beide nutzen denselben Katalog und dieselbe Bibliothek mit unterschiedlichen Ansichten. Jedes Werk hat ein Wiki. Die Oberfläche ist in acht Sprachen verfügbar und funktioniert auf Smartphone und Computer.',
      },
      {
        title: 'Wiki+ für jedes Werk',
        body: 'Derselbe Erstellungsablauf lässt sich auf jedes Werk anwenden. Textbesitzer reichen mit ihrem KI-Agenten kapitelweise Vorschläge ein. Geprüfte Fakten erscheinen in der Wiki-Zone des Werks. Leser sehen die Inhalte passend zu ihrem Fortschritt.',
      },
      {
        title: 'Fortsetzungsromane und Kreative',
        body: 'Kleine Communities für Fortsetzungsromane und Visual-Novel-Kreative bringen ihre Werke und Veröffentlichungstermine mit. Autoren pflegen die Welt ihres Werks neben dem Manuskript. Leser diskutieren direkt bei den Kapiteln.',
      },
      {
        title: 'Eine Art nach der anderen',
        body: 'Kataloge für Science-Fiction und Fantasy, interaktive Romane, MCP-Server und Agent-Skills sowie Modelle und Bewertungen kommen hinzu. Für jede Art braucht es Begriffe, Zuordnungen, Anfangsdaten und eine Zone. Das Backend erhält dafür keinen eigenen Code.',
      },
      {
        title: 'Begegnungen vor Ort',
        body: 'Messen, Signierstunden und Veröffentlichungstermine werden mit den Werken verknüpft. Öffentliche Drehorte lassen sich passend zu deinem Fortschritt anzeigen, damit nichts vorweggenommen wird.',
      },
      {
        title: 'Direktvertrieb',
        body: 'REZICS vertreibt für vertraglich gebundene Kreative DRM-freie E-Books und kleine Spiele. Leser zahlen einmal und können sie gemäß den Kaufbedingungen erneut herunterladen. Kreative sehen jeden Abzug.',
      },
      {
        title: 'Websites für Communities',
        body: 'Community-Betreiber und kleine Verlage führen mit einer Zone vollständige Websites, importieren Daten und verwalten Veröffentlichungen. Entwickler nutzen die API und den Update-Stream.',
      },
    ],
    statement: 'Mit jeder neuen Community entstehen weitere Verbindungen, die die nächste direkt nutzen kann.',
  },
  product: {
    headline: 'Neun Arten von Werken auf REZICS.',
    body: 'Verfolge Bücher und Anime, halte deinen Spielfortschritt fest, schreibe Bewertungen und stelle Listen zusammen. Mit einer Zone baust du auch eine Website für deine Community.',
  },
  notFound: {
    meta: {
      title: 'Diese Seite wurde nicht gefunden',
      description:
        'Zu dieser Adresse gibt es keine Seite. Vielleicht ist sie falsch geschrieben oder wurde verschoben. Kehre zur REZICS-Startseite zurück und suche über die neun Arten und fünf Module weiter.',
    },
    eyebrow: '404',
    headline: 'Diese Seite ist nicht hier.',
    body: 'Vielleicht ist die Adresse falsch geschrieben oder die Seite wurde verschoben. Kehre zur Startseite zurück oder suche über die neun Arten weiter.',
    back: 'Zur Startseite',
    imageAlt: 'In die Mitte eines hellblauen Blatts ist ein Loch geschnitten, durch das das Papier darunter zu sehen ist.',
    restart: 'Über die neun Arten suchen',
  },
  ui: {
    pause: 'Animation anhalten',
    play: 'Animation abspielen',
    pick: 'Art wechseln',
  },
  footer: {
    tagline: 'Offener universeller Index und Community',
    sitemap: 'Sitemap',
    agents: 'KI-Agenten',
    source: 'Quellcode',
    sourceUrl: 'https://github.com/rezics/rezics-next',
    colophon: 'Diese Website analysiert keine Besuche und lädt keine Inhalte von Drittanbietern.',
    copyright: '© 2026 REZICS Inc.',
  },
};
