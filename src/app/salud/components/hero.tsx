"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ArrowRight, Cpu, Database, Network, Shield, Zap, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

// Floating tech icons
const floatingIcons = [
  { Icon: Cpu, delay: 0, x: "10%", y: "20%" },
  { Icon: Database, delay: 0.5, x: "85%", y: "15%" },
  { Icon: Network, delay: 1, x: "75%", y: "70%" },
  { Icon: Shield, delay: 1.5, x: "15%", y: "75%" },
  { Icon: Server, delay: 2, x: "90%", y: "45%" },
  { Icon: Zap, delay: 2.5, x: "5%", y: "50%" },
];

// Network connection lines data
const connections = [
  { x1: 20, y1: 30, x2: 50, y2: 20 },
  { x1: 50, y1: 20, x2: 80, y2: 35 },
  { x1: 80, y1: 35, x2: 70, y2: 70 },
  { x1: 70, y1: 70, x2: 30, y2: 75 },
  { x1: 30, y1: 75, x2: 20, y2: 30 },
  { x1: 50, y1: 20, x2: 50, y2: 50 },
  { x1: 50, y1: 50, x2: 30, y2: 75 },
  { x1: 50, y1: 50, x2: 70, y2: 70 },
];

export function SaludHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-20 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Animated Background Image */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&q=80"
            alt="Healthcare Technology"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-emerald-900/80" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98112_1px,transparent_1px),linear-gradient(to_bottom,#10b98112_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Animated Network Lines SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        {connections.map((line, i) => (
          <motion.line
            key={i}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="url(#gradient-line)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
          />
        ))}
        {/* Data flow particles along lines */}
        {connections.map((line, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="3"
            fill="#10b981"
            initial={{
              cx: `${line.x1}%`,
              cy: `${line.y1}%`,
              opacity: 0
            }}
            animate={{
              cx: [`${line.x1}%`, `${line.x2}%`],
              cy: [`${line.y1}%`, `${line.y2}%`],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full" />
            <div className="relative p-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
              <Icon className="w-8 h-8 text-emerald-400" />
            </div>
          </div>
        </motion.div>
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Main Content */}
      <motion.div style={{ opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 backdrop-blur-sm px-4 py-2">
                <Cpu className="w-4 h-4 mr-2" />
                Tecnologias en Salud Digital
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              Interoperabilidad e Integracion de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Sistemas Clinicos
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-300 mb-8 leading-relaxed"
            >
              Conectamos tus sistemas de salud para que la informacion fluya de forma
              segura, trazable y conforme a estandares internacionales. Desde
              hospitales hasta laboratorios, hacemos que tus datos trabajen juntos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contacto?tema=salud"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Agendar evaluacion tecnica
              </Link>
              <Link
                href="#servicios"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-500/50 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-400"
              >
                Ver servicios
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { number: "+50", label: "Integraciones" },
                { number: "+10", label: "Anos experiencia" },
                { number: "99.9%", label: "Uptime" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - 3D Tech Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image with Glow */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-3xl blur-2xl" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-emerald-500/30 p-8 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80"
                    alt="Healthcare Integration"
                    className="rounded-2xl w-full"
                  />

                  {/* Overlay Cards */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute -left-8 top-1/4 bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                        <Database className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">HL7 FHIR</div>
                        <div className="text-xs text-emerald-400">Conectado</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                    className="absolute -right-8 top-1/2 bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <Server className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Mirth Connect</div>
                        <div className="text-xs text-cyan-400">Activo</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    className="absolute -bottom-6 left-1/4 bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium">Seguridad</div>
                        <div className="text-xs text-blue-400">Encriptado E2E</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm">Scroll para explorar</span>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
