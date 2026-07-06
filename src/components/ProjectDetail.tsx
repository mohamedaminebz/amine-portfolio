// src/components/ProjectDetail.tsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import {
  Project,
  ProfessionalProject,
  InternshipProject,
  AcademicProject,
  OtherProject,
} from "../types/portfolio";
import {
  SiNodedotjs,
  SiReact,
  SiMysql,
  SiSwagger,
  SiGooglebigquery,
} from "react-icons/si";
import { IconType } from "react-icons";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const techIconMap: Record<string, IconType> = {
    "Node.js": SiNodedotjs,
    "React.js": SiReact,
    MySQL: SiMysql,
    Swagger: SiSwagger,
    BigQuery: SiGooglebigquery,
  };

  const { t } = useTranslation();
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      const currentIndex = project.screenshots.findIndex(
        (s) => s.url === selectedImage.url,
      );

      if (e.key === "ArrowLeft") {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0 && project.screenshots[prevIndex].url) {
          setSelectedImage({
            url: project.screenshots[prevIndex].url,
            caption: project.screenshots[prevIndex].caption,
          });
        }
      } else if (e.key === "ArrowRight") {
        const nextIndex = currentIndex + 1;
        if (
          nextIndex < project.screenshots.length &&
          project.screenshots[nextIndex].url
        ) {
          setSelectedImage({
            url: project.screenshots[nextIndex].url,
            caption: project.screenshots[nextIndex].caption,
          });
        }
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, project.screenshots]);

  const renderProjectContent = () => {
    switch (project.type) {
      case "professional":
        return renderProfessionalContent(project as ProfessionalProject);
      case "internship":
        return renderInternshipContent(project as InternshipProject);
      case "academic":
        return renderAcademicContent(project as AcademicProject);
      default:
        return renderDefaultContent(project);
    }
  };

  const renderProfessionalContent = (project: ProfessionalProject) => {
    const isDark = theme === "dark";

    return (
      <div className="space-y-8">
        {/* ===== 1. HERO SUMMARY - Cinematic Card ===== */}
        {project.summary && (
          <div
            className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
              isDark
                ? "bg-gradient-to-br from-blue-900/40 via-blue-800/20 to-cyan-900/40 border border-blue-800 hover:border-blue-600"
                : "bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 border border-blue-200 hover:border-blue-300 hover:shadow-blue-500/10"
            }`}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          isDark
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {project.role}
                      </span>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          isDark
                            ? "bg-green-500/20 text-green-400"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {project.period}
                      </span>
                      {project.company && (
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            isDark
                              ? "bg-white/10 text-white/70"
                              : "bg-black/5 text-gray-600"
                          }`}
                        >
                          {project.company}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-sm font-medium mt-1 ${
                        isDark ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      Overview
                    </h3>
                  </div>
                </div>

                {/* Status indicator */}
                <div
                  className={`flex items-center gap-1.5 text-xs ${
                    project.period.includes("Present")
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      project.period.includes("Present")
                        ? "bg-green-400 animate-pulse"
                        : "bg-gray-400"
                    }`}
                  ></span>
                  {project.period.includes("Present") ? "Active" : "Completed"}
                </div>
              </div>

              <p
                className={`text-base md:text-lg font-semibold leading-relaxed ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {project.summary}
              </p>
            </div>
          </div>
        )}

        {/* ===== 2. QUICK STATS - Compact & Refined ===== */}
        {project.quickStats && project.quickStats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {project.quickStats.map((stat, idx) => (
              <div
                key={idx}
                className={`group/card relative overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-gray-800/40 border border-gray-700/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
                    : "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200"
                }`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
                    idx === 0
                      ? "from-blue-500 to-blue-400"
                      : idx === 1
                        ? "from-cyan-500 to-teal-500"
                        : idx === 2
                          ? "from-teal-500 to-emerald-500"
                          : "from-emerald-500 to-green-500"
                  }`}
                ></div>

                <div className="relative p-4 pt-5">
                  <div
                    className={`text-2xl font-black tracking-tight mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <span
                      className={`inline-block transition-all duration-300 group-hover/card:scale-105 ${
                        idx === 0
                          ? "text-blue-500"
                          : idx === 1
                            ? "text-cyan-500"
                            : idx === 2
                              ? "text-teal-500"
                              : "text-emerald-500"
                      }`}
                    >
                      {stat.value}
                    </span>
                  </div>

                  <div
                    className={`text-[10px] font-semibold uppercase tracking-wider leading-tight break-words hyphens-auto ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                    style={{
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      hyphens: "auto",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== 3. STORY - Timeline Cards ===== */}
        {project.story && (
          <div className="space-y-4">
            {/* Challenge Card */}
            <div className="group relative">
              <div
                className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/50 to-orange-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700`}
              />
              <div
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
                    : "bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg"
                }`}
              >
                <div className="flex">
                  <div className="w-1.5 bg-gradient-to-b from-red-500 to-orange-500 flex-shrink-0 group-hover:w-2 transition-all duration-300" />

                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/20">
                          <span className="text-lg">⚠️</span>
                        </div>
                      </div>
                      <div>
                        <h4
                          className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                          The Challenge
                        </h4>
                        <p
                          className={`text-xs font-medium uppercase tracking-wider ${
                            isDark ? "text-red-400" : "text-red-600"
                          }`}
                        >
                          Problem Statement
                        </p>
                      </div>
                    </div>
                    <p
                      className={`text-sm leading-relaxed pl-14 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.story.challenge}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Card */}
            <div className="group relative">
              <div
                className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-blue-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700`}
              />
              <div
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
                    : "bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg"
                }`}
              >
                <div className="flex">
                  <div className="w-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 flex-shrink-0 group-hover:w-2 transition-all duration-300" />

                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                          <span className="text-lg">⚡</span>
                        </div>
                      </div>
                      <div>
                        <h4
                          className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                          What I Did
                        </h4>
                        <p
                          className={`text-xs font-medium uppercase tracking-wider ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          Solution & Approach
                        </p>
                      </div>
                    </div>
                    <p
                      className={`text-sm leading-relaxed pl-14 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.story.action}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Result Card */}
            <div className="group relative">
              <div
                className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-emerald-500/50 to-green-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700`}
              />
              <div
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  isDark
                    ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
                    : "bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg"
                }`}
              >
                <div className="flex">
                  <div className="w-1.5 bg-gradient-to-b from-emerald-500 to-green-500 flex-shrink-0 group-hover:w-2 transition-all duration-300" />

                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                          <span className="text-lg">🎯</span>
                        </div>
                      </div>
                      <div>
                        <h4
                          className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                          The Result
                        </h4>
                        <p
                          className={`text-xs font-medium uppercase tracking-wider ${
                            isDark ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        >
                          Impact & Outcomes
                        </p>
                      </div>
                    </div>
                    <p
                      className={`text-sm leading-relaxed pl-14 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.story.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== 4. ACHIEVEMENTS - Clean List ===== */}
        {project.achievements && project.achievements.length > 0 && (
          <div
            className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
              isDark
                ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
                : "bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg"
            }`}
          >
            {/* Top gradient line - changed from amber to emerald */}
            <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500" />

            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-lg opacity-50" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <span className="text-xl">🏆</span>
                  </div>
                </div>
                <div>
                  <h3
                    className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    Key Achievements
                  </h3>
                  <p
                    className={`text-xs font-medium uppercase tracking-wider ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {project.achievements.length} Milestone
                    {project.achievements.length !== 1 ? "s" : ""} Reached
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {project.achievements.map((item, idx) => (
                  <div
                    key={idx}
                    className="group/item flex items-start gap-4 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className={`relative flex-shrink-0 mt-0.5`}>
                      <div
                        className={`absolute inset-0 rounded-lg blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity bg-gradient-to-br ${
                          idx % 3 === 0
                            ? "from-blue-500 to-cyan-500"
                            : idx % 3 === 1
                              ? "from-teal-500 to-emerald-500"
                              : "from-emerald-500 to-green-500"
                        }`}
                      />
                      <div
                        className={`relative w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isDark
                            ? "bg-gray-800 text-gray-400 group-hover/item:text-white group-hover/item:shadow-lg"
                            : "bg-gray-50 text-gray-500 group-hover/item:text-white group-hover/item:shadow-lg"
                        } ${
                          idx % 3 === 0
                            ? "group-hover/item:bg-gradient-to-br group-hover/item:from-blue-500 group-hover/item:to-cyan-500"
                            : idx % 3 === 1
                              ? "group-hover/item:bg-gradient-to-br group-hover/item:from-teal-500 group-hover/item:to-emerald-500"
                              : "group-hover/item:bg-gradient-to-br group-hover/item:from-emerald-500 group-hover/item:to-green-500"
                        }`}
                      >
                        <span className="text-xs font-bold tabular-nums">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isDark
                          ? "text-gray-300 group-hover/item:text-white"
                          : "text-gray-600 group-hover/item:text-gray-900"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {project.teamSize && (
                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-3 ${
                    isDark ? "border-gray-800" : "border-gray-100"
                  }`}
                >
                  <span className="text-lg">👥</span>
                  <span
                    className={`text-sm font-medium ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <span
                      className={`font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {project.teamSize}
                    </span>{" "}
                    developer{project.teamSize !== 1 ? "s" : ""} in the team
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===== 5. TECH STACK - Modern & Refined ===== */}
        {project.technologies && project.technologies.length > 0 && (
          <div
            className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
              isDark
                ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
                : "bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg"
            }`}
          >
            {/* Top gradient line */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500" />

            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-xl blur-lg opacity-50" />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="text-xl">🛠️</span>
                  </div>
                </div>
                <div>
                  <h3
                    className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    Tech Stack
                  </h3>
                  <p
                    className={`text-xs font-medium uppercase tracking-wider ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {project.technologies.length} Technologie
                    {project.technologies.length !== 1 ? "s" : ""} Used
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => {
                  const TechIcon = techIconMap[tech.name];

                  return (
                    <span
                      key={idx}
                      className={`group/tech relative overflow-hidden px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-3 cursor-default ${
                        isDark
                          ? "bg-gray-800/80 text-gray-200 hover:bg-gray-700/80 hover:scale-[1.05] hover:shadow-xl hover:shadow-blue-500/10 border border-gray-700/50 hover:border-gray-500"
                          : "bg-gray-50/80 text-gray-700 hover:bg-white hover:scale-[1.05] hover:shadow-lg hover:shadow-blue-500/5 border border-gray-200/50 hover:border-gray-300"
                      }`}
                    >
                      {/* Subtle color accent on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300`}
                      />

                      {TechIcon && (
                        <TechIcon
                          className={`relative w-5 h-5 flex-shrink-0 transition-all duration-300 group-hover/tech:scale-110 ${
                            isDark
                              ? "opacity-80 group-hover/tech:opacity-100"
                              : "opacity-65 group-hover/tech:opacity-90"
                          }`}
                        />
                      )}
                      <span className="relative tracking-wide">
                        {tech.name}
                      </span>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/tech:translate-x-full transition-transform duration-700" />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  const renderInternshipContent = (project: InternshipProject) => {
    const webScreenshots =
      project.screenshots?.filter((s) => !s.isMobile) || [];
    const mobileScreenshots =
      project.screenshots?.filter((s) => s.isMobile) || [];
    return (
      <div className="space-y-6">
        {/* MISSION */}
        <div
          className={`rounded-xl p-6 ${theme === "dark" ? "bg-blue-900/20 border border-blue-800" : "bg-blue-50 border border-blue-200"}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🎯</span>
            <h3
              className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              {t("projectDetail.mission")}
            </h3>
          </div>
          <p
            className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
          >
            {project.mission}
          </p>
          {project.supervisor && (
            <p
              className={`text-xs mt-3 pt-2 border-t ${theme === "dark" ? "border-blue-800 text-gray-400" : "border-blue-200 text-gray-500"}`}
            >
              👨‍🏫 {t("projectDetail.supervisor")}: {project.supervisor}
            </p>
          )}
        </div>

        {/* WHAT I DID - Tasks */}
        {project.tasks && project.tasks.length > 0 && (
          <div
            className={`rounded-xl p-6 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📋</span>
              <h3
                className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                {t("projectDetail.whatIDid") || "What I Did"}
              </h3>
            </div>
            <div className="space-y-4">
              {project.tasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-500 text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                    >
                      {task.title}
                    </h4>
                    <p
                      className={`text-xs mt-0.5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {task.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHAT I LEARNED - Bullet points (green, list style) */}
        {project.learnings && project.learnings.length > 0 && (
          <div
            className={`rounded-xl p-6 ${theme === "dark" ? "bg-green-900/20 border border-green-800" : "bg-green-50 border border-green-200"}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🧠</span>
              <h3
                className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                {t("projectDetail.whatILearned") || "What I Learned"}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.learnings.map((learning, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span
                    className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {learning}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DELIVERABLES - Compact grid with numbers (blue, different style) */}

        {/* {project.deliverables && project.deliverables.length > 0 && (
        <div
          className={`rounded-xl p-6 ${theme === "dark" ? "bg-blue-900/20 border border-blue-800" : "bg-blue-50 border border-blue-200"}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📦</span>
            <h3
              className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              {t("projectDetail.deliverables")}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.deliverables.map((deliverable, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-500 text-xs font-bold">
                    {idx + 1}
                  </span>
                </div>
                <span
                  className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  {deliverable}
                </span>
              </div>
            ))}
          </div>
          {project.evaluation && (
            <p
              className={`text-sm mt-4 pt-3 border-t ${theme === "dark" ? "border-blue-800 text-gray-400" : "border-blue-200 text-gray-500"}`}
            >
              ⭐ {t("projectDetail.evaluation")}: {project.evaluation}
            </p>
          )}
        </div>
      )} */}
        {/* TECHNOLOGIES - Gray card (like Internship, but Academic may need it) */}
        {project.technologies && project.technologies.length > 0 && (
          <div
            className={`rounded-xl p-6 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🛠️</span>
              <h3
                className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                {t("projectDetail.technologiesUsed")}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 rounded-lg text-sm ${theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        )}
        {/* SCREENSHOTS GALLERY */}

        {webScreenshots.length > 0 && (
          <div
            className={`rounded-xl p-6 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🖥️</span>
              <h3
                className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                Web Application Screenshots
              </h3>
              <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                {webScreenshots.length} images
              </span>
            </div>

            {/* Regular grid layout for web */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {webScreenshots.map((screenshot, idx) => (
                <div
                  key={idx}
                  className={`group relative rounded-lg overflow-hidden border cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                    theme === "dark" ? "border-gray-700" : "border-gray-200"
                  }`}
                  onClick={() => {
                    if (!screenshot.placeholder && screenshot.url) {
                      setSelectedImage({
                        url: screenshot.url,
                        caption: screenshot.caption,
                      });
                    }
                  }}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
                    {screenshot.placeholder ? (
                      <div className="text-center p-4">
                        <svg
                          className="w-10 h-10 mx-auto text-gray-500 mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-gray-400 text-xs">
                          {t("projectDetail.preview")}
                        </p>
                      </div>
                    ) : (
                      <img
                        src={screenshot.url}
                        alt={screenshot.caption}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    {!screenshot.placeholder && screenshot.url && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <p
                    className={`text-xs text-center p-2 truncate ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {screenshot.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Screenshots */}
        {mobileScreenshots.length > 0 && (
          <div
            className={`rounded-xl p-6 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}`}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📱</span>
              <h3
                className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                Mobile Application Screenshots
              </h3>
              <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                {mobileScreenshots.length} images
              </span>
            </div>

            {/* Phone mockup layout */}
            <div className="relative">
              <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory">
                {mobileScreenshots.map((screenshot, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[250px] snap-start transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div
                      className={`relative mx-auto w-[230px] rounded-[1.5rem] border-4 border-gray-800 dark:border-gray-700 shadow-2xl bg-black transition-all duration-300 hover:shadow-2xl hover:border-blue-500/50 ${
                        !screenshot.placeholder && screenshot.url
                          ? "cursor-pointer group"
                          : ""
                      }`}
                      onClick={() => {
                        if (!screenshot.placeholder && screenshot.url) {
                          setSelectedImage({
                            url: screenshot.url,
                            caption: screenshot.caption,
                          });
                        }
                      }}
                    >
                      <div className="overflow-hidden rounded-[1.3rem] bg-gray-900 relative">
                        <div className="relative w-full h-[520px]">
                          {screenshot.placeholder ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                              <svg
                                className="w-10 h-10 mx-auto text-gray-600 mb-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1}
                                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <p className="text-gray-500 text-xs">
                                {t("projectDetail.preview")}
                              </p>
                            </div>
                          ) : (
                            <>
                              <img
                                src={screenshot.url}
                                alt={screenshot.caption}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                style={{ objectPosition: "top center" }}
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                                  <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <p
                      className={`text-xs text-center mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                    >
                      {screenshot.caption}
                    </p>
                  </div>
                ))}
              </div>
              {mobileScreenshots.length > 3 && (
                <>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-gray-800/80 to-transparent w-12 h-full pointer-events-none md:hidden"></div>
                  <p
                    className={`text-center text-xs mt-2 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}
                  >
                    ← swipe to see more →
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        <p
          className={`text-center text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}
        >
          🔍 {t("projectDetail.clickToEnlarge")}
        </p>
      </div>
    );
  };

  // Academic Project Renderer - with i18n
  const renderAcademicContent = (project: AcademicProject) => (
    <div className="space-y-6">
      {/* WHAT I BUILT - Purple card (like Mission for Internship) */}
      {/* <div
        className={`rounded-xl p-6 ${theme === "dark" ? "bg-purple-900/20 border border-purple-800" : "bg-purple-50 border border-purple-200"}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🚀</span>
          <h3
            className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            {t("projectDetail.whatIBuilt")}
          </h3>
        </div>
        <p
          className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
        >
          {project.longDescription}
        </p>
      </div> */}

      <div
        className={`rounded-xl p-6 ${theme === "dark" ? "bg-purple-900/20 border border-purple-800" : "bg-purple-50 border border-purple-200"}`}
      >
        <h3
          className={`text-lg font-semibold mb-3 flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
        >
          <span>🚀</span> {t("projectDetail.whatIBuilt")}
        </h3>

        {/* Split longDescription into paragraphs */}
        {project.longDescription?.split("\n\n").map((paragraph, idx) => {
          // Check if paragraph contains bullet points
          if (paragraph.includes("•") || paragraph.includes("-")) {
            const lines = paragraph.split("\n");
            return (
              <div key={idx} className="mb-3">
                {lines.map((line, lineIdx) => {
                  if (line.startsWith("•") || line.startsWith("-")) {
                    return (
                      <div
                        key={lineIdx}
                        className="flex items-start gap-2 text-sm mb-1 ml-2"
                      >
                        <span className="text-purple-500">•</span>
                        <span
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          {line.replace(/^[•-]\s*/, "")}
                        </span>
                      </div>
                    );
                  }
                  return (
                    <p
                      key={lineIdx}
                      className={`text-sm mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {line}
                    </p>
                  );
                })}
              </div>
            );
          }
          return (
            <p
              key={idx}
              className={`text-sm mb-3 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            >
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* RESPONSIBILITIES - Numbered tasks (like Internship's What I Did) */}
      {project.responsibilities && project.responsibilities.length > 0 && (
        <div
          className={`rounded-xl p-6 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📋</span>
            <h3
              className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              {t("projectDetail.myResponsibilities")}
            </h3>
          </div>
          <div className="space-y-3">
            {project.responsibilities.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-500 text-xs font-bold">
                    {idx + 1}
                  </span>
                </div>
                <span
                  className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* KEY SKILLS - Tags (like Internship's Technologies) */}
      {/* {project.keySkills && project.keySkills.length > 0 && (
        <div
          className={`rounded-xl p-6 ${theme === "dark" ? "bg-blue-900/20 border border-blue-800" : "bg-blue-50 border border-blue-200"}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">⚡</span>
            <h3
              className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              {t("projectDetail.keySkillsDemonstrated")}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.keySkills.map((skill, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-lg text-sm ${theme === "dark" ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-700"}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )} */}

      {/* RESULTS - Checkmark grid (like Internship's Learnings) */}
      {/* {project.results && project.results.length > 0 && (
        <div
          className={`rounded-xl p-6 ${theme === "dark" ? "bg-green-900/20 border border-green-800" : "bg-green-50 border border-green-200"}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📊</span>
            <h3
              className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              {t("projectDetail.keyResults")}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.results.map((result, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-green-500 text-lg">✓</span>
                <span
                  className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  {result}
                </span>
              </div>
            ))}
          </div>
        </div>
      )} */}
      {project.results && project.results.length > 0 && (
        <div
          className={`rounded-xl p-6 ${theme === "dark" ? "bg-green-900/20 border border-green-800" : "bg-green-50 border border-green-200"}`}
        >
          <h3
            className={`text-lg font-semibold mb-4 flex items-center gap-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            <span>📊</span> {t("projectDetail.keyResults")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 p-3 rounded-lg ${
                  theme === "dark" ? "bg-green-800/30" : "bg-green-100/50"
                }`}
              >
                <span className="text-green-500 text-lg">✓</span>
                <span
                  className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                >
                  {result}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* TECHNOLOGIES - Gray card (like Internship, but Academic may need it) */}
      {project.technologies && project.technologies.length > 0 && (
        <div
          className={`rounded-xl p-6 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">🛠️</span>
            <h3
              className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              {t("projectDetail.technologiesUsed")}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-lg text-sm ${theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* SCREENSHOTS GALLERY */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div
          className={`rounded-xl p-6 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📸</span>
            <h3
              className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              {t("projectDetail.screenshots")}
            </h3>
            <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
              {project.screenshots.length} {t("projectDetail.images")}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.screenshots.map((screenshot, idx) => (
              <div
                key={idx}
                className={`group relative rounded-lg overflow-hidden border cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
                onClick={() => {
                  if (!screenshot.placeholder && screenshot.url) {
                    setSelectedImage({
                      url: screenshot.url,
                      caption: screenshot.caption,
                    });
                  }
                }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
                  {screenshot.placeholder ? (
                    <div className="text-center p-4">
                      <svg
                        className="w-10 h-10 mx-auto text-gray-500 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-gray-400 text-xs">
                        {t("projectDetail.preview")}
                      </p>
                    </div>
                  ) : (
                    <img
                      src={screenshot.url}
                      alt={screenshot.caption}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {!screenshot.placeholder && screenshot.url && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <p
                  className={`text-xs text-center p-2 truncate ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                >
                  {screenshot.caption}
                </p>
              </div>
            ))}
          </div>
          <p
            className={`text-center text-xs mt-4 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}
          >
            🔍 {t("projectDetail.clickToEnlarge")}
          </p>
        </div>
      )}
    </div>
  );
  const renderDefaultContent = (project: Project) => (
    <div className="space-y-6">
      <div
        className={`rounded-xl p-6 ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}`}
      >
        <p
          className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
        >
          {project.longDescription}
        </p>
      </div>
    </div>
  );

  const getTypeBadge = () => {
    switch (project.type) {
      case "professional":
        return {
          color: "bg-blue-500/20 text-blue-400",
          label: t("projects.type.professional"),
          bg: "from-blue-600 to-cyan-600",
        };
      case "internship":
        return {
          color: "bg-purple-500/20 text-purple-400",
          label: t("projects.type.internship"),
          bg: "from-purple-600 to-pink-600",
        };
      case "academic":
        return {
          color: "bg-green-500/20 text-green-400",
          label: t("projects.type.academic"),
          bg: "from-green-600 to-emerald-600",
        };
      default:
        return {
          color: "bg-gray-500/20 text-gray-400",
          label: t("projects.type.other"),
          bg: "from-gray-600 to-slate-600",
        };
    }
  };

  const typeBadge = getTypeBadge();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-black/80 backdrop-blur-sm`}
        onClick={onClose}
      >
        <div
          className={`w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`relative px-8 py-8 bg-gradient-to-r ${typeBadge.bg}`}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-all hover:scale-110"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${typeBadge.color}`}
              >
                {typeBadge.label}
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-white/20 text-white">
                {project.company}
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-white/20 text-white/90">
                {project.period}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              {project.title}
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-2">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {project.role}
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
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
                {project.location}
              </div>
            </div>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-220px)] p-6">
            {renderProjectContent()}
          </div>

          <div
            className={`px-6 py-4 border-t flex justify-between ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}
          >
            <button
              onClick={onClose}
              className={`px-5 py-2 rounded-xl transition-all ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t("projectDetail.close")}
            </button>
            {project.type === "other" &&
              (project as OtherProject).githubLink && (
                <a
                  href={(project as OtherProject).githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 transition-all flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {t("projectDetail.viewCode")}
                </a>
              )}
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Fixed size image container */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-6xl mx-auto">
                {/* Previous button */}
                <button
                  onClick={() => {
                    if (!selectedImage) return;
                    const currentIndex = project.screenshots.findIndex(
                      (s) => s.url === selectedImage.url,
                    );
                    const prevIndex = currentIndex - 1;
                    if (prevIndex >= 0 && project.screenshots[prevIndex].url) {
                      setSelectedImage({
                        url: project.screenshots[prevIndex].url,
                        caption: project.screenshots[prevIndex].caption,
                      });
                    }
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={(() => {
                    if (!selectedImage) return true;
                    const idx = project.screenshots.findIndex(
                      (s) => s.url === selectedImage.url,
                    );
                    return idx === 0;
                  })()}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Next button */}
                <button
                  onClick={() => {
                    if (!selectedImage) return;
                    const currentIndex = project.screenshots.findIndex(
                      (s) => s.url === selectedImage.url,
                    );
                    const nextIndex = currentIndex + 1;
                    if (
                      nextIndex < project.screenshots.length &&
                      project.screenshots[nextIndex].url
                    ) {
                      setSelectedImage({
                        url: project.screenshots[nextIndex].url,
                        caption: project.screenshots[nextIndex].caption,
                      });
                    }
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={(() => {
                    if (!selectedImage) return true;
                    const idx = project.screenshots.findIndex(
                      (s) => s.url === selectedImage.url,
                    );
                    return idx === project.screenshots.length - 1;
                  })()}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Fixed box - same size for every image */}
                <div className="w-full h-[600px] md:h-[750px] bg-black/30 rounded-xl flex items-center justify-center">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.caption}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Caption and counter */}
            <div className="text-center mt-6">
              <p className="text-white/70">{selectedImage.caption}</p>
              <p className="text-white/50 text-sm mt-2">
                {(() => {
                  if (!selectedImage) return "";
                  const idx = project.screenshots.findIndex(
                    (s) => s.url === selectedImage.url,
                  );
                  return `${idx + 1} / ${project.screenshots.length}`;
                })()}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;
