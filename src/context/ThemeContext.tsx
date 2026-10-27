import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  defaultDarkTheme,
  defaultLightTheme,
  getCounterpart,
  getTheme,
  normalizeStoredTheme,
  type ThemeDefinition,
  type ThemeId,
} from "../lib/themes";

const STORAGE_KEY = "theme";
const TRANSITION_MS = 460;

interface ThemeContextType {
  theme: ThemeId;
  /** Full palette metadata for the active theme. */
  definition: ThemeDefinition;
  isDark: boolean;
  setTheme: (theme: ThemeId) => void;
  /** Jumps to the paired light / dark palette. */
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = (): ThemeId => {
  if (typeof window === "undefined") return defaultDarkTheme;

  const stored = normalizeStoredTheme(window.localStorage.getItem(STORAGE_KEY));
  if (stored) return stored;

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? defaultLightTheme
    : defaultDarkTheme;
};

const applyTheme = (theme: ThemeId) => {
  const definition = getTheme(theme);
  const root = document.documentElement;

  root.classList.remove("light", "dark");
  root.classList.add(definition.mode);
  root.dataset.theme = theme;
  root.style.colorScheme = definition.mode;

  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((meta) => meta.setAttribute("content", definition.browserColor));
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeId>(getInitialTheme);
  const appliedTheme = useRef<ThemeId | null>(null);
  const transitionTimer = useRef<number | null>(null);

  // Layout effect so the palette is committed before children read the CSS
  // variables (the hero canvas reads them on every theme change).
  useLayoutEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme);

    const previous = appliedTheme.current;
    appliedTheme.current = theme;

    // Skip the transition on the first commit (and on StrictMode's effect
    // replay) so a reload never animates from the browser's default palette.
    if (previous === null || previous === theme) {
      applyTheme(theme);
      return;
    }

    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      applyTheme(theme);
      return;
    }

    root.classList.add("theme-transition");
    // Force a style flush so the transition property is active before the
    // palette tokens change.
    void root.offsetWidth;
    applyTheme(theme);

    if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => {
      root.classList.remove("theme-transition");
      transitionTimer.current = null;
    }, TRANSITION_MS);
  }, [theme]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current);
      document.documentElement.classList.remove("theme-transition");
    };
  }, []);

  // Keep multiple tabs in sync.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;

      const next = normalizeStoredTheme(event.newValue);
      if (next) setTheme(next);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const selectTheme = useCallback((next: ThemeId) => {
    setTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((previous) => getCounterpart(previous));
  }, []);

  const definition = getTheme(theme);
  const isDark = definition.mode === "dark";

  const value = useMemo(
    () => ({ theme, definition, isDark, setTheme: selectTheme, toggleTheme }),
    [definition, isDark, selectTheme, theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// The context and its hook intentionally live together; this file is not a
// component-only module and the hook is imported by many components.
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
