"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building, CheckCircle2 } from "lucide-react";
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

        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[16px] top-1.5 w-7 h-7 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center">
                <Briefcase className="w-3.5 h-3.5 text-sky-400" />
              </div>

              {/* Period Badge on left for desktop */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                <span className="inline-block text-xs font-mono font-semibold text-sky-300 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800">
                  {exp.period}
                </span>
              </div>

              <GlassCard tiltFactor={4} className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-800">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-sky-400 font-mono mt-1">
                      <Building className="w-4 h-4 text-zinc-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="md:hidden inline-block text-xs font-mono text-sky-300 bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-800 self-start">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800"
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
