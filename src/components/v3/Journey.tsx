import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiAward } from "react-icons/fi";
import type { PortfolioData } from "../../data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type JourneyFilter = "all" | "work" | "internship";

interface JourneyProps {
  data: PortfolioData;
}

export const Journey = ({ data }: JourneyProps) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<JourneyFilter>("all");

  const items = useMemo(() => {
    if (filter === "all") return data.timelineItems;
    return data.timelineItems.filter((item) => item.type === filter);
  }, [data.timelineItems, filter]);

  const tabs: Array<{ id: JourneyFilter; label: string }> = [
    { id: "all", label: t("v3.journey.all") },
    { id: "work", label: t("v3.journey.work") },
    { id: "internship", label: t("v3.journey.internship") },
  ];

  return (
    <section id="journey" className="section">
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label={t("v3.journey.label")}
            title={t("v3.journey.title")}
            accent={t("v3.journey.titleAccent")}
            subtitle={t("v3.journey.subtitle")}
          />
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-1.5">
          {tabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                aria-pressed={isActive}
                className={`rounded-full px-3.5 py-2 text-[11px] font-semibold transition-all ${
                  isActive
                    ? "gradient-bg text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.9)]"
                    : "border border-line bg-surface/50 text-muted hover:border-line-strong hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="relative mt-9">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-4 top-4 w-px bg-gradient-to-b from-brand via-accent to-transparent sm:left-1/2"
          />

          <ol className="space-y-5">
            {items.map((item, index) => {
              const current = /pr[ée]sent|aujourd/i.test(item.date);
              const even = index % 2 === 0;

              return (
                <li
                  key={item.id}
                  className={`relative sm:w-1/2 ${
                    even ? "sm:pr-10" : "sm:ml-auto sm:pl-10"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`gradient-bg absolute top-7 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full border-2 border-canvas shadow-[0_0_0_4px_color-mix(in_srgb,var(--brand)_16%,transparent)] ${
                      even
                        ? "left-4 sm:left-auto sm:right-0 sm:translate-x-1/2"
                        : "left-4 sm:left-0 sm:-translate-x-1/2"
                    }`}
                  />
                  <Reveal delay={Math.min(index, 5) * 50}>
                    <div className="card-soft ml-9 p-5 transition-all hover:-translate-y-1 hover:border-brand/25 sm:ml-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full bg-surface-2/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                          {item.date}
                        </span>
                        {current ? (
                          <span className="pill pill-brand !px-2.5 !py-1 !text-[8px]">
                            {t("v3.journey.current")}
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-3 text-[15px] font-bold">{item.title}</h3>
                      <p className="mt-0.5 text-[11px] font-semibold text-brand-text">
                        {item.company} · {item.location}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {item.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-surface-2/70 px-2 py-0.5 font-mono text-[8.5px] text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal delay={80}>
          <div className="card-soft mt-10 p-6">
            <div className="flex items-center gap-3">
              <span className="icon-tile">
                <FiAward aria-hidden="true" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold">{t("v3.journey.education")}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                  {t("v3.journey.educationNote")}
                </p>
              </div>
            </div>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {data.educationItems.map((item) => (
                <li
                  key={`${item.degree}-${item.year}`}
                  className="rounded-2xl bg-surface-2/50 p-4"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-brand-text">
                    {item.year}
                  </span>
                  <p className="mt-1.5 text-[13px] font-semibold">{item.degree}</p>
                  <p className="mt-0.5 text-[11px] leading-relaxed text-muted">
                    {item.institution}
                    {item.description ? ` · ${item.description}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
