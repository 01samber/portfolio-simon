"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--background)]">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 20%, rgba(255,255,255,0.05) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-28 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9CAF88]/30 bg-[#9CAF88]/5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#9CAF88] animate-pulse" />
          <span className="text-xs font-medium tracking-wide text-[#9CAF88]">
            Award-winning campaigns • First place winner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-5"
        >
          Simon E. Azar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-zinc-400 max-w-2xl mx-auto mb-3"
        >
          Marketing Strategist & Creative Marketer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base sm:text-lg text-zinc-500 max-w-lg mx-auto mb-12"
        >
          Strategy + creativity that drives results.{" "}
          <span className="text-zinc-400">Bold ideas. Cultural relevance. Marketing that connects.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold bg-[#9CAF88] text-[var(--background)] hover:bg-[#A8BD9A] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9CAF88] focus:ring-offset-2 focus:ring-offset-[var(--background)] min-h-[52px] shadow-lg shadow-black/20"
          >
            See my work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-medium border-2 border-zinc-600 text-zinc-300 hover:border-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[var(--background)] min-h-[52px]"
          >
            Start a conversation
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-600">Scroll to explore</span>
          <div className="w-px h-8 bg-zinc-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
