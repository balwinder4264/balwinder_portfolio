"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = React.useState<string>("#about");

  React.useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.2, 0.35] },
    );

    for (const el of elements) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 mx-auto flex w-full max-w-5xl justify-center px-4">
      <div className="pointer-events-auto flex w-full items-center justify-between gap-4 rounded-full border border-white/15 bg-white/10 px-4 py-3 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <a
          href="#top"
          className="font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
        >
          Portfolio
        </a>
        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition",
                active === l.href
                  ? "bg-white/20 text-zinc-950 dark:bg-white/10 dark:text-zinc-50"
                  : "text-zinc-700 hover:bg-white/15 dark:text-zinc-300 dark:hover:bg-white/10",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2" />
      </div>
    </div>
  );
}
