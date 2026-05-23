 "use client";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Sparkles, Brain, MessageSquare, Send } from "lucide-react";

export default function AIPage() {
  return (
    <div className="space-y-8 pb-12">
      <h1 className="text-4xl font-extrabold text-white">Neural <GradientText>Insights</GradientText></h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="bg-brand-indigo/5 border-brand-indigo/20 p-8 flex items-center gap-6"><Brain className="w-12 h-12 text-brand-indigo shrink-0" /><div><h3 className="text-xl font-bold text-white mb-2">Productivity Persona</h3><p className="text-slate-300">You are a <span className="text-brand-indigo font-bold">Deep Work Architect</span>. You excel in sustained focus sessions.</p></div></GlassCard>
          <GlassCard className="p-0 overflow-hidden border-brand-blue/20">
             <div className="p-4 bg-brand-blue/10 border-b border-brand-blue/20 flex items-center gap-2"><MessageSquare className="w-4 h-4 text-brand-blue" /><span className="text-xs font-bold text-brand-blue uppercase">AI Coaching Session</span></div>
             <div className="p-8 h-64 overflow-y-auto space-y-6 text-sm"><div className="flex gap-4"><div className="w-8 h-8 rounded-full premium-gradient shrink-0 flex items-center justify-center text-white"><Sparkles className="w-4 h-4" /></div><div className="bg-white/5 p-4 rounded-2xl rounded-tl-none text-slate-300 max-w-[80%]">Hello Sadiq! Ready to analyze your weekly velocity?</div></div></div>
             <div className="p-4 bg-white/5 border-t border-white/10 flex gap-4"><input type="text" placeholder="Ask AI anything..." className="flex-1 bg-transparent border-none text-sm focus:outline-none text-white" /><button className="p-2 rounded-xl premium-gradient text-white"><Send className="w-4 h-4" /></button></div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
