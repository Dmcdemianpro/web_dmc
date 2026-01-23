"use client";

import { motion } from "framer-motion";
import { Award, Zap, Target, Headphones } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const benefits = [
  {
    icon: Award,
    title: "Expertise Comprobado",
    description: "Años de experiencia en cada línea de negocio, no somos improvisados.",
  },
  {
    icon: Zap,
    title: "Flexibilidad Total",
    description: "Desde un proyecto puntual hasta soporte continuo. Desde 1 prenda hasta miles.",
  },
  {
    icon: Target,
    title: "Compromiso Real",
    description: "Plazos claros, comunicación constante, resultados medibles.",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    description: "No desaparecemos después de entregar. Estamos cuando nos necesitas.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Benefits() {
  return (
    <Section className="bg-muted/50">
      <SectionHeader
        title="¿Por qué elegir DMC Projects?"
        subtitle="Un socio estratégico para dos mundos que exigen precisión y confiabilidad"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.title}
            variants={item}
            className="group relative bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
              <benefit.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-sm text-muted-foreground">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
