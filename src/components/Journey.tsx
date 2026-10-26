import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiArrowUpRight,
  FiAward,
  FiBriefcase,
} from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { usePortfolioData } from "../hooks/usePortfolioData";
import type { TimelineItem } from "../types/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

type Filter = "all" | "work" | "internship";

export const Journey = () => {
  const { t } = useTranslation();
  const { timelineItems, educationItems, certifications } = usePortfolioData();
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? timelineItems
        : timelineItems.filter((item) => item.type === filter),
    [filter, timelineItems],
  );

  const counts = {
    all: timelineItems.length,
    work: timelineItems.filter((item) => item.type === "work").length,
    internship: timelineItems.filter((item) => item.type === "internship").length,
  };

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: t("v21.journey.all"), count: counts.all },
    { key: "work", label: t("v21.journey.work"), count: counts.work },
    {
      key: "internship",
      label: t("v21.journey.internship"),
      count: counts.internship,
    },
  ];

  const isCurrent = (item: TimelineItem) =>
    /present|présent|en cours/i.test(item.date);

  return (
    <section id="timeline" className="section-shell border-t border-line">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                label={t("v21.journey.label")}
                title={t("v21.journey.title")}
                accent={t("v21.journey.titleAccent")}
                description={t("v21.journey.subtitle")}
              />

              <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={t("v21.journey.label")}>
                {filters.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setFilter(item.key)}
                    aria-pressed={filter === item.key}
                    className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors ${
                      filter === item.key
                        ? "bg-acid text-acid-ink"
                        : "border border-line text-muted hover:border-ink hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span className="opacity-50">{item.count}</span>
                  </button>
                ))}
              </div>

              <div className="mt-10 hidden rounded-2xl border border-line bg-surface p-5 lg:block">
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  <span>2020</span>
                  <span className="h-px flex-1 bg-line mx-3" />
                  <span className="text-acid-text">Now</span>
                </div>
                <div className="relative mt-4 h-2">
                  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line" />
                  <div className="absolute inset-y-0 left-0 w-[86%] bg-acid" />
                  {[0, 18, 42, 63, 86].map((position) => (
                    <span
                      key={position}
                      className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-canvas bg-acid"
                      style={{ left: `${position}%` }}
                    />
                  ))}
                </div>
                <p className="mt-4 font-display text-lg font-medium leading-snug tracking-tight">
                  {t("v21.journey.progress", { count: counts.all })}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {t("v21.journey.educationNote")}
                </p>
                <a
                  href="#skills"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-acid-text"
                >
                  {t("v21.journey.skillsNote")}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div
                className="absolute bottom-4 left-[5px] top-3 w-px bg-line md:left-[7px]"
                aria-hidden="true"
              />

              <div className="space-y-0">
                {filtered.map((item) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45 }}
                    className="group relative border-b border-line py-7 pl-7 last:border-b-0 md:pl-10"
                  >
                    <span
                      className={`absolute left-0 top-[2.05rem] h-[11px] w-[11px] rounded-full border-2 border-canvas md:h-[15px] md:w-[15px] ${
                        isCurrent(item)
                          ? "bg-acid shadow-[0_0_0_4px_var(--accent-soft)]"
                          : "bg-muted/50 transition-colors group-hover:bg-acid"
                      }`}
                      aria-hidden="true"
                    />

                    <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                      <span>{item.date}</span>
                      {isCurrent(item) && (
                        <span className="rounded-full border border-acid/30 bg-acid-soft px-2 py-0.5 text-acid-text">
                          {t("v21.journey.current")}
                        </span>
                      )}
                      <span className="h-1 w-1 rounded-full bg-line" />
                      <span className="flex items-center gap-1">
                        {item.type === "work" ? (
                          <FiBriefcase className="h-2.5 w-2.5" aria-hidden="true" />
                        ) : (
                          <LuGraduationCap className="h-2.5 w-2.5" aria-hidden="true" />
                        )}
                        {t(
                          item.type === "work"
                            ? "v21.journey.work"
                            : "v21.journey.internship",
                        )}
                      </span>
                    </div>

                    <div className="mt-3 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-medium leading-tight tracking-[-0.03em] md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-acid-text">
                          {item.company}
                          <span className="text-muted"> · {item.location}</span>
                        </p>
                      </div>
                      <span className="mt-1 hidden h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-acid group-hover:text-acid-text sm:grid">
                        <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>

                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line bg-surface px-2 py-0.5 font-mono text-[8px] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <Reveal className="mt-12">
              <div className="rounded-2xl border border-line bg-surface p-5 md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <LuGraduationCap className="h-4 w-4 text-acid-text" aria-hidden="true" />
                    <p className="eyebrow">{t("v21.journey.education")}</p>
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                    {t("v21.journey.educationNote")}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {educationItems.map((education) => (
                    <div
                      key={`${education.degree}-${education.year}`}
                      className="grid gap-1 border-b border-line pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[62px_1fr] sm:gap-4"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-acid-text">
                        {education.year}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">
                          {education.degree}
                        </p>
                        <p className="mt-0.5 text-xs text-muted">
                          {education.institution}
                          {education.description
                            ? ` · ${education.description}`
                            : ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  {certifications.map((certification) => (
                    <span
                      key={certification.name}
                      className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted"
                    >
                      <FiAward className="h-3 w-3 text-acid-text" aria-hidden="true" />
                      {certification.name} · {certification.year}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
