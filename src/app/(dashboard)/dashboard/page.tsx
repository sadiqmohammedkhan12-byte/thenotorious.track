 "use client";
import React from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Flame, CheckCircle2, TrendingUp, Brain, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const performanceData = [
  { name: "Mon", score: 85 }, { name: "Tue", score: 72 }, { name: "Wed", score: 90 }, { name: "Thu", score: 95 }, { name: "Fri", score: 88 }, { name: "Sat", score: 65 }, { name: "Sun", score: 80 }
];

const StatCard = ({ icon: Icon, label, value, trend, colorClass }: any) => (
  <GlassCard className="flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <div className={cn("p-3 rounded-xl bg-white/5", colorClass)}><Icon className="w-6 h-6" /></div>
      {trend && <div className="text-emerald-400 text-xs font-medium bg-emerald-400/10 px-2 py-1 rounded-full flex items-center gap-1"><ArrowUpRight className="w-3 h-3" />{trend}</div>}
    </div>
    <div><p className="text-slate-400 text-sm">{label}</p><p className="text-2xl font-bold mt-1 text-white">{value}</p></div>
  </GlassCard>
);

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-12">
      <h1 className="text-4xl font-extrabold text-white tracking-tight">Welcome back, <GradientText>Sadiq</GradientText></h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard icon={Flame} label="Current Streak" value="18 Days" trend="+3" colorClass="text-orange-500" />
        <StatCard icon={CheckCircle2} label="Completion Rate" value="94.2%" trend="+2.4%" colorClass="text-emerald-500" />
        <StatCard icon={TrendingUp} label="Productivity" value="88/100" trend="+5" colorClass="text-brand-blue" />
        <StatCard icon={Brain} label="Focus Score" value="4.2h Avg" trend="+0.8h" colorClass="text-purple-500" />
      </div>
      <GlassCard className="h-[400px] w-full">
        <h3 className="text-xl font-bold text-white mb-8">Weekly Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={performanceData}>
            <defs><linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/><stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/></linearGradient></defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
            <Tooltip contentStyle={{ backgroundColor: '#0a0e17', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }} />
            <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
          </AreaChart>
        </ResponsiveContainer>
      </GlassCard>
    </div>
  );
}
