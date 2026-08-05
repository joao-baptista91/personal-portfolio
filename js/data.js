// Lista de projetos do portfólio.
// Para adicionar um projeto novo, basta copiar um dos objetos abaixo e preencher os campos.
// "id" tem de ser único — é usado no URL da página de detalhe (project.html?id=...).
// "description" (curta, usada nos cartões) e "longDescription" (mais detalhada, usada na página
// de detalhe) têm sempre uma versão por idioma (pt / en).
// "image" é a imagem usada no cartão da grelha; "images" é a lista de screenshots usada na
// página de detalhe. Ambos podem apontar para ficheiros dentro de assets/images/
// (ex: "assets/images/meu-projeto.png"). Se ficarem vazios, é mostrado um placeholder automaticamente.

const PROJECTS = [
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
    tags: ["OutSystems ODC"],
    link: "#"
  },
  {
    id: "asset-management",
    title: "Asset Management",
    description: {
      pt: "Gestão de ativos, localizações e atribuições num sistema centralizado.",
      en: "Manage assets, locations and assignments in a centralised system."
    },
    longDescription: {
      pt: "Plataforma para registo do ciclo de vida de equipamentos — desde a aquisição até ao abate — com histórico de atribuições, localizações e manutenções associadas a cada ativo.",
      en: "Platform for tracking the full lifecycle of equipment — from acquisition to retirement — with a history of assignments, locations and maintenance linked to each asset."
    },
    image: "",
    images: [],
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
    tags: ["JavaScript", "Chart.js"],
    link: "#"
  },
  {
    id: "python-log-analyzer",
    title: "Python Log Analyzer",
    description: {
      pt: "Script em Python para analisar ficheiros de log, identificar erros e gerar relatórios.",
      en: "Python script to analyse log files, identify errors and generate summary reports."
    },
    longDescription: {
      pt: "Ferramenta de linha de comandos que percorre ficheiros de log, identifica padrões de erro recorrentes e gera um relatório resumo em CSV, poupando tempo na análise manual.",
      en: "Command-line tool that scans log files, identifies recurring error patterns and generates a summary CSV report, saving time on manual analysis."
    },
    image: "",
    images: [],
    tags: ["Python"],
    link: "#"
  },
  {
    id: "fleet-maintenance-tracker",
    title: "Fleet Maintenance Tracker",
    description: {
      pt: "Registo e planeamento de manutenções de frota, com alertas de revisão e histórico por viatura.",
      en: "Fleet maintenance logging and planning, with revision alerts and a per-vehicle history."
    },
    longDescription: {
      pt: "Sistema para gerir a manutenção preventiva e corretiva de uma frota de viaturas, com alertas automáticos de revisões, histórico de intervenções por viatura e relatórios de custos por período.",
      en: "System for managing preventive and corrective maintenance of a vehicle fleet, with automatic revision alerts, a per-vehicle intervention history and cost reports by period."
    },
    image: "",
    images: [],
    tags: ["C#", "SQL"],
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
    tags: ["OutSystems Reactive"],
    link: "#"
  },
  {
    id: "api-integration-hub",
    title: "API Integration Hub",
    description: {
      pt: "Camada de integração entre sistemas legados (SOAP) e serviços modernos (REST).",
      en: "Integration layer connecting legacy systems (SOAP) with modern services (REST)."
    },
    longDescription: {
      pt: "Middleware que expõe endpoints REST para consumo por aplicações modernas, traduzindo pedidos e respostas de e para serviços SOAP legados, com logging centralizado de todas as chamadas.",
      en: "Middleware exposing REST endpoints for modern applications, translating requests and responses to and from legacy SOAP services, with centralised logging of every call."
    },
    image: "",
    images: [],
    tags: ["REST", "SOAP"],
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
    tags: ["OutSystems ODC"],
    link: "#"
  }
];
