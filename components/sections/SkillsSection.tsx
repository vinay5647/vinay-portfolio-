"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Terminal,
  Layout,
  Palette,
  Atom,
  Globe,
  Zap,
  Server,
  Database,
  Layers,
  Brain,
  MessageSquareText,
  Network,
  BarChart,
  GitBranch,
  Github,
  FileCode,
  Smartphone,
  Users,
  MessageCircle,
  Lightbulb,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { SKILLS_DATA } from "@/lib/data";
import { GlassCard } from "@/components/UI/GlassCard";
import { SectionHeading } from "@/components/UI/SectionHeading";

// Icon lookup map
const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-cyan-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  Terminal: <Terminal className="w-5 h-5 text-pink-400" />,
  Layout: <Layout className="w-5 h-5 text-cyan-400" />,
  Palette: <Palette className="w-5 h-5 text-purple-400" />,
  Atom: <Atom className="w-5 h-5 text-cyan-300 animate-spin-slow" />,
  Globe: <Globe className="w-5 h-5 text-blue-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Server: <Server className="w-5 h-5 text-purple-400" />,
  Database: <Database className="w-5 h-5 text-cyan-400" />,
  Layers: <Layers className="w-5 h-5 text-emerald-400" />,
  Brain: <Brain className="w-5 h-5 text-cyan-400 animate-pulse" />,
  MessageSquareText: <MessageSquareText className="w-5 h-5 text-purple-400" />,
  Network: <Network className="w-5 h-5 text-pink-400" />,
  BarChart: <BarChart className="w-5 h-5 text-emerald-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-400" />,
  Github: <Github className="w-5 h-5 text-slate-200" />,
  FileCode: <FileCode className="w-5 h-5 text-blue-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-cyan-400" />,
  Users: <Users className="w-5 h-5 text-purple-400" />,
  MessageCircle: <MessageCircle className="w-5 h-5 text-pink-400" />,
  Lightbulb: <Lightbulb className="w-5 h-5 text-amber-400" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...SKILLS_DATA.map((s) => s.category)];

  const filteredData =
    selectedCategory === "All"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TECHNICAL MASTERY"
          title="Skills, Frameworks & Core Capabilities"
          subtitle="A comprehensive overview of my technical stack across AI/ML, Python Backend, Web Technologies, and Software Engineering."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(0,242,254,0.4)] font-bold scale-105"
                  : "bg-slate-900/80 text-slate-400 border border-white/10 hover:border-cyan-500/40 hover:text-white"
              }`}
              data-magnetic="true"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                glowColor={
                  idx % 4 === 0
                    ? "cyan"
                    : idx % 4 === 1
                    ? "purple"
                    : idx % 4 === 2
                    ? "emerald"
                    : "magenta"
                }
                tiltFactor={8}
                className="p-6 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {section.category}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                      {section.items.length} Skills
                    </span>
                  </div>

                  <div className="space-y-5">
                    {section.items.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2.5">
                            {ICON_MAP[skill.icon] || (
                              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                            )}
                            <span className="font-semibold text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-cyan-300">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Animated Skill Level Bar */}
                        <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(0,242,254,0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
