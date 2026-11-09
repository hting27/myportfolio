// 從 data/works.js 的 WORKS 產生列表。一般新增內容不需要改這個檔案。
const TYPE_LABEL = { project: "程式專案", note: "筆記" };

function workItem(w) {
  return `
    <li class="work work--${w.type}">
      <a href="${w.link}">
        <span class="work__type">${TYPE_LABEL[w.type]}</span>
        <h3 class="work__title">${w.title}</h3>
        <p class="work__summary">${w.summary}</p>
        <p class="work__meta">${w.date}｜${w.tags.join("、")}</p>
      </a>
    </li>`;
}

function sortedWorks() {
  return [...WORKS].sort((a, b) => b.date.localeCompare(a.date));
}

// 首頁：最近更新三則
const recentList = document.getElementById("recent-list");
if (recentList) {
  recentList.innerHTML = sortedWorks().slice(0, 3).map(workItem).join("");
}

// 作品頁：分類切換
const workList = document.getElementById("work-list");
if (workList) {
  const tabs = document.querySelectorAll("[data-filter]");
  const hashToFilter = { "#projects": "project", "#notes": "note" };
  const filterToHash = { project: "#projects", note: "#notes" };

  function show(filter) {
    const items = sortedWorks().filter(w => filter === "all" || w.type === filter);
    workList.innerHTML = items.length
      ? items.map(workItem).join("")
      : `<li class="empty">這個分類還沒有內容。</li>`;
    tabs.forEach(t => t.setAttribute("aria-pressed", String(t.dataset.filter === filter)));
    const count = document.getElementById("work-count");
    if (count) count.textContent = `共 ${items.length} 則`;
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const f = tab.dataset.filter;
      history.replaceState(null, "", filterToHash[f] || location.pathname);
      show(f);
    });
  });

  window.addEventListener("hashchange", () => show(hashToFilter[location.hash] || "all"));
  show(hashToFilter[location.hash] || "all");
}

// 頁尾年份
document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
