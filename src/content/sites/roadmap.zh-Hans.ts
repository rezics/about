// 路線圖 (/roadmap/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). A sequence
// without dates or status labels: one engine across every kind, one community at a time.
import type { MiniSite } from '../schema';
import { site as shared } from '../site';

export interface Item {
  title: string;
  body: string;
}

export interface RoadmapStrings {
  hero: { headline: string; lede: string; alt: string };
  order: { label: string; headline: string; lead: string; steps: Item[] };
  further: { label: string; headline: string; lead: string; items: Item[] };
  statement: [string, string];
  promises: { label: string; headline: string; lead: string; items: Item[] };
  constant: { label: string; headline: string; items: Item[] };
  closing: string;
}

export default {
  id: 'roadmap',
  base: '/roadmap/',
  name: '路线图',
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: 'REZICS 路线图：横向构建，逐步开放',
        description:
          'REZICS 只有一套引擎，社区逐个开放。九种内容已经在 REZICS 上，之后新增的种类也共用同一套组成部分，每项新能力只需实现一次。',
      },
    },
  ],
  strings: {
    hero: {
      headline: '引擎横向构建，社区逐个开放。',
      lede: 'REZICS 不会为每个领域另做一套系统。一套引擎支持所有种类，社区则逐个开放，持续完善。',
      alt: '一条深灰色长纸从纸卷上展开，上面依次摆着六张小彩纸',
    },
    order: {
      label: '顺序',
      headline: '没有日期，只有顺序。',
      lead: '每一步都建立在前一步之上，之前积累的身份和关系可以直接沿用。',
      steps: [
        { title: '先构建组成部分', body: '十五个组成部分由所有种类共用，每个只需实现一次，再按需接入。' },
        {
          title: '九种内容',
          body: '书库、动画、漫画、游戏、软件、视觉小说、MCP Hub、Skill Hub 和 API Hub 都已在 REZICS 上，食谱也包含在内。每部作品的 Wiki+ 和书库追踪是其中的核心。',
        },
        { title: '逐个开放社区', body: '接下来每次开放一个社区。条件有两个：已经有人投入心力，而且它能为图谱带来新的关系。' },
        {
          title: '更多种类',
          body: '互动小说、科幻与奇幻书目、模型与评测会逐步加入。新增一种内容只需配置，后端无须为它另写专用程序。',
        },
        {
          title: '新增能力',
          body: '需要新功能时，只需实现一次，有需要的种类都可以使用。地点、统计、排行、自动化、挑战、记录导入、邀请、名称认证和付费会员都以这种方式加入。',
        },
      ],
    },
    further: {
      label: '更多种类',
      headline: '九种之外，还有更多。',
      lead: '下面这些内容都共用同一套组成部分；作品活动、巡礼地点和专门书店还会用到地点功能。',
      items: [
        { title: '科幻与奇幻', body: '选集中的每篇作品都独立记录，可以查到哪本书收录了你要找的译文，避免重复购买。' },
        { title: '互动小说', body: '查找你能读懂的短篇作品，注明所需的模拟器和平台，并链接到可游玩的地方。' },
        { title: '模型与评测', body: '每个分数都注明模型版本、评测条件、数据集和日期，用户评论单独展示。' },
        { title: '作品活动', body: '展会、签售会和发售活动关联到作品、创作者、场地和日期，购票链接指向主办方网站。' },
        { title: '巡礼地点', body: '公开作品场景地点会按你的进度避开剧透，不收录私人住处，也不记录你的行踪。' },
        { title: '专门书店', body: '由店家确认的书店。某个版本是否有货，只依据合作店家的数据，没有数据就标为未知。' },
      ],
    },
    statement: ['组成部分很少增加，种类持续增加；', '每多一种，仍然共用同一套引擎。'],
    promises: {
      label: '一张图谱',
      headline: '只有一张图谱，才能实现这些事。',
      lead: '种类越多，关系越多。下面这些事情，只有让所有内容都在同一张图谱上才能实现。',
      items: [
        { title: '跟随故事读完', body: '从小说、漫画、动画到游戏，阅读和观看顺序以及可观看的渠道都在同一条线上。' },
        { title: '书库知道下一步', body: '阅读、观看和游玩记录都放在同一个书库中，每种内容保留自己的进度单位、版本和语言。' },
        { title: '把书单变成计划', body: '不分种类的书单可以排序、添加备注，再转换成日历或地图。' },
        { title: '关注一个人', body: '关注一位创作者，就能看到这个人的书籍、游戏、制作记录和贡献，全部关联到同一个身份。' },
        { title: '连接现实活动', body: '你关注的作品有展会、签售会或巡礼地点时，就会收到通知。' },
      ],
    },
    constant: {
      label: '始终不变',
      headline: '始终不变的原则。',
      items: [
        { title: '一套引擎', body: '不会为每个领域单独搭建网站，也不会为每种语言另建数据库。' },
        { title: '不堆砌页面', body: '不靠广告堆砌页面，也不会为了搜索排名或 AI 引用而大量生成页面。' },
        { title: '创作者的款项', body: '不会挪用创作者应得的款项。' },
        { title: '贡献者的授权', body: '不会承诺超出贡献者授权范围的数据用途。' },
        { title: '地点和活动', body: '只收录与作品、创作者相关的地点和活动。' },
      ],
    },
    closing: '新增下一种内容时，你的账号和记录都仍在原处。',
  },
} satisfies MiniSite<RoadmapStrings>;
