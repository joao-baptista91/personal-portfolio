// Lista de projetos do portfólio.
// Para adicionar um projeto novo, basta copiar um dos objetos abaixo e preencher os campos.
// "id" tem de ser único — é usado no URL da página de detalhe (project.html?id=...).
// "description" (curta, usada nos cartões) e "longDescription" (mais detalhada, usada na página
// de detalhe) têm sempre uma versão por idioma (pt / en). "description" é texto simples, mas
// "longDescription" é HTML (à semelhança de "process", mais abaixo): uma frase de introdução em
// <p> seguida, quando faz sentido, de uma lista <ul><li> com os pontos/funcionalidades principais.
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
// Solução / Base de Dados / Desafios Técnicos / Contributo da IA / Principal Aprendizagem, cada um
// com pt/en). Só aparece se estiver definido, e cada parte só é mostrada se tiver conteúdo (ex:
// projetos sem base de dados podem omitir "database", e "aiContribution" só faz sentido em
// projetos que usem IA de facto). O texto de cada parte é HTML (não só texto simples), para
// permitir uma frase de introdução seguida de uma lista <ul><li>. Este campo ainda não tem um
// formulário próprio no admin — se editares e guardares um projeto que já tenha "process" através
// do admin, o valor mantém-se, mas para adicionares "process" a um projeto novo, escreve-o
// diretamente em js/data.js depois de descarregares.
// "link" aponta para a aplicação publicada (ex: "https://..."); se ficar "#" (predefinição), o
// botão "Abrir Aplicação" não aparece na página de detalhe.
// "demoCredentials" é opcional — mostra uma caixa com credenciais de acesso de demonstração por
// baixo do botão "Abrir Aplicação" (útil para apps com login), com texto HTML por idioma (pt/en),
// à semelhança de "process". Só faz sentido definir quando "link" também está definido.
// "demoNote" é opcional — mostra um pequeno aviso (com destaque à esquerda) por baixo das
// credenciais (ou logo a seguir ao texto de CTA, se não houver credenciais), útil para avisar de
// limitações da app publicada, como por exemplo tempos de resposta mais lentos por estar alojada
// num nível gratuito. Texto HTML por idioma (pt/en), só faz sentido definir quando "link" também
// está definido.
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
      pt: "<p>A FastDrop é uma aplicação web desenvolvida em ASP.NET para o rastreamento de Encomendas de uma loja, destinada a Administradores e Estafetas de entrega. O sistema disponibiliza acessos distintos para cada perfil, garantindo que cada utilizador acede apenas às funcionalidades adequadas à sua função:</p><ul><li><strong>Administradores</strong>: criam e gerem encomendas, atualizam o seu estado, atribuem estafetas, e gerem utilizadores, roles e estados de encomenda através de um BackOffice dedicado.</li><li><strong>Estafetas</strong>: consultam as encomendas que lhes foram atribuídas e atualizam o estado das entregas diretamente a partir de dispositivos móveis.</li><li><strong>Dashboards</strong> com indicadores operacionais em tempo real, para acompanhar o estado das encomendas e a atividade dos estafetas.</li></ul>",
      en: "<p>FastDrop is an ASP.NET-based web application for tracking store orders, intended for Administrators and Delivery Couriers. The system provides separate access for each profile, ensuring that each user can only access the features relevant to their role:</p><ul><li><strong>Administrators</strong>: create and manage orders, update their status, assign couriers, and manage users, roles and order statuses through a dedicated BackOffice.</li><li><strong>Couriers</strong>: view their assigned orders and update delivery statuses directly from mobile devices.</li><li><strong>Dashboards</strong> with real-time operational indicators, to track order status and courier activity.</li></ul>"
    },
    image: "assets\\images\\app-screenshots\\fastdrop\\print-fd-0.png",
    images: ["assets\\images\\app-screenshots\\fastdrop\\print-fd-0.png", "assets\\images\\app-screenshots\\fastdrop\\print-fd-1.png", "assets\\images\\app-screenshots\\fastdrop\\print-fd-2.png", "assets\\images\\app-screenshots\\fastdrop\\print-fd-3.png", "assets\\images\\app-screenshots\\fastdrop\\print-fd-4.png", "assets\\images\\app-screenshots\\fastdrop\\print-fd-5.png"],
    logo: "assets\\images\\app-logos\\fastdrop-logo.png",
    status: "done",
    tags: ["ASP.NET", "C#", "HTML", "CSS", "JS"],
    link: "wake.html?to=https%3A%2F%2Fjoao-fastdrop-c9b0bff3fchfg2h2.francecentral-01.azurewebsites.net&app=FastDrop",
    demoCredentials: {
      pt: "<p>Contas de demonstração:</p><ul><li><strong>Administrador</strong>: admin_fastdrop@fastdrop.com / FD_Port_26X</li><li><strong>Estafeta</strong>: estafeta1_fastdrop@fastdrop.com / Est1_FD_26X</li></ul>",
      en: "<p>Demo accounts:</p><ul><li><strong>Administrator</strong>: admin_fastdrop@fastdrop.com / FD_Port_26X</li><li><strong>Courier</strong>: estafeta1_fastdrop@fastdrop.com / Est1_FD_26X</li></ul>"
    },
    demoNote: {
      pt: "Nota: a aplicação está alojada num nível gratuito do Azure, que \"adormece\" por inatividade. No primeiro acesso, vais ver um ecrã de espera automático até a aplicação estar pronta (pode demorar até um minuto).",
      en: "Note: the application is hosted on Azure's free tier, which \"sleeps\" after inactivity. On first access, you'll see an automatic waiting screen until the application is ready (this can take up to a minute)."
    },
    process: {
      problem: {
        pt: "<p>Antes desta aplicação, o acompanhamento de encomendas e a atribuição de estafetas era feito de forma dispersa. Era necessário um sistema que resolvesse:</p><ul><li>Falta de separação clara entre o que um Administrador e um Estafeta podem fazer.</li><li>Ausência de um registo fiável e centralizado do estado de cada encomenda.</li><li>Dificuldade em acompanhar a atividade dos estafetas em tempo real.</li></ul>",
        en: "<p>Before this application, order tracking and courier assignment were handled in a scattered way. A system was needed to solve:</p><ul><li>Lack of clear separation between what an Administrator and a Courier can do.</li><li>No reliable, centralized record of each order's status.</li><li>Difficulty tracking courier activity in real time.</li></ul>"
      },
      solution: {
        pt: "<p>A solução assenta em dois perfis de acesso distintos, com autenticação e autorização geridas ao nível da aplicação:</p><ul><li>Administradores acedem a um BackOffice completo, com gestão de utilizadores, roles e estados de encomenda.</li><li>Estafetas apenas visualizam e atualizam as encomendas que lhes foram atribuídas.</li><li>Dashboards com indicadores operacionais em tempo real.</li></ul>",
        en: "<p>The solution relies on two distinct access profiles, with authentication and authorization managed at the application level:</p><ul><li>Administrators access a full BackOffice, with user, role and order-status management.</li><li>Couriers only view and update the orders assigned to them.</li><li>Real-time operational dashboards.</li></ul>"
      },
      database: {
        pt: "<p>A base de dados relaciona Encomendas, Estados, Utilizadores e Roles através de chaves estrangeiras, o que impõe integridade referencial:</p><ul><li>Uma encomenda não pode existir sem um estado válido.</li><li>Uma encomenda não pode ser atribuída a um utilizador sem o role de Estafeta.</li><li>Este desenho evita inconsistências, como por exemplo uma encomenda \"Entregue\" sem estafeta associado.</li></ul>",
        en: "<p>The database relates Orders, Statuses, Users and Roles through foreign keys, enforcing referential integrity:</p><ul><li>An order cannot exist without a valid status.</li><li>An order cannot be assigned to a user without the Courier role.</li><li>This design prevents inconsistencies, such as a \"Delivered\" order with no courier attached.</li></ul>"
      },
      challenges: {
        pt: "<p>O maior desafio esteve em validar as regras de negócio associadas ao fluxo de encomendas:</p><ul><li>Impedir transições de estado inválidas (uma encomenda não pode passar de \"Entregue\" para \"Pendente\").</li><li>Garantir que um Estafeta autenticado só acede às encomendas que lhe pertencem, e não a todo o sistema.</li><li>Validar as permissões do lado do servidor, e não apenas na interface apresentada ao utilizador.</li></ul>",
        en: "<p>The main challenge was validating the business rules behind the order flow:</p><ul><li>Preventing invalid status transitions (an order cannot move from \"Delivered\" back to \"Pending\").</li><li>Ensuring an authenticated Courier only accesses their own assigned orders, not the whole system.</li><li>Validating permissions on the server side, not just in the interface shown to the user.</li></ul>"
      },
      learning: {
        pt: "<p>A separação de perfis de acesso só é fiável quando validada em todas as camadas da aplicação, e não apenas na interface apresentada ao utilizador. Esta foi a principal lição retirada do desenvolvimento da FastDrop, e passou a ser um cuidado que aplico em qualquer sistema com múltiplos perfis de utilizador.</p>",
        en: "<p>Access-profile separation is only reliable when validated across every layer of the application, not just in the interface shown to the user. This was the main lesson from building FastDrop, and it became a concern I now apply to any system with multiple user profiles.</p>"
      }
    }
  },
  {
    id: "corp-expenses",
    title: "Corp Expenses",
    description: {
      pt: "Registo e aprovação de Despesas em contexto organizacional/empresarial.",
      en: "Registration and approval of Expenses in an organizational or business context."
    },
    longDescription: {
      pt: "<p>A Corp Expenses é uma aplicação web desenvolvida com a framework Django para o registo e aprovação de Despesas em contexto organizacional/empresarial.</p><ul><li>O Front Office conta com uma Lista de Despesas, onde se consulta cada despesa quanto a ID, Descrição, Valor, Funcionário, Datas e Estado.</li><li>Cada despesa tem um Estado associado, que indica principalmente a fase de Aprovação ou de Processamento de Reembolso.</li></ul>",
      en: "<p>Corp Expenses is a web application developed with the Django framework for the registration and approval of Expenses in an organizational or business context.</p><ul><li>Its Front Office features an Expense List, where each expense can be viewed by ID, Description, Amount, Associated Employee, Dates and Status.</li><li>Each expense has an associated Status, which primarily indicates its approval stage or reimbursement processing stage.</li></ul>"
    },
    image: "assets\\images\\app-screenshots\\corp-expenses\\print-ce-1.png",
    images: ["assets\\images\\app-screenshots\\corp-expenses\\print-ce-1.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-2.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-3.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-4.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-5.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-6.png", "assets\\images\\app-screenshots\\corp-expenses\\print-ce-7.png"],
    logo: "assets\\images\\app-logos\\corp-expenses-logo.png",
    status: "done",
    tags: ["Django", "Python", "HTML", "CSS", "SQLite3"],
    link: "wake.html?to=https%3A%2F%2Fjoao-corpexpenses-epbxeqdufrezctgd.francecentral-01.azurewebsites.net&app=Corp%20Expenses",
    demoCredentials: {
      pt: "<p>Conta de demonstração:</p><ul><li><strong>Administrador</strong>: admin_corpexpenses / CorpExp_26#</li></ul>",
      en: "<p>Demo account:</p><ul><li><strong>Administrator</strong>: admin_corpexpenses / CorpExp_26#</li></ul>"
    },
    demoNote: {
      pt: "Nota: a aplicação está alojada num nível gratuito do Azure, que \"adormece\" por inatividade. No primeiro acesso, vais ver um ecrã de espera automático até a aplicação estar pronta (pode demorar até um minuto).",
      en: "Note: the application is hosted on Azure's free tier, which \"sleeps\" after inactivity. On first access, you'll see an automatic waiting screen until the application is ready (this can take up to a minute)."
    },
    process: {
      problem: {
        pt: "<p>O registo e a aprovação de despesas em contexto empresarial exigem um fluxo controlado. Era necessário resolver:</p><ul><li>Falta de visibilidade sobre quem submeteu, quem aprovou e em que fase se encontra cada despesa.</li><li>Acompanhamento manual e pouco rastreável do processo de reembolso.</li></ul>",
        en: "<p>Registering and approving expenses in a business context requires a controlled flow. It was necessary to solve:</p><ul><li>Lack of visibility into who submitted, who approved, and what stage each expense is at.</li><li>Manual, hard-to-trace tracking of the reimbursement process.</li></ul>"
      },
      solution: {
        pt: "<p>A Corp Expenses estrutura cada despesa em torno de um Estado que reflete a sua fase no processo:</p><ul><li>Cada despesa fica sempre associada a um Funcionário, um Valor e uma Descrição.</li><li>Os estados cobrem submissão, aprovação e processamento de reembolso.</li><li>O Front Office centraliza o histórico e a situação de cada despesa.</li></ul>",
        en: "<p>Corp Expenses structures each expense around a Status that reflects its stage in the process:</p><ul><li>Every expense is always linked to an Employee, an Amount and a Description.</li><li>Statuses cover submission, approval and reimbursement processing.</li><li>The Front Office centralizes the history and current situation of each expense.</li></ul>"
      },
      database: {
        pt: "<p>O modelo de dados, desenvolvido com o ORM do Django, relaciona Despesas, Funcionários e Estados:</p><ul><li>Impõe regras de integridade ao nível da base de dados, como por exemplo impedir uma despesa sem Funcionário associado.</li><li>Reduz a possibilidade de dados inconsistentes chegarem à camada de aprovação.</li></ul>",
        en: "<p>The data model, built with Django's ORM, relates Expenses, Employees and Statuses:</p><ul><li>Enforces integrity rules at the database level, such as preventing an expense from existing without an associated Employee.</li><li>Reduces the chance of inconsistent data reaching the approval stage.</li></ul>"
      },
      challenges: {
        pt: "<p>O principal desafio foi definir as regras de negócio que controlam o fluxo de aprovação:</p><ul><li>Impedir que uma despesa avance diretamente de \"Submetida\" para \"Reembolsada\" sem passar por aprovação.</li><li>Validar os dados introduzidos (como por exemplo valores negativos ou datas incoerentes) antes de os aceitar.</li><li>Manter a fiabilidade da informação usada no processo de aprovação.</li></ul>",
        en: "<p>The main challenge was defining the business rules that control the approval flow:</p><ul><li>Preventing an expense from moving directly from \"Submitted\" to \"Reimbursed\" without going through approval.</li><li>Validating the data entered (such as negative amounts or inconsistent dates) before accepting it.</li><li>Keeping the information used in the approval process reliable.</li></ul>"
      },
      learning: {
        pt: "<p>Um fluxo de aprovação só é confiável se as regras de negócio impedirem, na própria base de dados e na aplicação, que um registo avance para um estado que não devia alcançar. Ficou claro que validar dados à entrada é tão importante como desenhar bem o fluxo em si.</p>",
        en: "<p>An approval flow is only trustworthy if the business rules prevent, both in the database and in the application, a record from reaching a status it should not. It became clear that validating data on entry is just as important as designing the flow itself.</p>"
      }
    }
  },
  {
    id: "talent-bridge-recruitment-platform",
    title: "Talent Bridge - Recruitment Platform",
    description: {
      pt: "Plataforma pessoal de recrutamento com IA, que liga recrutadores, candidatos e oportunidades de emprego.",
      en: "Personal AI-powered recruitment platform connecting recruiters, candidates and job opportunities."
    },
    longDescription: {
      pt: "<p>Talent Bridge é uma plataforma pessoal de recrutamento com IA, que liga recrutadores, candidatos e oportunidades de emprego, com três papéis (Admin, Recrutador, Candidato) que cobrem a publicação de vagas, candidaturas e entrevistas.</p><ul><li>Um Agente avalia a compatibilidade entre candidato e vaga para os recrutadores, com uma justificação escrita.</li><li>Um segundo Agente recomenda vagas adequadas aos candidatos e consegue submeter candidaturas de forma autónoma em nome deles, através de Action Calling.</li></ul>",
      en: "<p>Talent Bridge is a personal AI-powered recruitment platform connecting recruiters, candidates and job opportunities, with three roles (Admin, Recruiter, Applicant) covering job postings, applications and interviews.</p><ul><li>An Agent scores candidate-to-job fit for recruiters, with a written justification.</li><li>A second Agent recommends matching jobs to candidates and can autonomously submit applications on their behalf via Action Calling.</li></ul>"
    },
    image: "assets\\images\\app-screenshots\\talent-bridge\\print-tb-0.png",
    images: ["assets\\images\\app-screenshots\\talent-bridge\\print-tb-0.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-1.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-2.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-3.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-4.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-5.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-6.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-7.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-8.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-9.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-10.png", "assets\\images\\app-screenshots\\talent-bridge\\print-tb-11.png"],
    logo: "assets\\images\\app-logos\\talent-bridge-logo.png",
    status: "done",
    tags: ["OutSystems ODC", "AI"],
    link: "https://personal-g9f0petr-dev.outsystems.app/TalentBridge/Login",
    demoNote: {
      pt: "Nota: o primeiro pedido a cada um dos Agentes de IA pode demorar mais tempo a responder (o timeout foi aumentado para acomodar esta situação).",
      en: "Note: the first request to each of the AI Agents may take longer to respond (the timeout was increased to accommodate this)."
    },
    process: {
      problem: {
        pt: "<p>Associar candidatos a vagas de forma manual é moroso e pouco consistente. Era necessário um sistema que resolvesse:</p><ul><li>Recrutadores a analisarem currículos individualmente, sem apoio à decisão.</li><li>Candidatos a perderem oportunidades compatíveis por não terem conhecimento delas.</li><li>A necessidade de respeitar as fronteiras de acesso entre Administradores, Recrutadores e Candidatos.</li></ul>",
        en: "<p>Manually matching candidates to jobs is slow and inconsistent. A system was needed to solve:</p><ul><li>Recruiters reviewing résumés individually, with no support for the decision.</li><li>Candidates missing suitable opportunities they never became aware of.</li><li>The need to respect the access boundaries between Admins, Recruiters and Candidates.</li></ul>"
      },
      solution: {
        pt: "<p>A Talent Bridge define três perfis de acesso (Admin, Recrutador, Candidato), cada um limitado às ações do seu papel:</p><ul><li>Um Agente de IA avalia a compatibilidade entre candidato e vaga para os recrutadores, devolvendo sempre uma justificação escrita da pontuação.</li><li>Um segundo Agente recomenda vagas aos candidatos e pode submeter candidaturas de forma autónoma em seu nome, através de Action Calling.</li></ul>",
        en: "<p>Talent Bridge defines three access profiles (Admin, Recruiter, Candidate), each limited to the actions of their role:</p><ul><li>An AI Agent scores candidate-to-job fit for recruiters, always returning a written justification for the score.</li><li>A second Agent recommends jobs to candidates and can autonomously submit applications on their behalf via Action Calling.</li></ul>"
      },
      database: {
        pt: "<p>O modelo relaciona Vagas, Candidaturas, Utilizadores e Roles:</p><ul><li>Uma candidatura não pode existir sem uma Vaga e um Candidato válidos.</li><li>As avaliações geradas pelos Agentes (pontuação e justificação) ficam associadas à respetiva candidatura.</li><li>Mantém-se um registo rastreável de cada decisão, humana ou automatizada.</li></ul>",
        en: "<p>The model relates Jobs, Applications, Users and Roles:</p><ul><li>An application cannot exist without a valid Job and Candidate.</li><li>The evaluations generated by the Agents (score and justification) are linked to the corresponding application.</li><li>A traceable record is kept of every decision, human or automated.</li></ul>"
      },
      challenges: {
        pt: "<p>O maior desafio foi definir os limites de atuação do Agente que submete candidaturas de forma autónoma:</p><ul><li>Validar regras de negócio antes de executar a ação, como a vaga estar ainda aberta e a candidatura não ser duplicada.</li><li>Não confiar apenas na recomendação do Agente, mas sim em validação explícita a cada submissão.</li><li>Manter uma justificação escrita para cada decisão automatizada, para dar transparência ao recrutador e permitir auditar o comportamento da IA.</li></ul>",
        en: "<p>The main challenge was defining the boundaries for the Agent that submits applications autonomously:</p><ul><li>Validating business rules before executing the action, such as the job still being open and the application not being a duplicate.</li><li>Not simply trusting the Agent's recommendation, but requiring explicit validation on every submission.</li><li>Keeping a written justification for every automated decision, to give recruiters transparency and allow the AI's behaviour to be audited.</li></ul>"
      },
      aiContribution: {
        pt: "<p>A IA está integrada em dois pontos concretos da aplicação, cada um com uma responsabilidade distinta:</p><ul><li>Um Agente avalia a compatibilidade entre candidato e vaga, devolvendo sempre uma pontuação com justificação escrita, para apoiar (e não substituir) a decisão do recrutador.</li><li>Um segundo Agente recomenda vagas aos candidatos e pode submeter candidaturas em seu nome, através de Action Calling, mas apenas depois de as regras de negócio confirmarem que a ação é válida.</li></ul><p>A lógica de negócio (elegibilidade, duplicação, estado da vaga) mantém-se determinística; a IA entra apenas onde há avaliação ou linguagem a interpretar.</p>",
        en: "<p>AI is built into two concrete points of the application, each with a distinct responsibility:</p><ul><li>An Agent scores candidate-to-job fit, always returning a score with a written justification, to support (not replace) the recruiter's decision.</li><li>A second Agent recommends jobs to candidates and can submit applications on their behalf via Action Calling, but only after the business rules confirm the action is valid.</li></ul><p>The business logic (eligibility, duplication, job status) stays deterministic; AI only steps in where there is evaluation or language to interpret.</p>"
      },
      learning: {
        pt: "<p>Dar autonomia a um Agente de IA só é seguro quando as regras de negócio continuam a ser aplicadas de forma determinística antes de qualquer ação ser executada. A IA pode recomendar e agir em nome do utilizador, mas as garantias de integridade do processo têm de vir sempre do código, não do modelo.</p>",
        en: "<p>Giving autonomy to an AI Agent is only safe when the business rules are still enforced deterministically before any action is executed. AI can recommend and act on the user's behalf, but the process's integrity guarantees always have to come from the code, not from the model.</p>"
      }
    }
  },
  {
    id: "meal-planner",
    title: "Meal Planner",
    description: {
      pt: "Planeamento de ementas semanais (almoço e jantar) com sugestões geradas por Inteligência Artificial.",
      en: "Weekly meal-planning app (lunch and dinner) with AI-generated suggestions."
    },
    longDescription: {
      pt: "<p>Meal Planner é uma aplicação para planeamento de ementas semanais, desenvolvida na plataforma OutSystems ODC, que permite organizar as refeições de almoço e jantar de toda a semana com um único clique.</p><ul><li>Escolha manual entre refeições já registadas na base de dados.</li><li>Um Agente de Inteligência Artificial sugere pratos completos, com nome e processo de preparação, tendo em conta a cultura gastronómica portuguesa.</li><li>Quando indicado, o Agente considera um ingrediente de referência escolhido pelo utilizador, como por exemplo peixe ou frango.</li><li>Cada sugestão gerada evita repetir refeições já existentes na base de dados e fica disponível para reutilização em planos futuros.</li></ul>",
      en: "<p>Meal Planner is a weekly meal-planning application built on the OutSystems ODC platform, allowing a full week of lunches and dinners to be organised with a single click.</p><ul><li>Manual selection from meals already registered in the database.</li><li>An AI Agent suggests complete dishes, including name and preparation process, informed by Portuguese cuisine.</li><li>When specified, the Agent takes into account a reference ingredient chosen by the user, such as fish or chicken.</li><li>Each generated suggestion avoids repeating meals already in the database and becomes available for reuse in future plans.</li></ul>"
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
      pt: "<p>Sistema para gerir a frota de viaturas da empresa.</p><ul><li>Registo de veículos e histórico de manutenções preventivas e corretivas.</li><li>Alertas automáticos de revisão e de seguro a expirar.</li><li>Integração com uma API REST externa, para sincronizar dados com sistemas de terceiros.</li></ul>",
      en: "<p>System for managing the company's vehicle fleet.</p><ul><li>Vehicle registration and preventive and corrective maintenance history.</li><li>Automatic revision and insurance-expiry alerts.</li><li>Integration with an external REST API, to sync data with third-party systems.</li></ul>"
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
      pt: "<p>Chatbot do Telegram que combina pesquisa numa galeria de fotografias pessoal com geração automática de texto.</p><ul><li>Pesquisa fotografias na galeria pessoal a partir de critérios indicados pelo utilizador.</li><li>Gera automaticamente textos promocionais associados às fotografias selecionadas.</li></ul>",
      en: "<p>Telegram chatbot combining search over a personal photo gallery with automatic text generation.</p><ul><li>Searches photos in the personal gallery based on criteria provided by the user.</li><li>Automatically generates promotional text associated with the selected photos.</li></ul>"
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
      pt: "<p>A aplicação Secret Mission/Missão Secreta é um miniprojeto desenvolvido para a revelação do local de encontro de um evento a um grupo de professores.</p><ul><li>O acesso à revelação do local depende da introdução de um código secreto, partilhado previamente apenas com os participantes.</li><li>A validação é feita do lado do cliente, uma opção adequada à escala e ao público-alvo deste miniprojeto.</li><li>O código não fica escrito em texto simples no código-fonte: é comparado através de um hash SHA-256, gerado com a Web Crypto API do browser.</li></ul>",
      en: "<p>The Secret Mission/Missão Secreta app is a mini-project developed to reveal the meeting location of an event to a group of teachers.</p><ul><li>Access to the location reveal depends on entering a secret code, shared beforehand only with participants.</li><li>Validation happens client-side, a choice appropriate to the scale and target audience of this mini-project.</li><li>The code is never written in plain text in the source: it's compared via a SHA-256 hash generated with the browser's Web Crypto API.</li></ul>"
    },
    image: "assets\\images\\app-screenshots\\secret-mission\\print-sm-1.png",
    images: ["assets\\images\\app-screenshots\\secret-mission\\print-sm-1.png", "assets\\images\\app-screenshots\\secret-mission\\print-sm-2.png", "assets\\images\\app-screenshots\\secret-mission\\print-sm-3.png"],
    logo: "assets\\images\\app-logos\\secret-mission-logo.png",
    status: "done",
    tags: ["HTML", "CSS", "JS"],
    link: "https://joao-baptista91.github.io/missao-secreta/",
    process: {
      problem: {
        pt: "<p>Era necessário revelar o local de um evento a um grupo restrito de professores, sem:</p><ul><li>Expor a localização publicamente antes da data prevista.</li><li>Depender de comunicação manual individual a cada participante.</li></ul>",
        en: "<p>The meeting location for an event needed to be revealed to a limited group of teachers, without:</p><ul><li>Exposing the location publicly before the planned date.</li><li>Relying on manual, one-by-one communication with each participant.</li></ul>"
      },
      solution: {
        pt: "<p>A solução que implementei foi uma aplicação de página única, com acesso condicionado:</p><ul><li>O acesso à revelação do local depende da introdução de um código secreto, partilhado previamente apenas com os participantes.</li><li>O conteúdo com a localização só é apresentado depois de validado o código correto.</li></ul>",
        en: "<p>The solution I implemented was a single-page application with conditional access:</p><ul><li>Access to the location reveal depends on entering a secret code, shared beforehand only with participants.</li><li>The location content is only displayed once the correct code has been validated.</li></ul>"
      },
      challenges: {
        pt: "<p>Por se tratar de validação feita do lado do cliente, em JavaScript:</p><ul><li>Numa primeira versão, o código secreto estava escrito em texto simples no código-fonte, visível a quem inspecionasse a página.</li><li>Corrigi esta situação ao passar a comparar um hash SHA-256 do código introduzido (gerado com a Web Crypto API do browser), em vez do valor em claro.</li><li>Ainda assim, por se tratar de um código de 4 dígitos validado no cliente, um utilizador com conhecimentos técnicos poderia testar as 10.000 combinações possíveis, o que não equivale a uma validação do lado do servidor.</li><li>Considero que foi uma opção consciente, adequada à escala e ao público-alvo deste miniprojeto.</li></ul>",
        en: "<p>Since validation happens client-side, in JavaScript:</p><ul><li>In an early version, the secret code was written in plain text in the source, visible to anyone inspecting the page.</li><li>I fixed this by comparing a SHA-256 hash of the entered code (generated with the browser's Web Crypto API) instead of the raw value.</li><li>Even so, since it's a 4-digit code validated client-side, a technically capable user could still test all 10,000 possible combinations, which is not equivalent to server-side validation.</li><li>I consider this a deliberate choice, appropriate to the scale and target audience of this mini-project.</li></ul>"
      },
      learning: {
        pt: "<p>Na minha opinião, nem toda a aplicação precisa do mesmo nível de segurança: o que importa é escolher a solução adequada à escala e ao risco real do problema, sendo transparente sobre as suas limitações, em vez de aplicar sempre a abordagem mais robusta por rotina. Considero ainda que, mesmo dentro de uma abordagem simples, vale a pena eliminar as fragilidades mais óbvias e mais baratas de corrigir (como deixar de expor o código em texto simples), sem transformar isso num projeto de segurança que a escala do miniprojeto não justifica.</p>",
        en: "<p>In my opinion, not every application needs the same level of security: what matters is choosing a solution suited to the scale and real risk of the problem, being transparent about its limitations, rather than always defaulting to the most robust approach out of habit. I'd also add that, even within a simple approach, it's worth eliminating the most obvious and cheapest-to-fix weaknesses (such as no longer exposing the code in plain text), without turning it into a security project the project's scale doesn't justify.</p>"
      }
    }
  },
  {
    id: "it-service-desk",
    title: "IT Service Desk",
    description: {
      pt: "Sistema de gestão de tickets com fluxos de trabalho, SLA, notificações e dashboards.",
      en: "Ticket management system with workflows, SLAs, notifications and dashboards."
    },
    longDescription: {
      pt: "<p>Aplicação de suporte interno para registo e acompanhamento de pedidos.</p><ul><li>Atribuição automática de pedidos por equipa.</li><li>Alertas de SLA.</li><li>Dashboard com o estado de todos os tickets em tempo real.</li></ul>",
      en: "<p>Internal support application for logging and tracking requests.</p><ul><li>Automatic request assignment by team.</li><li>SLA alerts.</li><li>Real-time dashboard of ticket status.</li></ul>"
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
      pt: "<p>Aplicação para planear auditorias ambientais e de qualidade.</p><ul><li>Registo de não conformidades e das ações corretivas associadas.</li><li>Centralização de toda a documentação de suporte por auditoria.</li></ul>",
      en: "<p>Application to plan environmental and quality audits.</p><ul><li>Logging of non-conformities and their associated corrective actions.</li><li>Centralisation of all supporting documentation per audit.</li></ul>"
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
      pt: "<p>Portal self-service para acompanhar o processo de integração de novos colaboradores.</p><ul><li>Checklists por função.</li><li>Notificações às equipas responsáveis.</li><li>Visão do progresso em tempo real.</li></ul>",
      en: "<p>Self-service portal to track the onboarding process for new hires.</p><ul><li>Role-based checklists.</li><li>Notifications to the responsible teams.</li><li>Real-time progress tracking.</li></ul>"
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

// Lista de recursos (guias/artigos) da secção "Recursos".
// Para adicionar um novo recurso, basta copiar um dos objetos abaixo e preencher os campos.
// "id" tem de ser único — é usado no URL da página de detalhe (resource.html?id=...).
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
      pt: "O presente guia reúne recomendações simples e sem jargão técnico para reduzir o risco de incidentes de segurança informática no dia a dia. Muitos destes incidentes não têm origem num ataque sofisticado, mas sim num clique apressado, numa password fraca ou num computador desbloqueado.",
      en: "This guide gathers simple, jargon-free recommendations to reduce the risk of IT security incidents in everyday use. Many of these incidents don't originate from a sophisticated attack, but rather from a rushed click, a weak password or an unlocked computer."
    },
    meta: "João Baptista · Consultor TI · v1.0",
    pdf: "assets/documents/guia-seguranca-informatica.pdf",
    topics: [
      {
        title: { pt: "Palavras-passe e acessos", en: "Passwords and access" },
        items: [
          { pt: "Usa uma password diferente para cada serviço, para que, caso uma seja comprometida, as restantes contas se mantenham protegidas.", en: "Use a different password for each service, so that if one is compromised, the others remain protected." },
          { pt: "Prefere frases longas e fáceis de lembrar (ex: \"CafeAzul-27!Porta\") a palavras curtas e óbvias.", en: "Prefer long, memorable passphrases (e.g. \"BlueCoffee-27!Door\") over short, obvious words." },
          { pt: "Ativa a autenticação em dois fatores (2FA) sempre que disponível, especialmente no email e em aplicações de trabalho.", en: "Enable two-factor authentication (2FA) wherever available, especially for email and work applications." },
          { pt: "Nunca partilhes a tua password por email, chat ou telefone: nenhum departamento de TI legítimo a pede dessa forma.", en: "Never share your password by email, chat or phone: no legitimate IT department asks for it that way." }
        ],
        callout: {
          pt: "Dica: um gestor de passwords (como por exemplo o Bitwarden) permite usar passwords fortes e diferentes, sem que seja necessário memorizá-las todas.",
          en: "Tip: a password manager (such as Bitwarden) lets you use strong, different passwords, without having to memorize all of them."
        }
      },
      {
        title: { pt: "Reconhecer phishing e engenharia social", en: "Recognizing phishing and social engineering" },
        items: [
          { pt: "Desconfia de emails com urgência excessiva (como por exemplo \"a tua conta será bloqueada em 24h\"): esta é uma tática comum para provocar reações precipitadas.", en: "Be wary of emails with excessive urgency (such as \"your account will be blocked in 24h\"): this is a common tactic to provoke hasty reactions." },
          { pt: "Verifica sempre o endereço de email do remetente, não apenas o nome apresentado.", en: "Always check the sender's actual email address, not just the display name." },
          { pt: "Antes de clicar num link, passa o cursor por cima para ver o destino real.", en: "Before clicking a link, hover over it to see the real destination." },
          { pt: "Nunca abras anexos inesperados, mesmo que pareçam vir de alguém conhecido.", en: "Never open unexpected attachments, even if they appear to come from someone you know." },
          { pt: "Em caso de dúvida, confirma o pedido por outro canal (telefone, presencialmente) antes de agir.", en: "When in doubt, confirm the request through another channel (phone, in person) before acting." }
        ]
      },
      {
        title: { pt: "Atualizações de software", en: "Software updates" },
        items: [
          { pt: "Mantém o sistema operativo, o antivírus e as aplicações sempre atualizados, uma vez que as atualizações corrigem falhas de segurança conhecidas.", en: "Keep your operating system, antivirus and applications up to date, since updates fix known security flaws." },
          { pt: "Não adies indefinidamente os pedidos de reinício para atualizar o Windows.", en: "Don't indefinitely postpone Windows restart prompts for updates." },
          { pt: "Evita instalar software de fontes não oficiais ou desconhecidas.", en: "Avoid installing software from unofficial or unknown sources." }
        ]
      },
      {
        title: { pt: "Cópias de segurança (backups)", en: "Backups" },
        items: [
          { pt: "Guarda documentos importantes em locais com backup automático (rede da empresa, cloud), não apenas no ambiente de trabalho local.", en: "Store important documents in locations with automatic backup (company network, cloud), not just the local desktop." },
          { pt: "Confirma periodicamente que consegues aceder e restaurar os teus backups, pois um backup nunca testado constitui um risco.", en: "Periodically confirm you can access and restore your backups, since an untested backup constitutes a risk." }
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
          { pt: "Bloqueia sempre o ecrã (\"Windows + L\") ao afastares-te do posto de trabalho, mesmo que seja por poucos minutos.", en: "Always lock your screen (\"Windows + L\") when stepping away from your workstation, even if only for a few minutes." },
          { pt: "Não deixes o portátil ou dispositivos com dados da empresa visíveis dentro do carro ou em locais públicos.", en: "Don't leave laptops or devices with company data visible inside your car or in public places." },
          { pt: "Usa apenas pens USB de origem confiável, pois podem constituir um vetor comum de malware.", en: "Only use USB drives from trusted sources, since they can constitute a common malware vector." }
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

// Gera o markup de um cartão de recurso (usado em resources.html). Aponta sempre para
// resource.html?id=... — uma única página de detalhe partilhada por todos os recursos,
// tal como project.html faz para os projetos.
function renderResourceCard(resource, lang) {
  return `
    <a href="resource.html?id=${encodeURIComponent(resource.id)}" class="resource-card">
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
