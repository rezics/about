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
  closingBody: '查找版本、记录游玩、撰写评论、向独立创作者购买游戏，都使用同一个账户。',
  pictures: {
    hero: '暖白色纸面上，一张蓝色大纸板从一角向外扇形展开，露出深浅不同的蓝色、紫色和青绿色纸片。',
    store: '一张浅蓝色纸片穿过蓝色纸板上的一道切口，下半段轻轻卷起。',
    library: '蓝色纸片折成浅盒，盒面切出一排细缝，蓝色、浅蓝色、玫瑰色和绿色纸片立在缝里，最后一道缝空着。',
    guides: '一条蓝色长纸折成几段，前三段展开，其余部分折成一叠，上面盖着一张白纸。',
    creators: '一张蓝色纸板折成立起的小亭子，旁边放着一张紫色纸片和一张浅蓝色纸片。',
  },
  example: {
    langNames: { zh: '简中', ja: '日文', en: '英文' },
    platforms: { pc: '電腦', console: '家用主機', handheld: '掌機', mobile: '手機' },
    editions: { std: '标准版', deluxe: '豪华版', complete: '完整版' },
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
      headline: '每款游戏、每个版本，都记录清楚。',
      lede: '不同平台的发行、版本和语言分别记录，评分注明对应版本，攻略和 Wiki+ 都关联到同一款游戏。你也可以在这里向独立创作者购买游戏文件，并长期保留。',
    },
    releases: {
      label: '发行',
      headline: '同一款游戏的不同发行，分别记录。',
      lead: '电脑、家用主机、掌机和手机各有发行记录，地区版、豪华版和完整版也各算一条。每条记录都注明语言、需求和上架信息。',
      items: [
        { id: 'handheld-asia', title: '掌机版，亚洲版', body: '文字：简中、日文。地区：亚洲。日本版另记一条，文字只有日文。' },
        { id: 'pc-std', title: '电脑版，标准版', body: '文字和字幕：简中、日文、英文。配音：日文。三种语言分别记录。' },
        { id: 'console-complete', title: '家用主机版，完整版', body: '文字：简中、日文、英文。内容：游戏本体和全部扩展内容，各自保留页面和评分。' },
        { id: 'mobile-std', title: '手机版，标准版', body: '语言：未知。状态：已公布。资料未经确认时，不会用其他平台的语言补全。' },
      ],
      caption: '示意：一款虚构冒险游戏的四条发行记录。',
      link: '了解如何找到能玩的版本',
    },
    versions: {
      text: '评分对应具体版本，下载次数不用于排名；',
      more: '没有查到的信息标为“未知”，不靠猜测补全。',
    },
    store: {
      label: '商店',
      headline: '购买游戏后，文件由你保留。',
      lead: 'REZICS 商店销售签约独立创作者的游戏和视觉小说，不含 DRM，也不需要启动器。创作者保留著作权，结算单逐项列出扣款；玩家可在同一页面查看评分、讨论和 Wiki+。',
      link: '了解商店和购买流程',
    },
    pages: {
      label: '六个页面',
      headline: '六件事，各有一页。',
      lines: {
        releases: '语言、平台和版本在同一条发行记录中筛选',
        store: '一次付费，按购买条款重新下载',
        library: '记录每次游玩所用的平台',
        reviews: '每项评分注明版本和评分人群',
        guides: '按你的进度显示内容，并链接到各类改编',
        creators: '保留著作权，结算单逐项列出扣款',
      },
    },
    connections: {
      label: '相关类型',
      headline: '与游戏相关的五类内容',
      lead: '改编关系、原作和共同创作者把游戏与其他类型联系起来。从原作小说一路找到游戏，小说读到哪里、游戏玩到哪里，分别记录。',
      tiles: [
        { to: 'visual-novels', line: '按语言、平台和内容范围筛选发行版本' },
        { to: 'books', line: '游戏的原作，以及由游戏衍生的小说' },
        { to: 'anime', line: '由游戏改编的动画，以及改编成游戏的动画' },
        { to: 'manga', line: '同一故事的漫画，关联到游戏' },
        { to: 'software', line: '引擎、制作工具和模组按版本关联到游戏' },
      ],
    },
    closing: '玩下一款游戏前，先找到合适的版本。',
  },

  releases: {
    hero: {
      headline: '找到能玩的版本。',
      lead: '你需要的语言和手上的设备必须对应同一条发行记录。REZICS 分别记录各个平台、地区和版本，筛选时会一起匹配。',
    },
    filter: {
      label: '筛选',
      headline: '筛选条件对应同一条发行记录。',
      lead: '选择简中和掌机两个条件后，只会保留同时满足条件的发行记录。其他版本有简中，或其他平台有掌机版，都不符合。',
      groups: { lang: '语言', platform: '平台' },
      clear: '清除条件',
      none: '没有这个版本',
      result: '符合条件的发行：{count} 条',
      resultNone: '没有发行记录同时符合这些条件。',
      corner: '平台／版本',
      caption: '示意：一款虚构冒险游戏的发行记录。',
    },
    states: {
      label: '发行状态',
      headline: '从公布到下架，每一步分别记录。',
      lead: '日期会变化，记录不会被覆盖。关注一款游戏，就能了解它的进展。',
      items: [
        { title: '公布', body: '官方宣布这款游戏或这个版本，并附上来源。' },
        { title: '预定', body: '已经公布发售日期。预定日期只是计划，还不代表已经上市。' },
        { title: '上市', body: '确认可以购买和游玩，并附上确认日期。' },
        { title: '延期', body: '日期变更后，旧日期仍保留在记录中。' },
        { title: '下架', body: '停止销售或提供时，注明生效日期。' },
      ],
    },
    languages: {
      label: '语言',
      headline: '文字、配音和字幕，分别记录。',
      lead: '“有中文”可能只有字幕，也可能连配音也有中文。REZICS 分别记录文字、配音和字幕的语言。有中文译名不代表有中文版本：游戏有了中文名字，不等于有中文版。',
      items: [
        { title: '官方简中', body: '由发行方提供，并记在实际提供该语言的发行记录中。' },
        { title: '玩家汉化', body: '注明团队名称、所依据的版本和涵盖范围，不会标为官方翻译。' },
        { title: '后续增加的语言', body: '通过更新增加的语言会作为新版本记录，并指向来源，不会改写原有发行记录。' },
      ],
    },
    bundles: {
      label: '合集和扩展内容',
      headline: '一条发行记录，可能包含多部作品。',
      lead: '合集中的作品各自保留独立身份。你购买的是一条发行记录，评分和讨论仍归属于其中的每部作品。',
      tiles: [
        { title: '完整版', body: '包含游戏本体和全部扩展内容' },
        { title: '游戏本体', body: '游戏本身，有自己的评分' },
        { title: '扩展内容', body: '独立成篇的内容有自己的页面，并关联回本体' },
        { title: '原声带', body: '作为一部音乐作品，列在作曲者名下' },
        { title: '重制版', body: '作为另一部作品，通过关联指向原作' },
        { title: '模组', body: '注明所需的游戏版本' },
      ],
      caption: '示意：一条完整版发行记录及其相关作品。内容不变、移植到新平台时，仍是同一款游戏的新发行。',
    },
    requirements: {
      label: '配置要求',
      headline: '配置要求要注明来源。',
      lead: '同一款游戏在同一台设备上，官方说法和实际结果可能不同。两者并列展示，并分别附上来源和日期。',
      tiles: [
        { title: '官方标注', body: '最低和推荐配置，注明来源及适用的游戏版本' },
        { title: '玩家实测', body: '注明硬件、设置、结果和测试日期' },
        { title: '尚未确认', body: '未知、不兼容和资料过期是三种不同状态' },
      ],
    },
    offers: {
      text: '没有资料的地方，',
      more: '会标注“未知”。',
      note: '每家商店、每个地区的上架信息和价格都是一条带日期的记录，价格变化也会保留。查不到时，不会用一家商店的价格代表全部。',
    },
    closing: '语言和设备，都对应同一条发行记录。',
  },

  store: {
    hero: {
      headline: '购买一次，文件由你保留。',
      lead: '这里的游戏和视觉小说来自与 REZICS 签约的独立创作者。不含 DRM，也不需要启动器，已购游戏会按购买条款提供重新下载。',
    },
    checkout: {
      label: '付款前',
      headline: '付款前，这八项信息都会列在页面上。',
      lead: '每款游戏的页面都会列出这些信息，付款前就能查看。',
      items: [
        { title: '版本和语言', body: '注明你购买的版本及其中包含的语言。' },
        { title: '兼容要求', body: '注明支持的平台和运行条件。' },
        { title: '含税价格', body: '付款前即可查看含税总价。' },
        { title: '销售方', body: '注明销售方，以及收款方。' },
        { title: '许可', body: '注明你获得的使用许可。' },
        { title: '退款条件', body: '注明哪些情况可以退款，以及如何退款。' },
        { title: '外部账户', body: '如果游戏需要其他账户或运行环境，会在购买前注明。' },
        { title: 'AI 使用说明', body: '创作者会说明图像、文字和翻译是否使用了 AI。' },
      ],
    },
    purchase: {
      label: '一次购买',
      headline: '从试玩到重新下载，购买分六步。',
      lead: '你可以直接在游戏页面购买，也能在旁边查看评分、讨论和 Wiki+。',
      steps: [
        { title: '试玩', body: '先体验试玩版，再作决定' },
        { title: '付款', body: '一次付清，收据保存在记录中' },
        { title: '下载', body: '下载适用于你平台的文件' },
        { title: '更新', body: '修正版附有更新说明' },
        { title: '重新下载', body: '更换电脑后，登录即可重新下载' },
        { title: '下架后', body: '一般下架后，授权仍按原条款保留' },
      ],
    },
    keep: {
      label: '由你保留',
      headline: '你能保留三项内容',
      lead: '不含 DRM 的游戏文件可按购买条款重新下载；每笔购买的收据会保存在购买记录中；购买前注明的使用许可和条款也会一并保存。',
      more: '不含 DRM 不代表可以转售或传播，你获得的是个人使用许可。退款按页面注明的条件办理，各地法律保障的消费者权利仍然适用。',
    },
    privacy: {
      text: '你购买了哪款游戏，',
      more: '创作者不会因此看到你的游戏库。',
      note: '创作者只会获得处理账务和客服所需的信息。你的游玩记录、列表和其他活动不会因为一次购买就交给对方。',
    },
    refuses: {
      label: '商店原则',
      headline: '商店不会做这些事',
      items: [
        { title: '不要求安装启动器', body: '游玩已购游戏前，无需安装 REZICS 程序。' },
        { title: '不添加 DRM', body: 'REZICS 不会在文件上添加任何激活验证。' },
        { title: '不销售成人分级作品', body: '商店不销售 R18 和 R18G 作品，换标签或拆成补丁也一样。' },
        { title: '不允许随意上架', body: '商店中的游戏来自与 REZICS 签约的创作者，每款都会先确认权利。' },
      ],
    },
    closing: '付款前信息清楚，付款后文件由你保留。',
  },

  library: {
    hero: {
      headline: '你的游戏库，跨平台也跨类型。',
      lead: '电脑、主机、掌机和手机上的游戏，都记录在同一个地方。每次游玩都会记下平台和版本，你读过的书、关注的动画也在其中。',
    },
    status: {
      label: '状态',
      headline: '从想玩到通关，分别记录每种状态。',
      items: [
        { title: '想玩', body: '加入“想玩”后就会关注这款游戏。你看得懂的语言有新版本时，会收到通知。' },
        { title: '在玩', body: '有章节顺序的游戏会记录进度和版本；讨论和 Wiki+ 会据此隐藏剧透。' },
        { title: '暂停', body: '暂时放下，不代表放弃。进度会保留，回来后可以从原处继续玩。' },
        { title: '通关', body: '通关状态记录在这部作品下。完整版中的扩展内容分别计算。' },
        { title: '放弃', body: '不想继续玩时可以标记为放弃，记录仍会保留。想重新开始时，再新开一轮。' },
      ],
    },
    slots: {
      label: '游玩记录',
      headline: '每次游玩，都单独记录。',
      lead: '同一款游戏第二次游玩时，会新建一轮记录，不会覆盖第一轮。每轮都会记录平台、版本和进度。',
      columns: ['轮次', '平台和版本', '状态'],
      rows: [
        { slot: '第一轮', release: '掌机版，亚洲版', state: '通关' },
        { slot: '第二轮', release: '电脑版，1.2 版', state: '在玩，第五章' },
        { slot: '第三轮', release: '家用主机版，完整版', state: '暂停，正在玩扩展内容' },
      ],
      caption: '示意：拥有的版本另行记录，购买不等于玩过。',
    },
    together: {
      label: '同一个游戏库',
      headline: '书、动画、漫画和游戏，都在同一个库里。',
      lead: '不同类型的作品使用各自的进度单位。列表也可以混合内容：一份暑假要玩的列表，可以同时包含游戏、原作小说和改编动画，还能排序、添加备注并整体导出。',
      tiles: [
        { to: 'games', name: '游戏', at: '第五章' },
        { to: 'books', name: '小说', at: '第三册' },
        { to: 'anime', name: '动画', at: '第八集' },
        { to: 'manga', name: '漫画', at: '第四十二话' },
        { to: 'visual-novels', name: '视觉小说', at: '第二条路线' },
      ],
      caption: '示意：一个人的游戏库中，五类内容各用自己的进度单位。',
    },
    playtime: {
      label: '游玩时长',
      headline: '通关需要多久，按平台和玩法分别计算。',
      lead: '想知道今晚的时间够不够玩一款游戏，需要可信的时长数据。REZICS 只根据玩家自愿提供的记录计算。',
      items: [
        { title: '按平台计算', body: '电脑和掌机的时长分别计算，未注明平台的记录单独归为一组。' },
        { title: '按玩法计算', body: '只玩主线和完成全部收集，采用不同的计算方式。' },
        { title: '仅统计通关记录', body: '未通关或未填写时长的记录不会计入平均值。' },
        { title: '注明记录数', body: '平均值旁会附上中位数所在区间和记录数。' },
      ],
      note: '你的游玩时长默认不公开。只有你选择贡献后，记录才会计入统计，而且公开的只有汇总结果。',
    },
    takeout: {
      text: '游戏库属于你，',
      more: '随时都能带走。',
      note: '导出不收费；从其他地方导入的记录会保留来源和匹配关系。无法登录账户时，也可以申请导出。',
    },
    closing: '每次游玩，都记录在你自己的游戏库中。',
  },

  reviews: {
    hero: {
      headline: '先注明评价的是哪个版本，再打分。',
      lead: '游戏上市后会持续更新。1.0 版的评分不应盖过 2.0 版，一个社区的偏好也不应代表所有人。因此，每项评分都会注明版本和人群。',
    },
    versions: {
      label: '版本',
      headline: '每个版本都有自己的评分。',
      lead: '你的评分对应你玩过的版本。跨版本总分会单独计算，并注明计算方式。',
      tiles: [
        { title: '1.0 版', body: '上市当天的版本' },
        { title: '1.1 版', body: '修复存档问题的更新' },
        { title: '1.2 版', body: '新增关卡' },
        { title: '2.0 版', body: '重大改版' },
        { title: '完整版', body: '包含全部扩展内容的发行版本' },
      ],
      caption: '示意：一款虚构游戏的不同版本。',
    },
    who: {
      label: '人群',
      headline: '评分来自哪些人',
      lead: '可以并列查看全站、你加入的社区和评分人数最多的社区的评分。近期和全部是两个不同的问题，不会混成一个数字。',
      items: [
        { title: '数量和分布', body: '每项评分都会附上评分数量和分布。' },
        { title: '人数不足时', body: '评分人数不足时，只显示数量和分布，不计算平均分。' },
        { title: '导入的评分', body: '从其他网站导入的评分会单独标出，不计入 REZICS 的评分。' },
      ],
    },
    targets: {
      label: '评价对象',
      headline: '评价故事、翻译还是制作。',
      lead: '评论会先注明评价对象。故事写得好、汉化质量差，可以分开评价。评论也可以只写文字，不打分。',
      tiles: [
        { title: '故事', body: '剧情和角色' },
        { title: '翻译', body: '某个语言版本的翻译质量' },
        { title: '制作', body: '玩法、画面、音乐和技术表现' },
        { title: '这个版本', body: '某个平台、某个版本的实际表现' },
        { title: '角色在这个版本中的表现', body: '不会影响角色本身的评分' },
      ],
    },
    rules: {
      label: '排名',
      headline: '排名依据会公开说明。',
      items: [
        { title: '不统计下载次数', body: 'REZICS 不记录下载次数，因此不会据此排序或显示。' },
        { title: '推荐附有理由', body: '社区推荐游戏时，会链接到作出这项决定的记录。' },
        { title: '热度不代表正确', body: '评分数量只影响排序，不会改变游戏的分类或资料。' },
        { title: '单独标记剧透', body: '社区可以投票标记剧透，与作者自己的警告分开计算。' },
      ],
    },
    talk: {
      text: '讨论、评论和资料修正，',
      more: '分开进行。',
      note: '闲聊攻略、回复评论、指出资料错误，都各有对应的地方。从一处切换到另一处时，你选择的版本和剧透进度会一并保留。',
    },
    closing: '每项评分，都注明版本和人群。',
  },

  guides: {
    hero: {
      headline: '玩到哪里，就看到哪里。',
      lead: '角色、地点、关卡和攻略都关联到同一款游戏。Wiki+ 会根据章节或路线进度隐藏后续剧透。',
    },
    fog: {
      label: '剧透',
      headline: '还没玩到的内容，先隐藏起来。',
      lead: '显示你选择进度范围内的角色、地点和事件，之后的内容会先隐藏，也可以一次全部展开。未登录访客默认看不到剧情揭示。',
    },
    guides: {
      label: '攻略',
      headline: '攻略注明适用版本。',
      lead: '同一关卡在 1.0 版和 2.0 版中的打法可能完全不同。攻略会注明适用的游戏版本和平台，游戏更新后，读者也能看出这篇攻略适用于哪个版本。',
      more: '社区整理的模组合集也会注明对应的游戏版本和兼容性检查情况。每次修改都有记录：可以查看修改者和修改内容、比较两个版本，也可以还原。',
    },
    rules: {
      label: 'Wiki+',
      headline: 'Wiki+ 的五条规则',
      items: [
        { title: '一条资料，各处一致', body: '角色信息框、筛选和列表读取同一条资料。在一个地方修改，各处都会同步。' },
        { title: 'AI 代理提交，人来审核', body: '代理可以附上来源并提交新事实。未经人工审核的代理内容不会展示给读者。' },
        { title: '同一个角色，只有一个页面', body: '出现在游戏、小说和动画中的同一角色只有一个页面。配音演员会与角色和作品一起列出。' },
        { title: '从脚本整理', body: '对于支持脚本格式的视觉小说，脚本持有者可以在自己的电脑上使用本地工具包，逐段整理人物、地点和事件，再提交提案。REZICS 收到的是附有来源的提案，不会收到完整脚本。' },
        { title: '完整导出', body: 'Wiki 内容和修改记录都可以导出。' },
      ],
    },
    adaptations: {
      label: '改编',
      headline: '从原作到游戏，沿着关联一路追溯。',
      lead: '例如《魔法禁书目录》：镰池和马创作的轻小说，有漫画、三季电视动画和一部电影，也有格斗游戏、视觉小说和手机角色扮演游戏。在 REZICS，它们各自是一部作品，通过“改编自”关联到原作，同一角色在每部作品中都是同一个身份。',
      chain: [
        { to: 'books', name: '轻小说', line: '原作、正传、《新约》和《创约》' },
        { to: 'manga', name: '漫画', line: '2007 年开始连载', rel: '改编自' },
        { to: 'anime', name: '动画', line: '三季电视动画和一部电影', rel: '改编自' },
        { to: 'visual-novels', name: '视觉小说', line: '2013 年的游戏', rel: '改编自' },
        { to: 'games', name: '游戏', line: '格斗游戏和手机角色扮演游戏', rel: '改编自' },
      ],
      note: '出版顺序和推荐的阅读、游玩顺序分别记录。想按故事时间线从最早的事件开始玩，也可以排出顺序。',
      caption: '以《魔法禁书目录》为例，说明如何记录作品之间的关联。',
    },
    zone: {
      text: '一款游戏的社区，',
      more: '可以拥有自己的网站。',
      note: '社区有自己的成员、规则和讨论。Zone 是社区建立的网站，可以自定义路径、导航和外观，并展示攻略和 Wiki+。角色和游戏资料直接取自 REZICS 目录。',
    },
    closing: '玩到哪里看到哪里，故事关联到各类改编。',
  },

  creators: {
    hero: {
      headline: '发行你的游戏，著作权仍归你。',
      lead: 'REZICS 与独立创作者签约，代为发行游戏和视觉小说。玩家购买不含 DRM 的文件和后续更新；你会收到逐项列明的结算单，并用同一个身份关联所有作品。',
    },
    rights: {
      label: '权利',
      headline: '你保留的权利和授权的权利',
      items: [
        { title: '著作权', body: '游戏仍然属于你。REZICS 获得非独占许可，在约定的期限和地区代为托管、销售并交付文件。' },
        { title: '需另行同意的事项', body: '翻译、改编、重大修改、新版本，以及使用作品训练 AI，都需要你另行同意。' },
        { title: '许可声明', body: '你为作品声明的许可会与版本、范围和声明时间一并记录。' },
        { title: '合同结束', body: '按约定停止新的销售，已赚取的款项仍会结清；玩家按原条款和适用法律保留许可。' },
      ],
    },
    ledger: {
      label: '结算单',
      headline: '结算单上，逐笔列出账目。',
      rows: [
        { label: '玩家支付的金额' },
        { label: '代收税款', op: '减' },
        { label: '支付和代收服务手续费', op: '减' },
        { label: '退款和拒付', op: '减' },
        { label: '净收入', op: '等于', total: true },
        { label: '你的分成' },
      ],
      note: '同一笔费用不会重复扣除。服务器和托管、薪资、营销以及 REZICS 自身的所得税，都不会从你的收入中扣除。',
      reserve: '如需预留款项，会注明依据、金额或上限、审核日期和释放规则。',
      caption: '结算单示意；适用的交易费用、销售地区和调整项目以合同为准。',
    },
    name: {
      label: '一个身份',
      headline: '用一个身份关联你的所有作品。',
      lead: '你开发的游戏、创作的小说、谱曲的原声带，或参与配音的动画，都会关联到同一个身份。玩家关注你，就能看到你的新作和公告。',
      tiles: [
        { to: 'games', name: '游戏', role: '开发' },
        { to: 'books', name: '小说', role: '作者' },
        { name: '原声带', role: '作曲' },
        { to: 'anime', name: '动画', role: '配音' },
      ],
      caption: '演职人员名单中的每个名字，都关联到这样的作品集。',
    },
    home: {
      label: '社区和网站',
      headline: '游戏发行后，也有自己的社区和网站。',
      lead: '为游戏建立社区供玩家讨论，再创建 Zone 作为官方网站。公告、发行记录和更新说明会直接写入目录，关注游戏的玩家会按自己的语言收到通知。',
      more: '新版本上市前，可以准备发行资料包，包含图片、说明和时间表，供媒体和玩家引用。你也可以使用本地工具包读取自己的脚本，整理人物和事件，建立游戏的 Wiki+；脚本全文不会提交给 REZICS。',
    },
    rules: {
      text: '上架销售之前，',
      more: '先说明清楚。',
      note: '试玩、描述、截图和兼容信息都必须准确。如果游戏需要外部账户或运行环境，购买前就要注明。AI 使用情况必须如实说明，成人分级作品不能上架。',
    },
    closing: '作品属于你，账目也清楚。',
  },
};

export default {
  id: 'games',
  base: '/games/',
  name: '游戏',
  theme: { kind: 'games' },
  next: 'software',
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: 'REZICS 游戏：目录、商店与游戏库',
        description:
          '每款游戏在 REZICS 只有一个页面，各个平台和版本分别记录。在这里找到能在你的设备上用你的语言游玩的版本，记录每次游玩，也可以向独立创作者购买并保留游戏文件。',
      },
    },
    {
      slug: 'releases',
      label: '平台与版本',
      meta: {
        title: '平台与版本：找到能玩的版本',
        description:
          '同一款游戏的电脑版、家用主机版、掌机版和手机版，以及地区版、豪华版和完整版，在 REZICS 中各有一条发行记录。语言、配置要求和上架信息分别记录，筛选条件对应同一条发行记录。',
      },
    },
    {
      slug: 'store',
      label: '商店',
      meta: {
        title: 'REZICS 商店：购买后可保留的游戏',
        description:
          'REZICS 为签约的独立创作者发行游戏和视觉小说：不含 DRM，不需要启动器，购买后按条款提供重新下载。付款前可查看版本、语言、配置要求、含税价格和退款条件。',
      },
    },
    {
      slug: 'library',
      label: '游戏库',
      meta: {
        title: '游戏库：记录每次游玩',
        description:
          '把想玩、在玩、暂停、通关和放弃的游戏放进同一个游戏库，每次游玩都记录平台和版本。书、动画和漫画也在同一份记录中，免费导出，随时带走。',
      },
    },
    {
      slug: 'reviews',
      label: '评分与评论',
      meta: {
        title: '游戏评分与评论：注明版本',
        description:
          'REZICS 的游戏评分会注明版本和评分人群，并附上数量和分布。评论可以只写文字，对故事、翻译或制作的评价分别记录，下载次数不用于排名。',
      },
    },
    {
      slug: 'guides',
      label: '攻略与 Wiki+',
      meta: {
        title: '攻略、Wiki+ 与改编',
        description:
          '游戏攻略、角色和地点记录在 Wiki+ 中，并按你的进度隐藏剧透，每次修改都有记录。改编成小说、动画和漫画的作品会关联到同一款游戏，社区也可以建立自己的网站。',
      },
    },
    {
      slug: 'creators',
      label: '创作者',
      meta: {
        title: '创作者：在 REZICS 发行游戏',
        description:
          '独立创作者通过 REZICS 发行游戏和视觉小说：保留著作权，提供不含 DRM 的文件和更新，结算单逐项列出税款、手续费和退款。同一个身份关联你的游戏、小说和音乐。',
      },
    },
  ],
  strings,
} satisfies MiniSite<GamesStrings>;
