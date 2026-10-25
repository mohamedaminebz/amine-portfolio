import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type MetaKey = { attr: "name" | "property"; value: string };

const setMeta = ({ attr, value }: MetaKey, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${value}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

/**
 * Keeps the document language, title and social metadata in sync with the
 * selected locale. Search engines and screen readers rely on these values.
 */
export const useDocumentMeta = (): void => {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language ?? "fr";

  useEffect(() => {
    const lang = language.toLowerCase().startsWith("fr") ? "fr" : "en";
    const title = t("meta.title");
    const description = t("meta.description");

    document.documentElement.lang = lang;
    document.title = title;

    setMeta({ attr: "name", value: "description" }, description);
    setMeta({ attr: "property", value: "og:title" }, title);
    setMeta({ attr: "property", value: "og:description" }, description);
    setMeta(
      { attr: "property", value: "og:locale" },
      lang === "fr" ? "fr_FR" : "en_US",
    );
    setMeta({ attr: "property", value: "og:url" }, window.location.href);
    setMeta(
      { attr: "property", value: "og:image" },
      `${window.location.origin}${import.meta.env.BASE_URL}images/MAB2.jpg`,
    );
    setMeta({ attr: "name", value: "twitter:title" }, title);
    setMeta({ attr: "name", value: "twitter:description" }, description);
    setMeta(
      { attr: "name", value: "twitter:image" },
      `${window.location.origin}${import.meta.env.BASE_URL}images/MAB2.jpg`,
    );
  }, [i18n.language, language, t]);
};
