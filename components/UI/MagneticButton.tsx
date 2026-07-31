"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  magneticStrength?: number;
  asLink?: string;
  download?: boolean | string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = "",
  onClick,
  magneticStrength = 0.35,
  asLink,
  download,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = e.clientX - (left + width / 2);
    const middleY = e.clientY - (top + height / 2);

    setPosition({ x: middleX * magneticStrength, y: middleY * magneticStrength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      className="inline-block"
      data-magnetic="true"
    >
      {asLink ? (
        <a
          href={asLink}
          download={download}
          className={`relative group overflow-hidden px-7 py-3.5 rounded-xl font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${className}`}
        >
          <span className="relative z-10 flex items-center gap-2">{children}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </a>
      ) : (
        <button
          onClick={onClick}
          className={`relative group overflow-hidden px-7 py-3.5 rounded-xl font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${className}`}
          {...props}
        >
          <span className="relative z-10 flex items-center gap-2">{children}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </button>
      )}
    </motion.div>
  );

  return content;
};
