// The modules overview (/engine/), designed by modules agent A (src/sites/engine/SITE.md, "v3").
// `family` holds the strings of the closing every module page shares (the ring of the five
// modules). The kind picker reads each kind's eight parts and notes from kinds.ts.
// Placeholders in braces are filled at build time.
import type { MiniSite, ModuleId, PartId } from '../schema';
import { site as shared } from '../site';

export interface EngineStrings {
  family: {
    /** The ring of the five modules that closes every module page. */
    ring: { label: string; current: string; overview: string };
  };
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
  parts: { label: string; headline: string; lead: string; example: string; examples: Record<PartId, string> };
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
      label: '總覽',
      meta: {
        title: 'REZICS 模組：十五個部件，五個模組',
        description:
          '書庫、動畫、遊戲到 MCP Hub，九種東西都由同一套十五個部件組成。選一種東西，看它用哪八個部件，再看部件歸進的五個模組。',
      },
    },
  ],
  strings: {
    family: {
      ring: { label: '五個模組', current: '你在這裡', overview: '回到模組總覽' },
    },
    hero: {
      headline: '九種東西，同一套部件。',
      lede: '書、動畫、遊戲、軟體，連 MCP 伺服器也一樣：每一種都從十五個共用部件裡取八個組成。',
      alt: '五張深淺不同的灰紙疊成階梯，最上面一張排著五小張彩色紙片',
    },
    picker: {
      label: '九種東西',
      headline: '選一種東西，看它用哪八個部件。',
      lead: '部件的名字到處都一樣，做的事依這一種東西而定：書庫的版本是譯本與合訂本，遊戲的版本是平台與地區。',
      legend: '選一種東西',
      listTitle: '{kind}用到的八個部件',
      link: '前往{kind}',
      note: '每個部件都能接到任何一種東西上；這裡列的，是最能說明這一種的八個。',
    },
    statement: ['部件只做一次，', '換一種東西，換的只是排法。'],
    parts: {
      label: '十五個部件',
      headline: '十五個部件，各做一件事。',
      lead: '每一行介紹一個部件，並用示意情境說明它在不同種類裡的用途。',
      example: '示意',
      examples: {
        identity: '同一位作者寫小說也做遊戲，兩邊的製作人員欄連到同一個人。',
        names: '一部視覺小說的日文原名、中文譯名與羅馬拼音並列，用哪一個搜尋都找得到。',
        editions: '一套三冊的合訂本記成一筆發行，三冊照樣是三部作品。',
        credits: '聲優、角色與作品寫在同一筆紀錄裡，不靠事後拼湊。',
        relations: '動畫那頁寫「改編自」，原著那頁就出現「改編作品」，兩行出自同一筆紀錄。',
        facets: '「主角是女性、改編自小說的動畫」可以存成檢視，取個名字，之後直接追蹤。',
        ratings: '同一本有聲書，故事、譯文與朗讀可以分開評分。',
        discussion: '討論依閱讀位置進行，還沒讀到的人不會先看到結局。',
        wiki: '人物頁的資訊框讀的是圖上的事實，修正一次，每個用到它的頁面都跟著改。',
        lists: '一份入門清單依序排好小說、漫畫與動畫，每一項附上一句理由。',
        progress: '日文版讀完第一到十冊，改讀中文版時，從第十一冊接著算。',
        follow: '追蹤一個存好的檢視，有新項目符合條件時，你會收到通知。',
        offers: '沒有資料的供應狀況標示為未知，不會顯示成有貨。',
        specs: '一筆相容紀錄寫明用戶端、版本與觀察日期。',
        schedule: '宣布、預定、確認與延期是四種狀態，各自記錄。',
      },
    },
    modules: {
      label: '五個模組',
      headline: '部件依用途，歸進五個模組。',
      lead: '每個模組回答一個問題，各自用上幾個部件。信任是例外：它不挑部件，每一個部件底下都有它，管出處、權利與隱私。',
      roles: {
        'universal-index': '這樣東西是什麼',
        community: '人怎麼對待它',
        zones: '怎麼排成一個網站',
        create: '怎麼寫出來、送出去',
        trust: '憑什麼相信它',
      },
    },
    config: {
      label: '新的一種',
      headline: '多一種東西，是設定的工作。',
      lead: '加進一種新的東西，不必替它另寫一套後端。部件已經在那裡，要準備的是五樣設定。',
      items: [
        { title: '詞彙', body: '這一種東西有哪些類型與屬性，盡量沿用現成的語彙。' },
        { title: '對應', body: '外部資料的每個欄位，對到圖上的哪一個屬性。' },
        { title: '種子資料', body: '第一批項目，以及它們之間的連結。' },
        { title: '存好的檢視', body: '幾組常用的篩選條件，成為索引與分頁。' },
        { title: 'Zone', body: '一個網站，把這些頁面排成這一種東西的家。' },
      ],
      note: '需要新的行為時，它只做一次，成為新的部件，每一種東西都能接上。',
    },
    closing: '從你在乎的那一種開始，其他八種已經接在同一個帳號上。',
  },
} satisfies MiniSite<EngineStrings>;
