import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { skills, languages, certifications } from "../data/portfolioData.index";
import { Skill } from "../types/portfolio";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: t("skills.categories.all"), icon: "🎯" },
    { key: "frontend", label: t("skills.categories.frontend"), icon: "🎨" },
    { key: "backend", label: t("skills.categories.backend"), icon: "⚙️" },
    { key: "mobile", label: t("skills.categories.mobile"), icon: "📱" },
    { key: "devops", label: t("skills.categories.devops"), icon: "🚀" },
    { key: "database", label: t("skills.categories.database"), icon: "💾" },
    { key: "other", label: t("skills.categories.other"), icon: "✨" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills.value
      : skills.value.filter((s) => s.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "from-pink-500 to-rose-500";
      case "backend":
        return "from-blue-500 to-cyan-500";
      case "mobile":
        return "from-purple-500 to-violet-500";
      case "devops":
        return "from-green-500 to-emerald-500";
      case "database":
        return "from-orange-500 to-amber-500";
      case "other":
        return "from-gray-500 to-slate-500";
      default:
        return "from-blue-500 to-cyan-500";
    }
  };

  return (
    <section
      id="skills"
      className={`py-24 relative ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {t("skills.title")}
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Skills Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                  : theme === "dark"
                    ? "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500/50"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-blue-500/50 shadow-sm"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              getCategoryColor={getCategoryColor}
              theme={theme}
            />
          ))}
        </div>

        {/* Languages & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Languages */}
          <div
            className={`rounded-2xl p-8 border ${
              theme === "dark"
                ? "bg-gray-800/50 backdrop-blur-sm border-gray-700"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="text-3xl">🌍</span>
              {t("skills.languages")}
            </h3>
            <div className="space-y-4">
              {languages.value.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span
                    className={`text-lg ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {lang.name}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`rounded-2xl p-8 border ${
              theme === "dark"
                ? "bg-gray-800/50 backdrop-blur-sm border-gray-700"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              <span className="text-3xl">📜</span>
              {t("skills.certifications")}
            </h3>
            <div className="space-y-4">
              {certifications.value.map((cert, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                    theme === "dark"
                      ? "bg-gray-700/30 hover:bg-gray-700/50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {cert.name}
                    </h4>
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
  index: number;
  getCategoryColor: (category: string) => string;
  theme: "light" | "dark";
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  index,
  getCategoryColor,
  theme,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-xl p-6 border transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50"
          : "bg-white border-gray-200 hover:border-blue-500/50 shadow-sm"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <h4
          className={`text-lg font-semibold group-hover:text-blue-400 transition-colors ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {skill.name}
        </h4>
        <span
          className={`text-sm font-medium ${
            theme === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div
        className={`relative h-3 rounded-full overflow-hidden ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: `${skill.level}%`,
            transform: isHovered ? "scaleY(1.2)" : "scaleY(1)",
          }}
        />
        {/* Shine effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${
            theme === "dark" ? "" : "opacity-50"
          }`}
        />
      </div>

      {/* Category Label */}
      <div className="absolute -top-2 -right-2">
        <span
          className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(skill.category)} text-white text-xs font-medium rounded-full shadow-lg`}
        >
          {skill.category}
        </span>
      </div>
    </div>
  );
};

export default Skills;
