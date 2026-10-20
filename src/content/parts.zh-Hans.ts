import type { Part } from './schema';

/** The fifteen shared parts, in schema order. */
export const parts: Part[] = [
  {
    id: 'identity',
    name: '身份',
    gives: '无论使用哪种语言、访问哪个网站，都指向同一份内容。',
  },
  {
    id: 'names',
    name: '多语言名称',
    gives: '并列保存各语言的名称、别名和读音，原始写法保持不变。',
  },
  {
    id: 'editions',
    name: '版本',
    gives: '版本、发行、译本、平台和覆盖范围都有各自的记录。',
  },
  {
    id: 'credits',
    name: '制作人员',
    gives: '人物和组织按角色列出，每个名字都关联到各自的作品集。',
  },
  {
    id: 'relations',
    name: '关系',
    gives: '从两端都能查看改编、续作、系列和依赖关系。',
  },
  {
    id: 'facets',
    name: '筛选',
    gives: '按可用字段筛选，查看所有结果，也可以将条件保存为视图。',
  },
  {
    id: 'ratings',
    name: '评分',
    gives: '先注明评分对象，再给出分数和评论。',
  },
  {
    id: 'discussion',
    name: '讨论',
    gives: '讨论串直接关联到这份内容，无须另找论坛。',
  },
  {
    id: 'wiki',
    name: 'Wiki+',
    gives: 'Wiki+ 页面和信息框直接呈现图谱中经过审核的事实。',
  },
  {
    id: 'lists',
    name: '书单',
    gives: '书单不限种类，可以排序、添加备注，也可以导出。',
  },
  {
    id: 'progress',
    name: '进度',
    gives: '书库状态、每次阅读或游玩记录，以及接下来要看的内容。',
  },
  {
    id: 'follow',
    name: '关注',
    gives: '关注内容、人物或视图，新动态会自动送达。',
  },
  {
    id: 'offers',
    name: '销售',
    gives: '有商品销售时，列出供应情况、价格和购买渠道。',
  },
  {
    id: 'specs',
    name: '规格',
    gives: '实测规格和兼容性证据，并附上测试条件和日期。',
  },
  {
    id: 'schedule',
    name: '日程',
    gives: '发售日期、播出时间和活动都列入同一份日程。',
  },
];
