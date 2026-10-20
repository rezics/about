// The software site (軟體): every visible string of /software/ and its six inner pages, in the
// v3 language (.temp/sites/V3-SPEC.md). Design record and sources: src/sites/software/SITE.md and
// facts.md. All sample data (the program 範例編輯器, 甲／乙／丙系統, version numbers, dates, sizes,
// the hash, package names) is fictional and is labelled 示意 wherever it appears.
import type { Item, KindId, MiniSite } from '../schema';

export type StateId = 'compatible' | 'incompatible' | 'unknown' | 'stale' | 'unavailable';
/** One compatibility observation: a state, and the date of the adopted measurement where there is one. */
export type Cell = readonly [StateId, string?];
/** A section's opening: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}
/** A still-life picture in public/images/sites/software/ (`<name>-<width>.avif|webp`). */
export interface Picture {
  name: string;
  alt: string;
}

export interface SoftwareStrings {
  common: { nextPage: string; nextSite: string; sample: string; go: string };
  pictures: Record<'hero' | 'versions' | 'holes' | 'slit' | 'tabs', Picture>;
  states: Record<StateId, string>;
  channels: { stable: string; beta: string };
  sample: {
    program: string;
    /** Newest first. */
    releases: { version: string; channel: 'stable' | 'beta'; date: string; platforms: string; note?: string }[];
    environments: { name: string; short: string }[];
    /** Rows follow `environments`, columns follow `releases`. */
    cells: Cell[][];
  };
  landing: {
    hero: { label: string; headline: string; lede: string };
    pages: Head & { lines: Record<string, string> };
    compatibility: Head & { link: string };
    statement: { text: string; sub: string };
    program: Head & { items: Item[] };
    neighbours: Head & { link: string; tiles: { kind: KindId; line: string }[] };
    closing: string;
  };
  catalogue: {
    hero: { headline: string; lede: string };
    releases: Head;
    list: { caption: string; columns: [string, string, string, string]; points: Item[] };
    statement: { text: string; sub: string };
    identity: Head & { rows: Item[] };
    browse: Head & { points: Item[] };
    closing: string;
  };
  compatibility: {
    hero: { headline: string; lede: string };
    anatomy: Head & { rows: Item[] };
    states: Head & { body: Record<StateId, string>; caption: string; corner: string };
    conditions: Head & { example: string; candidates: Item[]; result: string };
    statement: { text: string; sub: string; note: string };
    closing: string;
  };
  reviews: {
    hero: { headline: string; lede: string };
    rules: Head & { facts: Item[] };
    anatomy: Head & { points: Item[] };
    statement: { text: string; sub: string };
    picks: Head & { rows: Item[] };
    closing: string;
  };
  updates: {
    hero: { headline: string; lede: string };
    levels: Head & { rows: Item[] };
    targets: Head & { rows: Item[] };
    changelog: Head & { more: string; caption: string; start: string };
    statement: { text: string; sub: string };
    closing: string;
  };
  publishing: {
    hero: { headline: string; lede: string };
    record: Head & { caption: string; fields: Item[] };
    steps: Head & { steps: Item[]; note: string };
    licence: Head & { points: Item[] };
    lock: Head & { points: Item[] };
    statement: { text: string; sub: string; note: string };
    maintenance: Head & { rows: Item[] };
    closing: string;
  };
  connections: {
    hero: { headline: string; lede: string };
    relations: Head & { rows: Item[] };
    kinds: Head & { rows: { kind: KindId; line: string; body: string }[] };
    people: Head;
    statement: { text: string; sub: string };
    closing: string;
  };
}

const site = {
  id: 'software',
  base: '/software/',
  name: '软件',
  theme: { kind: 'software' },
  next: 'visual-novels',
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: '软件：版本、平台和实测兼容性',
        description:
          'REZICS 为每个程序设置一个身份，并列出它在各个平台上的每次发行。兼容性基于附有方法和日期的实测，许可、获取方式、评分和更新通知也都关联到同一个身份。',
      },
    },
    {
      slug: 'catalogue',
      label: '目录与版本',
      meta: {
        title: '目录与版本：一个程序，一个身份',
        description:
          'REZICS 软件目录为每个程序设置一个身份。各平台的发行分别归档，版本顺序按生态系统规则排列，分支单独建条目并关联到原项目，筛选结果会注明确切数量。',
      },
    },
    {
      slug: 'compatibility',
      label: '相容性',
      meta: {
        title: '兼容性：附有日期的实测',
        description:
          'REZICS 软件兼容性由一条条实测记录组成，注明指标、方法、条件和日期，并标出适用版本和文件。兼容、不兼容、未知、已过期和无法获取会分别标注，没有实测就标为未知。',
      },
    },
    {
      slug: 'reviews',
      label: '评价',
      meta: {
        title: '评价：评分对应具体发行',
        description:
          '在 REZICS，软件评分可以只对应某一条发行记录，并附上人数、分布和评分所属的社区。跨版本总分会单独计算并注明算法，社区精选都会关联到作出决定的讨论。',
      },
    },
    {
      slug: 'updates',
      label: '关注更新',
      meta: {
        title: '关注更新：发行和更新说明',
        description:
          '在 REZICS 关注一个程序、一位开发者或一组筛选条件后，新发行和更新说明会按你选择的通知级别送达。你可以只看站内收件箱，也可以开启推送通知或接收电子邮件摘要。',
      },
    },
    {
      slug: 'publishing',
      label: '发布与许可',
      meta: {
        title: '发布与许可：面向软件发布者',
        description:
          '开发者在 REZICS 维护自己的程序页面，发布各个平台的版本，并附上文件大小、哈希值、更新说明和截图，声明许可的具体条款和版本，并注明获取方式。',
      },
    },
    {
      slug: 'connections',
      label: '关联',
      meta: {
        title: '关联：依赖它和基于它构建的内容',
        description:
          '在 REZICS，程序会关联到依赖它的游戏模组、供 AI 代理操作它的 MCP 服务器、需要它的技能，以及相关 API。每条关联都有方向和来源，从两端都能查到。',
      },
    },
  ],
  strings: {
    common: { nextPage: '下一页', nextSite: '下一个网站', sample: '示意数据：程序、系统、版本号和日期均为虚构。', go: '前往' },
    pictures: {
      hero: { name: 'hero', alt: '深青色纸片一张张错开放置，像扇子一样展开，最上面一张是淡蓝色。' },
      versions: { name: 'versions', alt: '三张深青色纸封依次排开，各自用一条灰蓝色纸带束住。' },
      holes: { name: 'holes', alt: '一张深青色的纸上打着整齐的圆孔，其中几个位置没有打穿。' },
      slit: { name: 'slit', alt: '一张深青色纸片穿过灰蓝色纸上的一道切口。' },
      tabs: { name: 'tabs', alt: '深青色纸片用两条纸扣分别连起一张芥黄色纸和一张浅绿色纸。' },
    },
    states: { compatible: '兼容', incompatible: '不兼容', unknown: '未知', stale: '已过期', unavailable: '无法获取' },
    channels: { stable: '稳定版', beta: '测试版' },
    sample: {
      program: '示例编辑器',
      releases: [
        { version: '4.1', channel: 'beta', date: '2026-10-06', platforms: '甲・乙・丙', note: '新增分割窗口；修复大型文件打开缓慢的问题。' },
        { version: '4.0', channel: 'stable', date: '2026-08-25', platforms: '甲・乙・丙', note: '新增工作区；移除旧的插件格式。' },
        { version: '3.2', channel: 'stable', date: '2026-03-17', platforms: '甲・乙・丙', note: '新增手机版；提升搜索速度。' },
        { version: '3.1', channel: 'stable', date: '2025-11-04', platforms: '甲・乙' },
        { version: '3.0', channel: 'stable', date: '2025-06-10', platforms: '甲・乙' },
      ],
      environments: [
        { name: '甲系统・64 位', short: '甲 64' },
        { name: '甲系统・32 位', short: '甲 32' },
        { name: '乙系统・64 位', short: '乙 64' },
        { name: '丙系统・手机', short: '丙 手机' },
      ],
      // Columns follow `releases` (4.1, 4.0, 3.2, 3.1, 3.0).
      cells: [
        [['unknown'], ['compatible', '2026-08-29'], ['compatible', '2026-03-20'], ['compatible', '2025-11-09'], ['compatible', '2025-06-14']],
        [['unavailable'], ['unavailable'], ['incompatible', '2026-03-22'], ['compatible', '2025-11-10'], ['stale', '2025-06-15']],
        [['compatible', '2026-10-09'], ['unknown'], ['compatible', '2026-03-20'], ['compatible', '2025-11-12'], ['unknown']],
        [['unknown'], ['compatible', '2026-09-02'], ['stale', '2026-03-25'], ['unavailable'], ['unavailable']],
      ],
    },

    landing: {
      hero: {
        label: '软件',
        headline: '每个版本在哪些环境可运行，都有实测和日期。',
        lede: 'REZICS 为每个程序设置一个身份，并列出它在各个平台上的每次发行。没有人测试过的环境会标为未知；许可、获取方式、评分和讨论都关联到同一个身份。',
      },
      pages: {
        label: '六个页面',
        headline: '从查找程序，到发布自己的程序。',
        lines: {
          catalogue: '一个身份，每次发行单独记录',
          compatibility: '能否运行，看附有日期的实测',
          reviews: '评分旁先注明对应版本',
          updates: '关注程序、开发者和筛选条件',
          publishing: '面向开发者：发行、许可和获取',
          connections: '模组、MCP 服务器、技能和 API',
        },
      },
      compatibility: {
        label: '兼容性',
        headline: '要说能运行，就附上实测。',
        lead: '开发者列出的支持平台只是一项声明；实测是有人在某一天、某种环境下确认的结果，并注明方法和条件。REZICS 只根据实测判断能否运行。',
        link: '了解如何记录兼容性',
      },
      statement: {
        text: '没有人测试过，就标为未知；',
        sub: '不会猜测为兼容，也不会当作不兼容。',
      },
      program: {
        label: '一个程序',
        headline: '关联到同一个身份的内容。',
        items: [
          { title: '发行', body: '各个平台的每次发行都会分别归档，稳定版和测试版分开标注。' },
          { title: '兼容性', body: '在同一条发行记录中确认操作系统、系统版本和处理器架构。' },
          { title: '许可', body: '注明具体许可条款和版本，并记录声明者和时间。' },
          { title: '获取方式', body: '并列展示官方下载、商店和软件包仓库；如果只是外部链接，会明确说明。' },
          { title: '评分', body: '评分可以只对应某个版本，人数和分布会显示在评分旁边。' },
          { title: '关注', body: '关注程序或维护者后，新版本和公告都会送达。' },
        ],
      },
      neighbours: {
        label: '关联',
        headline: '程序很少单独存在。',
        lead: '游戏模组依赖它，MCP 服务器供 AI 代理操作它，技能运行前也需要它。每条关联都有方向和来源，从任何一端都能查到。',
        link: '查看全部关联',
        tiles: [
          { kind: 'games', line: '模组和加载器依赖的程序' },
          { kind: 'mcp', line: '供代理操作的服务器' },
          { kind: 'skills', line: '将它列为依赖项的技能' },
          { kind: 'apis', line: '它提供或调用的 API' },
        ],
      },
      closing: '一个程序，一个身份，每个版本都可查询。',
    },

    catalogue: {
      hero: {
        headline: '版本号会变，身份不会变。',
        lede: '程序改名、迁移到另一个软件包仓库或发布到新平台，在 REZICS 中仍是同一个条目。每次发行都会单独记录当时实际发布的内容。',
      },
      releases: {
        label: '发行',
        headline: '每次发行，分别归档。',
        lead: '每条发行记录都会注明版本号、发布渠道、日期、平台，以及当时实际包含的文件。错误资料可以附上证据后更正；后续发布的修补会成为新记录。',
      },
      list: {
        caption: '示例编辑器的发行记录，按时间从新到旧排列（示意）',
        columns: ['版本', '发布渠道', '日期', '平台'],
        points: [
          { title: '发布渠道', body: '稳定版和测试版分开标注。最新版本不一定适合你。' },
          { title: '版本顺序', body: '按程序所属生态系统的规则判断先后，不会把版本号当作普通文本比较。' },
          { title: '平台', body: '同一版本在不同平台的发行各有自己的记录。' },
        ],
      },
      statement: {
        text: 'REZICS 不统计下载次数，',
        sub: '也不据此排序；列表会注明所用的排序方式。',
      },
      identity: {
        label: '名称和身份',
        headline: '名称相同，不代表是同一个程序。',
        rows: [
          { title: '多语言名称', body: '记录中文名、原名和常见简称，用任何一个名称搜索都能找到。' },
          {
            title: '标识符',
            body: '软件包仓库中的名称、网址和编号都会分别记录来源。两个仓库中相同的字符串不会自动视为同一个程序。',
          },
          { title: '分支', body: '分支项目会另立条目，有自己的维护者和发行，再通过“分支自”关联回原项目。' },
          { title: '合并和拆分', body: '重复条目会附上证据后合并，旧网址仍然有效。合并错误时可以撤回，收藏和评分不会因此重复计算。' },
        ],
      },
      browse: {
        label: '筛选',
        headline: '所有条件必须对应同一条发行记录。',
        lead: '搜索“能在乙系统 64 位上运行、采用开源许可的稳定版”时，REZICS 只会列出某一条发行记录同时满足全部条件的程序。条件分散在两条发行记录中的程序不会列出。',
        points: [
          { title: '数量', body: '结果会注明数量；尚未统计完成时，会标为“至少”。' },
          { title: '翻到最后', body: '列表可以一直翻到最后一条，不会停在某一页。' },
          { title: '保存为视图', body: '常用条件可以保存为视图，之后直接关注。' },
        ],
      },
      closing: '版本号会变，可查询的记录会保留。',
    },

    compatibility: {
      hero: {
        headline: '兼容性由一条条实测记录组成。',
        lede: '开发者列出的支持平台只是一项声明，实测则是有人在某一天、某种环境下确认的结果。REZICS 会分别记录两者，只有后者用于判断兼容性。',
      },
      anatomy: {
        label: '一条实测',
        headline: '一条实测记录包含什么。',
        lead: '实测记录列出这些信息，说明如何重新测试，以及结果适用于哪些环境。',
        rows: [
          { title: '指标', body: '测试什么：能否启动、能否完成某项工作，或某个具体数值。有数值时，也会记录单位。' },
          { title: '方法', body: '步骤说明清楚，其他人才能照着重新测试。' },
          { title: '条件', body: '操作系统版本、处理器架构和相关设置对应同一条实测记录。条件发生变化，就会形成另一条记录。' },
          { title: '文件', body: '实测会注明适用的版本和文件，并附上已验证的哈希值。哈希值只标识这些字节，不为其他文件作证。' },
          { title: '日期和提交者', body: '每条实测都有日期和提交者。人和 AI 代理都可以提交，自动化账户会注明自己的自动化身份。' },
          { title: '采纳', body: '实测以提案形式提交，采纳后才生效。有人提出质疑时会另行标注，之前的判断仍会保留。' },
        ],
      },
      states: {
        label: '五种状态',
        headline: '五种状态，各有含义。',
        lead: '除了兼容和不兼容，还有三种常被混淆的情况。REZICS 会分别标注。',
        body: {
          compatible: '至少有一条已采纳的实测记录在此环境中顺利完成，并注明日期。',
          incompatible: '已采纳的实测显示无法运行，并附有证据和日期。',
          unknown: '没有任何实测记录。不根据标签、分类或宣传文字推断。',
          stale: '实测已超过有效期。仍可查看结果，但不再代表当前情况。',
          unavailable: '没有可供此环境获取的发行记录，因此无法判断是否兼容。',
        },
        caption: '示例编辑器各版本在四种环境中的兼容性（示意）',
        corner: '环境',
      },
      conditions: {
        label: '条件',
        headline: '所有条件必须对应同一条实测记录。',
        lead: '筛选兼容性时，所有条件都必须由同一个发行版本、同一条实测记录同时满足。把不同版本的结果拼在一起，看似能用，实际安装后却无法运行。',
        example: '例如，条件是“乙系统 64 位、稳定版、兼容、4.0 及以上”，示例编辑器有两个候选发行版本（示意）：',
        candidates: [
          { title: '4.1 测试版', body: '兼容。实测可以运行，但不是稳定版。' },
          { title: '4.0 稳定版', body: '未知。是稳定版，但还没有人测试过。' },
        ],
        result: '条件分散在两个发行版本中，因此没有符合条件的结果。REZICS 会直接说明没有结果，不会悄悄放宽条件。',
      },
      statement: {
        text: '每项标注，都有对应的证据和范围；',
        sub: '外部链接本身不能证明任何事情。',
        note: '扫描结果也一样，只说明某个文件和某次扫描。',
      },
      closing: '能否运行，由实测回答。',
    },

    reviews: {
      hero: {
        headline: '先说明哪个版本，再给出评分。',
        lede: '同一个程序在更新前后可能截然不同。评分可以对应整个程序，也可以只对应某个发行版本；对应某个版本的评分会一直保留在该版本下。',
      },
      rules: {
        label: '评分规则',
        headline: '评分人数足够，才显示平均分。',
        facts: [
          { title: '5', body: '默认至少需要 5 个评分才显示平均分。在此之前只显示人数和分布，并注明还差多少条。' },
          { title: '50', body: '排行榜使用加权分数，默认至少有 50 个评分才会列入。加权计算使用的平均分和权重都会公开。' },
          { title: '1', body: '同一用户对同一对象和问题只保留一条当前有效的评分，修改分数时会更新这条记录。' },
        ],
      },
      anatomy: {
        label: '问题和对象',
        headline: '每项评分，都对应一个问题。',
        lead: '评分问题、量表和对象会一并定义。不同问题的评分不会相加，单个发行版本的评分也不会自动计入整个程序。',
        points: [
          { title: '并列显示', body: '全站和每个社区的评分会并列展示，不会合成一个数字。' },
          { title: '跨版本', body: '跨版本总分是另一项指标，会注明算法和涵盖的发行版本数量。' },
          { title: '不编造', body: 'REZICS 不会编造评论、投票或参与记录，自动化账户一律会标明。' },
        ],
      },
      statement: {
        text: '还没有人评分时，不显示任何图表；',
        sub: '不会显示零分，也不会出现空白的条形图。',
      },
      picks: {
        label: '精选和替代',
        headline: '精选由人负责，替代有理有据。',
        rows: [
          { title: '社区精选', body: '社区选出的程序，每一项都会关联到作出这项决定的讨论。' },
          { title: '可以替代', body: '“可以用来替代它完成某项工作”是一条关联，会附上理由和提出者，也可以被质疑。' },
          { title: '列表', body: '整理为列表时，会注明目标环境和是否检查过兼容性。' },
          { title: '推荐', body: '每条推荐都会说明理由，例如你关注的条件或某个社区的决定；不需要时可以全部关闭。' },
          { title: '报告问题', body: '某个版本出现问题时，讨论会开在该版本下，之后的读者一看就知道讨论的是哪个版本。' },
        ],
      },
      closing: '评分旁会注明版本和人数。',
    },

    updates: {
      hero: {
        headline: '按你选择的级别接收新发行通知。',
        lede: '关注一个程序后，你会收到它的新发行和更新说明。每条都接收、只接收重要通知，或完全不接收，由你决定。',
      },
      levels: {
        label: '通知级别',
        headline: '三种级别，每个关注对象单独设置。',
        lead: '随时可以修改。某次发行特别重要时，也能单独为它设置通知。',
        rows: [
          { title: '全部', body: '每次发行、每条公告和帖子都会通知。' },
          { title: '精选', body: '只通知新发行、公告和社区决定。' },
          { title: '关闭', body: '只保留与你直接相关的回复和提及通知。' },
          { title: '接收方式', body: '可以选择站内收件箱、推送通知或电子邮件摘要。不想再收邮件时，点击一次即可退订。' },
        ],
      },
      targets: {
        label: '关注对象',
        headline: '可以关注的不只有程序。',
        rows: [
          { title: '程序', body: '查看它的新发行和更新说明。' },
          { title: '开发者或组织', body: '查看他们发布的新条目和公告。' },
          { title: '筛选条件', body: '将“能在乙系统上运行的开源文本编辑器”保存为视图。符合条件的新程序会出现在首页标签页中，也可以接收摘要。' },
          { title: '社区', body: '查看社区公告和决定，例如新增的精选内容。' },
        ],
      },
      changelog: {
        label: '更新说明',
        headline: '更新说明随发行记录保留。',
        lead: '每次发行下都会记录更新说明。从 3.2 升级到 4.1 测试版时，可以依次查看中间每个版本的变更。',
        more: '首页的“继续”栏目会把兼容的软件包更新和你尚未读完的下一章放在一起。软件包更新和回退旧版本都会锁定到确切文件，回退时获取的就是当时那一份。',
        caption: '示例编辑器的更新说明，按时间从新到旧排列（示意）',
        start: '从这里开始阅读',
      },
      statement: {
        text: '你的脚本和 AI 代理，',
        sub: '读取的是同一份更新事件；中断后可以从上次的位置继续。',
      },
      closing: '接收什么、接收多少，由你决定。',
    },

    publishing: {
      hero: {
        headline: '把每次发行都记录清楚，方便查找。',
        lede: '开发者在 REZICS 维护自己的程序，记录每次发行的版本号、平台、文件和更新说明，以及许可条款和获取方式。关注者、筛选条件和 AI 代理读取的都是同一份信息。',
      },
      record: {
        label: '一条发行记录',
        headline: '发行记录包含的字段。',
        lead: '必填字段未填完整时，发行无法提交；提交后，这条记录就会归档。',
        caption: '示例编辑器 4.0 的发行记录（示意）',
        fields: [
          { title: '版本号', body: '4.0' },
          { title: '发布渠道', body: '稳定版' },
          { title: '日期', body: '2026-08-25' },
          { title: '平台', body: '甲系统 64 位、乙系统 64 位、丙系统手机端' },
          { title: '文件大小', body: '48.2 MB' },
          { title: '哈希值（节选）', body: 'sha256 9f2c41d7e41a' },
          { title: '许可', body: '某开源许可证 2.0 版' },
          { title: '获取方式', body: '开发者网站（外部链接）' },
          { title: '更新说明', body: '新增工作区，并移除旧的插件格式。' },
        ],
      },
      steps: {
        label: '发布流程',
        headline: '发布一次，共分五步。',
        steps: [
          { title: '确认维护权限', body: '先确认你有项目的维护权限，再维护它的页面和发行。' },
          { title: '填写发行信息', body: '填写版本号、发布渠道、日期和各个平台的文件。' },
          { title: '声明许可', body: '选择许可条款和版本。声明会记录声明者、时间和适用范围。' },
          {
            title: '注明获取方式',
            body: '明确说明文件由谁提供、在哪里下载，或需要前往哪个外部页面安装。如果 REZICS 只是提供外部链接，就不会说成由 REZICS 安装。',
          },
          { title: '发布', body: '发行会成为归档记录，关注你的人会按各自的通知级别收到消息。' },
        ],
        note: '这些步骤都能通过 API 和 MCP 完成，你的发布流程可以自动提交每次发行。',
      },
      licence: {
        label: '许可',
        headline: '许可要注明具体条款和版本。',
        lead: '每项许可声明都会记录具体条款和版本、声明者、时间、适用范围和来源。从外部来源导入的许可文本会注明来源，不会被当作你本人的声明。',
        points: [
          { title: '不等于认证', body: '声明本身不是法律认证，也不会改变任何人的编辑权限。' },
          { title: '不清楚就如实说明', body: '如果不清楚最初由谁授权、授权年份，就如实标为未知。' },
          { title: '可以筛选', body: '许可可以作为筛选条件，查找条款符合需求的程序。' },
        ],
      },
      lock: {
        label: '依赖',
        headline: '依赖关系遵循各生态系统自身的规则。',
        lead: 'REZICS 解析软件包依赖关系时，会保留各生态系统原有的身份、版本顺序和依赖含义，再将结果锁定到确切的文件。',
        points: [
          { title: '必需项和建议项', body: '必需的依赖和冲突，与建议的搭配和提醒会分别记录。' },
          { title: '已撤下的版本', body: '已撤下的版本按所属生态系统规则处理；已有锁定仍会保留当初选择的文件。' },
          { title: '分别报告', body: '来源无法查询、条款不支持或超出预算，会与确实无解的情况分开报告。' },
          { title: '查不到不等于不存在', body: '无法查询的依赖信息，不会被当作没有依赖。' },
        ],
      },
      statement: {
        text: '安装不代表允许执行；',
        sub: '软件包中的脚本只有经过你明确同意才会执行。',
        note: 'REZICS 的安装流程只接受经过验证的文件，并将它们放在隔离的暂存区。',
      },
      maintenance: {
        label: '发布之后',
        headline: '发布之后的维护。',
        rows: [
          { title: '截图和声明', body: '截图、隐私和无障碍声明都会注明提供者。' },
          { title: '撤回过时信息', body: '某个平台的信息过时后，可以撤回这条信息，但不会删除程序、发行记录或讨论。' },
          { title: '上架', body: '销售时会用表格列出价格、地区和有效期，价格变动也会保留记录。' },
          { title: '演职人员', body: '维护者和贡献者都会注明角色；即使更换项目，仍使用同一个身份。' },
        ],
      },
      closing: '发布一次，所有人看到同一份记录。',
    },

    connections: {
      hero: {
        headline: '依赖它或基于它构建的内容，都关联到同一个程序。',
        lede: '游戏模组、MCP 服务器、技能和 API 在 REZICS 中各有自己的身份，再通过有方向的关联连接到它们依赖的程序。从任何一端都能找到另一端。',
      },
      relations: {
        label: '关联类型',
        headline: '每条关联都有名称和方向。',
        lead: '关联的两个方向各有自己的表述，并且都能在不同语言中准确表达。',
        rows: [
          { title: '需要／被需要', body: '必需的依赖。缺少它，程序就无法运行。' },
          { title: '建议搭配／被建议搭配', body: '安装后体验更好，但没有也能运行。' },
          { title: '冲突', body: '同时安装两者会出现问题，双方看到的说明一致。' },
          { title: '分支自／分支为', body: '由另一组人接手并独立维护的项目。' },
          { title: '可以替代／可被替代', body: '可以完成相同任务的另一个程序，并附上理由。' },
        ],
      },
      kinds: {
        label: '其他类型',
        headline: '与其他类型的关联。',
        rows: [
          {
            kind: 'games',
            line: '模组和加载器',
            body: '游戏模组依赖游戏本身，通常也依赖一个加载器。必需项和建议项会分别记录；加载器本身也是软件，有自己的发行和兼容性信息。',
          },
          {
            kind: 'mcp',
            line: '供代理操作',
            body: '供 AI 代理操作这个程序的 MCP 服务器另有一个条目。项目、软件包发行、部署端点和实际观察到的能力，分别记录。',
          },
          { kind: 'skills', line: '将它列为依赖项', body: '技能可以声明依赖哪些程序；组合使用前，先比对能力和环境。' },
          { kind: 'apis', line: '提供或调用', body: '程序提供或调用的公开 API 在 API Hub 中有自己的版本和证据，并关联回这个程序。' },
        ],
      },
      people: {
        label: '开发人员',
        headline: '程序开发者也只有一个身份。',
        lead: '同一个人可以维护一款软件、写一本小说、评论一款游戏，在 REZICS 中都使用同一个身份。演职人员字段会把这些关联起来；关注这个人，就能跟进他在各个类型中的新作品。',
      },
      statement: {
        text: '名称相同并不足以建立关联，关联需要来源；',
        sub: 'AI 代理只能提出关联，不会擅自认定两者相同。',
      },
      closing: '从任何一端，都能找到另一端。',
    },
  },
} satisfies MiniSite<SoftwareStrings>;

export default site;
