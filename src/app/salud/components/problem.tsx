"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileX, Shield, Users } from "lucide-react";
import { Section } from "@/components/ui/section";

const problems = [
  { icon: FileX, text: "Errores de transcripción manual" },
  { icon: Clock, text: "Demoras en la atención" },
  { icon: Users, text: "Información duplicada o inconsistente" },
  { icon: Shield, text: "Riesgos de seguridad del paciente" },
  { icon: AlertTriangle, text: "Incumplimiento normativo" },
];

export function SaludProblem() {
  return (
    <Section className="bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            La fragmentación de datos clínicos es costosa
          </h2>
          <p className="text-lg text-muted-foreground">
            Sistemas que no se comunican generan problemas que afectan la operación
            y la calidad de atención.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-card rounded-lg border border-border p-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-error/10 text-error flex items-center justify-center">
                <problem.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{problem.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-lg font-medium text-accent-salud"
        >
          La interoperabilidad no es un lujo, es una necesidad operativa.
        </motion.p>
      </div>
    </Section>
  );
}
