// src/data/portfolioData.index.ts
import i18n from "../i18n";
import * as fr from "./portfolioData.fr";
import * as en from "./portfolioData.en";

// Type for the data structure
type PortfolioData = typeof fr;

// Get data based on current language
const getData = (): PortfolioData => {
  return i18n.language === "en" ? en : fr;
};

// Create reactive proxy that updates when language changes
let currentData = getData();

// Listen for language changes
i18n.on("languageChanged", () => {
  currentData = getData();
});

// Export all data as dynamic getters
export const personalInfo = {
  get name() {
    return currentData.personalInfo.name;
  },
  get title() {
    return currentData.personalInfo.title;
  },
  get email() {
    return currentData.personalInfo.email;
  },
  get phone() {
    return currentData.personalInfo.phone;
  },
  get location() {
    return currentData.personalInfo.location;
  },
  get linkedIn() {
    return currentData.personalInfo.linkedIn;
  },
  get github() {
    return currentData.personalInfo.github;
  },
  get description() {
    return currentData.personalInfo.description;
  },
};

export const timelineItems = {
  get value() {
    return currentData.timelineItems;
  },
};

export const educationItems = {
  get value() {
    return currentData.educationItems;
  },
};

export const skills = {
  get value() {
    return currentData.skills;
  },
};

export const certifications = {
  get value() {
    return currentData.certifications;
  },
};

export const interests = {
  get value() {
    return currentData.interests;
  },
};

export const languages = {
  get value() {
    return currentData.languages;
  },
};

export const socialLinks = {
  get value() {
    return currentData.socialLinks;
  },
};

export const projects = {
  get value() {
    return currentData.projects;
  },
};

// Re-export everything directly (will be updated when language changes)
export * from "./portfolioData.fr";
