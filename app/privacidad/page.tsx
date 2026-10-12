import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: `Aviso de privacidad | ${site.shortName}`,
  description: "Aviso de privacidad del sitio demostrativo de Alma Serena Psicología.",
  alternates: { canonical: "/privacidad" },
};

export default function Privacidad() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="font-serif text-4xl text-sage-900">Aviso de privacidad</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
        <p>Este es un sitio demostrativo con datos ficticios. El formulario de contacto no envía, almacena ni procesa información personal.</p>
        <p>Antes de publicar un sitio real, sustituye este texto por el aviso de privacidad que corresponda a tu negocio y a la normativa aplicable.</p>
      </div>
      <a href="/" className="mt-8 inline-block text-sage-700 underline underline-offset-4">Volver al inicio</a>
    </Container>
  );
}
