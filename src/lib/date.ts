/** Formats an ISO date for the note list without depending on the timezone. */
export const formatNoteDate = (iso: string, language?: string): string => {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const locale = language?.toLowerCase().startsWith("fr") ? "fr-FR" : "en-GB";

  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
};
