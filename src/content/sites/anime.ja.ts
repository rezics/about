// The 動畫 site: every visible string of /anime/ and its six inner pages, in the v3 parts (hero,
// sections, tile masonry, photo rows, statements, facts lists, closing). The plan is in
// src/sites/anime/SITE.md under "v3"; claims and sources in src/sites/anime/facts.md. Example
// data is generic and marked 示意; the one real work named is 《魔法禁書目錄》, text only
// (.temp/sites/EXAMPLE-WORK.md).
import type { KindId, MiniSite, PartId } from '../schema';

/** A title and its line: facts rows, tiles. */
export interface Row {
  title: string;
  body: string;
}
/** A still-life from the site's paper series (public/images/sites/anime/<src>-<w>.avif|webp). */
export interface Photo {
  src: 'hero' | 'weeks' | 'covered' | 'threads' | 'sources';
  alt: string;
}
/** An inner page's opening: the h1 and its line. */
export interface Head {
  headline: string;
  lede: string;
}
/** A section: eyebrow in columns 1 to 3, the h2, a lead. */
export interface Section {
  eyebrow: string;
  headline: string;
  lead?: string;
}
/** Large serif: `text`, then `muted` in muted ink, and an optional note under it. */
export interface Statement {
  text: string;
  muted: string;
  note?: string;
}
/** The final invitation, specific to the subject of each page. */
export interface ClosingCopy {
  headline: string;
  body: string;
}

export type AnimeStrings = {
  common: {
    /** Eyebrow of the section that leads to the next pages. */
    onward: string;
    /** Caption under generic example data. */
    example: string;
  };
  landing: {
    closing: ClosingCopy;
    hero: Head & { photo: Photo };
    pages: Section & { lines: { slug: string; line: string }[] };
    schedule: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    next: Statement;
    spoilers: { eyebrow: string; headline: string; body: string; link: string; photo: Photo };
    parts: Section & { notes: Partial<Record<PartId, string>> };
    neighbours: Section & { tiles: { to: KindId; label: string }[] };
  };
  seasons: {
    closing: ClosingCopy;
    head: Head;
    marks: Section & { rows: Row[] };
    zones: { eyebrow: string; headline: string; body: string[]; photo: Photo };
    known: Section & { rows: Row[] };
    years: Section;
    /** One line that previews the next page. */
    next: string;
  };
  tracking: {
    closing: ClosingCopy;
    head: Head;
    statuses: Section & { rows: Row[] };
    seasons: Section & { tiles: Row[] };
    rewatch: Section;
    lists: Statement;
    next: string;
  };
  discussion: {
    closing: ClosingCopy;
    head: Head;
    spoiler: { eyebrow: string; headline: string; body: string; photo: Photo };
    position: Section & { rows: Row[] };
    conversations: Section & { rows: Row[] };
    spaces: Section & { tiles: Row[] };
    unseen: Statement;
    next: string;
  };
  ratings: {
    closing: ClosingCopy;
    head: Head;
    anatomy: Section & { rows: Row[] };
    episodes: Statement;
    targets: Section & { rows: Row[] };
    lists: Section & { tiles: string[] };
    next: string;
  };
  credits: {
    closing: ClosingCopy;
    head: Head;
    record: Section & { rows: Row[] };
    voice: { eyebrow: string; headline: string; body: string; photo: Photo };
    studio: Section;
    next: string;
  };
  adaptations: {
    closing: ClosingCopy;
    head: Head;
    example: { eyebrow: string; headline: string; body: string; photo: Photo };
    /** Generic family: each tile in the colour of its kind (null: a relation still to confirm). */
    family: Section & { tiles: { kind: KindId | null; relation: string; name: string }[] };
    scoped: Section;
    relations: Section & { rows: Row[] };
    orders: Statement;
    next: string;
  };
};

const site: MiniSite<AnimeStrings> = {
  id: 'anime',
  base: '/anime/',
  name: 'アニメ',
  theme: { kind: 'anime' },
  pages: [
    {
      slug: '',
      label: '概要',
      meta: {
        title: 'アニメ：放送予定、進捗、ディスカッション、原作',
        description:
          'REZICSではアニメの放送予定を確認し、各話を見終えたら記録できます。各話にディスカッションと評価があり、声優、制作会社、原作も同じ作品につながっています。',
      },
    },
    {
      slug: 'seasons',
      label: 'クールと放送',
      meta: {
        title: 'アニメのクールと放送予定',
        description:
          'アニメは一年を四つのクールに分けて放送が始まります。REZICSでは各クールの新作と各話の放送時刻を、あなたのタイムゾーンで一覧できます。日付しか分からない場合は日付だけを表示し、通知はカレンダーに書き出せます。',
      },
    },
    {
      slug: 'tracking',
      label: '進捗を記録',
      meta: {
        title: 'アニメの進捗を一話ずつ記録',
        description:
          'REZICSではアニメの進捗を「見たい」「視聴中」「視聴済み」「一時停止」「視聴中止」の五つの状態で記録できます。一話見終えるごとに記録し、シリーズの順番に沿って次の話を確認できます。再視聴は別に記録でき、リストはインポートも一括エクスポートもできます。',
      },
    },
    {
      slug: 'discussion',
      label: '各話のディスカッション',
      meta: {
        title: 'アニメのディスカッション：各話にスレッド',
        description:
          'REZICSでは、アニメの各話に専用のディスカッションスレッドがあります。ネタバレを含む内容はあらかじめ隠され、読みたいときに自分で開けます。Wiki+は視聴済みの話まで表示され、コミュニティはZoneで独自のアニメサイトを作れます。',
      },
    },
    {
      slug: 'ratings',
      label: '評価とリスト',
      meta: {
        title: 'アニメの評価、レビュー、リスト',
        description:
          'REZICSでは、評価の対象、尺度、評価人数、評価したコミュニティを明記します。作品全体と各話は別々に評価し、レビューには点数を付けなくてもかまいません。リストは並べ替えやメモの追加、エクスポートができます。',
      },
    },
    {
      slug: 'credits',
      label: '制作と出演',
      meta: {
        title: 'アニメのスタッフと声優',
        description:
          'REZICSでは、監督、脚本家、制作会社、声優それぞれに個別のプロフィールがあります。クレジットには役職と作品を記し、声の出演はキャラクターにもつながります。人や会社をフォローすると、新作の発表を確認できます。',
      },
    },
    {
      slug: 'adaptations',
      label: '原作と翻案',
      meta: {
        title: 'アニメの原作と翻案',
        description:
          'REZICSでは、アニメと原作の小説や漫画、続編、ゲーム化作品にそれぞれ個別のページがあり、関係をたどれます。アニメと原作の進捗は別々に記録し、設定の違いにはそれぞれ出典を示します。',
      },
    },
  ],
  strings: {
    common: {
      onward: '次に読む',
      example: '例。',
    },
    landing: {
      closing: {
        headline: '今クールに見るアニメを、自分の予定に。',
        body: 'REZICSで見たいアニメを整理し、進捗を記録して、各話のディスカッションに参加できます。',
      },
      hero: {
        headline: '放送開始から最終話まで、一話ずつ追えます。',
        lede: '各クールの話数と放送時刻を、あなたのタイムゾーンで予定表に表示します。一話見終えるごとに記録でき、声優、制作会社、原作もこのアニメにつながっています。',
        photo: {
          src: 'hero',
          alt: 'ばら色の長い紙を十二面に折り、温かみのある白い紙の上に立てています。端には炭色と灰紫色の紙が重なっています。',
        },
      },
      pages: {
        eyebrow: '6ページ',
        headline: '放送予定から原作まで。アニメの六つの側面を、それぞれのページで紹介します。',
        lines: [
          { slug: 'seasons', line: '各クールの放送予定をタイムゾーンで表示' },
          { slug: 'tracking', line: 'シリーズ順に次の話を確認' },
          { slug: 'discussion', line: '未視聴の展開を先に隠す' },
          { slug: 'ratings', line: '各話と作品全体を別々に評価' },
          { slug: 'credits', line: '名前ごとに個別のプロフィール' },
          { slug: 'adaptations', line: '原作、続編、スピンオフを関係図でつなぐ' },
        ],
      },
      schedule: {
        eyebrow: '放送予定',
        headline: '深夜1時の初回放送を、あなたの時刻で表示します。',
        body: '日本の放送予定では深夜を「火曜25:00」と表記します。これは水曜午前1時です。REZICSはあなたのタイムゾーンに合わせて時刻を変換します。情報源に日付しかない場合は、日付だけを表示します。',
        link: 'クールと放送予定',
        photo: {
          src: 'weeks',
          alt: '細いばら色の紙片が四列に並び、週ごとの予定表のように見えます。一本は灰紫色で、一か所が空いています。',
        },
      },
      next: { text: '次の話はどれか、', muted: '確認済みの順序に沿って探せます。' },
      spoilers: {
        eyebrow: '各話のディスカッション',
        headline: '各話にディスカッションがあり、未視聴の内容は隠れています。',
        body: '各話にディスカッションスレッドがあります。進捗より先の内容はあらかじめ隠され、読みたいときに自分で開けます。Wiki+も初期設定では視聴済みの話まで表示します。',
        link: 'ネタバレの境界',
        photo: {
          src: 'covered',
          alt: 'ばら色の紙を数面に折り、平らに置いています。後半は、端が少しめくれた炭色の紙で覆われています。',
        },
      },
      parts: {
        eyebrow: '8つの構成要素',
        headline: 'アニメが使う8つの構成要素。',
        lead: '書籍、漫画、ゲームも同じ構成要素を使っています。アニメでは8つを選び、放送予定を識別情報の隣に置きます。',
        notes: {
          identity: '中国語、日本語、英語のタイトルは、すべて同じアニメを指します。続編や映画には、それぞれ独立したアイデンティティがあります。',
          schedule: '放送開始日、各話の放送時刻、延期、中止を一つの予定表にまとめます。',
          credits: '監督、脚本、制作会社は役割ごとに記録し、声優の記録は声優とキャラクターにつながります。',
          relations: '原作、続編、スピンオフ、リメイクの関係をそれぞれ明記し、原作のページからもたどれます。',
          progress: '視聴した話数、放送に追いついたか、次の話をそれぞれ記録します。',
          ratings: '作品全体と各話を別々に評価し、評価数と評価したコミュニティを表示します。',
          discussion: '各話にディスカッションスレッドがあり、進捗より先の内容は自分で開くまで隠れます。',
          wiki: 'Wiki+の各情報には出典となる話数が記載され、視聴した話数まで表示されます。',
        },
      },
      neighbours: {
        eyebrow: '関連する種類',
        headline: '原作と翻案作品は、それぞれ別のページに。',
        lead: '原作は小説、漫画、ビジュアルノベルの場合があり、アニメがゲーム化されることもあります。それぞれの作品に個別のページがあり、関係をたどれます。同じ声優は、どの形式でも同じプロフィールにつながります。',
        tiles: [
          { to: 'books', label: '小説原作' },
          { to: 'manga', label: '漫画原作とコミカライズ' },
          { to: 'visual-novels', label: 'ビジュアルノベル原作' },
          { to: 'games', label: 'ゲーム化作品と共通の声優' },
        ],
      },
    },
    seasons: {
      closing: {
        headline: '見たいアニメを、自分の時間に合わせて。',
        body: '今クールの新作から放送予定を確認し、次の話の通知を設定できます。',
      },
      head: {
        headline: '年4クール、それぞれに放送予定。',
        lede: 'アニメの多くは1月、4月、7月、10月に放送を開始します。追いかけている作品の開始日と各話の時刻を、一つの予定表で確認できます。',
      },
      marks: {
        eyebrow: '5つの状態',
        headline: '発表、放送日決定、配信、延期、中止は、それぞれ異なる状態です。',
        rows: [
          { title: '発表', body: '発表済みで、日付は未定です。' },
          { title: '放送日決定', body: '放送日が決まり、時刻が分かる場合は時刻も表示します。' },
          { title: '視聴可能', body: 'どの地域、どの配信サービス、どの言語で視聴できるかを確認できます。' },
          { title: '放送延期', body: '予定日が変更されても、変更履歴を確認できます。' },
          { title: '中止', body: '放送中止もそのまま表示し、記録に残します。' },
        ],
      },
      zones: {
        eyebrow: 'あなたのタイムゾーン',
        headline: '同じ話の放送時刻を、あなたのタイムゾーンで表示します。',
        body: [
          '放送時刻はあなたのタイムゾーンで表示します。同じ話でも、場所によって日付や時刻が変わります。',
          '日本の放送予定にある「火曜25:00」は水曜午前1時です。台北では水曜午前0時、ロサンゼルスでは火曜午前に当たります。',
        ],
        photo: {
          src: 'weeks',
          alt: '細いばら色の紙片が四列に並び、週ごとの予定表のように見えます。一本は灰紫色で、一か所が空いています。',
        },
      },
      known: {
        eyebrow: '分かっていることだけを記録',
        headline: '日付、時刻、視聴できるかを分けて表示します。',
        rows: [
          {
            title: '時刻が不明なら表示しない',
            body: '情報源に日付しかない場合は、日付だけを表示して「時刻未定」と記します。時刻を推測して補いません。',
          },
          {
            title: '放送と視聴可能は別',
            body: '放送日が分かっていても、あなたの地域で視聴できるとは限りません。地域や配信サービスごとに字幕や吹き替えの有無を分けて表示し、不明な場合は不明と記します。',
          },
          {
            title: '通知とカレンダー',
            body: 'アニメをフォローすると、指定した時刻に通知を受け取れます。放送予定はカレンダーファイルにエクスポートできます。情報源で時刻が変わると通知に表示され、変更を反映するかどうかは自分で決められます。',
          },
        ],
      },
      years: {
        eyebrow: '年別',
        headline: '年ごとに、最後の作品まで閲覧できます。',
        lead: '年を選ぶと、その年に公開されたアニメをデータに基づいて一覧できます。最後まで続けて閲覧できます。総数の集計が終わるまでは、「少なくとも」の件数を表示します。',
      },
      next: '最新話に追いつくことと、作品を最後まで見ることは別です。',
    },
    tracking: {
      closing: {
        headline: '次は前回見たところから再開できます。',
        body: '視聴中のアニメをライブラリに追加し、各話と再視聴を記録できます。',
      },
      head: {
        headline: '一話見終えるごとに、進捗を更新できます。',
        lede: '視聴中のアニメを一話ずつ記録します。配信中の最新話まで追いつくこと、放送済みの全話を見終えること、作品全体が完結することは別の状態としてREZICSに表示されます。',
      },
      statuses: {
        eyebrow: '5つの状態',
        headline: '「見たい」「視聴中」「視聴済み」「一時停止」「視聴中止」を使い分けられます。',
        lead: '視聴記録は、自分で共有を選ばない限り非公開です。',
        rows: [
          { title: '見たい', body: 'まずライブラリに追加します。新しい情報があれば通知します。' },
          { title: '視聴中', body: '視聴した話数を記録します。新しい話が公開されると、通知設定に応じてお知らせします。' },
          { title: '視聴済み', body: '作品全体を見終えた状態です。同じストーリーのWiki+は、初期設定ですべての展開を表示します。' },
          { title: '一時停止', body: '視聴を中断しても、進捗はそのまま残ります。' },
          { title: '視聴中止', body: '視聴をやめても記録は残り、いつでも再開できます。' },
        ],
      },
      seasons: {
        eyebrow: 'シリーズをまたぐ進捗',
        headline: 'シリーズの順番に沿って次の話を確認できます。',
        tiles: [
          { title: '第1期', body: '全12話を視聴済み。次は第2期' },
          { title: '第2期', body: '全6話を視聴済み。放送中の話まで視聴' },
          { title: '特別編', body: '追加エピソード。完結状況には影響しません' },
        ],
      },
      rewatch: {
        eyebrow: '再視聴',
        headline: '再視聴は新しい記録として残ります。',
        lead: '最初から見直した場合は別に記録し、初回の完了日はそのまま残します。見た年だけ覚えている場合は、年だけを記録できます。',
      },
      lists: {
        text: '自分のリストはいつでも持ち出せます。',
        muted: '他の場所で作ったリストをインポートできます。ここで記録した状態、進捗、評価も一括でエクスポートできます。',
      },
      next: '第8話を見終えたら、その話のディスカッションスレッドへ進めます。',
    },
    discussion: {
      closing: {
        headline: '見終えた話の感想を、ディスカッションに残せます。',
        body: '同じ話を見た人と感想を交わせます。先の展開は、追いついてから読めます。',
      },
      head: {
        headline: '見終えた話について話せます。',
        lede: 'ディスカッションスレッドは各話にあり、作品全体のスレッドから探す必要はありません。コミュニティに参加しなくても、他の人の投稿を読めます。',
      },
      spoiler: {
        eyebrow: 'ネタバレの境界',
        headline: 'ネタバレの範囲は、視聴済みの話までです。',
        body: 'ネタバレとして指定された内容は隠され、自分で開くと表示されます。開いても、その内容をネタバレとして報告したことにはなりません。',
        photo: {
          src: 'covered',
          alt: 'ばら色の紙を数面に折り、平らに置いています。後半は、端が少しめくれた炭色の紙で覆われています。',
        },
      },
      position: {
        eyebrow: '表示位置',
        headline: 'ネタバレを表示する位置を自分で決められ、ページを移動しても引き継がれます。',
        rows: [
          { title: '表示位置は自分で設定', body: 'ログインすると、Wiki+は初期設定で視聴済みの最終話まで表示します。話数を選ぶことも、すべて表示することもできます。' },
          { title: '未ログインでもネタバレを防止', body: 'ログインしていない場合は、最初の展開が明かされる前まで表示します。' },
          { title: 'ページを移動しても設定を保持', body: 'ディスカッションからレビュー、Wiki+へ移動しても、選んだ版とネタバレの表示位置が引き継がれます。' },
        ],
      },
      conversations: {
        eyebrow: '会話',
        headline: '三種類の会話を分けて表示します。',
        lead: '投稿の種類がそれぞれ分かります。',
        rows: [
          { title: 'ファン同士のディスカッション', body: 'ストーリーやキャラクターについて話し、次の展開を予想します。' },
          { title: 'レビューへの返信', body: '特定のレビューへのやり取りは、そのレビューの下に表示します。' },
          { title: '情報の修正', body: '放送日や声優の情報に誤りがあれば、出典を添えて修正提案の下で話し合えます。' },
        ],
      },
      spaces: {
        eyebrow: 'コミュニティ',
        headline: 'コミュニティは独自のサイトを持つこともできます。',
        lead: 'Zoneの情報欄にも、作品ページと同じ事実が表示されます。',
        tiles: [
          { title: 'コミュニティ', body: 'メンバー、ルール、管理を備えたコミュニティ' },
          { title: 'Zone', body: 'コミュニティのサイト。キャラクターページ、各話ガイド、年表、関係図を備え、URLもコミュニティが設定できます' },
        ],
      },
      unseen: { text: 'まだ見ていない展開は、', muted: '知らなくても大丈夫です。' },
      next: '物語と制作面は、分けて評価できます。',
    },
    ratings: {
      closing: {
        headline: '作品と一緒に、感想を残せます。',
        body: '各話や作品全体を評価してレビューを書き、また見たい作品をリストにまとめられます。',
      },
      head: {
        headline: '評価の対象を、点数と一緒に表示します。',
        lede: '同じアニメでも、ストーリーや各話の作画など、異なる質問で評価できます。REZICSでは質問、尺度、人数、評価したコミュニティを点数と一緒に表示し、異なる質問の点数を混ぜません。',
      },
      anatomy: {
        eyebrow: '評価の例',
        headline: '5段階評価で4.2点。',
        rows: [
          { title: '質問', body: '第8話の作画です。各話と作品全体の評価は別々に集計します。' },
          { title: '評価基準', body: '5段階評価の平均は4.15点で、4.2点と表示されます。' },
          { title: '人数', body: '20人です。評価数が少ない場合は人数と分布だけを表示し、平均は表示しません。' },
          { title: '得点分布', body: '5点が10人、4点が6人、3点が2人、2点が1人、1点が1人です。' },
          { title: 'コミュニティ', body: 'あるファンコミュニティの評価です。REZICS全体や他のコミュニティの評価に切り替えて比較できます。' },
        ],
      },
      episodes: {
        text: '各話は各話、',
        muted: '作品全体は作品全体です。',
        note: '各話の評価はそれぞれ独立しています。作品全体の評価には、作品全体を評価した人の点数だけを使います。合算する場合は、方法と対象話数を別に明記します。',
      },
      targets: {
        eyebrow: 'レビュー',
        headline: 'どの部分についてのレビューかを明記します。',
        lead: 'レビューに点数を付ける必要はありません。',
        rows: [
          { title: 'ストーリー', body: 'あらすじ、キャラクター、結末。' },
          { title: '制作', body: '作画、音楽、演出。' },
          { title: '翻訳', body: '特定の言語版の字幕翻訳です。どの版かを明記します。' },
          { title: 'この話', body: '一話だけを扱うレビューは、その話に表示します。' },
          { title: '特定の話に登場するキャラクター', body: '「この話でのキャラクターの描写」も別の質問として、独自に評価できます。' },
        ],
      },
      lists: {
        eyebrow: 'リスト',
        headline: 'リストは好きな順番に並べられます。',
        lead: 'アニメだけでなく、原作小説、漫画、ゲームもリストに追加できます。各項目にメモを添え、好きな順に並べて、一括エクスポートできます。他の人のリストをフォローすると、新しい項目が追加されたときに通知します。',
        tiles: ['見る順番', '今クールに視聴中', '週末に一気見', '原作とアニメの比較'],
      },
      next: '監督、制作会社、声優から、それぞれが関わった作品をたどれます。',
    },
    credits: {
      closing: {
        headline: '名前から次の作品を見つけられます。',
        body: '監督、作画スタッフ、声優のクレジットから、作品を支える人々を知ることができます。',
      },
      head: {
        headline: 'エンドクレジットの名前から作品へ。',
        lede: '監督、脚本家、作画監督、制作会社、声優には、REZICSでそれぞれ個別のプロフィールがあります。名前を開くと、参加した作品と各作品での役割を確認できます。',
      },
      record: {
        eyebrow: 'クレジット1件',
        headline: 'クレジットには5つの情報を記載します。',
        rows: [
          { title: '誰が', body: '個人または会社のプロフィールにつながります。' },
          { title: '役職', body: '監督、脚本、作画、声の出演など、役職名は各言語で表示します。' },
          { title: 'どの作品か', body: 'どの作品か、原版か各言語の吹き替え版かを記します。' },
          { title: 'キャラクター', body: '声の出演では、同じクレジットで声優、キャラクター、作品をつなぎます。' },
          { title: '名義', body: '当時の表記名を記録します。名前が変わっても、同じ人のプロフィールにつながります。' },
        ],
      },
      voice: {
        eyebrow: '声優',
        headline: '声優ごとに一つのプロフィール。',
        body: 'アニメで演じたキャラクターも、ゲームやビジュアルノベルでの出演も、同じページに表示します。フォローすると新作の発表を通知します。',
        photo: {
          src: 'threads',
          alt: 'ばら色の紙の端に小さな穴が並び、3本の糸がそれぞれ青、灰紫、ばら色の小さな紙片につながっています。',
        },
      },
      studio: {
        eyebrow: '制作会社',
        headline: '制作会社ごとの作品年表。',
        lead: '会社は個人と同じく独立したプロフィールを持ち、アカウントやコミュニティには属しません。制作したアニメを年ごとに並べて表示します。',
      },
      next: 'このアニメの原作を、作品同士のつながりからたどれます。',
    },
    adaptations: {
      closing: {
        headline: '好きなアニメから原作へ。',
        body: '翻案やスピンオフの関係をたどって、小説、漫画、ゲームを見つけ、それぞれの進捗を記録できます。',
      },
      head: {
        headline: 'どの翻案作品からも原作へ。',
        lede: 'アニメ、原作小説や漫画、続編、スピンオフ、ゲーム化作品は、REZICSでそれぞれ別の作品として登録され、種類を明記した関係でつながっています。どの作品からでも、ほかの作品をたどれます。',
      },
      example: {
        eyebrow: '例',
        headline: '一つの物語に、さまざまな形。',
        body: 'たとえば『とある魔術の禁書目録』は、鎌池和馬によるライトノベルが原作で、漫画、3期のアニメ、映画に翻案されています。スピンオフ『とある科学の超電磁砲』にも、独自の漫画とアニメがあります。REZICSではそれぞれ別の作品として登録し、翻案、続編、スピンオフのどの関係かを明記します。',
        photo: {
          src: 'sources',
          alt: '縦長の深緑色の紙、小さな炭色の紙、横長のばら色の紙を少しずつずらして重ね、横に青い小さな紙を置いています。',
        },
      },
      family: {
        eyebrow: '関係図',
        headline: '原作との関係を作品ごとに明記します。',
        lead: '未確認の関係も非表示にせず、確認待ちと明記します。',
        tiles: [
          { kind: 'books', relation: '原作小説', name: '原作小説' },
          { kind: 'manga', relation: '原作から翻案', name: '漫画版' },
          { kind: 'anime', relation: '原作から翻案', name: 'アニメ第1期' },
          { kind: 'anime', relation: '第1期の続編', name: 'アニメ第2期' },
          { kind: 'books', relation: 'スピンオフ', name: 'スピンオフ小説' },
          { kind: 'games', relation: 'アニメからゲーム化', name: 'ゲーム化作品' },
          { kind: 'visual-novels', relation: '原作から翻案', name: 'ビジュアルノベル化作品' },
          { kind: null, relation: '関係は確認待ち', name: '別の翻案作品' },
        ],
      },
      scoped: {
        eyebrow: 'それぞれ別に記録',
        headline: 'アニメと原作は、別々に記録します。',
        lead: 'アニメを見終えても、原作小説の進捗は読了にはなりません。同じキャラクターが原作では生き残り、アニメではそうでない場合も、両方の描写を残します。それぞれの作品と、何話または何章で明かされたかを記します。',
      },
      relations: {
        eyebrow: '関係',
        headline: '関係には名前があり、両側から確認できます。',
        lead: '関係名は各言語で表示します。一方のページで「原作」と表示される関係は、もう一方では「翻案先」と表示されます。',
        rows: [
          { title: '翻案', body: 'ある作品を別の形式にします。たとえば小説をアニメ化します。' },
          { title: '続編', body: '前作の物語の続きを描きます。たとえば第2期です。' },
          { title: 'シリーズ', body: '同じシリーズの作品も、それぞれ個別のプロフィールを持ちます。' },
          { title: 'リメイク', body: '最初から作り直した別の作品として登録し、旧作とつなぎます。' },
          { title: 'スピンオフ', body: '同じ物語から派生した別の物語です。' },
        ],
      },
      orders: {
        text: '放送順と視聴順は、',
        muted: '異なる場合があります。',
        note: '作品は発表された順に並びます。初めて見る人におすすめの順番を伝える場合は、理由を添えて別の視聴順リストを作れます。',
      },
      next: '多くのアニメの物語は、漫画から始まります。',
    },
  },
};

export default site;
