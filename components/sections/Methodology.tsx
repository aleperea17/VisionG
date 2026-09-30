import { methodologySteps } from "@/content/methodology";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Methodology() {
  return (
    <section className="bg-black-950 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <GoldDivider className="mb-16" />
        <Reveal>
          <SectionHeading
            label="METODOLOGÍA"
            title="Un enfoque basado en diagnóstico, implementación y mejora continua."
          />
        </Reveal>
        <ol className="mt-12 flex flex-col items-start gap-3 md:flex-row md:flex-wrap md:items-center md:gap-4">
          {methodologySteps.map((step, index) => (
            <li key={step} className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
              <span className="rounded-full border border-gold-500/70 px-4 py-2 text-sm text-ivory">{step}</span>
              {index < methodologySteps.length - 1 ? (
                <>
                  <span className="hidden text-gold-500 md:inline" aria-hidden="true">
                    →
                  </span>
                  <span className="text-gold-500 md:hidden" aria-hidden="true">
                    ↓
                  </span>
                </>
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-base leading-[1.7] text-ivory/85">
          No aplicamos una estructura idéntica a todos los negocios. La estrategia se adapta al modelo, oferta,
          mercado, recursos y situación actual de cada cliente.
        </p>
      </div>
    </section>
  );
}
