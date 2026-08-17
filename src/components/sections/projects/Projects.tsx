"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import Panel from "@/components/shared/ui/Panel";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";
import { scaleDownItemVariants } from "@/lib/motion";
import { PROJECTS, type Project } from "@/constants/projects";

const CARD_EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const isOpen = activeIndex !== null;
  const images = activeIndex !== null ? PROJECTS[activeIndex].images : [];

  const close = () => setActiveIndex(null);
  const open = (i: number) => {
    setImageIndex(0);
    setActiveIndex(i);
  };
  const next = () => setImageIndex((p) => (p + 1) % images.length);
  const prev = () => setImageIndex((p) => (p - 1 + images.length) % images.length);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "unset";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, images.length]);

  return (
    <section id="work" className="relative py-14 md:py-24 overflow-hidden bg-background-dark">
      <Container className="relative z-10 mb-10 md:mb-16">
        <RevealContainer className="flex flex-col items-center text-center gap-3 md:gap-4">
          <RevealItem className="flex items-center gap-3 text-xs font-medium tracking-[0.25em] uppercase text-primary/80">
            <span className="w-8 h-px bg-primary/50" />
            Selected Works
          </RevealItem>
          <RevealItem
            variants={scaleDownItemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white origin-bottom"
          >
            Featured <GradientText variant="white">Projects</GradientText>
          </RevealItem>
        </RevealContainer>
      </Container>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={open} />
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <Lightbox
            images={images}
            index={imageIndex}
            onClose={close}
            onNext={next}
            onPrev={prev}
            onJump={setImageIndex}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (i: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -20% 0px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: CARD_EASE }}
    >
      <Panel
        as="article"
        onClick={() => onOpen(index)}
        className="group overflow-hidden cursor-pointer duration-700"
      >
        <div className="relative h-60 w-full bg-[#080810] overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-[#0e0e13] via-transparent to-transparent opacity-70 z-10 group-hover:opacity-40 transition-opacity duration-700" />
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.9, ease: CARD_EASE }}
            className="absolute inset-0"
          >
            <Image src={project.cover} alt={project.title} fill className="object-cover" />
          </motion.div>
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1.5 rounded-lg border border-white/10 bg-black/60 backdrop-blur-md text-[10px] font-medium text-slate-300 uppercase tracking-[0.15em]">
              {project.category}
            </span>
          </div>
        </div>

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
            <div className="w-9 h-9 rounded-xl bg-white/4 border border-white/7 flex items-center justify-center group-hover:bg-primary group-hover:border-primary shrink-0 transition-all duration-500">
              <ArrowUpRight
                size={16}
                className="text-slate-400 group-hover:text-black transition-colors duration-300"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/3 border border-white/7 text-slate-500 text-xs font-light"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 2 && (
              <span className="px-2.5 py-1 rounded-md bg-white/3 border border-white/7 text-slate-600 text-xs">
                +{project.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </Panel>
    </motion.div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onNext,
  onPrev,
  onJump,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onJump: (i: number) => void;
}) {
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
        className="fixed inset-0 z-9999 bg-black/97 backdrop-blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.5, ease: CARD_EASE }}
        className="fixed inset-0 z-10000 flex items-center justify-center p-6 md:p-12"
        onClick={onClose}
      >
        <div
          className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex flex-col"
          onClick={stop}
        >
          <LightboxButton onClick={onClose} className="top-0 right-0" delay={0.2}>
            <X size={18} strokeWidth={1.5} />
          </LightboxButton>

          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: CARD_EASE }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[index]}
                  alt={`Project image ${index + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <LightboxButton
              onClick={(e) => {
                stop(e);
                onPrev();
              }}
              className="left-4 top-1/2 -translate-y-1/2 !w-12 !h-12"
              delay={0.2}
              from="x"
              dir={-1}
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </LightboxButton>

            <LightboxButton
              onClick={(e) => {
                stop(e);
                onNext();
              }}
              className="right-4 top-1/2 -translate-y-1/2 !w-12 !h-12"
              delay={0.2}
              from="x"
              dir={1}
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </LightboxButton>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  stop(e);
                  onJump(i);
                }}
                className={`transition-all duration-400 rounded-full ${
                  i === index
                    ? "w-8 h-1.5 bg-primary"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-4 right-4 z-50 px-4 py-1.5 rounded-full bg-white/7 backdrop-blur-xl border border-white/10 text-white/60 text-xs font-medium tabular-nums"
          >
            {index + 1} / {images.length}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

function LightboxButton({
  children,
  onClick,
  className = "",
  delay = 0,
  from = "y",
  dir = -1,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
  delay?: number;
  from?: "x" | "y";
  dir?: 1 | -1;
}) {
  const offset = 12 * dir;
  const initial = from === "y" ? { opacity: 0, y: offset } : { opacity: 0, x: offset };
  const animate = from === "y" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };

  return (
    <motion.button
      initial={initial}
      animate={animate}
      exit={initial}
      transition={{ delay }}
      onClick={onClick}
      className={`absolute z-50 w-11 h-11 rounded-full bg-white/7 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/12 hover:border-white/20 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
}
