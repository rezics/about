// PLACEHOLDER CONTENT: the lead replaces this file with the final copy. Keep the export shape.
import type { Module } from './schema';

export const modules: Module[] = [
  {
    id: 'universal-index',
    name: '通用索引',
    summary: '一個身分，跨種類跨語言',
    meta: {
      title: '通用索引',
      description:
        'REZICS 的通用索引讓每件作品、產品、工具、人物與組織只有一個身分，版本、製作人員、關聯與篩選都建立在同一張圖上。',
    },
    hero: {
      headline: '所有東西，同一張圖',
      lede: '書、動畫、遊戲、軟體與 MCP 伺服器都是圖上的節點。新的種類只是新的設定。',
    },
    points: [
      { title: '一個身分', body: '同一件東西在所有語言與站點裡只出現一次。' },
      { title: '版本與製作人員', body: '版次、譯本與參與者都是可以查詢的事實。' },
      { title: '修正與合併', body: '重複的條目可以合併，修正會留下紀錄。' },
    ],
    statement: '索引是共用的，所以一次修正，所有語言與所有站點一起受益。',
    usedBy: ['books', 'anime', 'games', 'mcp'],
  },
  {
    id: 'community',
    name: '社群',
    summary: 'Realm、討論、評分與清單',
    meta: {
      title: '社群',
      description:
        'REZICS 的社群功能包含 Realm、討論、評分、評論、清單與追蹤，而且每個人都是能被認出來的品牌，不被鎖在單一社群裡。',
    },
    hero: {
      headline: '社群建在索引之上',
      lede: '討論、評分與清單都直接接在東西的身分上。人也一樣，走到哪個社群都是同一個人。',
    },
    points: [
      { title: 'Realm', body: '有共同興趣的人聚在一個 Realm，規則由他們自己定。' },
      { title: '人是品牌', body: '你的評論、清單與作品跟著你，不屬於某一個社群。' },
      { title: '評分有情境', body: '評分會說明看的是哪個版本、在什麼情況下。' },
    ],
    statement: '社群換了，你還是你；東西換了名字，它還是它。',
    usedBy: ['anime', 'manga', 'games', 'visual-novels'],
  },
  {
    id: 'zones',
    name: '站點',
    summary: '每個社群一個完整網站',
    meta: {
      title: '站點',
      description:
        'REZICS 的 Zone 讓任何社群在共用的圖上建立自己的完整網站，有自己的路由、頁面與 Wiki+，資料和其他站點彼此相通。',
    },
    hero: {
      headline: '一個社群，一個網站',
      lede: 'Zone 是社群自己的網站，有路由、頁面與 Wiki+。資料來自共用的圖，不必從零開始。',
    },
    points: [
      { title: '完整的路由', body: '首頁、分類與專題頁都由社群自己安排。' },
      { title: 'Wiki+', body: '維基頁面的資訊框直接讀取圖上的事實。' },
      { title: '資料相通', body: '在 Zone 裡的修正，回到索引讓所有人受益。' },
    ],
    statement: '網站是社群的，資料是大家的。',
    usedBy: ['books', 'anime', 'visual-novels'],
  },
  {
    id: 'create',
    name: '創作與發行',
    summary: '寫作、版本、發行與授權',
    meta: {
      title: '創作與發行',
      description:
        'REZICS 的創作與發行功能讓作者直接在平台上寫作與發表，管理版本、發行管道、販售方案與授權，讀者讀到的是同一部作品。',
    },
    hero: {
      headline: '寫好的東西，直接發行',
      lede: '作者在 REZICS 上寫作、管理版本、設定販售與授權。作品一發表就是索引的一部分。',
    },
    points: [
      { title: '原生寫作與閱讀', body: '寫作與閱讀都在同一個地方完成。' },
      { title: '版本管理', body: '修訂、譯本與再版各自是版本。' },
      { title: '販售與授權', body: '價格、地區與授權條件由作者設定。' },
    ],
    statement: '作品從第一版開始就有身分，之後每次修訂都接得上。',
    usedBy: ['books', 'manga', 'software', 'skills'],
  },
  {
    id: 'trust',
    name: '信任',
    summary: '來源、權利、治理與隱私',
    meta: {
      title: '信任',
      description:
        'REZICS 的信任機制記錄每項資料的來源與證據，處理權利聲明、內容審核與社群治理，並說明哪些個人資料會被保存。',
    },
    hero: {
      headline: '每項資料都有來源',
      lede: '事實附上來源與證據，修改留下紀錄。權利、審核與隱私都有明確的規則。',
    },
    points: [
      { title: '來源與證據', body: '每項事實都能追到它的出處。' },
      { title: '權利', body: '權利人可以提出聲明，處理過程有紀錄。' },
      { title: '審核與治理', body: '規則公開，決定可以申訴。' },
    ],
    statement: '資料可以查證，規則可以閱讀，決定可以申訴。',
    usedBy: ['games', 'software', 'apis', 'mcp'],
  },
];
