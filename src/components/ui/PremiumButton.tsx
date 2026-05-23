 "use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const PremiumButton = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: PremiumButtonProps) => {
  const variants = {
    primary: "premium-gradient text-white shadow-lg shadow-brand-blue/20 border-none",
    secondary: "bg-white/10 text-white hover:bg-white/20 border-white/10",
    outline: "bg-transparent border border-white/20 text-white hover:border-brand-blue/50",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5 border-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props as any}
    >
      {children}
    </motion.button>
  );
};
