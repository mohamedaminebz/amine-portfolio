import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { TFunction } from "i18next";
import { getYearsAgo, parsePeriod } from "./period";

// The formatter only needs the interpolation values, not real translations.
const t = ((key: string, options?: Record<string, unknown>) =>
  options ? `${key}:${JSON.stringify(options)}` : key) as unknown as TFunction;

describe("parsePeriod", () => {
  it("parses English ranges", () => {
    const parsed = parsePeriod("Feb 2024 - Aug 2025");

    expect(parsed?.start).toEqual(new Date(2024, 1, 1));
    expect(parsed?.end).toEqual(new Date(2025, 7, 1));
  });

  it("parses French ranges with accents and abbreviations", () => {
    const parsed = parsePeriod("Août 2025 - Avr 2026");

    expect(parsed?.start).toEqual(new Date(2025, 7, 1));
    expect(parsed?.end).toEqual(new Date(2026, 3, 1));
  });

  it("marks ongoing periods with a null end", () => {
    expect(parsePeriod("Jan 2025 - Present")?.end).toBeNull();
    expect(parsePeriod("Janv 2025 - Aujourd'hui")?.end).toBeNull();
  });

  it("returns null for malformed input", () => {
    expect(parsePeriod("")).toBeNull();
    expect(parsePeriod("sometime")).toBeNull();
    expect(parsePeriod("Smarch 2020 - Apr 2021")).toBeNull();
  });
});

describe("getYearsAgo", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 25));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns null for ongoing projects", () => {
    expect(getYearsAgo("Jan 2025 - Present", t)).toBeNull();
  });

  it("computes whole years", () => {
    const result = getYearsAgo("Jan 2023 - Jan 2025", t);

    expect(result).toMatchObject({ years: 1, months: 9 });
  });

  it("returns a localized label", () => {
    const result = getYearsAgo("Jan 2025 - Jan 2026", t);

    expect(result?.text.startsWith("projects.yearsAgo.")).toBe(true);
  });
});
