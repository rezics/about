// The modules overview (/engine/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The kind picker reads each kind's eight parts and notes from kinds.ts. Shared module-ring
// labels live in modules.ts.
// Placeholders in braces are filled at build time.
import type { MiniSite, ModuleId, PartId } from '../schema';
import { site as shared } from '../site.ko';

export interface EngineStrings {
  hero: { headline: string; lede: string; alt: string };
  picker: {
    label: string;
    headline: string;
    lead: string;
    legend: string;
    /** `{kind}` */
    listTitle: string;
    /** `{kind}` */
    link: string;
    note: string;
  };
  statement: [string, string];
  parts: { label: string; headline: string; lead: string; toggle: string; example: string; examples: Record<PartId, string> };
  modules: { label: string; headline: string; lead: string; roles: Record<ModuleId, string> };
  config: { label: string; headline: string; lead: string; items: { title: string; body: string }[]; note: string };
  closing: string;
}

export default {
  id: 'engine',
  base: '/engine/',
  name: shared.nav.engine,
  next: 'universal-index',
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: 'REZICS 모듈: 15개 구성 요소, 5개 모듈',
        description:
          '서재와 애니메이션, 게임부터 MCP Hub까지 아홉 가지 유형은 같은 15개 구성 요소로 이루어집니다. 유형을 선택해 어떤 8개 구성 요소를 사용하는지, 어떤 모듈에 속하는지 살펴보세요.',
      },
    },
  ],
  strings: {
    hero: {
      headline: '아홉 가지 유형, 하나의 구성 요소 체계.',
      lede: '책과 애니메이션, 게임, 소프트웨어, MCP 서버까지 모든 유형은 공용 구성 요소 15개 중 8개로 이루어집니다.',
      alt: '명도가 다른 회색 종이 다섯 장을 계단처럼 쌓고 맨 위에 작은 색종이 다섯 장을 놓은 모습',
    },
    picker: {
      label: '아홉 가지 유형',
      headline: '유형을 선택하고 사용하는 구성 요소 8개를 확인하세요.',
      lead: '구성 요소의 이름은 어디서나 같지만 역할은 유형에 따라 다릅니다. 서재에서 판본은 번역본과 합본을 뜻하고 게임에서는 플랫폼과 지역을 뜻합니다.',
      legend: '유형 선택',
      listTitle: '{kind}에 사용하는 구성 요소 8개',
      link: '{kind} 보기',
      note: '각 유형은 필요에 따라 공용 구성 요소를 연결합니다. 여기에는 유형을 가장 잘 설명하는 8개를 표시합니다.',
    },
    statement: ['구성 요소는 한 번만 만들고,', '유형에 따라 조합만 달라집니다.'],
    parts: {
      label: '15개 구성 요소',
      headline: '15개 구성 요소가 각각 한 가지 일을 합니다.',
      lead: '같은 구성 요소도 유형에 따라 다른 역할을 합니다. 전체 목록에서 각각의 용도와 예시를 확인할 수 있습니다.',
      toggle: '구성 요소 목록과 예시 보기',
      example: '예시',
      examples: {
        identity: '같은 작가가 소설과 게임을 만들면 양쪽 제작진 항목이 한 사람으로 연결됩니다.',
        names: '비주얼 노벨의 일본어 원제와 중국어 번역명, 로마자 표기를 함께 등록해 어떤 이름으로 검색해도 찾을 수 있습니다.',
        editions: '세 권 합본은 하나의 발행으로 기록하되 세 권은 각각 작품으로 유지합니다.',
        credits: '성우와 배역, 작품을 하나의 기록으로 연결해 나중에 짜 맞출 필요가 없습니다.',
        relations: '애니메이션 페이지에는 “원작”, 원작 페이지에는 “각색 작품”으로 표시하며 두 관계는 하나의 기록에서 나옵니다.',
        facets: '“여성 주인공이 나오는 소설 원작 애니메이션”을 보기로 저장하고 이름을 붙여 팔로우할 수 있습니다.',
        ratings: '같은 오디오북도 이야기와 번역, 낭독을 따로 평점 매길 수 있습니다.',
        discussion: '토론은 읽은 위치에 맞춰 표시해 아직 읽지 않은 결말을 미리 보지 않도록 합니다.',
        wiki: '인물 페이지의 정보 상자는 그래프의 사실을 사용합니다. 한 번 수정하면 이를 사용하는 모든 페이지에 반영됩니다.',
        lists: '입문 목록에 소설과 만화, 애니메이션을 순서대로 배치하고 각 항목에 이유를 덧붙입니다.',
        progress: '일본어판 1권부터 10권까지 읽은 뒤 중국어판으로 바꾸면 11권부터 이어서 기록합니다.',
        follow: '저장한 보기를 팔로우하면 조건에 맞는 새 항목이 생길 때 알림을 받습니다.',
        offers: '재고 정보가 없으면 알 수 없음으로 표시하며 재고 있음으로 표시하지 않습니다.',
        specs: '호환성 기록마다 클라이언트와 버전, 확인 날짜를 표시합니다.',
        schedule: '발표, 예정, 확정, 연기는 각각 별도 상태로 기록합니다.',
      },
    },
    modules: {
      label: '5개 모듈',
      headline: '구성 요소는 용도에 따라 5개 모듈로 나뉩니다.',
      lead: '각 모듈은 하나의 질문에 답하고 필요한 구성 요소를 사용합니다. 신뢰 모듈은 예외입니다. 특정 구성 요소에 속하지 않고 모든 구성 요소에서 출처와 권리, 개인정보를 관리합니다.',
      roles: {
        'universal-index': '이 항목은 무엇인가',
        community: '사람들은 어떻게 이용하는가',
        zones: '사이트를 어떻게 구성하는가',
        create: '어떻게 만들고 발행하는가',
        trust: '무엇을 근거로 신뢰하는가',
      },
    },
    config: {
      label: '새 유형',
      headline: '새 유형은 설정만으로 추가할 수 있습니다.',
      lead: '새 유형을 추가할 때 별도의 백엔드를 만들 필요가 없습니다. 구성 요소는 이미 준비되어 있으며 다섯 가지 설정만 추가하면 됩니다.',
      items: [
        { title: '용어', body: '유형과 속성을 정의하고 기존 용어를 최대한 재사용합니다.' },
        { title: '매핑', body: '외부 데이터의 각 필드를 그래프의 어떤 속성에 연결할지 정합니다.' },
        { title: '초기 데이터', body: '첫 항목과 항목 사이의 연결입니다.' },
        { title: '저장된 보기', body: '자주 쓰는 필터 조합을 색인과 탭으로 만듭니다.' },
        { title: 'Zone', body: '사이트에서 해당 유형의 페이지를 모아 한곳에 구성합니다.' },
      ],
      note: '새 동작이 필요하면 한 번만 구현해 새 구성 요소로 만듭니다. 필요한 유형은 이를 연결해 사용할 수 있습니다.',
    },
    closing: '관심 있는 유형부터 시작하세요. 나머지 여덟 가지도 같은 계정에 연결되어 있습니다.',
  },
} satisfies MiniSite<EngineStrings>;
