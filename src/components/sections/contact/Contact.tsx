"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Globe, Mail } from "lucide-react";
import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import { FOOTER_LINKS, type NavLink } from "@/constants/nav";
import { SITE } from "@/constants/site";
import { SOCIALS, type Social } from "@/constants/socials";

const COPY_RESET_MS = 2000;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_RESET_MS);
  };

  return (
    <footer
      id="contact"
      className="relative pt-16 md:pt-28 pb-10 md:pb-14 overflow-hidden bg-background-dark"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 md:mb-28"
        >
          <div className="w-full bg-white/2 border border-white/7 rounded-2xl md:rounded-3xl p-7 sm:p-10 md:p-20 text-center backdrop-blur-xl overflow-hidden relative hover:border-white/10 transition-all duration-700">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,229,255,0.04),transparent_70%)] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/3 border border-white/8 text-primary/80 text-xs font-medium uppercase tracking-[0.25em] mb-10">
                <Mail size={12} />
                Let&apos;s Connect
              </div>

              <h2 className="text-[2rem] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight mb-6 md:mb-8 leading-none">
                Let&apos;s build the <br />
                <GradientText>next big thing</GradientText>
              </h2>

              <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 md:mb-14 leading-relaxed font-light">
                Have a project in mind? Or just want to discuss the latest design trends? I&apos;m
                always open to exploring new digital universes and creating something extraordinary
                together.
              </p>

              <div className="flex justify-center mb-8 md:mb-14">
                <button
                  onClick={handleCopy}
                  className="group flex items-center gap-3 md:gap-4 pl-5 md:pl-7 pr-2.5 py-2.5 md:py-3 rounded-full bg-white/3 border border-white/8 hover:border-white/16 hover:bg-white/6 transition-all duration-500 backdrop-blur-sm max-w-full"
                >
                  <Mail
                    size={15}
                    className="text-slate-500 group-hover:text-primary transition-colors duration-300 shrink-0"
                  />
                  <span className="text-slate-300 font-mono text-sm md:text-base lg:text-lg group-hover:text-white transition-colors duration-300 truncate">
                    {SITE.email}
                  </span>
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-400 ${
                      copied
                        ? "bg-emerald-500 text-white scale-105"
                        : "bg-white/7 border border-white/12 text-slate-300 group-hover:bg-primary group-hover:text-black group-hover:border-primary"
                    }`}
                  >
                    {copied ? <Check size={17} /> : <Copy size={17} />}
                  </div>
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {SOCIALS.map((social) => (
                  <SocialLink key={social.name} social={social} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 mb-10 md:mb-14">
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="mb-5">
              <a
                href="#hero"
                className="inline-block mb-4 opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={SITE.logo}
                  alt={SITE.name}
                  width={320}
                  height={56}
                  className="h-9 sm:h-12 md:h-14 w-auto object-contain"
                />
              </a>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs font-light">
                Senior UX/UI & Motion Designer crafting digital
                <br />
                experiences that blend functionality with cinematic storytelling.
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-sm">
              <Globe size={14} />
              <span>{SITE.location}</span>
            </div>
          </div>

          <LinkColumn title="Navigation" links={FOOTER_LINKS.navigation} />
          <LinkColumn title="Resources" links={FOOTER_LINKS.resources} />
          <LinkColumn title="Connect" links={FOOTER_LINKS.connect} />
        </div>

        <div className="pt-7 md:pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-slate-700 text-xs font-light">
              © {new Date().getFullYear()} Elza Xudiyeva. All rights reserved.
            </p>
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/2 border border-white/6 hover:border-white/10 transition-all duration-300">
              <span className="text-slate-600 text-xs font-light">Designed by</span>
              <span className="text-slate-400 text-xs font-medium">{SITE.designer}</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function LinkColumn({ title, links }: { title: string; links: readonly NavLink[] }) {
  return (
    <div>
      <h4 className="text-white/50 font-medium text-xs uppercase tracking-[0.2em] mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-slate-600 hover:text-slate-300 transition-colors duration-300 flex items-center gap-2 group text-sm font-light"
            >
              <span>{link.name}</span>
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/70"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ social }: { social: Social }) {
  const Icon = social.icon;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/3 border border-white/7 hover:border-white/14 hover:bg-white/6 transition-all duration-500 backdrop-blur-sm"
    >
      <span className="text-slate-500 group-hover:text-white transition-colors duration-300">
        <Icon size={18} strokeWidth={1.5} />
      </span>
      <span className="font-light text-xs md:text-sm text-slate-500 group-hover:text-slate-200 transition-colors duration-300">
        {social.name}
      </span>
      <ArrowUpRight
        size={12}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/70"
      />
    </a>
  );
}
