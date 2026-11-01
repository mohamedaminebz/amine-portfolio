interface SectionHeaderProps {
  label: string;
  title: string;
  accent?: string;
  subtitle?: string;
}

/**
 * One consistent header for every section: label, headline, then the
 * supporting line directly underneath so the subtitle reads as part of the
 * title instead of a detached right-hand column.
 */
export const SectionHeader = ({
  label,
  title,
  accent,
  subtitle,
}: SectionHeaderProps) => (
  <header>
    <span className="pill pill-brand">{label}</span>
    <h2 className="display mt-5 max-w-3xl text-[clamp(2.1rem,4.6vw,3.5rem)]">
      {title}
      {accent ? (
        <>
          {" "}
          <span className="gradient-text">{accent}</span>
        </>
      ) : null}
    </h2>
    {subtitle ? (
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
        {subtitle}
      </p>
    ) : null}
  </header>
);
