"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EDUCATION = [
  {
    institution: "Bishmizzine High School",
    program: "Lebanese Baccalaureate – Socioeconomic",
    logo: "/images/bishmizzine-logo.png",
  },
  {
    institution: "Notre Dame University",
    program: "Bachelor's Degree in Advertising and Marketing",
    highlight: "Honor's List",
    logo: "/images/ndu-logo.png",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-6 sm:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9CAF88] mb-3">
            Education
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Foundations
          </h2>
          <p className="text-zinc-500 mt-4">
            Advertising & Marketing from NDU. Honor&apos;s List.
          </p>
        </motion.div>

        <div className="space-y-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 sm:p-8 rounded-xl border border-zinc-800/80 bg-[var(--surface-dark)]/80 hover:border-zinc-700/80 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                {edu.logo && (
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-sm overflow-hidden bg-zinc-800 flex items-center justify-center p-1.5">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      width={80}
                      height={80}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALWl6hqF1p1tNcX1zNK8as7vKxZiQCSSSck0pSlVJ//Z"
                      className="object-contain w-full h-full"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                    {edu.institution}
                  </h3>
                <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-[1.6]">
                  {edu.program}
                </p>
                {edu.highlight && (
                  <span className="inline-block mt-3 px-3 py-1 rounded-sm text-xs font-medium bg-[#9CAF88]/20 text-[#9CAF88] border border-[#9CAF88]/30">
                    {edu.highlight}
                  </span>
                )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
