"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, Sparkles, Clock, Lock } from "lucide-react";
import { GlassCard } from "@/components/UI/GlassCard";
import { SectionHeading } from "@/components/UI/SectionHeading";

export const BooksSection: React.FC = () => {
  return (
    <section id="books" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="AUTHORING & PUBLICATIONS"
          title="Books & Technical Publications"
          subtitle="Comprehensive guides on AI System Design, FastAPI microservices, and Machine Learning engineering."
        />

        {/* Bookshelf Showcase UI */}
        <div className="relative">
          <GlassCard glowColor="purple" tiltFactor={5} className="p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              {/* Floating 3D Book Teaser */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-36 h-48 mb-8 rounded-r-xl rounded-l-sm bg-gradient-to-tr from-cyan-600 via-purple-700 to-pink-600 p-4 shadow-[0_15px_35px_rgba(112,0,255,0.4)] border-l-4 border-slate-900 flex flex-col justify-between text-left"
              >
                <div className="flex items-center justify-between">
                  <Book className="w-6 h-6 text-cyan-300" />
                  <Lock className="w-4 h-4 text-slate-300" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-cyan-200 uppercase tracking-widest block mb-1">
                    UPCOMING BOOK
                  </span>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    Applied Machine Learning & FastAPI
                  </h4>
                </div>
                <div className="text-[8px] font-mono text-purple-200">
                  VINAY BHARADWAJ
                </div>
              </motion.div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold uppercase mb-4">
                <Clock className="w-3.5 h-3.5 animate-spin" />
                <span>BOOKS COMING SOON</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Authoring Technical Literature for AI Engineers
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                I am currently drafting technical publications focusing on production FastAPI backend development, practical machine learning deployment, and autonomous agent orchestration. Stay tuned for upcoming releases.
              </p>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-400">
                <span>ESTIMATED RELEASE: Q4 2025</span>
                <span>•</span>
                <span>PYTHON & AI FOCUS</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
