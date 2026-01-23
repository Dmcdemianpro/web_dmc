import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { CONTACT_INFO, getWhatsAppLink } from "@/lib/utils";

const footerLinks = {
  salud: {
    title: "Salud",
    links: [
      { label: "Interoperabilidad", href: "/salud" },
      { label: "Mirth Connect", href: "/salud#servicios" },
      { label: "HL7 / FHIR", href: "/salud#tecnologias" },
      { label: "Casos de Éxito", href: "/portafolio?filter=salud" },
    ],
  },
  textil: {
    title: "Textil DTF",
    links: [
      { label: "Servicios DTF", href: "/textil" },
      { label: "Poleras", href: "/textil#poleras" },
      { label: "Uniformes", href: "/textil#uniformes" },
      { label: "Cotizar", href: "/contacto?tema=textil" },
    ],
  },
  empresa: {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Portafolio", href: "/portafolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="DMC Projects"
                width={140}
                height={47}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Conectamos sistemas de salud e imprimimos tu identidad.
              Especialistas en interoperabilidad clínica y personalización textil DTF.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_INFO.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {CONTACT_INFO.address}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} DMC Projects. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={getWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-brand transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
