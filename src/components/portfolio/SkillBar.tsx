import { cn } from "@/lib/utils";

type Props = {
  label: string;
  level: number; // 0-100
  className?: string;
};

export default function SkillBar({ label, level, className }: Props) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{level}%</p>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full w-full origin-left scale-x-0 rounded-full btn-gradient transition-transform duration-700 ease-out"
          style={{ transform: `scaleX(${Math.max(0, Math.min(100, level)) / 100})` }}
        />
      </div>
    </div>
  );
}
