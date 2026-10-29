import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project, ProjectType } from "../../types/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface WorkProps {
  projects: Project[];
  onOpenCase: (id: string) => void;
}

const filters: Array<{ id: "all" | ProjectType; key: string }> = [
  { id: "all", key: "projects.filter.all" },
  { id: "professional", key: "projects.filter.professional" },
  { id: "internship", key: "projects.filter.internship" },
  { id: "academic", key: "projects.filter.academic" },
];

const covers = [
  "linear-gradient(135deg, #2563eb 0%, #0ea5e9 55%, #06b6d4 100%)",
  "linear-gradient(135deg, #1d4ed8 0%, #4f46e5 100%)",
  "linear-gradient(135deg, #0891b2 0%, #2563eb 100%)",
  "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
  "linear-gradient(135deg, #312e81 0%, #2563eb 100%)",
  "linear-gradient(135deg, #155e75 0%, #06b6d4 100%)",
];

export const Work = ({ projects, onOpenCase }: WorkProps) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<"all" | ProjectType>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.type === filter),
    [filter, projects],
  );

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
                  className={`rounded-full px-3.5 py-2 text-[11px] font-semibold transition-all ${
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

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project, index) => (
            <Reveal
              key={project.id}
              delay={Math.min(index, 5) * 60}
              className={index === 0 ? "sm:col-span-2 xl:col-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => onOpenCase(project.id)}
                className="card-soft group relative flex h-full w-full flex-col overflow-hidden text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[var(--shadow-card)]"
              >
                <div
                  className={`relative overflow-hidden p-5 ${
                    index === 0 ? "h-56 sm:h-64" : "h-44"
                  }`}
                  style={{ background: covers[index % covers.length] }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -right-10 -top-14 h-44 w-44 rounded-full border border-white/20"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-white/10 blur-xl"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-16 top-10 h-16 w-16 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-12"
                  />

                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full border border-white/25 bg-white/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-md">
                        {t(`projects.filter.${project.type}`)}
                      </span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-all group-hover:border-white group-hover:bg-white group-hover:text-brand">
                        <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </div>

                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/60">
                        {project.company} · {project.period}
                      </p>
                      <p
                        className={`display mt-1.5 text-white ${
                          index === 0
                            ? "text-[clamp(1.35rem,2.6vw,1.9rem)]"
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
                        className="inline-flex items-center gap-1.5 rounded-full bg-surface-2/70 px-2.5 py-1 font-mono text-[9px] text-muted"
                      >
                        <span className="font-bold text-ink">{stat.value}</span>
                        <span className="max-w-[90px] truncate">
                          {stat.label}
                        </span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <span className="truncate font-mono text-[10px] text-muted/80">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech) => tech.name)
                        .join(" · ")}
                    </span>
                    <span className="shrink-0 text-[11px] font-semibold text-brand-text">
                      {t("v3.work.open")}
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
