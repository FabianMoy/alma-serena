import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite los placeholders SVG de public/images. Al usar fotos JPG/WebP no afecta.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
