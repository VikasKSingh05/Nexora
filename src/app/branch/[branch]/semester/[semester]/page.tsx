import Link from "next/link";
import { getSubjects, getBranch } from "@/lib/data";
import { SubjectCard } from "@/components/dashboard";

interface PageProps {
  params: Promise<{ branch: string; semester: string }>;
}

export default async function BranchSemesterPage({ params }: PageProps) {
  const { branch, semester } = await params;
  const branchData = getBranch(branch);
  const subjects = getSubjects(branch, parseInt(semester));

  if (!branchData) {
    return (
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
            Branch Not Found
          </h1>
          <Link
            href="/"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--background)] rounded-button hover:opacity-80 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-56px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-2">
            {branchData.shortName}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-lg text-[var(--text-secondary)]">
              Sem {semester}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <span className="text-[var(--text-secondary)]">
            {subjects.length} subjects to explore
          </span>
        </div>

        {subjects.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Coming Soon
            </h2>
            <p className="text-[var(--text-secondary)]">
              Study materials for this semester will be available soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                branch={branch}
                semester={parseInt(semester)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}