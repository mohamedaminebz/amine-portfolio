import { describe, expect, it } from "vitest";
import { parseHash } from "./useHashRoute";

const EMPTY = { caseId: null, noteSlug: null };

describe("parseHash", () => {
  it("reads a case id", () => {
    expect(parseHash("#case=clickhouse-migration")).toEqual({
      caseId: "clickhouse-migration",
      noteSlug: null,
    });
  });

  it("reads a note slug", () => {
    expect(parseHash("#note=indexer-clickhouse")).toEqual({
      caseId: null,
      noteSlug: "indexer-clickhouse",
    });
  });

  it("decodes percent-encoded values", () => {
    expect(parseHash("#case=iot%20reporting").caseId).toBe("iot reporting");
  });

  it("keeps a malformed escape sequence instead of throwing", () => {
    // `decodeURIComponent("%E0%A4%A")` throws; a truncated shared link must not
    // take the whole app down with it.
    expect(parseHash("#case=%E0%A4%A")).toEqual({
      caseId: "%E0%A4%A",
      noteSlug: null,
    });
  });

  it("only splits on the first equals sign", () => {
    expect(parseHash("#note=a=b").noteSlug).toBe("a=b");
  });

  it("ignores empty values", () => {
    expect(parseHash("#case=")).toEqual(EMPTY);
    expect(parseHash("#case=   ")).toEqual(EMPTY);
  });

  it("ignores section anchors", () => {
    for (const hash of ["#about", "#work", "#contact", "#"]) {
      expect(parseHash(hash)).toEqual(EMPTY);
    }
  });

  it("ignores unknown keys", () => {
    expect(parseHash("#filter=professional")).toEqual(EMPTY);
    expect(parseHash("#=value")).toEqual(EMPTY);
  });

  it("works with or without the leading hash", () => {
    expect(parseHash("case=clickhouse-migration").caseId).toBe(
      "clickhouse-migration",
    );
  });
});
