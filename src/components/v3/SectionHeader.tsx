interface SectionHeaderProps {
  label: string;
  title: string;
  accent?: string;
  subtitle?: string;
}

export const SectionHeader = ({
  label,
  title,
  accent,
  subtitle,
}: SectionHeaderProps) => (
  <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
    <div>
      <span className="pill pill-brand">{label}</span>
      <h2 className="display mt-5 text-[clamp(2.2rem,5vw,3.8rem)]">
        {title}
        {accent ? (
          <>
            {" "}
            <span className="gradient-text">{accent}</span>
          </>
        ) : null}
      </h2>
    </div>
    {subtitle ? (
      <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">
        {subtitle}
      </p>
    ) : null}
  </header>
);
