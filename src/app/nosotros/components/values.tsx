"use client";

import { motion } from "framer-motion";
import { Eye, Target, Award, Repeat } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const values = [
  {
    icon: Eye,
    title: "Claridad",
    description: "Explicamos lo que hacemos sin jerga innecesaria. Comunicación directa y transparente.",
  },
  {
    icon: Target,
    title: "Compromiso",
    description: "Si dijimos que se puede, se puede. Cumplimos con lo acordado.",
  },
  {
    icon: Award,
    title: "Calidad",
    description: "No entregamos algo que no nos enorgullezca. Cada detalle importa.",
  },
  {
    icon: Repeat,
    title: "Flexibilidad",
    description: "Nos adaptamos a tu contexto, no al revés. Soluciones a medida.",
  },
];

export function NosotrosValues() {
  return (
    <Section className="bg-muted/50">
      <SectionHeader
        title="Nuestros Valores"
        subtitle="Los principios que guían nuestro trabajo día a día"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-4">
              <value.icon className="h-7 w-7" />
            </div>
            <h3 className="font-semibold mb-2">{value.title}</h3>
            <p className="text-sm text-muted-foreground">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
