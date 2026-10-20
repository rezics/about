// The manga site (漫畫): every visible string of /manga/ and its six inner pages, read as the
// site's chapters 第 1 話 to 第 6 話. Design record: src/sites/manga/SITE.md ("v3"); sources for
// every claim: src/sites/manga/facts.md.
import type { Item, KindId, MiniSite, ModuleId, PartId } from '../schema';

/** A section head in the v3 grid: eyebrow in columns 1 to 3, serif h2, optional lead. */
export interface MangaHead {
  eyebrow: string;
  heading: string;
  lead?: string;
}
/** A large serif statement: the first half in ink, the second in muted ink. */
export interface MangaStatement {
  text: string;
  muted?: string;
}
/** One of this site's paper still-life pictures (public/images/sites/manga/). */
export interface MangaPicture {
  name: 'hero' | 'series' | 'progress' | 'adaptations' | 'publish';
  alt: string;
}
/** The intro of an inner page: chapter eyebrow, h1 and lede. */
export interface MangaIntro {
  eyebrow: string;
  headline: string;
  lede: string;
}
/** The closing: a final statement, the action into REZICS, then the next page or site. */
export interface MangaClosing {
  statement: string;
  /** The small label of the next link, e.g. 下一話　第 2 話. */
  nextLabel: string;
  /** The next page's or site's name. */
  nextName: string;
}

export interface MangaStrings {
  /** The action into REZICS (the product's address comes from `site.productUrl`). */
  action: string;
  landing: {
    hero: Omit<MangaIntro, 'eyebrow'> & { picture: MangaPicture };
    parts: MangaHead & { notes: Partial<Record<PartId, string>> };
    pages: MangaHead & { tiles: { slug: string; chapter: string; line: string }[] };
    statement: MangaStatement;
    neighbours: MangaHead & { tiles: { kind: KindId; line: string }[] };
    closing: MangaClosing;
  };
  series: {
    intro: MangaIntro;
    levels: MangaHead & { picture: MangaPicture; items: Item[] };
    catalogue: MangaHead & { items: Item[]; footnotes: string[] };
    names: MangaHead & { body: string[]; items: Item[] };
    closing: MangaClosing;
  };
  progress: {
    intro: MangaIntro;
    language: MangaHead & { picture: MangaPicture };
    caught: MangaHead & { items: Item[] };
    statement: MangaStatement;
    travels: MangaHead & { items: Item[]; footnote: string };
    closing: MangaClosing;
  };
  creators: {
    intro: MangaIntro;
    roles: MangaHead & { items: Item[]; footnotes: string[] };
    person: MangaHead & { tiles: { kind: KindId; line: string }[] };
    statement: MangaStatement;
    closing: MangaClosing;
  };
  adaptations: {
    intro: MangaIntro;
    example: MangaHead & { picture: MangaPicture; items: Item[]; footnote: string };
    relations: MangaHead & { items: Item[]; footnote: string };
    apart: MangaHead;
    statement: MangaStatement;
    closing: MangaClosing;
  };
  community: {
    intro: MangaIntro;
    spoilers: MangaHead & { items: Item[] };
    ratings: MangaHead;
    gather: MangaHead & { items: Item[]; footnote: string; tiles: { module: ModuleId; line: string }[] };
    closing: MangaClosing;
  };
  publish: {
    intro: MangaIntro;
    steps: MangaHead & { picture: MangaPicture; items: Item[] };
    decides: MangaHead & { items: Item[] };
    elsewhere: MangaHead;
    closing: MangaClosing;
  };
}

export default {
  id: 'manga',
  base: '/manga/',
  name: '漫画',
  theme: { kind: 'manga' },
  pages: [
    {
      slug: '',
      label: '概要',
      meta: {
        title: '漫画：第1話から最新刊まで',
        description:
          'REZICSは漫画ごとに1つのアイデンティティを作り、連載の各話、各言語の単行本と翻訳版をその下にまとめます。読んだ話までを記録し、選んだ言語で次の巻を待っている場合はその巻を示します。同じところまで読んだ人と話すこともできます。',
      },
    },
    {
      slug: 'series',
      label: 'シリーズ',
      meta: {
        title: '漫画の巻、話、翻訳版',
        description:
          'シリーズと各単行本はそれぞれ作品として登録し、各話は巻の中の番号付きの位置として記録します。合本は収録範囲だけを記録します。日本語版と台湾版は同じ作品として扱い、翻訳者はそれぞれに記載するため、重複して数えません。',
      },
    },
    {
      slug: 'progress',
      label: '進捗',
      meta: {
        title: '漫画の進捗：どの話まで読んだか',
        description:
          '話ごとに漫画の進捗を記録するため、巻や合本、端末をまたいでも続きから読めます。読む言語を替えても、読了した巻はそのまま反映されます。次の話に選んだ言語の版がない場合は、どの巻を待っているかを知らせます。',
      },
    },
    {
      slug: 'creators',
      label: '著者',
      meta: {
        title: '漫画の著者：原作、作画、翻訳者',
        description:
          '漫画のクレジットには担当を明記し、原作、作画、イラスト、翻訳者を分けて掲載します。同じ人は小説、漫画、アニメ、ゲームのどこでも同じアイデンティティです。一度フォローすれば、新作やお知らせを確認できます。',
      },
    },
    {
      slug: 'adaptations',
      label: 'メディア化',
      meta: {
        title: '漫画とメディア化：小説、アニメ、ゲーム',
        description:
          '漫画の原作と、漫画から何にメディア化されたかを、REZICSは種類を明記した関係でつなぎます。進捗、評価、ネタバレの範囲は作品ごとに記録し、未確認の関係もそのまま示します。',
      },
    },
    {
      slug: 'community',
      label: 'ディスカッション',
      meta: {
        title: '漫画のディスカッション：読んだ話まで語る',
        description:
          '各話に専用のディスカッションがあり、まだ読んでいない部分は表示されません。評価の対象がシリーズ全体、巻、翻訳版のどれかを明記し、件数と分布も表示します。読者はコミュニティを作り、Zoneを立ち上げ、作品のWiki+を編集できます。',
      },
    },
    {
      slug: 'publish',
      label: '投稿',
      meta: {
        title: 'REZICSで漫画を連載',
        description:
          'REZICSで漫画を投稿できます。1話を画像だけで構成し、タイムゾーンを指定して公開を予約できます。共同制作者を招待し、権限を分けて設定できます。他の人が作った翻訳版は、あなたの同意を得てから公開されます。各ページは原ページに対応し、作品全体をいつでもバックアップできます。',
      },
    },
  ],
  strings: {
    action: 'REZICSへ',
    landing: {
      hero: {
        headline: 'どの話まで読んだか、REZICSが記録します。',
        lede: '単行本、連載の各話、各言語の翻訳版が、同じ漫画につながります。REZICSは進捗を記録し、選んだ言語で次に読む話を探します。',
        picture: {
          name: 'hero',
          alt: '漫画の1ページのように大小の窓を切り抜いた、黒に近い厚紙。窓の1つからローズ色の紙が見えます。',
        },
      },
      parts: {
        eyebrow: '構成',
        heading: '同じ構成要素を、漫画ではこう使います。',
        notes: {
          identity: 'どの翻訳名から探しても、同じ作品が見つかります。',
          editions: '日本版、台湾版、電子版、合本をそれぞれ別のリリースとして記録します。',
          credits: '原作と作画は分けて記載し、翻訳者は担当した版に記録します。',
          relations: 'どの作品を原作とし、何にメディア化されたかを両方向からたどれます。',
          progress: '話ごとに記録し、端末を替えても進捗を引き継げます。',
          ratings: 'どの話、どの翻訳版への評価かを、点数と一緒に明記します。',
          discussion: '話ごとにディスカッションを分け、進捗より先の投稿は折りたたみます。',
          offers: '各言語版の販売場所と、確認した日付を記録します。',
        },
      },
      pages: {
        eyebrow: 'このサイト',
        heading: 'このサイトは6つの話に分かれています。順番に読むことも、気になる話から読むこともできます。',
        tiles: [
          { slug: 'series', chapter: '第1話', line: '巻、話、翻訳版を1つの作品にまとめます' },
          { slug: 'progress', chapter: '第2話', line: 'どの話まで読んだか、端末を替えても続きます' },
          { slug: 'creators', chapter: '第3話', line: '原作、作画、翻訳者をそれぞれ記載' },
          { slug: 'adaptations', chapter: '第4話', line: '小説、漫画、アニメ、ゲームのつながり' },
          { slug: 'community', chapter: '第5話', line: 'ネタバレは折りたたみ、評価の対象を明記' },
          { slug: 'publish', chapter: '第6話', line: '自分の漫画を投稿して連載' },
        ],
      },
      statement: {
        text: '台湾版の刊行済み分を読み終えれば、追いついたことになります。',
        muted: '翻訳版を待っている巻も、REZICSが表示します。',
      },
      neighbours: {
        eyebrow: '関連する種類',
        heading: '同じ物語に、いくつもの形があります。',
        lead: '小説、アニメ、ゲーム、ビジュアルノベルにはそれぞれのアイデンティティがあり、メディア化の関係を通じて漫画からつながります。',
        tiles: [
          { kind: 'books', line: '原作小説とライトノベル' },
          { kind: 'anime', line: 'アニメ化作品の進捗は別に記録' },
          { kind: 'games', line: 'ゲーム化作品、またはゲーム原作' },
          { kind: 'visual-novels', line: '漫画版から原作へつながる' },
        ],
      },
      closing: {
        statement: '第1話から最新刊まで、すべて同じ場所に。',
        nextLabel: '次の話　第1話',
        nextName: 'シリーズ',
      },
    },
    series: {
      intro: {
        eyebrow: '第1話　シリーズ',
        headline: '何十巻、何百話あっても、同じ作品です。',
        lede: 'シリーズ全体は一つの作品で、各巻もそれぞれ作品です。各話は作品内の固定された位置です。合本、新装版、各言語の翻訳版は別に記録し、すべて同じアイデンティティにつなげます。',
      },
      levels: {
        eyebrow: '内訳',
        heading: '連載を分けて見てみましょう。',
        lead: 'シリーズ全体、各巻、各話にはそれぞれの階層があり、最後は同じアイデンティティにまとまります。',
        picture: {
          name: 'series',
          alt: '黒に近い色の薄い本が十数冊きちんと積み重なり、上の数冊は深緑の紙帯で束ねられています。',
        },
        items: [
          { title: 'シリーズ', body: '連載全体が1つの作品です。作者、フォロー、評価はすべてこの作品に属します。' },
          {
            title: '単行本',
            body: '各単行本もそれぞれ1つの作品として、個別に本棚へ追加し、評価やディスカッションができます。巻数は刊行時の番号を保ち、特別な番号の巻も他の巻と混同しません。',
          },
          {
            title: '話数',
            body: '各話は作品内で固定の位置と番号を持ちます。読書の進捗、各話のディスカッション、Wiki+の出典は、すべてこの位置を指します。',
          },
          { title: '合本', body: '合本や完全版には複数の巻が収録されています。REZICSは収録巻だけを記録し、作品を重複して作りません。' },
          {
            title: '翻訳版',
            body: '原文版と各言語の翻訳版は、同じ作品に属します。翻訳版ごとに翻訳者、権利、刊行情報を記録し、有志による翻訳には翻訳元の版も明記します。',
          },
        ],
      },
      catalogue: {
        eyebrow: 'カタログ情報',
        heading: '漫画のカタログ情報。欠けている項目は「未記録」と表示します。',
        items: [
          { title: '刊行形式', body: '連載漫画、または読み切りです。' },
          { title: '初出年', body: '初めて発表された年です。年ごとに作品を絞り込み、最後の1作まで見られます。' },
          { title: '巻数', body: '刊行済みの単行本の巻数です。' },
          { title: '状況', body: '連載中、完結、中断、未発売、または中止です。' },
        ],
        footnotes: [
          '未記録の項目を推測で埋めることはありません。取り込んだカタログ情報には出典とライセンスを明記します。',
          '漫画のZoneでは、書名、形式、状況、刊行年でカタログ全体を絞り込めます。',
        ],
      },
      names: {
        eyebrow: 'タイトルと版',
        heading: '原題を残し、各地の翻訳名も掲載します。',
        body: [
          '漫画の原題、各地の翻訳名、読者によく使われる別名をまとめ、どの名前からでも見つけられます。繁体字中国語の名前を自動で簡体字に変換することはありません。変換する場合は、変換した表記であることを明記します。',
          'どの版を読んでいるかは、個人用に選べます。電子版、新装版、台湾版のどれでも、REZICSは選んだ版を記録します。',
        ],
        items: [
          { title: 'ISBN', body: 'ISBNから、その本と翻訳版、作品全体を見つけられます。' },
          { title: '翻訳名', body: '書名が翻訳されていても、その言語の翻訳版があるとは限りません。' },
        ],
      },
      closing: {
        statement: '巻数が増えても、作品のアイデンティティは1つです。',
        nextLabel: '次の話　第2話',
        nextName: '進捗',
      },
    },
    progress: {
      intro: {
        eyebrow: '第2話　進捗',
        headline: '前回は第12話まで。今回は第13話から。',
        lede: 'REZICSは巻ごとに漫画の各話を並べ、読んだ位置と次の話を示します。スマートフォンで読みかけた話を、パソコンで続きから読めます。',
      },
      language: {
        eyebrow: '言語を替えて読む',
        heading: '言語を替えても、読んだ話はそのまま。',
        lead: '日本語で最初の10巻を読んだ後に繁体字中国語へ切り替えても、その10巻は読了済みです。次に読む話をREZICSが繁体字中国語で探します。繁体字中国語版がまだ出ていない場合は、待っている話を表示します。',
        picture: {
          name: 'progress',
          alt: '黒に近い色の長い紙帯がいくつかの区画に折られ、右端では数区画が平らに重なっています。その部分にローズ色の小さな紙片が挟まれています。',
        },
      },
      caught: {
        eyebrow: '読み終えましたか',
        heading: '「追いついた」にはいくつかの意味があります。REZICSはどの状態かを分けて知らせます。',
        items: [
          { title: 'この言語の最新話まで読了', body: '選んだ言語で読める話をすべて読み終え、次の巻の翻訳版を待っています。' },
          { title: '刊行済み分を読了', body: '原作の刊行済み分まで読み終えましたが、連載は続いています。' },
          { title: 'シリーズ完結', body: '連載は完結しており、新しい話はありません。' },
          { title: '対応関係は未確認', body: 'Web版と単行本の内容が一致しない場合は、未確認と表示します。一方の進捗をもう一方に適用することはありません。' },
          { title: '番外編は進捗に含めません', body: '任意読了に設定された番外編や特別編は読み飛ばせます。作品全体の読了状況には影響しません。' },
        ],
      },
      statement: {
        text: '購入しただけでは、読んだことになりません。',
        muted: '持っている単行本は本棚に記録し、読んだ位置は別に記録します。',
      },
      travels: {
        eyebrow: 'どこでも続く',
        heading: '進捗は端末を替えても引き継がれます。',
        items: [
          { title: '2台の端末', body: 'スマートフォンとパソコンで同じ進捗を記録します。誤って変更しても元に戻せば、もう一方にも反映されます。' },
          { title: '続きを読む', body: 'ホームの一番上にある列を押すと、次の話を開けます。' },
          {
            title: 'フォロー',
            body: '漫画を「読書中」にするとフォローが始まります。選んだ言語で新しい話や巻が出ると通知します。通知は重要なものだけにするか、すべてオフにできます。',
          },
          {
            title: 'インポート',
            body: '他のサイトから漫画のリストをインポートすると、対応するステータス、日付、評価、タグ、非公開のメモを引き継げます。再読回数などの元データは7日間保存されるため、先にバックアップをエクスポートしてください。',
          },
          { title: 'エクスポート', body: '本棚全体をいつでもエクスポートできます。日付やメモも一緒に保存されます。' },
        ],
        footnote: '初期設定では、REZICSは非公開の読書記録をAIモデルの学習に使わず、広告用のプロフィール作成にも使いません。',
      },
      closing: {
        statement: '次回は、読んだ話の続きから。',
        nextLabel: '次の話　第3話',
        nextName: '著者',
      },
    },
    creators: {
      intro: {
        eyebrow: '第3話　著者',
        headline: '物語を書く人と絵を描く人、それぞれに名前があります。',
        lede: '漫画では、物語と作画を別々の人が担当することがあります。REZICSは担当ごとにクレジットを記載し、各人の名前から漫画、小説、アニメなどすべての作品につなげます。',
      },
      roles: {
        eyebrow: 'クレジット',
        heading: 'クレジットは担当ごとに分けて記載します。',
        items: [
          { title: '原作者', body: '物語を考え、書いた人です。' },
          { title: '作画', body: '物語を漫画のページとして描く人です。' },
          { title: 'イラスト', body: '表紙、カラー扉絵、小説の挿絵を描く人です。' },
          { title: '翻訳者', body: '翻訳した版にだけ記載され、別の版には付きません。' },
          { title: 'コンセプト監修', body: '原案を提供した人、または監修を担当した人です。' },
        ],
        footnotes: ['有志の翻訳チームも名前を記載しますが、公式翻訳版として扱うことはありません。', '担当名もデータの一部です。各言語で独自の表記を追加できます。'],
      },
      person: {
        eyebrow: '1人',
        heading: '1つの名前から、さまざまな分野の作品につながります。',
        lead: '画家が小説の挿絵を描き、自分の漫画を連載し、ゲームのアートも担当することがあります。REZICSは作品を同じ人のページにまとめます。フォローすると、新作やお知らせがフィードに表示されます。',
        tiles: [
          { kind: 'books', line: '小説の挿絵' },
          { kind: 'anime', line: 'アニメ化された原作' },
          { kind: 'games', line: 'ゲームのアート' },
        ],
      },
      statement: {
        text: 'クレジットされるのは人であり、アカウントではありません。',
        muted: '作者本人がまだ参加していなくても、クレジットされた作品をまとめたページはすでにあります。',
      },
      closing: {
        statement: '名前のそばに、担当した仕事が記されています。',
        nextLabel: '次の話　第4話',
        nextName: 'メディア化',
      },
    },
    adaptations: {
      intro: {
        eyebrow: '第4話　メディア化',
        headline: '1つの物語に、4つの形。',
        lede: '小説、漫画、アニメ、ゲームは、REZICSではそれぞれ1つの作品です。名前の付いた関係でつながり、漫画から原作にもメディア化作品にもたどれます。',
      },
      example: {
        eyebrow: '一例',
        heading: '例：『とある魔術の禁書目録』。',
        lead: '原作は鎌池和馬が執筆し、灰村キヨタカが挿絵を担当するライトノベルです。REZICSは各メディアをそれぞれ1つの作品として記録し、相互の関係を明記します。',
        picture: {
          name: 'adaptations',
          alt: '深緑、黒に近い色、ローズ色の3枚の紙が、左上から右下へ角を合わせて並んでいます。',
        },
        items: [
          { title: 'ライトノベル', body: '原作です。「旧約」「新約」「創約」の3つのシリーズが、続編の関係で順につながっています。' },
          { title: '漫画', body: 'ライトノベルを原作とし、近木野中哉が作画を担当します。' },
          { title: 'アニメ', body: '同じくライトノベルを原作とし、漫画とは別に進捗を記録します。' },
          { title: '『とある科学の超電磁砲』', body: 'スピンオフ作品です。独自の漫画があり、アニメ化もされています。' },
          { title: 'ゲーム', body: 'そのうちの1作はビジュアルノベルで、ここからビジュアルノベルの分野にもつながります。' },
        ],
        footnote: 'これはREZICSが作品をどのように記録するかを示す例であり、提携やライセンスを示すものではありません。',
      },
      relations: {
        eyebrow: '関係',
        heading: '関係の種類を1つずつ明記します。',
        items: [
          { title: '〜を原作とする', body: '小説、アニメ、ゲームを漫画化した場合や、漫画を別の形式にした場合の関係です。' },
          { title: '続編／前作', body: '物語が前作の続きから始まります。' },
          { title: 'スピンオフ', body: '外伝や脇役の物語を、本編につなげます。' },
          { title: 'リメイク元', body: '作者が書き直し、物語が元の作品と異なる場合は、別の作品として扱います。' },
          { title: 'リブート元', body: '物語を最初から描き直した新しい版です。' },
          { title: '読む順番', body: '刊行順とは別に、物語に沿った読む順番も作成でき、両方を並べて表示できます。' },
        ],
        footnote: '未確認の関係は未確認と表示します。無理につながず、空欄のままにします。',
      },
      apart: {
        eyebrow: '別々に記録',
        heading: 'アニメを見終えても、漫画の進捗は自動では進みません。',
        lead: 'アニメをどこまで見たか、漫画をどこまで読んだかは別々に記録します。漫画とアニメのレビューも分けて絞り込め、評価はそれぞれに付けられます。',
      },
      statement: {
        text: '2つの版で物語が異なる場合、それぞれの事実をWiki+に記録できます。',
        muted: '各事実に対象の版を明記し、どこまで表示するかは読書位置に合わせます。',
      },
      closing: {
        statement: 'それぞれの形を独立して記録し、1つのつながりにまとめます。',
        nextLabel: '次の話　第5話',
        nextName: 'ディスカッション',
      },
    },
    community: {
      intro: {
        eyebrow: '第5話　ディスカッション',
        headline: '話したところまでしか表示されません。',
        lede: 'ディスカッションは各話に付きます。まだ読んでいない箇所への投稿は折りたたまれ、そこまで読むまで表示されません。',
      },
      spoilers: {
        eyebrow: 'ネタバレ',
        heading: '読書位置より先の内容は折りたたまれ、必要なときに自分で開けます。',
        items: [
          { title: 'この話のディスカッション', body: '各話にディスカッションがあります。読むためにコミュニティへ参加する必要はありません。' },
          { title: '折りたたまれたコメント', body: '読書位置より先のコメントは初期状態で折りたたまれています。必要なら自分で開けます。この設定は今回の表示だけに適用されます。' },
          { title: '投票でネタバレを判定', body: 'どの内容をネタバレとするか、読者が投票できます。作者自身の表示とは別に集計します。' },
          {
            title: '3種類の会話',
            body: '物語の話、レビュー、データ修正の相談は、それぞれ別の場所で行います。切り替えても、選んだ版と読書位置は保たれます。',
          },
        ],
      },
      ratings: {
        eyebrow: '評価',
        heading: '評価には対象が明記されます。',
        lead: 'シリーズ全体、各巻、翻訳版にはそれぞれ評価が付き、シリーズ全体の評価を各巻から平均することはありません。評価には件数、分布、評価した人の範囲を表示します。レビューには物語と翻訳のどちらを評価するかを明記でき、評価を付けずに文章だけを書くこともできます。',
      },
      gather: {
        eyebrow: '読者コミュニティ',
        heading: '読者が集まる場所です。',
        items: [
          {
            title: 'コミュニティ',
            body: '漫画の読者はコミュニティを作り、メンバー、ルール、管理者を設定できます。コミュニティのおすすめには、決定に至ったディスカッションがつながります。',
          },
          { title: 'Zone', body: 'コミュニティは作品のためのサイトを作成できます。独自のページ、ナビゲーション、外観を設定しながら、同じデータを共有します。' },
          {
            title: 'Wiki+',
            body: 'キャラクター、場所、年表、各話のガイドは、読んだ話まで表示されます。情報欄の各項目はすべて審査済みの事実です。',
          },
          { title: 'リスト', body: '入門向けのリストや読む順番を作り、作品ごとに理由を添えられます。並べ替えやエクスポートもできます。' },
          { title: 'フォロー', body: '作品、作者、コミュニティをフォローし、それぞれ通知の頻度を設定できます。' },
        ],
        footnote: '年齢区分は個別に設定できます。一般、R15、R18、R18Gを別々に切り替え、未評価の内容には「未評価」と表示します。',
        tiles: [
          { module: 'community', line: '読者がディスカッション、評価、リストを一緒に整理' },
          { module: 'zones', line: 'ZoneとWiki+、コミュニティ独自のサイト' },
        ],
      },
      closing: {
        statement: '1話を読み終えたら、その話の下で語り合えます。',
        nextLabel: '次の話　第6話',
        nextName: '投稿',
      },
    },
    publish: {
      intro: {
        eyebrow: '第6話　投稿',
        headline: 'あなたの漫画は、第1話からアイデンティティを持ちます。',
        lede: 'REZICSで連載する作品は、他の漫画と同じ索引に並びます。読者は同じ進捗、ディスカッション、評価の仕組みで読みます。メディア化や翻訳版も、あなたの作品につながります。',
      },
      steps: {
        eyebrow: '手順',
        heading: '原稿から読者の手元まで。',
        lead: '1話のアップロードから公開まで、各手順を自分で設定でき、作品の記録にも残ります。',
        picture: {
          name: 'publish',
          alt: '黒に近い紙を3面の小さな屏風に折り、各面に窓を切り抜いて立てています。窓から影の中へ光が差し、横には数枚の紙が重なっています。',
        },
        items: [
          { title: 'この話をアップロード', body: '1話を画像ページだけで構成でき、無理に文章を加える必要はありません。作者コメントは本文と分けて掲載され、翻訳されません。' },
          { title: '公開日時を予約', body: '公開日とタイムゾーンを設定すれば、ブラウザーを閉じても予定どおり公開されます。' },
          { title: '一緒に制作', body: 'アシスタントや編集者を招待し、閲覧、提案、編集、公開の権限を個別に付与できます。公開権限と編集権限は別々です。' },
          { title: '各ページに位置を記録', body: '各ページには固定の位置があります。他の人が翻訳する場合、翻訳版のページを1ページずつ原ページに対応させます。' },
          { title: 'フィードバックを受け取る', body: '読者のコメントや修正提案は、作者のフィードバック受信箱にまとまります。' },
        ],
      },
      decides: {
        eyebrow: '作者が決めること',
        heading: '次の項目は作者が決めます。',
        items: [
          {
            title: '翻訳',
            body: '他の人が作った翻訳版は、初期状態では非公開です。あなたの同意を得るか、あらかじめライセンスを許可した場合に公開できます。作品を特定の翻訳版につなげない設定もできます。',
          },
          { title: '権利', body: '作品のライセンスを明記し、読者や翻訳者がどのように利用できるかを示します。' },
          { title: 'AIの使用', body: '各話でAIの使用方法を、なし、補助、生成から明記できます。読者はこの項目で絞り込めます。' },
          { title: '改訂', body: '変更したページには改訂履歴が残ります。読者が以前コメントしたときに見ていた版が、気付かないうちに差し替わることはありません。' },
          { title: 'バックアップ', body: '作品全体をすべての改訂履歴とともに、いつでもバックアップできます。' },
        ],
      },
      elsewhere: {
        eyebrow: '他の場所で連載',
        heading: '他の場所で連載中の作品も登録できます。',
        lead: '自分のサイトなどで連載している作品も、REZICSでアイデンティティを作成できます。Web連載は1つの刊行物として記録し、URLと日付付きのスナップショットを添えます。単行本になった後は、各巻を別に記録します。',
      },
      closing: {
        statement: '作品をREZICSに掲載しても、作者が主導権を持ち続けます。',
        nextLabel: '次のサイト',
        nextName: 'ゲーム',
      },
    },
  },
} satisfies MiniSite<MangaStrings>;
