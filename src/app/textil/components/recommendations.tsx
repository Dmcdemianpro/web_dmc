"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const dos = [
  "Resolución mínima 300 DPI",
  "Formato PNG con fondo transparente (ideal) o AI/PSD",
  "Colores en CMYK para mayor fidelidad",
  "Considera el color de la prenda al diseñar",
  "Tamaño máximo de impresión: 30x40 cm aprox.",
];

const donts = [
  "Archivos de baja resolución (se pixelan)",
  "Diseños con líneas muy finas (menos de 1mm)",
  "Esperar que el color sea 100% idéntico a pantalla",
];

export function TextilRecommendations() {
  return (
    <Section>
      <SectionHeader
        title="Recomendaciones de Diseño"
        subtitle="Sigue estas recomendaciones para obtener el mejor resultado posible"
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Do's */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-success/5 rounded-xl border border-success/20 p-6"
        >
          <h3 className="text-lg font-semibold text-success mb-4 flex items-center gap-2">
            <Check className="h-5 w-5" />
            Recomendado
          </h3>
          <ul className="space-y-3">
            {dos.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Don'ts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-error/5 rounded-xl border border-error/20 p-6"
        >
          <h3 className="text-lg font-semibold text-error mb-4 flex items-center gap-2">
            <X className="h-5 w-5" />
            Evitar
          </h3>
          <ul className="space-y-3">
            {donts.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <X className="h-4 w-4 text-error mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8 text-muted-foreground"
      >
        ¿No tienes diseño o necesitas ayuda? Te asesoramos gratis para optimizar tu arte.
      </motion.p>
    </Section>
  );
}
