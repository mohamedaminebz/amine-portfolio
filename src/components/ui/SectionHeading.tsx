import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  accent: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const splitLabel = (label: string) => {
  const [index, ...rest] = label.split("—");
  return {
    index: rest.length > 0 ? index.trim() : null,
    name: rest.length > 0 ? rest.join("—").trim() : label,
  };
};

export const SectionHeading = ({
  label,
  title,
  accent,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) => {
  const { index, name } = splitLabel(label);
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : ""} max-w-5xl ${className}`}
    >
      <div
        className={`flex items-center gap-3 border-t border-line pt-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        {index ? (
          <span className="grid h-7 min-w-7 place-items-center rounded-[5px] bg-brand px-1.5 font-mono text-[10px] font-medium text-brand-ink">
            {index}
          </span>
        ) : (
          <span className="h-2 w-2 bg-brand" aria-hidden="true" />
        )}
        <span className="eyebrow text-ink">{name}</span>
        {!centered && (
          <>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-muted sm:block">
              Index / 2026
            </span>
          </>
        )}
      </div>

      <h2 className="display mt-8 text-[clamp(2.7rem,6.4vw,5.9rem)]">
        <span className="block">{title}</span>
        <span className="block text-brand-display">{accent}</span>
      </h2>

      {description && (
        <p
          className={`mt-7 max-w-2xl text-[15px] leading-relaxed text-muted md:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};
