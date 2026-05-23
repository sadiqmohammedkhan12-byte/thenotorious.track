 "use client";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Search, Plus } from "lucide-react";

export default function NotesPage() {
  return (
    <div className="h-[calc(100vh-160px)] flex gap-8">
      <div className="w-80 flex flex-col gap-6">
        <GlassCard className="flex items-center gap-3 p-3"><Search className="w-4 h-4 text-slate-500 ml-2" /><input type="text" placeholder="Search notes..." className="bg-transparent border-none text-sm text-white w-full focus:outline-none" /></GlassCard>
        <GlassCard className="flex-1 p-0 flex flex-col overflow-hidden"><div className="p-6 border-b border-white/5 flex items-center justify-between"><h3 className="font-bold text-white text-sm">Library</h3><Plus className="w-4 h-4 text-brand-blue cursor-pointer" /></div><div className="p-4 space-y-2"><div className="p-3 rounded-xl hover:bg-white/5 cursor-pointer"><p className="text-sm font-bold text-white">Product Strategy 2024</p><p className="text-[10px] text-slate-500 uppercase mt-1">Oct 22</p></div></div></GlassCard>
      </div>
      <GlassCard className="flex-1 p-12 flex flex-col"><input type="text" defaultValue="Product Strategy 2024" className="text-4xl font-extrabold bg-transparent border-none text-white w-full focus:outline-none mb-8" /><textarea className="flex-1 bg-transparent border-none text-slate-300 leading-relaxed resize-none text-lg focus:outline-none" defaultValue="Our core focus for 2024 is high-retention habit loops..." /></GlassCard>
    </div>
  );
}
