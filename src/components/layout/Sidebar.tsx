"use client";

import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { branches, semesters } from "@/lib/data";
import { useRouter } from "next/navigation";

export function Sidebar() {
  const { selection, setSelection, sidebarOpen, setSidebarOpen } = useAppStore();
  const router = useRouter();

  const handleSemesterChange = (semester: string) => {
    setSelection({ semester, branch: "" });
  };

  const handleBranchChange = (branch: string) => {
    setSelection({ branch });
    if (branch) {
      router.push("/dashboard");
    }
    setSidebarOpen(false);
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed top-16 left-0 h-[calc(100vh-64px)] w-64 bg-[var(--card)] border-r border-[var(--border)] z-50 transition-transform duration-200 md:translate-x-0 md:z-30",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Select Semester
            </label>
            <select
              value={selection.semester}
              onChange={(e) => handleSemesterChange(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-input text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Choose semester</option>
              {semesters.map((sem) => (
                <option key={sem.number} value={sem.number}>
                  Semester {sem.number}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Select Branch
            </label>
            <select
              value={selection.branch}
              onChange={(e) => handleBranchChange(e.target.value)}
              className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-input text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Choose branch</option>
              {branches.map((branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>

          {selection.semester && selection.branch && (
            <div className="pt-4 border-t border-[var(--border)]">
              <div className="text-sm text-[var(--text-muted)]">
                Semester {selection.semester} - {branches.find(b => b.id === selection.branch)?.name}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}