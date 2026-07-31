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
          subtitle="Real-world intelligent software engineered with Python, FastAPI, Machine Learning, and modern web frameworks."
        />

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                tiltFactor={6}
                className="overflow-hidden flex flex-col justify-between h-full group"
                dataCursorText="VIEW"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-zinc-950/90 border border-zinc-800 text-sky-400 font-mono text-[10px] font-semibold tracking-wider">
                      FEATURED AI
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed mb-5 font-normal">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 text-xs font-mono border border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-zinc-800/80 gap-2">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-1.5 text-xs font-medium"
                      data-magnetic="true"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 hover:bg-sky-500/20 hover:text-white transition-all flex items-center gap-1.5 text-xs font-medium"
                        data-magnetic="true"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-1.5 text-xs font-medium"
                    data-magnetic="true"
                  >
                    <Info className="w-3.5 h-3.5 text-sky-400" />
                    <span>Details</span>
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Future Projects Roadmap */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-5 h-5 text-sky-400" />
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Future & In-Development AI Initiatives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FUTURE_PROJECTS.map((fp, idx) => (
              <motion.div
                key={fp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard tiltFactor={4} className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-mono font-medium border border-indigo-500/20 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      IN DEVELOPMENT
                    </span>
                    <span className="text-xs font-mono text-zinc-500">2025 ROADMAP</span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{fp.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {fp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {fp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 text-xs font-mono border border-zinc-800"
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

      {/* Expandable Project Details Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            <div className="relative h-64 w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-zinc-300 text-base leading-relaxed font-normal">
              {selectedProject.longDescription}
            </p>

            <div>
              <h4 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
                TECHNOLOGY ARCHITECTURE
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-zinc-950 text-zinc-200 text-xs font-mono border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-end gap-3">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                <span>View Repository</span>
              </a>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-sky-500 text-zinc-950 font-semibold hover:bg-sky-400 transition-colors flex items-center gap-2 text-sm"
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
