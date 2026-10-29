import { useTranslation } from "react-i18next";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiClock,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { useLocalTime } from "../hooks/useLocalTime";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { Mark } from "./ui/Mark";

const links = [
  { id: "about", key: "about" },
  { id: "projects", key: "work" },
  { id: "fit", key: "fit" },
  { id: "timeline", key: "journey" },
  { id: "skills", key: "skills" },
  { id: "contact", key: "contact" },
] as const;

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const { personalInfo, socialLinks } = usePortfolioData();
  const localTime = useLocalTime("Africa/Tunis", i18n.language);
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface/40">
      <div className="wrap pb-6 pt-12 md:pt-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <Mark className="h-10 w-10" />
              <span>
                <span className="block font-display text-base font-semibold tracking-tight">
                  {personalInfo.name}
                </span>
                <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                  {personalInfo.title}
                </span>
              </span>
            </a>

            <p className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              {t("v21.footer.status")}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
              <span className="flex items-center gap-1.5">
                <FiClock className="h-3 w-3 text-brand-text" aria-hidden="true" />
                {localTime} · GMT+1
              </span>
              <span>{t("v21.footer.local")}</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">{t("v21.footer.navigate")}</p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted transition-colors hover:text-brand-text"
                  >
                    {t(`v21.nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">{t("v21.footer.elsewhere")}</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={socialLinks.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand-text"
                >
                  <FiLinkedin className="h-3.5 w-3.5" aria-hidden="true" />
                  LinkedIn
                  <FiArrowUpRight
                    className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand-text"
                >
                  <FiGithub className="h-3.5 w-3.5" aria-hidden="true" />
                  GitHub
                  <FiArrowUpRight
                    className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.email}
                  className="group flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-brand-text"
                >
                  <FiMail className="h-3.5 w-3.5" aria-hidden="true" />
                  Email
                  <FiArrowUpRight
                    className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-start justify-between gap-4 md:col-span-3 md:justify-end">
            <div className="text-left md:text-right">
              <p className="font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-muted">
                {t("v21.footer.built")}
                <br />
                <span className="text-brand-text">{t("v21.footer.version")}</span>
              </p>
              <a
                href="#top"
                className="group mt-4 inline-flex items-center gap-2 rounded-md border border-line px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-muted transition-colors hover:border-brand hover:text-ink"
              >
                {t("v21.footer.backToTop")}
                <span className="grid h-6 w-6 place-items-center rounded bg-brand text-brand-ink transition-transform group-hover:-translate-y-0.5">
                  <FiArrowUp className="h-3 w-3" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 select-none overflow-hidden" aria-hidden="true">
          <p className="display whitespace-nowrap text-[clamp(2.8rem,10vw,9.5rem)] leading-[0.75] tracking-[-0.055em]">
            <span className="text-ink/[0.055] dark:text-ink/[0.07]">
              MOHAMED{" "}
            </span>
            <span className="text-brand/[0.13] dark:text-brand/[0.3]">AMINE</span>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-5 font-mono text-[8px] uppercase tracking-[0.12em] text-muted md:flex-row md:items-center md:justify-between">
          <p>{t("v21.footer.copyright", { year, name: personalInfo.name })}</p>
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brand" />
            React · TypeScript · Vite
          </p>
        </div>
      </div>
    </footer>
  );
};
