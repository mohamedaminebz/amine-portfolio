import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiArrowUpRight,
  FiLayers,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { usePortfolioData } from "../hooks/usePortfolioData";
import type { Project, ProjectType } from "../types/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const CaseStudy = lazy(() => import("./CaseStudy"));

const projectTypes: ProjectType[] = [
  "professional",
  "internship",
  "academic",
  "other",
];

export const Work = () => {
  const { t } = useTranslation();
  const { projects } = usePortfolioData();
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? null,
    [projects, selectedId],
  );

  const filtered = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.type === filter),
    [filter, projects],
  );

  const categories = useMemo(
    () =>
      projectTypes
        .map((type) => ({
          type,
          count: projects.filter((project) => project.type === type).length,
        }))
        .filter((category) => category.count > 0),
    [projects],
  );

  const openProject = (project: Project) => {
    setSelectedId(project.id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#project=${project.id}`);
    }
  };

  const closeProject = () => {
    setSelectedId(null);
    if (
      typeof window !== "undefined" &&
      window.location.hash.startsWith("#project=")
    ) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncFromHash = () => {
      const match = /^#project=(.+)$/.exec(window.location.hash);
      setSelectedId(match ? decodeURIComponent(match[1]) : null);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const impact = [
    { value: "150+", label: t("v21.work.impact.apis") },
    { value: "20M", label: t("v21.work.impact.rows") },
    { value: "95%+", label: t("v21.work.impact.storage") },
    { value: "2,000+", label: t("v21.work.impact.devices") },
  ];

  return (
    <section id="projects" className="section-shell border-t border-line">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            label={t("v21.work.label")}
            title={t("v21.work.title")}
            accent={t("v21.work.titleAccent")}
            description={t("v21.work.subtitle")}
          />
          <Reveal delay={0.12} className="shrink-0">
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-acid" />
              {t("v21.work.count", { count: projects.length })}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-line py-3">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t("v21.work.label")}>
            <button
              type="button"
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
              className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors ${
                filter === "all"
                  ? "bg-acid text-acid-ink"
                  : "border border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {t("v21.work.all")}
              <span className={filter === "all" ? "opacity-60" : "opacity-50"}>
                {projects.length}
              </span>
            </button>
            {categories.map((category) => (
              <button
                key={category.type}
                type="button"
                onClick={() => setFilter(category.type)}
                aria-pressed={filter === category.type}
                className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors ${
                  filter === category.type
                    ? "bg-acid text-acid-ink"
                    : "border border-line text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {t(`projects.type.${category.type}`)}
                <span className="opacity-50">{category.count}</span>
              </button>
            ))}
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            {t("v21.work.viewCase")} ↓
          </span>
        </div>

        {filtered.length === 0 ? (
          <p className="py-24 text-center text-muted">{t("v21.work.noResults")}</p>
        ) : (
          <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
            {filtered.map((project, index) => {
              const featured = index === 0;
              const technologies = project.technologies.slice(0, 4);

              if (featured) {
                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, layout: { duration: 0.35 } }}
                    className="md:col-span-2"
                  >
                    <a
                      href={`#project=${project.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        openProject(project);
                      }}
                      aria-label={`${t("v21.work.viewCase")} — ${project.title}`}
                      className="group grid overflow-hidden rounded-[1.75rem] border border-line bg-surface transition-colors hover:border-acid/50 md:grid-cols-2"
                    >
                      <ProjectVisual
                        project={project}
                        priority
                        className="aspect-[16/10] md:aspect-auto md:h-full md:min-h-[390px]"
                      />
                      <div className="flex flex-col justify-between p-6 md:p-8 lg:p-9">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                            <span className="rounded-full border border-acid/30 bg-acid-soft px-2.5 py-1 text-acid-text">
                              {t("v21.work.featured")}
                            </span>
                            <span>{t(`projects.type.${project.type}`)}</span>
                            <span className="h-1 w-1 rounded-full bg-line" />
                            <span>{project.period}</span>
                          </div>

                          <h3 className="mt-5 font-display text-[clamp(1.9rem,3.2vw,3rem)] font-medium leading-[1.02] tracking-[-0.04em]">
                            <span className="link-line">{project.title}</span>
                          </h3>
                          {project.subtitle && (
                            <p className="mt-2 text-sm text-acid-text">{project.subtitle}</p>
                          )}
                          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-8">
                          <div className="flex flex-wrap gap-1.5">
                            {technologies.map((tech) => (
                              <span
                                key={tech.name}
                                className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[9px] text-muted"
                              >
                                {tech.name}
                              </span>
                            ))}
                            {project.technologies.length > technologies.length && (
                              <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[9px] text-muted">
                                +{project.technologies.length - technologies.length}
                              </span>
                            )}
                          </div>
                          <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                              {project.company}
                            </span>
                            <span className="flex items-center gap-2 text-sm font-medium text-ink">
                              {t("v21.work.viewCase")}
                              <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-colors group-hover:border-acid group-hover:bg-acid group-hover:text-acid-ink">
                                <FiArrowUpRight
                                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.article>
                );
              }

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, layout: { duration: 0.35 } }}
                >
                  <a
                    href={`#project=${project.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      openProject(project);
                    }}
                    aria-label={`${t("v21.work.viewCase")} — ${project.title}`}
                    className="group block"
                  >
                    <ProjectVisual
                      project={project}
                      className="aspect-[4/3] rounded-[1.4rem] border border-line"
                    />

                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                          <span className="text-acid-text">
                            {t(`projects.type.${project.type}`)}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-line" />
                          <span>{project.period}</span>
                        </div>
                        <h3 className="mt-2 font-display text-2xl font-medium leading-tight tracking-[-0.03em]">
                          <span className="link-line">{project.title}</span>
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                          {project.description}
                        </p>
                      </div>
                      <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-acid group-hover:bg-acid group-hover:text-acid-ink">
                        <FiArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="rounded-full border border-line px-2.5 py-1 font-mono text-[8px] text-muted"
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.technologies.length > technologies.length && (
                        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[8px] text-muted">
                          +{project.technologies.length - technologies.length}
                        </span>
                      )}
                    </div>
                  </a>
                </motion.article>
              );
            })}
          </div>
        )}

        <Reveal className="mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[#0b0c09] px-6 py-10 text-[#f2f0e8] md:px-10 md:py-12">
            <div
              className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-acid/20 blur-[90px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(213,255,63,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(213,255,63,0.6) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
              aria-hidden="true"
            />

            <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <FiTrendingUp className="h-4 w-4 text-acid" aria-hidden="true" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                    {t("v21.work.impactLabel")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,3rem)] font-medium leading-[1.05] tracking-[-0.04em]">
                  {t("v21.work.impactTitle")}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55">
                  {t("v21.work.impactSubtitle")}
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                <FiLayers className="h-3.5 w-3.5 text-acid" aria-hidden="true" />
                <span>SBG · GoField</span>
              </div>
            </div>

            <div className="relative mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
              {impact.map((item) => (
                <div key={item.label} className="bg-[#0b0c09] p-5 md:p-6">
                  <p className="font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-none tracking-[-0.04em] text-acid">
                    {item.value}
                  </p>
                  <p className="mt-2 max-w-[170px] font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-white/45">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
              <FiZap className="h-3 w-3 text-acid" aria-hidden="true" />
              production outcomes · 2024 — present
            </div>
          </div>
        </Reveal>
      </div>

      {selectedProject && (
        <Suspense fallback={null}>
          <CaseStudy
            project={selectedProject}
            projects={projects}
            onClose={closeProject}
            onNavigate={openProject}
          />
        </Suspense>
      )}
    </section>
  );
};
