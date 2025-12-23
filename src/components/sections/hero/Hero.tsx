"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Play, CheckCircle, TrendingUp, Trophy } from "lucide-react";
import gsap from "gsap";
import { HERO_CONTENT } from "@/constants/hero/hero";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Sadə giriş animasiyası (Yüklənəndə)
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-grid-pattern opacity-30 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] transform perspective-1000 rotateX-60 scale-150" />
         
         {/* Glow Effects */}
         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
         <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-indigo-900/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: TEXT */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
          
          {/* Badge */}
          <div className="hero-anim inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">
              {HERO_CONTENT.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-anim text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
            <span className="block text-white">{HERO_CONTENT.title.line1}</span>
            <span className="block text-white">{HERO_CONTENT.title.line2}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-white">
              {HERO_CONTENT.title.highlight}
            </span>
          </h1>

          {/* Desc */}
          <p className="hero-anim text-slate-400 text-lg max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
            {HERO_CONTENT.description}
          </p>

          {/* Buttons */}
          <div className="hero-anim flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <button className="h-14 px-8 rounded-lg bg-primary text-white font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(100,103,242,0.4)] group">
              Explore Projects
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <button className="h-14 px-8 rounded-lg border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all">
              View Showreel
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D CARD */}
        <div className="lg:col-span-5 relative h-[500px] w-full flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-md animate-float preserve-3d">
            
            {/* GLASS CARD */}
            <div className="glass-card rounded-2xl p-6 relative z-20 transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-400 p-[2px]">
                    <Image 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100" 
                      width={40}
                      height={40}
                      className="rounded-full w-full h-full object-cover" 
                      alt="Avatar" 
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold">Alex Morgan</h3>
                    <p className="text-xs text-slate-400">Senior Designer</p>
                  </div>
                </div>
              </div>

              {/* Visual Content */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 group cursor-pointer border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 z-10" />
                <Image 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Abstract" 
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-white fill-white" />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                   <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={16} className="text-green-400" />
                      <span className="text-xs text-slate-400 uppercase">Conversion</span>
                   </div>
                   <p className="text-2xl font-bold text-white">+45%</p>
                </div>
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                   <div className="flex items-center gap-2 mb-1">
                      <Trophy size={16} className="text-yellow-400" />
                      <span className="text-xs text-slate-400 uppercase">Awards</span>
                   </div>
                   <p className="text-2xl font-bold text-white">4 Won</p>
                </div>
              </div>
              
              {/* Glow Behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur-xl opacity-20 -z-10 group-hover:opacity-30 transition-opacity" />
            </div>

            {/* Floating Element */}
            <div className="absolute top-1/2 -right-8 z-30 animate-float delay-700">
               <div className="glass-panel p-3 rounded-lg flex items-center gap-3 bg-[#0B0C15]/90">
                  <CheckCircle size={20} className="text-green-400" />
                  <div>
                     <p className="text-xs text-slate-400">Status</p>
                     <p className="text-sm font-bold text-white">Completed</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}