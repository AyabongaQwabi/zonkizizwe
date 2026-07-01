type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${
            light ? "text-primary" : "text-primary"
          }`}
        >
          {eyebrow}
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
            light ? "text-cream/85" : "text-muted dark:text-cream/75"
          }`}
        >
          {description}
        </p>
      )}
      <div className={`pattern-divider mt-6 ${align === "center" ? "mx-auto w-32" : "w-32"}`} />
    </div>
  );
}
