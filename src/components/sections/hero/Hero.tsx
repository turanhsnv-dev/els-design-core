"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-dvh bg-background-dark overflow-hidden pt-24 md:pt-32 pb-16 flex items-center">
      
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-100 h-100 bg-[#A855F7]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-125 h-125 bg-[#3B82F6]/10 rounded-full blur-[120px]" />
        
        {/* Floating shapes */}
        <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[25%] left-[45%] text-[#A855F7]/40"><Star size={24} fill="currentColor" /></motion.div>
        <motion.div animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[35%] left-[30%] w-3 h-3 rounded-full bg-[#3B82F6]/40" />
        <motion.div animate={{ y: [-15, 15, -15], rotate: [0, 45, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] right-[35%] w-4 h-4 border-2 border-[#E879F9]/30 rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-350 mx-auto px-8 md:px-16 lg:px-32 xl:px-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        
        {/* LEFT COLUMN - TEXT */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1 mt-10 lg:mt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Hy! I Am <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#A855F7] to-[#3B82F6]">Elza Design</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-slate-400 text-base md:text-lg max-w-lg mb-10 leading-relaxed font-light"
          >
            UX/UI designer and motion creative working in the design field for several years, specializing in building cinematic digital experiences and user interfaces.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-linear-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-semibold text-sm md:text-base shadow-[0_10px_30px_-10px_rgba(255,107,107,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(255,107,107,0.7)] hover:-translate-y-1 transition-all duration-300">
              Hire Me
            </a>
          </motion.div>

          {/* Brands */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 md:mt-24 w-full"
          >
            <p className="text-sm font-semibold text-white/80 mb-6 tracking-wide">Work For All This Brand & Client</p>
            <div className="flex flex-wrap items-center gap-6 md:gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Using text as placeholder logos for now */}
              <span className="text-xl font-bold font-serif text-white">Apple</span>
              <span className="text-xl font-bold tracking-tighter text-white">stripe</span>
              <span className="text-xl font-bold text-white">Figma</span>
              <span className="text-xl font-bold italic text-white">Upwork</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - THE FLOATING UI COMPONENT */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end min-h-100 lg:min-h-150 items-center">
          
          <div className="relative flex items-center justify-center w-[320px] h-80 md:w-112.5 md:h-112.5 lg:w-125 lg:h-125">
            
            {/* Premium Glow Behind the UI */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 md:w-87.5 h-62.5 md:h-87.5 bg-linear-to-tr from-[#A855F7] to-[#3B82F6] rounded-full blur-[80px] md:blur-[100px]" 
            />

            {/* The Premium UI Component being "designed" */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 w-70 md:w-90 lg:w-100 bg-white/3 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 md:gap-8 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.05)]"
            >
              {/* Header of the mini UI */}
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-[#A855F7] to-[#FF8E53] p-0.5 shadow-lg">
                     <div className="w-full h-full bg-[#121216] rounded-full flex items-center justify-center">
                       <div className="w-4 h-4 rounded-full bg-white/20" />
                     </div>
                   </div>
                   <div className="flex flex-col gap-2">
                     <div className="h-2.5 w-20 md:w-24 bg-white/80 rounded-full" />
                     <div className="h-2 w-12 md:w-14 bg-white/30 rounded-full" />
                   </div>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                </div>
              </div>
              
              {/* Body of the mini UI (A sleek animated chart) */}
              <div className="w-full h-40 md:h-48 rounded-2xl bg-white/2 border border-white/5 overflow-hidden relative group">
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#3B82F6]/20" />
                <svg className="absolute bottom-0 w-full h-24 md:h-32" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,100 L0,50 Q25,20 50,60 T100,40 L100,100 Z" fill="url(#gradient1)" opacity="0.6" />
                  <path d="M0,100 L0,70 Q25,40 50,70 T100,50 L100,100 Z" fill="url(#gradient2)" opacity="0.9" />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Footer of the mini UI */}
              <div className="flex flex-col gap-4">
                <div className="h-2.5 md:h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: "30%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    className="h-full bg-linear-to-r from-[#3B82F6] to-[#A855F7] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
                  />
                </div>
                <div className="flex justify-between px-1">
                  <div className="h-2 w-16 md:w-20 bg-white/30 rounded-full" />
                  <div className="h-2 w-10 md:w-12 bg-white/30 rounded-full" />
                </div>
              </div>
            </motion.div>
            
            {/* Figma cursor (Elza) */}
            <motion.div 
              animate={{ x: [0, 100, -30, 0], y: [0, -50, 60, 0] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute top-[35%] right-[10%] md:right-[15%] pointer-events-none z-50"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                <path d="M5.5 3L18.5 11L12.5 12.5L10 19L5.5 3Z" fill="#F24E1E" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <div className="ml-6 mt-1 bg-[#F24E1E] text-white text-xs px-3 py-1 rounded-sm whitespace-nowrap w-max shadow-2xl font-semibold tracking-wide">Elza</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
