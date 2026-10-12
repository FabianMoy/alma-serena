# Alma Serena Psicología — Landing page demo

## 1. Descripción
Landing page de una sola página para una psicóloga independiente ficticia (Dra. Valeria Montes). Todo el contenido, nombres, correos y redes son **ficticios**. El formulario es demostrativo: no envía ni guarda datos.

## 2. Tecnologías
Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Lucide React y `next/font` (Fraunces + Figtree).

## 3. Requisitos
Node.js 18.18 o superior. Conexión a internet durante `npm install` y para descargar las fuentes de Google en `dev`/`build`.

## 4. Instalación
```bash
npm install
```

## 5. Ejecución en desarrollo
```bash
npm run dev
```
Abre http://localhost:3000. Verificación de tipos: `npm run typecheck`.

## 6. Estructura
```text
app/            layout, page, globals.css, sitemap.ts, robots.ts, privacidad/
components/     layout/ (Header, Footer), sections/ (una por sección), ui/ (Button, Container, SectionHeading, Reveal)
data/content.ts Todo el contenido, SEO, redes e imágenes
public/images/  Imágenes del sitio
```

## 7. Cambiar colores
Edita los tokens `--color-*` dentro de `@theme` en `app/globals.css` (sage, ivory, sand, ink, clay). Se usan como clases Tailwind (`bg-sage-700`, `text-ink-soft`…).

## 8. Cambiar la información de la psicóloga
Edita `data/content.ts`: `site` (nombre, especialidad, ciudad, correo), `specialties`, `steps`, `testimonials`, `faqs`. El texto de la biografía está en `components/sections/About.tsx`.

## 9. Cambiar redes sociales
Edita el arreglo `socials` en `data/content.ts`. Se refleja en el footer y en el JSON-LD (`sameAs`).

## 10. Cambiar SEO
En `data/content.ts` (`site.url`, `title`, `description`, `keywords`). `app/layout.tsx` genera metadata, Open Graph, Twitter Card y canonical; `app/page.tsx` contiene el JSON-LD (`Psychologist`). Para una imagen social, agrega `app/opengraph-image.png` (1200×630).

## 11. Reemplazar las imágenes
`public/images/hero.svg` y `about.svg` son placeholders. Agrega tus fotos (por ejemplo `hero.jpg` y `about.jpg`, formato vertical 4:5) y actualiza las rutas en `images` dentro de `data/content.ts`. Escribe un `alt` descriptivo. Puedes borrar los SVG.

## 12. Producción
```bash
npm run build
npm run start
```
Antes de publicar: cambia `site.url` por tu dominio real, reemplaza los datos ficticios, el aviso de privacidad y los testimonios, y conecta el formulario a un servicio de tu elección (en `components/sections/ContactForm.tsx`).
