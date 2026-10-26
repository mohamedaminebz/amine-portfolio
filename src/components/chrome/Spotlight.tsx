import { useEffect } from "react";

/** A very subtle lime glow that follows the pointer across the page. */
export const Spotlight = () => {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--pointer-x",
          `${event.clientX}px`,
        );
        document.documentElement.style.setProperty(
          "--pointer-y",
          `${event.clientY}px`,
        );
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
};
