 "use client";
import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { Sparkles, Brain, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

export default function AIPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello Sadiq! I've analyzed your performance data from the last 7 days. Your discipline velocity is up by 8.4%. Ready to dive into the details?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      setMessages([...newMessages, {
        role: 'assistant',
        text: "That's a great point. Based on your current trajectory, focusing on your sleep consistency will have the highest ROI for your productivity next week. Should we set a new target for your wind-down routine?"
      }]);
      toast.success("AI Insight Generated");
    }, 1000);
  };

  return (
    <div className="space-y-8 pb-12">
      <h1 className="text-4xl font-extrabold text-white">Neural <GradientText>Insights</GradientText></h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="bg-brand-indigo/5 border-brand-indigo/20 p-8 flex items-center gap-6">
            <Brain className="w-12 h-12 text-brand-indigo shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Productivity Persona</h3>
              <p className="text-slate-300">You are a <span className="text-brand-indigo font-bold">Deep Work Architect</span>. You excel in sustained focus sessions but tend to deprioritize small administrative tasks.</p>
            </div>
          </GlassCard>

          <GlassCard className="p-0 overflow-hidden border-brand-blue/20 flex flex-col h-[500px]">
             <div className="p-4 bg-brand-blue/10 border-b border-brand-blue/20 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-bold text-brand-blue uppercase">AI Coaching Session</span>
             </div>

             <div className="flex-1 p-8 overflow-y-auto space-y-6">
                {messages.map((m, i) => (
                  <div key={i} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold ${m.role === 'assistant' ? 'premium-gradient' : 'bg-brand-blue/20 text-brand-blue'}`}>
                      {m.role === 'assistant' ? <Sparkles className="w-4 h-4" /> : 'NS'}
                    </div>
                    <div className={`${m.role === 'assistant' ? 'bg-white/5 text-slate-300 rounded-tl-none' : 'bg-brand-blue/20 text-white rounded-tr-none'} p-4 rounded-2xl text-sm max-w-[80%]`}>
                      {m.text}
                    </div>
                  </div>
                ))}
             </div>

             <div className="p-4 bg-white/5 border-t border-white/10 flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask AI anything..."
                  className="flex-1 bg-transparent border-none text-sm focus:outline-none text-white"
                />
                <button
                  onClick={handleSend}
                  className="p-2 rounded-xl premium-gradient text-white shadow-lg shadow-brand-blue/20"
                >
                  <Send className="w-4 h-4" />
                </button>
             </div>
          </GlassCard>
        </div>

        <div className="space-y-6">
           <GlassCard className="bg-gradient-to-br from-brand-blue/20 to-transparent">
              <h3 className="font-bold text-white mb-4 italic">“Discipline is choosing between what you want now and what you want most.”</h3>
              <p className="text-xs text-slate-500 text-right">— Abraham Lincoln</p>
           </GlassCard>
           <GlassCard>
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest text-slate-500">Weekly Focus</h3>
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-300">Deep Work</span>
                    <span className="text-brand-blue font-bold">24h / 30h</span>
                 </div>
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue w-[80%]" />
                 </div>
              </div>
           </GlassCard>
        </div>
      </div>
    </div>
  );
}
