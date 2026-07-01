"use client";

import { useId, type ReactNode } from "react";

type BrushColor = "orange" | "green" | "charcoal" | "cream";

const fillMap: Record<BrushColor, string> = {
  orange: "#e86a17",
  green: "#365c2b",
  charcoal: "#111111",
  cream: "#f7f3ea",
};

type BrushBannerProps = {
  children: ReactNode;
  color?: BrushColor;
  className?: string;
  as?: "span" | "div";
};

/**
 * A hand-painted, irregular brushstroke rectangle sitting behind text.
 * Uses an SVG turbulence filter to roughen the edges so the shape reads as
 * painted rather than a clean rounded badge — matching the organisation's
 * existing flyer motif.
 */
export function BrushBanner({
  children,
  color = "green",
  className = "",
  as = "span",
}: BrushBannerProps) {
  const rawId = useId().replace(/[:]/g, "");
  const filterId = `brush-${rawId}`;
  const Tag = as;

  return (
    <Tag className={`relative inline-block ${className}`}>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 40"
        aria-hidden="true"
      >
        <filter id={filterId} x="-15%" y="-40%" width="130%" height="180%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.12"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
        </filter>
        <rect
          x="4"
          y="5"
          width="92"
          height="30"
          rx="4"
          fill={fillMap[color]}
          filter={`url(#${filterId})`}
        />
      </svg>
      <span className="relative z-10 block">{children}</span>
    </Tag>
  );
}
