// src/components/sections/about/About.tsx
"use client";

import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  History, 
  Layers, 
  Figma, 
  Video, 
  Code2, 
  FileType, 
  Palette, 
  Box, 
  Globe, 
  Mail,
  Trophy 
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-20 flex flex-col items-center">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Available for freelance
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-white/60 mb-6">
          Crafting Digital Universes
        </h2>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Senior UX/UI & Motion Designer bridging the gap between functional design and cinematic storytelling.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
        
        {/* 1. BIO & VISION (Large Square) */}
        <div className="group relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl overflow-hidden border border-white/5 bg-[#151621] hover:border-primary/40 hover:shadow-[0_0_25px_rgba(100,103,242,0.15)] transition-all duration-300">
            {/* Background Image overlay */}
            <div className="absolute inset-0 z-0">
               {/* Buraya Elzanın şəklini qoyacaqsan */}
               <Image 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                 alt="Elza Portrait" 
                 fill
                 className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-linear-to-t from-[#0b0c15] via-[#0b0c15]/50 to-transparent z-10" />
            </div>

            <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <Sparkles size={18} className="text-primary" />
                    <span className="text-primary font-bold text-sm tracking-wide uppercase">The Vision</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Humanizing the Digital Space</h3>
                <p className="text-slate-300 text-sm md:text-base line-clamp-3 mb-6 max-w-md">
                    I don&apos;t just design screens; I choreograph experiences. My work combines technical precision with artistic flair to create web experiences that feel alive.
                </p>
                <button className="w-max flex items-center gap-2 text-white font-medium group/btn hover:text-primary transition-colors">
                    Read full bio 
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
            </div>
        </div>

        {/* 2. EXPERIENCE (Tall Vertical) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 rounded-3xl bg-[#151621]/60 backdrop-blur-md border border-white/5 p-6 md:p-8 flex flex-col hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Experience</h3>
                <History className="text-slate-500" size={20} />
            </div>
            
            <div className="relative flex-1 overflow-y-auto pr-2 space-y-8 custom-scrollbar">
                {/* Timeline Line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-[1.5px] bg-linear-to-b from-primary via-primary/50 to-transparent"></div>
                
                {/* Item 1 */}
                <div className="relative pl-8 group">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#1c1c27] border border-primary flex items-center justify-center z-10 shadow-[0_0_10px_rgba(100,103,242,0.5)]">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-primary font-semibold mb-1">2021 - Present</span>
                        <h4 className="text-white font-bold text-sm md:text-base">Senior Product Designer</h4>
                        <p className="text-slate-400 text-xs md:text-sm">TechCorp Inc.</p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="relative pl-8 group">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#1c1c27] border border-slate-700 group-hover:border-primary transition-colors flex items-center justify-center z-10">
                        <div className="w-2 h-2 rounded-full bg-slate-500 group-hover:bg-primary transition-colors"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-semibold mb-1">2018 - 2021</span>
                        <h4 className="text-white font-bold text-sm md:text-base">Lead Motion Designer</h4>
                        <p className="text-slate-400 text-xs md:text-sm">Creative Agency</p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="relative pl-8 group">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#1c1c27] border border-slate-700 group-hover:border-primary transition-colors flex items-center justify-center z-10">
                         <div className="w-2 h-2 rounded-full bg-slate-500 group-hover:bg-primary transition-colors"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-semibold mb-1">2016 - 2018</span>
                        <h4 className="text-white font-bold text-sm md:text-base">UI Designer</h4>
                        <p className="text-slate-400 text-xs md:text-sm">StartUp Ltd.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. TECH STACK (Medium Box) */}
        <div className="col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-[#151621]/60 backdrop-blur-md border border-white/5 p-6 flex flex-col justify-between hover:border-primary/40 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white">Tech Stack</h3>
                <Layers className="text-slate-500 group-hover:text-primary transition-colors" size={20} />
            </div>
            <div className="grid grid-cols-4 gap-3 place-items-center">
                <StackIcon icon={<Figma size={18} />} color="hover:bg-purple-500" />
                <StackIcon icon={<Video size={18} />} color="hover:bg-blue-500" />
                <StackIcon icon={<Code2 size={18} />} color="hover:bg-indigo-500" />
                <StackIcon icon={<FileType size={18} />} color="hover:bg-orange-500" />
                <StackIcon icon={<Palette size={18} />} color="hover:bg-pink-500" />
                <StackIcon icon={<Box size={18} />} color="hover:bg-green-500" />
                <StackIcon icon={<Globe size={18} />} color="hover:bg-cyan-500" />
                <StackIcon icon={<Trophy size={18} />} color="hover:bg-yellow-500" />
            </div>
        </div>

        {/* 4. STATS (Medium Box) */}
        <div className="col-span-1 lg:col-span-1 row-span-1 rounded-3xl bg-primary text-white p-6 flex flex-col justify-center relative overflow-hidden group hover:shadow-[0_0_30px_rgba(100,103,242,0.6)] transition-all duration-300">
             <div className="absolute -right-4 -bottom-4 opacity-20">
                <Trophy size={120} strokeWidth={1} />
             </div>
             <div className="relative z-10">
                <div className="flex items-end gap-2 mb-2">
                    <h2 className="text-4xl font-bold">12</h2>
                    <span className="text-white/80 font-medium mb-1">Awards Won</span>
                </div>
                <div className="w-full h-px bg-white/20 my-3"></div>
                <div className="flex items-end gap-2">
                    <h2 className="text-4xl font-bold">8+</h2>
                    <span className="text-white/80 font-medium mb-1">Years active</span>
                </div>
             </div>
        </div>

        {/* 5. LOCATION (Wide Strip) */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 rounded-3xl bg-[#151621]/60 backdrop-blur-md border border-white/5 overflow-hidden hover:border-primary/40 transition-all duration-300 flex items-stretch">
            <div className="w-1/3 relative min-h-[140px]">
                 {/* Map Image Placeholder */}
                 <Image 
                   src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80" 
                   alt="Location" 
                   fill
                   className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                 />
                 <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
            <div className="w-2/3 p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-2">
                    <Globe size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Base of Operations</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Baku, Azerbaijan</h3>
                <p className="text-slate-400 text-sm">Available for remote collaboration worldwide.</p>
            </div>
        </div>

        {/* 6. CONTACT CTA */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 rounded-3xl bg-[#0f0f13] border border-white/5 p-6 flex items-center justify-between relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/10 via-[#0b0c15] to-transparent opacity-50"></div>
             <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">Ready to launch?</h3>
                <p className="text-slate-400 text-sm">Let&apos;s build something extraordinary.</p>
             </div>
             <div className="relative z-10">
                <button className="flex items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3 font-bold text-sm hover:bg-gray-200 hover:scale-105 transition-all">
                    <span>Get in touch</span>
                    <Mail size={18} />
                </button>
             </div>
        </div>

      </div>
    </section>
  );
}

// Kiçik köməkçi komponent - Stack ikonları üçün
function StackIcon({ icon, color }: { icon: React.ReactNode; color: string }) {
    return (
        <div className={`size-10 rounded-xl bg-white/5 flex items-center justify-center text-white ${color} hover:text-white hover:scale-110 transition-all cursor-pointer border border-white/5`}>
            {icon}
        </div>
    );
}