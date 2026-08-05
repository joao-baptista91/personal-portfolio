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
      <h1>${project.title}</h1>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
    ${renderGalleryMarkup(project)}
    <div class="project-detail-body">
      <p>${description}</p>
    </div>
  `;

  initProjectGallery(project);

  document.title = `${project.title} — João Baptista`;
}

document.addEventListener("DOMContentLoaded", renderProjectDetail);
