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
  layers: { label: string; headline: string; lead: string; items: Item[]; aside: string };
  relations: {
    label: string;
    headline: string;
    lead: string;
    /** Related works seen from the main series' page: the label on that side, the work, one line; `kind` colours its tile. */
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
      label: '總覽',
      meta: {
        title: '通用索引：一樣東西，一個身分',
        description:
          '以《魔法禁書目錄》為例，看 REZICS 怎麼讓一部作品只有一個身分：各語言的名稱、署名、作品與發行、續作與改編、篩選與檢視，以及合併與拆分。',
      },
    },
  ],
  strings: {
    hero: {
      eyebrow: shared.nav.engine,
      headline: '一部作品，一個身分，每一種寫法。',
      lede: '例如《魔法禁書目錄》：日文原名、中文書名與英文書名，都掛在同一個身分上。你讀哪一種語言，頁面就先用那一種名稱。',
      alt: '一張深灰色的底紙上，許多同樣大小的灰色與彩色紙片排成整齊的格線，其中一片翹起一角',
    },
    names: {
      label: '名稱',
      headline: '名稱可以有很多個，身分只有一個。',
      lead: '每個名稱都記下它的語言與用途：原名、譯名、別名或讀音。搜尋認得每一個名稱，用哪一個都找得到同一部作品。',
      names: [
        { name: '魔法禁書目錄', lang: 'zh-Hant', label: '繁體中文書名' },
        { name: 'とある魔術の禁書目録', lang: 'ja', label: '日文原名' },
        { name: 'A Certain Magical Index', lang: 'en', label: '英文書名' },
      ],
      caption: '以《魔法禁書目錄》為例，說明 REZICS 怎麼記錄一部作品。',
    },
    people: {
      label: '署名',
      headline: '人只有一個身分，署名寫明角色。',
      lead: '鎌池和馬在小說上是作者，在改編的漫畫、動畫與遊戲裡是原作，點開都是同一頁。每個名字連到一個人或組織，寫明擔任什麼、負責哪一部分；說法不一時，每一種說法連同出處並列。',
      rows: [
        { title: '鎌池和馬', body: '作者：小說。原作：改編的漫畫、動畫與遊戲。' },
        { title: '灰村清孝', body: '插畫：小說。' },
        { title: '近木野中哉', body: '作畫：漫畫。' },
      ],
      characters: '角色也一樣。同一個角色出現在小說、漫畫與動畫裡，仍是同一個身分，各部作品分別記下出場。',
    },
    layers: {
      label: '三層',
      headline: '作品、文本、發行，分三層記。',
      lead: '作品是故事本身。同一個故事有不同的文本：日文原文、中文譯本、英文譯本。每一次實際出版的，是一筆發行。',
      items: [
        { title: '作品', body: '故事本身。評論、追蹤與關聯都接在這一層。' },
        { title: '文本', body: '原文與各語言的譯本。譯本是同一部作品的另一份文本，有自己的譯者與權利。' },
        { title: '發行', body: '平裝、電子書、合訂本，每一次出版各記一筆，只寫當時印出來的內容。' },
      ],
      aside: '錯字修正和新的刷次，還是同一部作品；改寫了情節的版本另立一部，用「改寫」關係連回來。',
    },
    relations: {
      label: '關聯',
      headline: '關係記一次，兩頭各有說法。',
      lead: '這個故事分成三個系列：正篇、《新約》與《創約》。正篇接到《新約》的關係只存一筆，正篇那頁寫「續作」，《新約》那頁寫「前作」。下面是從正篇那頁看出去的六筆關係。',
      items: [
        { id: 'shinyaku', rel: '續作', name: '《新約》', line: '第二個系列，2011 至 2019 年', kind: 'books' },
        { id: 'souyaku', rel: '續作', name: '《創約》', line: '第三個系列，2020 年開始，仍在出版', kind: 'books' },
        { id: 'manga', rel: '改編作品', name: '漫畫', line: '近木野中哉作畫，2007 年開始連載', kind: 'manga' },
        { id: 'anime', rel: '改編作品', name: '動畫', line: '三季（2008、2010、2018 年）與一部電影（2013 年）', kind: 'anime' },
        { id: 'railgun', rel: '外傳', name: '《科學超電磁砲》', line: '和《科學一方通行》一樣是外傳，與正篇共用角色', kind: 'manga' },
        { id: 'vn', rel: '改編作品', name: '視覺小說', line: '2013 年推出，也列在視覺小說的目錄裡', kind: 'visual-novels' },
      ],
      note: '每一種關係都有名字、方向與出處。兩個名稱很像不算證據；沒有證據的連結，寧可不建。',
    },
    values: {
      label: '篩選',
      headline: '每一個值，都有自己的頁面。',
      lead: '人物、類型、語言、改編來源，點開都是一頁；幾個值放在一起，就是一次篩選。',
      items: [
        { title: '綁在同一次出場', body: '「主角」和某個角色綁在同一次出場上，不會湊成別的角色當主角的作品。' },
        { title: '存成檢視', body: '條件存起來，取個名字，就是一個檢視：可以追蹤，可以釘在首頁當分頁，也可以當 Zone 的目錄。' },
        { title: '翻到最後一筆', body: '每份清單都翻得到最後一筆。筆數是精確值還是下限，畫面會寫清楚。' },
      ],
    },
    merge: {
      label: '合併與拆分',
      headline: '合併可以撤回，拆分會留下去向。',
      lead: '有人用英文書名，替同一部作品多建了一筆。合併之前，REZICS 先列出所有受影響的資料，每一項衝突都要有決定。',
      items: [
        {
          title: '先找再建',
          body: '建立新項目之前，先用原文書名、別名、讀音、作者與識別碼找一遍。找到了，就加上別名或版本；書名一樣、ISBN 一樣，都只算線索，不算證明。',
        },
        {
          title: '合併',
          body: '評分、清單、書庫紀錄與 Wiki 事實都歸到留下的那一筆。同一個人的兩次評分不會變成兩票，兩本藏書也不會併成一本；舊網址照樣能開，會帶你到留下的那一筆。',
        },
        { title: '撤回', body: '撤回是一個新的決定，不是倒帶。合併之後才有的編輯，逐筆歸回該去的地方；分不清的，排進待審。' },
        { title: '拆分', body: '兩部同名的書被記成一筆時，拆開之後，舊的那一筆會說明拆成了哪幾筆，列出每一個去向。' },
        {
          title: '由人決定',
          body: '誰都能提出合併，AI 代理也可以；做決定的是審核者。已經有人使用或有爭議的合併，要兩位不同的人核准，機器人和它的操作者只算一位。',
        },
      ],
    },
    closing: '到 REZICS 找一部你熟悉的作品，看看它所有的名字。',
  },
} satisfies MiniSite<IndexStrings>;
