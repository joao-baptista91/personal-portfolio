function renderAllProjects() {
  const grid = document.getElementById("all-projects-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  const lang = typeof getLang === "function" ? getLang() : "pt";

  grid.innerHTML = PROJECTS.map((p) => `
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

  document.title = lang === "en" ? "João Baptista — All Projects" : "João Baptista — Todos os Projetos";
}

document.addEventListener("DOMContentLoaded", renderAllProjects);
