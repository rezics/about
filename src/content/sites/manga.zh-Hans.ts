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
  name: '漫画',
  theme: { kind: 'manga' },
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: '漫画：从第一话读到最新一集',
        description:
          'REZICS 为每部漫画创建独立身份，连载的每一话、各语言单行本和译本都归入其中。它会记住你读到哪一话，标明所选语言还在等哪一集，也让你和读到同一处的人交流。',
      },
    },
    {
      slug: 'series',
      label: '系列',
      meta: {
        title: '一部漫画的卷、话与译本',
        description:
          '系列和每卷单行本都是作品，每一话则是卷中有固定编号的位置。合订本只记录收录范围，日版和台版属于同一部作品，并分别署上译者姓名，不会重复计算。',
      },
    },
    {
      slug: 'progress',
      label: '进度',
      meta: {
        title: '漫画进度：读到哪一话',
        description:
          '按话记录漫画进度，跨卷、跨合订本和跨设备都能接续。更换阅读语言后，已读卷数仍然有效；下一话尚无你所用语言的译本时，会告诉你正在等待哪一卷。',
      },
    },
    {
      slug: 'creators',
      label: '作者',
      meta: {
        title: '漫画作者：原作、作画与译者',
        description:
          '漫画的每项署名都会注明角色，原作、作画、插画和译者分别列出。同一个人在小说、漫画、动画和游戏中都拥有同一身份，关注一次，就能看到他的新作品和公告。',
      },
    },
    {
      slug: 'adaptations',
      label: '改编',
      meta: {
        title: '漫画与改编：小说、动画和游戏',
        description:
          'REZICS 用注明类型的关联连接漫画的原作和改编作品。每部作品分别记录进度、评分和剧透范围，尚未确认的关联也会如实标明。',
      },
    },
    {
      slug: 'community',
      label: '讨论',
      meta: {
        title: '漫画讨论：聊聊读到的那一话',
        description:
          '每一话都有自己的讨论串，你还没读到的部分会先隐藏。评分会注明评价的是整部作品、单卷还是译本，并显示人数和分布。爱好者可以建立社区、搭建 Zone，并为作品编写 Wiki+。',
      },
    },
    {
      slug: 'publish',
      label: '发布',
      meta: {
        title: '在 REZICS 连载你的漫画',
        description:
          '在 REZICS 发布漫画，整话可以只放图片，也可以按时区安排发布时间、邀请协作者并分别设置权限。他人制作的译本需要你的同意才能公开，每一页都对应原页，整部作品随时可以完整备份。',
      },
    },
  ],
  strings: {
    action: '前往 REZICS',
    landing: {
      hero: {
        headline: '读到哪一话，REZICS 都会为你记住。',
        lede: '单行本、连载中的每一话和各语言译本，都关联到同一部漫画。REZICS 会记住你的进度，并按你选择的语言查找下一话。',
        picture: {
          name: 'hero',
          alt: '一张近黑色的厚纸，像漫画页面一样切出几个大小不同的窗口，其中一个窗口下露出玫瑰色的纸。',
        },
      },
      parts: {
        eyebrow: '八个模块',
        heading: '漫画使用的通用模块。',
        notes: {
          identity: '无论使用哪个译名搜索，都能找到同一部作品。',
          editions: '日版、台版、电子版和合订本分别有独立的发行记录。',
          credits: '原作和作画分别署名，译者署在自己翻译的版本上。',
          relations: '既能查到改编自什么，也能查到改编成什么。',
          progress: '按话记录进度，更换设备也能接续。',
          ratings: '评分会注明评价的是哪一卷、哪个译本。',
          discussion: '讨论按话分别呈现，超出你进度的留言会先隐藏。',
          offers: '哪个语言版本在哪里销售，会注明查询日期。',
        },
      },
      pages: {
        eyebrow: '本网站',
        heading: '本网站分为六话，可以按顺序阅读，也可以直接查看你关心的部分。',
        tiles: [
          { slug: 'series', chapter: '第 1 话', line: '卷、话和译本，归入同一部作品' },
          { slug: 'progress', chapter: '第 2 话', line: '读到哪一话，更换设备也能接续' },
          { slug: 'creators', chapter: '第 3 话', line: '原作、作画和译者，各有署名' },
          { slug: 'adaptations', chapter: '第 4 话', line: '小说、漫画、动画和游戏的关联' },
          { slug: 'community', chapter: '第 5 话', line: '先隐藏剧透，并注明评分对象' },
          { slug: 'publish', chapter: '第 6 话', line: '发布自己创作的漫画连载' },
        ],
      },
      statement: {
        text: '读完已出版的台版，就算追上进度。',
        muted: 'REZICS 也会标明还有哪一卷在等待译本。',
      },
      neighbours: {
        eyebrow: '相关类型',
        heading: '同一个故事，常有多种形式。',
        lead: '小说、动画、游戏和视觉小说各有独立身份，通过改编关系，一部漫画就能关联到它们。',
        tiles: [
          { kind: 'books', line: '原作小说和轻小说' },
          { kind: 'anime', line: '改编为动画，进度分别记录' },
          { kind: 'games', line: '改编为游戏，或由游戏改编' },
          { kind: 'visual-novels', line: '漫画版关联回原作' },
        ],
      },
      closing: {
        statement: '从第一话到最新一卷，都在同一个地方。',
        nextLabel: '下一话　第 1 话',
        nextName: '系列',
      },
    },
    series: {
      intro: {
        eyebrow: '第 1 话　系列',
        headline: '几十卷、几百话，仍然是同一部作品。',
        lede: '系列是一部作品，每卷单行本也是一部作品；每一话则是作品中的固定位置。合订本、新装版和各语言译本会分别记录，最终都关联到同一个身份。',
      },
      levels: {
        eyebrow: '分层查看',
        heading: '逐层查看连载内容。',
        lead: '从整个系列、每卷到每一话，各有不同层次，最终都归在同一个身份下。',
        picture: {
          name: 'series',
          alt: '十几本近黑色的薄册整齐叠放，上面几本用一条深绿色纸带捆在一起。',
        },
        items: [
          { title: '系列', body: '整个连载本身就是一部作品，作者、关注和评分都关联到它。' },
          {
            title: '单行本',
            body: '每卷单行本也是一部作品，可以单独收藏、评分和讨论。卷数按出版时的编号保留，特别编号的卷也不会与其他卷混淆。',
          },
          {
            title: '话',
            body: '每一话在作品中都有固定位置和编号。你的进度、每话的讨论和 Wiki+ 引用出处都会指向这个位置。',
          },
          { title: '合订本', body: '合订本或完全版会一次收录多卷，REZICS 只记录它收录了哪些卷，不会产生重复作品。' },
          {
            title: '译本',
            body: '原文版和各语言译本都属于同一部作品。译本会分别记录译者、权利和发行信息；爱好者翻译也会注明译自哪个版本。',
          },
        ],
      },
      catalogue: {
        eyebrow: '目录信息',
        heading: '每部漫画的目录信息，缺少的会注明“未记录”。',
        items: [
          { title: '形式', body: '漫画或单篇。' },
          { title: '首发年份', body: '首次发表的年份。可以只查看某一年的作品，并一直浏览到最后一部。' },
          { title: '卷数', body: '已经出版的单行本卷数。' },
          { title: '状态', body: '连载中、已完结、暂停、未发售或已取消。' },
        ],
        footnotes: [
          '没有记录的字段不会靠猜测补全。导入的目录信息都会注明来源和授权。',
          '漫画 Zone 可以按书名、形式、状态和年份筛选整个目录。',
        ],
      },
      names: {
        eyebrow: '名称与版本',
        heading: '保留原文书名，也收录各地译名。',
        body: [
          '一部漫画最初的书名、各地译名和读者常用别名都会收录在一起，搜索任意名称都能找到。繁体中文名称不会自动转换成简体；转换后的写法会明确标注。',
          '你阅读的版本也可以私下选择。电子版、新装版或台版，REZICS 都会记住你选择的版本。',
        ],
        items: [
          { title: 'ISBN', body: '通过 ISBN 可以找到对应的单行本、所属译本和整部作品。' },
          { title: '译名', body: '书名有了译名，不代表该语言已经出版译本。' },
        ],
      },
      closing: {
        statement: '无论有多少卷，一部作品仍然只有一个身份。',
        nextLabel: '下一话　第 2 话',
        nextName: '进度',
      },
    },
    progress: {
      intro: {
        eyebrow: '第 2 话　进度',
        headline: '上次读到第 12 话，这次从第 13 话开始。',
        lede: 'REZICS 按卷排列整部漫画的每一话，标出你停止的位置和下一话。在手机上读到一半，回到电脑上也能从同一话继续。',
      },
      language: {
        eyebrow: '更换语言',
        heading: '更换语言后，已读内容仍然有效。',
        lead: '前十卷用日语读完，之后改读简体中文，已读卷数仍然计入进度。接下来，REZICS 会按简体中文为你查找下一卷；简体中文版尚未推出时，会标明你正在等待哪一卷。',
        picture: {
          name: 'progress',
          alt: '一条近黑色的长纸条折成一段一段，右端几段已经折平叠好，折平处夹着一张玫瑰色的小纸片。',
        },
      },
      caught: {
        eyebrow: '读完了吗',
        heading: '“追上进度”有不同含义，REZICS 会分别说明。',
        items: [
          { title: '已追上当前语言', body: '你已读完该语言目前可以阅读的内容，下一卷仍在等待译本。' },
          { title: '已读完已出版内容', body: '原作出版到哪里，你就读到哪里，连载仍在继续。' },
          { title: '系列已完结', body: '连载已经结束，不会再有新的一话。' },
          { title: '内容对应关系未确认', body: '网络版和单行本内容无法对应时，会标记为未确认。一边的进度不会用于计算另一边。' },
          { title: '番外不影响进度', body: '可以跳过标记为选读的番外篇和特别篇，不影响你读完整部作品。' },
        ],
      },
      statement: {
        text: '买了，不等于读过。',
        muted: '书架上有的单行本会记为收藏，阅读进度另行记录。',
      },
      travels: {
        eyebrow: '随你同步',
        heading: '进度会同步，更换设备也一样。',
        items: [
          { title: '多台设备', body: '手机和电脑记录的是同一份进度。操作有误可以撤销，另一台设备也会同步更新。' },
          { title: '继续阅读', body: '点击首页最上方的条目，就能打开下一话。' },
          {
            title: '关注',
            body: '将漫画标记为在读后，就会开始关注。你阅读的语言有新的一话或新的一卷时，会收到通知；通知可以调整为只接收精选内容，也可以全部关闭。',
          },
          {
            title: '导入',
            body: '导入其他网站的漫画列表，可以按对应关系保留状态、日期、评分、标签和私人笔记。重读次数等原始字段会保留七天，请提前导出备份。',
          },
          { title: '导出', body: '可以随时完整导出整个书库，同时带走日期和笔记。' },
        ],
        footnote: '默认情况下，REZICS 不会使用私人阅读记录训练 AI 模型，也不会用它建立广告画像。',
      },
      closing: {
        statement: '读到哪一话，下次就从那里继续。',
        nextLabel: '下一话　第 3 话',
        nextName: '作者',
      },
    },
    creators: {
      intro: {
        eyebrow: '第 3 话　作者',
        headline: '编故事的人和画漫画的人，各有署名。',
        lede: '许多漫画的故事和作画由两个人分别完成。REZICS 按角色署名，每个名字都会关联到这个人的全部作品，无论是漫画、小说还是动画。',
      },
      roles: {
        eyebrow: '署名',
        heading: '按角色分别署名。',
        items: [
          { title: '原作', body: '构思并写下故事的人。' },
          { title: '作画', body: '把故事绘制成漫画页面的人。' },
          { title: '插画', body: '为封面、彩页或小说绘制插画的人。' },
          { title: '译者', body: '只署名在自己翻译的版本上，不会关联到其他版本。' },
          { title: '概念监修', body: '提供原始构想或负责监修的人。' },
        ],
        footnotes: ['爱好者翻译团队也会署名，但不会被视为官方译本。', '角色名称属于资料的一部分，每种语言都可以添加自己的译名。'],
      },
      person: {
        eyebrow: '一个人',
        heading: '一个名字，关联他参与的各类作品。',
        lead: '一位画家可能为小说绘制插画、连载自己的漫画，也为游戏作画。REZICS 会把这些作品都关联到同一个人；关注他后，新作品和公告就会显示在你的关注动态中。',
        tiles: [
          { kind: 'books', line: '为小说绘制的插画' },
          { kind: 'anime', line: '改编成动画的原作' },
          { kind: 'games', line: '为游戏创作的美术' },
        ],
      },
      statement: {
        text: '署名对应的是个人，不是账号。',
        muted: '即使作者本人尚未加入，他的页面也已经存在，并收录他署名的每部作品。',
      },
      closing: {
        statement: '每个名字后面，都注明了他参与的工作。',
        nextLabel: '下一话　第 4 话',
        nextName: '改编',
      },
    },
    adaptations: {
      intro: {
        eyebrow: '第 4 话　改编',
        headline: '一个故事，四种形式。',
        lede: '小说、漫画、动画和游戏在 REZICS 中各自都是一部作品。它们通过有名称的关联连接起来，从漫画可以找到原作和改编作品。',
      },
      example: {
        eyebrow: '示例',
        heading: '例如《魔法禁书目录》。',
        lead: '原作是镰池和马创作、灰村清孝绘制插画的轻小说。REZICS 会将它的每种形式分别记录为一部作品，并注明彼此的关系。',
        picture: {
          name: 'adaptations',
          alt: '深绿色、近黑色和玫瑰色的三张纸从左上到右下排成一列，边角相接。',
        },
        items: [
          { title: '轻小说', body: '原作。正篇、《新约》和《创约》三个系列通过续作关系依次关联。' },
          { title: '漫画', body: '改编自轻小说，由近木野中哉作画。' },
          { title: '动画', body: '同样改编自轻小说，进度与漫画分别记录。' },
          { title: '《某科学的超电磁炮》', body: '衍生作品，有自己的漫画，也改编成了动画。' },
          { title: '游戏', body: '其中一部是视觉小说，可以从这里关联到视觉小说类别。' },
        ],
        footnote: '这只是说明 REZICS 如何记录作品的示例，不代表任何合作或授权。',
      },
      relations: {
        eyebrow: '关联',
        heading: '每条关联都有明确类型。',
        items: [
          { title: '改编自', body: '将小说、动画或游戏改编成漫画，或将漫画改编成其他形式。' },
          { title: '续作／前作', body: '故事承接前一部作品继续发展。' },
          { title: '衍生作品', body: '外传和配角故事会关联回主线作品。' },
          { title: '重写自', body: '作者重新改写故事，情节与原作不同时会作为另一部作品记录。' },
          { title: '重启自', body: '从头重新讲述故事的新版本。' },
          { title: '阅读顺序', body: '除了出版顺序，还可以按剧情整理阅读顺序，两者可以并存。' },
        ],
        footnote: '尚未确认的关联会标记为未确认。宁可留空，也不会勉强关联。',
      },
      apart: {
        eyebrow: '分别记录',
        heading: '看完动画，漫画进度不会自动前进。',
        lead: '动画看到哪里、漫画读到哪里，分别记录。漫画评论和动画评论也可以分别筛选，各自的评分只按对应作品计算。',
      },
      statement: {
        text: '两个版本的剧情不一致时，双方的事实都可以写入 Wiki+。',
        muted: '每条事实都会注明所属版本，显示范围取决于你的阅读进度。',
      },
      closing: {
        statement: '每种形式都有独立身份，也彼此关联。',
        nextLabel: '下一话　第 5 话',
        nextName: '讨论',
      },
    },
    community: {
      intro: {
        eyebrow: '第 5 话　讨论',
        headline: '聊到第几话，就只显示第几话。',
        lede: '讨论串关联到每一话。其他人写到你还没读的部分时，会先隐藏起来，你读到那里之前都不会看到。',
      },
      spoilers: {
        eyebrow: '剧透',
        heading: '超出阅读进度的内容会先隐藏，想看时可以自行打开。',
        items: [
          { title: '本话讨论', body: '每一话都有讨论串。阅读讨论不需要先加入社区。' },
          { title: '隐藏的留言', body: '超出你阅读进度的留言默认隐藏，想看时可以自行点开，只影响你当前的显示。' },
          { title: '投票标记剧透', body: '读者可以投票判断哪些内容属于剧透。投票结果与作者自己的标记分别计算。' },
          {
            title: '三种交流',
            body: '剧情讨论、评论和资料修正各有自己的位置。在三处之间切换时，你选择的版本和阅读进度都会保留。',
          },
        ],
      },
      ratings: {
        eyebrow: '评分',
        heading: '每个分数都会注明评价对象。',
        lead: '整个系列、其中一卷和某个译本分别评分，系列分数不会由各卷平均得出。每个分数都会附上人数、分布和评分群体；评论需要说明评价的是故事还是翻译，也可以只写评论、不打分。',
      },
      gather: {
        eyebrow: '爱好者社区',
        heading: '爱好者交流的空间。',
        items: [
          {
            title: '社区',
            body: '一部漫画的读者可以建立社区，设置成员、规则和管理员。社区精选会关联到作出决定的那次讨论。',
          },
          { title: 'Zone', body: '社区可以为一部作品搭建完整网站，设置自己的页面、导航和外观，数据仍然来自同一份资料。' },
          {
            title: 'Wiki+',
            body: '角色、地点、时间线和每话导读只显示到你读到的那一话。信息框中的每条内容都是经过审核的事实。',
          },
          { title: '列表', body: '整理入门书单或阅读顺序，为每部作品写下理由，可以排序和导出。' },
          { title: '关注', body: '关注一部作品、一位作者或一个社区，并分别设置通知级别。' },
        ],
        footnote: '年龄分级可以分别设置：普遍级、R15、R18 和 R18G 分别开关，尚未评估的内容会标记为“未评估”。',
        tiles: [
          { module: 'community', line: '让爱好者一起讨论、评分和整理列表' },
          { module: 'zones', line: 'Zone 和 Wiki+，社区自己的站点' },
        ],
      },
      closing: {
        statement: '读完一话，就在这一话下讨论。',
        nextLabel: '下一话　第 6 话',
        nextName: '发布',
      },
    },
    publish: {
      intro: {
        eyebrow: '第 6 话　发布',
        headline: '你的漫画，从第一话起就有独立身份。',
        lede: '在 REZICS 连载的作品会与其他漫画一同列入索引。读者可以用同一套进度、讨论和评分功能阅读；有人改编或翻译时，也会关联回你的作品。',
      },
      steps: {
        eyebrow: '流程',
        heading: '从原稿到读者手中。',
        lead: '一话从上传到发布，每一步都由你安排，也都会保留在作品自己的记录中。',
        picture: {
          name: 'publish',
          alt: '一张近黑色的纸折成三面小屏风，每一面都切出几个窗口，光从窗口透进影子里；旁边叠着几张散页。',
        },
        items: [
          { title: '上传本话', body: '一话可以只包含图片页面，不必勉强凑一段文字。作者的话会单独放置，不计入正文，也不会被翻译。' },
          { title: '安排发布时间', body: '设置发布日期和时区后，即使关闭浏览器也会按时发布。' },
          { title: '协作完成', body: '邀请助手和编辑，分别授予阅读、提出建议、编辑或发布权限。发布权限和编辑权限彼此独立。' },
          { title: '每页都有固定位置', body: '每一页都有固定位置。他人翻译时，译本中的每页都会对应到你的原页。' },
          { title: '接收反馈', body: '读者留言和修正建议会集中在作者的反馈收件箱中。' },
        ],
      },
      decides: {
        eyebrow: '由作者决定',
        heading: '这些事项由作者决定。',
        items: [
          {
            title: '翻譯',
            body: '他人制作的译本默认不公开。取得你的同意或依据你事先提供的开放授权后，译本才会公开；你也可以拒绝作品关联到某个译本。',
          },
          { title: '权利', body: '为作品添加授权声明，明确读者和译者可以如何使用。' },
          { title: 'AI 使用', body: '每一话都可以注明 AI 的参与程度：未使用、辅助或生成。读者可以按此筛选。' },
          { title: '修订', body: '修改过的页面会留下修订记录。读者之前留言时看到的版本不会被悄悄替换。' },
          { title: '备份', body: '随时可以完整备份整部作品和所有修订记录。' },
        ],
      },
      elsewhere: {
        eyebrow: '其他平台连载',
        heading: '已经在其他地方连载，也可以记录在这里。',
        lead: '在自己的网站或其他地方连载的作品，也可以在 REZICS 创建身份。网络连载会记录为一次发行，并附上网址和带日期的快照；出版单行本后，每卷另行记录。',
      },
      closing: {
        statement: '作品发布在 REZICS，主导权仍然属于作者。',
        nextLabel: '下一站',
        nextName: '游戏',
      },
    },
  },
} satisfies MiniSite<MangaStrings>;
