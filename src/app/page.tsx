// src/app/page.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/shared/nav/Navbar";
import Hero from "@/components/sections/hero/Hero";

const About       = dynamic(() => import("@/components/sections/about/About"));
const Toolkit     = dynamic(() => import("@/components/sections/toolkit/Toolkit"));
const Process     = dynamic(() => import("@/components/sections/process/Process"));
const Projects    = dynamic(() => import("@/components/sections/projects/Projects"));
const Services    = dynamic(() => import("@/components/sections/services/Services"));
const Showreel    = dynamic(() => import("@/components/sections/showreel/Showreel"));
const Impact      = dynamic(() => import("@/components/sections/impact/Impact"));
const Testimonials = dynamic(() => import("@/components/sections/testimonials/Testimonials"));
const Contact     = dynamic(() => import("@/components/sections/contact/Contact"));

function LazySection({
  children,
  minHeight = "600px",
}: {
  children: React.ReactNode;
  minHeight?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "150px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!show) {
    return <div ref={ref} style={{ minHeight }} aria-hidden />;
  }

  return <div ref={ref}>{children}</div>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <LazySection minHeight="1800px"><About /></LazySection>
      <LazySection minHeight="900px"><Toolkit /></LazySection>
      <LazySection minHeight="700px"><Process /></LazySection>
      <LazySection minHeight="900px"><Projects /></LazySection>
      <LazySection minHeight="800px"><Services /></LazySection>
      <LazySection minHeight="600px"><Showreel /></LazySection>
      <LazySection minHeight="900px"><Impact /></LazySection>
      <LazySection minHeight="800px"><Testimonials /></LazySection>
      <LazySection minHeight="900px"><Contact /></LazySection>
    </main>
  );
}
