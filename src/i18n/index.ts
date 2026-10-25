import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
};

const normalize = (language?: string) =>
  language?.toLowerCase().startsWith("fr") ? "fr" : "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    supportedLngs: ["en", "fr"],
    // Treat en-US/en-GB as `en` instead of loading a missing bundle.
    load: "languageOnly",
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      convertDetectedLanguage: normalize,
    },
  });

document.documentElement.lang = normalize(
  i18n.resolvedLanguage ?? i18n.language,
);

i18n.on("languageChanged", (language) => {
  document.documentElement.lang = normalize(language);
});

export default i18n;
