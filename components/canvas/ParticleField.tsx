"use client";

import React, { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useIsMobile } from "@/hooks/useMediaQuery";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  color: string;
  depth: number;
}

export const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useMousePosition();
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = isMobile ? 25 : 60;
    const colors = ["#00F2FE", "#7000FF", "#0072FF", "#00F5A0", "#FF007F"];

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4 - 0.2,
      alpha: Math.random() * 0.6 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      depth: Math.random() * 0.8 + 0.2, // Parallax depth factor
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        // Parallax shift calculated from mouse
        const parallaxX = (mouse.normalizedX * 25) * p.depth;
        const parallaxY = (mouse.normalizedY * 25) * p.depth;

        const drawX = p.x + parallaxX;
        const drawY = p.y + parallaxY;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.size * 4;
        ctx.shadowColor = p.color;

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Update coordinates
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [mouse.normalizedX, mouse.normalizedY, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full"
    />
  );
};
