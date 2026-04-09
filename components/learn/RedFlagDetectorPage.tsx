"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertTriangle, ArrowLeft, CheckCircle2, Info, Search, Volume2 } from "lucide-react";

const exampleMessages = [
  "Congratulations! You won Rs50,000 lottery. Click http://bit.ly/win50k to claim now.",
  "Hi, this is from SBI Bank. Your account will be blocked. Share your OTP to verify.",
  "Dear customer, your parcel is waiting. Pay Rs99 delivery charges here: tiny.cc/paynow",
  "URGENT: Your Aadhaar card is deactivated. Update KYC here immediately or face penalty.",
];

export function RedFlagDetectorPage() {
  const [message, setMessage] = useState("");
  const [analysis, setAnalysis] = useState<null | {
    risk: string;
    score: number;
    summary: string;
    findings: string[];
    advice: string;
  }>(null);

  const analyzeMessage = () => {
    const value = message.trim();
    if (!value) {
      setAnalysis(null);
      return;
    }

    const lowerValue = value.toLowerCase();
    const findings: string[] = [];
    let score = 10;

    if (
      lowerValue.includes("urgent") ||
      lowerValue.includes("immediately") ||
      lowerValue.includes("blocked") ||
      lowerValue.includes("suspended")
    ) {
      findings.push("The message uses urgency or fear to push you into acting quickly.");
      score += 25;
    }

    if (
      lowerValue.includes("otp") ||
      lowerValue.includes("pin") ||
      lowerValue.includes("cvv") ||
      lowerValue.includes("password")
    ) {
      findings.push("It asks for sensitive account details that genuine services should not request over chat or SMS.");
      score += 30;
    }

    if (
      lowerValue.includes("http://") ||
      lowerValue.includes("https://") ||
      lowerValue.includes("bit.ly") ||
      lowerValue.includes("tiny.cc") ||
      lowerValue.includes("link")
    ) {
      findings.push("It includes a link that could send you to a fake website.");
      score += 20;
    }

    if (
      lowerValue.includes("lottery") ||
      lowerValue.includes("won") ||
      lowerValue.includes("prize") ||
      lowerValue.includes("claim now")
    ) {
      findings.push("It promises money or rewards, which is a common scam tactic.");
      score += 20;
    }

    if (
      lowerValue.includes("kyc") ||
      lowerValue.includes("aadhaar") ||
      lowerValue.includes("bank") ||
      lowerValue.includes("account")
    ) {
      findings.push("It pretends to be from an official service to build false trust.");
      score += 15;
    }

    score = Math.min(score, 100);

    if (findings.length === 0) {
      setAnalysis({
        risk: "Low Risk",
        score: 18,
        summary: "This message does not show strong scam indicators from the current checks.",
        findings: [
          "No urgent pressure language was detected.",
          "No direct request for passwords, OTP, or payment details was found.",
        ],
        advice: "Even so, verify the sender before replying or clicking anything.",
      });
      return;
    }

    const highRisk = score >= 60;
    setAnalysis({
      risk: highRisk ? "High Risk" : "Medium Risk",
      score,
      summary: highRisk
        ? "This message has several scam signals and should not be trusted."
        : "This message has some suspicious signals and should be checked carefully.",
      findings,
      advice: highRisk
        ? "Do not click links, do not share information, and verify through the official website or phone number."
        : "Pause before responding and confirm the sender using an official source.",
    });
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff7f6_0%,#f8fbff_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
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
              Red Flag Detector
            </h1>
            <p className="mt-3 text-lg text-slate-500 sm:text-xl">
              Analyze messages for scams
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
              Paste a suspicious message below to check for scam indicators. The tool will highlight red flags and give you a risk score.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <h2 className="text-3xl font-semibold text-slate-950">
            Try Example Messages
          </h2>
          <div className="mt-8 space-y-4">
            {exampleMessages.map((exampleMessage) => (
              <button
                key={exampleMessage}
                type="button"
                onClick={() => setMessage(exampleMessage)}
                className={`w-full rounded-[1.5rem] border px-5 py-5 text-left text-xl font-medium text-slate-950 ${
                  message === exampleMessage
                    ? "border-blue-500"
                    : "border-slate-200"
                }`}
              >
                {exampleMessage}
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <h2 className="text-3xl font-semibold text-slate-950">
            Message to Analyze
          </h2>
          <textarea
            placeholder="Paste the suspicious message here..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-8 min-h-[16rem] w-full rounded-[1.5rem] border border-slate-200 px-5 py-5 text-2xl text-slate-950 outline-none transition-colors focus:border-blue-500 placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={analyzeMessage}
            className={`mt-8 inline-flex w-full items-center justify-center gap-4 rounded-[1.5rem] px-6 py-5 text-2xl font-semibold text-white ${
              message.trim()
                ? "bg-blue-600"
                : "bg-blue-300"
            }`}
          >
            <Search className="h-8 w-8" />
            Analyze Message
          </button>
        </section>

        {analysis ? (
          <section className="rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-slate-950">
                  Analysis Result
                </h2>
                <p className="mt-3 text-xl text-slate-500">
                  {analysis.summary}
                </p>
              </div>
              <div
                className={`rounded-[1.5rem] px-5 py-4 text-right ${
                  analysis.risk === "High Risk"
                    ? "bg-rose-100 text-rose-600"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                <p className="text-lg font-medium">{analysis.risk}</p>
                <p className="text-4xl font-semibold">{analysis.score}/100</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-rose-200 bg-rose-50/70 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-7 w-7 shrink-0 text-rose-500" />
                <div className="space-y-4">
                  {analysis.findings.map((finding) => (
                    <p key={finding} className="text-lg leading-8 text-slate-900">
                      {finding}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 text-emerald-500" />
                <p className="text-lg leading-8 text-slate-900">
                  {analysis.advice}
                </p>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
