 "use client";
import React, { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const habits = [
  { id: 1, name: "Drink 3L Water", color: "bg-blue-500", streak: 12 },
  { id: 2, name: "Read 20 Pages", color: "bg-purple-500", streak: 5 },
  { id: 3, name: "Gym Workout", color: "bg-orange-500", streak: 8 },
  { id: 4, name: "Meditation", color: "bg-teal-500", streak: 21 },
];

export default function HabitsPage() {
  const [completions, setCompletions] = useState<boolean[][]>([]);

  useEffect(() => {
    // Generate deterministic dummy data on client side only to avoid hydration mismatch
    const data = habits.map(() =>
      Array.from({ length: 31 }, () => Math.random() > 0.3)
    );
    setCompletions(data);
  }, []);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div><h1 className="text-4xl font-extrabold text-white">Habit <GradientText>Grid</GradientText></h1><p className="text-slate-400 mt-2">Track your daily consistency.</p></div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl premium-gradient text-white font-bold"><Plus className="w-5 h-5" /> Add New</button>
      </div>
      <GlassCard className="overflow-x-auto">
        <div className="min-w-[800px] grid grid-cols-[200px_repeat(31,1fr)] gap-2">
          <div className="text-xs font-bold text-slate-500 uppercase">Habit</div>
          {Array.from({length:31}).map((_, i) => <div key={i} className="text-center text-[10px] text-slate-500 font-bold">{i+1}</div>)}
          {habits.map((h, habitIndex) => (
            <React.Fragment key={h.id}>
              <div className="flex flex-col"><span className="text-sm font-bold text-white">{h.name}</span><span className="text-[10px] text-slate-500 uppercase">{h.streak}d streak</span></div>
              {Array.from({length:31}).map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className={cn(
                    "aspect-square rounded-sm transition-colors",
                    completions[habitIndex]?.[i] ? h.color : "bg-white/5"
                  )}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
