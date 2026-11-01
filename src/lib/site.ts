import { asset } from "./asset";

/**
 * Files and profiles that live outside the content data because they are the
 * same in both locales. Everything here is a real artefact — no placeholders.
 */
export const RESUME_URL = asset("/cv/mohamed-amine-bouzidi-cv.pdf");

export const GITHUB_PROFILE = "https://github.com/MedamineBouzidi";
export const LINKEDIN_PROFILE = "https://www.linkedin.com/in/med-amine-bouzidi";

/**
 * The hero's "core toolkit" row: the handful of tools that carry the actual
 * day-to-day work, all of them used in a professional project. It is curated on
 * purpose — taking the first N entries of `skills` would surface whatever
 * happens to be first in the array (Angular, C#/.NET, …) and label it "core".
 *
 * Names must match an entry in `skills`, which `src/data/index.test.ts` checks.
 */
export const CORE_STACK = [
  "React.js",
  "Node.js",
  "TypeScript",
  "MySQL",
  "MongoDB",
  "Docker",
] as const;
