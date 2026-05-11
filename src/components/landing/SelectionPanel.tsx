"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  GraduationCap,
  Building2,
  ArrowRight,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { branches, semesters } from "@/lib/data";

export function SelectionPanel() {
  const router = useRouter();

  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  const handleContinue = () => {
    if (!branch || !semester) return;

    router.push(
      `/branch/${branch}/semester/${semester}`
    );
  };

  return (
    <div className="mt-10 w-full max-w-xl">
      <div className="space-y-4">
        {/* Branch */}

        <div
          className="
            glass
            flex
            h-20
            items-center
            rounded-3xl
            border border-white/10
            px-5
            shadow-[0_20px_40px_rgba(0,0,0,0.06)]
          "
        >
          <div
            className="
              mr-4
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
            <Building2 className="h-5 w-5" />
          </div>

          <Select onValueChange={setBranch}>
            <SelectTrigger
              className="
                h-full
                border-0
                bg-transparent
                px-0
                text-lg
                shadow-none
                focus:ring-0
              "
            >
              <SelectValue placeholder="Select Branch" />
            </SelectTrigger>

            <SelectContent>
              {branches.map((branch) => (
                <SelectItem
                  key={branch.id}
                  value={branch.id}
                >
                  {branch.shortName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Semester */}

        <div
          className="
            glass
            flex
            h-20
            items-center
            rounded-3xl
            border border-white/10
            px-5
            shadow-[0_20px_40px_rgba(0,0,0,0.06)]
          "
        >
          <div
            className="
              mr-4
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
            <GraduationCap className="h-5 w-5" />
          </div>

          <Select onValueChange={setSemester}>
            <SelectTrigger
              className="
                h-full
                border-0
                bg-transparent
                px-0
                text-lg
                shadow-none
                focus:ring-0
              "
            >
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>

            <SelectContent>
              {semesters.map((sem) => (
                <SelectItem
                  key={sem.number}
                  value={String(sem.number)}
                >
                  Semester {sem.number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Button */}

        <button
          onClick={handleContinue}
          disabled={!branch || !semester}
          className="
            flex
            h-20
            w-full
            items-center
            justify-center
            gap-3
            rounded-3xl
            bg-[var(--primary)]
            text-lg
            font-semibold
            text-white
            transition-all duration-300
                hover:scale-[1.02]
                hover:bg-[var(--primary-hover)]
            disabled:cursor-not-allowed
          "
        >
          Get Started

          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}