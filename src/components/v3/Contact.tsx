import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  FiCheck,
  FiClock,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { z } from "zod";
import { useLocalTime } from "../../hooks/useLocalTime";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { copyToClipboard } from "../../lib/clipboard";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const schema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  subject: z.string().trim().min(3),
  message: z.string().trim().min(10),
});

type ContactValues = z.infer<typeof schema>;
type Status = "idle" | "success" | "error";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as
  | string
  | undefined;

export const Contact = () => {
  const { t, i18n } = useTranslation();
  const { personalInfo, socialLinks } = usePortfolioData();
  const localTime = useLocalTime("Africa/Tunis", i18n.language);

  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  useEffect(
    () => () => {
      if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
    },
    [],
  );

  const copyEmail = async () => {
    const success = await copyToClipboard(personalInfo.email);
    if (!success) return;

    setCopied(true);
    if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
    copiedTimer.current = window.setTimeout(() => setCopied(false), 2200);
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
    } catch {
      setStatus("error");
    }
  };

  const errorFor = (field: keyof ContactValues) =>
    errors[field] ? t(`v3.contact.validation.${field}`) : null;

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <Reveal>
          <SectionHeader
            label={t("v3.contact.label")}
            title={t("v3.contact.title")}
            accent={t("v3.contact.titleAccent")}
            subtitle={t("v3.contact.subtitle")}
          />
        </Reveal>

        <div className="mt-9 grid gap-4 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-5">
            <div className="gradient-bg relative flex h-full flex-col overflow-hidden rounded-[var(--radius)] p-7 text-white shadow-[var(--shadow)] sm:p-8">
              <span
                aria-hidden="true"
                className="absolute -right-12 -top-16 h-48 w-48 rounded-full border border-white/20"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-white/10 blur-2xl"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white backdrop-blur-md">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-white"
                    style={{
                      animation: "pulse-soft 2.4s ease-in-out infinite",
                    }}
                  />
                  {t("v3.contact.availability")}
                </span>

                <p className="display mt-6 text-[clamp(1.8rem,3.4vw,2.6rem)]">
                  {t("v3.contact.panelTitle")}
                  <span className="mt-1 block text-white/70">
                    {t("v3.contact.panelTitleAccent")}
                  </span>
                </p>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
                  {t("v3.contact.panelNote")}
                </p>

                <div className="mt-7 space-y-2.5">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">
                    <FiMail aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="min-w-0 flex-1 truncate text-sm underline-offset-4 hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={() => void copyEmail()}
                      aria-label={t("v3.contact.copy")}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
                    >
                      {copied ? (
                        <FiCheck aria-hidden="true" className="h-3.5 w-3.5" />
                      ) : (
                        <FiCopy aria-hidden="true" className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <div className="flex items-center gap-2.5 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">
                      <FiMapPin aria-hidden="true" className="h-4 w-4 shrink-0" />
                      <span className="truncate text-[12px]">
                        {personalInfo.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">
                      <FiClock aria-hidden="true" className="h-4 w-4 shrink-0" />
                      <span className="truncate font-mono text-[11px]">
                        {localTime} · GMT+1
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <a
                    href={socialLinks.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white backdrop-blur-md transition-colors hover:bg-white/25"
                  >
                    <FiLinkedin aria-hidden="true" className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white backdrop-blur-md transition-colors hover:bg-white/25"
                  >
                    <FiGithub aria-hidden="true" className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                </div>

                <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.1em] text-white/55">
                  {t("v3.contact.response")}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="min-w-0 lg:col-span-7">
            <div className="card-soft h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="icon-tile">
                  <FiSend aria-hidden="true" className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-bold">{t("v3.contact.formTitle")}</h3>
                  <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                    {t("v3.contact.formNote")}
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-6 grid gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="label !text-[9px]">
                      {t("v3.contact.name")}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder={t("v3.contact.namePlaceholder")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      className="field mt-1.5"
                      {...register("name")}
                    />
                    {errorFor("name") ? (
                      <p
                        id="contact-name-error"
                        className="mt-1.5 text-[11px] text-red-500"
                      >
                        {errorFor("name")}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="label !text-[9px]">
                      {t("v3.contact.emailField")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder={t("v3.contact.emailPlaceholder")}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      className="field mt-1.5"
                      {...register("email")}
                    />
                    {errorFor("email") ? (
                      <p
                        id="contact-email-error"
                        className="mt-1.5 text-[11px] text-red-500"
                      >
                        {errorFor("email")}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="label !text-[9px]">
                    {t("v3.contact.subject")}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder={t("v3.contact.subjectPlaceholder")}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={
                      errors.subject ? "contact-subject-error" : undefined
                    }
                    className="field mt-1.5"
                    {...register("subject")}
                  />
                  {errorFor("subject") ? (
                    <p
                      id="contact-subject-error"
                      className="mt-1.5 text-[11px] text-red-500"
                    >
                      {errorFor("subject")}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="contact-message" className="label !text-[9px]">
                    {t("v3.contact.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder={t("v3.contact.messagePlaceholder")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    className="field mt-1.5 resize-y"
                    {...register("message")}
                  />
                  {errorFor("message") ? (
                    <p
                      id="contact-message-error"
                      className="mt-1.5 text-[11px] text-red-500"
                    >
                      {errorFor("message")}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary disabled:opacity-60"
                  >
                    {isSubmitting
                      ? t("v3.contact.sending")
                      : t("v3.contact.submit")}
                    <FiSend aria-hidden="true" className="h-3.5 w-3.5" />
                  </button>

                  <p
                    aria-live="polite"
                    className={`text-[11px] ${
                      status === "error" ? "text-red-500" : "text-muted"
                    }`}
                  >
                    {status === "success" ? t("v3.contact.success") : null}
                    {status === "error"
                      ? t("v3.contact.error", { email: personalInfo.email })
                      : null}
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
