import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { themes } from "../../lib/themes";

interface ThemeGridProps {
  className?: string;
  compact?: boolean;
}

/**
 * The six palettes, rendered as live previews. The grid keeps the panel open
 * after a selection so visitors can compare them without reopening the menu.
 */
export const ThemeGrid = ({
  className = "",
  compact = false,
}: ThemeGridProps) => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label={t("v21.theme.pickerTitle")}
      className={`grid gap-2 ${compact ? "grid-cols-3" : "grid-cols-2"} ${className}`}
    >
      {themes.map((definition) => {
        const active = definition.id === theme;

        return (
          <button
            key={definition.id}
            type="button"
            data-theme-id={definition.id}
            onClick={() => setTheme(definition.id)}
            aria-pressed={active}
            className={`group relative rounded-lg border p-1.5 text-left transition-[border-color,background-color,transform] duration-300 ${
              active
                ? "border-brand bg-brand-soft"
                : "border-line bg-surface-2/40 hover:-translate-y-0.5 hover:border-ink/30"
            }`}
          >
            <span
              className="flex overflow-hidden rounded-[5px] border border-line/80"
              style={{ height: compact ? 28 : 42 }}
              aria-hidden="true"
            >
              <span
                className="w-1/2"
                style={{ background: definition.preview.canvas }}
              />
              <span
                className="w-1/4"
                style={{ background: definition.preview.surface }}
              />
              <span
                className="w-1/4"
                style={{ background: definition.preview.brand }}
              />
            </span>

            <span className="mt-1.5 flex items-center justify-between gap-1">
              <span
                className={`block truncate font-medium text-ink ${
                  compact ? "text-[10px]" : "text-[11px]"
                }`}
              >
                {t(definition.nameKey)}
              </span>
              {!compact && (
                <span className="shrink-0 font-mono text-[7px] uppercase tracking-[0.12em] text-muted">
                  {t(`v21.theme.mode.${definition.mode}`)}
                </span>
              )}
            </span>

            {active && (
              <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-brand text-brand-ink shadow-sm">
                <FiCheck className="h-2.5 w-2.5" aria-hidden="true" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export const ThemePicker = ({ className = "" }: { className?: string }) => {
  const { t } = useTranslation();
  const { definition } = useTheme();
  const reduce = useReducedMotion();

  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const currentName = t(definition.nameKey);
  const currentMode = t(`v21.theme.mode.${definition.mode}`);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="theme-picker-panel"
        aria-label={`${t("v21.theme.open")} — ${currentName}`}
        title={`${t("v21.theme.label")} · ${currentName}`}
        className="flex h-9 items-center gap-1.5 rounded-md border border-line px-2 text-muted transition-colors hover:border-ink hover:text-ink"
      >
        <span
          className="relative h-4 w-4 overflow-hidden rounded-full border border-line"
          aria-hidden="true"
        >
          <span
            className="absolute inset-0"
            style={{ background: definition.preview.canvas }}
          />
          <span
            className="absolute inset-x-0 bottom-0 h-[55%]"
            style={{ background: definition.preview.brand }}
          />
        </span>
        <FiChevronDown
          className={`h-3 w-3 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="theme-picker-panel"
            role="dialog"
            aria-label={t("v21.theme.pickerTitle")}
            initial={reduce ? false : { opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="glass fixed left-4 right-4 top-[4.75rem] z-[130] w-auto origin-top rounded-xl p-3 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.6)] sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-2 sm:w-[min(21rem,calc(100vw-2.5rem))] sm:origin-top-right"
          >
            <div className="flex items-baseline justify-between gap-3 px-1">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink">
                {t("v21.theme.pickerTitle")}
              </p>
              <span className="text-right font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                {t("v21.theme.pickerHint")}
              </span>
            </div>

            <ThemeGrid className="mt-3" />

            <p className="mt-3 border-t border-line px-1 pt-2.5 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
              {currentName} · {currentMode}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
