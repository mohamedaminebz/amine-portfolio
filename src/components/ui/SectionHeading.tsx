import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  accent: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  label,
  title,
  accent,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) => (
  <Reveal
    className={`${align === "center" ? "mx-auto text-center" : ""} max-w-5xl ${className}`}
  >
    <div
      className={`mb-7 flex items-center gap-3 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-acid opacity-40 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
      </span>
      <span className="eyebrow">{label}</span>
      <span className="h-px w-12 bg-line" aria-hidden="true" />
    </div>

    <h2 className="display text-[clamp(2.65rem,6.6vw,6rem)]">
      <span className="block">{title}</span>
      <span className="block text-acid-display">{accent}</span>
    </h2>

    {description && (
      <p
        className={`mt-7 max-w-2xl text-[15px] leading-relaxed text-muted md:text-lg ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    )}
  </Reveal>
);
