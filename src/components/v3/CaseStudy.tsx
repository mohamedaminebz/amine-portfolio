import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiX,
} from "react-icons/fi";
import { asset } from "../../lib/asset";
import type { Project } from "../../types/portfolio";
import { Dialog } from "./Dialog";

interface CaseStudyProps {
  project: Project;
  projects: Project[];
  onClose: () => void;
  onNavigate: (id: string) => void;
}

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="card-soft mt-4 p-5 sm:p-6">
    <h3 className="label !text-[9px] text-brand-text">{title}</h3>
    <div className="mt-3">{children}</div>
  </section>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
        <span
          aria-hidden="true"
          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--grad)]"
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map((item) => (
      <span
        key={item}
        className="rounded-full bg-surface-2/70 px-2.5 py-1 text-[11px] text-muted"
      >
        {item}
      </span>
    ))}
  </div>
);

export const CaseStudy = ({
  project,
  projects,
  onClose,
  onNavigate,
}: CaseStudyProps) => {
  const { t } = useTranslation();

  const index = projects.findIndex((item) => item.id === project.id);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  useEffect(() => {
    document.getElementById("case-top")?.scrollIntoView({ block: "start" });
  }, [project.id]);

  const meta = [
    { label: t("v3.case.role"), value: project.role },
    { label: t("v3.case.period"), value: project.period },
    { label: t("v3.case.company"), value: project.company },
    { label: t("v3.case.location"), value: project.location },
    ...(project.status
      ? [{ label: t("v3.case.status"), value: project.status }]
      : []),
    {
      label: t("v3.case.team"),
      value: project.teamSize ? `${project.teamSize}` : t("v3.case.solo"),
    },
  ];

  const screenshots =
    project.screenshots?.filter((screenshot) => !screenshot.placeholder) ?? [];

  return (
    <Dialog open onClose={onClose} labelledBy="case-title">
      <div
        id="case-top"
        className="overflow-hidden rounded-t-[2rem] bg-canvas shadow-[var(--shadow)] sm:rounded-[2rem]"
      >
        <header className="gradient-bg relative px-5 pb-7 pt-5 text-white sm:px-8 sm:pb-9 sm:pt-6">
          <span
            aria-hidden="true"
            className="absolute -right-10 -top-16 h-52 w-52 rounded-full border border-white/20"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          />

          <div className="relative flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white backdrop-blur-md transition-colors hover:bg-white/25"
            >
              <FiArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
              {t("v3.case.back")}
            </button>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => onNavigate(previous.id)}
                aria-label={t("v3.case.previous")}
                title={`${t("v3.case.previous")}: ${previous.title}`}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
              >
                <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate(next.id)}
                aria-label={t("v3.case.next")}
                title={`${t("v3.case.next")}: ${next.title}`}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
              >
                <FiArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                aria-label={t("v3.case.close")}
                className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25"
              >
                <FiX aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative mt-7">
            <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-md">
              {t("v3.case.label")} · {t(`projects.filter.${project.type}`)}
            </span>
            <h2
              id="case-title"
              className="display mt-3 text-[clamp(1.8rem,4.5vw,3rem)]"
            >
              {project.title}
            </h2>
            {project.subtitle ? (
              <p className="mt-2 max-w-2xl text-sm text-white/75">
                {project.subtitle}
              </p>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-1.5">
              {meta.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.06em] text-white/80 backdrop-blur-md"
                >
                  {item.label}: {item.value}
                </span>
              ))}
            </div>
          </div>
        </header>

        <article className="px-5 py-7 sm:px-8 sm:py-9">
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            {project.longDescription}
          </p>

          {project.quickStats && project.quickStats.length > 0 ? (
            <dl className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {project.quickStats.map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="rounded-2xl bg-surface-2/60 p-4"
                >
                  <dd className="display gradient-text text-[clamp(1.2rem,2.4vw,1.6rem)] leading-none">
                    {stat.value}
                  </dd>
                  <dt className="mt-1.5 font-mono text-[7px] uppercase leading-tight tracking-[0.08em] text-muted">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          ) : null}

          {project.type === "professional" ? (
            <>
              <SectionCard title={t("v3.case.story")}>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    [t("v3.case.challenge"), project.story.challenge],
                    [t("v3.case.action"), project.story.action],
                    [t("v3.case.result"), project.story.result],
                  ].map(([label, text]) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-surface-2/50 p-4"
                    >
                      <p className="label !text-[8px]">{label}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionCard>

              {project.architecture ? (
                <SectionCard title={t("v3.case.architecture")}>
                  <p className="text-sm font-bold">{project.architecture.type}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {project.architecture.description}
                  </p>
                </SectionCard>
              ) : null}

              {project.technicalStack ? (
                <SectionCard title={t("v3.case.tech")}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {Object.entries(project.technicalStack).map(
                      ([group, values]) => (
                        <div key={group}>
                          <p className="label !text-[8px]">{group}</p>
                          <div className="mt-2">
                            <Chips items={values} />
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </SectionCard>
              ) : null}

              {project.microservices && project.microservices.length > 0 ? (
                <SectionCard title={t("v3.case.services")}>
                  <ul className="space-y-3">
                    {project.microservices.map((service) => (
                      <li
                        key={service.name}
                        className="rounded-2xl bg-surface-2/50 p-4"
                      >
                        <p className="text-sm font-bold">{service.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {service.responsibility}
                        </p>
                        <div className="mt-2">
                          <Chips items={service.technologies} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              ) : null}

              {project.performanceMetrics &&
              project.performanceMetrics.length > 0 ? (
                <SectionCard title={t("v3.case.performance")}>
                  <ul className="space-y-2">
                    {project.performanceMetrics.map((metric) => (
                      <li
                        key={metric.metric}
                        className="grid gap-1 rounded-2xl bg-surface-2/50 p-4 text-sm sm:grid-cols-4 sm:items-baseline"
                      >
                        <span className="font-bold">{metric.metric}</span>
                        <span className="text-muted">{metric.before}</span>
                        <span className="font-semibold text-brand-text">
                          {metric.after}
                        </span>
                        <span className="font-mono text-[10px] text-muted">
                          {metric.improvement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              ) : null}

              {project.achievements.length > 0 ? (
                <SectionCard title={t("v3.case.achievements")}>
                  <Bullets items={project.achievements} />
                </SectionCard>
              ) : null}

              {project.myContributions &&
              project.myContributions.length > 0 ? (
                <SectionCard title={t("v3.case.contributions")}>
                  <Bullets items={project.myContributions} />
                </SectionCard>
              ) : null}

              {project.technicalHighlights &&
              project.technicalHighlights.length > 0 ? (
                <SectionCard title={t("v3.case.overview")}>
                  <Bullets items={project.technicalHighlights} />
                </SectionCard>
              ) : null}
            </>
          ) : null}

          {project.type === "internship" ? (
            <>
              <SectionCard title={t("v3.case.mission")}>
                <p className="text-sm leading-relaxed text-muted">
                  {project.mission}
                </p>
                {project.supervisor ? (
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">
                    {t("projectDetail.supervisor")}: {project.supervisor}
                  </p>
                ) : null}
              </SectionCard>

              <SectionCard title={t("v3.case.tasks")}>
                <ul className="space-y-3">
                  {project.tasks.map((task) => (
                    <li
                      key={task.title}
                      className="rounded-2xl bg-surface-2/50 p-4"
                    >
                      <p className="text-sm font-bold">{task.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {task.description}
                      </p>
                      <div className="mt-2">
                        <Chips items={task.technologies} />
                      </div>
                    </li>
                  ))}
                </ul>
              </SectionCard>

              {project.deliverables.length > 0 ? (
                <SectionCard title={t("v3.case.deliverables")}>
                  <Bullets items={project.deliverables} />
                </SectionCard>
              ) : null}

              {project.learnings.length > 0 ? (
                <SectionCard title={t("v3.case.learnings")}>
                  <Bullets items={project.learnings} />
                </SectionCard>
              ) : null}

              {project.results && project.results.length > 0 ? (
                <SectionCard title={t("v3.case.results")}>
                  <Bullets items={project.results} />
                </SectionCard>
              ) : null}

              {project.evaluation ? (
                <SectionCard title={t("v3.case.evaluation")}>
                  <p className="text-sm leading-relaxed text-muted">
                    {project.evaluation}
                  </p>
                </SectionCard>
              ) : null}
            </>
          ) : null}

          {project.type === "academic" ? (
            <>
              <SectionCard title={t("v3.case.overview")}>
                <p className="text-sm leading-relaxed text-muted">
                  {project.courseName ? `${project.courseName} · ` : ""}
                  {project.professor ? `${project.professor}` : ""}
                  {project.grade ? ` · ${project.grade}` : ""}
                </p>
              </SectionCard>

              {project.responsibilities &&
              project.responsibilities.length > 0 ? (
                <SectionCard title={t("v3.case.responsibilities")}>
                  <Bullets items={project.responsibilities} />
                </SectionCard>
              ) : null}

              {project.results && project.results.length > 0 ? (
                <SectionCard title={t("v3.case.results")}>
                  <Bullets items={project.results} />
                </SectionCard>
              ) : null}

              {project.keySkills && project.keySkills.length > 0 ? (
                <SectionCard title={t("v3.case.skills")}>
                  <Chips items={project.keySkills} />
                </SectionCard>
              ) : null}

              {project.keyConcepts && project.keyConcepts.length > 0 ? (
                <SectionCard title={t("v3.case.concepts")}>
                  <Bullets items={project.keyConcepts} />
                </SectionCard>
              ) : null}

              {project.methodologies && project.methodologies.length > 0 ? (
                <SectionCard title={t("v3.case.methodologies")}>
                  <Bullets items={project.methodologies} />
                </SectionCard>
              ) : null}

              {project.learnings && project.learnings.length > 0 ? (
                <SectionCard title={t("v3.case.learnings")}>
                  <Bullets items={project.learnings} />
                </SectionCard>
              ) : null}
            </>
          ) : null}

          {project.type === "other" ? (
            <>
              <SectionCard title={t("v3.case.motivation")}>
                <p className="text-sm leading-relaxed text-muted">
                  {project.motivation}
                </p>
              </SectionCard>

              {project.futureFeatures && project.futureFeatures.length > 0 ? (
                <SectionCard title={t("v3.case.future")}>
                  <Bullets items={project.futureFeatures} />
                </SectionCard>
              ) : null}

              {project.githubLink || project.demoLink ? (
                <SectionCard title={t("v3.case.overview")}>
                  <div className="flex flex-wrap gap-3">
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-surface-2/70 px-3.5 py-2 text-sm font-semibold text-brand-text"
                      >
                        GitHub
                        <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                    {project.demoLink ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-surface-2/70 px-3.5 py-2 text-sm font-semibold text-brand-text"
                      >
                        Demo
                        <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </SectionCard>
              ) : null}
            </>
          ) : null}

          <SectionCard title={t("v3.case.tech")}>
            <Chips items={project.technologies.map((tech) => tech.name)} />
          </SectionCard>

          <SectionCard title={t("v3.case.gallery")}>
            {screenshots.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {screenshots.map((screenshot) => (
                  <figure key={screenshot.url}>
                    <a
                      href={asset(screenshot.url)}
                      target="_blank"
                      rel="noreferrer"
                      className="block overflow-hidden rounded-2xl border border-line"
                    >
                      <img
                        src={asset(screenshot.url)}
                        alt={screenshot.caption}
                        loading="lazy"
                        decoding="async"
                        className="w-full transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </a>
                    <figcaption className="mt-2 text-xs text-muted">
                      {screenshot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">{t("v3.case.noImages")}</p>
            )}
          </SectionCard>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => onNavigate(previous.id)}
              className="card-soft group flex items-center gap-3 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-brand/25"
            >
              <span className="icon-tile !h-9 !w-9">
                <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="label !text-[8px] block">
                  {t("v3.case.previous")}
                </span>
                <span className="block truncate text-sm font-semibold group-hover:text-brand-text">
                  {previous.title}
                </span>
              </span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate(next.id)}
              className="card-soft group flex items-center justify-end gap-3 p-4 text-right transition-all hover:-translate-y-0.5 hover:border-brand/25"
            >
              <span className="min-w-0">
                <span className="label !text-[8px] block">
                  {t("v3.case.next")}
                </span>
                <span className="block truncate text-sm font-semibold group-hover:text-brand-text">
                  {next.title}
                </span>
              </span>
              <span className="icon-tile !h-9 !w-9">
                <FiArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </button>
          </div>
        </article>
      </div>
    </Dialog>
  );
};
