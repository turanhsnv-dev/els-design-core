// src/components/sections/services/Services.tsx
"use client";

import { useRef, useState } from "react";
import { Layers, Zap, Smartphone, CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Product Design",
    description: "End-to-end digital product design. From user research to polished UI, I build apps that users actually love to use.",
    icon: <Smartphone size={32} />,
    features: ["User Experience (UX)", "User Interface (UI)", "Mobile & Web Apps", "Interactive Prototyping"],
    gradient: "from-blue-500/20 to-purple-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: 2,
    title: "Design Systems",
    description: "Scalable design languages for growing teams. I create the 'LEGO' blocks that keep your product consistent and fast to build.",
    icon: <Layers size={32} />,
    features: ["Component Libraries", "Style Guides", "Documentation", "Token Systems"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: 3,
    title: "Motion & Interaction",
    description: "Bringing static screens to life. Micro-interactions and animations that guide users and create 'delight' moments.",
    icon: <Zap size={32} />,
    features: ["Lottie Animations", "Interaction Design", "After Effects", "Developer Handoff"],
    gradient: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50"
  }
];

export default function Services() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-24 flex flex-col items-center">
      
      {/* HEADER */}
      <div className="text-center mb-16 animate-fade-in-up max-w-2xl">
        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-3">Capabilities</h2>
        <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
           Beyond just <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Pretty Pixels</span>
        </h3>
        <p className="text-slate-400 text-lg">
            I help startups and brands solve complex problems through strategic design. Here is how I can help you.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {SERVICES.map((service) => (
            <TiltCard key={service.id} service={service} />
        ))}
      </div>

    </section>
  );
}

// 3D TILT CARD COMPONENT
function TiltCard({ service }: { service: any }) {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        setRotateX(yPct * -20); // Tilt amount
        setRotateY(xPct * 20);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.1s ease-out"
            }}
            className={`
                group relative p-8 rounded-3xl bg-[#151520] border border-white/5 ${service.border}
                hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden
            `}
        >
            {/* Gradient Glow Background */}
            <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    {service.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed mb-8 grow">
                    {service.description}
                </p>

                <ul className="space-y-3 mt-auto">
                    {service.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                            <CheckCircle2 size={16} className="text-primary shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}