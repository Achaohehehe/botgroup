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
    members: ["hongdougao", "bot2"], 
    isGroupDiscussionMode: true
  }
];
