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
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="showreel" className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-24 flex flex-col items-center">
      
      {/* HEADER */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-3">Behind The Scenes</h2>
        <h3 className="text-3xl md:text-5xl font-black text-white">
           Design in <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Motion</span>
        </h3>
      </div>

      {/* VIDEO CONTAINER */}
      <div className="relative w-full aspect-[4/3] md:aspect-21/9 rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 shadow-2xl group">
        
        {/* Glow Effect Behind */}
        <div className="absolute -inset-4 bg-linear-to-r from-primary/20 via-purple-500/20 to-blue-500/20 blur-2xl opacity-50 -z-10 group-hover:opacity-75 transition-opacity duration-700"></div>

        {/* THE VIDEO */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
          src="./motion-2.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />

        {/* Overlay Gradient (Text oxunsun deyə) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

        {/* Video Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex items-end justify-between z-20">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Live Process</span>
                </div>
                <h4 className="text-white font-bold text-xl md:text-3xl max-w-lg leading-tight">
                    From wireframes to polished interfaces.
                </h4>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
                <button 
                    onClick={toggleMute}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-95"
                >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <button 
                    onClick={togglePlay}
                    className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_20px_rgba(100,103,242,0.4)] hover:scale-110 transition-transform active:scale-95"
                >
                    {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                </button>
            </div>
        </div>

        {/* Center Play Button (Only shows when paused) */}
        {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePlay}
                    className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white"
                >
                    <Play  size={40} fill="currentColor" className="ml-2" />
                </motion.button>
            </div>
        )}

      </div>

    </section>
  );
}