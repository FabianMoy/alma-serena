import { Check } from "lucide-react";
import Image from "next/image";
import { images, site, values } from "@/data/content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="sobre-mi" aria-labelledby="about-title" className="py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-sand lg:max-w-none">
            <Image src={images.about.src} alt={images.about.alt} fill sizes="(min-width: 1024px) 35vw, 80vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading id="about-title" title="Pedir ayuda es una forma de cuidarte" />
          <p className="mt-2 text-sage-700">{site.psychologist} · {site.specialty}</p>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>Creo que pedir ayuda no es una señal de debilidad, sino una forma de empezar a cuidarnos. Muchas veces solo necesitamos un lugar donde poner en palabras lo que sentimos, sin prisa y sin que nadie nos juzgue.</p>
            <p>Trabajo de manera cercana y transparente: escucho primero, propongo después y ajusto el camino contigo. Cada persona tiene su propio ritmo, y el proceso lo respeta.</p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v} className="flex items-center gap-3 text-sage-900">
                <Check aria-hidden className="size-5 text-sage-600" />{v}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
