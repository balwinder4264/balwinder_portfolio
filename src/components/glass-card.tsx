import * as React from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        // Light mode glass
        "rounded-2xl border border-white/15 bg-white/10 shadow-glass backdrop-blur-xl",
        // Dark mode: MUCH brighter glass + bright border + stronger blur + deeper shadow
        "dark:bg-white/[0.15] dark:border-white/[0.30] dark:backdrop-blur-2xl dark:shadow-[0_20px_55px_rgba(0,0,0,0.65)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
