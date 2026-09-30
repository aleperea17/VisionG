import { cases } from "@/content/cases";
import { Card } from "@/components/ui/Card";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Cases() {
  return (
    <section id="casos" className="scroll-mt-24 bg-black-950 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <GoldDivider className="mb-16" />
        <Reveal>
          <SectionHeading label="CASOS" title="Experiencia trabajando con negocios digitales">
            <p>
              Hemos trabajado con negocios digitales en distintas industrias, ayudándolos a mejorar sus procesos de
              marketing, ventas y conversión.
            </p>
          </SectionHeading>
        </Reveal>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {cases.map((item) => (
            <StaggerItem key={item.id}>
              <Card className="flex h-full flex-col">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">Caso {item.id}</p>
                <h3 className="mt-4 font-serif text-3xl text-ivory">{item.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory/80">{item.description}</p>
                {item.showMetric ? (
                  <div className="mt-8">
                    {item.progression ? (
                      <p className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
                        {item.progression.map((value, index) => (
                          <span key={value}>
                            <span className="gold-text">{value}</span>
                            {index < item.progression!.length - 1 ? (
                              <span className="mx-1 text-gold-500" aria-hidden="true">
                                {" → "}
                              </span>
                            ) : null}
                          </span>
                        ))}
                      </p>
                    ) : (
                      <p className="gold-text font-serif text-3xl font-semibold leading-tight md:text-4xl">{item.metric}</p>
                    )}
                    <p className="mt-3 text-xs text-muted">{item.context}</p>
                  </div>
                ) : null}
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-muted">
          Los resultados mostrados corresponden a proyectos específicos y no constituyen una garantía de resultados
          futuros. Los resultados pueden variar según el negocio, mercado, oferta, ejecución y otros factores.
        </p>
      </div>
    </section>
  );
}
