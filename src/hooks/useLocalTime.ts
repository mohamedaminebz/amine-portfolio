import { useEffect, useState } from "react";

const format = (language: string, timeZone: string) => {
  try {
    return new Intl.DateTimeFormat(language.toLowerCase().startsWith("fr") ? "fr-FR" : "en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone,
      hour12: false,
    }).format(new Date());
  } catch {
    return "--:--";
  }
};

/** A live local clock, used as a human detail in the hero and footer. */
export const useLocalTime = (timeZone = "Africa/Tunis", language = "en") => {
  const [time, setTime] = useState(() => format(language, timeZone));

  useEffect(() => {
    setTime(format(language, timeZone));
    const interval = window.setInterval(
      () => setTime(format(language, timeZone)),
      30_000,
    );
    return () => window.clearInterval(interval);
  }, [language, timeZone]);

  return time;
};
