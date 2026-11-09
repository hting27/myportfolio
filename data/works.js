// 所有作品與筆記的資料。新增內容時，請在陣列最前面加一筆（規則見 CLAUDE.md）。
const WORKS = [
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
