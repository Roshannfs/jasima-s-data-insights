import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio enquiry — ${form.name || "New message"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    return `mailto:rabijasima2@gmail.com?subject=${subject}&body=${body}`;
  }, [form.email, form.message, form.name]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Opening your email app…");
    window.location.href = mailto;
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          value={form.name}
          onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
          placeholder="Your name"
          aria-label="Your name"
          className="bg-surface/50"
        />
        <Input
          value={form.email}
          onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
          placeholder="Email address"
          type="email"
          aria-label="Email address"
          className="bg-surface/50"
        />
      </div>
      <Textarea
        value={form.message}
        onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
        placeholder="Tell me about your project or role…"
        aria-label="Message"
        className="bg-surface/50"
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="hero" className="sm:w-auto">
          Let’s Connect
        </Button>
        <Button asChild type="button" variant="outlineGlow" className="sm:w-auto">
          <a href={mailto}>Send via Email</a>
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        This form opens your default email app (fast + no backend required).
      </p>
    </form>
  );
}
