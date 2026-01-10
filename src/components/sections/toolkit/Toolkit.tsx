// src/components/sections/toolkit/Toolkit.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Figma, 
  Coffee, 
  Headphones, 
  PenTool, 
  Zap, 
  Sparkles,
  Code,
  Palette,
  Layers,
  Monitor,
  Smartphone,
  Wand2,
  Music,
  Image,
  Search
} from "lucide-react";

const TOOLS = [
  {
    id: 1,
    icon: <Figma size={28} />,
    label: "Figma",
    category: "Design Tool",
    description: "Mənim rəqəmsal oyun meydanım. Hər layihə burada başlayır və bitir.",
    color: "from-purple-500 via-purple-400 to-indigo-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    glow: "shadow-purple-500/50",
    stats: "95% of projects"
  },
  {
    id: 2,
    icon: <Code size={28} />,
    label: "HTML/CSS",
    category: "Development",
    description: "Dizaynı kodla birləşdirirəm. Prototipləri canlı interfeyslərə çevirirəm.",
    color: "from-orange-500 via-orange-400 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    glow: "shadow-orange-500/50",
    stats: "Frontend ready"
  },
  {
    id: 3,
    icon: <Palette size={28} />,
    label: "Adobe Suite",
    category: "Creative",
    description: "Photoshop və Illustrator ilə brand identitetləri və qrafik elementlər yaradıram.",
    color: "from-pink-500 via-pink-400 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    glow: "shadow-pink-500/50",
    stats: "Visual magic"
  },
  {
    id: 4,
    icon: <Layers size={28} />,
    label: "Design Systems",
    category: "Methodology",
    description: "Məntiqli və miqyaslanabilir komponent sistemləri qurmaq mənim tutqum.",
    color: "from-blue-500 via-blue-400 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    glow: "shadow-blue-500/50",
    stats: "Scalable"
  },
  {
    id: 5,
    icon: <Zap size={28} />,
    label: "Motion Design",
    category: "Animation",
    description: "After Effects və Lottie ilə mikro-interaksiyalar və animasiyalar yaradıram.",
    color: "from-yellow-400 via-yellow-300 to-amber-500",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
    glow: "shadow-yellow-400/50",
    stats: "Smooth AF"
  },
  {
    id: 6,
    icon: <Coffee size={28} />,
    label: "Coffee",
    category: "Essential",
    description: "Yaradıcılığın əsas komponenti. Gecə-gündüz layihələrdə iştirak edir.",
    color: "from-amber-600 via-amber-500 to-orange-600",
    bgColor: "bg-amber-600/10",
    borderColor: "border-amber-600/30",
    glow: "shadow-amber-600/50",
    stats: "∞ cups/day"
  },
  {
    id: 7,
    icon: <Music size={28} />,
    label: "Music",
    category: "Focus",
    description: "Yaradıcılıq prosesində fokus və ilham üçün musiqi. Deep work rejiminin ayrılmaz hissəsi.",
    color: "from-violet-500 via-violet-400 to-purple-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    glow: "shadow-violet-500/50",
    stats: "24/7 vibes"
  },
  {
    id: 8,
    icon: <Image size={28} />,
    label: "Adobe Photoshop",
    category: "Creative",
    description: "Foto redaktəsi, kompozisiyalar və qrafik dizayn üçün əsas alət. Pixel-perfect nəticələr.",
    color: "from-cyan-500 via-cyan-400 to-blue-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    glow: "shadow-cyan-500/50",
    stats: "Photo magic"
  },
  {
    id: 9,
    icon: <PenTool size={28} />,
    label: "Adobe Illustrator",
    category: "Creative",
    description: "Vektor qrafikası, logotiplər və illüstrasiyalar üçün professional alət. Sonsuz miqyaslanabilirlik.",
    color: "from-orange-500 via-orange-400 to-red-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    glow: "shadow-orange-500/50",
    stats: "Vector master"
  },
  {
    id: 10,
    icon: <Search size={28} />,
    label: "Self Learning",
    category: "Growth",
    description: "Davamlı öyrənmə və araşdırma. Yeni texnologiyalar, trendlər və dizayn metodologiyalarını kəşf etmək.",
    color: "from-emerald-500 via-emerald-400 to-teal-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    glow: "shadow-emerald-500/50",
    stats: "Always learning"
  }
];

export default function Toolkit() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section 
      id="toolkit"
      className="relative w-full md:min-h-screen flex flex-col items-center md:justify-center py-10 md:py-32 overflow-hidden bg-background-dark"
    >
      
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/5 rounded-full blur-[200px]" />
      </div>

      {/* HEADER */}
      <motion.div 
        className="relative z-10 text-center px-4 mb-6 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 backdrop-blur-md">
          <Sparkles size={14} />
          <span>My Arsenal</span>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight">
          Creative <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">
            Toolkit
          </span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Yaradıcılığımı gücləndirən alətlər. Hər biri layihələrimdə unikal rol oynayır.
        </p>
      </motion.div>

      {/* TOOLS GRID - Creative Layout */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div 
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TOOLS.map((tool, index) => (
              <div key={tool.id} className="snap-center shrink-0 w-[85vw] max-w-[320px]">
                <ToolCard 
                  tool={tool} 
                  index={index}
                  isHovered={hoveredId === tool.id}
                  onHover={() => setHoveredId(tool.id)}
                  onLeave={() => setHoveredId(null)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {TOOLS.map((tool, index) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              index={index}
              isHovered={hoveredId === tool.id}
              onHover={() => setHoveredId(tool.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-3 h-3 rounded-full bg-purple-400"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-1.5 h-1.5 rounded-full bg-pink-400"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.8, 1]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: 0.5
          }}
        />
      </div>

    </section>
  );
}

function ToolCard({ 
  tool, 
  index, 
  isHovered, 
  onHover, 
  onLeave 
}: { 
  tool: any; 
  index: number; 
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative"
    >
      <motion.div
        className={`
          relative h-full p-5 md:p-6 rounded-2xl border backdrop-blur-xl
          ${tool.bgColor} ${tool.borderColor}
          transition-all duration-500 cursor-pointer
          ${isHovered ? 'border-opacity-60' : 'border-opacity-30'}
          overflow-hidden
        `}
      >
        {/* Gradient Background on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Glow Effect */}
        <div className={`absolute inset-0 ${tool.glow} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon & Category */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br ${tool.color} ${tool.glow} shadow-lg`}
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-white">
                {tool.icon}
              </div>
            </motion.div>
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${tool.borderColor} border bg-white/5 text-slate-300`}>
              {tool.category}
            </span>
          </div>

          {/* Title & Stats */}
          <div className="mb-3 relative">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-black text-white mb-1.5">
                  {tool.label}
                </h3>
                <p className="text-xs text-primary font-bold">
                  {tool.stats}
                </p>
              </div>
              {/* Hover Indicator - Top Right */}
              <motion.div
                className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  rotate: isHovered ? 180 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <Wand2 size={14} className="text-white" />
              </motion.div>
            </div>
          </div>

          {/* Description */}
          <motion.p
            className="text-slate-400 text-xs leading-relaxed"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {tool.description}
          </motion.p>
        </div>

      </motion.div>
    </motion.div>
  );
}
