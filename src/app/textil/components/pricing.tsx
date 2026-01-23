"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const pricingTiers = [
  { quantity: "1-10", time: "3-5 días hábiles" },
  { quantity: "11-50", time: "5-7 días hábiles" },
  { quantity: "51-100", time: "7-10 días hábiles" },
  { quantity: "100+", time: "Consultar" },
];

const highlights = [
  { label: "Mínimo", value: "1 unidad", description: "Sin mínimos prohibitivos" },
  { label: "Mayorista", value: "Desde 50 u.", description: "Precios especiales" },
  { label: "Durabilidad", value: "50+ lavados", description: "Garantizados" },
];

export function TextilPricing() {
  return (
    <Section className="bg-muted/50">
      <SectionHeader
        title="Volúmenes y Tiempos de Entrega"
        subtitle="Nos adaptamos a tus necesidades, desde pedidos pequeños hasta mayoristas"
      />

      <div className="max-w-4xl mx-auto">
        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl border border-border overflow-hidden mb-8"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-4 text-left font-semibold">Cantidad</th>
                <th className="px-6 py-4 text-left font-semibold">Tiempo estimado*</th>
              </tr>
            </thead>
            <tbody>
              {pricingTiers.map((tier, index) => (
                <tr
                  key={tier.quantity}
                  className={index !== pricingTiers.length - 1 ? "border-b border-border" : ""}
                >
                  <td className="px-6 py-4 font-medium">{tier.quantity}</td>
                  <td className="px-6 py-4 text-muted-foreground">{tier.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="text-sm text-muted-foreground text-center mb-8">
          *Desde aprobación de arte y pago. No incluye despacho.
        </p>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 text-center"
            >
              <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
              <div className="text-2xl font-bold text-accent-textil mb-1">{item.value}</div>
              <div className="text-xs text-muted-foreground">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
