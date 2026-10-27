import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiClock,
  FiMapPin,
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
      3000,
    );
    return () => window.clearInterval(interval);
  }, [reduce, roles.length]);

  const stats = useMemo(() => {
    const migration = projects.find(
      (project) => project.id === "clickhouse-migration",
    );
    const apis = projects.find((project) => project.id === "pyrojs-refonte");
    const iot = projects.find(
      (project) => project.id === "iot-reporting-service",
    );

    return [
      {
        value: migration?.quickStats?.[2]?.value ?? "95%+",
        label: t("v21.hero.storageLabel"),
        source: "ClickHouse",
      },
      {
        value: migration?.quickStats?.[0]?.value ?? "20M",
        label: t("v21.hero.rowsLabel"),
        source: "MySQL → ClickHouse",
      },
      {
        value: apis?.quickStats?.[0]?.value ?? "150+",
        label: t("v21.hero.apiLabel"),
        source: "PyroJs",
      },
      {
        value: iot?.quickStats?.[0]?.value ?? "2,000+",
        label: t("v21.hero.devicesLabel"),
        source: "IoT reporting",
      },
    ];
  }, [projects, t]);

  const storageFootprint = useMemo(() => {
    const migration = projects.find(
      (project) => project.id === "clickhouse-migration",
    );
    return migration?.quickStats?.[1]?.value ?? "70 GB → 3 GB";
  }, [projects]);

  const stack = useMemo(
    () => Array.from(new Set(skills.map((skill) => skill.name))).slice(0, 16),
    [skills],
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-canvas pb-0 pt-24 md:pt-28"
    >
      <HeroField theme={theme} />
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-60 dark:opacity-45"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[560px] w-[560px] rounded-full bg-brand/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-brand/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="wrap relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 bg-brand" aria-hidden="true" />
            <span className="mono-label text-ink">Portfolio / 2026</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              <FiMapPin className="h-3 w-3 text-brand-text" aria-hidden="true" />
              {t("v21.hero.based")}
            </span>
            <span className="hidden items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted sm:flex">
              <FiClock className="h-3 w-3 text-brand-text" aria-hidden="true" />
              {localTime} · GMT+1
            </span>
          </div>
        </div>

        <div className="grid gap-14 pb-14 pt-10 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-14">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip chip-brand">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                {t("v21.hero.available")}
              </span>
              <span className="chip">{t("v21.hero.eyebrow")}</span>
            </div>

            <h1 className="mt-7">
              <span className="sr-only">
                {personalInfo.name} — {personalInfo.title}
              </span>
              <span
                aria-hidden="true"
                className="display block text-[clamp(3.35rem,9.6vw,8.4rem)] leading-[0.84]"
              >
                <span className="hero-name-line">
                  <motion.span
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
                    className="text-brand-display"
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
                  >
                    <span className="outline-text">Bouzidi</span>
                    <span className="text-brand">.</span>
                  </motion.span>
                </span>
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="h-px w-10 bg-brand" aria-hidden="true" />
              <span className="mono-label text-ink">{personalInfo.title}</span>
              <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
              <span
                className="relative h-5 min-w-[170px] overflow-hidden"
                aria-hidden="true"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={reduce ? false : { y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduce ? undefined : { y: -16, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-text"
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
              className="mt-7 max-w-2xl text-[16px] leading-relaxed text-muted md:text-lg"
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
                  className="group flex items-center gap-3 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:bg-ink hover:text-canvas"
                >
                  {t("v21.hero.ctaWork")}
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-ink/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
                  className="h-4 w-4 text-brand-text transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#about"
                className="group ml-auto hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink sm:flex"
              >
                {t("v21.hero.scroll")}
                <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition-colors group-hover:border-brand group-hover:text-brand-text">
                  <FiArrowDown className="h-3 w-3 animate-bounce" aria-hidden="true" />
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[330px] lg:col-span-4 lg:ml-auto lg:mr-0"
          >
            <div
              className="absolute -bottom-3 left-4 right-[-12px] top-8 rounded-[1.4rem] bg-brand"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-line bg-surface">
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
                  className="absolute inset-0 bg-gradient-to-t from-[#080b15]/90 via-[#080b15]/10 to-[#080b15]/25"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "44px 44px",
                  }}
                  aria-hidden="true"
                />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/75">
                  <span>Portrait / 01</span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-brand" />
                    {t("v21.hero.remote")}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-xl font-semibold leading-none tracking-tight text-white">
                    {personalInfo.name}
                  </p>
                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white/70">
                    {t("v21.hero.based")} · {localTime}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                  {t("v21.hero.openCard")}
                </span>
                <span className="chip !py-1">{t("v21.hero.since")}</span>
              </div>
            </div>

            <div className="ink-panel absolute -left-2 bottom-40 w-[148px] rounded-xl p-3.5 shadow-xl sm:-left-8 sm:w-[168px] lg:bottom-6 lg:w-[184px]">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-canvas/70">
                Storage / ClickHouse
              </p>
              <p className="display mt-2 text-[clamp(1.35rem,2.2vw,1.85rem)] leading-none">
                {storageFootprint}
              </p>
              <p className="mt-1.5 font-mono text-[7px] uppercase leading-relaxed tracking-[0.12em] text-canvas/75">
                {t("v21.hero.storageFootprint")}
              </p>
            </div>

            <span
              className="vertical-label absolute -right-6 top-1/2 hidden -translate-y-1/2 font-mono text-[8px] uppercase tracking-[0.22em] text-muted xl:block"
              aria-hidden="true"
            >
              Tunis · Remote-ready
            </span>

            <a
              href="#projects"
              aria-label={t("v21.hero.ctaWork")}
              className="group absolute -bottom-5 right-2 grid h-12 w-12 place-items-center rounded-xl bg-ink text-canvas shadow-xl transition-transform hover:-translate-y-0.5"
            >
              <FiArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>

        <div className="relative border-y border-line">
          <div className="flex items-center justify-between gap-4 py-3">
            <span className="mono-label text-muted">
              {t("v21.hero.proofLabel")}
            </span>
            <span className="hidden font-mono text-[8px] uppercase tracking-[0.16em] text-muted sm:block">
              Production outcomes · 2024 — present
            </span>
          </div>
          <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative p-5 md:p-6 ${
                  index === 0
                    ? "bg-ink text-canvas"
                    : "bg-surface"
                }`}
              >
                <span
                  className={`font-mono text-[9px] uppercase tracking-[0.16em] ${
                    index === 0 ? "text-canvas/60" : "text-muted"
                  }`}
                >
                  0{index + 1}
                </span>
                <p className="display mt-5 text-[clamp(1.9rem,3.8vw,3.2rem)]">
                  {stat.value}
                </p>
                <p
                  className={`mt-2 max-w-[190px] text-[11px] leading-relaxed ${
                    index === 0 ? "text-canvas/80" : "text-muted"
                  }`}
                >
                  {stat.label}
                </p>
                <p
                  className={`mt-4 font-mono text-[7px] uppercase tracking-[0.14em] ${
                    index === 0 ? "text-canvas/60" : "text-muted/70"
                  }`}
                >
                  {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-10 border-y border-line bg-surface/40 py-4 backdrop-blur-sm">
          <Marquee
            duration={52}
            items={stack.map((name) => (
              <span
                key={name}
                className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted"
              >
                {name}
              </span>
            ))}
          />
        </div>
      </div>
    </section>
  );
};
