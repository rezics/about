// The manga site (漫畫): every visible string of /manga/ and its six inner pages, read as the
// site's chapters 第 1 話 to 第 6 話. Design record: src/sites/manga/SITE.md ("v3"); sources for
// every claim: src/sites/manga/facts.md.
import type { Item, KindId, MiniSite, ModuleId, PartId } from '../schema';

/** A section head in the v3 grid: eyebrow in columns 1 to 3, serif h2, optional lead. */
export interface MangaHead {
  eyebrow: string;
  heading: string;
  lead?: string;
}
/** A large serif statement: the first half in ink, the second in muted ink. */
export interface MangaStatement {
  text: string;
  muted?: string;
}
/** One of this site's paper still-life pictures (public/images/sites/manga/). */
export interface MangaPicture {
  name: 'hero' | 'series' | 'progress' | 'adaptations' | 'publish';
  alt: string;
}
/** The intro of an inner page: chapter eyebrow, h1 and lede. */
export interface MangaIntro {
  eyebrow: string;
  headline: string;
  lede: string;
}
/** The closing: a final statement, the action into REZICS, then the next page or site. */
export interface MangaClosing {
  statement: string;
  /** The small label of the next link, e.g. 下一話　第 2 話. */
  nextLabel: string;
  /** The next page's or site's name. */
  nextName: string;
}

export interface MangaStrings {
  /** The action into REZICS (the product's address comes from `site.productUrl`). */
  action: string;
  landing: {
    hero: Omit<MangaIntro, 'eyebrow'> & { picture: MangaPicture };
    parts: MangaHead & { notes: Partial<Record<PartId, string>> };
    pages: MangaHead & { tiles: { slug: string; chapter: string; line: string }[] };
    statement: MangaStatement;
    neighbours: MangaHead & { tiles: { kind: KindId; line: string }[] };
    closing: MangaClosing;
  };
  series: {
    intro: MangaIntro;
    levels: MangaHead & { picture: MangaPicture; items: Item[] };
    catalogue: MangaHead & { items: Item[]; footnotes: string[] };
    names: MangaHead & { body: string[]; items: Item[] };
    closing: MangaClosing;
  };
  progress: {
    intro: MangaIntro;
    language: MangaHead & { picture: MangaPicture };
    caught: MangaHead & { items: Item[] };
    statement: MangaStatement;
    travels: MangaHead & { items: Item[]; footnote: string };
    closing: MangaClosing;
  };
  creators: {
    intro: MangaIntro;
    roles: MangaHead & { items: Item[]; footnotes: string[] };
    person: MangaHead & { tiles: { kind: KindId; line: string }[] };
    statement: MangaStatement;
    closing: MangaClosing;
  };
  adaptations: {
    intro: MangaIntro;
    example: MangaHead & { picture: MangaPicture; items: Item[]; footnote: string };
    relations: MangaHead & { items: Item[]; footnote: string };
    apart: MangaHead;
    statement: MangaStatement;
    closing: MangaClosing;
  };
  community: {
    intro: MangaIntro;
    spoilers: MangaHead & { items: Item[] };
    ratings: MangaHead;
    gather: MangaHead & { items: Item[]; footnote: string; tiles: { module: ModuleId; line: string }[] };
    closing: MangaClosing;
  };
  publish: {
    intro: MangaIntro;
    steps: MangaHead & { picture: MangaPicture; items: Item[] };
    decides: MangaHead & { items: Item[] };
    elsewhere: MangaHead;
    closing: MangaClosing;
  };
}

export default {
  id: 'manga',
  base: '/manga/',
  name: '漫畫',
  theme: { kind: 'manga' },
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: '漫畫：從第一話讀到最新一集',
        description:
          'REZICS 替每部漫畫建立一個身分，連載的每一話、各語言單行本與譯本都歸在底下。它記得你讀到哪一話，標明你選的語言還在等哪一集，也讓你和讀到同一處的人一起聊。',
      },
    },
    {
      slug: 'series',
      label: '系列',
      meta: {
        title: '一部漫畫的集、話與譯本',
        description:
          '系列與每一集單行本都是作品，每一話是集裡有固定編號的位置。合訂本只記收錄範圍，日版與台版算同一部作品並各自署名譯者，什麼都不會重複計算。',
      },
    },
    {
      slug: 'progress',
      label: '進度',
      meta: {
        title: '漫畫進度：讀到哪一話',
        description:
          '以話為單位記錄漫畫進度，跨集、跨合訂本、跨裝置都接得上。換了閱讀語言，讀過的集數照樣算數；下一話還沒有你讀的語言時，告訴你正在等哪一集。',
      },
    },
    {
      slug: 'creators',
      label: '作者',
      meta: {
        title: '漫畫作者：原作、作畫與譯者',
        description:
          '漫畫的每個署名都寫明角色，原作、作畫、插畫與譯者各列各的。同一個人在小說、漫畫、動畫與遊戲裡都是同一個身分，追蹤一次，他的新作品與公告都看得到。',
      },
    },
    {
      slug: 'adaptations',
      label: '改編',
      meta: {
        title: '漫畫與改編：小說、動畫與遊戲',
        description:
          '漫畫改編自哪裡、又被改編成什麼，REZICS 用有類型的關聯連起來。每部作品各記各的進度、評分與暴雷界線，還沒確認的關聯也照實標出。',
      },
    },
    {
      slug: 'community',
      label: '討論',
      meta: {
        title: '漫畫討論：在讀到的那一話聊',
        description:
          '每一話都有自己的討論，你還沒讀到的部分先不顯示。評分寫明評的是整部、單集還是譯本，附上人數與分布。同好可以開 Realm、架 Zone，替作品寫 Wiki+。',
      },
    },
    {
      slug: 'publish',
      label: '發表',
      meta: {
        title: '在 REZICS 連載你的漫畫',
        description:
          '在 REZICS 發表漫畫，整話可以只放圖片，按時區排程發表，邀請協作者並分開設定權限。別人的譯本要你同意才公開，每一頁都對回原頁，整部作品隨時能完整備份。',
      },
    },
  ],
  strings: {
    action: '前往 REZICS',
    landing: {
      hero: {
        headline: '讀到第幾話，REZICS 替你記著。',
        lede: '單行本、連載的每一話與各語言譯本，都連回同一部漫畫。REZICS 記住你的進度，依你選的語言找下一話。',
        picture: {
          name: 'hero',
          alt: '一張近黑色的厚紙，像漫畫的一頁那樣切出幾個大小不一的窗口，其中一個窗口底下透出玫瑰色的紙。',
        },
      },
      parts: {
        eyebrow: '八個部件',
        heading: '每一種東西共用的部件，用在漫畫上是這樣。',
        notes: {
          identity: '不論用哪個譯名找，都會找到同一部作品。',
          editions: '日版、台版、電子版與合訂本，各是一筆發行紀錄。',
          credits: '原作與作畫分開署名，譯者寫在自己翻的那一版上。',
          relations: '改編自哪裡、又改編成什麼，兩個方向都查得到。',
          progress: '一話一話往下記，換一台裝置也接得上。',
          ratings: '評的是哪一集、哪個譯本，分數旁邊寫得清楚。',
          discussion: '討論照話數分開，超過你進度的留言先收起來。',
          offers: '哪個語言版本在哪裡有賣，標明是哪天查到的。',
        },
      },
      pages: {
        eyebrow: '這個站',
        heading: '這個站分成六話，照順序讀，或翻到你在意的那一話。',
        tiles: [
          { slug: 'series', chapter: '第 1 話', line: '集、話與譯本，歸成同一部作品' },
          { slug: 'progress', chapter: '第 2 話', line: '讀到哪一話，換裝置也接得上' },
          { slug: 'creators', chapter: '第 3 話', line: '原作、作畫與譯者，各有名字' },
          { slug: 'adaptations', chapter: '第 4 話', line: '小說、漫畫、動畫與遊戲的來龍去脈' },
          { slug: 'community', chapter: '第 5 話', line: '暴雷先收起來，評分講明對象' },
          { slug: 'publish', chapter: '第 6 話', line: '把自己畫的漫畫放上來連載' },
        ],
      },
      statement: {
        text: '讀完已出版的台版，就算追上。',
        muted: '哪一集還在等譯本，REZICS 也會標明。',
      },
      neighbours: {
        eyebrow: '相鄰的種類',
        heading: '同一個故事，常有好幾種樣子。',
        lead: '小說、動畫、遊戲與視覺小說各有身分，透過改編關聯，從一部漫畫就能連到它們。',
        tiles: [
          { kind: 'books', line: '原作小說與輕小說' },
          { kind: 'anime', line: '動畫化，進度分開記' },
          { kind: 'games', line: '改編成遊戲，或從遊戲改編' },
          { kind: 'visual-novels', line: '漫畫版連回原作' },
        ],
      },
      closing: {
        statement: '第一話到最新一集，都在同一個地方。',
        nextLabel: '下一話　第 1 話',
        nextName: '系列',
      },
    },
    series: {
      intro: {
        eyebrow: '第 1 話　系列',
        headline: '幾十集、幾百話，還是同一部作品。',
        lede: '系列是一部作品，每一集單行本也是；每一話是作品裡一個固定的位置。合訂本、新裝版與各語言譯本另外記錄，最後都連回同一個身分。',
      },
      levels: {
        eyebrow: '拆開來看',
        heading: '把連載拆開來看。',
        lead: '從整部系列、每一集到每一話，各有自己的層次，最後都歸在同一個身分底下。',
        picture: {
          name: 'series',
          alt: '十幾本近黑色的薄冊整齊疊成一落，上面幾本用一條深綠色紙帶束在一起。',
        },
        items: [
          { title: '系列', body: '整部連載本身就是一部作品，作者、追蹤與評分都屬於它。' },
          {
            title: '單行本',
            body: '每一集單行本也是一部作品，可以單獨收藏、評分與討論。集數照出版時的編號保留，特別編號的那一集也不會和別集混在一起。',
          },
          {
            title: '話',
            body: '每一話在作品裡都有固定的位置與編號。你的進度、每一話的討論與 Wiki+ 引用的出處，都指向這個位置。',
          },
          { title: '合訂本', body: '合訂本或完全版一次收錄好幾集，REZICS 只記下它收了哪幾集，不會多出重複的作品。' },
          {
            title: '譯本',
            body: '原文版與各語言譯本，都屬於同一部作品。譯本各自記錄譯者、權利與發行資料，同好翻譯也會寫明它是從哪一版翻的。',
          },
        ],
      },
      catalogue: {
        eyebrow: '目錄資料',
        heading: '每部漫畫的目錄資料，缺的就寫「未記錄」。',
        items: [
          { title: '形式', body: '漫畫或單篇。' },
          { title: '首發年份', body: '第一次發表的年份。可以只看某一年的作品，一路翻到最後一部。' },
          { title: '集數', body: '已經出版的單行本集數。' },
          { title: '狀態', body: '連載中、已完結、暫停、未發售或已取消。' },
        ],
        footnotes: [
          '沒有紀錄的欄位不會用猜的。匯入的目錄資料都標明來源與授權。',
          '漫畫 Zone 依書名、形式、狀態與年份篩選整份目錄。',
        ],
      },
      names: {
        eyebrow: '名稱與版本',
        heading: '原文書名留著，各地譯名也都在。',
        body: [
          '一部漫畫最初的書名、各地的譯名與讀者常用的別名都收在一起，用哪一個都找得到。繁體中文名稱不會被自動換成簡體；需要轉換時，會標明那是轉換出來的寫法。',
          '你讀的是哪一版，也可以私下選定。電子版、新裝版或台版，REZICS 記住的就是那一本。',
        ],
        items: [
          { title: 'ISBN', body: '一個 ISBN 會帶你找到那一本、它屬於哪個譯本，以及整部作品。' },
          { title: '譯名', body: '書名有了譯名，不代表那個語言已經有譯本。' },
        ],
      },
      closing: {
        statement: '集數再多，一部作品還是只有一個身分。',
        nextLabel: '下一話　第 2 話',
        nextName: '進度',
      },
    },
    progress: {
      intro: {
        eyebrow: '第 2 話　進度',
        headline: '上次讀到第 12 話，這次從第 13 話開始。',
        lede: 'REZICS 依集排好整部漫畫的每一話，標出你停下的位置與下一話。在手機上讀到一半，回到電腦會從同一話接下去。',
      },
      language: {
        eyebrow: '換一種語言',
        heading: '換了語言，讀過的照樣算數。',
        lead: '前十集用日文讀完，後來改讀繁中，那十集照樣算讀過。接下來，REZICS 用繁中替你找下一集；繁中版還沒出，就標出你正在等的那一集。',
        picture: {
          name: 'progress',
          alt: '一條近黑色的長紙條摺成一段一段，右端幾段已經摺平疊好，摺平處夾著一張玫瑰色的小紙片。',
        },
      },
      caught: {
        eyebrow: '讀完了嗎',
        heading: '「追上了」有好幾種意思，REZICS 分開告訴你是哪一種。',
        items: [
          { title: '已追上這個語言', body: '你讀的語言能讀到的都讀完了，下一集還在等譯本。' },
          { title: '已讀完已出版的部分', body: '原作出到哪，你就讀到哪，連載還沒結束。' },
          { title: '系列已完結', body: '連載已經畫完，不會再有新的一話。' },
          { title: '對應未確認', body: '網路版和單行本的內容對不上時，就寫未確認。一邊的進度，不會被拿去算另一邊。' },
          { title: '番外不擋路', body: '列為選讀的番外篇與特別篇可以跳過，不影響你讀完整部作品。' },
        ],
      },
      statement: {
        text: '買了，不等於讀過。',
        muted: '架上有的單行本記成收藏，讀到哪裡另外記。',
      },
      travels: {
        eyebrow: '跟著你走',
        heading: '進度跟著你，換一台裝置也一樣。',
        items: [
          { title: '兩台裝置', body: '手機和電腦記的是同一份進度。按錯了能復原，另一台也跟著更新。' },
          { title: '繼續閱讀', body: '首頁最上面那一排，點一下就是下一話。' },
          {
            title: '追蹤',
            body: '把漫畫標成在讀，就開始追蹤。你讀的語言有新的一話或新的一集，就會通知你；通知可以改成只收精選，或整個關掉。',
          },
          {
            title: '匯入',
            body: '匯入其他網站的漫畫清單，依對應保留狀態、日期、分數、標籤與私人筆記。重讀次數等原始欄位保留七天，請先匯出備份。',
          },
          { title: '匯出', body: '整個書庫隨時能完整匯出，日期與筆記一起帶走。' },
        ],
        footnote: '預設情況下，REZICS 不會用私人閱讀紀錄訓練 AI 模型，也不會拿它建立廣告側寫。',
      },
      closing: {
        statement: '讀到哪一話，下次就從那裡接著讀。',
        nextLabel: '下一話　第 3 話',
        nextName: '作者',
      },
    },
    creators: {
      intro: {
        eyebrow: '第 3 話　作者',
        headline: '寫故事的人和畫畫的人，各有名字。',
        lede: '許多漫畫的故事與作畫出自兩個人。REZICS 依角色署名，每個名字都連到那個人的全部作品，不論是漫畫、小說還是動畫。',
      },
      roles: {
        eyebrow: '署名',
        heading: '署名照角色分，各寫各的。',
        items: [
          { title: '原作', body: '想出並寫下故事的人。' },
          { title: '作畫', body: '把故事畫成一頁一頁漫畫的人。' },
          { title: '插畫', body: '為封面、彩頁或小說繪圖的人。' },
          { title: '譯者', body: '署名在自己翻譯的那個版本上，不會掛到別的版本。' },
          { title: '概念監修', body: '提供原始構想或負責監修的人。' },
        ],
        footnotes: ['同好翻譯團隊也具名署名，但永遠不會被當成官方譯本。', '角色的名稱是資料的一部分，每種語言都能加上自己的說法。'],
      },
      person: {
        eyebrow: '一個人',
        heading: '一個名字，串起他在每一種東西裡的作品。',
        lead: '一位畫家可能替小說畫插畫、連載自己的漫畫，也為遊戲作畫。REZICS 把這些都放在同一個人底下；追蹤他，新作品與公告就會出現在你的追蹤動態。',
        tiles: [
          { kind: 'books', line: '替小說畫的插畫' },
          { kind: 'anime', line: '改編成動畫的原作' },
          { kind: 'games', line: '為遊戲畫的美術' },
        ],
      },
      statement: {
        text: '署名的是人，不是帳號。',
        muted: '作者本人還沒加入，他的頁面就已經在了，收著他署名過的每一部作品。',
      },
      closing: {
        statement: '每個名字後面，都寫著他做了什麼。',
        nextLabel: '下一話　第 4 話',
        nextName: '改編',
      },
    },
    adaptations: {
      intro: {
        eyebrow: '第 4 話　改編',
        headline: '一個故事，四種樣子。',
        lede: '小說、漫畫、動畫與遊戲，在 REZICS 各是一部作品。它們之間用有名字的關聯相連，從漫畫往上找得到原作，往下找得到改編。',
      },
      example: {
        eyebrow: '一個例子',
        heading: '例如《魔法禁書目錄》。',
        lead: '原作是鎌池和馬寫、灰村清孝插畫的輕小說。REZICS 把它的每一種樣子各記成一部作品，再寫明彼此是什麼關係。',
        picture: {
          name: 'adaptations',
          alt: '深綠、近黑與玫瑰色三張紙，從左上到右下排成一列，角與角相碰。',
        },
        items: [
          { title: '輕小說', body: '原作。正篇、《新約》與《創約》三個系列，以續作關聯依序相連。' },
          { title: '漫畫', body: '改編自輕小說，由近木野中哉作畫。' },
          { title: '動畫', body: '同樣改編自輕小說，和漫畫各記各的進度。' },
          { title: '《科學超電磁砲》', body: '衍生作品，有自己的漫畫，也改編成動畫。' },
          { title: '遊戲', body: '其中一部是視覺小說，從這裡就連到視覺小說那一邊。' },
        ],
        footnote: '只是說明 REZICS 怎麼記錄一部作品的例子，不代表任何合作或授權。',
      },
      relations: {
        eyebrow: '關聯',
        heading: '每條關聯，都說得出是哪一種。',
        items: [
          { title: '改編自', body: '從小說、動畫或遊戲改成漫畫，或從漫畫改成別的形式。' },
          { title: '續作／前作', body: '故事接著上一部往下走。' },
          { title: '衍生作品', body: '外傳與配角的故事，連回本傳。' },
          { title: '重寫自', body: '作者重新改寫，劇情和原本對不上時，算成另一部作品。' },
          { title: '重啟自', body: '從頭再講一次的新版本。' },
          { title: '閱讀順序', body: '出版順序之外，也能有一份照劇情排的閱讀順序，兩份並存。' },
        ],
        footnote: '還沒確認的關聯，就標成未確認。寧可空著，也不硬連。',
      },
      apart: {
        eyebrow: '分開記',
        heading: '看完動畫，漫畫的進度不會自己往前跳。',
        lead: '動畫追到哪、漫畫讀到哪，各記各的。漫畫的評論和動畫的評論也分開篩選，各自的分數只算各自的人。',
      },
      statement: {
        text: '兩個版本的劇情對不上，兩邊的事實都能寫進 Wiki+。',
        muted: '每條事實標明屬於哪個版本，顯示多少則看你讀到哪裡。',
      },
      closing: {
        statement: '每一種樣子各自成立，又連成一條線。',
        nextLabel: '下一話　第 5 話',
        nextName: '討論',
      },
    },
    community: {
      intro: {
        eyebrow: '第 5 話　討論',
        headline: '聊到第幾話，就只看到第幾話。',
        lede: '討論串掛在每一話上。別人寫到你還沒讀的地方，會先收起來，你讀到那裡之前都不會看見。',
      },
      spoilers: {
        eyebrow: '暴雷',
        heading: '超過你進度的內容先收起來，想看再自己打開。',
        items: [
          { title: '這一話的討論', body: '每一話都有討論串。進去看不必先加入任何社群。' },
          { title: '先收起來的留言', body: '超過你進度的留言預設收起，想看可以自己點開，只影響你這一次的畫面。' },
          { title: '投票標暴雷', body: '哪些內容算暴雷，讀者可以投票。這一票和作者自己的標示分開計算。' },
          {
            title: '三種對話',
            body: '聊劇情、寫評論、討論資料修正，各在各的地方。在三處之間切換，你選的版本與讀到的位置都會保留。',
          },
        ],
      },
      ratings: {
        eyebrow: '評分',
        heading: '每個分數，都寫著它評的對象。',
        lead: '整部系列、其中一集與某一個譯本各有各的分數，系列的分數不會從各集平均出來。每個分數附上人數、分布與評分人群；評論要說明評的是故事還是翻譯，也可以只寫字、不打分數。',
      },
      gather: {
        eyebrow: '同好',
        heading: '同好聚在一起的地方。',
        items: [
          {
            title: 'Realm',
            body: '一部漫畫的讀者可以開一個 Realm，有成員、規則與管理員。Realm 的精選會連到做出決定的那一次討論。',
          },
          { title: 'Zone', body: '社群可以替一部作品架一整個網站，有自己的頁面、導覽與外觀，資料仍是同一份。' },
          {
            title: 'Wiki+',
            body: '角色、地點、時間線與每話導讀，只顯示到你讀到的那一話。資訊框裡的每一筆，都是審核過的事實。',
          },
          { title: '清單', body: '排一份入門書單或閱讀順序，替每部作品寫上理由，能排序，也能匯出。' },
          { title: '追蹤', body: '追蹤一部作品、一位作者或一個 Realm，各自決定通知多寡。' },
        ],
        footnote: '年齡分級各自設定：一般、R15、R18 與 R18G 分開開關，沒有評估過的內容標示「未評估」。',
        tiles: [
          { module: 'community', line: '讓同好一起討論、評分與整理清單' },
          { module: 'zones', line: 'Zone 與 Wiki+，社群自己的網站' },
        ],
      },
      closing: {
        statement: '讀完一話，就在那一話底下聊。',
        nextLabel: '下一話　第 6 話',
        nextName: '發表',
      },
    },
    publish: {
      intro: {
        eyebrow: '第 6 話　發表',
        headline: '你的漫畫，從第一話就有身分。',
        lede: '在 REZICS 連載的作品，和其他漫畫並列在同一個索引裡。讀者用同一套進度、討論與評分讀它；有人改編或翻譯，也會連回你的作品。',
      },
      steps: {
        eyebrow: '流程',
        heading: '從原稿到讀者手上。',
        lead: '一話從上傳到發出，中間的每一步都由你安排，也都留在作品自己的紀錄裡。',
        picture: {
          name: 'publish',
          alt: '一張近黑色的紙摺成三面的小屏風立著，每一面切出幾個窗口，光從窗口透到影子裡；旁邊疊著幾張散頁。',
        },
        items: [
          { title: '上傳這一話', body: '一話可以只有圖片頁面，不必硬湊一段文字。作者的話另外放，不算進正文，也不會被翻譯。' },
          { title: '排定時間', body: '設好發表的日期與時區，關掉瀏覽器也照樣準時發出。' },
          { title: '一起完成', body: '邀請助手與編輯，分別給閱讀、建議、編輯或發表的權限。發表權和編輯權是分開的。' },
          { title: '每一頁都有位置', body: '每一頁有固定的位置。別人翻譯時，譯本逐頁對回你的原頁。' },
          { title: '收到回饋', body: '讀者的留言與修正建議，集中到作者的回饋收件匣。' },
        ],
      },
      decides: {
        eyebrow: '作者決定',
        heading: '這些事，由作者決定。',
        items: [
          {
            title: '翻譯',
            body: '別人做的譯本預設不公開。要有你的同意，或你事先開放授權，譯本才會公開；你也能拒絕讓作品連到某個譯本。',
          },
          { title: '權利', body: '替作品寫下授權聲明，講清楚讀者與譯者可以怎麼使用。' },
          { title: 'AI 使用', body: '每一話都能註明用了多少 AI：沒有、輔助或生成。讀者可以依此篩選。' },
          { title: '修訂', body: '改過的頁面留下修訂紀錄。讀者先前留言時看的那一版，不會被悄悄換掉。' },
          { title: '備份', body: '整部作品連同每一次修訂，隨時能完整備份帶走。' },
        ],
      },
      elsewhere: {
        eyebrow: '別處連載',
        heading: '已經在別處連載，也能記進來。',
        lead: '在自己網站或其他地方連載的作品，也能在 REZICS 建立身分。網路連載記成一次發行，附上網址與有日期的快照；出成單行本後，每一集另外記錄。',
      },
      closing: {
        statement: '作品放在 REZICS，主控權仍在作者手上。',
        nextLabel: '下一站',
        nextName: '遊戲',
      },
    },
  },
} satisfies MiniSite<MangaStrings>;
