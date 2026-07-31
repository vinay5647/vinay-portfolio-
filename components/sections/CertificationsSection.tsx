"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, ExternalLink } from "lucide-react";
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                tiltFactor={6}
                className="p-6 flex flex-col justify-between h-full group"
                dataCursorText="VERIFIED"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-sky-400" />
                      <span className="text-xs font-mono text-sky-300 font-semibold">
                        {cert.issuer}
                      </span>
                    </div>

                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-zinc-500 mb-4">
                    ISSUED: {cert.date}
                  </div>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block">
                      KEY SKILLS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-zinc-950 text-zinc-300 text-xs font-mono border border-zinc-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>ID: {cert.credentialId}</span>
                  <span className="text-sky-400 font-semibold flex items-center gap-1">
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
