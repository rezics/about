// 社群 /engine/community/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md). The section shapes are shared with create and trust.
import type { Item, MiniSite } from '../schema';

/** A v3 section: eyebrow, serif heading, lead text and an optional hairline facts list. */
export interface ModuleSection {
  label: string;
  headline: string;
  lead?: string | string[];
  facts?: Item[];
  note?: string;
}

/** The module family's strings: the ring of the five modules and the page's closing line. */
export interface ModuleFamilyStrings {
  closing: string;
}

/** A number written into the rules: a numeral, its unit and one sentence. */
export interface Figure {
  value: string;
  unit: string;
  body: string;
}

/** A large serif statement; `sub` is its muted second half. */
export interface ModuleStatement {
  statement: string;
  sub: string;
  body?: string;
}

export interface CommunityStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  person: ModuleSection;
  lead: ModuleSection & {
    /** The post's byline as two kinds of reader see it (示意). */
    specimen: {
      toggleLabel: string;
      toggle: [string, string];
      you: string;
      realm: string;
      follow: string;
      post: string;
      caption: string;
    };
  };
  realm: ModuleSection;
  leave: ModuleStatement;
  ratings: ModuleSection & { figures: Figure[] };
  follow: ModuleSection;
  feed: ModuleSection;
  recognition: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CommunityStrings = {
  contentsLabel: '이 페이지의 내용',
  hero: {
    headline: '말하는 사람은 당신이고 커뮤니티는 공간입니다.',
    lede: '공개 ID는 하나이며 리뷰, 목록, 서재가 함께 이동합니다. 각 커뮤니티는 주제, 규칙, 운영 방식을 제공하지만 당신을 소속시키지는 않습니다.',
    imageAlt: '작은 종이 여러 장이 큰 짙은 회색 종이를 둘러싸고 있습니다. 사람들이 한 테이블에 모인 모습과 같습니다.',
  },
  person: {
    label: 'ID',
    headline: '하나의 공개 ID로 모든 커뮤니티를 오갑니다.',
    lead: '필명은 사용할 수 있지만 다른 사람을 사칭할 수는 없습니다. 서재, 목록, 리뷰, 작품, 번역, 토론은 모두 이 ID에 연결되며 어느 커뮤니티에도 속하지 않습니다. 다른 커뮤니티에 가도 같은 사람입니다.',
    facts: [
      { title: '이름을 바꿔도 연결 유지', body: '이름을 바꾸면 이전 URL이 새 이름으로 연결됩니다. 다른 사람의 이름과 지나치게 비슷하면 사용할 수 없습니다.' },
      { title: '작품 등록 요청', body: '데이터베이스에 이미 내 작품이 등록되어 있다면 해당 ID를 본인에게 연결할 수 있습니다.' },
      { title: '팔로우는 단방향', body: '다른 사람이 나를 팔로우할 때 승인을 기다리지 않습니다. 원하면 팔로워를 거부할 수도 있습니다. 받을 알림과 수준은 팔로워가 직접 설정합니다.' },
      { title: '게시물은 원래 자리에', body: '커뮤니티를 떠나도 그곳에 쓴 게시물에는 계속 내 이름이 표시되고 게시물도 그곳에 남습니다.' },
      {
        title: '커뮤니티의 공식 입장',
        body: '커뮤니티도 자체 명의로 추천과 결정을 발표할 수 있으며 승인된 대표만 게시할 수 있습니다. 추천은 모두 관련 결정에 연결됩니다. 커뮤니티 안에 게시물을 작성해도 커뮤니티의 발언이 되지는 않습니다.',
      },
    ],
  },
  lead: {
    label: '작성자 표시',
    headline: '게시물의 이름 순서는 정해진 규칙을 따릅니다.',
    lead: '모든 게시물에는 작성자와 커뮤니티 이름이 함께 표시됩니다. 당신을 모르는 사람에게 이름만으로는 충분한 설명이 되지 않으므로 먼저 공간을 보여 줍니다. 당신을 팔로우한 사람에게는 당신을 먼저 보여 줍니다.',
    specimen: {
      toggleLabel: '게시물을 보는 사람 선택',
      toggle: ['나를 팔로우하는 사람', '아직 나를 팔로우하지 않는 사람'],
      you: '나',
      realm: '판타지 소설 독서 모임',
      follow: '팔로우',
      post: '3권의 결말은 생각보다 조용했습니다.',
      caption: '예시: 같은 게시물에 독자별로 다르게 표시되는 작성자.',
    },
    facts: [
      { title: '독자가 나를 팔로우함', body: '나를 먼저 표시하고 커뮤니티를 다음에 표시합니다.' },
      { title: '어느 커뮤니티에도 속하지 않은 게시물', body: '작성자를 먼저 표시합니다.' },
      { title: '그 외의 경우', body: '커뮤니티를 먼저 표시하고 같은 줄에 팔로우 버튼을 둡니다.' },
      { title: '커뮤니티 추천과 결정', body: '커뮤니티만 표시하며 선정한 사람은 표시하지 않습니다.' },
    ],
    note: '먼저 표시되는 쪽은 앞에 배치하고 아이콘과 굵은 글씨를 사용합니다. 규칙은 고정되어 있어 같은 게시물의 표시 방식이 매번 바뀌지 않습니다.',
  },
  realm: {
    label: '커뮤니티',
    headline: '커뮤니티는 공간이며 규칙은 커뮤니티가 정합니다.',
    lead: '누가 참여할 수 있는지, 새 회원이 볼 수 있는 범위, 콘텐츠 관리 방식을 각 커뮤니티가 정하고 설정을 공개합니다.',
    facts: [
      { title: '세 가지 가입 방식', body: '공개 가입, 가입 신청, 초대 가입이 있습니다. 가입하면 커뮤니티도 팔로우합니다. 탈퇴할 때는 가입으로 시작된 팔로우만 취소합니다.' },
      { title: '여러 언어로 작성하는 규칙', body: '중국어 사용자는 중국어 규칙을, 일본어 사용자는 일본어 규칙을 읽습니다. 게시물은 언어 제한 없이 작성할 수 있습니다.' },
      {
        title: '읽을 수 있어도 검색되지는 않을 수 있습니다',
        body: '커뮤니티를 공개해 읽을 수 있게 하면서도 검색, 추천, 사이트맵에는 표시하지 않을 수 있습니다. 비공개 커뮤니티가 가입 신청을 받는 경우 외부인은 이름, 소개, 규칙, 신청 버튼만 볼 수 있습니다.',
      },
      { title: '신고는 사건으로 처리', body: '회원 신고는 하나의 사건이 되며 처리 결과에 이유를 첨부합니다. 당사자는 이의를 제기할 수 있습니다.' },
      { title: '투표와 결정', body: '커뮤니티는 투표를 진행할 수 있습니다. 통과된 결정은 해당 커뮤니티에 원래 허용된 작업만 실행할 수 있습니다.' },
      { title: '플랫폼 규칙 우선', body: '커뮤니티는 플랫폼보다 엄격한 규칙을 정할 수 있지만 더 느슨하게 정할 수는 없습니다. 소유자가 커뮤니티를 직접 폐쇄할 수 없으며 운영이나 권리 문제로 플랫폼이 비공개 처리할 수 있습니다. 이후 복구도 가능합니다.' },
    ],
  },
  leave: {
    statement: '언제든 커뮤니티를 떠날 수 있습니다.',
    sub: 'ID, 서재, 목록은 원래 커뮤니티에 속하지 않기 때문입니다.',
  },
  ratings: {
    label: '평점',
    headline: '점수 옆에 질문, 대상, 평가자를 표시합니다.',
    lead: [
      '각 점수에는 세 가지를 표시합니다. 무엇을 묻는지, 어떤 대상을 평가하는지, 어떤 그룹이 평가했는지입니다. 질문이 다르면 점수를 평균 내지 않습니다. 에피소드별 점수는 작품 전체에 합산하지 않고 특정 버전의 점수는 해당 버전에 남습니다.',
      '점수를 매기지 않고 리뷰만 쓸 수도 있습니다. 이야기, 번역, 낭독, 제작 중 무엇을 어느 버전에서 평가했는지 표시합니다. 기본으로 사이트 전체 점수를 보여 주고 옆에는 내가 속한 커뮤니티와 평점이 많은 커뮤니티를 표시합니다. 평점이 하나도 없으면 0점이나 빈 분포 그래프를 표시하지 않습니다.',
    ],
    figures: [
      { value: '5', unit: '개 평점', body: '작품은 평점 5개부터 평균을 표시합니다. 기준에 미치지 못하면 개수와 분포만 표시하고 몇 개가 더 필요한지 알려 줍니다.' },
      { value: '10', unit: '개 평점', body: '에피소드 속 인물처럼 세부 대상은 평점 10개부터 평균을 표시합니다.' },
      { value: '50', unit: '개 평점', body: '평점 50개부터 순위에 포함될 수 있습니다. 순위에 사용한 평균과 가중치를 공개합니다.' },
    ],
    note: '기준은 기본값이며 평가 종류마다 데이터에 따라 조정할 수 있습니다.',
  },
  follow: {
    label: '팔로우',
    headline: '원하는 항목을 팔로우하세요.',
    lead: '사람, 조직, 커뮤니티, 작품, 주제, 목록, 저장한 필터 조건을 팔로우할 수 있습니다. 팔로우마다 전체, 주요 알림, 끄기 중에서 알림을 설정합니다.',
    facts: [
      { title: '사람과 조직', body: '기본적으로 새 작품과 공지를 알립니다.' },
      { title: '작품', body: '이해할 수 있는 언어로 새 챕터나 버전이 나오면 알립니다. “읽는 중”에 추가하면 자동으로 팔로우합니다.' },
      { title: '커뮤니티', body: '기본적으로 공지와 결정만 알리고 일반 게시물은 피드에 표시합니다.' },
      { title: '주제와 검색', body: '기본적으로 알림을 보내지 않으며 각각 홈 페이지의 탭이 됩니다.' },
      { title: '목록', body: '목록에는 여러 종류를 함께 담을 수 있습니다. 소설 뒤에 애니메이션과 게임을 이어서 추가할 수 있습니다. 각 항목에 메모를 쓰고 순서를 정한 뒤 언제든 전체를 내보낼 수 있습니다.' },
      { title: '끄더라도 직접 관련된 알림은 받습니다', body: '알림을 꺼도 답글, 멘션처럼 직접 관련된 내용은 계속 알립니다.' },
    ],
  },
  feed: {
    label: '피드',
    headline: '최신 항목을 먼저 보여 주고 읽은 위치를 알려 줍니다.',
    lead: '팔로우 피드의 “최신”은 시간을 기준으로 정렬하며 순서를 바꾸지 않습니다. 다른 정렬 방식은 기준을 표시합니다.',
    facts: [
      { title: '“인기”는 커뮤니티별로 계산', body: '“인기” 순위는 커뮤니티마다 따로 계산합니다. 한 페이지를 한 커뮤니티가 차지하지 않으며 규모가 작은 커뮤니티도 표시됩니다.' },
      { title: '추천 이유 표시', body: '추천에는 팔로우, 언어, 서재만 참고합니다. 각 추천에 이유를 표시하고 추천 기능을 모두 끌 수도 있습니다.' },
      { title: '숨기기, 무시, 차단', body: '서로 다른 기능 세 가지를 같은 메뉴에서 제공합니다.' },
      { title: '알림 위치 설정', body: '받은 편지함, 푸시 알림, 정기 이메일 요약을 따로 선택할 수 있습니다. 이메일은 한 번 눌러 구독 취소할 수 있습니다.' },
    ],
  },
  recognition: {
    label: '등급',
    headline: '채택된 기여를 인정하며 출석은 반영하지 않습니다.',
    lead: '커뮤니티마다 자체 경험치와 등급이 있습니다. 실제로 도움이 되어 채택된 리뷰, 수정, 번역, 운영, 창작으로 경험치를 얻습니다. 등급은 소비하거나 양도할 수 없고 운영 권한을 의미하지 않습니다. 여러 계정으로 활동을 부풀려 등급을 올리는 행위는 이용 규칙에 위배됩니다.',
  },
  family: {
    closing: '모든 페이지를 직접 정하고 싶다면 커뮤니티 사이트를 운영하세요.',
  },
};

export default {
  id: 'community',
  base: '/engine/community/',
  name: '커뮤니티',
  theme: { module: 'community' },
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: '커뮤니티: 하나의 ID로 모든 공간을 오갑니다',
        description:
          'REZICS에서 공개 ID는 하나이며 서재, 목록, 리뷰가 모든 커뮤니티를 오갑니다. 커뮤니티는 공간, 규칙, 운영을 제공하고 평점에는 질문과 대상이 표시됩니다. 팔로우와 알림은 직접 설정합니다.',
      },
    },
  ],
  strings,
} satisfies MiniSite<CommunityStrings>;
