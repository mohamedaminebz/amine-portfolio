import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiArrowUpRight,
  FiCommand,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { Magnetic } from "../ui/Magnetic";

interface NavigationProps {
  onOpenCommand: () => void;
}

const navItems = [
  { id: "about", key: "about", index: "01" },
  { id: "projects", key: "work", index: "02" },
  { id: "timeline", key: "journey", index: "03" },
  { id: "skills", key: "skills", index: "04" },
  { id: "contact", key: "contact", index: "05" },
] as const;

export const Navigation = ({ onOpenCommand }: NavigationProps) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { personalInfo, socialLinks } = usePortfolioData();
  const reduce = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const changeLanguage = (language: "en" | "fr") => {
    void i18n.changeLanguage(language);
  };

  const isFrench = i18n.resolvedLanguage?.startsWith("fr");

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100]">
        <div className="wrap">
          <div
            className={`mt-3 flex h-[62px] items-center justify-between rounded-full px-3 transition-all duration-500 sm:px-4 ${
              scrolled || menuOpen
                ? "glass shadow-[0_18px_60px_-30px_rgba(0,0,0,0.6)]"
                : "border border-transparent bg-transparent"
            }`}
          >
            <a
              href="#top"
              className="group flex items-center gap-3 rounded-full pr-2"
              aria-label={`${personalInfo.name} — ${personalInfo.title}`}
            >
              <span className="relative grid h-9 w-9 place-items-center rounded-full bg-acid text-acid-ink transition-transform duration-500 group-hover:rotate-12">
                <span className="font-display text-base font-bold">A</span>
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-ink" />
              </span>
              <span className="hidden leading-none sm:block">
                <span className="block font-display text-[13px] font-semibold tracking-tight">
                  Bouzidi
                </span>
                <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                  {personalInfo.title}
                </span>
              </span>
            </a>

            <nav
              aria-label={t("a11y.mainNavigation")}
              className="hidden items-center gap-0.5 rounded-full border border-line bg-surface/50 p-1 backdrop-blur-sm lg:flex"
            >
              {navItems.map((item) => {
                const active = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={active ? "page" : undefined}
                    className={`group relative flex items-center gap-1.5 rounded-full px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
                      active
                        ? "bg-surface-2 text-ink"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    <span
                      className={`text-[8px] ${
                        active ? "text-acid-text" : "text-muted/60"
                      }`}
                    >
                      {item.index}
                    </span>
                    {t(`v21.nav.${item.key}`)}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <span className="mr-1 hidden items-center gap-2 xl:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  {t("v21.hero.available")}
                </span>
              </span>

              <button
                type="button"
                onClick={onOpenCommand}
                aria-label={t("v21.command.open")}
                className="hidden h-9 items-center gap-1.5 rounded-full border border-line px-2.5 font-mono text-[10px] text-muted transition-colors hover:border-ink hover:text-ink md:flex"
              >
                <FiCommand className="h-3.5 w-3.5" aria-hidden="true" /> K
              </button>

              <div className="hidden items-center rounded-full border border-line p-0.5 sm:flex">
                {(["en", "fr"] as const).map((language) => (
                  <button
                    key={language}
                    type="button"
                    onClick={() => changeLanguage(language)}
                    aria-pressed={
                      language === "fr" ? Boolean(isFrench) : !isFrench
                    }
                    lang={language}
                    className={`rounded-full px-2 py-1 font-mono text-[9px] uppercase transition-colors ${
                      (language === "fr") === Boolean(isFrench)
                        ? "bg-ink text-canvas"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {language}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={t("a11y.toggleTheme")}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
              >
                {theme === "dark" ? (
                  <FiSun className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <FiMoon className="h-4 w-4" aria-hidden="true" />
                )}
              </button>

              <Magnetic className="hidden md:inline-block">
                <a
                  href="#contact"
                  className="group flex h-9 items-center gap-2 rounded-full bg-acid px-4 font-medium text-acid-ink transition-colors hover:bg-ink hover:text-canvas"
                >
                  {t("v21.nav.hire")}
                  <FiArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </Magnetic>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={
                  menuOpen ? t("a11y.closeMenu") : t("a11y.openMenu")
                }
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink lg:hidden"
              >
                {menuOpen ? (
                  <FiX className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <FiMenu className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[95] flex flex-col overflow-y-auto bg-canvas px-6 pb-10 pt-28 lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-1 flex-col">
              <nav
                aria-label={t("a11y.mainNavigation")}
                className="flex flex-col"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.4 }}
                    className="group flex items-baseline justify-between border-b border-line py-4"
                  >
                    <span className="display text-[2.6rem] leading-none sm:text-6xl">
                      {t(`v21.nav.${item.key}`)}
                    </span>
                    <span className="font-mono text-[10px] text-acid-text">
                      {item.index}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 grid gap-4">
                <a
                  href={socialLinks.email}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <FiMail className="h-4 w-4 text-acid-text" aria-hidden="true" />
                  {personalInfo.email}
                </a>
                <span className="flex items-center gap-3 text-sm text-muted">
                  <FiMapPin className="h-4 w-4 text-acid-text" aria-hidden="true" />
                  {personalInfo.location}
                </span>
              </div>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-10">
                <div className="flex items-center gap-2">
                  <a
                    href={socialLinks.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("a11y.linkedin")}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink"
                  >
                    <FiLinkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("a11y.github")}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink"
                  >
                    <FiGithub className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-full border border-line p-0.5">
                    {(["en", "fr"] as const).map((language) => (
                      <button
                        key={language}
                        type="button"
                        onClick={() => changeLanguage(language)}
                        aria-pressed={
                          language === "fr" ? Boolean(isFrench) : !isFrench
                        }
                        lang={language}
                        className={`rounded-full px-3 py-1.5 font-mono text-[10px] uppercase transition-colors ${
                          (language === "fr") === Boolean(isFrench)
                            ? "bg-ink text-canvas"
                            : "text-muted"
                        }`}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={t("a11y.toggleTheme")}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted"
                  >
                    {theme === "dark" ? (
                      <FiSun className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <FiMoon className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
