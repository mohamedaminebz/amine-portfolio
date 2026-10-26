import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheck,
  FiClock,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiZap,
} from "react-icons/fi";
import { z } from "zod";
import { useLocalTime } from "../hooks/useLocalTime";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { copyToClipboard } from "../lib/clipboard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  subject: z.string().trim().min(3),
  message: z.string().trim().min(10),
});

type ContactValues = z.infer<typeof contactSchema>;
type SubmitStatus = "idle" | "success" | "error";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as
  | string
  | undefined;

export const Contact = () => {
  const { t, i18n } = useTranslation();
  const { personalInfo, socialLinks } = usePortfolioData();
  const localTime = useLocalTime("Africa/Tunis", i18n.language);

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [copied, setCopied] = useState(false);
  const [intent, setIntent] = useState<number | null>(null);
  const copiedTimer = useRef<number | null>(null);

  const intents = t("v21.contact.intents", { returnObjects: true }) as string[];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  useEffect(
    () => () => {
      if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
    },
    [],
  );

  const handleCopy = async () => {
    const success = await copyToClipboard(personalInfo.email);
    if (!success) return;
    setCopied(true);
    if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
    copiedTimer.current = window.setTimeout(() => setCopied(false), 2200);
  };

  const handleIntent = (index: number, label: string) => {
    setIntent(index);
    setValue("subject", label, { shouldValidate: true, shouldDirty: true });
  };

  const onSubmit = async (values: ContactValues) => {
    setStatus("idle");

    if (!CONTACT_ENDPOINT) {
      const body = `${values.message}\n\n—\n${values.name} (${values.email})`;
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        values.subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      reset();
      setIntent(null);
      return;
    }

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setStatus("success");
      reset();
      setIntent(null);
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = (hasError: boolean) =>
    `w-full rounded-xl border bg-canvas/60 px-3.5 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 ${
      hasError
        ? "border-red-500/70 focus:border-red-500"
        : "border-line focus:border-acid"
    }`;

  const labelClasses =
    "mb-1.5 block font-mono text-[8px] uppercase tracking-[0.14em] text-muted";

  const contactRows = [
    {
      label: t("v21.contact.emailLabel"),
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: FiMail,
    },
    {
      label: t("v21.contact.phoneLabel"),
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: FiPhone,
    },
    {
      label: t("v21.contact.locationLabel"),
      value: personalInfo.location,
      icon: FiMapPin,
    },
    {
      label: t("v21.contact.timeLabel"),
      value: `${localTime} · GMT+1`,
      icon: FiClock,
    },
  ];

  return (
    <section id="contact" className="section-shell relative overflow-hidden border-t border-line">
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-acid-soft blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-acid-soft blur-[120px]"
        aria-hidden="true"
      />

      <div className="wrap relative">
        <SectionHeading
          label={t("v21.contact.label")}
          title={t("v21.contact.title")}
          accent={t("v21.contact.titleAccent")}
          description={t("v21.contact.subtitle")}
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <div className="grid gap-4 lg:col-span-5 lg:gap-5">
            <Reveal>
              <div className="card-surface rounded-[1.75rem] p-6 md:p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow">{t("v21.contact.openTo")}</p>
                  <span className="flex items-center gap-1.5 rounded-full border border-acid/30 bg-acid-soft px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-acid-text">
                    <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                    {t("v21.contact.availability")}
                  </span>
                </div>

                <p className="mt-4 font-display text-2xl font-medium leading-tight tracking-[-0.03em] md:text-3xl">
                  {t("v21.contact.scopeLine")}
                </p>

                <div className="mt-6 space-y-0">
                  {contactRows.map((row) => {
                    const Icon = row.icon;
                    const content = (
                      <>
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-surface-2 text-acid-text">
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                            {row.label}
                          </span>
                          <span className="mt-0.5 block truncate text-sm font-medium text-ink">
                            {row.value}
                          </span>
                        </span>
                      </>
                    );

                    return row.href ? (
                      <a
                        key={row.label}
                        href={row.href}
                        className="group flex items-center gap-3 border-b border-line py-3 transition-colors hover:text-acid-text last:border-0"
                      >
                        {content}
                        <FiArrowUpRight
                          className="ml-auto h-3.5 w-3.5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid-text"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <div
                        key={row.label}
                        className="flex items-center gap-3 border-b border-line py-3 last:border-0"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={socialLinks.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("a11y.linkedin")}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-acid hover:bg-acid hover:text-acid-ink"
                  >
                    <FiLinkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("a11y.github")}
                    className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-acid hover:bg-acid hover:text-acid-ink"
                  >
                    <FiGithub className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <span className="ml-2 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                    {t("v21.contact.or")}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative overflow-hidden rounded-[1.75rem] bg-acid p-6 text-acid-ink">
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] opacity-60">
                      {t("v21.contact.responseTime")}
                    </p>
                    <p className="mt-2 max-w-[230px] font-display text-xl font-semibold leading-snug tracking-tight">
                      {t("v21.contact.response")}
                    </p>
                  </div>
                  <FiZap className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="relative mt-5 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] opacity-60">
                  <FiMapPin className="h-3 w-3" aria-hidden="true" />
                  {t("v21.contact.basedIn")} · {localTime}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <button
                type="button"
                onClick={handleCopy}
                className="group flex w-full items-center justify-between gap-4 rounded-[1.75rem] border border-line bg-surface px-5 py-4 text-left transition-colors hover:border-acid"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-surface-2 text-acid-text">
                    {copied ? (
                      <FiCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <FiCopy className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
                      {copied ? t("v21.contact.copied") : t("v21.contact.copy")}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-medium text-ink">
                      {personalInfo.email}
                    </span>
                  </span>
                </span>
                <FiArrowUpRight
                  className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid-text"
                  aria-hidden="true"
                />
              </button>
            </Reveal>
          </div>

          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="card-surface h-full rounded-[1.75rem] p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
                <h3 className="font-display text-xl font-medium tracking-tight">
                  {t("v21.contact.formTitle")}
                </h3>
                <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                  {t("v21.contact.ctaNote")}
                </span>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-5" noValidate>
                <p className={labelClasses}>{t("v21.contact.intentLabel")}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {intents.map((label, index) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => handleIntent(index, label)}
                      aria-pressed={intent === index}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[9px] tracking-[0.02em] transition-colors ${
                        intent === index
                          ? "bg-acid text-acid-ink"
                          : "border border-line text-muted hover:border-ink hover:text-ink"
                      }`}
                    >
                      <FiBriefcase className="h-3 w-3" aria-hidden="true" />
                      {label}
                    </button>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClasses}>
                      {t("v21.contact.name")}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder={t("v21.contact.namePlaceholder")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={inputClasses(Boolean(errors.name))}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p id="contact-name-error" role="alert" className="mt-1 text-[11px] text-red-500">
                        {t("contact.form.validation.name")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClasses}>
                      {t("v21.contact.email")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder={t("v21.contact.emailPlaceholder")}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={inputClasses(Boolean(errors.email))}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p id="contact-email-error" role="alert" className="mt-1 text-[11px] text-red-500">
                        {t("contact.form.validation.email")}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="contact-subject" className={labelClasses}>
                      {t("v21.contact.subject")}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      autoComplete="off"
                      placeholder={t("v21.contact.subjectPlaceholder")}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                      className={inputClasses(Boolean(errors.subject))}
                      {...register("subject")}
                    />
                    {errors.subject && (
                      <p id="contact-subject-error" role="alert" className="mt-1 text-[11px] text-red-500">
                        {t("contact.form.validation.subject")}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className={labelClasses}>
                      {t("v21.contact.message")}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder={t("v21.contact.messagePlaceholder")}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`${inputClasses(Boolean(errors.message))} resize-none`}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p id="contact-message-error" role="alert" className="mt-1 text-[11px] text-red-500">
                        {t("contact.form.validation.message")}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group mt-5 flex w-full items-center justify-between gap-3 rounded-full bg-acid px-5 py-3.5 text-sm font-semibold text-acid-ink transition-colors hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="flex items-center gap-2">
                    <FiSend className="h-4 w-4" aria-hidden="true" />
                    {isSubmitting ? t("v21.contact.sending") : t("v21.contact.submit")}
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-acid-ink/10">
                    <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className={`min-h-[1.1rem] pt-2 text-xs ${
                    status === "error" ? "text-red-500" : "text-acid-text"
                  }`}
                >
                  {status === "success" && t("v21.contact.success")}
                  {status === "error" &&
                    t("v21.contact.error", { email: personalInfo.email })}
                </p>

                {!CONTACT_ENDPOINT && (
                  <p className="mt-1 text-[10px] leading-relaxed text-muted">
                    {t("v21.contact.note", { email: personalInfo.email })}
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex flex-col justify-between gap-5 border-y border-line py-8 md:flex-row md:items-center"
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                {t("v21.contact.emailLabel")}
              </p>
              <p className="mt-2 break-all font-display text-[clamp(1.25rem,3.4vw,3rem)] font-medium tracking-[-0.04em] transition-colors group-hover:text-acid-text">
                {personalInfo.email}
              </p>
            </div>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-acid group-hover:bg-acid group-hover:text-acid-ink">
              <FiArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
};
