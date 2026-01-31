import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tools: string[];
  outcome: string;
  highlights?: string[];
  imageSrc: string;
  href?: string;
  className?: string;
};

export default function ProjectCard({
  title,
  description,
  tools,
  outcome,
  highlights,
  imageSrc,
  href = "#contact",
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "glass gradient-border futuristic-frame overflow-hidden transition-transform duration-300 hover:translate-y-[-2px]",
        className,
      )}
    >
      <div className="relative">
        <img
          src={imageSrc}
          alt={`${title} project preview`}
          loading="lazy"
          className="h-48 w-full object-cover md:h-52"
        />
        <div className="absolute inset-0 opacity-35 [background:radial-gradient(600px_circle_at_20%_10%,hsl(var(--brand-teal)/0.24),transparent_55%),radial-gradient(600px_circle_at_80%_20%,hsl(var(--brand-rose)/0.22),transparent_55%)]" />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/70 bg-surface/50 px-3 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {highlights?.length ? (
          <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}

        <p className="text-sm">
          <span className="text-muted-foreground">Outcome:</span> {outcome}
        </p>
        <Button asChild variant="soft" className="w-full">
          <a href={href}>
            View Project <ArrowUpRight />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
