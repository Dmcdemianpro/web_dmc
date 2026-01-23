"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/utils";

export function TextilCTA() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-textil to-accent-textil-dark p-8 md:p-12 text-white text-center"
      >
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para personalizar?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Cuéntanos qué necesitas y te enviamos una cotización en menos de 24 horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-accent-textil hover:bg-white/90"
              asChild
            >
              <a
                href={getWhatsAppLink("textilCotizar")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contacto?tema=textil">
                <FileText className="h-5 w-5 mr-2" />
                Completar formulario
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
