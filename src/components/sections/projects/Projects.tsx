// src/components/sections/projects/Projects.tsx
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const scaleDown = (delay = 0) => ({
  initial: { opacity: 0, scale: 1.35, y: 60 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const PROJECTS = [
  {
    id: 1,
    title: "Nova Bank",
    category: "Fintech",
    description: "Mobile Banking Redesign",
    tags: ["UX Research", "UI Design", "Prototyping"],
    image: "/project-images/Desktop - 2.png",
  },
  {
    id: 2,
    title: "Ether Float",
    category: "Web3",
    description: "NFT Marketplace",
    tags: ["3D Modeling", "Visual Design", "Motion"],
    image: "/abb-images/kart.png",
  },
  {
    id: 3,
    title: "Luxe & Co.",
    category: "E-Commerce",
    description: "Fashion Storefront",
    tags: ["Strategy", "Development", "Branding"],
    image: "/porsche-images/porsche 3.png",
  },
  {
    id: 4,
    title: "Vortex Data",
    category: "Analytics",
    description: "SaaS Analytics Platform",
    tags: ["Data Viz", "Design System"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    title: "CloudSync Pro",
    category: "SaaS",
    description: "Cloud Storage Dashboard",
    tags: ["UI Design", "Dashboard", "Wireframing"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "StreamFlow",
    category: "Entertainment",
    description: "Video Streaming Platform",
    tags: ["UI/UX", "Prototyping", "Motion Design"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
  },
];

const PROJECT_IMAGES = [
  "/project-images/Desktop - 2.png",
  "/project-images/Desktop - 3.png",
  "/project-images/Desktop - 4.png",
  "/project-images/Desktop - 11.png",
];

const ABB_IMAGES = [
  "/abb-images/kart.png",
  "/abb-images/haqqımızda.png",
  "/abb-images/ipoteka.png",
  "/abb-images/kartlar.png",
  "/abb-images/kreditlər.png",
  "/abb-images/nömrə.png",
];

const PORSCHE_IMAGES = [
  "/porsche-images/porsche 1.png",
  "/porsche-images/porsche 2.png",
  "/porsche-images/porsche 3.png",
];

const VORTEX_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
];

const CLOUDSYNC_IMAGES = [
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
];

const STREAMFLOW_IMAGES = [
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
];

const ALL_PROJECT_IMAGES = [
  PROJECT_IMAGES,
  ABB_IMAGES,
  PORSCHE_IMAGES,
  VORTEX_IMAGES,
  CLOUDSYNC_IMAGES,
  STREAMFLOW_IMAGES,
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImages = activeProjectIndex !== null ? ALL_PROJECT_IMAGES[activeProjectIndex] : [];

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen, currentImages.length]);

  const openModal = (projectIndex: number) => {
    setCurrentImageIndex(0);
    setActiveProjectIndex(projectIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveProjectIndex(null);
  };

  const nextImage = () => setCurrentImageIndex((p) => (p === currentImages.length - 1 ? 0 : p + 1));
  const prevImage = () => setCurrentImageIndex((p) => (p === 0 ? currentImages.length - 1 : p - 1));

  return (
    <section id="work" className="relative py-14 md:py-24 overflow-hidden bg-background-dark">

      {/* Heading */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40 mb-10 md:mb-16">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4">
          <div className="flex items-center gap-3 text-xs font-medium tracking-[0.25em] uppercase mb-1 md:mb-2 text-primary/80">
            <span className="w-8 h-px bg-primary/50" />
            Selected Works
          </div>
          <motion.h2 
            {...scaleDown(0.1)}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white origin-bottom"
          >
            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/30">Projects</span>
          </motion.h2>
        </div>
      </div>

      {/* Grid */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32 xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => openModal(index)}
              className="group relative rounded-2xl border border-white/[0.06] bg-[#0e0e13] overflow-hidden cursor-pointer hover:border-white/[0.14] transition-all duration-700"
            >
              {/* Image */}
              <div className="relative h-[240px] w-full bg-[#080810] overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-[#0e0e13] via-transparent to-transparent opacity-70 z-10 group-hover:opacity-40 transition-opacity duration-700" />

                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 rounded-lg border border-white/[0.1] bg-black/60 backdrop-blur-md text-[10px] font-medium text-slate-300 uppercase tracking-[0.15em]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-5">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-500 truncate">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:bg-primary group-hover:border-primary shrink-0 transition-all duration-500">
                    <ArrowUpRight size={16} className="text-slate-400 group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/[0.05]">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-slate-500 text-xs font-light"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-slate-600 text-xs">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={closeModal}
              className="fixed inset-0 z-[9999] bg-black/97 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-0 z-[10000] flex items-center justify-center p-6 md:p-12"
              onClick={closeModal}
            >
              <div
                className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <motion.button
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ delay: 0.2 }}
                  onClick={closeModal}
                  className="absolute top-0 right-0 z-50 w-11 h-11 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.1] flex items-center justify-center text-white hover:bg-white/[0.12] hover:border-white/[0.2] transition-all duration-300"
                >
                  <X size={18} strokeWidth={1.5} />
                </motion.button>

                {/* Image container */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentImages[currentImageIndex]}
                        alt={`Project image ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Arrows */}
                  <motion.button
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ delay: 0.2 }}
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.1] flex items-center justify-center text-white hover:bg-white/[0.14] transition-all duration-300 z-40"
                  >
                    <ChevronLeft size={20} strokeWidth={1.5} />
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ delay: 0.2 }}
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.1] flex items-center justify-center text-white hover:bg-white/[0.14] transition-all duration-300 z-40"
                  >
                    <ChevronRight size={20} strokeWidth={1.5} />
                  </motion.button>
                </div>

                {/* Dot indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
                >
                  {currentImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i); }}
                      className={`transition-all duration-400 rounded-full ${
                        i === currentImageIndex
                          ? "w-8 h-1.5 bg-primary"
                          : "w-1.5 h-1.5 bg-white/25 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </motion.div>

                {/* Counter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-4 right-4 z-50 px-4 py-1.5 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.1] text-white/60 text-xs font-medium tabular-nums"
                >
                  {currentImageIndex + 1} / {currentImages.length}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
