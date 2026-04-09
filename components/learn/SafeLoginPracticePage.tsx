"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, CircleX, Eye, EyeOff, Info, Volume2 } from "lucide-react";

const requirementChecks = [
  {
    label: "At least 8 characters",
    test: (value: string) => value.length >= 8,
  },
  {
    label: "One uppercase letter (A-Z)",
    test: (value: string) => /[A-Z]/.test(value),
  },
  {
    label: "One lowercase letter (a-z)",
    test: (value: string) => /[a-z]/.test(value),
  },
  {
    label: "One number (0-9)",
    test: (value: string) => /\d/.test(value),
  },
  {
    label: "One special character (!@#$%)",
    test: (value: string) => /[!@#$%]/.test(value),
  },
];

export function SafeLoginPracticePage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const requirementStates = useMemo(
    () =>
      requirementChecks.map((requirement) => ({
        ...requirement,
        passed: requirement.test(password),
      })),
    [password],
  );

  const passedCount = requirementStates.filter((requirement) => requirement.passed).length;
  const strengthPercentage = Math.round(
    (passedCount / requirementChecks.length) * 100,
  );
  const allRequirementsMet = passedCount === requirementChecks.length;

  const progressColorClass =
    strengthPercentage >= 100
      ? "bg-emerald-500"
      : strengthPercentage >= 40
        ? "bg-amber-500"
        : strengthPercentage > 0
          ? "bg-orange-500"
          : "bg-slate-200";

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef5ff_0%,#f8fbff_100%)] px-4 py-8 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <section className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Safe Login Practice
            </h1>
            <p className="mt-3 text-lg text-slate-500 sm:text-xl">
              Create a strong password
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
              A strong password protects your bank account from hackers. Follow the rules below to create a safe password.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
          <h2 className="text-3xl font-semibold text-slate-950">
            Create Your Password
          </h2>

          <div className="mt-8 flex items-center rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 py-5 focus-within:border-blue-500">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter a strong password"
              className="w-full bg-transparent text-2xl text-slate-950 outline-none placeholder:text-slate-400"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((current) => !current)}
              className="text-slate-500 transition-colors hover:text-slate-700"
            >
              {showPassword ? (
                <EyeOff className="h-8 w-8" />
              ) : (
                <Eye className="h-8 w-8" />
              )}
            </button>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-slate-950">
              Password Strength
            </h3>
            <span className="text-2xl font-semibold text-slate-950">
              {strengthPercentage}%
            </span>
          </div>

          <div className="mt-4 h-4 rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full transition-all duration-300 ${progressColorClass}`}
              style={{ width: `${strengthPercentage}%` }}
            />
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-semibold text-slate-950">
              Requirements:
            </h3>
            <div className="mt-8 space-y-6">
              {requirementStates.map((requirement) => (
                <div key={requirement.label} className="flex items-center gap-4">
                  {requirement.passed ? (
                    <CheckCircle2 className="h-8 w-8 shrink-0 text-emerald-500" />
                  ) : (
                    <CircleX className="h-8 w-8 shrink-0 text-slate-500" />
                  )}
                  <p
                    className={`text-2xl ${
                      requirement.passed ? "text-emerald-500" : "text-slate-500"
                    }`}
                  >
                    {requirement.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Link
          href={allRequirementsMet ? "/safe-login-complete" : "#"}
          aria-disabled={!allRequirementsMet}
          onClick={(event) => {
            if (!allRequirementsMet) {
              event.preventDefault();
            }
          }}
          className={`inline-flex w-full items-center justify-center rounded-[1.5rem] px-6 py-5 text-2xl font-semibold text-white transition-colors ${
            allRequirementsMet
              ? "bg-emerald-500 hover:bg-emerald-600"
              : "bg-blue-300"
          }`}
        >
          {allRequirementsMet ? "Complete Simulation" : "Meet All Requirements"}
        </Link>
      </div>
    </main>
  );
}
