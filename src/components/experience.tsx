import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { M } from "@/components/motion";

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
};

export function ExperienceSection({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="scroll-mt-28 py-12">
      <SectionHeading
        eyebrow="Experience"
        title="Leadership and ownership"
        description="Recent role and responsibilities."
      />

      <div className="grid gap-6">
        {items.map((it, idx) => (
          <M.div
            key={`${it.company}-${it.period}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <GlassCard className="p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                  {it.role}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-200">
                  {it.company}
                  {it.location ? ` • ${it.location}` : ""} • {it.period}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {it.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </GlassCard>
          </M.div>
        ))}
      </div>
    </section>
  );
}
