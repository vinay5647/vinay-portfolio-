"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Send,
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  ChevronDown,
  Terminal,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO, FLOATING_TECH_BADGES } from "@/lib/data";
import { MagneticButton } from "@/components/UI/MagneticButton";

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
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden z-10"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Sleek Vercel Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-sky-400 text-xs font-mono tracking-wider uppercase mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>FINAL-YEAR COMPUTER SCIENCE (AI & ML) ENGINEER</span>
        </motion.div>

        {/* Main Clean Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-tight"
        >
          Vinay Bharadwaj
        </motion.h1>

        {/* Subtitle & Dynamic Typewriter Role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-lg sm:text-2xl font-medium text-zinc-300"
        >
          <span>AI & Machine Learning Engineer</span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <div className="h-9 flex items-center px-3.5 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-sky-300 font-mono text-sm sm:text-base">
            <Terminal className="w-4 h-4 mr-2 text-sky-400" />
            <span>{displayedText}</span>
            <span className="animate-pulse text-sky-400 ml-0.5">_</span>
          </div>
        </motion.div>

        {/* Short Professional Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-zinc-300 text-base sm:text-lg max-w-3xl leading-relaxed font-normal"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            asLink="#projects"
            className="bg-white text-zinc-950 font-semibold shadow-lg hover:bg-zinc-200"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            asLink={PERSONAL_INFO.resumeUrl}
            download="Vinay_Bharadwaj_Resume.pdf"
            className="bg-zinc-900 text-zinc-100 border border-zinc-700/80 hover:bg-zinc-800 hover:border-zinc-600"
          >
            <FileText className="w-4 h-4 text-sky-400" />
            <span>Download Resume</span>
          </MagneticButton>

          <MagneticButton
            asLink="#contact"
            className="bg-zinc-900/60 text-zinc-300 border border-zinc-800 hover:text-white hover:border-zinc-700"
          >
            <Send className="w-4 h-4 text-zinc-400" />
            <span>Contact Me</span>
          </MagneticButton>
        </motion.div>

        {/* Tech Stack Badges Pill Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 w-full max-w-4xl"
        >
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
            FEATURED ENGINEERING TECH STACK
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {FLOATING_TECH_BADGES.map((badge) => (
              <span
                key={badge}
                className="px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-mono hover:border-sky-500/50 hover:text-white transition-all cursor-pointer shadow-sm"
                data-magnetic="true"
                data-cursor-text={badge}
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quick Contact Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400 font-medium"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 hover:text-sky-300 transition-colors"
          >
            <Mail className="w-4 h-4 text-sky-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 hover:text-sky-300 transition-colors"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-14 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
        >
          <a href="#about" className="flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest uppercase">
            <span>SCROLL DOWN</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
