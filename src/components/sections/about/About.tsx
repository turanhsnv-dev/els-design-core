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
  Trophy,
  GraduationCap,
  MapPin
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-24 flex flex-col items-center">
      
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20 overflow-visible">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Available for freelance
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-white/60 mb-6 leading-[1.1] pb-1 overflow-visible">
          Crafting Digital Universes
        </h2>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Senior UX/UI & Motion Designer bridging the gap between functional design and cinematic storytelling.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 lg:grid-rows-[320px_320px_220px] auto-rows-[minmax(280px,auto)]">
        
        {/* 1. BIO & VISION */}
        <div className="group relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-[32px] overflow-hidden border border-white/5 bg-[#151621] hover:border-primary/40 hover:shadow-[0_0_40px_-10px_rgba(100,103,242,0.3)] transition-all duration-500">
            
            {/* PHOTO AREA */}
            <div className="absolute inset-0 z-0">
               <Image 
                 src="/elza-main.jpg" 
                 alt="Elza Portrait" 
                 fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-105"
                 style={{ filter: 'grayscale(20%) contrast(110%) brightness(85%)' }}
               />
               <div className="absolute inset-0 bg-linear-to-t from-[#0b0c15] via-[#0b0c15]/60 to-transparent z-10 opacity-90" />
               <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
            </div>

            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
                <div className="flex items-center gap-2 mb-3 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                    <Sparkles size={18} className="text-primary" />
                    <span className="text-primary font-bold text-sm tracking-wide uppercase">The Vision</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">Humanizing the <br/> Digital Space</h3>
                <p className="text-slate-300 text-base md:text-lg line-clamp-3 mb-8 max-w-lg font-light leading-relaxed drop-shadow-md">
                    I don&apos;t just design screens; I choreograph experiences. My work combines technical precision with artistic flair to create web experiences that feel alive.
                </p>
                <button className="w-max flex items-center gap-2 text-white font-bold group/btn hover:text-primary transition-colors">
                    Read full bio 
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
            </div>
        </div>

        {/* 2. EXPERIENCE */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 rounded-[32px] bg-[#151621]/80 backdrop-blur-md border border-white/5 p-8 flex flex-col hover:border-primary/40 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-primary/20 transition-colors"></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-2xl font-bold text-white">Experience</h3>
                <History className="text-slate-500 group-hover:text-primary transition-colors" size={24} />
            </div>
            
            <div className="relative flex-1 overflow-y-auto pr-2 custom-scrollbar z-10 flex flex-col">
                <div className="absolute left-[11px] top-2 bottom-2 w-[1.5px] bg-linear-to-b from-primary via-primary/30 to-transparent"></div>
                
                {/* En yeni - En üstte */}
                <div className="relative pl-8 mb-10 group/item">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#1c1c27] border border-primary flex items-center justify-center z-10 shadow-[0_0_10px_rgba(100,103,242,0.5)]">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-primary font-bold mb-1 tracking-wider">09.2025 - Present</span>
                        <h4 className="text-white font-bold text-lg">UX/UI Designer</h4>
                        <p className="text-slate-400 text-sm">Burncode Company</p>
                    </div>
                </div>

                <div className="relative pl-8 mb-10 group/item">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#1c1c27] border border-primary flex items-center justify-center z-10 shadow-[0_0_10px_rgba(100,103,242,0.5)]">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-primary font-bold mb-1 tracking-wider">07.2025 - Present</span>
                        <h4 className="text-white font-bold text-lg">UX/UI Designer</h4>
                        <p className="text-slate-400 text-sm">Innoland Incubation Center</p>
                    </div>
                </div>

                <div className="relative pl-8 mb-10 group/item">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#1c1c27] border border-slate-700 group-hover/item:border-primary transition-colors flex items-center justify-center z-10">
                        <div className="w-2 h-2 rounded-full bg-slate-500 group-hover/item:bg-primary transition-colors"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-bold mb-1 tracking-wider">03.2025 - 07.2025</span>
                        <h4 className="text-white font-bold text-lg">UX/UI Design Mentor</h4>
                        <p className="text-slate-400 text-sm">IT Brains Academy</p>
                    </div>
                </div>

                <div className="relative pl-8 mb-10 group/item">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#1c1c27] border border-slate-700 group-hover/item:border-primary transition-colors flex items-center justify-center z-10">
                         <div className="w-2 h-2 rounded-full bg-slate-500 group-hover/item:bg-primary transition-colors"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-bold mb-1 tracking-wider">09.2024 - 07.2025</span>
                        <h4 className="text-white font-bold text-lg">UX/UI Designer</h4>
                        <p className="text-slate-400 text-sm">ITB Techno</p>
                    </div>
                </div>

                {/* En eski - En altta */}
                <div className="relative pl-8 group/item">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#1c1c27] border border-slate-700 group-hover/item:border-primary transition-colors flex items-center justify-center z-10">
                         <div className="w-2 h-2 rounded-full bg-slate-500 group-hover/item:bg-primary transition-colors"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500 font-bold mb-1 tracking-wider">08.2024 - 06.2025</span>
                        <h4 className="text-white font-bold text-lg">UX/UI Designer</h4>
                        <p className="text-slate-400 text-sm">Pelcare (startup/freelance)</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. TECH STACK */}
        <div className="col-span-1 lg:col-span-1 row-span-1 rounded-[32px] bg-[#151621]/80 backdrop-blur-md border border-white/5 p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-500 group">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Tech Stack</h3>
                <Layers className="text-slate-500 group-hover:text-primary transition-colors" size={24} />
            </div>
            <div className="grid grid-cols-4 gap-4 place-items-center">
                <StackIcon icon={<Figma size={20} />} color="hover:bg-[#F24E1E]" />
                <StackIcon icon={<Video size={20} />} color="hover:bg-[#9999FF]" />
                <StackIcon icon={<Code2 size={20} />} color="hover:bg-[#61DAFB]" />
                <StackIcon icon={<FileType size={20} />} color="hover:bg-[#FFB13B]" />
                <StackIcon icon={<Palette size={20} />} color="hover:bg-[#EA4C89]" />
                <StackIcon icon={<Box size={20} />} color="hover:bg-emerald-500" />
                <StackIcon icon={<Globe size={20} />} color="hover:bg-blue-500" />
                <StackIcon icon={<Trophy size={20} />} color="hover:bg-yellow-500" />
            </div>
        </div>

        {/* 4. EDUCATION */}
        <div className="col-span-1 lg:col-span-1 row-span-1 rounded-[32px] bg-linear-to-br from-orange-700 to-amber-800 text-white p-8 flex flex-col relative overflow-hidden group hover:shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-500">
             <div className="absolute -right-6 -bottom-6 opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                <GraduationCap size={140} strokeWidth={1} />
             </div>
             
             <div className="flex items-center justify-between mb-6 relative z-10">
                 <h3 className="text-2xl font-bold text-white">Education</h3>
                 <GraduationCap className="text-white/70 group-hover:text-white transition-colors" size={28} />
             </div>

             <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col">
                    <span className="text-white/80 font-bold text-xs uppercase tracking-wider mb-1">2024 - 2025</span>
                    <h4 className="text-white font-black text-lg leading-tight">IT Brains Academy</h4>
                    <p className="text-white/90 text-sm font-medium">UX & UI Design</p>
                </div>
                
                <div className="w-full h-px bg-white/20"></div>

                <div className="flex flex-col">
                    <span className="text-white/80 font-bold text-xs uppercase tracking-wider mb-1">2020 - 2025</span>
                    <h4 className="text-white font-black text-lg leading-tight">Baku Slavic Uni.</h4>
                    <p className="text-white/90 text-sm font-medium">Rus Dili Müellimliyi</p>
                </div>
             </div>
        </div>

        {/* 5. LOCATION */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 rounded-[32px] bg-[#151621]/80 backdrop-blur-md border border-white/5 overflow-hidden hover:border-primary/40 transition-all duration-500 flex items-stretch group">
            <div className="w-2/5 relative min-h-full overflow-hidden flex items-center justify-center bg-linear-to-br from-primary/10 via-primary/5 to-transparent group-hover:from-primary/20 group-hover:via-primary/10 transition-all duration-500">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-40 h-40 rounded-full border border-primary/20 group-hover:border-primary/40 transition-all duration-500"></div>
                    <div className="absolute w-28 h-28 rounded-full border border-primary/30 group-hover:border-primary/50 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500 -z-10"></div>
                    <MapPin 
                        size={60} 
                        className="text-primary relative z-10 group-hover:scale-110 group-hover:text-primary/80 transition-all duration-500" 
                        strokeWidth={1.5}
                    />
                </div>
            </div>
            <div className="w-3/5 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary mb-3">
                    <Globe size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Base of Operations</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Baku, Azerbaijan</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Available for remote collaboration worldwide.</p>
            </div>
        </div>

        {/* 6. CONTACT CTA - DƏYİŞİKLİK BURADA */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 rounded-[32px] bg-[#0f0f13] border border-white/5 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-primary/20 via-[#0b0c15] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to launch?</h3>
                <p className="text-slate-400 text-sm max-w-xs">Let&apos;s turn your ideas into a digital reality.</p>
             </div>
             
             <div className="relative z-10 w-full md:w-auto">
                <a 
                    href="mailto:uxuielza@gmail.com"
                    className="flex items-center justify-center gap-2 rounded-xl bg-white text-black px-8 py-4 font-bold text-sm hover:bg-slate-200 hover:scale-105 transition-all shadow-lg w-full md:w-auto"
                >
                    <span>Get in touch</span>
                    <Mail size={18} />
                </a>
             </div>
        </div>

      </div>
    </section>
  );
}

function StackIcon({ icon, color }: { icon: React.ReactNode; color: string }) {
    return (
        <div className={`size-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 ${color} hover:text-white hover:scale-110 hover:shadow-lg transition-all cursor-pointer border border-white/5 group`}>
            {icon}
        </div>
    );
}