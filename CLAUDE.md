# CLAUDE.md：我的作品與筆記網站

這份文件是給 AI 程式助理看的專案說明。修改或新增任何內容之前，請先完整讀完。

## 1. 專案目的

這是我的個人作品集網站，用來整理課程中完成的程式專案與學習筆記。
- 首頁（index.html）：自我介紹、最近更新，並提供按鈕連到作品頁。
- 作品頁（projects.html）：列出所有程式專案與筆記，可依「全部／程式專案／筆記」切換。
- 內容頁（works/*.html）：每則作品或筆記的詳細內容。

網站是純靜態 HTML／CSS／JavaScript，不使用任何框架或建置工具，直接開啟 index.html 即可瀏覽。

## 2. 整體風格

- 語言：一律使用台灣習慣的繁體中文，語氣自然、簡潔，用第一人稱「我」。
- 配色：只使用 css/style.css 中 :root 定義的顏色變數，不要另外寫死顏色。
  - 程式專案的強調色：--project（深青綠）
  - 筆記的強調色：--note（墨褐色）
- 字體：標題用 Noto Serif TC，內文用 Noto Sans TC（已在 style.css 設定）。
- 版面：內容靠左對齊，每行不要太長；不要加入動畫特效、漸層或陰影。
- 網站支援深色模式，新增的元素也必須使用顏色變數，深淺色都要看得清楚。

## 3. 檔案結構

```
my-portfolio/
├── CLAUDE.md          本說明文件
├── index.html         首頁（自我介紹）
├── projects.html      作品與筆記列表頁
├── css/style.css      全站樣式（唯一的 CSS 檔）
├── js/main.js         產生列表、分類切換（一般不需修改）
├── data/works.js      所有作品與筆記的資料（新增內容時要改這裡）
├── works/
│   ├── _template.html 內容頁範本（不要刪除、不要登記到 works.js）
│   └── *.html         各作品／筆記的內容頁
└── images/            截圖與圖片
```

## 4. 命名規則

- 內容頁檔名：全小寫英文，單字用連字號連接，例如 `tool-use-agent.html`、`python-basics-note.html`。
- 圖片檔名：`<內容頁檔名>-<編號>.png`，例如 `tool-use-agent-1.png`，放在 images/。
- works.js 中的 `id` 必須和內容頁檔名（不含 .html）完全相同。

## 5. 新增一則作品或筆記的步驟

1. 複製 `works/_template.html`，依命名規則改名。
2. 修改內容頁：
   - `<title>` 和 `<h1>` 換成標題。
   - `<article>` 的 class 依類型設為 `detail detail--project` 或 `detail detail--note`。
   - 類型標籤文字設為「程式專案」或「筆記」。
   - 程式專案的段落固定為：專案簡介、使用技術、運作方式、成果截圖、心得。
   - 筆記的段落固定為：重點整理、範例、我的理解、參考資料。
   - 沒有截圖時保留 `.shot--empty` 的提示區塊；有截圖時換成 `<img>`，並寫好 alt 說明。
3. 在 `data/works.js` 的 WORKS 陣列**最前面**新增一筆資料，欄位如下：
   ```js
   {
     id: "檔名不含.html",
     type: "project",          // 程式專案用 "project"，筆記用 "note"
     title: "標題",
     summary: "一到兩句話的簡介，40 字以內",
     tags: ["技術或主題", "最多四個"],
     date: "2026-11-09",       // 格式固定為 YYYY-MM-DD
     link: "works/檔名.html"
   }
   ```
4. 不需要修改 index.html 或 projects.html，列表會自動更新。

## 6. AI 修改時必須遵守的規則

- 只能修改與這次需求有關的檔案，不要順便重寫其他頁面。
- 不要新增其他 CSS 或 JS 檔；需要新樣式時加在 style.css 最後面，並寫註解說明用途。
- 不要引入外部框架（React、Bootstrap 等）。
- 不要捏造我沒有提供的內容（例如沒做過的專案、假的成績或數據）；資訊不足時先問我。
- 每個頁面都要保留共用的頁首導覽列與頁尾，內容頁的 CSS、JS 路徑要用 `../`。
- 修改自我介紹時，只改 index.html 中 `id="about"` 區塊和頁首的名字。
- 完成後，用一兩句話告訴我改了哪些檔案。
