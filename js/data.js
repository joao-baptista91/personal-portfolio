// Lista de projetos do portfólio.
// Para adicionar um projeto novo, basta copiar um dos objetos abaixo e preencher os campos.
// "description" tem uma versão por idioma (pt / en) — acrescenta ambas sempre que criares um projeto novo.
// "image" pode apontar para um ficheiro dentro de assets/images/ (ex: "assets/images/meu-projeto.png").
// Se "image" ficar vazio (""), é mostrado um placeholder automaticamente.

const PROJECTS = [
  {
    title: "IT Service Desk",
    description: {
      pt: "Sistema de gestão de tickets com fluxos de trabalho, SLA, notificações e dashboards.",
      en: "Ticket management system with workflows, SLAs, notifications and dashboards."
    },
    image: "",
    tags: ["OutSystems ODC"],
    link: "#"
  },
  {
    title: "Asset Management",
    description: {
      pt: "Gestão de ativos, localizações e atribuições num sistema centralizado.",
      en: "Manage assets, locations and assignments in a centralised system."
    },
    image: "",
    tags: ["OutSystems ODC"],
    link: "#"
  },
  {
    title: "Application Support Dashboard",
    description: {
      pt: "Painel de monitorização com KPIs, incidentes, tempos de resposta e cumprimento de SLA.",
      en: "Monitoring dashboard with KPIs, incidents, response times and SLA compliance."
    },
    image: "",
    tags: ["JavaScript", "Chart.js"],
    link: "#"
  },
  {
    title: "Python Log Analyzer",
    description: {
      pt: "Script em Python para analisar ficheiros de log, identificar erros e gerar relatórios.",
      en: "Python script to analyse log files, identify errors and generate summary reports."
    },
    image: "",
    tags: ["Python"],
    link: "#"
  }
];
