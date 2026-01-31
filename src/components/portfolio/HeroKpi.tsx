import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  value: string;
  hint?: string;
  className?: string;
};

export default function HeroKpi({ icon: Icon, label, value, hint, className }: Props) {
  return (
    <div className={cn("glass gradient-border rounded-2xl p-4", className)}>
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl btn-gradient-soft border border-border/70">
          <Icon className="text-foreground" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground">{label}</p>
          <p className="mt-1 text-lg font-semibold leading-none">{value}</p>
          {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
        </div>
      </div>
    </div>
  );
}
