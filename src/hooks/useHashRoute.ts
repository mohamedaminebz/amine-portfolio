import { useCallback, useEffect, useState } from "react";

export interface HashRoute {
  caseId: string | null;
  noteSlug: string | null;
}

const EMPTY: HashRoute = { caseId: null, noteSlug: null };

/**
 * `decodeURIComponent` throws on malformed input such as `%E0%A4%A`, which is
 * easy to produce by truncating a shared link. Decode defensively and fall
 * back to the raw text so a bad hash can never crash the app.
 */
const safeDecode = (value: string): string => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

/**
 * Parses `#case=<project-id>` and `#note=<slug>`. Section anchors (`#about`,
 * `#work`, …) intentionally return an empty route.
 */
export const parseHash = (hash: string): HashRoute => {
  const raw = hash.replace(/^#/, "");
  const separator = raw.indexOf("=");

  if (separator === -1) return EMPTY;

  const key = raw.slice(0, separator);
  const value = raw.slice(separator + 1).trim();

  if (!value) return EMPTY;

  const decoded = safeDecode(value);

  if (key === "case") return { caseId: decoded, noteSlug: null };
  if (key === "note") return { caseId: null, noteSlug: decoded };

  return EMPTY;
};

const readHash = (): HashRoute =>
  typeof window === "undefined" ? EMPTY : parseHash(window.location.hash);

/**
 * Small hash router for the two reading views: `#case=<project-id>` and
 * `#note=<slug>`. The rest of the site keeps using plain anchors, so the
 * browser still handles section navigation and the back button.
 */
export const useHashRoute = () => {
  const [route, setRoute] = useState<HashRoute>(readHash);

  useEffect(() => {
    const onHashChange = () => setRoute(readHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const openCase = useCallback((id: string) => {
    window.location.hash = `case=${encodeURIComponent(id)}`;
  }, []);

  const openNote = useCallback((slug: string) => {
    window.location.hash = `note=${encodeURIComponent(slug)}`;
  }, []);

  const close = useCallback((section: "work" | "notes") => {
    const { pathname, search } = window.location;
    window.history.replaceState(null, "", `${pathname}${search}#${section}`);
    setRoute(EMPTY);
  }, []);

  return { ...route, openCase, openNote, close };
};

/** Reads the `scroll-padding-top` the browser would apply to a fragment jump. */
const scrollPaddingTop = (): number =>
  Number.parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop,
  ) || 0;

const scrollToSection = (id: string): void => {
  const target = document.getElementById(id);
  if (!target) return;

  // Position by number instead of `scrollIntoView` so the jump stays instant
  // (`html { scroll-behavior: smooth }` would otherwise animate it) and keeps
  // the header offset that `scroll-padding-top` provides for real anchors.
  const top =
    target.getBoundingClientRect().top + window.scrollY - scrollPaddingTop();

  window.scrollTo({ top, behavior: "instant" });
};

/**
 * The browser resolves a section anchor before React has mounted the section,
 * so opening `/#about` directly leaves the visitor at the top of the page.
 * Re-run the scroll once the app exists, then again once late layout (webfonts,
 * images) has settled, because the sections may have moved by then.
 */
export const useInitialHashScroll = (): void => {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "").split("=")[0];
    if (!id || id === "case" || id === "note") return;

    scrollToSection(id);
    const frame = window.requestAnimationFrame(() => scrollToSection(id));
    const onLoad = () => scrollToSection(id);
    window.addEventListener("load", onLoad, { once: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("load", onLoad);
    };
  }, []);
};
