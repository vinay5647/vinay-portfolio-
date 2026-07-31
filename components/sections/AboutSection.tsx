"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Brain, Code, Zap, Sparkles, MapPin } from "lucide-react";
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
          subtitle="Combining Computer Science fundamentals with Artificial Intelligence models and robust Backend Architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Avatar & Profile Details */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <GlassCard
              tiltFactor={6}
              className="p-8 w-full max-w-md flex flex-col items-center text-center"
              dataCursorText="VINAY"
            >
              <div className="relative w-40 h-40 mb-6">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-violet-600 p-0.5 shadow-lg" />
                <div className="absolute inset-[2px] bg-zinc-950 rounded-[22px] flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 flex flex-col items-center justify-center p-4">
                    <Brain className="w-14 h-14 text-sky-400 mb-2" />
                    <span className="font-mono text-xs font-semibold text-zinc-400 tracking-wider">
                      VINAY BHARADWAJ
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-sky-400 font-mono mb-4">
                {PERSONAL_INFO.title}
              </p>

              <div className="w-full h-px bg-zinc-800 my-4" />

              {/* Education Card */}
              <div className="w-full text-left bg-zinc-950/80 p-4 rounded-xl border border-zinc-800 flex items-start gap-3.5">
                <GraduationCap className="w-6 h-6 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-xs text-sky-300 font-semibold mt-0.5">
                    {PERSONAL_INFO.education.field}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {PERSONAL_INFO.education.institution}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                    {PERSONAL_INFO.education.period}
                  </span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Narrative & Focus Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg font-normal"
            >
              <p>
                I am a final-year Computer Science Engineering student specializing in{" "}
                <span className="text-white font-semibold">Artificial Intelligence & Machine Learning</span> at Maharaja Institute of Technology Mysore.
              </p>
              <p>
                My engineering focus combines practical machine learning models, production Python backends with FastAPI, and full-stack software development. I specialize in architecting intelligent systems that solve real-world problems.
              </p>
            </motion.div>

            {/* Core Pillars */}
            <div className="mt-4">
              <h4 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ENGINEERING FOCUS</span>
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {PERSONAL_INFO.education.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm font-medium flex items-center gap-2 hover:border-zinc-700 transition-all"
                  >
                    <Zap className="w-3.5 h-3.5 text-sky-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-6 space-y-4">
              <h4 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Code className="w-3.5 h-3.5" />
                <span>MILESTONES & JOURNEY</span>
              </h4>

              <div className="relative border-l border-zinc-800 ml-3 pl-6 space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-zinc-950" />
                  <h5 className="text-sm font-bold text-white">Final Year AI & Backend Projects</h5>
                  <p className="text-xs text-zinc-400 mt-0.5">Autonomous AI Agents, NLP Transformer classification pipelines, and production FastAPI services.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-indigo-400 ring-4 ring-zinc-950" />
                  <h5 className="text-sm font-bold text-white">Ideathon & Hackathon Awards</h5>
                  <p className="text-xs text-zinc-400 mt-0.5">2× Ideathon Winner & Technical Innovation Finalist for ML Agritech & Rain Detection systems.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-violet-400 ring-4 ring-zinc-950" />
                  <h5 className="text-sm font-bold text-white">Computer Science Foundations</h5>
                  <p className="text-xs text-zinc-400 mt-0.5">Data Structures & Algorithms in C++/Java, Database Design (SQL, MongoDB), and Supervised Learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
