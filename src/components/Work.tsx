import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiDatabase,
  FiLayers,
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

/**
 * Strength order, not data order. Delivery evidence (a shipped product with
 * real screenshots) leads, then quantified systems work, then older archive.
 * ClickHouse is excluded from the grid because it owns the flagship panel.
 */
const strengthOrder = [
  "winshot-reward",
  "pyrojs-refonte",
  "iot-reporting-service",
  "winshot-integration",
  "finance-tracker",
  "pfa-cloud",
  "easy-plant",
  "devnet-portail",
  "scc-global",
];

const FEATURED_ID = "winshot-reward";
const FLAGSHIP_ID = "clickhouse-migration";

export const Work = () => {
  const { t } = useTranslation();
  const { projects } = usePortfolioData();
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? null,
    [projects, selectedId],
  );

  const flagship = useMemo(
    () => projects.find((project) => project.id === FLAGSHIP_ID) ?? null,
    [projects],
  );

  const filtered = useMemo(() => {
    const byFilter =
      filter === "all"
        ? projects
        : projects.filter((project) => project.type === filter);

    return [...byFilter]
      .filter((project) => project.id !== FLAGSHIP_ID)
      .sort((a, b) => {
        const aRank = strengthOrder.indexOf(a.id);
        const bRank = strengthOrder.indexOf(b.id);
        return (aRank === -1 ? 99 : aRank) - (bRank === -1 ? 99 : bRank);
      });
  }, [filter, projects]);

  const showFlagship = Boolean(
    flagship && (filter === "all" || filter === "professional"),
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

  const openCase = (project: Project) => (event: ReactMouseEvent) => {
    event.preventDefault();
    openProject(project);
  };

  const migrationStats = flagship?.quickStats ?? [];
  const storageValue = migrationStats[1]?.value ?? "70 GB → 3 GB";
  const [fromStorage, toStorage] = storageValue
    .split("→")
    .map((part) => part.trim());

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
              <span className="h-2 w-2 bg-brand" />
              {t("v21.work.count", { count: projects.length })}
            </div>
          </Reveal>
        </div>

        {showFlagship && flagship && (
          <Reveal className="mt-12">
            <a
              href={`#project=${flagship.id}`}
              onClick={openCase(flagship)}
              aria-label={`${t("v21.work.viewCase")} — ${flagship.title}`}
              className="group relative block overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-[0_30px_80px_-64px_rgba(10,14,28,0.55)] transition-colors hover:border-brand/50"
            >
              <div className="h-1 w-full bg-brand" aria-hidden="true" />

              <div className="relative grid lg:grid-cols-12">
                <div className="relative p-6 md:p-9 lg:col-span-7 lg:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-brand-text">
                      <span
                        className="h-1.5 w-1.5 bg-brand"
                        aria-hidden="true"
                      />
                      {t("v21.work.flagship")}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                      {flagship.period} · {flagship.company}
                    </span>
                  </div>

                  <h3 className="display mt-7 max-w-xl text-[clamp(2.15rem,4.3vw,3.8rem)] text-ink">
                    {flagship.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-[15px]">
                    {flagship.subtitle}
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
                    {[
                      migrationStats[0],
                      migrationStats[2],
                      migrationStats[3],
                    ].map(
                      (stat) =>
                        stat && (
                          <div
                            key={stat.label}
                            className="flex flex-col justify-between bg-surface p-3.5 md:p-4"
                          >
                            <p className="font-display text-lg font-semibold leading-none tracking-tight text-ink sm:text-2xl">
                              {stat.value}
                            </p>
                            <p className="mt-2 font-mono text-[7px] uppercase leading-relaxed tracking-[0.12em] text-muted">
                              {stat.label}
                            </p>
                          </div>
                        ),
                    )}
                  </div>

                  <span className="mt-8 inline-flex items-center gap-2.5 text-sm font-medium text-brand-text">
                    {t("v21.work.viewCase")}
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-brand-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <FiArrowUpRight
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </div>

                <div className="relative overflow-hidden border-t border-line bg-[var(--console-bg)] text-white lg:col-span-5 lg:border-l lg:border-t-0">
                  <div
                    className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[var(--console-glow)] blur-[80px]"
                    aria-hidden="true"
                  />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4 font-mono text-[8px] uppercase tracking-[0.14em] md:px-6">
                      <span className="flex items-center gap-2 text-white/60">
                        <FiDatabase className="h-3 w-3" aria-hidden="true" />
                        {t("v21.work.migrationConsole")}
                      </span>
                      <span className="flex items-center gap-1.5 text-[var(--console-accent)]">
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-[var(--console-cell)]"
                          aria-hidden="true"
                        />
                        {t("v21.work.verified")}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
                      <div>
                        <div className="flex items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.14em]">
                          <span className="text-white/55">
                            {t("v21.work.source")}
                          </span>
                          <span className="text-[var(--console-accent)]">
                            {t("v21.work.target")}
                          </span>
                        </div>

                        <div
                          className="mt-3 grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1"
                          aria-hidden="true"
                        >
                          {Array.from({ length: 70 }).map((_, index) => (
                            <span
                              key={index}
                              className={`aspect-square rounded-[2px] ${
                                index >= 67
                                  ? "bg-[var(--console-cell)]"
                                  : "bg-white/[0.08]"
                              }`}
                            />
                          ))}
                        </div>

                        <div className="mt-2.5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em]">
                          <span className="text-white/80">{fromStorage}</span>
                          <span className="text-[var(--console-accent)]">
                            {toStorage}
                          </span>
                        </div>

                        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/45">
                          {t("v21.work.unit")}
                        </p>
                      </div>

                      <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                        <div>
                          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/55">
                            {t("v21.work.storageReduction")}
                          </p>
                          <p className="mt-1.5 text-[11px] leading-snug text-white/75">
                            {t("v21.work.zeroLoss")}
                          </p>
                        </div>
                        <span className="display text-[clamp(2.4rem,5vw,3.5rem)] leading-none text-[var(--console-accent)]">
                          {migrationStats[2]?.value ?? "95%+"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-line py-3">
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label={t("v21.work.label")}
          >
            <button
              type="button"
              onClick={() => setFilter("all")}
              aria-pressed={filter === "all"}
              className={`flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors ${
                filter === "all"
                  ? "bg-brand text-brand-ink"
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
                className={`flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors ${
                  filter === category.type
                    ? "bg-brand text-brand-ink"
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
          <p className="py-24 text-center text-muted">
            {t("v21.work.noResults")}
          </p>
        ) : (
          <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2">
            {filtered.map((project) => {
              const featured = project.id === FEATURED_ID;
              const technologies = project.technologies.slice(0, 4);
              const headlineStat = project.quickStats?.[0];

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
                      onClick={openCase(project)}
                      aria-label={`${t("v21.work.viewCase")} — ${project.title}`}
                      className="group grid overflow-hidden rounded-[1.5rem] border border-line bg-surface transition-colors hover:border-brand/55 lg:grid-cols-12"
                    >
                      <ProjectVisual
                        project={project}
                        priority
                        className="aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:h-full lg:min-h-[430px]"
                      />
                      <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-5">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                            <span className="chip chip-brand !py-1">
                              {t("v21.work.selectedProduct")}
                            </span>
                            <span>{project.period}</span>
                          </div>

                          <h3 className="mt-5 font-display text-[clamp(1.9rem,3.1vw,2.7rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                            <span className="link-line">{project.title}</span>
                          </h3>
                          {project.subtitle && (
                            <p className="mt-2 text-sm font-medium leading-snug text-brand-text">
                              {project.subtitle}
                            </p>
                          )}
                          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-7">
                          {project.quickStats && (
                            <div className="grid grid-cols-3 gap-2 border-y border-line py-3">
                              {project.quickStats.slice(0, 3).map((stat) => (
                                <div key={stat.label}>
                                  <p className="font-display text-xl font-semibold leading-none text-ink">
                                    {stat.value}
                                  </p>
                                  <p className="mt-1 font-mono text-[7px] uppercase leading-relaxed tracking-[0.1em] text-muted">
                                    {stat.label}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="mt-4 flex items-center justify-between gap-4">
                            <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                              {project.company}
                            </span>
                            <span className="flex items-center gap-2 text-sm font-medium text-ink">
                              {t("v21.work.viewCase")}
                              <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-ink">
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
                    onClick={openCase(project)}
                    aria-label={`${t("v21.work.viewCase")} — ${project.title}`}
                    className="group block"
                  >
                    <ProjectVisual
                      project={project}
                      className="aspect-[4/3] rounded-[1.15rem] border border-line transition-colors group-hover:border-brand/50"
                    />

                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                          <span className="text-brand-text">
                            {t(`projects.type.${project.type}`)}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-line" />
                          <span>{project.period}</span>
                        </div>
                        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-[-0.03em]">
                          <span className="link-line">{project.title}</span>
                        </h3>
                        <p className="mt-1.5 text-sm font-medium leading-snug text-ink/80">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-ink">
                        <FiArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>

                    <div className="mt-4 flex items-end justify-between gap-4 border-t border-line pt-3">
                      <div className="flex flex-wrap gap-1.5">
                        {technologies.map((tech) => (
                          <span
                            key={tech.name}
                            className="rounded-md border border-line px-2 py-0.5 font-mono text-[8px] text-muted"
                          >
                            {tech.name}
                          </span>
                        ))}
                        {project.technologies.length > technologies.length && (
                          <span className="rounded-md border border-line px-2 py-0.5 font-mono text-[8px] text-muted">
                            +{project.technologies.length - technologies.length}
                          </span>
                        )}
                      </div>
                      {headlineStat && (
                        <div className="shrink-0 text-right">
                          <p className="font-display text-xl font-semibold leading-none text-brand-text">
                            {headlineStat.value}
                          </p>
                          <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-muted">
                            {headlineStat.label}
                          </p>
                        </div>
                      )}
                    </div>
                  </a>
                </motion.article>
              );
            })}
          </div>
        )}

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-5 font-mono text-[8px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2">
            <FiLayers className="h-3 w-3 text-brand-text" aria-hidden="true" />
            {t("v21.work.archiveNote", {
              count: projects.length,
              systems: projects.filter(
                (project) => project.type === "professional",
              ).length,
            })}
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-ink transition-colors hover:text-brand-text"
          >
            {t("v21.work.discuss")}
            <FiArrowRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
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
