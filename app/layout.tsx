import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { AuroraBackground } from "@/components/canvas/AuroraBackground";
import { ParticleField } from "@/components/canvas/ParticleField";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { ScrollProgress } from "@/components/UI/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinay Bharadwaj | AI & Machine Learning Engineer Portfolio",
  description:
    "Portfolio of Vinay Bharadwaj — AI & Machine Learning Engineer, Python Developer, FastAPI Specialist, and Intelligent Systems Builder. Explore projects, research, skills, and certifications.",
  keywords: [
    "Vinay Bharadwaj",
    "AI Engineer",
    "Machine Learning Engineer",
    "Python Developer",
    "FastAPI",
    "NLP",
    "Portfolio",
    "Maharaja Institute of Technology Mysore",
  ],
  authors: [{ name: "Vinay Bharadwaj" }],
  openGraph: {
    title: "Vinay Bharadwaj | AI & Machine Learning Engineer",
    description:
      "Awwwards-inspired portfolio showcasing AI applications, Python backends, machine learning solutions, and research publications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#030712] text-slate-100 relative min-h-screen overflow-x-hidden">
        <LenisProvider>
          <ScrollProgress />
          <CustomCursor />
          <AuroraBackground />
          <ParticleField />
          <div className="relative z-10">{children}</div>
        </LenisProvider>
      </body>
    </html>
  );
}
