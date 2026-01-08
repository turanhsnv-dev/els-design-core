"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, MousePointer2, Zap, Layers } from "lucide-react";
import gsap from "gsap";
import { HERO_CONTENT } from "@/constants/hero/hero";
import DarkVeil from "@/components/shared/backgrounds/DarkVeil";
import BlurText from "@/components/shared/text/BlurText"; // Yeni komponenti import etdik

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // DƏYİŞİKLİK: ".hero-text" selectorunu çıxartdıq, çünki mətni artıq BlurText idarə edir.
      // Yalnız digər elementlər (Description, Buttons, Badge) üçün GSAP qalıb.
      gsap.from(".hero-fade-in", {
        y: 20, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.15, 
        ease: "power3.out",
        delay: 0.5 // Mətn gələndən sonra başlasınlar
      });

      gsap.to(".floating-ui", {
        y: -20, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: { each: 0.5, from: "random" }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-20 overflow-hidden bg-[#0B0C15]">
      
      {/* --- ARKA PLAN (DarkVeil) --- */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <DarkVeil 
            speed={0.6}
            scanlineFrequency={0.5} 
            warpAmount={0.5}
            noiseIntensity={0}
            hueShift={0}
        />
        <div className="absolute inset-0 bg-background-dark/50 backdrop-blur-[0px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        
        {/* SOL TARAF */}
        <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left order-2 lg:order-1">
          
          {/* Badge (Fade-in ilə gəlir) */}
          <div className="hero-fade-in inline-flex items-center gap-2 self-center lg:self-start px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              {HERO_CONTENT.badge}
            </span>
          </div>

          {/* BAŞLIQ - BLURTEXT İLƏ */}
          <div className="flex flex-col items-center lg:items-start">
             {/* Sətir 1 */}
             <BlurText 
               text={HERO_CONTENT.title.line1} 
               delay={50}
               animateBy="words"
               direction="bottom"
               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white mb-2"
             />
             
             {/* Sətir 2 */}
             <BlurText 
               text={HERO_CONTENT.title.line2} 
               delay={200}
               animateBy="words"
               direction="bottom"
               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white mb-2"
             />

             {/* Highlighted Sətir - Rəngli */}
             <BlurText 
               text={HERO_CONTENT.title.highlight} 
               delay={350}
               animateBy="letters" // Bunu hərflərlə edək daha effektli olsun
               direction="bottom"
               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400"
             />
          </div>

          {/* Açıklama (Fade-in) */}
          <p className="hero-fade-in text-slate-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
            {HERO_CONTENT.description}
          </p>

          {/* Butonlar (Fade-in) */}
          <div className="hero-fade-in flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
            <button className="w-full sm:w-auto h-12 px-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_30px_-10px_rgba(100,103,242,0.6)] group">
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
              Contact Me
            </button>
          </div>
        </div>

        {/* SAĞ TARAF - Floating UI (Dəyişməyib) */}
        <div className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center lg:justify-end perspective-1000 order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative w-[280px] md:w-[380px] h-full flex items-center justify-center transform scale-90 md:scale-100 origin-center">
            
            <div className="floating-ui absolute -right-4 md:-right-12 top-10 md:top-20 w-56 md:w-64 h-32 md:h-40 bg-[#1e1e2e] rounded-xl border border-white/10 p-4 opacity-60 blur-[1px] transform rotate-12 z-0 hidden sm:block">
               <div className="space-y-2">
                   <div className="flex gap-2 mb-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                   </div>
                   <div className="w-full h-2 bg-white/10 rounded-full"></div>
                   <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
               </div>
            </div>

            <div className="floating-ui relative w-[260px] md:w-[300px] bg-[#151520] rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl overflow-hidden z-10">
               <div className="h-12 md:h-16 border-b border-white/5 flex items-center justify-between px-4 md:px-6">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10"></div>
                  <div className="w-16 md:w-24 h-2 bg-white/10 rounded-full"></div>
               </div>
               <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                  <div className="w-full aspect-video rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/5 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                              <Zap size={18} className="text-white" />
                          </div>
                      </div>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                      <div className="flex justify-between">
                         <div className="w-1/3 h-2 md:h-3 bg-white/20 rounded-full"></div>
                         <div className="w-8 md:w-10 h-2 md:h-3 bg-primary/40 rounded-full"></div>
                      </div>
                      <div className="w-full h-1.5 md:h-2 bg-white/5 rounded-full"></div>
                      <div className="w-5/6 h-1.5 md:h-2 bg-white/5 rounded-full"></div>
                  </div>
                  <div className="flex gap-3 md:gap-4 mt-4 md:mt-8">
                      <div className="w-1/2 h-16 md:h-24 rounded-xl md:rounded-2xl bg-white/5 border border-white/5"></div>
                      <div className="w-1/2 h-16 md:h-24 rounded-xl md:rounded-2xl bg-white/5 border border-white/5"></div>
                  </div>
               </div>
            </div>

            <div className="floating-ui absolute -left-4 md:-left-8 top-20 md:top-32 bg-[#1c1c27]/90 backdrop-blur-xl border border-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl z-20">
                <div className="flex flex-col gap-2 md:gap-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary border-2 border-white/20"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-500 border-2 border-white/20"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-pink-500 border-2 border-white/20"></div>
                </div>
            </div>

            <div className="floating-ui absolute -right-2 md:-right-6 bottom-20 md:bottom-32 flex items-center gap-2 md:gap-3 z-30">
                <div className="relative">
                    <MousePointer2 size={24} className="md:w-8 md:h-8 text-white fill-primary drop-shadow-[0_0_15px_rgba(100,103,242,0.8)]" />
                </div>
                <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-primary text-white text-[10px] md:text-xs font-bold shadow-lg">
                    Elza <span className="opacity-70">is editing...</span>
                </div>
            </div>

            <div className="floating-ui absolute -left-2 md:-left-4 bottom-8 md:bottom-12 bg-[#1c1c27]/90 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl z-20 flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Layers size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                    <p className="text-[8px] md:text-[10px] text-slate-400 uppercase tracking-wider">Projects</p>
                    <p className="text-sm md:text-lg font-bold text-white">45+ Done</p>
                </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}