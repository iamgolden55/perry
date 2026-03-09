import Hero from "@/components/home/Hero";
import Marquee from "@/components/shared/Marquee";
import WhoWeAre from "@/components/home/WhoWeAre";
import FeaturedWork from "@/components/home/FeaturedWork";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Direction from "@/components/home/Direction";
import Testimonials from "@/components/home/Testimonials";
import Journal from "@/components/home/Journal";
import CTA from "@/components/shared/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee speed="slow" />
      <WhoWeAre />
      <FeaturedWork />
      <Marquee
        items={["PORTRAITS", "Editorial", "FASHION", "Atmosphere", "STUDIO", "Creative Direction"]}
        speed="normal"
        variant="light"
        accent={[1, 3, 5]}
      />
      <Services />
      <Direction />
      <Stats />
      <Testimonials />
      <Journal />
      <CTA />
    </>
  );
}
