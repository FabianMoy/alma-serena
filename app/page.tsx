import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Modalities from "@/components/sections/Modalities";
import Process from "@/components/sections/Process";
import Specialties from "@/components/sections/Specialties";
import Testimonials from "@/components/sections/Testimonials";
import TrustIndicators from "@/components/sections/TrustIndicators";
import { images, site, socials } from "@/data/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}${images.hero.src}`,
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: "Monterrey", addressRegion: "Nuevo León", addressCountry: "MX" },
  areaServed: "Monterrey, Nuevo León",
  founder: { "@type": "Person", name: site.psychologist },
  sameAs: socials.map((s) => s.href),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <TrustIndicators />
      <About />
      <Specialties />
      <Process />
      <Modalities />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
