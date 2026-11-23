// 所有作品與筆記的資料。新增內容時，請在陣列最前面加一筆（規則見 CLAUDE.md）。
const WORKS = [
  {
    id: "linebye-smart-temple",
    type: "project",
    title: "LINEBYE 智慧宮廟",
    summary: "LINE AI 創新創業競賽冠軍：把求籤、點燈與 AI 解籤搬進 LINE。",
    tags: ["LINE API", "LIFF", "LLM", "ComfyUI"],
    date: "2026-10-15",
    link: "works/linebye-smart-temple.html"
  },
  {
    id: "apple-quality-cnn",
    type: "project",
    title: "辨識好蘋果與壞蘋果：PyTorch CNN",
    summary: "用 PyTorch 訓練 CNN 分辨好壞蘋果，測試準確率 98.19%。",
    tags: ["PyTorch", "CNN", "影像分類"],
    date: "2026-11-04",
    link: "works/apple-quality-cnn.html"
  },
  {
    id: "tool-use-agent",
    type: "project",
    title: "生活小幫手：Tool Use Agent",
    summary: "AI 會判斷要用計算機、查時間或算 BMI，再根據工具結果回答。",
    tags: ["Python", "Gradio", "LLM", "Tool Use"],
    date: "2026-11-09",
    link: "works/tool-use-agent.html"
  },
  {
    id: "ai-agent-patterns",
    type: "note",
    title: "AI Agent 三種設計模式",
    summary: "整理 Reflection、Tool Use、Planning 的概念與差別。",
    tags: ["AI Agent", "課堂筆記"],
    date: "2026-11-05",
    link: "works/ai-agent-patterns.html"
  },
  {
    id: "reflection-agent",
    type: "project",
    title: "社群貼文反思小幫手",
    summary: "AI 先寫貼文、再自己審稿，最後依建議改寫出第二版。",
    tags: ["Python", "Gradio", "Reflection"],
    date: "2026-10-29",
    link: "works/reflection-agent.html"
  }
];
