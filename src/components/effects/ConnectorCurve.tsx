import { cn } from "@/lib/utils";

interface ConnectorCurveProps {
  className?: string;
  color?: string;
}

export function ConnectorCurve({
  className,
  color = "#7C6CFF",
}: ConnectorCurveProps) {
  return (
    <svg
      viewBox="0 0 220 120"
      fill="none"
      className={cn(
        "absolute overflow-visible",
        className
      )}
    >
      <path
        d="M10 10C90 20 120 90 210 110"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="8 8"
        strokeLinecap="round"
        opacity="0.5"
      />

      <circle
        cx="210"
        cy="110"
        r="6"
        fill="white"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
}