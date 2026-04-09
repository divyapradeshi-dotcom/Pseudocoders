"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  MessageCircle,
  Volume2,
  XCircle,
} from "lucide-react";

const choices = [
  "That's great! What do you need?",
  "I didn't enter any contest. This seems fake.",
  "Sure, I'll provide my details",
];

export function ScamChatSimulatorPage() {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const isSafeChoice = selectedChoice === "I didn't enter any contest. This seems fake.";
  const hasAnswered = selectedChoice !== null;

  if (isSafeChoice) {
    return (
      <main className="min-h-screen bg-[linear-gradient(180deg,#f3fff8_0%,#f8fffb_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-10 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-emerald-500 sm:text-6xl">
            You Spotted the Scam!
          </h1>

          <section className="w-full rounded-[2rem] bg-white p-8 text-left shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
            <h2 className="text-3xl font-semibold text-slate-950">
              Key Red Flags:
            </h2>
            <div className="mt-8 space-y-5">
              {[
                "Unsolicited prize/lottery messages",
                "Requests for bank details or OTP",
                "Pressure to act immediately",
              ].map((flag) => (
                <div key={flag} className="flex items-center gap-4">
                  <XCircle className="h-8 w-8 shrink-0 text-rose-500" />
                  <p className="text-2xl text-slate-950">{flag}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full rounded-[2rem] bg-white px-8 py-12 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
            <p className="text-6xl font-semibold text-blue-600 sm:text-7xl">+10 XP</p>
            <p className="mt-4 text-2xl text-slate-500">Earned</p>
          </section>

          <Link
            href="/ai-scam-detector"
            className="inline-flex w-full items-center justify-center rounded-[1.5rem] bg-emerald-500 px-6 py-5 text-2xl font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            Continue Learning
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff9f2_0%,#f8fbff_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <Link
          href="/ai-scam-detector"
          className="inline-flex items-center gap-3 text-2xl font-medium text-blue-600"
        >
          <ArrowLeft className="h-7 w-7" />
          <span>Back to Scam AI</span>
        </Link>

        <section className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Scam Chat Simulator
            </h1>
            <p className="mt-3 text-lg text-slate-500 sm:text-xl">
              Prize Winner Scam
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

        <section className="rounded-[2rem] border border-amber-200 bg-amber-50/90 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-4">
            <AlertTriangle className="mt-1 h-8 w-8 shrink-0 text-amber-500" />
            <div>
              <h2 className="text-2xl font-semibold text-amber-950 sm:text-3xl">
                SIMULATION ONLY
              </h2>
              <p className="mt-3 text-xl leading-9 text-amber-900/80 sm:text-2xl">
                This is a practice scenario. Choose how you would respond to spot the scam.
              </p>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <div className="bg-blue-600 px-7 py-6 text-white">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                <MessageCircle className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Unknown Sender</h2>
                <p className="mt-1 text-xl text-blue-100">+91 98765 XXXXX</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 p-7">
            <div className="max-w-3xl rounded-[1.5rem] border border-slate-200 px-5 py-5 text-2xl leading-10 text-slate-950">
              Congratulations! You have won Rs10 lakh in our lucky draw!
            </div>
            <div className="max-w-3xl rounded-[1.5rem] border border-slate-200 px-5 py-5 text-2xl leading-10 text-slate-950">
              To claim your prize, we need to verify your identity.
            </div>
            {hasAnswered ? (
              <>
                <div className="ml-auto max-w-3xl rounded-[1.5rem] bg-blue-600 px-5 py-5 text-2xl leading-10 text-white">
                  {selectedChoice}
                </div>
                <div className="max-w-3xl rounded-[1.5rem] border border-slate-200 px-5 py-5 text-2xl leading-10 text-slate-950">
                  Please share your bank account number and OTP we just sent to verify.
                </div>
                <div className="ml-auto max-w-3xl rounded-[1.5rem] bg-blue-600 px-5 py-5 text-2xl leading-10 text-white">
                  {selectedChoice}
                </div>
              </>
            ) : null}
          </div>
        </section>

        <section>
          {hasAnswered ? (
            <section className="rounded-[2rem] border border-rose-200 bg-rose-50/90 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
              <div className="flex items-start gap-4">
                <XCircle className="mt-1 h-8 w-8 shrink-0 text-rose-400" />
                <p className="text-2xl leading-9 text-rose-900/80">
                  Be careful! This response could expose you to scammers.
                </p>
              </div>
            </section>
          ) : (
            <>
              <h2 className="text-3xl font-semibold text-slate-950">
                How do you respond?
              </h2>
              <div className="mt-6 space-y-5">
                {choices.map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    onClick={() => setSelectedChoice(choice)}
                    className="inline-flex w-full items-center justify-center rounded-[1.5rem] bg-blue-50 px-6 py-6 text-2xl font-semibold text-blue-700 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-colors hover:bg-blue-100"
                  >
                    {choice}
                  </button>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
