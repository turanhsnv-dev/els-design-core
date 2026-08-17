"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, X } from "lucide-react";
import toast from "react-hot-toast";
import { NAV_SECTIONS } from "@/constants/nav";
import { SITE } from "@/constants/site";
import { CV_TOAST } from "@/constants/toast";

const SCROLL_OFFSET = 80;
const CLOSE_DELAY_MS = 300;

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  const handleDownloadCV = () => toast.success("CV downloaded!", CV_TOAST);

  const handleSectionClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    close();
    setTimeout(() => {
      const el = document.getElementById(href.replace("#", ""));
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }, CLOSE_DELAY_MS);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-md border-b border-white/[0.04]" />

      <div className="relative w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40 py-3">
        <nav className="grid grid-cols-3 items-center">
          <div className="flex justify-start">
            <button
              onClick={toggle}
              className="relative w-9 h-9 flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-300 z-10"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 w-full h-px bg-current transition-all duration-500 ${
                    isOpen ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-full h-px bg-current -translate-y-1/2 transition-all duration-500 ${
                    isOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-px bg-current transition-all duration-500 ${
                    isOpen ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>

          <div className="flex justify-center">
            <Link href="/" className="cursor-pointer group relative flex items-center z-10">
              <Image
                src={SITE.logo}
                alt={`${SITE.name} logo`}
                width={320}
                height={56}
                className="h-9 sm:h-12 md:h-14 w-auto object-contain transition-opacity duration-500 group-hover:opacity-70"
                priority
              />
            </Link>
          </div>

          <div className="flex justify-end">
            <a
              href={SITE.cv}
              download
              onClick={handleDownloadCV}
              className="hidden md:flex items-center gap-2 bg-transparent hover:bg-white/[0.04] border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-xs font-medium uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-500 group z-10"
            >
              Download CV
              <Download
                size={14}
                className="group-hover:translate-y-0.5 transition-transform duration-300 text-primary"
              />
            </a>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={close} />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-[#080808] border-r border-white/[0.06] z-50 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/[0.06]">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
              Menu
            </span>
            <button
              onClick={close}
              className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors duration-300"
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-1">
            {NAV_SECTIONS.map((section, i) => (
              <a
                key={section.name}
                href={section.href}
                onClick={(e) => handleSectionClick(section.href, e)}
                className="group flex items-center justify-between py-3.5 border-b border-white/[0.04] text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span className="text-sm font-light tracking-wide">{section.name}</span>
                <ArrowRight
                  size={14}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary"
                />
              </a>
            ))}
          </nav>

          <div className="px-8 py-8 border-t border-white/[0.06]">
            <a
              href={SITE.cv}
              download
              onClick={handleDownloadCV}
              className="w-full flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-sm uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 group"
            >
              Download CV
              <Download
                size={14}
                className="group-hover:translate-y-0.5 transition-transform duration-300 text-primary"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
