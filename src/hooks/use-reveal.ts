import { useEffect, useMemo, useState } from "react";

type UseRevealOptions = {
  rootMargin?: string;
  threshold?: number;
};

/**
 * Tiny scroll-reveal helper.
 * - Uses IntersectionObserver
 * - Respects prefers-reduced-motion
 */
export function useReveal(options: UseRevealOptions = {}) {
  const { rootMargin = "-10% 0px", threshold = 0.12 } = options;
  const [isVisible, setIsVisible] = useState(false);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }
  }, [reduceMotion]);

  const onRef = (el: HTMLElement | null) => {
    if (!el || isVisible || reduceMotion) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setIsVisible(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    io.observe(el);
  };

  return { isVisible, onRef, reduceMotion };
}
