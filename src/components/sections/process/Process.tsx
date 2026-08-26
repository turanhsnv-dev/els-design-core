"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import { PROCESS_STEPS, type ProcessStep } from "@/constants/process";

export default function Process() {
  const [activeId, setActiveId] = useState<string | null>("01");

  return (
    <Container
      as="section"
      id="process"
      className="relative py-14 md:py-24 flex flex-col md:flex-row gap-8 md:gap-12 items-start"
    >
      <div className="md:w-1/3 md:sticky md:top-32">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-primary/60" />
          <span className="text-primary/80 font-medium uppercase tracking-[0.2em] text-xs">
            My Methodology
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4 md:mb-6">
          How I turn <br />
          <GradientText>Chaos into Order</GradientText>
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
          Design isn&apos;t just about how it looks, it&apos;s about how it works. Here is the
          framework I use to deliver meaningful digital products.
        </p>
      </div>

      <div className="md:w-2/3 w-full flex flex-col gap-3">
        {PROCESS_STEPS.map((step) => (
          <StepAccordion
            key={step.id}
            step={step}
            active={activeId === step.id}
            onToggle={() => setActiveId(activeId === step.id ? null : step.id)}
          />
        ))}
      </div>
    </Container>
  );
}

function StepAccordion({
  step,
  active,
  onToggle,
}: {
  step: ProcessStep;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onClick={onToggle}
      className={`group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
        active
          ? "bg-gray-50 dark:bg-[#0e0e13] border-black/[0.1] dark:border-white/[0.1]"
          : "bg-black/[0.01] dark:bg-white/[0.01] border-black/[0.05] dark:border-white/[0.05] hover:border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.03] dark:bg-white/[0.03]"
      }`}
    >
      <div
        className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-500 ${
          active ? "bg-primary/80" : "bg-transparent"
        }`}
      />
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-6">
          <span
            className={`text-2xl font-black font-mono tabular-nums transition-all duration-300 ${
              active ? "text-primary" : "text-black/20 dark:text-white/20 group-hover:text-black/40 dark:text-white/40"
            }`}
          >
            {step.id}
          </span>
          <div>
            <h3
              className={`text-lg font-semibold transition-colors duration-300 ${
                active ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"
              }`}
            >
              {step.title}
            </h3>
            {!active && (
              <p className="text-slate-600 text-sm mt-0.5 hidden sm:block">{step.subtitle}</p>
            )}
          </div>
        </div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
            active
              ? "bg-primary/10 text-primary border-primary/30"
              : "bg-black/[0.03] dark:bg-white/[0.03] text-slate-500 border-black/[0.07] dark:border-white/[0.07] group-hover:bg-black/[0.06] dark:bg-white/[0.06]"
          }`}
        >
          {active ? <Minus size={15} /> : <Plus size={15} />}
        </div>
      </div>

      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 pl-5 md:pl-[4.5rem]">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5 border-l border-black/[0.08] dark:border-white/[0.08] pl-4 font-light">
              {step.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.07] text-xs font-medium text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
