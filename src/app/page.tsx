"use client";

import { Navbar } from "@/components/navbar";
import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { ExperienceSection } from "@/components/experience";
import { EducationSection } from "@/components/education";
import { M } from "@/components/motion";
import { about, contact, experience, focus, profile, projects, skills } from "@/data/portfolio";
import { ArrowRight, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div id="top" className="noise min-h-screen">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(99,102,241,0.25),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(236,72,153,0.22),transparent_50%),radial-gradient(900px_circle_at_50%_90%,rgba(34,197,94,0.18),transparent_55%)] dark:bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(236,72,153,0.20),transparent_50%),radial-gradient(900px_circle_at_50%_90%,rgba(34,197,94,0.16),transparent_55%)]" />
        {/* Dark-mode readability veil (keeps gradients, improves glass contrast) */}
        <div className="absolute inset-0 hidden dark:block bg-black/35" />
        <div className="absolute -left-24 -top-24 h-72 w-72 animate-float rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -right-28 top-24 h-80 w-80 animate-float rounded-full bg-pink-500/20 blur-3xl [animation-delay:-2s]" />
        <div className="absolute left-1/3 bottom-10 h-72 w-72 animate-float rounded-full bg-emerald-500/14 blur-3xl [animation-delay:-4s]" />
      </div>

      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-4 pb-24 pt-28 sm:pt-32">
        {/* Hero */}
        <section className="mb-16">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <M.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-zinc-700 shadow-glass backdrop-blur-md dark:border-white/10 dark:text-zinc-300"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                Available for work
              </M.p>

              <M.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl"
              >
                {profile.name}
                <span className="text-zinc-600 dark:text-zinc-300"> — {profile.title}</span>
              </M.h1>

              <M.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-700 dark:text-zinc-300 sm:text-lg"
              >
                {profile.intro}
              </M.p>

              <M.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-50 shadow-glass transition hover:opacity-90 dark:bg-white dark:text-zinc-950"
                >
                  View projects <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-zinc-900 shadow-glass backdrop-blur-md transition hover:bg-white/15 dark:border-white/10 dark:text-zinc-50 dark:hover:bg-white/10"
                >
                  Contact <Mail className="h-4 w-4" />
                </a>
              </M.div>
            </div>

            <M.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <GlassCard className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
                      Location
                    </p>
                    <p className="mt-2 text-sm font-medium text-zinc-950 dark:text-zinc-50">
                      {profile.location}
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500/40 to-pink-500/30 shadow-glass" />
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm text-zinc-700 shadow-glass backdrop-blur-xl dark:border-white/[0.30] dark:bg-white/[0.15] dark:text-white dark:shadow-[0_18px_50px_rgba(0,0,0,0.65)]">
                    <p className="font-semibold text-zinc-950 dark:text-white">Experience</p>
                    <p className="mt-1 font-medium text-zinc-900 dark:text-white">
                      {profile.experience}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm text-zinc-700 shadow-glass backdrop-blur-xl dark:border-white/[0.30] dark:bg-white/[0.15] dark:text-white dark:shadow-[0_18px_50px_rgba(0,0,0,0.65)]">
                    <p className="font-semibold text-zinc-950 dark:text-white">Citizenship</p>
                    <p className="mt-1 font-medium text-zinc-900 dark:text-white">
                      {profile.citizenship}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 text-sm text-zinc-700 shadow-glass backdrop-blur-xl dark:border-white/[0.30] dark:bg-white/[0.15] dark:text-white dark:shadow-[0_18px_50px_rgba(0,0,0,0.65)]">
                    <p className="font-semibold text-zinc-950 dark:text-white">Focus</p>
                    <p className="mt-1 font-medium text-zinc-900 dark:text-white">
                      {focus.slice(0, 2).join(" • ")}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </M.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-28 py-12">
          <SectionHeading
            eyebrow="About"
            title={about.headline}
            description="A little context on how I work and what I care about."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="p-6">
              <M.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 text-zinc-700 dark:text-zinc-300"
              >
                {about.body.map((p) => (
                  <p key={p} className="leading-7">
                    {p}
                  </p>
                ))}
              </M.div>
            </GlassCard>

            <GlassCard className="p-6">
              <M.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
                  Highlights
                </p>
                <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="rounded-xl border border-white/15 bg-white/10 p-4 dark:border-white/10 dark:bg-white/5">
                    Component-driven UI with strong consistency
                  </li>
                  <li className="rounded-xl border border-white/15 bg-white/10 p-4 dark:border-white/10 dark:bg-white/5">
                    Motion that supports clarity (not distraction)
                  </li>
                  <li className="rounded-xl border border-white/15 bg-white/10 p-4 dark:border-white/10 dark:bg-white/5">
                    Performance & accessibility baked into the process
                  </li>
                </ul>
              </M.div>
            </GlassCard>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-28 py-12">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I reach for"
            description="A mix of product engineering, UI craft, and pragmatic delivery."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <M.div
                key={s.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
              >
                <GlassCard className="h-full p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-zinc-950 dark:text-zinc-50">
                        {s.name}
                      </p>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        {s.level}
                      </p>
                    </div>
                    {s.Icon ? (
                      <s.Icon className="mt-0.5 h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                    ) : (
                      <div className="h-5 w-5" />
                    )}
                  </div>
                </GlassCard>
              </M.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <ExperienceSection items={experience} />

        {/* Projects */}
        <section id="projects" className="scroll-mt-28 py-12">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="A few production platforms and systems I’ve worked on."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, idx) => (
              <M.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <GlassCard className="group h-full p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                        {p.description}
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500/35 via-pink-500/25 to-emerald-500/25 shadow-glass transition group-hover:opacity-90" />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href={p.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition hover:opacity-80 dark:text-zinc-50"
                    >
                      View details <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </GlassCard>
              </M.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <EducationSection
          items={[
            {
              degree: "Post-Graduate Diploma",
              program: "Mobile Application Design & Development",
              school: "Lambton College",
              location: "Toronto",
            },
            {
              degree: "Bachelor of Technology",
              program: "Computer Science Engineering",
            },
          ]}
        />

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 py-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something"
            description="Send a message and I’ll reply soon."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <GlassCard className="p-6">
              <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                {contact.headline} — {contact.preference}
              </p>
              <div className="mt-4 rounded-xl border border-white/15 bg-white/10 p-4 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <p className="font-medium text-zinc-950 dark:text-zinc-50">Location</p>
                <p className="mt-1">{profile.location}</p>
              </div>

              <div className="mt-4 rounded-xl border border-white/15 bg-white/10 p-4 text-sm text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <p className="font-medium text-zinc-950 dark:text-zinc-50">What I focus on</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {profile.socials.linkedin ? (
                  <a
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-50 shadow-glass transition hover:opacity-90 dark:bg-white dark:text-zinc-950"
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn <ArrowRight className="h-4 w-4" />
                  </a>
                ) : null}
                {profile.socials.github ? (
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-zinc-900 shadow-glass backdrop-blur-md transition hover:bg-white/15 dark:border-white/10 dark:text-zinc-50 dark:hover:bg-white/10"
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <ArrowRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>

              {!profile.email ? (
                <p className="mt-4 text-xs leading-5 text-zinc-600 dark:text-zinc-400">
                  Add your email/links in <code className="font-mono">src/data/portfolio.ts</code> to enable direct contact buttons.
                </p>
              ) : null}
            </GlassCard>

            <GlassCard className="p-6">
              <ContactForm emailTo={profile.email} />
            </GlassCard>
          </div>
        </section>

        <footer className="pt-12 text-center text-xs text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </footer>
      </main>
    </div>
  );
}
