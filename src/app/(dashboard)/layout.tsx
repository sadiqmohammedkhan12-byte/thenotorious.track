 "use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  CheckCircle2,
  Moon,
  Smile,
  Droplets,
  Dumbbell,
  Smartphone,
  ListTodo,
  NotebookPen,
  Sparkles,
  LineChart as LucideLineChart,
  Trophy,
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  LogOut,
  User
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: CheckCircle2, label: "Habits", href: "/habits" },
  { icon: Moon, label: "Sleep", href: "/sleep" },
  { icon: Smile, label: "Mood", href: "/mood" },
  { icon: Droplets, label: "Water", href: "/water" },
  { icon: Dumbbell, label: "Workout", href: "/workout" },
  { icon: Smartphone, label: "Screen Time", href: "/screentime" },
  { icon: ListTodo, label: "Tasks", href: "/tasks" },
  { icon: NotebookPen, label: "Journal", href: "/notes" },
  { icon: LucideLineChart, label: "Analytics", href: "/analytics" },
  { icon: Sparkles, label: "AI Insights", href: "/ai" },
  { icon: Trophy, label: "Achievements", href: "/achievements" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-brand-black overflow-hidden">
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 260 }}
        className="relative flex flex-col border-r border-white/5 bg-brand-navy/50 backdrop-blur-xl z-50"
      >
        <div className="flex h-20 items-center px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg premium-gradient flex items-center justify-center shadow-lg shadow-brand-blue/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            {!isCollapsed && (
              <span className="text-xl font-bold tracking-tight text-white">
                Notorious<span className="premium-text-gradient">Track</span>
              </span>
            )}
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                  isActive ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}>
                  <item.icon className={cn("w-5 h-5", isActive ? "text-brand-blue" : "group-hover:text-brand-blue")} />
                  {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
                  {isActive && !isCollapsed && (
                    <motion.div layoutId="active-indicator" className="absolute right-2 w-1.5 h-1.5 rounded-full premium-gradient" />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/5">
          <div className={cn("flex items-center gap-3 p-2 rounded-xl bg-white/5", isCollapsed ? "justify-center" : "")}>
            <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue font-bold text-xs">NS</div>
            {!isCollapsed && <div className="flex-1 min-w-0"><p className="text-sm font-semibold text-white truncate">thenotorious.sadiq</p></div>}
          </div>
        </div>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="absolute -right-3 top-24 w-6 h-6 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 z-50 transition-colors">
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </motion.aside>
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-brand-black/50 backdrop-blur-md z-40">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input type="text" placeholder="Search anything..." className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-300 focus:outline-none focus:border-brand-blue/50 focus:bg-white/10 transition-all" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Bell className="w-5 h-5 cursor-pointer hover:text-white" />
            <Link href="/settings"><User className="w-5 h-5 cursor-pointer hover:text-white" /></Link>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8 relative">
          <AnimatePresence mode="wait">
            <motion.div key={pathname} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
