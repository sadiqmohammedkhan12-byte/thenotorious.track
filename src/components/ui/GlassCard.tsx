import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover && "hover:border-white/10 hover:shadow-2xl hover:shadow-brand-blue/10",
        className
      )}
    >
      {children}
    </div>
  );
};
