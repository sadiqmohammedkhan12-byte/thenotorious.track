 "use client";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Trophy, Target } from "lucide-react";

export default function ReviewPage() {
  return (
    <div className="space-y-8 pb-12">
      <h1 className="text-4xl font-extrabold text-white">Monthly <GradientText>Review</GradientText></h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard><h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Trophy className="text-yellow-500 w-5 h-5" /> Wins of the Month</h3><textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-slate-300 min-h-[150px] focus:outline-none" /></GlassCard>
        <GlassCard><h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Target className="text-brand-cyan w-5 h-5" /> Goals for Next Month</h3><div className="space-y-4">{[1, 2, 3].map(i => <div key={i} className="flex gap-4"><div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 font-bold">{i}</div><input type="text" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none" /></div>)}</div></GlassCard>
      </div>
    </div>
  );
}
