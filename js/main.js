function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid || typeof PROJECTS === "undefined") return;

  grid.innerHTML = PROJECTS.map((p) => `
    <article class="project-card">
      <div class="project-image">
        ${p.image ? `<img src="${p.image}" alt="Print de ${p.title}">` : "Print em breve"}
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <a class="project-link" href="${p.link}">Ver projeto →</a>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
