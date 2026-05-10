"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { Sidebar } from "@/components/layout";
import { SubjectCard } from "@/components/dashboard";
import { getSemesterData, branches } from "@/lib/data";

export function DashboardContent() {
  const searchParams = useSearchParams();
  const { selection, setSelection } = useAppStore();

  useEffect(() => {
    const semester = searchParams.get("semester");
    const branch = searchParams.get("branch");
    if (semester) setSelection({ semester });
    if (branch) setSelection({ branch });
  }, [searchParams, setSelection]);

  const semesterData = selection.semester ? getSemesterData(Number(selection.semester)) : null;
  const branchName = branches.find((b) => b.id === selection.branch)?.name || "";

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      <Sidebar />

      <div className="flex-1 md:ml-64 p-6 md:p-8">
        <div className="max-w-5xl mx-auto">
          {!selection.semester || !selection.branch ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <div className="w-16 h-16 mb-6 rounded-full bg-[var(--background)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                Select Your Details
              </h2>
              <p className="text-[var(--text-secondary)] max-w-md">
                Choose your semester and branch from the sidebar to view available subjects and study materials.
              </p>
            </div>
          ) : !semesterData?.hasData ? (
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <div className="w-16 h-16 mb-6 rounded-full bg-[var(--background)] flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
                Coming Soon
              </h2>
              <p className="text-[var(--text-secondary)] max-w-md">
                We&apos;re working hard to bring you study materials for Semester {selection.semester}. 
                Check back soon!
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-2">
                  <span>Semester {selection.semester}</span>
                  <span>/</span>
                  <span>{branchName}</span>
                </div>
                <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
                  {semesterData.subjects.length} Subjects Available
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {semesterData.subjects.map((subject) => (
                  <SubjectCard
                    key={subject.id}
                    subject={subject}
                    semester={Number(selection.semester)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}