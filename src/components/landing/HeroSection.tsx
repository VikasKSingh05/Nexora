"use client";

import { motion } from "framer-motion";

import {
  BookOpen,
  FileText,
  Trophy,
  Users,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/shared/Container";

import { AmbientBackground } from "@/components/effects/AmbientBackground";

import { FloatingCube } from "@/components/effects/FloatingCube";
import { DotPattern } from "@/components/effects/DotPattern";
import { ConnectorCurve } from "@/components/effects/ConnectorCurve";

import { SelectionPanel } from "./SelectionPanel";
import { FloatingPreviewCard } from "./FloatingPreviewCard";

export function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        pt-32
      "
    >
      <AmbientBackground />

      <div
  className="
    absolute
    left-[-10%]
    top-[20%]
    h-[420px]
    w-[420px]
    rounded-full
    bg-violet-500/10
    blur-[120px]
  "
/>

<div
  className="
    absolute
    bottom-[10%]
    right-[-10%]
    h-[360px]
    w-[360px]
    rounded-full
    bg-indigo-500/10
    blur-[120px]
  "
/>


      {/* Extra Glow Layer */}

     <div
  className="
    absolute inset-0
    pointer-events-none
    dark:bg-[radial-gradient(circle_at_top,rgba(124,108,255,0.28),transparent_55%)]
  "
/>

      {/* Decorative Shapes */}

      <FloatingCube className="left-[18%] top-[20%]" />

      <FloatingCube className="bottom-[18%] right-[20%]" />

      <FloatingCube className="right-[10%] top-[24%] h-6 w-6 rotate-12" />

      <FloatingCube className="left-[6%] bottom-[24%] h-7 w-7 -rotate-12" />

      {/* Dot Patterns */}

      <div className="absolute left-[4%] top-[22%]">
        <DotPattern />
      </div>

      <div className="absolute bottom-[10%] right-[6%]">
        <DotPattern />
      </div>

      <Container className="relative">
        {/* Connector Curves */}

        <ConnectorCurve className="left-[14%] top-[40%] w-[220px]" />

        <ConnectorCurve
          className="right-[14%] top-[40%] w-[220px] scale-x-[-1]"
          color="#34D399"
        />

        {/* Floating Cards */}

        <div className="hidden lg:block">
          <FloatingPreviewCard
            title="Data Structures"
            subtitle="Complete Notes"
            tag="PDF"
            icon={<FileText className="h-5 w-5" />}
            className="left-[2%] top-[22%] rotate-[-8deg]"
          />

          <FloatingPreviewCard
            title="Operating System"
            subtitle="Unit 2 Notes"
            tag="PDF"
            icon={<BookOpen className="h-5 w-5" />}
            className="right-[2%] top-[22%] rotate-[8deg]"
          />

          <FloatingPreviewCard
            title="Top Quality"
            subtitle="Curated by toppers"
            tag="Trusted"
            icon={<Trophy className="h-5 w-5" />}
            className="left-[2%] bottom-[6%] rotate-[-6deg]"
          />

          <FloatingPreviewCard
            title="For Students"
            subtitle="By students, for students."
            tag="Community"
            icon={<Users className="h-5 w-5" />}
            className="right-[2%] bottom-[6%] rotate-[6deg]"
          />
        </div>

        {/* Main Hero */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            mx-auto
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
          "
        >
          {/* Badge */}

          <div
            className="
              mb-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-violet-200/50
              bg-white/60
              px-5
              py-2.5
              text-sm
              font-medium
              text-violet-700
              shadow-sm
              backdrop-blur-xl
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-violet-300
            "
          >
            <Sparkles className="h-4 w-4" />

            Study Smarter
          </div>

          {/* Heading */}


          <div
  className="
    absolute
    top-[10%]
    h-[280px]
    w-[280px]
    rounded-full
    bg-violet-500/20
    blur-[100px]
  "
/>

          <h1
            className="
              max-w-4xl
              text-[clamp(2.8rem,6vw,5.2rem)]
              font-black
              leading-[0.92]
              tracking-[-0.04em]
              text-[#050816]
              dark:text-white
            "
          >
            Notes that
            <br />

            <span
              className="
                bg-gradient-to-r
                from-violet-600
                via-indigo-500
                to-violet-600
                bg-clip-text
                text-transparent
              "
            >
              simplify
            </span>{" "}

            learning
          </h1>

          {/* Subtitle */}

          {/* <p
            className="
              mt-8
              max-w-2xl
              text-[1.35rem]
              leading-[1.8]
              text-slate-500
              dark:text-slate-400
            "
          >
            Well-structured, easy to understand
            and carefully organized notes across
            all subjects.
          </p> */}

          {/* Selection */}

          <SelectionPanel />
        </motion.div>
      </Container>
    </section>
  );
}