// The modules overview (/engine/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The kind picker reads each kind's eight parts and notes from kinds.ts. Shared module-ring
// labels live in modules.ts.
// Placeholders in braces are filled at build time.
import type { MiniSite, ModuleId, PartId } from '../schema';
import { site as shared } from '../site';

export interface EngineStrings {
  hero: { headline: string; lede: string; alt: string };
  picker: {
    label: string;
    headline: string;
    lead: string;
    legend: string;
    /** `{kind}` */
    listTitle: string;
    /** `{kind}` */
    link: string;
    note: string;
  };
  statement: [string, string];
  parts: { label: string; headline: string; lead: string; toggle: string; example: string; examples: Record<PartId, string> };
  modules: { label: string; headline: string; lead: string; roles: Record<ModuleId, string> };
  config: { label: string; headline: string; lead: string; items: { title: string; body: string }[]; note: string };
  closing: string;
}

export default {
  id: 'engine',
  base: '/engine/',
  name: shared.nav.engine,
  next: 'universal-index',
  pages: [
    {
      slug: '',
      label: '概要',
      meta: {
        title: 'REZICSのモジュール：15のパーツ、5つのモジュール',
        description:
          '本、アニメ、ゲームからMCP Hubまで、9種類すべてが同じ15のパーツでできています。種類を選び、使われている8つのパーツと、それらが属する5つのモジュールを確認できます。',
      },
    },
  ],
  strings: {
    hero: {
      headline: '9種類を、同じパーツで。',
      lede: '本、アニメ、ゲーム、ソフトウェア、MCPサーバーも同じです。どの種類も共通の15のパーツから8つを選んで構成します。',
      alt: '濃淡の異なる灰色の紙を階段状に重ね、一番上に5枚の小さな色紙を並べています',
    },
    picker: {
      label: '9種類',
      headline: '種類を選び、使われている8つのパーツを確認します。',
      lead: 'パーツの名前は共通ですが、役割は種類によって異なります。本の版は翻訳や合本、ゲームの版はプラットフォームや地域です。',
      legend: '種類を選ぶ',
      listTitle: '{kind}で使う8つのパーツ',
      link: '{kind}へ',
      note: '種類ごとに必要な共通パーツを組み合わせています。ここでは、その種類をよく表す8つを紹介します。',
    },
    statement: ['パーツは一度だけ作り、', '種類に合わせて組み替えます。'],
    parts: {
      label: '15のパーツ',
      headline: '15のパーツが、それぞれの役割を担います。',
      lead: '同じパーツでも、種類によって役割が異なります。目録では用途と例を紹介します。',
      toggle: 'パーツの一覧と例を見る',
      example: '例',
      examples: {
        identity: '同じ作者が小説とゲームを手がけると、両方のクレジットが同じ人につながります。',
        names: 'ビジュアルノベルの日本語の原題、中国語訳、ローマ字表記を並べ、どの名称からも検索できます。',
        editions: '3冊の合本は1件のリリースとして記録し、収録された3冊はそれぞれ作品として残します。',
        credits: '声優、役、作品を同じ記録にまとめ、その場で確認できます。',
        relations: 'アニメには「原作」、原作には「翻案作品」と表示します。両方とも同じ関係記録を参照します。',
        facets: '「女性が主人公で、小説を原作とするアニメ」をビューとして保存し、名前を付けてフォローできます。',
        ratings: '同じオーディオブックでも、物語、翻訳、朗読を別々に評価できます。',
        discussion: '読書の進捗に合わせてディスカッションを表示し、未読の結末を先に見せません。',
        wiki: '人物ページの情報ボックスはグラフ上の事実を読み取ります。一度修正すれば、使っているすべてのページに反映されます。',
        lists: '入門用リストに小説、マンガ、アニメを順に並べ、それぞれに理由を添えます。',
        progress: '日本語版を1巻から10巻まで読み終えた後、中国語版では11巻から続けられます。',
        follow: '保存したビューをフォローすると、条件に合う新しい項目が追加されたときに通知が届きます。',
        offers: '入手状況が分からない場合は不明と表示し、在庫ありとは表示しません。',
        specs: '互換性の記録には、クライアント、バージョン、確認日を記載します。',
        schedule: '告知、予定、確定、延期を個別の状態として記録します。',
      },
    },
    modules: {
      label: '5つのモジュール',
      headline: 'パーツは用途に応じて5つのモジュールに属します。',
      lead: '各モジュールはいくつかのパーツを使い、一つの問いに答えます。信頼は例外で、すべてのパーツに関わり、出典、権利、プライバシーを扱います。',
      roles: {
        'universal-index': 'これは何か',
        community: '人はどう関わるか',
        zones: 'サイトをどう構成するか',
        create: 'どう作り、届けるか',
        trust: '何を根拠に信頼するか',
      },
    },
    config: {
      label: '新しい種類',
      headline: '新しい種類は設定で加えられます。',
      lead: '新しい種類を加えるために、専用のバックエンドを作る必要はありません。パーツはそろっており、5つの設定を用意します。',
      items: [
        { title: '語彙', body: 'この種類の分類と属性を決め、既存の語彙をできるだけ使います。' },
        { title: '対応付け', body: '外部データの各項目を、グラフのどの属性に対応させるか決めます。' },
        { title: '初期データ', body: '最初の項目と、それらを結ぶ関連情報を用意します。' },
        { title: '保存したビュー', body: 'よく使う絞り込み条件を、インデックスやタブにします。' },
        { title: 'Zone', body: 'これらのページを、この種類の拠点となる一つのサイトにまとめます。' },
      ],
      note: '新しい動作が必要になれば一度だけ実装し、新しいパーツとして必要な種類に追加できます。',
    },
    closing: '気になる種類から始めましょう。ほかの8種類も同じアカウントで使えます。',
  },
} satisfies MiniSite<EngineStrings>;
