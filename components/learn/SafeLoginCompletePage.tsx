"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function SafeLoginCompletePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f3fff8_0%,#f8fffb_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center">
        <div className="text-emerald-500">
          <CheckCircle2 className="h-36 w-36" strokeWidth={1.5} />
        </div>

        <section className="space-y-5">
          <h1 className="text-5xl font-semibold tracking-tight text-emerald-500 sm:text-6xl">
            Great Job!
          </h1>
          <p className="max-w-4xl text-2xl leading-10 text-slate-900">
            You&apos;ve learned how to create a strong password. Remember these rules for all your online accounts.
          </p>
        </section>

        <section className="w-full rounded-[2rem] bg-white px-8 py-12 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <p className="text-6xl font-semibold text-blue-600 sm:text-7xl">+10 XP</p>
          <p className="mt-4 text-2xl text-slate-500">Earned</p>
        </section>

        <Link
          href="/learn"
          className="inline-flex w-full items-center justify-center rounded-[1.5rem] bg-emerald-500 px-6 py-5 text-2xl font-semibold text-white transition-colors hover:bg-emerald-600"
        >
          Continue Learning
        </Link>
      </div>
    </main>
  );
}
