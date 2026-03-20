import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TransformSection } from "@/components/TransformSection";
import { AbilitiesSection } from "@/components/AbilitiesSection";
import { StatsSection } from "@/components/StatsSection";
import { InteractiveFun } from "@/components/InteractiveFun";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Texture Overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/space-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <Navbar />
      <HeroSection />
      <TransformSection />
      <AbilitiesSection />
      <StatsSection />
      <InteractiveFun />
      <Footer />
    </main>
  );
}
