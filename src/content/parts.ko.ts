import type { Part } from './schema';

/** The fifteen shared parts, in schema order. */
export const parts: Part[] = [
  {
    id: 'identity',
    name: '고유 항목',
    gives: '언어나 사이트가 달라도 하나의 고유 항목은 같은 대상을 가리킵니다.',
  },
  {
    id: 'names',
    name: '다국어 이름',
    gives: '언어별 이름, 별칭과 발음을 함께 기록하며 원래 표기는 그대로 보존합니다.',
  },
  {
    id: 'editions',
    name: '판본',
    gives: '판본, 발매, 번역본, 플랫폼과 수록 범위를 각각 기록합니다.',
  },
  {
    id: 'credits',
    name: '제작진',
    gives: '사람과 조직을 역할별로 표시하고 각 이름을 해당 작품 목록에 연결합니다.',
  },
  {
    id: 'relations',
    name: '관계',
    gives: '각색, 속편, 시리즈와 의존 관계를 양쪽에서 확인할 수 있습니다.',
  },
  {
    id: 'facets',
    name: '필터',
    gives: '사용 가능한 필드로 필터링하고 마지막 항목까지 볼 수 있습니다. 조건은 보기로 저장할 수 있습니다.',
  },
  {
    id: 'ratings',
    name: '평점',
    gives: '무엇을 평가하는지 먼저 표시한 뒤 점수와 리뷰를 남깁니다.',
  },
  {
    id: 'discussion',
    name: '토론',
    gives: '토론은 해당 항목에 직접 연결되므로 별도 포럼이 필요하지 않습니다.',
  },
  {
    id: 'wiki',
    name: 'Wiki',
    gives: 'Wiki+ 페이지와 정보 상자에는 그래프에서 검토된 사실을 표시합니다.',
  },
  {
    id: 'lists',
    name: '목록',
    gives: '종류에 상관없이 목록을 정렬하고 메모를 추가해 내보낼 수 있습니다.',
  },
  {
    id: 'progress',
    name: '진행 기록',
    gives: '서재 상태, 각 독서나 플레이 기록, 다음에 볼 항목을 관리합니다.',
  },
  {
    id: 'follow',
    name: '팔로우',
    gives: '항목, 사람 또는 보기를 팔로우하면 새 소식이 전달됩니다.',
  },
  {
    id: 'offers',
    name: '판매',
    gives: '판매 중인 경우 재고, 가격과 구매처를 표시합니다.',
  },
  {
    id: 'specs',
    name: '사양',
    gives: '측정한 사양과 호환성 근거에 테스트 조건과 날짜를 표시합니다.',
  },
  {
    id: 'schedule',
    name: '일정',
    gives: '발매일, 방영 시간과 행사를 하나의 일정에 모읍니다.',
  },
];
