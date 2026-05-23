 "use client";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Smartphone, Clock } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from "recharts";

const data = [{ name: "Social", value: 45, color: "#3b82f6" }, { name: "Prod", value: 120, color: "#22d3ee" }, { name: "Ent", value: 30, color: "#a855f7" }];

export default function ScreenTimePage() {
  return (
    <div className="space-y-8 pb-12">
      <h1 className="text-4xl font-extrabold text-white">Digital <GradientText>Balance</GradientText></h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="lg:col-span-2"><h3 className="text-xl font-bold text-white mb-8">Usage (min)</h3><div className="h-[300px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={data}><XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} /><Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: '#0a0e17', border: '1px solid rgba(255,255,255,0.1)'}} /><Bar dataKey="value" radius={[8, 8, 0, 0]}>{data.map((entry, index) => <Cell key={index} fill={entry.color} />)}</Bar></BarChart></ResponsiveContainer></div></GlassCard>
        <div className="space-y-6">
           <GlassCard className="text-center p-8"><Smartphone className="w-10 h-10 text-brand-blue mx-auto mb-4" /><p className="text-3xl font-bold text-white">3h 30m</p><p className="text-slate-400 text-sm">Total Today</p></GlassCard>
        </div>
      </div>
    </div>
  );
}
