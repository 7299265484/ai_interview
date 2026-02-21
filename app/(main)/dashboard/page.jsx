// import React from "react";
// import FeatureAssistants from "./_components/FeatureAssistants";
// import History from "./_components/History";
// import Feedback from "./_components/Feedback";
// function Dashboard()    {
//   return (
//     <div>
//         <FeatureAssistants />
//       <h2 className="font-medium text-gray-500">Welcome to the Dashboard</h2>
//       <p>This is the main dashboard page.</p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
//         <History />
//         <Feedback />
//       </div>
//     </div>
//   );
// }
// export default Dashboard;
import React from "react";
import FeatureAssistants from "./_components/FeatureAssistants";
import History from "./_components/History";
import Feedback from "./_components/Feedback";

function Dashboard() {
  return (
    <div className="space-y-16">

      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Ace Your Interviews with AI
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Practice real interview scenarios, get instant AI feedback, and improve
          your confidence with personalized coaching powered by artificial intelligence.
        </p>
      </section>

      {/* Feature Assistants */}
      <section>
        <FeatureAssistants />
      </section>

      {/* Sliding AI Capabilities */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          How Our AI Helps You
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {[
            {
              title: "Real Interview Simulation",
              desc: "Experience realistic interview questions tailored to your role and skill level."
            },
            {
              title: "AI-Powered Feedback",
              desc: "Get instant analysis on clarity, confidence, structure, and communication."
            },
            {
              title: "Expert Coaching Personas",
              desc: "Practice with different interviewer personalities and difficulty levels."
            },
            {
              title: "Performance Tracking",
              desc: "Track your progress across sessions and identify improvement areas."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] bg-zinc-50 border border-gray-200 rounded-xl p-5
                         hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Insights Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            Your Interview Journey
          </h2>
          <p className="text-gray-600">
            Review your past sessions and understand how your performance
            evolves over time.
          </p>
          <History />
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">
            AI Feedback & Insights
          </h2>
          <p className="text-gray-600">
            Actionable feedback designed to help you correct mistakes
            and strengthen your answers.
          </p>
          <Feedback />
        </div>
      </section>

    </div>
  );
}

export default Dashboard;
// +import React from "react";
// +import Link from "next/link";
// +import { Button } from "@/components/ui/button";
// +import FeatureAssistants from "./_components/FeatureAssistants";
// +import History from "./_components/History";
// +import Feedback from "./_components/Feedback";
// +
// +function Dashboard() {
// +  return (
// +    <div className="min-h-screen bg-white">
// +      {/* Hero */}
// +      <section className="relative overflow-hidden border-b">
// +        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-stone-100" />
// +        <div
// +          className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl"
// +          aria-hidden="true"
// +        />
// +        <div
// +          className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
// +          aria-hidden="true"
// +        />
// +
// +        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
// +          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
// +            <div className="max-w-2xl">
// +              <p className="mb-3 inline-flex items-center gap-2 rounded-full border bg-white/80 px-3 py-1 text-xs font-medium text-slate-600">
// +                AI Interview Platform
// +                <span className="h-1 w-1 rounded-full bg-slate-400" />
// +                Learn stacks. Practice interviews.
// +              </p>
// +              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
// +                Train for real interviews with an AI coach that adapts to you
// +              </h1>
// +              <p className="mt-4 text-base text-slate-600 md:text-lg">
// +                Master modern tech stacks through guided learning paths, then
// +                prove your skills with live, role-specific mock interviews.
// +                Get structured feedback, scorecards, and next steps after every
// +                session.
// +              </p>
// +              <div className="mt-6 flex flex-wrap gap-3">
// +                <Button asChild>
// +                  <Link href="/dashboard">Start Learning</Link>
// +                </Button>
// +                <Button variant="outline" asChild>
// +                  <Link href="/dashboard">Take a Mock Interview</Link>
// +                </Button>
// +              </div>
// +              <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-500">
// +                <span className="rounded-full border bg-white/80 px-3 py-1">
// +                  Structured plans
// +                </span>
// +                <span className="rounded-full border bg-white/80 px-3 py-1">
// +                  Role-specific questions
// +                </span>
// +                <span className="rounded-full border bg-white/80 px-3 py-1">
// +                  Interview-ready feedback
// +                </span>
// +              </div>
// +            </div>
// +
// +            <div className="w-full max-w-md rounded-2xl border bg-white/80 p-6 shadow-sm">
// +              <p className="text-sm font-medium text-slate-700">
// +                Your AI Interview Readiness
// +              </p>
// +              <div className="mt-4 space-y-4">
// +                <div className="rounded-xl border bg-slate-50 p-4">
// +                  <p className="text-xs font-medium text-slate-500">
// +                    Skill Track
// +                  </p>
// +                  <p className="mt-1 text-base font-semibold text-slate-900">
// +                    Full-Stack JavaScript
// +                  </p>
// +                  <div className="mt-3 h-2 w-full rounded-full bg-white">
// +                    <div className="h-2 w-2/3 rounded-full bg-emerald-500" />
// +                  </div>
// +                  <p className="mt-2 text-xs text-slate-500">
// +                    12 lessons completed · 4 left
// +                  </p>
// +                </div>
// +                <div className="rounded-xl border bg-white p-4">
// +                  <p className="text-xs font-medium text-slate-500">
// +                    Next Mock Interview
// +                  </p>
// +                  <p className="mt-1 text-base font-semibold text-slate-900">
// +                    Frontend Engineer · React + System Design
// +                  </p>
// +                  <p className="mt-2 text-xs text-slate-500">
// +                    Estimated duration: 35 mins · Difficulty: Intermediate
// +                  </p>
// +                  <Button className="mt-4 w-full">Resume Session</Button>
// +                </div>
// +              </div>
// +            </div>
// +          </div>
// +        </div>
// +      </section>
// +
// +      {/* Platform highlights */}
// +      <section className="mx-auto max-w-6xl px-6 py-14">
// +        <div className="grid gap-6 md:grid-cols-3">
// +          {[
// +            {
// +              title: "Structured learning paths",
// +              body:
// +                "Choose a tech stack, follow a curated roadmap, and learn with short, focused lessons.",
// +            },
// +            {
// +              title: "AI mock interviews",
// +              body:
// +                "Practice realistic interviews with adaptive follow-ups and scoring aligned to hiring rubrics.",
// +            },
// +            {
// +              title: "Actionable feedback",
// +              body:
// +                "Get pinpoint feedback, improvement plans, and interview-ready summaries after each session.",
// +            },
// +          ].map((item) => (
// +            <div
// +              key={item.title}
// +              className="rounded-2xl border bg-white p-6 shadow-sm"
// +            >
// +              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
// +              <p className="mt-3 text-sm text-slate-600">{item.body}</p>
// +            </div>
// +          ))}
// +        </div>
// +      </section>
// +
// +      {/* Learning stacks */}
// +      <section className="mx-auto max-w-6xl px-6 pb-16">
// +        <div className="flex flex-col gap-8 rounded-2xl border bg-slate-50 p-8 md:flex-row md:items-center md:justify-between">
// +          <div className="max-w-xl">
// +            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
// +              Tech Stack Paths
// +            </p>
// +            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
// +              Learn the stacks that hiring teams actually use
// +            </h2>
// +            <p className="mt-3 text-sm text-slate-600">
// +              Pick a role, then follow a guided track that covers tooling,
// +              systems, and interview patterns used in modern teams.
// +            </p>
// +            <div className="mt-4 flex flex-wrap gap-2 text-xs">
// +              {[
// +                "React + TypeScript",
// +                "Node + PostgreSQL",
// +                "Python + ML Foundations",
// +                "Java + Spring Boot",
// +                "DevOps + AWS",
// +                "Data Engineering",
// +              ].map((stack) => (
// +                <span
// +                  key={stack}
// +                  className="rounded-full border bg-white px-3 py-1 text-slate-600"
// +                >
// +                  {stack}
// +                </span>
// +              ))}
// +            </div>
// +          </div>
// +          <div className="grid w-full max-w-md gap-3">
// +            {[
// +              "Assess your current level",
// +              "Follow weekly skill sprints",
// +              "Validate with project checkpoints",
// +            ].map((step, index) => (
// +              <div
// +                key={step}
// +                className="flex items-center gap-3 rounded-xl border bg-white p-4"
// +              >
// +                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
// +                  {index + 1}
// +                </span>
// +                <p className="text-sm text-slate-700">{step}</p>
// +              </div>
// +            ))}
// +          </div>
// +        </div>
// +      </section>
// +
// +      {/* Mock interview flow */}
// +      <section className="mx-auto max-w-6xl px-6 pb-16">
// +        <div className="grid gap-8 md:grid-cols-2">
// +          <div className="rounded-2xl border bg-white p-8 shadow-sm">
// +            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
// +              Mock Interview Engine
// +            </p>
// +            <h3 className="mt-2 text-2xl font-semibold text-slate-900">
// +              Run realistic interviews on demand
// +            </h3>
// +            <p className="mt-3 text-sm text-slate-600">
// +              Choose a role, difficulty, and stack. The AI interviewer adapts
// +              questions in real time and evaluates communication, correctness,
// +              and depth.
// +            </p>
// +            <div className="mt-6 grid gap-3">
// +              {[
// +                "Behavioral + technical rounds",
// +                "Live coding prompts",
// +                "System design prompts",
// +                "Hiring-manager style feedback",
// +              ].map((item) => (
// +                <div
// +                  key={item}
// +                  className="rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-700"
// +                >
// +                  {item}
// +                </div>
// +              ))}
// +            </div>
// +          </div>
// +          <div className="rounded-2xl border bg-slate-900 p-8 text-white shadow-sm">
// +            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
// +              Performance Snapshot
// +            </p>
// +            <div className="mt-6 space-y-6">
// +              <div>
// +                <p className="text-sm text-slate-200">Interview Score</p>
// +                <p className="mt-2 text-4xl font-semibold">87%</p>
// +                <p className="mt-1 text-xs text-slate-300">
// +                  Up 12% from last session
// +                </p>
// +              </div>
// +              <div className="grid gap-3 text-sm text-slate-200">
// +                <div className="flex items-center justify-between">
// +                  <span>Problem Solving</span>
// +                  <span className="font-semibold">4.5 / 5</span>
// +                </div>
// +                <div className="flex items-center justify-between">
// +                  <span>Communication</span>
// +                  <span className="font-semibold">4.1 / 5</span>
// +                </div>
// +                <div className="flex items-center justify-between">
// +                  <span>System Thinking</span>
// +                  <span className="font-semibold">4.3 / 5</span>
// +                </div>
// +              </div>
// +              <Button variant="secondary" className="w-full">
// +                View Detailed Report
// +              </Button>
// +            </div>
// +          </div>
// +        </div>
// +      </section>
// +
// +      {/* Dashboard sections */}
// +      <section className="mx-auto max-w-6xl px-6 pb-20">
// +        <div className="flex items-center justify-between">
// +          <div>
// +            <h2 className="text-xl font-semibold text-slate-900">
// +              Your Coaching Workspace
// +            </h2>
// +            <p className="mt-1 text-sm text-slate-600">
// +              Continue where you left off and track your interview readiness.
// +            </p>
// +          </div>
// +          <Button variant="outline">Create New Session</Button>
// +        </div>
// +
// +        <div className="mt-8">
// +          <FeatureAssistants />
// +        </div>
// +
// +        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-2">
// +          <History />
// +          <Feedback />
// +        </div>
// +      </section>
// +    </div>
// +  );
// +}
// +
// +export default Dashboard;
