"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "cyan" | "emerald" | "magenta";
  tiltFactor?: number;
  dataCursorText?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  glowColor = "cyan",
  tiltFactor = 15,
  dataCursorText,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  const glowMap = {
    blue: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(0,114,255,0.3)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(112,0,255,0.3)]",
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(0,242,254,0.35)]",
    emerald: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(0,245,160,0.3)]",
    magenta: "group-hover:border-pink-500/50 group-hover:shadow-[0_0_30px_rgba(255,0,127,0.3)]",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY - height / 2) / height) * -tiltFactor;
    const rY = ((mouseX - width / 2) / width) * tiltFactor;

    setRotateX(rX);
    setRotateY(rY);

    setSpotlightPos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
      data-cursor-text={dataCursorText}
      className={`group relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 transition-all duration-300 ${glowMap[glowColor]} ${className}`}
    >
      {/* Dynamic Cursor Spotlight Effect over Card */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(600px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
};
