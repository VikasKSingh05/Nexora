import Link from "next/link";
import { Subject } from "@/lib/data";

interface SubjectCardProps {
  subject: Subject;
  branch: string;
  semester: number;
}

export function SubjectCard({ subject, branch, semester }: SubjectCardProps) {
  return (
    <Link
      href={`/branch/${branch}/semester/${semester}/subject/${subject.id}`}
      className="block bg-[var(--card)] border border-[var(--border)] rounded-lg p-5 hover:shadow-hover transition-all duration-200 group"
    >
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1 group-hover:text-accent transition-colors">
        {subject.name}
      </h3>
      <p className="text-sm text-[var(--text-muted)] mb-3">
        {subject.code}
      </p>
      <span className="inline-block text-sm text-[var(--text-secondary)]">
        {subject.credits} Credits
      </span>
    </Link>
  );
}