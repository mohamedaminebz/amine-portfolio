import { FiArrowUpRight } from "react-icons/fi";
import { asset } from "../lib/asset";
import type { Project } from "../types/portfolio";

interface ProjectVisualProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

const typeLabel: Record<Project["type"], string> = {
  professional: "PRODUCT",
  internship: "PRODUCT",
  academic: "PLATFORM",
  other: "EXPERIMENT",
};

/**
 * Project cover art. Real screenshots are used when available; otherwise a
 * generated "case file" panel keeps placeholder projects looking deliberate.
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
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70"
          aria-hidden="true"
        />
      </div>
    );
  }

  const headline = project.quickStats?.[0];
  const index = typeLabel[project.type];

  return (
    <div
      className={`relative overflow-hidden bg-[#0b0c09] text-[#f2f0e8] ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(213,255,63,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(213,255,63,0.4) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-acid/25 blur-[70px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-acid/10 blur-[60px]"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
          Case file / {project.id.slice(0, 2).toUpperCase()}
        </span>
        <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white/50">
          {index}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="font-display text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-none tracking-[-0.05em] text-acid">
          {headline?.value ?? "01"}
        </p>
        <p className="mt-2 max-w-[220px] font-mono text-[8px] uppercase leading-relaxed tracking-[0.16em] text-white/55">
          {headline?.label ?? project.type}
        </p>
      </div>

      <span
        className="absolute -bottom-6 right-3 font-display text-[8rem] font-bold leading-none text-white/[0.035]"
        aria-hidden="true"
      >
        {project.title.charAt(0)}
      </span>

      <span className="absolute right-5 top-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70">
        <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </div>
  );
};
