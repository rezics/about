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
    nextSite: '次のサイト',
    more: { label: '開発者', headline: 'その他のページ' },
    closing: {
      title: '同じ API で、自分のツールを開発。',
      body: '自分のプログラムから作品、ライブラリ、コミュニティの情報を読み書きできます。すべての操作に REZICS のプロフィールと認可ルールを適用します。',
    },
  },
  alts: {
    hero: '温かな白い紙の上に、上、右、下から3本の紙帯が伸び、端が一枚の濃い青灰色の紙の下に重なっています。',
    mcp: '濃い青灰色の紙に一列の丸い穴を開け、薄青色の紙帯を穴に上下交互に通しています。',
    apps: '大きさの異なる4枚の紙を重ねています。一番下は濃い青灰色、一番上は小さな薄青色です。',
    wiki: 'アイボリーと薄青の厚い紙をきれいに重ね、横に細長い濃い青灰色の紙片を3枚置いています。',
    zones: '濃い青灰色の紙を小さな枠の形に折り、窓を開けています。後ろに薄青色の紙を立てています。',
  },

  landing: {
    hero: {
      headline: 'すべてのボタンに、API 操作があります。',
      lede: 'REZICS のウェブサイトもこの API を呼び出します。プログラムからは HTTP リクエストを送り、AIエージェントからは MCP サーバーのツールを呼び出します。どちらも同じ操作に届きます。',
    },
    ways: {
      label: '3つの方法',
      headline: 'どの方法でも、同じ応答。',
      lead: 'ライブラリで「ライブラリをダウンロード」を押すと、ウェブサイトはこのリクエストを送信します。プログラムやエージェントから同じリクエストを送ると、同じ確認を経て、同じライブラリのエクスポートを受け取れます。',
      person: { label: '人', body: 'REZICS のライブラリページで「ライブラリをダウンロード」を押します。' },
      calls: [
        {
          label: 'プログラム',
          sample: { language: 'http', code: lines('GET /v1/me/library-export', '  ?actingSubject=…&limit=20', 'Authorization: Bearer …') },
        },
        {
          label: 'エージェント',
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
          caption: 'tools/call の引数です。プロフィールは自分で指定します。',
        },
      ],
      shared: {
        label: '同じ操作',
        sample: { language: 'text', code: lines('operationId', '  getV1MeLibrary-export', 'profile', '  rezics-library-export-v1') },
      },
    },
    pages: {
      label: '6つの項目',
      headline: '開発に役立つ6つの情報',
      lead: '各ページのパス、フィールド、コマンドは REZICS のソースコードに基づいています。',
      lines: {
        api: '書き込みは安全に再送可能。失敗時は固定コードを返す',
        'mcp-server': '/mcp から接続し、権限に応じたツールを一覧表示',
        apps: 'OAuth で認可し、いつでも取り消し可能',
        'wiki-toolkit': '自分のパソコンで抽出し、提案だけを送信',
        zones: 'コミュニティサイト専用のレイアウトを開発',
        'open-source': 'プラットフォームは AGPL-3.0、独立パッケージは Apache-2.0',
      },
    },
    statement: {
      text: 'REZICS のウェブサイトはデータベースに直接アクセスせず、すべての読み書きに API を使います。',
      sub: 'ウェブサイトでできる操作は、API からも実行できます。',
    },
    rules: {
      label: 'ルール',
      headline: 'どこから操作しても、同じルール。',
      rows: [
        { title: '同じプロフィール', code: 'actingSubject', body: '書き込み時に、どのプロフィールとして操作するか明記します。トークンがプロフィールを選ぶことはなく、サーバーが毎回確認します。' },
        { title: '同じ権限の上限', code: 'scope', body: 'アプリケーションやエージェントに付与される権限は、本人の権限より少なくなることはあっても、多くなることはありません。' },
        { title: '同じ処理結果', code: 'Idempotency-Key', body: '書き込みには冪等性キーを付けます。タイムアウト後に同じリクエストを再送すると、同じ結果を受け取り、処理は重複しません。' },
        { title: '同じエラーコード', code: 'application/problem+json', body: '失敗時は問題の詳細を返します。code フィールドは固定され、プログラムはメッセージを解析せずにコードで処理できます。' },
      ],
    },
    hubs: {
      label: 'カタログ',
      headline: '他の人が作ったツールも掲載。',
      lead: '他の人が作った MCP サーバー、スキル、API も REZICS のカタログに登録できます。バージョン、出典、測定結果や利用記録、評価、ディスカッションを掲載します。',
      items: [
        { kind: 'mcp', line: 'MCP サーバーのカタログ' },
        { kind: 'skills', line: 'AIエージェント向けスキルのカタログ' },
        { kind: 'apis', line: '公開 API のカタログ' },
      ],
    },
  },

  api: {
    hero: {
      headline: '本を「読了」にする操作も、API で。',
      lede: 'ライブラリで作品を「読了」にすると、ウェブサイトは次のリクエストを送ります。プログラムから同じリクエストを送ると、同じ確認を経て同じ結果を得られます。',
    },
    anatomy: {
      label: '書き込み',
      headline: '書き込みリクエストを1行ずつ見る',
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
      caption: 'バージョン番号、日付、冪等性キーは例です。',
      rows: [
        { code: '{id}', title: 'パスは作品を指定', body: 'REZICS のすべての項目に https://rezics.com/id/ から始まる固定識別子があります。言語やサイトが変わっても同じ識別子です。' },
        { code: 'actingSubject', title: 'プロフィールを指定', body: 'アカウントは個人または組織を代表できます。各書き込みで、どのプロフィールとして操作するかを指定します。サーバーは実行前にその権限を確認します。' },
        { code: 'Idempotency-Key', title: '安全に再送', body: '書き込みごとに冪等性キーを付けます。タイムアウトや切断の後に同じキーで再送しても、処理は重複しません。' },
        { code: 'expectedVersion', title: '上書きを防止', body: '3番目のバージョンを読み込んだら、その番号を指定します。その間に他の人が変更していた場合、今回の書き込みは上書きしません。' },
        { code: 'application/problem+json', title: 'エラーの詳細を返す', body: '失敗時の code は固定です。プログラムはメッセージ文を比較せず、コードに基づいて分岐できます。' },
      ],
    },
    replay: {
      label: '再送',
      headline: '同じリクエストを再送すると、同じ結果が返ります。',
      lead: '同じキーと内容で再送すると、サーバーは最初の結果を返します。バージョンは4のままで、replayed が true になります。同じキーで内容を変えると 409 reader_status_conflict を返します。バージョンが3でなくなっていた場合は 409 stale_reader_status を返すため、再読み込みしてから書き込みます。',
      responses: [
        {
          label: '初回',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": false', '}') },
        },
        {
          label: '再送',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": true', '}') },
        },
        {
          label: 'バージョンが古い',
          sample: { language: 'json', code: lines('409', '{', '  "status": 409,', '  "code":', '    "stale_reader_status"', '}') },
        },
      ],
    },
    sdk: {
      label: '型',
      headline: 'API と型は、同じ定義から。',
      lead: 'REZICS のウェブサイトは TypeScript で API を呼び出し、リクエストとレスポンスの型はサーバーのルート定義から直接取得します。フィールド名の変更やエラーコードの追加は、呼び出し側でコンパイル時に検出できます。TypeScript SDK も同じ定義から生成するため、ウェブサイトと同じ型を利用できます。',
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
      caption: 'REZICS ウェブサイトのライブラリ機能から抜粋。',
      openapi: 'OpenAPI 3.1 のドキュメントも同じルート定義から生成されます。各操作の認証方法、リクエスト形式、ステータスコードごとのレスポンスを記載します。',
      code: { path: 'generated/openapi/main/public.json' },
    },
    reads: {
      label: '読み取り',
      headline: '読み取りにもルールがあります。',
      rows: [
        { code: 'nextCursor · snapshot', body: '長いリストには次ページのカーソルを付け、最後まで順に読み取れます。ライブラリのエクスポートにはスナップショットを添えます。途中でデータが変わった場合は明記し、寄せ集めのファイルを渡しません。' },
        { code: 'count.precision', body: '検索結果の合計件数が正確な値か、「少なくともこの数」かを明記します。' },
        { code: 'title.language · basis', body: 'タイトルには言語タグと表記方向を付け、その言語が指定されたものか、同じ文字体系か、別の文字体系か、代替なのかを示します。' },
        { code: '404 resource_unavailable', body: '閲覧権限のないリソースには、存在しない場合と同じレスポンスを返し、存在を明かしません。' },
      ],
    },
  },

  mcp: {
    hero: {
      headline: 'AIエージェントは /mcp から接続。',
      lede: 'REZICS は /mcp でリモート MCP サーバーを提供します。エージェントは認可されたトークンで接続し、現在の権限に応じたツールを確認できます。各ツールは一つの HTTP 操作に対応します。',
    },
    adapter: {
      label: '中継',
      headline: 'MCP は中継し、別の書き込み経路は作りません。',
      body: [
        'ツールの呼び出しは、同じトークンと冪等性キーを使って、対応する HTTP 操作に一度だけ転送されます。誰が操作するか、何ができるか、どれだけのリクエスト枠を使うかは、その操作が決定します。',
        'ツールが読み取った作品本文やウェブページのテキストはすべてデータとして扱い、指示として扱いません。',
      ],
    },
    connect: {
      label: '接続',
      headline: '接続の4つの手順',
      rows: [
        { title: 'リソースメタデータを取得', code: 'GET /.well-known/oauth-protected-resource/mcp', body: 'トークンのないリクエストには 401 を返し、ヘッダーからメタデータを参照できるようにします。メタデータには認可サーバーと対応するスコープを記載します。' },
        { title: '登録してトークンを取得', code: 'RFC 7591 · PKCE', body: 'エージェントのクライアントは自分で登録し、認可コードと PKCE を使ってトークンを取得できます。登録だけではリソースへの権限は付与されません。' },
        { title: 'ツールを一覧表示', code: 'tools/list', body: 'このプロフィールで現在利用できるツールだけを表示します。' },
        { title: 'ツールを呼び出す', code: 'tools/call', body: 'HTTP ステータスコード、ヘッダー、本文をそのまま返します。ステータスコードが400以上の場合はエラーとして示します。' },
      ],
    },
    same: {
      label: '同じ操作',
      headline: 'エージェントの呼び出しも、同じ HTTP 操作に転送。',
      calls: [
        { label: 'プログラム', sample: { language: 'http', code: lines('GET /v1/search/catalogue', '  ?q=旅&limit=5') } },
        {
          label: 'エージェント',
          sample: {
            language: 'json',
            code: lines(
              '{',
              '  "name": "search_catalogue",',
              '  "arguments": {',
              '    "query": {',
              '      "q": "旅",',
              '      "limit": 5',
              '    }',
              '  }',
              '}',
            ),
          },
          caption: 'tools/call でこの引数を送信します。',
        },
      ],
      shared: {
        label: '同じレスポンス',
        sample: { language: 'text', code: lines('operationId', '  getV1SearchCatalogue', 'profile', '  public-catalogue-ranked-v1') },
      },
      caption: '「旅行」でカタログを検索する例です。エージェントも同じレスポンスを受け取り、その外側に HTTP ステータスコードとヘッダーが付きます。引数は HTTP 操作に合わせて path、query、headers、body に分かれます。',
    },
    tools: {
      label: 'ツール',
      headline: 'ツール一覧',
      lead: 'ツールは API の機能宣言から生成されます。宣言にはツール名、用途、必要な権限スコープを記載します。名前が重複する場合や、対応する操作が存在しない場合は生成に失敗します。',
      scopes: '必要なスコープ',
      groups: [
        {
          name: 'カタログの読み取り',
          tools: [
            { title: 'キーワードでカタログを検索', code: { tool: 'search_catalogue', op: 'GET /v1/search/catalogue', scopes: ['work:read'] } },
            { title: 'リソースを読み取る', code: { tool: 'read_resource', op: 'GET /v1/resources/{resource}', scopes: ['work:read', 'context:read'] } },
            { title: '複数のリソース概要を一括取得', code: { tool: 'resource_summaries', op: 'POST /v1/resources/summaries', scopes: ['work:read', 'context:read'] } },
            { title: 'リソースの関連情報を取得', code: { tool: 'resource_relations', op: 'GET /v1/resources/{resource}/relations', scopes: ['work:read'] } },
            { title: '作品の各バージョンを取得', code: { tool: 'work_editions', op: 'GET /v1/works/{id}/releases', scopes: ['work:read'] } },
          ],
        },
        {
          name: 'ライブラリ',
          tools: [
            { title: 'ライブラリ全体をエクスポート', code: { tool: 'library_export', op: 'GET /v1/me/library-export', scopes: ['work:read', 'rating:read'] } },
            { title: 'ライブラリファイルをアップロード', code: { tool: 'library_import_create', op: 'POST /v1/me/library-imports', scopes: ['work:read', 'library:write'] } },
            { title: '照合結果を1行ずつ確認', code: { tool: 'library_import_rows', op: 'GET /v1/me/library-imports/{id}/rows', scopes: ['work:read'] } },
            { title: '行に作品を指定', code: { tool: 'library_import_resolve', op: 'PUT /v1/me/library-imports/{id}/rows/{row}', scopes: ['work:read', 'library:write'] } },
            { title: 'カタログ外の候補作品を採用', code: { tool: 'library_import_adopt', op: 'POST /v1/me/library-imports/{id}/rows/{row}/adoptions', scopes: ['work:read', 'library:write', 'work:create'] } },
            { title: '確認済みのインポートを適用', code: { tool: 'library_import_apply', op: 'POST /v1/me/library-imports/{id}/apply', scopes: ['work:read', 'library:write', 'collection:edit', 'rating:read', 'rating:submit'] } },
            { title: 'インポートの進行状況を確認', code: { tool: 'library_import_status', op: 'GET /v1/me/library-imports/{id}/apply', scopes: ['work:read'] } },
            { title: 'アップロードしたファイルを削除', code: { tool: 'library_import_delete', op: 'DELETE /v1/me/library-imports/{id}', scopes: ['work:read', 'library:write'] } },
          ],
        },
        {
          name: 'Wiki',
          tools: [
            { title: '抽出した名前を照合', code: { tool: 'wiki_candidates', op: 'POST /v1/wiki/candidates', scopes: ['wiki:propose'] } },
            { title: '抽出結果を事前検証', code: { tool: 'wiki_validate', op: 'POST /v1/wiki/validations', scopes: ['wiki:propose'] } },
            { title: '採用済みの Wiki 内容を取得', code: { tool: 'wiki_history', op: 'GET /v1/wiki/{work}/history', scopes: ['work:read'] } },
            { title: '主張の出典と引用を取得', code: { tool: 'wiki_evidence', op: 'GET /v1/wiki/evidence/{id}', scopes: ['work:read'] } },
          ],
        },
      ],
    },
    limits: {
      label: '上限',
      headline: '呼び出しごとの制限',
      rows: [
        { title: '30秒', body: '各ツール呼び出しのタイムアウト。' },
        { title: '1 MiB', body: '通常のツールリクエストのサイズ上限。ライブラリファイルのアップロードは別枠です。' },
        { title: 'ステートレス', body: 'リクエストごとにトークンを確認し、サーバーにセッションを保持しません。' },
      ],
    },
  },

  apps: {
    hero: {
      headline: 'アプリの権限が、あなたを上回ることはありません。',
      lede: 'REZICS はログイン、操作するプロフィール、リソース権限、アプリの認可を分けて記録します。アプリや AIエージェントのトークンは、それぞれの範囲内に制限されます。',
    },
    layers: {
      label: '4つの層',
      headline: '内側ほど権限を限定。',
      body: ['アカウント、プロフィール、インストールと同意、トークンのスコープを4つの層に分けて記録します。内側の層は常に外側の範囲内です。アプリに付与されるのは一番内側の権限だけです。'],
    },
    each: {
      label: '各層の役割',
      headline: '各層が管理するもの',
      rows: [
        { title: 'アカウント', body: 'アカウントサービスが本人であることを確認します。ログインしただけでリソースを操作できるわけではありません。' },
        { title: 'プロフィール', body: '個人または組織のプロフィールとして操作します。サーバーはその委任関係とリソース権限を確認します。' },
        { title: 'インストールと同意', body: 'インストールと同意は、それぞれ独立した上限です。アプリを登録しただけでは、リソース権限は付与されません。' },
        { title: 'トークンのスコープ', body: 'トークンには、library:write など、あなたが同意したスコープだけが含まれます。各操作で、どのプロフィールとして実行するかを再確認します。' },
      ],
    },
    authorize: {
      label: '認可',
      headline: '認可コードと PKCE',
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
      caption: '認可リクエストは REZICS のアカウントサービスに送信されます。リダイレクト先の URL は登録時と完全に一致する必要があります。',
    },
    consent: {
      label: '同意',
      headline: '同意画面に表示される内容',
      rows: [
        { text: 'アプリの名前とウェブサイト', code: 'name · uri' },
        { text: '各権限の説明を利用者の言語で表示。翻訳がない場合は英語', code: 'scopes[].description' },
        { text: 'アプリが未認証の場合は明確に表示', code: 'unverified' },
        { text: '認可後のリダイレクト先ドメイン', code: 'redirectHost' },
        { text: 'アプリのプライバシーポリシーと利用規約', code: 'policy · terms' },
      ],
      note: 'REZICS の製品では同意画面を表示しません。アカウントページに製品セッションとして一覧表示します。',
    },
    revoke: {
      label: '取り消し',
      headline: 'いつでも取り消し可能',
      rows: [
        { title: '一覧', body: 'アカウントの「連携アプリ」ページには、各アプリの権限、認可日時、最終利用日時が表示されます。' },
        { title: '確認', body: '削除する前に、本人確認を行います。' },
        { title: '無効化', body: '削除後はアプリのトークンが使えなくなり、更新用トークンも無効になります。' },
        { title: '停止済みアプリ', body: 'REZICS が停止したアプリは明示します。残っている認可は引き続き削除できます。' },
      ],
    },
  },

  wiki: {
    hero: {
      headline: 'REZICS が受け取るのは提案です。全文ではありません。',
      lede: 'テキストの権利者は、自分の AIエージェントとモデルを使い、章ごとにキャラクター、別名、関係、出来事、場所を抽出できます。各項目に位置情報と短い引用を付けて REZICS に送信し、人が確認します。ツールキットはネットに接続せず、利用記録も送信しません。',
    },
    boundary: {
      label: 'データの範囲',
      headline: '手元に残るもの、送信するもの',
      body: [
        '原本のファイルと章の全文はあなたのパソコンに残り、変換と位置情報の付与はツールキットがオフラインで行います。REZICS に送信するのはキャラクター、別名、関係、出来事、場所です。各項目に位置情報と短い引用を付け、抽出に使ったエージェントとモデル、推論をローカルまたはクラウドのどちらで行ったかも添えます。',
        'クラウドモデルを使う場合、エージェントが読み取ったテキストはモデルの提供元に送信されます。これはあなたが選択します。すべてをローカルで処理するには、ローカルモデルを使い、ファイルを読み取れるクラウドツールを無効にしてください。',
      ],
    },
    steps: {
      label: '手順',
      headline: 'ファイルから提案を作成',
      sample: {
        language: 'sh',
        code: lines('rezics-wiki units novel.epub', 'rezics-wiki verify novel.epub \\', '  - < locator.json'),
      },
      caption: 'units は段落と位置情報を1行ずつ出力します。verify は位置情報を読み込み、同じファイルで引用を確認します。',
      rows: [
        { code: 'rezics-wiki units', title: '段落に分割', body: 'TXT、EPUB 2/3、ビジュアルノベルのプレーンテキストスクリプト（.rpy）を段落に変換し、各段落に rezics-locator-v1 の位置情報とファイル全体の SHA-256 ハッシュ値を付けます。' },
        { code: 'skill/SKILL.md', title: 'エージェントに渡す', body: 'ツールキットには Skill が付属します。エージェントに章ごとの抽出方法を指示し、地の文、登場人物の発言、伝聞、仮定を区別します。' },
        { code: 'wiki_candidates · wiki_validate', title: '照合と事前確認', body: '既存の名前と別名を検索し、一致、新規、曖昧、取得不可に分類します。その後、引用の上限と章の対応漏れを事前確認します。' },
        { code: 'wiki-extraction-v1', title: '審査に提出', body: '提案は人による確認後に公開されます。同じバージョンを持つ審査者は、自分のパソコンで各引用を確認できます。' },
        { code: 'wiki-delta-v1', title: '新しい章を追加', body: '以降の章は差分提案として送信します。記載されていない既存の内容はそのまま残り、暗黙に削除されることはありません。' },
      ],
    },
    limits: {
      label: '上限',
      headline: '対応形式と上限',
      rows: [
        { title: 'TXT、EPUB、.rpy', body: '対応するファイル形式。' },
        { title: '200', body: '引用1件あたりの文字数上限。' },
        { title: '128 MiB', body: '1ファイルのサイズ上限。' },
      ],
    },
    statement: {
      text: '復号も、保護の回避もしません。',
      sub: '保護されたファイルは読み取りに失敗します。',
      licence: 'ツールキットには復号、鍵の復元、保護の回避機能はなく、そのようなプラグインも推奨しません。ツールキットとプロトコルは Apache-2.0 でライセンスされ、REZICS の AGPL コードを含みません。REZICS アカウントは不要で、互換性のあるサーバーなら利用できます。例ではパブリックドメインの作品、または利用権のある作品だけを使います。',
    },
  },

  zones: {
    hero: {
      headline: 'レイアウトは Zone、データとルールはプラットフォーム。',
      lede: 'Zone はコミュニティ独自のサイトで、専用の表示コードを追加できます。コードはレイアウトだけを担当し、データはプラットフォームが読み込んで渡します。権限と審査もプラットフォームが管理します。',
    },
    theme: {
      label: 'テーマ',
      headline: 'まず設定し、必要ならコードを書く。',
      body: ['各 Zone では初期テーマを選び、情報量、ページの背景色、表紙の比率を調整できます。必要に応じてアクセントカラーを変え、メインビジュアルのスライド、書棚、ランキング、編集リストなどのモジュールを配置します。設定で実現できないレイアウトには、表示コードを使います。'],
    },
    settings: {
      label: '設定',
      headline: 'テーマ設定の例',
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
      caption: 'テーマ設定に必要なすべてのフィールドです。型は @rezics/zone-sdk から取得します。',
    },
    slots: {
      label: 'スロット',
      headline: '名前付きスロットにコードを配置。',
      lead: '表示コードはパッケージとして、ヘッダー、メインビジュアル、検索バー、データパネル、作品カード、モジュール、フッターなどの名前付きスロットに独自のコンポーネントを設定します。プラットフォーム標準のコンポーネントを囲むことも、置き換えることもできます。',
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
      caption: 'REZICS アニメ Zone のパッケージエントリーポイントから抜粋。',
    },
    rules: {
      label: '制約',
      headline: 'パッケージの制約',
      rows: [
        { title: 'データを直接取得しない', body: 'プラットフォームがデータを読み込んでスロットに渡すため、パッケージはリクエストを送りません。' },
        { title: '認証情報にアクセスしない', body: 'Cookie、ブラウザーのストレージ、認証情報を読み取りません。' },
        { title: 'プラットフォームのUIを隠さない', body: 'アカウントメニュー、Zone メニュー、通報、年齢確認はスロットの外側にあります。各作品の「ここに表示される理由」も常に表示します。' },
        { title: 'スタイルは対象内に限定', body: 'スタイルはこの Zone の範囲内に限定され、色とフォントにはプラットフォームが用意した変数だけを使います。' },
        { title: 'サイズ上限', body: 'gzip 圧縮後の CSS は 40 KiB 以下、JavaScript は 50 KiB 以下です。' },
      ],
    },
    review: {
      label: '公開',
      headline: '審査から公開まで',
      rows: [
        { title: 'ハッシュ値を計算', body: 'パッケージ内のすべてのファイルから一つのハッシュ値を計算します。1バイトでも変更すると、ハッシュ値が変わります。' },
        { title: '別の人が審査', body: '別のアカウントがソースコード、ビルドしたファイル、アクセシビリティ、エラー時の動作を確認し、判断と根拠のハッシュ値を記録します。' },
        { title: '有効化して期限を設定', body: '有効化できるのは審査済みのバージョンだけで、期限も設定します。以前のバージョンに戻しても、以前の承認が再び有効になることはありません。' },
        { title: 'いつでも標準レイアウトに戻す', body: 'ハッシュ値が一致しない場合は標準レイアウトを表示します。閲覧者はパッケージをオフにでき、URL に ?safe を追加するとセーフモードになります。プラットフォーム全体の停止スイッチもあります。' },
      ],
    },
    statement: {
      text: 'バックエンドは共通。フロントエンドは自由に。',
      sub: 'AIエージェントも同じデータを読み取れます。',
      note: '新しいコミュニティサイトに専用のバックエンドは必要ありません。表示コードは公開 API を読み取るだけで、ビジネスロジックを含みません。Zone に表示できるデータは API からも取得できます。',
    },
  },

  open: {
    hero: {
      headline: 'ソースコードを公開。独立パッケージも利用可能。',
      lede: 'サービス、ウェブサイト、アカウントページ、設計ドキュメント、API 定義は、同じ公開リポジトリにあります。プラットフォームは AGPL-3.0 でライセンスされます。Wiki ツールキットとドキュメント形式のパッケージは Apache-2.0 で、REZICS のサービスに依存しません。',
      link: 'ソースコードを見る',
      href: shared.footer.sourceUrl,
    },
    licences: {
      label: 'ライセンス',
      headline: '2つのライセンス',
      rows: [
        { code: { name: 'AGPL-3.0', paths: 'services/ · apps/ · generated/ · docs/' }, line: 'プラットフォーム本体：サービス、ウェブサイト、アカウントページ、ドキュメント。' },
        { code: { name: 'Apache-2.0', paths: 'packages/wiki-toolkit/ · packages/document/' }, line: '独立パッケージ：@rezics/wiki-toolkit と @rezics/document。REZICS アカウントは不要です。' },
      ],
    },
    map: {
      label: 'リポジトリ',
      headline: 'リポジトリの内容',
      rows: [
        { code: 'services/', licence: 'AGPL-3.0', body: 'バックエンドサービス。Main は API と MCP サーバーを提供し、Account はログインと OAuth 認可を担当します。' },
        { code: 'apps/web/', licence: 'AGPL-3.0', body: 'REZICS のウェブサイト。あなたのプログラムと同じく、API を通じてのみデータを取得します。' },
        { code: 'apps/web/zones/official/', licence: 'AGPL-3.0', body: '公式 Zone の表示コード。パッケージごとにフォルダーがあります。' },
        { code: 'apps/accounts/', licence: 'AGPL-3.0', body: 'アカウントページ：ログイン、セキュリティ、連携アプリ。' },
        { code: 'packages/wiki-toolkit/', licence: 'Apache-2.0', body: 'ローカル Wiki ツールキットと、そのプロトコル、スキル。' },
        { code: 'packages/document/', licence: 'Apache-2.0', body: 'REZICS のドキュメント形式。JSON スキーマでテキストとブロックを定義します。' },
        { code: 'generated/openapi/', licence: 'AGPL-3.0', body: 'ルート定義から生成した OpenAPI ドキュメント。' },
        { code: 'docs/', licence: 'AGPL-3.0', body: '設計上の決定、契約、運用手順を理由とともに記載します。' },
      ],
    },
    run: {
      label: '実行',
      headline: '自分のパソコンで実行',
      lead: 'バージョンを固定したツールチェーンとコンテナ実行環境をインストールします。3つのコマンドで API、アカウントサービス、ウェブサイト、アカウントページを起動し、URL を一覧表示できます。',
      blocks: [
        { sample: { language: 'sh', code: lines('task toolchain:install', 'task dev', 'task urls') }, caption: 'リポジトリのドキュメントから抜粋。' },
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
              "  '漢字\\n2つ目の段落',",
              ');',
              'parseDocument(snapshot);',
              'const stored =',
              '  serializeDocument(snapshot);',
            ),
          },
          caption: '@rezics/document は REZICS のアカウント、サービス、データベースを必要としません。例はパッケージのドキュメントから抜粋。',
        },
      ],
    },
    statement: {
      text: 'ルールはコードに、',
      sub: '理由はドキュメントに。',
      note: '型、テスト、チェックで表現できるルールはコードにします。決定の理由は日付とともにドキュメントに記録します。',
    },
  },
};

export default {
  id: 'developers',
  base: '/developers/',
  name: shared.nav.developers,
  theme: { field: '#3b4a5a', on: 'paper' },
  next: 'books',
  pages: [
    {
      slug: '',
      label: '概要',
      meta: {
        title: 'REZICS 開発者：共通の API',
        description: 'REZICS のウェブサイトにある各ボタンの背後には API 操作があります。プログラムからは HTTP で、AIエージェントからは MCP サーバーを通じて呼び出します。プロフィールの確認、処理結果、エラーコードは、画面を操作した場合と同じです。',
      },
    },
    {
      slug: 'api',
      label: 'API と SDK',
      meta: {
        title: 'API と SDK：各操作の仕様を明記',
        description: 'REZICS の各 API 操作には、パス、権限スコープ、冪等性キー、エラーコードを記載します。OpenAPI ドキュメントと TypeScript の型は同じルート定義から生成され、ウェブサイトとプログラムで共通です。',
      },
    },
    {
      slug: 'mcp-server',
      label: 'MCP サーバー',
      meta: {
        title: 'REZICS の MCP サーバー',
        description: 'AIエージェントは OAuth で認可を受け、REZICS のリモート MCP サーバーに接続します。API の宣言から生成されたツールを使います。各呼び出しは対応する HTTP 操作に一度だけ転送され、プロフィール、権限、予算はその操作が決定します。',
      },
    },
    {
      slug: 'apps',
      label: '連携アプリ',
      meta: {
        title: '連携アプリ：OAuth で認可を取得',
        description: 'サードパーティアプリは OAuth の認可コードと PKCE でトークンを取得します。同意画面には利用者の言語で権限を表示し、翻訳がない場合は英語を使います。利用者はアカウントの連携アプリページで認可を確認、削除でき、トークンは無効になります。',
      },
    },
    {
      slug: 'wiki-toolkit',
      label: 'Wiki ツールキット',
      meta: {
        title: 'ローカル Wiki ツールキット：全文は REZICS に送信されません',
        description: 'オープンソースの Wiki ツールキットは、あなたのパソコンで TXT と EPUB を検証可能な段落に分割します。選択した AIエージェントが人物や出来事を抽出し、REZICS に送信されるのは位置情報と短い引用を添えた提案だけです。全文は送信されません。',
      },
    },
    {
      slug: 'zones',
      label: 'Zone テーマ',
      meta: {
        title: 'Zone のテーマと表示コード',
        description: '各 Zone ではテーマ設定とモジュールでサイトを構成し、専用の表示コードを名前付きスロットに配置できます。コードは別の人による審査とハッシュ値の固定後にのみ実行され、閲覧者はいつでも標準レイアウトに戻せます。',
      },
    },
    {
      slug: 'open-source',
      label: 'オープンソース',
      meta: {
        title: 'オープンソース：AGPL と Apache',
        description: 'REZICS プラットフォームのソースコードは AGPL-3.0 で公開されており、すべてのサービスをローカルで実行できます。Wiki ツールキットやドキュメント形式などの独立パッケージは Apache-2.0 でライセンスされ、REZICS アカウントは不要です。',
      },
    },
  ],
  strings,
} satisfies MiniSite<DevelopersStrings>;
