import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle, className }: Props) {
  return (
    <header className={cn("mb-10 md:mb-12", className)}>
      {eyebrow ? (
        <p className="text-sm font-medium tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p> : null}
    </header>
  );
}
