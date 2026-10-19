// The 視覺小說 site: every visible string of /visual-novels/ and its six inner pages. Design
// record: src/sites/visual-novels/SITE.md; claims and sources: src/sites/visual-novels/facts.md.
// The six releases below are one illustrative dataset (labelled 示意資料 on the pages), shared by
// the landing's three queries and the releases table so both agree.
import type { Item, Meta, MiniSite, PartId } from '../schema';

/** The four conditions a release is qualified by. */
export type Dim = 'language' | 'platform' | 'region' | 'coverage';

export interface VnRelease {
  id: 'r1' | 'r2' | 'r3' | 'r4' | 'r5' | 'r6';
  /** Full name, as in the table. */
  name: string;
  /** Option keys of `options`, one per condition (the content, not the box). */
  values: Record<Dim, string>;
  /** Option key of the title language when it differs from the content language. */
  titleLanguage?: string;
  coverageNote?: string;
  translator: string;
  source: string;
  status: string;
}

const meta = (title: string, description: string): Meta => ({ title, description });

const releases: VnRelease[] = [
  { id: 'r1', name: '原版（1.02）', values: { language: 'ja', platform: 'pc', region: 'jp', coverage: 'full' }, translator: '無', source: '無', status: '官方' },
  { id: 'r2', name: '官方中文版', values: { language: 'zh', platform: 'console', region: 'tw', coverage: 'full' }, translator: '發行商', source: '原版', status: '官方' },
  { id: 'r3', name: '同好中文化補丁 第一版', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'partial' }, coverageNote: '共通線與兩條路線', translator: '同好翻譯團隊', source: '原版 1.02', status: '非官方' },
  { id: 'r4', name: '同好中文化補丁 第二版', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'full' }, translator: '同好翻譯團隊', source: '原版 1.02', status: '非官方' },
  { id: 'r5', name: '英文試玩版', values: { language: 'en', platform: 'pc', region: 'any', coverage: 'trial' }, translator: '發行商', source: '原版', status: '官方' },
  { id: 'r6', name: '手機版', values: { language: 'ja', platform: 'mobile', region: 'tw', coverage: 'full' }, titleLanguage: 'zh', translator: '無', source: '無', status: '官方' },
];

const strings = {
  /** Labels shared by several pages of this site. */
  shared: {
    demo: '示意資料',
    dims: { language: '語言', platform: '平台', region: '地區', coverage: '完整度' } as Record<Dim, string>,
    columns: { name: '版本', translator: '譯者', source: '依據', status: '狀態' },
    options: {
      language: { zh: '繁體中文', ja: '日文', en: '英文' },
      platform: { pc: '電腦', console: '家用主機', mobile: '手機' },
      region: { jp: '日本', tw: '台灣', any: '不限' },
      coverage: { full: '完整', partial: '部分', trial: '試玩' },
    } as Record<Dim, Record<string, string>>,
    /** Followed by the name of the condition a release fails. */
    fails: '不符：',
    titleOnly: '只有標題是中文',
    match: '符合',
    closed: '尚未讀到',
    nextPage: '下一頁',
    nextSite: '下一站',
    /** The closing statement on every page of the site. */
    closing: '下一部視覺小說，從能玩的那一版開始。',
    releases,
  },

  landing: {
    hero: {
      headline: '有沒有中文、能不能玩，一版一版說清楚。',
      lede: 'REZICS 為每部視覺小說的每一個版本，標明語言、平台、地區與完整度。同好翻譯署名譯者，也寫明依據哪一版。',
    },
    match: {
      label: '同一個版本',
      headline: '三個條件，要落在同一個版本上。',
      body: '挑視覺小說，很像走一張路線圖：每多一個條件，就剪掉一條走不通的分支。語言、平台與完整度必須同時寫在同一筆發行上，才算找到；一版有中文、另一版在電腦上、第三版才完整，不會被湊成一個答案。',
      queriesLabel: '三組條件，各自的答案',
      /** A match: the release's name, then its translator and source. */
      answer: '{name}。譯者：{translator}，依據{source}。',
      none: '沒有符合的版本。只有標題是中文的手機版，不算。',
      caption: '示意資料：一部視覺小說的六個發行版本。',
    },
    statement: { text: '名稱翻成中文，', more: '不代表遊戲有中文。' },
    parts: {
      label: '部件',
      headline: '同一套部件，在視覺小說裡各有分工。',
      body: '每一種東西都由同一套部件組成，視覺小說用的是這八個。',
      notes: {
        identity: '一部作品一個身分，原版、移植、譯本與補丁都掛在它底下。',
        editions: '每個發行版本各自記下語言、平台、地區，以及內容涵蓋多少。',
        names: '日文原名、中文譯名、拼音與別名並存，各自標明語言。',
        credits: '劇本、原畫、音樂、配音與翻譯，每筆署名都連到一個人的頁面。',
        relations: '續作、外傳、移植與改編，一路連到小說、動畫與漫畫。',
        facets: '語言、平台、地區與完整度一起篩，四個條件全落在同一筆發行上。',
        progress: '照路線記下讀到哪裡，也決定頁面替你藏起多少。',
        wiki: '角色、地點與事件來自同一份圖譜，停在你讀到的路線。',
      } as Partial<Record<PartId, string>>,
    },
    pagesIndex: {
      label: '這個站',
      headline: '六個頁面，一頁講一件事。',
      rows: {
        releases: '語言、平台、地區與完整度，一版一版比。',
        translations: '誰翻的、從哪一版翻、翻到哪裡。',
        characters: '角色與配音員各有一個身分。',
        spoilers: '標籤能篩選，結局留到你自己讀到。',
        wiki: '從腳本整理出作品的 Wiki。',
        zones: '中文站與日文站，身分共用。',
      } as Record<string, string>,
    },
    neighbours: {
      label: '相鄰的種類',
      headline: '改編與原作之間，是一條真正的連結。',
      body: '視覺小說和小說、動畫、漫畫與遊戲共用同一份目錄。例如《魔法禁書目錄》：原作是輕小說，有漫畫與動畫，也有一部改編的視覺小說。在 REZICS，那部視覺小說是自己的作品，以「改編自」連回原作，評分與進度各自記錄。',
      items: [
        { kind: 'books', label: '同一個故事的小說，放在同一份書庫。' },
        { kind: 'anime', label: '改編動畫連回原作，配音員是同一人。' },
        { kind: 'manga', label: '漫畫與原作互相連結，進度各自記。' },
        { kind: 'games', label: '平台、發行與上架，和遊戲用同一套。' },
      ] as { kind: 'books' | 'anime' | 'manga' | 'games'; label: string }[],
    },
  },

  releases: {
    hero: {
      headline: '一個版本一列，條件都寫在那一列。',
      lede: '同一部視覺小說，可能有原版、移植版、官方譯本、同好補丁與試玩版。REZICS 替每一個版本各記一筆，寫清楚它收錄的語言、能玩的平台、發行的地區，以及內容涵蓋多少。',
    },
    matrix: {
      label: '篩選',
      headline: '篩選結果，以同一個版本為準。',
      body: '選了繁體中文、電腦與完整，列出來的版本必須同時符合這三項；只要有一項不符，那一版旁邊就寫出是哪一項。',
      filtersLabel: '篩選條件',
      any: '不限',
      count: '符合：{n} 個版本，共 {total} 個',
      note: '遇到不支援的條件組合，會直接說明原因，不會只給你一張空白的結果。',
      caption: '示意資料：一部視覺小說的六個發行版本，依目前條件篩選。',
    },
    languages: {
      text: '名稱的語言，',
      more: '和內容的語言分開記。',
      body: '一筆發行有兩種語言要記：包裝與標題用的語言，以及遊戲文字實際的語言。只翻了標題的版本，篩選繁體中文時不會出現；中日雙語的版本，兩種語言都會列出來。',
    },
    coverage: {
      label: '完整度',
      headline: '完整、部分、試玩，寫在發行上。',
      body: '範圍不明的版本標為未記錄，不會被當成完整。',
      items: [
        { title: '完整', body: '這一版收錄整部作品，每一條路線都在裡面。' },
        { title: '部分', body: '寫明涵蓋哪些部分，例如共通線與其中兩條路線。' },
        { title: '試玩', body: '試玩版另記一筆，標明只是試玩。玩過試玩版的心得，也和正式版的評價分開。' },
      ] as Item[],
    },
    status: {
      label: '狀態',
      headline: '一個版本，可以在很多地方買到。',
      body: '同一個版本在幾家商店上架，仍然是一筆發行，底下列出每個取得的位置。宣布、預定日期、延期與正式上市也分開記錄，不會混成一句「已發售」。',
      items: [
        { title: '官方', body: '權利人推出的版本。' },
        { title: '非官方', body: '未經權利人認可的發行。另記一筆，不會併進官方版本。' },
        { title: '已撤回', body: '推出後撤下的版本，紀錄照樣保留。' },
        { title: '已取消', body: '宣布過卻沒有推出，標明取消，不算已發行。' },
      ] as Item[],
    },
    follow: {
      label: '追蹤',
      headline: '出了你讀得懂的語言，就通知你。',
      body: '追蹤一部作品，以你的語言推出的新版本會送進收件匣。想盯緊某一個版本，也可以單獨關注它的動態。',
    },
    finale: '每份翻譯從哪裡來，一路追得到。',
  },

  translations: {
    hero: {
      headline: '每份翻譯，都寫明從哪一版翻過來。',
      lede: '中文翻譯和日文原版是同一部作品，評分、角色與 Wiki+ 都在一起。翻譯本身另有一份紀錄：譯者是誰、依據哪個版本、翻到哪裡，REZICS 一項一項記下來。',
    },
    lineage: {
      label: '來路',
      headline: '同好就是同好，官方就是官方。',
      body: '同好翻譯有自己的一筆，連回它依據的原版，不會被標成官方。官方譯本另有一筆，兩者並排，讀者一眼分得出來。',
    },
    record: {
      label: '一份翻譯的紀錄',
      headline: '譯者、依據、範圍，一項一項寫。',
      items: [
        { title: '譯者', body: '翻譯團隊與每一位譯者都有自己的身分頁。同一個人翻過哪些作品，在他的頁面一次看完。' },
        { title: '依據', body: '翻譯指向它依據的那一版，例如原版 1.02，而不是籠統的「原作」。來源還沒確認，就標為未確認，不會隨便填一個。' },
        { title: '範圍', body: '共通線、哪幾條路線、有沒有附錄，範圍寫在發行上。開始玩之前，就知道會不會玩到一半變回日文。' },
        { title: '更新', body: '補丁推出新版，就新增一筆發行。舊版保留當時的範圍，誰玩的是哪一版，都對得上。' },
      ] as Item[],
    },
    reviews: {
      text: '翻譯的好壞，',
      more: '單獨評。',
      body: '評價可以指定對象：故事、翻譯或製作。劇本動人、翻譯生硬，兩件事各打各的分數。看評分時，也可以只看讀中文的玩家怎麼說。',
    },
    several: {
      label: '好幾份翻譯',
      headline: '同一部作品，可以有好幾份翻譯。',
      body: '不同團隊可以各自翻譯同一部作品，各自署名、各自維護，紀錄互不覆蓋。讀者自己挑一份，社群也可以推薦其中一份。',
    },
    teams: {
      label: '給翻譯團隊',
      headline: '補丁的每一版，都有自己的頁面。',
      items: [
        { title: '團隊頁', body: '團隊與成員各有身分，翻過的作品與每一筆發行列在一起。' },
        { title: '發行頁', body: '補丁的每個版本都有自己的頁面與討論串，玩家的回饋集中在同一處。' },
        { title: '追蹤', body: '玩家可以追蹤你的團隊，新補丁推出時收到通知。' },
        { title: '更正', body: '發行資料寫錯了，可以直接提出更正，審核通過才會生效。' },
      ] as Item[],
    },
    finale: '角色和配音員，各自只有一個身分。',
  },

  characters: {
    hero: {
      headline: '一個角色，到哪裡都是同一個。',
      lede: '續作、移植版、動畫改編或翻譯版裡，同一個角色只有一個身分。不同作品裡的年齡、外表與稱呼，記成標明適用範圍的資料，不必拆成好幾個角色。',
    },
    variants: {
      label: '變體',
      headline: '另一個人格，另一條世界線。',
      body: '真的需要分開時才分開。另一個人格，或另一條世界線上的同一人，成為各自的變體，連回同一個主角色。這條連結也記著它在劇情裡揭露的位置，還沒讀到的人看不到。',
      items: [
        { title: '角色 A', body: '主角色。續作、移植與改編裡的 A，都是這一個身分。' },
        { title: 'A 的另一個人格', body: '人格變體，連回角色 A。' },
        { title: '另一條世界線的 A', body: '對應變體，連回角色 A。' },
      ] as Item[],
      caption: '示意資料。變體只連到一個主角色，主角色本身不會是變體。',
    },
    names: {
      label: '名稱',
      headline: '名稱，也分會不會暴雷。',
      body: '一個角色可能有本名、譯名、暱稱與真名。每個名稱標明語言、出現在哪部作品，以及暴雷程度。頁面預設顯示最常見、也最不暴雷的那一個。',
      columns: { kind: '名稱類型', language: '語言', where: '出現於', spoiler: '暴雷' },
      rows: [
        { kind: '本名', language: '日文', where: '本作與續作', spoiler: '不暴雷' },
        { kind: '中文譯名', language: '繁體中文', where: '官方中文版', spoiler: '不暴雷' },
        { kind: '暱稱', language: '日文', where: '共通線起', spoiler: '不暴雷' },
      ],
      hidden: { kind: '真名', spoiler: '讀到路線二後半才顯示' },
      caption: '示意資料。每部作品裡掛名用的名稱，也和那一次登場一起保留。',
    },
    credits: {
      label: '製作人員',
      headline: '配音署名，連到角色。',
      body: [
        '製作人員依職務分組：劇本、原畫、音樂、配音與翻譯。配音的署名同時指向配音員和角色，也能註明適用哪一版，例如移植版換了配音員。',
        '寫過視覺小說劇本、也寫輕小說的作者，所有作品都列在同一個人的頁面。',
      ],
    },
    query: {
      label: '搜尋',
      headline: '條件要落在同一個角色身上。',
      body: '搜尋「紅髮的女主角」，找到的是紅髮、而且是女主角的那個角色所在的作品。一部作品裡有紅髮配角、另有黑髮女主角，不會混進結果。',
      items: [
        { title: '作品一：符合', body: '女主角是紅髮。兩個條件落在同一個角色身上。' },
        { title: '作品二：不符', body: '紅髮的是配角，女主角是黑髮。兩個條件分在兩個角色身上，不算。' },
      ] as Item[],
      caption: '示意資料。主角、主要角色與配角是不同的事：反派可以是主要角色，卻不是主角。',
    },
    finale: '標籤可以挑，劇情留給你自己讀。',
  },

  spoilers: {
    hero: {
      headline: '還沒讀到的路線，先不告訴你。',
      lede: '視覺小說的重頭戲常在後面的路線。REZICS 依你讀到的位置決定顯示多少：標籤、角色資料與 Wiki+ 頁面，都停在你目前的進度。',
    },
    fold: {
      label: '進度',
      headline: '讀到哪裡，頁面就打開到哪裡。',
      body: '讀過的部分攤開，後面的部分摺起來。等你讀到那裡，它才打開；想先看全部，也可以自己打開。',
    },
    route: {
      label: '一條路線',
      headline: '你讀到路線一，後面的事先摺著。',
      here: '你讀到這裡',
      nodes: [
        { name: '序章', fact: '' },
        { name: '共通線', fact: '角色 A 登場' },
        { name: '選項', fact: '' },
        { name: '路線一', fact: 'A 與 B 是兒時玩伴' },
        { name: '路線一結局', fact: '' },
        { name: '路線二', fact: 'A 的真名' },
        { name: '真結局', fact: 'A 的另一個人格' },
      ],
      /** Index of the reader's position in `nodes`. */
      at: 3,
      caption: '示意資料。',
      rules: [
        { title: '訪客', body: '沒有登入的訪客，從第一個揭露之前開始看。' },
        { title: '登入後', body: '預設停在你讀完的最遠位置；標成讀完的作品，整部都算讀過。' },
        { title: '自己挑', body: '任何人都可以自己挑一個位置，或選擇顯示全部。' },
        { title: '各條線', body: '位置只在同一條故事線裡比較。另一條線的內容各自隱藏，頁面其餘部分照常顯示。' },
      ] as Item[],
    },
    votes: {
      label: '兩張票',
      headline: '符不符合、會不會暴雷，是兩張票。',
      body: '一個標籤貼上作品後，社群分別判斷兩件事：它符不符合，以及它會不會說破劇情。很貼切卻會暴雷的標籤，照樣藏到你讀到那裡。',
      columns: { tag: '標籤', fit: '符合', spoiler: '暴雷' },
      rows: [
        { tag: '校園', fit: '多數同意', spoiler: '不會' },
        { tag: '多重結局', fit: '多數同意', spoiler: '不會' },
      ],
      hidden: { fit: '多數同意', spoiler: '會，讀到路線二才顯示' },
      caption: '示意資料。',
    },
    filters: {
      label: '篩選',
      headline: '標籤可以包含，也可以排除。',
      body: [
        '篩選時，每個標籤都能設成包含或排除；同一類的幾個標籤，可以要求全部符合或任一符合。點開一個標籤就是它的頁面：說明、上下層標籤，以及帶著它的每一部作品。',
        '喜歡的標籤可以追蹤，釘成首頁的一個分頁。',
      ],
    },
    apart: {
      text: '暴雷、分級、遮罩，',
      more: '各管各的。',
      body: '暴雷投票不會改變分級，分級也不決定什麼算暴雷。被遮住的圖片或防雷段落，要你自己打開；打開只影響你這一次的瀏覽，不算投票。內容分級分成一般、R15、R18 與 R18G，各自獨立設定；還沒評估的內容標示「未評估」，不會被當成一般。',
    },
    readings: {
      label: '社群的解讀',
      headline: '同一個標籤，各社群可以有自己的解讀。',
      body: '每個社群可以採用自己的定義，決定接受哪些標籤。一個社群把某個詞的意思收得更嚴，不會改掉別人的用法，也不會刪掉原本的標籤。',
    },
    finale: '從腳本整理出來，經過人工審核的 Wiki。',
  },

  wiki: {
    hero: {
      headline: '從腳本長出來，經人審核才發布。',
      lede: '視覺小說的劇情都寫在腳本裡。持有腳本的人，例如作品的創作者，用 REZICS 的開源工具包和自己的 AI 代理整理出角色與事件，送出待審的提案。審核通過，就成為作品的 Wiki+。',
    },
    steps: {
      label: '五個步驟',
      headline: '從腳本到讀者，五個步驟。',
      items: [
        { title: '讀取', body: '工具包讀取常見的視覺小說腳本格式。它只讀文字，從不執行腳本裡的程式碼。' },
        { title: '整理', body: '你選的代理逐段整理出角色、別名、關係、事件與地點，每一條附上位置與一小段引文。' },
        { title: '比對', body: '工具包透過 REZICS 的 API 尋找既有的角色與地點，把每一條標成已對上、新增、不確定或無法取得。' },
        { title: '審核', body: '提案由人審核。認定兩筆是同一個角色，也是一項提案，不會被悄悄合併。' },
        { title: '發布', body: '通過的內容發布到作品的 Wiki+。腳本更新時只送出差異，已接受的內容不會被默默刪除。' },
      ] as Item[],
    },
    locator: {
      label: '位置',
      headline: '每一條資訊，都指得回一句台詞。',
      body: '位置由三項組成：腳本的雜湊值、標籤，以及台詞的順序。路線守衛記下這句台詞屬於哪一條路線。持有同一版本的審核者，在自己的電腦上就能核對原文。',
      fields: [
        { label: '腳本雜湊', value: 'sha256 9f2c04b7', code: true },
        { label: '標籤', value: 'route_two_day3', code: true },
        { label: '台詞', value: '第 142 句', code: false },
        { label: '路線', value: '路線二', code: false },
      ],
      caption: '示意資料。版本不同時，需要先明確對齊，不會自動套用到另一版。',
    },
    local: {
      text: '全文留在',
      more: '你的電腦上。',
      body: [
        'REZICS 收不到腳本全文，只收到整理好的資料與短引文。讀腳本的是你選的模型；開啟嚴格模式，推論只在你自己的機器上進行。',
        '工具包以 Apache-2.0 授權開源，不需要 REZICS 帳號，不回傳使用資料，也不會自己連線抓取任何東西。它不破解任何保護：加密或受保護的檔案，就是讀不了。',
        '引文的長度有上限，由平台統一把關，跨帳號、跨譯本、跨站點一起計算。',
      ],
    },
    zone: {
      label: '站',
      headline: 'Wiki+ 是作品的一個站。',
      body: [
        '角色、地點、時間線、章節導覽與人物關係，各有自己的頁面。資訊框和清單讀的是同一份圖譜：在一個 Wiki 修正一筆，篩選、清單與其他站一起改正。讀者看到的內容，停在自己讀到的路線。',
        '作品頁仍是入口，評分、評論、你的進度與 Wiki+ 摘要放在一起。每個社群自己決定要不要讓代理起草、能不能用生成的文字；預設只收事實與結構。',
      ],
    },
    finale: '中文社群與日文社群，各有自己的站。',
  },

  zones: {
    hero: {
      headline: '兩個語言的站，同一批身分。',
      lede: '中文社群可以架一個視覺小說站，日文社群也可以。兩個站各自決定作品的名稱、介紹、排序與採納哪些說法，底下的作品、角色與製作人員是同一批。',
    },
    mirror: {
      label: '兩個站',
      headline: '任何一邊修正一筆，兩邊同時變正確。',
      body: '名稱、介紹與排序由各站自己決定；作品、角色與製作人員的身分，兩站共用同一份。',
      columns: { field: '', zh: '中文站', ja: '日文站' },
      rows: [
        { field: '名稱', zh: '一部視覺小說', ja: 'あるビジュアルノベル' },
        { field: '介紹', zh: '中文社群自己寫', ja: '日文社群自己寫' },
        { field: '排序', zh: '依中文版推出日期', ja: '依日文版推出日期' },
        { field: '身分', zh: '同一個作品身分', ja: '同一個作品身分' },
      ],
      caption: '示意資料。',
    },
    zone: {
      label: 'Zone',
      headline: '一個 Zone，就是一個完整的站。',
      items: [
        { title: '頁面與網址', body: '首頁、作品頁、角色頁與發行列表，網址和版型由站自己決定。' },
        { title: '導覽', body: '自己的導覽列，再加上自訂頁面，例如新手指南。' },
        { title: '外觀', body: '品牌與版面自己設定；身分、搜尋、語言、出處與無障礙維持一致，讀者到哪個站都認得。' },
        { title: '版本', body: '整個站的修改可以先預覽、驗證，出錯能復原，也能整站匯出。' },
        { title: 'API', body: '人和 AI 代理透過同一套 API 管理站點。' },
      ] as Item[],
    },
    space: {
      label: '空間',
      headline: '站是門面，社群是聚會的地方。',
      items: [
        { title: '站點', body: 'Zone 有自己的頁面與導覽，是給所有人看的門面。' },
        { title: '社群', body: 'Realm 有討論、規則與成員，也決定社群採納哪些說法。' },
        { title: '兩者並存', body: '同一個空間可以同時有站點與社群，也可以只有其中一個。' },
        { title: '追蹤一次', body: '追蹤這個空間一次，兩邊的動態都收得到。' },
      ] as Item[],
    },
    community: {
      label: '社群',
      headline: '討論、評分、清單，都接在作品上。',
      items: [
        { title: '討論', body: '每部作品、每個版本都能開討論串，看討論不必先加入。' },
        { title: '評分', body: '評分寫明是誰給的：所有人、某個社群，或只有你自己。' },
        { title: '清單', body: '入門推薦、遊玩順序，排好順序並寫上理由，也能匯出。' },
        { title: '書庫', body: '在中文站標成玩完，到日文站也算數，書庫和清單跟著你走。' },
      ] as Item[],
    },
    script: {
      text: '繁體',
      more: '就是繁體。',
      body: '名稱與介紹各自標明語言。沒有繁體中文時，自動轉換只是一個清楚標示的替代，不算審核過的翻譯，也不會改動人名與作品名。',
    },
    creators: {
      label: '創作者',
      headline: '做視覺小說的人，也在這裡發行。',
      body: '與 REZICS 簽約的創作者，可以直接發行自己的視覺小說：不加 DRM 的檔案、試玩版與一次購買，買過的人能收到更新、隨時重新下載。作品頁、社群與 Wiki+ 都接在同一個身分上。',
    },
    finale: 'MCP 伺服器，也有自己的索引。',
  },
};

export type VnStrings = typeof strings;

export default {
  id: 'visual-novels',
  base: '/visual-novels/',
  name: '視覺小說',
  theme: { kind: 'visual-novels' },
  next: 'mcp',
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: meta(
        '視覺小說：一版一版說清楚',
        '依語言、平台、地區與完整度挑選視覺小說，同好翻譯寫明譯者與依據的版本。角色、製作人員、路線進度與 Wiki+，都接在同一部作品上。',
      ),
    },
    {
      slug: 'releases',
      label: '發行版本',
      meta: meta(
        '發行版本：條件落在同一版',
        '視覺小說的每個發行版本各記一筆：語言、平台、地區，與完整、部分或試玩。篩選條件要在同一版同時成立，只翻了標題的版本不算中文版。',
      ),
    },
    {
      slug: 'translations',
      label: '翻譯與譯者',
      meta: meta(
        '翻譯與譯者：寫明出處',
        '每份視覺小說翻譯都寫明譯者、依據的確切版本與涵蓋範圍。同好翻譯不會被標成官方，補丁更新另記一筆，翻譯也能和故事分開評價。',
      ),
    },
    {
      slug: 'characters',
      label: '角色與製作',
      meta: meta(
        '角色與製作人員：一人一身分',
        '同一個角色在續作、移植與改編裡只有一個身分，名稱依語言與暴雷程度挑選顯示。劇本、原畫、音樂與配音的署名，都連到同一個人的頁面。',
      ),
    },
    {
      slug: 'spoilers',
      label: '分類與暴雷',
      meta: meta(
        '分類與暴雷：停在你的進度',
        '標籤能包含也能排除，社群分開判斷標籤符不符合、會不會暴雷。角色資料與 Wiki+ 只顯示到你讀到的路線，想看全部，由你自己決定打開。',
      ),
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: meta(
        'Wiki+：從腳本整理出的維基',
        '持有腳本的人在自己的電腦上，用開源工具包與自己的 AI 代理整理出角色、地點與事件，每條附上台詞位置。REZICS 收不到全文，經人審核才發布。',
      ),
    },
    {
      slug: 'zones',
      label: '社群與站點',
      meta: meta(
        '社群與站點：一份資料兩個站',
        '中文社群與日文社群可以各架一個完整的視覺小說站，名稱、介紹、排序與採納的說法各自決定，作品、角色與製作人員的身分全部共用。',
      ),
    },
  ],
  strings,
} satisfies MiniSite<VnStrings>;
