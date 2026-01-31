import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox, Text } from "@react-three/drei";
import { useMemo } from "react";

type Card = {
  title: string;
  subtitle: string;
  x: number;
  y: number;
  z: number;
  hue: number;
};

function FloatingCard({ card }: { card: Card }) {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.9}>
      <group position={[card.x, card.y, card.z]}>
        <RoundedBox args={[2.8, 1.4, 0.16]} radius={0.26} smoothness={8}>
          {/* Base surface uses the dark background tone in HSL */}
          <meshStandardMaterial
            color={"hsl(228, 17%, 8%)"}
            roughness={0.18}
            metalness={0.55}
            emissive={`hsl(${card.hue}, 78%, 55%)`}
            emissiveIntensity={0.38}
          />
        </RoundedBox>
        <group position={[0, 0, 0.12]}>
          <Text fontSize={0.32} color="#e8f2ff" anchorX="center" anchorY="bottom">
            {card.title}
          </Text>
          <Text position={[0, -0.38, 0]} fontSize={0.2} color="#9fb4d8" anchorX="center" anchorY="top">
            {card.subtitle}
          </Text>
        </group>
      </group>
    </Float>
  );
}

/**
 * Full-page 3D background with floating data/AI themed cards.
 * Sits behind the whole layout (mounted once at the app root).
 */
export default function BackgroundThreeCards() {
  const cards = useMemo<Card[]>(
    () => [
      {
        title: "DATA INSIGHT",
        subtitle: "clean → analyse → explain",
        x: -4.2,
        y: 2.4,
        z: -3,
        hue: 174,
      },
      {
        title: "AI & ML",
        subtitle: "models with meaning",
        x: 4.5,
        y: 1.8,
        z: -4,
        hue: 343,
      },
      {
        title: "DASHBOARDS",
        subtitle: "signal over noise",
        x: -3.8,
        y: -1.8,
        z: -5,
        hue: 18,
      },
      {
        title: "STORYTELLING",
        subtitle: "numbers with context",
        x: 3.9,
        y: -2.2,
        z: -3.5,
        hue: 174,
      },
    ],
    [],
  );

  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 9], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      className="pointer-events-none"
    >
      {/* Soft ambient + directional light for a subtle holographic feel */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 8, 10]} intensity={1.2} />
      <directionalLight position={[-8, -4, -6]} intensity={0.4} />

      {cards.map((card) => (
        <FloatingCard key={card.title} card={card} />
      ))}
    </Canvas>
  );
}
