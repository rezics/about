// The manga site (漫畫): every visible string of /manga/ and its six inner pages, read as the
// site's chapters 第 1 話 to 第 6 話. Design record: src/sites/manga/SITE.md ("v3"); sources for
// every claim: src/sites/manga/facts.md.
import type { Item, KindId, MiniSite, ModuleId, PartId } from '../schema';

/** A section head in the v3 grid: eyebrow in columns 1 to 3, serif h2, optional lead. */
export interface MangaHead {
  eyebrow: string;
  heading: string;
  lead?: string;
}
/** A large serif statement: the first half in ink, the second in muted ink. */
export interface MangaStatement {
  text: string;
  muted?: string;
}
/** One of this site's paper still-life pictures (public/images/sites/manga/). */
export interface MangaPicture {
  name: 'hero' | 'series' | 'progress' | 'adaptations' | 'publish';
  alt: string;
}
/** The intro of an inner page: chapter eyebrow, h1 and lede. */
export interface MangaIntro {
  eyebrow: string;
  headline: string;
  lede: string;
}
/** The closing: a final statement, the action into REZICS, then the next page or site. */
export interface MangaClosing {
  statement: string;
  /** The small label of the next link, e.g. 下一話　第 2 話. */
  nextLabel: string;
  /** The next page's or site's name. */
  nextName: string;
}

export interface MangaStrings {
  /** The action into REZICS (the product's address comes from `site.productUrl`). */
  action: string;
  landing: {
    hero: Omit<MangaIntro, 'eyebrow'> & { picture: MangaPicture };
    parts: MangaHead & { notes: Partial<Record<PartId, string>> };
    pages: MangaHead & { tiles: { slug: string; chapter: string; line: string }[] };
    statement: MangaStatement;
    neighbours: MangaHead & { tiles: { kind: KindId; line: string }[] };
    closing: MangaClosing;
  };
  series: {
    intro: MangaIntro;
    levels: MangaHead & { picture: MangaPicture; items: Item[] };
    catalogue: MangaHead & { items: Item[]; footnotes: string[] };
    names: MangaHead & { body: string[]; items: Item[] };
    closing: MangaClosing;
  };
  progress: {
    intro: MangaIntro;
    language: MangaHead & { picture: MangaPicture };
    caught: MangaHead & { items: Item[] };
    statement: MangaStatement;
    travels: MangaHead & { items: Item[]; footnote: string };
    closing: MangaClosing;
  };
  creators: {
    intro: MangaIntro;
    roles: MangaHead & { items: Item[]; footnotes: string[] };
    person: MangaHead & { tiles: { kind: KindId; line: string }[] };
    statement: MangaStatement;
    closing: MangaClosing;
  };
  adaptations: {
    intro: MangaIntro;
    example: MangaHead & { picture: MangaPicture; items: Item[]; footnote: string };
    relations: MangaHead & { items: Item[]; footnote: string };
    apart: MangaHead;
    statement: MangaStatement;
    closing: MangaClosing;
  };
  community: {
    intro: MangaIntro;
    spoilers: MangaHead & { items: Item[] };
    ratings: MangaHead;
    gather: MangaHead & { items: Item[]; footnote: string; tiles: { module: ModuleId; line: string }[] };
    closing: MangaClosing;
  };
  publish: {
    intro: MangaIntro;
    steps: MangaHead & { picture: MangaPicture; items: Item[] };
    decides: MangaHead & { items: Item[] };
    elsewhere: MangaHead;
    closing: MangaClosing;
  };
}

export default {
  id: 'manga',
  base: '/manga/',
  name: '만화',
  theme: { kind: 'manga' },
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: '만화: 첫 화부터 최신 권까지',
        description:
          'REZICS는 만화마다 고유한 ID를 만들고 연재 회차, 언어별 단행본과 번역본을 여기에 연결합니다. 어디까지 읽었는지 기록하고, 선택한 언어로 기다리는 권도 표시합니다. 같은 곳까지 읽은 사람들과 이야기를 나눌 수 있습니다.',
      },
    },
    {
      slug: 'series',
      label: '시리즈',
      meta: {
        title: '만화 시리즈의 권, 화와 번역본',
        description:
          '시리즈와 단행본은 각각 작품이고, 각 화는 권마다 고정된 번호를 가집니다. 합본은 수록 범위만 기록합니다. 일본판과 대만판은 같은 작품으로 보고 번역자 이름은 각각 표시해 중복 집계하지 않습니다.',
      },
    },
    {
      slug: 'progress',
      label: '진행 상황',
      meta: {
        title: '만화 진행 상황: 어디까지 읽었는지',
        description:
          '만화 진행 상황을 화 단위로 기록해 권과 합본, 기기를 바꿔도 이어 볼 수 있습니다. 읽는 언어를 바꿔도 이미 읽은 권은 그대로 인정됩니다. 다음 화가 선택한 언어로 아직 나오지 않았다면 어느 권을 기다리는지 알려 줍니다.',
      },
    },
    {
      slug: 'creators',
      label: '창작자',
      meta: {
        title: '만화 창작자: 원작자, 작화 담당자와 번역자',
        description:
          '만화의 각 크레딧에 역할을 표시하고 원작자, 작화 담당자, 일러스트레이터와 번역자를 구분합니다. 같은 사람은 소설, 만화, 애니메이션, 게임에서 같은 ID를 사용합니다. 한 번 팔로우하면 새 작품과 공지를 확인할 수 있습니다.',
      },
    },
    {
      slug: 'adaptations',
      label: '각색',
      meta: {
        title: '만화와 각색: 소설, 애니메이션과 게임',
        description:
          'REZICS는 만화의 원작과 각색 작품을 유형이 표시된 관계로 연결합니다. 작품마다 진행 상황, 평가와 스포일러 경계를 따로 기록하고 확인되지 않은 관계도 그대로 표시합니다.',
      },
    },
    {
      slug: 'community',
      label: '토론',
      meta: {
        title: '만화 토론: 읽은 화에서 이야기하기',
        description:
          '각 화에 토론이 연결되고 아직 읽지 않은 내용은 표시하지 않습니다. 평가 대상이 작품 전체인지, 한 권인지, 번역본인지 밝히고 참여 인원과 분포를 함께 보여 줍니다. 팬들은 커뮤니티를 만들고 Zone을 운영하며 작품의 Wiki+를 작성할 수 있습니다.',
      },
    },
    {
      slug: 'publish',
      label: '연재',
      meta: {
        title: 'REZICS에서 만화 연재하기',
        description:
          'REZICS에서 만화를 연재하세요. 한 화를 이미지로만 구성하고 시간대에 맞춰 공개 일정을 설정할 수 있습니다. 협업자를 초대해 권한을 따로 지정하세요. 다른 사람이 만든 번역본은 동의한 뒤 공개되며, 각 페이지는 원본 페이지에 연결됩니다. 작품 전체를 언제든 백업할 수 있습니다.',
      },
    },
  ],
  strings: {
    action: 'REZICS로 이동',
    landing: {
      hero: {
        headline: '어디까지 읽었는지 REZICS가 기록합니다.',
        lede: '단행본, 연재의 각 화와 언어별 번역본을 같은 만화에 연결합니다. REZICS가 진행 상황을 기록하고 선택한 언어로 다음 화를 찾습니다.',
        picture: {
          name: 'hero',
          alt: '만화 한 페이지처럼 크기가 다른 창 몇 개가 뚫린 짙은 회색 두꺼운 종이. 한 창 아래로 장밋빛 종이가 비친다.',
        },
      },
      parts: {
        eyebrow: '여덟 가지 구성 요소',
        heading: '공통 구성 요소를 만화에 적용하면 이렇습니다.',
        notes: {
          identity: '어떤 번역 제목으로 검색해도 같은 작품을 찾습니다.',
          editions: '일본판, 대만판, 전자책과 합본을 각각 별도의 출간 기록으로 관리합니다.',
          credits: '원작과 작화를 따로 표시하고 번역가는 번역한 판본에 기록합니다.',
          relations: '어떤 작품을 각색했는지, 어떤 작품으로 각색됐는지 양쪽에서 확인합니다.',
          progress: '회차별로 읽은 위치를 기록하고 기기를 바꿔도 이어서 읽을 수 있습니다.',
          ratings: '어느 회차와 번역본의 평점인지 분명히 표시합니다.',
          discussion: '회차별로 토론을 나누고 진행 상황보다 뒤에 있는 댓글은 먼저 가립니다.',
          offers: '언어별 판본을 어디서 살 수 있는지 확인 날짜와 함께 표시합니다.',
        },
      },
      pages: {
        eyebrow: '이 사이트',
        heading: '여섯 편으로 살펴봅니다. 순서대로 읽거나 원하는 편을 고르세요.',
        tiles: [
          { slug: 'series', chapter: '제1화', line: '권, 화와 번역본을 하나의 작품에 연결' },
          { slug: 'progress', chapter: '제2화', line: '기기를 바꿔도 읽은 곳부터 이어 보기' },
          { slug: 'creators', chapter: '제3화', line: '원작자, 작화 담당자와 번역자를 구분' },
          { slug: 'adaptations', chapter: '제4화', line: '소설, 만화, 애니메이션과 게임의 관계' },
          { slug: 'community', chapter: '제5화', line: '스포일러는 가리고 평가 대상을 표시' },
          { slug: 'publish', chapter: '제6화', line: '직접 그린 만화를 연재' },
        ],
      },
      statement: {
        text: '출간된 대만판을 다 읽으면 따라잡은 것입니다.',
        muted: '번역본을 기다리는 권도 REZICS가 표시합니다.',
      },
      neighbours: {
        eyebrow: '관련 종류',
        heading: '하나의 이야기가 여러 형식으로 이어집니다.',
        lead: '소설, 애니메이션, 게임과 비주얼 노벨은 각각 고유한 ID를 가집니다. 각색 관계를 따라 만화에서 다른 작품으로 이동할 수 있습니다.',
        tiles: [
          { kind: 'books', line: '원작 소설과 라이트 노벨' },
          { kind: 'anime', line: '애니메이션 각색, 진행 상황은 따로 기록' },
          { kind: 'games', line: '게임으로 각색하거나 게임을 원작으로 한 작품' },
          { kind: 'visual-novels', line: '만화판에서 원작으로 연결' },
        ],
      },
      closing: {
        statement: '첫 화부터 최신 권까지 한곳에서 확인하세요.',
        nextLabel: '다음 편 제1화',
        nextName: '시리즈',
      },
    },
    series: {
      intro: {
        eyebrow: '제1화 시리즈',
        headline: '수십 권, 수백 화도 하나의 작품입니다.',
        lede: '시리즈는 하나의 작품이며 각 단행본도 작품입니다. 각 화는 작품 안에서 고정된 위치를 가집니다. 합본, 신장판과 언어별 번역본도 따로 기록하되 모두 같은 ID에 연결합니다.',
      },
      levels: {
        eyebrow: '구성',
        heading: '연재의 구성을 살펴봅니다.',
        lead: '시리즈 전체, 각 권과 각 화는 서로 다른 단위지만 모두 하나의 ID에 연결됩니다.',
        picture: {
          name: 'series',
          alt: '짙은 회색의 얇은 책 십여 권이 가지런히 쌓여 있고, 위쪽 책 몇 권은 짙은 초록 종이 띠로 묶여 있다.',
        },
        items: [
          { title: '시리즈', body: '연재 전체가 하나의 작품입니다. 창작자, 팔로우와 평가는 시리즈에 연결됩니다.' },
          {
            title: '단행본',
            body: '각 권도 하나의 작품으로 따로 소장하고 평가하며 토론할 수 있습니다. 출간 당시의 권 번호를 유지해 특별판 번호도 다른 권과 섞이지 않습니다.',
          },
          {
            title: '화',
            body: '각 화는 작품 안에서 고정된 위치와 번호를 가집니다. 진행 상황, 회차별 토론과 Wiki+ 인용 출처가 이 위치를 가리킵니다.',
          },
          { title: '합본', body: '합본이나 완전판은 여러 권을 한데 수록합니다. REZICS는 수록된 권만 기록해 중복 작품을 만들지 않습니다.' },
          {
            title: '번역본',
            body: '원문판과 언어별 번역본은 같은 작품에 속합니다. 번역자, 권리와 발행 정보는 번역본마다 기록하며 팬 번역도 어느 판본을 바탕으로 했는지 표시합니다.',
          },
        ],
      },
      catalogue: {
        eyebrow: '목록 정보',
        heading: '확인되지 않은 만화 정보는 “미기록”으로 표시합니다.',
        items: [
          { title: '형식', body: '만화 또는 단편.' },
          { title: '최초 공개 연도', body: '처음 발표된 연도입니다. 특정 연도의 작품만 끝까지 살펴볼 수 있습니다.' },
          { title: '권수', body: '출간된 단행본 권수.' },
          { title: '상태', body: '연재 중, 완결, 중단, 미발매 또는 취소.' },
        ],
        footnotes: [
          '기록이 없는 항목은 추측하지 않습니다. 가져온 목록 정보에는 출처와 라이선스를 표시합니다.',
          '만화 Zone에서는 제목, 형식, 상태와 연도로 전체 목록을 필터링합니다.',
        ],
      },
      names: {
        eyebrow: '이름과 판본',
        heading: '원제와 지역별 번역 제목을 함께 기록합니다.',
        body: [
          '만화의 원제, 지역별 번역 제목과 독자가 자주 쓰는 별칭을 함께 기록해 어떤 이름으로든 찾을 수 있습니다. 번체 중국어 제목을 간체로 자동 변환하지 않습니다. 변환이 필요하면 변환된 표기라고 표시합니다.',
          '읽는 판본을 비공개로 선택할 수도 있습니다. 전자판, 신장판 또는 대만판 중 REZICS가 내가 읽는 판본을 기억합니다.',
        ],
        items: [
          { title: 'ISBN', body: 'ISBN으로 해당 권과 번역본, 작품 전체를 찾을 수 있습니다.' },
          { title: '번역 제목', body: '제목이 번역되어 있어도 해당 언어의 번역본이 있다는 뜻은 아닙니다.' },
        ],
      },
      closing: {
        statement: '권이 많아도 작품에는 하나의 ID만 있습니다.',
        nextLabel: '다음 편 제2화',
        nextName: '진행 상황',
      },
    },
    progress: {
      intro: {
        eyebrow: '제2화 진행 상황',
        headline: '지난번에 12화를 읽었다면 이번엔 13화부터.',
        lede: 'REZICS는 만화의 각 화를 권별로 정리하고 멈춘 위치와 다음 화를 표시합니다. 휴대폰에서 읽다가 컴퓨터로 옮겨도 같은 화부터 이어집니다.',
      },
      language: {
        eyebrow: '언어 변경',
        heading: '읽는 언어를 바꿔도 진행 상황은 이어집니다.',
        lead: '일본어로 처음 열 권을 읽고 번체 중국어로 바꿔도 그 열 권은 읽은 것으로 기록됩니다. REZICS는 번체 중국어로 다음 권을 찾고, 아직 번체판이 나오지 않았다면 기다리는 권을 표시합니다.',
        picture: {
          name: 'progress',
          alt: '짙은 회색의 긴 종이 띠가 여러 구간으로 접혀 있다. 오른쪽 몇 구간은 펼쳐 겹쳐 두었고, 그 사이에 장밋빛 작은 종이 조각이 끼워져 있다.',
        },
      },
      caught: {
        eyebrow: '읽었나요?',
        heading: '“따라잡음”에도 여러 의미가 있습니다. REZICS가 구분해 알려 줍니다.',
        items: [
          { title: '해당 언어의 최신분까지 읽음', body: '선택한 언어로 볼 수 있는 부분을 모두 읽었고 다음 권의 번역본을 기다리고 있습니다.' },
          { title: '출간된 부분까지 읽음', body: '원작이 출간된 곳까지 읽었으며 연재는 계속되고 있습니다.' },
          { title: '시리즈 완결', body: '연재가 끝나 새 화가 나오지 않습니다.' },
          { title: '대응 관계 미확인', body: '온라인판과 단행본의 내용이 일치하지 않으면 미확인으로 표시합니다. 한쪽의 진행 상황을 다른 쪽에 적용하지 않습니다.' },
          { title: '외전은 선택 사항', body: '선택 사항으로 분류된 외전과 특별편을 건너뛰어도 작품 전체를 다 읽는 데 지장이 없습니다.' },
        ],
      },
      statement: {
        text: '구매했다고 읽은 것은 아닙니다.',
        muted: '소장한 단행본은 따로 기록하고 읽은 곳은 진행 상황에 남깁니다.',
      },
      travels: {
        eyebrow: '어디서나 이어 보기',
        heading: '기기를 바꿔도 진행 상황은 유지됩니다.',
        items: [
          { title: '여러 기기', body: '휴대폰과 컴퓨터에 같은 진행 상황이 기록됩니다. 잘못 누르면 되돌릴 수 있고 다른 기기도 함께 업데이트됩니다.' },
          { title: '이어서 읽기', body: '홈페이지 맨 위의 항목을 누르면 다음 화가 열립니다.' },
          {
            title: '팔로우',
            body: '만화를 읽는 중으로 표시하면 팔로우가 시작됩니다. 읽는 언어로 새 화나 권이 나오면 알려 드립니다. 알림은 주요 소식만 받거나 모두 끌 수 있습니다.',
          },
          {
            title: '가져오기',
            body: '다른 사이트의 만화 목록을 가져오고 상태, 날짜, 점수, 태그와 비공개 메모를 대응해 보관합니다. 다시 읽은 횟수와 같은 원본 항목은 7일 동안 보관되므로 먼저 백업을 내보내세요.',
          },
          { title: '내보내기', body: '전체 서재를 언제든 내보낼 수 있으며 날짜와 메모도 함께 저장됩니다.' },
        ],
        footnote: '기본적으로 REZICS는 비공개 독서 기록으로 AI 모델을 학습하거나 광고 프로필을 만들지 않습니다.',
      },
      closing: {
        statement: '다음에는 읽던 화부터 이어 보세요.',
        nextLabel: '다음 편 제3화',
        nextName: '창작자',
      },
    },
    creators: {
      intro: {
        eyebrow: '제3화 창작자',
        headline: '이야기를 쓰는 사람과 그림을 그리는 사람.',
        lede: '많은 만화는 이야기와 그림을 서로 다른 사람이 맡습니다. REZICS는 역할별로 크레딧을 표시하고 각 이름을 만화, 소설, 애니메이션을 비롯한 모든 작품에 연결합니다.',
      },
      roles: {
        eyebrow: '크레딧',
        heading: '역할별로 크레딧을 구분합니다.',
        items: [
          { title: '원작', body: '이야기를 구상하고 쓴 사람.' },
          { title: '작화', body: '이야기를 만화 페이지로 그린 사람.' },
          { title: '일러스트', body: '표지, 컬러 페이지나 소설의 그림을 그린 사람.' },
          { title: '번역자', body: '직접 번역한 판본에 이름을 표시하고 다른 판본에는 연결하지 않습니다.' },
          { title: '콘셉트 감수', body: '원안을 제공하거나 감수를 맡은 사람.' },
        ],
        footnotes: ['팬 번역 팀도 이름을 표시하지만 공식 번역본으로 취급하지 않습니다.', '역할 이름도 데이터의 일부이며 언어별 표기를 추가할 수 있습니다.'],
      },
      person: {
        eyebrow: '한 사람',
        heading: '하나의 이름으로 여러 종류의 작품을 연결합니다.',
        lead: '한 일러스트레이터가 소설 삽화를 그리고 만화를 연재하며 게임 일러스트를 맡을 수 있습니다. REZICS는 이를 한 사람에게 연결합니다. 팔로우하면 새 작품과 공지가 팔로우 피드에 표시됩니다.',
        tiles: [
          { kind: 'books', line: '소설 삽화' },
          { kind: 'anime', line: '애니메이션으로 각색된 원작' },
          { kind: 'games', line: '게임 일러스트' },
        ],
      },
      statement: {
        text: '크레딧은 계정이 아니라 사람에게 연결됩니다.',
        muted: '작가가 아직 가입하지 않았어도 페이지에는 이름을 올린 작품이 모두 기록됩니다.',
      },
      closing: {
        statement: '각 이름에는 맡은 역할이 표시됩니다.',
        nextLabel: '다음 편 제4화',
        nextName: '각색',
      },
    },
    adaptations: {
      intro: {
        eyebrow: '제4화 각색',
        headline: '하나의 이야기, 네 가지 형식.',
        lede: 'REZICS에서 소설, 만화, 애니메이션과 게임은 각각 하나의 작품입니다. 이름이 있는 관계로 서로 연결되며 만화에서 원작과 각색 작품을 찾을 수 있습니다.',
      },
      example: {
        eyebrow: '예시',
        heading: '예를 들어 《어떤 마술의 금서목록》.',
        lead: '가마치 카즈마가 쓰고 하이무라 키요타카가 삽화를 그린 라이트 노벨이 원작입니다. REZICS는 각 형식을 별도의 작품으로 기록하고 서로 어떤 관계인지 표시합니다.',
        picture: {
          name: 'adaptations',
          alt: '짙은 초록, 짙은 회색, 장밋빛 종이 세 장이 왼쪽 위에서 오른쪽 아래로 이어지고 모서리가 서로 맞닿아 있다.',
        },
        items: [
          { title: '라이트 노벨', body: '원작. 본편, 《신약》과 《창약》 세 시리즈는 후속작 관계로 차례로 연결됩니다.' },
          { title: '만화', body: '라이트 노벨을 원작으로 하며, 코기노 츄야가 작화를 맡았습니다.' },
          { title: '애니메이션', body: '라이트 노벨을 각색했으며 만화와 진행 상황을 따로 기록합니다.' },
          { title: '《어떤 과학의 초전자포》', body: '파생 작품으로 별도의 만화가 있고 애니메이션으로도 각색되었습니다.' },
          { title: '게임', body: '게임 중 하나는 비주얼 노벨이며 여기서 비주얼 노벨 페이지로 연결됩니다.' },
        ],
        footnote: 'REZICS가 작품을 기록하는 방식을 설명하는 예시이며 어떤 협력이나 라이선스를 뜻하지 않습니다.',
      },
      relations: {
        eyebrow: '관계',
        heading: '각 관계의 유형을 명확히 표시합니다.',
        items: [
          { title: '각색 원작', body: '소설, 애니메이션이나 게임을 만화로 옮기거나 만화를 다른 형식으로 바꾼 작품.' },
          { title: '후속작/전작', body: '이전 작품에서 이어지는 이야기.' },
          { title: '파생 작품', body: '외전이나 조연의 이야기를 본편에 연결합니다.' },
          { title: '다시 쓴 작품', body: '작가가 이야기를 새로 써 원작과 줄거리가 다르면 별도의 작품으로 기록합니다.' },
          { title: '리부트', body: '이야기를 처음부터 다시 다룬 새 판본.' },
          { title: '읽는 순서', body: '출간 순서와 함께 줄거리 순서에 따른 읽는 목록도 만들 수 있습니다.' },
        ],
        footnote: '확인되지 않은 관계는 미확인으로 표시합니다. 억지로 연결하지 않습니다.',
      },
      apart: {
        eyebrow: '별도 기록',
        heading: '애니메이션을 다 봐도 만화 진행 상황은 바뀌지 않습니다.',
        lead: '애니메이션을 어디까지 봤는지, 만화를 어디까지 읽었는지 따로 기록합니다. 만화와 애니메이션 리뷰도 따로 필터링하고 평가는 각각의 대상에 대해서만 집계합니다.',
      },
      statement: {
        text: '두 판본의 줄거리가 다르면 양쪽 내용을 모두 Wiki+에 기록할 수 있습니다.',
        muted: '각 사실이 어느 판본에 해당하는지 표시하고 읽은 위치에 따라 보여 줍니다.',
      },
      closing: {
        statement: '각 형식은 독립된 작품이면서 서로 연결됩니다.',
        nextLabel: '다음 편 제5화',
        nextName: '토론',
      },
    },
    community: {
      intro: {
        eyebrow: '제5화 토론',
        headline: '읽은 화까지만 이야기하고 확인할 수 있습니다.',
        lede: '토론은 각 화에 연결됩니다. 아직 읽지 않은 내용은 먼저 가려 두어 해당 부분을 읽기 전까지 보이지 않습니다.',
      },
      spoilers: {
        eyebrow: '스포일러',
        heading: '진행 상황보다 뒤의 내용은 가려 두고 원할 때 엽니다.',
        items: [
          { title: '회차별 토론', body: '각 화에 토론이 연결됩니다. 커뮤니티에 가입하지 않아도 읽을 수 있습니다.' },
          { title: '가려 둔 댓글', body: '진행 상황보다 뒤의 댓글은 기본적으로 가려 둡니다. 직접 열 수 있으며 이번 화면에만 적용됩니다.' },
          { title: '스포일러 투표', body: '어떤 내용이 스포일러인지 독자가 투표할 수 있습니다. 이 투표는 창작자의 표시와 별도로 집계됩니다.' },
          {
            title: '세 가지 대화',
            body: '줄거리 이야기, 리뷰, 정보 수정 토론은 각각 다른 곳에 모입니다. 오가며 읽어도 선택한 판본과 읽은 위치가 유지됩니다.',
          },
        ],
      },
      ratings: {
        eyebrow: '평점',
        heading: '평점마다 평가 대상을 표시합니다.',
        lead: '시리즈 전체, 각 회차와 개별 번역본의 평점을 따로 매기며 시리즈 평점은 회차별 점수의 평균으로 계산하지 않습니다. 평점마다 참여 인원, 분포와 평가 집단을 표시합니다. 리뷰에는 이야기나 번역 중 무엇을 평가했는지 적으며 점수 없이 글만 쓸 수도 있습니다.',
      },
      gather: {
        eyebrow: '팬 커뮤니티',
        heading: '팬들이 모이는 공간.',
        items: [
          {
            title: '커뮤니티',
            body: '만화 독자들이 구성원, 규칙과 운영진이 있는 커뮤니티를 만들 수 있습니다. 추천 항목은 결정이 내려진 토론에 연결됩니다.',
          },
          { title: 'Zone', body: '커뮤니티는 작품을 위한 사이트를 만들어 자체 페이지, 탐색 메뉴와 디자인을 설정할 수 있습니다. 데이터는 같은 자료를 사용합니다.' },
          {
            title: 'Wiki+',
            body: '캐릭터, 장소, 연표와 화별 안내는 읽은 화까지만 표시됩니다. 정보 상자에는 검토된 사실만 담깁니다.',
          },
          { title: '목록', body: '입문 추천이나 읽는 순서를 정리하고 작품마다 이유를 적으세요. 정렬과 내보내기도 가능합니다.' },
          { title: '팔로우', body: '작품, 창작자 또는 커뮤니티를 팔로우하고 각각 알림 수준을 설정하세요.' },
        ],
        footnote: '연령 등급은 전체 이용가, R15, R18, R18G로 각각 설정할 수 있습니다. 평가되지 않은 콘텐츠는 “미평가”로 표시됩니다.',
        tiles: [
          { module: 'community', line: '팬들이 토론하고 평가하며 목록을 정리합니다' },
          { module: 'zones', line: 'Zone과 Wiki+, 커뮤니티 사이트' },
        ],
      },
      closing: {
        statement: '한 화를 다 읽었다면 해당 화에서 이야기하세요.',
        nextLabel: '다음 편 제6화',
        nextName: '연재',
      },
    },
    publish: {
      intro: {
        eyebrow: '제6화 연재',
        headline: '만화의 첫 화부터 고유한 ID를 가집니다.',
        lede: 'REZICS에서 연재하는 작품은 다른 만화와 같은 색인에 등록됩니다. 독자는 동일한 진행 상황, 토론과 평가 기능으로 작품을 읽습니다. 각색이나 번역이 생기면 원작에 연결됩니다.',
      },
      steps: {
        eyebrow: '과정',
        heading: '원고에서 독자에게.',
        lead: '한 화를 올리고 공개하기까지의 모든 단계를 직접 정하고 작품 기록에 남깁니다.',
        picture: {
          name: 'publish',
          alt: '짙은 회색 종이를 세 면으로 접은 작은 병풍이 서 있다. 각 면에는 창이 몇 개 뚫려 빛이 그림자 사이로 비치고 옆에는 낱장이 쌓여 있다.',
        },
        items: [
          { title: '화 올리기', body: '한 화를 이미지 페이지로만 구성해도 됩니다. 작가의 말은 본문과 분리해 번역 대상에도 포함하지 않습니다.' },
          { title: '공개 일정 설정', body: '공개 날짜와 시간대를 설정하면 브라우저를 닫아도 정해진 시간에 공개됩니다.' },
          { title: '함께 작업하기', body: '도우미와 편집자를 초대해 읽기, 제안, 편집, 공개 권한을 각각 설정합니다. 공개 권한과 편집 권한은 별도입니다.' },
          { title: '페이지 위치 지정', body: '각 페이지는 고정된 위치를 가집니다. 다른 사람이 번역하면 번역본의 각 페이지가 원본 페이지에 연결됩니다.' },
          { title: '피드백 받기', body: '독자의 댓글과 수정 제안은 작가 피드백 받은 편지함에 모입니다.' },
        ],
      },
      decides: {
        eyebrow: '작가의 결정',
        heading: '작가가 직접 결정합니다.',
        items: [
          {
            title: '번역',
            body: '다른 사람이 만든 번역본은 기본적으로 비공개입니다. 동의하거나 미리 공개 라이선스를 허용해야 번역본을 공개할 수 있습니다. 특정 번역본을 작품에 연결하지 않도록 요청할 수도 있습니다.',
          },
          { title: '권리', body: '작품의 라이선스 선언을 작성해 독자와 번역자가 어떻게 사용할 수 있는지 밝힙니다.' },
          { title: 'AI 사용', body: '각 화에 AI 사용 수준을 표시할 수 있습니다. 사용 안 함, 보조, 생성으로 나누며 독자가 필터링할 수 있습니다.' },
          { title: '수정', body: '수정한 페이지는 수정 기록을 남깁니다. 독자가 댓글을 남겼을 때 본 판본을 조용히 바꾸지 않습니다.' },
          { title: '백업', body: '모든 수정 기록을 포함해 작품 전체를 언제든 백업할 수 있습니다.' },
        ],
      },
      elsewhere: {
        eyebrow: '다른 곳에서 연재',
        heading: '다른 곳에서 연재 중인 작품도 기록할 수 있습니다.',
        lead: '개인 사이트나 다른 곳에서 연재하는 작품도 REZICS에 등록할 수 있습니다. 온라인 연재는 URL과 날짜가 있는 스냅샷을 포함해 하나의 발행 기록으로 남기고, 단행본이 나오면 권마다 따로 기록합니다.',
      },
      closing: {
        statement: 'REZICS에 작품을 올려도 작가가 주도권을 가집니다.',
        nextLabel: '다음 사이트',
        nextName: '게임',
      },
    },
  },
} satisfies MiniSite<MangaStrings>;
