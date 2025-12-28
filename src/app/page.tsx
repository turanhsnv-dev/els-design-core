// src/app/page.tsx
"use client";

import Navbar from "@/components/shared/nav/Navbar";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Process from "@/components/sections/process/Process";
import Projects from "@/components/sections/projects/Projects";
import Resources from "@/components/sections/resources/Resources";
import Contact from "@/components/sections/contact/Contact";
import Comparison from "@/components/sections/comparison/Comparison";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Services from "@/components/sections/services/Services";
import Playground from "@/components/sections/playground/DesignStudio";
import Toolkit from "@/components/sections/toolkit/Toolkit";
import Showreel from "@/components/sections/showreel/Showreel";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Toolkit /> 
      <Process />
      <Comparison />
      <Projects />
      <Services />
      <Showreel />
      <Playground />
      <Testimonials />
      <Resources />
      <Contact />
    </main>
  );
}