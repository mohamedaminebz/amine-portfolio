import { FiArrowUpRight } from "react-icons/fi";
import { asset } from "../lib/asset";
import type { Project } from "../types/portfolio";

interface ProjectVisualProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

const typeLabel: Record<Project["type"], string> = {
  professional: "SYSTEM",
  internship: "PRODUCT",
  academic: "PLATFORM",
  other: "EXPERIMENT",
};

/**
 * Project cover art. Real screenshots carry the product work; projects without
 * screenshots get a typographic "specimen" cover built from their strongest
 * metric, so the placeholder still says something true.
 */
export const ProjectVisual = ({
  project,
  className = "",
  priority = false,
}: ProjectVisualProps) => {
  const screenshot = project.screenshots?.find((item) => !item.isMobile);
  const cover = project.imageUrl ?? screenshot?.url;

  if (cover && !project.placeholder) {
    return (
      <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
        <img
          src={asset(cover)}
          alt={project.title}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#080b15]/50 via-transparent to-transparent opacity-70"
          aria-hidden="true"
        />
      </div>
    );
  }

  const headline = project.quickStats?.[0];
  const index = typeLabel[project.type];

  return (
    <div
      className={`relative overflow-hidden bg-surface-2 text-ink ${className}`}
    >
      <div
        className="absolute inset-0 dot-grid opacity-50"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-ink/10"
        aria-hidden="true"
      />
      <div
        className="absolute left-0 top-0 h-full w-1 bg-brand"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
          Case file / {project.id.slice(0, 2).toUpperCase()}
        </span>
        <span className="chip !py-1">{index}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="display text-[clamp(3rem,5.6vw,5rem)] text-brand-display">
          {headline?.value ?? "01"}
        </p>
        <p className="mt-2 max-w-[220px] font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-muted">
          {headline?.label ?? project.type}
        </p>
      </div>

      <span
        className="pointer-events-none absolute -bottom-9 right-2 select-none font-display text-[10rem] font-bold leading-none text-ink/[0.05]"
        aria-hidden="true"
      >
        {project.title.charAt(0)}
      </span>

      <span className="absolute right-5 top-1/2 grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/60 text-muted backdrop-blur-sm transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-brand-ink">
        <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </div>
  );
};
