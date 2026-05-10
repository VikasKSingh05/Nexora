"use client";

import { Unit } from "@/lib/data";
import { cn } from "@/lib/utils";

interface UnitListProps {
  units: Unit[];
  subjectName: string;
}

export function UnitList({ units, subjectName }: UnitListProps) {
  return (
    <div className="space-y-3">
      {units.map((unit) => (
        <div
          key={unit.id}
          className="bg-[var(--card)] border border-[var(--border)] rounded p-4 hover:shadow-hover transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                Unit {unit.number}
              </span>
              <h4 className="text-base font-medium text-[var(--text-primary)] mt-2">
                {unit.title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={unit.notesUrl}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-[var(--background)] hover:bg-[var(--border)] rounded-button transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Notes
            </a>
            <a
              href={unit.cheatsheetUrl}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-[var(--background)] hover:bg-[var(--border)] rounded-button transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Cheatsheet
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}