// The games site (遊戲): every visible string of /games/ and its six inner pages.
// Design record: src/sites/games/SITE.md (section "v3"); sources for every claim:
// src/sites/games/facts.md. Example data (one fictional adventure game, its releases, versions
// and playthroughs) is always captioned 示意 on screen; it describes no real game. The one real
// work named is 《魔法禁書目錄》, text only, as an example of how relations are recorded.
import type { KindId, MiniSite } from '../schema';

export type Lang = 'zh' | 'ja' | 'en';
export type Platform = 'pc' | 'console' | 'handheld' | 'mobile';
export type Edition = 'std' | 'deluxe' | 'complete';

export interface Titled {
  title: string;
  body: string;
}

/** A section: the eyebrow, the serif heading and its lead text. */
export interface Head {
  label: string;
  headline: string;
  lead?: string;
}

/** A large statement: the first half in ink, the second half muted. */
export interface Said {
  text: string;
  more: string;
  /** A sentence or two in body size under the statement. */
  note?: string;
}

/** One release of the example game, as the release filter shows it. */
export interface ExampleRelease {
  id: string;
  platform: Platform;
  edition: Edition;
  /** Shown inside the table cell when a cell holds more than one release (regions). */
  region?: string;
  langs: Lang[];
  /** A state instead of languages (announced, no date yet). */
  state?: string;
}

export type GamesStrings = {
  /** The line under every page's closing statement, above 前往 REZICS. */
  closingBody: string;
  /** Alternative text of the paper still-life photographs (public/images/sites/games/). */
  pictures: Record<'hero' | 'store' | 'library' | 'guides' | 'creators', string>;
  example: {
    langNames: Record<Lang, string>;
    platforms: Record<Platform, string>;
    editions: Record<Edition, string>;
    releases: ExampleRelease[];
  };
  landing: {
    hero: { headline: string; lede: string };
    releases: Head & { items: (Titled & { id: string })[]; caption: string; link: string };
    versions: Said;
    store: Head & { link: string };
    pages: Head & { lines: Record<string, string> };
    connections: Head & { tiles: { to: KindId; line: string }[] };
    closing: string;
  };
  releases: {
    hero: { headline: string; lead: string };
    filter: Head & {
      groups: { lang: string; platform: string };
      clear: string;
      none: string;
      result: string;
      resultNone: string;
      corner: string;
      caption: string;
    };
    states: Head & { items: Titled[] };
    languages: Head & { items: Titled[] };
    bundles: Head & { tiles: Titled[]; caption: string };
    requirements: Head & { tiles: Titled[] };
    offers: Said;
    closing: string;
  };
  store: {
    hero: { headline: string; lead: string };
    checkout: Head & { items: Titled[] };
    purchase: Head & { steps: Titled[] };
    keep: Head & { lead: string; more: string };
    privacy: Said;
    refuses: Head & { items: Titled[] };
    closing: string;
  };
  library: {
    hero: { headline: string; lead: string };
    status: Head & { items: Titled[] };
    slots: Head & { columns: [string, string, string]; rows: { slot: string; release: string; state: string }[]; caption: string };
    together: Head & { tiles: { to: KindId; name: string; at: string }[]; caption: string };
    playtime: Head & { items: Titled[]; note: string };
    takeout: Said;
    closing: string;
  };
  reviews: {
    hero: { headline: string; lead: string };
    versions: Head & { tiles: Titled[]; caption: string };
    who: Head & { items: Titled[] };
    targets: Head & { tiles: Titled[] };
    rules: Head & { items: Titled[] };
    talk: Said;
    closing: string;
  };
  guides: {
    hero: { headline: string; lead: string };
    fog: Head;
    guides: Head & { lead: string; more: string };
    rules: Head & { items: Titled[] };
    adaptations: Head & { lead: string; chain: { to: KindId; name: string; line: string; rel?: string }[]; note: string; caption: string };
    zone: Said;
    closing: string;
  };
  creators: {
    hero: { headline: string; lead: string };
    rights: Head & { items: Titled[] };
    ledger: Head & { rows: { label: string; op?: string; total?: boolean }[]; note: string; reserve: string; caption: string };
    name: Head & { tiles: { to?: KindId; name: string; role: string }[]; caption: string };
    home: Head & { lead: string; more: string };
    rules: Said;
    closing: string;
  };
};

const strings: GamesStrings = {
  closingBody: 'バージョンの確認、プレイ記録、レビュー、インディークリエイターからの購入まで、同じアカウントで使えます。',
  pictures: {
    hero: '温かな白い紙の上に、大きな青い台紙があります。一角から濃淡の異なる青、紫、青緑の紙片が扇状に広がっています。',
    store: '青い台紙に切り込みを入れ、薄青色の紙片を通しています。下半分はゆるく巻いています。',
    library: '青い紙で作った浅い箱です。箱の上面に細い切り込みが並び、青、薄青、ローズ、緑の紙片が差し込まれています。最後の切り込みは空いています。',
    guides: '長い青い紙を何度も折り、最初の三つの折り目を広げています。残りは重ね、その上に白い紙を置いています。',
    creators: '青い台紙を小さな屋台の形に折り、横に紫と薄青の紙片を置いています。',
  },
  example: {
    langNames: { zh: '繁体字中国語', ja: '日本語', en: '英語' },
    platforms: { pc: 'PC', console: '家庭用ゲーム機', handheld: '携帯ゲーム機', mobile: 'スマートフォン' },
    editions: { std: '通常版', deluxe: 'デラックス版', complete: '完全版' },
    releases: [
      { id: 'pc-std', platform: 'pc', edition: 'std', langs: ['zh', 'ja', 'en'] },
      { id: 'pc-deluxe', platform: 'pc', edition: 'deluxe', langs: ['zh', 'ja', 'en'] },
      { id: 'console-std', platform: 'console', edition: 'std', langs: ['ja', 'en'] },
      { id: 'console-complete', platform: 'console', edition: 'complete', langs: ['zh', 'ja', 'en'] },
      { id: 'handheld-asia', platform: 'handheld', edition: 'std', region: 'アジア版', langs: ['zh', 'ja'] },
      { id: 'handheld-japan', platform: 'handheld', edition: 'std', region: '日本版', langs: ['ja'] },
      { id: 'handheld-complete', platform: 'handheld', edition: 'complete', langs: ['ja'] },
      { id: 'mobile-std', platform: 'mobile', edition: 'std', langs: [], state: '発表済み' },
    ],
  },

  landing: {
    hero: {
      headline: 'ゲームもバージョンも、正確に記録。',
      lede: 'プラットフォームごとのリリース、バージョン、言語を分けて記録します。評価には対象のバージョンを明記し、攻略と Wiki+ はゲーム本体につなげます。インディークリエイターから、手元に残せるゲームファイルを購入できます。',
    },
    releases: {
      label: 'リリース',
      headline: 'ゲームのリリースを一つずつ記録。',
      lead: 'PC、家庭用ゲーム機、携帯ゲーム機、スマートフォンでのリリースを分けて記録します。地域版、デラックス版、完全版もそれぞれ別のリリースです。言語、動作要件、販売状況を個別に記録します。',
      items: [
        { id: 'handheld-asia', title: '携帯ゲーム機版、アジア版', body: '表示言語：繁体字中国語、日本語。地域：アジア。日本版は別に記録し、表示言語は日本語のみです。' },
        { id: 'pc-std', title: 'PC版、通常版', body: 'テキストと字幕：繁体字中国語、日本語、英語。音声：日本語。三つの言語を分けて記録します。' },
        { id: 'console-complete', title: '家庭用ゲーム機版、完全版', body: '表示言語：繁体字中国語、日本語、英語。内容：本編とすべての追加コンテンツ。それぞれにページと評価があります。' },
        { id: 'mobile-std', title: 'スマートフォン版、通常版', body: '言語：不明。状態：発表済み。情報を確認できるまで、他のプラットフォームの言語で補いません。' },
      ],
      caption: '例：架空のアドベンチャーゲームの4つのリリース。',
      link: 'プレイできるバージョンを探す',
    },
    versions: {
      text: '評価はバージョンごとに集計し、ダウンロード数は順位に使いません。',
      more: '確認できない情報は推測せず「不明」と表示します。',
    },
    store: {
      label: 'ストア',
      headline: '購入したゲームは、手元に残ります。',
      lead: 'REZICS のストアでは、契約を結んだインディークリエイターのゲームとビジュアルノベルを販売しています。DRMもランチャーもありません。著作権はクリエイターが保持し、精算書には控除項目を一つずつ記載します。評価、ディスカッション、Wiki+ も同じページで確認できます。',
      link: 'ストアと購入の流れを見る',
    },
    pages: {
      label: '6つのページ',
      headline: '6つの情報に、それぞれのページ。',
      lines: {
        releases: '言語、プラットフォーム、バージョンをまとめて絞り込む',
        store: '一度購入すれば、購入条件に沿って再ダウンロード',
        library: 'プレイするたびに、プラットフォームを記録',
        reviews: '評価ごとにバージョンと評価者を明記',
        guides: '進行状況に合わせて表示し、各メディア化作品へつなぐ',
        creators: '著作権は保持。控除項目を精算書に明記',
      },
    },
    connections: {
      label: '関連する種類',
      headline: 'ゲームにつながる5つの種類',
      lead: 'メディア化、原作、同じクリエイターを通じて、ゲームと他の種類の作品をつなげます。原作小説からゲームまで追いかけても、読書とプレイの進行状況は別々に記録できます。',
      tiles: [
        { to: 'visual-novels', line: '言語、プラットフォーム、収録範囲からリリースを選ぶ' },
        { to: 'books', line: 'ゲームの原作と、ゲームから生まれた小説' },
        { to: 'anime', line: 'アニメ化されたゲーム、ゲーム化されたアニメ' },
        { to: 'manga', line: '同じ物語の漫画をゲームにつなぐ' },
        { to: 'software', line: 'エンジン、開発ツール、ゲームのバージョンに対応したMod' },
      ],
    },
    closing: '次のゲームは、バージョンを確かめてから。',
  },

  releases: {
    hero: {
      headline: 'プレイできるバージョンを見つける。',
      lead: '必要な言語と使うデバイスが、同じリリースに含まれていることを確認できます。REZICS はプラットフォーム、地域、バージョンを分けて記録し、まとめて絞り込みます。',
    },
    filter: {
      label: '絞り込み',
      headline: '条件は同じリリースに適用。',
      lead: '繁体字中国語と携帯ゲーム機を選ぶと、両方に当てはまるリリースだけが残ります。別のバージョンに中国語があっても、別のプラットフォームに携帯版があっても対象外です。',
      groups: { lang: '語言', platform: 'プラットフォーム' },
      clear: '条件をクリア',
      none: '該当するバージョンはありません',
      result: '条件に合うリリース：{count}件',
      resultNone: 'すべての条件に合うリリースはありません。',
      corner: 'プラットフォーム／バージョン',
      caption: '例：架空のアドベンチャーゲームのリリース。',
    },
    states: {
      label: 'リリース状況',
      headline: '発表から販売終了まで、段階ごとに記録。',
      lead: '日付が変わっても、過去の記録は残ります。ゲームをフォローして、現在の状況を確認できます。',
      items: [
        { title: '発表', body: 'ゲームまたはバージョンの公式発表に、出典を添えて記録します。' },
        { title: '発売予定', body: '発売日が発表された状態です。予定日は告知であり、発売済みではありません。' },
        { title: '発売', body: '購入やプレイが可能になったことを、確認した日付とともに記録します。' },
        { title: '延期', body: '日付が変更されても、以前の日付は記録に残ります。' },
        { title: '配信終了', body: '販売または提供を終了した日付を記録します。' },
      ],
    },
    languages: {
      label: '言語',
      headline: 'テキスト、音声、字幕を別々に記録。',
      lead: '「中国語対応」でも、字幕だけの場合もあれば音声も含まれる場合もあります。REZICS はテキスト、音声、字幕の言語を別々に記録します。翻訳タイトルがあるからといって、翻訳版があるとは限りません。中国語の名前が付いていても、中国語版があるとは限りません。',
      items: [
        { title: '公式の中国語版', body: '販売元が提供する言語を、実際に含まれるリリースに記録します。' },
        { title: 'ファン翻訳', body: '翻訳チームを記載し、対象のバージョンと範囲を明記します。公式版とは表示しません。' },
        { title: '後から追加された言語', body: 'アップデートで追加された言語は新しい言語版として記録します。元のリリースにつなげ、当初の記録は書き換えません。' },
      ],
    },
    bundles: {
      label: 'バンドルと追加コンテンツ',
      headline: '一つのリリースに、複数の作品。',
      lead: 'バンドルに含まれる作品は、それぞれ別の作品として登録します。購入するのは一つのリリースですが、評価やディスカッションは含まれる各作品に残ります。',
      tiles: [
        { title: '完全版', body: '本編とすべての追加コンテンツを収録' },
        { title: '本編', body: 'ゲーム本体に独自の評価' },
        { title: '追加コンテンツ', body: '独立した内容には専用ページを設け、本編につなぐ' },
        { title: 'サウンドトラック', body: '作曲者の作品として登録する音楽作品' },
        { title: 'リメイク', body: '別作品として登録し、原作につなぐ' },
        { title: 'Mod', body: '必要なゲームのバージョンを明記' },
      ],
      caption: '例：完全版と関連作品。内容を変えずに新しいプラットフォームへ移植した場合は、同じゲームの新しいリリースとして登録します。',
    },
    requirements: {
      label: '動作要件',
      headline: '動作要件には、情報源を明記。',
      lead: '同じゲーム、同じデバイスでも、公式の説明と実際の結果が異なることがあります。それぞれを並べて、出典と日付を記録します。',
      tiles: [
        { title: '公式の表示', body: '最低要件と推奨要件に、出典と対象バージョンを明記' },
        { title: 'プレイヤーによる実測', body: '使用したハードウェア、設定、結果、測定日を記録' },
        { title: '未確認', body: '不明、非対応、情報が古い状態を区別' },
      ],
    },
    offers: {
      text: '情報がない場合は、',
      more: '「不明」と表示します。',
      note: '各ストア、各地域での販売状況と価格を日付付きで記録し、価格の変化も確認できます。一つのストアの価格を全体の価格として扱いません。',
    },
    closing: '言語とデバイスを、一つのリリースで照合。',
  },

  store: {
    hero: {
      headline: '一度購入すれば、ファイルは手元に。',
      lead: 'ここで販売するゲームとビジュアルノベルは、REZICS と契約したインディークリエイターの作品です。DRMもランチャーもありません。購入済みのゲームは購入条件に沿って再ダウンロードできます。',
    },
    checkout: {
      label: '購入前に',
      headline: '購入前に、8つの項目を確認できます。',
      lead: '各ゲームのページに掲載し、支払い前に確認できます。',
      items: [
        { title: 'バージョンと言語', body: '購入するバージョンと、含まれる言語。' },
        { title: '動作要件', body: '対応プラットフォームと、動作に必要な条件。' },
        { title: '税込価格', body: '支払う前に税込みの合計金額を確認できます。' },
        { title: '販売者', body: '誰が販売し、誰に支払うのか。' },
        { title: 'ライセンス', body: '購入によって得られる利用権。' },
        { title: '返金条件', body: '返金が可能な条件と手続き。' },
        { title: '外部アカウント', body: '別のアカウントや実行環境が必要な場合は、購入前に明記します。' },
        { title: 'AIの使用について', body: '画像、文章、翻訳にAIを使用したかをクリエイターが申告します。' },
      ],
    },
    purchase: {
      label: '購入の流れ',
      headline: '体験版から再ダウンロードまで、6つの手順。',
      lead: 'ゲームのページで購入でき、評価、ディスカッション、Wiki+ も同じページで確認できます。',
      steps: [
        { title: '体験', body: '体験版をプレイしてから購入を決める' },
        { title: '支払い', body: '一度に支払い、領収書を購入履歴に保存' },
        { title: 'ダウンロード', body: '利用するプラットフォームに合ったファイル' },
        { title: 'アップデート', body: '修正版には更新内容を記載' },
        { title: '再ダウンロード', body: 'パソコンを替えたら、ログインして再ダウンロード' },
        { title: '販売終了後', body: '通常の販売終了後も、元の条件に沿って利用可能' },
      ],
    },
    keep: {
      label: '手元に残るもの',
      headline: '手元に残る3つのもの',
      lead: 'DRMのないゲームファイルは購入条件に沿って再ダウンロードできます。領収書は購入履歴に残り、購入前に明記したライセンスと条件も保存されます。',
      more: 'DRMがなくても、転売や再配布はできません。個人利用のライセンスが付与されます。返金はページに記載した条件に従います。各地域の法律で保障される消費者の権利も適用されます。',
    },
    privacy: {
      text: '購入したゲームが、',
      more: 'クリエイターに知られることはありません。',
      note: 'クリエイターに伝わるのは、会計処理やサポートに必要な情報だけです。購入しても、プレイ記録やリスト、その他の活動が相手に共有されることはありません。',
    },
    refuses: {
      label: '提供しないこと',
      headline: 'このストアが行わないこと',
      items: [
        { title: 'ランチャー不要', body: '購入したゲームをプレイするために、REZICS のプログラムをインストールする必要はありません。' },
        { title: 'DRMなし', body: 'REZICS はファイルに認証チェックを追加しません。' },
        { title: '成人向け作品は販売しない', body: 'R18、R18G の作品は、ラベルの変更やパッチへの分割を含め、ストアで販売しません。' },
        { title: '誰でも出品できるわけではない', body: 'ストアのゲームは REZICS と契約したクリエイターの作品です。権利を確認してから販売します。' },
      ],
    },
    closing: '購入前に確かめ、購入後も手元に。',
  },

  library: {
    hero: {
      headline: 'プラットフォームも種類も越えるライブラリ。',
      lead: 'PC、家庭用ゲーム機、携帯ゲーム機、スマートフォンのゲームを一か所に記録できます。プレイごとにプラットフォームとバージョンを残せます。読んでいる本や視聴中のアニメも一緒に管理できます。',
    },
    status: {
      label: 'ステータス',
      headline: '「プレイしたい」から「クリア」まで。',
      items: [
        { title: 'プレイしたい', body: '「プレイしたい」に追加すると、そのゲームをフォローします。理解できる言語の新しいバージョンが出ると通知します。' },
        { title: 'プレイ中', body: '章立てのあるゲームは、進行状況とバージョンを記録します。ディスカッションと Wiki+ は進行状況に合わせてネタバレを隠します。' },
        { title: '一時中断', body: 'あきらめたわけではなく、いったん休止します。進行状況はそのまま残り、同じ場所から再開できます。' },
        { title: 'クリア', body: 'クリアした記録は作品に残ります。完全版に含まれる追加コンテンツは、それぞれ別に記録します。' },
        { title: '中止', body: 'プレイをやめたら「中止」にできます。記録は残り、再開するときは新しいプレイ記録を始めます。' },
      ],
    },
    slots: {
      label: 'プレイ記録',
      headline: 'プレイするたびに記録を追加。',
      lead: '同じゲームをもう一度プレイしても、新しい記録として残り、前の記録を上書きしません。プレイごとにプラットフォーム、バージョン、進行状況を記録します。',
      columns: ['プレイ', 'プラットフォームとバージョン', 'ステータス'],
      rows: [
        { slot: '1回目', release: '携帯ゲーム機版、アジア版', state: 'クリア' },
        { slot: '2回目', release: 'PC版、バージョン1.2', state: 'プレイ中、第5章' },
        { slot: '3回目', release: '家庭用ゲーム機版、完全版', state: '一時中断、追加コンテンツ' },
      ],
      caption: '例：所持しているバージョンは別に記録します。購入しただけではプレイ済みになりません。',
    },
    together: {
      label: '一つのライブラリ',
      headline: '本、アニメ、漫画、ゲームを一つに。',
      lead: '進行状況は作品の種類に合った単位で記録します。リストには異なる種類をまとめられます。夏休みにプレイするリストにゲームと原作小説、アニメ版を並べて、順番とメモを付け、まとめてエクスポートできます。',
      tiles: [
        { to: 'games', name: 'ゲーム', at: '第5章' },
        { to: 'books', name: '小説', at: '第3巻' },
        { to: 'anime', name: 'アニメ', at: '第8話' },
        { to: 'manga', name: '漫画', at: '第42話' },
        { to: 'visual-novels', name: 'ビジュアルノベル', at: '2つ目のルート' },
      ],
      caption: '例：一人のライブラリにある5種類の作品。それぞれに合う単位で記録します。',
    },
    playtime: {
      label: 'プレイ時間',
      headline: 'クリアまでの時間を、環境と遊び方別に。',
      lead: '今夜プレイする時間が足りるか判断するには、信頼できる目安が必要です。REZICS はプレイヤーが任意で提供した記録だけを集計します。',
      items: [
        { title: 'プラットフォーム別', body: 'PCと携帯ゲーム機の時間は別々に集計します。プラットフォームの記載がない記録も別にまとめます。' },
        { title: '遊び方別', body: 'メインストーリーのみと、すべてを収集する場合は別々に集計します。' },
        { title: 'クリア済みのみ', body: '未クリア、または時間の記録がないプレイは平均に含めません。' },
        { title: '件数を表示', body: '平均の横に、中央値を含む範囲と記録件数を表示します。' },
      ],
      note: 'プレイ時間は初期設定で非公開です。共有を選んだ場合にのみ集計に含まれ、公開されるのは集計結果だけです。',
    },
    takeout: {
      text: 'ライブラリはあなたのもの。',
      more: 'いつでも持ち出せます。',
      note: 'エクスポートは無料です。他の場所からインポートした記録には出典と対応関係を残します。アカウントにログインできない場合も、エクスポートを申請できます。',
    },
    closing: 'プレイしたすべての記録を、自分のライブラリに。',
  },

  reviews: {
    hero: {
      headline: '評価するバージョンを明記してから、採点。',
      lead: 'ゲームは発売後も更新されます。バージョン1.0の評価が2.0を左右すべきではなく、一つのコミュニティの好みを全員の意見として扱うこともありません。そのため、評価にはバージョンと評価者を明記します。',
    },
    versions: {
      label: 'バージョン',
      headline: 'バージョンごとに評価を記録。',
      lead: '評価はプレイしたバージョンに結びつきます。複数のバージョンをまとめた評価は別の数値として表示し、算出方法を明記します。',
      tiles: [
        { title: 'バージョン1.0', body: '発売日のバージョン' },
        { title: 'バージョン1.1', body: 'セーブの問題を修正したアップデート' },
        { title: 'バージョン1.2', body: '新しいステージを追加' },
        { title: 'バージョン2.0', body: '大規模アップデート' },
        { title: '完全版', body: 'すべての追加コンテンツを収録したリリース' },
      ],
      caption: '例：架空のゲームのバージョン。',
    },
    who: {
      label: '評価者',
      headline: '誰が評価したのか',
      lead: 'サイト全体、参加しているコミュニティ、評価数の多いコミュニティの評価を並べて確認できます。「最近」と「すべて」は別々に集計します。',
      items: [
        { title: '件数と分布', body: '評価には件数と分布を添えます。' },
        { title: '件数が足りない場合', body: '評価数が少ない場合は、件数と分布だけを表示し、平均は算出しません。' },
        { title: 'インポートした評価', body: '他のサイトからインポートした評価は別に表示し、REZICS の評価には含めません。' },
      ],
    },
    targets: {
      label: 'レビューの対象',
      headline: '物語、翻訳、制作を分けて評価。',
      lead: 'レビューには対象を明記します。物語を評価し、翻訳を別に評価できます。レビューは点数をつけずに文章だけで投稿することもできます。',
      tiles: [
        { title: '物語', body: 'ストーリーとキャラクター' },
        { title: '翻訳', body: '特定の言語版の翻訳品質' },
        { title: '制作', body: 'ゲームプレイ、映像、音楽、技術面' },
        { title: 'このバージョン', body: '特定のプラットフォーム、バージョンでの実際の動作' },
        { title: 'このバージョンのキャラクター', body: 'キャラクター自体の評価には影響しません' },
      ],
    },
    rules: {
      label: 'ランキング',
      headline: 'ランキングの基準を公開。',
      items: [
        { title: 'ダウンロード数は使わない', body: 'REZICS はダウンロード数を記録しないため、順位付けにも表示にも使いません。' },
        { title: 'おすすめには理由を表示', body: 'コミュニティがゲームをおすすめするときは、決定の記録につなげます。' },
        { title: '人気と正しさは別', body: '評価数は並び順に影響しますが、ゲームの分類や情報は変わりません。' },
        { title: 'ネタバレは別に表示', body: 'コミュニティの投票によるネタバレ表示と、作者自身による警告は別に扱います。' },
      ],
    },
    talk: {
      text: 'ディスカッション、レビュー、情報の修正。',
      more: 'それぞれに専用の場所があります。',
      note: '攻略について話す、レビューに返信する、情報の誤りを指摘する。それぞれの内容に合った場所があります。移動しても、選択したバージョンとネタバレの進行状況は引き継がれます。',
    },
    closing: '評価にはバージョンと評価者を明記。',
  },

  guides: {
    hero: {
      headline: 'プレイしたところまで表示。',
      lead: 'キャラクター、場所、ステージ、攻略を同じゲームにつなげます。Wiki+ は章やルートの進行状況に合わせて、その先のネタバレを隠します。',
    },
    fog: {
      label: 'ネタバレ',
      headline: 'まだプレイしていない部分は非表示に。',
      lead: '指定した位置までのキャラクター、場所、出来事を表示し、その先は隠します。必要に応じて一括表示もできます。ログインしていない訪問者には、初期設定でストーリーの情報を表示しません。',
    },
    guides: {
      label: '攻略',
      headline: '攻略には対象バージョンを明記。',
      lead: '同じステージでも、バージョン1.0と2.0で攻略方法が大きく異なることがあります。攻略には対象のバージョンとプラットフォームを明記するため、どのバージョン向けかすぐにわかります。',
      more: 'コミュニティがまとめたMod集にも、対象のゲームバージョンと互換性の確認状況を記載します。変更履歴には、変更した人と内容が残ります。二つのバージョンを比較したり、変更を元に戻したりできます。',
    },
    rules: {
      label: 'Wiki+',
      headline: 'Wiki+ の5つのルール',
      items: [
        { title: '情報は一か所で更新', body: 'キャラクターの情報パネル、検索条件、リストは同じデータを使います。一か所を更新すると、すべてに反映されます。' },
        { title: 'AIエージェントの提案を人が確認', body: 'エージェントは出典を添えて新しい情報を提案できます。人が確認していない内容は読者に表示されません。' },
        { title: '同じキャラクターには一つのページ', body: 'ゲーム、小説、アニメに登場する同じキャラクターには一つのページを設けます。声優もキャラクターと作品に関連付けて記載します。' },
        { title: 'スクリプトから整理', body: '対応するスクリプト形式のビジュアルノベルでは、スクリプトの権利者が自分のパソコンでローカルツールキットを使い、人物、場所、出来事を場面ごとに整理して提案できます。REZICS に届くのは出典付きの提案で、スクリプト全文は送信されません。' },
        { title: 'すべてエクスポート', body: 'Wiki の内容と編集履歴をエクスポートできます。' },
      ],
    },
    adaptations: {
      label: 'メディア化',
      headline: '原作からゲームまで、作品をつなぐ。',
      lead: 'たとえば『とある魔術の禁書目録』。鎌池和馬によるライトノベルを原作に、漫画、テレビアニメ3期、映画、格闘ゲーム、ビジュアルノベル、スマートフォン向けRPGがあります。REZICS ではそれぞれを別の作品として登録し、「原作」と「メディア化」の関係でつなぎます。同じキャラクターは、どの作品でも同じプロフィールです。',
      chain: [
        { to: 'books', name: 'ライトノベル', line: '本編、『新約』、『創約』' },
        { to: 'manga', name: '漫画', line: '2007年から連載', rel: '原作' },
        { to: 'anime', name: 'アニメ', line: 'テレビアニメ3期と映画', rel: '原作' },
        { to: 'visual-novels', name: 'ビジュアルノベル', line: '2013年のゲーム', rel: '原作' },
        { to: 'games', name: 'ゲーム', line: '格闘ゲームとスマートフォン向けRPG', rel: '原作' },
      ],
      note: '刊行順とおすすめの読む順、プレイ順は別々に記録します。物語の時系列に沿って、最初の出来事から並べることもできます。',
      caption: '『とある魔術の禁書目録』を例に、作品間の関係を示しています。',
    },
    zone: {
      text: 'ゲームのコミュニティに、',
      more: '独自のサイトを。',
      note: 'ゲームごとにメンバー、ルール、ディスカッションのあるコミュニティをつくれます。Zone はコミュニティ独自のサイトです。パス、ナビゲーション、デザインを設定し、攻略と Wiki+ を掲載できます。キャラクターやゲームの情報は REZICS のカタログから取得します。',
    },
    closing: 'プレイしたところまで表示し、各メディア化作品につなぐ。',
  },

  creators: {
    hero: {
      headline: '著作権を保持したまま、ゲームを販売。',
      lead: 'REZICS はインディークリエイターと契約し、ゲームとビジュアルノベルを販売します。プレイヤーはDRMのないファイルとアップデートを入手できます。クリエイターには、項目ごとの精算書と、すべての作品をつなぐプロフィールを提供します。',
    },
    rights: {
      label: '権利',
      headline: '保持する権利、許諾する権利',
      items: [
        { title: '著作権', body: 'ゲームの著作権はあなたが保持します。REZICS は合意した期間と地域で、ファイルを保管、販売、配布する非独占的なライセンスを取得します。' },
        { title: '個別の同意が必要なこと', body: '翻訳、メディア化、大幅な変更、新しいバージョンの作成、作品を使ったAIの学習には、それぞれ個別の同意が必要です。' },
        { title: 'ライセンスの申告', body: '作品に設定したライセンスを、バージョン、範囲、申告日時とともに記録します。' },
        { title: '契約終了後', body: '契約に従って新規販売を停止します。すでに発生した収益は精算し、プレイヤーのライセンスは元の条件と適用法に従って継続します。' },
      ],
    },
    ledger: {
      label: '精算書',
      headline: '精算書に、項目ごとの内訳を。',
      rows: [
        { label: 'プレイヤーの支払額' },
        { label: '預かり税', op: '差し引く' },
        { label: '決済と収納代行の手数料', op: '差し引く' },
        { label: '返金と異議申し立て', op: '差し引く' },
        { label: '純収益', op: '合計', total: true },
        { label: 'あなたへの分配' },
      ],
      note: '同じ費用を二度差し引くことはありません。サーバーやホスティング、人件費、マーケティング、REZICS 自身の所得税をあなたの収益から差し引くこともありません。',
      reserve: '留保金が必要な場合は、その根拠、金額または上限、確認日、解除条件を明記します。',
      caption: '精算書の例。契約に基づく取引手数料、販売地域、調整項目は別途記載します。',
    },
    name: {
      label: '一つのプロフィール',
      headline: '一つのプロフィールで、すべての作品をつなぐ。',
      lead: '開発したゲーム、書いた小説、作曲したサウンドトラック、声を担当したアニメを、同じプロフィールにまとめられます。プレイヤーがあなたをフォローすると、新作や告知を確認できます。',
      tiles: [
        { to: 'games', name: 'ゲーム', role: '開発' },
        { to: 'books', name: '小説', role: '著者' },
        { name: 'サウンドトラック', role: '作曲' },
        { to: 'anime', name: 'アニメ', role: '声優' },
      ],
      caption: 'スタッフ一覧の名前から、それぞれの作品ページにつながります。',
    },
    home: {
      label: 'コミュニティとサイト',
      headline: 'ゲームにコミュニティとサイトを。',
      lead: 'ゲームのコミュニティでプレイヤーが話し合い、Zone を公式サイトとして使えます。告知、リリース記録、更新内容はカタログに直接掲載します。フォロー中のプレイヤーには、設定した言語で通知が届きます。',
      more: '新バージョンの発売前に、画像、説明、スケジュールをまとめたリリースキットを用意できます。メディアとプレイヤーが引用できます。ローカルツールキットで自分のスクリプトを読み込み、人物や出来事を整理してゲームの Wiki+ を作成できます。スクリプト全文が REZICS に送信されることはありません。',
    },
    rules: {
      text: '販売する前に、',
      more: '必要な情報を明記。',
      note: '体験版、説明、スクリーンショット、互換性情報は正確に記載してください。外部アカウントや実行環境が必要な場合は、購入前に明記します。AIの使用状況を正確に申告し、成人向け作品は出品できません。',
    },
    closing: '作品はあなたのもの。精算も明確に。',
  },
};

export default {
  id: 'games',
  base: '/games/',
  name: 'ゲーム',
  theme: { kind: 'games' },
  next: 'software',
  pages: [
    {
      slug: '',
      label: '概要',
      meta: {
        title: 'REZICS ゲーム：カタログ、ストア、ライブラリ',
        description:
          'REZICS では各ゲームに一つのページを設け、プラットフォームとバージョンを分けて記録します。デバイスと言語に合うバージョンを見つけ、プレイごとの記録を残し、インディークリエイターからファイルを購入できます。',
      },
    },
    {
      slug: 'releases',
      label: 'プラットフォームとバージョン',
      meta: {
        title: 'プラットフォームとバージョン：プレイできる版を探す',
        description:
          '同じゲームのPC、家庭用ゲーム機、携帯ゲーム機、スマートフォン版や、地域版、デラックス版、完全版を、REZICS では個別のリリースとして記録します。言語、動作要件、販売情報を分けて記載し、絞り込み条件は一つのリリースにまとめて適用します。',
      },
    },
    {
      slug: 'store',
      label: 'ストア',
      meta: {
        title: 'REZICS ストア：購入したゲームを手元に',
        description:
          'REZICS は契約したインディークリエイターのゲームとビジュアルノベルを販売します。DRMやランチャーは不要で、一度購入すれば条件に沿って再ダウンロードできます。購入前にバージョン、言語、動作要件、税込価格、返金条件を確認できます。',
      },
    },
    {
      slug: 'library',
      label: 'ゲームライブラリ',
      meta: {
        title: 'ゲームライブラリ：プレイごとの記録',
        description:
          'プレイしたい、プレイ中、一時中断、クリア、中止のゲームを一つのライブラリにまとめ、プレイごとにプラットフォームとバージョンを記録します。本、アニメ、漫画も同じ場所で管理できます。無料でいつでもエクスポートできます。',
      },
    },
    {
      slug: 'reviews',
      label: '評価とレビュー',
      meta: {
        title: 'ゲームの評価とレビュー：バージョンを明記',
        description:
          'REZICS のゲーム評価にはバージョンと評価者を明記し、件数と分布を添えます。レビューは文章だけでも投稿でき、物語、翻訳、制作を分けて評価します。ダウンロード数はランキングに使いません。',
      },
    },
    {
      slug: 'guides',
      label: '攻略と Wiki+',
      meta: {
        title: '攻略、Wiki+、メディア化',
        description:
          'ゲームの攻略、キャラクター、場所を Wiki+ に記載します。進行状況に合わせてネタバレを隠し、すべての編集を記録します。小説、アニメ、漫画などのメディア化作品を同じゲームにつなげられます。コミュニティ独自のサイトも作成できます。',
      },
    },
    {
      slug: 'creators',
      label: 'クリエイター',
      meta: {
        title: 'クリエイター：REZICS でゲームを販売',
        description:
          'インディークリエイターは REZICS を通じてゲームとビジュアルノベルを販売できます。著作権を保持し、DRMのないファイルとアップデートを提供できます。精算書には税金、手数料、返金を項目ごとに記載します。一つのプロフィールでゲーム、小説、音楽をつなげられます。',
      },
    },
  ],
  strings,
} satisfies MiniSite<GamesStrings>;
