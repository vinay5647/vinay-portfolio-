"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, Clock, Lock } from "lucide-react";
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

        <div className="relative">
          <GlassCard tiltFactor={4} className="p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-36 h-48 mb-8 rounded-r-xl rounded-l-sm bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 p-4 border border-zinc-700/80 shadow-2xl border-l-4 border-l-sky-400 flex flex-col justify-between text-left"
              >
                <div className="flex items-center justify-between">
                  <Book className="w-5 h-5 text-sky-400" />
                  <Lock className="w-3.5 h-3.5 text-zinc-400" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-sky-300 uppercase tracking-widest block mb-1">
                    UPCOMING BOOK
                  </span>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    Applied Machine Learning & FastAPI
                  </h4>
                </div>
                <div className="text-[8px] font-mono text-zinc-400">
                  VINAY BHARADWAJ
                </div>
              </motion.div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-sky-400 text-xs font-mono font-medium uppercase mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>BOOKS COMING SOON</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Authoring Technical Literature for AI Engineers
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Currently drafting technical literature on production FastAPI microservices, practical machine learning model deployments, and autonomous agent systems.
              </p>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-500">
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
