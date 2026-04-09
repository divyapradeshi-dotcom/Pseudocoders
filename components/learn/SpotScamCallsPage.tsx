"use client";

import { Phone, Volume2, XCircle } from "lucide-react";

export function SpotScamCallsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff7f7_0%,#f8fbff_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Spot Scam Calls
            </h1>
            <p className="mt-3 text-lg text-slate-500 sm:text-xl">
              Identify fake bank calls
            </p>
          </div>
          <button
            type="button"
            aria-label="Play audio guide"
            className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-blue-700 shadow-sm transition-colors hover:bg-blue-200"
          >
            <Volume2 className="h-8 w-8" />
          </button>
        </section>

        <section className="rounded-[2rem] border border-rose-200 bg-rose-50/90 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-4">
            <XCircle className="mt-1 h-8 w-8 shrink-0 text-rose-400" />
            <div>
              <h2 className="text-2xl font-semibold text-rose-950 sm:text-3xl">
                SIMULATION ONLY
              </h2>
              <p className="mt-3 text-xl leading-9 text-rose-900/80 sm:text-2xl">
                This is a practice scenario. Real banks never ask for sensitive information over the phone.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-rose-100 text-rose-500">
              <Phone className="h-16 w-16" />
            </div>

            <h2 className="mt-8 text-4xl font-semibold text-slate-950">
              Incoming Call
            </h2>
            <p className="mt-5 text-5xl font-semibold text-rose-500">
              +91 98765 43210
            </p>
            <p className="mt-3 text-3xl text-slate-500">Unknown Number</p>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-rose-200 bg-rose-50/70 px-6 py-6">
            <p className="text-xl text-slate-500">Caller</p>
            <p className="mt-4 text-2xl leading-10 text-slate-950">
              Hello, I&apos;m calling from State Bank of India. Your account has been suspended due to suspicious activity.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
