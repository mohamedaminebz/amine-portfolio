import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { skills, languages, certifications } from "../data/portfolioData.index";
import { Skill } from "../types/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return "🎨";
      case "backend":
        return "⚙️";
      case "mobile":
        return "📱";
      case "devops":
        return "🚀";
      case "database":
        return "💾";
      case "other":
        return "✨";
      default:
        return "💻";
    }
  };

  return (
    <section
      id="skills"
      className={`py-24 relative ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t("skills.title")}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("skills.subtitle")}
          </p>
        </motion.div>
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-3 ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                  : theme === "dark"
                    ? "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500/50"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-blue-500/50 shadow-sm"
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="text-sm md:text-base">{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>
        {/* Skills Grid - Clean Design */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <CleanSkillCard
                key={skill.name}
                skill={skill}
                index={index}
                getCategoryColor={getCategoryColor}
                getCategoryIcon={getCategoryIcon}
                theme={theme}
                inView={inView}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        {/* Languages & Certifications - Clean Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mt-20"
        >
          {/* Languages */}
          <div
            className={`rounded-2xl p-8 ${
              theme === "dark"
                ? "bg-gray-800/30 backdrop-blur-sm border border-gray-700/50"
                : "bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg"
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
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <span
                    className={`text-lg ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {lang.name}
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium shadow-lg">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`rounded-2xl p-8 ${
              theme === "dark"
                ? "bg-gray-800/30 backdrop-blur-sm border border-gray-700/50"
                : "bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg"
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
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    theme === "dark"
                      ? "bg-gray-700/30 hover:bg-gray-700/50"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-white"
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
        </motion.div>
      </div>
    </section>
  );
};

// Clean Skill Card Component - With image icons
const CleanSkillCard: React.FC<{
  skill: Skill;
  index: number;
  getCategoryColor: (category: string) => string;
  getCategoryIcon: (category: string) => string;
  theme: "light" | "dark";
  inView: boolean;
}> = ({ skill, index, getCategoryColor, getCategoryIcon, theme, inView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.05 * index,
        type: "spring",
        bounce: 0.3,
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl p-6 transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50"
          : "bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-blue-500/50 shadow-lg hover:shadow-xl"
      }`}
    >
      {/* Subtle Gradient Border on Hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 pointer-events-none"
        />
      )}

      {/* Category Badge */}
      <div className="absolute -top-3 -right-3">
        <span
          className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(skill.category)} text-white text-xs font-medium rounded-full shadow-lg`}
        >
          {getCategoryIcon(skill.category)} {skill.category}
        </span>
      </div>

      {/* Icon Container with Image */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 p-2 border ${
            theme === "dark" ? "border-gray-700/30" : "border-gray-200/30"
          }`}
        >
          {skill.icon && !imageError ? (
            <img
              key={skill.icon}
              src={skill.icon}
              alt={skill.name}
              className="w-full h-full object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-2xl text-white">{skill.icon || "💻"}</span>
          )}
        </div>
        <div>
          <h4
            className={`text-xl font-bold ${
              isHovered
                ? "text-blue-400"
                : theme === "dark"
                  ? "text-white"
                  : "text-gray-900"
            } transition-colors duration-300`}
          >
            {skill.name}
          </h4>
          {skill.description && (
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {skill.description}
            </p>
          )}
        </div>
      </div>

      {/* Tools Tags */}
      {skill.tools && skill.tools.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {skill.tools.slice(0, 4).map((tool, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHovered ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.05 * idx }}
              className={`px-2 py-1 text-xs rounded-full ${
                theme === "dark"
                  ? "bg-gray-700/50 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tool}
            </motion.span>
          ))}
          {skill.tools.length > 4 && (
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                theme === "dark"
                  ? "bg-gray-700/50 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              +{skill.tools.length - 4}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Skills;
