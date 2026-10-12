import { testimonials } from "@/data/content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-20 sm:py-28">
      <Container>
        <Reveal><SectionHeading id="testimonials-title" title="Lo que otras personas valoran del proceso" /></Reveal>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={i * 80}>
                <figure>
                  <blockquote className="font-serif text-xl leading-relaxed text-sage-900">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm text-ink-soft">{t.name}</figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-ink-soft">Los nombres y testimonios mostrados son demostrativos y no corresponden a personas reales.</p>
      </Container>
    </section>
  );
}
