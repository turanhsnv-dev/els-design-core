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
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-primary text-xs font-medium uppercase tracking-[0.2em] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Available for freelance
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-white/50 mb-6 leading-[1.2] pb-2 overflow-visible">
          Crafting Digital Universes
        </h2>
        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-light">
          Senior UX/UI & Motion Designer bridging the gap between functional design and cinematic storytelling.
        </p>
      </div>

      {/* BENTO GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6 lg:grid-rows-[320px_320px_220px] auto-rows-[minmax(280px,auto)]">

        {/* 1. BIO & VISION */}
        <div className="group relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-[28px] overflow-hidden border border-white/[0.06] bg-[#0e0e13] hover:border-white/[0.12] transition-all duration-700">
          <div className="absolute inset-0 z-0">
            <Image
              src="/elza-main.jpg"
              alt="Elza Portrait"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              style={{ filter: 'grayscale(15%) contrast(108%) brightness(82%)' }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/55 to-transparent z-10 opacity-95" />
          </div>

          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-10">
            <div className="flex items-center gap-2 mb-3 opacity-0 transform translate-y-3 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
              <Sparkles size={15} className="text-primary" />
              <span className="text-primary font-medium text-xs tracking-[0.2em] uppercase">The Vision</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Humanizing the <br /> Digital Space</h3>
            <p className="text-slate-400 text-base leading-relaxed line-clamp-3 mb-8 max-w-lg font-light drop-shadow-md">
              I don&apos;t just design screens; I choreograph experiences. My work combines technical precision with artistic flair to create web experiences that feel alive.
            </p>
            <button className="w-max flex items-center gap-2 text-white/70 font-medium text-sm group/btn hover:text-white transition-colors duration-300">
              Read full bio
              <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 2. EXPERIENCE */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 rounded-[28px] bg-[#0e0e13] border border-white/[0.06] p-8 flex flex-col hover:border-white/[0.12] transition-all duration-500 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/[0.04] rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none group-hover:bg-cyan-500/[0.08] transition-colors duration-700" />

          <div className="flex items-center justify-between mb-8 relative z-10">
            <h3 className="text-lg font-semibold text-white">Experience</h3>
            <History className="text-slate-600 group-hover:text-slate-400 transition-colors duration-300" size={20} />
          </div>

          <div className="relative flex-1 overflow-y-auto pr-1 z-10 flex flex-col no-scrollbar">
            <div className="absolute left-[9px] top-2 bottom-2 w-px bg-linear-to-b from-primary via-primary/20 to-transparent" />

            <div className="relative pl-7 mb-9 group/item">
              <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#0e0e13] border border-primary flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
              <span className="text-[10px] text-primary font-medium mb-1 tracking-wider block">09.2025 – Present</span>
              <h4 className="text-white font-semibold text-base">UX/UI Designer</h4>
              <p className="text-slate-500 text-sm">Burncode Company</p>
            </div>

            <div className="relative pl-7 mb-9 group/item">
              <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#0e0e13] border border-primary flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <span className="text-[10px] text-primary font-medium mb-1 tracking-wider block">07.2025 – Present</span>
              <h4 className="text-white font-semibold text-base">UX/UI Designer</h4>
              <p className="text-slate-500 text-sm">Innoland Incubation Center</p>
            </div>

            <div className="relative pl-7 mb-9 group/item">
              <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#0e0e13] border border-slate-700 group-hover/item:border-slate-500 transition-colors flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              </div>
              <span className="text-[10px] text-slate-500 font-medium mb-1 tracking-wider block">03.2025 – 07.2025</span>
              <h4 className="text-white font-semibold text-base">UX/UI Design Mentor</h4>
              <p className="text-slate-500 text-sm">IT Brains Academy</p>
            </div>

            <div className="relative pl-7 mb-9 group/item">
              <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#0e0e13] border border-slate-700 group-hover/item:border-slate-500 transition-colors flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              </div>
              <span className="text-[10px] text-slate-500 font-medium mb-1 tracking-wider block">09.2024 – 07.2025</span>
              <h4 className="text-white font-semibold text-base">UX/UI Designer</h4>
              <p className="text-slate-500 text-sm">ITB Techno</p>
            </div>

            <div className="relative pl-7 group/item">
              <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#0e0e13] border border-slate-700 group-hover/item:border-slate-500 transition-colors flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              </div>
              <span className="text-[10px] text-slate-500 font-medium mb-1 tracking-wider block">08.2024 – 06.2025</span>
              <h4 className="text-white font-semibold text-base">UX/UI Designer</h4>
              <p className="text-slate-500 text-sm">Pelcare (startup/freelance)</p>
            </div>
          </div>
        </div>

        {/* 3. TECH STACK */}
        <div className="col-span-1 lg:col-span-1 row-span-1 rounded-[28px] bg-[#0e0e13] border border-white/[0.06] p-8 flex flex-col justify-between hover:border-white/[0.12] transition-all duration-500 group">
          <div className="flex justify-between items-start mb-5">
            <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
            <Layers className="text-slate-600 group-hover:text-slate-400 transition-colors duration-300" size={20} />
          </div>
          <div className="grid grid-cols-4 gap-3 place-items-center">
            <StackIcon icon={<Figma size={18} />} />
            <StackIcon icon={<Video size={18} />} />
            <StackIcon icon={<Code2 size={18} />} />
            <StackIcon icon={<FileType size={18} />} />
            <StackIcon icon={<Palette size={18} />} />
            <StackIcon icon={<Box size={18} />} />
            <StackIcon icon={<Globe size={18} />} />
            <StackIcon icon={<Trophy size={18} />} />
          </div>
        </div>

        {/* 4. EDUCATION — monochromatic dark */}
        <div className="col-span-1 lg:col-span-1 row-span-1 rounded-[28px] bg-[#0e0e13] border border-white/[0.06] text-white p-8 flex flex-col relative overflow-hidden group hover:border-white/[0.12] transition-all duration-500">
          <div className="absolute -right-6 -bottom-6 opacity-[0.04] transform -rotate-12 group-hover:scale-110 group-hover:opacity-[0.07] transition-all duration-700 pointer-events-none">
            <GraduationCap size={140} strokeWidth={1} />
          </div>

          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="text-lg font-semibold text-white">Education</h3>
            <GraduationCap className="text-slate-600 group-hover:text-primary transition-colors duration-500" size={20} />
          </div>

          <div className="relative z-10 flex flex-col gap-5">
            <div className="flex flex-col">
              <span className="text-slate-500 font-medium text-xs uppercase tracking-wider mb-1">2024 – 2025</span>
              <h4 className="text-white font-semibold text-base">IT Brains Academy</h4>
              <p className="text-slate-400 text-sm">UX & UI Design</p>
            </div>

            <div className="w-full h-px bg-white/[0.06]" />

            <div className="flex flex-col">
              <span className="text-slate-500 font-medium text-xs uppercase tracking-wider mb-1">2020 – 2025</span>
              <h4 className="text-white font-semibold text-base">Baku Slavic Uni.</h4>
              <p className="text-slate-400 text-sm">Rus Dili Müellimliyi</p>
            </div>
          </div>
        </div>

        {/* 5. LOCATION */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 rounded-[28px] bg-[#0e0e13] border border-white/[0.06] overflow-hidden hover:border-white/[0.12] transition-all duration-500 flex items-stretch group">
          <div className="w-2/5 relative min-h-full overflow-hidden flex items-center justify-center bg-linear-to-br from-cyan-500/[0.05] via-cyan-500/[0.02] to-transparent group-hover:from-cyan-500/[0.1] group-hover:via-cyan-500/[0.04] transition-all duration-700">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-40 h-40 rounded-full border border-white/[0.04] group-hover:border-white/[0.07] transition-all duration-700" />
              <div className="absolute w-28 h-28 rounded-full border border-white/[0.06] group-hover:border-white/[0.1] transition-all duration-700" />
              <MapPin size={52} className="text-primary/70 relative z-10 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
            </div>
          </div>
          <div className="w-3/5 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-primary/70 mb-3 group-hover:text-primary transition-colors duration-300">
              <Globe size={15} />
              <span className="text-xs font-medium uppercase tracking-[0.2em]">Base of Operations</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-1.5">Baku, Azerbaijan</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">Available for remote collaboration worldwide.</p>
          </div>
        </div>

        {/* 6. CONTACT CTA */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 rounded-[28px] bg-[#0e0e13] border border-white/[0.06] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 relative overflow-hidden group hover:border-white/[0.12] transition-all duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,229,255,0.06)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white mb-1.5">Ready to launch?</h3>
            <p className="text-slate-500 text-sm max-w-xs font-light">Let&apos;s turn your ideas into a digital reality.</p>
          </div>

          <div className="relative z-10 w-full md:w-auto">
            <a
              href="mailto:uxuielza@gmail.com"
              className="flex items-center justify-center gap-2 rounded-xl bg-white text-black px-7 py-3.5 font-semibold text-sm hover:bg-white/90 transition-all duration-300 w-full md:w-auto"
            >
              <span>Get in touch</span>
              <Mail size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function StackIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="size-11 rounded-xl bg-white/[0.03] flex items-center justify-center text-slate-500 hover:bg-white/[0.07] hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer border border-white/[0.06]">
      {icon}
    </div>
  );
}
