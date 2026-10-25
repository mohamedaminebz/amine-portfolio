import { describe, expect, it } from "vitest";
import { asset } from "./asset";

describe("asset", () => {
  it("prefixes public paths with the Vite base URL", () => {
    expect(asset("/images/projects/a.png")).toBe(
      `${import.meta.env.BASE_URL}images/projects/a.png`,
    );
    expect(asset("images/projects/a.png")).toBe(
      `${import.meta.env.BASE_URL}images/projects/a.png`,
    );
  });
});
