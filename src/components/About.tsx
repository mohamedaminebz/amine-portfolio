import { useTranslation } from "react-i18next";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCode,
  FiMapPin,
  FiPenTool,
  FiStar,
  FiTv,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { asset } from "../lib/asset";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const interestIcons: Record<string, IconType> = {
  "pen-tool": FiPenTool,
  tv: FiTv,
  "book-open": FiBookOpen,
};

const coreTools = ["React", "Node.js", "TypeScript", "React Native", "ClickHouse"];

export const About = () => {
  const { t } = useTranslation();
  const { personalInfo, interests, languages, projects, skills, timelineItems } =
    usePortfolioData();

  const stats = [
    { value: String(projects.length), label: t("v21.about.stats.projects") },
    { value: String(timelineItems.length), label: t("v21.about.stats.roles") },
    { value: String(skills.length), label: t("v21.about.stats.skills") },
    { value: "150+", label: t("v21.about.stats.apis") },
  ];

  const currentRole = timelineItems.find((item) => item.id === "work-sbg");

  return (
    <section id="about" className="section-shell border-t border-line">
      <div className="wrap">
        <SectionHeading
          label={t("v21.about.label")}
          title={t("v21.about.title")}
          accent={t("v21.about.titleAccent")}
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-4" y={34}>
            <div className="group relative h-full min-h-[430px] overflow-hidden rounded-[1.75rem] border border-line bg-surface lg:min-h-[620px]">
              <div className="portrait-tone absolute inset-0">
                <img
                  src={asset("/images/MAB.webp")}
                  alt={personalInfo.name}
                  width={1600}
                  height={1601}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[50%_22%] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/25"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">
                <span>Portrait / 02</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                  {t("v21.about.availability")}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="font-display text-2xl font-medium tracking-tight text-white">
                  {personalInfo.name}
                </p>
                <p className="mt-1 text-sm text-white/65">{personalInfo.title}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
                    <FiMapPin className="h-2.5 w-2.5" aria-hidden="true" />
                    {t("v21.about.photoCaption")}
                  </span>
                  <span className="rounded-full border border-acid/40 bg-acid/15 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-acid backdrop-blur-sm">
                    {t("v21.hero.remote")}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:gap-5 lg:col-span-8">
            <Reveal>
              <div className="card-surface rounded-[1.75rem] p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="eyebrow">{t("v21.about.availabilityNote")}</span>
                  <span className="flex items-center gap-2 rounded-full border border-line px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                    {t("v21.about.availability")}
                  </span>
                </div>

                <p className="text-base leading-relaxed text-ink md:text-lg">
                  {t("v21.about.body")}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                  {t("v21.about.body2")}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-2">
                  <span className="mr-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                    {t("v21.about.toolkit")}
                  </span>
                  {coreTools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[9px] tracking-wide text-ink transition-colors hover:border-acid hover:text-acid-text"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <a
                  href="#timeline"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink"
                >
                  <span className="link-line">{t("v21.about.journeyCta")}</span>
                  <FiArrowRight
                    className="h-4 w-4 text-acid-text transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>

            <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
              <Reveal delay={0.06}>
                <div className="grid h-full grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="group bg-surface p-4 transition-colors hover:bg-surface-2 md:p-5"
                    >
                      <p className="display text-[clamp(1.8rem,3vw,2.6rem)] transition-colors group-hover:text-acid-text">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-muted">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] bg-acid p-5 text-acid-ink md:p-6">
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] opacity-65">
                      {t("v21.about.currently")}
                    </p>
                    <p className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight">
                      {currentRole?.title ?? t("v21.about.currently")}
                    </p>
                    <p className="mt-1 text-sm font-medium opacity-75">
                      {currentRole?.company ?? "SBG TECHELECTRO"}
                    </p>
                    <p className="mt-3 max-w-[280px] text-xs leading-relaxed opacity-70">
                      {t("v21.about.nowDesc")}
                    </p>
                  </div>
                  <a
                    href="#timeline"
                    className="group relative mt-6 inline-flex items-center gap-2 self-start rounded-full border border-acid-ink/20 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors hover:bg-acid-ink hover:text-acid"
                  >
                    {currentRole?.date ?? "Aug 2025 — Present"}
                    <FiArrowUpRight
                      className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
              <Reveal delay={0.06}>
                <div className="card-surface h-full rounded-[1.75rem] p-6">
                  <p className="eyebrow">{t("v21.about.offClock")}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {interests.map((interest) => {
                      const Icon = interestIcons[interest.icon ?? ""] ?? FiStar;
                      return (
                        <span
                          key={interest.name}
                          className="flex items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-1.5 text-sm text-ink"
                        >
                          <Icon className="h-3.5 w-3.5 text-acid-text" aria-hidden="true" />
                          {interest.name}
                        </span>
                      );
                    })}
                  </div>
                  <p className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                    <FiCode className="h-3 w-3 text-acid-text" aria-hidden="true" />
                    {t("v21.about.languagesNote")}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="card-surface h-full rounded-[1.75rem] p-6">
                  <p className="eyebrow">{t("v21.about.languages")}</p>
                  <ul className="mt-4 space-y-3">
                    {languages.map((language) => (
                      <li
                        key={language.name}
                        className="flex items-center justify-between gap-3 border-b border-line pb-2 last:border-0 last:pb-0"
                      >
                        <span className="text-sm font-medium text-ink">
                          {language.name}
                        </span>
                        <span className="text-right font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                          {language.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
