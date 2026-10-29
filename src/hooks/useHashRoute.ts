import { useCallback, useEffect, useState } from "react";

export interface HashRoute {
  caseId: string | null;
  noteSlug: string | null;
}

const parseHash = (): HashRoute => {
  if (typeof window === "undefined") {
    return { caseId: null, noteSlug: null };
  }

  const raw = window.location.hash.replace(/^#/, "");
  const [key, value] = raw.split("=");

  if (!value) return { caseId: null, noteSlug: null };

  const decoded = decodeURIComponent(value);

  if (key === "case") return { caseId: decoded, noteSlug: null };
  if (key === "note") return { caseId: null, noteSlug: decoded };

  return { caseId: null, noteSlug: null };
};

/**
 * Small hash router for the two reading views: `#case=<project-id>` and
 * `#note=<slug>`. The rest of the site keeps using plain anchors, so the
 * browser still handles section navigation and the back button.
 */
export const useHashRoute = () => {
  const [route, setRoute] = useState<HashRoute>(parseHash);

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
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
    setRoute({ caseId: null, noteSlug: null });
  }, []);

  return { ...route, openCase, openNote, close };
};
