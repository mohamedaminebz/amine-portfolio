import type { Note } from "../types/portfolio";
import { normalizeLanguage, type SupportedLanguage } from "./index";
import { notes as en } from "./notes.en";
import { notes as fr } from "./notes.fr";

const notesByLanguage: Record<SupportedLanguage, Note[]> = { en, fr };

/** Notes for a locale, newest first. */
export const getNotes = (language?: string): Note[] =>
  [...notesByLanguage[normalizeLanguage(language)]].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

export const getNote = (slug: string, language?: string): Note | undefined =>
  notesByLanguage[normalizeLanguage(language)].find(
    (note) => note.slug === slug,
  );
