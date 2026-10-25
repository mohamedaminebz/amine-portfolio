import { describe, expect, it } from "vitest";
import en from "../i18n/locales/en.json";
import fr from "../i18n/locales/fr.json";

const flatten = (value: unknown, prefix = ""): string[] => {
  if (value === null || typeof value !== "object") return [prefix];

  return Object.entries(value as Record<string, unknown>).flatMap(
    ([key, child]) => flatten(child, prefix ? `${prefix}.${key}` : key),
  );
};

describe("translation bundles", () => {
  it("expose the same keys in English and French", () => {
    const enKeys = flatten(en).sort();
    const frKeys = flatten(fr).sort();

    expect(frKeys).toEqual(enKeys);
  });

  it("contain no empty strings", () => {
    const empty = flatten(en).filter((key) => {
      const value = key
        .split(".")
        .reduce<unknown>(
          (current, part) => (current as Record<string, unknown>)[part],
          en,
        );
      return typeof value === "string" && value.trim() === "";
    });

    expect(empty).toEqual([]);
  });
});
