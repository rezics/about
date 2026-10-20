// API Hub (`apis`): every visible string of /apis/ and its six inner pages. Design record and
// sources: src/sites/apis/SITE.md and src/sites/apis/facts.md.
import type { MiniSite, PartId } from '../schema';
import { kinds } from '../kinds';

const kind = kinds.find((k) => k.id === 'apis')!;

/** A row of a facts list: title on the left, text on the right. */
export interface ApisRow {
  title: string;
  body: string;
}
/** An invented example shown as a flat tile: name, a note at the top, one line. */
export interface ApisTile {
  name: string;
  rel?: string;
  line: string;
}
/** A page's first screen: one sentence and one short paragraph. */
export interface ApisHero {
  headline: string;
  lede: string;
}
/** A section head: the eyebrow label, the h2 and an optional lead paragraph. */
export interface ApisSection {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** A large statement: the first half in ink, the second in muted ink, an optional note. */
export interface ApisStatement {
  lead: string;
  rest: string;
  note?: string;
}

export interface ApisStrings {
  /** Prefix of every caption under an invented example. */
  example: string;
  /** The row of further pages at the foot of every inner page. */
  next: { label: string; aria: string };
  /** The sentence under every page's closing statement. */
  closingBody: string;
  /** Text alternatives of the five photographs. */
  pictures: { hero: string; request: string; versions: string; specs: string; connections: string };
  home: {
    hero: ApisHero;
    pages: ApisSection & { rows: Record<string, string> };
    directory: ApisSection & { link: string };
    statement: ApisStatement;
    parts: ApisSection & { notes: Partial<Record<PartId, string>> };
    connections: ApisSection & { link: string };
    closing: string;
  };
  directory: {
    hero: ApisHero;
    facets: ApisSection & { rows: ApisRow[] };
    complete: ApisStatement;
    identity: ApisSection & { rows: ApisRow[] };
    views: ApisSection & { tiles: ApisTile[]; caption: string };
    closing: string;
  };
  versions: {
    hero: ApisHero;
    closed: ApisStatement;
    sequence: ApisSection & { tiles: ApisTile[]; caption: string };
    events: ApisSection & { rows: ApisRow[] };
    follow: ApisSection & { rows: ApisRow[]; footnote: string };
    closing: string;
  };
  specs: {
    hero: ApisHero;
    facts: ApisSection & { rows: ApisRow[] };
    measure: ApisStatement;
    fields: ApisSection & { rows: ApisRow[]; footnote: string };
    absent: ApisSection;
    closing: string;
  };
  connections: {
    hero: ApisHero;
    relations: ApisSection & { rows: ApisRow[] };
    both: ApisStatement;
    provider: ApisSection & { more: string };
    neighbours: ApisSection & {
      lines: { mcp: string; skills: string; software: string };
      developers: { name: string; line: string };
    };
    closing: string;
  };
  community: {
    hero: ApisHero;
    rating: ApisSection & { rows: ApisRow[] };
    discussion: ApisStatement;
    lists: ApisSection & { tiles: (ApisTile & { kind: 'apis' | 'software' | 'mcp' | 'skills' })[]; caption: string };
    zone: ApisSection & { link: string };
    closing: string;
  };
  publishing: {
    hero: ApisHero;
    path: ApisSection & { rows: ApisRow[] };
    proposal: ApisSection & { rows: ApisRow[] };
    paid: ApisStatement;
    provider: ApisSection & { more: string };
    closing: string;
  };
}

export default {
  id: 'apis',
  base: '/apis/',
  name: kind.name,
  theme: { kind: 'apis' },
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: 'API Hub：每个公开 API 都有独立条目',
        description:
          'REZICS 为每个公开 API 创建独立条目：提供者、版本、规范文档和认证方式都会注明来源和日期。可以按已有字段筛选、关注版本更新，评分和讨论也会注明针对哪个版本。',
      },
    },
    {
      slug: 'directory',
      label: '目录',
      meta: {
        title: 'API Hub 目录：按事实查找 API',
        description:
          '在 API Hub 目录中，可以按提供者、认证方式、规范文档和版本状态筛选。结果会一直列到最后一条，并注明数量是否精确；筛选条件可以保存为视图，也可以关注。',
      },
    },
    {
      slug: 'versions',
      label: '版本',
      meta: {
        title: 'API Hub 版本：每个版本都有记录',
        description:
          'API 的每个版本都有独立记录，内容对应当时实际发布的版本。宣布、排期、可用、延期和撤回分别记录；关注后，会按你选择的通知级别发送消息。',
      },
    },
    {
      slug: 'specs',
      label: '规范与认证',
      meta: {
        title: 'API Hub 规范与认证',
        description:
          '每个版本的认证方式和规范文档都会分别记录，并注明来自提供者、导入来源还是社区。测量结果会附上指标、方法、条件、单位和时间；未知、零和不适用会分别显示。',
      },
    },
    {
      slug: 'connections',
      label: '关联内容',
      meta: {
        title: 'API Hub 关联内容：基于 API 构建的项目',
        description:
          'API 的提供者、客户端程序库、封装它的 MCP 服务器和使用它的技能会通过关联连接起来，从任一端都能查看。提供者也有自己的页面，列出它参与的项目。',
      },
    },
    {
      slug: 'community',
      label: '社区',
      meta: {
        title: 'API Hub 社区：评分、讨论和列表',
        description:
          'API 评分会注明评价内容、针对的版本和评分群体，并显示人数和分布。讨论关联到条目或版本，列表可以同时收录 API、软件和 MCP 服务器。',
      },
    },
    {
      slug: 'publishing',
      label: '收录',
      meta: {
        title: 'API Hub 收录：新增与更正',
        description:
          '新增 API 前先搜索是否已有重复条目，再说明这是新的 API、新版本还是别名。提案需要附上证据，经人工审核后才会应用；提供者和 AI 代理都遵循同一流程。',
      },
    },
  ],
  strings: {
    example: '示例：',
    next: { label: '继续阅读', aria: 'API Hub 的其他页面' },
    closingBody: '使用同一个账号查找 API、关注版本更新，也把集成经验分享给其他人。',
    pictures: {
      hero: '暖白色纸面上，几张浅蓝色的纸交叠，边缘打着整齐排列的圆孔，底下露出一张深蓝色的纸。',
      request: '五张浅蓝色的纸片像闸门一样排成一列，一条深灰蓝色的纸带依次穿过每张纸上的切口。',
      versions: '六张浅蓝色卡纸依次错开排成扇形，颜色由浅渐深，顶端的圆孔逐张对齐。',
      specs: '三张浅蓝色厚纸交叠，角落各有一圈空白方形压纹，底下露出深灰蓝色纸面。',
      connections: '一张浅蓝色的纸中央打着一排圆孔，土黄色、浅绿色和深青色三条纸带从边缘伸来，分别穿进一个孔。',
    },
    home: {
      hero: {
        headline: '每个 API 都有独立条目，每条事实都有出处。',
        lede: '提供者、版本、规范文档和认证方式都整理在同一个条目中，并注明来源和时间。',
      },
      pages: {
        eyebrow: '六个页面',
        headline: '从查找 API，到了解它的每个版本。',
        rows: {
          directory: '按事实筛选，结果列到最后一条',
          versions: '保留旧版本，也能找到新版本',
          specs: '认证方式和规范文档都有出处',
          connections: '程序库、MCP 服务器和技能彼此关联',
          community: '评分和讨论都会注明对象',
          publishing: '新增与更正遵循同一流程',
        },
      },
      directory: {
        eyebrow: '目录',
        headline: '每个筛选条件，都是条目中一条有来源的事实。',
        lead: '认证方式、规范文档、版本状态，以及关联的 MCP 服务器和技能都可以用于筛选。可以组合已有条件，结果会一直列到最后一条。',
        link: '查看目录',
      },
      statement: {
        lead: 'API 会更新版本、改名，也会撤回。',
        rest: '条目会记录每次变化，并注明信息来源。',
      },
      parts: {
        eyebrow: '八个模块',
        headline: '一个 API 条目，由八个模块组成。',
        lead: '身份始终排在第一位。其他七个模块是 API Hub 从十五个通用模块中选出的，书籍和动画也使用同一套模块。',
        notes: {
          identity: '即使改名或更换标识符，条目仍然不变，旧名称也能查到。',
          editions: '每个版本单独记录，保留当时实际发布的内容。',
          specs: '认证方式、规范文档和测量结果都会注明来源和时间。',
          credits: '提供服务的组织和维护人员会按角色列出，各有自己的页面。',
          ratings: '分数旁会注明评价的是哪个版本、哪个问题。',
          discussion: '讨论串关联到整个 API 或某个版本。',
          follow: '新版本和撤回消息会按你设置的级别发送。',
          lists: '一个列表可以同时收录 API、软件和技能，并为每项添加注释。',
        },
      },
      connections: {
        eyebrow: '关联内容',
        headline: '基于 API 构建的项目，彼此关联。',
        lead: '客户端程序库、封装它的 MCP 服务器、使用它的技能，以及提供服务的组织都有独立身份。通过关联连接起来，从任一端都能查看。',
        link: '查看关联内容',
      },
      closing: '选择 API 之前，先查看它的版本和证据。',
    },
    directory: {
      hero: {
        headline: '按事实查找 API，结果列到最后一条。',
        lede: '每个条件都对应条目中一条有来源的事实。可以组合筛选条件，结果会按顺序列出，不会只停留在前几页。',
      },
      facets: {
        eyebrow: '筛选条件',
        headline: '组合已有字段进行筛选。',
        lead: '每个条件都有自己的名称和值，值本身也是一个条目，点进去还能继续查找。',
        rows: [
          { title: '提供者', body: '提供 API 的组织或个人。可以一次列出同一提供者的所有 API。' },
          { title: '认证方式', body: '免认证、API 密钥或用户授权，按版本分别记录。' },
          { title: '规范文档', body: '是否有规范文档、文档位置和提供者。' },
          { title: '版本状态', body: '已宣布、可用、已撤回或已取消。' },
          { title: '关联', body: '是否有关联的 MCP 服务器、调用它的客户端程序库或使用它的技能。' },
          { title: '名称和语言', body: '可以按任何语言的名称和别名搜索。' },
          { title: '评分', body: '按某个评分问题筛选，并显示评分人数。' },
          { title: '日期', body: '按版本发布日期或事实确认日期筛选。' },
        ],
      },
      complete: {
        lead: '预览、排名和完整列表，是三种不同的内容。',
        rest: '完整列表会一直列到最后一条。',
        note: '每份结果都会注明数量是否精确，以及数据更新的时间。每页显示的条数并不是列表的终点。',
      },
      identity: {
        eyebrow: '身份',
        headline: '同一个 API，只有一个条目。',
        lead: '无论改名、更换标识符还是被重复添加，它都只有一个条目。',
        rows: [
          { title: '标识符注明来源', body: '每个标识符都会注明所属命名空间和来源。不同来源中的名称相同，也不会被视为同一个条目。' },
          { title: '旧名称仍然可查', body: '别名、旧名称和各语言的写法会分别保存，搜索任意一种都能找到该条目。' },
          { title: '重复条目会合并', body: '发现重复条目时，合并计划会先列出受影响的评分、评论和关注记录，经人工决定后才会执行。合并可以撤销。' },
          { title: '旧网址会指向新条目', body: '被合并的条目会跳转到保留的条目，并注明合并理由。' },
        ],
      },
      views: {
        eyebrow: '视图',
        headline: '保存常用条件，并关注视图。',
        lead: '将一组条件保存为视图后，可以为它命名并分享给他人。关注视图后，符合条件的新条目会出现在你的关注动态中，也可以设置为摘要发送给你。',
        tiles: [
          { name: '免认证，有规范文档', line: '优先查找有文档且免认证的 API' },
          { name: '同一提供者', line: '一次查看一个组织提供的所有 API' },
          { name: '有关联的 MCP 服务器', line: '已关联 MCP 服务器的 API' },
          { name: '名称包含简体中文', line: '已有人整理中文名称的 API' },
        ],
        caption: '视图名称和内容均为示例。',
      },
      closing: '查找 API，从一条有来源的事实开始。',
    },
    versions: {
      hero: {
        headline: '保留旧版本，也能跟进新版本。',
        lede: '每个版本都会保留发布时的内容，即使撤回也能查到。关注 API 后，新版本宣布、上线或撤回时，会按你设置的方式发送通知。',
      },
      closed: {
        lead: '已发布版本的记录不会被改写。',
        rest: '后续变更会作为新版本记录。',
      },
      sequence: {
        eyebrow: '版本顺序',
        headline: '同一个 API，每个版本都有自己的依据。',
        lead: '以虚构的天气数据 API 为例：第三版改用 API 密钥，第二版的免认证记录仍会保留。记录有误时可以附上证据更正，之后新增的内容会另建版本。',
        tiles: [
          { name: 'v1', rel: '已撤回', line: '免认证。来源：提供者公告，确认日期 2026/06/18。' },
          { name: 'v2', rel: '可用', line: '免认证。来源：提供者版本说明，确认日期 2026/08/12。' },
          { name: 'v3', rel: '可用', line: 'API 密钥。来源：提供者规范文档，确认日期 2026/10/01。' },
          { name: 'v4', rel: '已宣布', line: 'API 密钥。来源：提供者预告，确认日期 2026/10/19。' },
        ],
        caption: '天气数据 API、版本、认证方式、出处和日期均为虚构示例。',
      },
      events: {
        eyebrow: '五种状态',
        headline: '从宣布到撤回，五种状态分别记录。',
        lead: '同一个版本会经历多个时间节点。REZICS 不会把它们合并成一个日期。',
        rows: [
          { title: '宣布', body: '提供者表示将推出新版本。这是一条公告，还不代表已经发布。' },
          { title: '排期', body: '公布了预计日期。之后日期发生变化时，原日期仍会保留在历史记录中。' },
          { title: '可用', body: '确认版本已经可以使用，并附上确认来源。' },
          { title: '延期', body: '预计日期向后调整。延期和取消是两种不同状态，取消会单独标明。' },
          { title: '撤回', body: '提供者撤回了这个版本。记录仍会保留，状态会改为已撤回。' },
        ],
      },
      follow: {
        eyebrow: '关注',
        headline: '关注 API，自选通知内容。',
        lead: '关注无需对方同意，也不收费。每项关注都有通知级别，用来决定哪些消息会进入你的收件箱。',
        rows: [
          { title: '全部', body: '除了新版本、公告和决定，也会通知你一般帖子。' },
          { title: '重要事项', body: '只通知新版本、公告和决定。' },
          { title: '关闭', body: '一般消息会保留在关注动态中；回复、提及等直接互动仍会通知。' },
          { title: '单独设置版本', body: '想重点关注某个版本，可以为它单独设置通知。' },
        ],
        footnote: '通知可以发送到收件箱、推送或电子邮件摘要。订阅的邮件摘要可以一键退订。',
      },
      closing: '版本更新消息，按你选择的方式发送。',
    },
    specs: {
      hero: {
        headline: '调用之前，先了解需要准备什么。',
        lede: '每个版本的认证方式、规范文档位置和测量结果都会记录在版本下方，并注明信息来源和时间。',
      },
      facts: {
        eyebrow: '版本信息',
        headline: '认证方式和规范文档，按版本分别记录。',
        lead: '同一 API 的不同版本可能使用不同认证方式。因此这些事实会关联到具体版本，并逐项注明出处。',
        rows: [
          { title: '认证方式', body: '免认证、API 密钥或用户授权，都会按版本记录。新版本更改认证方式，不会改动旧版本的记录。' },
          { title: '规范文档', body: '条目会记录规范文档的位置、提供者和确认日期。' },
          { title: '测量结果', body: '测量结果必须附上指标、方法、条件、单位和时间。' },
          { title: '出处', body: '每条事实都会注明来自提供者、公开数据导入还是社区测量。导入的数据会附上来源和授权链接。' },
        ],
      },
      measure: {
        lead: '测量和评分不是一回事。',
        rest: '评分反映大家的看法；测量说明在什么条件下测得了什么。',
      },
      fields: {
        eyebrow: '测量',
        headline: '查看一项测量，先了解这五条信息。',
        lead: '先查看指标、方法、条件、单位和时间；进行比较时，也要核对结果、对象和范围。',
        rows: [
          { title: '指标', body: '测量的内容。' },
          { title: '方法', body: '采用的测量方法。' },
          { title: '条件', body: '测量时的条件。' },
          { title: '单位', body: '数值使用的单位。' },
          { title: '时间', body: '测量日期。旧结果会保留原日期。' },
        ],
        footnote: '同一指标的结果会形成历史记录，也可以与其他 API 放在同一张比较表中。',
      },
      absent: {
        eyebrow: '缺少的数据',
        headline: '未知、零和不适用，是三种不同的结果。',
        lead: '没有测量过就是未知，不会写成零；不适用的指标也不会被视为缺少数据。缺失数据不会转变成误导性的评分。',
      },
      closing: '了解认证方式后，再开始集成。',
    },
    connections: {
      hero: {
        headline: '一个 API，关联着基于它构建的所有内容。',
        lede: '客户端程序库、封装它的 MCP 服务器、使用它的技能，以及提供它的组织，在 REZICS 中都有独立身份，并通过关联连接起来。',
      },
      relations: {
        eyebrow: '关联',
        headline: '关联有名称，也有方向。',
        lead: '每条关联都会注明类型和各方角色。API 页面和关联另一端的页面都能看到。',
        rows: [
          { title: '客户端程序库', body: '调用这个 API 的程序库属于软件条目，有自己的版本和依赖项。' },
          {
            title: '封装为 MCP 服务器',
            body: '将它封装为 MCP 服务器的项目，在 MCP Hub 中有独立条目，项目、软件包和部署端点分别记录。',
          },
          {
            title: '使用它的技能',
            body: '使用这个 API 的技能在 Skill Hub 中有独立条目，并通过关联链接回这里。',
          },
          { title: '同一提供者的其他 API', body: '从提供者页面查找它提供的其他 API。' },
        ],
      },
      both: {
        lead: '从 API 条目可以找到 MCP 服务器，',
        rest: '反过来也能从服务器找到 API。',
      },
      provider: {
        eyebrow: '提供者',
        headline: '每位提供者都有自己的页面。',
        lead: '提供 API 的组织或个人拥有公开身份，与账号归属无关。它提供的 API、发布的软件和维护的 MCP 服务器，都会按各自角色列在页面上。',
        more: '同一个人可以写小说、开发软件和维护 API，在 REZICS 中仍然是同一个身份。',
      },
      neighbours: {
        eyebrow: '相关内容',
        headline: '三类相关内容，以及开发者网站。',
        lines: {
          mcp: '将 API 封装为工具的 MCP 服务器',
          skills: 'AI 代理使用的技能，有些技能依靠它完成任务',
          software: '调用 API 的程序库和应用程序',
        },
        developers: { name: '开发者', line: '查看 REZICS 自己的 API' },
      },
      closing: '从任一端出发，都能找到另一端。',
    },
    community: {
      hero: {
        headline: '每个评分，都会注明针对哪个版本。',
        lede: '评价 API 时，要先说明评价的问题和针对的版本。分数旁会显示人数和分布；讨论、列表和社区也都围绕同一个条目展开。',
      },
      rating: {
        eyebrow: '评分',
        headline: '一个分数，由五项信息说明。',
        lead: '示例：评价“文档是否清晰”，采用五分制，针对第三版，由全站用户评分。',
        rows: [
          { title: '问题', body: '注明评价的问题。不同问题的分数不会合并计算。' },
          { title: '量表', body: '提前说明评分采用几分制，以及每个分值的含义。' },
          { title: '对象', body: '注明评价的版本。这个版本的分数不会计入其他版本。' },
          { title: '群体', body: '评分群体会标注在分数旁边。' },
          { title: '人数和分布', body: '每个分数都附上评分人数和分布。人数太少时，只显示人数和分布，不计算平均分。' },
        ],
      },
      discussion: {
        lead: '集成时遇到的问题，可以在对应版本下讨论。',
        rest: '版本更新后，旧版本的讨论仍会留在旧版本下。',
      },
      lists: {
        eyebrow: '列表',
        headline: '将项目使用的内容放进同一个列表。',
        lead: '列表不区分类型：API、客户端程序库、MCP 服务器和技能可以放在一起，并为每项添加注释。列表有自己的公开范围，可以排序和导出。',
        tiles: [
          { kind: 'apis', rel: 'API', name: '天气数据 API', line: '天气预报数据来源' },
          { kind: 'apis', rel: 'API', name: '地图瓦片 API', line: '地图界面的底图' },
          { kind: 'software', rel: '软件', name: '客户端程序库', line: '在程序中调用天气数据 API' },
          { kind: 'mcp', rel: 'MCP 服务器', name: '天气 MCP 服务器', line: '让 AI 代理查询天气' },
          { kind: 'skills', rel: '技能', name: '行程整理技能', line: '根据天气调整每日行程' },
        ],
        caption: '虚构项目的列表，名称均为示例。',
      },
      zone: {
        eyebrow: '社区与 Zone',
        headline: '为一类 API 搭建一个 Zone。',
        lead: '社区可以成立社区空间，制定自己的规则，并用自己的方式解读条目中的事实。也可以搭建 Zone，创建专门的 API 目录网站，数据仍来自同一张图谱。',
        link: '查看站点模块',
      },
      closing: '每个评分和讨论，都会注明对象。',
    },
    publishing: {
      hero: {
        headline: '先搜索，再新增。',
        lede: '每项新增和更正都是一份提案：说明修改内容和依据，经人工审核后才会应用，并留下回执。个人、提供者和 AI 代理都遵循同一套流程。',
      },
      path: {
        eyebrow: '流程',
        headline: '条目按以下流程收录。',
        rows: [
          { title: '先搜索', body: '表单出现前，先按名称、别名和标识符搜索。找到条目后，补充别名或新版本即可，无需另建条目。' },
          { title: '说明条目类型', body: '由提交者说明这是新的 API、已有 API 的新版本，还是某个版本的一部分。模型可以提供建议，但不能代替人工决定。' },
          { title: '附上证据', body: '每份提案都会注明确切的修改位置、依据来源和方法。' },
          { title: '人工审核', body: '审核人员查看证据后再做决定。提案提交后如果条目发生变化，提案会退回重新审核。' },
          { title: '先标记为未验证', body: '新条目可以先公开，但会标记为未验证，并显示每个字段的来源。验证前不会加入可信导出和推荐。' },
          { title: '留下回执', body: '应用变更后会留下回执。撤销变更时会通过更正流程处理，不会改写历史记录。' },
        ],
      },
      proposal: {
        eyebrow: '提案格式',
        headline: 'AI 代理的提案，格式与人工提案相同。',
        lead: '官方和第三方代理提交的提案格式相同。代理的输出不能为自己背书，重新导入时也一样。',
        rows: [
          { title: '目标和版本', body: '要修改的确切条目，以及代理读取的是哪个修订版本。' },
          { title: '变更', body: '要新增、修改或移除的内容。' },
          { title: '证据', body: '支持这项变更的来源和位置。' },
          { title: '方法', body: '说明如何得出结果，以及使用了哪些输入。' },
          { title: '置信度', body: '代理自行说明的把握程度。这是代理的说法，不代表 REZICS 的保证。' },
          { title: '披露信息', body: '注明这是自动化操作，以及负责执行的人。' },
        ],
      },
      paid: {
        lead: '付费买不到审核结论。',
        rest: '赞助或订阅都不会改变审核结果。',
      },
      provider: {
        eyebrow: '提供者',
        headline: '提供者也遵循同一流程。',
        lead: 'API 提供者可以证明自己拥有其命名空间，提交的事实会注明来自提供者。提供者的说法仍然只是一种说法，社区测得的结果和讨论也会保留在条目中。',
        more: '提供者撤回自己的说法时，只会撤回自己提交的依据。导入事实会附上来源和授权；已有人确认并保护的字段，之后导入时不会被悄悄覆盖。',
      },
      closing: '新增和更正都经过人工审核。',
    },
  },
} satisfies MiniSite<ApisStrings>;
