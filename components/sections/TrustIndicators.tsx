import { trust } from "@/data/content";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function TrustIndicators() {
  return (
    <section aria-label="Principios de atención" className="border-b border-sage-200/60 bg-ivory py-10">
      <Container>
        <Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex items-start gap-3">
                <Icon aria-hidden className="mt-0.5 size-6 shrink-0 text-sage-600" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-sage-900">{title}</p>
                  <p className="text-sm text-ink-soft">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
