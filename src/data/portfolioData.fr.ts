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
    company: "Easy Computers & Technologies",
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
    date: "Fév 2021",
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
    "Plateforme multi-tenant de gestion des objectifs de performance et des récompenses",
  description:
    "Plateforme web et mobile multi-tenant permettant aux entreprises en franchise de gérer les objectifs de performance, les points, les classements et l'échange de récompenses de leurs équipes terrain.",
  longDescription:
    "Winshot Reward est une plateforme SaaS multi-tenant développée chez GOFIELD pour des entreprises fonctionnant en franchise. Les administrateurs gèrent les entreprises, équipes, employés, objectifs et récompenses depuis une application web React, tandis que les employés terrain suivent leur progression, cumulent des points et échangent leurs récompenses depuis une application React Native. J'ai travaillé sur toute la stack — isolation des données par tenant, plateforme d'administration, expérience mobile et pipeline CI/CD Jenkins — sur deux releases et six sprints Scrum.",

  technologies: [
    createTech("React.js", "frontend"),
    createTech("React Native", "mobile"),
    createTech("Node.js", "backend"),
    createTech("MongoDB", "database"),
    createTech("Docker", "devops"),
    createTech("Jenkins", "devops"),
    createTech("SonarQube", "devops"),
  ],

  role: "Développeur Full-Stack Web & Mobile — Stage PFE",
  period: "Fév 2024 - Août 2024",
  company: "GOFIELD",
  location: "Tunis, Tunisie",
  status: "2 releases livrées",
  teamSize: 1,
  placeholder: false,
  imageUrl: "/images/projects/winshot-reward/web-login.webp",

  quickStats: [
    { value: "6", label: "Sprints Scrum" },
    { value: "2", label: "Releases livrées" },
    { value: "2", label: "Applications web + mobile" },
    { value: "5", label: "Services intégrés" },
  ],

  mission:
    "Donner aux entreprises en franchise une plateforme multi-tenant unique pour définir des objectifs de performance, suivre la progression des équipes terrain et gérer l'échange de récompenses — sans mélanger les données entre tenants.",

  tasks: [
    {
      title: "Architecture backend multi-tenant",
      description:
        "Conception d'un backend Node.js et MongoDB avec résolution dynamique des connexions par tenant, afin d'isoler les données de chaque client. Les entreprises peuvent utiliser l'infrastructure hébergée par GOFIELD ou connecter leur propre base de données et leurs serveurs FTP.",
      technologies: ["Node.js", "MongoDB", "Mongoose", "JWT"],
    },
    {
      title: "Plateforme web d'administration",
      description:
        "Développement de l'application d'administration React : gestion des entreprises et tenants, équipes hiérarchiques, fiches employés, objectifs avec catégories et niveaux, catalogue de récompenses, et workflows d'approbation des progressions et des commandes de récompenses.",
      technologies: ["React.js", "React Router", "Axios", "i18n"],
    },
    {
      title: "Application mobile cross-platform",
      description:
        "Développement de l'application React Native pour les employés terrain : tableaux de bord d'objectifs personnels, saisie de progression, cumul de points, classements par équipe et individuels, et boutique de récompenses.",
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
        "Mise en place de pipelines Jenkins sur une VM Azure Linux, avec webhooks GitLab déclenchant les builds sur les merge requests et branches de release, contrôles qualité SonarQube, images Docker stockées sur AWS ECR et déploiement automatisé via Docker Compose.",
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
      title: "Gestion des identités et des accès",
      description:
        "Intégration du fournisseur d'identité interne de GOFIELD pour une authentification unifiée et un contrôle d'accès basé sur les rôles sur le web et le mobile, avec les profils Super Admin, Admin et Employé et des sessions JWT.",
      technologies: ["OAuth2", "JWT", "Identity Provider"],
    },
  ],

  results: [
    "Deux releases livrées sur six sprints Scrum — sprints de 21 jours pour la release 1, de 14 jours pour la release 2.",
    "Livraison d'une application web d'administration et d'une application React Native iOS et Android à partir d'une seule base de code.",
    "Isolation des données par tenant au niveau de la base, avec option de base de données et de serveurs FTP propres au client.",
    "Automatisation du build, de l'analyse qualité et du déploiement avec un pipeline Jenkins.",
    "Connexion de cinq services : fournisseur d'identité, MongoDB, FTP, AWS S3 et notifications email.",
  ],

  learnings: [
    "Conception de l'isolation multi-tenant et du routage dynamique des connexions.",
    "Mise en place d'un cycle CI/CD complet avec Jenkins, Docker et SonarQube.",
    "Livraison d'une base de code React Native unique pour iOS et Android.",
    "Travail en Scrum sur deux releases, avec retours des parties prenantes entre les sprints.",
  ],

  deliverables: [
    "Application web d'administration (entreprises, équipes, employés, objectifs, récompenses)",
    "Application React Native (progression, points, classements, récompenses)",
    "Pipeline CI/CD Jenkins avec contrôles qualité SonarQube",
    "Backlogs de sprint et documentation technique",
  ],

  screenshots: [
    {
      url: "/images/projects/winshot-reward/web-login.webp",
      caption: "Interface d'authentification (application web)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-companies-list.webp",
      caption: "Gestion des entreprises",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-goals-list.webp",
      caption: "Objectifs de performance",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-goal-assignments-teams.webp",
      caption: "Affectation des objectifs et progression par équipe",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-orders-list.webp",
      caption: "Gestion des commandes de récompenses",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/mobile/home.webp",
      caption: "Tableau de bord mobile",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/goal-details.webp",
      caption: "Détails d'un objectif sur mobile",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/rankings-teams.webp",
      caption: "Classement par équipe",
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
    "Application mobile cross-platform pour les revenus, dépenses et tendances de solde",
  description:
    "Application Flutter développée dans le cadre d'un projet de formation interne chez Visual Dev : modes invité et authentifié, suivi des transactions et graphiques de solde hebdomadaires, mensuels et annuels.",
  longDescription:
    "Il s'agissait d'un projet de formation interne chez Visual Dev, destiné à construire un produit mobile complet de zéro plutôt qu'à répondre à un brief client. J'ai développé une application Flutter cross-platform avec deux modes — un mode invité reposant sur le stockage local Hive et un mode authentifié utilisant Firebase Auth et Google Sign-In. L'utilisateur ajoute, modifie et supprime ses revenus et dépenses par catégorie, puis suit son solde via des graphiques hebdomadaires, mensuels et annuels. Firestore synchronise les données entre appareils et Firebase Storage gère les images de profil.",

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

  role: "Développeur Mobile — Stage d'été",
  period: "Juil 2023 - Août 2023",
  company: "Visual Dev",
  location: "Manouba, Tunisie",
  status: "Projet de formation interne",
  placeholder: false,
  imageUrl: "/images/projects/finance-tracker/logoWallet.webp",

  quickStats: [
    { value: "1", label: "Base de code Flutter" },
    { value: "2", label: "Modes d'utilisation" },
    { value: "3", label: "Vues de solde" },
    { value: "iOS + Android", label: "Plateformes" },
  ],

  mission:
    "Construire une application complète de finances personnelles dans le cadre d'un projet de formation interne, avec un mode invité sans compte et un mode authentifié synchronisé dans le cloud.",

  tasks: [
    {
      title: "Système d'authentification",
      description:
        "Implémentation de l'authentification email/mot de passe et de Google Sign-In avec Firebase Auth, ainsi qu'un mode invité persistant les données localement pour les utilisateurs sans compte.",
      technologies: ["Flutter", "Firebase Auth", "Google Sign-In"],
    },
    {
      title: "Gestion des transactions",
      description:
        "Développement des opérations CRUD pour les revenus et dépenses avec sélection de catégorie, choix de la date et validation du montant.",
      technologies: ["Flutter", "Firestore", "Hive"],
    },
    {
      title: "Visualisation des données",
      description:
        "Création de tableaux de bord avec graphiques linéaires montrant l'évolution du solde, en vues hebdomadaire, mensuelle et annuelle.",
      technologies: ["Flutter Charts", "Dart", "Firestore"],
    },
    {
      title: "Stockage cloud et synchronisation",
      description:
        "Intégration de Firestore pour la persistance des données et de Firebase Storage pour les images de profil, avec synchronisation entre appareils.",
      technologies: ["Firestore", "Firebase Storage", "Flutter"],
    },
  ],

  results: [
    "Livraison d'une base de code Flutter unique fonctionnant sur iOS et Android.",
    "Mise en place de deux modes : invité avec stockage local Hive, et authentifié avec Firebase.",
    "Gestion des transactions avec catégories, dates et validation des montants.",
    "Graphiques de solde hebdomadaires, mensuels et annuels avec synchronisation cloud entre appareils.",
  ],

  learnings: [
    "Développement mobile cross-platform avec Flutter.",
    "Firebase Authentication, Firestore et Storage.",
    "Gestion d'état avec le pattern Provider.",
    "Persistance locale avec la base NoSQL Hive.",
    "Visualisation de données avec Flutter Charts.",
  ],

  deliverables: [
    "Application Flutter pour iOS et Android",
    "Authentification email/mot de passe et Google",
    "Mode invité avec stockage local",
    "Gestion des revenus et dépenses",
    "Graphiques interactifs hebdomadaires, mensuels et annuels",
    "Sauvegarde et synchronisation cloud",
    "Gestion du profil avec téléchargement d'image",
  ],

  screenshots: [
    {
      url: "/images/projects/finance-tracker/splash.webp",
      caption: "Écran de démarrage (connexion, inscription, invité)",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/home.webp",
      caption: "Tableau de bord d'accueil",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/add-transaction.webp",
      caption: "Ajout d'une transaction",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/stats-monthly.webp",
      caption: "Statistiques mensuelles",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/stats-yearly.webp",
      caption: "Statistiques annuelles",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/profile.webp",
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
    "Application full-stack déployée sur trois modèles cloud avec Elastic Stack",
  description:
    "PFA académique réalisé en binôme : une application de gestion de projets et de ressources déployée avec les modèles SaaS, PaaS et IaaS, Elasticsearch, Kibana et un pipeline Jenkins.",
  longDescription: `Projet de fin d'année (PFA) réalisé en binôme à l'ISAMM. Nous avons développé une application full-stack de gestion de projets et de ressources, puis l'avons déployée avec trois modèles cloud dans le même projet :

☁️ SaaS : Elastic Cloud (Elasticsearch + Kibana) pour la recherche et les tableaux de bord
☁️ PaaS : Azure App Service pour le backend Node.js
☁️ IaaS : machine virtuelle Azure pour le frontend React et Jenkins

Un pipeline Jenkins redéploie le frontend après chaque push Git.`,

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

  role: "Développeur Full-Stack — PFA (binôme)",
  period: "Fév 2023 - Mai 2023",
  company: "ISAMM",
  location: "Tunisie",
  status: "PFA académique · 3 modèles cloud",
  teamSize: 2,
  placeholder: false,

  quickStats: [
    { value: "3", label: "Modèles cloud" },
    { value: "3", label: "Tableaux de bord Kibana" },
    { value: "16", label: "Panneaux de dashboard" },
    { value: "1", label: "Pipeline Jenkins" },
  ],

  responsibilities: [
    "Déploiement d'Elasticsearch et Kibana sur Elastic Cloud (SaaS) pour la recherche et les tableaux de bord",
    "Déploiement du backend Node.js sur Azure App Service (PaaS)",
    "Déploiement du frontend React sur une machine virtuelle Azure avec Jenkins (IaaS)",
    "Configuration d'un pipeline Jenkins pour redéployer le frontend à chaque push Git",
    "Intégration d'Elasticsearch avec Node.js pour l'indexation et la recherche",
    "Création de trois tableaux de bord Kibana : entreprise, département et projet",
    "Développement de l'application full-stack avec les opérations CRUD complètes",
  ],

  results: [
    "Déploiement d'une application sur trois modèles cloud : SaaS, PaaS et IaaS.",
    "Création de trois tableaux de bord Kibana — entreprise, département et projet — totalisant 16 panneaux.",
    "Automatisation du redéploiement du frontend avec un pipeline Jenkins déclenché à chaque push Git.",
    "Indexation des données de l'application dans Elasticsearch pour la recherche et les tableaux de bord.",
  ],

  keySkills: [
    "Azure Cloud (App Service, machines virtuelles)",
    "Elastic Cloud (SaaS)",
    "Elasticsearch & Kibana",
    "Jenkins CI/CD",
    "React.js & Node.js",
  ],

  screenshots: [
    {
      url: "/images/projects/pfa/architecture.webp",
      caption: "Architecture cloud hybride (SaaS + PaaS + IaaS)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/login.webp",
      caption: "Interface de connexion",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/user-list.webp",
      caption: "Gestion des employés",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/add-project.webp",
      caption: "Création d'un projet",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/company-dashboard.webp",
      caption: "Tableau de bord entreprise (Kibana)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/department-dashboard.webp",
      caption: "Tableau de bord département (Kibana)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/project-dashboard.webp",
      caption: "Tableau de bord projet (Kibana)",
      placeholder: false,
    },
  ],
  imageUrl: "/images/projects/pfa/architecture.webp",
};

const easyPlant: InternshipProject = {
  id: "easy-plant",
  type: "internship",
  title: "Application de Gestion de Pépinière Agricole",
  subtitle:
    "Module de production, livraisons et reporting pour une pépinière agricole",
  description:
    "Module web couvrant la production, les plannings, les livraisons et les stocks d'une pépinière agricole, avec des tableaux de bord Power BI pour les décisions quotidiennes.",
  longDescription: `**Problématique :** La pépinière gérait ses commandes, productions, plannings et livraisons avec des fichiers Excel et des fiches manuscrites, sans vision globale, avec des difficultés de planification et un traitement lent des données.

**Solution :** Une application web développée avec ASP.NET MVC 5 (C#), SQL Server, Entity Framework (Database First), Bootstrap, jQuery et Power BI, couvrant :
- La gestion des productions (lancement, greffage, porte-greffe, comptages planifiés et aléatoires, clôture)
- La gestion des plannings avec filtres et validation des tâches
- La gestion des livraisons avec validation, historique et suivi des supports chez les clients
- Le suivi des stocks de semences clients, semences pépinière et supports
- Des tableaux de bord Power BI (capacité de production, productivité, top clients, top variétés)

**Méthodologie :** Agile Scrum sur trois sprints.`,

  technologies: [
    createTech("ASP.NET MVC 5", "backend"),
    createTech("C#", "backend"),
    createTech("SQL Server", "database"),
    createTech("Entity Framework", "database"),
    createTech("Power BI", "design"),
    createTech("Bootstrap", "frontend"),
    createTech("jQuery", "frontend"),
  ],

  role: "Développeur Full-Stack — Stage PFE",
  period: "Mars 2021 - Juin 2021",
  company: "Easy Computers & Technologies",
  location: "Tunis, Tunisie",
  status: "3 sprints livrés",
  placeholder: false,
  imageUrl: "/images/projects/easyplant/login.webp",

  quickStats: [
    { value: "3", label: "Sprints Scrum" },
    { value: "5", label: "Domaines fonctionnels" },
    { value: "1", label: "Pépinière cliente" },
    { value: "Power BI", label: "Couche de reporting" },
  ],

  mission:
    "Moderniser la gestion de la pépinière en remplaçant les fichiers Excel et fiches manuscrites par une application web unique pour la production, les livraisons, les plannings et les stocks.",

  tasks: [
    {
      title: "Gestion de production",
      description:
        "Développement du suivi de production : lancement, greffage, porte-greffe, comptages planifiés et aléatoires, avec filtrage dynamique par période, type de tâche et mot-clé.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "jQuery"],
    },
    {
      title: "Planification et suivi",
      description:
        "Création de vues de planning pour les chefs d'équipe et les responsables avec validation des tâches, et filtrage par date et type de tâche.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server"],
    },
    {
      title: "Gestion des livraisons",
      description:
        "Implémentation du workflow de livraison : commandes en attente, validation avec saisie, historique, suivi des supports clients et validation de réception.",
      technologies: ["ASP.NET MVC", "C#", "Entity Framework"],
    },
    {
      title: "Tableaux de bord Power BI",
      description:
        "Création de tableaux de bord pour la capacité de production, la productivité des chefs d'équipe, l'évolution du chiffre d'affaires, le top 5 produits et le top 5 clients, intégrés à l'application web.",
      technologies: ["Power BI", "DAX", "SQL Server"],
    },
  ],

  results: [
    "Module livré en trois sprints Scrum.",
    "Couverture de la production, des plannings, des livraisons, des stocks et du reporting dans une seule application web.",
    "Remplacement des fichiers Excel et fiches manuscrites par une base SQL Server centralisée.",
    "Tableaux de bord Power BI pour la capacité de production, la productivité, le top produits et le top clients.",
  ],

  learnings: [
    "Agile Scrum : planification des sprints, backlog et livraison.",
    "ASP.NET MVC 5 et Entity Framework (Database First).",
    "Tableaux de bord Power BI interactifs avec KPIs, jauges et graphiques.",
    "Travail direct avec l'équipe opérationnelle d'un client.",
  ],

  deliverables: [
    "Trois sprints livrés (production, livraisons, stocks et reporting)",
    "Application web avec les interfaces planning, production, livraison et stock",
    "Tableaux de bord Power BI (capacité, productivité, top produits, top clients)",
    "Base de données SQL Server centralisée",
  ],

  screenshots: [
    {
      url: "/images/projects/easyplant/planning-chef.webp",
      caption: "Planning chef d'équipe avec filtres",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/lancement-production.webp",
      caption: "Lancement de production",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/livraisons.webp",
      caption: "Commandes à livrer",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/valider-livraison.webp",
      caption: "Validation de livraison",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/stock-supports.webp",
      caption: "Stock des supports",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/stock-semences.webp",
      caption: "Stock des semences",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/dashboard-powerbi-p1.webp",
      caption: "Tableaux de bord Power BI, partie 1",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/dashboard-powerbi-p2.webp",
      caption: "Tableaux de bord Power BI, partie 2",
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
    "Portail du secteur public remplaçant des fichiers Excel fragmentés par une source de vérité MySQL unique, deux rôles d'accès et des tableaux de bord statistiques.",
  longDescription: `**Contexte :** Stage de perfectionnement de deux mois chez DEVNET, réalisé en groupe.

**Problématique :** Les données étaient réparties dans des fichiers Excel dupliqués et obsolètes, sans vision globale et avec un risque d'erreur réel.

**Solution :** Un portail web développé avec October CMS (Laravel), offrant :
- Une base de données MySQL centralisée
- Deux niveaux d'accès : Administrateur (accès complet) et Agent (gestion limitée)
- Des tableaux de bord statistiques
- Une interface simple pour la gestion CRUD

**Résultat :** Un portail fiable et centralisé, qui remplace complètement les fichiers Excel.`,

  technologies: [
    createTech("October CMS", "backend"),
    createTech("Laravel", "backend"),
    createTech("PHP", "backend"),
    createTech("MySQL", "database"),
    createTech("Power AMC", "design"),
  ],

  role: "Développeur Web — Stagiaire",
  period: "Jan 2020 - Fév 2020",
  company: "DEVNET",
  location: "Tunis, Tunisie",
  status: "Projet de groupe",
  placeholder: false,
  imageUrl: "/images/projects/devnet/admin-dashboard.webp",

  quickStats: [
    { value: "9", label: "Interfaces" },
    { value: "2", label: "Rôles d'accès" },
    { value: "2", label: "Tableaux de bord" },
    { value: "1", label: "Base centralisée" },
  ],

  mission:
    "Remplacer une gestion Excel fragmentée par un portail web centralisé avec contrôle d'accès et tableaux de bord.",

  tasks: [
    {
      title: "Migration Excel vers base de données",
      description:
        "Analyse des fichiers existants et conception d'une base de données MySQL centralisée.",
      technologies: ["MySQL", "Power AMC", "UML"],
    },
    {
      title: "Développement du portail",
      description:
        "Création d'un thème personnalisé et développement des modules CRUD sous October CMS.",
      technologies: ["October CMS", "Laravel", "PHP", "Twig"],
    },
    {
      title: "Contrôle d'accès",
      description:
        "Mise en place de deux profils : Administrateur avec accès complet et Agent avec gestion limitée.",
      technologies: ["Laravel Auth", "Session Management"],
    },
  ],

  results: [
    "Remplacement des fichiers Excel dupliqués par une base MySQL centralisée.",
    "Livraison de neuf interfaces couvrant l'authentification, les tableaux de bord et la gestion CRUD.",
    "Mise en place de deux niveaux d'accès : Administrateur (accès complet) et Agent (gestion limitée).",
    "Création des tableaux de bord Admin et Agent pour les statistiques des secteurs, domaines et entreprises publiques.",
  ],

  learnings: [
    "Première expérience professionnelle en entreprise.",
    "October CMS et le framework Laravel.",
    "Centralisation et migration de données depuis des tableurs.",
    "Travail en groupe avec des délais et une hiérarchie administrative.",
  ],

  deliverables: [
    "Portail web avec neuf interfaces",
    "Base de données MySQL centralisée",
    "Deux tableaux de bord (Admin et Agent)",
    "Documentation utilisateur",
  ],

  screenshots: [
    {
      url: "/images/projects/devnet/login.webp",
      caption: "Interface d'authentification",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/admin-dashboard.webp",
      caption: "Tableau de bord Administrateur avec statistiques",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/agent-dashboard.webp",
      caption: "Tableau de bord Agent avec statistiques",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/enterprise-management.webp",
      caption: "Gestion des entreprises publiques",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/add-enterprise.webp",
      caption: "Formulaire d'ajout d'entreprise",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/user-management.webp",
      caption: "Gestion des utilisateurs",
      placeholder: false,
    },
  ],
};

const sccGlobal: InternshipProject = {
  id: "scc-global",
  type: "internship",
  title: "Application Web de Gestion de Matériel",
  subtitle: "Suivi d'inventaire et réservation de matériel informatique",
  description:
    "Stage d'initiation d'un mois : application web pour suivre le matériel informatique et les réservations, en remplacement d'Excel par une base MySQL centralisée.",
  longDescription: `**Contexte :** Stage d'initiation d'un mois chez SCC Global, avec une méthode de développement classique plutôt que Scrum.

**Problématique :** Le matériel informatique était suivi dans Excel avec une saisie manuelle, sans vision fiable des disponibilités.

**Solution :** Une application web développée avec Spring Boot et Angular, offrant :
- Une base MySQL centralisée pour le suivi du matériel
- Deux niveaux d'accès : Admin (gestion complète) et Agent (consultation et réservation)
- La liste, les détails et la suppression du matériel
- Un parcours de réservation du matériel disponible

**Résultat :** Un remplacement centralisé du suivi Excel manuel.`,

  technologies: [
    createTech("Spring Boot", "backend"),
    createTech("Angular", "frontend"),
    createTech("Java", "backend"),
    createTech("MySQL", "database"),
    createTech("TypeScript", "frontend"),
    createTech("HTML/CSS", "frontend"),
  ],

  role: "Développeur Web — Stagiaire",
  period: "Fév 2021",
  company: "SCC Global",
  location: "Béja, Tunisie",
  status: "Stage d'initiation d'un mois",
  placeholder: false,
  imageUrl: "/images/projects/sccglobal/login.webp",

  quickStats: [
    { value: "1", label: "Mois" },
    { value: "7", label: "Interfaces" },
    { value: "2", label: "Rôles d'accès" },
    { value: "1", label: "Parcours de réservation" },
  ],

  mission:
    "Remplacer une gestion de matériel fragmentée sous Excel par une application web centralisée pour le suivi du matériel informatique et la gestion des réservations.",

  tasks: [
    {
      title: "Développement backend",
      description:
        "Création d'une API REST avec Spring Boot pour la gestion du matériel et des utilisateurs.",
      technologies: ["Spring Boot", "Java", "MySQL"],
    },
    {
      title: "Développement frontend",
      description:
        "Création d'une interface Angular responsive pour la liste et les détails du matériel.",
      technologies: ["Angular", "TypeScript", "HTML/CSS"],
    },
    {
      title: "Système de réservation",
      description:
        "Implémentation de la réservation de matériel pour les agents.",
      technologies: ["Spring Boot", "Angular", "MySQL"],
    },
    {
      title: "Accès basé sur les rôles",
      description:
        "Mise en place de deux rôles : Admin avec CRUD complet et Agent avec consultation et réservation.",
      technologies: ["Spring Security", "JWT"],
    },
  ],

  results: [
    "Application livrée dans le cadre d'un stage d'initiation d'un mois.",
    "Remplacement du suivi Excel par une base MySQL centralisée.",
    "Sept interfaces pour la liste, les détails, la réservation et l'administration du matériel.",
    "Deux rôles, Admin et Agent, avec Spring Security et JWT.",
  ],

  learnings: [
    "Première expérience avec Spring Boot et Angular.",
    "Développement d'API REST et intégration frontend-backend.",
    "Conception de base de données MySQL.",
    "Contrôle d'accès basé sur les rôles.",
  ],

  deliverables: [
    "Application web avec sept interfaces",
    "Base de données MySQL centralisée",
    "Système de réservation de matériel",
    "Tableaux de bord Admin et Agent",
  ],

  screenshots: [
    {
      url: "/images/projects/sccglobal/login.webp",
      caption: "Interface d'authentification",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/agent-dashboard.webp",
      caption: "Tableau de bord Agent — liste du matériel",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/equipment-details.webp",
      caption: "Détails du matériel",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/equipment-list.webp",
      caption: "Gestion du matériel (Admin)",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/add-headset.webp",
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
  linkedIn: "https://www.linkedin.com/in/med-amine-bouzidi",
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
