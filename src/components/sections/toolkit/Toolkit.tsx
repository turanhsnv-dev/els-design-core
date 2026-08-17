"use client";

import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";
import { TOOLS, type Tool } from "@/constants/tools";

export default function Toolkit() {
  return (
    <section
      id="toolkit"
      className="relative w-full flex flex-col items-center py-14 md:py-24 lg:py-32 overflow-hidden bg-background-dark"
    >
      <RevealContainer className="relative z-10 text-center px-4 mb-10 md:mb-16 lg:mb-20">
        <RevealItem className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.07] text-primary text-xs font-medium uppercase tracking-[0.2em] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          My Arsenal
        </RevealItem>
        <RevealItem className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 md:mb-5 tracking-tight leading-none">
          Creative <br />
          <GradientText>Toolkit</GradientText>
        </RevealItem>
        <RevealItem className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
          Yaradıcılığımı gücləndirən alətlər. Hər biri layihələrimdə unikal rol oynayır.
        </RevealItem>
      </RevealContainer>

      <Container className="relative z-10">
        <RevealContainer className="md:hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
            {TOOLS.map((tool) => (
              <RevealItem key={tool.id} className="snap-center shrink-0 w-[80vw] max-w-[300px]">
                <ToolCard tool={tool} />
              </RevealItem>
            ))}
          </div>
        </RevealContainer>

        <RevealContainer
          className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          stagger={0.05}
        >
          {TOOLS.map((tool) => (
            <RevealItem key={tool.id}>
              <ToolCard tool={tool} />
            </RevealItem>
          ))}
        </RevealContainer>
      </Container>
    </section>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <div className="group relative h-full p-6 rounded-2xl border border-white/[0.06] bg-[#0e0e13] backdrop-blur-xl cursor-pointer overflow-hidden transition-all duration-700 hover:border-white/[0.14]">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/[0.04] to-blue-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
            <Icon size={24} />
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border border-white/[0.07] bg-white/[0.02] text-slate-500">
            {tool.category}
          </span>
        </div>
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-white mb-1">{tool.label}</h3>
          <p className="text-[11px] text-primary/70 font-medium tracking-wide">{tool.stats}</p>
        </div>
        <p className="text-slate-500 text-xs leading-relaxed transition-colors duration-300 group-hover:text-slate-400">
          {tool.description}
        </p>
      </div>
    </div>
  );
}
