import Link from "next/link";
import { getSubject, getBranch } from "@/lib/data";

interface PageProps {
  params: Promise<{ branch: string; semester: string; id: string }>;
}

export default async function SubjectPage({ params }: PageProps) {
  const { branch, semester, id } = await params;
  const branchData = getBranch(branch);
  const subject = getSubject(branch, parseInt(semester), id);

  if (!branchData || !subject) {
    return (
      <div className="min-h-[calc(100vh-56px)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
            Subject Not Found
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href={`/branch/${branch}/semester/${semester}`}
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            Back to {branchData.shortName} Sem {semester}
          </Link>
        </div>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-6 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
            {subject.name}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
            <span className="px-3 py-1 bg-[var(--background)] rounded-full">
              {subject.code}
            </span>
            <span className="px-3 py-1 bg-[var(--background)] rounded-full">
              {subject.credits} Credits
            </span>
          </div>
        </div>

        <div className="text-center py-20">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
            Units Coming Soon
          </h2>
          <p className="text-[var(--text-secondary)]">
            Study materials for this subject will be available soon.
          </p>
        </div>
      </div>
    </div>
  );
}