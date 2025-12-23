import Navbar from "@/components/shared/nav/Navbar";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
    </main>
  );
}