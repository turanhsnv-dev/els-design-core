"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track this section's progress as it scrolls through the viewport
  // "start end" = top of section meets bottom of viewport (just entering)
  // "end start" = bottom of section meets top of viewport (just leaving)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll animations mapping based on viewport progress (0 to 1)
  // Coming in: scale up, fade in, move up
  // Going out: scale down, fade out, move further up
  const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [150, 0, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1, 0.9]);

  return (
    <section 
      id="showcase" 
      ref={containerRef}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-white dark:bg-background-dark min-h-[120vh] flex flex-col justify-center"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />
      
      <Container className="relative z-10">
        <RevealContainer className="text-center mb-16 md:mb-24">
          <RevealItem className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.07] text-primary text-xs font-medium uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Visual Exploration
          </RevealItem>
          
          <RevealItem className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-5 tracking-tight leading-none">
            Design <GradientText>Dimensions</GradientText>
          </RevealItem>
          
          <RevealItem className="text-slate-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Scroll to see the details unfold. Elements react to your interaction, creating a dynamic visual experience.
          </RevealItem>
        </RevealContainer>

        <motion.div 
          style={{ y, opacity, scale }}
          className="relative w-full max-w-5xl mx-auto aspect-[16/10] md:aspect-video rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-[0_0_80px_rgba(0,229,255,0.15)]"
        >
          {/* Subtle glow behind the image */}
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />
          
          <Image
            src="/ux-ui-showcase.jpg"
            alt="UX/UI Showcase Design"
            fill
            className="object-cover relative z-10"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
          
          {/* Inner shadow overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20 z-20 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-30 flex justify-between items-end">
            <div>
              <p className="text-black/60 dark:text-white/60 text-xs font-medium uppercase tracking-widest mb-1">Concept</p>
              <h3 className="text-slate-900 dark:text-white font-semibold text-xl md:text-2xl">Spatial UI Interface</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 flex items-center justify-center animate-pulse">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
