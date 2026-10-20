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
  name: 'ソフトウェア',
  theme: { kind: 'software' },
  next: 'visual-novels',
  pages: [
    {
      slug: '',
      label: '概要',
      meta: {
        title: 'ソフトウェア：バージョン、プラットフォーム、互換性テスト',
        description:
          'REZICS では各プログラムに一つのプロフィールを設け、プラットフォームごとのリリースを一覧表示します。互換性は方法と日付を添えたテストで記録し、ライセンス、入手方法、評価、更新通知も同じプロフィールに紐づけます。',
      },
    },
    {
      slug: 'catalogue',
      label: 'カタログとバージョン',
      meta: {
        title: 'カタログとバージョン：1つのプログラムに1つのプロフィール',
        description:
          'REZICS のソフトウェアカタログでは、各プログラムに一つのプロフィールを設けます。プラットフォームごとのリリースを個別に記録し、エコシステムのルールに沿ってバージョンを並べます。フォークは別の項目として登録し、元のプロジェクトにつなげます。絞り込み結果には正確な件数を表示します。',
      },
    },
    {
      slug: 'compatibility',
      label: '互換性',
      meta: {
        title: '互換性：日付付きのテスト記録',
        description:
          'REZICS ではソフトウェアの互換性をテストごとに記録します。指標、方法、条件、日付、対象のバージョンとファイルを明記します。対応、非対応、不明、古い情報、入手不可を区別し、テストがなければ不明と表示します。',
      },
    },
    {
      slug: 'reviews',
      label: '評価',
      meta: {
        title: '評価：スコアは特定のリリースに紐づく',
        description:
          'REZICS では特定のリリースだけを評価でき、評価者数、分布、評価したコミュニティを表示します。複数バージョンの総合スコアは別に算出して方法を明記し、コミュニティのおすすめは決定のディスカッションにつなげます。',
      },
    },
    {
      slug: 'updates',
      label: '更新をフォロー',
      meta: {
        title: '更新をフォロー：リリースと更新内容',
        description:
          'REZICS でプログラム、開発者、検索条件をフォローすると、新しいリリースや更新内容が通知されます。通知の頻度は選べます。サイト内の受信箱だけでなく、プッシュ通知やメールの概要も利用できます。',
      },
    },
    {
      slug: 'publishing',
      label: '公開とライセンス',
      meta: {
        title: '公開とライセンス：ソフトウェアを公開する人へ',
        description:
          '開発者は REZICS でプログラムのページを管理し、各プラットフォームのリリースを公開できます。ファイルサイズ、ハッシュ値、更新内容、スクリーンショットを添え、ライセンスの正確な条項とバージョン、入手方法を明記します。',
      },
    },
    {
      slug: 'connections',
      label: '関連',
      meta: {
        title: '関連：依存するもの、拡張するもの',
        description:
          'REZICS では、プログラムを利用するゲームMod、AIエージェントが操作する MCP サーバー、プログラムを必要とするスキル、関連する API につなげます。各関連には方向と出典があり、どちら側からも確認できます。',
      },
    },
  ],
  strings: {
    common: { nextPage: '次のページ', nextSite: '次のサイト', sample: '例のデータです。プログラム、OS、バージョン番号、日付はすべて架空です。', go: '開く' },
    pictures: {
      hero: { name: 'hero', alt: '濃い青緑色の紙を少しずつずらして重ね、扇のように広げています。一番上は薄青色です。' },
      versions: { name: 'versions', alt: '3つの濃い青緑色の紙封筒を並べ、それぞれを灰青色の紙帯で留めています。' },
      holes: { name: 'holes', alt: '濃い青緑色の紙に丸い穴が整然と並び、いくつかは穴が開いていません。' },
      slit: { name: 'slit', alt: '濃い青緑色の紙片が、灰青色の紙にある切り込みを通っています。' },
      tabs: { name: 'tabs', alt: '濃い青緑色の紙片が、2つの紙留めでマスタード色と薄緑色の紙をつないでいます。' },
    },
    states: { compatible: '対応', incompatible: '非対応', unknown: '不明', stale: '情報が古い', unavailable: '入手不可' },
    channels: { stable: '安定版', beta: 'ベータ版' },
    sample: {
      program: 'サンプルエディター',
      releases: [
        { version: '4.1', channel: 'beta', date: '2026-10-06', platforms: 'A・B・C', note: '分割ウィンドウを追加。大きなファイルを開く速度を改善。' },
        { version: '4.0', channel: 'stable', date: '2026-08-25', platforms: 'A・B・C', note: 'ワークスペースを追加。古いプラグイン形式を削除。' },
        { version: '3.2', channel: 'stable', date: '2026-03-17', platforms: 'A・B・C', note: 'モバイル版を追加。検索速度を改善。' },
        { version: '3.1', channel: 'stable', date: '2025-11-04', platforms: 'A・B' },
        { version: '3.0', channel: 'stable', date: '2025-06-10', platforms: 'A・B' },
      ],
      environments: [
        { name: 'OS A・64ビット', short: 'A 64' },
        { name: 'OS A・32ビット', short: 'A 32' },
        { name: 'OS B・64ビット', short: 'B 64' },
        { name: 'OS C・モバイル', short: 'C モバイル' },
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
        label: 'ソフトウェア',
        headline: '各バージョンの動作環境を、日付付きで記録。',
        lede: 'REZICS では各プログラムに一つのプロフィールを設け、プラットフォームごとのリリースを記録します。テストされていない環境は不明と表示します。ライセンス、入手方法、評価、ディスカッションも同じプロフィールにつながります。',
      },
      pages: {
        label: '6つのページ',
        headline: 'プログラムを探すところから、自分の公開まで。',
        lines: {
          catalogue: '一つのプロフィールに、リリースごとの記録',
          compatibility: '動作するかを、日付付きのテストで確認',
          reviews: '評価にはバージョンを明記',
          updates: 'プログラム、開発者、検索条件をフォロー',
          publishing: '開発者向け：リリース、ライセンス、入手方法',
          connections: 'Mod、MCP サーバー、スキル、API',
        },
      },
      compatibility: {
        label: '互換性',
        headline: '動作するという情報には、テストを。',
        lead: '開発者が対応プラットフォームとして挙げるのは申告です。実際のテスト結果には、実施者、日付、環境、方法、条件を記載します。REZICS はテスト結果に基づいて動作するかを示します。',
        link: '互換性の記録方法を見る',
      },
      statement: {
        text: 'テストがない場合は「不明」。',
        sub: '対応とも非対応とも推測しません。',
      },
      program: {
        label: '一つのプログラム',
        headline: '一つのプロフィールにつながる情報。',
        items: [
          { title: 'リリース', body: '各プラットフォームのリリースを個別に保存し、安定版とベータ版を分けて表示します。' },
          { title: '互換性', body: 'OS、バージョン、プロセッサアーキテクチャを同じリリースに紐づけて確認します。' },
          { title: 'ライセンス', body: '条項のバージョンを明記し、申告者と日時を記録します。' },
          { title: '入手方法', body: '公式ダウンロード、ストア、パッケージレジストリを並べて掲載します。外部サイトへのリンクはその旨を明記します。' },
          { title: '評価', body: '特定のバージョンを評価でき、評価者数と分布をスコアの横に表示します。' },
          { title: 'フォロー', body: 'プログラムやメンテナーをフォローすると、新しいバージョンと告知が届きます。' },
        ],
      },
      neighbours: {
        label: '関連',
        headline: 'プログラムは他のものとつながります。',
        lead: 'ゲームModはプログラムに依存し、MCP サーバーは AIエージェントが操作し、スキルはプログラムを必要とします。各関連には方向と出典があり、どちら側からも確認できます。',
        link: 'すべての関連を見る',
        tiles: [
          { kind: 'games', line: 'Modやローダーが依存するプログラム' },
          { kind: 'mcp', line: 'エージェントが操作するサーバー' },
          { kind: 'skills', line: '依存先として指定するスキル' },
          { kind: 'apis', line: '提供または呼び出す API' },
        ],
      },
      closing: '一つのプログラムに一つのプロフィール。各バージョンを確認できます。',
    },

    catalogue: {
      hero: {
        headline: 'バージョン番号は変わっても、プロフィールは同じ。',
        lede: 'プログラムの名前が変わったり、別のパッケージレジストリに移ったり、新しいプラットフォームに対応したりしても、REZICS では同じ項目です。リリースごとに記録を残し、その時点で公開された内容を記載します。',
      },
      releases: {
        label: 'リリース',
        headline: 'リリースごとに保存。',
        lead: '各リリースにバージョン番号、公開チャンネル、日付、プラットフォーム、その時点で含まれるファイルを記録します。誤った情報は根拠を添えて修正できます。後から公開された修正は新しいリリースになります。',
      },
      list: {
        caption: 'サンプルエディターのリリース。新しい順です。',
        columns: ['バージョン', '公開チャンネル', '日付', 'プラットフォーム'],
        points: [
          { title: '公開チャンネル', body: '安定版とベータ版を分けて表示します。最新のリリースが適しているとは限りません。' },
          { title: 'バージョン順', body: 'プログラムが属するエコシステムのルールで順序を判断し、バージョン番号を文字列として比較しません。' },
          { title: 'プラットフォーム', body: '同じバージョンでも、プラットフォームごとに別の記録があります。' },
        ],
      },
      statement: {
        text: 'REZICS はダウンロード数を集計しません。',
        sub: '並び順にも使わず、リストには使用した並び順を明記します。',
      },
      identity: {
        label: '名前とプロフィール',
        headline: '同じ名前でも、同じプログラムとは限りません。',
        rows: [
          { title: '多言語の名前', body: '中国語名、原名、一般的な略称を記録します。どの名前でも検索できます。' },
          {
            title: '識別子',
            body: 'パッケージレジストリの名前、URL、番号をそれぞれ出典付きで記録します。異なるレジストリの同じ文字列を、同一のプログラムとして扱うことはありません。',
          },
          { title: 'フォーク', body: 'フォークしたプロジェクトは別の項目として登録し、独自のメンテナーとリリースを持ちます。「フォーク元」の関係で元のプロジェクトにつなげます。' },
          { title: '統合と分割', body: '重複項目は根拠を添えて統合し、以前の URL も有効なままです。誤って統合した場合は取り消せます。保存や評価が重複して集計されることもありません。' },
        ],
      },
      browse: {
        label: '絞り込み',
        headline: '条件は同じリリースに適用。',
        lead: '「OS B の64ビットで動作し、オープンソースライセンスの安定版」を検索する場合、すべての条件を一つのリリースで満たすプログラムだけを表示します。条件が複数のリリースに分かれている場合は表示しません。',
        points: [
          { title: '件数', body: '結果に件数を表示し、集計中は「少なくとも」と示します。' },
          { title: '最後まで表示', body: 'リストの最後の項目まで閲覧できます。途中のページで止まりません。' },
          { title: '検索条件を保存', body: 'よく使う条件は検索ビューとして保存し、そのままフォローできます。' },
        ],
      },
      closing: 'バージョン番号は変わっても、記録は残ります。',
    },

    compatibility: {
      hero: {
        headline: '互換性はテストごとに記録。',
        lede: '開発者が記載する対応プラットフォームは申告です。テスト結果は、実施者が特定の日に特定の環境で確認した内容です。REZICS では両者を分け、互換性の判断には後者を使います。',
      },
      anatomy: {
        label: 'テスト記録',
        headline: 'テスト記録に含まれる情報。',
        lead: '再テストの方法や、結果の適用範囲がわかるよう、次の情報を記載します。',
        rows: [
          { title: '指標', body: '測定対象を明記します。起動できるか、特定の作業を完了できるか、数値などです。数値には単位を添えます。' },
          { title: '方法', body: '他の人が再テストできるよう、手順を明確に記載します。' },
          { title: '条件', body: 'OS のバージョン、プロセッサアーキテクチャ、関連設定を同じテストに紐づけます。条件が異なる場合は別のテストです。' },
          { title: 'ファイル', body: '対象のバージョンとファイルを明記し、検証済みのハッシュ値を添えます。ハッシュ値が示すのはそのバイト列だけで、他のファイルの根拠にはなりません。' },
          { title: '日付と提出者', body: '各テストに日付と提出者を記録します。人も AIエージェントも提出でき、自動化されたアカウントにはその旨を明記します。' },
          { title: '採用', body: 'テストは提案として提出し、採用されて初めて有効になります。異議がある場合は別に表示し、それ以前の判断も残します。' },
        ],
      },
      states: {
        label: '5つの状態',
        headline: '5つの状態を区別。',
        lead: '対応と非対応に加え、混同されやすい3つの状態を REZICS では分けて表示します。',
        body: {
          compatible: '採用済みのテストで、この環境で正常に動作したことを日付付きで確認しています。',
          incompatible: '採用済みのテストで動作しないことを確認し、根拠と日付を添えています。',
          unknown: 'テストがありません。ラベル、分類、宣伝文から推測しません。',
          stale: 'テストの有効期間が過ぎています。結果は確認できますが、現在の状況とはみなしません。',
          unavailable: 'この環境で入手できるリリースがないため、対応かどうかを判断できません。',
        },
        caption: 'サンプルエディターの各バージョンと4つの環境の互換性。',
        corner: '環境',
      },
      conditions: {
        label: '条件',
        headline: '条件は同じテストに適用。',
        lead: '互換性を絞り込むときは、同じリリースの同じテストですべての条件を満たす必要があります。異なるバージョンの結果を組み合わせると、使えそうに見えても実際には動作しないことがあります。',
        example: 'たとえば「OS B・64ビット、安定版、対応、バージョン4.0以降」が条件の場合、サンプルエディターには候補が2つあります。',
        candidates: [
          { title: '4.1 ベータ版', body: '対応。動作テスト済みですが、安定版ではありません。' },
          { title: '4.0 安定版', body: '不明。安定版ですが、テストはありません。' },
        ],
        result: '条件が2つのリリースに分かれているため、該当する結果はありません。REZICS は条件を暗黙に緩めず、該当なしと表示します。',
      },
      statement: {
        text: '各表示には根拠と範囲を明記。',
        sub: '外部リンクだけでは、何も証明できません。',
        note: 'スキャン結果も同様に、特定のファイルを特定の時点でスキャンした結果を示すだけです。',
      },
      closing: '動作するかは、テストで判断。',
    },

    reviews: {
      hero: {
        headline: '評価するバージョンを明記してから、採点。',
        lede: '同じプログラムでも、更新前後で大きく変わることがあります。プログラム全体にも、特定のリリースだけにも評価を付けられます。特定のバージョンへの評価は、そのバージョンに残ります。',
      },
      rules: {
        label: '評価のルール',
        headline: '件数が集まってから、平均を表示。',
        facts: [
          { title: '5', body: '初期設定では評価が5件に達すると平均を表示します。それまでは評価者数と分布、平均の表示までに必要な件数を案内します。' },
          { title: '50', body: 'ランキングには重み付きスコアを使い、初期設定では評価が50件以上で掲載します。加重平均と重みを公開します。' },
          { title: '1', body: '同じ人が同じ対象と問いに付けた有効な評価は一つだけです。評価を変更すると、その記録を更新します。' },
        ],
      },
      anatomy: {
        label: '問いと対象',
        headline: '評価には、問いがあります。',
        lead: '評価の問い、尺度、対象を一緒に定義します。異なる問いのスコアを合算せず、特定のリリースの評価をプログラム全体の評価に自動で加えることもありません。',
        points: [
          { title: '並べて表示', body: 'サイト全体と各コミュニティの評価を並べ、一つの数値にまとめません。' },
          { title: '複数バージョン', body: '複数のバージョンをまとめた評価は別の指標として、方法と対象のリリース数を明記します。' },
          { title: '捏造しない', body: 'REZICS はレビュー、投票、参加を捏造しません。自動化されたアカウントにはその旨を明記します。' },
        ],
      },
      statement: {
        text: '評価がないときは、何も表示しません。',
        sub: '0点や空の棒グラフは表示しません。',
      },
      picks: {
        label: 'おすすめと代替',
        headline: 'おすすめには決定者を、代替には理由を。',
        rows: [
          { title: 'コミュニティのおすすめ', body: 'コミュニティが選んだプログラムは、選定に至ったディスカッションにつながっています。' },
          { title: '代替', body: '「特定の用途で代わりに使える」という関連に、理由と提案者を添えます。異議を申し立てることもできます。' },
          { title: 'リスト', body: 'リストには対象の環境と、互換性を確認済みかどうかを明記します。' },
          { title: 'おすすめ', body: 'おすすめには、フォロー中の条件やコミュニティの決定など理由を表示します。おすすめ全体をオフにすることもできます。' },
          { title: '問題を報告', body: '特定のバージョンに問題がある場合、そのリリースの下にディスカッションを作成します。後から読む人にも対象のバージョンがわかります。' },
        ],
      },
      closing: '評価には、バージョンと評価者数を明記。',
    },

    updates: {
      hero: {
        headline: '新しいリリースを、選んだ頻度で通知。',
        lede: 'プログラムをフォローすると、新しいリリースと更新内容が届きます。すべて受け取るか、重要なものだけ受け取るか、通知しないかを選べます。',
      },
      levels: {
        label: '通知頻度',
        headline: '3段階から、フォローごとに設定。',
        lead: 'いつでも変更できます。特定のリリースだけ通知を設定することもできます。',
        rows: [
          { title: 'すべて', body: 'すべてのリリース、告知、投稿を通知します。' },
          { title: 'おすすめのみ', body: '新しいリリース、告知、コミュニティの決定だけを通知します。' },
          { title: 'オフ', body: 'あなたに直接関係する返信とメンションだけ通知します。' },
          { title: '通知先', body: 'サイト内の受信箱、プッシュ通知、メールの概要から選べます。メールはいつでも配信停止できます。' },
        ],
      },
      targets: {
        label: 'フォロー対象',
        headline: 'プログラム以外もフォロー。',
        rows: [
          { title: 'プログラム', body: '新しいリリースと更新内容。' },
          { title: '開発者または組織', body: '新しい項目や告知。' },
          { title: '検索条件', body: '「OS B で動作するオープンソースのテキストエディター」などを検索ビューとして保存できます。条件に合う新しいプログラムはホームのタブに表示され、概要通知も受け取れます。' },
          { title: 'コミュニティ', body: 'おすすめの追加など、コミュニティの告知や決定。' },
        ],
      },
      changelog: {
        label: '更新内容',
        headline: '更新内容はリリースごとに記録。',
        lead: '更新内容は各リリースに記載します。3.2 から 4.1 ベータ版に移る場合も、その間の各バージョンの変更を順番に確認できます。',
        more: 'ホームの「続き」には、互換性のあるパッケージの更新と、読み終えていない次の章が並びます。パッケージの更新も以前のバージョンへの復元も、特定のファイルに固定されます。復元では当時のファイルを取得できます。',
        caption: 'サンプルエディターの更新内容。新しい順です。',
        start: 'ここから読む',
      },
      statement: {
        text: 'スクリプトも AIエージェントも、',
        sub: '同じ更新情報を読み、中断後は前回の位置から再開できます。',
      },
      closing: '受け取る内容と頻度を、自分で決める。',
    },

    publishing: {
      hero: {
        headline: 'リリースを、検索できる記録に。',
        lede: '開発者は REZICS でプログラムを管理し、リリースごとにバージョン番号、プラットフォーム、ファイル、更新内容、ライセンス条項、入手方法を登録します。フォロワー、検索する人、AIエージェントは同じ情報を参照します。',
      },
      record: {
        label: 'リリース記録',
        headline: 'リリースに含まれるフィールド。',
        lead: '必須フィールドがすべて入力されていないと、リリースを送信できません。送信後は記録として保存されます。',
        caption: 'サンプルエディター 4.0 のリリース記録。',
        fields: [
          { title: 'バージョン番号', body: '4.0' },
          { title: '公開チャンネル', body: '安定版' },
          { title: '日付', body: '2026-08-25' },
          { title: 'プラットフォーム', body: 'OS A・64ビット、OS B・64ビット、OS C・モバイル' },
          { title: 'ファイルサイズ', body: '48.2 MB' },
          { title: 'ハッシュ値（抜粋）', body: 'sha256 9f2c41d7e41a' },
          { title: 'ライセンス', body: 'オープンソースライセンス バージョン2.0' },
          { title: '入手方法', body: '開発者のウェブサイト（外部リンク）' },
          { title: '更新内容', body: 'ワークスペースを追加し、古いプラグイン形式を削除。' },
        ],
      },
      steps: {
        label: '公開の流れ',
        headline: 'リリース公開の5つの手順。',
        steps: [
          { title: 'メンテナー権限を確認', body: 'プロジェクトのメンテナー権限を確認してから、ページとリリースを管理します。' },
          { title: 'リリースを入力', body: 'バージョン番号、公開チャンネル、日付、各プラットフォームのファイルを登録します。' },
          { title: 'ライセンスを申告', body: 'ライセンス条項とそのバージョンを選びます。申告者、日時、適用範囲を記録します。' },
          {
            title: '入手方法を明記',
            body: 'ファイルの提供者、ダウンロード場所、外部ページでのインストールが必要かを明記します。REZICS が外部サイトにリンクするだけの場合、REZICS がインストールすると表現しません。',
          },
          { title: '公開', body: 'リリースは保存され、フォロワーには各自の通知設定に応じて届きます。' },
        ],
        note: 'これらの手順は API と MCP からも実行できるため、リリース公開の手順を自動化できます。',
      },
      licence: {
        label: 'ライセンス',
        headline: 'ライセンス条項とバージョンを明記。',
        lead: 'ライセンスの申告には、正確な条項とバージョン、申告者、日時、適用範囲、出典を記録します。外部からインポートしたライセンス情報には出典を付け、あなた自身の申告として扱いません。',
        points: [
          { title: '認証ではない', body: '申告は法的な認証ではなく、誰かの編集権限を変更するものでもありません。' },
          { title: '不明な点は不明と記載', body: '誰がいつライセンスを付与したかわからない場合は、不明と記載します。' },
          { title: '絞り込みに利用', body: 'ライセンスを条件にして、必要な条項に合うプログラムを検索できます。' },
        ],
      },
      lock: {
        label: '依存関係',
        headline: '依存関係は、各エコシステムのルールに沿って。',
        lead: 'REZICS はパッケージの依存関係を解析する際、各エコシステム固有の識別情報、バージョン順、依存関係の意味を保ち、結果を特定のファイルに固定します。',
        points: [
          { title: '必須と推奨', body: '必須の依存関係や競合と、推奨する組み合わせや注意事項を分けて記録します。' },
          { title: '削除されたバージョン', body: '削除されたバージョンはエコシステムのルールに沿って扱います。既存の固定情報には当時選んだファイルを残します。' },
          { title: '個別に報告', body: '出典が見つからない、ライセンスに非対応、予算超過と、解決不能な問題を区別して報告します。' },
          { title: '見つからないことは、依存がないことではない', body: '依存関係の情報を取得できない場合も、依存なしとはみなしません。' },
        ],
      },
      statement: {
        text: 'インストールしても、実行を許可したことにはなりません。',
        sub: 'パッケージのスクリプトは、明示的な同意後に実行します。',
        note: 'REZICS のインストール手順では、検証済みのファイルだけを受け付け、隔離された一時領域に置きます。',
      },
      maintenance: {
        label: '公開後',
        headline: '公開後のメンテナンス。',
        rows: [
          { title: 'スクリーンショットと申告', body: 'スクリーンショット、プライバシー、アクセシビリティの申告には提供者を明記します。' },
          { title: '情報の撤回', body: '特定のプラットフォームの情報が古くなった場合、その記録を撤回できます。プログラム、リリース、ディスカッションは削除されません。' },
          { title: '販売情報', body: '販売する場合は、価格、地域、有効期限を一覧にし、価格の変更も記録します。' },
          { title: 'スタッフ', body: 'メンテナーとコントリビューターの役割を記載します。別のプロジェクトに移っても、プロフィールは同じです。' },
        ],
      },
      closing: '一度の公開で、誰もが同じ情報を確認。',
    },

    connections: {
      hero: {
        headline: '依存先も拡張機能も、同じプログラムにつながる。',
        lede: 'ゲームMod、MCP サーバー、スキル、API はそれぞれ REZICS にプロフィールを持ち、方向付きの関連で必要なプログラムにつながります。どちら側からも相手を確認できます。',
      },
      relations: {
        label: '関連の名称',
        headline: 'すべての関連に、名前と方向があります。',
        lead: '関連の両方向にそれぞれの表現があり、どの言語でも意味が通じます。',
        rows: [
          { title: '依存する／依存される', body: '必須の依存関係です。これがないと動作しません。' },
          { title: '推奨する／推奨される', body: 'あると便利ですが、なくても動作します。' },
          { title: '競合する', body: '両方をインストールすると問題が起きます。どちらから見ても同じ関係です。' },
          { title: 'フォーク元／フォーク', body: '別のグループが引き継いで独立してメンテナンスしているプロジェクトです。' },
          { title: '代替できる／代替される', body: '同じ用途に使える別のプログラムです。理由を添えます。' },
        ],
      },
      kinds: {
        label: '他の種類',
        headline: '他の種類とのつながり。',
        rows: [
          {
            kind: 'games',
            line: 'Modとローダー',
            body: 'ゲームModはゲーム本体に依存し、多くの場合ローダーにも依存します。必須と推奨を分けて記録します。ローダーもソフトウェアで、独自のリリースと互換性情報を持ちます。',
          },
          {
            kind: 'mcp',
            line: 'エージェントから操作',
            body: 'AIエージェントがプログラムを操作する MCP サーバーは別の項目として登録します。プロジェクト、パッケージのリリース、デプロイ済みエンドポイント、実際に確認した機能はそれぞれ別に記録します。',
          },
          { kind: 'skills', line: '依存先として指定', body: 'スキルは必要なプログラムを申告できます。組み合わせる前に機能と環境を照合します。' },
          { kind: 'apis', line: '提供または呼び出し', body: 'プログラムが提供または呼び出す公開 API は、API Hub に独自のバージョンと根拠を持ち、プログラムにつながります。' },
        ],
      },
      people: {
        label: 'スタッフ',
        headline: '開発者のプロフィールも一つ。',
        lead: '同じ人がソフトウェアをメンテナンスし、小説を書き、ゲームをレビューしても、REZICS では一つのプロフィールです。スタッフ欄が作品をつなぎます。フォローすれば、どの種類の新作も確認できます。',
      },
      statement: {
        text: '名前が同じだけでは不十分。関連には出典を。',
        sub: 'AIエージェントは提案だけを行い、同一のものと勝手に判断しません。',
      },
      closing: 'どちら側からも、相手を見つけられます。',
    },
  },
} satisfies MiniSite<SoftwareStrings>;

export default site;
