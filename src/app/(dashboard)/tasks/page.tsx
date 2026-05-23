 "use client";
import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { ListTodo, Flag, Calendar } from "lucide-react";

export default function TasksPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between"><div><h1 className="text-4xl font-extrabold text-white">Tasks & <GradientText>Execution</GradientText></h1><p className="text-slate-400 mt-2">Break down your goals.</p></div><button className="px-6 py-3 rounded-xl premium-gradient text-white font-bold">+ New Task</button></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Todo", "In Progress", "Done"].map((status) => (
          <div key={status} className="space-y-4">
             <h3 className="text-lg font-bold text-white px-2">{status}</h3>
             <div className="space-y-4">
               {[{ title: "Design Landing Page", pri: "high", date: "Oct 24" }].map((task, i) => (
                 <GlassCard key={i} className="p-5 group"><h4 className="font-bold text-white mb-4">{task.title}</h4><div className="flex items-center gap-4 text-[10px] uppercase font-bold text-slate-500"><span>{task.date}</span><span className="text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full">{task.pri}</span></div></GlassCard>
               ))}
               <button className="w-full py-3 rounded-xl border border-dashed border-white/10 text-slate-500 text-sm">+ Add Card</button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
