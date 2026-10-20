// Skill Hub (/skills/): every visible string of the site, shaped by the v3 parts (hero, section,
// facts list, photo row, tile masonry, statement, closing). Design record and sources:
// src/sites/skills/SITE.md and facts.md. Terms: 「AI 代理」 on first mention in a section, then
// 「代理」; 「技能」 throughout; 「MCP 伺服器」.
import type { KindId, MiniSite } from '../schema';

/** A hairline facts row: title left, text right. */
export interface Row {
  title: string;
  body: string;
}

/** A frontmatter line of the example skill and what REZICS does with it. */
export interface KeyRow {
  key: string;
  value?: string;
  body: string;
}

/** A file role of the Agent Skills format. */
export interface FileRow extends Row {
  /** The literal path from the format, set as code. */
  path?: string;
  /** A short mark beside the title (可執行, 缺少). */
  mark?: string;
}

/** A section opening: eyebrow in columns 1 to 3, serif h2 in 4 to 11, lead in 4 to 9. */
export interface Head {
  eyebrow: string;
  /** One or two short clauses; each item is one line on wide screens. */
  headline: string[];
  lead?: string;
}

/** A large serif statement: the first half in ink, the second in muted ink. */
export interface Said {
  text: string;
  muted: string;
}

/** A still-life picture: the file stem under /images/sites/skills/ and its description. */
export interface Pic {
  src: string;
  alt: string;
}

/**
 * How an inner page ends: a lead-in to the next page (a section whose title leads into one tile),
 * then the closing statement before the ink pill into REZICS.
 */
export interface End {
  next: string;
  closing: string;
}

export interface SkillsStrings {
  ui: {
    nextPage: string;
    nextSite: string;
  };
  landing: {
    hero: { eyebrow: string; headline: string[]; lede: string; pic: Pic };
    layers: Head & { rows: Row[] };
    files: Head & { body: string; link: string; pic: Pic };
    statement: Said;
    pages: Head & { tiles: { slug: string; line: string }[] };
    neighbours: Head & { tiles: { to: KindId; line: string }[] };
    closing: { title: string; body: string };
  };
  directory: {
    head: { headline: string[]; lede: string };
    specimens: Head & { rows: Row[] };
    filters: Head & { rows: Row[] };
    statement: Said;
    lists: Head & { body: string; pic: Pic };
    views: Head & { rows: Row[] };
    end: End;
  };
  versions: {
    head: { headline: string[]; lede: string };
    frontmatter: Head & { rows: KeyRow[] };
    files: Head & { rows: FileRow[] };
    history: Head & { body: string[]; pic: Pic };
    historyExample: Head & { rows: Row[] };
    packages: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  evidence: {
    head: { headline: string[]; lede: string };
    declaration: Head & { code: string; codeLabel: string; caption: string };
    record: Head & { rows: Row[] };
    rules: Head & { rows: Row[] };
    opinions: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  use: {
    head: { headline: string[]; lede: string };
    steps: Head & { rows: Row[] };
    agent: Head & { paragraphs: [string, string]; link: string };
    later: Head & { rows: Row[] };
    end: End;
  };
  publish: {
    head: { headline: string[]; lede: string };
    import: Head & { body: string; pic: Pic };
    steps: Head & { rows: Row[] };
    limits: Head & { rows: Row[]; after: string };
    statement: Said & { note: string; rows: Row[] };
    credits: Head & { rows: Row[] };
    end: End & { nextLine: string };
  };
}

const skills = {
  id: 'skills',
  base: '/skills/',
  name: 'Skill Hub',
  theme: { kind: 'skills' },
  pages: [
    {
      slug: '',
      label: '개요',
      meta: {
        title: 'Skill Hub: AI 에이전트 스킬 색인',
        description:
          'Skill Hub는 AI 에이전트가 사용하는 스킬을 모읍니다. 각 스킬의 전체 내용, 파일, 버전, 날짜가 표시된 호환 기록을 공개하고 평점과 토론을 버전에 연결해 사용 전에 확인할 수 있습니다.',
      },
    },
    {
      slug: 'directory',
      label: '목록',
      meta: {
        title: 'Skill Hub 목록: 한 줄에 스킬 하나',
        description:
          'Skill Hub에서 설명 한 줄로 스킬을 찾습니다. 등록된 속성으로 필터링하고 마지막 결과까지 볼 수 있습니다. 다른 사람이 만든 목록과 저장한 검색 조건을 팔로우하면 조건에 맞는 새 스킬이 등록될 때 알 수 있습니다.',
      },
    },
    {
      slug: 'versions',
      label: '버전과 파일',
      meta: {
        title: '스킬 페이지: 전체 내용, 파일, 버전',
        description:
          '스킬 페이지에 SKILL.md 전체 내용을 공개하고 각 파일의 역할과 해시를 표시합니다. 실행 가능한 파일은 따로 표시합니다. 각 버전의 내용, 라이선스, 출처를 고정하며 새 버전이 이전 버전을 덮어쓰지 않습니다.',
      },
    },
    {
      slug: 'evidence',
      label: '근거와 평점',
      meta: {
        title: '스킬 호환 기록과 평점',
        description:
          '스킬 작성자가 적은 호환 조건은 선언입니다. Skill Hub는 누가 어떤 AI 에이전트와 버전, 언어로 언제 사용했는지 별도로 기록하며 평점과 토론도 각각 버전에 연결합니다.',
      },
    },
    {
      slug: 'use',
      label: '에이전트에서 사용',
      meta: {
        title: 'AI 에이전트에 스킬 전달',
        description:
          'Skill Hub에서 스킬을 찾은 뒤 전체 내용과 파일을 읽고 호환 기록을 확인합니다. 버전을 선택해 다운로드하거나 복사하고 필요한 패키지를 고정한 다음 업데이트를 팔로우합니다. AI 에이전트도 API와 MCP를 통해 같은 데이터를 읽을 수 있습니다.',
      },
    },
    {
      slug: 'publish',
      label: '스킬 게시',
      meta: {
        title: 'Skill Hub에 스킬 게시',
        description:
          '형식에 맞는 스킬 폴더를 Skill Hub로 가져옵니다. 모든 바이트를 그대로 보존하고 스크립트를 실행하지 않으며 해석할 수 없는 필드도 버리지 않습니다. 게시할 때마다 파일, 라이선스, 출처를 고정해 새 버전으로 만듭니다.',
      },
    },
  ],
  strings: {
    ui: {
      nextPage: '다음 페이지',
      nextSite: '다음 사이트',
    },
    landing: {
      hero: {
        eyebrow: 'Skill Hub',
        headline: ['AI 에이전트에 맡기기 전에', '차근차근 읽어 보세요.'],
        lede: 'Skill Hub에서 AI 에이전트가 사용하는 스킬을 자세히 살펴보세요. 전체 설명, 파일, 버전, 날짜가 포함된 사용 기록을 선택 전에 확인할 수 있습니다.',
        pic: {
          src: 'fold',
          alt: '라임색 종이를 반으로 접어 조금 펼쳤고, 아래에는 미색, 연한 초록, 연한 파란 종이가 층마다 가장자리를 드러내며 포개져 있습니다.',
        },
      },
      layers: {
        eyebrow: '읽는 순서',
        headline: ['스킬을 세 단계로 읽습니다.', 'AI 에이전트가 읽는 순서대로.'],
        lead: '챕터별 인물을 정리하는 스킬을 예로 들어(예시), 먼저 이름과 설명을 읽고 전체 안내를 읽은 다음 작업에 필요한 파일을 확인합니다. Skill Hub도 같은 순서로 보여 줍니다.',
        rows: [
          {
            title: '한 줄',
            body: 'chapter-cast 설명에는 “챕터에 나오는 인물을 문단 위치와 함께 나열”이라고 적혀 있습니다. 에이전트는 먼저 이 한 줄을 읽고 작업에 맞는지 판단합니다.',
          },
          {
            title: '한 페이지',
            body: 'SKILL.md에는 “먼저 인물과 별칭을 나열하고 원문 위치를 표시합니다. 출처가 없으면 찾지 못했다고 표시합니다.”라고 적혀 있습니다. 인물 정리가 필요할 때 에이전트가 이 페이지에서 단계와 제한 사항을 읽습니다.',
          },
          {
            title: '사용하는 파일',
            body: 'references/aliases.md에는 “인물, 별칭, 원문 위치”의 대조 형식이 있습니다. 별칭 비교가 필요한 작업에서만 에이전트가 이 참고 파일을 읽습니다. 나머지 파일도 각각 목록에 표시됩니다.',
          },
        ],
      },
      files: {
        eyebrow: '파일',
        headline: ['모든 파일을 목록에 담고', '실행 파일은 따로 표시합니다.'],
        body: 'SKILL.md, scripts/, references/, assets/, 규격에 이름이 없는 파일까지 각각 경로, 역할, 해시를 기록합니다. SKILL.md에 언급됐지만 폴더에 없는 파일도 표시합니다.',
        link: '버전과 파일 보기',
        pic: {
          src: 'folder',
          alt: '라임색 종이를 접어 폴더를 만들고 표지를 열었습니다. 안에는 미색, 연한 초록, 연한 파랑, 겨자색 종이가 겹쳐져 가장자리를 드러냅니다.',
        },
      },
      statement: {
        text: '등록이 보증을 뜻하지 않습니다.',
        muted:
          '전체 내용과 파일을 읽고 판단하세요. REZICS는 스킬을 가져올 때 저장만 하고 명령을 실행하지 않습니다.',
      },
      pages: {
        eyebrow: '사이트 안내',
        headline: ['스킬을 찾는 것부터', '직접 게시하는 것까지.'],
        tiles: [
          { slug: 'directory', line: '설명 한 줄로 스킬 찾기' },
          { slug: 'versions', line: '전체 내용, 모든 파일과 버전' },
          { slug: 'evidence', line: '사용자와 사용 조건 확인' },
          { slug: 'use', line: '버전을 선택해 AI 에이전트에 전달' },
          { slug: 'publish', line: '폴더 하나, ID 하나' },
        ],
      },
      neighbours: {
        eyebrow: '연결된 항목',
        headline: ['스킬은 텍스트와 파일입니다.', '사용하는 항목은 각자 페이지가 있습니다.'],
        lead: '스킬이 사용하는 패키지는 소프트웨어에서 자체 버전을 갖습니다. 같은 작성자의 스킬과 MCP 서버는 하나의 ID로 연결됩니다. REZICS의 로컬 Wiki 도구 모음에도 책과 비주얼 노벨에서 출처가 있는 정보를 제안하도록 AI 에이전트를 안내하는 스킬이 포함됩니다.',
        tiles: [
          { to: 'software', line: '스킬에 필요한 패키지' },
          { to: 'mcp', line: '에이전트가 연결하는 도구' },
          { to: 'books', line: '장마다 출처가 있는 정보 제안' },
          { to: 'visual-novels', line: '게임 스크립트에서 출처 찾기' },
        ],
      },
      closing: {
        title: '한 줄로 검색을 시작하세요.',
        body: 'REZICS에서 스킬을 검색하고 전체 내용, 파일, 기록을 읽은 뒤 AI 에이전트에 전달하세요.',
      },
    },
    directory: {
      head: {
        headline: ['한 줄에 스킬 하나,', '설명 한 문장.'],
        lede: '목록의 각 줄에는 스킬 이름과 작성자가 쓴 설명 한 문장만 있습니다. AI 에이전트는 이 문장을 보고 스킬을 사용할지 판단하며, 여기서도 이 문장부터 읽고 선택합니다.',
      },
      specimens: {
        eyebrow: '목록 예시',
        headline: ['한 문장부터 읽고', '적합한지 확인하세요.'],
        lead: '아래 이름과 설명은 예시입니다. 두 스킬은 서로 다른 작업을 수행하며 설명 한 문장으로 차이를 알 수 있습니다.',
        rows: [
          { title: 'chapter-cast', body: '챕터의 인물과 별칭을 문단 위치와 함께 정리합니다. 인물 목록을 확인할 때 사용합니다.' },
          { title: 'quote-check', body: '인용문과 원문을 하나씩 대조하고 출처 위치와 근거를 찾지 못한 문장을 나열합니다.' },
        ],
      },
      filters: {
        eyebrow: '필터',
        headline: ['원하는 조건으로 필터링하고', '조건을 조합할 수 있습니다.'],
        lead: '제공되는 필터 항목을 조합해 사용할 수 있습니다.',
        rows: [
          { title: '검색', body: '“챕터 인물 정리”나 “인용문 확인”처럼 작업을 설명하는 말로 검색합니다.' },
          { title: '라이선스', body: '특정 라이선스를 사용하는 스킬만 표시합니다.' },
          { title: '언어', body: '설명에 사용한 언어나 기록된 작업 언어로 필터링합니다.' },
          { title: '호환 기록', body: '특정 AI 에이전트와 버전의 사용 기록이 있는 스킬만 표시합니다.' },
          { title: '업데이트 날짜', body: '최근 게시 날짜를 기준으로 정렬하거나 필터링합니다.' },
        ],
      },
      statement: {
        text: '마지막 결과까지 확인할 수 있습니다.',
        muted: '개수는 정확한 값인지 추정값인지 표시하며 이후 결과도 숨기지 않습니다.',
      },
      lists: {
        eyebrow: '목록',
        headline: ['다른 사람이 정리한 순서.'],
        body: '목록에는 하나의 작업 과정에 필요한 항목을 순서대로 담고 각각 선택한 이유를 적습니다. 스킬과 함께 MCP 서버, API, 소프트웨어도 추가할 수 있습니다. 목록 전체를 내보내거나 팔로우할 수 있으며 작성자가 새 항목을 추가하면 확인할 수 있습니다.',
        pic: {
          src: 'bundle',
          alt: '라임색, 미색, 연한 파랑, 겨자색 종이 다섯 장이 서로 다른 크기로 쌓여 있고 가운데를 라임색 종이 띠로 한 바퀴 둘렀습니다.',
        },
      },
      views: {
        eyebrow: '검색 조건 저장',
        headline: ['조건을 저장하고', '새 결과를 팔로우하세요.'],
        lead: '필터 조건을 저장된 검색으로 만들 수 있습니다. 저장한 검색을 팔로우하면 조건에 맞는 새 스킬이 등록될 때 피드에 표시됩니다.',
        rows: [
          { title: '검색', body: '조건을 설정합니다.' },
          { title: '저장', body: '조건을 저장하고 이름을 정합니다.' },
          { title: '팔로우', body: '새 결과가 나오면 알림을 받습니다.' },
        ],
      },
      end: {
        next: '찾았으면 열어 보세요.',
        closing: '원하는 스킬이 다음 줄에 있을 수 있습니다.',
      },
    },
    versions: {
      head: {
        headline: ['스킬을 열면', '모든 내용을 볼 수 있습니다.'],
        lede: '스킬 페이지는 두 번째 단계입니다. SKILL.md 원문과 포함된 모든 파일을 보여 줍니다. AI 에이전트에 전달하기 전에 에이전트가 읽을 모든 내용을 확인할 수 있습니다.',
      },
      frontmatter: {
        eyebrow: 'SKILL.md',
        headline: ['앞부분 몇 줄을', 'REZICS는 이렇게 읽습니다.'],
        lead: '스킬 폴더 예시입니다.',
        rows: [
          {
            key: 'name',
            value: 'chapter-cast',
            body: '이름에는 소문자, 숫자, 하이픈만 사용할 수 있으며 폴더 이름과 같아야 합니다. 이름은 스킬을 식별하는 데 사용하지만 이름이 같다고 같은 스킬로 간주하지 않습니다.',
          },
          {
            key: 'description',
            value: '챕터에 등장하는 인물을 문단 위치와 함께 나열합니다. 인물 목록을 정리할 때 사용합니다.',
            body: '이 문장이 목록에 표시되며 AI 에이전트가 가장 먼저 읽습니다.',
          },
          {
            key: 'license',
            value: 'Apache-2.0',
            body: '라이선스는 선언한 사람과 시간 정보와 함께 버전에 기록합니다. 이는 선언 기록이며 법률 검토가 아닙니다.',
          },
          {
            key: 'compatibility',
            value: '로컬 파일을 읽을 수 있는 에이전트 필요',
            body: '작성자가 직접 적은 호환 조건은 “별도 검증 필요”로 표시하며 검증된 사실로 취급하지 않습니다.',
          },
          {
            key: 'allowed-tools',
            value: 'read-file',
            body: '허용된 도구도 선언일 뿐이며 “별도 검증 필요”로 표시합니다.',
          },
          { key: '기타 필드', body: '규격에 없는 필드도 버리지 않습니다. 원문을 보존해 별도로 표시합니다.' },
        ],
      },
      files: {
        eyebrow: '파일',
        headline: ['파일마다 한 줄씩 표시합니다.'],
        lead: '파일마다 경로, 역할, 해시를 기록합니다. 다운로드한 바이트는 페이지의 기록과 같습니다.',
        rows: [
          { title: '안내 파일', path: 'SKILL.md', body: '전체 내용을 원문 그대로 표시합니다.' },
          {
            title: '스크립트',
            path: 'scripts/',
            mark: '실행 가능',
            body: '실행 가능한 파일은 표시를 붙입니다. REZICS는 가져올 때 저장만 하고 실행하지 않습니다.',
          },
          { title: '참고 자료', path: 'references/', body: 'AI 에이전트가 세부 정보가 필요할 때 읽는 문서입니다.' },
          { title: '에셋', path: 'assets/', body: '템플릿, 이미지, 데이터 파일도 경로와 해시를 표시합니다.' },
          { title: '기타', body: '규격에 이름이 없는 폴더와 파일도 하나씩 표시합니다.' },
          { title: '누락 파일', mark: '누락', body: 'SKILL.md에서 언급했지만 폴더에 없는 파일을 표시합니다.' },
        ],
      },
      history: {
        eyebrow: '버전',
        headline: ['모든 버전을 보관합니다.'],
        body: [
          '게시 후 변경 사항은 다음 버전이 됩니다. 이전 버전의 파일과 해시는 그대로 유지되며 사용 중인 버전을 대체하지 않습니다.',
          '버전은 게시 순서대로 정렬하고 날짜와 변경 기록을 함께 표시합니다. 버전이 많아도 모두 확인할 수 있습니다. 스킬을 팔로우하는 사람은 이 기록을 받습니다.',
        ],
        pic: {
          src: 'fan',
          alt: '종이 다섯 장이 한 모서리에서 부채처럼 펼쳐집니다. 맨 앞은 라임색이고 뒤로 갈수록 옅어져 마지막은 미색입니다.',
        },
      },
      historyExample: {
        eyebrow: '버전 예시',
        headline: ['하나의 스킬에', '날짜가 기록된 버전 두 개.'],
        lead: 'chapter-cast 예시입니다. 날짜와 내용은 모두 예시입니다. 각 버전의 파일과 해시를 고정해 새 버전이 이전 버전을 덮어쓰지 않습니다.',
        rows: [
          { title: '1.1.0', body: '2026년 10월 19일. 인물 별칭 대조 규칙을 추가하고 관련 참고 파일을 첨부했습니다.' },
          { title: '1.0.0', body: '2026년 10월 12일. 인물이 처음 등장하는 위치를 정리했습니다. 원본 파일은 그대로 유지되며 평점과 댓글도 이 버전에 연결됩니다.' },
        ],
      },
      packages: {
        eyebrow: '패키지',
        headline: ['필요한 패키지는 작성 내용대로 표시하고', '불분명한 부분은 그대로 알립니다.'],
        rows: [
          {
            title: '생태계별로 구분',
            body: '패키지는 해당 생태계 아래에 기록합니다. 서로 다른 생태계에서 이름이 같아도 같은 패키지로 보지 않습니다.',
          },
          { title: '필수와 선택', body: '각 항목이 필수인지 선택인지 표시합니다.' },
          { title: '누락과 미지원', body: '선언이 누락되었거나 지원하지 않는 생태계를 사용하면 누락 또는 미지원으로 표시합니다.' },
        ],
      },
      statement: {
        text: '모든 스킬에는 작성자가 표시됩니다.',
        muted:
          '작성자와 유지 관리자를 역할별로 표시하고 다른 작품과 리뷰에도 연결합니다.',
      },
      end: {
        next: '내용을 읽고 사용 기록을 확인하세요.',
        closing: '모든 스킬을 읽은 뒤 AI 에이전트에 전달하세요.',
      },
    },
    evidence: {
      head: {
        headline: ['선언은 선언이고', '기록은 기록입니다.'],
        lede: '작성자는 스킬이 적합한 환경을 한 줄로 쓸 수 있습니다. 누군가 특정 AI 에이전트로 작업을 수행하고 날짜와 방법을 남기면 그때 기록이 됩니다. Skill Hub는 두 항목을 구분합니다.',
      },
      declaration: {
        eyebrow: '선언',
        headline: ['작성자가 적은 내용은', '호환 조건 한 줄입니다.'],
        lead: '작성자가 SKILL.md에 적은 호환 조건과 허용 도구를 REZICS는 원문 그대로 기록하고 별도 검증이 필요하다고 표시합니다. 검증된 사실로 취급하지 않습니다.',
        code: '# SKILL.md 시작 부분(예시)\ncompatibility: 스킬 폴더를 지원하는 AI 에이전트에 적용',
        codeLabel: '예시 스킬이 SKILL.md 시작 부분에 작성한 호환 조건',
        caption: 'REZICS는 이 줄을 원문 그대로 기록하고 별도 검증이 필요하다고 표시합니다.',
      },
      record: {
        eyebrow: '기록 예시',
        headline: ['하나의 버전에', '여덟 가지를 기록합니다.'],
        lead: 'chapter-cast 1.1.0 기록 형식의 예시입니다. 날짜, AI 에이전트 버전, 방법, 결과는 모두 하나의 기록을 읽는 방법을 보여 주기 위한 예시 데이터입니다.',
        rows: [
          { title: '작업', body: '챕터 발췌문에서 인물, 별칭, 원문 위치를 나열해 인물 목록을 확인합니다.' },
          { title: 'AI 에이전트', body: '스킬 폴더를 읽을 수 있는 로컬 에이전트이며 추가 도구는 활성화하지 않았습니다.' },
          { title: '에이전트 버전', body: '관찰할 때 사용한 예시 클라이언트 버전 1.0.0을 기록합니다.' },
          { title: '스킬 버전', body: '별칭 대조를 추가한 예시 버전 chapter-cast 1.1.0입니다.' },
          { title: '언어', body: '입력과 출력은 모두 중국어 번체이며 별칭은 원문 표기를 따릅니다.' },
          { title: '날짜', body: '2026년 10월 19일. 버전 페이지의 1.1.0 예시 버전과 같은 날입니다.' },
          { title: '방법', body: '인물 세 명과 별칭 두 쌍이 있는 짧은 문단을 입력하고 출력과 원문 위치를 하나씩 비교합니다.' },
          { title: '관찰', body: '예시 결과에는 인물 세 명, 별칭 두 쌍, 해당 위치가 있습니다. 다른 텍스트나 에이전트에도 적용된다고 추론하지 않습니다.' },
        ],
      },
      rules: {
        eyebrow: '기록 읽기',
        headline: ['기록 읽는 방법'],
        rows: [
          { title: '기록이 없다고 사용할 수 없는 것은 아닙니다', body: '아무도 기록하지 않은 조합은 “기록 없음”으로 표시하고 호환되지 않는다고 쓰지 않습니다.' },
          {
            title: '이전 기록에 날짜 표시',
            body: '각 기록에 날짜와 해당 버전을 표시합니다. AI 에이전트나 스킬이 업데이트되어도 이전 기록을 새 버전의 결과처럼 표시하지 않습니다.',
          },
          { title: '결과가 달라도 모두 보관', body: '두 기록의 결론이 다르면 각각 방법을 첨부해 모두 보관하고 사용자가 비교할 수 있게 합니다.' },
          {
            title: '에이전트도 기록 가능',
            body: '에이전트가 기록을 제출할 수 있지만 에이전트라는 점, 운영자, 사용 방법을 표시해야 합니다. 사람이 검토한 뒤 공개합니다.',
          },
          { title: '철회는 해당 출처의 지원에만 적용', body: '출처가 철회하면 해당 출처가 제공한 지원만 철회합니다. 기록은 남고 다른 출처의 내용은 영향을 받지 않습니다.' },
        ],
      },
      opinions: {
        eyebrow: '평점과 토론',
        headline: ['평점과 댓글은', '해당 버전에 연결됩니다.'],
        rows: [
          {
            title: '평점',
            body: '평점은 평가한 버전에만 해당합니다. 새 버전은 자체 평점을 가지며 여러 버전의 합산 점수는 별도로 계산하고 방식을 표시합니다. 모든 점수 옆에 평가자 수와 분포를 표시하고 평가가 부족하면 평균을 계산하지 않습니다.',
          },
          {
            title: '댓글',
            body: '문제를 알리거나 사용 방법을 공유할 때 댓글에 당시 버전을 기록합니다. 스킬이 업데이트되어도 이전 댓글은 원래 버전을 가리켜 새 버전에 대한 내용으로 오해하지 않습니다.',
          },
        ],
      },
      statement: {
        text: '기록이 안전을 보장하지는 않습니다.',
        muted:
          '모든 관찰에는 환경과 버전이 표시됩니다. 사용하기 전에 안내와 스크립트를 읽어 보세요.',
      },
      end: {
        next: '기록을 확인한 뒤 사용해 보세요.',
        closing: '기록을 읽고 결정하세요.',
      },
    },
    use: {
      head: {
        headline: ['읽어 본 뒤', 'AI 에이전트에 전달하세요.'],
        lede: '스킬은 에이전트가 따르도록 작성한 지침이며 실행 가능한 스크립트가 포함될 수도 있습니다. Skill Hub에서 먼저 읽고 사용하기로 결정했다면 원하는 버전을 가져가세요.',
      },
      steps: {
        eyebrow: '여섯 단계',
        headline: ['찾기부터 사용까지', '여섯 단계.'],
        rows: [
          { title: '찾기', body: '목록에서 설명으로 검색하거나 다른 사람이 정리한 목록에서 선택합니다.' },
          { title: '읽기', body: '스킬 페이지를 열어 SKILL.md 전체 내용과 포함된 파일, 실행 가능한 파일을 확인합니다.' },
          { title: '기록 확인', body: '사용 중인 AI 에이전트와 버전에 대한 기록이 있는지, 기록 날짜가 얼마나 최근인지 확인합니다.' },
          {
            title: '버전 선택 후 가져오기',
            body: '버전을 선택하고 폴더를 다운로드합니다. 파일은 페이지에 기록된 해시와 같습니다. SKILL.md 안내만 복사할 수도 있습니다. 에이전트가 스킬을 읽는 위치에 넣고 위치는 에이전트 안내를 따릅니다.',
          },
          {
            title: '패키지 고정',
            body: '지원되는 패키지 조건에 맞춰 정확한 버전과 파일을 고정합니다. 해석할 수 없는 경우 이유를 알려 줍니다. 패키지를 설치해도 스크립트 실행이 허용되는 것은 아닙니다.',
          },
          { title: '팔로우', body: '스킬을 팔로우합니다. 새 버전이 게시되면 변경 내용을 읽고 바꿀지 결정합니다.' },
        ],
      },
      agent: {
        eyebrow: 'API와 MCP',
        headline: ['AI 에이전트도', 'Skill Hub를 읽을 수 있습니다.'],
        paragraphs: [
          '웹페이지의 모든 동작에는 API 작업이 있습니다. 에이전트는 REZICS API나 MCP 서버를 통해 스킬을 검색하고 전체 내용과 파일 목록을 읽습니다. 페이지에서 보는 것과 같은 데이터를 받습니다.',
          'REZICS API와 MCP에서는 스킬 텍스트를 모두 데이터로 취급합니다. 어떤 지침이 적혀 있어도 누구에게 권한을 부여하지 않습니다.',
        ],
        link: '개발자 사이트에서 API와 MCP 보기',
      },
      later: {
        eyebrow: '버전 업데이트',
        headline: ['새 버전이 나오면', '변경 내용을 확인하고 결정하세요.'],
        rows: [
          { title: '알림 설정', body: '팔로우할 때 전체, 주요 알림, 끄기 중에서 선택해 새 버전 알림을 설정합니다.' },
          { title: '변경 내용 확인', body: '새 버전마다 변경 기록을 첨부하며 사용 중인 버전과 파일 및 해시를 하나씩 비교할 수 있습니다.' },
          { title: '현재 버전 유지', body: '바꾸고 싶지 않으면 기존 버전을 계속 사용할 수 있습니다. 기존 버전 페이지는 새 버전으로 바뀌지 않습니다.' },
          { title: '문제 알리기', body: '사용 중 문제가 생기면 스킬 토론에서 사용한 버전과 AI 에이전트를 적어 알려 주세요.' },
          {
            title: '신고',
            body: '스킬이 설명에 적힌 것과 다르게 작동하면 계정 없이 신고할 수 있습니다. 악성 코드를 배포하는 행위는 REZICS 이용 규칙에 위배됩니다.',
          },
        ],
      },
      end: {
        next: '직접 작성해 보세요.',
        closing: '버전을 선택해 AI 에이전트에 전달하세요.',
      },
    },
    publish: {
      head: {
        headline: ['폴더 하나를', '하나의 ID로 게시합니다.'],
        lede: 'Skill Hub는 정해진 형식을 갖춘 스킬을 받습니다. 폴더에는 SKILL.md가 있어야 합니다. 가져온 스킬은 자체 ID와 페이지, 첫 버전을 갖습니다.',
      },
      import: {
        eyebrow: '가져오기',
        headline: ['가져온 파일은 저장만 하고', '실행하지 않습니다.'],
        body: '이 단계를 거친 폴더는 고유 ID를 가진 스킬이 됩니다. 폴더 안의 파일은 하나도 바뀌지 않습니다.',
        pic: {
          src: 'slit',
          alt: '라임색 종이 가운데에 틈을 내고 미색 종이 띠를 위에서 넣어 아래쪽으로 뺐습니다. 밑에는 겨자색 종이 모서리가 보입니다.',
        },
      },
      steps: {
        eyebrow: '여섯 가지',
        headline: ['가져올 때', '모든 바이트를 그대로 보존합니다.'],
        rows: [
          { title: '원문 그대로 저장', body: '파일의 모든 바이트를 저장하며 경로는 폴더 안에 있어야 합니다.' },
          { title: '실행하지 않음', body: '스크립트는 파일로 저장만 하고 실행하지 않습니다. SKILL.md의 지침도 따르지 않습니다.' },
          { title: '연결 확인', body: 'SKILL.md에 언급된 로컬 파일이 폴더에 없으면 누락 파일로 표시합니다.' },
          { title: '해석할 수 없는 필드 보존', body: '규격 외 필드는 원래 위치에 보관하고 해석되지 않은 항목으로 표시합니다. 다른 뜻으로 바꾸지 않습니다.' },
          {
            title: '스킬 형식 강제 변환 금지',
            body: '이름과 폴더가 일치하지 않거나 설명이 없으면 가져오기를 중단합니다. 임의의 폴더를 스킬로 바꾸지 않습니다.',
          },
          { title: '버전 게시', body: '게시할 때 각 파일의 해시, 라이선스, 출처를 고정합니다. 이후 변경은 다음 버전이 됩니다.' },
        ],
      },
      limits: {
        eyebrow: '한도',
        headline: ['수용 한도'],
        rows: [
          { title: '파일 128개', body: '한 번에 가져올 수 있는 파일 수입니다.' },
          { title: '1 MiB', body: '모든 파일을 합친 최대 크기입니다.' },
          { title: '64 KiB', body: 'SKILL.md의 최대 크기입니다.' },
          { title: '64자', body: '이름의 최대 길이이며 소문자, 숫자, 하이픈만 사용할 수 있습니다.' },
          { title: '1024자', body: '설명의 최대 길이입니다.' },
        ],
        after: '한도를 넘거나 형식에 맞지 않는 폴더는 가져오기를 중단하고 이유를 알려 줍니다.',
      },
      statement: {
        text: '설명은 가장 먼저 읽는 문장입니다.',
        muted:
          '무엇을 하고 언제 사용하는지 분명하게 적어 사람과 AI 에이전트가 모두 이해할 수 있게 합니다.',
        note: '같은 스킬을 설명하는 두 가지 방식(예시).',
        rows: [
          {
            title: '명확한 설명',
            body: '챕터에 등장하는 인물을 문단 위치와 함께 표로 정리합니다. 인물 목록을 만들거나 인물이 어느 챕터에 등장하는지 확인할 때 사용합니다.',
          },
          { title: '정보가 부족한 설명', body: '소설을 처리합니다.' },
        ],
      },
      credits: {
        eyebrow: '작성자와 권리',
        headline: ['작성자, 권리, 협업'],
        rows: [
          { title: '작성자와 유지 관리자', body: '역할별로 표시하며 각자는 자신의 REZICS ID를 사용해 다른 사람이 팔로우할 수 있습니다.' },
          { title: '라이선스', body: '선언한 라이선스는 선언한 사람과 시간 정보와 함께 각 버전에 기록합니다.' },
          { title: '권리는 계속 창작자에게', body: '스킬을 업로드해도 기존 지식 재산권은 이전되지 않습니다.' },
          {
            title: 'AI 에이전트와 함께 관리',
            body: '에이전트도 대상 버전, 변경 사항, 근거, 방법을 명시하고 에이전트임을 밝혀 수정 내용을 제안할 수 있습니다. 사람이 검토한 뒤 적용하며 적용할 때마다 처리 기록을 남깁니다.',
          },
          { title: '철회', body: '잘못 적용한 변경은 철회할 수 있습니다. 철회는 보완 기록으로 남기며 기존 이력을 바꾸지 않습니다.' },
        ],
      },
      end: {
        next: '스킬 외에도 API가 있습니다.',
        nextLine: '호출 방법과 버전을 함께 확인하세요',
        closing: 'REZICS에서 스킬은 고유 ID를 가집니다.',
      },
    },
  },
} satisfies MiniSite<SkillsStrings>;

export default skills;
