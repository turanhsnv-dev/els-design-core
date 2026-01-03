"use client";

import { useState } from "react";
import Link from "next/link";
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
    { name: "Playground", href: "#playground" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Resources", href: "#lab" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Body scroll'u engelle
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
    toast.success("CV downloaded!", {
      icon: "✓",
      style: {
        background: "rgba(11, 12, 21, 0.95)",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(12px)",
        borderRadius: "12px",
        padding: "16px 24px",
        minWidth: "320px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      },
      iconTheme: {
        primary: "#10b981",
        secondary: "rgba(11, 12, 21, 0.95)",
      },
    });
  };

  const handleSectionClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Önce body scroll'u aç
    document.body.style.overflow = "unset";
    closeMenu();
    
    // Kısa bir delay ile scroll - panel kapanma animasyonu için
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      
      if (element) {
        const offset = 80; // Navbar yüksekliği için offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        // Element bulunamazsa console'a log yaz
        console.warn(`Section with id "${targetId}" not found`);
      }
    }, 300); // Panel kapanma animasyonu süresi
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass effect arka plan - blur'lu içerik görünsün */}
      <div className="absolute inset-0 bg-background-dark/40 backdrop-blur-xl border-b border-white/5"></div>
      
      {/* HİZALAMA: Section'larla aynı genişlik ve boşluklar */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 py-2">
        
        <nav className="rounded-none py-2 grid grid-cols-3 items-center transition-all duration-300 bg-transparent relative">
          
          {/* Sol: Hamburger Menu Button */}
          <div className="flex justify-start">
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex items-center justify-center text-white hover:text-primary transition-colors z-10"
              aria-label="Toggle menu"
            >
              {/* Hamburger Icon - Animasyonlu */}
              <div className="relative w-6 h-5">
                <span
                  className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-full h-0.5 bg-current -translate-y-1/2 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Orta: LOGO - Merkez */}
          <div className="flex justify-center">
            <Link href="/" className="cursor-pointer group relative flex items-center z-10">
              <span className="text-xl sm:text-2xl font-black text-white tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-purple-400">
                <span className="text-primary">Els</span>
                <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-purple-400">Design</span>
              </span>
              {/* Hover glow effect */}
              <span className="absolute -inset-1 bg-primary/20 rounded blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>
          </div>

          {/* Sağ: Download CV Button */}
          <div className="flex justify-end">
            <a 
              href="/elzaxuudiyeva.cv.pdf" 
              download
              onClick={handleDownloadCV}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full transition-all flex items-center gap-2 group hover:border-primary/50 z-10"
            >
              Download CV
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform text-primary" />
            </a>
          </div>
        </nav>
      </div>

      {/* Side Panel Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:z-50"
          onClick={closeMenu}
        />
      )}

      {/* Side Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-md bg-background-dark/95 backdrop-blur-2xl border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Panel Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
            <button
              onClick={closeMenu}
              className="p-2 text-white hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Panel Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="flex flex-col gap-2">
              {allSections.map((section, index) => (
                <a
                  key={section.name}
                  href={section.href}
                  onClick={(e) => handleSectionClick(section.href, e)}
                  className="group relative px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 flex items-center justify-between cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-sm font-medium">{section.name}</span>
                  <ArrowRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Panel Footer */}
          <div className="p-6 border-t border-white/10">
            <a 
              href="/elzaxuudiyeva.cv.pdf" 
              download
              onClick={handleDownloadCV}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              Download CV
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}