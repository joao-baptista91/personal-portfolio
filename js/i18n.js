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
    "header.downloadCV": "Download CV",
    "nav.about": "Sobre mim",
    "nav.skills": "Competências",
    "nav.certs": "Certificações",
    "nav.projects": "Projetos",
    "nav.contact": "Contactar-me",
    "hero.title1": "João Baptista, Consultor de TI,",
    "hero.title2": "com uma base sustentável",
    "hero.text": "Desenvolvo e dou suporte a aplicações web com foco na eficiência, fiabilidade, melhoria contínua e sustentabilidade. Este portfólio reúne alguns dos projetos que refletem a minha evolução técnica e profissional.",
    "hero.viewProjects": "Ver Projetos",
    "hero.contact": "Contactar-me",
    "about.title": "Sobre mim",
    "about.text1": "Eu, João Baptista, tenho formação académica em Engenharia da Energia e do Ambiente (Mestrado pela Escola Superior de Tecnologia e Gestão de Leiria) e passei por estágios nas áreas da consultoria em Qualidade e Ambiente e das energias renováveis. A minha formação, aliada à experiência profissional inicial, levou-me a valorizar a eficiência dos processos e a utilização racional dos recursos, princípios que continuo a aplicar quando desenvolvo ou dou suporte a soluções tecnológicas.",
    "about.text2": "Mais tarde, foi através do suporte informático e da formação que me aproximei da tecnologia e decidi orientar o meu percurso profissional para essa área. Atualmente, lido com desenvolvimento e suporte aplicacional na plataforma OutSystems, possuindo as certificações Associate Developer for ODC e Associate Reactive Developer. Ao longo deste percurso participei em projetos nos setores Seguros/Gestão de Sinistros e Automóvel, enquanto continuo a expandir competências em Python, JavaScript e C#.",
    "about.text3": "Procuro cruzar as duas áreas sempre que faz sentido. A engenharia ensinou-me a pensar em sistemas, processos e eficiência, e procuro aplicar essa forma de pensar em cada projeto que desenvolvo. Este portfólio nasce precisamente dessa vontade de continuar a aprender, evoluir e transformar conhecimento em soluções práticas.",
    "skills.title": "Competências",
    "skills.subtitle": "As ferramentas e tecnologias que uso no dia a dia.",
    "certs.title": "Certificações",
    "certs.subtitle": "Formação e certificações que sustentam o meu trabalho.",
    "projects.title": "Projetos",
    "projects.subtitle": "Cada projeto nasceu de um problema chato. As soluções moram aqui.",
    "project.imagePlaceholder": "Print em breve",
    "project.viewLink": "Ver projeto",
    "footer.title": "Contactos",
    "footer.linksTitle": "Links Rápidos",
    "footer.role": "Consultor TI",
    "footer.tagline": "Sempre com espaço na agenda para novos projetos e boas conversas sobre tecnologia.",
    "footer.heading": "Vamos conversar?",
    "footer.emailLabel": "Enviar-me um email",
    "footer.copyright": "© 2026 João Baptista. Todos os direitos reservados."
  },
  en: {
    "meta.title": "João Baptista — Portfolio",
    "header.downloadCV": "Download CV",
    "nav.about": "About me",
    "nav.skills": "Skills",
    "nav.certs": "Certifications",
    "nav.projects": "Projects",
    "nav.contact": "Contact me",
    "hero.title1": "João Baptista, IT Consultant, with a",
    "hero.title2": "sustainable foundation",
    "hero.text": "I develop and support web applications with a focus on efficiency, reliability, continuous improvement and sustainability. This portfolio gathers some of the projects that reflect my technical and professional growth.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact me",
    "about.title": "About me",
    "about.text1": "I, João Baptista, hold an academic degree in Energy and Environmental Engineering (Master's from Escola Superior de Tecnologia e Gestão de Leiria) and completed internships in Quality and Environmental consulting and in renewable energy. That background, combined with my early professional experience, led me to value process efficiency and the rational use of resources — principles I still apply when developing or supporting technology solutions.",
    "about.text2": "Later on, it was through IT support and training that I got closer to technology and decided to steer my career in that direction. Today, I work on application development and support on the OutSystems platform, holding the Associate Developer for ODC and Associate Reactive Developer certifications. Along the way I've taken part in projects in the Insurance/Claims Management and Automotive sectors, while continuing to expand my skills in Python, JavaScript and C#.",
    "about.text3": "I try to bring the two fields together whenever it makes sense. Engineering taught me to think in terms of systems, processes and efficiency, and I try to apply that mindset to every project I build. This portfolio was born precisely from that drive to keep learning, evolving, and turning knowledge into practical solutions.",
    "skills.title": "Skills",
    "skills.subtitle": "The tools and technologies I use day to day.",
    "certs.title": "Certifications",
    "certs.subtitle": "Training and certifications that back up my work.",
    "projects.title": "Projects",
    "projects.subtitle": "Every project started as an annoying problem. The solutions live here.",
    "project.imagePlaceholder": "Screenshot coming soon",
    "project.viewLink": "View project",
    "footer.title": "Contacts",
    "footer.linksTitle": "Quick Links",
    "footer.role": "IT Consultant",
    "footer.tagline": "Always got room on my calendar for new projects and a good chat about tech.",
    "footer.heading": "Let's talk?",
    "footer.emailLabel": "Send me an email",
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

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const text = t(el.getAttribute("data-i18n-title"));
    el.title = text;
    el.setAttribute("aria-label", text);
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
