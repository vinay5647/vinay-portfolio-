"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Trophy, Award, Brain, Rocket } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/data";
import { GlassCard } from "@/components/UI/GlassCard";

const ICON_MAP: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-7 h-7 text-amber-400" />,
  Award: <Award className="w-7 h-7 text-sky-400" />,
  Brain: <Brain className="w-7 h-7 text-indigo-400" />,
  Rocket: <Rocket className="w-7 h-7 text-emerald-400" />,
};

const CounterItem: React.FC<{
  value: number;
  suffix: string;
  label: string;
  icon: string;
}> = ({ value, suffix, label, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const stepTime = 30;
    const totalSteps = Math.ceil(duration / stepTime);
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-4">
      <div className="mb-4 p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800">
        {ICON_MAP[icon]}
      </div>
      <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm sm:text-base font-semibold text-zinc-300">
        {label}
      </div>
    </div>
  );
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard tiltFactor={3} className="p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
            {ACHIEVEMENTS.map((item) => (
              <CounterItem
                key={item.label}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
