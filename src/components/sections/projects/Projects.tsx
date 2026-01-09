// src/components/sections/projects/Projects.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

      {/* Projects Grid */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-white/10 bg-[#151621]/60 backdrop-blur-xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(100,103,242,0.3)]"
            >
              {/* Image Area - Daha küçük */}
              <div className="relative h-[200px] w-full bg-slate-900 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent opacity-60 z-10"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Category Badge - Daha küçük ve şık */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute top-3 left-3 z-20"
                >
                  <span className="px-2.5 py-1 rounded-lg border border-white/20 bg-black/70 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                    {project.category}
                  </span>
                </motion.div>

                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-t ${project.glow} opacity-0 group-hover:opacity-100 z-10`}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content Area - Kompakt */}
              <div className="relative p-4 bg-[#151621]/80 backdrop-blur-xl">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      className={`text-lg font-bold text-white mb-1 transition-colors ${project.color} truncate`}
                      whileHover={{ x: 2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <motion.div
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary shrink-0"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowUpRight size={16} className="text-white" />
                  </motion.div>
                </div>

                {/* Tags - Daha kompakt */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 text-[10px] font-medium hover:bg-white/10 hover:border-primary/30 transition-all"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 text-[10px] font-medium">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-b from-transparent ${project.glow} opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl`}
                transition={{ duration: 0.4 }}
              />
            </motion.article>
          ))}
        </div>
      </div>


    </section>
  );
}