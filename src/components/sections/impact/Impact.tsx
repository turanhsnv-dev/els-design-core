"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";
import { VIEWPORT_ONCE, fadeInItemVariants } from "@/lib/motion";
import { METRICS, PRINCIPLES } from "@/constants/impact";

const COUNT_DURATION_MS = 1800;
const COUNT_STEP_MS = 16;

export default function Impact() {
  return (
    <section id="impact" className="relative w-full bg-white dark:bg-background-dark overflow-hidden">
      <Divider />
      <Container className="py-14 md:py-24 lg:py-32">
        <RevealContainer className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-20 lg:mb-24">
          <RevealItem>
            <p className="text-xs font-medium text-primary/80 uppercase tracking-[0.3em] mb-5">
              Design Impact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white leading-none tracking-tight max-w-lg">
              Work that moves
              <br />
              <GradientText>numbers.</GradientText>
            </h2>
          </RevealItem>
          <RevealItem className="text-slate-500 text-sm md:text-base lg:text-lg max-w-sm leading-relaxed font-light md:text-right">
            Every design decision is a hypothesis. These are the results that proved them right.
          </RevealItem>
        </RevealContainer>

        <RevealContainer
          className="grid grid-cols-2 lg:grid-cols-4 border border-black/6 dark:border-white/6 rounded-2xl overflow-hidden mb-6"
          stagger={0.08}
        >
          {METRICS.map((metric, i) => (
            <RevealItem
              key={i}
              className={`group relative p-5 sm:p-7 md:p-10 flex flex-col justify-between min-h-42.5 md:min-h-52.5 bg-gray-50 dark:bg-[#0e0e13] hover:bg-gray-100 dark:bg-[#111118] transition-colors duration-700 ${
                i < 3 ? "border-r border-black/6 dark:border-white/6" : ""
              } ${i < 2 ? "border-b border-black/6 dark:border-white/6 lg:border-b-0" : ""}`}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-primary/0 group-hover:bg-primary/40 transition-colors duration-700" />
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-3 md:mb-4 tabular-nums">
                <AnimatedNumber value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </div>
              <div>
                <p className="text-sm font-semibold text-black/80 dark:text-white/80 mb-2 uppercase tracking-wider">
                  {metric.label}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  {metric.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealContainer>

        <RevealContainer>
          <RevealItem
            variants={fadeInItemVariants}
            className="flex items-center gap-6 my-10 md:my-16 lg:my-20"
          >
            <div className="h-px flex-1 bg-black/6 dark:bg-white/6" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-600">
              Design Philosophy
            </p>
            <div className="h-px flex-1 bg-black/6 dark:bg-white/6" />
          </RevealItem>
        </RevealContainer>

        <RevealContainer className="flex flex-col" stagger={0.1}>
          {PRINCIPLES.map((principle) => (
            <RevealItem
              key={principle.number}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-3 md:gap-10 items-start py-6 md:py-8 border-b border-black/5 dark:border-white/5 last:border-b-0 hover:bg-black/1 dark:bg-white/1 transition-colors duration-500 cursor-default"
            >
              <div className="flex items-center gap-4 md:contents">
                <span className="text-xs font-mono text-slate-700 group-hover:text-primary/60 transition-colors duration-500 pt-0.5 md:pt-1 tracking-widest shrink-0">
                  {principle.number}
                </span>
                <h3 className="text-lg md:text-2xl font-semibold text-slate-900 dark:text-white leading-tight">
                  {principle.title}
                </h3>
              </div>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-600 dark:text-slate-400 transition-colors duration-500 md:col-start-3">
                {principle.body}
              </p>
            </RevealItem>
          ))}
        </RevealContainer>
      </Container>
      <Divider />
    </section>
  );
}

function Divider() {
  return <div className="w-full h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />;
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, VIEWPORT_ONCE);

  useEffect(() => {
    if (!inView) return;
    const increment = value / (COUNT_DURATION_MS / COUNT_STEP_MS);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, COUNT_STEP_MS);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
