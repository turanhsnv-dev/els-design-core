import Navbar from "@/components/shared/nav/Navbar";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Process from "@/components/sections/process/Process";
import Projects from "@/components/sections/projects/Projects";
import Resources from "@/components/sections/resources/Resources";
import Contact from "@/components/sections/contact/Contact"; // <--- Final Hissə

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Projects />
      <Resources />
      <Contact /> {/* <--- Burada */}
    </main>
  );
}