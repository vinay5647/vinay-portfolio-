"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Award } from "lucide-react";
import { RESEARCH_PUBLICATIONS } from "@/lib/data";
import { GlassCard } from "@/components/UI/GlassCard";
import { SectionHeading } from "@/components/UI/SectionHeading";

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACADEMIC & AI RESEARCH"
          title="Research Publications & Technical Papers"
          subtitle="Contributing novel ML optimizations and real-time natural language processing architectures to AI conferences."
        />

        <div className="grid grid-cols-1 gap-8">
          {RESEARCH_PUBLICATIONS.map((paper, idx) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard tiltFactor={4} className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-800">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-sky-400 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">
                      {paper.conference}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">
                      {paper.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800 shrink-0">
                    <Award className="w-5 h-5 text-amber-400" />
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-zinc-400">CITATIONS</span>
                      <span className="text-lg font-bold text-white font-mono">
                        {paper.citations}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-300 text-base leading-relaxed mb-6 font-normal">
                  {paper.summary}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800 text-sm font-mono text-zinc-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-sky-400" />
                      <span>{paper.date}</span>
                    </div>
                    <div>DOI: {paper.doi}</div>
                  </div>

                  <a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white text-zinc-950 font-sans text-xs font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2"
                    data-magnetic="true"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Paper</span>
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
