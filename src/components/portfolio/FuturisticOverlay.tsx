import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/**
 * Futuristic, lightweight overlay:
 * - rotating neon ring
 * - scanning beam
 * - subtle data lines
 * Pure CSS (fast) and pointer-events-none.
 */
export default function FuturisticOverlay({ className }: Props) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {/* Neon ring */}
      <div className="absolute left-[6%] top-[10%] hidden h-[360px] w-[360px] rounded-full opacity-70 blur-[0.5px] md:block">
        <div className="absolute inset-0 rounded-full border border-border/50" />
        <div className="absolute inset-0 rounded-full opacity-85 animate-spin-slow [background:conic-gradient(from_180deg,hsl(var(--brand-teal)/0.0),hsl(var(--brand-teal)/0.55),hsl(var(--brand-rose)/0.45),hsl(var(--brand-coral)/0.35),hsl(var(--brand-teal)/0.0))]" />
        <div className="absolute inset-8 rounded-full border border-border/40" />
        <div className="absolute inset-12 rounded-full opacity-60 blur-2xl [background:radial-gradient(circle_at_50%_50%,hsl(var(--brand-teal)/0.20),transparent_60%)]" />
      </div>

      {/* Scanning beam */}
      <div className="absolute inset-0 hidden overflow-hidden md:block">
        <div className="absolute left-1/2 top-[26%] h-[1px] w-[820px] -translate-x-1/2 opacity-35 [background:linear-gradient(90deg,transparent,hsl(var(--brand-teal)/0.75),transparent)]" />
        <div className="absolute left-1/2 top-[26%] h-[120px] w-[520px] -translate-x-1/2 opacity-25 blur-2xl animate-scan [background:linear-gradient(90deg,transparent,hsl(var(--brand-rose)/0.22),transparent)]" />
      </div>

      {/* Data lines */}
      <div className="absolute bottom-[10%] left-[8%] hidden w-[520px] opacity-45 md:block">
        <div className="h-px w-full [background:linear-gradient(90deg,transparent,hsl(var(--border)/0.7),transparent)]" />
        <div className="mt-4 h-px w-10/12 [background:linear-gradient(90deg,transparent,hsl(var(--brand-rose)/0.45),transparent)]" />
        <div className="mt-4 h-px w-8/12 [background:linear-gradient(90deg,transparent,hsl(var(--brand-teal)/0.50),transparent)]" />
      </div>
    </div>
  );
}
