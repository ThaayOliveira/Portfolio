export type Project = {
  title: {
    pt: string
    en: string
  }
  description: {
    pt: string
    en: string
  }
  image: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    title: {
      pt: "Portal de Serviços",
      en: "Services Portal",
    },
    description: {
      pt: "Plataforma desenvolvida para gestão e disponibilização de serviços públicos, centralizando informações de diferentes órgãos, categorias e indicadores. Atuação no desenvolvimento Full Stack, com implementação de APIs e regras de negócio em Java, construção da interface utilizando Next.js e TypeScript e integração com PostgreSQL. A solução também conta com containerização e automação de processos de implantação utilizando Docker, Kubernetes, ArgoCD e GitHub Actions, além de recursos de monitoramento e análise de dados para acompanhamento dos serviços.",
      en: "Platform developed for the management and delivery of public services, centralizing information from different government agencies, categories and indicators. Full Stack development, including API and business rule implementation with Java, interface development using Next.js and TypeScript, and PostgreSQL integration. The solution also includes containerization and deployment automation using Docker, Kubernetes, ArgoCD and GitHub Actions, as well as monitoring and data analysis resources for service tracking.",
    },
    image: "/portal-de-servicos.png",
    technologies: [
      "Java",
      "Spring Boot",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "ArgoCD",
      "GitHub Actions",
      "Python",
      "Prometheus",
      "Grafana",
      "Zabbix",
      "Google Analytics",
      "Figma",
      "Axios",
    ],
  },

  {
    title: {
      pt: "Locadora",
      en: "Movie & Game Rental",
    },
    description: {
      pt: "Aplicação Full Stack desenvolvida para gerenciamento de uma locadora de filmes e jogos, contemplando catálogo de títulos, gerenciamento de usuários, locação, compra de produtos e carrinho de compras. O projeto utiliza Java no back-end e React com Next.js no front-end, com integração entre as camadas por meio de APIs e recursos de análise para acompanhamento do comportamento da aplicação.",
      en: "Full Stack application developed for managing a movie and game rental store, including title catalog management, user management, rentals, product purchases and shopping cart functionality. The project uses Java on the back end and React with Next.js on the front end, with API-based integration between the layers and analytics resources for monitoring application behavior.",
    },
    image: "/locadora.png",
    technologies: [
      "Java",
      "React",
      "Next.js",
      "AWS",
      "TypeScript",
      "Axios",
      "Google Analytics",
    ],
  },

  {
    title: {
      pt: "Macros - Contador de Calorias",
      en: "Macros - Calorie Counter",
    },
    description: {
      pt: "Aplicação mobile desenvolvida para auxiliar usuários no acompanhamento de alimentação e objetivos nutricionais. A solução realiza cálculos personalizados e permite o gerenciamento das informações do usuário, utilizando React Native para o desenvolvimento da aplicação e integração com serviços de persistência de dados.",
      en: "Mobile application developed to help users track their nutrition and dietary goals. The solution performs personalized calculations and allows users to manage their information, using React Native for application development and integration with data persistence services.",
    },
    image: "/macros.png",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "MySQL",
    ],
  },

  {
    title: {
      pt: "Power BI",
      en: "Power BI",
    },
    description: {
      pt: "Dashboard desenvolvido para análise e acompanhamento de indicadores de negócio, com integração de dados provenientes de bancos PostgreSQL e Oracle. Foram utilizados scripts em Python para automação e atualização dos dados, enquanto o Power BI foi utilizado na construção de indicadores, relatórios e visualizações interativas. A interface e a organização visual dos dashboards foram planejadas no Figma, priorizando clareza e facilidade de análise.",
      en: "Dashboard developed for business indicator analysis and monitoring, integrating data from PostgreSQL and Oracle databases. Python scripts were used for data automation and updates, while Power BI was used to build indicators, reports and interactive visualizations. The dashboard interface and visual organization were designed in Figma, prioritizing clarity and ease of analysis.",
    },
    image: "/power-bi.png",
    technologies: [
      "Power BI",
      "Python",
      "PostgreSQL",
      "Oracle",
      "Figma",
    ],
  },

  {
    title: {
      pt: "E-commerce SportPro",
      en: "SportPro E-commerce",
    },
    description: {
      pt: "E-commerce desenvolvido com foco em arquitetura limpa, segurança, manutenibilidade e escalabilidade. O back-end foi estruturado utilizando ASP.NET Core, com separação entre as camadas de API, aplicação, domínio e infraestrutura. A aplicação possui autenticação baseada em JWT, autorização por perfis, validações com FluentValidation, mapeamento com AutoMapper, hash seguro de senhas com BCrypt, tratamento global de exceções e logging estruturado. A persistência utiliza PostgreSQL com Entity Framework Core, enquanto o front-end foi desenvolvido com React e Next.js.",
      en: "E-commerce platform developed with a focus on clean architecture, security, maintainability and scalability. The back end was structured using ASP.NET Core, with separation between the API, application, domain and infrastructure layers. The application includes JWT-based authentication, role-based authorization, FluentValidation, AutoMapper, secure password hashing with BCrypt, global exception handling and structured logging. Data persistence uses PostgreSQL with Entity Framework Core, while the front end was developed with React and Next.js.",
    },
    image: "/e-commerce.png",
    technologies: [
      "C# / .NET",
      "ASP.NET Core",
      "Entity Framework Core",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "Docker",
      "FluentValidation",
      "AutoMapper",
      "BCrypt",
      "Figma",
    ],
  },

  {
    title: {
      pt: "Diagnóstico Infra TI",
      en: "IT Infrastructure Assessment",
    },
    description: {
      pt: "Aplicação Full Stack desenvolvida para centralizar, digitalizar e analisar informações de infraestrutura tecnológica de órgãos e instituições. A solução substitui processos manuais baseados em planilhas por uma plataforma web estruturada, permitindo importação de dados, preenchimento de formulários, persistência de informações, busca, acompanhamento do progresso e visualização de indicadores. O projeto utiliza Next.js, React, TypeScript, PostgreSQL e Prisma ORM, com processamento de arquivos Excel e containerização da aplicação utilizando Docker.",
      en: "Full Stack application developed to centralize, digitize and analyze IT infrastructure information from government agencies and institutions. The solution replaces spreadsheet-based manual processes with a structured web platform, enabling data import, form completion, data persistence, search, progress tracking and indicator visualization. The project uses Next.js, React, TypeScript, PostgreSQL and Prisma ORM, with Excel file processing and application containerization using Docker.",
    },
    image: "/diagnostico-infra-ti.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "ExcelJS",
      "Axios",
      "Docker",
      "Figma",
    ],
  },
]