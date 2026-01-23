"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function NosotrosCTA() {
  return (
    <Section className="bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar juntos?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte.
        </p>
        <Button size="lg" asChild>
          <Link href="/contacto">
            Conversemos
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      </motion.div>
    </Section>
  );
}
