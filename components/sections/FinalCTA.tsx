import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black-900 py-24 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,162,74,0.12),transparent_68%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-3xl px-4 text-center">
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-tight text-ivory">
          ¿Quieres analizar tu sistema de marketing y ventas?
        </h2>
        <p className="mt-6 text-base leading-[1.7] text-ivory/85 md:text-lg">
          Cuéntanos sobre tu negocio, situación actual y principales objetivos. Evaluaremos si nuestros servicios son
          adecuados para ayudarte.
        </p>
        <div className="mt-8">
          <Button href="#contacto">Solicitar una consulta</Button>
        </div>
      </div>
    </section>
  );
}
