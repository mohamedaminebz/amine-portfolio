import { useTranslation } from "react-i18next";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { usePortfolioData } from "../../hooks/usePortfolioData";

export const Footer = () => {
  const { t } = useTranslation();
  const { personalInfo, socialLinks } = usePortfolioData();

  return (
    <footer className="relative border-t border-line pb-28 pt-12 lg:pb-12">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="gradient-bg grid h-9 w-9 place-items-center rounded-xl text-sm font-extrabold text-white">
                M
              </span>
              <span className="text-[13px] font-bold">Mohamed Amine Bouzidi</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {t("v3.footer.tagline")}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--grad-soft)] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-brand-text">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-brand"
                style={{ animation: "pulse-soft 2.4s ease-in-out infinite" }}
              />
              {t("v21.about.availability")}
            </span>
          </div>

          <nav className="md:col-span-3" aria-label={t("v3.footer.navigate")}>
            <p className="label">{t("v3.footer.navigate")}</p>
            <ul className="mt-3 space-y-2">
              {[
                { href: "#work", key: "v3.nav.work" },
                { href: "#notes", key: "v3.nav.notes" },
                { href: "#about", key: "v3.nav.about" },
                { href: "#journey", key: "v3.nav.journey" },
                { href: "#contact", key: "v3.nav.contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="label">{t("v3.footer.elsewhere")}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                {
                  href: socialLinks.linkedIn,
                  label: "LinkedIn",
                  icon: FiLinkedin,
                },
                {
                  href: socialLinks.github,
                  label: "GitHub",
                  icon: FiGithub,
                },
                {
                  href: `mailto:${personalInfo.email}`,
                  label: "Email",
                  icon: FiMail,
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.08em] text-muted transition-all hover:border-line-strong hover:text-ink"
                >
                  <link.icon aria-hidden="true" className="h-3.5 w-3.5" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
            © {new Date().getFullYear()} {personalInfo.name}.{" "}
            {t("v3.footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted/70">
              {t("v3.footer.version")}
            </span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted transition-all hover:border-line-strong hover:text-ink"
            >
              {t("v3.footer.backToTop")}
              <FiArrowUp aria-hidden="true" className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
