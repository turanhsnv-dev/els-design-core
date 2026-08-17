"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";

function Gem() {
  const ref = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.09;
      ref.current.rotation.y += delta * 0.13;
      ref.current.rotation.x += state.pointer.y * 0.0004;
      ref.current.rotation.y += state.pointer.x * 0.0004;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.05;
      ringRef.current.rotation.x = Math.PI / 2.4;
    }
  });

  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} scale={1.65}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#f4fbfd"
          metalness={0.85}
          roughness={0.14}
          clearcoat={1}
          clearcoatRoughness={0.08}
          reflectivity={1}
          flatShading
        />
      </mesh>

      <mesh ref={ringRef} scale={2.6}>
        <torusGeometry args={[1, 0.008, 16, 120]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.14} />
      </mesh>
    </Float>
  );
}

export default function LabScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6], fov: 38 }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 5]} intensity={70} color="#00E5FF" />
      <pointLight position={[-5, -2, -2]} intensity={45} color="#A855F7" />
      <pointLight position={[0, -4, 4]} intensity={20} color="#ffffff" />
      <directionalLight position={[2, 5, 3]} intensity={1.1} color="#ffffff" />

      <Gem />
    </Canvas>
  );
}
