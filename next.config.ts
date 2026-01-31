import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirigir /uploads/* a /api/uploads/* para servir archivos dinámicamente
  // Esto es necesario porque Next.js en producción no sirve archivos
  // añadidos a /public después del build
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: '/api/uploads/:path*',
      },
    ]
  },
};

export default nextConfig;
