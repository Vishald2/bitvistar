import ConnectingDots from "@/components/sections/home/ConnectingDots";
import Hero from "@/components/sections/home/Hero";
import ItForYourBusiness from "@/components/sections/home/ItForYourBusiness";
import Services from "@/components/sections/home/Services";
import ServicesCarousel from "@/components/sections/home/ServicesCarousel";
import Technologies from "@/components/sections/home/Technologies";
import GrowthBanner from "@/components/sections/home/GrowthBanner";

export default function Home() {
  return (
<>
      <Hero />

      <Services />

      <Technologies />

      <ServicesCarousel />

      <ConnectingDots />

      <ItForYourBusiness />

      <GrowthBanner />

    
</>
  );
}