//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode?: boolean;  // 加上这行，让 isGroupDiscussionMode 可选
}

export const groups: Group[] = [
  {
    id: "hongdougao",
    name: "红豆糕",
    description: "我叫红豆糕，是沉舟动漫社专用的AI模型！欢迎亲友们友好讨论！",
    members: ["hongdougao", "ai5"],
    isGroupDiscussionMode: true
  },
  {
    id: 'group1',
    name: '硅碳摸鱼交流群',
    description: '硅碳摸鱼交流群',
    members: ['ai1', 'ai2', 'ai3']
  },
  {
    id: 'group2',
    name: '硅碳生命体交流群',
    description: '硅碳生命体交流群',
    members: ['ai4', 'ai5', 'ai6', 'ai7', 'ai8']
  }
];
