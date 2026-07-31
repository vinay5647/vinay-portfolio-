"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Brain } from "lucide-react";

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Progress Counter Interval
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Canvas Neural Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = 300);
    let h = (canvas.height = 300);

    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      nodes.forEach((n, i) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        ctx.fillStyle = "#00F2FE";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n2.x - n.x, n2.y - n.y);
          if (dist < 75) {
            ctx.strokeStyle = `rgba(112, 0, 255, ${1 - dist / 75})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#030712] text-white"
        >
          {/* Neural Canvas Core */}
          <div className="relative flex items-center justify-center">
            <canvas ref={canvasRef} className="w-64 h-64 opacity-70" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-36 h-36 rounded-full border border-cyan-500/30 border-t-cyan-400 border-r-purple-500 shadow-[0_0_30px_rgba(0,242,254,0.3)]"
            />
            <div className="absolute flex flex-col items-center justify-center">
              <Brain className="w-10 h-10 text-cyan-400 animate-pulse mb-1" />
              <span className="font-mono text-xs tracking-widest text-cyan-300 font-semibold">
                VINAY BHARADWAJ
              </span>
            </div>
          </div>

          {/* Progress Percent & Title */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <span className="font-mono text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              {Math.min(progress, 100)}%
            </span>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono tracking-widest uppercase">
              <Cpu className="w-3.5 h-3.5 text-purple-400 animate-spin" />
              <span>INITIALIZING AI CORE & NEURAL PORTFOLIO...</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
