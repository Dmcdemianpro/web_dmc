"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shirt, Palette, Clock, Truck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: Shirt, label: "Variedad de prendas" },
  { icon: Palette, label: "Full color y degradados" },
  { icon: Clock, label: "Entregas puntuales" },
  { icon: Truck, label: "Envíos a todo Chile" },
];

const products = [
  { name: "Poleras", image: "/images/polera-placeholder.jpg" },
  { name: "Polerones", image: "/images/poleron-placeholder.jpg" },
  { name: "Uniformes", image: "/images/uniforme-placeholder.jpg" },
  { name: "Merchandising", image: "/images/merch-placeholder.jpg" },
];

export function TextilPreview() {
  return (
    <Section className="bg-muted/50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Visual - Left on this section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-accent-textil/20 to-accent-textil/5 border border-accent-textil/20"
                >
                  {/* Placeholder Pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shirt className="h-16 w-16 text-accent-textil/30" />
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-white font-medium text-sm">{product.name}</span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-accent-textil/0 group-hover:bg-accent-textil/10 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-textil/20 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2"
        >
          <Badge variant="textil" className="mb-4">
            Rubro Textil
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Personalización Textil DTF
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Tu marca merece verse increíble en cada prenda. Impresión DTF con colores
            vibrantes, detalles nítidos y durabilidad garantizada. Poleras, polerones,
            uniformes y más.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-textil/10 text-accent-textil">
                  <feature.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="bg-card rounded-xl border border-border p-4 mb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent-textil">50+</div>
                <div className="text-xs text-muted-foreground">Lavados garantizados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-textil">1</div>
                <div className="text-xs text-muted-foreground">Unidad mínima</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-textil">3-5</div>
                <div className="text-xs text-muted-foreground">Días hábiles</div>
              </div>
            </div>
          </div>

          <Button variant="textil" asChild>
            <Link href="/textil">
              Ver catálogo y cotizar
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
