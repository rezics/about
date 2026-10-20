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
      label: '概要',
      meta: {
        title: 'Skill Hub：AIエージェント向けスキルカタログ',
        description:
          'Skill Hub には AIエージェント向けのスキルが登録されています。全文、ファイル、バージョン、日付付きの互換性記録を確認できます。評価とディスカッションはバージョンに紐づき、利用前に内容を把握できます。',
      },
    },
    {
      slug: 'directory',
      label: 'カタログ',
      meta: {
        title: 'Skill Hub カタログ：一行に一つのスキル',
        description:
          'Skill Hub では説明文からスキルを検索できます。登録された属性で絞り込み、結果を最後まで閲覧できます。他の人が作ったリストや保存した検索条件をフォローすると、条件に合う新しいスキルが登録されたときに通知されます。',
      },
    },
    {
      slug: 'versions',
      label: 'バージョンとファイル',
      meta: {
        title: 'スキルページ：全文、ファイル、バージョン',
        description:
          'スキルページには SKILL.md の全文を掲載し、各ファイルの役割とハッシュ値を記載します。実行可能なファイルには印を付けます。各バージョンの内容、ライセンス、出典を固定し、新しいバージョンが古いものを上書きすることはありません。',
      },
    },
    {
      slug: 'evidence',
      label: '記録と評価',
      meta: {
        title: 'スキルの互換性記録と評価',
        description:
          'スキル作者が記載した互換条件は申告として扱います。Skill Hub では、誰がどの AIエージェント、バージョン、言語で、いつ利用したかも記録します。評価とディスカッションはそれぞれのバージョンに紐づきます。',
      },
    },
    {
      slug: 'use',
      label: 'AIエージェントで使う',
      meta: {
        title: 'スキルを AIエージェントに渡す',
        description:
          'Skill Hub でスキルを見つけたら、全文とファイルを読み、互換性記録を確認します。使うバージョンを選んでダウンロードまたはコピーし、必要なパッケージのバージョンを固定してから更新をフォローします。AIエージェントも API と MCP を通じて同じ情報を読み取れます。',
      },
    },
    {
      slug: 'publish',
      label: 'スキルを公開',
      meta: {
        title: 'Skill Hub でスキルを公開',
        description:
          '形式に合ったスキルのフォルダーを Skill Hub にインポートします。すべてのバイトをそのまま保存し、スクリプトは実行せず、解釈できないフィールドも保持します。公開のたびにファイル、ライセンス、出典を固定し、新しいバージョンとして登録します。',
      },
    },
  ],
  strings: {
    ui: {
      nextPage: '次のページ',
      nextSite: '次のサイト',
    },
    landing: {
      hero: {
        eyebrow: 'Skill Hub',
        headline: ['AIエージェントに渡す前に、', '一つずつ確認。'],
        lede: 'Skill Hub で AIエージェント向けのスキルを確認できます。説明全文、ファイル、バージョン、日付付きの利用記録を見てから選べます。',
        pic: {
          src: 'fold',
          alt: 'ライムグリーンの紙を半分に折って開き、その下にアイボリー、薄緑、薄青の紙を少しずつずらして重ねています。',
        },
      },
      layers: {
        eyebrow: '読む順序',
        headline: ['スキルを3段階で読む。', 'AIエージェントと同じ順番で。'],
        lead: '章ごとの登場人物を整理するスキルを例に説明します。まず名前と説明を読み、次に全文を確認し、最後にタスクで使うファイルを読みます。Skill Hub もこの順番で表示します。',
        rows: [
          {
            title: '1行',
            body: 'chapter-cast の説明には「章に登場する人物を段落位置付きで一覧にする」とあります。エージェントは最初にこの一文を読み、タスクに合うか判断します。',
          },
          {
            title: '1ページ',
            body: 'SKILL.md には「人物と別名を先に一覧にし、原文の位置を添える。出典がなければ未発見と記す」とあります。人物を整理する必要があるとき、エージェントは手順と制約を読みます。',
          },
          {
            title: '利用するファイル',
            body: 'references/aliases.md には「人物、別名、原文の位置」の対応形式が記載されています。別名の照合が必要なタスクでは、エージェントがこの参考ファイルを読みます。他のファイルも横に一覧表示します。',
          },
        ],
      },
      files: {
        eyebrow: 'ファイル',
        headline: ['すべてのファイルを一覧に。', '実行可能なものは明記。'],
        body: 'SKILL.md、scripts/、references/、assets/、仕様で名前が定められていないファイルも、パス、役割、ハッシュ値を記録します。SKILL.md に記載があり、フォルダー内にないファイルも表示します。',
        link: 'バージョンとファイルを見る',
        pic: {
          src: 'folder',
          alt: 'ライムグリーンの紙をフォルダーの形に折り、表紙を開いています。中にはアイボリー、薄緑、薄青、マスタード色の紙が重なり、それぞれの端が見えています。',
        },
      },
      statement: {
        text: '登録は推奨を意味しません。',
        muted:
          '全文とファイルを読んでから判断してください。REZICS はスキルをインポートする際、保存するだけで指示を実行しません。',
      },
      pages: {
        eyebrow: 'Skill Hub',
        headline: ['スキルを見つけるところから、', '自分のスキルを公開するまで。'],
        tiles: [
          { slug: 'directory', line: '説明文からスキルを検索' },
          { slug: 'versions', line: '全文、各ファイル、各バージョン' },
          { slug: 'evidence', line: '利用者と利用条件を確認' },
          { slug: 'use', line: 'バージョンを選び、AIエージェントに渡す' },
          { slug: 'publish', line: 'フォルダーから一つのプロフィールへ' },
        ],
      },
      neighbours: {
        eyebrow: '関連ページ',
        headline: ['スキルは文章とファイル。', '利用するものには、それぞれのページがあります。'],
        lead: 'スキルが指定するパッケージにはソフトウェアとしてのバージョンがあります。同じ作者によるスキルと MCP サーバーは、一つのプロフィールにつながります。REZICS のローカル Wiki ツールキットには、書籍やビジュアルノベルから出典付きの情報を提案するスキルも含まれています。',
        tiles: [
          { to: 'software', line: 'スキルが必要とするパッケージ' },
          { to: 'mcp', line: 'エージェントが接続するツール' },
          { to: 'books', line: '章ごとに出典付きの情報を提案' },
          { to: 'visual-novels', line: 'ゲームのスクリプトから出典を検索' },
        ],
      },
      closing: {
        title: '1行の説明から検索。',
        body: 'REZICS でスキルを検索し、全文、ファイル、記録を確認してから AIエージェントに渡せます。',
      },
    },
    directory: {
      head: {
        headline: ['1行に1つのスキル。', '説明は1文。'],
        lede: 'カタログの各行には、スキル名と作者による説明文だけを表示します。AIエージェントはこの一文を読んでスキルを使うか判断します。ここでも、この一文から選べます。',
      },
      specimens: {
        eyebrow: 'カタログの例',
        headline: ['説明を一文読むだけで、', '用途がわかります。'],
        lead: '以下の名前と説明は例です。異なるタスクに対応する二つのスキルを、一文で区別できます。',
        rows: [
          { title: 'chapter-cast', body: '章の登場人物と別名を段落位置付きで整理し、人物一覧の確認に使います。' },
          { title: 'quote-check', body: '引用と原文を一つずつ照合し、出典の位置と出典が見つからない文を一覧にします。' },
        ],
      },
      filters: {
        eyebrow: '絞り込み',
        headline: ['条件を組み合わせて、', '必要なスキルを検索。'],
        lead: '利用可能な絞り込み条件を組み合わせられます。',
        rows: [
          { title: '検索', body: 'タスクを説明する言葉で検索します。たとえば「章の登場人物を整理」「引用を照合」など。' },
          { title: 'ライセンス', body: '特定のライセンスを採用するスキルに絞ります。' },
          { title: '言語', body: '説明文の言語、または記録されたタスクの言語で絞ります。' },
          { title: '互換性記録', body: '特定の AIエージェントとバージョンで利用記録があるスキルに絞ります。' },
          { title: '更新日', body: '最新の公開日で並べ替え、または絞り込みます。' },
        ],
      },
      statement: {
        text: '最後の項目まで閲覧できます。',
        muted: '件数が確定値か推定値かを明記し、結果を隠しません。',
      },
      lists: {
        eyebrow: 'リスト',
        headline: ['誰かが選んだ組み合わせ。'],
        body: 'ワークフローで使うものを順番に並べ、それぞれを選んだ理由を記載できます。スキルと一緒に MCP サーバー、API、ソフトウェアも追加できます。リスト全体をエクスポートできます。フォローすると、作成者が項目を追加したときに確認できます。',
        pic: {
          src: 'bundle',
          alt: '大小の異なる5枚の紙を、ライムグリーン、アイボリー、薄青、マスタード色で重ねています。中央をライムグリーンの紙帯で巻いています。',
        },
      },
      views: {
        eyebrow: '検索条件',
        headline: ['条件を保存して、', '新着をフォロー。'],
        lead: '絞り込み条件を検索ビューとして保存できます。ビューをフォローすると、条件に合う新しいスキルがフィードに表示されます。',
        rows: [
          { title: '検索', body: '条件を設定します。' },
          { title: '保存', body: '名前を付けて保存します。' },
          { title: 'フォロー', body: '新しい結果があると通知します。' },
        ],
      },
      end: {
        next: '見つけたスキルを開いてみましょう。',
        closing: '次の行に、必要なスキルがあるかもしれません。',
      },
    },
    versions: {
      head: {
        headline: ['スキルページを開くと、', '内容をすべて確認できます。'],
        lede: 'スキルページでは、SKILL.md の原文と関連ファイルをすべて確認できます。AIエージェントに渡す前に、エージェントが読む内容をすべて読めます。',
      },
      frontmatter: {
        eyebrow: 'SKILL.md',
        headline: ['冒頭の数行を、', 'REZICS はこう読みます。'],
        lead: 'スキルのフォルダーを例に説明します。',
        rows: [
          {
            key: 'name',
            value: 'chapter-cast',
            body: '名前には小文字、数字、ハイフンだけを使い、フォルダー名と一致させます。名前はスキルを識別するために使います。同じ名前だけで同一のスキルとは判断しません。',
          },
          {
            key: 'description',
            value: '章に登場する人物を段落位置付きで一覧にします。人物一覧を整理するときに使います。',
            body: 'この一文がカタログに表示され、AIエージェントが最初に読みます。',
          },
          {
            key: 'license',
            value: 'Apache-2.0',
            body: 'ライセンスは申告者と日時とともに、バージョンに記録します。これは申告であり、法的な審査ではありません。',
          },
          {
            key: 'compatibility',
            value: 'ローカルファイルを読み取れるエージェントが必要',
            body: '作者が記載した互換条件には「個別の検証が必要」と表示し、確認済みの情報として扱いません。',
          },
          {
            key: 'allowed-tools',
            value: 'read-file',
            body: '許可されたツールも申告として扱い、「個別の検証が必要」と表示します。',
          },
          { key: 'その他のフィールド', body: '仕様外のフィールドも破棄せず、原文を保持して別に表示します。' },
        ],
      },
      files: {
        eyebrow: 'ファイル',
        headline: ['ファイルごとに1行で表示。'],
        lead: '各ファイルのパス、役割、ハッシュ値を記録します。ダウンロードされるバイトは、ページに記録されたものと同じです。',
        rows: [
          { title: '説明ファイル', path: 'SKILL.md', body: '全文をそのまま表示し、一文字も変更しません。' },
          {
            title: 'スクリプト',
            path: 'scripts/',
            mark: '実行可能',
            body: '実行可能なファイルには印を付けます。REZICS はインポート時に保存するだけで、実行しません。',
          },
          { title: '参考資料', path: 'references/', body: 'AIエージェントが詳細を確認するときに読むファイルです。' },
          { title: '素材', path: 'assets/', body: 'テンプレート、画像、データファイルもパスとハッシュ値を記録します。' },
          { title: 'その他', body: '仕様で名前が定められていないフォルダーやファイルも一覧表示します。' },
          { title: '不足しているファイル', mark: '不足', body: 'SKILL.md に記載されていて、フォルダー内にないファイルを表示します。' },
        ],
      },
      history: {
        eyebrow: 'バージョン',
        headline: ['各バージョンを保存。'],
        body: [
          '公開後の変更はすべて次のバージョンになります。前のバージョンのファイルとハッシュ値はそのまま残り、使用中のバージョンが置き換わることはありません。',
          'バージョンは公開順に並び、日付と変更履歴を添えます。数が増えてもすべて確認できます。このスキルをフォローしている人にも、同じ記録が届きます。',
        ],
        pic: {
          src: 'fan',
          alt: '5枚の紙が一つの角から扇状に広がっています。手前はライムグリーンで、後ろに向かうほど薄くなり、最後の一枚はアイボリーです。',
        },
      },
      historyExample: {
        eyebrow: 'バージョンの例',
        headline: ['同じスキルに、', '日付付きの2つのバージョン。'],
        lead: 'chapter-cast を例に説明します。日付と内容は例です。ファイルとハッシュ値は各バージョンで固定し、新しいバージョンが前のものを上書きすることはありません。',
        rows: [
          { title: '1.1.0', body: '2026年10月19日。人物の別名を照合するルールを追加し、対応する参考ファイルを添付。' },
          { title: '1.0.0', body: '2026年10月12日。人物が初めて登場する位置を整理。元のファイルはそのままで、評価とコメントはこのバージョンに紐づきます。' },
        ],
      },
      packages: {
        eyebrow: 'パッケージ',
        headline: ['必要なパッケージを作者の記載どおりに。', '不明点も明記。'],
        rows: [
          {
            title: 'エコシステムごとに記録',
            body: '各パッケージを所属するエコシステムに記録します。異なるエコシステムにある同名のパッケージを、同一のものとして扱いません。',
          },
          { title: '必須と任意', body: '各項目が必須か任意かを明記します。' },
          { title: '不足と非対応', body: '申告がない場合や、対応範囲外のエコシステムを使っている場合は、不足または非対応と表示します。' },
        ],
      },
      statement: {
        text: 'すべてのスキルに、作者名を。',
        muted:
          '作者とメンテナーを役割ごとに記載し、他の作品やレビューにもつなげます。',
      },
      end: {
        next: '内容を読んでから、使った人を確認できます。',
        closing: 'スキルを読んでから、AIエージェントに渡す。',
      },
    },
    evidence: {
      head: {
        headline: ['申告と記録は、', '別々に扱います。'],
        lede: '作者はスキルが使える環境を文章で申告できます。特定の AIエージェントでタスクを実際に実行した人が、日付と方法を残したものが利用記録です。Skill Hub では両者を分けて掲載します。',
      },
      declaration: {
        eyebrow: '申告',
        headline: ['作者が記載するのは、', '互換条件の説明です。'],
        lead: '作者が SKILL.md に記載した互換条件と許可ツールは原文のまま記録し、個別の検証が必要と表示します。確認済みの情報としては扱いません。',
        code: '# SKILL.md の冒頭（例）\ncompatibility: スキルフォルダーに対応する AIエージェント向け',
        codeLabel: 'サンプルスキルの SKILL.md 冒頭に記載された互換条件',
        caption: 'この行を原文のまま記録し、「個別の検証が必要」と表示します。',
      },
      record: {
        eyebrow: '利用記録の例',
        headline: ['一つのバージョンに、', '8項目を記録。'],
        lead: 'chapter-cast 1.1.0 の利用記録の例です。日付、AIエージェントのバージョン、方法、結果はすべて例で、一つの記録の読み方を示しています。',
        rows: [
          { title: 'タスク', body: '章の一部から人物、別名、原文の位置を一覧にし、人物表の確認に使います。' },
          { title: 'AIエージェント', body: 'スキルフォルダーを読み取れるローカルエージェントで、追加ツールは有効にしていません。' },
          { title: 'エージェントのバージョン', body: 'サンプルクライアント1.0.0。観察時に使ったバージョンを記録します。' },
          { title: 'スキルのバージョン', body: 'chapter-cast 1.1.0。別名の照合を追加した例のバージョンです。' },
          { title: '言語', body: '入力と出力は繁体字中国語です。別名は原文の表記を使います。' },
          { title: '日付', body: '2026年10月19日。バージョンページにある1.1.0の例と同じ日付です。' },
          { title: '方法', body: '3人の人物と2組の別名を含む短い文章を入力し、出力と原文の位置を一つずつ照合します。' },
          { title: '結果', body: '例では3人の人物、2組の別名、対応する位置が表示されます。他の文章やエージェントにも当てはまるとは判断しません。' },
        ],
      },
      rules: {
        eyebrow: '読み方',
        headline: ['記録を読むときのポイント'],
        rows: [
          { title: '記録がないことは、非対応を意味しない', body: '利用記録がない組み合わせは「記録なし」と表示し、非対応とは記しません。' },
          {
            title: '以前の記録には日付を表示',
            body: '各記録に日付と対象のバージョンを表示します。AIエージェントやスキルが更新された後も、以前の記録を新しいバージョンの結果として扱いません。',
          },
          { title: '異なる結果も両方残す', body: '二つの記録で結論が異なる場合は、方法とともに両方残し、自分で比較できます。' },
          {
            title: 'エージェントも記録を提出可能',
            body: 'エージェントも記録を提出できます。エージェントであること、運営者、使用した方法を明記し、人が確認してから公開します。',
          },
          { title: '撤回はその出典の記録だけに適用', body: '出典が撤回された場合、その出典による裏付けだけを撤回します。履歴は残り、他の出典の記録には影響しません。' },
        ],
      },
      opinions: {
        eyebrow: '評価とディスカッション',
        headline: ['評価もコメントも、', '対象のバージョンに紐づきます。'],
        rows: [
          {
            title: '評価',
            body: '評価は対象のバージョンに紐づきます。新しいバージョンには別の評価があり、複数バージョンをまとめた評価は別に算出し、方法を明記します。評価数と分布を表示し、件数が少ない場合は平均を算出しません。',
          },
          {
            title: 'コメント',
            body: '問題を報告したり使い方を共有したりするとき、コメントにはその時点のバージョンを記録します。スキルの更新後も、以前のコメントは元のバージョンに紐づき、新しいバージョンの説明と誤解されません。',
          },
        ],
      },
      statement: {
        text: '利用記録は安全性を保証しません。',
        muted:
          '各記録には環境とバージョンが記載されています。利用する前に説明とスクリプトを確認してください。',
      },
      end: {
        next: '記録を確認したら、使ってみましょう。',
        closing: '記録を読んでから判断。',
      },
    },
    use: {
      head: {
        headline: ['読んでから、', 'AIエージェントに渡す。'],
        lede: 'スキルはエージェントへの指示で、実行可能なスクリプトを含む場合もあります。Skill Hub で内容を読み、利用を決めたら特定のバージョンを取得できます。',
      },
      steps: {
        eyebrow: '6つの手順',
        headline: ['検索から利用まで、', '6つの手順。'],
        rows: [
          { title: '検索', body: 'カタログを説明文で検索するか、他の人が作ったリストから選びます。' },
          { title: '全文を読む', body: 'スキルページを開き、SKILL.md の全文と、含まれるファイルや実行可能なファイルを確認します。' },
          { title: '利用記録を確認', body: '使用する AIエージェントとバージョンで、誰かが記録を残しているか、日付がいつかを確認します。' },
          {
            title: 'バージョンを選んで取得',
            body: 'バージョンを選び、フォルダーをダウンロードします。ファイルはページに記載されたハッシュ値と一致します。SKILL.md の説明だけをコピーすることもできます。エージェントの説明に従い、指定された場所に配置してください。',
          },
          {
            title: 'パッケージを固定',
            body: '対応するパッケージの条件に沿って、特定のバージョンとファイルを固定します。解析できない場合は理由を表示します。パッケージをインストールしても、そのスクリプトの実行が許可されるわけではありません。',
          },
          { title: 'フォロー', body: 'スキルをフォローします。新しいバージョンが公開されたら、変更内容を読んでから切り替えるか決められます。' },
        ],
      },
      agent: {
        eyebrow: 'API と MCP',
        headline: ['AIエージェントからも、', 'Skill Hub を利用できます。'],
        paragraphs: [
          'ウェブページの操作には、それぞれ API 操作があります。エージェントは REZICS の API または MCP サーバーを通じてスキルを検索し、全文とファイル一覧を読み取れます。ページで確認する内容と同じ情報を取得できます。',
          'REZICS の API と MCP では、スキルの文章をすべてデータとして扱います。どのような指示が書かれていても、それによって権限が付与されることはありません。',
        ],
        link: '開発者サイトで API と MCP を見る',
      },
      later: {
        eyebrow: '新しいバージョン',
        headline: ['新しいバージョンが出たら、', '変更を見てから判断。'],
        rows: [
          { title: '通知設定', body: 'フォローするときに「すべて」「おすすめのみ」「オフ」を選び、新しいバージョンの通知方法を決めます。' },
          { title: '変更内容を確認', body: '各バージョンに変更履歴を添え、使用中のバージョンとファイルやハッシュ値を比較できます。' },
          { title: '現在のバージョンを使い続ける', body: '切り替えたくない場合は、現在のバージョンをそのまま使えます。ページの内容が新しいバージョンに置き換わることはありません。' },
          { title: '問題を報告', body: '利用中に問題があれば、スキルのディスカッションで使用したバージョンと AIエージェントを記載して報告します。' },
          {
            title: '通報',
            body: '説明にない動作をするスキルは、アカウントなしで通報できます。マルウェアの配布は REZICS の利用規約に違反します。',
          },
        ],
      },
      end: {
        next: '換你寫一個。',
        closing: 'バージョンを選んで、AIエージェントに渡す。',
      },
    },
    publish: {
      head: {
        headline: ['一つのフォルダーから、', '一つのプロフィールを公開。'],
        lede: 'Skill Hub に登録できるのは、形式に沿ったスキルです。フォルダーには SKILL.md が必要です。インポートすると、独自のプロフィール、ページ、最初のバージョンが作成されます。',
      },
      import: {
        eyebrow: 'インポート',
        headline: ['インポートでは保存するだけ。', '実行しません。'],
        body: 'フォルダーをインポートすると、ファイルを一つも変更せず、プロフィールを持つスキルとして登録します。',
        pic: {
          src: 'slit',
          alt: 'ライムグリーンの紙の中央に切り込みを入れ、アイボリーの紙帯を上から通し、紙の下端から出しています。下にはマスタード色の紙が少し見えています。',
        },
      },
      steps: {
        eyebrow: '6つの処理',
        headline: ['インポートでは、', 'すべてのバイトをそのまま保存。'],
        rows: [
          { title: 'そのまま保存', body: '各ファイルのすべてのバイトを保存します。パスはフォルダー内に限られます。' },
          { title: '何も実行しない', body: 'スクリプトはファイルとして保存し、実行しません。SKILL.md の指示にも従いません。' },
          { title: '参照先を確認', body: 'SKILL.md に記載されたローカルファイルがフォルダー内にない場合、不足ファイルとして表示します。' },
          { title: '解釈できないフィールドを保持', body: '仕様外のフィールドはそのまま保持し、未解析として別に表示します。別の意味に書き換えません。' },
          {
            title: '形式に合わないものをスキルにしない',
            body: '名前とフォルダー名が一致しない場合や、説明がない場合はインポートを停止します。どのフォルダーでもスキルとして登録できるわけではありません。',
          },
          { title: 'バージョンを公開', body: '公開時に各ファイルのハッシュ値、ライセンス、出典を固定します。その後の変更は次のバージョンになります。' },
        ],
      },
      limits: {
        eyebrow: '上限',
        headline: ['インポートの上限'],
        rows: [
          { title: '128ファイル', body: '一度にインポートできるファイル数の上限。' },
          { title: '1 MiB', body: 'すべてのファイルを合わせたサイズの上限。' },
          { title: '64 KiB', body: 'SKILL.md のサイズ上限。' },
          { title: '64文字', body: '名前の長さの上限。小文字、数字、ハイフンのみ使用できます。' },
          { title: '1024文字', body: '説明の長さの上限。' },
        ],
        after: '上限を超えるフォルダーや形式に合わないフォルダーは、理由を表示してインポートを停止します。',
      },
      statement: {
        text: '説明文が最初に読まれる一文です。',
        muted:
          '何をするか、いつ使うかを明確にし、人にも AIエージェントにも伝わるようにします。',
        note: '同じスキル説明の書き方を比較した例です。',
        rows: [
          {
            title: '明確な説明',
            body: '章に登場する人物を段落位置付きで一覧にします。人物表の作成や、登場する章の確認に使います。',
          },
          { title: '説明が不十分', body: '小説を処理します。' },
        ],
      },
      credits: {
        eyebrow: '作者と権利',
        headline: ['作者、権利、共同作業'],
        rows: [
          { title: '作者とメンテナー', body: '役割ごとに名前を記載します。それぞれが自分の REZICS プロフィールを使い、他の人がフォローできます。' },
          { title: 'ライセンス', body: '申告したライセンスを、申告者と日時とともに各バージョンに記録します。' },
          { title: '権利はあなたに帰属', body: 'スキルをアップロードしても、既存の知的財産権が移転することはありません。' },
          {
            title: 'AIエージェントと共同でメンテナンス',
            body: 'エージェントも変更を提案できます。対象バージョン、変更内容、根拠、方法を記載し、エージェントであることを明示します。人が確認してから適用し、適用ごとに記録を残します。',
          },
          { title: '取り消し', body: '変更を誤って適用した場合は取り消せます。取り消しは訂正として記録し、元の履歴は書き換えません。' },
        ],
      },
      end: {
        next: 'スキルのほかに、APIもあります。',
        nextLine: '呼び出し方とバージョンを確認',
        closing: 'REZICS で、スキルに独自のプロフィールを。',
      },
    },
  },
} satisfies MiniSite<SkillsStrings>;

export default skills;
