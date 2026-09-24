// Funções de apresentação do site: transformam os dados de js/data.js (projetos, certificações,
// formação contínua e recursos) no HTML mostrado nas páginas.
//
// Estavam dentro de js/data.js, o que obrigava o admin.html a guardar cópias em texto destas
// funções para as reescrever sempre que gravava o ficheiro. Com elas aqui, o js/data.js fica só
// com dados, e o admin nunca mais toca neste código.
//
// Tem de ser carregado depois de js/data.js e antes dos scripts de cada página (main.js,
// project.js, etc.). Usa a função t() do js/i18n.js para as etiquetas traduzidas, mas só
// quando as funções são chamadas (depois de a página carregar), por isso a ordem entre este
// ficheiro e o i18n.js não importa.

// Projetos visíveis no site público. Os projetos com estado "planned" (Planeado) ficam
// guardados em js/data.js e continuam editáveis no admin, mas não aparecem no carrossel, em
// "Todos os Projetos" nem na página de detalhe. Para voltar a mostrá-los, basta mudar o estado
// no admin (ex: para "Em desenvolvimento") ou retirar "planned" desta lista.
const HIDDEN_PROJECT_STATUSES = ["planned"];

function visibleProjects() {
  if (typeof PROJECTS === "undefined") return [];
  return PROJECTS.filter((p) => !HIDDEN_PROJECT_STATUSES.includes(p.status));
}

// Biblioteca de ícones disponíveis para as certificações. Cada entrada é o conteúdo interno
// (paths/shapes) de um <svg viewBox="0 0 24 24">, no estilo "outline" usado em todo o site.
// Para acrescentar um ícone novo, basta definir aqui uma chave nova com o path SVG: passa logo
// a poder ser escolhida no campo "icon" de uma certificação e no admin.html (onde só é
// preciso acrescentar a etiqueta em português, em CERT_ICON_LABELS, no js/admin.js).
const CERT_ICONS = {
  cloud: "<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"/>",
  monitor: "<rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/><line x1=\"2\" y1=\"9\" x2=\"22\" y2=\"9\"/><line x1=\"6\" y1=\"6.5\" x2=\"6\" y2=\"6.5\"/>",
  key: "<path d=\"M14.7 6.3a4 4 0 1 0-5.6 5.6L3 18v3h3l6.1-6.1a4 4 0 0 0 5.6-5.6l-2.65 2.65a1.5 1.5 0 0 1-2.12-2.12L14.7 6.3z\"/>",
  cap: "<path d=\"M22 10 12 5 2 10l10 5 10-5Z\"/><path d=\"M6 12v4.5c0 .8 2.5 2.5 6 2.5s6-1.7 6-2.5V12\"/><path d=\"M22 10v6\"/>",
  shield: "<path d=\"M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z\"/><path d=\"m9 12 2 2 4-4\"/>",
  database: "<ellipse cx=\"12\" cy=\"5\" rx=\"8\" ry=\"3\"/><path d=\"M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5\"/><path d=\"M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3\"/>",
  code: "<polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/>",
  book: "<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"/><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"/>",
  lock: "<rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 11V7a4 4 0 0 1 8 0v4\"/>",
  puzzle: "<path d=\"M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1\"/>",
  star: "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"/>"
};

function renderCertCard(cert) {
  const iconPath = CERT_ICONS[cert.icon] || CERT_ICONS.shield;
  return `
    <div class="cert-card">
      <div class="cert-content">
        <div class="cert-icon-col">
          <span class="cert-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">${iconPath}</svg>
          </span>
        </div>
        <div class="cert-body">
          <p class="cert-title">${cert.title}</p>
          <p class="cert-entity">${cert.entity}</p>
          <p class="cert-year">${cert.year}</p>
        </div>
      </div>
    </div>
  `;
}

function renderContinueduItem(item, lang) {
  const name = (item.name && (item.name[lang] || item.name.pt)) || "";
  return `
    <div class="continuedu-item">
      <span class="continuedu-name">${name}</span>
      <span class="continuedu-meta">${item.institution} · ${item.year}</span>
    </div>
  `;
}

// Gera o markup do pequeno logótipo/ícone da aplicação, usado ao lado do título tanto nos
// cartões (homepage e "Todos os Projetos") como na página de detalhe. Se o projeto tiver um
// "logo" definido, mostra essa imagem; caso contrário, mostra um ícone genérico de aplicação.
// extraClass permite aplicar uma variante maior (ex: "project-logo-lg" na página de detalhe).
function renderProjectLogo(project, extraClass) {
  const cls = "project-logo" + (extraClass ? " " + extraClass : "");
  if (project.logo) {
    return `<div class="${cls}"><img src="${project.logo}" alt="${project.title} logo" loading="lazy"></div>`;
  }
  return `
    <div class="${cls}" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5"/>
      </svg>
    </div>
  `;
}

// Gera a tag colorida com o estado de desenvolvimento da app, usada nos cartões (sobre o print)
// e na página de detalhe (ao lado do título). Estados possíveis para "status":
// "planned" (cinzento, "Planeado"), "in-progress" (laranja, "Em desenvolvimento") e
// "done" (verde, "Finalizado"). Se o projeto não tiver "status" definido, não mostra nada.
const STATUS_TAGS = {
  planned: { cls: "status-tag-planned", key: "status.planned" },
  "in-progress": { cls: "status-tag-progress", key: "status.inProgress" },
  done: { cls: "status-tag-done", key: "status.done" }
};

function renderStatusTag(project) {
  const info = STATUS_TAGS[project.status];
  if (!info) return "";
  return `<span class="status-tag ${info.cls}">${t(info.key)}</span>`;
}

// Gera o markup de um cartão de recurso (usado em resources.html). Aponta sempre para
// resource.html?id=... — uma única página de detalhe partilhada por todos os recursos,
// tal como project.html faz para os projetos.
function renderResourceCard(resource, lang) {
  return `
    <a href="resource.html?id=${encodeURIComponent(resource.id)}" class="resource-card">
      <div class="resource-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          ${resource.iconSvg}
        </svg>
      </div>
      <div class="resource-text">
        <span class="resource-tag">${resource.tag[lang] || resource.tag.pt}</span>
        <h2 class="resource-title">${resource.title[lang] || resource.title.pt}</h2>
        <p class="resource-description">${resource.cardDescription[lang] || resource.cardDescription.pt}</p>
        <span class="resource-link">${t("resources.openLabel")}</span>
      </div>
    </a>
  `;
}
