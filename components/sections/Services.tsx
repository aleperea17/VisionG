import { services } from "@/content/services";
import { Card } from "@/components/ui/Card";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-black-900 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <GoldDivider className="mb-16" />
        <Reveal>
          <SectionHeading label="SERVICIOS" title="Nuestros servicios" />
        </Reveal>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <Card className="h-full">
                <p className="font-serif text-3xl text-gold-500">{service.number}</p>
                <h3 className="mt-4 font-serif text-2xl text-ivory">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/85 md:text-base">{service.description}</p>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-gold-400">{service.includesLabel}</p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ivory/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
