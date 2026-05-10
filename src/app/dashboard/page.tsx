"use client";

import { Suspense } from "react";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="w-8 h-8 border-4 border-[var(--border)] border-t-accent rounded-full animate-spin" />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <DashboardContent />
    </Suspense>
  );
}