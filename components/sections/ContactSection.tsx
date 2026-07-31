"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  FileText,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/lib/data";
import { GlassCard } from "@/components/UI/GlassCard";
import { SectionHeading } from "@/components/UI/SectionHeading";
import { MagneticButton } from "@/components/UI/MagneticButton";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#818cf8", "#c084fc", "#34d399"],
      });

      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build Something Intelligent Together"
          subtitle="Whether you have an engineering opportunity, research idea, AI project, or technical question, feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <GlassCard tiltFactor={4} className="p-8 h-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-normal">
                  Available for full-time engineering roles, AI consulting, research collaborations, and software projects.
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-4 group p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all"
                  >
                    <div className="p-3 rounded-xl bg-zinc-900 text-sky-400 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-500 block">EMAIL ME</span>
                      <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-4 group p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all"
                  >
                    <div className="p-3 rounded-xl bg-zinc-900 text-sky-400 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-500 block">CALL / WHATSAPP</span>
                      <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
                    <div className="p-3 rounded-xl bg-zinc-900 text-emerald-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-500 block">LOCATION</span>
                      <span className="text-sm font-semibold text-white">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions & Social Links */}
              <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-4">
                <MagneticButton
                  asLink={PERSONAL_INFO.resumeUrl}
                  download="Vinay_Bharadwaj_Resume.pdf"
                  className="w-full bg-zinc-900 text-white border border-zinc-700 hover:bg-zinc-800"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Download Complete Resume</span>
                </MagneticButton>

                <div className="flex items-center justify-center gap-4 pt-1">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
                    data-magnetic="true"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
                    data-magnetic="true"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard tiltFactor={4} className="p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Hi Vinay, I'd like to discuss an AI project..."
                    className="w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-all text-sm resize-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-zinc-950 font-bold py-4 shadow-lg hover:bg-zinc-200"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </span>
                  )}
                </MagneticButton>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>
                      Thank you! Your message has been transmitted. Vinay will get back to you shortly.
                    </span>
                  </motion.div>
                )}
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
