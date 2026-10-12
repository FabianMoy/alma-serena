import { steps } from "@/data/content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Process() {
  return (
    <section id="proceso" aria-labelledby="process-title" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="process-title" title="Cómo funciona" description="Un inicio sencillo, sin compromisos ni trámites complicados." />
        </Reveal>
        <ol className="relative space-y-12 before:absolute before:bottom-2 before:left-[1.4rem] before:top-2 before:w-px before:bg-sage-300">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 100} className="relative flex gap-6">
                <span aria-hidden className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-sage-300 bg-ivory font-serif text-lg text-sage-700">{i + 1}</span>
                <div className="pt-2">
                  <h3 className="font-serif text-2xl text-sage-900">{step.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
