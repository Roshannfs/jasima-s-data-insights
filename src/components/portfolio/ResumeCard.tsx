import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function ResumeCard() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Card className="glass gradient-border overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 opacity-70 [background:radial-gradient(700px_circle_at_20%_20%,hsl(var(--brand-teal)/0.18),transparent_60%),radial-gradient(700px_circle_at_80%_10%,hsl(var(--brand-rose)/0.16),transparent_60%)]" />
          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-2 text-xl">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl btn-gradient-soft border border-border/70">
                <FileText className="text-foreground" />
              </span>
              Resume
            </CardTitle>
          </CardHeader>
          <CardContent className="relative space-y-4">
            <p className="text-sm text-muted-foreground">
              Download my latest resume as a PDF. It includes my education, skills, internships, and project highlights.
            </p>

            <motion.div
              whileHover={reduce ? undefined : { y: -2 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-border/70 bg-surface/40 p-4"
            >
              <p className="text-sm font-medium">Jasima_Jasmine_CV.pdf</p>
              <p className="mt-1 text-xs text-muted-foreground">Updated • ATS-friendly • Clean layout</p>
            </motion.div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" className="sm:w-auto">
                <a href="/Jasima_Jasmine_CV.pdf" download>
                  <Download /> Download resume
                </a>
              </Button>
              <Button asChild variant="outlineGlow" className="sm:w-auto">
                <a href="#contact">Hire Me</a>
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}
