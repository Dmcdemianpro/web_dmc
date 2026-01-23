"use client";

import { motion } from "framer-motion";
import { Shirt } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { TEXTIL_SERVICES } from "@/lib/constants";

export function TextilServices() {
  return (
    <Section id="catalogo">
      <SectionHeader
        title="Nuestros Servicios"
        subtitle="Personalizamos todo tipo de prendas con la mejor calidad DTF"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEXTIL_SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image Placeholder */}
            <div className="aspect-square bg-gradient-to-br from-accent-textil/20 to-accent-textil/5 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Shirt className="h-16 w-16 text-accent-textil/30 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
