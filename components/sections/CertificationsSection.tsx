"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { GlassCard } from "@/components/UI/GlassCard";
import { SectionHeading } from "@/components/UI/SectionHeading";

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="VERIFIED CREDENTIALS"
          title="Certifications & Professional Training"
          subtitle="Validated proficiencies in Machine Learning, FastAPI Microservices, Data Structures, and Software Design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                glowColor={idx % 2 === 0 ? "cyan" : "purple"}
                tiltFactor={8}
                className="p-6 flex flex-col justify-between h-full group"
                dataCursorText="VERIFIED"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-mono text-cyan-300 font-bold">
                        {cert.issuer}
                      </span>
                    </div>

                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-400 mb-4">
                    ISSUED: {cert.date}
                  </div>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block">
                      KEY SKILLS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-xs font-mono border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>ID: {cert.credentialId}</span>
                  <span className="text-cyan-400 font-semibold group-hover:underline flex items-center gap-1">
                    <span>Verified</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
