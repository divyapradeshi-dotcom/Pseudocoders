"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";

export function UpiVerifyPaymentPage({
  contact,
  contactSlug,
  amount,
}: {
  contact: {
    name: string;
    number: string;
  };
  contactSlug: string;
  amount: string;
}) {
  const [verified, setVerified] = useState(false);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef5ff_0%,#f8fbff_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Verify Payment
          </h1>

          <div className="mt-10 rounded-[1.5rem] bg-slate-50 px-6 py-6">
            <p className="text-2xl text-slate-500">Recipient</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              {contact.name}
            </h2>
            <p className="mt-2 text-2xl text-slate-500">{contact.number}</p>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-blue-200 bg-blue-50 px-6 py-8">
            <p className="text-2xl text-slate-500">Amount</p>
            <p className="mt-4 text-6xl font-semibold text-blue-600">
              Rs{amount}
            </p>
          </div>

          <label className="mt-10 flex items-start gap-4">
            <span
              className={`mt-1 flex h-12 w-12 items-center justify-center rounded-md border ${
                verified ? "border-blue-500 bg-blue-500" : "border-blue-300 bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={verified}
                onChange={(event) => setVerified(event.target.checked)}
                className="sr-only"
              />
              {verified ? <Check className="h-8 w-8 text-white" strokeWidth={3} /> : null}
            </span>
            <span className="text-2xl font-medium leading-10 text-slate-950">
              I have verified the recipient&apos;s name and phone number are correct
            </span>
          </label>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href={`/upi-payment-safety/${contactSlug}`}
            className="inline-flex items-center justify-center rounded-[1.5rem] bg-blue-50 px-6 py-5 text-2xl font-semibold text-blue-700 transition-colors hover:bg-blue-100"
          >
            Go Back
          </Link>
          <Link
            href={
              verified
                ? `/upi-payment-safety/${contactSlug}/success?amount=${amount}`
                : "#"
            }
            aria-disabled={!verified}
            onClick={(event) => {
              if (!verified) {
                event.preventDefault();
              }
            }}
            className={`inline-flex items-center justify-center rounded-[1.5rem] px-6 py-5 text-2xl font-semibold text-white transition-colors ${
              verified ? "bg-emerald-500 hover:bg-emerald-600" : "bg-rose-200"
            }`}
          >
            Pay Now
          </Link>
        </div>
      </div>
    </main>
  );
}
