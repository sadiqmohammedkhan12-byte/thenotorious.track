 "use client";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts";

const performanceData = [ { subject: 'Focus', A: 120 }, { subject: 'Sleep', A: 98 }, { subject: 'Health', A: 86 }, { subject: 'Learning', A: 99 }, { subject: 'Discipline', A: 85 }, { subject: 'Social', A: 65 } ];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 pb-12">
      <h1 className="text-4xl font-extrabold text-white">Advanced <GradientText>Analytics</GradientText></h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard><h3 className="text-xl font-bold text-white mb-8 text-center">Performance Spectrum</h3><div className="h-[400px]"><ResponsiveContainer width="100%" height="100%"><RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}><PolarGrid stroke="rgba(255,255,255,0.1)" /><PolarAngleAxis dataKey="subject" tick={{fill: '#64748b', fontSize: 12}} /><Radar name="Sadiq" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} /></RadarChart></ResponsiveContainer></div></GlassCard>
      </div>
    </div>
  );
}
