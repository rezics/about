// The 視覺小說 site: every visible string of /visual-novels/ and its six inner pages. Design
// record: src/sites/visual-novels/SITE.md; claims and sources: src/sites/visual-novels/facts.md.
// The six releases below are one illustrative dataset (labelled 示意資料 on the pages), shared by
// the landing's three queries and the releases table so both agree.
import type { Item, Meta, MiniSite, PartId } from '../schema';

/** The four conditions a release is qualified by. */
export type Dim = 'language' | 'platform' | 'region' | 'coverage';

export interface VnRelease {
  id: 'r1' | 'r2' | 'r3' | 'r4' | 'r5' | 'r6';
  /** Full name, as in the table. */
  name: string;
  /** Option keys of `options`, one per condition (the content, not the box). */
  values: Record<Dim, string>;
  /** Option key of the title language when it differs from the content language. */
  titleLanguage?: string;
  coverageNote?: string;
  translator: string;
  source: string;
  status: string;
}

const meta = (title: string, description: string): Meta => ({ title, description });

const releases: VnRelease[] = [
  { id: 'r1', name: '원판(1.02)', values: { language: 'ja', platform: 'pc', region: 'jp', coverage: 'full' }, translator: '없음', source: '없음', status: '공식' },
  { id: 'r2', name: '공식 중국어판', values: { language: 'zh', platform: 'console', region: 'tw', coverage: 'full' }, translator: '배급사', source: '원판', status: '공식' },
  { id: 'r3', name: '팬 중국어 패치 1판', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'partial' }, coverageNote: '공통 루트와 두 개의 루트', translator: '팬 번역 팀', source: '원판 1.02', status: '비공식' },
  { id: 'r4', name: '팬 중국어 패치 2판', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'full' }, translator: '팬 번역 팀', source: '원판 1.02', status: '비공식' },
  { id: 'r5', name: '영어 체험판', values: { language: 'en', platform: 'pc', region: 'any', coverage: 'trial' }, translator: '배급사', source: '원판', status: '공식' },
  { id: 'r6', name: '모바일판', values: { language: 'ja', platform: 'mobile', region: 'tw', coverage: 'full' }, titleLanguage: 'zh', translator: '없음', source: '없음', status: '공식' },
];

const strings = {
  /** Labels shared by several pages of this site. */
  shared: {
    demo: '예시 데이터',
    dims: { language: '언어', platform: '플랫폼', region: '지역', coverage: '수록 범위' } as Record<Dim, string>,
    columns: { name: '판본', translator: '번역자', source: '기준 판본', status: '상태' },
    options: {
      language: { zh: '번체 중국어', ja: '일본어', en: '영어' },
      platform: { pc: 'PC', console: '가정용 콘솔', mobile: '모바일' },
      region: { jp: '일본', tw: '대만', any: '제한 없음' },
      coverage: { full: '전체', partial: '일부', trial: '체험판' },
    } as Record<Dim, Record<string, string>>,
    /** Followed by the name of the condition a release fails. */
    fails: '불일치: ',
    titleOnly: '제목만 중국어',
    match: '일치',
    closed: '아직 읽지 않음',
    nextPage: '다음 페이지',
    nextSite: '다음 사이트',
    nextSiteLine: '판본과 호환 기록을 확인해 적합한 MCP 서버를 선택하세요.',
    /** The closing statement on every page of the site. */
    closing: '다음 비주얼 노벨은 플레이할 수 있는 판본부터 시작하세요.',
    releases,
  },

  images: {
    routes: '보라색 종이 띠가 따뜻한 흰 종이 위에서 갈라지고, 파란 갈래 하나가 오른쪽으로 뻗어 있다.',
    window: '보라색, 파란색과 분홍색 종이가 겹쳐 있으며 같은 구멍이 모든 층을 관통한다.',
    thread: '짙고 옅은 보라색 종이 두 장이 구멍으로 이어져 번역과 출처의 관계를 나타낸다.',
    fold: '보라색 종이 띠가 구간마다 펼쳐지고 끝은 여전히 접혀 있다.',
    sites: '보라색 종이 한 장이 서로 독립된 작은 구조 두 개로 접혀 있고 연결된 바닥을 함께 쓴다.',
  },

  landing: {
    hero: {
      headline: '중국어 지원 여부를 판본별로 확인하세요.',
      lede: 'REZICS는 비주얼 노벨의 각 판본에 언어, 플랫폼, 지역과 수록 범위를 표시합니다. 팬 번역에는 번역자와 기준 판본도 기록합니다.',
    },
    match: {
      label: '같은 판본',
      headline: '세 가지 조건이 한 판본에서 맞아야 합니다.',
      body: '비주얼 노벨을 고르는 일은 경로를 찾는 것과 비슷합니다. 조건이 하나 늘 때마다 맞지 않는 갈래를 제외합니다. 언어, 플랫폼과 수록 범위가 하나의 발행 기록에 모두 있어야 일치합니다. 한 판본에는 중국어가 있고 다른 판본은 PC용이며 세 번째 판본만 완전하다고 해도 하나의 결과로 합치지 않습니다.',
      queriesLabel: '세 가지 조건과 각각의 결과',
      /** A match: the release's name, then its translator and source. */
      answer: '{name}. 번역자: {translator}, 기준: {source}.',
      none: '조건에 맞는 판본이 없습니다. 제목만 중국어인 모바일판은 포함하지 않습니다.',
      caption: '예시 데이터: 비주얼 노벨 한 작품의 발행 판본 여섯 개.',
    },
    statement: { text: '제목을 중국어로 번역했다고', more: '게임에 중국어가 지원되는 것은 아닙니다.' },
    parts: {
      label: '구성 요소',
      headline: '공통 구성 요소가 비주얼 노벨에서 맡는 역할입니다.',
      body: '모든 콘텐츠가 같은 구성 요소를 사용합니다. 비주얼 노벨에는 이 여덟 가지를 적용합니다.',
      notes: {
        identity: '작품마다 하나의 ID를 사용합니다. 원작, 이식판, 번역본과 패치 파일은 그 ID에 연결됩니다.',
        editions: '발행 판본마다 언어, 플랫폼, 지역과 수록 범위를 기록합니다.',
        names: '일본어 원제, 중국어 번역명, 로마자 표기와 별칭을 함께 두고 각각 언어를 표시합니다.',
        credits: '각본, 원화, 음악, 성우와 번역 크레딧을 각 인물의 페이지에 연결합니다.',
        relations: '후속작, 외전, 이식판과 각색 작품을 소설, 애니메이션과 만화까지 연결합니다.',
        facets: '언어, 플랫폼, 지역과 수록 범위를 함께 필터링해 네 조건이 같은 판본에 적용되도록 합니다.',
        progress: '루트별로 읽은 위치를 기록하고 페이지에서 가릴 내용도 정합니다.',
        wiki: '캐릭터, 장소와 사건을 같은 지식 그래프로 정리하고 읽은 루트까지만 보여 줍니다.',
      } as Partial<Record<PartId, string>>,
    },
    pagesIndex: {
      label: '이 사이트',
      headline: '여섯 페이지, 한 페이지에 한 가지씩.',
      rows: {
      releases: '언어, 플랫폼, 지역과 수록 범위를 판본별로 비교합니다.',
      translations: '누가 어느 판본을 바탕으로 어디까지 번역했는지.',
      characters: '캐릭터와 성우마다 고유한 ID를 가집니다.',
      spoilers: '태그로 필터링하고 결말은 직접 읽을 때까지 가립니다.',
      wiki: '스크립트에서 작품 Wiki를 정리합니다.',
      zones: '중국어 사이트와 일본어 사이트가 ID를 공유합니다.',
      } as Record<string, string>,
    },
    neighbours: {
      label: '관련 종류',
      headline: '각색 작품과 원작을 관계로 연결합니다.',
      body: '비주얼 노벨은 소설, 애니메이션, 만화와 게임과 같은 목록을 공유합니다. 예를 들어 《어떤 마술의 금서목록》은 라이트 노벨을 원작으로 만화와 애니메이션이 있고, 각색 비주얼 노벨도 있습니다. REZICS에서 비주얼 노벨은 별도의 작품이며 “원작 각색” 관계로 원작에 연결되고 평가와 진행 상황은 따로 기록됩니다.',
      items: [
        { kind: 'books', label: '같은 이야기의 소설을 한 서재에서 모아 봅니다.' },
        { kind: 'anime', label: '각색 애니메이션을 원작에 연결하고 성우 ID를 공유합니다.' },
        { kind: 'manga', label: '만화와 원작을 서로 연결하고 진행 상황은 따로 기록합니다.' },
        { kind: 'games', label: '플랫폼, 발행과 판매 정보는 게임과 같은 방식으로 관리합니다.' },
      ] as { kind: 'books' | 'anime' | 'manga' | 'games'; label: string }[],
    },
  },

  releases: {
    hero: {
        headline: '판본마다 한 줄에 모든 조건을 표시합니다.',
        lede: '한 비주얼 노벨에 원판, 이식판, 공식 번역본, 팬 패치와 체험판이 있을 수 있습니다. REZICS는 판본마다 별도의 기록을 만들고 수록 언어, 지원 플랫폼, 발행 지역과 콘텐츠 범위를 명확히 표시합니다.',
    },
    matrix: {
      label: '필터',
      headline: '같은 판본의 정보로 조건을 확인합니다.',
      body: '번체 중국어, PC와 완전판을 선택했다면 세 조건을 모두 만족하는 판본만 표시합니다. 조건 하나라도 맞지 않으면 어떤 조건인지 해당 판본 옆에 표시합니다.',
      filtersLabel: '필터 조건',
      any: '전체',
      count: '일치: 판본 {n}개 / 전체 {total}개',
      note: '지원하지 않는 조건 조합이면 이유를 명확히 설명하고 빈 결과만 보여 주지 않습니다.',
      caption: '예시 데이터: 비주얼 노벨 한 작품의 발행 판본 여섯 개를 현재 조건으로 필터링했습니다.',
    },
    languages: {
      text: '제목 언어와',
      more: '본문 언어를 따로 기록합니다.',
      body: '발행 기록에는 포장과 제목에 쓰인 언어, 실제 게임 텍스트의 언어를 각각 기록합니다. 제목만 번역한 판본은 번체 중국어 필터에 표시되지 않습니다. 중국어와 일본어를 지원하는 판본은 두 언어를 모두 표시합니다.',
    },
    coverage: {
      label: '수록 범위',
      headline: '완전판, 일부 수록, 체험판을 발행 기록에 표시합니다.',
      body: '범위를 알 수 없는 판본은 미기록으로 표시하며 완전판으로 취급하지 않습니다.',
      items: [
        { title: '완전판', body: '이 판본에 작품 전체와 모든 루트가 수록되어 있습니다.' },
        { title: '일부 수록', body: '공통 루트와 두 개의 루트처럼 포함된 부분을 표시합니다.' },
        { title: '체험판', body: '체험판은 별도로 기록하고 체험판임을 표시합니다. 체험판 리뷰도 정식판 평가와 구분합니다.' },
      ] as Item[],
    },
    status: {
      label: '상태',
      headline: '한 판본을 여러 곳에서 판매할 수 있습니다.',
      body: '같은 판본이 여러 상점에 올라와도 하나의 발행 기록으로 관리하고 구매처를 각각 표시합니다. 발표, 예정일, 연기와 정식 발매도 따로 기록해 모두 “발매됨”으로 묶지 않습니다.',
      items: [
        { title: '공식', body: '권리자가 인정한 발행 판본.' },
        { title: '비공식', body: '권리자가 인정하지 않은 발행. 별도로 기록하며 공식 판본에 합치지 않습니다.' },
        { title: '철회', body: '출시 후 판매를 중단한 판본. 기록은 유지됩니다.' },
        { title: '취소', body: '발표했지만 출시하지 않은 판본. 취소로 표시하고 발행된 판본으로 세지 않습니다.' },
      ] as Item[],
    },
    follow: {
      label: '팔로우',
      headline: '읽을 수 있는 언어로 새 판본이 나오면 알려 드립니다.',
      body: '작품을 팔로우하면 내 언어로 새 판본이 나올 때 받은 편지함으로 알림을 보냅니다. 특정 판본의 소식만 따로 팔로우할 수도 있습니다.',
    },
    finale: '각 번역본의 출처를 끝까지 확인할 수 있습니다.',
  },

  translations: {
    hero: {
      headline: '번역본마다 어떤 판본을 바탕으로 했는지 표시합니다.',
      lede: '중국어 번역본과 일본어 원판은 같은 작품에 속하며 평가, 캐릭터와 Wiki+를 공유합니다. 번역 기록에는 번역자, 기준 판본과 번역 범위를 따로 표시합니다.',
    },
    lineage: {
      label: '출처',
      headline: '팬 번역과 공식 번역을 구분합니다.',
      body: '팬 번역은 별도로 기록하고 기준이 된 원판에 연결하며 공식으로 표시하지 않습니다. 공식 번역본도 따로 기록해 두 판본을 나란히 확인할 수 있습니다.',
    },
    record: {
      label: '번역 기록',
      headline: '번역자, 기준 판본과 범위를 각각 표시합니다.',
      items: [
        { title: '번역자', body: '번역 팀과 번역자마다 고유한 ID 페이지가 있습니다. 한 사람이 번역한 모든 작품을 페이지에서 확인할 수 있습니다.' },
        { title: '기준 판본', body: '번역은 원작처럼 막연한 표현이 아니라 원판 1.02처럼 정확한 판본을 가리킵니다. 출처가 확인되지 않으면 임의로 채우지 않고 미확인으로 표시합니다.' },
        { title: '범위', body: '공통 루트, 포함된 루트와 추가 콘텐츠 여부를 발행 기록에 표시합니다. 플레이를 시작하기 전에 중간에 일본어로 바뀌는지 알 수 있습니다.' },
        { title: '업데이트', body: '패치 새 버전이 나오면 새 발행 기록을 추가합니다. 이전 판본의 범위도 유지해 어느 판본을 플레이했는지 알 수 있습니다.' },
      ] as Item[],
    },
    reviews: {
      text: '번역은 번역대로',
      more: '따로 평가합니다.',
      body: '이야기, 번역이나 제작을 대상으로 정해 평가할 수 있습니다. 각본은 인상적이어도 번역이 어색할 수 있으므로 각각 점수를 매깁니다. 중국어를 읽는 플레이어의 평가만 볼 수도 있습니다.',
    },
    several: {
      label: '여러 번역본',
      headline: '한 작품에 여러 번역본이 있을 수 있습니다.',
      body: '여러 팀이 같은 작품을 각각 번역하고 이름을 표시해 독립적으로 관리할 수 있습니다. 기록은 서로 덮어쓰지 않습니다. 독자가 번역본을 직접 선택하고 커뮤니티가 하나를 추천할 수도 있습니다.',
    },
    teams: {
      label: '번역 팀을 위해',
      headline: '패치의 각 판본마다 페이지가 있습니다.',
      items: [
        { title: '팀 페이지', body: '팀과 구성원은 각각 고유한 ID를 가지며 번역한 작품과 발행 기록을 함께 보여 줍니다.' },
        { title: '발행 페이지', body: '패치의 각 판본에는 자체 페이지와 토론이 있고 플레이어 피드백이 한곳에 모입니다.' },
        { title: '팔로우', body: '플레이어가 팀을 팔로우하면 새 패치가 나올 때 알림을 받습니다.' },
        { title: '수정 제안', body: '발행 정보가 잘못됐다면 수정을 제안할 수 있으며 검토를 통과한 뒤 적용됩니다.' },
      ] as Item[],
    },
    finale: '캐릭터와 성우는 각각 하나의 ID를 가집니다.',
  },

  characters: {
    hero: {
      headline: '어디에서든 한 캐릭터는 같은 캐릭터입니다.',
      lede: '후속작, 이식판, 애니메이션 각색이나 번역본에서도 같은 캐릭터는 하나의 ID를 가집니다. 작품별 나이, 외모와 호칭은 적용 범위를 표시해 기록하므로 캐릭터를 여러 개로 나눌 필요가 없습니다.',
    },
    variants: {
      label: '변형',
      headline: '다른 인격, 다른 세계선.',
      body: '정말 필요한 경우에만 구분합니다. 다른 인격이나 다른 세계선의 같은 인물은 별도의 변형으로 등록해 같은 주 캐릭터에 연결합니다. 관계가 이야기에서 드러나는 위치도 기록해 아직 읽지 않은 사람에게는 보이지 않게 합니다.',
      items: [
        { title: '캐릭터 A', body: '주 캐릭터. 후속작, 이식판과 각색 작품의 A도 같은 ID를 사용합니다.' },
        { title: 'A의 다른 인격', body: '인격 변형으로 캐릭터 A에 연결됩니다.' },
        { title: '다른 세계선의 A', body: '대응하는 변형으로 캐릭터 A에 연결됩니다.' },
      ] as Item[],
      caption: '예시 데이터. 변형은 하나의 주 캐릭터에만 연결되며 주 캐릭터 자체는 변형이 아닙니다.',
    },
    names: {
      label: '이름',
      headline: '이름에도 스포일러 표시를 적용합니다.',
      body: '캐릭터에게 본명, 번역명, 별명과 숨겨진 이름이 있을 수 있습니다. 각 이름에 언어, 등장 작품과 스포일러 수준을 표시합니다. 선호 설정에 따라 자주 쓰거나 스포일러가 적은 이름을 보여 줍니다.',
      columns: { kind: '이름 유형', language: '언어', where: '등장 작품', spoiler: '스포일러' },
      rows: [
        { kind: '본명', language: '일본어', where: '본편과 후속작', spoiler: '스포일러 없음' },
        { kind: '중국어 번역명', language: '번체 중국어', where: '공식 중국어판', spoiler: '스포일러 없음' },
        { kind: '별명', language: '일본어', where: '공통 루트부터', spoiler: '스포일러 없음' },
      ],
      hidden: { kind: '진짜 이름', spoiler: '루트 2 후반부를 읽은 뒤 표시' },
      caption: '예시 데이터. 각 작품에서 사용된 이름은 등장 기록과 함께 보관됩니다.',
    },
    credits: {
      label: '제작진',
      headline: '성우 크레딧을 캐릭터에 연결합니다.',
      body: [
        '각본, 원화, 음악, 성우와 번역 등 역할에 따라 제작진을 구분합니다. 성우 크레딧은 성우와 캐릭터를 함께 가리키며 적용되는 판본도 표시할 수 있습니다. 예를 들어 이식판에서 성우가 바뀐 경우입니다.',
        '비주얼 노벨 각본과 라이트 노벨을 모두 쓴 작가는 모든 작품을 같은 사람의 페이지에서 볼 수 있습니다.',
      ],
    },
    query: {
      label: '검색',
      headline: '조건은 같은 캐릭터에 적용되어야 합니다.',
      body: '“빨간 머리 여주인공”을 검색하면 빨간 머리이면서 여주인공인 캐릭터가 등장하는 작품을 찾습니다. 빨간 머리 조연과 검은 머리 여주인공이 따로 있는 작품은 결과에 포함하지 않습니다.',
      items: [
        { title: '작품 1: 일치', body: '여주인공이 빨간 머리입니다. 두 조건이 같은 캐릭터에 적용됩니다.' },
        { title: '작품 2: 불일치', body: '빨간 머리는 조연이고 여주인공은 검은 머리입니다. 두 조건이 서로 다른 캐릭터에 해당하므로 일치하지 않습니다.' },
      ] as Item[],
      caption: '예시 데이터. 주인공, 주요 캐릭터와 조연은 서로 다른 구분입니다. 악역은 주요 캐릭터일 수 있지만 주인공은 아닙니다.',
    },
    finale: '태그는 고르고 줄거리는 직접 읽으세요.',
  },

  spoilers: {
    hero: {
      headline: '아직 읽지 않은 루트는 먼저 보여 주지 않습니다.',
      lede: '비주얼 노벨의 중요한 내용은 후반 루트에 나오는 경우가 많습니다. REZICS는 읽은 위치에 따라 태그, 캐릭터 정보와 Wiki+ 페이지에 표시할 범위를 정합니다.',
    },
    fold: {
      label: '접어 둔 부분',
      headline: '뒤에 나오는 내용은 접어 둡니다.',
      body: '읽은 부분은 펼쳐 보여 주고 아직 읽지 않은 부분은 이름도 먼저 말하지 않은 채 접어 둡니다. 해당 부분을 읽으면 열립니다.',
    },
    route: {
      label: '진행 상황',
      headline: '읽은 곳까지만 페이지를 보여 줍니다.',
      here: '여기까지 읽음',
      nodes: [
        { name: '프롤로그', fact: '' },
        { name: '공통 루트', fact: '캐릭터 A 등장' },
        { name: '선택지', fact: '' },
        { name: '루트 1', fact: 'A와 B는 소꿉친구' },
        { name: '루트 1 엔딩', fact: '' },
        { name: '루트 2', fact: 'A의 본명' },
        { name: '진 엔딩', fact: 'A의 다른 인격' },
      ],
      /** Index of the reader's position in `nodes`. */
      at: 3,
      caption: '예시 데이터.',
      rules: [
        { title: '방문자', body: '로그인하지 않은 방문자는 첫 번째 공개 전부터 볼 수 있습니다.' },
        { title: '로그인 후', body: '기본적으로 가장 멀리 읽은 위치까지 보여 줍니다. 다 읽음으로 표시한 작품은 전체를 읽은 것으로 처리합니다.' },
        { title: '직접 선택', body: '누구나 위치를 직접 선택하거나 전체 내용을 표시할 수 있습니다.' },
        { title: '각 루트', body: '위치는 같은 이야기 루트 안에서만 비교합니다. 다른 루트의 내용은 각각 가리고 페이지의 나머지 부분은 계속 표시합니다.' },
      ] as Item[],
    },
    votes: {
      label: '두 가지 투표',
      headline: '적합성과 스포일러 여부를 따로 투표합니다.',
      body: '태그가 작품에 연결되면 커뮤니티는 적합성과 스포일러 여부를 각각 판단합니다. 내용에 잘 맞더라도 스포일러라면 해당 부분을 읽을 때까지 가려 둡니다.',
      columns: { tag: '태그', fit: '적합성', spoiler: '스포일러' },
      rows: [
        { tag: '학원', fit: '대부분 동의', spoiler: '아니요' },
        { tag: '다중 엔딩', fit: '대부분 동의', spoiler: '아니요' },
      ],
      hidden: { fit: '대부분 동의', spoiler: '예, 루트 2를 읽은 뒤 표시' },
      caption: '예시 데이터.',
    },
    filters: {
      label: '필터',
      headline: '태그를 포함하거나 제외할 수 있습니다.',
      body: [
        '필터에서 태그마다 포함하거나 제외하도록 설정할 수 있습니다. 같은 유형의 여러 태그는 모두 일치하거나 하나만 일치하도록 설정할 수 있습니다. 태그를 열면 설명, 상위 및 하위 태그, 태그가 연결된 작품이 표시됩니다.',
        '마음에 드는 태그를 팔로우해 홈페이지 탭으로 고정할 수 있습니다.',
      ],
    },
    apart: {
      text: '스포일러, 연령 등급과 가리기는',
      more: '각각 별도로 관리합니다.',
      body: '스포일러 투표는 연령 등급을 바꾸지 않으며 연령 등급으로 스포일러 여부를 정하지도 않습니다. 가려진 이미지나 스포일러 문단은 직접 열어야 합니다. 열기는 현재 화면에만 적용되며 투표로 처리되지 않습니다. 콘텐츠 등급은 전체 이용가, R15, R18과 R18G로 각각 설정하며 미평가 콘텐츠는 일반 등급으로 취급하지 않고 “미평가”로 표시합니다.',
    },
    readings: {
      label: '커뮤니티별 해석',
      headline: '같은 태그도 커뮤니티마다 다르게 해석할 수 있습니다.',
      body: '각 커뮤니티는 자체 정의를 사용하고 어떤 태그를 채택할지 결정할 수 있습니다. 한 커뮤니티가 단어의 뜻을 더 좁게 정해도 다른 곳의 용도를 바꾸거나 원래 태그를 삭제하지 않습니다.',
    },
    finale: '스크립트에서 정리하고 사람의 검토를 거친 Wiki.',
  },

  wiki: {
    hero: {
      headline: '스크립트에서 정리하고 검토를 거쳐 공개합니다.',
      lede: '비주얼 노벨의 이야기는 스크립트에 담겨 있습니다. 스크립트 보유자, 예를 들어 작품 창작자는 REZICS 오픈 소스 도구 모음과 자신의 AI 에이전트로 캐릭터와 사건을 정리해 검토 제안을 제출할 수 있습니다. 승인되면 작품의 Wiki+에 게시됩니다.',
    },
    steps: {
      label: '다섯 단계',
      headline: '스크립트에서 독자까지 다섯 단계.',
      items: [
        { title: '읽기', body: '도구 모음은 지원하는 비주얼 노벨 텍스트 스크립트를 읽으며 스크립트의 코드를 실행하지 않습니다.' },
        { title: '정리', body: '선택한 에이전트가 구간별로 캐릭터, 별칭, 관계, 사건과 장소를 정리하고 각 항목에 위치와 짧은 인용을 첨부합니다.' },
        { title: '대조', body: '도구 모음은 REZICS API로 기존 캐릭터와 장소를 찾고 각 항목을 일치, 추가, 불확실 또는 접근 불가로 표시합니다.' },
        { title: '검토', body: '사람이 제안을 검토합니다. 두 항목이 같은 캐릭터라고 판단하는 것도 제안으로 제출하며 자동으로 합치지 않습니다.' },
        { title: '게시', body: '승인된 내용을 작품의 Wiki+에 게시합니다. 스크립트가 업데이트되면 변경 사항만 제출하며 승인된 내용은 조용히 삭제되지 않습니다.' },
      ] as Item[],
    },
    locator: {
      label: '위치',
      headline: '모든 정보는 대사의 위치를 가리킵니다.',
      body: '위치는 스크립트 해시, 태그와 대사 순서로 구성됩니다. 루트 조건은 대사가 어느 루트에 속하는지 기록합니다. 같은 판본을 가진 검토자는 자신의 컴퓨터에서 원문을 확인할 수 있습니다.',
      fields: [
        { label: '스크립트 해시(앞부분)', value: 'sha256 9f2c04b7', code: true },
        { label: '태그', value: 'route_two_day3', code: true },
        { label: '대사', value: '142번째 문장', code: false },
        { label: '루트', value: '루트 2', code: false },
      ],
      caption: '예시 데이터. 판본이 다르면 먼저 명시적으로 대응해야 하며 자동으로 다른 판본에 적용하지 않습니다.',
    },
    local: {
      text: '전체 내용을 읽는 모델은',
      more: '직접 선택합니다.',
      body: [
        'REZICS는 스크립트 전체를 받지 않고 정리된 데이터와 짧은 인용만 받습니다. 스크립트를 읽는 모델은 직접 선택합니다. 엄격 모드를 켜면 추론은 내 컴퓨터에서만 수행됩니다.',
        '도구 모음은 Apache-2.0 라이선스 오픈 소스이며 REZICS 계정이 필요하지 않습니다. 사용 데이터를 전송하지 않고 자동으로 연결해 자료를 가져오지도 않습니다. 보호 기능을 우회하지 않으므로 암호화되거나 보호된 파일은 읽을 수 없습니다.',
        '인용 길이는 제한되며 플랫폼이 관리합니다. 계정, 번역본과 사이트를 넘어 합산합니다.',
      ],
    },
    zone: {
      label: '사이트',
      headline: 'Wiki+는 작품의 한 사이트입니다.',
      body: [
        '캐릭터, 장소, 연표, 챕터 안내와 인물 관계마다 자체 페이지가 있습니다. 정보 상자와 목록은 같은 그래프를 사용합니다. Wiki에서 사실을 수정하면 필터, 목록과 다른 사이트에도 반영됩니다. 독자에게는 읽은 루트까지의 내용만 표시됩니다.',
        '작품 페이지가 시작점이며 평가, 리뷰, 진행 상황과 Wiki+ 요약을 함께 보여 줍니다. 각 커뮤니티는 에이전트의 초안 작성 허용 여부와 생성 문구의 사용 여부를 결정합니다. 기본적으로 사실과 구조만 받습니다.',
      ],
    },
    finale: '중국어 커뮤니티와 일본어 커뮤니티가 각각 사이트를 운영합니다.',
  },

  zones: {
    hero: {
      headline: '두 언어 사이트가 같은 ID를 공유합니다.',
      lede: '중국어 커뮤니티도 일본어 커뮤니티도 비주얼 노벨 사이트를 만들 수 있습니다. 각 사이트는 작품 이름, 설명, 정렬과 채택할 정보를 따로 정하지만 작품, 캐릭터와 제작진 ID는 공유합니다.',
    },
    mirror: {
      label: '두 사이트',
      headline: '공유 데이터 하나를 수정하면 양쪽에 반영됩니다.',
      body: '이름, 설명과 정렬은 각 사이트에서 정합니다. 작품, 캐릭터와 제작진 ID는 두 사이트가 공유합니다.',
      columns: { field: '', zh: '중국어 사이트', ja: '일본어 사이트' },
      rows: [
        { field: '이름', zh: '중국어 이름(예시)', ja: '일본어 이름(예시)' },
        { field: '설명', zh: '중국어 커뮤니티가 작성', ja: '일본어 커뮤니티가 작성' },
        { field: '정렬', zh: '중국어판 공개 날짜순', ja: '일본어판 공개 날짜순' },
      ],
      /** The row both sites share, set across both columns. */
      shared: { field: 'ID', value: '두 사이트가 같은 작품 ID를 공유합니다' },
      caption: '예시 데이터.',
    },
    zone: {
      label: 'Zone',
      headline: 'Zone 하나로 완전한 사이트를 만듭니다.',
      items: [
        { title: '페이지와 주소', body: '홈, 작품 페이지, 캐릭터 페이지와 발행 목록의 주소와 레이아웃을 사이트에서 정합니다.' },
        { title: '탐색', body: '자체 탐색 메뉴와 초보자 안내 같은 사용자 지정 페이지를 만들 수 있습니다.' },
        { title: '디자인', body: '브랜드와 레이아웃을 설정할 수 있습니다. ID, 검색, 언어, 출처와 접근성은 일관되게 유지해 어디서든 익숙하게 사용할 수 있습니다.' },
        { title: '버전 관리', body: '사이트 전체 변경 사항을 미리 보고 검증할 수 있습니다. 문제가 있으면 되돌리고 사이트 전체를 내보낼 수 있습니다.' },
        { title: 'API', body: '사람과 AI 에이전트가 같은 API로 사이트를 관리합니다.' },
      ] as Item[],
    },
    space: {
      label: '공간',
      headline: '사이트는 공개 공간이고 커뮤니티는 모이는 곳입니다.',
      items: [
        { title: '사이트', body: 'Zone은 자체 페이지와 탐색 메뉴가 있는 사이트이며 비공개로 설정할 수도 있습니다.' },
        { title: '커뮤니티', body: '커뮤니티에는 토론, 규칙과 구성원이 있으며 채택할 정보를 결정합니다.' },
        { title: '함께 운영', body: '같은 공간에 사이트와 커뮤니티를 함께 두거나 둘 중 하나만 운영할 수 있습니다.' },
        { title: '한 번 팔로우', body: '공간을 한 번 팔로우하면 양쪽의 소식을 받을 수 있습니다.' },
      ] as Item[],
    },
    community: {
      label: '커뮤니티',
      headline: '토론, 평가와 목록을 작품에 연결합니다.',
      items: [
        { title: '토론', body: '모든 작품과 판본에서 토론을 열 수 있습니다. 가입하지 않아도 읽을 수 있습니다.' },
        { title: '평가', body: '전체, 특정 커뮤니티 또는 나만의 평가인지 표시합니다.' },
        { title: '목록', body: '입문 추천과 플레이 순서를 정리하고 이유를 적어 내보낼 수 있습니다.' },
        { title: '서재', body: '중국어 사이트에서 플레이 완료로 표시하면 일본어 사이트에서도 적용됩니다. 서재와 목록은 함께 유지됩니다.' },
      ] as Item[],
    },
    script: {
      text: '번체 중국어는',
      more: '번체 중국어로 유지됩니다.',
      body: '이름과 설명마다 언어를 표시합니다. 번체 중국어가 없을 때 자동 변환을 대체 표기로 명확히 표시합니다. 검토된 번역으로 취급하지 않으며 사람 이름이나 작품 이름은 바꾸지 않습니다.',
    },
    creators: {
      label: '창작자',
      headline: '비주얼 노벨 창작자가 여기서 작품을 발행합니다.',
      body: 'REZICS와 계약한 창작자는 판매 정책에 부합하는 비주얼 노벨을 발행할 수 있습니다. DRM 없는 파일과 체험판을 제공하고 한 번 구매하면 구매 약관에 따라 업데이트와 재다운로드를 이용할 수 있습니다. 작품 페이지, 커뮤니티와 Wiki+는 같은 ID에 연결됩니다.',
    },
    finale: 'MCP 서버도 자체 색인을 가집니다.',
  },
};

export type VnStrings = typeof strings;

export default {
  id: 'visual-novels',
  base: '/visual-novels/',
  name: '비주얼 노벨',
  theme: { kind: 'visual-novels' },
  next: 'mcp',
  pages: [
    {
      slug: '',
      label: '개요',
      meta: meta(
        '비주얼 노벨: 판본별 정보를 확인하세요',
        '언어, 플랫폼, 지역과 수록 범위로 비주얼 노벨을 선택하세요. 팬 번역은 번역자와 기준 판본을 표시합니다. 캐릭터, 제작진, 루트 진행 상황과 Wiki+를 같은 작품에 연결합니다.',
      ),
    },
    {
      slug: 'releases',
      label: '발행 판본',
      meta: meta(
        '발행 판본: 조건은 같은 판본에 적용됩니다',
        '비주얼 노벨의 각 발행 판본에 언어, 플랫폼, 지역과 완전판·일부 수록·체험판 여부를 기록합니다. 필터 조건은 같은 판본에서 모두 일치해야 하며 제목만 번역한 판본은 중국어판으로 처리하지 않습니다.',
      ),
    },
    {
      slug: 'translations',
      label: '번역과 번역자',
      meta: meta(
        '번역과 번역자: 출처를 표시합니다',
        '각 비주얼 노벨 번역에 번역자, 정확한 기준 판본과 번역 범위를 표시합니다. 팬 번역을 공식으로 표시하지 않고 패치 업데이트는 별도로 기록하며 번역과 이야기를 따로 평가할 수 있습니다.',
      ),
    },
    {
      slug: 'characters',
      label: '캐릭터와 제작진',
      meta: meta(
        '캐릭터와 제작진: 한 사람에 하나의 ID',
        '같은 캐릭터는 후속작, 이식판과 각색 작품에서도 하나의 ID를 사용합니다. 이름은 언어와 스포일러 수준에 따라 표시합니다. 각본, 원화, 음악과 성우 크레딧을 해당 인물의 페이지에 연결합니다.',
      ),
    },
    {
      slug: 'spoilers',
      label: '분류와 스포일러',
      meta: meta(
        '분류와 스포일러: 진행 상황에 맞춰 표시합니다',
        '태그를 포함하거나 제외할 수 있고 커뮤니티는 태그 적합성과 스포일러 여부를 따로 판단합니다. 캐릭터 정보와 Wiki+는 읽은 루트까지만 보여 주며 전체 공개 여부는 직접 선택할 수 있습니다.',
      ),
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: meta(
        'Wiki+: 스크립트에서 정리하는 위키',
        '스크립트 보유자는 자신의 컴퓨터에서 오픈 소스 도구 모음과 AI 에이전트로 캐릭터, 장소와 사건을 정리하고 각 항목에 대사 위치를 첨부합니다. REZICS는 전체 스크립트를 받지 않으며 사람이 검토한 뒤 게시합니다.',
      ),
    },
    {
      slug: 'zones',
      label: '커뮤니티와 사이트',
      meta: meta(
        '커뮤니티와 사이트: 같은 데이터로 두 사이트 운영',
        '중국어 커뮤니티와 일본어 커뮤니티가 각각 완전한 비주얼 노벨 사이트를 만들 수 있습니다. 이름, 설명, 정렬과 채택하는 정보는 각각 정하고 작품, 캐릭터와 제작진 ID는 모두 공유합니다.',
      ),
    },
  ],
  strings,
} satisfies MiniSite<VnStrings>;
