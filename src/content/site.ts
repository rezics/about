import type { Site } from './schema';

export const site: Site = {
  name: 'REZICS',
  url: 'https://about.rezics.com',
  productUrl: 'https://rezics.com',
  meta: {
    title: 'REZICS｜開放的通用索引與社群',
    description:
      '書、動畫、漫畫、遊戲、軟體、視覺小說、MCP 伺服器、技能與 API，在 REZICS 各有一個身分，人們圍著它們討論、評分、整理清單、編寫 Wiki+。',
  },
  nav: {
    products: '產品',
    engine: '模組',
    developers: '開發者',
    roadmap: '路線圖',
    menu: '選單',
    close: '關閉',
    skip: '跳到主要內容',
    action: '前往 REZICS',
    productsIntro: {
      title: '九種東西，同一個索引',
      body: '每一種都有自己的頁面，底下是同一套部件與同一張圖。',
      all: '看全部',
    },
    engineIntro: {
      title: '五個模組，十五個部件',
      body: '每一種東西都由這些模組組成，社群與開發者也用它們來建造。',
      all: '看引擎全貌',
    },
    groups: { works: '作品與軟體', agents: 'AI 代理與開發者' },
  },
  home: {
    hero: {
      headline: '書、動畫、遊戲與軟體，同一個開放索引，同一個社群。',
      lede: '書、動畫、漫畫、遊戲、軟體、視覺小說、MCP 伺服器、技能與 API，在 REZICS 都有一個跨語言的身分，評分、清單、討論與 Wiki+ 都連在上面。',
      primary: '前往 REZICS',
      secondary: '看九種東西',
      imageAlt: '油畫風格的插圖：晨光照進一間通往露台的閱覽室，長桌、書架與盆栽，窗外是遠山。',
    },
    index: {
      headline: '每樣東西，只有一個身分。',
      body: [
        '每部作品、每套軟體、每位創作者，在 REZICS 只有一個身分，不分語言，連在同一張圖上。',
        '版本、譯本與改編各自分明，又彼此相連。有人更正一筆事實，每一個用到它的頁面都跟著更新。',
      ],
      link: '看通用索引',
      imageAlt: '油畫風格的插圖：午後陽光裡的一座木製卡片目錄櫃，幾個小抽屜拉開著。',
    },
    community: {
      headline: '社群就在作品旁邊。',
      body: [
        '討論、評分與清單連到作品本身，不是貼文裡提到的一個名字。',
        'Realm 是為一個故事、一種語言或一個想法成立的社群；Zone 是社群自己架的完整網站，資料仍取自同一張圖。你的書庫、清單與聲譽跟著同一個身分，走進每一個社群。',
      ],
      link: '看社群模組',
      imageAlt: '油畫風格的插圖：黃昏的庭院裡擺著長桌與椅子，桌上留著翻開的書，頭上掛著暖色燈串。',
    },
    statement: {
      text: '一個平台，同時是書庫、商店、資料庫、論壇與 Wiki。',
      body: '新增一種東西靠的是設定，不必另做一個應用程式。評分、清單、討論與 Wiki+ 各只實作一次，每一種東西用的都是同一套。',
      link: '看五個模組',
    },
    products: {
      headline: '從你在乎的那一種開始。',
      lede: '每一種東西都有自己的介紹網站，背後是同一個索引，也是同一個帳號。',
    },
    agents: {
      headline: '你在 REZICS 能做的事，AI 代理透過同一套 API 也能做。',
      body: [
        '網頁與 MCP 走的是同一套操作與權限。代理代表人行事，能做的事不會超出授權給它的範圍。',
        '代理提出附證據的變更，經人審核才套用，每次套用都留下回執，也能撤回。',
      ],
      link: '看開發者資源',
      imageAlt: '油畫風格的插圖：窗邊的工作桌上攤著素描本、圓規與鉛筆，窗外是晴朗的天空與白雲。',
    },
    principles: {
      headline: '我們的承諾',
      items: [
        {
          title: '原始碼公開',
          body: 'REZICS 以 AGPL-3.0 授權公開原始碼，任何人都能閱讀、架設與改進。',
        },
        {
          title: '沒有廣告追蹤器',
          body: '我們不使用廣告追蹤器，不出售個人資料，也不為跨網站的行為廣告分享個人資料。',
        },
        {
          title: '私人資料不拿來訓練',
          body: 'REZICS 預設不拿私人草稿與閱讀紀錄訓練 AI 模型。任何這類訓練，都需要你另外、明確地選擇加入。',
        },
        {
          title: '資料帶得走',
          body: '書庫、清單與草稿都能匯出；帳號無法登入時，也有管道取回資料。基本參與與匯出不收費。',
        },
        {
          title: '自動化一定標明',
          body: '官方與第三方的自動化操作都會公開自己是自動化，也會寫明負責的營運者。',
        },
      ],
    },
    finale: {
      headline: '帶著你在乎的東西進來。',
      body: '建立一個帳號，你的書庫、清單與評分都放進同一張圖。',
    },
  },
  engine: {
    meta: {
      title: 'REZICS 引擎：模組與部件',
      description:
        'REZICS 的九種東西都由同一套部件組成，部件來自五個模組。看每一種東西挑了哪八個部件，以及每個模組各自負責什麼。',
    },
    hero: {
      headline: '一套引擎，組出九種東西。',
      lede: '新增一種東西，需要的是詞彙、對應、種子資料與一個 Zone，不是另一個應用程式。部件只實作一次，第十種東西和第一種用的是同一套。',
    },
    parts: {
      headline: '十五個部件，每種東西挑八個。',
      body: '每個方塊九格：中間是名稱，四周八格是部件。身分固定在左上角；換一種東西時，共用的部件留在原位，只有不同的部件移動。',
      pick: '選一種東西',
    },
    modules: {
      headline: '部件出自五個模組。',
      body: '通用索引管身分，社群管人，站點管網站，創作與發行管作品的誕生與流通，信任管出處、權利與隱私。',
    },
  },
  kindPage: {
    featuresHeading: '在這裡能做的事',
    partsHeading: '用這八個部件組成',
    partsCaption: '每一種東西，都從同一套部件裡挑選。',
    connectionsHeading: '相鄰的種類',
    next: '下一種',
  },
  modulePage: { usedByHeading: '最常用到它的種類', next: '下一個模組' },
  developers: {
    meta: {
      title: 'REZICS 開發者：API 與 MCP',
      description:
        'REZICS 的每項功能先是一個 API 操作。這裡介紹 OpenAPI 文件、MCP 伺服器、OAuth 應用程式、本機 Wiki 工具組與開放原始碼。',
    },
    hero: {
      headline: '網站做得到的，API 都做得到。',
      lede: '每項功能先是一個 API 操作，網站只是其中一個用戶端。你的 App、腳本與 AI 代理使用同一套操作與權限，拿到一樣的結果。',
    },
    facts: [
      {
        title: 'HTTP API',
        body: '路徑、參數與每一種回應都定義在公開的 OpenAPI 文件裡。錯誤採用 Problem Details 格式，代碼固定，程式能直接判斷下一步。',
      },
      {
        title: 'MCP 伺服器',
        body: '遠端 MCP 伺服器把 API 操作提供成工具，每次呼叫都經過同一個 HTTP 處理流程，權限、回執與速率預算一樣不少。AI 代理可以自行註冊成用戶端，註冊本身不給任何資源權限。',
      },
      {
        title: 'TypeScript SDK',
        body: '用戶端的型別直接來自 API 的定義，欄位、結果與錯誤都和伺服器對得上。',
      },
      {
        title: 'OAuth 應用程式',
        body: '外部應用程式以授權碼流程與 PKCE 取得授權，權限範圍逐項列明，使用者隨時可以撤銷。',
      },
      {
        title: '本機 Wiki 工具組',
        body: '持有文本的人在自己的機器上，用自己選的代理讀 TXT、EPUB 與 Ren\'Py 腳本，逐章萃取人物、地點與事件，附上出處位置送出提案。工具組以 Apache-2.0 授權，不需要 REZICS 帳號，也不傳送遙測資料。',
      },
      {
        title: '開放原始碼',
        body: '整個平台的原始碼以 AGPL-3.0 公開，可以研究、自行架設，也能送出修改。',
      },
    ],
    sample: {
      caption: '公開搜尋不需要權杖。用《西遊記》找作品，回應附上排名結果、筆數的精確度與下一頁的游標。',
      language: 'sh',
      code: [
        'curl -G "$REZICS_API/v1/search/catalogue" \\',
        '  --data-urlencode "q=西遊記" \\',
        '  -d language=zh-Hant \\',
        '  -d limit=5',
      ].join('\n'),
    },
    statement: '點一下，或呼叫一次，都是同一個操作。',
  },
  roadmap: {
    meta: {
      title: 'REZICS 路線圖',
      description:
        'REZICS 一次開放一個社群，引擎始終只有一套。從輕小說與視覺小說開始，接著是每部作品的 Wiki+、連載創作、更多種類、活動與地點，以及直接發行。',
    },
    hero: {
      headline: '從輕小說開始，走向每一種東西。',
      lede: 'REZICS 一個社群接一個社群地開放，每個社群都建在同一張圖與同一套部件上。前一步累積的身分與關係，下一步直接沿用。',
    },
    steps: [
      {
        title: '一張圖，一套引擎',
        body: '每部作品、每個人、每個組織，在一張共用的圖裡各有一個身分。每項能力只實作一次，任何種類都能取用。',
      },
      {
        title: '輕小說與視覺小說',
        body: '最先開放給跨語言追系列的讀者，以及想找到可玩版本的玩家。兩者是同一份目錄與書庫的兩種檢視，各有作品的 Wiki，提供八種介面語言，手機與電腦都能用。',
      },
      {
        title: '每部作品都有 Wiki+',
        body: '同一套建置流程擴及每一部作品。持有文本的人用自己的 AI 代理逐章提案，審核通過的事實發布到作品的 Wiki Zone，讀者依自己的進度瀏覽。',
      },
      {
        title: '連載與創作者',
        body: '小型的連載小說社群與視覺小說創作者，帶著作品與發行日程加入。作者在稿件旁維護自己的世界設定，讀者在章節旁討論。',
      },
      {
        title: '一種接一種',
        body: '科幻與奇幻書目、互動小說、MCP 伺服器與代理技能、模型與評測依序加入。每一種都是詞彙、對應、種子資料與一個 Zone，後端不為它新增專屬的程式。',
      },
      {
        title: '走進現實',
        body: '與作品相連的展會、簽名會與發售活動，以及公開的聖地巡禮地點。巡禮地點會依你的進度避開劇透。',
      },
      {
        title: '直接發行',
        body: 'REZICS 為簽約創作者發行無 DRM 的電子書與小型遊戲。讀者買一次，檔案隨時重新下載；創作者看得到每一筆扣款。',
      },
      {
        title: '每個社群的網站',
        body: '社群營運者與小型出版者用 Zone 經營完整的網站，匯入資料、管理發行；開發者取用 API 與更新串流。',
      },
    ],
    statement: '每開放一個社群，圖上的連結就多一層，下一個社群一來就用得到。',
  },
  product: {
    headline: '九種東西，都在 REZICS 上。',
    body: '用一個帳號追書、追番、記遊玩進度、寫評分與整理清單，也能在 Zone 為你的社群架起網站。',
  },
  notFound: {
    meta: {
      title: '找不到這個頁面',
      description:
        '這個網址沒有對應的頁面，可能是網址打錯了字，或這個頁面已經移到別的地方。回到 REZICS 首頁，從九種東西與五個模組重新找起。',
    },
    headline: '這裡還沒有東西',
    body: '網址可能有誤，或頁面已經搬走。',
    back: '回到首頁',
  },
  ui: {
    pause: '暫停動畫',
    play: '播放動畫',
    pick: '切換種類',
  },
  footer: {
    tagline: '每一種東西，一個身分，一個社群。',
    sitemap: '網站導覽',
    source: '原始碼',
    sourceUrl: 'https://github.com/rezics/rezics-next',
    colophon: '內文以 Noto Sans TC 與 Manrope 排版。本站不做流量分析，也不載入第三方資源。',
    copyright: '© 2026 REZICS Inc.',
  },
};
