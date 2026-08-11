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
    "nav.experience": "Experiência",
    "nav.skills": "Competências",
    "nav.certs": "Certificações",
    "nav.projects": "Projetos",
    "nav.resources": "Recursos",
    "nav.contact": "Contactar-me",
    "hero.title1": "João Baptista",
    "hero.title2": "Consultor TI com uma base sustentável",
    "hero.text": "Desenvolvo e dou suporte a aplicações web com foco na eficiência, fiabilidade, melhoria contínua e sustentabilidade. Este portfólio reúne alguns dos projetos que refletem a minha evolução técnica e profissional.",
    "hero.viewProjects": "Ver Projetos",
    "hero.contact": "Contactar-me",
    "stats.projectsLabel": "Projetos Concluídos",
    "stats.certsLabel": "Certificações Obtidas",
    "stats.yearsValue": "Desde 2021",
    "stats.yearsLabel": "em TI",
    "stats.missionLabel": "Missão:",
    "stats.missionValue": "Futuro Sustentável",
    "about.title": "Sobre mim",
    "about.text1": "Eu, João Baptista, tenho formação académica em Engenharia da Energia e do Ambiente (Mestrado pela Escola Superior de Tecnologia e Gestão de Leiria) e passei por estágios nas áreas da consultoria em Qualidade e Ambiente e das energias renováveis. A minha formação, aliada à experiência profissional inicial, levou-me a valorizar a eficiência dos processos e a utilização racional dos recursos, princípios que continuo a aplicar quando desenvolvo ou dou suporte a soluções tecnológicas.",
    "about.text2": "Mais tarde, foi através do suporte informático e da formação que me aproximei da tecnologia e decidi orientar o meu percurso profissional para essa área. Atualmente, lido com desenvolvimento e suporte aplicacional na plataforma OutSystems, possuindo as certificações Associate Developer for ODC e Associate Reactive Developer. Ao longo deste percurso participei em projetos nos setores Seguros/Gestão de Sinistros e Automóvel, enquanto continuo a expandir competências em Python, JavaScript e C#. Uso também ferramentas de IA como parte do meu processo de trabalho, para acelerar tarefas e validar resultados sem abdicar do rigor técnico.",
    "about.text3": "Procuro cruzar as duas áreas sempre que faz sentido. A engenharia ensinou-me a pensar em sistemas, processos e eficiência, e procuro aplicar essa forma de pensar em cada projeto que desenvolvo. Este portfólio nasce precisamente dessa vontade de continuar a aprender, evoluir e transformar conhecimento em soluções práticas.",
    "experience.title": "Experiência Profissional",
    "experience.subtitle": "Da Consultoria em Ambiente ao Suporte e Desenvolvimento em TI. O meu percurso até aqui.",
    "experience.entry1.role": "Consultor TI OutSystems — Desenvolvimento e Suporte Aplicacional",
    "experience.entry1.highlight1": "Suporte aplicacional de 2ª linha via plataforma de tickets (TopDesk): resolução de incidentes em produção, análise de código, SQL e integrações REST/SOAP.",
    "experience.entry1.highlight2": "Desenvolvimento e manutenção de funcionalidades em aplicações Web Reactive na plataforma OutSystems 11, incluindo testes e preparação de deploys.",
    "experience.entry1.highlight3": "Participação na reestruturação da fábrica OutSystems de um cliente, reorganizando a estrutura das aplicações para melhorar desempenho e manutenção.",
    "experience.entry1.highlight4": "Controlo e redução da dívida técnica com o apoio do AI Mentor Studio, assegurando boas práticas de arquitetura e desempenho de código.",
    "experience.entry2.role": "Administrativo, Manutenção/Apoio Informático e Formador",
    "experience.entry2.highlight1": "Suporte técnico a colegas (hardware, software e monitorização do servidor) e preparação de postos de trabalho para novas admissões — Tarefas de TI iniciadas em 2021.",
    "experience.entry2.highlight2": "Ministração de ações de formação em Informática (a primeira em 2020, Excel Básico) e apoio técnico em formações dadas por colegas e formadores externos.",
    "experience.entry2.highlight3": "Trabalho administrativo mantido ao longo de todo o período, em paralelo com as funções acima.",
    "experience.entry3.role": "Estágio Profissional — Consultoria em Qualidade e Ambiente",
    "experience.entry3.highlight1": "Participação em auditorias e ações de consultoria nas áreas de Qualidade e Ambiente.",
    "experience.entry3.highlight2": "Apoio na definição, recolha e monitorização de indicadores (KPIs) e objetivos operacionais.",
    "experience.entry3.highlight3": "Elaboração de relatórios técnicos de acompanhamento, diagnósticos e documentação de intervenções.",
    "experience.entry4.role": "Estágio Curricular — Energias Renováveis",
    "experience.entry4.highlight1": "Elaboração de um projeto de produção fotovoltaica para a empresa.",
    "experience.entry4.highlight2": "Recolha e tratamento de dados energéticos, meteorológicos, cartográficos e geológicos.",
    "experience.entry4.highlight3": "Estudo e simulação de produção de energia e de retorno financeiro.",
    "continuedu.title": "Formação Contínua",
    "continuedu.subtitle": "Cursos que continuei a fazer para expandir competências técnicas.",
    "continuedu.item1.name": "Linguagens de Programação ASP.NET",
    "continuedu.item2.name": "Programação em Python",
    "continuedu.item3.name": "The Complete JavaScript Course: From Zero to Expert!",
    "resources.title": "Recursos",
    "resources.subtitle": "Documentos e guias práticos que preparei para partilhar conhecimento técnico de forma simples e acessível, desde boas práticas de segurança a checklists de suporte.",
    "resources.openLabel": "Abrir guia →",
    "resources.notFound": "Recurso não encontrado.",
    "resources.teaserText": "Para além dos projetos, também partilho guias práticos e conhecimento técnico, desde boas práticas de segurança a checklists de suporte. Uma extensão deste portfólio pensada para ajudar quem também anda a aprender. Dá uma olhada!",
    "resources.viewAll": "Ver Recursos",
    "guide.kicker": "Guia de Utilizador",
    "guide.downloadPdf": "Descarregar PDF",
    "guide.backToResources": "Voltar a Recursos",
    "guide.checklist.heading": "Checklist rápida",
    "skills.title": "Competências",
    "skills.subtitle": "O meu kit de ferramentas para transformar problemas em soluções.",
    "certs.title": "Certificações",
    "certs.subtitle": "A base que sustenta cada solução que construo.",
    "projects.title": "Projetos",
    "projects.subtitle": "Cada projeto nasceu de um problema chato. As soluções moram aqui.",
    "projects.viewAll": "Ver Todos os Projetos",
    "projects.prev": "Anterior",
    "projects.next": "Seguinte",
    "projects.allTitle": "Todos os Projetos",
    "projects.allSubtitle": "Nem todos couberam na página principal... Aqui fica a lista completa.",
    "projects.allSubtitleSecondary": "Mais problemas chatos, mais soluções!",
    "projects.backHome": "Voltar",
    "project.imagePlaceholder": "Print em breve",
    "project.viewLink": "Ver projeto",
    "project.backAll": "Voltar a todos os projetos",
    "project.notFound": "Projeto não encontrado.",
    "project.zoomImage": "Ampliar imagem",
    "project.viewImage": "Imagem",
    "project.close": "Fechar",
    "status.planned": "Planeado",
    "status.inProgress": "Em desenvolvimento",
    "status.done": "Finalizado",
    "footer.title": "Contactos",
    "footer.subtitle": "Vamos conversar? As melhores soluções começam sempre numa boa conversa.",
    "footer.role": "Consultor TI",
    "footer.tagline": "Tecnologia, eficiência e melhoria contínua para criar soluções que fazem a diferença. Sempre a aprender, sempre a evoluir.",
    "footer.heading": "Onde me encontrar:",
    "footer.emailLabel": "Enviar-me um email",
    "footer.copyright": "© 2026 João Baptista. Todos os direitos reservados."
  },
  en: {
    "meta.title": "João Baptista — Portfolio",
    "header.downloadCV": "Download CV",
    "nav.about": "About me",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.certs": "Certifications",
    "nav.projects": "Projects",
    "nav.resources": "Resources",
    "nav.contact": "Contact me",
    "hero.title1": "João Baptista",
    "hero.title2": "IT Consultant with a sustainable foundation",
    "hero.text": "I develop and support web applications with a focus on efficiency, reliability, continuous improvement and sustainability. This portfolio gathers some of the projects that reflect my technical and professional growth.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact me",
    "stats.projectsLabel": "Completed Projects",
    "stats.certsLabel": "Certifications Earned",
    "stats.yearsValue": "Since 2021",
    "stats.yearsLabel": "in IT",
    "stats.missionLabel": "Mission:",
    "stats.missionValue": "Sustainable Future",
    "about.title": "About me",
    "about.text1": "I, João Baptista, hold an academic degree in Energy and Environmental Engineering (Master's from Escola Superior de Tecnologia e Gestão de Leiria) and completed internships in Quality and Environmental consulting and in renewable energy. That background, combined with my early professional experience, led me to value process efficiency and the rational use of resources — principles I still apply when developing or supporting technology solutions.",
    "about.text2": "Later on, it was through IT support and training that I got closer to technology and decided to steer my career in that direction. Today, I work on application development and support on the OutSystems platform, holding the Associate Developer for ODC and Associate Reactive Developer certifications. Along the way I've taken part in projects in the Insurance/Claims Management and Automotive sectors, while continuing to expand my skills in Python, JavaScript and C#. I also use AI tools as part of my workflow, to speed up tasks and validate results without giving up technical rigor.",
    "about.text3": "I try to bring the two fields together whenever it makes sense. Engineering taught me to think in terms of systems, processes and efficiency, and I try to apply that mindset to every project I build. This portfolio was born precisely from that drive to keep learning, evolving, and turning knowledge into practical solutions.",
    "experience.title": "Professional Experience",
    "experience.subtitle": "From environmental consulting to IT support and development — my journey so far.",
    "experience.entry1.role": "OutSystems IT Consultant — Application Development & Support",
    "experience.entry1.highlight1": "2nd-line application support via a ticketing platform (TopDesk): incident resolution in production, code analysis, SQL and REST/SOAP integrations.",
    "experience.entry1.highlight2": "Development and maintenance of features in Reactive web applications on the OutSystems 11 platform, including testing and deploy preparation.",
    "experience.entry1.highlight3": "Took part in restructuring a client's OutSystems factory, reorganizing the application structure to improve performance and maintainability.",
    "experience.entry1.highlight4": "Controlled and reduced technical debt with the support of AI Mentor Studio, ensuring good architecture practices and code performance.",
    "experience.entry2.role": "Administrative Staff, IT Maintenance/Support and Trainer",
    "experience.entry2.highlight1": "Technical support to colleagues (hardware, software and server monitoring) and setting up workstations for new hires — IT tasks started in 2021.",
    "experience.entry2.highlight2": "Delivered Informatics training sessions (the first in 2020, Basic Excel) and provided technical support during training given by colleagues and external trainers.",
    "experience.entry2.highlight3": "Administrative work maintained throughout the whole period, alongside the tasks above.",
    "experience.entry3.role": "Professional Internship — Quality & Environmental Consulting",
    "experience.entry3.highlight1": "Took part in audits and consulting activities in Quality and Environmental management.",
    "experience.entry3.highlight2": "Supported the definition, collection and monitoring of KPIs and operational goals.",
    "experience.entry3.highlight3": "Prepared technical follow-up reports, diagnostics and intervention documentation.",
    "experience.entry4.role": "Curricular Internship — Renewable Energy",
    "experience.entry4.highlight1": "Prepared a photovoltaic production project for the company.",
    "experience.entry4.highlight2": "Collected and processed energy, weather, cartographic and geological data.",
    "experience.entry4.highlight3": "Studied and simulated energy production and financial return.",
    "continuedu.title": "Continuing Education",
    "continuedu.subtitle": "Courses I kept taking to expand my technical skillset.",
    "continuedu.item1.name": "ASP.NET Programming Languages",
    "continuedu.item2.name": "Python Programming",
    "continuedu.item3.name": "The Complete JavaScript Course: From Zero to Expert!",
    "resources.title": "Resources",
    "resources.subtitle": "Practical documents and guides I've put together to share technical knowledge in a simple, accessible way, from security best practices to support checklists.",
    "resources.openLabel": "Open guide →",
    "resources.notFound": "Resource not found.",
    "resources.teaserText": "Beyond the projects, I also share practical guides and technical knowledge, from security best practices to support checklists. An extension of this portfolio meant to help others who are also learning along the way. Take a look!",
    "resources.viewAll": "View Resources",
    "guide.kicker": "User Guide",
    "guide.downloadPdf": "Download PDF",
    "guide.backToResources": "Back to Resources",
    "guide.checklist.heading": "Quick checklist",
    "skills.title": "Skills",
    "skills.subtitle": "My toolkit for turning problems into solutions.",
    "certs.title": "Certifications",
    "certs.subtitle": "The foundation behind every solution I build.",
    "projects.title": "Projects",
    "projects.subtitle": "Every project started as an annoying problem. The solutions live here.",
    "projects.viewAll": "View All Projects",
    "projects.prev": "Previous",
    "projects.next": "Next",
    "projects.allTitle": "All Projects",
    "projects.allSubtitle": "Not everything fit on the main page... Here's the full list.",
    "projects.allSubtitleSecondary": "More annoying problems, more solutions!",
    "projects.backHome": "Back",
    "project.imagePlaceholder": "Screenshot coming soon",
    "project.viewLink": "View project",
    "project.backAll": "Back to all projects",
    "project.notFound": "Project not found.",
    "project.zoomImage": "Enlarge image",
    "project.viewImage": "Image",
    "project.close": "Close",
    "status.planned": "Planned",
    "status.inProgress": "In development",
    "status.done": "Completed",
    "footer.title": "Contacts",
    "footer.subtitle": "Let's talk? The best solutions always start with a good conversation.",
    "footer.role": "IT Consultant",
    "footer.tagline": "Technology, efficiency and continuous improvement to build solutions that make a difference. Always learning, always evolving.",
    "footer.heading": "Where to find me:",
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
  if (typeof renderAllProjects === "function") renderAllProjects();
  if (typeof renderProjectDetail === "function") renderProjectDetail();
  if (typeof renderResourcesList === "function") renderResourcesList();
  if (typeof renderResourceDetail === "function") renderResourceDetail();
  if (typeof renderStatsBanner === "function") renderStatsBanner();
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
