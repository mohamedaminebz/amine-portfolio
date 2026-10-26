import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiClock,
  FiMapPin,
  FiZap,
} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { useLocalTime } from "../hooks/useLocalTime";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { asset } from "../lib/asset";
import { HeroField } from "./HeroField";
import { Magnetic } from "./ui/Magnetic";
import { Marquee } from "./ui/Marquee";

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const { personalInfo, projects, skills } = usePortfolioData();
  const reduce = useReducedMotion();
  const localTime = useLocalTime("Africa/Tunis", i18n.language);

  const [roleIndex, setRoleIndex] = useState(0);
  const roles = t("v21.hero.roles", { returnObjects: true }) as string[];

  useEffect(() => {
    if (reduce) return;
    const interval = window.setInterval(
      () => setRoleIndex((index) => (index + 1) % roles.length),
      2800,
    );
    return () => window.clearInterval(interval);
  }, [reduce, roles.length]);

  const stats = useMemo(() => {
    const apiProject = projects.find((project) => project.id === "pyrojs-refonte");
    const iotProject = projects.find(
      (project) => project.id === "iot-reporting-service",
    );
    const migrationProject = projects.find(
      (project) => project.id === "clickhouse-migration",
    );

    return [
      {
        value: apiProject?.quickStats?.[0]?.value ?? "150+",
        label: t("v21.hero.apiLabel"),
      },
      {
        value: iotProject?.quickStats?.[0]?.value ?? "2,000+",
        label: t("v21.hero.devicesLabel"),
      },
      {
        value: migrationProject?.quickStats?.[0]?.value ?? "20M",
        label: t("v21.hero.rowsLabel"),
      },
    ];
  }, [projects, t]);

  const stack = useMemo(
    () => Array.from(new Set(skills.map((skill) => skill.name))).slice(0, 14),
    [skills],
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-canvas pb-0 pt-28 md:pt-32"
    >
      <HeroField theme={theme} />
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-50 dark:opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-acid-soft blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-52 bottom-0 h-[380px] w-[380px] rounded-full bg-acid-soft blur-[120px]"
        aria-hidden="true"
      />

      <div className="wrap relative z-10">
        <div className="flex min-h-[calc(100svh-8rem)] flex-col justify-between">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <span className="flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink">
                    {t("v21.hero.available")}
                  </span>
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  <FiMapPin className="h-3 w-3 text-acid-text" aria-hidden="true" />
                  {t("v21.hero.based")}
                </span>
                <span className="hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted sm:flex">
                  <FiClock className="h-3 w-3 text-acid-text" aria-hidden="true" />
                  {localTime} · GMT+1
                </span>
              </div>

              <h1 className="mt-7">
                <span className="sr-only">
                  {personalInfo.name} — {personalInfo.title}
                </span>
                <span aria-hidden="true" className="display block">
                  <span className="hero-name-line">
                    <motion.span
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[clamp(3.6rem,10.5vw,9.6rem)]"
                    >
                      Mohamed
                    </motion.span>
                  </span>
                  <span className="hero-name-line">
                    <motion.span
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.9,
                        delay: 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="outline-text text-[clamp(3.6rem,10.5vw,9.6rem)]"
                    >
                      Amine
                    </motion.span>
                  </span>
                  <span className="hero-name-line">
                    <motion.span
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.9,
                        delay: 0.16,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-[clamp(3.6rem,10.5vw,9.6rem)]"
                    >
                      Bouzidi<span className="text-acid">.</span>
                    </motion.span>
                  </span>
                </span>
              </h1>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-acid" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {personalInfo.title}
                </span>
                <span className="hidden h-px w-8 bg-line sm:block" aria-hidden="true" />
                <span
                  className="relative hidden h-5 min-w-[150px] overflow-hidden sm:inline-block"
                  aria-hidden="true"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={reduce ? false : { y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={reduce ? undefined : { y: -16, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="absolute inset-0 font-mono text-[10px] uppercase tracking-[0.2em] text-acid-text"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>

              <motion.p
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted md:text-lg"
              >
                {t("v21.hero.tagline")}
              </motion.p>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.7 }}
                className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
              >
                <Magnetic>
                  <a
                    href="#projects"
                    className="group flex items-center gap-3 rounded-full bg-acid px-6 py-3.5 text-sm font-semibold text-acid-ink transition-colors hover:bg-ink hover:text-canvas"
                  >
                    {t("v21.hero.ctaWork")}
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-acid-ink/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </a>
                </Magnetic>

                <a
                  href="#contact"
                  className="group flex items-center gap-2 text-sm font-medium text-ink"
                >
                  <span className="link-line">{t("v21.hero.ctaContact")}</span>
                  <FiArrowRight
                    className="h-4 w-4 text-acid-text transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30, rotate: 1.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[370px] lg:col-span-4 lg:ml-auto lg:mr-0"
            >
              <div
                className="absolute -inset-3 rotate-2 rounded-[2rem] border border-line"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[1.6rem] border border-line bg-surface">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="portrait-tone absolute inset-0">
                    <img
                      src={asset("/images/MAB2.webp")}
                      alt={t("v21.hero.portraitAlt")}
                      width={1119}
                      height={1120}
                      loading="eager"
                      decoding="async"
                      className="h-full w-full object-cover object-[50%_18%]"
                    />
                  </div>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20"
                    aria-hidden="true"
                  />

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/70">
                    <span>Portrait / 01</span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                      Available
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-xl font-medium tracking-tight text-white">
                      {personalInfo.name}
                    </p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
                      {t("v21.hero.based")} · {localTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                    <FiZap className="h-3 w-3 text-acid-text" aria-hidden="true" />
                    {t("v21.hero.openCard")}
                  </span>
                  <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                    {t("v21.hero.remote")}
                  </span>
                </div>
              </div>

              <div
                className="absolute -bottom-8 -left-6 grid h-[104px] w-[104px] place-items-center rounded-full bg-acid text-acid-ink shadow-xl sm:-left-10"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 120 120"
                  className="absolute inset-0 h-full w-full animate-[spin_26s_linear_infinite]"
                >
                  <defs>
                    <path
                      id="hero-stamp-path"
                      d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
                    />
                  </defs>
                  <text className="fill-acid-ink font-mono text-[8px] uppercase tracking-[0.34em]">
                    <textPath href="#hero-stamp-path" startOffset="0%">
                      Open to work · Open to work ·
                    </textPath>
                  </text>
                </svg>
                <FiArrowUpRight className="h-7 w-7" />
              </div>

              <div className="glass absolute -right-3 top-[42%] hidden rounded-2xl px-3.5 py-2.5 shadow-lg sm:block">
                <p className="font-display text-lg font-semibold leading-none">
                  {stats[1].value}
                </p>
                <p className="mt-1 max-w-[92px] font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-muted">
                  {stats[1].label}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-14 border-t border-line pt-6 md:mt-20">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div className="grid flex-1 grid-cols-3 gap-4 sm:gap-8 lg:max-w-2xl">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="display text-[clamp(1.7rem,3.6vw,2.8rem)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 max-w-[130px] font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                  {t("v21.hero.since")}
                </span>
                <a
                  href="#about"
                  aria-label={t("v21.hero.scroll")}
                  className="group flex items-center gap-3 rounded-full border border-line px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:border-acid hover:text-ink"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-acid text-acid-ink">
                    <FiArrowDown className="h-3 w-3 animate-bounce" aria-hidden="true" />
                  </span>
                  {t("v21.hero.scroll")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 border-y border-line bg-surface/40 py-4 backdrop-blur-sm">
        <Marquee
          duration={48}
          items={stack.map((name) => (
            <span
              key={name}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
            >
              {name}
            </span>
          ))}
        />
      </div>
    </section>
  );
};
