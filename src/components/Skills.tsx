"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Strategy",
    icon: "◇",
    skills: ["Strategic Mindset", "Brand Strategy", "Market Research", "Cultural Awareness"],
  },
  {
    category: "Creative",
    icon: "◆",
    skills: ["Creative Thinking", "Storytelling", "Visual Direction", "Attention to Detail"],
  },
  {
    category: "Execution",
    icon: "▸",
    skills: ["Campaign Building", "Team Collaboration", "Communication", "Problem-Solving", "Presentation Skills", "Time Management", "Adaptability"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-6 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-16 md:mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9CAF88] mb-3">
            What I bring
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Strategy. Creative. Execution.
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl text-base sm:text-lg">
            End-to-end marketing capability, from insight to campaign delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="rounded-xl border border-zinc-800/80 bg-[var(--surface-dark)]/80 p-6 lg:p-8 hover:border-zinc-700/80 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#9CAF88] text-lg font-bold">{group.icon}</span>
                <h3 className="font-display text-lg font-bold text-white">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.skills.map((skill, i) => (
                  <li
                    key={skill}
                    className="text-zinc-400 text-sm sm:text-base flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
