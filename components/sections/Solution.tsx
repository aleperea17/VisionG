import { pillars } from "@/content/pillars";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Solution() {
  return (
    <section className="bg-black-950 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <GoldDivider className="mb-16" />
        <Reveal>
          <SectionHeading label="LA SOLUCIÓN" title="Convertimos marketing y ventas en un sistema.">
            <p>
              En VisionG analizamos el funcionamiento actual del negocio, identificamos oportunidades de mejora y
              desarrollamos estrategias y procesos adaptados a sus objetivos.
            </p>
            <p>
              Nuestro trabajo combina consultoría estratégica, marketing, sistemas comerciales y acompañamiento
              durante la implementación.
            </p>
          </SectionHeading>
        </Reveal>

        <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          <div
            className="pointer-events-none absolute left-[8%] right-[8%] top-4 hidden h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent md:block"
            aria-hidden="true"
          />
          {pillars.map((pillar) => (
            <Reveal key={pillar.number}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">{pillar.number} —</p>
              <h3 className="mt-3 font-serif text-2xl text-ivory">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/80 md:text-base">{pillar.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
