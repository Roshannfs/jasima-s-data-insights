import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, Linkedin } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

type Props = {
  className?: string;
};

export default function PortfolioNav({ className }: Props) {
  return (
    <div className={cn("sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl relative", className)}>
      <div className="container-portfolio flex h-16 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          <span className="gradient-text">Jasima</span> <span className="text-muted-foreground">Jasmine</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outlineGlow" size="icon" aria-label="Email">
            <a href="mailto:rabijasima2@gmail.com">
              <Mail />
            </a>
          </Button>
          <Button asChild variant="outlineGlow" size="icon" aria-label="LinkedIn">
            <a href="#contact">
              <Linkedin />
            </a>
          </Button>
        </div>
      </div>

      {/* Ambient futuristic scanline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[1200px] -translate-x-1/2 opacity-60 [background:linear-gradient(90deg,transparent,hsl(var(--brand-teal)/0.55),hsl(var(--brand-rose)/0.45),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[520px] -translate-x-1/2 opacity-35 animate-scan [background:linear-gradient(90deg,transparent,hsl(var(--brand-teal)/0.7),transparent)]"
      />
    </div>
  );
}
