// Navigation
export const NAV_ITEMS = [
  {
    label: "Salud",
    href: "/salud",
    children: [
      { label: "Interoperabilidad e Integración", href: "/salud" },
      { label: "Casos de Éxito", href: "/portafolio?filter=salud" },
      { label: "Agendar Reunión", href: "/contacto?tema=salud" },
    ],
  },
  {
    label: "Textil DTF",
    href: "/textil",
    children: [
      { label: "Servicios DTF", href: "/textil" },
      { label: "Catálogo", href: "/textil#catalogo" },
      { label: "Cotizar Ahora", href: "/contacto?tema=textil" },
    ],
  },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
];

// Services - Salud
export const SALUD_SERVICES = [
  {
    icon: "GitBranch",
    title: "Levantamiento de Flujos",
    description: "Mapeamos tus procesos actuales, identificamos puntos de integración y documentamos requerimientos técnicos y de negocio.",
  },
  {
    icon: "Layers",
    title: "Diseño de Integración",
    description: "Definimos la arquitectura de integración óptima: protocolos, transformaciones, validaciones y manejo de errores.",
  },
  {
    icon: "Plug",
    title: "Desarrollo de Conectores",
    description: "Construimos interfaces específicas para tus sistemas: HIS, RIS, LIS, PACS, ERP, y cualquier aplicación con capacidad de integración.",
  },
  {
    icon: "RefreshCw",
    title: "Normalización y Transformación",
    description: "Convertimos datos entre formatos y estándares. HL7 v2 ↔ FHIR, XML ↔ JSON, y cualquier transformación que requieras.",
  },
  {
    icon: "Server",
    title: "Implementación de Motores",
    description: "Instalamos, configuramos y optimizamos Mirth Connect u OIE según tus necesidades de volumen, redundancia y monitoreo.",
  },
  {
    icon: "Activity",
    title: "Monitoreo y Trazabilidad",
    description: "Dashboards en tiempo real, alertas proactivas y logs completos para auditoría y troubleshooting.",
  },
  {
    icon: "Shield",
    title: "Soporte y Hardening",
    description: "Mantenimiento preventivo, actualizaciones de seguridad, optimización de rendimiento y respuesta ante incidentes.",
  },
  {
    icon: "FileText",
    title: "Documentación Técnica",
    description: "Manuales de operación, diagramas de arquitectura, especificaciones de interfaces y guías de troubleshooting.",
  },
];

// Services - Textil
export const TEXTIL_SERVICES = [
  {
    icon: "Shirt",
    title: "Poleras",
    description: "Algodón, poliéster o mezcla. Cuello redondo o polo. Desde talla XS hasta XXXL. Tu diseño en el pecho, espalda o manga.",
    image: "/images/polera.jpg",
  },
  {
    icon: "Jacket",
    title: "Polerones",
    description: "Con o sin capucha, canguro o full zipper. Ideales para equipos de trabajo, promociones y merchandising.",
    image: "/images/poleron.jpg",
  },
  {
    icon: "Users",
    title: "Uniformes Corporativos",
    description: "Polos, camisas, chaquetas. Con tu logo y los datos que necesites. Cotización especial por volumen.",
    image: "/images/uniforme.jpg",
  },
  {
    icon: "Gift",
    title: "Merchandising",
    description: "Bolsos, gorros, delantales y más. Si es tela, probablemente lo podemos personalizar.",
    image: "/images/merchandising.jpg",
  },
];

// FAQ - Salud
export const SALUD_FAQ = [
  {
    question: "¿Qué sistemas pueden integrar?",
    answer: "Prácticamente cualquier sistema con capacidad de integración: HIS (ej. RAYEN, Medisyn), RIS, LIS, PACS, ERP, sistemas propietarios, APIs REST/SOAP, bases de datos, archivos planos, etc.",
  },
  {
    question: "¿Trabajan con Mirth Connect o con OIE?",
    answer: "Ambos. Evaluamos cuál es más adecuado según tu contexto: volumen de mensajes, presupuesto, equipo interno, integraciones existentes.",
  },
  {
    question: "¿Pueden mantener integraciones que ya tenemos?",
    answer: "Sí. Hacemos takeover de integraciones existentes, documentamos, optimizamos y damos soporte continuo.",
  },
  {
    question: "¿Trabajan de forma remota o presencial?",
    answer: "Principalmente remoto, con visitas presenciales cuando el proyecto lo requiere (levantamiento inicial, capacitaciones, go-live).",
  },
  {
    question: "¿Qué pasa si algo falla en producción?",
    answer: "Tenemos protocolos de respuesta según SLA acordado. Monitoreo 24/7 disponible según plan de soporte contratado.",
  },
  {
    question: "¿Pueden ayudar con cumplimiento normativo?",
    answer: "Sí. Diseñamos integraciones considerando trazabilidad, auditoría y requisitos de la Superintendencia de Salud cuando aplica.",
  },
];

// FAQ - Textil
export const TEXTIL_FAQ = [
  {
    question: "¿Cuántos lavados aguanta?",
    answer: "Con cuidado normal (lavar al revés, no usar secadora), la impresión dura la vida útil de la prenda. Garantizamos mínimo 50 lavados sin deterioro visible.",
  },
  {
    question: "¿Pueden imprimir fotos?",
    answer: "Sí. DTF permite full color, degradados y fotos. El resultado depende de la calidad de la imagen original.",
  },
  {
    question: "¿Qué pasa si no tengo diseño?",
    answer: "Podemos ayudarte a crear uno simple o conectarte con diseñadores. Consulta por este servicio adicional.",
  },
  {
    question: "¿Puedo elegir la marca de la prenda?",
    answer: "Sí. Trabajamos con varias marcas y calidades. También puedes traer tus propias prendas.",
  },
  {
    question: "¿Hacen envíos a regiones?",
    answer: "Sí, a todo Chile vía Starken, Chilexpress o el courier de tu preferencia. Costo de envío adicional.",
  },
  {
    question: "¿Tienen tienda física?",
    answer: "Trabajamos principalmente con retiro coordinado y despacho. Visitas con cita previa en nuestra ubicación.",
  },
];

// Technologies - Salud
export const SALUD_TECHNOLOGIES = {
  motors: ["Mirth Connect (NextGen)", "Open Integration Engine (OIE)"],
  standards: ["HL7 v2.x (ADT, ORM, ORU, SIU, MDM...)", "HL7 FHIR R4", "CDA (Clinical Document Architecture)"],
  profiles: ["PIX/PDQ (Gestión de pacientes)", "XDS (Documentos)", "ATNA (Auditoría)"],
  protocols: ["MLLP, HTTP/REST, SOAP", "TCP/IP, SFTP, AS2"],
  databases: ["PostgreSQL", "MySQL", "SQL Server", "Oracle"],
};

// Process Steps - Salud
export const SALUD_PROCESS = [
  {
    step: 1,
    title: "Descubrimiento",
    description: "Entendemos tu contexto: sistemas actuales, necesidades, restricciones y objetivos de negocio.",
  },
  {
    step: 2,
    title: "Diseño",
    description: "Proponemos arquitectura de integración con diagramas, especificaciones y plan de implementación.",
  },
  {
    step: 3,
    title: "Desarrollo",
    description: "Construimos las interfaces en ambiente de desarrollo con pruebas unitarias y de integración.",
  },
  {
    step: 4,
    title: "Pruebas",
    description: "Validamos en ambiente de QA con datos representativos y escenarios de error controlados.",
  },
  {
    step: 5,
    title: "Despliegue",
    description: "Implementamos en producción con plan de rollback y monitoreo intensivo.",
  },
  {
    step: 6,
    title: "Operación",
    description: "Soporte continuo, monitoreo proactivo y evolución según necesidades.",
  },
];

// Process Steps - DTF
export const DTF_PROCESS = [
  {
    step: 1,
    title: "Nos envías tu diseño",
    description: "Archivo en alta resolución (PNG, AI, PSD). Te asesoramos gratis si necesitas ajustes.",
  },
  {
    step: 2,
    title: "Preparamos el arte",
    description: "Optimizamos colores, tamaño y ubicación para el mejor resultado.",
  },
  {
    step: 3,
    title: "Imprimimos en film",
    description: "Tu diseño se imprime con tintas especiales en film de transferencia.",
  },
  {
    step: 4,
    title: "Transferimos a la prenda",
    description: "Aplicamos calor y presión controlados para adherir el diseño.",
  },
  {
    step: 5,
    title: "Control de calidad",
    description: "Revisamos cada prenda antes de embalar.",
  },
  {
    step: 6,
    title: "Entregamos",
    description: "Retiro en Santiago o despacho a todo Chile.",
  },
];

// Testimonials (PLACEHOLDERS)
export const TESTIMONIALS = [
  {
    quote: "DMC Projects integró nuestros sistemas HIS y LIS en tiempo récord. La comunicación fue excelente durante todo el proyecto.",
    author: "Director de TI",
    company: "Centro Médico",
    type: "salud",
  },
  {
    quote: "Las poleras quedaron increíbles. Los colores vibrantes y la durabilidad superaron nuestras expectativas.",
    author: "Gerente de RRHH",
    company: "Empresa de Tecnología",
    type: "textil",
  },
  {
    quote: "Profesionales y comprometidos. Resolvieron integraciones complejas que otros proveedores no pudieron.",
    author: "Jefe de Informática",
    company: "Clínica Privada",
    type: "salud",
  },
  {
    quote: "Pedimos 200 uniformes personalizados y todo llegó perfecto. Ya estamos preparando el siguiente pedido.",
    author: "Dueño",
    company: "Restaurant",
    type: "textil",
  },
];

// Portfolio Items (PLACEHOLDERS)
export const PORTFOLIO_ITEMS = [
  {
    id: "1",
    title: "Integración HIS-LIS",
    description: "Conexión bidireccional entre sistema hospitalario y laboratorio usando HL7 v2.5",
    type: "salud",
    image: "/images/portfolio/salud-1.jpg",
    tags: ["HL7", "Mirth Connect", "HIS", "LIS"],
  },
  {
    id: "2",
    title: "Uniformes Empresa Tech",
    description: "500 poleras y 200 polerones personalizados para equipo de startup",
    type: "textil",
    image: "/images/portfolio/textil-1.jpg",
    tags: ["DTF", "Corporativo", "Poleras", "Polerones"],
  },
  {
    id: "3",
    title: "Motor FHIR R4",
    description: "Implementación de gateway FHIR para interoperabilidad con aplicaciones móviles",
    type: "salud",
    image: "/images/portfolio/salud-2.jpg",
    tags: ["FHIR", "API", "Mirth Connect"],
  },
  {
    id: "4",
    title: "Merchandising Evento",
    description: "Kit completo de merchandising para conferencia: poleras, bolsos y gorros",
    type: "textil",
    image: "/images/portfolio/textil-2.jpg",
    tags: ["DTF", "Evento", "Merchandising"],
  },
];
