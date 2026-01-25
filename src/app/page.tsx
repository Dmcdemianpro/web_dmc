"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Shirt, ArrowRight, Building2 } from "lucide-react";
import { useContent } from "@/context/ContentContext";

export default function WelcomePage() {
  const { content } = useContent();
  const { welcome } = content;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${welcome.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-accent-salud/10 animate-pulse-subtle" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl min-h-screen flex flex-col justify-center py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Logo/Company */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand to-brand-dark mb-6"
          >
            <Building2 className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            {welcome.title}
          </h1>
          <p className="text-xl sm:text-2xl text-brand font-semibold mb-4">
            {welcome.subtitle}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {welcome.description}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
          {/* Salud Digital Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/salud" className="block group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-accent-salud/50 hover:shadow-2xl hover:shadow-accent-salud/20 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${welcome.saludCard.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-accent-salud/90 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-accent-salud transition-colors">
                    {welcome.saludCard.title}
                  </h2>
                  <p className="text-accent-salud font-medium mb-4">
                    {welcome.saludCard.subtitle}
                  </p>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {welcome.saludCard.description}
                  </p>

                  {/* Button */}
                  <div className="flex items-center gap-2 text-accent-salud font-semibold group-hover:gap-4 transition-all">
                    {welcome.saludCard.buttonText}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-salud/5 to-transparent" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Textil Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/textil" className="block group">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-[#ff0040]/50 hover:shadow-2xl hover:shadow-[#ff0040]/20 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${welcome.textilCard.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff0040] to-[#ff6600] flex items-center justify-center">
                    <Shirt className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#ff0040] transition-colors">
                    {welcome.textilCard.title}
                  </h2>
                  <p className="text-[#ff0040] font-medium mb-4">
                    {welcome.textilCard.subtitle}
                  </p>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {welcome.textilCard.description}
                  </p>

                  {/* Button */}
                  <div className="flex items-center gap-2 text-[#ff0040] font-semibold group-hover:gap-4 transition-all">
                    {welcome.textilCard.buttonText}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff0040]/5 to-transparent" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            {content.siteName} &copy; {new Date().getFullYear()} | {content.contact.email}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
