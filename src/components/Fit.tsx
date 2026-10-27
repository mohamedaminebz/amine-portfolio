import { useTranslation } from "react-i18next";
import {
  FiActivity,
  FiArrowDown,
  FiArrowUpRight,
  FiDatabase,
  FiLayers,
  FiServer,
} from "react-icons/fi";
import { usePortfolioData } from "../hooks/usePortfolioData";
import type { Project } from "../types/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

/**
 * Need-first cards for recruiters. Each card leads with the problem being
 * hired for, then proves it with values pulled from the matching project so
 * the numbers never drift from the case study.
 */
const fitCards = [
  {
    key: "backend",
    projectId: "pyrojs-refonte",
    statIndexes: [0, 1],
    requirements: ["Node.js", "REST APIs", "SQL", "Microservices", "Swagger"],
    icon: FiServer,
  },
  {
    key: "data",
    projectId: "clickhouse-migration",
    statIndexes: [0, 1],
    requirements: [
      "ClickHouse",
      "MySQL",
      "SQL",
      "Data Modeling",
      "Benchmarking",
    ],
    icon: FiDatabase,
  },
  {
    key: "product",
    projectId: "winshot-reward",
    statIndexes: [2, 3],
    requirements: ["React", "React Native", "Node.js", "MongoDB", "CI/CD"],
    icon: FiLayers,
  },
  {
    key: "automation",
    projectId: "iot-reporting-service",
    statIndexes: [0, 1],
    requirements: ["Node.js", "Cron Jobs", "SQL", "Redis", "RabbitMQ"],
    icon: FiActivity,
  },
] as const;

type ResolvedFitCard = (typeof fitCards)[number] & {
  project: Project;
  proofs: { value: string; label: string }[];
};

export const Fit = () => {
  const { t } = useTranslation();
  const { projects } = usePortfolioData();

  const cards: ResolvedFitCard[] = fitCards.flatMap((card) => {
    const project = projects.find((item) => item.id === card.projectId);
    if (!project) return [];

    const proofs = card.statIndexes.flatMap((statIndex, proofIndex) => {
      const value = project.quickStats?.[statIndex]?.value;
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
    <section id="fit" className="section-shell border-t border-line">
      <div className="wrap">
        <SectionHeading
          label={t("v21.fit.label")}
          title={t("v21.fit.title")}
          accent={t("v21.fit.titleAccent")}
          description={t("v21.fit.subtitle")}
        />

        <Reveal className="mt-6">
          <div className="flex items-start gap-2.5 border-y border-line py-3 text-[11px] leading-relaxed text-muted">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand"
              aria-hidden="true"
            />
            {t("v21.fit.note")}
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.key} delay={index * 0.06} className="h-full">
                <a
                  href={`#project=${card.project.id}`}
                  aria-labelledby={`fit-${card.key}-role fit-${card.key}-focus`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-line bg-surface transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_30px_80px_-58px_rgba(10,14,28,0.6)]"
                >
                  <div className="flex items-center justify-between gap-3 border-b border-line px-6 py-4">
                    <span className="flex items-center gap-2.5">
                      <span className="grid h-7 min-w-7 place-items-center rounded-[5px] bg-brand px-1.5 font-mono text-[9px] font-semibold tracking-[0.08em] text-brand-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                        {t("v21.fit.postLabel")}
                      </span>
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-surface-2 text-brand-text transition-colors group-hover:border-brand/40 group-hover:bg-brand-soft">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3
                      id={`fit-${card.key}-role`}
                      className="display max-w-[20ch] text-[clamp(1.55rem,2.5vw,2.1rem)] text-ink"
                    >
                      {t(`v21.fit.cards.${card.key}.title`)}
                    </h3>
                    <p
                      id={`fit-${card.key}-focus`}
                      className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-text"
                    >
                      {t(`v21.fit.cards.${card.key}.focus`)}
                    </p>
                    <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                      {t(`v21.fit.cards.${card.key}.meta`)}
                    </p>

                    <div className="mt-5 border-l-2 border-brand/45 pl-4">
                      <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                        {t("v21.fit.askLabel")}
                      </p>
                      <p className="mt-1.5 max-w-[44ch] text-sm leading-relaxed text-ink/85">
                        {t(`v21.fit.cards.${card.key}.ask`)}
                      </p>
                    </div>

                    <div className="mt-5">
                      <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                        {t("v21.fit.requirementsLabel")}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {card.requirements.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="mt-6 flex items-center gap-3">
                        <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                          {t("v21.fit.evidenceLabel")}
                        </span>
                        <span
                          className="h-px flex-1 bg-line"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
                        {card.proofs.map((proof) => (
                          <div
                            key={proof.label}
                            className="bg-surface-2/60 px-3.5 py-3"
                          >
                            <p className="font-display text-[clamp(1.15rem,2vw,1.5rem)] font-semibold leading-none tracking-[-0.03em] text-ink">
                              {proof.value}
                            </p>
                            <p className="mt-1.5 font-mono text-[7px] uppercase leading-relaxed tracking-[0.11em] text-muted">
                              {proof.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                        <span className="min-w-0">
                          <span className="block font-mono text-[7px] uppercase tracking-[0.14em] text-muted">
                            {t("v21.fit.matchedLabel")}
                          </span>
                          <span className="mt-0.5 block text-xs font-medium leading-snug text-ink">
                            {card.project.title}
                          </span>
                        </span>
                        <span className="flex shrink-0 items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-brand-text">
                          {t("v21.fit.openCase")}
                          <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-brand-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            <FiArrowUpRight
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-4" delay={0.08}>
          <div className="relative overflow-hidden rounded-[1.35rem] border border-line bg-surface">
            <span
              className="absolute inset-y-0 left-0 w-1 bg-brand"
              aria-hidden="true"
            />
            <div className="grid lg:grid-cols-12">
              <div className="p-7 md:p-9 lg:col-span-8 lg:p-10">
                <p className="eyebrow">{t("v21.fit.cta.eyebrow")}</p>
                <p className="display mt-4 max-w-2xl text-[clamp(1.9rem,3.6vw,3rem)] text-ink">
                  {t("v21.fit.cta.title")}{" "}
                  <span className="text-brand-text">
                    {t("v21.fit.cta.accent")}
                  </span>
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                  {t("v21.fit.cta.description")}
                </p>
              </div>

              <div className="flex flex-col justify-center gap-3 border-t border-line p-7 md:p-9 lg:col-span-4 lg:border-l lg:border-t-0">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-between gap-3 rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-ink hover:text-canvas"
                >
                  {t("v21.fit.cta.primary")}
                  <FiArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href="#timeline"
                  className="group inline-flex items-center justify-between gap-3 rounded-full border border-line px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:border-brand/50 hover:text-brand-text"
                >
                  {t("v21.fit.cta.secondary")}
                  <FiArrowDown
                    className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <p className="mt-1 text-center font-mono text-[8px] uppercase tracking-[0.12em] text-muted lg:text-left">
                  {t("v21.fit.cta.note")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
