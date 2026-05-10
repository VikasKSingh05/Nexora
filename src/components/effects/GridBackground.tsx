export function GridBackground() {
  return (
    <div
      aria-hidden
      className="
        absolute inset-0
        [background-size:40px_40px]
        [background-image:
          linear-gradient(to_right,var(--grid)_1px,transparent_1px),
          linear-gradient(to_bottom,var(--grid)_1px,transparent_1px)
        ]
        opacity-40
        mask-[radial-gradient(ellipse_at_center,black_50%,transparent_90%)]
      "
    />
  );
}