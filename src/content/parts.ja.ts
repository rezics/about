import type { Part } from './schema';

/** The fifteen shared parts, in schema order. */
export const parts: Part[] = [
  {
    id: 'identity',
    name: 'アイデンティティ',
    gives: '言語やサイトが違っても、同じものを指す一つのアイデンティティです。',
  },
  {
    id: 'names',
    name: '多言語の名称',
    gives: '各言語の名称、別名、読みを原表記のまま並べます。',
  },
  {
    id: 'editions',
    name: '版',
    gives: '版、リリース、翻訳、プラットフォーム、収録範囲を個別に記録します。',
  },
  {
    id: 'credits',
    name: 'クレジット',
    gives: '人や組織を役割ごとに記載し、それぞれの名前を作品一覧につなげます。',
  },
  {
    id: 'relations',
    name: '関連',
    gives: '翻案、続編、シリーズ、依存関係を両側から確認できます。',
  },
  {
    id: 'facets',
    name: '絞り込み',
    gives: '利用使える項目で絞り込み、最後まで確認できます。条件はビューとして保存できます。',
  },
  {
    id: 'ratings',
    name: '評価',
    gives: '何を評価するのかを明示してから、評価とレビューを付けます。',
  },
  {
    id: 'discussion',
    name: 'ディスカッション',
    gives: '専用のフォーラムを探さなくても、そのものにスレッドを付けられます。',
  },
  {
    id: 'wiki',
    name: 'Wiki',
    gives: 'Wiki+のページと情報ボックスには、インデックスで確認済みの事実が表示されます。',
  },
  {
    id: 'lists',
    name: 'リスト',
    gives: '種類をまたぐリストを並べ替え、メモを付けて、書き出せます。',
  },
  {
    id: 'progress',
    name: '進捗',
    gives: 'ライブラリの状態、読むたび遊ぶたびの記録、次に見るものを管理します。',
  },
  {
    id: 'follow',
    name: 'フォロー',
    gives: '作品、人、ビューをフォローすると、新しい動きが届きます。',
  },
  {
    id: 'offers',
    name: '販売情報',
    gives: '販売中のものは、在庫状況、価格、購入先を掲載します。',
  },
  {
    id: 'specs',
    name: '仕様',
    gives: '実測した仕様と互換性の証拠に、テスト条件と日付を添えます。',
  },
  {
    id: 'schedule',
    name: 'スケジュール',
    gives: '発売日、放送時間、イベントを一つの予定表にまとめます。',
  },
];
