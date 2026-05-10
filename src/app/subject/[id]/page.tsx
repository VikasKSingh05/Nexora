import { Suspense } from "react";
import { SubjectContent } from "@/components/dashboard/SubjectContent";

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="w-8 h-8 border-4 border-[var(--border)] border-t-accent rounded-full animate-spin" />
    </div>
  );
}

export default function SubjectPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SubjectContent />
    </Suspense>
  );
}