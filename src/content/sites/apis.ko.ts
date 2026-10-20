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
      label: '개요',
      meta: {
        title: 'API Hub: 공개 API마다 하나의 항목',
        description:
          'REZICS는 공개 API마다 항목을 만듭니다. 제공자, 버전, 사양 문서와 인증 방식에 출처와 날짜를 표시합니다. 제공된 항목으로 필터링하고 업데이트를 팔로우하며 평가와 토론의 대상 판본을 확인할 수 있습니다.',
      },
    },
    {
      slug: 'directory',
      label: '목록',
      meta: {
        title: 'API Hub 목록: 사실을 기준으로 API 찾기',
        description:
          'API Hub 목록에서 제공자, 인증 방식, 사양 문서와 버전 상태를 조건으로 필터링할 수 있습니다. 마지막 항목까지 결과를 표시하고 개수의 정확도를 밝힙니다. 조건을 보기로 저장해 팔로우할 수도 있습니다.',
      },
    },
    {
      slug: 'versions',
      label: '버전',
      meta: {
        title: 'API Hub 버전: 판본마다 기록',
        description:
          'API 버전마다 당시 실제로 공개된 내용을 기록합니다. 발표, 일정 확정, 사용 가능, 연기와 철회를 각각 기록하며 팔로우하면 선택한 알림 수준에 따라 소식을 받습니다.',
      },
    },
    {
      slug: 'specs',
      label: '사양과 인증',
      meta: {
        title: 'API Hub 사양과 인증',
        description:
          '각 버전의 인증 방식과 사양 문서를 따로 기록하고 제공자, 가져온 출처 또는 커뮤니티가 제공한 정보인지 표시합니다. 측정 결과에는 지표, 방법, 조건, 단위와 시간을 표시하고 미확인, 0과 해당 없음은 구분합니다.',
      },
    },
    {
      slug: 'connections',
      label: '연결 항목',
      meta: {
        title: 'API Hub 연결 항목: API를 기반으로 한 도구',
        description:
          'API 제공자, 클라이언트 라이브러리, API를 감싼 MCP 서버와 이를 사용하는 스킬을 관계로 연결해 어느 쪽에서든 찾아볼 수 있습니다. 제공자도 자체 페이지에서 참여한 항목을 확인할 수 있습니다.',
      },
    },
    {
      slug: 'community',
      label: '커뮤니티',
      meta: {
        title: 'API Hub 커뮤니티: 평가, 토론과 목록',
        description:
          'API 평가에는 질문, 대상 판본, 평가 집단을 표시하고 참여 인원과 분포를 함께 보여 줍니다. 토론은 항목이나 버전에 연결됩니다. 목록에는 API, 소프트웨어와 MCP 서버를 함께 담을 수 있습니다.',
      },
    },
    {
      slug: 'publishing',
      label: '등록',
      meta: {
        title: 'API Hub 등록: 추가와 수정',
        description:
          'API를 추가하기 전에 중복 항목을 검색하고 새 API, 새 버전 또는 별칭인지 밝힙니다. 제안에 증거를 첨부하고 사람이 검토한 뒤 적용합니다. 제공자와 AI 에이전트도 같은 절차를 따릅니다.',
      },
    },
  ],
  strings: {
    example: '예시: ',
    next: { label: '다음 페이지', aria: 'API Hub의 다른 페이지' },
    closingBody: '하나의 계정으로 API를 찾고 업데이트를 팔로우하며 연동 경험을 다른 사람과 나누세요.',
    pictures: {
      hero: '따뜻한 흰 종이 위에 옅은 파란 종이 몇 장이 겹쳐 있고, 가장자리에 가지런한 구멍이 나 있다. 아래로 짙은 파란 종이가 보인다.',
      request: '옅은 파란 종이 다섯 장이 문처럼 한 줄로 서 있고 짙은 회청색 종이 띠 하나가 각 종이의 틈을 차례로 지난다.',
      versions: '옅은 파란 카드지 여섯 장이 부채처럼 어긋나게 놓여 있다. 색은 점차 짙어지고 위쪽의 구멍은 차례로 정렬되어 있다.',
      specs: '옅은 파란 두꺼운 종이 세 장이 겹쳐 있고 각 모서리에는 빈 사각형 압인이 있다. 아래로 짙은 회청색 종이가 보인다.',
      connections: '옅은 파란 종이 중앙에 구멍이 한 줄로 나 있고 황토색, 연두색과 짙은 청록색 종이 띠가 가장자리에서 뻗어 각각 구멍에 끼워져 있다.',
    },
    home: {
      hero: {
        headline: 'API마다 항목을 만들고 모든 사실에 출처를 표시합니다.',
        lede: '제공자, 버전, 사양 문서와 인증 방식을 하나의 항목에 정리하고 누가 언제 제공했는지 기록합니다.',
      },
      pages: {
        eyebrow: '여섯 페이지',
        headline: 'API를 찾고 각 버전을 확인하세요.',
        rows: {
          directory: '사실을 조건으로 마지막 결과까지 표시',
          versions: '이전 버전을 보관하고 새 버전 소식 알림',
          specs: '인증 방식과 사양 문서의 출처 표시',
          connections: '라이브러리, MCP 서버와 스킬 연결',
          community: '평가와 토론의 대상 표시',
          publishing: '추가와 수정에 같은 절차 적용',
        },
      },
      directory: {
        eyebrow: '목록',
        headline: '각 조건은 출처가 있는 항목의 사실입니다.',
        lead: '인증 방식, 사양 문서, 버전 상태와 연결된 MCP 서버 및 스킬을 필터 조건으로 사용할 수 있습니다. 지원하는 조건을 조합해 마지막 결과까지 표시합니다.',
        link: '목록 보기',
      },
      statement: {
        lead: 'API는 버전과 이름이 바뀌고 철회되기도 합니다.',
        rest: '항목에 모든 변경과 출처를 기록합니다.',
      },
      parts: {
        eyebrow: '여덟 가지 구성 요소',
        headline: 'API 항목은 여덟 가지 구성 요소로 이루어집니다.',
        lead: '고유 ID를 먼저 배치합니다. 나머지 일곱 가지는 API Hub가 공통 구성 요소 열다섯 가지 중에서 고른 것으로, 책과 애니메이션에도 같은 구성 요소를 사용합니다.',
        notes: {
          identity: '이름을 바꾸거나 식별자를 교체해도 같은 항목으로 유지되며 이전 이름으로도 찾을 수 있습니다.',
          editions: '각 버전을 별도 기록으로 관리하고 당시 실제로 공개된 내용을 표시합니다.',
          specs: '인증 방식, 사양 문서와 측정 결과에 각각 출처와 날짜를 표시합니다.',
          credits: '제공 조직과 관리자를 역할별로 표시하고 각자의 페이지에 연결합니다.',
          ratings: '평점이 어느 버전과 질문을 대상으로 하는지 함께 표시합니다.',
          discussion: '토론은 API 전체 또는 특정 버전에 연결합니다.',
          follow: '새 버전과 철회 소식을 설정한 알림 수준에 따라 전합니다.',
          lists: 'API, 소프트웨어와 스킬을 한 목록에 담고 각 항목에 메모를 추가합니다.',
        },
      },
      connections: {
        eyebrow: '연결 항목',
        headline: 'API를 기반으로 한 도구를 서로 연결합니다.',
        lead: '클라이언트 라이브러리, API를 감싼 MCP 서버, 이를 사용하는 스킬과 제공 조직은 각각 고유한 ID를 가진 항목입니다. 관계를 통해 연결해 어느 쪽에서든 확인할 수 있습니다.',
        link: '연결 항목 보기',
      },
      closing: 'API를 선택하기 전에 버전과 근거를 확인하세요.',
    },
    directory: {
      hero: {
        headline: '사실을 기준으로 API를 찾고 전체 결과를 확인하세요.',
        lede: '각 조건은 출처가 있는 항목의 사실에 대응합니다. 지원하는 조건을 조합해 앞부분에 그치지 않고 마지막까지 결과를 표시합니다.',
      },
      facets: {
        eyebrow: '조건',
        headline: '제공된 항목을 조합해 필터링합니다.',
        lead: '각 조건에는 이름과 값이 있습니다. 값도 하나의 항목이므로 열어서 더 찾아볼 수 있습니다.',
        rows: [
          { title: '제공자', body: 'API를 제공하는 조직이나 개인. 같은 제공자의 API를 한 번에 표시합니다.' },
          { title: '인증 방식', body: '인증 없음, API 키, 사용자 권한 부여를 버전별로 기록합니다.' },
          { title: '사양 문서', body: '사양 문서 유무와 위치, 제공자를 표시합니다.' },
          { title: '버전 상태', body: '발표, 사용 가능, 철회 또는 취소.' },
          { title: '관계', body: 'API를 감싼 MCP 서버, 호출하는 클라이언트 라이브러리, 사용하는 스킬이 있는지 확인합니다.' },
          { title: '이름과 언어', body: '모든 언어의 이름과 별칭으로 검색할 수 있습니다.' },
          { title: '평가', body: '평가 질문으로 필터링하고 참여 인원도 표시합니다.' },
          { title: '날짜', body: '버전 공개 날짜나 사실을 확인한 날짜로 필터링합니다.' },
        ],
      },
      complete: {
        lead: '미리 보기, 순위와 전체 목록은 서로 다른 기준입니다.',
        rest: '전체 목록은 마지막 항목까지 표시합니다.',
        note: '각 결과에 개수의 정확도와 데이터 업데이트 시점을 표시합니다. 페이지 크기가 목록의 끝을 뜻하지 않습니다.',
      },
      identity: {
        eyebrow: 'ID',
        headline: '하나의 API에는 항목이 하나만 있습니다.',
        lead: '이름이나 식별자를 바꾸거나 중복 등록해도 항목은 하나로 유지됩니다.',
        rows: [
          { title: '식별자에 출처 기록', body: '각 식별자가 어느 네임스페이스에 속하고 어디에서 왔는지 기록합니다. 다른 곳에서 이름이 같아도 같은 항목으로 처리하지 않습니다.' },
          { title: '이전 이름도 검색 가능', body: '별칭, 이전 이름과 언어별 표기를 따로 보관해 어느 이름으로 검색해도 찾을 수 있습니다.' },
          { title: '중복 항목 병합', body: '중복 항목이 발견되면 병합 전에 영향을 받는 평가, 리뷰와 팔로우를 표시합니다. 사람이 결정한 뒤 실행하며 병합을 되돌릴 수 있습니다.' },
          { title: '이전 URL을 새 항목으로 연결', body: '병합된 항목은 남은 항목으로 연결하고 병합 이유를 기록합니다.' },
        ],
      },
      views: {
        eyebrow: '보기',
        headline: '자주 쓰는 조건을 저장하고 팔로우하세요.',
        lead: '조건을 보기로 저장하면 이름을 붙여 다른 사람과 공유할 수 있습니다. 보기를 팔로우하면 조건에 맞는 새 항목이 팔로우 피드에 표시되며 요약 이메일로 받을 수도 있습니다.',
        tiles: [
          { name: '인증 불필요, 사양 문서 있음', line: '문서가 있고 인증이 필요 없는 API' },
          { name: '같은 제공자', line: '한 조직이 제공하는 API 모아 보기' },
          { name: 'MCP 서버 있음', line: 'MCP 서버와 관계가 있는 API' },
          { name: '번체 중국어 이름 있음', line: '중국어 이름이 등록된 API' },
        ],
        caption: '보기 이름과 내용은 예시입니다.',
      },
      closing: '출처가 있는 사실에서 API 검색을 시작하세요.',
    },
    versions: {
      hero: {
        headline: '이전 버전은 보관하고 새 버전 소식은 알려 드립니다.',
        lede: '각 버전이 공개 당시의 모습으로 보관되며 철회된 버전도 확인할 수 있습니다. API를 팔로우하면 새 버전이 발표, 공개 또는 철회될 때 설정한 방식으로 알림을 받습니다.',
      },
      closed: {
        lead: '공개된 버전의 기록은 수정하지 않습니다.',
        rest: '이후 변경 사항은 다음 버전으로 기록합니다.',
      },
      sequence: {
        eyebrow: '버전 순서',
        headline: '같은 API도 버전마다 근거가 다를 수 있습니다.',
        lead: '가상의 날씨 데이터 API 예시입니다. 3판은 API 키 인증을 사용하지만 2판의 인증 불필요 기록은 그대로 보관합니다. 기록이 잘못됐다면 증거를 첨부해 수정하고 이후에 추가되는 내용은 다음 버전으로 만듭니다.',
        tiles: [
          { name: 'v1', rel: '철회됨', line: '인증 불필요. 제공자 공지, 2026/06/18 확인.' },
          { name: 'v2', rel: '사용 가능', line: '인증 불필요. 제공자 버전 안내, 2026/08/12 확인.' },
          { name: 'v3', rel: '사용 가능', line: 'API 키. 제공자 사양 문서, 2026/10/01 확인.' },
          { name: 'v4', rel: '발표됨', line: 'API 키. 제공자 예고, 2026/10/19 확인.' },
        ],
        caption: '날씨 데이터 API, 버전, 인증 방식, 출처와 날짜는 가상의 예시입니다.',
      },
      events: {
        eyebrow: '다섯 가지 상태',
        headline: '발표부터 철회까지 각 상태를 따로 기록합니다.',
        lead: '하나의 버전에도 여러 기준 시점이 있습니다. REZICS는 이를 하나의 날짜로 합치지 않습니다.',
        rows: [
          { title: '발표', body: '제공자가 새 버전을 예고했습니다. 공지이며 아직 공개된 것은 아닙니다.' },
          { title: '일정 확정', body: '예정 날짜가 공개되었습니다. 날짜가 바뀌면 이전 날짜도 기록에 남습니다.' },
          { title: '사용 가능', body: '사용할 수 있다고 확인했으며 확인 출처를 첨부합니다.' },
          { title: '연기', body: '예정 날짜가 뒤로 미뤄졌습니다. 연기와 취소는 다르며 취소는 따로 표시합니다.' },
          { title: '철회', body: '제공자가 버전을 철회했습니다. 기록은 보관하고 상태는 철회됨으로 바꿉니다.' },
        ],
      },
      follow: {
        eyebrow: '팔로우',
        headline: 'API를 팔로우하고 알림 수준을 선택하세요.',
        lead: '상대방의 허락이나 비용 없이 팔로우할 수 있습니다. 팔로우마다 알림 수준을 설정해 받은 편지함에 표시할 소식을 정합니다.',
        rows: [
          { title: '모두', body: '새 버전, 공지와 결정뿐 아니라 일반 게시물도 알립니다.' },
          { title: '주요 소식', body: '새 버전, 공지와 결정만 알립니다.' },
          { title: '끄기', body: '일반 소식은 팔로우 피드에 표시합니다. 답글이나 멘션처럼 직접 참여한 내용은 계속 알립니다.' },
          { title: '버전별 설정', body: '특정 버전의 알림을 별도로 설정할 수 있습니다.' },
        ],
        footnote: '알림은 받은 편지함, 푸시 또는 이메일 요약으로 받을 수 있습니다. 이메일 요약은 한 번의 클릭으로 구독을 취소할 수 있습니다.',
      },
      closing: '버전 업데이트 소식을 원하는 방식으로 받으세요.',
    },
    specs: {
      hero: {
        headline: '호출 전에 필요한 정보를 확인하세요.',
        lede: '각 버전의 인증 방식, 사양 문서 위치와 측정 결과를 버전 아래에 기록하고 누가 언제 제공했는지 표시합니다.',
      },
      facts: {
        eyebrow: '버전에 기록',
        headline: '인증 방식과 사양 문서를 버전마다 기록합니다.',
        lead: '같은 API의 버전마다 인증 방식이 다를 수 있습니다. 각 사실을 버전에 연결하고 출처를 표시합니다.',
        rows: [
          { title: '인증 방식', body: '인증 없음, API 키 또는 사용자 권한 부여를 버전마다 기록합니다. 새 버전의 인증 방식이 바뀌어도 이전 기록은 그대로 유지됩니다.' },
          { title: '사양 문서', body: '문서 위치와 제공자, 확인 날짜를 항목에 기록합니다.' },
          { title: '측정', body: '측정 결과에 지표, 방법, 조건, 단위와 시간을 첨부합니다.' },
          { title: '출처', body: '각 사실이 제공자, 공개 데이터 가져오기 또는 커뮤니티 측정 중 어디에서 왔는지 표시합니다. 가져온 데이터에는 출처와 라이선스 링크를 첨부합니다.' },
        ],
      },
      measure: {
        lead: '측정과 평가는 다릅니다.',
        rest: '평가는 사람들의 의견이고 측정은 어떤 조건에서 무엇을 측정했는지 나타냅니다.',
      },
      fields: {
        eyebrow: '측정',
        headline: '측정 기록에서 다섯 가지 정보를 확인하세요.',
        lead: '지표, 방법, 조건, 단위와 시간을 먼저 확인합니다. 비교할 때는 결과, 대상과 적용 범위도 확인합니다.',
        rows: [
          { title: '지표', body: '무엇을 측정했는지.' },
          { title: '방법', body: '어떤 방법으로 측정했는지.' },
          { title: '조건', body: '어떤 상황에서 측정했는지.' },
          { title: '단위', body: '수치에 사용한 단위.' },
          { title: '시간', body: '측정 날짜. 이전 결과에는 이전 날짜를 표시합니다.' },
        ],
        footnote: '같은 지표의 결과를 기록으로 쌓아 다른 API와 표로 비교할 수 있습니다.',
      },
      absent: {
        eyebrow: '누락된 데이터',
        headline: '미확인, 0, 해당 없음은 서로 다릅니다.',
        lead: '측정하지 않았다면 미확인으로 표시하고 0으로 기록하지 않습니다. 해당하지 않는 지표는 누락된 데이터로 처리하지 않습니다. 데이터가 없다는 이유로 오해를 부르는 점수를 만들지 않습니다.',
      },
      closing: '연동하기 전에 인증 방식을 확인하세요.',
    },
    connections: {
      hero: {
        headline: 'API와 이를 기반으로 한 도구를 연결합니다.',
        lede: '클라이언트 라이브러리, API를 감싼 MCP 서버, 이를 사용하는 스킬과 제공 조직은 REZICS에서 각각 고유한 ID를 가진 항목이며 관계를 통해 연결됩니다.',
      },
      relations: {
        eyebrow: '관계',
        headline: '관계 유형과 방향을 표시합니다.',
        lead: '각 관계의 유형과 역할을 표시합니다. API 페이지와 연결된 다른 항목의 페이지에서 모두 확인할 수 있습니다.',
        rows: [
          { title: '클라이언트 라이브러리', body: '이 API를 호출하는 라이브러리는 자체 버전과 의존성을 가진 소프트웨어 항목입니다.' },
          {
            title: 'MCP 서버로 래핑',
            body: 'API를 MCP 서버로 래핑한 프로젝트는 MCP Hub에 별도의 항목이 있으며 프로젝트, 패키지와 배포 엔드포인트를 각각 기록합니다.',
          },
          {
            title: 'API를 사용하는 스킬',
            body: '이 API를 사용하는 스킬은 Skill Hub의 별도 항목으로 등록하고 관계를 통해 여기에 연결합니다.',
          },
          { title: '같은 제공자의 다른 API', body: '제공자 페이지에서 해당 제공자의 다른 API를 찾을 수 있습니다.' },
        ],
      },
      both: {
        lead: 'API에서 MCP 서버를 찾고',
        rest: 'MCP 서버에서도 API를 찾을 수 있습니다.',
      },
      provider: {
        eyebrow: '제공자',
        headline: '제공자마다 자체 페이지가 있습니다.',
        lead: 'API를 제공하는 조직이나 개인은 계정과 무관한 공개 ID를 가집니다. 제공하는 API, 공개한 소프트웨어와 유지 관리하는 MCP 서버를 역할별로 페이지에 표시합니다.',
        more: '한 사람이 소설을 쓰고 소프트웨어를 만들며 API를 관리해도 REZICS에서는 같은 ID를 사용합니다.',
      },
      neighbours: {
        eyebrow: '관련 항목',
        headline: '세 가지 관련 항목과 개발자 사이트.',
        lines: {
          mcp: 'API를 도구로 감싼 MCP 서버',
          skills: 'AI 에이전트가 사용하는 스킬',
          software: 'API를 호출하는 라이브러리와 애플리케이션',
        },
        developers: { name: '개발자', line: 'REZICS API는 여기에서 확인하세요' },
      },
      closing: '어느 쪽에서 시작해도 연결된 항목을 찾을 수 있습니다.',
    },
    community: {
      hero: {
        headline: '각 평가에서 대상 버전을 명확히 표시합니다.',
        lede: 'API를 평가할 때는 질문과 대상 버전을 먼저 밝힙니다. 점수와 함께 참여 인원과 분포를 표시하며 토론, 목록과 커뮤니티도 같은 항목에 연결됩니다.',
      },
      rating: {
        eyebrow: '평가',
        headline: '평가에는 다섯 가지 정보가 있습니다.',
        lead: '예시: “문서가 명확한가요?”라는 질문을 5점 척도로 3판에 대해 전체 사용자가 평가합니다.',
        rows: [
          { title: '질문', body: '어떤 질문에 대한 평가인지 표시합니다. 질문이 다른 점수는 합산하지 않습니다.' },
          { title: '척도', body: '몇 점 척도인지와 각 점수의 의미를 미리 밝힙니다.' },
          { title: '대상', body: '평가하는 판본을 표시합니다. 한 판본의 점수를 다른 판본에 합산하지 않습니다.' },
          { title: '집단', body: '어떤 집단이 평가했는지 점수 옆에 표시합니다.' },
          { title: '참여 인원과 분포', body: '각 점수에 평가 인원과 분포를 함께 표시합니다. 인원이 적으면 평균 없이 인원과 분포만 표시합니다.' },
        ],
      },
      discussion: {
        lead: '연동 중 발생한 문제는 해당 버전에서 토론합니다.',
        rest: '버전이 바뀌어도 이전 버전의 토론은 그대로 남습니다.',
      },
      lists: {
        eyebrow: '목록',
        headline: '프로젝트에 필요한 항목을 하나의 목록에 담습니다.',
        lead: '목록에는 API, 클라이언트 라이브러리, MCP 서버와 스킬을 함께 정리하고 각 항목에 메모를 추가할 수 있습니다. 공개 범위를 설정하고 정렬해 내보낼 수 있습니다.',
        tiles: [
          { kind: 'apis', rel: 'API', name: '날씨 데이터 API', line: '예보 데이터 출처' },
          { kind: 'apis', rel: 'API', name: '지도 타일 API', line: '화면의 기본 지도' },
          { kind: 'software', rel: '소프트웨어', name: '클라이언트 라이브러리', line: '프로그램에서 날씨 데이터 API 호출' },
          { kind: 'mcp', rel: 'MCP 서버', name: '날씨 MCP 서버', line: 'AI 에이전트가 날씨를 조회' },
          { kind: 'skills', rel: '스킬', name: '일정 정리 스킬', line: '날씨에 따라 일정을 조정' },
        ],
        caption: '가상의 프로젝트 목록이며 이름은 예시입니다.',
      },
      zone: {
        eyebrow: '커뮤니티와 Zone',
        headline: 'API 종류에 맞는 Zone을 만드세요.',
        lead: '커뮤니티를 만들고 자체 규칙을 정해 항목의 사실을 직접 해석할 수 있습니다. Zone을 만들어 전문 API 디렉터리 사이트로 운영해도 데이터는 같은 그래프에서 가져옵니다.',
        link: '사이트 모듈 보기',
      },
      closing: '각 평가와 토론의 대상을 명확히 표시합니다.',
    },
    publishing: {
      hero: {
        headline: '먼저 검색하고 추가하세요.',
        lede: '추가와 수정은 모두 제안으로 제출합니다. 변경할 내용과 근거를 설명하고 사람이 검토한 뒤 적용하며 영수증을 남깁니다. 사람, 제공자와 AI 에이전트가 같은 절차를 사용합니다.',
      },
      path: {
        eyebrow: '절차',
        headline: '항목은 다음 절차로 등록됩니다.',
        rows: [
          { title: '먼저 검색', body: '양식을 열기 전에 이름, 별칭과 식별자로 검색합니다. 이미 있으면 별칭이나 새 버전을 추가하고 항목을 새로 만들지 않습니다.' },
          { title: '항목 설명', body: '새 API, 기존 API의 새 버전 또는 특정 버전의 일부인지 제출자가 설명합니다. 모델은 제안할 수 있지만 사람을 대신해 결정할 수 없습니다.' },
          { title: '증거 첨부', body: '각 제안에 수정할 위치와 근거가 된 출처 및 방법을 명시합니다.' },
          { title: '사람이 검토', body: '검토자는 증거를 확인한 뒤 결정합니다. 제안 후 항목이 바뀌면 다시 검토하도록 돌려보냅니다.' },
          { title: '미검증으로 표시', body: '새 항목은 먼저 공개할 수 있지만 미검증으로 표시하고 각 항목의 출처를 보여 줍니다. 검증 전에는 신뢰할 수 있는 내보내기와 추천에 포함하지 않습니다.' },
          { title: '영수증 기록', body: '적용 후 영수증을 남깁니다. 변경을 취소할 때는 기록을 수정하지 않고 정정 절차를 거칩니다.' },
        ],
      },
      proposal: {
        eyebrow: '제안 형식',
        headline: 'AI 에이전트도 같은 형식으로 제안합니다.',
        lead: '공식 에이전트와 외부 에이전트는 같은 형식으로 제안합니다. 에이전트가 자신의 결과를 보증할 수 없으며 다시 가져온 데이터도 마찬가지입니다.',
        rows: [
          { title: '대상과 버전', body: '수정할 정확한 항목과 에이전트가 읽은 수정 판본.' },
          { title: '변경 사항', body: '추가, 수정 또는 삭제할 내용.' },
          { title: '증거', body: '변경을 뒷받침하는 출처와 위치.' },
          { title: '방법', body: '어떻게 결과를 얻었고 어떤 입력을 사용했는지.' },
          { title: '신뢰도', body: '에이전트가 주장하는 확신 수준. 에이전트의 의견이며 REZICS가 보증하지 않습니다.' },
          { title: '공개', body: '자동화된 제안임을 밝히고 담당자를 표시합니다.' },
        ],
      },
      paid: {
        lead: '비용을 지불해도 결정은 바뀌지 않습니다.',
        rest: '후원이나 구독으로 검토 결과를 바꿀 수 없습니다.',
      },
      provider: {
        eyebrow: '제공자',
        headline: '제공자도 같은 절차를 따릅니다.',
        lead: 'API 제공자는 네임스페이스의 소유권을 증명하고 제공자가 제시한 사실을 표시할 수 있습니다. 제공자의 주장도 하나의 주장으로 기록하며 커뮤니티의 측정 결과와 토론도 항목에 남습니다.',
        more: '제공자가 자신의 주장을 철회하면 해당 근거만 삭제합니다. 가져온 사실에는 출처와 라이선스를 첨부합니다. 확인되고 보호된 항목을 이후 가져오기가 조용히 덮어쓰지 않습니다.',
      },
      closing: '추가와 수정은 모두 사람이 검토합니다.',
    },
  },
} satisfies MiniSite<ApisStrings>;
