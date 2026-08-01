// src/components/sections/toolkit/Toolkit.tsx
"use client";

import { useState } from "react";
import {
  Figma,
  Coffee,
  PenTool,
  Zap,
  Code,
  Palette,
  Layers,
  Image,
  Search,
  Music,
} from "lucide-react";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";

const TOOLS = [
  {
    id: 1,
    icon: <Figma size={24} />,
    label: "Figma",
    category: "Design Tool",
    description: "Mənim rəqəmsal oyun meydanım. Hər layihə burada başlayır və bitir.",
    stats: "95% of projects",
  },
  {
    id: 2,
    icon: <Code size={24} />,
    label: "HTML / CSS",
    category: "Development",
    description: "Dizaynı kodla birləşdirirəm. Prototipləri canlı interfeyslərə çevirirəm.",
    stats: "Frontend ready",
  },
  {
    id: 3,
    icon: <Palette size={24} />,
    label: "Adobe Suite",
    category: "Creative",
    description: "Photoshop və Illustrator ilə brand identitetləri və qrafik elementlər yaradıram.",
    stats: "Visual magic",
  },
  {
    id: 4,
    icon: <Layers size={24} />,
    label: "Design Systems",
    category: "Methodology",
    description: "Məntiqli və miqyaslanabilir komponent sistemləri qurmaq mənim tutqum.",
    stats: "Scalable",
  },
  {
    id: 5,
    icon: <Zap size={24} />,
    label: "Motion Design",
    category: "Animation",
    description: "After Effects və Lottie ilə mikro-interaksiyalar və animasiyalar yaradıram.",
    stats: "Smooth AF",
  },
  {
    id: 6,
    icon: <Coffee size={24} />,
    label: "Coffee",
    category: "Essential",
    description: "Yaradıcılığın əsas komponenti. Gecə-gündüz layihələrdə iştirak edir.",
    stats: "∞ cups / day",
  },
  {
    id: 7,
    icon: <Music size={24} />,
    label: "Music",
    category: "Focus",
    description: "Yaradıcılıq prosesində fokus və ilham üçün musiqi. Deep work rejiminin ayrılmaz hissəsi.",
    stats: "24 / 7 vibes",
  },
  {
    id: 8,
    icon: <Image size={24} />,
    label: "Adobe Photoshop",
    category: "Creative",
    description: "Foto redaktəsi, kompozisiyalar və qrafik dizayn üçün əsas alət. Pixel-perfect nəticələr.",
    stats: "Photo magic",
  },
  {
    id: 9,
    icon: <PenTool size={24} />,
    label: "Adobe Illustrator",
    category: "Creative",
    description: "Vektor qrafikası, logotiplər və illüstrasiyalar üçün professional alət.",
    stats: "Vector master",
  },
  {
    id: 10,
    icon: <Search size={24} />,
    label: "Self Learning",
    category: "Growth",
    description: "Davamlı öyrənmə və araşdırma. Yeni texnologiyalar, trendlər və metodologiyaları kəşf etmək.",
    stats: "Always learning",
  },
];

export default function Toolkit() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="toolkit"
      className="relative w-full flex flex-col items-center py-14 md:py-24 lg:py-32 overflow-hidden bg-background-dark"
    >
      {/* HEADER */}
      <RevealContainer className="relative z-10 text-center px-4 mb-10 md:mb-16 lg:mb-20">
        <RevealItem className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.07] text-primary text-xs font-medium uppercase tracking-[0.2em] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          My Arsenal
        </RevealItem>
        <RevealItem className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 md:mb-5 tracking-tight leading-none">
          Creative <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
            Toolkit
          </span>
        </RevealItem>
        <RevealItem className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
          Yaradıcılığımı gücləndirən alətlər. Hər biri layihələrimdə unikal rol oynayır.
        </RevealItem>
      </RevealContainer>

      {/* TOOLS GRID */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40">
        {/* Mobile Slider */}
        <RevealContainer className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
            {TOOLS.map((tool) => (
              <RevealItem key={tool.id} className="snap-center shrink-0 w-[80vw] max-w-[300px]">
                <ToolCard
                  tool={tool}
                  isHovered={hoveredId === tool.id}
                  onHover={() => setHoveredId(tool.id)}
                  onLeave={() => setHoveredId(null)}
                />
              </RevealItem>
            ))}
          </div>
        </RevealContainer>

        {/* Desktop Grid */}
        <RevealContainer className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" stagger={0.05}>
          {TOOLS.map((tool) => (
            <RevealItem key={tool.id}>
              <ToolCard
                tool={tool}
                isHovered={hoveredId === tool.id}
                onHover={() => setHoveredId(tool.id)}
                onLeave={() => setHoveredId(null)}
              />
            </RevealItem>
          ))}
        </RevealContainer>
      </div>
    </section>
  );
}

function ToolCard({
  tool,
  isHovered,
  onHover,
  onLeave,
}: {
  tool: (typeof TOOLS)[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative h-full p-6 rounded-2xl border border-white/[0.06] bg-[#0e0e13] backdrop-blur-xl cursor-pointer overflow-hidden transition-all duration-700 hover:border-white/[0.14]"
    >
      {/* Subtle cyan glow on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/[0.04] to-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon & Category */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
            {tool.icon}
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border border-white/[0.07] bg-white/[0.02] text-slate-500">
            {tool.category}
          </span>
        </div>

        {/* Title & Stats */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-white mb-1">
            {tool.label}
          </h3>
          <p className="text-[11px] text-primary/70 font-medium tracking-wide">
            {tool.stats}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-xs leading-relaxed transition-colors duration-300 group-hover:text-slate-400">
          {tool.description}
        </p>
      </div>
    </div>
  );
}
