// The modules overview (/engine/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The kind picker reads each kind's eight parts and notes from kinds.ts. Shared module-ring
// labels live in modules.ts.
// Placeholders in braces are filled at build time.
import type { MiniSite, ModuleId, PartId } from '../schema';
import { site as shared } from '../site';

export interface EngineStrings {
  hero: { headline: string; lede: string; alt: string };
  picker: {
    label: string;
    headline: string;
    lead: string;
    legend: string;
    /** `{kind}` */
    listTitle: string;
    /** `{kind}` */
    link: string;
    note: string;
  };
  statement: [string, string];
  parts: { label: string; headline: string; lead: string; toggle: string; example: string; examples: Record<PartId, string> };
  modules: { label: string; headline: string; lead: string; roles: Record<ModuleId, string> };
  config: { label: string; headline: string; lead: string; items: { title: string; body: string }[]; note: string };
  closing: string;
}

export default {
  id: 'engine',
  base: '/engine/',
  name: '模块',
  next: 'universal-index',
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: 'REZICS 模块：十五个组成部分，五个模块',
        description:
          '从书库、动画、游戏到 MCP Hub，九种内容都由同一套十五个组成部分构成。选择一种内容，查看它使用的八个部分，以及这些部分所属的五个模块。',
      },
    },
  ],
  strings: {
    hero: {
      headline: '九种内容，共用一套组成部分。',
      lede: '书籍、动画、游戏、软件，包括 MCP 服务器，都从十五个共用部分中选择八个组成。',
      alt: '五张深浅不同的灰纸叠成阶梯，最上面一张排着五张小彩纸',
    },
    picker: {
      label: '九种内容',
      headline: '选择一种内容，查看它使用的八个部分。',
      lead: '组成部分的名称始终相同，具体作用则因内容种类而异：书库的版本指译本和合订本，游戏的版本指平台和地区。',
      legend: '选择一种内容',
      listTitle: '{kind}使用的八个组成部分',
      link: '前往{kind}',
      note: '各种内容按需连接共用部分。这里列出的是最能说明这一种内容的八个部分。',
    },
    statement: ['组成部分只需实现一次，', '切换内容，只需调整组合方式。'],
    parts: {
      label: '十五个组成部分',
      headline: '十五个组成部分，各有分工。',
      lead: '同一个组成部分在不同内容类型中承担不同作用。完整目录列出各部分的用途，并附有示例场景。',
      toggle: '查看组成部分目录和示例',
      example: '示意',
      examples: {
        identity: '同一位作者既写小说，也制作游戏。两边的制作人员栏都链接到同一个人。',
        names: '一部视觉小说的日文原名、中文译名和罗马字并列显示，搜索任一名称都能找到。',
        editions: '一套三册的合订本作为一条发行记录，三册仍分别是三部作品。',
        credits: '声优、角色和作品都记在同一条记录中，无须事后拼凑。',
        relations: '动画页面标注“改编自”，原著页面便显示“改编作品”，两者来自同一条记录。',
        facets: '“主角为女性、改编自小说的动画”可以保存为一个视图，命名后即可关注。',
        ratings: '同一本有声书的故事、译文和朗读可以分别评分。',
        discussion: '讨论按阅读进度展开，没有读到的内容不会提前泄露结局。',
        wiki: '人物页面中的信息框读取关系图中的事实。修改一次，所有引用该信息的页面都会同步更新。',
        lists: '入门书单按顺序列出小说、漫画和动画，每项都附有一句说明。',
        progress: '日文版读完前十册，改读中文版时，进度会从第十一册接续计算。',
        follow: '关注已保存的筛选视图。有新项目符合条件时，你会收到通知。',
        offers: '没有相关数据时，供应情况会标为“未知”，不会显示为“有货”。',
        specs: '兼容性记录会注明客户端、版本和观察日期。',
        schedule: '公布、预定、确认和延期是四种状态，分别记录。',
      },
    },
    modules: {
      label: '五个模块',
      headline: '组成部分按用途归入五个模块。',
      lead: '每个模块回答一个问题，使用若干组成部分。信任模块是个例外：它不选择组成部分，而是贯穿每个部分，管理来源、权利和隐私。',
      roles: {
        'universal-index': '这是什么内容',
        community: '人们如何参与',
        zones: '如何搭建网站',
        create: '如何创作和发布',
        trust: '为什么可信',
      },
    },
    config: {
      label: '新增种类',
      headline: '新增一种内容，只需配置。',
      lead: '加入一种新内容，无须为它另写一套后端。组成部分已经就位，只需准备五项配置。',
      items: [
        { title: '词汇', body: '这一种内容有哪些类型和属性，尽量沿用现有词汇。' },
        { title: '映射', body: '将外部数据的每个字段对应到图谱中的属性。' },
        { title: '初始数据', body: '第一批条目，以及它们之间的关系。' },
        { title: '已保存的视图', body: '将几组常用筛选条件设为索引和标签页。' },
        { title: 'Zone', body: '搭建一个网站，为这一种内容整理页面。' },
      ],
      note: '需要新增行为时，只需实现一次并加入新的组成部分，需要它的种类都可以接入。',
    },
    closing: '从你在意的种类开始，其他八种内容也已关联到同一个账号。',
  },
} satisfies MiniSite<EngineStrings>;
