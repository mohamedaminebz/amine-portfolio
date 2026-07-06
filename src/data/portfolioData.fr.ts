import {
  PersonalInfo,
  TimelineItem,
  Project,
  Skill,
  Education,
  Certification,
  Interest,
  TechStack,
  ProfessionalProject,
  InternshipProject,
  AcademicProject,
} from "../types/portfolio";

// Personal Information - French
export const personalInfo: PersonalInfo = {
  name: "Mohamed Amine Bouzidi",
  title: "Ingénieur Full-Stack",
  email: "bouzidi.amine0301@gmail.com",
  phone: "+21655209898",
  location: "Ariana, Tunisie",
  linkedIn: "mohamed-amine-bouzidi",
  github: "MedamineBouzidi",
  description:
    "Ingénieur Full-Stack passionné, spécialisé en React, Node.js et React Native. Fort d'une expérience de plus d'un an dans la création d'applications web et mobiles scalables avec une architecture microservices. Je m'épanouis dans la transformation de problèmes complexes en solutions élégantes et dans l'élargissement continuel de mes compétences techniques.",
};

// Career Timeline - French
export const timelineItems: TimelineItem[] = [
  {
    id: "work-sbg",
    date: "Août 2025 - Avr 2026",
    title: "Ingénieur Full-Stack",
    company: "SBG TECHELECTRO",
    location: "Tunisie",
    description:
      "Architecture microservices, migration de bases de données, développement d'APIs robustes, microservice de reporting IoT, migration vers ClickHouse",
    technologies: [
      "MySQL",
      "Redis",
      "RabbitMQ",
      "NodeJS",
      "ReactJS",
      "ClickHouse",
    ],
    type: "work",
  },
  {
    id: "work-gofield-2",
    date: "Déc 2024 - Mars 2025",
    title: "Ingénieur Full-Stack Web & Mobile",
    company: "GOFIELD",
    location: "Tunisie",
    description:
      "Amélioration des interfaces mobiles, intégration de systèmes tiers (CRM, Odoo), développement du module Défis",
    technologies: ["ReactJS", "NodeJS", "React Native", "MongoDB"],
    type: "work",
  },
  {
    id: "internship-pfe",
    date: "Fév 2024 - Août 2024",
    title: "Développeur Full-Stack - Stage PFE",
    company: "GOFIELD",
    location: "Tunisie",
    description:
      "Système multi-tenant de gestion des performances/récompenses, pipelines CI/CD",
    technologies: ["React.js", "Node.js", "React Native", "Docker", "Jenkins"],
    type: "internship",
  },
  {
    id: "internship-visualdev",
    date: "Juil 2023 - Août 2023",
    title: "Développeur Mobile - Stage d'été",
    company: "VisualDev",
    location: "Tunisie",
    description:
      "Application de suivi financier pour la gestion des finances personnelles",
    technologies: ["Flutter", "Firebase"],
    type: "internship",
  },
  {
    id: "internship-easy",
    date: "Mars 2021 - Juin 2021",
    title: "Développeur Web & Reporting - Stage PFE",
    company: "EASY Technology",
    location: "Tunisie",
    description:
      "EASY PLANT - application de gestion de pépinière agricole, tableaux de bord Power BI",
    technologies: [
      "ASP.NET MVC",
      "C#",
      "Entity Framework",
      "SQL Server",
      "Power BI",
    ],
    type: "internship",
  },
  {
    id: "internship-scc",
    date: "Fév 2021 - Mars 2021",
    title: "Développeur Web - Stagiaire",
    company: "SCC Global",
    location: "Tunisie",
    description: "Application web de gestion de matériel informatique",
    technologies: ["Angular", "Spring Boot"],
    type: "internship",
  },
  {
    id: "internship-devnet",
    date: "Jan 2020 - Fév 2020",
    title: "Développeur Web - Stagiaire",
    company: "DEVNET",
    location: "Tunisie",
    description:
      "Premier stage : portail web dynamique avec October CMS, gestion des services du secteur public, contrôle d'accès Admin/Agent",
    technologies: ["October CMS", "PHP", "MySQL", "UML"],
    type: "internship",
  },
];

// Education Timeline - French
export const educationItems: Education[] = [
  {
    degree: "Cycle Ingénieur en Sciences Appliquées et Technologie",
    institution: "Institut Supérieur des Arts Multimédia de Manouba",
    year: "2024",
    description: "Spécialité : Génie Logiciel",
  },
  {
    degree: "Licence Appliquée en Technologie de l'Informatique",
    institution: "Institut Supérieur des Études Technologiques de Béja",
    year: "2021",
    description: "Spécialité : Développement des Systèmes d'Information",
  },
  {
    degree: "Baccalauréat - Section Mathématiques",
    institution: "Lycée ETATHAMEN 2",
    year: "2018",
  },
];

// Helper to create tech stack items
const createTech = (
  name: string,
  category: TechStack["category"],
): TechStack => ({ name, category });

// ============================================
// PROFESSIONAL PROJECTS - French
// ============================================

const pyrojsRefonte: ProfessionalProject = {
  id: "pyrojs-refonte",
  type: "professional",
  title: "Refonte de l'Architecture PyroJs",
  subtitle: "Migration du monolithe vers les microservices avec 150+ APIs REST",
  description:
    "Refonte complète du backend de PyroJs d'une architecture monolithique vers des microservices, avec 150+ APIs REST documentées avec Swagger et migration de données de BigQuery vers MySQL.",
  longDescription:
    "Chez SBG TECHELECTRO, j'ai été l'ingénieur principal responsable de la refonte architecturale de PyroJs — une application critique en production souffrant de goulets d'étranglement de déploiement, d'une scalabilité limitée et d'une maintenance croissante. J'ai repensé l'intégralité du backend autour d'une architecture microservices, défini le schéma SQL et construit 150+ APIs REST entièrement documentées avec Swagger. J'ai également géré la migration des données de production de BigQuery vers MySQL, en garantissant l'intégrité et la cohérence tout au long du processus. Vers la fin du projet, j'ai contribué à la phase de livraison frontend — en intégrant les retours clients et en stabilisant l'interface utilisateur avant la version finale de production.",

  // ============================================
  // 1. RÉSUMÉ
  // ============================================
  summary:
    "Ingénieur Full-Stack responsable de la refonte backend de PyroJs, passant d'une architecture monolithique à un système scalable basé sur les microservices avec 150+ APIs REST.",

  // ============================================
  // 2. HISTOIRE
  // ============================================
  story: {
    challenge:
      "PyroJs était une application legacy critique en production avec des goulets d'étranglement de déploiement, des limitations de scalabilité et une lourdeur de maintenance.",
    action:
      "J'ai été l'ingénieur principal responsable de la refonte backend. J'ai conçu la nouvelle architecture SQL, développé 150+ APIs REST avec documentation Swagger, et migré les données de production de BigQuery vers MySQL en garantissant l'intégrité des données tout au long du processus. J'ai également contribué à la livraison frontend lors de la phase de validation finale, en travaillant avec les retours clients pour stabiliser l'application avant la mise en production.",
    result:
      "La transition du monolithe vers les microservices a permis des déploiements indépendants des services, éliminant les goulets d'étranglement qui retardaient auparavant les versions. La documentation Swagger a amélioré l'expérience développeur et accéléré l'intégration. La migration a été réalisée avec succès, garantissant l'intégrité complète des données.",
  },

  // ============================================
  // 3. MÉTRIQUES CLÉS
  // ============================================
  quickStats: [
    { value: "150+", label: "APIs REST" },
    { value: "Microservices", label: "Nouvelle Architecture" },
    { value: "Intégrité Totale", label: "Migration des Données" },
    { value: "Swagger", label: "Documentation API" },
  ],

  // ============================================
  // 4. RÉALISATIONS
  // ============================================
  achievements: [
    "Conception et implémentation d'une architecture microservices avec 150+ APIs REST",
    "Création d'une documentation API complète avec Swagger",
    "Migration des données de BigQuery vers MySQL avec intégrité totale",
    "Accélération des cycles de développement grâce aux déploiements indépendants",
    "Contribution à la livraison frontend et à l'intégration des retours clients",
  ],

  // ============================================
  // 5. TECHNOLOGIES
  // ============================================
  technologies: [
    createTech("Node.js", "backend"),
    createTech("React.js", "frontend"),
    createTech("MySQL", "database"),
    createTech("BigQuery", "database"),
    createTech("Swagger", "design"),
  ],

  // ============================================
  // 6. CHAMPS DE BASE
  // ============================================
  role: "Ingénieur Full-Stack",
  period: "Août 2025 - Avr 2026",
  company: "SBG TECHELECTRO",
  location: "Tunisie",
  placeholder: true,
};

const iotReportingService: ProfessionalProject = {
  id: "iot-reporting-service",
  type: "professional",
  title: "Microservice de Reporting IoT",
  subtitle: "Reporting automatisé pour 2 000+ dispositifs avec tâches cron",
  description:
    "Microservice IoT avec 10 tâches cron automatisant l'analyse de disponibilité, le suivi des pannes et l'envoi programmé de rapports pour 2 000+ dispositifs.",
  longDescription:
    "Dans le cadre de l'écosystème microservices de PyroJs chez SBG TECHELECTRO, j'ai conçu et développé un microservice de reporting IoT dédié. Le service exécute 10 tâches cron qui surveillent en continu plus de 2 000 dispositifs connectés, analysant la disponibilité, détectant les pannes et attribuant automatiquement la responsabilité au groupe concerné. Les rapports sont générés et envoyés automatiquement par groupe selon la fréquence configurée — quotidienne, hebdomadaire ou mensuelle — éliminant tout effort manuel de reporting pour les équipes d'exploitation.",

  // ============================================
  // 1. RÉSUMÉ
  // ============================================
  summary:
    "Conception et développement d'un microservice de reporting IoT dédié pour l'analyse de disponibilité, le suivi des pannes et la génération automatisée de rapports pour un parc de 2 000+ dispositifs connectés.",

  // ============================================
  // 2. HISTOIRE
  // ============================================
  story: {
    challenge:
      "Avec 2 000+ dispositifs IoT sur le terrain, les équipes d'exploitation ne disposaient d'aucun moyen automatisé pour suivre la disponibilité, les pannes ou attribuer les responsabilités — les rapports étaient manuels, incohérents et retardés.",
    action:
      "J'ai construit un microservice autonome avec 10 tâches cron qui analysent en continu la disponibilité des dispositifs, détectent les pannes et attribuent automatiquement la responsabilité par groupe. Le service génère et envoie des rapports à chaque groupe de destinataires selon la fréquence configurée — quotidienne, hebdomadaire ou mensuelle.",
    result:
      "Les équipes d'exploitation reçoivent désormais des rapports automatisés et précis, sans effort manuel. La responsabilité des dispositifs s'est considérablement améliorée et les temps de réponse aux pannes ont diminué grâce à un reporting ciblé et opportun.",
  },

  // ============================================
  // 3. MÉTRIQUES CLÉS
  // ============================================
  quickStats: [
    { value: "2 000+", label: "Dispositifs IoT" },
    { value: "10", label: "Tâches Cron" },
    { value: "3 Fréquences", label: "Quotidienne / Hebdomadaire / Mensuelle" },
    { value: "Automatisé", label: "Envoi des Rapports" },
  ],

  // ============================================
  // 4. RÉALISATIONS
  // ============================================
  achievements: [
    "Construction d'un microservice avec 10 tâches cron surveillant 2 000+ dispositifs IoT",
    "Automatisation de l'analyse de disponibilité, détection des pannes et attribution des responsabilités",
    "Implémentation de la génération de rapports par groupe avec fréquences configurables",
    "Élimination des efforts manuels de reporting pour les équipes d'exploitation",
    "Intégration transparente dans l'architecture microservices de PyroJs",
  ],

  // ============================================
  // 5. TECHNOLOGIES
  // ============================================
  technologies: [
    createTech("Node.js", "backend"),
    createTech("MySQL", "database"),
    createTech("Redis", "database"),
    createTech("RabbitMQ", "backend"),
    createTech("Tâches Cron", "backend"),
  ],

  // ============================================
  // 6. CHAMPS DE BASE
  // ============================================
  role: "Ingénieur Full-Stack",
  period: "Août 2025 - Avr 2026",
  company: "SBG TECHELECTRO",
  location: "Tunisie",
  placeholder: true,
};

const clickhouseMigration: ProfessionalProject = {
  id: "clickhouse-migration",
  type: "professional",
  title: "Migration MySQL vers ClickHouse",
  subtitle: "20M de lignes migrées, stockage réduit de 70 Go à 3 Go",
  description:
    "Migration orientée performance de 20 millions de lignes de données IoT de MySQL vers ClickHouse, réduisant le stockage de 70 Go à 3 Go avec intégrité totale des données.",
  longDescription:
    "Chez SBG TECHELECTRO, le volume croissant des données temporelles IoT poussait MySQL à ses limites — 70 Go de stockage, des requêtes analytiques lentes et aucune voie claire pour évoluer. J'ai pris en charge l'évaluation et la migration vers ClickHouse. J'ai commencé par des benchmarks de performance systématiques pour identifier le schéma optimal pour les modèles d'accès aux données, puis j'ai écrit et exécuté des scripts de migration pour déplacer 20 millions de lignes de MySQL vers ClickHouse, en validant l'intégrité à chaque étape. Le résultat a été une réduction de stockage de plus de 95 % (70 Go à 3 Go) et des requêtes analytiques significativement plus rapides, offrant à la plateforme une base solide pour la croissance future des données IoT.",

  // ============================================
  // 1. RÉSUMÉ
  // ============================================
  summary:
    "Direction des benchmarks de performance et de la migration complète des données de MySQL vers ClickHouse, réalisant une réduction de plus de 95 % de l'empreinte de stockage et une amélioration spectaculaire des performances des requêtes analytiques.",

  // ============================================
  // 2. HISTOIRE
  // ============================================
  story: {
    challenge:
      "La configuration MySQL existante stockait de grands volumes de données temporelles IoT, ce qui a entraîné 70 Go de stockage et des requêtes analytiques de plus en plus lentes, incapables de suivre la croissance du parc de dispositifs.",
    action:
      "J'ai réalisé une série de tests de performance pour identifier le schéma ClickHouse optimal pour les modèles d'accès aux données. J'ai ensuite écrit et exécuté des scripts de migration pour déplacer 20 millions de lignes de MySQL vers ClickHouse, en validant l'intégrité des données à chaque étape du processus.",
    result:
      "Le stockage est passé de 70 Go à seulement 3 Go — une réduction de plus de 95 % — tandis que les performances des requêtes analytiques se sont considérablement améliorées. La migration a été réalisée avec une intégrité totale des données et sans perte de données.",
  },

  // ============================================
  // 3. MÉTRIQUES CLÉS
  // ============================================
  quickStats: [
    { value: "20M", label: "Lignes Migrées" },
    { value: "70 Go → 3 Go", label: "Stockage Optimisé" },
    { value: "95%+", label: "Réduction de Stockage" },
    { value: "Zéro Perte", label: "Intégrité des Données" },
  ],

  // ============================================
  // 4. RÉALISATIONS
  // ============================================
  achievements: [
    "Réduction du stockage de 70 Go à 3 Go — une réduction de plus de 95 %",
    "Migration réussie de 20 millions de lignes de MySQL vers ClickHouse",
    "Conception et benchmark du schéma ClickHouse optimal pour les données temporelles IoT",
    "Écriture et exécution de scripts de migration avec validation d'intégrité totale",
    "Déverrouillage de performances de requêtes analytiques scalables pour la croissance du parc de dispositifs",
  ],

  // ============================================
  // 5. TECHNOLOGIES
  // ============================================
  technologies: [
    createTech("ClickHouse", "database"),
    createTech("MySQL", "database"),
    createTech("Node.js", "backend"),
    createTech("Redis", "database"),
    createTech("RabbitMQ", "backend"),
  ],

  // ============================================
  // 6. CHAMPS DE BASE
  // ============================================
  role: "Ingénieur Full-Stack",
  period: "Août 2025 - Avr 2026",
  company: "SBG TECHELECTRO",
  location: "Tunisie",
  placeholder: true,
};

const winshotIntegration: ProfessionalProject = {
  id: "winshot-integration",
  type: "professional",
  title: "Winshot Reward — Intégrations & Module Défis",
  subtitle:
    "Extension de la plateforme avec synchronisation externe et un nouveau modèle de récompenses",
  description:
    "Extension de Winshot Reward avec une couche d'intégration opt-in connectant Odoo Sales et Winshot CRM, et livraison du module Défis — un nouveau modèle de récompenses offrant aux managers une flexibilité accrue dans la structuration des incitations.",

  longDescription:
    "Winshot Reward est une plateforme de gamification chez GOFIELD construite pour les entreprises franchisées afin de suivre les performances des employés et de distribuer des récompenses. À mesure que la plateforme évoluait, j'ai pris en charge deux extensions fonctionnelles. Sur le plan de l'intégration, j'ai conçu et implémenté une couche de synchronisation opt-in — permettant aux entreprises de connecter leurs outils existants directement à la plateforme. Les deux premiers connecteurs construits sont Odoo Sales, intégré via webhooks pour une synchronisation événementielle en temps réel, et Winshot CRM, intégré via polling pour une réconciliation périodique des données. Sur le plan produit, j'ai conçu et livré le module Défis — un nouveau modèle de récompenses qui offre aux managers une façon différente de définir comment les employés gagnent des points, avec plus de flexibilité que le système d'objectifs existant. Ces deux ajouts sont des fonctionnalités indépendantes qui élargissent les capacités de la plateforme sans affecter les fonctionnalités existantes.",

  // ============================================
  // 1. RÉSUMÉ
  // ============================================
  summary:
    "Livraison de deux extensions majeures pour Winshot Reward : une couche d'intégration opt-in pour la synchronisation externe, et le module Défis — un nouveau modèle de récompenses flexible complétant le système d'objectifs existant.",

  // ============================================
  // 2. HISTOIRE
  // ============================================
  story: {
    challenge:
      "À mesure que Winshot Reward évoluait, deux domaines d'extension ont été identifiés : permettre aux entreprises de synchroniser leurs outils existants avec la plateforme plutôt que de compter uniquement sur la saisie manuelle, et offrir aux managers un modèle de récompenses plus flexible au-delà du système d'objectifs structuré par paliers.",
    action:
      "J'ai construit une couche d'intégration opt-in avec deux connecteurs initiaux — Odoo Sales via webhooks pour une synchronisation événementielle en temps réel, et Winshot CRM via polling pour une réconciliation périodique. En parallèle, j'ai conçu et livré le module Défis : un nouveau modèle de récompenses où les managers ont plus de contrôle sur la façon dont les employés gagnent des points, avec une structure distincte du système d'objectifs existant.",
    result:
      "Winshot Reward a lancé deux nouvelles capacités : une couche d'intégration scalable prête à intégrer des connecteurs supplémentaires, et un second modèle de récompenses qui élargit la façon dont les managers peuvent concevoir des programmes d'incitation sur la plateforme.",
  },

  // ============================================
  // 3. MÉTRIQUES CLÉS
  // ============================================
  quickStats: [
    { value: "2", label: "Intégrations Livrées" },
    { value: "Temps Réel", label: "Synchronisation Odoo Sales" },
    { value: "Périodique", label: "Synchronisation Winshot CRM" },
    { value: "1 Module", label: "Système Défis" },
  ],

  // ============================================
  // 4. RÉALISATIONS
  // ============================================
  achievements: [
    "Conception et implémentation d'une couche d'intégration tierce opt-in pour Winshot Reward",
    "Intégration d'Odoo Sales via webhooks pour une synchronisation en temps réel",
    "Intégration de Winshot CRM via polling pour une réconciliation périodique",
    "Conception et livraison du module Défis — un nouveau modèle de récompenses offrant une flexibilité managériale accrue",
    "Livraison des deux fonctionnalités comme extensions indépendantes sans impact sur les fonctionnalités existantes",
  ],

  // ============================================
  // 5. TECHNOLOGIES
  // ============================================
  technologies: [
    createTech("React.js", "frontend"),
    createTech("Node.js", "backend"),
    createTech("React Native", "frontend"),
    createTech("MongoDB", "database"),
    createTech("Webhooks", "backend"),
  ],

  // ============================================
  // 6. CHAMPS DE BASE
  // ============================================
  role: "Ingénieur Full-Stack",
  period: "Déc 2024 - Mars 2025",
  company: "GOFIELD",
  location: "Tunisie",
  placeholder: true,
};

// ============================================
// INTERNSHIP PROJECTS - French
// ============================================

const winshotReward: InternshipProject = {
  id: "winshot-reward",
  type: "internship",
  title: "Winshot Reward",
  subtitle:
    "Plateforme multi-tenant de gestion des performances et récompenses",
  description:
    "Application web admin et application mobile pour la gestion des performances des équipes terrain et des récompenses. Projet de fin d'études avec architecture multi-tenant et pipelines CI/CD automatisés.",
  longDescription:
    "Winshot Reward est une solution complète pour la gestion des objectifs de performance et des récompenses des employés. Développée lors de mon stage de fin d'études chez GOFIELD, cette plateforme multi-tenant répond aux besoins des entreprises fonctionnant en franchise. Elle se compose d'une application web pour les administrateurs (gestion des objectifs, récompenses, équipes et employés) et d'une application mobile pour les employés terrain (suivi de leur progression, accumulation de points, et échange de récompenses). L'ensemble du cycle de développement est automatisé via des pipelines CI/CD, garantissant un déploiement fiable et efficace.",

  technologies: [
    createTech("React.js", "frontend"),
    createTech("React Native", "mobile"),
    createTech("Node.js", "backend"),
    createTech("MongoDB", "database"),
    createTech("Docker", "devops"),
    createTech("Jenkins", "devops"),
    createTech("SonarQube", "devops"),
  ],

  role: "Développeur Full-Stack Web & Mobile - Stage PFE",
  period: "Fév 2024 - Août 2024",
  company: "GOFIELD (WINSHOT)",
  location: "Tunis, Tunisie",
  placeholder: false,
  imageUrl: "/images/projects/winshot-reward/web-login.png",

  mission:
    "Concevoir et développer une plateforme SaaS multi-tenant pour la gestion des objectifs de performance (OKRs) et des récompenses pour les équipes terrain, en intégrant des pipelines CI/CD pour automatiser le cycle de développement.",

  tasks: [
    {
      title: "Architecture Backend Multi-Tenant",
      description:
        "Conception et implémentation d'une architecture backend multi-tenant scalable avec Node.js et MongoDB, permettant une résolution dynamique des connexions aux bases de données. Réalisation d'un isolement complet des données offrant aux entreprises clientes le choix entre une infrastructure hébergée par GOFIELD ou leurs propres serveurs dédiés (base de données + FTP) — pattern BYOF (Bring Your Own FTP).",
      technologies: ["Node.js", "MongoDB", "Mongoose", "JWT"],
    },
    {
      title: "Plateforme Web Administrateur",
      description:
        "Développement d'un tableau de bord React.js complet pour les administrateurs d'entreprise incluant : gestion hiérarchique des équipes, opérations CRUD sur les employés, configuration des objectifs (catégories, niveaux, récompenses en points), catalogue de récompenses, et workflows d'approbation administrative pour les soumissions de progression et les demandes de récompenses.",
      technologies: ["React.js", "React Router", "Axios", "i18n"],
    },
    {
      title: "Application Mobile Cross-Platform",
      description:
        "Développement d'une solution mobile React Native pour les employés terrain avec des fonctionnalités incluant : tableaux de bord personnalisés des objectifs, suivi de progression avec saisie manuelle/automatique, accumulation de points en temps réel, classements gamifiés (par équipe et individuel), et boutique de récompenses intégrée pour l'échange de points.",
      technologies: [
        "React Native",
        "Redux Toolkit",
        "React Navigation",
        "i18n",
      ],
    },
    {
      title: "Automatisation CI/CD",
      description:
        "Ingénierie de pipelines CI/CD complets avec Jenkins sur VM Azure Linux. Intégration de webhooks GitLab pour les builds automatiques sur les demandes de fusion et les branches de release. Implémentation de SonarQube pour l'inspection continue de la qualité du code, conteneurisation Docker pour la cohérence des environnements, et déploiement automatisé via Docker Compose avec stockage des images sur AWS ECR.",
      technologies: [
        "Jenkins",
        "Docker",
        "Docker Compose",
        "SonarQube",
        "AWS ECR",
        "Nginx",
        "GitLab",
      ],
    },
    {
      title: "Intégration Gestion des Identités",
      description:
        "Intégration du fournisseur d'identité (IDP) interne de GOFIELD pour fournir une authentification unifiée et un contrôle d'accès basé sur les rôles (RBAC) sur les applications web et mobile, supportant les profils Super Admin, Admin et Employé avec une gestion de session basée sur JWT.",
      technologies: ["OAuth2", "JWT", "Identity Provider"],
    },
  ],

  learnings: [
    "Architecturation et mise en production d'une infrastructure SaaS multi-tenant avec routage dynamique des bases de données et options flexibles de souveraineté des données (BYOF).",
    "Mise en place complète de l'automatisation DevOps incluant pipelines CI/CD, conteneurisation, intégration de registre cloud, et surveillance continue de la qualité du code avec SonarQube.",
    "Livraison d'une solution mobile cross-platform avec React Native, permettant la réutilisation du code entre iOS et Android tout en maintenant des performances natives.",
    "Application réussie de Scrum dans un contexte de stage industriel, avec livraison de deux releases majeures sur 6 sprints et intégration continue des retours parties prenantes.",
    "Conception et implémentation d'un moteur de gamification (récompenses basées sur points, progression par niveaux, suivi des réalisations) aligné avec la méthodologie OKR (Objectives and Key Results).",
    "Intégration de cinq services hétérogènes dans une plateforme cohérente : fournisseur d'identité, clusters MongoDB, serveurs FTP, stockage AWS S3, et services de notification par email.",
  ],

  deliverables: [],

  screenshots: [
    // Sprint 1 - Application Web
    {
      url: "/images/projects/winshot-reward/web-login.png",
      caption: "Interface d'authentification (Application Web)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-tenants-list.jpg",
      caption: "Gestion des Tenants - Vue Liste",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-tenant.jpg",
      caption: "Ajout d'un nouveau Tenant - Assistant de configuration",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-tenant.jpg",
      caption: "Suppression d'un Tenant - Confirmation de sécurité",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-companies-list.jpg",
      caption: "Gestion des Entreprises - Vue Liste",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-company.jpg",
      caption:
        "Ajout d'une nouvelle entreprise - Formulaire en deux étapes (Entreprise + Admin)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-company.jpg",
      caption: "Suppression d'une entreprise - Avertissement final",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-language.jpg",
      caption: "Support multi-langues (i18n)",
      placeholder: false,
    },

    // Sprint 2 - Application Web (Équipes, Niveaux, Employés)
    {
      url: "/images/projects/winshot-reward/web-profile.jpg",
      caption: "Gestion du profil",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-change-password.jpg",
      caption: "Interface de changement de mot de passe",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-teams-list.jpg",
      caption: "Gestion des équipes - Vue Liste",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-team.jpg",
      caption: "Ajout d'une nouvelle équipe",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-edit-team.jpg",
      caption: "Modification d'une équipe",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-team.jpg",
      caption: "Confirmation de suppression d'équipe",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-levels-list.jpg",
      caption: "Personnalisation des niveaux - Vue Liste",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-level.jpg",
      caption: "Ajout d'un nouveau niveau",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-edit-level.jpg",
      caption: "Modification d'un niveau",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-employees-list.jpg",
      caption: "Gestion des employés - Vue Liste",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-employee.jpg",
      caption: "Ajout d'un employé (Sélection d'équipe + auto-affectation)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-edit-employee.jpg",
      caption: "Modification d'un employé",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-employee.jpg",
      caption: "Confirmation de suppression d'employé",
      placeholder: false,
    },

    // Sprint 3 - Application Web (Objectifs, Catégories, Récompenses)
    {
      url: "/images/projects/winshot-reward/web-goals-list.jpg",
      caption: "Gestion des objectifs - Vue Liste avec filtres",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-goal.jpg",
      caption:
        "Création d'un nouvel objectif (Titre, Catégorie, Niveaux, Instructions)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-edit-goal.jpg",
      caption: "Modification d'un objectif",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-goal.jpg",
      caption: "Confirmation de suppression d'objectif",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-goal-assignments-users.jpg",
      caption: "Affectations des objectifs - Vue employés",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-assign-goal-users.jpg",
      caption: "Affecter un objectif à des employés",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-unassign-goal-user.jpg",
      caption: "Désaffecter un objectif d'un employé",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-goal-assignments-teams.jpg",
      caption: "Affectations des objectifs - Vue équipes avec progression",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-assign-goal-teams.jpg",
      caption: "Affecter un objectif à des équipes (Sélection multiple)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-unassign-goal-team.jpg",
      caption: "Désaffecter un objectif d'une équipe",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-goal-progress.jpg",
      caption: "Suivi des progressions d'objectif - Vue Liste",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-approve-progress.jpg",
      caption: "Approuver la progression d'un employé",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-reject-progress.jpg",
      caption: "Rejeter la progression d'un employé avec commentaire",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-rewards-list.jpg",
      caption: "Gestion des récompenses - Vue Liste avec filtres",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-reward.jpg",
      caption:
        "Création d'une nouvelle récompense (Titre, Points, Type de validation)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-edit-reward.jpg",
      caption: "Modification d'une récompense",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-reward.jpg",
      caption: "Confirmation de suppression de récompense",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-orders-list.jpg",
      caption: "Gestion des commandes de récompenses - Vue Liste",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-approve-order.jpg",
      caption: "Approuver une commande de récompense",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-reject-order.jpg",
      caption: "Rejeter une commande de récompense avec commentaire",
      placeholder: false,
    },

    // Sprint 5 - Application Mobile
    {
      url: "/images/projects/winshot-reward/mobile/login.jpg",
      caption: "Écran d'authentification mobile",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/home.jpg",
      caption: "Tableau de bord d'accueil mobile",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/sidebar.jpg",
      caption: "Barre latérale de navigation mobile",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/settings.jpg",
      caption: "Interface des paramètres mobile",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/profile.jpg",
      caption: "Gestion du profil mobile",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/change-password.jpg",
      caption: "Interface de changement de mot de passe mobile",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/language.jpg",
      caption: "Sélection de la langue mobile",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/home-en.jpg",
      caption: "Tableau de bord d'accueil mobile (Anglais)",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/forgot-password-1.jpg",
      caption: "Mot de passe oublié - Saisie email",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/forgot-password-2.jpg",
      caption: "Mot de passe oublié - Confirmation",
      placeholder: false,
      isMobile: true,
    },

    // Sprint 6 - Application Mobile (Objectifs & Récompenses)
    {
      url: "/images/projects/winshot-reward/mobile/goals-list.jpg",
      caption: "Liste des objectifs avec filtres",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/goals-filter.jpg",
      caption: "Filtrage des objectifs",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/goal-details.jpg",
      caption: "Détails d'un objectif",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/increment-progress.jpg",
      caption: "Incrémentation de la progression d'un objectif",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/rankings-teams.jpg",
      caption: "Classements par équipe",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/rankings-employees.jpg",
      caption: "Classements par employé",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/rewards-list.jpg",
      caption: "Catalogue des récompenses",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/rewards-filter.jpg",
      caption: "Filtrage des récompenses",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/reward-details.jpg",
      caption: "Détails d'une récompense",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/order-reward.jpg",
      caption: "Confirmation de commande de récompense",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/orders-list.jpg",
      caption: "Mes commandes de récompenses",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/orders-filter.jpg",
      caption: "Filtrage des commandes de récompenses",
      placeholder: false,
      isMobile: true,
    },
  ],
};

const financeTracker: InternshipProject = {
  id: "finance-tracker",
  type: "internship",
  title: "Application de Suivi Financier Personnel",
  subtitle:
    "Application mobile cross-platform pour le suivi des revenus, dépenses et statistiques financières avec Firebase",
  description:
    "Développement d'une application mobile Flutter pour la gestion des finances personnelles avec authentification Firebase, stockage cloud et synchronisation des données en temps réel. Fonctionnalités incluant mode invité, gestion des transactions et tableaux de bord interactifs.",
  longDescription: `**Problème :** Le client avait besoin d'une solution mobile moderne pour suivre ses finances personnelles. Les méthodes existantes manquaient de persistance des données, d'interfaces utilisateur conviviales et de fonctionnalités de visualisation avancées.

**Solution :** Construction d'une application Flutter cross-platform avec :
- Mode invité pour une utilisation temporaire (stockage local avec Hive)
- Mode authentifié (Firebase Auth + Google Sign-In)
- Gestion des transactions (revenus/dépenses avec catégories)
- Tableaux de bord interactifs avec graphiques (vues hebdomadaires/mensuelles/annuelles)
- Synchronisation des données cloud entre appareils
- Gestion du profil avec téléchargement d'image

**Fonctionnalités clés :**
- 🔐 Authentification Email/Mot de passe + Google
- 💰 Ajout, modification, suppression de transactions financières
- 📊 Statistiques visuelles avec graphiques linéaires
- ☁️ Sauvegarde cloud avec Firestore
- 🖼️ Téléchargement de photo de profil vers Firebase Storage
- 🌙 Stockage local avec Hive pour le mode invité`,

  technologies: [
    createTech("Flutter", "mobile"),
    createTech("Dart", "frontend"),
    createTech("Firebase Auth", "backend"),
    createTech("Firestore", "database"),
    createTech("Firebase Storage", "cloud"),
    createTech("Hive", "database"),
    createTech("Google Sign-In", "backend"),
    createTech("Flutter Charts", "design"),
  ],

  role: "Développeur Mobile - Stage d'été",
  period: "Juil 2023 - Août 2023",
  company: "VisualDev",
  location: "Manouba, Tunisie",
  placeholder: false,
  imageUrl: "/images/projects/finance-tracker/logoWallet.png",

  mission:
    "Développer une application mobile cross-platform intuitive pour la gestion des finances personnelles avec modes invité et authentifié, incluant le suivi des transactions, des statistiques visuelles et la synchronisation cloud.",

  tasks: [
    {
      title: "Système d'authentification",
      description:
        "Implémentation de l'authentification email/mot de passe et Google Sign-In avec Firebase Auth. Création du mode invité avec persistance locale des données pour les utilisateurs sans compte.",
      technologies: ["Flutter", "Firebase Auth", "Google Sign-In"],
    },
    {
      title: "Gestion des transactions",
      description:
        "Construction d'opérations CRUD complètes pour les transactions de revenus et dépenses avec sélection de catégorie, sélecteur de date et validation des montants.",
      technologies: ["Flutter", "Firestore", "Hive"],
    },
    {
      title: "Visualisation des données",
      description:
        "Création de tableaux de bord interactifs avec graphiques linéaires montrant l'évolution du solde. Implémentation des vues statistiques hebdomadaires, mensuelles et annuelles.",
      technologies: ["Flutter Charts", "Dart", "Firestore"],
    },
    {
      title: "Stockage cloud et synchronisation",
      description:
        "Intégration de Firestore pour la persistance sécurisée des données et Firebase Storage pour les images de profil. Activation de la synchronisation en temps réel entre plusieurs appareils.",
      technologies: ["Firestore", "Firebase Storage", "Flutter"],
    },
  ],

  learnings: [
    "Développement mobile cross-platform avec le framework Flutter",
    "Écosystème Firebase (Authentification, Firestore, Storage)",
    "Gestion d'état avec le pattern Provider",
    "Persistance locale des données avec Hive (base de données NoSQL)",
    "Intégration de Google Sign-In",
    "Visualisation de données avec Flutter Charts",
  ],

  deliverables: [
    "Application Flutter complète pour iOS et Android",
    "Authentification Email/Mot de passe + Google",
    "Mode invité avec stockage local",
    "Gestion des transactions (revenus/dépenses)",
    "Tableaux de bord interactifs avec graphiques",
    "Sauvegarde et synchronisation cloud",
    "Gestion du profil avec téléchargement d'image",
  ],

  screenshots: [
    {
      url: "/images/projects/finance-tracker/splash.jpg",
      caption: "Écran de démarrage (Login/Register/Invite)",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/login.png",
      caption: "Interface d'authentification (Email + Google)",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/register.png",
      caption: "Interface d'inscription",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/home.png",
      caption: "Tableau de bord d'accueil",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/add-transaction.png",
      caption: "Ajout d'une transaction",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/stats-weekly.png",
      caption: "Statistiques hebdomadaires",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/stats-monthly.png",
      caption: "Statistiques mensuelles",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/stats-yearly.png",
      caption: "Statistiques annuelles",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/profile.jpg",
      caption: "Gestion du profil",
      placeholder: false,
      isMobile: true,
    },
  ],
};

const pfaCloud: AcademicProject = {
  id: "pfa-cloud",
  type: "academic",
  title: "Plateforme de Gestion de Projets et de Ressources",
  subtitle:
    "Application full-stack avec déploiement cloud (SaaS + PaaS + IaaS) et Elastic Stack",
  description:
    "Première expérience de déploiement cloud utilisant 3 modèles (SaaS, PaaS, IaaS) avec Azure Cloud, Elasticsearch, Kibana et Jenkins CI/CD.",
  longDescription: `Ma première expérience de déploiement cloud. Construction d'une application full-stack et déploiement utilisant TROIS modèles cloud dans un SEUL projet :

☁️ SaaS : Elastic Cloud (Elasticsearch + Kibana) - analytiques gérées
☁️ PaaS : Azure App Service (backend Node.js) - auto-scaling
☁️ IaaS : Azure VM (frontend React + Jenkins) - contrôle total

Plus : Pipeline Jenkins CI/CD pour déploiement automatisé à chaque push.`,

  technologies: [
    createTech("Azure Cloud", "cloud"),
    createTech("Jenkins", "devops"),
    createTech("Elasticsearch", "database"),
    createTech("Kibana", "design"),
    createTech("Elastic Cloud", "cloud"),
    createTech("Azure App Service", "cloud"),
    createTech("Azure Virtual Machines", "cloud"),
    createTech("React.js", "frontend"),
    createTech("Node.js", "backend"),
  ],

  role: "Développeur Full-Stack & Architecte Cloud",
  period: "Fév 2023 - Mai 2023",
  company: "ISAMM",
  location: "Tunisie",
  placeholder: false,

  responsibilities: [
    "Déploiement d'Elasticsearch + Kibana sur Elastic Cloud (SaaS) pour l'analytique en temps réel",
    "Déploiement du backend Node.js sur Azure App Service (PaaS) avec auto-scaling",
    "Déploiement du frontend React sur Azure VM avec Jenkins CI/CD (IaaS)",
    "Configuration du pipeline Jenkins pour un déploiement automatisé à chaque push Git",
    "Intégration d'Elasticsearch avec Node.js pour l'indexation et la recherche de données",
    "Création de 3 tableaux de bord Kibana interactifs (Entreprise, Département, Projet)",
    "Construction d'une application full-stack avec des opérations CRUD complètes",
  ],

  results: [
    "✅ Première expérience de déploiement cloud (Azure + Elastic Cloud)",
    "✅ 3 modèles cloud dans un SEUL projet (SaaS + PaaS + IaaS)",
    "✅ Pipeline CI/CD automatisé avec Jenkins",
    "✅ 15+ visualisations en temps réel dans Kibana",
  ],

  keySkills: [
    "Azure Cloud (App Service, VM)",
    "Elastic Cloud (SaaS)",
    "Elasticsearch & Kibana",
    "Jenkins CI/CD",
    "React.js & Node.js",
  ],

  screenshots: [
    {
      url: "/images/projects/pfa/architecture.png",
      caption: "Architecture Cloud Hybride (SaaS + PaaS + IaaS)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/login.png",
      caption: "Interface de connexion",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/user-list.png",
      caption: "Gestion des utilisateurs",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/add-user.png",
      caption: "Ajout d'un employé",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/edit-user.png",
      caption: "Modification d'un employé",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/delete-user.png",
      caption: "Suppression d'un employé",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/add-department.png",
      caption: "Ajout d'un département",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/add-project.png",
      caption: "Ajout d'un projet",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/add-task.jpg",
      caption: "Ajout d'une tâche",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/company-dashboard.png",
      caption: "Tableau de bord Entreprise (Kibana)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/department-dashboard.png",
      caption: "Tableau de bord Département (Kibana)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/project-dashboard.png",
      caption: "Tableau de bord Projet (Kibana)",
      placeholder: false,
    },
  ],
  imageUrl: "/images/projects/pfa/architecture.png",
};

const easyPlant: InternshipProject = {
  id: "easy-plant",
  type: "internship",
  title: "Application de Gestion de Pépinière Agricole",
  subtitle:
    "Module de gestion de production, livraisons et statistiques avec Power BI",
  description:
    "Développement d'un module web pour la gestion de production, des plannings, des livraisons et des stocks d'une pépinière agricole, avec tableaux de bord Power BI.",
  longDescription: `**Problématique :** La pépinière gérait ses activités (commandes, productions, plannings, livraisons) avec des fichiers Excel et des fiches manuscrites, causant une absence de vision globale, des problèmes de planification, et un traitement lent des données.

**Solution :** Développement d'une application web avec ASP.NET MVC 5 (C#), SQL Server, Entity Framework (Database First), Bootstrap, jQuery, et Power BI pour :
- Gestion des productions (lancement, greffage, porte-greffe, comptages planifiés/aléatoires, clôture)
- Gestion des plannings (consultation avec filtres, validation des tâches)
- Gestion des livraisons (validation, historique, suivi des supports chez les clients)
- Suivi des stocks (semences clients, semences pépinière, supports)
- Tableaux de bord Power BI (capacité production, productivité, top clients, top variétés)

**Méthodologie :** Projet développé avec la méthode agile Scrum sur 3 sprints (3 mois).`,

  technologies: [
    createTech("ASP.NET MVC 5", "backend"),
    createTech("C#", "backend"),
    createTech("SQL Server", "database"),
    createTech("Entity Framework", "database"),
    createTech("Power BI", "design"),
    createTech("Bootstrap", "frontend"),
    createTech("jQuery", "frontend"),
  ],

  role: "Développeur Full-Stack - Projet de Fin d'Études",
  period: "Mars 2021 - Juin 2021",
  company: "EASY Technology",
  location: "Tunis, Tunisie",
  placeholder: false,
  imageUrl: "/images/projects/easyplant/login.png",

  mission:
    "Moderniser la gestion d'une pépinière agricole en remplaçant les fichiers Excel et fiches manuscrites par une application web centralisée pour la production, les livraisons, les plannings et les stocks.",

  tasks: [
    {
      title: "Gestion de production",
      description:
        "Développement d'un système complet de suivi de production : lancement, greffage, porte-greffe, comptages planifiés et aléatoires. Implémentation d'un filtrage dynamique (période, type de tâche, mot-clé) pour une planification efficace.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "jQuery"],
    },
    {
      title: "Planification et monitoring",
      description:
        "Création de tableaux de bord de planning pour chef d'équipe et responsable avec validation des tâches. Ajout d'un filtrage par date et type de tâche pour une meilleure visibilité.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server"],
    },
    {
      title: "Gestion des livraisons",
      description:
        "Implémentation d'un workflow complet de livraison : liste des commandes en attente, validation avec saisie des données, historique des livraisons, suivi des supports clients, et validation de réception.",
      technologies: ["ASP.NET MVC", "C#", "Entity Framework"],
    },
    {
      title: "Tableaux de bord Power BI",
      description:
        "Création de tableaux de bord interactifs avec KPIs : capacité de production, matrice de productivité par chef d'équipe, évolution du chiffre d'affaires, top 5 produits et top 5 clients. Intégrés directement dans l'application web.",
      technologies: ["Power BI", "DAX", "SQL Server"],
    },
  ],

  learnings: [
    "Méthodologie agile Scrum (planification, sprints, backlog)",
    "Framework ASP.NET MVC 5 et Entity Framework (Database First)",
    "Création de tableaux de bord interactifs avec Power BI (KPIs, jauges, graphiques)",
    "Gestion de projet en environnement professionnel",
  ],

  deliverables: [
    "3 sprints livrés (production, livraisons, stocks/statistiques)",
    "Application web complète avec interfaces planning, production, livraison",
    "Tableaux de bord Power BI intégrés (capacité production, top 5 variétés, top 5 clients, productivité chefs d'équipe)",
    "Base de données SQL Server centralisée",
  ],

  screenshots: [
    {
      url: "/images/projects/easyplant/planning-chef.png",
      caption: "Planning pour chef d'équipe (filtrage temps/type)",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/planning-responsable.png",
      caption: "Planning pour responsable",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/lancement-production.png",
      caption: "Interface lancement production",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/valider-comptage.png",
      caption: "Interface validation comptage",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/ajouter-comptage.png",
      caption: "Interface ajout comptage aléatoire",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/avancement-production.png",
      caption: "Interface avancement production",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/login.png",
      caption: "Interface authentification",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/livraisons.png",
      caption: "Interface commandes à livrer",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/valider-livraison.png",
      caption: "Interface validation livraison",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/historiques-livraison.png",
      caption: "Interface historique livraisons",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/supports-clients.png",
      caption: "Interface supports chez clients",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/stock-supports.png",
      caption: "Interface stock supports",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/stock-semences.png",
      caption: "Interface stock semences",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/dashboard-powerbi-p1.png",
      caption: "Tableaux de bord Power BI partie 1",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/dashboard-powerbi-p2.png",
      caption: "Tableaux de bord Power BI partie 2",
      placeholder: false,
    },
  ],
};

const devnetPortal: InternshipProject = {
  id: "devnet-portail",
  type: "internship",
  title: "Portail Web Dynamique",
  subtitle:
    "Gestion centralisée des secteurs, domaines et entreprises publiques",
  description:
    "Remplaçant un système Excel fragmenté, ce portail web centralise la gestion des données du secteur public avec contrôle d'accès Admin/Agent.",
  longDescription: `**Problématique :** L'entreprise gérait ses données sur Excel avec des fichiers dupliqués et des informations non à jour, causant une absence de vision globale et des risques d'erreur.

**Solution :** Développement d'un portail web avec October CMS (Laravel) permettant :
- Une base de données MySQL centralisée
- Deux niveaux d'accès (Admin: accès total / Agent: gestion limitée)
- Des tableaux de bord statistiques en temps réel
- Une interface utilisateur intuitive pour la gestion CRUD

**Résultat :** Une solution fiable, centralisée et facile à maintenir, remplaçant complètement l'ancien système Excel.`,

  technologies: [
    createTech("October CMS", "backend"),
    createTech("Laravel", "backend"),
    createTech("PHP", "backend"),
    createTech("MySQL", "database"),
    createTech("Power AMC", "design"),
  ],

  role: "Développeur Web - Stagiaire",
  period: "Jan 2020 - Fév 2020",
  company: "DEVNET",
  location: "Tunis, Tunisie",
  placeholder: false,
  imageUrl: "/images/projects/devnet/admin-dashboard.png",

  screenshots: [
    {
      url: "/images/projects/devnet/login.png",
      caption: "Interface d'authentification",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/admin-dashboard.png",
      caption: "Tableau de bord Administrateur avec statistiques",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/agent-dashboard.png",
      caption: "Tableau de bord Agent avec statistiques",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/user-management.png",
      caption: "Gestion des utilisateurs",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/enterprise-management.png",
      caption: "Gestion des entreprises publiques",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/add-enterprise.png",
      caption: "Formulaire d'ajout d'une entreprise",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/edit-enterprise.png",
      caption: "Modification d'une entreprise",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/single-delete.png",
      caption: "Suppression d'une entreprise",
      placeholder: false,
    },
  ],

  mission:
    "Remplacer la gestion Excel fragmentée par un portail web centralisé avec contrôle d'accès et tableaux de bord.",

  tasks: [
    {
      title: "Migration Excel → Base de données",
      description:
        "Analyse du système existant et conception d'une base de données MySQL centralisée",
      technologies: ["MySQL", "Power AMC", "UML"],
    },
    {
      title: "Développement du portail",
      description:
        "Création d'un thème personnalisé et développement des modules CRUD sous October CMS",
      technologies: ["October CMS", "Laravel", "PHP", "Twig"],
    },
    {
      title: "Contrôle d'accès",
      description:
        "Implémentation de deux profils: Administrateur (accès complet) et Agent (gestion limitée)",
      technologies: ["Laravel Auth", "Session Management"],
    },
  ],

  learnings: [
    "Première expérience professionnelle en environnement d'entreprise",
    "Maîtrise d'October CMS et du framework Laravel",
    "Compréhension des enjeux de la centralisation des données",
    "Gestion de projet et respect des délais",
  ],

  deliverables: [
    "Portail web complet (9 interfaces)",
    "Base de données MySQL centralisée",
    "2 tableaux de bord (Admin + Agent)",
    "Documentation utilisateur",
  ],
};

const sccGlobal: InternshipProject = {
  id: "scc-global",
  type: "internship",
  title: "Application Web de Gestion de Matériel",
  subtitle:
    "Application web pour la gestion d'inventaire et réservation de matériel informatique",
  description:
    "Remplacement du suivi Excel fragmenté par une application web avec gestion d'inventaire, réservation de matériel et accès basé sur les rôles (Admin/Agent).",
  longDescription: `**Problématique :** L'entreprise gérait son inventaire de matériel informatique sur Excel avec saisie manuelle, causant un manque de visibilité globale et des problèmes de fiabilité des informations.

**Solution :** Développement d'une application web avec Spring Boot (backend) et Angular (frontend) permettant :
- Une base de données MySQL centralisée pour le suivi du matériel
- Deux niveaux d'accès (Admin: gestion complète / Agent: consultation et réservation)
- Consultation des détails, liste et suppression du matériel
- Système de réservation pour le matériel disponible

**Résultat :** Une solution fiable et centralisée remplaçant la gestion Excel manuelle, avec suivi en temps réel de la disponibilité du matériel.`,

  technologies: [
    createTech("Spring Boot", "backend"),
    createTech("Angular", "frontend"),
    createTech("Java", "backend"),
    createTech("MySQL", "database"),
    createTech("TypeScript", "frontend"),
    createTech("HTML/CSS", "frontend"),
  ],

  role: "Développeur Web - Stagiaire",
  period: "Fév 2021 - Mars 2021",
  company: "SCC Global",
  location: "Béja, Tunisie",
  placeholder: false,
  imageUrl: "/images/projects/sccglobal/login.png",

  mission:
    "Remplacer la gestion Excel fragmentée par une application web centralisée pour le suivi du matériel informatique et la gestion des réservations.",

  tasks: [
    {
      title: "Développement Backend",
      description:
        "Création d'une API REST avec Spring Boot pour la gestion du matériel et des utilisateurs",
      technologies: ["Spring Boot", "Java", "MySQL"],
    },
    {
      title: "Développement Frontend",
      description:
        "Création d'une interface responsive avec Angular pour la liste et les détails du matériel",
      technologies: ["Angular", "TypeScript", "HTML/CSS"],
    },
    {
      title: "Système de Réservation",
      description:
        "Implémentation de la fonctionnalité de réservation de matériel pour les agents",
      technologies: ["Spring Boot", "Angular", "MySQL"],
    },
    {
      title: "Contrôle d'accès",
      description:
        "Implémentation de deux rôles utilisateurs: Admin (CRUD complet) et Agent (consultation + réservation)",
      technologies: ["Spring Security", "JWT"],
    },
  ],

  learnings: [
    "Première expérience avec Spring Boot et Angular",
    "Compréhension du développement d'API REST",
    "Conception de base de données MySQL",
    "Implémentation du contrôle d'accès basé sur les rôles",
    "Intégration frontend-backend",
  ],

  deliverables: [
    "Application web complète avec 7+ interfaces",
    "Base de données MySQL centralisée",
    "Système de réservation de matériel",
    "Tableaux de bord Admin et Agent",
  ],

  screenshots: [
    {
      url: "/images/projects/sccglobal/login.png",
      caption: "Interface d'authentification",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/agent-dashboard.png",
      caption: "Tableau de bord Agent - Liste du matériel",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/admin-dashboard.png",
      caption: "Tableau de bord Admin - Gestion utilisateurs",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/equipment-details.png",
      caption: "Détails du matériel",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/equipment-list.png",
      caption: "Gestion du matériel (Admin)",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/delete-equipment.png",
      caption: "Confirmation de suppression",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/add-headset.png",
      caption: "Formulaire d'ajout de matériel",
      placeholder: false,
    },
  ],
};

// ============================================
// Skills, Certifications, Interests, Languages
// ============================================

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Angular", level: 75, category: "frontend" },

  // Backend
  { name: "Node.js", level: 95, category: "backend" },
  { name: "Java / Spring Boot", level: 80, category: "backend" },
  { name: "C# / ASP.NET MVC", level: 75, category: "backend" },

  // Mobile
  { name: "React Native", level: 90, category: "mobile" },
  { name: "Flutter", level: 70, category: "mobile" },
  { name: "Android", level: 65, category: "mobile" },

  // DevOps
  { name: "Docker", level: 85, category: "devops" },
  { name: "Jenkins", level: 80, category: "devops" },
  { name: "Git", level: 90, category: "devops" },
  { name: "CI/CD", level: 85, category: "devops" },

  // Database
  { name: "MongoDB", level: 90, category: "database" },
  { name: "MySQL", level: 90, category: "database" },
  { name: "SQL Server", level: 85, category: "database" },
  { name: "Redis", level: 80, category: "database" },
  { name: "ClickHouse", level: 75, category: "database" },

  // Other
  { name: "Power BI", level: 80, category: "other" },
  { name: "Azure Cloud", level: 75, category: "other" },
];

export const certifications: Certification[] = [
  { name: "Certificat APTIS", issuer: "British Council", year: "2022" },
  { name: "Formation Spring Boot", issuer: "Auto-apprentissage", year: "2021" },
];

export const interests: Interest[] = [
  { name: "Écriture", icon: "pen-tool" },
  { name: "Séries TV", icon: "tv" },
  { name: "Lecture", icon: "book-open" },
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire (Certifié APTIS)" },
];

export const socialLinks = {
  linkedIn: "https://linkedin.com/in/mohamed-amine-bouzidi",
  github: "https://github.com/MedamineBouzidi",
  email: "mailto:bouzidi.amine0301@gmail.com",
};

// ============================================
// Export all projects
// ============================================

export const projects: Project[] = [
  clickhouseMigration,
  iotReportingService,
  pyrojsRefonte,
  winshotIntegration,
  winshotReward,
  financeTracker,
  pfaCloud,
  easyPlant,
  sccGlobal,
  devnetPortal,
];
