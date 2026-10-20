// 路線圖 (/roadmap/), designed by modules agent A (src/sites/engine/SITE.md, "v3"). A sequence
// without dates or status labels: one engine across every kind, one community at a time.
import type { MiniSite } from '../schema';
import { site as shared } from '../site';

export interface Item {
  title: string;
  body: string;
}

export interface RoadmapStrings {
  hero: { headline: string; lede: string; alt: string };
  order: { label: string; headline: string; lead: string; steps: Item[] };
  further: { label: string; headline: string; lead: string; items: Item[] };
  statement: [string, string];
  promises: { label: string; headline: string; lead: string; items: Item[] };
  constant: { label: string; headline: string; items: Item[] };
  closing: string;
}

export default {
  id: 'roadmap',
  base: '/roadmap/',
  name: shared.nav.roadmap,
  pages: [
    {
      slug: '',
      label: '概要',
      meta: {
        title: 'REZICSのロードマップ：横断するエンジン、順次開くコミュニティ',
        description:
          'REZICSのエンジンは一つで、コミュニティを一つずつ開いています。9種類はすでにREZICSで利用でき、今後加わる種類も同じパーツを使います。新しい機能も一度だけ実装します。',
      },
    },
  ],
  strings: {
    hero: {
      headline: 'エンジンは共通に、コミュニティは一つずつ。',
      lede: 'REZICSは分野ごとに別のシステムを作りません。一つのエンジンがすべての種類を支え、コミュニティは一つずつ機能を深めていきます。',
      alt: '濃い灰色の紙がロールから長く広がり、その上に6枚の小さな色紙が順に置かれています',
    },
    order: {
      label: '順序',
      headline: '日付ではなく、順序を示します。',
      lead: '各段階は前の段階を土台にし、そこで築いたアイデンティティと関連情報を引き継ぎます。',
      steps: [
        { title: '共通パーツ', body: '15のパーツを共有し、それぞれ一度だけ実装して、種類に応じて使います。' },
        {
          title: '9種類',
          body: '本、アニメ、マンガ、ゲーム、ソフトウェア、ビジュアルノベル、MCP Hub、Skill Hub、API HubをREZICSで利用できます。レシピも扱います。作品ごとのWiki+とライブラリの進捗管理もその一部です。',
        },
        { title: 'コミュニティを一つずつ', body: '今後は一度に一つのコミュニティを開きます。すでに取り組む人がいて、グラフに新しい関連を加えられることが条件です。' },
        {
          title: 'さらに多くの種類',
          body: 'インタラクティブ小説、SFとファンタジーの書誌、モデルと評価を順次加えます。種類を追加する作業は設定で行い、専用のバックエンドコードは増やしません。',
        },
        {
          title: '新しい機能',
          body: '新しい動作が必要になれば一度だけ実装し、必要な種類で使えるようにします。場所、統計、ランキング、自動化、チャレンジ、記録の読み込み、招待、名称の認証、有料会員も同じ方法で加えます。',
        },
      ],
    },
    further: {
      label: 'さらに多くの種類',
      headline: '9種類の先にも、広がります。',
      lead: '以下も同じパーツを使います。作品関連のイベント、聖地巡礼の場所、専門書店では場所の機能も使います。',
      items: [
        { title: 'SFとファンタジー', body: 'アンソロジーの各短編を個別の作品として扱います。読みたい翻訳がどの本に収録されているか分かり、重複購入を防げます。' },
        { title: 'インタラクティブ小説', body: '読める短編を探し、必要なインタープリターとプラットフォームを確認して、プレイできる場所へ移動できます。' },
        { title: 'モデルと評価', body: '評価にはモデルの版、テスト条件、データセット、日付を記載します。ユーザーレビューは別に掲載します。' },
        { title: '作品関連イベント', body: '展示会、サイン会、発売イベントを作品、クリエイター、会場、日付につなげます。チケットは主催者のサイトで購入できます。' },
        { title: '聖地巡礼の場所', body: '公開された作品の舞台を、読書や視聴の進捗に応じてネタバレを避けて表示します。個人宅を登録せず、行動履歴も記録しません。' },
        { title: '専門書店', body: '店舗が確認した書店を掲載します。版の在庫状況は提携店舗の情報だけを使い、不明な場合は不明と表示します。' },
      ],
    },
    statement: ['パーツを増やさず、種類を増やします。', '新しい種類も同じエンジンを使います。'],
    promises: {
      label: '一つのグラフ',
      headline: '一つのグラフだからできること。',
      lead: '種類が増えるほど、つながりも増えます。以下のことは、すべての種類が同じグラフにあるから実現できます。',
      items: [
        { title: '物語をたどる', body: '小説、マンガ、アニメ、ゲームを通じ、読む順や見る場所を一つの流れにまとめます。' },
        { title: '次にすることが分かるライブラリ', body: '読むもの、見るもの、遊ぶものを一つのライブラリにまとめ、種類ごとの進捗単位、版、言語を保ちます。' },
        { title: 'リストを計画に', body: '種類をまたぐリストを順番に並べ、メモを付けて、カレンダーや地図にできます。' },
        { title: '一人の活動を追う', body: 'クリエイターをフォローすると、その人の本、ゲーム、制作記録、貢献を一つのアイデンティティで確認できます。' },
        { title: '現実の場所へ', body: 'フォロー中の作品に展示会、サイン会、巡礼地があれば分かります。' },
      ],
    },
    constant: {
      label: '変わらないこと',
      headline: 'これからも変わらないこと。',
      items: [
        { title: '一つのエンジン', body: '分野ごとにサイトを分けず、言語ごとに別のデータベースも作りません。' },
        { title: 'ページを増やさない', body: '広告のためにページを増やしたり、検索順位やAIの引用を狙って大量生成したりしません。' },
        { title: 'クリエイターへの支払い', body: 'クリエイターに支払うべき資金を運転資金に回しません。' },
        { title: '貢献者のライセンス', body: '貢献者の許諾範囲を超えるデータ利用を約束しません。' },
        { title: '場所とイベント', body: '作品やクリエイターに関連するものだけを扱います。' },
      ],
    },
    closing: '新しい種類が加わっても、アカウントと記録はそのまま使えます。',
  },
} satisfies MiniSite<RoadmapStrings>;
