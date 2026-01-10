// src/components/sections/projects/Projects.tsx
"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Nova Bank",
    category: "Fintech",
    description: "Mobile Banking Redesign",
    tags: ["UX Research", "UI Design", "Prototyping"],
    image: "/project-images/Desktop - 2.png",
    color: "group-hover:text-blue-400",
    glow: "to-blue-500/5"
  },
  {
    id: 2,
    title: "Ether Float",
    category: "Web3",
    description: "NFT Marketplace",
    tags: ["3D Modeling", "Visual Design", "Motion"],
    image: "/abb-images/kart.png",
    color: "group-hover:text-purple-400",
    glow: "to-purple-500/5"
  },
  {
    id: 3,
    title: "Luxe & Co.",
    category: "E-Commerce",
    description: "Fashion Storefront",
    tags: ["Strategy", "Development", "Branding"],
    image: "/porsche-images/porsche 3.png",
    color: "group-hover:text-pink-400",
    glow: "to-pink-500/5"
  },
  {
    id: 4,
    title: "Vortex Data",
    category: "Analytics",
    description: "SaaS Analytics Platform",
    tags: ["Data Viz", "Design System"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    color: "group-hover:text-cyan-400",
    glow: "to-cyan-500/5"
  },
  {
    id: 5,
    title: "CloudSync Pro",
    category: "SaaS",
    description: "Cloud Storage Dashboard",
    tags: ["UI Design", "Dashboard", "Wireframing"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
    color: "group-hover:text-emerald-400",
    glow: "to-emerald-500/5"
  },
  {
    id: 6,
    title: "StreamFlow",
    category: "Entertainment",
    description: "Video Streaming Platform",
    tags: ["UI/UX", "Prototyping", "Motion Design"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    color: "group-hover:text-orange-400",
    glow: "to-orange-500/5"
  }
];

const PROJECT_IMAGES = [
  "/project-images/Desktop - 2.png",
  "/project-images/Desktop - 3.png",
  "/project-images/Desktop - 4.png",
  "/project-images/Desktop - 11.png"
];

const ABB_IMAGES = [
  "/abb-images/kart.png",
  "/abb-images/haqqımızda.png",
  "/abb-images/ipoteka.png",
  "/abb-images/kartlar.png",
  "/abb-images/kreditlər.png",
  "/abb-images/nömrə.png"
];

const PORSCHE_IMAGES = [
  "/porsche-images/porsche 1.png",
  "/porsche-images/porsche 2.png",
  "/porsche-images/porsche 3.png"
];

const VORTEX_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000"
];

const CLOUDSYNC_IMAGES = [
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
];

const STREAMFLOW_IMAGES = [
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'project1' | 'project2' | 'project3' | 'project4' | 'project5' | 'project6' | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImages = 
    modalType === 'project1' ? PROJECT_IMAGES : 
    modalType === 'project2' ? ABB_IMAGES : 
    modalType === 'project3' ? PORSCHE_IMAGES :
    modalType === 'project4' ? VORTEX_IMAGES :
    modalType === 'project5' ? CLOUDSYNC_IMAGES :
    modalType === 'project6' ? STREAMFLOW_IMAGES : [];

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        setModalType(null);
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, currentImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const handleFirstCardClick = () => {
    setCurrentImageIndex(0);
    setModalType('project1');
    setIsModalOpen(true);
  };

  const handleSecondCardClick = () => {
    setCurrentImageIndex(0);
    setModalType('project2');
    setIsModalOpen(true);
  };

  const handleThirdCardClick = () => {
    setCurrentImageIndex(0);
    setModalType('project3');
    setIsModalOpen(true);
  };

  const handleFourthCardClick = () => {
    setCurrentImageIndex(0);
    setModalType('project4');
    setIsModalOpen(true);
  };

  const handleFifthCardClick = () => {
    setCurrentImageIndex(0);
    setModalType('project5');
    setIsModalOpen(true);
  };

  const handleSixthCardClick = () => {
    setCurrentImageIndex(0);
    setModalType('project6');
    setIsModalOpen(true);
  };

  return (
    <section id="work" className="relative py-20 overflow-hidden bg-background-dark">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-col items-center text-center gap-4">
            <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">
                <span className="w-8 h-px bg-primary"></span>
                Selected Works
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">Projects</span>
            </h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              onClick={
                index === 0 ? handleFirstCardClick : 
                index === 1 ? handleSecondCardClick : 
                index === 2 ? handleThirdCardClick :
                index === 3 ? handleFourthCardClick :
                index === 4 ? handleFifthCardClick :
                index === 5 ? handleSixthCardClick :
                undefined
              }
              className="group relative rounded-2xl border border-white/10 bg-[#151621]/60 backdrop-blur-xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(100,103,242,0.3)]"
            >
              {/* Image Area - Daha küçük */}
              <div className="relative h-[240px] w-full bg-slate-900 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent opacity-60 z-10"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Category Badge - Daha küçük ve şık */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute top-4 left-4 z-20"
                >
                  <span className="px-3 py-1.5 rounded-lg border border-white/20 bg-black/70 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider">
                    {project.category}
                  </span>
                </motion.div>

                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-t ${project.glow} opacity-0 group-hover:opacity-100 z-10`}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content Area - Kompakt */}
              <div className="relative p-5 bg-[#151621]/80 backdrop-blur-xl">
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <motion.h3
                      className={`text-xl font-bold text-white mb-1.5 transition-colors ${project.color} truncate`}
                      whileHover={{ x: 2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary shrink-0"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowUpRight size={18} className="text-white" />
                  </motion.div>
                </div>

                {/* Tags - Daha kompakt */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400 text-xs font-medium hover:bg-white/10 hover:border-primary/30 transition-all"
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400 text-xs font-medium">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-b from-transparent ${project.glow} opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl`}
                transition={{ duration: 0.4 }}
              />
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modern Gallery Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setIsModalOpen(false);
                setModalType(null);
              }}
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-0 z-[10000] flex items-center justify-center p-8 md:p-12"
              onClick={() => {
                setIsModalOpen(false);
                setModalType(null);
              }}
            >
              {/* Modal Content */}
              <div
                className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => {
                    setIsModalOpen(false);
                    setModalType(null);
                  }}
                  className="absolute top-0 right-0 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-primary/50 transition-all duration-300 group"
                >
                  <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                </motion.button>

                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
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

                  {/* Navigation Arrows */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-primary/50 transition-all duration-300 group z-40"
                  >
                    <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-primary/50 transition-all duration-300 group z-40"
                  >
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Dots Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-3"
                >
                  {currentImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImageIndex
                          ? "w-12 h-2 bg-primary shadow-lg shadow-primary/50"
                          : "w-2 h-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </motion.div>

                {/* Image Counter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-4 right-4 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-sm font-medium"
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