"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Freelance Marketing & Branding Consultant",
    period: "Present",
    company: null,
    description:
      "Helping brands translate vision into memorable campaigns. Brand strategy, creative direction, and campaign building from concept to execution.",
    highlights: [
      "Brand strategy & creative direction",
      "Campaign concept & execution",
      "Client need → UX requirements translation",
      "Experience gap analysis & user flow shaping",
    ],
    result: "Award-winning campaigns for Crepaway, BOB Finance & more",
  },
  {
    role: "Account Executive",
    company: "You Experience MENA",
    period: "Previously",
    description:
      "Led client relationships and campaign delivery. Bridged creative strategy with execution, ensuring brands delivered meaningful experiences.",
    highlights: [
      "Campaign building & delivery",
      "Client relationship management",
      "Translating strategy into UX requirements",
      "Identifying experience gaps",
    ],
    result: null,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-6 sm:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-16 md:mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9CAF88] mb-3">
            Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Where I&apos;ve been
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl">
            From agency to freelance. Strategy and creativity at every step.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-10">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-0 md:pl-12"
            >
              {index < EXPERIENCE.length - 1 && (
                <div className="hidden md:block absolute left-[5px] top-16 bottom-0 w-px bg-zinc-800" />
              )}
              <div className="hidden md:block absolute left-0 top-2 w-3 h-3 rounded-full bg-[#9CAF88]/90 ring-4 ring-[#9CAF88]/10" />

              <div className="rounded-xl border border-zinc-800/80 bg-[var(--surface-dark)]/80 p-6 sm:p-8 hover:border-zinc-700/80 transition-colors overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#9CAF88]/20 text-[#9CAF88] border border-[#9CAF88]/30 shrink-0">
                    {exp.period}
                  </span>
                </div>
                {exp.company && (
                  <p className="text-zinc-500 text-sm mb-3 font-medium">{exp.company}</p>
                )}
                <p className="text-zinc-400 text-base leading-[1.7] mb-6">
                  {exp.description}
                </p>
                {exp.result && (
                  <div className="mb-6 p-4 rounded-lg bg-[#9CAF88]/10 border border-[#9CAF88]/20">
                    <p className="text-[#9CAF88] font-semibold text-sm">{exp.result}</p>
                  </div>
                )}
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-500 text-sm">
                      <span className="text-[#9CAF88]/80 mt-1.5">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
