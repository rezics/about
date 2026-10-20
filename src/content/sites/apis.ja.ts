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
      label: '概要',
      meta: {
        title: 'API Hub：公開APIを一つずつ登録',
        description:
          'REZICSでは公開APIごとにエントリーを作成し、提供者、バージョン、仕様書、認証方式の出典と日付を記録します。登録済みのフィールドで絞り込み、更新をフォローできます。評価やディスカッションでは対象のバージョンを明記します。',
      },
    },
    {
      slug: 'directory',
      label: 'ディレクトリ',
      meta: {
        title: 'API Hub ディレクトリ：事実からAPIを探す',
        description:
          'API Hubのディレクトリでは、提供者、認証方式、仕様書、バージョンの状態で絞り込めます。結果は最後の項目まで表示し、件数の正確さも明記します。条件をビューとして保存してフォローできます。',
      },
    },
    {
      slug: 'versions',
      label: 'バージョン',
      meta: {
        title: 'API Hub バージョン：すべての版を記録',
        description:
          'APIの各バージョンを個別に記録し、その時点で実際に公開された内容を残します。発表、予定、利用可能、延期、撤回を分けて記録します。フォローすると、選んだ通知レベルに応じて知らせが届きます。',
      },
    },
    {
      slug: 'specs',
      label: '仕様と認証',
      meta: {
        title: 'API Hub 仕様と認証',
        description:
          '認証方式と仕様書をバージョンごとに記録し、提供者、インポート元、コミュニティのどこから得た情報かを明記します。測定結果には指標、方法、条件、単位、日時を添え、未知、ゼロ、該当なしを分けて表示します。',
      },
    },
    {
      slug: 'connections',
      label: '関連',
      meta: {
        title: 'API Hub 関連情報：APIを使うもの',
        description:
          'APIの提供者、クライアントライブラリ、それを包むMCPサーバー、利用するスキルを関連付け、どちら側からも確認できます。提供者のページには、関わっている項目をすべて掲載します。',
      },
    },
    {
      slug: 'community',
      label: 'コミュニティ',
      meta: {
        title: 'API Hub コミュニティ：評価、ディスカッション、リスト',
        description:
          'APIの評価では、質問の内容、対象のバージョン、評価した人のグループを明記し、人数と分布を表示します。ディスカッションはエントリーまたはバージョンに付き、リストにはAPI、ソフトウェア、MCPサーバーを一緒に追加できます。',
      },
    },
    {
      slug: 'publishing',
      label: '登録',
      meta: {
        title: 'API Hub 登録：追加と修正',
        description:
          'APIを追加する前に重複がないか検索し、新しいAPI、新バージョン、別名のどれかを説明します。提案には根拠を添え、人が審査してから反映します。提供者もAIエージェントも同じ手順です。',
      },
    },
  ],
  strings: {
    example: '例：',
    next: { label: '次に見る', aria: 'API Hubのほかのページ' },
    closingBody: '一つのアカウントでAPIを探して更新をフォローし、連携の経験を次の人に残せます。',
    pictures: {
      hero: '暖かな白い紙の上で薄い青色の紙が重なり、縁には丸い穴が整然と並び、下から濃い青色の紙が見えています。',
      request: '薄い青色の紙が5枚、門のように並び、濃い青灰色の紙帯が一枚ずつ切り込みを通っています。',
      versions: '薄い青色の厚紙が6枚、少しずつずらして扇形に並び、色は淡いものから濃いものへ変わっています。上端の丸い穴が一列にそろっています。',
      specs: '薄い青色の厚紙が3枚重なり、それぞれの隅に四角い空押しがあります。下から濃い青灰色の紙が見えています。',
      connections: '薄い青色の紙の中央に丸い穴が並び、黄土色、薄緑、濃い青緑の紙帯が縁から伸びて、それぞれの穴を通っています。',
    },
    home: {
      hero: {
        headline: 'APIごとに一つのエントリー。事実には出典を。',
        lede: '提供者、バージョン、仕様書、認証方式を一つのエントリーにまとめ、誰がいつ述べたかを明記します。',
      },
      pages: {
        eyebrow: '6つのページ',
        headline: 'APIを見つけて、すべてのバージョンを追うまで。',
        rows: {
          directory: '事実で絞り込み、最後まで表示',
          versions: '旧版を残し、新版を知らせる',
          specs: '認証方法と仕様書の出典を記録',
          connections: 'ライブラリ、MCPサーバー、スキルを連携',
          community: '評価とディスカッションの対象を明記',
          publishing: '追加も修正も同じ手順で',
        },
      },
      directory: {
        eyebrow: 'ディレクトリ',
        headline: '条件に使うのは、出典のあるエントリー上の事実です。',
        lead: '認証方式、仕様書、バージョンの状態、関連するMCPサーバーやスキルで絞り込めます。条件を組み合わせても、結果は最後の項目まで表示します。',
        link: 'ディレクトリを見る',
      },
      statement: {
        lead: 'APIは更新され、名前が変わり、撤回されることもあります。',
        rest: 'そのたびに記録し、誰が述べたかを明記します。',
      },
      parts: {
        eyebrow: '8つの構成要素',
        headline: 'APIのエントリーは、8つの構成要素でできています。',
        lead: 'アイデンティティが常に先頭です。残る7つは、API Hubが15の共通する構成要素から選んだものです。書籍やアニメにも同じ構成要素を使います。',
        notes: {
          identity: '名前や識別子が変わっても、エントリーは同じです。以前の表記でも検索できます。',
          editions: '各バージョンを1件ずつ記録し、その時点で実際に公開された内容を残します。',
          specs: '認証方式、仕様書、測定結果に、それぞれ出典と日時を付けます。',
          credits: '提供する組織と保守する人を役割ごとに記載し、それぞれに専用ページを設けます。',
          ratings: 'どのバージョンを、どの質問で評価したかを点数と一緒に明記します。',
          discussion: 'ディスカッションスレッドをAPI全体または各バージョンに紐付けます。',
          follow: '新バージョンや撤回のお知らせは、設定した通知レベルで届きます。',
          lists: 'API、ソフトウェア、スキルを同じリストに追加し、それぞれにメモを付けられます。',
        },
      },
      connections: {
        eyebrow: '関連',
        headline: 'APIを使うもの同士がつながります。',
        lead: 'クライアントライブラリ、それを包むMCPサーバー、利用するスキル、提供する組織は、それぞれ固有のエントリーを持ちます。関連付けによって、どちら側からも確認できます。',
        link: '関連情報を見る',
      },
      closing: 'APIを選ぶ前に、バージョンと根拠を確認できます。',
    },
    directory: {
      hero: {
        headline: '事実からAPIを探し、最後まで表示します。',
        lede: '各条件は、エントリーに記録された出典付きの事実に対応します。条件を組み合わせて絞り込んでも、結果を順番に最後まで表示します。',
      },
      facets: {
        eyebrow: '条件',
        headline: '登録済みのフィールドを組み合わせて絞り込みます。',
        lead: '各条件には名前と値があります。値もエントリーなので、開いてさらに検索できます。',
        rows: [
          { title: 'API提供者', body: 'APIを提供する組織または個人です。同じ提供者のAPIをまとめて表示します。' },
          { title: '認証方式', body: '認証不要、APIキー、ユーザー認証をバージョンごとに記録します。' },
          { title: '仕様書', body: '仕様書の有無、掲載場所、提供者を記録します。' },
          { title: 'バージョンの状態', body: '発表済み、利用可能、撤回済み、キャンセル済み。' },
          { title: '関連', body: 'それを包むMCPサーバー、呼び出すクライアントライブラリ、利用するスキルがあるかを確認します。' },
          { title: '名称と言語', body: 'どの言語の名称や別名でも検索できます。' },
          { title: '評価', body: '評価の質問で絞り込み、人数も表示します。' },
          { title: '日付', body: 'バージョンの公開日または事実の確認日で絞り込みます。' },
        ],
      },
      complete: {
        lead: 'プレビュー、ランキング、全件リストは、それぞれ異なるものです。',
        rest: '全件リストには最後の項目まで表示します。',
        note: '各結果には件数の正確さと、データの更新時点を明記します。1ページの表示件数が、リストの終わりではありません。',
      },
      identity: {
        eyebrow: '識別情報',
        headline: '同じAPIのエントリーは一つです。',
        lead: '名前や識別子が変わっても、重複して登録されても、エントリーは一つです。',
        rows: [
          { title: '識別子に出典を記録', body: '各識別子の名前空間と出典を記録します。別々の場所で同じ名前が使われていても、同一とは見なしません。' },
          { title: '以前の名称でも検索', body: '別名、旧名、各言語の表記を個別に保存し、どれで検索しても見つかります。' },
          { title: '重複分を統合', body: '重複が見つかった場合、統合計画に影響を受ける評価、レビュー、フォローを明記し、人が判断してから実行します。統合は元に戻せます。' },
          { title: '以前のURLから新しい項目へ', body: '統合されたエントリーから残ったエントリーへ移動でき、統合の理由も明記します。' },
        ],
      },
      views: {
        eyebrow: 'ビュー',
        headline: 'よく使う条件を保存してフォローできます。',
        lead: '条件をビューとして保存すると、名前を付けて共有できます。ビューをフォローすると、条件に合う新しいエントリーがフィードに表示されます。メールのダイジェストでも受け取れます。',
        tiles: [
          { name: '認証不要、仕様書あり', line: '仕様書があり、認証不要のAPIを探す' },
          { name: '同じ提供者', line: '一つの組織が提供するAPIをまとめて表示' },
          { name: 'MCPサーバーあり', line: 'MCPサーバーと関連付けられたAPI' },
          { name: '繁体字中国語の名称あり', line: '中国語名が登録されているAPI' },
        ],
        caption: 'ビューの名称と内容は例です。',
      },
      closing: '出典のある事実からAPIを探せます。',
    },
    versions: {
      hero: {
        headline: '旧バージョンを残し、新バージョンを知らせます。',
        lede: '各バージョンを公開時の状態で保存し、撤回後も確認できます。APIをフォローすると、次のバージョンの発表、公開、撤回を設定した方法でお知らせします。',
      },
      closed: {
        lead: '公開済みのバージョンの記録は書き換えません。',
        rest: '以後の変更は、次のバージョンとして記録します。',
      },
      sequence: {
        eyebrow: 'バージョンの順序',
        headline: '同じAPIでも、各バージョンにそれぞれ根拠があります。',
        lead: '架空の天気データAPIの例です。第3版はAPIキー認証に変わり、第2版の認証不要という記録も残ります。誤りは根拠を添えて修正し、その後の追加内容は次のバージョンに記録します。',
        tiles: [
          { name: 'v1', rel: '撤回済み', line: '認証不要。提供者の告知、2026/06/18確認。' },
          { name: 'v2', rel: '利用可能', line: '認証不要。提供者のバージョン情報、2026/08/12確認。' },
          { name: 'v3', rel: '利用可能', line: 'APIキー。提供者の仕様書、2026/10/01確認。' },
          { name: 'v4', rel: '発表済み', line: 'APIキー。提供者の予告、2026/10/19確認。' },
        ],
        caption: '天気データAPI、バージョン、認証方式、出典、日付はすべて架空の例です。',
      },
      events: {
        eyebrow: '5種類のお知らせ',
        headline: '発表から撤回まで、5種類のお知らせを個別に記録します。',
        lead: '一つのバージョンには複数の時点があります。REZICSはそれらを一つの日付にまとめません。',
        rows: [
          { title: '発表', body: '提供者が新バージョンを予告します。これは告知であり、公開ではありません。' },
          { title: '予定', body: '予定日が公開されます。日付が変わっても、以前の日付は履歴に残ります。' },
          { title: '利用可能', body: '利用可能になったことを確認し、その出典を添えます。' },
          { title: '延期', body: '予定日が先に延びます。延期とキャンセルは別に記録し、キャンセルは明記します。' },
          { title: '取り下げ', body: '提供者がこのバージョンを撤回します。記録は残し、状態を撤回済みに変更します。' },
        ],
      },
      follow: {
        eyebrow: 'フォロー',
        headline: 'APIをフォローして、通知の量を選べます。',
        lead: 'フォローに相手の許可や料金は必要ありません。フォローごとに通知レベルを設定し、受信箱に届くお知らせを選べます。',
        rows: [
          { title: 'すべて', body: '新バージョン、告知、決定に加えて、通常の投稿も通知します。' },
          { title: '重要な更新', body: '新バージョン、告知、決定のみ通知します。' },
          { title: 'オフ', body: '通常のお知らせはフィードに表示します。返信やメンションなど、直接関わる通知は引き続き届きます。' },
          { title: 'バージョンごとの設定', body: '特定のバージョンを詳しく追う場合は、個別に通知を設定できます。' },
        ],
        footnote: '通知は受信箱、プッシュ通知、メールのダイジェストで受け取れます。メールのダイジェストはワンクリックで配信停止できます。',
      },
      closing: '更新のお知らせは、選んだ方法で届きます。',
    },
    specs: {
      hero: {
        headline: '呼び出す前に、必要な情報を確認できます。',
        lede: '認証方法、仕様書の場所、測定結果をバージョンごとに記録し、誰がいつ述べたかを明記します。',
      },
      facts: {
        eyebrow: 'バージョンに記録',
        headline: '認証方式と仕様書を各バージョンに記録します。',
        lead: '同じAPIでも、バージョンによって認証方式が異なる場合があります。事実は各バージョンに記録し、出典を明記します。',
        rows: [
          { title: '認証方式', body: '認証不要、APIキー、ユーザー認証を各バージョンに記録します。新バージョンで認証方式が変わっても、旧バージョンの記録はそのまま残ります。' },
          { title: '仕様書', body: '仕様書の掲載場所、提供者、確認日をエントリーに記録します。' },
          { title: '測定', body: '測定結果には必ず、指標、方法、条件、単位、日時を添えます。' },
          { title: '出典', body: '各事実について、提供者の情報、公的な情報源からのインポート、コミュニティでの測定のどれかを明記します。インポートした情報には出典とライセンスへのリンクを添えます。' },
        ],
      },
      measure: {
        lead: '測定と評価は別のものです。',
        rest: '評価は人々の意見です。測定は、どのような条件で何を測ったかを示します。',
      },
      fields: {
        eyebrow: '測定',
        headline: '測定記録では、まず5つの情報を確認します。',
        lead: '指標、方法、条件、単位、日時を確認してください。比較する際は、結果、対象、対象範囲も確認します。',
        rows: [
          { title: '測定指標', body: '何を測定したか。' },
          { title: '測定方法', body: 'どの方法で測定したか。' },
          { title: '条件', body: 'どのような条件で測定したか。' },
          { title: '単位', body: '数値の単位。' },
          { title: '日時', body: '測定日です。古い結果には当時の日付を付けます。' },
        ],
        footnote: '同じ指標の結果を履歴として蓄積し、ほかのAPIと同じ比較表に並べられます。',
      },
      absent: {
        eyebrow: '不足している情報',
        headline: '不明、ゼロ、該当なしは、それぞれ別の状態です。',
        lead: '未測定の値は不明とし、ゼロとは記録しません。該当しない指標も、情報不足とは区別します。不足している情報を誤解を招く評価に変えることはありません。',
      },
      closing: '認証方法を確認してから連携を始められます。',
    },
    connections: {
      hero: {
        headline: '一つのAPIから、その上に作られたものすべてにつながります。',
        lede: 'クライアントライブラリ、それを包むMCPサーバー、利用するスキル、提供する組織は、REZICSでそれぞれ固有のエントリーを持ち、関連付けられます。',
      },
      relations: {
        eyebrow: '関連',
        headline: '関連には名前と方向があります。',
        lead: '関連の種類と、それぞれの役割を明記します。APIのページからも、相手側のページからも確認できます。',
        rows: [
          { title: 'クライアントライブラリ', body: 'このAPIを呼び出すライブラリはソフトウェアのエントリーで、独自のバージョンと依存関係があります。' },
          {
            title: 'MCPサーバーとして提供',
            body: 'これをMCPサーバーとして提供するプロジェクトは、MCP Hubに独自のエントリーを持ちます。プロジェクト、パッケージ、デプロイ先のエンドポイントを分けて記録します。',
          },
          {
            title: '利用するスキル',
            body: 'このAPIを利用するスキルはSkill Hubに独自のエントリーを持ち、関連付けを通じてここに戻れます。',
          },
          { title: '同じ提供者のほかのAPI', body: '提供者のページから、ほかに提供しているAPIを探せます。' },
        ],
      },
      both: {
        lead: 'APIからMCPサーバーを見つけられます。',
        rest: 'MCPサーバーからAPIへ戻ることもできます。',
      },
      provider: {
        eyebrow: 'API提供者',
        headline: '提供者には専用のページがあります。',
        lead: 'APIを提供する組織や個人は、アカウントとは別の公開プロフィールを持ちます。提供するAPI、公開するソフトウェア、保守するMCPサーバーを、それぞれの役割とともにページに掲載します。',
        more: '同じ人が小説を書き、ソフトウェアを作り、APIを保守していても、REZICSでは一つのプロフィールで確認できます。',
      },
      neighbours: {
        eyebrow: '関連する分野',
        headline: '関連する3種類の項目と、開発者向けサイト。',
        lines: {
          mcp: 'APIをツールとして提供するMCPサーバー',
          skills: 'AIエージェント向けスキル。その一部はAPIを使います。',
          software: 'APIを呼び出すライブラリとアプリケーション',
        },
        developers: { name: '開発者', line: 'REZICSのAPIはこちら' },
      },
      closing: 'どちら側からでも、もう一方を見つけられます。',
    },
    community: {
      hero: {
        headline: 'どのバージョンの評価かを明記します。',
        lede: 'APIを評価する前に、質問の内容と対象のバージョンを明確にします。評価には人数と分布を添え、ディスカッション、リスト、コミュニティも同じエントリーに集めます。',
      },
      rating: {
        eyebrow: '評価',
        headline: '評価を決める5つの要素。',
        lead: '例：「仕様書は分かりやすいか」を5段階で、第3版について全ユーザーが評価します。',
        rows: [
          { title: '質問', body: 'どの質問への評価かを示します。異なる質問の評価は合算しません。' },
          { title: '尺度', body: '評価段階の数と各段階の意味を、事前に明示します。' },
          { title: '対象', body: 'どのバージョンの評価かを示します。このバージョンの評価を別のバージョンに加算しません。' },
          { title: 'グループ', body: 'どのグループが評価したかを、評価の横に表示します。' },
          { title: '人数と分布', body: '各評価に人数と分布を添えます。人数が少ない場合は、平均を算出せず人数と分布のみ表示します。' },
        ],
      },
      discussion: {
        lead: '連携で困ったことは、そのバージョンの下で話し合えます。',
        rest: 'バージョンが変わっても、旧版のディスカッションはそのまま残ります。',
      },
      lists: {
        eyebrow: 'リスト',
        headline: 'プロジェクトで使うものを一つのリストに。',
        lead: 'リストにはAPI、クライアントライブラリ、MCPサーバー、スキルを種類を問わず並べて、各項目に注記を付けられます。公開範囲を設定でき、並べ替えやエクスポートもできます。',
        tiles: [
          { kind: 'apis', rel: 'API', name: '天気データAPI', line: '予報データの取得元' },
          { kind: 'apis', rel: 'API', name: '地図タイルAPI', line: '画面のベースマップ' },
          { kind: 'software', rel: 'ソフトウェア', name: 'クライアントライブラリ', line: 'プログラムから天気データAPIを呼び出す' },
          { kind: 'mcp', rel: 'MCPサーバー', name: '天気MCPサーバー', line: 'AIエージェントが天気を検索' },
          { kind: 'skills', rel: 'スキル', name: '予定調整スキル', line: '天気に合わせて毎日の予定を調整' },
        ],
        caption: '架空のプロジェクトのリストです。名称はすべて例です。',
      },
      zone: {
        eyebrow: 'コミュニティとZone',
        headline: '特定のAPI向けにZoneを作れます。',
        lead: 'コミュニティは独自のルールを定め、エントリーに記録された事実を独自の視点で読み解けます。Zoneを作ってAPI専門のディレクトリサイトにすることもできます。データは同じグラフから取得します。',
        link: 'サイトモジュールを見る',
      },
      closing: 'すべての評価とディスカッションで対象を明記します。',
    },
    publishing: {
      hero: {
        headline: 'まず検索して、見つからなければ追加します。',
        lede: '追加や修正はすべて提案として送ります。変更箇所と根拠を明記し、人が審査してから反映し、記録を残します。人、提供者、AIエージェントが同じ手順を使います。',
      },
      path: {
        eyebrow: '手順',
        headline: 'エントリーはこの手順で登録します。',
        rows: [
          { title: 'まず検索', body: 'フォームを開く前に、名称、別名、識別子で検索します。見つかった場合は別名や新バージョンを追加し、新しいエントリーは作りません。' },
          { title: '項目の種類を説明', body: '新しいAPI、既存APIの新バージョン、または特定バージョンの一部のどれに当たるかを、提案者が説明します。モデルは提案できますが、人に代わって決定はできません。' },
          { title: '根拠を添付', body: '各提案に、変更箇所、根拠とする出典、方法を明記します。' },
          { title: '人が審査', body: '審査担当者は根拠を確認してから判断します。提案後にエントリーが変更された場合、提案は差し戻され、再審査されます。' },
          { title: 'まず未検証と表示', body: '新しいエントリーは先に公開できますが、未検証と表示し、各フィールドの出典を示します。検証されるまでは、信頼できるエクスポートやおすすめに含めません。' },
          { title: '記録を残す', body: '反映後に記録を残します。変更を取り消す場合は修正として記録し、履歴を書き換えません。' },
        ],
      },
      proposal: {
        eyebrow: '提案の形式',
        headline: 'AIエージェントも人と同じ形式で提案します。',
        lead: '公式と第三者のエージェントは同じ形式で提案します。エージェントの出力を自身の根拠にはできず、再度インポートする場合も同じです。',
        rows: [
          { title: '対象とバージョン', body: '変更するエントリーと、エージェントが参照したリビジョン。' },
          { title: '変更内容', body: '追加、修正、削除する内容。' },
          { title: '根拠', body: '変更を裏付ける出典と箇所。' },
          { title: '導出方法', body: '結果を導いた方法と入力情報。' },
          { title: '確信度', body: 'エージェント自身が示す確信度です。エージェントの申告であり、REZICSが保証するものではありません。' },
          { title: '開示', body: '自動化であることと、実行責任者を明記します。' },
        ],
      },
      paid: {
        lead: '結論は購入できません。',
        rest: 'スポンサーや購読によって審査の結論が変わることはありません。',
      },
      provider: {
        eyebrow: 'API提供者',
        headline: '提供者も同じ手順を使います。',
        lead: 'APIの提供者は、自らが名前空間を管理していることを証明できます。提供者が提示した事実には、その出典を明記します。提供者の説明も一つの情報として扱い、コミュニティによる測定結果やディスカッションもエントリーに残します。',
        more: '提供者が自らの説明を撤回しても、その説明の根拠だけを取り下げます。インポートした事実には出典とライセンスを添えます。確認済みとして保護されたフィールドが、後からのインポートで上書きされることはありません。',
      },
      closing: '追加と修正は、すべて人が審査します。',
    },
  },
} satisfies MiniSite<ApisStrings>;
