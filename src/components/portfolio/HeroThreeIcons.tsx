import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox, Text } from "@react-three/drei";
import { useMemo } from "react";

type Badge = {
  label: string;
  x: number;
  y: number;
  z: number;
  color: string;
};

function Badge3D({ label, color, position }: { label: string; color: string; position: [number, number, number] }) {
  return (
    <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.9}>
      <group position={position}>
        <RoundedBox args={[1.6, 0.9, 0.12]} radius={0.18} smoothness={8}>
          <meshStandardMaterial color={"#0c0f14"} roughness={0.2} metalness={0.5} emissive={color} emissiveIntensity={0.35} />
        </RoundedBox>
        <Text
          position={[0, 0, 0.08]}
          fontSize={0.26}
          color={"#e8f2ff"}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
}

/**
 * Lightweight Three.js accent: floating "tech badges" (3D icons).
 * Hidden on small screens via parent wrapper.
 */
export default function HeroThreeIcons() {
  const badges = useMemo<Badge[]>(
    () => [
      { label: "PY", x: -1.8, y: 1.1, z: 0, color: "#2dd4bf" },
      { label: "AI", x: 1.9, y: 0.9, z: 0, color: "#fb7185" },
      { label: "SQL", x: 1.7, y: -0.6, z: 0, color: "#ff9a7a" },
      { label: "GIT", x: -1.6, y: -0.9, z: 0, color: "#2dd4bf" },
    ],
    [],
  );

  return (
    <div className="absolute inset-0">
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 6]} intensity={1.2} />
        {badges.map((b) => (
          <Badge3D key={b.label} label={b.label} color={b.color} position={[b.x, b.y, b.z]} />
        ))}
      </Canvas>
    </div>
  );
}
