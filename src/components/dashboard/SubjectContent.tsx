"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getSubject, getSemesterData } from "@/lib/data";
import { UnitList } from "@/components/dashboard";

export function SubjectContent() {
  const searchParams = useSearchParams();
  const subjectId = searchParams.get("id") || "";
  const semesterParam = searchParams.get("semester");
  const semesterNum = semesterParam ? parseInt(semesterParam) : null;

  const subject = semesterNum ? getSubject(semesterNum, subjectId) : null;
  const semesterData = semesterNum ? getSemesterData(semesterNum) : null;

  if (!subject || !semesterData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-4">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Subject Not Found
        </h1>
        <p className="text-[var(--text-secondary)] mb-6">
          The subject you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/dashboard"
          className="px-4 py-2 bg-[var(--accent)] text-[var(--background)] rounded-button hover:opacity-80 transition-opacity"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-6">
          <Link href="/dashboard" className="hover:text-[var(--text-primary)] transition-colors">
            Dashboard
          </Link>
          <span>/</span>
          <span>Semester {semesterNum}</span>
          <span>/</span>
          <span className="text-[var(--text-primary)]">{subject.name}</span>
        </nav>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                {subject.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="px-3 py-1 bg-[var(--background)] rounded-full text-[var(--text-secondary)]">
                  {subject.credits} Credits
                </span>
                <span className="px-3 py-1 bg-[var(--background)] rounded-full text-[var(--text-secondary)]">
                  {subject.units.length} Units
                </span>
                <span className="px-3 py-1 bg-[var(--background)] rounded-full text-[var(--text-secondary)]">
                  {subject.weightage}% Weightage
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
            Units
          </h2>
          <UnitList units={subject.units} subjectName={subject.name} />
        </div>
      </div>
    </div>
  );
}