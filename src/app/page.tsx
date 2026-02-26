import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Showroom from "@/components/Showroom";
import Technologies from "@/components/Technologies";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--foreground)] selection:text-[var(--background)]">
      <Hero />
      <Expertise />
      <Showroom />
      <Technologies />
      <Pricing />
      <Contact />
    </main>
  );
}
