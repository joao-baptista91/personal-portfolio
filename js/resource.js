function getResourceFromUrl() {
  if (typeof RESOURCES === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return null;
  return RESOURCES.find((r) => r.id === id) || null;
}

function renderResourceTopics(resource, lang) {
  return resource.topics.map((topic, i) => `
    <section class="guide-topic">
      <div class="guide-topic-header">
        <span class="guide-topic-number">${i + 1}</span>
        <h2 class="guide-topic-title">${topic.title[lang] || topic.title.pt}</h2>
      </div>
      <ul class="guide-topic-list">
        ${topic.items.map((item) => `<li>${item[lang] || item.pt}</li>`).join("")}
      </ul>
      ${topic.callout ? `<div class="guide-callout">${topic.callout[lang] || topic.callout.pt}</div>` : ""}
    </section>
  `).join("");
}

function renderResourceDetail() {
  const content = document.getElementById("resource-detail-content");
  const notFound = document.getElementById("resource-not-found");
  const footer = document.getElementById("resource-footer");
  if (!content || !notFound) return;

  const lang = typeof getLang === "function" ? getLang() : "pt";
  const resource = getResourceFromUrl();

  if (!resource) {
    content.hidden = true;
    notFound.hidden = false;
    if (footer) footer.hidden = true;
    document.title = lang === "en" ? "João Baptista — Resource not found" : "João Baptista — Recurso não encontrado";
    return;
  }

  content.hidden = false;
  notFound.hidden = true;

  content.innerHTML = `
    <div class="guide-header">
      <span class="guide-kicker">${t("guide.kicker")}</span>
      <h1 class="guide-title">${resource.title[lang] || resource.title.pt}</h1>
      <p class="guide-subtitle">${resource.subtitle[lang] || resource.subtitle.pt}</p>
      <div class="guide-header-bottom">
        <p class="guide-meta">${resource.meta}</p>
        <a href="${resource.pdf}" class="btn btn-outline btn-cv" download>
          <span>${t("guide.downloadPdf")}</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 3v12"/>
            <polyline points="7 10 12 15 17 10"/>
            <path d="M5 19h14"/>
          </svg>
        </a>
      </div>
    </div>

    <p class="guide-intro">${resource.intro[lang] || resource.intro.pt}</p>

    <div class="guide-topics">
      ${renderResourceTopics(resource, lang)}
    </div>

    <div class="guide-checklist">
      <h2>${t("guide.checklist.heading")}</h2>
      <ul>
        ${resource.checklist.map((item) => `<li>${item[lang] || item.pt}</li>`).join("")}
      </ul>
    </div>
  `;

  if (footer) {
    footer.hidden = false;
    const nameEl = document.getElementById("resource-footer-name");
    const updatedEl = document.getElementById("resource-footer-updated");
    const title = resource.title[lang] || resource.title.pt;
    if (nameEl) nameEl.textContent = lang === "en" ? `${title} Guide — João Baptista` : `Guia de ${title} — João Baptista`;
    if (updatedEl) updatedEl.textContent = resource.footerUpdated[lang] || resource.footerUpdated.pt;
  }

  document.title = `${resource.title[lang] || resource.title.pt} — João Baptista`;
}

document.addEventListener("DOMContentLoaded", renderResourceDetail);
