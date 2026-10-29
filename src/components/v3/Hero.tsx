import { useTranslation } from "react-i18next";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { asset } from "../../lib/asset";

export const Hero = () => {
  const { t } = useTranslation();
  const { personalInfo, projects, skills } = usePortfolioData();

  const migration = projects.find((p) => p.id === "clickhouse-migration");
  const apis = projects.find((p) => p.id === "pyrojs-refonte");
  const iot = projects.find((p) => p.id === "iot-reporting-service");

  const stats = [
    {
      value: migration?.quickStats?.[0]?.value ?? "20M",
      label: t("v21.hero.rowsLabel"),
    },
    {
      value: migration?.quickStats?.[2]?.value ?? "95%+",
      label: t("v21.hero.storageLabel"),
    },
    {
      value: apis?.quickStats?.[0]?.value ?? "150+",
      label: t("v21.hero.apiLabel"),
    },
    {
      value: iot?.quickStats?.[0]?.value ?? "2,000+",
      label: t("v21.hero.devicesLabel"),
    },
  ];

  const floating = ["React", "Node.js", "ClickHouse", "React Native"];

  const stack = skills.slice(0, 9).map((skill) => skill.name);

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      <div className="aurora aurora-1 -left-32 top-0 h-[460px] w-[460px]" />
      <div className="aurora aurora-2 -right-24 top-24 h-[420px] w-[420px]" />
      <div className="aurora aurora-3 left-1/3 top-[420px] h-[380px] w-[380px]" />
      <div className="grid-lines absolute inset-0" aria-hidden="true" />

      <div className="wrap relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="pill pill-brand">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-brand"
                  style={{ animation: "pulse-soft 2.4s ease-in-out infinite" }}
                />
                {t("v21.hero.available")}
              </span>
              <span className="pill">
                <FiMapPin aria-hidden="true" className="h-3 w-3" />
                {personalInfo.location}
              </span>
            </div>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              {personalInfo.name} — {personalInfo.title}
            </p>

            <h1 className="display mt-3 text-[clamp(2.9rem,7.2vw,5.5rem)]">
              {t("v3.hero.headline")}
              <span className="gradient-text mt-1 block">
                {t("v3.hero.headlineAccent")}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
              {t("v21.hero.tagline")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary group">
                {t("v21.hero.ctaWork")}
                <FiArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a href="#notes" className="btn btn-ghost group">
                {t("v3.hero.readNotes")}
                <FiArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 text-brand-text transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-2.5 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl px-3.5 py-3">
                  <dd className="display gradient-text text-[clamp(1.1rem,2.4vw,1.45rem)]">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 font-mono text-[7px] uppercase leading-snug tracking-[0.1em] text-muted">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[350px] sm:max-w-[400px]">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.28),transparent_65%)] blur-2xl"
              />

              <div className="relative aspect-square">
                <div
                  aria-hidden="true"
                  className="orb-ring absolute inset-0 rounded-full opacity-90"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-[7px] rounded-full bg-canvas"
                />
                <div className="absolute inset-[14px] overflow-hidden rounded-full bg-surface-2">
                  <img
                    src={asset("/images/MAB2.webp")}
                    alt={t("v21.hero.portraitAlt")}
                    width={1119}
                    height={1120}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-[50%_18%]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#061020]/70 via-transparent to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-6 flex justify-center px-12">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white backdrop-blur-md">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-[#22d3ee]"
                      />
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                <span className="glass animate-float absolute -left-3 top-14 rounded-full px-3 py-1.5 text-[10px] font-semibold text-ink sm:-left-8">
                  <span
                    aria-hidden="true"
                    className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand"
                  />
                  {floating[0]}
                </span>
                <span className="glass animate-float-delayed absolute -right-2 top-28 rounded-full px-3 py-1.5 text-[10px] font-semibold text-ink sm:-right-7">
                  <span
                    aria-hidden="true"
                    className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {floating[1]}
                </span>
                <span className="glass animate-float-slow absolute -left-2 bottom-24 rounded-full px-3 py-1.5 text-[10px] font-semibold text-ink sm:-left-9">
                  <span
                    aria-hidden="true"
                    className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand"
                  />
                  {floating[2]}
                </span>
                <span className="glass animate-float-delayed absolute -right-1 bottom-10 rounded-full px-3 py-1.5 text-[10px] font-semibold text-ink sm:-right-6">
                  <span
                    aria-hidden="true"
                    className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  {floating[3]}
                </span>
              </div>

              <div className="glass-strong relative z-10 mx-auto -mt-6 w-[92%] rounded-2xl p-4">
                <p className="label !text-[8px]">{t("v3.hero.currently")}</p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
                  {t("v21.about.nowDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="label mr-1 !text-[8px]">{t("v21.about.toolkit")}</span>
            {stack.map((name) => (
              <span
                key={name}
                className="rounded-full bg-surface/60 px-2.5 py-1 font-mono text-[9px] text-muted"
              >
                {name}
              </span>
            ))}
          </div>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 self-start font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink sm:self-auto"
          >
            {t("v3.hero.scroll")}
            <FiArrowDown
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
