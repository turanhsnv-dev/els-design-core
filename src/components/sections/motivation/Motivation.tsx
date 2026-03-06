// src/components/sections/motivation/Motivation.tsx
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Motivation() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="motivation"
      ref={containerRef}
      className="relative w-full flex flex-col items-center py-24 md:py-32 overflow-hidden bg-background-dark"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/[0.03] rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8">

        {/* First Work Card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative bg-[#0e0e13] border border-white/[0.07] rounded-[28px] p-8 md:p-12 overflow-hidden group hover:border-white/[0.12] transition-all duration-700">

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#080810] shadow-2xl group/image hover:border-white/[0.14] transition-all duration-700">
                  <Image
                    src="/firsttels.jpg"
                    alt="Elza's first design work"
                    fill
                    className="object-cover group-hover/image:scale-[1.04] transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-50" />
                </div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0e0e13] border border-white/[0.1] backdrop-blur-sm">
                  <p className="text-primary/80 text-xs font-medium tracking-wider">İlk İşim</p>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col justify-center"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] text-primary/80 text-xs font-medium uppercase tracking-[0.2em] mb-5 w-fit">
                  Başlanğıc
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Hər Usta Bir Zamanlar{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                    Acemi Olub
                  </span>
                </h3>

                <p className="text-lg text-slate-400 leading-relaxed mb-4 font-light">
                  Mən də bu sadə işlə başladım. Çox sadə, çox adi görünə bilər, amma mənim üçün çox dəyərli idi.
                  Bu, mənim dizayner kimi ilk addımımdı.
                </p>

                <p className="text-base text-slate-500 leading-relaxed mb-6 font-light">
                  İndi böyük layihələrdə işləyirəm, mürəkkəb sistemlər dizayn edirəm. Amma bu ilk işim mənə göstərdi ki,{" "}
                  <span className="text-slate-300">hər uğur kiçik addımlarla başlayır</span>.
                </p>

                <div className="flex items-center gap-2 text-primary/70 font-medium text-sm">
                  <ArrowUpRight size={15} />
                  <span>İndi böyük layihələrdə işləyirəm</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 text-center"
        >
          <button className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-white font-medium text-sm hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-500">
            Səyahətinə Başla
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300 text-primary" />
          </button>
        </motion.div>

        {/* Inspirational quotes */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { text: "Hər uğur bir xəyalla başlayır" },
            { text: "Özünə inan, gücünü kəşf et" },
            { text: "Xəyallarının ardınca get" },
          ].map((item, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-[#0e0e13] border border-white/[0.06] hover:border-white/[0.1] backdrop-blur-sm hover:bg-[#111118] transition-all duration-500 group cursor-default"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300" />
                <p className="text-slate-400 font-light text-sm group-hover:text-slate-300 transition-colors duration-300">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
