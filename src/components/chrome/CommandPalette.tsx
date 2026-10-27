import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import {
  FiCheck,
  FiCommand,
  FiCopy,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMoon,
  FiSearch,
  FiSun,
  FiX,
} from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { copyToClipboard } from "../../lib/clipboard";

type CommandGroup = "navigation" | "actions" | "elsewhere";

interface Command {
  id: string;
  label: string;
  hint?: string;
  group: CommandGroup;
  icon: IconType;
  keywords?: string;
  run: () => void;
}

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export const CommandPalette = ({ open, onClose }: CommandPaletteProps) => {
  const { t, i18n } = useTranslation();
  const { personalInfo, socialLinks } = usePortfolioData();
  const { theme, toggleTheme } = useTheme();
  const reduce = useReducedMotion();

  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const copiedTimer = useRef<number | null>(null);

  const scrollTo = useCallback(
    (id: string) => {
      onClose();
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
      }, 80);
    },
    [onClose, reduce],
  );

  const commands = useMemo<Command[]>(() => {
    const nav: Command[] = [
      { id: "nav-work", label: t("v21.nav.work"), hint: "02", group: "navigation", icon: FiCommand, run: () => scrollTo("projects") },
      { id: "nav-about", label: t("v21.nav.about"), hint: "01", group: "navigation", icon: FiCommand, run: () => scrollTo("about") },
      { id: "nav-journey", label: t("v21.nav.journey"), hint: "03", group: "navigation", icon: FiCommand, run: () => scrollTo("timeline") },
      { id: "nav-skills", label: t("v21.nav.skills"), hint: "04", group: "navigation", icon: FiCommand, run: () => scrollTo("skills") },
      { id: "nav-contact", label: t("v21.nav.contact"), hint: "05", group: "navigation", icon: FiCommand, run: () => scrollTo("contact") },
    ];

    const actions: Command[] = [
      {
        id: "copy-email",
        label: copied ? t("v21.command.copied") : t("v21.command.copyEmail"),
        hint: personalInfo.email,
        group: "actions",
        icon: copied ? FiCheck : FiCopy,
        keywords: "email mail contact copier",
        run: () => {
          void copyToClipboard(personalInfo.email).then((success) => {
            if (!success) return;
            setCopied(true);
            if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
            copiedTimer.current = window.setTimeout(() => setCopied(false), 2200);
          });
        },
      },
      {
        id: "send-email",
        label: t("v21.command.email"),
        hint: personalInfo.email,
        group: "actions",
        icon: FiMail,
        keywords: "mail write send",
        run: () => {
          onClose();
          window.location.href = `mailto:${personalInfo.email}`;
        },
      },
      {
        id: "toggle-theme",
        label: t("v21.command.toggleTheme"),
        hint: theme === "dark" ? t("theme.light") : t("theme.dark"),
        group: "actions",
        icon: theme === "dark" ? FiSun : FiMoon,
        keywords: "theme dark light mode",
        run: () => {
          toggleTheme();
        },
      },
      {
        id: "lang-en",
        label: t("v21.command.switchEnglish"),
        hint: "EN",
        group: "actions",
        icon: FiGlobe,
        keywords: "english langue language",
        run: () => {
          void i18n.changeLanguage("en");
        },
      },
      {
        id: "lang-fr",
        label: t("v21.command.switchFrench"),
        hint: "FR",
        group: "actions",
        icon: FiGlobe,
        keywords: "francais french langue language",
        run: () => {
          void i18n.changeLanguage("fr");
        },
      },
    ];

    const elsewhere: Command[] = [
      {
        id: "linkedin",
        label: t("v21.command.openLinkedIn"),
        hint: "linkedin.com",
        group: "elsewhere",
        icon: FiLinkedin,
        keywords: "social network",
        run: () => {
          window.open(socialLinks.linkedIn, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "github",
        label: t("v21.command.openGithub"),
        hint: "github.com",
        group: "elsewhere",
        icon: FiGithub,
        keywords: "code repositories social",
        run: () => {
          window.open(socialLinks.github, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
    ];

    return [...nav, ...actions, ...elsewhere];
  }, [
    copied,
    i18n,
    onClose,
    personalInfo.email,
    scrollTo,
    socialLinks.github,
    socialLinks.linkedIn,
    t,
    theme,
    toggleTheme,
  ]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commands;
    return commands.filter((command) =>
      `${command.label} ${command.hint ?? ""} ${command.keywords ?? ""}`
        .toLowerCase()
        .includes(normalized),
    );
  }, [commands, query]);

  const groups: { key: CommandGroup; label: string }[] = [
    { key: "navigation", label: t("v21.command.navigation") },
    { key: "actions", label: t("v21.command.actions") },
    { key: "elsewhere", label: t("v21.command.elsewhere") },
  ];

  useEffect(() => {
    if (open) {
      previousFocus.current = document.activeElement as HTMLElement | null;
      setQuery("");
      setActiveIndex(0);
      setCopied(false);
      document.body.style.overflow = "hidden";
      const frame = requestAnimationFrame(() => inputRef.current?.focus());
      return () => {
        cancelAnimationFrame(frame);
        document.body.style.overflow = "";
        previousFocus.current?.focus?.();
      };
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    return () => {
      if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) =>
        filtered.length === 0 ? 0 : (index + 1) % filtered.length,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) =>
        filtered.length === 0
          ? 0
          : (index - 1 + filtered.length) % filtered.length,
      );
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      filtered[activeIndex]?.run();
      return;
    }

    if (event.key === "Tab" && panelRef.current) {
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'input, button, [href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  };

  const activeCommand = filtered[activeIndex];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-start justify-center px-4 pt-[12vh] pb-6"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onKeyDown={handleKeyDown}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            aria-hidden="true"
            onClick={onClose}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t("v21.command.title")}
            className="glass relative w-full max-w-2xl overflow-hidden rounded-[1.25rem] shadow-2xl"
            initial={reduce ? false : { opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 border-b border-line px-5 py-4">
              <FiSearch className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-list"
                aria-autocomplete="list"
                aria-activedescendant={
                  activeCommand ? `command-${activeCommand.id}` : undefined
                }
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t("v21.command.placeholder")}
                className="w-full bg-transparent font-sans text-base text-ink outline-none placeholder:text-muted"
              />
              <kbd className="hidden rounded-md border border-line bg-surface-2 px-2 py-1 font-mono text-[10px] text-muted sm:block">
                ESC
              </kbd>
              <button
                type="button"
                onClick={onClose}
                aria-label={t("v21.common.close")}
                className="grid h-8 w-8 place-items-center rounded-md border border-line text-muted transition-colors hover:border-ink hover:text-ink sm:hidden"
              >
                <FiX className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div
              id="command-list"
              role="listbox"
              aria-label={t("v21.command.title")}
              className="max-h-[56vh] overflow-y-auto overscroll-contain p-2"
            >
              {filtered.length === 0 && (
                <p className="px-4 py-10 text-center text-sm text-muted">
                  {t("v21.command.noResults")}
                </p>
              )}

              {groups.map((group) => {
                const groupCommands = filtered.filter(
                  (command) => command.group === group.key,
                );
                if (groupCommands.length === 0) return null;

                return (
                  <div key={group.key} className="mb-1">
                    <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                      {group.label}
                    </p>
                    {groupCommands.map((command) => {
                      const index = filtered.indexOf(command);
                      const isActive = index === activeIndex;
                      const Icon = command.icon;
                      return (
                        <div
                          key={command.id}
                          id={`command-${command.id}`}
                          role="option"
                          aria-selected={isActive}
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => command.run()}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${
                            isActive
                              ? "bg-brand text-brand-ink"
                              : "text-ink hover:bg-surface-2"
                          }`}
                        >
                          <span
                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border ${
                              isActive
                                ? "border-brand-ink/20 bg-brand-ink/10"
                                : "border-line bg-surface-2"
                            }`}
                          >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="min-w-0 flex-1 truncate text-sm font-medium">
                            {command.label}
                          </span>
                          {command.hint && (
                            <span
                              className={`hidden max-w-[45%] truncate font-mono text-[10px] sm:block ${
                                isActive ? "text-brand-ink/70" : "text-muted"
                              }`}
                            >
                              {command.hint}
                            </span>
                          )}
                          {isActive && (
                            <span className="rounded border border-brand-ink/25 px-1.5 py-0.5 font-mono text-[9px] uppercase">
                              ↵
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-line px-5 py-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {t("v21.command.hint")}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                <FiCommand className="h-3 w-3" aria-hidden="true" /> K
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
