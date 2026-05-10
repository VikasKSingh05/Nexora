export function DotPattern() {
  return (
    <div
      className="
        grid
        grid-cols-5
        gap-3
        opacity-15
      "
    >
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-violet-400/40
          "
        />
      ))}
    </div>
  );
}