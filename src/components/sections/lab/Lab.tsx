"use client";

import dynamic from "next/dynamic";
import { Move3d, Sparkles as SparklesIcon, Zap } from "lucide-react";
import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";

const LabScene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <CanvasFallback />,
});

const CHIPS = [
  { icon: Zap, label: "Real-time WebGL" },
  { icon: Move3d, label: "Three.js / R3F" },
  { icon: SparklesIcon, label: "Drag to explore" },
];

export default function Lab() {
  return (
    <section id="lab" className="relative w-full py-14 md:py-24 lg:py-32 overflow-hidden bg-white dark:bg-background-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <RevealContainer stagger={0.08}>
            <RevealItem className="flex items-center gap-3 text-xs font-medium tracking-[0.25em] uppercase mb-5 text-primary/80">
              <span className="w-8 h-px bg-primary/50" />
              Beyond The Screen
            </RevealItem>

            <RevealItem className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-5 md:mb-6">
              I design in <GradientText>three dimensions</GradientText>
            </RevealItem>

            <RevealItem className="text-slate-500 text-sm md:text-base leading-relaxed font-light max-w-lg mb-8 md:mb-10">
              Flat screens are just the starting point. I explore volumetric interfaces,
              real-time shaders, and spatial motion to push interaction design into the
              third dimension — where products stop looking designed and start feeling alive.
            </RevealItem>

            <RevealItem className="flex flex-wrap gap-3">
              {CHIPS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 text-xs font-medium"
                >
                  <Icon size={13} className="text-primary/80" />
                  {label}
                </span>
              ))}
            </RevealItem>
          </RevealContainer>

          <RevealItem className="relative h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px] w-full">
            <div className="absolute inset-0 rounded-[32px] border border-black/[0.06] dark:border-white/[0.06] bg-gray-100 dark:bg-[#0a0a0f] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,229,255,0.1),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(168,85,247,0.06),transparent_55%)]" />
              <LabScene />
              <div className="absolute inset-0 rounded-[32px] shadow-[inset_0_0_80px_20px_rgba(0,0,0,0.5)] pointer-events-none" />
            </div>
          </RevealItem>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />
    </section>
  );
}

function CanvasFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-40 h-40 rounded-full bg-primary/10 blur-2xl animate-pulse" />
    </div>
  );
}
