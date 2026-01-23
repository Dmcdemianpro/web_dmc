"use client";

import { motion } from "framer-motion";
import { Ear, Lightbulb, Rocket, Medal, HeartHandshake } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  { icon: Ear, title: "Escuchamos primero", description: "Entendemos tu contexto antes de proponer" },
  { icon: Lightbulb, title: "Proponemos con claridad", description: "Soluciones claras y bien explicadas" },
  { icon: Rocket, title: "Ejecutamos con responsabilidad", description: "Cumplimos plazos y compromisos" },
  { icon: Medal, title: "Entregamos con orgullo", description: "Calidad que nos representa" },
  { icon: HeartHandshake, title: "Seguimos disponibles", description: "Soporte post-entrega real" },
];

export function NosotrosProcess() {
  return (
    <Section>
      <SectionHeader
        title="Cómo Trabajamos"
        subtitle="Ya sea un proyecto de integración de 6 meses o un pedido de 20 poleras, nuestro enfoque es el mismo"
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 bg-card rounded-full border border-border px-5 py-3 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <span className="font-medium text-sm">{step.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
