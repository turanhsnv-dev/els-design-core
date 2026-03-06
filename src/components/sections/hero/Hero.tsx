"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import { HERO_CONTENT } from "@/constants/hero/hero";

export default function Hero() {
  const containerRef = useRef(null);
  const headRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading drops in cinematic
      if (headRef.current) {
        gsap.fromTo(
          headRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.3 }
        );
      }
      // Sub content fades up
      if (subRef.current) {
        gsap.fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.7 }
        );
      }
      // Photo slides in from right
      if (photoRef.current) {
        gsap.fromTo(
          photoRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.5 }
        );
      }
      // Stats bar rises
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: "power3.out", delay: 1.1 }
        );
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-background-dark"
    >
      {/* Ambient glow — very restrained */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[180px] pointer-events-none" />

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex items-center w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-28 pb-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* LEFT — Editorial headline */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-slate-400 tracking-[0.2em] uppercase">
                {HERO_CONTENT.badge}
              </span>
            </div>

            {/* Giant headline */}
            <div ref={headRef} style={{ opacity: 0 }}>
              <h1 className="text-[clamp(3rem,7vw,6rem)] font-black tracking-tight leading-[1.0] text-white">
                {HERO_CONTENT.title.line1}
                <br />
                {HERO_CONTENT.title.line2}
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  {HERO_CONTENT.title.highlight}
                </span>
              </h1>
            </div>

            {/* Description + CTAs */}
            <div ref={subRef} className="flex flex-col gap-6" style={{ opacity: 0 }}>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md font-light">
                {HERO_CONTENT.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3">
                <a
                  href="#work"
                  className="group inline-flex h-12 items-center gap-2 px-8 rounded-full bg-primary text-black font-semibold text-sm hover:opacity-90 transition-opacity duration-300 shadow-[0_0_40px_-12px_rgba(0,229,255,0.5)]"
                >
                  View My Work
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center px-8 rounded-full border border-white/[0.08] bg-white/[0.02] text-slate-300 font-medium text-sm hover:bg-white/[0.06] hover:text-white hover:border-white/[0.14] transition-all duration-400"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Portrait */}
          <div ref={photoRef} className="relative order-1 lg:order-2 flex justify-center lg:justify-end" style={{ opacity: 0 }}>
            <div className="relative w-[280px] sm:w-[340px] lg:w-full max-w-[420px]">

              {/* Portrait frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0e0e13]">
                <Image
                  src="/elza-main.jpg"
                  alt="Elza Xudiyeva — Senior UX/UI & Motion Designer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050505]/80 via-[#050505]/10 to-transparent" />

                {/* Role badge — bottom left of photo */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-0.5">Currently at</p>
                      <p className="text-white font-medium text-sm">Burncode Company</p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/[0.15] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat — top right corner */}
              <div className="absolute -top-4 -right-4 bg-[#0e0e13] border border-white/[0.1] rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-3xl font-black text-white tabular-nums leading-none mb-1">45+</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider">Projects</p>
              </div>

              {/* Floating award badge — bottom right */}
              <div className="absolute -bottom-4 -right-4 bg-[#0e0e13] border border-white/[0.1] rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-3xl font-black text-primary tabular-nums leading-none mb-1">4</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider">Awards</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div ref={statsRef} className="w-full border-t border-white/[0.06]" style={{ opacity: 0 }}>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { label: "Avg. Conversion Lift", value: "+45%" },
              { label: "Industry Awards", value: "4 Won" },
              { label: "Projects Shipped", value: "45+" },
              { label: "Years Active", value: "2+" },
            ].map((stat, i) => (
              <div key={i} className="px-6 md:px-8 py-5 flex flex-col gap-1 group">
                <p className="text-xl md:text-2xl font-black text-white tabular-nums">{stat.value}</p>
                <p className="text-slate-600 text-xs uppercase tracking-wider font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-30">
        <ArrowDown size={14} className="text-white animate-bounce" />
        <span className="text-[10px] text-slate-500 uppercase tracking-widest">Scroll</span>
      </div>

    </section>
  );
}
