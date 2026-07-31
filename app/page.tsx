"use client";

import React, { useState } from "react";
import { LoadingScreen } from "@/components/UI/LoadingScreen";
import { Navbar } from "@/components/UI/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { BooksSection } from "@/components/sections/BooksSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ResearchSection />
          <BooksSection />
          <CertificationsSection />
          <AchievementsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </main>
  );
}
