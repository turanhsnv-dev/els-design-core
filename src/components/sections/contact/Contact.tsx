// src/components/sections/contact/Contact.tsx
"use client";

import { useState } from "react";
import { Mail, Linkedin, Dribbble, Instagram, ArrowUpRight, Copy, Check, Heart } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "elza@design.com"; // Buranı Elzanın emaili ilə dəyiş

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-8 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-linear-to-t from-primary/10 via-background-dark to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* MAIN CTA CARD */}
        <div className="w-full bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 md:p-16 text-center backdrop-blur-md overflow-hidden relative group">
           
           {/* Animated Background Pattern */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
           
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6">
             Let's build the <br />
             <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-white">
               next big thing
             </span>
           </h2>
           
           <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
             Have a project in mind? Or just want to discuss the latest design trends? 
             I'm always open to exploring new digital universes.
           </p>

           {/* EMAIL COPY COMPONENT */}
           <div className="flex justify-center mb-12">
             <button 
                onClick={handleCopy}
                className="group flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
             >
                <span className="text-slate-300 font-mono text-lg group-hover:text-white transition-colors">
                  {email}
                </span>
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  ${copied ? "bg-green-500 text-white" : "bg-primary text-white group-hover:scale-110"}
                `}>
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </div>
             </button>
           </div>

           {/* SOCIAL LINKS */}
           <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="#" icon={<Dribbble size={20} />} label="Dribbble" />
              <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="mailto:elza@design.com" icon={<Mail size={20} />} label="Email" />
           </div>
        </div>

        {/* BOTTOM FOOTER / COPYRIGHT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-white/5 text-sm text-slate-500">
           <p>© 2025 Elza Design. All rights reserved.</p>
           
           {/* THE ROMANTIC TOUCH */}
           <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/2 border border-white/5 hover:border-primary/20 transition-colors">
              <span>Designed by Elza</span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                Coded with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> by 
                <span className="text-slate-300 font-medium">YourName</span>
              </span>
           </div>
        </div>

      </div>
    </footer>
  );
}

// Helper Component for Social Links
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
    >
      {icon}
      <span className="font-medium">{label}</span>
      <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </a>
  );
}