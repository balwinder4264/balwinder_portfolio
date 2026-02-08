"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm({ emailTo }: { emailTo: string }) {
  const disabled = !emailTo;
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (disabled) return;
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") || "");
        const email = String(fd.get("email") || "");
        const message = String(fd.get("message") || "");

        // Simple mailto fallback (no backend required)
        const subject = encodeURIComponent(`Portfolio message from ${name}`);
        const body = encodeURIComponent(`Email: ${email}\n\n${message}`);
        window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
      }}
    >
      <div className="grid gap-2">
        <label className="text-sm text-zinc-700 dark:text-zinc-300" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="h-11 rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-zinc-950 shadow-glass backdrop-blur-md outline-none placeholder:text-zinc-500 focus:border-indigo-500/50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
          placeholder="Jane Doe"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-700 dark:text-zinc-300" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-11 rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-zinc-950 shadow-glass backdrop-blur-md outline-none placeholder:text-zinc-500 focus:border-indigo-500/50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
          placeholder="jane@example.com"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-700 dark:text-zinc-300" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-zinc-950 shadow-glass backdrop-blur-md outline-none placeholder:text-zinc-500 focus:border-indigo-500/50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-50"
          placeholder="Tell me what you’re building..."
        />
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-50 shadow-glass transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950"
      >
        Send message <ArrowRight className="h-4 w-4" />
      </button>

      <p className="text-xs leading-5 text-zinc-600 dark:text-zinc-400">
        {disabled
          ? "Add your email in src/data/portfolio.ts to enable this form (mailto fallback)."
          : "This form uses a mailto fallback. Want a real form handler? I can add a Route Handler or integrate Resend."}
      </p>
    </form>
  );
}
