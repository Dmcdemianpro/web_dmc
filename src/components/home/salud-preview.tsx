"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Server, GitBranch, Shield, Activity } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: Server, label: "Mirth Connect & OIE" },
  { icon: GitBranch, label: "HL7 v2 & FHIR R4" },
  { icon: Shield, label: "Seguridad & Trazabilidad" },
  { icon: Activity, label: "Monitoreo 24/7" },
];

const technologies = ["HL7 v2.x", "FHIR R4", "CDA", "IHE", "Mirth Connect", "OIE"];

export function SaludPreview() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="salud" className="mb-4">
            Tecnologías en Salud
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Interoperabilidad en Salud
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Tus sistemas clínicos deberían comunicarse sin fricciones. HIS, RIS, LIS,
            PACS... los conectamos usando estándares como HL7, FHIR y CDA.
            Implementamos y mantenemos motores de integración como Mirth Connect y OIE.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-salud/10 text-accent-salud">
                  <feature.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <Button variant="salud" asChild>
            <Link href="/salud">
              Conocer servicios de integración
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent-salud/20 to-accent-salud/5 p-8 border border-accent-salud/20">
            {/* Integration Diagram */}
            <div className="space-y-4">
              {/* Systems */}
              <div className="grid grid-cols-2 gap-4">
                {["HIS", "RIS", "LIS", "PACS"].map((system, i) => (
                  <motion.div
                    key={system}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-card rounded-lg p-4 text-center border border-border shadow-sm"
                  >
                    <span className="text-sm font-semibold text-accent-salud">{system}</span>
                  </motion.div>
                ))}
              </div>

              {/* Connection Lines */}
              <div className="flex justify-center py-4">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="w-px h-8 bg-accent-salud/50"
                />
              </div>

              {/* Integration Engine */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-accent-salud text-white rounded-xl p-6 text-center"
              >
                <Server className="h-8 w-8 mx-auto mb-2" />
                <span className="font-semibold">Motor de Integración</span>
                <p className="text-xs text-white/80 mt-1">Mirth Connect / OIE</p>
              </motion.div>

              {/* Output */}
              <div className="flex justify-center py-4">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="w-px h-8 bg-accent-salud/50"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-2 text-center"
              >
                {["HL7", "FHIR", "CDA"].map((format) => (
                  <div key={format} className="bg-card rounded-lg py-2 px-3 border border-border text-xs font-medium">
                    {format}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-salud/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </Section>
  );
}
