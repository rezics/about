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
  name: mod.name,
  theme: { module: 'zones' },
  pages: [
    {
      slug: '',
      label: '概要',
      meta: {
        title: 'Zone：共通のグラフ上にサイトを作る',
        description:
          'ZoneはコミュニティがREZICSの共有データ上に作る完全なサイトです。ルート、テンプレート、ナビゲーション、テーマを決められます。Wiki+の構成、ネタバレ対策、改訂方法を紹介します。',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: shared.nav.engine,
      headline: '独自のサイトに、共通のデータ。',
      lede: 'Zoneには独自のホーム、ナビゲーション、レイアウトがあります。サイトの見た目はコミュニティが決め、作品、人物、事実には共通のデータを使います。',
      alt: '濃い灰色の紙で屋根のない小さな家を折り、正面にドアを開けています。二つの部屋にはローズ色と青色の小さな紙があります',
    },
    routes: {
      label: 'ルート',
      headline: 'URL配下の階層を、コミュニティが決めます。',
      lead: '各ルートには固有のアイデンティティがあり、パスには日本語を使えます。詳細ページにはこのZoneに登録されたデータだけを表示します。ルートを作ってもデータは増えません。ナビゲーションは別のツリーで、順序を自由に決められます。',
      caption: '例：『とある魔術の禁書目録』Wiki+のルート',
      entries: [
        { title: 'ホーム', path: '/z/index-wiki' },
        { title: '作品', path: '/z/index-wiki/作品一覧' },
        { title: '『新約』', path: '/z/index-wiki/作品一覧/新約', depth: 1 },
        { title: '人物', path: '/z/index-wiki/人物紹介' },
        { title: '読む順番', path: '/z/index-wiki/読書順', note: 'カスタムページ' },
        { title: '年表', path: '/z/index-wiki/年譜' },
        { title: '検索', path: '/z/index-wiki/検索' },
      ],
      note: 'パスはZoneのルート表で管理します。プラットフォームが予約している語は少なく、URLを奪うことはありません。ディスカッションはコミュニティ側の/r/index-wikiにあり、両方を相互にリンクします。',
    },
    templates: {
      label: 'テンプレート',
      headline: '最も具体的なテンプレートから探します。',
      lead: 'ページの各セクションには、現在のデータ、その属性、文書、リスト、保存済みクエリのいずれかを紐付けます。セクション内のリストは最後まで表示できます。',
      steps: [
        { title: 'ルート指定', body: 'このルートにテンプレートが指定されていれば、それを使います。' },
        { title: '種類', body: '指定がなければ、その種類のテンプレートを使います。たとえば、すべての人物に同じテンプレートを使います。' },
        { title: '構造', body: '種類ごとの指定がなければ、属する構造のテンプレートを使います。' },
        { title: '汎用ページ', body: 'それもなければ汎用ページを使います。名称、識別子、記述と出典、双方向の関連をすべて表示します。' },
      ],
      note: 'なじみのない種類に本のボタンを流用せず、その種類に必要なパーツだけをページに表示します。',
    },
    themes: {
      label: 'テーマ',
      headline: 'テーマで外観を変えても、保護機能は変わりません。',
      lead: 'ブランド、色、書体、レイアウトはコミュニティが決めます。プラットフォームが管理する機能は、どのテーマでも維持されます。',
      items: [
        { title: 'コミュニティが決める', body: 'ロゴ、色、書体、レイアウト。' },
        { title: 'プラットフォームが保護', body: 'アイデンティティ、検索、言語の切り替え、出典、アクセシビリティ。' },
        {
          title: '独自の表示コード',
          body: '必要に応じて、Zoneに独自の表示コードを追加できます。コードは事前審査を受け、読者はいつでも標準レイアウトに切り替えられます。バックエンドは一つのままです。',
        },
      ],
    },
    wiki: {
      label: 'Wiki+',
      headline: 'Wiki+は読んだところで止まります。',
      lead: 'Wiki+は作品専用のZoneです。人物、場所、年表、読む順番にそれぞれページがあります。情報ボックスはグラフ上の事実を読み取り、同じ事実を使う別のページにも反映します。',
      items: [
        { title: 'ログイン前', body: '物語の冒頭から表示し、まだ明かされていない事実は隠します。' },
        { title: 'ログイン後', body: '既定では読了したところまで表示します。すべて表示することも選べます。' },
        {
          title: '一度の操作で作成',
          body: 'テキストを持つ人は、自分のコンピューターでAIエージェントを選び、人物、場所、関連、出来事を章ごとに整理できます。各項目に位置と短い引用を添えて提案をまとめて送信します。審査担当者が承認した後に公開され、REZICSが全文を受け取ることはありません。',
        },
        { title: 'コミュニティが決定', body: 'エージェントに下書きを作らせるか、生成した記事を受け入れるかは、各コミュニティが決めます。' },
      ],
    },
    shared: {
      label: '共有',
      headline: 'サイトは独立し、データは共有します。',
      lead: '繁体字中国語のWiki+と英語の読書会サイトで、同じ作品や人物を共有できます。前者は『とある魔術の禁書目録』、後者はA Certain Magical Indexと記しますが、同じアイデンティティにつながります。名称、紹介、順序、採用する見解はそれぞれが決めます。',
      more: '一つのZoneに本、アニメ、ゲームをまとめ、作品世界全体のサイトを作れます。',
      alt: '濃い灰色の折り紙を二つ独立して折り、一つは手前、もう一つは奥に、同じ水色の紙帯の上に置いています',
    },
    log: {
      label: '改訂',
      headline: '改訂のたびに履歴を残します。',
      lead: '改訂はルート、ナビゲーション、テンプレート、テーマ、クエリをまとめた一つの版です。公開前にプレビューと検証ができ、公開後は前の版への復元やサイト全体の書き出しができます。',
      caption: '例：同じWiki+の改訂履歴',
      entries: [
        { title: '第3版', body: '「読む順番」ページを追加し、ナビゲーションを更新。プレビューと検証の後に公開。' },
        { title: '第2版', body: '人物ページに新しいテンプレートを適用。公開後に第1版へ復元。' },
        { title: '第1版', body: 'ホーム、作品、人物、年表。公開。' },
      ],
      items: [
        { title: '4種類の権限', body: 'サイト編集、公開、コミュニティ管理、グラフへの貢献を別々に付与します。レイアウトを変更する人がグラフ上のデータも変更できるとは限りません。' },
        { title: '2つの設定', body: '公開するかどうかと、検索やおすすめに表示するかどうかは別々に設定します。' },
        { title: '共通の仕組み', body: '人はWebで、エージェントはAPIで編集しますが、仕組みは同じです。' },
      ],
    },
    closing: 'REZICSでZoneを作り、コミュニティ独自のサイトを立ち上げましょう。',
  },
} satisfies MiniSite<ZonesStrings>;
