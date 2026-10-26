import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";
import { asset } from "../lib/asset";
import type {
  AcademicProject,
  InternshipProject,
  OtherProject,
  ProfessionalProject,
  Project,
} from "../types/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./ui/Reveal";

interface CaseStudyProps {
  project: Project;
  projects: Project[];
  onClose: () => void;
  onNavigate: (project: Project) => void;
}

interface CaseContent {
  summary?: string;
  story?: { challenge: string; action: string; result: string };
  tasks?: { title: string; description: string; technologies: string[] }[];
  achievements?: string[];
  results?: string[];
  deliverables?: string[];
  learnings?: string[];
  responsibilities?: string[];
  keySkills?: string[];
  longDescription?: string;
}

const buildContent = (project: Project): CaseContent => {
  switch (project.type) {
    case "professional": {
      const item = project as ProfessionalProject;
      return {
        summary: item.summary,
        story: item.story,
        achievements: item.achievements,
      };
    }
    case "internship": {
      const item = project as InternshipProject;
      return {
        summary: item.mission,
        tasks: item.tasks,
        results: item.results,
        deliverables: item.deliverables,
        learnings: item.learnings,
      };
    }
    case "academic": {
      const item = project as AcademicProject;
      return {
        longDescription: item.longDescription,
        responsibilities: item.responsibilities,
        results: item.results,
        keySkills: item.keySkills,
        learnings: item.learnings,
      };
    }
    default: {
      const item = project as OtherProject;
      return {
        summary: item.motivation,
        longDescription: item.longDescription,
      };
    }
  }
};

const list = (items?: string[]) => items?.filter(Boolean) ?? [];

export const CaseStudy = ({
  project,
  projects,
  onClose,
  onNavigate,
}: CaseStudyProps) => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const lightboxTrigger = useRef<HTMLElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const content = useMemo(() => buildContent(project), [project]);
  const screenshots = useMemo(() => project.screenshots ?? [], [project.screenshots]);
  const selectedImage =
    lightboxIndex === null ? null : (screenshots[lightboxIndex] ?? null);

  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const typeLabel = t(`projects.type.${project.type}`);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = "";
      previousFocus.current?.focus?.();
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
    setLightboxIndex(null);
  }, [project.id]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          onClose();
        }
        return;
      }

      if (event.key !== "Tab" || lightboxIndex !== null) return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, onClose]);

  const lightboxOpen = lightboxIndex !== null;

  useEffect(() => {
    if (!lightboxOpen) return;
    const frame = requestAnimationFrame(() => lightboxCloseRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setLightboxIndex((index) =>
          index === null ? null : (index + 1) % screenshots.length,
        );
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setLightboxIndex((index) =>
          index === null
            ? null
            : (index - 1 + screenshots.length) % screenshots.length,
        );
      }
      if (event.key === "Tab") {
        const focusable = lightboxRef.current?.querySelectorAll<HTMLElement>(
          'button, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
      lightboxTrigger.current?.focus?.();
    };
  }, [lightboxOpen, screenshots.length]);

  const openLightbox = (index: number) => {
    lightboxTrigger.current = document.activeElement as HTMLElement | null;
    setLightboxIndex(index);
  };

  const renderList = (
    items: string[],
    numbered = false,
    columns = false,
  ) =>
    items.length > 0 && (
      <ul className={columns ? "grid gap-3 sm:grid-cols-2" : "space-y-3"}>
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex gap-3 text-sm leading-relaxed text-muted"
          >
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line font-mono text-[8px] text-acid-text">
              {numbered ? String(index + 1).padStart(2, "0") : "✓"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );

  const hasGallery = screenshots.length > 0;

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[115] bg-canvas"
      initial={reduce ? false : { y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={reduce ? undefined : { y: 16, opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div ref={scrollRef} className="h-full overflow-y-auto overscroll-contain">
        <header className="glass sticky top-0 z-20 border-b border-line">
          <div className="wrap flex h-16 items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-colors group-hover:border-acid group-hover:text-acid-text">
                <FiArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="hidden sm:inline">{t("v21.case.back")}</span>
            </button>

            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
              <span className="text-acid-text">
                {String(projectIndex + 1).padStart(2, "0")}
              </span>
              <span className="h-3 w-px bg-line" />
              <span>{String(projects.length).padStart(2, "0")}</span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={t("v21.case.close")}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-acid hover:bg-acid hover:text-acid-ink"
            >
              <FiX className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </header>

        <article className="wrap max-w-6xl pb-20 pt-10 md:pt-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                <span className="rounded-full border border-acid/30 bg-acid-soft px-2.5 py-1 text-acid-text">
                  {typeLabel}
                </span>
                <span>{project.period}</span>
                <span className="h-1 w-1 rounded-full bg-line" />
                <span>{project.company}</span>
              </div>

              <h1
                id="case-study-title"
                className="display mt-6 text-[clamp(2.7rem,7vw,6.4rem)]"
              >
                {project.title}
              </h1>

              {project.subtitle && (
                <p className="mt-4 max-w-2xl font-display text-lg leading-snug tracking-tight text-acid-text md:text-2xl">
                  {project.subtitle}
                </p>
              )}
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-xl text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              {project.status && (
                <p className="mt-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                  {project.status}
                </p>
              )}
            </div>
          </div>

          <div className="mt-9 overflow-hidden rounded-[1.5rem] border border-line">
            <ProjectVisual
              project={project}
              priority
              className="aspect-[16/9] md:aspect-[21/9]"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {[
              { label: t("v21.case.role"), value: project.role },
              { label: t("v21.case.period"), value: project.period },
              { label: t("v21.case.company"), value: project.company },
              {
                label: t("v21.case.team"),
                value:
                  project.teamSize === 1
                    ? t("v21.case.solo")
                    : `${project.teamSize ?? 1}`,
              },
            ].map((item) => (
              <div key={item.label} className="bg-surface p-4 md:p-5">
                <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-ink">{item.value}</p>
              </div>
            ))}
          </div>

          {project.quickStats && project.quickStats.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {project.quickStats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="rounded-2xl border border-line bg-surface-2/60 p-4"
                >
                  <p className="font-display text-2xl font-semibold leading-none tracking-tight text-acid-text md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-14 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {content.summary && (
                <Reveal>
                  <p className="font-display text-xl leading-relaxed tracking-tight text-ink md:text-2xl">
                    {content.summary}
                  </p>
                </Reveal>
              )}

              {content.story && (
                <Reveal className="mt-12">
                  <p className="eyebrow">{t("v21.case.theStory")}</p>
                  <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
                    {[
                      {
                        label: t("v21.case.challenge"),
                        body: content.story.challenge,
                      },
                      { label: t("v21.case.action"), body: content.story.action },
                      { label: t("v21.case.result"), body: content.story.result },
                    ].map((block, index) => (
                      <div key={block.label} className="bg-surface p-5 md:p-6">
                        <span className="font-mono text-[9px] text-acid-text">
                          0{index + 1}
                        </span>
                        <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                          {block.label}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {block.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {content.longDescription && (
                <Reveal className="mt-12">
                  <p className="eyebrow">{t("v21.case.overview")}</p>
                  <div className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted">
                    {content.longDescription.replace(/\*\*/g, "")}
                  </div>
                </Reveal>
              )}

              {content.tasks && content.tasks.length > 0 && (
                <Reveal className="mt-12">
                  <p className="eyebrow">{t("v21.case.keyTasks")}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {content.tasks.map((task, index) => (
                      <div
                        key={task.title}
                        className="rounded-2xl border border-line bg-surface p-5"
                      >
                        <span className="font-mono text-[9px] text-acid-text">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-2 font-display text-lg font-medium tracking-tight">
                          {task.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {task.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {task.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-line px-2 py-0.5 font-mono text-[8px] text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {content.achievements && content.achievements.length > 0 && (
                <Reveal className="mt-12">
                  <p className="eyebrow">{t("v21.case.achievements")}</p>
                  <div className="mt-5">{renderList(content.achievements)}</div>
                </Reveal>
              )}

              {content.responsibilities &&
                content.responsibilities.length > 0 && (
                  <Reveal className="mt-12">
                    <p className="eyebrow">{t("v21.case.responsibilities")}</p>
                    <div className="mt-5">
                      {renderList(content.responsibilities, true)}
                    </div>
                  </Reveal>
                )}
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl border border-line bg-surface p-5">
                  <p className="eyebrow">{t("v21.case.tech")}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[9px] text-ink"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-line pt-4">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                      {t("v21.case.location")}
                    </p>
                    <p className="mt-1 text-sm text-ink">{project.location}</p>
                  </div>
                </div>

                {list(content.results).length > 0 && (
                  <div className="mt-4 rounded-2xl border border-line bg-surface p-5">
                    <p className="eyebrow">{t("v21.case.results")}</p>
                    <div className="mt-4">{renderList(list(content.results))}</div>
                  </div>
                )}

                {list(content.keySkills).length > 0 && (
                  <div className="mt-4 rounded-2xl border border-line bg-surface p-5">
                    <p className="eyebrow">{t("v21.case.keySkills")}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {list(content.keySkills).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-line px-2 py-1 text-xs text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {list(content.deliverables).length > 0 && (
                  <div className="mt-4 rounded-2xl border border-line bg-surface p-5">
                    <p className="eyebrow">{t("v21.case.deliverables")}</p>
                    <div className="mt-4">{renderList(list(content.deliverables))}</div>
                  </div>
                )}

                {list(content.learnings).length > 0 && (
                  <div className="mt-4 rounded-2xl border border-line bg-surface p-5">
                    <p className="eyebrow">{t("v21.case.learnings")}</p>
                    <div className="mt-4">{renderList(list(content.learnings))}</div>
                  </div>
                )}
              </div>
            </aside>
          </div>

          {hasGallery && (
            <Reveal className="mt-16">
              <div className="flex items-center justify-between gap-4 border-t border-line pt-8">
                <p className="eyebrow">{t("v21.case.gallery")}</p>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  {screenshots.length} {t("projectDetail.images")}
                </span>
              </div>

              <div className="mt-6 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot.url}
                    type="button"
                    onClick={() => openLightbox(index)}
                    aria-label={`${t("v21.case.viewImage")} — ${screenshot.caption}`}
                    className="group relative block w-full break-inside-avoid overflow-hidden rounded-xl border border-line bg-surface-2 text-left"
                  >
                    <img
                      src={asset(screenshot.url)}
                      alt={screenshot.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-transparent to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="flex items-center justify-between gap-2 text-[10px] font-medium text-white">
                        {screenshot.caption}
                        <FiMaximize2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => onNavigate(previousProject)}
              className="group flex max-w-md items-center gap-3 text-left"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-acid group-hover:bg-acid group-hover:text-acid-ink">
                <FiChevronLeft className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                  {t("v21.case.previous")}
                </span>
                <span className="mt-0.5 block truncate text-sm font-medium text-ink">
                  {previousProject.title}
                </span>
              </span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="mx-auto flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-acid hover:text-ink sm:mx-0"
            >
              <FiArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              {t("v21.case.back")}
            </button>

            <button
              type="button"
              onClick={() => onNavigate(nextProject)}
              className="group flex max-w-md items-center gap-3 text-right sm:justify-end"
            >
              <span>
                <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                  {t("v21.case.next")}
                </span>
                <span className="mt-0.5 block truncate text-sm font-medium text-ink">
                  {nextProject.title}
                </span>
              </span>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-acid group-hover:bg-acid group-hover:text-acid-ink">
                <FiChevronRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
            <FiArrowUpRight className="h-3 w-3 text-acid-text" aria-hidden="true" />
            {project.period} · {project.company}
          </p>
        </article>
      </div>

      {createPortal(
        <AnimatePresence>
          {selectedImage && lightboxIndex !== null && (
            <motion.div
              ref={lightboxRef}
              className="fixed inset-0 z-[140] flex flex-col bg-black/95 text-white"
              role="dialog"
              aria-modal="true"
              aria-label={selectedImage.caption}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex h-16 shrink-0 items-center justify-between gap-4 px-4 md:px-6">
                <span className="max-w-[70%] truncate text-sm text-white/70">
                  {selectedImage.caption}
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-white/40">
                    {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
                    {String(screenshots.length).padStart(2, "0")}
                  </span>
                  <button
                    ref={lightboxCloseRef}
                    type="button"
                    onClick={() => setLightboxIndex(null)}
                    aria-label={t("a11y.closeImage")}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-acid hover:text-acid"
                  >
                    <FiX className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div
                className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-6"
                onClick={() => setLightboxIndex(null)}
              >
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setLightboxIndex(
                      (lightboxIndex - 1 + screenshots.length) %
                        screenshots.length,
                    );
                  }}
                  aria-label={t("a11y.previousImage")}
                  className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-acid hover:text-acid md:left-6"
                >
                  <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>

                <motion.img
                  key={selectedImage.url}
                  src={asset(selectedImage.url)}
                  alt={selectedImage.caption}
                  initial={reduce ? false : { opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  onClick={(event) => event.stopPropagation()}
                  className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                />

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setLightboxIndex(
                      (lightboxIndex + 1) % screenshots.length,
                    );
                  }}
                  aria-label={t("a11y.nextImage")}
                  className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:border-acid hover:text-acid md:right-6"
                >
                  <FiChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="hidden shrink-0 items-center justify-center gap-2 pb-5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 sm:flex">
                <FiArrowLeft className="h-3 w-3" aria-hidden="true" />
                <FiArrowRight className="h-3 w-3" aria-hidden="true" />
                {t("projectDetail.swipeToSee")}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </motion.div>
  );
};

export default CaseStudy;
