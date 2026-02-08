"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-zinc-900 shadow-glass backdrop-blur-md transition hover:bg-white/15 dark:border-white/10 dark:text-zinc-50"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
    >
      {!mounted ? (
        <span className="h-4 w-4" />
      ) : current === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span className="hidden sm:inline">Theme</span>
    </button>
  );
}
