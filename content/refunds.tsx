import type { ReactNode } from "react";
import { site } from "@/content/site";

export type RichSection = {
  id: string;
  title: string;
  body: ReactNode;
};

// TODO: alinear con los contratos reales
// TODO: reemplazar [FECHA] y [X días hábiles]
export const refundsUpdated = "[FECHA]";

const p = "text-base leading-[1.7] text-ivory/85";

export const refundSections: RichSection[] = [
  {
    id: "consultoria",
    title: "Servicios de consultoría",
    body: (
      <p className={p}>
        Los servicios de consultoría se prestan de acuerdo con el alcance, duración y condiciones establecidos en
        la propuesta o contrato correspondiente. Las solicitudes de cancelación y reembolso estarán sujetas a las
        condiciones específicas acordadas antes de la contratación.
      </p>
    ),
  },
  {
    id: "reembolsos",
    title: "Reembolsos y cancelaciones",
    body: (
      <p className={p}>
        Las condiciones de cancelación y reembolso dependen del servicio contratado y de las condiciones
        establecidas previamente en la propuesta o contrato correspondiente. Los servicios ya prestados o trabajos
        ya iniciados podrán no ser reembolsables cuando así se haya establecido previamente.
      </p>
    ),
  },
  {
    id: "solicitud",
    title: "Cómo solicitar una cancelación o reembolso",
    body: (
      <p className={p}>
        Escribe a {site.email} desde el email asociado a la contratación. Indica tu nombre, el servicio contratado
        y el motivo de la solicitud. Revisaremos el pedido conforme a lo acordado en la propuesta o contrato.
      </p>
    ),
  },
  {
    id: "plazos",
    title: "Plazos de respuesta",
    body: (
      <p className={p}>
        Responderemos a las solicitudes de cancelación o reembolso en un plazo de [X días hábiles] desde la
        recepción del email, salvo que el contrato aplicable indique otro plazo.
      </p>
    ),
  },
  {
    id: "disputas",
    title: "Disputas",
    body: (
      <p className={p}>
        Si tienes una discrepancia sobre un cobro, contáctanos primero a {site.email} para revisarla. Buscamos
        resolverla de forma directa antes de que inicies una disputa con tu banco o con el procesador de pagos.
      </p>
    ),
  },
];
