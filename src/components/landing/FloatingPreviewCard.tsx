"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface FloatingPreviewCardProps {
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ReactNode;
  className?: string;
}

export function FloatingPreviewCard({
  title,
  subtitle,
  tag,
  icon,
  className,
}: FloatingPreviewCardProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute",
        className
      )}
    >
      <div
        className="
          w-[240px]
          rounded-[28px]
          border border-white/10
          bg-white/55
          p-5
          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          backdrop-blur-2xl
          dark:bg-black/40
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-violet-500/10
              text-violet-600
            "
          >
            {icon}
          </div>

          <div className="flex-1">
            <h3 className="text-base font-semibold">
              {title}
            </h3>

            <p className="mt-1 text-sm text-[var(--muted)]">
              {subtitle}
            </p>

            <div
              className="
                mt-4
                inline-flex
                rounded-lg
                bg-black/[0.04]
                px-2 py-1
                text-xs
                font-medium
                dark:bg-white/[0.05]
              "
            >
              {tag}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}