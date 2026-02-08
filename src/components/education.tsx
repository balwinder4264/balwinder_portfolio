import { GlassCard } from "@/components/glass-card";
import { SectionHeading } from "@/components/section-heading";
import { M } from "@/components/motion";

export type EducationItem = {
  degree: string;
  program: string;
  school?: string;
  location?: string;
};

export function EducationSection({ items }: { items: EducationItem[] }) {
  return (
    <section id="education" className="scroll-mt-28 py-12">
      <SectionHeading
        eyebrow="Education"
        title="Education"
        description="Credentials and formal training."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it, idx) => (
          <M.div
            key={`${it.degree}-${it.program}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
                {it.degree}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                {it.program}
              </h3>
              {(it.school || it.location) && (
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                  {it.school ? it.school : ""}
                  {it.school && it.location ? " • " : ""}
                  {it.location ? it.location : ""}
                </p>
              )}
            </GlassCard>
          </M.div>
        ))}
      </div>
    </section>
  );
}
