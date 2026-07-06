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
  OtherProject,
} from "../types/portfolio";

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Mohamed Amine Bouzidi",
  title: "Full-Stack Software Engineer",
  email: "bouzidi.amine0301@gmail.com",
  phone: "+21655209898",
  location: "Ariana, Tunisia",
  linkedIn: "mohamed-amine-bouzidi",
  github: "MedamineBouzidi",
  description:
    "Passionate Full-Stack Engineer specializing in React, Node.js, and React Native. Over a year of experience building scalable web and mobile applications with microservices architecture. I thrive on turning complex problems into elegant solutions and continuously expanding my technical horizons.",
};

// Career Timeline - showing evolution
export const timelineItems: TimelineItem[] = [
  {
    id: "work-sbg",
    date: "Août 2025 - Présent",
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
      "Amélioration des interfaces mobiles, intégration systèmes tiers (CRM, Odoo), développement module Défis",
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
      "Système multi-tenant pour gestion performances/récompenses, pipelines CI/CD",
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
      "Application de suivi financier pour gestion des finances personnelles",
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
    description: "Application web pour gestion de matériel",
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
      "Premier stage: portail web dynamique avec October CMS, gestion des services du secteur public, contrôle d'accès Admin/Agent",
    technologies: ["October CMS", "PHP", "MySQL", "UML"],
    type: "internship",
  },
];

// Education Timeline
export const educationItems: Education[] = [
  {
    degree: "Cycle Ingénieur en Sciences Appliquées et en Technologie",
    institution: "Institut Supérieur des Arts Multimédia de Manouba",
    year: "2024",
    description: "Spécialité: Génie Logiciel",
  },
  {
    degree: "Licence Appliquée en Technologie de l'Informatique",
    institution: "Institut Supérieur des Études Technologiques de Béja",
    year: "2021",
    description: "Spécialité: Développement des Systèmes d'Information",
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

// Projects - Detailed with features, challenges, results, and interfaces
// export const projects: Project[] = [
//   // Winshot Reward Project - GOFIELD (PFE)
//   {
//     id: "winshot-reward",
//     type: "internship", // or "professional" if this was a paid position
//     title: "Winshot Reward - PFE",
//     subtitle:
//       "Plateforme multi-tenant de gestion des performances et récompenses",
//     description:
//       "Application web admin et mobile complète pour la gestion des performances et récompenses des équipes terrain. Projet de fin d'études avec architecture multi-tenant et pipelines CI/CD automatisés.",
//     longDescription:
//       "Application web et mobile multi-tenant pour la gestion des performances et récompenses des équipes terrain. Le projet comprends 2 versions: une application web administrative (Release 1) et une application mobile React Native (Release 2). L'architecture multi-tenant permet d'isoler complètement les données de chaque entreprise cliente via des namespaces et bases MongoDB dédiées. Les pipelines CI/CD avec Jenkins, Docker, SonarQube et AWS ECR garantissent un déploiement automatisé et une qualité de code continue.",
//     technologies: [
//       createTech("React.js", "frontend"),
//       createTech("React Native", "mobile"),
//       createTech("Node.js", "backend"),
//       createTech("MongoDB", "database"),
//       createTech("Docker", "devops"),
//       createTech("Jenkins", "devops"),
//       createTech("AWS ECR", "cloud"),
//       createTech("SonarQube", "devops"),
//       createTech("GitLab", "devops"),
//       createTech("Azure Cloud", "cloud"),
//       createTech("Nginx", "devops"),
//     ],
//     role: "Développeur Full-Stack Web & Mobile - Stage PFE",
//     period: "Fév 2024 - Août 2024",
//     company: "GOFIELD",
//     location: "Tunisie",
//     placeholder: true,
//     features: [
//       // === RELEASE 1: APPLICATION WEB ADMINISTRATIVE (Sprints 1-3) ===
//       // Sprint 1: Authentification & Gestion Multi-Tenant
//       {
//         title: "Figure 29 - Interface Login Web",
//         description:
//           "Interface d'authentification web pour les administrateurs avec validation des identifiants et redirection vers le dashboard",
//       },
//       {
//         title: "Figure 30 - Dashboard Super Admin",
//         description:
//           "Tableau de bord principal du Super Administrateur avec vue d'ensemble des tenants, statistiques globales et accès rapide aux fonctionnalités",
//       },
//       {
//         title: "Figure 31 - Page Entreprise",
//         description:
//           "Interface d'affichage des informations de l'entreprise avec logo, nom, et données de contact",
//       },
//       {
//         title: "Figure 32 - Interface Ajout Entreprise",
//         description:
//           "Formulaire de création d'une nouvelle entreprise avec champs pour le nom, logo, et configuration initiale",
//       },
//       {
//         title: "Figure 33 - Modification Entreprise",
//         description:
//           "Interface de modification des informations d'une entreprise existante avec mise à jour en temps réel",
//       },
//       {
//         title: "Figure 34 - Confirmation Suppression Entreprise",
//         description:
//           "Boîte de dialogue de confirmation avant suppression d'une entreprise avec avertissement sur les conséquences",
//       },
//       {
//         title: "Figure 35 - Liste des Administrateurs",
//         description:
//           "Interface listant tous les administrateurs de l'entreprise avec leurs rôles et statuts",
//       },
//       // Sprint 2: Gestion des Comptes, Équipes et Employés
//       {
//         title: "Figure 36 - Dashboard RH",
//         description:
//           "Tableau de bord du responsable RH avec KPIs, statistiques d'équipe et alertes",
//       },
//       {
//         title: "Figure 37 - Liste des Équipes",
//         description:
//           "Interface affichant la liste complète des équipes avec filtre par département et statut",
//       },
//       {
//         title: "Figure 38 - Ajout d'une Équipe",
//         description:
//           "Formulaire de création d'une nouvelle équipe avec nomination du chef d'équipe et membres",
//       },
//       {
//         title: "Figure 39 - Modification Équipe",
//         description:
//           "Interface de modification des détails d'une équipe avec mise à jour des membres",
//       },
//       {
//         title: "Figure 40 - Confirmation Suppression Équipe",
//         description:
//           "Dialogue de confirmation pour la suppression d'une équipe avec vérification des dépendances",
//       },
//       {
//         title: "Figure 41 - Liste des Employés",
//         description:
//           "Interface de gestion des employés avec tri, filtrage par équipe/département et recherche",
//       },
//       {
//         title: "Figure 42 - Fiche Employé",
//         description:
//           "Page détaillée d'un employé avec historique des performances, objectifs atteints et recompenses",
//       },
//       {
//         title: "Figure 43 - Ajout Employé",
//         description:
//           "Formulaire complet d'ajout d'un nouvel employé avec informations personnelles et affectation d'équipe",
//       },
//       {
//         title: "Figure 44 - Modification Employé",
//         description:
//           "Interface de mise à jour des informations d'un employé avec validation des modifications",
//       },
//       {
//         title: "Figure 45 - Suppression Employé",
//         description:
//           "Confirmation de suppression d'un compte employé avec transfert des données éventuelles",
//       },
//       {
//         title: "Figure 46 - Import Employés CSV",
//         description:
//           "Interface d'import massif d'employés via fichier CSV avec validation et rapport d'erreurs",
//       },
//       {
//         title: "Figure 47 - Fiche Employé Version Mobile",
//         description:
//           "Adaptation de la fiche employé pour l'affichage mobile avec navigation simplifiée",
//       },
//       {
//         title: "Figure 48 - Interface Recherche Globale",
//         description:
//           "Moteur de recherche global avec suggestions et filtres avancés",
//       },
//       // Sprint 3: Objectifs, Catégories et Récompenses
//       {
//         title: "Figure 49 - Dashboard Objectifs",
//         description:
//           "Tableau de bord dédié aux objectifs avec vue d'ensemble des指标的 et taux de complétion",
//       },
//       {
//         title: "Figure 50 - Liste des Objectifs",
//         description:
//           "Interface listant tous les objectifs disponibles avec statut, difficulté et points associés",
//       },
//       {
//         title: "Figure 51 - Ajout Objectif",
//         description:
//           "Formulaire de création d'objectif avec définition des paliers, instructions détaillées et critères de validation",
//       },
//       {
//         title: "Figure 52 - Modification Objectif",
//         description:
//           "Interface de mise à jour des paramètres d'un objectif existant",
//       },
//       {
//         title: "Figure 53 - Suppression Objectif",
//         description:
//           "Confirmation de suppression d'un objectif avec avertissement sur les incidences",
//       },
//       {
//         title: "Figure 54 - Dashboard Catégories",
//         description:
//           "Vue d'ensemble des catégories d'objectifs avec répartition et statistiques",
//       },
//       {
//         title: "Figure 55 - Ajout Catégorie",
//         description:
//           "Création d'une nouvelle catégorie d'objectifs avec icône et description",
//       },
//       {
//         title: "Figure 56 - Dashboard Récompenses",
//         description:
//           "Tableau de bord des récompenses disponibles avec catalogue complet",
//       },
//       {
//         title: "Figure 57 - Ajout Récompense",
//         description:
//           "Interface de création d'une récompense avec image, description et points requis",
//       },
//       {
//         title: "Figure 58 - Modification Récompense",
//         description: "Mise à jour des informations d'une récompense existante",
//       },
//       {
//         title: "Figure 59 - Dashboard Points",
//         description:
//           "Interface de gestion des points avec historique des transactions et soldes",
//       },
//       {
//         title: "Figure 60 - Solde Points par Employé",
//         description:
//           "Vue détaillée du solde de points pour chaque employé avec historique des gains/dépenses",
//       },
//       // Sprint 4: Pipeline CI/CD
//       {
//         title: "Figure 61 - Schéma Architecture CI/CD",
//         description:
//           "Diagramme détaillé de l'architecture du pipeline CI/CD avec Jenkins, Docker et SonarQube",
//       },
//       {
//         title: "Figure 62 - Pipeline Jenkins Dashboard",
//         description:
//           "Interface Jenkins montrant le pipeline complet avec les différentes étapes: Build, Test, Analyse, Deploy",
//       },
//       {
//         title: "Figure 63 - SonarQube Dashboard",
//         description:
//           "Tableau de bord SonarQube avec métriques de qualité du code: bugs, vulnérabilités, code smells, couverture",
//       },
//       {
//         title: "Figure 64 - Docker Hub Registre",
//         description:
//           "Interface Docker Hub affichant les images construites, tags et historique des versions",
//       },
//       {
//         title: "Figure 65 - AWS ECR Console",
//         description:
//           "Console AWS ECR avec les repositories d'images Docker et politiques de cycle de vie",
//       },
//       // === RELEASE 2: APPLICATION MOBILE (Sprints 5-6) ===
//       // Sprint 5: Authentification Mobile & Gestion Compte
//       {
//         title: "Figure 66 - Splash Screen Mobile",
//         description:
//           "Écran de démarrage de l'application mobile Winshot Reward avec branding",
//       },
//       {
//         title: "Figure 67 - Login Mobile",
//         description:
//           "Interface d'authentification mobile pour les employés avec champs email/mot de passe",
//       },
//       {
//         title: "Figure 68 - Page d'Accueil Mobile",
//         description:
//           "Écran principal mobile avec welcome message, solde de points et accès rapide aux fonctionnalités",
//       },
//       {
//         title: "Figure 69 - Menu Navigation Mobile",
//         description:
//           "Menu hamburger avec navigation vers les différentes sections de l'application",
//       },
//       {
//         title: "Figure 70 - Profil Utilisateur Mobile",
//         description:
//           "Fiche profil de l'employé avec avatar, informations personnelles et niveau actuel",
//       },
//       {
//         title: "Figure 71 - Éditer Profil Mobile",
//         description:
//           "Interface de modification des informations personnelles du collaborateur",
//       },
//       {
//         title: "Figure 72 - Changer Mot de Passe",
//         description:
//           "Formulaire sécurisé de changement de mot de passe avec validation",
//       },
//       {
//         title: "Figure 73 - Notifications Mobile",
//         description:
//           "Centre de notifications avec historique des alertes et récompenses",
//       },
//       {
//         title: "Figure 74 - Paramètres Mobile",
//         description:
//           "Interface des paramètres avec options de langue, notifications et thème",
//       },
//       // Sprint 6: Objectifs & Récompenses Mobile
//       {
//         title: "Figure 75 - Dashboard Objectifs Mobile",
//         description:
//           "Tableau de bord mobile des objectifs avec progression personnelle et objectifs recommandés",
//       },
//       {
//         title: "Figure 76 - Liste Objectifs Mobile",
//         description:
//           "Liste des objectifs disponibles avec filtres par catégorie, statut et difficulté",
//       },
//       {
//         title: "Figure 77 - Détail Objectif Mobile",
//         description:
//           "Vue détaillée d'un objectif avec paliers, instructions, reward associée et progression",
//       },
//       {
//         title: "Figure 78 - Confirmer Validation Objectif",
//         description:
//           "Interface de confirmation de validation d'un objectif complété avec Upload de preuve",
//       },
//       {
//         title: "Figure 79 - Historique Validations",
//         description:
//           "Liste des validations d'objectifs passées avec statuts et dates",
//       },
//       {
//         title: "Figure 80 - Dashboard Récompenses Mobile",
//         description:
//           "Catalogue des récompenses disponibles avec filtrage par catégorie et points",
//       },
//       {
//         title: "Figure 81 - Liste Récompenses Mobile",
//         description:
//           "Interface de browsing des récompenses avec images, descriptions et coûts en points",
//       },
//       {
//         title: "Figure 82 - Détail Récompense Mobile",
//         description:
//           "Vue détaillée d'une récompense avec conditions, détails et bouton réclamer",
//       },
//       {
//         title: "Figure 83 - Confirmer Réclamation",
//         description:
//           "Interface de confirmation de réclamation de récompense avec résumé de la transaction",
//       },
//       {
//         title: "Figure 84 - Mes Récompenses Mobile",
//         description:
//           "Liste des récompenses réclamées par l'utilisateur avec statut de livraison",
//       },
//       {
//         title: "Figure 85 - Dashboard Leaderboard Mobile",
//         description:
//           "Classement des collaborateurs avec rankings, scores et badges",
//       },
//       {
//         title: "Figure 86 - Top 10 Equipe",
//         description:
//           "Classement des 10 premiers de l'équipe avec comparaisons et évolutions",
//       },
//       {
//         title: "Figure 87 - Top 10 Entreprise",
//         description:
//           "Classement global de l'entreprise avec filtrage par département",
//       },
//       {
//         title: "Figure 88 - Statistiques Personnelles",
//         description:
//           "Graphiques et KPIs personnels: objectifs complétés, points gagnés, ranking évolution",
//       },
//       {
//         title: "Figure 89 - Profil Administrateur Mobile",
//         description:
//           "Interface admin pour visualisation et gestion des employés depuis mobile",
//       },
//     ],
//     challenges: [
//       {
//         challenge: "Architecture Multi-Tenant Scalable",
//         solution:
//           "Implémentation d'un système de namespaces avec isolation complète des données par base MongoDB dédiée. Chaque entreprise dispose de sa propre base de données, garantissant une sécurité et performance optimales.",
//       },
//       {
//         challenge: "Pipeline CI/CD Complet",
//         solution:
//           "Configuration d'un pipeline Jenkins automatisé avec étapes: build Docker, analyse SonarQube (qualité code, bugs, vulnérabilités), pousser vers AWS ECR, et déploiement automatique. Garantit qualité continue et delivery rapide.",
//       },
//       {
//         challenge: "Synchronisation Web-Mobile Temps Réel",
//         solution:
//           "Mise en place de WebSockets pour la synchronisation instantanée des données entre l'application web administrative et l'application mobile React Native. Les validations et récompenses sont reflétées en temps réel.",
//       },
//       {
//         challenge: "Gestion des Paliers d'Objectifs",
//         solution:
//           "Développement d'un système de paliers progressifs permettant de fractionner les objectifs complexes en étapes vérifiables, avec validation par upload de preuves photographiques.",
//       },
//       {
//         challenge: "Gamification & Engagement",
//         solution:
//           "Implémentation d'un système de gamification complet avec niveaux, badges, leaderboards (équipe/entreprise), et défis quotidiens pour maintenir l'engagement des utilisateurs.",
//       },
//       {
//         challenge: "Import Massif CSV",
//         solution:
//           "Développement d'un module d'import massif d'employés via fichier CSV avec validation des données, gestion des erreurs ligne par ligne, et rapport détaillé d'import.",
//       },
//     ],
//     results: [
//       {
//         metric: "2 Releases",
//         description: "Application Web Admin + Application Mobile",
//       },
//       {
//         metric: "6 Sprints",
//         description: "Développement itératif Agile Scrum",
//       },
//       { metric: "50+ Interfaces", description: "Figure 29-89 documentées" },
//       { metric: "100%", description: "Couverture fonctionnelle métier" },
//       {
//         metric: "CI/CD",
//         description: "Automatisation Jenkins + SonarQube + AWS ECR",
//       },
//       {
//         metric: "Multi-Tenant",
//         description: "Architecture namespaces avec isolation MongoDB",
//       },
//       {
//         metric: "React Native",
//         description: "Application mobile cross-platform iOS/Android",
//       },
//     ],
//     screenshots: [
//       // Web App - Sprint 1
//       {
//         url: "",
//         caption: "Figure 29 - Interface Login Web",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Figure 30 - Dashboard Super Admin",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Figure 31-35 - Gestion Entreprise",
//         placeholder: true,
//       },
//       // Web App - Sprint 2
//       { url: "", caption: "Figure 36 - Dashboard RH", placeholder: true },
//       { url: "", caption: "Figure 37-40 - Gestion Équipes", placeholder: true },
//       {
//         url: "",
//         caption: "Figure 41-48 - Gestion Employés",
//         placeholder: true,
//       },
//       // Web App - Sprint 3
//       {
//         url: "",
//         caption: "Figure 49-53 - Module Objectifs",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Figure 54-55 - Module Catégories",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Figure 56-60 - Module Récompenses & Points",
//         placeholder: true,
//       },
//       // CI/CD - Sprint 4
//       { url: "", caption: "Figure 61 - Architecture CI/CD", placeholder: true },
//       { url: "", caption: "Figure 62 - Pipeline Jenkins", placeholder: true },
//       {
//         url: "",
//         caption: "Figure 63 - Dashboard SonarQube",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Figure 64-65 - Docker & AWS ECR",
//         placeholder: true,
//       },
//       // Mobile App - Sprint 5
//       {
//         url: "",
//         caption: "Figure 66-68 - Auth & Accueil Mobile",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Figure 69-74 - Profil & Paramètres Mobile",
//         placeholder: true,
//       },
//       // Mobile App - Sprint 6
//       {
//         url: "",
//         caption: "Figure 75-79 - Objectifs Mobile",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Figure 80-84 - Récompenses Mobile",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Figure 85-89 - Leaderboards & Stats Mobile",
//         placeholder: true,
//       },
//     ],
//   },

//   // Financial Tracker App - VisualDev
//   {
//     id: "finance-tracker",
//     type: "internship",
//     title: "Application de Suivi Financier",
//     subtitle: "App mobile Flutter pour la gestion des finances personnelles",
//     description:
//       "Application mobile Flutter pour optimiser la gestion des finances personnelles avec Firebase et interface utilisateur intuitive.",
//     longDescription:
//       "Application mobile cross-platform développée avec Flutter pour aider les utilisateurs à suivre et gérer leurs finances personnelles. L'application offre des fonctionnalités de suivi des dépenses, catégorisation automatique, et visualisation des données financières.",
//     technologies: [
//       createTech("Flutter", "mobile"),
//       createTech("Firebase", "backend"),
//       createTech("Dart", "frontend"),
//     ],
//     role: "Mobile Developer",
//     period: "Juil 2023 - Août 2023",
//     company: "VisualDev",
//     location: "Tunisie",
//     placeholder: true,
//     features: [
//       {
//         title: "Suivi des Dépenses",
//         description:
//           "Enregistrement facile des dépenses avec catégorisation automatique",
//       },
//       {
//         title: "Budgets Personnalisés",
//         description: "Création de budgets mensuels avec alertes de dépassement",
//       },
//       {
//         title: "Visualisation des Données",
//         description:
//           "Graphiques et statistiques pour comprendre les habitudes de consommation",
//       },
//       {
//         title: "Authentification Firebase",
//         description: "Sécurité renforcée avec Firebase Auth et Firestore",
//       },
//       {
//         title: "Export des Données",
//         description: "Export des rapports financiers en PDF ou CSV",
//       },
//     ],
//     challenges: [
//       {
//         challenge: "Premiers pas avec Flutter",
//         solution:
//           "Apprentissage rapide de Dart et Flutter pour développer une application complète et fonctionnelle",
//       },
//       {
//         challenge: "Architecture Firebase",
//         solution:
//           "Conception d'une structure Firestore optimisée pour les requêtes financières performantes",
//       },
//       {
//         challenge: "UI/UX Mobile",
//         solution:
//           "Création d'interfaces intuitives conformes aux guidelines Material Design",
//       },
//     ],
//     results: [
//       { metric: "100%", description: "Code shared entre iOS et Android" },
//       { metric: "4+", description: "Écrans principaux développés" },
//       { metric: "3+", description: "Types de graphiques disponibles" },
//     ],
//     screenshots: [
//       {
//         url: "",
//         caption: "Écran principal de l'application",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Vue des statistiques financières",
//         placeholder: true,
//       },
//       { url: "", caption: "Module de gestion des budgets", placeholder: true },
//     ],
//   },
//   {
//     id: "pfa-cloud",
//     type: "academic",
//     title: "Application de gestion des projets et des ressources",
//     subtitle:
//       "Application full-stack avec Azure Cloud, Elastic Stack et Kibana Dashboards",
//     description:
//       "Projet de fin d'études: Développement complet d'une application de gestion de projets d'entreprise avec migration Azure Cloud et dashboards analytiques Kibana.",
//     longDescription:
//       "Développement d'une application web full-stack pour la gestion des projets et des ressources humaines d'entreprise. L'application inclut la gestion des utilisateurs, départements, projets et tâches avec des tableaux de bord Kibana en temps réel. Migration complète vers Azure Cloud avec Azure App Service et Virtual Machines, utilisant Nginx pour le frontend React.",
//     technologies: [
//       createTech("React.js", "frontend"),
//       createTech("Node.js", "backend"),
//       createTech("ElasticSearch", "database"),
//       createTech("Kibana", "design"),
//       createTech("Azure Cloud", "cloud"),
//       createTech("Azure App Service", "cloud"),
//       createTech("Azure Virtual Machines", "cloud"),
//       createTech("Nginx", "devops"),
//       createTech("Git", "devops"),
//     ],
//     role: "Lead Developer & Cloud Architect",
//     period: "Fév 2024 - Mai 2024",
//     company: "ISAMM",
//     location: "Tunisie",
//     placeholder: true,
//     features: [
//       // // Authentication Module
//       // {
//       //   title: "Module Authentification",
//       //   description:
//       //     "Interface de login/login avec validation des identifiants, redirection selon le rôle (PDG, Administrateur, Manager, Employé)",
//       // },
//       // // User Management Module
//       // {
//       //   title: "Liste des Utilisateurs",
//       //   description:
//       //     "Interface affichant la liste complète des utilisateurs/employés du système",
//       // },
//       // {
//       //   title: "Ajout d'un Employé",
//       //   description:
//       //     "Interface de création d'un nouveau compte employé avec saisie des informations",
//       // },
//       // {
//       //   title: "Modification d'un Employé",
//       //   description:
//       //     "Interface de modification des informations d'un compte existant",
//       // },
//       // {
//       //   title: "Suppression d'un Employé",
//       //   description:
//       //     "Interface de suppression d'un compte avec mécanismes de confirmation",
//       // },
//       // // Department Management Module
//       // {
//       //   title: "Ajout d'un Département",
//       //   description:
//       //     "Interface de création d'un nouveau département avec responsable",
//       // },
//       // {
//       //   title: "Gestion des Départements",
//       //   description:
//       //     "Interface de modification et gestion des départements existants",
//       // },
//       // // Project Management Module
//       // {
//       //   title: "Ajout d'un Projet",
//       //   description:
//       //     "Interface de création d'un projet avec caractéristiques et paramètres",
//       // },
//       // // Task Management Module
//       // {
//       //   title: "Ajout d'une Tâche",
//       //   description:
//       //     "Interface de création et attribution de tâches aux employés avec dates",
//       // },
//       // // Dashboards - Company Level
//       // {
//       //   title: "Dashboard Entreprise (CEO)",
//       //   description:
//       //     "Tableau de bord stratégique avec KPIs globaux: diagrammes circulaires (répartition employés/projets), cartes indicatrices (totaux), graphiques empilés (projets/tâches par statut)",
//       // },
//       // // Dashboards - Department Level
//       // {
//       //   title: "Dashboard Département",
//       //   description:
//       //     "Dashboard dédié avec diagramme circulaire (projets par statut), KPI retard, carte proportionnelle, et tableaux matrices (top 10 employés: plus de retards, moins de retards, meilleur taux)",
//       // },
//       // // Dashboards - Project Level
//       // {
//       //   title: "Dashboard Projet",
//       //   description:
//       //     "Dashboard projet avec indicateur (nombre total tâches), diagramme circulaire (répartition par statut), et tableau matrice complet des tâches",
//       // },
//       // // Elastic Stack Integration
//       // {
//       //   title: "Cluster Elasticsearch",
//       //   description:
//       //     "Déploiement Elastic Cloud avec stockage Big Data, API de communication Node.js, indexation et recherche performante",
//       // },
//       // {
//       //   title: "Dashboards Kibana",
//       //   description:
//       //     "Création de 15+ visualisations temps réel: graphiques, diagrammes, cartes géographiques, exploration visuelle pour analyse décisionnelle",
//       // },
//       // // Azure Cloud Deployment
//       // {
//       //   title: "Azure App Service (Backend)",
//       //   description:
//       //     "Déploiement du backend Node.js sur Azure App Service via Azure Portal et VS Code extension",
//       // },
//       // {
//       //   title: "Azure Virtual Machine (Frontend)",
//       //   description:
//       //     "Machine virtuelle Azure avec Nginx pour l'hébergement du frontend React, configuration du serveur web",
//       // },
//       // {
//       //   title: "Pipeline Azure Déploiement",
//       //   description:
//       //     "Clonage Git vers VM, build avec Yarn, configuration Nginx, déploiement automatique",
//       // },
//     ],
//     challenges: [
//       // {
//       //   challenge: "Architecture microservices",
//       //   solution:
//       //     "Conception d'une architecture microservices scalable avec services faiblement couplés et déploiement découplé (App Service + VM)",
//       // },
//       // {
//       //   challenge: "Intégration Elastic Stack",
//       //   solution:
//       //     "Mise en place d'un cluster Elasticsearch avec Kibana pour la visualisation des données temps réel via API Node.js",
//       // },
//       // {
//       //   challenge: "Migration Azure Zero Downtime",
//       //   solution:
//       //     "Déploiement progressif via Azure Portal et VS Code extension avec haute disponibilité et rollback plan",
//       // },
//       // {
//       //   challenge: "Configuration Nginx sur Azure VM",
//       //   solution:
//       //     "Configuration complète du serveur web Nginx pour l'hébergement du frontend React avec load balancing",
//       // },
//     ],
//     results: [
//       // { metric: "100%", description: "Disponibilité après migration Azure" },
//       // { metric: "50+", description: "Utilisateurs actifs sur la plateforme" },
//       // { metric: "15+", description: "Dashboards Kibana déployés" },
//       // {
//       //   metric: "3 niveaux",
//       //   description: "Dashboards (Entreprise, Département, Projet)",
//       // },
//       // { metric: "7", description: "Modules fonctionnels développés" },
//     ],
//     screenshots: [
//       // {
//       //   url: "",
//       //   caption: "Figure 7 - Interface d'authentification",
//       //   placeholder: true,
//       // },
//       // {
//       //   url: "",
//       //   caption: "Figure 8 - Liste des utilisateurs",
//       //   placeholder: true,
//       // },
//       // { url: "", caption: "Figure 9 - Ajout d'un employé", placeholder: true },
//       // {
//       //   url: "",
//       //   caption: "Figure 12 - Ajout d'un département",
//       //   placeholder: true,
//       // },
//       // { url: "", caption: "Figure 14 - Ajout d'un projet", placeholder: true },
//       // { url: "", caption: "Figure 15 - Ajout d'une tâche", placeholder: true },
//       // {
//       //   url: "",
//       //   caption: "Figure 16 - Dashboard Entreprise",
//       //   placeholder: true,
//       // },
//       // {
//       //   url: "",
//       //   caption: "Figure 17 - Dashboard Département",
//       //   placeholder: true,
//       // },
//       // { url: "", caption: "Figure 18 - Dashboard Projet", placeholder: true },
//       // {
//       //   url: "",
//       //   caption: "Figure 19 - Cluster Elasticsearch",
//       //   placeholder: true,
//       // },
//       // { url: "", caption: "Figure 20 - Interface Kibana", placeholder: true },
//       // {
//       //   url: "",
//       //   caption: "Figure 21-28 - Déploiement Azure",
//       //   placeholder: true,
//       // },
//     ],
//   },

//   // EASY PLANT Project
//   {
//     id: "easy-plant",
//     type: "internship",
//     title: "EASY PLANT",
//     subtitle: "Application de gestion de pépinière agricole avec Power BI",
//     description:
//       "Application web complète pour la gestion d'une pépinière agricole avec tableaux de bord Power BI pour l'analyse décisionnelle et le reporting avancé.",
//     longDescription:
//       "Application d'entreprise pour la gestion complète d'une pépinière agricole. Le système gère l'inventaire des plantes, les commandes clients, la production, et intègre des tableaux de bord Power BI pour l'analyse décisionnelle.",
//     technologies: [
//       createTech("ASP.NET MVC", "backend"),
//       createTech("C#", "backend"),
//       createTech("Entity Framework", "backend"),
//       createTech("SQL Server", "database"),
//       createTech("Power BI", "design"),
//     ],
//     role: "Full-Stack Developer",
//     period: "Mars 2021 - Juin 2021",
//     company: "EASY Technology",
//     location: "Tunisie",
//     placeholder: true,
//     features: [
//       {
//         title: "Gestion des Stocks",
//         description:
//           "Suivi complet de l'inventaire des plantes avec catégories et quantités",
//       },
//       {
//         title: "Module Commandes",
//         description:
//           "Gestion des commandes clients avec suivi du cycle de vente",
//       },
//       {
//         title: "Suivi de Production",
//         description:
//           "Planification et suivi de la production végétale avec calendriers",
//       },
//       {
//         title: "Dashboards Power BI",
//         description:
//           "Tableaux de bord analytiques pour les KPIs de production et ventes",
//       },
//       {
//         title: "Reporting Avancé",
//         description:
//           "Génération de rapports personnalisés pour l'analyse du business",
//       },
//     ],
//     challenges: [
//       {
//         challenge: "Premiers pas avec ASP.NET",
//         solution:
//           "Formation intensive sur Entity Framework et ASP.NET MVC pour deliveries un projet de qualité professionnelle",
//       },
//       {
//         challenge: "Modélisation des données agricoles",
//         solution:
//           "Conception d'un modèle de données reflétant fidèlement les processus métier agricoles complexes",
//       },
//       {
//         challenge: "Intégration Power BI",
//         solution:
//           "Développement de modèles de données optimisés pour les visualisations Power BI interactives",
//       },
//     ],
//     results: [
//       { metric: "3 modules", description: "Applications web livrées" },
//       { metric: "10+", description: "Tableaux de bord Power BI" },
//       { metric: "100%", description: "Couverture fonctionnelle métier" },
//     ],
//     screenshots: [
//       { url: "", caption: "Dashboard Power BI principal", placeholder: true },
//       { url: "", caption: "Module gestion des stocks", placeholder: true },
//       { url: "", caption: "Rapport de production", placeholder: true },
//     ],
//   },

//   // DEVNET - Portail Web Dynamique
//   {
//     id: "devnet-portail",
//     type: "internship",
//     title: "Portail Web Dynamique",
//     subtitle: "Application de gestion des services avec October CMS",
//     description:
//       "Premier projet professionnel: portail web dynamique pour la gestion centralisée des secteurs, domaines et entreprises publiques avec contrôle d'accès basé sur les rôles.",
//     longDescription:
//       "Premier stage d'initiation professionnelle: développement d'un portail web dynamique permettant la gestion centralisée des informations du secteur public. Le système remplace une gestion Excel fragmentée par une base de données centralisée avec deux niveaux d'accès (Administrateur et Agent). Développement avec October CMS basé sur Laravel PHP Framework.",
//     technologies: [
//       createTech("October CMS", "backend"),
//       createTech("PHP", "backend"),
//       createTech("MySQL", "database"),
//       createTech("Wampserver64", "devops"),
//       createTech("Power AMC", "design"),
//       createTech("Visual Studio Code", "devops"),
//     ],
//     role: "Développeur Web - Stagiaire",
//     period: "Jan 2020 - Fév 2020",
//     company: "DEVNET",
//     location: "Tunisie",
//     placeholder: true,
//     features: [
//       // Authentication & Access Control
//       {
//         title: "Figure 16 - Interface d'Authentification",
//         description:
//           "Interface de connexion avec champs username/password, validation des identifiants, redirection selon le rôle (Admin/Agent)",
//       },
//       {
//         title: "Figure 17 - Dashboard Admin",
//         description:
//           "Tableau de bord administrateur avec statistiques: nombre de secteurs, domaines, entreprises, utilisateurs. Accès complet à toutes les fonctionnalités CRUD",
//       },
//       {
//         title: "Figure 18 - Dashboard Agent",
//         description:
//           "Tableau de bord agent avec statistiques limitées (secteurs, domaines, entreprises uniquement). Accès readonly aux utilisateurs",
//       },
//       // User Management
//       {
//         title: "Figure 19 - Gestion des Utilisateurs",
//         description:
//           "Interface de gestion des utilisateurs avec liste complète, ajout, modification et suppression. Réservé aux administrateurs",
//       },
//       // Enterprise Management
//       {
//         title: "Figure 20 - Gestion des Entreprises",
//         description:
//           "Interface de gestion CRUD des entreprises publiques avec liste, recherche et filtres",
//       },
//       {
//         title: "Figure 21 - Ajout d'une Entreprise",
//         description:
//           "Formulaire d'ajout d'une nouvelle entreprise avec informations de contact et conversion",
//       },
//       {
//         title: "Figure 22 - Suppression en Masse",
//         description:
//           "Interface de suppression de toutes les entreprises avec confirmation et avertissement",
//       },
//       {
//         title: "Figure 23 - Modification Entreprise",
//         description:
//           "Interface de modification des attributs d'une entreprise existante avec mise à jour",
//       },
//       {
//         title: "Figure 24 - Suppression Simple",
//         description:
//           "Confirmation de suppression d'une entreprise individuelle avec vérification des dépendances",
//       },
//       // UML & Design
//       {
//         title: "Figure 10 - Diagramme de Cas d'Utilisation",
//         description:
//           "Diagramme UML montrant les cas d'utilisation globaux du système: authentification, gestion utilisateurs, gestion secteurs, domaines, entreprises",
//       },
//       {
//         title: "Figure 11 - Cas d'Utilisation Utilisateurs",
//         description:
//           "Diagramme détaillé des cas d'utilisation pour la gestion des utilisateurs",
//       },
//       {
//         title: "Figure 12 - Diagramme de Classe Global",
//         description:
//           "Diagramme de classe UML montrant l'architecture complète du système avec les relations entre entités",
//       },
//       {
//         title: "Figure 13-15 - Diagrammes de Séquence",
//         description:
//           "Diagrammes de séquence UML pour: authentification, ajout utilisateur, ajout domaine - montrant les interactions chronologiques",
//       },
//     ],
//     challenges: [
//       {
//         challenge: "Premier Contact avec October CMS",
//         solution:
//           "Formation intensive sur October CMS (framework Laravel PHP) avec excellent support documentaire. Installation rapide (< 5 minutes) et création de thème personnalisé",
//       },
//       {
//         challenge: "Système Excel Fragmenteé",
//         solution:
//           "Remplacement du système Excel manuel par une base de données centralisée MySQL permettant mise à jour temps réel et vision globale des données",
//       },
//       {
//         challenge: "Contrôle d'Accès Basé sur les Rôles",
//         solution:
//           "Implémentation d'un système de permissions différenciées: Administrateur (accès complet) vs Agent (consultation et gestion limitée)",
//       },
//       {
//         challenge: "Modélisation UML",
//         solution:
//           "Conception du système avec Power AMC: diagrammes de cas d'utilisation, classes et séquences pour une architecture robuste et documentée",
//       },
//     ],
//     results: [
//       {
//         metric: "9 Interfaces",
//         description: "Figures 16-24 documentées avec captures d'écran",
//       },
//       {
//         metric: "2 Rôles",
//         description: "Administrateur et Agent avec accès différenciés",
//       },
//       {
//         metric: "4 Modules",
//         description: "Utilisateurs, Secteurs, Domaines, Entreprises",
//       },
//       { metric: "UML", description: "Modélisation complète Power AMC" },
//       {
//         metric: "Centralisé",
//         description: "Base de données MySQL remplaçant Excel",
//       },
//     ],
//     screenshots: [
//       {
//         url: "",
//         caption: "Figure 16 - Interface d'authentification",
//         placeholder: true,
//       },
//       { url: "", caption: "Figure 17 - Dashboard Admin", placeholder: true },
//       { url: "", caption: "Figure 18 - Dashboard Agent", placeholder: true },
//       {
//         url: "",
//         caption: "Figure 19 - Gestion des utilisateurs",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Figure 20 - Gestion des entreprises",
//         placeholder: true,
//       },
//       {
//         url: "",
//         caption: "Figure 21-24 - CRUD Entreprises",
//         placeholder: true,
//       },
//       { url: "", caption: "Figure 10-12 - Diagrammes UML", placeholder: true },
//     ],
//   },

//   // PyroJs Refonte Architecture - SBG TECHELECTRO
//   {
//     id: "pyrojs-refonte",
//     type: "professional",
//     title: "Refonte Architecture PyroJs",
//     subtitle: "Migration microservices et optimisation ClickHouse",
//     description:
//       "Migration d'une architecture monolithique vers microservices pour PyroJs, incluant scripts de migration et optimisation des performances analytiques.",
//     longDescription:
//       "Projet de refonte technique majeur impliquant la migration de l'application PyroJs d'une architecture monolithique vers une architecture microservices moderne. Le projet inclut la mise en place de scripts de migration de données, le développement d'un microservice de reporting IoT, et la migration de la base télémétrique vers ClickHouse.",
//     technologies: [
//       createTech("Node.js", "backend"),
//       createTech("React", "frontend"),
//       createTech("MySQL", "database"),
//       createTech("Redis", "database"),
//       createTech("RabbitMQ", "backend"),
//       createTech("ClickHouse", "database"),
//       createTech("Docker", "devops"),
//     ],
//     role: "Lead Full-Stack Developer",
//     period: "Août 2025 - Présent",
//     company: "SBG TECHELECTRO",
//     location: "Tunisie",
//     placeholder: true,
//     features: [
//       {
//         title: "Architecture Microservices",
//         description:
//           "Décomposition du monolithe en services indépendants et déployables",
//       },
//       {
//         title: "Microservice IoT Reporting",
//         description:
//           "Service dédié au traitement et reporting des données télémétriques IoT",
//       },
//       {
//         title: "Migration ClickHouse",
//         description:
//           "Migration de la base télémétrique vers ClickHouse pour performances analytiques",
//       },
//       {
//         title: "Message Queue RabbitMQ",
//         description:
//           "Implémentation de patterns de messaging asynchrone entre services",
//       },
//       {
//         title: "Cache Redis",
//         description:
//           "Mise en place d'une couche cache Redis pour optimisation des lectures",
//       },
//     ],
//     challenges: [
//       {
//         challenge: "Zero Downtime Migration",
//         solution:
//           "Stratégie de migration progressive avec blue-green deployment et rollback plan",
//       },
//       {
//         challenge: "Consistance des données",
//         solution:
//           "Implémentation de patterns Saga pour les transactions distribuées entre services",
//       },
//       {
//         challenge: "Performance analytique",
//         solution:
//           "Optimisation des requêtes ClickHouse avec materialized views et partitions",
//       },
//     ],
//     results: [
//       { metric: "10+", description: "Microservices déployés" },
//       { metric: "10x", description: "Amélioration performance analytique" },
//       { metric: "99.9%", description: "Disponibilité pendant migration" },
//     ],
//     screenshots: [
//       { url: "", caption: "Architecture microservices", placeholder: true },
//       { url: "", caption: "Dashboard IoT Reporting", placeholder: true },
//       { url: "", caption: "Monitoring ClickHouse", placeholder: true },
//     ],
//   },
// ];

// Skills by category
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

// certifications
export const certifications: Certification[] = [
  {
    name: "Certificat APTIS",
    issuer: "British Council",
    year: "2022",
  },
  {
    name: "Formation Spring Boot",
    issuer: "Self-learning",
    year: "2021",
  },
];

// Interests
export const interests: Interest[] = [
  { name: "Écriture", icon: "pen-tool" },
  { name: "Séries", icon: "tv" },
  { name: "Lecture", icon: "book-open" },
];

// Language skills
export const languages = [
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire (Certifié APTIS)" },
];

// Social links
export const socialLinks = {
  linkedIn: "https://linkedin.com/in/mohamed-amine-bouzidi",
  github: "https://github.com/MedamineBouzidi",
  email: "mailto:bouzidi.amine0301@gmail.com",
};
const pyrojsRefonte: ProfessionalProject = {
  id: "pyrojs-refonte",
  type: "professional",
  title: "Refonte Architecture PyroJs",
  subtitle: "Migration microservices et optimisation ClickHouse",
  description:
    "Migration d'une architecture monolithique vers microservices pour PyroJs, incluant scripts de migration et optimisation des performances analytiques.",
  longDescription:
    "Projet de refonte technique majeur impliquant la migration de l'application PyroJs d'une architecture monolithique vers une architecture microservices moderne...",
  technologies: [
    createTech("Node.js", "backend"),
    createTech("React", "frontend"),
    createTech("ClickHouse", "database"),
    createTech("Docker", "devops"),
  ],
  role: "Lead Full-Stack Developer",
  period: "Août 2025 - Présent",
  company: "SBG TECHELECTRO",
  location: "Tunisie",
  placeholder: true,

  // Professional specific fields
  architecture: {
    type: "Microservices",
    description:
      "Migration from monolithic to microservices architecture with 10+ independent services",
  },
  technicalStack: {
    frontend: ["React.js", "TypeScript"],
    backend: ["Node.js", "RabbitMQ"],
    database: ["MySQL", "Redis", "ClickHouse"],
    devops: ["Docker", "Jenkins", "AWS"],
  },
  microservices: [
    {
      name: "IoT Reporting Service",
      responsibility: "Real-time telemetry data processing and reporting",
      technologies: ["Node.js", "WebSocket", "ClickHouse"],
    },
    {
      name: "User Management Service",
      responsibility: "Authentication, authorization, user profiles",
      technologies: ["Node.js", "Redis", "JWT"],
    },
  ],
  performanceMetrics: [
    {
      metric: "Query Performance",
      before: "500ms",
      after: "50ms",
      improvement: "10x",
    },
    {
      metric: "System Availability",
      before: "99.5%",
      after: "99.9%",
      improvement: "+0.4%",
    },
  ],
  teamSize: 4,
  myContributions: [
    "Led the microservices architecture design and implementation",
    "Developed data migration scripts with zero downtime",
    "Implemented RabbitMQ for async communication between services",
    "Optimized ClickHouse queries achieving 10x performance improvement",
  ],
};

// ============================================
// INTERNSHIP PROJECTS
// ============================================

const winshotReward: InternshipProject = {
  id: "winshot-reward",
  type: "internship",
  title: "Winshot Reward",
  subtitle:
    "Plateforme multi-tenant de gestion des performances et récompenses",

  description:
    "Application web complète pour administrateurs et application mobile pour employés, dédiée à la gestion des performances des équipes terrain et des récompenses. Projet de fin d'études avec architecture multi-tenant et pipelines CI/CD automatisés.",

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

  role: "Développeur Full-Stack Web & Mobile - Projet de Fin d'Études (PFE)",
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
        "Conception et implémentation d'une architecture backend multi-tenant scalable avec Node.js et MongoDB, permettant une résolution dynamique des connexions aux bases de données. Réalisation d'un isolement complet des données offrant aux entreprises clientes le choix entre une infrastructure hébergée par GOFIELD ou leurs propres serveurs dédiés (base de données + FTP) - pattern BYOF (Bring Your Own FTP).",
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

    // Sprint 4 - Pipeline CI/CD
    // (Ajoutez vos captures d'écran CI/CD ici si disponibles)

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
  title: "Application de Suivi Financier",
  subtitle: "App mobile Flutter pour la gestion des finances personnelles",
  description:
    "Application mobile Flutter pour optimiser la gestion des finances personnelles avec Firebase.",
  longDescription:
    "Application mobile cross-platform développée avec Flutter pour aider les utilisateurs à suivre leurs finances...",
  technologies: [
    createTech("Flutter", "mobile"),
    createTech("Firebase", "backend"),
    createTech("Dart", "frontend"),
  ],
  role: "Mobile Developer - Stage d'été",
  period: "Juil 2023 - Août 2023",
  company: "VisualDev",
  location: "Tunisie",
  placeholder: true,

  supervisor: "Mme. Sarah Mansour - Lead Mobile Developer",
  mission:
    "Développer une application mobile de gestion financière personnelle intuitive",
  tasks: [
    {
      title: "UI/UX Design",
      description:
        "Création d'interfaces utilisateur intuitives suivant Material Design",
      technologies: ["Flutter", "Material Design"],
    },
    {
      title: "Firebase Integration",
      description: "Implémentation de l'authentification et du stockage cloud",
      technologies: ["Firebase Auth", "Firestore"],
    },
    {
      title: "Data Visualization",
      description: "Développement de graphiques et statistiques financières",
      technologies: ["Flutter Charts", "Dart"],
    },
  ],
  learnings: [
    "Développement mobile cross-platform avec Flutter",
    "Intégration Firebase (Auth, Firestore)",
    "Création de visualisations de données",
    "Gestion d'état avec Provider",
  ],
  deliverables: [
    "Application complète iOS/Android",
    "Code source documenté",
    "Guide utilisateur",
  ],
};

const easyPlant: InternshipProject = {
  id: "easy-plant",
  type: "internship",
  title: "Application de gestion de pépinière agricole",
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
- Dashboards Power BI (capacité production, productivité, top clients, top variétés)

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
        "Développé un système complet de suivi de production : lancement, greffage, porte-greffe, comptages planifiés et aléatoires. Implémenté un filtrage dynamique (date, type de tâche, mot-clé) pour une planification efficace.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "jQuery"],
    },
    {
      title: "Planification et monitoring",
      description:
        "Créé des dashboards de planning pour chef d'équipe et responsable avec validation des tâches. Ajouté un filtrage par date et type de tâche.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server"],
    },
    {
      title: "Gestion des livraisons",
      description:
        "Implémenté un workflow complet : commandes à livrer, validation avec saisie, historique des livraisons, suivi des supports clients, validation de réception.",
      technologies: ["ASP.NET MVC", "C#", "Entity Framework"],
    },
    {
      title: "Tableaux de bord Power BI",
      description:
        "Créé des tableaux de bord interactifs : capacité de production, matrice de productivité par chef d'équipe, évolution du chiffre d'affaires, top 5 variétés et top 5 clients. Intégré directement dans l'application web.",
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
      caption: "Planning pour chef d'équipe avec filtres",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/planning-responsable.png",
      caption: "Figure 3.7 - Planning pour responsable",
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

// src/data/portfolioData.ts - DEVNET Project (Cleaned Version)

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
- Des tableaux de bord statistiques temps réel
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
      caption: "Dashboard Administrateur avec statistiques",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/agent-dashboard.png",
      caption: "Dashboard Agent avec statistiques",
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

  // supervisor: "Mr. Mohamed SAIDANE - Founder & CEO",

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

  // evaluation: "Stage validé avec succès",
};
// ============================================
// ACADEMIC PROJECTS
// ============================================
// src/data/portfolioData.fr.ts - Add after other projects

const pfaCloud: AcademicProject = {
  id: "pfa-cloud",
  type: "academic",
  title: "Plateforme de gestion des projets et des ressources",
  subtitle:
    "Application full-stack avec déploiement cloud (SaaS + PaaS + IaaS) et Elastic Stack",

  description:
    "Première expérience de déploiement cloud utilisant 3 modèles (SaaS, PaaS, IaaS) avec Azure Cloud, Elasticsearch, Kibana et Jenkins CI/CD.",

  longDescription: `Ma première expérience de déploiement cloud. Application full-stack déployée avec TROIS modèles cloud dans un SEUL projet :

☁️ SaaS : Elastic Cloud (Elasticsearch + Kibana) - analytics géré
☁️ PaaS : Azure App Service (backend Node.js) - auto-scaling
☁️ IaaS : Azure VM (frontend React + Jenkins) - contrôle total

Plus : Pipeline Jenkins CI/CD pour déploiement automatique à chaque push.`,

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
  imageUrl: "/images/projects/pfa/architecture.png",

  responsibilities: [
    "Déploiement Elasticsearch + Kibana sur Elastic Cloud (SaaS) pour analytics temps réel",
    "Déploiement backend Node.js sur Azure App Service (PaaS) avec auto-scaling",
    "Déploiement frontend React sur Azure VM avec Jenkins CI/CD (IaaS)",
    "Configuration pipeline Jenkins pour déploiement automatisé à chaque push Git",
    "Intégration Elasticsearch avec Node.js pour indexation et recherche",
    "Création de 3 dashboards Kibana interactifs (Entreprise, Département, Projet)",
    "Développement d'une application full-stack avec opérations CRUD complètes",
  ],

  results: [
    "✅ Première expérience cloud (Azure + Elastic Cloud)",
    "✅ 3 modèles cloud dans un SEUL projet (SaaS + PaaS + IaaS)",
    "✅ Pipeline CI/CD automatisé avec Jenkins",
    "✅ 15+ visualisations temps réel dans Kibana",
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
      caption: "Dashboard Entreprise (Kibana)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/department-dashboard.png",
      caption: "Dashboard Département (Kibana)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/project-dashboard.png",
      caption: "Dashboard Projet (Kibana)",
      placeholder: false,
    },
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

  supervisor: "M. Ghanmi Mohamed Amine",

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
    "Dashboards Admin et Agent",
  ],

  screenshots: [
    {
      url: "/images/projects/sccglobal/login.png",
      caption: "Interface d'authentification",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/agent-dashboard.png",
      caption: "Dashboard Agent - Liste du matériel",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/admin-dashboard.png",
      caption: "Dashboard Admin - Gestion utilisateurs",
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
// Export all projects
// ============================================

export const projects: Project[] = [
  pyrojsRefonte, // Professional
  winshotReward, // Internship
  financeTracker, // Internship
  pfaCloud, // Academic
  easyPlant, // Internship
  sccGlobal,
  devnetPortal, // Internship
];
