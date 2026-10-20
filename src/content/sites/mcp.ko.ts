// MCP Hub (`mcp`): every visible string of /mcp/ and its five inner pages. Design record and
// sources: src/sites/mcp/SITE.md and src/sites/mcp/facts.md. Illustrative data (the notes
// server, versions, dates, client categories, tasks, tools, views, lists) is labelled 示意 on
// the page.
import type { Item, MiniSite } from '../schema';

/** The site's paper still-life series (public/images/sites/mcp/). */
export type McpPicture = 'hero' | 'records' | 'identity' | 'versions' | 'zone';
/** A combination's state on the evidence page. */
export type McpState = 'ok' | 'fail' | 'disputed' | 'none';
/** A site page linked from the landing's tiles. */
export type McpPage = 'directory' | 'evidence' | 'versions' | 'community' | 'maintainers';

/** A section's eyebrow, heading and lead. */
type Head = { label: string; headline: string; body: string };
/** A statement: the first half in ink, the continuation muted. */
type Statement = { text: string; sub: string; note?: string };
type RecordField = { label: string; value: string; note: string };

export type McpStrings = {
  next: { page: string; site: string };
  /** Alt text of each picture. */
  pictures: Record<McpPicture, string>;
  /** A line for each page: its tile on the landing and its lead-in on the previous page. */
  pageLines: Record<McpPage, string>;
  landing: {
    hero: { label: string; headline: string; lede: string };
    record: Head & { fields: Item[]; link: string };
    statement: Statement;
    pages: { label: string; headline: string };
    neighbours: Head & {
      tiles: { kind: 'software' | 'apis' | 'skills'; line: string }[];
      developers: { name: string; line: string; href: string };
    };
    closing: { title: string; body: string };
  };
  directory: {
    hero: { headline: string; lede: string };
    records: Head & { items: Item[] };
    filters: Head & { rows: Item[]; caption: string; note: string };
    traversal: { label: string; headline: string; facts: Item[] };
    parts: Head & { notes: Record<string, string> };
    statement: Statement;
    next: string;
    closing: string;
  };
  evidence: {
    hero: { headline: string; lede: string };
    specimen: {
      label: string;
      headline: string;
      fields: Record<'server' | 'client' | 'task' | 'language' | 'result' | 'date' | 'submitter' | 'review', RecordField>;
      caption: string;
    };
    compare: { label: string; headline: string; says: { heading: string; items: string[] }; not: { heading: string; items: string[] } };
    states: Head & { names: Record<McpState, string>; items: Record<McpState, string> };
    statement: Statement;
    layers: { label: string; headline: string; chapters: Item[] };
    client: { label: string; headline: string; body: string[] };
    next: string;
    closing: string;
  };
  versions: {
    hero: { headline: string; lede: string };
    start: Head & { note: string };
    diff: Head & {
      columns: [string, string, string];
      rows: { tool: string; before: string; after: string }[];
      consequence: string;
      caption: string;
    };
    ledger: Head & { rows: Item[] };
    follow: Head & { levels: Item[]; channels: string };
    statement: Statement;
    next: string;
    closing: string;
  };
  community: {
    hero: { headline: string; lede: string };
    score: { label: string; headline: string; items: Item[]; note: string };
    discussion: Head & { agents: string };
    list: Head & {
      title: string;
      items: { kind: 'mcp' | 'skills' | 'apis' | 'software'; name: string; note: string }[];
      caption: string;
    };
    zone: Head & { routes: string };
    next: string;
    closing: string;
  };
  maintainers: {
    hero: { headline: string; lede: string };
    steps: { label: string; headline: string; items: Item[] };
    rules: { label: string; headline: string; can: { heading: string; items: string[] }; cannot: { heading: string; items: string[] } };
    licence: Head & { rows: Item[] };
    agent: Statement & { link: string; href: string };
    next: { headline: string; lines: Record<'skills' | 'apis' | 'software', string> };
    closing: string;
  };
};

const strings: McpStrings = {
  next: { page: '다음 페이지', site: '다음 사이트' },

  pictures: {
    hero: '황토색 종이 몇 장이 구멍을 통과하는 종이 끈으로 서로 연결되어 있고 옅은 파란 종이와 연두색 종이도 함께 묶여 있다.',
    records: '황토색 종이 가장자리의 구멍에 종이 끈으로 빈 작은 꼬리표 몇 개가 연결되어 있고 구멍 하나는 비어 있다.',
    identity: '종이 한 장이 네 부분으로 나뉘어 조금씩 떨어져 있다. 황토색 두 조각, 짙은 청록색 한 조각과 옅은 파란색 한 조각이다.',
    versions: '같은 크기의 종이 다섯 장이 짙은색부터 옅은색 순서로 놓여 있고 마지막 장은 흰색이다.',
    zone: '황토색 종이 한 장을 작은 입체 병풍으로 접고 옆에 작은 종이 조각 몇 개를 놓았다.',
  },

  pageLines: {
    directory: '서버마다 하나의 ID',
    evidence: '기록이 말해 주는 것과 그렇지 않은 것',
    versions: '버전별 기록',
    community: '평가, 토론, 목록과 커뮤니티 사이트',
    maintainers: '등록, 소유권 확인, 선언과 답변',
  },

  landing: {
    hero: {
      label: 'MCP 서버 색인',
      headline: '날짜가 있는 기록으로 서버의 작동 여부를 확인하세요.',
      lede: 'MCP Hub는 각 MCP 서버에 ID를 부여하고 버전별로 기록합니다. 어느 날짜에 어떤 클라이언트의 어떤 버전과 언어로 무엇을 수행했는지 확인할 수 있습니다.',
    },
    record: {
      label: '하나의 기록',
      headline: '작동한다고 말하기 전에 조합을 밝힙니다.',
      body: '서버 버전, 클라이언트, 작업과 언어 중 하나라도 빠지면 정확히 말할 수 없습니다. 각 기록에 이 정보와 결과, 날짜를 모두 표시합니다. 하나라도 바뀌면 별도로 테스트해야 합니다.',
      fields: [
        { title: '서버 버전', body: '버전 번호를 기록하며 새 버전은 별도로 기록합니다.' },
        { title: '클라이언트', body: '클라이언트 종류와 버전을 함께 기록합니다.' },
        { title: '작업', body: '서버에 요청한 작업.' },
        { title: '언어', body: '같은 작업도 언어에 따라 결과가 다를 수 있습니다.' },
        { title: '결과와 날짜', body: '성공 여부와 테스트 날짜.' },
      ],
      link: '기록 작성 방법',
    },
    statement: {
      text: '기록 하나는 특정 날짜와 조합의 결과만 설명합니다.',
      sub: '서버의 안전성이나 사용 권한, REZICS의 보증을 뜻하지 않습니다.',
    },
    pages: {
      label: '이 사이트',
      headline: '서버 검색부터 관리까지 한 페이지에 하나씩.',
    },
    neighbours: {
      label: '연결된 색인',
      headline: '서버는 홀로 존재하지 않습니다.',
      body: '서버를 만든 사람, 서버가 감싼 API와 서버가 속한 프로젝트가 같은 색인에 있어 어느 쪽에서든 찾을 수 있습니다.',
      tiles: [
        { kind: 'software', line: '프로젝트, 패키지와 클라이언트는 소프트웨어 항목입니다' },
        { kind: 'apis', line: '서버가 감싼 API와 양방향으로 연결됩니다' },
        { kind: 'skills', line: '같은 관리자가 만든 스킬' },
      ],
      developers: { name: '개발자', line: 'REZICS의 MCP 서버', href: '/developers/mcp-server/' },
    },
    closing: {
      title: '기록을 먼저 보고 서버를 선택하세요.',
      body: '서버, 스킬과 API는 REZICS에서 책과 게임을 팔로우하는 계정으로 이용할 수 있습니다.',
    },
  },

  directory: {
    hero: {
      headline: '서버마다 하나의 ID를 가집니다.',
      lede: '같은 MCP 서버가 여러 출처에 나타날 수 있습니다. 검토 후 병합하면 REZICS에는 항목 하나만 남으며 이름, 관리자, 버전, 기록, 평가와 토론이 모두 여기에 연결됩니다.',
    },
    records: {
      label: '네 가지 항목',
      headline: '서버에는 네 가지 항목이 있습니다.',
      body: '프로젝트, 패키지, 배포 엔드포인트와 도구 목록은 서로 다른 시점에 바뀌므로 REZICS에서 따로 기록합니다.',
      items: [
        { title: '프로젝트', body: '이름, 설명과 관리자. 버전이나 엔드포인트가 바뀌어도 프로젝트는 같습니다. 다른 사람의 프로젝트에서 갈라져 나왔다면 별도의 프로젝트로 만들고 관계로 연결합니다.' },
        { title: '패키지', body: '특정 버전의 패키지가 어느 생태계에 속하는지, 기본 이름과 버전 번호를 기록합니다. 버전 순서는 해당 생태계의 규칙을 따릅니다.' },
        { title: '배포 엔드포인트', body: '네트워크에서 서버에 연결하는 주소입니다. 연결할 수 있다고 해서 소유자, 클라이언트 호환성이나 호출 권한이 확인되는 것은 아닙니다.' },
        { title: '도구 목록', body: '특정 시점에 서버가 어떤 도구와 매개변수를 제공했는지 기록합니다. 목록이 바뀌면 새 관찰 기록을 추가합니다.' },
      ],
    },
    filters: {
      label: '필터',
      headline: '필터 조건은 하나의 기록에서 가져옵니다.',
      body: '“명령줄 도구에서 번체 중국어로 파일 내보내기에 성공한” 서버를 찾을 때 세 조건은 하나의 기록에서 확인해야 합니다. 서로 무관한 세 기록을 조합하지 않습니다.',
      rows: [
        { title: '코드 편집기에서 일본어로 할 일을 정리한 서버', body: '클라이언트, 언어, 작업과 결과라는 네 조건이 하나의 기록에 포함됩니다.' },
        { title: '최신 버전이 최근 90일 안에 성공 기록을 가진 서버', body: '버전, 날짜와 결과를 하나의 기록에서 확인합니다.' },
        { title: '같은 관리자가 운영하는 서버 모두', body: '관리자별로 찾습니다.' },
        { title: '특정 API를 감싼 서버', body: '관계로 찾으며 API 페이지에서도 확인할 수 있습니다.' },
      ],
      caption: '필터를 이름이 있는 보기로 저장해 다시 열거나 팔로우할 수 있습니다.',
      note: '보기 예시.',
    },
    traversal: {
      label: '목록',
      headline: '목록을 끝까지 살펴보고 중단 위치도 확인하세요.',
      facts: [
        { title: '마지막 항목까지', body: '처음 몇 페이지의 결과만 제공하지 않습니다. 원하는 만큼 넘겨 마지막 항목까지 볼 수 있습니다.' },
        { title: '정확한 개수 표시', body: '개수가 정확한지 추정치인지 밝히고 데이터 업데이트 시점도 표시합니다.' },
        { title: '지원하지 않는 조건 안내', body: '지원하지 않는 조건 조합이면 명확히 알립니다. 결과가 없는 것처럼 보이는 빈 페이지를 돌려주지 않습니다.' },
      ],
    },
    parts: {
      label: '구성 요소',
      headline: '여덟 가지 구성 요소를 함께 사용합니다.',
      body: 'MCP Hub는 별도로 만든 체계가 아닙니다. 항목은 서재, 게임, 소프트웨어와 같은 구성 요소를 사용하며 배치만 다릅니다.',
      notes: {
        identity: '각 출처에 있는 같은 서버는 하나의 ID를 가리킵니다.',
        editions: '각 버전을 별도 항목으로 기록하고 패키지, 도구 목록과 이력을 연결합니다.',
        specs: '호환성 기록에는 날짜, 클라이언트와 버전, 작업, 언어, 결과를 표시합니다.',
        credits: '관리자는 개인이나 조직으로 등록하고 다른 프로젝트에도 연결합니다.',
        ratings: '평점은 특정 버전에 연결하고 평가 항목을 먼저 표시합니다.',
        discussion: '토론은 서버 전체 또는 특정 버전에 연결합니다.',
        lists: '서버, 스킬과 API를 같은 목록에 담고 각각 메모를 추가합니다.',
        follow: '서버, 관리자 또는 보기를 팔로우하면 새 버전이 나올 때 알립니다.',
      },
    },
    statement: {
      text: '이름이 같아도 같은 서버라는 뜻은 아닙니다.',
      sub: '증거를 바탕으로 검토한 뒤 병합합니다.',
      note: '병합 후에도 이전 ID와 기록을 언제든 확인할 수 있습니다.',
    },
    next: '각 기록에 무엇을 적고 무엇을 남기지 않는지 확인합니다.',
    closing: '서버를 찾기 전에 어떤 서버인지 확인하세요.',
  },

  evidence: {
    hero: {
      headline: '기록마다 날짜와 조합을 표시합니다.',
      lede: '사람이나 AI 에이전트가 특정 클라이언트 버전을 사용해 특정 언어로 서버의 특정 버전에 작업을 요청합니다. 결과와 날짜를 함께 기록합니다. MCP Hub의 근거는 이 기록들로 구성됩니다.',
    },
    specimen: {
      label: '기록 예시',
      headline: '기록 하나를 자세히 살펴봅니다.',
      fields: {
        server: { label: '서버', value: '노트 서버 1.4.0', note: '버전 번호까지 기록합니다.' },
        client: { label: '클라이언트', value: '코드 편집기 3.2', note: '클라이언트 버전도 기록합니다.' },
        task: { label: '작업', value: '회의록을 할 일 목록으로 정리', note: '수행한 작업을 한 문장으로 설명합니다.' },
        language: { label: '언어', value: '번체 중국어', note: '어떤 언어로 작업을 요청했는지 표시합니다.' },
        result: { label: '결과', value: '성공', note: '성공 여부를 모두 기록합니다.' },
        date: { label: '날짜', value: '2026/10/12', note: '이 기록은 이날의 결과만 나타냅니다.' },
        submitter: { label: '제출자', value: '사용자 1명', note: '사람이나 AI 에이전트가 제출할 수 있습니다. 에이전트는 담당자를 표시합니다.' },
        review: { label: '검토', value: '검토 완료', note: '사람이 검토한 기록만 공개합니다.' },
      },
      caption: '기록 예시. 항목과 내용은 호환 근거를 설명하기 위한 것이며 사람이 검토한 기록만 공개합니다.',
    },
    compare: {
      label: '범위',
      headline: '기록이 설명하는 것과 설명하지 않는 것.',
      says: {
        heading: '설명하는 내용',
        items: [
          '이 조합이 이날 작업에 성공했는지 여부.',
          '사용한 서버와 클라이언트의 버전.',
          '작업을 수행한 언어.',
          '제출자와 사람의 검토 여부.',
        ],
      },
      not: {
        heading: '설명하지 않는 내용',
        items: [
          '서버의 안전성. 이 기록은 안전 인증이 아닙니다.',
          '서버 코드를 사용할 수 있는 범위. 관리자의 라이선스 선언과 원문 약관을 확인해야 합니다.',
          '다른 버전, 클라이언트나 언어를 사용했을 때의 결과.',
          'REZICS가 서버를 추천하거나 보증하는지 여부.',
        ],
      },
    },
    states: {
      label: '결과와 상태',
      headline: '결과, 분쟁과 기록 없음은 따로 표시합니다.',
      body: '누군가 테스트하면 결과를 기록합니다. 결과에 이의가 제기되면 다시 검토합니다. 상태는 색상에만 의존하지 않고 항상 텍스트로 표시합니다.',
      names: { ok: '성공', fail: '실패', disputed: '분쟁 중', none: '기록 없음' },
      items: {
        ok: '이 조합은 이날 작업에 성공했습니다.',
        fail: '테스트에 실패해도 기록을 남깁니다.',
        disputed: '공개된 기록에 이의가 제기되어 다시 검토하고 있습니다.',
        none: '아직 테스트하지 않았거나 테스트한 사람이 기록하지 않았습니다.',
      },
    },
    statement: {
      text: '기록이 없다고 실패한 것은 아닙니다.',
      sub: '아직 테스트하지 않은 조합은 비워 두고 실패로 처리하지 않습니다.',
    },
    layers: {
      label: '선언과 기록',
      headline: '관리자의 말, 서버 목록과 사용자 테스트를 구분합니다.',
      chapters: [
        { title: '선언', body: '관리자가 지원하는 클라이언트와 언어를 기록합니다. 선언은 선언으로 표시하며 테스트 기록으로 처리하지 않습니다.' },
        { title: '관찰', body: '특정 시점에 서버가 제공한 도구와 매개변수를 기록합니다. 도구가 표시된다고 작업 성공을 뜻하지는 않습니다.' },
        { title: '기록', body: '누군가 조합을 사용해 작업을 수행하고 결과와 날짜를 기록한 뒤 사람이 검토하고 공개합니다. 이 단계부터 테스트 기록으로 인정합니다.' },
        { title: '검토와 분쟁', body: '검토된 기록도 이의가 제기될 수 있습니다. 검토 완료와 분쟁 중 상태가 동시에 있을 수 있으며 이전 판단은 기록에 남습니다.' },
      ],
    },
    client: {
      label: '클라이언트로 검색',
      headline: '사용 중인 클라이언트부터 찾아보세요.',
      body: [
        '사용하는 클라이언트와 버전을 고른 뒤 작업 언어를 선택합니다. 목록에는 해당 조합의 기록이 있는 서버만 남으며 결과와 날짜를 함께 표시합니다.',
        '보기로 저장해 팔로우하면 조건에 맞는 새 기록이 생길 때 확인할 수 있습니다.',
      ],
    },
    next: '각 버전을 별도 기록으로 관리해 도구 목록의 변경을 확인할 수 있습니다.',
    closing: '기록이 명확할수록 직접 판단하기 쉽습니다.',
  },

  versions: {
    hero: {
      headline: '각 버전을 별도로 기록합니다.',
      lede: '버전은 해당 생태계의 규칙에 따라 정렬합니다. 각 버전에는 자체 패키지, 도구 목록, 변경 기록, 호환 기록과 평가가 있으며 이전 버전의 내용을 가져오지 않습니다.',
    },
    start: {
      label: '새 버전',
      headline: '새 버전에는 자체 기록이 필요합니다.',
      body: '2.0.0의 호환 기록에는 해당 버전의 실제 테스트가 필요합니다. 1.4.1의 성공 기록을 가져오지 않습니다. 2.0.0을 테스트한 뒤에야 자체 기록이 생깁니다. 이전 기록은 날짜와 버전이 표시되어 현재도 유효한지 확인할 수 있습니다.',
      note: '버전 번호 예시.',
    },
    diff: {
      label: '도구 목록',
      headline: '도구 목록이 바뀌면 비교할 수 있습니다.',
      body: '각 관찰 기록에 해당 시점의 서버 도구와 매개변수 형식을 남깁니다. 두 기록을 비교해 새 도구, 삭제된 도구와 매개변수가 바뀐 도구를 각각 표시합니다.',
      columns: ['도구', '1.4.0 관찰', '2.0.0 관찰'],
      rows: [
        { tool: '노트 검색', before: '있음', after: '매개변수 변경' },
        { tool: '노트 만들기', before: '있음', after: '변경 없음' },
        { tool: '노트 삭제', before: '있음', after: '삭제' },
        { tool: '태그 목록 보기', before: '있음', after: '변경 없음' },
        { tool: '노트 내보내기', before: '없음', after: '추가' },
      ],
      consequence: '“노트 검색”은 남아 있지만 매개변수 형식이 바뀌었습니다. 이 도구를 사용하는 설정을 다시 테스트해 보는 것이 좋습니다.',
      caption: '예시: 실제 관찰이 아닌 두 관찰 기록의 도구 목록 비교.',
    },
    ledger: {
      label: '패키지',
      headline: '이름과 버전 번호가 같아도 같은 파일은 아닙니다.',
      body: '패키지가 속한 생태계의 규칙에 따라 기본 이름과 버전 번호를 기록합니다. 이름이나 버전 번호가 같아도 콘텐츠나 권리가 같다는 뜻은 아닙니다. 파일마다 해시로 확인합니다.',
      rows: [
        { title: '생태계', body: '패키지가 속한 패키지 생태계.' },
        { title: '기본 이름', body: '다른 형식으로 바꾸지 않고 원래대로 보관합니다.' },
        { title: '버전 번호', body: '생태계의 규칙에 따라 순서를 정합니다.' },
        { title: '파일 해시', body: '해당 판본의 실제 파일을 확인합니다.' },
        { title: '라이선스 선언', body: '누가 언제 어떤 조항을 선언했는지.' },
        { title: '출처', body: '이 기록이 어디에서 언제 왔는지.' },
      ],
    },
    follow: {
      label: '팔로우',
      headline: '서버를 팔로우하고 알림 수준을 직접 정하세요.',
      body: '팔로우마다 알림 수준을 설정할 수 있으며 언제든 변경할 수 있습니다. 팔로우한 서버의 변경 사항은 팔로우 피드에도 표시됩니다.',
      levels: [
        { title: '모두', body: '새 버전, 공지와 새 게시물을 모두 받습니다.' },
        { title: '주요 소식', body: '새 버전, 공지와 결정을 받습니다.' },
        { title: '끄기', body: '다른 사람이 답글을 달거나 멘션할 때만 알림을 받습니다.' },
        { title: '특정 항목', body: '특정 버전이나 토론만 팔로우합니다.' },
      ],
      channels: '알림은 받은 편지함으로 오며 푸시나 이메일 요약도 설정할 수 있습니다. 이메일은 한 번의 클릭으로 구독을 취소할 수 있습니다.',
    },
    statement: {
      text: '평가도 버전에 연결됩니다.',
      sub: '1.4 버전의 점수를 2.0 버전에 합산하지 않습니다.',
      note: '버전 간 지표는 별도로 계산하며 방법과 포함한 버전을 표시합니다.',
    },
    next: '평점, 토론과 목록은 대상을 분명히 표시합니다.',
    closing: '버전을 바꿨다면 기록을 다시 확인하세요.',
  },

  community: {
    hero: {
      headline: '평가 전에 대상 버전을 밝힙니다.',
      lede: '각 평가는 하나의 질문, 척도와 버전에 적용됩니다. 점수와 함께 평가 수, 분포와 평가 집단을 표시해 누구의 의견인지 알 수 있습니다.',
    },
    score: {
      label: '평가',
      headline: '점수에는 다섯 가지 정보가 있습니다.',
      items: [
        { title: '질문', body: '예: “설명서가 명확한가요?” 또는 “오래 사용해도 안정적인가요?” 질문이 다르면 점수를 합산하지 않습니다.' },
        { title: '척도', body: '몇 점 척도인지와 각 점수가 뜻하는 바를 표시합니다.' },
        { title: '버전', body: '평가한 버전에 점수를 연결합니다.' },
        { title: '평가 수와 분포', body: '평가가 적으면 평균 없이 평가 수와 분포만 표시합니다.' },
        { title: '집단', body: '전체 평가와 특정 커뮤니티의 평가를 구분합니다.' },
      ],
      note: '질문 예시.',
    },
    discussion: {
      label: '토론',
      headline: '토론은 서버나 특정 버전에 연결됩니다.',
      body: '특정 버전의 문제는 해당 버전에 토론을 엽니다. 전체 사용 경험은 서버에 토론을 엽니다. 관리자는 자신의 ID로 답변해 독자가 누가 말하는지 알 수 있습니다.',
      agents: 'AI 에이전트가 토론에 참여할 때는 에이전트임을 밝히고 담당자를 표시해야 합니다.',
    },
    list: {
      label: '목록',
      headline: '서버, 스킬과 API를 한 목록에 담습니다.',
      body: '목록에는 종류와 관계없이 서버, 서버를 사용하는 스킬과 그 기반 API를 함께 정리할 수 있습니다. 각 항목에 메모를 쓰고 순서를 정해 내보낼 수 있습니다.',
      title: '회의록 정리 도구 모음',
      items: [
        { kind: 'mcp', name: '노트 서버', note: '2.0.0부터 노트를 내보낼 수 있습니다.' },
        { kind: 'skills', name: '회의록 정리 스킬', note: '위 서버가 필요합니다.' },
        { kind: 'apis', name: '캘린더 API', note: '할 일을 캘린더에 추가합니다.' },
        { kind: 'software', name: '명령줄 도구', note: '이 조합을 여기서 테스트했습니다.' },
      ],
      caption: '목록 예시.',
    },
    zone: {
      label: '사이트',
      headline: '커뮤니티가 자체 서버 목록 사이트를 운영할 수 있습니다.',
      body: '커뮤니티는 Zone으로 홈페이지, 탐색 메뉴, 필터가 적용된 목록과 안내 페이지를 갖춘 사이트를 만들 수 있습니다. 사이트의 항목도 같은 ID를 사용하며 수정 사항은 해당 항목이 표시되는 모든 곳에 반영됩니다.',
      routes: '사이트 지도 예시: 홈, 목록, 시작 안내, 기록, 토론.',
    },
    next: '서버를 등록하고 ID를 인증하고 선언문을 작성합니다.',
      closing: '모든 평가와 토론에서 대상을 먼저 밝힙니다.',
  },

  maintainers: {
    hero: {
      headline: '관리하는 서버 정보를 직접 설명하세요.',
      lede: '서버를 등록하고 가져온 ID의 소유권을 확인하며 라이선스와 지원 범위를 작성합니다. 작성한 내용은 선언으로 표시하고 사용자 기록과 나란히 보여 줍니다.',
    },
    steps: {
      label: '단계',
      headline: '등록부터 답변까지 네 단계.',
      items: [
        { title: '등록', body: '항목을 만들고 이름, 설명, 프로젝트와 패키지를 작성합니다. 제출 전에 중복 항목이 있는지 확인합니다.' },
        { title: '소유권 확인', body: '공개 데이터에서 가져온 항목이라면 자신이나 조직의 ID를 소유한다고 확인할 수 있습니다.' },
        { title: '선언', body: '라이선스 약관과 지원하는 클라이언트 및 언어를 작성합니다. 각 선언의 작성자, 날짜와 기준 약관 판본을 기록합니다.' },
        { title: '답변', body: '관리자 ID로 토론에 답합니다. 기록에 분쟁이 있으면 자체 기록을 제출합니다.' },
      ],
    },
    rules: {
      label: '권한',
      headline: '수정할 수 있는 항목과 없는 항목.',
      can: {
        heading: '할 수 있는 일',
        items: ['항목 설명, 버전 정보와 선언을 수정합니다.', '토론에 답하고 기록에 반대 증거를 제출합니다.', 'AI 에이전트가 새 버전의 기록을 제출하도록 합니다.'],
      },
      cannot: {
        heading: '할 수 없는 일',
        items: ['동의하지 않는다는 이유로 다른 사람의 기록을 삭제하지 않습니다. 반대 증거를 제출해 검토를 요청해야 합니다.', '후원이나 구독으로 다른 결정을 받지 않습니다.', '자신에게 평가를 몰아주거나 여러 계정으로 여론을 만들지 않습니다.'],
      },
    },
    licence: {
      label: '라이선스 선언',
      headline: '라이선스는 관리자의 선언이며 REZICS의 허가가 아닙니다.',
      body: '선언에는 약관과 판본, 선언자, 날짜, 범위와 근거를 기록합니다. REZICS가 사용을 허가하거나 법적으로 확인한다는 뜻이 아닙니다. 서버가 목록에 등록되어도 누구나 코드를 배포할 수 있다는 의미는 아닙니다.',
      rows: [
        { title: '약관과 판본', body: '어떤 약관의 어느 판본을 선언했는지.' },
        { title: '선언자', body: '어떤 사람이나 조직의 ID로 선언했는지.' },
        { title: '날짜', body: '언제 선언했는지. 모르면 모른다고 기록합니다.' },
        { title: '범위', body: '어느 버전과 파일에 적용되는지.' },
        { title: '근거', body: '어떤 근거로 선언했는지.' },
      ],
    },
    agent: {
      text: 'AI 에이전트가 새 버전마다 작업을 수행하고',
      sub: '결과를 제출할 수 있습니다.',
      note: '이 기록은 에이전트가 제출했다고 표시하며 다른 사람의 기록과 같은 검토 절차를 거칩니다.',
      link: '제출 방법 보기',
      href: '/developers/mcp-server/',
    },
    next: {
      headline: 'AI 에이전트용 스킬에도 버전, 기록, 평점이 있습니다.',
      lines: {
        skills: '각 스킬 버전의 파일과 의존성',
        apis: '서버가 감싼 API',
        software: '프로젝트, 패키지와 클라이언트',
      },
    },
    closing: '관리자의 선언과 사용자의 기록을 나란히 보여 줍니다.',
  },
};

export default {
  id: 'mcp',
  base: '/mcp/',
  name: 'MCP Hub',
  theme: { kind: 'mcp' },
  next: 'skills',
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: 'MCP Hub: MCP 서버 색인',
        description:
          'REZICS의 MCP Hub에서 MCP 서버를 찾으세요. 서버마다 하나의 ID를 부여하고 버전별로 기록합니다. 호환 기록에는 날짜, 클라이언트와 버전, 작업과 언어를 표시하며 평가, 토론과 목록도 함께 볼 수 있습니다.',
      },
    },
    {
      slug: 'directory',
      label: '목록',
      meta: {
        title: 'MCP Hub 목록: 서버마다 하나의 ID',
        description:
          'MCP Hub 목록에서 각 MCP 서버는 하나의 ID를 가집니다. 프로젝트, 패키지 버전, 배포 엔드포인트와 도구 목록을 따로 기록하고 필터 조건은 같은 기록에 연결합니다. 마지막 결과까지 확인할 수 있습니다.',
      },
    },
    {
      slug: 'evidence',
      label: '근거',
      meta: {
        title: 'MCP Hub 근거: 날짜와 조건',
        description:
          'MCP Hub의 호환 기록에는 날짜, 서버 버전, 클라이언트와 버전, 작업, 언어와 결과를 표시합니다. 특정 날짜에 특정 조합으로 작업을 수행했다는 뜻이며 안전성, 라이선스나 REZICS의 보증을 의미하지 않습니다.',
      },
    },
    {
      slug: 'versions',
      label: '버전',
      meta: {
        title: 'MCP Hub 버전: 판본별 기록',
        description:
          'MCP 서버의 각 버전을 따로 기록합니다. 패키지 생태계, 기본 이름, 버전 번호와 파일 해시, 당시 관찰된 도구 목록, 해당 버전에만 속하는 기록과 평가를 표시합니다. 서버를 팔로우하면 새 버전이 나올 때 알림을 받습니다.',
      },
    },
    {
      slug: 'community',
      label: '커뮤니티',
      meta: {
        title: 'MCP Hub 커뮤니티: 평가, 토론과 목록',
        description:
          'MCP 서버의 특정 버전을 평가하고 질문을 표시합니다. 서버나 버전에 토론을 연결하고 서버, 스킬과 API를 같은 목록에 담을 수 있습니다. 커뮤니티는 Zone으로 자체 서버 목록 사이트를 만들 수도 있습니다.',
      },
    },
    {
      slug: 'maintainers',
      label: '관리자',
      meta: {
        title: 'MCP Hub 관리자: 등록과 소유권 확인',
        description:
          '관리자는 MCP Hub에 서버를 등록하고 가져온 ID의 소유권을 확인하며 라이선스와 지원 범위를 선언할 수 있습니다. 자신의 ID로 토론에 답할 수 있습니다. 선언과 사용자 기록을 구분해 표시하며 비용을 지불해도 결정은 바뀌지 않습니다.',
      },
    },
  ],
  strings,
} satisfies MiniSite<McpStrings>;
