import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-border/60 py-10">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px opacity-70 [background:linear-gradient(90deg,transparent,hsl(var(--brand-teal)/0.6),hsl(var(--brand-rose)/0.55),transparent)]" />
      <div className="container-portfolio flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jasima Jasmine — Data Analyst & AI Enthusiast
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Built with a focus on clarity, curiosity, and impact.</p>
        </div>
        <Button asChild variant="outlineGlow" className="md:self-end">
          <a href="#home">
            Back to top <ArrowUpRight />
          </a>
        </Button>
      </div>
    </footer>
  );
}
