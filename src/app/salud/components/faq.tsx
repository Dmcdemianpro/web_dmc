"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SALUD_FAQ } from "@/lib/constants";

export function SaludFAQ() {
  return (
    <Section className="bg-muted/50">
      <SectionHeader
        title="Preguntas Frecuentes"
        subtitle="Respuestas a las dudas más comunes sobre nuestros servicios de integración"
      />

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" defaultValue="0">
          {SALUD_FAQ.map((faq, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger value={index.toString()}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent value={index.toString()}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
