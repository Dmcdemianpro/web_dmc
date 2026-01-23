"use client";

import { motion } from "framer-motion";
import { Check, Palette, Droplet, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";

const benefits = [
  { icon: Palette, text: "Colores vibrantes y full color" },
  { icon: Droplet, text: "Tacto suave en la prenda" },
  { icon: Sparkles, text: "Excelente durabilidad al lavado" },
  { icon: Check, text: "Funciona en algodón y poliéster" },
];

export function TextilWhatIsDTF() {
  return (
    <Section className="bg-muted/50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Qué es la impresión DTF?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            <strong>DTF (Direct to Film)</strong> es una tecnología de impresión textil
            que permite transferir diseños full color a prácticamente cualquier tela.
          </p>
          <p className="text-muted-foreground mb-6">
            A diferencia del sublimado, funciona en algodón, poliéster y mezclas.
            A diferencia del vinilo, permite degradados, fotos y detalles complejos.
          </p>
          <p className="text-muted-foreground mb-8">
            El resultado: <span className="text-accent-textil font-medium">colores vibrantes,
            tacto suave, excelente durabilidad al lavado</span> y flexibilidad total de diseño.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-textil/10 text-accent-textil flex items-center justify-center">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Comparison Cards */}
          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-3">DTF vs Sublimado</h3>
              <p className="text-sm text-muted-foreground">
                El sublimado solo funciona en poliéster blanco. DTF funciona en
                cualquier color y material, incluyendo algodón 100%.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-3">DTF vs Vinilo</h3>
              <p className="text-sm text-muted-foreground">
                El vinilo es ideal para textos y logos simples. DTF permite fotos,
                degradados y diseños complejos con mejor tacto.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-3">DTF vs Serigrafía</h3>
              <p className="text-sm text-muted-foreground">
                La serigrafía conviene para tirajes grandes del mismo diseño.
                DTF es más flexible y económico para pedidos pequeños o variados.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
