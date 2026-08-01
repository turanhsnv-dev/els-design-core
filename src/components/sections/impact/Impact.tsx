// src/components/sections/impact/Impact.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";
import { VIEWPORT_ONCE, fadeInItemVariants } from "@/lib/motion";

const METRICS = [
  {
    value: 45,
    suffix: "+",
    label: "Projects Delivered",
    description: "End-to-end digital products shipped across fintech, SaaS, and e-commerce.",
  },
  {
    value: 45,
    prefix: "+",
    suffix: "%",
    label: "Avg. Engagement Lift",
    description: "Measurable improvement in user engagement and conversion across client products.",
  },
  {
    value: 4,
    suffix: "",
    label: "Industry Awards",
    description: "Recognition for design excellence in UI/UX from regional and international bodies.",
  },
  {
    value: 5,
    suffix: "",
    label: "Companies Served",
    description: "From early-stage startups to established tech companies across multiple industries.",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Empathy First",
    body: "Design begins with deep human understanding. Before a single frame is drawn, I study the people who will use it — their frustrations, habits, and mental models.",
  },
  {
    number: "02",
    title: "Systems Thinking",
    body: "Great design scales. I build component ecosystems and design languages that grow with the product, keeping teams aligned and development fast.",
  },
  {
    number: "03",
    title: "Motion as Language",
    body: "Animation is not decoration — it is communication. Every transition carries intent: guiding attention, signaling state, and making interfaces feel alive.",
  },
];

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, VIEWPORT_ONCE);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="relative w-full bg-background-dark overflow-hidden">

      {/* Top separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40 py-14 md:py-24 lg:py-32">

        {/* Section header */}
        <RevealContainer className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-20 lg:mb-24">
          <RevealItem>
            <p className="text-xs font-medium text-primary/80 uppercase tracking-[0.3em] mb-5">Design Impact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.0] tracking-tight max-w-lg">
              Work that moves<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                numbers.
              </span>
            </h2>
          </RevealItem>
          <RevealItem className="text-slate-500 text-sm md:text-base lg:text-lg max-w-sm leading-relaxed font-light md:text-right">
            Every design decision is a hypothesis. These are the results that proved them right.
          </RevealItem>
        </RevealContainer>

        {/* Metrics grid */}
        <RevealContainer className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.06] rounded-2xl overflow-hidden mb-6" stagger={0.08}>
          {METRICS.map((metric, index) => (
            <RevealItem
              key={index}
              className={`
                group relative p-5 sm:p-7 md:p-10 flex flex-col justify-between min-h-[170px] md:min-h-[210px]
                bg-[#0e0e13] hover:bg-[#111118] transition-colors duration-700
                ${index < 3 ? "border-r border-white/[0.06]" : ""}
                ${index < 2 ? "border-b border-white/[0.06] lg:border-b-0" : ""}
              `}
            >
              {/* Subtle cyan top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-primary/0 group-hover:bg-primary/40 transition-colors duration-700" />

              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-3 md:mb-4 tabular-nums">
                <AnimatedNumber value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white/80 mb-2 uppercase tracking-wider">{metric.label}</p>
                <p className="text-slate-600 text-xs leading-relaxed font-light">{metric.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealContainer>

        {/* Philosophy divider */}
        <RevealContainer>
          <RevealItem variants={fadeInItemVariants} className="flex items-center gap-6 my-10 md:my-16 lg:my-20">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-600">Design Philosophy</p>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </RevealItem>
        </RevealContainer>

        {/* Principles — editorial horizontal rows */}
        <RevealContainer className="flex flex-col" stagger={0.1}>
          {PRINCIPLES.map((principle, index) => (
            <RevealItem
              key={index}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-3 md:gap-10 items-start py-6 md:py-8 border-b border-white/[0.05] last:border-b-0 hover:bg-white/[0.01] transition-colors duration-500 cursor-default"
            >
              {/* Number + Title combined on mobile */}
              <div className="flex items-center gap-4 md:contents">
                <span className="text-xs font-mono text-slate-700 group-hover:text-primary/60 transition-colors duration-500 pt-0.5 md:pt-1 tracking-widest shrink-0">
                  {principle.number}
                </span>

                {/* Title */}
                <h3 className="text-lg md:text-2xl font-semibold text-white group-hover:text-white transition-colors duration-300 leading-tight">
                  {principle.title}
                </h3>
              </div>

              {/* Body */}
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light group-hover:text-slate-400 transition-colors duration-500 md:col-start-3">
                {principle.body}
              </p>
            </RevealItem>
          ))}
        </RevealContainer>

      </div>

      {/* Bottom separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

    </section>
  );
}
