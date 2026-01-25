"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles, Shirt, Palette, Star, Zap } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";
import { useRef } from "react";

export function TextilHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="theme-textil relative min-h-screen flex items-center overflow-hidden">
      {/* Video/Image Background with Parallax */}
      <motion.div style={{ scale }} className="absolute inset-0 -z-20">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1920&q=80"
            alt="Urban Streetwear Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        {/* Additional color tint */}
        <div className="absolute inset-0 bg-[#ff0040]/5 mix-blend-overlay" />
      </motion.div>

      {/* Urban Pattern Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 urban-pattern opacity-40" />
        {/* Animated Scan Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
      </div>

      {/* Animated Neon Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <motion.line
          x1="0%"
          y1="30%"
          x2="40%"
          y2="30%"
          stroke="url(#neon-gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.line
          x1="60%"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="url(#neon-gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0040" />
            <stop offset="100%" stopColor="#ff6600" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Orbs with Glow */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#ff0040]/20 blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-[#ff6600]/20 blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Main Content */}
      <motion.div style={{ opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge with Pulse */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#ff0040]/50 bg-black/50 backdrop-blur-sm text-[#ff0040] text-sm font-bold">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.span>
              Impresion DTF Premium
            </span>
          </motion.div>

          {/* Animated Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none"
          >
            <motion.span
              className="block text-white"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,0,64,0)",
                  "0 0 40px rgba(255,0,64,0.5)",
                  "0 0 20px rgba(255,0,64,0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              PERSONALIZA
            </motion.span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff0040] via-[#ff6600] to-[#ff0040] bg-[length:200%_auto] animate-gradient">
              TU ESTILO
            </span>
          </motion.h1>

          {/* Description with Highlight */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-xl sm:text-2xl text-gray-300 max-w-2xl leading-relaxed"
          >
            Tu diseno, impreso con tecnologia de ultima generacion.
            <span className="block mt-2">
              <span className="text-white font-bold">Poleras, polerones, uniformes</span> y todo lo que imagines.
            </span>
            <span className="inline-flex items-center gap-2 mt-3 text-[#ff0040] font-bold">
              <Zap className="w-5 h-5" />
              Desde 1 unidad, sin minimos
            </span>
          </motion.p>

          {/* Interactive Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {[
              { value: "50+", label: "Lavados garantizados", icon: Shirt },
              { value: "24h", label: "Entregas express", icon: Zap },
              { value: "100%", label: "Full color vibrante", icon: Palette },
              { value: "5★", label: "Calificacion clientes", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 cursor-pointer hover:border-[#ff0040]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff0040]/0 to-[#ff6600]/0 group-hover:from-[#ff0040]/10 group-hover:to-[#ff6600]/10 rounded-xl transition-all duration-300" />
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff0040] to-[#ff6600] flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff0040] to-[#ff6600]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href={getWhatsAppLink("textilCotizar")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 overflow-hidden rounded-xl font-bold text-lg text-white transition-all duration-300"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff0040] to-[#ff6600]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6600] to-[#ff0040] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
              </div>
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff0040] to-[#ff6600] rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />

              <span className="relative flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Cotizar por WhatsApp
              </span>
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#catalogo"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-white/20 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:border-[#ff0040] hover:bg-[#ff0040]/10 backdrop-blur-sm"
              >
                Ver Catalogo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-sm font-medium">Desliza para explorar</span>
          <div className="w-7 h-12 rounded-full border-2 border-[#ff0040]/50 flex items-start justify-center p-2 bg-black/30 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-3 bg-gradient-to-b from-[#ff0040] to-[#ff6600] rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#ff0040]/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#ff6600]/30" />
    </section>
  );
}
