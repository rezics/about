import type { Part } from './schema';

/** The fifteen shared parts, in schema order. */
export const parts: Part[] = [
  {
    id: 'identity',
    name: '身分',
    gives: '一個身分，不論哪種語言、哪個網站，都指向同一樣東西。',
  },
  {
    id: 'names',
    name: '多語名稱',
    gives: '每種語言的名稱、別名與讀音並存，原本的寫法一字不改。',
  },
  {
    id: 'editions',
    name: '版本',
    gives: '版本、發行、譯本、平台與涵蓋範圍，各有自己的紀錄。',
  },
  {
    id: 'credits',
    name: '製作人員',
    gives: '人與組織依角色列名，每個名字都連到自己的作品集。',
  },
  {
    id: 'relations',
    name: '關聯',
    gives: '改編、續作、系列與依賴，從兩端都看得到。',
  },
  {
    id: 'facets',
    name: '篩選',
    gives: '依可用欄位篩選，一路翻到最後一筆，條件能存成檢視。',
  },
  {
    id: 'ratings',
    name: '評分',
    gives: '先講明評的是什麼，再給分數與評論。',
  },
  {
    id: 'discussion',
    name: '討論',
    gives: '討論串直接掛在這樣東西上，不必另找論壇。',
  },
  {
    id: 'wiki',
    name: '維基',
    gives: 'Wiki+ 頁面與資訊框，內容就是圖上審核過的事實。',
  },
  {
    id: 'lists',
    name: '清單',
    gives: '不分種類的清單，可以排序、加註，也能匯出。',
  },
  {
    id: 'progress',
    name: '進度',
    gives: '書庫狀態、每一次的閱讀或遊玩，以及接下來該看哪一個。',
  },
  {
    id: 'follow',
    name: '追蹤',
    gives: '追蹤一樣東西、一個人或一個檢視，新動態自己送上門。',
  },
  {
    id: 'offers',
    name: '上架',
    gives: '有人販售時，列出供應狀況、價格與購買的地方。',
  },
  {
    id: 'specs',
    name: '規格',
    gives: '實測的規格與相容性證據，附上測試條件與日期。',
  },
  {
    id: 'schedule',
    name: '日程',
    gives: '發售日、播出時間與活動，排進同一份日程。',
  },
];
