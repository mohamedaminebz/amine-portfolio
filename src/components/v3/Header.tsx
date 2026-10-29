import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiBookOpen,
  FiBriefcase,
  FiCompass,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { useActiveSection } from "../../hooks/useActiveSection";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "work", href: "#work", key: "v3.nav.work", icon: FiBriefcase },
  { id: "notes", href: "#notes", key: "v3.nav.notes", icon: FiBookOpen },
  { id: "about", href: "#about", key: "v3.nav.about", icon: FiUser },
  { id: "journey", href: "#journey", key: "v3.nav.journey", icon: FiCompass },
] as const;

const sectionIds = ["top", "work", "notes", "about", "journey", "arsenal", "contact"] as const;

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { personalInfo } = usePortfolioData();
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  const language = (i18n.resolvedLanguage ?? i18n.language ?? "fr")
    .toLowerCase()
    .startsWith("fr")
    ? "fr"
    : "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b transition-all duration-500 ${
          scrolled
            ? "border-line bg-canvas/80 py-2.5 shadow-[0_12px_40px_-28px_rgba(9,16,32,0.35)] backdrop-blur-xl"
            : "border-transparent py-4"
        }`}
      >
        <div className="wrap flex items-center justify-between gap-4">
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label={`${personalInfo.name} — ${personalInfo.title}`}
          >
            <span className="gradient-bg grid h-9 w-9 place-items-center rounded-xl text-sm font-extrabold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.8)] transition-transform group-hover:scale-105">
              M
            </span>
            <span className="hidden sm:block">
              <span className="block text-[13px] font-bold leading-tight">
                Mohamed Amine
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                Full-stack engineer
              </span>
            </span>
          </a>

          <nav
            aria-label={t("a11y.mainNavigation")}
            className="glass absolute left-1/2 hidden -translate-x-1/2 rounded-full p-1.5 lg:block"
          >
            <ul className="flex items-center gap-0.5">
              {links.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-[12px] font-semibold transition-all ${
                        isActive
                          ? "gradient-bg text-white shadow-[0_8px_20px_-10px_rgba(37,99,235,0.9)]"
                          : "text-muted hover:bg-surface-2/70 hover:text-ink"
                      }`}
                    >
                      <link.icon aria-hidden="true" className="h-3.5 w-3.5" />
                      {t(link.key)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                i18n.changeLanguage(language === "fr" ? "en" : "fr")
              }
              aria-label={t("v3.nav.language")}
              className="h-9 rounded-full border border-line bg-surface/50 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted backdrop-blur-md transition-all hover:border-line-strong hover:text-ink"
            >
              {language === "fr" ? "FR" : "EN"}
            </button>
            <ThemeToggle />
            <a
              href="#contact"
              className="btn btn-primary hidden !px-4 !py-2.5 text-[12px] sm:inline-flex"
            >
              {t("v3.nav.contact")}
            </a>
          </div>
        </div>
      </header>

      {/* Mobile navigation lives in a floating bottom dock. */}
      <nav
        aria-label={t("a11y.mainNavigation")}
        className="dock glass-strong rounded-[1.6rem] p-1.5 lg:hidden"
      >
        <ul className="flex items-center gap-0.5">
          {[...links, { id: "contact", href: "#contact", key: "v3.nav.contact", icon: FiMail }].map(
            (link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex w-[62px] flex-col items-center gap-1 rounded-[1.2rem] px-1 py-2 text-[9px] font-semibold transition-all ${
                      isActive
                        ? "gradient-bg text-white"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    <link.icon aria-hidden="true" className="h-4 w-4" />
                    <span className="truncate">{t(link.key)}</span>
                  </a>
                </li>
              );
            },
          )}
        </ul>
      </nav>
    </>
  );
};
