import * as en from "./portfolioData.en";
import * as fr from "./portfolioData.fr";

/**
 * The shape of a locale's portfolio content. The French module is the
 * reference shape; both locales are validated against it in tests.
 */
export type PortfolioData = typeof fr;
export type SupportedLanguage = "fr" | "en";

const locales: Record<SupportedLanguage, PortfolioData> = { en, fr };

/** Map any BCP-47 tag (en-US, fr-CA, ...) to one of our supported languages. */
export const normalizeLanguage = (language?: string): SupportedLanguage =>
  language?.toLowerCase().startsWith("fr") ? "fr" : "en";

export const getPortfolioData = (language?: string): PortfolioData =>
  locales[language ? normalizeLanguage(language) : "fr"];
