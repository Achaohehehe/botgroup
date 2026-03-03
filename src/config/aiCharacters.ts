// 首先定义模型配置
export const modelConfigs = [
  {
    model: "qwen-plus",
    apiKey: "DASHSCOPE_API_KEY", // 这里存储环境变量的 key 名称
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
  },
  {
    model: "deepseek-v3",
    apiKey: "DASHSCOPE_API_KEY",
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
  },
  {
    model: "hunyuan-standard",
    apiKey: "HUNYUAN_API_KEY",
    baseURL: "https://api.hunyuan.cloud.tencent.com/v1"
  },
  {
    model: "ep-20250217191935-wzj8l",//火山引擎接入点（改成自己的）
    apiKey: "ARK_API_KEY",
    baseURL: "https://ark.cn-beijing.volces.com/api/v3"
  },
  {
    model: "hunyuan-lite",//免费模型
    apiKey: "HUNYUAN_API_KEY",
    baseURL: "https://api.hunyuan.cloud.tencent.com/v1"
  },
  {
    model: "glm-4-plus",
    apiKey: "GLM_API_KEY",
    baseURL: "https://open.bigmodel.cn/api/paas/v4/"
  }
] as const;
export type ModelType = typeof modelConfigs[number]["model"];

export interface AICharacter {
  id: string;
  name: string;
  personality: string;
  model: ModelType;
  avatar?: string;  // 可选的头像 URL
  custom_prompt?: string; // 可选的个性提示
  tags?: string[]; // 可选的标签
}

// 模型配置（不要动，保持原样）
export const modelConfigs = [
  { model: "deepseek-chat", name: "DeepSeek Chat", provider: "deepseek" },
  // 如果你还配置了其他模型，可以保留；如果没有，就只留上面这一个
];

export type ModelType = typeof modelConfigs[number]["model"];

export interface AICharacter {
  id: string;
  name: string;
  personality: string;
  model: ModelType;
  avatar?: string;
  custom_prompt?: string;
  tags?: string[];
}

// 调度器函数（不要动，保持原样）
export function shedulerAICharacter(message: string, allTags: string[]): AICharacter {
  return {
    id: 'scheduler',
    name: "调度器",
    personality: "scheduler",
    model: modelConfigs[0].model,
    avatar: "",
    custom_prompt: `你是一个群聊总结分析专家...（省略，保留你原有的内容）`
  };
}

// 生成角色的函数（这里只保留红豆糕，以及一个虚拟角色）
export function generateAICharacters(groupName: string): AICharacter[] {
  return [
    {
      id: "hongdougao",
      name: "红豆糕",
      personality: "热情、中二、懂二次元",
      model: "deepseek-chat",  // 确保模型名称正确
      avatar: "/avatars/assistant.png",
      custom_prompt: '你是一个叫"红豆糕"的AI，生活在${groupName}群里。你是一个资深的漫展爱好者，对动漫、游戏、COSPLAY了如指掌。你的性格非常热情、中二，喜欢用各种动漫梗和颜文字(｡･ω･｡) 当社团成员问你关于宣传、活动点子、物料设计的问题时，你要用最元气满满的方式给出建议！',
      tags: ["二次元", "宣传", "点子大王", "动漫", "聊天"]
    },
    // 为了满足群聊至少两个成员的要求，添加一个“小透明”角色（不会干扰红豆糕）
    {
      id: "bot2",
      name: "小透明",
      personality: "安静、旁观",
      model: "deepseek-chat",
      avatar: "",
      custom_prompt: "你是一个沉默的旁观者，在群里尽量少说话，除非被直接@。",
      tags: ["透明"]
    }
  ];
}
