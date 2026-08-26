import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Hero from "@/components/sections/hero/Hero";
import Impact from "@/components/sections/impact/Impact";
import Lab from "@/components/sections/lab/Lab";
import Process from "@/components/sections/process/Process";
import Projects from "@/components/sections/projects/Projects";
import Services from "@/components/sections/services/Services";
import Showreel from "@/components/sections/showreel/Showreel";
import Showcase from "@/components/sections/showcase/Showcase";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Toolkit from "@/components/sections/toolkit/Toolkit";
import Navbar from "@/components/shared/nav/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-background-dark overflow-x-hidden selection:bg-black/20 dark:bg-white/20 selection:text-slate-900 dark:text-white">
      <Navbar />
      <Hero />
      <Showreel />
      <Showcase />
      <Projects />
      <About />
      <Toolkit />
      <Lab />
      <Process />
      <Services />
      <Impact />
      <Testimonials />
      <Contact />
    </main>
  );
}
