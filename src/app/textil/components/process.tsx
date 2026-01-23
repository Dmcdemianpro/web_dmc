"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { DTF_PROCESS } from "@/lib/constants";

export function TextilProcess() {
  return (
    <Section className="bg-muted/50">
      <SectionHeader
        title="El Proceso DTF"
        subtitle="Así transformamos tu diseño en una prenda personalizada"
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DTF_PROCESS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card rounded-xl border border-border p-6"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent-textil text-white flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>

              <h3 className="font-semibold mb-2 mt-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
