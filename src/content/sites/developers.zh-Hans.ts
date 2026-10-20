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
    nextSite: '下一个站点',
    more: { label: '开发者', headline: '其他页面' },
    closing: {
      title: '用同一套 API，打造自己的工具。',
      body: '让自己的程序读写作品、书架和社区数据。每次操作都遵循 REZICS 的身份与授权规则。',
    },
  },
  alts: {
    hero: '暖白色纸面上，三条纸带分别从上方、右侧和下方伸来，末端都压在同一张深蓝灰色纸片下。',
    mcp: '一张深蓝灰色的纸上打了一排圆孔，一条浅蓝色纸带在孔间上下穿过。',
    apps: '四张纸片由大到小叠在一起，最外层是深蓝灰色，最上面是最小的一张浅蓝色纸。',
    wiki: '一叠厚厚的米白色和浅蓝色纸张整齐叠好，旁边放着三张细长的深蓝灰色纸条。',
    zones: '一张深蓝灰色的纸折成立起的小框，框上开了一扇窗，后面立着一张浅蓝色的纸。',
  },

  landing: {
    hero: {
      headline: '每个按钮，都是一次 API 操作。',
      lede: 'REZICS 网站本身就调用这套 API。你的程序发送 HTTP 请求，AI 代理通过 MCP 服务器调用工具，最终执行的都是同一项操作。',
    },
    ways: {
      label: '三种方式',
      headline: '通过三种方式，得到同一份响应。',
      lead: '在书架页面点击“下载书架”，网站发送的就是这个请求。你的程序和代理发送相同的请求，经过同样的检查，得到同一份书架导出文件。',
      person: { label: '用户', body: '在 REZICS 的书架页面，点击“下载书架”。' },
      calls: [
        {
          label: '程序',
          sample: { language: 'http', code: lines('GET /v1/me/library-export', '  ?actingSubject=…&limit=20', 'Authorization: Bearer …') },
        },
        {
          label: '代理',
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
          caption: 'tools/call 的参数。身份由你指定。',
        },
      ],
      shared: {
        label: '同一项操作',
        sample: { language: 'text', code: lines('operationId', '  getV1MeLibrary-export', 'profile', '  rezics-library-export-v1') },
      },
    },
    pages: {
      label: '六个部分',
      headline: '你会用到的六样东西',
      lead: '每一页的路径、字段和命令都取自 REZICS 源代码。',
      lines: {
        api: '写入请求可以安全重试，失败时返回固定代码',
        'mcp-server': 'AI 代理从 /mcp 接入，工具按权限列出',
        apps: '通过 OAuth 获取授权，用户可以随时撤销',
        'wiki-toolkit': '在自己的电脑上抽取内容，只提交提案',
        zones: '为社区站点编写专属版面',
        'open-source': '平台采用 AGPL-3.0，独立软件包采用 Apache-2.0',
      },
    },
    statement: {
      text: 'REZICS 网站不直接访问数据库，所有读写都通过 API；',
      sub: '网站能做的事，API 也都能做到。',
    },
    rules: {
      label: '规则',
      headline: '从哪里接入，规则都一样',
      rows: [
        { title: '同一个身份', code: 'actingSubject', body: '写入时注明本次以哪个身份操作。访问令牌不会替你选择身份，服务器每次都会重新检查。' },
        { title: '同一权限上限', code: 'scope', body: '应用程序和代理获得的权限只会少于用户本人，不会更多。' },
        { title: '同一张回执', code: 'Idempotency-Key', body: '写入请求带有幂等键。超时后用同一个请求重试，会得到原来的结果，不会重复执行。' },
        { title: '同一套代码', code: 'application/problem+json', body: '失败时返回问题详情，code 字段固定，程序按代码处理，无需解析消息。' },
      ],
    },
    hubs: {
      label: '索引',
      headline: '其他人制作的工具，也有索引',
      lead: 'REZICS 也为其他人的 MCP 服务器、Skill 和 API 建立索引，收录版本、来源、测试或使用记录、评分和讨论。',
      items: [
        { kind: 'mcp', line: 'MCP 服务器索引' },
        { kind: 'skills', line: 'AI 代理 Skill 索引' },
        { kind: 'apis', line: '公开 API 索引' },
      ],
    },
  },

  api: {
    hero: {
      headline: '把一本书标记为读过，就是一次 API 操作。',
      lede: '用户在书架中把作品标记为“读过”，网站发送的就是下面这个请求。你的程序发送相同的请求，会得到相同的结果，也会经过相同的检查。',
    },
    anatomy: {
      label: '写入',
      headline: '逐行看一个写入请求',
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
      caption: '版本号、日期和幂等键仅作示意。',
      rows: [
        { code: '{id}', title: '路径指向一部作品', body: 'REZICS 中的每个实体都有一个以 https://rezics.com/id/ 开头的固定标识符，切换语言或站点后仍然相同。' },
        { code: 'actingSubject', title: '注明身份', body: '一个账户可以代表自己，也可以代表组织。每次写入都要注明以哪个身份操作，服务器会在执行前检查该身份的权限。' },
        { code: 'Idempotency-Key', title: '安全重试', body: '每次写入都带有幂等键。超时或断线后，用同一个键重试，不会重复写入。' },
        { code: 'expectedVersion', title: '避免覆盖', body: '你读取的是第 3 版，写入时就注明第 3 版。如果期间有人先做了修改，本次写入不会覆盖对方的内容。' },
        { code: 'application/problem+json', title: '错误会返回问题详情', body: '失败时，code 是固定代码，程序按它分支处理，无需比对消息文本。' },
      ],
    },
    replay: {
      label: '重试',
      headline: '重试同一个请求，得到同一个结果。',
      lead: '使用同一个键再次发送相同内容，服务器会返回第一次的结果，版本仍是 4，replayed 变为 true。同一个键对应不同内容时，返回 409 reader_status_conflict；版本已不是 3 时，返回 409 stale_reader_status，需要重新读取后再写入。',
      responses: [
        {
          label: '首次请求',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": false', '}') },
        },
        {
          label: '重试',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": true', '}') },
        },
        {
          label: '版本过期',
          sample: { language: 'json', code: lines('409', '{', '  "status": 409,', '  "code":', '    "stale_reader_status"', '}') },
        },
      ],
    },
    sdk: {
      label: '类型',
      headline: 'API 和类型来自同一份定义',
      lead: 'REZICS 网站使用 TypeScript 调用 API，请求和响应的类型直接取自服务器的路由声明。字段改名或新增错误代码时，调用端在编译时就会发现。TypeScript SDK 也由同一份定义生成，因此你拿到的类型和网站相同。',
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
      caption: '摘自 REZICS 网站的书架功能。',
      openapi: 'OpenAPI 3.1 文档也由同一份路由声明生成，注明每项操作的验证方式、请求格式和各状态码对应的响应。',
      code: { path: 'generated/openapi/main/public.json' },
    },
    reads: {
      label: '读取',
      headline: '读取也有规则',
      rows: [
        { code: 'nextCursor · snapshot', body: '长列表会附上下一页游标，方便逐页读到底。导出的书架数据还会附带快照；如果数据在中途发生变化，会明确说明，不会让你拼凑文件。' },
        { code: 'count.precision', body: '搜索结果总数会注明是精确值，还是“至少这么多”。' },
        { code: 'title.language · basis', body: '标题附有语言标签和书写方向，并说明这是你指定的语言、同一种文字的语言、其他文字的语言，还是备用语言。' },
        { code: '404 resource_unavailable', body: '你无权查看的资源会像不存在的资源一样响应，不会泄露它的存在。' },
      ],
    },
  },

  mcp: {
    hero: {
      headline: '你的 AI 代理从 /mcp 接入。',
      lede: 'REZICS 在 /mcp 提供远程 MCP 服务器。代理使用你授权的令牌连接，可用工具会按当前权限列出，每个工具都对应一项 HTTP 操作。',
    },
    adapter: {
      label: '转接',
      headline: 'MCP 只负责转接，不会另开一条写入通道。',
      body: [
        '每次工具调用只会转发一次到对应的 HTTP 操作，并携带同一个令牌和幂等键。操作会决定由谁执行、能做什么，以及使用多少请求额度。',
        '工具读取到的作品正文和网页文字一律视为数据，不会当成指令。',
      ],
    },
    connect: {
      label: '连接',
      headline: '连接分四步',
      rows: [
        { title: '读取资源元数据', code: 'GET /.well-known/oauth-protected-resource/mcp', body: '没有令牌的请求会收到 401 响应，响应头会指向这份元数据，其中注明授权服务器和支持的权限范围。' },
        { title: '注册并获取令牌', code: 'RFC 7591 · PKCE', body: '代理客户端可以自行注册，再通过授权码和 PKCE 获取令牌。注册本身不会获得任何资源权限。' },
        { title: '列出工具', code: 'tools/list', body: '列表只会列出这个身份当前可用的工具。' },
        { title: '调用工具', code: 'tools/call', body: '结果会原样返回 HTTP 状态码、响应头和内容，状态码达到 400 或更高时会标记为错误。' },
      ],
    },
    same: {
      label: '同一项操作',
      headline: '代理的调用会转发到同一项 HTTP 操作。',
      calls: [
        { label: '程序', sample: { language: 'http', code: lines('GET /v1/search/catalogue', '  ?q=旅行&limit=5') } },
        {
          label: '代理',
          sample: {
            language: 'json',
            code: lines(
              '{',
              '  "name": "search_catalogue",',
              '  "arguments": {',
              '    "query": {',
              '      "q": "旅行",',
              '      "limit": 5',
              '    }',
              '  }',
              '}',
            ),
          },
          caption: '通过 tools/call 发送这组参数。',
        },
      ],
      shared: {
        label: '同一份响应',
        sample: { language: 'text', code: lines('operationId', '  getV1SearchCatalogue', 'profile', '  public-catalogue-ranked-v1') },
      },
      caption: '按“旅行”搜索目录（示意）。代理得到同一份响应，外层多包了一层 HTTP 状态码和响应头；参数按 HTTP 操作分为 path、query、headers 和 body。',
    },
    tools: {
      label: '工具',
      headline: '工具列表',
      lead: '工具根据 API 的能力声明生成。声明注明工具名称、用途和所需权限范围；如果名称重复或对应的操作不存在，生成就会失败。',
      scopes: '所需权限范围',
      groups: [
        {
          name: '读取目录',
          tools: [
            { title: '按关键词搜索目录', code: { tool: 'search_catalogue', op: 'GET /v1/search/catalogue', scopes: ['work:read'] } },
            { title: '读取一个资源', code: { tool: 'read_resource', op: 'GET /v1/resources/{resource}', scopes: ['work:read', 'context:read'] } },
            { title: '一次读取多个资源摘要', code: { tool: 'resource_summaries', op: 'POST /v1/resources/summaries', scopes: ['work:read', 'context:read'] } },
            { title: '读取资源的关联', code: { tool: 'resource_relations', op: 'GET /v1/resources/{resource}/relations', scopes: ['work:read'] } },
            { title: '读取作品的各个版本', code: { tool: 'work_editions', op: 'GET /v1/works/{id}/releases', scopes: ['work:read'] } },
          ],
        },
        {
          name: '书架',
          tools: [
            { title: '导出整个书架', code: { tool: 'library_export', op: 'GET /v1/me/library-export', scopes: ['work:read', 'rating:read'] } },
            { title: '上传书架文件', code: { tool: 'library_import_create', op: 'POST /v1/me/library-imports', scopes: ['work:read', 'library:write'] } },
            { title: '逐行查看匹配结果', code: { tool: 'library_import_rows', op: 'GET /v1/me/library-imports/{id}/rows', scopes: ['work:read'] } },
            { title: '为一行选择作品', code: { tool: 'library_import_resolve', op: 'PUT /v1/me/library-imports/{id}/rows/{row}', scopes: ['work:read', 'library:write'] } },
            { title: '采用目录之外的候选作品', code: { tool: 'library_import_adopt', op: 'POST /v1/me/library-imports/{id}/rows/{row}/adoptions', scopes: ['work:read', 'library:write', 'work:create'] } },
            { title: '应用已审核的导入', code: { tool: 'library_import_apply', op: 'POST /v1/me/library-imports/{id}/apply', scopes: ['work:read', 'library:write', 'collection:edit', 'rating:read', 'rating:submit'] } },
            { title: '查看导入进度', code: { tool: 'library_import_status', op: 'GET /v1/me/library-imports/{id}/apply', scopes: ['work:read'] } },
            { title: '删除上传的文件', code: { tool: 'library_import_delete', op: 'DELETE /v1/me/library-imports/{id}', scopes: ['work:read', 'library:write'] } },
          ],
        },
        {
          name: 'Wiki',
          tools: [
            { title: '匹配抽取出的名称', code: { tool: 'wiki_candidates', op: 'POST /v1/wiki/candidates', scopes: ['wiki:propose'] } },
            { title: '预检一份抽取结果', code: { tool: 'wiki_validate', op: 'POST /v1/wiki/validations', scopes: ['wiki:propose'] } },
            { title: '读取已接受的 Wiki 内容', code: { tool: 'wiki_history', op: 'GET /v1/wiki/{work}/history', scopes: ['work:read'] } },
            { title: '读取主张的来源和引文', code: { tool: 'wiki_evidence', op: 'GET /v1/wiki/evidence/{id}', scopes: ['work:read'] } },
          ],
        },
      ],
    },
    limits: {
      label: '限制',
      headline: '每次调用的限制',
      rows: [
        { title: '30 秒', body: '每次工具调用的时限。' },
        { title: '1 MiB', body: '一般工具请求的大小上限，上传书架文件另行计算。' },
        { title: '无状态', body: '每个请求都会单独验证令牌，服务器不保留会话。' },
      ],
    },
  },

  apps: {
    hero: {
      headline: '应用获得的权限，永远不会多于你。',
      lede: 'REZICS 分别记录登录、代表身份、资源权限和应用授权。应用程序和 AI 代理的令牌只能在这些边界内进一步缩小权限。',
    },
    layers: {
      label: '四层',
      headline: '权限逐层收窄',
      body: ['账户、身份、安装与同意、令牌范围分成四层记录，内层始终位于外层范围内。应用获得的权限只会到最内层。'],
    },
    each: {
      label: '逐层',
      headline: '每一层负责什么',
      rows: [
        { title: '账户', body: '账户服务确认你的身份。登录本身不代表可以操作任何资源。' },
        { title: '身份', body: '你以个人或组织身份操作，服务器会检查这层代表关系和资源权限。' },
        { title: '安装与同意', body: '安装和同意分别构成一道权限上限。注册应用本身不会获得任何资源权限。' },
        { title: '令牌范围', body: '令牌只包含你同意的权限范围，例如 library:write。每项操作仍会重新检查本次使用的身份。' },
      ],
    },
    authorize: {
      label: '授权',
      headline: '授权码与 PKCE',
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
      caption: '授权请求会发送到 REZICS 账户服务。回调网址必须与注册时完全一致。',
    },
    consent: {
      label: '同意',
      headline: '同意页面会注明这些信息',
      rows: [
        { text: '应用名称和网站', code: 'name · uri' },
        { text: '每项权限都会用你的语言说明，缺少译文时使用英文', code: 'scopes[].description' },
        { text: '应用尚未通过验证时会明确标出', code: 'unverified' },
        { text: '授权完成后跳转到哪个域名', code: 'redirectHost' },
        { text: '应用的隐私政策和服务条款', code: 'policy · terms' },
      ],
      note: 'REZICS 自有产品不会显示同意页面，它们会以产品会话的形式列在账户页面中。',
    },
    revoke: {
      label: '撤销',
      headline: '随时撤销授权',
      rows: [
        { title: '查看', body: '账户的“已连接应用”页面会列出每个应用的权限、授权时间和最近使用时间。' },
        { title: '确认', body: '移除前会再次验证你的身份。' },
        { title: '失效', body: '移除后，应用持有的令牌将无法继续使用，续期令牌也一样。' },
        { title: '停用', body: 'REZICS 停用的应用会明确标出，你仍然可以移除它留下的授权。' },
      ],
    },
  },

  wiki: {
    hero: {
      headline: 'REZICS 收到的是提案，不是全文。',
      lede: '文本持有者可以使用自己的 AI 代理和模型，逐章抽取角色、别名、关系、事件和地点。每一项都附有定位信息和短引文，提交给 REZICS 后由人审核。工具包不联网，也不会回传使用记录。',
    },
    boundary: {
      label: '边界',
      headline: '哪些内容会留下，哪些会提交',
      body: [
        '原始文件和完整章节文本会留在你的电脑上，转换和定位由工具包离线完成。提交给 REZICS 的是角色、别名、关系、事件和地点，每一项都附有定位信息和短引文，还会注明抽取时使用的代理与模型，以及推理在本地还是云端进行。',
        '使用云端模型时，代理读取的文本会发送给相应的模型供应商，这由你决定。要完全在本地处理，可以使用本地模型，并关闭能够读取文件的云端工具。',
      ],
    },
    steps: {
      label: '步骤',
      headline: '从一个文件到一份提案',
      sample: {
        language: 'sh',
        code: lines('rezics-wiki units novel.epub', 'rezics-wiki verify novel.epub \\', '  - < locator.json'),
      },
      caption: 'units 每行输出一个段落及其定位信息；verify 读取定位信息，并用同一个文件核对引文。',
      rows: [
        { code: 'rezics-wiki units', title: '切分段落', body: '将 TXT、EPUB 2/3 或视觉小说的纯文本脚本（.rpy）转换为段落。每段都附有 rezics-locator-v1 定位信息和整个文件的 SHA-256 哈希值。' },
        { code: 'skill/SKILL.md', title: '交给你的代理', body: '工具包附带一份 Skill，指导代理逐章抽取，并区分叙述、角色台词、传闻和假设。' },
        { code: 'wiki_candidates · wiki_validate', title: '匹配并预检', body: '先查询已有名称和别名，结果分为匹配、新增、不明确和无法获取；再预检引文额度和缺失的章节对应关系。' },
        { code: 'wiki-extraction-v1', title: '提交审核', body: '提案经人工审核后才会发布。审核者拿到同一版本后，就能在自己的电脑上核对每段引文。' },
        { code: 'wiki-delta-v1', title: '继续整理新章节', body: '后续章节以差异提案提交。没有提及的已有内容会保持原样，不会被悄悄删除。' },
      ],
    },
    limits: {
      label: '限制',
      headline: '支持的格式和限制',
      rows: [
        { title: 'TXT、EPUB、.rpy', body: '支持的文件格式。' },
        { title: '200', body: '每段引文的字符上限。' },
        { title: '128 MiB', body: '单个文件的大小上限。' },
      ],
    },
    statement: {
      text: '不解密，也不绕过；',
      sub: '受保护的文件会直接读取失败。',
      licence: '工具包没有解密、密钥恢复或绕过保护的功能，也不推荐这类插件。工具包和协议均采用 Apache-2.0 许可证，不引用 REZICS 的 AGPL 代码。无需 REZICS 账户，任何兼容的服务器都能搭配使用；示例只使用公有领域或你有权使用的作品。',
    },
  },

  zones: {
    hero: {
      headline: '版面由 Zone 决定，数据和规则由平台管理。',
      lede: 'Zone 是社区自己的站点，可以附带专属展示代码。代码只负责排版，数据由平台读取后再交给它，权限与审核也都由平台管理。',
    },
    theme: {
      label: '主题',
      headline: '先设置，再写代码',
      body: ['每个 Zone 都从一套默认主题开始，可以调整信息密度、页面底色和封面比例，也可以自选强调色，再安排精选、书架、热门排行和编辑推荐等模块。设置无法实现所需布局时，才需要编写代码。'],
    },
    settings: {
      label: '设置',
      headline: '一组主题设置',
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
      caption: '主题设置中的所有必填字段，类型来自 @rezics/zone-sdk。',
    },
    slots: {
      label: '插槽',
      headline: '将代码填入具名插槽',
      lead: '展示代码是一个软件包，可以在页眉、主视觉、搜索栏、数据面板、作品卡片、模块和页脚等具名插槽中换上自己的组件。每个插槽都会收到平台提供的组件，软件包可以在外层包装，也可以替换它。',
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
      caption: '摘自 REZICS 动画 Zone 的软件包入口。',
    },
    rules: {
      label: '边界',
      headline: '软件包的边界',
      rows: [
        { title: '不自行获取数据', body: '数据由平台读取后送入插槽，软件包不会发起请求。' },
        { title: '不接触凭证', body: '不会读取 Cookie、浏览器存储空间或任何凭证。' },
        { title: '不遮挡平台界面', body: '账户菜单、Zone 菜单、举报和年龄确认都在插槽之外，每部作品的“为何入选”标记也会保留。' },
        { title: '样式只影响自身', body: '样式仅限于这个 Zone 的范围，颜色和字体只使用平台提供的变量。' },
        { title: '限制文件大小', body: 'gzip 压缩后的 CSS 不超过 40 KiB，JavaScript 不超过 50 KiB。' },
      ],
    },
    review: {
      label: '发布',
      headline: '从审核到发布',
      rows: [
        { title: '计算哈希值', body: '软件包的所有文件会合并计算出一个哈希值。任何一个字节发生变化，哈希值都会不同。' },
        { title: '由他人审核', body: '另一个账户会检查源代码、构建文件、无障碍情况和出错时的表现，并记录决定和证据的哈希值。' },
        { title: '启用并设置到期日', body: '只有经过审核的版本才能启用，而且会设置到期日。恢复旧版本也不会让旧的批准重新生效。' },
        { title: '随时切回标准版面', body: '哈希值不匹配时会显示标准版面。读者可以关闭软件包，或在网址中添加 ?safe 进入安全模式，平台也有全站总开关。' },
      ],
    },
    statement: {
      text: '后端只有一套，前端由你编写；',
      sub: 'AI 代理也能读取同一份数据。',
      note: '新的社区站点不需要新的后端程序。展示代码只读取公开 API，不包含业务逻辑，Zone 能展示的数据也都能通过 API 读取。',
    },
  },

  open: {
    hero: {
      headline: '源代码公开，独立软件包可自由使用。',
      lede: '服务、网站、账户页面、设计文档和 API 定义都在同一个公开代码库中。平台采用 AGPL-3.0 许可证；Wiki 工具包和文档格式软件包采用 Apache-2.0 许可证，不依赖 REZICS 服务。',
      link: '查看源代码',
      href: shared.footer.sourceUrl,
    },
    licences: {
      label: '许可证',
      headline: '两种许可证',
      rows: [
        { code: { name: 'AGPL-3.0', paths: 'services/ · apps/ · generated/ · docs/' }, line: '平台本身：服务、网站、账户页面和文档。' },
        { code: { name: 'Apache-2.0', paths: 'packages/wiki-toolkit/ · packages/document/' }, line: '独立软件包：@rezics/wiki-toolkit 和 @rezics/document，无需 REZICS 账户。' },
      ],
    },
    map: {
      label: '代码库',
      headline: '代码库中有什么',
      rows: [
        { code: 'services/', licence: 'AGPL-3.0', body: '后端服务。Main 提供 API 和 MCP 服务器，Account 负责登录和 OAuth 授权。' },
        { code: 'apps/web/', licence: 'AGPL-3.0', body: 'REZICS 网站。它和你的程序一样，只通过 API 获取数据。' },
        { code: 'apps/web/zones/official/', licence: 'AGPL-3.0', body: '官方 Zone 的展示代码，每个软件包对应一个文件夹。' },
        { code: 'apps/accounts/', licence: 'AGPL-3.0', body: '账户页面：登录、安全和已连接应用。' },
        { code: 'packages/wiki-toolkit/', licence: 'Apache-2.0', body: '本地 Wiki 工具包及其协议和 Skill。' },
        { code: 'packages/document/', licence: 'Apache-2.0', body: 'REZICS 文档格式，通过 JSON 结构定义文本和区块。' },
        { code: 'generated/openapi/', licence: 'AGPL-3.0', body: '根据路由声明生成的 OpenAPI 文档。' },
        { code: 'docs/', licence: 'AGPL-3.0', body: '设计决策、契约和运维流程，并记录原因。' },
      ],
    },
    run: {
      label: '运行',
      headline: '在自己的电脑上运行',
      lead: '安装固定版本的工具链和容器运行环境后，运行三条命令就能启动 API、账户服务、网站和账户页面，并列出它们的网址。',
      blocks: [
        { sample: { language: 'sh', code: lines('task toolchain:install', 'task dev', 'task urls') }, caption: '摘自代码库中的说明文档。' },
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
              "  '漢字\\nSecond paragraph',",
              ');',
              'parseDocument(snapshot);',
              'const stored =',
              '  serializeDocument(snapshot);',
            ),
          },
          caption: '@rezics/document 无需 REZICS 账户、服务或数据库。示例摘自它的说明文档。',
        },
      ],
    },
    statement: {
      text: '把规则写进代码，',
      sub: '把理由写进文档。',
      note: '能用类型、测试和检查表达的规则，就写进程序；记录决定的原因时，要在文档中附上日期和理由。',
    },
  },
};

export default {
  id: 'developers',
  base: '/developers/',
  name: '开发者',
  theme: { field: '#3b4a5a', on: 'paper' },
  next: 'books',
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: 'REZICS 开发者：同一套 API',
        description: 'REZICS 网站上的每个按钮背后都是一项 API 操作。你的程序通过 HTTP 调用，AI 代理通过 MCP 服务器调用，身份检查、回执和错误代码都与用户点击按钮时相同。',
      },
    },
    {
      slug: 'api',
      label: 'API 与 SDK',
      meta: {
        title: 'API 与 SDK：每项操作都有契约',
        description: 'REZICS 的每项 API 操作都会注明路径、权限范围、幂等键和错误代码。OpenAPI 文档和 TypeScript 类型都由同一份路由声明生成，网站和你的程序使用相同定义。',
      },
    },
    {
      slug: 'mcp-server',
      label: 'MCP 服务器',
      meta: {
        title: 'REZICS MCP 服务器',
        description: 'AI 代理通过 OAuth 授权连接 REZICS 远程 MCP 服务器，并使用根据 API 声明生成的工具。每次调用只转发一次到对应的 HTTP 操作，身份、权限和额度都由该操作决定。',
      },
    },
    {
      slug: 'apps',
      label: '已连接应用',
      meta: {
        title: '已连接应用：通过 OAuth 获取授权',
        description: '第三方应用通过 OAuth 授权码和 PKCE 获取令牌。同意页面会按用户语言列出权限，缺少译文时使用英文；用户可以在账户的已连接应用页面查看并移除授权，令牌也会随之失效。',
      },
    },
    {
      slug: 'wiki-toolkit',
      label: 'Wiki 工具包',
      meta: {
        title: '本地 Wiki 工具包：REZICS 不接收全文',
        description: '开源 Wiki 工具包会在你的电脑上把 TXT 和 EPUB 切分为可验证的段落。你选择的 AI 代理抽取角色和事件，REZICS 只接收附有定位信息和短引文的提案，不会接收全文。',
      },
    },
    {
      slug: 'zones',
      label: 'Zone 主题',
      meta: {
        title: 'Zone 主题与展示代码',
        description: '每个 Zone 都能通过主题设置和模块排出自己的站点，也能附带专属展示代码填入具名插槽。代码经过他人审核并锁定哈希值后才会运行，读者随时可以切回标准版面。',
      },
    },
    {
      slug: 'open-source',
      label: '开源',
      meta: {
        title: '开源：AGPL 与 Apache',
        description: 'REZICS 平台源代码采用 AGPL-3.0 许可证公开，可以在本地运行整套服务。Wiki 工具包和文档格式等独立软件包采用 Apache-2.0 许可证，无需 REZICS 账户。',
      },
    },
  ],
  strings,
} satisfies MiniSite<DevelopersStrings>;
