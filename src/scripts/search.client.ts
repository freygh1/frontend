import { normalize } from "../utils/normalize";

console.log("🔵 search.client.ts cargado");

type Filters = {
  query: string;
  course: string;
  category: string;
  level: string;
};

const filters: Filters = { query: "", course: "", category: "", level: "" };

function getEl<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function applyFilters(): void {
  const grid = getEl<HTMLUListElement>("lesson-grid");
  const empty = getEl<HTMLDivElement>("empty-state");
  const count = getEl<HTMLElement>("results-count");
  const label = getEl<HTMLElement>("results-label");
  const clearInput = getEl<HTMLButtonElement>("search-clear");
  const clearFilters = getEl<HTMLButtonElement>("filter-clear");

  if (!grid || !empty || !count || !label) return;

  const cards = Array.from(grid.querySelectorAll<HTMLElement>("[data-lesson]"));
  const query = normalize(filters.query.trim());
  let visible = 0;

  for (const card of cards) {
    const matchesCourse =
      !filters.course || card.dataset.course === filters.course;
    const matchesCategory =
      !filters.category || card.dataset.category === filters.category;
    const matchesLevel = !filters.level || card.dataset.level === filters.level;
    const matchesQuery = !query || (card.dataset.search ?? "").includes(query);

    const show =
      matchesCourse && matchesCategory && matchesLevel && matchesQuery;
    card.parentElement!.hidden = !show; // ocultamos el <li> contenedor
    if (show) visible++;
  }

  count.textContent = String(visible);
  label.textContent = visible === 1 ? "lección" : "lecciones";

  const hasQuery = Boolean(filters.query);
  const hasFilters = Boolean(
    filters.course || filters.category || filters.level || hasQuery,
  );

  clearInput?.classList.toggle("hidden", !hasQuery);
  clearFilters?.classList.toggle("hidden", !hasFilters);

  grid.classList.toggle("hidden", visible === 0);
  empty.classList.toggle("hidden", visible !== 0);
}

function reset(): void {
  filters.query = "";
  filters.course = "";
  filters.category = "";
  filters.level = "";

  const input = getEl<HTMLInputElement>("search-input");
  const course = getEl<HTMLSelectElement>("filter-course");
  const category = getEl<HTMLSelectElement>("filter-category");
  const level = getEl<HTMLSelectElement>("filter-level");

  if (input) input.value = "";
  if (course) course.value = "";
  if (category) category.value = "";
  if (level) level.value = "";

  applyFilters();
}

function setupFilter(id: string, key: "course" | "category" | "level"): void {
  const el = getEl<HTMLSelectElement>(id);
  if (!el) return;
  el.addEventListener("change", () => {
    filters[key] = el.value;
    applyFilters();
  });
}

function init(): void {
  console.log("🔵 search.client.ts cargado");
  const input = getEl<HTMLInputElement>("search-input");
  input?.addEventListener("input", () => {
    filters.query = input.value;
    applyFilters();
  });

  setupFilter("filter-course", "course");
  setupFilter("filter-category", "category");
  setupFilter("filter-level", "level");

  getEl<HTMLButtonElement>("search-clear")?.addEventListener("click", reset);
  getEl<HTMLButtonElement>("filter-clear")?.addEventListener("click", reset);
  document.querySelectorAll("[data-clear-all]").forEach((btn) => {
    btn.addEventListener("click", reset);
  });

  // TOC → filtros
  document.querySelectorAll<HTMLElement>("[data-toc-filter]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const course = el.dataset.course ?? "";
      const category = el.dataset.category ?? "";

      reset();
      filters.course = course;
      filters.category = category;

      const courseSelect = getEl<HTMLSelectElement>("filter-course");
      const categorySelect = getEl<HTMLSelectElement>("filter-category");
      if (courseSelect) courseSelect.value = course;
      if (categorySelect) categorySelect.value = category;

      applyFilters();
      document.getElementById("search")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  applyFilters();
}

init();
