"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ProjectFlipBook } from "./ProjectFlipBook";
import { imagePath } from "@/lib/constants";

export type ProjectWithImages = {
  slug: string;
  name: string;
  tagline: string;
  type: "Campaign" | "Brand" | "Social";
  overview: string;
  challenge: string;
  strategy: string;
  execution: string;
  result: string;
  images?: string[];
};

const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDICAQEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALWl6hqF1p1tNcX1zNK8as7vKxZiQCSSSck0pSlVJ//Z";

const PROJECTS: ProjectWithImages[] = [
  {
    slug: "crepaway",
    name: "Crepaway Campaign",
    tagline: "Gen Z meets bold visuals",
    type: "Campaign",
    images: [
      imagePath("/images/crepaway-logo.png"),
      imagePath("/images/crepaway-ooh.png"),
      imagePath("/images/crepaway-cinema.png"),
      imagePath("/images/crepaway-campaign.png"),
      imagePath("/images/crepaway-commitment.png"),
    ],
    overview:
      "A Gen Z-focused campaign in Lebanon that combined bold visuals, witty copy, and culturally relevant activations. From CREPAWAY 2.0 branding to #CrepaWild OOH, cinema-themed creatives, and campaigns like 'Taste the World' and 'Married to flavor.'",
    challenge: "Stand out in a competitive F&B market and authentically connect with Gen Z.",
    strategy: "Bold visuals, witty copy, culturally relevant activations, and experiential moments.",
    execution: "Integrated campaign spanning social, OOH, and in-store experiences. Campaign mechanics included passport-stamp rewards, multi-country menu setup, and tiered incentives.",
    result: "First place competition winner.",
  },
  {
    slug: "bob-finance",
    name: "BOB Finance Campaign",
    tagline: "International transactions reimagined",
    type: "Campaign",
    images: [
      imagePath("/images/bob-lebanese-logic.png"),
      imagePath("/images/bob-lira.png"),
      imagePath("/images/bob-colors.png"),
      imagePath("/images/bob-opportunities.png"),
      imagePath("/images/bob-broke-transfers.png"),
      imagePath("/images/bob-traffic.png"),
      imagePath("/images/bob-flight.png"),
      imagePath("/images/bob-retail.png"),
    ],
    overview:
      "Campaign to increase international transactions through digital funnel optimization, BOB Passport, and mall activations. From 'Lebanese Logic 101' and LiraWaraLira activations to student-focused 'Broke? Same. Transfers free,' travel-themed 'Your money? Seconds,' and retail creatives.",
    challenge: "Drive adoption of international banking services and build trust.",
    strategy: "Digital funnel, BOB Passport program, Liret El Khair initiative, mall activations.",
    execution: "Multi-channel campaign with focused digital touchpoints and experiential activations. Diverse creatives targeting different segments: students, travelers, and everyday spenders.",
    result: "First place winner.",
  },
  {
    slug: "bobay",
    name: "Bobay",
    tagline: "Playful boba brand",
    type: "Brand",
    images: [
      imagePath("/images/bobay-tablet-logo.png"),
      imagePath("/images/bobay-drink-car.png"),
      imagePath("/images/bobay-instagram.png"),
      imagePath("/images/bobay-cup-product.png"),
    ],
    overview:
      "Simon's own playful boba tea brand. Logo creation, identity design, and a full marketing plan.",
    challenge: "Create a memorable brand in a crowded boba market.",
    strategy: "Funny, out-of-the-box messaging. Bold identity that stands out.",
    execution: "Logo creation, full identity design, marketing plan, tone of voice development.",
    result: "A complete brand ready for launch.",
  },
  {
    slug: "modern-mills",
    name: "Modern Mills",
    tagline: "Grain to kitchen storytelling",
    type: "Campaign",
    images: [
      imagePath("/images/modernmills-logo-phone.png"),
      imagePath("/images/modernmills-conference.png"),
      imagePath("/images/modernmills-phases-tablet.png"),
      imagePath("/images/modernmills-packaging-laptop.png"),
      imagePath("/images/modernmills-instagram-feed.png"),
      imagePath("/images/modernmills-instagram-profile.png"),
    ],
    overview:
      "Campaign built around transparency, grain-to-kitchen storytelling, and innovation in production.",
    challenge: "Differentiate through trust and quality in a commodity market.",
    strategy: "Transparency narrative, grain-to-kitchen journey, quality and innovation focus.",
    execution: "Integrated campaign highlighting production process and brand values.",
    result: "Stronger trust and brand differentiation.",
  },
  {
    slug: "premier-animal-feed",
    name: "Premier Animal Feed",
    tagline: "Trust with farmers",
    type: "Social",
    images: [
      imagePath("/images/premier-logo.png"),
      imagePath("/images/premier-instagram-profile.png"),
      imagePath("/images/premier-instagram-feed.png"),
    ],
    overview:
      "Social media grids, strategic captions, and agricultural audience targeting built around quality and nutrition.",
    challenge: "Reach and engage a specialized agricultural audience.",
    strategy: "Strategic captions, farmer trust messaging, quality and nutrition focus.",
    execution: "Social media grid strategy, content calendars, audience-specific messaging.",
    result: "Effective reach and engagement with target audience.",
  },
  {
    slug: "creme-cafe",
    name: "Creme Cafe",
    tagline: "Premium vibe-driven positioning",
    type: "Brand",
    images: [
      imagePath("/images/cremecafe-logo.png"),
      imagePath("/images/cremecafe-pitch-deck.png"),
      imagePath("/images/cremecafe-look-feel.png"),
      imagePath("/images/cremecafe-beautiful-problem.png"),
      imagePath("/images/cremecafe-instagram-profile.png"),
      imagePath("/images/cremecafe-instagram-feed.png"),
    ],
    overview:
      "Creative direction after rebrand. Visual identity refinement, Instagram and TikTok content, strategic pitch deck.",
    challenge: "Establish premium positioning post-rebrand in a competitive cafe market.",
    strategy: "Competitor analysis, market research, premium vibe-driven positioning.",
    execution:
      "Visual identity refinement, Instagram and TikTok content strategy, strategic pitch deck.",
    result: "Refined brand presence and clear market positioning.",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 px-6 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-16 md:mb-20"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#9CAF88] mb-3">
            Featured Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Campaigns & brands I&apos;ve built
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl">
            Award-winning campaigns. From strategy to execution.
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {PROJECTS.map((project, index) => (
            <ProjectFlipCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectFlipCard({
  project,
  index,
}: {
  project: ProjectWithImages;
  index: number;
}) {
  const images = project.images ?? [];
  const hasImages = images.length > 0;
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const caseStudyContent = (
    <div className="space-y-3 text-sm">
      <div>
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Challenge</span>
        <p className="text-zinc-400 mt-1 leading-normal">{project.challenge}</p>
      </div>
      <div>
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Strategy</span>
        <p className="text-zinc-400 mt-1 leading-normal">{project.strategy}</p>
      </div>
      <div>
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Execution</span>
        <p className="text-zinc-400 mt-1 leading-normal">{project.execution}</p>
      </div>
      <div>
        <span className="text-xs font-semibold text-[#9CAF88] uppercase tracking-wider">Result</span>
        <p className="text-[#9CAF88] font-medium mt-1">{project.result}</p>
      </div>
    </div>
  );

  const galleryModal = galleryOpen && hasImages && mounted && typeof document !== "undefined" && createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={() => setGalleryOpen(false)}
    >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative flex flex-col w-full max-w-2xl max-h-[90vh] rounded-xl overflow-hidden bg-[var(--surface-dark)] border border-zinc-700/60 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-zinc-800/60 shrink-0">
            <h3 className="font-display text-lg font-bold text-white truncate pr-2">
              {project.name}
            </h3>
            <button
              type="button"
              onClick={() => setGalleryOpen(false)}
              className="shrink-0 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9CAF88]/50"
              aria-label="Close gallery"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 min-h-0 overflow-hidden">
            <ProjectFlipBook images={images} projectName={project.name} />
          </div>
        </motion.div>
    </motion.div>,
    document.body
  );

  return (
    <>
      <motion.article
        id={`project-${project.slug}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="relative rounded-xl overflow-hidden border border-zinc-700/60 bg-[var(--surface-dark)]/80 transition-all duration-300 hover:border-[#9CAF88]/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
      >
        <div className="flex flex-col p-6 sm:p-8 lg:p-10 min-h-[520px] sm:min-h-[580px]">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-zinc-700/80 text-zinc-400 border border-zinc-600/50">
              {project.type}
            </span>
          </div>
          <p className="text-zinc-400 text-sm italic mb-2 font-medium">{project.tagline}</p>
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
            {project.name}
          </h3>
          <p className="text-zinc-400 text-sm lg:text-base leading-relaxed mb-6">
            {project.overview}
          </p>
          <div className="mb-6 pt-6 border-t border-zinc-800/60">
            {caseStudyContent}
          </div>
          {hasImages ? (
            <button
              type="button"
              onClick={() => setGalleryOpen(true)}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-[#9CAF88]/15 border border-[#9CAF88]/30 text-[#9CAF88] font-medium text-sm hover:bg-[#9CAF88]/25 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9CAF88]/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
              </svg>
              View gallery
            </button>
          ) : (
            <div className="flex items-center gap-2 pt-4 border-t border-zinc-800/60">
              <div className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center">
                <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16" />
                </svg>
              </div>
              <p className="text-zinc-500 text-sm">Case study in progress</p>
            </div>
          )}
        </div>
      </motion.article>
      {galleryModal}
    </>
  );
}
