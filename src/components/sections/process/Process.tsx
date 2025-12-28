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
    icon: <Search className="w-6 h-6" />,
    color: "bg-blue-500",
    tags: ["User Interviews", "Competitor Analysis", "Personas"]
  },
  {
    id: "02",
    title: "Strategy & UX",
    subtitle: "Blueprinting the experience",
    description: "Before pixels, I build the structure. Wireframing and information architecture help map out user flows that are intuitive, accessible, and frictionless.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-yellow-500",
    tags: ["Wireframing", "User Flows", "Information Arch."]
  },
  {
    id: "03",
    title: "Visual Design & UI",
    subtitle: "Crafting the aesthetic",
    description: "This is where logic meets magic. I apply visual identity, typography, and color systems to create interfaces that are not just usable, but emotionally resonating.",
    icon: <PenTool className="w-6 h-6" />,
    color: "bg-purple-500",
    tags: ["High-Fi Design", "Design Systems", "Prototyping"]
  },
  {
    id: "04",
    title: "Motion & Development",
    subtitle: "Bringing it to life",
    description: "Static is boring. I add motion to guide users and collaborate closely with developers to ensure the final product matches the vision pixel-for-pixel.",
    icon: <Rocket className="w-6 h-6" />,
    color: "bg-primary",
    tags: ["Interaction Design", "Dev Handoff", "QA Testing"]
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<string | null>("01");

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 py-24 flex flex-col md:flex-row gap-12 items-start">
      
      {/* LEFT SIDE: HEADER */}
      <div className="md:w-1/3 sticky top-32">
        <div className="flex items-center gap-3 mb-6">
             <div className="h-px w-12 bg-primary"></div>
             <span className="text-primary font-bold uppercase tracking-widest text-sm">My Methodology</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          How I turn <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
            Chaos into Order
          </span>
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Design isn't just about how it looks, it's about how it works. Here is the framework I use to deliver meaningful digital products.
        </p>
      </div>

      {/* RIGHT SIDE: INTERACTIVE ACCORDION */}
      <div className="md:w-2/3 w-full flex flex-col gap-4">
        {STEPS.map((step) => (
          <div 
            key={step.id}
            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
            className={`
                group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden
                ${activeStep === step.id 
                    ? "bg-[#1c1c27]/80 border-primary/30 shadow-[0_0_30px_rgba(100,103,242,0.15)]" 
                    : "bg-white/2 border-white/5 hover:border-white/10 hover:bg-white/5"}
            `}
          >
            {/* Step Header */}
            <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-6">
                    <span className={`text-2xl font-black font-display opacity-30 group-hover:opacity-100 transition-opacity ${activeStep === step.id ? "text-primary opacity-100" : "text-white"}`}>
                        {step.id}
                    </span>
                    <div>
                        <h3 className={`text-xl font-bold transition-colors ${activeStep === step.id ? "text-white" : "text-slate-300"}`}>
                            {step.title}
                        </h3>
                        {activeStep !== step.id && (
                            <p className="text-slate-500 text-sm mt-1 hidden sm:block">{step.subtitle}</p>
                        )}
                    </div>
                </div>
                
                {/* Expand/Collapse Icon */}
                <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
                    ${activeStep === step.id 
                        ? "bg-primary text-white border-primary rotate-180" 
                        : "bg-white/5 text-slate-400 border-white/10 group-hover:bg-white/10"}
                `}>
                    {activeStep === step.id ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </div>

            {/* Expanded Content */}
            <div className={`grid transition-all duration-500 ease-in-out ${activeStep === step.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <div className="px-6 pb-8 pt-0 pl-18">
                        <p className="text-slate-300 leading-relaxed mb-6 border-l-2 border-white/10 pl-4">
                            {step.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                            {step.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Active Glow Bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${activeStep === step.id ? step.color : "bg-transparent"}`} />
          </div>
        ))}
      </div>

    </section>
  );
}