"use client";

import { motion } from "framer-motion";
import { Shirt } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

// Placeholder gallery items
const galleryItems = [
  { id: 1, title: "Poleras Corporativas", category: "Poleras" },
  { id: 2, title: "Polerones Equipo Tech", category: "Polerones" },
  { id: 3, title: "Uniformes Restaurant", category: "Uniformes" },
  { id: 4, title: "Merchandising Evento", category: "Merchandising" },
  { id: 5, title: "Poleras Banda", category: "Poleras" },
  { id: 6, title: "Uniformes Escolares", category: "Uniformes" },
];

export function TextilGallery() {
  return (
    <Section>
      <SectionHeader
        title="Galería de Trabajos"
        subtitle="Algunos de nuestros trabajos más recientes en impresión DTF"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group aspect-square bg-gradient-to-br from-accent-textil/20 to-accent-textil/5 rounded-xl border border-border overflow-hidden relative cursor-pointer"
          >
            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Shirt className="h-12 w-12 text-accent-textil/30" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
              <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-white/70 text-sm">{item.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
