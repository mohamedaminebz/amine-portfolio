// Portfolio content types shared by both locales.

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

export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "cloud"
  | "mobile"
  | "design"
  | "other";

export interface TechStack {
  name: string;
  category: TechCategory;
}

export type SkillCategory =
  "frontend" | "backend" | "mobile" | "devops" | "database" | "cloud" | "other";

export interface Skill {
  name: string;
  level?: number;
  category: SkillCategory;
  description?: string;
  icon?: string;
  tools?: string[];
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

export type ProjectType = "professional" | "internship" | "academic" | "other";

interface BaseProject {
  id: string;
  type: ProjectType;
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
  /** Short, factual delivery status shown in the case-study header. */
  status?: string;
  /** Scope metrics only — never invented business numbers. */
  quickStats?: {
    value: string;
    label: string;
  }[];
  teamSize?: number;
}

/** Work experience projects. */
export interface ProfessionalProject extends BaseProject {
  type: "professional";
  summary: string;
  story: {
    challenge: string;
    action: string;
    result: string;
  };
  achievements: string[];
  architecture?: {
    type: string;
    description: string;
    diagram?: string;
  };
  microservices?: {
    name: string;
    responsibility: string;
    technologies: string[];
  }[];
  technicalStack?: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
  };
  performanceMetrics?: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  myContributions?: string[];
  technicalHighlights?: string[];
  whatIBuilt?: string;
}

/** Student / final-year internship projects. */
export interface InternshipProject extends BaseProject {
  type: "internship";
  supervisor?: string;
  mission: string;
  tasks: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  learnings: string[];
  deliverables: string[];
  results?: string[];
  evaluation?: string;
}

/** School / university projects. */
export interface AcademicProject extends BaseProject {
  type: "academic";
  courseName?: string;
  professor?: string;
  teamMembers?: string[];
  grade?: string;
  responsibilities?: string[];
  results?: string[];
  keySkills?: string[];
  learnings?: string[];
  keyConcepts?: string[];
  methodologies?: string[];
}

/** Personal / side projects. */
export interface OtherProject extends BaseProject {
  type: "other";
  motivation: string;
  status: "completed" | "in-progress" | "planned";
  githubLink?: string;
  demoLink?: string;
  futureFeatures?: string[];
  blogPost?: string;
}

export type Project =
  ProfessionalProject | InternshipProject | AcademicProject | OtherProject;

/* ------------------------------------------------------------
   Field notes — a small personal notebook attached to the work.
   ------------------------------------------------------------ */

export type NoteBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export interface Note {
  slug: string;
  /** ISO date used for sorting and display. */
  date: string;
  readingMinutes: number;
  tags: string[];
  /** Links the note back to the work that produced it. */
  projectId?: string;
  title: string;
  dek: string;
  body: NoteBlock[];
}
