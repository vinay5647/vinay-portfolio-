"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/useMediaQuery";

export const CustomCursor: React.FC = () => {
  const isMobile = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest<HTMLElement>(
        "a, button, [data-magnetic], [data-cursor-text], input, textarea"
      );

      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute("data-cursor-text");
        setHoverText(text || "");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 64 : 32,
          height: isHovered ? 64 : 32,
          backgroundColor: isHovered
            ? "rgba(0, 242, 254, 0.15)"
            : "rgba(112, 0, 255, 0.2)",
          border: isHovered
            ? "1.5px solid rgba(0, 242, 254, 0.8)"
            : "1px solid rgba(112, 0, 255, 0.5)",
          boxShadow: isHovered
            ? "0 0 25px rgba(0, 242, 254, 0.6), inset 0 0 15px rgba(112, 0, 255, 0.4)"
            : "0 0 15px rgba(112, 0, 255, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {hoverText && (
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Inner Dot Pointer */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#00F2FE]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};
