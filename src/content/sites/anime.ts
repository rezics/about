// The 動畫 site: every visible string of /anime/ and its six inner pages, in the v3 parts (hero,
// sections, tile masonry, photo rows, statements, facts lists, closing). The plan is in
// src/sites/anime/SITE.md under "v3"; claims and sources in src/sites/anime/facts.md. Example
// data is generic and marked 示意; the one real work named is 《魔法禁書目錄》, text only
// (.temp/sites/EXAMPLE-WORK.md).
import type { KindId, MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'anime')!;

/** A title and its line: facts rows, tiles. */
export interface Row {
  title: string;
  body: string;
}
/** A still-life from the site's paper series (public/images/sites/anime/<src>-<w>.avif|webp). */
export interface Photo {
  src: 'hero' | 'weeks' | 'covered' | 'threads' | 'sources';
  alt: string;
}
/** An inner page's opening: the h1 and its line. */
export interface Head {
  headline: string;
  lede: string;
}
/** A section: eyebrow in columns 1 to 3, the h2, a lead. */
export interface Section {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** Large serif: `text`, then `muted` in muted ink, and an optional note under it. */
export interface Statement {
  text: string;
  muted: string;
  note?: string;
}

export type AnimeStrings = {
  common: {
    /** The closing statement above 「前往 REZICS」 on every page. */
    closing: string;
    /** Eyebrow of the section that leads to the next pages. */
    onward: string;
    /** Caption under generic example data. */
    example: string;
  };
  landing: {
    hero: Head & { photo: Photo };
    pages: Section & { lines: { slug: string; line: string }[] };
    schedule: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    next: Statement;
    spoilers: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    parts: Section & { notes: Partial<Record<PartId, string>> };
    neighbours: Section & { tiles: { to: KindId; label: string }[] };
  };
  seasons: {
    head: Head;
    marks: Section & { rows: Row[] };
    zones: { eyebrow: string; headline: string; body: string[]; photo: Photo };
    known: Section & { rows: Row[] };
    years: Section;
    /** One line that previews the next page. */
    next: string;
  };
  tracking: {
    head: Head;
    statuses: Section & { rows: Row[] };
    seasons: Section & { tiles: Row[] };
    rewatch: Section;
    lists: Statement;
    next: string;
  };
  discussion: {
    head: Head;
    spoiler: { eyebrow: string; headline: string; body: string; photo: Photo };
    position: Section & { rows: Row[] };
    conversations: Section & { rows: Row[] };
    spaces: Section & { tiles: Row[] };
    unseen: Statement;
    next: string;
  };
  ratings: {
    head: Head;
    anatomy: Section & { rows: Row[] };
    episodes: Statement;
    targets: Section & { rows: Row[] };
    lists: Section & { tiles: string[] };
    next: string;
  };
  credits: {
    head: Head;
    record: Section & { rows: Row[] };
    voice: { eyebrow: string; headline: string; body: string; photo: Photo };
    studio: Section;
    next: string;
  };
  adaptations: {
    head: Head;
    example: { eyebrow: string; headline: string; body: string; photo: Photo };
    /** Generic family: each tile in the colour of its kind (null: a relation still to confirm). */
    family: Section & { tiles: { kind: KindId | null; relation: string; name: string }[] };
    scoped: Section;
    relations: Section & { rows: Row[] };
    orders: Statement;
    next: string;
  };
};

const site: MiniSite<AnimeStrings> = {
  id: 'anime',
  base: '/anime/',
  name: kind.name,
  theme: { kind: 'anime' },
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: '動畫：日程、進度、討論與原作',
        description:
          '在 REZICS 追動畫，每一集的播出時間排進日程，看完一集就記上一筆。每一集各有討論與評分，聲優、製作公司和原作也都連在同一部作品上。',
      },
    },
    {
      slug: 'seasons',
      label: '季度與播出',
      meta: {
        title: '動畫季度與播出日程',
        description:
          '動畫一年分四季開播。REZICS 把每一季的新番與各集播出時間排成一張表，照你的時區顯示；只知道日期就只寫日期，提醒也能匯出到行事曆。',
      },
    },
    {
      slug: 'tracking',
      label: '追蹤進度',
      meta: {
        title: '動畫進度：一集一集記',
        description:
          '在 REZICS 記動畫進度：想看、在看、看完、暫停、棄番五種狀態，看完一集記一集，下一集跨季也找得到。重看另記一次，清單可以匯入，也能整份匯出。',
      },
    },
    {
      slug: 'discussion',
      label: '每集討論',
      meta: {
        title: '動畫討論：每一集一串',
        description:
          '在 REZICS，每一集動畫都有自己的討論串。標了暴雷的內容先遮住，要看再自己點開；Wiki+ 依你看到的集數顯示，社群也能用 Zone 架起自己的動畫網站。',
      },
    },
    {
      slug: 'ratings',
      label: '評分與清單',
      meta: {
        title: '動畫評分、評論與清單',
        description:
          'REZICS 的每個分數，都寫明評的是什麼、用什麼尺度、多少人評、是哪一群人。整部與單集分開計分，評論不一定要打分數，清單可以排序、加註與匯出。',
      },
    },
    {
      slug: 'credits',
      label: '製作與演出',
      meta: {
        title: '動畫製作人員與聲優',
        description:
          '在 REZICS，導演、腳本、製作公司與聲優各有一個身分。每筆署名寫明職務與作品，配音同時連到角色；追蹤一個人或一家公司，新作品公布時就會知道。',
      },
    },
    {
      slug: 'adaptations',
      label: '原作與改編',
      meta: {
        title: '動畫的原作與改編',
        description:
          '在 REZICS，動畫和它的原作小說、漫畫、續季與改編遊戲各有身分，用關係連起來。動畫的進度和原作的進度分開算，兩邊不同的設定也各自標明出處。',
      },
    },
  ],
  strings: {
    common: {
      closing: '這一季追的每一部，都排進你自己的日程。',
      onward: '接著看',
      example: '示意。',
    },
    landing: {
      hero: {
        headline: '一集一集，從開播追到完結。',
        lede: '每一季的集數與播出時間排成日程，照你的時區顯示。看完一集就記一集；聲優、製作公司與原作，都連在這部動畫上。',
        photo: {
          src: 'hero',
          alt: '一條玫瑰色的長紙帶摺成十二面，立在暖白的紙上，末端壓著一張炭黑與一張灰紫的紙。',
        },
      },
      pages: {
        eyebrow: '六頁',
        headline: '從播出表走到原作；一部動畫的六個面向，各有一頁。',
        lines: [
          { slug: 'seasons', line: '每一季的播出表，照你的時區' },
          { slug: 'tracking', line: '下一集跨季也找得到' },
          { slug: 'discussion', line: '沒看到的劇情先遮住' },
          { slug: 'ratings', line: '單集和整部，分開計分' },
          { slug: 'credits', line: '每個名字一個身分' },
          { slug: 'adaptations', line: '原作、續季與外傳，連成一張關係圖' },
        ],
      },
      schedule: {
        eyebrow: '播出日程',
        headline: '深夜一點的首播，照你那裡的時鐘排。',
        body: '日本的播出表把深夜寫成「週二 25:00」，指的是週三凌晨一點。REZICS 把它換成你所在時區的時間；來源只給了日期，就只寫日期。',
        link: '季度與播出日程',
        photo: {
          src: 'weeks',
          alt: '玫瑰色的窄紙條排成四行，像一週一週的日程；其中一條是灰紫色，一處空著。',
        },
      },
      next: { text: '下一集是哪一集，', muted: '跨了季也找得到，不必回想。' },
      spoilers: {
        eyebrow: '每集討論',
        headline: '每一集一串討論，沒看到的先遮住。',
        body: '討論串掛在每一集上。比你進度新的劇情先遮起來，要看再自己點開；Wiki+ 預設也只顯示到你看過的那一集。',
        link: '暴雷線怎麼畫',
        photo: {
          src: 'covered',
          alt: '一條摺成數面的玫瑰色紙帶平放著，後段被一張邊角微微翻起的炭黑紙蓋住。',
        },
      },
      parts: {
        eyebrow: '八個部件',
        headline: '動畫用到的八個部件。',
        lead: '書庫、漫畫和遊戲用的都是同一套部件。動畫挑了其中八個，把日程放在身分旁邊。',
        notes: {
          identity: '中文、日文與英文的片名，都是同一部動畫的名字；續季和電影各有自己的身分。',
          schedule: '開播日、每一集的播出時間、延期與停播，排在同一份日程。',
          credits: '導演、腳本與製作公司各記職務，配音的那一筆連著聲優和角色。',
          relations: '原作、續季、外傳與重製，各自標明是哪一種關係，從原作那頁也走得回來。',
          progress: '看到第幾集、追上播出沒有、下一集是哪集，分開記。',
          ratings: '整部和每一集各有分數，旁邊寫著人數，也寫著是哪一群人評的。',
          discussion: '每一集一個討論串；比你進度新的劇情，要你自己點開。',
          wiki: 'Wiki+ 的每筆事實都注明出自哪一集，你看到哪一集，就讀到哪一集。',
        },
      },
      neighbours: {
        eyebrow: '鄰居',
        headline: '原作與改編，各在自己的地方。',
        lead: '原作可能是小說、漫畫或視覺小說，動畫也可能再改編成遊戲。每一部都有自己的頁面，關係把它們接在一起；同一位聲優，在每一種裡也都是同一個人。',
        tiles: [
          { to: 'books', label: '小說原作' },
          { to: 'manga', label: '漫畫原作與漫畫版' },
          { to: 'visual-novels', label: '改編自視覺小說' },
          { to: 'games', label: '改編遊戲與共同的聲優' },
        ],
      },
    },
    seasons: {
      head: {
        headline: '一年四季，每季一張播出表。',
        lede: '動畫多半在一月、四月、七月和十月開播。你追的那幾部，從開播日到每一集的時間，都排在同一張表上。',
      },
      marks: {
        eyebrow: '五種記號',
        headline: '公布、定檔、能看、延期與取消，是五件不同的事。',
        rows: [
          { title: '公布', body: '消息出來了，日期還沒定。' },
          { title: '定檔', body: '有了播出日期；知道時間的，連時間也寫上。' },
          { title: '能看', body: '確認在哪個地區、哪個平台，用哪種語言看得到。' },
          { title: '延期', body: '原定的日期改了，改動的紀錄留著，查得到。' },
          { title: '取消', body: '不播了，也照實標出，不會悄悄消失。' },
        ],
      },
      zones: {
        eyebrow: '你的時區',
        headline: '同一集的播出時間，換到你的時區。',
        body: [
          '播出時間依你所在的時區顯示，同一集在不同的地方，是不同的日子與時刻。',
          '日本播出表上的「週二 25:00」是週三凌晨一點；換到台北是週三午夜零點，換到洛杉磯是週二上午。',
        ],
        photo: {
          src: 'weeks',
          alt: '玫瑰色的窄紙條排成四行，像一週一週的日程；其中一條是灰紫色，一處空著。',
        },
      },
      known: {
        eyebrow: '只寫知道的事',
        headline: '日期、時間與看不看得到，各自標明。',
        rows: [
          {
            title: '時間不明，就不寫時間',
            body: '來源只給了日期，表上就只放日期，排進那一天最前面的「時間未定」，不替它編一個時間。',
          },
          {
            title: '播出不等於看得到',
            body: '知道哪天播，不代表你那裡看得到。每個地區、每個平台有沒有字幕、有沒有配音，分開標明；不知道的，就標成不知道。',
          },
          {
            title: '提醒與行事曆',
            body: '追蹤一部動畫，可以在你選的時間收到提醒，播出表也能匯出成行事曆檔。來源改了時間，你的提醒會先標出來，等你決定要不要跟著改。',
          },
        ],
      },
      years: {
        eyebrow: '按年份',
        headline: '按年份瀏覽，一路翻到最後一部。',
        lead: '選一個年份，目錄裡那一年開播的動畫都會列出，可以一直往下翻。總數算完之前，標的是「至少」多少部。',
      },
      next: '追上了和看完了，是兩回事。',
    },
    tracking: {
      head: {
        headline: '每看完一集，進度就往前一集。',
        lede: '在看的動畫，一集一集記。追上你看得到的集數、看完所有已播出的集數、整部完結，是三件不同的事，REZICS 分開標示。',
      },
      statuses: {
        eyebrow: '五種狀態',
        headline: '想看、在看、看完、暫停與棄番，各做各的事。',
        lead: '私人的觀看紀錄保持私人，除非你自己選擇分享。',
        rows: [
          { title: '想看', body: '先放進清單。之後有新消息，會通知你。' },
          { title: '在看', body: '記到第幾集；新的一集播出，也會通知你。' },
          { title: '看完', body: '整部看完。這部作品的 Wiki+，從此全部對你顯示。' },
          { title: '暫停', body: '先停下來，進度留在原地。' },
          { title: '棄番', body: '不看了。紀錄還在，哪天想回來也可以。' },
        ],
      },
      seasons: {
        eyebrow: '跨季',
        headline: '下一集，跨季也找得到。',
        lead: '第一季、第二季和特別篇排成一條。正篇看完才算完結；特別篇這類額外內容，看不看都不影響完結。',
        tiles: [
          { title: '第一季', body: '十二集看完，下一集跳到第二季的開頭' },
          { title: '第二季', body: '播到第六集，你也看到第六集，已經追上' },
          { title: '特別篇', body: '可以留到最後，不擋完結' },
        ],
      },
      rewatch: {
        eyebrow: '重看',
        headline: '重看一次，是新的一次。',
        lead: '第二次從頭看，另外記一筆，第一次的完結日期不會被蓋掉。只記得是哪一年看的，就只寫年份。',
      },
      lists: {
        text: '清單是你的，隨時帶得走：',
        muted: '別處整理的清單匯得進來，這裡的狀態、進度與評分，也能整份匯出。',
      },
      next: '看完第八集，就去第八集的討論串。',
    },
    discussion: {
      head: {
        headline: '看完這一集，就聊這一集。',
        lede: '討論串掛在每一集上，不必在整部作品的大串裡翻找。讀別人的討論，不用先加入任何社群。',
      },
      spoiler: {
        eyebrow: '暴雷線',
        headline: '你看到第幾集，暴雷線就畫在第幾集。',
        body: '標了暴雷的內容先遮起來，要你自己點開才顯示。點開只是你自己要看，不算替它投下暴雷票。',
        photo: {
          src: 'covered',
          alt: '一條摺成數面的玫瑰色紙帶平放著，後段被一張邊角微微翻起的炭黑紙蓋住。',
        },
      },
      position: {
        eyebrow: '你的位置',
        headline: '暴雷位置由你決定，換頁也跟著走。',
        rows: [
          { title: '位置由你決定', body: '登入之後，Wiki+ 預設顯示到你看完的最後一集。你也可以自己選一集，或者全部打開。' },
          { title: '沒登入也不暴雷', body: '沒有登入的訪客，看到的內容停在第一個劇情揭露之前。' },
          { title: '換頁也記得', body: '從討論走到評論，再走到 Wiki+，你選好的版本和暴雷位置都跟著走。' },
        ],
      },
      conversations: {
        eyebrow: '對話',
        headline: '三種對話，分開放。',
        lead: '每一則發言看得出屬於哪一種對話。',
        rows: [
          { title: '同好討論', body: '聊劇情、聊角色、猜下一集會怎麼走。' },
          { title: '評論的回應', body: '針對某一篇評論的往來，留在那篇評論底下。' },
          { title: '資料修正', body: '播出日期或聲優標錯了，就在修正提案底下討論，附上出處。' },
        ],
      },
      spaces: {
        eyebrow: '社群',
        headline: '社群聚在一起，也能有自己的網站。',
        lead: 'Zone 上的資訊框，讀的就是作品頁上的同一筆事實。',
        tiles: [
          { title: 'Realm', body: '社群本身，有成員、規則與管理' },
          { title: 'Zone', body: '社群的網站：角色頁、集數指南、時間線與關係圖，網址由社群安排' },
        ],
      },
      unseen: { text: '沒看到的，', muted: '不必先知道。' },
      next: '故事和製作，可以分開評。',
    },
    ratings: {
      head: {
        headline: '每個分數，都附上題目與評分的人。',
        lede: '同一部動畫，可以問故事好不好，也可以問這一集的作畫如何。REZICS 把題目、尺度、人數和評分的群體放在分數旁邊，不同的題目不會混在一起算。',
      },
      anatomy: {
        eyebrow: '一個分數',
        headline: '一個分數的五個部分。',
        rows: [
          { title: '題目', body: '評的是整部、這一集，還是某一集裡的某個角色。' },
          { title: '尺度', body: '用的是幾分制，直接寫在分數旁。' },
          { title: '人數', body: '多少人評過。人數還不夠時，只給人數和分布，先不給平均。' },
          { title: '分布', body: '每一分各有多少人，看得出意見是集中還是分散。' },
          { title: '群體', body: '全站、你加入的社群，或評過這部的其他社群，可以切換比較。' },
        ],
      },
      episodes: {
        text: '單集是單集，',
        muted: '整部是整部。',
        note: '每一集的分數各自成立；整部的分數，只來自評整部的人。真要合計，會另外標明算法，以及涵蓋了幾集。',
      },
      targets: {
        eyebrow: '評論',
        headline: '評論寫明在評哪一部分。',
        lead: '寫評論，不一定要打分數。',
        rows: [
          { title: '故事', body: '劇情、角色與結局。' },
          { title: '製作', body: '作畫、音樂與演出。' },
          { title: '翻譯', body: '某個語言版本的字幕或配音。' },
          { title: '這一集', body: '只談單獨一集，評論就留在那一集。' },
          { title: '某一集裡的角色', body: '「這個角色在這一集表現如何」，是另一個題目，有自己的分數。' },
        ],
      },
      lists: {
        eyebrow: '清單',
        headline: '清單照你的順序排。',
        lead: '清單可以放動畫，也可以放原作小說、漫畫與遊戲。每一項都能加上註解，順序由你決定，也能整份匯出。追蹤別人的清單，有新增項目時會通知你。',
        tiles: ['入坑順序', '這一季在看', '週末一次看完', '原作與動畫對照'],
      },
      next: '導演、製作公司和聲優，各自連到自己的作品。',
    },
    credits: {
      head: {
        headline: '片尾名單上的每個名字，都能點開。',
        lede: '導演、腳本、作畫監督、製作公司與聲優，在 REZICS 各有一個身分。點開一個名字，就看到他參與過的每一部作品，以及在每一部裡做了什麼。',
      },
      record: {
        eyebrow: '一筆署名',
        headline: '一筆署名，寫明五件事。',
        rows: [
          { title: '誰', body: '一個人或一家公司，連到他自己的頁面。' },
          { title: '職務', body: '導演、腳本、作畫或配音，職務名稱有各語言的譯法。' },
          { title: '哪一部', body: '哪一部作品，以及是原版，還是某個語言的配音版。' },
          { title: '角色', body: '配音的署名，在同一筆裡連起聲優、角色與作品。' },
          { title: '署名', body: '當時用哪個名字掛名，就記哪個名字；換過名字，人還是同一個。' },
        ],
      },
      voice: {
        eyebrow: '聲優',
        headline: '一個聲優，一個身分。',
        body: '他在動畫裡配過的角色，和在遊戲、視覺小說裡的配音，都列在同一頁。追蹤他，有新作品公布時會通知你。',
        photo: {
          src: 'threads',
          alt: '一張玫瑰色的紙沿邊打了一排小孔，三條棉線從孔裡拉出，各繫著一張藍、灰紫與玫瑰色的小紙片。',
        },
      },
      studio: {
        eyebrow: '製作公司',
        headline: '一家製作公司，一條作品年表。',
        lead: '公司和人一樣，是獨立的身分，不屬於任何帳號或社群。它歷年做過的動畫，依年份排成一列。',
      },
      next: '這部動畫改編自哪裡，順著關係走回去。',
    },
    adaptations: {
      head: {
        headline: '每一部改編，都連得回原作。',
        lede: '動畫、它的原作小說或漫畫、續季、外傳和改編遊戲，在 REZICS 各是一部作品，用寫明類型的關係連在一起。從任何一部出發，都走得到其他幾部。',
      },
      example: {
        eyebrow: '例如',
        headline: '一個故事，有好幾種樣子。',
        body: '例如《魔法禁書目錄》：原作是鎌池和馬的輕小說，改編成漫畫，也改編成三季動畫與一部電影；外傳《科學超電磁砲》另有自己的漫畫與動畫。在 REZICS，它們各是一部作品，關係寫明是改編、續作還是外傳。',
        photo: {
          src: 'sources',
          alt: '一張直式的深綠紙、一張較小的炭黑紙與一張橫式的玫瑰色紙層層錯開疊放，旁邊另有一張藍色小紙。',
        },
      },
      family: {
        eyebrow: '關係圖',
        headline: '每一部都標明，它和原作是什麼關係。',
        lead: '還沒確認的關係也照樣列出，標明待確認，不會先藏起來。',
        tiles: [
          { kind: 'books', relation: '原作', name: '原作小說' },
          { kind: 'manga', relation: '改編自原作', name: '漫畫版' },
          { kind: 'anime', relation: '改編自原作', name: '動畫第一季' },
          { kind: 'anime', relation: '第一季的續作', name: '動畫第二季' },
          { kind: 'books', relation: '外傳', name: '外傳小說' },
          { kind: 'games', relation: '改編自動畫', name: '改編遊戲' },
          { kind: 'visual-novels', relation: '改編自原作', name: '改編視覺小說' },
          { kind: null, relation: '關係待確認', name: '另一部改編' },
        ],
      },
      scoped: {
        eyebrow: '各算各的',
        headline: '動畫和原作，各算各的。',
        lead: '看完動畫，原作小說的進度不會被改成讀完。同一個角色，原作裡活了下來，動畫裡卻沒有：兩種說法並存，各自寫明出自哪一部，又是到哪一集或哪一章才揭曉。',
      },
      relations: {
        eyebrow: '關係',
        headline: '關係有名字，兩端各有說法。',
        lead: '每一種關係都有各語言的名稱：這一頁寫「改編自」，另一頁就寫「改編成」。',
        rows: [
          { title: '改編', body: '把一部作品換成另一種形式，例如小說改成動畫。' },
          { title: '續作', body: '接著前一部的故事往下走，例如第二季。' },
          { title: '系列', body: '同一個系列裡的作品，各自保有身分。' },
          { title: '重製', body: '從頭重新做一次，是另一部作品，和舊作互相連結。' },
          { title: '外傳', body: '從同一個故事岔出去的另一段。' },
        ],
      },
      orders: {
        text: '播出順序和觀看順序，',
        muted: '可以是兩條路。',
        note: '作品照公布的時間排成一列；想告訴新觀眾從哪裡看起，可以另做一份觀看順序的清單，附上理由。',
      },
      next: '許多動畫的故事，是從漫畫開始的。',
    },
  },
};

export default site;
