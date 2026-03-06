// src/app/page.tsx
"use client";

import Navbar from "@/components/shared/nav/Navbar";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Toolkit from "@/components/sections/toolkit/Toolkit";
import Process from "@/components/sections/process/Process";
import Projects from "@/components/sections/projects/Projects";
import Services from "@/components/sections/services/Services";
import Showreel from "@/components/sections/showreel/Showreel";
import Impact from "@/components/sections/impact/Impact";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Motivation from "@/components/sections/motivation/Motivation";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Toolkit />
      <Process />
      <Projects />
      <Services />
      <Showreel />
      <Impact />
      <Testimonials />
      <Motivation />
      <Contact />
    </main>
  );
}
