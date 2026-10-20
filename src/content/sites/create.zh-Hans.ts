// 創作與發行 /engine/create/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md).
import type { MiniSite } from '../schema';
import type { ModuleFamilyStrings, ModuleSection, ModuleStatement } from './community';

export interface CreateStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  writing: ModuleSection;
  world: ModuleSection;
  chapters: ModuleSection;
  editions: ModuleSection & {
    specimen: {
      label: string;
      items: { title: string; value: string; unit: string; note: string }[];
      caption: string;
    };
  };
  copyright: ModuleStatement;
  rights: ModuleSection;
  sell: ModuleSection;
  /** The statement of account: its lines and what fills each, never amounts or shares. */
  account: ModuleSection & {
    rows: { label: string; detail: string; kind: 'paid' | 'deduct' | 'net' | 'share' }[];
    deduct: string;
    caption: string;
  };
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CreateStrings = {
  contentsLabel: '本页内容',
  hero: {
    headline: '作者、版本和权利，每一项都记录清楚。',
    lede: '在这里写稿、安排发布时间、发布章节。每次正式发行都会存档，译本和授权逐项署名；直接销售书籍和游戏时，结算单会列出每项扣除。',
    imageAlt: '两叠纸沿着一边用深灰色纸条装订在一起，侧边露出层层颜色。',
  },
  writing: {
    label: '写作',
    headline: '保存过的每个版本，都能找回来。',
    lead: '撰写长篇时可以使用完整工具栏，回复讨论时则只显示最常用的格式。在手机上，工具栏固定在键盘上方，点击后键盘也不会收起；无论章节多长，输入体验都和短回复一样流畅。',
    facts: [
      { title: '每次保存都会留下修订记录', body: '每次保存都会留下一个确定版本。清空一个章节也会保存为空白修订；空白章节不能发布。' },
      { title: '按你的时区发布', body: '安排在周五晚上八点发布，就会在你所在时区的那个时间发布。发布计划由服务器执行，电脑关机也不受影响。' },
      { title: '为协作者分别授权', body: '邀请他人共同写作时，可以分别授权阅读、提出建议、直接编辑或发布；能修改稿件不代表也能发布。读者和协作者的意见会集中在一个反馈收件箱中。' },
      { title: '完整带走作品', body: '作品可以完整备份，也可以导出为保留全部格式的文件；纯文本是可选的简化版本。以前的纯文本和 Markdown 稿件也能导入后继续写作。' },
      { title: '旁注与强调', body: '编辑器可以添加旁注，例如注音或假名，也可以添加强调标记；日文作品支持竖排阅读。' },
    ],
  },
  world: {
    label: '设定集',
    headline: '写作之外，还有一个只属于你的世界。',
    lead: '人物、地点、势力、事件、道具和设定都有可编辑的模板，放在稿件旁边，只有你能看到。',
    facts: [
      { title: '地图', body: '把地点标注在自己绘制的地图上。' },
      { title: '关系图', body: '把人物之间的关系连成一张图。' },
      { title: '年表', body: '日期不确定的事件也能放进年表。每张图都附有可逐条阅读的列表版本。' },
      { title: '选择页面公开', body: '需要公开时，可以选择几页发布到作品的 Wiki+；你私下修改了多少次，读者都看不到。' },
      { title: '连贯性助手', body: '可选的助手只会标出笔记和稿件之间相互矛盾的地方，章节仍由你自己撰写。' },
      { title: '无需订阅', body: '设定集和可再次导入的完整导出文件都无需付费订阅。' },
    ],
  },
  chapters: {
    label: '章节',
    headline: '发布一章，就是把一篇帖子放进一本书。',
    lead: '章节不会单独成为一部作品。书才是作品，评分、关注和作者署名都关联到书；每章是一篇帖子，排进书的目录。',
    facts: [
      { title: '同一章，出现在两个位置', body: '同一章节可以同时加入连载和合集。正文和评论只保存一份，阅读进度则在每个位置分别记录。' },
      { title: '只发布图片或投票也可以', body: '帖子只包含图片或投票也能直接发布，不需要附加文字。' },
      { title: '作者的话不算正文', body: '写在章末的作者的话是帖子的附加内容：不计入字数，翻译时会略过，作品正式发行时也不会收录。' },
      { title: '从下一章继续阅读', body: '首页的“继续阅读”一栏会直接打开下一篇未读章节；章节讨论会停在读者看到的位置，超出进度的剧透会先隐藏。' },
      { title: '评论固定在原文旁', body: '评论和引用会记录当时的修订版本和段落。作者之后修改稿件，评论也不会移到其他句子旁边。' },
    ],
  },
  editions: {
    label: '版本',
    specimen: {
      label: '版本示例',
      items: [
        { title: '主版本', value: '13', unit: '章', note: '加入新章节后继续更新' },
        { title: '已存档的第一版', value: '12', unit: '章', note: '保留发行时的内容' },
      ],
      caption: '同一部作品，第十三章加入主版本后，第一版仍只收录前十二章。',
    },
    headline: '发行版本会存档，之后的内容另行记录。',
    lead: '每部作品都有一个持续更新的主版本，可以不断加入新章节和新语言。正式发行则是从主版本存档的记录，只保留当时实际出版的内容；之后的翻译和增补都会单独记录，并注明来源。',
    facts: [
      { title: '主版本', body: '每部作品都有唯一的主版本，所有读者都从这里进入。新章节和新语言都会加入这里，作品身份不会因此分开。' },
      { title: '网络连载', body: '网络连载的版本也算一种发行。内容会变化，因此会记录原始网址和每次更新的日期快照，并分别存档。' },
      { title: '固定版本', body: '选择已发布的内容，存档为一个固定版本。之后发布的新章节不会出现在这个版本中。' },
      { title: '一个版本，多个渠道', body: '同一版本可以同时发布在多家商店和网站，无论渠道多少都只算一条发行记录；未经许可转载的版本会单独记录，不会并入正式版。' },
      { title: '译本', body: '译本是新的内容版本，会注明译自哪次修订或哪个版本。来源不清楚时会标为未确定，不会猜测。' },
      {
        title: '读者翻译',
        body: '读者翻译网络作品时，译文会收录在一个虚拟发行版本中，并注明翻译进度，例如“一百章中的前二十章”（示意）。虚拟发行只是 REZICS 上的整理方式，不代表这个版本曾经出版。',
      },
    ],
    note: '每条发行记录都会标明状态：正式、非官方、虚拟、停止发行或已取消。状态发生变化，记录仍会保留。',
  },
  copyright: {
    statement: '公开供人阅读，',
    sub: '不代表他人可以转载、销售、翻译或用于训练 AI。',
  },
  rights: {
    label: '译本与权利',
    headline: '译本归于译者署名，权利逐项注明。',
    lead: '谁可以翻译、译文能否公开、作品使用了多少 AI，都不会默认许可。每一项声明都会记录姓名和时间。',
    facts: [
      {
        title: '服务授权有明确范围',
        body: '著作权仍归你所有。你发布到 REZICS 的内容，只授权 REZICS 为提供你使用的服务而存储、复制、传送、显示、处理和转换格式；此授权不包括广告用途、出售你的私人内容、推出新的商业版本，也不包括不受限制的 AI 训练。',
      },
      { title: '每个译本分别署名', body: '一部作品可以同时有多个译本，读者和社区可以分别选择，每个译本都会署上译者姓名。作者有权拒绝原作页面关联某个译本，也可以提出权利申诉。' },
      {
        title: '公开需要依据',
        body: '读者制作的翻译默认是私密的。要向他人公开，必须记录相应依据：原作已进入公有领域、采用允许翻译的开放授权、已取得作者同意，或作者已公开允许翻译。社区投票不能让译文公开。',
      },
      {
        title: '逐段记录进度',
        body: '每段译文都有状态：初稿、已翻译、已校对、定稿。原文某段发生更改后，对应译文会标记为“需要更新”，原样保留，不会移到新句子下方。',
      },
      {
        title: '授权声明',
        body: '每条授权声明都会写明：授权对象、条款及版本、声明人、时间和适用范围。未知信息会注明未知；声明本身不等同于法律上的授权确认。作者也可以公开一项长期授权，例如允许翻译；撤回时，原有声明不会被改写。',
      },
      {
        title: 'AI 使用声明',
        body: '文字、图像和译本会分别标明 AI 的参与程度：未使用、辅助或生成；是否经过人工审核也会单独注明，读者可以自行选择查看。',
      },
    ],
  },
  sell: {
    label: '发行',
    headline: '书籍和游戏，可以直接销售给读者。',
    lead: '与 REZICS 签约的创作者可以直接向读者销售书籍和游戏。书籍提供 EPUB 或 PDF，游戏和视觉小说提供可下载文件；都不添加 DRM，也不需要启动器。',
    facts: [
      { title: '购买前查看详情', body: '结账前会列出版本、语言、兼容要求、价格、税费、卖家、使用授权和退款条件。' },
      { title: '试读、更新和重新下载', body: '读者可以先看试读章节；购买后，更新和重新下载按购买条款提供。' },
      { title: '下架后仍可访问', body: '作品通常下架或合约结束后，已购买的读者仍按原条款和适用法律保有授权。' },
      { title: '保护读者隐私', body: '购买你作品的读者，其阅读记录和书库不会因此交给你。你只能获得对账所需的汇总数据。' },
      { title: '合约只授权发行', body: '发行合约只授权 REZICS 代管、转换格式、宣传和销售。翻译、改编、新版本和 AI 训练都需要另外取得你的同意。' },
      { title: '只销售签约创作者的作品', body: '这里不是开放市场。露骨性内容，以及分级为 R18、R18G 的作品，都不在销售范围内。' },
    ],
  },
  account: {
    label: '结算',
    headline: '每一笔账目都清楚列出。',
    lead: '净收入是实际收到的款项，扣除代收税费、约定的支付和交易费用，以及退款、撤销和拒付。服务器、薪资、营销等运营成本，以及 REZICS 自行缴纳的所得税，都不属于扣除项。',
    rows: [
      { label: '读者付款', detail: '读者实际支付的金额，含税', kind: 'paid' },
      { label: '税费', detail: '依法代收代缴的税费', kind: 'deduct' },
      { label: '支付和交易费用', detail: '有凭证的支付费用，以及合约列明的汇兑和争议费用', kind: 'deduct' },
      { label: '退款和争议款项', detail: '退款、撤销和拒付的款项', kind: 'deduct' },
      { label: '净收入', detail: '付款扣除约定的各项交易费用后的金额', kind: 'net' },
      { label: '创作者分成', detail: '按合约比例支付给你', kind: 'share' },
      { label: 'REZICS 分成', detail: '按合约比例留给平台', kind: 'share' },
    ],
    deduct: '扣除',
    caption: '结算单示例：每项扣除各占一行，不会重复扣除，金额按每笔交易计算。',
  },
  family: {
    closing: '你专心创作，REZICS 为你记录每个版本和每笔账目。',
  },
};

export default {
  id: 'create',
  base: '/engine/create/',
  name: '创作与发行',
  theme: { module: 'create' },
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: '创作与发行：稿件、版本与结算',
        description:
          '在 REZICS 写作、安排发布计划、发布章节，每次保存都会留下修订记录。每个发行版本都会单独存档，译本署上译者姓名，权利逐项声明。也可以直接销售书籍和游戏，结算单会列出每项扣款。',
      },
    },
  ],
  strings,
} satisfies MiniSite<CreateStrings>;
