// 社群 /engine/community/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md). The section shapes are shared with create and trust.
import type { Item, MiniSite } from '../schema';

/** A v3 section: eyebrow, serif heading, lead text and an optional hairline facts list. */
export interface ModuleSection {
  label: string;
  headline: string;
  lead: string;
  facts?: Item[];
  note?: string;
}

/** The module family's strings: the ring of the five modules and the page's closing line. */
export interface ModuleFamilyStrings {
  ring: { label: string; current: string; overview: string };
  closing: string;
}

/** A large serif statement; `sub` is its muted second half. */
export interface ModuleStatement {
  statement: string;
  sub: string;
  body?: string;
}

export interface CommunityStrings {
  hero: { headline: string; lede: string; imageAlt: string };
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
  ratings: ModuleSection;
  follow: ModuleSection;
  feed: ModuleSection;
  recognition: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CommunityStrings = {
  hero: {
    headline: '你是說話的人，Realm 是接待你的場地。',
    lede: '一個人只有一個公開身分，評論、清單與書庫跟著你走進每個 Realm。Realm 給你話題、規則與管理，不會把你收進它的名下。',
    imageAlt: '許多小紙片圍在一張較大的深灰色紙片四周，像一群人聚在同一張桌子旁。',
  },
  person: {
    label: '身分',
    headline: '一個公開身分，走過每一個 Realm。',
    lead: '你可以用筆名，只是不能冒充別人。書庫、清單、評論、作品、譯本與討論都歸在這個身分名下，不屬於任何一個社群；換一個 Realm，你還是同一個人。',
    facts: [
      { title: '改名不斷線', body: '改名之後，舊網址會轉到新名字；跟別人長得太像的名字會被擋下。' },
      { title: '認領你的作品', body: '資料庫裡已經收錄你的作品時，你可以認領那個身分。' },
      { title: '追蹤是單向的', body: '別人追蹤你，不必等你同意，你也可以拒絕。要收哪些通知、收多少，由追蹤的人自己設定。' },
      { title: '貼文留在原處', body: '離開一個 Realm 以後，你在那裡的貼文仍然署著你的名字，也還留在那裡。' },
      {
        title: 'Realm 開口的時候',
        body: 'Realm 也會用自己的名義發出精選與決定，只能由它授權的代表發出，每一筆精選都連到背後的決定。你的貼文放在 Realm 裡，不會因此變成 Realm 的發言。',
      },
    ],
  },
  lead: {
    label: '署名',
    headline: '貼文上誰先出場，照一條固定的規則。',
    lead: '每則貼文同時寫著你和 Realm 的名字。對還不認識你的人，名字說明不了什麼，所以先讓他看見場地；追蹤你以後，就先看見你。',
    specimen: {
      toggleLabel: '切換觀看的人',
      toggle: ['追蹤你的人看到', '還沒追蹤你的人看到'],
      you: '你',
      realm: '奇幻小說讀書會',
      follow: '追蹤',
      post: '第三卷的結尾，比我想的還要安靜。',
      caption: '示意：同一則貼文，兩種讀者看到的署名。',
    },
    facts: [
      { title: '讀者追蹤了你', body: '先寫你，再寫 Realm。' },
      { title: '貼文不在任何 Realm 裡', body: '署名從你開始。' },
      { title: '其他情況', body: '先寫 Realm，追蹤按鈕就在同一行。' },
      { title: 'Realm 的精選與決定', body: '只寫 Realm，不寫挑選的人。' },
    ],
    note: '先出場的一方排在最前面，加上圖示與粗體。規則固定，同一則貼文不會每次換一種樣子。',
  },
  realm: {
    label: 'Realm',
    headline: 'Realm 是場地，規矩由它來定。',
    lead: '誰能進來、新成員看得到多少、內容怎麼管，每個 Realm 自己決定，並把設定寫在看得到的地方。',
    facts: [
      { title: '三種加入方式', body: '開放加入、申請加入或受邀加入。加入會同時追蹤這個 Realm；離開時，只取消因為加入而來的那個追蹤。' },
      { title: '規則用每種語言寫', body: '講中文的成員讀中文版，講日文的讀日文版；發文也不限語言。' },
      {
        title: '讀得到，不一定找得到',
        body: 'Realm 可以公開給人讀，同時不出現在搜尋、推薦與網站地圖裡。私密 Realm 若接受申請，外人只看得到名稱、介紹、規則與申請按鈕。',
      },
      { title: '新成員從哪裡讀起', body: '私密 Realm 可以讓新成員讀到全部歷史，或只從加入那天開始讀。' },
      { title: '檢舉成為案件', body: '成員檢舉的內容成為一個案件，處理結果附上理由，當事人可以申訴。' },
      { title: '投票決議', body: 'Realm 可以發起投票；通過的決議，只能執行這個 Realm 本來就獲准做的事。' },
      { title: '不能說關就關', body: '擁有者無法自行關閉 Realm。只有平台會因為管理或權利問題讓整個 Realm 下架，也能再恢復。' },
      { title: '平台規則優先', body: 'Realm 可以把規矩訂得比平台更嚴，不能更鬆。' },
    ],
  },
  leave: {
    statement: '你隨時可以離開一個 Realm，',
    sub: '因為你的身分、書庫與清單，本來就不在它裡面。',
  },
  ratings: {
    label: '評分',
    headline: '分數旁邊，寫著問題、對象與評分的人。',
    lead: '每個分數都標出三件事：問的是什麼、評的是哪一個對象、由哪一群人評。問的不是同一件事，分數就不會被平均在一起；單集的分數不算進整部，某一版的分數留在那一版。',
    facts: [
      { title: '5 則', body: '一部作品有 5 則評分以後才顯示平均；不足時只列出筆數與分布，再告訴你還差幾則。' },
      { title: '10 則', body: '細分的對象，例如單一集數裡的一個角色，要 10 則才顯示平均。' },
      { title: '50 則', body: '從 50 則評分起才能進入排行榜，排行榜公開它採用的平均值與權重。' },
      { title: '評論可以不打分', body: '評論寫明評的是故事、翻譯、朗讀還是製作，以及哪一個版本。' },
      { title: '換一群人看', body: '預設先看全站，旁邊排著你所在的 Realm 和評分最多的幾個 Realm，其他社群的分數也都找得到。' },
      { title: '沒有評分，就不畫', body: '一則評分都沒有時，畫面不顯示零分，也不畫空白的分布圖。' },
    ],
    note: '門檻是預設值，每一種評分可以依自己的資料調整。',
  },
  follow: {
    label: '追蹤',
    headline: '想追蹤什麼，就追蹤什麼。',
    lead: '人、組織、Realm、作品、主題、清單，連一組存起來的篩選條件都能追蹤。每一個追蹤各有三段通知：全部、精選或關閉。',
    facts: [
      { title: '人與組織', body: '預設通知新作品與公告。' },
      { title: '作品', body: '在你看得懂的語言有新章、新版本時通知；放進「閱讀中」就自動追蹤。' },
      { title: 'Realm', body: '預設只通知公告與決定，一般貼文留在動態裡。' },
      { title: '主題與檢視', body: '預設不通知，各自成為首頁上的一個分頁。' },
      { title: '清單', body: '清單不分種類，小說後面可以接著動畫和遊戲。每一項寫得下註解，順序由你排，整份隨時匯出。' },
      { title: '關閉也不漏掉你', body: '通知關閉時，回覆、提及這類直接牽涉到你的事照樣通知。' },
    ],
  },
  feed: {
    label: '動態',
    headline: '最新的排在最前面，看完了會告訴你。',
    lead: '追蹤動態的「最新」完全照時間排列，不會偷偷重排；換一種排法時，也看得到它依據的是什麼。',
    facts: [
      { title: '「最佳」各自計分', body: '「最佳」排序在每個 Realm 裡各自計分，一頁不會被同一個 Realm 佔滿，小 Realm 也看得到。' },
      { title: '推薦寫明理由', body: '推薦只參考你的追蹤、語言與書庫，每一則寫明理由，也可以整個關掉。' },
      { title: '靜音、忽略與封鎖', body: '三件不同的事，放在同一個選單裡。' },
      { title: '在哪裡收通知', body: '收件匣、推播與定期的郵件摘要可以分開選；不想再收的郵件，按一下就退訂。' },
    ],
  },
  recognition: {
    label: '等級',
    headline: '被採納的貢獻才算數，簽到不算。',
    lead: '每個 Realm 有自己的經驗值與等級，來源是被採納、真正幫上忙的評論、修正、翻譯、管理與創作。等級不能花用，不能轉讓，也不代表管理權；用多個帳號灌水換等級，違反使用規範。',
  },
  family: {
    ring: { label: '五個模組', current: '你在這裡', overview: '回到模組總覽' },
    closing: '想自己決定每一頁，就替社群架一個站點。',
  },
};

export default {
  id: 'community',
  base: '/engine/community/',
  name: '社群',
  theme: { module: 'community' },
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: '社群：一個人，走過每個 Realm',
        description:
          '你在 REZICS 只有一個公開身分，書庫、清單與評論跟著你進出每個 Realm。Realm 提供場地、規則與管理，評分寫明問題與對象，追蹤與通知由你設定。',
      },
    },
  ],
  strings,
} satisfies MiniSite<CommunityStrings>;
