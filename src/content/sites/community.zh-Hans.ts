// 社群 /engine/community/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md). The section shapes are shared with create and trust.
import type { Item, MiniSite } from '../schema';

/** A v3 section: eyebrow, serif heading, lead text and an optional hairline facts list. */
export interface ModuleSection {
  label: string;
  headline: string;
  lead?: string | string[];
  facts?: Item[];
  note?: string;
}

/** The module family's strings: the ring of the five modules and the page's closing line. */
export interface ModuleFamilyStrings {
  closing: string;
}

/** A number written into the rules: a numeral, its unit and one sentence. */
export interface Figure {
  value: string;
  unit: string;
  body: string;
}

/** A large serif statement; `sub` is its muted second half. */
export interface ModuleStatement {
  statement: string;
  sub: string;
  body?: string;
}

export interface CommunityStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  person: ModuleSection;
  lead: ModuleSection & {
    /** The post's byline as two kinds of reader see it (示意). */
    specimen: {
      toggleLabel: string;
      toggle: [string, string];
      you: string;
      realm: string;
      follow: string;
      post: string;
      caption: string;
    };
  };
  realm: ModuleSection;
  leave: ModuleStatement;
  ratings: ModuleSection & { figures: Figure[] };
  follow: ModuleSection;
  feed: ModuleSection;
  recognition: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CommunityStrings = {
  contentsLabel: '本页内容',
  hero: {
    headline: '你负责发言，社区提供场地。',
    lede: '你只有一个公开身份，评论、列表和书架都跟随你。每个社区都有话题、规则和管理方式，但不会把你的身份归到社区名下。',
    imageAlt: '许多小纸片围绕着一张较大的深灰色纸片，像一群人聚在同一张桌子旁。',
  },
  person: {
    label: '身份',
    headline: '一个公开身份，走过每个社区。',
    lead: '你可以使用笔名，但不能冒充他人。书架、列表、评论、作品、译本和讨论都归属于这个身份，不属于任何一个社区；换个社区，你仍然是同一个人。',
    facts: [
      { title: '改名后链接仍然有效', body: '改名后，旧网址会转到新名字；与他人名字过于相似的名称会被拦截。' },
      { title: '认领你的作品', body: '如果数据库中已收录你的作品，你可以认领对应身份。' },
      { title: '关注是单向的', body: '别人关注你不需要等你同意，你也可以拒绝。关注者自行设置接收哪些通知以及接收频率。' },
      { title: '帖子保留在原处', body: '离开一个社区后，你在那里发布的帖子仍会署上你的名字，也仍然留在那里。' },
      {
        title: '社区发布内容时',
        body: '社区也可以用自己的名义发布精选内容和决定，但只能由获授权的代表发布，每项精选都会关联到背后的决定。你的帖子发布在社区中，不会因此变成社区发言。',
      },
    ],
  },
  lead: {
    label: '署名',
    headline: '帖子中谁排在前面，有固定规则。',
    lead: '每条帖子都会显示你和社区的名字。对不认识你的人来说，名字说明不了什么，因此会先显示社区；关注你之后，帖子会先显示你的名字。',
    specimen: {
      toggleLabel: '切换查看身份',
      toggle: ['关注你的人看到', '尚未关注你的人看到'],
      you: '你',
      realm: '奇幻小说读书会',
      follow: '追蹤',
      post: '第三卷的结尾，比我想象的还要安静。',
      caption: '示意：同一条帖子，不同读者看到的署名。',
    },
    facts: [
      { title: '读者关注了你', body: '先显示你的名字，再显示社区。' },
      { title: '帖子不属于任何社区', body: '署名从你的名字开始。' },
      { title: '其他情况', body: '先显示社区，关注按钮就在同一行。' },
      { title: '社区的精选和决定', body: '只显示社区，不显示挑选者。' },
    ],
    note: '排在前面的一方会使用图标和粗体显示。规则固定，同一条帖子不会每次都换一种样式。',
  },
  realm: {
    label: '社区',
    headline: '社区提供场地，也由社区制定规则。',
    lead: '谁能加入、新成员能看到什么、如何管理内容，都由各个社区自行决定，并公开相关设置。',
    facts: [
      { title: '三种加入方式', body: '开放加入、申请加入或受邀加入。加入时会同时关注这个社区；离开时只会取消因加入而产生的关注。' },
      { title: '规则支持多种语言', body: '使用中文的成员可以阅读中文版，使用日文的成员可以阅读日文版；发帖也不限制语言。' },
      {
        title: '可阅读，不一定可搜索',
        body: '社区可以公开供人阅读，同时不出现在搜索、推荐和网站地图中。私密社区如果接受申请，外部访客只能看到名称、介绍、规则和申请按钮。',
      },
      { title: '举报会形成案件', body: '成员举报的内容会形成案件，处理结果会附上理由，当事人可以申诉。' },
      { title: '投票决定', body: '社区可以发起投票；通过的决定只能执行社区原本获准开展的事项。' },
      { title: '平台规则优先', body: '社区可以制定比平台更严格的规则，不能更宽松。所有者无法自行关闭社区，只有平台可以因管理或权利问题将其下架，也可以恢复。' },
    ],
  },
  leave: {
    statement: '你随时可以离开一个社区，',
    sub: '因为你的身份、书架和列表本来就不属于它。',
  },
  ratings: {
    label: '评分',
    headline: '评分旁会注明问题、对象和评分者。',
    lead: [
      '每项评分都会标出三件事：评什么、评哪个对象、由哪类人评分。评价的问题不同，分数就不会合并计算；单集评分不计入整部作品，某个版本的评分也会保留在该版本下。',
      '评论可以不打分，只需注明评价的是故事、翻译、朗读还是制作，以及对应的版本。默认先看全站评分，旁边列出你所在的社区和评分人数最多的几个社区；没有任何评分时，页面不会显示零分，也不会绘制空白分布图。',
    ],
    figures: [
      { value: '5', unit: '个评分', body: '一部作品有 5 个评分后才会显示平均分；数量不足时只显示评分数和分布，并注明还差多少个。' },
      { value: '10', unit: '个评分', body: '更细分的对象，例如单集中的一个角色，需要有 10 个评分才会显示平均分。' },
      { value: '50', unit: '个评分', body: '至少有 50 个评分才能进入排行榜，排行榜会公开采用的平均分和权重。' },
    ],
    note: '这是默认门槛，每种评分都可以根据自身数据调整。',
  },
  follow: {
    label: '关注',
    headline: '你可以关注任何内容。',
    lead: '你可以关注个人、组织、社区、作品、主题、列表，甚至一组已保存的筛选条件。每个关注对象都有三种通知设置：全部、精选或关闭。',
    facts: [
      { title: '个人和组织', body: '默认通知新作品和公告。' },
      { title: '作品', body: '你看得懂的语言有新章节或新版本时会通知你；加入“在读”后会自动关注。' },
      { title: '社区', body: '默认只通知公告和决定，一般帖子会留在动态中。' },
      { title: '主题和视图', body: '默认不发送通知，各自成为首页中的一个标签页。' },
      { title: '列表', body: '列表不限制作品类型，小说后面可以接着放动画和游戏。每项都能添加备注，你可以调整顺序，也能随时导出整个列表。' },
      { title: '关闭通知也不会漏掉与你相关的内容', body: '关闭通知后，回复和提及等与你直接相关的内容仍会通知。' },
    ],
  },
  feed: {
    label: '动态',
    headline: '最新内容排在最前，看过的会标出来。',
    lead: '关注动态中的“最新”完全按时间排序，不会悄悄重新排列；切换排序方式时，也能看到排序依据。',
    facts: [
      { title: '“最佳”分别计分', body: '“最佳”排序会在每个社区中单独计分，单页不会被同一个社区占满，小型社区也能展示。' },
      { title: '推荐注明理由', body: '推荐只参考你的关注内容、语言和书架，每条都会注明理由，也可以全部关闭。' },
      { title: '静音、忽略和屏蔽', body: '这是三种不同的操作，统一放在一个菜单中。' },
      { title: '通知接收方式', body: '可以分别选择收件箱、推送通知和定期邮件摘要；不想再收邮件时，点击一次即可退订。' },
    ],
  },
  recognition: {
    label: '等级',
    headline: '只有被采纳的贡献才计入等级，签到不算。',
    lead: '每个社区都有自己的经验值和等级，经验来自被采纳且确实有帮助的评论、修正、翻译、管理和创作。等级不能消费或转让，也不代表管理权限；使用多个账户刷等级违反使用规范。',
  },
  family: {
    closing: '想自己决定每个页面，就为社区建立一个站点。',
  },
};

export default {
  id: 'community',
  base: '/engine/community/',
  name: '社区',
  theme: { module: 'community' },
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: '社区：一个身份，走过每个社区',
        description:
          '你在 REZICS 只有一个公开身份，书架、列表和评论都跟随你进出每个社区。社区提供讨论场地、规则和管理，评分注明问题和对象，关注和通知由你设置。',
      },
    },
  ],
  strings,
} satisfies MiniSite<CommunityStrings>;
