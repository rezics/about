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
    nextSite: '다음 사이트',
    more: { label: '개발자', headline: '다른 페이지' },
    closing: {
      title: '같은 API로 도구를 만드세요.',
      body: '프로그램으로 작품, 서재, 커뮤니티 데이터를 읽고 쓰세요. 모든 작업에 REZICS의 ID와 권한 규칙이 적용됩니다.',
    },
  },
  alts: {
    hero: '따뜻한 흰 종이 위쪽, 오른쪽, 아래쪽에서 뻗어 나온 세 장의 종이 끝이 짙은 청회색 종이 한 장 아래에 겹쳐 있습니다.',
    mcp: '짙은 청회색 종이에 줄지어 뚫린 구멍 사이로 연한 파란 종이 띠가 위아래로 지나갑니다.',
    apps: '정사각형 종이 네 장이 크기순으로 겹쳐 있습니다. 가장 바깥은 짙은 청회색이고 맨 위에는 가장 작은 연한 파란 종이가 놓여 있습니다.',
    wiki: '두꺼운 미색과 연한 파란 종이가 가지런히 쌓여 있고, 옆에는 길고 가는 짙은 청회색 종이 세 장이 놓여 있습니다.',
    zones: '짙은 청회색 종이를 작게 세워 창을 낸 틀로 접었고, 뒤에는 연한 파란 종이가 서 있습니다.',
  },

  landing: {
    hero: {
      headline: '버튼 하나가 API 작업 하나입니다.',
      lede: 'REZICS 웹사이트도 이 API를 호출합니다. 프로그램은 HTTP 요청을 보내고, AI 에이전트는 MCP 서버를 통해 도구를 호출합니다. 모두 같은 작업에 도달합니다.',
    },
    ways: {
      label: '세 가지 방식',
      headline: '세 방식으로 같은 응답을 받습니다.',
      lead: '서재에서 “서재 다운로드”를 누르면 웹사이트가 이 요청을 보냅니다. 프로그램과 에이전트도 같은 요청을 보내고, 같은 검사를 거쳐 같은 서재 내보내기를 받습니다.',
      person: { label: '사용자', body: 'REZICS 서재 페이지에서 “서재 다운로드”를 누릅니다.' },
      calls: [
        {
          label: '프로그램',
          sample: { language: 'http', code: lines('GET /v1/me/library-export', '  ?actingSubject=…&limit=20', 'Authorization: Bearer …') },
        },
        {
          label: '에이전트',
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
          caption: 'tools/call 매개변수입니다. ID는 직접 지정합니다.',
        },
      ],
      shared: {
        label: '같은 작업',
        sample: { language: 'text', code: lines('operationId', '  getV1MeLibrary-export', 'profile', '  rezics-library-export-v1') },
      },
    },
    pages: {
      label: '여섯 가지 구성',
      headline: '개발자가 쓰는 여섯 가지',
      lead: '각 페이지의 경로, 필드, 명령은 모두 REZICS 소스 코드에서 가져왔습니다.',
      lines: {
        api: '안전하게 다시 보낼 수 있는 쓰기 요청, 실패 시 고정된 코드 반환',
        'mcp-server': 'AI 에이전트가 /mcp로 연결하고 권한에 따라 도구 표시',
        apps: 'OAuth로 권한을 받고 언제든 철회',
        'wiki-toolkit': '내 컴퓨터에서 추출하고 제안만 전송',
        zones: '커뮤니티 사이트에 맞는 레이아웃 작성',
        'open-source': '플랫폼은 AGPL-3.0, 독립 패키지는 Apache-2.0',
      },
    },
    statement: {
      text: 'REZICS 웹사이트는 데이터베이스에 직접 접근하지 않습니다.',
      sub: '사이트에서 할 수 있는 모든 작업은 API로도 할 수 있습니다.',
    },
    rules: {
      label: '규칙',
      headline: '어디서 들어와도 같은 규칙',
      rows: [
        { title: '같은 ID', code: 'actingSubject', body: '쓰기 요청에는 어떤 ID로 작업하는지 명시합니다. 토큰이 ID를 대신 선택하지 않으며 서버가 매번 다시 확인합니다.' },
        { title: '같은 권한 상한', code: 'scope', body: '앱과 에이전트가 받는 권한은 사용자 본인의 권한보다 적을 수는 있어도 많을 수는 없습니다.' },
        { title: '같은 처리 기록', code: 'Idempotency-Key', body: '쓰기 요청에 멱등성 키를 포함합니다. 시간이 초과된 뒤 같은 요청을 다시 보내면 원래 결과를 받고, 작업이 중복 실행되지 않습니다.' },
        { title: '같은 코드', code: 'application/problem+json', body: '실패하면 문제 세부 정보를 반환합니다. code 필드는 고정되어 있어 프로그램이 메시지를 해석하지 않고 코드에 따라 처리할 수 있습니다.' },
      ],
    },
    hubs: {
      label: '색인',
      headline: '다른 사람이 만든 도구도 색인에',
      lead: 'REZICS는 다른 사람이 만든 MCP 서버, 스킬, API도 색인합니다. 버전, 출처, 측정값이나 사용 기록, 평점과 토론을 함께 제공합니다.',
      items: [
        { kind: 'mcp', line: 'MCP 서버 색인' },
        { kind: 'skills', line: 'AI 에이전트 스킬 색인' },
        { kind: 'apis', line: '공개 API 색인' },
      ],
    },
  },

  api: {
    hero: {
      headline: '책을 읽음으로 표시하는 것도 API 작업입니다.',
      lede: '서재에서 작품을 “읽음”으로 표시하면 웹사이트는 아래 요청을 보냅니다. 프로그램도 같은 요청을 보내면 같은 결과를 받고 같은 검사를 거칩니다.',
    },
    anatomy: {
      label: '쓰기',
      headline: '쓰기 요청을 한 줄씩 살펴봅니다',
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
      caption: '버전 번호, 날짜, 멱등성 키는 예시 값입니다.',
      rows: [
        { code: '{id}', title: '경로가 작품을 가리킵니다', body: 'REZICS의 모든 항목에는 https://rezics.com/id/로 시작하는 고정 식별자가 있습니다. 언어나 사이트가 바뀌어도 같습니다.' },
        { code: 'actingSubject', title: 'ID 명시', body: '계정은 자신이나 조직을 대표할 수 있습니다. 쓰기 요청마다 어떤 ID로 작업하는지 명시해야 하며, 서버는 실행 전에 해당 ID의 권한을 확인합니다.' },
        { code: 'Idempotency-Key', title: '안전한 재전송', body: '모든 쓰기 요청에 멱등성 키를 포함합니다. 시간이 초과되거나 연결이 끊긴 뒤 같은 키로 다시 보내도 중복으로 기록되지 않습니다.' },
        { code: 'expectedVersion', title: '덮어쓰기 방지', body: '3번째 버전을 읽었다면 요청에도 3번째 버전을 명시합니다. 그 사이 다른 사람이 수정했으면 이번 쓰기는 기존 내용을 덮어쓰지 않습니다.' },
        { code: 'application/problem+json', title: '오류는 문제 세부 정보로', body: '실패하면 고정된 code를 반환합니다. 프로그램은 메시지 문구를 비교하지 않고 코드에 따라 분기할 수 있습니다.' },
      ],
    },
    replay: {
      label: '재전송',
      headline: '같은 요청을 다시 보내면 같은 결과를 받습니다.',
      lead: '같은 키와 같은 내용을 다시 보내면 서버는 첫 요청의 결과를 반환합니다. 버전은 계속 4이고 replayed는 true가 됩니다. 같은 키에 다른 내용을 보내면 409 reader_status_conflict를 반환합니다. 버전이 이미 3이 아니면 409 stale_reader_status를 반환하므로 다시 읽은 뒤 쓰면 됩니다.',
      responses: [
        {
          label: '첫 요청',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": false', '}') },
        },
        {
          label: '재전송',
          sample: { language: 'json', code: lines('200', '{', '  "status": "read",', '  "version": 4,', '  "replayed": true', '}') },
        },
        {
          label: '버전 만료',
          sample: { language: 'json', code: lines('409', '{', '  "status": 409,', '  "code":', '    "stale_reader_status"', '}') },
        },
      ],
    },
    sdk: {
      label: '타입',
      headline: 'API와 타입은 같은 정의에서',
      lead: 'REZICS 웹사이트는 TypeScript로 API를 호출하며 요청과 응답 타입은 서버의 라우트 선언에서 직접 가져옵니다. 필드 이름이 바뀌거나 오류 코드가 추가되면 호출하는 쪽에서 컴파일할 때 알 수 있습니다. TypeScript SDK도 같은 정의에서 생성되므로 웹사이트와 같은 타입을 사용합니다.',
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
      caption: 'REZICS 웹사이트 서재 기능에서 발췌했습니다.',
      openapi: 'OpenAPI 3.1 문서도 같은 라우트 선언에서 생성됩니다. 각 작업의 검증 방식, 요청 형식, 상태 코드별 응답을 명시합니다.',
      code: { path: 'generated/openapi/main/public.json' },
    },
    reads: {
      label: '읽기',
      headline: '읽기에도 규칙이 있습니다',
      rows: [
        { code: 'nextCursor · snapshot', body: '긴 목록에는 다음 페이지 커서가 있어 끝까지 차례로 읽을 수 있습니다. 서재 내보내기에는 스냅샷도 포함되어 데이터가 중간에 바뀌면 알려 줍니다. 서로 다른 파일을 임의로 조합하게 두지 않습니다.' },
        { code: 'count.precision', body: '검색 결과의 전체 개수가 정확한 값인지 “최소 이만큼”인지 명시합니다.' },
        { code: 'title.language · basis', body: '제목에는 언어 태그와 문자 방향을 표시합니다. 이 언어가 요청한 언어인지, 같은 문자 체계인지, 다른 문자 체계인지, 대체 언어인지도 설명합니다.' },
        { code: '404 resource_unavailable', body: '볼 권한이 없는 리소스는 존재하지 않는 리소스와 같은 응답을 반환해 존재 여부를 드러내지 않습니다.' },
      ],
    },
  },

  mcp: {
    hero: {
      headline: 'AI 에이전트는 /mcp로 연결합니다.',
      lede: 'REZICS는 /mcp에서 원격 MCP 서버를 제공합니다. 에이전트는 승인된 토큰으로 연결하고, 현재 권한에 따라 사용할 수 있는 도구를 확인합니다. 각 도구는 하나의 HTTP 작업에 대응합니다.',
    },
    adapter: {
      label: '중계',
      headline: 'MCP는 중계만 담당합니다.',
      body: [
        '도구 호출은 같은 토큰과 멱등성 키를 담아 해당 HTTP 작업으로 한 번만 전달됩니다. 누가 작업하는지, 무엇을 할 수 있는지, 요청 한도를 얼마나 사용하는지는 해당 작업이 결정합니다.',
        '도구가 읽은 작품 본문과 웹페이지 텍스트는 모두 데이터로 취급하며 명령으로 사용하지 않습니다.',
      ],
    },
    connect: {
      label: '연결',
      headline: '네 단계로 연결',
      rows: [
        { title: '리소스 메타데이터 읽기', code: 'GET /.well-known/oauth-protected-resource/mcp', body: '토큰이 없는 요청은 401을 받습니다. 헤더는 승인 서버와 지원 범위가 적힌 메타데이터를 가리킵니다.' },
        { title: '등록하고 토큰 받기', code: 'RFC 7591 · PKCE', body: '에이전트 클라이언트는 직접 등록한 뒤 승인 코드와 PKCE로 토큰을 받을 수 있습니다. 등록만으로 리소스 권한이 부여되지는 않습니다.' },
        { title: '도구 목록 표시', code: 'tools/list', body: '목록에는 현재 이 ID로 사용할 수 있는 도구만 표시됩니다.' },
        { title: '도구 호출', code: 'tools/call', body: 'HTTP 상태 코드, 헤더, 본문을 그대로 결과에 담아 반환하며 상태 코드가 400 이상이면 오류로 표시합니다.' },
      ],
    },
    same: {
      label: '같은 작업',
      headline: '에이전트 호출도 같은 HTTP 작업으로 전달됩니다.',
      calls: [
        { label: '프로그램', sample: { language: 'http', code: lines('GET /v1/search/catalogue', '  ?q=여행&limit=5') } },
        {
          label: '에이전트',
          sample: {
            language: 'json',
            code: lines(
              '{',
              '  "name": "search_catalogue",',
              '  "arguments": {',
              '    "query": {',
              '      "q": "여행",',
              '      "limit": 5',
              '    }',
              '  }',
              '}',
            ),
          },
      caption: 'tools/call로 이 매개변수를 보냅니다.',
        },
      ],
      shared: {
        label: '같은 응답',
        sample: { language: 'text', code: lines('operationId', '  getV1SearchCatalogue', 'profile', '  public-catalogue-ranked-v1') },
      },
      caption: '“여행”으로 목록을 검색합니다(예시). 에이전트도 같은 응답을 받고, 바깥에 HTTP 상태 코드와 헤더가 추가됩니다. 매개변수는 HTTP 작업에 따라 path, query, headers, body로 나뉩니다.',
    },
    tools: {
      label: '도구',
      headline: '도구 목록',
      lead: '도구는 API 기능 선언에서 생성됩니다. 선언에는 도구 이름, 용도, 필요한 권한 범위가 적힙니다. 이름이 중복되거나 해당 작업이 없으면 생성에 실패합니다.',
      scopes: '필요한 범위',
      groups: [
        {
          name: '목록 읽기',
          tools: [
            { title: '키워드로 목록 검색', code: { tool: 'search_catalogue', op: 'GET /v1/search/catalogue', scopes: ['work:read'] } },
            { title: '리소스 하나 읽기', code: { tool: 'read_resource', op: 'GET /v1/resources/{resource}', scopes: ['work:read', 'context:read'] } },
            { title: '여러 리소스 요약을 한 번에 읽기', code: { tool: 'resource_summaries', op: 'POST /v1/resources/summaries', scopes: ['work:read', 'context:read'] } },
            { title: '리소스 연결 읽기', code: { tool: 'resource_relations', op: 'GET /v1/resources/{resource}/relations', scopes: ['work:read'] } },
            { title: '작품의 여러 버전 읽기', code: { tool: 'work_editions', op: 'GET /v1/works/{id}/releases', scopes: ['work:read'] } },
          ],
        },
        {
          name: '서재',
          tools: [
            { title: '서재 전체 내보내기', code: { tool: 'library_export', op: 'GET /v1/me/library-export', scopes: ['work:read', 'rating:read'] } },
            { title: '서재 파일 업로드', code: { tool: 'library_import_create', op: 'POST /v1/me/library-imports', scopes: ['work:read', 'library:write'] } },
            { title: '행별 대조 결과 확인', code: { tool: 'library_import_rows', op: 'GET /v1/me/library-imports/{id}/rows', scopes: ['work:read'] } },
            { title: '행에 작품 지정', code: { tool: 'library_import_resolve', op: 'PUT /v1/me/library-imports/{id}/rows/{row}', scopes: ['work:read', 'library:write'] } },
            { title: '목록에 없는 후보 작품 추가', code: { tool: 'library_import_adopt', op: 'POST /v1/me/library-imports/{id}/rows/{row}/adoptions', scopes: ['work:read', 'library:write', 'work:create'] } },
            { title: '검토한 가져오기 적용', code: { tool: 'library_import_apply', op: 'POST /v1/me/library-imports/{id}/apply', scopes: ['work:read', 'library:write', 'collection:edit', 'rating:read', 'rating:submit'] } },
            { title: '가져오기 진행 상태 확인', code: { tool: 'library_import_status', op: 'GET /v1/me/library-imports/{id}/apply', scopes: ['work:read'] } },
            { title: '업로드한 파일 삭제', code: { tool: 'library_import_delete', op: 'DELETE /v1/me/library-imports/{id}', scopes: ['work:read', 'library:write'] } },
          ],
        },
        {
          name: 'Wiki+',
          tools: [
            { title: '추출한 이름 대조', code: { tool: 'wiki_candidates', op: 'POST /v1/wiki/candidates', scopes: ['wiki:propose'] } },
            { title: '추출 결과 사전 검사', code: { tool: 'wiki_validate', op: 'POST /v1/wiki/validations', scopes: ['wiki:propose'] } },
            { title: '승인된 Wiki+ 내용 읽기', code: { tool: 'wiki_history', op: 'GET /v1/wiki/{work}/history', scopes: ['work:read'] } },
            { title: '주장의 출처와 인용문 읽기', code: { tool: 'wiki_evidence', op: 'GET /v1/wiki/evidence/{id}', scopes: ['work:read'] } },
          ],
        },
      ],
    },
    limits: {
      label: '한도',
      headline: '호출별 한도',
      rows: [
        { title: '30초', body: '도구 호출 한 번의 제한 시간입니다.' },
        { title: '1 MiB', body: '일반 도구 요청의 크기 한도입니다. 서재 파일 업로드는 별도로 계산합니다.' },
        { title: '무상태', body: '각 요청에서 토큰을 확인하며 서버는 세션을 보관하지 않습니다.' },
      ],
    },
  },

  apps: {
    hero: {
      headline: '앱은 사용자보다 더 많은 권한을 받지 않습니다.',
      lede: 'REZICS는 로그인, 대표 ID, 리소스 권한, 앱 승인을 각각 기록합니다. 앱과 AI 에이전트의 토큰 권한은 이 경계 안에서 더 좁혀집니다.',
    },
    layers: {
      label: '네 단계',
      headline: '안쪽으로 갈수록 좁아집니다',
      body: ['계정, ID, 설치와 동의, 토큰 범위를 네 단계로 나눠 기록합니다. 안쪽 단계는 항상 바깥 단계 안에 있습니다. 앱은 가장 안쪽 단계의 권한만 받습니다.'],
    },
    each: {
      label: '단계별',
      headline: '각 단계의 역할',
      rows: [
        { title: '계정', body: '계정 서비스가 사용자를 확인합니다. 로그인만으로 리소스를 조작할 수는 없습니다.' },
        { title: 'ID', body: '개인이나 조직 ID로 작업하면 서버가 대표 관계와 리소스 권한을 확인합니다.' },
        { title: '설치와 동의', body: '설치와 동의는 서로 독립된 권한 상한입니다. 앱 등록만으로 리소스 권한을 얻지는 않습니다.' },
        { title: '토큰 범위', body: '토큰에는 library:write처럼 동의한 범위만 담깁니다. 각 작업은 어떤 ID로 수행되는지 다시 확인합니다.' },
      ],
    },
    authorize: {
      label: '승인',
      headline: '승인 코드와 PKCE',
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
      caption: '승인 요청은 REZICS 계정 서비스로 전송됩니다. 돌아올 URL은 등록한 주소와 정확히 일치해야 합니다.',
    },
    consent: {
      label: '동의',
      headline: '동의 화면에 표시되는 내용',
      rows: [
        { text: '앱 이름과 웹사이트', code: 'name · uri' },
        { text: '각 권한의 설명은 사용자 언어로 표시하고, 번역이 없으면 영어 사용', code: 'scopes[].description' },
        { text: '검증되지 않은 앱임을 명확히 표시', code: 'unverified' },
        { text: '승인 후 돌아갈 도메인', code: 'redirectHost' },
        { text: '앱의 개인정보 처리방침과 서비스 약관', code: 'policy · terms' },
      ],
      note: 'REZICS 제품은 동의 화면을 표시하지 않습니다. 계정 페이지에 제품 세션으로 표시됩니다.',
    },
    revoke: {
      label: '철회',
      headline: '언제든 철회',
      rows: [
        { title: '확인', body: '계정의 “연결된 앱” 페이지에서 각 앱이 할 수 있는 작업, 승인 시점, 마지막 사용 시점을 볼 수 있습니다.' },
        { title: '재확인', body: '앱을 삭제하기 전에 사용자 ID를 다시 확인합니다.' },
        { title: '무효화', body: '삭제하면 앱이 가진 토큰을 더는 사용할 수 없습니다. 토큰 갱신용 토큰도 마찬가지입니다.' },
        { title: '비활성화', body: 'REZICS에서 비활성화한 앱은 표시되며, 해당 앱에 남은 승인은 계속 삭제할 수 있습니다.' },
      ],
    },
  },

  wiki: {
    hero: {
      headline: 'REZICS는 전문이 아닌 제안을 받습니다.',
      lede: '본문을 소유한 사람은 자신의 AI 에이전트와 모델로 장마다 인물, 별칭, 관계, 사건, 장소를 추출합니다. 각 항목에는 위치와 짧은 인용문을 붙여 REZICS에 보내고 사람이 검토합니다. 도구 모음은 인터넷에 연결하지 않으며 사용 기록을 전송하지 않습니다.',
    },
    boundary: {
      label: '경계',
      headline: '남는 것과 보내는 것',
      body: [
        '원본 파일과 전체 장 텍스트는 사용자 컴퓨터에 남고, 변환과 위치 지정은 도구 모음이 오프라인에서 처리합니다. REZICS에는 인물, 별칭, 관계, 사건, 장소를 보냅니다. 각 항목에 위치와 짧은 인용문을 붙이고, 추출에 사용한 에이전트와 모델, 추론이 로컬인지 클라우드인지도 함께 전송합니다.',
        '클라우드 모델을 사용하면 에이전트가 읽은 텍스트가 해당 모델 제공자에게 전송됩니다. 사용 여부는 직접 선택합니다. 모든 작업을 로컬에 두려면 로컬 모델을 사용하고 파일을 읽는 클라우드 도구를 끄면 됩니다.',
      ],
    },
    steps: {
      label: '단계',
      headline: '파일에서 제안까지',
      sample: {
        language: 'sh',
        code: lines('rezics-wiki units novel.epub', 'rezics-wiki verify novel.epub \\', '  - < locator.json'),
      },
      caption: 'units는 각 줄에 문단과 위치를 출력합니다. verify는 위치를 읽고 같은 파일에서 인용문을 확인합니다.',
      rows: [
        { code: 'rezics-wiki units', title: '문단으로 나누기', body: 'TXT, EPUB 2/3 또는 비주얼 노벨의 일반 텍스트 스크립트(.rpy)를 문단으로 변환합니다. 각 문단에는 rezics-locator-v1 위치와 전체 파일의 SHA-256 해시가 붙습니다.' },
        { code: 'skill/SKILL.md', title: '에이전트에 전달', body: '도구 모음에는 에이전트가 장마다 추출하도록 안내하는 스킬이 포함됩니다. 서술, 인물의 대사, 소문, 가정을 구분하게 합니다.' },
        { code: 'wiki_candidates · wiki_validate', title: '대조와 사전 검사', body: '기존 이름과 별칭을 먼저 확인하고 결과를 일치, 신규, 불명확, 찾을 수 없음으로 나눕니다. 그런 다음 인용문 한도와 누락된 장 대응을 사전 검사합니다.' },
        { code: 'wiki-extraction-v1', title: '검토 요청', body: '제안은 사람이 검토한 뒤에 공개됩니다. 검토자가 같은 버전을 가지고 있으면 자기 컴퓨터에서 각 인용문을 확인할 수 있습니다.' },
        { code: 'wiki-delta-v1', title: '새 장 이어 쓰기', body: '이후 장은 변경 제안으로 보냅니다. 언급하지 않은 기존 내용은 그대로 유지되며 조용히 삭제되지 않습니다.' },
      ],
    },
    limits: {
      label: '한도',
      headline: '지원 형식과 한도',
      rows: [
        { title: 'TXT, EPUB, .rpy', body: '지원하는 파일 형식입니다.' },
        { title: '200', body: '인용문 한 개의 최대 글자 수입니다.' },
        { title: '128 MiB', body: '파일 하나의 최대 크기입니다.' },
      ],
    },
    statement: {
      text: '복호화하거나 보호를 우회하지 않습니다.',
      sub: '보호된 파일은 읽지 못합니다.',
      licence: '도구 모음에는 복호화, 키 복구, 보호 우회 기능이 없으며 관련 플러그인도 권장하지 않습니다. 도구 모음과 프로토콜은 Apache-2.0으로 제공되며 REZICS의 AGPL 코드를 사용하지 않습니다. REZICS 계정 없이도 사용할 수 있고 호환되는 모든 서버와 함께 쓸 수 있습니다. 예시에는 퍼블릭 도메인 작품이나 사용 권한이 있는 작품만 사용합니다.',
    },
  },

  zones: {
    hero: {
      headline: '레이아웃은 Zone에, 데이터와 규칙은 플랫폼에.',
      lede: 'Zone은 커뮤니티가 직접 운영하는 사이트로, 자체 표시 코드를 사용할 수 있습니다. 코드는 화면 배치만 담당합니다. 플랫폼이 데이터를 읽어 전달하고 권한과 검토도 관리합니다.',
    },
    theme: {
      label: '테마',
      headline: '설정부터 시작하고 코드는 나중에',
      body: ['각 Zone은 기본 테마로 시작합니다. 밀도, 페이지 배경색, 표지 비율을 조정하고 필요하면 강조색을 바꾼 다음 대표 작품 캐러셀, 책장, 순위, 편집자 목록 같은 모듈을 배치합니다. 설정으로 만들 수 없는 레이아웃에만 표시 코드를 사용합니다.'],
    },
    settings: {
      label: '설정',
      headline: '테마 설정 예시',
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
      caption: '테마 설정의 필수 필드 전체입니다. 타입은 @rezics/zone-sdk에서 가져옵니다.',
    },
    slots: {
      label: '슬롯',
      headline: '이름이 있는 슬롯에 코드 배치',
      lead: '표시 코드는 패키지 형태로 제공됩니다. 헤더, 대표 영역, 검색창, 데이터 패널, 작품 카드, 모듈, 푸터처럼 이름이 지정된 슬롯에 자체 컴포넌트를 넣습니다. 각 슬롯은 플랫폼의 기본 버전을 받으며 패키지가 이를 감싸거나 대체할 수 있습니다.',
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
      caption: 'REZICS 애니메이션 Zone 패키지의 진입점에서 발췌했습니다.',
    },
    rules: {
      label: '경계',
      headline: '패키지의 경계',
      rows: [
        { title: '직접 데이터를 가져오지 않음', body: '플랫폼이 데이터를 읽어 슬롯에 전달하므로 패키지는 요청을 보내지 않습니다.' },
        { title: '인증 정보에 접근하지 않음', body: 'Cookie, 브라우저 저장 공간, 기타 인증 정보를 읽지 않습니다.' },
        { title: '플랫폼 인터페이스를 가리지 않음', body: '계정 메뉴, Zone 메뉴, 신고, 연령 확인은 슬롯 바깥에 있습니다. 각 작품의 “여기에 있는 이유” 표시도 계속 보입니다.' },
        { title: '스타일은 자체 영역에만 적용', body: '스타일은 이 Zone 안에 한정되며 색상과 글꼴에는 플랫폼이 제공하는 변수만 사용합니다.' },
        { title: '크기 제한', body: 'gzip 압축 후 CSS는 40 KiB, JavaScript는 50 KiB를 넘지 않습니다.' },
      ],
    },
    review: {
      label: '게시',
      headline: '검토부터 게시까지',
      rows: [
        { title: '해시 계산', body: '패키지의 모든 파일을 합쳐 해시 하나를 계산합니다. 바이트 하나만 바뀌어도 해시가 달라집니다.' },
        { title: '다른 사람이 검토', body: '다른 계정에서 소스 코드, 빌드 파일, 접근성, 오류 시 동작을 확인하고 결정과 증거의 해시를 기록합니다.' },
        { title: '활성화와 만료일 설정', body: '검토한 버전만 활성화할 수 있으며 만료일이 있습니다. 이전 버전으로 되돌려도 과거 승인이 다시 유효해지지 않습니다.' },
        { title: '언제든 기본 레이아웃으로 전환', body: '해시가 일치하지 않으면 기본 레이아웃을 표시합니다. 독자는 패키지를 끄거나 URL에 ?safe를 추가해 안전 모드로 전환할 수 있고, 플랫폼에는 전체 사이트용 스위치도 있습니다.' },
      ],
    },
    statement: {
      text: '백엔드는 하나, 프런트엔드는 자유롭게.',
      sub: 'AI 에이전트도 같은 데이터를 읽습니다.',
      note: '새 커뮤니티 사이트에 새 백엔드 프로그램은 필요하지 않습니다. 표시 코드는 공개 API만 읽고 비즈니스 로직을 포함하지 않습니다. Zone에 표시되는 데이터는 API에서도 읽을 수 있습니다.',
    },
  },

  open: {
    hero: {
      headline: '소스 코드는 공개하고 독립 패키지는 자유롭게 사용하세요.',
      lede: '서비스, 웹사이트, 계정 페이지, 설계 문서, API 정의가 하나의 공개 저장소에 있습니다. 플랫폼은 AGPL-3.0으로 제공하고 Wiki 도구 모음과 문서 형식 패키지는 REZICS 서비스에 의존하지 않으며 Apache-2.0으로 제공합니다.',
      link: '소스 코드 보기',
      href: shared.footer.sourceUrl,
    },
    licences: {
      label: '라이선스',
      headline: '두 가지 라이선스',
      rows: [
        { code: { name: 'AGPL-3.0', paths: 'services/ · apps/ · generated/ · docs/' }, line: '플랫폼: 서비스, 웹사이트, 계정 페이지, 문서.' },
        { code: { name: 'Apache-2.0', paths: 'packages/wiki-toolkit/ · packages/document/' }, line: '독립 패키지: @rezics/wiki-toolkit과 @rezics/document. REZICS 계정이 필요하지 않습니다.' },
      ],
    },
    map: {
      label: '저장소',
      headline: '저장소 구성',
      rows: [
        { code: 'services/', licence: 'AGPL-3.0', body: '백엔드 서비스입니다. Main은 API와 MCP 서버를 제공하고 Account는 로그인과 OAuth 승인을 담당합니다.' },
        { code: 'apps/web/', licence: 'AGPL-3.0', body: 'REZICS 웹사이트입니다. 사용자 프로그램과 마찬가지로 API를 통해서만 데이터를 가져옵니다.' },
        { code: 'apps/web/zones/official/', licence: 'AGPL-3.0', body: '공식 Zone의 표시 코드입니다. 패키지마다 폴더가 하나씩 있습니다.' },
        { code: 'apps/accounts/', licence: 'AGPL-3.0', body: '계정 페이지입니다. 로그인, 보안, 연결된 앱을 다룹니다.' },
        { code: 'packages/wiki-toolkit/', licence: 'Apache-2.0', body: '프로토콜과 스킬을 포함한 로컬 Wiki 도구 모음입니다.' },
        { code: 'packages/document/', licence: 'Apache-2.0', body: '텍스트와 블록을 JSON 스키마로 정의하는 REZICS 문서 형식입니다.' },
        { code: 'generated/openapi/', licence: 'AGPL-3.0', body: '라우트 선언에서 생성한 OpenAPI 문서입니다.' },
        { code: 'docs/', licence: 'AGPL-3.0', body: '설계 결정, 계약, 운영 절차와 그 이유를 기록합니다.' },
      ],
    },
    run: {
      label: '실행',
      headline: '내 컴퓨터에서 실행',
      lead: '고정 버전의 도구 체인과 컨테이너 실행 환경을 설치한 뒤 명령 세 개로 API, 계정 서비스, 웹사이트, 계정 페이지를 시작하고 각 URL을 확인할 수 있습니다.',
      blocks: [
        { sample: { language: 'sh', code: lines('task toolchain:install', 'task dev', 'task urls') }, caption: '저장소 문서에서 발췌했습니다.' },
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
              "  '한자\\n두 번째 문단',",
              ');',
              'parseDocument(snapshot);',
              'const stored =',
              '  serializeDocument(snapshot);',
            ),
          },
          caption: '@rezics/document는 REZICS 계정, 서비스, 데이터베이스가 필요하지 않습니다. 패키지 문서에서 예시를 발췌했습니다.',
        },
      ],
    },
    statement: {
      text: '규칙은 코드에,',
      sub: '이유는 문서에 기록합니다.',
      note: '타입, 테스트, 검사로 표현할 수 있는 규칙은 코드로 작성합니다. 결정의 이유는 날짜와 함께 문서에 기록합니다.',
    },
  },
};

export default {
  id: 'developers',
  base: '/developers/',
  name: '개발자',
  theme: { field: '#3b4a5a', on: 'paper' },
  next: 'books',
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: 'REZICS 개발자: 하나의 API',
        description: 'REZICS 웹사이트의 모든 버튼 뒤에는 API 작업이 있습니다. 프로그램은 HTTP로 호출하고 AI 에이전트는 MCP 서버를 통해 호출합니다. ID 확인, 처리 기록, 오류 코드는 사용자가 버튼을 눌렀을 때와 같습니다.',
      },
    },
    {
      slug: 'api',
      label: 'API와 SDK',
      meta: {
        title: 'API와 SDK: 모든 작업에 명세가 있습니다',
        description: 'REZICS의 모든 API 작업에는 경로, 권한 범위, 멱등성 키, 오류 코드가 명시되어 있습니다. OpenAPI 문서와 TypeScript 타입은 같은 라우트 선언에서 생성되므로 웹사이트와 사용자 프로그램이 같은 명세를 사용합니다.',
      },
    },
    {
      slug: 'mcp-server',
      label: 'MCP 서버',
      meta: {
        title: 'REZICS MCP 서버',
        description: 'AI 에이전트는 OAuth 승인으로 REZICS 원격 MCP 서버에 연결해 API 선언에서 생성된 도구를 사용합니다. 각 호출은 해당 HTTP 작업으로 한 번만 전달되며 ID, 권한, 한도는 작업에서 결정합니다.',
      },
    },
    {
      slug: 'apps',
      label: '연결된 앱',
      meta: {
        title: '연결된 앱: OAuth로 승인받기',
        description: '타사 앱은 OAuth 승인 코드와 PKCE로 토큰을 받습니다. 동의 화면에는 사용자 언어로 권한이 표시되고 번역이 없으면 영어가 사용됩니다. 사용자는 계정의 연결된 앱 페이지에서 승인을 확인하고 삭제할 수 있으며 삭제 후에는 토큰을 사용할 수 없습니다.',
      },
    },
    {
      slug: 'wiki-toolkit',
      label: 'Wiki 도구 모음',
      meta: {
        title: '로컬 Wiki 도구 모음: REZICS는 전문을 받지 않습니다',
        description: '오픈 소스 Wiki 도구 모음은 사용자 컴퓨터에서 TXT와 EPUB를 검증 가능한 문단으로 나눕니다. 선택한 AI 에이전트가 인물과 사건을 추출하고 REZICS는 위치와 짧은 인용문이 포함된 제안만 받습니다.',
      },
    },
    {
      slug: 'zones',
      label: 'Zone 테마',
      meta: {
        title: 'Zone 테마와 표시 코드',
        description: '각 Zone은 테마 설정과 모듈로 사이트를 구성하거나 전용 표시 코드를 이름이 지정된 슬롯에 넣을 수 있습니다. 코드는 다른 사람의 검토를 거치고 해시를 고정한 뒤에 실행되며 독자는 언제든 기본 레이아웃으로 전환할 수 있습니다.',
      },
    },
    {
      slug: 'open-source',
      label: '오픈 소스',
      meta: {
        title: '오픈 소스: AGPL과 Apache',
        description: 'REZICS 플랫폼 소스 코드는 AGPL-3.0으로 공개되어 전체 서비스를 로컬에서 실행할 수 있습니다. Wiki 도구 모음과 문서 형식 같은 독립 패키지는 Apache-2.0으로 제공되며 REZICS 계정이 필요하지 않습니다.',
      },
    },
  ],
  strings,
} satisfies MiniSite<DevelopersStrings>;
