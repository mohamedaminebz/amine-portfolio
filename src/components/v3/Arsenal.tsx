import { useTranslation } from "react-i18next";
import {
  FiAward,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiGlobe,
  FiServer,
  FiSmartphone,
} from "react-icons/fi";
import type { PortfolioData } from "../../data";
import type { SkillCategory } from "../../types/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface ArsenalProps {
  data: PortfolioData;
}

const order: Array<{
  id: SkillCategory;
  key: string;
  icon: typeof FiCode;
}> = [
  { id: "frontend", key: "v21.skills.categories.frontend", icon: FiCode },
  { id: "backend", key: "v21.skills.categories.backend", icon: FiServer },
  { id: "database", key: "v21.skills.categories.database", icon: FiDatabase },
  { id: "mobile", key: "v21.skills.categories.mobile", icon: FiSmartphone },
  { id: "devops", key: "v21.skills.categories.devops", icon: FiGitBranch },
  { id: "cloud", key: "v21.skills.categories.cloud", icon: FiCloud },
  { id: "other", key: "v21.skills.categories.other", icon: FiCpu },
];

export const Arsenal = ({ data }: ArsenalProps) => {
  const { t } = useTranslation();

  const groups = order
    .map((category) => ({
      ...category,
      skills: data.skills.filter((skill) => skill.category === category.id),
    }))
    .filter((group) => group.skills.length > 0);

  const marquee = data.skills.map((skill) => skill.name);

  return (
    <section id="arsenal" className="section overflow-hidden">
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label={t("v3.arsenal.label")}
            title={t("v3.arsenal.title")}
            accent={t("v3.arsenal.titleAccent")}
            subtitle={t("v3.arsenal.subtitle")}
          />
        </Reveal>
      </div>

      <div
        className="relative mt-9 overflow-hidden border-y border-line py-4"
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[...marquee, ...marquee].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="display whitespace-nowrap text-lg text-muted/35"
            >
              {name}
              <span className="mx-4 text-brand/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.id} delay={index * 50}>
              <div className="card-soft h-full p-5 transition-all hover:-translate-y-1 hover:border-brand/25">
                <div className="flex items-center gap-3">
                  <span className="icon-tile">
                    <group.icon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold">{t(group.key)}</h3>
                    <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                      {String(group.skills.length).padStart(2, "0")} tools
                    </p>
                  </div>
                </div>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <span
                        title={skill.description}
                        className="inline-flex rounded-full bg-surface-2/70 px-2.5 py-1 text-[11px] text-muted transition-colors hover:bg-[var(--grad-soft)] hover:text-brand-text"
                      >
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="card-soft h-full p-6">
              <div className="flex items-center gap-3">
                <span className="icon-tile">
                  <FiGlobe aria-hidden="true" className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-bold">{t("v3.arsenal.languages")}</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {data.languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5 text-sm last:border-b-0 last:pb-0"
                  >
                    <span>{language.name}</span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                      {language.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="card-soft h-full p-6">
              <div className="flex items-center gap-3">
                <span className="icon-tile">
                  <FiAward aria-hidden="true" className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-bold">
                  {t("v3.arsenal.certifications")}
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {data.certifications.map((certification) => (
                  <li
                    key={certification.name}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-2.5 text-sm last:border-b-0 last:pb-0"
                  >
                    <span>{certification.name}</span>
                    <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.1em] text-muted">
                      {certification.issuer} · {certification.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
