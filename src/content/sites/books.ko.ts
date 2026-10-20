// 書庫 (books): every visible string of the books site. Design record and sources:
// src/sites/books/SITE.md and src/sites/books/facts.md. The eight part notes and the kind's
// name come from src/content/kinds.ts and are imported by the pages, never copied here.
// Shapes follow the v3 parts (V3-SPEC): hero, sections (eyebrow, heading, lead), photo rows,
// facts lists (title left, text right), statements (a line and its muted continuation), tile
// masonry and the closing.
import type { MiniSite } from '../schema';

export type TitledText = {
  title: string;
  body: string;
};

/** A section: eyebrow label, serif heading, lead text. */
type Head = { label: string; headline: string; lead?: string };

/** A large serif statement: `text`, then its muted continuation `sub`; `note` sits under it. */
export type StatementText = { text: string; sub: string; note?: string };

/** A paper still-life picture: its alt text. Files live in public/images/sites/books/. */
type Picture = { alt: string };

export type BooksStrings = {
  /** Shared labels across the site's pages; `closing` ends every page. */
  common: { contents: string; nextPage: string; nextSite: string; closing: { title: string; body: string } };
  landing: {
    hero: { headline: string; lede: string } & Picture;
    /** Photo row: the editions picture beside one fictional series' editions (示意). */
    editions: Head & { lead: string; caption: string; link: string } & Picture;
    /** Facts list: how the bookmark counts across editions and languages (示意). */
    progress: Head & { steps: TitledText[] };
    reading: StatementText;
    /** Photo row: the folded strip beside writing and publishing. */
    writing: Head & { body: string[]; link: string } & Picture;
    /** Tile masonry of the site's own pages: a short line per tile. */
    pages: Head & { rows: { slug: string; line: string }[] };
    parts: Head;
    /** Tile masonry of neighbouring kinds. */
    connections: Head & { tiles: { kind: 'anime' | 'manga' | 'visual-novels' | 'games'; line: string }[] };
  };
  work: {
    hero: { headline: string; lede: string };
    /** The example's title page (text only, per EXAMPLE-WORK.md). */
    example: { title: string; original: string; author: string; caption: string };
    sections: Head & { rows: (TitledText & { example: string })[] };
    action: Head & { rows: TitledText[]; caption: string };
    ratings: Head & { rows: TitledText[] };
    edit: Head & { rows: TitledText[] };
    languages: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  wiki: {
    /** The page head beside the cut-out picture. */
    hero: { headline: string; lede: string } & Picture;
    flow: Head & { steps: TitledText[] };
    position: Head & {
      control: string;
      positions: { label: string; chapter: number }[];
      groups: { people: string; events: string };
      source: string;
      aliases: string;
      entries: { group: 'people' | 'events'; name: string; aliases?: string; chapter: number; note: string }[];
      /** What a folded entry says: the chapter it appears in (`{n}`). */
      later: string;
      status: string;
      statusAll: string;
      rail: string;
      rules: string[];
    };
    text: StatementText & { facts: TitledText[] };
    /** Tile masonry of a wiki's own pages (示意, not links). */
    zone: Head & { tiles: { name: string; line?: string }[]; caption: string };
    review: Head & { states: TitledText[]; rules: string[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  editions: {
    /** The page head beside the stack picture. */
    hero: { headline: string; lede: string } & Picture;
    releases: Head & { kinds: TitledText[] };
    translations: Head & { rows: TitledText[]; stateLabel: string; states: string[]; notes: string[] };
    sameWork: Head & { rows: TitledText[]; caption: string };
    orders: Head & {
      rows: [string, string];
      tiles: string[];
      /** Reading order as indexes into `tiles`. */
      reading: number[];
      notes: TitledText[];
    };
    isbn: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  library: {
    /** The page head beside the three strips. */
    hero: { headline: string; lede: string } & Picture;
    /** Three reads of one book as three strips, the photograph seen flat (`share`: its length). */
    reads: Head & { rows: (TitledText & { share: number })[]; caption: string };
    move: Head & { steps: TitledText[]; retention: string };
    continue: StatementText;
    shelf: Head & { rows: TitledText[] };
    privacy: Head & { rows: TitledText[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  serial: {
    /** The page head beside the folded strip. */
    hero: { headline: string; lede: string } & Picture;
    safe: Head & { rows: TitledText[] };
    mirror: Head & { rows: TitledText[]; notes: string[] };
    ai: Head & { rows: TitledText[]; notes: string[] };
    world: Head & { items: string[] };
    backup: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  publish: {
    hero: { headline: string; lede: string };
    buy: Head & { steps: TitledText[]; caption: string };
    statement: Head & { rows: TitledText[]; note: string };
    distributed: Head & { rows: TitledText[]; policy: TitledText[] };
    community: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
};

const strings: BooksStrings = {
  common: {
    contents: '이 페이지의 내용',
    nextPage: '다음 페이지',
    nextSite: '관련 종류',
    closing: {
      title: '다음 책은 서재를 열면 알 수 있습니다.',
      body: '모든 책과 판본, 독서 기록을 하나의 계정에서 관리합니다.',
    },
  },

  landing: {
    hero: {
      headline: '작품 하나, 모든 판본, 내가 읽은 페이지.',
      lede: '원문과 번역본, 단행본과 합본을 구분해 하나의 작품에 연결합니다. 다음 책, Wiki+와 토론은 읽은 위치를 따릅니다.',
      alt: '짙은 녹색 종이가 차례로 펼쳐지고 가운데에 연녹색 종이 띠가 끼워져 책갈피처럼 보입니다.',
    },
    editions: {
      label: '판본',
      headline: '발매할 때마다 따로 기록합니다.',
      lead: '같은 라이트 노벨도 일본어 원판, 중국어 번체판, 영어판과 중국어 번체 합본을 각각 발매로 기록하며 수록 권수가 다릅니다. ISBN이 있거나 없거나 온라인에서만 연재된 작품도 라이브러리에서는 하나의 작품입니다.',
      caption: '예시: 가상의 12권 라이트 노벨 시리즈.',
      link: '판본과 시리즈 보기',
      alt: '크기가 다른 녹색 종이가 왼쪽 아래를 맞춰 겹쳐 있고 그중 한 장은 연한 파란색입니다.',
    },
    progress: {
      label: '독서 진행',
      headline: '책갈피가 놓인 곳에서 다음 책을 이어갑니다.',
      lead: '같은 12권 라이트 노벨 시리즈입니다. 중국어 번체판은 6권, 일본어판은 12권까지 나왔고 방금 중국어 번체판 6권을 다 읽었습니다.',
      steps: [
        { title: '권마다 하나의 작품', body: '시리즈의 각 권은 하나의 작품입니다. 어떤 언어로 출판되어도 7권은 같은 작품입니다.' },
        { title: '합본은 한 번만 계산', body: '중국어 번체 합본은 1권부터 3권까지 수록한 한 번의 발매입니다. 합본을 다 읽으면 세 권을 각각 한 번씩 읽은 것으로 기록하며 중복 계산하지 않습니다.' },
        { title: '읽는 언어로 다음 책', body: '중국어 번체판 7권은 아직 나오지 않았습니다. 현재 출간된 번체판을 모두 읽었다고 표시하고 7권이 나오면 알려 줍니다.' },
        { title: '언어를 바꿔도 이어집니다', body: '일본어판 7권과 8권을 읽고 중국어 번체판으로 바꿔도 두 권은 읽은 것으로 기록됩니다. 번역본은 같은 작품의 다른 텍스트이므로 진행 상황을 다시 시작할 필요가 없습니다.' },
        { title: '소장과 완독은 다릅니다', body: '책을 소장 중인지와 읽었는지는 별도로 기록합니다.' },
      ],
    },
    reading: {
      text: 'Wiki+와 토론은 읽은 곳에서 멈춥니다.',
      sub: '뒤에 등장하는 인물, 사건과 토론은 먼저 숨깁니다. 원하면 전체 내용을 한 번에 열 수 있습니다.',
    },
    writing: {
      label: '집필과 출판',
      headline: '작가도 같은 서재에 있습니다.',
      body: [
        '연재 작가는 이곳에서 챕터를 쓰고 예약 발행하며 독자는 지난번 읽은 곳부터 이어 읽습니다.',
        '계약 창작자는 권리를 확보한 DRM 없는 전자책을 독자에게 직접 판매합니다. 스토어 페이지는 작품 토론 옆에 있습니다.',
      ],
      link: '연재 방법 보기',
      alt: '긴 짙은 녹색 종이를 페이지처럼 접고 뒷부분은 펼쳐 두었습니다. 접힌 자리에 작은 연녹색 종이가 놓여 있습니다.',
    },
    pages: {
      label: '라이브러리 페이지',
      headline: '책을 찾고 읽고 쓰는 곳.',
      rows: [
        { slug: 'work', line: '작품의 모든 정보가 이 페이지에서 시작됩니다' },
        { slug: 'wiki', line: 'AI 에이전트로 책의 Wiki+ 만들기' },
        { slug: 'editions', line: '번역본, 합본과 시리즈를 명확히 구분' },
        { slug: 'library', line: '모든 독서를 그대로 기록' },
        { slug: 'serial', line: '한 챕터씩 쓰고 읽기' },
        { slug: 'publish', line: 'DRM 없는 전자책을 독자에게 직접 판매' },
      ],
    },
    parts: {
      label: '구성 요소',
      headline: '여덟 구성 요소로 라이브러리를 만듭니다.',
      lead: '같은 구성 요소로 애니메이션, 만화와 게임도 만듭니다. 라이브러리는 그중 여덟 개를 사용합니다.',
    },
    connections: {
      label: '관련 종류',
      headline: '책 속 이야기는 다른 종류에도 이어집니다.',
      lead: '원작 페이지에서 시작해 모든 각색 작품을 찾을 수 있습니다.',
      tiles: [
        { kind: 'anime', line: '각색 애니메이션을 관계로 연결' },
        { kind: 'manga', line: '만화판은 별도 평점을 기록' },
        { kind: 'visual-novels', line: '라이트 노벨과 같은 카탈로그와 라이브러리를 사용' },
        { kind: 'games', line: '같은 작가의 게임을 같은 이름에 연결' },
      ],
    },
  },

  work: {
    hero: {
      headline: '작품에 관한 모든 것이 이 페이지에서 시작됩니다.',
      lede: '작품 페이지는 라이브러리의 중심입니다. 사실, 평점, 판본과 진행 상황, 시리즈와 각색, Wiki+와 토론을 읽는 흐름에 맞춰 정리합니다.',
    },
    example: {
      title: '《어떤 마술의 금서목록》',
      original: 'とある魔術の禁書目録',
      author: '카마치 카즈마',
      caption: '책 제목은 읽는 언어로 표시하고 원제는 옆에 함께 둡니다. 아래에서 이 작품을 예로 들어 위에서부터 살펴봅니다.',
    },
    sections: {
      label: '여덟 영역',
      headline: '위에서 아래로 여덟 영역.',
      lead: '이 작품에 필요하지 않은 영역은 생략하고 나머지 위치와 연결은 유지합니다.',
      rows: [
        {
          title: '작품 정보와 다음 단계',
          body: '표지, 제목, 작가와 평점을 표시하고 평점에는 척도, 평가 인원과 범위를 밝힙니다. 옆에는 선택한 판본, 독서 상태와 진행 상황을 표시합니다.',
          example: '5권까지 읽으면 주요 버튼에 “이어서 읽기”가 표시됩니다.',
        },
        {
          title: '소개',
          body: '스포일러 없는 소개, 기본 정보, 태그와 콘텐츠 안내를 표시합니다. 펼치면 전체 사실, 출처와 “수정 제안”을 볼 수 있습니다.',
          example: '카마치 카즈마가 쓰고 하이무라 키요타카가 삽화를 맡은 라이트 노벨입니다. 본편은 2004년부터 출판되었습니다.',
        },
        {
          title: '판본과 이용 방법',
          body: '선택한 판본을 먼저 표시하고 조건에 맞는 판본 몇 가지를 보여 준 뒤 페이지를 넘겨 전체 목록을 확인할 수 있습니다.',
          example: '일본어 원작과 중국어 번체 및 영어 번역본에 번역자를 각각 표시합니다.',
        },
        {
          title: '권과 관계',
          body: '다음에 읽을 부분을 맨 앞에 두고 권 순서, 속편과 각색 작품을 이어서 표시합니다. 출판 순서와 추천 독서 순서는 따로 표시합니다.',
          example: '본편, 《신약》과 《창약》을 속편 관계로 연결한 세 시리즈입니다.',
        },
        {
          title: 'Wiki+ 둘러보기',
          body: '주요 인물, 제작진, 진행 상황을 넘지 않는 연표나 챕터 안내를 표시하고 Wiki+ 페이지로 연결합니다.',
          example: '5권까지 읽었다면 연표도 5권에서 멈춥니다.',
        },
        {
          title: '평점과 리뷰',
          body: '점수 분포와 인원, 평가 질문, 평가자와 대상을 함께 표시합니다. 판본이나 리뷰 언어로 필터링할 수 있고 평점을 남기지 않아도 리뷰를 쓸 수 있습니다.',
          example: '이야기 평점과 특정 번역본 평점을 따로 계산합니다.',
        },
        {
          title: '토론과 커뮤니티',
          body: '작품, 각 권과 판본마다 별도의 토론이 있습니다. 토론을 읽기 위해 커뮤니티에 가입할 필요는 없습니다.',
          example: '5권에 대해 이야기하려면 해당 권에서 바로 토론을 열 수 있습니다.',
        },
        {
          title: '목록과 탐색',
          body: '이 작품이 포함된 목록과 독서 순서에 각각 이유를 표시합니다. 아래에서 식별자, 출처와 수정 기록을 볼 수 있습니다.',
          example: '라이트 노벨 입문 목록에 이 작품을 넣은 이유를 표시합니다.',
        },
      ],
    },
    action: {
      label: '주요 버튼',
      headline: '상단에는 주요 버튼 하나만 둡니다.',
      lead: '버튼 문구는 작품과의 관계에 따라 달라집니다. 팔로우와 목록 추가 버튼은 별도로 둡니다.',
      rows: [
        { title: '판본을 아직 선택하지 않음', body: '“판본 선택” 버튼이 표시됩니다.' },
        { title: '판본은 선택했지만 아직 읽지 않음', body: '“읽기 시작” 버튼이 표시됩니다.' },
        { title: '읽는 중', body: '“이어서 읽기” 버튼을 누르면 읽던 곳으로 바로 이동합니다.' },
      ],
      caption: '휴대전화에서는 표지를 제목 옆 작은 이미지로 줄여 표시하며 작품 정보, 판본, 상태와 버튼이 첫 화면에 들어옵니다.',
    },
    ratings: {
      label: '평점',
      headline: '점수 옆에 평가 대상을 표시합니다.',
      lead: '원문 독자는 이야기를 평가하고 번역본 독자는 번역을, 오디오북 청취자는 낭독을 따로 평가할 수 있습니다.',
      rows: [
        { title: '평가 대상', body: '이야기, 번역본과 낭독을 각각 평가하며 하나의 점수로 합치지 않습니다.' },
        { title: '평균의 기준', body: '평균 점수마다 전체 사용자, 가입한 커뮤니티 또는 다른 커뮤니티 중 누가 평가했는지 표시합니다.' },
        { title: '시리즈와 각 권', body: '시리즈 전체 평점과 각 권의 평점을 따로 표시합니다.' },
      ],
    },
    edit: {
      label: '수정',
      headline: '개인 기록은 직접 수정하고 공유 사실은 제안합니다.',
      rows: [
        { title: '직접 수정하고 되돌릴 수 있습니다', body: '독서 상태, 진행 상황, 평점과 목록은 직접 수정할 수 있습니다. 잘못 바꿨으면 한 번 눌러 되돌립니다.' },
        { title: '수정 제안과 사람의 검토', body: '사실, 관계, 제목과 별칭을 제안할 수 있습니다. 모든 제안에 출처를 붙이고 사람이 검토한 뒤 적용합니다.' },
      ],
    },
    languages: {
      text: '인터페이스, 제목과 판본의 언어는',
      sub: '각각 따로 설정합니다.',
      note: '인터페이스를 영어로 바꿔도 읽고 있는 중국어 번체 번역본은 바뀌지 않습니다. 제목이 중국어로 번역되어도 중국어 번역본이 있다는 뜻은 아닙니다. 리뷰에도 작성 언어를 표시합니다.',
    },
    finaleLead: '작품 페이지의 세부 내용은 진행 상황에 맞춰 챕터별로 펼쳐집니다.',
  },

  wiki: {
    hero: {
      headline: '모든 책에는 자체 Wiki가 있습니다.',
      lede: '이 책을 소유한 사람은 자신의 컴퓨터에서 AI 에이전트를 실행해 인물과 장소, 사건을 챕터별로 정리할 수 있습니다. 사람이 검토한 뒤 공개하며 독자는 읽은 챕터까지만 볼 수 있습니다.',
      alt: '짙은 녹색 종이에 길이가 다른 틈을 여러 개 내고 잘라낸 종잇조각을 옆의 연한 파란색 종이에 가지런히 놓은 모습.',
    },
    flow: {
      label: '파일에서 Wiki+까지',
      headline: '파일 하나에서 Wiki를 만듭니다.',
      steps: [
        { title: '내 파일', body: 'TXT 또는 EPUB 파일은 사용자의 컴퓨터에 그대로 둡니다.' },
        {
          title: '선택한 AI 에이전트',
          body: '도구가 텍스트를 정확한 위치 정보가 있는 구간으로 나눕니다. 에이전트가 챕터별로 읽으며 등장인물과 별칭, 인물 간 관계, 사건, 장소를 기록합니다.',
        },
        {
          title: '출처를 포함한 제안',
          body: '각 항목에 원문의 위치를 표시하고 짧은 원문을 근거로 인용합니다. 에이전트는 API로 기존 인물과 장소를 먼저 찾은 뒤 결과를 한꺼번에 제출합니다.',
        },
        {
          title: '검토 후 게시',
          body: '검토자가 제안 전체를 한 번에 승인하면 작품 Wiki가 업데이트됩니다. 새 챕터가 나오면 추가하거나 수정할 부분만 제출하면 됩니다.',
        },
      ],
    },
    position: {
      label: '읽은 위치',
      headline: '읽은 챕터까지만 Wiki에서 확인할 수 있습니다.',
      lead: '가상의 소설을 예로 들어, 같은 인물과 사건 목록도 읽는 위치에 따라 다르게 표시되는 모습을 보여줍니다.',
      control: '읽은 위치',
      positions: [
        { label: '1장', chapter: 1 },
        { label: '3장', chapter: 3 },
        { label: '9장', chapter: 9 },
        { label: '16장', chapter: 16 },
        { label: '22장', chapter: 22 },
        { label: '전체', chapter: 30 },
      ],
      groups: { people: '인물', events: '사건' },
      source: '출처: {n}장',
      aliases: '별칭:',
      entries: [
        { group: 'people', name: '주인공', aliases: '애칭, 필명', chapter: 1, note: '이야기의 화자로 항구 도시에서 자랐습니다.' },
        { group: 'people', name: '주인공의 누나', chapter: 1, note: '도시의 서점에서 일합니다.' },
        { group: 'people', name: '새로 이사 온 이웃', chapter: 3, note: '맞은편 집에 막 이사 온 젊은이입니다.' },
        { group: 'people', name: '여행 중인 화가', chapter: 16, note: '항구 옆 여관에 머물고 있습니다.' },
        { group: 'events', name: '서점 재개장', chapter: 1, note: '누나가 일하는 서점이 새 간판을 달았습니다.' },
        { group: 'events', name: '항구의 연회', chapter: 9, note: '주인공이 연회에서 이웃에게 처음 말을 걸었습니다.' },
        { group: 'events', name: '긴 편지 한 통', chapter: 16, note: '편지에서 두 사람의 과거가 밝혀집니다.' },
        { group: 'events', name: '항구를 떠나는 배', chapter: 22, note: '누나가 보낸 편지로 소식을 알게 됩니다.' },
      ],
      later: '{n}장에 등장합니다. 먼저 숨깁니다.',
      status: '현재 위치: {n}장. 이후 내용은 여기에 표시되지 않습니다.',
      statusAll: '현재 결말을 포함한 전체 내용을 표시합니다.',
      rail: '전체 30장.',
      rules: [
        '로그아웃 상태에서는 기본적으로 스포일러를 표시하지 않으며 페이지에서 이를 안내합니다.',
        '로그인하면 기본 위치는 마지막으로 읽은 챕터입니다. 라이브러리에서 “읽음”으로 표시하면 전체를 다 읽은 것으로 처리합니다.',
        '누구나 직접 위치를 선택하거나 전체 표시를 선택할 수 있습니다.',
        '위치는 같은 이야기 맥락 안에서만 적용됩니다. 웹 연재를 어디까지 읽었는지가 출간본 내용을 공개하지 않습니다.',
      ],
    },
    text: {
      text: 'REZICS는 전체 텍스트를 받지 않습니다.',
      sub: '이 도구가 받는 것은 제안뿐이며 각 항목에 원문 위치와 짧은 인용문이 포함됩니다.',
      facts: [
        { title: '모델은 직접 선택', body: '클라우드 모델을 사용하면 텍스트는 선택한 서비스로 전달됩니다. 로컬 모델을 사용하면 모든 과정이 컴퓨터에서 진행됩니다.' },
        { title: '오픈 소스', body: '도구는 Apache-2.0 라이선스로 제공됩니다. 계정 없이 사용할 수 있으며 사용 정보를 전송하거나 인터넷에서 임의로 파일을 다운로드하지 않습니다.' },
        { title: '복호화하거나 해제하지 않습니다', body: '보호된 파일은 열 수 없습니다. 도구에는 암호 해제나 우회 기능이 없으며 다른 도구를 불러 이런 작업을 하지도 않습니다.' },
        { title: '인용문에는 한도가 있습니다', body: '인용문 하나의 길이와 한 권에서 누적되는 인용량에는 제한이 있으며 REZICS API가 이를 관리합니다.' },
      ],
    },
    zone: {
      label: 'Zone',
      headline: 'Wiki 하나가 작품의 Zone입니다.',
      lead: '정보 상자와 목록의 각 항목은 필터와 목록, 다른 Zone이 읽는 데이터와 같습니다. 여기서 이름을 수정하면 다른 곳에도 반영됩니다.',
      tiles: [
        { name: '작품 페이지', line: '작품 페이지가 중심이며 Wiki는 그 안에 있습니다' },
        { name: '인물' },
        { name: '장소' },
        { name: '연표' },
        { name: '챕터 안내' },
        { name: '관계' },
      ],
      caption: '예시: 작품 Wiki의 페이지 구성.',
    },
    review: {
      label: '검토',
      headline: 'AI 에이전트가 제안하고 사람이 검토합니다.',
      lead: '에이전트가 찾은 인물과 장소를 그래프의 기존 데이터와 비교하고 결과를 네 가지로 나눕니다.',
      states: [
        { title: '일치', body: '그래프에 이미 있는 인물이나 장소와 일치합니다.' },
        { title: '추가', body: '그래프에 없으면 새 항목 생성을 제안합니다.' },
        { title: '불확실', body: '가능한 대상이 여럿이면 검토자가 결정합니다.' },
        { title: '확인할 수 없음', body: '현재 비교 결과를 가져올 수 없습니다. 검토할 때 확인합니다.' },
      ],
      rules: [
        '비교 결과도 제안으로 처리하며 두 항목을 자동으로 병합하지 않습니다.',
        '새 챕터 제안이 이미 승인된 내용을 조용히 삭제하지 않습니다. 항목을 철회하려면 이유를 밝혀야 합니다.',
        '인용 위치를 확인할 수 있습니다. 검토자가 같은 판본의 파일을 가지고 있으면 원문과 구간별로 대조할 수 있습니다.',
        '에이전트의 항목 초안 작성과 생성 텍스트 허용 여부는 커뮤니티마다 정합니다. 별도 설정이 없으면 Wiki는 사실과 구조만 받습니다.',
        '독자에게 표시되는 모든 항목은 사람이 먼저 검토합니다.',
      ],
    },
    finaleLead: '같은 작품의 여러 책을 구분해 기록합니다.',
  },

  editions: {
    hero: {
      headline: '한 작품에 여러 권의 책이 연결될 수 있습니다.',
      lede: '원문과 번역본, 페이퍼백과 전자책, 합본과 웹 연재를 각각 기록해 같은 작품에 연결합니다. 보유한 판본을 확인하고 시리즈 진행 상황을 정리할 수 있습니다.',
      alt: '크기가 다른 녹색 종이가 왼쪽 아래를 맞춰 겹쳐 있고 그중 한 장은 연한 파란색입니다.',
    },
    releases: {
      label: '네 가지 발매',
      headline: '각 발행의 유형을 표시합니다.',
      lead: '한 권을 세 상점에서 판매해도 판본 기록은 하나이며 구매처 세 곳을 첨부합니다. 무단 전재는 별도로 기록해 정식 발행본에 합치지 않습니다.',
      kinds: [
        { title: '정식 출판', body: '출판사의 단행본과 페이퍼백, 전자책, 한정판입니다. 실제 출간된 내용을 기록하며 이후 내용을 추가하지 않습니다.' },
        { title: '온라인 공개', body: '웹 연재도 실제 발행으로 기록합니다. 원래 주소와 날짜가 표시된 보관본을 보존합니다.' },
        { title: 'REZICS 고정판', body: 'REZICS에서 특정 시점의 콘텐츠를 판본으로 고정하며 이후 수정은 반영되지 않습니다.' },
        { title: '가상판', body: '특정 발행본의 구조에 맞춰 사용자의 번역을 기록하고 번역 범위를 명시합니다. 예를 들어 전체 100장 중 1장부터 20장까지입니다. 실제 출간된 판본을 뜻하지는 않습니다.' },
      ],
    },
    translations: {
      label: '번역본',
      headline: '번역본마다 번역자와 출처를 표시합니다.',
      rows: [
        { title: '공식 번역본', body: '출판사 번역본은 별도의 발행으로 기록하고 번역자와 권리를 표시합니다.' },
        { title: '팬 번역', body: '번역자에게 귀속되며 원문의 특정 판본에 대응합니다. 공식 번역으로 표시하지 않습니다.' },
        { title: '기계 번역', body: '다른 번역본처럼 새로운 텍스트로 등록하고 기계 번역임을 표시합니다.' },
        { title: 'AI 지원', body: '사람이 주도한 번역에 AI를 사용한 경우에도 이를 표시해 독자가 필터링할 수 있습니다.' },
      ],
      stateLabel: '번역 구간마다 상태 표시',
      states: ['번역 대기', '번역 완료', '검토 완료', '최종 확정'],
      notes: [
        '원문 일부가 바뀌면 해당 번역본에 업데이트 필요 표시가 붙습니다. 번역본은 삭제되거나 새 텍스트에 조용히 연결되지 않습니다.',
        '사용자 번역은 처음에 본인만 볼 수 있습니다. 공개하려면 근거가 필요합니다. 원작이 퍼블릭 도메인이거나 번역을 허용하는 오픈 라이선스가 적용된 경우, 작가가 동의한 경우 또는 작가가 미리 번역 권한을 제공한 경우에만 공개할 수 있습니다.',
        '작가는 원작을 특정 번역본에 연결하지 않도록 요청할 수도 있습니다.',
        '번체를 간체로 조용히 바꾸지 않습니다. 변환한 텍스트에는 변환 사실을 표시하며 고유명사는 바꾸지 않습니다.',
      ],
    },
    sameWork: {
      label: '같은 작품인가, 다른 작품인가',
      headline: '어떤 수정까지 같은 작품으로 볼 수 있을까요?',
      lead: '판단 기준은 이야기의 앞뒤가 서로 맞는지, 의도적으로 다시 쓴 것인지입니다. 분량과 언어, ISBN, 홍보 문구는 기준이 아닙니다.',
      rows: [
        { title: '오탈자 수정, 소폭 수정과 충돌하지 않는 챕터 추가', body: '같은 작품으로 유지하고 판본과 발행을 따로 기록합니다.' },
        { title: '표시 순서는 바뀌었지만 사건은 그대로', body: '같은 작품으로 유지하고 두 순서를 모두 보존합니다.' },
        { title: '순서를 바꿔 인과가 달라지거나 결말이 서로 맞지 않음', body: '별도 작품으로 등록하고 “개작” 관계로 연결합니다.' },
        { title: '주인공의 이름 변경', body: '별칭만 바뀐 경우 같은 작품으로 유지합니다.' },
        { title: '처음부터 다시 쓴 이야기', body: '별도 작품으로 등록하고 “리부트” 관계로 연결합니다.' },
        { title: '온라인판이 삭제되거나 온라인 전용 후속편이 있음', body: '수록 범위와 이용 가능 여부만 달라지므로 별도 작품을 만들지 않습니다.' },
      ],
      caption: '웹 연재를 어디까지 읽었는지가 개작 출간본을 읽은 것으로 처리되지는 않습니다. 양쪽 챕터의 대응은 사람이 확인해야 합니다.',
    },
    orders: {
      label: '순서',
      headline: '출간 순서와 읽는 순서는 다를 수 있습니다.',
      lead: '예시: 같은 시리즈의 두 가지 순서. 각 권의 식별자는 그대로 유지됩니다.',
      rows: ['출판 순서', '추천 독서 순서'],
      tiles: ['1권', '외전', '2권', '3권'],
      reading: [0, 2, 1, 3],
      notes: [
        { title: '합본', body: '합본은 여러 권을 수록하는 하나의 발행입니다. 각 권은 별도 작품으로 유지하며 평점과 진행 상황도 따로 기록합니다.' },
        { title: '하위 시리즈', body: '시리즈 안의 하위 시리즈는 각각 1권부터 번호를 매길 수 있으며 전체 순서를 별도로 연결합니다.' },
        { title: '시리즈 완독', body: '시리즈 진행 상황은 필수 권만 기준으로 계산합니다. 선택 사항인 외전과 특별편은 읽어도 완독 여부에 영향을 주지 않습니다.' },
        { title: '시리즈 상태', body: '현재 발행분을 따라잡음, 발행된 분량을 모두 읽음, 시리즈 완결, 챕터 대응 미확정을 구분해 표시합니다.' },
      ],
    },
    isbn: {
      text: 'ISBN을 입력하면',
      sub: '해당 판본을 찾습니다.',
      note: 'ISBN은 특정 발행에 속하며 작품 자체를 나타내지 않습니다. ISBN이나 전자책 항목에서 해당 판본과 수록된 텍스트 또는 번역본, 상위 작품을 찾을 수 있습니다. 예를 들어 《어떤 마술의 금서목록》의 일본어 원작과 번체 중국어판, 영어판은 각각 별도의 발행이며 ISBN은 달라도 같은 작품을 가리킵니다.',
    },
    finaleLead: '이어서 나의 기록을 살펴봅니다.',
  },

  library: {
    hero: {
      headline: '읽은 방식을 그대로 기록합니다.',
      lede: '읽다가 멈추거나 2년 뒤 다시 읽거나 출퇴근길에 오디오북으로 바꿔 듣는 경우를 REZICS가 각각 기록합니다. 기본적으로 본인만 볼 수 있으며 원할 때 전체 기록을 가져갈 수 있습니다.',
      alt: '길이가 다른 짙은 녹색 종이 세 줄이 나란히 있고 가장 짧은 줄 옆에 작은 연녹색 종이 한 장이 놓인 모습.',
    },
    reads: {
      label: '독서 기록',
      headline: '같은 책을 세 번 읽으면 기록도 세 개입니다.',
      lead: '멈췄으면 중단, 그만뒀으면 중도 포기로 기록하며 둘 다 완독으로 처리하지 않습니다. 다시 읽기는 첫 기록을 덮어쓰지 않고 새로 기록합니다.',
      rows: [
        { title: '첫 번째', body: '종이책으로 20장까지 읽고 중단.', share: 0.62 },
        { title: '두 번째', body: '전자책으로 읽다가 후반부는 오디오북으로 듣고 완독.', share: 1 },
        { title: '세 번째', body: '다시 읽는 중.', share: 0.24 },
      ],
      caption: '예시: 각 기록은 실제로 읽은 판본에 연결됩니다. 다른 판본으로 다시 읽으면 새로 기록합니다.',
    },
    move: {
      label: '가져오기와 내보내기',
      headline: '읽기 기록을 가져오고 내보낼 수 있습니다.',
      steps: [
        { title: '내보낸 파일 선택', body: '다른 서비스에서 내보낸 파일이나 직접 정리한 스프레드시트.' },
        { title: '읽은 판본에 연결', body: '각 기록을 실제 판본에 연결하며 제목만으로 추측하지 않습니다. 일치하지 않는 데이터는 다른 책에 억지로 연결하지 않습니다.' },
        { title: '기존 진행 상황 유지', body: '읽기 상태와 날짜, 평점, 리뷰를 일치하는 데이터에 맞춰 가져옵니다.' },
        { title: '언제든 전체 내보내기', body: '기록과 소장 도서, 평점, 리뷰를 다시 가져올 수 있는 파일로 내보냅니다.' },
      ],
      retention: '업로드한 파일은 본인만 사용할 수 있습니다. 원본 필드는 업로드 후 7일 동안 보관하며 기간이 지나면 열람과 내보내기를 중단하고 삭제를 예약합니다. 보관하려면 먼저 라이브러리를 내보내세요.',
    },
    continue: {
      text: 'REZICS를 열면',
      sub: '다음 챕터를 먼저 확인합니다.',
      note: '홈페이지 상단의 “이어서 읽기”에서 아직 읽지 않은 다음 챕터를 바로 열 수 있습니다.',
    },
    shelf: {
      label: '책장',
      headline: '책장에 둔 책도 함께 기록합니다.',
      rows: [
        { title: '소장 도서', body: '책장에 있는 책이 어느 판본인지 명확히 기록합니다. 구매했어도 읽지 않았다면 읽지 않은 상태입니다.' },
        { title: '대여와 대출', body: '누구에게 빌려줬는지와 빌려준 날, 반납 예정일, 실제 반납일을 각각 기록합니다. 상대 이름은 직접 입력하며 다른 계정과 연결되지 않습니다.' },
        { title: '구절 메모', body: '비공개 메모를 특정 판본의 특정 구간에 연결합니다. 판본을 바꿔도 메모는 원래 구간을 가리킵니다.' },
        { title: '읽는 중이면 팔로우', body: '책을 “읽는 중”이나 “읽고 싶음”으로 표시하면 팔로우됩니다. 읽는 언어로 새 챕터나 판본이 나오면 알림을 받습니다.' },
        { title: '목록', body: '소설과 만화, 게임을 한 목록에 담고 순서를 정하거나 메모를 추가한 뒤 내보낼 수 있습니다.' },
      ],
    },
    privacy: {
      label: '개인정보 보호',
      headline: '읽기 기록은 비공개입니다.',
      rows: [
        { title: '기본적으로 비공개', body: '직접 공유하기로 선택하지 않는 한 초안과 읽기 기록은 공개되지 않습니다.' },
        { title: '광고 프로필을 만들지 않음', body: 'REZICS는 비공개 읽기 기록으로 광고 프로필을 만들거나 마케팅에 사용할 민감한 특성을 추측하지 않습니다.' },
        { title: '학습 동의와 무관', body: '계정을 만들거나 서비스 약관에 동의하거나 AI 기능을 사용해도 기록을 모델 학습에 쓰는 데 동의한 것은 아닙니다.' },
        { title: '운영 권한을 넘길 때', body: '계정이나 커뮤니티 운영 권한을 다른 사람에게 맡겨도 읽기 기록은 공유되지 않습니다.' },
      ],
    },
    finaleLead: '이제 창작을 시작합니다.',
  },

  serial: {
    hero: {
      headline: '챕터를 쓰고 읽습니다.',
      lede: '웹 연재와 라이트 노벨 연재본, 직접 쓰는 장편을 REZICS에서 집필하고 예약 및 공개할 수 있습니다. 원고를 잃어버릴 걱정이 없으며 독자는 언제나 마지막으로 읽은 곳에서 이어갈 수 있습니다.',
      alt: '긴 짙은 녹색 종이를 페이지처럼 접고 뒷부분은 펼쳐 두었습니다. 접힌 자리에 작은 연녹색 종이가 놓여 있습니다.',
    },
    safe: {
      label: '원고',
      headline: '원고를 안전하게 보관합니다.',
      rows: [
        { title: '저장할 때마다 새 버전', body: '모든 버전을 보존해 비교하거나 새 버전으로 복원할 수 있습니다. 챕터를 비우면 빈 버전으로 저장되며 빈 챕터는 공개할 수 없습니다.' },
        { title: '내 시간대에 맞춰 예약', body: '현지 공개 시간을 설정하면 예약한 챕터가 서버에서 정시에 공개됩니다. 브라우저를 닫아도 그대로 진행됩니다.' },
        { title: '협업자 권한 네 가지', body: '읽기와 제안, 편집, 공개 권한을 따로 부여합니다. 원고를 수정할 수 있어도 공개 권한이 있는 것은 아닙니다.' },
        { title: '작가의 말은 본문과 별도', body: '챕터 끝의 작가의 말은 별도 항목입니다. 글자 수에 포함되지 않고 번역되거나 이후 발행본에 수록되지 않습니다.' },
      ],
    },
    mirror: {
      label: '작가와 독자',
      headline: '작가의 작업이 독자에게 미치는 영향.',
      rows: [
        { title: '12장 게시', body: '작품을 팔로우하는 독자는 읽는 언어로 새 챕터가 나오면 알림을 받습니다.' },
        { title: '3장 수정', body: '이전 댓글은 당시 판본의 해당 구간을 계속 가리킵니다.' },
        { title: '5장을 단편집에 포함', body: '텍스트와 토론은 하나로 유지하고 두 곳의 읽기 진행 상황은 각각 기록합니다.' },
        { title: '13장을 게시할 때', body: '아직 읽지 않은 독자의 피드에는 해당 챕터의 스포일러가 표시되지 않습니다.' },
      ],
      notes: [
        '독자는 글자 크기와 줄 너비, 글꼴, 들여쓰기, 색상, 중일문 간격을 직접 조정할 수 있습니다.',
        '일본어 작품은 세로쓰기와 후리가나, 강조점을 지원합니다.',
        '독자가 작가에게 남긴 의견은 작가 전용 받은 편지함으로 전달됩니다.',
      ],
    },
    ai: {
      label: 'AI 사용 표시',
      headline: 'AI 사용 여부와 범위를 정확히 표시합니다.',
      rows: [
        { title: '사용하지 않음', body: '이 텍스트에는 생성형 AI가 실질적으로 관여하지 않았습니다.' },
        { title: '보조', body: '사람이 주로 작성했으며 구상과 개작, 편집 또는 일부 콘텐츠에 AI를 사용했습니다.' },
        { title: '생성', body: '기계 번역을 포함해 텍스트 대부분을 AI가 생성했습니다. 이후 사람이 수정했어도 동일하게 표시합니다.' },
      ],
      notes: ['사람이 검토했는지는 별도로 기록합니다. 독자는 이 표시를 기준으로 필터링할 수 있습니다.', '표시는 작가의 선언입니다. REZICS는 AI 감지 결과를 판정의 근거로 사용하지 않습니다.'],
    },
    world: {
      label: '세계관',
      headline: '세계관 설정을 원고와 함께 관리합니다.',
      lead: '템플릿을 사용해 인물과 장소, 조직, 사건, 물품, 설정을 정리하고 비공개로 보관합니다. 선택한 페이지만 작품 Wiki에 공개하며 비공개 수정 기록은 공개되지 않습니다.',
      items: [
        '직접 그린 지도에 장소를 표시합니다.',
        '인물 관계를 그래프로 그리거나 텍스트 목록으로 확인할 수 있습니다.',
        '이야기 속 달력에 맞춰 타임라인을 만들고 날짜가 확실하지 않은 사건도 기록할 수 있습니다.',
        '일관성 도구는 메모와 원고 사이의 모순만 표시하며 챕터를 대신 작성하지 않습니다.',
      ],
    },
    backup: {
      text: '원고 전체를',
      sub: '언제든 전체 데이터를 가져갈 수 있습니다.',
      note: '수정 기록과 메모, 세계관 설정을 다시 가져올 수 있는 백업 파일로 내보낼 수 있습니다. 내보내기 기능과 핵심 세계관 설정에는 유료 요금제가 필요하지 않습니다.',
    },
    finaleLead: '작품을 완성해 독자에게 전달합니다.',
  },

  publish: {
    hero: {
      headline: '책을 판매하고 파일은 독자에게 전달합니다.',
      lede: '계약 창작자는 권한이 확인된 전자책과 소규모 게임, 비주얼 노벨을 REZICS에서 직접 판매합니다. 독자는 DRM 없는 파일을 구매하며 상점 페이지는 작품의 토론과 Wiki 옆에 있습니다.',
    },
    buy: {
      label: '구매',
      headline: '독자는 판본을 선택해 책을 구매합니다.',
      steps: [
        { title: '판본 선택', body: '언어와 판본을 선택하고 번역자를 확인한 뒤 미리 읽어볼 수 있습니다.' },
        { title: '한 번 결제', body: '한 번 결제하며 구독이 아닙니다. 구매 전 페이지에서 이용 권한을 확인할 수 있습니다.' },
        { title: '파일 보관', body: 'DRM 없는 EPUB 또는 PDF를 다운로드합니다. 런처나 DRM 인증 절차가 필요하지 않습니다.' },
        { title: '업데이트 받기', body: '작가가 약속된 업데이트를 공개하면 라이브러리에서 알림을 받습니다. 영수증을 보관하고 구매 약관에 따라 파일을 다시 다운로드할 수 있습니다.' },
      ],
      caption: 'DRM이 없어도 재판매나 배포가 허용되는 것은 아닙니다. 사용 조건은 구매 전에 명시된 라이선스를 따릅니다.',
    },
    statement: {
      label: '정산 내역',
      headline: '창작자 정산서에 모든 공제 내역을 표시합니다.',
      rows: [
        { title: '독자 결제', body: '거래에서 실제로 받은 금액.' },
        { title: '세금', body: '대신 징수하고 납부한 판매세와 부가가치세 등 거래세.' },
        { title: '결제 수수료', body: '실제로 발생하고 영수증으로 확인할 수 있는 결제 수수료.' },
        { title: '환불과 분쟁 금액', body: '환불과 거래 취소, 지급 거절.' },
        { title: '순수익', body: '합의된 거래 비용을 공제한 뒤 창작자와 REZICS가 계약에 따라 배분합니다.' },
      ],
      note: '서버와 급여, 마케팅 등 운영 비용은 이 수익에서 공제하지 않습니다. 같은 비용을 두 번 공제하지 않습니다.',
    },
    distributed: {
      label: '배포 범위',
      headline: '여기서 발행하는 항목과 발행하지 않는 항목.',
      rows: [
        { title: '전자책', body: '권한이 확인된 DRM 없는 EPUB 또는 PDF.' },
        { title: '소규모 게임과 비주얼 노벨', body: '다운로드 가능한 판본과 실행에 필요한 플랫폼 또는 계정을 구매 전에 명시합니다.' },
        { title: '미리 읽기', body: '일부를 먼저 읽고 구매 여부를 결정할 수 있습니다.' },
        { title: '영수증과 환불', body: '구매마다 영수증이 발급되며 환불을 신청할 수 있습니다.' },
      ],
      policy: [
        { title: '계약 창작자', body: '계약된 창작자의 작품만 발행하며 누구나 등록할 수 있는 장터가 아닙니다.' },
        { title: '판매하지 않는 항목', body: '노골적인 성적 콘텐츠와 R18 또는 R18G 등급 작품.' },
      ],
    },
    community: {
      text: '스토어 페이지는',
      sub: '작품 커뮤니티와 함께 제공됩니다.',
      note: '구매 전에 평점과 토론, Wiki를 확인할 수 있습니다. 구매 후에는 판본과 진행 상황, 영수증이 같은 작품에 연결됩니다. 독자는 창작자를 팔로우해 그가 쓴 소설과 만든 게임을 볼 수 있습니다. 창작자는 집계된 판매 데이터만 볼 수 있으며 독자의 읽기 기록은 볼 수 없습니다.',
    },
    finaleLead: '원작을 각색한 애니메이션도 같은 작품에 연결됩니다.',
  },
};

export default {
  id: 'books',
  base: '/books/',
  name: '라이브러리',
  theme: { kind: 'books' },
  next: 'anime',
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: '라이브러리: 읽은 곳까지 기록',
        description:
          '작품마다 하나의 페이지를 제공하고 원문과 번역본, 단행본, 합본을 명확히 구분합니다. 라이브러리가 읽은 권수를 기록해 다음 책을 알려주며 Wiki와 토론은 읽은 챕터까지만 표시합니다.',
      },
    },
    {
      slug: 'work',
      label: '작품 페이지',
      meta: {
        title: '작품 페이지: 작품의 중심',
        description:
          '작품 페이지 하나에서 작품 정보와 평점, 사용자의 판본 및 진행 상황, 권과 각색 작품, Wiki 요약, 토론을 확인할 수 있습니다. 상단에는 현재 상태에 맞는 주요 버튼 하나만 표시합니다.',
      },
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: {
        title: 'Wiki+: AI 에이전트로 Wiki+ 만들기',
        description:
          '텍스트를 보유한 독자는 자신의 컴퓨터에서 오픈 소스 도구를 실행해 AI 에이전트로 인물과 장소, 사건을 챕터별로 정리할 수 있습니다. 검토 후 작품 Wiki에 게시하며 독자는 읽은 부분까지만 볼 수 있습니다.',
      },
    },
    {
      slug: 'editions',
      label: '판본과 시리즈',
      meta: {
        title: '판본과 시리즈: 모든 판본을 명확히 구분',
        description:
          '단행본과 합본, 전자책, 웹 연재, 각 언어 번역본은 REZICS에서 같은 작품의 별도 발행으로 기록합니다. 시리즈는 권수대로 정리하며 줄거리를 개작한 발행본은 별도 작품입니다.',
      },
    },
    {
      slug: 'library',
      label: '독서 기록',
      meta: {
        title: '독서 기록: 그대로 기록하고 가져가기',
        description:
          '읽기마다 별도로 기록합니다. 재독과 중단, 중도 포기를 구분하며 종이책에서 오디오북으로 바꿔도 같은 읽기 기록입니다. 소장과 대여는 따로 관리합니다. 기록은 기본적으로 비공개이며 다른 서비스에서 가져오거나 전체를 내보낼 수 있습니다.',
      },
    },
    {
      slug: 'serial',
      label: '연재',
      meta: {
        title: '연재: 한 챕터씩 쓰고 읽기',
        description:
          '작가는 저장할 때마다 이전 상태로 복원할 수 있으며 시간대에 맞춰 챕터를 예약할 수 있습니다. 브라우저를 닫아도 정시에 공개됩니다. 독자는 마지막 위치에서 이어 읽고 아직 읽지 않은 챕터의 스포일러를 보지 않습니다.',
      },
    },
    {
      slug: 'publish',
      label: '출판',
      meta: {
        title: '출판: 독자에게 직접 판매',
        description:
          '계약 창작자는 권한이 확인된 전자책과 소규모 게임, 비주얼 노벨을 REZICS에서 판매합니다. DRM 없는 파일과 미리 보기, 업데이트, 재다운로드를 제공하며 정산서에 세금과 수수료, 환불을 항목별로 표시합니다.',
      },
    },
  ],
  strings,
} satisfies MiniSite<BooksStrings>;
