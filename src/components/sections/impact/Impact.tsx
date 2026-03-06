// src/components/sections/impact/Impact.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-24 md:py-32">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-24"
        >
          <div>
            <p className="text-xs font-medium text-primary/80 uppercase tracking-[0.3em] mb-5">Design Impact</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight max-w-lg">
              Work that moves<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                numbers.
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm leading-relaxed font-light md:text-right">
            Every design decision is a hypothesis. These are the results that proved them right.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.06] rounded-2xl overflow-hidden mb-6">
          {METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`
                group relative p-8 md:p-10 flex flex-col justify-between min-h-[220px]
                bg-[#0e0e13] hover:bg-[#111118] transition-colors duration-700
                ${index < 3 ? "border-r border-white/[0.06]" : ""}
                ${index < 2 ? "border-b border-white/[0.06] lg:border-b-0" : ""}
              `}
            >
              {/* Subtle cyan top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-primary/0 group-hover:bg-primary/40 transition-colors duration-700" />

              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-4 tabular-nums">
                <AnimatedNumber value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white/80 mb-2 uppercase tracking-wider">{metric.label}</p>
                <p className="text-slate-600 text-xs leading-relaxed font-light">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="flex items-center gap-6 my-16 md:my-20"
        >
          <div className="h-px flex-1 bg-white/[0.06]" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-600">Design Philosophy</p>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

        {/* Principles — editorial horizontal rows */}
        <div className="flex flex-col">
          {PRINCIPLES.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-10 items-start py-8 border-b border-white/[0.05] last:border-b-0 hover:bg-white/[0.01] transition-colors duration-500 cursor-default"
            >
              {/* Number */}
              <span className="text-xs font-mono text-slate-700 group-hover:text-primary/60 transition-colors duration-500 pt-1 tracking-widest">
                {principle.number}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-white transition-colors duration-300 leading-tight">
                {principle.title}
              </h3>

              {/* Body */}
              <p className="text-slate-500 text-base leading-relaxed font-light group-hover:text-slate-400 transition-colors duration-500">
                {principle.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom separator */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

    </section>
  );
}
