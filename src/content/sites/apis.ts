// API Hub (`apis`): every visible string of /apis/ and its six inner pages. Design record and
// sources: src/sites/apis/SITE.md and src/sites/apis/facts.md.
import type { MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'apis')!;

/** A row of a facts list: title on the left, text on the right. */
export interface ApisRow {
  title: string;
  body: string;
}
/** An invented example shown as a flat tile: name, a note at the top, one line. */
export interface ApisTile {
  name: string;
  rel?: string;
  line: string;
}
/** A page's first screen: one sentence and one short paragraph. */
export interface ApisHero {
  headline: string;
  lede: string;
}
/** A section head: the eyebrow label, the h2 and an optional lead paragraph. */
export interface ApisSection {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** A large statement: the first half in ink, the second in muted ink, an optional note. */
export interface ApisStatement {
  lead: string;
  rest: string;
  note?: string;
}

export interface ApisStrings {
  /** Prefix of every caption under an invented example. */
  example: string;
  /** The row of further pages at the foot of every inner page. */
  next: { label: string; aria: string };
  /** The sentence under every page's closing statement. */
  closingBody: string;
  /** Text alternatives of the five photographs. */
  pictures: { hero: string; request: string; versions: string; specs: string; connections: string };
  home: {
    hero: ApisHero;
    pages: ApisSection & { rows: Record<string, string> };
    directory: ApisSection & { link: string };
    statement: ApisStatement;
    parts: ApisSection & { notes: Partial<Record<PartId, string>> };
    connections: ApisSection & { link: string };
    closing: string;
  };
  directory: {
    hero: ApisHero;
    facets: ApisSection & { rows: ApisRow[] };
    complete: ApisStatement;
    identity: ApisSection & { rows: ApisRow[] };
    views: ApisSection & { tiles: ApisTile[]; caption: string };
    closing: string;
  };
  versions: {
    hero: ApisHero;
    closed: ApisStatement;
    sequence: ApisSection & { tiles: ApisTile[]; caption: string };
    events: ApisSection & { rows: ApisRow[] };
    follow: ApisSection & { rows: ApisRow[]; footnote: string };
    closing: string;
  };
  specs: {
    hero: ApisHero;
    facts: ApisSection & { rows: ApisRow[] };
    measure: ApisStatement;
    fields: ApisSection & { rows: ApisRow[]; footnote: string };
    absent: ApisSection;
    closing: string;
  };
  connections: {
    hero: ApisHero;
    relations: ApisSection & { rows: ApisRow[] };
    both: ApisStatement;
    provider: ApisSection & { more: string };
    neighbours: ApisSection & {
      lines: { mcp: string; skills: string; software: string };
      developers: { name: string; line: string };
    };
    closing: string;
  };
  community: {
    hero: ApisHero;
    rating: ApisSection & { rows: ApisRow[] };
    discussion: ApisStatement;
    lists: ApisSection & { tiles: (ApisTile & { kind: 'apis' | 'software' | 'mcp' | 'skills' })[]; caption: string };
    zone: ApisSection & { link: string };
    closing: string;
  };
  publishing: {
    hero: ApisHero;
    path: ApisSection & { rows: ApisRow[] };
    proposal: ApisSection & { rows: ApisRow[] };
    paid: ApisStatement;
    provider: ApisSection & { more: string };
    closing: string;
  };
}

export default {
  id: 'apis',
  base: '/apis/',
  name: kind.name,
  theme: { kind: 'apis' },
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: 'API Hub：每個公開 API 一個條目',
        description:
          'REZICS 為每個公開 API 建一個條目：提供者、版本、規格文件與認證方式都附來源與日期。依任何事實篩選，追蹤改版，評分與討論都寫明針對哪一版。',
      },
    },
    {
      slug: 'directory',
      label: '目錄',
      meta: {
        title: 'API Hub 目錄：依事實找 API',
        description:
          '在 API Hub 目錄，提供者、認證方式、規格文件與版本狀態都能當成篩選條件。結果會列到最後一筆並標明筆數精確度，條件可以存成檢視，也能追蹤。',
      },
    },
    {
      slug: 'versions',
      label: '版本',
      meta: {
        title: 'API Hub 版本：每一版都有紀錄',
        description:
          'API 的每個版本各是一筆紀錄，寫的是當時實際發布的內容。宣布、排定、可用、延後與撤回分開記錄，追蹤之後依你選的通知等級送達。',
      },
    },
    {
      slug: 'specs',
      label: '規格與認證',
      meta: {
        title: 'API Hub 規格與認證',
        description:
          '每個版本的認證方式與規格文件各自記錄，標明出自提供者、匯入來源還是社群。量測結果附上指標、方法、條件、單位與時間，未知、零與不適用分開顯示。',
      },
    },
    {
      slug: 'connections',
      label: '周邊',
      meta: {
        title: 'API Hub 周邊：建在 API 上的東西',
        description:
          'API 的提供者、用戶端程式庫、包裝它的 MCP 伺服器與用到它的技能，彼此用關聯連起來，從哪一端都看得到。提供者也有自己的頁面，列出它參與的每一項。',
      },
    },
    {
      slug: 'community',
      label: '社群',
      meta: {
        title: 'API Hub 社群：評分、討論與清單',
        description:
          'API 的評分寫明問的是什麼、針對哪一版、由哪一群人給分，人數與分布一起顯示。討論接在條目或版本底下，清單能混放 API、軟體與 MCP 伺服器。',
      },
    },
    {
      slug: 'publishing',
      label: '收錄',
      meta: {
        title: 'API Hub 收錄：新增與更正',
        description:
          '新增 API 之前先搜尋有沒有重複，再說明是新的 API、新版本還是別名。提案附上證據，經人審核後才套用，提供者與 AI 代理都走同一條路。',
      },
    },
  ],
  strings: {
    example: '示意：',
    next: { label: '接著看', aria: 'API Hub 的其他頁面' },
    closingBody: '用一個帳號找 API、追蹤改版，也把串接的經驗留給下一個人。',
    pictures: {
      hero: '暖白紙面上，幾張淺藍色的紙交疊，邊上打著一排排整齊的圓孔，底下露出一張深藍色的紙。',
      request: '五張淺藍色的紙片像閘門一樣立成一排，一條深灰藍的紙帶依序穿過每一張紙上的切口。',
      versions: '六張淺藍色的卡紙依序錯開排成扇形，顏色由淡漸深，頂端的圓孔一張接一張對齊。',
      specs: '三張淺藍色厚紙交疊，角落各有一圈空白的方形壓紋，底下露出深灰藍紙面。',
      connections: '一張淺藍色的紙中央打著一排圓孔，土黃、淺綠與深青三條紙帶從邊緣伸來，各自穿進一個孔。',
    },
    home: {
      hero: {
        headline: '每個 API 一個條目，每筆事實都有出處。',
        lede: '提供者、版本、規格文件與認證方式整理在同一個條目，誰說的、什麼時候說的都寫明。',
      },
      pages: {
        eyebrow: '六個頁面',
        headline: '從找到一個 API，到跟上它的每一版。',
        rows: {
          directory: '用事實當條件，結果列到最後一筆',
          versions: '舊版本留著，新版本找得到你',
          specs: '怎麼認證、規格在哪，都附出處',
          connections: '程式庫、MCP 伺服器與技能連在一起',
          community: '評分與討論，都說清楚對象',
          publishing: '新增與更正走同一條路',
        },
      },
      directory: {
        eyebrow: '目錄',
        headline: '每一個條件，都是條目上一筆有來源的事實。',
        lead: '認證方式、規格文件、版本狀態，還有它連著哪些 MCP 伺服器與技能，都能拿來篩選。條件可以任意組合，結果一路列到最後一筆。',
        link: '看目錄',
      },
      statement: {
        lead: 'API 會改版、會改名，也會撤回。',
        rest: '條目把每一次都記下來，並寫明是誰說的。',
      },
      parts: {
        eyebrow: '八個部件',
        headline: '一個 API 條目，由八個部件組成。',
        lead: '身分永遠排在第一個。其他七個部件，是 API Hub 從十五個共用部件裡挑出來的，書與動畫用的也是同一套。',
        notes: {
          identity: '改了名稱或換了識別碼，條目還是同一個，舊的寫法照樣查得到。',
          editions: '每一版各是一筆紀錄，寫的是當時實際發布的內容。',
          specs: '認證方式、規格文件與量測結果，各自附上來源與時間。',
          credits: '提供的組織與維護的人依角色列名，各有自己的頁面。',
          ratings: '分數旁邊寫明評的是哪一版、問的是哪個問題。',
          discussion: '討論串接在整個 API 或某一版底下。',
          follow: '新版本與撤回的消息，依你設定的等級送達。',
          lists: '一份清單可以同時放 API、軟體與技能，每項附註記。',
        },
      },
      connections: {
        eyebrow: '周邊',
        headline: '建在 API 上的東西，彼此連在一起。',
        lead: '用戶端程式庫、包裝它的 MCP 伺服器、用到它的技能，還有提供它的組織，都是有身分的條目。關聯把它們連起來，從哪一端都看得到。',
        link: '看周邊',
      },
      closing: '挑一個 API 之前，先看它的版本與證據。',
    },
    directory: {
      hero: {
        headline: '用事實找 API，結果列到最後一筆。',
        lede: '每個條件都對應條目上一筆有來源的事實。條件可以任意組合，結果照順序一路列完，不會停在前幾頁。',
      },
      facets: {
        eyebrow: '條件',
        headline: '條目上寫了什麼，就能拿什麼來篩。',
        lead: '每個條件都有自己的名稱與值，值本身也是一個條目，點進去還能繼續往下找。',
        rows: [
          { title: '提供者', body: '提供 API 的組織或個人。同一個提供者的 API 一次列出。' },
          { title: '認證方式', body: '免認證、API 金鑰、使用者授權，每一版分開記。' },
          { title: '規格文件', body: '有沒有規格文件、放在哪裡、由誰提供。' },
          { title: '版本狀態', body: '已宣布、可用、已撤回或已取消。' },
          { title: '關聯', body: '有沒有包裝它的 MCP 伺服器、呼叫它的用戶端程式庫，或用到它的技能。' },
          { title: '名稱與語言', body: '任何語言的名稱與別名，都能拿來搜尋。' },
          { title: '評分', body: '依某個評分問題篩選，人數一起列出。' },
          { title: '日期', body: '依版本發布或事實確認的日期篩選。' },
        ],
      },
      complete: {
        lead: '預覽、排名與完整清單，是三種承諾。',
        rest: '完整清單，會列到最後一筆。',
        note: '每份結果都寫明筆數有多精確、資料更新到什麼時候。每頁的大小，不是清單的盡頭。',
      },
      identity: {
        eyebrow: '身分',
        headline: '同一個 API，只有一個條目。',
        lead: '改了名稱、換了識別碼，或被人重複新增，它仍然只有一個條目。',
        rows: [
          { title: '識別碼記下出處', body: '每個識別碼都記下屬於哪個命名空間、出自哪個來源。不同地方剛好同名，不會被當成同一個。' },
          { title: '舊名稱照樣查得到', body: '別名、舊名稱與各語言的寫法分開保存，搜尋任何一個都會找到它。' },
          { title: '重複的會合併', body: '發現重複時，合併計畫先列出會受影響的評分、評論與追蹤，經人決定才執行。合併可以復原。' },
          { title: '舊網址導向新條目', body: '被合併的條目會導向留下來的那一筆，並寫明合併的理由。' },
        ],
      },
      views: {
        eyebrow: '檢視',
        headline: '常用的條件，存起來，再追蹤。',
        lead: '一組條件存成檢視後，就有自己的名稱，可以分享給別人。追蹤一個檢視，符合條件的新條目會出現在你的追蹤動態，也可以設成摘要寄給你。',
        tiles: [
          { name: '免認證、有規格文件', line: '做原型時，不必申請金鑰就能試的 API' },
          { name: '同一家提供者', line: '一個組織提供的 API，一次看完' },
          { name: '有 MCP 伺服器', line: 'AI 代理已經能透過 MCP 伺服器使用的 API' },
          { name: '名稱有繁體中文', line: '已經有人整理過中文名稱的 API' },
        ],
        caption: '檢視名稱與內容都是例子。',
      },
      closing: '找 API，從一筆有來源的事實開始。',
    },
    versions: {
      hero: {
        headline: '舊版本不消失，新版本找得到你。',
        lede: '每一版各自保存發布時的樣子，被撤回也照樣查得到。追蹤一個 API，下一版宣布、上線或撤回時，消息依你設定的方式送到。',
      },
      closed: {
        lead: '發布過的版本，紀錄不會被改寫。',
        rest: '後來的變更，就是下一個版本。',
      },
      sequence: {
        eyebrow: '版本順序',
        headline: '一個 API 的四個版本，依發布順序排列。',
        lead: '有證據顯示紀錄寫錯了，可以更正；但之後才出現的內容，不會補進舊版本裡。',
        tiles: [
          { name: 'v1', rel: '已撤回', line: '提供者不再提供，紀錄還在' },
          { name: 'v2', rel: '可用', line: '和新版並排列出，不會被蓋過去' },
          { name: 'v3', rel: '可用', line: '變更紀錄逐條保留，各附出處' },
          { name: 'v4', rel: '已宣布', line: '宣布不等於發布，上線前只是公告' },
        ],
        caption: '一個虛構的 API，版本號與內容都是例子。',
      },
      events: {
        eyebrow: '五種消息',
        headline: '從宣布到撤回，五種消息各記各的。',
        lead: '同一個版本會經過好幾個時間點。REZICS 不把它們混成一個日期。',
        rows: [
          { title: '宣布', body: '提供者說會有新版本。這是一則公告，還不是發布。' },
          { title: '排定', body: '公布了預定日期。日期之後有變動，舊的日期也留在歷史裡。' },
          { title: '可用', body: '確認已經可以使用，並附上確認的來源。' },
          { title: '延後', body: '預定日期往後移。延後和取消是兩回事，取消會另外標明。' },
          { title: '撤回', body: '提供者收回這個版本。紀錄保留，狀態改為已撤回。' },
        ],
      },
      follow: {
        eyebrow: '追蹤',
        headline: '追蹤一個 API，選你要聽多少。',
        lead: '追蹤不必經過對方同意，也不收費。每個追蹤都有一個通知等級，決定哪些消息會進你的收件匣。',
        rows: [
          { title: '全部', body: '新版本、公告與決定之外，連一般貼文也通知你。' },
          { title: '重點', body: '新版本、公告與決定，才會通知你。' },
          { title: '關閉', body: '消息只出現在追蹤動態，不另外通知。' },
          { title: '單一版本另設', body: '想盯緊某一個版本，可以替它另外設定通知。' },
        ],
        footnote: '通知可以送到收件匣、推播或電子郵件摘要。每封電子郵件都能一鍵退訂。',
      },
      closing: '改版的消息，依你選的方式送到。',
    },
    specs: {
      hero: {
        headline: '呼叫之前，先知道要準備什麼。',
        lede: '每個版本怎麼認證、規格文件放在哪裡、量到了什麼，都寫在版本底下，並標明是誰說的、什麼時候說的。',
      },
      facts: {
        eyebrow: '寫在版本上',
        headline: '認證方式與規格文件，記在每一個版本上。',
        lead: '同一個 API 的兩個版本，認證方式可能不一樣。所以這些事實跟著版本走，每一筆都標明出處。',
        rows: [
          { title: '認證方式', body: '免認證、API 金鑰或使用者授權，記在每一個版本上。新版本改了認證方式，舊版本的紀錄不會跟著改。' },
          { title: '規格文件', body: '條目記下規格文件在哪裡、由誰提供、哪一天確認的。' },
          { title: '量測', body: '量測結果一定附上指標、方法、條件、單位與時間。' },
          { title: '出處', body: '每筆事實都標明出自提供者、從公開資料匯入，還是社群量到的。匯入的資料附上來源與授權的連結。' },
        ],
      },
      measure: {
        lead: '量測和評分是兩回事。',
        rest: '評分是大家的看法；量測說的是，在什麼條件下量到了什麼。',
      },
      fields: {
        eyebrow: '量測',
        headline: '一筆量測，五個欄位。',
        lead: '少了方法與條件的數字，不算量測結果。五個欄位齊了，結果才能和別的 API 放在一起比。',
        rows: [
          { title: '指標', body: '量的是什麼。' },
          { title: '方法', body: '用什麼方法量。' },
          { title: '條件', body: '在什麼情況下量。' },
          { title: '單位', body: '數值用的單位。' },
          { title: '時間', body: '哪一天量的。舊的結果，標著舊的日期。' },
        ],
        footnote: '同一個指標的結果累積成歷史，也能和其他 API 放進同一張比較表。',
      },
      absent: {
        eyebrow: '缺少的資料',
        headline: '未知、零、不適用，是三種答案。',
        lead: '沒量過就是未知，不會被寫成零；不適用的指標，也不會被當成缺資料。缺少的資料，不會變成誤導人的分數。',
      },
      closing: '先知道怎麼認證，再開始串接。',
    },
    connections: {
      hero: {
        headline: '一個 API，連著建在它上面的一切。',
        lede: '用戶端程式庫、包裝它的 MCP 伺服器、用到它的技能，還有提供它的組織，在 REZICS 都是有身分的條目，再用關聯連起來。',
      },
      relations: {
        eyebrow: '關聯',
        headline: '關聯有名稱，也有方向。',
        lead: '每條關聯都寫明是哪一種、誰在哪個角色。API 頁面上看得到它們，另一端的頁面也看得到。',
        rows: [
          { title: '用戶端程式庫', body: '呼叫這個 API 的程式庫是軟體條目，有自己的版本與依賴。' },
          {
            title: '包裝成 MCP 伺服器',
            body: '把它包成 MCP 伺服器的專案，在 MCP Hub 有自己的條目，專案、套件與部署端點分開記錄。',
          },
          {
            title: '用到它的技能',
            body: '用到這個 API 的技能，在 Skill Hub 有自己的條目，用關聯連回這裡。',
          },
          { title: '同一提供者的其他 API', body: '從提供者的頁面，找到它提供的其他 API。' },
        ],
      },
      both: {
        lead: '從 API 找得到 MCP 伺服器，',
        rest: '反過來也找得回 API。',
      },
      provider: {
        eyebrow: '提供者',
        headline: '提供者，有自己的頁面。',
        lead: '提供 API 的組織或個人是一個公開身分，和誰的帳號無關。它提供的 API、發布的軟體、維護的 MCP 伺服器，都依各自的角色列在它的頁面上。',
        more: '同一個人寫小說、做軟體、維護 API，在 REZICS 仍是同一個身分。',
      },
      neighbours: {
        eyebrow: '相鄰',
        headline: '相鄰的三種東西，和開發者網站。',
        lines: {
          mcp: '把 API 包成工具的 MCP 伺服器',
          skills: 'AI 代理用的技能，有些靠它完成工作',
          software: '呼叫 API 的程式庫與應用程式',
        },
        developers: { name: '開發者', line: 'REZICS 自己的 API 在這裡' },
      },
      closing: '從哪一端出發，都找得到另一端。',
    },
    community: {
      hero: {
        headline: '每個分數，都說清楚評的是哪一版。',
        lede: '評一個 API，要先說清楚問的是哪個問題、針對哪一版。分數旁邊附上人數與分布；討論、清單與社群，也都圍著同一個條目。',
      },
      rating: {
        eyebrow: '評分',
        headline: '一個分數，由五件事決定。',
        lead: '示意：問「文件清不清楚」，用五分制，針對第三版，由全站的人給分。',
        rows: [
          { title: '問題', body: '評的是哪個問題。問題不同的分數，從不合在一起算。' },
          { title: '量表', body: '用幾分制、每一分代表什麼，事先講明。' },
          { title: '對象', body: '評的是哪一版。這一版的分數，不會算進別的版本。' },
          { title: '群體', body: '由哪一群人給分，標籤就寫在分數旁邊。' },
          { title: '人數與分布', body: '每個分數都附上評分人數與分布。人數太少時，只列出人數與分布，不算平均。' },
        ],
      },
      discussion: {
        lead: '串接遇到的問題，接在那一版底下討論。',
        rest: '換了版本，舊版的討論仍留在舊版底下。',
      },
      lists: {
        eyebrow: '清單',
        headline: '一個專案用到的東西，放進一份清單。',
        lead: '清單不分種類：API、用戶端程式庫、MCP 伺服器與技能可以排在一起，每項寫上一句註記。清單有自己的公開範圍，可以排序，也能匯出。',
        tiles: [
          { kind: 'apis', rel: 'API', name: '天氣資料 API', line: '預報資料的來源' },
          { kind: 'apis', rel: 'API', name: '地圖圖磚 API', line: '畫面上的底圖' },
          { kind: 'software', rel: '軟體', name: '用戶端程式庫', line: '從程式裡呼叫天氣資料 API' },
          { kind: 'mcp', rel: 'MCP 伺服器', name: '天氣 MCP 伺服器', line: '讓 AI 代理查詢天氣' },
          { kind: 'skills', rel: '技能', name: '行程整理技能', line: '依天氣調整每天的行程' },
        ],
        caption: '一個虛構專案的清單，名稱都是例子。',
      },
      zone: {
        eyebrow: 'Realm 與 Zone',
        headline: '為一類 API，架一個 Zone。',
        lead: '社群可以成立 Realm，訂自己的規則，用自己的方式解讀條目上的事實。也可以架一個 Zone，做成專門的 API 目錄網站，資料仍來自同一張圖。',
        link: '看站點模組',
      },
      closing: '每個分數與討論，都說清楚對象。',
    },
    publishing: {
      hero: {
        headline: '先找有沒有，再新增。',
        lede: '每一筆新增與更正都是提案：說清楚改哪裡、根據什麼，由人審核後才套用，並留下回執。人、提供者與 AI 代理，都用同一套方式。',
      },
      path: {
        eyebrow: '路徑',
        headline: '一筆條目，這樣進來。',
        rows: [
          { title: '先搜尋', body: '表單出現之前，先用名稱、別名與識別碼搜尋。找到了，就補上別名或新版本，不必另開一筆。' },
          { title: '說明它是什麼', body: '是新的 API、既有 API 的新版本，還是某個版本的一部分，由提交的人說明。模型可以建議，不能替人決定。' },
          { title: '附上證據', body: '每個提案寫明要改的確切位置、依據的來源與方法。' },
          { title: '由人審核', body: '審核者看過證據才做決定。提案送出之後條目有了變動，提案就退回重新審核。' },
          { title: '先標示未驗證', body: '新條目可以先公開，但會標成未驗證，並顯示每個欄位的來源。驗證之前，它不會進入受信任的匯出與推薦。' },
          { title: '留下回執', body: '套用之後留下回執。撤銷一項變更時，會用更正的方式進行，不改寫歷史。' },
        ],
      },
      proposal: {
        eyebrow: '提案格式',
        headline: 'AI 代理的提案，格式和人一樣。',
        lead: '官方與第三方的代理，送出的是同一種提案。代理的輸出不能替自己背書，再次匯入時也一樣。',
        rows: [
          { title: '目標與版本', body: '要改的確切條目，以及代理讀到的是哪個修訂版本。' },
          { title: '變更', body: '要新增、修改或移除的內容。' },
          { title: '證據', body: '支持這項變更的來源與位置。' },
          { title: '方法', body: '怎麼得出這個結果，用了哪些輸入。' },
          { title: '信心', body: '代理自己聲稱的把握。這是代理的說法，不是 REZICS 的保證。' },
          { title: '揭露', body: '標明這是自動化，以及由誰負責執行。' },
        ],
      },
      paid: {
        lead: '付費買不到結論。',
        rest: '贊助或訂閱，都換不到審核的結論。',
      },
      provider: {
        eyebrow: '提供者',
        headline: '提供者，也走同一條路。',
        lead: 'API 的提供者可以證明自己擁有它的命名空間，提出的事實會標明出自提供者。提供者的說法仍是一種說法，社群量到的結果與討論，照樣留在條目上。',
        more: '提供者撤回自己的說法時，只會撤掉自己那一份依據。匯入的事實附上來源與授權；有人確認並保護過的欄位，之後的匯入不會悄悄蓋掉。',
      },
      closing: '新增與更正，都經過人的審核。',
    },
  },
} satisfies MiniSite<ApisStrings>;
