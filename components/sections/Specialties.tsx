import { specialties } from "@/data/content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Specialties() {
  return (
    <section id="especialidades" aria-labelledby="specialties-title" className="bg-sand/50 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="specialties-title" title="Áreas en las que puedo acompañarte" description="Cada persona llega con una historia distinta. Estas son las áreas en las que trabajo con más frecuencia." />
        </Reveal>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={(i % 3) * 80} className="h-full border-t border-sage-300 pt-6">
                <Icon aria-hidden className="size-7 text-sage-600" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-xl text-sage-900">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
