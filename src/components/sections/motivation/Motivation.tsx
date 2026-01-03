// src/components/sections/motivation/Motivation.tsx
"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star, Rocket, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

export default function Motivation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const ctx = gsap.context(() => {
      // Floating stars animation
      gsap.to(".floating-star", {
        y: -30,
        x: "random(-20, 20)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "random"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="motivation" 
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden bg-background-dark"
    >
      
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
        
        {/* Gradient Orbs - Emotional warm colors */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-pink-500/15 rounded-full blur-[200px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-purple-500/15 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/10 rounded-full blur-[220px]" />
        
        {/* Floating Stars */}
        {[...Array(12)].map((_, i) => {
          const randomX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200;
          const randomY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800;
          return (
            <motion.div
              key={i}
              className="floating-star absolute"
              initial={{
                x: randomX,
                y: randomY,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <Star size={20} className="text-primary/40" fill="currentColor" />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Başlangıçtan Bugüne - İlk İş */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8"
        >
          <div className="relative bg-[#151520]/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden group hover:border-primary/30 transition-all duration-500">
            
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Star size={40} className="text-primary" fill="currentColor" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* Sol Taraf - İlk İş Görseli */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/10 bg-[#0f111a] group/image hover:border-primary/40 transition-all duration-500 shadow-2xl">
                  <Image
                    src="/firsttels.jpg"
                    alt="Elza'nın ilk dizayn işi - Turan"
                    fill
                    className="object-cover group-hover/image:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Nostalji efekti */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover/image:opacity-80 transition-opacity" />
                  
                  {/* Vintage overlay efekti */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] opacity-50" />
                </div>
                
                {/* Etiket */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                  <p className="text-primary text-xs font-bold">İlk İşim</p>
                </div>
              </motion.div>

              {/* Sağ Taraf - Mesaj */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4 w-fit">
                  <Star size={12} className="fill-primary" />
                  <span>Başlanğıc</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Hər Usta Bir Zamanlar <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">Acemi Olub</span>
                </h3>
                
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                  Mən də bu sadə işlə başladım. Çox sadə, çox adi görünə bilər, amma mənim üçün çox dəyərli idi. 
                  Bu, mənim dizayner kimi ilk addımımdı.
                </p>
                
                <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-6">
                  İndi böyük layihələrdə işləyirəm, mürəkkəb sistemlər dizayn edirəm. Amma bu ilk işim mənə göstərdi ki, 
                  <span className="text-primary font-semibold"> hər uğur kiçik addımlarla başlayır</span>.
                </p>
                
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <ArrowUpRight size={16} />
                  <span>İndi böyük layihələrdə işləyirəm</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] transition-all duration-300"
          >
            <Rocket size={16} />
            <span>Səyahətinə Başla</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Inspirational Quote Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: <Sparkles size={18} />, text: "Hər uğur bir xəyalla başlayır", color: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/20" },
            { icon: <Star size={18} />, text: "Özünə inan, gücünü kəşf et", color: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/20" },
            { icon: <Rocket size={18} />, text: "Xəyallarının ardınca get", color: "from-pink-500/20 to-red-500/20", border: "border-pink-500/20" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="text-primary">{item.icon}</div>
                <p className="text-white font-semibold text-sm">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

