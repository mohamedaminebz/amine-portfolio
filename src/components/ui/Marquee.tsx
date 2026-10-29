import type { CSSProperties, ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  separator?: ReactNode;
}

/** Seamless CSS marquee. The second track is hidden from assistive tech. */
export const Marquee = ({
  items,
  duration = 42,
  reverse = false,
  className = "",
  separator = <span className="mx-6 text-brand-text md:mx-9">✦</span>,
}: MarqueeProps) => {
  const style = { "--marquee-duration": `${duration}s` } as CSSProperties;

  const track = (hidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {item}
          {separator}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee marquee-mask overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${reverse ? "marquee-track--reverse" : ""}`}
        style={style}
      >
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
};
