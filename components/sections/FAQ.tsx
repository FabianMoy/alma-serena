import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FAQ() {
  return (
    <section id="preguntas" aria-labelledby="faq-title" className="bg-sand/50 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal><SectionHeading id="faq-title" title="Preguntas frecuentes" description="Si tu duda no está aquí, escríbeme y te respondo con gusto." /></Reveal>
        <Reveal delay={100}>
          <div className="divide-y divide-sage-300 border-y border-sage-300">
            {faqs.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-medium text-sage-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown aria-hidden className="size-5 shrink-0 text-sage-600 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="pb-4 leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
