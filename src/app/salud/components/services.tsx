"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Layers,
  Plug,
  RefreshCw,
  Server,
  Activity,
  Shield,
  FileText,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { SALUD_SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitBranch,
  Layers,
  Plug,
  RefreshCw,
  Server,
  Activity,
  Shield,
  FileText,
};

export function SaludServices() {
  return (
    <Section id="servicios">
      <SectionHeader
        title="Nuestros Servicios de Integración"
        subtitle="Soluciones completas para conectar tus sistemas de salud"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SALUD_SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon] || Server;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-accent-salud/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-salud/10 text-accent-salud flex items-center justify-center mb-4 group-hover:bg-accent-salud group-hover:text-white transition-colors duration-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
