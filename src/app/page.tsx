"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { branches, semesters } from "@/lib/data";

export default function HomePage() {
  const router = useRouter();
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  const handleGetStarted = () => {
    if (selectedBranch && selectedSemester) {
      router.push(`/branch/${selectedBranch}/semester/${selectedSemester}`);
    }
  };

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold text-[var(--text-primary)]">
            Nexora
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--text-secondary)]">
            20% Effort, 80% Results
          </p>
        </div>

        <div className="space-y-4">
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-base focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
          >
            <option value="">Select Branch</option>
            {branches.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.shortName} - {branch.name}
              </option>
            ))}
          </select>

          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="w-full px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-lg text-[var(--text-primary)] text-base focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
          >
            <option value="">Select Semester</option>
            {semesters.map((sem) => (
              <option key={sem.number} value={sem.number}>
                Semester {sem.number}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleGetStarted}
          disabled={!selectedBranch || !selectedSemester}
          className="w-full px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-lg font-medium text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}