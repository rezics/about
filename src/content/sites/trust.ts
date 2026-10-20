// 信任 /engine/trust/: copy for the v3 module page (plan in src/sites/community/SITE.md). Every
// statement restates docs/contracts, docs/operations or docs/legal in rezics-next (facts.md).
import type { MiniSite } from '../schema';
import type { Figure, ModuleFamilyStrings, ModuleSection } from './community';

export interface TrustStrings {
  hero: { headline: string; lede: string; imageAlt: string };
  contentsLabel: string;
  marks: ModuleSection;
  imports: ModuleSection;
  humans: ModuleSection & { trail: { label: string; stages: string[] } };
  /** Numbers written into the policies: a numeral, its unit and one sentence. */
  numbers: ModuleSection & { figures: Figure[] };
  views: ModuleSection;
  privacy: ModuleSection;
  /** The module family (SITE.md): the ring's three labels and the page's closing line. */
  family: ModuleFamilyStrings;
}

const strings: TrustStrings = {
  contentsLabel: '本頁內容',
  hero: {
    headline: '誰決定、根據什麼，都看得到。',
    lede: '事實寫明來源，授權寫明條款，管理決定寫明依據的規則與證據。審核、爭議與申訴一筆一筆加上去，後來的不會蓋掉先前的。',
    imageAlt: '五張灰色、赭色與淡藍色的紙一層層錯開，邊緣各留著空白的紙標籤。',
  },
  marks: {
    label: '標記',
    headline: '標記只會往上加，不會被拿掉。',
    lead: '一筆資料的每個欄位都帶著標記：它從哪裡來、驗證了沒有、有沒有人質疑。要改變結論，就再加一筆新的標記，先前的照樣留著。',
    facts: [
      {
        title: '出處',
        body: '平台匯入的事實與文字，都標出來源與授權，並連回原處。授權允許什麼，就公開什麼；授權不明時只取事實。其他網站的使用者寫的評論、網誌與留言，從不搬過來。',
      },
      { title: '未驗證', body: '新建立的項目會先公開，但標成未驗證，每個欄位附上出處；驗證以前，它不會出現在可信的匯出與推薦裡。' },
      {
        title: '已審核，也可能有爭議',
        body: '審核會記下是誰、根據哪些證據、依哪一版規則。審核過，不代表沒有人質疑：同一個欄位可以同時標著已審核與有爭議，質疑在評估完成前維持待定；缺少資料或評估過時，都不算被否定。',
      },
      {
        title: 'AI 使用聲明',
        body: '文字、圖像與譯本都標明 AI 參與了多少：無、輔助或生成，是否經人審閱另外註記。標成已審閱，不會把「生成」改成「無」；沒有填的聲明，也不會被當成「無」。',
      },
      { title: '未評估', body: '適齡分級還沒評估的內容，一律標示「未評估」，絕不算成普遍級。' },
      {
        title: '自動化身分',
        body: 'AI 代理必須表明自己是自動化，寫出負責的營運者，只在授權範圍內行事，也不能偽造評論、投票或任何參與。代理的產出記下輸入與方法，不能自己授權自己，也不能把自己的成果標成經過人工審閱。',
      },
    ],
  },
  imports: {
    label: '匯入',
    headline: '平台匯入的資料，由平台負責。',
    lead: 'REZICS 自己匯入的內容，只公開來源授權的範圍。使用者輸入的內容，是使用者的貢獻與責任；工具只會提醒他寫下來源，平台則保存他提供的出處。',
    facts: [
      { title: '授權跟著文字走', body: '要求相同方式分享的開放授權簡介，改寫或翻譯後仍沿用原授權，讀取與匯出時一起帶著。' },
      { title: '封面歸權利人', body: '匯入的封面標明著作權屬於權利人，並寫出取自哪裡。封面只當封面用，不會被拿去當橫幅或展示圖。' },
      { title: '沒有封面也不留白', body: '沒有封面的作品，顯示以書名與作者排成的文字封面。' },
      { title: '授權有沒有評估過', body: '作品頁與事實頁會列出這段內容適用的授權與標示義務；還沒評估的，就寫「未評估」。' },
      { title: 'Wiki+ 的引用有上限', body: 'Wiki+ 引用原文時，每一段與每一個來源累積引用的份量都有上限，跨帳號、跨譯本、跨 Zone 合併計算。' },
      { title: 'Wiki+ 的事實逐條附位置', body: 'AI 代理整理出的 Wiki+ 事實，每一筆都附上章節位置與短引文；沒有經過人審核，讀者看不到。' },
    ],
  },
  humans: {
    label: '申訴與決定',
    trail: {
      label: '封面移除與申訴示意',
      stages: ['原決定', '申訴', '新決定'],
    },
    headline: '拍板的是人。',
    lead: '檢舉與權利申訴都是指控，不是結論。由人判斷該走一般爭議，還是法定的通知與反通知程序；決定寫明依據的規則與證據，也只作用在被指出的內容與用途上。',
    facts: [
      {
        title: '只撤下被指出的部分',
        body: '以撤下一張封面為例（示意），原處改放文字封面，作品的其他資料照樣保留；之後的資料更新，也不會把那張封面帶回來。',
      },
      { title: '申訴由人審查', body: '不同意決定的人可以申訴。人手允許時，申訴交給另一位審查者；做不到時，會告訴你是原來的人重新審查。' },
      { title: '改判也是一筆紀錄', body: '改判是新的一筆決定，原本的紀錄照樣留著。' },
      {
        title: 'AI 只是協助',
        body: 'AI 偵測器的分數，從來不是唯一的判決。用 AI 協助審查時，要記下方法、輸入與設定；結果不明確，就交給人，或維持待定。',
      },
      { title: '最敏感的證據', body: '兒童安全與私密影像的證據，絕不送進通用的生成式 AI。' },
    ],
  },
  numbers: {
    label: '時限',
    headline: '寫進規則裡的數字。',
    lead: '下面每一個數字，都出自 REZICS 的政策。',
    figures: [
      {
        value: '48',
        unit: '小時',
        body: '收到有效的移除請求後，未經同意散布的私密影像在 48 小時內移除，同時盡力找出平台上相同的副本；申訴不會讓這個時限暫停。',
      },
      {
        value: '10 到 14',
        unit: '個工作天',
        body: '收到有效的著作權反通知後，未收到權利人已提起訴訟的通知，內容於第 10 到第 14 個工作天恢復。若另有安全、法律或合約限制，會說明原因與申訴途徑。',
      },
      { value: '6', unit: '個月', body: '收到管理決定的通知後，至少六個月內都能免費申訴；連「決定不處理你的檢舉」也能申訴。' },
      { value: '13', unit: '歲', body: '註冊的最低年齡：一般為 13 歲，南韓 14 歲，歐洲經濟區 16 歲。' },
      { value: '7', unit: '天', body: '匯入書庫的原始資料保留七天，到期後無法再讀取或匯出，並排程刪除；想保留原始欄位，需在到期前匯出書庫。' },
      { value: '1', unit: '個月', body: '適用 GDPR 的資料請求，通常在一個月內回覆；需要延長時，會在第一個月內說明。' },
    ],
    note: '沒有帳號，或帳號已被停權，都能檢舉與申訴。',
  },
  views: {
    label: '可見範圍',
    headline: '同一頁，不同的人看到的範圍不同。',
    lead: '每一次讀取與送出，伺服器都一併檢查封鎖、隱私、閱讀進度、管轄與撤回。搜尋結果、筆數、預覽、通知、匯出，以及 AI 代理讀到的內容，套用的是同一套規則。',
    facts: [
      { title: '沒有登入的人', body: '看到普遍級與未評估的內容。作品的 Wiki+ 從故事開頭讀起，不洩漏後面的情節。' },
      { title: '讀到第三章的你', body: 'Wiki+ 與討論停在你讀完的地方。想看到哪一章，或全部顯示，都能自己選。' },
      {
        title: '分級內容',
        body: 'R15 從十五歲開始。性內容（R18）與獵奇內容（R18G）要分別開啟，兩種都有的內容，兩項都開才看得到；在不提供成人內容的地區，這兩項無法開啟。分級只決定畫面怎麼顯示，不會讓你讀到沒有權限的私人內容。',
      },
      { title: 'Realm 管理員', body: '只取得管理需要的資訊，不能任意查看成員的帳號、私人書庫或機密的安全檢舉。' },
      { title: '搜尋引擎與分享預覽', body: '只拿到未登入時的樣子。成人內容也不會出現在電子郵件與推播通知裡。' },
      { title: '圖片遮罩', body: '可能不適合在公共場合看的圖片，預設先遮起來，要不要直接顯示由你決定；作者自己遮住的圖，仍然維持遮住。' },
    ],
  },
  privacy: {
    label: '隱私',
    headline: '你的閱讀紀錄，不會變成廣告。',
    facts: [
      {
        title: '不做廣告輪廓',
        body: '讀過的書不會被整理成廣告輪廓，也不會被拿來猜測你的敏感特質。網站上沒有廣告追蹤器，個人資料也不賣；REZICS 自己的 Cookie 只用在介面語言、外觀主題與登入。',
      },
      {
        title: '訓練須另行同意',
        body: '訓練 AI 模型時，預設不會用到你沒公開的草稿和閱讀紀錄；只有你另外明確選擇加入才會，註冊或使用 AI 功能都不算同意。',
      },
      { title: '送出以前先說明', body: '選用的 AI 功能要把私人資料送到外部服務以前，會先說明是哪一家、送出什麼、用途與保存多久。' },
      { title: '預設不公開', body: '草稿與閱讀紀錄預設不公開，只有你主動分享才會讓其他使用者看見；就算別人替你管理公開身分或 Realm，也碰不到你的私人閱讀紀錄。' },
      { title: '生日不公開', body: '生日預設不公開；開啟分級內容不會公開生日，年齡資格也和生日公不公開無關。' },
      { title: '你的資料，你可以要', body: '想查看、更正、匯出或刪除自己的資料，都可以提出請求，沒有帳號也可以。' },
    ],
  },
  family: {
    ring: { label: '五個模組', current: '你在這裡', overview: '回到模組總覽' },
    closing: '每一筆都寫明出處，你可以自己去查。',
  },
};

export default {
  id: 'trust',
  base: '/engine/trust/',
  name: '信任',
  theme: { module: 'trust' },
  pages: [
    {
      slug: '',
      label: '總覽',
      meta: {
        title: '信任：每一筆都有出處',
        description:
          'REZICS 的資料標明來源與授權，審核、爭議與申訴一筆筆記下，不會互相覆蓋。沒註冊也能檢舉；未經同意散布的私密影像，收到有效請求後 48 小時內移除。',
      },
    },
  ],
  strings,
} satisfies MiniSite<TrustStrings>;
