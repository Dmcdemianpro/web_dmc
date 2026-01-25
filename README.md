# DMC Projects Spa - Sitio Web

Sitio web corporativo para DMC Projects Spa con dos areas de negocio:
- **Salud Digital**: Interoperabilidad e integracion de sistemas clinicos (HL7, FHIR, Mirth Connect)
- **Personalizacion Textil**: Impresion DTF profesional en poleras, polerones y uniformes

## Tecnologias

- **Framework**: Next.js 16 con App Router
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Lenguaje**: TypeScript
- **Estado**: React Context API

## Requisitos

- Node.js 18+
- npm o yarn

## Instalacion

```bash
# Clonar el repositorio
git clone https://github.com/Dmcdemianpro/web_dmc.git

# Entrar al directorio
cd web_dmc

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

El sitio estara disponible en [http://localhost:3000](http://localhost:3000)

## Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx              # Pagina de bienvenida (selector)
│   ├── salud/                # Seccion Salud Digital
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── components/
│   ├── textil/               # Seccion Personalizacion Textil
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── components/
│   ├── admin/                # Panel de administracion
│   │   └── page.tsx
│   └── contacto/             # Pagina de contacto
├── components/               # Componentes compartidos
├── context/                  # Context providers
│   └── ContentContext.tsx    # Manejo de contenido editable
└── lib/                      # Utilidades
    └── utils.ts              # WhatsApp, contacto, etc.
```

## Panel de Administracion

Accede al panel de administracion en `/admin`

**Credenciales por defecto:**
- Usuario: `admin`
- Contrasena: `dmc2024`

Desde el panel puedes editar:
- Informacion general del sitio
- Pagina de bienvenida
- Contenido de Hero sections
- Servicios de Salud Digital
- Servicios de Textil DTF
- Galeria de imagenes (Textil)
- Informacion de contacto

## Rutas Principales

| Ruta | Descripcion |
|------|-------------|
| `/` | Pagina de bienvenida con selector |
| `/salud` | Seccion Salud Digital |
| `/textil` | Seccion Personalizacion Textil |
| `/admin` | Panel de administracion |
| `/contacto` | Formulario de contacto |

## Contacto

- **WhatsApp**: +56 9 4228 7787
- **Email**: contacto@dmcprojects.cl

## Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Compilar para produccion
npm run start    # Ejecutar build de produccion
npm run lint     # Verificar codigo
```

## Despliegue

El proyecto esta optimizado para desplegar en:
- Vercel (recomendado)
- Netlify
- Cualquier servidor con soporte Node.js

## Licencia

Todos los derechos reservados - DMC Projects Spa
