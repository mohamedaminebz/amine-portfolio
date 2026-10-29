import { useTranslation } from "react-i18next";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

/** Single light/dark switch, matching the site's one-palette system. */
export const ThemeToggle = () => {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t("theme.light") : t("theme.dark")}
      title={isDark ? t("theme.light") : t("theme.dark")}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/50 text-muted backdrop-blur-md transition-all hover:border-line-strong hover:text-ink"
    >
      {isDark ? (
        <FiSun aria-hidden="true" className="h-4 w-4" />
      ) : (
        <FiMoon aria-hidden="true" className="h-4 w-4" />
      )}
    </button>
  );
};
