"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { TEXTIL_FAQ } from "@/lib/constants";

export function TextilFAQ() {
  return (
    <Section className="bg-muted/50">
      <SectionHeader
        title="Preguntas Frecuentes"
        subtitle="Respuestas a las dudas más comunes sobre impresión DTF"
      />

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" defaultValue="0">
          {TEXTIL_FAQ.map((faq, index) => (
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
