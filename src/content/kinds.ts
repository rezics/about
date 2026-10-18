// PLACEHOLDER CONTENT: the lead replaces this file with the final copy. Keep the export shape.
import type { Kind } from './schema';

export const kinds: Kind[] = [
  {
    id: 'books',
    name: '書庫',
    group: 'works',
    summary: '書的版本、譯本與閱讀進度',
    meta: {
      title: '書庫',
      description:
        '在 REZICS 書庫裡，每本書只有一個身分，版本、譯本、作者與你的閱讀進度都接在上面，換一種語言查也是同一本書。',
    },
    hero: {
      headline: '每本書，一個身分',
      lede: '同一本書的精裝、平裝、電子版與各國譯本都歸在一處。你看到的是書本身，不是一堆重複的條目。',
    },
    features: [
      { title: '找到正確的版本', body: '版次、出版社、譯者與頁數分開列出，挑你要的那一版。' },
      { title: '記下讀到哪裡', body: '想讀、在讀、讀完，連同每次閱讀的日期。' },
      { title: '從作者往外找', body: '作者、譯者與繪者各有頁面，作品依角色排好。' },
      { title: '看懂一個系列', body: '續作、外傳與改編依順序連起來。' },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'progress', 'ratings', 'wiki', 'offers'],
    partNotes: {
      identity: '一本書在所有語言裡共用一個身分。',
      editions: '每個版次與譯本有自己的資料。',
      credits: '作者、譯者、繪者與編輯各自標明。',
      relations: '系列、續作與改編彼此相連。',
      progress: '你的書架記得每本書讀到哪裡。',
      ratings: '評分會說明是哪個譯本、哪次重讀。',
      wiki: '書的 Wiki+ 頁面由事實自動整理。',
      offers: '有販售的版本會列出價格與購買處。',
    },
    connections: [
      { to: 'manga', label: '改編成漫畫' },
      { to: 'anime', label: '改編成動畫' },
      { to: 'visual-novels', label: '同一位作者' },
    ],
    community: {
      headline: '讀者把書讀成一張網',
      body: '書評、讀書會的討論串與共編的清單都掛在書的身分上，換個版本也找得到。',
    },
    imageAlt: '綠色版面上疊著三本精裝書，最上面攤開一本。',
  },
  {
    id: 'anime',
    name: '動畫',
    group: 'works',
    summary: '播出日程、製作陣容與追番',
    meta: {
      title: '動畫',
      description:
        'REZICS 動畫收錄每部作品的播出日程、製作陣容與原作關聯，追番進度與每集討論都接在同一部作品的身分上。',
    },
    hero: {
      headline: '追番，從同一部作品開始',
      lede: '每一季、每一集與每次重播都屬於同一部作品。播出時間、製作人員與原作關係一次看清楚。',
    },
    features: [
      { title: '本季在播什麼', body: '依播出日排好的節目表，可以只看你追的。' },
      { title: '記下看到第幾集', body: '每集看完就記一筆，下一集何時播也一起顯示。' },
      { title: '認識製作陣容', body: '導演、腳本、作畫與聲優各有自己的作品列表。' },
      { title: '每集都有討論', body: '討論依集數分開，不怕先看到後面的劇情。' },
    ],
    parts: ['identity', 'schedule', 'credits', 'relations', 'progress', 'ratings', 'discussion', 'wiki'],
    partNotes: {
      identity: '一部動畫的每一季都歸在同一個身分下。',
      schedule: '播出日期與時段依地區列出。',
      credits: '製作公司、主要職務與聲優完整標明。',
      relations: '原作、續季與劇場版連在一起。',
      progress: '追番紀錄停在你看完的那一集。',
      ratings: '可以為整部或單集評分。',
      discussion: '每集一串，依集數排好。',
      wiki: '角色與設定頁由社群共同整理。',
    },
    connections: [
      { to: 'manga', label: '原作漫畫' },
      { to: 'books', label: '原作小說' },
      { to: 'games', label: '改編遊戲' },
    ],
    community: {
      headline: '一起看，各自寫下感想',
      body: '每集的討論、季度清單與排名都屬於作品本身，誰都能接著補充。',
    },
    imageAlt: '粉紅色版面上一格動畫賽璐珞片，框著簡單的人影。',
  },
  {
    id: 'manga',
    name: '漫畫',
    group: 'works',
    summary: '單行本、連載與各國譯本',
    meta: {
      title: '漫畫',
      description:
        'REZICS 漫畫把連載、單行本與各國譯本歸在同一部作品下，記錄你讀到第幾話，也標出作者、出版社與改編作品。',
    },
    hero: {
      headline: '連載與單行本，一部作品',
      lede: '雜誌連載的每一話與集結的每一冊都接在同一部漫畫上。換一個語言的版本也不會重複。',
    },
    features: [
      { title: '讀到第幾話', body: '依話數或冊數記錄，兩種算法都可以。' },
      { title: '收齊單行本', body: '每一冊的出版日、封面與版次清楚列出。' },
      { title: '找到譯本', body: '各地區的出版社與譯本依語言排好。' },
      { title: '看見改編', body: '動畫、真人劇與遊戲都從同一頁連出去。' },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'progress', 'ratings', 'discussion', 'offers'],
    partNotes: {
      identity: '連載與單行本共用一個身分。',
      editions: '每個地區的單行本各自記錄。',
      credits: '原作、作畫與譯者分別標明。',
      relations: '外傳、續作與改編一路相連。',
      progress: '依話或依冊記下閱讀進度。',
      ratings: '評分可以只針對某一卷。',
      discussion: '每話的討論依順序排好。',
      offers: '有販售的冊數列出價格與購買處。',
    },
    connections: [
      { to: 'anime', label: '改編成動畫' },
      { to: 'books', label: '同一位作者' },
      { to: 'games', label: '改編遊戲' },
    ],
    community: {
      headline: '讀完一話，就有地方說',
      body: '每話的討論、收藏清單與評分都跟著作品走，不會散落各處。',
    },
    imageAlt: '深色版面上一頁漫畫原稿，分格裡有網點。',
  },
  {
    id: 'games',
    name: '遊戲',
    group: 'works',
    summary: '平台、版本與相容性證據',
    meta: {
      title: '遊戲',
      description:
        'REZICS 遊戲收錄每款遊戲在各平台的版本、規格與相容性證據，評分、討論與購買資訊都接在同一款遊戲的身分上。',
    },
    hero: {
      headline: '一款遊戲，所有平台',
      lede: '主機版、電腦版與各種重製都歸在同一款遊戲下。規格與相容性有證據，評分說明玩的是哪一版。',
    },
    features: [
      { title: '比較各平台版本', body: '解析度、語言與內容差異逐項列出。' },
      { title: '查相容性', body: '玩家回報的實測結果附上硬體與設定。' },
      { title: '追蹤製作團隊', body: '開發商、發行商與主要成員各有頁面。' },
      { title: '找到購買處', body: '有販售時，列出平台、價格與地區。' },
      { title: '寫下遊玩心得', body: '評論會標明平台與遊玩時數。' },
    ],
    parts: ['identity', 'editions', 'credits', 'relations', 'specs', 'ratings', 'discussion', 'offers'],
    partNotes: {
      identity: '一款遊戲的所有平台版本共用一個身分。',
      editions: '平台版本、重製與資料片分開記錄。',
      credits: '開發與發行的團隊完整標明。',
      relations: '系列作、重製與改編彼此相連。',
      specs: '硬體需求與實測相容性附上證據。',
      ratings: '評分會註明平台與版本。',
      discussion: '攻略與討論依版本整理。',
      offers: '各平台的價格與購買處並列。',
    },
    connections: [
      { to: 'software', label: '執行環境' },
      { to: 'anime', label: '改編動畫' },
      { to: 'visual-novels', label: '相近類型' },
    ],
    community: {
      headline: '玩家的經驗留在遊戲上',
      body: '心得、攻略與相容性回報都屬於那款遊戲，後來的人一查就找得到。',
    },
    imageAlt: '藍色版面上一支遊戲手把，按鍵是紅色與白色。',
  },
  {
    id: 'software',
    name: '軟體',
    group: 'works',
    summary: '版本、規格與相容紀錄',
    meta: {
      title: '軟體',
      description:
        'REZICS 軟體收錄每套軟體的版本、系統需求與相容性證據，使用者的評分與討論說明是哪個版本、在哪個環境測試。',
    },
    hero: {
      headline: '軟體的每個版本都有紀錄',
      lede: '每次發行、每個平台與每項需求都記錄在同一套軟體下。相容性有實測證據，不靠猜。',
    },
    features: [
      { title: '查版本差異', body: '每次發行的變更與支援平台依序列出。' },
      { title: '確認能不能裝', body: '系統需求與實測結果並列。' },
      { title: '追蹤更新', body: '追蹤一套軟體，有新版本時就知道。' },
      { title: '比較替代方案', body: '同類軟體依規格與評分排在一起。' },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'offers', 'follow'],
    partNotes: {
      identity: '一套軟體的所有發行共用一個身分。',
      editions: '每個版本與平台各自記錄。',
      specs: '系統需求與相容性附上實測。',
      credits: '開發者與維護團隊清楚標明。',
      ratings: '評分會註明版本與作業系統。',
      discussion: '問題與解法依版本整理。',
      offers: '授權方式與價格列在一起。',
      follow: '追蹤後，新版本發行就會通知你。',
    },
    connections: [
      { to: 'games', label: '執行的遊戲' },
      { to: 'apis', label: '提供的 API' },
      { to: 'mcp', label: '對應的 MCP 伺服器' },
    ],
    community: {
      headline: '使用者把經驗寫成紀錄',
      body: '安裝問題、設定心得與替代方案都留在軟體本身，下一個人少走一段路。',
    },
    imageAlt: '藍綠色版面上一個簡化的軟體視窗，有幾條橫線。',
  },
  {
    id: 'visual-novels',
    name: '視覺小說',
    group: 'works',
    summary: '路線、譯本與製作人員',
    meta: {
      title: '視覺小說',
      description:
        'REZICS 視覺小說收錄每部作品的發行版本、各語言名稱與譯本、製作人員與關聯作品，也記下你玩完了哪些路線。',
    },
    hero: {
      headline: '視覺小說，連同每條路線',
      lede: '原版、移植與各語言譯本都歸在同一部作品下。劇本、原畫與配音一一標明。',
    },
    features: [
      { title: '找到你能玩的版本', body: '平台、語言與年齡分級逐項列出。' },
      { title: '記下完成的路線', body: '每條路線各自記錄，進度一目了然。' },
      { title: '認識創作者', body: '劇本、原畫、音樂與聲優各有作品列表。' },
      { title: '查各語言名稱', body: '原文、譯名與常用簡稱都能搜尋。' },
    ],
    parts: ['identity', 'editions', 'names', 'credits', 'relations', 'ratings', 'progress', 'wiki'],
    partNotes: {
      identity: '原版與移植共用一個身分。',
      editions: '每次發行與譯本分開記錄。',
      names: '原文、譯名與簡稱都對到同一部作品。',
      credits: '劇本、原畫、音樂與聲優完整標明。',
      relations: '前作、續作與衍生作品彼此相連。',
      ratings: '評分可以註明玩的是哪個版本。',
      progress: '路線完成紀錄一條一條記下。',
      wiki: '角色與路線頁由社群整理。',
    },
    connections: [
      { to: 'games', label: '相近類型' },
      { to: 'anime', label: '改編動畫' },
      { to: 'books', label: '原作小說' },
    ],
    community: {
      headline: '每條路線都有人寫過',
      body: '路線心得、翻譯討論與推薦清單都掛在作品上，不會被版本拆散。',
    },
    imageAlt: '紫色版面上一個對話框，壓在簡單的風景上。',
  },
  {
    id: 'mcp',
    name: 'MCP Hub',
    group: 'agents',
    summary: 'MCP 伺服器的版本與相容性',
    meta: {
      title: 'MCP Hub',
      description:
        'REZICS MCP Hub 收錄 MCP 伺服器的版本、支援的工具與相容性證據，開發者的評分與討論說明在哪個用戶端實際測過。',
    },
    hero: {
      headline: 'MCP 伺服器的公開索引',
      lede: '每個 MCP 伺服器有一個身分，版本、提供的工具與相容的用戶端都有紀錄。選之前先看證據。',
    },
    features: [
      { title: '找到合適的伺服器', body: '依提供的工具、授權與維護狀態篩選。' },
      { title: '確認相容性', body: '每個版本在各用戶端的實測結果並列。' },
      { title: '整理成清單', body: '把常用的伺服器存成清單，分享給團隊。' },
      { title: '追蹤更新', body: '有新版本或相容性變化時收到通知。' },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'lists', 'follow'],
    partNotes: {
      identity: '一個 MCP 伺服器在各登錄處共用一個身分。',
      editions: '每個版本的變更與工具清單分開記錄。',
      specs: '協定版本與用戶端相容性附上實測。',
      credits: '作者與維護者清楚標明。',
      ratings: '評分會註明用戶端與使用情境。',
      discussion: '問題回報與用法討論依版本整理。',
      lists: '把伺服器組成清單，例如一套工作流程。',
      follow: '追蹤後，伺服器發布新版就會通知你。',
    },
    connections: [
      { to: 'skills', label: '搭配的技能' },
      { to: 'apis', label: '包裝的 API' },
      { to: 'software', label: '支援的用戶端' },
    ],
    community: {
      headline: '開發者把實測寫下來',
      body: '設定範例、相容性回報與推薦組合都屬於伺服器本身，換個用戶端也查得到。',
    },
    imageAlt: '黃色版面上一個插頭分出三條線，各接一個插座。',
  },
  {
    id: 'skills',
    name: 'Skill Hub',
    group: 'agents',
    summary: '智能體技能的版本與評分',
    meta: {
      title: 'Skill Hub',
      description:
        'REZICS Skill Hub 收錄智能體技能的版本、需求與實測紀錄，使用者的評分與討論說明在哪個智能體、做什麼工作時用過。',
    },
    hero: {
      headline: '智能體技能的公開索引',
      lede: '每個技能有一個身分，版本、所需工具與適用的智能體都有紀錄。用之前先看別人怎麼用。',
    },
    features: [
      { title: '依工作找技能', body: '依用途、所需工具與授權篩選。' },
      { title: '看實測紀錄', body: '每個版本在各智能體上的表現並列。' },
      { title: '組成工具組', body: '把技能存成清單，整組分享。' },
      { title: '跟上改版', body: '追蹤技能，改版時收到通知。' },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'lists', 'follow'],
    partNotes: {
      identity: '一個技能在各處發布都共用一個身分。',
      editions: '每個版本的變更分開記錄。',
      specs: '所需工具與適用智能體附上實測。',
      credits: '作者與貢獻者清楚標明。',
      ratings: '評分會註明智能體與工作類型。',
      discussion: '用法與問題依版本整理。',
      lists: '把技能組成一套工具組。',
      follow: '追蹤後，改版時就會通知你。',
    },
    connections: [
      { to: 'mcp', label: '需要的 MCP 伺服器' },
      { to: 'apis', label: '呼叫的 API' },
    ],
    community: {
      headline: '技能越用越清楚',
      body: '使用心得、改良建議與組合清單都留在技能上，作者與使用者看到的是同一份。',
    },
    imageAlt: '黃綠色版面上一個工具箱，裡面放著幾件小工具。',
  },
  {
    id: 'apis',
    name: 'API Hub',
    group: 'agents',
    summary: '公開 API 的版本與證據',
    meta: {
      title: 'API Hub',
      description:
        'REZICS API Hub 收錄公開 API 的版本、端點、限制與相容性證據，開發者的評分與討論說明是哪個版本、做過哪些呼叫。',
    },
    hero: {
      headline: '公開 API 的索引',
      lede: '每個 API 有一個身分，版本、驗證方式與使用限制都有紀錄。整合之前先看證據與評價。',
    },
    features: [
      { title: '找到要用的 API', body: '依資料類型、驗證方式與費用篩選。' },
      { title: '比較版本', body: '每個版本的端點變更與棄用時程並列。' },
      { title: '看實際限制', body: '速率限制與錯誤行為附上開發者回報。' },
      { title: '追蹤變更', body: '追蹤 API，有破壞性變更時收到通知。' },
    ],
    parts: ['identity', 'editions', 'specs', 'credits', 'ratings', 'discussion', 'follow', 'lists'],
    partNotes: {
      identity: '一個 API 的所有版本共用一個身分。',
      editions: '每個版本的端點與變更分開記錄。',
      specs: '驗證方式、限制與錯誤行為附上證據。',
      credits: '提供者與維護團隊清楚標明。',
      ratings: '評分會註明版本與使用情境。',
      discussion: '整合問題與解法依版本整理。',
      follow: '追蹤後，有變更就會通知你。',
      lists: '把 API 組成清單，例如一個專案用到的全部。',
    },
    connections: [
      { to: 'mcp', label: '包裝它的 MCP 伺服器' },
      { to: 'software', label: '提供它的軟體' },
      { to: 'skills', label: '呼叫它的技能' },
    ],
    community: {
      headline: '整合經驗不再散落',
      body: '範例程式、限制回報與遷移筆記都屬於 API 本身，版本改了也找得到。',
    },
    imageAlt: '淺藍色版面上幾個端點方塊，用纜線彼此相連。',
  },
];
