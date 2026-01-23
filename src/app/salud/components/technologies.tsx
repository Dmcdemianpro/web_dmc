"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { SALUD_TECHNOLOGIES } from "@/lib/constants";

const categories = [
  { key: "motors", label: "Motores de Integración" },
  { key: "standards", label: "Estándares de Mensajería" },
  { key: "profiles", label: "Perfiles IHE" },
  { key: "protocols", label: "Protocolos" },
  { key: "databases", label: "Bases de Datos" },
];

export function SaludTechnologies() {
  return (
    <Section className="bg-muted/50" id="tecnologias">
      <SectionHeader
        title="Tecnologías y Estándares que Dominamos"
        subtitle="Experiencia práctica con las herramientas y estándares más usados en la industria"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h3 className="font-semibold text-accent-salud mb-4">{category.label}</h3>
            <ul className="space-y-2">
              {SALUD_TECHNOLOGIES[category.key as keyof typeof SALUD_TECHNOLOGIES].map(
                (tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-salud" />
                    {tech}
                  </li>
                )
              )}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
