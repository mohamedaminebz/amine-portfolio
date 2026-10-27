import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface HeroFieldProps {
  theme: "light" | "dark";
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
}

/**
 * A lightweight constellation canvas: nodes drift, link up when close, and
 * gently part around the pointer. One static frame for reduced motion.
 */
export const HeroField = ({ theme }: HeroFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // jsdom has no canvas implementation; skip the render loop under Vitest.
    if (import.meta.env.MODE === "test") return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const palette =
      theme === "dark"
        ? {
            node: "143, 154, 255",
            line: "238, 241, 250",
            active: "238, 241, 250",
          }
        : {
            node: "47, 59, 255",
            line: "10, 14, 28",
            active: "10, 14, 28",
          };

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    const createParticles = () => {
      const count = Math.min(78, Math.max(28, Math.floor(width / 20)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        radius: Math.random() * 1.5 + 0.7,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
      if (reduce) draw(0, false);
    };

    const draw = (time: number, moving = true) => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (moving) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -10) particle.x = width + 10;
          if (particle.x > width + 10) particle.x = -10;
          if (particle.y < -10) particle.y = height + 10;
          if (particle.y > height + 10) particle.y = -10;

          if (pointer.active) {
            const dx = particle.x - pointer.x;
            const dy = particle.y - pointer.y;
            const distance = Math.hypot(dx, dy);
            if (distance < 170 && distance > 0.01) {
              const force = (170 - distance) / 170;
              particle.x += (dx / distance) * force * 0.7;
              particle.y += (dy / distance) * force * 0.7;
            }
          }
        }
      });

      // Connections first so nodes sit on top.
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > 122) continue;

          const nearPointer =
            pointer.active &&
            Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y) <
              185;

          context.beginPath();
          context.strokeStyle = nearPointer
            ? `rgba(${palette.active}, ${0.16 * (1 - distance / 122)})`
            : `rgba(${palette.line}, ${0.07 * (1 - distance / 122)})`;
          context.lineWidth = 0.7;
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }

      particles.forEach((particle) => {
        const pulse = moving ? 0.55 + Math.sin(time * 0.001 + particle.phase) * 0.25 : 0.66;
        context.beginPath();
        context.fillStyle = `rgba(${palette.node}, ${pulse})`;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });
    };

    const animate = (time: number) => {
      draw(time, true);
      frame = requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    if (!reduce) {
      frame = requestAnimationFrame(animate);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerout", onPointerLeave);
    }

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(resize);
      observer.observe(canvas);
    } else {
      window.addEventListener("resize", resize);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerLeave);
    };
  }, [reduce, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
};
