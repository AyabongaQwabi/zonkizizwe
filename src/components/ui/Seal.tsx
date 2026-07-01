import type { ReactNode } from "react";

type SealColor = "orange" | "green" | "cream";
type SealSize = "sm" | "md" | "lg";

const colorMap: Record<
  SealColor,
  { ring: string; text: string; dash: string }
> = {
  orange: {
    ring: "border-primary",
    text: "text-primary",
    dash: "border-primary/50",
  },
  green: {
    ring: "border-forest",
    text: "text-forest dark:text-forest",
    dash: "border-forest/50",
  },
  cream: {
    ring: "border-cream",
    text: "text-cream",
    dash: "border-cream/50",
  },
};

const sizeMap: Record<SealSize, string> = {
  sm: "h-24 w-24 text-[0.55rem]",
  md: "h-32 w-32 text-xs",
  lg: "h-40 w-40 text-sm",
};

type SealProps = {
  /** small text along the top */
  top?: string;
  /** the main stamped value in the centre */
  center: ReactNode;
  /** small text along the bottom */
  bottom?: string;
  color?: SealColor;
  size?: SealSize;
  className?: string;
};

/**
 * An official rubber-stamp / wax-seal style circular badge.
 * Reused for the NPO registration number and donation trust marks so the
 * credibility signals match the organisation's printed collateral rather than
 * using generic padlock / checkmark icons.
 */
export function Seal({
  top,
  center,
  bottom,
  color = "orange",
  size = "md",
  className = "",
}: SealProps) {
  const c = colorMap[color];

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-full border-[3px] ${c.ring} ${sizeMap[size]} ${className}`}
      role="img"
      aria-label={[top, typeof center === "string" ? center : "", bottom]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={`pointer-events-none absolute inset-[6px] rounded-full border border-dashed ${c.dash}`}
        aria-hidden="true"
      />
      <div className={`flex flex-col items-center px-3 text-center ${c.text}`}>
        {top && (
          <span className="font-semibold uppercase tracking-[0.18em] opacity-90">
            {top}
          </span>
        )}
        <span className="my-0.5 font-heading text-[1.6em] uppercase leading-none tracking-wide">
          {center}
        </span>
        {bottom && (
          <span className="font-semibold uppercase tracking-[0.18em] opacity-90">
            {bottom}
          </span>
        )}
      </div>
    </div>
  );
}
