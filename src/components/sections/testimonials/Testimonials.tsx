// src/components/sections/testimonials/Testimonials.tsx
"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    text: "Elza turned our chaotic dashboard into a masterpiece. The user retention went up by 40% in just one month.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, StartUp X",
    text: "Her understanding of motion design set our brand apart. Absolutely world-class attention to detail.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Product Manager",
    text: "I've worked with many designers, but Elza is on another level. She speaks the language of developers.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 4,
    name: "David Smith",
    role: "Marketing Dir.",
    text: "The branding kit she created is timeless. We use it for everything. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "CTO, FinNova",
    text: "Fast, precise, and incredibly creative. The dark mode UI she designed is pure candy for the eyes.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
  },
];

const BRANDS = [ "Coinbase", "Spotify", "Slack", "Figma", "Linear", "Vercel", "Notion" ];

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-background-dark">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background-dark to-background-dark" />

      {/* HEADER */}
      <div className="text-center mb-16 px-4 animate-fade-in-up">
         <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-3">Trusted By The Best</h2>
         <h3 className="text-3xl md:text-4xl font-black text-white">
            Client <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-500">Echoes</span>
         </h3>
      </div>

      {/* MARQUEE 1: LOGOS (Avtomatik Axın) */}
      <div className="relative flex overflow-x-hidden group mb-20 opacity-60 hover:opacity-100 transition-opacity duration-500">
        <div className="flex animate-marquee whitespace-nowrap items-center gap-16 px-8 min-w-full">
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="text-2xl font-bold text-white/30 font-display uppercase tracking-wider hover:text-white transition-colors cursor-default select-none">
              {brand}
            </span>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center gap-16 px-8 min-w-full">
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="text-2xl font-bold text-white/30 font-display uppercase tracking-wider hover:text-white transition-colors cursor-default select-none">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* MARQUEE 2: REVIEWS (Avtomatik Axın + Hover-da dayanır) */}
      {/* group-hover:pause - bu klassı əlavə etdim ki, üstünə gələndə dayansın */}
      <div className="relative flex w-full overflow-hidden group">
        
        {/* Sol tərəf qaranlıq effekt */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background-dark to-transparent z-10 pointer-events-none" />
        {/* Sağ tərəf qaranlıq effekt */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background-dark to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused] items-stretch gap-6 px-3 min-w-full">
           {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
              <ReviewCard key={i} review={review} />
           ))}
        </div>
        <div className="absolute top-0 flex animate-marquee-slow2 group-hover:[animation-play-state:paused] items-stretch gap-6 px-3 min-w-full">
           {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
              <ReviewCard key={i} review={review} />
           ))}
        </div>
      </div>

    </section>
  );
}

function ReviewCard({ review }: { review: any }) {
  return (
    <div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-3xl bg-[#12121a] border border-white/5 hover:border-primary/40 hover:bg-[#16161f] hover:shadow-[0_10px_40px_-10px_rgba(100,103,242,0.2)] transition-all duration-500 cursor-pointer relative overflow-hidden group/card">
        
        <Quote size={40} className="text-primary/10 absolute top-6 right-6 group-hover/card:text-primary/30 transition-colors" />

        <div className="relative z-10 flex flex-col h-full justify-between">
            <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium">
                &quot;{review.text}&quot;
            </p>
            
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover/card:border-primary/50 transition-colors">
                    <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-base">{review.name}</h4>
                    <p className="text-slate-500 text-xs uppercase tracking-wide">{review.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5 opacity-50 group-hover/card:opacity-100 transition-opacity">
                    {[1,2,3,4,5].map(star => (
                        <Star key={star} size={14} className="text-yellow-500 fill-yellow-500" />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}