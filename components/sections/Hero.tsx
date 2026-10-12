import Image from "next/image";
import { images, site } from "@/data/content";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-sage-50 pb-16 pt-6 sm:pb-24 lg:pt-12">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="rise inline-block rounded-full bg-sage-100 px-4 py-1.5 text-sm text-sage-800">Psicología clínica · Atención personalizada</p>
          <h1 id="hero-title" className="rise mt-6 font-serif text-[2.6rem] leading-[1.08] text-sage-900 [animation-delay:.1s] sm:text-6xl">Un espacio seguro para volver a escucharte.</h1>
          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-ink-soft [animation-delay:.2s]">
            Soy {site.psychologist}. Acompaño a adultos y adolescentes en un proceso terapéutico a su ritmo, con respeto, confidencialidad y herramientas prácticas.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 [animation-delay:.3s] sm:flex-row">
            <Button href="/#contacto">Agendar una sesión</Button>
            <Button href="/#sobre-mi" variant="secondary">Conocer mi enfoque</Button>
          </div>
          <p className="rise mt-8 text-sm text-ink-soft [animation-delay:.4s]">Sesiones individuales · Atención presencial y online</p>
        </div>
        <div className="rise relative mx-auto w-full max-w-md [animation-delay:.25s] lg:max-w-none">
          <div aria-hidden className="absolute -bottom-5 -left-5 h-2/3 w-2/3 rounded-3xl bg-sand" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-sage-100">
            <Image src={images.hero.src} alt={images.hero.alt} fill priority sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
