"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";

export default function Showreel() {
  const [isPlaying, setPlaying] = useState(true);
  const [isMuted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isPlaying) v.pause();
    else v.play();
    setPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !isMuted;
    setMuted(!isMuted);
  };

  return (
    <Container as="section" id="showreel" className="py-14 md:py-24 flex flex-col items-center">
      <RevealContainer className="w-full flex flex-col items-center" stagger={0.12}>
        <RevealItem className="text-center mb-12">
          <p className="text-xs font-medium text-primary/80 uppercase tracking-[0.3em] mb-4">
            Behind The Scenes
          </p>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Design in <GradientText>Motion</GradientText>
          </h3>
        </RevealItem>

        <RevealItem className="relative w-full aspect-4/3 md:aspect-21/9 rounded-[28px] md:rounded-[40px] overflow-hidden border border-white/[0.07] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] group">
          <div className="absolute -inset-2 bg-cyan-500/4 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <video
            ref={videoRef}
            className="w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            src="/motion-2.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 w-full p-7 md:p-10 flex items-end justify-between z-20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/90 animate-pulse" />
                <span className="text-white/60 text-[10px] font-medium uppercase tracking-[0.25em]">
                  Live Process
                </span>
              </div>
              <h4 className="text-white font-semibold text-xl md:text-2xl max-w-md leading-tight">
                From wireframes to polished interfaces.
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <IconButton onClick={toggleMute}>
                {isMuted ? (
                  <VolumeX size={18} strokeWidth={1.5} />
                ) : (
                  <Volume2 size={18} strokeWidth={1.5} />
                )}
              </IconButton>
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center hover:opacity-90 transition-opacity duration-300 active:scale-95 shadow-[0_0_30px_-8px_rgba(0,229,255,0.6)]"
              >
                {isPlaying ? (
                  <Pause size={20} fill="currentColor" strokeWidth={0} />
                ) : (
                  <Play size={20} fill="currentColor" strokeWidth={0} className="ml-0.5" />
                )}
              </button>
            </div>
          </div>

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
        </RevealItem>
      </RevealContainer>
    </Container>
  );
}

function IconButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="w-11 h-11 rounded-full bg-white/8 backdrop-blur-md border border-white/12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.14] transition-all duration-300 active:scale-95"
    >
      {children}
    </button>
  );
}
