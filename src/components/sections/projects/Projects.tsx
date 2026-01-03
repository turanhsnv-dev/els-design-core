// src/components/sections/projects/Projects.tsx
"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Nova Bank",
    category: "Fintech",
    description: "Mobile Banking Redesign",
    tags: ["UX Research", "UI Design", "Prototyping"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    color: "group-hover:text-blue-400",
    glow: "to-blue-500/5"
  },
  {
    id: 2,
    title: "Ether Float",
    category: "Web3",
    description: "NFT Marketplace",
    tags: ["3D Modeling", "Visual Design", "Motion"],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
    color: "group-hover:text-purple-400",
    glow: "to-purple-500/5"
  },
  {
    id: 3,
    title: "Luxe & Co.",
    category: "E-Commerce",
    description: "Fashion Storefront",
    tags: ["Strategy", "Development", "Branding"],
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000",
    color: "group-hover:text-pink-400",
    glow: "to-pink-500/5"
  },
  {
    id: 4,
    title: "Vortex Data",
    category: "Analytics",
    description: "SaaS Analytics Platform",
    tags: ["Data Viz", "Design System"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    color: "group-hover:text-cyan-400",
    glow: "to-cyan-500/5"
  }
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Hər basışda nə qədər sürüşsün
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="work" className="relative py-20 overflow-hidden bg-background-dark">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-col items-center text-center gap-4">
            <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">
                <span className="w-8 h-px bg-primary"></span>
                Selected Works
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">Projects</span>
            </h2>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 no-scrollbar pl-4 md:pl-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PROJECTS.map((project) => (
            <article 
                key={project.id} 
                className="snap-center shrink-0 w-[85vw] md:w-[420px] group relative rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl overflow-hidden cursor-pointer hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Image Area */}
              <div className="relative h-[280px] w-full bg-slate-900 overflow-hidden border-b-0">
                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent opacity-70 z-10"></div>
                
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Category Badge */}
                <div className="absolute top-5 left-5 z-20">
                    <span className="px-4 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                        {project.category}
                    </span>
                </div>

                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-linear-to-t ${project.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>
              </div>

              {/* Content Area - Resimden ayrı */}
              <div className="relative p-6 pt-8 bg-white/2 backdrop-blur-xl">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <h3 className={`text-2xl md:text-3xl font-black text-white mb-2 transition-colors ${project.color}`}>
                            {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">{project.description}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 ml-4 shrink-0 shadow-lg">
                        <ArrowUpRight size={20} className="text-white transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                </div>

                {/* Tags - Modern Design */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                    {project.tags.map((tag, i) => (
                        <span 
                            key={i} 
                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:bg-white/10 hover:border-primary/30 transition-all"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
              </div>

              {/* Hover Glow Effect - Enhanced */}
              <div className={`absolute inset-0 bg-linear-to-b from-transparent ${project.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl`} />
            </article>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 mt-2 flex items-center justify-end gap-4">
        <button 
            onClick={() => scroll('left')}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors active:scale-95"
        >
            <ArrowLeft size={20} />
        </button>
        <button 
            onClick={() => scroll('right')}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white hover:bg-primary hover:border-primary transition-colors active:scale-95"
        >
            <ArrowRight size={20} />
        </button>
      </div>

    </section>
  );
}