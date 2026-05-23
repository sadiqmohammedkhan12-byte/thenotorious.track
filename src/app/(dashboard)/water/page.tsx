 "use client";
import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Plus, Minus } from "lucide-react";
import { CircularProgress } from "@/components/ui/CircularProgress";

export default function WaterPage() {
  const [intake, setIntake] = useState(2100);
  const goal = 3000;
  const percentage = Math.min((intake / goal) * 100, 100);

  return (
    <div className="space-y-8 pb-12 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white">Daily <GradientText>Hydration</GradientText></h1>
      <GlassCard className="mt-8 flex flex-col items-center p-12 w-full max-w-md">
         <CircularProgress progress={percentage} size={250} label={(intake/1000).toFixed(1) + "L"} subLabel={"Goal: " + (goal/1000).toFixed(1) + "L"} />
         <div className="flex items-center gap-8 mt-12">
           <button onClick={() => setIntake(Math.max(0, intake - 250))} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white"><Minus /></button>
           <button onClick={() => setIntake(intake + 250)} className="w-14 h-14 rounded-2xl premium-gradient flex items-center justify-center text-white"><Plus /></button>
         </div>
      </GlassCard>
    </div>
  );
}
