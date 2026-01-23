import { Hero } from "@/components/home/hero";
import { Benefits } from "@/components/home/benefits";
import { SaludPreview } from "@/components/home/salud-preview";
import { TextilPreview } from "@/components/home/textil-preview";
import { PortfolioPreview } from "@/components/home/portfolio-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <SaludPreview />
      <TextilPreview />
      <PortfolioPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
