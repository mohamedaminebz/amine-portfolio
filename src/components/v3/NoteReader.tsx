import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";
import { formatNoteDate } from "../../lib/date";
import type { Note, Project } from "../../types/portfolio";
import { Dialog } from "./Dialog";

interface NoteReaderProps {
  note: Note;
  notes: Note[];
  project?: Project;
  onClose: () => void;
  onNavigate: (slug: string) => void;
  onOpenCase: (id: string) => void;
}

export const NoteReader = ({
  note,
  notes,
  project,
  onClose,
  onNavigate,
  onOpenCase,
}: NoteReaderProps) => {
  const { t, i18n } = useTranslation();

  const index = notes.findIndex((item) => item.slug === note.slug);
  const previous = notes[(index - 1 + notes.length) % notes.length];
  const next = notes[(index + 1) % notes.length];

  useEffect(() => {
    document.getElementById("note-top")?.scrollIntoView({ block: "start" });
  }, [note.slug]);

  return (
    <Dialog open onClose={onClose} labelledBy="note-title">
      <div
        id="note-top"
        className="overflow-hidden rounded-t-[2rem] bg-canvas shadow-[var(--shadow)] sm:rounded-[2rem]"
      >
        <header className="gradient-bg relative px-5 pb-7 pt-5 text-white sm:px-9 sm:pb-9 sm:pt-6">
          <span
            aria-hidden="true"
            className="absolute -right-12 -top-16 h-52 w-52 rounded-full border border-white/20"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          />

          <div className="relative flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white backdrop-blur-md transition-colors hover:bg-white/25"
            >
              <FiArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
              {t("v3.notes.back")}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={t("v21.common.close")}
              className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
            >
              <FiX aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>

          <div className="relative mt-7">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/65">
              <span>{t("v3.notes.label")}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={note.date}>
                {formatNoteDate(note.date, i18n.language)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{t("v3.notes.minRead", { count: note.readingMinutes })}</span>
            </div>

            <h2
              id="note-title"
              className="display mt-3 text-[clamp(1.8rem,4.6vw,3.1rem)]"
            >
              {note.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
              {note.dek}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.08em] text-white/85 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <article className="px-5 py-7 sm:px-9 sm:py-10 md:px-12">
          <div className="prose-note max-w-2xl">
            {note.body.map((block, blockIndex) => {
              const key = `${block.type}-${blockIndex}`;

              if (block.type === "heading") {
                return <h3 key={key}>{block.text}</h3>;
              }
              if (block.type === "quote") {
                return <blockquote key={key}>{block.text}</blockquote>;
              }
              if (block.type === "list") {
                return (
                  <ul key={key} className="space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--grad)]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={key}>{block.text}</p>;
            })}
          </div>

          {project ? (
            <button
              type="button"
              onClick={() => onOpenCase(project.id)}
              className="card-soft group mt-9 flex w-full items-center justify-between gap-4 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-brand/25"
            >
              <span className="flex items-center gap-3">
                <span className="icon-tile">
                  <FiArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 -rotate-45"
                  />
                </span>
                <span>
                  <span className="label !text-[8px] block">
                    {t("v3.notes.linked")}
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold group-hover:text-brand-text">
                    {project.title}
                  </span>
                </span>
              </span>
              <span className="hidden font-mono text-[8px] uppercase tracking-[0.1em] text-brand-text sm:block">
                {t("v3.case.label")}
              </span>
            </button>
          ) : null}

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => onNavigate(previous.slug)}
              className="card-soft group flex items-center gap-3 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-brand/25"
            >
              <span className="icon-tile !h-9 !w-9">
                <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="label !text-[8px] block">
                  {t("v3.notes.previous")}
                </span>
                <span className="block truncate text-sm font-semibold group-hover:text-brand-text">
                  {previous.title}
                </span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate(next.slug)}
              className="card-soft group flex items-center justify-end gap-3 p-4 text-right transition-all hover:-translate-y-0.5 hover:border-brand/25"
            >
              <span className="min-w-0">
                <span className="label !text-[8px] block">
                  {t("v3.notes.next")}
                </span>
                <span className="block truncate text-sm font-semibold group-hover:text-brand-text">
                  {next.title}
                </span>
              </span>
              <span className="icon-tile !h-9 !w-9">
                <FiArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </button>
          </div>
        </article>
      </div>
    </Dialog>
  );
};
