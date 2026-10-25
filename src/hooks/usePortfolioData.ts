import { useTranslation } from "react-i18next";
import { getPortfolioData, type PortfolioData } from "../data";

/**
 * Returns the portfolio content for the currently resolved language.
 * `useTranslation` subscribes the component to language changes, so the
 * content updates in place when the user switches language.
 */
export const usePortfolioData = (): PortfolioData => {
  const { i18n } = useTranslation();
  return getPortfolioData(i18n.resolvedLanguage ?? i18n.language);
};
