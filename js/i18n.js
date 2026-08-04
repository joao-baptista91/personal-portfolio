// Sistema simples de traduções (i18n) do portfólio.
// Como funciona:
// 1. Cada texto traduzível no HTML tem um atributo data-i18n="chave" (ex: data-i18n="hero.title1").
// 2. Essa "chave" aponta para uma entrada em TRANSLATIONS.pt e TRANSLATIONS.en.
// 3. applyTranslations() percorre todos os elementos com data-i18n e substitui o texto
//    pela tradução correspondente ao idioma atual.
// 4. O idioma escolhido fica guardado no localStorage, por isso mantém-se ao recarregar a página.
//
// Para adicionar um novo texto traduzível:
//   a) acrescenta uma chave nova em TRANSLATIONS.pt e TRANSLATIONS.en
//   b) no HTML, adiciona data-i18n="a-tua-chave" ao elemento
//   c) escreve o texto em português dentro do elemento (serve de fallback)

const LANGUAGES = {
  pt: { code: "PT", flagSrc: "assets/icons/flag-pt.svg", name: "Português" },
  en: { code: "EN", flagSrc: "assets/icons/flag-gb.svg", name: "English" }
};

const TRANSLATIONS = {
  pt: {
    "meta.title": "João Baptista — Portfólio",
    "nav.projects": "Projetos",
    "nav.contact": "Contacto",
    "hero.title1": "A construir aplicações web.",
    "hero.title2": "Um projeto de cada vez.",
    "hero.text": "Este é o meu portfólio pessoal, onde reúno as aplicações web que tenho vindo a desenvolver — com prints e uma breve descrição de cada uma.",
    "hero.viewProjects": "Ver Projetos",
    "hero.contact": "Contactar",
    "projects.title": "Projetos",
    "projects.subtitle": "Uma seleção das aplicações que desenvolvi.",
    "project.imagePlaceholder": "Print em breve",
    "project.viewLink": "Ver projeto",
    "footer.role": "Web Developer",
    "footer.copyright": "© 2026 João Baptista. Todos os direitos reservados."
  },
  en: {
    "meta.title": "João Baptista — Portfolio",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title1": "Building web applications.",
    "hero.title2": "One project at a time.",
    "hero.text": "This is my personal portfolio, where I gather the web applications I've been building — with screenshots and a short description of each one.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact Me",
    "projects.title": "Projects",
    "projects.subtitle": "A selection of the applications I've built.",
    "project.imagePlaceholder": "Screenshot coming soon",
    "project.viewLink": "View project",
    "footer.role": "Web Developer",
    "footer.copyright": "© 2026 João Baptista. All rights reserved."
  }
};

const LANG_STORAGE_KEY = "portfolio-lang";

function getLang() {
  return localStorage.getItem(LANG_STORAGE_KEY) || "pt";
}

function t(key) {
  const lang = getLang();
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || key;
}

function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.title = t("meta.title");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  const flagEl = document.getElementById("lang-flag");
  const codeEl = document.getElementById("lang-code");
  if (flagEl) {
    flagEl.src = LANGUAGES[lang].flagSrc;
    flagEl.alt = LANGUAGES[lang].code;
  }
  if (codeEl) codeEl.textContent = LANGUAGES[lang].code;

  document.querySelectorAll('input[name="lang"]').forEach((input) => {
    input.checked = input.value === lang;
  });
}

function setLang(lang) {
  if (!LANGUAGES[lang]) return;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyTranslations();
  if (typeof renderProjects === "function") renderProjects();
}

function initLangSwitcher() {
  const toggle = document.getElementById("lang-toggle");
  const popover = document.getElementById("lang-popover");
  if (!toggle || !popover) return;

  const closePopover = () => {
    popover.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  const openPopover = () => {
    popover.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (popover.hidden) {
      openPopover();
    } else {
      closePopover();
    }
  });

  popover.querySelectorAll('input[name="lang"]').forEach((input) => {
    input.addEventListener("change", () => {
      setLang(input.value);
      closePopover();
    });
  });

  document.addEventListener("click", (e) => {
    if (!popover.hidden && !popover.contains(e.target) && e.target !== toggle) {
      closePopover();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopover();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  initLangSwitcher();
});
