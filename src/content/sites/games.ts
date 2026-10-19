// The games site (遊戲): every visible string of /games/ and its six inner pages.
// Design record: src/sites/games/SITE.md (section "v3"); sources for every claim:
// src/sites/games/facts.md. Example data (one fictional adventure game, its releases, versions
// and playthroughs) is always captioned 示意 on screen; it describes no real game. The one real
// work named is 《魔法禁書目錄》, text only, as an example of how relations are recorded.
import type { KindId, MiniSite } from '../schema';

export type Lang = 'zh' | 'ja' | 'en';
export type Platform = 'pc' | 'console' | 'handheld' | 'mobile';
export type Edition = 'std' | 'deluxe' | 'complete';

export interface Titled {
  title: string;
  body: string;
}

/** A section: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}

/** A large statement: the first half in ink, the second half muted. */
export interface Said {
  text: string;
  more: string;
  /** A sentence or two in body size under the statement. */
  note?: string;
}

/** One release of the example game, as the release filter shows it. */
export interface ExampleRelease {
  id: string;
  platform: Platform;
  edition: Edition;
  /** Shown inside the table cell when a cell holds more than one release (regions). */
  region?: string;
  langs: Lang[];
  /** A state instead of languages (announced, no date yet). */
  state?: string;
}

export type GamesStrings = {
  /** The line under every page's closing statement, above 前往 REZICS. */
  closingBody: string;
  /** Alternative text of the paper still-life photographs (public/images/sites/games/). */
  pictures: Record<'hero' | 'store' | 'library' | 'guides' | 'creators', string>;
  example: {
    langNames: Record<Lang, string>;
    platforms: Record<Platform, string>;
    editions: Record<Edition, string>;
    releases: ExampleRelease[];
  };
  landing: {
    hero: { headline: string; lede: string };
    releases: Head & { items: (Titled & { id: string })[]; caption: string; link: string };
    versions: Said;
    store: Head & { link: string };
    pages: Head & { lines: Record<string, string> };
    connections: Head & { tiles: { to: KindId; line: string }[] };
    closing: string;
  };
  releases: {
    hero: { headline: string; lead: string };
    filter: Head & {
      groups: { lang: string; platform: string };
      clear: string;
      none: string;
      result: string;
      resultNone: string;
      corner: string;
      caption: string;
    };
    states: Head & { items: Titled[] };
    languages: Head & { items: Titled[] };
    bundles: Head & { tiles: Titled[]; caption: string };
    requirements: Head & { tiles: Titled[] };
    offers: Said;
    closing: string;
  };
  store: {
    hero: { headline: string; lead: string };
    checkout: Head & { items: Titled[] };
    purchase: Head & { steps: Titled[] };
    keep: Head & { lead: string; more: string };
    privacy: Said;
    refuses: Head & { items: Titled[] };
    closing: string;
  };
  library: {
    hero: { headline: string; lead: string };
    status: Head & { items: Titled[] };
    slots: Head & { columns: [string, string, string]; rows: { slot: string; release: string; state: string }[]; caption: string };
    together: Head & { tiles: { to: KindId; name: string; at: string }[]; caption: string };
    playtime: Head & { items: Titled[]; note: string };
    takeout: Said;
    closing: string;
  };
  reviews: {
    hero: { headline: string; lead: string };
    versions: Head & { tiles: Titled[]; caption: string };
    who: Head & { items: Titled[] };
    targets: Head & { tiles: Titled[] };
    rules: Head & { items: Titled[] };
    talk: Said;
    closing: string;
  };
  guides: {
    hero: { headline: string; lead: string };
    fog: Head;
    guides: Head & { lead: string; more: string };
    rules: Head & { items: Titled[] };
    adaptations: Head & { lead: string; chain: { to: KindId; name: string; line: string; rel?: string }[]; note: string; caption: string };
    zone: Said;
    closing: string;
  };
  creators: {
    hero: { headline: string; lead: string };
    rights: Head & { items: Titled[] };
    ledger: Head & { rows: { label: string; op?: string; total?: boolean }[]; note: string; reserve: string; caption: string };
    name: Head & { tiles: { to?: KindId; name: string; role: string }[]; caption: string };
    home: Head & { lead: string; more: string };
    rules: Said;
    closing: string;
  };
};

const strings: GamesStrings = {
  closingBody: '找版本、記遊玩、寫評論，向獨立創作者買遊戲，都用同一個帳號。',
  pictures: {
    hero: '暖白的紙面上，一張大的藍色紙板，從它的一角扇形展開深淺不同的藍、紫與青綠色紙片。',
    store: '一張淺藍色的紙片，穿過藍色紙板上切開的一道縫，下半段輕輕捲起。',
    library: '藍色紙摺成的淺盒，盒面切出一排細縫，藍、淺藍、玫瑰色與綠色的紙片立在縫裡，最後一道縫空著。',
    guides: '一條藍色長紙摺成好幾折，前三折攤開，其餘的收成一疊，上面蓋著一張白紙。',
    creators: '一張藍色紙板摺成立著的小亭子，旁邊放著一張紫色和一張淺藍色的紙片。',
  },
  example: {
    langNames: { zh: '繁中', ja: '日文', en: '英文' },
    platforms: { pc: '電腦', console: '家用主機', handheld: '掌機', mobile: '手機' },
    editions: { std: '標準版', deluxe: '豪華版', complete: '完整版' },
    releases: [
      { id: 'pc-std', platform: 'pc', edition: 'std', langs: ['zh', 'ja', 'en'] },
      { id: 'pc-deluxe', platform: 'pc', edition: 'deluxe', langs: ['zh', 'ja', 'en'] },
      { id: 'console-std', platform: 'console', edition: 'std', langs: ['ja', 'en'] },
      { id: 'console-complete', platform: 'console', edition: 'complete', langs: ['zh', 'ja', 'en'] },
      { id: 'handheld-asia', platform: 'handheld', edition: 'std', region: '亞洲版', langs: ['zh', 'ja'] },
      { id: 'handheld-japan', platform: 'handheld', edition: 'std', region: '日本版', langs: ['ja'] },
      { id: 'handheld-complete', platform: 'handheld', edition: 'complete', langs: ['ja'] },
      { id: 'mobile-std', platform: 'mobile', edition: 'std', langs: [], state: '已公布' },
    ],
  },

  landing: {
    hero: {
      headline: '每一款遊戲，每一個版本，都記得清楚。',
      lede: '各平台的發行、版本與語言分開記錄，評分寫明是哪一版，攻略與 Wiki+ 掛在同一款遊戲上。你也能在這裡，向獨立創作者買下留得住的遊戲檔案。',
    },
    releases: {
      label: '發行',
      headline: '同一款遊戲的每一種發行，分開記錄。',
      lead: '電腦、家用主機、掌機與手機各有發行，地區版、豪華版與完整版也各算一筆。每一筆寫明自己的語言、需求與上架紀錄。',
      items: [
        { id: 'handheld-asia', title: '掌機版，亞洲版', body: '文字：繁中、日文。地區：亞洲。日本版另記一筆，文字只有日文。' },
        { id: 'pc-std', title: '電腦版，標準版', body: '文字與字幕：繁中、日文、英文。配音：日文。三種語言分開記錄。' },
        { id: 'console-complete', title: '家用主機版，完整版', body: '文字：繁中、日文、英文。內容：本體與全部擴充，各自保留頁面與評分。' },
        { id: 'mobile-std', title: '手機版，標準版', body: '語言：未知。狀態：已公布。資料還沒確認，就不拿其他平台的語言補上。' },
      ],
      caption: '示意：一款虛構冒險遊戲的四筆發行。',
      link: '看怎麼找出能玩的那一版',
    },
    versions: {
      text: '分數跟著版本走，下載次數不拿來排名；',
      more: '查不到的寫成「未知」而不是猜測。',
    },
    store: {
      label: '商店',
      headline: '買下的遊戲，檔案留在你手上。',
      lead: 'REZICS 的商店販售簽約獨立創作者的遊戲與視覺小說，沒有 DRM，也不需要啟動器。創作者保有著作權，結算單逐項列出每一筆扣除；玩家在同一頁看得到評分、討論與 Wiki+。',
      link: '看商店與購買的流程',
    },
    pages: {
      label: '六個頁面',
      headline: '六件事，各有一頁。',
      lines: {
        releases: '語言、平台與版本，綁在同一筆發行上篩選',
        store: '付一次，檔案隨時重新下載',
        library: '每一輪都記得是在哪個平台玩的',
        reviews: '每個分數寫明版本與給分的人群',
        guides: '照你的進度顯示，連到每一種改編',
        creators: '保有著作權，結算單逐項列出扣除',
      },
    },
    connections: {
      label: '相關的種類',
      headline: '和遊戲相連的五種東西',
      lead: '改編、原作與同一位創作者，把遊戲和其他種類連在一起。從原作小說追到遊戲，小說讀到哪、遊戲玩到哪，分開記。',
      tiles: [
        { to: 'visual-novels', line: '依語言、平台與涵蓋範圍挑發行' },
        { to: 'books', line: '遊戲的原作，與從遊戲衍生的小說' },
        { to: 'anime', line: '改編成動畫的遊戲，改編成遊戲的動畫' },
        { to: 'manga', line: '同一個故事的漫畫，連回遊戲' },
        { to: 'software', line: '引擎、製作工具與模組，用版本對上遊戲' },
      ],
    },
    closing: '下一款遊戲，先找對版本。',
  },

  releases: {
    hero: {
      headline: '找出能玩的那一版。',
      lead: '你要的語言和你手上的裝置，得出現在同一筆發行上才算數。REZICS 把每個平台、地區與版本分開記錄，篩選時一起比對。',
    },
    filter: {
      label: '篩選',
      headline: '條件綁在同一筆發行上。',
      lead: '選了繁中和掌機兩個條件，只有同時符合的發行會留下。別的版本有繁中、別的平台有掌機版，都不算數。',
      groups: { lang: '語言', platform: '平台' },
      clear: '清除條件',
      none: '沒有這個版本',
      result: '符合條件的發行：{count} 筆',
      resultNone: '沒有一筆發行同時符合這些條件。',
      corner: '平台／版本',
      caption: '示意：一款虛構冒險遊戲的發行。',
    },
    states: {
      label: '發行的狀態',
      headline: '從公布到下架，每一步分開記。',
      lead: '日期會變，紀錄不會被蓋掉。追蹤一款遊戲，就知道它走到哪一步。',
      items: [
        { title: '公布', body: '官方宣布這款遊戲或這個版本，附上出處。' },
        { title: '預定', body: '公布了發售日。預定的日期是一種說法，還不是上市。' },
        { title: '上市', body: '確定買得到、玩得到，附上確認的日期。' },
        { title: '延期', body: '日期改了，舊的日期仍留在紀錄裡。' },
        { title: '下架', body: '不再販售或停止提供，寫明從哪一天開始。' },
      ],
    },
    languages: {
      label: '語言',
      headline: '文字、配音、字幕，三種語言。',
      lead: '「有中文」可能只有字幕，也可能連配音都有。REZICS 把文字、配音與字幕的語言分開記錄。譯名也不代表有譯本：遊戲有了中文名字，不等於有中文版。',
      items: [
        { title: '官方中文', body: '由發行方提供，記在它實際出現的那一筆發行上。' },
        { title: '玩家中文化', body: '署名團隊，寫明依據的版本與涵蓋範圍，永遠不標成官方。' },
        { title: '後來加入的語言', body: '更新才加入的語言是新的語言版本，指回它的來源，不改寫原本的發行紀錄。' },
      ],
    },
    bundles: {
      label: '合輯與擴充',
      headline: '一筆發行，可能裝著好幾部作品。',
      lead: '完整版、合輯與擴充內容，各自保留身分。你買的是一筆發行，評分與討論仍屬於裡面的每一部作品。',
      tiles: [
        { title: '完整版', body: '收錄本體與全部擴充內容' },
        { title: '本體', body: '遊戲本身，有自己的評分' },
        { title: '擴充內容', body: '有自己的頁面，連回本體' },
        { title: '原聲帶', body: '一部音樂作品，列在作曲者名下' },
        { title: '重製版', body: '另一部作品，用關係連回原作' },
        { title: '模組', body: '寫明需要哪個遊戲版本' },
      ],
      caption: '示意：一筆完整版與它周邊的作品。移植到新平台，則是同一款遊戲的新發行。',
    },
    requirements: {
      label: '需求',
      headline: '需求，要寫明是誰說的。',
      lead: '同一款遊戲在同一台機器上，官方說法和實際結果可能不一樣。兩者並排，各自附上來源與日期。',
      tiles: [
        { title: '官方標示', body: '最低與建議需求，標明出處與適用的遊戲版本' },
        { title: '玩家實測', body: '什麼硬體、什麼設定、結果如何、哪一天測的' },
        { title: '還不知道', body: '未知、不相容與資料過期，是三種不同的狀態' },
      ],
    },
    offers: {
      text: '沒有資料的地方，',
      more: '寫的是「未知」兩個字。',
      note: '每家商店、每個地區的上架與價格，各是一筆有日期的紀錄，價格怎麼變也看得到。查不到的地方不會拿一家商店的價格代表全部。',
    },
    closing: '語言和裝置，對在同一筆發行上。',
  },

  store: {
    hero: {
      headline: '買一次，檔案留在你手上。',
      lead: '這裡的遊戲與視覺小說，來自與 REZICS 簽約的獨立創作者。沒有 DRM，不需要啟動器，買過的遊戲登入後隨時能重新下載。',
    },
    checkout: {
      label: '結帳之前',
      headline: '結帳之前，這八件事都寫在頁面上。',
      lead: '每一款遊戲的頁面都列出這些，付款之前就看得到。',
      items: [
        { title: '版本與語言', body: '你買的是哪一個版本，裡面有哪些語言。' },
        { title: '相容需求', body: '支援哪些平台，執行需要什麼條件。' },
        { title: '含稅價格', body: '付款之前，就看得到含稅的總價。' },
        { title: '賣方', body: '誰在賣，你的錢付給誰。' },
        { title: '授權', body: '你買到的是什麼樣的使用授權。' },
        { title: '退款條件', body: '什麼情況可以退款，要怎麼退。' },
        { title: '外部帳號', body: '遊戲若需要其他帳號或執行環境，購買前就寫明。' },
        { title: 'AI 使用聲明', body: '圖像、文字與翻譯有沒有用到 AI，由創作者聲明。' },
      ],
    },
    purchase: {
      label: '一次購買',
      headline: '從試玩到重新下載，一次購買的六步。',
      lead: '購買就在遊戲自己的頁面上，旁邊是它的評分、討論與 Wiki+。',
      steps: [
        { title: '試玩', body: '先玩試玩版，再決定' },
        { title: '付款', body: '一次付清，收據存進紀錄' },
        { title: '下載', body: '適合你平台的檔案' },
        { title: '更新', body: '修正版附上更新說明' },
        { title: '重新下載', body: '換了電腦，登入再下載' },
        { title: '下架以後', body: '買下的授權依然有效' },
      ],
    },
    keep: {
      label: '你留下的',
      headline: '你留下的三樣東西',
      lead: '沒有 DRM 的遊戲檔案，隨時重新下載；每一筆購買的收據，跟著你的購買紀錄；購買前寫明的使用授權，連同條款一起保存。',
      more: '沒有 DRM 不代表可以轉賣或散布，你拿到的是個人使用的授權。退款依頁面寫明的條件辦理，各地法律保障的消費者權利照樣適用。',
    },
    privacy: {
      text: '你買了哪款遊戲，',
      more: '不會讓創作者看見你的遊戲庫。',
      note: '創作者拿到的是處理帳務與客服需要的資訊。你的遊玩紀錄、清單與其他活動，不會因為一次購買就交給對方。',
    },
    refuses: {
      label: '不做的事',
      headline: '這家商店不做的事',
      items: [
        { title: '不要求啟動器', body: '玩你買的遊戲，不需要先安裝 REZICS 的程式。' },
        { title: '不加 DRM', body: 'REZICS 不在檔案上加任何啟用驗證。' },
        { title: '不賣成人分級', body: 'R18 與 R18G 的作品不在商店販售，換個標籤或拆成補丁也一樣。' },
        { title: '不讓任何人隨意上架', body: '商店裡的遊戲來自與 REZICS 簽約的創作者，每一款都先確認權利。' },
      ],
    },
    closing: '付款之前看得清楚，付款之後留得住。',
  },

  library: {
    hero: {
      headline: '你的遊戲庫，跨平台，也跨種類。',
      lead: '電腦、主機、掌機與手機上的遊戲，記在同一個地方。每一輪遊玩記得用的是哪個平台的哪一版，你讀的書、追的動畫也在旁邊。',
    },
    status: {
      label: '狀態',
      headline: '從想玩到破關，每個狀態分開記。',
      items: [
        { title: '想玩', body: '放進想玩，就會追蹤這款遊戲。你讀得懂的語言出了新版本，會收到通知。' },
        { title: '在玩', body: '記下現在玩到哪一章、用的是哪一版。討論與 Wiki+ 會依這個進度收起劇透。' },
        { title: '暫停', body: '先放著，不算放棄。進度留在原處，回來時從同一個地方接著玩。' },
        { title: '破關', body: '破關記在這一部作品上。完整版裡的擴充內容，各自算各自的。' },
        { title: '放棄', body: '不想玩了就標成放棄，紀錄仍然留著，哪天想重來，再開一輪。' },
      ],
    },
    slots: {
      label: '存檔',
      headline: '每一輪遊玩，是一個存檔。',
      lead: '同一款遊戲玩第二次，是新的一輪，不會蓋掉第一輪。每一輪記下平台、版本與進度。',
      columns: ['存檔', '平台與版本', '狀態'],
      rows: [
        { slot: '第一輪', release: '掌機版，亞洲版', state: '破關' },
        { slot: '第二輪', release: '電腦版，1.2 版', state: '在玩，第五章' },
        { slot: '第三輪', release: '家用主機版，完整版', state: '暫停，在擴充內容' },
      ],
      caption: '示意：擁有哪個版本另外記錄，買了不等於玩過。',
    },
    together: {
      label: '同一個庫',
      headline: '書、動畫、漫畫和遊戲，同一個庫。',
      lead: '每一種東西用自己的單位記進度。清單也能混著放：一份暑假要玩的清單，可以同時有遊戲、它的原作小說和改編動畫，排好順序、寫上註記，再整份匯出。',
      tiles: [
        { to: 'games', name: '遊戲', at: '第五章' },
        { to: 'books', name: '小說', at: '第三冊' },
        { to: 'anime', name: '動畫', at: '第八集' },
        { to: 'manga', name: '漫畫', at: '第四十二話' },
        { to: 'visual-novels', name: '視覺小說', at: '第二條路線' },
      ],
      caption: '示意：一個人的庫裡，五種東西各用自己的單位。',
    },
    playtime: {
      label: '遊玩時間',
      headline: '通關要多久，分平台、分玩法算。',
      lead: '想知道今晚的時間夠不夠開一款遊戲，需要可信的時間。REZICS 只用玩家自願提供的紀錄來算。',
      items: [
        { title: '分平台', body: '電腦和掌機的時間分開算，沒寫平台的紀錄自成一組。' },
        { title: '分玩法', body: '只打主線和全部收集，是兩種不同的計算。' },
        { title: '只算破關', body: '沒有破關或沒填時間的紀錄，不算進平均。' },
        { title: '附上筆數', body: '平均數旁邊附上中位數所在的區間，以及紀錄的筆數。' },
      ],
      note: '你的遊玩時間預設不公開。只有你選擇貢獻，它才會進入統計，而且公開的只有彙總結果。',
    },
    takeout: {
      text: '遊戲庫是你的，',
      more: '隨時帶得走。',
      note: '匯出不收費，從別處匯進來的紀錄照原樣保留。帳號登不進去時，也有管道申請匯出。',
    },
    closing: '玩過的每一輪，都記在你自己的庫裡。',
  },

  reviews: {
    hero: {
      headline: '先說清楚評的是哪一版，再給分。',
      lead: '一款遊戲上市後會一直更新。1.0 版的分數不該壓著 2.0 版，一個社群的口味也不該冒充所有人。所以每個分數都寫明版本與人群。',
    },
    versions: {
      label: '版本',
      headline: '每個版本，自己的分數。',
      lead: '你的評分綁在你玩的那一版。要看跨版本的總分，它會是另一個數字，並寫明怎麼算。',
      tiles: [
        { title: '1.0 版', body: '上市當天的版本' },
        { title: '1.1 版', body: '修正存檔問題的更新' },
        { title: '1.2 版', body: '加入新的關卡' },
        { title: '2.0 版', body: '大幅改版' },
        { title: '完整版', body: '收錄全部擴充內容的發行' },
      ],
      caption: '示意：一款虛構遊戲的版本。',
    },
    who: {
      label: '人群',
      headline: '分數背後是哪一群人',
      lead: '全站、你加入的社群、評分最多的社群，分數可以並排看。近期和全部是兩個問題，不會混成一個數字。',
      items: [
        { title: '筆數與分布', body: '每個分數都附上筆數與分布。' },
        { title: '人數還不夠', body: '評分的人還不夠多時，只顯示筆數與分布，不算平均。' },
        { title: '匯入的分數', body: '從別的網站匯入的分數另外標示，不混進 REZICS 的評分。' },
      ],
    },
    targets: {
      label: '評論的對象',
      headline: '評的是故事、翻譯，還是製作。',
      lead: '一篇評論先寫明對象。故事寫得好、中文化翻得差，可以分開說。評論也可以只寫文字，不打分數。',
      tiles: [
        { title: '故事', body: '劇情與角色' },
        { title: '翻譯', body: '某個語言版本的翻譯品質' },
        { title: '製作', body: '玩法、畫面、音樂與技術表現' },
        { title: '這一版', body: '某個平台、某個版本的實際表現' },
        { title: '角色在這個版本', body: '不影響角色本身的分數' },
      ],
    },
    rules: {
      label: '排名',
      headline: '排名怎麼來，寫在明處。',
      items: [
        { title: '不計下載次數', body: 'REZICS 不記錄下載次數，所以不拿它排序，也不顯示。' },
        { title: '推薦附上理由', body: 'Realm 推薦一款遊戲時，連到做出這個決定的紀錄。' },
        { title: '熱度不等於正確', body: '評分多寡只影響排序，不會改變一款遊戲的分類或資料。' },
        { title: '劇透另外標記', body: '社群可以投票標記劇透，這和作者自己的警告分開計算。' },
      ],
    },
    talk: {
      text: '討論、評論、修正資料，',
      more: '三種對話分開放。',
      note: '閒聊攻略、回應一篇評論、指出資料有誤，各有自己的地方。從一處換到另一處，你選的版本與劇透進度都跟著走。',
    },
    closing: '每個分數，都有版本與人群。',
  },

  guides: {
    hero: {
      headline: '玩到哪裡，就看到哪裡。',
      lead: '角色、地點、關卡與攻略，都連回同一款遊戲。Wiki+ 照你記下的進度顯示，後面的劇透先蓋著。',
    },
    fog: {
      label: '劇透',
      headline: '還沒玩到的地方，先蓋起來。',
      lead: '你記下的進度之前，角色、地點與事件全都看得到；之後的先蓋起來，想看也能一次全部打開。沒有登入的訪客從第一章開始看。',
    },
    guides: {
      label: '攻略',
      headline: '攻略寫明適用的版本。',
      lead: '同一個關卡在 1.0 版和 2.0 版，打法可能完全不同。攻略標明它適用的遊戲版本與平台，改版之後，讀者一看就知道這篇是寫給哪一版的。',
      more: '社群整理的模組合集，也寫明對應的遊戲版本，以及有沒有檢查過相容性。每一筆修改都有紀錄：看得到誰改了什麼，可以比對兩個版本，也可以還原。',
    },
    rules: {
      label: 'Wiki+',
      headline: 'Wiki+ 的五條規則',
      items: [
        { title: '一筆資料，到處相同', body: '角色的資訊框和篩選、清單讀的是同一筆資料。在一個地方改對，每個地方都跟著對。' },
        { title: 'AI 代理提出，人來審核', body: '代理可以附上出處，提出新的事實。代理寫的內容沒有經過人審核，不會出現在讀者面前。' },
        { title: '同一個角色，只有一頁', body: '出現在遊戲、小說和動畫裡的同一個角色只有一頁。配音的人連同角色與作品一起列名。' },
        { title: '從劇本整理', body: '用常見視覺小說引擎寫成的遊戲，持有劇本的人可以在自己的電腦上用本機工具組，逐段整理出人物、地點與事件，再送出提案。劇本全文留在持有者的電腦上。' },
        { title: '整份帶得走', body: 'Wiki 的內容與修改紀錄都能匯出。' },
      ],
    },
    adaptations: {
      label: '改編',
      headline: '從原作到遊戲，一條關係接一條。',
      lead: '例如《魔法禁書目錄》：鎌池和馬的輕小說，有漫畫、三季電視動畫與一部電影，也有格鬥遊戲、視覺小說與手機角色扮演遊戲。在 REZICS，它們各是一部作品，用「改編自」連回原作，同一個角色在每一部裡都是同一個身分。',
      chain: [
        { to: 'books', name: '輕小說', line: '原作，正篇、《新約》與《創約》' },
        { to: 'manga', name: '漫畫', line: '2007 年起連載', rel: '改編自' },
        { to: 'anime', name: '動畫', line: '三季電視動畫與一部電影', rel: '改編自' },
        { to: 'visual-novels', name: '視覺小說', line: '2013 年的遊戲', rel: '改編自' },
        { to: 'games', name: '遊戲', line: '格鬥遊戲與手機角色扮演遊戲', rel: '改編自' },
      ],
      note: '出版順序和推薦的閱讀、遊玩順序分開記錄。想照故事的時間線，從最早的事件玩起，也排得出來。',
      caption: '以《魔法禁書目錄》為例，說明作品之間的關係怎麼記錄。',
    },
    zone: {
      text: '一款遊戲的社群，',
      more: '可以有自己的網站。',
      note: 'Realm 是遊戲的社群，有成員、規則與討論。Zone 是社群自己架的網站：自訂路徑、導覽與外觀，攻略與 Wiki+ 放在裡面，角色和遊戲的資料直接取自 REZICS 的目錄。',
    },
    closing: '玩到哪裡看到哪裡，故事連到每一種改編。',
  },

  creators: {
    hero: {
      headline: '發行你的遊戲，著作權留在你身上。',
      lead: 'REZICS 與獨立創作者簽約，代為發行遊戲與視覺小說。玩家買到沒有 DRM 的檔案與後續更新；你拿到逐項列明的結算單，以及一個連起所有作品的身分。',
    },
    rights: {
      label: '權利',
      headline: '你保留的，和你授權的',
      items: [
        { title: '著作權', body: '遊戲仍然是你的。REZICS 取得非專屬的授權，在約定的期間與地區代管、販售並交付檔案。' },
        { title: '另外同意的事', body: '翻譯、改編、重大修改、新的版本，以及拿作品訓練 AI，都需要你另外同意。' },
        { title: '授權宣告', body: '你為作品宣告的授權，連同版本、範圍與宣告的時間一起記錄。' },
        { title: '合約結束', body: '只停止新的銷售。已經發生的分潤，以及玩家手上的授權，都不受影響。' },
      ],
    },
    ledger: {
      label: '結算單',
      headline: '結算單上，一筆一筆算給你看。',
      rows: [
        { label: '玩家付的金額' },
        { label: '代收的稅金', op: '減' },
        { label: '金流與代收服務的手續費', op: '減' },
        { label: '退款與退單', op: '減' },
        { label: '淨收入', op: '等於', total: true },
        { label: '你的分潤' },
      ],
      note: '同一筆不會扣兩次。伺服器與代管、薪資、行銷，以及 REZICS 自己的所得稅，都不從你的收入裡扣。',
      reserve: '如果需要保留款，會寫明依據、上限與釋出的日期。',
      caption: '結算單也列出銷售地區與調整項目。',
    },
    name: {
      label: '一個名字',
      headline: '一個名字，連起你做過的每一樣東西。',
      lead: '你開發的遊戲、寫的小說、作曲的原聲帶，或參與配音的動畫，都掛在同一個身分下。玩家追蹤你，就看得到你的新作與公告。',
      tiles: [
        { to: 'games', name: '遊戲', role: '開發' },
        { to: 'books', name: '小說', role: '作者' },
        { name: '原聲帶', role: '作曲' },
        { to: 'anime', name: '動畫', role: '配音' },
      ],
      caption: '製作人員名單上的每個名字，都連到這樣的作品集。',
    },
    home: {
      label: '社群與網站',
      headline: '發行之後，遊戲有自己的社群與網站。',
      lead: '為遊戲開一個 Realm 讓玩家討論，再架一個 Zone 當官方網站。公告、發行紀錄與更新說明直接寫進目錄，追蹤你遊戲的玩家依自己的語言收到通知。',
      more: '新版本上市前，備好發行資料包：圖片、說明與時間表，媒體與玩家都能引用。你也可以用本機工具組讀自己的劇本，整理出人物與事件，建起遊戲的 Wiki+；劇本全文不會送到 REZICS。',
    },
    rules: {
      text: '賣之前，',
      more: '先寫明白。',
      note: '試玩、描述、截圖與相容資訊都必須準確。遊戲若需要外部帳號或執行環境，購買前要寫明。AI 的使用情形照實聲明，成人分級的作品不能上架。',
    },
    closing: '作品是你的，帳也算得清楚。',
  },
};

export default {
  id: 'games',
  base: '/games/',
  name: '遊戲',
  theme: { kind: 'games' },
  next: 'software',
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: 'REZICS 遊戲：目錄、商店與遊戲庫',
        description:
          '每款遊戲在 REZICS 只有一個頁面，各平台與版本分開記錄。在這裡找出能在你的裝置上、用你的語言玩的那一版，記下每一輪遊玩，也向獨立創作者買下能留著的檔案。',
      },
    },
    {
      slug: 'releases',
      label: '平台與版本',
      meta: {
        title: '平台與版本：找出能玩的那一版',
        description:
          '同一款遊戲的電腦、家用主機、掌機與手機版，地區版、豪華版與完整版，在 REZICS 各有一筆發行紀錄。語言、需求與上架資訊分開寫，篩選條件綁在同一筆發行上。',
      },
    },
    {
      slug: 'store',
      label: '商店',
      meta: {
        title: 'REZICS 商店：買下就能留著的遊戲',
        description:
          'REZICS 為簽約的獨立創作者發行遊戲與視覺小說：沒有 DRM，不需要啟動器，一次購買後隨時重新下載。結帳前看得到版本、語言、需求、含稅價格與退款條件。',
      },
    },
    {
      slug: 'library',
      label: '遊戲庫',
      meta: {
        title: '遊戲庫：每一輪遊玩都記得',
        description:
          '把想玩、在玩、暫停、破關與放棄的遊戲放進同一個遊戲庫，每一輪遊玩記下平台與版本。書、動畫與漫畫也在同一份紀錄裡，匯出不收費，隨時帶走。',
      },
    },
    {
      slug: 'reviews',
      label: '評分與評論',
      meta: {
        title: '遊戲評分與評論：寫明是哪一版',
        description:
          'REZICS 的遊戲評分寫明版本與給分的人群，附上筆數與分布。評論可以只寫文字，評故事、翻譯或製作各自分開，下載次數也不拿來排名。',
      },
    },
    {
      slug: 'guides',
      label: '攻略與 Wiki+',
      meta: {
        title: '攻略、Wiki+ 與改編',
        description:
          '遊戲的攻略、角色與地點寫在 Wiki+，照你的進度收起劇透，每一筆修改都有紀錄。改編成小說、動畫與漫畫的作品連回同一款遊戲，社群也能架起自己的網站。',
      },
    },
    {
      slug: 'creators',
      label: '創作者',
      meta: {
        title: '創作者：在 REZICS 發行你的遊戲',
        description:
          '獨立創作者透過 REZICS 發行遊戲與視覺小說：保有著作權，提供沒有 DRM 的檔案與更新，結算單逐項列出稅金、手續費與退款。同一個身分連起你的遊戲、小說與音樂。',
      },
    },
  ],
  strings,
} satisfies MiniSite<GamesStrings>;
