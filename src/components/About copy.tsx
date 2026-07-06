import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { personalInfo, interests } from "../data/portfolioData.index";

const About: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-24 relative ${
        theme === "dark" ? "bg-gray-950" : "bg-gray-100"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 opacity-20 animate-pulse ${theme === "light" ? "opacity-10" : ""}`}
              ></div>
              <div
                className={`absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 opacity-30 ${theme === "light" ? "opacity-20" : ""}`}
              ></div>
              <div
                className={`absolute inset-8 rounded-full flex items-center justify-center border-4 ${
                  theme === "dark"
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {personalInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div
                    className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"} text-sm`}
                  >
                    Logo
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <span className="text-3xl">⚡</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-3xl">🚀</span>
              </div>
              <div
                className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-2xl">💡</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              {t("about.title")}
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("about.subtitle")}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t("hero.cta").includes("View")
                  ? "development"
                  : "développement"}
              </span>
            </h2>
            <p
              className={`text-lg leading-relaxed mb-8 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {personalInfo.description}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div
                className={`rounded-xl p-4 text-center border ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <div className="text-3xl font-bold text-blue-400 mb-1">1+</div>
                <div
                  className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"} text-sm`}
                >
                  {t("about.years")}
                </div>
              </div>
              <div
                className={`rounded-xl p-4 text-center border ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <div className="text-3xl font-bold text-cyan-400 mb-1">6+</div>
                <div
                  className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"} text-sm`}
                >
                  {t("about.projects")}
                </div>
              </div>
              <div
                className={`rounded-xl p-4 text-center border ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  4+
                </div>
                <div
                  className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"} text-sm`}
                >
                  {t("about.internships")}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div
              className={`rounded-2xl p-6 border mb-8 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <h4
                className={`text-lg font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {t("about.contactInfo")}
              </h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`flex items-center gap-3 hover:text-blue-400 transition-colors ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
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
                  {personalInfo.email}
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className={`flex items-center gap-3 hover:text-green-400 transition-colors ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
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
                  {personalInfo.phone}
                </a>
                <div
                  className={`flex items-center gap-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
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
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h4
                className={`text-lg font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {t("about.interests")}
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.value.map((interest, index) => (
                  <div
                    key={index}
                    className={`px-5 py-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                      theme === "dark"
                        ? "bg-gray-800/50 border-gray-700 hover:border-blue-500/50"
                        : "bg-white border-gray-200 hover:border-blue-500/50 shadow-sm"
                    }`}
                  >
                    <span className="text-xl">
                      {interest.icon === "pen-tool" && "✍️"}
                      {interest.icon === "tv" && "📺"}
                      {interest.icon === "book-open" && "📚"}
                    </span>
                    <span
                      className={
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      {interest.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
