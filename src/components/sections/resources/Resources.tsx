// src/components/sections/resources/Resources.tsx
"use client";

import Image from "next/image";
import { 
  Search, 
  Calendar, 
  ArrowRight, 
  Download, 
  PlayCircle, 
  ChevronDown,
  Sparkles,
  Palette,
  Type,
  MonitorPlay
} from "lucide-react";

// Blog/Resurs Məlumatları
const RESOURCES = [
  {
    id: 1,
    title: "Top Tools of 2025",
    category: "Trend",
    categoryColor: "text-primary border-primary/20 bg-primary/10",
    date: "Oct 24, 2025",
    readTime: "5 min read",
    description: "The essential software stack for modern designers. From AI-driven prototyping to cinematic motion rendering.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop",
    action: "Read Article",
    icon: <ArrowRight size={18} />
  },
  {
    id: 2,
    title: "Best Color Combinations",
    category: "Resource",
    categoryColor: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
    date: "Oct 18, 2025",
    readTime: "Resource",
    description: "Curated palettes for dark mode interfaces. High contrast, accessible, and aesthetically pleasing combinations.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
    action: "Get Palettes",
    icon: <ArrowRight size={18} />
  },
  {
    id: 3,
    title: "Free UI Components",
    category: "Download",
    categoryColor: "text-purple-400 border-purple-400/20 bg-purple-400/10",
    date: "Sep 30, 2025",
    readTime: "UI Kit",
    description: "A set of 20+ glassmorphism components including cards, buttons, and inputs. React & Tailwind ready.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    action: "Download Now",
    icon: <Download size={18} />
  },
  {
    id: 4,
    title: "Mastering Micro-interactions",
    category: "Tutorial",
    categoryColor: "text-orange-400 border-orange-400/20 bg-orange-400/10",
    date: "Sep 15, 2025",
    readTime: "12 min watch",
    description: "Learn how to create delightful micro-interactions that boost user engagement using After Effects and Lottie.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    action: "Watch Video",
    icon: <PlayCircle size={18} />
  },
  {
    id: 5,
    title: "The Return of Skeuomorphism?",
    category: "Trend",
    categoryColor: "text-primary border-primary/20 bg-primary/10",
    date: "Aug 28, 2025",
    readTime: "8 min read",
    description: "Is flat design dead? Exploring the rise of 'Neo-Skeuomorphism' and tactile digital interfaces in 2025.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    action: "Read Article",
    icon: <ArrowRight size={18} />
  },
  {
    id: 6,
    title: "Cyberpunk Font Collection",
    category: "Font Pack",
    categoryColor: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
    date: "Aug 12, 2025",
    readTime: "Font Pack",
    description: "A curated list of 10 free fonts that perfectly capture the glitchy, high-tech aesthetic of cyberpunk.",
    image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop",
    action: "Get Fonts",
    icon: <ArrowRight size={18} />
  }
];

export default function Resources() {
  return (
    <section id="lab" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-24 flex flex-col items-center">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center text-center gap-4 mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/2">
            <Sparkles size={16} className="text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Knowledge Hub</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-slate-400 tracking-tight">
            The Creative Lab
        </h2>
        
        <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
            Experiments, insights, and high-fidelity resources from the edge of design. Exploring the intersection of UI, Motion, and 3D.
        </p>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="w-full sticky top-24 z-30 mb-10">
        <div className="mx-auto max-w-5xl backdrop-blur-xl rounded-2xl border border-white/10 bg-[#151520]/80 shadow-2xl p-2 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Filter Chips */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-[0_0_15px_rgba(100,103,242,0.3)] whitespace-nowrap transition-transform hover:scale-105">
                    All Posts
                </button>
                <button className="px-5 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 text-slate-400 hover:text-white text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2">
                    <Palette size={16} /> Resources
                </button>
                <button className="px-5 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 text-slate-400 hover:text-white text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2">
                    <MonitorPlay size={16} /> Tutorials
                </button>
                <button className="px-5 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 text-slate-400 hover:text-white text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2">
                    <Sparkles size={16} /> Trends
                </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 group">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 group-focus-within:text-primary transition-colors">
                    <Search size={18} />
                </span>
                <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/5 text-white text-sm rounded-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block pl-10 p-2.5 placeholder-slate-500 transition-all" 
                    placeholder="Search experiments..." 
                />
            </div>
        </div>
      </div>

      {/* RESOURCES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {RESOURCES.map((item) => (
            <article key={item.id} className="group relative bg-[#1c1c27]/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 hover:bg-[#1c1c27]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col h-full">
                
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10">
                        <span className={`backdrop-blur-md border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${item.categoryColor}`}>
                            {item.category}
                        </span>
                    </div>
                    <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#13131e] to-transparent opacity-80" />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col grow">
                    <div className="flex items-center gap-2 mb-3 text-xs text-slate-400 font-mono">
                        <Calendar size={14} /> {item.date}
                        <span>•</span>
                        <span>{item.readTime}</span>
                    </div>
                    
                    <h3 className="text-white text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 grow line-clamp-3">
                        {item.description}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-bold mt-auto group/link gap-1">
                        {item.action}
                        <span className="transition-transform group-hover/link:translate-x-1">
                            {item.icon}
                        </span>
                    </div>
                </div>
            </article>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      <div className="flex justify-center mt-12">
        <button className="group relative px-8 py-3 rounded-full bg-transparent border border-white/10 text-white font-bold overflow-hidden transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(100,103,242,0.3)]">
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative flex items-center gap-2">
                Load More Experiments
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
        </button>
      </div>

    </section>
  );
}