type TriangleDividerProps = {
  /** flip the triangles to point downward */
  flip?: boolean;
  className?: string;
};

/**
 * The repeating orange / green / charcoal triangular border strip used as a
 * footer and section divider in the organisation's printed materials.
 */
export function TriangleDivider({
  flip = false,
  className = "",
}: TriangleDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pattern-triangles w-full ${flip ? "rotate-180" : ""} ${className}`}
    />
  );
}
