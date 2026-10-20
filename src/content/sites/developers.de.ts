// The developers site (design record in src/sites/developers/SITE.md, sources for every claim and
// sample in src/sites/developers/facts.md). Values under a `code` key are code, paths, tool names
// and field names: they are copied from the REZICS source and skipped by the copy rules.
import type { KindId, MiniSite } from '../schema';
import { site as shared } from '../site';

/** Languages used by the site's real code excerpts; `text` is plain. */
export type CodeLanguage = 'http' | 'json' | 'ts' | 'sh' | 'text';

export interface CodeSample {
  language: CodeLanguage;
  code: string;
}
/** A hairline row: title left, text right. */
export interface Row {
  title: string;
  body: string;
}
/** A row whose title is a field name, path or command (set in mono). */
export interface CodeRow {
  code: string;
  body: string;
}
/** A row with a plain title and the field name, path or command it is about. */
export interface NamedRow extends Row {
  code: string;
}
/** A section's meta label, heading and optional lead. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}
export interface Hero {
  headline: string;
  lede: string;
}
export interface Said {
  text: string;
  sub: string;
  note?: string;
}
export interface Shown {
  label: string;
  sample: CodeSample;
  caption?: string;
}
/** A photo row's text: eyebrow, heading and one paragraph or several. */
export interface Photo {
  label: string;
  headline: string;
  body: string[];
}

export type DevelopersStrings = {
  common: { nextSite: string; more: Head; closing: { title: string; body: string } };
  /** Descriptions of the paper still-lifes (SITE.md "Pictures"). */
  alts: Record<'hero' | 'mcp' | 'apps' | 'wiki' | 'zones', string>;
  landing: {
    hero: Hero;
    ways: Head & {
      person: { label: string; body: string };
      calls: Shown[];
      shared: Shown;
    };
    pages: Head & { lines: Record<string, string> };
    statement: Said;
    rules: Head & { rows: NamedRow[] };
    hubs: Head & { items: { kind: KindId; line: string }[] };
  };
  api: {
    hero: Hero;
    anatomy: Head & { request: CodeSample; caption: string; rows: NamedRow[] };
    replay: Head & { responses: Shown[] };
    sdk: Head & { sample: CodeSample; caption: string; openapi: string; code: { path: string } };
    reads: Head & { rows: CodeRow[] };
  };
  mcp: {
    hero: Hero;
    adapter: Photo;
    connect: Head & { rows: NamedRow[] };
    same: Head & { calls: Shown[]; shared: Shown; caption: string };
    tools: Head & {
      scopes: string;
      groups: { name: string; tools: { title: string; code: { tool: string; op: string; scopes: string[] } }[] }[];
    };
    limits: Head & { rows: Row[] };
  };
  apps: {
    hero: Hero;
    layers: Photo;
    each: Head & { rows: Row[] };
    authorize: Head & { sample: CodeSample; caption: string };
    consent: Head & { rows: { text: string; code: string }[]; note: string };
    revoke: Head & { rows: Row[] };
  };
  wiki: {
    hero: Hero;
    boundary: Photo;
    steps: Head & { sample: CodeSample; caption: string; rows: NamedRow[] };
    limits: Head & { rows: Row[] };
    statement: Said & { licence: string };
  };
  zones: {
    hero: Hero;
    theme: Photo;
    settings: Head & { tokens: CodeSample; caption: string };
    slots: Head & { pkg: CodeSample; caption: string };
    rules: Head & { rows: Row[] };
    review: Head & { rows: Row[] };
    statement: Said;
  };
  open: {
    hero: Hero & { link: string; href: string };
    licences: Head & { rows: { line: string; code: { name: string; paths: string } }[] };
    map: Head & { rows: (CodeRow & { licence: string })[] };
    run: Head & { blocks: { sample: CodeSample; caption: string }[] };
    statement: Said;
  };
};

const lines = (...l: string[]) => l.join('\n');

const strings: DevelopersStrings = {
  common: {
    nextSite: 'Nächste Website',
    more: { label: 'Entwickler', headline: 'Weitere Seiten' },
    closing: {
      title: 'Schreibe eigene Werkzeuge mit derselben API.',
      body: 'Lass dein Programm Werke, deine Bibliothek und Community-Daten lesen und schreiben. Jeder Vorgang folgt denselben Identitäts- und Berechtigungsregeln von REZICS.',
    },
  },
  alts: {
    hero: 'Auf warmweißem Papier führen drei Papierstreifen von oben, rechts und unten unter dasselbe dunkelblaugraue Blatt.',
    mcp: 'Durch eine Reihe runder Löcher in dunkelblaugrauem Papier läuft ein hellblauer Streifen abwechselnd hindurch.',
    apps: 'Vier quadratische Blätter liegen ineinander, vom dunkelblaugrauen außen bis zum kleinen hellblauen oben.',
    wiki: 'Ein ordentlicher Stapel dicker cremeweißer und hellblauer Blätter liegt neben drei schmalen dunkelblaugrauen Streifen.',
    zones: 'Dunkelblaugraues Papier ist zu einem kleinen Rahmen gefaltet. Hinter seinem Fenster steht ein hellblaues Blatt.',
  },

  landing: {
    hero: {
      headline: 'Jede Schaltfläche löst einen API-Vorgang aus.',
      lede: 'Die REZICS-Website verwendet dieselbe API. Dein Programm sendet HTTP-Anfragen, ein KI-Agent ruft Werkzeuge über den MCP-Server auf. Beide erreichen denselben Vorgang.',
    },
    ways: {
      label: 'Drei Wege',
      headline: 'Drei Wege hinein, dieselbe Antwort zurück.',
      lead: 'Wenn du in deiner Bibliothek auf „Bibliothek herunterladen“ klickst, sendet die Website diese Anfrage. Dein Programm und dein Agent senden dieselbe Anfrage, durchlaufen dieselben Prüfungen und erhalten denselben Export.',
      person: { label: 'Person', body: 'Klicke in deiner REZICS-Bibliothek auf „Bibliothek herunterladen“.' },
      calls: [
        {
          label: 'Programm',
          sample: { language: 'http', code: lines('GET /v1/me/library-export', '  ?actingSubject=…&limit=20', 'Authorization: Bearer …') },
        },
        {
          label: 'Agent',
          sample: {
            language: 'json',
            code: lines(
              '{',
              '  "name": "library_export",',
              '  "arguments": {',
              '    "query": {',
              '      "actingSubject": "…",',
              '      "limit": 20',
              '    }',
              '  }',
              '}',
            ),
          },
          caption: 'Parameter für tools/call. Du bestimmst die Identität.',
        },
      ],
      shared: {
        label: 'Derselbe Vorgang',
        sample: { language: 'text', code: lines('operationId', '  getV1MeLibrary-export', 'profile', '  rezics-library-export-v1') },
      },
    },
    pages: {
      label: 'Sechs Bereiche',
      headline: 'Sechs Dinge, die du brauchst',
      lead: 'Pfade, Felder und Befehle auf jeder Seite stammen aus dem REZICS-Quellcode.',
      lines: {
        api: 'Schreibvorgänge lassen sich sicher wiederholen. Fehler haben feste Codes.',
        'mcp-server': 'KI-Agenten verbinden sich über /mcp. Werkzeuge richten sich nach den Berechtigungen.',
        apps: 'Autorisierung per OAuth, jederzeit widerrufbar',
        'wiki-toolkit': 'Lokal auslesen und nur Vorschläge senden',
        zones: 'Ein eigenes Layout für die Community-Website erstellen',
        'open-source': 'Plattform unter AGPL-3.0, eigenständige Pakete unter Apache-2.0',
      },
    },
    statement: {
      text: 'Die REZICS-Website greift nicht direkt auf die Datenbank zu. Alle Lese- und Schreibvorgänge laufen über die API.',
      sub: 'Was auf der Website möglich ist, ist auch über die API möglich.',
    },
    rules: {
      label: 'Regeln',
      headline: 'Derselbe Weg, dieselben Regeln',
      rows: [
        { title: 'Dieselbe Identität', code: 'actingSubject', body: 'Bei jedem Schreibvorgang gibst du an, mit welcher Identität du handelst. Das Token wählt sie nicht für dich. Der Server prüft sie jedes Mal neu.' },
        { title: 'Dieselbe Berechtigungsgrenze', code: 'scope', body: 'Anwendungen und Agenten erhalten höchstens so viele Berechtigungen wie die Person selbst, meist weniger.' },
        { title: 'Derselbe Beleg', code: 'Idempotency-Key', body: 'Schreibvorgänge enthalten einen Idempotenzschlüssel. Wiederholst du eine Anfrage nach einer Zeitüberschreitung, erhältst du das ursprüngliche Ergebnis. Der Vorgang wird nicht doppelt ausgeführt.' },
        { title: 'Dieselben Fehlercodes', code: 'application/problem+json', body: 'Bei einem Fehler kommen Problemdetails mit einem festen Code zurück. Dein Programm reagiert auf den Code und muss keine Meldung auswerten.' },
      ],
    },
    hubs: {
      label: 'Verzeichnis',
      headline: 'Auch Werkzeuge anderer haben einen Eintrag',
      lead: 'REZICS führt auch MCP-Server, Skills und APIs anderer auf. Dazu gehören Versionen, Quellen, Messungen oder Nutzungsberichte, Bewertungen und Diskussionen.',
      items: [
        { kind: 'mcp', line: 'Verzeichnis der MCP-Server' },
        { kind: 'skills', line: 'Verzeichnis der Skills für KI-Agenten' },
        { kind: 'apis', line: 'Verzeichnis öffentlicher APIs' },
      ],
    },
  },

  api: {
    hero: {
      headline: 'Ein Buch als gelesen markieren: ein API-Vorgang.',
      lede: 'Wenn du ein Werk in deiner Bibliothek als „Gelesen“ markierst, sendet die Website die folgende Anfrage. Dein Programm sendet dieselbe Anfrage, erhält dasselbe Ergebnis und durchläuft dieselben Prüfungen.',
    },
    anatomy: {
      label: 'Schreiben',
      headline: 'Eine Schreibanfrage, Zeile für Zeile',
      request: {
        language: 'http',
        code: lines(
          'PUT /v1/works/{id}/reader-status',
          'Authorization: Bearer …',
          'Idempotency-Key: 7f3c2a9e-read',
          'Content-Type: application/json',
          '',
          '{',
          '  "actingSubject":',
          '    "https://rezics.com/id/…",',
          '  "expectedVersion": 3,',
          '  "status": "read",',
          '  "finishedOn": "2026-10-19"',
          '}',
        ),
      },
      caption: 'Versionsnummer, Datum und Idempotenzschlüssel sind Beispiele.',
      rows: [
        { code: '{id}', title: 'Der Pfad verweist auf ein Werk', body: 'Jedes Objekt auf REZICS hat eine feste Kennung mit dem Präfix https://rezics.com/id/. Sie bleibt über Sprachen und Websites hinweg gleich.' },
        { code: 'actingSubject', title: 'Identität angeben', body: 'Ein Konto kann für dich oder eine Organisation handeln. Bei jedem Schreibvorgang gibst du die verwendete Identität an. Der Server prüft ihre Berechtigungen vor der Ausführung.' },
        { code: 'Idempotency-Key', title: 'Anfragen sicher wiederholen', body: 'Jeder Schreibvorgang enthält einen Idempotenzschlüssel. Nach einer Zeitüberschreitung oder Verbindungsunterbrechung kannst du dieselbe Anfrage mit demselben Schlüssel wiederholen, ohne doppelt zu schreiben.' },
        { code: 'expectedVersion', title: 'Überschreiben verhindern', body: 'Wenn du Version 3 gelesen hast, gib Version 3 an. Hat jemand inzwischen etwas geändert, überschreibt dein Schreibvorgang die Änderungen nicht.' },
        { code: 'application/problem+json', title: 'Fehler enthalten Problemdetails', body: 'Bei einem Fehler ist der Code festgelegt. Dein Programm kann danach verzweigen, ohne den Meldungstext zu vergleichen.' },
      ],
    },
    replay: {
      label: 'Wiederholen',
      headline: 'Dieselbe Anfrage liefert bei einer Wiederholung dasselbe Ergebnis.',
      lead: 'Sendest du dieselbe Anfrage mit demselben Schlüssel erneut, gibt der Server das erste Ergebnis zurück. Die Version bleibt 4 und replayed wird true. Verwendest du denselben Schlüssel mit anderem Inhalt, kommt 409 reader_status_conflict zurück. Ist die Version nicht mehr 3, kommt 409 stale_reader_status zurück. Lies die aktuelle Version und sende die Änderung erneut.',
      responses: [
        {
          label: 'Erster Aufruf',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": false', '}') },
        },
        {
          label: 'Wiederholen',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": true', '}') },
        },
        {
          label: 'Version veraltet',
          sample: { language: 'json', code: lines('409', '{', '  "status": 409,', '  "code":', '    "stale_reader_status"', '}') },
        },
      ],
    },
    sdk: {
      label: 'Typen',
      headline: 'API und Typen aus derselben Definition',
      lead: 'Die REZICS-Website ruft die API mit TypeScript auf. Die Typen für Anfragen und Antworten stammen direkt aus den Routendeklarationen des Servers. Ändert sich ein Feldname oder kommt ein Fehlercode hinzu, erfährt es der aufrufende Code schon beim Kompilieren. Das TypeScript-SDK wird aus derselben Definition erstellt und verwendet dieselben Typen wie die Website.',
      sample: {
        language: 'ts',
        code: lines(
          'main().v1',
          '  .works({ id: uuid(work) })',
          "  ['reader-status'].put({",
          '    actingSubject,',
          '    expectedVersion,',
          "    status: 'read',",
          '    ...dates,',
          '  }, headers())',
        ),
      },
      caption: 'Auszug aus der Bibliotheksfunktion der REZICS-Website.',
      openapi: 'Auch die OpenAPI-3.1-Dokumentation wird aus denselben Routendeklarationen erstellt. Sie beschreibt die Prüfung, das Anfrageformat und die Antwort für jeden Statuscode.',
      code: { path: 'generated/openapi/main/public.json' },
    },
    reads: {
      label: 'Lesen',
      headline: 'Auch das Lesen folgt festen Regeln',
      rows: [
        { code: 'nextCursor · snapshot', body: 'Lange Listen enthalten einen Cursor für die nächste Seite und lassen sich bis zum Ende durchgehen. Ein Bibliotheksexport enthält außerdem einen Snapshot. Ändern sich Daten während des Exports, wird das klar angezeigt, statt dir eine unvollständige Datei zu geben.' },
        { code: 'count.precision', body: 'Bei der Gesamtzahl der Suchergebnisse steht dabei, ob sie genau ist oder nur „mindestens“ angibt.' },
        { code: 'title.language · basis', body: 'Titel enthalten eine Sprachkennung und Schreibrichtung. Außerdem steht dabei, ob die Sprache angefragt, in derselben Schrift, in einer anderen Schrift oder als Ersatz gewählt wurde.' },
        { code: '404 resource_unavailable', body: 'Für Ressourcen ohne deine Berechtigung sieht die Antwort genauso aus wie für nicht vorhandene Ressourcen. Sie verrät nicht, dass es sie gibt.' },
      ],
    },
  },

  mcp: {
    hero: {
      headline: 'Dein KI-Agent verbindet sich über /mcp.',
      lede: 'REZICS stellt unter /mcp einen entfernten MCP-Server bereit. Der Agent verbindet sich mit deinem autorisierten Token. Die angezeigten Werkzeuge richten sich nach seinen aktuellen Berechtigungen. Jedes Werkzeug entspricht einem HTTP-Vorgang.',
    },
    adapter: {
      label: 'Weiterleitung',
      headline: 'MCP leitet Anfragen weiter. Es ist kein eigener Schreibweg.',
      body: [
        'Jeder Werkzeugaufruf wird genau einmal an den entsprechenden HTTP-Vorgang weitergeleitet, mit demselben Token und Idempotenzschlüssel. Der Vorgang bestimmt, wer handelt, was erlaubt ist und wie viel Anfragebudget verbraucht wird.',
        'Werktexte und Webseiten, die ein Werkzeug liest, gelten immer als Daten und nie als Anweisungen.',
      ],
    },
    connect: {
      label: 'Verbindung',
      headline: 'Vier Schritte zur Verbindung',
      rows: [
        { title: 'Ressourcenmetadaten lesen', code: 'GET /.well-known/oauth-protected-resource/mcp', body: 'Anfragen ohne Token erhalten 401. Der Header verweist auf diese Metadaten mit Angaben zum Autorisierungsserver und den unterstützten Berechtigungsbereichen.' },
        { title: 'Registrieren und Token erhalten', code: 'RFC 7591 · PKCE', body: 'Der Client eines Agenten kann sich selbst registrieren und mit Authorization Code und PKCE ein Token erhalten. Die Registrierung verleiht keine Berechtigungen für Ressourcen.' },
        { title: 'Werkzeuge auflisten', code: 'tools/list', body: 'Die Liste enthält nur Werkzeuge, die diese Identität gerade verwenden darf.' },
        { title: 'Werkzeug aufrufen', code: 'tools/call', body: 'Das Ergebnis enthält unverändert den HTTP-Statuscode, die Header und den Inhalt. Statuscodes ab 400 werden als Fehler markiert.' },
      ],
    },
    same: {
      label: 'Derselbe Vorgang',
      headline: 'Der Agent wird an denselben HTTP-Vorgang weitergeleitet.',
      calls: [
        { label: 'Programm', sample: { language: 'http', code: lines('GET /v1/search/catalogue', '  ?q=Reise&limit=5') } },
        {
          label: 'Agent',
          sample: {
            language: 'json',
            code: lines(
              '{',
              '  "name": "search_catalogue",',
              '  "arguments": {',
              '    "query": {',
              '      "q": "Reise",',
              '      "limit": 5',
              '    }',
              '  }',
              '}',
            ),
          },
          caption: 'Diese Parameter werden mit tools/call gesendet.',
        },
      ],
      shared: {
        label: 'Dieselbe Antwort',
        sample: { language: 'text', code: lines('operationId', '  getV1SearchCatalogue', 'profile', '  public-catalogue-ranked-v1') },
      },
      caption: 'Beispiel: Suche im Verzeichnis nach „Reise“. Der Agent erhält dieselbe Antwort, ergänzt um HTTP-Statuscode und Header. Die Parameter sind nach path, query, headers und body gruppiert.',
    },
    tools: {
      label: 'Werkzeuge',
      headline: 'Werkzeugliste',
      lead: 'Werkzeuge werden aus den Fähigkeitsdeklarationen der API erstellt. Darin stehen Name, Zweck und benötigte Berechtigungsbereiche. Doppelte Namen oder fehlende Vorgänge führen zu einem Fehler.',
      scopes: 'Benötigte Berechtigungen',
      groups: [
        {
          name: 'Verzeichnis lesen',
          tools: [
            { title: 'Im Verzeichnis nach Stichworten suchen', code: { tool: 'search_catalogue', op: 'GET /v1/search/catalogue', scopes: ['work:read'] } },
            { title: 'Eine Ressource lesen', code: { tool: 'read_resource', op: 'GET /v1/resources/{resource}', scopes: ['work:read', 'context:read'] } },
            { title: 'Zusammenfassungen mehrerer Ressourcen lesen', code: { tool: 'resource_summaries', op: 'POST /v1/resources/summaries', scopes: ['work:read', 'context:read'] } },
            { title: 'Verknüpfungen einer Ressource lesen', code: { tool: 'resource_relations', op: 'GET /v1/resources/{resource}/relations', scopes: ['work:read'] } },
            { title: 'Versionen eines Werks lesen', code: { tool: 'work_editions', op: 'GET /v1/works/{id}/releases', scopes: ['work:read'] } },
          ],
        },
        {
          name: 'Bibliothek',
          tools: [
            { title: 'Die ganze Bibliothek exportieren', code: { tool: 'library_export', op: 'GET /v1/me/library-export', scopes: ['work:read', 'rating:read'] } },
            { title: 'Eine Bibliotheksdatei hochladen', code: { tool: 'library_import_create', op: 'POST /v1/me/library-imports', scopes: ['work:read', 'library:write'] } },
            { title: 'Abgleiche Zeile für Zeile ansehen', code: { tool: 'library_import_rows', op: 'GET /v1/me/library-imports/{id}/rows', scopes: ['work:read'] } },
            { title: 'Ein Werk für eine Zeile auswählen', code: { tool: 'library_import_resolve', op: 'PUT /v1/me/library-imports/{id}/rows/{row}', scopes: ['work:read', 'library:write'] } },
            { title: 'Ein vorgeschlagenes Werk außerhalb des Verzeichnisses übernehmen', code: { tool: 'library_import_adopt', op: 'POST /v1/me/library-imports/{id}/rows/{row}/adoptions', scopes: ['work:read', 'library:write', 'work:create'] } },
            { title: 'Den geprüften Import anwenden', code: { tool: 'library_import_apply', op: 'POST /v1/me/library-imports/{id}/apply', scopes: ['work:read', 'library:write', 'collection:edit', 'rating:read', 'rating:submit'] } },
            { title: 'Importfortschritt ansehen', code: { tool: 'library_import_status', op: 'GET /v1/me/library-imports/{id}/apply', scopes: ['work:read'] } },
            { title: 'Die hochgeladene Datei löschen', code: { tool: 'library_import_delete', op: 'DELETE /v1/me/library-imports/{id}', scopes: ['work:read', 'library:write'] } },
          ],
        },
        {
          name: 'Wiki',
          tools: [
            { title: 'Extrahierte Namen abgleichen', code: { tool: 'wiki_candidates', op: 'POST /v1/wiki/candidates', scopes: ['wiki:propose'] } },
            { title: 'Eine Extraktion vorab prüfen', code: { tool: 'wiki_validate', op: 'POST /v1/wiki/validations', scopes: ['wiki:propose'] } },
            { title: 'Angenommene Wiki-Inhalte lesen', code: { tool: 'wiki_history', op: 'GET /v1/wiki/{work}/history', scopes: ['work:read'] } },
            { title: 'Quellen und Zitate eines Eintrags lesen', code: { tool: 'wiki_evidence', op: 'GET /v1/wiki/evidence/{id}', scopes: ['work:read'] } },
          ],
        },
      ],
    },
    limits: {
      label: 'Grenzen',
      headline: 'Grenzen für jeden Aufruf',
      rows: [
        { title: '30 Sekunden', body: 'Zeitlimit für jeden Werkzeugaufruf.' },
        { title: '1 MiB', body: 'Maximale Größe normaler Werkzeuganfragen. Bibliotheksdateien zählen gesondert.' },
        { title: 'Zustandslos', body: 'Jede Anfrage prüft das Token erneut. Der Server speichert keine Sitzung.' },
      ],
    },
  },

  apps: {
    hero: {
      headline: 'Anwendungen erhalten nie mehr Berechtigungen als du.',
      lede: 'REZICS hält Anmeldung, handelnde Identität, Ressourcenberechtigungen und Anwendungsfreigaben getrennt. Tokens für Anwendungen und KI-Agenten können diese Grenzen nur weiter einschränken.',
    },
    layers: {
      label: 'Vier Ebenen',
      headline: 'Jede Ebene schränkt die nächste ein',
      body: ['Konto, Identität, Installation und Zustimmung sowie Token-Berechtigungen werden auf vier Ebenen getrennt erfasst. Die innere Ebene bleibt immer innerhalb der äußeren. Eine Anwendung erhält nur die engste Ebene.'],
    },
    each: {
      label: 'Ebene für Ebene',
      headline: 'Was jede Ebene regelt',
      rows: [
        { title: 'Konto', body: 'Der Kontodienst bestätigt deine Identität. Eine Anmeldung allein erlaubt keinen Zugriff auf Ressourcen.' },
        { title: 'Identität', body: 'Du handelst als Person oder Organisation. Der Server prüft die Vertretungsbeziehung und die Ressourcenberechtigungen.' },
        { title: 'Installation und Zustimmung', body: 'Installation und Zustimmung setzen zwei getrennte Grenzen. Die Registrierung einer Anwendung verleiht selbst keine Ressourcenberechtigungen.' },
        { title: 'Token-Berechtigungen', body: 'Das Token enthält nur die Berechtigungen, denen du zugestimmt hast, etwa library:write. Jeder Vorgang prüft erneut, mit welcher Identität du handelst.' },
      ],
    },
    authorize: {
      label: 'Autorisierung',
      headline: 'Autorisierungscode mit PKCE',
      sample: {
        language: 'http',
        code: lines(
          'GET /api/auth/oauth2/authorize',
          '  ?response_type=code',
          '  &client_id=…',
          '  &redirect_uri=https://a.example/',
          '  &scope=work:read%20library:write',
          '  &code_challenge=…',
          '  &code_challenge_method=S256',
          '  &state=…',
        ),
      },
      caption: 'Die Autorisierungsanfrage geht an den REZICS-Kontodienst. Die Rücksprungadresse muss genau der registrierten Adresse entsprechen.',
    },
    consent: {
      label: 'Zustimmung',
      headline: 'Was der Zustimmungsdialog zeigt',
      rows: [
        { text: 'Name und Website der Anwendung', code: 'name · uri' },
        { text: 'Jede Berechtigung wird in deiner Sprache erklärt. Fehlt eine Übersetzung, erscheint sie auf Englisch.', code: 'scopes[].description' },
        { text: 'Nicht verifizierte Anwendungen sind klar gekennzeichnet.', code: 'unverified' },
        { text: 'Die Domain, zu der du nach der Autorisierung zurückkehrst', code: 'redirectHost' },
        { text: 'Datenschutzerklärung und Nutzungsbedingungen der Anwendung', code: 'policy · terms' },
      ],
      note: 'Eigene REZICS-Produkte zeigen keinen Zustimmungsdialog. Sie werden auf der Kontoseite als Produktsitzungen aufgeführt.',
    },
    revoke: {
      label: 'Widerruf',
      headline: 'Jederzeit widerrufen',
      rows: [
        { title: 'Übersicht', body: 'Auf der Kontoseite „Verknüpfte Anwendungen“ siehst du für jede Anwendung ihre Berechtigungen, den Zeitpunkt der Autorisierung und die letzte Verwendung.' },
        { title: 'Bestätigung', body: 'Vor dem Entfernen wird deine Identität erneut geprüft.' },
        { title: 'Ungültigkeit', body: 'Nach dem Entfernen sind die Tokens der Anwendung ungültig, auch die zur Verlängerung.' },
        { title: 'Deaktivierung', body: 'Von REZICS deaktivierte Anwendungen sind gekennzeichnet. Ihre Autorisierung kannst du weiterhin entfernen.' },
      ],
    },
  },

  wiki: {
    hero: {
      headline: 'REZICS erhält Vorschläge, nicht den vollständigen Text.',
      lede: 'Wer den Text besitzt, extrahiert mit dem eigenen KI-Agenten und Modell Kapitel für Kapitel Figuren, Aliase, Beziehungen, Ereignisse und Orte. Jeder Eintrag enthält eine Position und ein kurzes Zitat. Menschen prüfen die Vorschläge auf REZICS. Das Toolkit verbindet sich nicht mit dem Internet und sendet keine Nutzungsdaten.',
    },
    boundary: {
      label: 'Grenzen',
      headline: 'Was lokal bleibt und was gesendet wird',
      body: [
        'Die Originaldateien und vollständigen Kapiteltexte bleiben auf deinem Rechner. Das Toolkit verarbeitet sie offline und ermittelt die Positionen. An REZICS gehen Figuren, Aliase, Beziehungen, Ereignisse und Orte mit Positionen und kurzen Zitaten. Dazu kommen der verwendete Agent und das Modell sowie die Angabe, ob die Verarbeitung lokal oder in der Cloud lief.',
        'Bei einem Cloud-Modell wird der Text, den der Agent liest, an dessen Anbieter gesendet. Das entscheidest du. Für eine vollständig lokale Verarbeitung verwendest du ein lokales Modell und deaktivierst Cloud-Werkzeuge mit Dateizugriff.',
      ],
    },
    steps: {
      label: 'Ablauf',
      headline: 'Von einer Datei zum Vorschlag',
      sample: {
        language: 'sh',
        code: lines('rezics-wiki units novel.epub', 'rezics-wiki verify novel.epub \\', '  - < locator.json'),
      },
      caption: 'units gibt pro Zeile einen Absatz mit Position aus. verify liest eine Position ein und prüft das Zitat anhand derselben Datei.',
      rows: [
        { code: 'rezics-wiki units', title: 'In Absätze teilen', body: 'TXT, EPUB 2/3 und reine Skripte visueller Romane (.rpy) werden in Absätze aufgeteilt. Jeder Absatz erhält eine Position nach rezics-locator-v1 und den SHA-256-Hash der gesamten Datei.' },
        { code: 'skill/SKILL.md', title: 'Deinem Agenten geben', body: 'Das Toolkit enthält einen Skill, der den Agenten anleitet, Kapitel auszuwerten und Erzählung, Figurenrede, Gerüchte und Annahmen zu unterscheiden.' },
        { code: 'wiki_candidates · wiki_validate', title: 'Abgleichen und vorab prüfen', body: 'Zuerst werden vorhandene Namen und Aliase abgeglichen. Das Ergebnis lautet passend, neu, unklar oder nicht verfügbar. Danach werden das Zitatlimit und fehlende Kapitelzuordnungen geprüft.' },
        { code: 'wiki-extraction-v1', title: 'Zur Prüfung senden', body: 'Vorschläge werden erst nach menschlicher Prüfung veröffentlicht. Mit derselben Version können Prüfende jedes Zitat auf dem eigenen Rechner kontrollieren.' },
        { code: 'wiki-delta-v1', title: 'Neue Kapitel ergänzen', body: 'Weitere Kapitel werden als Änderungsvorschläge eingereicht. Vorhandene Inhalte, die nicht erwähnt werden, bleiben bestehen und werden nicht stillschweigend gelöscht.' },
      ],
    },
    limits: {
      label: 'Grenzen',
      headline: 'Unterstützung und Grenzen',
      rows: [
        { title: 'TXT, EPUB, .rpy', body: 'Unterstützte Dateiformate.' },
        { title: '200', body: 'Maximale Zeichenzahl pro Zitat.' },
        { title: '128 MiB', body: 'Maximale Größe einer Datei.' },
      ],
    },
    statement: {
      text: 'Keine Entschlüsselung und keine Umgehung.',
      sub: 'Geschützte Dateien lassen sich nicht einlesen.',
      licence: 'Das Toolkit kann weder entschlüsseln noch Schlüssel wiederherstellen oder Schutzmaßnahmen umgehen. Solche Erweiterungen werden auch nicht empfohlen. Toolkit und Protokoll stehen unter Apache-2.0 und verwenden keinen AGPL-Code von REZICS. Du brauchst kein REZICS-Konto. Das Toolkit funktioniert mit jedem kompatiblen Server. Die Beispiele verwenden nur gemeinfreie Werke oder Werke, die du nutzen darfst.',
    },
  },

  zones: {
    hero: {
      headline: 'Das Layout gehört zur Zone, Daten und Regeln zur Plattform.',
      lede: 'Eine Zone ist die eigene Website einer Community und kann eigenen Darstellungscode mitbringen. Der Code gestaltet nur das Layout. Die Plattform lädt die Daten und übergibt sie, Berechtigungen und Prüfungen bleiben bei der Plattform.',
    },
    theme: {
      label: 'Design',
      headline: 'Erst konfigurieren, dann programmieren',
      body: ['Jede Zone beginnt mit einem Standardlayout. Passe Regaldichte, Seitenfläche und Coverformat an. Bei Bedarf kannst du eine eigene Akzentfarbe wählen und Module wie Highlights, Neueste Werke, Ranglisten und Empfehlungen der Redaktion anordnen. Code ist erst nötig, wenn sich ein Layout nicht mit den Einstellungen umsetzen lässt.'],
    },
    settings: {
      label: 'Einstellungen',
      headline: 'Ein Satz Designeinstellungen',
      tokens: {
        language: 'ts',
        code: lines(
          'const tokens: ZoneTokens = {',
          "  colorScheme: 'system',",
          "  accent: '#3b4a5a',",
          "  density: 'comfortable',",
          "  cardRadius: 'md',",
          "  headingFontScale: 'md',",
          "  surfaceTint: 'subtle',",
          "  fontPairing: 'serif',",
          "  pageSurface: 'flat',",
          "  coverStyle: 'portrait',",
          '};',
        ),
      },
      caption: 'Alle Pflichtfelder der Designeinstellungen. Die Typen stammen aus @rezics/zone-sdk.',
    },
    slots: {
      label: 'Slots',
      headline: 'Code für benannte Slots',
      lead: 'Der Darstellungscode ist ein Paket. Es ersetzt Plattformkomponenten in benannten Slots für Kopfzeile, Titelbild, Suchleiste, Datenbereich, Werkkarte, Module und Fußzeile. Jeder Slot erhält eine Plattformversion. Das Paket kann sie umschließen oder ersetzen.',
      pkg: {
        language: 'ts',
        code: lines(
          'export default defineZonePackage({',
          "  slug: 'anime',",
          '  css,',
          "  catalogue: { count: 'episodes',",
          '    formatNames: animeFormatNames',
          '  },',
          '  slots: {',
          '    browseHeader:',
          '      AnimeBrowseHeader,',
          '    workCard: AnimeCard,',
          '    cataloguePanel:',
          '      AnimeCataloguePanel,',
          '    footer: AnimeFooter,',
          '  },',
          '});',
        ),
      },
      caption: 'Unveränderter Auszug aus dem Paketeinstieg der Anime-Zone von REZICS.',
    },
    rules: {
      label: 'Grenzen',
      headline: 'Grenzen für Pakete',
      rows: [
        { title: 'Daten nicht selbst abrufen', body: 'Die Plattform lädt Daten und übergibt sie an die Slots. Das Paket sendet keine Anfragen.' },
        { title: 'Keine Zugangsdaten', body: 'Es liest weder Cookies noch den Browser-Speicher oder andere Zugangsdaten.' },
        { title: 'Plattformfunktionen bleiben sichtbar', body: 'Kontomenü, Zonenmenü, Meldungen und Altersabfragen liegen außerhalb der Slots. Auch der Hinweis „Warum es hier steht“ bleibt bei jedem Werk sichtbar.' },
        { title: 'Stile bleiben auf die Zone beschränkt', body: 'Stile gelten nur innerhalb dieser Zone. Farben und Schriftarten verwenden ausschließlich die Variablen der Plattform.' },
        { title: 'Feste Größenlimits', body: 'Nach gzip-Komprimierung darf CSS höchstens 40 KiB und JavaScript höchstens 50 KiB umfassen.' },
      ],
    },
    review: {
      label: 'Veröffentlichung',
      headline: 'Von der Prüfung zur Veröffentlichung',
      rows: [
        { title: 'Hash berechnen', body: 'Alle Paketdateien ergeben zusammen einen Hash. Ändert sich ein Byte, ändert sich auch der Hash.' },
        { title: 'Von einer anderen Person prüfen lassen', body: 'Ein anderes Konto prüft Quellcode, erstellte Dateien, Barrierefreiheit und das Verhalten bei Fehlern. Entscheidung und Beleg-Hash werden festgehalten.' },
        { title: 'Aktivieren und Ablaufdatum festlegen', body: 'Nur geprüfte Versionen lassen sich aktivieren und erhalten ein Ablaufdatum. Eine Rückkehr zu einer älteren Version macht eine frühere Freigabe nicht wieder gültig.' },
        { title: 'Jederzeit zum Standardlayout wechseln', body: 'Bei einem abweichenden Hash erscheint das Standardlayout. Du kannst das Paket ausschalten und mit ?safe im Link den sicheren Modus öffnen. Die Plattform hat außerdem einen zentralen Schalter.' },
      ],
    },
    statement: {
      text: 'Ein Backend für alle, freie Hand beim Frontend.',
      sub: 'Auch dein KI-Agent liest dieselben Daten.',
      note: 'Eine neue Community-Website braucht kein eigenes Backend. Darstellungscode liest nur die öffentliche API und enthält keine Geschäftslogik. Alles, was die Zone anzeigt, lässt sich auch über die API lesen.',
    },
  },

  open: {
    hero: {
      headline: 'Quellcode offen, eigenständige Pakete frei nutzbar.',
      lede: 'Dienste, Website, Kontoseiten, Designdokumente und API-Definitionen liegen in einem öffentlichen Repository. Die Plattform steht unter AGPL-3.0. Das Wiki-Toolkit und das Dokumentformatpaket stehen unter Apache-2.0 und benötigen keine REZICS-Dienste.',
      link: 'Zum Quellcode',
      href: shared.footer.sourceUrl,
    },
    licences: {
      label: 'Autorisierung',
      headline: 'Zwei Lizenzen',
      rows: [
        { code: { name: 'AGPL-3.0', paths: 'services/ · apps/ · generated/ · docs/' }, line: 'Die Plattform: Dienste, Website, Kontoseiten und Dokumentation.' },
        { code: { name: 'Apache-2.0', paths: 'packages/wiki-toolkit/ · packages/document/' }, line: 'Eigenständige Pakete: @rezics/wiki-toolkit und @rezics/document. Ein REZICS-Konto ist nicht erforderlich.' },
      ],
    },
    map: {
      label: 'Repository',
      headline: 'Was im Repository liegt',
      rows: [
        { code: 'services/', licence: 'AGPL-3.0', body: 'Backend-Dienste. Main stellt API und MCP-Server bereit, Account kümmert sich um Anmeldung und OAuth-Autorisierung.' },
        { code: 'apps/web/', licence: 'AGPL-3.0', body: 'Die REZICS-Website. Wie dein Programm greift sie nur über die API auf Daten zu.' },
        { code: 'apps/web/zones/official/', licence: 'AGPL-3.0', body: 'Darstellungscode der offiziellen Zonen, ein Paket pro Ordner.' },
        { code: 'apps/accounts/', licence: 'AGPL-3.0', body: 'Kontoseiten: Anmeldung, Sicherheit und verknüpfte Anwendungen.' },
        { code: 'packages/wiki-toolkit/', licence: 'Apache-2.0', body: 'Lokales Wiki-Toolkit mit Protokoll und Skill.' },
        { code: 'packages/document/', licence: 'Apache-2.0', body: 'Das REZICS-Dokumentformat. Ein JSON-Schema definiert Text und Blöcke.' },
        { code: 'generated/openapi/', licence: 'AGPL-3.0', body: 'OpenAPI-Dokumentation aus den Routendeklarationen.' },
        { code: 'docs/', licence: 'AGPL-3.0', body: 'Designentscheidungen, Vereinbarungen und Betriebsabläufe werden samt Begründung dokumentiert.' },
      ],
    },
    run: {
      label: 'Ausführen',
      headline: 'Auf deinem Rechner ausführen',
      lead: 'Installiere die festgelegte Toolchain und die Containerlaufzeit. Mit drei Befehlen startest du API, Kontodienst, Website und Kontoseiten und lässt ihre Adressen anzeigen.',
      blocks: [
        { sample: { language: 'sh', code: lines('task toolchain:install', 'task dev', 'task urls') }, caption: 'Aus der Dokumentation des Repositorys.' },
        {
          sample: {
            language: 'ts',
            code: lines(
              'import {',
              '  fromPlainText, parseDocument,',
              '  serializeDocument,',
              "} from '@rezics/document';",
              '',
              'const snapshot = fromPlainText(',
              "  'Chinesische Schrift\\nSecond paragraph',",
              ');',
              'parseDocument(snapshot);',
              'const stored =',
              '  serializeDocument(snapshot);',
            ),
          },
          caption: '@rezics/document benötigt kein REZICS-Konto, keinen Dienst und keine Datenbank. Der Auszug stammt aus der Dokumentation.',
        },
      ],
    },
    statement: {
      text: 'Regeln gehören in den Code,',
      sub: 'ihre Gründe in die Dokumentation.',
      note: 'Regeln, die sich mit Typen, Tests und Prüfungen ausdrücken lassen, werden als Code festgehalten. Die Gründe für Entscheidungen kommen mit Datum in die Dokumentation.',
    },
  },
};

export default {
  id: 'developers',
  base: '/developers/',
  name: 'Entwickler',
  theme: { field: '#3b4a5a', on: 'paper' },
  next: 'books',
  pages: [
    {
      slug: '',
      label: 'Überblick',
      meta: {
        title: 'REZICS für Entwickler: eine API',
        description: 'Hinter jeder Schaltfläche auf der REZICS-Website steht ein API-Vorgang. Dein Programm ruft ihn über HTTP auf, ein KI-Agent über den MCP-Server. Identitätsprüfung, Belege und Fehlercodes sind dieselben wie beim Klick auf der Website.',
      },
    },
    {
      slug: 'api',
      label: 'API und SDK',
      meta: {
        title: 'API und SDK: Jeder Vorgang hat einen Vertrag',
        description: 'Für jeden API-Vorgang von REZICS sind Pfad, Berechtigungen, Idempotenzschlüssel und Fehlercodes festgelegt. OpenAPI-Dokumentation und TypeScript-Typen entstehen aus denselben Routendeklarationen. Website und Programm verwenden dieselben Angaben.',
      },
    },
    {
      slug: 'mcp-server',
      label: 'MCP-Server',
      meta: {
        title: 'Der MCP-Server von REZICS',
        description: 'Ein KI-Agent verbindet sich per OAuth mit dem entfernten MCP-Server von REZICS und verwendet Werkzeuge aus den API-Deklarationen. Jeder Aufruf wird einmal an den zugehörigen HTTP-Vorgang weitergeleitet, der Identität, Berechtigungen und Budget bestimmt.',
      },
    },
    {
      slug: 'apps',
      label: 'Verknüpfte Anwendungen',
      meta: {
        title: 'Verknüpfte Anwendungen: Autorisierung per OAuth',
        description: 'Drittanbieteranwendungen erhalten Tokens mit OAuth Authorization Code und PKCE. Der Zustimmungsdialog zeigt Berechtigungen in der Sprache der Person oder auf Englisch, wenn keine Übersetzung vorliegt. Auf der Kontoseite kann sie Autorisierungen ansehen und entfernen. Die zugehörigen Tokens werden ungültig.',
      },
    },
    {
      slug: 'wiki-toolkit',
      label: 'Wiki-Toolkit',
      meta: {
        title: 'Lokales Wiki-Toolkit: REZICS erhält keine Volltexte',
        description: 'Das Open-Source-Wiki-Toolkit teilt TXT- und EPUB-Dateien auf deinem Rechner in überprüfbare Absätze. Dein KI-Agent extrahiert Figuren und Ereignisse. REZICS erhält nur Vorschläge mit Positionen und kurzen Zitaten, niemals den Volltext.',
      },
    },
    {
      slug: 'zones',
      label: 'Zone-Design',
      meta: {
        title: 'Zone-Design und Darstellungscode',
        description: 'Jede Zone kann mit Designeinstellungen und Modulen eine eigene Website gestalten oder Darstellungscode in benannte Slots einsetzen. Der Code wird erst nach einer unabhängigen Prüfung und mit festgelegtem Hash ausgeführt. Lesende können jederzeit zum Standardlayout zurückkehren.',
      },
    },
    {
      slug: 'open-source',
      label: 'Open Source',
      meta: {
        title: 'Open Source: AGPL und Apache',
        description: 'Der Quellcode der REZICS-Plattform steht unter AGPL-3.0 und lässt sich lokal ausführen. Eigenständige Pakete wie das Wiki-Toolkit und das Dokumentformat stehen unter Apache-2.0. Ein REZICS-Konto ist nicht erforderlich.',
      },
    },
  ],
  strings,
} satisfies MiniSite<DevelopersStrings>;
