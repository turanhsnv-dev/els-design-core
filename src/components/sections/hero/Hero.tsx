"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Calendar, MapPin, Sparkles } from "lucide-react";
import Container from "@/components/shared/ui/Container";
import { SITE } from "@/constants/site";

const META = [
  { icon: MapPin, label: SITE.location },
  { icon: Calendar, label: "Since 2020" },
  { icon: Sparkles, label: "4× Award Winner" },
];

const BRANDS = ["Burncode", "Innoland", "IT Brains", "ITB Techno", "Pelcare"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh w-full overflow-hidden bg-background-dark flex items-center pt-28 md:pt-32 pb-32"
    >
      <VideoBackdrop />
      <SpotlightMesh />
      <CornerFrame />

      <Container className="relative z-10 flex flex-col">
        <motion.h1
          {...fadeUp(0.15)}
          className="font-display font-bold text-white leading-[0.95] tracking-[-0.025em]
                     text-[clamp(2.25rem,6vw,5.5rem)] max-w-[18ch]"
        >
          <span className="block">Design that</span>
          <span className="block">
            doesn&apos;t just <span className="italic font-light text-white/60">look</span>
          </span>
          <span className="block">
            good — it{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-white to-cyan-400">
              moves.
            </span>
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-8 md:mt-10 max-w-xl text-slate-400 text-base md:text-lg leading-relaxed font-light"
        >
          <span className="text-white/90 font-normal">Elza Xudiyeva</span> — Senior UX/UI &amp;
          Motion Designer engineering cinematic digital products for ambitious brands.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="mt-10 md:mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full bg-white text-black pl-6 pr-2 py-2 font-semibold text-sm md:text-base transition-all duration-500 hover:bg-cyan-300 hover:-translate-y-0.5"
          >
            View Selected Work
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white group-hover:bg-black/90 transition-colors">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-white/80 hover:text-white px-6 py-3.5 font-medium text-sm md:text-base transition-all duration-500"
          >
            Book a call
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.6)}
          className="mt-16 md:mt-24 flex flex-wrap items-center gap-x-8 md:gap-x-12 gap-y-4"
        >
          {META.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/50 text-xs md:text-sm">
              <Icon size={14} strokeWidth={1.5} className="text-cyan-400/80" />
              <span className="tracking-wide">{label}</span>
            </div>
          ))}
        </motion.div>
      </Container>

      <IndexBadge />
      <ScrollCue />
      <MarqueeStrip />
    </section>
  );
}

function VideoBackdrop() {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/motion.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-r from-background-dark via-background-dark/85 to-background-dark/40" />
      <div className="absolute inset-0 bg-linear-to-b from-background-dark/80 via-transparent to-background-dark" />
    </div>
  );
}

function SpotlightMesh() {
  return (
    <>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        style={{ willChange: "opacity" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/8 blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        style={{ willChange: "opacity" }}
        className="absolute -bottom-40 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/6 blur-[160px] pointer-events-none z-0"
      />
    </>
  );
}

function CornerFrame() {
  return (
    <div aria-hidden className="absolute inset-6 md:inset-10 pointer-events-none z-[1]">
      <Bracket className="top-0 left-0" />
      <Bracket className="top-0 right-0 rotate-90" />
      <Bracket className="bottom-0 left-0 -rotate-90" />
      <Bracket className="bottom-0 right-0 rotate-180" />
    </div>
  );
}

function Bracket({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute w-6 h-6 md:w-9 md:h-9 text-white/25 ${className}`}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path d="M1 12 L1 1 L12 1" stroke="currentColor" strokeWidth="1" />
    </motion.svg>
  );
}

function IndexBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="hidden lg:flex absolute top-32 right-10 xl:right-16 z-10 flex-col items-end gap-2 text-white/40"
    >
      <span className="text-[10px] font-medium tracking-[0.3em] uppercase">
        Portfolio / 2026
      </span>
      <div className="flex items-baseline gap-1">
        <span className="font-display font-bold text-4xl md:text-5xl text-white/90 leading-none tabular-nums">
          01
        </span>
        <span className="text-xs text-white/30 tabular-nums">/ 09</span>
      </div>
      <span className="h-px w-16 bg-linear-to-r from-transparent to-white/30" />
      <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/50">
        Introducing
      </span>
    </motion.div>
  );
}

function ScrollCue() {
  return (
    <motion.a
      href="#showreel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="hidden lg:flex absolute bottom-28 right-10 xl:right-16 z-10 flex-col items-center gap-3 text-white/40 hover:text-white transition-colors duration-500 group"
    >
      <span className="text-[10px] font-medium tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180">
        Scroll to explore
      </span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
        className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 group-hover:border-white/40 transition-colors"
      >
        <ArrowDown size={12} />
      </motion.span>
    </motion.a>
  );
}

function MarqueeStrip() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.05] bg-background-dark/50 backdrop-blur-sm py-4 md:py-5 overflow-hidden">
      <Container className="flex items-center gap-4 md:gap-6">
        <span className="hidden md:inline text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 shrink-0">
          Trusted Clients
        </span>
        <span className="hidden md:inline h-4 w-px bg-white/10 shrink-0" />
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 md:gap-x-12">
          {BRANDS.map((b) => (
            <span
              key={b}
              className="text-white/50 hover:text-white transition-colors duration-500 text-sm md:text-base font-semibold tracking-tight"
            >
              {b}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
