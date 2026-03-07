"use client";

import { useRef, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { HERO_CONTENT } from "@/constants/hero/hero";

export default function Hero() {
  const sectionRef    = useRef<HTMLElement>(null);
  const glowRef       = useRef<HTMLDivElement>(null);
  const badgeRef      = useRef<HTMLDivElement>(null);
  const ruleRef       = useRef<HTMLDivElement>(null);
  const descRef       = useRef<HTMLParagraphElement>(null);
  const ctaRef        = useRef<HTMLDivElement>(null);
  const scrollRef     = useRef<HTMLDivElement>(null);
  const statsRef      = useRef<HTMLDivElement>(null);

  const magnetZoneRef = useRef<HTMLDivElement>(null);
  const magnetBtnRef  = useRef<HTMLAnchorElement>(null);

  const line1 = [HERO_CONTENT.title.line1, HERO_CONTENT.title.line2];
  const [throughWord, motionWord] = HERO_CONTENT.title.highlight.split(" ");

  useEffect(() => {
    const words = sectionRef.current?.querySelectorAll<HTMLElement>(".wr-word");
    if (words?.length) gsap.set(words, { y: "115%", opacity: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(badgeRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      )
      .to(".wr-word", {
        y: "0%", opacity: 1,
        duration: 1.3, stagger: 0.07, ease: "power4.out",
      }, "-=0.35")
      .fromTo(ruleRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.9, ease: "power3.inOut" },
        "-=0.65"
      )
      .fromTo(descRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(ctaRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(statsRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.75"
      );

      // Mouse-follow glow — desktop only
      const onMouseMove = (e: MouseEvent) => {
        if (!glowRef.current || window.innerWidth < 768) return;
        gsap.to(glowRef.current, {
          x: e.clientX - 350,
          y: e.clientY - 350,
          duration: 2.2,
          ease: "power2.out",
        });
      };
      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Magnetic CTA — desktop only, guard by pointer type
  const onMagnetMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const zone = magnetZoneRef.current;
    const btn  = magnetBtnRef.current;
    if (!zone || !btn) return;
    const r = zone.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width  / 2)) * 0.38;
    const y = (e.clientY - (r.top  + r.height / 2)) * 0.38;
    gsap.to(btn, { x, y, duration: 0.3, ease: "power2.out" });
  }, []);

  const onMagnetLeave = useCallback(() => {
    gsap.to(magnetBtnRef.current, {
      x: 0, y: 0, duration: 0.85, ease: "elastic.out(1, 0.45)",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex flex-col md:min-h-screen bg-background-dark overflow-hidden"
    >

      {/* AMBIENT */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] bg-cyan-500/[0.06] rounded-full blur-[130px]" />
        <div className="absolute -bottom-24 -left-24 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/[0.03] rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-400/[0.03] rounded-full blur-[100px]" />
        <div
          ref={glowRef}
          className="absolute w-[500px] h-[500px] rounded-full bg-cyan-400/[0.025] blur-[100px] will-change-transform hidden md:block"
          style={{ top: 0, left: 0 }}
        />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/[0.025] to-transparent" />
      </div>

      {/* CENTERED CONTENT */}

      <div className="relative z-10 md:flex-1 flex flex-col items-center md:justify-center text-center px-5 md:px-12 pt-28 pb-10 md:pt-32 md:pb-14">

        {/* Badge */}
        <div ref={badgeRef} className="mb-8 md:mb-12" style={{ opacity: 0 }}>
          <span className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full border border-white/10 bg-white/[0.015] backdrop-blur-xl">
            <span className="relative flex h-[5px] w-[5px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-[5px] w-[5px] bg-emerald-400" />
            </span>
            <span className="text-[10px] md:text-[11px] font-medium text-slate-400 tracking-[0.22em] uppercase">
              {HERO_CONTENT.badge}
            </span>
          </span>
        </div>

        {/* WORD-REVEAL HEADING */}
        <h1
          className="mb-6 md:mb-8 select-none"
          aria-label={`${line1.join(" ")} — ${HERO_CONTENT.title.highlight}`}
        >
          {/* Line 1: ELEVATING BRANDS */}
          <div className="flex items-end justify-center gap-[0.18em] md:gap-[0.22em] mb-[0.05em]">
            {line1.map((word, i) => (
              <div key={i} className="overflow-hidden pb-[0.06em]">
                <span className="wr-word inline-block font-black uppercase tracking-[-0.02em] md:tracking-[-0.025em] leading-[0.94] text-white will-change-transform text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
                  {word}
                </span>
              </div>
            ))}
          </div>

          {/* Line 2: THROUGH (dim) MOTION (gradient) */}
          <div className="flex items-end justify-center gap-[0.18em] md:gap-[0.22em]">
            <div className="overflow-hidden pb-[0.06em]">
              <span className="wr-word inline-block font-black uppercase tracking-[-0.02em] md:tracking-[-0.025em] leading-[0.94] text-white/[0.17] will-change-transform text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {throughWord}
              </span>
            </div>
            <div className="overflow-hidden pb-[0.06em]">
              <span className="wr-word inline-block font-black uppercase tracking-[-0.02em] md:tracking-[-0.025em] leading-[0.94] text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-400 to-cyan-300 will-change-transform text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {motionWord}
              </span>
            </div>
          </div>
        </h1>

        {/* Role rule */}
        <div
          ref={ruleRef}
          className="flex items-center gap-4 w-full max-w-[260px] md:max-w-[300px] mb-6 md:mb-9 origin-center"
          style={{ opacity: 0 }}
        >
          <div className="flex-1 h-px bg-white/[0.07]" />
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.32em] md:tracking-[0.38em] text-slate-600 font-medium whitespace-nowrap">
            Sr. UX/UI & Motion Designer
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </div>

        {/* Description */}
        <p
          ref={descRef}
          className="text-slate-500 text-sm md:text-[0.98rem] leading-[1.75] max-w-[320px] md:max-w-[400px] font-light mb-8 md:mb-11"
          style={{ opacity: 0 }}
        >
          {HERO_CONTENT.description}
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-3"
          style={{ opacity: 0 }}
        >
          {/* Primary — Magnetic on desktop */}
          <div
            ref={magnetZoneRef}
            onMouseMove={onMagnetMove}
            onMouseLeave={onMagnetLeave}
            className="p-6 -m-6 md:p-8 md:-m-8"
          >
            <a
              ref={magnetBtnRef}
              href="#work"
              className="group inline-flex h-[44px] md:h-[46px] items-center gap-2.5 px-7 md:px-8 rounded-full bg-primary text-black font-semibold text-[13px] will-change-transform shadow-[0_0_40px_-14px_rgba(0,229,255,0.5)]"
            >
              View My Work
              <ArrowRight size={13} className="group-hover:translate-x-[3px] transition-transform duration-300" />
            </a>
          </div>

          {/* Secondary */}
          <a
            href="#contact"
            className="inline-flex h-[44px] md:h-[46px] items-center px-7 md:px-8 rounded-full border border-white/10 text-slate-500 font-medium text-[13px] hover:text-white hover:border-white/[0.2] hover:bg-white/[0.03] transition-all duration-500"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* SCROLL HINT — hidden on small mobile */}
      <div
        ref={scrollRef}
        className="relative z-10 hidden sm:flex flex-col items-center gap-2.5 pb-6"
        style={{ opacity: 0 }}
        aria-hidden
      >
        <div className="w-px h-8 bg-linear-to-b from-white/[0.15] to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.45em] text-slate-700">Scroll</span>
      </div>

      {/* STATS BAR */}
      <div
        ref={statsRef}
        className="hidden md:block relative z-10 w-full border-t border-white/[0.06]"
        style={{ opacity: 0 }}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { label: "Conversion Lift", value: "+45%" },
              { label: "Awards",          value: "4 Won" },
              { label: "Projects",        value: "45+"  },
              { label: "Years Active",    value: "2+"   },
            ].map((stat, i) => (
              <div key={i} className="px-4 md:px-10 py-4 md:py-5 flex flex-col gap-0.5 group cursor-default">
                <p className="text-lg md:text-2xl font-black text-white tabular-nums group-hover:text-primary transition-colors duration-500">
                  {stat.value}
                </p>
                <p className="text-slate-700 text-[10px] md:text-[11px] uppercase tracking-wide font-light leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
