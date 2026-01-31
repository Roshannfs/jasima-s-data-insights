export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-portfolio flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jasima Jasmine — Data Analyst & AI Enthusiast
        </p>
        <p className="text-sm text-muted-foreground">Built with a focus on clarity, curiosity, and impact.</p>
      </div>
    </footer>
  );
}
