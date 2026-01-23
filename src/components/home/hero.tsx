"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Shirt, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const routes = [
  {
    title: "Salud",
    subtitle: "Interoperabilidad e Integración",
    description: "Conectamos tus sistemas clínicos HIS, RIS, LIS, PACS con estándares HL7, FHIR y CDA.",
    icon: Heart,
    href: "/salud",
    color: "salud",
    gradient: "from-accent-salud to-accent-salud-dark",
  },
  {
    title: "Textil DTF",
    subtitle: "Personalización de Prendas",
    description: "Poleras, polerones, uniformes y más con impresión DTF de alta calidad.",
    icon: Shirt,
    href: "/textil",
    color: "textil",
    gradient: "from-accent-textil to-accent-textil-dark",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 md:py-32">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            Conectamos sistemas de salud
            <br />
            <span className="text-gradient-brand">e imprimimos tu identidad</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Interoperabilidad clínica + Personalización textil DTF.
            <br className="hidden sm:block" />
            Un equipo, dos especialidades, cero complicaciones.
          </motion.p>
        </div>

        {/* Route Selector Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {routes.map((route, index) => (
            <Link key={route.title} href={route.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl cursor-pointer"
                )}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br",
                    route.gradient
                  )}
                />

                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110",
                    route.color === "salud"
                      ? "bg-accent-salud/10 text-accent-salud"
                      : "bg-accent-textil/10 text-accent-textil"
                  )}
                >
                  <route.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h2 className="text-2xl font-bold mb-2">{route.title}</h2>
                <p
                  className={cn(
                    "text-sm font-medium mb-3",
                    route.color === "salud" ? "text-accent-salud" : "text-accent-textil"
                  )}
                >
                  {route.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  {route.description}
                </p>

                {/* CTA */}
                <div
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3",
                    route.color === "salud" ? "text-accent-salud" : "text-accent-textil"
                  )}
                >
                  Explorar
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
