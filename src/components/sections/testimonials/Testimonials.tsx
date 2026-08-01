// src/components/sections/testimonials/Testimonials.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Baş direktor, TechFlow",
    text: "Elza xaotik idarə panelimizi əsərə çevirdi. İstifadəçi saxlanması cəmi bir ay ərzində 40% artdı.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Təsisçi, StartUp X",
    text: "Hərəkət dizaynına dair anlayışı brendimizi fərqləndirdi. Detallara qüsursuz, dünya səviyyəsində diqqət.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Məhsul meneceri",
    text: "Çoxlu dizaynerlərlə işləmişəm, amma Elza tamamilə başqa səviyyədədir. O, developerlərin dilini danışır.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 4,
    name: "David Smith",
    role: "Marketinq direktoru",
    text: "Yaratdığı brendinq dəsti zamansızdır. Hər yerdə istifadə edirik. Mütləq tövsiyə olunur!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "Texniki direktor, FinNova",
    text: "Sürətli, dəqiq və inanılmaz dərəcədə yaradıcı. Dizayn etdiyi dark mode UI göz üçün saf zövqə çevrilir.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-14 md:py-24 overflow-hidden bg-background-dark">

      {/* HEADER */}
      <motion.div
        className="w-full max-w-350 mx-auto px-8 md:px-16 lg:px-32 xl:px-40"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
      >
          <div className="text-center mb-10 md:mb-16">
          <p className="text-xs font-medium text-primary/80 uppercase tracking-[0.3em] mb-4">Trusted By The Best</p>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Client <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/30">Echoes</span>
          </h3>
        </div>
      </motion.div>

      {/* REVIEWS LAYOUT */}
      <div className="w-full max-w-350 mx-auto px-8 md:px-16 lg:px-32 xl:px-40">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Large featured card */}
          <div className="w-full lg:w-2/5">
            <ReviewCard review={REVIEWS[0]} isLarge index={0} />
          </div>
          {/* 2x2 grid */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {REVIEWS.slice(1).map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i + 1} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

function ReviewCard({ review, isLarge = false, index }: { review: (typeof REVIEWS)[0]; isLarge?: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      className={`w-full h-full ${isLarge ? "p-6 md:p-9 lg:p-11" : "p-5 md:p-7"} rounded-2xl bg-[#0e0e13] border border-white/6 hover:border-white/12 transition-all duration-700 cursor-default relative overflow-hidden group`}
    >
      <Quote
        size={isLarge ? 52 : 38}
        className="text-white/4 absolute top-6 left-6 group-hover:text-primary/8 transition-colors duration-700"
      />

      <div className="relative z-10 flex flex-col h-full justify-between pt-10">
        <p className={`text-slate-300 ${isLarge ? "text-lg md:text-xl lg:text-2xl" : "text-sm md:text-base"} leading-relaxed mb-6 md:mb-8 font-light`}>
          {review.text}
        </p>

        <div className="flex items-center gap-4">
          <div className={`relative ${isLarge ? "w-12 h-12" : "w-10 h-10"} rounded-full overflow-hidden border border-white/10 group-hover:border-white/18 transition-colors duration-500 shrink-0`}>
            <Image src={review.avatar} alt={review.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className={`text-white font-medium ${isLarge ? "text-base" : "text-sm"}`}>{review.name}</h4>
            <p className={`text-slate-600 ${isLarge ? "text-xs" : "text-[11px]"} uppercase tracking-wider`}>{review.role}</p>
          </div>
          {/* Subtle star row — elegant and understated */}
          <div className="ml-auto flex gap-0.5 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className={`${isLarge ? "w-2 h-2" : "w-1.5 h-1.5"} rounded-full bg-white`} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
