import React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span className={cn("premium-text-gradient font-bold", className)}>
      {children}
    </span>
  );
};
