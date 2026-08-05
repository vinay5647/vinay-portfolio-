"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileText,
  Send,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Terminal,
  Star,
  GitBranch,
  Users,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { Hero3DCanvas } from "@/components/canvas/Hero3DCanvas";

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    let speed = isDeleting ? 35 : 70;

    if (!isDeleting && displayedText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 1600);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 relative overflow-hidden z-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & CTAs */}
        <div className="text-center lg:text-left space-y-6">
          
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for AI & ML Opportunities</span>
          </div>

          <h2 className="text-sky-400 text-lg md:text-xl font-mono tracking-widest uppercase">
            HELLO, I AM
          </h2>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Typewriter Subtitle */}
          <h3 className="text-xl md:text-3xl font-light text-slate-300 min-h-[40px]">
            <span className="inline-flex items-center gap-2">
              <Terminal className="w-6 h-6 text-sky-400 inline-block" />
              <span className="font-mono text-sky-300 font-semibold">
                {displayedText}
              </span>
              <span className="inline-block w-[3px] h-[1em] bg-sky-400 ml-0.5 align-middle animate-pulse" />
            </span>
          </h3>

          <h4 className="text-base md:text-lg font-light text-zinc-400">
            Final-Year Computer Science (AI & ML) • Maharaja Institute of Technology Mysore
          </h4>

          {/* Narrative Bio */}
          <p className="text-zinc-300 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            {PERSONAL_INFO.heroBio}
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a
              href="#projects"
              className="px-8 py-4 bg-sky-500/10 border border-sky-400 text-sky-300 rounded-full font-medium hover:bg-sky-400 hover:text-zinc-950 transition-all duration-300 flex items-center gap-2 group shadow-lg"
              data-magnetic="true"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              data-magnetic="true"
            >
              About Me
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Vinay_Bharadwaj_Resume.pdf"
              className="px-8 py-4 bg-purple-500/10 border border-purple-400 text-purple-300 rounded-full font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              data-magnetic="true"
            >
              <span>Resume</span>
              <Download className="w-5 h-5" />
            </a>
          </div>

          {/* Social Icons Row */}
          <div className="flex gap-6 justify-center lg:justify-start pt-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-sky-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
              data-magnetic="true"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
              data-magnetic="true"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
              data-magnetic="true"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive 3D Canvas Scene & Profile Frame */}
        <div className="relative mx-auto lg:ml-auto flex items-center justify-center">
          <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]">
            {/* Interactive WebGL 3D Geometry Canvas Background */}
            <div className="absolute inset-0 z-0">
              <Hero3DCanvas />
            </div>

            {/* Glowing 3D Concentric Orbit Rings & Profile Avatar */}
            <div className="absolute inset-10 sm:inset-14 rounded-full border-2 border-sky-400/50 shadow-[0_0_50px_rgba(56,189,248,0.4)] backdrop-blur-sm bg-zinc-950/60 p-1 flex items-center justify-center z-10 [transform-style:preserve-3d] hover:[transform:scale(1.05)_rotateY(10deg)] transition-transform duration-500">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover object-top hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* GitHub Contributions Card on Home Page */}
      <div className="mt-20 max-w-5xl mx-auto px-4 w-full">
        <div className="bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Github className="w-12 h-12 text-white shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-white">GitHub Contributions</h2>
                <p className="text-zinc-400 text-sm">Open source activity & AI repositories</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 text-center justify-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-sky-400 flex justify-center items-center gap-2 font-mono">
                  <Star className="w-5 h-5 text-amber-400" /> Active
                </div>
                <p className="text-zinc-500 text-xs mt-1 font-mono">Repositories</p>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 flex justify-center items-center gap-2 font-mono">
                  <GitBranch className="w-5 h-5 text-purple-400" /> 2025
                </div>
                <p className="text-zinc-500 text-xs mt-1 font-mono">Latest Activity</p>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400 flex justify-center items-center gap-2 font-mono">
                  <Users className="w-5 h-5 text-emerald-400" /> 10+
                </div>
                <p className="text-zinc-500 text-xs mt-1 font-mono">Projects Built</p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 rounded-xl text-white font-medium hover:bg-white/20 transition-colors border border-white/10"
              data-magnetic="true"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
