import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
};

type Props = {
  items: ExperienceItem[];
  className?: string;
};

export default function ExperienceTimeline({ items, className }: Props) {
  const reduce = useReducedMotion();
  return (
    <ol className={cn("relative space-y-6", className)}>
      <div className="absolute left-3 top-1 h-[calc(100%-8px)] w-px bg-border/70" aria-hidden="true" />
      {items.map((it, idx) => (
        <motion.li
          key={`${it.role}-${it.company}-${it.duration}`}
          className="relative pl-12"
          initial={reduce ? undefined : { opacity: 0, y: 14, filter: "blur(5px)" }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center">
            <div className="h-3 w-3 rounded-full btn-gradient shadow-[0_0_0_6px_hsl(var(--brand-teal)/0.08)]" />
          </div>
          <div className="glass gradient-border rounded-2xl p-5 transition-transform duration-300 hover:translate-y-[-2px]">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <p className="text-base font-semibold">{it.role}</p>
              <p className="text-sm text-muted-foreground">{it.duration}</p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{it.company}</p>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              {it.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
