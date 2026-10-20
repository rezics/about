// The games site (遊戲): every visible string of /games/ and its six inner pages.
// Design record: src/sites/games/SITE.md (section "v3"); sources for every claim:
// src/sites/games/facts.md. Example data (one fictional adventure game, its releases, versions
// and playthroughs) is always captioned 示意 on screen; it describes no real game. The one real
// work named is 《魔法禁書目錄》, text only, as an example of how relations are recorded.
import type { KindId, MiniSite } from '../schema';

export type Lang = 'zh' | 'ja' | 'en';
export type Platform = 'pc' | 'console' | 'handheld' | 'mobile';
export type Edition = 'std' | 'deluxe' | 'complete';

export interface Titled {
  title: string;
  body: string;
}

/** A section: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}

/** A large statement: the first half in ink, the second half muted. */
export interface Said {
  text: string;
  more: string;
  /** A sentence or two in body size under the statement. */
  note?: string;
}

/** One release of the example game, as the release filter shows it. */
export interface ExampleRelease {
  id: string;
  platform: Platform;
  edition: Edition;
  /** Shown inside the table cell when a cell holds more than one release (regions). */
  region?: string;
  langs: Lang[];
  /** A state instead of languages (announced, no date yet). */
  state?: string;
}

export type GamesStrings = {
  /** The line under every page's closing statement, above 前往 REZICS. */
  closingBody: string;
  /** Alternative text of the paper still-life photographs (public/images/sites/games/). */
  pictures: Record<'hero' | 'store' | 'library' | 'guides' | 'creators', string>;
  example: {
    langNames: Record<Lang, string>;
    platforms: Record<Platform, string>;
    editions: Record<Edition, string>;
    releases: ExampleRelease[];
  };
  landing: {
    hero: { headline: string; lede: string };
    releases: Head & { items: (Titled & { id: string })[]; caption: string; link: string };
    versions: Said;
    store: Head & { link: string };
    pages: Head & { lines: Record<string, string> };
    connections: Head & { tiles: { to: KindId; line: string }[] };
    closing: string;
  };
  releases: {
    hero: { headline: string; lead: string };
    filter: Head & {
      groups: { lang: string; platform: string };
      clear: string;
      none: string;
      result: string;
      resultNone: string;
      corner: string;
      caption: string;
    };
    states: Head & { items: Titled[] };
    languages: Head & { items: Titled[] };
    bundles: Head & { tiles: Titled[]; caption: string };
    requirements: Head & { tiles: Titled[] };
    offers: Said;
    closing: string;
  };
  store: {
    hero: { headline: string; lead: string };
    checkout: Head & { items: Titled[] };
    purchase: Head & { steps: Titled[] };
    keep: Head & { lead: string; more: string };
    privacy: Said;
    refuses: Head & { items: Titled[] };
    closing: string;
  };
  library: {
    hero: { headline: string; lead: string };
    status: Head & { items: Titled[] };
    slots: Head & { columns: [string, string, string]; rows: { slot: string; release: string; state: string }[]; caption: string };
    together: Head & { tiles: { to: KindId; name: string; at: string }[]; caption: string };
    playtime: Head & { items: Titled[]; note: string };
    takeout: Said;
    closing: string;
  };
  reviews: {
    hero: { headline: string; lead: string };
    versions: Head & { tiles: Titled[]; caption: string };
    who: Head & { items: Titled[] };
    targets: Head & { tiles: Titled[] };
    rules: Head & { items: Titled[] };
    talk: Said;
    closing: string;
  };
  guides: {
    hero: { headline: string; lead: string };
    fog: Head;
    guides: Head & { lead: string; more: string };
    rules: Head & { items: Titled[] };
    adaptations: Head & { lead: string; chain: { to: KindId; name: string; line: string; rel?: string }[]; note: string; caption: string };
    zone: Said;
    closing: string;
  };
  creators: {
    hero: { headline: string; lead: string };
    rights: Head & { items: Titled[] };
    ledger: Head & { rows: { label: string; op?: string; total?: boolean }[]; note: string; reserve: string; caption: string };
    name: Head & { tiles: { to?: KindId; name: string; role: string }[]; caption: string };
    home: Head & { lead: string; more: string };
    rules: Said;
    closing: string;
  };
};

const strings: GamesStrings = {
  closingBody: '같은 계정으로 버전을 찾고 플레이 기록과 리뷰를 남기며 독립 창작자의 게임을 구매할 수 있습니다.',
  pictures: {
    hero: '따뜻한 흰 종이 위에 큰 파란 종이가 놓여 있고, 한쪽 모서리에서 여러 농도의 파란색, 보라색, 청록색 종이가 부채처럼 펼쳐집니다.',
    store: '연한 파란 종이가 파란 종이에 난 틈을 지나며 아래쪽이 살짝 말려 있습니다.',
    library: '파란 종이를 얕은 상자 모양으로 접고 앞면에 가느다란 틈을 냈습니다. 파란색, 연한 파란색, 장밋빛, 초록색 종이가 틈에 서 있고 마지막 틈은 비어 있습니다.',
    guides: '긴 파란 종이를 여러 번 접었습니다. 앞의 세 면은 펼쳐져 있고 나머지는 쌓여 있으며 위에는 흰 종이가 놓여 있습니다.',
    creators: '파란 종이판을 작은 정자로 접어 세웠고, 옆에는 보라색 종이와 연한 파란 종이가 놓여 있습니다.',
  },
  example: {
    langNames: { zh: '중국어 번체', ja: '일본어', en: '영어' },
    platforms: { pc: 'PC', console: '가정용 콘솔', handheld: '휴대용 게임기', mobile: '모바일' },
    editions: { std: '일반판', deluxe: '디럭스판', complete: '완전판' },
    releases: [
      { id: 'pc-std', platform: 'pc', edition: 'std', langs: ['zh', 'ja', 'en'] },
      { id: 'pc-deluxe', platform: 'pc', edition: 'deluxe', langs: ['zh', 'ja', 'en'] },
      { id: 'console-std', platform: 'console', edition: 'std', langs: ['ja', 'en'] },
      { id: 'console-complete', platform: 'console', edition: 'complete', langs: ['zh', 'ja', 'en'] },
      { id: 'handheld-asia', platform: 'handheld', edition: 'std', region: '아시아판', langs: ['zh', 'ja'] },
      { id: 'handheld-japan', platform: 'handheld', edition: 'std', region: '일본판', langs: ['ja'] },
      { id: 'handheld-complete', platform: 'handheld', edition: 'complete', langs: ['ja'] },
      { id: 'mobile-std', platform: 'mobile', edition: 'std', langs: [], state: '공개됨' },
    ],
  },

  landing: {
    hero: {
      headline: '게임과 각 버전을 정확히 기록합니다.',
      lede: '플랫폼별 출시, 버전, 언어를 따로 기록하고 평점에는 어느 버전인지 표시합니다. 공략과 Wiki+는 같은 게임에 연결됩니다. 독립 창작자에게서 소장할 수 있는 게임 파일을 구매할 수도 있습니다.',
    },
    releases: {
      label: '출시',
      headline: '같은 게임의 각 출시를 따로 기록합니다.',
      lead: 'PC, 가정용 콘솔, 휴대용 게임기, 모바일 출시를 각각 기록합니다. 지역판, 디럭스판, 완전판도 별도 항목입니다. 각 항목에는 언어, 요구 사항, 판매 기록을 표시합니다.',
      items: [
        { id: 'handheld-asia', title: '휴대용 게임기, 아시아판', body: '텍스트: 중국어 번체, 일본어. 지역: 아시아. 일본판은 별도로 기록하며 텍스트는 일본어만 있습니다.' },
        { id: 'pc-std', title: 'PC, 일반판', body: '텍스트와 자막: 중국어 번체, 일본어, 영어. 음성: 일본어. 세 언어를 따로 기록합니다.' },
        { id: 'console-complete', title: '가정용 콘솔, 완전판', body: '텍스트: 중국어 번체, 일본어, 영어. 콘텐츠: 본편과 모든 확장 콘텐츠를 각각의 페이지와 평점으로 관리합니다.' },
        { id: 'mobile-std', title: '모바일, 일반판', body: '언어: 미상. 상태: 공개됨. 정보가 확인되지 않았으면 다른 플랫폼의 언어를 대신 표시하지 않습니다.' },
      ],
      caption: '예시: 가상의 어드벤처 게임 출시 네 건.',
      link: '플레이할 수 있는 버전 찾기',
    },
    versions: {
      text: '평점은 버전별로 기록하고 다운로드 수로 순위를 매기지 않습니다.',
      more: '확인할 수 없는 정보는 추측하지 않고 “미상”으로 표시합니다.',
    },
    store: {
      label: '스토어',
      headline: '구매한 게임 파일은 직접 보관합니다.',
      lead: 'REZICS 스토어는 계약을 맺은 독립 창작자의 게임과 비주얼 노벨을 판매합니다. DRM과 런처가 필요하지 않습니다. 창작자는 저작권을 보유하고 정산서에는 각 공제 항목이 표시됩니다. 플레이어는 같은 페이지에서 평점, 토론, Wiki+를 확인할 수 있습니다.',
      link: '스토어와 구매 과정 보기',
    },
    pages: {
      label: '여섯 페이지',
      headline: '여섯 가지 정보를 한 페이지씩',
      lines: {
        releases: '출시 하나에서 언어, 플랫폼, 버전을 함께 필터링',
        store: '한 번 구매하고 구매 조건에 따라 다시 다운로드',
        library: '플레이한 플랫폼을 회차별로 기록',
        reviews: '평점마다 버전과 평가자 그룹 표시',
        guides: '진행 상황에 맞게 표시하고 각색 작품과 연결',
        creators: '창작자는 저작권을 보유하고 정산서에는 공제 내역 표시',
      },
    },
    connections: {
      label: '관련 종류',
      headline: '게임과 연결되는 다섯 가지',
      lead: '각색, 원작, 같은 창작자를 통해 게임과 다른 종류의 작품이 연결됩니다. 원작 소설부터 게임까지 따라가고, 소설 읽기와 게임 플레이 진행 상황은 따로 기록합니다.',
      tiles: [
        { to: 'visual-novels', line: '언어, 플랫폼, 수록 범위로 출시 선택' },
        { to: 'books', line: '게임의 원작과 게임에서 파생된 소설' },
        { to: 'anime', line: '애니메이션을 게임으로, 게임을 애니메이션으로 각색' },
        { to: 'manga', line: '같은 이야기의 만화를 게임과 연결' },
        { to: 'software', line: '엔진, 제작 도구, 모드의 버전을 게임과 연결' },
      ],
    },
    closing: '다음 게임은 버전부터 확인하세요.',
  },

  releases: {
    hero: {
      headline: '플레이할 수 있는 버전 찾기',
      lead: '원하는 언어와 가진 기기가 같은 출시 항목에 있어야 합니다. REZICS는 플랫폼, 지역, 버전을 따로 기록하고 필터링할 때 함께 비교합니다.',
    },
    filter: {
      label: '필터',
      headline: '조건은 같은 출시 항목에서 확인합니다.',
      lead: '중국어 번체와 휴대용 게임기를 선택했다면 두 조건을 모두 충족하는 출시만 남습니다. 다른 버전에 중국어 번체가 있거나 다른 플랫폼에 휴대용 버전이 있어도 포함되지 않습니다.',
      groups: { lang: '언어', platform: '플랫폼' },
      clear: '조건 지우기',
      none: '이 버전 없음',
      result: '조건에 맞는 출시: {count}건',
      resultNone: '모든 조건을 충족하는 출시가 없습니다.',
      corner: '플랫폼 / 버전',
      caption: '예시: 가상의 어드벤처 게임 출시.',
    },
    states: {
      label: '출시 상태',
      headline: '공개부터 판매 종료까지 단계별 기록',
      lead: '날짜는 바뀌어도 기록을 덮어쓰지 않습니다. 게임을 팔로우하면 진행 상황을 알 수 있습니다.',
      items: [
        { title: '공개', body: '게임이나 버전을 공식 발표하고 출처를 첨부합니다.' },
        { title: '출시 예정', body: '출시일이 발표되었습니다. 예정일은 계획일 뿐 아직 출시된 것은 아닙니다.' },
        { title: '출시', body: '구매하고 플레이할 수 있으며 확인된 날짜를 표시합니다.' },
        { title: '연기', body: '날짜가 바뀌어도 이전 날짜는 기록에 남습니다.' },
        { title: '판매 종료', body: '판매 또는 제공이 중단되며 종료된 날짜를 표시합니다.' },
      ],
    },
    languages: {
      label: '언어',
      headline: '텍스트, 음성, 자막의 언어를 구분합니다.',
      lead: '“중국어 지원”은 자막만 있다는 뜻일 수도 있고 음성까지 있다는 뜻일 수도 있습니다. REZICS는 텍스트, 음성, 자막의 언어를 따로 기록합니다. 번역된 이름이 있어도 번역본이 있다는 뜻은 아닙니다. 중국어 이름이 있다고 중국어판이 있는 것은 아닙니다.',
      items: [
        { title: '공식 중국어', body: '출시사가 제공하며 실제로 포함된 출시 항목에 기록합니다.' },
        { title: '팬 번역', body: '제작 팀을 표시하고 기반 버전과 수록 범위를 명시합니다. 공식 번역으로 표시하지 않습니다.' },
        { title: '추가된 언어', body: '업데이트로 추가한 언어는 새로운 언어 버전으로 기록하고 출처를 연결합니다. 기존 출시 기록은 바꾸지 않습니다.' },
      ],
    },
    bundles: {
      label: '합본과 확장 콘텐츠',
      headline: '하나의 출시 항목에 여러 작품이 포함될 수 있습니다.',
      lead: '합본에 포함된 작품은 각각의 ID를 유지합니다. 구매는 출시 항목 하나로 기록하지만 평점과 토론은 각 작품에 남습니다.',
      tiles: [
        { title: '완전판', body: '본편과 모든 확장 콘텐츠 포함' },
        { title: '본편', body: '게임 자체이며 별도의 평점이 있습니다.' },
        { title: '확장 콘텐츠', body: '독립된 콘텐츠는 자체 페이지를 갖고 본편과 연결됩니다.' },
        { title: '사운드트랙', body: '작곡가의 작품으로 등록되는 음악 작품' },
        { title: '리메이크', body: '별도의 작품으로 등록하고 원작과 연결' },
        { title: '모드', body: '필요한 게임 버전을 명시' },
      ],
      caption: '예시: 완전판 한 건과 관련 작품. 콘텐츠를 바꾸지 않고 새 플랫폼으로 이식하면 같은 게임의 새 출시로 기록합니다.',
    },
    requirements: {
      label: '요구 사항',
      headline: '요구 사항에는 출처를 표시합니다.',
      lead: '같은 컴퓨터에서도 공식 사양과 실제 결과가 다를 수 있습니다. 두 정보를 나란히 두고 각각 출처와 날짜를 표시합니다.',
      tiles: [
        { title: '공식 사양', body: '최소 및 권장 사양, 출처, 적용되는 게임 버전 표시' },
        { title: '사용자 테스트', body: '하드웨어, 설정, 결과, 테스트 날짜 기록' },
        { title: '아직 확인되지 않음', body: '미상, 호환되지 않음, 정보 만료는 서로 다른 상태입니다.' },
      ],
    },
    offers: {
      text: '정보가 없는 곳에는',
      more: '“미상”이라고 표시합니다.',
      note: '스토어별, 지역별 판매 여부와 가격을 날짜가 포함된 기록으로 남겨 가격 변화를 확인할 수 있습니다. 확인할 수 없는 정보를 한 스토어의 가격으로 대신하지 않습니다.',
    },
    closing: '언어와 기기에 맞는 릴리스를 찾으세요.',
  },

  store: {
    hero: {
      headline: '한 번 구매하고 파일은 직접 보관하세요.',
      lead: '이곳의 게임과 비주얼 노벨은 REZICS와 계약한 독립 창작자의 작품입니다. DRM과 런처가 필요하지 않으며 구매한 게임은 구매 조건에 따라 다시 다운로드할 수 있습니다.',
    },
    checkout: {
      label: '결제 전',
      headline: '결제 전에 여덟 가지를 확인하세요.',
      lead: '모든 게임 페이지에 아래 정보가 표시되어 결제 전에 확인할 수 있습니다.',
      items: [
        { title: '버전과 언어', body: '구매할 버전과 포함된 언어를 표시합니다.' },
        { title: '호환성', body: '지원 플랫폼과 실행에 필요한 조건을 표시합니다.' },
        { title: '세금 포함 가격', body: '결제 전에 세금이 포함된 총액을 확인할 수 있습니다.' },
        { title: '판매자', body: '판매자와 결제 금액을 받는 곳을 표시합니다.' },
        { title: '라이선스', body: '구매 후 어떤 방식으로 사용할 수 있는지 표시합니다.' },
        { title: '환불 조건', body: '환불이 가능한 상황과 절차를 표시합니다.' },
        { title: '외부 계정', body: '다른 계정이나 실행 환경이 필요하면 구매 전에 표시합니다.' },
        { title: 'AI 사용 안내', body: '이미지, 텍스트, 번역에 AI를 사용했는지 창작자가 표시합니다.' },
      ],
    },
    purchase: {
      label: '한 번 구매',
      headline: '체험판부터 재다운로드까지, 구매 여섯 단계',
      lead: '게임 페이지에서 구매할 수 있고 평점, 토론, Wiki+도 함께 볼 수 있습니다.',
      steps: [
        { title: '체험', body: '체험판을 먼저 플레이한 뒤 결정' },
        { title: '결제', body: '한 번에 결제하고 영수증을 기록에 저장' },
        { title: '다운로드', body: '플랫폼에 맞는 파일 받기' },
        { title: '업데이트', body: '수정 버전에 변경 기록 첨부' },
        { title: '재다운로드', body: '컴퓨터를 바꿔도 로그인 후 다시 다운로드' },
        { title: '판매 종료 후', body: '일반 판매 종료 후에도 기존 조건에 따라 사용 권한 유지' },
      ],
    },
    keep: {
      label: '보관하는 항목',
      headline: '구매 후에도 간직하는 세 가지',
      lead: 'DRM 없는 게임 파일은 구매 조건에 따라 다시 다운로드할 수 있습니다. 영수증은 구매 기록에 보관하고 사용 권한과 조건도 함께 저장합니다.',
      more: 'DRM이 없다고 재판매하거나 배포할 수 있는 것은 아닙니다. 개인 사용 권한이 제공됩니다. 환불은 페이지에 표시된 조건에 따라 처리되며 각 지역의 소비자 보호법에 따른 권리도 적용됩니다.',
    },
    privacy: {
      text: '구매한 게임이 무엇인지',
      more: '창작자는 알 수 없습니다.',
      note: '창작자에게는 정산과 고객 지원에 필요한 정보만 전달됩니다. 구매만으로 플레이 기록, 목록, 기타 활동이 공개되지 않습니다.',
    },
    refuses: {
      label: '스토어 원칙',
      headline: '스토어에서 하지 않는 일',
      items: [
        { title: '런처를 요구하지 않음', body: '구매한 게임을 플레이하기 위해 REZICS 프로그램을 설치할 필요가 없습니다.' },
        { title: 'DRM을 추가하지 않음', body: 'REZICS는 파일에 활성화 확인을 추가하지 않습니다.' },
        { title: '성인 등급 작품을 판매하지 않음', body: 'R18과 R18G 작품은 다른 등급으로 표시하거나 패치로 분리해도 스토어에서 판매하지 않습니다.' },
        { title: '아무나 작품을 게시할 수 없음', body: '스토어의 게임은 REZICS와 계약한 창작자의 작품이며 권리를 먼저 확인합니다.' },
      ],
    },
    closing: '결제 전에는 분명하게, 결제 후에는 오래도록.',
  },

  library: {
    hero: {
      headline: '플랫폼과 종류를 아우르는 게임 서재',
      lead: 'PC, 콘솔, 휴대용 게임기, 모바일 게임을 한곳에 기록합니다. 플레이 회차마다 플랫폼과 버전을 표시하며 읽는 책과 보는 애니메이션도 함께 관리할 수 있습니다.',
    },
    status: {
      label: '상태',
      headline: '하고 싶은 게임부터 클리어까지 따로 기록합니다.',
      items: [
        { title: '플레이하고 싶음', body: '목록에 추가하면 게임을 팔로우합니다. 이해할 수 있는 언어의 새 버전이 나오면 알림을 받습니다.' },
        { title: '플레이 중', body: '챕터 순서가 있는 게임은 진행 상황과 버전을 기록합니다. 토론과 Wiki+는 이 기록에 따라 스포일러를 가립니다.' },
        { title: '일시 정지', body: '잠시 멈추는 것으로 포기가 아닙니다. 진행 상황을 보관해 두었다가 같은 지점에서 다시 플레이할 수 있습니다.' },
        { title: '클리어', body: '클리어 기록은 작품에 남깁니다. 완전판에 포함된 확장 콘텐츠는 각각 따로 기록합니다.' },
        { title: '포기', body: '더 플레이하고 싶지 않으면 포기로 표시합니다. 기록은 남으며 나중에 다시 시작할 수도 있습니다.' },
      ],
    },
    slots: {
      label: '플레이 기록',
      headline: '플레이할 때마다 기록을 남깁니다.',
      lead: '같은 게임을 두 번째 플레이하면 새 회차로 기록해 첫 기록을 덮어쓰지 않습니다. 회차마다 플랫폼, 버전, 진행 상황을 남깁니다.',
      columns: ['기록', '플랫폼과 버전', '상태'],
      rows: [
        { slot: '첫 회차', release: '휴대용 게임기, 아시아판', state: '클리어' },
        { slot: '두 번째 회차', release: 'PC, 1.2 버전', state: '플레이 중, 5장' },
        { slot: '세 번째 회차', release: '가정용 콘솔, 완전판', state: '일시 정지, 확장 콘텐츠' },
      ],
      caption: '예시: 보유 버전은 따로 기록합니다. 구매했다고 플레이한 것은 아닙니다.',
    },
    together: {
      label: '하나의 서재',
      headline: '책, 애니메이션, 만화, 게임을 한곳에서',
      lead: '종류에 맞는 단위로 진행 상황을 기록합니다. 목록에는 여러 종류를 함께 담을 수 있습니다. 여름에 할 게임 목록에 게임과 원작 소설, 각색 애니메이션을 넣고 순서와 메모를 정한 다음 전체를 내보낼 수 있습니다.',
      tiles: [
        { to: 'games', name: '게임', at: '5장' },
        { to: 'books', name: '소설', at: '3권' },
        { to: 'anime', name: '애니메이션', at: '8화' },
        { to: 'manga', name: '만화', at: '42화' },
        { to: 'visual-novels', name: '비주얼 노벨', at: '두 번째 루트' },
      ],
      caption: '예시: 한 사람의 서재에 담긴 다섯 종류와 각각의 진행 단위.',
    },
    playtime: {
      label: '플레이 시간',
      headline: '플랫폼과 플레이 방식별로 클리어 시간 계산',
      lead: '오늘 밤 게임을 시작할 시간이 충분한지 알려면 신뢰할 수 있는 시간이 필요합니다. REZICS는 플레이어가 자발적으로 제공한 기록만 계산에 사용합니다.',
      items: [
        { title: '플랫폼별', body: 'PC와 휴대용 게임기의 시간은 따로 계산합니다. 플랫폼을 쓰지 않은 기록은 별도 그룹으로 둡니다.' },
        { title: '플레이 방식별', body: '메인 스토리만 완료한 기록과 모든 요소를 수집한 기록은 따로 계산합니다.' },
        { title: '클리어 기록만 계산', body: '클리어하지 않았거나 시간을 입력하지 않은 기록은 평균에 포함하지 않습니다.' },
        { title: '기록 수 표시', body: '평균과 함께 중앙값이 속한 구간과 기록 수를 표시합니다.' },
      ],
      note: '플레이 시간은 기본적으로 비공개입니다. 직접 제공하기로 선택한 경우에만 통계에 포함되고 공개되는 것은 집계 결과뿐입니다.',
    },
    takeout: {
      text: '게임 서재는 내 것입니다.',
      more: '언제든 가져갈 수 있습니다.',
      note: '내보내기는 무료입니다. 다른 곳에서 가져온 기록은 출처와 연결 정보를 보존합니다. 계정에 로그인할 수 없어도 내보내기를 요청할 수 있습니다.',
    },
    closing: '플레이한 모든 회차를 내 서재에 기록합니다.',
  },

  reviews: {
    hero: {
      headline: '어느 버전을 평가하는지 밝힌 뒤 평점을 매깁니다.',
      lead: '게임은 출시 후에도 계속 업데이트됩니다. 1.0 버전의 평점이 2.0 버전의 평점을 대신해서는 안 됩니다. 한 커뮤니티의 취향이 모든 사람을 대표해서도 안 됩니다. 그래서 모든 평점에 버전과 평가자 그룹을 표시합니다.',
    },
    versions: {
      label: '버전',
      headline: '버전마다 평점을 따로 기록합니다.',
      lead: '평점은 플레이한 버전에 연결됩니다. 여러 버전을 합산한 점수는 별도로 계산하고 계산 방식을 표시합니다.',
      tiles: [
        { title: '1.0 버전', body: '출시 당시 버전' },
        { title: '1.1 버전', body: '저장 문제를 수정한 업데이트' },
        { title: '1.2 버전', body: '새로운 스테이지 추가' },
        { title: '2.0 버전', body: '대규모 업데이트' },
        { title: '완전판', body: '모든 확장 콘텐츠를 포함한 출시' },
      ],
      caption: '예시: 가상 게임의 버전.',
    },
    who: {
      label: '평가자',
      headline: '평가자 그룹을 함께 표시합니다.',
      lead: '전체, 가입한 커뮤니티, 평점을 가장 많이 남긴 커뮤니티의 점수를 나란히 볼 수 있습니다. 최근 평점과 전체 평점은 다른 기준으로 다룹니다.',
      items: [
        { title: '개수와 분포', body: '모든 평점에 개수와 분포를 표시합니다.' },
        { title: '평가자 수 부족', body: '평가자가 충분하지 않으면 평균을 계산하지 않고 개수와 분포만 표시합니다.' },
        { title: '가져온 평점', body: '다른 사이트에서 가져온 평점은 별도로 표시하고 REZICS의 평점에 합치지 않습니다.' },
      ],
    },
    targets: {
      label: '평가 대상',
      headline: '이야기, 번역, 제작을 구분해 평가합니다.',
      lead: '리뷰에는 먼저 평가 대상을 표시합니다. 이야기는 좋지만 중국어 번역은 아쉬울 수 있으므로 나눠서 이야기할 수 있습니다. 평점을 매기지 않고 글만 쓸 수도 있습니다.',
      tiles: [
        { title: '이야기', body: '줄거리와 등장인물' },
        { title: '번역', body: '특정 언어 버전의 번역 품질' },
        { title: '제작', body: '게임 방식, 그래픽, 음악, 기술적 완성도' },
        { title: '이 버전', body: '특정 플랫폼과 버전에서의 실제 성능' },
        { title: '이 버전의 등장인물', body: '등장인물 자체의 평점에는 영향을 주지 않습니다.' },
      ],
    },
    rules: {
      label: '순위',
      headline: '순위 기준을 공개합니다.',
      items: [
        { title: '다운로드 수 제외', body: 'REZICS는 다운로드 수를 기록하지 않으므로 순위에 사용하거나 표시하지 않습니다.' },
        { title: '추천 이유 표시', body: '커뮤니티가 게임을 추천하면 그 결정을 내린 기록과 연결합니다.' },
        { title: '인기가 정확성을 뜻하지 않음', body: '평점 수는 정렬에만 영향을 주며 게임의 분류나 정보를 바꾸지 않습니다.' },
        { title: '스포일러 별도 표시', body: '커뮤니티 투표로 스포일러를 표시하며 창작자의 경고와는 별도로 관리합니다.' },
      ],
    },
    talk: {
      text: '토론, 리뷰, 정보 수정은',
      more: '각각 따로 관리합니다.',
      note: '공략에 대해 이야기하고 리뷰에 답하거나 정보 오류를 알리는 공간이 각각 있습니다. 다른 공간으로 이동해도 선택한 버전과 스포일러 진행 상황은 유지됩니다.',
    },
    closing: '모든 평점에 버전과 평가자 그룹을 표시합니다.',
  },

  guides: {
    hero: {
      headline: '플레이한 곳까지 볼 수 있습니다.',
      lead: '인물, 장소, 스테이지, 공략을 같은 게임에 연결합니다. Wiki+는 해당 챕터나 루트 진행 상황에 따라 뒤에 나오는 스포일러를 가립니다.',
    },
    fog: {
      label: '스포일러',
      headline: '플레이하지 않은 구간은 먼저 가립니다.',
      lead: '선택한 지점까지의 인물, 장소, 사건은 표시하고 이후 내용은 가립니다. 원하면 한 번에 모두 펼칠 수 있습니다. 로그인하지 않은 방문자에게는 기본적으로 스토리 스포일러를 표시하지 않습니다.',
    },
    guides: {
      label: '공략',
      headline: '공략에 적용 버전을 표시합니다.',
      lead: '같은 스테이지라도 1.0 버전과 2.0 버전의 공략은 완전히 다를 수 있습니다. 공략에 적용되는 게임 버전과 플랫폼을 표시해 업데이트 후에도 어느 버전에 맞는 글인지 알 수 있습니다.',
      more: '커뮤니티에서 정리한 모드 모음에도 필요한 게임 버전과 호환성 확인 여부를 표시합니다. 모든 수정 내용을 기록해 누가 무엇을 바꿨는지 확인하고 두 버전을 비교하거나 되돌릴 수 있습니다.',
    },
    rules: {
      label: 'Wiki+',
      headline: 'Wiki+의 다섯 가지 규칙',
      items: [
        { title: '같은 데이터, 어디서나 동일하게', body: '인물 정보 상자, 필터, 목록은 같은 데이터를 사용합니다. 한곳에서 바로잡으면 모든 곳에 반영됩니다.' },
        { title: 'AI 에이전트가 제안하고 사람이 검토', body: '에이전트는 출처를 첨부해 새 정보를 제안할 수 있습니다. 사람이 검토하지 않은 에이전트 작성 내용은 독자에게 표시되지 않습니다.' },
        { title: '인물마다 페이지 하나', body: '게임, 소설, 애니메이션에 등장하는 같은 인물은 하나의 페이지를 사용합니다. 성우도 인물과 작품에 연결해 표시합니다.' },
        { title: '대본에서 정리', body: '스크립트 형식을 지원하는 비주얼 노벨은 대본을 가진 사람이 로컬 도구 모음으로 자기 컴퓨터에서 인물, 장소, 사건을 구간별로 정리해 제안할 수 있습니다. REZICS는 출처가 포함된 제안만 받고 대본 전문은 받지 않습니다.' },
        { title: '전체 내보내기', body: 'Wiki+ 내용과 수정 기록을 모두 내보낼 수 있습니다.' },
      ],
    },
    adaptations: {
      label: '각색',
      headline: '원작에서 게임까지 연결합니다.',
      lead: '예를 들어 카마치 카즈마의 라이트 노벨 《어떤 마술의 금서목록》에는 만화, TV 애니메이션 세 시즌과 영화 한 편, 격투 게임, 비주얼 노벨, 모바일 RPG가 있습니다. REZICS에서는 각각 별개의 작품으로 등록하고 원작과 연결합니다. 같은 인물은 각 작품에서 같은 ID를 사용합니다.',
      chain: [
        { to: 'books', name: '라이트 노벨', line: '원작, 본편과 《신약》, 《창약》' },
        { to: 'manga', name: '만화', line: '2007년부터 연재', rel: '각색 원작' },
        { to: 'anime', name: '애니메이션', line: 'TV 애니메이션 세 시즌과 영화 한 편', rel: '각색 원작' },
        { to: 'visual-novels', name: '비주얼 노벨', line: '2013년 게임', rel: '각색 원작' },
        { to: 'games', name: '게임', line: '격투 게임과 모바일 RPG', rel: '각색 원작' },
      ],
      note: '출간 순서와 추천하는 읽기 및 플레이 순서를 따로 기록합니다. 이야기의 시간선에 따라 가장 이른 사건부터 플레이하도록 순서를 만들 수도 있습니다.',
      caption: '《어떤 마술의 금서목록》으로 작품 간 관계 기록을 설명합니다.',
    },
    zone: {
      text: '게임 커뮤니티는',
      more: '자체 사이트를 운영할 수 있습니다.',
      note: '커뮤니티에는 회원, 규칙, 토론이 있습니다. Zone은 커뮤니티가 직접 운영하는 사이트입니다. 경로, 탐색, 디자인을 설정하고 공략과 Wiki+를 배치할 수 있으며 인물과 게임 정보는 REZICS 목록에서 가져옵니다.',
    },
    closing: '플레이한 곳까지 확인하고 모든 각색 작품과 연결합니다.',
  },

  creators: {
    hero: {
      headline: '게임을 출시해도 저작권은 창작자에게 있습니다.',
      lead: 'REZICS는 독립 창작자와 계약해 게임과 비주얼 노벨을 출시합니다. 플레이어는 DRM 없는 파일과 업데이트를 받고, 창작자는 항목별 정산서와 모든 작품을 연결하는 ID를 받습니다.',
    },
    rights: {
      label: '권리',
      headline: '보유하는 권리와 허용하는 권리',
      items: [
        { title: '저작권', body: '게임은 계속 창작자의 소유입니다. REZICS는 합의한 기간과 지역에서 파일을 보관, 판매, 제공할 수 있는 비독점 라이선스를 받습니다.' },
        { title: '별도 동의가 필요한 일', body: '번역, 각색, 주요 수정, 새 버전, 작품을 활용한 AI 훈련에는 별도 동의가 필요합니다.' },
        { title: '라이선스 선언', body: '작품에 선언한 라이선스와 버전, 범위, 선언 시점을 함께 기록합니다.' },
        { title: '계약 종료', body: '계약에 따라 신규 판매를 중단하고 이미 발생한 수익을 정산합니다. 플레이어는 기존 조건과 관련 법률에 따라 라이선스를 보유합니다.' },
      ],
    },
    ledger: {
      label: '정산서',
      headline: '정산 내역을 항목별로 표시합니다.',
      rows: [
        { label: '플레이어 결제 금액' },
        { label: '징수 세금', op: '빼기' },
        { label: '결제와 징수 서비스 수수료', op: '빼기' },
        { label: '환불과 결제 취소', op: '빼기' },
        { label: '순수익', op: '같음', total: true },
        { label: '창작자 수익 배분' },
      ],
      note: '같은 항목을 두 번 공제하지 않습니다. 서버와 호스팅, 급여, 마케팅 비용, REZICS의 소득세는 창작자 수익에서 공제하지 않습니다.',
      reserve: '유보금이 필요하면 근거, 금액이나 상한, 검토 날짜, 지급 규칙을 표시합니다.',
      caption: '정산서 예시입니다. 계약에 따른 거래 수수료, 판매 지역, 조정 항목을 별도로 표시합니다.',
    },
    name: {
      label: '하나의 이름',
      headline: '하나의 이름으로 모든 작품을 연결합니다.',
      lead: '개발한 게임, 쓴 소설, 작곡한 사운드트랙, 성우로 참여한 애니메이션을 같은 ID에 연결합니다. 플레이어가 창작자를 팔로우하면 새 작품과 공지를 볼 수 있습니다.',
      tiles: [
        { to: 'games', name: '게임', role: '개발' },
        { to: 'books', name: '소설', role: '저자' },
        { name: '사운드트랙', role: '작곡' },
        { to: 'anime', name: '애니메이션', role: '성우' },
      ],
      caption: '제작진 목록의 이름마다 이런 작품 모음을 연결합니다.',
    },
    home: {
      label: '커뮤니티와 사이트',
      headline: '출시 후에는 게임 커뮤니티와 사이트를 운영하세요.',
      lead: '게임 커뮤니티를 만들어 플레이어가 토론하게 하고 Zone을 공식 사이트로 운영할 수 있습니다. 공지, 출시 기록, 변경 기록은 목록에 바로 추가됩니다. 게임을 팔로우하는 플레이어는 각자의 언어로 알림을 받습니다.',
      more: '새 버전 출시 전에 이미지, 설명, 일정을 포함한 출시 자료를 준비하면 미디어와 플레이어가 인용할 수 있습니다. 로컬 도구 모음으로 자신의 대본에서 인물과 사건을 정리해 게임의 Wiki+를 만들 수도 있습니다. 대본 전문은 REZICS로 전송되지 않습니다.',
    },
    rules: {
      text: '판매하기 전에',
      more: '정확히 안내하세요.',
      note: '체험판, 설명, 스크린샷, 호환 정보를 정확히 제공해야 합니다. 외부 계정이나 실행 환경이 필요한 게임은 구매 전에 알려야 합니다. AI 사용 여부를 사실대로 밝히고 성인 등급 작품은 게시할 수 없습니다.',
    },
    closing: '작품은 창작자의 것이고 정산은 투명합니다.',
  },
};

export default {
  id: 'games',
  base: '/games/',
  name: '게임',
  theme: { kind: 'games' },
  next: 'software',
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: 'REZICS 게임: 목록, 스토어, 게임 서재',
        description:
          'REZICS에서 게임마다 페이지 하나를 사용하고 플랫폼과 버전을 따로 기록합니다. 내 기기에서 원하는 언어로 플레이할 수 있는 버전을 찾고 각 플레이 회차를 기록하며 독립 창작자의 파일을 구매해 보관할 수 있습니다.',
      },
    },
    {
      slug: 'releases',
      label: '플랫폼과 버전',
      meta: {
        title: '플랫폼과 버전: 플레이할 수 있는 버전 찾기',
        description:
          '같은 게임의 PC, 가정용 콘솔, 휴대용 게임기, 모바일 버전과 지역판, 디럭스판, 완전판을 REZICS에서 각각 출시 기록으로 관리합니다. 언어, 요구 사항, 판매 정보를 따로 적고 같은 출시 항목에 적용되는 조건으로 필터링합니다.',
      },
    },
    {
      slug: 'store',
      label: '스토어',
      meta: {
        title: 'REZICS 스토어: 구매한 게임을 오래 보관',
        description:
          'REZICS는 계약한 독립 창작자의 게임과 비주얼 노벨을 출시합니다. DRM과 런처가 필요하지 않으며 한 번 구매하면 조건에 따라 다시 다운로드할 수 있습니다. 결제 전에 버전, 언어, 요구 사항, 세금 포함 가격, 환불 조건을 확인할 수 있습니다.',
      },
    },
    {
      slug: 'library',
      label: '게임 서재',
      meta: {
        title: '게임 서재: 모든 플레이 회차를 기록',
        description:
          '플레이하고 싶음, 플레이 중, 일시 정지, 클리어, 포기 상태의 게임을 하나의 서재에 담고 회차별 플랫폼과 버전을 기록합니다. 책, 애니메이션, 만화도 같은 기록에 담을 수 있습니다. 무료로 언제든 내보낼 수 있습니다.',
      },
    },
    {
      slug: 'reviews',
      label: '평점과 리뷰',
      meta: {
        title: '게임 평점과 리뷰: 버전을 표시합니다',
        description:
          'REZICS의 게임 평점에는 버전과 평가자 그룹이 표시되고 개수와 분포가 함께 제공됩니다. 리뷰는 글만 쓸 수 있고 이야기, 번역, 제작을 따로 평가합니다. 다운로드 수는 순위에 사용하지 않습니다.',
      },
    },
    {
      slug: 'guides',
      label: '공략과 Wiki+',
      meta: {
        title: '공략, Wiki+, 각색 작품',
        description:
          '게임 공략, 인물, 장소를 Wiki+에 기록하고 진행 상황에 맞춰 스포일러를 가립니다. 모든 수정 내용을 기록합니다. 소설, 애니메이션, 만화로 각색된 작품을 같은 게임에 연결하고 커뮤니티 자체 사이트도 운영할 수 있습니다.',
      },
    },
    {
      slug: 'creators',
      label: '창작자',
      meta: {
        title: '창작자: REZICS에서 게임 출시',
        description:
          '독립 창작자는 REZICS를 통해 게임과 비주얼 노벨을 출시합니다. 저작권을 보유하고 DRM 없는 파일과 업데이트를 제공하며 정산서에는 세금, 수수료, 환불을 항목별로 표시합니다. 하나의 ID로 게임, 소설, 음악을 연결합니다.',
      },
    },
  ],
  strings,
} satisfies MiniSite<GamesStrings>;
