import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Hero from "@/components/sections/hero/Hero";
import Impact from "@/components/sections/impact/Impact";
import Process from "@/components/sections/process/Process";
import Projects from "@/components/sections/projects/Projects";
import Services from "@/components/sections/services/Services";
import Showreel from "@/components/sections/showreel/Showreel";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Toolkit from "@/components/sections/toolkit/Toolkit";
import Navbar from "@/components/shared/nav/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark overflow-x-hidden selection:bg-white/20 selection:text-white">
      <Navbar />
      <Hero />
      <Showreel />
      <Projects />
      <About />
      <Toolkit />
      <Process />
      <Services />
      <Impact />
      <Testimonials />
      <Contact />
    </main>
  );
}
