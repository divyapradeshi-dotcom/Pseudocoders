"use client";

import Link from "next/link";
import { AlertTriangle, User, Volume2 } from "lucide-react";

const contacts = [
  {
    name: "Rajesh Kumar",
    number: "9876543210",
    slug: "rajesh-kumar",
  },
  {
    name: "Priya Sharma",
    number: "9876543211",
    slug: "priya-sharma",
  },
  {
    name: "Unknown Number",
    number: "9876543299",
    slug: "unknown-number",
    warning: true,
  },
];

export function UpiPaymentSafetyPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef5ff_0%,#f8fbff_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              UPI Payment Safety
            </h1>
            <p className="mt-3 text-lg text-slate-500 sm:text-xl">
              Verify before you pay
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
            <p className="text-xl leading-9 text-amber-900 sm:text-2xl">
              <span className="font-semibold">Always verify:</span> Check the recipient&apos;s name and phone number before sending money. Scammers use similar names to trick you.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Select a Contact to Pay
          </h2>
          <div className="mt-6 space-y-6">
            {contacts.map((contact) => (
              <Link
                key={contact.number}
                href={`/upi-payment-safety/${contact.slug}`}
                className="block rounded-[2rem] bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.1)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <User className="h-10 w-10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-semibold text-slate-950">
                        {contact.name}
                      </h3>
                      {contact.warning ? (
                        <AlertTriangle className="h-6 w-6 text-amber-500" />
                      ) : null}
                    </div>
                    <p className="mt-2 text-2xl text-slate-500">
                      {contact.number}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
