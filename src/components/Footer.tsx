"use client";

import { motion } from "framer-motion";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://instagram.com/tallcreative68",
    label: "Instagram",
    ariaLabel: "Simon on Instagram",
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    ariaLabel: "Simon on LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/60 py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="font-display text-xl font-bold text-white block">
              Simon E. Azar
            </span>
            <p className="text-zinc-500 text-sm mt-1">
              Marketing Strategist & Creative Marketer
            </p>
            <p className="text-zinc-600 text-xs mt-2 max-w-xs">
              Bold ideas. Cultural relevance. Marketing that connects.
            </p>
          </motion.div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-white transition-colors focus:outline-none focus:text-[#9CAF88] py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-10 border-t border-zinc-800/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex justify-center sm:justify-start gap-8">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-zinc-500 hover:text-[#9CAF88] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="text-center sm:text-right">
            <a
              href="#contact"
              className="text-sm font-medium text-[#9CAF88] hover:text-[#A8BD9A] transition-colors"
            >
              Let&apos;s build something memorable →
            </a>
            <p className="text-zinc-600 text-sm mt-2">
              © {new Date().getFullYear()} Simon E. Azar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
