// src/components/sections/contact/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Linkedin,
  Dribbble,
  Instagram,
  ArrowUpRight,
  Copy,
  Check,
  Globe,
  Palette,
  Github,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "uxuielza@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const footerLinks = {
    navigation: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#work" },
      { name: "Services", href: "#services" },
      { name: "Process", href: "#process" },
    ],
    resources: [
      { name: "Toolkit", href: "#toolkit" },
      { name: "Impact", href: "#impact" },
      { name: "Showreel", href: "#showreel" },
    ],
    connect: [
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { name: "Behance", href: "https://www.behance.net/elzaxudiyeva", icon: <Palette size={18} strokeWidth={1.5} /> },
    { name: "LinkedIn", href: "#", icon: <Linkedin size={18} strokeWidth={1.5} /> },
    { name: "Dribbble", href: "#", icon: <Dribbble size={18} strokeWidth={1.5} /> },
    { name: "Instagram", href: "#", icon: <Instagram size={18} strokeWidth={1.5} /> },
    { name: "Github", href: "#", icon: <Github size={18} strokeWidth={1.5} /> },
  ];

  return (
    <footer id="contact" className="relative pt-28 pb-14 overflow-hidden bg-background-dark">

      {/* Minimal background — just a thin top separator glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-linear-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">

        {/* MAIN CTA */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-28"
        >
          <div className="w-full bg-white/[0.02] border border-white/[0.07] rounded-3xl p-12 md:p-20 text-center backdrop-blur-xl overflow-hidden relative group hover:border-white/[0.1] transition-all duration-700">

            {/* Very subtle radial at center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(0,229,255,0.04),transparent_70%)] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-primary/80 text-xs font-medium uppercase tracking-[0.25em] mb-10">
                <Mail size={12} />
                Let&apos;s Connect
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.0]">
                Let&apos;s build the <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  next big thing
                </span>
              </h2>

              <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto mb-14 leading-relaxed font-light">
                Have a project in mind? Or just want to discuss the latest design trends?
                I&apos;m always open to exploring new digital universes and creating something extraordinary together.
              </p>

              {/* Email copy button */}
              <div className="flex justify-center mb-14">
                <button
                  onClick={handleCopy}
                  className="group flex items-center gap-4 pl-7 pr-2.5 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.16] hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-sm"
                >
                  <Mail size={17} className="text-slate-500 group-hover:text-primary transition-colors duration-300" />
                  <span className="text-slate-300 font-mono text-base md:text-lg group-hover:text-white transition-colors duration-300">
                    {email}
                  </span>
                  <div className={`
                    w-11 h-11 rounded-full flex items-center justify-center transition-all duration-400
                    ${copied
                      ? "bg-emerald-500 text-white scale-105"
                      : "bg-white/[0.07] border border-white/[0.12] text-slate-300 group-hover:bg-primary group-hover:text-black group-hover:border-primary"
                    }
                  `}>
                    {copied ? <Check size={17} /> : <Copy size={17} />}
                  </div>
                </button>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social) => (
                  <SocialLink key={social.name} href={social.href} icon={social.icon} label={social.name} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <a href="#hero" className="inline-block mb-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/logo/image.png"
                  alt="Els Design"
                  width={320}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </a>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs font-light">
                Senior UX/UI & Motion Designer crafting digital<br />
                experiences that blend functionality with cinematic storytelling.
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-700 text-sm">
              <Globe size={14} />
              <span>Baku, Azerbaijan</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/50 font-medium text-xs uppercase tracking-[0.2em] mb-5">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 hover:text-slate-300 transition-colors duration-300 flex items-center gap-2 group text-sm font-light">
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/70" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white/50 font-medium text-xs uppercase tracking-[0.2em] mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 hover:text-slate-300 transition-colors duration-300 flex items-center gap-2 group text-sm font-light">
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/70" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white/50 font-medium text-xs uppercase tracking-[0.2em] mb-5">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 hover:text-slate-300 transition-colors duration-300 flex items-center gap-2 group text-sm font-light">
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/70" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="pt-10 border-t border-white/[0.05]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-slate-700 text-xs font-light">
              © 2025 Elza Xudiyeva. All rights reserved.
            </p>
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
              <span className="text-slate-600 text-xs font-light">Designed by</span>
              <span className="text-slate-400 text-xs font-medium">Turan Hasanov</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.14] hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-sm"
    >
      <span className="text-slate-500 group-hover:text-white transition-colors duration-300">{icon}</span>
      <span className="font-light text-sm text-slate-500 group-hover:text-slate-200 transition-colors duration-300">{label}</span>
      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary/70" />
    </a>
  );
}
