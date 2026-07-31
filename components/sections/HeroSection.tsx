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
  Sparkles,
  ArrowRight,
  ChevronDown,
  Terminal,
} from "lucide-react";
import { PERSONAL_INFO, FLOATING_TECH_BADGES } from "@/lib/data";
import { MagneticButton } from "@/components/UI/MagneticButton";

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
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
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Interactive Tech Badges around Hero */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0 overflow-hidden">
        {FLOATING_TECH_BADGES.slice(0, 8).map((badge, idx) => {
          const positions = [
            { top: "18%", left: "10%" },
            { top: "25%", right: "12%" },
            { top: "60%", left: "8%" },
            { top: "65%", right: "10%" },
            { top: "42%", left: "5%" },
            { top: "48%", right: "6%" },
            { top: "80%", left: "15%" },
            { top: "82%", right: "14%" },
          ];
          const pos = positions[idx % positions.length];
          return (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.8,
                scale: 1,
                y: [0, -12, 0],
              }}
              transition={{
                y: {
                  duration: 4 + (idx % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: { duration: 1, delay: idx * 0.1 },
              }}
              style={{ position: "absolute", ...pos }}
              className="pointer-events-auto cursor-pointer"
            >
              <div
                data-magnetic="true"
                data-cursor-text={badge}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-[0_0_15px_rgba(0,242,254,0.15)] hover:border-cyan-400 hover:text-white hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all duration-300"
              >
                {badge}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Available for Innovation Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(0,242,254,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>AVAILABLE FOR AI & ML OPPORTUNITIES</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight sm:leading-none"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 animate-pulse">
            Vinay Bharadwaj
          </span>
        </motion.h1>

        {/* Animated Subtitle & Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl font-semibold text-slate-300"
        >
          <span className="text-purple-400">AI & Machine Learning Engineer</span>
          <span className="hidden sm:inline text-cyan-500/60">•</span>
          <div className="h-9 flex items-center px-3 py-1 rounded-lg bg-slate-900/70 border border-purple-500/30 text-cyan-300 font-mono text-base sm:text-lg">
            <Terminal className="w-4 h-4 mr-2 text-cyan-400" />
            <span>{displayedText}</span>
            <span className="animate-pulse text-pink-500 ml-0.5">|</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed font-normal"
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* View Projects */}
          <MagneticButton
            asLink="#projects"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,114,255,0.6)]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          {/* Download Resume */}
          <MagneticButton
            asLink={PERSONAL_INFO.resumeUrl}
            download="Vinay_Bharadwaj_Resume.pdf"
            className="bg-slate-900/90 text-white border border-purple-500/50 shadow-[0_0_20px_rgba(112,0,255,0.25)] hover:border-purple-400 hover:shadow-[0_0_30px_rgba(112,0,255,0.5)]"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>Download Resume</span>
          </MagneticButton>

          {/* Contact Me */}
          <MagneticButton
            asLink="#contact"
            className="bg-slate-900/90 text-slate-200 border border-white/10 hover:border-cyan-400 hover:text-white"
          >
            <Send className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </MagneticButton>
        </motion.div>

        {/* Contact Quick Info & Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
            data-magnetic="true"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
            data-magnetic="true"
          >
            <Phone className="w-4 h-4 text-purple-400" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all"
              data-magnetic="true"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all"
              data-magnetic="true"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <a href="#about" className="flex flex-col items-center gap-1 text-xs font-mono tracking-widest uppercase">
            <span>EXPLORE MORE</span>
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
