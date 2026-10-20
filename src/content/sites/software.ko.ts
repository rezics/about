// The software site (軟體): every visible string of /software/ and its six inner pages, in the
// v3 language (.temp/sites/V3-SPEC.md). Design record and sources: src/sites/software/SITE.md and
// facts.md. All sample data (the program 範例編輯器, 甲／乙／丙系統, version numbers, dates, sizes,
// the hash, package names) is fictional and is labelled 示意 wherever it appears.
import type { Item, KindId, MiniSite } from '../schema';

export type StateId = 'compatible' | 'incompatible' | 'unknown' | 'stale' | 'unavailable';
/** One compatibility observation: a state, and the date of the adopted measurement where there is one. */
export type Cell = readonly [StateId, string?];
/** A section's opening: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}
/** A still-life picture in public/images/sites/software/ (`<name>-<width>.avif|webp`). */
export interface Picture {
  name: string;
  alt: string;
}

export interface SoftwareStrings {
  common: { nextPage: string; nextSite: string; sample: string; go: string };
  pictures: Record<'hero' | 'versions' | 'holes' | 'slit' | 'tabs', Picture>;
  states: Record<StateId, string>;
  channels: { stable: string; beta: string };
  sample: {
    program: string;
    /** Newest first. */
    releases: { version: string; channel: 'stable' | 'beta'; date: string; platforms: string; note?: string }[];
    environments: { name: string; short: string }[];
    /** Rows follow `environments`, columns follow `releases`. */
    cells: Cell[][];
  };
  landing: {
    hero: { label: string; headline: string; lede: string };
    pages: Head & { lines: Record<string, string> };
    compatibility: Head & { link: string };
    statement: { text: string; sub: string };
    program: Head & { items: Item[] };
    neighbours: Head & { link: string; tiles: { kind: KindId; line: string }[] };
    closing: string;
  };
  catalogue: {
    hero: { headline: string; lede: string };
    releases: Head;
    list: { caption: string; columns: [string, string, string, string]; points: Item[] };
    statement: { text: string; sub: string };
    identity: Head & { rows: Item[] };
    browse: Head & { points: Item[] };
    closing: string;
  };
  compatibility: {
    hero: { headline: string; lede: string };
    anatomy: Head & { rows: Item[] };
    states: Head & { body: Record<StateId, string>; caption: string; corner: string };
    conditions: Head & { example: string; candidates: Item[]; result: string };
    statement: { text: string; sub: string; note: string };
    closing: string;
  };
  reviews: {
    hero: { headline: string; lede: string };
    rules: Head & { facts: Item[] };
    anatomy: Head & { points: Item[] };
    statement: { text: string; sub: string };
    picks: Head & { rows: Item[] };
    closing: string;
  };
  updates: {
    hero: { headline: string; lede: string };
    levels: Head & { rows: Item[] };
    targets: Head & { rows: Item[] };
    changelog: Head & { more: string; caption: string; start: string };
    statement: { text: string; sub: string };
    closing: string;
  };
  publishing: {
    hero: { headline: string; lede: string };
    record: Head & { caption: string; fields: Item[] };
    steps: Head & { steps: Item[]; note: string };
    licence: Head & { points: Item[] };
    lock: Head & { points: Item[] };
    statement: { text: string; sub: string; note: string };
    maintenance: Head & { rows: Item[] };
    closing: string;
  };
  connections: {
    hero: { headline: string; lede: string };
    relations: Head & { rows: Item[] };
    kinds: Head & { rows: { kind: KindId; line: string; body: string }[] };
    people: Head;
    statement: { text: string; sub: string };
    closing: string;
  };
}

const site = {
  id: 'software',
  base: '/software/',
  name: '소프트웨어',
  theme: { kind: 'software' },
  next: 'visual-novels',
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: '소프트웨어: 버전, 플랫폼, 호환성 테스트',
        description:
          'REZICS에서 소프트웨어마다 하나의 ID를 사용하고 각 플랫폼의 모든 릴리스를 기록합니다. 호환성은 방법과 날짜가 포함된 테스트 기록이며 라이선스, 다운로드 방법, 평점, 업데이트 알림도 같은 ID에 연결됩니다.',
      },
    },
    {
      slug: 'catalogue',
      label: '목록과 버전',
      meta: {
        title: '목록과 버전: 프로그램마다 하나의 ID',
        description:
          'REZICS 소프트웨어 목록에서 프로그램마다 ID 하나를 사용합니다. 플랫폼별 릴리스를 보관하고 생태계 규칙에 따라 버전을 정렬합니다. 포크는 별도 항목으로 만들고 원래 프로젝트와 연결하며 필터 결과에는 정확한 개수를 표시합니다.',
      },
    },
    {
      slug: 'compatibility',
      label: '호환성',
      meta: {
        title: '호환성: 날짜가 표시된 테스트',
        description:
          'REZICS 소프트웨어 호환성은 테스트 기록으로 관리하며 지표, 방법, 조건, 날짜와 적용 버전 및 파일을 명시합니다. 호환, 비호환, 미상, 오래된 정보, 사용할 수 없음을 구분하고 테스트가 없으면 미상으로 표시합니다.',
      },
    },
    {
      slug: 'reviews',
      label: '평점',
      meta: {
        title: '평점: 특정 릴리스에 연결된 점수',
        description:
          'REZICS 소프트웨어 평점은 특정 릴리스에만 매길 수 있으며 평가자 수, 분포, 평가가 이루어진 커뮤니티를 표시합니다. 버전 간 합산 점수는 별도로 계산해 방식을 밝히고 커뮤니티 추천은 결정이 내려진 토론에 연결합니다.',
      },
    },
    {
      slug: 'updates',
      label: '업데이트 팔로우',
      meta: {
        title: '업데이트 팔로우: 릴리스와 변경 기록',
        description:
          'REZICS에서 프로그램, 개발자, 필터 조건을 팔로우하면 새 릴리스와 변경 기록을 원하는 알림 수준에 따라 받습니다. 사이트 받은 편지함만 사용하거나 푸시 알림 또는 이메일 요약을 받을 수 있습니다.',
      },
    },
    {
      slug: 'publishing',
      label: '게시와 라이선스',
      meta: {
        title: '게시와 라이선스: 소프트웨어 게시자용',
        description:
          '개발자는 REZICS에서 프로그램 페이지를 관리하고 플랫폼별 릴리스를 게시합니다. 파일 크기, 해시, 변경 기록, 스크린샷, 정확한 라이선스 조항과 버전, 다운로드 방법을 표시합니다.',
      },
    },
    {
      slug: 'connections',
      label: '연결',
      meta: {
        title: '연결: 의존하거나 확장하는 항목',
        description:
          'REZICS에서 프로그램을 의존하는 게임 모드, AI 에이전트가 조작할 수 있게 하는 MCP 서버, 필요한 스킬, 관련 API와 연결합니다. 각 연결에는 방향과 출처가 있으며 양쪽 항목에서 모두 확인할 수 있습니다.',
      },
    },
  ],
  strings: {
    common: { nextPage: '다음 페이지', nextSite: '다음 사이트', sample: '예시 데이터입니다. 프로그램, 시스템, 버전 번호, 날짜는 모두 가상입니다.', go: '이동' },
    pictures: {
      hero: { name: 'hero', alt: '짙은 청록색 종이를 한 장씩 어긋나게 포개 부채처럼 펼쳤고 맨 위에는 연한 파란 종이가 있습니다.' },
      versions: { name: 'versions', alt: '짙은 청록색 종이 봉투 세 개가 차례로 놓여 있고 각각 회청색 종이 띠로 묶여 있습니다.' },
      holes: { name: 'holes', alt: '짙은 청록색 종이에 가지런히 둥근 구멍을 뚫었으며 몇 군데는 뚫지 않았습니다.' },
      slit: { name: 'slit', alt: '짙은 청록색 종이 한 장이 회청색 종이의 틈을 통과합니다.' },
      tabs: { name: 'tabs', alt: '짙은 청록색 종이 조각이 종이 탭 두 개로 겨자색 종이와 연한 초록색 종이를 각각 연결합니다.' },
    },
    states: { compatible: '호환', incompatible: '호환되지 않음', unknown: '미상', stale: '오래된 정보', unavailable: '사용할 수 없음' },
    channels: { stable: '안정 버전', beta: '베타 버전' },
    sample: {
      program: '예시 편집기',
      releases: [
        { version: '4.1', channel: 'beta', date: '2026-10-06', platforms: 'A · B · C', note: '분할 창 추가, 대용량 파일을 여는 속도 개선.' },
        { version: '4.0', channel: 'stable', date: '2026-08-25', platforms: 'A · B · C', note: '작업 공간 추가, 이전 플러그인 형식 제거.' },
        { version: '3.2', channel: 'stable', date: '2026-03-17', platforms: 'A · B · C', note: '모바일 버전 추가, 검색 속도 개선.' },
        { version: '3.1', channel: 'stable', date: '2025-11-04', platforms: 'A · B' },
        { version: '3.0', channel: 'stable', date: '2025-06-10', platforms: 'A · B' },
      ],
      environments: [
        { name: '시스템 A · 64비트', short: 'A 64비트' },
        { name: '시스템 A · 32비트', short: 'A 32비트' },
        { name: '시스템 B · 64비트', short: 'B 64비트' },
        { name: '시스템 C · 모바일', short: 'C 모바일' },
      ],
      // Columns follow `releases` (4.1, 4.0, 3.2, 3.1, 3.0).
      cells: [
        [['unknown'], ['compatible', '2026-08-29'], ['compatible', '2026-03-20'], ['compatible', '2025-11-09'], ['compatible', '2025-06-14']],
        [['unavailable'], ['unavailable'], ['incompatible', '2026-03-22'], ['compatible', '2025-11-10'], ['stale', '2025-06-15']],
        [['compatible', '2026-10-09'], ['unknown'], ['compatible', '2026-03-20'], ['compatible', '2025-11-12'], ['unknown']],
        [['unknown'], ['compatible', '2026-09-02'], ['stale', '2026-03-25'], ['unavailable'], ['unavailable']],
      ],
    },

    landing: {
      hero: {
        label: '소프트웨어',
        headline: '버전마다 플랫폼 호환성 테스트와 날짜를 표시합니다.',
        lede: 'REZICS는 프로그램마다 하나의 ID를 부여하고 플랫폼별 릴리스를 기록합니다. 테스트하지 않은 환경은 미상으로 표시합니다. 라이선스, 다운로드 방법, 평점, 토론도 하나의 ID에 연결됩니다.',
      },
      pages: {
        label: '여섯 페이지',
        headline: '프로그램을 찾고 직접 게시하기까지',
        lines: {
          catalogue: '하나의 ID로 각 릴리스를 따로 기록',
          compatibility: '실행 가능 여부를 날짜가 있는 테스트로 확인',
          reviews: '점수 옆에 버전 표시',
          updates: '프로그램, 개발자, 필터 조건 팔로우',
          publishing: '개발자를 위한 릴리스, 라이선스, 다운로드 안내',
          connections: '모드, MCP 서버, 스킬, API',
        },
      },
      compatibility: {
        label: '호환성',
        headline: '실행 가능 여부는 테스트로 확인합니다.',
        lead: '개발자가 표시한 지원 플랫폼은 하나의 안내입니다. 테스트는 누군가 특정 환경에서 특정 날짜에 확인한 결과이며 방법과 조건을 기록합니다. REZICS는 테스트 기록을 바탕으로 실행 가능 여부를 답합니다.',
        link: '호환성 기록 보기',
      },
      statement: {
        text: '테스트하지 않은 항목은 미상으로 표시합니다.',
        sub: '호환 또는 비호환으로 추측하지 않습니다.',
      },
      program: {
        label: '프로그램 하나',
        headline: '하나의 ID로 연결되는 정보',
        items: [
          { title: '릴리스', body: '플랫폼별 릴리스를 각각 보관하고 안정 버전과 베타 버전을 구분합니다.' },
          { title: '호환성', body: '운영 체제, 시스템 버전, 프로세서 아키텍처를 같은 릴리스 기준으로 확인합니다.' },
          { title: '라이선스', body: '라이선스 조항의 버전과 선언한 사람, 시점을 기록합니다.' },
          { title: '다운로드 방법', body: '공식 다운로드, 스토어, 패키지 저장소를 함께 표시합니다. 외부로 연결하는 경우 외부 링크라고 밝힙니다.' },
          { title: '평점', body: '특정 버전만 평가할 수 있으며 점수 옆에 평가자 수와 분포를 표시합니다.' },
          { title: '팔로우', body: '프로그램이나 유지 관리자를 팔로우하면 새 버전과 공지를 받을 수 있습니다.' },
        ],
      },
      neighbours: {
        label: '연결',
        headline: '프로그램은 다른 항목과 연결됩니다.',
        lead: '게임 모드는 프로그램에 의존하고 MCP 서버는 AI 에이전트가 프로그램을 조작하게 합니다. 스킬도 실행에 프로그램이 필요할 수 있습니다. 각 연결에는 방향과 출처가 있으며 양쪽 항목에서 확인할 수 있습니다.',
        link: '모든 연결 보기',
        tiles: [
          { kind: 'games', line: '모드와 로더가 사용하는 프로그램' },
          { kind: 'mcp', line: '에이전트가 프로그램을 조작하는 서버' },
          { kind: 'skills', line: '프로그램에 의존하는 스킬' },
          { kind: 'apis', line: '프로그램이 제공하거나 호출하는 API' },
        ],
      },
      closing: '프로그램 하나, ID 하나. 모든 버전을 확인할 수 있습니다.',
    },

    catalogue: {
      hero: {
        headline: '버전 번호는 바뀌어도 ID는 그대로입니다.',
        lede: '프로그램 이름을 바꾸거나 다른 패키지 저장소로 옮기고 새 플랫폼에 출시해도 REZICS에서는 같은 항목입니다. 각 릴리스를 별도로 기록해 당시 제공된 내용을 남깁니다.',
      },
      releases: {
        label: '릴리스',
        headline: '릴리스마다 따로 보관합니다.',
        lead: '릴리스 하나에 버전 번호, 배포 채널, 날짜, 플랫폼, 당시 포함된 파일을 기록합니다. 잘못된 정보는 근거를 첨부해 수정할 수 있고 이후에 나온 패치는 새 항목으로 기록합니다.',
      },
      list: {
        caption: '예시 편집기 릴리스, 최신순(예시)',
        columns: ['버전', '배포 채널', '날짜', '플랫폼'],
        points: [
          { title: '배포 채널', body: '안정 버전과 베타 버전을 구분합니다. 가장 최신 버전이 항상 적합한 것은 아닙니다.' },
          { title: '버전 순서', body: '프로그램이 속한 생태계 규칙에 따라 순서를 정하며 버전 번호를 일반 텍스트처럼 비교하지 않습니다.' },
          { title: '플랫폼', body: '같은 버전이라도 플랫폼별 릴리스를 따로 기록합니다.' },
        ],
      },
      statement: {
        text: 'REZICS는 다운로드 횟수를 계산하지 않습니다.',
        sub: '순위에도 사용하지 않으며 목록마다 정렬 방식을 표시합니다.',
      },
      identity: {
        label: '이름과 ID',
        headline: '이름이 같다고 같은 항목은 아닙니다.',
        rows: [
          { title: '다국어 이름', body: '중국어 이름, 원래 이름, 자주 쓰는 약칭을 모두 기록해 어떤 이름으로 검색해도 찾을 수 있습니다.' },
          {
            title: '식별자',
            body: '패키지 저장소의 이름, URL, 번호를 출처와 함께 기록합니다. 두 저장소에서 같은 문자열을 써도 같은 프로그램으로 간주하지 않습니다.',
          },
          { title: '포크', body: '포크한 프로젝트는 별도 항목으로 만들고 자체 유지 관리자와 릴리스를 기록한 뒤 “포크한 프로젝트” 관계로 원본에 연결합니다.' },
          { title: '병합과 분리', body: '중복 항목은 근거를 첨부해 병합하며 이전 URL도 계속 유효합니다. 잘못 병합했으면 철회할 수 있고 서재와 평점은 중복 계산하지 않습니다.' },
        ],
      },
      browse: {
        label: '필터',
        headline: '조건은 하나의 릴리스에서 충족해야 합니다.',
        lead: '“시스템 B 64비트에서 실행 가능한 오픈 소스 라이선스의 안정 버전”을 찾을 때 REZICS는 하나의 릴리스가 모든 조건을 충족하는 프로그램만 표시합니다. 조건을 두 릴리스에 나눠서 충족하는 항목은 표시하지 않습니다.',
        points: [
          { title: '개수', body: '결과에 개수를 표시합니다. 아직 모두 세지 못한 경우 “최소”라고 표시합니다.' },
          { title: '마지막까지 보기', body: '목록의 마지막 항목까지 계속 넘겨 볼 수 있습니다.' },
          { title: '검색 조건 저장', body: '자주 쓰는 조건을 저장하고 나중에 바로 팔로우할 수 있습니다.' },
        ],
      },
      closing: '버전 번호가 바뀌어도 기록을 찾아볼 수 있습니다.',
    },

    compatibility: {
      hero: {
        headline: '호환성은 테스트 기록으로 확인합니다.',
        lede: '개발자가 표시한 지원 플랫폼은 안내이며 테스트는 누군가 특정 환경에서 특정 날짜에 확인한 결과입니다. REZICS는 둘을 구분해 기록하고 테스트 결과로만 호환성을 답합니다.',
      },
      anatomy: {
        label: '테스트 기록 하나',
        headline: '테스트 기록에 담기는 정보',
        lead: '아래 정보를 기록하면 재시험 방법과 결과의 적용 범위를 알 수 있습니다.',
        rows: [
          { title: '지표', body: '무엇을 테스트했는지 표시합니다. 실행 여부, 작업 완료 여부, 수치 등을 기록하고 수치에는 단위를 함께 적습니다.' },
          { title: '방법', body: '다른 사람이 같은 방법으로 다시 테스트할 수 있도록 절차를 분명히 적습니다.' },
          { title: '조건', body: '운영 체제 버전, 프로세서 아키텍처, 관련 설정을 테스트 기록 하나에 연결합니다. 조건이 다르면 별도 기록입니다.' },
          { title: '파일', body: '적용 버전과 파일을 표시하고 검증한 해시를 첨부합니다. 해시는 해당 바이트만 식별하며 다른 파일의 근거가 되지 않습니다.' },
          { title: '날짜와 제출자', body: '테스트마다 날짜와 제출자를 표시합니다. 사람과 AI 에이전트 모두 제출할 수 있으며 자동화 계정은 자동화 계정이라고 밝힙니다.' },
          { title: '채택', body: '테스트 결과는 제안으로 제출하며 채택되어야 인정됩니다. 이의가 있으면 별도로 표시하고 기존 판단도 보존합니다.' },
        ],
      },
      states: {
        label: '다섯 가지 상태',
        headline: '다섯 가지 상태를 구분합니다.',
        lead: '호환과 비호환 외에도 자주 혼동되는 세 가지 상황이 있습니다. REZICS는 이를 구분해 표시합니다.',
        body: {
          compatible: '채택된 테스트 중 하나 이상이 이 환경에서 성공적으로 완료되었으며 날짜가 표시됩니다.',
          incompatible: '채택된 테스트에서 실행할 수 없음을 확인했으며 근거와 날짜를 첨부합니다.',
          unknown: '테스트가 없습니다. 라벨, 분류, 홍보 문구를 근거로 추론하지 않습니다.',
          stale: '테스트 유효 기간이 지났습니다. 결과는 볼 수 있지만 현재 상태로 취급하지 않습니다.',
          unavailable: '이 환경에서 이용할 수 있는 릴리스가 없으므로 호환 여부를 판단할 수 없습니다.',
        },
        caption: '예시 편집기의 버전별 네 가지 환경 호환성(예시)',
        corner: '환경',
      },
      conditions: {
        label: '조건',
        headline: '조건은 하나의 테스트 기록에서 충족해야 합니다.',
        lead: '호환성을 필터링할 때 모든 조건은 같은 릴리스의 같은 테스트 기록에서 충족해야 합니다. 서로 다른 버전의 결과를 합치면 사용할 수 있어 보이지만 실제로는 설치 후 작동하지 않을 수 있습니다.',
        example: '예를 들어 “시스템 B · 64비트, 안정 버전, 호환, 4.0 이상”이 조건이라면 예시 편집기에는 후보 릴리스 두 개가 있습니다(예시).',
        candidates: [
          { title: '4.1 베타 버전', body: '호환됩니다. 실행 테스트를 통과했지만 안정 버전은 아닙니다.' },
          { title: '4.0 안정 버전', body: '미상입니다. 안정 버전이지만 아직 테스트 기록이 없습니다.' },
        ],
        result: '조건이 릴리스 두 개에 나뉘어 있으므로 일치하는 결과가 없습니다. REZICS는 조건을 임의로 완화하지 않고 결과가 없다고 알려 줍니다.',
      },
      statement: {
        text: '모든 표시에는 근거와 범위가 있습니다.',
        sub: '외부 링크만으로는 아무것도 입증할 수 없습니다.',
        note: '검사 결과도 마찬가지입니다. 파일 하나와 검사 한 번만 설명합니다.',
      },
      closing: '실행 가능 여부는 테스트 결과로 확인하세요.',
    },

    reviews: {
      hero: {
        headline: '버전을 밝히고 평점을 매깁니다.',
        lede: '같은 프로그램도 업데이트 전후에 완전히 달라질 수 있습니다. 프로그램 전체나 특정 릴리스에 평점을 매길 수 있으며 특정 버전의 점수는 해당 버전에 계속 연결됩니다.',
      },
      rules: {
        label: '평점 기준',
        headline: '평가자가 충분해야 평균을 표시합니다.',
        facts: [
          { title: '5', body: '기본적으로 평점 5개가 있어야 평균을 표시합니다. 그 전에는 평가자 수와 분포만 표시하고 필요한 평점 수를 알려 줍니다.' },
          { title: '50', body: '순위에는 가중 점수를 사용하며 기본적으로 평점이 50개 이상이어야 포함됩니다. 가중치에 사용한 평균과 가중치를 공개합니다.' },
          { title: '1', body: '한 사람은 같은 대상과 질문에 현재 유효한 평점 하나만 남길 수 있습니다. 점수를 바꾸면 해당 평점을 업데이트합니다.' },
        ],
      },
      anatomy: {
        label: '질문과 대상',
        headline: '모든 점수에는 질문이 있습니다.',
        lead: '평점 질문, 척도, 대상을 함께 정의합니다. 다른 질문의 점수를 합산하지 않으며 특정 릴리스의 점수를 프로그램 전체 점수에 자동으로 포함하지 않습니다.',
        points: [
          { title: '나란히 표시', body: '사이트 전체 평점과 각 커뮤니티의 점수를 합치지 않고 나란히 표시합니다.' },
          { title: '버전 통합 점수', body: '여러 버전의 통합 점수는 별도 지표로 제공하고 계산 방식과 포함한 릴리스 수를 표시합니다.' },
          { title: '조작하지 않음', body: 'REZICS는 리뷰, 투표, 참여를 조작하지 않으며 자동화 계정은 모두 표시합니다.' },
        ],
      },
      statement: {
        text: '아직 평점이 없으면 아무것도 표시하지 않습니다.',
        sub: '0점이나 빈 막대 그래프를 보여 주지 않습니다.',
      },
      picks: {
        label: '추천과 대체',
        headline: '추천은 담당자가, 대체에는 이유가 있습니다.',
        rows: [
          { title: '커뮤니티 추천', body: '커뮤니티가 선택한 프로그램마다 해당 결정을 내린 토론을 연결합니다.' },
          { title: '대체 가능', body: '“특정 작업에 대신 사용할 수 있음”은 이유와 제안자를 표시하는 연결이며 이의를 제기할 수도 있습니다.' },
          { title: '목록', body: '목록을 만들 때 대상 환경과 호환성을 확인했는지 표시합니다.' },
          { title: '추천', body: '각 추천에 팔로우한 조건이나 커뮤니티 결정 같은 이유를 표시합니다. 원하지 않으면 모두 끌 수 있습니다.' },
          { title: '문제 알리기', body: '특정 버전에 문제가 있으면 해당 버전의 토론에서 이야기합니다. 나중에 읽는 사람도 어느 버전인지 알 수 있습니다.' },
        ],
      },
      closing: '평점 옆에 버전과 평가자 수를 표시합니다.',
    },

    updates: {
      hero: {
        headline: '원하는 알림 수준으로 새 릴리스를 받으세요.',
        lede: '프로그램을 팔로우하면 새 릴리스와 변경 기록을 받을 수 있습니다. 모든 알림, 중요한 알림만, 알림 끄기 중에서 선택하세요.',
      },
      levels: {
        label: '알림 수준',
        headline: '세 가지 설정을 팔로우마다 지정합니다.',
        lead: '언제든 변경할 수 있습니다. 특정 릴리스가 중요하면 해당 릴리스에만 알림을 따로 설정할 수도 있습니다.',
        rows: [
          { title: '전체', body: '모든 릴리스, 공지, 게시물에 알림을 보냅니다.' },
          { title: '주요 알림', body: '새 릴리스, 공지, 커뮤니티 결정을 알립니다.' },
          { title: '끄기', body: '직접 관련된 답글과 멘션만 알립니다.' },
          { title: '알림 받을 곳', body: '사이트 받은 편지함, 푸시 알림, 이메일 요약 중에서 선택합니다. 이메일은 한 번 눌러 구독 취소할 수 있습니다.' },
        ],
      },
      targets: {
        label: '팔로우 대상',
        headline: '프로그램 외에도 팔로우할 수 있습니다.',
        rows: [
          { title: '프로그램', body: '새 릴리스와 변경 기록을 받습니다.' },
          { title: '개발자 또는 조직', body: '새 항목과 공지를 받습니다.' },
          { title: '필터 조건', body: '“시스템 B에서 실행되는 오픈 소스 텍스트 편집기”를 검색 조건으로 저장하면 일치하는 새 프로그램이 홈 페이지 탭에 표시되고 요약 알림도 받을 수 있습니다.' },
          { title: '커뮤니티', body: '새 추천 같은 커뮤니티 공지와 결정을 받습니다.' },
        ],
      },
      changelog: {
        label: '변경 기록',
        headline: '변경 기록은 릴리스마다 확인할 수 있습니다.',
        lead: '변경 기록을 각 릴리스에 연결합니다. 3.2에서 4.1 베타 버전으로 업데이트할 때 그 사이 버전의 변경 내용을 순서대로 읽을 수 있습니다.',
        more: '홈 페이지의 “계속하기”에는 호환되는 패키지 업데이트와 읽지 않은 다음 챕터가 함께 표시됩니다. 패키지 업데이트와 이전 버전으로 되돌리기는 정확한 파일에 고정되며 되돌리면 당시 파일을 받습니다.',
        caption: '예시 편집기의 변경 기록, 최신순(예시)',
        start: '여기서부터 읽기',
      },
      statement: {
        text: '스크립트와 AI 에이전트는',
        sub: '같은 업데이트 이벤트를 읽고 중단된 곳에서 이어서 읽습니다.',
      },
      closing: '받을 알림과 수준을 직접 정합니다.',
    },

    publishing: {
      hero: {
        headline: '릴리스를 검색 가능한 기록으로 남깁니다.',
        lede: '개발자는 REZICS에서 프로그램을 관리하고 각 릴리스의 버전 번호, 플랫폼, 파일, 변경 기록, 라이선스 조항, 다운로드 방법을 등록합니다. 팔로워, 필터를 사용하는 사람, AI 에이전트가 모두 같은 기록을 읽습니다.',
      },
      record: {
        label: '릴리스 기록 하나',
        headline: '릴리스 기록에 포함되는 필드',
        lead: '필수 필드를 모두 입력해야 릴리스를 제출할 수 있습니다. 제출 후에는 해당 기록을 보관합니다.',
        caption: '예시 편집기 4.0 릴리스 기록(예시)',
        fields: [
          { title: '버전 번호', body: '4.0' },
          { title: '배포 채널', body: '안정 버전' },
          { title: '날짜', body: '2026-08-25' },
          { title: '플랫폼', body: '시스템 A · 64비트, 시스템 B · 64비트, 시스템 C · 모바일' },
          { title: '파일 크기', body: '48.2 MB' },
          { title: '해시(일부)', body: 'sha256 9f2c41d7e41a' },
          { title: '라이선스', body: '가상 오픈 소스 라이선스 2.0' },
          { title: '다운로드 방법', body: '개발자 웹사이트(외부 링크)' },
          { title: '변경 기록', body: '작업 공간을 추가하고 이전 플러그인 형식을 제거했습니다.' },
        ],
      },
      steps: {
        label: '게시 과정',
        headline: '릴리스 게시 다섯 단계',
        steps: [
          { title: '유지 관리 권한 확인', body: '프로젝트 관리 권한을 확인한 뒤 페이지와 릴리스를 관리합니다.' },
          { title: '릴리스 정보 입력', body: '버전 번호, 배포 채널, 날짜, 플랫폼별 파일을 입력합니다.' },
          { title: '라이선스 선언', body: '라이선스 조항과 버전을 선택합니다. 선언한 사람, 시점, 적용 범위를 기록합니다.' },
          {
            title: '다운로드 방법 명시',
            body: '파일 제공자와 다운로드 위치 또는 설치할 외부 페이지를 명확히 표시합니다. REZICS에서 외부로 연결할 뿐이라면 REZICS가 설치한다고 말하지 않습니다.',
          },
          { title: '게시', body: '릴리스를 보관 기록으로 만들고 팔로워는 각자 선택한 알림 수준에 따라 소식을 받습니다.' },
        ],
        note: '이 단계를 API와 MCP로 처리해 릴리스 게시 과정을 자동화할 수 있습니다.',
      },
      licence: {
        label: '라이선스',
        headline: '라이선스 조항과 버전을 명시합니다.',
        lead: '라이선스 선언마다 정확한 조항과 버전, 선언자, 시점, 적용 범위, 출처를 기록합니다. 외부에서 가져온 라이선스 문구는 출처를 표시하며 사용자의 선언으로 취급하지 않습니다.',
        points: [
          { title: '법적 인증 아님', body: '선언은 법적 인증이 아니며 누구의 편집 권한도 바꾸지 않습니다.' },
          { title: '모르면 미상으로 표시', body: '누가 언제 라이선스를 부여했는지 모르면 그대로 미상으로 기록합니다.' },
          { title: '필터로 사용 가능', body: '라이선스를 필터 조건으로 사용해 필요한 조항에 맞는 프로그램을 찾을 수 있습니다.' },
        ],
      },
      lock: {
        label: '의존성',
        headline: '생태계별 규칙에 따라 의존성을 관리합니다.',
        lead: 'REZICS는 패키지 의존성을 분석할 때 각 생태계의 ID, 버전 순서, 의존성 의미를 그대로 유지한 뒤 정확한 파일에 고정합니다.',
        points: [
          { title: '필수와 권장 구분', body: '필수 의존성과 충돌, 권장 조합과 알림을 따로 기록합니다.' },
          { title: '삭제된 버전', body: '삭제된 버전은 해당 생태계 규칙에 따라 처리하며 기존 고정 설정은 당시 파일을 유지합니다.' },
          { title: '원인별로 알림', body: '출처를 찾을 수 없음, 미지원 라이선스, 예산 초과를 해결할 수 없는 경우와 구분해 알립니다.' },
          { title: '찾을 수 없다고 없는 것은 아님', body: '의존성 정보를 찾을 수 없다고 의존성이 없다고 간주하지 않습니다.' },
        ],
      },
      statement: {
        text: '설치가 실행 허용을 뜻하지는 않습니다.',
        sub: '패키지의 스크립트는 명시적으로 동의해야 실행됩니다.',
        note: 'REZICS 설치 과정은 검증된 파일만 허용하며 격리된 임시 영역에 둡니다.',
      },
      maintenance: {
        label: '게시 후',
        headline: '게시 후 관리',
        rows: [
          { title: '스크린샷과 안내', body: '스크린샷, 개인정보 보호, 접근성 안내에 제공자를 표시합니다.' },
          { title: '정보 철회', body: '특정 플랫폼 정보가 오래되면 해당 기록만 철회할 수 있습니다. 프로그램, 릴리스, 토론은 삭제되지 않습니다.' },
          { title: '판매 등록', body: '판매하는 경우 가격, 지역, 유효 기간을 표로 만들고 가격 변동도 기록합니다.' },
          { title: '제작진', body: '유지 관리자와 기여자의 역할을 각각 표시합니다. 프로젝트가 바뀌어도 같은 ID를 유지합니다.' },
        ],
      },
      closing: '한 번 게시하면 모두가 같은 기록을 봅니다.',
    },

    connections: {
      hero: {
        headline: '의존하거나 확장하는 항목을 프로그램에 연결합니다.',
        lede: '게임 모드, MCP 서버, 스킬, API는 REZICS에서 각자 고유 ID를 가지며 필요한 프로그램과 방향이 있는 관계로 연결됩니다. 어느 쪽에서든 반대쪽 항목을 확인할 수 있습니다.',
      },
      relations: {
        label: '관계 이름',
        headline: '모든 관계에는 이름과 방향이 있습니다.',
        lead: '관계의 양쪽 방향에 각각 이름을 붙여 모든 언어에서 자연스럽게 표현합니다.',
        rows: [
          { title: '필요함 / 필요로 함', body: '필수 의존성입니다. 없으면 실행할 수 없습니다.' },
          { title: '권장함 / 권장됨', body: '설치하면 더 편리하지만 없어도 실행할 수 있습니다.' },
          { title: '충돌함', body: '두 항목을 함께 설치하면 문제가 생깁니다. 양쪽에서 같은 관계를 확인할 수 있습니다.' },
          { title: '포크함 / 포크됨', body: '다른 그룹이 이어받아 독립적으로 관리하는 프로젝트입니다.' },
          { title: '대체 가능 / 대체됨', body: '같은 작업을 할 수 있는 다른 프로그램이며 이유를 첨부합니다.' },
        ],
      },
      kinds: {
        label: '관련 종류',
        headline: '다른 종류와의 연결',
        rows: [
          {
            kind: 'games',
            line: '모드와 로더',
            body: '게임 모드는 게임 자체와 로더에 의존하는 경우가 많습니다. 필수와 권장 의존성을 구분합니다. 로더도 자체 릴리스와 호환성을 가진 소프트웨어입니다.',
          },
          {
            kind: 'mcp',
            line: '에이전트가 조작하는 서버',
            body: 'AI 에이전트가 프로그램을 조작하게 하는 MCP 서버는 별도 항목으로 등록합니다. 프로젝트, 패키지 릴리스, 배포된 엔드포인트, 실제 관찰된 기능은 각각 다른 기록입니다.',
          },
          { kind: 'skills', line: '의존성으로 표시', body: '스킬은 필요한 프로그램을 선언할 수 있습니다. 함께 사용하기 전에 기능과 환경을 비교합니다.' },
          { kind: 'apis', line: '제공하거나 호출', body: '프로그램이 제공하거나 호출하는 공개 API는 API Hub에서 자체 버전과 근거를 갖고 프로그램에 연결됩니다.' },
        ],
      },
      people: {
        label: '제작진',
        headline: '개발자도 하나의 ID를 사용합니다.',
        lead: '한 사람이 소프트웨어를 관리하고 소설을 쓰며 게임 리뷰를 남겨도 REZICS에서는 하나의 ID를 사용합니다. 제작진 정보를 통해 모두 연결하고 개발자를 팔로우하면 각 종류의 새 작품을 확인할 수 있습니다.',
      },
      statement: {
        text: '이름이 같다고 연결하지 않고 출처를 확인합니다.',
        sub: 'AI 에이전트는 제안만 하며 두 항목을 임의로 같은 것으로 판단하지 않습니다.',
      },
      closing: '어느 쪽에서든 연결된 항목을 찾을 수 있습니다.',
    },
  },
} satisfies MiniSite<SoftwareStrings>;

export default site;
