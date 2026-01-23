"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { SALUD_PROCESS } from "@/lib/constants";

export function SaludProcess() {
  return (
    <Section>
      <SectionHeader
        title="Nuestro Proceso de Trabajo"
        subtitle="Un enfoque estructurado para garantizar el éxito de tu proyecto de integración"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          {SALUD_PROCESS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-6 mb-8 last:mb-0"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent-salud text-white flex items-center justify-center text-xl font-bold z-10">
                {step.step}
              </div>

              {/* Content */}
              <div className="flex-1 bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
