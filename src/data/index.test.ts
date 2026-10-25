import { describe, expect, it } from "vitest";
import { getPortfolioData, normalizeLanguage } from "./index";

describe("normalizeLanguage", () => {
  it("maps French variants to fr", () => {
    expect(normalizeLanguage("fr")).toBe("fr");
    expect(normalizeLanguage("fr-FR")).toBe("fr");
    expect(normalizeLanguage("FR-ca")).toBe("fr");
  });

  it("maps English and unknown values to en", () => {
    expect(normalizeLanguage("en")).toBe("en");
    expect(normalizeLanguage("en-US")).toBe("en");
    expect(normalizeLanguage("de-DE")).toBe("en");
    expect(normalizeLanguage(undefined)).toBe("en");
  });
});

describe("getPortfolioData", () => {
  it("returns the requested locale", () => {
    expect(getPortfolioData("fr").personalInfo.name).toBe(
      getPortfolioData("fr-FR").personalInfo.name,
    );
    expect(getPortfolioData("en").personalInfo.title).toContain("Engineer");
    expect(getPortfolioData("fr").personalInfo.title).toContain("Ingénieur");
  });

  it("falls back to French when no language is provided", () => {
    expect(getPortfolioData().personalInfo.title).toBe(
      getPortfolioData("fr").personalInfo.title,
    );
  });

  it("ships the same project ids in both locales", () => {
    const en = getPortfolioData("en").projects.map((project) => project.id);
    const fr = getPortfolioData("fr").projects.map((project) => project.id);

    expect(fr.sort()).toEqual(en.sort());
  });

  it("has a matching shape for every project across locales", () => {
    const en = getPortfolioData("en").projects;
    const fr = getPortfolioData("fr").projects;

    const keys = (value: object) =>
      Object.keys(value)
        .filter((key) => key !== "screenshots")
        .sort();

    for (const project of en) {
      const translated = fr.find((item) => item.id === project.id);
      expect(translated, `missing fr project ${project.id}`).toBeDefined();
      expect(keys(translated!)).toEqual(keys(project));
    }
  });
});
