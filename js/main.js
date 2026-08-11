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
        ${renderStatusTag(p)}
        ${p.image ? `<img src="${p.image}" alt="${p.title}">` : t("project.imagePlaceholder")}
      </div>
      <div class="project-body">
        <div class="project-card-header">
          ${renderProjectLogo(p)}
          <h3>${p.title}</h3>
        </div>
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

function renderStatsBanner() {
  const projectsEl = document.getElementById("stat-projects");
  const certsEl = document.getElementById("stat-certs");
  const yearsEl = document.getElementById("stat-years");
  if (!projectsEl && !certsEl && !yearsEl) return;

  if (projectsEl && typeof PROJECTS !== "undefined") {
    const doneCount = PROJECTS.filter((p) => p.status === "done").length;
    projectsEl.textContent = doneCount;
  }

  if (certsEl) {
    const certsCount = document.querySelectorAll(".cert-card").length;
    certsEl.textContent = certsCount;
  }

  if (yearsEl) {
    yearsEl.textContent = t("stats.yearsValue");
  }
}

// Destaca no menu principal o link correspondente à secção visível no ecrã ("scroll spy").
// Só faz sentido na homepage, porque é a única página onde as secções (#about, #skills, ...)
// realmente existem — nas outras páginas os mesmos links apontam para lá, mas de fora.
//
// Cada secção "ganha" o intervalo de scroll até ao PONTO MÉDIO entre o seu topo e o topo
// da secção seguinte (em vez de precisar que o seu próprio topo ultrapasse o cimo do ecrã).
// Isto garante sempre uma janela justa a cada secção, mesmo secções curtas como
// "Competências" ou "Recursos" — não depende da altura do ecrã nem da secção.
//
// "Contactar-me" é a exceção: não entra neste cálculo, só acende no fundo real da
// página, como pedido.
function initNavScrollSpy() {
  const navLinks = Array.from(document.querySelectorAll(".nav a[href^=\"#\"]"));
  if (!navLinks.length) return;

  const sections = navLinks
    .map((link) => {
      const id = link.getAttribute("href").slice(1);
      const section = document.getElementById(id);
      return section ? { id, section } : null;
    })
    .filter(Boolean);
  if (!sections.length) return;

  const contactId = "contact";
  const spySections = sections.filter(({ id }) => id !== contactId);

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  const header = document.querySelector(".site-header");
  let ticking = false;

  function updateActive() {
    ticking = false;

    const headerOffset = header ? header.offsetHeight : 0;
    const reference = window.scrollY + headerOffset + 8;

    let currentId = spySections[0].id;
    for (let i = 0; i < spySections.length; i++) {
      const start =
        i === 0
          ? -Infinity
          : (spySections[i - 1].section.offsetTop + spySections[i].section.offsetTop) / 2;
      if (reference >= start) {
        currentId = spySections[i].id;
      } else {
        break;
      }
    }

    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    setActive(atBottom ? contactId : currentId);
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", updateActive);

  updateActive();
}

// Ao clicar num link do menu, controla o scroll manualmente em vez de deixar o
// "scroll-behavior: smooth" nativo do CSS tratar disto sozinho.
//
// Porquê: em ecrãs altos, secções curtas perto do fim da página (como "Recursos") não
// têm espaço de scroll a seguir a elas para o browser conseguir encostar o seu topo ao
// cimo do ecrã — o scroll fica "preso" no fundo real da página. Isso ativa sem querer o
// "Contactar-me" no scroll spy, mesmo tendo clicado em "Recursos". Ao calcular o destino
// nós próprios, deixamos sempre uma pequena margem antes do fundo real para as outras
// secções — exceto para "Contactar-me", que deve mesmo chegar ao fundo real da página.
function initNavClickScroll() {
  const navLinks = Array.from(document.querySelectorAll(".nav a[href^=\"#\"]"));
  if (!navLinks.length) return;

  const header = document.querySelector(".site-header");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href").slice(1);
      const section = document.getElementById(id);
      if (!section) return;

      event.preventDefault();

      const headerOffset = header ? header.offsetHeight : 0;
      const rawTarget = section.offsetTop - headerOffset;

      let target;
      if (id === "contact") {
        target = document.documentElement.scrollHeight;
      } else {
        const bottomMargin = 24;
        const maxScrollAllowed = document.documentElement.scrollHeight - window.innerHeight - bottomMargin;
        target = Math.min(rawTarget, maxScrollAllowed);
      }
      target = Math.max(0, target);

      window.scrollTo({ top: target, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initProjectsCarousel();
  renderStatsBanner();
  initNavScrollSpy();
  initNavClickScroll();
});
