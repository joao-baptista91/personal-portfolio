const PROJECTS_PER_PAGE = 4;
const CAROUSEL_LIMIT = 8;
let projectsCurrentPage = 0;

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  const lang = typeof getLang === "function" ? getLang() : "pt";
  const items = PROJECTS.slice(0, CAROUSEL_LIMIT);
  const totalPages = Math.max(1, Math.ceil(items.length / PROJECTS_PER_PAGE));
  if (projectsCurrentPage > totalPages - 1) projectsCurrentPage = totalPages - 1;

  const start = projectsCurrentPage * PROJECTS_PER_PAGE;
  const pageItems = items.slice(start, start + PROJECTS_PER_PAGE);

  grid.innerHTML = pageItems.map((p) => `
    <article class="project-card">
      <div class="project-image">
        ${p.image ? `<img src="${p.image}" alt="${p.title}">` : t("project.imagePlaceholder")}
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description[lang] || p.description.pt}</p>
        <div class="project-tags">
          ${p.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <a class="project-link" href="project.html?id=${encodeURIComponent(p.id)}">${t("project.viewLink")} →</a>
      </div>
    </article>
  `).join("");

  updateProjectsCarouselControls(totalPages);
}

function updateProjectsCarouselControls(totalPages) {
  const prevBtn = document.getElementById("projects-prev");
  const nextBtn = document.getElementById("projects-next");
  const dotsWrap = document.getElementById("projects-dots");

  if (prevBtn) prevBtn.disabled = projectsCurrentPage === 0;
  if (nextBtn) nextBtn.disabled = projectsCurrentPage >= totalPages - 1;

  if (dotsWrap) {
    dotsWrap.innerHTML = totalPages <= 1 ? "" : Array.from({ length: totalPages }, (_, i) =>
      `<span class="projects-dot${i === projectsCurrentPage ? " active" : ""}"></span>`
    ).join("");
  }
}

function initProjectsCarousel() {
  const prevBtn = document.getElementById("projects-prev");
  const nextBtn = document.getElementById("projects-next");
  if (!prevBtn || !nextBtn || typeof PROJECTS === "undefined") return;

  const totalPages = Math.max(1, Math.ceil(Math.min(PROJECTS.length, CAROUSEL_LIMIT) / PROJECTS_PER_PAGE));

  prevBtn.addEventListener("click", () => {
    if (projectsCurrentPage > 0) {
      projectsCurrentPage -= 1;
      renderProjects();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (projectsCurrentPage < totalPages - 1) {
      projectsCurrentPage += 1;
      renderProjects();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initProjectsCarousel();
});
