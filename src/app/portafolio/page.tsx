import { Metadata } from "next";
import { PortfolioContent } from "./components/portfolio-content";

export const metadata: Metadata = {
  title: "Portafolio - Casos de Éxito y Trabajos",
  description:
    "Proyectos de integración en salud y trabajos de impresión DTF. Conoce lo que hemos logrado para nuestros clientes.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
