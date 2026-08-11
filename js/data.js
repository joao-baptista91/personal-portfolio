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

// Lista de recursos (guias/artigos) da secção "Recursos".
// Para adicionar um novo recurso, basta copiar um dos objetos abaixo e preencher os campos.
// "id" tem de ser único — é usado no URL da página de detalhe (recurso.html?id=...).
// Todos os textos de conteúdo (title, cardDescription, subtitle, intro, topics, checklist,
// footerUpdated) têm sempre uma versão por idioma (pt / en).
// "pdf" aponta para o ficheiro PDF descarregável em assets/documents/.
// "iconSvg" é o markup interno (paths) do ícone mostrado no cartão e na página de detalhe.
// "topics" é a lista das secções do guia; cada uma tem "title", "items" (lista de textos) e,
// opcionalmente, "callout" (uma dica em destaque).
const RESOURCES = [
  {
    id: "seguranca-informatica",
    iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
    tag: { pt: "Guia", en: "Guide" },
    title: {
      pt: "Boas Práticas de Segurança Informática",
      en: "IT Security Best Practices"
    },
    cardDescription: {
      pt: "Um guia rápido e prático com recomendações simples para proteger dados, equipamento e rede no dia a dia.",
      en: "A quick, practical guide with simple recommendations to protect data, equipment and the network in everyday use."
    },
    subtitle: {
      pt: "Um guia rápido e prático para o dia a dia, com recomendações simples para proteger os teus dados, o equipamento e a rede da organização.",
      en: "A quick, practical guide for everyday use, with simple recommendations to protect your data, equipment and the organization's network."
    },
    intro: {
      pt: "Muitos incidentes de segurança informática não começa com um ataque sofisticado, mas sim com um clique apressado, uma password fraca ou um computador desbloqueado. Este guia reúne recomendações simples, sem jargão técnico, para reduzir esse risco no dia a dia.",
      en: "Many IT security incidents don't start with a sophisticated attack, but they start with a rushed click, a weak password or an unlocked computer. This guide gathers simple, jargon-free recommendations to reduce that risk in everyday use."
    },
    meta: "João Baptista · Consultor TI · v1.0",
    pdf: "assets/documents/guia-seguranca-informatica.pdf",
    topics: [
      {
        title: { pt: "Palavras-passe e acessos", en: "Passwords and access" },
        items: [
          { pt: "Usa uma password diferente para cada serviço — se uma for comprometida, as outras contas ficam protegidas.", en: "Use a different password for each service — if one is compromised, the others stay protected." },
          { pt: "Prefere frases longas e fáceis de lembrar (ex: \"CafeAzul-27!Porta\") a palavras curtas e óbvias.", en: "Prefer long, memorable passphrases (e.g. \"BlueCoffee-27!Door\") over short, obvious words." },
          { pt: "Ativa a autenticação em dois fatores (2FA) sempre que disponível, especialmente no email e em aplicações de trabalho.", en: "Enable two-factor authentication (2FA) wherever available, especially for email and work applications." },
          { pt: "Nunca partilhes a tua password por email, chat ou telefone — nenhum departamento de TI legítimo a pede dessa forma.", en: "Never share your password by email, chat or phone — no legitimate IT department asks for it that way." }
        ],
        callout: {
          pt: "Dica: um gestor de passwords (ex: Bitwarden) permite usar passwords fortes e diferentes sem teres de as memorizar todas.",
          en: "Tip: a password manager (e.g. Bitwarden) lets you use strong, different passwords without having to memorize them all."
        }
      },
      {
        title: { pt: "Reconhecer phishing e engenharia social", en: "Recognizing phishing and social engineering" },
        items: [
          { pt: "Desconfia de emails com urgência excessiva (\"a tua conta será bloqueada em 24h\") — é uma tática comum para provocar reações precipitadas.", en: "Be wary of emails with excessive urgency (\"your account will be blocked in 24h\") — a common tactic to provoke hasty reactions." },
          { pt: "Verifica sempre o endereço de email do remetente, não apenas o nome apresentado.", en: "Always check the sender's actual email address, not just the display name." },
          { pt: "Antes de clicar num link, passa o cursor por cima para ver o destino real.", en: "Before clicking a link, hover over it to see the real destination." },
          { pt: "Nunca abras anexos inesperados, mesmo que pareçam vir de alguém conhecido.", en: "Never open unexpected attachments, even if they appear to come from someone you know." },
          { pt: "Em caso de dúvida, confirma o pedido por outro canal (telefone, presencialmente) antes de agir.", en: "When in doubt, confirm the request through another channel (phone, in person) before acting." }
        ]
      },
      {
        title: { pt: "Atualizações de software", en: "Software updates" },
        items: [
          { pt: "Mantém o sistema operativo, antivírus e aplicações sempre atualizados — as atualizações corrigem falhas de segurança conhecidas.", en: "Keep your operating system, antivirus and applications up to date — updates fix known security flaws." },
          { pt: "Não adies indefinidamente os pedidos de reinício para atualizar o Windows.", en: "Don't indefinitely postpone Windows restart prompts for updates." },
          { pt: "Evita instalar software de fontes não oficiais ou desconhecidas.", en: "Avoid installing software from unofficial or unknown sources." }
        ]
      },
      {
        title: { pt: "Cópias de segurança (backups)", en: "Backups" },
        items: [
          { pt: "Guarda documentos importantes em locais com backup automático (rede da empresa, cloud), não apenas no ambiente de trabalho local.", en: "Store important documents in locations with automatic backup (company network, cloud), not just the local desktop." },
          { pt: "Confirma periodicamente que consegues aceder e restaurar os teus backups — um backup nunca testado é um risco.", en: "Periodically confirm you can access and restore your backups — an untested backup is a risk." }
        ]
      },
      {
        title: { pt: "Redes Wi-Fi públicas e trabalho remoto", en: "Public Wi-Fi and remote work" },
        items: [
          { pt: "Evita aceder a sistemas sensíveis (email de trabalho, banca) em redes Wi-Fi públicas sem VPN.", en: "Avoid accessing sensitive systems (work email, banking) on public Wi-Fi networks without a VPN." },
          { pt: "Desativa a ligação automática a redes Wi-Fi desconhecidas no portátil e telemóvel.", en: "Disable automatic connection to unknown Wi-Fi networks on your laptop and phone." },
          { pt: "Em teletrabalho, mantém o router de casa com password própria e firmware atualizado.", en: "When working remotely, keep your home router with its own password and updated firmware." }
        ]
      },
      {
        title: { pt: "Cuidados físicos com o equipamento", en: "Physical care of equipment" },
        items: [
          { pt: "Bloqueia sempre o ecrã (Windows + L) ao afastar-te do posto de trabalho, mesmo por poucos minutos.", en: "Always lock your screen (Windows + L) when stepping away from your workstation, even for a few minutes." },
          { pt: "Não deixes o portátil ou dispositivos com dados da empresa visíveis dentro do carro ou em locais públicos.", en: "Don't leave laptops or devices with company data visible inside your car or in public places." },
          { pt: "Usa apenas pens USB de origem confiável — podem ser um vetor comum de malware.", en: "Only use USB drives from trusted sources — they're a common malware vector." }
        ]
      }
    ],
    checklist: [
      { pt: "Passwords diferentes por serviço, com 2FA ativo onde possível", en: "Different passwords per service, with 2FA enabled where possible" },
      { pt: "Verificar remetente e link antes de clicar", en: "Check sender and link before clicking" },
      { pt: "Sistema e antivírus atualizados", en: "System and antivirus up to date" },
      { pt: "Documentos importantes com backup automático", en: "Important documents with automatic backup" },
      { pt: "Evitar redes Wi-Fi públicas sem VPN para dados sensíveis", en: "Avoid public Wi-Fi without a VPN for sensitive data" },
      { pt: "Ecrã sempre bloqueado ao ausentar-se do posto de trabalho", en: "Screen always locked when away from your workstation" }
    ],
    footerUpdated: { pt: "Última atualização: agosto de 2026", en: "Last updated: August 2026" }
  }
];

// Gera o markup de um cartão de recurso (usado em recursos.html). Aponta sempre para
// recurso.html?id=... — uma única página de detalhe partilhada por todos os recursos,
// tal como project.html faz para os projetos.
function renderResourceCard(resource, lang) {
  return `
    <a href="recurso.html?id=${encodeURIComponent(resource.id)}" class="resource-card">
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
