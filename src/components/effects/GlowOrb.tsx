import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
}

export function GlowOrb({
  className,
}: GlowOrbProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl opacity-40",
        "bg-gradient-to-br from-violet-500/30 to-indigo-500/20",
        className
      )}
    />
  );
}   