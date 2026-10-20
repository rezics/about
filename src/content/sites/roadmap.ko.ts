// 路線圖 (/roadmap/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). A sequence
// without dates or status labels: one engine across every kind, one community at a time.
import type { MiniSite } from '../schema';
import { site as shared } from '../site.ko';

export interface Item {
  title: string;
  body: string;
}

export interface RoadmapStrings {
  hero: { headline: string; lede: string; alt: string };
  order: { label: string; headline: string; lead: string; steps: Item[] };
  further: { label: string; headline: string; lead: string; items: Item[] };
  statement: [string, string];
  promises: { label: string; headline: string; lead: string; items: Item[] };
  constant: { label: string; headline: string; items: Item[] };
  closing: string;
}

export default {
  id: 'roadmap',
  base: '/roadmap/',
  name: shared.nav.roadmap,
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: 'REZICS 로드맵: 가로로 구축하고 차례로 공개합니다',
        description:
          'REZICS는 하나의 엔진으로 커뮤니티를 하나씩 엽니다. 아홉 가지 종류가 이미 REZICS에 있습니다. 앞으로 추가될 종류도 같은 구성 요소를 사용하고 새로운 기능은 한 번만 구현합니다.',
      },
    },
  ],
  strings: {
    hero: {
      headline: '엔진은 하나로 만들고 커뮤니티는 하나씩 엽니다.',
      lede: 'REZICS는 분야마다 별도의 시스템을 만들지 않습니다. 하나의 엔진이 모든 종류를 지원하고 커뮤니티는 하나씩 완성해 갑니다.',
      alt: '짙은 회색 종이 띠가 두루마리에서 펼쳐지고 그 위에 작은 색종이 여섯 장이 차례로 놓여 있습니다.',
    },
    order: {
      label: '순서',
      headline: '날짜 없이 순서만 있습니다.',
      lead: '각 단계는 이전 단계를 바탕으로 합니다. 앞 단계에서 쌓은 항목과 관계를 다음 단계에서 그대로 이어 씁니다.',
      steps: [
        { title: '먼저 구성 요소', body: '열다섯 구성 요소를 함께 사용합니다. 각 요소는 한 번만 만들고 필요한 종류에 연결합니다.' },
        {
          title: '아홉 가지 종류',
          body: '라이브러리, 애니메이션, 만화, 게임, 소프트웨어, 비주얼 노벨, MCP Hub, Skill Hub와 API Hub가 모두 REZICS에 있습니다. 레시피도 포함됩니다. 작품별 Wiki+와 라이브러리 추적이 중심입니다.',
        },
        { title: '커뮤니티를 하나씩', body: '이후에는 커뮤니티를 하나씩 엽니다. 조건은 두 가지입니다. 이미 이곳에 관심을 쏟는 사람이 있고 그래프에 새로운 연결을 더할 수 있어야 합니다.' },
        {
          title: '더 많은 종류',
          body: '인터랙티브 픽션, SF와 판타지 도서 목록, 모델과 평가를 차례로 추가합니다. 새 종류를 더하는 일은 설정으로 끝나며 전용 백엔드 코드는 늘어나지 않습니다.',
        },
        {
          title: '새로운 기능',
          body: '새로운 동작이 필요하면 한 번만 구현해 필요한 종류에 제공합니다. 장소, 통계, 순위, 자동화, 도전 과제, 기록 가져오기, 초대, 이름 인증과 유료 회원 기능도 이런 방식으로 추가합니다.',
        },
      ],
    },
    further: {
      label: '더 많은 종류',
      headline: '아홉 가지에 더해 유형은 계속 늘어납니다.',
      lead: '아래 유형도 같은 구성 요소를 사용합니다. 작품 관련 행사와 순례 장소, 전문 서점은 장소 기능을 더해 구성합니다.',
      items: [
        { title: 'SF와 판타지', body: '선집의 각 작품을 따로 기록해 원하는 번역이 어느 책에 실렸는지 찾고 중복 구매를 피할 수 있습니다.' },
        { title: '인터랙티브 픽션', body: '읽을 수 있는 단편 작품을 찾고 필요한 인터프리터와 플랫폼을 확인해 실행할 곳으로 이동할 수 있습니다.' },
        { title: '모델과 평가', body: '각 점수에 모델 버전, 평가 조건, 데이터 세트와 날짜를 표시합니다. 사용자 리뷰는 따로 둡니다.' },
        { title: '작품 행사', body: '박람회, 사인회와 발매 행사를 작품, 창작자, 장소와 날짜에 연결합니다. 입장권은 주최자 사이트에서 구매합니다.' },
        { title: '성지순례 장소', body: '공개된 작품 배경 장소를 진행 상황에 맞춰 스포일러 없이 확인할 수 있습니다. 개인 주거지는 수집하지 않으며 이동 경로도 기록하지 않습니다.' },
        { title: '전문 서점', body: '서점이 확인한 판매 정보만 제공합니다. 특정 판본의 재고는 협력 서점의 데이터를 기준으로 하며 정보가 없으면 알 수 없음으로 표시합니다.' },
      ],
    },
    statement: ['구성 요소는 조금씩 늘고 종류는 계속 늘어납니다.', '종류가 추가되어도 같은 엔진을 사용합니다.'],
    promises: {
      label: '하나의 그래프',
      headline: '하나의 그래프에서만 가능한 일입니다.',
      lead: '종류가 많아질수록 연결도 늘어납니다. 다음 기능은 모든 대상이 같은 그래프에 있어야 가능합니다.',
      items: [
        { title: '이야기를 따라 끝까지', body: '소설, 만화, 애니메이션과 게임의 읽고 보는 순서, 이용할 수 있는 곳을 하나의 흐름으로 정리합니다.' },
        { title: '다음 단계가 보이는 서재', body: '읽고 보고 플레이한 작품을 하나의 서재에 모으면서 종류마다 진행 단위, 판본과 언어를 따로 기록합니다.' },
        { title: '목록을 계획으로', body: '종류에 상관없이 목록의 순서를 정하고 메모를 남겨 일정표나 지도로 만들 수 있습니다.' },
        { title: '한 사람을 팔로우', body: '창작자를 팔로우하면 그 사람이 만든 책과 게임, 제작 기록과 기여를 하나의 항목에서 볼 수 있습니다.' },
        { title: '현실과 연결', body: '팔로우한 작품의 박람회, 사인회나 성지순례 장소가 등록되면 알림을 받을 수 있습니다.' },
      ],
    },
    constant: {
      label: '변하지 않는 것',
      headline: '계속 지켜 갈 원칙입니다.',
      items: [
        { title: '하나의 엔진', body: '분야마다 사이트를 따로 만들거나 언어마다 데이터베이스를 새로 만들지 않습니다.' },
        { title: '페이지를 쌓지 않습니다', body: '광고를 위해 페이지를 늘리지 않으며 검색 순위나 AI 인용을 위해 페이지를 대량 생성하지 않습니다.' },
        { title: '창작자의 수익', body: '창작자에게 지급할 금액을 운영 자금으로 사용하지 않습니다.' },
        { title: '기여자의 라이선스', body: '기여자가 허용한 범위를 넘어 데이터를 사용하겠다고 약속하지 않습니다.' },
        { title: '장소와 행사', body: '작품이나 창작자와 연결된 장소와 행사만 다룹니다.' },
      ],
    },
    closing: '새 종류가 추가되어도 계정과 기록은 그대로 이어집니다.',
  },
} satisfies MiniSite<RoadmapStrings>;
