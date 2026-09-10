function getProjectFromUrl() {
  if (typeof PROJECTS === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return null;
  return PROJECTS.find((p) => p.id === id) || null;
}

let galleryKeydownHandler = null;

function renderGalleryMarkup(project) {
  const images = project.images && project.images.length ? project.images : [];

  if (!images.length) {
    return `
      <div class="project-gallery">
        <div class="project-gallery-main project-gallery-main-empty">
          <span class="project-detail-image-placeholder">${t("project.imagePlaceholder")}</span>
        </div>
      </div>
    `;
  }

  const thumbs = images.length > 1
    ? `
      <div class="project-gallery-thumbs">
        ${images.map((src, i) => `
          <button type="button" class="gallery-thumb${i === 0 ? " active" : ""}" data-index="${i}" aria-label="${t("project.viewImage")} ${i + 1}">
            <img src="${src}" alt="">
          </button>
        `).join("")}
      </div>
    `
    : "";

  const navButtons = images.length > 1
    ? `
      <button type="button" class="lightbox-nav lightbox-prev" id="lightbox-prev" aria-label="${t("projects.prev")}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button type="button" class="lightbox-nav lightbox-next" id="lightbox-next" aria-label="${t("projects.next")}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    `
    : "";

  return `
    <div class="project-gallery">
      <div class="project-gallery-main" id="gallery-main" role="button" tabindex="0" aria-label="${t("project.zoomImage")}">
        <img id="gallery-main-img" src="${images[0]}" alt="${project.title}">
        <span class="gallery-zoom-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8" x2="11" y2="14"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </span>
      </div>
      ${thumbs}
    </div>

    <div class="lightbox" id="project-lightbox" hidden>
      <button type="button" class="lightbox-close" id="lightbox-close" aria-label="${t("project.close")}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      ${navButtons}
      <img class="lightbox-img" id="lightbox-img" src="" alt="">
    </div>
  `;
}

function initProjectGallery(project) {
  if (galleryKeydownHandler) {
    document.removeEventListener("keydown", galleryKeydownHandler);
    galleryKeydownHandler = null;
  }

  const images = project.images && project.images.length ? project.images : [];
  if (!images.length) return;

  let currentIndex = 0;
  const mainImg = document.getElementById("gallery-main-img");
  const mainBox = document.getElementById("gallery-main");
  const thumbs = document.querySelectorAll(".gallery-thumb");
  const lightbox = document.getElementById("project-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  if (!mainImg || !mainBox || !lightbox || !lightboxImg) return;

  function setIndex(i) {
    currentIndex = (i + images.length) % images.length;
    mainImg.src = images[currentIndex];
    thumbs.forEach((btn, idx) => btn.classList.toggle("active", idx === currentIndex));
    if (!lightbox.hidden) lightboxImg.src = images[currentIndex];
  }

  function openLightbox() {
    lightboxImg.src = images[currentIndex];
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  thumbs.forEach((btn) => {
    btn.addEventListener("click", () => setIndex(Number(btn.dataset.index)));
  });

  mainBox.addEventListener("click", openLightbox);
  mainBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  if (prevBtn) prevBtn.addEventListener("click", () => setIndex(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => setIndex(currentIndex + 1));

  galleryKeydownHandler = (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft" && prevBtn) setIndex(currentIndex - 1);
    if (e.key === "ArrowRight" && nextBtn) setIndex(currentIndex + 1);
  };
  document.addEventListener("keydown", galleryKeydownHandler);
}

// Gera o markup da secção "Processo de Desenvolvimento" (problema, base de dados, desafios).
// É opcional: só aparece se o projeto tiver o campo "process" definido em data.js, e cada
// parte (problema / base de dados / desafios) só é mostrada se tiver conteúdo — por exemplo,
// projetos sem base de dados própria podem omitir esse bloco.
function renderProcessSection(project, lang) {
  if (!project.process) return "";

  const parts = [
    { key: "problem", labelKey: "project.process.problem", iconPath: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' },
    { key: "solution", labelKey: "project.process.solution", iconPath: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z"/>' },
    { key: "database", labelKey: "project.process.database", iconPath: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>' },
    { key: "challenges", labelKey: "project.process.challenges", iconPath: '<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"/>' },
  ];

  const blocks = parts
    .filter(({ key }) => project.process[key])
    .map(({ key, labelKey, iconPath }) => {
      const text = project.process[key][lang] || project.process[key].pt;
      return `
        <div class="process-block">
          <div class="process-block-header">
            <svg class="process-icon process-icon-${key}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${iconPath}</svg>
            <h3>${t(labelKey)}</h3>
          </div>
          <p>${text}</p>
        </div>
      `;
    })
    .join("");

  if (!blocks) return "";

  return `
    <div class="project-process">
      <h2 class="process-title">${t("project.process.title")}</h2>
      <div class="process-grid">
        ${blocks}
      </div>
    </div>
  `;
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

  const description = (project.longDescription && (project.longDescription[lang] || project.longDescription.pt))
    || (project.description[lang] || project.description.pt);

  content.innerHTML = `
    <div class="project-detail-header">
      <div class="project-detail-title-row">
        ${renderProjectLogo(project, "project-logo-lg")}
        <h1>${project.title}</h1>
        ${renderStatusTag(project)}
      </div>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
    ${renderGalleryMarkup(project)}
    <div class="project-detail-body">
      <p>${description}</p>
    </div>
    ${renderProcessSection(project, lang)}
  `;

  initProjectGallery(project);

  document.title = `${project.title} — João Baptista`;
}

document.addEventListener("DOMContentLoaded", renderProjectDetail);
