// 社群 /engine/community/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md). The section shapes are shared with create and trust.
import type { Item, MiniSite } from '../schema';

/** A v3 section: eyebrow, serif heading, lead text and an optional hairline facts list. */
export interface ModuleSection {
  label: string;
  headline: string;
  lead?: string | string[];
  facts?: Item[];
  note?: string;
}

/** The module family's strings: the ring of the five modules and the page's closing line. */
export interface ModuleFamilyStrings {
  closing: string;
}

/** A number written into the rules: a numeral, its unit and one sentence. */
export interface Figure {
  value: string;
  unit: string;
  body: string;
}

/** A large serif statement; `sub` is its muted second half. */
export interface ModuleStatement {
  statement: string;
  sub: string;
  body?: string;
}

export interface CommunityStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  person: ModuleSection;
  lead: ModuleSection & {
    /** The post's byline as two kinds of reader see it (示意). */
    specimen: {
      toggleLabel: string;
      toggle: [string, string];
      you: string;
      realm: string;
      follow: string;
      post: string;
      caption: string;
    };
  };
  realm: ModuleSection;
  leave: ModuleStatement;
  ratings: ModuleSection & { figures: Figure[] };
  follow: ModuleSection;
  feed: ModuleSection;
  recognition: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CommunityStrings = {
  contentsLabel: 'このページの内容',
  hero: {
    headline: '話すのはあなた、場を用意するのはコミュニティです。',
    lede: '公開プロフィールは一つです。レビュー、リスト、ライブラリはあなたについてきます。コミュニティごとに話題やルール、運営の仕組みがありますが、あなたをその一員として囲い込むことはありません。',
    imageAlt: '大きな濃い灰色の紙片を、たくさんの小さな紙片が囲んでいます。同じテーブルを囲む人々のようです。',
  },
  person: {
    label: '身分',
    headline: '一つのプロフィールで、どのコミュニティにも。',
    lead: 'ペンネームを使えますが、他人になりすますことはできません。ライブラリ、リスト、レビュー、作品、翻訳、ディスカッションはこのプロフィールに結びつき、どのコミュニティにも属しません。別のコミュニティに移っても、あなたは同じ一人です。',
    facts: [
      { title: '名前を変えてもつながる', body: '名前を変えても、以前の URL は新しい名前に転送されます。他の人と見分けにくい名前は使えません。' },
      { title: '作品を自分のものとして登録', body: 'データベースにあなたの作品が登録済みなら、そのプロフィールを自分のものとして登録できます。' },
      { title: 'フォローは一方向', body: '誰かがあなたをフォローするとき、許可を待つ必要はありません。あなたが拒否することもできます。通知の種類や頻度は、フォローする人が設定します。' },
      { title: '投稿はその場に残る', body: 'コミュニティを離れても、そこに投稿した内容はあなたの名前とともに残ります。' },
      {
        title: 'コミュニティとして発信するとき',
        body: 'コミュニティも自らの名前でおすすめや決定を発信できます。権限を与えられた代表だけが発信でき、おすすめにはそれを決めた記録がつながっています。コミュニティに投稿しても、投稿がコミュニティの発言になるわけではありません。',
      },
    ],
  },
  lead: {
    label: '署名',
    headline: '投稿の署名には、決まった順番があります。',
    lead: '投稿にはあなたとコミュニティの名前が両方表示されます。あなたを知らない人には名前だけでは伝わりにくいため、まずコミュニティ名を表示します。あなたをフォローしている人には、あなたの名前を先に表示します。',
    specimen: {
      toggleLabel: '見る人を切り替える',
      toggle: ['あなたをフォローしている人', 'まだフォローしていない人'],
      you: 'あなた',
      realm: 'ファンタジー小説読書会',
      follow: 'フォロー',
      post: '第3巻の結末は、思っていたより静かでした。',
      caption: '例：同じ投稿でも、見る人によって署名の順番が変わります。',
    },
    facts: [
      { title: 'あなたをフォローしている人', body: 'あなたの名前を先に表示します。' },
      { title: 'コミュニティに属さない投稿', body: 'あなたの名前から表示します。' },
      { title: 'それ以外の場合', body: 'コミュニティ名を先に表示し、同じ行にフォローボタンを置きます。' },
      { title: 'コミュニティのおすすめと決定', body: 'コミュニティ名だけを表示し、選んだ人の名前は表示しません。' },
    ],
    note: '先に表示する側を先頭に置き、アイコンと太字で示します。表示順は固定され、同じ投稿でも毎回変わることはありません。',
  },
  realm: {
    label: 'コミュニティ',
    headline: '場をつくり、ルールを決める。',
    lead: '誰が参加できるか、新しいメンバーに何を見せるか、コンテンツをどう管理するか。各コミュニティが決め、設定を公開します。',
    facts: [
      { title: '3つの参加方法', body: '自由参加、申請制、招待制から選べます。参加するとコミュニティをフォローします。離れると、参加によって追加されたフォローだけが解除されます。' },
      { title: 'ルールは言語ごとに', body: '中国語を使うメンバーには中国語版を、日本語を使うメンバーには日本語版を表示します。投稿する言語に制限はありません。' },
      {
        title: '公開しても検索対象にしない',
        body: 'コミュニティを公開しても、検索、レコメンド、サイトマップに表示しない設定にできます。非公開コミュニティが申請を受け付ける場合、外部の人に見えるのは名前、紹介、ルール、申請ボタンだけです。',
      },
      { title: '通報を案件として扱う', body: 'メンバーから通報された内容は案件として扱います。対応結果には理由を添え、関係者は異議を申し立てられます。' },
      { title: '投票で決める', body: 'コミュニティは投票を実施できます。可決された決定で実行できるのは、そのコミュニティに認められたことだけです。' },
      { title: 'プラットフォームのルールが優先', body: 'コミュニティはプラットフォームより厳しいルールを定められますが、緩めることはできません。所有者がコミュニティを閉鎖することはできません。運営または権利上の問題がある場合は、プラットフォームが非公開にし、再公開することがあります。' },
    ],
  },
  leave: {
    statement: 'いつでもコミュニティを離れられます。',
    sub: 'プロフィールもライブラリもリストも、そこに属していないからです。',
  },
  ratings: {
    label: '評価',
    headline: '評価には、問いと対象と評価者を。',
    lead: [
      '評価には、何を問うか、何を評価するか、誰が評価したかを記します。問いが異なる評価は平均しません。各話の評価は作品全体に含めず、特定の版への評価はその版に残します。',
      '点数をつけずにレビューを書くこともできます。物語、翻訳、朗読、制作のどれを評価するかと、対象の版を明記します。初期設定では全体の評価を表示し、その横に参加中のコミュニティと評価数の多いコミュニティを並べます。評価がない場合、0点や空の分布図は表示しません。',
    ],
    figures: [
      { value: '5', unit: '件の評価', body: '作品は評価が5件に達すると平均を表示します。それまでは件数と分布を表示し、平均の表示までに必要な件数を案内します。' },
      { value: '10', unit: '件の評価', body: '各話の登場人物など、細かい対象は評価が10件に達すると平均を表示します。' },
      { value: '50', unit: '件の評価', body: 'ランキングに掲載するには、評価が50件以上必要です。ランキングでは平均値と重み付けを公開します。' },
    ],
    note: 'しきい値は初期設定です。評価の種類に応じて変更できます。',
  },
  follow: {
    label: 'フォロー',
    headline: '気になるものをフォロー。',
    lead: '人、組織、コミュニティ、作品、トピック、リスト、保存した検索条件をフォローできます。通知は「すべて」「おすすめのみ」「オフ」から選べます。',
    facts: [
      { title: '人與組織', body: '初期設定會通知你新作品和公告。' },
      { title: '作品', body: '理解できる言語で新しい章や版が追加されると通知します。「読書中」にすると自動的にフォローします。' },
      { title: 'コミュニティ', body: '初期設定では、一般の投稿は通知せず、告知と決定だけを通知します。' },
      { title: 'トピックと検索条件', body: '初期設定では通知せず、それぞれホームのタブに表示します。' },
      { title: 'リスト', body: '種類の異なる作品を一つのリストにまとめられます。小説の次にアニメやゲームを並べることもできます。各項目にメモを添え、順番を決めて、いつでもリスト全体をエクスポートできます。' },
      { title: '通知をオフにしても大切な連絡は届く', body: '通知をオフにしても、返信やメンションなど、あなたに直接関係することは通知されます。' },
    ],
  },
  feed: {
    label: 'フィード',
    headline: '新着順に並び、既読もわかります。',
    lead: 'フォロー中のフィードを「新着順」にすると、時刻順に表示されます。別の並び順を選んだ場合も、その基準を確認できます。',
    facts: [
      { title: '「おすすめ」はコミュニティごとに集計', body: '「おすすめ」順では各コミュニティを個別に集計します。一つのコミュニティだけでページが埋まらず、小さなコミュニティも表示されます。' },
      { title: 'おすすめの理由を表示', body: 'おすすめはフォロー、言語、ライブラリだけを参考にします。各項目に理由を表示し、おすすめ機能全体をオフにすることもできます。' },
      { title: 'ミュート、無視、ブロック', body: 'それぞれ異なる機能を、一つのメニューにまとめています。' },
      { title: '通知の受け取り先', body: '受信箱、プッシュ通知、定期メールの概要を個別に設定できます。メールの配信はいつでも停止できます。' },
    ],
  },
  recognition: {
    label: 'レベル',
    headline: '採用された貢献を評価します。',
    lead: '各コミュニティには独自の経験値とレベルがあります。採用され、実際に役立ったレビュー、修正、翻訳、運営、創作が経験値になります。レベルは消費も譲渡もできず、管理権限を示すものでもありません。複数のアカウントで経験値を増やす行為は利用規約に違反します。',
  },
  family: {
    closing: 'ページを自由に設計して、コミュニティのサイトをつくりましょう。',
  },
};

export default {
  id: 'community',
  base: '/engine/community/',
  name: 'コミュニティ',
  theme: { module: 'community' },
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: 'コミュニティ：一つのプロフィールでどこへでも',
        description:
          'REZICS の公開プロフィールは一つです。ライブラリ、リスト、レビューはどのコミュニティにもついてきます。コミュニティは場とルール、運営を提供します。評価には問いと対象を明記し、フォローと通知は自分で設定できます。',
      },
    },
  ],
  strings,
} satisfies MiniSite<CommunityStrings>;
