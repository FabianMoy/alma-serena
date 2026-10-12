import { Facebook, Instagram, Twitter, type LucideIcon } from "lucide-react";
import { nav, site, socials } from "@/data/content";
import Container from "@/components/ui/Container";

const socialIcons: Record<string, LucideIcon> = { Facebook, Instagram, "Twitter/X": Twitter };

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-sage-100">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl text-white">{site.name}</p>
          <p className="mt-3 max-w-sm leading-relaxed text-sage-200">{site.tagline} Terapia individual para adultos y adolescentes, presencial en {site.city} y online.</p>
        </div>
        <nav aria-label="Pie de página">
          <p className="font-medium text-white">Navegación</p>
          <ul className="mt-3 space-y-1">
            {nav.map((item) => (
              <li key={item.href}><a href={item.href} className="inline-block py-1 text-sage-200 transition-colors hover:text-white">{item.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-medium text-white">Redes sociales</p>
          <ul className="mt-3 space-y-1">
            {socials.map((s) => {
              const Icon = socialIcons[s.name];
              return (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-1 text-sage-200 transition-colors hover:text-white">
                    <Icon aria-hidden className="size-4" />{s.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-sage-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. Sitio demostrativo con datos ficticios.</p>
          <a href="/privacidad" className="hover:text-white">Aviso de privacidad</a>
        </Container>
      </div>
    </footer>
  );
}
