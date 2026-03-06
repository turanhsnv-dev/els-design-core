// src/components/shared/nav/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X, Download } from "lucide-react";
import toast from "react-hot-toast";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const allSections = [
    { name: "About", href: "#about" },
    { name: "Toolkit", href: "#toolkit" },
    { name: "Process", href: "#process" },
    { name: "Projects", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Showreel", href: "#showreel" },
    { name: "Impact", href: "#impact" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleDownloadCV = () => {
    toast.success("CV downloaded!", {
      icon: "✓",
      style: {
        background: "rgba(5, 5, 5, 0.97)",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(20px)",
        borderRadius: "10px",
        padding: "14px 20px",
        minWidth: "280px",
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5)",
      },
      iconTheme: {
        primary: "#00E5FF",
        secondary: "rgba(5, 5, 5, 0.97)",
      },
    });
  };

  const handleSectionClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    setTimeout(() => {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background-dark/60 backdrop-blur-2xl border-b border-white/[0.04]" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 py-3">
        <nav className="grid grid-cols-3 items-center">

          {/* Hamburger */}
          <div className="flex justify-start">
            <button
              onClick={toggleMenu}
              className="relative w-9 h-9 flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-300 z-10"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4">
                <span className={`absolute left-0 w-full h-px bg-current transition-all duration-500 ${isMenuOpen ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0"}`} />
                <span className={`absolute left-0 top-1/2 w-full h-px bg-current -translate-y-1/2 transition-all duration-500 ${isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"}`} />
                <span className={`absolute left-0 w-full h-px bg-current transition-all duration-500 ${isMenuOpen ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-0"}`} />
              </div>
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/" className="cursor-pointer group relative flex items-center z-10">
              <Image
                src="/logo/image.png"
                alt="Els Design logo"
                width={230}
                height={40}
                className="h-10 w-auto object-contain transition-opacity duration-500 group-hover:opacity-70"
                priority
              />
            </Link>
          </div>

          {/* CV download */}
          <div className="flex justify-end">
            <a
              href="/elzaxuudiyeva.cv.pdf"
              download
              onClick={handleDownloadCV}
              className="hidden md:flex items-center gap-2 bg-transparent hover:bg-white/[0.04] border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-xs font-medium uppercase tracking-widest px-5 py-2 rounded-full transition-all duration-500 group z-10"
            >
              Download CV
              <Download size={14} className="group-hover:translate-y-0.5 transition-transform duration-300 text-primary" />
            </a>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={closeMenu} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-[#080808]/98 backdrop-blur-3xl border-r border-white/[0.06] z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/[0.06]">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">Menu</span>
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors duration-300"
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-1">
            {allSections.map((section, index) => (
              <a
                key={section.name}
                href={section.href}
                onClick={(e) => handleSectionClick(section.href, e)}
                className="group flex items-center justify-between py-3.5 border-b border-white/[0.04] text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
                style={{ transitionDelay: `${index * 30}ms` }}
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
              href="/elzaxuudiyeva.cv.pdf"
              download
              onClick={handleDownloadCV}
              className="w-full flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-sm uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 group"
            >
              Download CV
              <Download size={14} className="group-hover:translate-y-0.5 transition-transform duration-300 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
