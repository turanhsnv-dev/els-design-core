"use client";

import Image from "next/image";
import {
  Box,
  Code2,
  FileType,
  Figma,
  Globe,
  GraduationCap,
  History,
  Layers,
  Mail,
  MapPin,
  Palette,
  Target,
  Trophy,
  Video,
  type LucideIcon,
} from "lucide-react";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";
import Container from "@/components/shared/ui/Container";
import { scaleDownItemVariants } from "@/lib/motion";
import { EDUCATION, EXPERIENCES, type Experience } from "@/constants/about";
import { SITE } from "@/constants/site";

const STACK_ICONS: LucideIcon[] = [Figma, Video, Code2, FileType, Palette, Box, Globe, Trophy];

export default function About() {
  return (
    <Container as="section" id="about" className="py-14 md:py-24 flex flex-col items-center">
      <RevealContainer className="text-center max-w-3xl mx-auto mb-10 md:mb-20 overflow-visible">
        <RevealItem className="flex items-center justify-center gap-3 text-xs font-medium tracking-[0.25em] uppercase mb-5 text-primary/80">
          <span className="w-8 h-px bg-primary/50" />
          About
        </RevealItem>
        <RevealItem
          variants={scaleDownItemVariants}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-white/50 mb-4 md:mb-6 leading-[1.1] pb-2 overflow-visible origin-bottom"
        >
          Where logic meets craft
        </RevealItem>
        <RevealItem className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto font-light">
          Senior UX/UI & Motion Designer turning ambiguous problems into interfaces that
          perform — and feel considered at every step.
        </RevealItem>
      </RevealContainer>

      <RevealContainer
        className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 lg:grid-rows-[320px_320px_220px] auto-rows-[minmax(260px,auto)]"
        stagger={0.06}
      >
        <BioCard />
        <ExperienceCard />
        <StackCard />
        <EducationCard />
        <LocationCard />
        <ContactCard />
      </RevealContainer>
    </Container>
  );
}

function BioCard() {
  return (
    <RevealItem className="group relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-[28px] overflow-hidden border border-black/6 dark:border-white/6 bg-gray-50 dark:bg-[#0e0e13] hover:border-black/12 dark:border-white/12 transition-all duration-700">
      <div className="absolute inset-0 z-0">
        <Image
          src="/elza-main.jpg"
          alt="Elza Portrait"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          style={{ filter: "grayscale(15%) contrast(108%) brightness(82%)" }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/55 to-transparent z-10 opacity-95" />
      </div>
      <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-10">
        <div className="flex items-center gap-2 mb-3 opacity-0 translate-y-3 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
          <Target size={15} className="text-primary" />
          <span className="text-primary font-medium text-xs tracking-[0.2em] uppercase">
            Approach
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Structure with <br /> a human core
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed line-clamp-3 mb-8 max-w-lg font-light drop-shadow-md">
          I don&apos;t design screens in isolation. I build systems where usability, motion,
          and business intent reinforce each other — so every product feels considered,
          not assembled.
        </p>
      </div>
    </RevealItem>
  );
}

function ExperienceCard() {
  return (
    <RevealItem className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 rounded-[28px] bg-gray-50 dark:bg-[#0e0e13] border border-black/6 dark:border-white/6 p-6 md:p-8 flex flex-col hover:border-black/12 dark:border-white/12 transition-all duration-500 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/4 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none group-hover:bg-cyan-500/8 transition-colors duration-700" />
      <SectionTitle title="Experience" icon={History} />
      <div className="relative flex-1 overflow-y-auto pr-1 z-10 flex flex-col no-scrollbar">
        <div className="absolute left-2.25 top-2 bottom-2 w-px bg-linear-to-b from-primary via-primary/20 to-transparent" />
        {EXPERIENCES.map((exp, i) => (
          <TimelineItem key={i} exp={exp} last={i === EXPERIENCES.length - 1} />
        ))}
      </div>
    </RevealItem>
  );
}

function TimelineItem({ exp, last }: { exp: Experience; last: boolean }) {
  const active = !!exp.current;
  return (
    <div className={`relative pl-7 ${last ? "" : "mb-9"} group/item`}>
      <div
        className={`absolute left-0 top-1.5 w-5 h-5 rounded-full bg-gray-50 dark:bg-[#0e0e13] border flex items-center justify-center z-10 transition-colors ${
          active ? "border-primary" : "border-slate-700 group-hover/item:border-slate-500"
        }`}
      >
        <div
          className={`w-1.5 h-1.5 rounded-full ${
            active ? "bg-primary animate-pulse" : "bg-slate-600"
          }`}
        />
      </div>
      <span
        className={`text-[10px] font-medium mb-1 tracking-wider block ${
          active ? "text-primary" : "text-slate-500"
        }`}
      >
        {exp.period}
      </span>
      <h4 className="text-slate-900 dark:text-white font-semibold text-base">{exp.role}</h4>
      <p className="text-slate-500 text-sm">{exp.company}</p>
    </div>
  );
}

function StackCard() {
  return (
    <RevealItem className="col-span-1 lg:col-span-1 row-span-1 rounded-[28px] bg-gray-50 dark:bg-[#0e0e13] border border-black/6 dark:border-white/6 p-6 md:p-8 flex flex-col justify-between hover:border-black/12 dark:border-white/12 transition-all duration-500 group">
      <SectionTitle title="Tech Stack" icon={Layers} className="mb-5" />
      <div className="grid grid-cols-4 gap-3 place-items-center">
        {STACK_ICONS.map((Icon, i) => (
          <StackIcon key={i} Icon={Icon} />
        ))}
      </div>
    </RevealItem>
  );
}

function EducationCard() {
  return (
    <RevealItem className="col-span-1 lg:col-span-1 row-span-1 rounded-[28px] bg-gray-50 dark:bg-[#0e0e13] border border-black/6 dark:border-white/6 text-slate-900 dark:text-white p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-black/12 dark:border-white/12 transition-all duration-500">
      <div className="absolute -right-6 -bottom-6 opacity-[0.04] -rotate-12 group-hover:scale-110 group-hover:opacity-[0.07] transition-all duration-700 pointer-events-none">
        <GraduationCap size={140} strokeWidth={1} />
      </div>
      <SectionTitle title="Education" icon={GraduationCap} className="mb-6" />
      <div className="relative z-10 flex flex-col gap-5">
        {EDUCATION.map((edu, i) => (
          <div key={i}>
            <div className="flex flex-col">
              <span className="text-slate-500 font-medium text-xs uppercase tracking-wider mb-1">
                {edu.period}
              </span>
              <h4 className="text-slate-900 dark:text-white font-semibold text-base">{edu.school}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.field}</p>
            </div>
            {i < EDUCATION.length - 1 && <div className="w-full h-px bg-black/6 dark:bg-white/6 mt-5" />}
          </div>
        ))}
      </div>
    </RevealItem>
  );
}

function LocationCard() {
  return (
    <RevealItem className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 rounded-[28px] bg-gray-50 dark:bg-[#0e0e13] border border-black/6 dark:border-white/6 overflow-hidden hover:border-black/12 dark:border-white/12 transition-all duration-500 flex items-stretch group">
      <div className="w-2/5 relative min-h-full overflow-hidden flex items-center justify-center bg-linear-to-br from-cyan-500/5 via-cyan-500/2 to-transparent group-hover:from-cyan-500/10 group-hover:via-cyan-500/4 transition-all duration-700">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-40 h-40 rounded-full border border-black/4 dark:border-white/4 group-hover:border-black/[0.07] dark:border-white/[0.07] transition-all duration-700" />
          <div className="absolute w-28 h-28 rounded-full border border-black/6 dark:border-white/6 group-hover:border-black/10 dark:border-white/10 transition-all duration-700" />
          <MapPin
            size={52}
            className="text-primary/70 relative z-10 group-hover:text-primary transition-colors duration-500"
            strokeWidth={1.5}
          />
        </div>
      </div>
      <div className="w-3/5 p-5 md:p-8 flex flex-col justify-center">
        <div className="flex items-center gap-2 text-primary/70 mb-3 group-hover:text-primary transition-colors duration-300">
          <Globe size={15} />
          <span className="text-xs font-medium uppercase tracking-[0.2em]">Location</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1.5">{SITE.location}</h3>
        <p className="text-slate-500 text-sm leading-relaxed font-light">
          Working remotely with teams and clients worldwide.
        </p>
      </div>
    </RevealItem>
  );
}

function ContactCard() {
  return (
    <RevealItem className="col-span-1 md:col-span-3 lg:col-span-2 row-span-1 rounded-[28px] bg-gray-50 dark:bg-[#0e0e13] border border-black/6 dark:border-white/6 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-0 relative overflow-hidden group hover:border-black/12 dark:border-white/12 transition-all duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.06)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1.5">Have a project in mind?</h3>
        <p className="text-slate-500 text-sm max-w-xs font-light">
          Let&apos;s discuss how design can move your numbers.
        </p>
      </div>
      <div className="relative z-10 w-full md:w-auto">
        <a
          href={`mailto:${SITE.email}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-white text-black px-7 py-3.5 font-semibold text-sm hover:bg-black/90 dark:bg-white/90 transition-all duration-300 w-full md:w-auto"
        >
          <span>Get in touch</span>
          <Mail size={16} />
        </a>
      </div>
    </RevealItem>
  );
}

function SectionTitle({
  title,
  icon: Icon,
  className = "mb-8",
}: {
  title: string;
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-between relative z-10 ${className}`}>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <Icon
        size={20}
        className="text-slate-600 group-hover:text-slate-600 dark:text-slate-400 transition-colors duration-300"
      />
    </div>
  );
}

function StackIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="size-11 rounded-xl bg-black/3 dark:bg-white/3 flex items-center justify-center text-slate-500 hover:bg-black/[0.07] dark:bg-white/[0.07] hover:text-slate-900 dark:text-white hover:scale-105 transition-all duration-300 cursor-pointer border border-black/6 dark:border-white/6">
      <Icon size={18} />
    </div>
  );
}
