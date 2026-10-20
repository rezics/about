// 通用索引 (/engine/universal-index/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The page follows one work, 《魔法禁書目錄》, as a plain-text example of how REZICS records a work
// (.temp/sites/EXAMPLE-WORK.md: no cover or likeness, no publishers or studios, no counts).
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'universal-index')!;

export interface Item {
  title: string;
  body: string;
}

export interface IndexStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  names: {
    label: string;
    headline: string;
    lead: string;
    /** `lang` is a BCP 47 tag; the Japanese title is set in a Japanese face (Noto Sans TC lacks 録). */
    names: { name: string; lang: string; label: string }[];
    caption: string;
  };
  people: { label: string; headline: string; lead: string; rows: Item[]; characters: string };
  layers: { label: string; headline: string; lead: string; alt: string; items: Item[]; aside: string };
  relations: {
    label: string;
    headline: string;
    lead: string;
    /** Related works, with each sequel's source made explicit; `kind` colours its tile. */
    items: { id: string; rel: string; name: string; line: string; kind: 'books' | 'manga' | 'anime' | 'visual-novels' }[];
    note: string;
  };
  values: { label: string; headline: string; lead: string; items: Item[] };
  merge: { label: string; headline: string; lead: string; items: Item[] };
  closing: string;
}

export default {
  id: 'universal-index',
  base: '/engine/universal-index/',
  name: mod.name,
  theme: { module: 'universal-index' },
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: '通用索引：一部作品，一个身份',
        description:
          '以《魔法禁书目录》为例，了解 REZICS 如何为一部作品设定唯一身份：各语言名称、署名、作品与发行、续作与改编、筛选与视图，以及合并与拆分。',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: '模块',
      headline: '一部作品，一个身份。',
      lede: '例如《魔法禁书目录》：日文原名、中文名和英文名都指向同一部作品。系统会优先显示符合你阅读语言的名称。',
      alt: '一张深灰色底纸上，许多大小相同的灰色和彩色纸片排成整齐的网格，其中一片翘起一角',
    },
    names: {
      label: '名称',
      headline: '名称可以有很多个，身份只有一个。',
      lead: '每个名称都会记录语言和用途：原名、译名、别名或读音。搜索可以识别每个名称，用哪个都能找到同一部作品。',
      names: [
        { name: '魔法禁书目录', lang: 'zh-Hant', label: '繁体中文书名' },
        { name: 'とある魔術の禁書目録', lang: 'ja', label: '日文原名' },
        { name: 'A Certain Magical Index', lang: 'en', label: '英文书名' },
      ],
      caption: '以《魔法禁书目录》为例，说明 REZICS 如何记录一部作品。',
    },
    people: {
      label: '署名',
      headline: '每个人只有一个身份，署名注明职责。',
      lead: '镰池和马是小说作者，也是改编漫画、动画和游戏的原作作者，点击后都会进入同一页面。每个名字都关联到一个人或组织，并注明职责和负责部分；说法不同时，会并列显示各自的说法和来源。',
      rows: [
        { title: '镰池和马', body: '作者：小说。原作：改编漫画、动画和游戏。' },
        { title: '灰村清孝', body: '插画：小说。' },
        { title: '近木野中哉', body: '作画：漫画。' },
      ],
      characters: '角色也一样。同一个角色出现在小说、漫画和动画中，仍然只有一个身份，各部作品分别记录其出场。',
    },
    layers: {
      label: '三个层级',
      headline: '作品、文本、发行，分三个层级记录。',
      lead: '作品是故事本身。同一个故事可以有不同文本：日文原文、中文译本、英文译本。每次实际出版都作为一条发行记录。',
      alt: '深灰色、暖灰色和绿色的三张纸依次交叠，暖灰色纸的一角轻轻卷起',
      items: [
        { title: '作品', body: '故事本身。评论、关注和关系都关联到这一层。' },
        { title: '文本', body: '原文和各语言译本。译本是同一部作品的另一种文本，有自己的译者和权利。' },
        { title: '发行', body: '平装本、电子书、合订本，每次出版都单独记录，只包含当时实际出版的内容。' },
      ],
      aside: '修正错字和重新印刷仍属于同一部作品；改写情节的版本则单独建立作品，并通过“改写”关系关联回来。',
    },
    relations: {
      label: '关系',
      headline: '关系只记录一次，两端各有表述。',
      lead: '正篇、《新约》和《创约》分别记录，再通过续作关系连接。正篇页面写“续作”，《新约》页面写“前作”，读取的是同一条关系。漫画、动画和外传也分别关联到来源。',
      items: [
        { id: 'shinyaku', rel: '正篇的续作', name: '《新约》', line: '第二个系列，2011 至 2019 年', kind: 'books' },
        { id: 'souyaku', rel: '《新约》的续作', name: '《创约》', line: '第三个系列，2020 年开始，仍在出版', kind: 'books' },
        { id: 'manga', rel: '改编作品', name: '漫画', line: '近木野中哉作画，2007 年开始连载', kind: 'manga' },
        { id: 'anime', rel: '改编作品', name: '动画', line: '三季（2008、2010、2018 年）和一部电影（2013 年）', kind: 'anime' },
        { id: 'railgun', rel: '外传', name: '《科学超电磁炮》', line: '和《科学一方通行》一样是外传，与正篇共用角色', kind: 'manga' },
        { id: 'vn', rel: '改编作品', name: '视觉小说', line: '2013 年推出，也收录在视觉小说目录中', kind: 'visual-novels' },
      ],
      note: '每种关系都有名称、方向和来源。两个名称相似不算证据；没有证据的关系宁可不建立。',
    },
    values: {
      label: '筛选',
      headline: '每个取值，都有自己的页面。',
      lead: '人物、类型、语言和改编来源都可以单独打开查看；组合多个取值，就是一次筛选。',
      items: [
        { title: '绑定到同一次出场', body: '“主角”和某个角色绑定在同一次出场记录中，不会误把其他角色作为主角的作品算进来。' },
        { title: '保存为视图', body: '保存条件并命名，就能创建一个视图：可以关注、固定在首页作为标签页，也可以作为 Zone 的目录。' },
        { title: '查看所有结果', body: '每份书单都可以翻到最后一条。页面会说明条目数是准确值还是下限。' },
      ],
    },
    merge: {
      label: '合并与拆分',
      headline: '合并可以撤回，拆分会记录去向。',
      lead: '有人用英文书名为同一部作品多建了一条记录。合并之前，REZICS 会先列出所有受影响的数据，每项冲突都需要作出决定。',
      items: [
        {
          title: '先搜索，再创建',
          body: '创建新条目之前，先用原文书名、别名、读音、作者和标识符搜索。找到后就添加别名或版本；书名或 ISBN 相同都只是线索，不是证明。',
        },
        {
          title: '合并',
          body: '评分、书单、书库记录和 Wiki 事实都会归入保留的那条记录。同一个人的两次评分不会变成两票，两本藏书也不会合并成一本；旧网址仍可打开，并会跳转到保留的记录。',
        },
        { title: '撤回', body: '撤回是一项新的决定，不是倒回过去。合并后新增的编辑会逐条归回原处；无法确定的部分会列入待审核。' },
        { title: '拆分', body: '两本同名书被记成一条记录时，拆分后，旧记录会说明拆成了哪些记录，并列出每条记录的去向。' },
        {
          title: '由人决定',
          body: '任何人都可以提出合并，AI 代理也可以；最终由审核者决定。已经有人使用或存在争议的合并，需要两位彼此独立的人批准，机器人和操作者只算一人。',
        },
      ],
    },
    closing: '在 REZICS 找一部熟悉的作品，看看它有哪些名称。',
  },
} satisfies MiniSite<IndexStrings>;
