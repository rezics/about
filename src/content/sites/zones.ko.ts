// 站點 (/engine/zones/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). The example
// Zone is an illustrative (示意) 《魔法禁書目錄》 Wiki+ in zh-Hant; text only, per
// .temp/sites/EXAMPLE-WORK.md. Its handle, routes and revision log are not REZICS data.
import type { MiniSite } from '../schema';
import { modules } from '../modules.ko';
import { site as shared } from '../site.ko';

const mod = modules.find((m) => m.id === 'zones')!;

export interface Item {
  title: string;
  body: string;
}

export interface ZonesStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  routes: {
    label: string;
    headline: string;
    lead: string;
    caption: string;
    /** Route title and its path; `depth` indents a child route. */
    entries: { title: string; path: string; depth?: 1; note?: string }[];
    note: string;
  };
  templates: { label: string; headline: string; lead: string; steps: Item[]; note: string };
  themes: { label: string; headline: string; lead: string; items: Item[] };
  wiki: { label: string; headline: string; lead: string; items: Item[] };
  shared: { label: string; headline: string; lead: string; more: string; alt: string };
  log: { label: string; headline: string; lead: string; caption: string; entries: Item[]; items: Item[] };
  closing: string;
}

export default {
  id: 'zones',
  base: '/engine/zones/',
  name: mod.name,
  theme: { module: 'zones' },
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: 'Zone: 공유 그래프 위에 사이트 만들기',
        description:
          'Zone은 REZICS의 공유 데이터 위에 커뮤니티가 만드는 완전한 사이트입니다. 경로, 템플릿, 탐색 구조와 테마를 직접 정할 수 있습니다. Wiki+의 구성, 스포일러 방지와 업데이트 방식을 살펴보세요.',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: shared.nav.engine,
      headline: '사이트는 직접 만들고 데이터는 함께 씁니다.',
      lede: 'Zone마다 홈, 탐색 구조와 레이아웃이 있습니다. 커뮤니티가 사이트를 구성하고 작품, 인물과 사실은 공유 데이터를 사용합니다.',
      alt: '짙은 회색 종이를 지붕 없는 작은 집 모양으로 접고 앞쪽 벽에 문을 냈습니다. 두 공간에는 장미색과 파란 종이 조각이 하나씩 놓여 있습니다.',
    },
    routes: {
      label: '경로',
      headline: '주소의 모든 단계를 커뮤니티가 정합니다.',
      lead: '각 경로는 고정된 항목을 가리키며 경로에는 중국어를 사용할 수 있습니다. 상세 페이지는 이 Zone에 포함된 데이터만 엽니다. 경로를 만들어도 데이터 항목이 추가되지는 않습니다. 탐색 구조는 별도로 순서를 정합니다.',
      caption: '예시: 《어떤 마술의 금서목록》 Wiki+의 경로',
      entries: [
        { title: '홈', path: '/z/index-wiki' },
        { title: '작품', path: '/z/index-wiki/작품' },
        { title: '《신약》', path: '/z/index-wiki/작품/신약', depth: 1 },
        { title: '인물', path: '/z/index-wiki/인물' },
        { title: '읽는 순서', path: '/z/index-wiki/읽는-순서', note: '맞춤 페이지' },
        { title: '연표', path: '/z/index-wiki/연표' },
        { title: '검색', path: '/z/index-wiki/검색' },
      ],
      note: '경로는 Zone의 경로 표에서 관리합니다. 플랫폼이 예약한 경로는 적어 사이트 주소를 침범하지 않습니다. 토론은 커뮤니티 쪽의 /r/index-wiki에 있으며 양쪽이 서로 연결됩니다.',
    },
    templates: {
      label: '템플릿',
      headline: '가장 구체적인 템플릿부터 찾습니다.',
      lead: '페이지의 각 영역은 현재 데이터, 속성, 문서, 목록 또는 저장된 검색 중 하나를 사용합니다. 영역 안의 목록은 마지막 항목까지 볼 수 있습니다.',
      steps: [
        { title: '경로 지정', body: '경로에 템플릿이 지정되어 있으면 해당 템플릿을 사용합니다.' },
        { title: '유형', body: '지정되지 않았다면 해당 유형의 템플릿을 사용합니다. 예를 들어 모든 인물 페이지가 하나의 템플릿을 공유할 수 있습니다.' },
        { title: '구조', body: '유형 템플릿도 없으면 해당 구조의 템플릿을 사용합니다.' },
        { title: '공통 페이지', body: '어느 템플릿도 없으면 공통 페이지를 사용합니다. 이름, 식별자, 설명과 출처, 양방향 관계를 모두 표시합니다.' },
      ],
      note: '익숙하지 않은 유형에 책의 버튼을 그대로 적용하지 않습니다. 해당 유형에 필요한 구성 요소만 페이지에 배치합니다.',
    },
    themes: {
      label: '테마',
      headline: '테마는 모양을 바꾸지만 보호 항목은 바꾸지 못합니다.',
      lead: '브랜드, 색상, 글꼴과 레이아웃은 커뮤니티가 정합니다. 플랫폼이 보호하는 일부 항목은 어떤 테마를 사용해도 그대로 유지됩니다.',
      items: [
        { title: '커뮤니티가 결정', body: '로고, 색상, 글꼴과 레이아웃입니다.' },
        { title: '플랫폼이 보호', body: '항목 식별, 검색, 언어 전환, 출처와 접근성입니다.' },
        {
          title: '자체 렌더링 코드',
          body: '더 많은 기능이 필요하면 Zone에 자체 렌더링 코드를 추가할 수 있습니다. 코드는 먼저 검토를 받아야 하며 독자는 언제든 표준 레이아웃으로 전환할 수 있습니다. 백엔드는 하나로 유지됩니다.',
        },
      ],
    },
    wiki: {
      label: 'Wiki+',
      headline: 'Wiki+는 읽은 곳에서 멈춥니다.',
      lead: 'Wiki+는 작품 전용 Zone입니다. 인물, 장소, 연표와 읽는 순서마다 페이지가 있습니다. 정보 상자는 그래프의 사실을 읽으며 다른 페이지도 같은 사실을 사용합니다.',
      items: [
        { title: '로그인 전', body: '이야기 시작부터 볼 수 있고 아직 공개되지 않은 사실은 숨겨집니다.' },
        { title: '로그인 후', body: '기본적으로 읽은 곳에서 멈춥니다. 전체 내용을 보도록 설정할 수도 있습니다.' },
        {
          title: '한 번에 만들기',
          body: '텍스트를 보유한 사람은 자신의 컴퓨터에서 AI 에이전트를 선택해 장마다 인물, 장소, 관계와 사건을 정리합니다. 각 항목에 위치와 짧은 인용문을 붙여 제안서로 제출합니다. 검토자가 승인한 뒤에 게시되며 REZICS는 전체 텍스트를 받지 않습니다.',
        },
        { title: '커뮤니티가 결정', body: '에이전트가 초안을 작성하도록 허용할지, 생성된 문장을 받을지는 각 커뮤니티가 정합니다.' },
      ],
    },
    shared: {
      label: '공유',
      headline: '사이트는 독립적으로 운영하고 데이터는 함께 사용합니다.',
      lead: '중국어 번체 Wiki+와 영어 독서 모임 사이트가 같은 작품과 인물을 공유할 수 있습니다. 한쪽에서는 《어떤 마술의 금서목록》, 다른 쪽에서는 A Certain Magical Index로 표시하지만 같은 항목에 연결됩니다. 이름, 소개, 순서와 채택할 주장은 각각 정합니다.',
      more: '하나의 Zone에 책, 애니메이션과 게임을 함께 모아 작품 세계 전체를 위한 사이트를 만들 수도 있습니다.',
      alt: '짙은 회색 종이 두 장을 따로 접어 연한 파란 종이 띠 위에 앞뒤로 놓았습니다.',
    },
    log: {
      label: '버전 업데이트',
      headline: '모든 업데이트를 기록으로 남깁니다.',
      lead: '업데이트는 경로, 탐색 구조, 템플릿, 테마와 검색을 하나의 버전으로 묶습니다. 게시 전에 미리 보고 검증할 수 있으며 게시 후에는 이전 버전으로 복원하거나 사이트 전체를 내보낼 수 있습니다.',
      caption: '예시: 하나의 Wiki+ 업데이트 기록',
      entries: [
        { title: '세 번째 버전', body: '“읽는 순서” 페이지를 추가하고 탐색 항목을 늘립니다. 미리 보고 검증한 뒤 게시합니다.' },
        { title: '두 번째 버전', body: '인물 페이지에 새 템플릿을 적용합니다. 게시 후 첫 번째 버전으로 복원합니다.' },
        { title: '첫 번째 버전', body: '홈, 작품, 인물과 연표를 게시합니다.' },
      ],
      items: [
        { title: '네 가지 권한', body: '사이트 편집, 게시, 커뮤니티 운영과 그래프 기여 권한을 분리합니다. 레이아웃을 바꾸는 사람이 그래프 데이터를 수정할 수 있는 것은 아닙니다.' },
        { title: '두 가지 설정', body: '공개 여부와 검색 및 추천에 표시할지는 별도로 설정합니다.' },
        { title: '같은 경로', body: '사람은 웹에서, 에이전트는 API에서 수정하지만 같은 경로를 사용합니다.' },
      ],
    },
    closing: 'REZICS에서 Zone을 열어 커뮤니티 사이트를 만들어 보세요.',
  },
} satisfies MiniSite<ZonesStrings>;
