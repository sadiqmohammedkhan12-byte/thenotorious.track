 "use client";
import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { GradientText } from "@/components/ui/GradientText";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="flex flex-col items-center mb-12">
          <div className="w-12 h-12 rounded-2xl premium-gradient flex items-center justify-center mb-6"><Sparkles className="w-7 h-7 text-white" /></div>
          <h1 className="text-3xl font-extrabold text-white">Welcome <GradientText>Back</GradientText></h1>
        </div>
        <GlassCard className="p-8">
          <div className="space-y-6">
            <div className="space-y-2"><label className="text-xs text-slate-500 font-bold uppercase">Email</label><input type="email" placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue/50" /></div>
            <div className="space-y-2"><label className="text-xs text-slate-500 font-bold uppercase">Password</label><input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue/50" /></div>
            <Link href="/dashboard"><PremiumButton className="w-full">Sign In</PremiumButton></Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
