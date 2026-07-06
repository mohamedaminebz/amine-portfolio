import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { personalInfo, socialLinks } from "../data/portfolioData.index";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] ${theme === "light" ? "opacity-30" : ""}`}
      ></div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Name with animated gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
          {personalInfo.name}
        </h1>

        {/* Title */}
        <p
          className={`text-xl md:text-2xl mb-8 font-light ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {personalInfo.title}
        </p>

        {/* Description */}
        <p
          className={`text-lg max-w-3xl mx-auto mb-12 leading-relaxed ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {personalInfo.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            {t("hero.cta")}
          </a>
          <a
            href="#contact"
            className={`px-8 py-4 font-semibold rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "border-2 border-gray-600 text-white hover:border-blue-500 hover:bg-blue-500/10"
                : "border-2 border-gray-300 text-gray-900 hover:border-blue-500 hover:bg-blue-500/10"
            }`}
          >
            {t("hero.hire")}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700 hover:border-blue-500"
                : "bg-white/50 hover:bg-blue-600/20 border border-gray-200 hover:border-blue-500 shadow-sm"
            }`}
            aria-label="LinkedIn"
          >
            <svg
              className={`w-6 h-6 ${theme === "dark" ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
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
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600"
                : "bg-white/50 hover:bg-gray-100 border border-gray-200 shadow-sm"
            }`}
            aria-label="GitHub"
          >
            <svg
              className={`w-6 h-6 ${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={socialLinks.email}
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-800/50 hover:bg-green-600/20 border border-gray-700 hover:border-green-500"
                : "bg-white/50 hover:bg-green-600/20 border border-gray-200 hover:border-green-500 shadow-sm"
            }`}
            aria-label="Email"
          >
            <svg
              className={`w-6 h-6 ${theme === "dark" ? "text-gray-400 hover:text-green-400" : "text-gray-600 hover:text-green-600"}`}
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
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
