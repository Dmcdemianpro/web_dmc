import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "56942287787";

export const WHATSAPP_MESSAGES = {
  salud: encodeURIComponent(
    "Hola, me interesa conversar sobre integración de sistemas clínicos. Trabajo en [INSTITUCIÓN] y necesitamos [DESCRIBIR NECESIDAD BREVEMENTE]."
  ),
  textilCotizar: encodeURIComponent(
    "Hola, quiero cotizar impresión DTF. Necesito aproximadamente [CANTIDAD] [TIPO DE PRENDA] con [DESCRIBIR DISEÑO]. ¿Me pueden enviar precios?"
  ),
  textilConsulta: encodeURIComponent(
    "Hola, tengo algunas preguntas sobre impresión DTF antes de cotizar. ¿Tienen un momento para conversar?"
  ),
  general: encodeURIComponent(
    "Hola, me gustaría conocer más sobre los servicios de DMC Projects."
  ),
};

export function getWhatsAppLink(message: keyof typeof WHATSAPP_MESSAGES = "general") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGES[message]}`;
}

export const CONTACT_INFO = {
  phone: "+56 9 4228 7787",
  email: "contacto@dmcprojects.cl",
  address: "Santiago, Chile",
  schedule: "Lunes a Viernes, 9:00 - 18:00",
  instagram: "https://instagram.com/dmcprojects",
  linkedin: "https://linkedin.com/company/dmcprojects",
};
