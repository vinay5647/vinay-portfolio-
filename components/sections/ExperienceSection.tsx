"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building, Sparkles, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/lib/data";
import { GlassCard } from "@/components/UI/GlassCard";
import { SectionHeading } from "@/components/UI/SectionHeading";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PRACTICAL WORK & COLLABORATION"
          title="Experience & Engineering Contributions"
          subtitle="Real-world internships, collaborative AI project development, and practical software engineering deployments."
        />

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.5)]">
                <Briefcase className="w-4 h-4 text-cyan-300" />
              </div>

              {/* Period Pill floating on left for desktop */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                <span className="inline-block text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/30">
                  {exp.period}
                </span>
              </div>

              <GlassCard glowColor="purple" tiltFactor={5} className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-cyan-300 font-mono mt-1">
                      <Building className="w-4 h-4 text-purple-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="md:hidden inline-block text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/30 self-start">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-white/10"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
