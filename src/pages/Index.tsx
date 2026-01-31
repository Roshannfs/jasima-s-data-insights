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

const experiences: ExperienceItem[] = [
  {
    role: "Artificial Intelligence Intern",
    company: "Marchello Tech, Trichy",
    duration: "Internship",
    highlights: ["Explored real-world AI workflows", "Supported model experimentation and evaluation", "Presented insights to mentors"],
  },
  {
    role: "Data Science & ML Intern",
    company: "Deyo Infotech",
    duration: "Internship",
    highlights: ["Worked with datasets end-to-end", "Built baseline ML models", "Improved data quality with preprocessing"],
  },
  {
    role: "Machine Learning with Python Intern",
    company: "Training Program",
    duration: "Training",
    highlights: ["Practiced ML pipelines in Python", "Evaluated models with key metrics", "Documented learnings and results"],
  },
  {
    role: "Digital Marketing Intern",
    company: "Dnyx Company",
    duration: "3 months",
    highlights: ["Analyzed campaign performance", "Interpreted engagement trends", "Assisted with reporting and optimization"],
  },
  {
    role: "Data Analyst Intern",
    company: "VDart",
    duration: "July–August 2025",
    highlights: ["Created clear insights from raw data", "Built visual summaries for stakeholders", "Supported data-driven decisions"],
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
    };
    el.addEventListener("pointermove", onMove);
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
        <DataBackdrop />
        <div className="container-portfolio relative section-pad pt-12 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-surface/40 px-4 py-2 text-xs text-muted-foreground backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-brand-teal shadow-[0_0_0_6px_hsl(var(--brand-teal)/0.10)]" />
                Available for internships & entry-level roles
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Trichy, India</span>
              </div>

              <p className="text-sm font-medium tracking-[0.18em] text-muted-foreground">HI, I’M</p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Jasima <span className="gradient-text">Jasmine</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">Data Analyst & AI Enthusiast</p>
              <p className="max-w-xl text-muted-foreground">
                Turning data into impactful insights — from clean preprocessing to crisp dashboards and meaningful patterns.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="lg">
                  <a href="#contact">Hire Me</a>
                </Button>
                <Button asChild variant="outlineGlow" size="lg">
                  <a href="/Jasima_Jasmine_CV.pdf" download>
                    Download CV
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
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
              <div className="glass gradient-border relative overflow-hidden rounded-[2rem] transition-transform duration-300 ease-out hover:scale-[1.01]">
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
                  className="w-[220px] animate-fade-in"
                />
              </div>
              <div className="pointer-events-none absolute -right-6 top-20 hidden md:block">
                <HeroKpi
                  icon={Briefcase}
                  label="Experience"
                  value="5 Internships"
                  hint="AI • ML • Analytics"
                  className="w-[240px] animate-fade-in"
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
            title="Curiosity meets clarity"
            subtitle="I enjoy exploring complex datasets, uncovering hidden patterns, and transforming raw numbers into meaningful stories that support confident decision-making."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="glass gradient-border md:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl">Bio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  I’m an aspiring Data Analyst and an AI & Data Science student who loves working with real-world data — cleaning it,
                  visualizing it, and drawing insights that are easy to understand.
                </p>
                <p>
                  My goal is to grow into a professional who can support teams with data-driven decision making through strong analysis,
                  clear dashboards, and thoughtful experimentation.
                </p>
              </CardContent>
            </Card>

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
              </CardContent>
            </Card>
          </div>
        </RevealSection>

        {/* Skills */}
        <RevealSection id="skills" className="container-portfolio">
          <SectionHeading
            eyebrow="SKILLS"
            title="Tools I’m growing with"
            subtitle="A blend of programming fundamentals and analytics skills — with a focus on clean workflows and clear visuals."
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
              </CardContent>
            </Card>
          </div>
        </RevealSection>

        {/* Experience */}
        <RevealSection id="experience" className="container-portfolio">
          <SectionHeading
            eyebrow="EXPERIENCE"
            title="Internships & training"
            subtitle="Hands-on roles that helped me practice analysis, reporting, and building real-world confidence." />
          <ExperienceTimeline items={experiences} />
        </RevealSection>

        {/* Projects */}
        <RevealSection id="projects" className="container-portfolio">
          <SectionHeading
            eyebrow="PROJECTS"
            title="Portfolio highlights"
            subtitle="A snapshot of the kind of data products I enjoy building — from dashboards to trend discovery." />
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Real Estate Data App (Flutter)"
              description="Dashboard design for property analytics, helping users explore pricing trends and market patterns."
              tools={["Flutter", "Dashboard UI", "Analytics"]}
              outcome="Designed a clean, insight-first dashboard layout for property metrics."
              imageSrc={projectRealEstate}
            />
            <ProjectCard
              title="TrendForge"
              description="Trend analysis and visualization concept — focusing on clarity, comparison, and fast insights."
              tools={["Visualization", "Trend Analysis", "KPIs"]}
              outcome="Created a premium, readable visual style for trend storytelling."
              imageSrc={projectTrendForge}
            />
          </div>
        </RevealSection>

        {/* Services */}
        <RevealSection id="services" className="container-portfolio">
          <SectionHeading
            eyebrow="SERVICES"
            title="How I can help"
            subtitle="Practical analytics services focused on accuracy, clarity, and actionable outcomes." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="glass gradient-border">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl btn-gradient-soft border border-border/70">
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
        </RevealSection>

        {/* Contact */}
        <RevealSection id="contact" className="container-portfolio">
          <SectionHeading
            eyebrow="CONTACT"
            title="Let’s connect"
            subtitle="Recruiters, collaborators, and clients — I’d love to hear from you." />
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass gradient-border">
              <CardHeader>
                <CardTitle className="text-xl">Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
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
                <Button asChild variant="soft" className="w-full">
                  <a href="#contact" aria-label="LinkedIn Jasima Jasmine">
                    <Linkedin />
                    LinkedIn: Jasima Jasmine
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass gradient-border">
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
