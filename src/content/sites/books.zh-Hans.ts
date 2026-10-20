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
    contents: '本页内容',
    nextPage: '下一页',
    nextSite: '相关种类',
    closing: {
      title: '下一本读什么，打开书库就知道。',
      body: '每本书、每个版本和每次阅读，都记录在同一个账号中。',
    },
  },

  landing: {
    hero: {
      headline: '一部作品，所有版本，还有你的阅读位置。',
      lede: '原文和译本、单行本和合订本分别记录，都关联到同一部作品。下一本、Wiki 和讨论都会跟随你的阅读进度。',
      alt: '一排深绿色的纸依次展开，中间夹着一条淡绿色纸条，像一枚书签。',
    },
    editions: {
      label: '版本',
      headline: '每次出版，都单独记录。',
      lead: '同一套轻小说的日文原版、繁体中文版、英文版和繁体中文合订本，分别是一次出版，收录的卷数也不同。无论有无书号，还是只在网络上连载，在书库中都属于一部作品。',
      caption: '示例：一套虚构的十二卷轻小说。',
      link: '查看版本与系列',
      alt: '大小不同的绿色纸张叠在一起，左下角对齐，其中一张是浅蓝色。',
    },
    progress: {
      label: '阅读进度',
      headline: '书签停在哪里，下一本就从那里开始。',
      lead: '还是那套十二卷的轻小说：繁体中文版出到第 6 卷，日文版出到第 12 卷，而你刚读完繁体中文版第 6 卷。',
      steps: [
        { title: '每一卷都是一部作品', body: '系列中的每一卷都是一部作品。无论使用哪种语言出版，第 7 卷都指向同一部作品。' },
        { title: '合订本只算一次', body: '繁体中文合订本收录第 1 到 3 卷，算作一次出版。读完后，三卷分别记录为已读，不会重复计算。' },
        { title: '下一本，按你的阅读语言', body: '繁体中文版还没有第 7 卷。书库会告诉你已追上繁体中文版目前出版的部分，等第 7 卷出版时再通知你。' },
        { title: '切换语言阅读也算数', body: '先读完日文版第 7、8 卷，再切换回繁体中文版，这两卷仍然算已读。译本是同一部作品的不同文本，不必重新记录进度。' },
        { title: '拥有这本书，不等于读完', body: '书架上有没有这本书，和你是否读完，是两件分开的事。' },
      ],
    },
    reading: {
      text: '读到哪里，Wiki 和讨论就停在哪里；',
      sub: '之后才出现的人物、事件和讨论会先隐藏，想看全部也可以一次展开。',
    },
    writing: {
      label: '写作与出版',
      headline: '写书的人，也在同一个书库。',
      body: [
        '连载作者可以在这里逐章写作、排期和发布，读者从上次读到的段落继续阅读。',
        '签约创作者可以直接向读者销售已获授权的无 DRM 电子书，商店页面就在作品讨论旁边。',
      ],
      link: '了解连载写作',
      alt: '一条深绿色长纸折成一页一页，后半段仍平铺着，折痕处放着一张淡绿色小纸片。',
    },
    pages: {
      label: '书库页面',
      headline: '找书、读书，也在这里写书。',
      rows: [
        { slug: 'work', line: '一部作品的所有信息，都从这一页开始' },
        { slug: 'wiki', line: '用你的 AI 代理为书籍创建 Wiki' },
        { slug: 'editions', line: '清楚区分译本、合订本和系列' },
        { slug: 'library', line: '如实记录每次阅读' },
        { slug: 'serial', line: '逐章写作，逐章阅读' },
        { slug: 'publish', line: '直接向读者销售无 DRM 电子书' },
      ],
    },
    parts: {
      label: '组成部分',
      headline: '八个组成部分，构成书库。',
      lead: '同一套组成部分也用于动画、漫画和游戏。书库选用其中八个。',
    },
    connections: {
      label: '相关种类',
      headline: '书中的故事，也出现在其他种类中。',
      lead: '从原作页面出发，可以找到它的每一部改编作品。',
      tiles: [
        { kind: 'anime', line: '改编动画通过关系关联回来' },
        { kind: 'manga', line: '漫画改编版本分别评分' },
        { kind: 'visual-novels', line: '与轻小说共用一份目录和书库' },
        { kind: 'games', line: '同一位作者的游戏，关联到同一个身份' },
      ],
    },
  },

  work: {
    hero: {
      headline: '关于一部作品的信息，都从这一页开始。',
      lede: '作品页面是书库的中心。事实、评分、你的版本和进度、系列与改编、Wiki 和讨论，都会按阅读时的需要排列。',
    },
    example: {
      title: '《魔法禁书目录》',
      original: 'とある魔術の禁書目録',
      author: '镰池和马',
      caption: '书名会以你的语言显示，原文书名则放在一旁。下面以这部作品为例，从上到下浏览一遍。',
    },
    sections: {
      label: '八个区块',
      headline: '从上到下，共有八个区块。',
      lead: '这类作品用不到的区块会直接省略，其余区块的位置和链接保持不变。',
      rows: [
        {
          title: '身份和下一步',
          body: '封面、书名、作者和评分，评分会注明量表、人数和范围。旁边显示你选择的版本、阅读状态和进度。',
          example: '读到第 5 卷时，主按钮显示“继续阅读”。',
        },
        {
          title: '简介',
          body: '不含剧透的简介、基本信息、标签和内容提醒。展开后才能看到完整事实、来源和“提交更正”。',
          example: '镰池和马著，灰村清孝绘制插画的轻小说，正篇从 2004 年开始出版。',
        },
        {
          title: '你的版本和获取方式',
          body: '先列出你选择的版本，再列出几个匹配的版本，最后提供可以分页浏览的完整书单。',
          example: '日文原作以及繁体中文和英文译本，分别注明译者。',
        },
        {
          title: '分卷和关系',
          body: '尚未读完的下一部分排在最前，接着依序列出各卷，然后是续集和改编作品。出版顺序和推荐阅读顺序分别显示。',
          example: '正篇、《新约》和《创约》三个系列，通过续作关系连接。',
        },
        {
          title: '浏览 Wiki',
          body: '查看主要人物、重要制作人员，以及不会超出你阅读进度的时间线或章节导读，并链接到 Wiki 的各个页面。',
          example: '读到第 5 卷，时间线就显示到第 5 卷。',
        },
        {
          title: '评分和评论',
          body: '显示分数分布和人数，以及评分问题、评分者和评分对象。可以按版本或评论语言筛选，发表评论无须先评分。',
          example: '故事评分和某个译本的评分分别计算。',
        },
        {
          title: '讨论和社区',
          body: '作品、分卷和版本各有自己的讨论串。查看讨论无须先加入社区。',
          example: '想讨论第 5 卷，可以直接从该卷进入。',
        },
        {
          title: '书单和探索',
          body: '显示收录这部作品的书单和阅读顺序，并附上理由；下面还有标识符、来源和修订历史。',
          example: '一份轻小说入门书单，并注明收录理由。',
        },
      ],
    },
    action: {
      label: '主按钮',
      headline: '页面顶部只有一个主按钮。',
      lead: '按钮文字取决于你和这部作品的关系。关注和加入书单各有单独的按钮，不会与主按钮混在一起。',
      rows: [
        { title: '还没选择版本', body: '按钮显示“选择版本”。' },
        { title: '已选择版本，还没开始', body: '按钮显示“开始阅读”。' },
        { title: '读到一半', body: '按钮显示“继续阅读”，直接回到上次停下的地方。' },
      ],
      caption: '在手机上，封面会缩成书名旁的小图，身份、版本、状态和这个按钮都显示在首屏。',
    },
    ratings: {
      label: '评分',
      headline: '分数旁边会注明评分对象。',
      lead: '读原文的人可以评价故事，读译本的人可以另外评价翻译，听有声书的人可以评价朗读。',
      rows: [
        { title: '评分对象', body: '故事、译本和朗读分别评分，不会合成一个数字。' },
        { title: '平均分的范围', body: '每个平均分都会注明评分来源：所有人、你加入的社区或其他社区。' },
        { title: '系列和各卷', body: '系列本身的评分和各卷评分分别显示。' },
      ],
    },
    edit: {
      label: '修改',
      headline: '个人记录直接修改，共享事实通过提案更正。',
      rows: [
        { title: '直接修改，可以撤销', body: '阅读状态、进度、评分和书单都可以直接修改。改错后，点击一下就能撤销。' },
        { title: '提交更正，由人工审核', body: '事实、关系、书名和别名通过提案更正。每个提案都附有来源，经人工审核后才会应用。' },
      ],
    },
    languages: {
      text: '界面、书名和版本的语言，',
      sub: '各自独立。',
      note: '把界面切换成英文，不会因此替换你正在读的繁体中文译本；书名翻译成中文，也不代表已经有中文译本。评论也会分别注明使用的语言。',
    },
    finaleLead: '作品页面的深层内容，会按你的进度逐章展开。',
  },

  wiki: {
    hero: {
      headline: '每本书，都有自己的 Wiki。',
      lede: '拥有这本书的人可以在自己的电脑上让 AI 代理逐章整理人物、地点和事件，经人工审核后发布。每位读者只会看到自己读过的章节。',
      alt: '一张深绿色的纸上剪出几道长短不同的缝隙，剪下的纸片整齐地排在旁边的浅蓝色卡纸上。',
    },
    flow: {
      label: '从文件到 Wiki',
      headline: '从一个文件，到一部 Wiki。',
      steps: [
        { title: '你手中的文件', body: 'TXT 或 EPUB 文件保留在你自己的电脑上。' },
        {
          title: '你选择的 AI 代理',
          body: '工具包会将文本拆分成带有精确位置的段落。你的代理逐章阅读，记录出场人物及其别名、人物关系、发生的事件和出现的地点。',
        },
        {
          title: '附有来源的提案',
          body: '每条内容都标出原文中的位置，并摘录一小段原句作为证据。代理会先通过 API 查找已有的人物和地点，再一次提交所有结果。',
        },
        {
          title: '审核后发布',
          body: '审核者一次批准整批提案，作品 Wiki 随即更新。之后发布新章节时，只需提交新增和修改的部分。',
        },
      ],
    },
    position: {
      label: '阅读位置',
      headline: '读到第几章，Wiki 就显示到第几章。',
      lead: '以一部虚构小说为例（示意），同一份人物和事件书单，在不同阅读位置会显示不同内容。',
      control: '阅读位置',
      positions: [
        { label: '第 1 章', chapter: 1 },
        { label: '第 3 章', chapter: 3 },
        { label: '第 9 章', chapter: 9 },
        { label: '第 16 章', chapter: 16 },
        { label: '第 22 章', chapter: 22 },
        { label: '全部', chapter: 30 },
      ],
      groups: { people: '人物', events: '事件' },
      source: '来源：第 {n} 章',
      aliases: '别名：',
      entries: [
        { group: 'people', name: '主角', aliases: '小名、笔名', chapter: 1, note: '故事的叙述者，在港口城市长大。' },
        { group: 'people', name: '主角的姐姐', chapter: 1, note: '在城里的书店工作。' },
        { group: 'people', name: '新来的邻居', chapter: 3, note: '刚搬进对面房子的年轻人。' },
        { group: 'people', name: '旅行的画家', chapter: 16, note: '暂住在港口旁的旅馆。' },
        { group: 'events', name: '书店重新开业', chapter: 1, note: '姐姐工作的书店换了新招牌。' },
        { group: 'events', name: '港口的宴会', chapter: 9, note: '主角在宴会上第一次和邻居说话。' },
        { group: 'events', name: '一封长信', chapter: 16, note: '信中讲述了两人过去的经历。' },
        { group: 'events', name: '离港的船', chapter: 22, note: '消息来自姐姐的来信。' },
      ],
      later: '第 {n} 章才会出现，暂时隐藏',
      status: '当前位置：第 {n} 章。之后的内容不会显示在这里。',
      statusAll: '当前显示全部内容，包括结局。',
      rail: '全书共 30 章。',
      rules: [
        '未登录的读者默认不会看到剧透内容，页面会说明这一点。',
        '登录后，默认位置是你读完的最后一章；在书库中标为“已读”，就表示读完整部作品。',
        '任何人都可以自行选择阅读位置，也可以选择显示全部。',
        '阅读位置只适用于同一条故事线。网络版读到哪里，不会解锁出版版的内容。',
      ],
    },
    text: {
      text: 'REZICS 不会收到全文；',
      sub: '它只会收到提案，每条提案都附有原文位置和简短引文。',
      facts: [
        { title: '模型由你选择', body: '使用云端模型时，文本会发送给你选择的服务；使用本地模型时，所有内容都留在你的电脑上。' },
        { title: '开放源代码', body: '工具包采用 Apache-2.0 许可。无须账号即可使用，不会报告使用情况，也不会自行从网络下载任何内容。' },
        { title: '不解密，不破解', body: '受保护的文件无法打开。工具包不包含解密或破解功能，也不会调用此类工具。' },
        { title: '引文有长度限制', body: '每段引文的长度和同一本书的引文总量都有上限，由 REZICS API 统一管理。' },
      ],
    },
    zone: {
      label: 'Zone',
      headline: '一部 Wiki，就是作品的一个 Zone。',
      lead: '信息框和书单中的每一条数据，都是筛选、书单和其他 Zone 读取的同一条数据。在这里更正一个名称，其他地方显示的内容也会同步更正。',
      tiles: [
        { name: '作品页面', line: '仍是中心，Wiki 是更深入的内容' },
        { name: '人物' },
        { name: '地点' },
        { name: '时间线' },
        { name: '章节导读' },
        { name: '关系' },
      ],
      caption: '示例：一部作品 Wiki 中的页面。',
    },
    review: {
      label: '审核',
      headline: 'AI 代理提交提案，由人审核。',
      lead: '代理找出的每个人物和地点都会先与图谱中的现有数据匹配，结果分为四种。',
      states: [
        { title: '匹配', body: '找到图谱中已有的人物或地点。' },
        { title: '新增', body: '图谱中还没有，提案会创建一条记录。' },
        { title: '不确定', body: '存在多个可能对象，由审核者决定。' },
        { title: '无法获取', body: '目前无法获取匹配结果，留待审核时确认。' },
      ],
      rules: [
        '匹配结果同样作为提案，不会自动合并两条数据。',
        '新章节的提案不会悄悄删除已接受的内容；撤回某条内容时，必须说明理由。',
        '引文位置可以验证：审核者持有同一版本的文件，就能逐段对照原文。',
        '是否允许代理起草条目、是否接受生成文本，由各社区自行决定；未另行设置时，Wiki 只接受事实和结构。',
        '读者看到的每条内容，都经过人工审核。',
      ],
    },
    finaleLead: '如何分别记录同一部作品的不同版本。',
  },

  editions: {
    hero: {
      headline: '一部作品，可以对应一整排书。',
      lede: '原文和译本、平装本和电子版、合订本和网络连载分别记录，再关联到同一部作品。你能知道手中是哪本书，系列进度也不会混乱。',
      alt: '大小不同的绿色纸张叠在一起，左下角对齐，其中一张是浅蓝色。',
    },
    releases: {
      label: '四种发行',
      headline: '每次出版，都会注明具体类型。',
      lead: '一本书在三家商店销售，记录中仍只有一个版本，并附上三个购买渠道。未经授权的转载会单独记录，不会并入正版。',
      kinds: [
        { title: '正式出版', body: '出版社发行的单行本、平装本、电子版或特装版。记录当时实际出版的内容，之后不会再添加内容。' },
        { title: '网络发布', body: '网络连载也是一次真实发行。保留原始网址，以及每份注明日期的存档。' },
        { title: 'REZICS 固定版', body: '将 REZICS 上某个时刻选定的内容存档为一个版本，之后的修订不会改变它。' },
        { title: '虚拟版', body: '按某次出版的结构收录用户翻译，并注明覆盖范围，例如全书 100 章中的第 1 到 20 章。它不代表实际出版过。' },
      ],
    },
    translations: {
      label: '译本',
      headline: '每个译本，都注明译者和来源。',
      rows: [
        { title: '官方译本', body: '出版社译本作为一次单独出版记录，注明译者和权利信息。' },
        { title: '同好翻译', body: '属于译者本人，对应原文的某个版本，永远不会标为官方。' },
        { title: '机器翻译', body: '和其他译本一样，是一种新的文本，状态会注明由机器生成。' },
        { title: 'AI 辅助', body: '以人工翻译为主，使用 AI 辅助完成，也会如实标注，读者可以据此筛选。' },
      ],
      stateLabel: '每段译文都有状态',
      states: ['待翻译', '已翻译', '已审核', '定稿'],
      notes: [
        '原文修改一段后，对应译文会标记为需要更新。它不会被删除，也不会悄悄匹配到新文本。',
        '用户的译文起初只有自己能看到。要公开，必须有依据：原作属于公有领域或采用允许翻译的开放许可、作者同意，或作者事先提供了翻译许可。',
        '作者也可以拒绝将原作关联到某个译本。',
        '繁体中文不会被悄悄转换成简体中文。转换后的文本会注明经过转换，专有名词也不会被改动。',
      ],
    },
    sameWork: {
      label: '一部还是两部',
      headline: '哪些改动仍属于同一部作品。',
      lead: '判断依据是故事前后是否兼容，或是否有意重新讲述。字数、语言、书号和宣传用语都不作为依据。',
      rows: [
        { title: '修正错字、轻微修订、补上不冲突的章节', body: '仍是一部作品，版本和发行分别记录。' },
        { title: '调整呈现顺序，事件本身不变', body: '仍是一部作品，两种顺序都会保留。' },
        { title: '重排改变了因果，或结局彼此冲突', body: '属于两部作品，通过“改写”关系连接。' },
        { title: '主角改了名字', body: '如果只是别名，仍属于同一部作品。' },
        { title: '有意从头重新讲述', body: '属于两部作品，通过“重启”关系连接。' },
        { title: '网络版被删除，或只有网络版续篇', body: '只会改变收录范围和获取方式，不会增加一部作品。' },
      ],
      caption: '网络版的阅读进度不会让改写后的出版版也变成已读。两边章节的对应关系须经人工确认。',
    },
    orders: {
      label: '顺序',
      headline: '出版顺序和阅读顺序可以不同。',
      lead: '示例：同一系列的两种顺序。每卷的标识符都保持不变。',
      rows: ['出版顺序', '推荐阅读顺序'],
      tiles: ['第 1 卷', '外传', '第 2 卷', '第 3 卷'],
      reading: [0, 2, 1, 3],
      notes: [
        { title: '合订本', body: '合订本算作一次出版，收录多卷内容。每卷仍是独立作品，评分和进度分别记录。' },
        { title: '子系列', body: '系列中的子系列可以各自从第 1 卷编号，也可以通过整体顺序连接起来。' },
        { title: '读完整个系列', body: '系列进度只统计必读卷；选读外传和特别篇是否阅读，都不影响完成状态。' },
        { title: '系列状态', body: '已追上当前出版进度、已读完已出版内容、系列已完结，以及章节对应关系未确定，这四种状态分别显示。' },
      ],
    },
    isbn: {
      text: '输入书号，',
      sub: '找到对应版本。',
      note: '书号属于某次出版，不等于作品本身。从任何书号或电子版条目出发，都能找到对应版本、收录的文本或译本，以及上层作品。例如《魔法禁书目录》的日文原作、繁体中文版和英文版各是一次出版，书号各不相同，但都指向同一部作品。',
    },
    finaleLead: '接下来看看你自己的记录。',
  },

  library: {
    hero: {
      headline: '你怎么读，记录就怎么记。',
      lede: '读到一半放下、两年后重读、通勤时改听有声书。REZICS 会如实记录每种情况，默认只有你能看到，需要时可以完整导出。',
      alt: '三条长短不同的深绿色纸条平行排列，最短的一条旁边放着一张淡绿色小纸片。',
    },
    reads: {
      label: '每次阅读',
      headline: '同一本书读三次，就有三条记录。',
      lead: '暂停就记录为暂停，弃读就记录为弃读，两者都不算读完。重读会新增一条记录，不会覆盖第一次。',
      rows: [
        { title: '第一次', body: '纸书，读到第 20 章，暂停。', share: 0.62 },
        { title: '第二次', body: '电子书，后半部分改听有声书，读完。', share: 1 },
        { title: '第三次', body: '重读，正在阅读。', share: 0.24 },
      ],
      caption: '示例：每条记录都对应你实际阅读的版本。换一个版本重读，也会单独记录。',
    },
    move: {
      label: '导入和导出',
      headline: '阅读记录，既能导入，也能带走。',
      steps: [
        { title: '上传导出文件', body: '可以使用其他服务导出的文件，或自己整理的电子表格。' },
        { title: '匹配你读过的版本', body: '每条记录都匹配到实际版本，不会根据书名猜测。无法匹配的数据不会强行塞进其他书籍。' },
        { title: '保留原有进度', body: '阅读状态、日期、评分和评论会按数据匹配后一并导入。' },
        { title: '随时完整导出', body: '记录、藏书、评分和评论都可以导出为可再次导入的文件。' },
      ],
      retention: '上传的文件只属于你。原始字段自上传起保留七天，到期后停止读取和导出，并安排删除；如需保留，请先导出书库。',
    },
    continue: {
      text: '打开 REZICS，',
      sub: '首先看到下一章。',
      note: '首页顶部的“继续阅读”一栏，每项都会直接打开你还没读的下一章。',
    },
    shelf: {
      label: '书架',
      headline: '书架上的内容，也一起记录。',
      rows: [
        { title: '藏书', body: '清楚记录书架上的书属于哪个版本。买了但还没读，就是还没读。' },
        { title: '借出和借入', body: '分别记录借给谁、借出日期、应还日期和实际归还日期。对方的名字由你填写，不会关联到任何人的账号。' },
        { title: '段落笔记', body: '私人笔记固定在某个版本的某个段落。更换版本后，笔记仍指向原来的段落。' },
        { title: '在读就能关注', body: '把书加入“在读”或“想读”书架，就会自动关注它。你阅读的语言有新章节或新版本时，会收到通知。' },
        { title: '书单', body: '一份书单中可以包含小说、漫画和游戏，你可以自行排序、添加备注，也可以导出。' },
      ],
    },
    privacy: {
      label: '隐私',
      headline: '阅读记录属于个人。',
      rows: [
        { title: '默认不公开', body: '除非你主动选择分享，否则草稿和阅读记录都不会公开。' },
        { title: '不用于广告画像', body: 'REZICS 不会用私人阅读记录建立广告画像，也不会据此推断用于营销的敏感特征。' },
        { title: '使用 AI 不代表同意训练', body: '注册账号、接受服务条款或使用 AI 功能，都不代表同意使用你的记录训练模型。' },
        { title: '移交管理权时', body: '将账号或社区的管理权交给他人，不会连带分享你的阅读记录。' },
      ],
    },
    finaleLead: '接着看看写作的一侧。',
  },

  serial: {
    hero: {
      headline: '逐章写作，逐章阅读。',
      lede: '网络连载、轻小说连载版或你自己的长篇，都能在 REZICS 上写作、排期和发布。稿件不会丢失，读者总能回到上次读到的地方。',
      alt: '一条深绿色的长纸折成一页一页，后半段仍平铺着，折痕处放着一张淡绿色小纸片。',
    },
    safe: {
      label: '稿件',
      headline: '稿件放在这里，不会丢失。',
      rows: [
        { title: '每次保存，都是一个版本', body: '每个版本都会保留，可以比对，也能恢复为新版本。清空一章只是保存一个空白版本，空白章节无法发布。' },
        { title: '按你的时区排期', body: '选择当地的发布时间，排期中的章节会由服务器准时发布，关闭浏览器也不受影响。' },
        { title: '协作者分为四种权限', body: '阅读、建议、编辑和发布分别授权。可以修改稿件的人不一定能发布。' },
        { title: '作者的话与正文分开', body: '章末作者的话是单独内容，不计入字数，不会被翻译，也不会收入之后的出版版。' },
      ],
    },
    mirror: {
      label: '作者与读者',
      headline: '作者做出更改，读者会看到什么。',
      rows: [
        { title: '发布第 12 章', body: '关注这部作品的读者会收到其阅读语言的新章节通知。' },
        { title: '修订第 3 章', body: '之前的留言仍会指向当时版本中的对应段落，不会错位。' },
        { title: '将第 5 章收入短篇集', body: '正文和讨论只保留一份，两处的阅读进度分别记录。' },
        { title: '发布第 13 章时', body: '还没读到的人不会在动态中看到这一章的剧透。' },
      ],
      notes: [
        '读者可以自行调整字号、行宽、字体、缩进、配色以及中日文间距。',
        '日文作品可以竖排阅读，并支持振假名和着重号。',
        '读者写给作者的意见会进入作者专用的收件箱。',
      ],
    },
    ai: {
      label: 'AI 声明',
      headline: '如实说明 AI 的使用情况。',
      rows: [
        { title: '未使用', body: '生成式 AI 没有实质参与这段文字。' },
        { title: '辅助', body: '主要由人撰写，在构思、改写、编辑或部分内容中使用了 AI。' },
        { title: '生成', body: '大部分文字由 AI 生成，包括机器翻译，即使之后经过人工修改也一样。' },
      ],
      notes: ['是否经过人工审核会另外记录，读者可以按这些标记筛选。', '标记由作者声明。REZICS 不会把 AI 检测器的结果作为判定依据。'],
    },
    world: {
      label: '世界设定',
      headline: '世界设定，就放在稿件旁边。',
      lead: '使用模板整理人物、地点、组织、事件、物品和设定，全部私密保存。选定的页面可以公开到作品 Wiki，个人修订历史不会随之公开。',
      items: [
        '在自己绘制的地图上标出地点。',
        '人物关系可以绘制成图，也可以查看文字书单。',
        '使用故事中的历法安排时间线，日期不确定时也可以记录。',
        '连贯性助手只会标出笔记和稿件之间互相矛盾的地方，不会替你写任何章节。',
      ],
    },
    backup: {
      text: '整部稿件，',
      sub: '随时完整带走。',
      note: '修订记录、笔记和世界设定都可以导出为可重新导入的备份。导出功能和核心世界设定不会限制在付费方案中。',
    },
    finaleLead: '写完之后，把作品交到读者手中。',
  },

  publish: {
    hero: {
      headline: '书售出后，文件仍由读者持有。',
      lede: '签约创作者可以在 REZICS 直接销售已获授权的电子书、小型游戏和视觉小说。读者获得的是无 DRM 文件，商店页面就在作品讨论和 Wiki 旁边。',
    },
    buy: {
      label: '购买',
      headline: '读者购书，从选择版本开始。',
      steps: [
        { title: '选择版本', body: '先选择语言和版本，确认译者信息，再阅读一段试读。' },
        { title: '一次付清', body: '一次付清，不是订阅。购买前，页面就会说明你获得的许可。' },
        { title: '保存文件', body: '下载无 DRM 的 EPUB 或 PDF。无须启动器，也没有 DRM 激活步骤。' },
        { title: '接收更新', body: '作者发布约定的更新时，书库会通知你。收据也会保留，文件可按购买条款重新下载。' },
      ],
      caption: '无 DRM 不代表可以转售或传播，具体使用方式以购买前注明的许可为准。',
    },
    statement: {
      label: '结算单',
      headline: '创作者结算单，逐笔列出扣款。',
      rows: [
        { title: '读者付款', body: '这笔交易实际收到的金额。' },
        { title: '税费', body: '代收代缴的销售税、增值税等交易税费。' },
        { title: '支付手续费', body: '实际产生且有凭据可查的支付费用。' },
        { title: '退款和争议款', body: '退款、撤销和拒付。' },
        { title: '净收入', body: '扣除约定的交易费用后，由创作者和 REZICS 按合同分配。' },
      ],
      note: '服务器、薪资和营销等运营成本不会从这笔收入中扣除。同一笔费用也不会重复扣除。',
    },
    distributed: {
      label: '发行范围',
      headline: '这里发行什么，不发行什么。',
      rows: [
        { title: '电子书', body: '已获授权、无 DRM 的 EPUB 或 PDF。' },
        { title: '小型游戏和视觉小说', body: '购买前会清楚说明可下载版本，以及运行所需的平台或账号。' },
        { title: '试读', body: '先读一段，再决定是否购买。' },
        { title: '收据和退款', body: '每笔购买都有收据，也可以申请退款。' },
      ],
      policy: [
        { title: '签约创作者', body: '发行对象是签约创作者，不是任何人都能上架的市场。' },
        { title: '不销售的内容', body: '露骨的性内容，以及分级为 r18 或 r18g 的作品。' },
      ],
    },
    community: {
      text: '商店页面，',
      sub: '就在作品社区旁边。',
      note: '购买前可以查看评论、讨论和 Wiki；购买后，你的版本、进度和收据都会关联到同一部作品。读者也可以关注创作者，查看他们写的小说和制作的游戏。创作者只能看到汇总销售数据，无法查看读者的阅读记录。',
    },
    finaleLead: '原作改编的动画，也会关联到同一部作品。',
  },
};

export default {
  id: 'books',
  base: '/books/',
  name: '书库',
  theme: { kind: 'books' },
  next: 'anime',
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: '书库：记录你的阅读进度',
        description:
          '每部作品都有独立页面，清楚区分原文、译本、单行本和合订本。书库记录你读到哪一卷，并告诉你下一本读什么；Wiki 和讨论则显示到你读过的章节。',
      },
    },
    {
      slug: 'work',
      label: '作品页面',
      meta: {
        title: '作品页面：一部作品的中心',
        description:
          '作品页面将一部作品的事实、评分、你的版本和进度、分卷和改编、Wiki 摘要及讨论放在同一页，顶部只有一个根据你当前状态显示的主按钮。',
      },
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: {
        title: 'Wiki+：用你的 AI 代理创建 Wiki',
        description:
          '文本持有者可以在自己的电脑上运行开源工具包，让自己的 AI 代理逐章整理人物、地点和事件。内容经审核后发布到作品 Wiki，每位读者只会看到自己读过的部分。',
      },
    },
    {
      slug: 'editions',
      label: '版本与系列',
      meta: {
        title: '版本与系列：清楚区分每个版本',
        description:
          '在 REZICS，单行本、合订本、电子版、网络连载和各语言译本都是同一部作品的不同发行。系列按卷数排列，改写剧情的出版版本则作为另一部作品记录。',
      },
    },
    {
      slug: 'library',
      label: '阅读记录',
      meta: {
        title: '阅读记录：如实记录，随时导出',
        description:
          '每次阅读分别记录：重读、暂停、弃读，从纸书换成有声书也算同一次。藏书和借阅单独记录，内容默认私密，可以从其他服务导入，也可以完整导出。',
      },
    },
    {
      slug: 'serial',
      label: '连载',
      meta: {
        title: '连载：逐章写作，逐章阅读',
        description:
          '作者每次保存都可以恢复，章节按自己的时区排期，关闭浏览器也会准时发布。读者可以从上次的位置继续阅读，讨论不会剧透还没读到的章节。',
      },
    },
    {
      slug: 'publish',
      label: '出版',
      meta: {
        title: '出版：直接销售给读者',
        description:
          '签约创作者在 REZICS 销售已获授权的电子书、小型游戏和视觉小说：无 DRM 文件、试读、更新和重新下载，结算单逐项列出税费、手续费和退款。',
      },
    },
  ],
  strings,
} satisfies MiniSite<BooksStrings>;
