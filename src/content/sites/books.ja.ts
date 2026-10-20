// 書庫 (books): every visible string of the books site. Design record and sources:
// src/sites/books/SITE.md and src/sites/books/facts.md. The eight part notes and the kind's
// name come from src/content/kinds.ts and are imported by the pages, never copied here.
// Shapes follow the v3 parts (V3-SPEC): hero, sections (eyebrow, heading, lead), photo rows,
// facts lists (title left, text right), statements (a line and its muted continuation), tile
// masonry and the closing.
import type { MiniSite } from '../schema';

export type TitledText = {
  title: string;
  body: string;
};

/** A section: eyebrow label, serif heading, lead text. */
type Head = { label: string; headline: string; lead?: string };

/** A large serif statement: `text`, then its muted continuation `sub`; `note` sits under it. */
export type StatementText = { text: string; sub: string; note?: string };

/** A paper still-life picture: its alt text. Files live in public/images/sites/books/. */
type Picture = { alt: string };

export type BooksStrings = {
  /** Shared labels across the site's pages; `closing` ends every page. */
  common: { contents: string; nextPage: string; nextSite: string; closing: { title: string; body: string } };
  landing: {
    hero: { headline: string; lede: string } & Picture;
    /** Photo row: the editions picture beside one fictional series' editions (示意). */
    editions: Head & { lead: string; caption: string; link: string } & Picture;
    /** Facts list: how the bookmark counts across editions and languages (示意). */
    progress: Head & { steps: TitledText[] };
    reading: StatementText;
    /** Photo row: the folded strip beside writing and publishing. */
    writing: Head & { body: string[]; link: string } & Picture;
    /** Tile masonry of the site's own pages: a short line per tile. */
    pages: Head & { rows: { slug: string; line: string }[] };
    parts: Head;
    /** Tile masonry of neighbouring kinds. */
    connections: Head & { tiles: { kind: 'anime' | 'manga' | 'visual-novels' | 'games'; line: string }[] };
  };
  work: {
    hero: { headline: string; lede: string };
    /** The example's title page (text only, per EXAMPLE-WORK.md). */
    example: { title: string; original: string; author: string; caption: string };
    sections: Head & { rows: (TitledText & { example: string })[] };
    action: Head & { rows: TitledText[]; caption: string };
    ratings: Head & { rows: TitledText[] };
    edit: Head & { rows: TitledText[] };
    languages: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  wiki: {
    /** The page head beside the cut-out picture. */
    hero: { headline: string; lede: string } & Picture;
    flow: Head & { steps: TitledText[] };
    position: Head & {
      control: string;
      positions: { label: string; chapter: number }[];
      groups: { people: string; events: string };
      source: string;
      aliases: string;
      entries: { group: 'people' | 'events'; name: string; aliases?: string; chapter: number; note: string }[];
      /** What a folded entry says: the chapter it appears in (`{n}`). */
      later: string;
      status: string;
      statusAll: string;
      rail: string;
      rules: string[];
    };
    text: StatementText & { facts: TitledText[] };
    /** Tile masonry of a wiki's own pages (示意, not links). */
    zone: Head & { tiles: { name: string; line?: string }[]; caption: string };
    review: Head & { states: TitledText[]; rules: string[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  editions: {
    /** The page head beside the stack picture. */
    hero: { headline: string; lede: string } & Picture;
    releases: Head & { kinds: TitledText[] };
    translations: Head & { rows: TitledText[]; stateLabel: string; states: string[]; notes: string[] };
    sameWork: Head & { rows: TitledText[]; caption: string };
    orders: Head & {
      rows: [string, string];
      tiles: string[];
      /** Reading order as indexes into `tiles`. */
      reading: number[];
      notes: TitledText[];
    };
    isbn: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  library: {
    /** The page head beside the three strips. */
    hero: { headline: string; lede: string } & Picture;
    /** Three reads of one book as three strips, the photograph seen flat (`share`: its length). */
    reads: Head & { rows: (TitledText & { share: number })[]; caption: string };
    move: Head & { steps: TitledText[]; retention: string };
    continue: StatementText;
    shelf: Head & { rows: TitledText[] };
    privacy: Head & { rows: TitledText[] };
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  serial: {
    /** The page head beside the folded strip. */
    hero: { headline: string; lede: string } & Picture;
    safe: Head & { rows: TitledText[] };
    mirror: Head & { rows: TitledText[]; notes: string[] };
    ai: Head & { rows: TitledText[]; notes: string[] };
    world: Head & { items: string[] };
    backup: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
  publish: {
    hero: { headline: string; lede: string };
    buy: Head & { steps: TitledText[]; caption: string };
    statement: Head & { rows: TitledText[]; note: string };
    distributed: Head & { rows: TitledText[]; policy: TitledText[] };
    community: StatementText;
    /** The heading of the way on to the next page. */
    finaleLead: string;
  };
};

const strings: BooksStrings = {
  common: {
    contents: 'このページの内容',
    nextPage: '次のページ',
    nextSite: '関連する種類',
    closing: {
      title: '次に読む本は、ライブラリを開けば分かります。',
      body: '本、版、読むたびの記録を一つのアカウントにまとめます。',
    },
  },

  landing: {
    hero: {
      headline: '一つの作品、すべての版、読み進めたページ。',
      lede: '原文と翻訳、単行本と合本をそれぞれ記録し、同じ作品につなげます。次に読む本、Wiki、ディスカッションは、読んだところに合わせて表示します。',
      alt: '濃い緑色の紙を列状に広げ、中央に薄い緑色のしおりのような紙を挟んでいます。',
    },
    editions: {
      label: '版',
      headline: '出版のたびに、個別に記録します。',
      lead: '同じライトノベルシリーズでも、日本語の原版、繁体字中国語版、英語版、繁体字中国語の合本は別々の出版物で、収録巻も異なります。ISBNの有無やウェブ連載かどうかにかかわらず、同じ作品につながります。',
      caption: '例：架空の全12巻ライトノベルシリーズ。',
      link: '版とシリーズを見る',
      alt: '大きさの異なる緑色の紙を左下でそろえて重ね、そのうち一枚は淡い青色です。',
    },
    progress: {
      label: '読書の進捗',
      headline: 'しおりの位置から、次の一冊が分かります。',
      lead: '全12巻のライトノベルシリーズで、繁体字中国語版は第6巻、日本語版は第12巻まで刊行され、あなたは繁体字中国語版の第6巻を読み終えたところです。',
      steps: [
        { title: '各巻を個別の作品として登録', body: 'シリーズの各巻はそれぞれ一つの作品です。出版言語にかかわらず、第7巻は同じ作品を指します。' },
        { title: '合本は一度だけ数える', body: '繁体字中国語の合本は第1巻から第3巻までを収録した一つの出版物です。読み終えると、各巻の読了記録が一つずつ残り、重複しません。' },
        { title: '読む言語で次の本を表示', body: '繁体字中国語版の第7巻はまだありません。ライブラリは現在の刊行分まで追いついたことを示し、第7巻が出版されたら通知します。' },
        { title: '言語を替えても進捗を保持', body: '日本語版の第7巻と第8巻を読んでから繁体字中国語版に戻っても、2巻の読了記録は残ります。翻訳は同じ作品の別のテキストなので、進捗をやり直す必要はありません。' },
        { title: '本を持っていても、読了とは限りません', body: '本棚に本があることと、読み終えたことは別々に記録します。' },
      ],
    },
    reading: {
      text: 'Wikiとディスカッションは、読んだところまで。',
      sub: '後から登場する人物、出来事、ディスカッションは隠し、必要ならすべて表示できます。',
    },
    writing: {
      label: '執筆と出版',
      headline: '書く人も、同じライブラリを使います。',
      body: [
        '連載の作者は章ごとに執筆、予約、公開できます。読者は前回読んだ段落から続きを読めます。',
        '契約クリエイターは権利を持つDRMフリーの電子書籍を読者に直接販売できます。ストアページは作品のディスカッションの隣にあります。',
      ],
      link: '連載の書き方を見る',
      alt: '濃い緑色の長い紙をページ状に折り、後半は平らに広げています。折り目に小さな薄緑色の紙を置いています。',
    },
    pages: {
      label: '書籍のページ',
      headline: '本を探し、読み、書く場所。',
      rows: [
        { slug: 'work', line: '從這裡查看作品的所有資訊' },
        { slug: 'wiki', line: 'AIエージェントで本のWikiを作成' },
        { slug: 'editions', line: '分清翻訳、合本、系列' },
        { slug: 'library', line: '記錄每一次閱讀' },
        { slug: 'serial', line: '逐章寫作，逐章閱讀' },
        { slug: 'publish', line: 'DRMフリーの電子書籍を直接販売' },
      ],
    },
    parts: {
      label: 'パーツ',
      headline: '8つのパーツで書籍を支えます。',
      lead: 'アニメ、マンガ、ゲームも同じパーツで構成され、書籍ではこの8つを使います。',
    },
    connections: {
      label: '関連する種類',
      headline: '本の物語は、ほかの種類にもつながります。',
      lead: '原作のページから、各翻案作品をたどれます。',
      tiles: [
        { kind: 'anime', line: '関連情報からアニメ化作品へ' },
        { kind: 'manga', line: '漫画版は個別に評価' },
        { kind: 'visual-novels', line: 'ライトノベルと目録、ライブラリを共有' },
        { kind: 'games', line: '同じ作者のゲームを同じ名前につなげる' },
      ],
    },
  },

  work: {
    hero: {
      headline: '作品に関するすべてを、このページから。',
      lede: '作品ページはライブラリの中心です。情報、評価、あなたの版と進捗、シリーズと翻案、Wiki、ディスカッションを読書に役立つ順に並べます。',
    },
    example: {
      title: '『とある魔術の禁書目録』',
      original: 'とある魔術の禁書目録',
      author: '鎌池和馬',
      caption: '書名は選んだ言語で表示し、原題をそばに添えます。以下ではこの作品を例に、ページを上から順に見ていきます。',
    },
    sections: {
      label: '8つのセクション',
      headline: '上から順に並ぶ8つのセクション。',
      lead: '作品に必要のないセクションは省略し、ほかの位置やリンクはそのまま保ちます。',
      rows: [
        {
          title: 'アイデンティティと次の操作',
          body: '表紙、書名、作者、評価を表示し、評価には尺度、人数、対象範囲を記載します。選んだ版、読書状況、進捗も並べます。',
          example: '第5巻まで読んでいる場合、メインボタンは「続きを読む」です。',
        },
        {
          title: '紹介',
          body: 'ネタバレのない紹介、基本情報、タグ、内容に関する注意を表示します。展開すると詳細、出典、「修正を提案」が表示されます。',
          example: '鎌池和馬が執筆し、灰村キヨタカがイラストを担当するライトノベル。本編は2004年に刊行開始。',
        },
        {
          title: 'あなたの版と入手方法',
          body: '選んだ版を最初に表示し、条件に合う版をいくつか紹介してから、ページごとに閲覧できる全リストを表示します。',
          example: '日本語の原作、繁体字中国語と英語の翻訳に、それぞれ翻訳者を記載。',
        },
        {
          title: '巻と関連情報',
          body: '次に読む部分を先頭に表示し、巻を順に並べ、その後に続編や翻案を表示します。刊行順とおすすめの読書順は分けて掲載します。',
          example: '本編、『新約 とある魔術の禁書目録』、『創約 とある魔術の禁書目録』の3シリーズを続編としてつなげます。',
        },
        {
          title: 'Wikiを閲覧',
          body: '主要人物、主要スタッフ、進捗に合わせた年表や章の案内を表示し、Wikiの各ページにつなげます。',
          example: '第5巻まで読んでいる場合、年表も第5巻まで表示します。',
        },
        {
          title: '評価とレビュー',
          body: 'スコアの分布と人数に加え、質問、評価者、評価対象を表示します。版やレビューの言語で絞り込めます。レビューの投稿に評価は必要ありません。',
          example: '物語の評価と、特定の翻訳の評価を分けて集計します。',
        },
        {
          title: 'ディスカッションとコミュニティ',
          body: '作品、巻、版ごとに専用のスレッドがあります。読むだけならコミュニティへの参加は不要です。',
          example: '第5巻について話すときは、その巻から開けます。',
        },
        {
          title: 'リストと探索',
          body: 'この作品を含むリストと読書順に、それぞれ理由を添えて表示します。さらに下には識別子、出典、改訂履歴があります。',
          example: 'ライトノベル入門リストに、選んだ理由を記載します。',
        },
      ],
    },
    action: {
      label: 'メインボタン',
      headline: 'ページの先頭にメインボタンを一つ。',
      lead: 'ボタンの文言は作品との関係に応じて変わります。フォローとリストへの追加には、別のボタンを使います。',
      rows: [
        { title: '版をまだ選んでいない', body: 'ボタンには「版を選ぶ」と表示します。' },
        { title: '版を選び、まだ読んでいない', body: 'ボタンには「読み始める」と表示します。' },
        { title: '読書の途中', body: 'ボタンには「続きを読む」と表示し、中断した場所を開きます。' },
      ],
      caption: 'スマートフォンでは表紙を小さくして書名の隣に置き、アイデンティティ、版、状況、ボタンを最初の画面に収めます。',
    },
    ratings: {
      label: '評価',
      headline: 'スコアの隣に、評価対象を表示。',
      lead: '原文の読者は物語を評価し、翻訳の読者は翻訳を、オーディオブックのリスナーは朗読を別々に評価できます。',
      rows: [
        { title: '評価対象', body: '物語、翻訳、朗読を個別に評価し、一つのスコアに混ぜません。' },
        { title: '平均の対象', body: 'すべてのユーザー、参加しているコミュニティ、別のコミュニティなど、評価の対象を明記します。' },
        { title: 'シリーズと各巻', body: 'シリーズ全体の評価と各巻の評価を分けます。' },
      ],
    },
    edit: {
      label: '編集',
      headline: '自分の記録は直接編集し、共通の情報は提案します。',
      rows: [
        { title: '直接編集して、元に戻す', body: '読書状況、進捗、評価、リストは直接編集できます。誤って変更した場合は、操作一つで元に戻せます。' },
        { title: '修正を提案し、人が審査', body: '事実、関連、書名、別名の変更を提案できます。各提案に出典を添え、人が審査してから適用します。' },
      ],
    },
    languages: {
      text: 'インターフェース、書名、版の言語は、',
      sub: 'それぞれ別に扱います。',
      note: 'インターフェースを英語に切り替えても、読んでいる繁体字中国語版は変わりません。書名が中国語でも、中国語訳があるとは限りません。レビューにも記述言語を表示します。',
    },
    finaleLead: '作品ページの奥には、進捗に合わせた章の情報があります。',
  },

  wiki: {
    hero: {
      headline: '本ごとに専用のWikiがあります。',
      lede: '本の所有者は自分のコンピューターでAIエージェントを使い、人物、場所、出来事を章ごとに整理します。人が審査した後に公開し、読者には読んだ章まで表示します。',
      alt: '濃い緑色の紙に長さの異なる切り込みを入れ、切り取った紙片を隣の淡い青色の台紙に整然と並べています。',
    },
    flow: {
      label: 'ファイルからWikiへ',
      headline: '一つのファイルから、Wikiを作成。',
      steps: [
        { title: '手元のファイル', body: 'TXTまたはEPUBを、自分のコンピューターに保存します。' },
        {
          title: '選んだAIエージェント',
          body: 'ツールキットがテキストを正確な位置情報付きの段落に分けます。エージェントは章ごとに読み、人物と別名、人物間の関係、出来事、場所を記録します。',
        },
        {
          title: '出典付きの提案',
          body: '各項目に原文の位置を示し、証拠として短い引用を添えます。エージェントはAPIで既存の人物や場所を検索してから、結果をまとめて送信します。',
        },
        {
          title: '審査後に公開',
          body: '審査担当者が提案をまとめて承認すると、作品のWikiが更新されます。新しい章が出た後は、追加と変更の部分だけを送信します。',
        },
      ],
    },
    position: {
      label: '読書位置',
      headline: '読んだ章までWikiを表示。',
      lead: '架空の小説を例に、人物と出来事の同じリストが読書位置によってどう変わるかを示します。',
      control: '読書位置',
      positions: [
        { label: '第1章', chapter: 1 },
        { label: '第3章', chapter: 3 },
        { label: '第9章', chapter: 9 },
        { label: '第16章', chapter: 16 },
        { label: '第22章', chapter: 22 },
        { label: 'すべて', chapter: 30 },
      ],
      groups: { people: '人物', events: '出来事' },
      source: '出典：第{n}章',
      aliases: '別名：',
      entries: [
        { group: 'people', name: '主人公', aliases: '愛称、ペンネーム', chapter: 1, note: '物語の語り手。港町で育ちました。' },
        { group: 'people', name: '主人公の姉', chapter: 1, note: '町の書店で働いています。' },
        { group: 'people', name: '新しい隣人', chapter: 3, note: '向かいの家に越してきた若者。' },
        { group: 'people', name: '旅する画家', chapter: 16, note: '港のそばの宿に滞在しています。' },
        { group: 'events', name: '書店の再開', chapter: 1, note: '姉が働く書店の看板が新しくなりました。' },
        { group: 'events', name: '港の宴', chapter: 9, note: '主人公が宴で隣人に初めて話しかけました。' },
        { group: 'events', name: '長い手紙', chapter: 16, note: '手紙で二人の過去が明かされます。' },
        { group: 'events', name: '港を出る船', chapter: 22, note: '姉からの手紙で知らせが届きました。' },
      ],
      later: '第{n}章で登場。現在は非表示です。',
      status: '読書位置：第{n}章。この後の内容は表示されません。',
      statusAll: '結末を含むすべての内容を表示しています。',
      rail: '全30章。',
      rules: [
        'ログインしていない読者には、既定でネタバレを表示せず、そのことをページに示します。',
        'ログイン後の位置は、読了した最後の章が既定です。ライブラリで「読了」にすると、作品全体を読んだことになります。',
        '読者は読書位置を自由に選び、すべて表示することもできます。',
        '読書位置は同じストーリーの中でのみ有効です。ウェブ版で読んだ位置によって、出版版の内容が表示されることはありません。',
      ],
    },
    text: {
      text: 'REZICSは全文を受け取りません。',
      sub: '受け取るのは提案だけで、原文の位置と短い引用が付いています。',
      facts: [
        { title: 'モデルを選択', body: 'クラウドモデルを使う場合、テキストは選んだサービスに送信されます。ローカルモデルなら、テキストはコンピューターから出ません。' },
        { title: 'オープンソース', body: 'ツールキットはApache-2.0で提供します。アカウントなしで使え、利用状況を報告せず、ネットから自動で何かをダウンロードすることもありません。' },
        { title: '復号や解除をしない', body: '保護されたファイルは開けません。ツールキットに復号や解除の機能はなく、そのためのツールを呼び出すこともありません。' },
        { title: '引用に上限を設定', body: '各引用の長さと、本ごとの引用の合計量には上限があります。REZICSのAPIが一括して管理します。' },
      ],
    },
    zone: {
      label: 'Zone',
      headline: '作品ごとのWikiは、一つのZoneです。',
      lead: '情報ボックスやリストの各項目は、絞り込み、リスト、ほかのZoneが読むデータと同じものです。ここで名称を修正すると、ほかの場所にも反映されます。',
      tiles: [
        { name: '作品ページ', line: '中心はそのまま、Wikiはその先に' },
        { name: '人物' },
        { name: '場所' },
        { name: '年表' },
        { name: '章の案内' },
        { name: '関連' },
      ],
      caption: '例：作品Wikiのページ。',
    },
    review: {
      label: '審査',
      headline: 'AIエージェントが提案し、人が審査。',
      lead: 'エージェントが見つけた人物や場所は、グラフ上の既存データと照合し、結果を4種類に分けます。',
      states: [
        { title: '一致', body: 'グラフ上にある人物または場所と一致しました。' },
        { title: '新規', body: 'グラフにないため、新しい項目を提案します。' },
        { title: '未確定', body: '候補が複数あるため、審査担当者が判断します。' },
        { title: '取得不可', body: '照合結果を取得できません。審査時に確認します。' },
      ],
      rules: [
        '照合結果も提案として扱い、項目を自動で統合しません。',
        '新しい章の提案によって、承認済みの内容がひそかに削除されることはありません。項目を取り消すには理由が必要です。',
        '審査担当者が同じ版のファイルを持っていれば、引用位置と原文を段落ごとに確認できます。',
        'エージェントに項目の下書きを作らせるか、生成文を受け入れるかは各コミュニティが決めます。別途設定しない場合、Wikiでは事実と構造のみを扱います。',
        '読者に表示される項目はすべて、人による審査を経ています。',
      ],
    },
    finaleLead: '同じ作品の各種の本を、どう区別して記録するか。',
  },

  editions: {
    hero: {
      headline: '一つの作品から、さまざまな本が生まれます。',
      lede: '原文と翻訳、ペーパーバックと電子版、合本とウェブ連載を個別に記録し、同じ作品につなげます。手元の本がどの版か分かり、シリーズの進捗も保てます。',
      alt: '大きさの異なる緑色の紙を左下でそろえて重ね、そのうち一枚は淡い青色です。',
    },
    releases: {
      label: '4種類の出版',
      headline: '出版の種類を一つずつ示します。',
      lead: '同じ本を3つのストアで販売しても、版の記録は一つで、購入先を3つ掲載します。無許可の転載は別に記録し、正規版と統合しません。',
      kinds: [
        { title: '正式出版', body: '出版社が刊行する単行本、ペーパーバック、電子版、特装版です。実際に出版された内容を記録し、後から内容を追加しません。' },
        { title: 'ウェブ公開', body: 'ウェブ連載も実際のリリースとして記録します。元のURLと、日付を付けた各アーカイブを保存します。' },
        { title: 'REZICS固定版', body: 'REZICS上の特定時点の内容を固定版として保存し、その後の改訂では変更しません。' },
        { title: '仮想版', body: '特定の出版物の構成に沿ってユーザーの翻訳を配置し、収録範囲を明記します。たとえば全100章のうち第1章から第20章です。実際に出版された版を意味するものではありません。' },
      ],
    },
    translations: {
      label: '翻訳',
      headline: '翻訳ごとに翻訳者と出典を表示。',
      rows: [
        { title: '公式翻訳', body: '出版社の翻訳は独立した出版物として記録し、翻訳者と権利を明記します。' },
        { title: '有志翻訳', body: '翻訳者本人に帰属し、特定の原文版に対応します。公式と表示することはありません。' },
        { title: '機械翻訳', body: 'ほかの翻訳と同じく新しいテキストとして扱い、機械翻訳であることを示します。' },
        { title: 'AI支援', body: '人が中心となって作成し、AIを発想、書き換え、編集、一部の文章に使った場合も明示します。読者はその条件で絞り込めます。' },
      ],
      stateLabel: '翻訳の各部分に状態を設定',
      states: ['未翻訳', '翻訳済み', '確認済み', '確定'],
      notes: [
        '原文が変更されると、対応する翻訳に更新が必要と表示します。削除したり、ひそかに新しい文章へ移したりしません。',
        'ユーザーの翻訳は最初は本人だけに表示されます。公開するには根拠が必要です。原作がパブリックドメインまたは翻訳を認めるオープンライセンスである、作者の同意がある、または作者が事前に翻訳を許諾している場合に公開できます。',
        '作者は原作を特定の翻訳に関連付けないことも選べます。',
        '繁体字を簡体字にひそかに置き換えません。変換した文章にはそのことを表示し、固有名詞も変更しません。',
      ],
    },
    sameWork: {
      label: '同じ作品か、別の作品か',
      headline: '変更後も同じ作品として扱う場合。',
      lead: '判断の基準は、物語の前後がつながるか、意図的に語り直しているかです。文字数、言語、ISBN、宣伝文句は基準にしません。',
      rows: [
        { title: '誤字の修正、軽微な改訂、矛盾のない章の追加', body: '同じ作品として扱い、版とリリースを分けて記録します。' },
        { title: '順序を変えても出来事は同じ', body: '同じ作品として扱い、両方の順序を残します。' },
        { title: '順序の変更で因果関係が変わる、結末が両立しない', body: '別作品として扱い、「リライト」で関連付けます。' },
        { title: '主人公の名前を変更', body: '別名にすぎない場合は、同じ作品として扱います。' },
        { title: '意図的に最初から語り直す', body: '別作品として扱い、「リブート」で関連付けます。' },
        { title: 'ウェブ版の削除、ウェブ限定の続編', body: '変わるのは収録範囲と入手可能性だけで、作品は増えません。' },
      ],
      caption: 'ウェブ版で読んだ位置によって、リライトされた出版版が読了になることはありません。両方の章の対応関係は、人が確認してから有効になります。',
    },
    orders: {
      label: '順序',
      headline: '刊行順と読書順は異なる場合があります。',
      lead: '例：同じシリーズの二つの順序。各巻の識別子は変わりません。',
      rows: ['刊行順', 'おすすめの読書順'],
      tiles: ['第1巻', '外伝', '第2巻', '第3巻'],
      reading: [0, 2, 1, 3],
      notes: [
        { title: '合本', body: '合本は複数巻を収録した一つの出版物です。各巻は別々の作品として残り、評価と進捗も各巻に記録します。' },
        { title: 'サブシリーズ', body: 'シリーズ内のサブシリーズはそれぞれ第1巻から番号を付けられます。全体をつなぐ順序も設定できます。' },
        { title: 'シリーズの読了', body: 'シリーズの進捗は必読巻で決まります。任意で読む外伝や特別編は、読んでも読まなくても読了に影響しません。' },
        { title: 'シリーズの状態', body: '現在の刊行分まで追いついた、刊行済みの巻を読了した、シリーズが完結した、章の対応が未確定という4つの状態を分けて表示します。' },
      ],
    },
    isbn: {
      text: 'ISBNを入力すると、',
      sub: '該当する版が見つかります。',
      note: 'ISBNは個々の出版物を識別し、作品自体を示すものではありません。ISBNや電子版の項目から、その版、収録テキストや翻訳、元の作品をたどれます。たとえば『とある魔術の禁書目録』では、日本語の原作、繁体字中国語版、英語版がそれぞれ別の出版物で、異なるISBNから同じ作品につながります。',
    },
    finaleLead: '次は、あなた自身の記録を確認します。',
  },

  library: {
    hero: {
      headline: '読み方に合わせて、記録します。',
      lede: '途中で読むのをやめる、2年後に再読する、通勤中はオーディオブックに切り替える。REZICSはそれぞれの状況を記録します。記録は既定で自分だけに表示され、必要なときにまとめて持ち出せます。',
      alt: '長さの異なる3本の濃い緑色の紙を平行に並べ、最も短い紙のそばに小さな薄緑色の紙を置いています。',
    },
    reads: {
      label: '読むたびに記録',
      headline: '同じ本を3回読めば、記録も3件。',
      lead: '一時停止と読むのをやめることを別々に記録し、どちらも読了とはしません。再読は新しい記録になり、最初の記録に上書きしません。',
      rows: [
        { title: '1回目', body: '紙の本で第20章まで読み、一時停止。', share: 0.62 },
        { title: '2回目', body: '電子書籍で読み始め、後半はオーディオブックで読了。', share: 1 },
        { title: '3回目', body: '再読中。', share: 0.24 },
      ],
      caption: '例：各記録は実際に読んだ版に対応します。別の版で再読した場合も、新しい記録になります。',
    },
    move: {
      label: '読み込みと書き出し',
      headline: '読書記録を引き継ぎ、持ち出せます。',
      steps: [
        { title: '書き出したファイルを用意', body: 'ほかのサービスから書き出したファイルや、自分でまとめた表を使えます。' },
        { title: '読んだ版に対応付け', body: '書名から推測せず、各記録を実際に読んだ版に対応付けます。一致しない情報を別の本に無理に追加しません。' },
        { title: '進捗も引き継ぎ', body: '読書状況、日付、評価、レビューを、データが一致する範囲で移します。' },
        { title: 'いつでも全件を書き出し', body: '記録、蔵書、評価、レビューを、再読み込みできるファイルに書き出します。' },
      ],
      retention: 'アップロードしたファイルはあなたのものです。元の項目はアップロードから7日間保存し、期限後は読み込みと書き出しを停止して削除を予約します。保存したい場合は、先にライブラリを書き出してください。',
    },
    continue: {
      text: 'REZICSを開くと、',
      sub: '次の章がすぐに見つかります。',
      note: 'ホームの先頭にある「続きを読む」の各項目から、未読の次の章を直接開けます。',
    },
    shelf: {
      label: '本棚',
      headline: '本棚の情報もまとめて記録。',
      rows: [
        { title: '蔵書', body: '本棚の本がどの版かを記録します。購入しても読んでいなければ、読書状況は未読のままです。' },
        { title: '貸し借り', body: '貸した相手、貸した日、返却予定日、実際に返却された日を個別に記録します。相手の名前は入力したテキストで、アカウントにはつながりません。' },
        { title: '段落メモ', body: '非公開メモを特定の版の特定の段落に付けます。版を変えても、メモは元の段落を指します。' },
        { title: '読書中ならフォロー', body: '本を「読書中」または「読みたい」にするとフォローします。読む言語で新しい章や版が出ると通知が届きます。' },
        { title: 'リスト', body: '小説、マンガ、ゲームを同じリストに入れ、順序やメモを付けて書き出せます。' },
      ],
    },
    privacy: {
      label: 'プライバシー',
      headline: '読書記録は非公開です。',
      rows: [
        { title: '既定で非公開', body: '自分で共有を選ばない限り、下書きと読書記録は非公開です。' },
        { title: '広告プロフィールを作らない', body: 'REZICSは非公開の読書記録を広告プロフィールの作成に使わず、マーケティング用のセンシティブな情報の推測にも使いません。' },
        { title: '学習利用への同意ではありません', body: 'アカウント登録、利用規約への同意、AI機能の利用は、記録をモデルの学習に使うことへの同意を意味しません。' },
        { title: '管理権限を渡す場合', body: 'アカウントやコミュニティの管理を他人に任せても、読書記録は共有されません。' },
      ],
    },
    finaleLead: '次は、書く側を見ていきます。',
  },

  serial: {
    hero: {
      headline: '一章ずつ書き、一章ずつ読む。',
      lede: 'ウェブ連載、ライトノベルの連載版、自分の長編をREZICSで執筆、予約、公開できます。原稿を失わず、読者はいつでも前回の続きから読めます。',
      alt: '濃い緑色の長い紙をページ状に折り、後半は平らに広げています。折り目に小さな薄緑色の紙を置いています。',
    },
    safe: {
      label: '原稿',
      headline: '原稿をここに保存。',
      rows: [
        { title: '保存するたびに版を記録', body: '各版を保存して比較でき、新しい版として復元できます。章を空にすると空の版が保存されますが、空の章は公開できません。' },
        { title: '自分のタイムゾーンで予約', body: '現地の公開時刻を選ぶと、ブラウザーを閉じてもサーバーが予定どおり章を公開します。' },
        { title: '共同作業者に4種類の権限', body: '閲覧、提案、編集、公開の権限を個別に付与します。原稿を編集できても、公開できるとは限りません。' },
        { title: '作者コメントを本文と分ける', body: '章末の作者コメントは別の項目です。文字数に含まず、翻訳もせず、後の出版版にも収録しません。' },
      ],
    },
    mirror: {
      label: '作者と読者',
      headline: '作者の操作が、読者にどう届くか。',
      rows: [
        { title: '第12章を公開', body: '作品をフォローしている読者に、読む言語の新しい章を通知します。' },
        { title: '第3章を改訂', body: '以前のコメントは、その時点の版の該当箇所を指したままです。' },
        { title: '第5章を短編集に収録', body: '本文とディスカッションは一つのまま、各所の読書進捗を個別に記録します。' },
        { title: '第13章を公開', body: 'まだ読んでいない人のフィードには、この章のネタバレを表示しません。' },
      ],
      notes: [
        '文字サイズ、行幅、書体、字下げ、配色、中国語と日本語の間隔を読者が調整できます。',
        '日本語の作品は縦書きに対応し、ルビと圏点も表示できます。',
        '読者から作者へのフィードバックは、作者専用の受信箱に届きます。',
      ],
    },
    ai: {
      label: 'AIの使用表示',
      headline: 'AIの使用状況を明確に。',
      rows: [
        { title: '未使用', body: '生成AIが文章の作成に実質的に関与していません。' },
        { title: '補助', body: '主に人が執筆し、発想、書き換え、編集、一部の文章にAIを使っています。' },
        { title: '生成', body: '機械翻訳を含め、文章の大部分をAIが生成しています。後から人が編集した場合も同じです。' },
      ],
      notes: ['人による確認の有無は別に記録します。読者はこれらの表示で絞り込めます。', '表示は作者による申告です。REZICSはAI検出器の結果を判断材料として扱いません。'],
    },
    world: {
      label: '世界設定',
      headline: '世界設定を原稿のそばに。',
      lead: 'テンプレートを使って人物、場所、組織、出来事、アイテム、設定を整理し、非公開で保存します。選んだページを作品のWikiに公開できますが、非公開の改訂履歴は公開されません。',
      items: [
        '自分で描いた地図に場所を記します。',
        '人物の関係を図やテキストのリストで表示できます。',
        '物語内の暦で年表を作り、日付が不明な出来事も記録できます。',
        '整合性チェックはメモと原稿の矛盾を示すだけで、章を書くことはありません。',
      ],
    },
    backup: {
      text: '原稿全体を、',
      sub: 'いつでもまとめて持ち出せます。',
      note: '改訂履歴、メモ、世界設定を再読み込みできるバックアップとして書き出せます。書き出し機能と基本的な世界設定の機能に有料プランは必要ありません。',
    },
    finaleLead: '書き終えたら、読者に届けます。',
  },

  publish: {
    hero: {
      headline: '本を販売しても、ファイルは読者の手元に。',
      lede: '契約クリエイターはREZICSで、権利を持つ電子書籍、小規模ゲーム、ビジュアルノベルを直接販売できます。読者が購入するファイルはDRMフリーで、ストアページは作品のディスカッションやWikiの隣にあります。',
    },
    buy: {
      label: '購入',
      headline: '読者は版を選んで本を購入します。',
      steps: [
        { title: '版を選択', body: '言語と版を選び、翻訳者を確認してから試し読みします。' },
        { title: '一度だけ支払い', body: '定期購入ではなく、一度の支払いです。購入できるライセンスを事前にページに表示します。' },
        { title: 'ファイルを保存', body: 'DRMフリーのEPUBまたはPDFをダウンロードできます。ランチャーもDRMの有効化も必要ありません。' },
        { title: '更新を受け取る', body: '作者が合意された更新を公開すると、ライブラリに通知が届きます。領収書が保存され、購入規約に従ってファイルを再ダウンロードできます。' },
      ],
      caption: 'DRMフリーでも再販売や配布ができるとは限りません。利用条件は購入前に表示されるライセンスに従います。',
    },
    statement: {
      label: '精算明細',
      headline: '控除額を一つずつ記載した精算明細。',
      rows: [
        { title: '読者の支払い', body: 'この取引で実際に受け取った金額です。' },
        { title: '税金', body: '販売税、付加価値税など、徴収して納付する取引税です。' },
        { title: '決済手数料', body: '実際に発生し、明細で確認できる決済費用です。' },
        { title: '返金と異議申し立て', body: '返金、取り消し、支払いの異議申し立てです。' },
        { title: '純収入', body: '合意された取引費用を差し引いた後、クリエイターとREZICSが契約に基づいて分配します。' },
      ],
      note: 'ホスティング、人件費、マーケティングなどの運営費は、この収入から差し引きません。同じ費用を二重に差し引くこともありません。',
    },
    distributed: {
      label: '配信内容',
      headline: 'ここで配信するもの、しないもの。',
      rows: [
        { title: '電子書籍', body: '権利を持つ、DRMフリーのEPUBまたはPDFです。' },
        { title: '小規模ゲームとビジュアルノベル', body: 'ダウンロードできる版と、実行に必要なプラットフォームやアカウントを購入前に明記します。' },
        { title: '試し読み', body: '一部を読んでから購入を決められます。' },
        { title: '領収書と返金', body: '購入ごとに領収書が発行され、返金を申請できます。' },
      ],
      policy: [
        { title: '契約クリエイター', body: '契約クリエイターの作品を配信します。誰でも出品できるマーケットプレイスではありません。' },
        { title: '販売しないもの', body: '露骨な性的コンテンツ、およびR18またはR18Gに分類される作品です。' },
      ],
    },
    community: {
      text: 'ストアページは、',
      sub: '作品のコミュニティの隣にあります。',
      note: '購入前にレビュー、ディスカッション、Wikiを確認できます。購入後は版、進捗、領収書が同じ作品に記録されます。読者はクリエイターをフォローし、その人が書いた小説や制作したゲームを見られます。クリエイターが確認できるのは集計済みの販売情報で、読者の読書記録は見られません。',
    },
    finaleLead: '原作から翻案されたアニメも、同じ作品につながります。',
  },
};

export default {
  id: 'books',
  base: '/books/',
  name: '書籍',
  theme: { kind: 'books' },
  next: 'anime',
  pages: [
    {
      slug: '',
      label: '概要',
      meta: {
        title: '書籍：読んだところまで',
        description:
          '作品ごとのページで、原文、翻訳、単行本、合本を明確に分けます。ライブラリは読んだ巻を記録し、次に読む本を案内します。Wikiとディスカッションは読んだ章まで表示します。',
      },
    },
    {
      slug: 'work',
      label: '作品ページ',
      meta: {
        title: '作品ページ：作品の中心',
        description:
          '作品ページには作品情報、評価、あなたの版と進捗、巻と翻案、Wikiの概要、ディスカッションをまとめます。先頭のメインボタンはあなたの状況に応じて変わります。',
      },
    },
    {
      slug: 'wiki',
      label: 'Wiki+',
      meta: {
        title: 'Wiki+：AIエージェントでWikiを作成',
        description:
          'テキストを持つ読者は、自分のコンピューターでオープンソースのツールキットを動かし、AIエージェントで人物、場所、出来事を章ごとに整理できます。審査後に作品のWikiとして公開し、読者には読んだ部分までを表示します。',
      },
    },
    {
      slug: 'editions',
      label: '版とシリーズ',
      meta: {
        title: '版とシリーズ：一つずつ明確に管理',
        description:
          '単行本、合本、電子版、ウェブ連載、各言語の翻訳を同じ作品の異なる出版物として扱います。シリーズは巻順に並べ、筋書きが書き換えられた出版物は別作品として登録します。',
      },
    },
    {
      slug: 'library',
      label: '読書記録',
      meta: {
        title: '読書記録：そのまま記録し、持ち出せる',
        description:
          '読むたびに記録します。再読、一時停止、途中で読むのをやめたこと、紙の本からオーディオブックに切り替えたことも記録できます。蔵書と貸し借りは別に記録し、読書記録は既定で非公開です。ほかのサービスから読み込み、すべてを書き出せます。',
      },
    },
    {
      slug: 'serial',
      label: '連載',
      meta: {
        title: '連載：一章ずつ書き、一章ずつ読む',
        description:
          '作者は保存した版をいつでも復元でき、タイムゾーンに合わせて章の公開を予約できます。ブラウザーを閉じても予定どおり公開されます。読者は前回の続きから読み、未読の章のネタバレを避けて話し合えます。',
      },
    },
    {
      slug: 'publish',
      label: '出版',
      meta: {
        title: '出版：読者に直接販売',
        description:
          '契約クリエイターはREZICSで、権利を持つ電子書籍、小規模ゲーム、ビジュアルノベルを販売できます。DRMフリーのファイル、試し読み、更新、再ダウンロードに対応し、精算明細には税金、手数料、返金を項目ごとに記載します。',
      },
    },
  ],
  strings,
} satisfies MiniSite<BooksStrings>;
