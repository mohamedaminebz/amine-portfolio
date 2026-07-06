import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import { timelineItems, educationItems } from "../data/portfolioData.index";
import { TimelineItem } from "../types/portfolio";

const Timeline: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState<
    "all" | "work" | "internship"
  >("all");
  const [visibleItems, setVisibleItems] = useState<number>(4);

  const filteredItems =
    activeFilter === "all"
      ? timelineItems.value
      : timelineItems.value.filter((item) => item.type === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleItems);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-gradient-to-r from-blue-600 to-cyan-600";
      case "internship":
        return "bg-gradient-to-r from-purple-600 to-pink-600";
      default:
        return "bg-gradient-to-r from-gray-600 to-gray-700";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return (
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
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "internship":
        return (
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="timeline"
      className={`py-24 relative ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Background decoration */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900"
            : "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-gray-50 to-gray-100"
        }`}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {t("timeline.title")}
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("timeline.subtitle")}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            {
              key: "all",
              label: t("timeline.filter.all"),
              count: timelineItems.value.length,
            },
            {
              key: "work",
              label: t("timeline.filter.work"),
              count: timelineItems.value.filter((i) => i.type === "work")
                .length,
            },
            {
              key: "internship",
              label: t("timeline.filter.internship"),
              count: timelineItems.value.filter((i) => i.type === "internship")
                .length,
            },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveFilter(tab.key as typeof activeFilter);
                setVisibleItems(4);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === tab.key
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                  : theme === "dark"
                    ? "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500`}
          ></div>

          <div className="space-y-8">
            {displayedItems.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                getTypeColor={getTypeColor}
                getTypeIcon={getTypeIcon}
                theme={theme}
              />
            ))}
          </div>

          {/* Show More Button */}
          {visibleItems < filteredItems.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleItems((prev) => prev + 4)}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2 mx-auto ${
                  theme === "dark"
                    ? "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white"
                    : "bg-white hover:bg-gray-100 border border-gray-200 hover:border-blue-500 text-gray-600 hover:text-gray-900 shadow-sm"
                }`}
              >
                {t("timeline.showMore")}
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Education Section */}
        <div className="mt-24">
          <h3
            className={`text-2xl font-bold text-center mb-12 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {t("timeline.education")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {educationItems.value.map((edu, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                  theme === "dark"
                    ? "bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-blue-500/50"
                    : "bg-white border-gray-200 hover:border-blue-500/50 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
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
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {edu.year}
                  </span>
                </div>
                <h4
                  className={`text-xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {edu.degree}
                </h4>
                <p
                  className={
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                >
                  {edu.institution}
                </p>
                {edu.description && (
                  <p
                    className={`text-sm mt-2 ${
                      theme === "dark" ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  getTypeColor: (type: string) => string;
  getTypeIcon: (type: string) => React.ReactNode;
  theme: "light" | "dark";
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  item,
  index,
  getTypeColor,
  getTypeIcon,
  theme,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center ${isEven ? "md:flex-row-reverse" : ""} gap-8 md:gap-0`}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
        <div
          className={`w-12 h-12 rounded-full ${getTypeColor(item.type)} flex items-center justify-center text-white shadow-lg`}
        >
          {getTypeIcon(item.type)}
        </div>
      </div>

      {/* Content card */}
      <div
        className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-500`}
      >
        <div
          className={`rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl ${
            theme === "dark"
              ? "bg-gray-800/80 backdrop-blur-sm border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/10"
              : "bg-white/80 backdrop-blur-sm border-gray-200 hover:border-blue-500/50 hover:shadow-blue-500/10 shadow-sm"
          }`}
        >
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white mb-4 ${getTypeColor(item.type)}`}
          >
            {item.date}
          </span>
          <h4
            className={`text-xl font-bold mb-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {item.title}
          </h4>
          <p
            className={`font-medium mb-2 ${
              theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
          >
            {item.company}
          </p>
          <p
            className={`text-sm mb-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {item.location}
          </p>
          <p
            className={`mb-4 leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-xs transition-colors ${
                  theme === "dark"
                    ? "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
