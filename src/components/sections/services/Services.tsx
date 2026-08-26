"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";
import { slideInLeftItemVariants } from "@/lib/motion";
import { SERVICES } from "@/constants/services";

const PANEL_EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];
  const CurrentIcon = current.icon;

  return (
    <Container as="section" id="services" className="py-14 md:py-24 lg:py-32">
      <RevealContainer stagger={0.08}>
        <RevealItem className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-16 lg:mb-20">
          <div>
            <p className="text-xs font-medium text-primary/80 uppercase tracking-[0.3em] mb-5">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              Beyond just <br />
              <GradientText>Pretty Pixels</GradientText>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base font-light max-w-sm leading-relaxed md:text-right">
            Strategic design that solves real business problems. Here is how I can help you.
          </p>
        </RevealItem>

        <RevealItem>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-12 items-start">
            <RevealContainer
              className="flex flex-col border border-black/[0.06] dark:border-white/[0.06] rounded-2xl overflow-hidden"
              stagger={0.08}
              delayChildren={0.1}
            >
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                const isActive = active === index;
                return (
                  <RevealItem key={service.id} variants={slideInLeftItemVariants}>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      className={`group relative text-left w-full px-5 md:px-8 py-5 md:py-7 border-b last:border-b-0 border-black/[0.06] dark:border-white/[0.06] transition-all duration-500 flex items-center gap-4 md:gap-6 ${
                        isActive ? "bg-gray-100 dark:bg-[#111118]" : "bg-gray-100 dark:bg-[#0a0a0e] hover:bg-gray-50 dark:bg-[#0e0e13]"
                      }`}
                    >
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-500 ${
                          isActive ? "bg-primary" : "bg-transparent"
                        }`}
                      />
                      <span
                        className={`text-xs font-mono tabular-nums transition-colors duration-300 shrink-0 ${
                          isActive ? "text-primary/80" : "text-slate-700 group-hover:text-slate-600"
                        }`}
                      >
                        {service.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-lg font-semibold transition-colors duration-300 ${
                            isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400 group-hover:text-slate-200"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`text-sm font-light transition-colors duration-300 mt-0.5 ${
                            isActive ? "text-slate-600 dark:text-slate-400" : "text-slate-600"
                          }`}
                        >
                          {service.shortDesc}
                        </p>
                      </div>
                      <div
                        className={`shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? "border-primary/30 bg-primary/10 text-primary"
                            : "border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] text-slate-600 group-hover:text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                    </button>
                  </RevealItem>
                );
              })}
            </RevealContainer>

            <div className="relative min-h-[260px] md:min-h-[320px] lg:min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: PANEL_EASE }}
                  className="h-full bg-gray-50 dark:bg-[#0e0e13] border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-6 md:p-10 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-6 md:mb-8">
                    <span className="text-7xl font-black text-black/[0.04] dark:text-white/[0.04] leading-none tabular-nums select-none">
                      {current.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl border border-primary/20 bg-primary/[0.06] flex items-center justify-center text-primary">
                      <CurrentIcon size={22} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4 leading-tight">
                      {current.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-light">
                      {current.description}
                    </p>
                  </div>

                  <div className="mt-6 md:mt-8 pt-5 md:pt-7 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex flex-wrap gap-2">
                      {current.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 text-xs font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-primary/70 text-sm font-medium hover:text-primary transition-colors duration-300 group/link"
                    >
                      Discuss this service
                      <ArrowUpRight
                        size={14}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                      />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </RevealItem>
      </RevealContainer>
    </Container>
  );
}
