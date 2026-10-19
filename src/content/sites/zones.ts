// 站點 (/engine/zones/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). The example
// Zone is an illustrative (示意) 《魔法禁書目錄》 Wiki+ in zh-Hant; text only, per
// .temp/sites/EXAMPLE-WORK.md. Its handle, routes and revision log are not REZICS data.
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

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
      label: '總覽',
      meta: {
        title: '站點：在共用的圖上架網站',
        description:
          'Zone 是社群在 REZICS 共用資料上架起的完整網站，路由、範本、導覽與主題自己決定。看一個 Wiki+ 怎麼組成、怎麼避開劇透、怎麼改版。',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: shared.nav.engine,
      headline: '自己的網站，共用的資料。',
      lede: '一個 Zone 有自己的首頁、導覽與版面。社群決定網站的樣子，作品、人物與事實都來自共用的資料。',
      alt: '一張深灰色的紙折成沒有屋頂的小房子，前牆開了一扇門，兩個房間裡各放著一小張玫瑰色與藍色的紙',
    },
    routes: {
      label: '路由',
      headline: '網址底下的每一層，都由社群排定。',
      lead: '每條路由有固定的身分，路徑可以用中文。詳細頁只打開這個 Zone 收錄的資料，建一條路由也不會多出一筆資料。導覽是另一棵樹，順序自己排。',
      caption: '示意：一個《魔法禁書目錄》Wiki+ 的路由',
      entries: [
        { title: '首頁', path: '/z/index-wiki' },
        { title: '作品', path: '/z/index-wiki/作品' },
        { title: '《新約》', path: '/z/index-wiki/作品/新約', depth: 1 },
        { title: '人物', path: '/z/index-wiki/人物' },
        { title: '閱讀順序', path: '/z/index-wiki/閱讀順序', note: '自訂頁面' },
        { title: '年表', path: '/z/index-wiki/年表' },
        { title: '搜尋', path: '/z/index-wiki/搜尋' },
      ],
      note: '路徑由 Zone 的路由表管，平台保留的字很少，不會搶走你的網址。討論在社群那一頭的 /r/index-wiki，兩邊互相連結。',
    },
    templates: {
      label: '範本',
      headline: '範本從最具體的開始找。',
      lead: '頁面上的每個區塊都綁著一個來源：目前這筆資料、它的某個屬性、一份文件、一份清單，或一個存好的查詢。區塊裡的清單，都翻得到最後一筆。',
      steps: [
        { title: '路由指定', body: '這條路由指定了範本，就用它。' },
        { title: '類型', body: '沒有指定，就用這個類型的範本，例如所有人物共用一張。' },
        { title: '結構', body: '類型也沒有，就用它所屬結構的範本。' },
        { title: '通用頁面', body: '都沒有，還有通用頁面：名稱、識別碼、陳述與出處、雙向的關係，一樣不少。' },
      ],
      note: '不熟悉的類型不會借用書的按鈕，它拿到的頁面只放它用得上的部件。',
    },
    themes: {
      label: '主題',
      headline: '主題換得掉外觀，換不掉保護項目。',
      lead: '品牌、色彩、字體與版面由社群決定。有幾樣東西由平台把關，不管換成哪一套主題，都留在原位。',
      items: [
        { title: '由社群決定', body: '標誌、色彩、字體與版面。' },
        { title: '由平台保護', body: '身分、搜尋、語言切換、出處與無障礙。' },
        {
          title: '自己的呈現程式',
          body: '想要更多時，Zone 可以附上自己的呈現程式。這些程式要先通過審核，讀者也隨時能切回標準版面；後端始終只有一套。',
        },
      ],
    },
    wiki: {
      label: 'Wiki+',
      headline: 'Wiki+ 停在你讀到的地方。',
      lead: 'Wiki+ 是作品自己的 Zone：人物、地點、年表與閱讀順序，各有一頁。資訊框讀的是圖上的事實，別的頁面用到同一條事實時，讀的也是它。',
      items: [
        { title: '還沒登入', body: '從故事開頭看起，還沒揭露的事實先收起來。' },
        { title: '登入之後', body: '預設停在你讀完的地方；想看全部，也可以選擇全部顯示。' },
        {
          title: '一個動作建好',
          body: '持有文本的人在自己的電腦上，選一個 AI 代理逐章整理人物、地點、關係與事件，每一條附上位置和一小段引文，再整包送出提案。審核的人核准之後才會發布；REZICS 不會收到全文。',
        },
        { title: '由 Realm 決定', body: '要不要讓代理起草、接不接受生成的文章，由各個 Realm 自己決定。' },
      ],
    },
    shared: {
      label: '共用',
      headline: '網站各自獨立，資料彼此共用。',
      lead: '繁體中文的 Wiki+ 和一個英文讀書會的網站，可以共用同一批作品與人物。前者寫《魔法禁書目錄》，後者寫 A Certain Magical Index，連到的是同一個身分；名稱、介紹、排序，以及採信哪些說法，各自決定。',
      more: '一個 Zone 也能同時收書、動畫與遊戲，替一整個作品宇宙架一個網站。',
      alt: '兩段獨立的深灰色摺紙，一前一後放在同一條淺藍色紙帶上',
    },
    log: {
      label: '改版',
      headline: '每一次改版，都留在紀錄裡。',
      lead: '改版是一整包：路由、導覽、範本、主題和查詢一起進同一個版次。上線前先預覽、先驗證；上線後要退回上一版或整站匯出，都可以。',
      caption: '示意：同一個 Wiki+ 的改版紀錄',
      entries: [
        { title: '第三版', body: '新增「閱讀順序」頁，導覽多一項。預覽、驗證後上線。' },
        { title: '第二版', body: '人物頁改用新範本。上線後退回第一版。' },
        { title: '第一版', body: '首頁、作品、人物與年表。上線。' },
      ],
      items: [
        { title: '四種權限', body: '網站編輯、發布、社群管理與圖譜貢獻分開給；會改版面的人，不一定能改圖上的資料。' },
        { title: '兩個設定', body: '公開與否，和要不要出現在搜尋與推薦裡，是兩個獨立的設定。' },
        { title: '同一條路', body: '人用網頁改，AI 代理用 API 改，走的是同一條路。' },
      ],
    },
    closing: '在 REZICS 開一個 Zone，替你的社群架起自己的網站。',
  },
} satisfies MiniSite<ZonesStrings>;
