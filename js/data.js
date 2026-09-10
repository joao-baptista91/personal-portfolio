// Lista de projetos do portfólio.
// Para adicionar um projeto novo, basta copiar um dos objetos abaixo e preencher os campos.
// "id" tem de ser único — é usado no URL da página de detalhe (project.html?id=...).
// "description" (curta, usada nos cartões) e "longDescription" (mais detalhada, usada na página
// de detalhe) têm sempre uma versão por idioma (pt / en).
// "image" é a imagem usada no cartão da grelha; "images" é a lista de screenshots usada na
// página de detalhe. Ambos podem apontar para ficheiros dentro de assets/images/
// (ex: "assets/images/meu-projeto.png"). Se ficarem vazios, é mostrado um placeholder automaticamente.
// "logo" é o pequeno ícone/logótipo da aplicação, mostrado ao lado do título (nos cartões e na
// página de detalhe). Também aponta para um ficheiro em assets/images/ (ex: "assets/images/meu-projeto-logo.png")
// e, se ficar vazio, mostra-se um ícone genérico de aplicação.
// "status" indica o estado de desenvolvimento da app e mostra uma tag colorida nos cartões e na
// página de detalhe: "planned" (cinzento, "Planeado"), "in-progress" (laranja, "Em desenvolvimento")
// ou "done" (verde, "Finalizado").
// "process" é opcional — documenta o processo de desenvolvimento na página de detalhe (Problema /
// Solução / Base de Dados / Desafios Técnicos, cada um com pt/en). Só aparece se estiver definido,
// e cada parte só é mostrada se tiver conteúdo (ex: projetos sem base de dados podem omitir
// "database"). Este campo ainda não tem um formulário próprio no admin — se editares e
// guardares um projeto que já tenha "process" através do admin, o valor mantém-se, mas para
// adicionares "process" a um projeto novo, escreve-o diretamente em js/data.js depois de
// descarregares.
//
// Este ficheiro foi gerado a partir de admin.html (Gestão de Projetos, Certificações e Formação
// Contínua). Podes continuar a editá-lo à mão se preferires — a estrutura é exatamente a mesma.

const PROJECTS = [
  {
    id: "fastdrop",
    title: "FastDrop",
    description: {
      pt: "Rastreamento de Encomendas de uma loja para Administradores e Estafetas de Entrega.",
      en: "Store Orders tracking, intended for Administrators and Delivery Couriers."
    },
    longDescription: {
      pt: "A FastDrop é uma aplicação web desenvolvida em ASP.NET para o rastreamento de Encomendas de uma loja para Administradores e Estafetas de entrega.\n\nO sistema disponibiliza acessos distintos para Administradores e Estafetas, garantindo que cada utilizador acede apenas às funcionalidades adequadas ao seu perfil.\n\nOs Administradores podem criar e gerir encomendas, atualizar o seu estado, atribuir estafetas e gerir utilizadores, roles e estados de encomenda através de um BackOffice dedicado. Os Estafetas podem consultar as encomendas que lhes foram atribuídas e atualizar o estado das entregas diretamente a partir de dispositivos móveis.\n\nA aplicação inclui ainda dashboards com indicadores operacionais em tempo real, permitindo acompanhar facilmente o estado das encomendas e a atividade dos estafetas.",
      en: "FastDrop is an ASP.NET-based web application designed for tracking store orders, intended for administrators and delivery couriers.\n\nThe system provides separate access for Administrators and Couriers, ensuring that each user can only access the features relevant to their role.\n\nAdministrators can create and manage orders, update their status, assign couriers, and manage users, roles, and order statuses through a dedicated BackOffice. Couriers can view their assigned orders and update delivery statuses directly from mobile devices.\n\nThe application also includes real-time operational dashboards, providing a clear overview of order status and courier activity."
    },
    image: "assets\\images\\app-screenshots\\fastdrop\\print-fd-0.png",
    images: ["assets\\images\\app-screenshots\\fastdrop\\print-fd-0.png", "assets\\images\\app-screenshots\\fastdrop\\print-fd-1.png", "assets\\images\\app-screenshots\\fastdrop\\print-fd-2.png", "assets\\images\\app-screenshots\\fastdrop\\print-fd-3.png", "assets\\images\\app-screenshots\\fastdrop\\print-fd-4.png", "assets\\images\\app-screenshots\\fastdrop\\print-fd-5.png"],
    logo: "assets\\images\\app-logos\\fastdrop-logo.png",
    status: "done",
    tags: ["ASP.NET", "C#", "HTML", "CSS", "JS"],
    link: "#"
  },
  {
    id: "corp-expenses",
    title: "Corp Expenses",
    description: {
      pt: "Registo e aprovação de Despesas em contexto organizacional/empresarial.",
      en: "Registration and approval of Expenses in an organizational or business context."
    },
    longDescription: {
      pt: "A Corp Expenses é uma aplicação web desenvolvida com a framework Django com o propósito de registo e aprovação de Despesas em contexto organizacional/empresarial.\n\nO seu Front Office conta com uma Lista de Despesas, onde se pode consultar essencialmente cada Despesa, quanto ao seu ID, Descrição, Valor, Funcionário, Datas e Estado.\n\nCada despesa tem um Estado associado, que principalmente indica o Estado de Aprovação da mesma ou de Processamento de Reembolso.",
      en: "Corp Expenses is a web application developed with the Django framework for the purpose on registration and approval of Expenses in an organizational or business context.\n\nIts Front Office features an Expense List where you can view details for each expense, specifically its ID, Description, Amount, Associated Employee, dDates, and Status.\n\nEach Expense has an associated Status, which primarily indicates its approval Status or Reimbursement processing stage."
    },
    image: "assets\\images\\app-screenshots\\corp-expenses\\print-ce-1.png",
    images: ["assets\\images\\app-screenshots\\corp-expenses\\print-ce-1.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-2.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-3.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-4.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-5.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-6.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-7.png"],
    logo: "assets\\images\\app-logos\\corp-expenses-logo.png",
    status: "done",
    tags: ["Django", "Python", "HTML", "CSS", "SQLite3"],
    link: "#"
  },
  {
    id: "talent-bridge-recruitment-platform",
    title: "Talent Bridge - Recruitment Platform",
    description: {
      pt: "Plataforma pessoal de recrutamento com IA, que liga recrutadores, candidatos e oportunidades de emprego.",
      en: "Personal AI-powered recruitment platform connecting recruiters, candidates and job opportunities."
    },
    longDescription: {
      pt: "Talent Bridge é uma plataforma pessoal de recrutamento com IA, que liga recrutadores, candidatos e oportunidades de emprego, com três papéis (Admin, Recrutador, Candidato) que cobrem a publicação de vagas, candidaturas e entrevistas.\n\nA IA está integrada no núcleo da aplicação: um Agente avalia a compatibilidade entre candidato e vaga para os recrutadores, com uma justificação escrita, e um segundo Agente recomenda vagas adequadas aos candidatos e consegue submeter candidaturas de forma autónoma em nome deles, através de Action Calling.",
      en: "Talent Bridge is a personal AI-powered recruitment platform connecting recruiters, candidates and job opportunities, with three roles (Admin, Recruiter, Applicant) covering job postings, applications and interviews.\n\nAI is built into the app's core: an Agent scores candidate-to-job fit for recruiters with a written justification, and a second Agent recommends matching jobs to candidates and can autonomously submit applications on their behalf via Action Calling."
    },
    image: "assets\\images\\app-screenshots\\talent-bridge\\print-tb-0.png",
    images: ["assets\\images\\app-screenshots\\talent-bridge\\print-tb-0.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-1.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-2.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-3.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-4.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-5.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-6.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-7.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-8.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-9.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-10.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-11.png"],
    logo: "assets\\images\\app-logos\\talent-bridge-logo.png",
    status: "done",
    tags: ["OutSystems ODC", "AI"],
    link: "#"
  },
  {
    id: "meal-planner",
    title: "Meal Planner",
    description: {
      pt: "Planeamento de ementas semanais (almoço e jantar) com sugestões geradas por Inteligência Artificial.",
      en: "Weekly meal-planning app (lunch and dinner) with AI-generated suggestions."
    },
    longDescription: {
      pt: "Meal Planner é uma aplicação para planeamento de ementas semanais, desenvolvida na plataforma OutSystems ODC, que permite organizar as refeições de almoço e jantar de toda a semana com um único clique. Além da escolha manual entre refeições já registadas, a aplicação integra um Agente de Inteligência Artificial que sugere pratos completos, com nome e processo de preparação, tendo em conta a cultura gastronómica portuguesa e, quando indicado, um ingrediente de referência escolhido pelo utilizador, como por exemplo peixe ou frango. Cada sugestão gerada evita repetir refeições já existentes na base de dados e fica disponível para reutilização em planos futuros.",
      en: "Meal Planner is a weekly meal-planning application built on the OutSystems ODC platform, allowing a full week of lunches and dinners to be organised with a single click. Beyond manually selecting from existing meals, the app integrates an AI Agent that suggests complete dishes, including name and preparation process, informed by Portuguese cuisine and, when specified, a reference ingredient chosen by the user, such as fish or chicken. Each generated suggestion avoids repeating meals already in the database and becomes available for reuse in future plans."
    },
    image: "assets\\images\\app-screenshots\\meal-planner\\print-mp-0.png",
    images: ["assets\\images\\app-screenshots\\meal-planner\\print-mp-0.png", "assets\\images\\app-screenshots\\meal-planner\\print-mp-1.png", "assets\\images\\app-screenshots\\meal-planner\\print-mp-2.png", "assets\\images\\app-screenshots\\meal-planner\\print-mp-3.png", "assets\\images\\app-screenshots\\meal-planner\\print-mp-4.png", "assets\\images\\app-screenshots\\meal-planner\\print-mp-5.png", "assets\\images\\app-screenshots\\meal-planner\\print-mp-6.png", "assets\\images\\app-screenshots\\meal-planner\\print-mp-7.png"],
    logo: "assets\\images\\app-logos\\meal-planner-logo.png",
    status: "in-progress",
    tags: ["OutSystems ODC", "AI"],
    link: "#"
  },
  {
    id: "fleet-management-platform",
    title: "Fleet Management Platform",
    description: {
      pt: "Registo de veículos, histórico de manutenções, alertas de revisão/seguro a expirar, e integração com uma API REST externa.",
      en: "Vehicle registration, maintenance history, revision/insurance expiry alerts, and integration with an external REST API."
    },
    longDescription: {
      pt: "Sistema para gerir a frota de viaturas da empresa: registo de veículos, histórico de manutenções preventivas e corretivas, alertas automáticos de revisão e de seguro a expirar, e integração com uma API REST externa para sincronizar dados com sistemas de terceiros.",
      en: "System for managing the company's vehicle fleet: vehicle registration, preventive and corrective maintenance history, automatic revision and insurance-expiry alerts, and integration with an external REST API to sync data with third-party systems."
    },
    image: "assets/images/app-screenshots/fleet-management/fleet-management-platform-0.png",
    images: ["assets/images/app-screenshots/fleet-management/fleet-management-platform-0.png", "assets/images/app-screenshots/fleet-management/fleet-management-platform-1.png"],
    logo: "assets/images/app-logos/fleet-management-platform-logo.png",
    status: "in-progress",
    tags: ["OutSystems 11", "SQL", "REST"],
    link: "#"
  },
  {
    id: "telegram-photopicker-bot",
    title: "Telegram Photopicker Bot",
    description: {
      pt: "Chatbot do Telegram que busca numa galeria de fotografias pessoal e gera textos promocionais.",
      en: "Telegram chatbot that searches a personal photo gallery and generates promotional text."
    },
    longDescription: {
      pt: "Chatbot do Telegram que busca numa galeria de fotografias pessoal e gera textos promocionais.",
      en: "Telegram chatbot that searches a personal photo gallery and generates promotional text."
    },
    image: "assets\\images\\app-screenshots\\telegram-photopicker\\telegram-photopicker-1.png",
    images: ["assets\\images\\app-screenshots\\telegram-photopicker\\telegram-photopicker-1.png", "assets\\images\\app-screenshots\\telegram-photopicker\\telegram-photopicker-2.png"],
    logo: "assets\\images\\app-logos\\photopicker-logo.png",
    status: "in-progress",
    tags: ["Python", "Telegram Bot API"],
    link: "#"
  },
  {
    id: "secret-mission",
    title: "Secret Mission",
    description: {
      pt: "Revelação do local de encontro de um evento para um grupo de professores.",
      en: "Revelation of the meeting location of an event to a group of teachers."
    },
    longDescription: {
      pt: "A aplicação Secret Mission/Missão Secreta é um miniprojeto desenvolvido para a revelação do local de encontro de um evento para um grupo de professores. O Professores devem introduzir um código secreto para aceder à revelação do local.",
      en: "The Secret Mission/Missão Secreta app is a mini-project developed to reveal the meeting location of an event to a group of teachers. Teachers must enter a secret code to access the location reveal."
    },
    image: "assets\\images\\app-screenshots\\secret-mission\\print-sm-1.png",
    images: ["assets\\images\\app-screenshots\\secret-mission\\print-sm-1.png", "assets\\images\\app-screenshots\\secret-mission\\print-sm-2.png"],
    logo: "assets\\images\\app-logos\\secret-mission-logo.png",
    status: "done",
    tags: ["HTML", "CSS", "JS"],
    link: "#"
  },
  {
    id: "it-service-desk",
    title: "IT Service Desk",
    description: {
      pt: "Sistema de gestão de tickets com fluxos de trabalho, SLA, notificações e dashboards.",
      en: "Ticket management system with workflows, SLAs, notifications and dashboards."
    },
    longDescription: {
      pt: "Aplicação de suporte interno para registo e acompanhamento de pedidos, com atribuição automática por equipa, alertas de SLA e um dashboard com o estado de todos os tickets em tempo real.",
      en: "Internal support application for logging and tracking requests, with automatic team assignment, SLA alerts and a real-time dashboard of ticket status."
    },
    image: "",
    images: [],
    logo: "",
    status: "planned",
    tags: ["OutSystems ODC"],
    link: "#"
  },
  {
    id: "environmental-audit-manager",
    title: "Environmental Audit Manager",
    description: {
      pt: "Gestão de auditorias, não conformidades, ações e documentação num único sítio.",
      en: "Manage audits, non-conformities, actions and documentation in one place."
    },
    longDescription: {
      pt: "Aplicação para planear auditorias ambientais e de qualidade, registar não conformidades e ações corretivas associadas, e centralizar toda a documentação de suporte por auditoria.",
      en: "Application to plan environmental and quality audits, log non-conformities and their corrective actions, and centralise all supporting documentation per audit."
    },
    image: "",
    images: [],
    logo: "",
    status: "planned",
    tags: ["OutSystems ODC"],
    link: "#"
  },
  {
    id: "hr-onboarding-portal",
    title: "HR Onboarding Portal",
    description: {
      pt: "Portal de integração de novos colaboradores, com checklists e acompanhamento de tarefas.",
      en: "Onboarding portal for new hires, with checklists and task tracking."
    },
    longDescription: {
      pt: "Portal self-service para acompanhar o processo de integração de novos colaboradores, com checklists por função, notificações às equipas responsáveis e visão do progresso em tempo real.",
      en: "Self-service portal to track the onboarding process for new hires, with role-based checklists, notifications to the responsible teams and real-time progress tracking."
    },
    image: "",
    images: [],
    logo: "",
    status: "planned",
    tags: ["OutSystems Reactive"],
    link: "#"
  }
];

// Lista de certificações, mostrada na secção "Certificações" da homepage.
// "title" e "entity" não têm tradução (são nomes próprios/oficiais, iguais em PT e EN).
// "icon" escolhe um ícone de uma pequena biblioteca pré-definida (ver CERT_ICONS, mais abaixo)
// — usa uma das chaves existentes (ex: "cloud", "shield") ou pede-me para acrescentar uma nova
// se nenhuma servir.
const CERTIFICATIONS = [
  {
    title: "Associate Developer for ODC",
    entity: "OutSystems, Inc.",
    year: "2023",
    icon: "cloud"
  },
  {
    title: "Associate Reactive Developer for OutSystems",
    entity: "OutSystems, Inc.",
    year: "2023",
    icon: "monitor"
  },
  {
    title: "Microsoft Technology Associate",
    entity: "Master.D – Centros Formativos",
    year: "2021",
    icon: "key"
  },
  {
    title: "Certificado de Competências Pedagógicas (CCP)",
    entity: "Conclusão – Estudos e Formação, Lda",
    year: "2019",
    icon: "cap"
  }
];

// Lista de formações contínuas, mostrada na secção "Formação Contínua" da homepage.
// "name" tem sempre uma versão por idioma (pt / en). "institution" e "year" não são traduzidos.
const CONTINUING_EDUCATION = [
  {
    name: {
      pt: "Become an AI Developer (Guided Path)",
      en: "Become an AI Developer (Guided Path)"
    },
    institution: "OutSystems, Inc.",
    year: "2026"
  },
  {
    name: {
      pt: "Programação em Python",
      en: "Python Programming"
    },
    institution: "Instituto do Emprego e Formação Profissional, Faro",
    year: "2026"
  },
  {
    name: {
      pt: "Linguagens de Programação ASP.NET",
      en: "ASP.NET Programming Languages"
    },
    institution: "Instituto do Emprego e Formação Profissional, Leiria",
    year: "2025"
  },
  {
    name: {
      pt: "The Complete JavaScript Course: From Zero to Expert!",
      en: "The Complete JavaScript Course: From Zero to Expert!"
    },
    institution: "Udemy, Inc",
    year: "2024"
  }
];

// Biblioteca de ícones disponíveis para as certificações. Cada entrada é o conteúdo interno
// (paths/shapes) de um <svg viewBox="0 0 24 24">, no estilo "outline" usado em todo o site.
// Para acrescentar um ícone novo: define aqui uma chave nova com o path SVG, e passa a poder
// escolhê-la no campo "icon" de uma certificação (e no dropdown do admin.html — ver
// CERT_ICON_LIBRARY em js/admin.js, que tem de ficar sincronizado com este objeto).
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
    return `<div class="${cls}"><img src="${project.logo}" alt="${project.title} logo"></div>`;
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
