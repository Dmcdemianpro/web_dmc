"use client";

import { motion } from "framer-motion";
import { Check, Palette, Droplet, Sparkles, Zap } from "lucide-react";

const benefits = [
  { icon: Palette, text: "Colores vibrantes full color" },
  { icon: Droplet, text: "Tacto suave en la prenda" },
  { icon: Sparkles, text: "Durabilidad al lavado" },
  { icon: Check, text: "Algodon y poliester" },
];

export function TextilWhatIsDTF() {
  return (
    <section className="theme-textil py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111]" />
      <div className="absolute inset-0 urban-pattern opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ff0040]/30 bg-[#ff0040]/10 text-[#ff0040] text-xs font-medium mb-6">
              <Zap className="w-3 h-3" />
              Tecnologia DTF
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white">
              Que es la <span className="text-gradient-neon">impresion DTF</span>?
            </h2>

            <p className="text-lg text-gray-300 mb-6">
              <strong className="text-white">DTF (Direct to Film)</strong> es una tecnologia de impresion textil
              que permite transferir disenos full color a practicamente cualquier tela.
            </p>

            <p className="text-gray-400 mb-6">
              A diferencia del sublimado, funciona en algodon, poliester y mezclas.
              A diferencia del vinilo, permite degradados, fotos y detalles complejos.
            </p>

            <p className="text-gray-400 mb-8">
              El resultado: <span className="text-[#ff0040] font-semibold">colores vibrantes,
              tacto suave, excelente durabilidad</span> y flexibilidad total de diseno.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#ff0040]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff0040] to-[#ff6600] flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Comparison Cards */}
            <div className="space-y-4">
              {[
                {
                  title: "DTF vs Sublimado",
                  description: "El sublimado solo funciona en poliester blanco. DTF funciona en cualquier color y material, incluyendo algodon 100%.",
                },
                {
                  title: "DTF vs Vinilo",
                  description: "El vinilo es ideal para textos y logos simples. DTF permite fotos, degradados y disenos complejos con mejor tacto.",
                },
                {
                  title: "DTF vs Serigrafia",
                  description: "La serigrafia conviene para tirajes grandes del mismo diseno. DTF es mas flexible y economico para pedidos pequenos.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="card-urban p-6 hover:border-[#ff0040]/50"
                >
                  <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ff0040] to-[#ff6600] flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#ff0040]/20 to-transparent blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
