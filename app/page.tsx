import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ParallaxBanner from "@/components/sections/ParallaxBanner";
import Services from "@/components/sections/Services";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <Hero />
      
      <ParallaxBanner
        src="/parallax/banner.png"
        headline="Built for businesses that refuse to stand still."
        subline="Microsil · Nairobi · Est. 2013"
      />

      <Services />

    </main>
  );
}
