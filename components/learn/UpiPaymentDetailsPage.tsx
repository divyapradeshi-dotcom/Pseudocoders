"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertTriangle, User, Volume2 } from "lucide-react";

export function UpiPaymentDetailsPage({
  contact,
  contactSlug,
}: {
  contact: {
    name: string;
    number: string;
  };
  contactSlug: string;
}) {
  const [amount, setAmount] = useState("");
  const hasValidAmount = Number(amount) > 0;

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

        <section className="rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <h2 className="text-3xl font-semibold text-slate-950">
            Payment Details
          </h2>

          <div className="mt-8">
            <p className="text-2xl text-slate-500">Paying to:</p>
            <div className="mt-5 flex items-center gap-5 rounded-[1.5rem] bg-slate-50 px-6 py-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">
                  {contact.name}
                </h3>
                <p className="mt-2 text-2xl text-slate-500">{contact.number}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-3xl font-semibold text-slate-950">
              Enter Amount (Rs)
            </h3>
            <input
              type="number"
              min="0"
              step="1"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="0"
              className="mt-5 w-full rounded-[1.5rem] border border-slate-200 bg-white px-6 py-8 text-5xl text-slate-950 outline-none transition-colors focus:border-blue-500 placeholder:text-slate-400"
            />
          </div>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/upi-payment-safety"
            className="inline-flex items-center justify-center rounded-[1.5rem] bg-blue-50 px-6 py-5 text-2xl font-semibold text-blue-700 transition-colors hover:bg-blue-100"
          >
            Cancel
          </Link>
          <Link
            href={
              hasValidAmount
                ? `/upi-payment-safety/${contactSlug}/verify?amount=${amount}`
                : "#"
            }
            aria-disabled={!hasValidAmount}
            onClick={(event) => {
              if (!hasValidAmount) {
                event.preventDefault();
              }
            }}
            className={`inline-flex items-center justify-center rounded-[1.5rem] px-6 py-5 text-2xl font-semibold text-white transition-colors ${
              hasValidAmount
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-300"
            }`}
          >
            Continue
          </Link>
        </div>
      </div>
    </main>
  );
}
