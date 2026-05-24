 "use client";
import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Search, Plus } from "lucide-react";
import ReactMarkdown from "react-markdown";

const recentNotes = [
  { id: 1, title: "Product Strategy 2024", date: "Oct 22", tags: ["Work", "Plan"], content: "# Product Strategy 2024\\n\\nOur core focus for 2024 is high-retention habit loops.\\n\\n1. Frictionless Onboarding\\n2. AI-Driven Recommendations\\n3. Social Accountability\\n\\nWe need to emphasize the **System over Goals** philosophy." },
  { id: 2, title: "Book Notes: Atomic Habits", date: "Oct 21", tags: ["Personal", "Learning"], content: "# Atomic Habits\\n\\nKey takeaways:\\n\\n- Small changes make a big difference.\\n- Build systems, not goals.\\n- Habit stacking works." },
];

export default function NotesPage() {
  const [activeNote, setActiveNote] = useState(recentNotes[0]);
  const [isPreview, setIsPreview] = useState(false);

  return (
    <div className="h-[calc(100vh-160px)] flex gap-8">
      <div className="w-80 flex flex-col gap-6">
        <GlassCard className="flex items-center gap-3 p-3">
          <Search className="w-4 h-4 text-slate-500 ml-2" />
          <input type="text" placeholder="Search notes..." className="bg-transparent border-none text-sm text-white w-full focus:outline-none" />
        </GlassCard>
        <GlassCard className="flex-1 p-0 flex flex-col overflow-hidden">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-bold text-white text-sm">Library</h3>
            <Plus className="w-4 h-4 text-brand-blue cursor-pointer" />
          </div>
          <div className="p-4 space-y-2">
            {recentNotes.map(note => (
              <div
                key={note.id}
                onClick={() => setActiveNote(note)}
                className={`p-3 rounded-xl cursor-pointer transition-all ${activeNote.id === note.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
              >
                <p className="text-sm font-bold text-white">{note.title}</p>
                <p className="text-[10px] text-slate-500 uppercase mt-1">{note.date}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
      <GlassCard className="flex-1 p-12 flex flex-col relative">
        <div className="absolute top-6 right-6 flex gap-2">
          <button
            onClick={() => setIsPreview(!isPreview)}
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10"
          >
            {isPreview ? 'Edit' : 'Preview'}
          </button>
        </div>

        {isPreview ? (
          <div className="prose prose-invert max-w-none flex-1 overflow-y-auto">
            <ReactMarkdown>{activeNote.content.replace(/\\\\n/g, '\\n')}</ReactMarkdown>
          </div>
        ) : (
          <>
            <input
              type="text"
              value={activeNote.title}
              onChange={(e) => setActiveNote({...activeNote, title: e.target.value})}
              className="text-4xl font-extrabold bg-transparent border-none text-white w-full focus:outline-none mb-8"
            />
            <textarea
              className="flex-1 bg-transparent border-none text-slate-300 leading-relaxed resize-none text-lg focus:outline-none"
              value={activeNote.content.replace(/\\\\n/g, '\\n')}
              onChange={(e) => setActiveNote({...activeNote, content: e.target.value})}
            />
          </>
        )}
      </GlassCard>
    </div>
  );
}
