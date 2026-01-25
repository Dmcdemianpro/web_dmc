"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  GitBranch,
  Layers,
  Plug,
  RefreshCw,
  Server,
  Activity,
  Shield,
  FileText,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: GitBranch,
    title: "Levantamiento de Flujos",
    description: "Mapeamos tus procesos actuales, identificamos puntos de integracion y documentamos requerimientos tecnicos y de negocio.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    color: "emerald"
  },
  {
    icon: Layers,
    title: "Diseno de Integracion",
    description: "Definimos la arquitectura de integracion optima: protocolos, transformaciones, validaciones y manejo de errores.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    color: "cyan"
  },
  {
    icon: Plug,
    title: "Desarrollo de Conectores",
    description: "Construimos interfaces especificas para tus sistemas: HIS, RIS, LIS, PACS, ERP, y cualquier aplicacion con capacidad de integracion.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
    color: "blue"
  },
  {
    icon: RefreshCw,
    title: "Normalizacion y Transformacion",
    description: "Convertimos datos entre formatos y estandares. HL7 v2 a FHIR, XML a JSON, y cualquier transformacion que requieras.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&q=80",
    color: "purple"
  },
  {
    icon: Server,
    title: "Implementacion de Motores",
    description: "Instalamos, configuramos y optimizamos Mirth Connect u OIE segun tus necesidades de volumen, redundancia y monitoreo.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    color: "emerald"
  },
  {
    icon: Activity,
    title: "Monitoreo y Trazabilidad",
    description: "Dashboards en tiempo real, alertas proactivas y logs completos para auditoria y troubleshooting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    color: "cyan"
  },
];

const colorClasses = {
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
  }
};

export function SaludServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="servicios" ref={containerRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6"
          >
            <Server className="w-4 h-4" />
            Servicios Especializados
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Nuestros Servicios de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Integracion
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Soluciones completas para conectar tus sistemas de salud con los mas altos estandares de calidad y seguridad
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border ${colors.border} overflow-hidden transition-all duration-500 ${colors.glow}`}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                  {/* Icon Overlay */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={`absolute bottom-4 left-4 w-14 h-14 ${colors.bg} backdrop-blur-sm rounded-xl flex items-center justify-center border ${colors.border}`}
                  >
                    <service.icon className={`w-7 h-7 ${colors.text}`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Animated Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm font-medium"
                  >
                    <span>Saber mas</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            ¿Necesitas una solucion personalizada?
          </p>
          <a
            href="/contacto?tema=salud"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
          >
            Conversemos sobre tu proyecto
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
