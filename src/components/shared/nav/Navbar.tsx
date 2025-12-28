import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6">
      
      {/* HİZALAMA: Hero ile birebir aynı genişlik ve boşluklar korundu */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        
        <nav className="rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 border border-white/10 bg-background-dark/90 backdrop-blur-3xl shadow-2xl hover:border-primary/30">
          
          {/* LOGO: ElsDesign */}
          <Link href="/" className="cursor-pointer group relative flex items-center">
            <span className="text-xl sm:text-2xl font-black text-white tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-purple-400">
              <span className="text-primary">Els</span>
              <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-purple-400">Design</span>
            </span>
            {/* Hover glow effect */}
            <span className="absolute -inset-1 bg-primary/20 rounded blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </Link>

          {/* Links (Değişmedi) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(100,103,242,0.8)]"></span>
              </Link>
            ))}
          </div>

          {/* Button (Değişmedi) */}
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all flex items-center gap-2 group hover:border-primary/50">
            Let's Talk
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-primary" />
          </button>
        </nav>
      </div>
    </header>
  );
}