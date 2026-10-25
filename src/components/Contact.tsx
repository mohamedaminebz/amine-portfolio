import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTheme } from "../context/ThemeContext";
import { usePortfolioData } from "../hooks/usePortfolioData";

const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  subject: z.string().trim().min(3),
  message: z.string().trim().min(10),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type SubmitStatus = "idle" | "success" | "error";

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as
  string | undefined;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { personalInfo, socialLinks } = usePortfolioData();
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");

    // No backend configured: fall back to a pre-filled email so the form
    // still does something useful instead of pretending to send.
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

  const inputClasses = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border transition-all outline-none ${
      theme === "dark"
        ? "bg-gray-700/50 text-white placeholder-gray-500"
        : "bg-gray-50 text-gray-900 placeholder-gray-400"
    } ${
      hasError
        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
        : theme === "dark"
          ? "border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
    }`;

  const labelClasses = `block mb-2 text-sm ${
    theme === "dark" ? "text-gray-400" : "text-gray-600"
  }`;

  const errorClasses = "mt-1 text-xs text-red-400";

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              theme === "dark"
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {t("contact.subtitle")}
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("contact.title1")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t("contact.title2")}
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email Card */}
            <div
              className={`rounded-2xl p-6 border transition-all duration-300 group ${
                theme === "dark"
                  ? "bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50"
                  : "bg-white border-gray-200 hover:border-blue-500/50 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t("contact.email")}
                  </h3>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`hover:text-blue-400 transition-colors ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className={`rounded-2xl p-6 border transition-all duration-300 group ${
                theme === "dark"
                  ? "bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-green-500/50"
                  : "bg-white border-gray-200 hover:border-green-500/50 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t("contact.phone")}
                  </h3>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className={`hover:text-green-400 transition-colors ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              className={`rounded-2xl p-6 border transition-all duration-300 group ${
                theme === "dark"
                  ? "bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500/50"
                  : "bg-white border-gray-200 hover:border-purple-500/50 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={`font-semibold text-lg ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t("contact.location")}
                  </h3>
                  <span
                    className={
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }
                  >
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={socialLinks.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("a11y.linkedin")}
                className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group ${
                  theme === "dark"
                    ? "bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-blue-500/20"
                    : "bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-500/20 shadow-sm"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className={`w-6 h-6 ${theme === "dark" ? "text-gray-400 group-hover:text-blue-400" : "text-gray-600 group-hover:text-blue-600"}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("a11y.github")}
                className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group ${
                  theme === "dark"
                    ? "bg-gray-800/50 border border-gray-700 hover:border-gray-500 hover:bg-gray-700/50"
                    : "bg-white border border-gray-200 hover:border-gray-400 hover:bg-gray-100 shadow-sm"
                }`}
              >
                <svg
                  aria-hidden="true"
                  className={`w-6 h-6 ${theme === "dark" ? "text-gray-400 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`rounded-2xl p-8 border ${
              theme === "dark"
                ? "bg-gray-800/50 backdrop-blur-sm border-gray-700"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("contact.form.title")}
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              <div>
                <label className={labelClasses} htmlFor="contact-name">
                  {t("contact.form.name")}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  className={inputClasses(Boolean(errors.name))}
                  placeholder={t("contact.form.namePlaceholder")}
                  {...register("name")}
                />
                {errors.name && (
                  <p
                    id="contact-name-error"
                    className={errorClasses}
                    role="alert"
                  >
                    {t("contact.form.validation.name")}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses} htmlFor="contact-email">
                  {t("contact.form.email")}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                  className={inputClasses(Boolean(errors.email))}
                  placeholder={t("contact.form.emailPlaceholder")}
                  {...register("email")}
                />
                {errors.email && (
                  <p
                    id="contact-email-error"
                    className={errorClasses}
                    role="alert"
                  >
                    {t("contact.form.validation.email")}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses} htmlFor="contact-subject">
                  {t("contact.form.subject")}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  autoComplete="off"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={
                    errors.subject ? "contact-subject-error" : undefined
                  }
                  className={inputClasses(Boolean(errors.subject))}
                  placeholder={t("contact.form.subjectPlaceholder")}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p
                    id="contact-subject-error"
                    className={errorClasses}
                    role="alert"
                  >
                    {t("contact.form.validation.subject")}
                  </p>
                )}
              </div>

              <div>
                <label className={labelClasses} htmlFor="contact-message">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                  className={`${inputClasses(Boolean(errors.message))} resize-none`}
                  placeholder={t("contact.form.messagePlaceholder")}
                  {...register("message")}
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    className={errorClasses}
                    role="alert"
                  >
                    {t("contact.form.validation.message")}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                {isSubmitting
                  ? t("contact.form.sending")
                  : t("contact.form.submit")}
              </button>

              {/* Live region so screen readers announce the result. */}
              <p
                role="status"
                aria-live="polite"
                className={`min-h-[1.25rem] text-sm ${
                  status === "error" ? "text-red-400" : "text-green-400"
                }`}
              >
                {status === "success" && t("contact.form.success")}
                {status === "error" && t("contact.form.error")}
              </p>

              {!CONTACT_ENDPOINT && (
                <p
                  className={`text-xs ${
                    theme === "dark" ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {t("contact.form.mailtoNote", {
                    email: personalInfo.email,
                  })}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
