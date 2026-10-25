import type { TFunction } from "i18next";

const MONTHS = new Map<string, number>([
  // English
  ["jan", 0],
  ["january", 0],
  ["feb", 1],
  ["february", 1],
  ["mar", 2],
  ["march", 2],
  ["apr", 3],
  ["april", 3],
  ["may", 4],
  ["jun", 5],
  ["june", 5],
  ["jul", 6],
  ["july", 6],
  ["aug", 7],
  ["august", 7],
  ["sep", 8],
  ["sept", 8],
  ["september", 8],
  ["oct", 9],
  ["october", 9],
  ["nov", 10],
  ["november", 10],
  ["dec", 11],
  ["december", 11],
  // French
  ["janv", 0],
  ["janvier", 0],
  ["fev", 1],
  ["fevrier", 1],
  ["mars", 2],
  ["avr", 3],
  ["avril", 3],
  ["mai", 4],
  ["juin", 5],
  ["juil", 6],
  ["juillet", 6],
  ["aout", 7],
  ["septembre", 8],
  ["octobre", 9],
  ["novembre", 10],
  ["decembre", 11],
]);

const normalize = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\./g, "")
    .trim();

const DATE_PATTERN = /([A-Za-zÀ-ÿ]+)\.?\s+(\d{4})/g;
const ONGOING_PATTERN = /present|présent|aujourd'?hui|current|en cours/i;

export interface ParsedPeriod {
  start: Date;
  /** `null` when the period is ongoing ("... - Present"). */
  end: Date | null;
}

const toDate = (match: RegExpMatchArray): Date | null => {
  const month = MONTHS.get(normalize(match[1] ?? ""));
  const year = Number(match[2]);

  if (month === undefined || !Number.isFinite(year)) return null;

  return new Date(year, month, 1);
};

/** Parse strings such as "Août 2025 - Avr 2026" or "Feb 2024 - Present". */
export const parsePeriod = (period: string): ParsedPeriod | null => {
  const matches = Array.from(period.matchAll(DATE_PATTERN));
  const first = matches[0];
  if (!first) return null;

  const start = toDate(first);
  if (!start) return null;

  if (ONGOING_PATTERN.test(period)) return { start, end: null };

  const last =
    matches.length > 1 ? toDate(matches[matches.length - 1]!) : start;
  if (!last) return null;

  return { start, end: last };
};

export interface YearsAgo {
  text: string;
  years: number;
  months: number;
}

/**
 * Human-readable "x years ago" label for a finished project.
 * Returns `null` for malformed, ongoing or future periods.
 */
export const getYearsAgo = (period: string, t: TFunction): YearsAgo | null => {
  const parsed = parsePeriod(period);
  if (!parsed?.end) return null;

  const now = new Date();
  if (parsed.end > now) return null;

  let years = now.getFullYear() - parsed.end.getFullYear();
  let months = now.getMonth() - parsed.end.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years < 0) return null;

  let text: string;

  if (years === 0 && months === 0) {
    text = t("projects.yearsAgo.thisMonth");
  } else if (years === 0 && months === 1) {
    text = t("projects.yearsAgo.oneMonth");
  } else if (years === 0) {
    text = t("projects.yearsAgo.multipleMonths", { count: months });
  } else if (years === 1 && months === 0) {
    text = t("projects.yearsAgo.oneYear");
  } else if (years === 1) {
    text = t("projects.yearsAgo.oneYearMultipleMonths", { months });
  } else if (months === 0) {
    text = t("projects.yearsAgo.multipleYears", { count: years });
  } else {
    text = t("projects.yearsAgo.multipleYearsMultipleMonths", {
      years,
      months,
    });
  }

  return { text, years, months };
};
