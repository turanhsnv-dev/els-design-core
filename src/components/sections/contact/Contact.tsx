// src/components/sections/contact/Contact.tsx
"use client";

import { useState } from "react";
import { Mail, Linkedin, Dribbble, Instagram, ArrowUpRight, Copy, Check, Heart, Github, Sparkles, Zap, Globe, Palette } from "lucide-react";

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
      { name: "Resources", href: "#lab" },
      { name: "Playground", href: "#playground" },
      { name: "Showreel", href: "#showreel" },
    ],
    connect: [
      { name: "Testimonials", href: "#testimonials" },
      { name: "Comparison", href: "#comparison" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { name: "Behance", href: "https://www.behance.net/elzaxudiyeva", icon: <Palette size={20} /> },
    { name: "LinkedIn", href: "#", icon: <Linkedin size={20} /> },
    { name: "Dribbble", href: "#", icon: <Dribbble size={20} /> },
    { name: "Instagram", href: "#", icon: <Instagram size={20} /> },
    { name: "Github", href: "#", icon: <Github size={20} /> },
  ];

  return (
    <footer id="contact" className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-background-dark">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* MAIN CTA SECTION */}
        <div className="mb-32">
          <div className="w-full bg-gradient-to-br from-white/5 via-white/3 to-white/5 border border-white/10 rounded-3xl p-12 md:p-20 text-center backdrop-blur-xl overflow-hidden relative group">
             
             {/* Animated Background Pattern */}
             <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,103,242,0.1),transparent_70%)]" />
             </div>
             
             {/* Sparkle Icons */}
             <div className="absolute top-8 left-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <Sparkles size={32} className="text-primary animate-pulse" />
             </div>
             <div className="absolute bottom-8 right-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <Zap size={32} className="text-purple-400 animate-pulse" style={{ animationDelay: "1s" }} />
             </div>
             
             <div className="relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                 <Mail size={14} />
                 <span>Let's Connect</span>
               </div>

               <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1]">
                 Let's build the <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">
                   next big thing
                 </span>
               </h2>
               
               <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                 Have a project in mind? Or just want to discuss the latest design trends? 
                 I'm always open to exploring new digital universes and creating something extraordinary together.
               </p>

               {/* EMAIL COPY COMPONENT */}
               <div className="flex justify-center mb-16">
                 <button 
                    onClick={handleCopy}
                    className="group flex items-center gap-4 pl-8 pr-3 py-4 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                 >
                    <Mail size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
                    <span className="text-slate-300 font-mono text-lg md:text-xl group-hover:text-white transition-colors">
                      {email}
                    </span>
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                      ${copied ? "bg-green-500 text-white scale-110" : "bg-primary text-white group-hover:scale-110"}
                    `}>
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </div>
                 </button>
               </div>

               {/* SOCIAL LINKS */}
               <div className="flex flex-wrap justify-center gap-6">
                  {socialLinks.map((social) => (
                    <SocialLink key={social.name} href={social.href} icon={social.icon} label={social.name} />
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* FOOTER CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-white mb-2">
                <span className="text-primary">Els</span>Design
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Senior UX/UI & Motion Designer crafting digital<br />
                experiences that blend functionality with cinematic storytelling.
              </p>
            </div>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>Baku, Azerbaijan</span>
              </div>
            </div>
          </div>

          {/* NAVIGATION COLUMN */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES COLUMN */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT COLUMN */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM FOOTER / COPYRIGHT */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-slate-500 text-sm">
              <p>© 2025 Elza Xudiyeva. All rights reserved.</p>
            </div>
            
            {/* THE ROMANTIC TOUCH */}
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 transition-all group">
              <span className="text-slate-400 text-sm">Designed by</span>
              <span className="text-white font-medium text-sm">Turan Hasanov</span>
            </div>
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
      className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
    >
      {icon}
      <span className="font-medium text-sm text-slate-300 group-hover:text-white transition-colors">{label}</span>
      <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
    </a>
  );
}
