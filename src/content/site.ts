// PLACEHOLDER CONTENT: the lead replaces this file with the final copy. Keep the export shape.
import type { Site } from './schema';

export const site: Site = {
  name: 'REZICS',
  url: 'https://about.rezics.com',
  meta: {
    title: 'REZICS：書、動畫、遊戲與工具的通用索引',
    description:
      'REZICS 是開放的多語平台：書、動畫、漫畫、遊戲、軟體、視覺小說、MCP 伺服器、技能與 API 都在同一個索引裡，社群直接建在上面。',
  },
  nav: {
    products: '產品',
    engine: '引擎',
    developers: '開發者',
    roadmap: '路線圖',
    menu: '選單',
    close: '關閉',
    skip: '跳到主要內容',
    action: '開放時通知我',
    productsIntro: {
      title: '九種東西，同一個索引',
      body: '每一種都有自己的頁面，底下是同一套部件。',
      all: '看全部',
    },
    engineIntro: {
      title: '五個模組，一個引擎',
      body: '所有種類都由這五個模組組成，社群也能用它們建站。',
      all: '引擎總覽',
    },
    groups: { works: '作品與軟體', agents: '智能體與開發者' },
  },
  home: {
    hero: {
      headline: '你在乎的每一種東西，都在同一個索引裡',
      lede: 'REZICS 把書、動畫、遊戲、軟體與 MCP 伺服器放進同一張圖。每件東西一個身分，討論、評分與清單直接接在上面。',
      primary: '開放時通知我',
      secondary: '看九種東西',
      caption: '九種東西，同一套部件。',
    },
    index: {
      headline: '九種東西，一個格子',
      body: '每一種東西都用同一個方塊表示。新的種類只是新的設定，格子永遠有空位。',
      nextKind: '下一種',
    },
    identity: {
      headline: '一部作品，走過四種形式',
      body: '《西遊記》是書，也是漫畫、動畫與遊戲。在 REZICS 裡，它們都接在同一個身分上。',
      chapters: [
        {
          kind: 'books',
          title: '先是一本書',
          body: '原著的各種版本與譯本都歸在《西遊記》之下，誰校注、哪一年出版都查得到。',
        },
        {
          kind: 'manga',
          title: '再畫成漫畫',
          body: '改編漫畫有自己的頁面與作者，同時連回原著，讀者一路就能找到源頭。',
        },
        {
          kind: 'anime',
          title: '拍成動畫',
          body: '動畫的播出日程與製作陣容另外記錄，但角色與故事仍然屬於同一部作品。',
        },
        {
          kind: 'games',
          title: '做成遊戲',
          body: '有人用中文修正了一個角色名稱，日文與英文的頁面也一起變得正確。',
        },
      ],
    },
    community: {
      headline: '社群直接建在東西上',
      body: '討論、評分與清單都屬於東西本身。人也有自己的頁面，在每個社群都是同一個人。',
      points: [
        { title: 'Realm', body: '興趣相同的人在 Realm 聚在一起，自己訂規則。' },
        { title: '人是品牌', body: '你寫的評論與整理的清單跟著你走。' },
        { title: 'Zone', body: '社群可以在共用的圖上做出自己的完整網站。' },
      ],
    },
    engine: {
      headline: '五個模組，組出每一種',
      body: '每個種類都由同樣的模組組成。理解這五個，就理解整個平台。',
    },
    agents: {
      headline: '人做得到的，智能體也做得到',
      body: '網站上的每個動作都經過同一套公開 API。智能體用 MCP 伺服器或 SDK，就能代你查詢與整理。',
      facts: [
        { title: '公開 API', body: '查詢、寫入與訂閱都用同一套 API。' },
        { title: 'MCP 伺服器', body: '智能體透過 MCP 直接使用索引。' },
        { title: 'SDK', body: '用熟悉的語言呼叫 API。' },
        { title: '自帶智能體', body: '用你自己的智能體，權限由你授予。' },
      ],
    },
    principles: {
      headline: '我們守住的幾件事',
      items: [
        { title: '一件東西，一個身分', body: '不重複，不分裂，跨語言也一樣。' },
        { title: '資料有來源', body: '每項事實都能追到出處。' },
        { title: '人不被鎖住', body: '你的紀錄與作品可以匯出，也跟著你走。' },
      ],
    },
    finale: {
      headline: '格子裡還有你的位置',
      body: '留下電子郵件，註冊開放時我們會寄一封信給你。',
    },
  },
  engine: {
    meta: {
      title: '引擎',
      description:
        'REZICS 的引擎由通用索引、社群、站點、創作與發行、信任五個模組組成，九種東西都用同一套部件與同一張圖建構出來。',
    },
    hero: {
      headline: '一個引擎，九種東西',
      lede: '每一種東西都是同一個引擎的設定。部件相同，排列不同。',
    },
    parts: {
      headline: '十五個部件',
      body: '選一個種類，看它用了哪八個部件。',
      pick: '選擇種類',
    },
    modules: { headline: '五個模組', body: '部件來自這五個模組。' },
  },
  kindPage: {
    featuresHeading: '你可以做什麼',
    partsHeading: '用這些部件組成',
    partsCaption: '和其他種類用的是同一套部件。',
    connectionsHeading: '相鄰的種類',
    next: '下一種',
  },
  modulePage: { usedByHeading: '用到這個模組的種類', next: '下一個模組' },
  developers: {
    meta: {
      title: '開發者',
      description:
        'REZICS 為開發者提供公開 API、MCP 伺服器、SDK、OAuth 應用程式與本機維基工具組，程式碼以開放原始碼授權公開。',
    },
    hero: {
      headline: '同一套 API，給人也給程式',
      lede: '網站用的就是公開 API。你的程式與智能體能做的事，和網站一樣多。',
    },
    facts: [
      { title: 'API', body: '查詢、寫入與訂閱的公開介面。' },
      { title: 'MCP 伺服器', body: '讓智能體直接使用索引。' },
      { title: 'SDK', body: '型別完整的用戶端程式庫。' },
      { title: 'OAuth 應用程式', body: '使用者授權後代為操作。' },
      { title: '本機維基工具組', body: '在本機編輯 Wiki+ 頁面再同步。' },
      { title: '開放原始碼', body: '程式碼公開，歡迎一起改進。' },
    ],
    sample: {
      caption: '用 SDK 查詢一部作品的所有版本。',
      language: 'ts',
      code: "const work = await rezics.works.get('journey-to-the-west');\nconst editions = await work.editions.list({ language: 'zh-Hant' });",
    },
    statement: '沒有只給網站用的私有介面。',
  },
  roadmap: {
    meta: {
      title: '路線圖',
      description:
        'REZICS 的路線圖說明平台接下來的方向：從通用索引與社群開始，一步步加入更多種類、更多語言與更多讓社群自己建站的能力。',
    },
    hero: {
      headline: 'REZICS 要去的地方',
      lede: '方向依序排列，不寫日期。每一步都建立在前一步上。',
    },
    steps: [
      { title: '索引與社群', body: '九種東西與社群功能一起開放。' },
      { title: '更多語言', body: '介面與資料加入更多語言。' },
      { title: '更多種類', body: '新的種類以設定加入，不必另寫程式。' },
      { title: '社群的網站', body: '更多社群用 Zone 建立自己的網站。' },
    ],
    statement: '格子會越來越滿，規則不變。',
  },
  notify: {
    headline: '開放時通知我',
    body: '註冊開放時，我們只寄這一封信。',
    label: '電子郵件',
    placeholder: 'you@example.org',
    submit: '通知我',
    sending: '傳送中',
    done: '收到了。註冊開放時會寄信給你。',
    privacy: '我們只保存這個地址，用來寄開放通知，不會分享給任何人。',
    errors: {
      invalid_email: '這個電子郵件地址看起來不完整。',
      invalid_request: '表單內容有誤，請再試一次。',
      cross_origin: '這個表單只能從 REZICS 的網站送出。',
      unavailable: '現在無法儲存，請稍後再試。',
    },
  },
  notified: {
    meta: {
      title: '已收到',
      description:
        '你的電子郵件地址已經收到。REZICS 開放註冊時，我們會寄一封通知信到這個地址，除此之外不會寄其他信件。',
    },
    headline: '收到了',
    body: '註冊開放時，我們會寄一封信到你留下的地址。',
    back: '回到首頁',
  },
  notFound: {
    meta: {
      title: '找不到頁面',
      description:
        '這個網址在 REZICS 的網站上沒有對應的頁面。可能是連結打錯了，或頁面已經移動，回到首頁就能找到九種東西。',
    },
    headline: '這裡還沒有東西',
    body: '這個格子是空的。回到首頁，看看已經放好的九種東西。',
    back: '回到首頁',
  },
  ui: { pause: '暫停', play: '播放', pick: '選擇種類' },
  footer: {
    tagline: '一個索引，所有你在乎的東西。',
    source: '原始碼',
    sourceUrl: 'https://github.com/rezics',
    colophon: '字體：Noto Sans TC、Archivo、Martian Mono。',
    copyright: '© REZICS',
  },
};
