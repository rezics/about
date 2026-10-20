// MCP Hub (`mcp`): every visible string of /mcp/ and its five inner pages. Design record and
// sources: src/sites/mcp/SITE.md and src/sites/mcp/facts.md. Illustrative data (the notes
// server, versions, dates, client categories, tasks, tools, views, lists) is labelled 示意 on
// the page.
import type { Item, MiniSite } from '../schema';

/** The site's paper still-life series (public/images/sites/mcp/). */
export type McpPicture = 'hero' | 'records' | 'identity' | 'versions' | 'zone';
/** A combination's state on the evidence page. */
export type McpState = 'ok' | 'fail' | 'disputed' | 'none';
/** A site page linked from the landing's tiles. */
export type McpPage = 'directory' | 'evidence' | 'versions' | 'community' | 'maintainers';

/** A section's eyebrow, heading and lead. */
type Head = { label: string; headline: string; body: string };
/** A statement: the first half in ink, the continuation muted. */
type Statement = { text: string; sub: string; note?: string };
type RecordField = { label: string; value: string; note: string };

export type McpStrings = {
  next: { page: string; site: string };
  /** Alt text of each picture. */
  pictures: Record<McpPicture, string>;
  /** A line for each page: its tile on the landing and its lead-in on the previous page. */
  pageLines: Record<McpPage, string>;
  landing: {
    hero: { label: string; headline: string; lede: string };
    record: Head & { fields: Item[]; link: string };
    statement: Statement;
    pages: { label: string; headline: string };
    neighbours: Head & {
      tiles: { kind: 'software' | 'apis' | 'skills'; line: string }[];
      developers: { name: string; line: string; href: string };
    };
    closing: { title: string; body: string };
  };
  directory: {
    hero: { headline: string; lede: string };
    records: Head & { items: Item[] };
    filters: Head & { rows: Item[]; caption: string; note: string };
    traversal: { label: string; headline: string; facts: Item[] };
    parts: Head & { notes: Record<string, string> };
    statement: Statement;
    next: string;
    closing: string;
  };
  evidence: {
    hero: { headline: string; lede: string };
    specimen: {
      label: string;
      headline: string;
      fields: Record<'server' | 'client' | 'task' | 'language' | 'result' | 'date' | 'submitter' | 'review', RecordField>;
      caption: string;
    };
    compare: { label: string; headline: string; says: { heading: string; items: string[] }; not: { heading: string; items: string[] } };
    states: Head & { names: Record<McpState, string>; items: Record<McpState, string> };
    statement: Statement;
    layers: { label: string; headline: string; chapters: Item[] };
    client: { label: string; headline: string; body: string[] };
    next: string;
    closing: string;
  };
  versions: {
    hero: { headline: string; lede: string };
    start: Head & { note: string };
    diff: Head & {
      columns: [string, string, string];
      rows: { tool: string; before: string; after: string }[];
      consequence: string;
      caption: string;
    };
    ledger: Head & { rows: Item[] };
    follow: Head & { levels: Item[]; channels: string };
    statement: Statement;
    next: string;
    closing: string;
  };
  community: {
    hero: { headline: string; lede: string };
    score: { label: string; headline: string; items: Item[]; note: string };
    discussion: Head & { agents: string };
    list: Head & {
      title: string;
      items: { kind: 'mcp' | 'skills' | 'apis' | 'software'; name: string; note: string }[];
      caption: string;
    };
    zone: Head & { routes: string };
    next: string;
    closing: string;
  };
  maintainers: {
    hero: { headline: string; lede: string };
    steps: { label: string; headline: string; items: Item[] };
    rules: { label: string; headline: string; can: { heading: string; items: string[] }; cannot: { heading: string; items: string[] } };
    licence: Head & { rows: Item[] };
    agent: Statement & { link: string; href: string };
    next: { headline: string; lines: Record<'skills' | 'apis' | 'software', string> };
    closing: string;
  };
};

const strings: McpStrings = {
  next: { page: '下一页', site: '下一个站点' },

  pictures: {
    hero: '几张赭黄色的纸用穿过圆孔的纸绳彼此连接，一张浅蓝色和一张浅绿色的纸也系在其中。',
    records: '一张赭黄色的纸，边缘的圆孔用纸绳系着几张空白小吊牌，其中一个孔还空着。',
    identity: '一张纸分成四块并稍稍拉开：两块赭黄色、一块深青色、一块浅蓝色。',
    versions: '五张大小相同的纸排成一列，颜色由深到浅，最后一张是白色。',
    zone: '一张赭黄色的纸折成一座小型立体屏风，旁边放着几片小纸。',
  },

  pageLines: {
    directory: '一台服务器，一个身份',
    evidence: '一条记录说明了什么，没有说明什么',
    versions: '每个版本单独记录',
    community: '评分、讨论、列表和社区目录',
    maintainers: '登记、认领、声明和回应',
  },

  landing: {
    hero: {
      label: 'MCP 服务器索引',
      headline: '哪些服务器可用，查看带日期的记录。',
      lede: 'MCP Hub 为每台 MCP 服务器分配一个身份，并分别记录每个版本：日期、客户端及其版本、使用的语言，以及完成的任务。',
    },
    record: {
      label: '一条记录',
      headline: '说明可用之前，先写清楚测试组合。',
      body: '服务器版本、客户端、任务和语言，缺少任何一项都无法准确判断。每条记录都会补全这些信息，并注明结果和日期；其中任何一项变化，都需要重新测试。',
      fields: [
        { title: '服务器版本', body: '记录到具体版本号，新版本另行记录。' },
        { title: '客户端', body: '记录客户端类型及其版本。' },
        { title: '任务', body: '请求服务器完成的事项。' },
        { title: '语言', body: '同一项任务使用不同语言，结果可能不同。' },
        { title: '结果和日期', body: '记录任务是否完成，以及测试日期。' },
      ],
      link: '如何记录一次测试',
    },
    statement: {
      text: '一条记录只说明这一天、这组配置的测试结果。',
      sub: '它不代表服务器安全，不授予任何使用权，也不代表 REZICS 为其背书。',
    },
    pages: {
      label: '本网站',
      headline: '从查找服务器到维护它，每页讲一件事。',
    },
    neighbours: {
      label: '关联索引',
      headline: '服务器不是孤立的条目。',
      body: '开发者、它封装的 API 和所属项目都在同一个索引中，可以从任一条目找到其他关联内容。',
      tiles: [
        { kind: 'software', line: '项目、软件包和客户端都是软件条目' },
        { kind: 'apis', line: '它封装的 API，双方互相关联' },
        { kind: 'skills', line: '同一位维护者编写的技能' },
      ],
      developers: { name: '开发者', line: 'REZICS 自己的 MCP 服务器', href: '/developers/mcp-server/' },
    },
    closing: {
      title: '先查看记录，再决定使用哪台服务器。',
      body: '服务器、技能和 API 与你在 REZICS 关注的书籍和游戏共用同一个账号。',
    },
  },

  directory: {
    hero: {
      headline: '一台服务器，一个身份。',
      lede: '同一台 MCP 服务器可能出现在多个来源。经过审核并合并后，它在 REZICS 中只有一个条目，名称、维护者、版本、记录、评分和讨论都关联到这个条目。',
    },
    records: {
      label: '四个组成部分',
      headline: '一台服务器，其实包含四个部分。',
      body: '项目、软件包、部署端点和工具列表会在不同时间发生变化，因此 REZICS 分别记录。',
      items: [
        { title: '项目', body: '名称、说明和维护者。版本或端点发生变化，项目仍然是同一个；从其他项目分出的项目会单独记录，并关联回原项目。' },
        { title: '软件包', body: '记录某个版本的软件包所属的生态系统、原生名称和版本号。版本顺序按该生态系统自己的规则排列。' },
        { title: '部署端点', body: '服务器在网络上的地址。能够连接，不代表它属于谁、与客户端兼容，或你有权调用它。' },
        { title: '工具列表', body: '记录服务器在某个时间点提供了哪些工具，以及每种工具需要什么参数。列表发生变化时，会新增一条观察记录。' },
      ],
    },
    filters: {
      label: '筛选',
      headline: '筛选条件来自同一条记录。',
      body: '查找“在命令行工具中使用简体中文并成功导出文件”的服务器时，三个条件必须来自同一条记录，不会由三条互不相关的记录拼在一起。',
      rows: [
        { title: '在程序编辑器中用日语整理待办事项成功的服务器', body: '客户端、语言、任务和结果四个条件都来自同一条记录。' },
        { title: '最新版本在近 90 天内有成功记录的服务器', body: '版本、日期和结果都关联到同一条记录。' },
        { title: '由同一位维护者维护的所有服务器', body: '按维护者查找。' },
        { title: '封装了某个 API 的服务器', body: '按关联查找，也可以从 API 条目查看。' },
      ],
      caption: '筛选条件可以保存为命名视图，下次直接打开，也可以关注该视图。',
      note: '视图示例。',
    },
    traversal: {
      label: '列表',
      headline: '列表可以一直翻到底，也会说明数据到哪里为止。',
      facts: [
        { title: '一直翻到最后一条', body: '结果不会只显示前几页。可以继续浏览，直到最后一条。' },
        { title: '如实说明数量', body: '会标明数量是精确值还是估算值，也会注明数据更新到什么时间。' },
        { title: '无法执行时明确说明', body: '不支持的条件组合会明确告知，不会返回一个看起来像“没有结果”的空白页面。' },
      ],
    },
    parts: {
      label: '模块',
      headline: '八个模块，各类内容共用。',
      body: 'MCP Hub 并不是另写的一套程序。它的条目使用与书库、游戏和软件相同的模块，只是排列方式不同。',
      notes: {
        identity: '不同来源中的同一台服务器，都会关联到这个身份。',
        editions: '每个版本单独记录，并有自己的软件包、工具列表和记录。',
        specs: '兼容记录：日期、客户端及其版本、任务、语言和结果。',
        credits: '维护者可以是个人或组织，并关联到他们参与的其他项目。',
        ratings: '评分关联到某个版本，并注明评价的问题。',
        discussion: '讨论串关联到服务器，也可以关联到某个版本。',
        lists: '服务器、技能和 API 可以放进同一个列表，并分别添加注释。',
        follow: '关注服务器、维护者或视图，有新版本时就会收到通知。',
      },
    },
    statement: {
      text: '名称相同，不代表是同一台服务器。',
      sub: '合并需要证据，也需要经过审核。',
      note: '合并后，原有身份和历史仍会保留，随时可以查询。',
    },
    next: '一条记录写了什么，又刻意没写什么。',
    closing: '查找服务器之前，先确认要找的是哪一台。',
  },

  evidence: {
    hero: {
      headline: '一条记录，注明日期和测试组合。',
      lede: '一个人或 AI 代理使用某个版本的客户端，以某种语言请求某个版本的服务器完成一项任务。记录结果和日期，就形成一条记录。MCP Hub 的证据由这些记录组成。',
    },
    specimen: {
      label: '记录示例',
      headline: '查看一条记录的详细信息。',
      fields: {
        server: { label: '服务器', value: '笔记服务器 1.4.0', note: '精确到版本号。' },
        client: { label: '客户端', value: '程序编辑器 3.2', note: '客户端也会记录版本。' },
        task: { label: '任务', value: '把会议记录整理成待办列表', note: '用一句话说明完成了什么任务。' },
        language: { label: '语言', value: '简体中文', note: '任务使用哪种语言发送。' },
        result: { label: '结果', value: '成功', note: '无论任务是否完成，都会记录。' },
        date: { label: '日期', value: '2026/10/12', note: '这条记录只代表这一天。' },
        submitter: { label: '提交者', value: '一位用户', note: '个人或 AI 代理都可以提交；代理会注明由谁操作。' },
        review: { label: '审核', value: '已审核', note: '经过人工审核后，记录才会公开。' },
      },
      caption: '记录示例。字段和内容用于说明兼容性证据；经过人工审核的记录才会公开。',
    },
    compare: {
      label: '范围',
      headline: '这条记录说明了什么，又没有说明什么。',
      says: {
        heading: '说明了',
        items: [
          '在这一天，这组配置完成了或未能完成这项任务。',
          '使用的服务器和客户端版本。',
          '执行任务时使用的语言。',
          '提交者是谁，以及记录是否经过人工审核。',
        ],
      },
      not: {
        heading: '没有说明',
        items: [
          '服务器是否安全。这条记录不构成安全认证。',
          '你可以如何使用它的程序代码。这要看维护者的授权声明和条款原文。',
          '换用其他版本、客户端或语言时会有什么结果。',
          'REZICS 推荐或担保这台服务器。',
        ],
      },
    },
    states: {
      label: '结果与状态',
      headline: '结果、争议和缺少记录，分别标明。',
      body: '有人测试过，就会有结果；结果受到质疑，就会重新审核。状态始终以文字标明，不会只靠颜色区分。',
      names: { ok: '成功', fail: '未通过', disputed: '有争议', none: '暂无记录' },
      items: {
        ok: '这组配置在这一天完成了任务。',
        fail: '测试过但未能完成任务，也会留下记录。',
        disputed: '已公开的记录受到质疑，正在重新审核。',
        none: '还没有人测试，或测试者尚未记录结果。',
      },
    },
    statement: {
      text: '没有记录，不等于失败。',
      sub: '尚未有人测试的组合会保持空白，不会被算作无法使用。',
    },
    layers: {
      label: '声明与记录',
      headline: '维护者的声明、服务器列出的内容和用户的测试，分别呈现。',
      chapters: [
        { title: '声明', body: '维护者填写支持哪些客户端和语言。这是声明，会按声明呈现，不会被当作测试记录。' },
        { title: '观察', body: '记录某个时间点服务器列出的工具和参数。能够列出工具，不代表任务可以完成。' },
        { title: '记录', body: '有人使用一组配置实际完成一项任务，写下结果和日期，经人工审核后公开。到这一步才算一条记录。' },
        { title: '审核与争议', body: '审核通过的记录仍可能受到质疑。已审核和有争议可以同时成立，之前的判定会保留在历史记录中。' },
      ],
    },
    client: {
      label: '从客户端查找',
      headline: '从你的客户端开始查找。',
      body: [
        '先选择你使用的客户端和版本，再选择任务语言。目录只会显示这组配置有记录的服务器，结果和日期也会一并列出。',
        '将筛选结果保存为视图并关注它，符合条件的新记录出现时，你就会看到。',
      ],
    },
    next: '每个版本各有一条记录，工具列表的增减也能看出来。',
    closing: '记录写得越清楚，你越能自己判断。',
  },

  versions: {
    hero: {
    headline: '每个版本，都有自己的记录。',
    lede: '版本按所属生态系统的规则排序。每个版本都有自己的软件包、工具列表、变更记录、兼容记录和评分，不会沿用上一版本的数据。',
    },
    start: {
      label: '新版本',
      headline: '新版本需要自己的记录。',
      body: '2.0.0 的兼容记录必须来自对这个版本的实际测试。1.4.1 的成功记录不会沿用；只有测试过 2.0.0，才会有它自己的记录。旧记录都注明日期和版本，是否仍然适用一目了然。',
      note: '版本号示例。',
    },
    diff: {
      label: '工具列表',
      headline: '对比即可看出工具列表的变化。',
      body: '每次观察都会记录服务器当时列出的工具和参数格式。对比两次观察，就能分别看到新增、移除和参数发生变化的工具。',
      columns: ['工具', '1.4.0 的观察', '2.0.0 的观察'],
      rows: [
        { tool: '搜索笔记', before: '有', after: '参数已更改' },
        { tool: '创建笔记', before: '有', after: '未更改' },
        { tool: '删除笔记', before: '有', after: '已移除' },
        { tool: '列出标签', before: '有', after: '未更改' },
        { tool: '导出笔记', before: '没有', after: '新增' },
      ],
      consequence: '“搜索笔记”仍然存在，但参数格式发生了变化。使用它的配置值得重新测试。',
      caption: '示例：两次观察的工具列表对比，并非真实测试结果。',
    },
    ledger: {
      label: '软件包',
      headline: '名称和版本号相同，不代表文件相同。',
      body: '软件包会按所属生态系统记录原生名称和版本号。名称或版本号相同，并不能证明内容或权利相同，因此每个版本的文件都会通过哈希值校验。',
      rows: [
        { title: '生态系统', body: '记录软件包所属的生态系统。' },
        { title: '原生名称', body: '按原样保存，不转换成其他格式。' },
        { title: '版本号', body: '版本顺序按该生态系统的规则排列。' },
        { title: '文件哈希', body: '校验这个版本的实际文件。' },
        { title: '授权声明', body: '记录声明人、时间和授权条款。' },
        { title: '来源', body: '记录这条资料的来源和获取时间。' },
      ],
    },
    follow: {
      label: '关注',
      headline: '关注服务器，自己决定接收哪些通知。',
      body: '每项关注都有自己的通知级别，可以随时调整。关注的服务器发生变化时，也会显示在你的关注动态中。',
      levels: [
        { title: '全部', body: '新版本、公告和每篇新帖子。' },
        { title: '重要事项', body: '新版本、公告和决定。' },
        { title: '关闭', body: '只有他人回复你或提到你时才会通知。' },
        { title: '关注对象', body: '只关注某个版本或某个讨论串。' },
      ],
      channels: '通知会发送到收件箱，也可以开启推送或电子邮件摘要；点击一次即可取消订阅电子邮件。',
    },
    statement: {
      text: '评分也关联到具体版本。',
      sub: '1.4 版的评分不会计入 2.0 版。',
      note: '跨版本的数据会作为单独指标计算，并注明算法和涵盖的版本。',
    },
    next: '评分、讨论和列表都注明了对象。',
    closing: '换了版本，就从记录重新看起。',
  },

  community: {
    hero: {
      headline: '先注明评价的版本，再给出评分。',
      lede: '每个分数都对应一个问题、一种量表和一个版本。分数旁会标明条数、分布和评分群体，你可以看出它代表谁的意见。',
    },
    score: {
      label: '评分',
      headline: '一个分数，附带五项说明。',
      items: [
        { title: '问题', body: '例如“说明文档是否清晰”或“能否长时间稳定使用”。不同问题的分数不会混算。' },
        { title: '量表', body: '注明评分采用几分制，以及每个分值的含义。' },
        { title: '版本', body: '评价哪个版本，分数就关联到哪个版本。' },
        { title: '条数和分布', body: '评分数量太少时，只显示条数和分布，不计算平均分。' },
        { title: '群体', body: '全站评分和某个社区的评分会分别标明。' },
      ],
      note: '问题示例。',
    },
    discussion: {
      label: '讨论',
      headline: '讨论可以关联到服务器，也可以关联到某个版本。',
      body: '某个版本出现问题时，可以在该版本下发起讨论；整体使用体验则关联到服务器。维护者会用自己的身份回复，读者能看出发言者是谁。',
      agents: 'AI 代理参与讨论时，必须说明自己是代理，并注明操作人。',
    },
    list: {
      label: '列表',
      headline: '一个列表，可以收录服务器、技能和 API。',
      body: '列表不区分类型。可以把一组服务器、相关技能和背后的 API 放在一起，为每项添加注释并调整顺序，也可以导出。',
      title: '整理会议记录的一组工具',
      items: [
        { kind: 'mcp', name: '笔记服务器', note: '从 2.0.0 版开始可以导出笔记。' },
        { kind: 'skills', name: '会议记录整理技能', note: '需要使用上面的服务器。' },
        { kind: 'apis', name: '日历 API', note: '把待办事项添加到日历。' },
        { kind: 'software', name: '命令行工具', note: '这组工具已在这里测试。' },
      ],
      caption: '列表示例。',
    },
    zone: {
      label: '站点',
      headline: '社区可以拥有自己的服务器目录。',
      body: '社区可以通过 Zone 搭建完整的网站，包括首页、导航、筛选后的目录和说明页面。网站中的条目仍然关联到同一批身份，在那里做出的修正也会同步到所有显示该条目的位置。',
      routes: '网站地图示例：首页、目录、新手指南、记录、讨论。',
    },
    next: '登记服务器、认领身份、写下声明。',
    closing: '每个分数和讨论，都会先注明对象。',
  },

  maintainers: {
    hero: {
      headline: '你维护的服务器，由你来说明。',
      lede: '登记服务器、认领导入的身份、填写授权和支持范围。你填写的内容会标记为声明，旁边则是用户留下的记录，读者都能看到。',
    },
    steps: {
      label: '步骤',
      headline: '从登记到回应，共分四步。',
      items: [
        { title: '登记', body: '创建条目，填写名称、说明、项目和软件包。提交前，系统会先检查是否有重复条目。' },
        { title: '认领', body: '如果条目来自公开数据导入，你可以认领其中属于自己或组织的身份。' },
        { title: '声明', body: '填写授权条款，以及支持的客户端和语言。每项声明都会记录声明人、时间和依据的条款版本。' },
        { title: '回应', body: '使用维护者身份回复讨论。遇到有争议的记录时，可以提交自己的记录。' },
      ],
    },
    rules: {
      label: '权限范围',
      headline: '你可以修改什么，不能修改什么。',
      can: {
        heading: '你可以',
        items: ['修改条目的说明、版本信息和声明。', '回复讨论，为记录提交反证。', '让你的 AI 代理为每个新版本提交记录。'],
      },
      cannot: {
        heading: '你不能',
        items: ['不能只因不同意就自行删除他人的记录；应提交反证并交由审核。', '不能通过赞助或订阅换取不同的判定。', '不能给自己刷分，也不能用多个账号制造声势。'],
      },
    },
    licence: {
      label: '授权声明',
      headline: '授权是你的声明，不是 REZICS 的许可。',
      body: '声明会记录条款和版本、声明人、时间、范围和依据。这不代表 REZICS 授权任何人使用，也不是法律上的确认。服务器被收录到目录中，不代表任何人都可以传播其程序代码。',
      rows: [
        { title: '条款和版本', body: '声明依据哪个条款及其哪个版本。' },
        { title: '声明人', body: '以哪个个人或组织的身份声明。' },
        { title: '时间', body: '声明时间；未知时会注明未知。' },
        { title: '范围', body: '涵盖哪些版本和文件。' },
        { title: '依据', body: '说明作出声明的依据。' },
      ],
    },
    agent: {
      text: '你的 AI 代理可以在每次发布后运行一轮任务，',
      sub: '并提交结果。',
      note: '这些记录会注明来自你的代理，并与其他人的记录遵循同一套审核流程。',
      link: '查看提交方式',
      href: '/developers/mcp-server/',
    },
    next: {
      headline: 'AI 代理使用的技能，同样有版本、记录和评分。',
      lines: {
        skills: '每个版本的技能文件和依赖项',
        apis: '服务器封装的 API',
        software: '项目、软件包和客户端',
      },
    },
    closing: '你的声明和大家的记录，会并列呈现。',
  },
};

export default {
  id: 'mcp',
  base: '/mcp/',
  name: 'MCP Hub',
  theme: { kind: 'mcp' },
  next: 'skills',
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: 'MCP Hub：MCP 服务器索引',
        description:
          '在 REZICS 的 MCP Hub 查找 MCP 服务器。每台服务器对应一个身份，每个版本分别记录；兼容记录会注明日期、客户端及其版本、任务和语言，评分、讨论和列表也一并呈现。',
      },
    },
    {
      slug: 'directory',
      label: '目录',
      meta: {
        title: 'MCP Hub 目录：一台服务器，一个身份',
        description:
          'MCP Hub 目录中，每台 MCP 服务器只有一个身份。项目、软件包版本、部署端点和工具列表分别记录，筛选条件关联到同一条记录，结果可以一直浏览到最后一条。',
      },
    },
    {
      slug: 'evidence',
      label: '证据',
      meta: {
        title: 'MCP Hub 证据：日期与条件',
        description:
          'MCP Hub 的兼容记录会注明日期、服务器版本、客户端及其版本、任务、语言和结果。它只说明某天某组配置完成了某项任务，不代表安全，也不是授权或 REZICS 的背书。',
      },
    },
    {
      slug: 'versions',
      label: '版本',
      meta: {
        title: 'MCP Hub 版本：每个版本单独记录',
        description:
          'MCP 服务器的每个版本都有独立记录：软件包的生态系统、原生名称、版本号和文件哈希，当时观察到的工具列表，以及只属于这个版本的记录和评分。关注服务器后，新版本发布时就会通知你。',
      },
    },
    {
      slug: 'community',
      label: '社区',
      meta: {
        title: 'MCP Hub 社区：评分、讨论和列表',
        description:
          '为 MCP 服务器的某个版本评分并注明问题，讨论串关联到服务器或版本，也可以把服务器、技能和 API 放进同一个列表。社区还能用 Zone 搭建自己的服务器目录。',
      },
    },
    {
      slug: 'maintainers',
      label: '维护者',
      meta: {
        title: 'MCP Hub 维护者：登记与认领',
        description:
          '维护者可以在 MCP Hub 登记服务器、认领导入的身份、声明授权和支持范围，并以自己的身份回应讨论。声明和用户记录会分别显示，付费也不会改变判定。',
      },
    },
  ],
  strings,
} satisfies MiniSite<McpStrings>;
