import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Solicitud enviada",
  description: "Confirmación de recepción de tu solicitud de consulta a VisionG LLC.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center px-4 py-32">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">Contacto</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold text-ivory md:text-5xl">Gracias. Recibimos tu solicitud.</h1>
      <p className="mt-6 max-w-xl text-base leading-[1.7] text-ivory/85 md:text-lg">
        Revisaremos la información y te contactaremos por email si existe una oportunidad de trabajo conjunto.
      </p>
      <div className="mt-10">
        <Button href="/" variant="secondary">
          Volver al inicio
        </Button>
      </div>
    </section>
  );
}
