 "use client";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Moon, Zap, TrendingUp } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, CartesianGrid } from "recharts";

const data = [{ day: "Mon", hours: 7.2 }, { day: "Tue", hours: 6.5 }, { day: "Wed", hours: 8.1 }, { day: "Thu", hours: 7.8 }, { day: "Fri", hours: 6.2 }, { day: "Sat", hours: 9.0 }, { day: "Sun", hours: 8.5 }];

export default function SleepPage() {
  return (
    <div className="space-y-8 pb-12">
      <h1 className="text-4xl font-extrabold text-white">Sleep <GradientText>Analytics</GradientText></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="text-center p-8"><Moon className="w-10 h-10 text-purple-400 mx-auto mb-4" /><p className="text-3xl font-bold text-white">7.4h</p><p className="text-slate-400 text-sm">Avg. Duration</p></GlassCard>
        <GlassCard className="text-center p-8"><Zap className="w-10 h-10 text-brand-blue mx-auto mb-4" /><p className="text-3xl font-bold text-white">88%</p><p className="text-slate-400 text-sm">Quality Score</p></GlassCard>
        <GlassCard className="text-center p-8"><TrendingUp className="w-10 h-10 text-emerald-400 mx-auto mb-4" /><p className="text-3xl font-bold text-white">+12%</p><p className="text-slate-400 text-sm">Improvement</p></GlassCard>
      </div>
      <GlassCard className="p-8">
        <h3 className="text-xl font-bold text-white mb-8">Weekly Trends</h3>
        <div className="h-[350px]"><ResponsiveContainer width="100%" height="100%"><AreaChart data={data}><XAxis dataKey="day" hide /><Tooltip contentStyle={{backgroundColor: '#0a0e17', border: '1px solid rgba(255,255,255,0.1)'}} /><Area type="monotone" dataKey="hours" stroke="#a855f7" fill="#a855f720" strokeWidth={3} /></AreaChart></ResponsiveContainer></div>
      </GlassCard>
    </div>
  );
}
