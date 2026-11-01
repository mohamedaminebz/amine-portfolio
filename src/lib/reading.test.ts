import { describe, expect, it } from "vitest";
import type { Note, NoteBlock } from "../types/portfolio";
import { readingMinutes } from "./reading";

const note = (body: NoteBlock[]): Note => ({
  slug: "test",
  date: "2026-01-01",
  tags: [],
  title: "Test",
  dek: "Test",
  body,
});

const paragraph = (words: number): NoteBlock => ({
  type: "paragraph",
  text: Array.from({ length: words }, (_, index) => `word${index}`).join(" "),
});

describe("readingMinutes", () => {
  it("never reports less than one minute", () => {
    expect(readingMinutes(note([]))).toBe(1);
    expect(readingMinutes(note([paragraph(1)]))).toBe(1);
  });

  it("rounds up at roughly 200 words per minute", () => {
    expect(readingMinutes(note([paragraph(200)]))).toBe(1);
    expect(readingMinutes(note([paragraph(201)]))).toBe(2);
    expect(readingMinutes(note([paragraph(400)]))).toBe(2);
    expect(readingMinutes(note([paragraph(401)]))).toBe(3);
  });

  it("counts list items and ignores extra whitespace", () => {
    const spaced: NoteBlock = {
      type: "paragraph",
      text: `  ${"word ".repeat(60).trim()}  `,
    };
    const list: NoteBlock = {
      type: "list",
      items: ["one two three", "four five six"],
    };

    expect(readingMinutes(note([spaced, list]))).toBe(1);
  });
});
