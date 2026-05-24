 "use client";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Trophy, Zap, Target, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import { toast } from "sonner";

export default function AchievementsPage() {
  const handleClaim = (name: string) => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#3b82f6', '#22d3ee']
    });
    toast.success(`Achievement Claimed: ${name}!`);
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div><h1 className="text-4xl font-extrabold text-white">Your <GradientText>Legacy</GradientText></h1><p className="text-slate-400 mt-2">Badges of honor for your consistent discipline.</p></div>
        <GlassCard className="py-2 px-4 flex items-center gap-2"><Trophy className="text-yellow-500 w-5 h-5" /><span className="font-bold text-white">12,450 XP</span></GlassCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Early Riser", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10", desc: "Wake up at 5 AM for 7 days straight" },
          { name: "Deep Focus", icon: Target, color: "text-brand-blue", bg: "bg-brand-blue/10", desc: "Complete 100 hours of deep work" },
          { name: "Legendary", icon: Star, color: "text-purple-500", bg: "bg-purple-500/10", desc: "Maintain a 100-day habit streak" }
        ].map((a, i) => (
          <GlassCard
            key={i}
            className="flex flex-col gap-4 group cursor-pointer hover:border-brand-blue/30"
            onClick={() => handleClaim(a.name)}
          >
            <div className="flex items-center gap-4">
              <div className={cn("p-4 rounded-2xl transition-transform group-hover:scale-110", a.bg, a.color)}>
                <a.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{a.name}</h3>
                <p className="text-xs text-slate-500 uppercase mt-1">Unlocked Oct 12</p>
              </div>
            </div>
            <p className="text-sm text-slate-400">{a.desc}</p>
            <div className="mt-2 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
               <div className="h-full premium-gradient w-full" />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
