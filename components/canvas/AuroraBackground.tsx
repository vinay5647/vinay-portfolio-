"use client";

import React, { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useIsMobile } from "@/hooks/useMediaQuery";

export const AuroraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useMousePosition();
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.005;
      ctx.clearRect(0, 0, width, height);

      // Premium Dark Obsidian Base (Linear/Vercel Theme)
      ctx.fillStyle = "#090d16";
      ctx.fillRect(0, 0, width, height);

      // Subtle, elegant ambient glows
      const glows = [
        {
          x: width * 0.5 + Math.sin(time) * 40,
          y: height * 0.25 + Math.cos(time * 0.8) * 30,
          r: 500,
          color: "rgba(56, 189, 248, 0.12)", // Soft Cyan
        },
        {
          x: width * 0.3 + Math.cos(time * 0.7) * 50,
          y: height * 0.5 + Math.sin(time * 0.9) * 40,
          r: 600,
          color: "rgba(99, 102, 241, 0.12)", // Soft Indigo
        },
        {
          x: width * 0.7 + Math.sin(time * 0.6) * 40,
          y: height * 0.75 + Math.cos(time * 0.7) * 30,
          r: 550,
          color: "rgba(168, 85, 247, 0.08)", // Soft Violet
        },
      ];

      ctx.globalCompositeOperation = "lighter";

      glows.forEach((g) => {
        const grad = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r);
        grad.addColorStop(0, g.color);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Mouse Spotlight Glow
      if (!isMobile && mouse.x > 0 && mouse.y > 0) {
        const spotGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          350
        );
        spotGrad.addColorStop(0, "rgba(56, 189, 248, 0.08)");
        spotGrad.addColorStop(0.6, "rgba(99, 102, 241, 0.03)");
        spotGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouse.x, mouse.y, isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Subtle Linear-style Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10" />
      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
    </div>
  );
};
