"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface FloatingCubeProps {
  className?: string;
}

export function FloatingCube({
  className,
}: FloatingCubeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [0, 8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(
        "absolute h-8 w-8 rounded-xl border border-violet-300/30 bg-gradient-to-br from-violet-500/20 to-indigo-500/10 backdrop-blur-xl opacity-60",
        className
      )}
    />
  );
}