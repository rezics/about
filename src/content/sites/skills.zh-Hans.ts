// Skill Hub (/skills/): every visible string of the site, shaped by the v3 parts (hero, section,
// facts list, photo row, tile masonry, statement, closing). Design record and sources:
// src/sites/skills/SITE.md and facts.md. Terms: 「AI 代理」 on first mention in a section, then
// 「代理」; 「技能」 throughout; 「MCP 伺服器」.
import type { KindId, MiniSite } from '../schema';

/** A hairline facts row: title left, text right. */
export interface Row {
  title: string;
  body: string;
}

/** A frontmatter line of the example skill and what REZICS does with it. */
export interface KeyRow {
  key: string;
  value?: string;
  body: string;
}

/** A file role of the Agent Skills format. */
export interface FileRow extends Row {
  /** The literal path from the format, set as code. */
  path?: string;
  /** A short mark beside the title (可執行, 缺少). */
  mark?: string;
}

/** A section opening: eyebrow in columns 1 to 3, serif h2 in 4 to 11, lead in 4 to 9. */
export interface Head {
  eyebrow: string;
  /** One or two short clauses; each item is one line on wide screens. */
  headline: string[];
  lead?: string;
}

/** A large serif statement: the first half in ink, the second in muted ink. */
export interface Said {
  text: string;
  muted: string;
}

/** A still-life picture: the file stem under /images/sites/skills/ and its description. */
export interface Pic {
  src: string;
  alt: string;
}

/**
 * How an inner page ends: a lead-in to the next page (a section whose title leads into one tile),
 * then the closing statement before the ink pill into REZICS.
 */
export interface End {
  next: string;
  closing: string;
}

export interface SkillsStrings {
  ui: {
    nextPage: string;
    nextSite: string;
  };
  landing: {
    hero: { eyebrow: string; headline: string[]; lede: string; pic: Pic };
    layers: Head & { rows: Row[] };
    files: Head & { body: string; link: string; pic: Pic };
    statement: Said;
    pages: Head & { tiles: { slug: string; line: string }[] };
    neighbours: Head & { tiles: { to: KindId; line: string }[] };
    closing: { title: string; body: string };
  };
  directory: {
    head: { headline: string[]; lede: string };
    specimens: Head & { rows: Row[] };
    filters: Head & { rows: Row[] };
    statement: Said;
    lists: Head & { body: string; pic: Pic };
    views: Head & { rows: Row[] };
    end: End;
  };
  versions: {
    head: { headline: string[]; lede: string };
    frontmatter: Head & { rows: KeyRow[] };
    files: Head & { rows: FileRow[] };
    history: Head & { body: string[]; pic: Pic };
    historyExample: Head & { rows: Row[] };
    packages: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  evidence: {
    head: { headline: string[]; lede: string };
    declaration: Head & { code: string; codeLabel: string; caption: string };
    record: Head & { rows: Row[] };
    rules: Head & { rows: Row[] };
    opinions: Head & { rows: Row[] };
    statement: Said;
    end: End;
  };
  use: {
    head: { headline: string[]; lede: string };
    steps: Head & { rows: Row[] };
    agent: Head & { paragraphs: [string, string]; link: string };
    later: Head & { rows: Row[] };
    end: End;
  };
  publish: {
    head: { headline: string[]; lede: string };
    import: Head & { body: string; pic: Pic };
    steps: Head & { rows: Row[] };
    limits: Head & { rows: Row[]; after: string };
    statement: Said & { note: string; rows: Row[] };
    credits: Head & { rows: Row[] };
    end: End & { nextLine: string };
  };
}

const skills = {
  id: 'skills',
  base: '/skills/',
  name: 'Skill Hub',
  theme: { kind: 'skills' },
  pages: [
    {
      slug: '',
      label: '总览',
      meta: {
        title: 'Skill Hub：AI 代理技能索引',
        description:
          'Skill Hub 收录供 AI 代理使用的技能。每项技能的全文、文件、版本和带日期的兼容记录都会完整展示，评分和讨论对应具体版本，使用前可以先了解清楚。',
      },
    },
    {
      slug: 'directory',
      label: '目录',
      meta: {
        title: 'Skill Hub 目录：每行一项技能',
        description:
          '在 Skill Hub 中用一句描述查找技能。所有已收录的属性都可以筛选，结果可以一直翻到最后一条；你可以关注他人整理的列表和自己保存的视图，符合条件的新技能出现时就会收到通知。',
      },
    },
    {
      slug: 'versions',
      label: '版本与文件',
      meta: {
        title: '技能页面：全文、文件和版本',
        description:
          '技能页面展示完整的 SKILL.md，并列出每个文件的用途和哈希值，可执行文件会特别标注。每个版本的内容、许可和来源都会固定保存，新版本不会覆盖旧版本。',
      },
    },
    {
      slug: 'evidence',
      label: '证据与评价',
      meta: {
        title: '技能兼容记录与评价',
        description:
          '技能作者声明的兼容条件只是一项声明。Skill Hub 还会记录谁在什么 AI 代理、哪个版本、哪种语言和哪一天使用过，评分和讨论也分别对应具体版本。',
      },
    },
    {
      slug: 'use',
      label: '交给你的代理使用',
      meta: {
        title: '把技能交给你的 AI 代理',
        description:
          '在 Skill Hub 找到技能后，先阅读全文和文件，查看兼容记录，再选择一个版本下载或复制，锁定所需软件包，最后关注更新。你的 AI 代理也能通过 API 和 MCP 读取同一份数据。',
      },
    },
    {
      slug: 'publish',
      label: '发布技能',
      meta: {
        title: '在 Skill Hub 发布技能',
        description:
          '将符合格式的技能文件夹导入 Skill Hub。每个字节都会原样保存，脚本不会执行，无法识别的字段也不会丢弃；每次发布都会固定保存文件、许可和来源，成为一个新版本。',
      },
    },
  ],
  strings: {
    ui: {
      nextPage: '下一页',
      nextSite: '下一个网站',
    },
    landing: {
      hero: {
        eyebrow: 'Skill Hub',
        headline: ['交给 AI 代理之前，', '先逐层读清楚。'],
        lede: '在 Skill Hub 中，先了解 AI 代理使用的技能。完整说明、文件、版本和带日期的使用记录，在选择前都能查看。',
        pic: {
          src: 'fold',
          alt: '一张青柠绿色的纸对折后半展开，下面错落叠着米白、浅绿和淡蓝色的纸，每一层都露出边缘。',
        },
      },
      layers: {
        eyebrow: '阅读顺序',
        headline: ['一项技能分三层阅读，', '顺序与 AI 代理一致。'],
        lead: '以整理章节人物的技能为例（示意），先读名称和描述，再读完整说明，最后才读任务所需的文件。Skill Hub 也按这个顺序展示。',
        rows: [
          {
            title: '一行',
            body: 'chapter-cast 的描述写着“列出章节中的人物，并附上段落位置”。代理先读这一句，判断是否适合当前任务。',
          },
          {
            title: '一页',
            body: 'SKILL.md 写着：“先列出人物和别名，再附上原文位置；没有来源就标记为未找到。”需要整理人物时，代理才会读取这一页的步骤和限制。',
          },
          {
            title: '所需文件',
            body: 'references/aliases.md 列出了“人物、别名、原文位置”的对应格式。任务需要核对别名时，代理才会读取这份参考文件；其他文件也会逐一列出。',
          },
        ],
      },
      files: {
        eyebrow: '文件',
        headline: ['列出每个文件，', '标明可执行文件。'],
        body: 'SKILL.md、scripts/、references/、assets/，以及规范未命名的文件，都会记录路径、用途和哈希值。SKILL.md 中提到但文件夹里没有的文件也会标出。',
        link: '查看版本和文件',
        pic: {
          src: 'folder',
          alt: '一张青柠绿色的纸对折成文件夹，封面掀起，里面叠着米白、浅绿、淡蓝和芥黄色的纸，每张都露出边缘。',
        },
      },
      statement: {
        text: '收录不等于认可。',
        muted:
          '读过全文和文件后再作判断。REZICS 导入技能时只保存，不执行指令。',
      },
      pages: {
        eyebrow: '本网站',
        headline: ['从找到一项技能，', '到发布自己的技能。'],
        tiles: [
          { slug: 'directory', line: '用一句描述查找技能' },
          { slug: 'versions', line: '全文、每个文件和每个版本' },
          { slug: 'evidence', line: '谁在什么条件下使用过' },
          { slug: 'use', line: '选定一个版本，交给 AI 代理' },
          { slug: 'publish', line: '一个文件夹，一个身份' },
        ],
      },
      neighbours: {
        eyebrow: '相关内容',
        headline: ['技能由文字和文件组成；', '它使用的内容各有自己的页面。'],
        lead: '技能声明的软件包在软件目录中有自己的版本；同一位作者编写的技能和 MCP 服务器关联到同一个身份。REZICS 的本地 Wiki 工具包也附带一项技能，指导 AI 代理从书籍和视觉小说中提出有来源的事实。',
        tiles: [
          { to: 'software', line: '技能依赖的软件包' },
          { to: 'mcp', line: '代理连接的工具' },
          { to: 'books', line: '逐章提出有来源的事实' },
          { to: 'visual-novels', line: '从游戏脚本中查找来源' },
        ],
      },
      closing: {
        title: '先从一行描述开始查找。',
        body: '在 REZICS 搜索技能，读过全文、文件和记录后，再交给你的 AI 代理。',
      },
    },
    directory: {
      head: {
        headline: ['每行一项技能，', '配上一句话。'],
        lede: '目录中的每一行只有两项内容：技能名称和作者写的一句描述。AI 代理会根据这句话判断是否使用某项技能，你也可以从这句话开始挑选。',
      },
      specimens: {
        eyebrow: '目录示例',
        headline: ['先读一句，', '判断是否适合。'],
        lead: '以下名称和描述仅作示意。两项技能处理不同任务，一句话就能说明区别。',
        rows: [
          { title: 'chapter-cast', body: '整理章节人物和别名，附上段落位置，用于核对角色表。' },
          { title: 'quote-check', body: '逐条核对引文与原文，列出来源位置和找不到来源的句子。' },
        ],
      },
      filters: {
        eyebrow: '筛选',
        headline: ['按你关注的条件筛选，', '条件可以叠加。'],
        lead: '提供的筛选字段可以组合使用。',
        rows: [
          { title: '搜索', body: '用描述任务的词语查找，例如“整理章节人物”或“核对引文”。' },
          { title: '许可', body: '只查看采用特定许可证的技能。' },
          { title: '语言', body: '按说明所用语言或有记录的任务语言筛选。' },
          { title: '兼容记录', body: '只查看在某个 AI 代理和版本上有使用记录的技能。' },
          { title: '更新时间', body: '按最近一次发布的日期排序或筛选。' },
        ],
      },
      statement: {
        text: '可以一直翻到最后一条。',
        muted: '会注明精确数量或估计值，后续结果也不会隐藏。',
      },
      lists: {
        eyebrow: '列表',
        headline: ['别人整理好的一组内容。'],
        body: '列表会按顺序排列一个工作流程所需的内容，并为每项注明选择原因。技能之外，也可以加入 MCP 服务器、API 或软件。整个列表都能导出和关注；整理者添加新项目后，你就能看到。',
        pic: {
          src: 'bundle',
          alt: '五张大小不同的纸叠在一起，颜色有青柠绿、米白、淡蓝和芥黄，中间用一条青柠绿纸带绕一圈束起。',
        },
      },
      views: {
        eyebrow: '视图',
        headline: ['保存筛选条件，', '持续关注结果。'],
        lead: '一组筛选条件可以保存为视图。关注这个视图后，符合条件的新技能就会出现在你的动态中。',
        rows: [
          { title: '搜索', body: '设置条件。' },
          { title: '视图', body: '保存条件并命名。' },
          { title: '关注', body: '有新结果时通知你。' },
        ],
      },
      end: {
        next: '找到后，打开它。',
        closing: '你需要的技能，可能就在下一行。',
      },
    },
    versions: {
      head: {
        headline: ['打开一项技能，', '查看其中的全部内容。'],
        lede: '技能页面展示第二层内容：SKILL.md 原文，以及它包含的每个文件。交给 AI 代理前，你可以读到代理将要读取的每个字。',
      },
      frontmatter: {
        eyebrow: 'SKILL.md',
        headline: ['开头几行，', 'REZICS 这样读取。'],
        lead: '以一个技能文件夹为例（示意）。',
        rows: [
          {
            key: 'name',
            value: 'chapter-cast',
            body: '名称只能使用小写字母、数字和连字符，而且必须与文件夹同名。名称用于识别技能，不能仅凭名称相同就认定是同一项。',
          },
          {
            key: 'description',
            value: '列出章节中出现的人物，并附上段落位置。整理角色表时使用。',
            body: '这句话会显示在目录中，也是 AI 代理最先读到的内容。',
          },
          {
            key: 'license',
            value: 'Apache-2.0',
            body: '许可证会与声明者和时间一起记录在版本中。这是一项声明，不代表经过法律审查。',
          },
          {
            key: 'compatibility',
            value: '需要能读取本地文件的代理',
            body: '作者自行填写的兼容条件会标为“需要独立验证”，不会当作已证实的信息。',
          },
          {
            key: 'allowed-tools',
            value: 'read-file',
            body: '允许使用的工具同样只是一项声明，会标为“需要独立验证”。',
          },
          { key: '其他字段', body: '规范之外的字段不会丢弃，会保留原文并单独列出。' },
        ],
      },
      files: {
        eyebrow: '文件',
        headline: ['每个文件单独占一行。'],
        lead: '每个文件都会记录路径、用途和哈希值。下载到的字节与页面记录一致。',
        rows: [
          { title: '说明文件', path: 'SKILL.md', body: '全文原样展示，不作任何修改。' },
          {
            title: '脚本',
            path: 'scripts/',
            mark: '可執行',
            body: '可执行文件会带有标记。REZICS 导入时只保存，不执行。',
          },
          { title: '参考资料', path: 'references/', body: 'AI 代理需要了解细节时才会读取的文件。' },
          { title: '素材', path: 'assets/', body: '模板、图片和数据文件也会列出路径和哈希值。' },
          { title: '其他', body: '规范未命名的文件夹和文件也会逐一列出。' },
          { title: '缺少的文件', mark: '缺少', body: 'SKILL.md 中提到但文件夹里没有的文件会标出来。' },
        ],
      },
      history: {
        eyebrow: '版本',
        headline: ['每个版本都会保留。'],
        body: [
          '发布后的任何修改都会成为下一个版本；上一版的文件和哈希值保持不变，你正在使用的版本不会被替换。',
          '版本按发布时间排列，并附上日期和变更记录。无论版本多少，都可以一直查看。关注这项技能的人也会收到这份记录。',
        ],
        pic: {
          src: 'fan',
          alt: '五张纸从同一个角向外扇形展开，最前面是青柠绿，后面的颜色逐渐变浅，最后一张是米白色。',
        },
      },
      historyExample: {
        eyebrow: '版本示例',
        headline: ['同一项技能，', '两个带日期的版本。'],
        lead: '以 chapter-cast 为例，以下日期和内容均为示意。每个版本的文件和哈希值都会固定保存，新版本不会覆盖上一版。',
        rows: [
          { title: '1.1.0', body: '2026 年 10 月 19 日。增加人物别名的对应规则，并附上相关参考文件。' },
          { title: '1.0.0', body: '2026 年 10 月 12 日。整理人物首次出现的位置。原始文件保持不变，评价和评论仍对应这个版本。' },
        ],
      },
      packages: {
        eyebrow: '软件包',
        headline: ['按作者所写列出所需软件包；', '信息不明确时如实标注。'],
        rows: [
          {
            title: '按生态系统区分',
            body: '每个软件包都会列在所属的生态系统下。不同生态系统中的同名软件包不会被视为同一个。',
          },
          { title: '必需和可选', body: '每一项都会标明是必需还是可选。' },
          { title: '缺失和不支持', body: '声明缺失，或使用了不支持的生态系统时，会标为缺失或不支持。' },
        ],
      },
      statement: {
        text: '每项技能都有署名。',
        muted:
          '作者和维护者会按角色列出，并关联到他们的其他作品和评论。',
      },
      end: {
        next: '读完内容，再看谁用过。',
        closing: '读过技能，再交给 AI 代理。',
      },
    },
    evidence: {
      head: {
        headline: ['声明是声明，', '记录是记录。'],
        lede: '作者可以写下技能适用的环境，这是一项声明。有人实际使用某个 AI 代理完成某项任务，并留下日期和方法，这才是一条记录。Skill Hub 将两者分开呈现。',
      },
      declaration: {
        eyebrow: '声明',
        headline: ['作者写下的，', '是一项兼容条件。'],
        lead: 'REZICS 会照原文记录作者写在 SKILL.md 中的兼容条件和允许使用的工具，并标记为需要独立验证，不会当作已证实的信息。',
        code: '# SKILL.md 开头（示意）\ncompatibility: 适用于支持技能文件夹的 AI 代理',
        codeLabel: '示例技能写在 SKILL.md 开头的兼容条件',
        caption: 'REZICS 会照原文记录这一行，并标记为：需要独立验证。',
      },
      record: {
        eyebrow: '记录示例',
        headline: ['同一个版本，', '记录八项内容。'],
        lead: '以下是 chapter-cast 1.1.0 的记录格式示例。日期、AI 代理版本、方法和结果均为示意数据，用来说明如何阅读一条记录。',
        rows: [
          { title: '任务', body: '从一段章节摘录中列出人物、别名和原文位置，用于核对角色表。' },
          { title: 'AI 代理', body: '能够读取技能文件夹的本地代理，未启用额外工具。' },
          { title: '代理版本', body: '示意客户端 1.0.0，记录观察时使用的版本。' },
          { title: '技能版本', body: 'chapter-cast 1.1.0，用于示意新增别名对应关系的版本。' },
          { title: '语言', body: '输入和输出均为繁体中文，别名沿用原文写法。' },
          { title: '日期', body: '2026 年 10 月 19 日，与版本页面中示意的 1.1.0 版本日期相同。' },
          { title: '方法', body: '输入包含三个人物和两组别名的短段落，逐项比对输出和原文位置。' },
          { title: '观察结果', body: '示例结果列出三个人物、两组别名及对应位置；不据此推断其他文本或代理也适用。' },
        ],
      },
      rules: {
        eyebrow: '阅读方法',
        headline: ['如何阅读记录'],
        rows: [
          { title: '没有记录不代表不能用', body: '没有人记录过的组合会标为“暂无记录”，不会写成不兼容。' },
          {
            title: '旧记录附有日期',
            body: '每条记录都会显示日期和对应版本。AI 代理或技能更新后，旧记录不会被当成新版本的结果。',
          },
          { title: '结果相反，两条记录都保留', body: '两条记录的结论不同时，都会保留，并分别附上方法，供你比较。' },
          {
            title: '代理也能记录',
            body: '代理可以提交记录，但需要注明自己是代理、由谁运营、使用了什么方法，经人工审核后才会公开。',
          },
          { title: '撤回只影响自己的支持', body: '一个来源撤回时，只撤回它提供的支持，历史仍会保留，其他来源的记录不受影响。' },
        ],
      },
      opinions: {
        eyebrow: '评分与讨论',
        headline: ['评分和评论，', '都对应实际使用的版本。'],
        rows: [
          {
            title: '评分',
            body: '评分只对应被评的那个版本。新版本有自己的评分；跨版本的总分会单独计算，并注明算法。评分旁会标出评分人数和分布，评分数量不足时不计算平均分。',
          },
          {
            title: '评论',
            body: '报告问题或分享用法时，评论会注明当时使用的版本。技能更新后，旧评论仍指向原来的版本，读者不会误以为它说的是新版本。',
          },
        ],
      },
      statement: {
        text: '记录不代表安全保证。',
        muted:
          '每次观察都会记录环境和版本，采用前仍要阅读说明和脚本。',
      },
      end: {
        next: '查看记录，再开始使用。',
        closing: '读过记录，再作决定。',
      },
    },
    use: {
      head: {
        headline: ['先读清楚，', '再交给你的 AI 代理。'],
        lede: '技能是供代理执行的指令，有时还包含可执行脚本。在 Skill Hub 阅读之后，如果决定使用，再获取确定的版本。',
      },
      steps: {
        eyebrow: '六个步骤',
        headline: ['从查找到使用，', '分六步完成。'],
        rows: [
          { title: '查找', body: '在目录中用描述搜索，或从别人整理的列表中挑选。' },
          { title: '读完', body: '打开技能页面，阅读 SKILL.md 全文，查看包含哪些文件以及哪些文件可执行。' },
          { title: '查看记录', body: '看看是否有人使用你正在用的 AI 代理和版本留下记录，以及记录日期距今多久。' },
          {
            title: '选择并获取一个版本',
            body: '选择一个版本并下载它的文件夹，文件与页面上的哈希值一致；也可以只复制 SKILL.md 中的说明。将内容放入代理读取技能的位置，具体位置以代理自身的说明为准。',
          },
          {
            title: '锁定软件包',
            body: '根据支持的软件包条件锁定确切版本和文件；无法解析时会说明原因。安装软件包不代表允许执行其中的脚本。',
          },
          { title: '关注', body: '关注这项技能。发布新版本时，先查看变更，再决定是否更换。' },
        ],
      },
      agent: {
        eyebrow: 'API 与 MCP',
        headline: ['你的 AI 代理，', '也能读取 Skill Hub。'],
        paragraphs: [
          '网页上的每个操作都有对应的 API 操作。代理可以通过 REZICS 的 API 或 MCP 服务器搜索技能、阅读全文和文件列表，获取的内容与你在页面上看到的相同。',
          '在 REZICS 的 API 和 MCP 中，技能文本一律视为数据。无论其中写了什么指令，都不会因此让任何人获得权限。',
        ],
        link: '在开发者网站查看 API 与 MCP',
      },
      later: {
        eyebrow: '后续版本',
        headline: ['发布了新版本，', '先查看变更再决定。'],
        rows: [
          { title: '通知级别', body: '关注时可以选择全部、精选或关闭，决定如何接收新版本通知。' },
          { title: '先查看变更', body: '每个新版本都会附上变更记录，也可以与当前版本逐项对比文件和哈希值。' },
          { title: '继续使用原版本', body: '不想更换时，可以继续使用原来的版本，其页面不会变成新版本。' },
          { title: '报告问题', body: '使用时遇到问题，可以在技能的讨论中报告，并注明使用的版本和 AI 代理。' },
          {
            title: '举报',
            body: '发现技能执行了说明之外的操作时，可以举报，无需账户。传播恶意软件违反 REZICS 使用规范。',
          },
        ],
      },
      end: {
        next: '轮到你来写一个。',
        closing: '选定一个版本，交给你的 AI 代理。',
      },
    },
    publish: {
      head: {
        headline: ['一个文件夹，', '发布为一项技能。'],
        lede: 'Skill Hub 接收按格式编写的技能：一个文件夹中必须包含一份 SKILL.md。导入后，它就有自己的身份、页面和第一个版本。',
      },
      import: {
        eyebrow: '导入',
        headline: ['导入时只保存，', '不执行。'],
        body: '文件夹经过这一步后会成为一项有身份的技能，其中的文件不会有任何变化。',
        pic: {
          src: 'slit',
          alt: '一张青柠绿色的纸中间有一道切口，一条米白色纸带从上方穿过切口，再从纸的下边穿出；下面露出一角芥黄色的纸。',
        },
      },
      steps: {
        eyebrow: '六项规则',
        headline: ['导入时，', '每个字节都会原样保留。'],
        rows: [
          { title: '原样保存', body: '每个文件的每个字节都会保存，路径只能位于文件夹内。' },
          { title: '不执行任何内容', body: '脚本会作为文件保存，不会有人执行；SKILL.md 中的指令也不会有人照着执行。' },
          { title: '检查文件引用', body: '如果 SKILL.md 提到的本地文件在文件夹中找不到，就会列为缺失文件。' },
          { title: '保留无法识别的字段', body: '规范之外的字段会保留在原处，并单独列为未解析字段，不会被改写成其他含义。' },
          {
            title: '不强行转换为技能',
            body: '名称与文件夹不一致或缺少描述时，导入就会停止。普通文件夹不会被整理成技能。',
          },
          { title: '发布一个版本', body: '发布时会固定每个文件的哈希值、许可和来源。之后再修改，就会成为下一个版本。' },
        ],
      },
      limits: {
        eyebrow: '限制',
        headline: ['导入限制'],
        rows: [
          { title: '128 个文件', body: '单次导入的文件数量上限。' },
          { title: '1 MiB', body: '所有文件的总大小上限。' },
          { title: '64 KiB', body: 'SKILL.md 的大小上限。' },
          { title: '64 个字符', body: '名称长度上限，只能使用小写字母、数字和连字符。' },
          { title: '1024 个字符', body: '描述长度上限。' },
        ],
        after: '超出限制或格式不符合要求的文件夹会停止导入，并说明原因。',
      },
      statement: {
        text: '描述是最先读到的一句话。',
        muted:
          '写清楚用途和适用时机，让人和 AI 代理都能读懂。',
        note: '同一项技能描述的两种写法（示意）。',
        rows: [
          {
            title: '描述清楚',
            body: '将章节中出现的人物整理成表，并附上段落位置。建立角色表或核对人物在哪一章出现时使用。',
          },
          { title: '描述过于简短', body: '处理小说。' },
        ],
      },
      credits: {
        eyebrow: '署名与权利',
        headline: ['署名、权利与协作'],
        rows: [
          { title: '作者和维护者', body: '按角色列出，每个人都使用自己的 REZICS 身份，其他人可以关注。' },
          { title: '许可', body: '你声明的许可会记录在每个版本上，并附上声明者和时间。' },
          { title: '权利仍归你所有', body: '上传技能不会转移你原有的知识产权。' },
          {
            title: '与 AI 代理协作维护',
            body: '代理也能提出修改，并注明目标版本、变更、证据和方法，同时表明自己是代理。修改经人工审核后才会应用，每次应用都有回执。',
          },
          { title: '撤回', body: '应用错误时可以撤回。撤回会作为更正记录，原有历史不会被改写。' },
        ],
      },
      end: {
        next: '技能之外，还有 API。',
        nextLine: '一起了解调用方式和版本',
        closing: '你的技能在 REZICS 有自己的身份。',
      },
    },
  },
} satisfies MiniSite<SkillsStrings>;

export default skills;
