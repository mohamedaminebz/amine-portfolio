import { useMemo, useState, type MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiLock } from "react-icons/fi";
import type { Project, ProjectType } from "../../types/portfolio";
import { asset } from "../../lib/asset";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface WorkProps {
  projects: Project[];
  onOpenCase: (id: string) => void;
}

type Filter = "all" | ProjectType;

const filters: Array<{ id: Filter; key: string }> = [
  { id: "all", key: "projects.filter.all" },
  { id: "professional", key: "projects.filter.professional" },
  { id: "internship", key: "projects.filter.internship" },
  { id: "academic", key: "projects.filter.academic" },
];

const covers = [
  "linear-gradient(135deg, #1d4ed8 0%, #2563eb 45%, #0ea5e9 100%)",
  "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #4f46e5 100%)",
  "linear-gradient(135deg, #0c4a6e 0%, #0891b2 55%, #2563eb 100%)",
  "linear-gradient(135deg, #312e81 0%, #4338ca 55%, #2563eb 100%)",
];

export const Work = ({ projects, onOpenCase }: WorkProps) => {
  const { t } = useTranslation();
  // Production work first: four real systems outrank six student projects.
  const [filter, setFilter] = useState<Filter>("professional");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.type === filter),
    [filter, projects],
  );

  const openFromKeyboard = (event: MouseEvent, id: string) => {
    // Keep the real href for new-tab / copy-link, but stay in the SPA on click.
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.button !== 0
    ) {
      return;
    }
    event.preventDefault();
    onOpenCase(id);
  };

  return (
    <section id="work" className="section">
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label={t("v3.work.label")}
            title={t("v3.work.title")}
            accent={t("v3.work.titleAccent")}
            subtitle={t("v3.work.subtitle")}
          />
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div
            role="group"
            aria-label={t("v3.work.filterLabel")}
            className="flex flex-wrap gap-1.5"
          >
            {filters.map((item) => {
              const isActive = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  aria-pressed={isActive}
                  className={`rounded-full px-3.5 py-2 text-[12px] font-semibold transition-all ${
                    isActive
                      ? "gradient-bg text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.9)]"
                      : "border border-line bg-surface/50 text-muted hover:border-line-strong hover:text-ink"
                  }`}
                >
                  {t(item.key)}
                </button>
              );
            })}
          </div>
          <span className="pill">
            {t("v3.work.count", { count: visible.length })}
          </span>
        </div>

        {filter === "professional" ? (
          <p className="mt-4 text-[13px] leading-relaxed text-muted">
            {t("v3.work.archiveHint")}{" "}
            <button
              type="button"
              onClick={() => setFilter("all")}
              className="font-semibold text-brand-text underline-offset-4 hover:underline"
            >
              {t("v3.work.viewAll")}
            </button>
          </p>
        ) : null}

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, index) => {
            const cover = project.imageUrl
              ? asset(project.imageUrl)
              : undefined;
            const headlineStat = project.quickStats?.[0];

            return (
              <Reveal
                key={project.id}
                delay={Math.min(index, 5) * 60}
                className={index === 0 ? "sm:col-span-2 xl:col-span-2" : ""}
              >
                <a
                  href={`#case=${encodeURIComponent(project.id)}`}
                  onClick={(event) => openFromKeyboard(event, project.id)}
                  className="card-soft group relative flex h-full w-full flex-col overflow-hidden text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[var(--shadow-card)]"
                >
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "h-60 sm:h-72" : "h-44"
                    }`}
                  >
                    {cover ? (
                      <>
                        <img
                          src={cover}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-[#061020]/85 via-[#061020]/25 to-transparent"
                        />
                      </>
                    ) : (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0"
                        style={{ background: covers[index % covers.length] }}
                      >
                        <span className="absolute -right-10 -top-14 h-44 w-44 rounded-full border border-white/15" />
                        <span className="absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-white/10 blur-xl" />
                        {headlineStat ? (
                          <span className="absolute bottom-4 right-5 text-right">
                            <span className="display block text-[2.6rem] leading-none text-white/90">
                              {headlineStat.value}
                            </span>
                            <span className="mt-1 block max-w-[9rem] font-mono text-[10px] uppercase leading-tight tracking-[0.1em] text-white/80">
                              {headlineStat.label}
                            </span>
                          </span>
                        ) : null}
                      </div>
                    )}

                    <div className="relative flex h-full flex-col justify-between p-5">
                      <div className="flex items-start justify-between gap-3">
                        <span className="rounded-full border border-white/25 bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-md">
                          {t(`projects.filter.${project.type}`)}
                        </span>
                        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all group-hover:border-white group-hover:bg-white group-hover:text-brand">
                          <FiArrowUpRight
                            aria-hidden="true"
                            className="h-4 w-4"
                          />
                        </span>
                      </div>

                      <div className={cover ? "" : "max-w-[62%]"}>
                        {project.type === "professional" && !cover ? (
                          <span className="mb-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-white/80">
                            <FiLock aria-hidden="true" className="h-3 w-3" />
                            {t("v3.work.privateNote")}
                          </span>
                        ) : null}
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/75">
                          {project.company} · {project.period}
                        </p>
                        <p
                          className={`display mt-1.5 text-white ${
                            index === 0
                              ? "text-[clamp(1.35rem,2.6vw,1.95rem)]"
                              : "text-lg"
                          }`}
                        >
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="line-clamp-2 text-[13px] leading-relaxed text-muted">
                      {project.subtitle ?? project.role}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.quickStats?.slice(0, 2).map((stat) => (
                        <span
                          key={`${stat.value}-${stat.label}`}
                          className="inline-flex items-baseline gap-1.5 rounded-full bg-surface-2/70 px-2.5 py-1 font-mono text-[10px] leading-snug text-muted"
                        >
                          <span className="font-bold text-ink">
                            {stat.value}
                          </span>
                          <span className="text-left">{stat.label}</span>
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                      <span className="truncate font-mono text-[10px] text-muted">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech) => tech.name)
                          .join(" · ")}
                      </span>
                      <span className="shrink-0 text-[12px] font-semibold text-brand-text">
                        {t("v3.work.open")}
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
