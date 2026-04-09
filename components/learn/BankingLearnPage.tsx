"use client";

import Link from "next/link";
import { CreditCard, Lock, Phone, Volume2 } from "lucide-react";

const progressItems = [
  "Safe Login Practice",
  "UPI Payment Safety",
  "Spot Scam Calls",
];

const simulationCards = [
  {
    title: "Safe Login Practice",
    description: "Learn to create strong passwords and login securely",
    icon: Lock,
    href: "/safe-login-practice",
  },
  {
    title: "UPI Payment Safety",
    description: "Make safe UPI transactions and verify details",
    icon: CreditCard,
    href: "/upi-payment-safety",
  },
  {
    title: "Spot Scam Calls",
    description: "Identify fake bank calls and protect your account",
    icon: Phone,
    href: "/spot-scam-calls",
  },
];

export function BankingLearnPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef5ff_0%,#f6f8fc_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Banking & Money
            </h1>
            <p className="mt-3 text-lg text-slate-500 sm:text-xl">
              Master safe online banking
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

        <section className="rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <h2 className="text-2xl font-semibold sm:text-3xl">Your Progress</h2>
          <div className="mt-8 space-y-6">
            {progressItems.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="h-9 w-9 rounded-full bg-slate-100" />
                <p className="text-xl text-slate-900 sm:text-2xl">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Practice Simulations
          </h2>
          <div className="mt-6 space-y-6">
            {simulationCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[2rem] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.1)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-blue-500 text-white">
                    <card.icon className="h-8 w-8" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-lg leading-8 text-slate-500">
                      {card.description}
                    </p>
                  </div>
                </div>
                {card.href ? (
                  <Link
                    href={card.href}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-[1.5rem] bg-blue-600 px-6 py-5 text-2xl font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-colors hover:bg-blue-700"
                  >
                    Start Simulation
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-[1.5rem] bg-blue-600 px-6 py-5 text-2xl font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-colors hover:bg-blue-700"
                  >
                    Start Simulation
                  </button>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
