import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type Props = {
  label: string;
  level: number; // 0-100
  className?: string;
};

export default function SkillBar({ label, level, className }: Props) {
  const { isVisible, onRef } = useReveal({ rootMargin: "-20% 0px", threshold: 0.2 });
  const safe = Math.max(0, Math.min(100, level));
  return (
    <div ref={onRef as any} className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{safe}%</p>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
        <div
          role="progressbar"
          aria-label={label}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={safe}
          className="h-full w-full origin-left rounded-full btn-gradient transition-transform duration-700 ease-out"
          style={{ transform: `scaleX(${isVisible ? safe / 100 : 0})` }}
        />
      </div>
    </div>
  );
}
