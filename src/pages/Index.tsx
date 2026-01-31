import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/portfolio/ContactForm";
import DataBackdrop from "@/components/portfolio/DataBackdrop";
import ExperienceTimeline, { type ExperienceItem } from "@/components/portfolio/ExperienceTimeline";
import Footer from "@/components/portfolio/Footer";
import PortfolioNav from "@/components/portfolio/PortfolioNav";
import ProjectCard from "@/components/portfolio/ProjectCard";
import SectionHeading from "@/components/portfolio/SectionHeading";
import SkillBar from "@/components/portfolio/SkillBar";
import HeroKpi from "@/components/portfolio/HeroKpi";
import HeroParticles from "@/components/portfolio/HeroParticles";
import HeroThreeIcons from "@/components/portfolio/HeroThreeIcons";
import ResumeCard from "@/components/portfolio/ResumeCard";
import jasimaPortrait from "@/assets/jasima-portrait.jpg";
import projectRealEstate from "@/assets/project-real-estate.jpg";
import projectTrendForge from "@/assets/project-trendforge.jpg";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Brain,
  Briefcase,
  Calendar,
  Database,
  Github,
  GraduationCap,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { motion, useReducedMotion } from "framer-motion";

const experiences: ExperienceItem[] = [
  {
    role: "Artificial Intelligence Intern",
    company: "Marchello Tech, Trichy",
    duration: "Internship",
    highlights: [
      "Assisted in building and testing early-stage AI solutions",
      "Prepared datasets and compared results across experiments",
      "Summarized findings clearly for mentor review",
    ],
  },
  {
    role: "Data Science & ML Intern",
    company: "Deyo Infotech",
    duration: "Internship",
    highlights: [
      "Worked end-to-end: cleaning, analysis, and feature preparation",
      "Built baseline ML models and evaluated using common metrics",
      "Improved data quality with structured preprocessing steps",
    ],
  },
  {
    role: "Machine Learning with Python Intern",
    company: "Training Program",
    duration: "Training",
    highlights: [
      "Practiced ML workflows in Python (data → model → evaluation)",
      "Compared models using accuracy/precision-recall style metrics",
      "Documented results for repeatable learning",
    ],
  },
  {
    role: "Digital Marketing Intern",
    company: "Dnyx Company",
    duration: "3 months",
    highlights: [
      "Tracked campaign metrics and summarized performance",
      "Interpreted engagement patterns to suggest improvements",
      "Supported reporting and iterative optimization",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "VDart",
    duration: "July–August 2025",
    highlights: [
      "Converted raw datasets into clear, decision-ready insights",
      "Built visual summaries for quick stakeholder understanding",
      "Supported data-driven recommendations with concise reporting",
    ],
  },
];

const services = [
  { icon: Database, title: "Data cleaning & preprocessing", desc: "Fix missing values, outliers, and inconsistencies for reliable analysis." },
  { icon: LineChart, title: "Exploratory data analysis", desc: "Explore trends, relationships, and drivers with structured EDA." },
  { icon: BarChart3, title: "Data visualization", desc: "Create clear charts that explain the story behind the numbers." },
  { icon: Sparkles, title: "Dashboard creation", desc: "Build dashboards that make metrics instantly understandable." },
  { icon: Brain, title: "Insight generation", desc: "Turn findings into actionable recommendations for decisions." },
  { icon: Briefcase, title: "Basic predictive analytics", desc: "Baseline ML models to forecast outcomes and support planning." },
];

function RevealSection({ id, className, children }: { id: string; className?: string; children: React.ReactNode }) {
  const { isVisible, onRef } = useReveal();
  return (
    <section
      id={id}
      ref={onRef as any}
      className={cn(
        "section-pad scroll-mt-20",
        isVisible ? "animate-fade-in" : "opacity-0 translate-y-3",
        className,
      )}
    >
      {children}
    </section>
  );
}

const Index = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Jasima Jasmine | Data Analyst & AI Enthusiast";
    const desc =
      "Portfolio of Jasima Jasmine — an aspiring Data Analyst and AI & Data Science student turning complex datasets into meaningful insights.";

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    ensureMeta("description", desc);
    ensureMeta("robots", "index,follow");
  }, []);

  const socials = useMemo(
    () => [
      { label: "LinkedIn", icon: Linkedin, href: "#contact" },
      { label: "Email", icon: Mail, href: "mailto:rabijasima2@gmail.com" },
      { label: "GitHub", icon: Github, href: "#contact" },
    ],
    [],
  );

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduce) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${mx}%`);
      el.style.setProperty("--my", `${Math.min(60, my)}%`);

      // Subtle 3D tilt for the portrait card
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      const rx = Math.max(-1, Math.min(1, -dy)) * 4; // degrees
      const ry = Math.max(-1, Math.min(1, dx)) * 5; // degrees
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
    };
    el.addEventListener("pointermove", onMove);
    const onLeave = () => {
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--ry", `0deg`);
    };
    el.addEventListener("pointerleave", onLeave);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <PortfolioNav />

      {/* Hero */}
      <header
        id="home"
        ref={(n) => {
          heroRef.current = n;
        }}
        className="relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0">
          <HeroParticles />
        </div>
        <DataBackdrop />
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <HeroThreeIcons />
        </div>
        <div className="container-portfolio relative section-pad pt-12 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-surface/40 px-4 py-2 text-xs text-muted-foreground backdrop-blur-sm animate-fade-up-sm">
                <span className="h-2 w-2 rounded-full bg-brand-teal shadow-[0_0_0_6px_hsl(var(--brand-teal)/0.10)]" />
                Available for internships & entry-level roles
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Trichy, India</span>
              </div>

              <div className="space-y-2 animate-fade-up [animation-delay:80ms]">
                <p className="text-sm font-medium tracking-[0.18em] text-muted-foreground">HI, I’M</p>
                <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Jasima <span className="gradient-text">Jasmine</span>
                </h1>
              </div>

              <div className="space-y-3 animate-fade-up [animation-delay:140ms]">
                <p className="text-lg text-muted-foreground md:text-xl">Data Analyst & AI Enthusiast</p>
                <p className="max-w-xl text-muted-foreground">
                  Turning data into impactful insights — from clean preprocessing to crisp dashboards and meaningful patterns.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row animate-fade-up [animation-delay:220ms]">
                <Button asChild variant="hero" size="lg">
                  <a href="#contact">Hire Me</a>
                </Button>
                <Button asChild variant="outlineGlow" size="lg">
                  <a href="/Jasima_Jasmine_CV.pdf" download>
                    Download CV
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2 animate-fade-up [animation-delay:300ms]">
                {socials.map((s) => (
                  <Button key={s.label} asChild variant="soft" size="sm">
                    <a href={s.href} aria-label={s.label}>
                      <s.icon />
                      {s.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] opacity-70 blur-2xl [background:radial-gradient(600px_circle_at_50%_30%,hsl(var(--brand-teal)/0.25),transparent_60%),radial-gradient(600px_circle_at_70%_20%,hsl(var(--brand-rose)/0.22),transparent_60%)]" />
              <div
                className={cn(
                  "glass gradient-border relative overflow-hidden rounded-[2rem]",
                  "transition-transform duration-300 ease-out",
                  "hover:scale-[1.01]",
                  "[transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]",
                  "animate-pop-in [animation-delay:140ms]",
                )}
              >
                <img
                  src={jasimaPortrait}
                  alt="Professional portrait of Jasima Jasmine"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  loading="eager"
                />
                <div className="absolute inset-0 opacity-35 [background:radial-gradient(700px_circle_at_20%_10%,hsl(var(--brand-teal)/0.18),transparent_55%),radial-gradient(700px_circle_at_80%_20%,hsl(var(--brand-rose)/0.16),transparent_55%)]" />
              </div>

              {/* Floating KPI cards */}
              <div className="pointer-events-none absolute -left-6 top-10 hidden md:block">
                <HeroKpi
                  icon={GraduationCap}
                  label="CGPA"
                  value="8.54"
                  hint="AI & Data Science"
                  className="w-[220px] animate-pop-in animate-float [animation-delay:240ms]"
                />
              </div>
              <div className="pointer-events-none absolute -right-6 top-20 hidden md:block">
                <HeroKpi
                  icon={Briefcase}
                  label="Experience"
                  value="5 Internships"
                  hint="AI • ML • Analytics"
                  className="w-[240px] animate-pop-in animate-float [animation-delay:320ms]"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 left-6 right-6 hidden md:block">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="glass gradient-border rounded-2xl p-4">
                    <p className="text-sm font-medium">Analytical mindset • Curious learner</p>
                    <p className="mt-1 text-sm text-muted-foreground">Exploring patterns in data to build clear decisions.</p>
                  </div>
                  <div className="glass gradient-border rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Expected graduation</p>
                      <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface/40 px-3 py-1 text-xs text-muted-foreground">
                        <Calendar className="h-4 w-4" /> 2026
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">Actively building projects in analytics & AI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* About */}
        <RevealSection id="about" className="container-portfolio">
          <SectionHeading
            eyebrow="ABOUT"
            title="Curiosity, structure, and impact"
            subtitle="I enjoy the full data journey — from messy raw files to clean visuals and practical insights that support confident decisions."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
              className="md:col-span-2"
            >
              <Card className="glass gradient-border">
                <CardHeader>
                  <CardTitle className="text-xl">Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    I’m Jasima Jasmine — an aspiring Data Analyst and AI & Data Science student who loves exploring complex datasets,
                    spotting patterns, and turning raw information into a story people can act on.
                  </p>
                  <p>
                    I focus on strong fundamentals: clean data, thoughtful analysis, clear visuals, and simple explanations. I’m actively
                    growing through internships and projects that build real-world confidence.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "Data cleaning",
                      "EDA",
                      "Dashboard thinking",
                      "Visualization",
                      "ML basics",
                      "Insight writing",
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-border/70 bg-surface/50 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-border/70 bg-surface/40 p-4">
                    <p className="text-sm font-medium text-foreground">Career objective</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      To contribute to data-driven decision making by delivering accurate analysis, clear dashboards, and actionable insights
                      — while continuously improving my technical and analytical skills.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Card className="glass gradient-border">
                <CardHeader>
                  <CardTitle className="text-xl">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-medium">B.Tech – Artificial Intelligence & Data Science</p>
                  <p className="text-muted-foreground">M.A.M College of Engineering and Technology</p>
                  <div className="mt-3 space-y-1 text-muted-foreground">
                    <p>
                      <span className="text-foreground">CGPA:</span> 8.54
                    </p>
                    <p>
                      <span className="text-foreground">Expected Graduation:</span> 2026
                    </p>
                  </div>

                  <div className="mt-5 rounded-2xl border border-border/70 bg-surface/40 p-4">
                    <p className="text-sm font-medium text-foreground">Achievements</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Internship experience across AI, ML, analytics, and reporting — always with clarity-first outputs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </RevealSection>

        {/* Skills */}
        <RevealSection id="skills" className="container-portfolio">
          <SectionHeading
            eyebrow="SKILLS"
            title="Skills that ship insights"
            subtitle="I combine strong programming basics with practical analytics skills — focusing on clean workflows, reliable results, and readable visuals."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="glass gradient-border">
              <CardHeader>
                <CardTitle className="text-xl">Programming & Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <SkillBar label="Python" level={82} />
                <SkillBar label="Java" level={70} />
                <SkillBar label="C / C++" level={66} />
                <SkillBar label="Git / GitHub" level={72} />
                <SkillBar label="VS Code" level={80} />

                <div className="pt-2">
                  <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground">HABITS</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Version-controlled work, clear documentation, and repeatable analysis steps.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="glass gradient-border">
              <CardHeader>
                <CardTitle className="text-xl">Data & Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <SkillBar label="Data Analysis" level={84} />
                <SkillBar label="Data Visualization" level={78} />
                <SkillBar label="Excel" level={80} />
                <SkillBar label="Machine Learning" level={68} />
                <SkillBar label="TensorFlow (Basic)" level={55} />

                <div className="pt-2">
                  <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground">FOCUS</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Clear charts, clean datasets, and insights that answer real questions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </RevealSection>

        {/* Experience */}
        <RevealSection id="experience" className="container-portfolio">
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Experience that builds confidence"
            subtitle="Internships and training where I practiced analysis, reporting, and delivering work that’s easy for stakeholders to use." />
          <ExperienceTimeline items={experiences} />
        </RevealSection>

        {/* Projects */}
        <RevealSection id="projects" className="container-portfolio">
          <SectionHeading
            eyebrow="PROJECTS"
            title="Projects with a purpose"
            subtitle="I like building insight-first dashboards and visual stories — the kind that help people decide faster." />
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Real Estate Data App (Flutter)"
              description="A dashboard concept for property analytics — focused on trend discovery, comparison, and quick KPIs."
              tools={["Flutter", "Dashboard UI", "Analytics", "Visualization"]}
              highlights={["KPI-first layout for faster scanning", "Trend and comparison views for decision making", "Premium dark UI with clear visual hierarchy"]}
              outcome="Delivered a clean, insight-led dashboard design that makes market patterns easy to read."
              imageSrc={projectRealEstate}
            />
            <ProjectCard
              title="TrendForge"
              description="A trend analysis + visualization concept that emphasizes readability, comparison, and narrative clarity."
              tools={["Trend Analysis", "Visualization", "KPIs", "Dashboard Thinking"]}
              highlights={["Readable chart system (lines, heatmaps, KPIs)", "Designed for quick comparisons", "Story-first visuals with subtle premium polish"]}
              outcome="Created a modern visual language for trend storytelling with high clarity and minimal clutter."
              imageSrc={projectTrendForge}
            />
          </div>
        </RevealSection>

        {/* Resume */}
        <RevealSection id="resume" className="container-portfolio">
          <SectionHeading
            eyebrow="RESUME"
            title="Download my resume"
            subtitle="A quick PDF version of my profile, education, skills, and experience — ready to share." />
          <ResumeCard />
        </RevealSection>

        {/* Services */}
        <RevealSection id="services" className="container-portfolio">
          <SectionHeading
            eyebrow="SERVICES"
            title="How I can help"
            subtitle="Practical analytics services focused on accuracy, clarity, and actionable outcomes." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <Card
                key={s.title}
                className="glass gradient-border transition-transform duration-300 hover:translate-y-[-2px]"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl btn-gradient-soft border border-border/70 shadow-[0_18px_60px_-40px_hsl(var(--shadow-color)/0.9)]">
                      <s.icon className="text-foreground" />
                    </span>
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-3 rounded-2xl border border-border/70 bg-surface/40 p-5 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-medium">Want a quick, clear analysis?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Share your dataset + goal — I’ll reply with a plan for cleaning, EDA, and visuals.
              </p>
            </div>
            <Button asChild variant="hero" className="md:self-end">
              <a href="#contact">Request a quote</a>
            </Button>
          </div>
        </RevealSection>

        {/* Contact */}
        <RevealSection id="contact" className="container-portfolio">
          <SectionHeading
            eyebrow="CONTACT"
            title="Let’s connect"
            subtitle="Recruiters, collaborators, and clients — I’d love to hear from you." />
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass gradient-border overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="rounded-2xl border border-border/70 bg-surface/40 p-4">
                  <p className="text-sm font-medium">Quick note</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    I’m open to internships, entry-level roles, and freelance analytics work. I respond as soon as possible.
                  </p>
                </div>
                <a
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-surface/40 p-4 text-muted-foreground transition-colors hover:bg-accent/30"
                  href="mailto:rabijasima2@gmail.com"
                >
                  <Mail className="text-foreground" />
                  <span>
                    <span className="text-foreground">Email</span>
                    <br />
                    rabijasima2@gmail.com
                  </span>
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-surface/40 p-4 text-muted-foreground">
                  <Phone className="text-foreground" />
                  <span>
                    <span className="text-foreground">Phone</span>
                    <br />
                    +91-9361896120
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-surface/40 p-4 text-muted-foreground">
                  <MapPin className="text-foreground" />
                  <span>
                    <span className="text-foreground">Location</span>
                    <br />
                    Trichy, India
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Button asChild variant="soft" className="w-full">
                    <a href="mailto:rabijasima2@gmail.com" aria-label="Email Jasima Jasmine">
                      <Mail />
                      Email
                    </a>
                  </Button>
                  <Button asChild variant="soft" className="w-full">
                    <a href="#contact" aria-label="LinkedIn Jasima Jasmine">
                      <Linkedin />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass gradient-border overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </RevealSection>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
