import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        hero:
          "relative overflow-hidden btn-gradient text-primary-foreground shadow-[0_18px_60px_-30px_hsl(var(--shadow-color)/0.9)] " +
          "transition-[transform,filter,opacity] duration-300 will-change-transform " +
          "hover:opacity-95 hover:translate-y-[-1px] hover:[filter:blur(0.15px)] " +
          "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 " +
          "before:[background:linear-gradient(110deg,transparent,hsla(0,0%,100%,0.18),transparent)] " +
          "before:translate-x-[-120%] hover:before:opacity-100 hover:before:translate-x-[120%] before:duration-700 " +
          "after:absolute after:inset-[-2px] after:-z-10 after:opacity-70 after:blur-xl " +
          "after:[background:radial-gradient(60%_60%_at_50%_50%,hsl(var(--brand-teal)/0.35),transparent_70%),radial-gradient(60%_60%_at_60%_50%,hsl(var(--brand-rose)/0.30),transparent_70%)]",
        soft: "btn-gradient-soft text-foreground hover:bg-accent",
        outlineGlow:
          "border border-border/70 bg-background/40 text-foreground hover:bg-accent/60 shadow-[0_0_0_1px_hsl(var(--brand-teal)/0.15),0_0_0_1px_hsl(var(--brand-rose)/0.12)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
