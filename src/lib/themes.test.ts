import { describe, expect, it } from "vitest";
import {
  defaultDarkTheme,
  defaultLightTheme,
  getCounterpart,
  getTheme,
  isThemeId,
  normalizeStoredTheme,
  themeIds,
  themes,
} from "./themes";

describe("theme catalogue", () => {
  it("exposes six unique palettes with a name and browser color", () => {
    expect(themes).toHaveLength(6);
    expect(new Set(themes.map((theme) => theme.id)).size).toBe(6);
    expect(themes.map((theme) => theme.id)).toEqual([...themeIds]);

    for (const theme of themes) {
      expect(theme.nameKey).toMatch(/^v21\.theme\.names\./);
      expect(theme.browserColor).toMatch(/^#[0-9a-f]{6}$/i);
      expect(theme.preview.canvas).toMatch(/^#[0-9a-f]{6}$/i);
      expect(theme.preview.brand).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });

  it("pairs every light palette with a dark counterpart", () => {
    for (const theme of themes) {
      const counterpart = getTheme(getCounterpart(theme.id));
      expect(counterpart.mode).not.toBe(theme.mode);
      expect(getCounterpart(counterpart.id)).toBe(theme.id);
    }
  });

  it("keeps the current fog and ink palettes as the defaults", () => {
    expect(defaultLightTheme).toBe("fog");
    expect(defaultDarkTheme).toBe("ink");
    expect(getTheme("fog").mode).toBe("light");
    expect(getTheme("ink").mode).toBe("dark");
  });
});

describe("stored theme normalization", () => {
  it("accepts every current theme id", () => {
    for (const id of themeIds) {
      expect(isThemeId(id)).toBe(true);
      expect(normalizeStoredTheme(id)).toBe(id);
    }
  });

  it("migrates the pre-v2.2 light and dark values", () => {
    expect(normalizeStoredTheme("light")).toBe("fog");
    expect(normalizeStoredTheme("dark")).toBe("ink");
  });

  it("returns null for missing or unknown values", () => {
    expect(normalizeStoredTheme(null)).toBeNull();
    expect(normalizeStoredTheme("midnight")).toBeNull();
    expect(normalizeStoredTheme("")).toBeNull();
    expect(isThemeId("midnight")).toBe(false);
    expect(isThemeId(null)).toBe(false);
  });
});
