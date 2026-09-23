// Cabeçalho partilhado por todas as páginas do site (index.html, project.html, resource.html,
// resources.html, all-projects.html e admin.html).
//
// Como funciona: cada página tem um <div id="site-header-root" data-variant="..."></div> logo
// a seguir a <body>, onde este script injeta o HTML completo do cabeçalho — tal como
// js/footer.js já faz para o rodapé. Isto corre de forma síncrona (o <script> fica logo a
// seguir ao placeholder no HTML) para o cabeçalho já existir no DOM antes de i18n.js/main.js
// tentarem ligar-se aos elementos dele (menu móvel, seletor de idioma, etc.).
//
// "data-variant" controla duas coisas que mudam consoante a página:
//   - "home"  (só em index.html): o logo e os links do menu apontam para âncoras da própria
//     página (ex: "#projects"), e mostra o menu de navegação completo.
//   - "sub"   (project.html, resource.html, resources.html, all-projects.html): os links
//     apontam para "index.html#..." (a partir de outra página), mesmo menu completo.
//   - "admin" (admin.html): sem menu de navegação nem seletor de idioma — só o logo e um link
//     "Voltar ao site".
//
// Para editar o conteúdo do menu (acrescentar/remover um link, mudar o texto), basta editar
// NAV_ITEMS ou o template abaixo — nunca é preciso repetir a alteração em cada ficheiro HTML.

const NAV_ITEMS = [
  { hash: "home", i18n: null, label: "Home" },
  { hash: "about", i18n: "nav.about", label: "Sobre mim" },
  { hash: "experience", i18n: "nav.experience", label: "Experiência" },
  { hash: "skills", i18n: "nav.skills", label: "Competências" },
  { hash: "certifications", i18n: "nav.certs", label: "Certificações" },
  { hash: "projects", i18n: "nav.projects", label: "Projetos" },
  { hash: "resources-teaser", i18n: "nav.resources", label: "Recursos" },
  { hash: "contact", i18n: "nav.contact", label: "Contactos" }
];

function renderSiteHeader() {
  const root = document.getElementById("site-header-root");
  if (!root) return;

  const variant = root.dataset.variant || "sub";

  if (variant === "admin") {
    root.outerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo">
          <span class="logo-mark"><img src="assets/images/about-photo.jpg" alt="João Baptista"></span>
          <span class="logo-text">
            João Baptista
            <small>Gestão do Portefólio</small>
          </span>
        </a>
        <a href="index.html" class="back-link admin-header-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Voltar ao site
        </a>
      </div>
    </header>
    `;
    return;
  }

  const prefix = variant === "home" ? "" : "index.html";
  const logoHref = variant === "home" ? "#home" : "index.html";

  // Algumas páginas (ex: resource.html) usam um subtítulo diferente de "IT Consultant"
  // por baixo do nome, com a sua própria chave de tradução. Isto é opcional: se a
  // página não definir data-kicker-i18n/data-kicker-label, usa-se o valor por omissão.
  const kickerI18n = root.dataset.kickerI18n || null;
  const kickerLabel = root.dataset.kickerLabel || "IT Consultant";
  const kickerAttr = kickerI18n ? ` data-i18n="${kickerI18n}"` : "";

  const navLinks = NAV_ITEMS.map(({ hash, i18n, label }) => {
    const i18nAttr = i18n ? ` data-i18n="${i18n}"` : "";
    return `<a href="${prefix}#${hash}"${i18nAttr}>${label}</a>`;
  }).join("\n          ");

  root.outerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a href="${logoHref}" class="logo">
        <span class="logo-mark"><img src="assets/images/about-photo.jpg" alt="João Baptista"></span>
        <span class="logo-text">
          João Baptista
          <small${kickerAttr}>${kickerLabel}</small>
        </span>
      </a>

      <div class="nav-wrap">
        <nav class="nav">
          ${navLinks}
        </nav>

        <div class="lang-switcher">
          <button id="lang-toggle" class="lang-toggle" type="button" aria-haspopup="true" aria-expanded="false">
            <img class="lang-flag" id="lang-flag" src="assets/icons/flag-pt.svg" alt="PT">
            <span class="lang-code" id="lang-code">PT</span>
            <span class="lang-caret" aria-hidden="true">▾</span>
          </button>
          <div class="lang-popover" id="lang-popover" role="menu" hidden>
            <label class="lang-option">
              <input type="radio" name="lang" value="pt" checked>
              <img class="lang-flag" src="assets/icons/flag-pt.svg" alt="PT">
              <span>Português</span>
            </label>
            <label class="lang-option">
              <input type="radio" name="lang" value="en">
              <img class="lang-flag" src="assets/icons/flag-gb.svg" alt="EN">
              <span>English</span>
            </label>
          </div>
        </div>

        <a class="btn btn-outline btn-cv cv-download" href="assets/documents/CV_JoaoBaptista.pdf" download>
          <span data-i18n="header.downloadCV">Download CV</span>
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 3v12"/>
            <polyline points="7 10 12 15 17 10"/>
            <path d="M5 19h14"/>
          </svg>
        </a>
      </div>

      <button type="button" id="nav-toggle" class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
        <svg class="nav-toggle-icon-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="4" y1="7" x2="20" y2="7"/>
          <line x1="4" y1="12" x2="20" y2="12"/>
          <line x1="4" y1="17" x2="20" y2="17"/>
        </svg>
        <svg class="nav-toggle-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  </header>
  `;
}

renderSiteHeader();
