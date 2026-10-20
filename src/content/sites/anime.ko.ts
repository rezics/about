// The 動畫 site: every visible string of /anime/ and its six inner pages, in the v3 parts (hero,
// sections, tile masonry, photo rows, statements, facts lists, closing). The plan is in
// src/sites/anime/SITE.md under "v3"; claims and sources in src/sites/anime/facts.md. Example
// data is generic and marked 示意; the one real work named is 《魔法禁書目錄》, text only
// (.temp/sites/EXAMPLE-WORK.md).
import type { KindId, MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'anime')!;

/** A title and its line: facts rows, tiles. */
export interface Row {
  title: string;
  body: string;
}
/** A still-life from the site's paper series (public/images/sites/anime/<src>-<w>.avif|webp). */
export interface Photo {
  src: 'hero' | 'weeks' | 'covered' | 'threads' | 'sources';
  alt: string;
}
/** An inner page's opening: the h1 and its line. */
export interface Head {
  headline: string;
  lede: string;
}
/** A section: eyebrow in columns 1 to 3, the h2, a lead. */
export interface Section {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** Large serif: `text`, then `muted` in muted ink, and an optional note under it. */
export interface Statement {
  text: string;
  muted: string;
  note?: string;
}
/** The final invitation, specific to the subject of each page. */
export interface ClosingCopy {
  headline: string;
  body: string;
}

export type AnimeStrings = {
  common: {
    /** Eyebrow of the section that leads to the next pages. */
    onward: string;
    /** Caption under generic example data. */
    example: string;
  };
  landing: {
    closing: ClosingCopy;
    hero: Head & { photo: Photo };
    pages: Section & { lines: { slug: string; line: string }[] };
    schedule: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    next: Statement;
    spoilers: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    parts: Section & { notes: Partial<Record<PartId, string>> };
    neighbours: Section & { tiles: { to: KindId; label: string }[] };
  };
  seasons: {
    closing: ClosingCopy;
    head: Head;
    marks: Section & { rows: Row[] };
    zones: { eyebrow: string; headline: string; body: string[]; photo: Photo };
    known: Section & { rows: Row[] };
    years: Section;
    /** One line that previews the next page. */
    next: string;
  };
  tracking: {
    closing: ClosingCopy;
    head: Head;
    statuses: Section & { rows: Row[] };
    seasons: Section & { tiles: Row[] };
    rewatch: Section;
    lists: Statement;
    next: string;
  };
  discussion: {
    closing: ClosingCopy;
    head: Head;
    spoiler: { eyebrow: string; headline: string; body: string; photo: Photo };
    position: Section & { rows: Row[] };
    conversations: Section & { rows: Row[] };
    spaces: Section & { tiles: Row[] };
    unseen: Statement;
    next: string;
  };
  ratings: {
    closing: ClosingCopy;
    head: Head;
    anatomy: Section & { rows: Row[] };
    episodes: Statement;
    targets: Section & { rows: Row[] };
    lists: Section & { tiles: string[] };
    next: string;
  };
  credits: {
    closing: ClosingCopy;
    head: Head;
    record: Section & { rows: Row[] };
    voice: { eyebrow: string; headline: string; body: string; photo: Photo };
    studio: Section;
    next: string;
  };
  adaptations: {
    closing: ClosingCopy;
    head: Head;
    example: { eyebrow: string; headline: string; body: string; photo: Photo };
    /** Generic family: each tile in the colour of its kind (null: a relation still to confirm). */
    family: Section & { tiles: { kind: KindId | null; relation: string; name: string }[] };
    scoped: Section;
    relations: Section & { rows: Row[] };
    orders: Statement;
    next: string;
  };
};

const site: MiniSite<AnimeStrings> = {
  id: 'anime',
  base: '/anime/',
  name: '애니메이션',
  theme: { kind: 'anime' },
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: '애니메이션: 편성, 진행 상황, 토론과 원작',
        description:
          'REZICS에서 애니메이션을 보고 회차별 방영 시간을 일정에 넣으세요. 한 회를 다 보면 기록하고, 회차별 토론과 평가를 확인할 수 있습니다. 성우, 제작사와 원작도 같은 작품에 연결됩니다.',
      },
    },
    {
      slug: 'seasons',
      label: '시즌과 방영',
      meta: {
        title: '애니메이션 시즌과 방영 일정',
        description:
          '애니메이션은 보통 1월, 4월, 7월, 10월에 새 시즌이 시작됩니다. REZICS는 시즌별 신작과 회차별 방영 시간을 표로 정리해 내 시간대에 맞춰 보여 줍니다. 날짜만 알려진 경우에는 날짜만 표시하고, 알림은 캘린더로 내보낼 수 있습니다.',
      },
    },
    {
      slug: 'tracking',
      label: '진행 상황 기록',
      meta: {
        title: '애니메이션 진행 상황: 회차별 기록',
        description:
          'REZICS에서 애니메이션 진행 상황을 기록하세요. 보고 싶음, 보는 중, 다 봄, 일시 중지, 중단의 다섯 상태로 나누고, 본 회차를 하나씩 기록해 시리즈 순서에 따라 다음 회차를 찾습니다. 다시 본 기록은 따로 남기고, 목록은 가져오거나 전체 내보낼 수 있습니다.',
      },
    },
    {
      slug: 'discussion',
      label: '회차별 토론',
      meta: {
        title: '애니메이션 토론: 회차별 대화',
        description:
          'REZICS에서는 애니메이션의 각 회차에 토론이 연결됩니다. 스포일러 표시가 있는 내용은 가려 두고 원할 때 직접 엽니다. Wiki+는 본 회차까지만 보여 주며, 커뮤니티는 Zone으로 자체 애니메이션 사이트를 만들 수 있습니다.',
      },
    },
    {
      slug: 'ratings',
      label: '평가와 목록',
      meta: {
        title: '애니메이션 평가, 리뷰와 목록',
        description:
          'REZICS의 모든 평가는 평가 대상, 척도, 참여 인원과 평가 집단을 함께 표시합니다. 작품 전체와 각 회차를 따로 평가하고, 리뷰에는 점수를 매기지 않아도 됩니다. 목록은 정렬하고 메모를 추가해 내보낼 수 있습니다.',
      },
    },
    {
      slug: 'credits',
      label: '제작과 출연',
      meta: {
        title: '애니메이션 제작진과 성우',
        description:
          'REZICS에서 감독, 각본가, 제작사와 성우는 각각 고유한 ID를 가집니다. 모든 크레딧에는 역할과 작품이 표시되고, 성우 크레딧은 캐릭터에도 연결됩니다. 사람이나 회사를 팔로우하면 새 작품이 공개될 때 알림을 받습니다.',
      },
    },
    {
      slug: 'adaptations',
      label: '원작과 각색',
      meta: {
        title: '애니메이션의 원작과 각색',
        description:
          'REZICS에서는 애니메이션과 원작 소설, 만화, 후속 시즌, 각색 게임이 각각 고유한 ID를 가지며 관계로 연결됩니다. 애니메이션과 원작의 진행 상황은 따로 기록하고, 서로 다른 설정은 각각 출처를 표시합니다.',
      },
    },
  ],
  strings: {
    common: {
      onward: '다음 내용',
      example: '예시입니다.',
    },
    landing: {
      closing: {
        headline: '이번 시즌에 볼 작품을 내 일정에 담으세요.',
        body: 'REZICS에서 보고 싶은 애니메이션을 정리하고 진행 상황을 기록한 뒤 각 회차의 토론에 참여하세요.',
      },
      hero: {
        headline: '첫 방송부터 완결까지 회차별로 따라가세요.',
        lede: '시즌별 회차와 방영 시간을 내 시간대에 맞춰 일정으로 보여 줍니다. 한 회를 다 볼 때마다 기록하세요. 성우, 제작사와 원작도 이 애니메이션에 연결됩니다.',
        photo: {
          src: 'hero',
          alt: '장밋빛 긴 종이 띠가 열두 면으로 접혀 따뜻한 흰 종이 위에 서 있고, 끝부분은 짙은 회색과 회보라색 종이에 눌려 있다.',
        },
      },
      pages: {
        eyebrow: '여섯 페이지',
        headline: '방영 일정부터 원작까지, 애니메이션의 여섯 가지를 살펴보세요.',
        lines: [
          { slug: 'seasons', line: '내 시간대에 맞춘 시즌별 방영 일정' },
          { slug: 'tracking', line: '시리즈 순서에 따라 다음 회차 찾기' },
          { slug: 'discussion', line: '아직 보지 않은 내용은 가려 두기' },
          { slug: 'ratings', line: '작품 전체와 회차를 따로 평가하기' },
          { slug: 'credits', line: '각 이름에 고유한 ID 연결하기' },
          { slug: 'adaptations', line: '원작, 후속 시즌과 외전을 관계로 연결하기' },
        ],
      },
      schedule: {
        eyebrow: '방영 일정',
        headline: '심야 1시 첫 방송도 내 시간대에 맞춥니다.',
        body: '일본 방영 일정의 “화요일 25:00”은 수요일 새벽 1시를 뜻합니다. REZICS는 내 시간대에 맞춰 바꿔 표시합니다. 출처에 날짜만 있으면 날짜만 표시합니다.',
        link: '시즌과 방영 일정',
        photo: {
          src: 'weeks',
          alt: '장밋빛의 좁은 종이 띠 네 줄이 주간 일정처럼 놓여 있다. 한 줄은 회보라색이고 한 곳은 비어 있다.',
        },
      },
      next: { text: '다음 회차는 무엇인지', muted: '확인된 순서를 따라 찾아보세요.' },
      spoilers: {
        eyebrow: '회차별 토론',
        headline: '회차마다 토론하고, 보지 않은 내용은 가려 둡니다.',
        body: '토론은 각 회차에 연결됩니다. 내 진행 상황보다 뒤에 있는 내용은 가려 두고 원할 때 직접 엽니다. Wiki+도 기본적으로 본 회차까지만 보여 줍니다.',
        link: '스포일러 경계 설정',
        photo: {
          src: 'covered',
          alt: '장밋빛 종이 띠가 여러 면으로 접혀 놓여 있고, 뒷부분은 모서리가 살짝 들린 짙은 회색 종이에 가려져 있다.',
        },
      },
      parts: {
        eyebrow: '여덟 가지 구성 요소',
        headline: '애니메이션에 쓰이는 여덟 가지 구성 요소.',
        lead: '서재, 만화, 게임이 같은 구성 요소를 사용합니다. 애니메이션에서는 그중 여덟 가지를 골라 일정과 작품 정보를 함께 보여 줍니다.',
        notes: {
          identity: '중국어, 일본어, 영어 제목은 모두 같은 애니메이션을 가리킵니다. 후속 시즌과 영화는 각각 별도의 ID를 가집니다.',
          schedule: '첫 방송일, 회차별 방영 시간, 연기와 결방을 한 일정에서 확인합니다.',
          credits: '감독, 각본가, 제작사는 역할별로 기록하고 성우 기록은 성우와 캐릭터에 연결합니다.',
          relations: '원작, 후속 시즌, 외전과 리메이크의 관계를 각각 표시해 원작 페이지에서도 찾아갈 수 있습니다.',
          progress: '몇 회까지 봤는지, 최신 방영분까지 따라잡았는지, 다음 회차가 무엇인지 각각 기록합니다.',
          ratings: '작품 전체와 각 회차의 평점을 따로 표시하고 참여 인원과 평가 집단도 함께 보여 줍니다.',
          discussion: '회차마다 토론을 만들고 진행 상황보다 뒤의 내용은 직접 열기 전까지 가려 둡니다.',
          wiki: 'Wiki+의 정보마다 출처 회차를 표시합니다. 본 회차에 해당하는 내용까지만 볼 수 있습니다.',
        },
      },
      neighbours: {
        eyebrow: '관련 작품',
        headline: '원작과 각색 작품은 각자의 자리에 있습니다.',
        lead: '원작은 소설, 만화 또는 비주얼 노벨일 수 있고, 애니메이션은 게임으로 각색되기도 합니다. 작품마다 페이지가 있고 관계로 연결됩니다. 같은 성우는 어느 작품에서도 같은 사람입니다.',
        tiles: [
          { to: 'books', label: '소설 원작' },
          { to: 'manga', label: '만화 원작과 만화판' },
          { to: 'visual-novels', label: '비주얼 노벨 각색' },
          { to: 'games', label: '각색 게임과 같은 성우' },
        ],
      },
    },
    seasons: {
      closing: {
        headline: '보고 싶은 애니메이션을 내 시간에 맞춰 정리하세요.',
        body: '이번 시즌 신작부터 방영 일정을 확인하고 다음 회차 알림을 설정하세요.',
      },
      head: {
        headline: '사계절, 시즌별 방영 일정.',
        lede: '애니메이션은 대개 1월, 4월, 7월, 10월에 시작합니다. 보고 있는 작품의 첫 방송일부터 회차별 시간까지 한 일정에서 확인하세요.',
      },
      marks: {
        eyebrow: '다섯 가지 상태',
        headline: '공개, 편성, 시청 가능, 연기, 취소는 서로 다른 상태입니다.',
        rows: [
          { title: '공개', body: '소식은 나왔지만 날짜는 정해지지 않았습니다.' },
          { title: '편성', body: '방영 날짜가 정해졌습니다. 시간이 알려졌으면 시간도 표시합니다.' },
          { title: '시청 가능', body: '어느 지역과 플랫폼에서 어떤 언어로 볼 수 있는지 확인했습니다.' },
          { title: '연기', body: '예정된 날짜가 바뀌었습니다. 변경 기록도 남겨 확인할 수 있습니다.' },
          { title: '취소', body: '방영이 취소된 사실을 그대로 표시합니다.' },
        ],
      },
      zones: {
        eyebrow: '내 시간대',
        headline: '같은 회차도 내 시간대에 맞춰 표시합니다.',
        body: [
          '방영 시간은 내 시간대에 맞춰 표시됩니다. 같은 회차도 지역에 따라 날짜와 시간이 달라집니다.',
          '일본 일정의 “화요일 25:00”은 수요일 새벽 1시입니다. 타이베이에서는 수요일 0시, 로스앤젤레스에서는 화요일 오전입니다.',
        ],
        photo: {
          src: 'weeks',
          alt: '장밋빛의 좁은 종이 띠 네 줄이 주간 일정처럼 놓여 있다. 한 줄은 회보라색이고 한 곳은 비어 있다.',
        },
      },
      known: {
        eyebrow: '확인된 정보만',
        headline: '날짜, 시간, 시청 가능 여부를 각각 표시합니다.',
        rows: [
          {
            title: '시간이 불확실하면 표시하지 않습니다',
            body: '출처에 날짜만 있으면 일정에도 날짜만 표시하고 “시간 미정”이라고 적습니다. 시간을 임의로 정하지 않습니다.',
          },
          {
            title: '방영과 시청 가능 여부는 다릅니다',
            body: '방영 날짜를 안다고 내 지역에서 볼 수 있는 것은 아닙니다. 지역과 플랫폼별 자막 및 더빙 여부를 따로 표시하고, 알 수 없는 정보는 미확인으로 남깁니다.',
          },
          {
            title: '알림과 캘린더',
            body: '애니메이션을 팔로우하고 원하는 시간에 알림을 받으세요. 방영 일정은 캘린더 파일로 내보낼 수 있습니다. 출처에서 시간이 바뀌면 알림에 표시하고 변경 여부를 직접 선택할 수 있습니다.',
          },
        ],
      },
      years: {
        eyebrow: '연도별 보기',
        headline: '연도별로 작품을 끝까지 살펴보세요.',
        lead: '연도를 선택하면 해당 연도에 공개된 애니메이션을 목록으로 보여 줍니다. 전체 개수가 확정되기 전에는 “최소” 개수로 표시합니다.',
      },
      next: '방영 중인 회차까지 따라잡은 것과 완결까지 다 본 것은 서로 다른 상태입니다.',
    },
    tracking: {
      closing: {
        headline: '다음에는 멈춘 곳부터 이어 보세요.',
        body: '보는 중인 애니메이션을 목록에 담고 회차별 진행 상황과 다시 본 기록을 남기세요.',
      },
      head: {
        headline: '한 회를 다 볼 때마다 진행 상황을 기록하세요.',
        lede: '보고 있는 애니메이션을 회차별로 기록합니다. 시청 가능한 회차까지 따라잡은 것, 방영된 회차를 모두 본 것, 작품 전체가 완결된 것은 서로 다른 상태이며 REZICS가 구분해 표시합니다.',
      },
      statuses: {
        eyebrow: '다섯 가지 상태',
        headline: '보고 싶음, 보는 중, 다 봄, 일시 중지, 중단.',
        lead: '시청 기록은 직접 공유하기 전까지 비공개로 유지됩니다.',
        rows: [
          { title: '보고 싶음', body: '목록에 추가합니다. 새 소식이 있으면 알려 드립니다.' },
          { title: '보는 중', body: '몇 회까지 봤는지 기록합니다. 새 회차가 공개되면 알림 설정에 따라 알려 드립니다.' },
          { title: '다 봄', body: '작품 전체를 다 봤습니다. 같은 이야기 맥락의 Wiki+는 기본적으로 모든 내용을 표시합니다.' },
          { title: '일시 중지', body: '잠시 멈추고 현재 진행 상황을 유지합니다.' },
          { title: '중단', body: '시청을 그만둡니다. 기록은 남아 있어 언제든 다시 볼 수 있습니다.' },
        ],
      },
      seasons: {
        eyebrow: '시즌 연결',
        headline: '시리즈 순서에 따라 다음 회차를 찾으세요.',
        tiles: [
          { title: '시즌 1', body: '12/12회 시청 완료, 시즌 2로 이어집니다' },
          { title: '시즌 2', body: '6/6회 시청 완료, 현재 방영분까지 따라잡았습니다' },
          { title: '특별편', body: '추가 콘텐츠이며 완결 여부에는 영향을 주지 않습니다' },
        ],
      },
      rewatch: {
        eyebrow: '다시 보기',
        headline: '다시 본 기록은 따로 남습니다.',
        lead: '처음부터 다시 보면 별도의 기록을 추가해 첫 시청 완료 날짜를 그대로 둡니다. 시청한 연도만 기억난다면 연도만 적습니다.',
      },
      lists: {
        text: '목록은 내 것이며 언제든 옮길 수 있습니다.',
        muted: '다른 곳에서 만든 목록을 가져오고, 여기에 기록한 상태와 진행 상황, 평가도 모두 내보낼 수 있습니다.',
      },
      next: '8화를 다 봤다면 8화 토론으로 이동합니다.',
    },
    discussion: {
      closing: {
        headline: '방금 본 회차의 토론에 참여하세요.',
        body: '같은 회차를 본 사람들과 생각을 나누고 다음 내용은 따라잡을 때까지 남겨 두세요.',
      },
      head: {
        headline: '이 회차를 다 봤다면 여기서 이야기하세요.',
        lede: '토론은 각 회차에 연결되어 있어 작품 전체 토론에서 찾아 헤맬 필요가 없습니다. 커뮤니티에 가입하지 않아도 다른 사람의 토론을 읽을 수 있습니다.',
      },
      spoiler: {
        eyebrow: '스포일러 경계',
        headline: '본 회차까지 스포일러를 가립니다.',
        body: '스포일러로 표시된 내용은 먼저 가려 두고 직접 열어야 보입니다. 내용을 여는 것은 내가 보기로 선택한 것이며 스포일러 투표로 처리되지 않습니다.',
        photo: {
          src: 'covered',
          alt: '장밋빛 종이 띠가 여러 면으로 접혀 놓여 있고, 뒷부분은 모서리가 살짝 들린 짙은 회색 종이에 가려져 있다.',
        },
      },
      position: {
        eyebrow: '내 위치',
        headline: '스포일러 경계는 내가 정하고 페이지를 옮겨도 유지됩니다.',
        rows: [
          { title: '내가 정하는 위치', body: '로그인하면 Wiki+는 기본적으로 마지막으로 본 회차까지 보여 줍니다. 회차를 직접 고르거나 전체 내용을 열 수도 있습니다.' },
          { title: '로그인하지 않아도 스포일러를 피합니다', body: '로그인하지 않은 방문자에게는 첫 번째 줄거리 공개 전까지만 보여 줍니다.' },
          { title: '페이지를 옮겨도 유지', body: '토론에서 리뷰로, 다시 Wiki+로 이동해도 선택한 버전과 스포일러 경계가 유지됩니다.' },
        ],
      },
      conversations: {
        eyebrow: '대화',
        headline: '세 가지 대화를 구분합니다.',
        lead: '각 글이 어떤 대화에 속하는지 알 수 있습니다.',
        rows: [
          { title: '팬 토론', body: '줄거리와 캐릭터를 이야기하고 다음 회차를 예상합니다.' },
          { title: '리뷰 답글', body: '리뷰에 대한 대화는 해당 리뷰 아래에 이어집니다.' },
          { title: '정보 수정', body: '방영 날짜나 성우 정보가 잘못됐다면 수정 제안에 출처를 첨부해 토론합니다.' },
        ],
      },
      spaces: {
        eyebrow: '커뮤니티',
        headline: '커뮤니티가 모이고 자체 사이트도 만들 수 있습니다.',
        lead: 'Zone의 정보 상자는 작품 페이지와 같은 사실을 보여 줍니다.',
        tiles: [
          { title: '커뮤니티', body: '구성원과 규칙, 운영진이 있는 모임' },
          { title: 'Zone', body: '커뮤니티 사이트. 캐릭터 페이지, 회차 안내, 연표와 관계도를 만들고 주소를 정할 수 있습니다' },
        ],
      },
      unseen: { text: '아직 보지 않았다면', muted: '미리 알 필요는 없습니다.' },
      next: '이야기와 제작을 따로 평가할 수 있습니다.',
    },
    ratings: {
      closing: {
        headline: '내 생각을 작품과 함께 남기세요.',
        body: '회차나 작품 전체를 평가하고 리뷰를 쓰세요. 다시 볼 만한 작품은 목록에 담으세요.',
      },
      head: {
        headline: '평가 대상과 점수를 함께 표시합니다.',
        lede: '같은 애니메이션도 이야기나 특정 회차의 작화를 평가할 수 있습니다. REZICS는 평가 항목, 척도, 참여 인원과 평가 집단을 점수와 함께 표시하며 다른 항목의 평가를 섞지 않습니다.',
      },
      anatomy: {
        eyebrow: '평가 예시',
        headline: '5점 척도에서 4.2점.',
        rows: [
          { title: '항목', body: '8화의 작화. 회차와 작품 전체는 따로 평가합니다.' },
          { title: '척도', body: '5점 척도, 평균 4.15점을 4.2점으로 표시합니다.' },
          { title: '참여 인원', body: '20명. 평가가 충분히 쌓이지 않았을 때는 인원과 분포만 보여 주고 평균은 표시하지 않습니다.' },
          { title: '분포', body: '5점 10명, 4점 6명, 3점 2명, 2점 1명, 1점 1명.' },
          { title: '집단', body: '한 팬 커뮤니티. 전체와 다른 커뮤니티는 각자의 점수를 가지며 전환해 비교할 수 있습니다.' },
        ],
      },
      episodes: {
        text: '회차는 회차대로,',
        muted: '작품 전체는 전체대로 평가합니다.',
        note: '각 회차의 점수는 따로 집계합니다. 작품 전체의 점수에는 전체를 평가한 사람의 점수만 반영합니다. 합산 점수를 제공하는 경우에는 계산 방식과 포함된 회차를 표시합니다.',
      },
      targets: {
        eyebrow: '리뷰',
        headline: '리뷰에서 다루는 부분을 표시합니다.',
        lead: '점수 없이 리뷰만 쓸 수도 있습니다.',
        rows: [
          { title: '이야기', body: '줄거리, 캐릭터와 결말.' },
          { title: '제작', body: '작화, 음악과 연출.' },
          { title: '번역', body: '특정 언어의 자막 번역. 어느 판본인지 표시합니다.' },
          { title: '이 회차', body: '특정 회차만 다룬 리뷰는 해당 회차에 연결됩니다.' },
          { title: '회차 속 캐릭터', body: '“이 회차에서 이 캐릭터는 어땠나요?”는 별도의 항목이며 자체 점수를 가집니다.' },
        ],
      },
      lists: {
        eyebrow: '목록',
        headline: '원하는 순서로 목록을 정리하세요.',
        lead: '목록에는 애니메이션뿐 아니라 원작 소설, 만화와 게임도 담을 수 있습니다. 항목마다 메모를 추가하고 원하는 순서로 정렬해 전체를 내보낼 수 있습니다. 다른 사람의 목록을 팔로우하면 항목이 추가될 때 알림을 받습니다.',
        tiles: ['입문 순서', '이번 시즌 시청 중', '주말 정주행', '원작과 애니메이션 비교'],
      },
      next: '감독, 제작사와 성우는 각자의 작품에 연결됩니다.',
    },
    credits: {
      closing: {
        headline: '이름을 따라 다음 작품을 찾아보세요.',
        body: '감독, 작화 담당자와 성우의 크레딧을 따라 작품을 만든 사람들을 만나 보세요.',
      },
      head: {
        headline: '엔딩 크레딧의 이름을 작품에 연결합니다.',
        lede: 'REZICS에서 감독, 각본가, 작화 감독, 제작사와 성우는 각각 고유한 ID를 가집니다. 이름을 열면 참여한 모든 작품과 각 작품에서 맡은 역할을 확인할 수 있습니다.',
      },
      record: {
        eyebrow: '크레딧',
        headline: '크레딧에는 다섯 가지가 표시됩니다.',
        rows: [
          { title: '누구', body: '사람이나 회사의 페이지에 연결됩니다.' },
          { title: '역할', body: '감독, 각본, 작화 또는 성우. 역할 이름은 언어별로 번역됩니다.' },
          { title: '어떤 작품', body: '작품과 원판 또는 특정 언어의 더빙판을 표시합니다.' },
          { title: '캐릭터', body: '성우 크레딧은 성우, 캐릭터와 작품을 함께 연결합니다.' },
          { title: '표기명', body: '당시 사용한 이름을 기록합니다. 이름을 바꿔도 같은 사람입니다.' },
        ],
      },
      voice: {
        eyebrow: '성우',
        headline: '성우마다 하나의 ID를 가집니다.',
        body: '애니메이션에서 맡은 캐릭터와 게임, 비주얼 노벨의 더빙 작품을 한 페이지에서 볼 수 있습니다. 팔로우하면 새 작품이 공개될 때 알림을 받습니다.',
        photo: {
          src: 'threads',
          alt: '장밋빛 종이 가장자리에 작은 구멍이 한 줄로 뚫려 있고, 세 개의 면실이 파랑, 회보라, 장밋빛 작은 종이 조각에 각각 연결되어 있다.',
        },
      },
      studio: {
        eyebrow: '제작사',
        headline: '제작사의 작품 연혁을 한눈에 봅니다.',
        lead: '회사는 사람과 마찬가지로 계정이나 커뮤니티에 속하지 않는 독립된 ID를 가집니다. 연도별로 제작한 애니메이션을 볼 수 있습니다.',
      },
      next: '이 애니메이션의 원작을 관계를 따라 찾아보세요.',
    },
    adaptations: {
      closing: {
        headline: '좋아하는 애니메이션의 원작을 이어서 읽어 보세요.',
        body: '각색과 외전의 관계를 따라 소설, 만화와 게임을 찾아 각각 진행 상황을 기록하세요.',
      },
      head: {
        headline: '모든 각색 작품은 원작으로 이어집니다.',
        lede: '애니메이션, 원작 소설이나 만화, 후속 시즌, 외전과 각색 게임은 REZICS에서 각각 하나의 작품으로 등록되고 관계 유형에 따라 연결됩니다. 어느 작품에서든 다른 작품으로 이어 갈 수 있습니다.',
      },
      example: {
        eyebrow: '예시',
        headline: '하나의 이야기가 여러 모습으로 이어집니다.',
        body: '예를 들어 《어떤 마술의 금서목록》은 가마치 카즈마의 라이트 노벨을 원작으로 만화, 애니메이션 세 시즌과 영화로 각색되었습니다. 외전 《어떤 과학의 초전자포》도 별도의 만화와 애니메이션이 있습니다. REZICS에서는 각각 하나의 작품으로 등록하고 각색, 후속작, 외전 관계를 표시합니다.',
        photo: {
          src: 'sources',
          alt: '세로로 놓인 짙은 초록 종이, 조금 작은 짙은 회색 종이와 가로로 놓인 장밋빛 종이가 겹쳐 있고, 옆에는 작은 파란 종이가 있다.',
        },
      },
      family: {
        eyebrow: '관계도',
        headline: '각 작품과 원작의 관계를 표시합니다.',
        lead: '확인되지 않은 관계도 숨기지 않고 확인 중으로 표시해 목록에 둡니다.',
        tiles: [
          { kind: 'books', relation: '원작', name: '원작 소설' },
          { kind: 'manga', relation: '원작 각색', name: '만화판' },
          { kind: 'anime', relation: '원작 각색', name: '애니메이션 시즌 1' },
          { kind: 'anime', relation: '시즌 1의 후속작', name: '애니메이션 시즌 2' },
          { kind: 'books', relation: '외전', name: '외전 소설' },
          { kind: 'games', relation: '애니메이션 각색', name: '각색 게임' },
          { kind: 'visual-novels', relation: '원작 각색', name: '각색 비주얼 노벨' },
          { kind: null, relation: '관계 확인 중', name: '다른 각색 작품' },
        ],
      },
      scoped: {
        eyebrow: '각각 기록',
        headline: '애니메이션과 원작의 진행 상황은 따로 기록합니다.',
        lead: '애니메이션을 다 봐도 원작 소설의 진행 상황은 읽음으로 바뀌지 않습니다. 같은 캐릭터가 원작에서는 살아남고 애니메이션에서는 그렇지 않은 경우에도 두 설정을 함께 기록하고 각각 어느 작품의 몇 회차나 챕터에서 밝혀지는지 표시합니다.',
      },
      relations: {
        eyebrow: '관계',
        headline: '관계에는 이름이 있고 양쪽에서 확인할 수 있습니다.',
        lead: '각 관계는 언어별로 이름이 있습니다. 한쪽 페이지에는 “각색 원작”, 다른 쪽에는 “각색 작품”이라고 표시합니다.',
        rows: [
          { title: '각색', body: '작품을 다른 형식으로 옮깁니다. 예를 들어 소설을 애니메이션으로 각색합니다.' },
          { title: '후속작', body: '시즌 2처럼 앞 작품의 이야기를 이어 갑니다.' },
          { title: '시리즈', body: '같은 시리즈의 각 작품은 고유한 ID를 유지합니다.' },
          { title: '리메이크', body: '처음부터 다시 만든 별도의 작품으로 원작과 연결됩니다.' },
          { title: '외전', body: '같은 이야기에서 갈라져 나온 또 다른 이야기입니다.' },
        ],
      },
      orders: {
        text: '방영 순서와 시청 순서는',
        muted: '서로 다를 수 있습니다.',
        note: '작품은 공개된 날짜 순서로 정렬됩니다. 처음 보는 사람에게 추천하는 순서를 알려 주려면 이유와 함께 별도의 시청 순서 목록을 만들 수 있습니다.',
      },
      next: '많은 애니메이션의 이야기는 만화에서 시작합니다.',
    },
  },
};

export default site;
