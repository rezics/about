// The 視覺小說 site: every visible string of /visual-novels/ and its six inner pages. Design
// record: src/sites/visual-novels/SITE.md; claims and sources: src/sites/visual-novels/facts.md.
// The six releases below are one illustrative dataset (labelled 示意資料 on the pages), shared by
// the landing's three queries and the releases table so both agree.
import type { Item, Meta, MiniSite, PartId } from '../schema';

/** The four conditions a release is qualified by. */
export type Dim = 'language' | 'platform' | 'region' | 'coverage';

export interface VnRelease {
  id: 'r1' | 'r2' | 'r3' | 'r4' | 'r5' | 'r6';
  /** Full name, as in the table. */
  name: string;
  /** Option keys of `options`, one per condition (the content, not the box). */
  values: Record<Dim, string>;
  /** Option key of the title language when it differs from the content language. */
  titleLanguage?: string;
  coverageNote?: string;
  translator: string;
  source: string;
  status: string;
}

const meta = (title: string, description: string): Meta => ({ title, description });

const releases: VnRelease[] = [
  { id: 'r1', name: '原版（1.02）', values: { language: 'ja', platform: 'pc', region: 'jp', coverage: 'full' }, translator: '無', source: '無', status: '官方' },
  { id: 'r2', name: '官方中文版', values: { language: 'zh', platform: 'console', region: 'tw', coverage: 'full' }, translator: '发行商', source: '原版', status: '官方' },
  { id: 'r3', name: '爱好者汉化补丁 第一版', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'partial' }, coverageNote: '共通线和两条路线', translator: '爱好者翻译团队', source: '原版 1.02', status: '非官方' },
  { id: 'r4', name: '爱好者汉化补丁 第二版', values: { language: 'zh', platform: 'pc', region: 'any', coverage: 'full' }, translator: '爱好者翻译团队', source: '原版 1.02', status: '非官方' },
  { id: 'r5', name: '英文试玩版', values: { language: 'en', platform: 'pc', region: 'any', coverage: 'trial' }, translator: '发行商', source: '原版', status: '官方' },
  { id: 'r6', name: '手機版', values: { language: 'ja', platform: 'mobile', region: 'tw', coverage: 'full' }, titleLanguage: 'zh', translator: '無', source: '無', status: '官方' },
];

const strings = {
  /** Labels shared by several pages of this site. */
  shared: {
    demo: '示例数据',
    dims: { language: '语言', platform: '平台信息', region: '地区', coverage: '内容完整度' } as Record<Dim, string>,
    columns: { name: '版本', translator: '译者', source: '依据', status: '状态' },
    options: {
      language: { zh: '简体中文', ja: '日语', en: '英语' },
      platform: { pc: '电脑', console: '家用主机', mobile: '手机' },
      region: { jp: '日本地区', tw: '台湾', any: '不限制' },
      coverage: { full: '完整内容', partial: '部分内容', trial: '试玩' },
    } as Record<Dim, Record<string, string>>,
    /** Followed by the name of the condition a release fails. */
    fails: '不符合：',
    titleOnly: '仅标题为中文',
    match: '匹配',
    closed: '尚未读到',
    nextPage: '下一页',
    nextSite: '下一个站点',
    nextSiteLine: '根据版本和兼容记录，选择合适的 MCP 服务器。',
    /** The closing statement on every page of the site. */
    closing: '下一部视觉小说，从可以游玩的版本开始。',
    releases,
  },

  images: {
    routes: '紫色纸条在暖白色纸面上分岔，一条蓝色分支向右延伸。',
    window: '紫色、蓝色和粉色纸张层层交叠，同一个开口贯穿每一层。',
    thread: '深浅不同的两张紫色纸通过穿孔相连，对应翻译和它的来源。',
    fold: '一条紫色纸带逐段展开，末端仍然折叠着。',
    sites: '同一张紫色纸折成两个独立的小结构，共用相连的底面。',
  },

  landing: {
    hero: {
      headline: '有没有中文，每个版本都说清楚。',
      lede: 'REZICS 会为每部视觉小说的每个版本注明语言、平台、地区和完整度。爱好者翻译会署上译者姓名，也会注明依据的版本。',
    },
    match: {
      label: '同一个版本',
      headline: '三个条件，都要符合同一版本。',
      body: '挑选视觉小说就像查看路线图：每增加一个条件，就排除一条不符合的分支。语言、平台和完整度必须同时记录在同一条发行信息中，才算找到符合项；不能把一个版本有中文、另一个版本支持电脑、第三个版本内容完整拼成一个答案。',
      queriesLabel: '三组条件，各自的结果',
      /** A match: the release's name, then its translator and source. */
      answer: '{name}。译者：{translator}，依据{source}。',
      none: '没有符合条件的版本。只有标题是中文的手机版不算。',
      caption: '示例数据：一部视觉小说的六个发行版本。',
    },
    statement: { text: '名称翻译成中文，', more: '不代表游戏支持中文。' },
    parts: {
      label: '模块',
      headline: '同一套模块，在视觉小说中各有分工。',
      body: '每类内容都由同一套模块组成，视觉小说使用其中八个。',
      notes: {
        identity: '一部作品对应一个身份，原版、移植版、译本和补丁都关联在它下面。',
        editions: '每个发行版本分别记录语言、平台、地区和内容完整度。',
        names: '日文原名、中文译名、拼音和别名并存，并分别注明语言。',
        credits: '剧本、原画、音乐、配音和翻译的署名都会关联到个人页面。',
        relations: '续作、外传、移植版和改编作品都能关联到小说、动画和漫画。',
        facets: '按语言、平台、地区和完整度筛选，四个条件都要符合同一条发行记录。',
        progress: '按路线记录阅读进度，并决定页面隐藏多少内容。',
        wiki: '角色、地点和事件来自同一份图谱，内容会停在你读到的路线。',
      } as Partial<Record<PartId, string>>,
    },
    pagesIndex: {
      label: '本网站',
      headline: '六个页面，每页讲一件事。',
      rows: {
        releases: '按版本比较语言、平台、地区和完整度。',
        translations: '谁翻译、依据哪个版本、翻译到哪里。',
        characters: '角色和配音演员各有独立身份。',
        spoilers: '标签可以筛选，结局会等你读到再显示。',
        wiki: '根据脚本整理作品 Wiki。',
        zones: '中文站和日文站共用身份。',
      } as Record<string, string>,
    },
    neighbours: {
      label: '相关类型',
      headline: '改编作品与原作之间，有明确的关联。',
      body: '视觉小说与小说、动画、漫画和游戏共用同一份目录。例如《魔法禁书目录》：原作是轻小说，有漫画和动画，也有一部改编的视觉小说。在 REZICS 中，这部视觉小说是独立作品，通过“改编自”关联回原作，评分和进度分别记录。',
      items: [
        { kind: 'books', label: '同一故事的小说，收录在同一个书库中。' },
        { kind: 'anime', label: '改编动画关联回原作，配音演员身份相同。' },
        { kind: 'manga', label: '漫画与原作互相关联，进度分别记录。' },
        { kind: 'games', label: '平台、发行和上架信息与游戏共用同一套方式。' },
      ] as { kind: 'books' | 'anime' | 'manga' | 'games'; label: string }[],
    },
  },

  releases: {
    hero: {
      headline: '每个版本占一行，条件都写在这一行。',
      lede: '同一部视觉小说可能有原版、移植版、官方译本、爱好者补丁和试玩版。REZICS 会分别记录每个版本，并注明收录的语言、支持的平台、发行地区和内容完整度。',
    },
    matrix: {
      label: '筛选',
      headline: '筛选结果以同一个版本为准。',
      body: '选择简体中文、电脑和完整后，列出的版本必须同时符合这三项；只要有一项不符合，就会在该版本旁注明是哪一项。',
      filtersLabel: '筛选条件',
      any: '不限',
      count: '符合：{n} 个版本，共 {total} 个',
      note: '遇到不支持的条件组合时，会直接说明原因，不会只显示空白结果。',
      caption: '示例数据：按当前条件筛选一部视觉小说的六个发行版本。',
    },
    languages: {
      text: '名称使用的语言，',
      more: '与内容使用的语言分别记录。',
      body: '每条发行信息需要记录两种语言：包装和标题使用的语言，以及游戏文本实际使用的语言。只翻译标题的版本，不会出现在简体中文筛选结果中；中日双语版本会列出两种语言。',
    },
    coverage: {
      label: '完整度',
      headline: '发行信息会注明完整、部分或试玩。',
      body: '范围不明确的版本会标记为未记录，不会被视为完整。',
      items: [
        { title: '完整', body: '这个版本收录整部作品，包含每条路线。' },
        { title: '部分', body: '注明涵盖的内容，例如共通线和其中两条路线。' },
        { title: '试玩', body: '试玩版会单独记录，并标明仅供试玩。试玩版的体验评价也与正式版分开。' },
      ] as Item[],
    },
    status: {
      label: '状态',
      headline: '同一个版本可以在多个渠道购买。',
      body: '同一版本在多家商店上架，仍然是一条发行记录，下面会列出每个获取渠道。宣布、预定日期、延期和正式上市也会分别记录，不会混成一句“已发售”。',
      items: [
        { title: '官方', body: '经权利人认可的发行版本。' },
        { title: '非官方', body: '未经权利人认可的发行会单独记录，不会并入官方版本。' },
        { title: '已撤回', body: '发布后撤下的版本，记录仍会保留。' },
        { title: '已取消', body: '曾宣布但未推出的版本会标记为已取消，不算已发行。' },
      ] as Item[],
    },
    follow: {
      label: '关注',
      headline: '推出你看得懂的语言版本时，就通知你。',
      body: '关注一部作品后，以你的语言推出的新版本会发送到收件箱。想重点关注某个版本，也可以单独关注它的动态。',
    },
    finale: '每份翻译的来源，都能一路查到。',
  },

  translations: {
    hero: {
      headline: '每份翻译都会注明依据的版本。',
      lede: '中文译本和日文原版属于同一部作品，评分、角色和 Wiki+ 都关联在一起。翻译本身会单独记录：译者是谁、依据哪个版本、翻译到哪里，REZICS 都会逐项注明。',
    },
    lineage: {
      label: '来源',
      headline: '爱好者翻译和官方译本，分别标明。',
      body: '爱好者翻译会单独记录，并关联到依据的原版，不会标记为官方。官方译本也有独立记录，两者并列呈现，读者一目了然。',
    },
    record: {
      label: '翻译记录',
      headline: '译者、依据和范围，逐项注明。',
      items: [
        { title: '译者', body: '翻译团队和每位译者都有自己的身份页面。同一个人翻译过哪些作品，都能在他的页面查看。' },
        { title: '依据', body: '翻译会关联到具体依据版本，例如原版 1.02，而不是笼统地写“原作”。来源尚未确认时会标记为未确认，不会随意填写。' },
        { title: '范围', body: '共通线、具体路线和是否包含附录，都会在发行信息中注明。开始游玩前就能知道，是否会在中途切换回日文。' },
        { title: '更新', body: '补丁推出新版本时，会新增一条发行记录。旧版本会保留当时的范围，方便确认游玩的是哪个版本。' },
      ] as Item[],
    },
    reviews: {
      text: '翻译质量，',
      more: '单独评价。',
      body: '评价可以指定对象：故事、翻译或制作。剧本动人、翻译生硬，可以分别评分。查看评分时，也可以只看中文玩家的评价。',
    },
    several: {
      label: '多个译本',
      headline: '同一部作品，可以有多个译本。',
      body: '不同团队可以分别翻译同一部作品，各自署名和维护，记录互不覆盖。读者可以自行选择，社区也可以推荐其中一个译本。',
    },
    teams: {
      label: '面向翻译团队',
      headline: '补丁的每个版本都有自己的页面。',
      items: [
        { title: '团队页面', body: '团队和成员各有独立身份，翻译过的作品和每条发行记录都会列在一起。' },
        { title: '发行页面', body: '补丁的每个版本都有自己的页面和讨论串，玩家反馈会集中在同一处。' },
        { title: '关注', body: '玩家可以关注你的团队，新补丁发布时会收到通知。' },
        { title: '更正', body: '发行信息有误时，可以直接提出更正，审核通过后才会生效。' },
      ] as Item[],
    },
    finale: '角色和配音演员，各自只有一个身份。',
  },

  characters: {
    hero: {
      headline: '同一个角色，在不同作品中身份不变。',
      lede: '在续作、移植版、动画改编或翻译版中，同一个角色始终只有一个身份。不同作品中的年龄、外表和称呼会作为注明适用范围的资料记录，无需拆分成多个角色。',
    },
    variants: {
      label: '变体',
      headline: '另一个人格，另一条世界线。',
      body: '只有确实需要区分时才会拆分。同一人物的另一个人格，或另一条世界线上的版本，会作为各自的变体关联回同一个主角色。这条关联也会记录它在剧情中的揭示位置，尚未读到的人不会看到。',
      items: [
        { title: '角色 A', body: '主角色。续作、移植版和改编作品中的 A，都属于这个身份。' },
        { title: 'A 的另一个人格', body: '人格变体，关联回角色 A。' },
        { title: '另一条世界线中的 A', body: '对应变体，关联回角色 A。' },
      ] as Item[],
      caption: '示例数据。变体只会关联到一个主角色，主角色本身不是变体。',
    },
    names: {
      label: '名称',
      headline: '名称也会标明是否包含剧透。',
      body: '一个角色可能有本名、译名、昵称和真名。每个名称都会注明语言、出现的作品和剧透程度。页面会按偏好显示常用名称或剧透较少的名称。',
      columns: { kind: '名称类型', language: '语言', where: '出现于', spoiler: '剧透' },
      rows: [
        { kind: '本名', language: '日文', where: '本作和续作', spoiler: '无剧透' },
        { kind: '中文譯名', language: '繁体中文', where: '官方中文版', spoiler: '无剧透' },
        { kind: '暱稱', language: '日文', where: '从共通线开始', spoiler: '无剧透' },
      ],
      hidden: { kind: '真名', spoiler: '读到路线二后半段才显示' },
      caption: '示例数据。每部作品中实际使用的名称，也会与对应的出场记录一并保留。',
    },
    credits: {
      label: '制作人员',
      headline: '配音署名会关联到角色。',
      body: [
        '制作人员按职务分组：剧本、原画、音乐、配音和翻译。配音署名会同时指向配音演员和角色，也能注明适用版本，例如移植版更换了配音演员。',
        '创作过视觉小说剧本和轻小说的作者，所有作品都会列在同一个人的页面中。',
      ],
    },
    query: {
      label: '搜索',
      headline: '筛选条件必须对应同一个角色。',
      body: '搜索“红发女主角”，会找到有红发女主角的作品。如果一部作品中红发的是配角，女主角是黑发，就不会出现在结果中。',
      items: [
        { title: '作品一：符合', body: '女主角是红发。两个条件对应同一个角色。' },
        { title: '作品二：不符合', body: '红发的是配角，女主角是黑发。两个条件分属不同角色，不符合。' },
      ] as Item[],
      caption: '示例数据。主角、主要角色和配角是不同概念：反派可以是主要角色，但不一定是主角。',
    },
    finale: '标签可以筛选，剧情留给你自己阅读。',
  },

  spoilers: {
    hero: {
      headline: '还没读到的路线，先不告诉你。',
      lede: '视觉小说的关键剧情常出现在后续路线。REZICS 会按你的阅读进度决定显示内容：标签、角色资料和 Wiki+ 页面都会停在你目前的位置。',
    },
    fold: {
      label: '折叠的内容',
      headline: '后续内容，先折叠起来。',
      body: '已读内容会展开，尚未读到的部分会折叠起来，连名称也不会提前显示。等你读到那里，它才会展开。',
    },
    route: {
      label: '进度',
      headline: '读到哪里，页面就显示到哪里。',
      here: '你读到这里',
      nodes: [
        { name: '序章', fact: '' },
        { name: '共通线', fact: '角色 A 登场' },
        { name: '选项', fact: '' },
        { name: '路线一', fact: 'A 和 B 是儿时玩伴' },
        { name: '路线一结局', fact: '' },
        { name: '路线二', fact: 'A 的真名' },
        { name: '真结局', fact: 'A 的另一个人格' },
      ],
      /** Index of the reader's position in `nodes`. */
      at: 3,
      caption: '示例数据。',
      rules: [
        { title: '访客', body: '未登录访客会从第一个剧情揭示之前开始查看。' },
        { title: '登录后', body: '默认停在你读到的最远位置；标记为已读完的作品会显示全部内容。' },
        { title: '自行选择', body: '任何人都可以自行选择一个位置，或选择显示全部。' },
        { title: '不同路线', body: '进度只在同一条故事线中比较。其他路线的内容会分别隐藏，页面的其他部分照常显示。' },
      ] as Item[],
    },
    votes: {
      label: '两项判断',
      headline: '是否符合、是否剧透，分别判断。',
      body: '标签关联到作品后，社区会分别判断两件事：标签是否符合，以及是否会透露剧情。即使标签很贴切但包含剧透，也会隐藏到你读到相应内容为止。',
      columns: { tag: '标签', fit: '符合', spoiler: '剧透' },
      rows: [
        { tag: '校园', fit: '多数同意', spoiler: '不会' },
        { tag: '多重结局', fit: '多数同意', spoiler: '不会' },
      ],
      hidden: { fit: '多数同意', spoiler: '会，读到路线二时才显示' },
      caption: '示例数据。',
    },
    filters: {
      label: '筛选',
      headline: '标签可以包含，也可以排除。',
      body: [
        '筛选时，每个标签都可以设置为包含或排除；同一类别中的多个标签，可以要求全部符合或任意一个符合。点击标签即可打开它的页面，查看说明、上下级标签和使用该标签的作品。',
        '可以关注喜欢的标签，并将其固定为首页的一个标签页。',
      ],
    },
    apart: {
      text: '剧透、分级和遮罩，',
      more: '分别处理。',
      body: '剧透投票不会改变内容分级，内容分级也不会决定什么算剧透。被遮住的图片或防剧透段落需要你自行打开；打开只影响你本次浏览，不算作投票。内容分级包括普遍级、R15、R18 和 R18G，分别设置；尚未评估的内容会标记为“未评估”，不会被视为普遍级。',
    },
    readings: {
      label: '社区解读',
      headline: '同一个标签，各社区可以有自己的解释。',
      body: '每个社区都可以采用自己的定义，决定接受哪些标签。某个社区对词语含义作出更严格的限定，不会改变其他社区的用法，也不会删除原有标签。',
    },
    finale: '根据脚本整理，并经过人工审核的 Wiki。',
  },

  wiki: {
    hero: {
      headline: '从脚本整理内容，经过人工审核后发布。',
      lede: '视觉小说的剧情都写在脚本中。持有脚本的人，例如作品创作者，可以使用 REZICS 的开源工具包和自己的 AI 代理整理角色与事件，并提交审核提案。审核通过后，内容就会成为作品的 Wiki+。',
    },
    steps: {
      label: '五个步骤',
      headline: '从脚本到读者，共分五步。',
      items: [
        { title: '读取', body: '工具包会读取受支持的视觉小说文本脚本，不会执行脚本中的程序代码。' },
        { title: '整理', body: '你选择的代理会逐段整理角色、别名、关系、事件和地点，每项都附上位置和一小段引文。' },
        { title: '比对', body: '工具包通过 REZICS API 查找已有角色和地点，并将每项标记为已匹配、新增、不确定或无法获取。' },
        { title: '审核', body: '提案由人工审核。认定两条记录指向同一个角色，也需要提交提案，不会被悄悄合并。' },
        { title: '发布', body: '审核通过的内容会发布到作品的 Wiki+。脚本更新时只提交差异，已接受的内容不会被悄悄删除。' },
      ] as Item[],
    },
    locator: {
      label: '位置',
      headline: '每条信息都能追溯到一句台词。',
      body: '位置由三项信息组成：脚本哈希值、标签和台词顺序。路线条件会注明这句台词属于哪条路线。持有相同版本的审核者可以在自己的电脑上核对原文。',
      fields: [
        { label: '脚本哈希（前缀）', value: 'sha256 9f2c04b7', code: true },
        { label: '标签', value: 'route_two_day3', code: true },
        { label: '台词', value: '第 142 句', code: false },
        { label: '路线', value: '路线二', code: false },
      ],
      caption: '示例数据。版本不同时，需要先明确对应关系，不会自动应用到另一个版本。',
    },
    local: {
      text: '用于读取全文的模型，',
      more: '由你自己选择。',
      body: [
        'REZICS 不会收到完整脚本，只会收到整理后的资料和短引文。脚本由你选择的模型读取；开启严格模式后，推理只在你自己的设备上进行。',
        '工具包以 Apache-2.0 协议开源，无需 REZICS 账号，不会回传使用数据，也不会自行联网获取内容。它不会破解任何保护：加密或受保护的文件无法读取。',
        '引文长度有限制，由平台统一管理，并跨账号、译本和站点合并计算。',
      ],
    },
    zone: {
      label: '站点',
      headline: 'Wiki+ 是作品的一个站点。',
      body: [
        '角色、地点、时间线、章节导航和人物关系都有自己的页面。信息框和列表读取同一份图谱：在一个 Wiki 中修正一条记录，筛选、列表和其他站点也会同步更新。读者看到的内容会停在自己读到的路线。',
        '作品页面仍然是入口，评分、评论、阅读进度和 Wiki+ 摘要都放在一起。每个社区自行决定是否允许代理起草、是否可以使用生成文本；默认只收录事实和结构。',
      ],
    },
    finale: '中文社区和日文社区，各有自己的站点。',
  },

  zones: {
    hero: {
      headline: '两种语言的站点，共用同一批身份。',
      lede: '中文社区可以搭建视觉小说站点，日文社区也可以。两个站点分别决定作品名称、介绍、排序和采纳哪些说法，底层作品、角色和制作人员身份则相同。',
    },
    mirror: {
      label: '两个站点',
      headline: '共用资料修正一处，两边同时更新。',
      body: '名称、介绍和排序由各站点自行决定；作品、角色和制作人员身份则由两个站点共用。',
      columns: { field: '', zh: '中文站', ja: '日文站' },
      rows: [
        { field: '名稱', zh: '中文名称（示例）', ja: '日文名称（示例）' },
        { field: '介紹', zh: '由中文社区撰写', ja: '由日文社区撰写' },
        { field: '排序', zh: '按中文版发布日期', ja: '按日文版发布日期' },
      ],
      /** The row both sites share, set across both columns. */
      shared: { field: '身分', value: '两个站点共用同一个作品身份' },
      caption: '示例数据。',
    },
    zone: {
      label: 'Zone',
      headline: '一个 Zone，就是一个完整的站点。',
      items: [
        { title: '页面和网址', body: '首页、作品页、角色页和发行列表的页面地址和版式由站点自行决定。' },
        { title: '导航', body: '可以设置自己的导航栏和自定义页面，例如新手指南。' },
        { title: '外观', body: '品牌和版式由站点自行设置；身份、搜索、语言、出处和无障碍体验保持一致，读者到哪个站点都能识别。' },
        { title: '版本', body: '可以先预览和验证整个站点的修改，出错时可以恢复，也可以导出整个站点。' },
        { title: 'API', body: '个人和 AI 代理通过同一套 API 管理站点。' },
      ] as Item[],
    },
    space: {
      label: '空间',
      headline: '站点是门面，社区是交流的地方。',
      items: [
        { title: '站点', body: 'Zone 是网站门面，有自己的页面和导航，也可以设为私有。' },
        { title: '社区', body: '社区设有讨论、规则和成员，也会决定采纳哪些说法。' },
        { title: '两者并存', body: '同一个空间可以同时拥有站点和社区，也可以只拥有其中一个。' },
        { title: '关注一次', body: '关注这个空间一次，就能收到两边的动态。' },
      ] as Item[],
    },
    community: {
      label: '社区',
      headline: '讨论、评分和列表，都关联到作品。',
      items: [
        { title: '讨论', body: '每部作品和每个版本都可以发起讨论串，阅读讨论不需要先加入社区。' },
        { title: '评分', body: '评分会注明评分者：所有用户、某个社区，或只有你自己。' },
        { title: '列表', body: '可以整理入门推荐和游玩顺序，写下理由、调整顺序并导出。' },
        { title: '书库', body: '在中文站点标记为已通关后，在日文站点也同样有效，书库和列表会随你同步。' },
      ] as Item[],
    },
    script: {
      text: '简体',
      more: '就是简体。',
      body: '名称和介绍会分别注明语言。没有简体中文时，自动转换只是一种明确标注的替代文本，不算经过审核的翻译，也不会更改人名和作品名。',
    },
    creators: {
      label: '创作者',
      headline: '视觉小说创作者，也可以在这里发行作品。',
      body: '与 REZICS 签约的创作者可以发行符合销售规范的视觉小说：提供不含 DRM 的文件、试玩版和一次性购买，更新和重新下载按购买条款提供。作品页面、社区和 Wiki+ 都关联到同一个身份。',
    },
    finale: 'MCP 服务器也有自己的索引。',
  },
};

export type VnStrings = typeof strings;

export default {
  id: 'visual-novels',
  base: '/visual-novels/',
  name: '视觉小说',
  theme: { kind: 'visual-novels' },
  next: 'mcp',
  pages: [
    {
      slug: '',
      label: '总览',
      meta: meta(
        '视觉小说：逐个版本说明清楚',
        '按语言、平台、地区和完整度挑选视觉小说，爱好者翻译会注明译者和依据版本。角色、制作人员、路线进度和 Wiki+ 都关联到同一部作品。',
      ),
    },
    {
      slug: 'releases',
      label: '发行版本',
      meta: meta(
        '发行版本：条件对应同一版本',
        '视觉小说的每个发行版本都会单独记录：语言、平台、地区，以及内容是完整、部分还是试玩。筛选条件必须同时符合一个版本，只翻译标题的版本不算中文版。',
      ),
    },
    {
      slug: 'translations',
      label: '翻译与译者',
      meta: meta(
        '翻译与译者：注明出处',
        '每份视觉小说翻译都会注明译者、依据的具体版本和涵盖范围。爱好者翻译不会标记为官方，补丁更新会单独记录，翻译也可以与故事分开评价。',
      ),
    },
    {
      slug: 'characters',
      label: '角色与制作',
      meta: meta(
        '角色与制作人员：每人一个身份',
        '同一个角色在续作、移植版和改编作品中只有一个身份，名称会按语言和剧透程度选择显示。剧本、原画、音乐和配音署名都会关联到个人页面。',
      ),
    },
    {
      slug: 'spoilers',
      label: '分类与剧透',
      meta: meta(
        '分类与剧透：显示到你的进度',
        '标签可以包含或排除，社区会分别判断标签是否符合、是否包含剧透。角色资料和 Wiki+ 只显示到你读到的路线；是否显示全部由你决定。',
      ),
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: meta(
        'Wiki+：根据脚本整理的维基',
        '脚本持有人可以在自己的电脑上使用开源工具包和自己的 AI 代理整理角色、地点和事件，并为每项附上台词位置。REZICS 不会收到全文，内容经过人工审核后才发布。',
      ),
    },
    {
      slug: 'zones',
      label: '社区与站点',
      meta: meta(
        '社区与站点：一份资料，两个站点',
        '中文社区和日文社区可以分别搭建完整的视觉小说站点，自行决定名称、介绍、排序和采纳的说法，同时共用作品、角色和制作人员身份。',
      ),
    },
  ],
  strings,
} satisfies MiniSite<VnStrings>;
