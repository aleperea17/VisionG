import { site } from "@/content/site";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Portrait } from "@/components/ui/Portrait";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-black-900 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <GoldDivider className="mb-16" />
        <Reveal>
          <SectionHeading label="NOSOTROS" title="Estrategia antes que improvisación.">
            <p>VisionG LLC es una empresa de consultoría y servicios de marketing y ventas para negocios digitales.</p>
            <p>
              Trabajamos junto a emprendedores, expertos, creadores e infoproductores para analizar sus sistemas
              actuales, identificar oportunidades y desarrollar procesos que les permitan tomar mejores decisiones en
              marketing y ventas.
            </p>
            <p>Nuestro enfoque combina estrategia, implementación y optimización.</p>
          </SectionHeading>
        </Reveal>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Portrait ratio="3/4" alt="Nicolás Aliaga, Founder & Consultant de VisionG" />
          <Reveal>
            <h3 className="font-serif text-4xl text-ivory">{site.founder.name}</h3>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-gold-500">{site.founder.role}</p>
            <p className="mt-6 max-w-md text-base leading-[1.7] text-ivory/85">{site.founder.bio}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
