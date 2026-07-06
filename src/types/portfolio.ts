// Portfolio data types and interfaces

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github?: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  type: "education" | "work" | "internship";
  icon?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectResult {
  metric: string;
  description: string;
}

export interface ProjectScreenshot {
  url: string;
  caption: string;
  placeholder?: boolean;
  isMobile?: boolean;
}

// export interface Project {
//   id: string;
//   title: string;
//   subtitle?: string;
//   description: string;
//   longDescription: string;
//   technologies: TechStack[];
//   role: string;
//   period: string;
//   company: string;
//   location: string;
//   imageUrl?: string;
//   placeholder: boolean;
//   features: ProjectFeature[];
//   challenges: ProjectChallenge[];
//   results: ProjectResult[];
//   screenshots?: ProjectScreenshot[];
//   links?: {
//     github?: string;
//     live?: string;
//     demo?: string;
//   };
//   type: "professional" | "internship" | "academic" | "other"; // Add this line
// }

export interface TechStack {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "devops"
    | "cloud"
    | "mobile"
    | "design";
}

export interface Skill {
  name: string;
  level?: number;
  category:
    | "frontend"
    | "backend"
    | "mobile"
    | "devops"
    | "database"
    | "cloud"
    | "other";
  description?: string;
  icon?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Interest {
  name: string;
  icon?: string;
}
// src/types/portfolio.ts

// Base project interface with common fields
export interface BaseProject {
  id: string;
  type: "professional" | "internship" | "academic" | "other";
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;

  technologies: TechStack[];
  role: string;
  period: string;
  company: string;
  location: string;
  imageUrl?: string;
  placeholder: boolean;
  screenshots?: ProjectScreenshot[];
}

// Professional project - for work experience projects
// export interface ProfessionalProject extends BaseProject {
//   type: "professional";
//   // Professional specific fields
//   architecture?: {
//     type: string;
//     description: string;
//     diagram?: string;
//   };
//   technicalStack: {
//     frontend: string[];
//     backend: string[];
//     database: string[];
//     devops: string[];
//   };
//   microservices?: {
//     name: string;
//     responsibility: string;
//     technologies: string[];
//   }[];
//   performanceMetrics?: {
//     metric: string;
//     before: string;
//     after: string;
//     improvement: string;
//   }[];
//   teamSize?: number;
//   myContributions: string[];
//   technicalHighlights?: string[]; // NEW - separate from longDescription
//   whatIBuilt?: string; // NEW - short summary;
//   quickStats?: {
//     value: string;
//     label: string;
//   }[]; // NEW - quick stats for recruiters
//   achievements?: string[];
// }
// src/types/portfolio.ts

export interface ProfessionalProject extends BaseProject {
  type: "professional";

  // ===== 1. SUMMARY (What the project is) =====
  /** Short 1-2 sentence summary - appears in cards and hero */
  summary: string;

  // ===== 2. THE STORY (Problem → Action → Result) =====
  /** Full story with context, what you did, and the outcome */
  story: {
    /** The problem/challenge (2-3 sentences) */
    challenge: string;
    /** What you actually did (3-5 sentences) */
    action: string;
    /** The result/impact (2-3 sentences) */
    result: string;
  };

  // ===== 3. KEY METRICS (Numbers that matter) =====
  /** Quick stats shown at a glance */
  quickStats?: {
    value: string;
    label: string;
  }[];

  // ===== 4. ACHIEVEMENTS (Key accomplishments) =====
  /** Bullet points of what you achieved */
  achievements: string[];

  // ===== 5. TECH STACK =====
  /** Technologies used in the project */
  technologies: TechStack[];

  // ===== 6. OPTIONAL DETAILS =====
  /** Team size (if applicable) */
  teamSize?: number;

  /** Architecture details (if relevant) */
  architecture?: {
    type: string;
    description: string;
    diagram?: string;
  };

  /** Microservices (if applicable) */
  microservices?: {
    name: string;
    responsibility: string;
    technologies: string[];
  }[];

  /** Technical stack organized by category */
  technicalStack?: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
  };

  /** Performance metrics (before/after) - only if you have real data */
  performanceMetrics?: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
}
export interface ProjectScreenshot {
  url: string;
  caption: string;
  placeholder?: boolean;
  isMobile?: boolean;
}

// Internship project - for student internship projects
export interface InternshipProject extends BaseProject {
  type: "internship";
  // Internship specific fields
  supervisor?: string;
  mission: string;
  tasks: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  learnings: string[];
  deliverables: string[];
  evaluation?: string;
}

// Academic project - for school/university projects
export interface AcademicProject extends BaseProject {
  type: "academic";
  // Academic specific fields
  courseName?: string;
  professor?: string;
  teamMembers?: string[];
  grade?: string;
  // methodologies: string[];
  // documentation: {
  //   title: string;
  //   type: "report" | "presentation" | "demo";
  //   link?: string;
  // }[];
  // keyConcepts: string[];
  screenshots?: ProjectScreenshot[];

  // New recruiter-focused fields
  responsibilities?: string[]; // What YOU did
  results?: string[]; // Quantifiable outcomes
  keySkills?: string[]; // Technologies highlighted
  learnings?: string[];
}

// Other project - for personal/side projects
export interface OtherProject extends BaseProject {
  type: "other";
  // Personal project specific fields
  motivation: string;
  status: "completed" | "in-progress" | "planned";
  githubLink?: string;
  demoLink?: string;
  futureFeatures?: string[];
  blogPost?: string;
}

export type Project =
  | ProfessionalProject
  | InternshipProject
  | AcademicProject
  | OtherProject;
