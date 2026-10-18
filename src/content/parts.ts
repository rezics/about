// PLACEHOLDER CONTENT: the lead replaces this file with the final copy. Keep the export shape.
import type { Part } from './schema';

export const parts: Part[] = [
  { id: 'identity', name: '身分', gives: '每件東西在所有語言與站點裡只有一個身分。' },
  { id: 'names', name: '多語名稱', gives: '每種語言的名稱與標題都掛在同一個身分上。' },
  { id: 'editions', name: '版本', gives: '版次、發行、譯本、平台與涵蓋範圍分開記錄。' },
  { id: 'credits', name: '製作人員', gives: '參與的人與組織，連同各自的角色。' },
  { id: 'relations', name: '關聯', gives: '改編、續作、系列與相依關係連成一張圖。' },
  { id: 'facets', name: '篩選', gives: '完整的條件搜尋，可以存成檢視。' },
  { id: 'ratings', name: '評分', gives: '帶著情境的評分與評論。' },
  { id: 'discussion', name: '討論', gives: '討論串直接掛在東西本身。' },
  { id: 'wiki', name: '維基', gives: '從圖譜事實產生的 Wiki+ 頁面與資訊框。' },
  { id: 'lists', name: '清單', gives: '有順序、有註解、可以匯出的清單。' },
  { id: 'progress', name: '進度', gives: '收藏狀態、紀錄與下一步。' },
  { id: 'follow', name: '追蹤', gives: '追蹤一件東西、一個人或一個檢視。' },
  { id: 'offers', name: '上架', gives: '有提供時，顯示供應、價格與購買。' },
  { id: 'specs', name: '規格', gives: '量測過的規格與相容性證據。' },
  { id: 'schedule', name: '日程', gives: '發售日、播出時間與活動。' },
];
