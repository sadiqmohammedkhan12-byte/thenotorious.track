 "use client";
import React, { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientText } from "@/components/ui/GradientText";
import { ListTodo, Plus, Flag, Calendar, CheckCircle2, Circle, MoreVertical, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  date: string;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('nt-tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      const initial: Task[] = [
        { id: '1', title: "Design Landing Page", status: "todo", priority: "high", date: "Oct 24" },
        { id: '2', title: "API Integration", status: "in-progress", priority: "medium", date: "Oct 25" },
        { id: '3', title: "Setup Database", status: "done", priority: "high", date: "Oct 22" },
      ];
      setTasks(initial);
      localStorage.setItem('nt-tasks', JSON.stringify(initial));
    }
  }, []);

  const saveTasks = (updated: Task[]) => {
    setTasks(updated);
    localStorage.setItem('nt-tasks', JSON.stringify(updated));
  };

  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    const task: Task = {
      id: Date.now().toString(),
      title: newTaskTitle,
      status: 'todo',
      priority: 'medium',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
    saveTasks([task, ...tasks]);
    setNewTaskTitle('');
    toast.success("Task added");
  };

  const deleteTask = (id: string) => {
    saveTasks(tasks.filter(t => t.id !== id));
    toast.error("Task deleted");
  };

  const moveTask = (id: string, newStatus: Task['status']) => {
    saveTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Tasks & <GradientText>Execution</GradientText></h1>
          <p className="text-slate-400 mt-2">Break down your goals into actionable items.</p>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Quick add task..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-blue/50"
          />
          <button
            onClick={addTask}
            className="px-6 py-2 rounded-xl premium-gradient text-white font-bold text-sm"
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {(['todo', 'in-progress', 'done'] as const).map((status) => (
          <div key={status} className="space-y-4">
             <div className="flex items-center justify-between px-2">
                <h3 className="text-lg font-bold text-white uppercase tracking-widest text-sm flex items-center gap-2">
                  {status === 'todo' && <Circle className="w-4 h-4 text-slate-500" />}
                  {status === 'in-progress' && <div className="w-4 h-4 rounded-full border-2 border-brand-blue border-t-transparent animate-spin" />}
                  {status === 'done' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  {status.replace('-', ' ')}
                </h3>
                <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded-full text-slate-400">
                  {tasks.filter(t => t.status === status).length}
                </span>
             </div>

             <div className="space-y-4 min-h-[500px] bg-white/[0.02] rounded-3xl p-2 border border-dashed border-white/5">
               <AnimatePresence>
                 {tasks
                   .filter(t => t.status === status)
                   .map(task => (
                     <motion.div
                       key={task.id}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, scale: 0.95 }}
                       layout
                     >
                       <GlassCard className="p-5 group relative overflow-hidden">
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="font-bold text-white group-hover:text-brand-blue transition-colors leading-snug">{task.title}</h4>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                               {status !== 'done' && (
                                 <button onClick={() => moveTask(task.id, status === 'todo' ? 'in-progress' : 'done')} className="p-1.5 hover:bg-white/10 rounded-lg text-emerald-500">
                                   <CheckCircle2 className="w-4 h-4" />
                                 </button>
                               )}
                               <button onClick={() => deleteTask(task.id)} className="p-1.5 hover:bg-white/10 rounded-lg text-red-500">
                                 <Trash2 className="w-4 h-4" />
                               </button>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 mt-6">
                            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-bold uppercase">
                               <Calendar className="w-3 h-3" />
                               {task.date}
                            </div>
                            <div className={cn(
                              "text-[10px] font-bold uppercase px-2 py-0.5 rounded-full",
                              task.priority === "high" ? "bg-red-500/10 text-red-500" :
                              task.priority === "medium" ? "bg-yellow-500/10 text-yellow-500" :
                              "bg-blue-500/10 text-blue-500"
                            )}>
                               {task.priority}
                            </div>
                          </div>

                          <div className={cn(
                            "absolute bottom-0 left-0 w-full h-1 opacity-20",
                            status === 'done' ? 'bg-emerald-500' : status === 'in-progress' ? 'bg-brand-blue' : 'bg-slate-700'
                          )} />
                       </GlassCard>
                     </motion.div>
                   ))}
               </AnimatePresence>

               {tasks.filter(t => t.status === status).length === 0 && (
                 <div className="py-12 text-center text-slate-600 text-sm italic">
                   No tasks here
                 </div>
               )}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
