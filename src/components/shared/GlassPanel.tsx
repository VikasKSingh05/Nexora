import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassPanel({
  children,
  className,
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "glass rounded-[28px] border border-white/10 dark:border-white/5",
        "shadow-[0_8px_20px_rgba(0,0,0,0.04)] background: rgba(255,255,255,0.55)",
        className
      )}
    >
      {children}
    </div>
  );
}