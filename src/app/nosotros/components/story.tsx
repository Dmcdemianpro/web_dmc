"use client";

import { motion } from "framer-motion";
import { Heart, Shirt } from "lucide-react";
import { Section } from "@/components/ui/section";

export function NosotrosStory() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>

          <div className="prose prose-lg text-muted-foreground">
            <p>
              DMC Projects nació de la convicción de que se puede ser especialista
              sin ser inflexible. Comenzamos en el mundo de la interoperabilidad
              en salud, resolviendo el caos de sistemas que no se comunican.
            </p>
            <p>
              Paralelamente, la pasión por la personalización textil se convirtió
              en una segunda línea de negocio. Dos mundos aparentemente distintos,
              pero unidos por los mismos valores: precisión técnica, atención al
              detalle y compromiso con el resultado.
            </p>
            <p>
              Hoy, DMC Projects opera ambas líneas con el mismo rigor: entender el
              problema, diseñar la solución correcta, ejecutar con calidad y dar
              soporte real.
            </p>
          </div>

          {/* Visual Representation */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-accent-salud/5 rounded-xl border border-accent-salud/20 p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-accent-salud/10 flex items-center justify-center">
                <Heart className="h-7 w-7 text-accent-salud" />
              </div>
              <div>
                <h3 className="font-semibold text-accent-salud">Tecnologías en Salud</h3>
                <p className="text-sm text-muted-foreground">
                  Interoperabilidad e integración de sistemas clínicos
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-accent-textil/5 rounded-xl border border-accent-textil/20 p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-accent-textil/10 flex items-center justify-center">
                <Shirt className="h-7 w-7 text-accent-textil" />
              </div>
              <div>
                <h3 className="font-semibold text-accent-textil">Rubro Textil</h3>
                <p className="text-sm text-muted-foreground">
                  Personalización de prendas con impresión DTF
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
