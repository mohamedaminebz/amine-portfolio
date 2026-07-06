// src/data/portfolioData.en.ts
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

// Personal Information - English
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

// Career Timeline - English
export const timelineItems: TimelineItem[] = [
  {
    id: "work-sbg",
    date: "Aug 2025 - Apr 2026",
    title: "Full-Stack Engineer",
    company: "SBG TECHELECTRO",
    location: "Tunisia",
    description:
      "Microservices architecture, database migration, robust API development, IoT reporting microservice, ClickHouse migration",
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
    date: "Dec 2024 - Mar 2025",
    title: "Full-Stack Web & Mobile Engineer",
    company: "GOFIELD",
    location: "Tunisia",
    description:
      "Mobile interface improvements, third-party system integration (CRM, Odoo), Challenges module development",
    technologies: ["ReactJS", "NodeJS", "React Native", "MongoDB"],
    type: "work",
  },
  {
    id: "internship-pfe",
    date: "Feb 2024 - Aug 2024",
    title: "Full-Stack Developer - Final Year Internship",
    company: "GOFIELD",
    location: "Tunisia",
    description:
      "Multi-tenant system for performance/reward management, CI/CD pipelines",
    technologies: ["React.js", "Node.js", "React Native", "Docker", "Jenkins"],
    type: "internship",
  },
  {
    id: "internship-visualdev",
    date: "Jul 2023 - Aug 2023",
    title: "Mobile Developer - Summer Internship",
    company: "VisualDev",
    location: "Tunisia",
    description:
      "Financial tracking application for personal finance management",
    technologies: ["Flutter", "Firebase"],
    type: "internship",
  },
  {
    id: "internship-easy",
    date: "Mar 2021 - Jun 2021",
    title: "Web & Reporting Developer - Final Year Internship",
    company: "EASY Technology",
    location: "Tunisia",
    description:
      "EASY PLANT - agricultural nursery management application, Power BI dashboards",
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
    date: "Feb 2021 - Mar 2021",
    title: "Web Developer - Intern",
    company: "SCC Global",
    location: "Tunisia",
    description: "Equipment management web application",
    technologies: ["Angular", "Spring Boot"],
    type: "internship",
  },
  {
    id: "internship-devnet",
    date: "Jan 2020 - Feb 2020",
    title: "Web Developer - Intern",
    company: "DEVNET",
    location: "Tunisia",
    description:
      "First internship: dynamic web portal with October CMS, public sector service management, Admin/Agent access control",
    technologies: ["October CMS", "PHP", "MySQL", "UML"],
    type: "internship",
  },
];

// Education Timeline - English
export const educationItems: Education[] = [
  {
    degree: "Engineering Cycle in Applied Sciences and Technology",
    institution: "Higher Institute of Multimedia Arts of Manouba",
    year: "2024",
    description: "Specialty: Software Engineering",
  },
  {
    degree: "Applied Bachelor's in Computer Technology",
    institution: "Higher Institute of Technological Studies of Béja",
    year: "2021",
    description: "Specialty: Information Systems Development",
  },
  {
    degree: "Baccalaureate - Mathematics Section",
    institution: "ETATHAMEN 2 High School",
    year: "2018",
  },
];

// Helper to create tech stack items
const createTech = (
  name: string,
  category: TechStack["category"],
): TechStack => ({ name, category });

// ============================================
// PROFESSIONAL PROJECTS - English
// ============================================
const pyrojsRefonte: ProfessionalProject = {
  id: "pyrojs-refonte",
  type: "professional",
  title: "PyroJs Microservices Refactoring",
  subtitle: "Monolithic to microservices with 150+ REST APIs",
  description:
    "Full backend refactoring of PyroJs from a monolithic architecture to microservices, with 150+ Swagger-documented REST APIs and a BigQuery to MySQL data migration.",
  longDescription:
    "At SBG TECHELECTRO, I was the primary engineer responsible for rearchitecting PyroJs — a production-critical application suffering from deployment bottlenecks, poor scalability, and growing maintenance overhead. I redesigned the entire backend around a microservices architecture, defining the SQL schema and building 150+ REST APIs fully documented with Swagger. I also handled the production data migration from BigQuery to MySQL, ensuring integrity and consistency throughout. Toward the end of the project, I contributed to the frontend delivery phase — integrating client feedback and stabilizing the UI before the final production release.",

  // ============================================
  // 1. SUMMARY
  // ============================================
  summary:
    "Full-stack engineer responsible for the backend refactoring of PyroJs, transitioning from a monolithic architecture to a scalable microservices-based system with 150+ REST APIs.",

  // ============================================
  // 2. STORY
  // ============================================
  story: {
    challenge:
      "PyroJs was a production-critical legacy application with deployment bottlenecks, scalability limitations, and maintenance overhead.",
    action:
      "I was the primary engineer responsible for the backend refactoring. I designed the new SQL architecture, developed 150+ REST APIs with Swagger documentation, and migrated production data from BigQuery to MySQL ensuring data integrity and consistency throughout the process. I also contributed to the frontend delivery during the final validation phase, working with client feedback to help stabilize the application before production.",
    result:
      "The transition from monolithic to microservices architecture resulted in independent service deployments, eliminating the deployment bottlenecks that previously delayed releases. API documentation with Swagger improved developer experience and accelerated integration. The migration was completed successfully with full data integrity.",
  },

  // ============================================
  // 3. KEY METRICS
  // ============================================
  quickStats: [
    { value: "150+", label: "REST APIs" },
    { value: "Microservices", label: "New Architecture" },
    { value: "Full Integrity", label: "Data Migration" },
    { value: "Swagger", label: "API Documentation" },
  ],

  // ============================================
  // 4. ACHIEVEMENTS
  // ============================================
  achievements: [
    "Designed and implemented microservices architecture with 150+ REST APIs",
    "Created comprehensive API documentation with Swagger",
    "Executed data migration from BigQuery to MySQL with full data integrity",
    "Enabled faster development cycles through independent service deployments",
    "Contributed to frontend delivery and client feedback integration",
  ],

  // ============================================
  // 5. TECH STACK
  // ============================================
  technologies: [
    createTech("Node.js", "backend"),
    createTech("React.js", "frontend"),
    createTech("MySQL", "database"),
    createTech("BigQuery", "database"),
    createTech("Swagger", "design"),
  ],

  // ============================================
  // 6. BASE FIELDS
  // ============================================
  role: "Full-Stack Engineer",
  period: "Aug 2025 - Apr 2026",
  company: "SBG TECHELECTRO",
  location: "Tunisia",
  placeholder: true,
};
const iotReportingService: ProfessionalProject = {
  id: "iot-reporting-service",
  type: "professional",
  title: "IoT Reporting Microservice",
  subtitle: "Automated reporting for 2,000+ devices with cron jobs",
  description:
    "IoT microservice with 10 cron jobs automating uptime analysis, failure tracking, and scheduled report dispatch for 2,000+ devices.",
  longDescription:
    "As part of the PyroJs microservices ecosystem at SBG TECHELECTRO, I designed and built a dedicated IoT reporting microservice from scratch. The service runs 10 cron jobs that continuously monitor over 2,000 connected devices, analyzing uptime, detecting failures, and automatically attributing responsibility to the relevant group. Reports are generated and dispatched automatically per group based on each recipient's configured frequency — daily, weekly, or monthly — eliminating all manual reporting effort for operations teams.",

  // ============================================
  // 1. SUMMARY
  // ============================================
  summary:
    "Designed and developed a dedicated IoT reporting microservice handling uptime analysis, failure tracking, and automated report generation for a fleet of 2,000+ connected devices.",

  // ============================================
  // 2. STORY
  // ============================================
  story: {
    challenge:
      "With 2,000+ IoT devices in the field, operations teams had no automated way to track uptime, failures, or assign responsibility — reports were manual, inconsistent, and delayed.",
    action:
      "I built a standalone microservice with 10 cron jobs that continuously analyze device uptime, detect failures, and automatically assign responsibility per group. The service generates and dispatches reports to each recipient group based on their preferred frequency — daily, weekly, or monthly.",
    result:
      "Operations teams now receive automated, accurate reports on schedule with zero manual effort. Device accountability improved significantly and failure response times decreased thanks to timely, targeted reporting.",
  },

  // ============================================
  // 3. KEY METRICS
  // ============================================
  quickStats: [
    { value: "2,000+", label: "IoT Devices" },
    { value: "10", label: "Cron Jobs" },
    { value: "3 Frequencies", label: "Daily / Weekly / Monthly" },
    { value: "Automated", label: "Report Dispatch" },
  ],

  // ============================================
  // 4. ACHIEVEMENTS
  // ============================================
  achievements: [
    "Built a microservice with 10 cron jobs monitoring 2,000+ IoT devices",
    "Automated uptime analysis, failure detection, and responsibility attribution",
    "Implemented per-group report generation with configurable frequencies (daily, weekly, monthly)",
    "Eliminated manual reporting effort for operations teams",
    "Integrated seamlessly into the broader microservices architecture of PyroJs",
  ],

  // ============================================
  // 5. TECH STACK
  // ============================================
  technologies: [
    createTech("Node.js", "backend"),
    createTech("MySQL", "database"),
    createTech("Redis", "database"),
    createTech("RabbitMQ", "backend"),
    createTech("Cron Jobs", "backend"),
  ],

  // ============================================
  // 6. BASE FIELDS
  // ============================================
  role: "Full-Stack Engineer",
  period: "Aug 2025 - Apr 2026",
  company: "SBG TECHELECTRO",
  location: "Tunisia",
  placeholder: true,
};

const clickhouseMigration: ProfessionalProject = {
  id: "clickhouse-migration",
  type: "professional",
  title: "MySQL to ClickHouse Migration",
  subtitle: "20M rows migrated, storage reduced from 70 GB to 3 GB",
  description:
    "Performance-driven migration of 20 million IoT rows from MySQL to ClickHouse, cutting storage from 70 GB to 3 GB with full data integrity.",
  longDescription:
    "At SBG TECHELECTRO, the growing volume of IoT time-series data was pushing MySQL to its limits — 70 GB of storage, slow analytical queries, and no clear path to scale. I took ownership of evaluating and migrating to ClickHouse. I started by running systematic performance benchmarks to identify the optimal schema for the data access patterns, then wrote and executed migration scripts to move 20 million rows from MySQL to ClickHouse, validating integrity at each stage. The result was a 95%+ reduction in storage (70 GB down to 3 GB) and significantly faster analytical queries, giving the platform a solid foundation for future IoT data growth.",

  // ============================================
  // 1. SUMMARY
  // ============================================
  summary:
    "Led the performance benchmarking and full data migration from MySQL to ClickHouse, achieving a 95%+ reduction in storage footprint and dramatically improving analytical query performance.",

  // ============================================
  // 2. STORY
  // ============================================
  story: {
    challenge:
      "The existing MySQL setup was storing large volumes of IoT time-series data, resulting in 70 GB of storage and increasingly slow analytical queries that couldn't scale with the growing device fleet.",
    action:
      "I ran a series of performance tests to identify the optimal ClickHouse schema for the data access patterns. I then wrote and executed migration scripts to move 20 million rows from MySQL to ClickHouse, validating data integrity at each stage of the process.",
    result:
      "Storage dropped from 70 GB to just 3 GB — a 95%+ reduction — while analytical query performance improved significantly. The migration was completed with full data integrity and no data loss.",
  },

  // ============================================
  // 3. KEY METRICS
  // ============================================
  quickStats: [
    { value: "20M", label: "Rows Migrated" },
    { value: "70 GB → 3 GB", label: "Storage Optimized" },
    { value: "95%+", label: "Storage Reduction" },
    { value: "Zero Loss", label: "Data Integrity" },
  ],

  // ============================================
  // 4. ACHIEVEMENTS
  // ============================================
  achievements: [
    "Reduced storage from 70 GB to 3 GB — a 95%+ reduction",
    "Successfully migrated 20 million rows from MySQL to ClickHouse",
    "Designed and benchmarked optimal ClickHouse schema for IoT time-series data",
    "Wrote and executed migration scripts with full data integrity validation",
    "Unlocked scalable analytical query performance for growing device fleet",
  ],

  // ============================================
  // 5. TECH STACK
  // ============================================
  technologies: [
    createTech("ClickHouse", "database"),
    createTech("MySQL", "database"),
    createTech("Node.js", "backend"),
    createTech("Redis", "database"),
    createTech("RabbitMQ", "backend"),
  ],

  // ============================================
  // 6. BASE FIELDS
  // ============================================
  role: "Full-Stack Engineer",
  period: "Aug 2025 - Apr 2026",
  company: "SBG TECHELECTRO",
  location: "Tunisia",
  placeholder: true,
};

const winshotIntegration: ProfessionalProject = {
  id: "winshot-integration",
  type: "professional",
  title: "Winshot Reward — Integrations & Challenges Module",
  subtitle:
    "Extending the platform with external data sync and a new reward model",
  description:
    "Extended Winshot Reward with an opt-in integration layer connecting Odoo Sales and Winshot CRM, and delivered the Challenges module — a new reward model giving managers greater flexibility in how they structure employee incentives.",
  longDescription:
    "Winshot Reward is a gamification platform at GOFIELD built for franchise companies to track employee performance and distribute rewards. As the platform matured, I took on two feature extensions. On the integration side, I designed and implemented an opt-in data sync layer — enabling companies to connect their existing tools directly to the platform. The first two connectors built were Odoo Sales, integrated via webhooks for real-time event-driven synchronization, and Winshot CRM, integrated via polling for periodic data reconciliation. On the product side, I designed and shipped the Challenges module — a new reward model that gives managers a different way to define how employees earn points, with more flexibility than the existing goals system. Both additions are independent features that expand what the platform can offer without affecting existing functionality.",

  // ============================================
  // 1. SUMMARY
  // ============================================
  summary:
    "Delivered two major extensions to Winshot Reward: an opt-in integration layer for third-party data sync, and the Challenges module — a new flexible reward model complementing the existing goals system.",

  // ============================================
  // 2. STORY
  // ============================================
  story: {
    challenge:
      "As Winshot Reward matured, the team identified two areas to expand the platform's value: enabling companies to sync their existing tools with the platform rather than relying solely on manual data entry, and giving managers a more flexible reward model beyond the structured milestone-based goals system.",
    action:
      "I built an opt-in integration layer with two initial connectors — Odoo Sales via webhooks for real-time event-driven sync, and Winshot CRM via polling for periodic reconciliation. In parallel, I designed and shipped the Challenges module: a new reward model where managers have more control over how employees earn points, with a structure distinct from the existing goals system.",
    result:
      "Winshot Reward launched two new capabilities: a scalable integration layer ready to onboard additional connectors, and a second reward model that broadens how managers can design incentive programs on the platform.",
  },

  // ============================================
  // 3. KEY METRICS
  // ============================================
  quickStats: [
    { value: "2", label: "Integrations Delivered" },
    { value: "Real-Time", label: "Odoo Sales Sync" },
    { value: "Periodic", label: "Winshot CRM Sync" },
    { value: "1 Module", label: "Challenges System" },
  ],

  // ============================================
  // 4. ACHIEVEMENTS
  // ============================================
  achievements: [
    "Designed and implemented an opt-in third-party integration layer for Winshot Reward",
    "Integrated Odoo Sales via webhooks for real-time, event-driven performance data sync",
    "Integrated Winshot CRM via polling for periodic data reconciliation",
    "Designed and shipped the Challenges module — a new reward model with greater managerial flexibility",
    "Delivered both features as independent extensions with no impact on existing platform functionality",
  ],

  // ============================================
  // 5. TECH STACK
  // ============================================
  technologies: [
    createTech("React.js", "frontend"),
    createTech("Node.js", "backend"),
    createTech("React Native", "frontend"),
    createTech("MongoDB", "database"),
    createTech("Webhooks", "backend"),
  ],

  // ============================================
  // 6. BASE FIELDS
  // ============================================
  role: "Full-Stack Engineer",
  period: "Dec 2024 - Mar 2025",
  company: "GOFIELD",
  location: "Tunisia",
  placeholder: true,
};
// ============================================
// INTERNSHIP PROJECTS - English
// ============================================

// const winshotReward: InternshipProject = {
//   id: "winshot-reward",
//   type: "internship",
//   title: "Winshot Reward",
//   subtitle: "Multi-tenant performance and rewards management platform",
//   description:
//     "Complete admin web app and mobile app for managing field team performance and rewards. Final year project with multi-tenant architecture and automated CI/CD pipelines.",
//   longDescription:
//     "Multi-tenant web and mobile application for managing performance and rewards of field teams...",
//   technologies: [
//     createTech("React.js", "frontend"),
//     createTech("React Native", "mobile"),
//     createTech("Node.js", "backend"),
//     createTech("MongoDB", "database"),
//   ],
//   role: "Full-Stack Web & Mobile Developer - Final Year Internship",
//   period: "Feb 2024 - Aug 2024",
//   company: "GOFIELD",
//   location: "Tunisia",
//   placeholder: true,
//   supervisor: "Mr. Ahmed Ben Ali - Technical Lead",
//   mission:
//     "Develop a complete multi-tenant platform for managing field team performance with gamification",
//   tasks: [
//     {
//       title: "Multi-tenant Architecture",
//       description:
//         "Design and implementation of architecture with data isolation per company",
//       technologies: ["MongoDB", "Node.js", "Namespaces"],
//     },
//     {
//       title: "React Native Mobile App",
//       description:
//         "Development of cross-platform application for field employees",
//       technologies: ["React Native", "Redux", "WebSocket"],
//     },
//     {
//       title: "CI/CD Pipeline",
//       description: "Automated deployment setup with Jenkins and Docker",
//       technologies: ["Jenkins", "Docker", "AWS ECR", "SonarQube"],
//     },
//   ],
//   learnings: [
//     "Mastery of multi-tenant architecture with MongoDB",
//     "Cross-platform development with React Native",
//     "Complete CI/CD pipeline implementation",
//     "Agile project management with 6 sprints",
//   ],
//   deliverables: [
//     "Admin web application (Release 1)",
//     "React Native mobile application (Release 2)",
//     "Automated CI/CD pipeline",
//     "Complete technical documentation",
//     "50+ documented user interfaces",
//   ],
//   evaluation: "Excellent - Project validated with honors",
// };
const winshotReward: InternshipProject = {
  id: "winshot-reward",
  type: "internship",
  title: "Winshot Reward",
  subtitle: "Multi-tenant performance and rewards management platform",
  description:
    "Complete admin web app and mobile app for managing field team performance and rewards. Final year project with multi-tenant architecture and automated CI/CD pipelines.",
  longDescription:
    "Winshot Reward is a complete solution for managing employee performance objectives and rewards. Developed during my final year internship at GOFIELD, this multi-tenant platform meets the needs of franchise-based companies. It consists of a web application for administrators (managing objectives, rewards, teams, and employees) and a mobile application for field employees (tracking their progress, accumulating points, and redeeming rewards). The entire development cycle is automated using CI/CD pipelines, ensuring reliable and efficient deployment.",

  // --- Technologies mises à jour avec celles du rapport ---
  technologies: [
    createTech("React.js", "frontend"),
    createTech("React Native", "mobile"),
    createTech("Node.js", "backend"),
    createTech("MongoDB", "database"),
    createTech("Docker", "devops"),
    createTech("Jenkins", "devops"),
    createTech("SonarQube", "devops"),
  ],

  // --- Informations générales ---
  role: "Full-Stack Web & Mobile Developer - Final Year Internship (PFE)",
  period: "Feb 2024 - Aug 2024 ",
  company: "GOFIELD (WINSHOT)",
  location: "Tunis, Tunisia",
  placeholder: false, // On passe à false car on a toutes les infos
  imageUrl: "/images/projects/winshot-reward/web-login.png",
  // --- Mission principale extraite du rapport ---

  mission:
    "Design and develop a multi-tenant SaaS platform to manage performance goals (OKRs) and rewards for field teams, incorporating CI/CD pipelines to automate the development lifecycle.",
  tasks: [
    {
      title: "Multi-Tenant Backend Architecture",
      description:
        "Designed and implemented a scalable multi-tenant backend using Node.js and MongoDB with dynamic database connection resolution. Engineered complete data isolation enabling client companies to choose between GOFIELD-hosted infrastructure or their own dedicated database and FTP servers (BYOF - Bring Your Own FTP pattern).",
      technologies: ["Node.js", "MongoDB", "Mongoose", "JWT"],
    },
    {
      title: "Administrator Web Platform",
      description:
        "Built a comprehensive React.js dashboard for enterprise administrators featuring: hierarchical team management, employee CRUD operations, objective/goal configuration (with categories, levels, and point-based rewards), reward catalog management, and administrative approval workflows for employee progress submissions and reward redemptions.",
      technologies: ["React.js", "React Router", "Axios", "i18n"],
    },
    {
      title: "Cross-Platform Mobile Application",
      description:
        "Developed a React Native mobile solution for field employees with features including: personalized objective dashboards, progress tracking with manual/automatic logging, real-time point accumulation, gamified rankings (team and individual leaderboards), and an integrated reward store for point redemption.",
      technologies: [
        "React Native",
        "Redux Toolkit",
        "React Navigation",
        "i18n",
      ],
    },
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Engineered end-to-end CI/CD pipelines using Jenkins on Azure Linux VM. Integrated GitLab webhooks for automated builds on merge requests and release branches. Implemented SonarQube for continuous code quality inspection, Docker containerization for environment consistency, and automated deployment via Docker Compose with image storage on AWS ECR.",
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
      title: "Identity & Access Management Integration",
      description:
        "Integrated GOFIELD's internal Identity Provider (IDP) to deliver unified authentication and role-based access control (RBAC) across web and mobile applications, supporting Super Admin, Admin, and Employee personas with JWT-based session management.",
      technologies: ["OAuth2", "JWT", "Identity Provider"],
    },
  ],
  // --- Résultats d'apprentissage précis ---
  learnings: [
    "Architected and implemented production-ready multi-tenant SaaS infrastructure with dynamic database routing and flexible data sovereignty options (BYOF).",
    "Established complete DevOps lifecycle automation including CI/CD pipelines, containerization, cloud registry integration, and continuous code quality monitoring with SonarQube.",
    "Delivered cross-platform mobile solution with React Native, achieving code reuse across iOS and Android while maintaining native-like performance.",
    "Successfully applied Scrum in an industrial internship context, delivering two major releases across 6 sprints with consistent stakeholder feedback integration.",
    "Designed and implemented a gamification engine (point-based rewards, level progression, achievement tracking) aligned with OKR (Objectives and Key Results) methodology.",
    "Integrated five heterogeneous services into a cohesive platform: Identity Provider, MongoDB clusters, FTP servers, AWS S3 storage, and email notification services.",
  ],
  deliverables: [],
  screenshots: [
    // Sprint 1 - Web Application
    {
      url: "/images/projects/winshot-reward/web-login.png",
      caption: "Authentication Interface (Web App)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-tenants-list.jpg",
      caption: "Tenants Management - List View",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-tenant.jpg",
      caption: "Add New Tenant - Configuration Wizard",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-tenant.jpg",
      caption: "Delete Tenant - Security Confirmation",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-companies-list.jpg",
      caption: "Companies Management - List View",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-company.jpg",
      caption: "Add New Company - Two-Step Form (Company + Admin)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-company.jpg",
      caption: "Delete Company - Final Warning",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-language.jpg",
      caption: "Multi-language Support (i18n)",
      placeholder: false,
    },

    // Sprint 2 - Web Application (Teams, Levels, Employees)
    {
      url: "/images/projects/winshot-reward/web-profile.jpg",
      caption: "Profile Management",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-change-password.jpg",
      caption: "Change Password Interface",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-teams-list.jpg",
      caption: "Teams Management - List View",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-team.jpg",
      caption: "Add New Team",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-edit-team.jpg",
      caption: "Edit Team Information",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-team.jpg",
      caption: "Delete Team Confirmation",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-levels-list.jpg",
      caption: "Levels Customization - List View",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-level.jpg",
      caption: "Add New Level ",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-edit-level.jpg",
      caption: "Edit Level Information",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-employees-list.jpg",
      caption: "Employees Management - List View",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-employee.jpg",
      caption: "Add New Employee (Team selection + auto-assignment)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-edit-employee.jpg",
      caption: "Edit Employee Information",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-employee.jpg",
      caption: "Delete Employee Confirmation",
      placeholder: false,
    },

    // Sprint 3 - Web Application (Objectives, Categories, Rewards)
    {
      url: "/images/projects/winshot-reward/web-goals-list.jpg",
      caption: "Objectives Management - List View with Filters",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-goal.jpg",
      caption: "Create New Objective (Title, Category, Levels, Instructions)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-edit-goal.jpg",
      caption: "Edit Objective Configuration",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-goal.jpg",
      caption: "Delete Objective Confirmation",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-goal-assignments-users.jpg",
      caption: "Objective Assignments - Employees View",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-assign-goal-users.jpg",
      caption: "Assign Objective to Employees",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-unassign-goal-user.jpg",
      caption: "Unassign Objective from Employee",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-goal-assignments-teams.jpg",
      caption: "Objective Assignments - Teams View with Progress",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-assign-goal-teams.jpg",
      caption: "Assign Objective to Teams (Multi-select)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-unassign-goal-team.jpg",
      caption: "Unassign Objective from Team",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-goal-progress.jpg",
      caption: "Objective Progress Tracking - List View",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-approve-progress.jpg",
      caption: "Approve Employee Progress",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-reject-progress.jpg",
      caption: "Reject Employee Progress with Comment",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-rewards-list.jpg",
      caption: "Rewards Management - List View with Filters",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-add-reward.jpg",
      caption: "Create New Reward (Title, Points, Validation Type)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-edit-reward.jpg",
      caption: "Edit Reward Configuration",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-delete-reward.jpg",
      caption: "Delete Reward Confirmation",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-orders-list.jpg",
      caption: "Reward Orders Management - List View",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-approve-order.jpg",
      caption: "Approve Reward Order",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-reject-order.jpg",
      caption: "Reject Reward Order with Comment",
      placeholder: false,
    },

    // Sprint 4 - CI/CD Pipeline

    // Sprint 5 - Mobile Application
    {
      url: "/images/projects/winshot-reward/mobile/login.jpg",
      caption: "Mobile Authentication Screen",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/home.jpg",
      caption: "Mobile Home Dashboard",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/sidebar.jpg",
      caption: "Mobile Sidebar Navigation",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/settings.jpg",
      caption: "Mobile Settings Interface",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/profile.jpg",
      caption: "Profile Management",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/change-password.jpg",
      caption: "Change Password Interface",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/language.jpg",
      caption: "Mobile Language Selection",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/home-en.jpg",
      caption: "Mobile Home Dashboard (English)",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/forgot-password-1.jpg",
      caption: "Forgot Password - Email Input",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/forgot-password-2.jpg",
      caption: "Forgot Password - Confirmation",
      placeholder: false,
      isMobile: true,
    },

    // Sprint 6 - Mobile Application (Objectives & Rewards)
    {
      url: "/images/projects/winshot-reward/mobile/goals-list.jpg",
      caption: "Objectives List with Filters",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/goals-filter.jpg",
      caption: "Filter Objectives Interface",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/goal-details.jpg",
      caption: "Objective Details View",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/increment-progress.jpg",
      caption: "Increment Objective Progress",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/rankings-teams.jpg",
      caption: "Rankings by Team",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/rankings-employees.jpg",
      caption: "Rankings by Employee",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/rewards-list.jpg",
      caption: "Rewards Catalog",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/rewards-filter.jpg",
      caption: "Filter Rewards",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/reward-details.jpg",
      caption: "Reward Details",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/order-reward.jpg",
      caption: "Order Reward Confirmation",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/orders-list.jpg",
      caption: "My Reward Orders",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/orders-filter.jpg",
      caption: "Filter Reward Orders",
      placeholder: false,
      isMobile: true,
    },
  ],
};
const financeTracker: InternshipProject = {
  id: "finance-tracker",
  type: "internship",
  title: "Personal Finance Management Application",
  subtitle:
    "Cross-platform mobile app for tracking income, expenses, and financial statistics with Firebase",

  description:
    "Developed a Flutter mobile application for personal finance management with Firebase authentication, cloud storage, and real-time data synchronization. Features guest mode, transaction management, and interactive dashboards.",

  longDescription: `**Problem:** Client needed a modern mobile solution to track personal finances. Existing methods lacked data persistence, user-friendly interfaces, and advanced visualization features.

**Solution:** Built a cross-platform Flutter application with:
- Guest mode for temporary use (local storage with Hive)
- Authenticated mode (Firebase Auth + Google Sign-In)
- Transaction management (income/expenses with categories)
- Interactive dashboards with charts (weekly/monthly/yearly views)
- Cloud data synchronization across devices
- Profile management with image upload

**Key Features:**
- 🔐 Email/Password + Google Authentication
- 💰 Add, edit, delete financial transactions
- 📊 Visual statistics with line charts
- ☁️ Cloud backup with Firestore
- 🖼️ Profile picture upload to Firebase Storage
- 🌙 Local storage with Hive for guest mode`,

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

  role: "Mobile Developer - Summer Internship",
  period: "Jul 2023 - Aug 2023",
  company: "Visual Dev",
  location: "Manouba, Tunisia",
  placeholder: false,
  imageUrl: "/images/projects/finance-tracker/logoWallet.png",

  mission:
    "Develop an intuitive cross-platform mobile application for personal finance management with both guest and authenticated modes, featuring transaction tracking, visual statistics, and cloud synchronization.",

  tasks: [
    {
      title: "Authentication System",
      description:
        "Implemented email/password authentication and Google Sign-In using Firebase Auth. Created guest mode with local data persistence for users without accounts.",
      technologies: ["Flutter", "Firebase Auth", "Google Sign-In"],
    },
    {
      title: "Transaction Management",
      description:
        "Built complete CRUD operations for income and expense transactions with category selection, date picker, and amount validation.",
      technologies: ["Flutter", "Firestore", "Hive"],
    },
    {
      title: "Data Visualization",
      description:
        "Created interactive dashboards with line charts showing account balance evolution. Implemented weekly, monthly, and yearly statistics views.",
      technologies: ["Flutter Charts", "Dart", "Firestore"],
    },
    {
      title: "Cloud Storage & Synchronization",
      description:
        "Integrated Firestore for secure data persistence and Firebase Storage for profile images. Enabled real-time sync across multiple devices.",
      technologies: ["Firestore", "Firebase Storage", "Flutter"],
    },
  ],

  learnings: [
    "Cross-platform mobile development with Flutter framework",
    "Firebase ecosystem (Authentication, Firestore, Storage)",
    "State management with Provider pattern",
    "Local data persistence with Hive NoSQL database",
    "Google Sign-In integration",
    "Data visualization with Flutter charts",
  ],

  deliverables: [
    "Complete Flutter application for iOS and Android",
    "Email/Password + Google authentication",
    "Guest mode with local storage",
    "Transaction management (income/expenses)",
    "Interactive dashboards with charts",
    "Cloud backup and synchronization",
    "Profile management with image upload",
  ],

  screenshots: [
    {
      url: "/images/projects/finance-tracker/splash.jpg",
      caption: "Splash Screen (Login/Register/Guest)",
      placeholder: false,
      isMobile: true, // Add this
    },
    {
      url: "/images/projects/finance-tracker/login.png",
      caption: "Authentication Interface (Email + Google)",
      placeholder: false,
      isMobile: true, // Add this
    },
    {
      url: "/images/projects/finance-tracker/register.png",
      caption: "Registration Interface",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/home.png",
      caption: "Home Dashboard",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/add-transaction.png",
      caption: "Add Transaction",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/stats-weekly.png",
      caption: "Weekly Statistics",
      placeholder: false,
      isMobile: true, // Add this
    },
    {
      url: "/images/projects/finance-tracker/stats-monthly.png",
      caption: "Monthly Statistics",
      placeholder: false,
      isMobile: true, // Add this
    },
    {
      url: "/images/projects/finance-tracker/stats-yearly.png",
      caption: "Yearly Statistics",
      placeholder: false,
      isMobile: true, // Add this
    },
    {
      url: "/images/projects/finance-tracker/profile.jpg",
      caption: "Profile Management",
      placeholder: false,
      isMobile: true,
    },
  ],
};

//

//   id: "easy-plant",
//   type: "internship",
//   title: "EASY PLANT",
//   subtitle: "Agricultural nursery management application with Power BI",
//   description:
//     "Complete web application for agricultural nursery management with Power BI dashboards for decision-making analysis and advanced reporting.",
//   longDescription:
//     "Enterprise application for complete agricultural nursery management...",
//   technologies: [
//     createTech("ASP.NET MVC", "backend"),
//     createTech("C#", "backend"),
//     createTech("SQL Server", "database"),
//     createTech("Power BI", "design"),
//   ],
//   role: "Full-Stack Developer - Final Year Internship",
//   period: "Mar 2021 - Jun 2021",
//   company: "EASY Technology",
//   location: "Tunisia",
//   placeholder: true,
//   supervisor: "Mr. Karim Ben Slimane - Project Manager",
//   mission:
//     "Modernize agricultural nursery management with a complete web solution",
//   tasks: [
//     {
//       title: "Inventory Management",
//       description: "Development of plant inventory module",
//       technologies: ["ASP.NET MVC", "Entity Framework"],
//     },
//     {
//       title: "Orders Module",
//       description: "Customer order management system",
//       technologies: ["C#", "SQL Server"],
//     },
//     {
//       title: "Power BI Dashboard",
//       description: "Creation of analytical dashboards",
//       technologies: ["Power BI", "DAX"],
//     },
//   ],
//   learnings: [
//     "Development with ASP.NET MVC and Entity Framework",
//     "SQL Server database modeling",
//     "Professional Power BI dashboard creation",
//     "Complete enterprise project lifecycle",
//   ],
//   deliverables: [
//     "Complete web application (3 modules)",
//     "10+ Power BI dashboards",
//     "Technical and functional documentation",
//   ],
// };
const pfaCloud: AcademicProject = {
  id: "pfa-cloud",
  type: "academic",
  title: "Project & Resource Management Platform",
  subtitle:
    "Full-stack application with cloud deployment (SaaS + PaaS + IaaS) and Elastic Stack",

  description:
    "First cloud deployment experience using 3 cloud models (SaaS, PaaS, IaaS) with Azure Cloud, Elasticsearch, Kibana, and Jenkins CI/CD.",

  longDescription: `My first cloud deployment experience. Built a full-stack application and deployed it using THREE cloud models in ONE project:

    ☁️ SaaS: Elastic Cloud (Elasticsearch + Kibana) - managed data analytics
    ☁️ PaaS: Azure App Service (Node.js backend) - auto-scaling
    ☁️ IaaS: Azure VM (React frontend + Jenkins) - full control

      Plus: Jenkins CI/CD pipeline for automated deployment on every push.`,

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

  role: "Full-Stack Developer & Cloud Architect",
  period: "Feb 2023 - May 2023",
  company: "ISAMM",
  location: "Tunisia",
  placeholder: false,

  responsibilities: [
    "Deployed Elasticsearch + Kibana on Elastic Cloud (SaaS) for real-time analytics",
    "Deployed Node.js backend on Azure App Service (PaaS) with auto-scaling",
    "Deployed React frontend on Azure VM with Jenkins CI/CD (IaaS)",
    "Set up Jenkins pipeline for automated deployment on Git push",
    "Integrated Elasticsearch with Node.js for data indexing and search",
    "Created 3 interactive Kibana dashboards (Company, Department, Project)",
    "Built full-stack app with complete CRUD operations",
  ],

  results: [
    "First cloud deployment experience (Azure + Elastic Cloud)",
    "3 cloud models in ONE project (SaaS + PaaS + IaaS)",
    "Automated CI/CD pipeline with Jenkins",
    "15+ real-time visualizations in Kibana",
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
      caption: "Hybrid Cloud Architecture (SaaS + PaaS + IaaS)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/login.png",
      caption: "Login Interface",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/user-list.png",
      caption: "User Management",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/add-user.png",
      caption: "Add Employee",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/edit-user.png",
      caption: "Edit Employee",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/delete-user.png",
      caption: "Delete Employee",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/add-department.png",
      caption: "Add Department",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/add-project.png",
      caption: "Add Project",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/add-task.jpg",
      caption: "Add Task",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/company-dashboard.png",
      caption: "Company Dashboard (Kibana)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/department-dashboard.png",
      caption: "Department Dashboard (Kibana)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/project-dashboard.png",
      caption: "Project Dashboard (Kibana)",
      placeholder: false,
    },
  ],
  imageUrl: "/images/projects/pfa/architecture.png",
};
// const easyPlant: InternshipProject = {
//   id: "easy-plant",
//   type: "internship",
//   title: "Application de gestion de pépinière agricole",
//   subtitle:
//     "Module de gestion de production, livraisons et statistiques avec Power BI",

//   description:
//     "Développement d'un module web pour la gestion de production, des plannings, des livraisons et des stocks d'une pépinière agricole, avec tableaux de bord Power BI.",

//   longDescription: `**Problématique :** La pépinière gérait ses activités (commandes, productions, plannings, livraisons) avec des fichiers Excel et des fiches manuscrites, causant une absence de vision globale, des problèmes de planification, et un traitement lent des données.

// **Solution :** Développement d'une application web avec ASP.NET MVC 5 (C#), SQL Server, Entity Framework (Database First), Bootstrap, jQuery, et Power BI pour :
// - Gestion des productions (lancement, greffage, porte greffe, comptages planifiés/aléatoires, clôture)
// - Gestion des plannings (consultation avec filtres, validation des tâches)
// - Gestion des livraisons (validation, historique, supports chez clients)
// - Suivi des stocks (semences clients, semences pépinière, supports)
// - Dashboards Power BI (capacité production, productivité, top clients, top variétés)

// **Méthodologie :** Projet développé avec la méthode agile Scrum sur 3 sprints (3 mois).`,

//   technologies: [
//     createTech("ASP.NET MVC 5", "backend"),
//     createTech("C#", "backend"),
//     createTech("SQL Server", "database"),
//     createTech("Entity Framework", "database"),
//     createTech("Power BI", "design"),
//     createTech("Bootstrap", "frontend"),
//     createTech("jQuery", "frontend"),
//   ],

//   role: "Développeur Full-Stack - Projet de Fin d'Études",
//   period: "Mars 2021 - Juin 2021",
//   company: "EASY Technology",
//   location: "Béja, Tunisie",
//   placeholder: true,
//   imageUrl: "/images/projects/easyplant/planning.png",

//   supervisor:
//     "M. Ali BEMRI (Encadrant professionnel) + Mme. Marwa CHAABANI (Encadrante académique)",

//   mission:
//     "Moderniser la gestion d'une pépinière agricole en remplaçant les fichiers Excel et fiches manuscrites par une application web centralisée pour la production, les livraisons, les plannings et les stocks.",

//   tasks: [
//     {
//       title: "Production Management",
//       description:
//         "Built complete production tracking system with launch, grafting, rootstock, planned and random counting. Implemented dynamic filtering (date range, task type, keyword) and color-coded visualization (red/green) for delay identification.",
//       technologies: ["ASP.NET MVC", "C#", "SQL Server", "jQuery"],
//     },
//     {
//       title: "Planning & Monitoring",
//       description:
//         "Developed planning dashboards for team leader and manager with task validation. Red indicators show delayed tasks, green shows on-time tasks. Filtering by date and task type.",
//       technologies: ["ASP.NET MVC", "C#", "SQL Server"],
//     },
//     {
//       title: "Delivery Management",
//       description:
//         "Implemented end-to-end delivery workflow: pending orders list, validation with data entry, delivery history tracking, client equipment monitoring, and reception validation.",
//       technologies: ["ASP.NET MVC", "C#", "Entity Framework"],
//     },
//     {
//       title: "Power BI Dashboards",
//       description:
//         "Created interactive dashboards with KPIs: production capacity (color-coded gauge), team leader productivity matrix, revenue trends, top 5 products, and top 5 clients. Integrated directly into the web application.",
//       technologies: ["Power BI", "DAX", "SQL Server"],
//     },
//   ],
//   learnings: [
//     "Méthodologie agile Scrum (planification, sprints, backlog)",
//     "Framework ASP.NET MVC 5 et Entity Framework (Database First)",
//     "Création de dashboards interactifs avec Power BI (KPIs, jauges, graphiques)",
//     "Gestion de projet en environnement professionnel",
//   ],

//   deliverables: [
//     "3 sprints livrés (production, livraisons, stocks/statistiques)",
//     "Application web complète avec interfaces planning, production, livraison",
//     "Dashboards Power BI intégrés (capacité production, top 5 variétés, top 5 clients, productivité chefs d'équipe)",
//     "Base de données SQL Server centralisée",
//   ],

//   screenshots: [
//     {
//       url: "/images/projects/easyplant/planning-chef.png",
//       caption: "Figure 3.6 - Planning pour chef d'équipe (filtrage temps/type)",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/planning-responsable.png",
//       caption: "Figure 3.7 - Planning pour responsable",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/lancement-production.png",
//       caption: "Figure 3.8 - Interface lancement production",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/valider-comptage.png",
//       caption: "Figure 3.9 - Interface validation comptage",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/ajouter-comptage.png",
//       caption: "Figure 3.10 - Interface ajout comptage aléatoire",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/avancement-production.png",
//       caption: "Figure 3.11 - Interface avancement production",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/login.png",
//       caption: "Figure 4.5 - Interface authentification",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/livraisons.png",
//       caption: "Figure 4.6 - Interface commandes à livrer",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/valider-livraison.png",
//       caption: "Figure 4.7 - Interface validation livraison",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/historiques-livraison.png",
//       caption: "Figure 4.8 - Interface historique livraisons",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/supports-clients.png",
//       caption: "Figure 4.9 - Interface supports chez clients",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/stock-supports.png",
//       caption: "Figure 5.3 - Interface stock supports",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/stock-semences.png",
//       caption: "Figure 5.4 - Interface stock semences",
//       placeholder: true,
//     },
//     {
//       url: "/images/projects/easyplant/dashboard-powerbi.png",
//       caption:
//         "Figures 5.9-5.10 - Tableaux de bord Power BI (KPIs, jauges, top clients)",
//       placeholder: true,
//     },
//   ],
// };

const easyPlant: InternshipProject = {
  id: "easy-plant",
  type: "internship",
  title: "Agricultural Nursery Management Application",
  subtitle:
    "Production, delivery and statistics management module with Power BI",

  description:
    "Development of a web module for production, planning, delivery and inventory management for an agricultural nursery, with Power BI dashboards.",

  longDescription: `**Problem:** The nursery managed its activities (orders, production, planning, deliveries) using Excel files and handwritten sheets, causing lack of global visibility, planning issues, and slow data processing.

    **Solution:** Development of a web application with ASP.NET MVC 5 (C#), SQL Server, Entity Framework (Database First), Bootstrap, jQuery, and Power BI for:
    - Production management (launch, grafting, rootstock, planned/random counting, closure)
    - Planning management (filtered consultation, task validation)
    - Delivery management (validation, history, client equipment tracking)
    - Inventory tracking (client seeds, nursery seeds, equipment)
    - Power BI dashboards (production capacity, productivity, top clients, top products)

    **Methodology:** Project developed using Agile Scrum methodology over 3 sprints (3 months).`,

  technologies: [
    createTech("ASP.NET MVC 5", "backend"),
    createTech("C#", "backend"),
    createTech("SQL Server", "database"),
    createTech("Entity Framework", "database"),
    createTech("Power BI", "design"),
    createTech("Bootstrap", "frontend"),
    createTech("jQuery", "frontend"),
  ],

  role: "Full-Stack Developer - Final Year Project",
  period: "Mar 2021 - Jun 2021",
  company: "EASY Technology",
  location: "Tunis, Tunisia",
  placeholder: false,
  imageUrl: "/images/projects/easyplant/login.png",

  // supervisor:
  //   "Mr. Ali BEMRI (Professional Supervisor) + Ms. Marwa CHAABANI (Academic Supervisor)",

  mission:
    "Modernize agricultural nursery management by replacing Excel files and handwritten sheets with a centralized web application for production, deliveries, planning, and inventory.",

  tasks: [
    {
      title: "Production Management",
      description:
        "Built complete production tracking system with launch, grafting, rootstock, planned and random counting. Implemented dynamic filtering (date range, task type, keyword) for efficient planning.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "jQuery"],
    },
    {
      title: "Planning & Monitoring",
      description:
        "Developed planning dashboards for team leader and manager with task validation. Added filtering by date and task type for better visibility.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server"],
    },
    {
      title: "Delivery Management",
      description:
        "Implemented end-to-end delivery workflow: pending orders list, validation with data entry, delivery history tracking, client equipment monitoring, and reception validation.",
      technologies: ["ASP.NET MVC", "C#", "Entity Framework"],
    },
    {
      title: "Power BI Dashboards",
      description:
        "Created interactive dashboards with KPIs: production capacity, team leader productivity matrix, revenue trends, top 5 products, and top 5 clients. Integrated directly into the web application.",
      technologies: ["Power BI", "DAX", "SQL Server"],
    },
  ],

  learnings: [
    "Agile Scrum methodology (planning, sprints, backlog)",
    "ASP.NET MVC 5 and Entity Framework (Database First)",
    "Creating interactive dashboards with Power BI (KPIs, gauges, charts)",
    "Project management in a professional environment",
  ],

  deliverables: [
    "3 sprints delivered (production, deliveries, inventory/statistics)",
    "Complete web application with planning, production, delivery interfaces",
    "Integrated Power BI dashboards (production capacity, top 5 products, top 5 clients, team leader productivity)",
    "Centralized SQL Server database",
  ],

  screenshots: [
    {
      url: "/images/projects/easyplant/planning-chef.png",
      caption: "Team Leader Planning (time/type filtering)",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/planning-responsable.png",
      caption: "Manager Planning",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/lancement-production.png",
      caption: "Production Launch Interface",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/valider-comptage.png",
      caption: "Counting Validation Interface",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/ajouter-comptage.png",
      caption: "Random Counting Addition",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/avancement-production.png",
      caption: "Production Progress Interface",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/login.png",
      caption: "Authentication Interface",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/livraisons.png",
      caption: "Orders to Deliver",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/valider-livraison.png",
      caption: "Delivery Validation",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/historiques-livraison.png",
      caption: "Delivery History",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/supports-clients.png",
      caption: "Client Equipment List",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/stock-supports.png",
      caption: "Equipment Stock",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/stock-semences.png",
      caption: "Seed Stock",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/dashboard-powerbi-p1.png",
      caption: "Power BI Dashboards part 1",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/dashboard-powerbi-p2.png",
      caption: "Power BI Dashboards part 2",
      placeholder: false,
    },
  ],
};
const devnetPortal: InternshipProject = {
  id: "devnet-portail",
  type: "internship",
  title: "Dynamic Web Portal",
  subtitle:
    "Centralized management of sectors, domains, and public enterprises",
  description:
    "Replacing a fragmented Excel system, this web portal centralizes public sector data management with Admin/Agent access control.",
  longDescription: `**Problem:** The company managed its data on Excel with duplicated files and outdated information, causing a lack of global visibility and error risks.

    **Solution:** Development of a web portal with October CMS (Laravel) enabling:
    - Centralized MySQL database
    - Two access levels (Admin: full access / Agent: limited management)
    - Real-time statistical dashboards
    - Intuitive UI for CRUD management

    **Result:** A reliable, centralized, and easy-to-maintain solution, completely replacing the old Excel system.`,
  technologies: [
    createTech("October CMS", "backend"),
    createTech("Laravel", "backend"),
    createTech("PHP", "backend"),
    createTech("MySQL", "database"),
    createTech("Power AMC", "design"),
  ],
  role: "Web Developer - Intern",
  period: "Jan 2020 - Feb 2020",
  company: "DEVNET",
  location: "Tunis, Tunisia",
  placeholder: false,
  imageUrl: "/images/projects/devnet/admin-dashboard.png",

  screenshots: [
    {
      url: "/images/projects/devnet/login.png",
      caption: "Authentication Interface",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/admin-dashboard.png",
      caption: "Admin Dashboard with Statistics",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/agent-dashboard.png",
      caption: "Agent Dashboard with Statistics",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/user-management.png",
      caption: "User Management",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/enterprise-management.png",
      caption: "Public Enterprise Management",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/add-enterprise.png",
      caption: "Add Enterprise Form",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/edit-enterprise.png",
      caption: "Edit Enterprise",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/single-delete.png",
      caption: "Delete Enterprise",
      placeholder: false,
    },
  ],
  mission:
    "Replace fragmented Excel management with a centralized web portal with access control and dashboards.",
  tasks: [
    {
      title: "Excel → Database Migration",
      description:
        "Analysis of existing system and design of centralized MySQL database",
      technologies: ["MySQL", "Power AMC", "UML"],
    },
    {
      title: "Portal Development",
      description:
        "Custom theme creation and CRUD module development under October CMS",
      technologies: ["October CMS", "Laravel", "PHP", "Twig"],
    },
    {
      title: "Access Control",
      description:
        "Implementation of two profiles: Administrator (full access) and Agent (limited management)",
      technologies: ["Laravel Auth", "Session Management"],
    },
  ],
  learnings: [
    "First professional experience in a corporate environment",
    "Mastery of October CMS and Laravel framework",
    "Understanding of data centralization challenges",
    "Project management and deadline adherence",
  ],
  deliverables: [
    "Complete web portal (9 interfaces)",
    "Centralized MySQL database",
    "2 dashboards (Admin + Agent)",
    "User documentation",
  ],
};
const sccGlobal: InternshipProject = {
  id: "scc-global",
  type: "internship",
  title: "Equipment Management Web Application",
  subtitle:
    "Web application for managing computer equipment inventory and reservations",

  description:
    "Replaced fragmented Excel-based equipment tracking with a web application featuring inventory management, equipment reservation, and role-based access (Admin/Agent).",

  longDescription: `**Problem:** The company managed computer equipment inventory using Excel with manual data entry, causing lack of global visibility and information reliability issues.

    **Solution:** Developed a web application with Spring Boot (backend) and Angular (frontend) enabling:
    - Centralized MySQL database for equipment tracking
    - Two access levels (Admin: full management / Agent: consultation & reservation)
    - Equipment details, listing, and deletion features
    - Reservation system for available equipment

    **Result:** A reliable, centralized solution replacing manual Excel management, with real-time equipment availability tracking.`,

  technologies: [
    createTech("Spring Boot", "backend"),
    createTech("Angular", "frontend"),
    createTech("Java", "backend"),
    createTech("MySQL", "database"),
    createTech("TypeScript", "frontend"),
    createTech("HTML/CSS", "frontend"),
  ],

  role: "Web Developer - Intern",
  period: "Feb 2021 - Mar 2021",
  company: "SCC Global",
  location: "Béja, Tunisia",
  placeholder: false,
  imageUrl: "/images/projects/sccglobal/login.png",

  mission:
    "Replace fragmented Excel-based equipment management with a centralized web application for tracking computer equipment and managing reservations.",

  tasks: [
    {
      title: "Backend Development",
      description:
        "Built REST API with Spring Boot for equipment and user management",
      technologies: ["Spring Boot", "Java", "MySQL"],
    },
    {
      title: "Frontend Development",
      description:
        "Created responsive UI with Angular for equipment listing and details",
      technologies: ["Angular", "TypeScript", "HTML/CSS"],
    },
    {
      title: "Reservation System",
      description: "Implemented equipment reservation feature for agents",
      technologies: ["Spring Boot", "Angular", "MySQL"],
    },
    {
      title: "Role-Based Access",
      description:
        "Implemented two user roles: Admin (full CRUD) and Agent (view + reserve)",
      technologies: ["Spring Security", "JWT"],
    },
  ],

  learnings: [
    "First experience with Spring Boot and Angular framework",
    "Understanding of REST API development",
    "Database design with MySQL",
    "Role-based access control implementation",
    "Frontend-backend integration",
  ],

  deliverables: [
    "Complete web application with 7+ interfaces",
    "Centralized MySQL database",
    "Equipment reservation system",
    "Admin and Agent dashboards",
  ],

  screenshots: [
    {
      url: "/images/projects/sccglobal/login.png",
      caption: "Authentication Interface",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/agent-dashboard.png",
      caption: "Agent Dashboard - Equipment List",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/admin-dashboard.png",
      caption: "Admin Dashboard - User Management",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/equipment-details.png",
      caption: "Equipment Details View",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/equipment-list.png",
      caption: "Equipment Management (Admin)",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/delete-equipment.png",
      caption: "Delete Confirmation",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/add-headset.png",
      caption: "Add Equipment Form",
      placeholder: false,
    },
  ],
};
// ============================================
// ACADEMIC PROJECTS - English
// ============================================
// const pfaCloud: AcademicProject = {
//   id: "pfa-cloud",
//   type: "academic",
//   title: "Cloud-Native Project & Resource Management Platform",
//   subtitle:
//     "First cloud deployment experience using hybrid approach (SaaS + PaaS + IaaS) with Elastic Stack",

//   description:
//     "My first end-to-end cloud deployment project. Built a full-stack application and deployed it using three different cloud models: SaaS (Elastic Cloud), PaaS (Azure App Service), and IaaS (Azure VM). Integrated Elasticsearch & Kibana for real-time analytics.",

//   longDescription: `This was my first experience deploying an application to the cloud. The main objective was to learn and implement different cloud deployment models while building a functional application.

// **What made this project unique:**
// - First time working with cloud deployment (Azure)
// - Used THREE different cloud approaches in ONE project
// - Integrated Elastic Stack (Elasticsearch + Kibana) for data analytics
// - Built a complete CI/CD pipeline with Jenkins

// **Cloud Architecture:**
// - ☁️ SaaS: Elastic Cloud for Elasticsearch & Kibana (managed, no infrastructure setup)
// - ☁️ PaaS: Azure App Service for Node.js backend (auto-scaling, managed)
// - ☁️ IaaS: Azure Virtual Machine for React frontend (full control with Nginx)

// **The Application:**
// A full-stack web application (React + Node.js) managing employees, departments, projects, and tasks - built to demonstrate the complete cloud deployment workflow.

// **Key Learning:**
// Understanding the trade-offs between different cloud service models and when to use each one. This project gave me hands-on experience with real cloud infrastructure.`,

//   technologies: [
//     createTech("React.js", "frontend"),
//     createTech("Node.js", "backend"),
//     createTech("Elasticsearch", "database"),
//     createTech("Kibana", "design"),
//     createTech("Azure Cloud", "cloud"),
//     createTech("Elastic Cloud", "cloud"),
//     createTech("Azure App Service", "cloud"),
//     createTech("Azure Virtual Machines", "cloud"),
//     createTech("Jenkins", "devops"),
//     createTech("Nginx", "devops"),
//   ],

//   role: "Full-Stack Developer & Cloud Architect",
//   period: "Feb 2024 - May 2024",
//   company: "ISAMM (Academic Project)",
//   location: "Tunisia",
//   placeholder: true,

//   responsibilities: [
//     "Designed and built full-stack application from scratch using React.js and Node.js",
//     "Deployed Elasticsearch + Kibana on Elastic Cloud (SaaS) for real-time data analytics",
//     "Deployed Node.js backend on Azure App Service (PaaS) with auto-scaling configuration",
//     "Deployed React frontend on Azure Virtual Machine (IaaS) with Nginx web server",
//     "Set up Jenkins CI/CD pipeline for automated deployment on push",
//     "Integrated Elasticsearch with Node.js backend for data indexing and search",
//     "Created 3 interactive Kibana dashboards (Company, Department, Project views)",
//     "Implemented role-based access control with 4 user permission levels",
//   ],

//   results: [
//     "✅ First hands-on cloud deployment experience (Azure + Elastic Cloud)",
//     "✅ Successfully implemented 3 cloud models in one project (SaaS + PaaS + IaaS)",
//     "✅ Deployed complete Elastic Stack (Elasticsearch + Kibana) for data analytics",
//     "✅ 15+ real-time visualizations in Kibana dashboards",
//     "✅ Automated CI/CD pipeline with Jenkins reducing manual deployment effort",
//     "✅ Full-stack application with 4 user roles and complete CRUD operations",
//   ],

//   keySkills: [
//     "Azure Cloud (App Service, VM)",
//     "Elastic Cloud (SaaS)",
//     "Elasticsearch & Kibana",
//     "Jenkins CI/CD",
//     "React.js & Node.js",
//     "Nginx Configuration",
//     "Hybrid Cloud Architecture",
//   ],

//   screenshots: [
//     {
//       url: "/images/projects/pfa/architecture.png",
//       caption: "Figure 1 - Hybrid Cloud Architecture (SaaS + PaaS + IaaS)",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/login.png",
//       caption: "Login Interface",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/user-list.png",
//       caption: "User Management",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/add-user.png",
//       caption: "Add Employee",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/edit-user.png",
//       caption: "Edit Employee",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/delete-user.png",
//       caption: "Delete Employee",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/add-department.png",
//       caption: "Add Department",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/add-project.png",
//       caption: "Add Project",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/add-task.jpg",
//       caption: "Add Task",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/company-dashboard.png",
//       caption: "Company Dashboard (Kibana)",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/department-dashboard.png",
//       caption: "Department Dashboard (Kibana)",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/project-dashboard.png",
//       caption: "Project Dashboard (Kibana)",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/elastic-deployment.png",
//       caption: "Elastic Cloud Deployment (SaaS)",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/azure-app-service.png",
//       caption: "Azure App Service Deployment (PaaS)",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/azure-vm.png",
//       caption: "Azure VM + Nginx Configuration (IaaS)",
//       placeholder: false,
//     },
//     {
//       url: "/images/projects/pfa/jenkins-pipeline.png",
//       caption: "Jenkins CI/CD Pipeline",
//       placeholder: false,
//     },
//   ],
// };

// ============================================
// Skills, Certifications, Interests, Languages
// ============================================

// export const skills: Skill[] = [
//   { name: "React.js", level: 95, category: "frontend" },
//   { name: "TypeScript", level: 90, category: "frontend" },
//   { name: "Angular", level: 75, category: "frontend" },
//   { name: "Node.js", level: 95, category: "backend" },
//   { name: "Java / Spring Boot", level: 80, category: "backend" },
//   { name: "C# / ASP.NET MVC", level: 75, category: "backend" },
//   { name: "React Native", level: 90, category: "mobile" },
//   { name: "Flutter", level: 70, category: "mobile" },
//   { name: "Android", level: 65, category: "mobile" },
//   { name: "Docker", level: 85, category: "devops" },
//   { name: "Jenkins", level: 80, category: "devops" },
//   { name: "Git", level: 90, category: "devops" },
//   { name: "CI/CD", level: 85, category: "devops" },
//   { name: "MongoDB", level: 90, category: "database" },
//   { name: "MySQL", level: 90, category: "database" },
//   { name: "SQL Server", level: 85, category: "database" },
//   { name: "Redis", level: 80, category: "database" },
//   { name: "ClickHouse", level: 75, category: "database" },
//   { name: "Power BI", level: 80, category: "other" },
//   { name: "Azure Cloud", level: 75, category: "other" },
// ];

export const skills: Skill[] = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "Building modern single-page applications with hooks, context API, and component-based architecture",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "Type-safe JavaScript for scalable and maintainable applications",
  },
  {
    name: "Angular",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    description:
      "Enterprise-grade framework with RxJS, dependency injection, and comprehensive tooling",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description:
      "Event-driven runtime building scalable microservices with Express, NestJS, and REST APIs",
  },
  {
    name: "Java / Spring Boot",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    description:
      "Enterprise application development with Spring Boot, Spring Security, and JPA",
  },
  {
    name: "C# / .NET",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    description:
      "Building robust web applications with ASP.NET MVC, .NET Core, and Entity Framework",
  },
  {
    name: "Prisma",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    description:
      "Modern ORM for Node.js with type-safe database queries, schema migrations, and TypeScript integration",
  },

  // Mobile
  {
    name: "React Native",
    category: "mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description:
      "Cross-platform mobile development with React ecosystem, Redux, and native modules",
  },
  {
    name: "Flutter",
    category: "mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    description:
      "Native-compiled mobile apps with Dart, Provider, and Firebase integration",
  },
  {
    name: "Android",
    category: "mobile",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    description:
      "Native Android development with Kotlin, Jetpack, Room, and Retrofit",
  },

  // DevOps
  {
    name: "Docker",
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description:
      "Containerization for consistent development and deployment with Docker Compose",
  },
  {
    name: "Jenkins",
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    description:
      "CI/CD automation with pipelines, GitLab integration, and SonarQube quality checks",
  },
  {
    name: "Git",
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "Distributed version control with Git Flow, rebasing, and collaborative workflows",
  },
  {
    name: "SonarQube",
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg",
    description:
      "Continuous code quality inspection with static analysis, bug detection, and security vulnerability scanning",
  },

  // Database
  {
    name: "MongoDB",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description:
      "NoSQL document database with Mongoose, aggregation pipelines, and Atlas",
  },
  {
    name: "MySQL",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description:
      "Relational database management with complex queries, indexing, and replication",
  },
  {
    name: "SQL Server",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    description:
      "Microsoft's enterprise database with T-SQL, stored procedures, and SSMS",
  },
  {
    name: "Redis",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    description:
      "In-memory data store for caching, pub/sub messaging, and real-time applications",
  },
  {
    name: "ClickHouse",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clickhouse/clickhouse-original.svg",
    description:
      "Columnar database for high-performance analytics with OLAP queries and time-series data",
  },
  {
    name: "Firestore",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
    description:
      "NoSQL cloud database with real-time synchronization, offline support, and Firebase integration",
  },

  // Cloud Platforms
  {
    name: "AWS S3",
    category: "cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    description:
      "Scalable cloud storage for static assets, user uploads, and backup with secure access controls",
  },
  {
    name: "Azure",
    category: "cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    description:
      "Cloud platform with App Service (PaaS), Virtual Machines (IaaS), Storage, and Functions",
  },

  // Communication & Messaging
  {
    name: "SendGrid",
    category: "other",
    icon: "/images/icons/sendgrid.svg",
    description:
      "Email delivery platform for transactional emails, notifications, and automated reporting",
  },
  {
    name: "RabbitMQ",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
    description:
      "Message broker for microservices communication with pub/sub and event-driven architecture",
  },

  // Monitoring & Analytics
  {
    name: "Elastic Stack",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    description:
      "Distributed search with Elasticsearch and real-time analytics with Kibana",
  },
  {
    name: "Power BI",
    category: "other",
    icon: "/images/icons/powerbi.png",
    description:
      "Business analytics with DAX, Power Query, and interactive dashboards",
  },

  // Infrastructure & Networking
  {
    name: "Nginx",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    description:
      "High-performance web server and reverse proxy for load balancing and static content",
  },
  {
    name: "Bandwidth",
    category: "other",
    icon: "/images/icons/bandwidth.svg",

    description:
      "IoT data transmission management with API rate limiting, network optimization, and real-time monitoring",
  },

  // Authentication & Identity
  {
    name: "Firebase",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
    description:
      "Backend-as-a-Service with authentication (Firebase Auth), Firestore database, storage, and hosting",
  },
];

export const certifications: Certification[] = [
  { name: "APTIS Certificate", issuer: "British Council", year: "2022" },
  { name: "Spring Boot Training", issuer: "Self-learning", year: "2021" },
];

export const interests: Interest[] = [
  { name: "Writing", icon: "pen-tool" },
  { name: "TV Series", icon: "tv" },
  { name: "Reading", icon: "book-open" },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Intermediate (APTIS Certified)" },
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
