// The developers site (design record in src/sites/developers/SITE.md, sources for every claim and
// sample in src/sites/developers/facts.md). Values under a `code` key are code, paths, tool names
// and field names: they are copied from the REZICS source and skipped by the copy rules.
import type { KindId, MiniSite } from '../schema';
import { site as shared } from '../site';

/** Languages the site's highlighter knows (src/sites/developers/highlight.ts); `text` is plain. */
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
}
export interface Shown {
  label: string;
  sample: CodeSample;
}
/** A photo row's text: eyebrow, heading and one paragraph or several. */
export interface Photo {
  label: string;
  headline: string;
  body: string[];
}

export type DevelopersStrings = {
  common: { nextSite: string; more: Head };
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
  common: { nextSite: '下一個站點', more: { label: '開發者', headline: '其他頁面' } },

  landing: {
    hero: {
      headline: '每個按鈕，背後都是一個 API 操作。',
      lede: 'REZICS 的網站自己就呼叫這套 API。你的程式送出 HTTP 請求，AI 代理經由 MCP 伺服器呼叫工具，抵達的都是同一個操作。',
    },
    ways: {
      label: '三種方式',
      headline: '三種方式進來，拿到同一份回應。',
      lead: '在藏書庫按下「下載藏書庫」，網站送出的就是這個請求。你的程式與 AI 代理送出相同的請求，經過同樣的檢查，拿到同一份藏書庫匯出。',
      person: { label: '人', body: '在 REZICS 的藏書庫頁面，按下「下載藏書庫」。' },
      calls: [
        {
          label: '程式',
          sample: { language: 'http', code: lines('GET /v1/me/library-export', '  ?actingSubject=…&limit=20', 'Authorization: Bearer …') },
        },
        {
          label: '代理',
          sample: { language: 'json', code: lines('tools/call  library_export', '{ "query": {', '    "actingSubject": "…",', '    "limit": 20 } }') },
        },
      ],
      shared: {
        label: '同一個操作',
        sample: { language: 'text', code: lines('operationId  getV1MeLibrary-export', 'profile      rezics-library-export-v1') },
      },
    },
    pages: {
      label: '六個部分',
      headline: '你會用到的六樣東西',
      lead: '每一頁的路徑、欄位與指令，都取自 REZICS 的原始碼。',
      lines: {
        api: '寫入可以安全重送，失敗時回傳固定的代碼',
        'mcp-server': 'AI 代理從 /mcp 連進來，工具依權限列出',
        apps: '以 OAuth 取得授權，使用者隨時收回',
        'wiki-toolkit': '在自己的電腦上抽取，只送出提案',
        zones: '為社群站點寫專屬的版面',
        'open-source': '平台 AGPL-3.0，獨立套件 Apache-2.0',
      },
    },
    statement: {
      text: 'REZICS 的網站不直接碰資料庫，所有讀寫都經過 API；',
      sub: '網站上做得到的事，API 一定也做得到。',
    },
    rules: {
      label: '規則',
      headline: '從哪裡進來，規則都一樣',
      rows: [
        { title: '同一個身分', code: 'actingSubject', body: '寫入時寫明這次以哪個身分行動。權杖不替你選身分，伺服器每次重新檢查。' },
        { title: '同一道上限', code: 'scope', body: '應用程式與 AI 代理拿到的權限，只會比使用者本人少，不會更多。' },
        { title: '同一張回執', code: 'Idempotency-Key', body: '寫入帶著冪等鍵。逾時後重送同一個請求，拿回原本的結果，不會多做一次。' },
        { title: '同一套代碼', code: 'application/problem+json', body: '失敗時回傳問題詳情，code 欄位固定，程式照代碼處理，不必解析訊息。' },
      ],
    },
    hubs: {
      label: '索引',
      headline: '別人做的工具，也有索引',
      lead: 'REZICS 也為其他人的 MCP 伺服器、Skill 與 API 建立索引，附上版本、相容性證據、評分與討論。',
      items: [
        { kind: 'mcp', line: 'MCP 伺服器的索引' },
        { kind: 'skills', line: 'AI 代理 Skill 的索引' },
        { kind: 'apis', line: '公開 API 的索引' },
      ],
    },
  },

  api: {
    hero: {
      headline: '把一本書標成讀過，就是一個 API 操作。',
      lede: '人在藏書庫把作品標成「讀過」，網站送出的就是下面這個請求。你的程式送出相同的請求，會得到相同的結果，也受相同的檢查。',
    },
    anatomy: {
      label: '寫入',
      headline: '一個寫入請求，逐行看',
      request: {
        language: 'http',
        code: lines(
          'PUT /v1/works/{id}/reader-status',
          'Authorization: Bearer …',
          'Idempotency-Key: 7f3c2a9e-read',
          'Content-Type: application/json',
          '',
          '{',
          '  "actingSubject": "https://rezics.com/id/…",',
          '  "expectedVersion": 3,',
          '  "status": "read",',
          '  "finishedOn": "2026-10-19"',
          '}',
        ),
      },
      caption: '版本號、日期與冪等鍵是示意值。',
      rows: [
        { code: '{id}', title: '路徑指向一部作品', body: 'REZICS 裡每樣東西都有一個以 https://rezics.com/id/ 開頭的固定識別碼，換語言、換站點都是同一個。' },
        { code: 'actingSubject', title: '寫明身分', body: '一個帳號可以代表自己，也可以代表組織。每次寫入都要寫明以誰的身分行動，伺服器在執行前檢查這個身分的權限。' },
        { code: 'Idempotency-Key', title: '讓重送安全', body: '每次寫入帶一把冪等鍵。逾時或斷線之後，用同一把鍵重送，不會多寫一次。' },
        { code: 'expectedVersion', title: '防止覆蓋', body: '你讀到第 3 版，就寫明第 3 版。別人在這之間先改了，這次寫入不會蓋過去。' },
        { code: 'application/problem+json', title: '錯誤是問題詳情', body: '失敗時，code 是固定的代碼，程式依它分支，不必比對訊息文字。' },
      ],
    },
    replay: {
      label: '重送',
      headline: '重送同一個請求，拿回同一個結果。',
      lead: '同一把鍵、同樣的內容再送一次，伺服器回傳第一次的結果，版本仍是 4，replayed 變成 true。同一把鍵換了內容，回傳 409 reader_status_conflict；版本已經不是 3，回傳 409 stale_reader_status，重新讀取再寫。',
      responses: [
        {
          label: '第一次',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": false', '}') },
        },
        {
          label: '重送',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": true', '}') },
        },
        {
          label: '版本過期',
          sample: { language: 'json', code: lines('409', '{', '  "status": 409,', '  "code":', '    "stale_reader_status"', '}') },
        },
      ],
    },
    sdk: {
      label: '型別',
      headline: 'API 和型別，來自同一份定義',
      lead: 'REZICS 的網站用 TypeScript 呼叫 API，請求與回應的型別直接取自伺服器的路由宣告。欄位改了名字，或多了一種錯誤代碼，呼叫端在編譯時就會知道。TypeScript SDK 由同一份定義產生，你拿到的型別和網站相同。',
      sample: {
        language: 'ts',
        code: lines(
          'main().v1.works({ id: uuid(work) })',
          "  ['reader-status'].put({",
          '    actingSubject, expectedVersion,',
          "    status: 'read', ...dates }, headers())",
        ),
      },
      caption: '節錄自 REZICS 網站的藏書庫功能。',
      openapi: 'OpenAPI 3.1 文件也由同一份路由宣告產生，寫明每個操作的驗證方式、請求格式，以及每種狀態碼的回應。',
      code: { path: 'generated/openapi/main/public.json' },
    },
    reads: {
      label: '讀取',
      headline: '讀取也有規矩',
      rows: [
        { code: 'nextCursor · snapshot', body: '長清單附上下一頁的游標，一頁接一頁讀到底。匯出藏書庫另附快照，資料在中途改變時會明說，不會交給你拼湊的檔案。' },
        { code: 'count.precision', body: '搜尋結果的總數會寫明是精確值，還是「至少這麼多」。' },
        { code: 'title.language · basis', body: '標題附語言標籤與書寫方向，並說明這個語言是你要求的、同一種文字的、其他文字的，還是備用的。' },
        { code: '404 resource_unavailable', body: '你無權看見的資源，回應和不存在的資源一樣，不會透露它存在。' },
      ],
    },
  },

  mcp: {
    hero: {
      headline: '你的 AI 代理，從 /mcp 進來。',
      lede: 'REZICS 在 /mcp 提供遠端 MCP 伺服器。代理帶著你授權的權杖連線，看到的工具依它目前的權限列出，每個工具都對應一個 HTTP 操作。',
    },
    adapter: {
      label: '轉接',
      headline: 'MCP 只負責轉接，不是另一條寫入的路。',
      body: [
        '每次工具呼叫只轉送一次到對應的 HTTP 操作，帶著同一個權杖與冪等鍵。誰在行動、能做什麼、用掉多少請求額度，都由那個操作決定。',
        '工具讀到的作品內文與網頁文字一律當成資料，不會當成指令。',
      ],
    },
    connect: {
      label: '連線',
      headline: '連線的四個步驟',
      rows: [
        { title: '讀取資源中繼資料', code: 'GET /.well-known/oauth-protected-resource/mcp', body: '沒有權杖的請求會收到 401，標頭指向這份中繼資料，裡面寫明授權伺服器與支援的範圍。' },
        { title: '登記並取得權杖', code: 'RFC 7591 · PKCE', body: 'AI 代理的用戶端可以自行登記，再以授權碼加 PKCE 取得權杖。登記本身不給任何資源權限。' },
        { title: '列出工具', code: 'tools/list', body: '清單只列出這個身分目前能用的工具。' },
        { title: '呼叫工具', code: 'tools/call', body: '結果原樣帶回 HTTP 狀態碼、標頭與內容，狀態碼 400 以上會標成錯誤。' },
      ],
    },
    same: {
      label: '同一個操作',
      headline: '代理的呼叫，轉送到同一個 HTTP 操作。',
      calls: [
        { label: '程式', sample: { language: 'http', code: lines('GET /v1/search/catalogue', '  ?q=旅行&limit=5') } },
        { label: '代理', sample: { language: 'json', code: lines('tools/call  search_catalogue', '{ "query": {', '    "q": "旅行",', '    "limit": 5 } }') } },
      ],
      shared: {
        label: '同一份回應',
        sample: { language: 'text', code: lines('operationId  getV1SearchCatalogue', 'profile      public-catalogue-ranked-v1') },
      },
      caption: '以「旅行」搜尋目錄（示意）。代理拿到同一份回應，外面多包一層 HTTP 狀態碼與標頭；參數照 HTTP 操作分組成 path、query、headers 與 body。',
    },
    tools: {
      label: '工具',
      headline: '工具清單',
      lead: '工具由 API 的能力宣告產生。宣告寫明工具名稱、用途與需要的權限範圍；名稱重複，或對應的操作不存在，產生就會失敗。',
      scopes: '需要的範圍',
      groups: [
        {
          name: '讀取目錄',
          tools: [
            { title: '以關鍵字搜尋目錄', code: { tool: 'search_catalogue', op: 'GET /v1/search/catalogue', scopes: ['work:read'] } },
            { title: '讀取一個資源', code: { tool: 'read_resource', op: 'GET /v1/resources/{resource}', scopes: ['work:read', 'context:read'] } },
            { title: '一次讀取多個資源摘要', code: { tool: 'resource_summaries', op: 'POST /v1/resources/summaries', scopes: ['work:read', 'context:read'] } },
            { title: '讀取資源的關聯', code: { tool: 'resource_relations', op: 'GET /v1/resources/{resource}/relations', scopes: ['work:read'] } },
            { title: '讀取作品的各個版本', code: { tool: 'work_editions', op: 'GET /v1/works/{id}/releases', scopes: ['work:read'] } },
          ],
        },
        {
          name: '藏書庫',
          tools: [
            { title: '匯出整個藏書庫', code: { tool: 'library_export', op: 'GET /v1/me/library-export', scopes: ['work:read', 'rating:read'] } },
            { title: '上傳藏書庫檔案', code: { tool: 'library_import_create', op: 'POST /v1/me/library-imports', scopes: ['work:read', 'library:write'] } },
            { title: '逐列檢視比對結果', code: { tool: 'library_import_rows', op: 'GET /v1/me/library-imports/{id}/rows', scopes: ['work:read'] } },
            { title: '替一列選定作品', code: { tool: 'library_import_resolve', op: 'PUT /v1/me/library-imports/{id}/rows/{row}', scopes: ['work:read', 'library:write'] } },
            { title: '採用目錄外的候選作品', code: { tool: 'library_import_adopt', op: 'POST /v1/me/library-imports/{id}/rows/{row}/adoptions', scopes: ['work:read', 'library:write', 'work:create'] } },
            { title: '套用審閱過的匯入', code: { tool: 'library_import_apply', op: 'POST /v1/me/library-imports/{id}/apply', scopes: ['work:read', 'library:write', 'collection:edit', 'rating:read', 'rating:submit'] } },
            { title: '查看匯入進度', code: { tool: 'library_import_status', op: 'GET /v1/me/library-imports/{id}/apply', scopes: ['work:read'] } },
            { title: '刪除上傳的檔案', code: { tool: 'library_import_delete', op: 'DELETE /v1/me/library-imports/{id}', scopes: ['work:read', 'library:write'] } },
          ],
        },
        {
          name: 'Wiki',
          tools: [
            { title: '比對抽出的名稱', code: { tool: 'wiki_candidates', op: 'POST /v1/wiki/candidates', scopes: ['wiki:propose'] } },
            { title: '預檢一份抽取結果', code: { tool: 'wiki_validate', op: 'POST /v1/wiki/validations', scopes: ['wiki:propose'] } },
            { title: '讀取已接受的 Wiki 內容', code: { tool: 'wiki_history', op: 'GET /v1/wiki/{work}/history', scopes: ['work:read'] } },
            { title: '讀取主張的出處與引文', code: { tool: 'wiki_evidence', op: 'GET /v1/wiki/evidence/{id}', scopes: ['work:read'] } },
          ],
        },
      ],
    },
    limits: {
      label: '上限',
      headline: '每次呼叫的界線',
      rows: [
        { title: '30 秒', body: '每次工具呼叫的期限。' },
        { title: '1 MiB', body: '一般工具請求的大小上限，上傳藏書庫檔案另計。' },
        { title: '無狀態', body: '每個請求各自驗證權杖，伺服器不保留工作階段。' },
      ],
    },
  },

  apps: {
    hero: {
      headline: '應用拿到的權限，永遠不比你多。',
      lede: 'REZICS 把登入、代表的身分、資源權限與應用授權分開記錄。應用程式與 AI 代理的權杖，只能在這些界線之內再縮小。',
    },
    layers: {
      label: '四層',
      headline: '一層比一層窄',
      body: ['帳號、身分、安裝與同意、權杖範圍，四層分開記錄，內層永遠落在外層裡面。應用拿到的，只會是最裡面那一層。'],
    },
    each: {
      label: '逐層',
      headline: '每一層管的事',
      rows: [
        { title: '帳號', body: '帳號服務確認你是誰。光是登入，不代表能動任何資源。' },
        { title: '身分', body: '你以個人或組織的身分行動。資源權限給的是身分，不是帳號。' },
        { title: '安裝與同意', body: '安裝與同意是兩道各自獨立的上限。登記一個應用，本身不會得到任何資源權限。' },
        { title: '權杖範圍', body: '權杖只帶著你同意的範圍，例如 library:write。每個操作仍會重新檢查這次以哪個身分行動。' },
      ],
    },
    authorize: {
      label: '授權',
      headline: '授權碼加上 PKCE',
      sample: {
        language: 'http',
        code: lines(
          'GET /api/auth/oauth2/authorize',
          '  ?response_type=code',
          '  &client_id=…',
          '  &redirect_uri=https://app.example/cb',
          '  &scope=work:read%20library:write',
          '  &code_challenge=…',
          '  &code_challenge_method=S256',
          '  &state=…',
        ),
      },
      caption: '授權請求送到 REZICS 的帳號服務。轉回網址必須和登記時完全相同。',
    },
    consent: {
      label: '同意',
      headline: '同意畫面會寫明的事',
      rows: [
        { text: '應用的名稱與網站', code: 'name · uri' },
        { text: '每項權限在做什麼，以你的語言說明', code: 'scopes[].description' },
        { text: '應用尚未通過驗證時，會清楚標示', code: 'unverified' },
        { text: '授權完成後轉回哪個網域', code: 'redirectHost' },
        { text: '應用的隱私權政策與服務條款', code: 'policy · terms' },
      ],
      note: 'REZICS 自己的產品不顯示同意畫面，它們在帳號頁面以產品工作階段列出。',
    },
    revoke: {
      label: '收回',
      headline: '隨時收回',
      rows: [
        { title: '一覽', body: '帳號的「連結應用」頁面列出每個應用：能做什麼、何時授權、最後一次使用。' },
        { title: '確認', body: '移除之前，會再驗證一次你的身分。' },
        { title: '失效', body: '移除之後，應用手上的權杖就不能再用，用來續期的權杖也一樣。' },
        { title: '停用', body: 'REZICS 停用的應用會標示出來，它留下的授權你仍然可以移除。' },
      ],
    },
  },

  wiki: {
    hero: {
      headline: 'REZICS 收到的是提案，不是全文。',
      lede: '持有文本的人，用自己的 AI 代理與模型逐章抽出角色、別名、關係、事件與地點。每一項都附上定位與短引文，送到 REZICS 由人審查。工具組不連網，也不回報使用紀錄。',
    },
    boundary: {
      label: '界線',
      headline: '什麼留下，什麼送出',
      body: [
        '原始檔案與完整的章節文字留在你的電腦，轉換與定位由工具組離線完成。送到 REZICS 的是角色、別名、關係、事件與地點，每一項附上定位與短引文，再加上抽取時用的 AI 代理與模型，以及推論在本機還是雲端。',
        '用雲端模型時，代理讀到的文字會送到那家模型供應者，這由你決定。要完全留在本機，就用本機模型，並關掉能讀取檔案的雲端工具。',
      ],
    },
    steps: {
      label: '步驟',
      headline: '從一個檔案到一份提案',
      sample: {
        language: 'sh',
        code: lines('rezics-wiki units novel.epub', 'rezics-wiki verify novel.epub \\', '  - < locator.json'),
      },
      caption: 'units 每行輸出一個段落與它的定位；verify 讀進一個定位，用同一個檔案核對引文。',
      rows: [
        { code: 'rezics-wiki units', title: '切成段落', body: '把 TXT、EPUB 2/3 或視覺小說的純文字腳本（.rpy）轉成段落，每段附上 rezics-locator-v1 定位與整個檔案的 SHA-256 雜湊值。' },
        { code: 'skill/SKILL.md', title: '交給你的 AI 代理', body: '工具組附一份 Skill，教代理逐章抽取，並分清楚敘述、角色說的話、傳聞與假設。' },
        { code: 'wiki_candidates · wiki_validate', title: '比對與預檢', body: '先查已有的名稱與別名，結果分成相符、新增、不明確與無法取得；再預檢引文額度與缺漏的章節對應。' },
        { code: 'wiki-extraction-v1', title: '送去審查', body: '提案經人審查後才會發布。審查者手上有同一個版本，就能在自己的電腦上核對每段引文。' },
        { code: 'wiki-delta-v1', title: '接著寫新章節', body: '之後的章節以差異提案送出。沒提到的既有內容維持原樣，不會被默默刪除。' },
      ],
    },
    limits: {
      label: '上限',
      headline: '支援與上限',
      rows: [
        { title: 'TXT、EPUB、.rpy', body: '支援的檔案格式。' },
        { title: '200', body: '每段引文的字元上限。' },
        { title: '128 MiB', body: '單一檔案的大小上限。' },
      ],
    },
    statement: {
      text: '不解密，也不繞過；',
      sub: '受保護的檔案會直接讀取失敗。工具組沒有解密、金鑰還原或任何繞過保護的功能，也不推薦這類外掛。',
      licence: '工具組與它使用的協定都以 Apache-2.0 授權，不引用 REZICS 的 AGPL 程式碼。不需要 REZICS 帳號，任何相容的伺服器都能搭配；範例只用公有領域或自己有權使用的作品。',
    },
  },

  zones: {
    hero: {
      headline: '版面歸 Zone，資料與規則歸平台。',
      lede: 'Zone 是社群自己的站點，可以帶自己的展示程式碼。程式碼只負責排版，資料由平台讀好再交給它，權限與審查也都留在平台。',
    },
    theme: {
      label: '主題',
      headline: '先用設定，再寫程式',
      body: ['每個 Zone 都從一組預設主題開始，調整密度、頁面底色與封面比例，需要時換上自己的強調色，再排列主視覺輪播、書架、排行與編輯清單等模組。設定排不出來的版面，才需要展示程式碼。'],
    },
    settings: {
      label: '設定',
      headline: '一組主題設定',
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
      caption: '主題設定的全部必填欄位，型別來自 @rezics/zone-sdk。',
    },
    slots: {
      label: '插槽',
      headline: '程式碼填進具名插槽',
      lead: '展示程式碼是一個套件，在頁首、主視覺、搜尋列、資料面板、作品卡、模組與頁尾這些具名插槽裡，換上自己的元件。每個插槽都會收到平台自己的版本，套件可以包住它，也可以取代它。',
      pkg: {
        language: 'ts',
        code: lines(
          'export default defineZonePackage({',
          "  slug: 'anime',",
          '  css,',
          "  catalogue: { count: 'episodes',",
          '    formatNames: animeFormatNames },',
          '  slots: {',
          '    browseHeader: AnimeBrowseHeader,',
          '    workCard: AnimeCard,',
          '    cataloguePanel: AnimeCataloguePanel,',
          '    footer: AnimeFooter,',
          '  },',
          '});',
        ),
      },
      caption: 'REZICS 動畫 Zone 的套件進入點，原樣節錄。',
    },
    rules: {
      label: '界線',
      headline: '套件的界線',
      rows: [
        { title: '不自己抓資料', body: '資料由平台讀好再送進插槽，套件不發出請求。' },
        { title: '不碰憑證', body: '不讀 Cookie、瀏覽器儲存空間或任何憑證。' },
        { title: '不遮住平台介面', body: '帳號選單、Zone 選單、檢舉與年齡確認都在插槽之外，每部作品的「為何在此」標記也一直都在。' },
        { title: '樣式只影響自己', body: '樣式限定在這個 Zone 的範圍裡，顏色與字型只用平台提供的變數。' },
        { title: '有大小上限', body: '壓縮後 CSS 不超過 40 KB，JavaScript 不超過 50 KB。' },
      ],
    },
    review: {
      label: '上線',
      headline: '從審查到上線',
      rows: [
        { title: '算出雜湊值', body: '套件的所有檔案合起來算出一個雜湊值。改動任何一個位元組，雜湊值就不同。' },
        { title: '由另一個人審查', body: '另一個帳號檢查原始碼、建置出的檔案、無障礙與出錯時的表現，記下決定與證據的雜湊值。' },
        { title: '啟用並設定到期日', body: '只有審查過的版本能啟用，而且有到期日。退回舊版本，也不會讓舊的核准復活。' },
        { title: '隨時退回標準版面', body: '雜湊值不符就顯示標準版面。讀者可以關掉套件，在網址加上 ?safe 進入安全模式，平台也有全站總開關。' },
      ],
    },
    statement: {
      text: '後端只有一套，前端隨你寫；',
      sub: '新的社群站點不需要新的後端程式。展示程式碼只讀公開 API，不放商業邏輯，所以 Zone 畫得出來的資料，AI 代理也能從 API 讀到。',
    },
  },

  open: {
    hero: {
      headline: '原始碼公開，獨立套件任你取用。',
      lede: '服務、網站、帳號頁面、設計文件與 API 定義，都在同一個公開的儲存庫。平台以 AGPL-3.0 授權；可以單獨使用的套件以 Apache-2.0 授權，不依賴 REZICS 的服務。',
      link: '前往原始碼',
      href: shared.footer.sourceUrl,
    },
    licences: {
      label: '授權',
      headline: '兩種授權',
      rows: [
        { code: { name: 'AGPL-3.0', paths: 'services/ · apps/ · generated/ · docs/' }, line: '平台本身：服務、網站、帳號頁面與文件。' },
        { code: { name: 'Apache-2.0', paths: 'packages/wiki-toolkit/ · packages/document/' }, line: '獨立套件：@rezics/wiki-toolkit 與 @rezics/document，不需要 REZICS 帳號。' },
      ],
    },
    map: {
      label: '儲存庫',
      headline: '儲存庫裡有什麼',
      rows: [
        { code: 'services/', licence: 'AGPL-3.0', body: '後端服務。Main 提供 API 與 MCP 伺服器，Account 負責登入與 OAuth 授權。' },
        { code: 'apps/web/', licence: 'AGPL-3.0', body: 'REZICS 網站。它和你的程式一樣，只透過 API 取得資料。' },
        { code: 'apps/web/zones/official/', licence: 'AGPL-3.0', body: '官方 Zone 的展示程式碼，一個套件一個資料夾。' },
        { code: 'apps/accounts/', licence: 'AGPL-3.0', body: '帳號頁面：登入、安全性與連結應用。' },
        { code: 'packages/wiki-toolkit/', licence: 'Apache-2.0', body: '本機 Wiki 工具組，連同它的協定與 Skill。' },
        { code: 'packages/document/', licence: 'Apache-2.0', body: 'REZICS 文件格式，以 JSON 結構描述定義文字與區塊。' },
        { code: 'generated/openapi/', licence: 'AGPL-3.0', body: '從路由宣告產生的 OpenAPI 文件。' },
        { code: 'docs/', licence: 'AGPL-3.0', body: '設計決定、契約與營運程序，連同理由一起寫下。' },
      ],
    },
    run: {
      label: '執行',
      headline: '在自己的電腦上執行',
      lead: '裝好固定版本的工具鏈與容器執行環境，三個指令就能啟動 API、帳號服務、網站與帳號頁面，並列出它們的網址。',
      blocks: [
        { sample: { language: 'sh', code: lines('task toolchain:install', 'task dev', 'task urls') }, caption: '取自儲存庫的說明文件。' },
        {
          sample: {
            language: 'ts',
            code: lines(
              'import { fromPlainText, parseDocument,',
              "  serializeDocument } from '@rezics/document';",
              '',
              "const snapshot = fromPlainText('漢字\\nSecond paragraph');",
              'parseDocument(snapshot);',
              'const stored = serializeDocument(snapshot);',
            ),
          },
          caption: '@rezics/document 不需要 REZICS 帳號、服務或資料庫。範例節錄自它的說明文件。',
        },
      ],
    },
    statement: {
      text: '規則寫進程式碼，理由寫進文件；',
      sub: '能用型別、測試與檢查表達的規則，就寫成程式；為什麼這樣決定，寫在文件裡，附上日期與理由。',
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
      label: '總覽',
      meta: {
        title: 'REZICS 開發者：同一套 API',
        description: 'REZICS 網站上的每個按鈕，背後都是一個 API 操作。你的程式用 HTTP 呼叫，AI 代理經由 MCP 伺服器呼叫，身分檢查、回執與錯誤代碼都和人按下按鈕時一樣。',
      },
    },
    {
      slug: 'api',
      label: 'API 與 SDK',
      meta: {
        title: 'API 與 SDK：每個操作都有契約',
        description: 'REZICS 每個 API 操作寫明路徑、權限範圍、冪等鍵與錯誤代碼。OpenAPI 文件與 TypeScript 型別都由同一份路由宣告產生，網站和你的程式拿到的一樣。',
      },
    },
    {
      slug: 'mcp-server',
      label: 'MCP 伺服器',
      meta: {
        title: 'REZICS 的 MCP 伺服器',
        description: 'AI 代理以 OAuth 授權連上 REZICS 遠端 MCP 伺服器，使用由 API 宣告產生的工具。每次呼叫只轉送一次到對應的 HTTP 操作，身分、權限與預算都由該操作決定。',
      },
    },
    {
      slug: 'apps',
      label: '連結應用',
      meta: {
        title: '連結應用：用 OAuth 取得授權',
        description: '第三方應用以 OAuth 授權碼加 PKCE 取得權杖。同意畫面用使用者的語言列出每項權限；使用者在帳號的連結應用頁面能看到並移除授權，權杖隨之無法再用。',
      },
    },
    {
      slug: 'wiki-toolkit',
      label: 'Wiki 工具組',
      meta: {
        title: '本機 Wiki 工具組：REZICS 不收全文',
        description: '開放原始碼的 Wiki 工具組在你的電腦上把 TXT 與 EPUB 切成可驗證的段落。你選的 AI 代理抽出角色與事件，REZICS 只收到附定位與短引文的提案，從不收到全文。',
      },
    },
    {
      slug: 'zones',
      label: 'Zone 主題',
      meta: {
        title: 'Zone 主題與展示程式碼',
        description: '每個 Zone 都能用主題設定與模組排出自己的站點，也能帶專屬的展示程式碼填進具名插槽。程式碼經另一人審查並鎖定雜湊值才執行，讀者隨時能切回標準版面。',
      },
    },
    {
      slug: 'open-source',
      label: '開放原始碼',
      meta: {
        title: '開放原始碼：AGPL 與 Apache',
        description: 'REZICS 平台原始碼以 AGPL-3.0 公開，能在本機跑起整套服務。Wiki 工具組與文件格式等獨立套件採 Apache-2.0 授權，不需要 REZICS 帳號。',
      },
    },
  ],
  strings,
} satisfies MiniSite<DevelopersStrings>;
