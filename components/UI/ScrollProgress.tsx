"use client";

import React, { useEffect, useState } from "react";

export const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollPercent(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none bg-slate-900/30">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_15px_#00F2FE] transition-all duration-150 ease-out"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};
