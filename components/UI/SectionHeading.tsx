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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sky-400 text-xs font-mono tracking-wider uppercase mb-4">
        <Sparkles className="w-3.5 h-3.5 text-sky-400" />
        <span>{badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-6 w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full opacity-80" />
    </motion.div>
  );
};
