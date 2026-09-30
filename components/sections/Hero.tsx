import { Button } from "@/components/ui/Button";
import { Portrait } from "@/components/ui/Portrait";
import { Reveal } from "@/components/ui/Reveal";

const highlights = ["Consultoría personalizada", "Marketing", "Ventas"];

export function Hero() {
  return (
    <section id="inicio" className="relative scroll-mt-24 overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
      <div
        className="pointer-events-none absolute -right-16 top-8 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(201,162,74,0.12),transparent_68%)]"
        aria-hidden="true"
      />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] text-ivory">
            Construimos <span className="gold-text">sistemas de marketing y ventas</span> para negocios digitales.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-[1.7] text-ivory/85 md:text-lg">
            Ayudamos a emprendedores, infoproductores y negocios digitales a estructurar y optimizar sus procesos de
            marketing y ventas mediante consultoría estratégica, sistemas comerciales y acompañamiento en la
            implementación.
          </p>
          <div className="mt-8">
            <Button href="#contacto">Solicitar una consulta</Button>
          </div>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
            {highlights.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {index > 0 ? <span className="text-gold-500" aria-hidden="true">·</span> : null}
                {item}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <Portrait alt="Retrato profesional de Nicolás Aliaga, founder de VisionG" />
        </Reveal>
      </div>
    </section>
  );
}
