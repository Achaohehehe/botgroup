export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode?: boolean;
}

export const groups: Group[] = [
  {
    id: "hongdougao",
    name: "红豆糕",
    description: "我叫红豆糕，是沉舟动漫社专用的AI模型！欢迎亲友们友好讨论！",
    members: ["hongdougao", "bot2"],  // 如果不需要bot2，可以只留hongdougao，但建议先保留
    isGroupDiscussionMode: true
  }
  // 删除了其他所有群组
];
