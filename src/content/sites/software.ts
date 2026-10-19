// The software site (軟體): every visible string of /software/ and its six inner pages, in the
// v3 language (.temp/sites/V3-SPEC.md). Design record and sources: src/sites/software/SITE.md and
// facts.md. All sample data (the program 範例編輯器, 甲／乙／丙系統, version numbers, dates, sizes,
// the hash, package names) is fictional and is labelled 示意 wherever it appears.
import type { Item, KindId, MiniSite } from '../schema';

export type StateId = 'compatible' | 'incompatible' | 'unknown' | 'stale' | 'unavailable';
/** One compatibility observation: a state, and the date of the adopted measurement where there is one. */
export type Cell = readonly [StateId, string?];
/** A section's opening: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}
/** A still-life picture in public/images/sites/software/ (`<name>-<width>.avif|webp`). */
export interface Picture {
  name: string;
  alt: string;
}

export interface SoftwareStrings {
  common: { nextPage: string; nextSite: string; sample: string; go: string };
  pictures: Record<'hero' | 'versions' | 'holes' | 'slit' | 'tabs', Picture>;
  states: Record<StateId, string>;
  channels: { stable: string; beta: string };
  sample: {
    program: string;
    /** Newest first. */
    releases: { version: string; channel: 'stable' | 'beta'; date: string; platforms: string; note?: string }[];
    environments: { name: string; short: string }[];
    /** Rows follow `environments`, columns follow `releases`. */
    cells: Cell[][];
  };
  landing: {
    hero: { label: string; headline: string; lede: string };
    pages: Head & { lines: Record<string, string> };
    compatibility: Head & { link: string };
    statement: { text: string; sub: string };
    program: Head & { items: Item[] };
    neighbours: Head & { link: string; tiles: { kind: KindId; line: string }[] };
    closing: string;
  };
  catalogue: {
    hero: { headline: string; lede: string };
    releases: Head;
    list: { caption: string; columns: [string, string, string, string]; points: Item[] };
    statement: { text: string; sub: string };
    identity: Head & { rows: Item[] };
    browse: Head & { points: Item[] };
    closing: string;
  };
  compatibility: {
    hero: { headline: string; lede: string };
    anatomy: Head & { rows: Item[] };
    states: Head & { body: Record<StateId, string>; caption: string; corner: string };
    conditions: Head & { example: string; candidates: Item[]; result: string };
    statement: { text: string; sub: string; note: string };
    closing: string;
  };
  reviews: {
    hero: { headline: string; lede: string };
    rules: Head & { facts: Item[] };
    anatomy: Head & { points: Item[] };
    statement: { text: string; sub: string };
    picks: Head & { rows: Item[] };
    closing: string;
  };
  updates: {
    hero: { headline: string; lede: string };
    levels: Head & { rows: Item[] };
    targets: Head & { rows: Item[] };
    changelog: Head & { more: string; caption: string; start: string };
    statement: { text: string; sub: string };
    closing: string;
  };
  publishing: {
    hero: { headline: string; lede: string };
    record: Head & { caption: string; fields: Item[] };
    steps: Head & { steps: Item[]; note: string };
    licence: Head & { points: Item[] };
    lock: Head & { points: Item[] };
    statement: { text: string; sub: string; note: string };
    maintenance: Head & { rows: Item[] };
    closing: string;
  };
  connections: {
    hero: { headline: string; lede: string };
    relations: Head & { rows: Item[] };
    kinds: Head & { rows: { kind: KindId; line: string; body: string }[] };
    people: Head;
    statement: { text: string; sub: string };
    closing: string;
  };
}

const site = {
  id: 'software',
  base: '/software/',
  name: '軟體',
  theme: { kind: 'software' },
  next: 'visual-novels',
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: '軟體：版本、平台與實測相容性',
        description:
          '每個程式在 REZICS 有一個身分，底下列出各平台的每次發行。相容性是附方法與日期的實測，授權、取得方式、評分與更新通知都連在同一個身分上。',
      },
    },
    {
      slug: 'catalogue',
      label: '目錄與版本',
      meta: {
        title: '目錄與版本：一個程式一個身分',
        description:
          'REZICS 的軟體目錄給每個程式一個身分。各平台的發行各自封存，版本先後照生態系的規則排列，分支另立條目並連回原專案，篩選結果附上誠實的筆數。',
      },
    },
    {
      slug: 'compatibility',
      label: '相容性',
      meta: {
        title: '相容性：附上日期的實測',
        description:
          'REZICS 的軟體相容性是一筆筆實測，寫明指標、方法、條件與日期，並綁定確切的檔案。相容、不相容、未知、過時與無法取得分開標示，沒有實測就寫未知。',
      },
    },
    {
      slug: 'reviews',
      label: '評價',
      meta: {
        title: '評價：分數屬於某一個發行',
        description:
          '在 REZICS，軟體的評分可以只給某一個發行，並附上人數、分布與評分所在的社群。跨版本的總分另外計算、寫明算法，社群的精選都連到做出決定的討論。',
      },
    },
    {
      slug: 'updates',
      label: '追蹤更新',
      meta: {
        title: '追蹤更新：發行與更新說明',
        description:
          '在 REZICS 追蹤一個程式、一位開發者或一組篩選條件，新發行與更新說明會依你選的通知程度送來。可以只看站內收件匣，也能開推播或收電子郵件摘要。',
      },
    },
    {
      slug: 'publishing',
      label: '發布與授權',
      meta: {
        title: '發布與授權：給發布軟體的人',
        description:
          '開發者在 REZICS 維護自己的程式頁面，發布各平台的發行，附上檔案大小、雜湊值、更新說明與截圖，宣告授權的確切條款與版本，並寫明取得方式。',
      },
    },
    {
      slug: 'connections',
      label: '關聯',
      meta: {
        title: '關聯：依賴它與延伸它的東西',
        description:
          '在 REZICS，程式連到依賴它的遊戲模組、讓 AI 代理操作它的 MCP 伺服器、需要它的技能，以及相關的 API。每條關聯都有方向與出處，從兩端都查得到。',
      },
    },
  ],
  strings: {
    common: { nextPage: '下一頁', nextSite: '下一個網站', sample: '示意資料：程式、系統、版本號與日期皆為虛構。', go: '前往' },
    pictures: {
      hero: { name: 'hero', alt: '深青色的紙片一張疊著一張依序錯開，像扇子一樣展開，最上面一張是淡藍色。' },
      versions: { name: 'versions', alt: '三個深青色的紙封依序排開，各用一條灰藍色紙帶束住。' },
      holes: { name: 'holes', alt: '一張深青色的紙上打著整齊的圓孔，有幾個位置沒有打穿。' },
      slit: { name: 'slit', alt: '一張深青色的紙片，穿過灰藍色紙上的一道切口。' },
      tabs: { name: 'tabs', alt: '深青色的紙片用兩條紙扣，分別連起一張芥黃色紙與一張淺綠色紙。' },
    },
    states: { compatible: '相容', incompatible: '不相容', unknown: '未知', stale: '過時', unavailable: '無法取得' },
    channels: { stable: '穩定版', beta: '測試版' },
    sample: {
      program: '範例編輯器',
      releases: [
        { version: '4.1', channel: 'beta', date: '2026-10-06', platforms: '甲・乙・丙', note: '新增分割視窗；修正大型檔案開啟過慢。' },
        { version: '4.0', channel: 'stable', date: '2026-08-25', platforms: '甲・乙・丙', note: '新增工作區；移除舊的外掛格式。' },
        { version: '3.2', channel: 'stable', date: '2026-03-17', platforms: '甲・乙・丙', note: '新增手機版；改善搜尋速度。' },
        { version: '3.1', channel: 'stable', date: '2025-11-04', platforms: '甲・乙' },
        { version: '3.0', channel: 'stable', date: '2025-06-10', platforms: '甲・乙' },
      ],
      environments: [
        { name: '甲系統・64 位元', short: '甲 64' },
        { name: '甲系統・32 位元', short: '甲 32' },
        { name: '乙系統・64 位元', short: '乙 64' },
        { name: '丙系統・手機', short: '丙 手機' },
      ],
      // Columns follow `releases` (4.1, 4.0, 3.2, 3.1, 3.0).
      cells: [
        [['unknown'], ['compatible', '2026-08-29'], ['compatible', '2026-03-20'], ['compatible', '2025-11-09'], ['compatible', '2025-06-14']],
        [['unavailable'], ['unavailable'], ['incompatible', '2026-03-22'], ['compatible', '2025-11-10'], ['stale', '2025-06-15']],
        [['compatible', '2026-10-09'], ['unknown'], ['compatible', '2026-03-20'], ['compatible', '2025-11-12'], ['unknown']],
        [['unknown'], ['compatible', '2026-09-02'], ['stale', '2026-03-25'], ['unavailable'], ['unavailable']],
      ],
    },

    landing: {
      hero: {
        label: '軟體',
        headline: '每一版能在哪裡跑，都附上實測與日期。',
        lede: 'REZICS 給每個程式一個身分，底下是它在各平台的每一次發行。沒人測過的環境標明未知；授權、取得方式、評分與討論，都連在同一個身分上。',
      },
      pages: {
        label: '六個頁面',
        headline: '從找到一個程式，到發布你自己的。',
        lines: {
          catalogue: '一個身分，每次發行各記一筆',
          compatibility: '能不能跑，看附日期的實測',
          reviews: '分數旁邊先寫是哪一版',
          updates: '追蹤程式、開發者與篩選條件',
          publishing: '給開發者：發行、授權與取得',
          connections: '模組、MCP 伺服器、技能與 API',
        },
      },
      compatibility: {
        label: '相容性',
        headline: '說能跑，要附上實測。',
        lead: '開發者列出的支援平台是一種說法；實測是某人在某一天、某個環境確認的結果，寫明方法與條件。REZICS 只拿實測回答能不能跑。',
        link: '看相容性怎麼記',
      },
      statement: {
        text: '沒人測過的，就寫未知；',
        sub: '不會被猜成相容，也不會被當成不相容。',
      },
      program: {
        label: '一個程式',
        headline: '連在同一個身分上的事。',
        items: [
          { title: '發行', body: '各平台的每一次發行各自封存，穩定版與測試版分開標示。' },
          { title: '相容性', body: '作業系統、系統版本與處理器架構，綁在同一個發行上確認。' },
          { title: '授權', body: '寫到條款的版本，並記下是誰、在什麼時候宣告。' },
          { title: '取得方式', body: '官方下載、商店與套件庫並列；只是連出去的，就說是外部連結。' },
          { title: '評分', body: '可以只評某一版，人數與分布攤開在分數旁邊。' },
          { title: '追蹤', body: '追蹤程式或它的維護者，新版本與公告都會送到你面前。' },
        ],
      },
      neighbours: {
        label: '關聯',
        headline: '程式很少單獨存在。',
        lead: '遊戲模組依賴它，MCP 伺服器讓 AI 代理操作它，技能要先有它才能運作。每條關聯都有方向與出處，站在哪一端都查得到。',
        link: '看全部關聯',
        tiles: [
          { kind: 'games', line: '模組與載入器依賴的程式' },
          { kind: 'mcp', line: '讓代理操作它的伺服器' },
          { kind: 'skills', line: '把它列為依賴的技能' },
          { kind: 'apis', line: '它提供或呼叫的 API' },
        ],
      },
      closing: '一個程式，一個身分，每一版都查得到。',
    },

    catalogue: {
      hero: {
        headline: '版本號會變，身分不會。',
        lede: '程式改了名字、搬到另一個套件庫、出到新的平台，在 REZICS 仍是同一個條目。每一次發行另記一筆，寫下當時實際發出的內容。',
      },
      releases: {
        label: '發行',
        headline: '每一次發行，各自封存。',
        lead: '一筆發行記下版本號、發行管道、日期、平台，以及當時實際包含的檔案。寫錯的資料可以附證據更正；後來才出的修補，會成為新的一筆。',
      },
      list: {
        caption: '範例編輯器的發行，由新到舊（示意）',
        columns: ['版本', '發行管道', '日期', '平台'],
        points: [
          { title: '發行管道', body: '穩定版與測試版分開標示。最新的一筆，不一定是適合你的那一筆。' },
          { title: '版本順序', body: '先後照程式所屬生態系的規則判斷，不把版本號當成文字比大小。' },
          { title: '平台', body: '同一個版本在不同平台的發行，各有自己的紀錄。' },
        ],
      },
      statement: {
        text: 'REZICS 不計算下載次數，',
        sub: '也不拿它排序；清單會寫明這次用的是哪一種排序。',
      },
      identity: {
        label: '名字與身分',
        headline: '名字一樣，不代表是同一個。',
        rows: [
          { title: '多語名稱', body: '中文名、原名與常見的簡稱都記下來，用哪一個搜尋都找得到。' },
          {
            title: '識別碼',
            body: '套件庫裡的名稱、網址與編號，各自記下出處。兩個套件庫裡相同的字串，不會自動算成同一個程式。',
          },
          { title: '分支', body: '分支出去的專案另立條目，有自己的維護者與發行，再用「分支自」連回原專案。' },
          { title: '合併與拆分', body: '重複的條目附上證據合併，舊網址繼續有效。合錯了可以撤回，收藏與評分不會因此重複計算。' },
        ],
      },
      browse: {
        label: '篩選',
        headline: '條件要落在同一個發行上。',
        lead: '找「乙系統 64 位元能跑、開放原始碼授權的穩定版」，REZICS 只列出有某一個發行同時符合全部條件的程式。條件分散在兩個發行的，不會列進來。',
        points: [
          { title: '筆數', body: '結果附上筆數；還沒數完時，寫的是「至少」。' },
          { title: '翻到最後', body: '清單可以一路翻到最後一筆，不會停在某一頁。' },
          { title: '存成檢視', body: '常用的條件可以存成檢視，之後直接追蹤。' },
        ],
      },
      closing: '版本號會變，查得到的紀錄留著。',
    },

    compatibility: {
      hero: {
        headline: '相容性，是一筆一筆的實測。',
        lede: '開發者列出的支援平台是一種說法，實測是某人在某一天、某個環境裡確認的結果。REZICS 把兩者分開記，回答相容性的只有後者。',
      },
      anatomy: {
        label: '一筆實測',
        headline: '一筆實測寫了什麼。',
        lead: '六個欄位寫齊，別人才能照著重測，也才知道這個結果能用在哪裡。',
        rows: [
          { title: '指標', body: '測的是什麼：能不能啟動、某項工作做不做得完，或某個數值。有數值時，單位一併記下。' },
          { title: '方法', body: '步驟寫得夠清楚，別人才能照著重測一次。' },
          { title: '條件', body: '作業系統版本、處理器架構與相關設定綁在同一筆實測上。條件一變，就是另一筆實測。' },
          { title: '檔案', body: '實測針對確切的檔案，以雜湊值指認。雜湊值只證明是這些位元組，不代表其他檔案也一樣。' },
          { title: '日期與送出者', body: '每筆實測都有日期與送出者。人與 AI 代理都能送出，自動化的帳號會標明自己是自動化。' },
          { title: '採納', body: '實測以提案送出，被採納後才算數。有人提出質疑時另外標示，先前的判斷照樣保留。' },
        ],
      },
      states: {
        label: '五種狀態',
        headline: '五種狀態，各說各的話。',
        lead: '相容與不相容之外，還有三種常被混在一起的情況。REZICS 把它們分開寫。',
        body: {
          compatible: '至少一筆被採納的實測，在這個環境順利完成，並寫上日期。',
          incompatible: '被採納的實測顯示無法執行，證據與日期一樣附上。',
          unknown: '沒有任何實測。不從標籤、分類或宣傳文字推論。',
          stale: '實測超出有效期。結果還看得到，但不再當作現況。',
          unavailable: '這個環境沒有可以取得的發行，也就談不上相容與否。',
        },
        caption: '範例編輯器各版本在四種環境的相容性（示意）',
        corner: '環境',
      },
      conditions: {
        label: '條件',
        headline: '條件綁在同一筆實測上。',
        lead: '篩選相容性時，所有條件必須由同一個發行、同一筆實測同時滿足。把不同版本的結果拼在一起，看起來能用，裝下去卻不行。',
        example: '例如條件是「乙系統・64 位元、穩定版、相容、4.0 以後」，範例編輯器有兩個候選發行（示意）：',
        candidates: [
          { title: '4.1 測試版', body: '相容。測過能跑，但不是穩定版。' },
          { title: '4.0 穩定版', body: '未知。是穩定版，但還沒有人測過。' },
        ],
        result: '條件分散在兩個發行，所以沒有符合的結果。REZICS 會直接回答沒有，不會悄悄放寬條件。',
      },
      statement: {
        text: '每一個標示，都說得出證據與範圍；',
        sub: '外部連結本身，證明不了什麼。',
        note: '掃描結果也一樣，只說明某一個檔案、某一次掃描。',
      },
      closing: '能不能跑，留給實測回答。',
    },

    reviews: {
      hero: {
        headline: '先講是哪一版，再講幾分。',
        lede: '同一個程式，改版前後可能判若兩樣。評分可以給整個程式，也可以只給某一個發行；給某一版的分數，會一直留在那一版。',
      },
      rules: {
        label: '分數旁邊的規則',
        headline: '先有足夠的人，才有平均。',
        facts: [
          { title: '5', body: '預設要有 5 筆評分，才顯示平均。在那之前只顯示人數與分布，並寫明還差幾筆。' },
          { title: '50', body: '排行榜使用加權分數，預設至少 50 筆評分才列入，加權用的平均與權重都公開。' },
          { title: '1', body: '同一個人對同一個問題只有一筆有效評分，改分就是更新那一筆。' },
        ],
      },
      anatomy: {
        label: '問題與對象',
        headline: '每個分數，都有它回答的問題。',
        lead: '評分的問題、量表與對象一起定義。問題不同的分數不會加在一起，單一發行的分數也不會自動算進整個程式。',
        points: [
          { title: '並排', body: '全站與每個社群的分數並排列出，不揉成一個數字。' },
          { title: '跨版本', body: '跨版本的總分是另一個指標，寫明算法與涵蓋了幾個發行。' },
          { title: '不捏造', body: 'REZICS 不捏造評論、投票或參與，自動化帳號一律標明。' },
        ],
      },
      statement: {
        text: '還沒有人評分時，什麼都不畫；',
        sub: '不會出現零分，也不會有空白的長條圖。',
      },
      picks: {
        label: '精選與替代',
        headline: '精選有人負責，替代說得出理由。',
        rows: [
          { title: 'Realm 精選', body: '社群選出的程式，每一筆都連到做出這個決定的討論。' },
          { title: '可以替代', body: '「可以拿來代替它做某件事」是一條關聯，附上理由與提出的人，也可以被質疑。' },
          { title: '清單', body: '整理成清單時寫明目標環境，以及相容性有沒有查過。' },
          { title: '推薦', body: '每一則推薦都說明理由，例如你追蹤的條件或某個社群的決定；不想要也能整個關掉。' },
          { title: '回報問題', body: '某一版出了問題，討論就開在那一版底下，之後的人一看就知道說的是哪一版。' },
        ],
      },
      closing: '分數旁邊，寫著是哪一版、多少人。',
    },

    updates: {
      hero: {
        headline: '新發行，照你選的程度送來。',
        lede: '追蹤一個程式，它的新發行與更新說明就會送來。每一則都要、只要重要的，或完全不打擾，由你決定。',
      },
      levels: {
        label: '通知程度',
        headline: '三種程度，每個追蹤各自設定。',
        lead: '隨時可以改。某一次發行特別重要時，也能單獨替它設定通知。',
        rows: [
          { title: '全部', body: '每一次發行、每一則公告與貼文都會通知。' },
          { title: '精選', body: '只通知新發行、公告與社群的決定。' },
          { title: '關閉', body: '只剩直接和你有關的回覆與提及。' },
          { title: '去處', body: '站內收件匣、推播，或彙整成電子郵件摘要。不想再收信，點一次就能退訂。' },
        ],
      },
      targets: {
        label: '追蹤對象',
        headline: '能追蹤的，不只是程式。',
        rows: [
          { title: '程式', body: '它的新發行與更新說明。' },
          { title: '開發者或組織', body: '他們推出的新條目與公告。' },
          { title: '篩選條件', body: '把「乙系統能跑的開源文字編輯器」存成檢視，符合的新程式會出現在首頁的分頁，也能收摘要。' },
          { title: 'Realm', body: '社群的公告與決定，例如新增的精選。' },
        ],
      },
      changelog: {
        label: '更新說明',
        headline: '更新說明，跟著發行走。',
        lead: '更新說明記在每一次發行底下。從 3.2 跳到 4.1 測試版時，中間每一版改了什麼，可以依序讀完。',
        more: '首頁的「繼續」一欄，會把相容的套件更新和你沒讀完的下一章放在一起。套件更新與退回舊版都鎖定到確切的檔案，退回時拿到的就是當初那一份。',
        caption: '範例編輯器的更新說明，由新到舊（示意）',
        start: '從這裡開始讀',
      },
      statement: {
        text: '你的腳本與 AI 代理，',
        sub: '讀的是同一份更新事件；中斷之後，從上次的位置接著讀。',
      },
      closing: '想收什麼、收多少，由你決定。',
    },

    publishing: {
      hero: {
        headline: '把你的發行，寫成查得到的紀錄。',
        lede: '開發者在 REZICS 維護自己的程式：每次發行的版本號、平台、檔案與更新說明，授權條款，以及取得的地方。追蹤你的人、篩選的人與 AI 代理，讀的都是這一份。',
      },
      record: {
        label: '一筆發行',
        headline: '一筆發行包含的欄位。',
        lead: '必填欄位沒填齊，發行就送不出去；送出之後，這一筆就封存下來。',
        caption: '範例編輯器 4.0 的發行紀錄（示意）',
        fields: [
          { title: '版本號', body: '4.0' },
          { title: '發行管道', body: '穩定版' },
          { title: '日期', body: '2026-08-25' },
          { title: '平台', body: '甲系統・64 位元、乙系統・64 位元、丙系統・手機' },
          { title: '檔案大小', body: '48.2 MB' },
          { title: '雜湊值（節錄）', body: 'sha256 9f2c41d7e41a' },
          { title: '授權', body: '某開放原始碼條款 2.0 版' },
          { title: '取得方式', body: '開發者網站（外部連結）' },
          { title: '更新說明', body: '新增工作區，並移除舊的外掛格式。' },
        ],
      },
      steps: {
        label: '發布的路徑',
        headline: '一次發行，五個步驟。',
        steps: [
          { title: '確認專案是你的', body: '證明專案的命名空間屬於你，就能維護它的頁面。' },
          { title: '填寫發行', body: '版本號、發行管道、日期與每個平台的檔案。' },
          { title: '宣告授權', body: '選擇授權條款與它的版本。宣告會記下是誰、在什麼時候、對哪個範圍宣告。' },
          {
            title: '寫明取得方式',
            body: '檔案由誰提供、在哪裡下載，或要到哪個外部頁面安裝，都寫清楚。REZICS 只是連出去時，就不說成由它安裝。',
          },
          { title: '發布', body: '發行成為封存的紀錄，追蹤你的人依各自的通知程度收到消息。' },
        ],
        note: '這些步驟都能透過 API 與 MCP 完成，你的發布流程可以自動送出每一次發行。',
      },
      licence: {
        label: '授權',
        headline: '授權，寫到條款的版本。',
        lead: '一筆授權宣告記下確切的條款與版本、宣告者、時間、適用範圍與出處。從外部來源匯入的授權文字會標明來源，不會被當成你本人的宣告。',
        points: [
          { title: '不是認證', body: '宣告本身不是法律上的認證，也不會改變任何人的編輯權限。' },
          { title: '不知道就寫不知道', body: '不知道當初是誰授權、在哪一年，就照實寫不知道。' },
          { title: '可以篩選', body: '授權可以當成篩選條件，找出條款符合需要的程式。' },
        ],
      },
      lock: {
        label: '依賴',
        headline: '依賴關係，照各生態系自己的規則。',
        lead: 'REZICS 解析套件的依賴關係時，保留每個生態系原本的身分、版本順序與依賴意義，再把結果鎖定到確切的檔案。',
        points: [
          { title: '硬性與建議', body: '硬性的依賴與衝突，和建議性的搭配與提醒，分開記錄。' },
          { title: '撤下的版本', body: '新的解析不會選已撤下的版本；既有的鎖定照樣能原樣重現。' },
          { title: '分開回報', body: '來源查不到、條款不支援或超出預算，和真正無解分開回報。' },
          { title: '查不到不等於沒有', body: '查不到的依賴資料，不會被當成沒有依賴。' },
        ],
      },
      statement: {
        text: '安裝，不等於允許執行；',
        sub: '套件裡的腳本，要你明確同意才會執行。',
        note: 'REZICS 的安裝流程只接受驗證過的檔案，並放在隔離的暫存區。',
      },
      maintenance: {
        label: '發布之後',
        headline: '發布之後的維護。',
        rows: [
          { title: '截圖與聲明', body: '截圖、隱私與無障礙聲明，都標明由誰提供。' },
          { title: '撤回說法', body: '某個平台的說法過時了，可以撤回那一筆，不會刪掉程式、它的發行或討論。' },
          { title: '上架', body: '有販售時，價格、地區與有效期限列成一張表，價格的變動也留下紀錄。' },
          { title: '製作人員', body: '維護者與貢獻者各列角色，人換了專案，帶著的仍是同一個身分。' },
        ],
      },
      closing: '發布一次，讀的人都看到同一份。',
    },

    connections: {
      hero: {
        headline: '依賴它、延伸它的，都連回同一個程式。',
        lede: '遊戲模組、MCP 伺服器、技能與 API 在 REZICS 各有自己的身分，再用有方向的關聯，連到它們需要的程式。站在任何一端，都看得到另一端。',
      },
      relations: {
        label: '關聯的名字',
        headline: '每一條關聯，都有名字和方向。',
        lead: '關聯的兩個方向各有自己的說法，在每一種語言裡都寫得通。',
        rows: [
          { title: '需要／被需要', body: '必要的依賴。少了它，就無法執行。' },
          { title: '建議搭配／被建議搭配', body: '裝了更好用，沒有也能執行。' },
          { title: '衝突', body: '兩者同時安裝會出問題，兩端看到的是同一個說法。' },
          { title: '分支自／分支為', body: '另一群人接手後，獨立維護的專案。' },
          { title: '可以替代／可被替代', body: '能做同一件事的另一個程式，附上理由。' },
        ],
      },
      kinds: {
        label: '其他種類',
        headline: '和其他種類的連結。',
        rows: [
          {
            kind: 'games',
            line: '模組與載入器',
            body: '遊戲模組依賴遊戲本身，常常也依賴一個載入器。必要與建議分開記錄；載入器本身也是軟體，有自己的發行與相容性。',
          },
          {
            kind: 'mcp',
            line: '讓代理操作它',
            body: '讓 AI 代理操作這個程式的 MCP 伺服器，另有一個條目。專案、套件發行、部署的端點與實際觀察到的能力，各是不同的紀錄。',
          },
          { kind: 'skills', line: '把它列為依賴', body: '技能可以宣告它需要哪些程式；組在一起之前，先比對能力與環境。' },
          { kind: 'apis', line: '提供或呼叫', body: '程式提供或呼叫的公開 API，在 API Hub 有自己的版本與證據，再連回這個程式。' },
        ],
      },
      people: {
        label: '製作人員',
        headline: '寫程式的人，也只有一個身分。',
        lead: '同一個人可以維護一套軟體、寫一本小說、評論一款遊戲，在 REZICS 都是同一個身分。製作人員欄位把這些連在一起；追蹤他，就跟得上他在每一個種類的新作品。',
      },
      statement: {
        text: '名字相同不算數，關聯要有出處；',
        sub: 'AI 代理只提出，不會悄悄認定兩者相同。',
      },
      closing: '從任何一端，都找得到另一端。',
    },
  },
} satisfies MiniSite<SoftwareStrings>;

export default site;
