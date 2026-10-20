// 通用索引 (/engine/universal-index/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The page follows one work, 《어떤 마술의 금서목록》, as a plain-text example of how REZICS records a work
// (.temp/sites/EXAMPLE-WORK.md: no cover or likeness, no publishers or studios, no counts).
import type { MiniSite } from '../schema';
import { modules } from '../modules.ko';
import { site as shared } from '../site.ko';

const mod = modules.find((m) => m.id === 'universal-index')!;

export interface Item {
  title: string;
  body: string;
}

export interface IndexStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  names: {
    label: string;
    headline: string;
    lead: string;
    /** `lang` is a BCP 47 tag; the Japanese title is set in a Japanese face (Noto Sans TC lacks 録). */
    names: { name: string; lang: string; label: string }[];
    caption: string;
  };
  people: { label: string; headline: string; lead: string; rows: Item[]; characters: string };
  layers: { label: string; headline: string; lead: string; alt: string; items: Item[]; aside: string };
  relations: {
    label: string;
    headline: string;
    lead: string;
    /** Related works, with each sequel's source made explicit; `kind` colours its tile. */
    items: { id: string; rel: string; name: string; line: string; kind: 'books' | 'manga' | 'anime' | 'visual-novels' }[];
    note: string;
  };
  values: { label: string; headline: string; lead: string; items: Item[] };
  merge: { label: string; headline: string; lead: string; items: Item[] };
  closing: string;
}

export default {
  id: 'universal-index',
  base: '/engine/universal-index/',
  name: mod.name,
  theme: { module: 'universal-index' },
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: '통합 색인: 모든 항목에 하나의 정체성',
        description:
          '《어떤 마술의 금서목록》을 예로 들어 REZICS가 한 작품에 하나의 정체성을 부여하는 방식을 살펴봅니다. 언어별 이름과 제작진, 작품과 발행, 후속작과 각색, 필터와 보기, 병합과 분리까지 확인할 수 있습니다.',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: shared.nav.engine,
      headline: '한 작품에 하나의 정체성을 부여합니다.',
      lede: '예를 들어 《어떤 마술의 금서목록》은 일본어 원제와 중국어, 영어 제목이 모두 같은 작품을 가리킵니다. 읽는 언어에 맞는 이름을 먼저 표시합니다.',
      alt: '짙은 회색 바탕 위에 같은 크기의 회색과 색종이를 격자 모양으로 정렬하고 그중 한 장의 모서리를 살짝 들어 올린 모습',
    },
    names: {
      label: '이름',
      headline: '이름은 여러 개여도 정체성은 하나입니다.',
      lead: '각 이름에 언어와 용도를 기록합니다. 원제와 번역명, 별칭, 발음을 모두 검색할 수 있어 어느 이름으로 찾아도 같은 작품이 나옵니다.',
      names: [
        { name: '어떤 마술의 금서목록', lang: 'zh-Hant', label: '한국어 제목' },
        { name: 'とある魔術の禁書目録', lang: 'ja', label: '일본어 원제' },
        { name: 'A Certain Magical Index', lang: 'en', label: '영어 제목' },
      ],
      caption: '《어떤 마술의 금서목록》을 예로 들어 REZICS의 작품 기록 방식을 설명합니다.',
    },
    people: {
      label: '제작진',
      headline: '사람은 하나의 정체성을 가지며 맡은 역할을 기록합니다.',
      lead: '카마치 카즈마는 소설의 작가이자 각색 만화와 애니메이션, 게임의 원작자로 등록되어 모두 같은 페이지로 연결됩니다. 각 이름은 사람이나 조직에 연결하고 맡은 역할과 담당 부분을 기록합니다. 정보가 서로 다르면 각 주장과 출처를 함께 표시합니다.',
      rows: [
        { title: '카마치 카즈마', body: '소설 작가. 각색 만화, 애니메이션, 게임의 원작자.' },
        { title: '하이무라 키요타카', body: '소설 삽화.' },
        { title: '코기노 추야', body: '만화 작화.' },
      ],
      characters: '등장인물도 마찬가지입니다. 같은 인물이 소설과 만화, 애니메이션에 등장해도 정체성은 하나이며 작품마다 등장 정보를 기록합니다.',
    },
    layers: {
      label: '세 계층',
      headline: '작품과 텍스트, 발행을 세 계층으로 기록합니다.',
      lead: '작품은 이야기 그 자체입니다. 하나의 이야기에 일본어 원문, 중국어 번역본, 영어 번역본 등 여러 텍스트가 있을 수 있습니다. 실제로 출간될 때마다 발행 기록을 만듭니다.',
      alt: '짙은 회색과 따뜻한 회색, 녹색 종이 세 장을 차례로 겹치고 따뜻한 회색 종이의 모서리를 살짝 말아 올린 모습',
      items: [
        { title: '작품', body: '이야기 그 자체입니다. 평점과 팔로우, 관계를 이 계층에 연결합니다.' },
        { title: '텍스트', body: '원문과 각 언어의 번역본입니다. 번역본은 같은 작품의 다른 텍스트이며 번역자와 권리가 따로 있습니다.' },
        { title: '발행', body: '페이퍼백과 전자책, 합본을 출간할 때마다 별도로 기록하고 당시 출간된 내용만 담습니다.' },
      ],
      aside: '오탈자 수정이나 재인쇄는 같은 작품으로 유지합니다. 줄거리를 다시 쓴 판본은 별도 작품으로 등록하고 “개작” 관계로 연결합니다.',
    },
    relations: {
      label: '관계',
      headline: '관계는 한 번만 기록하고 양쪽에서 다르게 표시합니다.',
      lead: '본편과 《신약 어떤 마술의 금서목록》, 《창약 어떤 마술의 금서목록》을 각각 기록하고 후속작 관계로 연결합니다. 본편 페이지에는 “후속작”, 《신약》 페이지에는 “전작”으로 표시하지만 같은 관계를 가리킵니다. 만화와 애니메이션, 외전도 각각 원작에 연결합니다.',
      items: [
        { id: 'shinyaku', rel: '본편의 후속작', name: '《신약 어떤 마술의 금서목록》', line: '두 번째 시리즈, 2011년부터 2019년까지', kind: 'books' },
        { id: 'souyaku', rel: '《신약 어떤 마술의 금서목록》의 후속작', name: '《창약 어떤 마술의 금서목록》', line: '세 번째 시리즈, 2020년에 시작해 현재도 출간 중', kind: 'books' },
        { id: 'manga', rel: '각색 작품', name: '만화', line: '코기노 추야 작화, 2007년에 연재 시작', kind: 'manga' },
        { id: 'anime', rel: '각색 작품', name: '애니메이션', line: '시즌 3개(2008년, 2010년, 2018년)와 영화 1편(2013년)', kind: 'anime' },
        { id: 'railgun', rel: '외전', name: '《어떤 과학의 초전자포》', line: '《어떤 과학의 일방통행》과 마찬가지로 본편의 인물을 공유하는 외전', kind: 'manga' },
        { id: 'vn', rel: '각색 작품', name: '비주얼 노벨', line: '2013년에 출시되어 비주얼 노벨 색인에도 등록됨', kind: 'visual-novels' },
      ],
      note: '각 관계에는 이름과 방향, 출처가 있습니다. 이름이 비슷하다는 것만으로는 근거가 되지 않습니다. 근거가 없다면 연결하지 않습니다.',
    },
    values: {
      label: '필터',
      headline: '각 값마다 페이지가 있습니다.',
      lead: '인물과 유형, 언어, 각색 원작은 각각 페이지로 연결됩니다. 여러 값을 조합해 필터링할 수도 있습니다.',
      items: [
        { title: '같은 등장 기록에 연결', body: '“주인공” 역할은 특정 인물의 등장 기록에 연결하므로 다른 인물이 주인공인 작품과 잘못 묶이지 않습니다.' },
        { title: '보기로 저장', body: '조건을 저장하고 이름을 붙이면 보기가 됩니다. 팔로우하거나 홈페이지 탭에 고정하거나 Zone의 색인으로 사용할 수 있습니다.' },
        { title: '마지막 항목까지 보기', body: '모든 목록에서 마지막 항목까지 볼 수 있습니다. 정확한 개수인지 최소 개수인지 화면에 명확히 표시합니다.' },
      ],
    },
    merge: {
      label: '병합과 분리',
      headline: '병합은 되돌릴 수 있고 분리 기록에는 항목의 이동 경로가 남습니다.',
      lead: '누군가 영어 제목으로 같은 작품을 중복 등록했다고 가정해 보겠습니다. 병합 전에 REZICS는 영향을 받는 모든 데이터를 나열하고 각 충돌에 대한 결정을 요청합니다.',
      items: [
        {
          title: '먼저 검색한 뒤 등록',
          body: '새 항목을 만들기 전에 원제와 별칭, 발음, 작가, 식별자로 먼저 검색합니다. 찾으면 별칭이나 판본을 추가합니다. 제목이나 ISBN이 같다는 사실은 단서일 뿐 증거가 아닙니다.',
        },
        {
          title: '병합',
          body: '평점과 목록, 서재 기록, Wiki 정보는 남기는 항목으로 옮깁니다. 한 사람의 평점 두 개가 두 표가 되지 않으며 소장 도서 두 권도 한 권으로 합쳐지지 않습니다. 이전 주소는 계속 열리며 남긴 항목으로 연결됩니다.',
        },
        { title: '되돌리기', body: '되돌리기는 과거로 돌아가는 것이 아니라 새로 내리는 결정입니다. 병합 이후의 수정 사항은 하나씩 원래 항목에 돌려보내고 분류할 수 없는 항목은 검토 대기열에 넣습니다.' },
        { title: '분리', body: '제목이 같은 두 책이 하나로 기록된 경우 분리 후 이전 항목에 새로 만들어진 항목과 각각의 이동 경로를 표시합니다.' },
        {
          title: '사람이 결정',
          body: '누구나 병합을 제안할 수 있으며 AI 에이전트도 가능합니다. 결정은 검토자가 내립니다. 이미 사용 중이거나 논란이 있는 병합은 서로 독립적인 두 사람이 승인해야 합니다. 봇과 운영자는 한 사람으로 계산합니다.',
        },
      ],
    },
    closing: 'REZICS에서 익숙한 작품을 찾아 이름을 모두 확인해 보세요.',
  },
} satisfies MiniSite<IndexStrings>;
