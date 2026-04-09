"use client";

import {
  AlertCircle,
  MessageCircle,
  Search,
  ShieldAlert,
  Video,
  Volume2,
} from "lucide-react";

const tools = [
  {
    title: "Red Flag Detector",
    description: "Analyze messages and links for scam indicators",
    icon: Search,
    iconClassName: "bg-red-500",
  },
  {
    title: "Deepfake Lab",
    description: "Learn to identify fake videos and voice calls",
    icon: Video,
    iconClassName: "bg-gradient-to-br from-fuchsia-500 to-violet-500",
  },
  {
    title: "Scam Chat Simulator",
    description: "Practice spotting scams in realistic conversations",
    icon: MessageCircle,
    iconClassName: "bg-orange-500",
  },
];

const redFlags = [
  "Urgent requests for money or information",
  "Suspicious links or shortened URLs",
  "Requests for OTP, PIN, or CVV",
  "Too-good-to-be-true offers or prizes",
];

export function AiScamDetectorPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff7f6_0%,#f8fbff_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              AI Scam Detector
            </h1>
            <p className="mt-3 text-lg text-slate-500 sm:text-xl">
              Spot fake messages and calls
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

        <section className="rounded-[2rem] border border-rose-200 bg-rose-100/70 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-3 text-rose-500">
              <AlertCircle className="h-8 w-8" />
              <ShieldAlert className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-rose-950 sm:text-3xl">
                Stay Alert!
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-rose-900/80">
                Scammers use AI to create fake messages, voices, and videos. Learn to spot the red flags here.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">Detection Tools</h2>
          <div className="mt-6 space-y-6">
            {tools.map((tool) => (
              <article
                key={tool.title}
                className="rounded-[2rem] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.1)]"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl text-white ${tool.iconClassName}`}
                  >
                    <tool.icon className="h-8 w-8" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {tool.title}
                    </h3>
                    <p className="mt-2 text-lg leading-8 text-slate-500">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-[1.5rem] bg-blue-600 px-6 py-5 text-2xl font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-colors hover:bg-blue-700"
                >
                  Open Tool
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Common Scam Red Flags
          </h2>
          <ul className="mt-6 space-y-5 text-lg text-slate-900 sm:text-xl">
            {redFlags.map((flag) => (
              <li key={flag} className="flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-red-400" />
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
