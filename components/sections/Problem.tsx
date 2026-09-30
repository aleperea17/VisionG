import { problems } from "@/content/problems";
import { Card } from "@/components/ui/Card";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Problem() {
  return (
    <section className="bg-black-900 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <GoldDivider className="mb-16" />
        <Reveal>
          <SectionHeading label="EL PROBLEMA" title="El crecimiento no depende solamente de vender más.">
            <p>
              Muchos negocios digitales tienen una buena oferta, pero carecen de un sistema estructurado para atraer
              oportunidades, convertir prospectos y optimizar su proceso comercial.
            </p>
            <p>
              Esto puede generar dependencia de la improvisación, contenido sin una estrategia clara, procesos
              comerciales inconsistentes y dificultad para identificar qué está funcionando y qué necesita ser
              optimizado.
            </p>
          </SectionHeading>
        </Reveal>
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full">
                <item.icon className="h-6 w-6 text-gold-500" strokeWidth={1.25} aria-hidden="true" />
                <h3 className="mt-6 font-serif text-2xl text-ivory">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{item.text}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
