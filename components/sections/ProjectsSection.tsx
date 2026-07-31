"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Info,
  Rocket,
  Sparkles,
  Layers,
  Terminal,
} from "lucide-react";
import { PROJECTS_DATA, FUTURE_PROJECTS, Project } from "@/lib/data";
import { GlassCard } from "@/components/UI/GlassCard";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { Modal } from "@/components/UI/Modal";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PORTFOLIO HIGHLIGHTS"
          title="Featured AI, ML & Full-Stack Projects"
          subtitle="Explore real-world applications engineered with Python, FastAPI, Machine Learning models, and modern web frameworks."
        />

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <GlassCard
                glowColor={
                  idx % 3 === 0 ? "cyan" : idx % 3 === 1 ? "purple" : "emerald"
                }
                tiltFactor={10}
                className="overflow-hidden flex flex-col justify-between h-full group"
                dataCursorText="VIEW"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 font-mono text-[10px] font-bold tracking-wider">
                      FEATURED AI
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-slate-950 text-cyan-300 text-xs font-mono border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-950 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-all flex items-center gap-1.5 text-xs font-medium"
                      data-magnetic="true"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium"
                        data-magnetic="true"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium"
                    data-magnetic="true"
                  >
                    <Info className="w-4 h-4" />
                    <span>Details</span>
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Future Projects Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-6 h-6 text-pink-400 animate-bounce" />
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Future & In-Development AI Initiatives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FUTURE_PROJECTS.map((fp, idx) => (
              <motion.div
                key={fp.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard glowColor="magenta" tiltFactor={6} className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-mono font-bold border border-pink-500/30 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      IN DEVELOPMENT
                    </span>
                    <span className="text-xs font-mono text-slate-400">2025 ROADMAP</span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{fp.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {fp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {fp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-purple-300 text-xs font-mono border border-purple-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Expand Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            <div className="relative h-64 w-full rounded-xl overflow-hidden bg-slate-950">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-slate-200 text-base leading-relaxed">
              {selectedProject.longDescription}
            </p>

            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
                TECHNOLOGY ARCHITECTURE
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-slate-950 text-cyan-300 text-xs font-mono border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg flex items-center gap-2 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Demo</span>
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
