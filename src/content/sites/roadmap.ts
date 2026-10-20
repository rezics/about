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
      label: '總覽',
      meta: {
        title: 'REZICS 路線圖：橫向建造，縱向開放',
        description:
          'REZICS 只有一套引擎，社群一個接一個開放。九種東西已經在 REZICS 上；之後的每一種，用的都是同一套部件，新的能力也只做一次。',
      },
    },
  ],
  strings: {
    hero: {
      headline: '引擎橫著蓋，社群逐一開。',
      lede: 'REZICS 不替每個領域另做一套系統。一套引擎橫跨所有種類；社群則一次開一個，往下做深、做到完整。',
      alt: '一長條深灰色的紙從紙捲上展開，上面依序放著六小張彩色紙片',
    },
    order: {
      label: '順序',
      headline: '沒有日期，只有順序。',
      lead: '每一步都建在前一步上，前面累積的身分與關係，後面直接沿用。',
      steps: [
        { title: '先有部件', body: '十五個部件共用，每個只做一次，依各種東西的需要接上。' },
        {
          title: '九種東西',
          body: '書庫、動畫、漫畫、遊戲、軟體、視覺小說、MCP Hub、Skill Hub 與 API Hub 都在 REZICS 上，食譜也在。每部作品的 Wiki+ 與書庫追蹤，是其中的主角。',
        },
        { title: '一次一個社群', body: '接下來每次只開一個社群。條件有兩個：已經有人在這裡花心思，而且它能替圖帶來新的連結。' },
        {
          title: '更多種類',
          body: '互動小說、科幻與奇幻書目、模型與評測，一種一種加進來。每加一種都是設定的工作，後端不替它多寫一行專屬的程式。',
        },
        {
          title: '新的能力',
          body: '需要新的行為時，它只做一次，有需要的種類都能用。地點、統計、排行、自動化、挑戰、紀錄匯入、邀請、名稱認證與付費會員，都這樣加進來。',
        },
      ],
    },
    further: {
      label: '更多種類',
      headline: '九種之外，還有更多種。',
      lead: '下面這些，用的都是同一套部件；作品活動、巡禮地點與專門書店，再多用上地點這一項能力。',
      items: [
        { title: '科幻與奇幻', body: '選集裡的每一篇都是自己的作品，查得到哪一本收了你要的那篇譯文，不會重複買到。' },
        { title: '互動小說', body: '找你讀得懂的短篇作品，標明需要的直譯器與平台，連到可以玩的地方。' },
        { title: '模型與評測', body: '每個分數寫明模型版本、評測條件、資料集與日期；使用者評論另外放。' },
        { title: '作品活動', body: '展會、簽名會與發售活動連到作品、創作者、場地與日期，購票在主辦方的網站。' },
        { title: '巡禮地點', body: '公開的作品場景地點，依你的進度避開劇透；不收私人住處，也不記錄你的行蹤。' },
        { title: '專門書店', body: '由店家確認的書店。某個版本有沒有貨，只依合作店家的資料，沒有就標示未知。' },
      ],
    },
    statement: ['部件很少增加，種類一直在增加；', '每多一種，用的還是同一套引擎。'],
    promises: {
      label: '一張圖',
      headline: '只有一張圖，才做得到的事。',
      lead: '種類越多，連結越多。下面這幾件事，要每一種東西都在同一張圖上才做得到。',
      items: [
        { title: '跟著故事走完', body: '小說、漫畫、動畫到遊戲，閱讀與觀看的順序、哪裡看得到，排在同一條線上。' },
        { title: '知道下一步的書庫', body: '讀的、看的、玩的放進同一個書庫，每一種保留自己的進度單位、版本與語言。' },
        { title: '清單變成計畫', body: '不分種類的清單排好順序、寫上註記，再變成行事曆或地圖。' },
        { title: '跟著一個人', body: '追蹤一位創作者，就看得到這個人的書、遊戲、製作紀錄與貢獻，全在同一個身分下。' },
        { title: '帶到現實', body: '你追蹤的作品有展會、簽名會或巡禮地點時，你會知道。' },
      ],
    },
    constant: {
      label: '不會變的事',
      headline: '一路上不會變的事。',
      items: [
        { title: '一套引擎', body: '不拆成一個領域一個網站，也不替每種語言另開一個資料庫。' },
        { title: '不堆頁面', body: '不靠廣告堆頁面，也不為了搜尋排名或 AI 的引用大量生成頁面。' },
        { title: '創作者的款項', body: '不拿創作者應得的款項周轉。' },
        { title: '貢獻者的授權', body: '不承諾超出貢獻者授權範圍的資料用途。' },
        { title: '地點與活動', body: '只收和作品、創作者相連的那些。' },
      ],
    },
    closing: '下一種東西加進來時，你的帳號與紀錄都還在原處。',
  },
} satisfies MiniSite<RoadmapStrings>;
