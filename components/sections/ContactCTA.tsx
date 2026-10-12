import { site } from "@/data/content";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";

export default function ContactCTA() {
  return (
    <section id="contacto" aria-labelledby="contact-title" className="bg-sage-800 py-20 sm:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading id="contact-title" light title="Empezar también es una forma de cuidarte." description="Cuéntame brevemente qué te gustaría trabajar y te propondré un horario para una primera conversación." />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#formulario" variant="light">Agendar una sesión</Button>
            <Button href={`mailto:${site.email}`} variant="outlineLight">Resolver una duda</Button>
          </div>
        </Reveal>
        <Reveal delay={100}><div id="formulario" className="scroll-mt-24"><ContactForm /></div></Reveal>
      </Container>
    </section>
  );
}
