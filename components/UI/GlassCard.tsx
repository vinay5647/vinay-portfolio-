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
  tiltFactor = 8,
  dataCursorText,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

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
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      data-cursor-text={dataCursorText}
      className={`group relative rounded-2xl bg-zinc-900/60 backdrop-blur-2xl border border-zinc-800/80 hover:border-sky-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_48px_rgba(56,189,248,0.15)] transition-all duration-300 ${className}`}
    >
      {/* 3D Dynamic Specular Light Glare */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 overflow-hidden"
        style={{
          background: `radial-gradient(550px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(56,189,248,0.12), rgba(168,85,247,0.05) 30%, transparent 60%)`,
        }}
      />
      <div className="relative z-20 h-full [transform:translateZ(20px)]">{children}</div>
    </motion.div>
  );
};
