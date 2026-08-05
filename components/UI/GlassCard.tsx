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

const GLOW_MAP = {
  cyan: "rgba(56, 189, 248, 0.25)",
  purple: "rgba(168, 85, 247, 0.25)",
  blue: "rgba(59, 130, 246, 0.25)",
  emerald: "rgba(52, 211, 153, 0.25)",
  magenta: "rgba(236, 72, 153, 0.25)",
};

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  glowColor = "cyan",
  tiltFactor = 12,
  dataCursorText,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

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

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY, scale: isHovered ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      data-cursor-text={dataCursorText}
      className={`group relative rounded-2xl bg-zinc-900/70 backdrop-blur-xl border border-zinc-800/90 hover:border-sky-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.2)] transition-all duration-300 ${className}`}
    >
      {/* Hyper-Visible Radial Cursor Spotlight & Beam */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 overflow-hidden"
        style={{
          background: `radial-gradient(550px circle at ${spotlightPos.x}% ${spotlightPos.y}%, ${GLOW_MAP[glowColor]}, transparent 60%)`,
        }}
      />

      {/* Futuristic Border Highlight Line */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border border-sky-400/0 group-hover:border-sky-400/40 transition-colors duration-500 z-10"
      />

      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
};
