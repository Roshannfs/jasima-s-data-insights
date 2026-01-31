import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HeroParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          repulse: { distance: 120, duration: 0.35 },
          push: { quantity: 3 },
        },
      },
      particles: {
        number: { value: 46, density: { enable: true, area: 900 } },
        color: { value: ["#6ee7d8", "#f0a2c0", "#ffb79d"] },
        links: {
          enable: true,
          distance: 130,
          opacity: 0.16,
          width: 1,
          color: "random",
        },
        move: {
          enable: true,
          speed: 0.7,
          direction: "none",
          outModes: { default: "out" },
        },
        opacity: { value: 0.35 },
        size: { value: { min: 1, max: 2.2 } },
        shape: { type: "circle" },
      },
    }),
    [],
  );

  if (!ready) return null;

  return (
    <div className="absolute inset-0">
      <Particles id="hero-particles" options={options as any} className="h-full w-full" />
    </div>
  );
}
