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
    title: "2025-in Ən Yaxşı Rəng Kombinasiyaları",
    category: "Resurs",
    categoryColor: "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
    date: "Yan 15, 2025",
    readTime: "5 dəq oxu",
    description: "Qaranlıq interfeyslər üçün seçilmiş palitralar. Yüksək kontrast, əlçatan və estetik cəhətdən xoşagələn kombinasiyalar.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop",
    action: "Palitraları Gör",
    icon: <ArrowRight size={18} />
  },
  {
    id: 2,
    title: "Ən Çox İstifadə Olunan UI Kitlər",
    category: "Resurs",
    categoryColor: "text-purple-400 border-purple-400/20 bg-purple-400/10",
    date: "Yan 10, 2025",
    readTime: "UI Kit",
    description: "2025-ci ildə dizaynerlərin ən çox istifadə etdiyi UI komponent kitləri. React, Vue, və Figma üçün hazır komponentlər.",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1000&auto=format&fit=crop",
    action: "Kitləri Yüklə",
    icon: <Download size={18} />
  },
  {
    id: 3,
    title: "Modern Dizayn Trendləri 2025",
    category: "Trend",
    categoryColor: "text-primary border-primary/20 bg-primary/10",
    date: "Yan 5, 2025",
    readTime: "8 dəq oxu",
    description: "2025-ci ildə UI/UX dizaynında ən aktual trendlər. Glassmorphism, neomorphism və yeni vizual üslublar haqqında.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    action: "Məqaləni Oxu",
    icon: <ArrowRight size={18} />
  },
  {
    id: 4,
    title: "Pulsuz Typography Resursları",
    category: "Font Pack",
    categoryColor: "text-orange-400 border-orange-400/20 bg-orange-400/10",
    date: "Dek 28, 2024",
    readTime: "Font Paketi",
    description: "Professional layihələr üçün ən yaxşı pulsuz fontlar. Modern, klassik və dekorativ font kolleksiyası.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop",
    action: "Fontları Yüklə",
    icon: <Download size={18} />
  },
  {
    id: 5,
    title: "Figma İstifadəçiləri Üçün Pro Tips",
    category: "Tutorial",
    categoryColor: "text-cyan-400 border-cyan-400/20 bg-cyan-400/10",
    date: "Dek 20, 2024",
    readTime: "12 dəq izlə",
    description: "Figma-da işləmə sürətini artıran pro texnikalar. Komponent sistemləri, avtomatizasiya və workflow optimallaşdırması.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
    action: "Video İzlə",
    icon: <PlayCircle size={18} />
  },
  {
    id: 6,
    title: "Motion Dizaynın Əsasları",
    category: "Tutorial",
    categoryColor: "text-pink-400 border-pink-400/20 bg-pink-400/10",
    date: "Dek 15, 2024",
    readTime: "15 dəq izlə",
    description: "After Effects və Lottie ilə maraqlı mikro-interaksiyalar yaratmaq. İstifadəçi təcrübəsini artıran animasiya texnikaları.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    action: "Video İzlə",
    icon: <PlayCircle size={18} />
  }
];

export default function Resources() {
  return (
    <section id="lab" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-24 flex flex-col items-center">
      
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center text-center gap-4 mb-12 animate-fade-in-up">
        <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/2">
            <Sparkles size={16} className="text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Knowledge Hub</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-slate-400 tracking-tight">
            Yaradıcı Laboratoriya
        </h2>
        
        <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
            Dizaynın kənarından eksperimentlər, fikirlər və yüksək keyfiyyətli resurslar. UI, Motion və 3D-nin kəsişməsini araşdırırıq.
        </p>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="w-full sticky top-24 z-30 mb-10">
        <div className="mx-auto max-w-5xl backdrop-blur-xl rounded-2xl border border-white/10 bg-[#151520]/80 shadow-2xl p-2 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Filter Chips */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-[0_0_15px_rgba(100,103,242,0.3)] whitespace-nowrap transition-transform hover:scale-105">
                    Bütün Yazılar
                </button>
                <button className="px-5 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 text-slate-400 hover:text-white text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2">
                    <Palette size={16} /> Resurslar
                </button>
                <button className="px-5 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 text-slate-400 hover:text-white text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2">
                    <MonitorPlay size={16} /> Dərslər
                </button>
                <button className="px-5 py-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 text-slate-400 hover:text-white text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2">
                    <Sparkles size={16} /> Trendlər
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
                    placeholder="Resursları axtar..." 
                />
            </div>
        </div>
      </div>

      {/* RESOURCES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {RESOURCES.map((item) => (
            <article key={item.id} className="group relative bg-[#1c1c27]/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 hover:bg-[#1c1c27]/60 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col h-full">
                
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden border-b-0">
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
                Daha Çox Resurs Yüklə
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </span>
        </button>
      </div>

    </section>
  );
}