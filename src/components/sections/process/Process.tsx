// src/components/sections/process/Process.tsx
"use client";

import { useState } from "react";
import { Search, Lightbulb, PenTool, Rocket, Plus, Minus } from "lucide-react";

const STEPS = [
  {
    id: "01",
    title: "Discovery & Research",
    subtitle: "Understanding the problem",
    description: "Every great design starts with a question. I dive deep into user needs, market trends, and business goals to build a solid foundation. No assumptions, just data-driven insights.",
    icon: <Search className="w-5 h-5" />,
    tags: ["User Interviews", "Competitor Analysis", "Personas"],
  },
  {
    id: "02",
    title: "Strategy & UX",
    subtitle: "Blueprinting the experience",
    description: "Before pixels, I build the structure. Wireframing and information architecture help map out user flows that are intuitive, accessible, and frictionless.",
    icon: <Lightbulb className="w-5 h-5" />,
    tags: ["Wireframing", "User Flows", "Information Arch."],
  },
  {
    id: "03",
    title: "Visual Design & UI",
    subtitle: "Crafting the aesthetic",
    description: "This is where logic meets magic. I apply visual identity, typography, and color systems to create interfaces that are not just usable, but emotionally resonating.",
    icon: <PenTool className="w-5 h-5" />,
    tags: ["High-Fi Design", "Design Systems", "Prototyping"],
  },
  {
    id: "04",
    title: "Motion & Development",
    subtitle: "Bringing it to life",
    description: "Static is boring. I add motion to guide users and collaborate closely with developers to ensure the final product matches the vision pixel-for-pixel.",
    icon: <Rocket className="w-5 h-5" />,
    tags: ["Interaction Design", "Dev Handoff", "QA Testing"],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<string | null>("01");

  return (
    <section id="process" className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 py-14 md:py-24 flex flex-col md:flex-row gap-8 md:gap-12 items-start">

      {/* LEFT: Sticky header */}
      <div className="md:w-1/3 md:sticky md:top-32">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-primary/60" />
          <span className="text-primary/80 font-medium uppercase tracking-[0.2em] text-xs">My Methodology</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
          How I turn <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
            Chaos into Order
          </span>
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
          Design isn't just about how it looks, it's about how it works. Here is the framework I use to deliver meaningful digital products.
        </p>
      </div>

      {/* RIGHT: Accordion */}
      <div className="md:w-2/3 w-full flex flex-col gap-3">
        {STEPS.map((step) => (
          <div
            key={step.id}
            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
            className={`
              group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden
              ${activeStep === step.id
                ? "bg-[#0e0e13] border-white/[0.1]"
                : "bg-white/[0.01] border-white/[0.05] hover:border-white/[0.08] hover:bg-white/[0.03]"}
            `}
          >
            {/* Active left accent bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-500 ${activeStep === step.id ? "bg-primary/80" : "bg-transparent"}`} />

            {/* Header row */}
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-6">
                <span className={`text-2xl font-black font-mono tabular-nums transition-all duration-300 ${activeStep === step.id ? "text-primary" : "text-white/20 group-hover:text-white/40"}`}>
                  {step.id}
                </span>
                <div>
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${activeStep === step.id ? "text-white" : "text-slate-300"}`}>
                    {step.title}
                  </h3>
                  {activeStep !== step.id && (
                    <p className="text-slate-600 text-sm mt-0.5 hidden sm:block">{step.subtitle}</p>
                  )}
                </div>
              </div>

              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300
                ${activeStep === step.id
                  ? "bg-primary/10 text-primary border-primary/30"
                  : "bg-white/[0.03] text-slate-500 border-white/[0.07] group-hover:bg-white/[0.06]"}
              `}>
                {activeStep === step.id ? <Minus size={15} /> : <Plus size={15} />}
              </div>
            </div>

            {/* Expandable content */}
            <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${activeStep === step.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="px-5 pb-6 pl-5 md:pl-[4.5rem]">
                  <p className="text-slate-400 leading-relaxed mb-5 border-l border-white/[0.08] pl-4 font-light">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-xs font-medium text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
