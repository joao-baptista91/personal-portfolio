function getProjectFromUrl() {
  if (typeof PROJECTS === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return null;
  return visibleProjects().find((p) => p.id === id) || null;
}

let galleryKeydownHandler = null;

// Caminho da miniatura de uma captura: mesma pasta, subpasta "thumbs", extensão ".jpg"
// (geradas por scripts/generate-thumbnails.py). Ex: ".../talent-bridge/print-tb-0.png" passa a
// ".../talent-bridge/thumbs/print-tb-0.jpg". Aceita "/" ou "\\" como separador, porque o
// data.js tem caminhos nos dois formatos.
function galleryThumbPath(src) {
  const cut = Math.max(src.lastIndexOf("/"), src.lastIndexOf("\\")) + 1;
  const name = src.slice(cut).replace(/\.[^.]+$/, "");
  return src.slice(0, cut) + "thumbs/" + name + ".jpg";
}

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
            <img src="${galleryThumbPath(src)}" data-full="${src}" alt="">
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

    <div class="lightbox" id="project-lightbox" role="dialog" aria-modal="true" aria-label="${t("project.zoomImage")}" hidden>
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

  // Se ainda não houver miniatura para alguma captura (ex: captura nova sem correr
  // scripts/generate-thumbnails.py), mostra a captura original em vez de uma caixa vazia.
  thumbs.forEach((btn) => {
    const img = btn.querySelector("img");
    if (!img) return;
    img.addEventListener("error", () => {
      if (img.dataset.full && img.getAttribute("src") !== img.dataset.full) img.src = img.dataset.full;
    }, { once: true });
  });
  const lightbox = document.getElementById("project-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");
  if (!mainImg || !mainBox || !lightbox || !lightboxImg) return;

  let lastFocusedElement = null;

  function getFocusableLightboxElements() {
    return Array.from(lightbox.querySelectorAll("button")).filter((el) => !el.hidden && el.offsetParent !== null);
  }

  function setIndex(i) {
    currentIndex = (i + images.length) % images.length;
    mainImg.src = images[currentIndex];
    thumbs.forEach((btn, idx) => btn.classList.toggle("active", idx === currentIndex));
    if (!lightbox.hidden) lightboxImg.src = images[currentIndex];
  }

  function openLightbox() {
    lightboxImg.src = images[currentIndex];
    lastFocusedElement = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    } else {
      mainBox.focus();
    }
    lastFocusedElement = null;
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
    if (e.key === "Tab") {
      const focusable = getFocusableLightboxElements();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  document.addEventListener("keydown", galleryKeydownHandler);
}

// Gera o markup da secção "Processo de Desenvolvimento" (problema, base de dados, desafios).
// É opcional: só aparece se o projeto tiver o campo "process" definido em data.js, e cada
// parte (problema / base de dados / desafios) só é mostrada se tiver conteúdo — por exemplo,
// projetos sem base de dados própria podem omitir esse bloco.
// O texto de cada parte (pt/en) é inserido diretamente como HTML (não só texto simples), para
// permitir uma frase de introdução seguida de uma lista <ul><li> — por isso, ao escrever/editar
// "process" em js/data.js, o conteúdo deve incluir as próprias tags (ex: "<p>...</p><ul><li>...</li></ul>").
//
// "Problema" e "Solução" formam a sequência lógica principal (um leva ao outro), por isso são
// mostrados numa fila própria ("process-flow"), com uma seta entre os dois. Os restantes blocos
// (Base de Dados, Desafios Técnicos, Contributo da IA, Principal Aprendizagem) são detalhes de
// apoio a essa narrativa, por isso aparecem separados, numa grelha própria por baixo.
function renderProcessSection(project, lang) {
  if (!project.process) return "";

  const flowParts = [
    { key: "problem", labelKey: "project.process.problem", iconPath: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' },
    { key: "solution", labelKey: "project.process.solution", iconPath: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z"/>' },
  ];
  const detailParts = [
    { key: "database", labelKey: "project.process.database", iconPath: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>' },
    { key: "challenges", labelKey: "project.process.challenges", iconPath: '<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"/>' },
    { key: "aiContribution", labelKey: "project.process.aiContribution", iconPath: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>' },
    { key: "learning", labelKey: "project.process.learning", iconPath: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>' },
  ];

  function renderBlock({ key, labelKey, iconPath }) {
    const text = project.process[key][lang] || project.process[key].pt;
    return `
      <div class="process-block">
        <div class="process-block-header">
          <svg class="process-icon process-icon-${key}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${iconPath}</svg>
          <h3>${t(labelKey)}</h3>
        </div>
        ${text}
      </div>
    `;
  }

  const flowAvailable = flowParts.filter(({ key }) => project.process[key]);
  const detailsAvailable = detailParts.filter(({ key }) => project.process[key]);

  if (!flowAvailable.length && !detailsAvailable.length) return "";

  const arrowSvg = `
    <div class="process-flow-arrow" aria-hidden="true">
      <span class="process-flow-arrow-line"></span>
      <svg class="process-flow-arrow-head" viewBox="0 0 10 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <polyline points="1 1 9 8 1 15"/>
      </svg>
    </div>
  `;

  const flowHtml = flowAvailable.length
    ? `
      <div class="process-flow">
        ${flowAvailable.map((part, i) => `${i > 0 ? arrowSvg : ""}${renderBlock(part)}`).join("")}
      </div>
    `
    : "";

  const detailsHtml = detailsAvailable.length
    ? `
      <div class="process-details">
        ${detailsAvailable.map(renderBlock).join("")}
      </div>
    `
    : "";

  return `
    <div class="project-process">
      <h2 class="process-title">${t("project.process.title")}</h2>
      ${flowHtml}
      ${detailsHtml}
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
    document.title = lang === "en" ? "João Baptista - Project not found" : "João Baptista - Projeto não encontrado";
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
      ${description}
    </div>
    ${project.link && project.link !== "#" ? `
      <div class="project-demo">
        <p class="project-demo-cta">${t("project.demoCta")}</p>
        ${project.demoCredentials ? `
          <div class="project-demo-credentials">
            ${project.demoCredentials[lang] || project.demoCredentials.pt}
          </div>
        ` : ""}
        ${project.demoNote ? `
          <p class="project-demo-note">
            ${project.demoNote[lang] || project.demoNote.pt}
          </p>
        ` : ""}
        <a class="btn btn-primary project-demo-link" href="${project.link}" target="_blank" rel="noopener noreferrer">
          <span>${t("project.openApp")}</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    ` : ""}
    ${renderProcessSection(project, lang)}
  `;

  initProjectGallery(project);

  document.title = `${project.title} - João Baptista`;
}

document.addEventListener("DOMContentLoaded", renderProjectDetail);
