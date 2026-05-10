"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-button transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        {
          "bg-[var(--accent)] text-[var(--background)] hover:bg-[var(--accent-hover)]": variant === "primary",
          "bg-[var(--text-primary)] text-[var(--background)] hover:opacity-80": variant === "secondary",
          "border border-[var(--border)] bg-transparent hover:bg-[var(--background)] text-[var(--text-primary)]": variant === "outline",
        },
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}