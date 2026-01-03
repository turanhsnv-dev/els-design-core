// src/components/sections/toolkit/Toolkit.tsx
"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Figma, Coffee, Headphones, PenTool, Zap, MousePointer2 } from "lucide-react";

const TOOLS = [
  {
    id: 1,
    icon: <Figma size={48} />,
    label: "Figma",
    fact: "My digital playground.",
    color: "from-purple-500 to-indigo-600",
    shadow: "shadow-purple-500/40",
    // Ekrandakı yerləri (Responsive)
    position: "top-[15%] left-[10%] md:left-[20%]",
    delay: 0
  },
  {
    id: 2,
    icon: <Coffee size={48} />,
    label: "Fuel",
    fact: "Converted to code.",
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/40",
    position: "top-[25%] right-[10%] md:right-[20%]",
    delay: 2
  },
  {
    id: 3,
    icon: <Headphones size={48} />,
    label: "Focus",
    fact: "Deep work mode: ON.",
    color: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/40",
    position: "bottom-[20%] left-[15%] md:left-[25%]",
    delay: 1
  },
  {
    id: 4,
    icon: <PenTool size={48} />,
    label: "Create",
    fact: "Pixel perfect magic.",
    color: "from-blue-400 to-cyan-500",
    shadow: "shadow-blue-500/40",
    position: "bottom-[25%] right-[15%] md:right-[25%]",
    delay: 3
  },
  {
    id: 5,
    icon: <Zap size={48} />,
    label: "Energy",
    fact: "Ready to launch.",
    color: "from-yellow-400 to-amber-500",
    shadow: "shadow-yellow-500/40",
    // Mərkəzdə
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", 
    delay: 1.5
  }
];

export default function Toolkit() {
  // Mouse Spotlight Effect (Scroll-a mane olmur, sadəcə arxa fon işığıdır)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
        id="toolkit"
        onMouseMove={handleMouseMove}
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0B0C15]"
    >
      
      {/* Background Spotlight (İşıq effekti) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(100, 103, 242, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center pointer-events-none px-4 select-none">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-2xl">
            <MousePointer2 size={14} />
            <span>Zero Gravity Zone</span>
         </div>
         <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">Toolkit</span>
         </h2>
         <p className="text-slate-400 text-lg max-w-xl mx-auto">
            My essential tools floating in the creative universe.
         </p>
      </div>

      {/* FLOATING ITEMS (Sürüşdürmə yoxdur, sadəcə üzürlər) */}
      <div className="absolute inset-0 w-full h-full max-w-[1400px] mx-auto pointer-events-none">
        {TOOLS.map((item) => (
            <FloatingItem key={item.id} item={item} />
        ))}
      </div>

    </section>
  );
}

function FloatingItem({ item }: { item: any }) {
    return (
        <motion.div
            className={`absolute ${item.position} z-20 pointer-events-auto`} // pointer-events-auto lazımdır ki, hover işləsin
            animate={{ 
                y: [-15, 15, -15], // Yuxarı-aşağı yumşaq üzmə
                rotate: [-3, 3, -3] // Çox yüngül fırlanma
            }}
            transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: item.delay 
            }}
            whileHover={{ scale: 1.1, zIndex: 50 }} // Hover edəndə sadəcə böyüyür
        >
            <div className="group relative cursor-pointer">
                
                {/* TOOLTIP */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 p-3 bg-[#1a1b26]/90 backdrop-blur-xl border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-center shadow-xl z-50">
                    <h4 className="text-white font-bold mb-0.5 text-base">{item.label}</h4>
                    <p className="text-[10px] text-slate-300 font-medium leading-tight">
                        {item.fact}
                    </p>
                    {/* Arrow */}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1b26]/90 rotate-45 border-r border-b border-white/20"></div>
                </div>

                {/* THE ORB (Ikon) */}
                <div className={`
                    relative w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center
                    bg-gradient-to-br ${item.color}
                    shadow-[0_0_50px_-10px_rgba(0,0,0,0.6)] ${item.shadow}
                    border border-white/20 group-hover:border-white/60
                    transition-all duration-300
                `}>
                    {/* Daxili Parıltı */}
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    
                    {/* Ikon */}
                    <div className="text-white drop-shadow-lg transform transition-transform group-hover:scale-110">
                        {item.icon}
                    </div>
                </div>

            </div>
        </motion.div>
    );
}