import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-stone-100" />
        <div
          className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs font-medium text-slate-600">
                AI Interview Platform
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                Learn stacks. Practice interviews.
              </p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Get interview-ready with an AI coach built for modern tech roles
              </h1>
              <p className="mt-4 text-base text-slate-600 md:text-lg">
                Follow structured learning paths for your target stack, then
                take realistic mock interviews with adaptive questions,
                scorecards, and clear next steps.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/dashboard">Start a Mock Interview</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-xs text-slate-500">
                <span className="rounded-full border bg-white/80 px-3 py-1">
                  Role-specific questions
                </span>
                <span className="rounded-full border bg-white/80 px-3 py-1">
                  Tech stack roadmaps
                </span>
                <span className="rounded-full border bg-white/80 px-3 py-1">
                  Interview-ready feedback
                </span>
              </div>
            </div>

            <div className="rounded-2xl border bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-700">
                AI Interview Readiness
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Current Track
                  </p>
                  <p className="mt-1 text-base font-semibold">
                    Full-Stack JavaScript
                  </p>
                  <div className="mt-3 h-2 w-full rounded-full bg-white">
                    <div className="h-2 w-2/3 rounded-full bg-emerald-500" />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    12 lessons completed · 4 left
                  </p>
                </div>
                <div className="rounded-xl border bg-white p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Next Mock Interview
                  </p>
                  <p className="mt-1 text-base font-semibold">
                    Frontend Engineer · React + System Design
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    35 mins · Intermediate
                  </p>
                  <Button className="mt-4 w-full">Resume Session</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Structured learning paths",
              body:
                "Choose a tech stack and follow a guided roadmap with short, focused lessons.",
            },
            {
              title: "AI mock interviews",
              body:
                "Practice realistic interviews with adaptive follow-ups and scoring aligned to hiring rubrics.",
            },
            {
              title: "Actionable feedback",
              body:
                "Get clear strengths, gaps, and improvement plans after every session.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-3 text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border bg-slate-50 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Tech Stack Paths
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Learn what hiring teams expect
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Pick a role and follow a stack-specific plan that covers tools,
                systems, and interview patterns used in modern teams.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {[
                  "React + TypeScript",
                  "Node + PostgreSQL",
                  "Python + ML",
                  "Java + Spring",
                  "DevOps + AWS",
                  "Data Engineering",
                ].map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border bg-white px-3 py-1 text-slate-600"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-3">
              {[
                "Assess your current level",
                "Follow weekly skill sprints",
                "Validate with mock interview checkpoints",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl border bg-white p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                    {index + 1}
                  </span>
                  <p className="text-sm text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border bg-slate-900 p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Interview Performance
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                See exactly how you perform
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Every mock interview ends with a detailed scorecard and
                improvement plan so you know what to focus on next.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
              <p className="text-sm text-slate-200">Latest Score</p>
              <p className="mt-2 text-4xl font-semibold">87%</p>
              <div className="mt-4 space-y-2 text-sm text-slate-200">
                <div className="flex items-center justify-between">
                  <span>Problem Solving</span>
                  <span className="font-semibold">4.5 / 5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Communication</span>
                  <span className="font-semibold">4.1 / 5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>System Thinking</span>
                  <span className="font-semibold">4.3 / 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
