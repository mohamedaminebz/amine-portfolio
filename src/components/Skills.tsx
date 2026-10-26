import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiAward, FiFilter, FiGlobe } from "react-icons/fi";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { asset } from "../lib/asset";
import type { Skill, SkillCategory } from "../types/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

type Filter = SkillCategory | "all";

const categoryOrder: Filter[] = [
  "frontend",
  "backend",
  "mobile",
  "devops",
  "database",
  "cloud",
  "other",
];

const SkillMark = ({ skill }: { skill: Skill }) => {
  const [failed, setFailed] = useState(false);
  const initials = skill.name.replace(/[^A-Za-z0-9+#]/g, "").slice(0, 2);

  if (!skill.icon || failed) {
    return (
      <span
        className="font-display text-[11px] font-semibold tracking-tight text-muted transition-colors group-hover:text-ink"
        aria-hidden="true"
      >
        {initials.toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={skill.icon.startsWith("http") ? skill.icon : asset(skill.icon)}
      alt=""
      width={24}
      height={24}
      loading="lazy"
      decoding="async"
      className="h-6 w-6 object-contain opacity-85 transition-opacity group-hover:opacity-100"
      onError={() => setFailed(true)}
    />
  );
};

export const Skills = () => {
  const { t } = useTranslation();
  const { skills, languages, certifications } = usePortfolioData();
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");

  const categories = useMemo(() => {
    const present = categoryOrder.filter((category) =>
      skills.some((skill) => skill.category === category),
    );

    return [
      { key: "all" as Filter, count: skills.length },
      ...present.map((category) => ({
        key: category,
        count: skills.filter((skill) => skill.category === category).length,
      })),
    ];
  }, [skills]);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? skills
        : skills.filter((skill) => skill.category === filter),
    [filter, skills],
  );

  return (
    <section id="skills" className="section-shell border-t border-line">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            label={t("v21.skills.label")}
            title={t("v21.skills.title")}
            accent={t("v21.skills.titleAccent")}
            description={t("v21.skills.subtitle")}
          />
          <Reveal delay={0.1} className="shrink-0">
            <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              <FiFilter className="h-3.5 w-3.5 text-acid-text" aria-hidden="true" />
              {t("v21.skills.count", { count: skills.length })}
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">{t("v21.skills.categories.all")}</p>
              <div
                className="mt-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
                role="group"
                aria-label={t("v21.skills.label")}
              >
                {categories.map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    onClick={() => setFilter(category.key)}
                    aria-pressed={filter === category.key}
                    className={`flex shrink-0 items-center justify-between gap-3 rounded-xl px-3 py-2 text-left font-mono text-[9px] uppercase tracking-[0.12em] transition-colors lg:w-full ${
                      filter === category.key
                        ? "bg-acid text-acid-ink"
                        : "border border-line text-muted hover:border-ink hover:text-ink lg:border-transparent lg:border-b-line"
                    }`}
                  >
                    {t(`v21.skills.categories.${category.key}`)}
                    <span
                      className={
                        filter === category.key ? "opacity-60" : "opacity-40"
                      }
                    >
                      {String(category.count).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-line bg-surface p-5">
                <p className="flex items-center gap-2 eyebrow">
                  <FiGlobe className="h-3.5 w-3.5 text-acid-text" aria-hidden="true" />
                  {t("v21.skills.languages")}
                </p>
                <ul className="mt-4 space-y-3">
                  {languages.map((language) => (
                    <li key={language.name}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-ink">
                          {language.name}
                        </span>
                        <span className="font-mono text-[8px] uppercase tracking-[0.08em] text-muted">
                          {language.level}
                        </span>
                      </div>
                      <div className="mt-1.5 h-px w-full bg-line">
                        <div
                          className="h-px bg-acid"
                          style={{
                            width:
                              language.level.toLowerCase().includes("native")
                                ? "100%"
                                : language.level.toLowerCase().includes("fluent")
                                  ? "86%"
                                  : "64%",
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-2xl border border-line bg-surface p-5">
                <p className="flex items-center gap-2 eyebrow">
                  <FiAward className="h-3.5 w-3.5 text-acid-text" aria-hidden="true" />
                  {t("v21.skills.certifications")}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {certifications.map((certification) => (
                    <li
                      key={certification.name}
                      className="flex items-baseline justify-between gap-3 border-b border-line pb-2.5 last:border-0 last:pb-0"
                    >
                      <span className="text-xs font-medium text-ink">
                        {certification.name}
                      </span>
                      <span className="shrink-0 font-mono text-[8px] text-muted">
                        {certification.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-line pb-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                {t("v21.skills.count", { count: filtered.length })}
              </span>
              <span className="hidden font-mono text-[8px] uppercase tracking-[0.12em] text-muted sm:block">
                {t("v21.skills.hoverHint")}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {filtered.map((skill, index) => (
                <motion.div
                  key={`${filter}-${skill.name}`}
                  layout
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(index, 8) * 0.025 }}
                  className="group relative flex min-h-[152px] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-acid/45 hover:bg-surface-2/60"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2 p-2">
                      <SkillMark skill={skill} />
                    </span>
                    <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-muted">
                      {t(`v21.skills.categories.${skill.category}`)}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-semibold tracking-tight text-ink">
                      {skill.name}
                    </p>
                    <p className="mt-1 line-clamp-3 text-[11px] leading-relaxed text-muted transition-colors group-hover:text-ink/75">
                      {skill.description}
                    </p>
                  </div>

                  <span
                    className="pointer-events-none absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-acid transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
