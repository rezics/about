import type { Site } from './schema';

export const site: Site = {
  name: 'REZICS',
  url: 'https://about.rezics.com',
  productUrl: 'https://rezics.com',
  meta: {
    title: 'REZICS｜开放的通用索引与社区',
    description:
      '书籍、动画、漫画、游戏、软件、视觉小说、MCP 服务器、技能与 API，在 REZICS 各有一个身份。人们围绕它们讨论、评分、整理书单、编写 Wiki+。',
  },
  nav: {
    products: '产品',
    engine: '模块',
    developers: '开发者',
    roadmap: '路线图',
    menu: '菜单',
    close: '关闭',
    skip: '跳到主要内容',
    action: '前往 REZICS',
    productsIntro: {
      title: '九种内容，同一个索引',
      body: '每一种都有自己的页面，背后共用同一套组成部分和同一张图。',
      all: '查看全部',
    },
    engineIntro: {
      title: '五个模块，十五个组成部分',
      body: '每一种内容都由这些模块组成，社区和开发者也用它们来搭建。',
      all: '查看引擎全貌',
    },
    groups: { works: '作品与软件', agents: 'AI 代理与开发者' },
  },
  home: {
    hero: {
      headline: '你在意的一切，都在同一个索引里。',
      lede: '书籍、动画、漫画、游戏、软件和视觉小说，还有 AI 代理使用的工具。每样内容只有一个身份，讨论、评分和 Wiki 都围绕它展开。',
      primary: '前往 REZICS',
      imageAlt: '暖白色纸面上，九张不同颜色的方形纸片交叠散开，窗光从左上方斜照下来。',
    },
    kinds: {
      eyebrow: '九种内容',
      headline: ['每一种内容，都有自己的位置；', '背后共用同一个索引和账号。'],
      lines: {
        anime: '季度、集数与播出日程',
        manga: '单行本、每一话与译本',
        software: '能否运行、如何获取',
      },
    },
    statement: {
      text: '一部小说，以及它的漫画、动画和游戏，',
      sub: '在 REZICS 中有四个身份，关系都在同一张图上。任何人用任何语言更正一条事实，引用它的页面也会更新。',
    },
    identity: {
      eyebrow: '通用索引',
      headline: '不同语言的名称，指向同一个身份。',
      body: [
        '同一部作品在中文、日文和英文中各有名称，在 REZICS 都指向同一个身份。版本、译本和改编各自清晰，又彼此相连。',
        '你的书库、评分和进度都与这个身份关联。换一种语言浏览，看到的仍是同一条记录。',
      ],
      link: '查看通用索引',
      imageAlt: '五张大小相同、颜色不同的纸片依次错开叠放，像同一张纸的五种颜色。',
    },
    community: {
      eyebrow: '社区与专区',
      headline: '围绕作品相聚，也能拥有自己的网站。',
      body: [
        '讨论、评分和书单都关联到作品本身。社区让人们因故事、语言或共同兴趣相聚，各自拥有成员、规则和管理方式。',
        '通过 Zone 为社区搭建完整网站，自定义页面、导航和主题，数据仍来自同一张图。',
      ],
      link: '查看社区与专区',
      imageAlt: '一张深青色的纸折成小屋，立在纸面上，旁边散落着几张小小的彩色纸片。',
    },
    platform: {
      eyebrow: '五个模块',
      headline: '一个平台，同时提供书库、商店、数据库、论坛和 Wiki。',
      lead: '九种内容都由同样五个模块组成。新增一种内容只需配置，无须另做一个应用。',
      modules: {
        'universal-index': '一个身份、所有版本，以及跨语言的名称和关系',
        community: '社区、讨论、评分、书单和关注',
        zones: '每个社区都能在共享图谱上搭建自己的网站和 Wiki+',
        create: '写作、阅读、版本、发布和授权',
        trust: '来源与证据、权利、管理规则和隐私',
      },
    },
    agents: {
      eyebrow: '开发者与 AI 代理',
      headline: '同一套 API，连接网站和你的应用。',
      lead: '通过 API、MCP 服务器和 SDK，让你的应用或代理读取数据、管理书库并提交提案。代理按照你的授权操作，变更提案经人工审核后才会应用。',
      link: '查看开发者资源',
      code: ['# 搜索目录，无需登录', 'curl -G \\', '  "$REZICS_API/v1/search/catalogue" \\', '  --data-urlencode "q=轻小说" \\', '  -d language=zh-Hans -d limit=5'].join('\n'),
      codeLabel: '使用 curl 搜索 REZICS 目录的请求示例',
      caption: '将 REZICS_API 设为 API 服务地址。language 指定搜索结果的显示语言。',
    },
    principles: {
      eyebrow: '原则',
      headline: '我们对每位用户的承诺。',
      items: [
        { title: '源代码公开', body: 'REZICS 以 AGPL-3.0 许可公开源代码，任何人都可以阅读、搭建和改进。' },
        { title: '不使用广告追踪器', body: '我们不使用广告追踪器，也不出售个人数据。' },
        { title: '私人数据不用于训练', body: '默认不会用私人草稿和阅读记录训练 AI 模型。只有你明确选择加入后才会使用。' },
        { title: '数据可以带走', body: '书库、书单和草稿都可以导出，基本参与和导出不收费。' },
        { title: '自动化操作会明确标注', body: '官方和第三方自动化操作都会公开标明自动化身份，并注明负责的运营者。' },
      ],
    },
    finale: {
      headline: '带上你在意的内容，一起加入。',
      body: '创建一个账号，你的书库、书单和评分都会关联到同一张图。',
    },
  },
  engine: {
    meta: {
      title: 'REZICS 引擎：模块与组成部分',
      description:
        'REZICS 的九种内容都由同一套组成部分构成，这些部分来自五个模块。了解每种内容选择了哪八个部分，以及每个模块各自负责什么。',
    },
    hero: {
      headline: '一套引擎，构建九种内容。',
      lede: '新增一种内容，需要词汇、映射、初始数据和一个 Zone，无须另做一个应用。组成部分只需实现一次，第十种内容和第一种共用同一套。',
    },
    parts: {
      headline: '十五个组成部分，每种内容选八个。',
      body: '每种内容选用八个组成部分，身份始终排在第一位。切换内容时，共用的部分保持不变，只替换不同的部分。',
      pick: '选择一种内容',
    },
    modules: {
      headline: '组成部分来自五个模块。',
      body: '通用索引管理身份，社区模块管理成员，Zone 管理网站，创作与发行模块管理作品的创作和流通，信任模块管理来源、权利和隐私。',
    },
  },
  kindPage: {
    featuresHeading: '可以在这里做什么',
    partsHeading: '由这八个部分组成',
    partsCaption: '每种内容都从同一套组成部分中选择。',
    connectionsHeading: '相关种类',
    next: '下一种',
  },
  modulePage: { usedByHeading: '最常使用它的种类', next: '下一个模组' },
  developers: {
    meta: {
      title: 'REZICS 开发者：API 与 MCP',
      description:
        'REZICS 的每项功能首先都是一个 API 操作。这里介绍 OpenAPI 文档、MCP 服务器、OAuth 应用、本地 Wiki 工具包和开放源代码。',
    },
    hero: {
      headline: '网站能做的，API 都能做。',
      lede: '每项功能首先都是一个 API 操作，网站只是其中一个客户端。你的应用、脚本和 AI 代理使用同一套操作和权限，获得相同的结果。',
    },
    facts: [
      {
        title: 'HTTP API',
        body: '路径、参数和每种响应都定义在公开的 OpenAPI 文档中。错误采用 Problem Details 格式，代码固定，程序可以直接判断下一步。',
      },
      {
        title: 'MCP 服务器',
        body: '远程 MCP 服务器将 API 操作作为工具提供。每次调用都经过同一套 HTTP 处理流程，权限、回执和速率限制一项不少。AI 代理可以注册为客户端，注册本身不会授予任何资源权限。',
      },
      {
        title: 'TypeScript SDK',
        body: '客户端类型直接来自 API 定义，字段、结果和错误都与服务器一致。',
      },
      {
        title: 'OAuth 应用',
        body: '外部应用通过授权码流程和 PKCE 获取授权，权限范围逐项列明，用户可以随时撤销。',
      },
      {
        title: '本地 Wiki 工具包',
        body: '文本持有者可以在自己的设备上，使用自己选择的 AI 代理读取 TXT、EPUB 和视觉小说脚本，逐章提取人物、地点和事件，附上来源位置后提交提案。工具包采用 Apache-2.0 许可，无须 REZICS 账号，也不会发送遥测数据。',
      },
      {
        title: '开放源代码',
        body: '平台核心以 AGPL-3.0 许可公开，可以研究、自行搭建，也可以提交修改。',
      },
    ],
    sample: {
      caption: '公开搜索无须令牌。以轻小说为关键词，响应中会附上排名结果、条目数的准确性和下一页的游标。',
      language: 'sh',
      code: [
        'curl -G "$REZICS_API/v1/search/catalogue" \\',
        '  --data-urlencode "q=轻小说" \\',
        '  -d language=zh-Hans \\',
        '  -d limit=5',
      ].join('\n'),
    },
    statement: '点击一次，或调用一次，都是同一个操作。',
  },
  roadmap: {
    meta: {
      title: 'REZICS 路线图',
      description:
        'REZICS 逐个开放社区，始终使用同一套引擎。从轻小说和视觉小说开始，逐步扩展到每部作品的 Wiki+、连载创作、更多种类、活动和地点，以及直接发行。',
    },
    hero: {
      headline: '从轻小说开始，走向更多种类。',
      lede: 'REZICS 逐个开放社区，每个社区都建立在同一张图和同一套组成部分之上。前一步积累的身份和关系，下一步可以直接沿用。',
    },
    steps: [
      {
        title: '一张图，一套引擎',
        body: '每部作品、每个人、每个组织，在同一张共享图谱中各有一个身份。每项能力只实现一次，需要的种类按条件使用。',
      },
      {
        title: '轻小说与视觉小说',
        body: '首先面向跨语言追更的读者，以及想找到可玩版本的玩家。两者是同一份目录和书库的两种视图，各有作品 Wiki，提供八种界面语言，手机和电脑都能使用。',
      },
      {
        title: '每部作品都有 Wiki+',
        body: '同一套搭建流程适用于每部作品。文本持有者使用自己的 AI 代理逐章提交提案，审核通过的事实会发布到作品的 Wiki Zone，读者可以按自己的进度浏览。',
      },
      {
        title: '连载与创作者',
        body: '小型连载小说社区和视觉小说创作者可以带着作品与发行日程加入。作者在稿件旁维护自己的世界设定，读者在章节旁讨论。',
      },
      {
        title: '逐步扩展种类',
        body: '科幻与奇幻书目、互动小说、MCP 服务器与代理技能、模型与评测将依次加入。每种内容都只需词汇、映射、初始数据和一个 Zone，后端无须为它新增专用程序。',
      },
      {
        title: '连接现实活动',
        body: '收录与作品相关的展会、签售会和发售活动，以及公开的圣地巡礼地点。巡礼地点会按你的进度避开剧透。',
      },
      {
        title: '直接发行',
        body: 'REZICS 为签约创作者发行无 DRM 的电子书和小型游戏。读者购买一次后可按购买条款重新下载，创作者可以查看每笔扣款。',
      },
      {
        title: '每个社区都有网站',
        body: '社区运营者和小型出版者可以通过 Zone 运营完整的网站，导入数据、管理发行；开发者可以使用 API 和更新流。',
      },
    ],
    statement: '每开放一个社区，图上的关系就多一层，下一个社区可以直接使用。',
  },
  product: {
    headline: '九种内容，都在 REZICS 上。',
    body: '用一个账号关注书籍和动画、记录游戏进度、评分和整理书单，也能通过 Zone 为你的社区搭建网站。',
  },
  notFound: {
    meta: {
      title: '找不到这个页面',
      description:
        '这个地址没有对应的页面，可能是网址拼错了，或者页面已经移到别处。返回 REZICS 首页，从九种内容和五个模块重新查找。',
    },
    eyebrow: '404',
    headline: '这个页面不在这里。',
    body: '网址可能拼错了，或者页面已经移到别处。返回首页，或从九种内容重新查找。',
    back: '返回首页',
    imageAlt: '一张淡蓝色的纸中间剪出一个方形的洞，露出下面的纸面，被剪下的那一块不见了。',
    restart: '从九种内容重新查找',
  },
  ui: {
    pause: '暂停动画',
    play: '播放动画',
    pick: '切换种类',
  },
  footer: {
    tagline: '开放的通用索引与社区',
    sitemap: '网站导航',
    agents: 'AI 代理',
    source: '源代码',
    sourceUrl: 'https://github.com/rezics/rezics-next',
    colophon: '本站不进行流量分析，也不加载第三方资源。',
    copyright: '© 2026 REZICS Inc.',
  },
};
