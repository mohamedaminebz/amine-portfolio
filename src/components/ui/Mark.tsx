interface MarkProps {
  className?: string;
}

/**
 * Identity mark: four cells in a fixed order. It reads as a tiny index grid
 * rather than a conventional monogram.
 */
export const Mark = ({ className = "" }: MarkProps) => (
  <span
    className={`grid aspect-square grid-cols-2 gap-[3px] rounded-[10px] border border-white/10 bg-[#0a0e1c] p-[7px] ${className}`}
    aria-hidden="true"
  >
    <span className="rounded-[2px] bg-white" />
    <span className="rounded-[2px] bg-[#7c88ff]" />
    <span className="rounded-[2px] bg-white/35" />
    <span className="rounded-[2px] bg-white" />
  </span>
);
