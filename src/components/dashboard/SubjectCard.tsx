"use client";

import Link from "next/link";
import { Subject } from "@/lib/data";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  subject: Subject;
  semester: number;
}

export function SubjectCard({ subject, semester }: SubjectCardProps) {
  return (
    <Link href={`/subject/${subject.id}?semester=${semester}`}>
      <div className="bg-[var(--card)] border border-[var(--border)] rounded p-6 hover:shadow-hover transition-all duration-200 cursor-pointer group">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-accent transition-colors line-clamp-1">
            {subject.name}
          </h3>
          <span className="px-2 py-1 text-xs font-medium bg-[var(--background)] text-[var(--text-secondary)] rounded">
            {subject.credits} cr
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[var(--text-muted)]">Weightage</span>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-[var(--border)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-300"
                  style={{ width: `${subject.weightage}%` }}
                />
              </div>
              <span className="text-[var(--text-secondary)] font-medium">{subject.weightage}%</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-[var(--text-muted)]">Units</span>
            <span className="text-[var(--text-primary)] font-medium">{subject.units.length}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}