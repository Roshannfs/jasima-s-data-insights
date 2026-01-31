import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

/**
 * Consistent "cinematic" in-view reveal.
 * - Respects prefers-reduced-motion
 * - Uses GPU-friendly transforms
 */
export default function MotionReveal({ children, delay = 0, className }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y: 18, filter: "blur(6px)" }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
