export const themeIds = [
  "fog",
  "paper",
  "sage",
  "ink",
  "carbon",
  "marine",
] as const;

export type ThemeId = (typeof themeIds)[number];
export type ThemeMode = "light" | "dark";

export interface ThemeDefinition {
  id: ThemeId;
  /** Base mode drives the `light` / `dark` classes and native color-scheme. */
  mode: ThemeMode;
  nameKey: string;
  /** Browser chrome color for the active palette. */
  browserColor: string;
  /** Fixed preview chips for the picker. These mirror the CSS tokens. */
  preview: {
    canvas: string;
    surface: string;
    ink: string;
    brand: string;
  };
}

export const themes: ThemeDefinition[] = [
  {
    id: "fog",
    mode: "light",
    nameKey: "v21.theme.names.fog",
    browserColor: "#f2f4f9",
    preview: {
      canvas: "#f2f4f9",
      surface: "#ffffff",
      ink: "#0a0e1c",
      brand: "#2f3bff",
    },
  },
  {
    id: "paper",
    mode: "light",
    nameKey: "v21.theme.names.paper",
    browserColor: "#f5f3ee",
    preview: {
      canvas: "#f5f3ee",
      surface: "#fffefa",
      ink: "#181715",
      brand: "#22201c",
    },
  },
  {
    id: "sage",
    mode: "light",
    nameKey: "v21.theme.names.sage",
    browserColor: "#eff4ef",
    preview: {
      canvas: "#eff4ef",
      surface: "#fcfdfb",
      ink: "#121c16",
      brand: "#1f5c43",
    },
  },
  {
    id: "ink",
    mode: "dark",
    nameKey: "v21.theme.names.ink",
    browserColor: "#080b15",
    preview: {
      canvas: "#080b15",
      surface: "#0f1422",
      ink: "#eef1fa",
      brand: "#7c88ff",
    },
  },
  {
    id: "carbon",
    mode: "dark",
    nameKey: "v21.theme.names.carbon",
    browserColor: "#0a0a0b",
    preview: {
      canvas: "#0a0a0b",
      surface: "#121214",
      ink: "#f0f0ee",
      brand: "#e0e0da",
    },
  },
  {
    id: "marine",
    mode: "dark",
    nameKey: "v21.theme.names.marine",
    browserColor: "#061013",
    preview: {
      canvas: "#061013",
      surface: "#0b1a1e",
      ink: "#e6f6f7",
      brand: "#5ed2e0",
    },
  },
];

export const defaultLightTheme: ThemeId = "fog";
export const defaultDarkTheme: ThemeId = "ink";

/** Light / dark pairs used by the compact toggle. */
const counterparts: Record<ThemeId, ThemeId> = {
  fog: "ink",
  paper: "carbon",
  sage: "marine",
  ink: "fog",
  carbon: "paper",
  marine: "sage",
};

export const getTheme = (id: ThemeId): ThemeDefinition =>
  themes.find((theme) => theme.id === id) ?? themes[0];

export const getCounterpart = (id: ThemeId): ThemeId => counterparts[id];

export const isThemeId = (value: string | null): value is ThemeId =>
  value !== null && themeIds.includes(value as ThemeId);

/** Maps the pre-v2.2 `light` / `dark` storage values to the new palettes. */
export const normalizeStoredTheme = (value: string | null): ThemeId | null => {
  if (isThemeId(value)) return value;
  if (value === "light") return defaultLightTheme;
  if (value === "dark") return defaultDarkTheme;
  return null;
};
