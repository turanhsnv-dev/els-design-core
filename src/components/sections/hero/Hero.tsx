"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Calendar, MapPin } from "lucide-react";
import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import { SITE } from "@/constants/site";
import { SERVICES } from "@/constants/services";

const META = [
  { icon: MapPin, label: SITE.location },
  { icon: Calendar, label: "Since 2020" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const scaleUp = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh w-full overflow-hidden bg-white dark:bg-background-dark flex items-center justify-center pt-28 md:pt-32 pb-24"
    >
      <SpotlightMesh />
      <BackgroundGrid />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          {...scaleUp(0.1)}
          className="font-display font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight text-[clamp(2.5rem,7vw,7rem)] max-w-5xl mx-auto drop-shadow-2xl"
        >
          Designing digital <br className="hidden md:block" />
          experiences that <GradientText variant="cyan">matter.</GradientText>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-6 md:mt-8 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-base md:text-lg lg:text-xl leading-relaxed font-light"
        >
          Senior UX/UI & Motion Designer. I turn complex problems into beautifully simple interfaces and engineer motion that makes them feel alive.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white text-black px-8 py-4 font-semibold text-sm md:text-base transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">View Selected Work</span>
            <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-black text-slate-900 dark:text-white group-hover:bg-white/90 dark:bg-black/90 transition-colors">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 dark:border-white/15 hover:border-black/40 dark:border-white/40 hover:bg-black/[0.04] dark:bg-white/[0.04] text-black/80 dark:text-white/80 hover:text-slate-900 dark:text-white px-8 py-4 font-medium text-sm md:text-base transition-all duration-500 w-full sm:w-auto"
          >
            Book a call
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.5)}
          className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] backdrop-blur-sm"
        >
          {META.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-black/50 dark:text-white/50 text-sm">
              <Icon size={14} strokeWidth={1.5} className="text-cyan-400/80" />
              <span className="tracking-wide">{label}</span>
            </div>
          ))}
          <div className="w-px h-4 bg-black/10 dark:bg-white/10 hidden md:block" />
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 text-black/50 dark:text-white/50 hover:text-slate-900 dark:text-white text-sm transition-colors duration-300"
          >
            {SITE.email}
          </a>
        </motion.div>
      </Container>

      <ServicesStrip />
      <ScrollCue />
    </section>
  );
}

function SpotlightMesh() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] rounded-[100%] bg-cyan-500/10 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[150px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]"
      />
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}

function ServicesStrip() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-black/[0.05] dark:border-white/[0.05] bg-white dark:bg-background-dark/60 backdrop-blur-md py-4 hidden md:block">
      <Container>
        <div className="flex items-center justify-center gap-12 lg:gap-24">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                href="#services"
                className="group flex items-center gap-3 transition-opacity hover:opacity-100 opacity-70"
              >
                <div className="w-8 h-8 rounded-lg bg-black/[0.05] dark:bg-white/[0.05] flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon size={14} strokeWidth={2} />
                </div>
                <span className="text-slate-900 dark:text-white text-sm font-medium tracking-wide">{service.title}</span>
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

function ScrollCue() {
  return (
    <motion.a
      href="#showreel"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="hidden lg:flex absolute bottom-24 right-12 z-20 flex-col items-center gap-4 text-black/40 dark:text-white/40 hover:text-slate-900 dark:text-white transition-colors duration-500 group"
    >
      <span className="text-[10px] font-semibold tracking-[0.4em] uppercase [writing-mode:vertical-rl] rotate-180">
        Scroll
      </span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 dark:border-white/10 group-hover:border-black/30 dark:border-white/30 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        <ArrowDown size={14} />
      </motion.span>
    </motion.a>
  );
}
