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
//
// Este ficheiro foi gerado a partir de admin.html (Gestão de Projetos). Podes continuar a editá-lo
// à mão se preferires — a estrutura é exatamente a mesma.

const PROJECTS = [
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
    image: "assets\\images\\app-screenshots\\telegram-photopicker-1.png",
    images: ["assets\\images\\app-screenshots\\telegram-photopicker-1.png", "assets\\images\\app-screenshots\\telegram-photopicker-2.png"],
    logo: "images\\app-logos\\secret-mission-logo.png",
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
    id: "application-support-dashboard",
    title: "Application Support Dashboard",
    description: {
      pt: "Painel de monitorização com KPIs, incidentes, tempos de resposta e cumprimento de SLA.",
      en: "Monitoring dashboard with KPIs, incidents, response times and SLA compliance."
    },
    longDescription: {
      pt: "Dashboard de suporte aplicacional que reúne métricas de vários sistemas num só sítio: número de incidentes abertos, tempo médio de resolução e percentagem de cumprimento de SLA por equipa.",
      en: "Application support dashboard that brings metrics from several systems into one place: open incidents, average resolution time and SLA compliance rate per team."
    },
    image: "",
    images: [],
    logo: "",
    status: "planned",
    tags: ["JavaScript", "Chart.js"],
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
