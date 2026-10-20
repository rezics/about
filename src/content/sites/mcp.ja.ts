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
  next: { page: '次のページ', site: '次のサイト' },

  pictures: {
    hero: '数枚の黄土色の紙が、丸い穴に通した紙ひもでつながっています。淡い青と緑の紙も一緒につながっています。',
    records: '黄土色の紙の端にある丸い穴に、白紙の小さなタグが紙ひもでつながっています。ひとつの穴は空いています。',
    identity: '一枚の紙を4つに分けて少し離しています。黄土色が2枚、濃い青緑色と淡い青色が1枚ずつです。',
    versions: '同じ大きさの紙が5枚並び、色は濃い色から薄い色へ変わり、最後は白紙です。',
    zone: '黄土色の紙を小さな屏風の形に折り、横に小さな紙片を置いています。',
  },

  pageLines: {
    directory: '1台のサーバーに1つのプロフィール',
    evidence: '記録が示すこと、示さないこと',
    versions: 'バージョンごとに記録',
    community: '評価、ディスカッション、リスト、コミュニティのディレクトリ',
    maintainers: '登録、管理申請、宣言、返信',
  },

  landing: {
    hero: {
      label: 'MCPサーバーのインデックス',
      headline: 'どのサーバーが使えるか、日付付きの記録で確認できます。',
      lede: 'MCP Hubでは、MCPサーバーごとにプロフィールを設け、バージョンごとに記録します。日付、クライアントとそのバージョン、使用言語、実行結果を確認できます。',
    },
    record: {
      label: '1件の記録',
      headline: '使えると伝える前に、どの組み合わせかを示します。',
      body: 'サーバーのバージョン、クライアント、タスク、使用言語のどれかが欠けても、正確には判断できません。各記録にはこれらに加えて結果と日付を記します。どれかが変われば、改めて試す必要があります。',
      fields: [
        { title: 'サーバーのバージョン', body: 'バージョン番号まで記録し、新しいバージョンは別に記録します。' },
        { title: 'クライアント', body: 'クライアントの種類とバージョンを記録します。' },
        { title: 'タスク', body: 'サーバーに依頼した作業です。' },
        { title: '言語', body: '同じ作業でも、言語を変えると結果が異なることがあります。' },
        { title: '結果と日付', body: '成功したかどうかと、試した日付です。' },
      ],
      link: '記録の書き方',
    },
    statement: {
      text: '1件の記録が示すのは、この日、この組み合わせでの結果です。',
      sub: 'サーバーの安全性を証明するものでも、利用許可を与えるものでも、REZICSが推奨するものでもありません。',
    },
    pages: {
      label: 'このサイト',
      headline: 'サーバー探しからメンテナンスまで、各ページで一つのテーマを説明します。',
    },
    neighbours: {
      label: 'つながるインデックス',
      headline: 'サーバーの記録は単独ではありません。',
      body: '開発者、組み込まれたAPI、関連プロジェクトも同じインデックスにあり、どこからでもたどれます。',
      tiles: [
        { kind: 'software', line: 'プロジェクト、パッケージ、クライアントもソフトウェアの項目です' },
        { kind: 'apis', line: '組み込まれたAPIと相互にリンク' },
        { kind: 'skills', line: '同じメンテナーが作成したスキル' },
      ],
      developers: { name: '開発者', line: 'REZICSのMCPサーバー', href: '/developers/mcp-server/' },
    },
    closing: {
      title: '記録を確認してから、使うものを決められます。',
      body: 'サーバー、スキル、APIも、REZICSで本やゲームをフォローするときと同じアカウントで利用できます。',
    },
  },

  directory: {
    hero: {
      headline: '1台のサーバーに1つのプロフィール。',
      lede: '同じMCPサーバーが複数の情報源に掲載されていることがあります。審査を経て統合されると、REZICSでは1件にまとまり、名前、メンテナー、バージョン、記録、評価、ディスカッションが同じ項目につながります。',
    },
    records: {
      label: '4つの項目',
      headline: 'サーバーは4つの項目で構成されています。',
      body: 'プロジェクト、パッケージ、デプロイ先のエンドポイント、ツール一覧はそれぞれ異なるタイミングで変わるため、REZICSでは分けて記録します。',
      items: [
        { title: 'プロジェクト', body: '名前、説明、メンテナーを記録します。バージョンやエンドポイントが変わっても、同じプロジェクトです。他のプロジェクトから分岐した場合は別のプロジェクトとして登録し、関連付けます。' },
        { title: 'パッケージ', body: '各バージョンのパッケージについて、エコシステム、正式名称、バージョン番号を記録します。バージョンの順序は各エコシステムの規則に従います。' },
        { title: 'デプロイ先のエンドポイント', body: 'サーバーのネットワーク上のアドレスです。接続できても、所有者やクライアントとの互換性、呼び出す権限があることの証明にはなりません。' },
        { title: 'ツール一覧', body: 'ある時点でサーバーが公開しているツールと必要なパラメーターを記録します。一覧が変わるたびに、新しい観察記録を追加します。' },
      ],
    },
    filters: {
      label: '絞り込み',
      headline: '絞り込み条件は、同じ記録から取得します。',
      body: '「コマンドラインツールで繁体字中国語を使い、ファイルのエクスポートに成功した」サーバーを探す場合、3つの条件はすべて同じ記録に基づきます。無関係な3件の記録を組み合わせることはありません。',
      rows: [
        { title: 'コードエディターで日本語のタスク整理に成功したサーバー', body: 'クライアント、言語、タスク、結果の4つの条件が、同じ記録にあります。' },
        { title: '最新バージョンで過去90日以内に成功記録があるサーバー', body: 'バージョン、日付、結果が同じ記録に結び付いています。' },
        { title: '同じメンテナーが管理するすべてのサーバー', body: '担当者から検索できます。' },
        { title: '特定のAPIを組み込んだサーバー', body: '関連から検索でき、API側からも確認できます。' },
      ],
      caption: '絞り込み条件は名前を付けてビューとして保存し、次回開いたり、フォローしたりできます。',
      note: 'ビューの例。',
    },
    traversal: {
      label: '一覧',
      headline: '一覧の最後まで確認でき、どこまで表示したかも分かります。',
      facts: [
        { title: '最後の記録まで', body: '最初の数ページだけでなく、最後の記録まで閲覧できます。' },
        { title: '件数を明確に表示', body: '件数が正確な値か推定値かを示し、データの更新日時も表示します。' },
        { title: '対応できない条件は明示', body: '対応していない条件の組み合わせは明確に伝えます。「結果なし」に見える空欄は返しません。' },
      ],
    },
    parts: {
      label: '構成',
      headline: '8つの構成要素を、すべての種類で共有します。',
      body: 'MCP Hubは独立した別のプログラムではありません。ライブラリ、ゲーム、ソフトウェアと同じ構成要素を使い、配置を変えています。',
      notes: {
        identity: '異なる情報源に掲載された同じサーバーは、すべてこの一つのアイデンティティを指します。',
        editions: '各バージョンを1件ずつ記録し、パッケージ、ツール一覧、その時点の記録を個別に残します。',
        specs: '互換性の記録には、日付、クライアントとバージョン、タスク、言語、結果を記します。',
        credits: 'メンテナーが個人か組織かを示し、開発した他のプロジェクトにもリンクします。',
        ratings: '評価は特定のバージョンに付け、評価の質問を先に明記します。',
        discussion: 'ディスカッションスレッドはサーバー全体または特定のバージョンに付けられます。',
        lists: 'サーバー、スキル、APIを同じリストに追加し、それぞれにメモを付けられます。',
        follow: 'サーバー、メンテナー、保存したビューをフォローすると、新しいバージョンを通知します。',
      },
    },
    statement: {
      text: '名前が同じでも、同じサーバーとは限りません。',
      sub: '統合には根拠と審査が必要です。',
      note: '統合後も元のプロフィールと履歴は残り、いつでも確認できます。',
    },
    next: '記録には何が書かれ、何が意図的に書かれていないのでしょうか。',
    closing: 'サーバーを探す前に、どれを探すのか確かめましょう。',
  },

  evidence: {
    hero: {
      headline: '日付と条件を明記した記録。',
      lede: '人またはAIエージェントが、特定のクライアントとそのバージョン、言語を使って、特定のバージョンのサーバーに作業を依頼します。結果と日付を記録したものが1件の記録です。MCP Hubの根拠は、こうした記録で構成されています。',
    },
    specimen: {
      label: '記録の例',
      headline: '1件の記録を詳しく見る。',
      fields: {
        server: { label: 'サーバー', value: 'ノートサーバー 1.4.0', note: 'バージョン番号まで明記します。' },
        client: { label: 'クライアント', value: 'コードエディター 3.2', note: 'クライアントもバージョンを記録します。' },
        task: { label: 'タスク', value: '会議メモをタスクリストに整理する', note: '実行した作業を一文で示します。' },
        language: { label: '言語', value: '繁体字中国語', note: 'タスクを実行する言語。' },
        result: { label: '実行結果', value: '成功しました', note: '成功したかどうかを記録します。' },
        date: { label: '日付', value: '2026/10/12', note: 'この記録が示すのは、この日だけです。' },
        submitter: { label: '提出者', value: 'ユーザー', note: '人もAIエージェントも提出できます。エージェントの場合は、操作した人を明記します。' },
        review: { label: '審査', value: '審査済み', note: '人による審査を経てから、記録を公開します。' },
      },
      caption: '記録の例です。項目と内容は互換性の根拠を示すもので、人による審査を経た記録だけが公開されます。',
    },
    compare: {
      label: '対象範囲',
      headline: '示すこと、示さないこと。',
      says: {
        heading: '示すこと',
        items: [
          'この日に、この組み合わせで作業に成功したかどうか。',
          '使用したサーバーとクライアントのバージョン。',
          'タスクに使用した言語。',
          '提出者と、人による審査を経たこと。',
        ],
      },
      not: {
        heading: '示さないこと',
        items: [
          'サーバーの安全性。この記録は安全認証ではありません。',
          'コードの利用方法。メンテナーによるライセンス宣言とライセンス本文を確認してください。',
          '別のバージョン、クライアント、言語での結果。',
          'REZICSによるサーバーの推奨や保証。',
        ],
      },
    },
    states: {
      label: '結果と状態',
      headline: '結果、異議、記録の有無を分けて表示します。',
      body: '試した結果を記録し、異議が出た場合は再審査します。状態は色だけでなく、常に文字で表示します。',
      names: { ok: '成功しました', fail: '失敗', disputed: '異議あり', none: '記録なし' },
      items: {
        ok: 'この組み合わせは、この日に成功しました。',
        fail: '試して失敗した場合も、記録に残します。',
        disputed: '公開済みの記録に異議が出たため、再審査中です。',
        none: 'まだ誰も試していないか、試した人が記録していません。',
      },
    },
    statement: {
      text: '記録がないことは、失敗を意味しません。',
      sub: 'まだ試されていない組み合わせは空欄のままにし、失敗とはみなしません。',
    },
    layers: {
      label: '宣言と記録',
      headline: 'メンテナーの宣言、サーバーの情報、ユーザーの試行結果を分けて表示します。',
      chapters: [
        { title: '宣言', body: 'メンテナーは対応するクライアントと言語を記します。これは宣言として表示し、記録とは区別します。' },
        { title: '観察', body: 'ある時点でサーバーが公開していたツールとパラメーターを記録します。ツールが公開されていても、タスクを実行できるとは限りません。' },
        { title: '記録', body: '特定の組み合わせで実際に作業し、結果と日付を記録して、人による審査後に公開します。ここまで行って1件の記録になります。' },
        { title: '審査と異議', body: '審査済みの記録にも異議を申し立てられます。審査済みで異議ありの状態は両立し、以前の判定も履歴に残ります。' },
      ],
    },
    client: {
      label: 'クライアントから探す',
      headline: '使用しているクライアントから探せます。',
      body: [
        '使っているクライアントとバージョンを選び、次にタスクの言語を選択すると、この組み合わせの記録があるサーバーだけが表示されます。結果と日付も確認できます。',
        'ビューとして保存してフォローすると、条件に合う新しい記録を確認できます。',
      ],
    },
    next: '各バージョンに記録があり、ツール一覧の追加や削除も確認できます。',
    closing: '記録が明確なら、自分で判断できます。',
  },

  versions: {
    hero: {
      headline: 'バージョンごとに、別の記録。',
      lede: 'バージョンは、それぞれのエコシステムの規則に沿って並びます。各バージョンには、パッケージ、ツール一覧、変更履歴、互換性の記録、評価があり、前のバージョンから引き継ぎません。',
    },
    start: {
      label: '新しいバージョン',
      headline: '新しいバージョンには、独自の記録が必要です。',
      body: '2.0.0の互換性の記録には、このバージョンでの実際のテストが必要です。1.4.1での成功は引き継がれません。2.0.0を試して初めて、独自の記録ができます。過去の記録には日付とバージョンを記し、現在も有効かどうか確認できるようにします。',
      note: 'バージョン番号の例。',
    },
    diff: {
      label: 'ツール一覧',
      headline: 'ツール一覧の変更を比較できます。',
      body: '各回の観察で、その時点のツールとパラメーター形式を記録します。2回分を比べると、追加、削除、パラメーター変更があったツールをそれぞれ確認できます。',
      columns: ['ツール', '1.4.0の観察', '2.0.0の観察'],
      rows: [
        { tool: 'ノートを検索', before: 'あり', after: 'パラメーター変更' },
        { tool: 'ノートを作成', before: 'あり', after: '変更なし' },
        { tool: 'ノートを削除', before: 'あり', after: '削除' },
        { tool: 'タグを一覧表示', before: 'あり', after: '変更なし' },
        { tool: 'メモのエクスポート', before: 'なし', after: '追加' },
      ],
      consequence: '「ノートを検索」は残っていますが、パラメーター形式が変わりました。これを使う設定は、改めて試すのがおすすめです。',
      caption: '例：2回の観察におけるツール一覧の比較です。実際の観察結果ではありません。',
    },
    ledger: {
      label: 'パッケージ',
      headline: '同じ名前とバージョン番号でも、同じファイルとは限りません。',
      body: 'パッケージはエコシステムに従って、正式名称とバージョン番号を記録します。名前や番号が同じでも、内容や権利が同じとは限りません。そのため、各バージョンのファイルをハッシュ値で照合します。',
      rows: [
        { title: 'エコシステム', body: 'どのパッケージエコシステムに属するか。' },
        { title: '正式名称', body: '元の表記をそのまま保存し、別の形式に書き換えません。' },
        { title: 'バージョン番号', body: '順序は各エコシステムの規則に従います。' },
        { title: 'ファイルハッシュ', body: 'このバージョンの実際のファイルを照合します。' },
        { title: 'ライセンス宣言', body: '誰が、いつ、どのライセンスを宣言したか。' },
        { title: '情報源', body: 'このデータの取得元と取得日時。' },
      ],
    },
    follow: {
      label: 'フォロー',
      headline: 'サーバーをフォローして、受け取る通知を選べます。',
      body: 'フォローごとに通知レベルを設定でき、いつでも変更できます。フォロー中のサーバーに変更があると、フォロー中のフィードにも表示されます。',
      levels: [
        { title: 'すべて', body: '新しいバージョン、お知らせ、新しい投稿すべて。' },
        { title: '重要な更新', body: '新しいバージョン、お知らせ、決定。' },
        { title: 'オフ', body: '返信やメンションがあった場合だけ通知します。' },
        { title: '個別にフォロー', body: '特定のバージョンまたはディスカッションスレッドだけをフォローします。' },
      ],
      channels: '通知は受信トレイに届きます。プッシュ通知やメールのダイジェストも設定でき、メールはワンクリックで配信停止できます。',
    },
    statement: {
      text: '評価もバージョンごとに記録します。',
      sub: '1.4の評価は、2.0には反映されません。',
      note: '複数バージョンにまたがる数値は別の指標として計算し、算出方法と対象バージョンを明記します。',
    },
    next: '評価、ディスカッション、リストは、対象を明確に示します。',
    closing: 'バージョンが変わったら、記録を改めて確認できます。',
  },

  community: {
    hero: {
      headline: 'どのバージョンの評価かを明記します。',
      lede: '各評価は質問、尺度、バージョンにひも付きます。件数、分布、評価したコミュニティも点数と一緒に表示され、誰の意見か分かります。',
    },
    score: {
      label: '評価',
      headline: '評価には5つの情報が付いています。',
      items: [
        { title: '質問', body: 'たとえば「説明は分かりやすいか」「長時間安定して使えるか」。質問が異なる評価は合算しません。' },
        { title: '尺度', body: '何段階の評価か、それぞれの点数が何を示すかを、点数と一緒に表示します。' },
        { title: 'バージョン', body: '評価したバージョンに点数を記録します。' },
        { title: '件数と分布', body: '評価数が少ない場合は件数と分布だけを表示し、平均は計算しません。' },
        { title: 'コミュニティ', body: 'REZICS全体の評価と、特定のコミュニティの評価を分けて表示します。' },
      ],
      note: '質問の例。',
    },
    discussion: {
      label: 'ディスカッション',
      headline: 'ディスカッションはサーバー全体にも、特定のバージョンにも投稿できます。',
      body: '特定のバージョンに問題があれば、そのバージョンの下で話し合えます。全体的な使用感はサーバーのページで話し合います。メンテナーは自分のプロフィールで返信し、投稿者が分かるようにします。',
      agents: 'AIエージェントがディスカッションに参加する場合は、エージェントであることと操作した人を明記します。',
    },
    list: {
      label: 'リスト',
      headline: 'サーバー、スキル、APIを一つのリストにまとめられます。',
      body: '種類を問わず、サーバー、それを使うスキル、関連するAPIを同じリストにまとめられます。各項目にメモを付けて順番を整え、エクスポートできます。',
      title: '会議メモの整理に使うツール',
      items: [
        { kind: 'mcp', name: 'ノートサーバー', note: '2.0.0からノートをエクスポートできます。' },
        { kind: 'skills', name: '会議メモ整理スキル', note: '上記のサーバーが必要です。' },
        { kind: 'apis', name: 'カレンダーAPI', note: 'タスクをカレンダーに追加します。' },
        { kind: 'software', name: 'コマンドラインツール', note: 'この組み合わせをここで試しました。' },
      ],
      caption: 'リストの例。',
    },
    zone: {
      label: 'サイト',
      headline: 'コミュニティは独自のサーバーディレクトリを持てます。',
      body: 'コミュニティはZoneを使って、ホーム、ナビゲーション、絞り込み済みのディレクトリ、案内ページを備えたサイトを作れます。サイト内の項目は同じプロフィールを参照し、そこで修正すると、その項目が表示される場所すべてに反映されます。',
      routes: 'サイトマップの例：ホーム、ディレクトリ、入門ガイド、記録、ディスカッション。',
    },
    next: 'サーバーを登録し、プロフィールの管理を申請し、宣言を記載します。',
    closing: '評価とディスカッションには、対象を明記します。',
  },

  maintainers: {
    hero: {
      headline: '管理するサーバーについて、自分で説明できます。',
      lede: 'サーバーを登録し、インポートされたプロフィールの管理を申請し、ライセンスと対応範囲を記載できます。記載した内容は宣言として、ユーザーの記録と並べて表示されます。',
    },
    steps: {
      label: '手順',
      headline: '登録から返信まで、4つの手順。',
      items: [
        { title: '登録', body: '項目を作成し、名前、説明、プロジェクト、パッケージを記載します。送信前に重複する項目がないか確認します。' },
        { title: '管理を申請', body: '公開データからインポートされた項目に、自分が管理する個人または組織のプロフィールが含まれている場合、管理を申請できます。' },
        { title: '宣言', body: 'ライセンス、対応するクライアントと言語を記載します。各宣言について、宣言者、日時、根拠としたライセンスの版を記録します。' },
        { title: '返信', body: 'メンテナーのプロフィールでディスカッションに返信します。記録に異議がある場合は、自分の記録を提出できます。' },
      ],
    },
    rules: {
      label: 'できることとできないこと',
      headline: '変更できること、できないこと。',
      can: {
        heading: 'できること',
        items: ['項目の説明、バージョン情報、宣言を変更する。', 'ディスカッションに返信し、記録への反証を提示する。', 'AIエージェントに各新バージョンの記録を提出させる。'],
      },
      cannot: {
        heading: 'できないこと',
        items: ['同意できないという理由で、他の人の記録を自分で削除する。反証を提出して審査を受けてください。', '寄付やサブスクリプションによって判定を変える。', '自分への評価を増やしたり、複数のアカウントで支持を装ったりする。'],
      },
    },
    licence: {
      label: 'ライセンス宣言',
      headline: 'ライセンスはあなたの宣言であり、REZICSによる許可ではありません。',
      body: '宣言にはライセンスとバージョン、宣言者、日時、対象範囲、根拠を記録します。REZICSが利用を許可したことや、法的に確認したことを示すものではありません。サーバーがディレクトリに登録されても、誰もがコードを配布できるわけではありません。',
      rows: [
        { title: 'ライセンスとバージョン', body: 'どのライセンスのどのバージョンか。' },
        { title: '宣言者', body: 'どの個人または組織として宣言したか。' },
        { title: '日時', body: 'いつ宣言したか。不明な場合は不明と記録します。' },
        { title: '対象範囲', body: 'どのバージョンとファイルが対象か。' },
        { title: '根拠', body: '何を根拠に宣言したか。' },
      ],
    },
    agent: {
      text: 'AIエージェントはリリースごとにタスクを実行し、',
      sub: '結果を提出できます。',
      note: 'これらの記録にはエージェントからの提出と明記され、他の人の記録と同じ審査を受けます。',
      link: '提出方法を見る',
      href: '/developers/mcp-server/',
    },
    next: {
      headline: 'AIエージェント向けのスキルにも、バージョン、記録、評価があります。',
      lines: {
        skills: '各バージョンのスキルファイルと依存関係',
        apis: 'サーバーが包んでいるAPI',
        software: 'プロジェクト、パッケージ、クライアント',
      },
    },
    closing: 'あなたの宣言とユーザーの記録を並べて表示します。',
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
      label: '概要',
      meta: {
        title: 'MCP Hub：MCPサーバーのインデックス',
        description:
          'REZICSのMCP HubでMCPサーバーを検索できます。サーバーごとにプロフィールを設け、バージョンごとに記録します。互換性の記録には日付、クライアントとバージョン、タスク、言語を明記し、評価、ディスカッション、リストも確認できます。',
      },
    },
    {
      slug: 'directory',
      label: 'ディレクトリ',
      meta: {
        title: 'MCP Hubのディレクトリ：1台のサーバーに1つのプロフィール',
        description:
          'MCP Hubのディレクトリでは、MCPサーバーごとにプロフィールを1つ設けます。プロジェクト、パッケージのバージョン、デプロイ先のエンドポイント、ツール一覧を分けて記録し、絞り込み条件は同じ記録に基づきます。最後の結果まで閲覧できます。',
      },
    },
    {
      slug: 'evidence',
      label: '根拠',
      meta: {
        title: 'MCP Hubの根拠：日付と条件',
        description:
          'MCP Hubの互換性記録には、日付、サーバーのバージョン、クライアントとそのバージョン、タスク、言語、結果を明記します。特定の日に特定の組み合わせで作業できたことを示しますが、安全性の証明、利用許可、REZICSの推奨ではありません。',
      },
    },
    {
      slug: 'versions',
      label: 'バージョン',
      meta: {
        title: 'MCP Hubのバージョン：バージョンごとに記録',
        description:
          'MCPサーバーはバージョンごとに記録されます。パッケージのエコシステム、正式名称、バージョン番号、ファイルハッシュ、その時点のツール一覧、このバージョンに限った記録と評価を確認できます。サーバーをフォローすると、新しいバージョンの公開時に通知します。',
      },
    },
    {
      slug: 'community',
      label: 'コミュニティ',
      meta: {
        title: 'MCP Hubのコミュニティ：評価、ディスカッション、リスト',
        description:
          'MCPサーバーの特定バージョンを質問とともに評価し、サーバーやバージョンにディスカッションスレッドを作成できます。サーバー、スキル、APIを同じリストにまとめられます。コミュニティはZoneで独自のサーバーディレクトリを作れます。',
      },
    },
    {
      slug: 'maintainers',
      label: 'メンテナー',
      meta: {
        title: 'MCP Hubのメンテナー：登録と管理申請',
        description:
          'メンテナーはMCP Hubにサーバーを登録し、インポートされたプロフィールの管理を申請し、ライセンスと対応範囲を宣言できます。自分のプロフィールでディスカッションに返信できます。宣言とユーザーの記録は分けて表示し、支払いによって判定が変わることはありません。',
      },
    },
  ],
  strings,
} satisfies MiniSite<McpStrings>;
