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

    // Aurora Blob Configs
    const blobCount = isMobile ? 3 : 5;
    const blobs = Array.from({ length: blobCount }, (_, i) => {
      const colors = [
        "rgba(0, 114, 255, ",  // Electric Blue
        "rgba(112, 0, 255, ",  // Neon Purple
        "rgba(0, 242, 254, ",  // Cyan
        "rgba(0, 245, 160, ",  // Emerald
        "rgba(255, 0, 127, ",  // Magenta
      ];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: (Math.random() * 250 + 250) * (isMobile ? 0.7 : 1.0),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        colorBase: colors[i % colors.length],
        alpha: Math.random() * 0.35 + 0.25,
        phase: Math.random() * Math.PI * 2,
      };
    });

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Deep dark futuristic background base
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, width, height);

      // Additive / Screen blending for luminous aurora
      ctx.globalCompositeOperation = "lighter";

      blobs.forEach((blob, idx) => {
        // Move blobs with subtle sine oscillation
        blob.phase += 0.005;
        const targetX = blob.x + Math.sin(blob.phase + idx) * 0.8;
        const targetY = blob.y + Math.cos(blob.phase * 0.8 + idx) * 0.8;

        // Subtle mouse attraction for interactive lighting
        const dx = (mouse.x - targetX) * 0.015;
        const dy = (mouse.y - targetY) * 0.015;

        const currentX = targetX + dx;
        const currentY = targetY + dy;

        const dynamicRadius =
          blob.radius + Math.sin(time + idx * 2) * 35;

        const gradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          dynamicRadius
        );

        gradient.addColorStop(0, `${blob.colorBase}${blob.alpha})`);
        gradient.addColorStop(0.5, `${blob.colorBase}${blob.alpha * 0.5})`);
        gradient.addColorStop(1, `${blob.colorBase}0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, currentY, dynamicRadius, 0, Math.PI * 2);
        ctx.fill();

        // Bounce back inside boundaries
        blob.x += blob.vx;
        blob.y += blob.vy;
        if (blob.x < -100 || blob.x > width + 100) blob.vx *= -1;
        if (blob.y < -100 || blob.y > height + 100) blob.vy *= -1;
      });

      // Reset composite mode for overlays
      ctx.globalCompositeOperation = "source-over";

      // Subtle mouse radial spotlight
      if (!isMobile && mouse.x > 0 && mouse.y > 0) {
        const spotGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          400
        );
        spotGrad.addColorStop(0, "rgba(0, 242, 254, 0.12)");
        spotGrad.addColorStop(0.5, "rgba(112, 0, 255, 0.06)");
        spotGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, width, height);
      }

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
      {/* Animated Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-15 mix-blend-overlay" />
      {/* Grain / Noise Texture overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
