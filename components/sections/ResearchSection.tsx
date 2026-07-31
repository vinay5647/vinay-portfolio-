"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, ExternalLink, Award, FileText } from "lucide-react";
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard glowColor="cyan" tiltFactor={5} className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                      {paper.conference}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">
                      {paper.title}
                    </h3>
                  </div>

                  {/* Animated Citation Counter Pill */}
                  <div className="flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-xl border border-white/10 shrink-0">
                    <Award className="w-5 h-5 text-amber-400 animate-pulse" />
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-slate-400">CITATIONS</span>
                      <span className="text-lg font-bold text-white font-mono">
                        {paper.citations}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {paper.summary}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5 text-sm font-mono text-slate-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{paper.date}</span>
                    </div>
                    <div>DOI: {paper.doi}</div>
                  </div>

                  <a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-sans text-xs font-semibold shadow-md hover:scale-105 transition-all flex items-center gap-2"
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
