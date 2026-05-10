"use client";

import Link from "next/link";
import { Computer } from "lucide-react";
import {Moon, Sun, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    external: true,
    icon: Computer,
  },
];

export function Navbar() {
  const { theme, toggleTheme } = useAppStore();

  return (
    <header className="fixed inset-x-0 top-5 z-50">
      <div className="container-wrapper">
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mx-auto
            flex
            w-full
            max-w-4xl
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
           bg-white/45
            px-2.5
            py-2.5
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            backdrop-blur-xl
            dark:bg-black/20
          "
        >
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-4 py-2",
                    "text-sm font-medium text-[var(--foreground)]/80",
                    "transition-all duration-300",
                    "hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",
                    "hover:text-[var(--foreground)]"
                  )}
                >
                  {Icon && (
                    <Icon className="h-4 w-4" />
                  )}

                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-white/10
                bg-black/[0.03]
                transition-all duration-300
                hover:scale-105
                hover:bg-black/[0.05]
                dark:bg-white/[0.05]
                dark:hover:bg-white/[0.08]
              "
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <a
              href="https://chat.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-xl
                bg-[var(--primary)]
                px-4 py-2.5
                text-sm font-medium
                text-white
                transition-all duration-300
                hover:scale-[1.02]
                hover:bg-[var(--primary-hover)]
              "
            >
              <MessageCircle className="h-4 w-4" />

              Join Community
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}