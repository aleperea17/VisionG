import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";

export type RichSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export const refundsUpdated = "30 de septiembre de 2026";

const p = "text-base leading-[1.7] text-ivory/85";
const list = "list-disc space-y-2 pl-5 text-ivory/85";

function ContactEmail() {
  return (
    <a href={`mailto:${site.email}`} className="text-gold-400 underline-offset-4 hover:underline">
      {site.email}
    </a>
  );
}

export const refundSections: RichSection[] = [
  {
    id: "naturaleza",
    title: "Naturaleza del servicio",
    body: (
      <p className={p}>
        Los servicios de consultoría y acompañamiento de VisionG son servicios profesionales personalizados. Se
        prestan de acuerdo con el alcance, duración y condiciones establecidos en la propuesta o contrato
        correspondiente.
      </p>
    ),
  },
  {
    id: "reembolsos",
    title: "Reembolsos",
    body: (
      <div className="space-y-4">
        <p className={p}>
          Por su naturaleza, no se establece un derecho automático a reembolso simplemente por disconformidad con
          los resultados obtenidos. Cada solicitud se evalúa según:
        </p>
        <ul className={list}>
          <li>Los términos del servicio contratado.</li>
          <li>El contrato firmado entre las partes.</li>
          <li>El grado de prestación del servicio.</li>
          <li>Las circunstancias particulares del caso.</li>
        </ul>
        <p className={p}>
          Los servicios ya prestados o trabajos ya iniciados podrán no ser reembolsables cuando así se haya
          establecido previamente.
        </p>
      </div>
    ),
  },
  {
    id: "cancelacion",
    title: "Cancelación y terminación",
    body: (
      <p className={p}>
        Cualquiera de las partes podrá solicitar la terminación del servicio por incumplimiento grave de la otra
        parte. Cuando el incumplimiento sea subsanable, se otorgará un plazo de 7 días para corregirlo. Las
        consecuencias económicas de la terminación se rigen por lo establecido en el contrato firmado entre las
        partes.
      </p>
    ),
  },
  {
    id: "solicitud",
    title: "Cómo solicitar una cancelación o reembolso",
    body: (
      <p className={p}>
        Las solicitudes deben enviarse por escrito al email de contacto de VisionG (<ContactEmail />), indicando
        nombre, negocio y motivo de la solicitud.
      </p>
    ),
  },
  {
    id: "plazos",
    title: "Plazos de respuesta",
    body: (
      <p className={p}>
        VisionG responderá las solicitudes dentro de un plazo máximo de 5 días hábiles desde su recepción.
      </p>
    ),
  },
  {
    id: "disputas",
    title: "Disputas",
    body: (
      <div className="space-y-4">
        <p className={p}>
          Antes de iniciar una disputa o contracargo con tu banco o procesador de pagos, te pedimos que nos
          contactes directamente para intentar resolver la situación.
        </p>
        <p className={p}>
          Para más detalle, consulta nuestros{" "}
          <Link href="/terminos" className="text-gold-400 underline-offset-4 hover:underline">
            Términos y Condiciones
          </Link>
          .
        </p>
      </div>
    ),
  },
];
