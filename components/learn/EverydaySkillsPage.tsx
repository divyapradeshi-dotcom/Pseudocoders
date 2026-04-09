"use client";

import Link from "next/link";
import {
  Info,
  ShoppingBag,
  Ticket,
  Share2,
  Volume2,
} from "lucide-react";

const items = [
  {
    title: "Online Shopping Safety",
    description: "Shop on Amazon, Flipkart safely",
    icon: ShoppingBag,
    iconClassName: "bg-orange-500",
  },
  {
    title: "Book Tickets Online",
    description: "Use IRCTC, flight booking safely",
    icon: Ticket,
    iconClassName: "bg-blue-500",
  },
  {
    title: "Social Media Safety",
    description: "Use WhatsApp, Facebook safely",
    icon: Share2,
    iconClassName: "bg-emerald-500",
  },
];

export function EverydaySkillsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf0_0%,#f7fbff_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Everyday Skills
            </h1>
            <p className="mt-3 text-lg text-slate-500 sm:text-xl">
              Shop, travel, and connect safely online
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

        <section className="rounded-[2rem] border border-blue-200 bg-blue-100/80 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <div className="flex items-start gap-4">
            <Info className="mt-1 h-8 w-8 shrink-0 text-blue-700" />
            <p className="text-xl leading-9 text-blue-800 sm:text-2xl">
              This module is coming soon! Learn essential digital skills for shopping, travel, and social media.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.1)]"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl text-white ${item.iconClassName}`}
                >
                  <item.icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-lg text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-[1.5rem] bg-blue-100 px-6 py-5 text-xl font-semibold text-blue-700 transition-colors hover:bg-blue-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
