"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-sage-200/60 bg-ivory/90 backdrop-blur" : "border-b border-transparent bg-transparent"}`}>
      <Container className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
        <a href="/#inicio" className="font-serif text-xl text-sage-900">{site.shortName}<span className="text-ink-soft"> Psicología</span></a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem] text-ink-soft">
            {nav.map((item) => (
              <li key={item.href}><a href={item.href} className="transition-colors hover:text-sage-800">{item.label}</a></li>
            ))}
          </ul>
        </nav>
        <Button href="/#contacto" className="hidden lg:inline-flex">Agendar sesión</Button>
        <button
          type="button"
          className="-mr-2 inline-flex size-12 items-center justify-center rounded-full text-sage-900 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </Container>
      <div id="menu-movil" inert={!open} className={`grid transition-[grid-template-rows,opacity] duration-300 lg:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <Container className="pb-6">
            <nav aria-label="Móvil">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-sage-200/60 text-lg text-sage-900">{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button href="/#contacto" onClick={() => setOpen(false)} className="mt-5 w-full">Agendar sesión</Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
