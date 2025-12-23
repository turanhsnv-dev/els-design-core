import Link from "next/link";
import { Command, ArrowRight } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 hover:border-primary/30">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(100,103,242,0.5)]">
              <Command size={18} />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white hidden sm:block">
              DESIGNER.
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Button */}
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all flex items-center gap-2 group">
            Lets Talk
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>
      </div>
    </header>
  );
}