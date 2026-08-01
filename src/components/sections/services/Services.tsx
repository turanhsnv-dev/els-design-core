// src/components/sections/services/Services.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Zap, Smartphone, ArrowUpRight } from "lucide-react";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";
import { slideInLeftItemVariants } from "@/lib/motion";

const SERVICES = [
  {
    id: 1,
    number: "01",
    title: "Product Design",
    shortDesc: "From user research to polished UI",
    description: "End-to-end digital product design. I take products from ambiguous problem statements to pixel-perfect interfaces that users genuinely love to use.",
    icon: <Smartphone size={22} strokeWidth={1.5} />,
    tags: ["User Experience (UX)", "User Interface (UI)", "Mobile & Web Apps", "Interactive Prototyping"],
  },
  {
    id: 2,
    number: "02",
    title: "Design Systems",
    shortDesc: "Scalable component ecosystems",
    description: "I build the 'LEGO' blocks that keep your product consistent and your team moving fast. Scalable design languages that become the single source of truth.",
    icon: <Layers size={22} strokeWidth={1.5} />,
    tags: ["Component Libraries", "Style Guides", "Token Systems", "Documentation"],
  },
  {
    id: 3,
    number: "03",
    title: "Motion & Interaction",
    shortDesc: "Bringing static screens to life",
    description: "Micro-interactions and animations that guide users and create delight moments. Static is forgettable. Motion makes interfaces feel intelligent.",
    icon: <Zap size={22} strokeWidth={1.5} />,
    tags: ["Lottie Animations", "Interaction Design", "After Effects", "Developer Handoff"],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40 py-14 md:py-24 lg:py-32">

      <RevealContainer stagger={0.08}>
        {/* Header */}
        <RevealItem className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-16 lg:mb-20">
          <div>
            <p className="text-xs font-medium text-primary/80 uppercase tracking-[0.3em] mb-5">Capabilities</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
              Beyond just <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                Pretty Pixels
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base font-light max-w-sm leading-relaxed md:text-right">
            Strategic design that solves real business problems. Here is how I can help you.
          </p>
        </RevealItem>

        {/* Two-panel layout */}
        <RevealItem>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-12 items-start">

            {/* LEFT: Service list */}
            <RevealContainer className="flex flex-col border border-white/[0.06] rounded-2xl overflow-hidden" stagger={0.08} delayChildren={0.1}>
              {SERVICES.map((service, index) => (
                <RevealItem key={service.id} variants={slideInLeftItemVariants}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={`group relative text-left w-full px-5 md:px-8 py-5 md:py-7 border-b last:border-b-0 border-white/[0.06] transition-all duration-500 flex items-center gap-4 md:gap-6 ${
                      active === index
                        ? "bg-[#111118]"
                        : "bg-[#0a0a0e] hover:bg-[#0e0e13]"
                    }`}
                  >
              {/* Active left indicator */}
              <div className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-500 ${active === index ? "bg-primary" : "bg-transparent"}`} />

              {/* Number */}
              <span className={`text-xs font-mono tabular-nums transition-colors duration-300 shrink-0 ${active === index ? "text-primary/80" : "text-slate-700 group-hover:text-slate-600"}`}>
                {service.number}
              </span>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className={`text-lg font-semibold transition-colors duration-300 ${active === index ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm font-light transition-colors duration-300 mt-0.5 ${active === index ? "text-slate-400" : "text-slate-600"}`}>
                  {service.shortDesc}
                </p>
              </div>

              {/* Icon */}
              <div className={`shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-500 ${
                active === index
                  ? "border-primary/30 bg-primary/10 text-primary"
                  : "border-white/[0.06] bg-white/[0.02] text-slate-600 group-hover:text-slate-400"
              }`}>
                {service.icon}
              </div>
                  </button>
                </RevealItem>
              ))}
            </RevealContainer>

            {/* RIGHT: Detail panel */}
            <div className="relative min-h-[260px] md:min-h-[320px] lg:min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full bg-[#0e0e13] border border-white/[0.08] rounded-2xl p-6 md:p-10 flex flex-col justify-between group"
            >
              {/* Top: number + icon */}
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <span className="text-7xl font-black text-white/[0.04] leading-none tabular-nums select-none">
                  {SERVICES[active].number}
                </span>
                <div className="w-12 h-12 rounded-xl border border-primary/20 bg-primary/[0.06] flex items-center justify-center text-primary">
                  {SERVICES[active].icon}
                </div>
              </div>

              {/* Title + description */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  {SERVICES[active].title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light">
                  {SERVICES[active].description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 md:mt-8 pt-5 md:pt-7 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-2">
                  {SERVICES[active].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 text-xs font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA link */}
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary/70 text-sm font-medium hover:text-primary transition-colors duration-300 group/link"
                >
                  Discuss this service
                  <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
            </div>
          </div>
        </RevealItem>
      </RevealContainer>

    </section>
  );
}
