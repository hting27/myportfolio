// Builds the lists from WORKS in data/works.js. Adding content normally does not require editing this file.
const TYPE_LABEL = { project: "Project", note: "Note" };

// Trophy icon shown next to an entry's award (set "award" in data/works.js).
const TROPHY_ICON = `<svg class="award__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 3h10v2h3v3a4 4 0 0 1-4 4h-.35A5 5 0 0 1 13 14.9V18h3v3H8v-3h3v-3.1A5 5 0 0 1 8.35 12H8a4 4 0 0 1-4-4V5h3V3zm0 4H6v1a2 2 0 0 0 1 1.73V7zm10 0v2.73A2 2 0 0 0 18 8V7h-1z"/></svg>`;

function awardBadge(award) {
  return award ? `<p class="award">${TROPHY_ICON}<span>${award}</span></p>` : "";
}

function workItem(w) {
  return `
    <li class="work work--${w.type}${w.pinned ? " work--pinned" : ""}">
      <a href="${w.link}">
        <span class="work__type">${TYPE_LABEL[w.type]}${w.pinned ? `<span class="work__pin">Pinned</span>` : ""}</span>
        ${awardBadge(w.award)}
        <h3 class="work__title">${w.title}</h3>
        <p class="work__summary">${w.summary}</p>
        <p class="work__meta">${w.date} | ${w.tags.join(", ")}</p>
      </a>
    </li>`;
}

function sortedWorks() {
  // Pinned entries ("pinned: true" in data/works.js) always come first, then newest first.
  return [...WORKS].sort((a, b) => (b.pinned === true) - (a.pinned === true) || b.date.localeCompare(a.date));
}

// Home page: three most recent entries
const recentList = document.getElementById("recent-list");
if (recentList) {
  recentList.innerHTML = sortedWorks().slice(0, 3).map(workItem).join("");
}

// Projects page: filter by type
const workList = document.getElementById("work-list");
if (workList) {
  const tabs = document.querySelectorAll("[data-filter]");
  const hashToFilter = { "#projects": "project", "#notes": "note" };
  const filterToHash = { project: "#projects", note: "#notes" };

  function show(filter) {
    const items = sortedWorks().filter(w => filter === "all" || w.type === filter);
    workList.innerHTML = items.length
      ? items.map(workItem).join("")
      : `<li class="empty">No entries in this category yet.</li>`;
    tabs.forEach(t => t.setAttribute("aria-pressed", String(t.dataset.filter === filter)));
    const count = document.getElementById("work-count");
    if (count) count.textContent = `${items.length} ${items.length === 1 ? "entry" : "entries"}`;
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

// Footer year
document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
