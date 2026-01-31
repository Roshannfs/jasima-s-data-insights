import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/**
 * Subtle, GPU-friendly ambient background: gradients + floating shapes.
 * Signature moment: a soft spotlight (radial gradient) that follows the pointer.
 */
export default function DataBackdrop({ className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-70 [background:radial-gradient(1200px_circle_at_var(--mx,50%)_var(--my,15%),hsl(var(--brand-teal)/0.14),transparent_60%),radial-gradient(900px_circle_at_70%_30%,hsl(var(--brand-rose)/0.12),transparent_55%),radial-gradient(700px_circle_at_20%_70%,hsl(var(--brand-coral)/0.10),transparent_55%)]" />

      <div className="absolute -left-24 top-24 h-64 w-64 rounded-full blur-3xl bg-brand-teal/10 animate-drift" />
      <div className="absolute -right-16 top-40 h-72 w-72 rounded-full blur-3xl bg-brand-rose/10 animate-drift [animation-delay:-5s]" />
      <div className="absolute left-1/2 top-[62%] h-72 w-72 -translate-x-1/2 rounded-full blur-3xl bg-brand-coral/8 animate-float" />

      {/* Data-ish shapes */}
      <div className="absolute left-[8%] top-[18%] h-20 w-20 rounded-2xl border border-border/70 bg-surface/40 backdrop-blur-sm shadow-[0_12px_45px_-30px_hsl(var(--shadow-color)/0.9)] rotate-12 animate-float" />
      <div className="absolute right-[10%] top-[16%] h-24 w-24 rounded-full border border-border/70 bg-surface/30 backdrop-blur-sm shadow-[0_12px_45px_-30px_hsl(var(--shadow-color)/0.9)] animate-float [animation-delay:-3s]" />
      <div className="absolute right-[18%] top-[58%] h-28 w-28 rounded-2xl border border-border/70 bg-surface/30 backdrop-blur-sm shadow-[0_12px_45px_-30px_hsl(var(--shadow-color)/0.9)] -rotate-6 animate-float [animation-delay:-6s]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,hsl(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.18)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(closest-side_at_50%_30%,black,transparent)] [background-image:linear-gradient(90deg,transparent,hsla(0,0%,100%,0.05),transparent)] bg-[length:220%_100%] animate-shimmer" />
    </div>
  );
}
