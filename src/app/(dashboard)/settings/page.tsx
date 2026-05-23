"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { User, Palette, Bell } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8 pb-12">
      <h1 className="text-4xl font-extrabold text-white">System <GradientText>Settings</GradientText></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="space-y-2">{[{ label: "Profile", icon: User, active: true }, { label: "Appearance", icon: Palette }, { label: "Notifications", icon: Bell }].map(item => (<div key={item.label} className={cn("flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all", item.active ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5")}><item.icon className="w-4 h-4" /><span className="text-sm font-medium">{item.label}</span></div>))}</div>
         <GlassCard className="md:col-span-2 space-y-8">
            <div><h3 className="text-lg font-bold text-white mb-6">Public Profile</h3><div className="flex items-center gap-6 mb-8"><div className="w-20 h-20 rounded-full premium-gradient flex items-center justify-center text-2xl font-bold text-white">NS</div><button className="px-4 py-2 rounded-lg bg-white/5 text-xs text-white">Change Avatar</button></div><div className="space-y-4"><div className="space-y-1"><label className="text-[10px] text-slate-500 font-bold uppercase">Full Name</label><input type="text" defaultValue="Sadiq" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none" /></div></div><div className="mt-8 flex justify-end"><button className="px-6 py-2.5 rounded-xl premium-gradient text-white font-bold text-sm">Save Changes</button></div></div>
            <div className="pt-8 border-t border-white/5"><h3 className="text-lg font-bold text-white mb-4">Appearance</h3><div className="flex gap-4"><div className="w-10 h-10 rounded-full bg-brand-blue border-2 border-white shadow-lg shadow-brand-blue/40" /><div className="w-10 h-10 rounded-full bg-purple-500" /><div className="w-10 h-10 rounded-full bg-emerald-500" /></div></div>
         </GlassCard>
      </div>
    </div>
  );
}
