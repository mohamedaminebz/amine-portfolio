// src/components/ProjectDetail.tsx
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { asset } from "../lib/asset";
import {
  AcademicProject,
  InternshipProject,
  OtherProject,
  ProfessionalProject,
  Project,
  ProjectScreenshot,
} from "../types/portfolio";
import {
  SiNodedotjs,
  SiReact,
  SiMysql,
  SiSwagger,
  SiGooglebigquery,
} from "react-icons/si";
import { IconType } from "react-icons";

interface ProjectDetailProps {
  project: Project;
  projects?: Project[];
  onClose: () => void;
  onNavigate?: (project: Project) => void;
}

interface ProjectTask {
  title: string;
  description: string;
  technologies: string[];
}

interface CaseStudyContent {
  context?: string;
  longDescription?: string;
  action?: string;
  tasks: ProjectTask[];
  responsibilities: string[];
  results: string[];
  deliverables: string[];
  learnings: string[];
  highlights: string[];
  stats: { value: string; label: string }[];
  status?: string;
  teamSize?: number;
}

const techIconMap: Record<string, IconType> = {
  "Node.js": SiNodedotjs,
  "React.js": SiReact,
  MySQL: SiMysql,
  Swagger: SiSwagger,
  BigQuery: SiGooglebigquery,
};

const buildContent = (project: Project): CaseStudyContent => {
  const shared = {
    stats: project.quickStats ?? [],
    status: project.status,
    teamSize: project.teamSize,
  };

  switch (project.type) {
    case "professional": {
      const item = project as ProfessionalProject;
      return {
        ...shared,
        context: item.story.challenge,
        action: item.story.action,
        results: [item.story.result],
        highlights: item.achievements ?? [],
        tasks: [],
        responsibilities: [],
        deliverables: [],
        learnings: [],
      };
    }
    case "internship": {
      const item = project as InternshipProject;
      return {
        ...shared,
        context: item.mission,
        tasks: item.tasks ?? [],
        results: item.results ?? [],
        deliverables: item.deliverables ?? [],
        learnings: item.learnings ?? [],
        responsibilities: [],
        highlights: [],
      };
    }
    case "academic": {
      const item = project as AcademicProject;
      return {
        ...shared,
        longDescription: item.longDescription,
        responsibilities: item.responsibilities ?? [],
        results: item.results ?? [],
        learnings: item.learnings ?? [],
        tasks: [],
        deliverables: [],
        highlights: [],
      };
    }
    default: {
      const item = project as OtherProject;
      return {
        ...shared,
        context: item.motivation,
        longDescription: item.longDescription,
        tasks: [],
        responsibilities: [],
        results: [],
        deliverables: [],
        learnings: [],
        highlights: [],
      };
    }
  }
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  projects = [],
  onClose,
  onNavigate,
}) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  const screenshots = useMemo(
    () => project.screenshots ?? [],
    [project.screenshots],
  );
  const content = useMemo(() => buildContent(project), [project]);

  const [isVisible, setIsVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("overview");

  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxTrigger = useRef<HTMLElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const selectedImage =
    lightboxIndex === null ? null : (screenshots[lightboxIndex] ?? null);
  const isLightboxOpen = lightboxIndex !== null;

  const openScreenshot = useCallback((index: number) => {
    if (index < 0) return;
    lightboxTrigger.current = document.activeElement as HTMLElement | null;
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    if (lightboxTrigger.current?.isConnected) {
      lightboxTrigger.current.focus();
    }
  }, []);

  const webScreenshots = useMemo(
    () => screenshots.filter((screenshot) => !screenshot.isMobile),
    [screenshots],
  );
  const mobileScreenshots = useMemo(
    () => screenshots.filter((screenshot) => screenshot.isMobile),
    [screenshots],
  );

  const sections = useMemo(() => {
    const list: { id: string; label: string }[] = [];
    if (content.context || content.longDescription) {
      list.push({ id: "context", label: t("projectDetail.context") });
    }
    if (
      content.tasks.length > 0 ||
      content.responsibilities.length > 0 ||
      content.action
    ) {
      list.push({ id: "work", label: t("projectDetail.whatIDid") });
    }
    if (content.results.length > 0 || content.highlights.length > 0) {
      list.push({ id: "results", label: t("projectDetail.keyResults") });
    }
    if (content.deliverables.length > 0) {
      list.push({ id: "deliverables", label: t("projectDetail.deliverables") });
    }
    if (content.learnings.length > 0) {
      list.push({ id: "learnings", label: t("projectDetail.whatILearned") });
    }
    if (project.technologies.length > 0) {
      list.push({ id: "stack", label: t("projectDetail.techStack") });
    }
    if (screenshots.length > 0) {
      list.push({ id: "gallery", label: t("projectDetail.gallery") });
    }
    return list;
  }, [content, project.technologies.length, screenshots.length, t]);

  const sectionIds = useMemo(
    () => sections.map((section) => section.id).join(","),
    [sections],
  );

  useEffect(() => {
    setIsVisible(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    dialogRef.current
      ?.querySelector<HTMLButtonElement>("[data-autofocus]")
      ?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, []);

  // Reset the reading position when navigating between projects.
  useEffect(() => {
    setLightboxIndex(null);
    setActiveSection("overview");
    scrollRef.current?.scrollTo({ top: 0 });
  }, [project.id]);

  // Move focus into the lightbox when it opens so keyboard users are not left
  // behind the overlay.
  useEffect(() => {
    if (!isLightboxOpen) return;
    lightboxRef.current
      ?.querySelector<HTMLButtonElement>("[data-lightbox-autofocus]")
      ?.focus();
  }, [isLightboxOpen]);

  const scrollToSection = (id: string) => {
    const scroller = scrollRef.current;
    const node = document.getElementById(`case-${id}`);
    if (!scroller || !node) return;

    const top =
      node.getBoundingClientRect().top -
      scroller.getBoundingClientRect().top +
      scroller.scrollTop -
      12;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    scroller.scrollTo({
      top: Math.max(top, 0),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const updateActiveSection = () => {
      const scrollerTop = scroller.getBoundingClientRect().top;
      let current = "overview";
      for (const section of sections) {
        const node = document.getElementById(`case-${section.id}`);
        if (!node) continue;
        if (node.getBoundingClientRect().top - scrollerTop <= 88) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    scroller.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    updateActiveSection();

    return () => scroller.removeEventListener("scroll", updateActiveSection);
  }, [sectionIds, sections]);

  // Keyboard navigation: Escape closes the lightbox or the dialog, arrows
  // move through screenshots and Tab stays inside the active overlay.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isLightboxOpen) closeLightbox();
        else onClose();
        return;
      }

      if (event.key === "Tab") {
        const container = isLightboxOpen
          ? lightboxRef.current
          : dialogRef.current;
        if (!container) return;

        const focusable = Array.from(
          container.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
        return;
      }

      if (lightboxIndex === null) return;

      if (event.key === "ArrowLeft" && lightboxIndex > 0) {
        setLightboxIndex(lightboxIndex - 1);
      } else if (
        event.key === "ArrowRight" &&
        lightboxIndex < screenshots.length - 1
      ) {
        setLightboxIndex(lightboxIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    closeLightbox,
    isLightboxOpen,
    lightboxIndex,
    onClose,
    screenshots.length,
  ]);

  const getTypeBadge = () => {
    switch (project.type) {
      case "professional":
        return {
          label: t("projects.type.professional"),
          bg: "from-blue-600 to-cyan-600",
          icon: "💼",
        };
      case "internship":
        return {
          label: t("projects.type.internship"),
          bg: "from-purple-600 to-pink-600",
          icon: "📚",
        };
      case "academic":
        return {
          label: t("projects.type.academic"),
          bg: "from-emerald-600 to-teal-600",
          icon: "🎓",
        };
      default:
        return {
          label: t("projects.type.other"),
          bg: "from-gray-600 to-slate-600",
          icon: "✨",
        };
    }
  };

  const typeBadge = getTypeBadge();
  const cardClass = `rounded-xl border p-5 ${
    isDark ? "border-gray-800 bg-gray-900/40" : "border-gray-200 bg-white"
  }`;
  const sectionTitleClass = `text-xs font-semibold uppercase tracking-[0.14em] ${
    isDark ? "text-gray-400" : "text-gray-500"
  }`;
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";

  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex >= 0 && currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  const renderTasks = (tasks: ProjectTask[]) => (
    <ol className="space-y-5">
      {tasks.map((task, index) => (
        <li key={`${task.title}-${index}`} className="flex gap-4">
          <span
            className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full text-[11px] font-bold ${
              isDark
                ? "bg-blue-500/15 text-blue-300"
                : "bg-blue-50 text-blue-700"
            }`}
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div className="min-w-0">
            <h4
              className={`text-[15px] font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {task.title}
            </h4>
            <p className={`mt-1 text-sm leading-relaxed ${bodyClass}`}>
              {task.description}
            </p>
            {task.technologies.length > 0 && (
              <p
                className={`mt-2 text-xs ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                {task.technologies.join(" · ")}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );

  const renderCheckList = (items: string[], tone: "result" | "neutral") => (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className="flex gap-2.5">
          <svg
            aria-hidden="true"
            className={`mt-0.5 h-4 w-4 flex-none ${
              tone === "result"
                ? isDark
                  ? "text-emerald-400"
                  : "text-emerald-600"
                : isDark
                  ? "text-blue-400"
                  : "text-blue-600"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.4}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className={`text-sm leading-relaxed ${bodyClass}`}>{item}</span>
        </li>
      ))}
    </ul>
  );

  const renderGalleryItem = (
    screenshot: ProjectScreenshot,
    index: number,
    mobile = false,
  ) => {
    const isPlaceholder = screenshot.placeholder || !screenshot.url;

    return (
      <figure
        key={`${screenshot.url}-${index}`}
        className={mobile ? "w-[210px] flex-none snap-start" : ""}
      >
        <button
          type="button"
          disabled={isPlaceholder}
          aria-label={screenshot.caption || t("projectDetail.preview")}
          onClick={() => openScreenshot(screenshots.indexOf(screenshot))}
          className={`group block w-full overflow-hidden rounded-lg border text-left transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
            isDark ? "border-gray-800" : "border-gray-200"
          } ${isPlaceholder ? "cursor-default" : "cursor-zoom-in hover:shadow-lg"}`}
        >
          <span
            className={`relative flex items-center justify-center overflow-hidden ${
              mobile ? "h-[380px] rounded-[1.15rem] bg-black" : "aspect-video"
            } ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
          >
            {isPlaceholder ? (
              <span
                className={`px-3 text-center text-xs ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {t("projectDetail.preview")}
              </span>
            ) : (
              <img
                src={asset(screenshot.url)}
                alt={screenshot.caption}
                loading="lazy"
                decoding="async"
                width={mobile ? 210 : 640}
                height={mobile ? 380 : 360}
                className={`h-full w-full transition-transform duration-500 ${
                  mobile
                    ? "object-cover object-top"
                    : "object-cover object-top group-hover:scale-[1.03]"
                }`}
              />
            )}
          </span>
        </button>
        <figcaption
          className={`mt-2 line-clamp-2 text-xs leading-snug ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {screenshot.caption}
        </figcaption>
      </figure>
    );
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 sm:items-center sm:p-4 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      >
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
          tabIndex={-1}
          className={`flex h-[100dvh] w-full flex-col overflow-hidden shadow-2xl transition-all duration-500 sm:h-[92vh] sm:max-h-[92vh] sm:max-w-5xl sm:rounded-2xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          } ${isDark ? "bg-gray-950" : "bg-white"}`}
          onClick={(event) => event.stopPropagation()}
        >
          {/* Compact, fixed header: the hero proof stays above the fold. */}
          <header
            className={`relative flex-none bg-gradient-to-r ${typeBadge.bg} px-5 pb-5 pt-5 sm:px-8 sm:pb-6 sm:pt-6`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 pr-10">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold text-white">
                  {typeBadge.label}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] text-white">
                  {project.company}
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] text-white/90">
                  {project.period}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                data-autofocus
                aria-label={t("a11y.closeProject")}
                className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <h2
              id="project-detail-title"
              className="mt-3 text-2xl font-bold text-white sm:text-3xl"
            >
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="mt-1 max-w-3xl text-sm text-white/90 sm:text-base">
                {project.subtitle}
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-white/85">
              <span className="inline-flex items-center gap-1.5">
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {project.role}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {project.location}
              </span>
              {content.teamSize && (
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-1a4 4 0 00-4-4h-1m-4 5H2v-1a5 5 0 015-5h4a5 5 0 015 5v1h-4zm-3-9a3 3 0 110-6 3 3 0 010 6z"
                    />
                  </svg>
                  {t("projectDetail.team")}:{" "}
                  {content.teamSize === 1
                    ? t("projectDetail.solo")
                    : content.teamSize}
                </span>
              )}
              {content.status && (
                <span className="inline-flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-white/80"
                  />
                  {t("projectDetail.status")}: {content.status}
                </span>
              )}
            </div>
          </header>

          <div
            ref={scrollRef}
            className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain"
          >
            {/* Hero: outcome, scope metrics, one strong visual. */}
            <div className="px-5 pb-2 pt-6 sm:px-8" id="case-overview">
              <p
                className={`text-[15px] leading-relaxed sm:text-base ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {project.description}
              </p>

              {content.stats.length > 0 && (
                <dl className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {content.stats.map((stat) => (
                    <div
                      key={`${stat.value}-${stat.label}`}
                      className={`flex flex-col-reverse rounded-lg border px-3 py-2.5 ${
                        isDark
                          ? "border-gray-800 bg-gray-900/60"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <dt
                        className={`mt-0.5 text-[11px] leading-tight ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {stat.label}
                      </dt>
                      <dd
                        className={`text-lg font-bold leading-tight ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {project.imageUrl && !project.placeholder && (
                <div
                  className={`mt-5 overflow-hidden rounded-xl border ${
                    isDark
                      ? "border-gray-800 bg-gray-900"
                      : "border-gray-200 bg-gray-100"
                  }`}
                >
                  <img
                    src={asset(project.imageUrl)}
                    alt={`${project.title} — ${project.subtitle ?? project.description}`}
                    loading="eager"
                    decoding="async"
                    className="max-h-[320px] w-full object-contain"
                  />
                </div>
              )}
            </div>

            {/* Sticky section navigation inside the scroll container. */}
            {sections.length > 1 && (
              <nav
                aria-label={t("projectDetail.caseStudySections")}
                className={`sticky top-0 z-10 mt-4 border-y px-3 backdrop-blur sm:px-6 ${
                  isDark
                    ? "border-gray-800 bg-gray-950/95"
                    : "border-gray-200 bg-white/95"
                }`}
              >
                <ul
                  className="flex gap-1 overflow-x-auto py-2"
                  style={{ scrollbarWidth: "none" }}
                >
                  {sections.map((section) => (
                    <li key={section.id} className="flex-none">
                      <button
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        aria-current={
                          activeSection === section.id ? "true" : undefined
                        }
                        className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                          activeSection === section.id
                            ? isDark
                              ? "bg-blue-500/15 text-blue-300"
                              : "bg-blue-50 text-blue-700"
                            : isDark
                              ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                              : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                        }`}
                      >
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="space-y-5 px-5 py-6 sm:px-8">
              {content.context && (
                <section id="case-context" aria-labelledby="case-context-title">
                  <h3 id="case-context-title" className={sectionTitleClass}>
                    {t("projectDetail.context")}
                  </h3>
                  <div className={`mt-2 ${cardClass}`}>
                    <p className={`text-sm leading-relaxed ${bodyClass}`}>
                      {content.context}
                    </p>
                  </div>
                </section>
              )}

              {content.longDescription && (
                <section
                  id="case-overview-details"
                  aria-label={t("projectDetail.whatIBuilt")}
                >
                  <h3 className={sectionTitleClass}>
                    {t("projectDetail.whatIBuilt")}
                  </h3>
                  <div className={`mt-2 space-y-3 ${cardClass}`}>
                    {content.longDescription
                      .split("\n\n")
                      .map((paragraph) => paragraph.trim())
                      .filter(Boolean)
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className={`whitespace-pre-line text-sm leading-relaxed ${bodyClass}`}
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </section>
              )}

              {(content.tasks.length > 0 ||
                content.responsibilities.length > 0 ||
                content.action) && (
                <section id="case-work" aria-labelledby="case-work-title">
                  <h3 id="case-work-title" className={sectionTitleClass}>
                    {t("projectDetail.whatIDid")}
                  </h3>
                  <div className={`mt-2 ${cardClass}`}>
                    {content.action && (
                      <p
                        className={`text-sm leading-relaxed ${bodyClass} ${
                          content.tasks.length ||
                          content.responsibilities.length
                            ? "mb-5"
                            : ""
                        }`}
                      >
                        {content.action}
                      </p>
                    )}
                    {content.tasks.length > 0 && renderTasks(content.tasks)}
                    {content.responsibilities.length > 0 && (
                      <ol className="space-y-3">
                        {content.responsibilities.map((item, index) => (
                          <li key={`${item}-${index}`} className="flex gap-3">
                            <span
                              aria-hidden="true"
                              className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-[10px] font-bold ${
                                isDark
                                  ? "bg-blue-500/15 text-blue-300"
                                  : "bg-blue-50 text-blue-700"
                              }`}
                            >
                              {index + 1}
                            </span>
                            <span
                              className={`text-sm leading-relaxed ${bodyClass}`}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </section>
              )}

              {(content.results.length > 0 ||
                content.highlights.length > 0) && (
                <section id="case-results" aria-labelledby="case-results-title">
                  <h3 id="case-results-title" className={sectionTitleClass}>
                    {t("projectDetail.keyResults")}
                  </h3>
                  <div
                    className={`mt-2 rounded-xl border p-5 ${
                      isDark
                        ? "border-emerald-500/20 bg-emerald-500/5"
                        : "border-emerald-200 bg-emerald-50/60"
                    }`}
                  >
                    {content.results.length > 0 &&
                      renderCheckList(content.results, "result")}
                    {content.highlights.length > 0 && (
                      <div className={content.results.length ? "mt-4" : ""}>
                        {renderCheckList(content.highlights, "neutral")}
                      </div>
                    )}
                  </div>
                </section>
              )}

              {content.deliverables.length > 0 && (
                <section
                  id="case-deliverables"
                  aria-labelledby="case-deliverables-title"
                >
                  <h3
                    id="case-deliverables-title"
                    className={sectionTitleClass}
                  >
                    {t("projectDetail.deliverables")}
                  </h3>
                  <div className={`mt-2 ${cardClass}`}>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {content.deliverables.map((item, index) => (
                        <li
                          key={`${item}-${index}`}
                          className="flex gap-2.5 text-sm leading-relaxed"
                        >
                          <span
                            aria-hidden="true"
                            className={`mt-1.5 h-1.5 w-1.5 flex-none rounded-full ${
                              isDark ? "bg-gray-500" : "bg-gray-400"
                            }`}
                          />
                          <span className={bodyClass}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {content.learnings.length > 0 && (
                <section
                  id="case-learnings"
                  aria-labelledby="case-learnings-title"
                >
                  <h3 id="case-learnings-title" className={sectionTitleClass}>
                    {t("projectDetail.whatILearned")}
                  </h3>
                  <div className={`mt-2 ${cardClass}`}>
                    {renderCheckList(content.learnings, "neutral")}
                  </div>
                </section>
              )}

              {project.technologies.length > 0 && (
                <section id="case-stack" aria-labelledby="case-stack-title">
                  <h3 id="case-stack-title" className={sectionTitleClass}>
                    {t("projectDetail.techStack")}
                  </h3>
                  <div className={`mt-2 ${cardClass}`}>
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => {
                        const TechIcon = techIconMap[tech.name];
                        return (
                          <li
                            key={tech.name}
                            className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm ${
                              isDark
                                ? "border-gray-700 bg-gray-800/70 text-gray-200"
                                : "border-gray-200 bg-gray-50 text-gray-700"
                            }`}
                          >
                            {TechIcon && (
                              <TechIcon
                                aria-hidden="true"
                                size={16}
                                className={isDark ? "opacity-80" : "opacity-70"}
                              />
                            )}
                            {tech.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </section>
              )}

              {screenshots.length > 0 && (
                <section id="case-gallery" aria-labelledby="case-gallery-title">
                  <h3 id="case-gallery-title" className={sectionTitleClass}>
                    {t("projectDetail.gallery")}
                  </h3>
                  <div className={`mt-2 space-y-5 ${cardClass}`}>
                    {webScreenshots.length > 0 && (
                      <div>
                        <p
                          className={`mb-3 text-[11px] font-medium uppercase tracking-wider ${
                            isDark ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {t("projectDetail.webScreenshots")}
                        </p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {webScreenshots.map((screenshot, index) =>
                            renderGalleryItem(screenshot, index),
                          )}
                        </div>
                      </div>
                    )}

                    {mobileScreenshots.length > 0 && (
                      <div>
                        <p
                          className={`mb-3 text-[11px] font-medium uppercase tracking-wider ${
                            isDark ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {t("projectDetail.mobileScreenshots")}
                        </p>
                        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
                          {mobileScreenshots.map((screenshot, index) =>
                            renderGalleryItem(screenshot, index, true),
                          )}
                        </div>
                        {mobileScreenshots.length > 2 && (
                          <p
                            className={`mt-1 text-xs ${
                              isDark ? "text-gray-500" : "text-gray-400"
                            }`}
                          >
                            ← {t("projectDetail.swipeToSee")} →
                          </p>
                        )}
                      </div>
                    )}

                    <p
                      className={`text-xs ${
                        isDark ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {t("projectDetail.clickToEnlarge")}
                    </p>
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Fixed footer: navigation between projects and a contact action. */}
          <footer
            className={`flex flex-none flex-wrap items-center justify-between gap-2 border-t px-4 py-3 sm:px-6 ${
              isDark
                ? "border-gray-800 bg-gray-950"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => previousProject && onNavigate?.(previousProject)}
                disabled={!previousProject || !onNavigate}
                className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                  isDark
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="hidden sm:inline">
                  {t("projectDetail.previousProject")}
                </span>
              </button>
              <button
                type="button"
                onClick={() => nextProject && onNavigate?.(nextProject)}
                disabled={!nextProject || !onNavigate}
                className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                  isDark
                    ? "text-gray-300 hover:bg-gray-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="hidden sm:inline">
                  {t("projectDetail.nextProject")}
                </span>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t("projectDetail.close")}
              </button>
            </div>
          </footer>
        </div>
      </div>

      {selectedImage && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={t("projectDetail.screenshots")}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              data-lightbox-autofocus
              aria-label={t("a11y.closeImage")}
              className="absolute -top-11 right-0 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative flex items-center justify-center">
              <button
                type="button"
                onClick={() =>
                  lightboxIndex !== null &&
                  lightboxIndex > 0 &&
                  setLightboxIndex(lightboxIndex - 1)
                }
                disabled={lightboxIndex === null || lightboxIndex === 0}
                aria-label={t("a11y.previousImage")}
                className="absolute left-0 z-10 -translate-x-2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 sm:-translate-x-12"
              >
                <svg
                  aria-hidden="true"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex h-[70vh] w-full items-center justify-center rounded-xl bg-black/30 sm:h-[75vh]">
                <img
                  src={asset(selectedImage.url)}
                  alt={selectedImage.caption}
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  lightboxIndex !== null &&
                  lightboxIndex < screenshots.length - 1 &&
                  setLightboxIndex(lightboxIndex + 1)
                }
                disabled={
                  lightboxIndex === null ||
                  lightboxIndex >= screenshots.length - 1
                }
                aria-label={t("a11y.nextImage")}
                className="absolute right-0 z-10 translate-x-2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 sm:translate-x-12"
              >
                <svg
                  aria-hidden="true"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-white/80">{selectedImage.caption}</p>
              <p className="mt-1 text-xs text-white/50">
                {(lightboxIndex ?? 0) + 1} / {screenshots.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
