import Link from "next/link";

const learningModules = [
  {
    id: "01",
    title: "Banking and Money",
    description: "Learn how to use bank accounts, UPI, ATMs, and digital payments safely.",
    href: "/learn",
  },
  {
    id: "02",
    title: "AI Scam Detector",
    description: "Understand common online scams and how to spot fake calls, links, and messages.",
    href: "/ai-scam-detector",
  },
  {
    id: "03",
    title: "Healthcare and Medical",
    description: "Find basic guidance for appointments, medicines, prescriptions, and health records.",
    href: "/healthcare-medicine",
  },
  {
    id: "04",
    title: "Government Service",
    description: "Access support for IDs, certificates, public schemes, and official portals.",
    href: "/government-service",
  },
  {
    id: "05",
    title: "Everyday Skills",
    description: "Build confidence with daily digital tasks like maps, forms, messaging, and searches.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f6f0df,_#f2f5f9_45%,_#e4edf4)] px-6 py-10 text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-700">
            Learning Modules
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Choose a topic from the home page and start learning step by step.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            These five modules are designed to make important daily services easier to understand.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {learningModules.map((module) => (
            module.href ? (
              <Link
                key={module.id}
                href={module.href}
                className="rounded-[1.75rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-white">
                  {module.id}
                </span>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">
                  {module.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {module.description}
                </p>
              </Link>
            ) : (
              <article
                key={module.id}
                className="rounded-[1.75rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-white">
                  {module.id}
                </span>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">
                  {module.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {module.description}
                </p>
              </article>
            )
          ))}
        </section>
      </div>
    </main>
  );
}
