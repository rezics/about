// Skill Hub (/skills/): every visible string of the site, shaped by the v3 parts (hero, section,
// facts list, photo row, tile masonry, statement, closing). Design record and sources:
// src/sites/skills/SITE.md and facts.md. Terms: 「AI 代理」 on first mention in a section, then
// 「代理」; 「技能」 throughout; 「MCP 伺服器」.
import type { KindId, MiniSite } from '../schema';

/** A hairline facts row: title left, text right. */
export interface Row {
  title: string;
  body: string;
}

/** A frontmatter line of the example skill and what REZICS does with it. */
export interface KeyRow {
  key: string;
  value?: string;
  body: string;
}

/** A file role of the Agent Skills format. */
export interface FileRow extends Row {
  /** The literal path from the format, set as code. */
  path?: string;
  /** A short mark beside the title (可執行, 缺少). */
  mark?: string;
}

/** A section opening: eyebrow in columns 1 to 3, serif h2 in 4 to 11, lead in 4 to 9. */
export interface Head {
  eyebrow: string;
  /** One or two short clauses; each item is one line on wide screens. */
  headline: string[];
  lead?: string;
}

/** A large serif statement: the first half in ink, the second in muted ink. */
export interface Said {
  text: string;
  muted: string;
}

/** A still-life picture: the file stem under /images/sites/skills/ and its description. */
export interface Pic {
  src: string;
  alt: string;
}

/**
 * How an inner page ends: a lead-in to the next page (a section whose title leads into one tile),
 * then the closing statement before the ink pill into REZICS.
 */
export interface End {
  next: string;
  closing: string;
}

export interface SkillsStrings {
  ui: {
    nextPage: string;
    nextSite: string;
  };
  landing: {
    hero: { eyebrow: string; headline: string[]; lede: string; pic: Pic };
    layers: Head & { rows: Row[] };
    files: Head & { body: string; link: string; pic: Pic };
    statement: Said;
    pages: Head & { tiles: { slug: string; line: string }[] };
    neighbours: Head & { tiles: { to: KindId; line: string }[] };
    closing: { title: string; body: string };
  };
  directory: {
    head: { headline: string[]; lede: string };
    filters: Head & { rows: Row[] };
    statement: Said;
    lists: Head & { body: string; pic: Pic };
    views: Head & { rows: Row[] };
    end: End;
  };
  versions: {
    head: { headline: string[]; lede: string };
    frontmatter: Head & { rows: KeyRow[] };
    files: Head & { rows: FileRow[] };
    history: Head & { body: string[]; pic: Pic };
    packages: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  evidence: {
    head: { headline: string[]; lede: string };
    declaration: Head & { code: string; codeLabel: string; caption: string };
    record: Head & { rows: Row[] };
    rules: Head & { rows: Row[] };
    opinions: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  use: {
    head: { headline: string[]; lede: string };
    steps: Head & { rows: Row[] };
    agent: Head & { paragraphs: [string, string]; link: string };
    later: Head & { rows: Row[] };
    end: End;
  };
  publish: {
    head: { headline: string[]; lede: string };
    import: Head & { body: string; pic: Pic };
    steps: Head & { rows: Row[] };
    limits: Head & { rows: Row[]; after: string };
    statement: Said & { rows: Row[] };
    credits: Head & { rows: Row[] };
    end: End;
  };
}

const skills = {
  id: 'skills',
  base: '/skills/',
  name: 'Skill Hub',
  theme: { kind: 'skills' },
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: 'Skill Hub：AI 代理的技能索引',
        description:
          'Skill Hub 收錄 AI 代理讀的技能。每個技能的全文、檔案、版本與有日期的相容紀錄都攤開來，評分與討論綁在版本上，用之前可以先看清楚。',
      },
    },
    {
      slug: 'directory',
      label: '目錄',
      meta: {
        title: 'Skill Hub 目錄：一列一個技能',
        description:
          '在 Skill Hub 用一句描述找技能。任何收錄的屬性都能篩選，結果翻得到最後一筆；別人整理的清單和你存下的檢視都能追蹤，符合條件的新技能出現時就會知道。',
      },
    },
    {
      slug: 'versions',
      label: '版本與檔案',
      meta: {
        title: '技能頁面：全文、檔案與版本',
        description:
          '技能頁面放出完整的 SKILL.md，列出每個檔案的角色與雜湊值，可執行的檔案特別標示。每個版本固定內容、授權與來源，新版本不會蓋掉舊的。',
      },
    },
    {
      slug: 'evidence',
      label: '證據與評價',
      meta: {
        title: '技能的相容紀錄與評價',
        description:
          '技能作者寫的相容條件只是宣告。Skill Hub 另外記錄誰在哪個 AI 代理、哪個版本、哪種語言、哪一天用過，評分與討論也各自綁在版本上。',
      },
    },
    {
      slug: 'use',
      label: '用在你的代理',
      meta: {
        title: '把技能交給你的 AI 代理',
        description:
          '在 Skill Hub 找到技能後，先讀全文與檔案，看過相容紀錄，再選定一個版本下載或複製，鎖定它需要的套件，最後追蹤更新。你的 AI 代理也能透過 API 與 MCP 讀取同一份資料。',
      },
    },
    {
      slug: 'publish',
      label: '發布技能',
      meta: {
        title: '在 Skill Hub 發布技能',
        description:
          '把符合格式的技能資料夾匯入 Skill Hub。每個位元組照原樣保存，腳本不會執行，看不懂的欄位也不丟；每次發布固定檔案、授權與來源，成為一個新版本。',
      },
    },
  ],
  strings: {
    ui: {
      nextPage: '下一頁',
      nextSite: '下一個網站',
    },
    landing: {
      hero: {
        eyebrow: 'Skill Hub',
        headline: ['交給 AI 代理之前，', '一層一層讀清楚。'],
        lede: 'Skill Hub 收錄代理讀的技能。一個技能先給你名稱和一句描述，打開是完整的 SKILL.md，再往下是每個檔案與每個版本，以及誰在什麼條件下用過它。',
        pic: {
          src: 'fold',
          alt: '一張萊姆綠的紙對摺後半開著，底下錯開疊著米白、淺綠與淡藍的紙，一層露出一層的邊。',
        },
      },
      layers: {
        eyebrow: '讀的順序',
        headline: ['一個技能分三層讀，', '和代理讀它的順序一樣。'],
        lead: '這是技能格式本身的設計：AI 代理不會一次讀完手上所有的技能。Skill Hub 照同樣的順序排版，你看到的每一層，就是代理讀到的那一層。',
        rows: [
          {
            title: '一行',
            body: '代理啟動時，每個技能只讀名稱和一句描述，靠這一句判斷要不要用它。目錄也是一列一個技能，列出的正是這兩樣。',
          },
          {
            title: '一頁',
            body: '任務對上了，代理才讀完整的 SKILL.md。技能頁面把全文原樣放出來，旁邊是每一種東西都有的身分、版本、署名、評分、討論與清單。',
          },
          {
            title: '用到的檔案',
            body: '腳本、參考資料與素材，代理用到時才讀。技能頁面把它們逐一列出，你不必先讀完全部，也看得到全部有什麼。',
          },
        ],
      },
      files: {
        eyebrow: '檔案',
        headline: ['每個檔案都列出來，', '能執行的另外標明。'],
        body: 'SKILL.md、scripts/、references/、assets/，還有規格沒有命名的檔案，每一個都記下路徑、角色與雜湊值。SKILL.md 提到、資料夾裡卻沒有的檔案，也會標出來。',
        link: '看版本與檔案',
        pic: {
          src: 'folder',
          alt: '一張萊姆綠的紙對摺成資料夾，封面掀起，裡面疊著米白、淺綠、淡藍與芥黃的紙，每一張都露出邊緣。',
        },
      },
      statement: {
        text: '收錄不是背書。',
        muted:
          'REZICS 只保存技能的檔案，不執行腳本，也不照裡面的指令行事；全文、檔案、宣告與紀錄都攤開來，由你自己判斷。',
      },
      pages: {
        eyebrow: '這個網站',
        headline: ['從找到一個技能，', '到發布你自己的。'],
        tiles: [
          { slug: 'directory', line: '用一句描述找技能' },
          { slug: 'versions', line: '全文、每個檔案與每一版' },
          { slug: 'evidence', line: '誰在什麼條件下用過' },
          { slug: 'use', line: '選定一版，交給代理' },
          { slug: 'publish', line: '一個資料夾，一個身分' },
        ],
      },
      neighbours: {
        eyebrow: '接到的地方',
        headline: ['技能本身是文字和檔案；', '它用到的東西，各有自己的頁面。'],
        lead: '技能宣告的套件在軟體有自己的版本；同一位作者寫的技能與 MCP 伺服器，連在同一個身分下。REZICS 的本機 Wiki 工具組也附有一份技能，教 AI 代理從書與視覺小說裡提出有出處的事實。',
        tiles: [
          { to: 'software', line: '技能需要的套件' },
          { to: 'mcp', line: '代理接上的工具' },
          { to: 'books', line: '逐章提出有出處的事實' },
          { to: 'visual-novels', line: '從遊戲腳本裡找出處' },
        ],
      },
      closing: {
        title: '先從一行開始找。',
        body: '在 REZICS 搜尋技能，讀過全文、檔案與紀錄，再交給你的 AI 代理。',
      },
    },
    directory: {
      head: {
        headline: ['一列，一個技能，', '一句話。'],
        lede: '目錄的每一列只有兩樣東西：技能的名稱，和作者寫的一句描述。AI 代理靠這一句決定要不要用一個技能，你在這裡也從這一句開始挑。',
      },
      filters: {
        eyebrow: '篩選',
        headline: ['照你在意的條件篩選，', '條件可以疊加。'],
        lead: '任何收錄的屬性都能拿來篩選。',
        rows: [
          { title: '搜尋', body: '用你描述任務的字眼去找，例如「整理章節人物」或「核對引文」。' },
          { title: '授權', body: '只看採用某種授權的技能。' },
          { title: '語言', body: '依說明寫成的語言，或有紀錄的任務語言。' },
          { title: '相容紀錄', body: '只看在某個 AI 代理、某個版本上留有紀錄的技能。' },
          { title: '更新時間', body: '依最近一次發布的日期排序或篩選。' },
        ],
      },
      statement: {
        text: '篩出來的結果，一路翻得到最後一筆。',
        muted: '筆數會註明是確切的還是估計的，後面的結果不會被藏起來。',
      },
      lists: {
        eyebrow: '清單',
        headline: ['別人排好的一套。'],
        body: '清單把一個工作流程用到的東西照順序排好，每一項寫上為什麼選它。技能旁邊也能放 MCP 伺服器、API 或軟體。整份清單能匯出，也能追蹤，整理的人加了新項目，你就會看到。',
        pic: {
          src: 'bundle',
          alt: '五張大小不同的紙疊成一疊，萊姆綠、米白、淡藍與芥黃，中間用一條萊姆綠紙帶繞一圈束起。',
        },
      },
      views: {
        eyebrow: '檢視',
        headline: ['存下條件，', '之後交給追蹤。'],
        lead: '一組篩選條件可以存成檢視。追蹤這個檢視，之後有新技能符合條件，就會出現在你的動態裡。',
        rows: [
          { title: '搜尋', body: '設好條件。' },
          { title: '檢視', body: '存下來，取個名字。' },
          { title: '追蹤', body: '有新結果時通知你。' },
        ],
      },
      end: {
        next: '找到了，就打開它。',
        closing: '你要的技能，可能就在下一列。',
      },
    },
    versions: {
      head: {
        headline: ['打開一個技能，', '裡面的都列出來。'],
        lede: '技能頁面是第二層：SKILL.md 的原文，加上它帶的每一個檔案。交給 AI 代理之前，你讀得到代理會讀到的每一個字。',
      },
      frontmatter: {
        eyebrow: 'SKILL.md',
        headline: ['開頭那幾行，', 'REZICS 這樣讀。'],
        lead: '以一個示範技能為例。',
        rows: [
          {
            key: 'name',
            value: 'chapter-cast',
            body: '名稱只用小寫字母、數字與連字號，而且必須和資料夾同名。它就是這個技能的身分。',
          },
          {
            key: 'description',
            value: '列出一章裡出場的人物，附上段落位置。需要整理角色表時使用。',
            body: '這一句就是目錄裡顯示的那一句，也是 AI 代理最先讀到的一句。',
          },
          {
            key: 'license',
            value: 'Apache-2.0',
            body: '授權記在版本上，連同宣告的人與時間。它是一筆宣告，不是法律審查。',
          },
          {
            key: 'compatibility',
            value: '需要能讀取本機檔案的代理',
            body: '作者自己寫的相容條件，標成「需要獨立驗證」，不當成已經證實。',
          },
          {
            key: 'allowed-tools',
            value: 'read-file',
            body: '允許的工具同樣只是宣告，標成「需要獨立驗證」。',
          },
          { key: '其他欄位', body: '規格之外的欄位不會被丟掉，原文保留，另外列出。' },
        ],
      },
      files: {
        eyebrow: '檔案',
        headline: ['每個檔案，各占一行。'],
        lead: '每個檔案記下路徑、角色與雜湊值。下載到的位元組，和頁面上記錄的相同。',
        rows: [
          { title: '說明檔', path: 'SKILL.md', body: '全文照原樣顯示，一個字也不改。' },
          {
            title: '腳本',
            path: 'scripts/',
            mark: '可執行',
            body: '可以執行的檔案會帶著標記。REZICS 只保存，不執行。',
          },
          { title: '參考資料', path: 'references/', body: 'AI 代理需要細節時才讀的文件。' },
          { title: '素材', path: 'assets/', body: '範本、圖片與資料檔，同樣列出路徑與雜湊值。' },
          { title: '其他', body: '規格沒有命名的資料夾與檔案，也逐一列出。' },
          { title: '缺少的檔案', mark: '缺少', body: 'SKILL.md 提到、資料夾裡卻沒有的檔案，會被標出來。' },
        ],
      },
      history: {
        eyebrow: '版本',
        headline: ['每一版都留著。'],
        body: [
          '發布之後的任何修改，都成為下一個版本；上一版的檔案與雜湊值維持原樣，你正在用的那一版不會被取代。',
          '版本依發布順序排列，各附日期與變更紀錄，再多也能一路往前翻。追蹤這個技能的人，收到的就是這份紀錄。',
        ],
        pic: {
          src: 'fan',
          alt: '五張紙從同一個角扇形展開，最前面是萊姆綠，往後一張比一張淺，最後一張是米白。',
        },
      },
      packages: {
        eyebrow: '套件',
        headline: ['需要的套件照作者寫的列出；', '沒寫清楚的，照實標明。'],
        rows: [
          {
            title: '依生態系分開',
            body: '每個套件記在它所屬的生態系之下。不同生態系裡名稱相同的套件，不會被當成同一個。',
          },
          { title: '必要與選用', body: '每一項標明是必要還是選用。' },
          { title: '缺漏與不支援', body: '宣告缺了，或用了不在支援範圍內的生態系，會標成缺漏或不支援。' },
        ],
      },
      statement: {
        text: '每個技能，都署了名。',
        muted:
          '作者與維護者依角色列名；點開名字，看得到這個人在 REZICS 的其他作品：別的技能、維護的 MCP 伺服器、寫過的評論。',
      },
      end: {
        next: '讀過內容，再看誰用過。',
        closing: '代理會讀到的每一個字，你都先讀得到。',
      },
    },
    evidence: {
      head: {
        headline: ['宣告是宣告，', '紀錄是紀錄。'],
        lede: '作者可以寫下技能適用的環境，那是一句話。有人實際用某個 AI 代理跑過某件任務，留下日期與方法，那才是一筆紀錄。Skill Hub 把兩者分開放。',
      },
      declaration: {
        eyebrow: '宣告',
        headline: ['作者寫下的，', '是一句相容條件。'],
        lead: '作者寫在 SKILL.md 裡的相容條件與允許的工具，REZICS 照原文記下，標成需要獨立驗證，不當成已經證實。',
        code: '# SKILL.md 開頭（示意）\ncompatibility: 適用於支援技能資料夾的代理',
        codeLabel: '一個示範技能寫在 SKILL.md 開頭的相容條件',
        caption: 'REZICS 照原文記下這一行，標記：需要獨立驗證。',
      },
      record: {
        eyebrow: '紀錄',
        headline: ['一筆紀錄，寫明八件事。'],
        lead: '紀錄針對技能的某一個版本，在某個條件下觀察到什麼，就記什麼。',
        rows: [
          { title: '任務', body: '拿它做了什麼事。' },
          { title: 'AI 代理', body: '用的是哪一個代理或用戶端。' },
          { title: '代理版本', body: '那個代理的哪一版。' },
          { title: '技能版本', body: '技能的哪一版。' },
          { title: '語言', body: '任務用的是哪種語言。' },
          { title: '日期', body: '哪一天觀察到的。' },
          { title: '方法', body: '怎麼測的，在什麼條件下。' },
          { title: '觀察', body: '看到了什麼結果。' },
        ],
      },
      rules: {
        eyebrow: '讀法',
        headline: ['讀紀錄的方法'],
        rows: [
          { title: '沒有紀錄，不等於不能用', body: '沒有人記錄過的組合，標成「沒有紀錄」，不會寫成不相容。' },
          {
            title: '舊紀錄帶著日期',
            body: '每筆紀錄都顯示日期與它對應的版本。AI 代理或技能改版後，舊紀錄不會冒充新版本的結果。',
          },
          { title: '結果相反，兩筆都留著', body: '兩筆紀錄結論不同時，兩筆都保留，各自附上方法，由你比較。' },
          {
            title: '代理也能記錄',
            body: '代理可以送出紀錄，但要標明自己是代理、由誰營運、用了什麼方法，經人審核才公開。',
          },
          { title: '撤回只撤自己那一筆', body: '一個來源撤回紀錄，只移除它自己的那一筆，其他人的紀錄不受影響。' },
        ],
      },
      opinions: {
        eyebrow: '評分與討論',
        headline: ['評分與留言，', '都停在它說的那一版。'],
        rows: [
          {
            title: '評分',
            body: '評分只屬於它評的那一版。新版本有自己的評分；跨版本的總分另外計算，並寫明算法。分數旁一律標出評分人數與分布，評分太少時不算平均。',
          },
          {
            title: '留言',
            body: '回報問題或分享用法時，留言記下當時的版本。技能更新之後，舊留言仍指著原來那一版，讀的人不會誤會它在說新版本。',
          },
        ],
      },
      statement: {
        text: '紀錄說的是發生過什麼，',
        muted:
          '不是安全保證。一筆成功的紀錄，只說明那一次、那個環境下的結果；技能裡的腳本會做什麼，請自己讀過再決定。',
      },
      end: {
        next: '看過紀錄，接著把它用起來。',
        closing: '先看誰用過，再決定要不要用。',
      },
    },
    use: {
      head: {
        headline: ['讀過，', '再交給你的 AI 代理。'],
        lede: '技能是寫給代理照著做的指令，有時還帶著能執行的腳本。在 Skill Hub 先讀過；決定要用，再拿走確切的那一版。',
      },
      steps: {
        eyebrow: '六個步驟',
        headline: ['從找到到用上，', '六個步驟。'],
        rows: [
          { title: '找到', body: '在目錄用描述搜尋，或從別人排好的清單裡挑。' },
          { title: '讀完', body: '打開技能頁面，讀 SKILL.md 全文，看它帶了哪些檔案、哪些能執行。' },
          { title: '看紀錄', body: '找找有沒有人在你用的 AI 代理與版本上留下紀錄，日期離現在多近。' },
          {
            title: '選一版並取得',
            body: '選定一個版本，下載它的資料夾，檔案和頁面上的雜湊值相同；也可以只複製 SKILL.md 的說明。放進代理讀取技能的位置，位置以代理自己的說明為準。',
          },
          {
            title: '鎖定套件',
            body: '技能宣告了它需要的套件，就能鎖定到確切的版本與檔案。安裝套件，不等於允許執行它的腳本。',
          },
          { title: '追蹤', body: '追蹤這個技能。新版本發布時，先讀變更，再決定要不要換。' },
        ],
      },
      agent: {
        eyebrow: 'API 與 MCP',
        headline: ['你的 AI 代理，', '也讀得到 Skill Hub。'],
        paragraphs: [
          '網頁上的每個動作，都有對應的 API 操作。代理可以透過 REZICS 的 API 或 MCP 伺服器搜尋技能、讀全文與檔案清單，拿到的和你在頁面上看到的相同。',
          '在 REZICS 的 API 與 MCP 裡，技能的文字一律當成資料。不論裡面寫了什麼指令，都不會因此替任何人取得權限。',
        ],
        link: '到開發者網站看 API 與 MCP',
      },
      later: {
        eyebrow: '之後的版本',
        headline: ['新版本來了，', '先看變更再決定。'],
        rows: [
          { title: '通知層級', body: '追蹤時選全部、精選或關閉，決定新版本怎麼通知你。' },
          { title: '先看變更', body: '每個新版本附上變更紀錄，也能和你手上那一版逐一對照檔案與雜湊值。' },
          { title: '留在原來那一版', body: '不想換，就繼續用原本那一版，它的頁面不會變成新版本。' },
          { title: '回報問題', body: '用的時候遇到問題，到技能的討論裡回報，寫上你用的版本與 AI 代理。' },
          {
            title: '檢舉',
            body: '發現技能做了說明以外的事，可以檢舉，不需要帳號。散布惡意程式違反 REZICS 的使用規範。',
          },
        ],
      },
      end: {
        next: '換你寫一個。',
        closing: '選定一版，交給你的代理。',
      },
    },
    publish: {
      head: {
        headline: ['一個資料夾，', '發布成一個身分。'],
        lede: 'Skill Hub 收的是照格式寫成的技能：一個資料夾，裡面一定有一份 SKILL.md。匯入之後，它有自己的身分、自己的頁面，和第一個版本。',
      },
      import: {
        eyebrow: '匯入',
        headline: ['匯入只保存，', '不執行。'],
        body: '資料夾經過這一步，成為一個有身分的技能，裡面的檔案一個也沒變。',
        pic: {
          src: 'slit',
          alt: '一張萊姆綠的紙中間割了一道切口，一條米白紙帶從上方穿進切口，再從紙的下緣穿出；底下露出一角芥黃的紙。',
        },
      },
      steps: {
        eyebrow: '六件事',
        headline: ['匯入時，', '每個位元組照原樣留下。'],
        rows: [
          { title: '照原樣保存', body: '每個檔案的每個位元組都存下來，路徑只能落在資料夾之內。' },
          { title: '什麼都不執行', body: '腳本存成檔案，沒有人執行它；SKILL.md 裡的指令，也沒有人照著做。' },
          { title: '檢查連結', body: 'SKILL.md 提到的本機檔案，資料夾裡找不到的，列成缺少的檔案。' },
          { title: '保留看不懂的欄位', body: '規格以外的欄位留在原處，另外列為未解析，不會被改寫成別的意思。' },
          {
            title: '不硬改成技能',
            body: '名稱和資料夾不一致，或少了描述，匯入就停止。隨便一個資料夾，不會被整理成技能。',
          },
          { title: '發布一個版本', body: '發布時固定每個檔案的雜湊值、授權與來源。之後再改，就是下一個版本。' },
        ],
      },
      limits: {
        eyebrow: '範圍',
        headline: ['收得下的範圍'],
        rows: [
          { title: '128 個檔案', body: '一次匯入的檔案上限。' },
          { title: '1 MiB', body: '所有檔案加起來的大小上限。' },
          { title: '64 KiB', body: 'SKILL.md 本身的大小上限。' },
          { title: '64 個字元', body: '名稱的長度上限，只用小寫字母、數字與連字號。' },
          { title: '1024 個字元', body: '描述的長度上限。' },
        ],
        after: '超出範圍或不合格式的資料夾，匯入會停下來，並告訴你原因。',
      },
      statement: {
        text: '描述是最先被讀到的一句。',
        muted:
          '目錄只顯示名稱與描述，AI 代理啟動時也只讀這兩樣；寫清楚它做什麼、什麼時候該用，人找得到，代理也挑得準。',
        rows: [
          {
            title: '寫得清楚',
            body: '把章節裡出場的人物整理成表，附上段落位置。需要建立角色表，或核對人物在哪一章出場時使用。',
          },
          { title: '寫得太少', body: '處理小說。' },
        ],
      },
      credits: {
        eyebrow: '署名與權利',
        headline: ['署名、權利與協作'],
        rows: [
          { title: '作者與維護者', body: '依角色列名，每個人都用自己的 REZICS 身分，別人可以追蹤。' },
          { title: '授權', body: '你宣告的授權記在每個版本上，附上宣告的人與時間。' },
          { title: '權利留在你手上', body: '上傳技能，智慧財產權仍屬於你。' },
          {
            title: 'AI 代理一起維護',
            body: '代理也能提出修改，寫明對象版本、變更、證據與方法，並表明自己是代理。經人審核後才套用，每次套用都有回執。',
          },
          { title: '撤回', body: '套用錯了可以撤回。撤回以補正的方式記錄，原本的歷史不會被改寫。' },
        ],
      },
      end: {
        next: '接著看 API Hub：AI 代理呼叫的公開 API，也有自己的索引。',
        closing: '你的技能，在 REZICS 有自己的身分。',
      },
    },
  },
} satisfies MiniSite<SkillsStrings>;

export default skills;
