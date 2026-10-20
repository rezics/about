// 站點 (/engine/zones/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). The example
// Zone is an illustrative (示意) 《魔法禁書目錄》 Wiki+ in zh-Hant; text only, per
// .temp/sites/EXAMPLE-WORK.md. Its handle, routes and revision log are not REZICS data.
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'zones')!;

export interface Item {
  title: string;
  body: string;
}

export interface ZonesStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  routes: {
    label: string;
    headline: string;
    lead: string;
    caption: string;
    /** Route title and its path; `depth` indents a child route. */
    entries: { title: string; path: string; depth?: 1; note?: string }[];
    note: string;
  };
  templates: { label: string; headline: string; lead: string; steps: Item[]; note: string };
  themes: { label: string; headline: string; lead: string; items: Item[] };
  wiki: { label: string; headline: string; lead: string; items: Item[] };
  shared: { label: string; headline: string; lead: string; more: string; alt: string };
  log: { label: string; headline: string; lead: string; caption: string; entries: Item[]; items: Item[] };
  closing: string;
}

export default {
  id: 'zones',
  base: '/engine/zones/',
  name: 'Zone',
  theme: { module: 'zones' },
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: 'Zone：在共享图谱上搭建网站',
        description:
          'Zone 是社区基于 REZICS 共享数据搭建的完整网站，路由、模板、导航和主题都由社区决定。了解 Wiki+ 如何构建、避开剧透以及更新版本。',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: '模块',
      headline: '网站各自拥有，数据彼此共享。',
      lede: '每个 Zone 都有自己的首页、导航和版式。社区决定网站的样子，作品、人物和事实都来自共享数据。',
      alt: '一张深灰色的纸折成没有屋顶的小房子，前墙开着一扇门，两个房间里各放着一张玫瑰色和蓝色的小纸片',
    },
    routes: {
      label: '路由',
      headline: '网址下的每一层，都由社区安排。',
      lead: '每条路由都有固定身份，路径可以使用中文。详情页只打开这个 Zone 收录的数据，创建路由也不会增加一条数据。导航是另一棵树，顺序由社区安排。',
      caption: '示例：《魔法禁书目录》Wiki+ 的路由',
      entries: [
        { title: '首页', path: '/z/index-wiki' },
        { title: '作品', path: '/z/index-wiki/作品' },
        { title: '《新約》', path: '/z/index-wiki/作品/新約', depth: 1 },
        { title: '人物', path: '/z/index-wiki/人物' },
        { title: '阅读顺序', path: '/z/index-wiki/阅读顺序', note: '自定义页面' },
        { title: '年表', path: '/z/index-wiki/年表' },
        { title: '搜索', path: '/z/index-wiki/搜索' },
      ],
      note: '路径由 Zone 的路由表管理，平台保留的词很少，不会占用你的网址。讨论位于社区的 /r/index-wiki，两边互相链接。',
    },
    templates: {
      label: '模板',
      headline: '从最具体的模板开始匹配。',
      lead: '页面上的每个区块都对应一个来源：当前这条数据、它的某个属性、一份文档、一份书单，或一个已保存的查询。区块中的书单都能翻到最后一条。',
      steps: [
        { title: '路由指定', body: '如果这条路由指定了模板，就使用该模板。' },
        { title: '种类', body: '没有指定时，就使用这种类目的模板，例如所有人物共用一个模板。' },
        { title: '结构', body: '如果没有种类模板，就使用所属结构的模板。' },
        { title: '通用页面', body: '如果以上都没有，就使用通用页面：名称、标识符、陈述和来源、双向关系，一项不少。' },
      ],
      note: '不熟悉的种类不会套用书籍页面的按钮，只会显示自己需要的组成部分。',
    },
    themes: {
      label: '主题',
      headline: '主题可以改变外观，不能移除保护项。',
      lead: '品牌、颜色、字体和版式由社区决定。有些内容由平台保护，无论更换哪种主题都会保留。',
      items: [
        { title: '由社区决定', body: '标志、颜色、字体和版式。' },
        { title: '由平台保护', body: '身份、搜索、语言切换、来源和无障碍。' },
        {
          title: '自定义呈现程序',
          body: '需要更多功能时，Zone 可以附带自己的呈现程序。这些程序必须先通过审核，读者也可以随时切回标准版式；后端始终只有一套。',
        },
      ],
    },
    wiki: {
      label: 'Wiki+',
      headline: 'Wiki+ 显示到你读过的地方。',
      lead: 'Wiki+ 是作品自己的 Zone：人物、地点、年表和阅读顺序各有一个页面。信息框读取图谱中的事实，其他页面使用同一条事实时也会读取它。',
      items: [
        { title: '未登录', body: '从故事开头开始查看，尚未揭晓的事实会先隐藏。' },
        { title: '登录后', body: '默认显示到你读完的部分；想查看全部，也可以选择全部显示。' },
        {
          title: '一次操作即可整理',
          body: '文本持有者可以在自己的电脑上选择一个 AI 代理，逐章整理人物、地点、关系和事件，为每条内容附上位置和一小段引文，再将提案一次提交。审核者批准后才会发布；REZICS 不会收到全文。',
        },
        { title: '由社区决定', body: '是否让代理起草、是否接受生成的文章，由各个社区自行决定。' },
      ],
    },
    shared: {
      label: '共享',
      headline: '网站彼此独立，数据共同使用。',
      lead: '繁体中文 Wiki+ 和英文读书会网站可以共用同一批作品和人物。前者使用《魔法禁书目录》，后者使用 A Certain Magical Index，两者都指向同一个身份；名称、介绍、排序和采用哪些说法由各自决定。',
      more: '一个 Zone 也可以同时收录书籍、动画和游戏，为整个作品世界搭建网站。',
      alt: '两段独立的深灰色折纸，一前一后放在同一条浅蓝色纸带上',
    },
    log: {
      label: '版本记录',
      headline: '每次更新都会留下记录。',
      lead: '每个版本都包含路由、导航、模板、主题和查询。上线前可以预览和验证；上线后可以恢复上一版本，也可以导出整个网站。',
      caption: '示例：同一个 Wiki+ 的版本记录',
      entries: [
        { title: '第三版', body: '新增“阅读顺序”页面，导航增加一项。预览和验证后上线。' },
        { title: '第二版', body: '人物页面改用新模板。上线后恢复到第一版。' },
        { title: '第一版', body: '首页、作品、人物和年表。上线。' },
      ],
      items: [
        { title: '四种权限', body: '网站编辑、发布、社区管理和图谱贡献分别授权；能修改版式的人不一定能修改图谱数据。' },
        { title: '两个设置', body: '是否公开，以及是否出现在搜索和推荐中，是两个独立设置。' },
        { title: '同一套流程', body: '人通过网页修改，代理通过 API 修改，走的是同一套流程。' },
      ],
    },
    closing: '在 REZICS 创建一个 Zone，为你的社区搭建自己的网站。',
  },
} satisfies MiniSite<ZonesStrings>;
