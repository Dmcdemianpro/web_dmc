"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink("general")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
