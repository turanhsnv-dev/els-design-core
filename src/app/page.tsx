import Navbar from "@/components/shared/nav/Navbar";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Projects from "@/components/sections/projects/Projects"; // <--- Yeni
import Resources from "@/components/sections/resources/Resources";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects /> {/* <--- Burada çağır */}
      <Resources />
    </main>
  );
}