// 通用索引 (/engine/universal-index/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// The page follows one work, 《魔法禁書目錄》, as a plain-text example of how REZICS records a work
// (.temp/sites/EXAMPLE-WORK.md: no cover or likeness, no publishers or studios, no counts).
import type { MiniSite } from '../schema';
import { modules } from '../modules';
import { site as shared } from '../site';

const mod = modules.find((m) => m.id === 'universal-index')!;

export interface Item {
  title: string;
  body: string;
}

export interface IndexStrings {
  hero: { eyebrow: string; headline: string; lede: string; alt: string };
  names: {
    label: string;
    headline: string;
    lead: string;
    /** `lang` is a BCP 47 tag; the Japanese title is set in a Japanese face (Noto Sans TC lacks 録). */
    names: { name: string; lang: string; label: string }[];
    caption: string;
  };
  people: { label: string; headline: string; lead: string; rows: Item[]; characters: string };
  layers: { label: string; headline: string; lead: string; alt: string; items: Item[]; aside: string };
  relations: {
    label: string;
    headline: string;
    lead: string;
    /** Related works, with each sequel's source made explicit; `kind` colours its tile. */
    items: { id: string; rel: string; name: string; line: string; kind: 'books' | 'manga' | 'anime' | 'visual-novels' }[];
    note: string;
  };
  values: { label: string; headline: string; lead: string; items: Item[] };
  merge: { label: string; headline: string; lead: string; items: Item[] };
  closing: string;
}

export default {
  id: 'universal-index',
  base: '/engine/universal-index/',
  name: mod.name,
  theme: { module: 'universal-index' },
  pages: [
    {
      slug: '',
      label: '概要',
      meta: {
        title: '共通インデックス：一つのものに一つのアイデンティティ',
        description:
          '『とある魔術の禁書目録』を例に、REZICSが一つの作品に一つのアイデンティティを割り当てる方法を紹介します。各言語の名称、クレジット、作品とリリース、続編と翻案、絞り込みとビュー、統合と分割を確認できます。',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: shared.nav.engine,
      headline: '一つの作品に、一つのアイデンティティ。',
      lede: 'たとえば『とある魔術の禁書目録』。日本語の原題、中国語と英語の書名は、すべて同じ作品を指します。読む言語に合わせて適切な名称を先に表示します。',
      alt: '濃い灰色の台紙に、同じ大きさの灰色と色紙を整然と並べ、そのうち一枚の角をめくっています',
    },
    names: {
      label: '名称',
      headline: '名称はいくつあっても、アイデンティティは一つ。',
      lead: '名称ごとに言語と用途を記録します。原題、翻訳名、別名、読みのどれから検索しても、同じ作品が見つかります。',
      names: [
        { name: 'とある魔術の禁書目録', lang: 'zh-Hant', label: '繁体字中国語の書名' },
        { name: 'とある魔術の禁書目録', lang: 'ja', label: '日本語の原題' },
        { name: 'A Certain Magical Index', lang: 'en', label: '英語の書名' },
      ],
      caption: '『とある魔術の禁書目録』を例に、REZICSが作品を記録する方法を紹介します。',
    },
    people: {
      label: 'クレジット',
      headline: '人には一つのアイデンティティを。役割も記録します。',
      lead: '鎌池和馬は小説の作者であり、翻案されたマンガ、アニメ、ゲームの原作者です。どの名前から開いても同じページにつながります。名前ごとに人物または組織を結び、役割と担当箇所を記録します。見解が分かれる場合は、出典とともにそれぞれ掲載します。',
      rows: [
        { title: '鎌池和馬', body: '小説の作者。翻案されたマンガ、アニメ、ゲームの原作者。' },
        { title: '灰村キヨタカ', body: '小説のイラスト。' },
        { title: '近木野中哉', body: 'マンガの作画。' },
      ],
      characters: '登場人物も同じです。同じ人物が小説、マンガ、アニメに登場しても、アイデンティティは一つです。登場した作品はそれぞれ記録します。',
    },
    layers: {
      label: '3つの層',
      headline: '作品、テキスト、リリースを分けて記録します。',
      lead: '作品は物語そのものです。同じ物語に日本語の原文、中国語訳、英語訳など異なるテキストがあります。実際に出版されたものは、それぞれリリースとして記録します。',
      alt: '濃い灰色、暖かい灰色、緑色の紙を順に重ね、暖かい灰色の紙の角を少しめくっています',
      items: [
        { title: '作品', body: '物語そのものです。レビュー、フォロー、関連情報はこの層につながります。' },
        { title: 'テキスト', body: '原文と各言語の翻訳です。翻訳は同じ作品の別のテキストとして扱い、翻訳者と権利を個別に記録します。' },
        { title: 'リリース', body: 'ペーパーバック、電子書籍、合本など、出版のたびに記録し、その時点で収録された内容を記します。' },
      ],
      aside: '誤字の修正や新しい刷は同じ作品です。筋書きを書き換えた版は別作品として登録し、「リライト」の関連で結びます。',
    },
    relations: {
      label: '関連',
      headline: '関係は一度記録し、両側から表示します。',
      lead: '本編、『新約 とある魔術の禁書目録』、『創約 とある魔術の禁書目録』をそれぞれ記録し、続編として結びます。本編のページには「続編」、新約のページには「前作」と表示しますが、参照するのは同じ関係です。マンガ、アニメ、外伝も出典につなげます。',
      items: [
        { id: 'shinyaku', rel: '本編の続編', name: '『新約 とある魔術の禁書目録』', line: '第2シリーズ、2011年から2019年', kind: 'books' },
        { id: 'souyaku', rel: '新約の続編', name: '『創約 とある魔術の禁書目録』', line: '第3シリーズ、2020年に刊行開始、現在も刊行中', kind: 'books' },
        { id: 'manga', rel: '翻案作品', name: 'マンガ', line: '近木野中哉が作画、2007年に連載開始', kind: 'manga' },
        { id: 'anime', rel: '翻案作品', name: 'アニメ', line: '3シーズン（2008年、2010年、2018年）と映画1作（2013年）', kind: 'anime' },
        { id: 'railgun', rel: '外伝', name: '『とある科学の超電磁砲』', line: '『とある科学の一方通行』と同じく外伝で、本編の登場人物が登場します', kind: 'manga' },
        { id: 'vn', rel: '翻案作品', name: 'ビジュアルノベル', line: '2013年に発売され、ビジュアルノベルの目録にも掲載されています', kind: 'visual-novels' },
      ],
      note: '関係にはそれぞれ名前、方向、出典があります。名前が似ているだけでは証拠になりません。証拠のない関連は作成しません。',
    },
    values: {
      label: '絞り込み',
      headline: '値ごとに専用のページがあります。',
      lead: '人物、種類、言語、翻案元はそれぞれページを持ちます。値を組み合わせれば絞り込めます。',
      items: [
        { title: '同じ登場記録に結び付ける', body: '「主人公」と人物を同じ登場記録に結び付けるため、別の人物が主人公の作品を混ぜません。' },
        { title: 'ビューとして保存', body: '条件に名前を付けてビューとして保存できます。フォローしたり、ホームのタブに固定したり、Zoneの目録に使ったりできます。' },
        { title: '最後まで表示', body: 'どのリストも最後まで表示できます。件数が正確な値か下限かも画面に示します。' },
      ],
    },
    merge: {
      label: '統合と分割',
      headline: '統合は取り消せます。分割後も行き先が分かります。',
      lead: '英語の書名で同じ作品が重複登録された場合、REZICSは統合の前に影響を受けるデータをすべて示し、競合する項目ごとに判断を求めます。',
      items: [
        {
          title: '検索してから登録',
          body: '新しい項目を作る前に、原題、別名、読み、作者、識別子で検索します。見つかったら別名や版を追加します。書名やISBNが同じことは手掛かりであり、証明ではありません。',
        },
        {
          title: '統合',
          body: '評価、リスト、ライブラリの記録、Wikiの事実を残す項目にまとめます。同じ人の評価が二票になったり、二冊の蔵書が一冊になったりすることはありません。以前のURLも開け、残した項目に移動します。',
        },
        { title: '取り消し', body: '取り消しは巻き戻しではなく、新しい決定です。統合後に行われた編集は一つずつ適切な項目に戻し、行き先が分からないものは審査に回します。' },
        { title: '分割', body: '同じ名前の別作品が一つに記録されていた場合、分割後の元の項目に分割先をすべて記載します。' },
        {
          title: '人が判断',
          body: '誰でも統合を提案でき、AIエージェントも提案できます。判断するのは審査担当者です。すでに利用されている項目や議論のある統合には、互いに独立した2人の承認が必要です。ボットとその操作者は合わせて1人と数えます。',
        },
      ],
    },
    closing: 'REZICSで知っている作品を探して、登録された名称を確認してください。',
  },
} satisfies MiniSite<IndexStrings>;
