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
/** The final invitation, specific to the subject of each page. */
export interface ClosingCopy {
  headline: string;
  body: string;
}

export type AnimeStrings = {
  common: {
    /** Eyebrow of the section that leads to the next pages. */
    onward: string;
    /** Caption under generic example data. */
    example: string;
  };
  landing: {
    closing: ClosingCopy;
    hero: Head & { photo: Photo };
    pages: Section & { lines: { slug: string; line: string }[] };
    schedule: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    next: Statement;
    spoilers: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    parts: Section & { notes: Partial<Record<PartId, string>> };
    neighbours: Section & { tiles: { to: KindId; label: string }[] };
  };
  seasons: {
    closing: ClosingCopy;
    head: Head;
    marks: Section & { rows: Row[] };
    zones: { eyebrow: string; headline: string; body: string[]; photo: Photo };
    known: Section & { rows: Row[] };
    years: Section;
    /** One line that previews the next page. */
    next: string;
  };
  tracking: {
    closing: ClosingCopy;
    head: Head;
    statuses: Section & { rows: Row[] };
    seasons: Section & { tiles: Row[] };
    rewatch: Section;
    lists: Statement;
    next: string;
  };
  discussion: {
    closing: ClosingCopy;
    head: Head;
    spoiler: { eyebrow: string; headline: string; body: string; photo: Photo };
    position: Section & { rows: Row[] };
    conversations: Section & { rows: Row[] };
    spaces: Section & { tiles: Row[] };
    unseen: Statement;
    next: string;
  };
  ratings: {
    closing: ClosingCopy;
    head: Head;
    anatomy: Section & { rows: Row[] };
    episodes: Statement;
    targets: Section & { rows: Row[] };
    lists: Section & { tiles: string[] };
    next: string;
  };
  credits: {
    closing: ClosingCopy;
    head: Head;
    record: Section & { rows: Row[] };
    voice: { eyebrow: string; headline: string; body: string; photo: Photo };
    studio: Section;
    next: string;
  };
  adaptations: {
    closing: ClosingCopy;
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
  name: '动画',
  theme: { kind: 'anime' },
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: '动画：日程、进度、讨论与原作',
        description:
          '在 REZICS 追动画，每集的播出时间都会排进日程，看完一集就记一笔。每集都有讨论和评分，配音演员、制作公司和原作也都关联到同一部作品。',
      },
    },
    {
      slug: 'seasons',
      label: '季度与播出',
      meta: {
        title: '动画季度与播出日程',
        description:
          '动画一年分四季开播。REZICS 把每季的新番和每集播出时间排成一张表，按你的时区显示；只知道日期就只写日期，提醒也能导出到日历。',
      },
    },
    {
      slug: 'tracking',
      label: '追踪进度',
      meta: {
        title: '动画进度：一集一集记',
        description:
          '在 REZICS 记录动画进度：想看、在看、看完、暂停、弃番五种状态，看完一集记一集，按系列顺序找下一集。重看单独记录，列表可以导入，也能整体导出。',
      },
    },
    {
      slug: 'discussion',
      label: '每集讨论',
      meta: {
        title: '动画讨论：每集一串',
        description:
          '在 REZICS，每集动画都有自己的讨论串。标记剧透的内容会先遮住，想看时再自己点开；Wiki+ 按你看到的集数显示，社区也能用 Zone 搭建自己的动画网站。',
      },
    },
    {
      slug: 'ratings',
      label: '评分与列表',
      meta: {
        title: '动画评分、评论与列表',
        description:
          'REZICS 的每个分数都会写明评价对象、评分标准、评分人数和评分群体。整部作品与单集分别计分，评论不一定要打分，列表可以排序、添加注释并导出。',
      },
    },
    {
      slug: 'credits',
      label: '制作与演出',
      meta: {
        title: '动画制作人员与配音演员',
        description:
          '在 REZICS，导演、编剧、制作公司和配音演员各有自己的身份。每条署名都会写明职务和作品，配音信息也关联到角色；关注某个人或公司，就能及时了解新作品。',
      },
    },
    {
      slug: 'adaptations',
      label: '原作与改编',
      meta: {
        title: '动画的原作与改编',
        description:
          '在 REZICS，动画、原作小说、漫画、续季和改编游戏各有自己的身份，再通过关系关联起来。动画和原作的进度分别记录，两边不同的设定也会注明出处。',
      },
    },
  ],
  strings: {
    common: {
      onward: '继续阅读',
      example: '示例。',
    },
    landing: {
      closing: {
        headline: '这一季追的动画，都排进自己的日程。',
        body: '在 REZICS 整理想看的动画，记录进度，再加入每集的讨论。',
      },
      hero: {
        headline: '一集一集，从开播追到完结。',
        lede: '每季的集数和播出时间都会排进日程，按你的时区显示。看完一集就记一集；配音演员、制作公司和原作都关联到这部动画。',
        photo: {
          src: 'hero',
          alt: '一条玫瑰色的长纸带折成十二面，立在暖白色的纸上，末端压着一张炭黑色和一张灰紫色的纸。',
        },
      },
      pages: {
        eyebrow: '六页',
        headline: '从播出表到原作，动画的六个方面各有一页。',
        lines: [
          { slug: 'seasons', line: '每季的播出表，按你的时区显示' },
          { slug: 'tracking', line: '按系列顺序找下一集' },
          { slug: 'discussion', line: '没看过的剧情先遮住' },
          { slug: 'ratings', line: '单集和整部作品分别计分' },
          { slug: 'credits', line: '每个名字都有一个身份' },
          { slug: 'adaptations', line: '原作、续季和外传关联成图' },
        ],
      },
      schedule: {
        eyebrow: '播出安排',
        headline: '凌晨一点首播，按你所在时区显示。',
        body: '日本的播出表会把深夜写成“周二 25:00”，指的是周三凌晨一点。REZICS 会换算成你所在时区的时间；来源只提供日期，就只写日期。',
        link: '季度与播出日程',
        photo: {
          src: 'weeks',
          alt: '玫瑰色的窄纸条排成四行，像一周一周的日程；其中一条是灰紫色，留出了一处空白。',
        },
      },
      next: { text: '下一集该看哪一集，', muted: '按已确认的顺序继续查找。' },
      spoilers: {
        eyebrow: '每集讨论',
        headline: '每集都有讨论串，没看过的剧情先遮住。',
        body: '讨论串关联到每一集。比你的进度靠后的剧情会先遮住，想看时再自己点开；Wiki+ 默认也只显示到你看过的那一集。',
        link: '剧透线如何设置',
        photo: {
          src: 'covered',
          alt: '一条折成数面的玫瑰色纸带平放着，后半段被一张边角微微翘起的炭黑色纸盖住。',
        },
      },
      parts: {
        eyebrow: '八个模块',
        headline: '动画用到的八个模块。',
        lead: '书库、漫画和游戏使用同一套模块。动画选用了其中八个，把日程放在身份旁边。',
        notes: {
          identity: '中文、日文和英文片名都属于同一部动画；续季和电影各有自己的身份。',
          schedule: '开播日期、每集播出时间、延期和停播都排在同一份日程里。',
          credits: '导演、编剧和制作公司分别记录职务，配音信息关联到配音演员和角色。',
          relations: '原作、续季、外传和重制分别注明关系，从原作页面也能找到关联作品。',
          progress: '看到第几集、是否追上播出、下一集是哪集，分别记录。',
          ratings: '整部作品和每集分别评分，同时标明人数和评分群体。',
          discussion: '每集都有讨论串；比你的进度靠后的剧情需要你自己点开。',
          wiki: 'Wiki+ 的每条事实都注明出自哪一集。你看到哪一集，就能读到对应内容。',
        },
      },
      neighbours: {
        eyebrow: '相关作品',
        headline: '原作与改编，各有自己的页面。',
        lead: '原作可以是小说、漫画或视觉小说，动画也可以改编成游戏。每部作品都有自己的页面，再通过关系关联起来；同一位配音演员在不同作品中也有同一个身份。',
        tiles: [
          { to: 'books', label: '小说原作' },
          { to: 'manga', label: '漫画原作与漫画版' },
          { to: 'visual-novels', label: '改编自视觉小说' },
          { to: 'games', label: '改编游戏与共同的配音演员' },
        ],
      },
    },
    seasons: {
      closing: {
        headline: '想追的动画，按你的时间安排。',
        body: '从当季新番开始，查看播出日程，为下一集设置提醒。',
      },
      head: {
        headline: '一年四季，每季一张播出表。',
        lede: '动画通常在一月、四月、七月和十月开播。你追的作品从开播日期到每集的时间，都排在同一张表上。',
      },
      marks: {
        eyebrow: '五种标记',
        headline: '公布、定档、可观看、延期和取消，各有不同含义。',
        rows: [
          { title: '公布', body: '消息已经发布，日期还没有确定。' },
          { title: '定档', body: '已经确定播出日期；知道具体时间时也会一并注明。' },
          { title: '可观看', body: '确认在哪个地区、哪个平台以及用哪种语言可以观看。' },
          { title: '延期', body: '原定日期已经更改，变更记录会保留以供查询。' },
          { title: '取消', body: '不再播出，也会如实标明。' },
        ],
      },
      zones: {
        eyebrow: '你的时区',
        headline: '同一集的播出时间，按你的时区显示。',
        body: [
          '播出时间按你所在的时区显示，同一集在不同地方会对应不同的日期和时刻。',
          '日本播出表上的“周二 25:00”是周三凌晨一点；换算到台北是周三零点，换算到洛杉矶是周二上午。',
        ],
        photo: {
          src: 'weeks',
          alt: '玫瑰色的窄纸条排成四行，像一周一周的日程；其中一条是灰紫色，留出了一处空白。',
        },
      },
      known: {
        eyebrow: '只记录已知信息',
        headline: '日期、时间和能否观看，分别注明。',
        rows: [
          {
            title: '时间不明，就不写时间',
            body: '来源只提供日期，表上就只显示日期，并标明“时间未定”，不会编造时间。',
          },
          {
            title: '播出不等于能观看',
            body: '知道哪天播出，不代表你所在地区可以观看。每个地区和平台是否提供字幕或配音都会分别注明；未知的信息也会标明未知。',
          },
          {
            title: '提醒与日历',
            body: '关注一部动画后，可以在你选择的时间收到提醒，也可以将播出表导出为日历文件。来源更改时间后，提醒会先标出变更，等你决定是否同步调整。',
          },
        ],
      },
      years: {
        eyebrow: '按年份',
        headline: '按年份浏览，直到最后一部。',
        lead: '选择年份后，目录会按资料列出当年发布的动画，可以继续向下浏览。总数统计完成前，会标明“至少”有多少部。',
      },
      next: '追上进度和看完，是两回事。',
    },
    tracking: {
      closing: {
        headline: '看到哪里，下次就从哪里继续。',
        body: '把正在看的动画加入列表，记录每一集，也留下每次重看的记录。',
      },
      head: {
        headline: '每看完一集，进度就前进一步。',
        lede: '正在看的动画，可以一集一集记录。追上已播出的集数、看完所有已播出的集数、整部作品完结，是三件不同的事，REZICS 会分别标明。',
      },
      statuses: {
        eyebrow: '五种状态',
        headline: '想看、在看、看完、暂停和弃番，各有用途。',
        lead: '观看记录默认为私人，只有你主动选择分享时才会公开。',
        rows: [
          { title: '想看', body: '先加入列表。之后有新消息时会通知你。' },
          { title: '在看', body: '记录看到第几集；有新集数发布时，会按通知设置提醒你。' },
          { title: '看完', body: '整部作品已看完。同一故事脉络的 Wiki+ 默认显示全部剧情。' },
          { title: '暂停', body: '暂时停下，进度会保留。' },
          { title: '弃番', body: '不再继续观看。记录会保留，以后也可以回来接着看。' },
        ],
      },
      seasons: {
        eyebrow: '跨季追踪',
        headline: '按系列顺序找到下一集。',
        tiles: [
          { title: '第一季', body: '已看完 12／12 集，接着看第二季' },
          { title: '第二季', body: '已看完 6／6 集，追上当前播出' },
          { title: '特别篇', body: '额外内容，不影响完结状态' },
        ],
      },
      rewatch: {
        eyebrow: '重看',
        headline: '每次重看，都是新的记录。',
        lead: '第二次从头看时会单独记录，不会覆盖第一次的完结日期。只记得观看年份时，就只写年份。',
      },
      lists: {
        text: '列表属于你，随时可以带走：',
        muted: '可以导入在其他地方整理的列表，也能整体导出这里的状态、进度和评分。',
      },
      next: '看完第八集，再去看这一集的讨论。',
    },
    discussion: {
      closing: {
        headline: '把刚看完的那一集，留在讨论里。',
        body: '找到看过同一集的观众，交流看法，等你追上进度再读后面的剧情。',
      },
      head: {
        headline: '看完这一集，就讨论这一集。',
        lede: '讨论串关联到每一集，不必在整部作品的长讨论中翻找。阅读他人的讨论，不需要先加入社区。',
      },
      spoiler: {
        eyebrow: '剧透线',
        headline: '你看到哪一集，剧透线就到哪里。',
        body: '标记为剧透的内容会先遮住，只有你主动点开才会显示。点开只代表你自己选择查看，不代表你认为它是剧透。',
        photo: {
          src: 'covered',
          alt: '一条折成数面的玫瑰色纸带平放着，后半段被一张边角微微翘起的炭黑色纸盖住。',
        },
      },
      position: {
        eyebrow: '你的进度',
        headline: '剧透位置由你决定，切换页面也会同步。',
        rows: [
          { title: '位置由你决定', body: '登录后，Wiki+ 默认显示到你看完的最后一集。你也可以自己选择一集，或者显示全部内容。' },
          { title: '未登录也不会剧透', body: '未登录的访客只能看到第一个剧情揭示之前的内容。' },
          { title: '切换页面也会同步', body: '从讨论切换到评论，再切换到 Wiki+，你选择的版本和剧透位置都会同步。' },
        ],
      },
      conversations: {
        eyebrow: '讨论',
        headline: '三种讨论，分别呈现。',
        lead: '每条发言都能看出属于哪种讨论。',
        rows: [
          { title: '爱好者讨论', body: '聊剧情、聊角色，也可以猜下一集的发展。' },
          { title: '评论回复', body: '针对某篇评论的交流会留在那篇评论下方。' },
          { title: '资料修正', body: '播出日期或配音演员标错时，可以在修正提案下讨论并附上出处。' },
        ],
      },
      spaces: {
        eyebrow: '社区',
        headline: '社区可以聚在一起，也能拥有自己的网站。',
        lead: 'Zone 上的信息框，读取的就是作品页面上的同一条事实。',
        tiles: [
          { title: '社区', body: '社区本身，设有成员、规则和管理机制' },
          { title: 'Zone', body: '社区的网站：角色页面、集数指南、时间线和关系图，网址由社区安排' },
        ],
      },
      unseen: { text: '没看过的内容，', muted: '不必提前知道。' },
      next: '故事和制作可以分别评分。',
    },
    ratings: {
      closing: {
        headline: '留下你的看法，也记录作品。',
        body: '为单集或整部动画评分，写下评论，再把值得重看的作品整理成列表。',
      },
      head: {
        headline: '评分对象与分数一并注明。',
        lede: '同一部动画，可以评价故事，也可以评价某一集的作画。REZICS 会在分数旁标明问题、标准、人数和评分群体，不同问题的评分不会混在一起计算。',
      },
      anatomy: {
        eyebrow: '评分示例',
        headline: '五分制，4.2 分。',
        rows: [
          { title: '问题', body: '第八集的作画。单集和整部动画分别计算评分。' },
          { title: '标准', body: '五分制，平均分为 4.15，以 4.2 显示。' },
          { title: '人数', body: '20 人。人数不足时，只列出人数和分布，暂不显示平均分。' },
          { title: '分布', body: '5 分 10 人、4 分 6 人、3 分 2 人、2 分 1 人、1 分 1 人。' },
          { title: '群体', body: '一个爱好者社区。全站和其他社区分别显示自己的评分，可以切换比较。' },
        ],
      },
      episodes: {
        text: '单集有单集的评分，',
        muted: '整部有整部的评分。',
        note: '每集的分数分别计算；整部作品的分数只来自评价整部作品的人。如果需要合计，会另外标明算法和涵盖的集数。',
      },
      targets: {
        eyebrow: '评论',
        headline: '评论会注明评价的内容。',
        lead: '写评论不一定要打分。',
        rows: [
          { title: '故事', body: '剧情、角色和结局。' },
          { title: '制作', body: '作画、音乐和演出。' },
          { title: '翻译', body: '某种语言版本的字幕译文，并注明具体版本。' },
          { title: '单集', body: '只讨论某一集时，评论就会留在那一集。' },
          { title: '单集中的角色', body: '“这个角色在这一集表现如何”是另一个问题，也有自己的评分。' },
        ],
      },
      lists: {
        eyebrow: '列表',
        headline: '按你的顺序整理列表。',
        lead: '列表可以收录动画，也可以收录原作小说、漫画和游戏。每项都能添加注释，顺序由你决定，也能整体导出。关注他人的列表后，有新条目时会通知你。',
        tiles: ['入坑顺序', '本季在看', '周末一次看完', '原作与动画对照'],
      },
      next: '导演、制作公司和配音演员，都关联着各自参与的作品。',
    },
    credits: {
      closing: {
        headline: '从一个名字，找到下一部作品。',
        body: '沿着导演、作画和配音演员的署名，认识每部作品背后的人。',
      },
      head: {
        headline: '片尾名单上的名字，关联到每部作品。',
        lede: '导演、编剧、作画监督、制作公司和配音演员在 REZICS 各有自己的身份。点开一个名字，就能看到他参与过的每部作品，以及在每部作品中的职务。',
      },
      record: {
        eyebrow: '一条署名',
        headline: '一条署名，写明五项信息。',
        rows: [
          { title: '人物', body: '个人或公司，会关联到自己的页面。' },
          { title: '职务', body: '导演、编剧、作画或配音等职务名称，会提供各语言的译名。' },
          { title: '作品', body: '注明参与的作品，以及是原版还是某种语言的配音版。' },
          { title: '角色', body: '配音署名会在同一条记录中关联配音演员、角色和作品。' },
          { title: '署名', body: '记录当时使用的署名；更改过名字，仍然关联到同一个人。' },
        ],
      },
      voice: {
        eyebrow: '配音演员',
        headline: '每位配音演员都有独立身份。',
        body: '他在动画中配过的角色，以及在游戏和视觉小说中的配音作品，都会列在同一页面。关注他后，有新作品发布时会通知你。',
        photo: {
          src: 'threads',
          alt: '一张玫瑰色的纸沿边打了一排小孔，三条棉线从孔中穿出，分别系着蓝色、灰紫色和玫瑰色的小纸片。',
        },
      },
      studio: {
        eyebrow: '制作公司',
        headline: '一家制作公司，一份作品年表。',
        lead: '公司和个人一样，都是独立身份，不属于任何账号或社区。它历年制作的动画会按年份排列。',
      },
      next: '顺着关系，找到这部动画的原作。',
    },
    adaptations: {
      closing: {
        headline: '从喜欢的动画，接着读它的原作。',
        body: '沿着改编和外传关系找到小说、漫画和游戏，分别记录进度。',
      },
      head: {
        headline: '每部改编作品，都能关联到原作。',
        lede: '动画、原作小说或漫画、续季、外传和改编游戏在 REZICS 都是独立作品，再通过注明类型的关系关联起来。从任意一部作品出发，都能找到其他关联作品。',
      },
      example: {
        eyebrow: '示例',
        headline: '一个故事，可以有多种形式。',
        body: '例如《魔法禁书目录》：原作是镰池和马的轻小说，改编成漫画，也改编成三季动画和一部电影；外传《某科学的超电磁炮》也有自己的漫画和动画。在 REZICS 中，它们各自都是一部作品，关系会注明是改编、续作还是外传。',
        photo: {
          src: 'sources',
          alt: '一张竖放的深绿色纸、一张较小的炭黑色纸和一张横放的玫瑰色纸层层错开叠放，旁边还有一张蓝色小纸。',
        },
      },
      family: {
        eyebrow: '关系图',
        headline: '每部作品都会注明与原作的关系。',
        lead: '尚未确认的关系也会列出，并标明待确认，不会隐藏。',
        tiles: [
          { kind: 'books', relation: '原作', name: '原作小说' },
          { kind: 'manga', relation: '改编自原作', name: '漫画版' },
          { kind: 'anime', relation: '改编自原作', name: '动画第一季' },
          { kind: 'anime', relation: '第一季的续作', name: '动画第二季' },
          { kind: 'books', relation: '外传', name: '外传小说' },
          { kind: 'games', relation: '改编自动画', name: '改编游戏' },
          { kind: 'visual-novels', relation: '改编自原作', name: '改编视觉小说' },
          { kind: null, relation: '关系待确认', name: '另一部改编作品' },
        ],
      },
      scoped: {
        eyebrow: '分别记录',
        headline: '动画和原作，分别记录。',
        lead: '看完动画，不会把原作小说的进度也标记为读完。同一个角色在原作中幸存，在动画中却没有：两种设定可以并存，并分别注明出自哪部作品，以及在哪一集或哪一章揭晓。',
      },
      relations: {
        eyebrow: '关系',
        headline: '关系有名称，两端各有表述。',
        lead: '每种关系都有各语言的名称：这一页写“改编自”，另一页就写“改编成”。',
        rows: [
          { title: '改编', body: '将一部作品改成另一种形式，例如把小说改编成动画。' },
          { title: '续作', body: '延续前一部作品的故事，例如第二季。' },
          { title: '系列', body: '同一系列中的作品，各自保留独立身份。' },
          { title: '重制', body: '从头重新制作，是另一部作品，并与旧作关联。' },
          { title: '外传', body: '从同一个故事延伸出的另一段内容。' },
        ],
      },
      orders: {
        text: '播出顺序和观看顺序，',
        muted: '可以是两条路线。',
        note: '作品会按公布时间排列；如果想告诉新观众从哪里开始看，可以另建一个观看顺序列表，并附上理由。',
      },
      next: '许多动画的故事，始于漫画。',
    },
  },
};

export default site;
