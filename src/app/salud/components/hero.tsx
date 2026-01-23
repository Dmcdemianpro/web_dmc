"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SaludHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-salud/5 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="salud" className="mb-4">
              Tecnologías en Salud
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
          >
            Interoperabilidad e Integración de{" "}
            <span className="text-accent-salud">Sistemas Clínicos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Conectamos tus sistemas de salud para que la información fluya de forma
            segura, trazable y conforme a estándares internacionales. Desde
            hospitales hasta laboratorios, hacemos que tus datos trabajen juntos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="salud" size="lg" asChild>
              <Link href="/contacto?tema=salud">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar evaluación técnica
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#servicios">
                Ver servicios
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
