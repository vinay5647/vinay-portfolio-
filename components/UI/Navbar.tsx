"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Menu, X, Terminal, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Books", href: "#books" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section active highlighter
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group cursor-pointer"
          data-magnetic="true"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 p-0.5 shadow-[0_0_15px_rgba(0,242,254,0.4)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Brain className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-white tracking-wide text-base group-hover:text-cyan-300 transition-colors">
              VINAY BHARADWAJ
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider">
              AI ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide rounded-full transition-colors duration-300 ${
                  isActive ? "text-cyan-300" : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-cyan-500/15 rounded-full border border-cyan-500/40 shadow-[0_0_10px_rgba(0,242,254,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button: Download Resume */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Vinay_Bharadwaj_Resume.pdf"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(112,0,255,0.5)] transition-all duration-300 hover:scale-105"
            data-magnetic="true"
          >
            <FileText className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-300"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Terminal className="w-4 h-4 text-cyan-400/50" />
                </a>
              ))}
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Vinay_Bharadwaj_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-sm shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
