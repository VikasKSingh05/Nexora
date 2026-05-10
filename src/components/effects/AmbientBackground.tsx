import { GlowOrb } from "./GlowOrb";
import { GridBackground } from "./GridBackground";

export function AmbientBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <GridBackground />

      <GlowOrb className="top-[-120px] left-[10%] h-[320px] w-[320px]" />

      <GlowOrb className="bottom-[-120px] right-[10%] h-[280px] w-[280px]" />

      <div
        className="
              absolute
    inset-0
    backdrop-blur-[2px]
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]
          dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_35%)]
        "
      />
    </div>
  );
}