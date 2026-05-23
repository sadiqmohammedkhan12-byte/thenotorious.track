"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Smile, Frown, Meh, Laugh, Angry } from "lucide-react";

const moods = [
  { icon: Angry, label: "Awful", color: "text-red-500" },
  { icon: Frown, label: "Bad", color: "text-orange-500" },
  { icon: Meh, label: "Neutral", color: "text-yellow-500" },
  { icon: Smile, label: "Good", color: "text-emerald-500" },
  { icon: Laugh, label: "Excellent", color: "text-brand-cyan" },
];

export default function MoodPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="text-center max-w-2xl mx-auto py-12"><h1 className="text-4xl font-extrabold text-white mb-4">How are you feeling, <GradientText>Sadiq</GradientText>?</h1><p className="text-slate-400">Tracking your emotional state helps identify productivity patterns.</p></div>
      <div className="flex justify-center gap-6">{moods.map((m) => (<GlassCard key={m.label} className="group cursor-pointer hover:bg-white/10 text-center w-32 p-6"><m.icon className={cn("w-12 h-12 mx-auto mb-4 transition-transform group-hover:scale-110", m.color)} /><p className="text-sm font-bold text-white">{m.label}</p></GlassCard>))}</div>
      <GlassCard className="max-w-xl mx-auto"><h3 className="text-xl font-bold text-white mb-6 text-center">Mood Heatmap</h3><div className="grid grid-cols-7 gap-2">{Array.from({length: 28}).map((_, i) => (<div key={i} className={cn("aspect-square rounded-lg bg-white/5", i % 4 === 0 && "bg-emerald-500/40", i % 7 === 0 && "bg-brand-cyan/40")} />))}</div></GlassCard>
    </div>
  );
}
