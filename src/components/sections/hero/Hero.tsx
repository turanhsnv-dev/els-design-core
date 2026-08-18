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
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-dvh w-full overflow-hidden bg-background-dark flex items-center pt-28 md:pt-32 pb-24"
    >
      <SpotlightMesh />

      <Container className="relative z-10">
        <motion.p
          {...fadeUp(0)}
          className="text-lg md:text-xl text-slate-400 font-light mb-2"
        >
          Hey there, I&apos;m
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display font-bold text-white leading-[0.95] tracking-[-0.02em] text-[clamp(2.75rem,7vw,6.5rem)]"
        >
          <GradientText variant="cyan">Elza.</GradientText>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-4 text-white/70 text-lg md:text-xl font-medium"
        >
          Senior UX/UI &amp; Motion Designer
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-5 max-w-lg text-slate-500 text-base leading-relaxed font-light"
        >
          I design beautifully simple digital products — and engineer the motion that
          makes them feel alive. Five years of turning ambiguous problems into
          interfaces that perform.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
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
          {...fadeUp(0.5)}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
        >
          {META.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/50 text-sm">
              <Icon size={14} strokeWidth={1.5} className="text-cyan-400/80" />
              <span className="tracking-wide">{label}</span>
            </div>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-300"
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
        className="absolute -bottom-40 right-0 w-[700px] h-[700px] rounded-full bg-purple-600/6 blur-[160px] pointer-events-none z-0"
      />
    </>
  );
}

function ServicesStrip() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.05] bg-background-dark/60 backdrop-blur-sm py-5 hidden md:block">
      <Container>
        <div className="grid grid-cols-3 gap-6 md:gap-10">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                href="#services"
                className="group flex items-center gap-3 min-w-0"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-primary/80 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500 shrink-0">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{service.title}</p>
                  <p className="text-slate-500 text-xs font-light truncate">
                    {service.shortDesc}
                  </p>
                </div>
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
      transition={{ delay: 1.4, duration: 1 }}
      className="hidden lg:flex absolute bottom-24 right-8 xl:right-16 z-10 flex-col items-center gap-3 text-white/40 hover:text-white transition-colors duration-500 group"
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
