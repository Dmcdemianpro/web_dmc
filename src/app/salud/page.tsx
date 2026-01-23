import { Metadata } from "next";
import { SaludHero } from "./components/hero";
import { SaludProblem } from "./components/problem";
import { SaludServices } from "./components/services";
import { SaludTechnologies } from "./components/technologies";
import { SaludProcess } from "./components/process";
import { SaludFAQ } from "./components/faq";
import { SaludCTA } from "./components/cta";

export const metadata: Metadata = {
  title: "Integración de Sistemas Clínicos",
  description:
    "Conectamos HIS, RIS, LIS y PACS con HL7, FHIR y motores como Mirth Connect. Interoperabilidad para hospitales y clínicas en Chile.",
  keywords: [
    "integración sistemas clínicos",
    "interoperabilidad salud Chile",
    "Mirth Connect",
    "HL7",
    "FHIR",
    "OIE",
    "HIS",
    "RIS",
    "LIS",
    "PACS",
  ],
};

export default function SaludPage() {
  return (
    <>
      <SaludHero />
      <SaludProblem />
      <SaludServices />
      <SaludTechnologies />
      <SaludProcess />
      <SaludFAQ />
      <SaludCTA />
    </>
  );
}
