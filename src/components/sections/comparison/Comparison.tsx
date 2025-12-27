// src/components/sections/comparison/Comparison.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles } from "lucide-react";

export default function Comparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse/Touch hərəkətlərini izləmək üçün
  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isResizing || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    
    // Siçanın konteyner daxilindəki mövqeyini hesablamaq (0-dan 100-ə qədər)
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;

    setSliderPosition(percent);
  };

  const handleMouseUp = () => setIsResizing(false);
  const handleMouseDown = () => setIsResizing(true);

  // Event listener-ləri əlavə etmək/təmizləmək
  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-12 animate-fade-in-up max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>Redesign Magic</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
           The <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-primary">Glow Up</span> Effect
        </h2>
        <p className="text-slate-400 text-lg">
            See how I transform outdated, cluttered interfaces into clean, user-centric experiences. Drag the slider to compare.
        </p>
      </div>

      {/* COMPARISON SLIDER */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl aspect-video md:aspect-21/9 rounded-2xl overflow-hidden border border-white/10 shadow-2xl select-none cursor-ew-resize group"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* AFTER IMAGE (NEW DESIGN) - Alt təbəqə */}
        <div className="absolute inset-0 w-full h-full">
            <Image 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop" 
                alt="New Design" 
                fill
                className="object-cover"
                priority
            />
            {/* Label */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-white font-bold text-sm z-10">
                ✨ After: 2025 Redesign
            </div>
        </div>

        {/* BEFORE IMAGE (OLD DESIGN) - Üst təbəqə, kəsilir */}
        <div 
            className="absolute inset-0 w-full h-full overflow-hidden bg-slate-200"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
            <Image 
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2000&auto=format&fit=crop" 
                alt="Old Design" 
                fill
                className="object-cover grayscale contrast-125" // Köhnə dizaynı biraz "köhnə" göstərmək üçün effekt
            />
             {/* Label */}
             <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg text-black font-bold text-sm z-10 shadow-lg">
                💀 Before: Outdated UI
            </div>
        </div>

        {/* SLIDER HANDLE (Xətt və Düymə) */}
        <div 
            className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(100,103,242,0.6)] text-primary transition-transform group-active:scale-110">
                <MoveHorizontal size={24} />
            </div>
        </div>
        
        {/* Hint Text for User (Ancaq hover edilməyəndə görünür) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-4 py-1 rounded-full backdrop-blur-sm pointer-events-none opacity-100 transition-opacity duration-500 group-hover:opacity-0">
            Drag to compare
        </div>

      </div>

      {/* STATS / RESULTS (Optional) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
         <StatBox label="User Retention" value="+45%" />
         <StatBox label="Task Speed" value="2x Faster" />
         <StatBox label="User Satisfaction" value="4.8/5.0" />
      </div>

    </section>
  );
}

// Kiçik Stat Komponenti
function StatBox({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
            <h4 className="text-3xl font-black text-white mb-1">{value}</h4>
            <p className="text-slate-400 text-sm">{label}</p>
        </div>
    )
}