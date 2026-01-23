"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shirt } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export function PortfolioPreview() {
  const previewItems = PORTFOLIO_ITEMS.slice(0, 4);

  return (
    <Section>
      <SectionHeader
        title="Proyectos Destacados"
        subtitle="Algunos de nuestros trabajos recientes en ambas líneas de negocio"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {previewItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image Placeholder */}
            <div className="aspect-[4/3] bg-muted relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {item.type === "salud" ? (
                  <Heart className="h-12 w-12 text-accent-salud/30" />
                ) : (
                  <Shirt className="h-12 w-12 text-accent-textil/30" />
                )}
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  Ver detalles
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <Badge
                variant={item.type === "salud" ? "salud" : "textil"}
                className="mb-2 text-xs"
              >
                {item.type === "salud" ? "Salud" : "Textil"}
              </Badge>
              <h3 className="font-semibold mb-1 group-hover:text-brand transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-3">
                {item.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/portafolio">
            Ver portafolio completo
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
