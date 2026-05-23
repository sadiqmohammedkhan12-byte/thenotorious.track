 "use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, Bird, Code2, Video } from "lucide-react";
import Link from "next/link";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-blue/30 overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-brand-black/50 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg premium-gradient flex items-center justify-center shadow-lg shadow-brand-blue/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Notorious<span className="premium-text-gradient">Track</span></span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Login</Link>
          <Link href="/signup"><PremiumButton size="sm">Get Started</PremiumButton></Link>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-8 flex flex-col items-center text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8">
          Discipline Today.<br /><GradientText>Freedom Tomorrow.</GradientText>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          The elite productivity system designed for those who refuse to settle. Track habits, monitor health, and leverage AI to build a life of uncompromising excellence.
        </motion.p>
        <Link href="/signup"><PremiumButton size="lg" className="group">Start Your Journey <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></PremiumButton></Link>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Neural AI Assistant", desc: "Advanced patterns recognition that learns your behavior." },
          { title: "Biometric Insights", desc: "Track sleep, hydration, and physical performance." },
          { title: "Elite UX/UI", desc: "Frictionless interface inspired by the world's most beautiful apps." }
        ].map((f, i) => (
          <GlassCard key={i}>
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-slate-400 text-sm">{f.desc}</p>
          </GlassCard>
        ))}
      </section>
    </div>
  );
}
