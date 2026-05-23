"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Dumbbell } from "lucide-react";

export default function WorkoutPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div><h1 className="text-4xl font-extrabold text-white">Workout <GradientText>Log</GradientText></h1><p className="text-slate-400 mt-2">Physical excellence is the foundation of discipline.</p></div>
        <button className="px-6 py-3 rounded-xl premium-gradient text-white font-bold">+ New Workout</button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {[{ name: "Push Day", date: "Today", dur: "65m", kcal: 450, color: "text-blue-500" }, { name: "Morning Run", date: "Yesterday", dur: "30m", kcal: 320, color: "text-orange-500" }].map((w, i) => (
          <GlassCard key={i} className="flex items-center justify-between p-8 group hover:bg-white/5 transition-all">
            <div className="flex items-center gap-6"><div className={cn("p-4 rounded-2xl bg-white/5", w.color)}><Dumbbell className="w-8 h-8" /></div><div><h3 className="text-xl font-bold text-white group-hover:text-brand-blue">{w.name}</h3><p className="text-slate-400 text-sm">{w.date}</p></div></div>
            <div className="text-right text-white"><p className="text-lg font-bold">{w.dur}</p><p className="text-xs text-slate-500 font-bold uppercase">{w.kcal} kcal</p></div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
