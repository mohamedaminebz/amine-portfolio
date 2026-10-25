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
    company: "Easy Computers & Technologies",
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
    date: "Feb 2021",
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

const winshotReward: InternshipProject = {
  id: "winshot-reward",
  type: "internship",
  title: "Winshot Reward",
  subtitle: "Multi-tenant platform for performance objectives and rewards",
  description:
    "Multi-tenant web and mobile platform that lets franchise companies run performance objectives, points, leaderboards and reward redemption for their field teams.",
  longDescription:
    "Winshot Reward is a multi-tenant SaaS platform built at GOFIELD for franchise-based companies. Administrators manage companies, teams, employees, objectives and rewards from a React web application, while field employees follow their progress, earn points and redeem rewards from a React Native application. I worked across the full stack — tenant data isolation, the admin platform, the mobile experience and the Jenkins CI/CD pipeline — over two releases and six Scrum sprints.",

  technologies: [
    createTech("React.js", "frontend"),
    createTech("React Native", "mobile"),
    createTech("Node.js", "backend"),
    createTech("MongoDB", "database"),
    createTech("Docker", "devops"),
    createTech("Jenkins", "devops"),
    createTech("SonarQube", "devops"),
  ],

  role: "Full-Stack Web & Mobile Developer — Final Year Internship (PFE)",
  period: "Feb 2024 - Aug 2024",
  company: "GOFIELD",
  location: "Tunis, Tunisia",
  status: "2 releases delivered",
  teamSize: 1,
  placeholder: false,
  imageUrl: "/images/projects/winshot-reward/web-login.webp",

  quickStats: [
    { value: "6", label: "Scrum sprints" },
    { value: "2", label: "Releases delivered" },
    { value: "2", label: "Web + mobile apps" },
    { value: "5", label: "Integrated services" },
  ],

  mission:
    "Give franchise companies a single multi-tenant platform to define performance objectives, follow field-team progress and manage reward redemption — without mixing data between tenants.",

  tasks: [
    {
      title: "Multi-tenant backend architecture",
      description:
        "Designed a Node.js and MongoDB backend with dynamic per-tenant connection resolution, so each client's data stays isolated. Client companies can use GOFIELD-hosted infrastructure or connect their own database and FTP servers.",
      technologies: ["Node.js", "MongoDB", "Mongoose", "JWT"],
    },
    {
      title: "Administrator web platform",
      description:
        "Built the React administration app: company and tenant management, hierarchical teams, employee records, objectives with categories and levels, a reward catalog, and approval workflows for progress submissions and reward orders.",
      technologies: ["React.js", "React Router", "Axios", "i18n"],
    },
    {
      title: "Cross-platform mobile application",
      description:
        "Developed the React Native app for field employees: personal objective dashboards, progress logging, point accumulation, team and individual leaderboards, and a reward store for point redemption.",
      technologies: [
        "React Native",
        "Redux Toolkit",
        "React Navigation",
        "i18n",
      ],
    },
    {
      title: "CI/CD pipeline automation",
      description:
        "Set up Jenkins pipelines on an Azure Linux VM, with GitLab webhooks triggering builds on merge requests and release branches, SonarQube quality checks, Docker images stored in AWS ECR, and automated deployment through Docker Compose.",
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
      title: "Identity and access management",
      description:
        "Integrated GOFIELD's internal identity provider to deliver unified authentication and role-based access control across web and mobile, with Super Admin, Admin and Employee profiles and JWT sessions.",
      technologies: ["OAuth2", "JWT", "Identity Provider"],
    },
  ],

  results: [
    "Delivered two releases across six Scrum sprints — 21-day sprints for release 1, 14-day sprints for release 2.",
    "Shipped an administrator web app and a React Native app for iOS and Android from a single codebase.",
    "Isolated tenant data at the database level, with an option for client-owned database and FTP infrastructure.",
    "Automated build, code-quality analysis and deployment with a Jenkins pipeline.",
    "Connected five services: identity provider, MongoDB, FTP, AWS S3 and email notifications.",
  ],

  learnings: [
    "Designing multi-tenant data isolation and dynamic connection routing.",
    "Running a complete CI/CD lifecycle with Jenkins, Docker and SonarQube.",
    "Shipping one React Native codebase for iOS and Android.",
    "Working in Scrum across two releases, with stakeholder feedback between sprints.",
  ],

  deliverables: [
    "Administrator web application (companies, teams, employees, objectives, rewards)",
    "React Native application (progress, points, leaderboards, rewards)",
    "Jenkins CI/CD pipeline with SonarQube quality checks",
    "Sprint backlogs and technical documentation",
  ],

  screenshots: [
    {
      url: "/images/projects/winshot-reward/web-login.webp",
      caption: "Authentication interface (web app)",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-companies-list.webp",
      caption: "Company management",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-goals-list.webp",
      caption: "Performance objectives",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-goal-assignments-teams.webp",
      caption: "Objective assignments and progress by team",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/web-orders-list.webp",
      caption: "Reward order management",
      placeholder: false,
    },
    {
      url: "/images/projects/winshot-reward/mobile/home.webp",
      caption: "Mobile home dashboard",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/goal-details.webp",
      caption: "Objective details on mobile",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/winshot-reward/mobile/rankings-teams.webp",
      caption: "Team leaderboard",
      placeholder: false,
      isMobile: true,
    },
  ],
};

const financeTracker: InternshipProject = {
  id: "finance-tracker",
  type: "internship",
  title: "Personal Finance Management Application",
  subtitle: "Cross-platform mobile app for income, expenses and balance trends",
  description:
    "Flutter app built during an internal training project at Visual Dev: guest and authenticated modes, transaction tracking, and weekly, monthly and yearly balance charts.",
  longDescription:
    "This was an internal training project at Visual Dev, used to build a complete mobile product from scratch rather than to answer a client brief. I built a cross-platform Flutter app with two modes — a guest mode backed by local Hive storage and an authenticated mode using Firebase Auth and Google Sign-In. Users add, edit and delete income and expense transactions by category, then follow their balance through weekly, monthly and yearly charts. Firestore keeps data in sync across devices and Firebase Storage handles profile images.",

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

  role: "Mobile Developer — Summer Internship",
  period: "Jul 2023 - Aug 2023",
  company: "Visual Dev",
  location: "Manouba, Tunisia",
  status: "Internal training project",
  placeholder: false,
  imageUrl: "/images/projects/finance-tracker/logoWallet.webp",

  quickStats: [
    { value: "1", label: "Flutter codebase" },
    { value: "2", label: "Usage modes" },
    { value: "3", label: "Balance views" },
    { value: "iOS + Android", label: "Platforms" },
  ],

  mission:
    "Build a complete personal finance app during an internal training project, covering both a no-account guest mode and a cloud-synced authenticated mode.",

  tasks: [
    {
      title: "Authentication system",
      description:
        "Implemented email and password authentication plus Google Sign-In with Firebase Auth, and a guest mode that persists data locally for users without an account.",
      technologies: ["Flutter", "Firebase Auth", "Google Sign-In"],
    },
    {
      title: "Transaction management",
      description:
        "Built CRUD operations for income and expense transactions with category selection, date picking and amount validation.",
      technologies: ["Flutter", "Firestore", "Hive"],
    },
    {
      title: "Data visualization",
      description:
        "Created dashboards with line charts showing balance evolution, with weekly, monthly and yearly views.",
      technologies: ["Flutter Charts", "Dart", "Firestore"],
    },
    {
      title: "Cloud storage and synchronization",
      description:
        "Integrated Firestore for data persistence and Firebase Storage for profile images, keeping data in sync across devices.",
      technologies: ["Firestore", "Firebase Storage", "Flutter"],
    },
  ],

  results: [
    "Delivered one Flutter codebase running on both iOS and Android.",
    "Implemented two usage modes: guest with local Hive storage, and authenticated with Firebase.",
    "Built transaction management with categories, dates and amount validation.",
    "Added weekly, monthly and yearly balance charts with cloud synchronization across devices.",
  ],

  learnings: [
    "Cross-platform mobile development with Flutter.",
    "Firebase Authentication, Firestore and Storage.",
    "State management with the Provider pattern.",
    "Local persistence with the Hive NoSQL database.",
    "Data visualization with Flutter charts.",
  ],

  deliverables: [
    "Flutter application for iOS and Android",
    "Email/password and Google authentication",
    "Guest mode with local storage",
    "Transaction management for income and expenses",
    "Interactive charts with weekly, monthly and yearly views",
    "Cloud backup and synchronization",
    "Profile management with image upload",
  ],

  screenshots: [
    {
      url: "/images/projects/finance-tracker/splash.webp",
      caption: "Splash screen (login, register, guest)",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/home.webp",
      caption: "Home dashboard",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/add-transaction.webp",
      caption: "Add a transaction",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/stats-monthly.webp",
      caption: "Monthly statistics",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/stats-yearly.webp",
      caption: "Yearly statistics",
      placeholder: false,
      isMobile: true,
    },
    {
      url: "/images/projects/finance-tracker/profile.webp",
      caption: "Profile management",
      placeholder: false,
      isMobile: true,
    },
  ],
};

const pfaCloud: AcademicProject = {
  id: "pfa-cloud",
  type: "academic",
  title: "Project & Resource Management Platform",
  subtitle:
    "Full-stack application deployed across three cloud models with Elastic Stack",
  description:
    "Academic PFA built by a team of two: a project and resource management application deployed with SaaS, PaaS and IaaS models, Elasticsearch, Kibana and a Jenkins pipeline.",
  longDescription: `Academic project (PFA) built by a team of two at ISAMM. We built a full-stack project and resource management application, then deployed it using three cloud models in the same project:

☁️ SaaS: Elastic Cloud (Elasticsearch + Kibana) for managed search and dashboards
☁️ PaaS: Azure App Service for the Node.js backend
☁️ IaaS: Azure virtual machine for the React frontend and Jenkins

A Jenkins pipeline redeploys the frontend after each Git push.`,

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

  role: "Full-Stack Developer — PFA (team of 2)",
  period: "Feb 2023 - May 2023",
  company: "ISAMM",
  location: "Tunisia",
  status: "Academic PFA · 3 cloud models",
  teamSize: 2,
  placeholder: false,

  quickStats: [
    { value: "3", label: "Cloud models" },
    { value: "3", label: "Kibana dashboards" },
    { value: "16", label: "Dashboard panels" },
    { value: "1", label: "Jenkins pipeline" },
  ],

  responsibilities: [
    "Deployed Elasticsearch and Kibana on Elastic Cloud (SaaS) for search and dashboards",
    "Deployed the Node.js backend on Azure App Service (PaaS)",
    "Deployed the React frontend on an Azure virtual machine with Jenkins (IaaS)",
    "Configured a Jenkins pipeline to redeploy the frontend on Git push",
    "Integrated Elasticsearch with Node.js for data indexing and search",
    "Created three Kibana dashboards: company, department and project",
    "Built the full-stack application with complete CRUD operations",
  ],

  results: [
    "Deployed one application across three cloud models: SaaS, PaaS and IaaS.",
    "Built three Kibana dashboards — company, department and project — with 16 panels in total.",
    "Automated frontend redeployment with a Jenkins pipeline triggered on Git push.",
    "Indexed application data in Elasticsearch for search and dashboarding.",
  ],

  keySkills: [
    "Azure Cloud (App Service, virtual machines)",
    "Elastic Cloud (SaaS)",
    "Elasticsearch & Kibana",
    "Jenkins CI/CD",
    "React.js & Node.js",
  ],

  screenshots: [
    {
      url: "/images/projects/pfa/architecture.webp",
      caption: "Hybrid cloud architecture (SaaS + PaaS + IaaS)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/login.webp",
      caption: "Login interface",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/user-list.webp",
      caption: "Employee management",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/add-project.webp",
      caption: "Project creation",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/company-dashboard.webp",
      caption: "Company dashboard (Kibana)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/department-dashboard.webp",
      caption: "Department dashboard (Kibana)",
      placeholder: false,
    },
    {
      url: "/images/projects/pfa/project-dashboard.webp",
      caption: "Project dashboard (Kibana)",
      placeholder: false,
    },
  ],
  imageUrl: "/images/projects/pfa/architecture.webp",
};

const easyPlant: InternshipProject = {
  id: "easy-plant",
  type: "internship",
  title: "Agricultural Nursery Management Application",
  subtitle:
    "Production, delivery and reporting module for an agricultural nursery",
  description:
    "Web module covering production, planning, deliveries and stock for an agricultural nursery, with Power BI dashboards for day-to-day decisions.",
  longDescription: `**Problem:** The nursery managed orders, production, planning and deliveries with Excel files and handwritten sheets, which meant no global visibility, weak planning and slow data handling.

**Solution:** A web application built with ASP.NET MVC 5 (C#), SQL Server, Entity Framework (Database First), Bootstrap, jQuery and Power BI, covering:
- Production management (launch, grafting, rootstock, planned and random counting, closure)
- Planning management with filters and task validation
- Delivery management with validation, history and client equipment tracking
- Stock tracking for client seeds, nursery seeds and equipment
- Power BI dashboards for production capacity, productivity, top clients and top varieties

**Methodology:** Agile Scrum over three sprints.`,

  technologies: [
    createTech("ASP.NET MVC 5", "backend"),
    createTech("C#", "backend"),
    createTech("SQL Server", "database"),
    createTech("Entity Framework", "database"),
    createTech("Power BI", "design"),
    createTech("Bootstrap", "frontend"),
    createTech("jQuery", "frontend"),
  ],

  role: "Full-Stack Developer — Final Year Internship",
  period: "Mar 2021 - Jun 2021",
  company: "Easy Computers & Technologies",
  location: "Tunis, Tunisia",
  status: "3 sprints delivered",
  placeholder: false,
  imageUrl: "/images/projects/easyplant/login.webp",

  quickStats: [
    { value: "3", label: "Scrum sprints" },
    { value: "5", label: "Functional areas" },
    { value: "1", label: "Client nursery" },
    { value: "Power BI", label: "Reporting layer" },
  ],

  mission:
    "Modernise nursery management by replacing Excel files and handwritten sheets with one web application for production, deliveries, planning and stock.",

  tasks: [
    {
      title: "Production management",
      description:
        "Built production tracking for launch, grafting, rootstock, planned and random counting, with dynamic filtering by date range, task type and keyword.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "jQuery"],
    },
    {
      title: "Planning and monitoring",
      description:
        "Created planning views for team leaders and managers with task validation, plus filtering by date and task type.",
      technologies: ["ASP.NET MVC", "C#", "SQL Server"],
    },
    {
      title: "Delivery management",
      description:
        "Implemented the delivery workflow: pending orders, validation with data entry, delivery history, client equipment tracking and reception validation.",
      technologies: ["ASP.NET MVC", "C#", "Entity Framework"],
    },
    {
      title: "Power BI dashboards",
      description:
        "Created dashboards for production capacity, team-leader productivity, revenue trends, top five products and top five clients, embedded in the web application.",
      technologies: ["Power BI", "DAX", "SQL Server"],
    },
  ],

  results: [
    "Delivered the module in three Scrum sprints.",
    "Covered production, planning, deliveries, stock and reporting in one web application.",
    "Replaced Excel files and handwritten sheets with a centralised SQL Server database.",
    "Added Power BI dashboards for production capacity, productivity, top products and top clients.",
  ],

  learnings: [
    "Agile Scrum: sprint planning, backlog and delivery.",
    "ASP.NET MVC 5 and Entity Framework (Database First).",
    "Interactive Power BI dashboards with KPIs, gauges and charts.",
    "Working directly with a client's operational team.",
  ],

  deliverables: [
    "Three sprints delivered (production, deliveries, stock and reporting)",
    "Web application with planning, production, delivery and stock interfaces",
    "Power BI dashboards for capacity, productivity, top products and top clients",
    "Centralised SQL Server database",
  ],

  screenshots: [
    {
      url: "/images/projects/easyplant/planning-chef.webp",
      caption: "Team leader planning with filters",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/lancement-production.webp",
      caption: "Production launch",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/livraisons.webp",
      caption: "Orders to deliver",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/valider-livraison.webp",
      caption: "Delivery validation",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/stock-supports.webp",
      caption: "Equipment stock",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/stock-semences.webp",
      caption: "Seed stock",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/dashboard-powerbi-p1.webp",
      caption: "Power BI dashboards, part 1",
      placeholder: false,
    },
    {
      url: "/images/projects/easyplant/dashboard-powerbi-p2.webp",
      caption: "Power BI dashboards, part 2",
      placeholder: false,
    },
  ],
};

const devnetPortal: InternshipProject = {
  id: "devnet-portail",
  type: "internship",
  title: "Dynamic Web Portal",
  subtitle: "Centralised management of sectors, domains and public enterprises",
  description:
    "Public-sector portal that replaced fragmented Excel files with one MySQL-backed source of truth, two access roles and statistical dashboards.",
  longDescription: `**Context:** Two-month "stage de perfectionnement" at DEVNET, delivered as a group project.

**Problem:** Data was spread across duplicated Excel files with outdated information, so there was no global visibility and a real risk of errors.

**Solution:** A web portal built with October CMS (Laravel), providing:
- A centralised MySQL database
- Two access levels: Administrator (full access) and Agent (limited management)
- Statistical dashboards
- A simple interface for CRUD management

**Result:** A reliable, centralised portal that replaced the Excel files entirely.`,

  technologies: [
    createTech("October CMS", "backend"),
    createTech("Laravel", "backend"),
    createTech("PHP", "backend"),
    createTech("MySQL", "database"),
    createTech("Power AMC", "design"),
  ],

  role: "Web Developer — Intern",
  period: "Jan 2020 - Feb 2020",
  company: "DEVNET",
  location: "Tunis, Tunisia",
  status: "Group project",
  placeholder: false,
  imageUrl: "/images/projects/devnet/admin-dashboard.webp",

  quickStats: [
    { value: "9", label: "Interfaces" },
    { value: "2", label: "Access roles" },
    { value: "2", label: "Dashboards" },
    { value: "1", label: "Central database" },
  ],

  mission:
    "Replace fragmented Excel management with a centralised web portal with access control and dashboards.",

  tasks: [
    {
      title: "Excel to database migration",
      description:
        "Analysed the existing spreadsheets and designed a centralised MySQL database.",
      technologies: ["MySQL", "Power AMC", "UML"],
    },
    {
      title: "Portal development",
      description:
        "Created a custom theme and built the CRUD modules on October CMS.",
      technologies: ["October CMS", "Laravel", "PHP", "Twig"],
    },
    {
      title: "Access control",
      description:
        "Implemented two profiles: Administrator with full access and Agent with limited management.",
      technologies: ["Laravel Auth", "Session Management"],
    },
  ],

  results: [
    "Replaced duplicated Excel files with one centralised MySQL database.",
    "Delivered nine interfaces covering authentication, dashboards and CRUD management.",
    "Implemented two access levels: Administrator (full access) and Agent (limited management).",
    "Built Admin and Agent dashboards for sector, domain and public-enterprise statistics.",
  ],

  learnings: [
    "First professional experience in a company environment.",
    "October CMS and the Laravel framework.",
    "Data centralisation and migration from spreadsheets.",
    "Working in a group with deadlines and an administrative hierarchy.",
  ],

  deliverables: [
    "Web portal with nine interfaces",
    "Centralised MySQL database",
    "Two dashboards (Admin and Agent)",
    "User documentation",
  ],

  screenshots: [
    {
      url: "/images/projects/devnet/login.webp",
      caption: "Authentication interface",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/admin-dashboard.webp",
      caption: "Admin dashboard with statistics",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/agent-dashboard.webp",
      caption: "Agent dashboard with statistics",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/enterprise-management.webp",
      caption: "Public enterprise management",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/add-enterprise.webp",
      caption: "Add enterprise form",
      placeholder: false,
    },
    {
      url: "/images/projects/devnet/user-management.webp",
      caption: "User management",
      placeholder: false,
    },
  ],
};

const sccGlobal: InternshipProject = {
  id: "scc-global",
  type: "internship",
  title: "Equipment Management Web Application",
  subtitle: "Inventory and reservation tracking for computer equipment",
  description:
    "One-month initiation internship: a web application to track computer equipment and reservations, replacing Excel with a centralised MySQL database.",
  longDescription: `**Context:** One-month initiation internship at SCC Global, using a classical development method rather than Scrum.

**Problem:** Computer equipment was tracked in Excel with manual entry, so there was no reliable view of what was available.

**Solution:** A web application built with Spring Boot and Angular, providing:
- A centralised MySQL database for equipment tracking
- Two access levels: Admin (full management) and Agent (view and reserve)
- Equipment listing, details and deletion
- A reservation flow for available equipment

**Result:** A centralised replacement for manual Excel tracking.`,

  technologies: [
    createTech("Spring Boot", "backend"),
    createTech("Angular", "frontend"),
    createTech("Java", "backend"),
    createTech("MySQL", "database"),
    createTech("TypeScript", "frontend"),
    createTech("HTML/CSS", "frontend"),
  ],

  role: "Web Developer — Intern",
  period: "Feb 2021",
  company: "SCC Global",
  location: "Béja, Tunisia",
  status: "1-month initiation internship",
  placeholder: false,
  imageUrl: "/images/projects/sccglobal/login.webp",

  quickStats: [
    { value: "1", label: "Month" },
    { value: "7", label: "Interfaces" },
    { value: "2", label: "Access roles" },
    { value: "1", label: "Reservation flow" },
  ],

  mission:
    "Replace fragmented Excel-based equipment management with a centralised web application for tracking computer equipment and managing reservations.",

  tasks: [
    {
      title: "Backend development",
      description:
        "Built a REST API with Spring Boot for equipment and user management.",
      technologies: ["Spring Boot", "Java", "MySQL"],
    },
    {
      title: "Frontend development",
      description:
        "Created a responsive Angular interface for equipment listing and details.",
      technologies: ["Angular", "TypeScript", "HTML/CSS"],
    },
    {
      title: "Reservation system",
      description: "Implemented equipment reservation for agents.",
      technologies: ["Spring Boot", "Angular", "MySQL"],
    },
    {
      title: "Role-based access",
      description:
        "Implemented two roles: Admin with full CRUD and Agent with view and reserve.",
      technologies: ["Spring Security", "JWT"],
    },
  ],

  results: [
    "Delivered the application within a one-month initiation internship.",
    "Replaced Excel equipment tracking with a centralised MySQL database.",
    "Built seven interfaces for equipment listing, details, reservation and administration.",
    "Implemented Admin and Agent roles with Spring Security and JWT.",
  ],

  learnings: [
    "First experience with Spring Boot and Angular.",
    "REST API development and frontend-backend integration.",
    "MySQL database design.",
    "Role-based access control.",
  ],

  deliverables: [
    "Web application with seven interfaces",
    "Centralised MySQL database",
    "Equipment reservation system",
    "Admin and Agent dashboards",
  ],

  screenshots: [
    {
      url: "/images/projects/sccglobal/login.webp",
      caption: "Authentication interface",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/agent-dashboard.webp",
      caption: "Agent dashboard — equipment list",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/equipment-details.webp",
      caption: "Equipment details",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/equipment-list.webp",
      caption: "Equipment management (Admin)",
      placeholder: false,
    },
    {
      url: "/images/projects/sccglobal/add-headset.webp",
      caption: "Add equipment form",
      placeholder: false,
    },
  ],
};
// ============================================
// Skills, Certifications, Interests, Languages
// ============================================

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
    icon: "/images/icons/powerbi.webp",
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
