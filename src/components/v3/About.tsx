import { useTranslation } from "react-i18next";
import {
  FiCompass,
  FiDatabase,
  FiFileText,
  FiLayers,
  FiRefreshCw,
  FiServer,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";
import type { PortfolioData } from "../../data";
import { useLocalTime } from "../../hooks/useLocalTime";
import type { Project } from "../../types/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface AboutProps {
  data: PortfolioData;
  onOpenCase: (id: string) => void;
}

const fitCards = [
  {
    key: "backend",
    projectId: "pyrojs-refonte",
    statIndexes: [0, 1],
    icon: FiServer,
  },
  {
    key: "data",
    projectId: "clickhouse-migration",
    statIndexes: [0, 2],
    icon: FiDatabase,
  },
  {
    key: "product",
    projectId: "winshot-reward",
    statIndexes: [2, 3],
    icon: FiSmartphone,
  },
  {
    key: "automation",
    projectId: "iot-reporting-service",
    statIndexes: [0, 1],
    icon: FiRefreshCw,
  },
] as const;

const principles = [
  { number: 1, icon: FiCompass },
  { number: 2, icon: FiZap },
  { number: 3, icon: FiFileText },
  { number: 4, icon: FiLayers },
] as const;

export const About = ({ data, onOpenCase }: AboutProps) => {
  const { t, i18n } = useTranslation();
  const localTime = useLocalTime("Africa/Tunis", i18n.language);
  const { personalInfo, projects, timelineItems, skills, interests, languages } =
    data;

  const apis = projects.find((project) => project.id === "pyrojs-refonte");

  const stats = [
    { value: String(projects.length), label: t("v21.about.stats.projects") },
    { value: String(timelineItems.length), label: t("v21.about.stats.roles") },
    { value: String(skills.length), label: t("v21.about.stats.skills") },
    {
      value: apis?.quickStats?.[0]?.value ?? "150+",
      label: t("v21.about.stats.apis"),
    },
  ];

  const fit = fitCards.flatMap((card) => {
    const project: Project | undefined = projects.find(
      (item) => item.id === card.projectId,
    );
    if (!project) return [];

    const proofs = card.statIndexes.flatMap((index, proofIndex) => {
      const value = project.quickStats?.[index]?.value;
      return value
        ? [
            {
              value,
              label: t(`v21.fit.cards.${card.key}.proof${proofIndex + 1}`),
            },
          ]
        : [];
    });

    return [{ ...card, project, proofs }];
  });

  return (
    <section id="about" className="section">
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label={t("v3.about.label")}
            title={t("v3.about.title")}
            accent={t("v3.about.titleAccent")}
          />
        </Reveal>

        <div className="mt-9 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="card-soft flex h-full flex-col p-6 sm:p-8">
              <p className="text-[clamp(1.05rem,1.7vw,1.3rem)] font-medium leading-relaxed">
                {t("v21.about.body")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {t("v21.about.body2")}
              </p>

              <dl className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-surface-2/60 p-3.5"
                  >
                    <dd className="display gradient-text text-[clamp(1.3rem,2.6vw,1.8rem)]">
                      {stat.value}
                    </dd>
                    <dt className="mt-1 font-mono text-[7px] uppercase leading-snug tracking-[0.1em] text-muted">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            <Reveal delay={60} className="sm:col-span-2">
              <div className="gradient-bg relative h-full overflow-hidden rounded-[var(--radius)] p-6 text-white shadow-[var(--shadow)]">
                <span
                  aria-hidden="true"
                  className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-white/20"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-14 right-16 h-32 w-32 rounded-full bg-white/10 blur-xl"
                />
                <div className="relative">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/65">
                    {t("v3.about.now")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    {t("v21.about.nowDesc")}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-white backdrop-blur-md">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-white"
                      style={{
                        animation: "pulse-soft 2.4s ease-in-out infinite",
                      }}
                    />
                    {t("v21.about.availability")}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card-soft h-full p-5">
                <p className="label !text-[8px]">{t("v3.contact.time")}</p>
                <p className="display mt-2 text-2xl">{localTime}</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                  {personalInfo.location} · GMT+1
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="card-soft h-full p-5">
                <p className="label !text-[8px]">{t("v3.about.languages")}</p>
                <ul className="mt-2 space-y-1.5">
                  {languages.map((language) => (
                    <li
                      key={language.name}
                      className="flex items-baseline justify-between gap-2 text-[12px]"
                    >
                      <span>{language.name}</span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.08em] text-muted">
                        {language.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200} className="sm:col-span-2">
              <div className="card-soft p-5">
                <p className="label !text-[8px]">{t("v3.about.offClock")}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {interests.map((interest) => (
                    <span
                      key={interest.name}
                      className="rounded-full bg-surface-2/70 px-2.5 py-1 text-[11px] text-muted"
                    >
                      {interest.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 50}>
              <div className="card-soft h-full p-5 transition-all hover:-translate-y-1 hover:border-brand/25">
                <span className="icon-tile">
                  <principle.icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-sm font-bold">
                  {t(`v3.about.principle${principle.number}Title`)}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {t(`v3.about.principle${principle.number}Body`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <span className="pill pill-brand">{t("v3.about.fitLabel")}</span>
              <h3 className="display text-[clamp(1.5rem,3vw,2.1rem)]">
                {t("v3.about.fitTitle")}
              </h3>
            </div>
          </Reveal>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {fit.map((card, index) => (
              <Reveal key={card.key} delay={index * 60}>
                <button
                  type="button"
                  onClick={() => onOpenCase(card.project.id)}
                  className="card-soft group flex h-full w-full flex-col p-5 text-left transition-all hover:-translate-y-1 hover:border-brand/25 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="flex items-center justify-between">
                    <span className="icon-tile">
                      <card.icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-brand-text">
                      {t(`v21.fit.cards.${card.key}.focus`)}
                    </span>
                  </span>
                  <span className="mt-4 text-sm font-bold">
                    {t(`v21.fit.cards.${card.key}.title`)}
                  </span>
                  <span className="mt-1.5 text-xs leading-relaxed text-muted">
                    {t(`v21.fit.cards.${card.key}.ask`)}
                  </span>

                  <span className="mt-auto grid grid-cols-2 gap-2 pt-5">
                    {card.proofs.map((proof) => (
                      <span
                        key={proof.label}
                        className="rounded-xl bg-surface-2/60 px-2.5 py-2"
                      >
                        <span className="display block text-base leading-none">
                          {proof.value}
                        </span>
                        <span className="mt-1 block font-mono text-[6.5px] uppercase leading-tight tracking-[0.06em] text-muted">
                          {proof.label}
                        </span>
                      </span>
                    ))}
                  </span>
                  <span className="mt-3 flex items-center justify-between border-t border-line pt-3">
                    <span className="max-w-[16ch] truncate text-[10px] text-muted">
                      {card.project.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-brand-text transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
