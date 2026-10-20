// 創作與發行 /engine/create/: copy for the v3 module page (plan in src/sites/community/SITE.md,
// sources in src/sites/community/facts.md).
import type { MiniSite } from '../schema';
import type { ModuleFamilyStrings, ModuleSection, ModuleStatement } from './community';

export interface CreateStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  writing: ModuleSection;
  world: ModuleSection;
  chapters: ModuleSection;
  editions: ModuleSection & {
    specimen: {
      label: string;
      items: { title: string; value: string; unit: string; note: string }[];
      caption: string;
    };
  };
  copyright: ModuleStatement;
  rights: ModuleSection;
  sell: ModuleSection;
  /** The statement of account: its lines and what fills each, never amounts or shares. */
  account: ModuleSection & {
    rows: { label: string; detail: string; kind: 'paid' | 'deduct' | 'net' | 'share' }[];
    deduct: string;
    caption: string;
  };
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: CreateStrings = {
  contentsLabel: '本頁內容',
  hero: {
    headline: '作者、版次與權利，每一筆都記清楚。',
    lede: '寫稿、排程、發出章節都在這裡。每次正式發行都封存起來，譯本與授權逐筆記名；直接賣書與遊戲時，結算單列出每一筆扣除。',
    imageAlt: '兩疊用深灰紙條沿一邊裝訂起來的紙，疊在一起，側邊露出一層層顏色。',
  },
  writing: {
    label: '寫作',
    headline: '存過的每一版，都找得回來。',
    lead: '長篇寫作打開完整的工具列，回覆討論時只留最常用的幾個格式。在手機上，工具列貼在鍵盤上方，按下去鍵盤也不會收起；一章再長，打起字來也和一則短回覆一樣順。',
    facts: [
      { title: '存檔就是一筆修訂', body: '每次存檔都留下確切的一版。把一章清空，也會存成一筆空白修訂；空白的章節則不能發布。' },
      { title: '照你的時區上線', body: '排定星期五晚上八點，就在你所在時區的那個時刻發布。排程在伺服器上執行，電腦關機也不影響。' },
      { title: '協作者各有分寸', body: '邀人一起寫時，可以只讓對方閱讀、提建議、直接編輯或發布，四項各自授權；改得了稿，不代表按得下發布。讀者與協作者的意見，集中在一個回饋收件匣。' },
      { title: '整部作品帶得走', body: '作品可以完整備份，並以保留全部格式的檔案匯出；純文字是另外選擇的簡化版。舊的純文字與 Markdown 稿子也能讀進來接著寫。' },
      { title: '旁註與強調', body: '編輯器可以加上旁註，例如注音或假名，也能加強調標記；日文作品支援直排閱讀。' },
    ],
  },
  world: {
    label: '設定集',
    headline: '寫作旁邊，有一個只屬於你的世界。',
    lead: '人物、地點、勢力、事件、道具與設定，各有可以改版的範本，放在稿子旁邊，只有你看得到。',
    facts: [
      { title: '地圖', body: '把地點標在你自己繪製的地圖上。' },
      { title: '關係圖', body: '把人物之間的關係連成一張圖。' },
      { title: '年表', body: '日期不確定的事件，也排得進年表。每一張圖都附有可以逐條閱讀的清單版本。' },
      { title: '挑幾頁公開', body: '要公開時，挑幾頁發布到作品的 Wiki+；你私下改過幾次，讀者看不到。' },
      { title: '連貫性助手', body: '選用的助手只標出筆記和稿子互相矛盾的地方，章節還是你自己寫。' },
      { title: '不必訂閱', body: '設定集與可以再匯入的完整匯出，都不需要付費訂閱。' },
    ],
  },
  chapters: {
    label: '章節',
    headline: '發一章，就是把一則貼文放進一本書。',
    lead: '章節不會另外變成一部作品。書才是作品，評分、追蹤與作者署名都在書上；每一章是一則貼文，排進書的目錄。',
    facts: [
      { title: '同一章，放在兩處', body: '同一則章節可以同時排進連載與合集。內文與留言都只存一份，閱讀進度在每個位置各自記。' },
      { title: '只有圖或投票也行', body: '一則只放圖片或只放投票，也能直接發出去，不需要配一段文字。' },
      { title: '作者的話不算正文', body: '寫在章末的作者的話，是貼文的附帶部分：字數不計入，翻譯時略過，作品正式發行時也不收錄。' },
      { title: '從下一章接著讀', body: '首頁的「繼續」一欄直接打開下一個沒讀過的章節；章節的討論停在讀者讀到的位置，超過進度的劇透先藏起來。' },
      { title: '留言釘在原文上', body: '留言與引用記下當時的修訂與段落。作者之後改稿，留言也不會跑到別的句子旁邊。' },
    ],
  },
  editions: {
    label: '版次',
    specimen: {
      label: '版次示意',
      items: [
        { title: '主版本', value: '13', unit: '章', note: '加入新章後繼續更新' },
        { title: '已封存的第一版', value: '12', unit: '章', note: '仍是發行當時的內容' },
      ],
      caption: '同一部作品，第十三章加入主版本後，第一版仍只收錄前十二章。',
    },
    headline: '發行過的就封存，後來的另立一筆。',
    lead: '每部作品有一條持續更新的主版本，新的章節與語言一直加進來。正式發行則是從主版本封存下來的紀錄，只記當時真正出版的內容；之後的翻譯與增補，一律另立一筆，再指回它的來源。',
    facts: [
      { title: '主版本', body: '每部作品都有唯一的主版本，所有讀者從這裡進來。新的章節、新的語言都加在這裡，作品的身分不會因此分岔。' },
      { title: '網路連載', body: '在網路上連載的版本，也算一種發行。內容會變，所以記下原始網址與每一次的日期快照，每張快照各自封存。' },
      { title: '固定版本', body: '選好已發布的內容，封存成一個固定版本。之後再出新章，也不會出現在這一版裡。' },
      { title: '一版，多個通路', body: '一個版本可以同時放在許多商店與網站，地方再多都只是一筆發行；擅自轉貼的版本另立紀錄，從不併入正式版。' },
      { title: '譯本', body: '譯本是新的內容版本，寫明譯自哪一次修訂或哪一版。來源不清楚就標成未確定，不靠猜。' },
      {
        title: '讀者的翻譯',
        body: '讀者翻譯網路作品，譯文收在一個虛擬發行裡，寫明翻到哪裡，例如「一百章裡的前二十章」（示意）。虛擬發行只是 REZICS 上的整理，不表示這個版本曾經出版。',
      },
    ],
    note: '每筆發行都標明狀態：正式、非官方、虛擬、停止發行或取消。狀態變了，紀錄還在。',
  },
  copyright: {
    statement: '公開讓人閱讀，',
    sub: '不等於別人可以轉載、販售、翻譯，或拿去訓練 AI。',
  },
  rights: {
    label: '譯本與權利',
    headline: '譯本記在譯者名下，權利一項一項寫明。',
    lead: '誰能翻譯、譯文能不能公開、作品用了多少 AI，沒有一項靠默許。每一項都是一筆記了名字、記了時間的聲明。',
    facts: [
      {
        title: '服務授權有範圍',
        body: '著作權留在你手上。放上 REZICS 的內容，你只授權 REZICS 為了你使用的服務去儲存、傳送、顯示與轉換格式；這份授權不包括廣告用途、出售你的私人內容、推出新的商業版本，也不包括不受限制的 AI 訓練。',
      },
      { title: '每個譯本各自署名', body: '一部作品可以同時有幾個譯本，讀者與 Realm 各自選用，每個譯本都記在譯者名下。作者有權拒絕讓原作頁面連到某個譯本，也能走權利申訴。' },
      {
        title: '公開要有依據',
        body: '讀者做的翻譯，預設是私人的。要讓別人看見，必須有一個記錄下來的理由：原作已進入公有領域、採用允許翻譯的開放授權、取得作者同意，或作者早已公開允許翻譯。社群投票無法讓譯文公開。',
      },
      {
        title: '一段一段的進度',
        body: '每段譯文都有狀態：初稿、已譯、已校、定稿。原文某段改了，那段譯文就掛上「需要更新」，原封不動地留著，不會跟著挪到新句子底下。',
      },
      {
        title: '授權聲明',
        body: '每筆授權聲明都寫明：授權給什麼、用哪一份條款的哪個版本、誰宣告、何時、涵蓋到哪裡。不知道的就寫不知道；聲明本身不等於法律上的授權確認。作者也能公開一份常設授權，例如允許翻譯，收回時，當初的聲明不會被改寫。',
      },
      {
        title: 'AI 使用聲明',
        body: '文字、圖像與譯本分別標明 AI 參與了多少：無、輔助或生成；是否經人審閱單獨註記，讀者可以只挑自己想看的。',
      },
    ],
  },
  sell: {
    label: '發行',
    headline: '書與遊戲，可以直接賣給讀者。',
    lead: '和 REZICS 簽約的創作者，可以把書與遊戲直接賣給讀者。書是 EPUB 或 PDF，遊戲與視覺小說是可以下載的檔案；都不加 DRM，也不需要啟動器。',
    facts: [
      { title: '買之前就看清楚', body: '結帳前列出版本、語言、相容需求、價格、稅、賣方、使用授權與退款條件。' },
      { title: '試讀、更新、再下載', body: '讀者可以先看樣章；買下以後收得到更新，檔案隨時能再下載。' },
      { title: '下架了也還在', body: '作品下架或合約結束，已經買下的人仍然保有使用授權。' },
      { title: '讀者的隱私', body: '買你作品的人，閱讀紀錄與書庫不會因此交給你。你拿到的是對帳需要的彙總資料。' },
      { title: '合約只授權發行', body: '發行合約只讓 REZICS 代管、轉檔、宣傳與銷售。翻譯、改編、新版本與 AI 訓練，都要另外取得你的同意。' },
      { title: '只替簽約的創作者販售', body: '這裡不是開放市集。露骨的性內容，以及分級為 R18、R18G 的作品，都不在販售之列。' },
    ],
  },
  account: {
    label: '結算',
    headline: '帳一筆一筆算給你看。',
    lead: '淨收入是實際收到的款項，扣掉代收的稅、實際的金流手續費與退款。主機、薪水、行銷這些營運成本，還有 REZICS 自己要繳的所得稅，都不算扣除項。',
    rows: [
      { label: '讀者付款', detail: '讀者實際付出的金額，含稅', kind: 'paid' },
      { label: '稅', detail: '依法代收、代繳的稅', kind: 'deduct' },
      { label: '金流手續費', detail: '實際發生、有單據的費用', kind: 'deduct' },
      { label: '退款', detail: '退回給讀者的款項', kind: 'deduct' },
      { label: '淨收入', detail: '付款扣掉上面三項', kind: 'net' },
      { label: '創作者的分成', detail: '依合約比例撥給你', kind: 'share' },
      { label: 'REZICS 的分成', detail: '依合約比例留給平台', kind: 'share' },
    ],
    deduct: '扣除',
    caption: '結算單示意：每一項扣除各占一行，任何一筆都不會重複扣，金額依每筆交易計算。',
  },
  family: {
    ring: { label: '五個模組', current: '你在這裡', overview: '回到模組總覽' },
    closing: '你寫作，REZICS 替你記下每一版與每一筆帳。',
  },
};

export default {
  id: 'create',
  base: '/engine/create/',
  name: '創作與發行',
  theme: { module: 'create' },
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: '創作與發行：稿子、版次與結算',
        description:
          '在 REZICS 寫作、排程、發布章節，每次存檔都留下修訂。每一版發行各自封存，譯本記在譯者名下，權利逐項聲明。也能直接賣書與遊戲，結算單列出每一筆扣款。',
      },
    },
  ],
  strings,
} satisfies MiniSite<CreateStrings>;
