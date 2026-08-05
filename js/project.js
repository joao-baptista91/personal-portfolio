function getProjectFromUrl() {
  if (typeof PROJECTS === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return null;
  return PROJECTS.find((p) => p.id === id) || null;
}

function renderProjectDetail() {
  const content = document.getElementById("project-detail-content");
  const notFound = document.getElementById("project-not-found");
  if (!content || !notFound) return;

  const lang = typeof getLang === "function" ? getLang() : "pt";
  const project = getProjectFromUrl();

  if (!project) {
    content.hidden = true;
    notFound.hidden = false;
    document.title = lang === "en" ? "João Baptista — Project not found" : "João Baptista — Projeto não encontrado";
    return;
  }

  content.hidden = false;
  notFound.hidden = true;

  const gallery = project.images && project.images.length
    ? project.images.map((src) => `
        <div class="project-detail-image">
          <img src="${src}" alt="${project.title}">
        </div>
      `).join("")
    : `<div class="project-detail-image project-detail-image-placeholder">${t("project.imagePlaceholder")}</div>`;

  const description = (project.longDescription && (project.longDescription[lang] || project.longDescription.pt))
    || (project.description[lang] || project.description.pt);

  content.innerHTML = `
    <div class="project-detail-header">
      <h1>${project.title}</h1>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
    <div class="project-detail-gallery">
      ${gallery}
    </div>
    <div class="project-detail-body">
      <p>${description}</p>
    </div>
  `;

  document.title = `${project.title} — João Baptista`;
}

document.addEventListener("DOMContentLoaded", renderProjectDetail);
