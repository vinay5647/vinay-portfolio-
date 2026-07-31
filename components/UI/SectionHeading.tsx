"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`mb-16 flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>{badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
        {title.split(" ").map((word, i) => (
          <span key={i} className="inline-block mr-2">
            {i % 2 === 1 ? (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
                {word}
              </span>
            ) : (
              word
            )}
          </span>
        ))}
      </h2>

      {subtitle && (
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent rounded-full opacity-60" />
    </motion.div>
  );
};
