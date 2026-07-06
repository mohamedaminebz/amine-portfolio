// src/hooks/usePortfolioData.ts
import { useState, useEffect } from "react";
import i18n from "../i18n";
import * as fr from "../data/portfolioData.fr";
import * as en from "../data/portfolioData.en";

type PortfolioDataType = typeof fr;

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioDataType>(fr);

  useEffect(() => {
    const updateData = () => {
      setData(i18n.language === "en" ? en : fr);
    };

    i18n.on("languageChanged", updateData);
    updateData();

    return () => i18n.off("languageChanged", updateData);
  }, []);

  return data;
};
