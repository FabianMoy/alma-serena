import { MapPin } from "lucide-react";
import { modalities, site } from "@/data/content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Modalities() {
  return (
    <section id="modalidades" aria-labelledby="modalities-title" className="bg-sage-50 py-20 sm:py-24">
      <Container>
        <Reveal><SectionHeading id="modalities-title" title="Elige cómo prefieres tus sesiones" /></Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {modalities.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="h-full rounded-2xl border border-sage-200 bg-ivory p-8">
                <Icon aria-hidden className="size-7 text-sage-600" strokeWidth={1.5} />
                <h3 className="mt-4 font-serif text-2xl text-sage-900">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 text-ink-soft"><MapPin aria-hidden className="size-4 text-sage-600" />{site.city}</p>
      </Container>
    </section>
  );
}
