// 書庫 (books): every visible string of the books site. Design record and sources:
// src/sites/books/SITE.md and src/sites/books/facts.md. The eight part notes and the kind's
// name come from src/content/kinds.ts and are imported by the pages, never copied here.
// Shapes follow the v3 parts (V3-SPEC): hero, sections (eyebrow, heading, lead), photo rows,
// facts lists (title left, text right), statements (a line and its muted continuation), tile
// masonry and the closing.
import type { MiniSite } from '../schema';

export type TitledText = {
  title: string;
  body: string;
};

/** A section: eyebrow label, serif heading, lead text. */
type Head = { label: string; headline: string; lead?: string };

/** A large serif statement: `text`, then its muted continuation `sub`; `note` sits under it. */
export type StatementText = { text: string; sub: string; note?: string };

/** A paper still-life picture: its alt text. Files live in public/images/sites/books/. */
type Picture = { alt: string };

export type BooksStrings = {
  /** Shared labels across the site's pages; `closing` ends every page. */
  common: { contents: string; nextPage: string; nextSite: string; closing: { title: string; body: string } };
  landing: {
    hero: { headline: string; lede: string } & Picture;
    /** Photo row: the editions picture beside one fictional series' editions (示意). */
    editions: Head & { lead: string; caption: string; link: string } & Picture;
    /** Facts list: how the bookmark counts across editions and languages (示意). */
    progress: Head & { steps: TitledText[] };
    reading: StatementText;
    /** Photo row: the folded strip beside writing and publishing. */
    writing: Head & { body: string[]; link: string } & Picture;
    /** Tile masonry of the site's own pages: a short line per tile. */
    pages: Head & { rows: { slug: string; line: string }[] };
    parts: Head;
    /** Tile masonry of neighbouring kinds. */
    connections: Head & { tiles: { kind: 'anime' | 'manga' | 'visual-novels' | 'games'; line: string }[] };
  };
  work: {
    hero: { headline: string; lede: string };
    /** The example's title page (text only, per EXAMPLE-WORK.md). */
    example: { title: string; original: string; author: string; caption: string };
    sections: Head & { rows: (TitledText & { example: string })[] };
    action: Head & { rows: TitledText[]; caption: string };
    ratings: Head & { rows: TitledText[] };
    edit: Head & { rows: TitledText[] };
    languages: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  wiki: {
    /** The page head beside the cut-out picture. */
    hero: { headline: string; lede: string } & Picture;
    flow: Head & { steps: TitledText[] };
    position: Head & {
      control: string;
      positions: { label: string; chapter: number }[];
      groups: { people: string; events: string };
      source: string;
      aliases: string;
      entries: { group: 'people' | 'events'; name: string; aliases?: string; chapter: number; note: string }[];
      /** What a folded entry says: the chapter it appears in (`{n}`). */
      later: string;
      status: string;
      statusAll: string;
      rail: string;
      rules: string[];
    };
    text: StatementText & { facts: TitledText[] };
    /** Tile masonry of a wiki's own pages (示意, not links). */
    zone: Head & { tiles: { name: string; line?: string }[]; caption: string };
    review: Head & { states: TitledText[]; rules: string[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  editions: {
    /** The page head beside the stack picture. */
    hero: { headline: string; lede: string } & Picture;
    releases: Head & { kinds: TitledText[] };
    translations: Head & { rows: TitledText[]; stateLabel: string; states: string[]; notes: string[] };
    sameWork: Head & { rows: TitledText[]; caption: string };
    orders: Head & {
      rows: [string, string];
      tiles: string[];
      /** Reading order as indexes into `tiles`. */
      reading: number[];
      notes: TitledText[];
    };
    isbn: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  library: {
    /** The page head beside the three strips. */
    hero: { headline: string; lede: string } & Picture;
    /** Three reads of one book as three strips, the photograph seen flat (`share`: its length). */
    reads: Head & { rows: (TitledText & { share: number })[]; caption: string };
    move: Head & { steps: TitledText[]; retention: string };
    continue: StatementText;
    shelf: Head & { rows: TitledText[] };
    privacy: Head & { rows: TitledText[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  serial: {
    /** The page head beside the folded strip. */
    hero: { headline: string; lede: string } & Picture;
    safe: Head & { rows: TitledText[] };
    mirror: Head & { rows: TitledText[]; notes: string[] };
    ai: Head & { rows: TitledText[]; notes: string[] };
    world: Head & { items: string[] };
    backup: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  publish: {
    hero: { headline: string; lede: string };
    buy: Head & { steps: TitledText[]; caption: string };
    statement: Head & { rows: TitledText[]; note: string };
    distributed: Head & { rows: TitledText[]; policy: TitledText[] };
    community: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
};

const strings: BooksStrings = {
  common: {
    contents: '本頁內容',
    nextPage: '下一頁',
    nextSite: '相關種類',
    closing: {
      title: '下一本讀什麼，打開書庫就知道。',
      body: '每一本書、每一個版本與每一次閱讀，都記在同一個帳號裡。',
    },
  },

  landing: {
    hero: {
      headline: '一部作品，所有版本，和你讀到的那一頁。',
      lede: '原文與譯本、單行本與合訂本各自分明，都連回同一部作品。下一本、Wiki 與討論，跟著你讀到的位置。',
      alt: '一排深綠色的紙依序展開，中間夾著一條淡綠色的紙條，像一張書籤。',
    },
    editions: {
      label: '版本',
      headline: '每一次出版，各記各的。',
      lead: '同一套輕小說，日文原版、繁中版、英文版與繁中合訂本各是一次出版，收錄的集數不同。有書號的、沒有書號的、只在網路上連載的，在書庫裡都是一部作品。',
      caption: '示意：一套虛構的十二集輕小說。',
      link: '看版本與系列',
      alt: '大小不同的綠色紙張疊在一起，左下角對齊，其中一張是淡藍色。',
    },
    progress: {
      label: '閱讀進度',
      headline: '書籤放在哪裡，下一本就從那裡算。',
      lead: '還是那套十二集的輕小說：繁中版出到第 6 集，日文版出到第 12 集，而你剛讀完繁中版第 6 集。',
      steps: [
        { title: '每一集是一部作品', body: '系列裡的每一集都是一部作品。不論用哪種語言出版，第 7 集都是同一部作品。' },
        { title: '合訂本只算一次', body: '繁中合訂本收錄第 1 到 3 集，是一次出版。讀完它，三集各算讀完一次，不會重複計算。' },
        { title: '下一本，用你讀的語言', body: '繁中版還沒有第 7 集。書庫告訴你，你已經追上繁中版目前出的部分，等第 7 集出版時再通知你。' },
        { title: '換語言讀，也算數', body: '先讀了日文版第 7、8 集再換回繁中，這兩集仍然算讀完。譯本是同一部作品的不同文本，進度不必重來。' },
        { title: '有這本書，不等於讀完', body: '架上有沒有這本書，和你讀完了沒，是分開的兩件事。' },
      ],
    },
    reading: {
      text: '讀到哪裡，Wiki 與討論就停在哪裡；',
      sub: '之後才出現的人物、事件與討論先收起來，想看全部也能一次打開。',
    },
    writing: {
      label: '寫作與出版',
      headline: '寫書的人，也在同一個書庫。',
      body: [
        '連載作者在這裡一章章寫作、排程與發布，讀者從上次讀到的段落接著讀。',
        '簽約創作者把已取得授權的無 DRM 電子書直接賣給讀者，商店頁就在作品的討論旁邊。',
      ],
      link: '看連載怎麼寫',
      alt: '一條深綠色的長紙摺成一頁一頁，後半段還平攤著，摺痕處放著一小張淡綠色的紙。',
    },
    pages: {
      label: '書庫的頁面',
      headline: '找書、讀書，也在這裡寫書。',
      rows: [
        { slug: 'work', line: '一部作品的一切，從這一頁出發' },
        { slug: 'wiki', line: '用你的 AI 代理，為書建 Wiki' },
        { slug: 'editions', line: '譯本、合訂本與系列，分得清楚' },
        { slug: 'library', line: '照實記下每一次閱讀' },
        { slug: 'serial', line: '一章章寫，一章章讀' },
        { slug: 'publish', line: '無 DRM 電子書，直接賣給讀者' },
      ],
    },
    parts: {
      label: '部件',
      headline: '八個部件，組成書庫。',
      lead: '同一套部件也組成動畫、漫畫與遊戲，書庫從中挑了這八個。',
    },
    connections: {
      label: '相關的種類',
      headline: '書裡的故事，也在別的種類裡。',
      lead: '從原著的頁面出發，一路找得到它的每一部改編。',
      tiles: [
        { kind: 'anime', line: '改編的動畫，用一條關係連回來' },
        { kind: 'manga', line: '漫畫化的版本，評分各自計算' },
        { kind: 'visual-novels', line: '和輕小說共用一份目錄與書庫' },
        { kind: 'games', line: '同一位作者的遊戲，同一個名字' },
      ],
    },
  },

  work: {
    hero: {
      headline: '關於一部作品的一切，都從這一頁出發。',
      lede: '作品頁是書庫的中心。事實、評分、你的版本與進度、系列與改編、Wiki 與討論，照閱讀時用得到的順序排好。',
    },
    example: {
      title: '《魔法禁書目錄》',
      original: 'とある魔術の禁書目録',
      author: '鎌池和馬',
      caption: '書名用你的語言顯示，原文書名安靜地放在一旁。下面以這部作品為例，從上往下走一遍。',
    },
    sections: {
      label: '八個區塊',
      headline: '從上到下，八個區塊。',
      lead: '這種作品用不到的區塊直接省略，其餘的位置與連結固定不變。',
      rows: [
        {
          title: '身分與下一步',
          body: '封面、書名、作者與評分，評分寫明量表、人數與範圍。旁邊是你選的版本、閱讀狀態與進度。',
          example: '讀到第 5 集，主要按鈕寫著「繼續讀」。',
        },
        {
          title: '簡介',
          body: '不劇透的簡介、基本資料、幾個標籤與內容提醒。展開之後，才看到完整的事實、出處與「提出更正」。',
          example: '鎌池和馬著、灰村清孝插畫的輕小說，正篇從 2004 年起出版。',
        },
        {
          title: '你的版本與取得方式',
          body: '先列你選的版本，再列幾個相符的版本，最後是可以分頁瀏覽的完整清單。',
          example: '日文原著，以及繁體中文與英文的譯本，各自署名譯者。',
        },
        {
          title: '分集與關聯',
          body: '還沒讀完的下一個部分排在最前，接著是依序的分集，然後是續集與改編。出版順序和推薦的閱讀順序分開列。',
          example: '正篇、《新約》與《創約》三個系列，用續作的關係相連。',
        },
        {
          title: '探索 Wiki',
          body: '主要人物、重要的製作人員，以及不超過你進度的時間線或章節導讀，再連到 Wiki 的各個頁面。',
          example: '讀到第 5 集，時間線就停在第 5 集。',
        },
        {
          title: '評分與評論',
          body: '分數分布與人數，連同問題、評分的人與評分的對象。可以依版本或評論語言篩選，寫評論不必先打分數。',
          example: '故事的評分，和某一個譯本的評分分開計算。',
        },
        {
          title: '討論與社群',
          body: '作品、分集與版本各有自己的討論串。看討論不需要先加入社群。',
          example: '想聊第 5 集，從那一集旁邊直接進去。',
        },
        {
          title: '清單與探索',
          body: '收錄這部作品的清單與閱讀順序，各自附上理由；再往下是識別碼、出處與修訂歷史。',
          example: '一份輕小說入門清單，寫明為什麼收了它。',
        },
      ],
    },
    action: {
      label: '主要按鈕',
      headline: '最上方只有一個主要按鈕。',
      lead: '按鈕上寫什麼，取決於你和這部作品的關係。追蹤與加入清單是另外兩個按鈕，不和它混在一起。',
      rows: [
        { title: '還沒選版本', body: '按鈕寫著「選擇版本」。' },
        { title: '選了版本，還沒開始', body: '按鈕寫著「開始讀」。' },
        { title: '讀到一半', body: '按鈕寫著「繼續讀」，直接回到你停下的地方。' },
      ],
      caption: '在手機上，封面縮成書名旁的小圖，身分、版本、狀態與這個按鈕都在第一個畫面裡。',
    },
    ratings: {
      label: '評分',
      headline: '分數旁邊，寫著它評的對象。',
      lead: '讀原文的人評故事，讀譯本的人可以另外評翻譯，聽有聲書的人評朗讀。',
      rows: [
        { title: '評的對象', body: '故事、譯本與朗讀各自評分，不混成一個數字。' },
        { title: '平均的來源', body: '每個平均分數都註明是誰評的：所有人、你加入的社群，或是另一個社群。' },
        { title: '系列與各集', body: '系列本身的評分，和各集的評分分開。' },
      ],
    },
    edit: {
      label: '修改',
      headline: '自己的紀錄直接改，共用的事實走提案。',
      rows: [
        { title: '直接改，可以復原', body: '閱讀狀態、進度、評分與清單。改錯了，按一下就復原。' },
        { title: '提出更正，經人審核', body: '事實、關聯、書名與別名。每個提案都附上出處，由人審核之後才會套用。' },
      ],
    },
    languages: {
      text: '介面、書名與版本的語言，',
      sub: '各管各的。',
      note: '把介面切成英文，你讀的繁中譯本不會因此被換掉；書名翻成了中文，也不代表已經有中文譯本。評論也各自標明寫成的語言。',
    },
    finaleLead: '作品頁的深處，照你的進度一章章展開。',
  },

  wiki: {
    hero: {
      headline: '每一本書，都有自己的 Wiki。',
      lede: '有這本書的人，在自己的電腦上讓 AI 代理一章章整理人物、地點與事件，經人審核後發布。每位讀者看到的，只到他讀過的那一章。',
      alt: '一張深綠色的紙上割出幾道長短不同的空隙，割下的紙片整齊地排在一旁的淡藍色卡紙上。',
    },
    flow: {
      label: '從檔案到 Wiki',
      headline: '從一個檔案，到一部 Wiki。',
      steps: [
        { title: '你手上的檔案', body: 'TXT 或 EPUB，留在你自己的電腦上。' },
        {
          title: '你選的 AI 代理',
          body: '工具組把文字切成帶有精確位置的段落。你的代理一章章讀，記下登場的人物和他們的別名、彼此的關係、發生的事件與出現的地點。',
        },
        {
          title: '附出處的提案',
          body: '每一條都標出在原文的哪裡，再摘一小段原句當證據。代理先透過 API 找出已經存在的人物與地點，再把整批結果一起送出。',
        },
        {
          title: '審核後發布',
          body: '審核的人一次通過整批提案，作品的 Wiki 隨即更新。之後出了新章節，只需要送出新增與修改的部分。',
        },
      ],
    },
    position: {
      label: '閱讀位置',
      headline: '讀到第幾章，Wiki 就到第幾章。',
      lead: '以一部虛構的小說為例（示意），同一份人物與事件清單，在不同位置看到的內容不同。',
      control: '閱讀位置',
      positions: [
        { label: '第 1 章', chapter: 1 },
        { label: '第 3 章', chapter: 3 },
        { label: '第 9 章', chapter: 9 },
        { label: '第 16 章', chapter: 16 },
        { label: '第 22 章', chapter: 22 },
        { label: '全部', chapter: 30 },
      ],
      groups: { people: '人物', events: '事件' },
      source: '出處：第 {n} 章',
      aliases: '別名：',
      entries: [
        { group: 'people', name: '主角', aliases: '小名、筆名', chapter: 1, note: '故事的敘述者，在港口城市長大。' },
        { group: 'people', name: '主角的姊姊', chapter: 1, note: '在城裡的書店工作。' },
        { group: 'people', name: '新來的鄰居', chapter: 3, note: '剛搬進對面房子的年輕人。' },
        { group: 'people', name: '旅行的畫家', chapter: 16, note: '暫住在港口旁的旅館。' },
        { group: 'events', name: '書店重新開張', chapter: 1, note: '姊姊工作的書店換了新招牌。' },
        { group: 'events', name: '港口的宴會', chapter: 9, note: '主角在宴會上和鄰居說了第一句話。' },
        { group: 'events', name: '一封長信', chapter: 16, note: '信裡說出兩人過去的事。' },
        { group: 'events', name: '離港的船', chapter: 22, note: '消息從姊姊的來信傳來。' },
      ],
      later: '第 {n} 章才出現，先收起來',
      status: '目前位置：第 {n} 章。之後的內容不會出現在這裡。',
      statusAll: '目前顯示全部內容，包括結局。',
      rail: '全書 30 章。',
      rules: [
        '沒有登入的讀者，從第 1 章開始看，頁面會說明這一點。',
        '登入之後，預設位置是你讀完的最後一章；在書庫標成「已讀」，就等於讀完整部。',
        '任何人都能自己選擇位置，也能選擇顯示全部。',
        '位置只在同一條故事脈絡裡有效。網路版讀到哪裡，不會打開出版版的內容。',
      ],
    },
    text: {
      text: 'REZICS 不會收到全文；',
      sub: '它收到的只有提案，每一條帶著原文位置與很短的引文。',
      facts: [
        { title: '模型由你選', body: '用雲端模型，文字交給你選的服務；用本機模型，全程不離開你的電腦。' },
        { title: '開放原始碼', body: '工具組以 Apache-2.0 授權。沒有帳號也能用，它不回報使用情況，也不會自行從網路下載任何東西。' },
        { title: '不解密，不破解', body: '有保護的檔案打不開。工具組裡沒有解密或破解的功能，也不會轉而呼叫這類工具。' },
        { title: '引文有上限', body: '每段引文的長度，以及同一本書累積的引文量，都有上限，由 REZICS 的 API 統一把關。' },
      ],
    },
    zone: {
      label: 'Zone',
      headline: '一部 Wiki，就是作品的一個 Zone。',
      lead: '資訊框和清單裡的每一筆，都是篩選、清單與其他 Zone 讀取的同一筆資料。在這裡改正一個名字，別處顯示的也跟著改正。',
      tiles: [
        { name: '作品頁', line: '仍是中心，Wiki 是它的深處' },
        { name: '人物' },
        { name: '地點' },
        { name: '時間線' },
        { name: '章節導讀' },
        { name: '關係' },
      ],
      caption: '示意：一部作品的 Wiki 裡的頁面。',
    },
    review: {
      label: '審核',
      headline: 'AI 代理提案，人來審核。',
      lead: '代理找出的每一個人物與地點，都先和圖上已有的資料比對，結果分成四種。',
      states: [
        { title: '相符', body: '對上了圖上已經有的人物或地點。' },
        { title: '新增', body: '圖上還沒有，提案建立一筆。' },
        { title: '不確定', body: '有好幾個可能的對象，留給審核的人決定。' },
        { title: '無法取得', body: '目前取不到可以比對的資料，先保留下來。' },
      ],
      rules: [
        '比對的結果同樣是提案，不會自動合併兩筆資料。',
        '新章節的提案不會悄悄刪掉已經接受的內容；要撤回一條，必須寫明理由。',
        '引文的位置可以驗證：審核者手邊有同一版的檔案，就能逐段比對原句。',
        '讓不讓代理起草條目、收不收生成的文字，由各個社群自訂；沒有另外設定時，Wiki 只接受事實和結構。',
        '讀者看到的每一條，都先經過人的審核。',
      ],
    },
    finaleLead: '同一部作品的每一種書，怎麼分開記。',
  },

  editions: {
    hero: {
      headline: '一部作品，可以有一整排書。',
      lede: '原文與譯本、平裝與電子版、合訂本與網路連載，各自分開記下，再指回同一部作品。你知道手上是哪一本，系列進度也不會亂。',
      alt: '大小不同的綠色紙張疊在一起，左下角對齊，其中一張是淡藍色。',
    },
    releases: {
      label: '四種出版',
      headline: '每一次出版，都標明它是哪一種。',
      lead: '一本書在三家商店販售，紀錄上仍只有一個版本，附上三個購買地點。未經授權的轉載另外記錄，不會併進正版。',
      kinds: [
        { title: '正式出版', body: '出版社的單行本、平裝、電子版或特裝版。它記錄的是當時真的出版了什麼，之後不往裡面加內容。' },
        { title: '網路發表', body: '網路連載也是一次真實的發行。保留原始網址，以及一份份標上日期的存檔。' },
        { title: 'REZICS 固定版', body: '把 REZICS 上某個時刻選定的內容封存成一版，之後的修訂不會改動它。' },
        { title: '虛擬版', body: '照著某一次出版的結構放使用者的翻譯，寫明涵蓋的範圍，例如全書 100 章中的第 1 到 20 章。它從來不代表真的出版過。' },
      ],
    },
    translations: {
      label: '譯本',
      headline: '每個譯本，都標明譯者與來源。',
      rows: [
        { title: '官方譯本', body: '出版社的譯本是它自己的一次出版，署名譯者，標明權利。' },
        { title: '同好翻譯', body: '屬於譯者本人，對應到原文的某一個版本，永遠不會被標成官方。' },
        { title: '機器翻譯', body: '和其他譯本一樣是新的文本，狀態寫明由機器產生。' },
        { title: 'AI 輔助', body: '以人為主的翻譯用了 AI 協助，同樣照實標示，讀者可以依此篩選。' },
      ],
      stateLabel: '每一段譯文都有狀態',
      states: ['待翻譯', '已翻譯', '已審閱', '定稿'],
      notes: [
        '原文改了一段，對應的譯文會被標成需要更新。它不會被刪掉，也不會被悄悄搬到新的文字上。',
        '使用者的譯文一開始只有自己看得到。要公開，得先有根據：原作是公有領域或開放授權，作者點頭同意，或作者事先提供了翻譯授權。',
        '作者也可以拒絕讓原作連到某個譯本。',
        '繁體不會被悄悄換成簡體。轉換出來的文字會標明是轉換，專有名詞也不會被改動。',
      ],
    },
    sameWork: {
      label: '同一部或兩部',
      headline: '哪些改動，仍是同一部作品。',
      lead: '判斷的依據是故事前後是否相容，或是否刻意重新講一遍。字數、語言、書號與宣傳用語都不算。',
      rows: [
        { title: '修正錯字、輕微修訂、補上不衝突的章節', body: '同一部作品，版本與發行分開記錄。' },
        { title: '換了呈現順序，事件本身不變', body: '同一部作品，兩種順序都保留。' },
        { title: '重排改變了因果，或結局互不相容', body: '兩部作品，以「改寫」相連。' },
        { title: '主角換了名字', body: '只是別名的話，仍是同一部作品。' },
        { title: '刻意從頭重新講一遍', body: '兩部作品，以「重啟」相連。' },
        { title: '網路版被刪除，或只在網路上的後續', body: '只改變收錄範圍與能不能取得，不會多出一部作品。' },
      ],
      caption: '網路版讀到哪裡，不會讓改寫過的出版版變成讀完。兩邊章節的對應，要有人確認才算數。',
    },
    orders: {
      label: '順序',
      headline: '出版順序和閱讀順序，可以不一樣。',
      lead: '示意：同一套系列的兩種順序。每一集的識別碼都不變。',
      rows: ['出版順序', '推薦的閱讀順序'],
      tiles: ['第 1 集', '外傳', '第 2 集', '第 3 集'],
      reading: [0, 2, 1, 3],
      notes: [
        { title: '合訂本', body: '合訂本是一次出版，收錄好幾集。每一集仍是自己的作品，評分與進度都留在各集。' },
        { title: '子系列', body: '系列裡的子系列可以各自從第 1 集編號，另有一條總順序把它們接起來。' },
        { title: '讀完一個系列', body: '系列的進度只看必讀的各集；外傳與特別篇讀或不讀，都不影響讀完。' },
        { title: '系列的狀態', body: '追上了目前出版的部分、讀完了已出版的部分、系列已經完結，以及章節對應尚未確定，四種分開顯示。' },
      ],
    },
    isbn: {
      text: '輸入書號，',
      sub: '找到那一版。',
      note: '書號屬於某一次出版，不等於作品本身。從任何一個書號或電子版條目出發，都能找到那一版、它收的文本或譯本，以及上層的作品。例如《魔法禁書目錄》：日文原著、繁體中文版與英文版各是一次出版，書號各自不同，都指回同一部作品。',
    },
    finaleLead: '接著看你自己的那一份紀錄。',
  },

  library: {
    hero: {
      headline: '你怎麼讀，紀錄就怎麼記。',
      lede: '讀到一半放下、隔兩年重讀、通勤時改聽有聲書。REZICS 照實記下每一種情況，預設只有你看得到，想搬走時整份帶走。',
      alt: '三條長短不同的深綠色紙條平行排著，最短的一條旁邊放著一小張淡綠色的紙。',
    },
    reads: {
      label: '每一次閱讀',
      headline: '同一本書讀三次，就是三筆紀錄。',
      lead: '暫停就記成暫停，棄讀就記成棄讀，兩者都不算讀完。重讀是新的一筆，不會蓋掉第一次。',
      rows: [
        { title: '第一次', body: '紙本，讀到第 20 章，暫停。', share: 0.62 },
        { title: '第二次', body: '電子書，後半改聽有聲書，讀完。', share: 1 },
        { title: '第三次', body: '重讀，正在讀。', share: 0.24 },
      ],
      caption: '示意：每一筆紀錄都對著你實際讀的那一版。換一個版本重讀，也是另一筆。',
    },
    move: {
      label: '匯入與匯出',
      headline: '搬進來、搬出去，資料都不掉。',
      steps: [
        { title: '放進匯出檔', body: '其他服務匯出的檔案，或你自己整理的試算表。' },
        { title: '對到你讀的版本', body: '每一筆都對到實際的版本，不靠書名猜測。對不上的資料，不會被硬塞進別本書。' },
        { title: '帶著原本的進度', body: '讀到哪裡、讀過幾次、評分與評論，都一起搬進來。' },
        { title: '隨時整份匯出', body: '紀錄、藏書、評分與評論，匯出成可以再匯入的檔案。' },
      ],
      retention: '上傳的檔案只屬於你。檔案裡的原始欄位七天後自動刪除；想保留它們，在那之前匯出書庫就好。',
    },
    continue: {
      text: '打開 REZICS，',
      sub: '先看到的是下一章。',
      note: '首頁最上方的「繼續」一列，每一項都直接打開你還沒讀的下一章。',
    },
    shelf: {
      label: '書架',
      headline: '書架上的事，也一起記。',
      rows: [
        { title: '藏書', body: '架上這本是哪一版，記得清清楚楚。買了還沒讀，就是還沒讀。' },
        { title: '借出與借入', body: '借給誰、哪天借出、哪天該還、哪天真的還了，各記一欄。對方的名字是你寫的文字，不會連到任何人的帳號。' },
        { title: '段落筆記', body: '私人筆記釘在某一版的某一段。換了版本，筆記仍指著原本那一段。' },
        { title: '在讀就追蹤', body: '把書放進「在讀」或「想讀」，就會追蹤它。你讀的語言出了新章節或新版本，就會收到通知。' },
        { title: '清單', body: '一份清單裡可以有小說、漫畫和遊戲，自己排順序、寫註解，也能匯出帶走。' },
      ],
    },
    privacy: {
      label: '隱私',
      headline: '閱讀紀錄是私人的。',
      rows: [
        { title: '預設不公開', body: '除非你自己選擇分享，草稿與閱讀紀錄都不公開。' },
        { title: '不做廣告輪廓', body: 'REZICS 不用私人閱讀紀錄建立廣告輪廓，也不用它推測敏感的個人特質。' },
        { title: '不等於同意訓練', body: '註冊帳號、接受服務條款或使用 AI 功能，都不等於同意拿你的紀錄訓練模型。' },
        { title: '交出管理權時', body: '把帳號或社群的管理權交給別人，不會連帶分享你的閱讀紀錄。' },
      ],
    },
    finaleLead: '換到寫的那一邊。',
  },

  serial: {
    hero: {
      headline: '一章一章寫，一章一章讀。',
      lede: '網路連載、輕小說的連載版或你自己的長篇，都能在 REZICS 上寫作、排程與發布。稿子不怕遺失，讀者總能回到上次讀到的地方。',
      alt: '一條深綠色的長紙摺成一頁一頁，後半段還平攤著，摺痕處放著一小張淡綠色的紙。',
    },
    safe: {
      label: '稿子',
      headline: '稿子放在這裡，不會不見。',
      rows: [
        { title: '每次儲存，都是一個版本', body: '每一版都留著，可以比對，也能還原成新的一版。清空一章只是存下一個空白版本，空白的章節無法發布。' },
        { title: '照你的時區排程', body: '選好當地的發布時間，排好的章節由伺服器準時發布，關掉瀏覽器也一樣。' },
        { title: '協作者分四種權限', body: '閱讀、建議、編輯、發布，分開授權。能改稿的人，不一定能按下發布。' },
        { title: '作者的話，和正文分開', body: '章末的作者的話是另一部分。它不算進字數，不會被翻譯，也不會收進日後的出版版。' },
      ],
    },
    mirror: {
      label: '作者與讀者',
      headline: '作者做一件事，讀者那邊發生什麼。',
      rows: [
        { title: '發布第 12 章', body: '追蹤這部作品的讀者，收到他所讀語言的新章節通知。' },
        { title: '修訂第 3 章', body: '之前的留言仍指著當時那一版的那一段，不會跑位。' },
        { title: '把第 5 章收進短篇集', body: '文字與討論只有一份，兩處的閱讀進度各自記錄。' },
        { title: '發布第 13 章的同時', body: '還沒讀到的人，動態裡不會出現這一章的劇透。' },
      ],
      notes: [
        '字級、行寬、字體、縮排、配色與中日文的間距，讀者可以自己調整。',
        '日文作品可以直排閱讀，並支援振假名與著重號。',
        '讀者寫給作者的意見，會進到作者專用的收件匣。',
      ],
    },
    ai: {
      label: 'AI 聲明',
      headline: '用了多少 AI，照實寫。',
      rows: [
        { title: '未使用', body: '沒有生成式 AI 實質參與這段文字。' },
        { title: '輔助', body: '主要由人寫成，在發想、改寫、編修或部分內容上用了 AI。' },
        { title: '生成', body: '大部分文字由 AI 產生，包括機器翻譯，即使之後經人修改也一樣。' },
      ],
      notes: ['有沒有經人審閱，另外記錄。讀者可以依這些標示篩選。', '標示是作者的聲明。REZICS 不把 AI 偵測器的結果當成判決。'],
    },
    world: {
      label: '世界設定',
      headline: '世界設定，就放在稿子旁邊。',
      lead: '用範本整理人物、地點、組織、事件、物品與設定，全部私人保存。選定的頁面可以公開到作品的 Wiki，私人的修訂歷史不會跟著公開。',
      items: [
        '在自己畫的地圖上標出地點。',
        '人物關係可以畫成圖，也有一份文字清單。',
        '用故事裡的曆法排時間線，日期不確定也能記。',
        '連貫性助手只標出筆記和稿子裡互相矛盾的地方，不會替你寫任何一章。',
      ],
    },
    backup: {
      text: '整部稿子，',
      sub: '隨時完整帶走。',
      note: '修訂紀錄、筆記與世界設定，可以匯出成一份能再匯入的備份。匯出功能與核心的世界設定，不會被放在付費方案後面。',
    },
    finaleLead: '寫完之後，把它交到讀者手上。',
  },

  publish: {
    hero: {
      headline: '書賣出去，檔案留在讀者手上。',
      lede: '簽約創作者在 REZICS 直接販售已取得授權的電子書、小型遊戲與視覺小說。讀者買到的是無 DRM 的檔案，商店頁就在作品的討論與 Wiki 旁邊。',
    },
    buy: {
      label: '購買',
      headline: '讀者買一本書，從選版本開始。',
      steps: [
        { title: '選版本', body: '先選語言與版本，看清楚譯者是誰，再讀一段試閱。' },
        { title: '付一次', body: '一次付清，不是訂閱。你得到的授權，在購買前就寫在頁面上。' },
        { title: '留檔案', body: '下載無 DRM 的 EPUB 或 PDF。不需要啟動器，也沒有 DRM 啟用步驟。' },
        { title: '收更新', body: '作者發布修訂版時，更新會送到你這裡。收據也留著，買過的檔案隨時可以再下載。' },
      ],
      caption: '無 DRM 不代表可以轉售或散布，能怎麼使用，以購買前寫明的授權為準。',
    },
    statement: {
      label: '結算單',
      headline: '創作者的結算單，每一筆扣款都列出來。',
      rows: [
        { title: '讀者付款', body: '這筆交易實際收到的金額。' },
        { title: '稅款', body: '代收代繳的銷售稅、加值稅等交易稅。' },
        { title: '支付手續費', body: '實際發生、有單據可查的金流費用。' },
        { title: '退款與爭議款', body: '退款、撤銷與拒付。' },
        { title: '淨收入', body: '扣除以上各項之後的金額，由創作者與 REZICS 依合約分配。' },
      ],
      note: '主機、薪資與行銷等營運成本，不會從這筆收入裡扣除。同一筆費用也不會扣兩次。',
    },
    distributed: {
      label: '發行範圍',
      headline: '這裡發行什麼，不發行什麼。',
      rows: [
        { title: '電子書', body: '已取得授權、無 DRM 的 EPUB 或 PDF。' },
        { title: '小型遊戲與視覺小說', body: '可以下載的版本，執行需要的平台或帳號，購買前就寫清楚。' },
        { title: '試閱', body: '先讀一段，再決定要不要買。' },
        { title: '收據與退款', body: '每一筆購買都有收據，也可以申請退款。' },
      ],
      policy: [
        { title: '簽約創作者', body: '發行對象是簽約的創作者，不是開放任何人上架的市集。' },
        { title: '不販售', body: '露骨的性內容，以及 r18 或 r18g 分級的作品。' },
      ],
    },
    community: {
      text: '商店頁，',
      sub: '就在作品的社群旁邊。',
      note: '買之前看得到評論、討論與 Wiki；買了之後，你的版本、進度與收據都留在同一部作品下。讀者也能追蹤創作者，看見他寫的小說和做的遊戲。創作者看到的是彙總的銷售資料，看不到讀者的閱讀紀錄。',
    },
    finaleLead: '原著改編的動畫，也連回同一部作品。',
  },
};

export default {
  id: 'books',
  base: '/books/',
  name: '書庫',
  theme: { kind: 'books' },
  next: 'anime',
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: '書庫：讀到哪，就到哪',
        description:
          '每部作品一個頁面，原文、譯本、單行本與合訂本分得清清楚楚。書庫記得你讀到哪一集，接著告訴你下一本，Wiki 與討論則停在你讀過的那一章。',
      },
    },
    {
      slug: 'work',
      label: '作品頁',
      meta: {
        title: '作品頁：一部作品的中心',
        description:
          '作品頁把一部作品的事實、評分、你的版本與進度、分集與改編、Wiki 摘要和討論放在同一頁，最上方只有一個依你的狀態而定的主要按鈕。',
      },
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: {
        title: 'Wiki+：用你的 AI 代理建 Wiki',
        description:
          '持有文本的讀者在自己的電腦上執行開放原始碼的工具組，讓自己的 AI 代理逐章整理人物、地點與事件。審核後發布成作品的 Wiki，每位讀者只看到自己讀過的部分。',
      },
    },
    {
      slug: 'editions',
      label: '版本與系列',
      meta: {
        title: '版本與系列：每一版都分得清',
        description:
          '單行本、合訂本、電子版、網路連載與各語言譯本，在 REZICS 都是同一部作品的不同出版。系列照集數排好，改寫過劇情的出版版本則是另一部作品。',
      },
    },
    {
      slug: 'library',
      label: '閱讀紀錄',
      meta: {
        title: '閱讀紀錄：照實記，帶得走',
        description:
          '每一次閱讀分開記：重讀、暫停、棄讀，從紙本換成有聲書也算同一次。藏書與借閱另外記，紀錄預設私人，可以從其他服務匯入，也能完整匯出。',
      },
    },
    {
      slug: 'serial',
      label: '連載',
      meta: {
        title: '連載：一章章寫，一章章讀',
        description:
          '作者每次儲存都能還原，章節照自己的時區排程，關掉瀏覽器也準時發布。讀者從上次的位置接著讀，討論不會劇透還沒讀到的章節。',
      },
    },
    {
      slug: 'publish',
      label: '出版',
      meta: {
        title: '出版：直接賣給讀者',
        description:
          '簽約創作者在 REZICS 販售已取得授權的電子書、小型遊戲與視覺小說：無 DRM 檔案、試閱、更新與重新下載，結算單逐項列出稅款、手續費與退款。',
      },
    },
  ],
  strings,
} satisfies MiniSite<BooksStrings>;
