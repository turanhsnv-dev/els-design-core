// src/components/sections/showreel/Showreel.tsx
"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="showreel" className="w-full max-w-350 mx-auto px-8 md:px-16 lg:px-32 xl:px-40 py-14 md:py-24 flex flex-col items-center">

      {/* HEADER */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-xs font-medium text-primary/80 uppercase tracking-[0.3em] mb-4">Behind The Scenes</p>
        <h3 className="text-3xl md:text-5xl font-bold text-white">
          Design in <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Motion</span>
        </h3>
      </motion.div>

      {/* VIDEO */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full aspect-4/3 md:aspect-21/9 rounded-[28px] md:rounded-[40px] overflow-hidden border border-white/[0.07] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] group"
      >
        {/* Very subtle cyan ambient behind */}
        <div className="absolute -inset-2 bg-cyan-500/4 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

        <video
          ref={videoRef}
          className="w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          src="./motion-2.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 w-full p-7 md:p-10 flex items-end justify-between z-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/90 animate-pulse" />
              <span className="text-white/60 text-[10px] font-medium uppercase tracking-[0.25em]">Live Process</span>
            </div>
            <h4 className="text-white font-semibold text-xl md:text-2xl max-w-md leading-tight">
              From wireframes to polished interfaces.
            </h4>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="w-11 h-11 rounded-full bg-white/8 backdrop-blur-md border border-white/12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.14] transition-all duration-300 active:scale-95"
            >
              {isMuted ? <VolumeX size={18} strokeWidth={1.5} /> : <Volume2 size={18} strokeWidth={1.5} />}
            </button>
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center hover:opacity-90 transition-opacity duration-300 active:scale-95 shadow-[0_0_30px_-8px_rgba(0,229,255,0.6)]"
            >
              {isPlaying
                ? <Pause size={20} fill="currentColor" strokeWidth={0} />
                : <Play size={20} fill="currentColor" strokeWidth={0} className="ml-0.5" />
              }
            </button>
          </div>
        </div>

        {/* Center play overlay (paused state) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={togglePlay}
              className="w-20 h-20 rounded-full bg-white/8 backdrop-blur-xl border border-white/15 flex items-center justify-center text-white hover:bg-white/[0.14] transition-all duration-300"
            >
              <Play size={32} fill="currentColor" strokeWidth={0} className="ml-1" />
            </motion.button>
          </div>
        )}
      </motion.div>

    </section>
  );
}
