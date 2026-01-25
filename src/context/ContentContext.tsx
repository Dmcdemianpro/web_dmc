'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Tipos
interface HeroContent {
  title1: string
  title2: string
  subtitle: string
  description: string
}

interface ServiceItem {
  id: number
  icon: string
  title: string
  description: string
  image?: string
}

interface PortfolioItem {
  id: number
  title: string
  description: string
  type: 'salud' | 'textil'
  image: string
  tags: string[]
}

interface Testimonial {
  id: number
  quote: string
  author: string
  company: string
  type: 'salud' | 'textil'
}

interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  address: string
  schedule: string
  instagram: string
  facebook: string
  linkedin: string
}

// Selector de bienvenida
interface WelcomeSelector {
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  saludCard: {
    title: string
    subtitle: string
    description: string
    image: string
    buttonText: string
  }
  textilCard: {
    title: string
    subtitle: string
    description: string
    image: string
    buttonText: string
  }
}

interface SiteContent {
  // General
  siteName: string
  siteTagline: string

  // Selector de Bienvenida
  welcome: WelcomeSelector

  // Hero Principal
  hero: HeroContent

  // Salud
  saludHero: HeroContent
  saludServices: ServiceItem[]
  saludTechnologies: {
    motors: string[]
    standards: string[]
    profiles: string[]
    protocols: string[]
    databases: string[]
  }

  // Textil
  textilHero: HeroContent
  textilServices: ServiceItem[]
  textilPricing: {
    unitario: { desde: number; hasta: number }
    mayorista: { desde: number; hasta: number }
    corporativo: string
  }
  textilGallery: { id: number; url: string; caption: string }[]

  // Portfolio
  portfolio: PortfolioItem[]

  // Testimoniales
  testimonials: Testimonial[]

  // Contacto
  contact: ContactInfo
}

// Contenido por defecto
const defaultContent: SiteContent = {
  // General
  siteName: 'DMC Projects',
  siteTagline: 'Conectamos sistemas de salud e imprimimos tu identidad',

  // Selector de Bienvenida
  welcome: {
    title: 'Bienvenido a DMC Projects Spa',
    subtitle: 'Dos especialidades, un solo equipo',
    description: 'Somos una empresa dedicada a dos rubros especializados. Selecciona el area que necesitas para conocer nuestros servicios.',
    backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
    saludCard: {
      title: 'Salud Digital',
      subtitle: 'Interoperabilidad e Integracion',
      description: 'Conectamos sistemas clinicos HIS, RIS, LIS, PACS con estandares HL7, FHIR y CDA. Especialistas en Mirth Connect y motores de integracion.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80',
      buttonText: 'Explorar Salud Digital',
    },
    textilCard: {
      title: 'Personalizacion Textil',
      subtitle: 'Impresion DTF Profesional',
      description: 'Poleras, polerones, uniformes y merchandising con impresion DTF de alta calidad. Desde 1 unidad hasta pedidos mayoristas.',
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
      buttonText: 'Explorar Textil DTF',
    },
  },

  // Hero Principal
  hero: {
    title1: 'Conectamos sistemas de salud',
    title2: 'e imprimimos tu identidad',
    subtitle: 'Un equipo, dos especialidades, cero complicaciones',
    description: 'Interoperabilidad clinica + Personalizacion textil DTF.',
  },

  // Salud
  saludHero: {
    title1: 'Interoperabilidad',
    title2: 'e Integracion de Sistemas',
    subtitle: 'Que tus sistemas hablen el mismo idioma',
    description: 'Conectamos tus sistemas clinicos HIS, RIS, LIS, PACS con estandares HL7, FHIR y CDA. Desde el levantamiento inicial hasta el monitoreo continuo.',
  },
  saludServices: [
    { id: 1, icon: 'GitBranch', title: 'Levantamiento de Flujos', description: 'Mapeamos tus procesos actuales, identificamos puntos de integracion y documentamos requerimientos tecnicos y de negocio.' },
    { id: 2, icon: 'Layers', title: 'Diseno de Integracion', description: 'Definimos la arquitectura de integracion optima: protocolos, transformaciones, validaciones y manejo de errores.' },
    { id: 3, icon: 'Plug', title: 'Desarrollo de Conectores', description: 'Construimos interfaces especificas para tus sistemas: HIS, RIS, LIS, PACS, ERP, y cualquier aplicacion con capacidad de integracion.' },
    { id: 4, icon: 'RefreshCw', title: 'Normalizacion y Transformacion', description: 'Convertimos datos entre formatos y estandares. HL7 v2 a FHIR, XML a JSON, y cualquier transformacion que requieras.' },
    { id: 5, icon: 'Server', title: 'Implementacion de Motores', description: 'Instalamos, configuramos y optimizamos Mirth Connect u OIE segun tus necesidades de volumen, redundancia y monitoreo.' },
    { id: 6, icon: 'Activity', title: 'Monitoreo y Trazabilidad', description: 'Dashboards en tiempo real, alertas proactivas y logs completos para auditoria y troubleshooting.' },
  ],
  saludTechnologies: {
    motors: ['Mirth Connect (NextGen)', 'Open Integration Engine (OIE)'],
    standards: ['HL7 v2.x (ADT, ORM, ORU, SIU, MDM...)', 'HL7 FHIR R4', 'CDA (Clinical Document Architecture)'],
    profiles: ['PIX/PDQ (Gestion de pacientes)', 'XDS (Documentos)', 'ATNA (Auditoria)'],
    protocols: ['MLLP, HTTP/REST, SOAP', 'TCP/IP, SFTP, AS2'],
    databases: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle'],
  },

  // Textil
  textilHero: {
    title1: 'PERSONALIZA',
    title2: 'TU ESTILO',
    subtitle: 'Impresion DTF Profesional',
    description: 'Tu diseno, impreso con calidad excepcional en la prenda que elijas. Poleras, polerones, uniformes corporativos y mas. Desde 1 unidad.',
  },
  textilServices: [
    { id: 1, icon: 'Shirt', title: 'Poleras', description: 'Algodon, poliester o mezcla. Cuello redondo o polo. Desde talla XS hasta XXXL.', image: '/images/polera.jpg' },
    { id: 2, icon: 'Jacket', title: 'Polerones', description: 'Con o sin capucha, canguro o full zipper. Ideales para equipos de trabajo.', image: '/images/poleron.jpg' },
    { id: 3, icon: 'Users', title: 'Uniformes Corporativos', description: 'Polos, camisas, chaquetas. Con tu logo y datos. Cotizacion especial por volumen.', image: '/images/uniforme.jpg' },
    { id: 4, icon: 'Gift', title: 'Merchandising', description: 'Bolsos, gorros, delantales y mas. Si es tela, probablemente lo podemos personalizar.', image: '/images/merchandising.jpg' },
  ],
  textilPricing: {
    unitario: { desde: 8990, hasta: 15990 },
    mayorista: { desde: 5990, hasta: 9990 },
    corporativo: 'Consultar',
  },
  textilGallery: [
    { id: 1, url: '/images/gallery/dtf-1.jpg', caption: 'Polera Full Color' },
    { id: 2, url: '/images/gallery/dtf-2.jpg', caption: 'Poleron Personalizado' },
    { id: 3, url: '/images/gallery/dtf-3.jpg', caption: 'Uniformes Empresa' },
    { id: 4, url: '/images/gallery/dtf-4.jpg', caption: 'Merchandising Evento' },
  ],

  // Portfolio
  portfolio: [
    { id: 1, title: 'Integracion HIS-LIS', description: 'Conexion bidireccional entre sistema hospitalario y laboratorio usando HL7 v2.5', type: 'salud', image: '/images/portfolio/salud-1.jpg', tags: ['HL7', 'Mirth Connect', 'HIS', 'LIS'] },
    { id: 2, title: 'Uniformes Empresa Tech', description: '500 poleras y 200 polerones personalizados para equipo de startup', type: 'textil', image: '/images/portfolio/textil-1.jpg', tags: ['DTF', 'Corporativo', 'Poleras'] },
    { id: 3, title: 'Motor FHIR R4', description: 'Implementacion de gateway FHIR para interoperabilidad con apps moviles', type: 'salud', image: '/images/portfolio/salud-2.jpg', tags: ['FHIR', 'API', 'Mirth Connect'] },
    { id: 4, title: 'Merchandising Evento', description: 'Kit completo de merchandising para conferencia', type: 'textil', image: '/images/portfolio/textil-2.jpg', tags: ['DTF', 'Evento', 'Merchandising'] },
  ],

  // Testimoniales
  testimonials: [
    { id: 1, quote: 'DMC Projects integro nuestros sistemas HIS y LIS en tiempo record. La comunicacion fue excelente.', author: 'Director de TI', company: 'Centro Medico', type: 'salud' },
    { id: 2, quote: 'Las poleras quedaron increibles. Los colores vibrantes y la durabilidad superaron expectativas.', author: 'Gerente de RRHH', company: 'Empresa Tech', type: 'textil' },
    { id: 3, quote: 'Profesionales y comprometidos. Resolvieron integraciones complejas que otros no pudieron.', author: 'Jefe de Informatica', company: 'Clinica Privada', type: 'salud' },
    { id: 4, quote: 'Pedimos 200 uniformes personalizados y todo llego perfecto. Ya preparamos el siguiente pedido.', author: 'Dueno', company: 'Restaurant', type: 'textil' },
  ],

  // Contacto
  contact: {
    phone: '+56 9 XXXX XXXX',
    whatsapp: '569XXXXXXXX',
    email: 'contacto@dmcprojects.cl',
    address: 'Santiago, Chile',
    schedule: 'Lunes a Viernes: 9:00 - 18:00',
    instagram: 'https://www.instagram.com/dmcprojects.cl/',
    facebook: 'https://www.facebook.com/dmcprojects',
    linkedin: 'https://www.linkedin.com/company/dmcprojects',
  },
}

// Credenciales de admin
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'dmc2024',
}

// Interfaz del contexto
interface ContentContextType {
  content: SiteContent
  isAuthenticated: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
  updateContent: <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => void
  updateHero: (data: Partial<HeroContent>) => void
  updateSaludHero: (data: Partial<HeroContent>) => void
  updateTextilHero: (data: Partial<HeroContent>) => void
  updateContact: (data: Partial<ContactInfo>) => void
  updateWelcome: (data: Partial<WelcomeSelector>) => void
  addService: (type: 'salud' | 'textil', service: Omit<ServiceItem, 'id'>) => void
  updateService: (type: 'salud' | 'textil', id: number, data: Partial<ServiceItem>) => void
  deleteService: (type: 'salud' | 'textil', id: number) => void
  addPortfolioItem: (item: Omit<PortfolioItem, 'id'>) => void
  updatePortfolioItem: (id: number, data: Partial<PortfolioItem>) => void
  deletePortfolioItem: (id: number) => void
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void
  updateTestimonial: (id: number, data: Partial<Testimonial>) => void
  deleteTestimonial: (id: number) => void
  addGalleryItem: (item: { url: string; caption: string }) => void
  updateGalleryItem: (id: number, data: { url?: string; caption?: string }) => void
  deleteGalleryItem: (id: number) => void
  resetToDefault: () => void
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dmcContent')
      if (saved) {
        const parsed = JSON.parse(saved)
        // Merge with default to ensure new fields exist
        return { ...defaultContent, ...parsed }
      }
      return defaultContent
    }
    return defaultContent
  })

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('dmcAdminAuth') === 'true'
    }
    return false
  })

  // Guardar en localStorage cuando cambie el contenido
  useEffect(() => {
    localStorage.setItem('dmcContent', JSON.stringify(content))
  }, [content])

  // Funciones de autenticacion
  const login = (username: string, password: string) => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true)
      localStorage.setItem('dmcAdminAuth', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('dmcAdminAuth')
  }

  // Funciones para actualizar contenido
  const updateContent = <K extends keyof SiteContent>(section: K, data: SiteContent[K]) => {
    setContent(prev => ({ ...prev, [section]: data }))
  }

  const updateHero = (data: Partial<HeroContent>) => {
    setContent(prev => ({ ...prev, hero: { ...prev.hero, ...data } }))
  }

  const updateSaludHero = (data: Partial<HeroContent>) => {
    setContent(prev => ({ ...prev, saludHero: { ...prev.saludHero, ...data } }))
  }

  const updateTextilHero = (data: Partial<HeroContent>) => {
    setContent(prev => ({ ...prev, textilHero: { ...prev.textilHero, ...data } }))
  }

  const updateContact = (data: Partial<ContactInfo>) => {
    setContent(prev => ({ ...prev, contact: { ...prev.contact, ...data } }))
  }

  const updateWelcome = (data: Partial<WelcomeSelector>) => {
    setContent(prev => ({ ...prev, welcome: { ...prev.welcome, ...data } }))
  }

  // Servicios
  const addService = (type: 'salud' | 'textil', service: Omit<ServiceItem, 'id'>) => {
    const key = type === 'salud' ? 'saludServices' : 'textilServices'
    const newService = { ...service, id: Date.now() }
    setContent(prev => ({ ...prev, [key]: [...prev[key], newService] }))
  }

  const updateService = (type: 'salud' | 'textil', id: number, data: Partial<ServiceItem>) => {
    const key = type === 'salud' ? 'saludServices' : 'textilServices'
    setContent(prev => ({
      ...prev,
      [key]: prev[key].map(s => s.id === id ? { ...s, ...data } : s)
    }))
  }

  const deleteService = (type: 'salud' | 'textil', id: number) => {
    const key = type === 'salud' ? 'saludServices' : 'textilServices'
    setContent(prev => ({ ...prev, [key]: prev[key].filter(s => s.id !== id) }))
  }

  // Portfolio
  const addPortfolioItem = (item: Omit<PortfolioItem, 'id'>) => {
    const newItem = { ...item, id: Date.now() }
    setContent(prev => ({ ...prev, portfolio: [...prev.portfolio, newItem] }))
  }

  const updatePortfolioItem = (id: number, data: Partial<PortfolioItem>) => {
    setContent(prev => ({
      ...prev,
      portfolio: prev.portfolio.map(p => p.id === id ? { ...p, ...data } : p)
    }))
  }

  const deletePortfolioItem = (id: number) => {
    setContent(prev => ({ ...prev, portfolio: prev.portfolio.filter(p => p.id !== id) }))
  }

  // Testimoniales
  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    const newTestimonial = { ...testimonial, id: Date.now() }
    setContent(prev => ({ ...prev, testimonials: [...prev.testimonials, newTestimonial] }))
  }

  const updateTestimonial = (id: number, data: Partial<Testimonial>) => {
    setContent(prev => ({
      ...prev,
      testimonials: prev.testimonials.map(t => t.id === id ? { ...t, ...data } : t)
    }))
  }

  const deleteTestimonial = (id: number) => {
    setContent(prev => ({ ...prev, testimonials: prev.testimonials.filter(t => t.id !== id) }))
  }

  // Gallery
  const addGalleryItem = (item: { url: string; caption: string }) => {
    const newItem = { ...item, id: Date.now() }
    setContent(prev => ({ ...prev, textilGallery: [...prev.textilGallery, newItem] }))
  }

  const updateGalleryItem = (id: number, data: { url?: string; caption?: string }) => {
    setContent(prev => ({
      ...prev,
      textilGallery: prev.textilGallery.map(g => g.id === id ? { ...g, ...data } : g)
    }))
  }

  const deleteGalleryItem = (id: number) => {
    setContent(prev => ({ ...prev, textilGallery: prev.textilGallery.filter(g => g.id !== id) }))
  }

  // Resetear a valores por defecto
  const resetToDefault = () => {
    setContent(defaultContent)
    localStorage.setItem('dmcContent', JSON.stringify(defaultContent))
  }

  const value: ContentContextType = {
    content,
    isAuthenticated,
    login,
    logout,
    updateContent,
    updateHero,
    updateSaludHero,
    updateTextilHero,
    updateContact,
    updateWelcome,
    addService,
    updateService,
    deleteService,
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    addGalleryItem,
    updateGalleryItem,
    deleteGalleryItem,
    resetToDefault,
  }

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}

export default ContentContext
