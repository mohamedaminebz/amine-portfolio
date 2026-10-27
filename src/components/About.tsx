import { useTranslation } from "react-i18next";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCode,
  FiGlobe,
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
    { value: "150+", label: t("v21.about.stats.apis"), highlight: true },
    { value: String(projects.length), label: t("v21.about.stats.projects") },
    { value: String(timelineItems.length), label: t("v21.about.stats.roles") },
    { value: String(skills.length), label: t("v21.about.stats.skills") },
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

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-4" y={34}>
            <div className="group relative mx-auto h-full min-h-[500px] w-full max-w-[430px] lg:max-w-none">
              <div
                className="absolute -bottom-3 left-3 right-0 top-6 rounded-[1.4rem] bg-brand"
                aria-hidden="true"
              />
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-[1.25rem] border border-line bg-surface">
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
                  className="absolute inset-0 bg-gradient-to-t from-[#080b15]/90 via-[#080b15]/5 to-[#080b15]/25"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/75">
                  <span>Portrait / 02</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-brand" />
                    {t("v21.about.availability")}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="font-display text-2xl font-semibold tracking-tight text-white">
                    {personalInfo.name}
                  </p>
                  <p className="mt-1 text-sm text-white/85">
                    {personalInfo.title}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
                      <FiMapPin className="h-2.5 w-2.5" aria-hidden="true" />
                      {t("v21.about.photoCaption")}
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
                      {t("v21.hero.remote")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:col-span-5">
            <Reveal>
              <div className="card-surface rounded-[1.25rem] p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                  <span className="eyebrow">{t("v21.about.availabilityNote")}</span>
                  <span className="chip chip-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {t("v21.about.availability")}
                  </span>
                </div>

                <p className="mt-6 text-lg leading-relaxed text-ink md:text-xl">
                  {t("v21.about.body")}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                  {t("v21.about.body2")}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-line pt-5">
                  <span className="mr-1 font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                    {t("v21.about.toolkit")}
                  </span>
                  {coreTools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-line bg-surface-2 px-2.5 py-1 font-mono text-[9px] tracking-wide text-ink transition-colors hover:border-brand hover:text-brand-text"
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
                    className="h-4 w-4 text-brand-text transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="card-surface h-full rounded-[1.25rem] p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-2 eyebrow">
                    <FiCode className="h-3.5 w-3.5 text-brand-text" aria-hidden="true" />
                    {t("v21.about.offClock")}
                  </p>
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                    {t("v21.about.languagesNote")}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {interests.map((interest) => {
                    const Icon = interestIcons[interest.icon ?? ""] ?? FiStar;
                    return (
                      <span
                        key={interest.name}
                        className="flex items-center gap-2 rounded-md border border-line bg-surface-2 px-3 py-1.5 text-sm text-ink"
                      >
                        <Icon className="h-3.5 w-3.5 text-brand-text" aria-hidden="true" />
                        {interest.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 lg:col-span-3">
            <Reveal delay={0.08}>
              <div className="brand-panel relative h-full min-h-[280px] overflow-hidden rounded-[1.25rem] p-5 md:p-6">
                <div
                  className="blueprint pointer-events-none absolute inset-0 opacity-30"
                  aria-hidden="true"
                />
                <span
                  className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[7.5rem] font-bold leading-none tracking-[-0.08em] text-white/[0.08]"
                  aria-hidden="true"
                >
                  SBG
                </span>
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/85">
                        {t("v21.about.currently")}
                      </p>
                      <span className="h-1.5 w-1.5 bg-white" aria-hidden="true" />
                    </div>
                    <p className="mt-4 font-display text-xl font-semibold leading-tight tracking-tight text-white">
                      {currentRole?.title ?? t("v21.about.currently")}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/80">
                      {currentRole?.company ?? "SBG TECHELECTRO"}
                    </p>
                    <p className="mt-4 text-xs leading-relaxed text-white/80">
                      {t("v21.about.nowDesc")}
                    </p>
                  </div>
                  <a
                    href="#timeline"
                    className="group relative mt-6 inline-flex items-center gap-2 self-start rounded-full border border-white/25 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[#2f3bff]"
                  >
                    {currentRole?.date ?? "Aug 2025 — Present"}
                    <FiArrowUpRight
                      className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="card-surface rounded-[1.25rem] p-5">
                <p className="flex items-center gap-2 eyebrow">
                  <FiGlobe className="h-3.5 w-3.5 text-brand-text" aria-hidden="true" />
                  {t("v21.about.languages")}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {languages.map((language) => (
                    <li
                      key={language.name}
                      className="flex items-baseline justify-between gap-3 border-b border-line pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-xs font-medium text-ink">
                        {language.name}
                      </span>
                      <span className="text-right font-mono text-[8px] uppercase tracking-[0.06em] text-muted">
                        {language.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-4">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative p-5 transition-colors md:p-6 ${
                  stat.highlight
                    ? "bg-ink text-canvas"
                    : "bg-surface hover:bg-surface-2/70"
                }`}
              >
                <span
                  className={`font-mono text-[8px] uppercase tracking-[0.16em] ${
                    stat.highlight ? "text-canvas/60" : "text-muted"
                  }`}
                >
                  0{index + 1}
                </span>
                <p className="display mt-5 text-[clamp(2rem,3.4vw,2.9rem)]">
                  {stat.value}
                </p>
                <p
                  className={`mt-1.5 text-[11px] leading-relaxed ${
                    stat.highlight ? "text-canvas/80" : "text-muted"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
