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

  // Magnetic button
  const magnetZoneRef = useRef<HTMLDivElement>(null);
  const magnetBtnRef  = useRef<HTMLAnchorElement>(null);

  // Derived words
  const line1          = [HERO_CONTENT.title.line1, HERO_CONTENT.title.line2];
  const [throughWord, motionWord] = HERO_CONTENT.title.highlight.split(" ");

  useEffect(() => {
    // ── Immediately hide word-reveal spans so there's no FOUC
    const words = sectionRef.current?.querySelectorAll<HTMLElement>(".wr-word");
    if (words?.length) gsap.set(words, { y: "115%", opacity: 0 });

    const ctx = gsap.context(() => {
      // ── Master entrance timeline
      const tl = gsap.timeline({ delay: 0.25 });

      // 1. Badge fades up
      tl.fromTo(
        badgeRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
      )
      // 2. Words cascade up from their masks — the signature moment
      .to(".wr-word", {
        y: "0%",
        opacity: 1,
        duration: 1.35,
        stagger: 0.075,
        ease: "power4.out",
      }, "-=0.4")
      // 3. Role rule reveals
      .fromTo(
        ruleRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.9, ease: "power3.inOut" },
        "-=0.7"
      )
      // 4. Description rises
      .fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
        "-=0.55"
      )
      // 5. CTAs appear
      .fromTo(
        ctaRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.65"
      )
      // 6. Scroll hint fades
      .fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, ease: "power2.out" },
        "-=0.5"
      )
      // 7. Stats bar rises
      .fromTo(
        statsRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.8"
      );

      // ── Mouse-follow ambient glow (2s lag = heavy, expensive feel)
      const onMouseMove = (e: MouseEvent) => {
        if (!glowRef.current) return;
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

  // ── Magnetic CTA handlers (pure GSAP — no re-renders)
  const onMagnetMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
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
      x: 0, y: 0,
      duration: 0.85,
      ease: "elastic.out(1, 0.45)",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col bg-background-dark overflow-hidden"
    >

      {/* ━━━━━━━━━━━━━━━━━━ AMBIENT BACKGROUND ━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>

        {/* Large cyan crown — top center, very diffuse */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-cyan-500/[0.065] rounded-full blur-[150px]" />

        {/* Depth vignette — bottom corners */}
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-600/[0.035] rounded-full blur-[130px]" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-cyan-400/[0.035] rounded-full blur-[130px]" />

        {/* Mouse-follow reactive glow */}
        <div
          ref={glowRef}
          className="absolute w-[700px] h-[700px] rounded-full bg-cyan-400/[0.028] blur-[110px] will-change-transform"
          style={{ top: 0, left: 0 }}
        />

        {/* Barely-visible equator line — adds depth */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/[0.025] to-transparent" />
      </div>

      {/* ━━━━━━━━━━━━━━━━━━ CENTERED CONTENT ━━━━━━━━━━━━━━━━━━ */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 pt-24 pb-14">

        {/* Available badge */}
        <div ref={badgeRef} className="mb-10 md:mb-14 mt-12" style={{ opacity: 0 }}>
          <span className="inline-flex items-center gap-2.5 px-5 py-[9px] rounded-full border border-white/10 bg-white/[0.015] backdrop-blur-xl">
            <span className="relative flex h-[5px] w-[5px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-[5px] w-[5px] bg-emerald-400" />
            </span>
            <span className="text-[10.5px] font-medium text-slate-400 tracking-[0.28em] uppercase">
              {HERO_CONTENT.badge}
            </span>
          </span>
        </div>

        {/* ━━━ WORD-REVEAL HEADING ━━━
            Each word lives inside overflow-hidden so it slides up
            from invisible into view — the signature agency technique. */}
        <h1
          className="mb-7 md:mb-9 select-none"
          aria-label={`${line1.join(" ")} — ${HERO_CONTENT.title.highlight}`}
        >

          {/* Line 1 — ELEVATING BRANDS */}
          <div className="flex items-end justify-center gap-[0.22em] mb-[0.06em]">
            {line1.map((word, i) => (
              <div key={i} className="overflow-hidden pb-[0.06em]">
                <span className="wr-word inline-block font-black uppercase tracking-[-0.025em] leading-[0.94] text-white will-change-transform text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem]">
                  {word}
                </span>
              </div>
            ))}
          </div>

          {/* Line 2 — THROUGH (dim) MOTION (gradient) */}
          <div className="flex items-end justify-center gap-[0.22em]">
            <div className="overflow-hidden pb-[0.06em]">
              <span className="wr-word inline-block font-black uppercase tracking-[-0.025em] leading-[0.94] text-white/[0.17] will-change-transform text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem]">
                {throughWord}
              </span>
            </div>
            <div className="overflow-hidden pb-[0.06em]">
              <span className="wr-word inline-block font-black uppercase tracking-[-0.025em] leading-[0.94] text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-400 to-cyan-300 will-change-transform text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem]">
                {motionWord}
              </span>
            </div>
          </div>
        </h1>

        {/* Role rule — thin, scales from center */}
        <div
          ref={ruleRef}
          className="flex items-center gap-5 w-full max-w-[300px] mb-8 md:mb-10 origin-center"
          style={{ opacity: 0 }}
        >
          <div className="flex-1 h-px bg-white/[0.07]" />
          <span className="text-[9px] uppercase tracking-[0.38em] text-slate-600 font-medium whitespace-nowrap">
            Sr. UX/UI & Motion Designer
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </div>

        {/* Description */}
        <p
          ref={descRef}
          className="text-slate-500 text-[0.98rem] md:text-base leading-[1.75] max-w-[400px] font-light mb-10 md:mb-12"
          style={{ opacity: 0 }}
        >
          {HERO_CONTENT.description}
        </p>

        {/* ━━━ CTAs ━━━ */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-3"
          style={{ opacity: 0 }}
        >
          {/* Primary — Magnetic */}
          <div
            ref={magnetZoneRef}
            onMouseMove={onMagnetMove}
            onMouseLeave={onMagnetLeave}
            className="p-8 -m-8"
          >
            <a
              ref={magnetBtnRef}
              href="#work"
              className="group inline-flex h-[46px] items-center gap-2.5 px-8 rounded-full bg-primary text-black font-semibold text-[13px] will-change-transform shadow-[0_0_50px_-14px_rgba(0,229,255,0.5)]"
            >
              View My Work
              <ArrowRight
                size={13}
                className="group-hover:translate-x-[3px] transition-transform duration-300"
              />
            </a>
          </div>

          {/* Secondary */}
          <a
            href="#contact"
            className="inline-flex h-[46px] items-center px-8 rounded-full border border-white/10 text-slate-500 font-medium text-[13px] hover:text-white hover:border-white/[0.2] hover:bg-white/[0.03] transition-all duration-500"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* ━━━ SCROLL HINT ━━━ */}
      <div
        ref={scrollRef}
        className="relative z-10 flex flex-col items-center gap-2.5 pb-7"
        style={{ opacity: 0 }}
        aria-hidden
      >
        <div className="w-px h-9 bg-linear-to-b from-white/[0.16] to-transparent" />
        <span className="text-[8px] uppercase tracking-[0.48em] text-slate-700">Scroll</span>
      </div>

      {/* ━━━ STATS BAR ━━━ */}
      <div
        ref={statsRef}
        className="relative z-10 w-full border-t border-white/[0.06]"
        style={{ opacity: 0 }}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { label: "Avg. Conversion Lift", value: "+45%" },
              { label: "Industry Awards",       value: "4 Won" },
              { label: "Projects Shipped",      value: "45+"  },
              { label: "Years Active",           value: "2+"   },
            ].map((stat, i) => (
              <div key={i} className="px-6 md:px-10 py-5 flex flex-col gap-1 group cursor-default">
                <p className="text-xl md:text-2xl font-black text-white tabular-nums group-hover:text-primary transition-colors duration-500">
                  {stat.value}
                </p>
                <p className="text-slate-700 text-[11px] uppercase tracking-wider font-light">
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
