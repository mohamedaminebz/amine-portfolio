import type { Note, NoteBlock } from "../types/portfolio";

const blockText = (block: NoteBlock): string =>
  block.type === "list" ? block.items.join(" ") : block.text;

const countWords = (blocks: NoteBlock[]): number =>
  blocks.reduce(
    (total, block) =>
      total + blockText(block).trim().split(/\s+/).filter(Boolean).length,
    0,
  );

/**
 * Reading time derived from the body itself (~200 words per minute, rounded
 * up). Computing it removes the drift between hand-written estimates and the
 * actual text.
 */
export const readingMinutes = (note: Note): number =>
  Math.max(1, Math.ceil(countWords(note.body) / 200));
