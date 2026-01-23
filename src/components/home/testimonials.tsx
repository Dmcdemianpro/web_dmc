"use client";

import { motion } from "framer-motion";
import { Quote, Heart, Shirt } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <Section className="bg-muted/50">
      <SectionHeader
        title="Lo que dicen nuestros clientes"
        subtitle="La satisfacción de quienes confían en nosotros es nuestra mejor carta de presentación"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow duration-300"
          >
            {/* Quote Icon */}
            <Quote
              className={cn(
                "h-8 w-8 mb-4",
                testimonial.type === "salud"
                  ? "text-accent-salud/30"
                  : "text-accent-textil/30"
              )}
            />

            {/* Quote Text */}
            <p className="text-foreground mb-6 leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              {/* Avatar Placeholder */}
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center",
                  testimonial.type === "salud"
                    ? "bg-accent-salud/10"
                    : "bg-accent-textil/10"
                )}
              >
                {testimonial.type === "salud" ? (
                  <Heart className="h-5 w-5 text-accent-salud" />
                ) : (
                  <Shirt className="h-5 w-5 text-accent-textil" />
                )}
              </div>

              <div>
                <p className="font-semibold text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>

              {/* Type Badge */}
              <div
                className={cn(
                  "ml-auto text-xs font-medium px-2 py-1 rounded-full",
                  testimonial.type === "salud"
                    ? "bg-accent-salud/10 text-accent-salud"
                    : "bg-accent-textil/10 text-accent-textil"
                )}
              >
                {testimonial.type === "salud" ? "Salud" : "Textil"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
