import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { formatNoteDate } from "../../lib/date";
import type { Note } from "../../types/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface NotesProps {
  notes: Note[];
  onOpenNote: (slug: string) => void;
}

const tilts = [
  "-rotate-[0.7deg]",
  "rotate-[0.6deg]",
  "-rotate-[0.4deg]",
  "rotate-[0.8deg]",
];

const bars = [
  "linear-gradient(90deg, #2563eb, #06b6d4)",
  "linear-gradient(90deg, #4f46e5, #0ea5e9)",
  "linear-gradient(90deg, #0891b2, #2563eb)",
  "linear-gradient(90deg, #0ea5e9, #22d3ee)",
];

export const Notes = ({ notes, onOpenNote }: NotesProps) => {
  const { t, i18n } = useTranslation();

  return (
    <section id="notes" className="section">
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label={t("v3.notes.label")}
            title={t("v3.notes.title")}
            accent={t("v3.notes.titleAccent")}
            subtitle={t("v3.notes.subtitle")}
          />
        </Reveal>

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {notes.map((note, index) => (
            <Reveal
              key={note.slug}
              delay={Math.min(index, 5) * 70}
              className={index === 0 || index === 3 ? "md:col-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => onOpenNote(note.slug)}
                className={`card-soft note-tilt group relative flex h-full w-full flex-col overflow-hidden text-left ${tilts[index % tilts.length]}`}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-full shrink-0"
                  style={{ background: bars[index % bars.length] }}
                />

                <span className="flex flex-1 flex-col p-6">
                  <span className="flex flex-wrap items-center justify-between gap-2">
                    <span className="flex items-center gap-2">
                      <time
                        dateTime={note.date}
                        className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
                      >
                        {formatNoteDate(note.date, i18n.language)}
                      </time>
                      {index === 0 ? (
                        <span className="gradient-soft rounded-full px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-brand-text">
                          {t("v3.notes.latest")}
                        </span>
                      ) : null}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-muted">
                      <FiClock aria-hidden="true" className="h-3 w-3" />
                      {t("v3.notes.minRead", {
                        count: note.readingMinutes,
                      })}
                    </span>
                  </span>

                  <span
                    className={`display mt-5 leading-[1.08] ${
                      index === 0
                        ? "text-[clamp(1.55rem,3.2vw,2.3rem)]"
                        : "text-[clamp(1.3rem,2.4vw,1.7rem)]"
                    }`}
                  >
                    {note.title}
                  </span>
                  <span
                    className={`mt-3 leading-relaxed text-muted ${
                      index === 0 ? "max-w-xl text-sm" : "text-[13px]"
                    }`}
                  >
                    {note.dek}
                  </span>

                  <span className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-surface-2/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>

                  <span className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-[11px] font-semibold text-brand-text">
                      {t("v3.notes.read")}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition-all group-hover:border-transparent group-hover:bg-brand group-hover:text-white">
                      <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
