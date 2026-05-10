"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="text-[var(--text-primary)]">Your </span>
                <span className="gradient-text">College</span>
                <br />
                <span className="text-[var(--text-primary)]">Companion</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[var(--text-secondary)]">
                Access subjects, units, notes, and cheatsheets — all in one place. 
                Built for students, by students.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg">
                  Get Started
                </Button>
              </Link>
              <a href="#preview">
                <Button variant="outline" size="lg">
                  View Demo
                </Button>
              </a>
            </div>

            <div id="preview" className="mt-16 max-w-4xl mx-auto">
              <div className="relative bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                  <div className="w-3 h-3 rounded-full bg-[var(--error)]" />
                  <div className="w-3 h-3 rounded-full bg-[var(--warning)]" />
                  <div className="w-3 h-3 rounded-full bg-[var(--success)]" />
                </div>
                <div className="p-6 bg-[var(--background)]">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {["Data Structures", "Database Management", "Operating Systems"].map((subject, i) => (
                      <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded p-4 text-left">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[var(--text-primary)]">{subject}</span>
                          <span className="text-xs px-2 py-0.5 bg-[var(--background)] rounded text-[var(--text-muted)]">4 cr</span>
                        </div>
                        <div className="w-full h-2 bg-[var(--border)] rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: `${70 + i * 5}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--card)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-4">
              Features
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Everything you need to ace your exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Organization",
                desc: "Subjects organized by semester and branch for quick access",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
              },
              {
                title: "Quick Notes",
                desc: "Access notes and cheatsheets for every unit instantly",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Exam Ready",
                desc: "Know your subject weightage and plan your preparation",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--background)] text-accent mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[var(--text-muted)]">
            Built with Next.js for college students everywhere
          </p>
        </div>
      </footer>
    </div>
  );
}