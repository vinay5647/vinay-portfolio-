"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Brain, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 py-12 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Brain className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-white tracking-wide text-sm">
              VINAY BHARADWAJ
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              AI & MACHINE LEARNING ENGINEER
            </span>
          </div>
        </div>

        {/* Heartbeat Text */}
        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
          <span>Designed & Developed by Vinay Bharadwaj</span>
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
          </motion.div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
          data-magnetic="true"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};
