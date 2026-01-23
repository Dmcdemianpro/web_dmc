# DMC PROJECTS — Estrategia Web Integral

---

## A) ESTRATEGIA Y POSICIONAMIENTO

### 1. Propuesta de Valor Principal

**Una línea:**
> "Conectamos sistemas de salud e imprimimos tu identidad en textil."

**Párrafo expandido:**
DMC Projects es tu socio estratégico en dos mundos que exigen precisión y confiabilidad: la interoperabilidad de sistemas clínicos y la personalización textil DTF. En salud, integramos tus sistemas (HIS, RIS, LIS, PACS) con estándares como HL7, FHIR y CDA para que la información fluya sin fricciones. En textil, transformamos tus ideas en prendas personalizadas con calidad profesional, desde una polera hasta uniformes corporativos completos. Un equipo, dos especialidades, cero complicaciones.

---

### 2. Mensaje por Segmento

#### Segmento Salud (Hospital / Clínica / Centro Médico / Laboratorio)

**Headline:** "Que tus sistemas hablen el mismo idioma"

**Mensaje:**
Sabemos que la fragmentación de información clínica genera errores, retrasos y frustración. Con más de [X] años implementando motores de integración como Mirth Connect y OIE, conectamos tus sistemas para que los datos fluyan de forma segura, trazable y conforme a estándares internacionales. Desde el levantamiento inicial hasta el monitoreo continuo, somos tu partner técnico en interoperabilidad.

**Tono:** Técnico-profesional, orientado a resultados, lenguaje de industria.

---

#### Segmento Textil DTF (Empresa / RRHH / Emprendedor / Cliente Final)

**Headline para B2B:** "Uniformes y prendas corporativas que representan tu marca"

**Headline para B2C:** "Tu diseño, tu estilo, tu prenda"

**Mensaje B2B:**
Desde 10 hasta 1.000+ unidades, personalizamos poleras, polerones y uniformes con impresión DTF de alta definición. Colores vibrantes que no se agrietan, entregas a tiempo y asesoría en diseño incluida. Ideal para equipos de trabajo, eventos corporativos y merchandising.

**Mensaje B2C:**
¿Tienes un diseño o idea? Lo imprimimos en la prenda que elijas con tecnología DTF: full color, detalles nítidos y durabilidad garantizada. Pedidos desde 1 unidad.

**Tono:** Cercano, visual, orientado a resultados tangibles.

---

### 3. Diferenciadores

#### Línea Salud — Interoperabilidad e Integración

| # | Diferenciador |
|---|---------------|
| 1 | **Especialización real:** Foco exclusivo en integración de sistemas clínicos, no somos generalistas de TI. |
| 2 | **Dominio de estándares:** Experiencia práctica con HL7 v2, FHIR, CDA, perfiles IHE (PIX, PDQ, XDS). |
| 3 | **Motores probados:** Implementación y soporte de Mirth Connect y Open Integration Engine (OIE). |
| 4 | **Enfoque end-to-end:** Desde levantamiento de flujos hasta monitoreo, trazabilidad y documentación. |
| 5 | **Soporte continuo:** Mantenimiento, hardening y evolución de integraciones existentes. |

**Pruebas/Credenciales sugeridas (sin inventar):**
- Años de experiencia verificables
- Casos de éxito anonimizados (con permiso)
- Certificaciones reales del equipo (HL7, FHIR si las tienen)
- Logos de tecnologías dominadas (Mirth, OIE, etc.)

---

#### Línea Textil — DTF

| # | Diferenciador |
|---|---------------|
| 1 | **Tecnología DTF profesional:** Impresión directa a film con colores vibrantes y alta definición. |
| 2 | **Flexibilidad de volumen:** Desde 1 prenda hasta pedidos mayoristas sin mínimos prohibitivos. |
| 3 | **Asesoría de diseño:** Te ayudamos a optimizar tu arte para el mejor resultado. |
| 4 | **Tiempos claros:** Compromisos de entrega realistas y cumplidos. |
| 5 | **Variedad de prendas:** Poleras, polerones, uniformes, gorros, bolsos y más. |

**Pruebas/Credenciales sugeridas:**
- Galería de trabajos reales (fotos propias)
- Testimonios de clientes
- Muestras de durabilidad (lavados)
- Proceso documentado con fotos/video

---

## B) ARQUITECTURA DE INFORMACIÓN Y NAVEGACIÓN

### 1. Sitemap Recomendado

```
/                           → Home (con selector de ruta)
├── /salud                  → Landing Salud
│   ├── /salud/servicios    → Servicios detallados
│   └── /salud/casos        → Casos de éxito Salud
├── /textil                 → Landing Textil DTF
│   ├── /textil/catalogo    → Catálogo de prendas
│   └── /textil/cotizar     → Cotizador/Formulario
├── /portafolio             → Portafolio unificado (con filtros)
├── /nosotros               → Sobre DMC Projects
├── /blog                   → Recursos y artículos
│   ├── /blog/[slug]        → Artículo individual
└── /contacto               → Contacto unificado
```

---

### 2. Navegación

#### Desktop Navbar

```
[Logo DMC]  Salud ▼  Textil DTF ▼  Portafolio  Nosotros  Blog  [Contacto CTA]

Dropdown Salud:
- Interoperabilidad e Integración
- Casos de Éxito
- Agendar Reunión

Dropdown Textil:
- Servicios DTF
- Catálogo
- Cotizar Ahora
```

#### Mobile Navbar

```
[Logo]  [Hamburger ☰]

Menu expandido:
- Inicio
- Salud
  - Servicios
  - Casos
- Textil DTF
  - Servicios
  - Catálogo
  - Cotizar
- Portafolio
- Nosotros
- Blog
- Contacto
```

---

### 3. Lógica de Segmentación en Home

**Recomendación: Opción 1 — Selector de Ruta en Hero**

El hero presenta ambas líneas con igual jerarquía visual:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              DMC PROJECTS                                   │
│   "Conectamos sistemas de salud e imprimimos tu identidad"  │
│                                                             │
│   ┌─────────────────┐    ┌─────────────────┐               │
│   │   🏥 SALUD      │    │   👕 TEXTIL DTF │               │
│   │                 │    │                 │               │
│   │ Interoperabilidad│    │ Personalización │               │
│   │ e Integración   │    │ de prendas      │               │
│   │                 │    │                 │               │
│   │ [Explorar →]    │    │ [Explorar →]    │               │
│   └─────────────────┘    └─────────────────┘               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Comportamiento:**
- Hover en cada card revela preview de servicios
- Click lleva a la landing correspondiente
- Scroll down muestra contenido mixto (ambas líneas)

---

### 4. Estructura por Página

#### HOME
```
1. Hero con selector de ruta (Salud | Textil)
2. Propuesta de valor unificada
3. Sección Salud (preview)
4. Sección Textil (preview)
5. Portafolio destacado (2 Salud + 2 Textil)
6. Testimonios/Prueba social
7. CTA final dual
8. Footer
```

#### SALUD — Interoperabilidad e Integración
```
1. Hero específico Salud
2. Problema que resolvemos
3. Servicios (cards expandibles):
   - Levantamiento de flujos
   - Diseño de integración
   - Desarrollo de conectores
   - Normalización y transformación
   - Implementación de motores (Mirth/OIE)
   - Monitoreo y trazabilidad
   - Soporte y hardening
   - Documentación técnica
4. Tecnologías y estándares
5. Proceso de trabajo (timeline)
6. Casos de éxito
7. FAQ técnico
8. CTA: Agendar reunión técnica
```

#### TEXTIL DTF
```
1. Hero visual (foto de prendas)
2. ¿Qué es DTF? (educativo)
3. Servicios:
   - Poleras
   - Polerones
   - Uniformes corporativos
   - Prendas promocionales
4. Proceso DTF (infografía)
5. Recomendaciones de diseño
6. Volúmenes y tiempos
7. Galería de trabajos
8. FAQ
9. CTA: Cotizar ahora
```

#### PORTAFOLIO
```
1. Header con filtros (Todos | Salud | Textil)
2. Grid de proyectos (cards)
3. Modal/página de detalle por proyecto
4. CTA contextual
```

#### NOSOTROS
```
1. Historia breve
2. Misión / Por qué existimos
3. Valores
4. Equipo (opcional, si desean mostrarlo)
5. Forma de trabajo
6. CTA
```

#### CONTACTO
```
1. Selector: ¿Sobre qué tema nos contactas?
2. Formulario dinámico según selección
3. WhatsApp directo (botones con mensajes predefinidos)
4. Agendar reunión (embed Calendly)
5. Datos de contacto
6. Mapa (opcional)
```

---

## C) DISEÑO UX/UI — ESPECIFICACIÓN DETALLADA

### 1. Dirección de Arte

**Concepto:** "SaaS Premium + Studio Creativo"

- Limpio, espacioso, moderno
- Tipografía bold para headlines
- Microinteracciones sutiles pero presentes
- Fotografía real mezclada con ilustración técnica
- Modo claro por defecto, oscuro opcional

---

### 2. Design System

#### Tipografías (Google Fonts)

| Uso | Fuente | Peso |
|-----|--------|------|
| Headlines | Inter | 700, 800 |
| Body | Inter | 400, 500 |
| Monospace (código) | JetBrains Mono | 400 |

**Escala tipográfica:**
```
text-xs:   12px / 16px
text-sm:   14px / 20px
text-base: 16px / 24px
text-lg:   18px / 28px
text-xl:   20px / 28px
text-2xl:  24px / 32px
text-3xl:  30px / 36px
text-4xl:  36px / 40px
text-5xl:  48px / 48px
text-6xl:  60px / 60px
```

#### Grid y Spacing

```
Container: max-w-7xl (1280px)
Padding lateral: px-4 (mobile) → px-6 (tablet) → px-8 (desktop)
Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
```

#### Border Radius

```
rounded-sm:  4px   → inputs, chips
rounded-md:  8px   → cards pequeñas
rounded-lg:  12px  → cards principales
rounded-xl:  16px  → modales, hero cards
rounded-2xl: 24px  → elementos destacados
rounded-full: 9999px → avatares, badges
```

#### Sombras

```
shadow-sm:   0 1px 2px rgba(0,0,0,0.05)
shadow:      0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)
shadow-md:   0 4px 6px rgba(0,0,0,0.1)
shadow-lg:   0 10px 15px rgba(0,0,0,0.1)
shadow-xl:   0 20px 25px rgba(0,0,0,0.1)
```

---

#### Paleta de Colores

**Base (Modo Claro)**
```css
--background:    #FFFFFF
--foreground:    #0A0A0A
--muted:         #F5F5F5
--muted-fg:      #737373
--border:        #E5E5E5
```

**Base (Modo Oscuro)**
```css
--background:    #0A0A0A
--foreground:    #FAFAFA
--muted:         #171717
--muted-fg:      #A3A3A3
--border:        #262626
```

**Marca Principal (del logo)**
```css
--brand:         #8B1E3F  /* Burgundy/Vino del logo */
--brand-light:   #A93154
--brand-dark:    #6D1830
```

**Acentos por Línea**

| Línea | Color Principal | Uso |
|-------|-----------------|-----|
| Salud | `#0EA5E9` (Sky Blue) | CTAs, iconos, badges |
| Textil | `#8B1E3F` (Burgundy) | CTAs, iconos, badges |

**Estados**
```css
--success:  #22C55E
--warning:  #F59E0B
--error:    #EF4444
--info:     #3B82F6
```

---

#### Componentes

**Navbar**
```
Altura: 64px (mobile) / 72px (desktop)
Background: blur + background/80
Border bottom: 1px border
Logo: 40px altura
Links: text-sm font-medium
CTA: Button primary sm
Mobile: Hamburger → Sheet desde derecha
```

**Hero**
```
Padding: py-24 (mobile) → py-32 (desktop)
Headline: text-4xl → text-6xl font-extrabold
Subheadline: text-lg → text-xl text-muted-foreground
CTAs: Dos botones, primary + secondary
Background: Gradient sutil o patrón geométrico
```

**Botones**
```
Primary:   bg-brand text-white hover:bg-brand-dark
Secondary: bg-muted text-foreground hover:bg-muted/80
Outline:   border-2 border-brand text-brand hover:bg-brand/10
Ghost:     hover:bg-muted

Sizes:
sm: px-3 py-1.5 text-sm
md: px-4 py-2 text-base
lg: px-6 py-3 text-lg

Todos: rounded-lg font-medium transition-all duration-200
```

**Cards**
```
Background: bg-background
Border: border border-border
Radius: rounded-xl
Padding: p-6
Shadow: shadow-sm hover:shadow-md
Transition: transition-shadow duration-200
```

**Chips/Badges**
```
Padding: px-2.5 py-0.5
Font: text-xs font-medium
Radius: rounded-full
Variantes: default, salud (sky), textil (burgundy), outline
```

**Tabs**
```
Container: border-b border-border
Tab: px-4 py-2 text-sm font-medium
Active: border-b-2 border-brand text-foreground
Inactive: text-muted-foreground hover:text-foreground
```

**Acordeones FAQ**
```
Item: border-b border-border
Trigger: py-4 font-medium flex justify-between
Content: pb-4 text-muted-foreground
Icon: ChevronDown con rotación animada
```

**Formularios**
```
Input:
  - h-10 px-3
  - border border-border rounded-lg
  - focus:ring-2 focus:ring-brand/20 focus:border-brand
  - placeholder:text-muted-foreground

Label: text-sm font-medium mb-1.5
Helper: text-xs text-muted-foreground mt-1
Error: text-xs text-error mt-1
```

**Modal**
```
Overlay: bg-black/50 backdrop-blur-sm
Content: bg-background rounded-2xl shadow-xl
Padding: p-6
Max-width: max-w-lg
Animation: fade + scale
```

**Footer**
```
Background: bg-muted
Padding: py-16
Grid: 4 columnas desktop, stack mobile
Links: text-sm text-muted-foreground hover:text-foreground
```

---

### 3. Wireframes y Jerarquía de Encabezados

#### HOME

```
┌──────────────────────────────────────────────────────────────┐
│ NAVBAR                                                       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  H1: "Conectamos sistemas de salud                           │
│       e imprimimos tu identidad"                             │
│                                                              │
│  Subtítulo: "Interoperabilidad clínica + Personalización     │
│              textil DTF. Un equipo, dos especialidades."     │
│                                                              │
│  ┌────────────────┐   ┌────────────────┐                    │
│  │ 🏥 SALUD       │   │ 👕 TEXTIL DTF  │                    │
│  │ Integración de │   │ Poleras,       │                    │
│  │ sistemas       │   │ uniformes...   │                    │
│  │ [Explorar]     │   │ [Explorar]     │                    │
│  └────────────────┘   └────────────────┘                    │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  H2: "¿Por qué DMC Projects?"                               │
│                                                              │
│  [Card] [Card] [Card] [Card]                                │
│  Expertise  Flexibilidad  Compromiso  Soporte               │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  H2: "Interoperabilidad en Salud"                           │
│  [Preview servicios + CTA]                                   │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  H2: "Personalización Textil DTF"                           │
│  [Preview servicios + galería mini + CTA]                    │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  H2: "Proyectos Destacados"                                 │
│  [Filtro: Todos | Salud | Textil]                           │
│  [Card][Card][Card][Card]                                    │
│  [Ver portafolio completo →]                                 │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  H2: "Lo que dicen nuestros clientes"                       │
│  [Testimonial slider]                                        │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  CTA FINAL                                                   │
│  "¿Listo para comenzar?"                                     │
│  [Contactar Salud]  [Cotizar DTF]                           │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
└──────────────────────────────────────────────────────────────┘
```

#### SALUD

```
H1: "Interoperabilidad e Integración de Sistemas Clínicos"
  H2: "El problema"
  H2: "Nuestros servicios"
    H3: Levantamiento de flujos
    H3: Diseño de integración
    H3: Conectores y transformación
    H3: Implementación de motores
    H3: Monitoreo y trazabilidad
    H3: Soporte y hardening
  H2: "Tecnologías y estándares"
  H2: "Nuestro proceso"
  H2: "Casos de éxito"
  H2: "Preguntas frecuentes"
```

#### TEXTIL DTF

```
H1: "Personalización Textil con Impresión DTF"
  H2: "¿Qué es DTF?"
  H2: "Nuestros servicios"
    H3: Poleras
    H3: Polerones
    H3: Uniformes corporativos
    H3: Merchandising
  H2: "El proceso DTF"
  H2: "Recomendaciones de diseño"
  H2: "Volúmenes y tiempos"
  H2: "Galería de trabajos"
  H2: "Preguntas frecuentes"
```

---

### 4. Microinteracciones y Motion

| Elemento | Interacción | Implementación |
|----------|-------------|----------------|
| Navbar | Scroll → fondo sólido | `useScroll` + opacity transition |
| Botones | Hover → scale + shadow | `hover:scale-[1.02] hover:shadow-md` |
| Cards | Hover → elevación | `hover:-translate-y-1 hover:shadow-lg` |
| Links | Hover → underline animado | Pseudo-element con width transition |
| Página | Entrada → fade up | Framer Motion `initial/animate` |
| Secciones | Scroll → reveal | Intersection Observer + fade-up |
| Tabs | Switch → slide indicator | Animated underline position |
| Acordeón | Open/close | Height animation + chevron rotate |
| Modal | Open → backdrop fade + scale | Framer Motion `AnimatePresence` |
| Imágenes | Load → skeleton → fade | Skeleton + opacity transition |
| Formulario | Submit → loading state | Button spinner + disabled state |
| Toast | Appear → slide + fade | `sonner` library |

**Transiciones globales:**
```css
transition-colors: 150ms
transition-opacity: 200ms
transition-transform: 200ms
transition-shadow: 200ms
easing: cubic-bezier(0.4, 0, 0.2, 1)
```

---

### 5. Responsive Breakpoints

| Breakpoint | Ancho | Comportamiento |
|------------|-------|----------------|
| Mobile | 375px | Stack vertical, hamburger menu, touch targets 44px |
| Tablet | 768px | Grid 2 cols, menú visible parcial |
| Desktop | 1440px | Grid completo, hover states, menú full |

**Comportamientos específicos:**

| Elemento | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Navbar | Hamburger | Hamburger | Full menu |
| Hero cards | Stack vertical | 2 cols | 2 cols con hover |
| Service grid | 1 col | 2 cols | 3-4 cols |
| Footer | Stack | 2x2 grid | 4 cols |
| Testimonials | 1 visible | 2 visible | 3 visible |

---

### 6. Accesibilidad — Checklist QA

| Criterio | Implementación |
|----------|----------------|
| Contraste | Mínimo 4.5:1 texto, 3:1 elementos UI |
| Focus visible | `focus-visible:ring-2 focus-visible:ring-brand` |
| Skip link | Primer elemento: "Saltar al contenido" |
| Landmarks | `<header>`, `<nav>`, `<main>`, `<footer>` |
| Alt text | Todas las imágenes con alt descriptivo |
| Aria labels | Iconos-only buttons con `aria-label` |
| Heading order | H1 → H2 → H3 sin saltos |
| Form labels | Todos los inputs con label asociado |
| Error messages | `aria-describedby` + `role="alert"` |
| Reduced motion | `prefers-reduced-motion` respetado |
| Keyboard nav | Tab order lógico, Enter/Space funcional |
| Touch targets | Mínimo 44x44px en mobile |

---

## D) COPYWRITING COMPLETO

### HOME

#### Hero — Versión A (Equilibrada)
```
H1: "Conectamos sistemas de salud e imprimimos tu identidad"

Subtítulo: Especialistas en interoperabilidad clínica y personalización
textil DTF. Dos líneas de negocio, un mismo compromiso con la excelencia.

CTA 1: Explorar Salud
CTA 2: Explorar Textil
```

#### Hero — Versión B (Más directa)
```
H1: "Integración de datos clínicos + Impresión DTF profesional"

Subtítulo: DMC Projects resuelve dos desafíos distintos con el mismo
nivel de precisión y compromiso. ¿Cuál es el tuyo?

CTA 1: Necesito integrar sistemas
CTA 2: Quiero personalizar prendas
```

#### Sección Beneficios
```
H2: ¿Por qué elegir DMC Projects?

Card 1 - Expertise Comprobado
"Años de experiencia en cada línea de negocio, no somos improvisados."

Card 2 - Flexibilidad Total
"Desde un proyecto puntual hasta soporte continuo. Desde 1 prenda hasta miles."

Card 3 - Compromiso Real
"Plazos claros, comunicación constante, resultados medibles."

Card 4 - Soporte Continuo
"No desaparecemos después de entregar. Estamos cuando nos necesitas."
```

#### Preview Salud
```
H2: Interoperabilidad en Salud

"Tus sistemas clínicos deberían comunicarse sin fricciones. HIS, RIS, LIS,
PACS... los conectamos usando estándares como HL7, FHIR y CDA. Implementamos
y mantenemos motores de integración como Mirth Connect y OIE."

CTA: Conocer servicios de integración →
```

#### Preview Textil
```
H2: Personalización Textil DTF

"Tu marca merece verse increíble en cada prenda. Impresión DTF con colores
vibrantes, detalles nítidos y durabilidad garantizada. Poleras, polerones,
uniformes y más."

CTA: Ver catálogo y cotizar →
```

#### CTA Final
```
H2: ¿Listo para comenzar?

"Cuéntanos sobre tu proyecto. Ya sea integrar sistemas clínicos o
personalizar prendas, estamos listos para ayudarte."

CTA 1: Agendar reunión técnica (Salud)
CTA 2: Solicitar cotización (Textil)
```

---

### PÁGINA SALUD — Interoperabilidad e Integración

#### Hero
```
H1: Interoperabilidad e Integración de Sistemas Clínicos

"Conectamos tus sistemas de salud para que la información fluya de forma
segura, trazable y conforme a estándares internacionales. Desde hospitales
hasta laboratorios, hacemos que tus datos trabajen juntos."

CTA: Agendar evaluación técnica
```

#### El Problema
```
H2: La fragmentación de datos clínicos es costosa

"Sistemas que no se comunican generan:
• Errores de transcripción manual
• Demoras en la atención
• Información duplicada o inconsistente
• Riesgos de seguridad del paciente
• Incumplimiento normativo

La interoperabilidad no es un lujo, es una necesidad operativa."
```

#### Servicios
```
H2: Nuestros Servicios de Integración

H3: Levantamiento de Flujos
"Mapeamos tus procesos actuales, identificamos puntos de integración y
documentamos requerimientos técnicos y de negocio."

H3: Diseño de Integración
"Definimos la arquitectura de integración óptima: protocolos, transformaciones,
validaciones y manejo de errores."

H3: Desarrollo de Conectores
"Construimos interfaces específicas para tus sistemas: HIS, RIS, LIS, PACS,
ERP, y cualquier aplicación con capacidad de integración."

H3: Normalización y Transformación
"Convertimos datos entre formatos y estándares. HL7 v2 ↔ FHIR, XML ↔ JSON,
y cualquier transformación que requieras."

H3: Implementación de Motores
"Instalamos, configuramos y optimizamos Mirth Connect u OIE según tus
necesidades de volumen, redundancia y monitoreo."

H3: Monitoreo y Trazabilidad
"Dashboards en tiempo real, alertas proactivas y logs completos para
auditoría y troubleshooting."

H3: Soporte y Hardening
"Mantenimiento preventivo, actualizaciones de seguridad, optimización
de rendimiento y respuesta ante incidentes."

H3: Documentación Técnica
"Manuales de operación, diagramas de arquitectura, especificaciones de
interfaces y guías de troubleshooting."
```

#### Tecnologías
```
H2: Tecnologías y Estándares que Dominamos

Motores de Integración:
• Mirth Connect (NextGen)
• Open Integration Engine (OIE)

Estándares de Mensajería:
• HL7 v2.x (ADT, ORM, ORU, SIU, MDM...)
• HL7 FHIR R4
• CDA (Clinical Document Architecture)

Perfiles IHE:
• PIX/PDQ (Gestión de pacientes)
• XDS (Documentos)
• ATNA (Auditoría)

Protocolos:
• MLLP, HTTP/REST, SOAP
• TCP/IP, SFTP, AS2

Bases de Datos:
• PostgreSQL, MySQL, SQL Server, Oracle
```

#### Proceso
```
H2: Nuestro Proceso de Trabajo

1. Descubrimiento
   "Entendemos tu contexto: sistemas actuales, necesidades, restricciones
   y objetivos de negocio."

2. Diseño
   "Proponemos arquitectura de integración con diagramas, especificaciones
   y plan de implementación."

3. Desarrollo
   "Construimos las interfaces en ambiente de desarrollo con pruebas
   unitarias y de integración."

4. Pruebas
   "Validamos en ambiente de QA con datos representativos y escenarios
   de error controlados."

5. Despliegue
   "Implementamos en producción con plan de rollback y monitoreo intensivo."

6. Operación
   "Soporte continuo, monitoreo proactivo y evolución según necesidades."
```

#### FAQ Salud
```
H2: Preguntas Frecuentes

P: ¿Qué sistemas pueden integrar?
R: "Prácticamente cualquier sistema con capacidad de integración: HIS
(ej. RAYEN, Medisyn), RIS, LIS, PACS, ERP, sistemas propietarios, APIs
REST/SOAP, bases de datos, archivos planos, etc."

P: ¿Trabajan con Mirth Connect o con OIE?
R: "Ambos. Evaluamos cuál es más adecuado según tu contexto: volumen de
mensajes, presupuesto, equipo interno, integraciones existentes."

P: ¿Pueden mantener integraciones que ya tenemos?
R: "Sí. Hacemos takeover de integraciones existentes, documentamos,
optimizamos y damos soporte continuo."

P: ¿Trabajan de forma remota o presencial?
R: "Principalmente remoto, con visitas presenciales cuando el proyecto
lo requiere (levantamiento inicial, capacitaciones, go-live)."

P: ¿Qué pasa si algo falla en producción?
R: "Tenemos protocolos de respuesta según SLA acordado. Monitoreo 24/7
disponible según plan de soporte contratado."

P: ¿Pueden ayudar con cumplimiento normativo?
R: "Sí. Diseñamos integraciones considerando trazabilidad, auditoría y
requisitos de la Superintendencia de Salud cuando aplica."
```

#### CTA Salud
```
H2: Hablemos de tu proyecto de integración

"Agenda una reunión técnica sin costo. Evaluamos tu situación actual,
entendemos tus necesidades y te proponemos un camino."

CTA: Agendar reunión técnica
Secundario: Enviar consulta por email
```

---

### PÁGINA TEXTIL DTF

#### Hero
```
H1: Personalización Textil con Impresión DTF Profesional

"Tu diseño, impreso con calidad excepcional en la prenda que elijas.
Poleras, polerones, uniformes corporativos y más. Desde 1 unidad hasta
pedidos mayoristas."

CTA: Cotizar ahora
```

#### ¿Qué es DTF?
```
H2: ¿Qué es la impresión DTF?

"DTF (Direct to Film) es una tecnología de impresión textil que permite
transferir diseños full color a prácticamente cualquier tela. A diferencia
del sublimado, funciona en algodón, poliéster y mezclas. A diferencia del
vinilo, permite degradados, fotos y detalles complejos.

El resultado: colores vibrantes, tacto suave, excelente durabilidad al
lavado y flexibilidad total de diseño."
```

#### Servicios DTF
```
H2: Nuestros Servicios

H3: Poleras
"Algodón, poliéster o mezcla. Cuello redondo o polo. Desde talla XS hasta
XXXL. Tu diseño en el pecho, espalda o manga."

H3: Polerones
"Con o sin capucha, canguro o full zipper. Ideales para equipos de trabajo,
promociones y merchandising."

H3: Uniformes Corporativos
"Polos, camisas, chaquetas. Con tu logo y los datos que necesites.
Cotización especial por volumen."

H3: Merchandising y Promocionales
"Bolsos, gorros, delantales y más. Si es tela, probablemente lo podemos
personalizar."
```

#### Proceso DTF
```
H2: El Proceso DTF

1. Nos envías tu diseño
   "Archivo en alta resolución (PNG, AI, PSD). Te asesoramos gratis si
   necesitas ajustes."

2. Preparamos el arte
   "Optimizamos colores, tamaño y ubicación para el mejor resultado."

3. Imprimimos en film
   "Tu diseño se imprime con tintas especiales en film de transferencia."

4. Transferimos a la prenda
   "Aplicamos calor y presión controlados para adherir el diseño."

5. Control de calidad
   "Revisamos cada prenda antes de embalar."

6. Entregamos
   "Retiro en [CIUDAD] o despacho a todo Chile."
```

#### Recomendaciones
```
H2: Recomendaciones de Diseño

✓ Resolución mínima 300 DPI
✓ Formato PNG con fondo transparente (ideal) o AI/PSD
✓ Colores en CMYK para mayor fidelidad
✓ Considera el color de la prenda al diseñar
✓ Tamaño máximo de impresión: 30x40 cm aprox.

⚠️ Evita:
• Archivos de baja resolución (se pixelan)
• Diseños con líneas muy finas (menos de 1mm)
• Esperar que el color sea 100% idéntico a pantalla
```

#### Volúmenes y Tiempos
```
H2: Volúmenes y Tiempos de Entrega

| Cantidad | Tiempo estimado* |
|----------|------------------|
| 1-10     | 3-5 días hábiles |
| 11-50    | 5-7 días hábiles |
| 51-100   | 7-10 días hábiles|
| 100+     | Consultar        |

*Desde aprobación de arte y pago. No incluye despacho.

Mínimos: No hay mínimo. Puedes pedir desde 1 unidad.
Mayoristas: Precios especiales desde 50 unidades.
```

#### FAQ DTF
```
H2: Preguntas Frecuentes

P: ¿Cuántos lavados aguanta?
R: "Con cuidado normal (lavar al revés, no usar secadora), la impresión
dura la vida útil de la prenda. Garantizamos mínimo 50 lavados sin
deterioro visible."

P: ¿Pueden imprimir fotos?
R: "Sí. DTF permite full color, degradados y fotos. El resultado depende
de la calidad de la imagen original."

P: ¿Qué pasa si no tengo diseño?
R: "Podemos ayudarte a crear uno simple o conectarte con diseñadores.
Consulta por este servicio adicional."

P: ¿Puedo elegir la marca de la prenda?
R: "Sí. Trabajamos con varias marcas y calidades. También puedes traer
tus propias prendas."

P: ¿Hacen envíos a regiones?
R: "Sí, a todo Chile vía Starken, Chilexpress o el courier de tu preferencia.
Costo de envío adicional."

P: ¿Tienen tienda física?
R: "Trabajamos principalmente con retiro coordinado y despacho. Visitas
con cita previa en [CIUDAD]."
```

#### CTA DTF
```
H2: ¿Listo para personalizar?

"Cuéntanos qué necesitas y te enviamos una cotización en menos de 24 horas."

CTA: Cotizar por WhatsApp
Secundario: Completar formulario
```

---

### PÁGINA NOSOTROS

```
H1: Sobre DMC Projects

"Somos un equipo especializado en dos mundos que parecen distintos pero
comparten la misma esencia: precisión, atención al detalle y compromiso
con el resultado."

H2: Nuestra Historia

"DMC Projects nació de la convicción de que se puede ser especialista
sin ser inflexible. [NOMBRE FUNDADOR] comenzó en el mundo de la
interoperabilidad en salud, resolviendo el caos de sistemas que no se
comunican. Paralelamente, la pasión por la personalización textil se
convirtió en una segunda línea de negocio.

Hoy, DMC Projects opera ambas líneas con el mismo rigor: entender el
problema, diseñar la solución correcta, ejecutar con calidad y dar
soporte real."

H2: Nuestros Valores

• Claridad: Explicamos lo que hacemos sin jerga innecesaria.
• Compromiso: Si dijimos que se puede, se puede.
• Calidad: No entregamos algo que no nos enorgullezca.
• Flexibilidad: Nos adaptamos a tu contexto, no al revés.

H2: Cómo Trabajamos

"Ya sea un proyecto de integración de 6 meses o un pedido de 20 poleras,
nuestro enfoque es el mismo:

1. Escuchamos primero
2. Proponemos con claridad
3. Ejecutamos con responsabilidad
4. Entregamos con orgullo
5. Seguimos disponibles"
```

---

### PÁGINA CONTACTO

#### Mensajes WhatsApp Predefinidos

**Salud:**
```
"Hola, me interesa conversar sobre integración de sistemas clínicos.
Trabajo en [INSTITUCIÓN] y necesitamos [DESCRIBIR NECESIDAD BREVEMENTE]."
```

**Textil - Cotización:**
```
"Hola, quiero cotizar impresión DTF. Necesito aproximadamente [CANTIDAD]
[TIPO DE PRENDA] con [DESCRIBIR DISEÑO]. ¿Me pueden enviar precios?"
```

**Textil - Consulta:**
```
"Hola, tengo algunas preguntas sobre impresión DTF antes de cotizar.
¿Tienen un momento para conversar?"
```

---

### OBJECIONES Y RESPUESTAS

#### Salud (6)

| Objeción | Respuesta |
|----------|-----------|
| "Ya tenemos un proveedor de integración" | "Perfecto. Podemos complementar o ser tu backup. También hacemos auditorías de integraciones existentes para identificar mejoras." |
| "Mirth/OIE es muy complejo para nosotros" | "Por eso existimos. Nos encargamos de la complejidad técnica para que tu equipo se enfoque en lo clínico." |
| "No tenemos presupuesto este año" | "Entendemos. Podemos hacer un levantamiento inicial sin costo para que tengas una propuesta lista cuando haya presupuesto." |
| "¿Y si se caen las integraciones?" | "Implementamos monitoreo, alertas y redundancia según tu nivel de criticidad. Además, ofrecemos soporte con SLA definido." |
| "Nuestros sistemas son muy antiguos" | "Hemos integrado sistemas legacy de todo tipo. HL7 v2.3, archivos planos, bases de datos directas... lo que sea necesario." |
| "¿Cumplen con normativa de salud?" | "Diseñamos con trazabilidad y auditoría desde el inicio. Conocemos los requerimientos de la Superintendencia de Salud." |

#### Textil DTF (6)

| Objeción | Respuesta |
|----------|-----------|
| "Es más caro que serigrafía" | "Para tirajes pequeños y diseños complejos, DTF es más conveniente. Serigrafía conviene sobre 100 unidades del mismo diseño." |
| "No sé si el diseño quedará bien" | "Te enviamos una muestra digital (mockup) antes de imprimir. Si no te convence, ajustamos sin costo." |
| "He tenido malas experiencias con impresión textil" | "Entendemos. Por eso garantizamos durabilidad mínima de 50 lavados y hacemos control de calidad prenda por prenda." |
| "Necesito las prendas para ayer" | "Tenemos opción express para pedidos pequeños (consultar disponibilidad y costo adicional)." |
| "No tengo un diseño profesional" | "Podemos ayudarte a crear uno simple o recomendarte diseñadores. Un buen diseño es clave para un buen resultado." |
| "¿Por qué no usar vinilo que es más barato?" | "Vinilo funciona para textos y logos simples. DTF permite fotos, degradados y diseños complejos con mejor tacto." |

---

## E) SEO TÉCNICO Y CONTENIDOS

### 1. Keywords por Página

#### Home
```
Principal: "DMC Projects Chile"
Secundarias:
- interoperabilidad sistemas salud Chile
- integración HL7 FHIR Chile
- impresión DTF Santiago
- personalización poleras Chile
```

#### Salud
```
Principal: "integración sistemas clínicos Chile"
Secundarias:
- interoperabilidad salud
- Mirth Connect Chile
- integración HIS RIS LIS
- HL7 FHIR implementación
- motor integración salud
```

#### Textil
```
Principal: "impresión DTF Chile"
Secundarias:
- poleras personalizadas Santiago
- DTF polerones
- uniformes corporativos personalizados
- estampado textil DTF
- impresión poleras por mayor
```

### 2. Meta Tags

| Página | Title | Meta Description |
|--------|-------|------------------|
| Home | DMC Projects - Interoperabilidad en Salud e Impresión DTF | Especialistas en integración de sistemas clínicos (HL7, FHIR, Mirth) y personalización textil DTF. Poleras, uniformes y más. Chile. |
| Salud | Integración de Sistemas Clínicos - DMC Projects | Conectamos HIS, RIS, LIS y PACS con HL7, FHIR y motores como Mirth Connect. Interoperabilidad para hospitales y clínicas en Chile. |
| Textil | Impresión DTF Profesional - Poleras y Uniformes - DMC Projects | Personalización textil con tecnología DTF. Poleras, polerones, uniformes corporativos. Desde 1 unidad. Santiago, Chile. |
| Portafolio | Casos de Éxito y Trabajos - DMC Projects | Proyectos de integración en salud y trabajos de impresión DTF. Conoce lo que hemos logrado. |
| Nosotros | Sobre DMC Projects - Interoperabilidad y DTF | Conoce al equipo detrás de DMC Projects. Especialistas en integración de sistemas de salud y personalización textil. |
| Contacto | Contacto - DMC Projects | Agenda una reunión, solicita cotización o escríbenos. Integración de sistemas de salud e impresión DTF en Chile. |

### 3. Schema.org

```json
// LocalBusiness (Home)
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DMC Projects",
  "description": "Especialistas en interoperabilidad de sistemas de salud e impresión textil DTF",
  "url": "https://[DOMINIO]",
  "telephone": "+56[TELEFONO]",
  "email": "[EMAIL]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[CIUDAD]",
    "addressRegion": "Región Metropolitana",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LAT]",
    "longitude": "[LONG]"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$"
}

// Service (Salud)
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Integración de Sistemas Clínicos",
  "provider": {
    "@type": "LocalBusiness",
    "name": "DMC Projects"
  },
  "description": "Implementación de interoperabilidad con HL7, FHIR, Mirth Connect para hospitales y clínicas",
  "areaServed": {
    "@type": "Country",
    "name": "Chile"
  },
  "serviceType": "Integración de Sistemas de Salud"
}

// FAQPage (páginas con FAQ)
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué sistemas pueden integrar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prácticamente cualquier sistema con capacidad de integración: HIS, RIS, LIS, PACS, ERP..."
      }
    }
  ]
}
```

### 4. Plan de Contenidos (Blog)

#### Salud (5 artículos)

| Título | Objetivo | CTA |
|--------|----------|-----|
| "HL7 vs FHIR: ¿Cuál usar en tu proyecto de integración?" | Educar, posicionar expertise | Agendar consulta |
| "5 señales de que tu hospital necesita un motor de integración" | Generar awareness del problema | Evaluación gratuita |
| "Guía práctica: Implementando Mirth Connect paso a paso" | Tráfico técnico, credibilidad | Descargar guía completa |
| "Interoperabilidad en Chile: Estado actual y normativa" | SEO local, autoridad | Newsletter |
| "Errores comunes en integraciones HL7 (y cómo evitarlos)" | Educar, generar confianza | Auditoría de integraciones |

#### Textil DTF (5 artículos)

| Título | Objetivo | CTA |
|--------|----------|-----|
| "DTF vs Sublimado vs Serigrafía: ¿Qué técnica elegir?" | Educar, comparar | Cotizar DTF |
| "Cómo preparar tu diseño para impresión DTF perfecta" | Reducir fricción pre-compra | Enviar diseño |
| "Ideas de merchandising corporativo para tu empresa" | Inspirar, generar leads B2B | Cotización corporativa |
| "¿Cuánto cuesta personalizar poleras en Chile? Guía 2024" | SEO transaccional | Cotizar ahora |
| "Cuidados post-impresión: Cómo hacer que tu DTF dure más" | Post-venta, fidelización | Seguir en redes |

### 5. Performance (Core Web Vitals)

| Métrica | Objetivo | Técnicas |
|---------|----------|----------|
| LCP | < 2.5s | Optimizar hero image, preload fonts, SSR |
| FID | < 100ms | Code splitting, defer non-critical JS |
| CLS | < 0.1 | Reservar espacio para imágenes, no insertar contenido dinámico arriba |
| TTFB | < 600ms | Edge caching, optimizar servidor |

**Imágenes:**
- Formato: WebP con fallback JPG
- Lazy loading nativo
- Responsive images con srcset
- Dimensiones explícitas (width/height)
- CDN para assets

---

## F) IMPLEMENTACIÓN TÉCNICA

### Stack Recomendado

```
Framework:    Next.js 14+ (App Router)
Styling:      Tailwind CSS + CSS Variables
Components:   shadcn/ui (base) + custom
Animation:    Framer Motion
Forms:        React Hook Form + Zod
Icons:        Lucide React
Analytics:    Google Analytics 4 + Vercel Analytics
Hosting:      Vercel
CMS:          (Opcional) Sanity / Contentlayer para blog
```

### Estructura de Carpetas

```
/app
  /layout.tsx
  /page.tsx (Home)
  /salud
    /page.tsx
    /servicios/page.tsx
    /casos/page.tsx
  /textil
    /page.tsx
    /catalogo/page.tsx
    /cotizar/page.tsx
  /portafolio/page.tsx
  /nosotros/page.tsx
  /blog
    /page.tsx
    /[slug]/page.tsx
  /contacto/page.tsx
  /globals.css

/components
  /ui (shadcn components)
  /layout
    /navbar.tsx
    /footer.tsx
    /mobile-menu.tsx
  /home
    /hero.tsx
    /route-selector.tsx
    /benefits.tsx
    /testimonials.tsx
  /salud
    /services-grid.tsx
    /process-timeline.tsx
    /tech-stack.tsx
  /textil
    /product-grid.tsx
    /dtf-process.tsx
    /gallery.tsx
  /shared
    /section-header.tsx
    /cta-section.tsx
    /faq-accordion.tsx
    /contact-form.tsx
    /whatsapp-button.tsx

/lib
  /utils.ts
  /constants.ts
  /validations.ts

/public
  /images
  /fonts
```

### Integraciones

| Servicio | Implementación |
|----------|----------------|
| WhatsApp | Link directo con mensaje pre-filled: `https://wa.me/56XXXXXXXXX?text=...` |
| Formulario | React Hook Form → API Route → Email (Resend/SendGrid) |
| Calendario | Embed Calendly o Cal.com |
| Analytics | GA4 via @next/third-parties + Vercel Analytics |
| CRM (opcional) | Webhook a HubSpot/Notion/Airtable |

---

## VARIANTES VISUALES

### Variante A: Corporativa Sobria

- Fondo blanco predominante
- Tipografía más conservadora (pesos 400-600)
- Colores neutros con acentos puntuales
- Espaciado generoso
- Animaciones mínimas y sutiles
- Fotografía profesional, formal
- Cards con bordes definidos

### Variante B: Creativa/Urbana

- Modo oscuro por defecto
- Tipografía bold, pesos 700-800
- Colores más saturados y contrastantes
- Fondos con gradientes o texturas sutiles
- Animaciones más expresivas
- Fotografía estilo "studio shot", luces dramáticas
- Cards con sombras prominentes, sin bordes

**Recomendación:** Empezar con Variante A como base, con toggle a modo oscuro que incorpore elementos de Variante B.

---

## PLACEHOLDERS A COMPLETAR

```
[CIUDAD] = Ciudad/Comuna principal
[TELEFONO] = +56 9 XXXX XXXX
[EMAIL] = contacto@dmcprojects.cl
[DOMINIO] = dmcprojects.cl
[INSTAGRAM] = @dmcprojects
[LINKEDIN] = /company/dmcprojects
[HORARIO] = Lunes a Viernes, 9:00 - 18:00
[DIRECCION] = (si aplica)
[NOMBRE FUNDADOR] = Nombre del fundador/a
[AÑOS EXPERIENCIA] = X años
```

---

*Documento generado como guía integral. Ajustar según feedback y datos reales.*
