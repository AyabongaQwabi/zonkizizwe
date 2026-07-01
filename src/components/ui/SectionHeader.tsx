import { BrushBanner } from "@/components/ui/BrushBanner";

type SectionHeaderProps = {
  eyebrow?: string;
  /** optional isiXhosa headline shown above the English title */
  xhosaTitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  brushColor?: "orange" | "green";
};

export function SectionHeader({
  eyebrow,
  xhosaTitle,
  title,
  description,
  align = "center",
  light = false,
  brushColor = "orange",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <BrushBanner
          color={brushColor}
          className="mb-5 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-cream"
        >
          {eyebrow}
        </BrushBanner>
      )}

      {xhosaTitle && (
        <p
          className={`mb-2 font-heading text-2xl uppercase leading-tight sm:text-3xl lg:text-4xl ${
            light ? "text-primary" : "text-primary"
          }`}
        >
          {xhosaTitle}
        </p>
      )}

      <h2
        className={`text-3xl font-normal uppercase leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-cream" : "text-earth dark:text-cream"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-cream/85" : "text-earth/80 dark:text-cream/75"
          }`}
        >
          {description}
        </p>
      )}

      <div
        className={`mt-6 h-3 max-w-[9rem] ${align === "center" ? "mx-auto" : ""}`}
      >
        <div className="pattern-triangles h-3 w-36" aria-hidden="true" />
      </div>
    </div>
  );
}
