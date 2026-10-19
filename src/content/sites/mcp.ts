// MCP Hub (`mcp`): every visible string of /mcp/ and its five inner pages. Design record and
// sources: src/sites/mcp/SITE.md and src/sites/mcp/facts.md. Illustrative data (the notes
// server, versions, dates, client categories, tasks, tools, views, lists) is labelled 示意 on
// the page.
import type { Item, MiniSite } from '../schema';

/** The site's paper still-life series (public/images/sites/mcp/). */
export type McpPicture = 'hero' | 'records' | 'identity' | 'versions' | 'zone';
/** A combination's state on the evidence page. */
export type McpState = 'ok' | 'fail' | 'disputed' | 'none';
/** A site page linked from the landing's tiles. */
export type McpPage = 'directory' | 'evidence' | 'versions' | 'community' | 'maintainers';

/** A section's eyebrow, heading and lead. */
type Head = { label: string; headline: string; body: string };
/** A statement: the first half in ink, the continuation muted. */
type Statement = { text: string; sub: string; note?: string };

export type McpStrings = {
  next: { page: string; site: string };
  /** Alt text of each picture. */
  pictures: Record<McpPicture, string>;
  /** A line for each page: its tile on the landing and its lead-in on the previous page. */
  pageLines: Record<McpPage, string>;
  landing: {
    hero: { label: string; headline: string; lede: string };
    record: Head & { fields: Item[]; link: string };
    statement: Statement;
    pages: { label: string; headline: string };
    neighbours: Head & {
      tiles: { kind: 'software' | 'apis' | 'skills'; line: string }[];
      developers: { name: string; line: string; href: string };
    };
    closing: { title: string; body: string };
  };
  directory: {
    hero: { headline: string; lede: string };
    records: Head & { items: Item[] };
    filters: Head & { rows: Item[]; caption: string; note: string };
    traversal: { label: string; headline: string; facts: Item[] };
    parts: Head & { notes: Record<string, string> };
    statement: Statement;
    next: string;
    closing: string;
  };
  evidence: {
    hero: { headline: string; lede: string };
    specimen: { label: string; headline: string; fields: { label: string; value: string; note: string }[]; caption: string };
    compare: { label: string; headline: string; says: { heading: string; items: string[] }; not: { heading: string; items: string[] } };
    states: Head & { names: Record<McpState, string>; items: Record<McpState, string> };
    statement: Statement;
    layers: { label: string; headline: string; chapters: Item[] };
    client: { label: string; headline: string; body: string[] };
    next: string;
    closing: string;
  };
  versions: {
    hero: { headline: string; lede: string };
    start: Head & { note: string };
    diff: Head & {
      columns: [string, string, string];
      rows: { tool: string; before: string; after: string }[];
      consequence: string;
      caption: string;
    };
    ledger: Head & { rows: Item[] };
    follow: Head & { levels: Item[]; channels: string };
    statement: Statement;
    next: string;
    closing: string;
  };
  community: {
    hero: { headline: string; lede: string };
    score: { label: string; headline: string; items: Item[]; note: string };
    discussion: Head & { agents: string };
    list: Head & {
      title: string;
      items: { kind: 'mcp' | 'skills' | 'apis' | 'software'; name: string; note: string }[];
      caption: string;
    };
    zone: Head & { routes: string };
    next: string;
    closing: string;
  };
  maintainers: {
    hero: { headline: string; lede: string };
    steps: { label: string; headline: string; items: Item[] };
    rules: { label: string; headline: string; can: { heading: string; items: string[] }; cannot: { heading: string; items: string[] } };
    licence: Head & { rows: Item[] };
    agent: Statement & { link: string; href: string };
    next: { headline: string; lines: Record<'skills' | 'apis' | 'software', string> };
    closing: string;
  };
};

const strings: McpStrings = {
  next: { page: '下一頁', site: '下一個網站' },

  pictures: {
    hero: '幾張赭黃色的紙，用穿過圓孔的紙繩彼此相連，一張淡藍、一張淺綠的紙也繫在其中。',
    records: '一張赭黃色的紙，邊上的圓孔用紙繩繫著幾張空白小吊牌，有一個孔還空著。',
    identity: '一張紙分成四塊並稍稍拉開：兩塊赭黃、一塊深青、一塊淡藍。',
    versions: '五張一樣大的紙排成一列，顏色由深到淺，最後一張是白紙。',
    zone: '一張赭黃色的紙折成一座小小的立體屏風，旁邊放著幾片小紙。',
  },

  pageLines: {
    directory: '一個伺服器，一個身分',
    evidence: '一筆紀錄說了什麼，沒說什麼',
    versions: '每一版各自一筆',
    community: '評分、討論、清單與社群目錄',
    maintainers: '登錄、認領、宣告與回應',
  },

  landing: {
    hero: {
      label: 'MCP 伺服器索引',
      headline: '哪個伺服器能用，看有日期的紀錄。',
      lede: 'MCP Hub 給每個 MCP 伺服器一個身分，每一版各自記錄：哪一天、用哪個用戶端的哪一版、以哪種語言，做成了什麼。',
    },
    record: {
      label: '一筆紀錄',
      headline: '說能用之前，先說是哪一個組合。',
      body: '伺服器的哪一版、哪個用戶端、什麼任務、用哪種語言，少一樣都說不準。每筆紀錄把這些寫齊，再加上結果與日期；換掉其中一樣，就要另外試過才算數。',
      fields: [
        { title: '伺服器版本', body: '寫到版本號為止，新的一版另起紀錄。' },
        { title: '用戶端', body: '哪一種用戶端，連它的版本一起記。' },
        { title: '任務', body: '請伺服器做的那件事。' },
        { title: '語言', body: '同一件事換一種語言下達，結果可能不同。' },
        { title: '結果與日期', body: '做成或沒做成，以及是哪一天試的。' },
      ],
      link: '一筆紀錄怎麼寫',
    },
    statement: {
      text: '一筆紀錄只證明一件事：這一天，這個組合做成了。',
      sub: '它不證明伺服器安全，不給你任何授權，也不是 REZICS 的背書。',
    },
    pages: {
      label: '這個網站',
      headline: '從找到伺服器到維護它，一頁講一件事。',
    },
    neighbours: {
      label: '相連的索引',
      headline: '伺服器不是孤立的一筆。',
      body: '做它的人、它包裝的 API、它所屬的專案，都在同一個索引裡，從哪一邊都找得到。',
      tiles: [
        { kind: 'software', line: '專案、套件與用戶端都是軟體條目' },
        { kind: 'apis', line: '它包裝的 API，兩邊互相連結' },
        { kind: 'skills', line: '同一位維護者寫的技能' },
      ],
      developers: { name: '開發者', line: 'REZICS 自己的 MCP 伺服器', href: '/developers/mcp-server/' },
    },
    closing: {
      title: '先看紀錄，再決定用哪一個。',
      body: '伺服器、技能與 API，和你在 REZICS 追蹤的書與遊戲，用的是同一個帳號。',
    },
  },

  directory: {
    hero: {
      headline: '一個伺服器，一個身分。',
      lede: '同一個 MCP 伺服器可能出現在好幾個來源。經過審核合併以後，它在 REZICS 只有一筆，名稱、維護者、版本、紀錄、評分與討論都接在這一筆上。',
    },
    records: {
      label: '四樣東西',
      headline: '一個伺服器，其實是四樣東西。',
      body: '專案、套件、部署端點與工具清單，各自在不同的時候改變，所以 REZICS 分開記。',
      items: [
        { title: '專案', body: '名稱、說明與維護者。換了版本、換了端點，專案還是同一個；從別人的專案分出去的，是另一個專案，用關聯連回去。' },
        { title: '套件', body: '某一版的套件，屬於哪個生態系、原生的名稱與版本號。版本先後照該生態系自己的規則。' },
        { title: '部署端點', body: '伺服器在網路上的位址。連得上，不證明它屬於誰、和你的用戶端相容，或你有權呼叫它。' },
        { title: '工具清單', body: '某個時間點，伺服器列出了哪些工具、各要什麼參數。清單一變，就多一筆觀察。' },
      ],
    },
    filters: {
      label: '篩選',
      headline: '篩選條件，出自同一筆紀錄。',
      body: '找「在命令列工具裡、用繁體中文、成功匯出檔案」的伺服器時，三個條件必須來自同一筆紀錄，不會由三筆不相干的紀錄拼成。',
      rows: [
        { title: '在程式編輯器裡用日文整理待辦成功的伺服器', body: '用戶端、語言、任務與結果，四個條件落在同一筆紀錄上。' },
        { title: '最新一版在近 90 天內有成功紀錄的伺服器', body: '版本、日期與結果，綁在同一筆紀錄上。' },
        { title: '同一位維護者維護的所有伺服器', body: '照製作人員找。' },
        { title: '包裝了某個 API 的伺服器', body: '照關聯找，從 API 那一邊也看得到。' },
      ],
      caption: '篩選可以存成有名字的檢視，下次直接打開，也可以追蹤它。',
      note: '示意檢視。',
    },
    traversal: {
      label: '列表',
      headline: '列表翻得到底，也說明它停在哪裡。',
      facts: [
        { title: '一路到最後一筆', body: '結果不會只給前幾頁。要翻多少就翻多少，直到最後一筆。' },
        { title: '筆數說實話', body: '筆數標明是精確還是估計，資料更新到什麼時候也寫出來。' },
        { title: '做不到就直說', body: '不支援的條件組合會明確告訴你，不會回傳一個看起來像「沒有結果」的空白。' },
      ],
    },
    parts: {
      label: '部件',
      headline: '八個部件，和每一種東西共用。',
      body: 'MCP Hub 不是另外寫的一套程式。它的條目用的是書庫、遊戲與軟體也在用的部件，只是排法不同。',
      notes: {
        identity: '各個來源裡的同一個伺服器，都指向這一個身分。',
        editions: '每一版一筆，各有自己的套件、工具清單與紀錄。',
        specs: '相容紀錄：日期、用戶端與版本、任務、語言、結果。',
        credits: '維護者是人或組織，連到他們做的其他專案。',
        ratings: '分數落在某一版上，先寫明問的是什麼。',
        discussion: '討論串掛在伺服器上，也能掛在某一版上。',
        lists: '伺服器、技能與 API 排進同一份清單，各自加註。',
        follow: '追蹤伺服器、維護者或一個檢視，有新版本時通知你。',
      },
    },
    statement: {
      text: '名字相同，不代表是同一個伺服器。',
      sub: '合併要有證據，也要經過審核。',
      note: '合併以後，原本的身分與歷史都還在，隨時查得到。',
    },
    next: '一筆紀錄寫了什麼，又刻意不寫什麼。',
    closing: '找伺服器之前，先確定找的是哪一個。',
  },

  evidence: {
    hero: {
      headline: '一筆紀錄，寫的是哪一天、哪個組合。',
      lede: '一個人或一個 AI 代理，用某個用戶端的某一版，以某種語言，請伺服器的某一版做一件事。結果和日期一起寫下來，就是一筆紀錄。MCP Hub 的證據，由一筆筆這樣的紀錄組成。',
    },
    specimen: {
      label: '示意紀錄',
      headline: '把一筆紀錄攤開來看。',
      fields: [
        { label: '伺服器', value: '筆記伺服器 1.4.0', note: '精確到版本號。' },
        { label: '用戶端', value: '程式編輯器 3.2', note: '用戶端也記版本。' },
        { label: '任務', value: '把會議紀錄整理成待辦清單', note: '做的是哪件事，用一句話寫明。' },
        { label: '語言', value: '繁體中文', note: '任務用哪種語言下達。' },
        { label: '結果', value: '成功', note: '做成或沒做成，都記。' },
        { label: '日期', value: '2026/10/12', note: '這筆紀錄只代表這一天。' },
        { label: '提交者', value: '一位使用者', note: '人或 AI 代理都能提交，代理會標明由誰操作。' },
        { label: '審核', value: '已審核', note: '經人審核過，紀錄才會公開。' },
      ],
      caption: '示意紀錄。欄位是真的，內容是範例。',
    },
    compare: {
      label: '範圍',
      headline: '它說明了什麼，沒說明什麼。',
      says: {
        heading: '說明了',
        items: [
          '在這一天，這個組合做成了，或沒做成這件事。',
          '用的是伺服器和用戶端的哪一版。',
          '任務用哪種語言進行。',
          '是誰提交的，以及它已經過人工審核。',
        ],
      },
      not: {
        heading: '沒有說明',
        items: [
          '伺服器是否安全。REZICS 不做安全認證。',
          '你能怎麼使用它的程式碼。那要看維護者的授權宣告與條款原文。',
          '換成其他版本、其他用戶端或其他語言會怎樣。',
          'REZICS 推薦或擔保這個伺服器。',
        ],
      },
    },
    states: {
      label: '狀態',
      headline: '每個組合，只會是四種狀態之一。',
      body: '有人試過，就有結果；結果遭到挑戰，就重新審核。狀態永遠寫成文字，不只靠顏色分辨。',
      names: { ok: '成功', fail: '未通過', disputed: '有爭議', none: '沒有紀錄' },
      items: {
        ok: '這個組合，在這一天做成了。',
        fail: '試過，沒有做成，一樣留下紀錄。',
        disputed: '已公開的紀錄遭到挑戰，正在重新審核。',
        none: '還沒有人試過，或試過的人還沒記下來。',
      },
    },
    statement: {
      text: '沒有紀錄，不等於失敗。',
      sub: '還沒有人試過的組合就讓它空著，不會被算成做不到。',
    },
    layers: {
      label: '宣告與紀錄',
      headline: '維護者說的、伺服器列出的、使用者試過的，分開放。',
      chapters: [
        { title: '宣告', body: '維護者寫下支援哪些用戶端與語言。這是宣告，就以宣告的樣子顯示，不會被當成紀錄。' },
        { title: '觀察', body: '某個時間點，伺服器列出的工具與參數被記了下來。列得出工具，不代表任務做得成。' },
        { title: '紀錄', body: '有人用一個組合實際做了一件事，寫下結果與日期，經人審核後公開。到了這一步，才算一筆紀錄。' },
        { title: '審核與爭議', body: '審核過的紀錄仍然可以被挑戰。已審核與有爭議可以同時成立，先前的判定留在歷史裡。' },
      ],
    },
    client: {
      label: '從用戶端找',
      headline: '從你的用戶端看起。',
      body: [
        '先選你用的用戶端與版本，再選任務語言，目錄就只留下這個組合有紀錄的伺服器，結果與日期寫在旁邊。',
        '把它存成檢視並追蹤，符合條件的新紀錄出現時，你就看得到。',
      ],
    },
    next: '每一版有自己的一筆，工具清單的增減看得出來。',
    closing: '紀錄寫得越清楚，你越能自己判斷。',
  },

  versions: {
    hero: {
      headline: '每一版，各有自己的一筆。',
      lede: '版本照它所屬生態系的規則排序。每一版有自己的套件、工具清單、變更紀錄、相容紀錄與評分，不向上一版借。',
    },
    start: {
      label: '新版本',
      headline: '新的一版，從沒有紀錄開始。',
      body: '2.0.0 發布那天，它還沒有任何相容紀錄。1.4.1 的成功不會搬過來，要等有人用 2.0.0 試過，才有它自己的紀錄。舊紀錄都標著日期與版本，還算不算數，一看就知道。',
      note: '示意版本號。',
    },
    diff: {
      label: '工具清單',
      headline: '工具清單變了，一比就知道。',
      body: '每次觀察都記下伺服器當時列出的工具與參數格式。拿兩次觀察相比，新增、移除與參數改變的工具會各自標出來。',
      columns: ['工具', '1.4.0 的觀察', '2.0.0 的觀察'],
      rows: [
        { tool: '搜尋筆記', before: '有', after: '參數改變' },
        { tool: '建立筆記', before: '有', after: '不變' },
        { tool: '刪除筆記', before: '有', after: '移除' },
        { tool: '列出標籤', before: '有', after: '不變' },
        { tool: '匯出筆記', before: '沒有', after: '新增' },
      ],
      consequence: '「搜尋筆記」還在，參數格式卻改了。用到它的設定，值得重新試一次。',
      caption: '示意：兩次觀察的工具清單對照，並非真實的觀察。',
    },
    ledger: {
      label: '套件',
      headline: '同名同版號，不代表同一份檔案。',
      body: '套件照它的生態系，記下原生的名稱與版本號。名稱或版本號相同，證明不了內容相同，也證明不了權利相同，所以每一版的檔案都用雜湊值核對。',
      rows: [
        { title: '生態系', body: '套件來自哪一個套件生態系。' },
        { title: '原生名稱', body: '照原樣保存，不改寫成別的格式。' },
        { title: '版本號', body: '先後順序照該生態系的規則。' },
        { title: '檔案雜湊', body: '核對的是這一版實際的檔案。' },
        { title: '授權宣告', body: '誰在什麼時候宣告了哪個條款。' },
        { title: '來源', body: '這筆資料從哪裡來、什麼時候取得。' },
      ],
    },
    follow: {
      label: '追蹤',
      headline: '追蹤一個伺服器，自己決定聽到多少。',
      body: '每個追蹤都有自己的通知等級，隨時能改。追蹤的伺服器有變動，也會出現在你的追蹤動態裡。',
      levels: [
        { title: '全部', body: '新版本、公告，加上每一則新貼文。' },
        { title: '重點', body: '新版本、公告與決定。' },
        { title: '關閉', body: '只有別人回覆你、提到你的時候才通知。' },
        { title: '關注', body: '只盯著某一版，或某一串討論。' },
      ],
      channels: '通知會進收件匣，也可以開啟推播或電子郵件摘要；電子郵件一鍵就能退訂。',
    },
    statement: {
      text: '評分也釘在版本上。',
      sub: '給 1.4 版的分數，不會算進 2.0 版。',
      note: '跨版本的數字是另外計算的指標，會寫明怎麼算、涵蓋了哪幾版。',
    },
    next: '分數、討論與清單，都說清楚對象是誰。',
    closing: '換了版本，就從紀錄重新看起。',
  },

  community: {
    hero: {
      headline: '先說評的是哪一版，再給分數。',
      lede: '每個分數都屬於一個問題、一種量表與一個版本。分數旁邊附上筆數、分布與評分的人群，你看得出它代表誰的意見。',
    },
    score: {
      label: '評分',
      headline: '一個分數，帶著五樣說明。',
      items: [
        { title: '問題', body: '例如「說明文件清不清楚」或「長時間使用穩不穩」。問題不同，分數就不混算。' },
        { title: '量表', body: '幾分制、每一分代表什麼，寫在分數旁邊。' },
        { title: '版本', body: '評的是哪一版，分數就留在哪一版。' },
        { title: '筆數與分布', body: '評分還太少時，只顯示筆數與分布，不算平均。' },
        { title: '人群', body: '全站的評分和某個 Realm 的評分，分開標示。' },
      ],
      note: '示意問題。',
    },
    discussion: {
      label: '討論',
      headline: '討論接在伺服器上，也接在某一版上。',
      body: '某一版出了狀況，就在那一版底下開討論；整體的使用心得，開在伺服器上。維護者用自己的身分回覆，讀者看得出是誰在說話。',
      agents: 'AI 代理參與討論時，一定標明自己是代理，以及由誰操作。',
    },
    list: {
      label: '清單',
      headline: '一份清單，放得下伺服器、技能與 API。',
      body: '清單不分種類。把一組伺服器、用到它們的技能和背後的 API 排在一起，每一項寫上註記，排好先後，也能匯出帶走。',
      title: '整理會議紀錄用的一組工具',
      items: [
        { kind: 'mcp', name: '筆記伺服器', note: '2.0.0 起可以匯出筆記。' },
        { kind: 'skills', name: '會議紀錄整理技能', note: '需要上面這個伺服器。' },
        { kind: 'apis', name: '行事曆 API', note: '把待辦排進行事曆。' },
        { kind: 'software', name: '命令列工具', note: '這一組在這裡試過。' },
      ],
      caption: '示意清單。',
    },
    zone: {
      label: 'Zone',
      headline: '社群可以有自己的伺服器目錄。',
      body: 'Realm 可以用 Zone 架出完整的網站：首頁、導覽、篩選好的目錄與說明頁。網站上的條目仍是同一批身分，在那裡做的修正，每個看得到這筆條目的地方都會跟著更新。',
      routes: '示意網站地圖：首頁、目錄、新手指南、紀錄、討論。',
    },
    next: '登錄伺服器、認領身分、寫下宣告。',
    closing: '每一個分數與討論，都先寫明對象。',
  },

  maintainers: {
    hero: {
      headline: '你維護的伺服器，由你來說明。',
      lede: '登錄伺服器、認領匯入的身分、寫下授權與支援範圍。你寫的內容標示為宣告，旁邊是使用者留下的紀錄，讀者兩樣都看得到。',
    },
    steps: {
      label: '步驟',
      headline: '從登錄到回應，一共四步。',
      items: [
        { title: '登錄', body: '建立條目，寫上名稱、說明、專案與套件。送出前，系統會先比對有沒有重複的條目。' },
        { title: '認領', body: '條目若是從公開資料匯入的，掛在上面的人或組織身分，維護者可以認領。' },
        { title: '宣告', body: '寫下授權條款，以及支援的用戶端與語言。每項宣告都記下是誰、何時、依據哪一版的條款。' },
        { title: '回應', body: '用維護者的身分回覆討論。遇到有爭議的紀錄，就提出你自己的紀錄。' },
      ],
    },
    rules: {
      label: '界線',
      headline: '你能改的，和你改不了的。',
      can: {
        heading: '你可以',
        items: ['修改條目的說明、版本資訊與宣告。', '回覆討論，對紀錄提出反證。', '讓你的 AI 代理替每個新版本提交紀錄。'],
      },
      cannot: {
        heading: '你不能',
        items: ['讓別人的紀錄消失。不同意，就提出反證，交給審核。', '用贊助或訂閱換來不同的判定。', '替自己灌評分，或用好幾個帳號製造聲量。'],
      },
    },
    licence: {
      label: '授權宣告',
      headline: '授權是你的宣告，不是 REZICS 的許可。',
      body: '宣告記下條款與版本、宣告者、時間、範圍與依據。它不代表 REZICS 授權任何人使用，也不是法律上的確認。伺服器被收進目錄，不等於任何人都能散布它的程式碼。',
      rows: [
        { title: '條款與版本', body: '宣告的是哪個條款、哪一版。' },
        { title: '宣告者', body: '以哪個人或組織的身分宣告。' },
        { title: '時間', body: '什麼時候宣告的。不知道的，就記成不知道。' },
        { title: '範圍', body: '涵蓋哪幾版、哪些檔案。' },
        { title: '依據', body: '憑什麼這樣宣告。' },
      ],
    },
    agent: {
      text: '你的 AI 代理可以在每次發版後跑一輪任務，',
      sub: '把結果交上來。',
      note: '這些紀錄會標明來自你的代理，和其他人的紀錄走同一套審核。',
      link: '看提交方式',
      href: '/developers/',
    },
    next: {
      headline: 'AI 代理用的技能，同樣有版本、紀錄與評分。',
      lines: {
        skills: '技能的檔案、依賴與相容紀錄',
        apis: '伺服器包裝的 API',
        software: '專案、套件與用戶端',
      },
    },
    closing: '你的宣告與大家的紀錄，並排呈現。',
  },
};

export default {
  id: 'mcp',
  base: '/mcp/',
  name: 'MCP Hub',
  theme: { kind: 'mcp' },
  next: 'skills',
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: 'MCP Hub：MCP 伺服器索引',
        description:
          '在 REZICS 的 MCP Hub 找 MCP 伺服器。每個伺服器一個身分，每一版分開記錄；相容紀錄寫明日期、用戶端與版本、任務和語言，評分、討論與清單都在旁邊。',
      },
    },
    {
      slug: 'directory',
      label: '目錄',
      meta: {
        title: 'MCP Hub 目錄：一個伺服器一個身分',
        description:
          'MCP Hub 目錄裡，每個 MCP 伺服器只有一個身分。專案、套件版本、部署端點與工具清單分開記錄，篩選條件綁在同一筆紀錄上，結果一路翻得到最後一筆。',
      },
    },
    {
      slug: 'evidence',
      label: '證據',
      meta: {
        title: 'MCP Hub 證據：日期與條件',
        description:
          'MCP Hub 的相容紀錄寫明日期、伺服器版本、用戶端與版本、任務、語言與結果。它說明某天某個組合做成了某件事，不證明安全，也不是授權或 REZICS 的背書。',
      },
    },
    {
      slug: 'versions',
      label: '版本',
      meta: {
        title: 'MCP Hub 版本：每一版各自一筆',
        description:
          'MCP 伺服器的每一版各有一筆：套件的生態系、原生名稱、版本號與檔案雜湊，當時觀察到的工具清單，以及只屬於這一版的紀錄與評分。追蹤伺服器，新版本發布時就通知你。',
      },
    },
    {
      slug: 'community',
      label: '社群',
      meta: {
        title: 'MCP Hub 社群：評分、討論與清單',
        description:
          '替 MCP 伺服器的某一版評分並寫明問題，討論串掛在伺服器或版本上，把伺服器、技能與 API 排進同一份清單。社群也能用 Zone 架出自己的伺服器目錄。',
      },
    },
    {
      slug: 'maintainers',
      label: '維護者',
      meta: {
        title: 'MCP Hub 維護者：登錄與認領',
        description:
          '維護者可以在 MCP Hub 登錄伺服器、認領匯入的身分、宣告授權與支援範圍，並用自己的身分回應討論。宣告和使用者的紀錄分開顯示，付費也改變不了判定。',
      },
    },
  ],
  strings,
} satisfies MiniSite<McpStrings>;
