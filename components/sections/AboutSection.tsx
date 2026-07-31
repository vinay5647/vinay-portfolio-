"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Brain, Code, Zap, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { GlassCard } from "@/components/UI/GlassCard";
import { SectionHeading } from "@/components/UI/SectionHeading";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="BACKGROUND & PHILOSOPHY"
          title="Engineering Intelligent Systems & Real-World Solutions"
          subtitle="Combining strong Computer Science fundamentals with cutting-edge Artificial Intelligence and robust Backend Architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Avatar & Quick Stats Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <GlassCard
              glowColor="purple"
              tiltFactor={10}
              className="p-8 w-full max-w-md flex flex-col items-center text-center"
              dataCursorText="VINAY"
            >
              {/* Profile Image / Cyber Avatar */}
              <div className="relative w-44 h-44 mb-6">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 animate-spin-slow p-1 shadow-[0_0_30px_rgba(112,0,255,0.4)]" />
                <div className="absolute inset-[3px] bg-slate-950 rounded-[22px] flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-cyan-900/40 via-purple-950/60 to-slate-950 flex flex-col items-center justify-center p-4">
                    <Brain className="w-16 h-16 text-cyan-400 mb-2 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider">
                      VB.AI // 2025
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-sm text-cyan-400 font-mono mb-4">
                {PERSONAL_INFO.title}
              </p>

              <div className="w-full h-px bg-slate-800 my-4" />

              {/* Education Block */}
              <div className="w-full text-left bg-slate-950/70 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-xs text-cyan-300 font-medium">
                    {PERSONAL_INFO.education.field}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {PERSONAL_INFO.education.institution}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {PERSONAL_INFO.education.period}
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Narrative, Core Highlights & Journey */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg font-normal"
            >
              <p>
                I am a final-year Computer Science Engineering student specializing in{" "}
                <span className="text-cyan-300 font-semibold">Artificial Intelligence & Machine Learning</span> at Maharaja Institute of Technology Mysore.
              </p>
              <p>
                My passion lies at the intersection of practical machine learning, high-performance Python backends, and full-stack software development. I don&apos;t just build ML models; I architect end-to-end intelligent applications that solve genuine real-world problems.
              </p>
            </motion.div>

            {/* Core Highlights Pills */}
            <div className="mt-4">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CORE ENGINEERING FOCUS</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                {PERSONAL_INFO.education.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 text-sm font-medium flex items-center gap-2 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-md"
                    data-magnetic="true"
                  >
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="mt-6 space-y-4">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Code className="w-3.5 h-3.5" />
                <span>JOURNEY & MILESTONES</span>
              </h4>

              <div className="relative border-l-2 border-slate-800 ml-3 pl-6 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-slate-950" />
                  <h5 className="text-sm font-semibold text-white">Final Year & Research Projects</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Focusing on Autonomous AI Agents, NLP Transformer distillation, and production FastAPI services.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 ring-4 ring-slate-950" />
                  <h5 className="text-sm font-semibold text-white">Ideathons & Hackathons</h5>
                  <p className="text-xs text-slate-400 mt-0.5">2× Ideathon Winner & Technical Innovation Finalist for ML-driven Agritech and Rain Detection concepts.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-pink-500 ring-4 ring-slate-950" />
                  <h5 className="text-sm font-semibold text-white">CS Fundamentals & ML Foundations</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Mastered Data Structures, Algorithms in C++/Java, Database Design (SQL, MongoDB), and Supervised Learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
