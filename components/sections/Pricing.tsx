import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <section className="bg-black-950 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gold-500/50 bg-black-900 px-6 py-10 text-center md:px-12 md:py-14">
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-semibold text-ivory">Consultoría personalizada</h2>
          <div className="mt-6 space-y-4 text-base leading-[1.7] text-ivory/85">
            <p>El precio del servicio depende del alcance, duración y necesidades específicas de cada proyecto.</p>
            <p>Para conocer disponibilidad y recibir una propuesta, contáctanos.</p>
          </div>
          <div className="mt-8">
            <Button href="#contacto">Solicitar una consulta</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
