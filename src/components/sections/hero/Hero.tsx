"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, MousePointer2, Zap, Layers, Palette } from "lucide-react";
import gsap from "gsap";
import { HERO_CONTENT } from "@/constants/hero/hero";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Metinler sırayla gelsin
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Sağ taraftaki UI elementleri hafifçe süzülsün (Floating effect)
      gsap.to(".floating-ui", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0B0C15]">
      
      {/* ARKA PLAN EFEKTLERİ */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Izgara Deseni */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
         
         {/* Spot Işıklar - Elza'nın renkleri */}
         <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- SOL TARAF: ELEGANT METİN --- */}
        <div className="flex flex-col gap-8 text-center lg:text-left pt-10 lg:pt-0">
          
          {/* Badge */}
          <div className="hero-text inline-flex items-center gap-2 self-center lg:self-start px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              {HERO_CONTENT.badge}
            </span>
          </div>

          {/* Başlık - Boyutlar dengelendi */}
          <h1 className="hero-text text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
            {HERO_CONTENT.title.line1} <br />
            {HERO_CONTENT.title.line2} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400 animate-gradient-x">
              {HERO_CONTENT.title.highlight}
            </span>
          </h1>

          {/* Açıklama */}
          <p className="hero-text text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
            {HERO_CONTENT.description}
          </p>

          {/* Butonlar */}
          <div className="hero-text flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
            <button className="h-12 px-8 rounded-full bg-primary text-white font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_30px_-10px_rgba(100,103,242,0.6)] group">
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
              Contact Me
            </button>
          </div>
        </div>

        {/* --- SAĞ TARAF: YÜZEN UI KOMPOZİSYONU --- */}
        <div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end perspective-1000">
          
          {/* Ana Konteyner - UI Stack */}
          <div className="relative w-[320px] md:w-[380px] h-[500px]">
            
            {/* 1. ARKA KATMAN: Kod Bloğu / Blur */}
            <div className="floating-ui absolute -right-12 top-20 w-64 h-40 bg-[#1e1e2e] rounded-xl border border-white/10 p-4 opacity-60 blur-[1px] transform rotate-12 z-0">
               <div className="space-y-2">
                   <div className="flex gap-2 mb-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                   </div>
                   <div className="w-full h-2 bg-white/10 rounded-full"></div>
                   <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
                   <div className="w-1/2 h-2 bg-purple-500/20 rounded-full"></div>
               </div>
            </div>

            {/* 2. ORTA KATMAN: Mobil Arayüz Mockup */}
            <div className="floating-ui absolute inset-0 bg-[#151520] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden z-10">
               {/* Mockup Header */}
               <div className="h-16 border-b border-white/5 flex items-center justify-between px-6">
                  <div className="w-8 h-8 rounded-full bg-white/10"></div>
                  <div className="w-24 h-2 bg-white/10 rounded-full"></div>
               </div>
               {/* Mockup Content */}
               <div className="p-6 space-y-6">
                  <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/5 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                              <Zap size={20} className="text-white" />
                          </div>
                      </div>
                  </div>
                  <div className="space-y-3">
                      <div className="flex justify-between">
                         <div className="w-1/3 h-3 bg-white/20 rounded-full"></div>
                         <div className="w-10 h-3 bg-primary/40 rounded-full"></div>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full"></div>
                      <div className="w-5/6 h-2 bg-white/5 rounded-full"></div>
                  </div>
                  <div className="flex gap-4 mt-8">
                      <div className="w-1/2 h-24 rounded-2xl bg-white/5 border border-white/5"></div>
                      <div className="w-1/2 h-24 rounded-2xl bg-white/5 border border-white/5"></div>
                  </div>
               </div>
            </div>

            {/* 3. ÖN KATMAN: Uçan Araçlar (Tools) */}
            
            {/* Color Palette Card */}
            <div className="floating-ui absolute -left-8 top-32 bg-[#1c1c27]/90 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-xl z-20">
                <div className="flex flex-col gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary border-2 border-white/20"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white/20"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white/20"></div>
                    <div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50">
                        <Palette size={14} />
                    </div>
                </div>
            </div>

            {/* Cursor & Label */}
            <div className="floating-ui absolute -right-6 bottom-32 flex items-center gap-3 z-30">
                <div className="relative">
                    <MousePointer2 size={32} className="text-white fill-primary drop-shadow-[0_0_15px_rgba(100,103,242,0.8)]" />
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold shadow-lg">
                    Elza <span className="opacity-70">is editing...</span>
                </div>
            </div>

            {/* Stats Badge */}
            <div className="floating-ui absolute -left-4 bottom-12 bg-[#1c1c27]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Layers size={20} />
                </div>
                <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Projects</p>
                    <p className="text-lg font-bold text-white">45+ Done</p>
                </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}