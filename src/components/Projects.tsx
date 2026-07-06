// src/components/Projects.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
// import { projects } from "../data/portfolioData.index";
import { usePortfolioData } from "../hooks/usePortfolioData";
import {
  Project,
  ProfessionalProject,
  InternshipProject,
  AcademicProject,
} from "../types/portfolio";
import ProjectDetail from "./ProjectDetail";

const Projects: React.FC = () => {
  const { projects } = usePortfolioData();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: t("projects.filter.all"), icon: "🎯" },
    {
      key: "professional",
      label: t("projects.filter.professional"),
      icon: "💼",
    },
    { key: "internship", label: t("projects.filter.internship"), icon: "📚" },
    { key: "academic", label: t("projects.filter.academic"), icon: "🎓" },
    { key: "other", label: t("projects.filter.other"), icon: "✨" },
  ];

  const getProjectsByCategory = () => {
    if (filterCategory === "all") return projects;
    return projects.filter((p) => p.type === filterCategory);
  };

  const filteredProjects = getProjectsByCategory();

  // Helper to get count based on project type
  const getProjectStats = (project: Project) => {
    switch (project.type) {
      case "professional":
        const profProject = project as ProfessionalProject;
        return {
          primaryCount: profProject.microservices?.length || 0,
          primaryLabel: t("projects.stats.microservices"),
          secondaryCount: profProject.performanceMetrics?.length || 0,
          secondaryLabel: t("projects.stats.metrics"),
        };
      case "internship":
        const internProject = project as InternshipProject;
        return {
          primaryCount: internProject.tasks?.length || 0,
          primaryLabel: t("projects.stats.tasks"),
          secondaryCount: internProject.learnings?.length || 0,
          secondaryLabel: t("projects.stats.learnings"),
        };
      case "academic":
        const academicProject = project as AcademicProject;
        return {
          primaryCount: academicProject.keyConcepts?.length || 0,
          primaryLabel: t("projects.stats.concepts"),
          secondaryCount: academicProject.methodologies?.length || 0,
          secondaryLabel: t("projects.stats.methodologies"),
        };
      default:
        return {
          primaryCount: 0,
          primaryLabel: t("projects.stats.details"),
          secondaryCount: 0,
          secondaryLabel: t("projects.stats.info"),
        };
    }
  };

  return (
    <section
      id="projects"
      className={`py-24 relative ${
        theme === "dark" ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"
            : "bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"
        }`}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilterCategory(category.key)}
              className={`px-6 py-3 rounded-xl font-medium capitalize transition-all duration-300 flex items-center gap-2 ${
                filterCategory === category.key
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : theme === "dark"
                    ? "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 shadow-sm"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.label}
              {filterCategory === category.key && (
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {filteredProjects.length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
              theme={theme}
              t={t}
              getProjectStats={getProjectStats}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div
            className={`text-center py-16 rounded-2xl border-2 border-dashed ${
              theme === "dark"
                ? "border-gray-700 text-gray-500"
                : "border-gray-300 text-gray-400"
            }`}
          >
            <svg
              className="w-16 h-16 mx-auto mb-4 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p className="text-lg">{t("projects.noProjects")}</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

// Helper function to calculate years ago with i18n support
// const getYearsAgo = (
//   period: string,
//   t: (key: string) => string,
// ): { text: string; years: number; months: number } | null => {
//   const endMatch = period.match(/([A-Za-zÀ-ÿ]+)\s*(\d{4})/g);
//   if (!endMatch) return null;

//   const endDateStr = endMatch[endMatch.length - 1];
//   const [month, year] = endDateStr.split(" ");

//   const monthMap: Record<string, number> = {
//     Jan: 0,
//     Janv: 0,
//     Janvier: 0,
//     Fév: 1,
//     Fev: 1,
//     Février: 1,
//     Mar: 2,
//     Mars: 2,
//     Avr: 3,
//     Avril: 3,
//     Mai: 4,
//     Jun: 5,
//     Juin: 5,
//     Jul: 6,
//     Juillet: 6,
//     Août: 7,
//     Aout: 7,
//     Sep: 8,
//     Sept: 8,
//     Septembre: 8,
//     Oct: 9,
//     Octobre: 9,
//     Nov: 10,
//     Novembre: 10,
//     Déc: 11,
//     Dec: 11,
//     Décembre: 11,
//   };

//   const endDate = new Date(parseInt(year), monthMap[month] || 0);
//   const now = new Date();
//   let yearsDiff = now.getFullYear() - endDate.getFullYear();
//   let monthsDiff = now.getMonth() - endDate.getMonth();

//   if (monthsDiff < 0) {
//     yearsDiff--;
//     monthsDiff += 12;
//   }

//   // Format the text based on the difference
//   let text = "";
//   if (yearsDiff === 0 && monthsDiff === 0) {
//     text = t("projects.yearsAgo.thisMonth");
//   } else if (yearsDiff === 0 && monthsDiff === 1) {
//     text = t("projects.yearsAgo.oneMonth");
//   } else if (yearsDiff === 0 && monthsDiff > 1) {
//     text = t("projects.yearsAgo.multipleMonths", { count: monthsDiff });
//   } else if (yearsDiff === 1 && monthsDiff === 0) {
//     text = t("projects.yearsAgo.oneYear");
//   } else if (yearsDiff === 1 && monthsDiff > 0) {
//     text = t("projects.yearsAgo.oneYearMultipleMonths", { months: monthsDiff });
//   } else if (yearsDiff > 1 && monthsDiff === 0) {
//     text = t("projects.yearsAgo.multipleYears", { count: yearsDiff });
//   } else if (yearsDiff > 1 && monthsDiff > 0) {
//     text = t("projects.yearsAgo.multipleYearsMultipleMonths", {
//       years: yearsDiff,
//       months: monthsDiff,
//     });
//   }

//   return { text, years: yearsDiff, months: monthsDiff };
// };
// Helper function to calculate years ago with i18n support
const getYearsAgo = (
  period: string,
  t: (key: string) => string,
): { text: string; years: number; months: number } | null => {
  const endMatch = period.match(/([A-Za-zÀ-ÿ]+)\s*(\d{4})/g);
  if (!endMatch) {
    console.warn("No date match found in period:", period);
    return null;
  }

  const endDateStr = endMatch[endMatch.length - 1];
  const parts = endDateStr.split(" ");
  if (parts.length !== 2) {
    console.warn("Invalid date format:", endDateStr);
    return null;
  }

  const [month, year] = parts;

  // Comprehensive month mapping (supports multiple languages)
  const monthMap: Record<string, number> = {
    // English
    Jan: 0,
    "Jan.": 0,
    January: 0,
    Feb: 1,
    "Feb.": 1,
    February: 1,
    Mar: 2,
    "Mar.": 2,
    March: 2,
    Apr: 3,
    "Apr.": 3,
    April: 3,
    May: 4,
    "May.": 4,
    Jun: 5,
    "Jun.": 5,
    June: 5,
    Jul: 6,
    "Jul.": 6,
    July: 6,
    Aug: 7,
    "Aug.": 7,
    August: 7,
    Sep: 8,
    "Sep.": 8,
    September: 8,
    Sept: 8,
    "Sept.": 8,
    Oct: 9,
    "Oct.": 9,
    October: 9,
    Nov: 10,
    "Nov.": 10,
    November: 10,
    Dec: 11,
    "Dec.": 11,
    December: 11,
    // French
    Janv: 0,
    Janvier: 0,
    Fév: 1,
    Fev: 1,
    Février: 1,
    Mars: 2,
    Mar: 2,
    Avr: 3,
    Avril: 3,
    Mai: 4,
    Juin: 5,
    Jun: 5,
    Juillet: 6,
    Jul: 6,
    Août: 7,
    Aout: 7,
    Sept: 8,
    Septembre: 8,
    Oct: 9,
    Octobre: 9,
    Nov: 10,
    Novembre: 10,
    Déc: 11,
    Dec: 11,
    Décembre: 11,
    // Spanish
    Ene: 0,
    Enero: 0,
    Feb: 1,
    Febrero: 1,
    Mar: 2,
    Marzo: 2,
    Abr: 3,
    Abril: 3,
    May: 4,
    Mayo: 4,
    Jun: 5,
    Junio: 5,
    Jul: 6,
    Julio: 6,
    Ago: 7,
    Agosto: 7,
    Sep: 8,
    Septiembre: 8,
    Oct: 9,
    Octubre: 9,
    Nov: 10,
    Noviembre: 10,
    Dic: 11,
    Diciembre: 11,
    // German
    Jan: 0,
    Januar: 0,
    Feb: 1,
    Februar: 1,
    Mär: 2,
    März: 2,
    Apr: 3,
    April: 3,
    Mai: 4,
    Jun: 5,
    Juni: 5,
    Jul: 6,
    Juli: 6,
    Aug: 7,
    August: 7,
    Sep: 8,
    September: 8,
    Okt: 9,
    Oktober: 9,
    Nov: 10,
    November: 10,
    Dez: 11,
    Dezember: 11,
  };

  const monthIndex = monthMap[month];
  if (monthIndex === undefined) {
    console.warn("Unknown month abbreviation:", month, "in period:", period);
    return null;
  }

  const parsedYear = parseInt(year);
  if (isNaN(parsedYear)) {
    console.warn("Invalid year:", year, "in period:", period);
    return null;
  }

  const endDate = new Date(parsedYear, monthIndex);
  const now = new Date();

  // Ensure we're using the correct date values
  let yearsDiff = now.getFullYear() - endDate.getFullYear();
  let monthsDiff = now.getMonth() - endDate.getMonth();

  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff += 12;
  }

  // Ensure monthsDiff is never negative
  if (monthsDiff < 0) {
    monthsDiff = 0;
  }

  // Ensure yearsDiff is never negative
  if (yearsDiff < 0) {
    yearsDiff = 0;
  }

  // Format the text based on the difference
  let text = "";
  if (yearsDiff === 0 && monthsDiff === 0) {
    text = t("projects.yearsAgo.thisMonth");
  } else if (yearsDiff === 0 && monthsDiff === 1) {
    text = t("projects.yearsAgo.oneMonth");
  } else if (yearsDiff === 0 && monthsDiff > 1) {
    text = t("projects.yearsAgo.multipleMonths", { count: monthsDiff });
  } else if (yearsDiff === 1 && monthsDiff === 0) {
    text = t("projects.yearsAgo.oneYear");
  } else if (yearsDiff === 1 && monthsDiff > 0) {
    text = t("projects.yearsAgo.oneYearMultipleMonths", { months: monthsDiff });
  } else if (yearsDiff > 1 && monthsDiff === 0) {
    text = t("projects.yearsAgo.multipleYears", { count: yearsDiff });
  } else if (yearsDiff > 1 && monthsDiff > 0) {
    text = t("projects.yearsAgo.multipleYearsMultipleMonths", {
      years: yearsDiff,
      months: monthsDiff,
    });
  }

  return { text, years: yearsDiff, months: monthsDiff };
};
interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  theme: "light" | "dark";
  t: (key: string) => string;
  getProjectStats: (project: Project) => {
    primaryCount: number;
    primaryLabel: string;
    secondaryCount: number;
    secondaryLabel: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onClick,
  theme,
  t,
  getProjectStats,
}) => {
  const getTypeBadge = () => {
    const badges: Record<
      string,
      { color: string; label: string; icon: string }
    > = {
      professional: {
        color: "from-blue-600 to-cyan-600",
        label: t("projects.type.professional"),
        icon: "💼",
      },
      internship: {
        color: "from-purple-600 to-pink-600",
        label: t("projects.type.internship"),
        icon: "📚",
      },
      academic: {
        color: "from-green-600 to-emerald-600",
        label: t("projects.type.academic"),
        icon: "🎓",
      },
      other: {
        color: "from-gray-600 to-slate-600",
        label: t("projects.type.other"),
        icon: "✨",
      },
    };
    return badges[project.type] || badges.other;
  };

  // Get gradient colors based on project type and theme
  const getGradientColors = (type: string, theme: "light" | "dark") => {
    const gradients = {
      professional: {
        light: "from-blue-600 via-blue-700 to-cyan-600",
        dark: "from-blue-400 via-blue-500 to-cyan-400",
      },
      internship: {
        light: "from-purple-600 via-purple-700 to-pink-600",
        dark: "from-purple-400 via-purple-500 to-pink-400",
      },
      academic: {
        light: "from-emerald-600 via-emerald-700 to-teal-600",
        dark: "from-emerald-400 via-emerald-500 to-teal-400",
      },
      other: {
        light: "from-gray-600 via-gray-700 to-slate-600",
        dark: "from-gray-400 via-gray-500 to-slate-400",
      },
    };

    const gradient =
      gradients[type as keyof typeof gradients] || gradients.other;
    return theme === "dark" ? gradient.dark : gradient.light;
  };

  const typeBadge = getTypeBadge();
  const stats = getProjectStats(project);
  const yearsAgoData = getYearsAgo(project.period, t);

  // Get a short description for the card
  const getShortDescription = () => {
    if (project.description) return project.description;
    if (project.type === "professional") {
      const profProject = project as ProfessionalProject;
      return (
        profProject.myContributions?.[0] || t("projects.default.professional")
      );
    }
    if (project.type === "internship") {
      const internProject = project as InternshipProject;
      return internProject.mission || t("projects.default.internship");
    }
    if (project.type === "academic") {
      const academicProject = project as AcademicProject;
      return (
        academicProject.keyConcepts?.slice(0, 2).join(", ") ||
        t("projects.default.academic")
      );
    }
    return t("projects.default.project");
  };

  // Get color based on years ago for visual indicator
  const getYearsAgoColor = (years: number) => {
    if (years === 0) return "from-green-500 to-emerald-500";
    if (years === 1) return "from-blue-500 to-cyan-500";
    if (years <= 3) return "from-yellow-500 to-orange-500";
    return "from-gray-500 to-gray-600";
  };

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer hover:-translate-y-2 ${
        theme === "dark"
          ? "bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
          : "bg-white border-gray-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 shadow-sm"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`h-48 relative overflow-hidden rounded-t-2xl ${
          project.placeholder
            ? theme === "dark"
              ? "bg-gradient-to-br from-blue-950/60 via-indigo-950/40 to-cyan-950/60"
              : "bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50"
            : theme === "dark"
              ? "bg-gradient-to-br from-gray-800 to-gray-900"
              : "bg-gradient-to-br from-gray-100 to-gray-200"
        }`}
      >
        {project.placeholder ? (
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient based on project type with theme awareness */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${getGradientColors(project.type, theme)}`}
            >
              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

              {/* Subtle grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              ></div>

              {/* Floating orbs for depth */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Floating icon with subtle glass container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative animate-float">
                {/* Glow behind */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>

                {/* Emoji only - clean and professional */}
                <span className="text-5xl filter drop-shadow-lg animate-float-slow">
                  {project.type === "professional"
                    ? "🚀"
                    : project.type === "internship"
                      ? "📚"
                      : project.type === "academic"
                        ? "🎓"
                        : "✨"}
                </span>
              </div>
            </div>

            {/* Floating particles */}
            <div
              className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-white/60 animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-white/60 animate-ping"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-white/60 animate-ping"
              style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-white/60 animate-ping"
              style={{ animationDuration: "4.5s", animationDelay: "2s" }}
            ></div>
          </div>
        ) : (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 transform-gpu"
            style={{ backfaceVisibility: "hidden" }}
          />
        )}
        {/* Type Badge - stays on top */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${typeBadge.color} shadow-lg flex items-center gap-1`}
          >
            <span>{typeBadge.icon}</span>
            {typeBadge.label}
          </span>
        </div>

        {/* Years Ago Badge - stays on top */}
        {yearsAgoData && (
          <div className="absolute bottom-3 right-3">
            <div
              className={`px-2 py-1 rounded-lg text-xs font-medium text-white bg-gradient-to-r ${getYearsAgoColor(yearsAgoData.years)} shadow-lg backdrop-blur-sm flex items-center gap-1`}
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {yearsAgoData.text}
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            theme === "dark"
              ? "from-black/30 via-transparent to-transparent"
              : "from-black/10 via-transparent to-transparent"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        ></div>

        {/* View button */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-blue-500/90 flex items-center justify-center backdrop-blur-sm">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`text-sm font-medium ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            {project.period}
          </span>
          <span className="text-gray-500">•</span>
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-500" : "text-gray-500"
            }`}
          >
            {project.company}
          </span>
        </div>
        <h3
          className={`text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-sm mb-4 line-clamp-2 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {getShortDescription()}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                theme === "dark"
                  ? "bg-gray-700/50 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                theme === "dark"
                  ? "bg-gray-700/50 text-gray-400"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              +{project.technologies.length - 3}
            </span>
          )}
        </div>{" "}
        <div
          className={`flex items-center gap-1.5 text-xs font-medium ${
            theme === "dark" ? "text-blue-400" : "text-blue-600"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          <span>{t("projects.viewDetails")}</span>
          <svg
            className="w-3 h-3"
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
