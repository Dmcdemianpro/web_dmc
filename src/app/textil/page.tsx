import { Metadata } from "next";
import { TextilHero } from "./components/hero";
import { TextilWhatIsDTF } from "./components/what-is-dtf";
import { TextilServices } from "./components/services";
import { TextilProcess } from "./components/process";
import { TextilRecommendations } from "./components/recommendations";
import { TextilPricing } from "./components/pricing";
import { TextilGallery } from "./components/gallery";
import { TextilFAQ } from "./components/faq";
import { TextilCTA } from "./components/cta";

export const metadata: Metadata = {
  title: "Impresión DTF Profesional - Poleras y Uniformes",
  description:
    "Personalización textil con tecnología DTF. Poleras, polerones, uniformes corporativos. Desde 1 unidad. Santiago, Chile.",
  keywords: [
    "impresión DTF Chile",
    "poleras personalizadas Santiago",
    "uniformes corporativos",
    "polerones personalizados",
    "DTF textil",
    "estampado poleras",
  ],
};

export default function TextilPage() {
  return (
    <>
      <TextilHero />
      <TextilWhatIsDTF />
      <TextilServices />
      <TextilProcess />
      <TextilRecommendations />
      <TextilPricing />
      <TextilGallery />
      <TextilFAQ />
      <TextilCTA />
    </>
  );
}
