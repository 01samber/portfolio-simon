"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LightboxImage } from "./ImageLightbox";

const PILLARS = [
  {
    title: "Originality",
    desc: "No cookie-cutter. Every idea is built from scratch.",
  },
  {
    title: "Cultural relevance",
    desc: "Rooted in context. Resonates with real people.",
  },
  {
    title: "Storytelling",
    desc: "Narrative that connects. Not just ads. Real experiences.",
  },
  {
    title: "Smart strategy",
    desc: "Data-informed. Creativity with intention.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-6 sm:px-8"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, transparent 40%, rgba(0,0,0,0.3) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 w-full min-h-[400px] sm:min-h-[500px] lg:min-h-0 lg:h-full"
          >
            <LightboxImage src="/images/simon-full.png" alt="Simon E. Azar - Marketing Strategist & Creative Marketer">
              <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-0">
                <Image
                  src="/images/simon-full.png"
                  alt="Simon E. Azar - Marketing Strategist & Creative Marketer"
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALWl6hqF1p1tNcX1zNK8as7vKxZiQCSSSck0pSlVJ//Z"
                  className="object-contain object-bottom scale-x-[-1]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </LightboxImage>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex flex-col justify-center px-0 lg:px-4"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9CAF88] mb-4">
              About Me
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              I don&apos;t do cliché. I build{" "}
              <span className="accent-text">ideas that connect.</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-[1.8] mb-6">
              Marketing graduate and creative marketer. I believe marketing should be
              <strong className="text-zinc-300"> meaningful and memorable</strong>, not forgettable noise.
            </p>
            <p className="text-zinc-500 text-base sm:text-lg leading-[1.8] mb-10">
              Every campaign I touch is rooted in smart strategy, cultural awareness, and
              storytelling that cuts through. I create work that <span className="text-zinc-400">resonates and performs.</span>
            </p>

            <div className="space-y-4">
              {PILLARS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 p-4 rounded-lg bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/60 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9CAF88] shrink-0 mt-2" />
                  <div>
                    <span className="text-zinc-300 font-semibold text-sm sm:text-base block">{item.title}</span>
                    <span className="text-zinc-500 text-sm">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
